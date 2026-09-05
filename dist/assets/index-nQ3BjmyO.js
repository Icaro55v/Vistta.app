(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Dy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Jp={exports:{}},Ll={},Zp={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Li=Symbol.for("react.element"),Ly=Symbol.for("react.portal"),My=Symbol.for("react.fragment"),Fy=Symbol.for("react.strict_mode"),Uy=Symbol.for("react.profiler"),zy=Symbol.for("react.provider"),Vy=Symbol.for("react.context"),Wy=Symbol.for("react.forward_ref"),$y=Symbol.for("react.suspense"),By=Symbol.for("react.memo"),Hy=Symbol.for("react.lazy"),Rh=Symbol.iterator;function qy(t){return t===null||typeof t!="object"?null:(t=Rh&&t[Rh]||t["@@iterator"],typeof t=="function"?t:null)}var em={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tm=Object.assign,nm={};function cs(t,e,n){this.props=t,this.context=e,this.refs=nm,this.updater=n||em}cs.prototype.isReactComponent={};cs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};cs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function rm(){}rm.prototype=cs.prototype;function ju(t,e,n){this.props=t,this.context=e,this.refs=nm,this.updater=n||em}var Ou=ju.prototype=new rm;Ou.constructor=ju;tm(Ou,cs.prototype);Ou.isPureReactComponent=!0;var Ah=Array.isArray,sm=Object.prototype.hasOwnProperty,Du={current:null},im={key:!0,ref:!0,__self:!0,__source:!0};function om(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)sm.call(e,r)&&!im.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];s.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:Li,type:t,key:i,ref:o,props:s,_owner:Du.current}}function Gy(t,e){return{$$typeof:Li,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Lu(t){return typeof t=="object"&&t!==null&&t.$$typeof===Li}function Ky(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var jh=/\/+/g;function ka(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ky(""+t.key):e.toString(36)}function Eo(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Li:case Ly:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+ka(o,0):r,Ah(s)?(n="",t!=null&&(n=t.replace(jh,"$&/")+"/"),Eo(s,e,n,"",function(u){return u})):s!=null&&(Lu(s)&&(s=Gy(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(jh,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Ah(t))for(var l=0;l<t.length;l++){i=t[l];var a=r+ka(i,l);o+=Eo(i,e,n,a,s)}else if(a=qy(t),typeof a=="function")for(t=a.call(t),l=0;!(i=t.next()).done;)i=i.value,a=r+ka(i,l++),o+=Eo(i,e,n,a,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function no(t,e,n){if(t==null)return t;var r=[],s=0;return Eo(t,r,"","",function(i){return e.call(n,i,s++)}),r}function Qy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var $e={current:null},So={transition:null},Yy={ReactCurrentDispatcher:$e,ReactCurrentBatchConfig:So,ReactCurrentOwner:Du};function lm(){throw Error("act(...) is not supported in production builds of React.")}V.Children={map:no,forEach:function(t,e,n){no(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return no(t,function(){e++}),e},toArray:function(t){return no(t,function(e){return e})||[]},only:function(t){if(!Lu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};V.Component=cs;V.Fragment=My;V.Profiler=Uy;V.PureComponent=ju;V.StrictMode=Fy;V.Suspense=$y;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yy;V.act=lm;V.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=tm({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Du.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)sm.call(e,a)&&!im.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Li,type:t.type,key:s,ref:i,props:r,_owner:o}};V.createContext=function(t){return t={$$typeof:Vy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:zy,_context:t},t.Consumer=t};V.createElement=om;V.createFactory=function(t){var e=om.bind(null,t);return e.type=t,e};V.createRef=function(){return{current:null}};V.forwardRef=function(t){return{$$typeof:Wy,render:t}};V.isValidElement=Lu;V.lazy=function(t){return{$$typeof:Hy,_payload:{_status:-1,_result:t},_init:Qy}};V.memo=function(t,e){return{$$typeof:By,type:t,compare:e===void 0?null:e}};V.startTransition=function(t){var e=So.transition;So.transition={};try{t()}finally{So.transition=e}};V.unstable_act=lm;V.useCallback=function(t,e){return $e.current.useCallback(t,e)};V.useContext=function(t){return $e.current.useContext(t)};V.useDebugValue=function(){};V.useDeferredValue=function(t){return $e.current.useDeferredValue(t)};V.useEffect=function(t,e){return $e.current.useEffect(t,e)};V.useId=function(){return $e.current.useId()};V.useImperativeHandle=function(t,e,n){return $e.current.useImperativeHandle(t,e,n)};V.useInsertionEffect=function(t,e){return $e.current.useInsertionEffect(t,e)};V.useLayoutEffect=function(t,e){return $e.current.useLayoutEffect(t,e)};V.useMemo=function(t,e){return $e.current.useMemo(t,e)};V.useReducer=function(t,e,n){return $e.current.useReducer(t,e,n)};V.useRef=function(t){return $e.current.useRef(t)};V.useState=function(t){return $e.current.useState(t)};V.useSyncExternalStore=function(t,e,n){return $e.current.useSyncExternalStore(t,e,n)};V.useTransition=function(){return $e.current.useTransition()};V.version="18.3.1";Zp.exports=V;var P=Zp.exports;const oi=Dy(P);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xy=P,Jy=Symbol.for("react.element"),Zy=Symbol.for("react.fragment"),e0=Object.prototype.hasOwnProperty,t0=Xy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n0={key:!0,ref:!0,__self:!0,__source:!0};function am(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)e0.call(e,r)&&!n0.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:Jy,type:t,key:i,ref:o,props:s,_owner:t0.current}}Ll.Fragment=Zy;Ll.jsx=am;Ll.jsxs=am;Jp.exports=Ll;var c=Jp.exports,fc={},cm={exports:{}},rt={},um={exports:{}},dm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,D){var L=I.length;I.push(D);e:for(;0<L;){var J=L-1>>>1,pe=I[J];if(0<s(pe,D))I[J]=D,I[L]=pe,L=J;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var D=I[0],L=I.pop();if(L!==D){I[0]=L;e:for(var J=0,pe=I.length,Gn=pe>>>1;J<Gn;){var Lt=2*(J+1)-1,Er=I[Lt],bt=Lt+1,Ae=I[bt];if(0>s(Er,L))bt<pe&&0>s(Ae,Er)?(I[J]=Ae,I[bt]=L,J=bt):(I[J]=Er,I[Lt]=L,J=Lt);else if(bt<pe&&0>s(Ae,L))I[J]=Ae,I[bt]=L,J=bt;else break e}}return D}function s(I,D){var L=I.sortIndex-D.sortIndex;return L!==0?L:I.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],d=1,h=null,f=3,_=!1,p=!1,y=!1,w=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(I){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=I)r(u),D.sortIndex=D.expirationTime,e(a,D);else break;D=n(u)}}function x(I){if(y=!1,v(I),!p)if(n(a)!==null)p=!0,ws(S);else{var D=n(u);D!==null&&Cs(x,D.startTime-I)}}function S(I,D){p=!1,y&&(y=!1,m(R),R=-1),_=!0;var L=f;try{for(v(D),h=n(a);h!==null&&(!(h.expirationTime>D)||I&&!Xe());){var J=h.callback;if(typeof J=="function"){h.callback=null,f=h.priorityLevel;var pe=J(h.expirationTime<=D);D=t.unstable_now(),typeof pe=="function"?h.callback=pe:h===n(a)&&r(a),v(D)}else r(a);h=n(a)}if(h!==null)var Gn=!0;else{var Lt=n(u);Lt!==null&&Cs(x,Lt.startTime-D),Gn=!1}return Gn}finally{h=null,f=L,_=!1}}var T=!1,k=null,R=-1,X=5,M=-1;function Xe(){return!(t.unstable_now()-M<X)}function Hn(){if(k!==null){var I=t.unstable_now();M=I;var D=!0;try{D=k(!0,I)}finally{D?qn():(T=!1,k=null)}}else T=!1}var qn;if(typeof g=="function")qn=function(){g(Hn)};else if(typeof MessageChannel<"u"){var eo=new MessageChannel,wa=eo.port2;eo.port1.onmessage=Hn,qn=function(){wa.postMessage(null)}}else qn=function(){w(Hn,0)};function ws(I){k=I,T||(T=!0,qn())}function Cs(I,D){R=w(function(){I(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){p||_||(p=!0,ws(S))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(I){switch(f){case 1:case 2:case 3:var D=3;break;default:D=f}var L=f;f=D;try{return I()}finally{f=L}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,D){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var L=f;f=I;try{return D()}finally{f=L}},t.unstable_scheduleCallback=function(I,D,L){var J=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?J+L:J):L=J,I){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=L+pe,I={id:d++,callback:D,priorityLevel:I,startTime:L,expirationTime:pe,sortIndex:-1},L>J?(I.sortIndex=L,e(u,I),n(a)===null&&I===n(u)&&(y?(m(R),R=-1):y=!0,Cs(x,L-J))):(I.sortIndex=pe,e(a,I),p||_||(p=!0,ws(S))),I},t.unstable_shouldYield=Xe,t.unstable_wrapCallback=function(I){var D=f;return function(){var L=f;f=D;try{return I.apply(this,arguments)}finally{f=L}}}})(dm);um.exports=dm;var r0=um.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s0=P,tt=r0;function C(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var hm=new Set,li={};function _r(t,e){Yr(t,e),Yr(t+"Capture",e)}function Yr(t,e){for(li[t]=e,t=0;t<e.length;t++)hm.add(e[t])}var Xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pc=Object.prototype.hasOwnProperty,i0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Oh={},Dh={};function o0(t){return pc.call(Dh,t)?!0:pc.call(Oh,t)?!1:i0.test(t)?Dh[t]=!0:(Oh[t]=!0,!1)}function l0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function a0(t,e,n,r){if(e===null||typeof e>"u"||l0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Be(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var Pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Pe[t]=new Be(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Pe[e]=new Be(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Pe[t]=new Be(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Pe[t]=new Be(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Pe[t]=new Be(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Pe[t]=new Be(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Pe[t]=new Be(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Pe[t]=new Be(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Pe[t]=new Be(t,5,!1,t.toLowerCase(),null,!1,!1)});var Mu=/[\-:]([a-z])/g;function Fu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Mu,Fu);Pe[e]=new Be(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Mu,Fu);Pe[e]=new Be(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Mu,Fu);Pe[e]=new Be(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Pe[t]=new Be(t,1,!1,t.toLowerCase(),null,!1,!1)});Pe.xlinkHref=new Be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Pe[t]=new Be(t,1,!1,t.toLowerCase(),null,!0,!0)});function Uu(t,e,n,r){var s=Pe.hasOwnProperty(e)?Pe[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(a0(e,n,s,r)&&(n=null),r||s===null?o0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var sn=s0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ro=Symbol.for("react.element"),kr=Symbol.for("react.portal"),Ir=Symbol.for("react.fragment"),zu=Symbol.for("react.strict_mode"),mc=Symbol.for("react.profiler"),fm=Symbol.for("react.provider"),pm=Symbol.for("react.context"),Vu=Symbol.for("react.forward_ref"),gc=Symbol.for("react.suspense"),vc=Symbol.for("react.suspense_list"),Wu=Symbol.for("react.memo"),cn=Symbol.for("react.lazy"),mm=Symbol.for("react.offscreen"),Lh=Symbol.iterator;function Ns(t){return t===null||typeof t!="object"?null:(t=Lh&&t[Lh]||t["@@iterator"],typeof t=="function"?t:null)}var ce=Object.assign,Ia;function Fs(t){if(Ia===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ia=e&&e[1]||""}return`
`+Ia+t}var ba=!1;function Ta(t,e){if(!t||ba)return"";ba=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var s=u.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var a=`
`+s[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{ba=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Fs(t):""}function c0(t){switch(t.tag){case 5:return Fs(t.type);case 16:return Fs("Lazy");case 13:return Fs("Suspense");case 19:return Fs("SuspenseList");case 0:case 2:case 15:return t=Ta(t.type,!1),t;case 11:return t=Ta(t.type.render,!1),t;case 1:return t=Ta(t.type,!0),t;default:return""}}function _c(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ir:return"Fragment";case kr:return"Portal";case mc:return"Profiler";case zu:return"StrictMode";case gc:return"Suspense";case vc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case pm:return(t.displayName||"Context")+".Consumer";case fm:return(t._context.displayName||"Context")+".Provider";case Vu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Wu:return e=t.displayName||null,e!==null?e:_c(t.type)||"Memo";case cn:e=t._payload,t=t._init;try{return _c(t(e))}catch{}}return null}function u0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _c(e);case 8:return e===zu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function An(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function gm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function d0(t){var e=gm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function so(t){t._valueTracker||(t._valueTracker=d0(t))}function vm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=gm(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function zo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function yc(t,e){var n=e.checked;return ce({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Mh(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=An(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function _m(t,e){e=e.checked,e!=null&&Uu(t,"checked",e,!1)}function xc(t,e){_m(t,e);var n=An(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?wc(t,e.type,n):e.hasOwnProperty("defaultValue")&&wc(t,e.type,An(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Fh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function wc(t,e,n){(e!=="number"||zo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Us=Array.isArray;function zr(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+An(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Cc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(C(91));return ce({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Uh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(C(92));if(Us(n)){if(1<n.length)throw Error(C(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:An(n)}}function ym(t,e){var n=An(e.value),r=An(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function zh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function xm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ec(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?xm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var io,wm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(io=io||document.createElement("div"),io.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=io.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ai(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Bs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},h0=["Webkit","ms","Moz","O"];Object.keys(Bs).forEach(function(t){h0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Bs[e]=Bs[t]})});function Cm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Bs.hasOwnProperty(t)&&Bs[t]?(""+e).trim():e+"px"}function Em(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Cm(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var f0=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sc(t,e){if(e){if(f0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(C(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(C(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(C(61))}if(e.style!=null&&typeof e.style!="object")throw Error(C(62))}}function Nc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kc=null;function $u(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ic=null,Vr=null,Wr=null;function Vh(t){if(t=Ui(t)){if(typeof Ic!="function")throw Error(C(280));var e=t.stateNode;e&&(e=Vl(e),Ic(t.stateNode,t.type,e))}}function Sm(t){Vr?Wr?Wr.push(t):Wr=[t]:Vr=t}function Nm(){if(Vr){var t=Vr,e=Wr;if(Wr=Vr=null,Vh(t),e)for(t=0;t<e.length;t++)Vh(e[t])}}function km(t,e){return t(e)}function Im(){}var Pa=!1;function bm(t,e,n){if(Pa)return t(e,n);Pa=!0;try{return km(t,e,n)}finally{Pa=!1,(Vr!==null||Wr!==null)&&(Im(),Nm())}}function ci(t,e){var n=t.stateNode;if(n===null)return null;var r=Vl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(C(231,e,typeof n));return n}var bc=!1;if(Xt)try{var ks={};Object.defineProperty(ks,"passive",{get:function(){bc=!0}}),window.addEventListener("test",ks,ks),window.removeEventListener("test",ks,ks)}catch{bc=!1}function p0(t,e,n,r,s,i,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Hs=!1,Vo=null,Wo=!1,Tc=null,m0={onError:function(t){Hs=!0,Vo=t}};function g0(t,e,n,r,s,i,o,l,a){Hs=!1,Vo=null,p0.apply(m0,arguments)}function v0(t,e,n,r,s,i,o,l,a){if(g0.apply(this,arguments),Hs){if(Hs){var u=Vo;Hs=!1,Vo=null}else throw Error(C(198));Wo||(Wo=!0,Tc=u)}}function yr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Tm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Wh(t){if(yr(t)!==t)throw Error(C(188))}function _0(t){var e=t.alternate;if(!e){if(e=yr(t),e===null)throw Error(C(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Wh(s),t;if(i===r)return Wh(s),e;i=i.sibling}throw Error(C(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?t:e}function Pm(t){return t=_0(t),t!==null?Rm(t):null}function Rm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Rm(t);if(e!==null)return e;t=t.sibling}return null}var Am=tt.unstable_scheduleCallback,$h=tt.unstable_cancelCallback,y0=tt.unstable_shouldYield,x0=tt.unstable_requestPaint,ge=tt.unstable_now,w0=tt.unstable_getCurrentPriorityLevel,Bu=tt.unstable_ImmediatePriority,jm=tt.unstable_UserBlockingPriority,$o=tt.unstable_NormalPriority,C0=tt.unstable_LowPriority,Om=tt.unstable_IdlePriority,Ml=null,At=null;function E0(t){if(At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(Ml,t,void 0,(t.current.flags&128)===128)}catch{}}var wt=Math.clz32?Math.clz32:k0,S0=Math.log,N0=Math.LN2;function k0(t){return t>>>=0,t===0?32:31-(S0(t)/N0|0)|0}var oo=64,lo=4194304;function zs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Bo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=zs(l):(i&=o,i!==0&&(r=zs(i)))}else o=n&~s,o!==0?r=zs(o):i!==0&&(r=zs(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-wt(e),s=1<<n,r|=t[n],e&=~s;return r}function I0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function b0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-wt(i),l=1<<o,a=s[o];a===-1?(!(l&n)||l&r)&&(s[o]=I0(l,e)):a<=e&&(t.expiredLanes|=l),i&=~l}}function Pc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Dm(){var t=oo;return oo<<=1,!(oo&4194240)&&(oo=64),t}function Ra(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Mi(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-wt(e),t[e]=n}function T0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-wt(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Hu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-wt(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var G=0;function Lm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Mm,qu,Fm,Um,zm,Rc=!1,ao=[],yn=null,xn=null,wn=null,ui=new Map,di=new Map,dn=[],P0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bh(t,e){switch(t){case"focusin":case"focusout":yn=null;break;case"dragenter":case"dragleave":xn=null;break;case"mouseover":case"mouseout":wn=null;break;case"pointerover":case"pointerout":ui.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":di.delete(e.pointerId)}}function Is(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Ui(e),e!==null&&qu(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function R0(t,e,n,r,s){switch(e){case"focusin":return yn=Is(yn,t,e,n,r,s),!0;case"dragenter":return xn=Is(xn,t,e,n,r,s),!0;case"mouseover":return wn=Is(wn,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return ui.set(i,Is(ui.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,di.set(i,Is(di.get(i)||null,t,e,n,r,s)),!0}return!1}function Vm(t){var e=Jn(t.target);if(e!==null){var n=yr(e);if(n!==null){if(e=n.tag,e===13){if(e=Tm(n),e!==null){t.blockedOn=e,zm(t.priority,function(){Fm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function No(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ac(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);kc=r,n.target.dispatchEvent(r),kc=null}else return e=Ui(n),e!==null&&qu(e),t.blockedOn=n,!1;e.shift()}return!0}function Hh(t,e,n){No(t)&&n.delete(e)}function A0(){Rc=!1,yn!==null&&No(yn)&&(yn=null),xn!==null&&No(xn)&&(xn=null),wn!==null&&No(wn)&&(wn=null),ui.forEach(Hh),di.forEach(Hh)}function bs(t,e){t.blockedOn===e&&(t.blockedOn=null,Rc||(Rc=!0,tt.unstable_scheduleCallback(tt.unstable_NormalPriority,A0)))}function hi(t){function e(s){return bs(s,t)}if(0<ao.length){bs(ao[0],t);for(var n=1;n<ao.length;n++){var r=ao[n];r.blockedOn===t&&(r.blockedOn=null)}}for(yn!==null&&bs(yn,t),xn!==null&&bs(xn,t),wn!==null&&bs(wn,t),ui.forEach(e),di.forEach(e),n=0;n<dn.length;n++)r=dn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<dn.length&&(n=dn[0],n.blockedOn===null);)Vm(n),n.blockedOn===null&&dn.shift()}var $r=sn.ReactCurrentBatchConfig,Ho=!0;function j0(t,e,n,r){var s=G,i=$r.transition;$r.transition=null;try{G=1,Gu(t,e,n,r)}finally{G=s,$r.transition=i}}function O0(t,e,n,r){var s=G,i=$r.transition;$r.transition=null;try{G=4,Gu(t,e,n,r)}finally{G=s,$r.transition=i}}function Gu(t,e,n,r){if(Ho){var s=Ac(t,e,n,r);if(s===null)Va(t,e,r,qo,n),Bh(t,r);else if(R0(s,t,e,n,r))r.stopPropagation();else if(Bh(t,r),e&4&&-1<P0.indexOf(t)){for(;s!==null;){var i=Ui(s);if(i!==null&&Mm(i),i=Ac(t,e,n,r),i===null&&Va(t,e,r,qo,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Va(t,e,r,null,n)}}var qo=null;function Ac(t,e,n,r){if(qo=null,t=$u(r),t=Jn(t),t!==null)if(e=yr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Tm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return qo=t,null}function Wm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(w0()){case Bu:return 1;case jm:return 4;case $o:case C0:return 16;case Om:return 536870912;default:return 16}default:return 16}}var gn=null,Ku=null,ko=null;function $m(){if(ko)return ko;var t,e=Ku,n=e.length,r,s="value"in gn?gn.value:gn.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return ko=s.slice(t,1<r?1-r:void 0)}function Io(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function co(){return!0}function qh(){return!1}function st(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?co:qh,this.isPropagationStopped=qh,this}return ce(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=co)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=co)},persist:function(){},isPersistent:co}),e}var us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qu=st(us),Fi=ce({},us,{view:0,detail:0}),D0=st(Fi),Aa,ja,Ts,Fl=ce({},Fi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ts&&(Ts&&t.type==="mousemove"?(Aa=t.screenX-Ts.screenX,ja=t.screenY-Ts.screenY):ja=Aa=0,Ts=t),Aa)},movementY:function(t){return"movementY"in t?t.movementY:ja}}),Gh=st(Fl),L0=ce({},Fl,{dataTransfer:0}),M0=st(L0),F0=ce({},Fi,{relatedTarget:0}),Oa=st(F0),U0=ce({},us,{animationName:0,elapsedTime:0,pseudoElement:0}),z0=st(U0),V0=ce({},us,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),W0=st(V0),$0=ce({},us,{data:0}),Kh=st($0),B0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},H0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},q0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function G0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=q0[t])?!!e[t]:!1}function Yu(){return G0}var K0=ce({},Fi,{key:function(t){if(t.key){var e=B0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Io(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?H0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yu,charCode:function(t){return t.type==="keypress"?Io(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Io(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Q0=st(K0),Y0=ce({},Fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qh=st(Y0),X0=ce({},Fi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yu}),J0=st(X0),Z0=ce({},us,{propertyName:0,elapsedTime:0,pseudoElement:0}),ex=st(Z0),tx=ce({},Fl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),nx=st(tx),rx=[9,13,27,32],Xu=Xt&&"CompositionEvent"in window,qs=null;Xt&&"documentMode"in document&&(qs=document.documentMode);var sx=Xt&&"TextEvent"in window&&!qs,Bm=Xt&&(!Xu||qs&&8<qs&&11>=qs),Yh=" ",Xh=!1;function Hm(t,e){switch(t){case"keyup":return rx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var br=!1;function ix(t,e){switch(t){case"compositionend":return qm(e);case"keypress":return e.which!==32?null:(Xh=!0,Yh);case"textInput":return t=e.data,t===Yh&&Xh?null:t;default:return null}}function ox(t,e){if(br)return t==="compositionend"||!Xu&&Hm(t,e)?(t=$m(),ko=Ku=gn=null,br=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Bm&&e.locale!=="ko"?null:e.data;default:return null}}var lx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!lx[t.type]:e==="textarea"}function Gm(t,e,n,r){Sm(r),e=Go(e,"onChange"),0<e.length&&(n=new Qu("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Gs=null,fi=null;function ax(t){sg(t,0)}function Ul(t){var e=Rr(t);if(vm(e))return t}function cx(t,e){if(t==="change")return e}var Km=!1;if(Xt){var Da;if(Xt){var La="oninput"in document;if(!La){var Zh=document.createElement("div");Zh.setAttribute("oninput","return;"),La=typeof Zh.oninput=="function"}Da=La}else Da=!1;Km=Da&&(!document.documentMode||9<document.documentMode)}function ef(){Gs&&(Gs.detachEvent("onpropertychange",Qm),fi=Gs=null)}function Qm(t){if(t.propertyName==="value"&&Ul(fi)){var e=[];Gm(e,fi,t,$u(t)),bm(ax,e)}}function ux(t,e,n){t==="focusin"?(ef(),Gs=e,fi=n,Gs.attachEvent("onpropertychange",Qm)):t==="focusout"&&ef()}function dx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ul(fi)}function hx(t,e){if(t==="click")return Ul(e)}function fx(t,e){if(t==="input"||t==="change")return Ul(e)}function px(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Nt=typeof Object.is=="function"?Object.is:px;function pi(t,e){if(Nt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!pc.call(e,s)||!Nt(t[s],e[s]))return!1}return!0}function tf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function nf(t,e){var n=tf(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tf(n)}}function Ym(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ym(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Xm(){for(var t=window,e=zo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=zo(t.document)}return e}function Ju(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function mx(t){var e=Xm(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ym(n.ownerDocument.documentElement,n)){if(r!==null&&Ju(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=nf(n,i);var o=nf(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var gx=Xt&&"documentMode"in document&&11>=document.documentMode,Tr=null,jc=null,Ks=null,Oc=!1;function rf(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Oc||Tr==null||Tr!==zo(r)||(r=Tr,"selectionStart"in r&&Ju(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ks&&pi(Ks,r)||(Ks=r,r=Go(jc,"onSelect"),0<r.length&&(e=new Qu("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Tr)))}function uo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Pr={animationend:uo("Animation","AnimationEnd"),animationiteration:uo("Animation","AnimationIteration"),animationstart:uo("Animation","AnimationStart"),transitionend:uo("Transition","TransitionEnd")},Ma={},Jm={};Xt&&(Jm=document.createElement("div").style,"AnimationEvent"in window||(delete Pr.animationend.animation,delete Pr.animationiteration.animation,delete Pr.animationstart.animation),"TransitionEvent"in window||delete Pr.transitionend.transition);function zl(t){if(Ma[t])return Ma[t];if(!Pr[t])return t;var e=Pr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Jm)return Ma[t]=e[n];return t}var Zm=zl("animationend"),eg=zl("animationiteration"),tg=zl("animationstart"),ng=zl("transitionend"),rg=new Map,sf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fn(t,e){rg.set(t,e),_r(e,[t])}for(var Fa=0;Fa<sf.length;Fa++){var Ua=sf[Fa],vx=Ua.toLowerCase(),_x=Ua[0].toUpperCase()+Ua.slice(1);Fn(vx,"on"+_x)}Fn(Zm,"onAnimationEnd");Fn(eg,"onAnimationIteration");Fn(tg,"onAnimationStart");Fn("dblclick","onDoubleClick");Fn("focusin","onFocus");Fn("focusout","onBlur");Fn(ng,"onTransitionEnd");Yr("onMouseEnter",["mouseout","mouseover"]);Yr("onMouseLeave",["mouseout","mouseover"]);Yr("onPointerEnter",["pointerout","pointerover"]);Yr("onPointerLeave",["pointerout","pointerover"]);_r("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_r("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_r("onBeforeInput",["compositionend","keypress","textInput","paste"]);_r("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_r("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_r("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vs));function of(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,v0(r,e,void 0,t),t.currentTarget=null}function sg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==i&&s.isPropagationStopped())break e;of(s,l,u),i=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==i&&s.isPropagationStopped())break e;of(s,l,u),i=a}}}if(Wo)throw t=Tc,Wo=!1,Tc=null,t}function ne(t,e){var n=e[Uc];n===void 0&&(n=e[Uc]=new Set);var r=t+"__bubble";n.has(r)||(ig(e,t,2,!1),n.add(r))}function za(t,e,n){var r=0;e&&(r|=4),ig(n,t,r,e)}var ho="_reactListening"+Math.random().toString(36).slice(2);function mi(t){if(!t[ho]){t[ho]=!0,hm.forEach(function(n){n!=="selectionchange"&&(yx.has(n)||za(n,!1,t),za(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ho]||(e[ho]=!0,za("selectionchange",!1,e))}}function ig(t,e,n,r){switch(Wm(e)){case 1:var s=j0;break;case 4:s=O0;break;default:s=Gu}n=s.bind(null,e,n,t),s=void 0,!bc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Va(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===s||a.nodeType===8&&a.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Jn(l),o===null)return;if(a=o.tag,a===5||a===6){r=i=o;continue e}l=l.parentNode}}r=r.return}bm(function(){var u=i,d=$u(n),h=[];e:{var f=rg.get(t);if(f!==void 0){var _=Qu,p=t;switch(t){case"keypress":if(Io(n)===0)break e;case"keydown":case"keyup":_=Q0;break;case"focusin":p="focus",_=Oa;break;case"focusout":p="blur",_=Oa;break;case"beforeblur":case"afterblur":_=Oa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Gh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=M0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=J0;break;case Zm:case eg:case tg:_=z0;break;case ng:_=ex;break;case"scroll":_=D0;break;case"wheel":_=nx;break;case"copy":case"cut":case"paste":_=W0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Qh}var y=(e&4)!==0,w=!y&&t==="scroll",m=y?f!==null?f+"Capture":null:f;y=[];for(var g=u,v;g!==null;){v=g;var x=v.stateNode;if(v.tag===5&&x!==null&&(v=x,m!==null&&(x=ci(g,m),x!=null&&y.push(gi(g,x,v)))),w)break;g=g.return}0<y.length&&(f=new _(f,p,null,n,d),h.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",f&&n!==kc&&(p=n.relatedTarget||n.fromElement)&&(Jn(p)||p[Jt]))break e;if((_||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,_?(p=n.relatedTarget||n.toElement,_=u,p=p?Jn(p):null,p!==null&&(w=yr(p),p!==w||p.tag!==5&&p.tag!==6)&&(p=null)):(_=null,p=u),_!==p)){if(y=Gh,x="onMouseLeave",m="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(y=Qh,x="onPointerLeave",m="onPointerEnter",g="pointer"),w=_==null?f:Rr(_),v=p==null?f:Rr(p),f=new y(x,g+"leave",_,n,d),f.target=w,f.relatedTarget=v,x=null,Jn(d)===u&&(y=new y(m,g+"enter",p,n,d),y.target=v,y.relatedTarget=w,x=y),w=x,_&&p)t:{for(y=_,m=p,g=0,v=y;v;v=Sr(v))g++;for(v=0,x=m;x;x=Sr(x))v++;for(;0<g-v;)y=Sr(y),g--;for(;0<v-g;)m=Sr(m),v--;for(;g--;){if(y===m||m!==null&&y===m.alternate)break t;y=Sr(y),m=Sr(m)}y=null}else y=null;_!==null&&lf(h,f,_,y,!1),p!==null&&w!==null&&lf(h,w,p,y,!0)}}e:{if(f=u?Rr(u):window,_=f.nodeName&&f.nodeName.toLowerCase(),_==="select"||_==="input"&&f.type==="file")var S=cx;else if(Jh(f))if(Km)S=fx;else{S=dx;var T=ux}else(_=f.nodeName)&&_.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=hx);if(S&&(S=S(t,u))){Gm(h,S,n,d);break e}T&&T(t,f,u),t==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&wc(f,"number",f.value)}switch(T=u?Rr(u):window,t){case"focusin":(Jh(T)||T.contentEditable==="true")&&(Tr=T,jc=u,Ks=null);break;case"focusout":Ks=jc=Tr=null;break;case"mousedown":Oc=!0;break;case"contextmenu":case"mouseup":case"dragend":Oc=!1,rf(h,n,d);break;case"selectionchange":if(gx)break;case"keydown":case"keyup":rf(h,n,d)}var k;if(Xu)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else br?Hm(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Bm&&n.locale!=="ko"&&(br||R!=="onCompositionStart"?R==="onCompositionEnd"&&br&&(k=$m()):(gn=d,Ku="value"in gn?gn.value:gn.textContent,br=!0)),T=Go(u,R),0<T.length&&(R=new Kh(R,t,null,n,d),h.push({event:R,listeners:T}),k?R.data=k:(k=qm(n),k!==null&&(R.data=k)))),(k=sx?ix(t,n):ox(t,n))&&(u=Go(u,"onBeforeInput"),0<u.length&&(d=new Kh("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:u}),d.data=k))}sg(h,e)})}function gi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Go(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=ci(t,n),i!=null&&r.unshift(gi(t,i,s)),i=ci(t,e),i!=null&&r.push(gi(t,i,s))),t=t.return}return r}function Sr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function lf(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,s?(a=ci(n,i),a!=null&&o.unshift(gi(n,a,l))):s||(a=ci(n,i),a!=null&&o.push(gi(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var xx=/\r\n?/g,wx=/\u0000|\uFFFD/g;function af(t){return(typeof t=="string"?t:""+t).replace(xx,`
`).replace(wx,"")}function fo(t,e,n){if(e=af(e),af(t)!==e&&n)throw Error(C(425))}function Ko(){}var Dc=null,Lc=null;function Mc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Fc=typeof setTimeout=="function"?setTimeout:void 0,Cx=typeof clearTimeout=="function"?clearTimeout:void 0,cf=typeof Promise=="function"?Promise:void 0,Ex=typeof queueMicrotask=="function"?queueMicrotask:typeof cf<"u"?function(t){return cf.resolve(null).then(t).catch(Sx)}:Fc;function Sx(t){setTimeout(function(){throw t})}function Wa(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),hi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);hi(e)}function Cn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function uf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ds=Math.random().toString(36).slice(2),Rt="__reactFiber$"+ds,vi="__reactProps$"+ds,Jt="__reactContainer$"+ds,Uc="__reactEvents$"+ds,Nx="__reactListeners$"+ds,kx="__reactHandles$"+ds;function Jn(t){var e=t[Rt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Jt]||n[Rt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=uf(t);t!==null;){if(n=t[Rt])return n;t=uf(t)}return e}t=n,n=t.parentNode}return null}function Ui(t){return t=t[Rt]||t[Jt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Rr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(C(33))}function Vl(t){return t[vi]||null}var zc=[],Ar=-1;function Un(t){return{current:t}}function re(t){0>Ar||(t.current=zc[Ar],zc[Ar]=null,Ar--)}function te(t,e){Ar++,zc[Ar]=t.current,t.current=e}var jn={},Le=Un(jn),Ke=Un(!1),or=jn;function Xr(t,e){var n=t.type.contextTypes;if(!n)return jn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Qe(t){return t=t.childContextTypes,t!=null}function Qo(){re(Ke),re(Le)}function df(t,e,n){if(Le.current!==jn)throw Error(C(168));te(Le,e),te(Ke,n)}function og(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(C(108,u0(t)||"Unknown",s));return ce({},n,r)}function Yo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||jn,or=Le.current,te(Le,t),te(Ke,Ke.current),!0}function hf(t,e,n){var r=t.stateNode;if(!r)throw Error(C(169));n?(t=og(t,e,or),r.__reactInternalMemoizedMergedChildContext=t,re(Ke),re(Le),te(Le,t)):re(Ke),te(Ke,n)}var Ft=null,Wl=!1,$a=!1;function lg(t){Ft===null?Ft=[t]:Ft.push(t)}function Ix(t){Wl=!0,lg(t)}function zn(){if(!$a&&Ft!==null){$a=!0;var t=0,e=G;try{var n=Ft;for(G=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ft=null,Wl=!1}catch(s){throw Ft!==null&&(Ft=Ft.slice(t+1)),Am(Bu,zn),s}finally{G=e,$a=!1}}return null}var jr=[],Or=0,Xo=null,Jo=0,it=[],ot=0,lr=null,Wt=1,$t="";function Kn(t,e){jr[Or++]=Jo,jr[Or++]=Xo,Xo=t,Jo=e}function ag(t,e,n){it[ot++]=Wt,it[ot++]=$t,it[ot++]=lr,lr=t;var r=Wt;t=$t;var s=32-wt(r)-1;r&=~(1<<s),n+=1;var i=32-wt(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Wt=1<<32-wt(e)+s|n<<s|r,$t=i+t}else Wt=1<<i|n<<s|r,$t=t}function Zu(t){t.return!==null&&(Kn(t,1),ag(t,1,0))}function ed(t){for(;t===Xo;)Xo=jr[--Or],jr[Or]=null,Jo=jr[--Or],jr[Or]=null;for(;t===lr;)lr=it[--ot],it[ot]=null,$t=it[--ot],it[ot]=null,Wt=it[--ot],it[ot]=null}var et=null,Ze=null,ie=!1,vt=null;function cg(t,e){var n=lt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ff(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,et=t,Ze=Cn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,et=t,Ze=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=lr!==null?{id:Wt,overflow:$t}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=lt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,et=t,Ze=null,!0):!1;default:return!1}}function Vc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Wc(t){if(ie){var e=Ze;if(e){var n=e;if(!ff(t,e)){if(Vc(t))throw Error(C(418));e=Cn(n.nextSibling);var r=et;e&&ff(t,e)?cg(r,n):(t.flags=t.flags&-4097|2,ie=!1,et=t)}}else{if(Vc(t))throw Error(C(418));t.flags=t.flags&-4097|2,ie=!1,et=t}}}function pf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;et=t}function po(t){if(t!==et)return!1;if(!ie)return pf(t),ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Mc(t.type,t.memoizedProps)),e&&(e=Ze)){if(Vc(t))throw ug(),Error(C(418));for(;e;)cg(t,e),e=Cn(e.nextSibling)}if(pf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(C(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ze=Cn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ze=null}}else Ze=et?Cn(t.stateNode.nextSibling):null;return!0}function ug(){for(var t=Ze;t;)t=Cn(t.nextSibling)}function Jr(){Ze=et=null,ie=!1}function td(t){vt===null?vt=[t]:vt.push(t)}var bx=sn.ReactCurrentBatchConfig;function Ps(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,t))}return t}function mo(t,e){throw t=Object.prototype.toString.call(e),Error(C(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function mf(t){var e=t._init;return e(t._payload)}function dg(t){function e(m,g){if(t){var v=m.deletions;v===null?(m.deletions=[g],m.flags|=16):v.push(g)}}function n(m,g){if(!t)return null;for(;g!==null;)e(m,g),g=g.sibling;return null}function r(m,g){for(m=new Map;g!==null;)g.key!==null?m.set(g.key,g):m.set(g.index,g),g=g.sibling;return m}function s(m,g){return m=kn(m,g),m.index=0,m.sibling=null,m}function i(m,g,v){return m.index=v,t?(v=m.alternate,v!==null?(v=v.index,v<g?(m.flags|=2,g):v):(m.flags|=2,g)):(m.flags|=1048576,g)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function l(m,g,v,x){return g===null||g.tag!==6?(g=Ya(v,m.mode,x),g.return=m,g):(g=s(g,v),g.return=m,g)}function a(m,g,v,x){var S=v.type;return S===Ir?d(m,g,v.props.children,x,v.key):g!==null&&(g.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===cn&&mf(S)===g.type)?(x=s(g,v.props),x.ref=Ps(m,g,v),x.return=m,x):(x=Oo(v.type,v.key,v.props,null,m.mode,x),x.ref=Ps(m,g,v),x.return=m,x)}function u(m,g,v,x){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=Xa(v,m.mode,x),g.return=m,g):(g=s(g,v.children||[]),g.return=m,g)}function d(m,g,v,x,S){return g===null||g.tag!==7?(g=sr(v,m.mode,x,S),g.return=m,g):(g=s(g,v),g.return=m,g)}function h(m,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Ya(""+g,m.mode,v),g.return=m,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ro:return v=Oo(g.type,g.key,g.props,null,m.mode,v),v.ref=Ps(m,null,g),v.return=m,v;case kr:return g=Xa(g,m.mode,v),g.return=m,g;case cn:var x=g._init;return h(m,x(g._payload),v)}if(Us(g)||Ns(g))return g=sr(g,m.mode,v,null),g.return=m,g;mo(m,g)}return null}function f(m,g,v,x){var S=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return S!==null?null:l(m,g,""+v,x);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ro:return v.key===S?a(m,g,v,x):null;case kr:return v.key===S?u(m,g,v,x):null;case cn:return S=v._init,f(m,g,S(v._payload),x)}if(Us(v)||Ns(v))return S!==null?null:d(m,g,v,x,null);mo(m,v)}return null}function _(m,g,v,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return m=m.get(v)||null,l(g,m,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ro:return m=m.get(x.key===null?v:x.key)||null,a(g,m,x,S);case kr:return m=m.get(x.key===null?v:x.key)||null,u(g,m,x,S);case cn:var T=x._init;return _(m,g,v,T(x._payload),S)}if(Us(x)||Ns(x))return m=m.get(v)||null,d(g,m,x,S,null);mo(g,x)}return null}function p(m,g,v,x){for(var S=null,T=null,k=g,R=g=0,X=null;k!==null&&R<v.length;R++){k.index>R?(X=k,k=null):X=k.sibling;var M=f(m,k,v[R],x);if(M===null){k===null&&(k=X);break}t&&k&&M.alternate===null&&e(m,k),g=i(M,g,R),T===null?S=M:T.sibling=M,T=M,k=X}if(R===v.length)return n(m,k),ie&&Kn(m,R),S;if(k===null){for(;R<v.length;R++)k=h(m,v[R],x),k!==null&&(g=i(k,g,R),T===null?S=k:T.sibling=k,T=k);return ie&&Kn(m,R),S}for(k=r(m,k);R<v.length;R++)X=_(k,m,R,v[R],x),X!==null&&(t&&X.alternate!==null&&k.delete(X.key===null?R:X.key),g=i(X,g,R),T===null?S=X:T.sibling=X,T=X);return t&&k.forEach(function(Xe){return e(m,Xe)}),ie&&Kn(m,R),S}function y(m,g,v,x){var S=Ns(v);if(typeof S!="function")throw Error(C(150));if(v=S.call(v),v==null)throw Error(C(151));for(var T=S=null,k=g,R=g=0,X=null,M=v.next();k!==null&&!M.done;R++,M=v.next()){k.index>R?(X=k,k=null):X=k.sibling;var Xe=f(m,k,M.value,x);if(Xe===null){k===null&&(k=X);break}t&&k&&Xe.alternate===null&&e(m,k),g=i(Xe,g,R),T===null?S=Xe:T.sibling=Xe,T=Xe,k=X}if(M.done)return n(m,k),ie&&Kn(m,R),S;if(k===null){for(;!M.done;R++,M=v.next())M=h(m,M.value,x),M!==null&&(g=i(M,g,R),T===null?S=M:T.sibling=M,T=M);return ie&&Kn(m,R),S}for(k=r(m,k);!M.done;R++,M=v.next())M=_(k,m,R,M.value,x),M!==null&&(t&&M.alternate!==null&&k.delete(M.key===null?R:M.key),g=i(M,g,R),T===null?S=M:T.sibling=M,T=M);return t&&k.forEach(function(Hn){return e(m,Hn)}),ie&&Kn(m,R),S}function w(m,g,v,x){if(typeof v=="object"&&v!==null&&v.type===Ir&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ro:e:{for(var S=v.key,T=g;T!==null;){if(T.key===S){if(S=v.type,S===Ir){if(T.tag===7){n(m,T.sibling),g=s(T,v.props.children),g.return=m,m=g;break e}}else if(T.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===cn&&mf(S)===T.type){n(m,T.sibling),g=s(T,v.props),g.ref=Ps(m,T,v),g.return=m,m=g;break e}n(m,T);break}else e(m,T);T=T.sibling}v.type===Ir?(g=sr(v.props.children,m.mode,x,v.key),g.return=m,m=g):(x=Oo(v.type,v.key,v.props,null,m.mode,x),x.ref=Ps(m,g,v),x.return=m,m=x)}return o(m);case kr:e:{for(T=v.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(m,g.sibling),g=s(g,v.children||[]),g.return=m,m=g;break e}else{n(m,g);break}else e(m,g);g=g.sibling}g=Xa(v,m.mode,x),g.return=m,m=g}return o(m);case cn:return T=v._init,w(m,g,T(v._payload),x)}if(Us(v))return p(m,g,v,x);if(Ns(v))return y(m,g,v,x);mo(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(m,g.sibling),g=s(g,v),g.return=m,m=g):(n(m,g),g=Ya(v,m.mode,x),g.return=m,m=g),o(m)):n(m,g)}return w}var Zr=dg(!0),hg=dg(!1),Zo=Un(null),el=null,Dr=null,nd=null;function rd(){nd=Dr=el=null}function sd(t){var e=Zo.current;re(Zo),t._currentValue=e}function $c(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Br(t,e){el=t,nd=Dr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(qe=!0),t.firstContext=null)}function ut(t){var e=t._currentValue;if(nd!==t)if(t={context:t,memoizedValue:e,next:null},Dr===null){if(el===null)throw Error(C(308));Dr=t,el.dependencies={lanes:0,firstContext:t}}else Dr=Dr.next=t;return e}var Zn=null;function id(t){Zn===null?Zn=[t]:Zn.push(t)}function fg(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,id(e)):(n.next=s.next,s.next=n),e.interleaved=n,Zt(t,r)}function Zt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var un=!1;function od(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Kt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function En(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Zt(t,n)}return s=r.interleaved,s===null?(e.next=e,id(r)):(e.next=s.next,s.next=e),r.interleaved=e,Zt(t,n)}function bo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Hu(t,n)}}function gf(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function tl(t,e,n,r){var s=t.updateQueue;un=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?i=u:o.next=u,o=a;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=a))}if(i!==null){var h=s.baseState;o=0,d=u=a=null,l=i;do{var f=l.lane,_=l.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:_,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var p=t,y=l;switch(f=e,_=n,y.tag){case 1:if(p=y.payload,typeof p=="function"){h=p.call(_,h,f);break e}h=p;break e;case 3:p.flags=p.flags&-65537|128;case 0:if(p=y.payload,f=typeof p=="function"?p.call(_,h,f):p,f==null)break e;h=ce({},h,f);break e;case 2:un=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,f=s.effects,f===null?s.effects=[l]:f.push(l))}else _={eventTime:_,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=_,a=h):d=d.next=_,o|=f;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;f=l,l=f.next,f.next=null,s.lastBaseUpdate=f,s.shared.pending=null}}while(!0);if(d===null&&(a=h),s.baseState=a,s.firstBaseUpdate=u,s.lastBaseUpdate=d,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);cr|=o,t.lanes=o,t.memoizedState=h}}function vf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(C(191,s));s.call(r)}}}var zi={},jt=Un(zi),_i=Un(zi),yi=Un(zi);function er(t){if(t===zi)throw Error(C(174));return t}function ld(t,e){switch(te(yi,e),te(_i,t),te(jt,zi),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ec(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ec(e,t)}re(jt),te(jt,e)}function es(){re(jt),re(_i),re(yi)}function mg(t){er(yi.current);var e=er(jt.current),n=Ec(e,t.type);e!==n&&(te(_i,t),te(jt,n))}function ad(t){_i.current===t&&(re(jt),re(_i))}var le=Un(0);function nl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ba=[];function cd(){for(var t=0;t<Ba.length;t++)Ba[t]._workInProgressVersionPrimary=null;Ba.length=0}var To=sn.ReactCurrentDispatcher,Ha=sn.ReactCurrentBatchConfig,ar=0,ae=null,ye=null,Ee=null,rl=!1,Qs=!1,xi=0,Tx=0;function je(){throw Error(C(321))}function ud(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Nt(t[n],e[n]))return!1;return!0}function dd(t,e,n,r,s,i){if(ar=i,ae=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,To.current=t===null||t.memoizedState===null?jx:Ox,t=n(r,s),Qs){i=0;do{if(Qs=!1,xi=0,25<=i)throw Error(C(301));i+=1,Ee=ye=null,e.updateQueue=null,To.current=Dx,t=n(r,s)}while(Qs)}if(To.current=sl,e=ye!==null&&ye.next!==null,ar=0,Ee=ye=ae=null,rl=!1,e)throw Error(C(300));return t}function hd(){var t=xi!==0;return xi=0,t}function Pt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?ae.memoizedState=Ee=t:Ee=Ee.next=t,Ee}function dt(){if(ye===null){var t=ae.alternate;t=t!==null?t.memoizedState:null}else t=ye.next;var e=Ee===null?ae.memoizedState:Ee.next;if(e!==null)Ee=e,ye=t;else{if(t===null)throw Error(C(310));ye=t,t={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},Ee===null?ae.memoizedState=Ee=t:Ee=Ee.next=t}return Ee}function wi(t,e){return typeof e=="function"?e(t):e}function qa(t){var e=dt(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=ye,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,a=null,u=i;do{var d=u.lane;if((ar&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=h,o=r):a=a.next=h,ae.lanes|=d,cr|=d}u=u.next}while(u!==null&&u!==i);a===null?o=r:a.next=l,Nt(r,e.memoizedState)||(qe=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,ae.lanes|=i,cr|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ga(t){var e=dt(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);Nt(i,e.memoizedState)||(qe=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function gg(){}function vg(t,e){var n=ae,r=dt(),s=e(),i=!Nt(r.memoizedState,s);if(i&&(r.memoizedState=s,qe=!0),r=r.queue,fd(xg.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Ee!==null&&Ee.memoizedState.tag&1){if(n.flags|=2048,Ci(9,yg.bind(null,n,r,s,e),void 0,null),Ne===null)throw Error(C(349));ar&30||_g(n,e,s)}return s}function _g(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ae.updateQueue,e===null?(e={lastEffect:null,stores:null},ae.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function yg(t,e,n,r){e.value=n,e.getSnapshot=r,wg(e)&&Cg(t)}function xg(t,e,n){return n(function(){wg(e)&&Cg(t)})}function wg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Nt(t,n)}catch{return!0}}function Cg(t){var e=Zt(t,1);e!==null&&Ct(e,t,1,-1)}function _f(t){var e=Pt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wi,lastRenderedState:t},e.queue=t,t=t.dispatch=Ax.bind(null,ae,t),[e.memoizedState,t]}function Ci(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ae.updateQueue,e===null?(e={lastEffect:null,stores:null},ae.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Eg(){return dt().memoizedState}function Po(t,e,n,r){var s=Pt();ae.flags|=t,s.memoizedState=Ci(1|e,n,void 0,r===void 0?null:r)}function $l(t,e,n,r){var s=dt();r=r===void 0?null:r;var i=void 0;if(ye!==null){var o=ye.memoizedState;if(i=o.destroy,r!==null&&ud(r,o.deps)){s.memoizedState=Ci(e,n,i,r);return}}ae.flags|=t,s.memoizedState=Ci(1|e,n,i,r)}function yf(t,e){return Po(8390656,8,t,e)}function fd(t,e){return $l(2048,8,t,e)}function Sg(t,e){return $l(4,2,t,e)}function Ng(t,e){return $l(4,4,t,e)}function kg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ig(t,e,n){return n=n!=null?n.concat([t]):null,$l(4,4,kg.bind(null,e,t),n)}function pd(){}function bg(t,e){var n=dt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ud(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Tg(t,e){var n=dt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ud(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Pg(t,e,n){return ar&21?(Nt(n,e)||(n=Dm(),ae.lanes|=n,cr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,qe=!0),t.memoizedState=n)}function Px(t,e){var n=G;G=n!==0&&4>n?n:4,t(!0);var r=Ha.transition;Ha.transition={};try{t(!1),e()}finally{G=n,Ha.transition=r}}function Rg(){return dt().memoizedState}function Rx(t,e,n){var r=Nn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ag(t))jg(e,n);else if(n=fg(t,e,n,r),n!==null){var s=ze();Ct(n,t,r,s),Og(n,e,r)}}function Ax(t,e,n){var r=Nn(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ag(t))jg(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,Nt(l,o)){var a=e.interleaved;a===null?(s.next=s,id(e)):(s.next=a.next,a.next=s),e.interleaved=s;return}}catch{}finally{}n=fg(t,e,s,r),n!==null&&(s=ze(),Ct(n,t,r,s),Og(n,e,r))}}function Ag(t){var e=t.alternate;return t===ae||e!==null&&e===ae}function jg(t,e){Qs=rl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Og(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Hu(t,n)}}var sl={readContext:ut,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useInsertionEffect:je,useLayoutEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useMutableSource:je,useSyncExternalStore:je,useId:je,unstable_isNewReconciler:!1},jx={readContext:ut,useCallback:function(t,e){return Pt().memoizedState=[t,e===void 0?null:e],t},useContext:ut,useEffect:yf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Po(4194308,4,kg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Po(4194308,4,t,e)},useInsertionEffect:function(t,e){return Po(4,2,t,e)},useMemo:function(t,e){var n=Pt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Pt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Rx.bind(null,ae,t),[r.memoizedState,t]},useRef:function(t){var e=Pt();return t={current:t},e.memoizedState=t},useState:_f,useDebugValue:pd,useDeferredValue:function(t){return Pt().memoizedState=t},useTransition:function(){var t=_f(!1),e=t[0];return t=Px.bind(null,t[1]),Pt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ae,s=Pt();if(ie){if(n===void 0)throw Error(C(407));n=n()}else{if(n=e(),Ne===null)throw Error(C(349));ar&30||_g(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,yf(xg.bind(null,r,i,t),[t]),r.flags|=2048,Ci(9,yg.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Pt(),e=Ne.identifierPrefix;if(ie){var n=$t,r=Wt;n=(r&~(1<<32-wt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=xi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Tx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ox={readContext:ut,useCallback:bg,useContext:ut,useEffect:fd,useImperativeHandle:Ig,useInsertionEffect:Sg,useLayoutEffect:Ng,useMemo:Tg,useReducer:qa,useRef:Eg,useState:function(){return qa(wi)},useDebugValue:pd,useDeferredValue:function(t){var e=dt();return Pg(e,ye.memoizedState,t)},useTransition:function(){var t=qa(wi)[0],e=dt().memoizedState;return[t,e]},useMutableSource:gg,useSyncExternalStore:vg,useId:Rg,unstable_isNewReconciler:!1},Dx={readContext:ut,useCallback:bg,useContext:ut,useEffect:fd,useImperativeHandle:Ig,useInsertionEffect:Sg,useLayoutEffect:Ng,useMemo:Tg,useReducer:Ga,useRef:Eg,useState:function(){return Ga(wi)},useDebugValue:pd,useDeferredValue:function(t){var e=dt();return ye===null?e.memoizedState=t:Pg(e,ye.memoizedState,t)},useTransition:function(){var t=Ga(wi)[0],e=dt().memoizedState;return[t,e]},useMutableSource:gg,useSyncExternalStore:vg,useId:Rg,unstable_isNewReconciler:!1};function mt(t,e){if(t&&t.defaultProps){e=ce({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Bc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ce({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Bl={isMounted:function(t){return(t=t._reactInternals)?yr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ze(),s=Nn(t),i=Kt(r,s);i.payload=e,n!=null&&(i.callback=n),e=En(t,i,s),e!==null&&(Ct(e,t,s,r),bo(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ze(),s=Nn(t),i=Kt(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=En(t,i,s),e!==null&&(Ct(e,t,s,r),bo(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ze(),r=Nn(t),s=Kt(n,r);s.tag=2,e!=null&&(s.callback=e),e=En(t,s,r),e!==null&&(Ct(e,t,r,n),bo(e,t,r))}};function xf(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!pi(n,r)||!pi(s,i):!0}function Dg(t,e,n){var r=!1,s=jn,i=e.contextType;return typeof i=="object"&&i!==null?i=ut(i):(s=Qe(e)?or:Le.current,r=e.contextTypes,i=(r=r!=null)?Xr(t,s):jn),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Bl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function wf(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Bl.enqueueReplaceState(e,e.state,null)}function Hc(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},od(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=ut(i):(i=Qe(e)?or:Le.current,s.context=Xr(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Bc(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Bl.enqueueReplaceState(s,s.state,null),tl(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function ts(t,e){try{var n="",r=e;do n+=c0(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Ka(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function qc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Lx=typeof WeakMap=="function"?WeakMap:Map;function Lg(t,e,n){n=Kt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ol||(ol=!0,nu=r),qc(t,e)},n}function Mg(t,e,n){n=Kt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){qc(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){qc(t,e),typeof r!="function"&&(Sn===null?Sn=new Set([this]):Sn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Cf(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Lx;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=Yx.bind(null,t,e,n),e.then(t,t))}function Ef(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Sf(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Kt(-1,1),e.tag=2,En(n,e,1))),n.lanes|=1),t)}var Mx=sn.ReactCurrentOwner,qe=!1;function Fe(t,e,n,r){e.child=t===null?hg(e,null,n,r):Zr(e,t.child,n,r)}function Nf(t,e,n,r,s){n=n.render;var i=e.ref;return Br(e,s),r=dd(t,e,n,r,i,s),n=hd(),t!==null&&!qe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,en(t,e,s)):(ie&&n&&Zu(e),e.flags|=1,Fe(t,e,r,s),e.child)}function kf(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Cd(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,Fg(t,e,i,r,s)):(t=Oo(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:pi,n(o,r)&&t.ref===e.ref)return en(t,e,s)}return e.flags|=1,t=kn(i,r),t.ref=e.ref,t.return=e,e.child=t}function Fg(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(pi(i,r)&&t.ref===e.ref)if(qe=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(qe=!0);else return e.lanes=t.lanes,en(t,e,s)}return Gc(t,e,n,r,s)}function Ug(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(Mr,Je),Je|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,te(Mr,Je),Je|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,te(Mr,Je),Je|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,te(Mr,Je),Je|=r;return Fe(t,e,s,n),e.child}function zg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Gc(t,e,n,r,s){var i=Qe(n)?or:Le.current;return i=Xr(e,i),Br(e,s),n=dd(t,e,n,r,i,s),r=hd(),t!==null&&!qe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,en(t,e,s)):(ie&&r&&Zu(e),e.flags|=1,Fe(t,e,n,s),e.child)}function If(t,e,n,r,s){if(Qe(n)){var i=!0;Yo(e)}else i=!1;if(Br(e,s),e.stateNode===null)Ro(t,e),Dg(e,n,r),Hc(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=ut(u):(u=Qe(n)?or:Le.current,u=Xr(e,u));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&wf(e,o,r,u),un=!1;var f=e.memoizedState;o.state=f,tl(e,r,o,s),a=e.memoizedState,l!==r||f!==a||Ke.current||un?(typeof d=="function"&&(Bc(e,n,d,r),a=e.memoizedState),(l=un||xf(e,n,l,r,f,a,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,pg(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:mt(e.type,l),o.props=u,h=e.pendingProps,f=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=ut(a):(a=Qe(n)?or:Le.current,a=Xr(e,a));var _=n.getDerivedStateFromProps;(d=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==h||f!==a)&&wf(e,o,r,a),un=!1,f=e.memoizedState,o.state=f,tl(e,r,o,s);var p=e.memoizedState;l!==h||f!==p||Ke.current||un?(typeof _=="function"&&(Bc(e,n,_,r),p=e.memoizedState),(u=un||xf(e,n,u,r,f,p,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,p,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,p,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=p),o.props=r,o.state=p,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Kc(t,e,n,r,i,s)}function Kc(t,e,n,r,s,i){zg(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&hf(e,n,!1),en(t,e,i);r=e.stateNode,Mx.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Zr(e,t.child,null,i),e.child=Zr(e,null,l,i)):Fe(t,e,l,i),e.memoizedState=r.state,s&&hf(e,n,!0),e.child}function Vg(t){var e=t.stateNode;e.pendingContext?df(t,e.pendingContext,e.pendingContext!==e.context):e.context&&df(t,e.context,!1),ld(t,e.containerInfo)}function bf(t,e,n,r,s){return Jr(),td(s),e.flags|=256,Fe(t,e,n,r),e.child}var Qc={dehydrated:null,treeContext:null,retryLane:0};function Yc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Wg(t,e,n){var r=e.pendingProps,s=le.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),te(le,s&1),t===null)return Wc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Gl(o,r,0,null),t=sr(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Yc(n),e.memoizedState=Qc,t):md(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return Fx(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=kn(s,a),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=kn(l,i):(i=sr(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Yc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Qc,r}return i=t.child,t=i.sibling,r=kn(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function md(t,e){return e=Gl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function go(t,e,n,r){return r!==null&&td(r),Zr(e,t.child,null,n),t=md(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Fx(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=Ka(Error(C(422))),go(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Gl({mode:"visible",children:r.children},s,0,null),i=sr(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Zr(e,t.child,null,o),e.child.memoizedState=Yc(o),e.memoizedState=Qc,i);if(!(e.mode&1))return go(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(C(419)),r=Ka(i,r,void 0),go(t,e,o,r)}if(l=(o&t.childLanes)!==0,qe||l){if(r=Ne,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Zt(t,s),Ct(r,t,s,-1))}return wd(),r=Ka(Error(C(421))),go(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=Xx.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Ze=Cn(s.nextSibling),et=e,ie=!0,vt=null,t!==null&&(it[ot++]=Wt,it[ot++]=$t,it[ot++]=lr,Wt=t.id,$t=t.overflow,lr=e),e=md(e,r.children),e.flags|=4096,e)}function Tf(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),$c(t.return,e,n)}function Qa(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function $g(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(Fe(t,e,r.children,n),r=le.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Tf(t,n,e);else if(t.tag===19)Tf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(te(le,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&nl(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Qa(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&nl(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Qa(e,!0,n,null,i);break;case"together":Qa(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ro(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function en(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),cr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(C(153));if(e.child!==null){for(t=e.child,n=kn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=kn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ux(t,e,n){switch(e.tag){case 3:Vg(e),Jr();break;case 5:mg(e);break;case 1:Qe(e.type)&&Yo(e);break;case 4:ld(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;te(Zo,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(te(le,le.current&1),e.flags|=128,null):n&e.child.childLanes?Wg(t,e,n):(te(le,le.current&1),t=en(t,e,n),t!==null?t.sibling:null);te(le,le.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return $g(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),te(le,le.current),r)break;return null;case 22:case 23:return e.lanes=0,Ug(t,e,n)}return en(t,e,n)}var Bg,Xc,Hg,qg;Bg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xc=function(){};Hg=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,er(jt.current);var i=null;switch(n){case"input":s=yc(t,s),r=yc(t,r),i=[];break;case"select":s=ce({},s,{value:void 0}),r=ce({},r,{value:void 0}),i=[];break;case"textarea":s=Cc(t,s),r=Cc(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ko)}Sc(n,r);var o;n=null;for(u in s)if(!r.hasOwnProperty(u)&&s.hasOwnProperty(u)&&s[u]!=null)if(u==="style"){var l=s[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(li.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var a=r[u];if(l=s!=null?s[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(i||(i=[]),i.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(li.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&ne("scroll",t),i||l===a||(i=[])):(i=i||[]).push(u,a))}n&&(i=i||[]).push("style",n);var u=i;(e.updateQueue=u)&&(e.flags|=4)}};qg=function(t,e,n,r){n!==r&&(e.flags|=4)};function Rs(t,e){if(!ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Oe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function zx(t,e,n){var r=e.pendingProps;switch(ed(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(e),null;case 1:return Qe(e.type)&&Qo(),Oe(e),null;case 3:return r=e.stateNode,es(),re(Ke),re(Le),cd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(po(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,vt!==null&&(iu(vt),vt=null))),Xc(t,e),Oe(e),null;case 5:ad(e);var s=er(yi.current);if(n=e.type,t!==null&&e.stateNode!=null)Hg(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(C(166));return Oe(e),null}if(t=er(jt.current),po(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[Rt]=e,r[vi]=i,t=(e.mode&1)!==0,n){case"dialog":ne("cancel",r),ne("close",r);break;case"iframe":case"object":case"embed":ne("load",r);break;case"video":case"audio":for(s=0;s<Vs.length;s++)ne(Vs[s],r);break;case"source":ne("error",r);break;case"img":case"image":case"link":ne("error",r),ne("load",r);break;case"details":ne("toggle",r);break;case"input":Mh(r,i),ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ne("invalid",r);break;case"textarea":Uh(r,i),ne("invalid",r)}Sc(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&fo(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&fo(r.textContent,l,t),s=["children",""+l]):li.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ne("scroll",r)}switch(n){case"input":so(r),Fh(r,i,!0);break;case"textarea":so(r),zh(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ko)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=xm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Rt]=e,t[vi]=r,Bg(t,e,!1,!1),e.stateNode=t;e:{switch(o=Nc(n,r),n){case"dialog":ne("cancel",t),ne("close",t),s=r;break;case"iframe":case"object":case"embed":ne("load",t),s=r;break;case"video":case"audio":for(s=0;s<Vs.length;s++)ne(Vs[s],t);s=r;break;case"source":ne("error",t),s=r;break;case"img":case"image":case"link":ne("error",t),ne("load",t),s=r;break;case"details":ne("toggle",t),s=r;break;case"input":Mh(t,r),s=yc(t,r),ne("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=ce({},r,{value:void 0}),ne("invalid",t);break;case"textarea":Uh(t,r),s=Cc(t,r),ne("invalid",t);break;default:s=r}Sc(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="style"?Em(t,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&wm(t,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&ai(t,a):typeof a=="number"&&ai(t,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(li.hasOwnProperty(i)?a!=null&&i==="onScroll"&&ne("scroll",t):a!=null&&Uu(t,i,a,o))}switch(n){case"input":so(t),Fh(t,r,!1);break;case"textarea":so(t),zh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+An(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?zr(t,!!r.multiple,i,!1):r.defaultValue!=null&&zr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Ko)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Oe(e),null;case 6:if(t&&e.stateNode!=null)qg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(C(166));if(n=er(yi.current),er(jt.current),po(e)){if(r=e.stateNode,n=e.memoizedProps,r[Rt]=e,(i=r.nodeValue!==n)&&(t=et,t!==null))switch(t.tag){case 3:fo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&fo(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Rt]=e,e.stateNode=r}return Oe(e),null;case 13:if(re(le),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ie&&Ze!==null&&e.mode&1&&!(e.flags&128))ug(),Jr(),e.flags|=98560,i=!1;else if(i=po(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(C(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(C(317));i[Rt]=e}else Jr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Oe(e),i=!1}else vt!==null&&(iu(vt),vt=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||le.current&1?we===0&&(we=3):wd())),e.updateQueue!==null&&(e.flags|=4),Oe(e),null);case 4:return es(),Xc(t,e),t===null&&mi(e.stateNode.containerInfo),Oe(e),null;case 10:return sd(e.type._context),Oe(e),null;case 17:return Qe(e.type)&&Qo(),Oe(e),null;case 19:if(re(le),i=e.memoizedState,i===null)return Oe(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Rs(i,!1);else{if(we!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=nl(t),o!==null){for(e.flags|=128,Rs(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return te(le,le.current&1|2),e.child}t=t.sibling}i.tail!==null&&ge()>ns&&(e.flags|=128,r=!0,Rs(i,!1),e.lanes=4194304)}else{if(!r)if(t=nl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Rs(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!ie)return Oe(e),null}else 2*ge()-i.renderingStartTime>ns&&n!==1073741824&&(e.flags|=128,r=!0,Rs(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=ge(),e.sibling=null,n=le.current,te(le,r?n&1|2:n&1),e):(Oe(e),null);case 22:case 23:return xd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Je&1073741824&&(Oe(e),e.subtreeFlags&6&&(e.flags|=8192)):Oe(e),null;case 24:return null;case 25:return null}throw Error(C(156,e.tag))}function Vx(t,e){switch(ed(e),e.tag){case 1:return Qe(e.type)&&Qo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return es(),re(Ke),re(Le),cd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ad(e),null;case 13:if(re(le),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(C(340));Jr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return re(le),null;case 4:return es(),null;case 10:return sd(e.type._context),null;case 22:case 23:return xd(),null;case 24:return null;default:return null}}var vo=!1,De=!1,Wx=typeof WeakSet=="function"?WeakSet:Set,b=null;function Lr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){he(t,e,r)}else n.current=null}function Jc(t,e,n){try{n()}catch(r){he(t,e,r)}}var Pf=!1;function $x(t,e){if(Dc=Ho,t=Xm(),Ju(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,d=0,h=t,f=null;t:for(;;){for(var _;h!==n||s!==0&&h.nodeType!==3||(l=o+s),h!==i||r!==0&&h.nodeType!==3||(a=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(_=h.firstChild)!==null;)f=h,h=_;for(;;){if(h===t)break t;if(f===n&&++u===s&&(l=o),f===i&&++d===r&&(a=o),(_=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=_}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Lc={focusedElem:t,selectionRange:n},Ho=!1,b=e;b!==null;)if(e=b,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,b=t;else for(;b!==null;){e=b;try{var p=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(p!==null){var y=p.memoizedProps,w=p.memoizedState,m=e.stateNode,g=m.getSnapshotBeforeUpdate(e.elementType===e.type?y:mt(e.type,y),w);m.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(x){he(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,b=t;break}b=e.return}return p=Pf,Pf=!1,p}function Ys(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Jc(e,n,i)}s=s.next}while(s!==r)}}function Hl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Zc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Gg(t){var e=t.alternate;e!==null&&(t.alternate=null,Gg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Rt],delete e[vi],delete e[Uc],delete e[Nx],delete e[kx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Kg(t){return t.tag===5||t.tag===3||t.tag===4}function Rf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Kg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function eu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ko));else if(r!==4&&(t=t.child,t!==null))for(eu(t,e,n),t=t.sibling;t!==null;)eu(t,e,n),t=t.sibling}function tu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(tu(t,e,n),t=t.sibling;t!==null;)tu(t,e,n),t=t.sibling}var Ie=null,gt=!1;function ln(t,e,n){for(n=n.child;n!==null;)Qg(t,e,n),n=n.sibling}function Qg(t,e,n){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(Ml,n)}catch{}switch(n.tag){case 5:De||Lr(n,e);case 6:var r=Ie,s=gt;Ie=null,ln(t,e,n),Ie=r,gt=s,Ie!==null&&(gt?(t=Ie,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ie.removeChild(n.stateNode));break;case 18:Ie!==null&&(gt?(t=Ie,n=n.stateNode,t.nodeType===8?Wa(t.parentNode,n):t.nodeType===1&&Wa(t,n),hi(t)):Wa(Ie,n.stateNode));break;case 4:r=Ie,s=gt,Ie=n.stateNode.containerInfo,gt=!0,ln(t,e,n),Ie=r,gt=s;break;case 0:case 11:case 14:case 15:if(!De&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Jc(n,e,o),s=s.next}while(s!==r)}ln(t,e,n);break;case 1:if(!De&&(Lr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){he(n,e,l)}ln(t,e,n);break;case 21:ln(t,e,n);break;case 22:n.mode&1?(De=(r=De)||n.memoizedState!==null,ln(t,e,n),De=r):ln(t,e,n);break;default:ln(t,e,n)}}function Af(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Wx),e.forEach(function(r){var s=Jx.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function ft(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ie=l.stateNode,gt=!1;break e;case 3:Ie=l.stateNode.containerInfo,gt=!0;break e;case 4:Ie=l.stateNode.containerInfo,gt=!0;break e}l=l.return}if(Ie===null)throw Error(C(160));Qg(i,o,s),Ie=null,gt=!1;var a=s.alternate;a!==null&&(a.return=null),s.return=null}catch(u){he(s,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Yg(e,t),e=e.sibling}function Yg(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ft(e,t),Tt(t),r&4){try{Ys(3,t,t.return),Hl(3,t)}catch(y){he(t,t.return,y)}try{Ys(5,t,t.return)}catch(y){he(t,t.return,y)}}break;case 1:ft(e,t),Tt(t),r&512&&n!==null&&Lr(n,n.return);break;case 5:if(ft(e,t),Tt(t),r&512&&n!==null&&Lr(n,n.return),t.flags&32){var s=t.stateNode;try{ai(s,"")}catch(y){he(t,t.return,y)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&_m(s,i),Nc(l,o);var u=Nc(l,i);for(o=0;o<a.length;o+=2){var d=a[o],h=a[o+1];d==="style"?Em(s,h):d==="dangerouslySetInnerHTML"?wm(s,h):d==="children"?ai(s,h):Uu(s,d,h,u)}switch(l){case"input":xc(s,i);break;case"textarea":ym(s,i);break;case"select":var f=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var _=i.value;_!=null?zr(s,!!i.multiple,_,!1):f!==!!i.multiple&&(i.defaultValue!=null?zr(s,!!i.multiple,i.defaultValue,!0):zr(s,!!i.multiple,i.multiple?[]:"",!1))}s[vi]=i}catch(y){he(t,t.return,y)}}break;case 6:if(ft(e,t),Tt(t),r&4){if(t.stateNode===null)throw Error(C(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(y){he(t,t.return,y)}}break;case 3:if(ft(e,t),Tt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{hi(e.containerInfo)}catch(y){he(t,t.return,y)}break;case 4:ft(e,t),Tt(t);break;case 13:ft(e,t),Tt(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(_d=ge())),r&4&&Af(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(De=(u=De)||d,ft(e,t),De=u):ft(e,t),Tt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(b=t,d=t.child;d!==null;){for(h=b=d;b!==null;){switch(f=b,_=f.child,f.tag){case 0:case 11:case 14:case 15:Ys(4,f,f.return);break;case 1:Lr(f,f.return);var p=f.stateNode;if(typeof p.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,p.props=e.memoizedProps,p.state=e.memoizedState,p.componentWillUnmount()}catch(y){he(r,n,y)}}break;case 5:Lr(f,f.return);break;case 22:if(f.memoizedState!==null){Of(h);continue}}_!==null?(_.return=f,b=_):Of(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{s=h.stateNode,u?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=h.stateNode,a=h.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Cm("display",o))}catch(y){he(t,t.return,y)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){he(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ft(e,t),Tt(t),r&4&&Af(t);break;case 21:break;default:ft(e,t),Tt(t)}}function Tt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Kg(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(ai(s,""),r.flags&=-33);var i=Rf(t);tu(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Rf(t);eu(t,l,o);break;default:throw Error(C(161))}}catch(a){he(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Bx(t,e,n){b=t,Xg(t)}function Xg(t,e,n){for(var r=(t.mode&1)!==0;b!==null;){var s=b,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||vo;if(!o){var l=s.alternate,a=l!==null&&l.memoizedState!==null||De;l=vo;var u=De;if(vo=o,(De=a)&&!u)for(b=s;b!==null;)o=b,a=o.child,o.tag===22&&o.memoizedState!==null?Df(s):a!==null?(a.return=o,b=a):Df(s);for(;i!==null;)b=i,Xg(i),i=i.sibling;b=s,vo=l,De=u}jf(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,b=i):jf(t)}}function jf(t){for(;b!==null;){var e=b;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:De||Hl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!De)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:mt(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&vf(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}vf(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&hi(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}De||e.flags&512&&Zc(e)}catch(f){he(e,e.return,f)}}if(e===t){b=null;break}if(n=e.sibling,n!==null){n.return=e.return,b=n;break}b=e.return}}function Of(t){for(;b!==null;){var e=b;if(e===t){b=null;break}var n=e.sibling;if(n!==null){n.return=e.return,b=n;break}b=e.return}}function Df(t){for(;b!==null;){var e=b;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Hl(4,e)}catch(a){he(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(a){he(e,s,a)}}var i=e.return;try{Zc(e)}catch(a){he(e,i,a)}break;case 5:var o=e.return;try{Zc(e)}catch(a){he(e,o,a)}}}catch(a){he(e,e.return,a)}if(e===t){b=null;break}var l=e.sibling;if(l!==null){l.return=e.return,b=l;break}b=e.return}}var Hx=Math.ceil,il=sn.ReactCurrentDispatcher,gd=sn.ReactCurrentOwner,ct=sn.ReactCurrentBatchConfig,W=0,Ne=null,_e=null,Te=0,Je=0,Mr=Un(0),we=0,Ei=null,cr=0,ql=0,vd=0,Xs=null,He=null,_d=0,ns=1/0,Mt=null,ol=!1,nu=null,Sn=null,_o=!1,vn=null,ll=0,Js=0,ru=null,Ao=-1,jo=0;function ze(){return W&6?ge():Ao!==-1?Ao:Ao=ge()}function Nn(t){return t.mode&1?W&2&&Te!==0?Te&-Te:bx.transition!==null?(jo===0&&(jo=Dm()),jo):(t=G,t!==0||(t=window.event,t=t===void 0?16:Wm(t.type)),t):1}function Ct(t,e,n,r){if(50<Js)throw Js=0,ru=null,Error(C(185));Mi(t,n,r),(!(W&2)||t!==Ne)&&(t===Ne&&(!(W&2)&&(ql|=n),we===4&&hn(t,Te)),Ye(t,r),n===1&&W===0&&!(e.mode&1)&&(ns=ge()+500,Wl&&zn()))}function Ye(t,e){var n=t.callbackNode;b0(t,e);var r=Bo(t,t===Ne?Te:0);if(r===0)n!==null&&$h(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&$h(n),e===1)t.tag===0?Ix(Lf.bind(null,t)):lg(Lf.bind(null,t)),Ex(function(){!(W&6)&&zn()}),n=null;else{switch(Lm(r)){case 1:n=Bu;break;case 4:n=jm;break;case 16:n=$o;break;case 536870912:n=Om;break;default:n=$o}n=iv(n,Jg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Jg(t,e){if(Ao=-1,jo=0,W&6)throw Error(C(327));var n=t.callbackNode;if(Hr()&&t.callbackNode!==n)return null;var r=Bo(t,t===Ne?Te:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=al(t,r);else{e=r;var s=W;W|=2;var i=ev();(Ne!==t||Te!==e)&&(Mt=null,ns=ge()+500,rr(t,e));do try{Kx();break}catch(l){Zg(t,l)}while(!0);rd(),il.current=i,W=s,_e!==null?e=0:(Ne=null,Te=0,e=we)}if(e!==0){if(e===2&&(s=Pc(t),s!==0&&(r=s,e=su(t,s))),e===1)throw n=Ei,rr(t,0),hn(t,r),Ye(t,ge()),n;if(e===6)hn(t,r);else{if(s=t.current.alternate,!(r&30)&&!qx(s)&&(e=al(t,r),e===2&&(i=Pc(t),i!==0&&(r=i,e=su(t,i))),e===1))throw n=Ei,rr(t,0),hn(t,r),Ye(t,ge()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(C(345));case 2:Qn(t,He,Mt);break;case 3:if(hn(t,r),(r&130023424)===r&&(e=_d+500-ge(),10<e)){if(Bo(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){ze(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Fc(Qn.bind(null,t,He,Mt),e);break}Qn(t,He,Mt);break;case 4:if(hn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-wt(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=ge()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Hx(r/1960))-r,10<r){t.timeoutHandle=Fc(Qn.bind(null,t,He,Mt),r);break}Qn(t,He,Mt);break;case 5:Qn(t,He,Mt);break;default:throw Error(C(329))}}}return Ye(t,ge()),t.callbackNode===n?Jg.bind(null,t):null}function su(t,e){var n=Xs;return t.current.memoizedState.isDehydrated&&(rr(t,e).flags|=256),t=al(t,e),t!==2&&(e=He,He=n,e!==null&&iu(e)),t}function iu(t){He===null?He=t:He.push.apply(He,t)}function qx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!Nt(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function hn(t,e){for(e&=~vd,e&=~ql,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-wt(e),r=1<<n;t[n]=-1,e&=~r}}function Lf(t){if(W&6)throw Error(C(327));Hr();var e=Bo(t,0);if(!(e&1))return Ye(t,ge()),null;var n=al(t,e);if(t.tag!==0&&n===2){var r=Pc(t);r!==0&&(e=r,n=su(t,r))}if(n===1)throw n=Ei,rr(t,0),hn(t,e),Ye(t,ge()),n;if(n===6)throw Error(C(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Qn(t,He,Mt),Ye(t,ge()),null}function yd(t,e){var n=W;W|=1;try{return t(e)}finally{W=n,W===0&&(ns=ge()+500,Wl&&zn())}}function ur(t){vn!==null&&vn.tag===0&&!(W&6)&&Hr();var e=W;W|=1;var n=ct.transition,r=G;try{if(ct.transition=null,G=1,t)return t()}finally{G=r,ct.transition=n,W=e,!(W&6)&&zn()}}function xd(){Je=Mr.current,re(Mr)}function rr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Cx(n)),_e!==null)for(n=_e.return;n!==null;){var r=n;switch(ed(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qo();break;case 3:es(),re(Ke),re(Le),cd();break;case 5:ad(r);break;case 4:es();break;case 13:re(le);break;case 19:re(le);break;case 10:sd(r.type._context);break;case 22:case 23:xd()}n=n.return}if(Ne=t,_e=t=kn(t.current,null),Te=Je=e,we=0,Ei=null,vd=ql=cr=0,He=Xs=null,Zn!==null){for(e=0;e<Zn.length;e++)if(n=Zn[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Zn=null}return t}function Zg(t,e){do{var n=_e;try{if(rd(),To.current=sl,rl){for(var r=ae.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}rl=!1}if(ar=0,Ee=ye=ae=null,Qs=!1,xi=0,gd.current=null,n===null||n.return===null){we=1,Ei=e,_e=null;break}e:{var i=t,o=n.return,l=n,a=e;if(e=Te,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=l,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var _=Ef(o);if(_!==null){_.flags&=-257,Sf(_,o,l,i,e),_.mode&1&&Cf(i,u,e),e=_,a=u;var p=e.updateQueue;if(p===null){var y=new Set;y.add(a),e.updateQueue=y}else p.add(a);break e}else{if(!(e&1)){Cf(i,u,e),wd();break e}a=Error(C(426))}}else if(ie&&l.mode&1){var w=Ef(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Sf(w,o,l,i,e),td(ts(a,l));break e}}i=a=ts(a,l),we!==4&&(we=2),Xs===null?Xs=[i]:Xs.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var m=Lg(i,a,e);gf(i,m);break e;case 1:l=a;var g=i.type,v=i.stateNode;if(!(i.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Sn===null||!Sn.has(v)))){i.flags|=65536,e&=-e,i.lanes|=e;var x=Mg(i,l,e);gf(i,x);break e}}i=i.return}while(i!==null)}nv(n)}catch(S){e=S,_e===n&&n!==null&&(_e=n=n.return);continue}break}while(!0)}function ev(){var t=il.current;return il.current=sl,t===null?sl:t}function wd(){(we===0||we===3||we===2)&&(we=4),Ne===null||!(cr&268435455)&&!(ql&268435455)||hn(Ne,Te)}function al(t,e){var n=W;W|=2;var r=ev();(Ne!==t||Te!==e)&&(Mt=null,rr(t,e));do try{Gx();break}catch(s){Zg(t,s)}while(!0);if(rd(),W=n,il.current=r,_e!==null)throw Error(C(261));return Ne=null,Te=0,we}function Gx(){for(;_e!==null;)tv(_e)}function Kx(){for(;_e!==null&&!y0();)tv(_e)}function tv(t){var e=sv(t.alternate,t,Je);t.memoizedProps=t.pendingProps,e===null?nv(t):_e=e,gd.current=null}function nv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Vx(n,e),n!==null){n.flags&=32767,_e=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{we=6,_e=null;return}}else if(n=zx(n,e,Je),n!==null){_e=n;return}if(e=e.sibling,e!==null){_e=e;return}_e=e=t}while(e!==null);we===0&&(we=5)}function Qn(t,e,n){var r=G,s=ct.transition;try{ct.transition=null,G=1,Qx(t,e,n,r)}finally{ct.transition=s,G=r}return null}function Qx(t,e,n,r){do Hr();while(vn!==null);if(W&6)throw Error(C(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(C(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(T0(t,i),t===Ne&&(_e=Ne=null,Te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_o||(_o=!0,iv($o,function(){return Hr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=ct.transition,ct.transition=null;var o=G;G=1;var l=W;W|=4,gd.current=null,$x(t,n),Yg(n,t),mx(Lc),Ho=!!Dc,Lc=Dc=null,t.current=n,Bx(n),x0(),W=l,G=o,ct.transition=i}else t.current=n;if(_o&&(_o=!1,vn=t,ll=s),i=t.pendingLanes,i===0&&(Sn=null),E0(n.stateNode),Ye(t,ge()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(ol)throw ol=!1,t=nu,nu=null,t;return ll&1&&t.tag!==0&&Hr(),i=t.pendingLanes,i&1?t===ru?Js++:(Js=0,ru=t):Js=0,zn(),null}function Hr(){if(vn!==null){var t=Lm(ll),e=ct.transition,n=G;try{if(ct.transition=null,G=16>t?16:t,vn===null)var r=!1;else{if(t=vn,vn=null,ll=0,W&6)throw Error(C(331));var s=W;for(W|=4,b=t.current;b!==null;){var i=b,o=i.child;if(b.flags&16){var l=i.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(b=u;b!==null;){var d=b;switch(d.tag){case 0:case 11:case 15:Ys(8,d,i)}var h=d.child;if(h!==null)h.return=d,b=h;else for(;b!==null;){d=b;var f=d.sibling,_=d.return;if(Gg(d),d===u){b=null;break}if(f!==null){f.return=_,b=f;break}b=_}}}var p=i.alternate;if(p!==null){var y=p.child;if(y!==null){p.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}b=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,b=o;else e:for(;b!==null;){if(i=b,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ys(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,b=m;break e}b=i.return}}var g=t.current;for(b=g;b!==null;){o=b;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,b=v;else e:for(o=g;b!==null;){if(l=b,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Hl(9,l)}}catch(S){he(l,l.return,S)}if(l===o){b=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,b=x;break e}b=l.return}}if(W=s,zn(),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(Ml,t)}catch{}r=!0}return r}finally{G=n,ct.transition=e}}return!1}function Mf(t,e,n){e=ts(n,e),e=Lg(t,e,1),t=En(t,e,1),e=ze(),t!==null&&(Mi(t,1,e),Ye(t,e))}function he(t,e,n){if(t.tag===3)Mf(t,t,n);else for(;e!==null;){if(e.tag===3){Mf(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Sn===null||!Sn.has(r))){t=ts(n,t),t=Mg(e,t,1),e=En(e,t,1),t=ze(),e!==null&&(Mi(e,1,t),Ye(e,t));break}}e=e.return}}function Yx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ze(),t.pingedLanes|=t.suspendedLanes&n,Ne===t&&(Te&n)===n&&(we===4||we===3&&(Te&130023424)===Te&&500>ge()-_d?rr(t,0):vd|=n),Ye(t,e)}function rv(t,e){e===0&&(t.mode&1?(e=lo,lo<<=1,!(lo&130023424)&&(lo=4194304)):e=1);var n=ze();t=Zt(t,e),t!==null&&(Mi(t,e,n),Ye(t,n))}function Xx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),rv(t,n)}function Jx(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(e),rv(t,n)}var sv;sv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ke.current)qe=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return qe=!1,Ux(t,e,n);qe=!!(t.flags&131072)}else qe=!1,ie&&e.flags&1048576&&ag(e,Jo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ro(t,e),t=e.pendingProps;var s=Xr(e,Le.current);Br(e,n),s=dd(null,e,r,t,s,n);var i=hd();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Qe(r)?(i=!0,Yo(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,od(e),s.updater=Bl,e.stateNode=s,s._reactInternals=e,Hc(e,r,t,n),e=Kc(null,e,r,!0,i,n)):(e.tag=0,ie&&i&&Zu(e),Fe(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ro(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=ew(r),t=mt(r,t),s){case 0:e=Gc(null,e,r,t,n);break e;case 1:e=If(null,e,r,t,n);break e;case 11:e=Nf(null,e,r,t,n);break e;case 14:e=kf(null,e,r,mt(r.type,t),n);break e}throw Error(C(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:mt(r,s),Gc(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:mt(r,s),If(t,e,r,s,n);case 3:e:{if(Vg(e),t===null)throw Error(C(387));r=e.pendingProps,i=e.memoizedState,s=i.element,pg(t,e),tl(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=ts(Error(C(423)),e),e=bf(t,e,r,n,s);break e}else if(r!==s){s=ts(Error(C(424)),e),e=bf(t,e,r,n,s);break e}else for(Ze=Cn(e.stateNode.containerInfo.firstChild),et=e,ie=!0,vt=null,n=hg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Jr(),r===s){e=en(t,e,n);break e}Fe(t,e,r,n)}e=e.child}return e;case 5:return mg(e),t===null&&Wc(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Mc(r,s)?o=null:i!==null&&Mc(r,i)&&(e.flags|=32),zg(t,e),Fe(t,e,o,n),e.child;case 6:return t===null&&Wc(e),null;case 13:return Wg(t,e,n);case 4:return ld(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Zr(e,null,r,n):Fe(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:mt(r,s),Nf(t,e,r,s,n);case 7:return Fe(t,e,e.pendingProps,n),e.child;case 8:return Fe(t,e,e.pendingProps.children,n),e.child;case 12:return Fe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,te(Zo,r._currentValue),r._currentValue=o,i!==null)if(Nt(i.value,o)){if(i.children===s.children&&!Ke.current){e=en(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=Kt(-1,n&-n),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),$c(i.return,n,e),l.lanes|=n;break}a=a.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(C(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),$c(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Fe(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Br(e,n),s=ut(s),r=r(s),e.flags|=1,Fe(t,e,r,n),e.child;case 14:return r=e.type,s=mt(r,e.pendingProps),s=mt(r.type,s),kf(t,e,r,s,n);case 15:return Fg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:mt(r,s),Ro(t,e),e.tag=1,Qe(r)?(t=!0,Yo(e)):t=!1,Br(e,n),Dg(e,r,s),Hc(e,r,s,n),Kc(null,e,r,!0,t,n);case 19:return $g(t,e,n);case 22:return Ug(t,e,n)}throw Error(C(156,e.tag))};function iv(t,e){return Am(t,e)}function Zx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lt(t,e,n,r){return new Zx(t,e,n,r)}function Cd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ew(t){if(typeof t=="function")return Cd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Vu)return 11;if(t===Wu)return 14}return 2}function kn(t,e){var n=t.alternate;return n===null?(n=lt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Oo(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Cd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ir:return sr(n.children,s,i,e);case zu:o=8,s|=8;break;case mc:return t=lt(12,n,e,s|2),t.elementType=mc,t.lanes=i,t;case gc:return t=lt(13,n,e,s),t.elementType=gc,t.lanes=i,t;case vc:return t=lt(19,n,e,s),t.elementType=vc,t.lanes=i,t;case mm:return Gl(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case fm:o=10;break e;case pm:o=9;break e;case Vu:o=11;break e;case Wu:o=14;break e;case cn:o=16,r=null;break e}throw Error(C(130,t==null?t:typeof t,""))}return e=lt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function sr(t,e,n,r){return t=lt(7,t,r,e),t.lanes=n,t}function Gl(t,e,n,r){return t=lt(22,t,r,e),t.elementType=mm,t.lanes=n,t.stateNode={isHidden:!1},t}function Ya(t,e,n){return t=lt(6,t,null,e),t.lanes=n,t}function Xa(t,e,n){return e=lt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function tw(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ra(0),this.expirationTimes=Ra(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ra(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Ed(t,e,n,r,s,i,o,l,a){return t=new tw(t,e,n,l,a),e===1?(e=1,i===!0&&(e|=8)):e=0,i=lt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},od(i),t}function nw(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:kr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function ov(t){if(!t)return jn;t=t._reactInternals;e:{if(yr(t)!==t||t.tag!==1)throw Error(C(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Qe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(C(171))}if(t.tag===1){var n=t.type;if(Qe(n))return og(t,n,e)}return e}function lv(t,e,n,r,s,i,o,l,a){return t=Ed(n,r,!0,t,s,i,o,l,a),t.context=ov(null),n=t.current,r=ze(),s=Nn(n),i=Kt(r,s),i.callback=e??null,En(n,i,s),t.current.lanes=s,Mi(t,s,r),Ye(t,r),t}function Kl(t,e,n,r){var s=e.current,i=ze(),o=Nn(s);return n=ov(n),e.context===null?e.context=n:e.pendingContext=n,e=Kt(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=En(s,e,o),t!==null&&(Ct(t,s,o,i),bo(t,s,o)),o}function cl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ff(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Sd(t,e){Ff(t,e),(t=t.alternate)&&Ff(t,e)}function rw(){return null}var av=typeof reportError=="function"?reportError:function(t){console.error(t)};function Nd(t){this._internalRoot=t}Ql.prototype.render=Nd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(C(409));Kl(t,e,null,null)};Ql.prototype.unmount=Nd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ur(function(){Kl(null,t,null,null)}),e[Jt]=null}};function Ql(t){this._internalRoot=t}Ql.prototype.unstable_scheduleHydration=function(t){if(t){var e=Um();t={blockedOn:null,target:t,priority:e};for(var n=0;n<dn.length&&e!==0&&e<dn[n].priority;n++);dn.splice(n,0,t),n===0&&Vm(t)}};function kd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Yl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Uf(){}function sw(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var u=cl(o);i.call(u)}}var o=lv(e,r,t,0,null,!1,!1,"",Uf);return t._reactRootContainer=o,t[Jt]=o.current,mi(t.nodeType===8?t.parentNode:t),ur(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var u=cl(a);l.call(u)}}var a=Ed(t,0,!1,null,null,!1,!1,"",Uf);return t._reactRootContainer=a,t[Jt]=a.current,mi(t.nodeType===8?t.parentNode:t),ur(function(){Kl(e,a,n,r)}),a}function Xl(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var a=cl(o);l.call(a)}}Kl(e,o,t,s)}else o=sw(n,e,t,s,r);return cl(o)}Mm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=zs(e.pendingLanes);n!==0&&(Hu(e,n|1),Ye(e,ge()),!(W&6)&&(ns=ge()+500,zn()))}break;case 13:ur(function(){var r=Zt(t,1);if(r!==null){var s=ze();Ct(r,t,1,s)}}),Sd(t,1)}};qu=function(t){if(t.tag===13){var e=Zt(t,134217728);if(e!==null){var n=ze();Ct(e,t,134217728,n)}Sd(t,134217728)}};Fm=function(t){if(t.tag===13){var e=Nn(t),n=Zt(t,e);if(n!==null){var r=ze();Ct(n,t,e,r)}Sd(t,e)}};Um=function(){return G};zm=function(t,e){var n=G;try{return G=t,e()}finally{G=n}};Ic=function(t,e,n){switch(e){case"input":if(xc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Vl(r);if(!s)throw Error(C(90));vm(r),xc(r,s)}}}break;case"textarea":ym(t,n);break;case"select":e=n.value,e!=null&&zr(t,!!n.multiple,e,!1)}};km=yd;Im=ur;var iw={usingClientEntryPoint:!1,Events:[Ui,Rr,Vl,Sm,Nm,yd]},As={findFiberByHostInstance:Jn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ow={bundleType:As.bundleType,version:As.version,rendererPackageName:As.rendererPackageName,rendererConfig:As.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:sn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Pm(t),t===null?null:t.stateNode},findFiberByHostInstance:As.findFiberByHostInstance||rw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yo.isDisabled&&yo.supportsFiber)try{Ml=yo.inject(ow),At=yo}catch{}}rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iw;rt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kd(e))throw Error(C(200));return nw(t,e,null,n)};rt.createRoot=function(t,e){if(!kd(t))throw Error(C(299));var n=!1,r="",s=av;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Ed(t,1,!1,null,null,n,!1,r,s),t[Jt]=e.current,mi(t.nodeType===8?t.parentNode:t),new Nd(e)};rt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(C(188)):(t=Object.keys(t).join(","),Error(C(268,t)));return t=Pm(e),t=t===null?null:t.stateNode,t};rt.flushSync=function(t){return ur(t)};rt.hydrate=function(t,e,n){if(!Yl(e))throw Error(C(200));return Xl(null,t,e,!0,n)};rt.hydrateRoot=function(t,e,n){if(!kd(t))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=av;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=lv(e,null,t,1,n??null,s,!1,i,o),t[Jt]=e.current,mi(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Ql(e)};rt.render=function(t,e,n){if(!Yl(e))throw Error(C(200));return Xl(null,t,e,!1,n)};rt.unmountComponentAtNode=function(t){if(!Yl(t))throw Error(C(40));return t._reactRootContainer?(ur(function(){Xl(null,null,t,!1,function(){t._reactRootContainer=null,t[Jt]=null})}),!0):!1};rt.unstable_batchedUpdates=yd;rt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Yl(n))throw Error(C(200));if(t==null||t._reactInternals===void 0)throw Error(C(38));return Xl(t,e,n,!1,r)};rt.version="18.3.1-next-f1338f8080-20240426";function cv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cv)}catch(t){console.error(t)}}cv(),cm.exports=rt;var lw=cm.exports,zf=lw;fc.createRoot=zf.createRoot,fc.hydrateRoot=zf.hydrateRoot;var Vf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E=function(t,e){if(!t)throw hs(e)},hs=function(t){return new Error("Firebase Database ("+uv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},aw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Id={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,a=s+2<t.length,u=a?t[s+2]:0,d=i>>2,h=(i&3)<<4|l>>4;let f=(l&15)<<2|u>>6,_=u&63;a||(_=64,o||(f=64)),r.push(n[d],n[h],n[f],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(dv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):aw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||h==null)throw new cw;const f=i<<2|l>>4;if(r.push(f),u!==64){const _=l<<4&240|u>>2;if(r.push(_),h!==64){const p=u<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class cw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hv=function(t){const e=dv(t);return Id.encodeByteArray(e,!0)},ul=function(t){return hv(t).replace(/\./g,"")},dl=function(t){try{return Id.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uw(t){return fv(void 0,t)}function fv(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!dw(n)||(t[n]=fv(t[n],e[n]));return t}function dw(t){return t!=="__proto__"}/**
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
 */function hw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const fw=()=>hw().__FIREBASE_DEFAULTS__,pw=()=>{if(typeof process>"u"||typeof Vf>"u")return;const t=Vf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},mw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&dl(t[1]);return e&&JSON.parse(e)},bd=()=>{try{return fw()||pw()||mw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},pv=t=>{var e,n;return(n=(e=bd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},gw=t=>{const e=pv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},mv=()=>{var t;return(t=bd())===null||t===void 0?void 0:t.config},gv=t=>{var e;return(e=bd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function vw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ul(JSON.stringify(n)),ul(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Td(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(We())}function _w(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function yw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function vv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xw(){const t=We();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ww(){return uv.NODE_ADMIN===!0}function Cw(){try{return typeof indexedDB=="object"}catch{return!1}}function Ew(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw="FirebaseError";class Vn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Sw,Object.setPrototypeOf(this,Vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vi.prototype.create)}}class Vi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Nw(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Vn(s,l,r)}}function Nw(t,e){return t.replace(kw,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const kw=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(t){return JSON.parse(t)}function xe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=Si(dl(i[0])||""),n=Si(dl(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},Iw=function(t){const e=_v(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},bw=function(t){const e=_v(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function dr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ou(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function hl(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function fl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Wf(i)&&Wf(o)){if(!fl(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Wf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ws(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function $s(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,d;for(let h=0;h<80;h++){h<40?h<20?(u=l^i&(o^l),d=1518500249):(u=i^o^l,d=1859775393):h<60?(u=i&o|l&(i|o),d=2400959708):(u=i^o^l,d=3395469782);const f=(s<<5|s>>>27)+u+a+d+r[h]&4294967295;a=l,l=o,o=(i<<30|i>>>2)&4294967295,i=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function Pw(t,e){const n=new Rw(t,e);return n.subscribe.bind(n)}class Rw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Aw(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ja),s.error===void 0&&(s.error=Ja),s.complete===void 0&&(s.complete=Ja);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Aw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ja(){}function Jl(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,E(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Zl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function ke(t){return t&&t._delegate?t._delegate:t}class hr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Yn="[DEFAULT]";/**
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
 */class Ow{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new fs;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Lw(e))try{this.getOrInitializeService({instanceIdentifier:Yn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Yn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yn){return this.instances.has(e)}getOptions(e=Yn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Dw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Yn){return this.component?this.component.multipleInstances?e:Yn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Dw(t){return t===Yn?void 0:t}function Lw(t){return t.instantiationMode==="EAGER"}/**
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
 */class Mw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ow(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const Fw={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},Uw=Y.INFO,zw={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},Vw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=zw[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pd{constructor(e){this.name=e,this._logLevel=Uw,this._logHandler=Vw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Fw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const Ww=(t,e)=>e.some(n=>t instanceof n);let $f,Bf;function $w(){return $f||($f=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Bw(){return Bf||(Bf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yv=new WeakMap,lu=new WeakMap,xv=new WeakMap,Za=new WeakMap,Rd=new WeakMap;function Hw(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(In(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&yv.set(n,t)}).catch(()=>{}),Rd.set(e,t),e}function qw(t){if(lu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});lu.set(t,e)}let au={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return lu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||xv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return In(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Gw(t){au=t(au)}function Kw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ec(this),e,...n);return xv.set(r,e.sort?e.sort():[e]),In(r)}:Bw().includes(t)?function(...e){return t.apply(ec(this),e),In(yv.get(this))}:function(...e){return In(t.apply(ec(this),e))}}function Qw(t){return typeof t=="function"?Kw(t):(t instanceof IDBTransaction&&qw(t),Ww(t,$w())?new Proxy(t,au):t)}function In(t){if(t instanceof IDBRequest)return Hw(t);if(Za.has(t))return Za.get(t);const e=Qw(t);return e!==t&&(Za.set(t,e),Rd.set(e,t)),e}const ec=t=>Rd.get(t);function Yw(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=In(o);return r&&o.addEventListener("upgradeneeded",a=>{r(In(o.result),a.oldVersion,a.newVersion,In(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const Xw=["get","getKey","getAll","getAllKeys","count"],Jw=["put","add","delete","clear"],tc=new Map;function Hf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(tc.get(e))return tc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Jw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Xw.includes(n)))return;const i=async function(o,...l){const a=this.transaction(o,s?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&a.done]))[0]};return tc.set(e,i),i}Gw(t=>({...t,get:(e,n,r)=>Hf(e,n)||t.get(e,n,r),has:(e,n)=>!!Hf(e,n)||t.has(e,n)}));/**
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
 */class Zw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(e1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function e1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const cu="@firebase/app",qf="0.10.13";/**
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
 */const tn=new Pd("@firebase/app"),t1="@firebase/app-compat",n1="@firebase/analytics-compat",r1="@firebase/analytics",s1="@firebase/app-check-compat",i1="@firebase/app-check",o1="@firebase/auth",l1="@firebase/auth-compat",a1="@firebase/database",c1="@firebase/data-connect",u1="@firebase/database-compat",d1="@firebase/functions",h1="@firebase/functions-compat",f1="@firebase/installations",p1="@firebase/installations-compat",m1="@firebase/messaging",g1="@firebase/messaging-compat",v1="@firebase/performance",_1="@firebase/performance-compat",y1="@firebase/remote-config",x1="@firebase/remote-config-compat",w1="@firebase/storage",C1="@firebase/storage-compat",E1="@firebase/firestore",S1="@firebase/vertexai-preview",N1="@firebase/firestore-compat",k1="firebase",I1="10.14.1";/**
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
 */const uu="[DEFAULT]",b1={[cu]:"fire-core",[t1]:"fire-core-compat",[r1]:"fire-analytics",[n1]:"fire-analytics-compat",[i1]:"fire-app-check",[s1]:"fire-app-check-compat",[o1]:"fire-auth",[l1]:"fire-auth-compat",[a1]:"fire-rtdb",[c1]:"fire-data-connect",[u1]:"fire-rtdb-compat",[d1]:"fire-fn",[h1]:"fire-fn-compat",[f1]:"fire-iid",[p1]:"fire-iid-compat",[m1]:"fire-fcm",[g1]:"fire-fcm-compat",[v1]:"fire-perf",[_1]:"fire-perf-compat",[y1]:"fire-rc",[x1]:"fire-rc-compat",[w1]:"fire-gcs",[C1]:"fire-gcs-compat",[E1]:"fire-fst",[N1]:"fire-fst-compat",[S1]:"fire-vertex","fire-js":"fire-js",[k1]:"fire-js-all"};/**
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
 */const pl=new Map,T1=new Map,du=new Map;function Gf(t,e){try{t.container.addComponent(e)}catch(n){tn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function rs(t){const e=t.name;if(du.has(e))return tn.debug(`There were multiple attempts to register component ${e}.`),!1;du.set(e,t);for(const n of pl.values())Gf(n,t);for(const n of T1.values())Gf(n,t);return!0}function Ad(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function yt(t){return t.settings!==void 0}/**
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
 */const P1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},bn=new Vi("app","Firebase",P1);/**
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
 */class R1{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new hr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bn.create("app-deleted",{appName:this._name})}}/**
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
 */const ms=I1;function wv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:uu,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw bn.create("bad-app-name",{appName:String(s)});if(n||(n=mv()),!n)throw bn.create("no-options");const i=pl.get(s);if(i){if(fl(n,i.options)&&fl(r,i.config))return i;throw bn.create("duplicate-app",{appName:s})}const o=new Mw(s);for(const a of du.values())o.addComponent(a);const l=new R1(n,r,o);return pl.set(s,l),l}function Cv(t=uu){const e=pl.get(t);if(!e&&t===uu&&mv())return wv();if(!e)throw bn.create("no-app",{appName:t});return e}function Tn(t,e,n){var r;let s=(r=b1[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),tn.warn(l.join(" "));return}rs(new hr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const A1="firebase-heartbeat-database",j1=1,Ni="firebase-heartbeat-store";let nc=null;function Ev(){return nc||(nc=Yw(A1,j1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ni)}catch(n){console.warn(n)}}}}).catch(t=>{throw bn.create("idb-open",{originalErrorMessage:t.message})})),nc}async function O1(t){try{const n=(await Ev()).transaction(Ni),r=await n.objectStore(Ni).get(Sv(t));return await n.done,r}catch(e){if(e instanceof Vn)tn.warn(e.message);else{const n=bn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});tn.warn(n.message)}}}async function Kf(t,e){try{const r=(await Ev()).transaction(Ni,"readwrite");await r.objectStore(Ni).put(e,Sv(t)),await r.done}catch(n){if(n instanceof Vn)tn.warn(n.message);else{const r=bn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});tn.warn(r.message)}}}function Sv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const D1=1024,L1=30*24*60*60*1e3;class M1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new U1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Qf();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=L1}),this._storage.overwrite(this._heartbeatsCache))}catch(r){tn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Qf(),{heartbeatsToSend:r,unsentEntries:s}=F1(this._heartbeatsCache.heartbeats),i=ul(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return tn.warn(n),""}}}function Qf(){return new Date().toISOString().substring(0,10)}function F1(t,e=D1){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Yf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Yf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class U1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Cw()?Ew().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await O1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Kf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Kf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Yf(t){return ul(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function z1(t){rs(new hr("platform-logger",e=>new Zw(e),"PRIVATE")),rs(new hr("heartbeat",e=>new M1(e),"PRIVATE")),Tn(cu,qf,t),Tn(cu,qf,"esm2017"),Tn("fire-js","")}z1("");var Xf={};const Jf="@firebase/database",Zf="1.0.8";/**
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
 */let Nv="";function V1(t){Nv=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),xe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Si(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return kt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new W1(e)}}catch{}return new $1},tr=kv("localStorage"),B1=kv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=new Pd("@firebase/database"),Iv=function(){let t=1;return function(){return t++}}(),bv=function(t){const e=jw(t),n=new Tw;n.update(e);const r=n.digest();return Id.encodeByteArray(r)},Wi=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Wi.apply(null,r):typeof r=="object"?e+=xe(r):e+=r,e+=" "}return e};let Zs=null,ep=!0;const H1=function(t,e){E(!0,"Can't turn on custom loggers persistently."),qr.logLevel=Y.VERBOSE,Zs=qr.log.bind(qr)},be=function(...t){if(ep===!0&&(ep=!1,Zs===null&&B1.get("logging_enabled")===!0&&H1()),Zs){const e=Wi.apply(null,t);Zs(e)}},$i=function(t){return function(...e){be(t,...e)}},hu=function(...t){const e="FIREBASE INTERNAL ERROR: "+Wi(...t);qr.error(e)},nn=function(...t){const e=`FIREBASE FATAL ERROR: ${Wi(...t)}`;throw qr.error(e),new Error(e)},Ve=function(...t){const e="FIREBASE WARNING: "+Wi(...t);qr.warn(e)},q1=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ve("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},jd=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},G1=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},fr="[MIN_NAME]",On="[MAX_NAME]",xr=function(t,e){if(t===e)return 0;if(t===fr||e===On)return-1;if(e===fr||t===On)return 1;{const n=tp(t),r=tp(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},K1=function(t,e){return t===e?0:t<e?-1:1},js=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+xe(e))},Od=function(t){if(typeof t!="object"||t===null)return xe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=xe(e[r]),n+=":",n+=Od(t[e[r]]);return n+="}",n},Tv=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function Re(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Pv=function(t){E(!jd(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,l,a;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(s?1:0),u.reverse();const d=u.join("");let h="";for(a=0;a<64;a+=8){let f=parseInt(d.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},Q1=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Y1=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function X1(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const J1=new RegExp("^-?(0*)\\d{1,10}$"),Z1=-2147483648,eC=2147483647,tp=function(t){if(J1.test(t)){const e=Number(t);if(e>=Z1&&e<=eC)return e}return null},gs=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ve("Exception was thrown by user callback.",n),e},Math.floor(0))}},tC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ei=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class nC{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ve(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(be("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ve(e)}}class Do{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Do.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dd="5",Rv="v",Av="s",jv="r",Ov="f",Dv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Lv="ls",Mv="p",fu="ac",Fv="websocket",Uv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(e,n,r,s,i=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=tr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&tr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function sC(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Vv(t,e,n){E(typeof e=="string","typeof type must == string"),E(typeof n=="object","typeof params must == object");let r;if(e===Fv)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Uv)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);sC(t)&&(n.ns=t.namespace);const s=[];return Re(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(){this.counters_={}}incrementCounter(e,n=1){kt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return uw(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc={},sc={};function Ld(t){const e=t.toString();return rc[e]||(rc[e]=new iC),rc[e]}function oC(t,e){const n=t.toString();return sc[n]||(sc[n]=e()),sc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&gs(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np="start",aC="close",cC="pLPCommand",uC="pRTLPCB",Wv="id",$v="pw",Bv="ser",dC="cb",hC="seg",fC="ts",pC="d",mC="dframe",Hv=1870,qv=30,gC=Hv-qv,vC=25e3,_C=3e4;class Fr{constructor(e,n,r,s,i,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=$i(e),this.stats_=Ld(n),this.urlFn=a=>(this.appCheckToken&&(a[fu]=this.appCheckToken),Vv(n,Uv,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new lC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(_C)),G1(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Md((...i)=>{const[o,l,a,u,d]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===np)this.id=l,this.password=a;else if(o===aC)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,l]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[np]="t",r[Bv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[dC]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Rv]=Dd,this.transportSessionId&&(r[Av]=this.transportSessionId),this.lastSessionId&&(r[Lv]=this.lastSessionId),this.applicationId&&(r[Mv]=this.applicationId),this.appCheckToken&&(r[fu]=this.appCheckToken),typeof location<"u"&&location.hostname&&Dv.test(location.hostname)&&(r[jv]=Ov);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Fr.forceAllow_=!0}static forceDisallow(){Fr.forceDisallow_=!0}static isAvailable(){return Fr.forceAllow_?!0:!Fr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Q1()&&!Y1()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=hv(n),s=Tv(r,gC);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[mC]="t",r[Wv]=e,r[$v]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=xe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Md{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Iv(),window[cC+this.uniqueCallbackIdentifier]=e,window[uC+this.uniqueCallbackIdentifier]=n,this.myIFrame=Md.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){be("frame writing exception"),l.stack&&be(l.stack),be(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||be("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Wv]=this.myID,e[$v]=this.myPW,e[Bv]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+qv+r.length<=Hv;){const o=this.pendingSegs.shift();r=r+"&"+hC+s+"="+o.seg+"&"+fC+s+"="+o.ts+"&"+pC+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(vC)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{be("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC=16384,xC=45e3;let ml=null;typeof MozWebSocket<"u"?ml=MozWebSocket:typeof WebSocket<"u"&&(ml=WebSocket);class _t{constructor(e,n,r,s,i,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=$i(this.connId),this.stats_=Ld(n),this.connURL=_t.connectionURL_(n,o,l,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[Rv]=Dd,typeof location<"u"&&location.hostname&&Dv.test(location.hostname)&&(o[jv]=Ov),n&&(o[Av]=n),r&&(o[Lv]=r),s&&(o[fu]=s),i&&(o[Mv]=i),Vv(e,Fv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,tr.set("previous_websocket_failure",!0);try{let r;ww(),this.mySock=new ml(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){_t.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&ml!==null&&!_t.forceDisallow_}static previouslyFailed(){return tr.isInMemoryStorage||tr.get("previous_websocket_failure")===!0}markConnectionHealthy(){tr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Si(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(E(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Tv(n,yC);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(xC))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}_t.responsesRequiredToBeHealthy=2;_t.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Fr,_t]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=_t&&_t.isAvailable();let r=n&&!_t.previouslyFailed();if(e.webSocketOnly&&(n||Ve("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[_t];else{const s=this.transports_=[];for(const i of ki.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);ki.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ki.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wC=6e4,CC=5e3,EC=10*1024,SC=100*1024,ic="t",rp="d",NC="s",sp="r",kC="e",ip="o",op="a",lp="n",ap="p",IC="h";class bC{constructor(e,n,r,s,i,o,l,a,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=$i("c:"+this.id+":"),this.transportManager_=new ki(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=ei(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>SC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>EC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ic in e){const n=e[ic];n===op?this.upgradeIfSecondaryHealthy_():n===sp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===ip&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=js("t",e),r=js("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ap,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:op,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:lp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=js("t",e),r=js("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=js(ic,e);if(rp in e){const r=e[rp];if(n===IC){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===lp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===NC?this.onConnectionShutdown_(r):n===sp?this.onReset_(r):n===kC?hu("Server Error: "+r):n===ip?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):hu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Dd!==r&&Ve("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ei(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(wC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ei(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(CC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ap,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(tr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(e){this.allowedEvents_=e,this.listeners_={},E(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){E(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl extends Kv{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Td()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new gl}getInitialEvent(e){return E(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp=32,up=768;class K{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function B(){return new K("")}function F(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Dn(t){return t.pieces_.length-t.pieceNum_}function ee(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new K(t.pieces_,e)}function Fd(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function TC(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Ii(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Qv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new K(e,0)}function fe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof K)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new K(n,0)}function U(t){return t.pieceNum_>=t.pieces_.length}function Ue(t,e){const n=F(t),r=F(e);if(n===null)return e;if(n===r)return Ue(ee(t),ee(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function PC(t,e){const n=Ii(t,0),r=Ii(e,0);for(let s=0;s<n.length&&s<r.length;s++){const i=xr(n[s],r[s]);if(i!==0)return i}return n.length===r.length?0:n.length<r.length?-1:1}function Ud(t,e){if(Dn(t)!==Dn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function at(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Dn(t)>Dn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class RC{constructor(e,n){this.errorPrefix_=n,this.parts_=Ii(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Zl(this.parts_[r]);Yv(this)}}function AC(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Zl(e),Yv(t)}function jC(t){const e=t.parts_.pop();t.byteLength_-=Zl(e),t.parts_.length>0&&(t.byteLength_-=1)}function Yv(t){if(t.byteLength_>up)throw new Error(t.errorPrefix_+"has a key path longer than "+up+" bytes ("+t.byteLength_+").");if(t.parts_.length>cp)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+cp+") or object contains a cycle "+Xn(t))}function Xn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd extends Kv{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new zd}getInitialEvent(e){return E(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os=1e3,OC=60*5*1e3,dp=30*1e3,DC=1.3,LC=3e4,MC="server_kill",hp=3;class Qt extends Gv{constructor(e,n,r,s,i,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Qt.nextPersistentConnectionId_++,this.log_=$i("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Os,this.maxReconnectDelay_=OC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");zd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&gl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(xe(i)),E(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new fs,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),E(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const l={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,l=>{const a=l.d,u=l.s;Qt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&kt(e,"w")){const r=dr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();Ve(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||bw(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=dp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Iw(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+xe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):hu("Unrecognized action received from server: "+xe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){E(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Os,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Os,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>LC&&(this.reconnectDelay_=Os),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*DC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Qt.nextConnectionId_++,i=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(h){E(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?be("getToken() completed but was canceled"):(be("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,l=new bC(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{Ve(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(MC)},i))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ve(h),a())}}}interrupt(e){be("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){be("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ou(this.interruptReasons_)&&(this.reconnectDelay_=Os,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>Od(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new K(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){be("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=hp&&(this.reconnectDelay_=dp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){be("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=hp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Nv.replace(/\./g,"-")]=1,Td()?e["framework.cordova"]=1:vv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=gl.getInstance().currentlyOnline();return ou(this.interruptReasons_)&&e}}Qt.nextPersistentConnectionId_=0;Qt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ea{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new z(fr,e),s=new z(fr,n);return this.compare(r,s)!==0}minPost(){return z.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xo;class Xv extends ea{static get __EMPTY_NODE(){return xo}static set __EMPTY_NODE(e){xo=e}compare(e,n){return xr(e.name,n.name)}isDefinedOn(e){throw hs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return z.MIN}maxPost(){return new z(On,xo)}makePost(e,n){return E(typeof e=="string","KeyIndex indexValue must always be a string."),new z(e,xo)}toString(){return".key"}}const ir=new Xv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Se{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Se.RED,this.left=s??Ge.EMPTY_NODE,this.right=i??Ge.EMPTY_NODE}copy(e,n,r,s,i){return new Se(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ge.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ge.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Se.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Se.RED=!0;Se.BLACK=!1;class FC{copy(e,n,r,s,i){return this}insert(e,n,r){return new Se(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ge{constructor(e,n=Ge.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ge(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Se.BLACK,null,null))}remove(e){return new Ge(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Se.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new wo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new wo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new wo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new wo(this.root_,null,this.comparator_,!0,e)}}Ge.EMPTY_NODE=new FC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UC(t,e){return xr(t.name,e.name)}function Vd(t,e){return xr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pu;function zC(t){pu=t}const Jv=function(t){return typeof t=="number"?"number:"+Pv(t):"string:"+t},Zv=function(t){if(t.isLeafNode()){const e=t.val();E(typeof e=="string"||typeof e=="number"||typeof e=="object"&&kt(e,".sv"),"Priority must be a string or number.")}else E(t===pu||t.isEmpty(),"priority of unexpected type.");E(t===pu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fp;class Ce{constructor(e,n=Ce.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,E(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Zv(this.priorityNode_)}static set __childrenNodeConstructor(e){fp=e}static get __childrenNodeConstructor(){return fp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ce(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ce.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return U(e)?this:F(e)===".priority"?this.priorityNode_:Ce.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ce.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=F(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(E(r!==".priority"||Dn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ce.__childrenNodeConstructor.EMPTY_NODE.updateChild(ee(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Jv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Pv(this.value_):e+=this.value_,this.lazyHash_=bv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ce.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ce.__childrenNodeConstructor?-1:(E(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=Ce.VALUE_TYPE_ORDER.indexOf(n),i=Ce.VALUE_TYPE_ORDER.indexOf(r);return E(s>=0,"Unknown leaf type: "+n),E(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ce.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let e_,t_;function VC(t){e_=t}function WC(t){t_=t}class $C extends ea{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?xr(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return z.MIN}maxPost(){return new z(On,new Ce("[PRIORITY-POST]",t_))}makePost(e,n){const r=e_(e);return new z(n,new Ce("[PRIORITY-POST]",r))}toString(){return".priority"}}const oe=new $C;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BC=Math.log(2);class HC{constructor(e){const n=i=>parseInt(Math.log(i)/BC,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const vl=function(t,e,n,r){t.sort(e);const s=function(a,u){const d=u-a;let h,f;if(d===0)return null;if(d===1)return h=t[a],f=n?n(h):h,new Se(f,h.node,Se.BLACK,null,null);{const _=parseInt(d/2,10)+a,p=s(a,_),y=s(_+1,u);return h=t[_],f=n?n(h):h,new Se(f,h.node,Se.BLACK,p,y)}},i=function(a){let u=null,d=null,h=t.length;const f=function(p,y){const w=h-p,m=h;h-=p;const g=s(w+1,m),v=t[w],x=n?n(v):v;_(new Se(x,v.node,y,null,g))},_=function(p){u?(u.left=p,u=p):(d=p,u=p)};for(let p=0;p<a.count;++p){const y=a.nextBitIsOne(),w=Math.pow(2,a.count-(p+1));y?f(w,Se.BLACK):(f(w,Se.BLACK),f(w,Se.RED))}return d},o=new HC(t.length),l=i(o);return new Ge(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oc;const Nr={};class Bt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return E(Nr&&oe,"ChildrenNode.ts has not been loaded"),oc=oc||new Bt({".priority":Nr},{".priority":oe}),oc}get(e){const n=dr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ge?n:null}hasIndex(e){return kt(this.indexSet_,e.toString())}addIndex(e,n){E(e!==ir,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(z.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let l;s?l=vl(r,e.getCompare()):l=Nr;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const d=Object.assign({},this.indexes_);return d[a]=l,new Bt(d,u)}addToIndexes(e,n){const r=hl(this.indexes_,(s,i)=>{const o=dr(this.indexSet_,i);if(E(o,"Missing index implementation for "+i),s===Nr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(z.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),vl(l,o.getCompare())}else return Nr;else{const l=n.get(e.name);let a=s;return l&&(a=a.remove(new z(e.name,l))),a.insert(e,e.node)}});return new Bt(r,this.indexSet_)}removeFromIndexes(e,n){const r=hl(this.indexes_,s=>{if(s===Nr)return s;{const i=n.get(e.name);return i?s.remove(new z(e.name,i)):s}});return new Bt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ds;class A{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Zv(this.priorityNode_),this.children_.isEmpty()&&E(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ds||(Ds=new A(new Ge(Vd),null,Bt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ds}updatePriority(e){return this.children_.isEmpty()?this:new A(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ds:n}}getChild(e){const n=F(e);return n===null?this:this.getImmediateChild(n).getChild(ee(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(E(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new z(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?Ds:this.priorityNode_;return new A(s,o,i)}}updateChild(e,n){const r=F(e);if(r===null)return n;{E(F(e)!==".priority"||Dn(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(ee(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(oe,(o,l)=>{n[o]=l.val(e),r++,i&&A.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Jv(this.getPriority().val())+":"),this.forEachChild(oe,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":bv(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new z(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new z(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new z(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,z.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,z.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Bi?-1:0}withIndex(e){if(e===ir||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new A(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ir||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(oe),s=n.getIterator(oe);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ir?null:this.indexMap_.get(e.toString())}}A.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class qC extends A{constructor(){super(new Ge(Vd),A.EMPTY_NODE,Bt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return A.EMPTY_NODE}isEmpty(){return!1}}const Bi=new qC;Object.defineProperties(z,{MIN:{value:new z(fr,A.EMPTY_NODE)},MAX:{value:new z(On,Bi)}});Xv.__EMPTY_NODE=A.EMPTY_NODE;Ce.__childrenNodeConstructor=A;zC(Bi);WC(Bi);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GC=!0;function ve(t,e=null){if(t===null)return A.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),E(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ce(n,ve(e))}if(!(t instanceof Array)&&GC){const n=[];let r=!1;if(Re(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ve(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new z(o,a)))}}),n.length===0)return A.EMPTY_NODE;const i=vl(n,UC,o=>o.name,Vd);if(r){const o=vl(n,oe.getCompare());return new A(i,ve(e),new Bt({".priority":o},{".priority":oe}))}else return new A(i,ve(e),Bt.Default)}else{let n=A.EMPTY_NODE;return Re(t,(r,s)=>{if(kt(t,r)&&r.substring(0,1)!=="."){const i=ve(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(ve(e))}}VC(ve);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd extends ea{constructor(e){super(),this.indexPath_=e,E(!U(e)&&F(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?xr(e.name,n.name):i}makePost(e,n){const r=ve(e),s=A.EMPTY_NODE.updateChild(this.indexPath_,r);return new z(n,s)}maxPost(){const e=A.EMPTY_NODE.updateChild(this.indexPath_,Bi);return new z(On,e)}toString(){return Ii(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC extends ea{compare(e,n){const r=e.node.compareTo(n.node);return r===0?xr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return z.MIN}maxPost(){return z.MAX}makePost(e,n){const r=ve(e);return new z(n,r)}toString(){return".value"}}const n_=new KC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r_(t){return{type:"value",snapshotNode:t}}function ss(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function bi(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ti(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function QC(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e){this.index_=e}updateChild(e,n,r,s,i,o){E(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(s).equals(r.getChild(s))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(bi(n,l)):E(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(ss(n,r)):o.trackChildChange(Ti(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(oe,(s,i)=>{n.hasChild(s)||r.trackChildChange(bi(s,i))}),n.isLeafNode()||n.forEachChild(oe,(s,i)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(i)||r.trackChildChange(Ti(s,i,o))}else r.trackChildChange(ss(s,i))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?A.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e){this.indexedFilter_=new $d(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Pi.getStartPost_(e),this.endPost_=Pi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,s,i,o){return this.matches(new z(n,r))||(r=A.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,s,i,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=A.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(A.EMPTY_NODE);const i=this;return n.forEachChild(oe,(o,l)=>{i.matches(new z(o,l))||(s=s.updateImmediateChild(o,A.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Pi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,s,i,o){return this.rangedFilter_.matches(new z(n,r))||(r=A.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,s,i,o):this.fullLimitUpdateChild_(e,n,r,i,o)}updateFullNode(e,n,r){let s;if(n.isLeafNode()||n.isEmpty())s=A.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=A.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const l=i.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))s=s.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(A.EMPTY_NODE);let i;this.reverse_?i=s.getReverseIterator(this.index_):i=s.getIterator(this.index_);let o=0;for(;i.hasNext();){const l=i.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:s=s.updateImmediateChild(l.name,A.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,s,i){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,_)=>h(_,f)}else o=this.index_.getCompare();const l=e;E(l.numChildren()===this.limit_,"");const a=new z(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let f=s.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=s.getChildAfterChild(this.index_,f,this.reverse_);const _=f==null?1:o(f,a);if(d&&!r.isEmpty()&&_>=0)return i!=null&&i.trackChildChange(Ti(n,r,h)),l.updateImmediateChild(n,r);{i!=null&&i.trackChildChange(bi(n,h));const y=l.updateImmediateChild(n,A.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(i!=null&&i.trackChildChange(ss(f.name,f.node)),y.updateImmediateChild(f.name,f.node)):y}}else return r.isEmpty()?e:d&&o(u,a)>=0?(i!=null&&(i.trackChildChange(bi(u.name,u.node)),i.trackChildChange(ss(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,A.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=oe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return E(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return E(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:fr}hasEnd(){return this.endSet_}getIndexEndValue(){return E(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return E(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:On}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return E(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===oe}copy(){const e=new Bd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function XC(t){return t.loadsAllData()?new $d(t.getIndex()):t.hasLimit()?new YC(t):new Pi(t)}function JC(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function ZC(t,e,n){const r=t.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function eE(t,e){const n=t.copy();return n.index_=e,n}function pp(t){const e={};if(t.isDefault())return e;let n;if(t.index_===oe?n="$priority":t.index_===n_?n="$value":t.index_===ir?n="$key":(E(t.index_ instanceof Wd,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=xe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=xe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+xe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=xe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+xe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function mp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==oe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l extends Gv{constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=$i("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(E(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=_l.getListenId_(e,r),l={};this.listens_[o]=l;const a=pp(e._queryParams);this.restRequest_(i+".json",a,(u,d)=>{let h=d;if(u===404&&(h=null,u=null),u===null&&this.onDataUpdate_(i,h,!1,r),dr(this.listens_,o)===l){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",s(f,null)}})}unlisten(e,n){const r=_l.getListenId_(e,n);delete this.listens_[r]}get(e){const n=pp(e._queryParams),r=e._path.toString(),s=new fs;return this.restRequest_(r+".json",n,(i,o)=>{let l=o;i===404&&(l=null,i=null),i===null?(this.onDataUpdate_(r,l,!1,null),s.resolve(l)):s.reject(new Error(l))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ps(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Si(l.responseText)}catch{Ve("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Ve("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(){this.rootNode_=A.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(){return{value:null,children:new Map}}function s_(t,e,n){if(U(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=F(e);t.children.has(r)||t.children.set(r,yl());const s=t.children.get(r);e=ee(e),s_(s,e,n)}}function mu(t,e,n){t.value!==null?n(e,t.value):nE(t,(r,s)=>{const i=new K(e.toString()+"/"+r);mu(s,i,n)})}function nE(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Re(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp=10*1e3,sE=30*1e3,iE=5*60*1e3;class oE{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new rE(e);const r=gp+(sE-gp)*Math.random();ei(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Re(e,(s,i)=>{i>0&&kt(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),ei(this.reportStats_.bind(this),Math.floor(Math.random()*2*iE))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(xt||(xt={}));function Hd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function qd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Gd(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=xt.ACK_USER_WRITE,this.source=Hd()}operationForChild(e){if(U(this.path)){if(this.affectedTree.value!=null)return E(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new K(e));return new xl(B(),n,this.revert)}}else return E(F(this.path)===e,"operationForChild called for unrelated child."),new xl(ee(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,n){this.source=e,this.path=n,this.type=xt.LISTEN_COMPLETE}operationForChild(e){return U(this.path)?new Ri(this.source,B()):new Ri(this.source,ee(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=xt.OVERWRITE}operationForChild(e){return U(this.path)?new pr(this.source,B(),this.snap.getImmediateChild(e)):new pr(this.source,ee(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=xt.MERGE}operationForChild(e){if(U(this.path)){const n=this.children.subtree(new K(e));return n.isEmpty()?null:n.value?new pr(this.source,B(),n.value):new is(this.source,B(),n)}else return E(F(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new is(this.source,ee(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(U(e))return this.isFullyInitialized()&&!this.filtered_;const n=F(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function aE(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(QC(o.childName,o.snapshotNode))}),Ls(t,s,"child_removed",e,r,n),Ls(t,s,"child_added",e,r,n),Ls(t,s,"child_moved",i,r,n),Ls(t,s,"child_changed",e,r,n),Ls(t,s,"value",e,r,n),s}function Ls(t,e,n,r,s,i){const o=r.filter(l=>l.type===n);o.sort((l,a)=>uE(t,l,a)),o.forEach(l=>{const a=cE(t,l,i);s.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function cE(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function uE(t,e,n){if(e.childName==null||n.childName==null)throw hs("Should only compare child_ events.");const r=new z(e.childName,e.snapshotNode),s=new z(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(t,e){return{eventCache:t,serverCache:e}}function ti(t,e,n,r){return ta(new Ln(e,n,r),t.serverCache)}function i_(t,e,n,r){return ta(t.eventCache,new Ln(e,n,r))}function wl(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function mr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lc;const dE=()=>(lc||(lc=new Ge(K1)),lc);class Z{constructor(e,n=dE()){this.value=e,this.children=n}static fromObject(e){let n=new Z(null);return Re(e,(r,s)=>{n=n.set(new K(r),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:B(),value:this.value};if(U(e))return null;{const r=F(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(ee(e),n);return i!=null?{path:fe(new K(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(U(e))return this;{const n=F(e),r=this.children.get(n);return r!==null?r.subtree(ee(e)):new Z(null)}}set(e,n){if(U(e))return new Z(n,this.children);{const r=F(e),i=(this.children.get(r)||new Z(null)).set(ee(e),n),o=this.children.insert(r,i);return new Z(this.value,o)}}remove(e){if(U(e))return this.children.isEmpty()?new Z(null):new Z(null,this.children);{const n=F(e),r=this.children.get(n);if(r){const s=r.remove(ee(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new Z(null):new Z(this.value,i)}else return this}}get(e){if(U(e))return this.value;{const n=F(e),r=this.children.get(n);return r?r.get(ee(e)):null}}setTree(e,n){if(U(e))return n;{const r=F(e),i=(this.children.get(r)||new Z(null)).setTree(ee(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new Z(this.value,o)}}fold(e){return this.fold_(B(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(fe(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,B(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(U(e))return null;{const i=F(e),o=this.children.get(i);return o?o.findOnPath_(ee(e),fe(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,B(),n)}foreachOnPath_(e,n,r){if(U(e))return this;{this.value&&r(n,this.value);const s=F(e),i=this.children.get(s);return i?i.foreachOnPath_(ee(e),fe(n,s),r):new Z(null)}}foreach(e){this.foreach_(B(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(fe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.writeTree_=e}static empty(){return new Et(new Z(null))}}function ni(t,e,n){if(U(e))return new Et(new Z(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=Ue(s,e);return i=i.updateChild(o,n),new Et(t.writeTree_.set(s,i))}else{const s=new Z(n),i=t.writeTree_.setTree(e,s);return new Et(i)}}}function gu(t,e,n){let r=t;return Re(n,(s,i)=>{r=ni(r,fe(e,s),i)}),r}function vp(t,e){if(U(e))return Et.empty();{const n=t.writeTree_.setTree(e,new Z(null));return new Et(n)}}function vu(t,e){return wr(t,e)!=null}function wr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ue(n.path,e)):null}function _p(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(oe,(r,s)=>{e.push(new z(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new z(r,s.value))}),e}function Pn(t,e){if(U(e))return t;{const n=wr(t,e);return n!=null?new Et(new Z(n)):new Et(t.writeTree_.subtree(e))}}function _u(t){return t.writeTree_.isEmpty()}function os(t,e){return o_(B(),t.writeTree_,e)}function o_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(E(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=o_(fe(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(fe(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(t,e){return u_(e,t)}function hE(t,e,n,r,s){E(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=ni(t.visibleWrites,e,n)),t.lastWriteId=r}function fE(t,e,n,r){E(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=gu(t.visibleWrites,e,n),t.lastWriteId=r}function pE(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function mE(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);E(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&gE(l,r.path)?s=!1:at(r.path,l.path)&&(i=!0)),o--}if(s){if(i)return vE(t),!0;if(r.snap)t.visibleWrites=vp(t.visibleWrites,r.path);else{const l=r.children;Re(l,a=>{t.visibleWrites=vp(t.visibleWrites,fe(r.path,a))})}return!0}else return!1}function gE(t,e){if(t.snap)return at(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&at(fe(t.path,n),e))return!0;return!1}function vE(t){t.visibleWrites=l_(t.allWrites,_E,B()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function _E(t){return t.visible}function l_(t,e,n){let r=Et.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let l;if(i.snap)at(n,o)?(l=Ue(n,o),r=ni(r,l,i.snap)):at(o,n)&&(l=Ue(o,n),r=ni(r,B(),i.snap.getChild(l)));else if(i.children){if(at(n,o))l=Ue(n,o),r=gu(r,l,i.children);else if(at(o,n))if(l=Ue(o,n),U(l))r=gu(r,B(),i.children);else{const a=dr(i.children,F(l));if(a){const u=a.getChild(ee(l));r=ni(r,B(),u)}}}else throw hs("WriteRecord should have .snap or .children")}}return r}function a_(t,e,n,r,s){if(!r&&!s){const i=wr(t.visibleWrites,e);if(i!=null)return i;{const o=Pn(t.visibleWrites,e);if(_u(o))return n;if(n==null&&!vu(o,B()))return null;{const l=n||A.EMPTY_NODE;return os(o,l)}}}else{const i=Pn(t.visibleWrites,e);if(!s&&_u(i))return n;if(!s&&n==null&&!vu(i,B()))return null;{const o=function(u){return(u.visible||s)&&(!r||!~r.indexOf(u.writeId))&&(at(u.path,e)||at(e,u.path))},l=l_(t.allWrites,o,e),a=n||A.EMPTY_NODE;return os(l,a)}}}function yE(t,e,n){let r=A.EMPTY_NODE;const s=wr(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(oe,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=Pn(t.visibleWrites,e);return n.forEachChild(oe,(o,l)=>{const a=os(Pn(i,new K(o)),l);r=r.updateImmediateChild(o,a)}),_p(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=Pn(t.visibleWrites,e);return _p(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function xE(t,e,n,r,s){E(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=fe(e,n);if(vu(t.visibleWrites,i))return null;{const o=Pn(t.visibleWrites,i);return _u(o)?s.getChild(n):os(o,s.getChild(n))}}function wE(t,e,n,r){const s=fe(e,n),i=wr(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=Pn(t.visibleWrites,s);return os(o,r.getNode().getImmediateChild(n))}else return null}function CE(t,e){return wr(t.visibleWrites,e)}function EE(t,e,n,r,s,i,o){let l;const a=Pn(t.visibleWrites,e),u=wr(a,B());if(u!=null)l=u;else if(n!=null)l=os(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],h=o.getCompare(),f=i?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let _=f.getNext();for(;_&&d.length<s;)h(_,r)!==0&&d.push(_),_=f.getNext();return d}else return[]}function SE(){return{visibleWrites:Et.empty(),allWrites:[],lastWriteId:-1}}function Cl(t,e,n,r){return a_(t.writeTree,t.treePath,e,n,r)}function Kd(t,e){return yE(t.writeTree,t.treePath,e)}function yp(t,e,n,r){return xE(t.writeTree,t.treePath,e,n,r)}function El(t,e){return CE(t.writeTree,fe(t.treePath,e))}function NE(t,e,n,r,s,i){return EE(t.writeTree,t.treePath,e,n,r,s,i)}function Qd(t,e,n){return wE(t.writeTree,t.treePath,e,n)}function c_(t,e){return u_(fe(t.treePath,e),t.writeTree)}function u_(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;E(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),E(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,Ti(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,bi(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,ss(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,Ti(r,e.snapshotNode,s.oldSnap));else throw hs("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const d_=new IE;class Yd{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Ln(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Qd(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:mr(this.viewCache_),i=NE(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bE(t){return{filter:t}}function TE(t,e){E(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),E(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function PE(t,e,n,r,s){const i=new kE;let o,l;if(n.type===xt.OVERWRITE){const u=n;u.source.fromUser?o=yu(t,e,u.path,u.snap,r,s,i):(E(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!U(u.path),o=Sl(t,e,u.path,u.snap,r,s,l,i))}else if(n.type===xt.MERGE){const u=n;u.source.fromUser?o=AE(t,e,u.path,u.children,r,s,i):(E(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=xu(t,e,u.path,u.children,r,s,l,i))}else if(n.type===xt.ACK_USER_WRITE){const u=n;u.revert?o=DE(t,e,u.path,r,s,i):o=jE(t,e,u.path,u.affectedTree,r,s,i)}else if(n.type===xt.LISTEN_COMPLETE)o=OE(t,e,n.path,r,i);else throw hs("Unknown operation type: "+n.type);const a=i.getChanges();return RE(e,o,a),{viewCache:o,changes:a}}function RE(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=wl(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(r_(wl(e)))}}function h_(t,e,n,r,s,i){const o=e.eventCache;if(El(r,n)!=null)return e;{let l,a;if(U(n))if(E(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=mr(e),d=u instanceof A?u:A.EMPTY_NODE,h=Kd(r,d);l=t.filter.updateFullNode(e.eventCache.getNode(),h,i)}else{const u=Cl(r,mr(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=F(n);if(u===".priority"){E(Dn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=e.serverCache.getNode();const h=yp(r,n,d,a);h!=null?l=t.filter.updatePriority(d,h):l=o.getNode()}else{const d=ee(n);let h;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const f=yp(r,n,o.getNode(),a);f!=null?h=o.getNode().getImmediateChild(u).updateChild(d,f):h=o.getNode().getImmediateChild(u)}else h=Qd(r,u,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),u,h,d,s,i):l=o.getNode()}}return ti(e,l,o.isFullyInitialized()||U(n),t.filter.filtersNodes())}}function Sl(t,e,n,r,s,i,o,l){const a=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(U(n))u=d.updateFullNode(a.getNode(),r,null);else if(d.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,r);u=d.updateFullNode(a.getNode(),_,null)}else{const _=F(n);if(!a.isCompleteForPath(n)&&Dn(n)>1)return e;const p=ee(n),w=a.getNode().getImmediateChild(_).updateChild(p,r);_===".priority"?u=d.updatePriority(a.getNode(),w):u=d.updateChild(a.getNode(),_,w,p,d_,null)}const h=i_(e,u,a.isFullyInitialized()||U(n),d.filtersNodes()),f=new Yd(s,h,i);return h_(t,h,n,s,f,l)}function yu(t,e,n,r,s,i,o){const l=e.eventCache;let a,u;const d=new Yd(s,e,i);if(U(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=ti(e,u,!0,t.filter.filtersNodes());else{const h=F(n);if(h===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=ti(e,u,l.isFullyInitialized(),l.isFiltered());else{const f=ee(n),_=l.getNode().getImmediateChild(h);let p;if(U(f))p=r;else{const y=d.getCompleteChild(h);y!=null?Fd(f)===".priority"&&y.getChild(Qv(f)).isEmpty()?p=y:p=y.updateChild(f,r):p=A.EMPTY_NODE}if(_.equals(p))a=e;else{const y=t.filter.updateChild(l.getNode(),h,p,f,d,o);a=ti(e,y,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function xp(t,e){return t.eventCache.isCompleteForChild(e)}function AE(t,e,n,r,s,i,o){let l=e;return r.foreach((a,u)=>{const d=fe(n,a);xp(e,F(d))&&(l=yu(t,l,d,u,s,i,o))}),r.foreach((a,u)=>{const d=fe(n,a);xp(e,F(d))||(l=yu(t,l,d,u,s,i,o))}),l}function wp(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function xu(t,e,n,r,s,i,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;U(n)?u=r:u=new Z(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((h,f)=>{if(d.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),p=wp(t,_,f);a=Sl(t,a,new K(h),p,s,i,o,l)}}),u.children.inorderTraversal((h,f)=>{const _=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!d.hasChild(h)&&!_){const p=e.serverCache.getNode().getImmediateChild(h),y=wp(t,p,f);a=Sl(t,a,new K(h),y,s,i,o,l)}}),a}function jE(t,e,n,r,s,i,o){if(El(s,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(U(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Sl(t,e,n,a.getNode().getChild(n),s,i,l,o);if(U(n)){let u=new Z(null);return a.getNode().forEachChild(ir,(d,h)=>{u=u.set(new K(d),h)}),xu(t,e,n,u,s,i,l,o)}else return e}else{let u=new Z(null);return r.foreach((d,h)=>{const f=fe(n,d);a.isCompleteForPath(f)&&(u=u.set(d,a.getNode().getChild(f)))}),xu(t,e,n,u,s,i,l,o)}}function OE(t,e,n,r,s){const i=e.serverCache,o=i_(e,i.getNode(),i.isFullyInitialized()||U(n),i.isFiltered());return h_(t,o,n,r,d_,s)}function DE(t,e,n,r,s,i){let o;if(El(r,n)!=null)return e;{const l=new Yd(r,e,s),a=e.eventCache.getNode();let u;if(U(n)||F(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Cl(r,mr(e));else{const h=e.serverCache.getNode();E(h instanceof A,"serverChildren would be complete if leaf node"),d=Kd(r,h)}d=d,u=t.filter.updateFullNode(a,d,i)}else{const d=F(n);let h=Qd(r,d,e.serverCache);h==null&&e.serverCache.isCompleteForChild(d)&&(h=a.getImmediateChild(d)),h!=null?u=t.filter.updateChild(a,d,h,ee(n),l,i):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(a,d,A.EMPTY_NODE,ee(n),l,i):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Cl(r,mr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||El(r,B())!=null,ti(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new $d(r.getIndex()),i=XC(r);this.processor_=bE(i);const o=n.serverCache,l=n.eventCache,a=s.updateFullNode(A.EMPTY_NODE,o.getNode(),null),u=i.updateFullNode(A.EMPTY_NODE,l.getNode(),null),d=new Ln(a,o.isFullyInitialized(),s.filtersNodes()),h=new Ln(u,l.isFullyInitialized(),i.filtersNodes());this.viewCache_=ta(h,d),this.eventGenerator_=new lE(this.query_)}get query(){return this.query_}}function ME(t){return t.viewCache_.serverCache.getNode()}function FE(t){return wl(t.viewCache_)}function UE(t,e){const n=mr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!U(e)&&!n.getImmediateChild(F(e)).isEmpty())?n.getChild(e):null}function Cp(t){return t.eventRegistrations_.length===0}function zE(t,e){t.eventRegistrations_.push(e)}function Ep(t,e,n){const r=[];if(n){E(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(n,s);o&&r.push(o)})}if(e){let s=[];for(let i=0;i<t.eventRegistrations_.length;++i){const o=t.eventRegistrations_[i];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(i+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return r}function Sp(t,e,n,r){e.type===xt.MERGE&&e.source.queryId!==null&&(E(mr(t.viewCache_),"We should always have a full cache before handling merges"),E(wl(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=PE(t.processor_,s,e,n,r);return TE(t.processor_,i.viewCache),E(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,f_(t,i.changes,i.viewCache.eventCache.getNode(),null)}function VE(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(oe,(i,o)=>{r.push(ss(i,o))}),n.isFullyInitialized()&&r.push(r_(n.getNode())),f_(t,r,n.getNode(),e)}function f_(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return aE(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nl;class p_{constructor(){this.views=new Map}}function WE(t){E(!Nl,"__referenceConstructor has already been defined"),Nl=t}function $E(){return E(Nl,"Reference.ts has not been loaded"),Nl}function BE(t){return t.views.size===0}function Xd(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return E(i!=null,"SyncTree gave us an op for an invalid query."),Sp(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(Sp(o,e,n,r));return i}}function m_(t,e,n,r,s){const i=e._queryIdentifier,o=t.views.get(i);if(!o){let l=Cl(n,s?r:null),a=!1;l?a=!0:r instanceof A?(l=Kd(n,r),a=!1):(l=A.EMPTY_NODE,a=!1);const u=ta(new Ln(l,a,!1),new Ln(r,s,!1));return new LE(e,u)}return o}function HE(t,e,n,r,s,i){const o=m_(t,e,r,s,i);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),zE(o,n),VE(o,n)}function qE(t,e,n,r){const s=e._queryIdentifier,i=[];let o=[];const l=Mn(t);if(s==="default")for(const[a,u]of t.views.entries())o=o.concat(Ep(u,n,r)),Cp(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||i.push(u.query));else{const a=t.views.get(s);a&&(o=o.concat(Ep(a,n,r)),Cp(a)&&(t.views.delete(s),a.query._queryParams.loadsAllData()||i.push(a.query)))}return l&&!Mn(t)&&i.push(new($E())(e._repo,e._path)),{removed:i,events:o}}function g_(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Rn(t,e){let n=null;for(const r of t.views.values())n=n||UE(r,e);return n}function v_(t,e){if(e._queryParams.loadsAllData())return ra(t);{const r=e._queryIdentifier;return t.views.get(r)}}function __(t,e){return v_(t,e)!=null}function Mn(t){return ra(t)!=null}function ra(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kl;function GE(t){E(!kl,"__referenceConstructor has already been defined"),kl=t}function KE(){return E(kl,"Reference.ts has not been loaded"),kl}let QE=1;class Np{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Z(null),this.pendingWriteTree_=SE(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Jd(t,e,n,r,s){return hE(t.pendingWriteTree_,e,n,r,s),s?vs(t,new pr(Hd(),e,n)):[]}function YE(t,e,n,r){fE(t.pendingWriteTree_,e,n,r);const s=Z.fromObject(n);return vs(t,new is(Hd(),e,s))}function _n(t,e,n=!1){const r=pE(t.pendingWriteTree_,e);if(mE(t.pendingWriteTree_,e)){let i=new Z(null);return r.snap!=null?i=i.set(B(),!0):Re(r.children,o=>{i=i.set(new K(o),!0)}),vs(t,new xl(r.path,i,n))}else return[]}function Hi(t,e,n){return vs(t,new pr(qd(),e,n))}function XE(t,e,n){const r=Z.fromObject(n);return vs(t,new is(qd(),e,r))}function JE(t,e){return vs(t,new Ri(qd(),e))}function ZE(t,e,n){const r=Zd(t,n);if(r){const s=eh(r),i=s.path,o=s.queryId,l=Ue(i,e),a=new Ri(Gd(o),l);return th(t,i,a)}else return[]}function Il(t,e,n,r,s=!1){const i=e._path,o=t.syncPointTree_.get(i);let l=[];if(o&&(e._queryIdentifier==="default"||__(o,e))){const a=qE(o,e,n,r);BE(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const u=a.removed;if(l=a.events,!s){const d=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(i,(f,_)=>Mn(_));if(d&&!h){const f=t.syncPointTree_.subtree(i);if(!f.isEmpty()){const _=nS(f);for(let p=0;p<_.length;++p){const y=_[p],w=y.query,m=C_(t,y);t.listenProvider_.startListening(ri(w),Ai(t,w),m.hashFn,m.onComplete)}}}!h&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(ri(e),null):u.forEach(f=>{const _=t.queryToTagMap.get(ia(f));t.listenProvider_.stopListening(ri(f),_)}))}rS(t,u)}return l}function y_(t,e,n,r){const s=Zd(t,r);if(s!=null){const i=eh(s),o=i.path,l=i.queryId,a=Ue(o,e),u=new pr(Gd(l),a,n);return th(t,o,u)}else return[]}function eS(t,e,n,r){const s=Zd(t,r);if(s){const i=eh(s),o=i.path,l=i.queryId,a=Ue(o,e),u=Z.fromObject(n),d=new is(Gd(l),a,u);return th(t,o,d)}else return[]}function wu(t,e,n,r=!1){const s=e._path;let i=null,o=!1;t.syncPointTree_.foreachOnPath(s,(f,_)=>{const p=Ue(f,s);i=i||Rn(_,p),o=o||Mn(_)});let l=t.syncPointTree_.get(s);l?(o=o||Mn(l),i=i||Rn(l,B())):(l=new p_,t.syncPointTree_=t.syncPointTree_.set(s,l));let a;i!=null?a=!0:(a=!1,i=A.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((_,p)=>{const y=Rn(p,B());y&&(i=i.updateImmediateChild(_,y))}));const u=__(l,e);if(!u&&!e._queryParams.loadsAllData()){const f=ia(e);E(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const _=sS();t.queryToTagMap.set(f,_),t.tagToQueryMap.set(_,f)}const d=na(t.pendingWriteTree_,s);let h=HE(l,e,n,d,i,a);if(!u&&!o&&!r){const f=v_(l,e);h=h.concat(iS(t,e,f))}return h}function sa(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Ue(o,e),u=Rn(l,a);if(u)return u});return a_(s,e,i,n,!0)}function tS(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,d)=>{const h=Ue(u,n);r=r||Rn(d,h)});let s=t.syncPointTree_.get(n);s?r=r||Rn(s,B()):(s=new p_,t.syncPointTree_=t.syncPointTree_.set(n,s));const i=r!=null,o=i?new Ln(r,!0,!1):null,l=na(t.pendingWriteTree_,e._path),a=m_(s,e,l,i?o.getNode():A.EMPTY_NODE,i);return FE(a)}function vs(t,e){return x_(e,t.syncPointTree_,null,na(t.pendingWriteTree_,B()))}function x_(t,e,n,r){if(U(t.path))return w_(t,e,n,r);{const s=e.get(B());n==null&&s!=null&&(n=Rn(s,B()));let i=[];const o=F(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,d=c_(r,o);i=i.concat(x_(l,a,u,d))}return s&&(i=i.concat(Xd(s,t,r,n))),i}}function w_(t,e,n,r){const s=e.get(B());n==null&&s!=null&&(n=Rn(s,B()));let i=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=c_(r,o),d=t.operationForChild(o);d&&(i=i.concat(w_(d,l,a,u)))}),s&&(i=i.concat(Xd(s,t,r,n))),i}function C_(t,e){const n=e.query,r=Ai(t,n);return{hashFn:()=>(ME(e)||A.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?ZE(t,n._path,r):JE(t,n._path);{const i=X1(s,n);return Il(t,n,null,i)}}}}function Ai(t,e){const n=ia(e);return t.queryToTagMap.get(n)}function ia(t){return t._path.toString()+"$"+t._queryIdentifier}function Zd(t,e){return t.tagToQueryMap.get(e)}function eh(t){const e=t.indexOf("$");return E(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new K(t.substr(0,e))}}function th(t,e,n){const r=t.syncPointTree_.get(e);E(r,"Missing sync point for query tag that we're tracking");const s=na(t.pendingWriteTree_,e);return Xd(r,n,s,null)}function nS(t){return t.fold((e,n,r)=>{if(n&&Mn(n))return[ra(n)];{let s=[];return n&&(s=g_(n)),Re(r,(i,o)=>{s=s.concat(o)}),s}})}function ri(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(KE())(t._repo,t._path):t}function rS(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const s=ia(r),i=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(i)}}}function sS(){return QE++}function iS(t,e,n){const r=e._path,s=Ai(t,e),i=C_(t,n),o=t.listenProvider_.startListening(ri(e),s,i.hashFn,i.onComplete),l=t.syncPointTree_.subtree(r);if(s)E(!Mn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,d,h)=>{if(!U(u)&&d&&Mn(d))return[ra(d).query];{let f=[];return d&&(f=f.concat(g_(d).map(_=>_.query))),Re(h,(_,p)=>{f=f.concat(p)}),f}});for(let u=0;u<a.length;++u){const d=a[u];t.listenProvider_.stopListening(ri(d),Ai(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new nh(n)}node(){return this.node_}}class rh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=fe(this.path_,e);return new rh(this.syncTree_,n)}node(){return sa(this.syncTree_,this.path_)}}const oS=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},kp=function(t,e,n){if(!t||typeof t!="object")return t;if(E(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return lS(t[".sv"],e,n);if(typeof t[".sv"]=="object")return aS(t[".sv"],e);E(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},lS=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:E(!1,"Unexpected server value: "+t)}},aS=function(t,e,n){t.hasOwnProperty("increment")||E(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&E(!1,"Unexpected increment value: "+r);const s=e.node();if(E(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},E_=function(t,e,n,r){return ih(e,new rh(n,t),r)},sh=function(t,e,n){return ih(t,new nh(e),n)};function ih(t,e,n){const r=t.getPriority().val(),s=kp(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,l=kp(o.getValue(),e,n);return l!==o.getValue()||s!==o.getPriority().val()?new Ce(l,ve(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new Ce(s))),o.forEachChild(oe,(l,a)=>{const u=ih(a,e.getImmediateChild(l),n);u!==a&&(i=i.updateImmediateChild(l,u))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function oa(t,e){let n=e instanceof K?e:new K(e),r=t,s=F(n);for(;s!==null;){const i=dr(r.node.children,s)||{children:{},childCount:0};r=new oh(s,r,i),n=ee(n),s=F(n)}return r}function Cr(t){return t.node.value}function lh(t,e){t.node.value=e,Cu(t)}function S_(t){return t.node.childCount>0}function cS(t){return Cr(t)===void 0&&!S_(t)}function la(t,e){Re(t.node.children,(n,r)=>{e(new oh(n,t,r))})}function N_(t,e,n,r){n&&e(t),la(t,s=>{N_(s,e,!0)})}function uS(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function qi(t){return new K(t.parent===null?t.name:qi(t.parent)+"/"+t.name)}function Cu(t){t.parent!==null&&dS(t.parent,t.name,t)}function dS(t,e,n){const r=cS(n),s=kt(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,Cu(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Cu(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hS=/[\[\].#$\/\u0000-\u001F\u007F]/,fS=/[\[\].#$\u0000-\u001F\u007F]/,ac=10*1024*1024,ah=function(t){return typeof t=="string"&&t.length!==0&&!hS.test(t)},k_=function(t){return typeof t=="string"&&t.length!==0&&!fS.test(t)},pS=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),k_(t)},bl=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!jd(t)||t&&typeof t=="object"&&kt(t,".sv")},ch=function(t,e,n,r){r&&e===void 0||Gi(Jl(t,"value"),e,n)},Gi=function(t,e,n){const r=n instanceof K?new RC(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Xn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Xn(r)+" with contents = "+e.toString());if(jd(e))throw new Error(t+"contains "+e.toString()+" "+Xn(r));if(typeof e=="string"&&e.length>ac/3&&Zl(e)>ac)throw new Error(t+"contains a string greater than "+ac+" utf8 bytes "+Xn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(Re(e,(o,l)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!ah(o)))throw new Error(t+" contains an invalid key ("+o+") "+Xn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);AC(r,o),Gi(t,l,r),jC(r)}),s&&i)throw new Error(t+' contains ".value" child '+Xn(r)+" in addition to actual children.")}},mS=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const i=Ii(r);for(let o=0;o<i.length;o++)if(!(i[o]===".priority"&&o===i.length-1)){if(!ah(i[o]))throw new Error(t+"contains an invalid key ("+i[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(PC);let s=null;for(n=0;n<e.length;n++){if(r=e[n],s!==null&&at(s,r))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},gS=function(t,e,n,r){const s=Jl(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const i=[];Re(e,(o,l)=>{const a=new K(o);if(Gi(s,l,fe(n,a)),Fd(a)===".priority"&&!bl(l))throw new Error(s+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");i.push(a)}),mS(s,i)},uh=function(t,e,n,r){if(!k_(n))throw new Error(Jl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},vS=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),uh(t,e,n)},aa=function(t,e){if(F(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},_S=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ah(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!pS(n))throw new Error(Jl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ca(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!Ud(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function I_(t,e,n){ca(t,n),b_(t,r=>Ud(r,e))}function nt(t,e,n){ca(t,n),b_(t,r=>at(r,e)||at(e,r))}function b_(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(xS(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function xS(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Zs&&be("event: "+n.toString()),gs(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS="repo_interrupt",CS=25;class ES{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new yS,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=yl(),this.transactionQueueTree_=new oh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function SS(t,e,n){if(t.stats_=Ld(t.repoInfo_),t.forceRestClient_||tC())t.server_=new _l(t.repoInfo_,(r,s,i,o)=>{Ip(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>bp(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{xe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Qt(t.repoInfo_,e,(r,s,i,o)=>{Ip(t,r,s,i,o)},r=>{bp(t,r)},r=>{NS(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=oC(t.repoInfo_,()=>new oE(t.stats_,t.server_)),t.infoData_=new tE,t.infoSyncTree_=new Np({startListening:(r,s,i,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Hi(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),dh(t,"connected",!1),t.serverSyncTree_=new Np({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(l,a)=>{const u=o(l,a);nt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function T_(t){const n=t.infoData_.getNode(new K(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ki(t){return oS({timestamp:T_(t)})}function Ip(t,e,n,r,s){t.dataUpdateCount++;const i=new K(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const a=hl(n,u=>ve(u));o=eS(t.serverSyncTree_,i,a,s)}else{const a=ve(n);o=y_(t.serverSyncTree_,i,a,s)}else if(r){const a=hl(n,u=>ve(u));o=XE(t.serverSyncTree_,i,a)}else{const a=ve(n);o=Hi(t.serverSyncTree_,i,a)}let l=i;o.length>0&&(l=ls(t,i)),nt(t.eventQueue_,l,o)}function bp(t,e){dh(t,"connected",e),e===!1&&TS(t)}function NS(t,e){Re(e,(n,r)=>{dh(t,n,r)})}function dh(t,e,n){const r=new K("/.info/"+e),s=ve(n);t.infoData_.updateSnapshot(r,s);const i=Hi(t.infoSyncTree_,r,s);nt(t.eventQueue_,r,i)}function ua(t){return t.nextWriteId_++}function kS(t,e,n){const r=tS(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(s=>{const i=ve(s).withIndex(e._queryParams.getIndex());wu(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Hi(t.serverSyncTree_,e._path,i);else{const l=Ai(t.serverSyncTree_,e);o=y_(t.serverSyncTree_,e._path,i,l)}return nt(t.eventQueue_,e._path,o),Il(t.serverSyncTree_,e,n,null,!0),i},s=>(_s(t,"get for query "+xe(e)+" failed: "+s),Promise.reject(new Error(s))))}function IS(t,e,n,r,s){_s(t,"set",{path:e.toString(),value:n,priority:r});const i=Ki(t),o=ve(n,r),l=sa(t.serverSyncTree_,e),a=sh(o,l,i),u=ua(t),d=Jd(t.serverSyncTree_,e,a,u,!0);ca(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(f,_)=>{const p=f==="ok";p||Ve("set at "+e+" failed: "+f);const y=_n(t.serverSyncTree_,u,!p);nt(t.eventQueue_,e,y),Eu(t,s,f,_)});const h=fh(t,e);ls(t,h),nt(t.eventQueue_,h,[])}function bS(t,e,n,r){_s(t,"update",{path:e.toString(),value:n});let s=!0;const i=Ki(t),o={};if(Re(n,(l,a)=>{s=!1,o[l]=E_(fe(e,l),ve(a),t.serverSyncTree_,i)}),s)be("update() called with empty data.  Don't do anything."),Eu(t,r,"ok",void 0);else{const l=ua(t),a=YE(t.serverSyncTree_,e,o,l);ca(t.eventQueue_,a),t.server_.merge(e.toString(),n,(u,d)=>{const h=u==="ok";h||Ve("update at "+e+" failed: "+u);const f=_n(t.serverSyncTree_,l,!h),_=f.length>0?ls(t,e):e;nt(t.eventQueue_,_,f),Eu(t,r,u,d)}),Re(n,u=>{const d=fh(t,fe(e,u));ls(t,d)}),nt(t.eventQueue_,e,[])}}function TS(t){_s(t,"onDisconnectEvents");const e=Ki(t),n=yl();mu(t.onDisconnect_,B(),(s,i)=>{const o=E_(s,i,t.serverSyncTree_,e);s_(n,s,o)});let r=[];mu(n,B(),(s,i)=>{r=r.concat(Hi(t.serverSyncTree_,s,i));const o=fh(t,s);ls(t,o)}),t.onDisconnect_=yl(),nt(t.eventQueue_,B(),r)}function PS(t,e,n){let r;F(e._path)===".info"?r=wu(t.infoSyncTree_,e,n):r=wu(t.serverSyncTree_,e,n),I_(t.eventQueue_,e._path,r)}function Tp(t,e,n){let r;F(e._path)===".info"?r=Il(t.infoSyncTree_,e,n):r=Il(t.serverSyncTree_,e,n),I_(t.eventQueue_,e._path,r)}function RS(t){t.persistentConnection_&&t.persistentConnection_.interrupt(wS)}function _s(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),be(n,...e)}function Eu(t,e,n,r){e&&gs(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let i=s;r&&(i+=": "+r);const o=new Error(i);o.code=s,e(o)}})}function AS(t,e,n,r,s,i){_s(t,"transaction on "+e);const o={path:e,update:n,onComplete:r,status:null,order:Iv(),applyLocally:i,retryCount:0,unwatcher:s,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},l=hh(t,e,void 0);o.currentInputSnapshot=l;const a=o.update(l.val());if(a===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{Gi("transaction failed: Data returned ",a,o.path),o.status=0;const u=oa(t.transactionQueueTree_,e),d=Cr(u)||[];d.push(o),lh(u,d);let h;typeof a=="object"&&a!==null&&kt(a,".priority")?(h=dr(a,".priority"),E(bl(h),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):h=(sa(t.serverSyncTree_,e)||A.EMPTY_NODE).getPriority().val();const f=Ki(t),_=ve(a,h),p=sh(_,l,f);o.currentOutputSnapshotRaw=_,o.currentOutputSnapshotResolved=p,o.currentWriteId=ua(t);const y=Jd(t.serverSyncTree_,e,p,o.currentWriteId,o.applyLocally);nt(t.eventQueue_,e,y),da(t,t.transactionQueueTree_)}}function hh(t,e,n){return sa(t.serverSyncTree_,e,n)||A.EMPTY_NODE}function da(t,e=t.transactionQueueTree_){if(e||ha(t,e),Cr(e)){const n=R_(t,e);E(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&jS(t,qi(e),n)}else S_(e)&&la(e,n=>{da(t,n)})}function jS(t,e,n){const r=n.map(u=>u.currentWriteId),s=hh(t,e,r);let i=s;const o=s.hash();for(let u=0;u<n.length;u++){const d=n[u];E(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const h=Ue(e,d.path);i=i.updateChild(h,d.currentOutputSnapshotRaw)}const l=i.val(!0),a=e;t.server_.put(a.toString(),l,u=>{_s(t,"transaction put response",{path:a.toString(),status:u});let d=[];if(u==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,d=d.concat(_n(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();ha(t,oa(t.transactionQueueTree_,e)),da(t,t.transactionQueueTree_),nt(t.eventQueue_,e,d);for(let f=0;f<h.length;f++)gs(h[f])}else{if(u==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Ve("transaction at "+a.toString()+" failed: "+u);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=u}ls(t,e)}},o)}function ls(t,e){const n=P_(t,e),r=qi(n),s=R_(t,n);return OS(t,s,r),r}function OS(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=Ue(n,a.path);let d=!1,h;if(E(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,h=a.abortReason,s=s.concat(_n(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=CS)d=!0,h="maxretry",s=s.concat(_n(t.serverSyncTree_,a.currentWriteId,!0));else{const f=hh(t,a.path,o);a.currentInputSnapshot=f;const _=e[l].update(f.val());if(_!==void 0){Gi("transaction failed: Data returned ",_,a.path);let p=ve(_);typeof _=="object"&&_!=null&&kt(_,".priority")||(p=p.updatePriority(f.getPriority()));const w=a.currentWriteId,m=Ki(t),g=sh(p,f,m);a.currentOutputSnapshotRaw=p,a.currentOutputSnapshotResolved=g,a.currentWriteId=ua(t),o.splice(o.indexOf(w),1),s=s.concat(Jd(t.serverSyncTree_,a.path,g,a.currentWriteId,a.applyLocally)),s=s.concat(_n(t.serverSyncTree_,w,!0))}else d=!0,h="nodata",s=s.concat(_n(t.serverSyncTree_,a.currentWriteId,!0))}nt(t.eventQueue_,n,s),s=[],d&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(h),!1,null))))}ha(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)gs(r[l]);da(t,t.transactionQueueTree_)}function P_(t,e){let n,r=t.transactionQueueTree_;for(n=F(e);n!==null&&Cr(r)===void 0;)r=oa(r,n),e=ee(e),n=F(e);return r}function R_(t,e){const n=[];return A_(t,e,n),n.sort((r,s)=>r.order-s.order),n}function A_(t,e,n){const r=Cr(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);la(e,s=>{A_(t,s,n)})}function ha(t,e){const n=Cr(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,lh(e,n.length>0?n:void 0)}la(e,r=>{ha(t,r)})}function fh(t,e){const n=qi(P_(t,e)),r=oa(t.transactionQueueTree_,e);return uS(r,s=>{cc(t,s)}),cc(t,r),N_(r,s=>{cc(t,s)}),n}function cc(t,e){const n=Cr(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(E(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(E(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(_n(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?lh(e,void 0):n.length=i+1,nt(t.eventQueue_,qi(e),s);for(let o=0;o<r.length;o++)gs(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DS(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function LS(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ve(`Invalid query segment '${n}' in query '${t}'`)}return e}const Pp=function(t,e){const n=MS(t),r=n.namespace;n.domain==="firebase.com"&&nn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&nn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||q1();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new zv(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new K(n.pathString)}},MS=function(t){let e="",n="",r="",s="",i="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(d,h)),d<h&&(s=DS(t.substring(d,h)));const f=LS(t.substring(Math.min(t.length,h)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const _=e.slice(0,u);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const p=e.indexOf(".");r=e.substring(0,p).toLowerCase(),n=e.substring(p+1),i=r}"ns"in f&&(i=f.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:s,namespace:i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",FS=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let s;const i=new Array(8);for(s=7;s>=0;s--)i[s]=Rp.charAt(n%64),n=Math.floor(n/64);E(n===0,"Cannot push at time == 0");let o=i.join("");if(r){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=Rp.charAt(e[s]);return E(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(e,n,r,s){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+xe(this.snapshot.exportVal())}}class zS{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return E(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return U(this._path)?null:Fd(this._path)}get ref(){return new Dt(this._repo,this._path)}get _queryIdentifier(){const e=mp(this._queryParams),n=Od(e);return n==="{}"?"default":n}get _queryObject(){return mp(this._queryParams)}isEqual(e){if(e=ke(e),!(e instanceof ys))return!1;const n=this._repo===e._repo,r=Ud(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+TC(this._path)}}function VS(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function O_(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===ir){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",s="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==fr)throw new Error(r);if(typeof e!="string")throw new Error(s)}if(t.hasEnd()){if(t.getIndexEndName()!==On)throw new Error(r);if(typeof n!="string")throw new Error(s)}}else if(t.getIndex()===oe){if(e!=null&&!bl(e)||n!=null&&!bl(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(E(t.getIndex()instanceof Wd||t.getIndex()===n_,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function WS(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Dt extends ys{constructor(e,n){super(e,n,new Bd,!1)}get parent(){const e=Qv(this._path);return e===null?null:new Dt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class as{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new K(e),r=ji(this.ref,e);return new as(this._node.getChild(n),r,oe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new as(s,ji(this.ref,r),oe)))}hasChild(e){const n=new K(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function H(t,e){return t=ke(t),t._checkNotDeleted("ref"),e!==void 0?ji(t._root,e):t._root}function ji(t,e){return t=ke(t),F(t._path)===null?vS("child","path",e):uh("child","path",e),new Dt(t._repo,fe(t._path,e))}function Ur(t,e){t=ke(t),aa("push",t._path),ch("push",e,t._path,!0);const n=T_(t._repo),r=FS(n),s=ji(t,r),i=ji(t,r);let o;return e!=null?o=D_(i,e).then(()=>i):o=Promise.resolve(i),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function $S(t){return aa("remove",t._path),D_(t,null)}function D_(t,e){t=ke(t),aa("set",t._path),ch("set",e,t._path,!1);const n=new fs;return IS(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Ut(t,e){gS("update",e,t._path);const n=new fs;return bS(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Su(t){t=ke(t);const e=new j_(()=>{}),n=new fa(e);return kS(t._repo,t,n).then(r=>new as(r,new Dt(t._repo,t._path),t._queryParams.getIndex()))}class fa{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new US("value",this,new as(e.snapshotNode,new Dt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new zS(this,e,n):null}matches(e){return e instanceof fa?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function BS(t,e,n,r,s){let i;if(typeof r=="object"&&(i=void 0,s=r),typeof r=="function"&&(i=r),s&&s.onlyOnce){const a=n,u=(d,h)=>{Tp(t._repo,t,l),a(d,h)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new j_(n,i||void 0),l=new fa(o);return PS(t._repo,t,l),()=>Tp(t._repo,t,l)}function Nu(t,e,n,r){return BS(t,"value",e,n,r)}class ph{}class HS extends ph{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAt"}_apply(e){ch("startAt",this._value,e._path,!0);const n=ZC(e._queryParams,this._value,this._key);if(WS(n),O_(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new ys(e._repo,e._path,n,e._orderByCalled)}}function qS(t=null,e){return new HS(t,e)}class GS extends ph{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new ys(e._repo,e._path,JC(e._queryParams,this._limit),e._orderByCalled)}}function KS(t){if(Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new GS(t)}class QS extends ph{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){VS(e,"orderByChild");const n=new K(this._path);if(U(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new Wd(n),s=eE(e._queryParams,r);return O_(s),new ys(e._repo,e._path,s,!0)}}function YS(t){return uh("orderByChild","path",t),new QS(t)}function Ap(t,...e){let n=ke(t);for(const r of e)n=r._apply(n);return n}WE(Dt);GE(Dt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XS="FIREBASE_DATABASE_EMULATOR_HOST",ku={};let JS=!1;function ZS(t,e,n,r){t.repoInfo_=new zv(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function eN(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||nn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),be("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Pp(i,s),l=o.repoInfo,a;typeof process<"u"&&Xf&&(a=Xf[XS]),a?(i=`http://${a}?ns=${l.namespace}`,o=Pp(i,s),l=o.repoInfo):o.repoInfo.secure;const u=new rC(t.name,t.options,e);_S("Invalid Firebase Database URL",o),U(o.path)||nn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=nN(l,t,u,new nC(t.name,n));return new rN(d,t)}function tN(t,e){const n=ku[e];(!n||n[t.key]!==t)&&nn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),RS(t),delete n[t.key]}function nN(t,e,n,r){let s=ku[e.name];s||(s={},ku[e.name]=s);let i=s[t.toURLString()];return i&&nn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new ES(t,JS,n,r),s[t.toURLString()]=i,i}class rN{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(SS(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Dt(this._repo,B())),this._rootInternal}_delete(){return this._rootInternal!==null&&(tN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&nn("Cannot call "+e+" on a deleted database.")}}function sN(t=Cv(),e){const n=Ad(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=gw("database");r&&iN(n,...r)}return n}function iN(t,e,n,r={}){t=ke(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&nn("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let i;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&nn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),i=new Do(Do.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:vw(r.mockUserToken,t.app.options.projectId);i=new Do(o)}ZS(s,e,n,i)}/**
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
 */function oN(t){V1(ms),rs(new hr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return eN(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),Tn(Jf,Zf,t),Tn(Jf,Zf,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function aN(t,e,n){var r;if(t=ke(t),aa("Reference.transaction",t._path),t.key===".length"||t.key===".keys")throw"Reference.transaction failed: "+t.key+" is a read-only object.";const s=(r=void 0)!==null&&r!==void 0?r:!0,i=new fs,o=(a,u,d)=>{let h=null;a?i.reject(a):(h=new as(d,new Dt(t._repo,t._path),oe),i.resolve(new lN(u,h)))},l=Nu(t,()=>{});return AS(t._repo,t._path,e,o,l,s),i.promise}Qt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Qt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};oN();function mh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function L_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const cN=L_,M_=new Vi("auth","Firebase",L_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl=new Pd("@firebase/auth");function uN(t,...e){Tl.logLevel<=Y.WARN&&Tl.warn(`Auth (${ms}): ${t}`,...e)}function Lo(t,...e){Tl.logLevel<=Y.ERROR&&Tl.error(`Auth (${ms}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t,...e){throw vh(t,...e)}function St(t,...e){return vh(t,...e)}function gh(t,e,n){const r=Object.assign(Object.assign({},cN()),{[e]:n});return new Vi("auth","Firebase",r).create(e,{appName:t.name})}function Yt(t){return gh(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function dN(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&ht(t,"argument-error"),gh(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function vh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return M_.create(t,...e)}function O(t,e,...n){if(!t)throw vh(e,...n)}function Ht(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Lo(e),new Error(e)}function rn(t,e){t||Ht(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function hN(){return jp()==="http:"||jp()==="https:"}function jp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hN()||yw()||"connection"in navigator)?navigator.onLine:!0}function pN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,n){this.shortDelay=e,this.longDelay=n,rn(n>e,"Short delay should be less than long delay!"),this.isMobile=Td()||vv()}get(){return fN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _h(t,e){rn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ht("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ht("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ht("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gN=new Qi(3e4,6e4);function Wn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function $n(t,e,n,r,s={}){return U_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=ps(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:a},i);return _w()||(u.referrerPolicy="no-referrer"),F_.fetch()(z_(t,t.config.apiHost,n,l),u)})}async function U_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},mN),e);try{const s=new _N(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Co(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Co(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Co(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Co(t,"user-disabled",o);const d=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw gh(t,d,u);ht(t,d)}}catch(s){if(s instanceof Vn)throw s;ht(t,"network-request-failed",{message:String(s)})}}async function Yi(t,e,n,r,s={}){const i=await $n(t,e,n,r,s);return"mfaPendingCredential"in i&&ht(t,"multi-factor-auth-required",{_serverResponse:i}),i}function z_(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?_h(t.config,s):`${t.config.apiScheme}://${s}`}function vN(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class _N{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(St(this.auth,"network-request-failed")),gN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Co(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=St(t,e,r);return s.customData._tokenResponse=n,s}function Op(t){return t!==void 0&&t.enterprise!==void 0}class yN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return vN(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function xN(t,e){return $n(t,"GET","/v2/recaptchaConfig",Wn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wN(t,e){return $n(t,"POST","/v1/accounts:delete",e)}async function V_(t,e){return $n(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function CN(t,e=!1){const n=ke(t),r=await n.getIdToken(e),s=yh(r);O(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:si(uc(s.auth_time)),issuedAtTime:si(uc(s.iat)),expirationTime:si(uc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function uc(t){return Number(t)*1e3}function yh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Lo("JWT malformed, contained fewer than 3 sections"),null;try{const s=dl(n);return s?JSON.parse(s):(Lo("Failed to decode base64 JWT payload"),null)}catch(s){return Lo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Dp(t){const e=yh(t);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Vn&&EN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function EN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=si(this.lastLoginAt),this.creationTime=si(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Pl(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Oi(t,V_(n,{idToken:r}));O(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?W_(i.providerUserInfo):[],l=kN(t.providerData,o),a=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=a?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new bu(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,h)}async function NN(t){const e=ke(t);await Pl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kN(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function W_(t){return t.map(e=>{var{providerId:n}=e,r=mh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IN(t,e){const n=await U_(t,{},async()=>{const r=ps({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=z_(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",F_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function bN(t,e){return $n(t,"POST","/v2/accounts:revokeToken",Wn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Dp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){O(e.length!==0,"internal-error");const n=Dp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(O(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await IN(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Gr;return r&&(O(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(O(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(O(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Gr,this.toJSON())}_performRefresh(){return Ht("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(t,e){O(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class qt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=mh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new SN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new bu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Oi(this,this.stsTokenManager.getToken(this.auth,e));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return CN(this,e)}reload(){return NN(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new qt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Pl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(yt(this.auth.app))return Promise.reject(Yt(this.auth));const e=await this.getIdToken();return await Oi(this,wN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,a,u,d;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(l=n.tenantId)!==null&&l!==void 0?l:void 0,w=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,g=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:v,emailVerified:x,isAnonymous:S,providerData:T,stsTokenManager:k}=n;O(v&&k,e,"internal-error");const R=Gr.fromJSON(this.name,k);O(typeof v=="string",e,"internal-error"),an(h,e.name),an(f,e.name),O(typeof x=="boolean",e,"internal-error"),O(typeof S=="boolean",e,"internal-error"),an(_,e.name),an(p,e.name),an(y,e.name),an(w,e.name),an(m,e.name),an(g,e.name);const X=new qt({uid:v,auth:e,email:f,emailVerified:x,displayName:h,isAnonymous:S,photoURL:p,phoneNumber:_,tenantId:y,stsTokenManager:R,createdAt:m,lastLoginAt:g});return T&&Array.isArray(T)&&(X.providerData=T.map(M=>Object.assign({},M))),w&&(X._redirectEventId=w),X}static async _fromIdTokenResponse(e,n,r=!1){const s=new Gr;s.updateFromServerResponse(n);const i=new qt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Pl(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];O(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?W_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Gr;l.updateFromIdToken(r);const a=new qt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new bu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(a,u),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lp=new Map;function Gt(t){rn(t instanceof Function,"Expected a class definition");let e=Lp.get(t);return e?(rn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Lp.set(t,e),e)}/**
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
 */class $_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}$_.type="NONE";const Mp=$_;/**
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
 */function Mo(t,e,n){return`firebase:${t}:${e}:${n}`}class Kr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Mo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Mo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?qt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Kr(Gt(Mp),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Gt(Mp);const o=Mo(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){const h=qt._fromJSON(e,d);u!==i&&(l=h),i=u;break}}catch{}const a=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new Kr(i,e,r):(i=a[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Kr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(G_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(B_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Q_(e))return"Blackberry";if(Y_(e))return"Webos";if(H_(e))return"Safari";if((e.includes("chrome/")||q_(e))&&!e.includes("edge/"))return"Chrome";if(K_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function B_(t=We()){return/firefox\//i.test(t)}function H_(t=We()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function q_(t=We()){return/crios\//i.test(t)}function G_(t=We()){return/iemobile/i.test(t)}function K_(t=We()){return/android/i.test(t)}function Q_(t=We()){return/blackberry/i.test(t)}function Y_(t=We()){return/webos/i.test(t)}function xh(t=We()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function TN(t=We()){var e;return xh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function PN(){return xw()&&document.documentMode===10}function X_(t=We()){return xh(t)||K_(t)||Y_(t)||Q_(t)||/windows phone/i.test(t)||G_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J_(t,e=[]){let n;switch(t){case"Browser":n=Fp(We());break;case"Worker":n=`${Fp(We())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ms}/${r}`}/**
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
 */class RN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const a=e(i);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function AN(t,e={}){return $n(t,"GET","/v2/passwordPolicy",Wn(t,e))}/**
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
 */const jN=6;class ON{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:jN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(s=a.containsLowercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(i=a.containsUppercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Up(this),this.idTokenSubscription=new Up(this),this.beforeStateQueue=new RN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=M_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Gt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Kr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await V_(this,{idToken:e}),r=await qt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(yt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Pl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=pN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(yt(this.app))return Promise.reject(Yt(this));const n=e?ke(e):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return yt(this.app)?Promise.reject(Yt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return yt(this.app)?Promise.reject(Yt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Gt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await AN(this),n=new ON(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Vi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await bN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Gt(e)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await Kr.create(this,[Gt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(O(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,s);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=J_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&uN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Bn(t){return ke(t)}class Up{constructor(e){this.auth=e,this.observer=null,this.addObserver=Pw(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function LN(t){pa=t}function Z_(t){return pa.loadJS(t)}function MN(){return pa.recaptchaEnterpriseScript}function FN(){return pa.gapiScript}function UN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const zN="recaptcha-enterprise",VN="NO_RECAPTCHA";class WN{constructor(e){this.type=zN,this.auth=Bn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{xN(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new yN(a);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(a=>{l(a)})})}function s(i,o,l){const a=window.grecaptcha;Op(a)?a.enterprise.ready(()=>{a.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(VN)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Op(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=MN();a.length!==0&&(a+=l),Z_(a).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function zp(t,e,n,r=!1){const s=new WN(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Tu(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await zp(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await zp(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $N(t,e){const n=Ad(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(fl(i,e??{}))return s;ht(s,"already-initialized")}return n.initialize({options:e})}function BN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Gt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function HN(t,e,n){const r=Bn(t);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=ey(e),{host:o,port:l}=qN(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),GN()}function ey(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function qN(t){const e=ey(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Vp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Vp(o)}}}function Vp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function GN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ht("not implemented")}_getIdTokenResponse(e){return Ht("not implemented")}_linkToIdToken(e,n){return Ht("not implemented")}_getReauthenticationResolver(e){return Ht("not implemented")}}async function KN(t,e){return $n(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QN(t,e){return Yi(t,"POST","/v1/accounts:signInWithPassword",Wn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YN(t,e){return Yi(t,"POST","/v1/accounts:signInWithEmailLink",Wn(t,e))}async function XN(t,e){return Yi(t,"POST","/v1/accounts:signInWithEmailLink",Wn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di extends wh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Di(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Di(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Tu(e,n,"signInWithPassword",QN);case"emailLink":return YN(e,{email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Tu(e,r,"signUpPassword",KN);case"emailLink":return XN(e,{idToken:n,email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qr(t,e){return Yi(t,"POST","/v1/accounts:signInWithIdp",Wn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JN="http://localhost";class gr extends wh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new gr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ht("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=mh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new gr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Qr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Qr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Qr(e,n)}buildRequest(){const e={requestUri:JN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ps(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ek(t){const e=Ws($s(t)).link,n=e?Ws($s(e)).deep_link_id:null,r=Ws($s(t)).deep_link_id;return(r?Ws($s(r)).link:null)||r||n||e||t}class Ch{constructor(e){var n,r,s,i,o,l;const a=Ws($s(e)),u=(n=a.apiKey)!==null&&n!==void 0?n:null,d=(r=a.oobCode)!==null&&r!==void 0?r:null,h=ZN((s=a.mode)!==null&&s!==void 0?s:null);O(u&&d&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=d,this.continueUrl=(i=a.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=ek(e);try{return new Ch(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(){this.providerId=xs.PROVIDER_ID}static credential(e,n){return Di._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ch.parseLink(n);return O(r,"argument-error"),Di._fromEmailAndCode(e,r.code,r.tenantId)}}xs.PROVIDER_ID="password";xs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";xs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Xi extends Eh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends Xi{constructor(){super("facebook.com")}static credential(e){return gr._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";fn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends Xi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return gr._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return zt.credential(n,r)}catch{return null}}}zt.GOOGLE_SIGN_IN_METHOD="google.com";zt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends Xi{constructor(){super("github.com")}static credential(e){return gr._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pn.credential(e.oauthAccessToken)}catch{return null}}}pn.GITHUB_SIGN_IN_METHOD="github.com";pn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends Xi{constructor(){super("twitter.com")}static credential(e,n){return gr._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return mn.credential(n,r)}catch{return null}}}mn.TWITTER_SIGN_IN_METHOD="twitter.com";mn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tk(t,e){return Yi(t,"POST","/v1/accounts:signUp",Wn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await qt._fromIdTokenResponse(e,r,s),o=Wp(r);return new vr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Wp(r);return new vr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Wp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl extends Vn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Rl.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Rl(e,n,r,s)}}function ty(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Rl._fromErrorAndOperation(t,i,e,r):i})}async function nk(t,e,n=!1){const r=await Oi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return vr._forOperation(t,"link",r)}/**
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
 */async function rk(t,e,n=!1){const{auth:r}=t;if(yt(r.app))return Promise.reject(Yt(r));const s="reauthenticate";try{const i=await Oi(t,ty(r,s,e,t),n);O(i.idToken,r,"internal-error");const o=yh(i.idToken);O(o,r,"internal-error");const{sub:l}=o;return O(t.uid===l,r,"user-mismatch"),vr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ht(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ny(t,e,n=!1){if(yt(t.app))return Promise.reject(Yt(t));const r="signIn",s=await ty(t,r,e),i=await vr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function sk(t,e){return ny(Bn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ry(t){const e=Bn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ik(t,e,n){if(yt(t.app))return Promise.reject(Yt(t));const r=Bn(t),o=await Tu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",tk).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&ry(t),a}),l=await vr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function ok(t,e,n){return yt(t.app)?Promise.reject(Yt(t)):sk(ke(t),xs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ry(t),r})}function lk(t,e,n,r){return ke(t).onIdTokenChanged(e,n,r)}function ak(t,e,n){return ke(t).beforeAuthStateChanged(e,n)}function ck(t,e,n,r){return ke(t).onAuthStateChanged(e,n,r)}function uk(t){return ke(t).signOut()}const Al="__sak";/**
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
 */class sy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Al,"1"),this.storage.removeItem(Al),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dk=1e3,hk=10;class iy extends sy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=X_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);PN()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,hk):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},dk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}iy.type="LOCAL";const fk=iy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy extends sy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}oy.type="SESSION";const ly=oy;/**
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
 */function pk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ma{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ma(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),a=await pk(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ma.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class mk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,a)=>{const u=Sh("",20);s.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(f.data.response);break;default:clearTimeout(d),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(){return window}function gk(t){Ot().location.href=t}/**
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
 */function ay(){return typeof Ot().WorkerGlobalScope<"u"&&typeof Ot().importScripts=="function"}async function vk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _k(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function yk(){return ay()?self:null}/**
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
 */const cy="firebaseLocalStorageDb",xk=1,jl="firebaseLocalStorage",uy="fbase_key";class Ji{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ga(t,e){return t.transaction([jl],e?"readwrite":"readonly").objectStore(jl)}function wk(){const t=indexedDB.deleteDatabase(cy);return new Ji(t).toPromise()}function Pu(){const t=indexedDB.open(cy,xk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(jl,{keyPath:uy})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(jl)?e(r):(r.close(),await wk(),e(await Pu()))})})}async function $p(t,e,n){const r=ga(t,!0).put({[uy]:e,value:n});return new Ji(r).toPromise()}async function Ck(t,e){const n=ga(t,!1).get(e),r=await new Ji(n).toPromise();return r===void 0?null:r.value}function Bp(t,e){const n=ga(t,!0).delete(e);return new Ji(n).toPromise()}const Ek=800,Sk=3;class dy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Pu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Sk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ay()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ma._getInstance(yk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await vk(),!this.activeServiceWorker)return;this.sender=new mk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_k()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Pu();return await $p(e,Al,"1"),await Bp(e,Al),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>$p(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ck(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Bp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ga(s,!1).getAll();return new Ji(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ek)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}dy.type="LOCAL";const Nk=dy;new Qi(3e4,6e4);/**
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
 */function hy(t,e){return e?Gt(e):(O(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Nh extends wh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Qr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Qr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function kk(t){return ny(t.auth,new Nh(t),t.bypassAuthState)}function Ik(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),rk(n,new Nh(t),t.bypassAuthState)}async function bk(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),nk(n,new Nh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kk;case"linkViaPopup":case"linkViaRedirect":return bk;case"reauthViaPopup":case"reauthViaRedirect":return Ik;default:ht(this.auth,"internal-error")}}resolve(e){rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tk=new Qi(2e3,1e4);async function Pk(t,e,n){if(yt(t.app))return Promise.reject(St(t,"operation-not-supported-in-this-environment"));const r=Bn(t);dN(t,e,Eh);const s=hy(r,n);return new nr(r,"signInViaPopup",e,s).executeNotNull()}class nr extends fy{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,nr.currentPopupAction&&nr.currentPopupAction.cancel(),nr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){rn(this.filter.length===1,"Popup operations only handle one event");const e=Sh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(St(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(St(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(St(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Tk.get())};e()}}nr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk="pendingRedirect",Fo=new Map;class Ak extends fy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Fo.get(this.auth._key());if(!e){try{const r=await jk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Fo.set(this.auth._key(),e)}return this.bypassAuthState||Fo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jk(t,e){const n=Lk(e),r=Dk(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Ok(t,e){Fo.set(t._key(),e)}function Dk(t){return Gt(t._redirectPersistence)}function Lk(t){return Mo(Rk,t.config.apiKey,t.name)}async function Mk(t,e,n=!1){if(yt(t.app))return Promise.reject(Yt(t));const r=Bn(t),s=hy(r,e),o=await new Ak(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fk=10*60*1e3;class Uk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!zk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!py(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(St(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Fk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hp(e))}saveEventToCache(e){this.cachedEventUids.add(Hp(e)),this.lastProcessedEventTime=Date.now()}}function Hp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function py({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function zk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return py(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vk(t,e={}){return $n(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$k=/^https?/;async function Bk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Vk(t);for(const n of e)try{if(Hk(n))return}catch{}ht(t,"unauthorized-domain")}function Hk(t){const e=Iu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!$k.test(n))return!1;if(Wk.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const qk=new Qi(3e4,6e4);function qp(){const t=Ot().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Gk(t){return new Promise((e,n)=>{var r,s,i;function o(){qp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qp(),n(St(t,"network-request-failed"))},timeout:qk.get()})}if(!((s=(r=Ot().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ot().gapi)===null||i===void 0)&&i.load)o();else{const l=UN("iframefcb");return Ot()[l]=()=>{gapi.load?o():n(St(t,"network-request-failed"))},Z_(`${FN()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw Uo=null,e})}let Uo=null;function Kk(t){return Uo=Uo||Gk(t),Uo}/**
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
 */const Qk=new Qi(5e3,15e3),Yk="__/auth/iframe",Xk="emulator/auth/iframe",Jk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Zk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function eI(t){const e=t.config;O(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?_h(e,Xk):`https://${t.config.authDomain}/${Yk}`,r={apiKey:e.apiKey,appName:t.name,v:ms},s=Zk.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ps(r).slice(1)}`}async function tI(t){const e=await Kk(t),n=Ot().gapi;return O(n,t,"internal-error"),e.open({where:document.body,url:eI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Jk,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=St(t,"network-request-failed"),l=Ot().setTimeout(()=>{i(o)},Qk.get());function a(){Ot().clearTimeout(l),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
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
 */const nI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rI=500,sI=600,iI="_blank",oI="http://localhost";class Gp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lI(t,e,n,r=rI,s=sI){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},nI),{width:r.toString(),height:s.toString(),top:i,left:o}),u=We().toLowerCase();n&&(l=q_(u)?iI:n),B_(u)&&(e=e||oI,a.scrollbars="yes");const d=Object.entries(a).reduce((f,[_,p])=>`${f}${_}=${p},`,"");if(TN(u)&&l!=="_self")return aI(e||"",l),new Gp(null);const h=window.open(e||"",l,d);O(h,t,"popup-blocked");try{h.focus()}catch{}return new Gp(h)}function aI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const cI="__/auth/handler",uI="emulator/auth/handler",dI=encodeURIComponent("fac");async function Kp(t,e,n,r,s,i){O(t.config.authDomain,t,"auth-domain-config-required"),O(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ms,eventId:s};if(e instanceof Eh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ou(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,h]of Object.entries({}))o[d]=h}if(e instanceof Xi){const d=e.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const a=await t._getAppCheckToken(),u=a?`#${dI}=${encodeURIComponent(a)}`:"";return`${hI(t)}?${ps(l).slice(1)}${u}`}function hI({config:t}){return t.emulator?_h(t,uI):`https://${t.authDomain}/${cI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc="webStorageSupport";class fI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ly,this._completeRedirectFn=Mk,this._overrideRedirectResult=Ok}async _openPopup(e,n,r,s){var i;rn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Kp(e,n,r,Iu(),s);return lI(e,o,Sh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Kp(e,n,r,Iu(),s);return gk(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(rn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await tI(e),r=new Uk(e);return n.register("authEvent",s=>(O(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(dc,{type:dc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[dc];o!==void 0&&n(!!o),ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Bk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return X_()||H_()||xh()}}const pI=fI;var Qp="@firebase/auth",Yp="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function vI(t){rs(new hr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;O(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:J_(t)},u=new DN(r,s,i,a);return BN(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),rs(new hr("auth-internal",e=>{const n=Bn(e.getProvider("auth").getImmediate());return(r=>new mI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tn(Qp,Yp,gI(t)),Tn(Qp,Yp,"esm2017")}/**
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
 */const _I=5*60,yI=gv("authIdTokenMaxAge")||_I;let Xp=null;const xI=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>yI)return;const s=n==null?void 0:n.token;Xp!==s&&(Xp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function wI(t=Cv()){const e=Ad(t,"auth");if(e.isInitialized())return e.getImmediate();const n=$N(t,{popupRedirectResolver:pI,persistence:[Nk,fk,ly]}),r=gv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=xI(i.toString());ak(n,o,()=>o(n.currentUser)),lk(n,l=>o(l))}}const s=pv("auth");return s&&HN(n,`http://${s}`),n}function CI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}LN({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=St("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",CI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});vI("Browser");var EI="firebase",SI="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tn(EI,SI,"app");const NI={apiKey:"AIzaSyDJM-VHPdo2ipOFEecEFjxo5W_FQuQ3BAk",authDomain:"vistta-2e1df.firebaseapp.com",databaseURL:"https://vistta-2e1df-default-rtdb.firebaseio.com",projectId:"vistta-2e1df",storageBucket:"vistta-2e1df.firebasestorage.app",messagingSenderId:"13458811244",appId:"1:13458811244:web:e3517470970e9a45142b49",measurementId:"G-TJLG0CPZQM"},my=wv(NI),ii=wI(my),q=sN(my),se=t=>Number(t||0).toLocaleString("pt-BR",{style:"currency",currency:"BRL"}),gy=P.createContext(null),It=()=>{const t=P.useContext(gy);if(!t)throw new Error("useAppContext deve ser usado dentro de um AppProvider");return t},kI=({children:t})=>{const[e,n]=P.useState(null),[r,s]=P.useState(!0),[i,o]=P.useState(null),[l,a]=P.useState(null),[u,d]=P.useState(null),[h,f]=P.useState("dashboard"),[_,p]=P.useState(""),[y,w]=P.useState([]),[m,g]=P.useState([]),[v,x]=P.useState([]),[S,T]=P.useState([]),[k,R]=P.useState([]),[X,M]=P.useState([]),[Xe,Hn]=P.useState([]),[qn,eo]=P.useState([]),[wa,ws]=P.useState([]),[Cs,I]=P.useState([]),[D,L]=P.useState([]),[J,pe]=P.useState(""),[Gn,Lt]=P.useState("Pix"),[Er,bt]=P.useState(0),Ae=P.useMemo(()=>k.find(N=>N.status==="aberto"),[k]),Ih=P.useMemo(()=>Ae?S.filter(N=>N.caixaId===Ae.id):[],[S,Ae]),Ca=P.useMemo(()=>Ih.reduce((N,j)=>N+(j.total||0),0),[Ih]),Es=()=>{if(!l)throw new Error("Empresa não identificada.");return l},Ss=async(N,j,ue)=>{const Q=`empresas/${Es()}/${N}`;if(ue){await Ut(H(q,`${Q}/${ue}`),j);return}const Me=Ur(H(q,Q));await Ut(H(q,`${Q}/${Me.key}`),j)},Ea=async(N,j)=>{const ue=Es();await $S(H(q,`empresas/${ue}/${N}/${j}`))};P.useEffect(()=>{let N,j;const ue=()=>{N==null||N(),N=void 0,j&&clearTimeout(j),j=void 0},me=ck(ii,Q=>{ue(),Q?(j=setTimeout(()=>{console.error("Tempo excedido ao carregar o perfil do usuário."),n(Q),s(!1)},1e4),N=Nu(H(q,`users/${Q.uid}`),Me=>{const de=Me.val();a((de==null?void 0:de.empresaId)||null),o((de==null?void 0:de.role)||null),de!=null&&de.empresaId?Su(H(q,`empresas/${de.empresaId}/info`)).then(on=>{d(on.exists()?on.val():null)}):d(null),n(Q),s(!1),ue()},Me=>{console.error("Não foi possível carregar o perfil do usuário:",Me),a(null),o(null),n(Q),s(!1),ue()})):(n(null),a(null),o(null),d(null),s(!1))});return()=>{ue(),me()}},[]),P.useEffect(()=>{if(!l)return;const N=`empresas/${l}`,j=new Date;j.setDate(1),j.setHours(0,0,0,0);const me=[{name:"produtos",setter:g,queryRef:H(q,`${N}/produtos`)},{name:"clientes",setter:x,queryRef:H(q,`${N}/clientes`)},{name:"fornecedores",setter:eo,queryRef:H(q,`${N}/fornecedores`)},{name:"contas",setter:ws,queryRef:H(q,`${N}/contas`)},{name:"categorias",setter:I,queryRef:H(q,`${N}/categorias`)},{name:"usuarios",setter:L,queryRef:H(q,`${N}/usuarios`)},{name:"orcamentos",setter:M,queryRef:H(q,`${N}/orcamentos`)},{name:"ordensServico",setter:Hn,queryRef:H(q,`${N}/ordensServico`)},{name:"vendas",setter:T,queryRef:Ap(H(q,`${N}/vendas`),YS("data"),qS(j.toISOString()))},{name:"caixas",setter:R,queryRef:Ap(H(q,`${N}/caixas`),KS(100))}].map(Q=>Nu(Q.queryRef,Me=>{const de=[];Me.forEach(on=>{de.push({id:on.key,...on.val()})}),Q.setter(de)}));return()=>me.forEach(Q=>Q())},[l]);const Ey=N=>{w(j=>{const ue=j.findIndex(me=>me.id===N.id);if(ue>-1){const me=[...j];return me[ue].qtd=Math.min(me[ue].qtd+1,Number(N.qtd)),me}return[...j,{...N,qtd:1}]})},Sy=N=>w(j=>j.filter(ue=>ue.id!==N)),Ny=async N=>{if(Ae)throw new Error("Já existe um caixa aberto.");if(!Number.isFinite(N)||N<0)throw new Error("Informe um valor inicial válido.");await Ss("caixas",{dataAbertura:new Date().toISOString(),valorInicial:N,status:"aberto",operador:(e==null?void 0:e.email)||(e==null?void 0:e.uid)||"Operador"})},ky=async()=>{const N=Ae;if(!N)throw new Error("Nenhum caixa aberto.");const j=(N.lancamentos||[]).reduce((ue,me)=>ue+(me.tipo==="entrada"?Number(me.valor):-Number(me.valor)),0);await Ut(H(q,`empresas/${Es()}/caixas/${N.id}`),{status:"fechado",dataFechamento:new Date().toISOString(),totalVendas:Ca,valorFinal:Number(N.valorInicial||0)+Ca+j})},Iy=(N,j)=>Ss("produtos",N,j),by=N=>Ea("produtos",N),Ty=(N,j)=>Ss("clientes",N,j),Py=N=>Ea("clientes",N),Ry=(N,j,ue)=>Ss(N,j,ue),Ay=(N,j)=>Ea(N,j),bh=(N,j)=>Ss("ordensServico",N,j),jy={user:e,loadingAuth:r,userRole:i,empresaId:l,dadosEmpresa:u,produtos:m,clientes:v,vendas:S,caixas:k,orcamentos:X,ordensServico:Xe,carrinho:y,fornecedores:qn,contas:wa,categorias:Cs,usuarios:D,activeTab:h,setActiveTab:f,pdvSearch:_,setPdvSearch:p,abrirCaixa:Ny,fecharCaixa:ky,salvarProduto:Iy,excluirProduto:by,salvarCliente:Ty,excluirCliente:Py,salvarCadastro:Ry,excluirCadastro:Ay,salvarOrdemServico:bh,converterOrcamentoParaOs:async N=>{await bh({clienteId:N.cliId,orcamentoId:N.id,itens:N.itens.map(j=>({produtoId:j.id,descricao:`${j.marca} ${j.modelo}`.trim(),qtd:j.qtd,valor:Number(j.venda)||0,tratamento:""})),status:"aguardando_montagem",criadoEm:new Date().toISOString(),atualizadoEm:new Date().toISOString()}),await Ut(H(q,`empresas/${Es()}/orcamentos/${N.id}`),{status:"aprovado"})},registrarLancamentoCaixa:async N=>{const j=Ae;if(!j)throw new Error("Abra o caixa antes de registrar um lançamento.");if(!Number.isFinite(N.valor)||N.valor<=0)throw new Error("Informe um valor válido.");await Ur(H(q,`empresas/${Es()}/caixas/${j.id}/lancamentos`),{...N,data:new Date().toISOString(),operador:(e==null?void 0:e.email)||(e==null?void 0:e.uid)||"Operador"})},addToCart:Ey,removeFromCart:Sy,finalizarVenda:async(N=!1)=>{if(y.length===0||!l)return alert("Carrinho vazio!");if(!N&&!Ae)return alert("Abra o caixa primeiro!");let j=y.reduce((Q,Me)=>Q+Number(Me.venda)*Me.qtd,0),ue=y.reduce((Q,Me)=>Q+Number(Me.custo)*Me.qtd,0),me=Math.max(0,Number(Er)||0);me=Math.min(me,j);try{if(N){if(!J)return alert("Selecione um cliente para salvar o orçamento!");await Ur(H(q,`empresas/${l}/orcamentos`),{cliId:J,subtotal:j,desconto:me,total:j-me,itens:y.map(Q=>({id:Q.id,marca:Q.marca,modelo:Q.modelo,qtd:Q.qtd,venda:Q.venda})),data:new Date().toISOString(),status:"pendente"})}else{const Q=y.map(async de=>{const on=H(q,`empresas/${l}/produtos/${de.id}/qtd`),Th=await Su(on),Sa=Number(Th.val());if(!Th.exists()||!Number.isFinite(Sa)||Sa<de.qtd)throw new Error(`Estoque insuficiente para ${de.marca} ${de.modelo}.`);const Na=await aN(on,to=>{if(to===null)return to;const Ph=Number(to)-de.qtd;return Ph>=0?Ph:to}),Oy=Number(Na.snapshot.val());if(!Na.committed||Oy!==Sa-de.qtd)throw new Error(`Não foi possível reservar o estoque de ${de.marca} ${de.modelo}.`);return Na});await Promise.all(Q);const Me=Ur(H(q,`empresas/${l}/vendas`));await Ut(H(q,`empresas/${l}/vendas/${Me.key}`),{cliId:J,pag:Gn,subtotal:j,desconto:me,total:j-me,custoBase:ue,itens:y.length,data:new Date().toISOString(),caixaId:Ae==null?void 0:Ae.id})}w([]),bt(0),pe(""),alert(N?"Orçamento salvo!":"Venda concluída com sucesso!")}catch(Q){alert("Erro ao finalizar: "+Q.message)}},caixaAberto:Ae,totalVendasCaixa:Ca,pdvCliente:J,setPdvCliente:pe,pdvDesconto:Er,setPdvDesconto:bt,pdvPagamento:Gn,setPdvPagamento:Lt};return c.jsx(gy.Provider,{value:jy,children:t})};/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var II={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bI=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=(t,e)=>{const n=P.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:l="",children:a,...u},d)=>P.createElement("svg",{ref:d,...II,width:s,height:s,stroke:r,strokeWidth:o?Number(i)*24/Number(s):i,className:["lucide",`lucide-${bI(t)}`,l].join(" "),...u},[...e.map(([h,f])=>P.createElement(h,f)),...Array.isArray(a)?a:[a]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ru=$("ArrowRightLeft",[["path",{d:"m16 3 4 4-4 4",key:"1x1c3m"}],["path",{d:"M20 7H4",key:"zbl0bi"}],["path",{d:"m8 21-4-4 4-4",key:"h9nckh"}],["path",{d:"M4 17h16",key:"g4d7ey"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=$("Boxes",[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TI=$("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PI=$("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RI=$("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AI=$("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jI=$("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OI=$("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au=$("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DI=$("Glasses",[["circle",{cx:"6",cy:"15",r:"4",key:"vux9w4"}],["circle",{cx:"18",cy:"15",r:"4",key:"18o8ve"}],["path",{d:"M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2",key:"1ag4bs"}],["path",{d:"M2.5 13 5 7c.7-1.3 1.4-2 3-2",key:"1hm1gs"}],["path",{d:"M21.5 13 19 7c-.7-1.3-1.5-2-3-2",key:"1r31ai"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=$("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ol=$("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LI=$("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MI=$("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FI=$("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UI=$("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zI=$("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VI=$("PackageOpen",[["path",{d:"M12 22v-9",key:"x3hkom"}],["path",{d:"M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z",key:"2ntwy6"}],["path",{d:"M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13",key:"1pmm1c"}],["path",{d:"M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z",key:"12ttoo"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WI=$("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const va=$("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zi=$("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=$("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=$("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $I=$("Store",[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7",key:"jon5kx"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BI=$("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HI=$("Tags",[["path",{d:"m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19",key:"1cbfv1"}],["path",{d:"M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z",key:"135mg7"}],["circle",{cx:"6.5",cy:"9.5",r:".5",fill:"currentColor",key:"5pm5xn"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _a=$("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dl=$("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=$("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qI=$("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ya=$("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GI=$("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=$("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function Vt({title:t,value:e,subtitle:n,icon:r,bg:s="bg-white dark:bg-slate-800",color:i="text-slate-900 dark:text-white",border:o="border-slate-100 dark:border-slate-700"}){return c.jsxs("div",{className:`p-6 rounded-3xl border shadow-sm ${s} ${o}`,children:[c.jsx("div",{className:"flex items-start justify-between mb-4",children:c.jsx("div",{className:`w-12 h-12 rounded-2xl flex items-center justify-center ${s==="bg-white dark:bg-slate-800"?"bg-indigo-50 text-[#4A3AFF]":i.replace("text-","bg-").replace("500","100")+" "+i}`,children:c.jsx(r,{size:24})})}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-[13px] font-bold text-slate-500 uppercase tracking-wider mb-1",children:t}),c.jsx("div",{className:`text-2xl font-black ${i}`,children:e}),n&&c.jsx("p",{className:"text-[12px] font-medium text-slate-400 mt-1",children:n})]})]})}function xa({open:t,onClose:e,title:n,width:r="max-w-md",children:s}){return t?c.jsx("div",{className:"fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4",children:c.jsxs("div",{className:`bg-white rounded-[32px] w-full ${r} shadow-2xl flex flex-col max-h-[90vh] animate-fade-in`,children:[c.jsxs("div",{className:"flex justify-between items-center p-6 border-b border-slate-100",children:[c.jsx("h2",{className:"text-xl font-bold text-slate-800",children:n}),c.jsx("button",{onClick:e,className:"p-2 bg-slate-100 rounded-full text-slate-500 hover:text-rose-500 transition-colors",children:c.jsx(wy,{size:20})})]}),c.jsx("div",{className:"overflow-y-auto custom-scrollbar p-6",children:s})]})}):null}function Cy({className:t="",solidWhite:e=!1}){const n=e?"currentColor":"white",r=e?"currentColor":"#a094ff";return c.jsxs("svg",{viewBox:"0 0 120 60",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:t,children:[c.jsxs("g",{stroke:n,strokeWidth:"8",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("circle",{cx:"38",cy:"36",r:"14"}),c.jsx("path",{d:"M 28 26 Q 16 12 10 22"})]}),c.jsxs("g",{stroke:r,strokeWidth:"8",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("circle",{cx:"82",cy:"36",r:"14"}),c.jsx("path",{d:"M 92 26 Q 104 12 110 22"}),c.jsx("path",{d:"M 52 36 Q 60 28 68 36"})]})]})}function pt({icon:t,label:e,active:n,onClick:r,badge:s,badgeColor:i}){return c.jsxs("button",{onClick:r,className:`w-full flex items-center justify-between px-4 py-3 rounded-2xl transition-all ${n?"bg-indigo-50 text-[#4A3AFF] font-bold":"text-slate-500 hover:bg-slate-100 font-medium"}`,children:[c.jsxs("div",{className:"flex items-center",children:[c.jsx(t,{size:20,className:`mr-3 ${n?"text-[#4A3AFF]":"text-slate-400"}`}),e]}),s&&c.jsx("span",{className:`px-2 py-0.5 rounded-lg text-[11px] font-bold ${i}`,children:s})]})}function hc({label:t}){return c.jsx("div",{className:"px-4 py-2 mt-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider",children:t})}function KI(){var l,a;const{activeTab:t,setActiveTab:e,caixaAberto:n,orcamentos:r,userRole:s,dadosEmpresa:i,user:o}=It();return c.jsxs("aside",{className:"hidden md:flex flex-col w-[270px] bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700/50 z-20 shadow-sm",children:[c.jsxs("div",{className:"h-[80px] flex items-center px-6 border-b border-slate-100 dark:border-slate-700/50 flex-shrink-0",children:[c.jsx("div",{className:"w-10 h-10 rounded-xl bg-[#4A3AFF] text-white flex items-center justify-center mr-3",children:c.jsx(Cy,{className:"w-7",solidWhite:!0})}),c.jsx("span",{className:"font-bold text-[18px] text-slate-900 dark:text-white truncate",title:i==null?void 0:i.nome,children:(i==null?void 0:i.nome)||"Minha Ótica"})]}),c.jsxs("div",{className:"flex-1 overflow-y-auto py-6 px-4 space-y-1 custom-scrollbar",children:[c.jsx(pt,{icon:vy,label:"Dashboard",active:t==="dashboard",onClick:()=>e("dashboard")}),c.jsx(hc,{label:"Operação"}),c.jsx(pt,{icon:GI,label:"Caixa Diário",active:t==="caixa",onClick:()=>e("caixa"),badge:n?"Aberto":"Fechado",badgeColor:n?"bg-emerald-100 text-emerald-700":"bg-slate-100 text-slate-500"}),c.jsx(pt,{icon:yy,label:"PDV",active:t==="vendas",onClick:()=>e("vendas")}),c.jsx(pt,{icon:Au,label:"Orçamentos",active:t==="orcamentos",onClick:()=>e("orcamentos"),badge:r.filter(u=>u.status==="pendente").length||null,badgeColor:"bg-amber-100 text-amber-700"}),c.jsx(pt,{icon:Au,label:"Ordens de Serviço",active:t==="ordens",onClick:()=>e("ordens")}),c.jsx(hc,{label:"Cadastros"}),c.jsx(pt,{icon:kh,label:"Estoque",active:t==="estoque",onClick:()=>e("estoque")}),c.jsx(pt,{icon:ya,label:"Clientes",active:t==="clientes",onClick:()=>e("clientes")}),c.jsx(pt,{icon:HI,label:"Categorias",active:t==="categorias",onClick:()=>e("categorias")}),s==="admin"&&c.jsxs(c.Fragment,{children:[c.jsx(hc,{label:"Gestão (Admin)"}),c.jsx(pt,{icon:Dl,label:"DRE Financeiro",active:t==="financeiro",onClick:()=>e("financeiro")}),c.jsx(pt,{icon:Ru,label:"Contas",active:t==="contas",onClick:()=>e("contas")}),c.jsx(pt,{icon:qI,label:"Usuários",active:t==="usuarios",onClick:()=>e("usuarios")})]})]}),c.jsxs("div",{className:"p-4 border-t border-slate-100 dark:border-slate-700/80 flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center min-w-0",children:[c.jsx("div",{className:"w-10 h-10 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-[#4A3AFF] flex items-center justify-center font-bold mr-3",children:((l=o==null?void 0:o.email)==null?void 0:l.charAt(0).toUpperCase())||"U"}),c.jsxs("div",{className:"min-w-0",children:[c.jsx("div",{className:"text-sm font-bold truncate text-slate-900 dark:text-white",children:((a=o==null?void 0:o.email)==null?void 0:a.split("@")[0])||"Usuário"}),c.jsx("div",{className:"text-[10px] text-slate-500 font-bold uppercase",children:s==="admin"?"Administrador":"Vendedor"})]})]}),c.jsx("button",{onClick:()=>uk(ii),className:"text-slate-400 hover:text-rose-500",title:"Sair",children:c.jsx(LI,{size:18})})]})]})}function QI(){const[t,e]=P.useState("login"),[n,r]=P.useState(!1),[s,i]=P.useState(""),[o,l]=P.useState(""),[a,u]=P.useState(""),[d,h]=P.useState(""),[f,_]=P.useState(!1),[p,y]=P.useState(!0),w=async g=>{g.preventDefault(),h(""),r(!0);try{if(t==="login")await ok(ii,s,o);else{const v=await ik(ii,s,o);try{const S=Ur(H(q,"empresas")).key;await Ut(H(q,`empresas/${S}/info`),{nome:a||"Minha Ótica",criadoEm:new Date().toISOString()}),await Ut(H(q,`users/${v.user.uid}`),{empresaId:S,role:"admin",email:s})}catch{await v.user.delete(),h("Falha ao registrar empresa no banco.")}}}catch{h(t==="login"?"E-mail ou senha incorretos.":"Erro ao autenticar.")}finally{r(!1)}},m=async()=>{h(""),r(!0);const g=new zt;try{const v=await Pk(ii,g),x=H(q,`users/${v.user.uid}`);if(!(await Su(x)).exists()){const k=Ur(H(q,"empresas")).key;await Ut(H(q,`empresas/${k}/info`),{nome:v.user.displayName?`Ótica de ${v.user.displayName}`:"Minha Ótica",criadoEm:new Date().toISOString()}),await Ut(H(q,`users/${v.user.uid}`),{empresaId:k,role:"admin",email:v.user.email,nome:v.user.displayName})}}catch(v){h(`Erro Google: ${v.message}`)}finally{r(!1)}};return c.jsxs("div",{className:"flex h-screen w-full bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white font-sans overflow-hidden",children:[c.jsxs("div",{className:"hidden lg:flex w-[55%] bg-[#120D38] flex-col items-center justify-center p-12 text-white relative",children:[c.jsx("div",{className:"absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-[#3b2b9a] rounded-full blur-[140px] opacity-60"}),c.jsx("div",{className:"absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-[#21146c] rounded-full blur-[140px] opacity-60"}),c.jsxs("div",{className:"relative z-10 flex flex-col items-center text-center w-full max-w-2xl",children:[c.jsxs("div",{className:"mb-10 flex flex-col items-center",children:[c.jsx(Cy,{className:"w-36 h-auto mb-4 drop-shadow-2xl",solidWhite:!1}),c.jsx("h1",{className:"text-[56px] font-bold tracking-[0.2em] leading-none mb-3 text-white",children:"VISTTA"}),c.jsx("p",{className:"text-[#a094ff] tracking-[0.35em] text-[11px] uppercase font-semibold",children:"Gestão Inteligente para Óticas"}),c.jsx("div",{className:"w-12 h-[2px] bg-[#6552ff] mt-8 rounded-full"})]}),c.jsx("h2",{className:"text-[40px] font-normal mb-1 tracking-tight text-white/90",children:"Sua ótica. Uma plataforma."}),c.jsx("h2",{className:"text-[42px] font-bold text-[#7b66ff] mb-6 tracking-tight",children:"Mais controle."}),c.jsxs("div",{className:"flex items-start justify-center gap-8 mb-16 w-full",children:[c.jsxs("div",{className:"flex flex-col items-center flex-1 max-w-[180px]",children:[c.jsx($I,{size:36,className:"text-[#7b66ff] mb-4"}),c.jsx("h3",{className:"text-[14px] font-bold mb-2 text-white",children:"Gestão Multi-Loja"})]}),c.jsx("div",{className:"w-px h-24 bg-indigo-500/20 mt-4"}),c.jsxs("div",{className:"flex flex-col items-center flex-1 max-w-[180px]",children:[c.jsx(WI,{size:36,className:"text-[#7b66ff] mb-4"}),c.jsx("h3",{className:"text-[14px] font-bold mb-2 text-white",children:"Estoque em tempo real"})]})]})]})]}),c.jsx("div",{className:"flex-1 lg:w-[45%] bg-[#F8FAFC] dark:bg-slate-900 flex flex-col items-center justify-center p-6 lg:p-12 relative overflow-y-auto custom-scrollbar",children:c.jsx("div",{className:"w-full max-w-[460px]",children:c.jsxs("div",{className:"bg-white dark:bg-slate-800 rounded-[32px] shadow-sm border border-slate-100 p-8 sm:p-10 mb-8 w-full",children:[c.jsx("div",{className:"text-center mb-8",children:c.jsx("h2",{className:"text-[26px] font-bold mb-2",children:t==="login"?"Bem-vindo de volta!":"Crie sua conta!"})}),c.jsxs("form",{onSubmit:w,className:"space-y-5",children:[d&&c.jsxs("div",{className:"bg-rose-50 text-rose-600 p-3.5 rounded-xl text-sm font-bold flex gap-3 border border-rose-100",children:[c.jsx(xy,{size:18}),c.jsx("span",{children:d})]}),t==="register"&&c.jsxs("div",{children:[c.jsx("label",{className:"block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2",children:"Nome da Ótica"}),c.jsxs("div",{className:"relative",children:[c.jsx(TI,{size:18,className:"absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"}),c.jsx("input",{type:"text",required:!0,value:a,onChange:g=>u(g.target.value),className:"w-full bg-slate-50 border rounded-xl pl-12 pr-4 py-3.5 outline-none focus:border-[#5235ff]",placeholder:"Nome da ótica"})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2",children:"E-mail"}),c.jsxs("div",{className:"relative",children:[c.jsx(MI,{size:18,className:"absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"}),c.jsx("input",{type:"email",required:!0,value:s,onChange:g=>i(g.target.value),className:"w-full bg-slate-50 border rounded-xl pl-12 pr-4 py-3.5 outline-none focus:border-[#5235ff]",placeholder:"Seu e-mail"})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2",children:"Senha"}),c.jsxs("div",{className:"relative",children:[c.jsx(Ol,{size:18,className:"absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"}),c.jsx("input",{type:f?"text":"password",required:!0,value:o,onChange:g=>l(g.target.value),className:"w-full bg-slate-50 border rounded-xl pl-12 pr-12 py-3.5 outline-none focus:border-[#5235ff]",placeholder:"Sua senha"}),c.jsx("button",{type:"button",onClick:()=>_(!f),className:"absolute right-4 top-1/2 -translate-y-1/2 text-slate-400",children:f?c.jsx(jI,{size:18}):c.jsx(OI,{size:18})})]})]}),c.jsx("button",{type:"submit",disabled:n,className:"w-full bg-[#5235ff] hover:bg-[#4323ec] text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 mt-4",children:n?"Aguarde...":t==="login"?"Entrar":"Criar Conta"}),t==="login"&&c.jsx("button",{type:"button",onClick:m,className:"w-full border py-3.5 rounded-xl font-bold flex justify-center gap-3 mt-4 hover:bg-slate-50",children:"Entrar com Google"}),c.jsx("div",{className:"text-center mt-6",children:c.jsx("button",{type:"button",onClick:()=>e(t==="login"?"register":"login"),className:"text-sm font-bold text-[#5235ff] hover:underline",children:t==="login"?"Criar uma conta":"Fazer login"})})]})]})})})]})}function YI(){const{produtos:t,vendas:e,clientes:n,setActiveTab:r}=It();return c.jsxs("div",{className:"flex flex-col h-full",children:[c.jsx("div",{className:"mb-8",children:c.jsx("h1",{className:"text-2xl font-bold mb-2",children:"Painel Geral"})}),c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6",children:[c.jsx(Vt,{title:"Estoque Total",value:t.reduce((s,i)=>s+Number(i.qtd),0),subtitle:"unidades ativas",icon:kh}),c.jsx(Vt,{title:"Vendas do Mês",value:se(e.reduce((s,i)=>s+(i.total||0),0)),icon:Dl,color:"text-emerald-500"}),c.jsx(Vt,{title:"Clientes Base",value:n.length,icon:ya}),c.jsx(Vt,{title:"Estoque Crítico",value:t.filter(s=>Number(s.qtd)<Number(s.min)).length,icon:xy,bg:"bg-rose-50",color:"text-rose-500"})]})]})}function XI(){const{caixaAberto:t,pdvSearch:e,setPdvSearch:n,carrinho:r,addToCart:s,removeFromCart:i,pdvCliente:o,setPdvCliente:l,clientes:a,pdvDesconto:u,setPdvDesconto:d,pdvPagamento:h,setPdvPagamento:f,finalizarVenda:_,setActiveTab:p,produtos:y}=It(),[w,m]=P.useState("produtos"),g=y.filter(v=>Number(v.qtd)>0&&((v.marca||"").toLowerCase().includes(e.toLowerCase())||(v.modelo||"").toLowerCase().includes(e.toLowerCase())||(v.codigo||"").toLowerCase().includes(e.toLowerCase())));return c.jsxs("div",{className:"flex flex-col h-full",children:[c.jsx("div",{className:"mb-6 flex justify-between items-end",children:c.jsxs("div",{children:[c.jsx("h1",{className:"text-2xl sm:text-3xl font-bold mb-2",children:"Ponto de Venda"}),t?c.jsx("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold",children:"Caixa Aberto"}):c.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-slate-600 text-xs font-bold",children:[c.jsx(Ol,{size:12})," Caixa Fechado"]})]})}),t?c.jsxs("div",{className:"flex-1 flex flex-col lg:flex-row gap-6",children:[c.jsxs("div",{className:"lg:w-[60%] bg-white rounded-3xl border border-slate-100 p-6 flex flex-col",children:[c.jsxs("div",{className:"relative mb-6",children:[c.jsx(_y,{className:"absolute left-4 top-1/2 -translate-y-1/2 text-slate-400",size:18}),c.jsx("input",{type:"text",placeholder:"Buscar por marca, modelo ou código...",value:e,onChange:v=>n(v.target.value),className:"w-full bg-slate-50 border rounded-2xl pl-12 pr-4 py-3.5 outline-none focus:border-[#4A3AFF]"})]}),c.jsx("div",{className:"flex-1 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5",children:g.map(v=>c.jsxs("div",{onClick:()=>s(v),className:"bg-slate-50 border rounded-2xl p-5 cursor-pointer hover:border-[#4A3AFF] transition-all flex flex-col group",children:[c.jsx("div",{className:"text-[11px] text-slate-400 font-mono mb-2",children:v.codigo}),c.jsxs("div",{className:"font-bold text-[15px] group-hover:text-[#4A3AFF]",children:[v.marca," ",v.modelo]}),c.jsx("div",{className:"text-[12px] text-slate-500 mb-4",children:v.categoria}),c.jsxs("div",{className:"mt-auto flex justify-between items-end",children:[c.jsx("span",{className:"font-extrabold text-emerald-600 text-lg",children:se(v.venda)}),c.jsxs("span",{className:"text-[11px] bg-white px-2 py-1 rounded-lg font-bold",children:["Est: ",v.qtd]})]})]},v.id))})]}),c.jsxs("div",{className:"lg:w-[40%] bg-white rounded-3xl border border-slate-100 p-6 flex flex-col",children:[c.jsx("h3",{className:"font-bold text-xl mb-5",children:"Carrinho"}),c.jsxs("div",{className:"mb-5",children:[c.jsx("label",{className:"block text-[12px] font-bold text-slate-500 uppercase mb-2",children:"Cliente Vinculado"}),c.jsxs("select",{value:o,onChange:v=>l(v.target.value),className:"w-full bg-slate-50 border rounded-xl px-4 py-3 outline-none focus:border-[#4A3AFF]",children:[c.jsx("option",{value:"",children:"Consumidor Final (Balcão)"}),a.map(v=>c.jsx("option",{value:v.id,children:v.nome},v.id))]})]}),c.jsx("div",{className:"flex-1 overflow-y-auto space-y-3 mb-6 p-3 bg-slate-50 rounded-2xl border",children:r.map(v=>c.jsxs("div",{className:"flex justify-between items-center p-4 bg-white border rounded-xl",children:[c.jsxs("div",{className:"flex-1",children:[c.jsxs("div",{className:"font-bold text-[14px]",children:[v.marca," ",v.modelo]}),c.jsxs("div",{className:"text-[12px] text-slate-500 mt-1",children:[c.jsxs("span",{className:"font-bold px-1.5 py-0.5 bg-slate-100 rounded mr-1",children:[v.qtd,"x"]})," ",se(v.venda)]})]}),c.jsx("div",{className:"font-extrabold text-[15px] mr-3",children:se(Number(v.venda)*v.qtd)}),c.jsx("button",{onClick:()=>i(v.id),className:"text-slate-300 hover:text-rose-500",children:c.jsx(wy,{size:18})})]},v.id))}),c.jsxs("div",{className:"pt-5 border-t",children:[c.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-6",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-[11px] font-bold text-slate-400 uppercase mb-2",children:"Desc (R$)"}),c.jsx("input",{type:"number",min:"0",value:u,onChange:v=>d(Number(v.target.value)),className:"w-full bg-slate-50 border rounded-xl px-4 py-3 outline-none focus:border-[#4A3AFF]"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-[11px] font-bold text-slate-400 uppercase mb-2",children:"Pagamento"}),c.jsxs("select",{value:h,onChange:v=>f(v.target.value),className:"w-full bg-slate-50 border rounded-xl px-4 py-3 outline-none focus:border-[#4A3AFF]",children:[c.jsx("option",{children:"Pix"}),c.jsx("option",{children:"Crédito"}),c.jsx("option",{children:"Débito"}),c.jsx("option",{children:"Dinheiro"})]})]})]}),c.jsxs("div",{className:"flex justify-between items-end mb-6",children:[c.jsx("span",{className:"font-bold text-slate-500 text-[15px]",children:"Total Geral"}),c.jsx("span",{className:"text-4xl font-black text-[#4A3AFF]",children:se(Math.max(0,r.reduce((v,x)=>v+Number(x.venda)*x.qtd,0)-(Number(u)||0)))})]}),c.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[c.jsxs("button",{onClick:()=>_(!0),className:"w-full border-2 border-slate-200 py-3.5 rounded-xl font-bold flex items-center justify-center",children:[c.jsx(Au,{size:18,className:"mr-2"})," Orçamento"]}),c.jsxs("button",{onClick:()=>_(!1),className:"w-full bg-[#4A3AFF] text-white py-3.5 rounded-xl font-bold flex items-center justify-center",children:[c.jsx(PI,{size:18,className:"mr-2"})," Vender"]})]})]})]})]}):c.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center border-2 border-dashed border-slate-200 rounded-3xl p-8 text-center",children:[c.jsx("div",{className:"w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center text-rose-500 mb-6",children:c.jsx(Ol,{className:"w-10 h-10"})}),c.jsx("h2",{className:"text-2xl font-bold mb-3",children:"O Caixa está Fechado"}),c.jsx("p",{className:"text-slate-500 mb-8 max-w-md",children:"Para garantir a segurança financeira, é obrigatório abrir o caixa do dia antes de registrar qualquer venda."}),c.jsx("button",{onClick:()=>p("caixa"),className:"bg-[#4A3AFF] text-white px-8 py-3.5 rounded-xl font-bold",children:"Ir para o Controle de Caixa"})]})]})}function JI(){const{caixaAberto:t,totalVendasCaixa:e,caixas:n,abrirCaixa:r,fecharCaixa:s,registrarLancamentoCaixa:i}=It(),[o,l]=P.useState("0"),[a,u]=P.useState(!1),[d,h]=P.useState({tipo:"saida",descricao:"",valor:""}),f=async p=>{u(!0);try{await p()}catch(y){alert(y.message||"Não foi possível atualizar o caixa.")}finally{u(!1)}},_=((t==null?void 0:t.lancamentos)||[]).reduce((p,y)=>p+(y.tipo==="entrada"?Number(y.valor):-Number(y.valor)),0);return c.jsxs("div",{className:"flex flex-col h-full",children:[c.jsxs("div",{className:"mb-8 flex justify-between items-center",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"text-2xl sm:text-3xl font-bold mb-2",children:"Caixa Diário"}),c.jsx("p",{className:"text-slate-500",children:"Abertura e fechamento de caixa para o PDV."})]}),t?c.jsx("button",{disabled:a,onClick:()=>f(s),className:"bg-rose-500 text-white px-6 py-3 rounded-xl font-semibold shadow-md disabled:opacity-60",children:"Fechar Caixa"}):c.jsx("button",{disabled:a,onClick:()=>{const p=Number(o.replace(",","."));f(()=>r(p))},className:"bg-[#4A3AFF] text-white px-6 py-3 rounded-xl font-semibold shadow-md disabled:opacity-60",children:"Abrir Caixa"})]}),t?c.jsxs("div",{className:"bg-white rounded-3xl p-8 mb-10 flex justify-between items-center shadow-sm border border-slate-100",children:[c.jsxs("div",{children:[c.jsx("p",{className:"text-emerald-500 font-bold uppercase text-xs mb-2",children:"Caixa Aberto"}),c.jsxs("p",{className:"text-slate-500",children:["Operador: ",c.jsx("span",{className:"font-bold text-slate-900",children:t.operador})]})]}),c.jsxs("div",{className:"flex gap-10",children:[c.jsxs("div",{className:"text-right",children:[c.jsx("p",{className:"text-[11px] font-bold text-slate-400 uppercase mb-1",children:"Fundo Inicial"}),c.jsx("p",{className:"text-2xl font-bold",children:se(t.valorInicial)})]}),c.jsxs("div",{className:"text-right",children:[c.jsx("p",{className:"text-[11px] font-bold text-slate-400 uppercase mb-1",children:"Vendas no Caixa"}),c.jsxs("p",{className:"text-2xl font-bold text-emerald-500",children:["+ ",se(e)]})]}),c.jsxs("div",{className:"text-right pl-10 border-l border-slate-100",children:[c.jsx("p",{className:"text-[11px] font-bold text-slate-400 uppercase mb-1",children:"Saldo Atual"}),c.jsx("p",{className:"text-4xl font-extrabold text-[#4A3AFF]",children:se((t.valorInicial||0)+e+_)})]})]}),c.jsxs("div",{className:"mt-8 pt-6 border-t border-slate-100",children:[c.jsx("h3",{className:"font-bold mb-3",children:"Lançamento de caixa"}),c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-4 gap-3",children:[c.jsxs("select",{value:d.tipo,onChange:p=>h({...d,tipo:p.target.value}),className:"rounded-xl border border-slate-200 px-3 py-3",children:[c.jsx("option",{value:"entrada",children:"Entrada"}),c.jsx("option",{value:"saida",children:"Saída"}),c.jsx("option",{value:"sangria",children:"Sangria"})]}),c.jsx("input",{placeholder:"Descrição",value:d.descricao,onChange:p=>h({...d,descricao:p.target.value}),className:"rounded-xl border border-slate-200 px-3 py-3 sm:col-span-2"}),c.jsx("input",{type:"number",min:"0.01",step:"0.01",placeholder:"Valor",value:d.valor,onChange:p=>h({...d,valor:p.target.value}),className:"rounded-xl border border-slate-200 px-3 py-3"})]}),c.jsxs("button",{onClick:()=>f(async()=>{await i({tipo:d.tipo,descricao:d.descricao,valor:Number(d.valor)}),h({tipo:"saida",descricao:"",valor:""})}),className:"mt-3 text-sm font-bold text-[#4A3AFF] flex items-center gap-2",children:[c.jsx(RI,{size:17})," Registrar lançamento"]})]})]}):c.jsxs("div",{className:"border-2 border-dashed border-slate-200 rounded-3xl p-16 mb-10 text-center flex flex-col items-center",children:[c.jsx("div",{className:"w-16 h-16 bg-white rounded-full flex items-center justify-center text-slate-400 mb-5 shadow-sm border",children:c.jsx(Ol,{size:24})}),c.jsx("h3",{className:"text-2xl font-bold text-slate-800 mb-3",children:"Caixa Fechado"}),c.jsx("p",{className:"text-slate-500 mb-8 max-w-md",children:"Nenhum caixa está aberto no momento. Abra o caixa para permitir novas vendas."}),c.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[c.jsx("label",{htmlFor:"valor-inicial",className:"text-sm font-bold text-slate-600",children:"Fundo inicial"}),c.jsx("input",{id:"valor-inicial",type:"number",min:"0",step:"0.01",value:o,onChange:p=>l(p.target.value),className:"w-36 bg-white border border-slate-200 rounded-xl px-3 py-2 outline-none focus:border-[#4A3AFF]"})]})]}),c.jsxs("div",{className:"bg-white rounded-3xl border border-slate-100 shadow-sm overflow-auto p-5 flex-1",children:[c.jsx("h3",{className:"font-bold mb-4",children:"Histórico de caixas"}),c.jsxs("table",{className:"w-full text-left min-w-[650px]",children:[c.jsx("thead",{children:c.jsxs("tr",{className:"text-xs text-slate-400 uppercase border-b",children:[c.jsx("th",{className:"py-3",children:"Abertura"}),c.jsx("th",{children:"Operador"}),c.jsx("th",{children:"Fundo"}),c.jsx("th",{children:"Vendas"}),c.jsx("th",{children:"Saldo final"})]})}),c.jsx("tbody",{children:n.filter(p=>p.status==="fechado").sort((p,y)=>new Date(y.dataAbertura).getTime()-new Date(p.dataAbertura).getTime()).map(p=>c.jsxs("tr",{className:"border-b border-slate-50",children:[c.jsx("td",{className:"py-3",children:new Date(p.dataAbertura).toLocaleDateString("pt-BR")}),c.jsx("td",{children:p.operador}),c.jsx("td",{children:se(p.valorInicial)}),c.jsx("td",{className:"text-emerald-500",children:se(p.totalVendas||0)}),c.jsx("td",{className:"font-bold",children:se(p.valorFinal||0)})]},p.id))})]})]})]})}function ZI({data:t,onSave:e,onClose:n,fornecedores:r=[]}){const[s,i]=P.useState(t||{codigo:"",categoria:"Armações",marca:"",modelo:"",cor:"",tamanho:"",material:"",fornecedorId:"",tratamento:"",custo:"",venda:"",qtd:"",min:""}),o=(u,d)=>i(h=>({...h,[u]:d})),l="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3.5 text-[15px] outline-none focus:border-[#4A3AFF] transition-all text-slate-900 dark:text-white",a="text-[12px] font-bold text-slate-500 uppercase tracking-wider mb-2 block";return c.jsxs("form",{onSubmit:u=>{u.preventDefault(),e(s)},children:[c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6",children:[c.jsxs("div",{children:[c.jsx("label",{className:a,children:"SKU (Cód)"}),c.jsx("input",{required:!0,value:s.codigo,onChange:u=>o("codigo",u.target.value),className:l})]}),c.jsxs("div",{className:"sm:col-span-2",children:[c.jsx("label",{className:a,children:"Categoria"}),c.jsxs("select",{value:s.categoria,onChange:u=>o("categoria",u.target.value),className:l,children:[c.jsx("option",{children:"Armações"}),c.jsx("option",{children:"Lentes de Contato"}),c.jsx("option",{children:"Lentes Oftálmicas"}),c.jsx("option",{children:"Acessórios/Insumos"})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:a,children:"Marca"}),c.jsx("input",{required:!0,value:s.marca,onChange:u=>o("marca",u.target.value),className:l})]}),c.jsxs("div",{children:[c.jsx("label",{className:a,children:"Modelo"}),c.jsx("input",{value:s.modelo,onChange:u=>o("modelo",u.target.value),className:l})]}),c.jsxs("div",{children:[c.jsx("label",{className:a,children:"Cor"}),c.jsx("input",{value:s.cor,onChange:u=>o("cor",u.target.value),className:l})]}),c.jsxs("div",{children:[c.jsx("label",{className:a,children:"Tamanho"}),c.jsx("input",{value:s.tamanho,onChange:u=>o("tamanho",u.target.value),className:l,placeholder:"Ex: 54-18"})]}),c.jsxs("div",{children:[c.jsx("label",{className:a,children:"Material"}),c.jsx("input",{value:s.material,onChange:u=>o("material",u.target.value),className:l})]}),c.jsxs("div",{children:[c.jsx("label",{className:a,children:"Fornecedor"}),c.jsxs("select",{value:s.fornecedorId,onChange:u=>o("fornecedorId",u.target.value),className:l,children:[c.jsx("option",{value:"",children:"Sem fornecedor"}),r.map(u=>c.jsx("option",{value:u.id,children:u.nomeFantasia||u.razaoSocial||u.nome},u.id))]})]}),c.jsxs("div",{className:"sm:col-span-3",children:[c.jsx("label",{className:a,children:"Tratamento / Especificação"}),c.jsx("input",{value:s.tratamento,onChange:u=>o("tratamento",u.target.value),className:l,placeholder:"Antirreflexo, Transitions, multifocal..."})]}),c.jsx("div",{className:"sm:col-span-3 border-t border-slate-100 dark:border-slate-700 my-2"}),c.jsxs("div",{children:[c.jsx("label",{className:a,children:"Custo (R$)"}),c.jsx("input",{type:"number",step:"0.01",required:!0,value:s.custo,onChange:u=>o("custo",u.target.value),className:l})]}),c.jsxs("div",{children:[c.jsx("label",{className:"text-[12px] font-bold text-emerald-500 uppercase tracking-wider mb-2 block",children:"Venda (R$)"}),c.jsx("input",{type:"number",step:"0.01",required:!0,value:s.venda,onChange:u=>o("venda",u.target.value),className:`${l} border-emerald-200 dark:border-emerald-800 focus:border-emerald-500 font-extrabold`})]}),c.jsxs("div",{children:[c.jsx("label",{className:a,children:"Estoque Atual"}),c.jsx("input",{type:"number",required:!0,value:s.qtd,onChange:u=>o("qtd",u.target.value),className:l})]}),c.jsxs("div",{children:[c.jsx("label",{className:"text-[12px] font-bold text-rose-500 uppercase tracking-wider mb-2 block",children:"Estoque Mín."}),c.jsx("input",{type:"number",required:!0,value:s.min,onChange:u=>o("min",u.target.value),className:`${l} border-rose-200 dark:border-rose-800 focus:border-rose-500`})]})]}),c.jsxs("div",{className:"pt-4 border-t border-slate-100 dark:border-slate-700 flex justify-end gap-3 sm:gap-4",children:[c.jsx("button",{type:"button",onClick:n,className:"px-6 py-3.5 rounded-xl font-bold bg-slate-100 text-slate-600",children:"Cancelar"}),c.jsx("button",{type:"submit",className:"px-8 py-3.5 rounded-xl font-bold bg-[#4A3AFF] text-white",children:"Salvar Produto"})]})]})}function eb(){const{produtos:t,fornecedores:e,salvarProduto:n,excluirProduto:r}=It(),[s,i]=P.useState(""),[o,l]=P.useState(null),[a,u]=P.useState(!1),d=async h=>{await n(h,o==null?void 0:o.id),u(!1),l(null)};return c.jsxs("div",{className:"flex flex-col h-full",children:[c.jsxs("div",{className:"mb-8 flex justify-between items-center",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"text-2xl sm:text-3xl font-bold mb-2",children:"Estoque"}),c.jsx("p",{className:"text-slate-500",children:"Gerencie produtos e níveis de inventário."})]}),c.jsxs("button",{onClick:()=>{l(null),u(!0)},className:"bg-[#4A3AFF] text-white px-6 py-3 rounded-xl font-semibold flex items-center",children:[c.jsx(Zi,{size:20,className:"mr-2"})," Adicionar Produto"]})]}),c.jsxs("div",{className:"bg-white rounded-3xl border border-slate-100 shadow-sm flex-1 flex flex-col overflow-hidden min-h-[400px]",children:[c.jsx("div",{className:"p-4 bg-white border-b border-slate-100",children:c.jsxs("div",{className:"relative max-w-md",children:[c.jsx(_y,{className:"absolute left-4 top-1/2 -translate-y-1/2 text-slate-400",size:18}),c.jsx("input",{type:"text",placeholder:"Buscar código, marca...",value:s,onChange:h=>i(h.target.value),className:"w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-4 py-3 outline-none focus:border-[#4A3AFF]"})]})}),c.jsx("div",{className:"flex-1 overflow-auto custom-scrollbar",children:c.jsxs("table",{className:"w-full text-left min-w-[700px]",children:[c.jsx("thead",{children:c.jsxs("tr",{className:"border-b border-slate-100 text-[11px] text-slate-400 uppercase font-semibold sticky top-0 bg-white",children:[c.jsx("th",{className:"py-4 px-6 w-24",children:"Cód."}),c.jsx("th",{className:"py-4 px-6",children:"Produto"}),c.jsx("th",{className:"py-4 px-6",children:"Categoria"}),c.jsx("th",{className:"py-4 px-6 text-right",children:"Venda"}),c.jsx("th",{className:"py-4 px-6 text-center w-28",children:"Qtd"}),c.jsx("th",{className:"py-4 px-6 text-center",children:"Ações"})]})}),c.jsx("tbody",{className:"divide-y divide-slate-50",children:t.filter(h=>{var f,_;return((f=h.codigo)==null?void 0:f.toLowerCase().includes(s.toLowerCase()))||((_=h.marca)==null?void 0:_.toLowerCase().includes(s.toLowerCase()))}).map(h=>c.jsxs("tr",{className:"hover:bg-slate-50 transition-colors",children:[c.jsx("td",{className:"py-4 px-6 font-mono text-[12px] font-bold text-slate-400",children:h.codigo}),c.jsx("td",{className:"py-4 px-6",children:c.jsxs("div",{className:"font-bold text-[14px]",children:[h.marca," ",c.jsx("span",{className:"font-normal text-slate-500",children:h.modelo})]})}),c.jsx("td",{className:"py-4 px-6 text-[13px]",children:c.jsx("span",{className:"bg-slate-100 px-3 py-1.5 rounded-lg font-medium",children:h.categoria})}),c.jsx("td",{className:"py-4 px-6 text-right font-extrabold text-[15px] text-emerald-600",children:se(h.venda)}),c.jsx("td",{className:"py-4 px-6 text-center",children:c.jsx("span",{className:`inline-flex items-center justify-center w-10 h-10 rounded-xl text-[14px] font-bold ${Number(h.qtd)<Number(h.min)?"bg-rose-50 text-rose-600":"bg-slate-50 text-slate-700"}`,children:h.qtd})}),c.jsxs("td",{className:"py-4 px-6 text-center",children:[c.jsx("button",{onClick:()=>{l(h),u(!0)},className:"p-2 rounded-xl text-slate-400 hover:text-[#4A3AFF] hover:bg-indigo-50",children:c.jsx(va,{size:16})}),c.jsx("button",{onClick:()=>r(h.id).catch(f=>alert(f.message)),className:"p-2 rounded-xl text-slate-400 hover:text-rose-500 hover:bg-rose-50",children:c.jsx(_a,{size:16})})]})]},h.id))})]})})]}),c.jsx(xa,{open:a,onClose:()=>{u(!1),l(null)},title:o?"Editar Produto":"Novo Produto",width:"max-w-3xl",children:c.jsx(ZI,{data:o,fornecedores:e,onSave:d,onClose:()=>{u(!1),l(null)}})})]})}function tb({data:t,onSave:e,onClose:n}){const r=()=>({esf:"",cil:"",eixo:"",dnp:"",add:"",altura:""}),s=()=>({medico:"",crm:"",dataReceita:"",obs:"",od:r(),oe:r(),longe:{od:r(),oe:r()},perto:{od:r(),oe:r()}}),i=()=>({nome:"",cpf:"",tel:"",nasc:"",email:"",endereco:{cep:"",logradouro:"",numero:"",complemento:"",bairro:"",cidade:"",estado:""},prescricao:s()}),[o,l]=P.useState(i());P.useEffect(()=>{var _,p,y,w;if(t){const m=t.prescricao||s();l({...i(),...t,endereco:{...i().endereco,...t.endereco||{}},prescricao:{...s(),...m,od:{...r(),...m.od||{}},oe:{...r(),...m.oe||{}},longe:{od:{...r(),...((_=m.longe)==null?void 0:_.od)||{}},oe:{...r(),...((p=m.longe)==null?void 0:p.oe)||{}}},perto:{od:{...r(),...((y=m.perto)==null?void 0:y.od)||{}},oe:{...r(),...((w=m.perto)==null?void 0:w.oe)||{}}}}})}else l(i())},[t]);const a=(_,p)=>l(y=>({...y,[_]:p})),u=(_,p,y)=>l(w=>({...w,[_]:{...w[_],[p]:y}})),d=(_,p,y,w)=>l(m=>({...m,prescricao:{...m.prescricao,[_]:{...m.prescricao[_],[p]:{...m.prescricao[_][p],[y]:w}}}})),h="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3 text-[14px] outline-none focus:border-[#4A3AFF]",f="text-[12px] font-bold text-slate-500 uppercase mb-2 block";return c.jsxs("form",{onSubmit:_=>{_.preventDefault(),e(o)},className:"flex flex-col",children:[c.jsxs("div",{className:"space-y-6",children:[c.jsxs("div",{children:[c.jsxs("h3",{className:"text-[13px] font-bold text-indigo-500 uppercase mb-4 flex items-center gap-2",children:[c.jsx(ya,{size:16})," Dados Pessoais"]}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[c.jsxs("div",{children:[c.jsx("label",{className:f,children:"Nome Completo"}),c.jsx("input",{required:!0,value:o.nome,onChange:_=>a("nome",_.target.value),className:h})]}),c.jsxs("div",{children:[c.jsx("label",{className:f,children:"WhatsApp"}),c.jsx("input",{required:!0,value:o.tel,onChange:_=>a("tel",_.target.value),className:h,placeholder:"(00) 00000-0000"})]}),c.jsxs("div",{children:[c.jsx("label",{className:f,children:"CPF / CNPJ"}),c.jsx("input",{value:o.cpf,onChange:_=>a("cpf",_.target.value),className:h})]}),c.jsxs("div",{children:[c.jsx("label",{className:f,children:"Nascimento"}),c.jsx("input",{type:"date",value:o.nasc,onChange:_=>a("nasc",_.target.value),className:h})]}),c.jsxs("div",{className:"md:col-span-2",children:[c.jsx("label",{className:f,children:"E-mail"}),c.jsx("input",{type:"email",value:o.email,onChange:_=>a("email",_.target.value),className:h})]})]})]}),c.jsxs("div",{className:"border-t pt-6",children:[c.jsxs("h3",{className:"text-[13px] font-bold text-slate-500 uppercase mb-4 flex items-center gap-2",children:[c.jsx(FI,{size:16})," Endereço"]}),c.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[["cep","CEP"],["logradouro","Logradouro"],["numero","Número"],["complemento","Complemento"],["bairro","Bairro"],["cidade","Cidade"],["estado","UF"]].map(([_,p])=>c.jsxs("div",{className:_==="logradouro"?"col-span-2":"",children:[c.jsx("label",{className:f,children:p}),c.jsx("input",{value:o.endereco[_]||"",onChange:y=>u("endereco",_,y.target.value),className:h})]},_))})]}),c.jsxs("div",{className:"border-t pt-6",children:[c.jsxs("h3",{className:"text-[13px] font-bold text-emerald-500 uppercase mb-4 flex items-center gap-2",children:[c.jsx(DI,{size:16})," Receituário Ótico"]}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5 mb-5",children:[c.jsxs("div",{children:[c.jsx("label",{className:f,children:"Médico Oftalmologista"}),c.jsx("input",{value:o.prescricao.medico,onChange:_=>l(p=>({...p,prescricao:{...p.prescricao,medico:_.target.value}})),className:h})]}),c.jsxs("div",{children:[c.jsx("label",{className:f,children:"CRM"}),c.jsx("input",{value:o.prescricao.crm,onChange:_=>l(p=>({...p,prescricao:{...p.prescricao,crm:_.target.value}})),className:h})]}),c.jsxs("div",{children:[c.jsx("label",{className:f,children:"Data da Receita"}),c.jsx("input",{type:"date",value:o.prescricao.dataReceita,onChange:_=>l(p=>({...p,prescricao:{...p.prescricao,dataReceita:_.target.value}})),className:h})]}),c.jsxs("div",{children:[c.jsx("label",{className:f,children:"Observações"}),c.jsx("input",{value:o.prescricao.obs,onChange:_=>l(p=>({...p,prescricao:{...p.prescricao,obs:_.target.value}})),className:h})]})]}),["longe","perto"].map(_=>c.jsxs("div",{className:"mb-5 overflow-x-auto",children:[c.jsx("h4",{className:"font-bold text-slate-600 mb-2",children:_==="longe"?"Visão de Longe":"Visão de Perto"}),c.jsxs("div",{className:"min-w-[650px] grid grid-cols-7 gap-2 text-center",children:[c.jsx("div",{className:"text-left text-xs font-bold text-slate-400",children:"Olho"}),["Esférico","Cilíndrico","Eixo","DNP","Adição","Altura"].map(p=>c.jsx("div",{className:"text-[10px] font-bold text-slate-400 uppercase",children:p},p)),["od","oe"].flatMap(p=>[c.jsx("div",{className:"text-left font-bold text-[#4A3AFF] uppercase",children:p},`${_}-${p}-label`),...["esf","cil","eixo","dnp","add","altura"].map(y=>c.jsx("input",{value:o.prescricao[_][p][y],onChange:w=>d(_,p,y,w.target.value),className:"w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 rounded-xl px-2 py-2 text-center text-sm",placeholder:"-"},`${_}-${p}-${y}`))])]})]},_))]})]}),c.jsxs("div",{className:"mt-8 border-t flex justify-end gap-3 pt-4",children:[c.jsx("button",{type:"button",onClick:n,className:"px-6 py-3 rounded-xl font-bold bg-slate-100 text-slate-600",children:"Cancelar"}),c.jsx("button",{type:"submit",className:"px-8 py-3 rounded-xl font-bold bg-[#4A3AFF] text-white",children:"Salvar Ficha"})]})]})}function nb(){const{clientes:t,salvarCliente:e,excluirCliente:n,vendas:r,ordensServico:s}=It(),[i,o]=oi.useState(null),[l,a]=oi.useState(!1),u=async d=>{await e(d,i==null?void 0:i.id),a(!1),o(null)};return c.jsxs("div",{className:"flex flex-col h-full",children:[c.jsxs("div",{className:"mb-8 flex justify-between items-center",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"text-2xl sm:text-3xl font-bold mb-2",children:"Clientes & Receitas"}),c.jsx("p",{className:"text-slate-500",children:"Gestão de contatos e prontuários óticos."})]}),c.jsxs("button",{onClick:()=>{o(null),a(!0)},className:"bg-[#4A3AFF] text-white px-6 py-3 rounded-xl font-semibold flex items-center shadow-md",children:[c.jsx(Zi,{size:20,className:"mr-2"})," Novo Cliente"]})]}),c.jsx("div",{className:"bg-white rounded-3xl border border-slate-100 shadow-sm flex-1 flex flex-col overflow-hidden min-h-[400px]",children:c.jsx("div",{className:"flex-1 overflow-auto custom-scrollbar p-2",children:c.jsxs("table",{className:"w-full text-left min-w-[700px]",children:[c.jsx("thead",{children:c.jsxs("tr",{className:"border-b border-slate-100 text-[11px] text-slate-400 uppercase tracking-wider font-semibold sticky top-0 bg-white",children:[c.jsx("th",{className:"py-4 px-6",children:"Cliente / CPF"}),c.jsx("th",{className:"py-4 px-6",children:"Contato"}),c.jsx("th",{className:"py-4 px-6",children:"Médico Responsável"}),c.jsx("th",{className:"py-4 px-6 text-center w-24",children:"Ações"})]})}),c.jsx("tbody",{className:"divide-y divide-slate-50",children:t.map(d=>{var h;return c.jsxs("tr",{className:"hover:bg-slate-50 transition-colors",children:[c.jsxs("td",{className:"py-4 px-6",children:[c.jsx("div",{className:"font-bold text-[14px]",children:d.nome}),c.jsx("div",{className:"text-[12px] text-slate-400 mt-0.5",children:d.cpf||"Sem CPF"})]}),c.jsxs("td",{className:"py-4 px-6 text-[14px] font-medium text-slate-600",children:[c.jsx("a",{href:`https://wa.me/${(d.tel||"").replace(/\D/g,"")}`,target:"_blank",rel:"noreferrer",className:"text-emerald-600 hover:underline",children:d.tel}),c.jsxs("div",{className:"text-[11px] text-slate-400 mt-1",children:[r.filter(f=>f.cliId===d.id).length," compra(s) · ",s.filter(f=>f.clienteId===d.id).length," OS"]})]}),c.jsx("td",{className:"py-4 px-6",children:c.jsx("div",{className:"text-[14px] font-medium text-slate-700",children:((h=d.prescricao)==null?void 0:h.medico)||"Não informado"})}),c.jsx("td",{className:"py-4 px-6 text-center",children:c.jsxs("div",{className:"flex justify-center gap-2",children:[c.jsx("button",{onClick:()=>{o(d),a(!0)},className:"p-2 rounded-xl text-slate-400 hover:text-[#4A3AFF] hover:bg-indigo-50",children:c.jsx(va,{size:16})}),c.jsx("button",{onClick:()=>n(d.id).catch(f=>alert(f.message)),className:"p-2 rounded-xl text-slate-400 hover:text-rose-500 hover:bg-rose-50",children:c.jsx(_a,{size:16})})]})})]},d.id)})})]})})}),c.jsx(xa,{open:l,onClose:()=>{a(!1),o(null)},title:i?"Editar Cliente":"Novo Cliente",width:"max-w-4xl",children:c.jsx(tb,{data:i,onSave:u,onClose:()=>{a(!1),o(null)}})})]})}function rb(){const{orcamentos:t,clientes:e,setActiveTab:n,converterOrcamentoParaOs:r}=It();return c.jsxs("div",{className:"flex flex-col h-full",children:[c.jsxs("div",{className:"mb-8 flex justify-between items-center",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"text-2xl sm:text-3xl font-bold mb-2",children:"Orçamentos"}),c.jsx("p",{className:"text-slate-500",children:"Negociações salvas via PDV."})]}),c.jsxs("button",{onClick:()=>n("vendas"),className:"bg-[#4A3AFF] text-white px-6 py-3 rounded-xl font-semibold flex items-center",children:[c.jsx(Zi,{size:20,className:"mr-2"})," Novo via PDV"]})]}),c.jsx("div",{className:"bg-white rounded-3xl border border-slate-100 shadow-sm flex-1 flex flex-col overflow-hidden min-h-[400px]",children:c.jsx("div",{className:"flex-1 overflow-auto custom-scrollbar p-2",children:c.jsxs("table",{className:"w-full text-left min-w-[700px]",children:[c.jsx("thead",{children:c.jsxs("tr",{className:"border-b border-slate-100 text-[11px] text-slate-400 uppercase font-semibold sticky top-0 bg-white",children:[c.jsx("th",{className:"py-4 px-6",children:"Data / Cliente"}),c.jsx("th",{className:"py-4 px-6",children:"Itens"}),c.jsx("th",{className:"py-4 px-6 text-right",children:"Total"}),c.jsx("th",{className:"py-4 px-6 text-center w-24",children:"Ações"})]})}),c.jsx("tbody",{className:"divide-y divide-slate-50",children:t.map(s=>{var i,o;return c.jsxs("tr",{className:"hover:bg-slate-50 transition-colors group",children:[c.jsxs("td",{className:"py-4 px-6",children:[c.jsx("div",{className:"font-bold text-[14px]",children:((i=e.find(l=>l.id===s.cliId))==null?void 0:i.nome)||"Desconhecido"}),c.jsx("div",{className:"text-[12px] text-slate-400 mt-0.5",children:new Date(s.data).toLocaleDateString("pt-BR")})]}),c.jsxs("td",{className:"py-4 px-6 text-[14px] font-medium text-slate-600",children:[((o=s.itens)==null?void 0:o.length)||0," produto(s)"]}),c.jsx("td",{className:"py-4 px-6 text-right font-extrabold text-[15px] text-[#4A3AFF]",children:se(s.total)}),c.jsx("td",{className:"py-4 px-6 text-center",children:c.jsxs("div",{className:"flex gap-2",children:[c.jsx("button",{onClick:()=>r(s).then(()=>n("ordens")).catch(l=>alert(l.message)),className:"px-3 py-2 rounded-xl text-xs font-bold text-[#4A3AFF] hover:bg-indigo-50",children:"Converter em OS"}),c.jsx("button",{className:"p-2 rounded-xl text-slate-400 hover:text-rose-500 hover:bg-rose-50",children:c.jsx(_a,{size:16})})]})})]},s.id)})})]})})})]})}function sb(){const{vendas:t,clientes:e,contas:n,caixas:r}=It(),s=n.filter(u=>u.tipo==="pagar"),i=n.filter(u=>u.tipo==="receber"),o=s.reduce((u,d)=>u+Number(d.valor||0),0),l=i.reduce((u,d)=>u+Number(d.valor||0),0),a=r.reduce((u,d)=>u+(d.lancamentos||[]).filter(h=>h.tipo!=="entrada").reduce((h,f)=>h+Number(f.valor||0),0),0);return c.jsxs("div",{className:"flex flex-col h-full",children:[c.jsxs("div",{className:"mb-8",children:[c.jsx("h1",{className:"text-2xl sm:text-3xl font-bold mb-2",children:"Financeiro (DRE)"}),c.jsx("p",{className:"text-slate-500",children:"Análise de lucratividade real e CMV."})]}),c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4",children:[c.jsx(Vt,{title:"Faturamento Bruto",value:se(t.reduce((u,d)=>u+(d.total||0),0)),icon:Dl}),c.jsx(Vt,{title:"CMV (Custo dos Produtos)",value:se(t.reduce((u,d)=>u+(d.custoBase||0),0)),icon:VI,color:"text-rose-500"}),c.jsx(Vt,{title:"Lucro Bruto",value:se(t.reduce((u,d)=>u+(d.total||0),0)-t.reduce((u,d)=>u+(d.custoBase||0),0)),icon:Ru,bg:"bg-[#4A3AFF]/10",color:"text-[#4A3AFF]",border:"border-[#4A3AFF]/20"}),c.jsx(Vt,{title:"A Pagar",value:se(o),subtitle:`${s.length} lançamentos`,icon:Ru,color:"text-rose-500"}),c.jsx(Vt,{title:"A Receber",value:se(l),subtitle:`${i.length} lançamentos`,icon:Dl,color:"text-emerald-500"})]}),c.jsxs("div",{className:"bg-white rounded-3xl border border-slate-100 shadow-sm p-5 mt-6",children:[c.jsx("h3",{className:"font-bold mb-4",children:"Fluxo de caixa consolidado"}),c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[c.jsxs("div",{children:[c.jsx("span",{className:"text-xs text-slate-400 uppercase font-bold",children:"Vendas realizadas"}),c.jsx("p",{className:"text-xl font-black text-emerald-500",children:se(t.reduce((u,d)=>u+Number(d.total||0),0))})]}),c.jsxs("div",{children:[c.jsx("span",{className:"text-xs text-slate-400 uppercase font-bold",children:"Saídas e sangrias"}),c.jsx("p",{className:"text-xl font-black text-rose-500",children:se(a)})]}),c.jsxs("div",{children:[c.jsx("span",{className:"text-xs text-slate-400 uppercase font-bold",children:"Saldo operacional"}),c.jsx("p",{className:"text-xl font-black text-[#4A3AFF]",children:se(t.reduce((u,d)=>u+Number(d.total||0),0)-a)})]})]})]}),c.jsxs("div",{className:"bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden p-2 mt-8 flex-1 flex flex-col min-h-[300px]",children:[c.jsx("div",{className:"p-5 flex-shrink-0",children:c.jsx("h3",{className:"font-bold text-[16px]",children:"Últimas Vendas"})}),c.jsx("div",{className:"overflow-x-auto overflow-y-auto flex-1 custom-scrollbar",children:c.jsxs("table",{className:"w-full text-left min-w-[800px]",children:[c.jsx("thead",{children:c.jsxs("tr",{className:"border-b border-slate-100 text-[11px] text-slate-400 uppercase font-semibold sticky top-0 bg-white",children:[c.jsx("th",{className:"py-4 px-6",children:"Data"}),c.jsx("th",{className:"py-4 px-6",children:"Cliente"}),c.jsx("th",{className:"py-4 px-6",children:"Pagamento"}),c.jsx("th",{className:"py-4 px-6 text-right",children:"Total"})]})}),c.jsx("tbody",{className:"divide-y divide-slate-50",children:t.slice().sort((u,d)=>new Date(d.data).getTime()-new Date(u.data).getTime()).slice(0,10).map(u=>{var d;return c.jsxs("tr",{className:"hover:bg-slate-50 transition-colors",children:[c.jsx("td",{className:"py-4 px-6 text-[14px] text-slate-700",children:new Date(u.data).toLocaleDateString("pt-BR")}),c.jsx("td",{className:"py-4 px-6 text-[14px] font-bold",children:((d=e.find(h=>h.id===u.cliId))==null?void 0:d.nome)||"Balcão"}),c.jsx("td",{className:"py-4 px-6 text-[14px]",children:c.jsx("span",{className:"bg-slate-100 px-3 py-1.5 rounded-lg font-medium",children:u.pag})}),c.jsx("td",{className:"py-4 px-6 text-right font-extrabold text-[15px] text-[#4A3AFF]",children:se(u.total)})]},u.id)})})]})})]})]})}function ib({config:t,initialData:e,onSave:n,onClose:r}){const[s,i]=P.useState(e||t.defaultData),o=(u,d)=>i(h=>({...h,[u]:d})),l="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3.5 text-[15px] outline-none focus:border-[#4A3AFF] transition-all text-slate-900 dark:text-white",a="text-[12px] font-bold text-slate-500 uppercase tracking-wider mb-2 block";return c.jsxs("form",{onSubmit:u=>{u.preventDefault(),n(s)},children:[c.jsx("div",{className:"space-y-4 mb-6",children:t.fields.map(u=>c.jsxs("div",{children:[c.jsxs("label",{className:a,children:[u.label," ",u.required&&"*"]}),u.type==="select"?c.jsxs("select",{required:u.required,value:s[u.name]||"",onChange:d=>o(u.name,d.target.value),className:l,children:[c.jsx("option",{value:"",children:"Selecione..."}),u.options.map(d=>c.jsx("option",{value:d.val,children:d.label},d.val))]}):c.jsx("input",{type:u.type,step:u.step,required:u.required,value:s[u.name]||"",onChange:d=>o(u.name,d.target.value),className:l})]},u.name))}),c.jsxs("div",{className:"flex justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-700",children:[c.jsx("button",{type:"button",onClick:r,className:"px-6 py-3 rounded-xl bg-slate-100 text-slate-700 font-bold hover:bg-slate-200 transition-colors",children:"Cancelar"}),c.jsx("button",{type:"submit",className:"px-6 py-3 rounded-xl bg-[#4A3AFF] text-white font-bold hover:bg-[#3d2ee6] shadow-md transition-all",children:"Salvar"})]})]})}function ob({activeTab:t}){const{fornecedores:e,contas:n,categorias:r,usuarios:s,salvarCadastro:i,excluirCadastro:o}=It(),[l,a]=oi.useState(null),[u,d]=oi.useState(!1),f=(()=>{switch(t){case"fornecedores":return e;case"contas":return n;case"categorias":return r;case"usuarios":return s;default:return[]}})(),p={fornecedores:{defaultData:{razaoSocial:"",nomeFantasia:"",cnpj:"",inscricaoEstadual:"",telefone:"",email:"",contatoComercial:"",categoriaFornecimento:"Armações",prazoEntrega:"",condicoesComerciais:"",parceriaAtiva:!0,enderecoCep:"",enderecoLogradouro:"",enderecoNumero:"",enderecoComplemento:"",enderecoBairro:"",enderecoCidade:"",enderecoEstado:""},fields:[{name:"razaoSocial",label:"Razão Social",type:"text",required:!0},{name:"nomeFantasia",label:"Nome Fantasia",type:"text"},{name:"cnpj",label:"CNPJ",type:"text"},{name:"inscricaoEstadual",label:"Inscrição Estadual",type:"text"},{name:"telefone",label:"Telefone",type:"text"},{name:"email",label:"E-mail",type:"email"},{name:"contatoComercial",label:"Contato Comercial",type:"text"},{name:"categoriaFornecimento",label:"Categoria de Fornecimento",type:"select",options:[{val:"Armações",label:"Armações"},{val:"Lentes de Contato",label:"Lentes de Contato"},{val:"Lentes Oftálmicas",label:"Lentes Oftálmicas"},{val:"Insumos/Laboratório",label:"Insumos/Laboratório"}]},{name:"prazoEntrega",label:"Prazo padrão (dias)",type:"number"},{name:"condicoesComerciais",label:"Condições Comerciais",type:"text"},{name:"enderecoCep",label:"CEP",type:"text"},{name:"enderecoLogradouro",label:"Logradouro",type:"text"},{name:"enderecoNumero",label:"Número",type:"text"},{name:"enderecoComplemento",label:"Complemento",type:"text"},{name:"enderecoBairro",label:"Bairro",type:"text"},{name:"enderecoCidade",label:"Cidade",type:"text"},{name:"enderecoEstado",label:"UF",type:"text"}]},contas:{defaultData:{descricao:"",tipo:"pagar",valor:"",vencimento:"",fornecedorId:"",formaPagamento:"PIX",status:"pendente"},fields:[{name:"descricao",label:"Descrição",type:"text",required:!0},{name:"tipo",label:"Tipo",type:"select",required:!0,options:[{val:"pagar",label:"A pagar"},{val:"receber",label:"A receber"}]},{name:"valor",label:"Valor",type:"number",step:"0.01",required:!0},{name:"vencimento",label:"Vencimento",type:"date"},{name:"fornecedorId",label:"Fornecedor vinculado",type:"text"},{name:"formaPagamento",label:"Forma de pagamento",type:"select",options:[{val:"PIX",label:"PIX"},{val:"cartao",label:"Cartão"},{val:"crediario",label:"Crediário próprio"},{val:"dinheiro",label:"Dinheiro"}]},{name:"status",label:"Status",type:"select",options:[{val:"pendente",label:"Pendente"},{val:"pago",label:"Pago/Recebido"}]}]},categorias:{defaultData:{nome:""},fields:[{name:"nome",label:"Nome",type:"text",required:!0}]},usuarios:{defaultData:{nome:"",email:"",perfil:"vendedor"},fields:[{name:"nome",label:"Nome",type:"text",required:!0},{name:"email",label:"E-mail",type:"email",required:!0},{name:"perfil",label:"Perfil",type:"select",required:!0,options:[{val:"vendedor",label:"Vendedor"},{val:"admin",label:"Administrador"}]}]}}[t],y=t,w=async m=>{await i(y,m,l==null?void 0:l.id),d(!1),a(null)};return c.jsxs("div",{className:"flex flex-col h-full",children:[c.jsxs("div",{className:"mb-8 flex justify-between items-center",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"text-2xl sm:text-3xl font-bold mb-2 capitalize",children:t}),c.jsx("p",{className:"text-slate-500",children:"Gestão completa liberada."})]}),c.jsxs("button",{onClick:()=>{a(null),d(!0)},className:"bg-[#4A3AFF] text-white px-6 py-3 rounded-xl font-semibold flex items-center",children:[c.jsx(Zi,{size:20,className:"mr-2"})," Adicionar"]})]}),c.jsx("div",{className:"bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden p-2 flex-1 flex flex-col min-h-[400px]",children:c.jsx("div",{className:"overflow-x-auto overflow-y-auto flex-1 custom-scrollbar",children:c.jsxs("table",{className:"w-full text-left min-w-[600px]",children:[c.jsx("thead",{children:c.jsxs("tr",{className:"border-b border-slate-100 text-[11px] text-slate-400 uppercase font-semibold sticky top-0 bg-white",children:[c.jsx("th",{className:"py-4 px-6",children:"Registro Principal"}),c.jsx("th",{className:"py-4 px-6",children:"Detalhes"}),c.jsx("th",{className:"py-4 px-6 text-center",children:"Ações"})]})}),c.jsx("tbody",{className:"divide-y divide-slate-50",children:f==null?void 0:f.map(m=>c.jsxs("tr",{className:"hover:bg-slate-50 transition-colors",children:[c.jsxs("td",{className:"py-4 px-6",children:[c.jsx("div",{className:"font-bold text-[14px]",children:m.nome||m.razaoSocial||m.descricao}),c.jsx("div",{className:"text-[12px] text-slate-400 mt-0.5",children:m.cnpj||m.email||m.nomeFantasia||(m.vencimento?`Venc: ${new Date(m.vencimento).toLocaleDateString("pt-BR")}`:"")})]}),c.jsxs("td",{className:"py-4 px-6 text-[14px] font-medium text-slate-600",children:[m.valor?c.jsx("span",{className:`font-extrabold ${m.tipo==="pagar"?"text-rose-500":"text-emerald-500"}`,children:se(m.valor)}):m.contato||m.telefone||m.categoriaFornecimento||m.perfil||m.descricao||"-",t==="fornecedores"&&c.jsxs("span",{className:"block text-[11px] text-slate-400 mt-1",children:[n.filter(g=>g.fornecedorId===m.id).length," compra(s) vinculada(s)"]})]}),c.jsx("td",{className:"py-4 px-6 text-center",children:c.jsxs("div",{className:"flex justify-center gap-2",children:[c.jsx("button",{onClick:()=>{a(m),d(!0)},className:"p-2 rounded-xl text-slate-400 hover:text-[#4A3AFF] hover:bg-indigo-50",children:c.jsx(va,{size:16})}),c.jsx("button",{onClick:()=>o(y,m.id).catch(g=>alert(g.message)),className:"p-2 rounded-xl text-slate-400 hover:text-rose-500 hover:bg-rose-50",children:c.jsx(_a,{size:16})})]})})]},m.id))})]})})}),c.jsx(xa,{open:u,onClose:()=>{d(!1),a(null)},title:l?`Editar ${t}`:`Novo ${t}`,children:c.jsx(ib,{config:p,initialData:l,onSave:w,onClose:()=>{d(!1),a(null)}})})]})}const lb={aguardando_montagem:"Aguardando Montagem",em_laboratorio:"Em Laboratório",pronto_retirada:"Pronto para Retirada",entregue:"Entregue",cancelada:"Cancelada"};function ab(){const{ordensServico:t,clientes:e,produtos:n,salvarOrdemServico:r}=It(),[s,i]=P.useState(null),[o,l]=P.useState(!1),[a,u]=P.useState(null),d=p=>{i(p||null),u(p?{...p}:{clienteId:"",status:"aguardando_montagem",previsaoEntrega:"",observacoes:"",receitaId:"",itens:[{produtoId:"",descricao:"",qtd:1,valor:0,tratamento:""}]}),l(!0)},h=(p,y,w)=>u(m=>({...m,itens:m.itens.map((g,v)=>v===p?{...g,[y]:w}:g)})),f=(p,y)=>{const w=n.find(m=>m.id===y);h(p,"produtoId",y),w&&u(m=>({...m,itens:m.itens.map((g,v)=>v===p?{...g,produtoId:y,descricao:`${w.marca} ${w.modelo}`.trim(),valor:Number(w.venda)||0}:g)}))},_=async p=>{p.preventDefault(),await r({...a,criadoEm:(s==null?void 0:s.criadoEm)||new Date().toISOString(),atualizadoEm:new Date().toISOString()},s==null?void 0:s.id),l(!1)};return c.jsxs("div",{className:"flex flex-col h-full",children:[c.jsxs("div",{className:"mb-8 flex justify-between items-center gap-4",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"text-2xl sm:text-3xl font-bold mb-2",children:"Ordens de Serviço"}),c.jsx("p",{className:"text-slate-500",children:"Acompanhe montagem, laboratório e retirada."})]}),c.jsxs("button",{onClick:()=>d(),className:"bg-[#4A3AFF] text-white px-6 py-3 rounded-xl font-semibold flex items-center",children:[c.jsx(Zi,{size:20,className:"mr-2"})," Nova OS"]})]}),c.jsx("div",{className:"bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm flex-1 overflow-auto p-2",children:c.jsxs("table",{className:"w-full text-left min-w-[800px]",children:[c.jsx("thead",{children:c.jsxs("tr",{className:"border-b border-slate-100 text-[11px] text-slate-400 uppercase font-semibold",children:[c.jsx("th",{className:"py-4 px-6",children:"Cliente"}),c.jsx("th",{className:"py-4 px-6",children:"Itens"}),c.jsx("th",{className:"py-4 px-6",children:"Previsão"}),c.jsx("th",{className:"py-4 px-6",children:"Status"}),c.jsx("th",{className:"py-4 px-6 text-right",children:"Total"}),c.jsx("th",{className:"py-4 px-6",children:"Ações"})]})}),c.jsxs("tbody",{className:"divide-y divide-slate-50",children:[t.map(p=>{var y;return c.jsxs("tr",{className:"hover:bg-slate-50 dark:hover:bg-slate-700/30",children:[c.jsx("td",{className:"py-4 px-6 font-bold",children:((y=e.find(w=>w.id===p.clienteId))==null?void 0:y.nome)||"Cliente não encontrado"}),c.jsxs("td",{className:"py-4 px-6",children:[p.itens.length," item(ns)"]}),c.jsx("td",{className:"py-4 px-6",children:p.previsaoEntrega?new Date(p.previsaoEntrega).toLocaleDateString("pt-BR"):"-"}),c.jsx("td",{className:"py-4 px-6",children:c.jsxs("select",{value:p.status,onChange:w=>r({...p,status:w.target.value,atualizadoEm:new Date().toISOString()},p.id),className:"bg-slate-100 rounded-lg px-2 py-1 text-xs font-bold",children:[c.jsx("option",{value:"aguardando_montagem",children:"Aguardando Montagem"}),c.jsx("option",{value:"em_laboratorio",children:"Em Laboratório"}),c.jsx("option",{value:"pronto_retirada",children:"Pronto para Retirada"}),c.jsx("option",{value:"entregue",children:"Entregue"}),c.jsx("option",{value:"cancelada",children:"Cancelada"})]})}),c.jsx("td",{className:"py-4 px-6 text-right font-bold",children:se(p.itens.reduce((w,m)=>w+Number(m.valor||0)*Number(m.qtd||0),0))}),c.jsx("td",{className:"py-4 px-6",children:c.jsx("button",{onClick:()=>d(p),className:"p-2 text-slate-400 hover:text-[#4A3AFF]",children:c.jsx(va,{size:16})})})]},p.id)}),t.length===0&&c.jsx("tr",{children:c.jsxs("td",{colSpan:6,className:"text-center py-12 text-slate-400",children:[c.jsx(AI,{className:"mx-auto mb-3"}),"Nenhuma ordem de serviço cadastrada."]})})]})]})}),c.jsx(xa,{open:o,onClose:()=>l(!1),title:s?"Editar Ordem de Serviço":"Nova Ordem de Serviço",width:"max-w-4xl",children:a&&c.jsxs("form",{onSubmit:_,className:"space-y-5",children:[c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[c.jsxs("label",{className:"text-xs font-bold text-slate-500 uppercase",children:["Cliente",c.jsxs("select",{required:!0,value:a.clienteId,onChange:p=>u({...a,clienteId:p.target.value}),className:"mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3",children:[c.jsx("option",{value:"",children:"Selecione"}),e.map(p=>c.jsx("option",{value:p.id,children:p.nome},p.id))]})]}),c.jsxs("label",{className:"text-xs font-bold text-slate-500 uppercase",children:["Status",c.jsx("select",{value:a.status,onChange:p=>u({...a,status:p.target.value}),className:"mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3",children:Object.entries(lb).map(([p,y])=>c.jsx("option",{value:p,children:y},p))})]}),c.jsxs("label",{className:"text-xs font-bold text-slate-500 uppercase",children:["Previsão de entrega",c.jsx("input",{type:"date",value:a.previsaoEntrega,onChange:p=>u({...a,previsaoEntrega:p.target.value}),className:"mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3"})]})]}),c.jsxs("div",{className:"border-t pt-4",children:[c.jsxs("div",{className:"flex justify-between items-center mb-3",children:[c.jsx("h3",{className:"font-bold",children:"Armação, lentes e tratamentos"}),c.jsx("button",{type:"button",onClick:()=>u({...a,itens:[...a.itens,{produtoId:"",descricao:"",qtd:1,valor:0,tratamento:""}]}),className:"text-sm font-bold text-[#4A3AFF]",children:"+ Adicionar item"})]}),a.itens.map((p,y)=>c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-5 gap-2 mb-3",children:[c.jsxs("select",{value:p.produtoId,onChange:w=>f(y,w.target.value),className:"rounded-xl border border-slate-200 bg-slate-50 px-3 py-3",children:[c.jsx("option",{value:"",children:"Produto do estoque"}),n.map(w=>c.jsxs("option",{value:w.id,children:[w.marca," ",w.modelo," (",w.categoria,")"]},w.id))]}),c.jsx("input",{placeholder:"Descrição",value:p.descricao,onChange:w=>h(y,"descricao",w.target.value),className:"rounded-xl border border-slate-200 bg-slate-50 px-3 py-3"}),c.jsx("input",{placeholder:"Tratamento",value:p.tratamento,onChange:w=>h(y,"tratamento",w.target.value),className:"rounded-xl border border-slate-200 bg-slate-50 px-3 py-3"}),c.jsx("input",{type:"number",min:"1",value:p.qtd,onChange:w=>h(y,"qtd",Number(w.target.value)),className:"rounded-xl border border-slate-200 bg-slate-50 px-3 py-3"}),c.jsx("input",{type:"number",step:"0.01",value:p.valor,onChange:w=>h(y,"valor",Number(w.target.value)),className:"rounded-xl border border-slate-200 bg-slate-50 px-3 py-3"})]},y))]}),c.jsx("textarea",{placeholder:"Observações da montagem ou laboratório",value:a.observacoes,onChange:p=>u({...a,observacoes:p.target.value}),className:"w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 min-h-24"}),c.jsxs("div",{className:"flex justify-end gap-3",children:[c.jsx("button",{type:"button",onClick:()=>l(!1),className:"px-5 py-3 rounded-xl bg-slate-100 font-bold",children:"Cancelar"}),c.jsx("button",{type:"submit",className:"px-5 py-3 rounded-xl bg-[#4A3AFF] text-white font-bold",children:"Salvar OS"})]})]})})]})}function cb(){const{activeTab:t,user:e,loadingAuth:n,setActiveTab:r,carrinho:s,userRole:i,dadosEmpresa:o}=It(),[l,a]=P.useState(!1),[u,d]=P.useState(!1);P.useEffect(()=>{const f=localStorage.getItem("otica_theme")==="dark";d(f),document.documentElement.classList.toggle("dark",f)},[]);const h=()=>{const f=!u;d(f),localStorage.setItem("otica_theme",f?"dark":"light"),document.documentElement.classList.toggle("dark",f)};return n?c.jsx("div",{className:"flex h-screen w-full items-center justify-center bg-slate-50 dark:bg-slate-900",children:c.jsx("p",{className:"text-slate-500 font-medium",children:"Iniciando VISTTA ERP..."})}):e?c.jsxs("div",{className:"flex h-screen w-full bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white overflow-hidden",children:[c.jsx(KI,{}),c.jsxs("div",{className:"flex-1 flex flex-col min-w-0 overflow-hidden relative pb-[70px] md:pb-0",children:[c.jsx("button",{onClick:h,className:"absolute top-4 right-4 z-40 w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 hover:text-[#4A3AFF] shadow-sm",title:"Alternar tema",children:u?c.jsx(BI,{size:18}):c.jsx(zI,{size:18})}),c.jsxs("main",{className:"flex-1 overflow-y-auto p-4 pt-16 sm:pt-10 sm:p-10 lg:p-12 relative z-10 custom-scrollbar h-full",children:[t==="dashboard"&&c.jsx(YI,{}),t==="vendas"&&c.jsx(XI,{}),t==="caixa"&&c.jsx(JI,{}),t==="estoque"&&c.jsx(eb,{}),t==="clientes"&&c.jsx(nb,{}),t==="orcamentos"&&c.jsx(rb,{}),t==="ordens"&&c.jsx(ab,{}),t==="financeiro"&&c.jsx(sb,{}),["fornecedores","contas","categorias","usuarios"].includes(t)&&c.jsx(ob,{activeTab:t})]}),c.jsxs("div",{className:"md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-800 border-t border-slate-100 dark:border-slate-700 flex items-center h-[70px] z-[55]",children:[c.jsx(Ms,{icon:vy,label:"Início",active:t==="dashboard",onClick:()=>r("dashboard")}),c.jsx(Ms,{icon:yy,label:"PDV",active:t==="vendas",onClick:()=>r("vendas"),badge:s.length}),c.jsx(Ms,{icon:kh,label:"Estoque",active:t==="estoque",onClick:()=>r("estoque")}),c.jsx(Ms,{icon:ya,label:"Clientes",active:t==="clientes",onClick:()=>r("clientes")}),c.jsx(Ms,{icon:UI,label:"Menu",active:l,onClick:()=>a(!l)})]}),l&&c.jsx("div",{className:"md:hidden fixed inset-0 z-[70] bg-slate-900/60",onClick:()=>a(!1),children:c.jsxs("div",{className:"absolute right-0 top-0 h-full w-[80%] max-w-[300px] bg-white dark:bg-slate-800 shadow-2xl p-5",onClick:f=>f.stopPropagation(),children:[c.jsxs("div",{className:"flex items-center justify-between mb-8",children:[c.jsx("span",{className:"font-bold truncate text-slate-900 dark:text-white",children:(o==null?void 0:o.nome)||"Minha Ótica"}),c.jsx("button",{onClick:()=>a(!1),className:"text-slate-400",children:"Fechar"})]}),c.jsx("div",{className:"space-y-2",children:[["caixa","Caixa Diário"],["orcamentos","Orçamentos"],["ordens","Ordens de Serviço"],["categorias","Categorias"],...i==="admin"?[["financeiro","Financeiro"],["contas","Contas"],["fornecedores","Fornecedores"],["usuarios","Usuários"]]:[]].map(([f,_])=>c.jsx("button",{onClick:()=>{r(f),a(!1)},className:"w-full text-left px-4 py-3 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-slate-700",children:_},f))})]})})]})]}):c.jsx(QI,{})}function Ms({icon:t,label:e,active:n,onClick:r,badge:s=0}){return c.jsxs("button",{onClick:r,className:`flex-1 h-full flex flex-col items-center justify-center gap-1 text-[10px] relative ${n?"text-[#4A3AFF] font-bold":"text-slate-400"}`,children:[c.jsx(t,{size:22}),s>0&&c.jsx("span",{className:"absolute top-1 right-3 bg-rose-500 text-white text-[10px] rounded-full px-1.5",children:s}),c.jsx("span",{children:e})]})}function ub(){return c.jsx(kI,{children:c.jsx(cb,{})})}fc.createRoot(document.getElementById("root")).render(c.jsx(oi.StrictMode,{children:c.jsx(ub,{})}));
