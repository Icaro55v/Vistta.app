(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function gy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Vp={exports:{}},Rl={},Wp={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ai=Symbol.for("react.element"),_y=Symbol.for("react.portal"),vy=Symbol.for("react.fragment"),yy=Symbol.for("react.strict_mode"),wy=Symbol.for("react.profiler"),xy=Symbol.for("react.provider"),Ey=Symbol.for("react.context"),Cy=Symbol.for("react.forward_ref"),Sy=Symbol.for("react.suspense"),ky=Symbol.for("react.memo"),Iy=Symbol.for("react.lazy"),xh=Symbol.iterator;function Ny(t){return t===null||typeof t!="object"?null:(t=xh&&t[xh]||t["@@iterator"],typeof t=="function"?t:null)}var Bp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$p=Object.assign,Hp={};function as(t,e,n){this.props=t,this.context=e,this.refs=Hp,this.updater=n||Bp}as.prototype.isReactComponent={};as.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};as.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function qp(){}qp.prototype=as.prototype;function Ec(t,e,n){this.props=t,this.context=e,this.refs=Hp,this.updater=n||Bp}var Cc=Ec.prototype=new qp;Cc.constructor=Ec;$p(Cc,as.prototype);Cc.isPureReactComponent=!0;var Eh=Array.isArray,Gp=Object.prototype.hasOwnProperty,Sc={current:null},Kp={key:!0,ref:!0,__self:!0,__source:!0};function Qp(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)Gp.call(e,r)&&!Kp.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];s.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:Ai,type:t,key:i,ref:o,props:s,_owner:Sc.current}}function Ty(t,e){return{$$typeof:Ai,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function kc(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ai}function by(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ch=/\/+/g;function va(t,e){return typeof t=="object"&&t!==null&&t.key!=null?by(""+t.key):e.toString(36)}function vo(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ai:case _y:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+va(o,0):r,Eh(s)?(n="",t!=null&&(n=t.replace(Ch,"$&/")+"/"),vo(s,e,n,"",function(u){return u})):s!=null&&(kc(s)&&(s=Ty(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Ch,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Eh(t))for(var l=0;l<t.length;l++){i=t[l];var a=r+va(i,l);o+=vo(i,e,n,a,s)}else if(a=Ny(t),typeof a=="function")for(t=a.call(t),l=0;!(i=t.next()).done;)i=i.value,a=r+va(i,l++),o+=vo(i,e,n,a,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Xi(t,e,n){if(t==null)return t;var r=[],s=0;return vo(t,r,"","",function(i){return e.call(n,i,s++)}),r}function Py(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ve={current:null},yo={transition:null},Ry={ReactCurrentDispatcher:Ve,ReactCurrentBatchConfig:yo,ReactCurrentOwner:Sc};function Yp(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:Xi,forEach:function(t,e,n){Xi(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Xi(t,function(){e++}),e},toArray:function(t){return Xi(t,function(e){return e})||[]},only:function(t){if(!kc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};z.Component=as;z.Fragment=vy;z.Profiler=wy;z.PureComponent=Ec;z.StrictMode=yy;z.Suspense=Sy;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ry;z.act=Yp;z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=$p({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Sc.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)Gp.call(e,a)&&!Kp.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Ai,type:t.type,key:s,ref:i,props:r,_owner:o}};z.createContext=function(t){return t={$$typeof:Ey,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:xy,_context:t},t.Consumer=t};z.createElement=Qp;z.createFactory=function(t){var e=Qp.bind(null,t);return e.type=t,e};z.createRef=function(){return{current:null}};z.forwardRef=function(t){return{$$typeof:Cy,render:t}};z.isValidElement=kc;z.lazy=function(t){return{$$typeof:Iy,_payload:{_status:-1,_result:t},_init:Py}};z.memo=function(t,e){return{$$typeof:ky,type:t,compare:e===void 0?null:e}};z.startTransition=function(t){var e=yo.transition;yo.transition={};try{t()}finally{yo.transition=e}};z.unstable_act=Yp;z.useCallback=function(t,e){return Ve.current.useCallback(t,e)};z.useContext=function(t){return Ve.current.useContext(t)};z.useDebugValue=function(){};z.useDeferredValue=function(t){return Ve.current.useDeferredValue(t)};z.useEffect=function(t,e){return Ve.current.useEffect(t,e)};z.useId=function(){return Ve.current.useId()};z.useImperativeHandle=function(t,e,n){return Ve.current.useImperativeHandle(t,e,n)};z.useInsertionEffect=function(t,e){return Ve.current.useInsertionEffect(t,e)};z.useLayoutEffect=function(t,e){return Ve.current.useLayoutEffect(t,e)};z.useMemo=function(t,e){return Ve.current.useMemo(t,e)};z.useReducer=function(t,e,n){return Ve.current.useReducer(t,e,n)};z.useRef=function(t){return Ve.current.useRef(t)};z.useState=function(t){return Ve.current.useState(t)};z.useSyncExternalStore=function(t,e,n){return Ve.current.useSyncExternalStore(t,e,n)};z.useTransition=function(){return Ve.current.useTransition()};z.version="18.3.1";Wp.exports=z;var R=Wp.exports;const ni=gy(R);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ay=R,Oy=Symbol.for("react.element"),Dy=Symbol.for("react.fragment"),Ly=Object.prototype.hasOwnProperty,My=Ay.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jy={key:!0,ref:!0,__self:!0,__source:!0};function Xp(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Ly.call(e,r)&&!jy.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:Oy,type:t,key:i,ref:o,props:s,_owner:My.current}}Rl.Fragment=Dy;Rl.jsx=Xp;Rl.jsxs=Xp;Vp.exports=Rl;var c=Vp.exports,iu={},Jp={exports:{}},tt={},Zp={exports:{}},em={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(S,D){var L=S.length;S.push(D);e:for(;0<L;){var ne=L-1>>>1,de=S[ne];if(0<s(de,D))S[ne]=D,S[L]=de,L=ne;else break e}}function n(S){return S.length===0?null:S[0]}function r(S){if(S.length===0)return null;var D=S[0],L=S.pop();if(L!==D){S[0]=L;e:for(var ne=0,de=S.length,Oe=de>>>1;ne<Oe;){var Nt=2*(ne+1)-1,Gn=S[Nt],dt=Nt+1,Mt=S[dt];if(0>s(Gn,L))dt<de&&0>s(Mt,Gn)?(S[ne]=Mt,S[dt]=L,ne=dt):(S[ne]=Gn,S[Nt]=L,ne=Nt);else if(dt<de&&0>s(Mt,L))S[ne]=Mt,S[dt]=L,ne=dt;else break e}}return D}function s(S,D){var L=S.sortIndex-D.sortIndex;return L!==0?L:S.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],d=1,h=null,f=3,_=!1,v=!1,y=!1,b=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(S){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=S)r(u),D.sortIndex=D.expirationTime,e(a,D);else break;D=n(u)}}function w(S){if(y=!1,p(S),!v)if(n(a)!==null)v=!0,ws(C);else{var D=n(u);D!==null&&sn(w,D.startTime-S)}}function C(S,D){v=!1,y&&(y=!1,g(T),T=-1),_=!0;var L=f;try{for(p(D),h=n(a);h!==null&&(!(h.expirationTime>D)||S&&!Qe());){var ne=h.callback;if(typeof ne=="function"){h.callback=null,f=h.priorityLevel;var de=ne(h.expirationTime<=D);D=t.unstable_now(),typeof de=="function"?h.callback=de:h===n(a)&&r(a),p(D)}else r(a);h=n(a)}if(h!==null)var Oe=!0;else{var Nt=n(u);Nt!==null&&sn(w,Nt.startTime-D),Oe=!1}return Oe}finally{h=null,f=L,_=!1}}var N=!1,I=null,T=-1,G=5,M=-1;function Qe(){return!(t.unstable_now()-M<G)}function Hn(){if(I!==null){var S=t.unstable_now();M=S;var D=!0;try{D=I(!0,S)}finally{D?qn():(N=!1,I=null)}}else N=!1}var qn;if(typeof m=="function")qn=function(){m(Hn)};else if(typeof MessageChannel<"u"){var Qi=new MessageChannel,pa=Qi.port2;Qi.port1.onmessage=Hn,qn=function(){pa.postMessage(null)}}else qn=function(){b(Hn,0)};function ws(S){I=S,N||(N=!0,qn())}function sn(S,D){T=b(function(){S(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(S){S.callback=null},t.unstable_continueExecution=function(){v||_||(v=!0,ws(C))},t.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<S?Math.floor(1e3/S):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(S){switch(f){case 1:case 2:case 3:var D=3;break;default:D=f}var L=f;f=D;try{return S()}finally{f=L}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(S,D){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var L=f;f=S;try{return D()}finally{f=L}},t.unstable_scheduleCallback=function(S,D,L){var ne=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?ne+L:ne):L=ne,S){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=L+de,S={id:d++,callback:D,priorityLevel:S,startTime:L,expirationTime:de,sortIndex:-1},L>ne?(S.sortIndex=L,e(u,S),n(a)===null&&S===n(u)&&(y?(g(T),T=-1):y=!0,sn(w,L-ne))):(S.sortIndex=de,e(a,S),v||_||(v=!0,ws(C))),S},t.unstable_shouldYield=Qe,t.unstable_wrapCallback=function(S){var D=f;return function(){var L=f;f=D;try{return S.apply(this,arguments)}finally{f=L}}}})(em);Zp.exports=em;var Fy=Zp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uy=R,Ze=Fy;function x(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tm=new Set,ri={};function yr(t,e){Qr(t,e),Qr(t+"Capture",e)}function Qr(t,e){for(ri[t]=e,t=0;t<e.length;t++)tm.add(e[t])}var Yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ou=Object.prototype.hasOwnProperty,zy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Sh={},kh={};function Vy(t){return ou.call(kh,t)?!0:ou.call(Sh,t)?!1:zy.test(t)?kh[t]=!0:(Sh[t]=!0,!1)}function Wy(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function By(t,e,n,r){if(e===null||typeof e>"u"||Wy(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function We(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var Ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ie[t]=new We(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ie[e]=new We(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ie[t]=new We(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ie[t]=new We(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ie[t]=new We(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ie[t]=new We(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ie[t]=new We(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ie[t]=new We(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ie[t]=new We(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ic=/[\-:]([a-z])/g;function Nc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ic,Nc);Ie[e]=new We(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ic,Nc);Ie[e]=new We(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ic,Nc);Ie[e]=new We(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ie[t]=new We(t,1,!1,t.toLowerCase(),null,!1,!1)});Ie.xlinkHref=new We("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ie[t]=new We(t,1,!1,t.toLowerCase(),null,!0,!0)});function Tc(t,e,n,r){var s=Ie.hasOwnProperty(e)?Ie[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(By(e,n,s,r)&&(n=null),r||s===null?Vy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var rn=Uy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ji=Symbol.for("react.element"),Ir=Symbol.for("react.portal"),Nr=Symbol.for("react.fragment"),bc=Symbol.for("react.strict_mode"),lu=Symbol.for("react.profiler"),nm=Symbol.for("react.provider"),rm=Symbol.for("react.context"),Pc=Symbol.for("react.forward_ref"),au=Symbol.for("react.suspense"),uu=Symbol.for("react.suspense_list"),Rc=Symbol.for("react.memo"),an=Symbol.for("react.lazy"),sm=Symbol.for("react.offscreen"),Ih=Symbol.iterator;function Es(t){return t===null||typeof t!="object"?null:(t=Ih&&t[Ih]||t["@@iterator"],typeof t=="function"?t:null)}var le=Object.assign,ya;function Ds(t){if(ya===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ya=e&&e[1]||""}return`
`+ya+t}var wa=!1;function xa(t,e){if(!t||wa)return"";wa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var s=u.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var a=`
`+s[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{wa=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ds(t):""}function $y(t){switch(t.tag){case 5:return Ds(t.type);case 16:return Ds("Lazy");case 13:return Ds("Suspense");case 19:return Ds("SuspenseList");case 0:case 2:case 15:return t=xa(t.type,!1),t;case 11:return t=xa(t.type.render,!1),t;case 1:return t=xa(t.type,!0),t;default:return""}}function cu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Nr:return"Fragment";case Ir:return"Portal";case lu:return"Profiler";case bc:return"StrictMode";case au:return"Suspense";case uu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case rm:return(t.displayName||"Context")+".Consumer";case nm:return(t._context.displayName||"Context")+".Provider";case Pc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Rc:return e=t.displayName||null,e!==null?e:cu(t.type)||"Memo";case an:e=t._payload,t=t._init;try{return cu(t(e))}catch{}}return null}function Hy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return cu(e);case 8:return e===bc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function An(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function im(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function qy(t){var e=im(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Zi(t){t._valueTracker||(t._valueTracker=qy(t))}function om(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=im(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Mo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function du(t,e){var n=e.checked;return le({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Nh(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=An(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function lm(t,e){e=e.checked,e!=null&&Tc(t,"checked",e,!1)}function hu(t,e){lm(t,e);var n=An(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?fu(t,e.type,n):e.hasOwnProperty("defaultValue")&&fu(t,e.type,An(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Th(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function fu(t,e,n){(e!=="number"||Mo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ls=Array.isArray;function Ur(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+An(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function pu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(x(91));return le({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function bh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(x(92));if(Ls(n)){if(1<n.length)throw Error(x(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:An(n)}}function am(t,e){var n=An(e.value),r=An(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ph(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function um(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?um(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var eo,cm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(eo=eo||document.createElement("div"),eo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=eo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function si(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var zs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gy=["Webkit","ms","Moz","O"];Object.keys(zs).forEach(function(t){Gy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),zs[e]=zs[t]})});function dm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||zs.hasOwnProperty(t)&&zs[t]?(""+e).trim():e+"px"}function hm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=dm(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var Ky=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gu(t,e){if(e){if(Ky[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(x(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(x(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(x(61))}if(e.style!=null&&typeof e.style!="object")throw Error(x(62))}}function _u(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vu=null;function Ac(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var yu=null,zr=null,Vr=null;function Rh(t){if(t=Li(t)){if(typeof yu!="function")throw Error(x(280));var e=t.stateNode;e&&(e=Ml(e),yu(t.stateNode,t.type,e))}}function fm(t){zr?Vr?Vr.push(t):Vr=[t]:zr=t}function pm(){if(zr){var t=zr,e=Vr;if(Vr=zr=null,Rh(t),e)for(t=0;t<e.length;t++)Rh(e[t])}}function mm(t,e){return t(e)}function gm(){}var Ea=!1;function _m(t,e,n){if(Ea)return t(e,n);Ea=!0;try{return mm(t,e,n)}finally{Ea=!1,(zr!==null||Vr!==null)&&(gm(),pm())}}function ii(t,e){var n=t.stateNode;if(n===null)return null;var r=Ml(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(x(231,e,typeof n));return n}var wu=!1;if(Yt)try{var Cs={};Object.defineProperty(Cs,"passive",{get:function(){wu=!0}}),window.addEventListener("test",Cs,Cs),window.removeEventListener("test",Cs,Cs)}catch{wu=!1}function Qy(t,e,n,r,s,i,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Vs=!1,jo=null,Fo=!1,xu=null,Yy={onError:function(t){Vs=!0,jo=t}};function Xy(t,e,n,r,s,i,o,l,a){Vs=!1,jo=null,Qy.apply(Yy,arguments)}function Jy(t,e,n,r,s,i,o,l,a){if(Xy.apply(this,arguments),Vs){if(Vs){var u=jo;Vs=!1,jo=null}else throw Error(x(198));Fo||(Fo=!0,xu=u)}}function wr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function vm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ah(t){if(wr(t)!==t)throw Error(x(188))}function Zy(t){var e=t.alternate;if(!e){if(e=wr(t),e===null)throw Error(x(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Ah(s),t;if(i===r)return Ah(s),e;i=i.sibling}throw Error(x(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?t:e}function ym(t){return t=Zy(t),t!==null?wm(t):null}function wm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=wm(t);if(e!==null)return e;t=t.sibling}return null}var xm=Ze.unstable_scheduleCallback,Oh=Ze.unstable_cancelCallback,e0=Ze.unstable_shouldYield,t0=Ze.unstable_requestPaint,fe=Ze.unstable_now,n0=Ze.unstable_getCurrentPriorityLevel,Oc=Ze.unstable_ImmediatePriority,Em=Ze.unstable_UserBlockingPriority,Uo=Ze.unstable_NormalPriority,r0=Ze.unstable_LowPriority,Cm=Ze.unstable_IdlePriority,Al=null,Rt=null;function s0(t){if(Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(Al,t,void 0,(t.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:l0,i0=Math.log,o0=Math.LN2;function l0(t){return t>>>=0,t===0?32:31-(i0(t)/o0|0)|0}var to=64,no=4194304;function Ms(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function zo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=Ms(l):(i&=o,i!==0&&(r=Ms(i)))}else o=n&~s,o!==0?r=Ms(o):i!==0&&(r=Ms(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-xt(e),s=1<<n,r|=t[n],e&=~s;return r}function a0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function u0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-xt(i),l=1<<o,a=s[o];a===-1?(!(l&n)||l&r)&&(s[o]=a0(l,e)):a<=e&&(t.expiredLanes|=l),i&=~l}}function Eu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Sm(){var t=to;return to<<=1,!(to&4194240)&&(to=64),t}function Ca(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Oi(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-xt(e),t[e]=n}function c0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-xt(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Dc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-xt(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var $=0;function km(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Im,Lc,Nm,Tm,bm,Cu=!1,ro=[],yn=null,wn=null,xn=null,oi=new Map,li=new Map,cn=[],d0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dh(t,e){switch(t){case"focusin":case"focusout":yn=null;break;case"dragenter":case"dragleave":wn=null;break;case"mouseover":case"mouseout":xn=null;break;case"pointerover":case"pointerout":oi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":li.delete(e.pointerId)}}function Ss(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Li(e),e!==null&&Lc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function h0(t,e,n,r,s){switch(e){case"focusin":return yn=Ss(yn,t,e,n,r,s),!0;case"dragenter":return wn=Ss(wn,t,e,n,r,s),!0;case"mouseover":return xn=Ss(xn,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return oi.set(i,Ss(oi.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,li.set(i,Ss(li.get(i)||null,t,e,n,r,s)),!0}return!1}function Pm(t){var e=Jn(t.target);if(e!==null){var n=wr(e);if(n!==null){if(e=n.tag,e===13){if(e=vm(n),e!==null){t.blockedOn=e,bm(t.priority,function(){Nm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function wo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Su(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);vu=r,n.target.dispatchEvent(r),vu=null}else return e=Li(n),e!==null&&Lc(e),t.blockedOn=n,!1;e.shift()}return!0}function Lh(t,e,n){wo(t)&&n.delete(e)}function f0(){Cu=!1,yn!==null&&wo(yn)&&(yn=null),wn!==null&&wo(wn)&&(wn=null),xn!==null&&wo(xn)&&(xn=null),oi.forEach(Lh),li.forEach(Lh)}function ks(t,e){t.blockedOn===e&&(t.blockedOn=null,Cu||(Cu=!0,Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority,f0)))}function ai(t){function e(s){return ks(s,t)}if(0<ro.length){ks(ro[0],t);for(var n=1;n<ro.length;n++){var r=ro[n];r.blockedOn===t&&(r.blockedOn=null)}}for(yn!==null&&ks(yn,t),wn!==null&&ks(wn,t),xn!==null&&ks(xn,t),oi.forEach(e),li.forEach(e),n=0;n<cn.length;n++)r=cn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<cn.length&&(n=cn[0],n.blockedOn===null);)Pm(n),n.blockedOn===null&&cn.shift()}var Wr=rn.ReactCurrentBatchConfig,Vo=!0;function p0(t,e,n,r){var s=$,i=Wr.transition;Wr.transition=null;try{$=1,Mc(t,e,n,r)}finally{$=s,Wr.transition=i}}function m0(t,e,n,r){var s=$,i=Wr.transition;Wr.transition=null;try{$=4,Mc(t,e,n,r)}finally{$=s,Wr.transition=i}}function Mc(t,e,n,r){if(Vo){var s=Su(t,e,n,r);if(s===null)Oa(t,e,r,Wo,n),Dh(t,r);else if(h0(s,t,e,n,r))r.stopPropagation();else if(Dh(t,r),e&4&&-1<d0.indexOf(t)){for(;s!==null;){var i=Li(s);if(i!==null&&Im(i),i=Su(t,e,n,r),i===null&&Oa(t,e,r,Wo,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Oa(t,e,r,null,n)}}var Wo=null;function Su(t,e,n,r){if(Wo=null,t=Ac(r),t=Jn(t),t!==null)if(e=wr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=vm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Wo=t,null}function Rm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(n0()){case Oc:return 1;case Em:return 4;case Uo:case r0:return 16;case Cm:return 536870912;default:return 16}default:return 16}}var mn=null,jc=null,xo=null;function Am(){if(xo)return xo;var t,e=jc,n=e.length,r,s="value"in mn?mn.value:mn.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return xo=s.slice(t,1<r?1-r:void 0)}function Eo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function so(){return!0}function Mh(){return!1}function nt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?so:Mh,this.isPropagationStopped=Mh,this}return le(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=so)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=so)},persist:function(){},isPersistent:so}),e}var us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fc=nt(us),Di=le({},us,{view:0,detail:0}),g0=nt(Di),Sa,ka,Is,Ol=le({},Di,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Is&&(Is&&t.type==="mousemove"?(Sa=t.screenX-Is.screenX,ka=t.screenY-Is.screenY):ka=Sa=0,Is=t),Sa)},movementY:function(t){return"movementY"in t?t.movementY:ka}}),jh=nt(Ol),_0=le({},Ol,{dataTransfer:0}),v0=nt(_0),y0=le({},Di,{relatedTarget:0}),Ia=nt(y0),w0=le({},us,{animationName:0,elapsedTime:0,pseudoElement:0}),x0=nt(w0),E0=le({},us,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),C0=nt(E0),S0=le({},us,{data:0}),Fh=nt(S0),k0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},I0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},N0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function T0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=N0[t])?!!e[t]:!1}function Uc(){return T0}var b0=le({},Di,{key:function(t){if(t.key){var e=k0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Eo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?I0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uc,charCode:function(t){return t.type==="keypress"?Eo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Eo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),P0=nt(b0),R0=le({},Ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uh=nt(R0),A0=le({},Di,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uc}),O0=nt(A0),D0=le({},us,{propertyName:0,elapsedTime:0,pseudoElement:0}),L0=nt(D0),M0=le({},Ol,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),j0=nt(M0),F0=[9,13,27,32],zc=Yt&&"CompositionEvent"in window,Ws=null;Yt&&"documentMode"in document&&(Ws=document.documentMode);var U0=Yt&&"TextEvent"in window&&!Ws,Om=Yt&&(!zc||Ws&&8<Ws&&11>=Ws),zh=" ",Vh=!1;function Dm(t,e){switch(t){case"keyup":return F0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Tr=!1;function z0(t,e){switch(t){case"compositionend":return Lm(e);case"keypress":return e.which!==32?null:(Vh=!0,zh);case"textInput":return t=e.data,t===zh&&Vh?null:t;default:return null}}function V0(t,e){if(Tr)return t==="compositionend"||!zc&&Dm(t,e)?(t=Am(),xo=jc=mn=null,Tr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Om&&e.locale!=="ko"?null:e.data;default:return null}}var W0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!W0[t.type]:e==="textarea"}function Mm(t,e,n,r){fm(r),e=Bo(e,"onChange"),0<e.length&&(n=new Fc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Bs=null,ui=null;function B0(t){Gm(t,0)}function Dl(t){var e=Rr(t);if(om(e))return t}function $0(t,e){if(t==="change")return e}var jm=!1;if(Yt){var Na;if(Yt){var Ta="oninput"in document;if(!Ta){var Bh=document.createElement("div");Bh.setAttribute("oninput","return;"),Ta=typeof Bh.oninput=="function"}Na=Ta}else Na=!1;jm=Na&&(!document.documentMode||9<document.documentMode)}function $h(){Bs&&(Bs.detachEvent("onpropertychange",Fm),ui=Bs=null)}function Fm(t){if(t.propertyName==="value"&&Dl(ui)){var e=[];Mm(e,ui,t,Ac(t)),_m(B0,e)}}function H0(t,e,n){t==="focusin"?($h(),Bs=e,ui=n,Bs.attachEvent("onpropertychange",Fm)):t==="focusout"&&$h()}function q0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Dl(ui)}function G0(t,e){if(t==="click")return Dl(e)}function K0(t,e){if(t==="input"||t==="change")return Dl(e)}function Q0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var kt=typeof Object.is=="function"?Object.is:Q0;function ci(t,e){if(kt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!ou.call(e,s)||!kt(t[s],e[s]))return!1}return!0}function Hh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function qh(t,e){var n=Hh(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hh(n)}}function Um(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Um(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function zm(){for(var t=window,e=Mo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Mo(t.document)}return e}function Vc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Y0(t){var e=zm(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Um(n.ownerDocument.documentElement,n)){if(r!==null&&Vc(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=qh(n,i);var o=qh(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var X0=Yt&&"documentMode"in document&&11>=document.documentMode,br=null,ku=null,$s=null,Iu=!1;function Gh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Iu||br==null||br!==Mo(r)||(r=br,"selectionStart"in r&&Vc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$s&&ci($s,r)||($s=r,r=Bo(ku,"onSelect"),0<r.length&&(e=new Fc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=br)))}function io(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Pr={animationend:io("Animation","AnimationEnd"),animationiteration:io("Animation","AnimationIteration"),animationstart:io("Animation","AnimationStart"),transitionend:io("Transition","TransitionEnd")},ba={},Vm={};Yt&&(Vm=document.createElement("div").style,"AnimationEvent"in window||(delete Pr.animationend.animation,delete Pr.animationiteration.animation,delete Pr.animationstart.animation),"TransitionEvent"in window||delete Pr.transitionend.transition);function Ll(t){if(ba[t])return ba[t];if(!Pr[t])return t;var e=Pr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Vm)return ba[t]=e[n];return t}var Wm=Ll("animationend"),Bm=Ll("animationiteration"),$m=Ll("animationstart"),Hm=Ll("transitionend"),qm=new Map,Kh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fn(t,e){qm.set(t,e),yr(e,[t])}for(var Pa=0;Pa<Kh.length;Pa++){var Ra=Kh[Pa],J0=Ra.toLowerCase(),Z0=Ra[0].toUpperCase()+Ra.slice(1);Fn(J0,"on"+Z0)}Fn(Wm,"onAnimationEnd");Fn(Bm,"onAnimationIteration");Fn($m,"onAnimationStart");Fn("dblclick","onDoubleClick");Fn("focusin","onFocus");Fn("focusout","onBlur");Fn(Hm,"onTransitionEnd");Qr("onMouseEnter",["mouseout","mouseover"]);Qr("onMouseLeave",["mouseout","mouseover"]);Qr("onPointerEnter",["pointerout","pointerover"]);Qr("onPointerLeave",["pointerout","pointerover"]);yr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));yr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));yr("onBeforeInput",["compositionend","keypress","textInput","paste"]);yr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));yr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));yr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var js="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ew=new Set("cancel close invalid load scroll toggle".split(" ").concat(js));function Qh(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Jy(r,e,void 0,t),t.currentTarget=null}function Gm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==i&&s.isPropagationStopped())break e;Qh(s,l,u),i=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==i&&s.isPropagationStopped())break e;Qh(s,l,u),i=a}}}if(Fo)throw t=xu,Fo=!1,xu=null,t}function Z(t,e){var n=e[Ru];n===void 0&&(n=e[Ru]=new Set);var r=t+"__bubble";n.has(r)||(Km(e,t,2,!1),n.add(r))}function Aa(t,e,n){var r=0;e&&(r|=4),Km(n,t,r,e)}var oo="_reactListening"+Math.random().toString(36).slice(2);function di(t){if(!t[oo]){t[oo]=!0,tm.forEach(function(n){n!=="selectionchange"&&(ew.has(n)||Aa(n,!1,t),Aa(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[oo]||(e[oo]=!0,Aa("selectionchange",!1,e))}}function Km(t,e,n,r){switch(Rm(e)){case 1:var s=p0;break;case 4:s=m0;break;default:s=Mc}n=s.bind(null,e,n,t),s=void 0,!wu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Oa(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===s||a.nodeType===8&&a.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Jn(l),o===null)return;if(a=o.tag,a===5||a===6){r=i=o;continue e}l=l.parentNode}}r=r.return}_m(function(){var u=i,d=Ac(n),h=[];e:{var f=qm.get(t);if(f!==void 0){var _=Fc,v=t;switch(t){case"keypress":if(Eo(n)===0)break e;case"keydown":case"keyup":_=P0;break;case"focusin":v="focus",_=Ia;break;case"focusout":v="blur",_=Ia;break;case"beforeblur":case"afterblur":_=Ia;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=jh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=v0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=O0;break;case Wm:case Bm:case $m:_=x0;break;case Hm:_=L0;break;case"scroll":_=g0;break;case"wheel":_=j0;break;case"copy":case"cut":case"paste":_=C0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Uh}var y=(e&4)!==0,b=!y&&t==="scroll",g=y?f!==null?f+"Capture":null:f;y=[];for(var m=u,p;m!==null;){p=m;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,g!==null&&(w=ii(m,g),w!=null&&y.push(hi(m,w,p)))),b)break;m=m.return}0<y.length&&(f=new _(f,v,null,n,d),h.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",f&&n!==vu&&(v=n.relatedTarget||n.fromElement)&&(Jn(v)||v[Xt]))break e;if((_||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,_?(v=n.relatedTarget||n.toElement,_=u,v=v?Jn(v):null,v!==null&&(b=wr(v),v!==b||v.tag!==5&&v.tag!==6)&&(v=null)):(_=null,v=u),_!==v)){if(y=jh,w="onMouseLeave",g="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(y=Uh,w="onPointerLeave",g="onPointerEnter",m="pointer"),b=_==null?f:Rr(_),p=v==null?f:Rr(v),f=new y(w,m+"leave",_,n,d),f.target=b,f.relatedTarget=p,w=null,Jn(d)===u&&(y=new y(g,m+"enter",v,n,d),y.target=p,y.relatedTarget=b,w=y),b=w,_&&v)t:{for(y=_,g=v,m=0,p=y;p;p=Sr(p))m++;for(p=0,w=g;w;w=Sr(w))p++;for(;0<m-p;)y=Sr(y),m--;for(;0<p-m;)g=Sr(g),p--;for(;m--;){if(y===g||g!==null&&y===g.alternate)break t;y=Sr(y),g=Sr(g)}y=null}else y=null;_!==null&&Yh(h,f,_,y,!1),v!==null&&b!==null&&Yh(h,b,v,y,!0)}}e:{if(f=u?Rr(u):window,_=f.nodeName&&f.nodeName.toLowerCase(),_==="select"||_==="input"&&f.type==="file")var C=$0;else if(Wh(f))if(jm)C=K0;else{C=q0;var N=H0}else(_=f.nodeName)&&_.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=G0);if(C&&(C=C(t,u))){Mm(h,C,n,d);break e}N&&N(t,f,u),t==="focusout"&&(N=f._wrapperState)&&N.controlled&&f.type==="number"&&fu(f,"number",f.value)}switch(N=u?Rr(u):window,t){case"focusin":(Wh(N)||N.contentEditable==="true")&&(br=N,ku=u,$s=null);break;case"focusout":$s=ku=br=null;break;case"mousedown":Iu=!0;break;case"contextmenu":case"mouseup":case"dragend":Iu=!1,Gh(h,n,d);break;case"selectionchange":if(X0)break;case"keydown":case"keyup":Gh(h,n,d)}var I;if(zc)e:{switch(t){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Tr?Dm(t,n)&&(T="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Om&&n.locale!=="ko"&&(Tr||T!=="onCompositionStart"?T==="onCompositionEnd"&&Tr&&(I=Am()):(mn=d,jc="value"in mn?mn.value:mn.textContent,Tr=!0)),N=Bo(u,T),0<N.length&&(T=new Fh(T,t,null,n,d),h.push({event:T,listeners:N}),I?T.data=I:(I=Lm(n),I!==null&&(T.data=I)))),(I=U0?z0(t,n):V0(t,n))&&(u=Bo(u,"onBeforeInput"),0<u.length&&(d=new Fh("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:u}),d.data=I))}Gm(h,e)})}function hi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Bo(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=ii(t,n),i!=null&&r.unshift(hi(t,i,s)),i=ii(t,e),i!=null&&r.push(hi(t,i,s))),t=t.return}return r}function Sr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Yh(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,s?(a=ii(n,i),a!=null&&o.unshift(hi(n,a,l))):s||(a=ii(n,i),a!=null&&o.push(hi(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var tw=/\r\n?/g,nw=/\u0000|\uFFFD/g;function Xh(t){return(typeof t=="string"?t:""+t).replace(tw,`
`).replace(nw,"")}function lo(t,e,n){if(e=Xh(e),Xh(t)!==e&&n)throw Error(x(425))}function $o(){}var Nu=null,Tu=null;function bu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Pu=typeof setTimeout=="function"?setTimeout:void 0,rw=typeof clearTimeout=="function"?clearTimeout:void 0,Jh=typeof Promise=="function"?Promise:void 0,sw=typeof queueMicrotask=="function"?queueMicrotask:typeof Jh<"u"?function(t){return Jh.resolve(null).then(t).catch(iw)}:Pu;function iw(t){setTimeout(function(){throw t})}function Da(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),ai(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);ai(e)}function En(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Zh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var cs=Math.random().toString(36).slice(2),Pt="__reactFiber$"+cs,fi="__reactProps$"+cs,Xt="__reactContainer$"+cs,Ru="__reactEvents$"+cs,ow="__reactListeners$"+cs,lw="__reactHandles$"+cs;function Jn(t){var e=t[Pt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Xt]||n[Pt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Zh(t);t!==null;){if(n=t[Pt])return n;t=Zh(t)}return e}t=n,n=t.parentNode}return null}function Li(t){return t=t[Pt]||t[Xt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Rr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(x(33))}function Ml(t){return t[fi]||null}var Au=[],Ar=-1;function Un(t){return{current:t}}function ee(t){0>Ar||(t.current=Au[Ar],Au[Ar]=null,Ar--)}function J(t,e){Ar++,Au[Ar]=t.current,t.current=e}var On={},Ae=Un(On),qe=Un(!1),lr=On;function Yr(t,e){var n=t.type.contextTypes;if(!n)return On;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Ge(t){return t=t.childContextTypes,t!=null}function Ho(){ee(qe),ee(Ae)}function ef(t,e,n){if(Ae.current!==On)throw Error(x(168));J(Ae,e),J(qe,n)}function Qm(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(x(108,Hy(t)||"Unknown",s));return le({},n,r)}function qo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||On,lr=Ae.current,J(Ae,t),J(qe,qe.current),!0}function tf(t,e,n){var r=t.stateNode;if(!r)throw Error(x(169));n?(t=Qm(t,e,lr),r.__reactInternalMemoizedMergedChildContext=t,ee(qe),ee(Ae),J(Ae,t)):ee(qe),J(qe,n)}var Ut=null,jl=!1,La=!1;function Ym(t){Ut===null?Ut=[t]:Ut.push(t)}function aw(t){jl=!0,Ym(t)}function zn(){if(!La&&Ut!==null){La=!0;var t=0,e=$;try{var n=Ut;for($=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ut=null,jl=!1}catch(s){throw Ut!==null&&(Ut=Ut.slice(t+1)),xm(Oc,zn),s}finally{$=e,La=!1}}return null}var Or=[],Dr=0,Go=null,Ko=0,rt=[],st=0,ar=null,Vt=1,Wt="";function Kn(t,e){Or[Dr++]=Ko,Or[Dr++]=Go,Go=t,Ko=e}function Xm(t,e,n){rt[st++]=Vt,rt[st++]=Wt,rt[st++]=ar,ar=t;var r=Vt;t=Wt;var s=32-xt(r)-1;r&=~(1<<s),n+=1;var i=32-xt(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Vt=1<<32-xt(e)+s|n<<s|r,Wt=i+t}else Vt=1<<i|n<<s|r,Wt=t}function Wc(t){t.return!==null&&(Kn(t,1),Xm(t,1,0))}function Bc(t){for(;t===Go;)Go=Or[--Dr],Or[Dr]=null,Ko=Or[--Dr],Or[Dr]=null;for(;t===ar;)ar=rt[--st],rt[st]=null,Wt=rt[--st],rt[st]=null,Vt=rt[--st],rt[st]=null}var Je=null,Xe=null,re=!1,_t=null;function Jm(t,e){var n=it(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function nf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Je=t,Xe=En(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Je=t,Xe=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ar!==null?{id:Vt,overflow:Wt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=it(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Je=t,Xe=null,!0):!1;default:return!1}}function Ou(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Du(t){if(re){var e=Xe;if(e){var n=e;if(!nf(t,e)){if(Ou(t))throw Error(x(418));e=En(n.nextSibling);var r=Je;e&&nf(t,e)?Jm(r,n):(t.flags=t.flags&-4097|2,re=!1,Je=t)}}else{if(Ou(t))throw Error(x(418));t.flags=t.flags&-4097|2,re=!1,Je=t}}}function rf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Je=t}function ao(t){if(t!==Je)return!1;if(!re)return rf(t),re=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!bu(t.type,t.memoizedProps)),e&&(e=Xe)){if(Ou(t))throw Zm(),Error(x(418));for(;e;)Jm(t,e),e=En(e.nextSibling)}if(rf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(x(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Xe=En(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Xe=null}}else Xe=Je?En(t.stateNode.nextSibling):null;return!0}function Zm(){for(var t=Xe;t;)t=En(t.nextSibling)}function Xr(){Xe=Je=null,re=!1}function $c(t){_t===null?_t=[t]:_t.push(t)}var uw=rn.ReactCurrentBatchConfig;function Ns(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,t))}return t}function uo(t,e){throw t=Object.prototype.toString.call(e),Error(x(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function sf(t){var e=t._init;return e(t._payload)}function eg(t){function e(g,m){if(t){var p=g.deletions;p===null?(g.deletions=[m],g.flags|=16):p.push(m)}}function n(g,m){if(!t)return null;for(;m!==null;)e(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function s(g,m){return g=In(g,m),g.index=0,g.sibling=null,g}function i(g,m,p){return g.index=p,t?(p=g.alternate,p!==null?(p=p.index,p<m?(g.flags|=2,m):p):(g.flags|=2,m)):(g.flags|=1048576,m)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function l(g,m,p,w){return m===null||m.tag!==6?(m=Wa(p,g.mode,w),m.return=g,m):(m=s(m,p),m.return=g,m)}function a(g,m,p,w){var C=p.type;return C===Nr?d(g,m,p.props.children,w,p.key):m!==null&&(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===an&&sf(C)===m.type)?(w=s(m,p.props),w.ref=Ns(g,m,p),w.return=g,w):(w=bo(p.type,p.key,p.props,null,g.mode,w),w.ref=Ns(g,m,p),w.return=g,w)}function u(g,m,p,w){return m===null||m.tag!==4||m.stateNode.containerInfo!==p.containerInfo||m.stateNode.implementation!==p.implementation?(m=Ba(p,g.mode,w),m.return=g,m):(m=s(m,p.children||[]),m.return=g,m)}function d(g,m,p,w,C){return m===null||m.tag!==7?(m=ir(p,g.mode,w,C),m.return=g,m):(m=s(m,p),m.return=g,m)}function h(g,m,p){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Wa(""+m,g.mode,p),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ji:return p=bo(m.type,m.key,m.props,null,g.mode,p),p.ref=Ns(g,null,m),p.return=g,p;case Ir:return m=Ba(m,g.mode,p),m.return=g,m;case an:var w=m._init;return h(g,w(m._payload),p)}if(Ls(m)||Es(m))return m=ir(m,g.mode,p,null),m.return=g,m;uo(g,m)}return null}function f(g,m,p,w){var C=m!==null?m.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return C!==null?null:l(g,m,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ji:return p.key===C?a(g,m,p,w):null;case Ir:return p.key===C?u(g,m,p,w):null;case an:return C=p._init,f(g,m,C(p._payload),w)}if(Ls(p)||Es(p))return C!==null?null:d(g,m,p,w,null);uo(g,p)}return null}function _(g,m,p,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(p)||null,l(m,g,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ji:return g=g.get(w.key===null?p:w.key)||null,a(m,g,w,C);case Ir:return g=g.get(w.key===null?p:w.key)||null,u(m,g,w,C);case an:var N=w._init;return _(g,m,p,N(w._payload),C)}if(Ls(w)||Es(w))return g=g.get(p)||null,d(m,g,w,C,null);uo(m,w)}return null}function v(g,m,p,w){for(var C=null,N=null,I=m,T=m=0,G=null;I!==null&&T<p.length;T++){I.index>T?(G=I,I=null):G=I.sibling;var M=f(g,I,p[T],w);if(M===null){I===null&&(I=G);break}t&&I&&M.alternate===null&&e(g,I),m=i(M,m,T),N===null?C=M:N.sibling=M,N=M,I=G}if(T===p.length)return n(g,I),re&&Kn(g,T),C;if(I===null){for(;T<p.length;T++)I=h(g,p[T],w),I!==null&&(m=i(I,m,T),N===null?C=I:N.sibling=I,N=I);return re&&Kn(g,T),C}for(I=r(g,I);T<p.length;T++)G=_(I,g,T,p[T],w),G!==null&&(t&&G.alternate!==null&&I.delete(G.key===null?T:G.key),m=i(G,m,T),N===null?C=G:N.sibling=G,N=G);return t&&I.forEach(function(Qe){return e(g,Qe)}),re&&Kn(g,T),C}function y(g,m,p,w){var C=Es(p);if(typeof C!="function")throw Error(x(150));if(p=C.call(p),p==null)throw Error(x(151));for(var N=C=null,I=m,T=m=0,G=null,M=p.next();I!==null&&!M.done;T++,M=p.next()){I.index>T?(G=I,I=null):G=I.sibling;var Qe=f(g,I,M.value,w);if(Qe===null){I===null&&(I=G);break}t&&I&&Qe.alternate===null&&e(g,I),m=i(Qe,m,T),N===null?C=Qe:N.sibling=Qe,N=Qe,I=G}if(M.done)return n(g,I),re&&Kn(g,T),C;if(I===null){for(;!M.done;T++,M=p.next())M=h(g,M.value,w),M!==null&&(m=i(M,m,T),N===null?C=M:N.sibling=M,N=M);return re&&Kn(g,T),C}for(I=r(g,I);!M.done;T++,M=p.next())M=_(I,g,T,M.value,w),M!==null&&(t&&M.alternate!==null&&I.delete(M.key===null?T:M.key),m=i(M,m,T),N===null?C=M:N.sibling=M,N=M);return t&&I.forEach(function(Hn){return e(g,Hn)}),re&&Kn(g,T),C}function b(g,m,p,w){if(typeof p=="object"&&p!==null&&p.type===Nr&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Ji:e:{for(var C=p.key,N=m;N!==null;){if(N.key===C){if(C=p.type,C===Nr){if(N.tag===7){n(g,N.sibling),m=s(N,p.props.children),m.return=g,g=m;break e}}else if(N.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===an&&sf(C)===N.type){n(g,N.sibling),m=s(N,p.props),m.ref=Ns(g,N,p),m.return=g,g=m;break e}n(g,N);break}else e(g,N);N=N.sibling}p.type===Nr?(m=ir(p.props.children,g.mode,w,p.key),m.return=g,g=m):(w=bo(p.type,p.key,p.props,null,g.mode,w),w.ref=Ns(g,m,p),w.return=g,g=w)}return o(g);case Ir:e:{for(N=p.key;m!==null;){if(m.key===N)if(m.tag===4&&m.stateNode.containerInfo===p.containerInfo&&m.stateNode.implementation===p.implementation){n(g,m.sibling),m=s(m,p.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else e(g,m);m=m.sibling}m=Ba(p,g.mode,w),m.return=g,g=m}return o(g);case an:return N=p._init,b(g,m,N(p._payload),w)}if(Ls(p))return v(g,m,p,w);if(Es(p))return y(g,m,p,w);uo(g,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,m!==null&&m.tag===6?(n(g,m.sibling),m=s(m,p),m.return=g,g=m):(n(g,m),m=Wa(p,g.mode,w),m.return=g,g=m),o(g)):n(g,m)}return b}var Jr=eg(!0),tg=eg(!1),Qo=Un(null),Yo=null,Lr=null,Hc=null;function qc(){Hc=Lr=Yo=null}function Gc(t){var e=Qo.current;ee(Qo),t._currentValue=e}function Lu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Br(t,e){Yo=t,Hc=Lr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&($e=!0),t.firstContext=null)}function at(t){var e=t._currentValue;if(Hc!==t)if(t={context:t,memoizedValue:e,next:null},Lr===null){if(Yo===null)throw Error(x(308));Lr=t,Yo.dependencies={lanes:0,firstContext:t}}else Lr=Lr.next=t;return e}var Zn=null;function Kc(t){Zn===null?Zn=[t]:Zn.push(t)}function ng(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Kc(e)):(n.next=s.next,s.next=n),e.interleaved=n,Jt(t,r)}function Jt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var un=!1;function Qc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Gt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Cn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,V&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Jt(t,n)}return s=r.interleaved,s===null?(e.next=e,Kc(r)):(e.next=s.next,s.next=e),r.interleaved=e,Jt(t,n)}function Co(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Dc(t,n)}}function of(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Xo(t,e,n,r){var s=t.updateQueue;un=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?i=u:o.next=u,o=a;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=a))}if(i!==null){var h=s.baseState;o=0,d=u=a=null,l=i;do{var f=l.lane,_=l.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:_,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=t,y=l;switch(f=e,_=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){h=v.call(_,h,f);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,f=typeof v=="function"?v.call(_,h,f):v,f==null)break e;h=le({},h,f);break e;case 2:un=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,f=s.effects,f===null?s.effects=[l]:f.push(l))}else _={eventTime:_,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=_,a=h):d=d.next=_,o|=f;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;f=l,l=f.next,f.next=null,s.lastBaseUpdate=f,s.shared.pending=null}}while(!0);if(d===null&&(a=h),s.baseState=a,s.firstBaseUpdate=u,s.lastBaseUpdate=d,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);cr|=o,t.lanes=o,t.memoizedState=h}}function lf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(x(191,s));s.call(r)}}}var Mi={},At=Un(Mi),pi=Un(Mi),mi=Un(Mi);function er(t){if(t===Mi)throw Error(x(174));return t}function Yc(t,e){switch(J(mi,e),J(pi,t),J(At,Mi),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:mu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=mu(e,t)}ee(At),J(At,e)}function Zr(){ee(At),ee(pi),ee(mi)}function sg(t){er(mi.current);var e=er(At.current),n=mu(e,t.type);e!==n&&(J(pi,t),J(At,n))}function Xc(t){pi.current===t&&(ee(At),ee(pi))}var ie=Un(0);function Jo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ma=[];function Jc(){for(var t=0;t<Ma.length;t++)Ma[t]._workInProgressVersionPrimary=null;Ma.length=0}var So=rn.ReactCurrentDispatcher,ja=rn.ReactCurrentBatchConfig,ur=0,oe=null,ge=null,we=null,Zo=!1,Hs=!1,gi=0,cw=0;function be(){throw Error(x(321))}function Zc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!kt(t[n],e[n]))return!1;return!0}function ed(t,e,n,r,s,i){if(ur=i,oe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,So.current=t===null||t.memoizedState===null?pw:mw,t=n(r,s),Hs){i=0;do{if(Hs=!1,gi=0,25<=i)throw Error(x(301));i+=1,we=ge=null,e.updateQueue=null,So.current=gw,t=n(r,s)}while(Hs)}if(So.current=el,e=ge!==null&&ge.next!==null,ur=0,we=ge=oe=null,Zo=!1,e)throw Error(x(300));return t}function td(){var t=gi!==0;return gi=0,t}function bt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?oe.memoizedState=we=t:we=we.next=t,we}function ut(){if(ge===null){var t=oe.alternate;t=t!==null?t.memoizedState:null}else t=ge.next;var e=we===null?oe.memoizedState:we.next;if(e!==null)we=e,ge=t;else{if(t===null)throw Error(x(310));ge=t,t={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},we===null?oe.memoizedState=we=t:we=we.next=t}return we}function _i(t,e){return typeof e=="function"?e(t):e}function Fa(t){var e=ut(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=ge,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,a=null,u=i;do{var d=u.lane;if((ur&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=h,o=r):a=a.next=h,oe.lanes|=d,cr|=d}u=u.next}while(u!==null&&u!==i);a===null?o=r:a.next=l,kt(r,e.memoizedState)||($e=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,oe.lanes|=i,cr|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ua(t){var e=ut(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);kt(i,e.memoizedState)||($e=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function ig(){}function og(t,e){var n=oe,r=ut(),s=e(),i=!kt(r.memoizedState,s);if(i&&(r.memoizedState=s,$e=!0),r=r.queue,nd(ug.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||we!==null&&we.memoizedState.tag&1){if(n.flags|=2048,vi(9,ag.bind(null,n,r,s,e),void 0,null),Ee===null)throw Error(x(349));ur&30||lg(n,e,s)}return s}function lg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=oe.updateQueue,e===null?(e={lastEffect:null,stores:null},oe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ag(t,e,n,r){e.value=n,e.getSnapshot=r,cg(e)&&dg(t)}function ug(t,e,n){return n(function(){cg(e)&&dg(t)})}function cg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!kt(t,n)}catch{return!0}}function dg(t){var e=Jt(t,1);e!==null&&Et(e,t,1,-1)}function af(t){var e=bt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_i,lastRenderedState:t},e.queue=t,t=t.dispatch=fw.bind(null,oe,t),[e.memoizedState,t]}function vi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=oe.updateQueue,e===null?(e={lastEffect:null,stores:null},oe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function hg(){return ut().memoizedState}function ko(t,e,n,r){var s=bt();oe.flags|=t,s.memoizedState=vi(1|e,n,void 0,r===void 0?null:r)}function Fl(t,e,n,r){var s=ut();r=r===void 0?null:r;var i=void 0;if(ge!==null){var o=ge.memoizedState;if(i=o.destroy,r!==null&&Zc(r,o.deps)){s.memoizedState=vi(e,n,i,r);return}}oe.flags|=t,s.memoizedState=vi(1|e,n,i,r)}function uf(t,e){return ko(8390656,8,t,e)}function nd(t,e){return Fl(2048,8,t,e)}function fg(t,e){return Fl(4,2,t,e)}function pg(t,e){return Fl(4,4,t,e)}function mg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function gg(t,e,n){return n=n!=null?n.concat([t]):null,Fl(4,4,mg.bind(null,e,t),n)}function rd(){}function _g(t,e){var n=ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Zc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function vg(t,e){var n=ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Zc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function yg(t,e,n){return ur&21?(kt(n,e)||(n=Sm(),oe.lanes|=n,cr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,$e=!0),t.memoizedState=n)}function dw(t,e){var n=$;$=n!==0&&4>n?n:4,t(!0);var r=ja.transition;ja.transition={};try{t(!1),e()}finally{$=n,ja.transition=r}}function wg(){return ut().memoizedState}function hw(t,e,n){var r=kn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},xg(t))Eg(e,n);else if(n=ng(t,e,n,r),n!==null){var s=Fe();Et(n,t,r,s),Cg(n,e,r)}}function fw(t,e,n){var r=kn(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(xg(t))Eg(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,kt(l,o)){var a=e.interleaved;a===null?(s.next=s,Kc(e)):(s.next=a.next,a.next=s),e.interleaved=s;return}}catch{}finally{}n=ng(t,e,s,r),n!==null&&(s=Fe(),Et(n,t,r,s),Cg(n,e,r))}}function xg(t){var e=t.alternate;return t===oe||e!==null&&e===oe}function Eg(t,e){Hs=Zo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Cg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Dc(t,n)}}var el={readContext:at,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useInsertionEffect:be,useLayoutEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useMutableSource:be,useSyncExternalStore:be,useId:be,unstable_isNewReconciler:!1},pw={readContext:at,useCallback:function(t,e){return bt().memoizedState=[t,e===void 0?null:e],t},useContext:at,useEffect:uf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ko(4194308,4,mg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ko(4194308,4,t,e)},useInsertionEffect:function(t,e){return ko(4,2,t,e)},useMemo:function(t,e){var n=bt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=bt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=hw.bind(null,oe,t),[r.memoizedState,t]},useRef:function(t){var e=bt();return t={current:t},e.memoizedState=t},useState:af,useDebugValue:rd,useDeferredValue:function(t){return bt().memoizedState=t},useTransition:function(){var t=af(!1),e=t[0];return t=dw.bind(null,t[1]),bt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=oe,s=bt();if(re){if(n===void 0)throw Error(x(407));n=n()}else{if(n=e(),Ee===null)throw Error(x(349));ur&30||lg(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,uf(ug.bind(null,r,i,t),[t]),r.flags|=2048,vi(9,ag.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=bt(),e=Ee.identifierPrefix;if(re){var n=Wt,r=Vt;n=(r&~(1<<32-xt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=gi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=cw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},mw={readContext:at,useCallback:_g,useContext:at,useEffect:nd,useImperativeHandle:gg,useInsertionEffect:fg,useLayoutEffect:pg,useMemo:vg,useReducer:Fa,useRef:hg,useState:function(){return Fa(_i)},useDebugValue:rd,useDeferredValue:function(t){var e=ut();return yg(e,ge.memoizedState,t)},useTransition:function(){var t=Fa(_i)[0],e=ut().memoizedState;return[t,e]},useMutableSource:ig,useSyncExternalStore:og,useId:wg,unstable_isNewReconciler:!1},gw={readContext:at,useCallback:_g,useContext:at,useEffect:nd,useImperativeHandle:gg,useInsertionEffect:fg,useLayoutEffect:pg,useMemo:vg,useReducer:Ua,useRef:hg,useState:function(){return Ua(_i)},useDebugValue:rd,useDeferredValue:function(t){var e=ut();return ge===null?e.memoizedState=t:yg(e,ge.memoizedState,t)},useTransition:function(){var t=Ua(_i)[0],e=ut().memoizedState;return[t,e]},useMutableSource:ig,useSyncExternalStore:og,useId:wg,unstable_isNewReconciler:!1};function mt(t,e){if(t&&t.defaultProps){e=le({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Mu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:le({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ul={isMounted:function(t){return(t=t._reactInternals)?wr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Fe(),s=kn(t),i=Gt(r,s);i.payload=e,n!=null&&(i.callback=n),e=Cn(t,i,s),e!==null&&(Et(e,t,s,r),Co(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Fe(),s=kn(t),i=Gt(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Cn(t,i,s),e!==null&&(Et(e,t,s,r),Co(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Fe(),r=kn(t),s=Gt(n,r);s.tag=2,e!=null&&(s.callback=e),e=Cn(t,s,r),e!==null&&(Et(e,t,r,n),Co(e,t,r))}};function cf(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!ci(n,r)||!ci(s,i):!0}function Sg(t,e,n){var r=!1,s=On,i=e.contextType;return typeof i=="object"&&i!==null?i=at(i):(s=Ge(e)?lr:Ae.current,r=e.contextTypes,i=(r=r!=null)?Yr(t,s):On),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ul,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function df(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ul.enqueueReplaceState(e,e.state,null)}function ju(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Qc(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=at(i):(i=Ge(e)?lr:Ae.current,s.context=Yr(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Mu(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Ul.enqueueReplaceState(s,s.state,null),Xo(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function es(t,e){try{var n="",r=e;do n+=$y(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function za(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Fu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var _w=typeof WeakMap=="function"?WeakMap:Map;function kg(t,e,n){n=Gt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){nl||(nl=!0,Ku=r),Fu(t,e)},n}function Ig(t,e,n){n=Gt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Fu(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Fu(t,e),typeof r!="function"&&(Sn===null?Sn=new Set([this]):Sn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function hf(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new _w;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=Rw.bind(null,t,e,n),e.then(t,t))}function ff(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function pf(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Gt(-1,1),e.tag=2,Cn(n,e,1))),n.lanes|=1),t)}var vw=rn.ReactCurrentOwner,$e=!1;function Le(t,e,n,r){e.child=t===null?tg(e,null,n,r):Jr(e,t.child,n,r)}function mf(t,e,n,r,s){n=n.render;var i=e.ref;return Br(e,s),r=ed(t,e,n,r,i,s),n=td(),t!==null&&!$e?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Zt(t,e,s)):(re&&n&&Wc(e),e.flags|=1,Le(t,e,r,s),e.child)}function gf(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!dd(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,Ng(t,e,i,r,s)):(t=bo(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:ci,n(o,r)&&t.ref===e.ref)return Zt(t,e,s)}return e.flags|=1,t=In(i,r),t.ref=e.ref,t.return=e,e.child=t}function Ng(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(ci(i,r)&&t.ref===e.ref)if($e=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&($e=!0);else return e.lanes=t.lanes,Zt(t,e,s)}return Uu(t,e,n,r,s)}function Tg(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(jr,Ye),Ye|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,J(jr,Ye),Ye|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,J(jr,Ye),Ye|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,J(jr,Ye),Ye|=r;return Le(t,e,s,n),e.child}function bg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Uu(t,e,n,r,s){var i=Ge(n)?lr:Ae.current;return i=Yr(e,i),Br(e,s),n=ed(t,e,n,r,i,s),r=td(),t!==null&&!$e?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Zt(t,e,s)):(re&&r&&Wc(e),e.flags|=1,Le(t,e,n,s),e.child)}function _f(t,e,n,r,s){if(Ge(n)){var i=!0;qo(e)}else i=!1;if(Br(e,s),e.stateNode===null)Io(t,e),Sg(e,n,r),ju(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=at(u):(u=Ge(n)?lr:Ae.current,u=Yr(e,u));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&df(e,o,r,u),un=!1;var f=e.memoizedState;o.state=f,Xo(e,r,o,s),a=e.memoizedState,l!==r||f!==a||qe.current||un?(typeof d=="function"&&(Mu(e,n,d,r),a=e.memoizedState),(l=un||cf(e,n,l,r,f,a,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,rg(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:mt(e.type,l),o.props=u,h=e.pendingProps,f=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=at(a):(a=Ge(n)?lr:Ae.current,a=Yr(e,a));var _=n.getDerivedStateFromProps;(d=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==h||f!==a)&&df(e,o,r,a),un=!1,f=e.memoizedState,o.state=f,Xo(e,r,o,s);var v=e.memoizedState;l!==h||f!==v||qe.current||un?(typeof _=="function"&&(Mu(e,n,_,r),v=e.memoizedState),(u=un||cf(e,n,u,r,f,v,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return zu(t,e,n,r,i,s)}function zu(t,e,n,r,s,i){bg(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&tf(e,n,!1),Zt(t,e,i);r=e.stateNode,vw.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Jr(e,t.child,null,i),e.child=Jr(e,null,l,i)):Le(t,e,l,i),e.memoizedState=r.state,s&&tf(e,n,!0),e.child}function Pg(t){var e=t.stateNode;e.pendingContext?ef(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ef(t,e.context,!1),Yc(t,e.containerInfo)}function vf(t,e,n,r,s){return Xr(),$c(s),e.flags|=256,Le(t,e,n,r),e.child}var Vu={dehydrated:null,treeContext:null,retryLane:0};function Wu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Rg(t,e,n){var r=e.pendingProps,s=ie.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),J(ie,s&1),t===null)return Du(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Wl(o,r,0,null),t=ir(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Wu(n),e.memoizedState=Vu,t):sd(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return yw(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=In(s,a),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=In(l,i):(i=ir(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Wu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Vu,r}return i=t.child,t=i.sibling,r=In(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function sd(t,e){return e=Wl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function co(t,e,n,r){return r!==null&&$c(r),Jr(e,t.child,null,n),t=sd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function yw(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=za(Error(x(422))),co(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Wl({mode:"visible",children:r.children},s,0,null),i=ir(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Jr(e,t.child,null,o),e.child.memoizedState=Wu(o),e.memoizedState=Vu,i);if(!(e.mode&1))return co(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(x(419)),r=za(i,r,void 0),co(t,e,o,r)}if(l=(o&t.childLanes)!==0,$e||l){if(r=Ee,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Jt(t,s),Et(r,t,s,-1))}return cd(),r=za(Error(x(421))),co(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=Aw.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Xe=En(s.nextSibling),Je=e,re=!0,_t=null,t!==null&&(rt[st++]=Vt,rt[st++]=Wt,rt[st++]=ar,Vt=t.id,Wt=t.overflow,ar=e),e=sd(e,r.children),e.flags|=4096,e)}function yf(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Lu(t.return,e,n)}function Va(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function Ag(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(Le(t,e,r.children,n),r=ie.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&yf(t,n,e);else if(t.tag===19)yf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(J(ie,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Jo(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Va(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Jo(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Va(e,!0,n,null,i);break;case"together":Va(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Io(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Zt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),cr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(x(153));if(e.child!==null){for(t=e.child,n=In(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=In(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ww(t,e,n){switch(e.tag){case 3:Pg(e),Xr();break;case 5:sg(e);break;case 1:Ge(e.type)&&qo(e);break;case 4:Yc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;J(Qo,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(J(ie,ie.current&1),e.flags|=128,null):n&e.child.childLanes?Rg(t,e,n):(J(ie,ie.current&1),t=Zt(t,e,n),t!==null?t.sibling:null);J(ie,ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Ag(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),J(ie,ie.current),r)break;return null;case 22:case 23:return e.lanes=0,Tg(t,e,n)}return Zt(t,e,n)}var Og,Bu,Dg,Lg;Og=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bu=function(){};Dg=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,er(At.current);var i=null;switch(n){case"input":s=du(t,s),r=du(t,r),i=[];break;case"select":s=le({},s,{value:void 0}),r=le({},r,{value:void 0}),i=[];break;case"textarea":s=pu(t,s),r=pu(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=$o)}gu(n,r);var o;n=null;for(u in s)if(!r.hasOwnProperty(u)&&s.hasOwnProperty(u)&&s[u]!=null)if(u==="style"){var l=s[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ri.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var a=r[u];if(l=s!=null?s[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(i||(i=[]),i.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ri.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&Z("scroll",t),i||l===a||(i=[])):(i=i||[]).push(u,a))}n&&(i=i||[]).push("style",n);var u=i;(e.updateQueue=u)&&(e.flags|=4)}};Lg=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ts(t,e){if(!re)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Pe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function xw(t,e,n){var r=e.pendingProps;switch(Bc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(e),null;case 1:return Ge(e.type)&&Ho(),Pe(e),null;case 3:return r=e.stateNode,Zr(),ee(qe),ee(Ae),Jc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ao(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,_t!==null&&(Xu(_t),_t=null))),Bu(t,e),Pe(e),null;case 5:Xc(e);var s=er(mi.current);if(n=e.type,t!==null&&e.stateNode!=null)Dg(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(x(166));return Pe(e),null}if(t=er(At.current),ao(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[Pt]=e,r[fi]=i,t=(e.mode&1)!==0,n){case"dialog":Z("cancel",r),Z("close",r);break;case"iframe":case"object":case"embed":Z("load",r);break;case"video":case"audio":for(s=0;s<js.length;s++)Z(js[s],r);break;case"source":Z("error",r);break;case"img":case"image":case"link":Z("error",r),Z("load",r);break;case"details":Z("toggle",r);break;case"input":Nh(r,i),Z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Z("invalid",r);break;case"textarea":bh(r,i),Z("invalid",r)}gu(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&lo(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&lo(r.textContent,l,t),s=["children",""+l]):ri.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Z("scroll",r)}switch(n){case"input":Zi(r),Th(r,i,!0);break;case"textarea":Zi(r),Ph(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=$o)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=um(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Pt]=e,t[fi]=r,Og(t,e,!1,!1),e.stateNode=t;e:{switch(o=_u(n,r),n){case"dialog":Z("cancel",t),Z("close",t),s=r;break;case"iframe":case"object":case"embed":Z("load",t),s=r;break;case"video":case"audio":for(s=0;s<js.length;s++)Z(js[s],t);s=r;break;case"source":Z("error",t),s=r;break;case"img":case"image":case"link":Z("error",t),Z("load",t),s=r;break;case"details":Z("toggle",t),s=r;break;case"input":Nh(t,r),s=du(t,r),Z("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=le({},r,{value:void 0}),Z("invalid",t);break;case"textarea":bh(t,r),s=pu(t,r),Z("invalid",t);break;default:s=r}gu(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="style"?hm(t,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&cm(t,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&si(t,a):typeof a=="number"&&si(t,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ri.hasOwnProperty(i)?a!=null&&i==="onScroll"&&Z("scroll",t):a!=null&&Tc(t,i,a,o))}switch(n){case"input":Zi(t),Th(t,r,!1);break;case"textarea":Zi(t),Ph(t);break;case"option":r.value!=null&&t.setAttribute("value",""+An(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Ur(t,!!r.multiple,i,!1):r.defaultValue!=null&&Ur(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=$o)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Pe(e),null;case 6:if(t&&e.stateNode!=null)Lg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(x(166));if(n=er(mi.current),er(At.current),ao(e)){if(r=e.stateNode,n=e.memoizedProps,r[Pt]=e,(i=r.nodeValue!==n)&&(t=Je,t!==null))switch(t.tag){case 3:lo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&lo(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Pt]=e,e.stateNode=r}return Pe(e),null;case 13:if(ee(ie),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(re&&Xe!==null&&e.mode&1&&!(e.flags&128))Zm(),Xr(),e.flags|=98560,i=!1;else if(i=ao(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(x(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(x(317));i[Pt]=e}else Xr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Pe(e),i=!1}else _t!==null&&(Xu(_t),_t=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ie.current&1?ve===0&&(ve=3):cd())),e.updateQueue!==null&&(e.flags|=4),Pe(e),null);case 4:return Zr(),Bu(t,e),t===null&&di(e.stateNode.containerInfo),Pe(e),null;case 10:return Gc(e.type._context),Pe(e),null;case 17:return Ge(e.type)&&Ho(),Pe(e),null;case 19:if(ee(ie),i=e.memoizedState,i===null)return Pe(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Ts(i,!1);else{if(ve!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Jo(t),o!==null){for(e.flags|=128,Ts(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return J(ie,ie.current&1|2),e.child}t=t.sibling}i.tail!==null&&fe()>ts&&(e.flags|=128,r=!0,Ts(i,!1),e.lanes=4194304)}else{if(!r)if(t=Jo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ts(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!re)return Pe(e),null}else 2*fe()-i.renderingStartTime>ts&&n!==1073741824&&(e.flags|=128,r=!0,Ts(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=fe(),e.sibling=null,n=ie.current,J(ie,r?n&1|2:n&1),e):(Pe(e),null);case 22:case 23:return ud(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ye&1073741824&&(Pe(e),e.subtreeFlags&6&&(e.flags|=8192)):Pe(e),null;case 24:return null;case 25:return null}throw Error(x(156,e.tag))}function Ew(t,e){switch(Bc(e),e.tag){case 1:return Ge(e.type)&&Ho(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Zr(),ee(qe),ee(Ae),Jc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Xc(e),null;case 13:if(ee(ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(x(340));Xr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ee(ie),null;case 4:return Zr(),null;case 10:return Gc(e.type._context),null;case 22:case 23:return ud(),null;case 24:return null;default:return null}}var ho=!1,Re=!1,Cw=typeof WeakSet=="function"?WeakSet:Set,k=null;function Mr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ue(t,e,r)}else n.current=null}function $u(t,e,n){try{n()}catch(r){ue(t,e,r)}}var wf=!1;function Sw(t,e){if(Nu=Vo,t=zm(),Vc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,d=0,h=t,f=null;t:for(;;){for(var _;h!==n||s!==0&&h.nodeType!==3||(l=o+s),h!==i||r!==0&&h.nodeType!==3||(a=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(_=h.firstChild)!==null;)f=h,h=_;for(;;){if(h===t)break t;if(f===n&&++u===s&&(l=o),f===i&&++d===r&&(a=o),(_=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=_}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Tu={focusedElem:t,selectionRange:n},Vo=!1,k=e;k!==null;)if(e=k,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,k=t;else for(;k!==null;){e=k;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,b=v.memoizedState,g=e.stateNode,m=g.getSnapshotBeforeUpdate(e.elementType===e.type?y:mt(e.type,y),b);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var p=e.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(w){ue(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,k=t;break}k=e.return}return v=wf,wf=!1,v}function qs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&$u(e,n,i)}s=s.next}while(s!==r)}}function zl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Hu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Mg(t){var e=t.alternate;e!==null&&(t.alternate=null,Mg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Pt],delete e[fi],delete e[Ru],delete e[ow],delete e[lw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function jg(t){return t.tag===5||t.tag===3||t.tag===4}function xf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||jg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=$o));else if(r!==4&&(t=t.child,t!==null))for(qu(t,e,n),t=t.sibling;t!==null;)qu(t,e,n),t=t.sibling}function Gu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Gu(t,e,n),t=t.sibling;t!==null;)Gu(t,e,n),t=t.sibling}var Ce=null,gt=!1;function on(t,e,n){for(n=n.child;n!==null;)Fg(t,e,n),n=n.sibling}function Fg(t,e,n){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(Al,n)}catch{}switch(n.tag){case 5:Re||Mr(n,e);case 6:var r=Ce,s=gt;Ce=null,on(t,e,n),Ce=r,gt=s,Ce!==null&&(gt?(t=Ce,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ce.removeChild(n.stateNode));break;case 18:Ce!==null&&(gt?(t=Ce,n=n.stateNode,t.nodeType===8?Da(t.parentNode,n):t.nodeType===1&&Da(t,n),ai(t)):Da(Ce,n.stateNode));break;case 4:r=Ce,s=gt,Ce=n.stateNode.containerInfo,gt=!0,on(t,e,n),Ce=r,gt=s;break;case 0:case 11:case 14:case 15:if(!Re&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&$u(n,e,o),s=s.next}while(s!==r)}on(t,e,n);break;case 1:if(!Re&&(Mr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ue(n,e,l)}on(t,e,n);break;case 21:on(t,e,n);break;case 22:n.mode&1?(Re=(r=Re)||n.memoizedState!==null,on(t,e,n),Re=r):on(t,e,n);break;default:on(t,e,n)}}function Ef(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Cw),e.forEach(function(r){var s=Ow.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function pt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ce=l.stateNode,gt=!1;break e;case 3:Ce=l.stateNode.containerInfo,gt=!0;break e;case 4:Ce=l.stateNode.containerInfo,gt=!0;break e}l=l.return}if(Ce===null)throw Error(x(160));Fg(i,o,s),Ce=null,gt=!1;var a=s.alternate;a!==null&&(a.return=null),s.return=null}catch(u){ue(s,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ug(e,t),e=e.sibling}function Ug(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(pt(e,t),Tt(t),r&4){try{qs(3,t,t.return),zl(3,t)}catch(y){ue(t,t.return,y)}try{qs(5,t,t.return)}catch(y){ue(t,t.return,y)}}break;case 1:pt(e,t),Tt(t),r&512&&n!==null&&Mr(n,n.return);break;case 5:if(pt(e,t),Tt(t),r&512&&n!==null&&Mr(n,n.return),t.flags&32){var s=t.stateNode;try{si(s,"")}catch(y){ue(t,t.return,y)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&lm(s,i),_u(l,o);var u=_u(l,i);for(o=0;o<a.length;o+=2){var d=a[o],h=a[o+1];d==="style"?hm(s,h):d==="dangerouslySetInnerHTML"?cm(s,h):d==="children"?si(s,h):Tc(s,d,h,u)}switch(l){case"input":hu(s,i);break;case"textarea":am(s,i);break;case"select":var f=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var _=i.value;_!=null?Ur(s,!!i.multiple,_,!1):f!==!!i.multiple&&(i.defaultValue!=null?Ur(s,!!i.multiple,i.defaultValue,!0):Ur(s,!!i.multiple,i.multiple?[]:"",!1))}s[fi]=i}catch(y){ue(t,t.return,y)}}break;case 6:if(pt(e,t),Tt(t),r&4){if(t.stateNode===null)throw Error(x(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(y){ue(t,t.return,y)}}break;case 3:if(pt(e,t),Tt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ai(e.containerInfo)}catch(y){ue(t,t.return,y)}break;case 4:pt(e,t),Tt(t);break;case 13:pt(e,t),Tt(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(ld=fe())),r&4&&Ef(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Re=(u=Re)||d,pt(e,t),Re=u):pt(e,t),Tt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(k=t,d=t.child;d!==null;){for(h=k=d;k!==null;){switch(f=k,_=f.child,f.tag){case 0:case 11:case 14:case 15:qs(4,f,f.return);break;case 1:Mr(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){ue(r,n,y)}}break;case 5:Mr(f,f.return);break;case 22:if(f.memoizedState!==null){Sf(h);continue}}_!==null?(_.return=f,k=_):Sf(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{s=h.stateNode,u?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=h.stateNode,a=h.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=dm("display",o))}catch(y){ue(t,t.return,y)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){ue(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:pt(e,t),Tt(t),r&4&&Ef(t);break;case 21:break;default:pt(e,t),Tt(t)}}function Tt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(jg(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(si(s,""),r.flags&=-33);var i=xf(t);Gu(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=xf(t);qu(t,l,o);break;default:throw Error(x(161))}}catch(a){ue(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function kw(t,e,n){k=t,zg(t)}function zg(t,e,n){for(var r=(t.mode&1)!==0;k!==null;){var s=k,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||ho;if(!o){var l=s.alternate,a=l!==null&&l.memoizedState!==null||Re;l=ho;var u=Re;if(ho=o,(Re=a)&&!u)for(k=s;k!==null;)o=k,a=o.child,o.tag===22&&o.memoizedState!==null?kf(s):a!==null?(a.return=o,k=a):kf(s);for(;i!==null;)k=i,zg(i),i=i.sibling;k=s,ho=l,Re=u}Cf(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,k=i):Cf(t)}}function Cf(t){for(;k!==null;){var e=k;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Re||zl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Re)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:mt(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&lf(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}lf(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&ai(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}Re||e.flags&512&&Hu(e)}catch(f){ue(e,e.return,f)}}if(e===t){k=null;break}if(n=e.sibling,n!==null){n.return=e.return,k=n;break}k=e.return}}function Sf(t){for(;k!==null;){var e=k;if(e===t){k=null;break}var n=e.sibling;if(n!==null){n.return=e.return,k=n;break}k=e.return}}function kf(t){for(;k!==null;){var e=k;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{zl(4,e)}catch(a){ue(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(a){ue(e,s,a)}}var i=e.return;try{Hu(e)}catch(a){ue(e,i,a)}break;case 5:var o=e.return;try{Hu(e)}catch(a){ue(e,o,a)}}}catch(a){ue(e,e.return,a)}if(e===t){k=null;break}var l=e.sibling;if(l!==null){l.return=e.return,k=l;break}k=e.return}}var Iw=Math.ceil,tl=rn.ReactCurrentDispatcher,id=rn.ReactCurrentOwner,lt=rn.ReactCurrentBatchConfig,V=0,Ee=null,me=null,ke=0,Ye=0,jr=Un(0),ve=0,yi=null,cr=0,Vl=0,od=0,Gs=null,Be=null,ld=0,ts=1/0,Ft=null,nl=!1,Ku=null,Sn=null,fo=!1,gn=null,rl=0,Ks=0,Qu=null,No=-1,To=0;function Fe(){return V&6?fe():No!==-1?No:No=fe()}function kn(t){return t.mode&1?V&2&&ke!==0?ke&-ke:uw.transition!==null?(To===0&&(To=Sm()),To):(t=$,t!==0||(t=window.event,t=t===void 0?16:Rm(t.type)),t):1}function Et(t,e,n,r){if(50<Ks)throw Ks=0,Qu=null,Error(x(185));Oi(t,n,r),(!(V&2)||t!==Ee)&&(t===Ee&&(!(V&2)&&(Vl|=n),ve===4&&dn(t,ke)),Ke(t,r),n===1&&V===0&&!(e.mode&1)&&(ts=fe()+500,jl&&zn()))}function Ke(t,e){var n=t.callbackNode;u0(t,e);var r=zo(t,t===Ee?ke:0);if(r===0)n!==null&&Oh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Oh(n),e===1)t.tag===0?aw(If.bind(null,t)):Ym(If.bind(null,t)),sw(function(){!(V&6)&&zn()}),n=null;else{switch(km(r)){case 1:n=Oc;break;case 4:n=Em;break;case 16:n=Uo;break;case 536870912:n=Cm;break;default:n=Uo}n=Kg(n,Vg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Vg(t,e){if(No=-1,To=0,V&6)throw Error(x(327));var n=t.callbackNode;if($r()&&t.callbackNode!==n)return null;var r=zo(t,t===Ee?ke:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=sl(t,r);else{e=r;var s=V;V|=2;var i=Bg();(Ee!==t||ke!==e)&&(Ft=null,ts=fe()+500,sr(t,e));do try{bw();break}catch(l){Wg(t,l)}while(!0);qc(),tl.current=i,V=s,me!==null?e=0:(Ee=null,ke=0,e=ve)}if(e!==0){if(e===2&&(s=Eu(t),s!==0&&(r=s,e=Yu(t,s))),e===1)throw n=yi,sr(t,0),dn(t,r),Ke(t,fe()),n;if(e===6)dn(t,r);else{if(s=t.current.alternate,!(r&30)&&!Nw(s)&&(e=sl(t,r),e===2&&(i=Eu(t),i!==0&&(r=i,e=Yu(t,i))),e===1))throw n=yi,sr(t,0),dn(t,r),Ke(t,fe()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(x(345));case 2:Qn(t,Be,Ft);break;case 3:if(dn(t,r),(r&130023424)===r&&(e=ld+500-fe(),10<e)){if(zo(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){Fe(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Pu(Qn.bind(null,t,Be,Ft),e);break}Qn(t,Be,Ft);break;case 4:if(dn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-xt(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Iw(r/1960))-r,10<r){t.timeoutHandle=Pu(Qn.bind(null,t,Be,Ft),r);break}Qn(t,Be,Ft);break;case 5:Qn(t,Be,Ft);break;default:throw Error(x(329))}}}return Ke(t,fe()),t.callbackNode===n?Vg.bind(null,t):null}function Yu(t,e){var n=Gs;return t.current.memoizedState.isDehydrated&&(sr(t,e).flags|=256),t=sl(t,e),t!==2&&(e=Be,Be=n,e!==null&&Xu(e)),t}function Xu(t){Be===null?Be=t:Be.push.apply(Be,t)}function Nw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!kt(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function dn(t,e){for(e&=~od,e&=~Vl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-xt(e),r=1<<n;t[n]=-1,e&=~r}}function If(t){if(V&6)throw Error(x(327));$r();var e=zo(t,0);if(!(e&1))return Ke(t,fe()),null;var n=sl(t,e);if(t.tag!==0&&n===2){var r=Eu(t);r!==0&&(e=r,n=Yu(t,r))}if(n===1)throw n=yi,sr(t,0),dn(t,e),Ke(t,fe()),n;if(n===6)throw Error(x(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Qn(t,Be,Ft),Ke(t,fe()),null}function ad(t,e){var n=V;V|=1;try{return t(e)}finally{V=n,V===0&&(ts=fe()+500,jl&&zn())}}function dr(t){gn!==null&&gn.tag===0&&!(V&6)&&$r();var e=V;V|=1;var n=lt.transition,r=$;try{if(lt.transition=null,$=1,t)return t()}finally{$=r,lt.transition=n,V=e,!(V&6)&&zn()}}function ud(){Ye=jr.current,ee(jr)}function sr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,rw(n)),me!==null)for(n=me.return;n!==null;){var r=n;switch(Bc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ho();break;case 3:Zr(),ee(qe),ee(Ae),Jc();break;case 5:Xc(r);break;case 4:Zr();break;case 13:ee(ie);break;case 19:ee(ie);break;case 10:Gc(r.type._context);break;case 22:case 23:ud()}n=n.return}if(Ee=t,me=t=In(t.current,null),ke=Ye=e,ve=0,yi=null,od=Vl=cr=0,Be=Gs=null,Zn!==null){for(e=0;e<Zn.length;e++)if(n=Zn[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Zn=null}return t}function Wg(t,e){do{var n=me;try{if(qc(),So.current=el,Zo){for(var r=oe.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Zo=!1}if(ur=0,we=ge=oe=null,Hs=!1,gi=0,id.current=null,n===null||n.return===null){ve=1,yi=e,me=null;break}e:{var i=t,o=n.return,l=n,a=e;if(e=ke,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=l,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var _=ff(o);if(_!==null){_.flags&=-257,pf(_,o,l,i,e),_.mode&1&&hf(i,u,e),e=_,a=u;var v=e.updateQueue;if(v===null){var y=new Set;y.add(a),e.updateQueue=y}else v.add(a);break e}else{if(!(e&1)){hf(i,u,e),cd();break e}a=Error(x(426))}}else if(re&&l.mode&1){var b=ff(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),pf(b,o,l,i,e),$c(es(a,l));break e}}i=a=es(a,l),ve!==4&&(ve=2),Gs===null?Gs=[i]:Gs.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var g=kg(i,a,e);of(i,g);break e;case 1:l=a;var m=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof m.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Sn===null||!Sn.has(p)))){i.flags|=65536,e&=-e,i.lanes|=e;var w=Ig(i,l,e);of(i,w);break e}}i=i.return}while(i!==null)}Hg(n)}catch(C){e=C,me===n&&n!==null&&(me=n=n.return);continue}break}while(!0)}function Bg(){var t=tl.current;return tl.current=el,t===null?el:t}function cd(){(ve===0||ve===3||ve===2)&&(ve=4),Ee===null||!(cr&268435455)&&!(Vl&268435455)||dn(Ee,ke)}function sl(t,e){var n=V;V|=2;var r=Bg();(Ee!==t||ke!==e)&&(Ft=null,sr(t,e));do try{Tw();break}catch(s){Wg(t,s)}while(!0);if(qc(),V=n,tl.current=r,me!==null)throw Error(x(261));return Ee=null,ke=0,ve}function Tw(){for(;me!==null;)$g(me)}function bw(){for(;me!==null&&!e0();)$g(me)}function $g(t){var e=Gg(t.alternate,t,Ye);t.memoizedProps=t.pendingProps,e===null?Hg(t):me=e,id.current=null}function Hg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ew(n,e),n!==null){n.flags&=32767,me=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ve=6,me=null;return}}else if(n=xw(n,e,Ye),n!==null){me=n;return}if(e=e.sibling,e!==null){me=e;return}me=e=t}while(e!==null);ve===0&&(ve=5)}function Qn(t,e,n){var r=$,s=lt.transition;try{lt.transition=null,$=1,Pw(t,e,n,r)}finally{lt.transition=s,$=r}return null}function Pw(t,e,n,r){do $r();while(gn!==null);if(V&6)throw Error(x(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(x(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(c0(t,i),t===Ee&&(me=Ee=null,ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||fo||(fo=!0,Kg(Uo,function(){return $r(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=lt.transition,lt.transition=null;var o=$;$=1;var l=V;V|=4,id.current=null,Sw(t,n),Ug(n,t),Y0(Tu),Vo=!!Nu,Tu=Nu=null,t.current=n,kw(n),t0(),V=l,$=o,lt.transition=i}else t.current=n;if(fo&&(fo=!1,gn=t,rl=s),i=t.pendingLanes,i===0&&(Sn=null),s0(n.stateNode),Ke(t,fe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(nl)throw nl=!1,t=Ku,Ku=null,t;return rl&1&&t.tag!==0&&$r(),i=t.pendingLanes,i&1?t===Qu?Ks++:(Ks=0,Qu=t):Ks=0,zn(),null}function $r(){if(gn!==null){var t=km(rl),e=lt.transition,n=$;try{if(lt.transition=null,$=16>t?16:t,gn===null)var r=!1;else{if(t=gn,gn=null,rl=0,V&6)throw Error(x(331));var s=V;for(V|=4,k=t.current;k!==null;){var i=k,o=i.child;if(k.flags&16){var l=i.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(k=u;k!==null;){var d=k;switch(d.tag){case 0:case 11:case 15:qs(8,d,i)}var h=d.child;if(h!==null)h.return=d,k=h;else for(;k!==null;){d=k;var f=d.sibling,_=d.return;if(Mg(d),d===u){k=null;break}if(f!==null){f.return=_,k=f;break}k=_}}}var v=i.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var b=y.sibling;y.sibling=null,y=b}while(y!==null)}}k=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,k=o;else e:for(;k!==null;){if(i=k,i.flags&2048)switch(i.tag){case 0:case 11:case 15:qs(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,k=g;break e}k=i.return}}var m=t.current;for(k=m;k!==null;){o=k;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,k=p;else e:for(o=m;k!==null;){if(l=k,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:zl(9,l)}}catch(C){ue(l,l.return,C)}if(l===o){k=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,k=w;break e}k=l.return}}if(V=s,zn(),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(Al,t)}catch{}r=!0}return r}finally{$=n,lt.transition=e}}return!1}function Nf(t,e,n){e=es(n,e),e=kg(t,e,1),t=Cn(t,e,1),e=Fe(),t!==null&&(Oi(t,1,e),Ke(t,e))}function ue(t,e,n){if(t.tag===3)Nf(t,t,n);else for(;e!==null;){if(e.tag===3){Nf(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Sn===null||!Sn.has(r))){t=es(n,t),t=Ig(e,t,1),e=Cn(e,t,1),t=Fe(),e!==null&&(Oi(e,1,t),Ke(e,t));break}}e=e.return}}function Rw(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Fe(),t.pingedLanes|=t.suspendedLanes&n,Ee===t&&(ke&n)===n&&(ve===4||ve===3&&(ke&130023424)===ke&&500>fe()-ld?sr(t,0):od|=n),Ke(t,e)}function qg(t,e){e===0&&(t.mode&1?(e=no,no<<=1,!(no&130023424)&&(no=4194304)):e=1);var n=Fe();t=Jt(t,e),t!==null&&(Oi(t,e,n),Ke(t,n))}function Aw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),qg(t,n)}function Ow(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(e),qg(t,n)}var Gg;Gg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||qe.current)$e=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return $e=!1,ww(t,e,n);$e=!!(t.flags&131072)}else $e=!1,re&&e.flags&1048576&&Xm(e,Ko,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Io(t,e),t=e.pendingProps;var s=Yr(e,Ae.current);Br(e,n),s=ed(null,e,r,t,s,n);var i=td();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ge(r)?(i=!0,qo(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Qc(e),s.updater=Ul,e.stateNode=s,s._reactInternals=e,ju(e,r,t,n),e=zu(null,e,r,!0,i,n)):(e.tag=0,re&&i&&Wc(e),Le(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Io(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=Lw(r),t=mt(r,t),s){case 0:e=Uu(null,e,r,t,n);break e;case 1:e=_f(null,e,r,t,n);break e;case 11:e=mf(null,e,r,t,n);break e;case 14:e=gf(null,e,r,mt(r.type,t),n);break e}throw Error(x(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:mt(r,s),Uu(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:mt(r,s),_f(t,e,r,s,n);case 3:e:{if(Pg(e),t===null)throw Error(x(387));r=e.pendingProps,i=e.memoizedState,s=i.element,rg(t,e),Xo(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=es(Error(x(423)),e),e=vf(t,e,r,n,s);break e}else if(r!==s){s=es(Error(x(424)),e),e=vf(t,e,r,n,s);break e}else for(Xe=En(e.stateNode.containerInfo.firstChild),Je=e,re=!0,_t=null,n=tg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Xr(),r===s){e=Zt(t,e,n);break e}Le(t,e,r,n)}e=e.child}return e;case 5:return sg(e),t===null&&Du(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,bu(r,s)?o=null:i!==null&&bu(r,i)&&(e.flags|=32),bg(t,e),Le(t,e,o,n),e.child;case 6:return t===null&&Du(e),null;case 13:return Rg(t,e,n);case 4:return Yc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Jr(e,null,r,n):Le(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:mt(r,s),mf(t,e,r,s,n);case 7:return Le(t,e,e.pendingProps,n),e.child;case 8:return Le(t,e,e.pendingProps.children,n),e.child;case 12:return Le(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,J(Qo,r._currentValue),r._currentValue=o,i!==null)if(kt(i.value,o)){if(i.children===s.children&&!qe.current){e=Zt(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=Gt(-1,n&-n),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Lu(i.return,n,e),l.lanes|=n;break}a=a.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(x(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Lu(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Le(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Br(e,n),s=at(s),r=r(s),e.flags|=1,Le(t,e,r,n),e.child;case 14:return r=e.type,s=mt(r,e.pendingProps),s=mt(r.type,s),gf(t,e,r,s,n);case 15:return Ng(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:mt(r,s),Io(t,e),e.tag=1,Ge(r)?(t=!0,qo(e)):t=!1,Br(e,n),Sg(e,r,s),ju(e,r,s,n),zu(null,e,r,!0,t,n);case 19:return Ag(t,e,n);case 22:return Tg(t,e,n)}throw Error(x(156,e.tag))};function Kg(t,e){return xm(t,e)}function Dw(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function it(t,e,n,r){return new Dw(t,e,n,r)}function dd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Lw(t){if(typeof t=="function")return dd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Pc)return 11;if(t===Rc)return 14}return 2}function In(t,e){var n=t.alternate;return n===null?(n=it(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function bo(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")dd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Nr:return ir(n.children,s,i,e);case bc:o=8,s|=8;break;case lu:return t=it(12,n,e,s|2),t.elementType=lu,t.lanes=i,t;case au:return t=it(13,n,e,s),t.elementType=au,t.lanes=i,t;case uu:return t=it(19,n,e,s),t.elementType=uu,t.lanes=i,t;case sm:return Wl(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case nm:o=10;break e;case rm:o=9;break e;case Pc:o=11;break e;case Rc:o=14;break e;case an:o=16,r=null;break e}throw Error(x(130,t==null?t:typeof t,""))}return e=it(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function ir(t,e,n,r){return t=it(7,t,r,e),t.lanes=n,t}function Wl(t,e,n,r){return t=it(22,t,r,e),t.elementType=sm,t.lanes=n,t.stateNode={isHidden:!1},t}function Wa(t,e,n){return t=it(6,t,null,e),t.lanes=n,t}function Ba(t,e,n){return e=it(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Mw(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ca(0),this.expirationTimes=Ca(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ca(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function hd(t,e,n,r,s,i,o,l,a){return t=new Mw(t,e,n,l,a),e===1?(e=1,i===!0&&(e|=8)):e=0,i=it(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qc(i),t}function jw(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ir,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Qg(t){if(!t)return On;t=t._reactInternals;e:{if(wr(t)!==t||t.tag!==1)throw Error(x(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ge(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(x(171))}if(t.tag===1){var n=t.type;if(Ge(n))return Qm(t,n,e)}return e}function Yg(t,e,n,r,s,i,o,l,a){return t=hd(n,r,!0,t,s,i,o,l,a),t.context=Qg(null),n=t.current,r=Fe(),s=kn(n),i=Gt(r,s),i.callback=e??null,Cn(n,i,s),t.current.lanes=s,Oi(t,s,r),Ke(t,r),t}function Bl(t,e,n,r){var s=e.current,i=Fe(),o=kn(s);return n=Qg(n),e.context===null?e.context=n:e.pendingContext=n,e=Gt(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Cn(s,e,o),t!==null&&(Et(t,s,o,i),Co(t,s,o)),o}function il(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Tf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function fd(t,e){Tf(t,e),(t=t.alternate)&&Tf(t,e)}function Fw(){return null}var Xg=typeof reportError=="function"?reportError:function(t){console.error(t)};function pd(t){this._internalRoot=t}$l.prototype.render=pd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(x(409));Bl(t,e,null,null)};$l.prototype.unmount=pd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;dr(function(){Bl(null,t,null,null)}),e[Xt]=null}};function $l(t){this._internalRoot=t}$l.prototype.unstable_scheduleHydration=function(t){if(t){var e=Tm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<cn.length&&e!==0&&e<cn[n].priority;n++);cn.splice(n,0,t),n===0&&Pm(t)}};function md(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Hl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function bf(){}function Uw(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var u=il(o);i.call(u)}}var o=Yg(e,r,t,0,null,!1,!1,"",bf);return t._reactRootContainer=o,t[Xt]=o.current,di(t.nodeType===8?t.parentNode:t),dr(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var u=il(a);l.call(u)}}var a=hd(t,0,!1,null,null,!1,!1,"",bf);return t._reactRootContainer=a,t[Xt]=a.current,di(t.nodeType===8?t.parentNode:t),dr(function(){Bl(e,a,n,r)}),a}function ql(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var a=il(o);l.call(a)}}Bl(e,o,t,s)}else o=Uw(n,e,t,s,r);return il(o)}Im=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ms(e.pendingLanes);n!==0&&(Dc(e,n|1),Ke(e,fe()),!(V&6)&&(ts=fe()+500,zn()))}break;case 13:dr(function(){var r=Jt(t,1);if(r!==null){var s=Fe();Et(r,t,1,s)}}),fd(t,1)}};Lc=function(t){if(t.tag===13){var e=Jt(t,134217728);if(e!==null){var n=Fe();Et(e,t,134217728,n)}fd(t,134217728)}};Nm=function(t){if(t.tag===13){var e=kn(t),n=Jt(t,e);if(n!==null){var r=Fe();Et(n,t,e,r)}fd(t,e)}};Tm=function(){return $};bm=function(t,e){var n=$;try{return $=t,e()}finally{$=n}};yu=function(t,e,n){switch(e){case"input":if(hu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Ml(r);if(!s)throw Error(x(90));om(r),hu(r,s)}}}break;case"textarea":am(t,n);break;case"select":e=n.value,e!=null&&Ur(t,!!n.multiple,e,!1)}};mm=ad;gm=dr;var zw={usingClientEntryPoint:!1,Events:[Li,Rr,Ml,fm,pm,ad]},bs={findFiberByHostInstance:Jn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Vw={bundleType:bs.bundleType,version:bs.version,rendererPackageName:bs.rendererPackageName,rendererConfig:bs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ym(t),t===null?null:t.stateNode},findFiberByHostInstance:bs.findFiberByHostInstance||Fw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var po=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!po.isDisabled&&po.supportsFiber)try{Al=po.inject(Vw),Rt=po}catch{}}tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zw;tt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!md(e))throw Error(x(200));return jw(t,e,null,n)};tt.createRoot=function(t,e){if(!md(t))throw Error(x(299));var n=!1,r="",s=Xg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=hd(t,1,!1,null,null,n,!1,r,s),t[Xt]=e.current,di(t.nodeType===8?t.parentNode:t),new pd(e)};tt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(x(188)):(t=Object.keys(t).join(","),Error(x(268,t)));return t=ym(e),t=t===null?null:t.stateNode,t};tt.flushSync=function(t){return dr(t)};tt.hydrate=function(t,e,n){if(!Hl(e))throw Error(x(200));return ql(null,t,e,!0,n)};tt.hydrateRoot=function(t,e,n){if(!md(t))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=Xg;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Yg(e,null,t,1,n??null,s,!1,i,o),t[Xt]=e.current,di(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new $l(e)};tt.render=function(t,e,n){if(!Hl(e))throw Error(x(200));return ql(null,t,e,!1,n)};tt.unmountComponentAtNode=function(t){if(!Hl(t))throw Error(x(40));return t._reactRootContainer?(dr(function(){ql(null,null,t,!1,function(){t._reactRootContainer=null,t[Xt]=null})}),!0):!1};tt.unstable_batchedUpdates=ad;tt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Hl(n))throw Error(x(200));if(t==null||t._reactInternals===void 0)throw Error(x(38));return ql(t,e,n,!1,r)};tt.version="18.3.1-next-f1338f8080-20240426";function Jg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jg)}catch(t){console.error(t)}}Jg(),Jp.exports=tt;var Ww=Jp.exports,Pf=Ww;iu.createRoot=Pf.createRoot,iu.hydrateRoot=Pf.hydrateRoot;var Rf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E=function(t,e){if(!t)throw ds(e)},ds=function(t){return new Error("Firebase Database ("+Zg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Bw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},gd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,a=s+2<t.length,u=a?t[s+2]:0,d=i>>2,h=(i&3)<<4|l>>4;let f=(l&15)<<2|u>>6,_=u&63;a||(_=64,o||(f=64)),r.push(n[d],n[h],n[f],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(e_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Bw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||h==null)throw new $w;const f=i<<2|l>>4;if(r.push(f),u!==64){const _=l<<4&240|u>>2;if(r.push(_),h!==64){const v=u<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class $w extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const t_=function(t){const e=e_(t);return gd.encodeByteArray(e,!0)},ol=function(t){return t_(t).replace(/\./g,"")},ll=function(t){try{return gd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hw(t){return n_(void 0,t)}function n_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!qw(n)||(t[n]=n_(t[n],e[n]));return t}function qw(t){return t!=="__proto__"}/**
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
 */function Gw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Kw=()=>Gw().__FIREBASE_DEFAULTS__,Qw=()=>{if(typeof process>"u"||typeof Rf>"u")return;const t=Rf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Yw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ll(t[1]);return e&&JSON.parse(e)},_d=()=>{try{return Kw()||Qw()||Yw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},r_=t=>{var e,n;return(n=(e=_d())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Xw=t=>{const e=r_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},s_=()=>{var t;return(t=_d())===null||t===void 0?void 0:t.config},i_=t=>{var e;return(e=_d())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Jw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ol(JSON.stringify(n)),ol(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function Zw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ex(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function o_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tx(){const t=ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function nx(){return Zg.NODE_ADMIN===!0}function rx(){try{return typeof indexedDB=="object"}catch{return!1}}function sx(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ix="FirebaseError";class Vn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ix,Object.setPrototypeOf(this,Vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ji.prototype.create)}}class ji{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?ox(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Vn(s,l,r)}}function ox(t,e){return t.replace(lx,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const lx=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(t){return JSON.parse(t)}function _e(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=wi(ll(i[0])||""),n=wi(ll(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},ax=function(t){const e=l_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},ux=function(t){const e=l_(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function hr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ju(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function al(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function ul(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Af(i)&&Af(o)){if(!ul(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Af(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Fs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Us(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cx{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,d;for(let h=0;h<80;h++){h<40?h<20?(u=l^i&(o^l),d=1518500249):(u=i^o^l,d=1859775393):h<60?(u=i&o|l&(i|o),d=2400959708):(u=i^o^l,d=3395469782);const f=(s<<5|s>>>27)+u+a+d+r[h]&4294967295;a=l,l=o,o=(i<<30|i>>>2)&4294967295,i=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function dx(t,e){const n=new hx(t,e);return n.subscribe.bind(n)}class hx{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");fx(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=$a),s.error===void 0&&(s.error=$a),s.complete===void 0&&(s.complete=$a);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fx(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function $a(){}function Gl(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const px=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,E(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Kl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Te(t){return t&&t._delegate?t._delegate:t}class fr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class mx{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new hs;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_x(e))try{this.getOrInitializeService({instanceIdentifier:Yn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Yn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yn){return this.instances.has(e)}getOptions(e=Yn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:gx(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Yn){return this.component?this.component.multipleInstances?e:Yn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gx(t){return t===Yn?void 0:t}function _x(t){return t.instantiationMode==="EAGER"}/**
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
 */class vx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new mx(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(q||(q={}));const yx={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},wx=q.INFO,xx={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},Ex=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=xx[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yd{constructor(e){this.name=e,this._logLevel=wx,this._logHandler=Ex,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...e),this._logHandler(this,q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...e),this._logHandler(this,q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,q.INFO,...e),this._logHandler(this,q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,q.WARN,...e),this._logHandler(this,q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...e),this._logHandler(this,q.ERROR,...e)}}const Cx=(t,e)=>e.some(n=>t instanceof n);let Of,Df;function Sx(){return Of||(Of=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kx(){return Df||(Df=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const a_=new WeakMap,Zu=new WeakMap,u_=new WeakMap,Ha=new WeakMap,wd=new WeakMap;function Ix(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Nn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&a_.set(n,t)}).catch(()=>{}),wd.set(e,t),e}function Nx(t){if(Zu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Zu.set(t,e)}let ec={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Zu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||u_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Tx(t){ec=t(ec)}function bx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(qa(this),e,...n);return u_.set(r,e.sort?e.sort():[e]),Nn(r)}:kx().includes(t)?function(...e){return t.apply(qa(this),e),Nn(a_.get(this))}:function(...e){return Nn(t.apply(qa(this),e))}}function Px(t){return typeof t=="function"?bx(t):(t instanceof IDBTransaction&&Nx(t),Cx(t,Sx())?new Proxy(t,ec):t)}function Nn(t){if(t instanceof IDBRequest)return Ix(t);if(Ha.has(t))return Ha.get(t);const e=Px(t);return e!==t&&(Ha.set(t,e),wd.set(e,t)),e}const qa=t=>wd.get(t);function Rx(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Nn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Nn(o.result),a.oldVersion,a.newVersion,Nn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const Ax=["get","getKey","getAll","getAllKeys","count"],Ox=["put","add","delete","clear"],Ga=new Map;function Lf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ga.get(e))return Ga.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Ox.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Ax.includes(n)))return;const i=async function(o,...l){const a=this.transaction(o,s?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&a.done]))[0]};return Ga.set(e,i),i}Tx(t=>({...t,get:(e,n,r)=>Lf(e,n)||t.get(e,n,r),has:(e,n)=>!!Lf(e,n)||t.has(e,n)}));/**
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
 */class Dx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Lx(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Lx(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const tc="@firebase/app",Mf="0.10.13";/**
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
 */const en=new yd("@firebase/app"),Mx="@firebase/app-compat",jx="@firebase/analytics-compat",Fx="@firebase/analytics",Ux="@firebase/app-check-compat",zx="@firebase/app-check",Vx="@firebase/auth",Wx="@firebase/auth-compat",Bx="@firebase/database",$x="@firebase/data-connect",Hx="@firebase/database-compat",qx="@firebase/functions",Gx="@firebase/functions-compat",Kx="@firebase/installations",Qx="@firebase/installations-compat",Yx="@firebase/messaging",Xx="@firebase/messaging-compat",Jx="@firebase/performance",Zx="@firebase/performance-compat",eE="@firebase/remote-config",tE="@firebase/remote-config-compat",nE="@firebase/storage",rE="@firebase/storage-compat",sE="@firebase/firestore",iE="@firebase/vertexai-preview",oE="@firebase/firestore-compat",lE="firebase",aE="10.14.1";/**
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
 */const nc="[DEFAULT]",uE={[tc]:"fire-core",[Mx]:"fire-core-compat",[Fx]:"fire-analytics",[jx]:"fire-analytics-compat",[zx]:"fire-app-check",[Ux]:"fire-app-check-compat",[Vx]:"fire-auth",[Wx]:"fire-auth-compat",[Bx]:"fire-rtdb",[$x]:"fire-data-connect",[Hx]:"fire-rtdb-compat",[qx]:"fire-fn",[Gx]:"fire-fn-compat",[Kx]:"fire-iid",[Qx]:"fire-iid-compat",[Yx]:"fire-fcm",[Xx]:"fire-fcm-compat",[Jx]:"fire-perf",[Zx]:"fire-perf-compat",[eE]:"fire-rc",[tE]:"fire-rc-compat",[nE]:"fire-gcs",[rE]:"fire-gcs-compat",[sE]:"fire-fst",[oE]:"fire-fst-compat",[iE]:"fire-vertex","fire-js":"fire-js",[lE]:"fire-js-all"};/**
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
 */const cl=new Map,cE=new Map,rc=new Map;function jf(t,e){try{t.container.addComponent(e)}catch(n){en.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ns(t){const e=t.name;if(rc.has(e))return en.debug(`There were multiple attempts to register component ${e}.`),!1;rc.set(e,t);for(const n of cl.values())jf(n,t);for(const n of cE.values())jf(n,t);return!0}function xd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function yt(t){return t.settings!==void 0}/**
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
 */const dE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Tn=new ji("app","Firebase",dE);/**
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
 */class hE{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new fr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tn.create("app-deleted",{appName:this._name})}}/**
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
 */const ps=aE;function c_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:nc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Tn.create("bad-app-name",{appName:String(s)});if(n||(n=s_()),!n)throw Tn.create("no-options");const i=cl.get(s);if(i){if(ul(n,i.options)&&ul(r,i.config))return i;throw Tn.create("duplicate-app",{appName:s})}const o=new vx(s);for(const a of rc.values())o.addComponent(a);const l=new hE(n,r,o);return cl.set(s,l),l}function d_(t=nc){const e=cl.get(t);if(!e&&t===nc&&s_())return c_();if(!e)throw Tn.create("no-app",{appName:t});return e}function bn(t,e,n){var r;let s=(r=uE[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),en.warn(l.join(" "));return}ns(new fr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const fE="firebase-heartbeat-database",pE=1,xi="firebase-heartbeat-store";let Ka=null;function h_(){return Ka||(Ka=Rx(fE,pE,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(xi)}catch(n){console.warn(n)}}}}).catch(t=>{throw Tn.create("idb-open",{originalErrorMessage:t.message})})),Ka}async function mE(t){try{const n=(await h_()).transaction(xi),r=await n.objectStore(xi).get(f_(t));return await n.done,r}catch(e){if(e instanceof Vn)en.warn(e.message);else{const n=Tn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});en.warn(n.message)}}}async function Ff(t,e){try{const r=(await h_()).transaction(xi,"readwrite");await r.objectStore(xi).put(e,f_(t)),await r.done}catch(n){if(n instanceof Vn)en.warn(n.message);else{const r=Tn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});en.warn(r.message)}}}function f_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const gE=1024,_E=30*24*60*60*1e3;class vE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new wE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Uf();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=_E}),this._storage.overwrite(this._heartbeatsCache))}catch(r){en.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Uf(),{heartbeatsToSend:r,unsentEntries:s}=yE(this._heartbeatsCache.heartbeats),i=ol(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return en.warn(n),""}}}function Uf(){return new Date().toISOString().substring(0,10)}function yE(t,e=gE){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),zf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),zf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class wE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rx()?sx().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await mE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ff(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ff(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function zf(t){return ol(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function xE(t){ns(new fr("platform-logger",e=>new Dx(e),"PRIVATE")),ns(new fr("heartbeat",e=>new vE(e),"PRIVATE")),bn(tc,Mf,t),bn(tc,Mf,"esm2017"),bn("fire-js","")}xE("");var Vf={};const Wf="@firebase/database",Bf="1.0.8";/**
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
 */let p_="";function EE(t){p_=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),_e(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:wi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return It(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new CE(e)}}catch{}return new SE},tr=m_("localStorage"),kE=m_("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr=new yd("@firebase/database"),g_=function(){let t=1;return function(){return t++}}(),__=function(t){const e=px(t),n=new cx;n.update(e);const r=n.digest();return gd.encodeByteArray(r)},Fi=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Fi.apply(null,r):typeof r=="object"?e+=_e(r):e+=r,e+=" "}return e};let Qs=null,$f=!0;const IE=function(t,e){E(!0,"Can't turn on custom loggers persistently."),Hr.logLevel=q.VERBOSE,Qs=Hr.log.bind(Hr)},Se=function(...t){if($f===!0&&($f=!1,Qs===null&&kE.get("logging_enabled")===!0&&IE()),Qs){const e=Fi.apply(null,t);Qs(e)}},Ui=function(t){return function(...e){Se(t,...e)}},sc=function(...t){const e="FIREBASE INTERNAL ERROR: "+Fi(...t);Hr.error(e)},tn=function(...t){const e=`FIREBASE FATAL ERROR: ${Fi(...t)}`;throw Hr.error(e),new Error(e)},Ue=function(...t){const e="FIREBASE WARNING: "+Fi(...t);Hr.warn(e)},NE=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ue("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ed=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},TE=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},pr="[MIN_NAME]",Dn="[MAX_NAME]",xr=function(t,e){if(t===e)return 0;if(t===pr||e===Dn)return-1;if(e===pr||t===Dn)return 1;{const n=Hf(t),r=Hf(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},bE=function(t,e){return t===e?0:t<e?-1:1},Ps=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+_e(e))},Cd=function(t){if(typeof t!="object"||t===null)return _e(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=_e(e[r]),n+=":",n+=Cd(t[e[r]]);return n+="}",n},v_=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function Ne(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const y_=function(t){E(!Ed(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,l,a;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(s?1:0),u.reverse();const d=u.join("");let h="";for(a=0;a<64;a+=8){let f=parseInt(d.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},PE=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},RE=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function AE(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const OE=new RegExp("^-?(0*)\\d{1,10}$"),DE=-2147483648,LE=2147483647,Hf=function(t){if(OE.test(t)){const e=Number(t);if(e>=DE&&e<=LE)return e}return null},ms=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ue("Exception was thrown by user callback.",n),e},Math.floor(0))}},ME=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ys=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class jE{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ue(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Se("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ue(e)}}class Po{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Po.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd="5",w_="v",x_="s",E_="r",C_="f",S_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,k_="ls",I_="p",ic="ac",N_="websocket",T_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e,n,r,s,i=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=tr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&tr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function UE(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function P_(t,e,n){E(typeof e=="string","typeof type must == string"),E(typeof n=="object","typeof params must == object");let r;if(e===N_)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===T_)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);UE(t)&&(n.ns=t.namespace);const s=[];return Ne(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(){this.counters_={}}incrementCounter(e,n=1){It(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Hw(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa={},Ya={};function kd(t){const e=t.toString();return Qa[e]||(Qa[e]=new zE),Qa[e]}function VE(t,e){const n=t.toString();return Ya[n]||(Ya[n]=e()),Ya[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&ms(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf="start",BE="close",$E="pLPCommand",HE="pRTLPCB",R_="id",A_="pw",O_="ser",qE="cb",GE="seg",KE="ts",QE="d",YE="dframe",D_=1870,L_=30,XE=D_-L_,JE=25e3,ZE=3e4;class Fr{constructor(e,n,r,s,i,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ui(e),this.stats_=kd(n),this.urlFn=a=>(this.appCheckToken&&(a[ic]=this.appCheckToken),P_(n,T_,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new WE(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ZE)),TE(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Id((...i)=>{const[o,l,a,u,d]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===qf)this.id=l,this.password=a;else if(o===BE)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,l]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[qf]="t",r[O_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[qE]=this.scriptTagHolder.uniqueCallbackIdentifier),r[w_]=Sd,this.transportSessionId&&(r[x_]=this.transportSessionId),this.lastSessionId&&(r[k_]=this.lastSessionId),this.applicationId&&(r[I_]=this.applicationId),this.appCheckToken&&(r[ic]=this.appCheckToken),typeof location<"u"&&location.hostname&&S_.test(location.hostname)&&(r[E_]=C_);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Fr.forceAllow_=!0}static forceDisallow(){Fr.forceDisallow_=!0}static isAvailable(){return Fr.forceAllow_?!0:!Fr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!PE()&&!RE()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=_e(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=t_(n),s=v_(r,XE);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[YE]="t",r[R_]=e,r[A_]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=_e(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Id{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=g_(),window[$E+this.uniqueCallbackIdentifier]=e,window[HE+this.uniqueCallbackIdentifier]=n,this.myIFrame=Id.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Se("frame writing exception"),l.stack&&Se(l.stack),Se(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Se("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[R_]=this.myID,e[A_]=this.myPW,e[O_]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+L_+r.length<=D_;){const o=this.pendingSegs.shift();r=r+"&"+GE+s+"="+o.seg+"&"+KE+s+"="+o.ts+"&"+QE+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(JE)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Se("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC=16384,tC=45e3;let dl=null;typeof MozWebSocket<"u"?dl=MozWebSocket:typeof WebSocket<"u"&&(dl=WebSocket);class vt{constructor(e,n,r,s,i,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ui(this.connId),this.stats_=kd(n),this.connURL=vt.connectionURL_(n,o,l,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[w_]=Sd,typeof location<"u"&&location.hostname&&S_.test(location.hostname)&&(o[E_]=C_),n&&(o[x_]=n),r&&(o[k_]=r),s&&(o[ic]=s),i&&(o[I_]=i),P_(e,N_,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,tr.set("previous_websocket_failure",!0);try{let r;nx(),this.mySock=new dl(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){vt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&dl!==null&&!vt.forceDisallow_}static previouslyFailed(){return tr.isInMemoryStorage||tr.get("previous_websocket_failure")===!0}markConnectionHealthy(){tr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=wi(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(E(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=_e(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=v_(n,eC);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(tC))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}vt.responsesRequiredToBeHealthy=2;vt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Fr,vt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=vt&&vt.isAvailable();let r=n&&!vt.previouslyFailed();if(e.webSocketOnly&&(n||Ue("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[vt];else{const s=this.transports_=[];for(const i of Ei.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);Ei.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ei.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC=6e4,rC=5e3,sC=10*1024,iC=100*1024,Xa="t",Gf="d",oC="s",Kf="r",lC="e",Qf="o",Yf="a",Xf="n",Jf="p",aC="h";class uC{constructor(e,n,r,s,i,o,l,a,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ui("c:"+this.id+":"),this.transportManager_=new Ei(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Ys(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>iC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>sC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Xa in e){const n=e[Xa];n===Yf?this.upgradeIfSecondaryHealthy_():n===Kf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Qf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ps("t",e),r=Ps("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Jf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Yf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Xf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ps("t",e),r=Ps("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ps(Xa,e);if(Gf in e){const r=e[Gf];if(n===aC){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Xf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===oC?this.onConnectionShutdown_(r):n===Kf?this.onReset_(r):n===lC?sc("Server Error: "+r):n===Qf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):sc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Sd!==r&&Ue("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ys(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(nC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ys(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(rC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Jf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(tr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e){this.allowedEvents_=e,this.listeners_={},E(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){E(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl extends j_{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!vd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new hl}getInitialEvent(e){return E(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf=32,ep=768;class H{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function B(){return new H("")}function j(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ln(t){return t.pieces_.length-t.pieceNum_}function X(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new H(t.pieces_,e)}function Nd(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function cC(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Ci(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function F_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new H(e,0)}function ce(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof H)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new H(n,0)}function F(t){return t.pieceNum_>=t.pieces_.length}function Me(t,e){const n=j(t),r=j(e);if(n===null)return e;if(n===r)return Me(X(t),X(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function dC(t,e){const n=Ci(t,0),r=Ci(e,0);for(let s=0;s<n.length&&s<r.length;s++){const i=xr(n[s],r[s]);if(i!==0)return i}return n.length===r.length?0:n.length<r.length?-1:1}function Td(t,e){if(Ln(t)!==Ln(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function ot(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Ln(t)>Ln(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class hC{constructor(e,n){this.errorPrefix_=n,this.parts_=Ci(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Kl(this.parts_[r]);U_(this)}}function fC(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Kl(e),U_(t)}function pC(t){const e=t.parts_.pop();t.byteLength_-=Kl(e),t.parts_.length>0&&(t.byteLength_-=1)}function U_(t){if(t.byteLength_>ep)throw new Error(t.errorPrefix_+"has a key path longer than "+ep+" bytes ("+t.byteLength_+").");if(t.parts_.length>Zf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Zf+") or object contains a cycle "+Xn(t))}function Xn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd extends j_{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new bd}getInitialEvent(e){return E(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs=1e3,mC=60*5*1e3,tp=30*1e3,gC=1.3,_C=3e4,vC="server_kill",np=3;class Kt extends M_{constructor(e,n,r,s,i,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Kt.nextPersistentConnectionId_++,this.log_=Ui("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Rs,this.maxReconnectDelay_=mC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");bd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&hl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(_e(i)),E(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new hs,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),E(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const l={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,l=>{const a=l.d,u=l.s;Kt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&It(e,"w")){const r=hr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();Ue(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ux(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=tp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=ax(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+_e(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):sc("Unrecognized action received from server: "+_e(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){E(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Rs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Rs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>_C&&(this.reconnectDelay_=Rs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*gC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Kt.nextConnectionId_++,i=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(h){E(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Se("getToken() completed but was canceled"):(Se("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,l=new uC(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{Ue(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(vC)},i))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ue(h),a())}}}interrupt(e){Se("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Se("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ju(this.interruptReasons_)&&(this.reconnectDelay_=Rs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>Cd(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new H(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){Se("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=np&&(this.reconnectDelay_=tp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Se("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=np&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+p_.replace(/\./g,"-")]=1,vd()?e["framework.cordova"]=1:o_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=hl.getInstance().currentlyOnline();return Ju(this.interruptReasons_)&&e}}Kt.nextPersistentConnectionId_=0;Kt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new U(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new U(pr,e),s=new U(pr,n);return this.compare(r,s)!==0}minPost(){return U.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mo;class z_ extends Ql{static get __EMPTY_NODE(){return mo}static set __EMPTY_NODE(e){mo=e}compare(e,n){return xr(e.name,n.name)}isDefinedOn(e){throw ds("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return U.MIN}maxPost(){return new U(Dn,mo)}makePost(e,n){return E(typeof e=="string","KeyIndex indexValue must always be a string."),new U(e,mo)}toString(){return".key"}}const or=new z_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class xe{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??xe.RED,this.left=s??He.EMPTY_NODE,this.right=i??He.EMPTY_NODE}copy(e,n,r,s,i){return new xe(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return He.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return He.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}xe.RED=!0;xe.BLACK=!1;class yC{copy(e,n,r,s,i){return this}insert(e,n,r){return new xe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class He{constructor(e,n=He.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new He(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,xe.BLACK,null,null))}remove(e){return new He(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,xe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new go(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new go(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new go(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new go(this.root_,null,this.comparator_,!0,e)}}He.EMPTY_NODE=new yC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wC(t,e){return xr(t.name,e.name)}function Pd(t,e){return xr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oc;function xC(t){oc=t}const V_=function(t){return typeof t=="number"?"number:"+y_(t):"string:"+t},W_=function(t){if(t.isLeafNode()){const e=t.val();E(typeof e=="string"||typeof e=="number"||typeof e=="object"&&It(e,".sv"),"Priority must be a string or number.")}else E(t===oc||t.isEmpty(),"priority of unexpected type.");E(t===oc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rp;class ye{constructor(e,n=ye.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,E(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),W_(this.priorityNode_)}static set __childrenNodeConstructor(e){rp=e}static get __childrenNodeConstructor(){return rp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ye(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ye.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return F(e)?this:j(e)===".priority"?this.priorityNode_:ye.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ye.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=j(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(E(r!==".priority"||Ln(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ye.__childrenNodeConstructor.EMPTY_NODE.updateChild(X(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+V_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=y_(this.value_):e+=this.value_,this.lazyHash_=__(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ye.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ye.__childrenNodeConstructor?-1:(E(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=ye.VALUE_TYPE_ORDER.indexOf(n),i=ye.VALUE_TYPE_ORDER.indexOf(r);return E(s>=0,"Unknown leaf type: "+n),E(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ye.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let B_,$_;function EC(t){B_=t}function CC(t){$_=t}class SC extends Ql{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?xr(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return U.MIN}maxPost(){return new U(Dn,new ye("[PRIORITY-POST]",$_))}makePost(e,n){const r=B_(e);return new U(n,new ye("[PRIORITY-POST]",r))}toString(){return".priority"}}const se=new SC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kC=Math.log(2);class IC{constructor(e){const n=i=>parseInt(Math.log(i)/kC,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const fl=function(t,e,n,r){t.sort(e);const s=function(a,u){const d=u-a;let h,f;if(d===0)return null;if(d===1)return h=t[a],f=n?n(h):h,new xe(f,h.node,xe.BLACK,null,null);{const _=parseInt(d/2,10)+a,v=s(a,_),y=s(_+1,u);return h=t[_],f=n?n(h):h,new xe(f,h.node,xe.BLACK,v,y)}},i=function(a){let u=null,d=null,h=t.length;const f=function(v,y){const b=h-v,g=h;h-=v;const m=s(b+1,g),p=t[b],w=n?n(p):p;_(new xe(w,p.node,y,null,m))},_=function(v){u?(u.left=v,u=v):(d=v,u=v)};for(let v=0;v<a.count;++v){const y=a.nextBitIsOne(),b=Math.pow(2,a.count-(v+1));y?f(b,xe.BLACK):(f(b,xe.BLACK),f(b,xe.RED))}return d},o=new IC(t.length),l=i(o);return new He(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ja;const kr={};class Bt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return E(kr&&se,"ChildrenNode.ts has not been loaded"),Ja=Ja||new Bt({".priority":kr},{".priority":se}),Ja}get(e){const n=hr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof He?n:null}hasIndex(e){return It(this.indexSet_,e.toString())}addIndex(e,n){E(e!==or,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(U.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let l;s?l=fl(r,e.getCompare()):l=kr;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const d=Object.assign({},this.indexes_);return d[a]=l,new Bt(d,u)}addToIndexes(e,n){const r=al(this.indexes_,(s,i)=>{const o=hr(this.indexSet_,i);if(E(o,"Missing index implementation for "+i),s===kr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(U.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),fl(l,o.getCompare())}else return kr;else{const l=n.get(e.name);let a=s;return l&&(a=a.remove(new U(e.name,l))),a.insert(e,e.node)}});return new Bt(r,this.indexSet_)}removeFromIndexes(e,n){const r=al(this.indexes_,s=>{if(s===kr)return s;{const i=n.get(e.name);return i?s.remove(new U(e.name,i)):s}});return new Bt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let As;class A{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&W_(this.priorityNode_),this.children_.isEmpty()&&E(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return As||(As=new A(new He(Pd),null,Bt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||As}updatePriority(e){return this.children_.isEmpty()?this:new A(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?As:n}}getChild(e){const n=j(e);return n===null?this:this.getImmediateChild(n).getChild(X(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(E(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new U(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?As:this.priorityNode_;return new A(s,o,i)}}updateChild(e,n){const r=j(e);if(r===null)return n;{E(j(e)!==".priority"||Ln(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(X(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(se,(o,l)=>{n[o]=l.val(e),r++,i&&A.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+V_(this.getPriority().val())+":"),this.forEachChild(se,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":__(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new U(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new U(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new U(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,U.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,U.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===zi?-1:0}withIndex(e){if(e===or||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new A(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===or||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(se),s=n.getIterator(se);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===or?null:this.indexMap_.get(e.toString())}}A.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class NC extends A{constructor(){super(new He(Pd),A.EMPTY_NODE,Bt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return A.EMPTY_NODE}isEmpty(){return!1}}const zi=new NC;Object.defineProperties(U,{MIN:{value:new U(pr,A.EMPTY_NODE)},MAX:{value:new U(Dn,zi)}});z_.__EMPTY_NODE=A.EMPTY_NODE;ye.__childrenNodeConstructor=A;xC(zi);CC(zi);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC=!0;function pe(t,e=null){if(t===null)return A.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),E(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ye(n,pe(e))}if(!(t instanceof Array)&&TC){const n=[];let r=!1;if(Ne(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=pe(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new U(o,a)))}}),n.length===0)return A.EMPTY_NODE;const i=fl(n,wC,o=>o.name,Pd);if(r){const o=fl(n,se.getCompare());return new A(i,pe(e),new Bt({".priority":o},{".priority":se}))}else return new A(i,pe(e),Bt.Default)}else{let n=A.EMPTY_NODE;return Ne(t,(r,s)=>{if(It(t,r)&&r.substring(0,1)!=="."){const i=pe(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(pe(e))}}EC(pe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd extends Ql{constructor(e){super(),this.indexPath_=e,E(!F(e)&&j(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?xr(e.name,n.name):i}makePost(e,n){const r=pe(e),s=A.EMPTY_NODE.updateChild(this.indexPath_,r);return new U(n,s)}maxPost(){const e=A.EMPTY_NODE.updateChild(this.indexPath_,zi);return new U(Dn,e)}toString(){return Ci(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC extends Ql{compare(e,n){const r=e.node.compareTo(n.node);return r===0?xr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return U.MIN}maxPost(){return U.MAX}makePost(e,n){const r=pe(e);return new U(n,r)}toString(){return".value"}}const H_=new bC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q_(t){return{type:"value",snapshotNode:t}}function rs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Si(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ki(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function PC(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e){this.index_=e}updateChild(e,n,r,s,i,o){E(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(s).equals(r.getChild(s))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Si(n,l)):E(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(rs(n,r)):o.trackChildChange(ki(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(se,(s,i)=>{n.hasChild(s)||r.trackChildChange(Si(s,i))}),n.isLeafNode()||n.forEachChild(se,(s,i)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(i)||r.trackChildChange(ki(s,i,o))}else r.trackChildChange(rs(s,i))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?A.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e){this.indexedFilter_=new Ad(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ii.getStartPost_(e),this.endPost_=Ii.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,s,i,o){return this.matches(new U(n,r))||(r=A.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,s,i,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=A.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(A.EMPTY_NODE);const i=this;return n.forEachChild(se,(o,l)=>{i.matches(new U(o,l))||(s=s.updateImmediateChild(o,A.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Ii(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,s,i,o){return this.rangedFilter_.matches(new U(n,r))||(r=A.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,s,i,o):this.fullLimitUpdateChild_(e,n,r,i,o)}updateFullNode(e,n,r){let s;if(n.isLeafNode()||n.isEmpty())s=A.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=A.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const l=i.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))s=s.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(A.EMPTY_NODE);let i;this.reverse_?i=s.getReverseIterator(this.index_):i=s.getIterator(this.index_);let o=0;for(;i.hasNext();){const l=i.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:s=s.updateImmediateChild(l.name,A.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,s,i){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,_)=>h(_,f)}else o=this.index_.getCompare();const l=e;E(l.numChildren()===this.limit_,"");const a=new U(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let f=s.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=s.getChildAfterChild(this.index_,f,this.reverse_);const _=f==null?1:o(f,a);if(d&&!r.isEmpty()&&_>=0)return i!=null&&i.trackChildChange(ki(n,r,h)),l.updateImmediateChild(n,r);{i!=null&&i.trackChildChange(Si(n,h));const y=l.updateImmediateChild(n,A.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(i!=null&&i.trackChildChange(rs(f.name,f.node)),y.updateImmediateChild(f.name,f.node)):y}}else return r.isEmpty()?e:d&&o(u,a)>=0?(i!=null&&(i.trackChildChange(Si(u.name,u.node)),i.trackChildChange(rs(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,A.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=se}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return E(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return E(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:pr}hasEnd(){return this.endSet_}getIndexEndValue(){return E(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return E(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Dn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return E(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===se}copy(){const e=new Od;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function AC(t){return t.loadsAllData()?new Ad(t.getIndex()):t.hasLimit()?new RC(t):new Ii(t)}function OC(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function DC(t,e,n){const r=t.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function LC(t,e){const n=t.copy();return n.index_=e,n}function sp(t){const e={};if(t.isDefault())return e;let n;if(t.index_===se?n="$priority":t.index_===H_?n="$value":t.index_===or?n="$key":(E(t.index_ instanceof Rd,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=_e(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=_e(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+_e(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=_e(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+_e(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function ip(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==se&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl extends M_{constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=Ui("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(E(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=pl.getListenId_(e,r),l={};this.listens_[o]=l;const a=sp(e._queryParams);this.restRequest_(i+".json",a,(u,d)=>{let h=d;if(u===404&&(h=null,u=null),u===null&&this.onDataUpdate_(i,h,!1,r),hr(this.listens_,o)===l){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",s(f,null)}})}unlisten(e,n){const r=pl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=sp(e._queryParams),r=e._path.toString(),s=new hs;return this.restRequest_(r+".json",n,(i,o)=>{let l=o;i===404&&(l=null,i=null),i===null?(this.onDataUpdate_(r,l,!1,null),s.resolve(l)):s.reject(new Error(l))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+fs(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=wi(l.responseText)}catch{Ue("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Ue("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(){this.rootNode_=A.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(){return{value:null,children:new Map}}function G_(t,e,n){if(F(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=j(e);t.children.has(r)||t.children.set(r,ml());const s=t.children.get(r);e=X(e),G_(s,e,n)}}function lc(t,e,n){t.value!==null?n(e,t.value):jC(t,(r,s)=>{const i=new H(e.toString()+"/"+r);lc(s,i,n)})}function jC(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ne(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op=10*1e3,UC=30*1e3,zC=5*60*1e3;class VC{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new FC(e);const r=op+(UC-op)*Math.random();Ys(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ne(e,(s,i)=>{i>0&&It(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),Ys(this.reportStats_.bind(this),Math.floor(Math.random()*2*zC))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(wt||(wt={}));function Dd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ld(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Md(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=wt.ACK_USER_WRITE,this.source=Dd()}operationForChild(e){if(F(this.path)){if(this.affectedTree.value!=null)return E(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new H(e));return new gl(B(),n,this.revert)}}else return E(j(this.path)===e,"operationForChild called for unrelated child."),new gl(X(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,n){this.source=e,this.path=n,this.type=wt.LISTEN_COMPLETE}operationForChild(e){return F(this.path)?new Ni(this.source,B()):new Ni(this.source,X(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=wt.OVERWRITE}operationForChild(e){return F(this.path)?new mr(this.source,B(),this.snap.getImmediateChild(e)):new mr(this.source,X(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=wt.MERGE}operationForChild(e){if(F(this.path)){const n=this.children.subtree(new H(e));return n.isEmpty()?null:n.value?new mr(this.source,B(),n.value):new ss(this.source,B(),n)}else return E(j(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ss(this.source,X(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(F(e))return this.isFullyInitialized()&&!this.filtered_;const n=j(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function BC(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(PC(o.childName,o.snapshotNode))}),Os(t,s,"child_removed",e,r,n),Os(t,s,"child_added",e,r,n),Os(t,s,"child_moved",i,r,n),Os(t,s,"child_changed",e,r,n),Os(t,s,"value",e,r,n),s}function Os(t,e,n,r,s,i){const o=r.filter(l=>l.type===n);o.sort((l,a)=>HC(t,l,a)),o.forEach(l=>{const a=$C(t,l,i);s.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function $C(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function HC(t,e,n){if(e.childName==null||n.childName==null)throw ds("Should only compare child_ events.");const r=new U(e.childName,e.snapshotNode),s=new U(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yl(t,e){return{eventCache:t,serverCache:e}}function Xs(t,e,n,r){return Yl(new Mn(e,n,r),t.serverCache)}function K_(t,e,n,r){return Yl(t.eventCache,new Mn(e,n,r))}function _l(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function gr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Za;const qC=()=>(Za||(Za=new He(bE)),Za);class Y{constructor(e,n=qC()){this.value=e,this.children=n}static fromObject(e){let n=new Y(null);return Ne(e,(r,s)=>{n=n.set(new H(r),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:B(),value:this.value};if(F(e))return null;{const r=j(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(X(e),n);return i!=null?{path:ce(new H(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(F(e))return this;{const n=j(e),r=this.children.get(n);return r!==null?r.subtree(X(e)):new Y(null)}}set(e,n){if(F(e))return new Y(n,this.children);{const r=j(e),i=(this.children.get(r)||new Y(null)).set(X(e),n),o=this.children.insert(r,i);return new Y(this.value,o)}}remove(e){if(F(e))return this.children.isEmpty()?new Y(null):new Y(null,this.children);{const n=j(e),r=this.children.get(n);if(r){const s=r.remove(X(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new Y(null):new Y(this.value,i)}else return this}}get(e){if(F(e))return this.value;{const n=j(e),r=this.children.get(n);return r?r.get(X(e)):null}}setTree(e,n){if(F(e))return n;{const r=j(e),i=(this.children.get(r)||new Y(null)).setTree(X(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new Y(this.value,o)}}fold(e){return this.fold_(B(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(ce(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,B(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(F(e))return null;{const i=j(e),o=this.children.get(i);return o?o.findOnPath_(X(e),ce(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,B(),n)}foreachOnPath_(e,n,r){if(F(e))return this;{this.value&&r(n,this.value);const s=j(e),i=this.children.get(s);return i?i.foreachOnPath_(X(e),ce(n,s),r):new Y(null)}}foreach(e){this.foreach_(B(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(ce(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.writeTree_=e}static empty(){return new Ct(new Y(null))}}function Js(t,e,n){if(F(e))return new Ct(new Y(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=Me(s,e);return i=i.updateChild(o,n),new Ct(t.writeTree_.set(s,i))}else{const s=new Y(n),i=t.writeTree_.setTree(e,s);return new Ct(i)}}}function ac(t,e,n){let r=t;return Ne(n,(s,i)=>{r=Js(r,ce(e,s),i)}),r}function lp(t,e){if(F(e))return Ct.empty();{const n=t.writeTree_.setTree(e,new Y(null));return new Ct(n)}}function uc(t,e){return Er(t,e)!=null}function Er(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Me(n.path,e)):null}function ap(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(se,(r,s)=>{e.push(new U(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new U(r,s.value))}),e}function Pn(t,e){if(F(e))return t;{const n=Er(t,e);return n!=null?new Ct(new Y(n)):new Ct(t.writeTree_.subtree(e))}}function cc(t){return t.writeTree_.isEmpty()}function is(t,e){return Q_(B(),t.writeTree_,e)}function Q_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(E(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=Q_(ce(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ce(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(t,e){return Z_(e,t)}function GC(t,e,n,r,s){E(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=Js(t.visibleWrites,e,n)),t.lastWriteId=r}function KC(t,e,n,r){E(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=ac(t.visibleWrites,e,n),t.lastWriteId=r}function QC(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function YC(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);E(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&XC(l,r.path)?s=!1:ot(r.path,l.path)&&(i=!0)),o--}if(s){if(i)return JC(t),!0;if(r.snap)t.visibleWrites=lp(t.visibleWrites,r.path);else{const l=r.children;Ne(l,a=>{t.visibleWrites=lp(t.visibleWrites,ce(r.path,a))})}return!0}else return!1}function XC(t,e){if(t.snap)return ot(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ot(ce(t.path,n),e))return!0;return!1}function JC(t){t.visibleWrites=Y_(t.allWrites,ZC,B()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function ZC(t){return t.visible}function Y_(t,e,n){let r=Ct.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let l;if(i.snap)ot(n,o)?(l=Me(n,o),r=Js(r,l,i.snap)):ot(o,n)&&(l=Me(o,n),r=Js(r,B(),i.snap.getChild(l)));else if(i.children){if(ot(n,o))l=Me(n,o),r=ac(r,l,i.children);else if(ot(o,n))if(l=Me(o,n),F(l))r=ac(r,B(),i.children);else{const a=hr(i.children,j(l));if(a){const u=a.getChild(X(l));r=Js(r,B(),u)}}}else throw ds("WriteRecord should have .snap or .children")}}return r}function X_(t,e,n,r,s){if(!r&&!s){const i=Er(t.visibleWrites,e);if(i!=null)return i;{const o=Pn(t.visibleWrites,e);if(cc(o))return n;if(n==null&&!uc(o,B()))return null;{const l=n||A.EMPTY_NODE;return is(o,l)}}}else{const i=Pn(t.visibleWrites,e);if(!s&&cc(i))return n;if(!s&&n==null&&!uc(i,B()))return null;{const o=function(u){return(u.visible||s)&&(!r||!~r.indexOf(u.writeId))&&(ot(u.path,e)||ot(e,u.path))},l=Y_(t.allWrites,o,e),a=n||A.EMPTY_NODE;return is(l,a)}}}function e1(t,e,n){let r=A.EMPTY_NODE;const s=Er(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(se,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=Pn(t.visibleWrites,e);return n.forEachChild(se,(o,l)=>{const a=is(Pn(i,new H(o)),l);r=r.updateImmediateChild(o,a)}),ap(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=Pn(t.visibleWrites,e);return ap(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function t1(t,e,n,r,s){E(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=ce(e,n);if(uc(t.visibleWrites,i))return null;{const o=Pn(t.visibleWrites,i);return cc(o)?s.getChild(n):is(o,s.getChild(n))}}function n1(t,e,n,r){const s=ce(e,n),i=Er(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=Pn(t.visibleWrites,s);return is(o,r.getNode().getImmediateChild(n))}else return null}function r1(t,e){return Er(t.visibleWrites,e)}function s1(t,e,n,r,s,i,o){let l;const a=Pn(t.visibleWrites,e),u=Er(a,B());if(u!=null)l=u;else if(n!=null)l=is(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],h=o.getCompare(),f=i?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let _=f.getNext();for(;_&&d.length<s;)h(_,r)!==0&&d.push(_),_=f.getNext();return d}else return[]}function i1(){return{visibleWrites:Ct.empty(),allWrites:[],lastWriteId:-1}}function vl(t,e,n,r){return X_(t.writeTree,t.treePath,e,n,r)}function jd(t,e){return e1(t.writeTree,t.treePath,e)}function up(t,e,n,r){return t1(t.writeTree,t.treePath,e,n,r)}function yl(t,e){return r1(t.writeTree,ce(t.treePath,e))}function o1(t,e,n,r,s,i){return s1(t.writeTree,t.treePath,e,n,r,s,i)}function Fd(t,e,n){return n1(t.writeTree,t.treePath,e,n)}function J_(t,e){return Z_(ce(t.treePath,e),t.writeTree)}function Z_(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;E(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),E(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,ki(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,Si(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,rs(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,ki(r,e.snapshotNode,s.oldSnap));else throw ds("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const ev=new a1;class Ud{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Mn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Fd(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:gr(this.viewCache_),i=o1(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u1(t){return{filter:t}}function c1(t,e){E(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),E(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function d1(t,e,n,r,s){const i=new l1;let o,l;if(n.type===wt.OVERWRITE){const u=n;u.source.fromUser?o=dc(t,e,u.path,u.snap,r,s,i):(E(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!F(u.path),o=wl(t,e,u.path,u.snap,r,s,l,i))}else if(n.type===wt.MERGE){const u=n;u.source.fromUser?o=f1(t,e,u.path,u.children,r,s,i):(E(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=hc(t,e,u.path,u.children,r,s,l,i))}else if(n.type===wt.ACK_USER_WRITE){const u=n;u.revert?o=g1(t,e,u.path,r,s,i):o=p1(t,e,u.path,u.affectedTree,r,s,i)}else if(n.type===wt.LISTEN_COMPLETE)o=m1(t,e,n.path,r,i);else throw ds("Unknown operation type: "+n.type);const a=i.getChanges();return h1(e,o,a),{viewCache:o,changes:a}}function h1(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=_l(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(q_(_l(e)))}}function tv(t,e,n,r,s,i){const o=e.eventCache;if(yl(r,n)!=null)return e;{let l,a;if(F(n))if(E(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=gr(e),d=u instanceof A?u:A.EMPTY_NODE,h=jd(r,d);l=t.filter.updateFullNode(e.eventCache.getNode(),h,i)}else{const u=vl(r,gr(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=j(n);if(u===".priority"){E(Ln(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=e.serverCache.getNode();const h=up(r,n,d,a);h!=null?l=t.filter.updatePriority(d,h):l=o.getNode()}else{const d=X(n);let h;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const f=up(r,n,o.getNode(),a);f!=null?h=o.getNode().getImmediateChild(u).updateChild(d,f):h=o.getNode().getImmediateChild(u)}else h=Fd(r,u,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),u,h,d,s,i):l=o.getNode()}}return Xs(e,l,o.isFullyInitialized()||F(n),t.filter.filtersNodes())}}function wl(t,e,n,r,s,i,o,l){const a=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(F(n))u=d.updateFullNode(a.getNode(),r,null);else if(d.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,r);u=d.updateFullNode(a.getNode(),_,null)}else{const _=j(n);if(!a.isCompleteForPath(n)&&Ln(n)>1)return e;const v=X(n),b=a.getNode().getImmediateChild(_).updateChild(v,r);_===".priority"?u=d.updatePriority(a.getNode(),b):u=d.updateChild(a.getNode(),_,b,v,ev,null)}const h=K_(e,u,a.isFullyInitialized()||F(n),d.filtersNodes()),f=new Ud(s,h,i);return tv(t,h,n,s,f,l)}function dc(t,e,n,r,s,i,o){const l=e.eventCache;let a,u;const d=new Ud(s,e,i);if(F(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Xs(e,u,!0,t.filter.filtersNodes());else{const h=j(n);if(h===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=Xs(e,u,l.isFullyInitialized(),l.isFiltered());else{const f=X(n),_=l.getNode().getImmediateChild(h);let v;if(F(f))v=r;else{const y=d.getCompleteChild(h);y!=null?Nd(f)===".priority"&&y.getChild(F_(f)).isEmpty()?v=y:v=y.updateChild(f,r):v=A.EMPTY_NODE}if(_.equals(v))a=e;else{const y=t.filter.updateChild(l.getNode(),h,v,f,d,o);a=Xs(e,y,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function cp(t,e){return t.eventCache.isCompleteForChild(e)}function f1(t,e,n,r,s,i,o){let l=e;return r.foreach((a,u)=>{const d=ce(n,a);cp(e,j(d))&&(l=dc(t,l,d,u,s,i,o))}),r.foreach((a,u)=>{const d=ce(n,a);cp(e,j(d))||(l=dc(t,l,d,u,s,i,o))}),l}function dp(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function hc(t,e,n,r,s,i,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;F(n)?u=r:u=new Y(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((h,f)=>{if(d.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),v=dp(t,_,f);a=wl(t,a,new H(h),v,s,i,o,l)}}),u.children.inorderTraversal((h,f)=>{const _=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!d.hasChild(h)&&!_){const v=e.serverCache.getNode().getImmediateChild(h),y=dp(t,v,f);a=wl(t,a,new H(h),y,s,i,o,l)}}),a}function p1(t,e,n,r,s,i,o){if(yl(s,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(F(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return wl(t,e,n,a.getNode().getChild(n),s,i,l,o);if(F(n)){let u=new Y(null);return a.getNode().forEachChild(or,(d,h)=>{u=u.set(new H(d),h)}),hc(t,e,n,u,s,i,l,o)}else return e}else{let u=new Y(null);return r.foreach((d,h)=>{const f=ce(n,d);a.isCompleteForPath(f)&&(u=u.set(d,a.getNode().getChild(f)))}),hc(t,e,n,u,s,i,l,o)}}function m1(t,e,n,r,s){const i=e.serverCache,o=K_(e,i.getNode(),i.isFullyInitialized()||F(n),i.isFiltered());return tv(t,o,n,r,ev,s)}function g1(t,e,n,r,s,i){let o;if(yl(r,n)!=null)return e;{const l=new Ud(r,e,s),a=e.eventCache.getNode();let u;if(F(n)||j(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=vl(r,gr(e));else{const h=e.serverCache.getNode();E(h instanceof A,"serverChildren would be complete if leaf node"),d=jd(r,h)}d=d,u=t.filter.updateFullNode(a,d,i)}else{const d=j(n);let h=Fd(r,d,e.serverCache);h==null&&e.serverCache.isCompleteForChild(d)&&(h=a.getImmediateChild(d)),h!=null?u=t.filter.updateChild(a,d,h,X(n),l,i):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(a,d,A.EMPTY_NODE,X(n),l,i):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=vl(r,gr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||yl(r,B())!=null,Xs(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _1{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new Ad(r.getIndex()),i=AC(r);this.processor_=u1(i);const o=n.serverCache,l=n.eventCache,a=s.updateFullNode(A.EMPTY_NODE,o.getNode(),null),u=i.updateFullNode(A.EMPTY_NODE,l.getNode(),null),d=new Mn(a,o.isFullyInitialized(),s.filtersNodes()),h=new Mn(u,l.isFullyInitialized(),i.filtersNodes());this.viewCache_=Yl(h,d),this.eventGenerator_=new WC(this.query_)}get query(){return this.query_}}function v1(t){return t.viewCache_.serverCache.getNode()}function y1(t){return _l(t.viewCache_)}function w1(t,e){const n=gr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!F(e)&&!n.getImmediateChild(j(e)).isEmpty())?n.getChild(e):null}function hp(t){return t.eventRegistrations_.length===0}function x1(t,e){t.eventRegistrations_.push(e)}function fp(t,e,n){const r=[];if(n){E(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(n,s);o&&r.push(o)})}if(e){let s=[];for(let i=0;i<t.eventRegistrations_.length;++i){const o=t.eventRegistrations_[i];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(i+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return r}function pp(t,e,n,r){e.type===wt.MERGE&&e.source.queryId!==null&&(E(gr(t.viewCache_),"We should always have a full cache before handling merges"),E(_l(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=d1(t.processor_,s,e,n,r);return c1(t.processor_,i.viewCache),E(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,nv(t,i.changes,i.viewCache.eventCache.getNode(),null)}function E1(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(se,(i,o)=>{r.push(rs(i,o))}),n.isFullyInitialized()&&r.push(q_(n.getNode())),nv(t,r,n.getNode(),e)}function nv(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return BC(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xl;class rv{constructor(){this.views=new Map}}function C1(t){E(!xl,"__referenceConstructor has already been defined"),xl=t}function S1(){return E(xl,"Reference.ts has not been loaded"),xl}function k1(t){return t.views.size===0}function zd(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return E(i!=null,"SyncTree gave us an op for an invalid query."),pp(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(pp(o,e,n,r));return i}}function sv(t,e,n,r,s){const i=e._queryIdentifier,o=t.views.get(i);if(!o){let l=vl(n,s?r:null),a=!1;l?a=!0:r instanceof A?(l=jd(n,r),a=!1):(l=A.EMPTY_NODE,a=!1);const u=Yl(new Mn(l,a,!1),new Mn(r,s,!1));return new _1(e,u)}return o}function I1(t,e,n,r,s,i){const o=sv(t,e,r,s,i);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),x1(o,n),E1(o,n)}function N1(t,e,n,r){const s=e._queryIdentifier,i=[];let o=[];const l=jn(t);if(s==="default")for(const[a,u]of t.views.entries())o=o.concat(fp(u,n,r)),hp(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||i.push(u.query));else{const a=t.views.get(s);a&&(o=o.concat(fp(a,n,r)),hp(a)&&(t.views.delete(s),a.query._queryParams.loadsAllData()||i.push(a.query)))}return l&&!jn(t)&&i.push(new(S1())(e._repo,e._path)),{removed:i,events:o}}function iv(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Rn(t,e){let n=null;for(const r of t.views.values())n=n||w1(r,e);return n}function ov(t,e){if(e._queryParams.loadsAllData())return Jl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function lv(t,e){return ov(t,e)!=null}function jn(t){return Jl(t)!=null}function Jl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let El;function T1(t){E(!El,"__referenceConstructor has already been defined"),El=t}function b1(){return E(El,"Reference.ts has not been loaded"),El}let P1=1;class mp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Y(null),this.pendingWriteTree_=i1(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Vd(t,e,n,r,s){return GC(t.pendingWriteTree_,e,n,r,s),s?gs(t,new mr(Dd(),e,n)):[]}function R1(t,e,n,r){KC(t.pendingWriteTree_,e,n,r);const s=Y.fromObject(n);return gs(t,new ss(Dd(),e,s))}function _n(t,e,n=!1){const r=QC(t.pendingWriteTree_,e);if(YC(t.pendingWriteTree_,e)){let i=new Y(null);return r.snap!=null?i=i.set(B(),!0):Ne(r.children,o=>{i=i.set(new H(o),!0)}),gs(t,new gl(r.path,i,n))}else return[]}function Vi(t,e,n){return gs(t,new mr(Ld(),e,n))}function A1(t,e,n){const r=Y.fromObject(n);return gs(t,new ss(Ld(),e,r))}function O1(t,e){return gs(t,new Ni(Ld(),e))}function D1(t,e,n){const r=Wd(t,n);if(r){const s=Bd(r),i=s.path,o=s.queryId,l=Me(i,e),a=new Ni(Md(o),l);return $d(t,i,a)}else return[]}function Cl(t,e,n,r,s=!1){const i=e._path,o=t.syncPointTree_.get(i);let l=[];if(o&&(e._queryIdentifier==="default"||lv(o,e))){const a=N1(o,e,n,r);k1(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const u=a.removed;if(l=a.events,!s){const d=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(i,(f,_)=>jn(_));if(d&&!h){const f=t.syncPointTree_.subtree(i);if(!f.isEmpty()){const _=j1(f);for(let v=0;v<_.length;++v){const y=_[v],b=y.query,g=dv(t,y);t.listenProvider_.startListening(Zs(b),Ti(t,b),g.hashFn,g.onComplete)}}}!h&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(Zs(e),null):u.forEach(f=>{const _=t.queryToTagMap.get(ea(f));t.listenProvider_.stopListening(Zs(f),_)}))}F1(t,u)}return l}function av(t,e,n,r){const s=Wd(t,r);if(s!=null){const i=Bd(s),o=i.path,l=i.queryId,a=Me(o,e),u=new mr(Md(l),a,n);return $d(t,o,u)}else return[]}function L1(t,e,n,r){const s=Wd(t,r);if(s){const i=Bd(s),o=i.path,l=i.queryId,a=Me(o,e),u=Y.fromObject(n),d=new ss(Md(l),a,u);return $d(t,o,d)}else return[]}function fc(t,e,n,r=!1){const s=e._path;let i=null,o=!1;t.syncPointTree_.foreachOnPath(s,(f,_)=>{const v=Me(f,s);i=i||Rn(_,v),o=o||jn(_)});let l=t.syncPointTree_.get(s);l?(o=o||jn(l),i=i||Rn(l,B())):(l=new rv,t.syncPointTree_=t.syncPointTree_.set(s,l));let a;i!=null?a=!0:(a=!1,i=A.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((_,v)=>{const y=Rn(v,B());y&&(i=i.updateImmediateChild(_,y))}));const u=lv(l,e);if(!u&&!e._queryParams.loadsAllData()){const f=ea(e);E(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const _=U1();t.queryToTagMap.set(f,_),t.tagToQueryMap.set(_,f)}const d=Xl(t.pendingWriteTree_,s);let h=I1(l,e,n,d,i,a);if(!u&&!o&&!r){const f=ov(l,e);h=h.concat(z1(t,e,f))}return h}function Zl(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Me(o,e),u=Rn(l,a);if(u)return u});return X_(s,e,i,n,!0)}function M1(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,d)=>{const h=Me(u,n);r=r||Rn(d,h)});let s=t.syncPointTree_.get(n);s?r=r||Rn(s,B()):(s=new rv,t.syncPointTree_=t.syncPointTree_.set(n,s));const i=r!=null,o=i?new Mn(r,!0,!1):null,l=Xl(t.pendingWriteTree_,e._path),a=sv(s,e,l,i?o.getNode():A.EMPTY_NODE,i);return y1(a)}function gs(t,e){return uv(e,t.syncPointTree_,null,Xl(t.pendingWriteTree_,B()))}function uv(t,e,n,r){if(F(t.path))return cv(t,e,n,r);{const s=e.get(B());n==null&&s!=null&&(n=Rn(s,B()));let i=[];const o=j(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,d=J_(r,o);i=i.concat(uv(l,a,u,d))}return s&&(i=i.concat(zd(s,t,r,n))),i}}function cv(t,e,n,r){const s=e.get(B());n==null&&s!=null&&(n=Rn(s,B()));let i=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=J_(r,o),d=t.operationForChild(o);d&&(i=i.concat(cv(d,l,a,u)))}),s&&(i=i.concat(zd(s,t,r,n))),i}function dv(t,e){const n=e.query,r=Ti(t,n);return{hashFn:()=>(v1(e)||A.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?D1(t,n._path,r):O1(t,n._path);{const i=AE(s,n);return Cl(t,n,null,i)}}}}function Ti(t,e){const n=ea(e);return t.queryToTagMap.get(n)}function ea(t){return t._path.toString()+"$"+t._queryIdentifier}function Wd(t,e){return t.tagToQueryMap.get(e)}function Bd(t){const e=t.indexOf("$");return E(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new H(t.substr(0,e))}}function $d(t,e,n){const r=t.syncPointTree_.get(e);E(r,"Missing sync point for query tag that we're tracking");const s=Xl(t.pendingWriteTree_,e);return zd(r,n,s,null)}function j1(t){return t.fold((e,n,r)=>{if(n&&jn(n))return[Jl(n)];{let s=[];return n&&(s=iv(n)),Ne(r,(i,o)=>{s=s.concat(o)}),s}})}function Zs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(b1())(t._repo,t._path):t}function F1(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const s=ea(r),i=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(i)}}}function U1(){return P1++}function z1(t,e,n){const r=e._path,s=Ti(t,e),i=dv(t,n),o=t.listenProvider_.startListening(Zs(e),s,i.hashFn,i.onComplete),l=t.syncPointTree_.subtree(r);if(s)E(!jn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,d,h)=>{if(!F(u)&&d&&jn(d))return[Jl(d).query];{let f=[];return d&&(f=f.concat(iv(d).map(_=>_.query))),Ne(h,(_,v)=>{f=f.concat(v)}),f}});for(let u=0;u<a.length;++u){const d=a[u];t.listenProvider_.stopListening(Zs(d),Ti(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Hd(n)}node(){return this.node_}}class qd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ce(this.path_,e);return new qd(this.syncTree_,n)}node(){return Zl(this.syncTree_,this.path_)}}const V1=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},gp=function(t,e,n){if(!t||typeof t!="object")return t;if(E(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return W1(t[".sv"],e,n);if(typeof t[".sv"]=="object")return B1(t[".sv"],e);E(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},W1=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:E(!1,"Unexpected server value: "+t)}},B1=function(t,e,n){t.hasOwnProperty("increment")||E(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&E(!1,"Unexpected increment value: "+r);const s=e.node();if(E(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},hv=function(t,e,n,r){return Kd(e,new qd(n,t),r)},Gd=function(t,e,n){return Kd(t,new Hd(e),n)};function Kd(t,e,n){const r=t.getPriority().val(),s=gp(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,l=gp(o.getValue(),e,n);return l!==o.getValue()||s!==o.getPriority().val()?new ye(l,pe(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new ye(s))),o.forEachChild(se,(l,a)=>{const u=Kd(a,e.getImmediateChild(l),n);u!==a&&(i=i.updateImmediateChild(l,u))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function ta(t,e){let n=e instanceof H?e:new H(e),r=t,s=j(n);for(;s!==null;){const i=hr(r.node.children,s)||{children:{},childCount:0};r=new Qd(s,r,i),n=X(n),s=j(n)}return r}function Cr(t){return t.node.value}function Yd(t,e){t.node.value=e,pc(t)}function fv(t){return t.node.childCount>0}function $1(t){return Cr(t)===void 0&&!fv(t)}function na(t,e){Ne(t.node.children,(n,r)=>{e(new Qd(n,t,r))})}function pv(t,e,n,r){n&&e(t),na(t,s=>{pv(s,e,!0)})}function H1(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Wi(t){return new H(t.parent===null?t.name:Wi(t.parent)+"/"+t.name)}function pc(t){t.parent!==null&&q1(t.parent,t.name,t)}function q1(t,e,n){const r=$1(n),s=It(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,pc(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,pc(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G1=/[\[\].#$\/\u0000-\u001F\u007F]/,K1=/[\[\].#$\u0000-\u001F\u007F]/,eu=10*1024*1024,Xd=function(t){return typeof t=="string"&&t.length!==0&&!G1.test(t)},mv=function(t){return typeof t=="string"&&t.length!==0&&!K1.test(t)},Q1=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),mv(t)},Sl=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Ed(t)||t&&typeof t=="object"&&It(t,".sv")},Jd=function(t,e,n,r){r&&e===void 0||Bi(Gl(t,"value"),e,n)},Bi=function(t,e,n){const r=n instanceof H?new hC(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Xn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Xn(r)+" with contents = "+e.toString());if(Ed(e))throw new Error(t+"contains "+e.toString()+" "+Xn(r));if(typeof e=="string"&&e.length>eu/3&&Kl(e)>eu)throw new Error(t+"contains a string greater than "+eu+" utf8 bytes "+Xn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(Ne(e,(o,l)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!Xd(o)))throw new Error(t+" contains an invalid key ("+o+") "+Xn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);fC(r,o),Bi(t,l,r),pC(r)}),s&&i)throw new Error(t+' contains ".value" child '+Xn(r)+" in addition to actual children.")}},Y1=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const i=Ci(r);for(let o=0;o<i.length;o++)if(!(i[o]===".priority"&&o===i.length-1)){if(!Xd(i[o]))throw new Error(t+"contains an invalid key ("+i[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(dC);let s=null;for(n=0;n<e.length;n++){if(r=e[n],s!==null&&ot(s,r))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},X1=function(t,e,n,r){const s=Gl(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const i=[];Ne(e,(o,l)=>{const a=new H(o);if(Bi(s,l,ce(n,a)),Nd(a)===".priority"&&!Sl(l))throw new Error(s+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");i.push(a)}),Y1(s,i)},Zd=function(t,e,n,r){if(!mv(n))throw new Error(Gl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},J1=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Zd(t,e,n)},ra=function(t,e){if(j(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Z1=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Xd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Q1(n))throw new Error(Gl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function sa(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!Td(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function gv(t,e,n){sa(t,n),_v(t,r=>Td(r,e))}function et(t,e,n){sa(t,n),_v(t,r=>ot(r,e)||ot(e,r))}function _v(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(tS(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function tS(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Qs&&Se("event: "+n.toString()),ms(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS="repo_interrupt",rS=25;class sS{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new eS,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ml(),this.transactionQueueTree_=new Qd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function iS(t,e,n){if(t.stats_=kd(t.repoInfo_),t.forceRestClient_||ME())t.server_=new pl(t.repoInfo_,(r,s,i,o)=>{_p(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>vp(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{_e(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Kt(t.repoInfo_,e,(r,s,i,o)=>{_p(t,r,s,i,o)},r=>{vp(t,r)},r=>{oS(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=VE(t.repoInfo_,()=>new VC(t.stats_,t.server_)),t.infoData_=new MC,t.infoSyncTree_=new mp({startListening:(r,s,i,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Vi(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),eh(t,"connected",!1),t.serverSyncTree_=new mp({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(l,a)=>{const u=o(l,a);et(t.eventQueue_,r._path,u)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function vv(t){const n=t.infoData_.getNode(new H(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function $i(t){return V1({timestamp:vv(t)})}function _p(t,e,n,r,s){t.dataUpdateCount++;const i=new H(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const a=al(n,u=>pe(u));o=L1(t.serverSyncTree_,i,a,s)}else{const a=pe(n);o=av(t.serverSyncTree_,i,a,s)}else if(r){const a=al(n,u=>pe(u));o=A1(t.serverSyncTree_,i,a)}else{const a=pe(n);o=Vi(t.serverSyncTree_,i,a)}let l=i;o.length>0&&(l=os(t,i)),et(t.eventQueue_,l,o)}function vp(t,e){eh(t,"connected",e),e===!1&&cS(t)}function oS(t,e){Ne(e,(n,r)=>{eh(t,n,r)})}function eh(t,e,n){const r=new H("/.info/"+e),s=pe(n);t.infoData_.updateSnapshot(r,s);const i=Vi(t.infoSyncTree_,r,s);et(t.eventQueue_,r,i)}function ia(t){return t.nextWriteId_++}function lS(t,e,n){const r=M1(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(s=>{const i=pe(s).withIndex(e._queryParams.getIndex());fc(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Vi(t.serverSyncTree_,e._path,i);else{const l=Ti(t.serverSyncTree_,e);o=av(t.serverSyncTree_,e._path,i,l)}return et(t.eventQueue_,e._path,o),Cl(t.serverSyncTree_,e,n,null,!0),i},s=>(_s(t,"get for query "+_e(e)+" failed: "+s),Promise.reject(new Error(s))))}function aS(t,e,n,r,s){_s(t,"set",{path:e.toString(),value:n,priority:r});const i=$i(t),o=pe(n,r),l=Zl(t.serverSyncTree_,e),a=Gd(o,l,i),u=ia(t),d=Vd(t.serverSyncTree_,e,a,u,!0);sa(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(f,_)=>{const v=f==="ok";v||Ue("set at "+e+" failed: "+f);const y=_n(t.serverSyncTree_,u,!v);et(t.eventQueue_,e,y),mc(t,s,f,_)});const h=nh(t,e);os(t,h),et(t.eventQueue_,h,[])}function uS(t,e,n,r){_s(t,"update",{path:e.toString(),value:n});let s=!0;const i=$i(t),o={};if(Ne(n,(l,a)=>{s=!1,o[l]=hv(ce(e,l),pe(a),t.serverSyncTree_,i)}),s)Se("update() called with empty data.  Don't do anything."),mc(t,r,"ok",void 0);else{const l=ia(t),a=R1(t.serverSyncTree_,e,o,l);sa(t.eventQueue_,a),t.server_.merge(e.toString(),n,(u,d)=>{const h=u==="ok";h||Ue("update at "+e+" failed: "+u);const f=_n(t.serverSyncTree_,l,!h),_=f.length>0?os(t,e):e;et(t.eventQueue_,_,f),mc(t,r,u,d)}),Ne(n,u=>{const d=nh(t,ce(e,u));os(t,d)}),et(t.eventQueue_,e,[])}}function cS(t){_s(t,"onDisconnectEvents");const e=$i(t),n=ml();lc(t.onDisconnect_,B(),(s,i)=>{const o=hv(s,i,t.serverSyncTree_,e);G_(n,s,o)});let r=[];lc(n,B(),(s,i)=>{r=r.concat(Vi(t.serverSyncTree_,s,i));const o=nh(t,s);os(t,o)}),t.onDisconnect_=ml(),et(t.eventQueue_,B(),r)}function dS(t,e,n){let r;j(e._path)===".info"?r=fc(t.infoSyncTree_,e,n):r=fc(t.serverSyncTree_,e,n),gv(t.eventQueue_,e._path,r)}function hS(t,e,n){let r;j(e._path)===".info"?r=Cl(t.infoSyncTree_,e,n):r=Cl(t.serverSyncTree_,e,n),gv(t.eventQueue_,e._path,r)}function fS(t){t.persistentConnection_&&t.persistentConnection_.interrupt(nS)}function _s(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Se(n,...e)}function mc(t,e,n,r){e&&ms(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let i=s;r&&(i+=": "+r);const o=new Error(i);o.code=s,e(o)}})}function pS(t,e,n,r,s,i){_s(t,"transaction on "+e);const o={path:e,update:n,onComplete:r,status:null,order:g_(),applyLocally:i,retryCount:0,unwatcher:s,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},l=th(t,e,void 0);o.currentInputSnapshot=l;const a=o.update(l.val());if(a===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{Bi("transaction failed: Data returned ",a,o.path),o.status=0;const u=ta(t.transactionQueueTree_,e),d=Cr(u)||[];d.push(o),Yd(u,d);let h;typeof a=="object"&&a!==null&&It(a,".priority")?(h=hr(a,".priority"),E(Sl(h),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):h=(Zl(t.serverSyncTree_,e)||A.EMPTY_NODE).getPriority().val();const f=$i(t),_=pe(a,h),v=Gd(_,l,f);o.currentOutputSnapshotRaw=_,o.currentOutputSnapshotResolved=v,o.currentWriteId=ia(t);const y=Vd(t.serverSyncTree_,e,v,o.currentWriteId,o.applyLocally);et(t.eventQueue_,e,y),oa(t,t.transactionQueueTree_)}}function th(t,e,n){return Zl(t.serverSyncTree_,e,n)||A.EMPTY_NODE}function oa(t,e=t.transactionQueueTree_){if(e||la(t,e),Cr(e)){const n=wv(t,e);E(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&mS(t,Wi(e),n)}else fv(e)&&na(e,n=>{oa(t,n)})}function mS(t,e,n){const r=n.map(u=>u.currentWriteId),s=th(t,e,r);let i=s;const o=s.hash();for(let u=0;u<n.length;u++){const d=n[u];E(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const h=Me(e,d.path);i=i.updateChild(h,d.currentOutputSnapshotRaw)}const l=i.val(!0),a=e;t.server_.put(a.toString(),l,u=>{_s(t,"transaction put response",{path:a.toString(),status:u});let d=[];if(u==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,d=d.concat(_n(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();la(t,ta(t.transactionQueueTree_,e)),oa(t,t.transactionQueueTree_),et(t.eventQueue_,e,d);for(let f=0;f<h.length;f++)ms(h[f])}else{if(u==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Ue("transaction at "+a.toString()+" failed: "+u);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=u}os(t,e)}},o)}function os(t,e){const n=yv(t,e),r=Wi(n),s=wv(t,n);return gS(t,s,r),r}function gS(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=Me(n,a.path);let d=!1,h;if(E(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,h=a.abortReason,s=s.concat(_n(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=rS)d=!0,h="maxretry",s=s.concat(_n(t.serverSyncTree_,a.currentWriteId,!0));else{const f=th(t,a.path,o);a.currentInputSnapshot=f;const _=e[l].update(f.val());if(_!==void 0){Bi("transaction failed: Data returned ",_,a.path);let v=pe(_);typeof _=="object"&&_!=null&&It(_,".priority")||(v=v.updatePriority(f.getPriority()));const b=a.currentWriteId,g=$i(t),m=Gd(v,f,g);a.currentOutputSnapshotRaw=v,a.currentOutputSnapshotResolved=m,a.currentWriteId=ia(t),o.splice(o.indexOf(b),1),s=s.concat(Vd(t.serverSyncTree_,a.path,m,a.currentWriteId,a.applyLocally)),s=s.concat(_n(t.serverSyncTree_,b,!0))}else d=!0,h="nodata",s=s.concat(_n(t.serverSyncTree_,a.currentWriteId,!0))}et(t.eventQueue_,n,s),s=[],d&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(h),!1,null))))}la(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)ms(r[l]);oa(t,t.transactionQueueTree_)}function yv(t,e){let n,r=t.transactionQueueTree_;for(n=j(e);n!==null&&Cr(r)===void 0;)r=ta(r,n),e=X(e),n=j(e);return r}function wv(t,e){const n=[];return xv(t,e,n),n.sort((r,s)=>r.order-s.order),n}function xv(t,e,n){const r=Cr(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);na(e,s=>{xv(t,s,n)})}function la(t,e){const n=Cr(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,Yd(e,n.length>0?n:void 0)}na(e,r=>{la(t,r)})}function nh(t,e){const n=Wi(yv(t,e)),r=ta(t.transactionQueueTree_,e);return H1(r,s=>{tu(t,s)}),tu(t,r),pv(r,s=>{tu(t,s)}),n}function tu(t,e){const n=Cr(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(E(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(E(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(_n(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?Yd(e,void 0):n.length=i+1,et(t.eventQueue_,Wi(e),s);for(let o=0;o<r.length;o++)ms(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _S(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function vS(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ue(`Invalid query segment '${n}' in query '${t}'`)}return e}const yp=function(t,e){const n=yS(t),r=n.namespace;n.domain==="firebase.com"&&tn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&tn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||NE();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new b_(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new H(n.pathString)}},yS=function(t){let e="",n="",r="",s="",i="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(d,h)),d<h&&(s=_S(t.substring(d,h)));const f=vS(t.substring(Math.min(t.length,h)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const _=e.slice(0,u);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),i=r}"ns"in f&&(i=f.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:s,namespace:i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",wS=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let s;const i=new Array(8);for(s=7;s>=0;s--)i[s]=wp.charAt(n%64),n=Math.floor(n/64);E(n===0,"Cannot push at time == 0");let o=i.join("");if(r){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=wp.charAt(e[s]);return E(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(e,n,r,s){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+_e(this.snapshot.exportVal())}}class ES{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return E(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return F(this._path)?null:Nd(this._path)}get ref(){return new Dt(this._repo,this._path)}get _queryIdentifier(){const e=ip(this._queryParams),n=Cd(e);return n==="{}"?"default":n}get _queryObject(){return ip(this._queryParams)}isEqual(e){if(e=Te(e),!(e instanceof vs))return!1;const n=this._repo===e._repo,r=Td(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+cC(this._path)}}function CS(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function Cv(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===or){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",s="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==pr)throw new Error(r);if(typeof e!="string")throw new Error(s)}if(t.hasEnd()){if(t.getIndexEndName()!==Dn)throw new Error(r);if(typeof n!="string")throw new Error(s)}}else if(t.getIndex()===se){if(e!=null&&!Sl(e)||n!=null&&!Sl(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(E(t.getIndex()instanceof Rd||t.getIndex()===H_,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function SS(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Dt extends vs{constructor(e,n){super(e,n,new Od,!1)}get parent(){const e=F_(this._path);return e===null?null:new Dt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ls{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new H(e),r=bi(this.ref,e);return new ls(this._node.getChild(n),r,se)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new ls(s,bi(this.ref,r),se)))}hasChild(e){const n=new H(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function K(t,e){return t=Te(t),t._checkNotDeleted("ref"),e!==void 0?bi(t._root,e):t._root}function bi(t,e){return t=Te(t),j(t._path)===null?J1("child","path",e):Zd("child","path",e),new Dt(t._repo,ce(t._path,e))}function ei(t,e){t=Te(t),ra("push",t._path),Jd("push",e,t._path,!0);const n=vv(t._repo),r=wS(n),s=bi(t,r),i=bi(t,r);let o;return e!=null?o=Sv(i,e).then(()=>i):o=Promise.resolve(i),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function kS(t){return ra("remove",t._path),Sv(t,null)}function Sv(t,e){t=Te(t),ra("set",t._path),Jd("set",e,t._path,!1);const n=new hs;return aS(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function vn(t,e){X1("update",e,t._path);const n=new hs;return uS(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function kv(t){t=Te(t);const e=new Ev(()=>{}),n=new aa(e);return lS(t._repo,t,n).then(r=>new ls(r,new Dt(t._repo,t._path),t._queryParams.getIndex()))}class aa{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new xS("value",this,new ls(e.snapshotNode,new Dt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new ES(this,e,n):null}matches(e){return e instanceof aa?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function IS(t,e,n,r,s){const i=new Ev(n,void 0),o=new aa(i);return dS(t._repo,t,o),()=>hS(t._repo,t,o)}function gc(t,e,n,r){return IS(t,"value",e)}class rh{}class NS extends rh{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAt"}_apply(e){Jd("startAt",this._value,e._path,!0);const n=DC(e._queryParams,this._value,this._key);if(SS(n),Cv(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new vs(e._repo,e._path,n,e._orderByCalled)}}function TS(t=null,e){return new NS(t,e)}class bS extends rh{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new vs(e._repo,e._path,OC(e._queryParams,this._limit),e._orderByCalled)}}function PS(t){if(Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new bS(t)}class RS extends rh{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){CS(e,"orderByChild");const n=new H(this._path);if(F(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new Rd(n),s=LC(e._queryParams,r);return Cv(s),new vs(e._repo,e._path,s,!0)}}function AS(t){return Zd("orderByChild","path",t),new RS(t)}function xp(t,...e){let n=Te(t);for(const r of e)n=r._apply(n);return n}C1(Dt);T1(Dt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OS="FIREBASE_DATABASE_EMULATOR_HOST",_c={};let DS=!1;function LS(t,e,n,r){t.repoInfo_=new b_(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function MS(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||tn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Se("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=yp(i,s),l=o.repoInfo,a;typeof process<"u"&&Vf&&(a=Vf[OS]),a?(i=`http://${a}?ns=${l.namespace}`,o=yp(i,s),l=o.repoInfo):o.repoInfo.secure;const u=new FE(t.name,t.options,e);Z1("Invalid Firebase Database URL",o),F(o.path)||tn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=FS(l,t,u,new jE(t.name,n));return new US(d,t)}function jS(t,e){const n=_c[e];(!n||n[t.key]!==t)&&tn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),fS(t),delete n[t.key]}function FS(t,e,n,r){let s=_c[e.name];s||(s={},_c[e.name]=s);let i=s[t.toURLString()];return i&&tn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new sS(t,DS,n,r),s[t.toURLString()]=i,i}class US{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(iS(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Dt(this._repo,B())),this._rootInternal}_delete(){return this._rootInternal!==null&&(jS(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&tn("Cannot call "+e+" on a deleted database.")}}function zS(t=d_(),e){const n=xd(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Xw("database");r&&VS(n,...r)}return n}function VS(t,e,n,r={}){t=Te(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&tn("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let i;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&tn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),i=new Po(Po.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Jw(r.mockUserToken,t.app.options.projectId);i=new Po(o)}LS(s,e,n,i)}/**
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
 */function WS(t){EE(ps),ns(new fr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return MS(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),bn(Wf,Bf,t),bn(Wf,Bf,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function $S(t,e,n){var r;if(t=Te(t),ra("Reference.transaction",t._path),t.key===".length"||t.key===".keys")throw"Reference.transaction failed: "+t.key+" is a read-only object.";const s=(r=void 0)!==null&&r!==void 0?r:!0,i=new hs,o=(a,u,d)=>{let h=null;a?i.reject(a):(h=new ls(d,new Dt(t._repo,t._path),se),i.resolve(new BS(u,h)))},l=gc(t,()=>{});return pS(t._repo,t._path,e,o,l,s),i.promise}Kt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Kt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};WS();function sh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Iv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const HS=Iv,Nv=new ji("auth","Firebase",Iv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl=new yd("@firebase/auth");function qS(t,...e){kl.logLevel<=q.WARN&&kl.warn(`Auth (${ps}): ${t}`,...e)}function Ro(t,...e){kl.logLevel<=q.ERROR&&kl.error(`Auth (${ps}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t,...e){throw oh(t,...e)}function St(t,...e){return oh(t,...e)}function ih(t,e,n){const r=Object.assign(Object.assign({},HS()),{[e]:n});return new ji("auth","Firebase",r).create(e,{appName:t.name})}function Qt(t){return ih(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function GS(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&ct(t,"argument-error"),ih(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function oh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Nv.create(t,...e)}function O(t,e,...n){if(!t)throw oh(e,...n)}function $t(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ro(e),new Error(e)}function nn(t,e){t||$t(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function KS(){return Ep()==="http:"||Ep()==="https:"}function Ep(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(KS()||ex()||"connection"in navigator)?navigator.onLine:!0}function YS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,n){this.shortDelay=e,this.longDelay=n,nn(n>e,"Short delay should be less than long delay!"),this.isMobile=vd()||o_()}get(){return QS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lh(t,e){nn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;$t("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;$t("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;$t("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JS=new Hi(3e4,6e4);function Wn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Bn(t,e,n,r,s={}){return bv(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=fs(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:a},i);return Zw()||(u.referrerPolicy="no-referrer"),Tv.fetch()(Pv(t,t.config.apiHost,n,l),u)})}async function bv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},XS),e);try{const s=new ek(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw _o(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw _o(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw _o(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw _o(t,"user-disabled",o);const d=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ih(t,d,u);ct(t,d)}}catch(s){if(s instanceof Vn)throw s;ct(t,"network-request-failed",{message:String(s)})}}async function qi(t,e,n,r,s={}){const i=await Bn(t,e,n,r,s);return"mfaPendingCredential"in i&&ct(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Pv(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?lh(t.config,s):`${t.config.apiScheme}://${s}`}function ZS(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ek{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(St(this.auth,"network-request-failed")),JS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _o(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=St(t,e,r);return s.customData._tokenResponse=n,s}function Cp(t){return t!==void 0&&t.enterprise!==void 0}class tk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return ZS(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function nk(t,e){return Bn(t,"GET","/v2/recaptchaConfig",Wn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rk(t,e){return Bn(t,"POST","/v1/accounts:delete",e)}async function Rv(t,e){return Bn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sk(t,e=!1){const n=Te(t),r=await n.getIdToken(e),s=ah(r);O(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ti(nu(s.auth_time)),issuedAtTime:ti(nu(s.iat)),expirationTime:ti(nu(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function nu(t){return Number(t)*1e3}function ah(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ro("JWT malformed, contained fewer than 3 sections"),null;try{const s=ll(n);return s?JSON.parse(s):(Ro("Failed to decode base64 JWT payload"),null)}catch(s){return Ro("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Sp(t){const e=ah(t);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Vn&&ik(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ik({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ti(this.lastLoginAt),this.creationTime=ti(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Il(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Pi(t,Rv(n,{idToken:r}));O(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Av(i.providerUserInfo):[],l=ak(t.providerData,o),a=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=a?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new yc(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,h)}async function lk(t){const e=Te(t);await Il(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ak(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Av(t){return t.map(e=>{var{providerId:n}=e,r=sh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uk(t,e){const n=await bv(t,{},async()=>{const r=fs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Pv(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Tv.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ck(t,e){return Bn(t,"POST","/v2/accounts:revokeToken",Wn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Sp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){O(e.length!==0,"internal-error");const n=Sp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(O(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await uk(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new qr;return r&&(O(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(O(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(O(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qr,this.toJSON())}_performRefresh(){return $t("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(t,e){O(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ht{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=sh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ok(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new yc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Pi(this,this.stsTokenManager.getToken(this.auth,e));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return sk(this,e)}reload(){return lk(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ht(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Il(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(yt(this.auth.app))return Promise.reject(Qt(this.auth));const e=await this.getIdToken();return await Pi(this,rk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,a,u,d;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(l=n.tenantId)!==null&&l!==void 0?l:void 0,b=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,m=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:p,emailVerified:w,isAnonymous:C,providerData:N,stsTokenManager:I}=n;O(p&&I,e,"internal-error");const T=qr.fromJSON(this.name,I);O(typeof p=="string",e,"internal-error"),ln(h,e.name),ln(f,e.name),O(typeof w=="boolean",e,"internal-error"),O(typeof C=="boolean",e,"internal-error"),ln(_,e.name),ln(v,e.name),ln(y,e.name),ln(b,e.name),ln(g,e.name),ln(m,e.name);const G=new Ht({uid:p,auth:e,email:f,emailVerified:w,displayName:h,isAnonymous:C,photoURL:v,phoneNumber:_,tenantId:y,stsTokenManager:T,createdAt:g,lastLoginAt:m});return N&&Array.isArray(N)&&(G.providerData=N.map(M=>Object.assign({},M))),b&&(G._redirectEventId=b),G}static async _fromIdTokenResponse(e,n,r=!1){const s=new qr;s.updateFromServerResponse(n);const i=new Ht({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Il(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];O(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Av(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new qr;l.updateFromIdToken(r);const a=new Ht({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new yc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(a,u),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp=new Map;function qt(t){nn(t instanceof Function,"Expected a class definition");let e=kp.get(t);return e?(nn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,kp.set(t,e),e)}/**
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
 */class Ov{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ov.type="NONE";const Ip=Ov;/**
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
 */function Ao(t,e,n){return`firebase:${t}:${e}:${n}`}class Gr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ao(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ao("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ht._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Gr(qt(Ip),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||qt(Ip);const o=Ao(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){const h=Ht._fromJSON(e,d);u!==i&&(l=h),i=u;break}}catch{}const a=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new Gr(i,e,r):(i=a[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Gr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Np(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(jv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Dv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Uv(e))return"Blackberry";if(zv(e))return"Webos";if(Lv(e))return"Safari";if((e.includes("chrome/")||Mv(e))&&!e.includes("edge/"))return"Chrome";if(Fv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Dv(t=ze()){return/firefox\//i.test(t)}function Lv(t=ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Mv(t=ze()){return/crios\//i.test(t)}function jv(t=ze()){return/iemobile/i.test(t)}function Fv(t=ze()){return/android/i.test(t)}function Uv(t=ze()){return/blackberry/i.test(t)}function zv(t=ze()){return/webos/i.test(t)}function uh(t=ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function dk(t=ze()){var e;return uh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function hk(){return tx()&&document.documentMode===10}function Vv(t=ze()){return uh(t)||Fv(t)||zv(t)||Uv(t)||/windows phone/i.test(t)||jv(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wv(t,e=[]){let n;switch(t){case"Browser":n=Np(ze());break;case"Worker":n=`${Np(ze())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ps}/${r}`}/**
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
 */class fk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const a=e(i);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function pk(t,e={}){return Bn(t,"GET","/v2/passwordPolicy",Wn(t,e))}/**
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
 */const mk=6;class gk{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:mk,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(s=a.containsLowercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(i=a.containsUppercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Tp(this),this.idTokenSubscription=new Tp(this),this.beforeStateQueue=new fk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Nv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=qt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Gr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Rv(this,{idToken:e}),r=await Ht._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(yt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Il(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=YS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(yt(this.app))return Promise.reject(Qt(this));const n=e?Te(e):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return yt(this.app)?Promise.reject(Qt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return yt(this.app)?Promise.reject(Qt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(qt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await pk(this),n=new gk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ji("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ck(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&qt(e)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await Gr.create(this,[qt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(O(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,s);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Wv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&qS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function $n(t){return Te(t)}class Tp{constructor(e){this.auth=e,this.observer=null,this.addObserver=dx(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ua={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function vk(t){ua=t}function Bv(t){return ua.loadJS(t)}function yk(){return ua.recaptchaEnterpriseScript}function wk(){return ua.gapiScript}function xk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Ek="recaptcha-enterprise",Ck="NO_RECAPTCHA";class Sk{constructor(e){this.type=Ek,this.auth=$n(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{nk(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new tk(a);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(a=>{l(a)})})}function s(i,o,l){const a=window.grecaptcha;Cp(a)?a.enterprise.ready(()=>{a.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Ck)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Cp(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=yk();a.length!==0&&(a+=l),Bv(a).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function bp(t,e,n,r=!1){const s=new Sk(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function wc(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await bp(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await bp(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kk(t,e){const n=xd(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ul(i,e??{}))return s;ct(s,"already-initialized")}return n.initialize({options:e})}function Ik(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(qt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Nk(t,e,n){const r=$n(t);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=$v(e),{host:o,port:l}=Tk(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),bk()}function $v(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Tk(t){const e=$v(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Pp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Pp(o)}}}function Pp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function bk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return $t("not implemented")}_getIdTokenResponse(e){return $t("not implemented")}_linkToIdToken(e,n){return $t("not implemented")}_getReauthenticationResolver(e){return $t("not implemented")}}async function Pk(t,e){return Bn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rk(t,e){return qi(t,"POST","/v1/accounts:signInWithPassword",Wn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ak(t,e){return qi(t,"POST","/v1/accounts:signInWithEmailLink",Wn(t,e))}async function Ok(t,e){return qi(t,"POST","/v1/accounts:signInWithEmailLink",Wn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri extends ch{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ri(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ri(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wc(e,n,"signInWithPassword",Rk);case"emailLink":return Ak(e,{email:this._email,oobCode:this._password});default:ct(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wc(e,r,"signUpPassword",Pk);case"emailLink":return Ok(e,{idToken:n,email:this._email,oobCode:this._password});default:ct(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kr(t,e){return qi(t,"POST","/v1/accounts:signInWithIdp",Wn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dk="http://localhost";class _r extends ch{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new _r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ct("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=sh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new _r(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Kr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Kr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Kr(e,n)}buildRequest(){const e={requestUri:Dk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=fs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Mk(t){const e=Fs(Us(t)).link,n=e?Fs(Us(e)).deep_link_id:null,r=Fs(Us(t)).deep_link_id;return(r?Fs(Us(r)).link:null)||r||n||e||t}class dh{constructor(e){var n,r,s,i,o,l;const a=Fs(Us(e)),u=(n=a.apiKey)!==null&&n!==void 0?n:null,d=(r=a.oobCode)!==null&&r!==void 0?r:null,h=Lk((s=a.mode)!==null&&s!==void 0?s:null);O(u&&d&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=d,this.continueUrl=(i=a.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=Mk(e);try{return new dh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(){this.providerId=ys.PROVIDER_ID}static credential(e,n){return Ri._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=dh.parseLink(n);return O(r,"argument-error"),Ri._fromEmailAndCode(e,r.code,r.tenantId)}}ys.PROVIDER_ID="password";ys.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ys.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Gi extends hh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends Gi{constructor(){super("facebook.com")}static credential(e){return _r._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hn.credential(e.oauthAccessToken)}catch{return null}}}hn.FACEBOOK_SIGN_IN_METHOD="facebook.com";hn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends Gi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return _r._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return zt.credential(n,r)}catch{return null}}}zt.GOOGLE_SIGN_IN_METHOD="google.com";zt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends Gi{constructor(){super("github.com")}static credential(e){return _r._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.GITHUB_SIGN_IN_METHOD="github.com";fn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends Gi{constructor(){super("twitter.com")}static credential(e,n){return _r._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return pn.credential(n,r)}catch{return null}}}pn.TWITTER_SIGN_IN_METHOD="twitter.com";pn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jk(t,e){return qi(t,"POST","/v1/accounts:signUp",Wn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Ht._fromIdTokenResponse(e,r,s),o=Rp(r);return new vr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Rp(r);return new vr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Rp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl extends Vn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Nl.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Nl(e,n,r,s)}}function Hv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Nl._fromErrorAndOperation(t,i,e,r):i})}async function Fk(t,e,n=!1){const r=await Pi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return vr._forOperation(t,"link",r)}/**
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
 */async function Uk(t,e,n=!1){const{auth:r}=t;if(yt(r.app))return Promise.reject(Qt(r));const s="reauthenticate";try{const i=await Pi(t,Hv(r,s,e,t),n);O(i.idToken,r,"internal-error");const o=ah(i.idToken);O(o,r,"internal-error");const{sub:l}=o;return O(t.uid===l,r,"user-mismatch"),vr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ct(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qv(t,e,n=!1){if(yt(t.app))return Promise.reject(Qt(t));const r="signIn",s=await Hv(t,r,e),i=await vr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function zk(t,e){return qv($n(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gv(t){const e=$n(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Vk(t,e,n){if(yt(t.app))return Promise.reject(Qt(t));const r=$n(t),o=await wc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",jk).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&Gv(t),a}),l=await vr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function Wk(t,e,n){return yt(t.app)?Promise.reject(Qt(t)):zk(Te(t),ys.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Gv(t),r})}function Bk(t,e,n,r){return Te(t).onIdTokenChanged(e,n,r)}function $k(t,e,n){return Te(t).beforeAuthStateChanged(e,n)}function Hk(t,e,n,r){return Te(t).onAuthStateChanged(e,n,r)}const Tl="__sak";/**
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
 */class Kv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Tl,"1"),this.storage.removeItem(Tl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qk=1e3,Gk=10;class Qv extends Kv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Vv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);hk()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Gk):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},qk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Qv.type="LOCAL";const Kk=Qv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv extends Kv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Yv.type="SESSION";const Xv=Yv;/**
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
 */function Qk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ca{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ca(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),a=await Qk(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ca.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Yk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,a)=>{const u=fh("",20);s.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(f.data.response);break;default:clearTimeout(d),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(){return window}function Xk(t){Ot().location.href=t}/**
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
 */function Jv(){return typeof Ot().WorkerGlobalScope<"u"&&typeof Ot().importScripts=="function"}async function Jk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Zk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function eI(){return Jv()?self:null}/**
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
 */const Zv="firebaseLocalStorageDb",tI=1,bl="firebaseLocalStorage",ey="fbase_key";class Ki{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function da(t,e){return t.transaction([bl],e?"readwrite":"readonly").objectStore(bl)}function nI(){const t=indexedDB.deleteDatabase(Zv);return new Ki(t).toPromise()}function xc(){const t=indexedDB.open(Zv,tI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(bl,{keyPath:ey})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(bl)?e(r):(r.close(),await nI(),e(await xc()))})})}async function Ap(t,e,n){const r=da(t,!0).put({[ey]:e,value:n});return new Ki(r).toPromise()}async function rI(t,e){const n=da(t,!1).get(e),r=await new Ki(n).toPromise();return r===void 0?null:r.value}function Op(t,e){const n=da(t,!0).delete(e);return new Ki(n).toPromise()}const sI=800,iI=3;class ty{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>iI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Jv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ca._getInstance(eI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Jk(),!this.activeServiceWorker)return;this.sender=new Yk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Zk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xc();return await Ap(e,Tl,"1"),await Op(e,Tl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ap(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>rI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Op(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=da(s,!1).getAll();return new Ki(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ty.type="LOCAL";const oI=ty;new Hi(3e4,6e4);/**
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
 */function ny(t,e){return e?qt(e):(O(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ph extends ch{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Kr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Kr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Kr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function lI(t){return qv(t.auth,new ph(t),t.bypassAuthState)}function aI(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),Uk(n,new ph(t),t.bypassAuthState)}async function uI(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),Fk(n,new ph(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lI;case"linkViaPopup":case"linkViaRedirect":return uI;case"reauthViaPopup":case"reauthViaRedirect":return aI;default:ct(this.auth,"internal-error")}}resolve(e){nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cI=new Hi(2e3,1e4);async function dI(t,e,n){if(yt(t.app))return Promise.reject(St(t,"operation-not-supported-in-this-environment"));const r=$n(t);GS(t,e,hh);const s=ny(r,n);return new nr(r,"signInViaPopup",e,s).executeNotNull()}class nr extends ry{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,nr.currentPopupAction&&nr.currentPopupAction.cancel(),nr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){nn(this.filter.length===1,"Popup operations only handle one event");const e=fh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(St(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(St(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(St(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,cI.get())};e()}}nr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI="pendingRedirect",Oo=new Map;class fI extends ry{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Oo.get(this.auth._key());if(!e){try{const r=await pI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Oo.set(this.auth._key(),e)}return this.bypassAuthState||Oo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pI(t,e){const n=_I(e),r=gI(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function mI(t,e){Oo.set(t._key(),e)}function gI(t){return qt(t._redirectPersistence)}function _I(t){return Ao(hI,t.config.apiKey,t.name)}async function vI(t,e,n=!1){if(yt(t.app))return Promise.reject(Qt(t));const r=$n(t),s=ny(r,e),o=await new fI(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI=10*60*1e3;class wI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!xI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!sy(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(St(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Dp(e))}saveEventToCache(e){this.cachedEventUids.add(Dp(e)),this.lastProcessedEventTime=Date.now()}}function Dp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function sy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function xI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sy(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EI(t,e={}){return Bn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,SI=/^https?/;async function kI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await EI(t);for(const n of e)try{if(II(n))return}catch{}ct(t,"unauthorized-domain")}function II(t){const e=vc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!SI.test(n))return!1;if(CI.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const NI=new Hi(3e4,6e4);function Lp(){const t=Ot().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function TI(t){return new Promise((e,n)=>{var r,s,i;function o(){Lp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Lp(),n(St(t,"network-request-failed"))},timeout:NI.get()})}if(!((s=(r=Ot().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ot().gapi)===null||i===void 0)&&i.load)o();else{const l=xk("iframefcb");return Ot()[l]=()=>{gapi.load?o():n(St(t,"network-request-failed"))},Bv(`${wk()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw Do=null,e})}let Do=null;function bI(t){return Do=Do||TI(t),Do}/**
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
 */const PI=new Hi(5e3,15e3),RI="__/auth/iframe",AI="emulator/auth/iframe",OI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},DI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function LI(t){const e=t.config;O(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?lh(e,AI):`https://${t.config.authDomain}/${RI}`,r={apiKey:e.apiKey,appName:t.name,v:ps},s=DI.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${fs(r).slice(1)}`}async function MI(t){const e=await bI(t),n=Ot().gapi;return O(n,t,"internal-error"),e.open({where:document.body,url:LI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:OI,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=St(t,"network-request-failed"),l=Ot().setTimeout(()=>{i(o)},PI.get());function a(){Ot().clearTimeout(l),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
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
 */const jI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},FI=500,UI=600,zI="_blank",VI="http://localhost";class Mp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function WI(t,e,n,r=FI,s=UI){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},jI),{width:r.toString(),height:s.toString(),top:i,left:o}),u=ze().toLowerCase();n&&(l=Mv(u)?zI:n),Dv(u)&&(e=e||VI,a.scrollbars="yes");const d=Object.entries(a).reduce((f,[_,v])=>`${f}${_}=${v},`,"");if(dk(u)&&l!=="_self")return BI(e||"",l),new Mp(null);const h=window.open(e||"",l,d);O(h,t,"popup-blocked");try{h.focus()}catch{}return new Mp(h)}function BI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const $I="__/auth/handler",HI="emulator/auth/handler",qI=encodeURIComponent("fac");async function jp(t,e,n,r,s,i){O(t.config.authDomain,t,"auth-domain-config-required"),O(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ps,eventId:s};if(e instanceof hh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ju(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,h]of Object.entries({}))o[d]=h}if(e instanceof Gi){const d=e.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const a=await t._getAppCheckToken(),u=a?`#${qI}=${encodeURIComponent(a)}`:"";return`${GI(t)}?${fs(l).slice(1)}${u}`}function GI({config:t}){return t.emulator?lh(t,HI):`https://${t.authDomain}/${$I}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru="webStorageSupport";class KI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xv,this._completeRedirectFn=vI,this._overrideRedirectResult=mI}async _openPopup(e,n,r,s){var i;nn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await jp(e,n,r,vc(),s);return WI(e,o,fh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await jp(e,n,r,vc(),s);return Xk(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(nn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await MI(e),r=new wI(e);return n.register("authEvent",s=>(O(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ru,{type:ru},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ru];o!==void 0&&n(!!o),ct(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=kI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Vv()||Lv()||uh()}}const QI=KI;var Fp="@firebase/auth",Up="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function JI(t){ns(new fr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;O(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wv(t)},u=new _k(r,s,i,a);return Ik(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ns(new fr("auth-internal",e=>{const n=$n(e.getProvider("auth").getImmediate());return(r=>new YI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),bn(Fp,Up,XI(t)),bn(Fp,Up,"esm2017")}/**
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
 */const ZI=5*60,eN=i_("authIdTokenMaxAge")||ZI;let zp=null;const tN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>eN)return;const s=n==null?void 0:n.token;zp!==s&&(zp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function nN(t=d_()){const e=xd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=kk(t,{popupRedirectResolver:QI,persistence:[oI,Kk,Xv]}),r=i_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=tN(i.toString());$k(n,o,()=>o(n.currentUser)),Bk(n,l=>o(l))}}const s=r_("auth");return s&&Nk(n,`http://${s}`),n}function rN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}vk({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=St("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",rN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});JI("Browser");var sN="firebase",iN="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bn(sN,iN,"app");const oN={apiKey:"AIzaSyDJM-VHPdo2ipOFEecEFjxo5W_FQuQ3BAk",authDomain:"vistta-2e1df.firebaseapp.com",databaseURL:"https://vistta-2e1df-default-rtdb.firebaseio.com",projectId:"vistta-2e1df",storageBucket:"vistta-2e1df.firebasestorage.app",messagingSenderId:"13458811244",appId:"1:13458811244:web:e3517470970e9a45142b49",measurementId:"G-TJLG0CPZQM"},iy=c_(oN),Lo=nN(iy),Q=zS(iy),je=t=>Number(t||0).toLocaleString("pt-BR",{style:"currency",currency:"BRL"}),oy=R.createContext(null),Lt=()=>{const t=R.useContext(oy);if(!t)throw new Error("useAppContext deve ser usado dentro de um AppProvider");return t},lN=({children:t})=>{const[e,n]=R.useState(null),[r,s]=R.useState(!0),[i,o]=R.useState(null),[l,a]=R.useState(null),[u,d]=R.useState("dashboard"),[h,f]=R.useState(""),[_,v]=R.useState([]),[y,b]=R.useState([]),[g,m]=R.useState([]),[p,w]=R.useState([]),[C,N]=R.useState([]),[I,T]=R.useState([]),[G,M]=R.useState([]),[Qe,Hn]=R.useState([]),[qn,Qi]=R.useState([]),[pa,ws]=R.useState([]),[sn,S]=R.useState(""),[D,L]=R.useState("Pix"),[ne,de]=R.useState(0),Oe=R.useMemo(()=>C.find(P=>P.status==="aberto"),[C]),Nt=R.useMemo(()=>Oe?p.filter(P=>P.caixaId===Oe.id):[],[p,Oe]),Gn=R.useMemo(()=>Nt.reduce((P,W)=>P+(W.total||0),0),[Nt]),dt=()=>{if(!l)throw new Error("Empresa não identificada.");return l},Mt=async(P,W,he)=>{const ae=`empresas/${dt()}/${P}`;if(he){await vn(K(Q,`${ae}/${he}`),W);return}const ht=ei(K(Q,ae));await vn(K(Q,`${ae}/${ht.key}`),W)},ma=async(P,W)=>{const he=dt();await kS(K(Q,`empresas/${he}/${P}/${W}`))};R.useEffect(()=>Hk(Lo,P=>{P?gc(K(Q,`users/${P.uid}`),W=>{const he=W.val();he!=null&&he.empresaId&&(a(he.empresaId),o(he.role||"vendedor")),n(P),s(!1)}):(n(null),a(null),o(null),s(!1))}),[]),R.useEffect(()=>{if(!l)return;const P=`empresas/${l}`,W=new Date;W.setDate(1),W.setHours(0,0,0,0);const De=[{name:"produtos",setter:b,queryRef:K(Q,`${P}/produtos`)},{name:"clientes",setter:m,queryRef:K(Q,`${P}/clientes`)},{name:"fornecedores",setter:M,queryRef:K(Q,`${P}/fornecedores`)},{name:"contas",setter:Hn,queryRef:K(Q,`${P}/contas`)},{name:"categorias",setter:Qi,queryRef:K(Q,`${P}/categorias`)},{name:"usuarios",setter:ws,queryRef:K(Q,`${P}/usuarios`)},{name:"orcamentos",setter:T,queryRef:K(Q,`${P}/orcamentos`)},{name:"vendas",setter:w,queryRef:xp(K(Q,`${P}/vendas`),AS("data"),TS(W.toISOString()))},{name:"caixas",setter:N,queryRef:xp(K(Q,`${P}/caixas`),PS(100))}].map(ae=>gc(ae.queryRef,ht=>{const ft=[];ht.forEach(xs=>{ft.push({id:xs.key,...xs.val()})}),ae.setter(ft)}));return()=>De.forEach(ae=>ae())},[l]);const py={user:e,loadingAuth:r,userRole:i,empresaId:l,produtos:y,clientes:g,vendas:p,caixas:C,orcamentos:I,carrinho:_,fornecedores:G,contas:Qe,categorias:qn,usuarios:pa,activeTab:u,setActiveTab:d,pdvSearch:h,setPdvSearch:f,abrirCaixa:async P=>{if(Oe)throw new Error("Já existe um caixa aberto.");if(!Number.isFinite(P)||P<0)throw new Error("Informe um valor inicial válido.");await Mt("caixas",{dataAbertura:new Date().toISOString(),valorInicial:P,status:"aberto",operador:(e==null?void 0:e.email)||(e==null?void 0:e.uid)||"Operador"})},fecharCaixa:async()=>{const P=Oe;if(!P)throw new Error("Nenhum caixa aberto.");await vn(K(Q,`empresas/${dt()}/caixas/${P.id}`),{status:"fechado",dataFechamento:new Date().toISOString(),totalVendas:Gn,valorFinal:Number(P.valorInicial||0)+Gn})},salvarProduto:(P,W)=>Mt("produtos",P,W),excluirProduto:P=>ma("produtos",P),salvarCliente:(P,W)=>Mt("clientes",P,W),excluirCliente:P=>ma("clientes",P),salvarCadastro:(P,W,he)=>Mt(P,W,he),excluirCadastro:(P,W)=>ma(P,W),addToCart:P=>{v(W=>{const he=W.findIndex(De=>De.id===P.id);if(he>-1){const De=[...W];return De[he].qtd=Math.min(De[he].qtd+1,Number(P.qtd)),De}return[...W,{...P,qtd:1}]})},removeFromCart:P=>v(W=>W.filter(he=>he.id!==P)),finalizarVenda:async(P=!1)=>{if(_.length===0||!l)return alert("Carrinho vazio!");if(!P&&!Oe)return alert("Abra o caixa primeiro!");let W=_.reduce((ae,ht)=>ae+Number(ht.venda)*ht.qtd,0),he=_.reduce((ae,ht)=>ae+Number(ht.custo)*ht.qtd,0),De=Math.max(0,Number(ne)||0);De=Math.min(De,W);try{if(P){if(!sn)return alert("Selecione um cliente para salvar o orçamento!");await ei(K(Q,`empresas/${l}/orcamentos`),{cliId:sn,subtotal:W,desconto:De,total:W-De,itens:_.map(ae=>({id:ae.id,marca:ae.marca,modelo:ae.modelo,qtd:ae.qtd,venda:ae.venda})),data:new Date().toISOString(),status:"pendente"})}else{const ae=_.map(async ft=>{const xs=K(Q,`empresas/${l}/produtos/${ft.id}/qtd`),yh=await kv(xs),ga=Number(yh.val());if(!yh.exists()||!Number.isFinite(ga)||ga<ft.qtd)throw new Error(`Estoque insuficiente para ${ft.marca} ${ft.modelo}.`);const _a=await $S(xs,Yi=>{if(Yi===null)return Yi;const wh=Number(Yi)-ft.qtd;return wh>=0?wh:Yi}),my=Number(_a.snapshot.val());if(!_a.committed||my!==ga-ft.qtd)throw new Error(`Não foi possível reservar o estoque de ${ft.marca} ${ft.modelo}.`);return _a});await Promise.all(ae);const ht=ei(K(Q,`empresas/${l}/vendas`));await vn(K(Q,`empresas/${l}/vendas/${ht.key}`),{cliId:sn,pag:D,subtotal:W,desconto:De,total:W-De,custoBase:he,itens:_.length,data:new Date().toISOString(),caixaId:Oe==null?void 0:Oe.id})}v([]),de(0),S(""),alert(P?"Orçamento salvo!":"Venda concluída com sucesso!")}catch(ae){alert("Erro ao finalizar: "+ae.message)}},caixaAberto:Oe,totalVendasCaixa:Gn,pdvCliente:sn,setPdvCliente:S,pdvDesconto:ne,setPdvDesconto:de,pdvPagamento:D,setPdvPagamento:L};return c.jsx(oy.Provider,{value:py,children:t})};/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var aN={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uN=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=(t,e)=>{const n=R.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:l="",children:a,...u},d)=>R.createElement("svg",{ref:d,...aN,width:s,height:s,stroke:r,strokeWidth:o?Number(i)*24/Number(s):i,className:["lucide",`lucide-${uN(t)}`,l].join(" "),...u},[...e.map(([h,f])=>R.createElement(h,f)),...Array.isArray(a)?a:[a]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=te("ArrowRightLeft",[["path",{d:"m16 3 4 4-4 4",key:"1x1c3m"}],["path",{d:"M20 7H4",key:"zbl0bi"}],["path",{d:"m8 21-4-4 4-4",key:"h9nckh"}],["path",{d:"M4 17h16",key:"g4d7ey"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=te("Boxes",[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cN=te("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dN=te("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hN=te("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fN=te("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=te("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pN=te("Glasses",[["circle",{cx:"6",cy:"15",r:"4",key:"vux9w4"}],["circle",{cx:"18",cy:"15",r:"4",key:"18o8ve"}],["path",{d:"M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2",key:"1ag4bs"}],["path",{d:"M2.5 13 5 7c.7-1.3 1.4-2 3-2",key:"1hm1gs"}],["path",{d:"M21.5 13 19 7c-.7-1.3-1.5-2-3-2",key:"1r31ai"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mN=te("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pl=te("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gN=te("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _N=te("PackageOpen",[["path",{d:"M12 22v-9",key:"x3hkom"}],["path",{d:"M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z",key:"2ntwy6"}],["path",{d:"M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13",key:"1pmm1c"}],["path",{d:"M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z",key:"12ttoo"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vN=te("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=te("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ha=te("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=te("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yN=te("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wN=te("Store",[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7",key:"jon5kx"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fa=te("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=te("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=te("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xN=te("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=te("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EN=te("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=te("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function rr({title:t,value:e,subtitle:n,icon:r,bg:s="bg-white dark:bg-slate-800",color:i="text-slate-900 dark:text-white",border:o="border-slate-100 dark:border-slate-700"}){return c.jsxs("div",{className:`p-6 rounded-3xl border shadow-sm ${s} ${o}`,children:[c.jsx("div",{className:"flex items-start justify-between mb-4",children:c.jsx("div",{className:`w-12 h-12 rounded-2xl flex items-center justify-center ${s==="bg-white dark:bg-slate-800"?"bg-indigo-50 text-[#4A3AFF]":i.replace("text-","bg-").replace("500","100")+" "+i}`,children:c.jsx(r,{size:24})})}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-[13px] font-bold text-slate-500 uppercase tracking-wider mb-1",children:t}),c.jsx("div",{className:`text-2xl font-black ${i}`,children:e}),n&&c.jsx("p",{className:"text-[12px] font-medium text-slate-400 mt-1",children:n})]})]})}function vh({open:t,onClose:e,title:n,width:r="max-w-md",children:s}){return t?c.jsx("div",{className:"fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4",children:c.jsxs("div",{className:`bg-white rounded-[32px] w-full ${r} shadow-2xl flex flex-col max-h-[90vh] animate-fade-in`,children:[c.jsxs("div",{className:"flex justify-between items-center p-6 border-b border-slate-100",children:[c.jsx("h2",{className:"text-xl font-bold text-slate-800",children:n}),c.jsx("button",{onClick:e,className:"p-2 bg-slate-100 rounded-full text-slate-500 hover:text-rose-500 transition-colors",children:c.jsx(hy,{size:20})})]}),c.jsx("div",{className:"overflow-y-auto custom-scrollbar p-6",children:s})]})}):null}function fy({className:t="",solidWhite:e=!1}){const n=e?"currentColor":"white",r=e?"currentColor":"#a094ff";return c.jsxs("svg",{viewBox:"0 0 120 60",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:t,children:[c.jsxs("g",{stroke:n,strokeWidth:"8",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("circle",{cx:"38",cy:"36",r:"14"}),c.jsx("path",{d:"M 28 26 Q 16 12 10 22"})]}),c.jsxs("g",{stroke:r,strokeWidth:"8",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("circle",{cx:"82",cy:"36",r:"14"}),c.jsx("path",{d:"M 92 26 Q 104 12 110 22"}),c.jsx("path",{d:"M 52 36 Q 60 28 68 36"})]})]})}function jt({icon:t,label:e,active:n,onClick:r,badge:s,badgeColor:i}){return c.jsxs("button",{onClick:r,className:`w-full flex items-center justify-between px-4 py-3 rounded-2xl transition-all ${n?"bg-indigo-50 text-[#4A3AFF] font-bold":"text-slate-500 hover:bg-slate-100 font-medium"}`,children:[c.jsxs("div",{className:"flex items-center",children:[c.jsx(t,{size:20,className:`mr-3 ${n?"text-[#4A3AFF]":"text-slate-400"}`}),e]}),s&&c.jsx("span",{className:`px-2 py-0.5 rounded-lg text-[11px] font-bold ${i}`,children:s})]})}function su({label:t}){return c.jsx("div",{className:"px-4 py-2 mt-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider",children:t})}function CN(){const{activeTab:t,setActiveTab:e,caixaAberto:n,orcamentos:r,userRole:s}=Lt();return c.jsxs("aside",{className:"hidden md:flex flex-col w-[270px] bg-white border-r border-slate-200 z-20 shadow-sm",children:[c.jsxs("div",{className:"h-[80px] flex items-center px-6 border-b border-slate-100 flex-shrink-0",children:[c.jsx("div",{className:"w-10 h-10 rounded-xl bg-[#4A3AFF] text-white flex items-center justify-center mr-3",children:c.jsx(fy,{className:"w-7",solidWhite:!0})}),c.jsx("span",{className:"font-bold text-[18px] text-slate-900 truncate",children:"Minha Ótica"})]}),c.jsxs("div",{className:"flex-1 overflow-y-auto py-6 px-4 space-y-1",children:[c.jsx(jt,{icon:mN,label:"Dashboard",active:t==="dashboard",onClick:()=>e("dashboard")}),c.jsx(su,{label:"Operação"}),c.jsx(jt,{icon:EN,label:"Caixa Diário",active:t==="caixa",onClick:()=>e("caixa"),badge:n?"Aberto":"Fechado",badgeColor:n?"bg-emerald-100 text-emerald-700":"bg-slate-100 text-slate-500"}),c.jsx(jt,{icon:yN,label:"PDV",active:t==="vendas",onClick:()=>e("vendas")}),c.jsx(jt,{icon:uy,label:"Orçamentos",active:t==="orcamentos",onClick:()=>e("orcamentos"),badge:r.filter(i=>i.status==="pendente").length||null,badgeColor:"bg-amber-100 text-amber-700"}),c.jsx(su,{label:"Cadastros"}),c.jsx(jt,{icon:ay,label:"Estoque",active:t==="estoque",onClick:()=>e("estoque")}),c.jsx(jt,{icon:_h,label:"Clientes",active:t==="clientes",onClick:()=>e("clientes")}),s==="admin"&&c.jsxs(c.Fragment,{children:[c.jsx(su,{label:"Gestão (Admin)"}),c.jsx(jt,{icon:gh,label:"DRE Financeiro",active:t==="financeiro",onClick:()=>e("financeiro")}),c.jsx(jt,{icon:ly,label:"Contas",active:t==="contas",onClick:()=>e("contas")}),c.jsx(jt,{icon:xN,label:"Usuários",active:t==="usuarios",onClick:()=>e("usuarios")})]})]})]})}function SN(){const[t,e]=R.useState("login"),[n,r]=R.useState(!1),[s,i]=R.useState(""),[o,l]=R.useState(""),[a,u]=R.useState(""),[d,h]=R.useState(""),[f,_]=R.useState(!1),[v,y]=R.useState(!0),b=async m=>{m.preventDefault(),h(""),r(!0);try{if(t==="login")await Wk(Lo,s,o);else{const p=await Vk(Lo,s,o);try{const C=ei(K(Q,"empresas")).key;await vn(K(Q,`empresas/${C}/info`),{nome:a||"Minha Ótica",criadoEm:new Date().toISOString()}),await vn(K(Q,`users/${p.user.uid}`),{empresaId:C,role:"admin",email:s})}catch{await p.user.delete(),h("Falha ao registrar empresa no banco.")}}}catch{h(t==="login"?"E-mail ou senha incorretos.":"Erro ao autenticar.")}finally{r(!1)}},g=async()=>{h(""),r(!0);const m=new zt;try{const p=await dI(Lo,m),w=K(Q,`users/${p.user.uid}`);if(!(await kv(w)).exists()){const I=ei(K(Q,"empresas")).key;await vn(K(Q,`empresas/${I}/info`),{nome:p.user.displayName?`Ótica de ${p.user.displayName}`:"Minha Ótica",criadoEm:new Date().toISOString()}),await vn(K(Q,`users/${p.user.uid}`),{empresaId:I,role:"admin",email:p.user.email,nome:p.user.displayName})}}catch(p){h(`Erro Google: ${p.message}`)}finally{r(!1)}};return c.jsxs("div",{className:"flex h-screen w-full bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white font-sans overflow-hidden",children:[c.jsxs("div",{className:"hidden lg:flex w-[55%] bg-[#120D38] flex-col items-center justify-center p-12 text-white relative",children:[c.jsx("div",{className:"absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-[#3b2b9a] rounded-full blur-[140px] opacity-60"}),c.jsx("div",{className:"absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-[#21146c] rounded-full blur-[140px] opacity-60"}),c.jsxs("div",{className:"relative z-10 flex flex-col items-center text-center w-full max-w-2xl",children:[c.jsxs("div",{className:"mb-10 flex flex-col items-center",children:[c.jsx(fy,{className:"w-36 h-auto mb-4 drop-shadow-2xl",solidWhite:!1}),c.jsx("h1",{className:"text-[56px] font-bold tracking-[0.2em] leading-none mb-3 text-white",children:"VISTTA"}),c.jsx("p",{className:"text-[#a094ff] tracking-[0.35em] text-[11px] uppercase font-semibold",children:"Gestão Inteligente para Óticas"}),c.jsx("div",{className:"w-12 h-[2px] bg-[#6552ff] mt-8 rounded-full"})]}),c.jsx("h2",{className:"text-[40px] font-normal mb-1 tracking-tight text-white/90",children:"Sua ótica. Uma plataforma."}),c.jsx("h2",{className:"text-[42px] font-bold text-[#7b66ff] mb-6 tracking-tight",children:"Mais controle."}),c.jsxs("div",{className:"flex items-start justify-center gap-8 mb-16 w-full",children:[c.jsxs("div",{className:"flex flex-col items-center flex-1 max-w-[180px]",children:[c.jsx(wN,{size:36,className:"text-[#7b66ff] mb-4"}),c.jsx("h3",{className:"text-[14px] font-bold mb-2 text-white",children:"Gestão Multi-Loja"})]}),c.jsx("div",{className:"w-px h-24 bg-indigo-500/20 mt-4"}),c.jsxs("div",{className:"flex flex-col items-center flex-1 max-w-[180px]",children:[c.jsx(vN,{size:36,className:"text-[#7b66ff] mb-4"}),c.jsx("h3",{className:"text-[14px] font-bold mb-2 text-white",children:"Estoque em tempo real"})]})]})]})]}),c.jsx("div",{className:"flex-1 lg:w-[45%] bg-[#F8FAFC] dark:bg-slate-900 flex flex-col items-center justify-center p-6 lg:p-12 relative overflow-y-auto custom-scrollbar",children:c.jsx("div",{className:"w-full max-w-[460px]",children:c.jsxs("div",{className:"bg-white dark:bg-slate-800 rounded-[32px] shadow-sm border border-slate-100 p-8 sm:p-10 mb-8 w-full",children:[c.jsx("div",{className:"text-center mb-8",children:c.jsx("h2",{className:"text-[26px] font-bold mb-2",children:t==="login"?"Bem-vindo de volta!":"Crie sua conta!"})}),c.jsxs("form",{onSubmit:b,className:"space-y-5",children:[d&&c.jsxs("div",{className:"bg-rose-50 text-rose-600 p-3.5 rounded-xl text-sm font-bold flex gap-3 border border-rose-100",children:[c.jsx(dy,{size:18}),c.jsx("span",{children:d})]}),t==="register"&&c.jsxs("div",{children:[c.jsx("label",{className:"block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2",children:"Nome da Ótica"}),c.jsxs("div",{className:"relative",children:[c.jsx(cN,{size:18,className:"absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"}),c.jsx("input",{type:"text",required:!0,value:a,onChange:m=>u(m.target.value),className:"w-full bg-slate-50 border rounded-xl pl-12 pr-4 py-3.5 outline-none focus:border-[#5235ff]",placeholder:"Nome da ótica"})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2",children:"E-mail"}),c.jsxs("div",{className:"relative",children:[c.jsx(gN,{size:18,className:"absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"}),c.jsx("input",{type:"email",required:!0,value:s,onChange:m=>i(m.target.value),className:"w-full bg-slate-50 border rounded-xl pl-12 pr-4 py-3.5 outline-none focus:border-[#5235ff]",placeholder:"Seu e-mail"})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2",children:"Senha"}),c.jsxs("div",{className:"relative",children:[c.jsx(Pl,{size:18,className:"absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"}),c.jsx("input",{type:f?"text":"password",required:!0,value:o,onChange:m=>l(m.target.value),className:"w-full bg-slate-50 border rounded-xl pl-12 pr-12 py-3.5 outline-none focus:border-[#5235ff]",placeholder:"Sua senha"}),c.jsx("button",{type:"button",onClick:()=>_(!f),className:"absolute right-4 top-1/2 -translate-y-1/2 text-slate-400",children:f?c.jsx(hN,{size:18}):c.jsx(fN,{size:18})})]})]}),c.jsx("button",{type:"submit",disabled:n,className:"w-full bg-[#5235ff] hover:bg-[#4323ec] text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 mt-4",children:n?"Aguarde...":t==="login"?"Entrar":"Criar Conta"}),t==="login"&&c.jsx("button",{type:"button",onClick:g,className:"w-full border py-3.5 rounded-xl font-bold flex justify-center gap-3 mt-4 hover:bg-slate-50",children:"Entrar com Google"}),c.jsx("div",{className:"text-center mt-6",children:c.jsx("button",{type:"button",onClick:()=>e(t==="login"?"register":"login"),className:"text-sm font-bold text-[#5235ff] hover:underline",children:t==="login"?"Criar uma conta":"Fazer login"})})]})]})})})]})}function kN(){const{produtos:t,vendas:e,clientes:n,setActiveTab:r}=Lt();return c.jsxs("div",{className:"flex flex-col h-full",children:[c.jsx("div",{className:"mb-8",children:c.jsx("h1",{className:"text-2xl font-bold mb-2",children:"Painel Geral"})}),c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6",children:[c.jsx(rr,{title:"Estoque Total",value:t.reduce((s,i)=>s+Number(i.qtd),0),subtitle:"unidades ativas",icon:ay}),c.jsx(rr,{title:"Vendas do Mês",value:je(e.reduce((s,i)=>s+(i.total||0),0)),icon:gh,color:"text-emerald-500"}),c.jsx(rr,{title:"Clientes Base",value:n.length,icon:_h}),c.jsx(rr,{title:"Estoque Crítico",value:t.filter(s=>Number(s.qtd)<Number(s.min)).length,icon:dy,bg:"bg-rose-50",color:"text-rose-500"})]})]})}function IN(){const{caixaAberto:t,pdvSearch:e,setPdvSearch:n,carrinho:r,addToCart:s,removeFromCart:i,pdvCliente:o,setPdvCliente:l,clientes:a,pdvDesconto:u,setPdvDesconto:d,pdvPagamento:h,setPdvPagamento:f,finalizarVenda:_,setActiveTab:v,produtos:y}=Lt(),[b,g]=R.useState("produtos"),m=y.filter(p=>Number(p.qtd)>0&&((p.marca||"").toLowerCase().includes(e.toLowerCase())||(p.modelo||"").toLowerCase().includes(e.toLowerCase())||(p.codigo||"").toLowerCase().includes(e.toLowerCase())));return c.jsxs("div",{className:"flex flex-col h-full",children:[c.jsx("div",{className:"mb-6 flex justify-between items-end",children:c.jsxs("div",{children:[c.jsx("h1",{className:"text-2xl sm:text-3xl font-bold mb-2",children:"Ponto de Venda"}),t?c.jsx("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold",children:"Caixa Aberto"}):c.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-slate-600 text-xs font-bold",children:[c.jsx(Pl,{size:12})," Caixa Fechado"]})]})}),t?c.jsxs("div",{className:"flex-1 flex flex-col lg:flex-row gap-6",children:[c.jsxs("div",{className:"lg:w-[60%] bg-white rounded-3xl border border-slate-100 p-6 flex flex-col",children:[c.jsxs("div",{className:"relative mb-6",children:[c.jsx(cy,{className:"absolute left-4 top-1/2 -translate-y-1/2 text-slate-400",size:18}),c.jsx("input",{type:"text",placeholder:"Buscar por marca, modelo ou código...",value:e,onChange:p=>n(p.target.value),className:"w-full bg-slate-50 border rounded-2xl pl-12 pr-4 py-3.5 outline-none focus:border-[#4A3AFF]"})]}),c.jsx("div",{className:"flex-1 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5",children:m.map(p=>c.jsxs("div",{onClick:()=>s(p),className:"bg-slate-50 border rounded-2xl p-5 cursor-pointer hover:border-[#4A3AFF] transition-all flex flex-col group",children:[c.jsx("div",{className:"text-[11px] text-slate-400 font-mono mb-2",children:p.codigo}),c.jsxs("div",{className:"font-bold text-[15px] group-hover:text-[#4A3AFF]",children:[p.marca," ",p.modelo]}),c.jsx("div",{className:"text-[12px] text-slate-500 mb-4",children:p.categoria}),c.jsxs("div",{className:"mt-auto flex justify-between items-end",children:[c.jsx("span",{className:"font-extrabold text-emerald-600 text-lg",children:je(p.venda)}),c.jsxs("span",{className:"text-[11px] bg-white px-2 py-1 rounded-lg font-bold",children:["Est: ",p.qtd]})]})]},p.id))})]}),c.jsxs("div",{className:"lg:w-[40%] bg-white rounded-3xl border border-slate-100 p-6 flex flex-col",children:[c.jsx("h3",{className:"font-bold text-xl mb-5",children:"Carrinho"}),c.jsxs("div",{className:"mb-5",children:[c.jsx("label",{className:"block text-[12px] font-bold text-slate-500 uppercase mb-2",children:"Cliente Vinculado"}),c.jsxs("select",{value:o,onChange:p=>l(p.target.value),className:"w-full bg-slate-50 border rounded-xl px-4 py-3 outline-none focus:border-[#4A3AFF]",children:[c.jsx("option",{value:"",children:"Consumidor Final (Balcão)"}),a.map(p=>c.jsx("option",{value:p.id,children:p.nome},p.id))]})]}),c.jsx("div",{className:"flex-1 overflow-y-auto space-y-3 mb-6 p-3 bg-slate-50 rounded-2xl border",children:r.map(p=>c.jsxs("div",{className:"flex justify-between items-center p-4 bg-white border rounded-xl",children:[c.jsxs("div",{className:"flex-1",children:[c.jsxs("div",{className:"font-bold text-[14px]",children:[p.marca," ",p.modelo]}),c.jsxs("div",{className:"text-[12px] text-slate-500 mt-1",children:[c.jsxs("span",{className:"font-bold px-1.5 py-0.5 bg-slate-100 rounded mr-1",children:[p.qtd,"x"]})," ",je(p.venda)]})]}),c.jsx("div",{className:"font-extrabold text-[15px] mr-3",children:je(Number(p.venda)*p.qtd)}),c.jsx("button",{onClick:()=>i(p.id),className:"text-slate-300 hover:text-rose-500",children:c.jsx(hy,{size:18})})]},p.id))}),c.jsxs("div",{className:"pt-5 border-t",children:[c.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-6",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-[11px] font-bold text-slate-400 uppercase mb-2",children:"Desc (R$)"}),c.jsx("input",{type:"number",min:"0",value:u,onChange:p=>d(Number(p.target.value)),className:"w-full bg-slate-50 border rounded-xl px-4 py-3 outline-none focus:border-[#4A3AFF]"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-[11px] font-bold text-slate-400 uppercase mb-2",children:"Pagamento"}),c.jsxs("select",{value:h,onChange:p=>f(p.target.value),className:"w-full bg-slate-50 border rounded-xl px-4 py-3 outline-none focus:border-[#4A3AFF]",children:[c.jsx("option",{children:"Pix"}),c.jsx("option",{children:"Crédito"}),c.jsx("option",{children:"Débito"}),c.jsx("option",{children:"Dinheiro"})]})]})]}),c.jsxs("div",{className:"flex justify-between items-end mb-6",children:[c.jsx("span",{className:"font-bold text-slate-500 text-[15px]",children:"Total Geral"}),c.jsx("span",{className:"text-4xl font-black text-[#4A3AFF]",children:je(Math.max(0,r.reduce((p,w)=>p+Number(w.venda)*w.qtd,0)-(Number(u)||0)))})]}),c.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[c.jsxs("button",{onClick:()=>_(!0),className:"w-full border-2 border-slate-200 py-3.5 rounded-xl font-bold flex items-center justify-center",children:[c.jsx(uy,{size:18,className:"mr-2"})," Orçamento"]}),c.jsxs("button",{onClick:()=>_(!1),className:"w-full bg-[#4A3AFF] text-white py-3.5 rounded-xl font-bold flex items-center justify-center",children:[c.jsx(dN,{size:18,className:"mr-2"})," Vender"]})]})]})]})]}):c.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center border-2 border-dashed border-slate-200 rounded-3xl p-8 text-center",children:[c.jsx("div",{className:"w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center text-rose-500 mb-6",children:c.jsx(Pl,{className:"w-10 h-10"})}),c.jsx("h2",{className:"text-2xl font-bold mb-3",children:"O Caixa está Fechado"}),c.jsx("p",{className:"text-slate-500 mb-8 max-w-md",children:"Para garantir a segurança financeira, é obrigatório abrir o caixa do dia antes de registrar qualquer venda."}),c.jsx("button",{onClick:()=>v("caixa"),className:"bg-[#4A3AFF] text-white px-8 py-3.5 rounded-xl font-bold",children:"Ir para o Controle de Caixa"})]})]})}function NN(){const{caixaAberto:t,totalVendasCaixa:e,caixas:n,abrirCaixa:r,fecharCaixa:s}=Lt(),[i,o]=R.useState("0"),[l,a]=R.useState(!1),u=async d=>{a(!0);try{await d()}catch(h){alert(h.message||"Não foi possível atualizar o caixa.")}finally{a(!1)}};return c.jsxs("div",{className:"flex flex-col h-full",children:[c.jsxs("div",{className:"mb-8 flex justify-between items-center",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"text-2xl sm:text-3xl font-bold mb-2",children:"Caixa Diário"}),c.jsx("p",{className:"text-slate-500",children:"Abertura e fechamento de caixa para o PDV."})]}),t?c.jsx("button",{disabled:l,onClick:()=>u(s),className:"bg-rose-500 text-white px-6 py-3 rounded-xl font-semibold shadow-md disabled:opacity-60",children:"Fechar Caixa"}):c.jsx("button",{disabled:l,onClick:()=>{const d=Number(i.replace(",","."));u(()=>r(d))},className:"bg-[#4A3AFF] text-white px-6 py-3 rounded-xl font-semibold shadow-md disabled:opacity-60",children:"Abrir Caixa"})]}),t?c.jsxs("div",{className:"bg-white rounded-3xl p-8 mb-10 flex justify-between items-center shadow-sm border border-slate-100",children:[c.jsxs("div",{children:[c.jsx("p",{className:"text-emerald-500 font-bold uppercase text-xs mb-2",children:"Caixa Aberto"}),c.jsxs("p",{className:"text-slate-500",children:["Operador: ",c.jsx("span",{className:"font-bold text-slate-900",children:t.operador})]})]}),c.jsxs("div",{className:"flex gap-10",children:[c.jsxs("div",{className:"text-right",children:[c.jsx("p",{className:"text-[11px] font-bold text-slate-400 uppercase mb-1",children:"Fundo Inicial"}),c.jsx("p",{className:"text-2xl font-bold",children:je(t.valorInicial)})]}),c.jsxs("div",{className:"text-right",children:[c.jsx("p",{className:"text-[11px] font-bold text-slate-400 uppercase mb-1",children:"Vendas no Caixa"}),c.jsxs("p",{className:"text-2xl font-bold text-emerald-500",children:["+ ",je(e)]})]}),c.jsxs("div",{className:"text-right pl-10 border-l border-slate-100",children:[c.jsx("p",{className:"text-[11px] font-bold text-slate-400 uppercase mb-1",children:"Saldo Atual"}),c.jsx("p",{className:"text-4xl font-extrabold text-[#4A3AFF]",children:je((t.valorInicial||0)+e)})]})]})]}):c.jsxs("div",{className:"border-2 border-dashed border-slate-200 rounded-3xl p-16 mb-10 text-center flex flex-col items-center",children:[c.jsx("div",{className:"w-16 h-16 bg-white rounded-full flex items-center justify-center text-slate-400 mb-5 shadow-sm border",children:c.jsx(Pl,{size:24})}),c.jsx("h3",{className:"text-2xl font-bold text-slate-800 mb-3",children:"Caixa Fechado"}),c.jsx("p",{className:"text-slate-500 mb-8 max-w-md",children:"Nenhum caixa está aberto no momento. Abra o caixa para permitir novas vendas."}),c.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[c.jsx("label",{htmlFor:"valor-inicial",className:"text-sm font-bold text-slate-600",children:"Fundo inicial"}),c.jsx("input",{id:"valor-inicial",type:"number",min:"0",step:"0.01",value:i,onChange:d=>o(d.target.value),className:"w-36 bg-white border border-slate-200 rounded-xl px-3 py-2 outline-none focus:border-[#4A3AFF]"})]})]})]})}function TN({data:t,onSave:e,onClose:n}){const[r,s]=R.useState(t||{codigo:"",categoria:"Armação",marca:"",modelo:"",cor:"",custo:"",venda:"",qtd:"",min:""}),i=(a,u)=>s(d=>({...d,[a]:u})),o="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3.5 text-[15px] outline-none focus:border-[#4A3AFF] transition-all text-slate-900 dark:text-white",l="text-[12px] font-bold text-slate-500 uppercase tracking-wider mb-2 block";return c.jsxs("form",{onSubmit:a=>{a.preventDefault(),e(r)},children:[c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6",children:[c.jsxs("div",{children:[c.jsx("label",{className:l,children:"SKU (Cód)"}),c.jsx("input",{required:!0,value:r.codigo,onChange:a=>i("codigo",a.target.value),className:o})]}),c.jsxs("div",{className:"sm:col-span-2",children:[c.jsx("label",{className:l,children:"Categoria"}),c.jsxs("select",{value:r.categoria,onChange:a=>i("categoria",a.target.value),className:o,children:[c.jsx("option",{children:"Armação"}),c.jsx("option",{children:"Lente"}),c.jsx("option",{children:"Óculos de Sol"}),c.jsx("option",{children:"Acessório"})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:l,children:"Marca"}),c.jsx("input",{required:!0,value:r.marca,onChange:a=>i("marca",a.target.value),className:o})]}),c.jsxs("div",{children:[c.jsx("label",{className:l,children:"Modelo"}),c.jsx("input",{value:r.modelo,onChange:a=>i("modelo",a.target.value),className:o})]}),c.jsxs("div",{children:[c.jsx("label",{className:l,children:"Cor"}),c.jsx("input",{value:r.cor,onChange:a=>i("cor",a.target.value),className:o})]}),c.jsx("div",{className:"sm:col-span-3 border-t border-slate-100 dark:border-slate-700 my-2"}),c.jsxs("div",{children:[c.jsx("label",{className:l,children:"Custo (R$)"}),c.jsx("input",{type:"number",step:"0.01",required:!0,value:r.custo,onChange:a=>i("custo",a.target.value),className:o})]}),c.jsxs("div",{children:[c.jsx("label",{className:"text-[12px] font-bold text-emerald-500 uppercase tracking-wider mb-2 block",children:"Venda (R$)"}),c.jsx("input",{type:"number",step:"0.01",required:!0,value:r.venda,onChange:a=>i("venda",a.target.value),className:`${o} border-emerald-200 dark:border-emerald-800 focus:border-emerald-500 font-extrabold`})]}),c.jsxs("div",{children:[c.jsx("label",{className:l,children:"Estoque Atual"}),c.jsx("input",{type:"number",required:!0,value:r.qtd,onChange:a=>i("qtd",a.target.value),className:o})]}),c.jsxs("div",{children:[c.jsx("label",{className:"text-[12px] font-bold text-rose-500 uppercase tracking-wider mb-2 block",children:"Estoque Mín."}),c.jsx("input",{type:"number",required:!0,value:r.min,onChange:a=>i("min",a.target.value),className:`${o} border-rose-200 dark:border-rose-800 focus:border-rose-500`})]})]}),c.jsxs("div",{className:"pt-4 border-t border-slate-100 dark:border-slate-700 flex justify-end gap-3 sm:gap-4",children:[c.jsx("button",{type:"button",onClick:n,className:"px-6 py-3.5 rounded-xl font-bold bg-slate-100 text-slate-600",children:"Cancelar"}),c.jsx("button",{type:"submit",className:"px-8 py-3.5 rounded-xl font-bold bg-[#4A3AFF] text-white",children:"Salvar Produto"})]})]})}function bN(){const{produtos:t,salvarProduto:e,excluirProduto:n}=Lt(),[r,s]=R.useState(""),[i,o]=R.useState(null),[l,a]=R.useState(!1),u=async d=>{await e(d,i==null?void 0:i.id),a(!1),o(null)};return c.jsxs("div",{className:"flex flex-col h-full",children:[c.jsxs("div",{className:"mb-8 flex justify-between items-center",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"text-2xl sm:text-3xl font-bold mb-2",children:"Estoque"}),c.jsx("p",{className:"text-slate-500",children:"Gerencie produtos e níveis de inventário."})]}),c.jsxs("button",{onClick:()=>{o(null),a(!0)},className:"bg-[#4A3AFF] text-white px-6 py-3 rounded-xl font-semibold flex items-center",children:[c.jsx(ha,{size:20,className:"mr-2"})," Adicionar Produto"]})]}),c.jsxs("div",{className:"bg-white rounded-3xl border border-slate-100 shadow-sm flex-1 flex flex-col overflow-hidden min-h-[400px]",children:[c.jsx("div",{className:"p-4 bg-white border-b border-slate-100",children:c.jsxs("div",{className:"relative max-w-md",children:[c.jsx(cy,{className:"absolute left-4 top-1/2 -translate-y-1/2 text-slate-400",size:18}),c.jsx("input",{type:"text",placeholder:"Buscar código, marca...",value:r,onChange:d=>s(d.target.value),className:"w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-4 py-3 outline-none focus:border-[#4A3AFF]"})]})}),c.jsx("div",{className:"flex-1 overflow-auto custom-scrollbar",children:c.jsxs("table",{className:"w-full text-left min-w-[700px]",children:[c.jsx("thead",{children:c.jsxs("tr",{className:"border-b border-slate-100 text-[11px] text-slate-400 uppercase font-semibold sticky top-0 bg-white",children:[c.jsx("th",{className:"py-4 px-6 w-24",children:"Cód."}),c.jsx("th",{className:"py-4 px-6",children:"Produto"}),c.jsx("th",{className:"py-4 px-6",children:"Categoria"}),c.jsx("th",{className:"py-4 px-6 text-right",children:"Venda"}),c.jsx("th",{className:"py-4 px-6 text-center w-28",children:"Qtd"}),c.jsx("th",{className:"py-4 px-6 text-center",children:"Ações"})]})}),c.jsx("tbody",{className:"divide-y divide-slate-50",children:t.filter(d=>{var h,f;return((h=d.codigo)==null?void 0:h.toLowerCase().includes(r.toLowerCase()))||((f=d.marca)==null?void 0:f.toLowerCase().includes(r.toLowerCase()))}).map(d=>c.jsxs("tr",{className:"hover:bg-slate-50 transition-colors",children:[c.jsx("td",{className:"py-4 px-6 font-mono text-[12px] font-bold text-slate-400",children:d.codigo}),c.jsx("td",{className:"py-4 px-6",children:c.jsxs("div",{className:"font-bold text-[14px]",children:[d.marca," ",c.jsx("span",{className:"font-normal text-slate-500",children:d.modelo})]})}),c.jsx("td",{className:"py-4 px-6 text-[13px]",children:c.jsx("span",{className:"bg-slate-100 px-3 py-1.5 rounded-lg font-medium",children:d.categoria})}),c.jsx("td",{className:"py-4 px-6 text-right font-extrabold text-[15px] text-emerald-600",children:je(d.venda)}),c.jsx("td",{className:"py-4 px-6 text-center",children:c.jsx("span",{className:`inline-flex items-center justify-center w-10 h-10 rounded-xl text-[14px] font-bold ${Number(d.qtd)<Number(d.min)?"bg-rose-50 text-rose-600":"bg-slate-50 text-slate-700"}`,children:d.qtd})}),c.jsxs("td",{className:"py-4 px-6 text-center",children:[c.jsx("button",{onClick:()=>{o(d),a(!0)},className:"p-2 rounded-xl text-slate-400 hover:text-[#4A3AFF] hover:bg-indigo-50",children:c.jsx(mh,{size:16})}),c.jsx("button",{onClick:()=>n(d.id).catch(h=>alert(h.message)),className:"p-2 rounded-xl text-slate-400 hover:text-rose-500 hover:bg-rose-50",children:c.jsx(fa,{size:16})})]})]},d.id))})]})})]}),c.jsx(vh,{open:l,onClose:()=>{a(!1),o(null)},title:i?"Editar Produto":"Novo Produto",width:"max-w-3xl",children:c.jsx(TN,{data:i,onSave:u,onClose:()=>{a(!1),o(null)}})})]})}function PN({data:t,onSave:e,onClose:n}){const[r,s]=R.useState({nome:"",cpf:"",tel:"",nasc:"",prescricao:{medico:"",obs:"",od:{esf:"",cil:"",eixo:"",dnp:"",add:""},oe:{esf:"",cil:"",eixo:"",dnp:"",add:""}}});R.useEffect(()=>{var a,u,d,h;t&&s({...t,prescricao:{medico:((a=t.prescricao)==null?void 0:a.medico)||"",obs:((u=t.prescricao)==null?void 0:u.obs)||"",od:{esf:"",cil:"",eixo:"",dnp:"",add:"",...((d=t.prescricao)==null?void 0:d.od)||{}},oe:{esf:"",cil:"",eixo:"",dnp:"",add:"",...((h=t.prescricao)==null?void 0:h.oe)||{}}}})},[t]);const i=(a,u)=>s(d=>({...d,[a]:u})),o="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3 text-[14px] outline-none focus:border-[#4A3AFF]",l="text-[12px] font-bold text-slate-500 uppercase mb-2 block";return c.jsxs("form",{onSubmit:a=>{a.preventDefault(),e(r)},className:"flex flex-col",children:[c.jsxs("div",{className:"space-y-6",children:[c.jsxs("div",{children:[c.jsxs("h3",{className:"text-[13px] font-bold text-indigo-500 uppercase mb-4 flex items-center gap-2",children:[c.jsx(_h,{size:16})," Dados Pessoais"]}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[c.jsxs("div",{children:[c.jsx("label",{className:l,children:"Nome Completo"}),c.jsx("input",{required:!0,value:r.nome,onChange:a=>i("nome",a.target.value),className:o})]}),c.jsxs("div",{children:[c.jsx("label",{className:l,children:"WhatsApp"}),c.jsx("input",{required:!0,value:r.tel,onChange:a=>i("tel",a.target.value),className:o,placeholder:"(00) 00000-0000"})]}),c.jsxs("div",{children:[c.jsx("label",{className:l,children:"CPF"}),c.jsx("input",{value:r.cpf,onChange:a=>i("cpf",a.target.value),className:o})]}),c.jsxs("div",{children:[c.jsx("label",{className:l,children:"Nascimento"}),c.jsx("input",{type:"date",value:r.nasc,onChange:a=>i("nasc",a.target.value),className:o})]})]})]}),c.jsxs("div",{className:"border-t pt-6",children:[c.jsxs("h3",{className:"text-[13px] font-bold text-emerald-500 uppercase mb-4 flex items-center gap-2",children:[c.jsx(pN,{size:16})," Receituário Ótico"]}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5 mb-5",children:[c.jsxs("div",{children:[c.jsx("label",{className:l,children:"Médico Oftalmologista"}),c.jsx("input",{value:r.prescricao.medico,onChange:a=>s(u=>({...u,prescricao:{...u.prescricao,medico:a.target.value}})),className:o})]}),c.jsxs("div",{children:[c.jsx("label",{className:l,children:"Observações"}),c.jsx("input",{value:r.prescricao.obs,onChange:a=>s(u=>({...u,prescricao:{...u.prescricao,obs:a.target.value}})),className:o})]})]})]})]}),c.jsxs("div",{className:"mt-8 border-t flex justify-end gap-3 pt-4",children:[c.jsx("button",{type:"button",onClick:n,className:"px-6 py-3 rounded-xl font-bold bg-slate-100 text-slate-600",children:"Cancelar"}),c.jsx("button",{type:"submit",className:"px-8 py-3 rounded-xl font-bold bg-[#4A3AFF] text-white",children:"Salvar Ficha"})]})]})}function RN(){const{clientes:t,salvarCliente:e,excluirCliente:n}=Lt(),[r,s]=ni.useState(null),[i,o]=ni.useState(!1),l=async a=>{await e(a,r==null?void 0:r.id),o(!1),s(null)};return c.jsxs("div",{className:"flex flex-col h-full",children:[c.jsxs("div",{className:"mb-8 flex justify-between items-center",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"text-2xl sm:text-3xl font-bold mb-2",children:"Clientes & Receitas"}),c.jsx("p",{className:"text-slate-500",children:"Gestão de contatos e prontuários óticos."})]}),c.jsxs("button",{onClick:()=>{s(null),o(!0)},className:"bg-[#4A3AFF] text-white px-6 py-3 rounded-xl font-semibold flex items-center shadow-md",children:[c.jsx(ha,{size:20,className:"mr-2"})," Novo Cliente"]})]}),c.jsx("div",{className:"bg-white rounded-3xl border border-slate-100 shadow-sm flex-1 flex flex-col overflow-hidden min-h-[400px]",children:c.jsx("div",{className:"flex-1 overflow-auto custom-scrollbar p-2",children:c.jsxs("table",{className:"w-full text-left min-w-[700px]",children:[c.jsx("thead",{children:c.jsxs("tr",{className:"border-b border-slate-100 text-[11px] text-slate-400 uppercase tracking-wider font-semibold sticky top-0 bg-white",children:[c.jsx("th",{className:"py-4 px-6",children:"Cliente / CPF"}),c.jsx("th",{className:"py-4 px-6",children:"Contato"}),c.jsx("th",{className:"py-4 px-6",children:"Médico Responsável"}),c.jsx("th",{className:"py-4 px-6 text-center w-24",children:"Ações"})]})}),c.jsx("tbody",{className:"divide-y divide-slate-50",children:t.map(a=>{var u;return c.jsxs("tr",{className:"hover:bg-slate-50 transition-colors",children:[c.jsxs("td",{className:"py-4 px-6",children:[c.jsx("div",{className:"font-bold text-[14px]",children:a.nome}),c.jsx("div",{className:"text-[12px] text-slate-400 mt-0.5",children:a.cpf||"Sem CPF"})]}),c.jsx("td",{className:"py-4 px-6 text-[14px] font-medium text-slate-600",children:a.tel}),c.jsx("td",{className:"py-4 px-6",children:c.jsx("div",{className:"text-[14px] font-medium text-slate-700",children:((u=a.prescricao)==null?void 0:u.medico)||"Não informado"})}),c.jsx("td",{className:"py-4 px-6 text-center",children:c.jsxs("div",{className:"flex justify-center gap-2",children:[c.jsx("button",{onClick:()=>{s(a),o(!0)},className:"p-2 rounded-xl text-slate-400 hover:text-[#4A3AFF] hover:bg-indigo-50",children:c.jsx(mh,{size:16})}),c.jsx("button",{onClick:()=>n(a.id).catch(d=>alert(d.message)),className:"p-2 rounded-xl text-slate-400 hover:text-rose-500 hover:bg-rose-50",children:c.jsx(fa,{size:16})})]})})]},a.id)})})]})})}),c.jsx(vh,{open:i,onClose:()=>{o(!1),s(null)},title:r?"Editar Cliente":"Novo Cliente",width:"max-w-4xl",children:c.jsx(PN,{data:r,onSave:l,onClose:()=>{o(!1),s(null)}})})]})}function AN(){const{orcamentos:t,clientes:e,setActiveTab:n}=Lt();return c.jsxs("div",{className:"flex flex-col h-full",children:[c.jsxs("div",{className:"mb-8 flex justify-between items-center",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"text-2xl sm:text-3xl font-bold mb-2",children:"Orçamentos"}),c.jsx("p",{className:"text-slate-500",children:"Negociações salvas via PDV."})]}),c.jsxs("button",{onClick:()=>n("vendas"),className:"bg-[#4A3AFF] text-white px-6 py-3 rounded-xl font-semibold flex items-center",children:[c.jsx(ha,{size:20,className:"mr-2"})," Novo via PDV"]})]}),c.jsx("div",{className:"bg-white rounded-3xl border border-slate-100 shadow-sm flex-1 flex flex-col overflow-hidden min-h-[400px]",children:c.jsx("div",{className:"flex-1 overflow-auto custom-scrollbar p-2",children:c.jsxs("table",{className:"w-full text-left min-w-[700px]",children:[c.jsx("thead",{children:c.jsxs("tr",{className:"border-b border-slate-100 text-[11px] text-slate-400 uppercase font-semibold sticky top-0 bg-white",children:[c.jsx("th",{className:"py-4 px-6",children:"Data / Cliente"}),c.jsx("th",{className:"py-4 px-6",children:"Itens"}),c.jsx("th",{className:"py-4 px-6 text-right",children:"Total"}),c.jsx("th",{className:"py-4 px-6 text-center w-24",children:"Ações"})]})}),c.jsx("tbody",{className:"divide-y divide-slate-50",children:t.map(r=>{var s,i;return c.jsxs("tr",{className:"hover:bg-slate-50 transition-colors group",children:[c.jsxs("td",{className:"py-4 px-6",children:[c.jsx("div",{className:"font-bold text-[14px]",children:((s=e.find(o=>o.id===r.cliId))==null?void 0:s.nome)||"Desconhecido"}),c.jsx("div",{className:"text-[12px] text-slate-400 mt-0.5",children:new Date(r.data).toLocaleDateString("pt-BR")})]}),c.jsxs("td",{className:"py-4 px-6 text-[14px] font-medium text-slate-600",children:[((i=r.itens)==null?void 0:i.length)||0," produto(s)"]}),c.jsx("td",{className:"py-4 px-6 text-right font-extrabold text-[15px] text-[#4A3AFF]",children:je(r.total)}),c.jsx("td",{className:"py-4 px-6 text-center",children:c.jsx("button",{className:"p-2 rounded-xl text-slate-400 hover:text-rose-500 hover:bg-rose-50",children:c.jsx(fa,{size:16})})})]},r.id)})})]})})})]})}function ON(){const{vendas:t,clientes:e}=Lt();return c.jsxs("div",{className:"flex flex-col h-full",children:[c.jsxs("div",{className:"mb-8",children:[c.jsx("h1",{className:"text-2xl sm:text-3xl font-bold mb-2",children:"Financeiro (DRE)"}),c.jsx("p",{className:"text-slate-500",children:"Análise de lucratividade real e CMV."})]}),c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-6",children:[c.jsx(rr,{title:"Faturamento Bruto",value:je(t.reduce((n,r)=>n+(r.total||0),0)),icon:gh}),c.jsx(rr,{title:"CMV (Custo dos Produtos)",value:je(t.reduce((n,r)=>n+(r.custoBase||0),0)),icon:_N,color:"text-rose-500"}),c.jsx(rr,{title:"Lucro Bruto",value:je(t.reduce((n,r)=>n+(r.total||0),0)-t.reduce((n,r)=>n+(r.custoBase||0),0)),icon:ly,bg:"bg-[#4A3AFF]/10",color:"text-[#4A3AFF]",border:"border-[#4A3AFF]/20"})]}),c.jsxs("div",{className:"bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden p-2 mt-8 flex-1 flex flex-col min-h-[300px]",children:[c.jsx("div",{className:"p-5 flex-shrink-0",children:c.jsx("h3",{className:"font-bold text-[16px]",children:"Últimas Vendas"})}),c.jsx("div",{className:"overflow-x-auto overflow-y-auto flex-1 custom-scrollbar",children:c.jsxs("table",{className:"w-full text-left min-w-[800px]",children:[c.jsx("thead",{children:c.jsxs("tr",{className:"border-b border-slate-100 text-[11px] text-slate-400 uppercase font-semibold sticky top-0 bg-white",children:[c.jsx("th",{className:"py-4 px-6",children:"Data"}),c.jsx("th",{className:"py-4 px-6",children:"Cliente"}),c.jsx("th",{className:"py-4 px-6",children:"Pagamento"}),c.jsx("th",{className:"py-4 px-6 text-right",children:"Total"})]})}),c.jsx("tbody",{className:"divide-y divide-slate-50",children:t.slice().sort((n,r)=>new Date(r.data).getTime()-new Date(n.data).getTime()).slice(0,10).map(n=>{var r;return c.jsxs("tr",{className:"hover:bg-slate-50 transition-colors",children:[c.jsx("td",{className:"py-4 px-6 text-[14px] text-slate-700",children:new Date(n.data).toLocaleDateString("pt-BR")}),c.jsx("td",{className:"py-4 px-6 text-[14px] font-bold",children:((r=e.find(s=>s.id===n.cliId))==null?void 0:r.nome)||"Balcão"}),c.jsx("td",{className:"py-4 px-6 text-[14px]",children:c.jsx("span",{className:"bg-slate-100 px-3 py-1.5 rounded-lg font-medium",children:n.pag})}),c.jsx("td",{className:"py-4 px-6 text-right font-extrabold text-[15px] text-[#4A3AFF]",children:je(n.total)})]},n.id)})})]})})]})]})}function DN({config:t,initialData:e,onSave:n,onClose:r}){const[s,i]=R.useState(e||t.defaultData),o=(u,d)=>i(h=>({...h,[u]:d})),l="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3.5 text-[15px] outline-none focus:border-[#4A3AFF] transition-all text-slate-900 dark:text-white",a="text-[12px] font-bold text-slate-500 uppercase tracking-wider mb-2 block";return c.jsxs("form",{onSubmit:u=>{u.preventDefault(),n(s)},children:[c.jsx("div",{className:"space-y-4 mb-6",children:t.fields.map(u=>c.jsxs("div",{children:[c.jsxs("label",{className:a,children:[u.label," ",u.required&&"*"]}),u.type==="select"?c.jsxs("select",{required:u.required,value:s[u.name]||"",onChange:d=>o(u.name,d.target.value),className:l,children:[c.jsx("option",{value:"",children:"Selecione..."}),u.options.map(d=>c.jsx("option",{value:d.val,children:d.label},d.val))]}):c.jsx("input",{type:u.type,step:u.step,required:u.required,value:s[u.name]||"",onChange:d=>o(u.name,d.target.value),className:l})]},u.name))}),c.jsxs("div",{className:"flex justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-700",children:[c.jsx("button",{type:"button",onClick:r,className:"px-6 py-3 rounded-xl bg-slate-100 text-slate-700 font-bold hover:bg-slate-200 transition-colors",children:"Cancelar"}),c.jsx("button",{type:"submit",className:"px-6 py-3 rounded-xl bg-[#4A3AFF] text-white font-bold hover:bg-[#3d2ee6] shadow-md transition-all",children:"Salvar"})]})]})}function LN({activeTab:t}){const{fornecedores:e,contas:n,categorias:r,usuarios:s,salvarCadastro:i,excluirCadastro:o}=Lt(),[l,a]=ni.useState(null),[u,d]=ni.useState(!1),f=(()=>{switch(t){case"fornecedores":return e;case"contas":return n;case"categorias":return r;case"usuarios":return s;default:return[]}})(),v={fornecedores:{defaultData:{nome:"",cnpj:"",contato:""},fields:[{name:"nome",label:"Nome",type:"text",required:!0},{name:"cnpj",label:"CNPJ",type:"text"},{name:"contato",label:"Contato",type:"text"}]},contas:{defaultData:{descricao:"",tipo:"pagar",valor:"",vencimento:""},fields:[{name:"descricao",label:"Descrição",type:"text",required:!0},{name:"tipo",label:"Tipo",type:"select",required:!0,options:[{val:"pagar",label:"A pagar"},{val:"receber",label:"A receber"}]},{name:"valor",label:"Valor",type:"number",step:"0.01",required:!0},{name:"vencimento",label:"Vencimento",type:"date"}]},categorias:{defaultData:{nome:""},fields:[{name:"nome",label:"Nome",type:"text",required:!0}]},usuarios:{defaultData:{nome:"",email:"",perfil:"vendedor"},fields:[{name:"nome",label:"Nome",type:"text",required:!0},{name:"email",label:"E-mail",type:"email",required:!0},{name:"perfil",label:"Perfil",type:"select",required:!0,options:[{val:"vendedor",label:"Vendedor"},{val:"admin",label:"Administrador"}]}]}}[t],y=t,b=async g=>{await i(y,g,l==null?void 0:l.id),d(!1),a(null)};return c.jsxs("div",{className:"flex flex-col h-full",children:[c.jsxs("div",{className:"mb-8 flex justify-between items-center",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"text-2xl sm:text-3xl font-bold mb-2 capitalize",children:t}),c.jsx("p",{className:"text-slate-500",children:"Gestão completa liberada."})]}),c.jsxs("button",{onClick:()=>{a(null),d(!0)},className:"bg-[#4A3AFF] text-white px-6 py-3 rounded-xl font-semibold flex items-center",children:[c.jsx(ha,{size:20,className:"mr-2"})," Adicionar"]})]}),c.jsx("div",{className:"bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden p-2 flex-1 flex flex-col min-h-[400px]",children:c.jsx("div",{className:"overflow-x-auto overflow-y-auto flex-1 custom-scrollbar",children:c.jsxs("table",{className:"w-full text-left min-w-[600px]",children:[c.jsx("thead",{children:c.jsxs("tr",{className:"border-b border-slate-100 text-[11px] text-slate-400 uppercase font-semibold sticky top-0 bg-white",children:[c.jsx("th",{className:"py-4 px-6",children:"Registro Principal"}),c.jsx("th",{className:"py-4 px-6",children:"Detalhes"}),c.jsx("th",{className:"py-4 px-6 text-center",children:"Ações"})]})}),c.jsx("tbody",{className:"divide-y divide-slate-50",children:f==null?void 0:f.map(g=>c.jsxs("tr",{className:"hover:bg-slate-50 transition-colors",children:[c.jsxs("td",{className:"py-4 px-6",children:[c.jsx("div",{className:"font-bold text-[14px]",children:g.nome||g.descricao}),c.jsx("div",{className:"text-[12px] text-slate-400 mt-0.5",children:g.cnpj||g.email||(g.vencimento?`Venc: ${new Date(g.vencimento).toLocaleDateString("pt-BR")}`:"")})]}),c.jsx("td",{className:"py-4 px-6 text-[14px] font-medium text-slate-600",children:g.valor?c.jsx("span",{className:`font-extrabold ${g.tipo==="pagar"?"text-rose-500":"text-emerald-500"}`,children:je(g.valor)}):g.contato||g.perfil||g.descricao||"-"}),c.jsx("td",{className:"py-4 px-6 text-center",children:c.jsxs("div",{className:"flex justify-center gap-2",children:[c.jsx("button",{onClick:()=>{a(g),d(!0)},className:"p-2 rounded-xl text-slate-400 hover:text-[#4A3AFF] hover:bg-indigo-50",children:c.jsx(mh,{size:16})}),c.jsx("button",{onClick:()=>o(y,g.id).catch(m=>alert(m.message)),className:"p-2 rounded-xl text-slate-400 hover:text-rose-500 hover:bg-rose-50",children:c.jsx(fa,{size:16})})]})})]},g.id))})]})})}),c.jsx(vh,{open:u,onClose:()=>{d(!1),a(null)},title:l?`Editar ${t}`:`Novo ${t}`,children:c.jsx(DN,{config:v,initialData:l,onSave:b,onClose:()=>{d(!1),a(null)}})})]})}function MN(){const{activeTab:t,user:e,loadingAuth:n}=Lt();return n?c.jsx("div",{className:"flex h-screen w-full items-center justify-center bg-slate-50 dark:bg-slate-900",children:c.jsx("p",{className:"text-slate-500 font-medium",children:"Iniciando VISTTA ERP..."})}):e?c.jsxs("div",{className:"flex h-screen w-full bg-slate-50 dark:bg-slate-900 text-slate-900 overflow-hidden",children:[c.jsx(CN,{}),c.jsxs("main",{className:"flex-1 overflow-y-auto p-4 sm:p-10 lg:p-12 relative z-10 custom-scrollbar h-full",children:[t==="dashboard"&&c.jsx(kN,{}),t==="vendas"&&c.jsx(IN,{}),t==="caixa"&&c.jsx(NN,{}),t==="estoque"&&c.jsx(bN,{}),t==="clientes"&&c.jsx(RN,{}),t==="orcamentos"&&c.jsx(AN,{}),t==="financeiro"&&c.jsx(ON,{}),["fornecedores","contas","categorias","usuarios"].includes(t)&&c.jsx(LN,{activeTab:t})]})]}):c.jsx(SN,{})}function jN(){return c.jsx(lN,{children:c.jsx(MN,{})})}iu.createRoot(document.getElementById("root")).render(c.jsx(ni.StrictMode,{children:c.jsx(jN,{})}));
