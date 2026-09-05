(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Ey(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Gp={exports:{}},Ol={},Kp={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Di=Symbol.for("react.element"),Cy=Symbol.for("react.portal"),Sy=Symbol.for("react.fragment"),ky=Symbol.for("react.strict_mode"),Iy=Symbol.for("react.profiler"),Ny=Symbol.for("react.provider"),Ty=Symbol.for("react.context"),by=Symbol.for("react.forward_ref"),Py=Symbol.for("react.suspense"),Ry=Symbol.for("react.memo"),Ay=Symbol.for("react.lazy"),Ih=Symbol.iterator;function Oy(t){return t===null||typeof t!="object"?null:(t=Ih&&t[Ih]||t["@@iterator"],typeof t=="function"?t:null)}var Qp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yp=Object.assign,Xp={};function as(t,e,n){this.props=t,this.context=e,this.refs=Xp,this.updater=n||Qp}as.prototype.isReactComponent={};as.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};as.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Jp(){}Jp.prototype=as.prototype;function Nu(t,e,n){this.props=t,this.context=e,this.refs=Xp,this.updater=n||Qp}var Tu=Nu.prototype=new Jp;Tu.constructor=Nu;Yp(Tu,as.prototype);Tu.isPureReactComponent=!0;var Nh=Array.isArray,Zp=Object.prototype.hasOwnProperty,bu={current:null},em={key:!0,ref:!0,__self:!0,__source:!0};function tm(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)Zp.call(e,r)&&!em.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var a=Array(l),c=0;c<l;c++)a[c]=arguments[c+2];s.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:Di,type:t,key:i,ref:o,props:s,_owner:bu.current}}function Dy(t,e){return{$$typeof:Di,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Pu(t){return typeof t=="object"&&t!==null&&t.$$typeof===Di}function My(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Th=/\/+/g;function Ea(t,e){return typeof t=="object"&&t!==null&&t.key!=null?My(""+t.key):e.toString(36)}function wo(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Di:case Cy:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Ea(o,0):r,Nh(s)?(n="",t!=null&&(n=t.replace(Th,"$&/")+"/"),wo(s,e,n,"",function(c){return c})):s!=null&&(Pu(s)&&(s=Dy(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Th,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Nh(t))for(var l=0;l<t.length;l++){i=t[l];var a=r+Ea(i,l);o+=wo(i,e,n,a,s)}else if(a=Oy(t),typeof a=="function")for(t=a.call(t),l=0;!(i=t.next()).done;)i=i.value,a=r+Ea(i,l++),o+=wo(i,e,n,a,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function eo(t,e,n){if(t==null)return t;var r=[],s=0;return wo(t,r,"","",function(i){return e.call(n,i,s++)}),r}function Ly(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var We={current:null},Eo={transition:null},jy={ReactCurrentDispatcher:We,ReactCurrentBatchConfig:Eo,ReactCurrentOwner:bu};function nm(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:eo,forEach:function(t,e,n){eo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return eo(t,function(){e++}),e},toArray:function(t){return eo(t,function(e){return e})||[]},only:function(t){if(!Pu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};z.Component=as;z.Fragment=Sy;z.Profiler=Iy;z.PureComponent=Nu;z.StrictMode=ky;z.Suspense=Py;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jy;z.act=nm;z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Yp({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=bu.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)Zp.call(e,a)&&!em.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Di,type:t.type,key:s,ref:i,props:r,_owner:o}};z.createContext=function(t){return t={$$typeof:Ty,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Ny,_context:t},t.Consumer=t};z.createElement=tm;z.createFactory=function(t){var e=tm.bind(null,t);return e.type=t,e};z.createRef=function(){return{current:null}};z.forwardRef=function(t){return{$$typeof:by,render:t}};z.isValidElement=Pu;z.lazy=function(t){return{$$typeof:Ay,_payload:{_status:-1,_result:t},_init:Ly}};z.memo=function(t,e){return{$$typeof:Ry,type:t,compare:e===void 0?null:e}};z.startTransition=function(t){var e=Eo.transition;Eo.transition={};try{t()}finally{Eo.transition=e}};z.unstable_act=nm;z.useCallback=function(t,e){return We.current.useCallback(t,e)};z.useContext=function(t){return We.current.useContext(t)};z.useDebugValue=function(){};z.useDeferredValue=function(t){return We.current.useDeferredValue(t)};z.useEffect=function(t,e){return We.current.useEffect(t,e)};z.useId=function(){return We.current.useId()};z.useImperativeHandle=function(t,e,n){return We.current.useImperativeHandle(t,e,n)};z.useInsertionEffect=function(t,e){return We.current.useInsertionEffect(t,e)};z.useLayoutEffect=function(t,e){return We.current.useLayoutEffect(t,e)};z.useMemo=function(t,e){return We.current.useMemo(t,e)};z.useReducer=function(t,e,n){return We.current.useReducer(t,e,n)};z.useRef=function(t){return We.current.useRef(t)};z.useState=function(t){return We.current.useState(t)};z.useSyncExternalStore=function(t,e,n){return We.current.useSyncExternalStore(t,e,n)};z.useTransition=function(){return We.current.useTransition()};z.version="18.3.1";Kp.exports=z;var R=Kp.exports;const si=Ey(R);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fy=R,Uy=Symbol.for("react.element"),zy=Symbol.for("react.fragment"),Vy=Object.prototype.hasOwnProperty,Wy=Fy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,By={key:!0,ref:!0,__self:!0,__source:!0};function rm(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Vy.call(e,r)&&!By.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:Uy,type:t,key:i,ref:o,props:s,_owner:Wy.current}}Ol.Fragment=zy;Ol.jsx=rm;Ol.jsxs=rm;Gp.exports=Ol;var u=Gp.exports,cc={},sm={exports:{}},rt={},im={exports:{}},om={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(k,D){var M=k.length;k.push(D);e:for(;0<M;){var re=M-1>>>1,fe=k[re];if(0<s(fe,D))k[re]=D,k[M]=fe,M=re;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var D=k[0],M=k.pop();if(M!==D){k[0]=M;e:for(var re=0,fe=k.length,Gn=fe>>>1;re<Gn;){var It=2*(re+1)-1,$e=k[It],Nt=It+1,rn=k[Nt];if(0>s($e,M))Nt<fe&&0>s(rn,$e)?(k[re]=rn,k[Nt]=M,re=Nt):(k[re]=$e,k[It]=M,re=It);else if(Nt<fe&&0>s(rn,M))k[re]=rn,k[Nt]=M,re=Nt;else break e}}return D}function s(k,D){var M=k.sortIndex-D.sortIndex;return M!==0?M:k.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],c=[],d=1,h=null,f=3,v=!1,_=!1,y=!1,b=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(k){for(var D=n(c);D!==null;){if(D.callback===null)r(c);else if(D.startTime<=k)r(c),D.sortIndex=D.expirationTime,e(a,D);else break;D=n(c)}}function x(k){if(y=!1,m(k),!_)if(n(a)!==null)_=!0,xs(C);else{var D=n(c);D!==null&&ws(x,D.startTime-k)}}function C(k,D){_=!1,y&&(y=!1,g(T),T=-1),v=!0;var M=f;try{for(m(D),h=n(a);h!==null&&(!(h.expirationTime>D)||k&&!Xe());){var re=h.callback;if(typeof re=="function"){h.callback=null,f=h.priorityLevel;var fe=re(h.expirationTime<=D);D=t.unstable_now(),typeof fe=="function"?h.callback=fe:h===n(a)&&r(a),m(D)}else r(a);h=n(a)}if(h!==null)var Gn=!0;else{var It=n(c);It!==null&&ws(x,It.startTime-D),Gn=!1}return Gn}finally{h=null,f=M,v=!1}}var N=!1,S=null,T=-1,Q=5,L=-1;function Xe(){return!(t.unstable_now()-L<Q)}function Hn(){if(S!==null){var k=t.unstable_now();L=k;var D=!0;try{D=S(!0,k)}finally{D?qn():(N=!1,S=null)}}else N=!1}var qn;if(typeof p=="function")qn=function(){p(Hn)};else if(typeof MessageChannel<"u"){var Xi=new MessageChannel,va=Xi.port2;Xi.port1.onmessage=Hn,qn=function(){va.postMessage(null)}}else qn=function(){b(Hn,0)};function xs(k){S=k,N||(N=!0,qn())}function ws(k,D){T=b(function(){k(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){_||v||(_=!0,xs(C))},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(k){switch(f){case 1:case 2:case 3:var D=3;break;default:D=f}var M=f;f=D;try{return k()}finally{f=M}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(k,D){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var M=f;f=k;try{return D()}finally{f=M}},t.unstable_scheduleCallback=function(k,D,M){var re=t.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?re+M:re):M=re,k){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=M+fe,k={id:d++,callback:D,priorityLevel:k,startTime:M,expirationTime:fe,sortIndex:-1},M>re?(k.sortIndex=M,e(c,k),n(a)===null&&k===n(c)&&(y?(g(T),T=-1):y=!0,ws(x,M-re))):(k.sortIndex=fe,e(a,k),_||v||(_=!0,xs(C))),k},t.unstable_shouldYield=Xe,t.unstable_wrapCallback=function(k){var D=f;return function(){var M=f;f=D;try{return k.apply(this,arguments)}finally{f=M}}}})(om);im.exports=om;var $y=im.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hy=R,tt=$y;function w(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var lm=new Set,ii={};function yr(t,e){Qr(t,e),Qr(t+"Capture",e)}function Qr(t,e){for(ii[t]=e,t=0;t<e.length;t++)lm.add(e[t])}var Qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uc=Object.prototype.hasOwnProperty,qy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bh={},Ph={};function Gy(t){return uc.call(Ph,t)?!0:uc.call(bh,t)?!1:qy.test(t)?Ph[t]=!0:(bh[t]=!0,!1)}function Ky(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Qy(t,e,n,r){if(e===null||typeof e>"u"||Ky(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Be(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){be[t]=new Be(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];be[e]=new Be(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){be[t]=new Be(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){be[t]=new Be(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){be[t]=new Be(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){be[t]=new Be(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){be[t]=new Be(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){be[t]=new Be(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){be[t]=new Be(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ru=/[\-:]([a-z])/g;function Au(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ru,Au);be[e]=new Be(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ru,Au);be[e]=new Be(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ru,Au);be[e]=new Be(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){be[t]=new Be(t,1,!1,t.toLowerCase(),null,!1,!1)});be.xlinkHref=new Be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){be[t]=new Be(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ou(t,e,n,r){var s=be.hasOwnProperty(e)?be[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Qy(e,n,s,r)&&(n=null),r||s===null?Gy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var nn=Hy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,to=Symbol.for("react.element"),Ir=Symbol.for("react.portal"),Nr=Symbol.for("react.fragment"),Du=Symbol.for("react.strict_mode"),dc=Symbol.for("react.profiler"),am=Symbol.for("react.provider"),cm=Symbol.for("react.context"),Mu=Symbol.for("react.forward_ref"),hc=Symbol.for("react.suspense"),fc=Symbol.for("react.suspense_list"),Lu=Symbol.for("react.memo"),an=Symbol.for("react.lazy"),um=Symbol.for("react.offscreen"),Rh=Symbol.iterator;function Es(t){return t===null||typeof t!="object"?null:(t=Rh&&t[Rh]||t["@@iterator"],typeof t=="function"?t:null)}var ae=Object.assign,Ca;function Ms(t){if(Ca===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ca=e&&e[1]||""}return`
`+Ca+t}var Sa=!1;function ka(t,e){if(!t||Sa)return"";Sa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var a=`
`+s[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{Sa=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ms(t):""}function Yy(t){switch(t.tag){case 5:return Ms(t.type);case 16:return Ms("Lazy");case 13:return Ms("Suspense");case 19:return Ms("SuspenseList");case 0:case 2:case 15:return t=ka(t.type,!1),t;case 11:return t=ka(t.type.render,!1),t;case 1:return t=ka(t.type,!0),t;default:return""}}function pc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Nr:return"Fragment";case Ir:return"Portal";case dc:return"Profiler";case Du:return"StrictMode";case hc:return"Suspense";case fc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case cm:return(t.displayName||"Context")+".Consumer";case am:return(t._context.displayName||"Context")+".Provider";case Mu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Lu:return e=t.displayName||null,e!==null?e:pc(t.type)||"Memo";case an:e=t._payload,t=t._init;try{return pc(t(e))}catch{}}return null}function Xy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pc(e);case 8:return e===Du?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function An(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function dm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Jy(t){var e=dm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function no(t){t._valueTracker||(t._valueTracker=Jy(t))}function hm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=dm(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Fo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function mc(t,e){var n=e.checked;return ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ah(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=An(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function fm(t,e){e=e.checked,e!=null&&Ou(t,"checked",e,!1)}function gc(t,e){fm(t,e);var n=An(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?vc(t,e.type,n):e.hasOwnProperty("defaultValue")&&vc(t,e.type,An(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Oh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function vc(t,e,n){(e!=="number"||Fo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ls=Array.isArray;function Ur(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+An(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function _c(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(w(91));return ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Dh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(w(92));if(Ls(n)){if(1<n.length)throw Error(w(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:An(n)}}function pm(t,e){var n=An(e.value),r=An(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Mh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function mm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?mm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ro,gm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ro=ro||document.createElement("div"),ro.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ro.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function oi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Vs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Zy=["Webkit","ms","Moz","O"];Object.keys(Vs).forEach(function(t){Zy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Vs[e]=Vs[t]})});function vm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Vs.hasOwnProperty(t)&&Vs[t]?(""+e).trim():e+"px"}function _m(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=vm(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var e0=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xc(t,e){if(e){if(e0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(w(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(w(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(w(61))}if(e.style!=null&&typeof e.style!="object")throw Error(w(62))}}function wc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ec=null;function ju(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Cc=null,zr=null,Vr=null;function Lh(t){if(t=ji(t)){if(typeof Cc!="function")throw Error(w(280));var e=t.stateNode;e&&(e=Fl(e),Cc(t.stateNode,t.type,e))}}function ym(t){zr?Vr?Vr.push(t):Vr=[t]:zr=t}function xm(){if(zr){var t=zr,e=Vr;if(Vr=zr=null,Lh(t),e)for(t=0;t<e.length;t++)Lh(e[t])}}function wm(t,e){return t(e)}function Em(){}var Ia=!1;function Cm(t,e,n){if(Ia)return t(e,n);Ia=!0;try{return wm(t,e,n)}finally{Ia=!1,(zr!==null||Vr!==null)&&(Em(),xm())}}function li(t,e){var n=t.stateNode;if(n===null)return null;var r=Fl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(w(231,e,typeof n));return n}var Sc=!1;if(Qt)try{var Cs={};Object.defineProperty(Cs,"passive",{get:function(){Sc=!0}}),window.addEventListener("test",Cs,Cs),window.removeEventListener("test",Cs,Cs)}catch{Sc=!1}function t0(t,e,n,r,s,i,o,l,a){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Ws=!1,Uo=null,zo=!1,kc=null,n0={onError:function(t){Ws=!0,Uo=t}};function r0(t,e,n,r,s,i,o,l,a){Ws=!1,Uo=null,t0.apply(n0,arguments)}function s0(t,e,n,r,s,i,o,l,a){if(r0.apply(this,arguments),Ws){if(Ws){var c=Uo;Ws=!1,Uo=null}else throw Error(w(198));zo||(zo=!0,kc=c)}}function xr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Sm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function jh(t){if(xr(t)!==t)throw Error(w(188))}function i0(t){var e=t.alternate;if(!e){if(e=xr(t),e===null)throw Error(w(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return jh(s),t;if(i===r)return jh(s),e;i=i.sibling}throw Error(w(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?t:e}function km(t){return t=i0(t),t!==null?Im(t):null}function Im(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Im(t);if(e!==null)return e;t=t.sibling}return null}var Nm=tt.unstable_scheduleCallback,Fh=tt.unstable_cancelCallback,o0=tt.unstable_shouldYield,l0=tt.unstable_requestPaint,he=tt.unstable_now,a0=tt.unstable_getCurrentPriorityLevel,Fu=tt.unstable_ImmediatePriority,Tm=tt.unstable_UserBlockingPriority,Vo=tt.unstable_NormalPriority,c0=tt.unstable_LowPriority,bm=tt.unstable_IdlePriority,Dl=null,At=null;function u0(t){if(At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(Dl,t,void 0,(t.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:f0,d0=Math.log,h0=Math.LN2;function f0(t){return t>>>=0,t===0?32:31-(d0(t)/h0|0)|0}var so=64,io=4194304;function js(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Wo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=js(l):(i&=o,i!==0&&(r=js(i)))}else o=n&~s,o!==0?r=js(o):i!==0&&(r=js(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-xt(e),s=1<<n,r|=t[n],e&=~s;return r}function p0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function m0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-xt(i),l=1<<o,a=s[o];a===-1?(!(l&n)||l&r)&&(s[o]=p0(l,e)):a<=e&&(t.expiredLanes|=l),i&=~l}}function Ic(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Pm(){var t=so;return so<<=1,!(so&4194240)&&(so=64),t}function Na(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Mi(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-xt(e),t[e]=n}function g0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-xt(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Uu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-xt(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var H=0;function Rm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Am,zu,Om,Dm,Mm,Nc=!1,oo=[],yn=null,xn=null,wn=null,ai=new Map,ci=new Map,un=[],v0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Uh(t,e){switch(t){case"focusin":case"focusout":yn=null;break;case"dragenter":case"dragleave":xn=null;break;case"mouseover":case"mouseout":wn=null;break;case"pointerover":case"pointerout":ai.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ci.delete(e.pointerId)}}function Ss(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=ji(e),e!==null&&zu(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function _0(t,e,n,r,s){switch(e){case"focusin":return yn=Ss(yn,t,e,n,r,s),!0;case"dragenter":return xn=Ss(xn,t,e,n,r,s),!0;case"mouseover":return wn=Ss(wn,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return ai.set(i,Ss(ai.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,ci.set(i,Ss(ci.get(i)||null,t,e,n,r,s)),!0}return!1}function Lm(t){var e=Jn(t.target);if(e!==null){var n=xr(e);if(n!==null){if(e=n.tag,e===13){if(e=Sm(n),e!==null){t.blockedOn=e,Mm(t.priority,function(){Om(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Co(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Tc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ec=r,n.target.dispatchEvent(r),Ec=null}else return e=ji(n),e!==null&&zu(e),t.blockedOn=n,!1;e.shift()}return!0}function zh(t,e,n){Co(t)&&n.delete(e)}function y0(){Nc=!1,yn!==null&&Co(yn)&&(yn=null),xn!==null&&Co(xn)&&(xn=null),wn!==null&&Co(wn)&&(wn=null),ai.forEach(zh),ci.forEach(zh)}function ks(t,e){t.blockedOn===e&&(t.blockedOn=null,Nc||(Nc=!0,tt.unstable_scheduleCallback(tt.unstable_NormalPriority,y0)))}function ui(t){function e(s){return ks(s,t)}if(0<oo.length){ks(oo[0],t);for(var n=1;n<oo.length;n++){var r=oo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(yn!==null&&ks(yn,t),xn!==null&&ks(xn,t),wn!==null&&ks(wn,t),ai.forEach(e),ci.forEach(e),n=0;n<un.length;n++)r=un[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<un.length&&(n=un[0],n.blockedOn===null);)Lm(n),n.blockedOn===null&&un.shift()}var Wr=nn.ReactCurrentBatchConfig,Bo=!0;function x0(t,e,n,r){var s=H,i=Wr.transition;Wr.transition=null;try{H=1,Vu(t,e,n,r)}finally{H=s,Wr.transition=i}}function w0(t,e,n,r){var s=H,i=Wr.transition;Wr.transition=null;try{H=4,Vu(t,e,n,r)}finally{H=s,Wr.transition=i}}function Vu(t,e,n,r){if(Bo){var s=Tc(t,e,n,r);if(s===null)ja(t,e,r,$o,n),Uh(t,r);else if(_0(s,t,e,n,r))r.stopPropagation();else if(Uh(t,r),e&4&&-1<v0.indexOf(t)){for(;s!==null;){var i=ji(s);if(i!==null&&Am(i),i=Tc(t,e,n,r),i===null&&ja(t,e,r,$o,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else ja(t,e,r,null,n)}}var $o=null;function Tc(t,e,n,r){if($o=null,t=ju(r),t=Jn(t),t!==null)if(e=xr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Sm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return $o=t,null}function jm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(a0()){case Fu:return 1;case Tm:return 4;case Vo:case c0:return 16;case bm:return 536870912;default:return 16}default:return 16}}var mn=null,Wu=null,So=null;function Fm(){if(So)return So;var t,e=Wu,n=e.length,r,s="value"in mn?mn.value:mn.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return So=s.slice(t,1<r?1-r:void 0)}function ko(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function lo(){return!0}function Vh(){return!1}function st(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?lo:Vh,this.isPropagationStopped=Vh,this}return ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=lo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=lo)},persist:function(){},isPersistent:lo}),e}var cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bu=st(cs),Li=ae({},cs,{view:0,detail:0}),E0=st(Li),Ta,ba,Is,Ml=ae({},Li,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$u,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Is&&(Is&&t.type==="mousemove"?(Ta=t.screenX-Is.screenX,ba=t.screenY-Is.screenY):ba=Ta=0,Is=t),Ta)},movementY:function(t){return"movementY"in t?t.movementY:ba}}),Wh=st(Ml),C0=ae({},Ml,{dataTransfer:0}),S0=st(C0),k0=ae({},Li,{relatedTarget:0}),Pa=st(k0),I0=ae({},cs,{animationName:0,elapsedTime:0,pseudoElement:0}),N0=st(I0),T0=ae({},cs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),b0=st(T0),P0=ae({},cs,{data:0}),Bh=st(P0),R0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},A0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},O0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function D0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=O0[t])?!!e[t]:!1}function $u(){return D0}var M0=ae({},Li,{key:function(t){if(t.key){var e=R0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ko(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?A0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$u,charCode:function(t){return t.type==="keypress"?ko(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ko(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),L0=st(M0),j0=ae({},Ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$h=st(j0),F0=ae({},Li,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$u}),U0=st(F0),z0=ae({},cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),V0=st(z0),W0=ae({},Ml,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),B0=st(W0),$0=[9,13,27,32],Hu=Qt&&"CompositionEvent"in window,Bs=null;Qt&&"documentMode"in document&&(Bs=document.documentMode);var H0=Qt&&"TextEvent"in window&&!Bs,Um=Qt&&(!Hu||Bs&&8<Bs&&11>=Bs),Hh=" ",qh=!1;function zm(t,e){switch(t){case"keyup":return $0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Tr=!1;function q0(t,e){switch(t){case"compositionend":return Vm(e);case"keypress":return e.which!==32?null:(qh=!0,Hh);case"textInput":return t=e.data,t===Hh&&qh?null:t;default:return null}}function G0(t,e){if(Tr)return t==="compositionend"||!Hu&&zm(t,e)?(t=Fm(),So=Wu=mn=null,Tr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Um&&e.locale!=="ko"?null:e.data;default:return null}}var K0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!K0[t.type]:e==="textarea"}function Wm(t,e,n,r){ym(r),e=Ho(e,"onChange"),0<e.length&&(n=new Bu("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var $s=null,di=null;function Q0(t){Zm(t,0)}function Ll(t){var e=Rr(t);if(hm(e))return t}function Y0(t,e){if(t==="change")return e}var Bm=!1;if(Qt){var Ra;if(Qt){var Aa="oninput"in document;if(!Aa){var Kh=document.createElement("div");Kh.setAttribute("oninput","return;"),Aa=typeof Kh.oninput=="function"}Ra=Aa}else Ra=!1;Bm=Ra&&(!document.documentMode||9<document.documentMode)}function Qh(){$s&&($s.detachEvent("onpropertychange",$m),di=$s=null)}function $m(t){if(t.propertyName==="value"&&Ll(di)){var e=[];Wm(e,di,t,ju(t)),Cm(Q0,e)}}function X0(t,e,n){t==="focusin"?(Qh(),$s=e,di=n,$s.attachEvent("onpropertychange",$m)):t==="focusout"&&Qh()}function J0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ll(di)}function Z0(t,e){if(t==="click")return Ll(e)}function ex(t,e){if(t==="input"||t==="change")return Ll(e)}function tx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var St=typeof Object.is=="function"?Object.is:tx;function hi(t,e){if(St(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!uc.call(e,s)||!St(t[s],e[s]))return!1}return!0}function Yh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Xh(t,e){var n=Yh(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Yh(n)}}function Hm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Hm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function qm(){for(var t=window,e=Fo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Fo(t.document)}return e}function qu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function nx(t){var e=qm(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Hm(n.ownerDocument.documentElement,n)){if(r!==null&&qu(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Xh(n,i);var o=Xh(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var rx=Qt&&"documentMode"in document&&11>=document.documentMode,br=null,bc=null,Hs=null,Pc=!1;function Jh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pc||br==null||br!==Fo(r)||(r=br,"selectionStart"in r&&qu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hs&&hi(Hs,r)||(Hs=r,r=Ho(bc,"onSelect"),0<r.length&&(e=new Bu("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=br)))}function ao(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Pr={animationend:ao("Animation","AnimationEnd"),animationiteration:ao("Animation","AnimationIteration"),animationstart:ao("Animation","AnimationStart"),transitionend:ao("Transition","TransitionEnd")},Oa={},Gm={};Qt&&(Gm=document.createElement("div").style,"AnimationEvent"in window||(delete Pr.animationend.animation,delete Pr.animationiteration.animation,delete Pr.animationstart.animation),"TransitionEvent"in window||delete Pr.transitionend.transition);function jl(t){if(Oa[t])return Oa[t];if(!Pr[t])return t;var e=Pr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Gm)return Oa[t]=e[n];return t}var Km=jl("animationend"),Qm=jl("animationiteration"),Ym=jl("animationstart"),Xm=jl("transitionend"),Jm=new Map,Zh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fn(t,e){Jm.set(t,e),yr(e,[t])}for(var Da=0;Da<Zh.length;Da++){var Ma=Zh[Da],sx=Ma.toLowerCase(),ix=Ma[0].toUpperCase()+Ma.slice(1);Fn(sx,"on"+ix)}Fn(Km,"onAnimationEnd");Fn(Qm,"onAnimationIteration");Fn(Ym,"onAnimationStart");Fn("dblclick","onDoubleClick");Fn("focusin","onFocus");Fn("focusout","onBlur");Fn(Xm,"onTransitionEnd");Qr("onMouseEnter",["mouseout","mouseover"]);Qr("onMouseLeave",["mouseout","mouseover"]);Qr("onPointerEnter",["pointerout","pointerover"]);Qr("onPointerLeave",["pointerout","pointerover"]);yr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));yr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));yr("onBeforeInput",["compositionend","keypress","textInput","paste"]);yr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));yr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));yr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ox=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fs));function ef(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,s0(r,e,void 0,t),t.currentTarget=null}function Zm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,c=l.currentTarget;if(l=l.listener,a!==i&&s.isPropagationStopped())break e;ef(s,l,c),i=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,c=l.currentTarget,l=l.listener,a!==i&&s.isPropagationStopped())break e;ef(s,l,c),i=a}}}if(zo)throw t=kc,zo=!1,kc=null,t}function te(t,e){var n=e[Mc];n===void 0&&(n=e[Mc]=new Set);var r=t+"__bubble";n.has(r)||(eg(e,t,2,!1),n.add(r))}function La(t,e,n){var r=0;e&&(r|=4),eg(n,t,r,e)}var co="_reactListening"+Math.random().toString(36).slice(2);function fi(t){if(!t[co]){t[co]=!0,lm.forEach(function(n){n!=="selectionchange"&&(ox.has(n)||La(n,!1,t),La(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[co]||(e[co]=!0,La("selectionchange",!1,e))}}function eg(t,e,n,r){switch(jm(e)){case 1:var s=x0;break;case 4:s=w0;break;default:s=Vu}n=s.bind(null,e,n,t),s=void 0,!Sc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function ja(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===s||a.nodeType===8&&a.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Jn(l),o===null)return;if(a=o.tag,a===5||a===6){r=i=o;continue e}l=l.parentNode}}r=r.return}Cm(function(){var c=i,d=ju(n),h=[];e:{var f=Jm.get(t);if(f!==void 0){var v=Bu,_=t;switch(t){case"keypress":if(ko(n)===0)break e;case"keydown":case"keyup":v=L0;break;case"focusin":_="focus",v=Pa;break;case"focusout":_="blur",v=Pa;break;case"beforeblur":case"afterblur":v=Pa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Wh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=S0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=U0;break;case Km:case Qm:case Ym:v=N0;break;case Xm:v=V0;break;case"scroll":v=E0;break;case"wheel":v=B0;break;case"copy":case"cut":case"paste":v=b0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=$h}var y=(e&4)!==0,b=!y&&t==="scroll",g=y?f!==null?f+"Capture":null:f;y=[];for(var p=c,m;p!==null;){m=p;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,g!==null&&(x=li(p,g),x!=null&&y.push(pi(p,x,m)))),b)break;p=p.return}0<y.length&&(f=new v(f,_,null,n,d),h.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",f&&n!==Ec&&(_=n.relatedTarget||n.fromElement)&&(Jn(_)||_[Yt]))break e;if((v||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,v?(_=n.relatedTarget||n.toElement,v=c,_=_?Jn(_):null,_!==null&&(b=xr(_),_!==b||_.tag!==5&&_.tag!==6)&&(_=null)):(v=null,_=c),v!==_)){if(y=Wh,x="onMouseLeave",g="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(y=$h,x="onPointerLeave",g="onPointerEnter",p="pointer"),b=v==null?f:Rr(v),m=_==null?f:Rr(_),f=new y(x,p+"leave",v,n,d),f.target=b,f.relatedTarget=m,x=null,Jn(d)===c&&(y=new y(g,p+"enter",_,n,d),y.target=m,y.relatedTarget=b,x=y),b=x,v&&_)t:{for(y=v,g=_,p=0,m=y;m;m=Sr(m))p++;for(m=0,x=g;x;x=Sr(x))m++;for(;0<p-m;)y=Sr(y),p--;for(;0<m-p;)g=Sr(g),m--;for(;p--;){if(y===g||g!==null&&y===g.alternate)break t;y=Sr(y),g=Sr(g)}y=null}else y=null;v!==null&&tf(h,f,v,y,!1),_!==null&&b!==null&&tf(h,b,_,y,!0)}}e:{if(f=c?Rr(c):window,v=f.nodeName&&f.nodeName.toLowerCase(),v==="select"||v==="input"&&f.type==="file")var C=Y0;else if(Gh(f))if(Bm)C=ex;else{C=J0;var N=X0}else(v=f.nodeName)&&v.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=Z0);if(C&&(C=C(t,c))){Wm(h,C,n,d);break e}N&&N(t,f,c),t==="focusout"&&(N=f._wrapperState)&&N.controlled&&f.type==="number"&&vc(f,"number",f.value)}switch(N=c?Rr(c):window,t){case"focusin":(Gh(N)||N.contentEditable==="true")&&(br=N,bc=c,Hs=null);break;case"focusout":Hs=bc=br=null;break;case"mousedown":Pc=!0;break;case"contextmenu":case"mouseup":case"dragend":Pc=!1,Jh(h,n,d);break;case"selectionchange":if(rx)break;case"keydown":case"keyup":Jh(h,n,d)}var S;if(Hu)e:{switch(t){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Tr?zm(t,n)&&(T="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Um&&n.locale!=="ko"&&(Tr||T!=="onCompositionStart"?T==="onCompositionEnd"&&Tr&&(S=Fm()):(mn=d,Wu="value"in mn?mn.value:mn.textContent,Tr=!0)),N=Ho(c,T),0<N.length&&(T=new Bh(T,t,null,n,d),h.push({event:T,listeners:N}),S?T.data=S:(S=Vm(n),S!==null&&(T.data=S)))),(S=H0?q0(t,n):G0(t,n))&&(c=Ho(c,"onBeforeInput"),0<c.length&&(d=new Bh("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=S))}Zm(h,e)})}function pi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ho(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=li(t,n),i!=null&&r.unshift(pi(t,i,s)),i=li(t,e),i!=null&&r.push(pi(t,i,s))),t=t.return}return r}function Sr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function tf(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,c=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&c!==null&&(l=c,s?(a=li(n,i),a!=null&&o.unshift(pi(n,a,l))):s||(a=li(n,i),a!=null&&o.push(pi(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var lx=/\r\n?/g,ax=/\u0000|\uFFFD/g;function nf(t){return(typeof t=="string"?t:""+t).replace(lx,`
`).replace(ax,"")}function uo(t,e,n){if(e=nf(e),nf(t)!==e&&n)throw Error(w(425))}function qo(){}var Rc=null,Ac=null;function Oc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Dc=typeof setTimeout=="function"?setTimeout:void 0,cx=typeof clearTimeout=="function"?clearTimeout:void 0,rf=typeof Promise=="function"?Promise:void 0,ux=typeof queueMicrotask=="function"?queueMicrotask:typeof rf<"u"?function(t){return rf.resolve(null).then(t).catch(dx)}:Dc;function dx(t){setTimeout(function(){throw t})}function Fa(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),ui(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);ui(e)}function En(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function sf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var us=Math.random().toString(36).slice(2),Rt="__reactFiber$"+us,mi="__reactProps$"+us,Yt="__reactContainer$"+us,Mc="__reactEvents$"+us,hx="__reactListeners$"+us,fx="__reactHandles$"+us;function Jn(t){var e=t[Rt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Yt]||n[Rt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=sf(t);t!==null;){if(n=t[Rt])return n;t=sf(t)}return e}t=n,n=t.parentNode}return null}function ji(t){return t=t[Rt]||t[Yt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Rr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(w(33))}function Fl(t){return t[mi]||null}var Lc=[],Ar=-1;function Un(t){return{current:t}}function ne(t){0>Ar||(t.current=Lc[Ar],Lc[Ar]=null,Ar--)}function ee(t,e){Ar++,Lc[Ar]=t.current,t.current=e}var On={},De=Un(On),Ke=Un(!1),lr=On;function Yr(t,e){var n=t.type.contextTypes;if(!n)return On;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Qe(t){return t=t.childContextTypes,t!=null}function Go(){ne(Ke),ne(De)}function of(t,e,n){if(De.current!==On)throw Error(w(168));ee(De,e),ee(Ke,n)}function tg(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(w(108,Xy(t)||"Unknown",s));return ae({},n,r)}function Ko(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||On,lr=De.current,ee(De,t),ee(Ke,Ke.current),!0}function lf(t,e,n){var r=t.stateNode;if(!r)throw Error(w(169));n?(t=tg(t,e,lr),r.__reactInternalMemoizedMergedChildContext=t,ne(Ke),ne(De),ee(De,t)):ne(Ke),ee(Ke,n)}var Ft=null,Ul=!1,Ua=!1;function ng(t){Ft===null?Ft=[t]:Ft.push(t)}function px(t){Ul=!0,ng(t)}function zn(){if(!Ua&&Ft!==null){Ua=!0;var t=0,e=H;try{var n=Ft;for(H=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ft=null,Ul=!1}catch(s){throw Ft!==null&&(Ft=Ft.slice(t+1)),Nm(Fu,zn),s}finally{H=e,Ua=!1}}return null}var Or=[],Dr=0,Qo=null,Yo=0,it=[],ot=0,ar=null,zt=1,Vt="";function Kn(t,e){Or[Dr++]=Yo,Or[Dr++]=Qo,Qo=t,Yo=e}function rg(t,e,n){it[ot++]=zt,it[ot++]=Vt,it[ot++]=ar,ar=t;var r=zt;t=Vt;var s=32-xt(r)-1;r&=~(1<<s),n+=1;var i=32-xt(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,zt=1<<32-xt(e)+s|n<<s|r,Vt=i+t}else zt=1<<i|n<<s|r,Vt=t}function Gu(t){t.return!==null&&(Kn(t,1),rg(t,1,0))}function Ku(t){for(;t===Qo;)Qo=Or[--Dr],Or[Dr]=null,Yo=Or[--Dr],Or[Dr]=null;for(;t===ar;)ar=it[--ot],it[ot]=null,Vt=it[--ot],it[ot]=null,zt=it[--ot],it[ot]=null}var et=null,Ze=null,se=!1,gt=null;function sg(t,e){var n=lt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function af(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,et=t,Ze=En(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,et=t,Ze=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ar!==null?{id:zt,overflow:Vt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=lt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,et=t,Ze=null,!0):!1;default:return!1}}function jc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Fc(t){if(se){var e=Ze;if(e){var n=e;if(!af(t,e)){if(jc(t))throw Error(w(418));e=En(n.nextSibling);var r=et;e&&af(t,e)?sg(r,n):(t.flags=t.flags&-4097|2,se=!1,et=t)}}else{if(jc(t))throw Error(w(418));t.flags=t.flags&-4097|2,se=!1,et=t}}}function cf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;et=t}function ho(t){if(t!==et)return!1;if(!se)return cf(t),se=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Oc(t.type,t.memoizedProps)),e&&(e=Ze)){if(jc(t))throw ig(),Error(w(418));for(;e;)sg(t,e),e=En(e.nextSibling)}if(cf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(w(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ze=En(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ze=null}}else Ze=et?En(t.stateNode.nextSibling):null;return!0}function ig(){for(var t=Ze;t;)t=En(t.nextSibling)}function Xr(){Ze=et=null,se=!1}function Qu(t){gt===null?gt=[t]:gt.push(t)}var mx=nn.ReactCurrentBatchConfig;function Ns(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,t))}return t}function fo(t,e){throw t=Object.prototype.toString.call(e),Error(w(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function uf(t){var e=t._init;return e(t._payload)}function og(t){function e(g,p){if(t){var m=g.deletions;m===null?(g.deletions=[p],g.flags|=16):m.push(p)}}function n(g,p){if(!t)return null;for(;p!==null;)e(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function s(g,p){return g=In(g,p),g.index=0,g.sibling=null,g}function i(g,p,m){return g.index=m,t?(m=g.alternate,m!==null?(m=m.index,m<p?(g.flags|=2,p):m):(g.flags|=2,p)):(g.flags|=1048576,p)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function l(g,p,m,x){return p===null||p.tag!==6?(p=qa(m,g.mode,x),p.return=g,p):(p=s(p,m),p.return=g,p)}function a(g,p,m,x){var C=m.type;return C===Nr?d(g,p,m.props.children,x,m.key):p!==null&&(p.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===an&&uf(C)===p.type)?(x=s(p,m.props),x.ref=Ns(g,p,m),x.return=g,x):(x=Ao(m.type,m.key,m.props,null,g.mode,x),x.ref=Ns(g,p,m),x.return=g,x)}function c(g,p,m,x){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=Ga(m,g.mode,x),p.return=g,p):(p=s(p,m.children||[]),p.return=g,p)}function d(g,p,m,x,C){return p===null||p.tag!==7?(p=ir(m,g.mode,x,C),p.return=g,p):(p=s(p,m),p.return=g,p)}function h(g,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=qa(""+p,g.mode,m),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case to:return m=Ao(p.type,p.key,p.props,null,g.mode,m),m.ref=Ns(g,null,p),m.return=g,m;case Ir:return p=Ga(p,g.mode,m),p.return=g,p;case an:var x=p._init;return h(g,x(p._payload),m)}if(Ls(p)||Es(p))return p=ir(p,g.mode,m,null),p.return=g,p;fo(g,p)}return null}function f(g,p,m,x){var C=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:l(g,p,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case to:return m.key===C?a(g,p,m,x):null;case Ir:return m.key===C?c(g,p,m,x):null;case an:return C=m._init,f(g,p,C(m._payload),x)}if(Ls(m)||Es(m))return C!==null?null:d(g,p,m,x,null);fo(g,m)}return null}function v(g,p,m,x,C){if(typeof x=="string"&&x!==""||typeof x=="number")return g=g.get(m)||null,l(p,g,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case to:return g=g.get(x.key===null?m:x.key)||null,a(p,g,x,C);case Ir:return g=g.get(x.key===null?m:x.key)||null,c(p,g,x,C);case an:var N=x._init;return v(g,p,m,N(x._payload),C)}if(Ls(x)||Es(x))return g=g.get(m)||null,d(p,g,x,C,null);fo(p,x)}return null}function _(g,p,m,x){for(var C=null,N=null,S=p,T=p=0,Q=null;S!==null&&T<m.length;T++){S.index>T?(Q=S,S=null):Q=S.sibling;var L=f(g,S,m[T],x);if(L===null){S===null&&(S=Q);break}t&&S&&L.alternate===null&&e(g,S),p=i(L,p,T),N===null?C=L:N.sibling=L,N=L,S=Q}if(T===m.length)return n(g,S),se&&Kn(g,T),C;if(S===null){for(;T<m.length;T++)S=h(g,m[T],x),S!==null&&(p=i(S,p,T),N===null?C=S:N.sibling=S,N=S);return se&&Kn(g,T),C}for(S=r(g,S);T<m.length;T++)Q=v(S,g,T,m[T],x),Q!==null&&(t&&Q.alternate!==null&&S.delete(Q.key===null?T:Q.key),p=i(Q,p,T),N===null?C=Q:N.sibling=Q,N=Q);return t&&S.forEach(function(Xe){return e(g,Xe)}),se&&Kn(g,T),C}function y(g,p,m,x){var C=Es(m);if(typeof C!="function")throw Error(w(150));if(m=C.call(m),m==null)throw Error(w(151));for(var N=C=null,S=p,T=p=0,Q=null,L=m.next();S!==null&&!L.done;T++,L=m.next()){S.index>T?(Q=S,S=null):Q=S.sibling;var Xe=f(g,S,L.value,x);if(Xe===null){S===null&&(S=Q);break}t&&S&&Xe.alternate===null&&e(g,S),p=i(Xe,p,T),N===null?C=Xe:N.sibling=Xe,N=Xe,S=Q}if(L.done)return n(g,S),se&&Kn(g,T),C;if(S===null){for(;!L.done;T++,L=m.next())L=h(g,L.value,x),L!==null&&(p=i(L,p,T),N===null?C=L:N.sibling=L,N=L);return se&&Kn(g,T),C}for(S=r(g,S);!L.done;T++,L=m.next())L=v(S,g,T,L.value,x),L!==null&&(t&&L.alternate!==null&&S.delete(L.key===null?T:L.key),p=i(L,p,T),N===null?C=L:N.sibling=L,N=L);return t&&S.forEach(function(Hn){return e(g,Hn)}),se&&Kn(g,T),C}function b(g,p,m,x){if(typeof m=="object"&&m!==null&&m.type===Nr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case to:e:{for(var C=m.key,N=p;N!==null;){if(N.key===C){if(C=m.type,C===Nr){if(N.tag===7){n(g,N.sibling),p=s(N,m.props.children),p.return=g,g=p;break e}}else if(N.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===an&&uf(C)===N.type){n(g,N.sibling),p=s(N,m.props),p.ref=Ns(g,N,m),p.return=g,g=p;break e}n(g,N);break}else e(g,N);N=N.sibling}m.type===Nr?(p=ir(m.props.children,g.mode,x,m.key),p.return=g,g=p):(x=Ao(m.type,m.key,m.props,null,g.mode,x),x.ref=Ns(g,p,m),x.return=g,g=x)}return o(g);case Ir:e:{for(N=m.key;p!==null;){if(p.key===N)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){n(g,p.sibling),p=s(p,m.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else e(g,p);p=p.sibling}p=Ga(m,g.mode,x),p.return=g,g=p}return o(g);case an:return N=m._init,b(g,p,N(m._payload),x)}if(Ls(m))return _(g,p,m,x);if(Es(m))return y(g,p,m,x);fo(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(n(g,p.sibling),p=s(p,m),p.return=g,g=p):(n(g,p),p=qa(m,g.mode,x),p.return=g,g=p),o(g)):n(g,p)}return b}var Jr=og(!0),lg=og(!1),Xo=Un(null),Jo=null,Mr=null,Yu=null;function Xu(){Yu=Mr=Jo=null}function Ju(t){var e=Xo.current;ne(Xo),t._currentValue=e}function Uc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Br(t,e){Jo=t,Yu=Mr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(qe=!0),t.firstContext=null)}function ut(t){var e=t._currentValue;if(Yu!==t)if(t={context:t,memoizedValue:e,next:null},Mr===null){if(Jo===null)throw Error(w(308));Mr=t,Jo.dependencies={lanes:0,firstContext:t}}else Mr=Mr.next=t;return e}var Zn=null;function Zu(t){Zn===null?Zn=[t]:Zn.push(t)}function ag(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Zu(e)):(n.next=s.next,s.next=n),e.interleaved=n,Xt(t,r)}function Xt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var cn=!1;function ed(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function qt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Cn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Xt(t,n)}return s=r.interleaved,s===null?(e.next=e,Zu(r)):(e.next=s.next,s.next=e),r.interleaved=e,Xt(t,n)}function Io(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Uu(t,n)}}function df(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Zo(t,e,n,r){var s=t.updateQueue;cn=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var a=l,c=a.next;a.next=null,o===null?i=c:o.next=c,o=a;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=a))}if(i!==null){var h=s.baseState;o=0,d=c=a=null,l=i;do{var f=l.lane,v=l.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var _=t,y=l;switch(f=e,v=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){h=_.call(v,h,f);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,f=typeof _=="function"?_.call(v,h,f):_,f==null)break e;h=ae({},h,f);break e;case 2:cn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,f=s.effects,f===null?s.effects=[l]:f.push(l))}else v={eventTime:v,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=v,a=h):d=d.next=v,o|=f;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;f=l,l=f.next,f.next=null,s.lastBaseUpdate=f,s.shared.pending=null}}while(!0);if(d===null&&(a=h),s.baseState=a,s.firstBaseUpdate=c,s.lastBaseUpdate=d,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);ur|=o,t.lanes=o,t.memoizedState=h}}function hf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(w(191,s));s.call(r)}}}var Fi={},Ot=Un(Fi),gi=Un(Fi),vi=Un(Fi);function er(t){if(t===Fi)throw Error(w(174));return t}function td(t,e){switch(ee(vi,e),ee(gi,t),ee(Ot,Fi),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:yc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=yc(e,t)}ne(Ot),ee(Ot,e)}function Zr(){ne(Ot),ne(gi),ne(vi)}function ug(t){er(vi.current);var e=er(Ot.current),n=yc(e,t.type);e!==n&&(ee(gi,t),ee(Ot,n))}function nd(t){gi.current===t&&(ne(Ot),ne(gi))}var oe=Un(0);function el(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var za=[];function rd(){for(var t=0;t<za.length;t++)za[t]._workInProgressVersionPrimary=null;za.length=0}var No=nn.ReactCurrentDispatcher,Va=nn.ReactCurrentBatchConfig,cr=0,le=null,ve=null,we=null,tl=!1,qs=!1,_i=0,gx=0;function Re(){throw Error(w(321))}function sd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!St(t[n],e[n]))return!1;return!0}function id(t,e,n,r,s,i){if(cr=i,le=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,No.current=t===null||t.memoizedState===null?xx:wx,t=n(r,s),qs){i=0;do{if(qs=!1,_i=0,25<=i)throw Error(w(301));i+=1,we=ve=null,e.updateQueue=null,No.current=Ex,t=n(r,s)}while(qs)}if(No.current=nl,e=ve!==null&&ve.next!==null,cr=0,we=ve=le=null,tl=!1,e)throw Error(w(300));return t}function od(){var t=_i!==0;return _i=0,t}function Pt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?le.memoizedState=we=t:we=we.next=t,we}function dt(){if(ve===null){var t=le.alternate;t=t!==null?t.memoizedState:null}else t=ve.next;var e=we===null?le.memoizedState:we.next;if(e!==null)we=e,ve=t;else{if(t===null)throw Error(w(310));ve=t,t={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},we===null?le.memoizedState=we=t:we=we.next=t}return we}function yi(t,e){return typeof e=="function"?e(t):e}function Wa(t){var e=dt(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=ve,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,a=null,c=i;do{var d=c.lane;if((cr&d)===d)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(l=a=h,o=r):a=a.next=h,le.lanes|=d,ur|=d}c=c.next}while(c!==null&&c!==i);a===null?o=r:a.next=l,St(r,e.memoizedState)||(qe=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,le.lanes|=i,ur|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ba(t){var e=dt(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);St(i,e.memoizedState)||(qe=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function dg(){}function hg(t,e){var n=le,r=dt(),s=e(),i=!St(r.memoizedState,s);if(i&&(r.memoizedState=s,qe=!0),r=r.queue,ld(mg.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||we!==null&&we.memoizedState.tag&1){if(n.flags|=2048,xi(9,pg.bind(null,n,r,s,e),void 0,null),Ce===null)throw Error(w(349));cr&30||fg(n,e,s)}return s}function fg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=le.updateQueue,e===null?(e={lastEffect:null,stores:null},le.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function pg(t,e,n,r){e.value=n,e.getSnapshot=r,gg(e)&&vg(t)}function mg(t,e,n){return n(function(){gg(e)&&vg(t)})}function gg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!St(t,n)}catch{return!0}}function vg(t){var e=Xt(t,1);e!==null&&wt(e,t,1,-1)}function ff(t){var e=Pt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yi,lastRenderedState:t},e.queue=t,t=t.dispatch=yx.bind(null,le,t),[e.memoizedState,t]}function xi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=le.updateQueue,e===null?(e={lastEffect:null,stores:null},le.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function _g(){return dt().memoizedState}function To(t,e,n,r){var s=Pt();le.flags|=t,s.memoizedState=xi(1|e,n,void 0,r===void 0?null:r)}function zl(t,e,n,r){var s=dt();r=r===void 0?null:r;var i=void 0;if(ve!==null){var o=ve.memoizedState;if(i=o.destroy,r!==null&&sd(r,o.deps)){s.memoizedState=xi(e,n,i,r);return}}le.flags|=t,s.memoizedState=xi(1|e,n,i,r)}function pf(t,e){return To(8390656,8,t,e)}function ld(t,e){return zl(2048,8,t,e)}function yg(t,e){return zl(4,2,t,e)}function xg(t,e){return zl(4,4,t,e)}function wg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Eg(t,e,n){return n=n!=null?n.concat([t]):null,zl(4,4,wg.bind(null,e,t),n)}function ad(){}function Cg(t,e){var n=dt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&sd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Sg(t,e){var n=dt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&sd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function kg(t,e,n){return cr&21?(St(n,e)||(n=Pm(),le.lanes|=n,ur|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,qe=!0),t.memoizedState=n)}function vx(t,e){var n=H;H=n!==0&&4>n?n:4,t(!0);var r=Va.transition;Va.transition={};try{t(!1),e()}finally{H=n,Va.transition=r}}function Ig(){return dt().memoizedState}function _x(t,e,n){var r=kn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ng(t))Tg(e,n);else if(n=ag(t,e,n,r),n!==null){var s=Ue();wt(n,t,r,s),bg(n,e,r)}}function yx(t,e,n){var r=kn(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ng(t))Tg(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,St(l,o)){var a=e.interleaved;a===null?(s.next=s,Zu(e)):(s.next=a.next,a.next=s),e.interleaved=s;return}}catch{}finally{}n=ag(t,e,s,r),n!==null&&(s=Ue(),wt(n,t,r,s),bg(n,e,r))}}function Ng(t){var e=t.alternate;return t===le||e!==null&&e===le}function Tg(t,e){qs=tl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function bg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Uu(t,n)}}var nl={readContext:ut,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useInsertionEffect:Re,useLayoutEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useMutableSource:Re,useSyncExternalStore:Re,useId:Re,unstable_isNewReconciler:!1},xx={readContext:ut,useCallback:function(t,e){return Pt().memoizedState=[t,e===void 0?null:e],t},useContext:ut,useEffect:pf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,To(4194308,4,wg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return To(4194308,4,t,e)},useInsertionEffect:function(t,e){return To(4,2,t,e)},useMemo:function(t,e){var n=Pt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Pt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=_x.bind(null,le,t),[r.memoizedState,t]},useRef:function(t){var e=Pt();return t={current:t},e.memoizedState=t},useState:ff,useDebugValue:ad,useDeferredValue:function(t){return Pt().memoizedState=t},useTransition:function(){var t=ff(!1),e=t[0];return t=vx.bind(null,t[1]),Pt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=le,s=Pt();if(se){if(n===void 0)throw Error(w(407));n=n()}else{if(n=e(),Ce===null)throw Error(w(349));cr&30||fg(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,pf(mg.bind(null,r,i,t),[t]),r.flags|=2048,xi(9,pg.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Pt(),e=Ce.identifierPrefix;if(se){var n=Vt,r=zt;n=(r&~(1<<32-xt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=_i++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=gx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},wx={readContext:ut,useCallback:Cg,useContext:ut,useEffect:ld,useImperativeHandle:Eg,useInsertionEffect:yg,useLayoutEffect:xg,useMemo:Sg,useReducer:Wa,useRef:_g,useState:function(){return Wa(yi)},useDebugValue:ad,useDeferredValue:function(t){var e=dt();return kg(e,ve.memoizedState,t)},useTransition:function(){var t=Wa(yi)[0],e=dt().memoizedState;return[t,e]},useMutableSource:dg,useSyncExternalStore:hg,useId:Ig,unstable_isNewReconciler:!1},Ex={readContext:ut,useCallback:Cg,useContext:ut,useEffect:ld,useImperativeHandle:Eg,useInsertionEffect:yg,useLayoutEffect:xg,useMemo:Sg,useReducer:Ba,useRef:_g,useState:function(){return Ba(yi)},useDebugValue:ad,useDeferredValue:function(t){var e=dt();return ve===null?e.memoizedState=t:kg(e,ve.memoizedState,t)},useTransition:function(){var t=Ba(yi)[0],e=dt().memoizedState;return[t,e]},useMutableSource:dg,useSyncExternalStore:hg,useId:Ig,unstable_isNewReconciler:!1};function pt(t,e){if(t&&t.defaultProps){e=ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function zc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Vl={isMounted:function(t){return(t=t._reactInternals)?xr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ue(),s=kn(t),i=qt(r,s);i.payload=e,n!=null&&(i.callback=n),e=Cn(t,i,s),e!==null&&(wt(e,t,s,r),Io(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ue(),s=kn(t),i=qt(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Cn(t,i,s),e!==null&&(wt(e,t,s,r),Io(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ue(),r=kn(t),s=qt(n,r);s.tag=2,e!=null&&(s.callback=e),e=Cn(t,s,r),e!==null&&(wt(e,t,r,n),Io(e,t,r))}};function mf(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!hi(n,r)||!hi(s,i):!0}function Pg(t,e,n){var r=!1,s=On,i=e.contextType;return typeof i=="object"&&i!==null?i=ut(i):(s=Qe(e)?lr:De.current,r=e.contextTypes,i=(r=r!=null)?Yr(t,s):On),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Vl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function gf(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Vl.enqueueReplaceState(e,e.state,null)}function Vc(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},ed(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=ut(i):(i=Qe(e)?lr:De.current,s.context=Yr(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(zc(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Vl.enqueueReplaceState(s,s.state,null),Zo(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function es(t,e){try{var n="",r=e;do n+=Yy(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function $a(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Wc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Cx=typeof WeakMap=="function"?WeakMap:Map;function Rg(t,e,n){n=qt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){sl||(sl=!0,Jc=r),Wc(t,e)},n}function Ag(t,e,n){n=qt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Wc(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Wc(t,e),typeof r!="function"&&(Sn===null?Sn=new Set([this]):Sn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function vf(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Cx;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=jx.bind(null,t,e,n),e.then(t,t))}function _f(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function yf(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=qt(-1,1),e.tag=2,Cn(n,e,1))),n.lanes|=1),t)}var Sx=nn.ReactCurrentOwner,qe=!1;function Le(t,e,n,r){e.child=t===null?lg(e,null,n,r):Jr(e,t.child,n,r)}function xf(t,e,n,r,s){n=n.render;var i=e.ref;return Br(e,s),r=id(t,e,n,r,i,s),n=od(),t!==null&&!qe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Jt(t,e,s)):(se&&n&&Gu(e),e.flags|=1,Le(t,e,r,s),e.child)}function wf(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!gd(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,Og(t,e,i,r,s)):(t=Ao(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:hi,n(o,r)&&t.ref===e.ref)return Jt(t,e,s)}return e.flags|=1,t=In(i,r),t.ref=e.ref,t.return=e,e.child=t}function Og(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(hi(i,r)&&t.ref===e.ref)if(qe=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(qe=!0);else return e.lanes=t.lanes,Jt(t,e,s)}return Bc(t,e,n,r,s)}function Dg(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(jr,Je),Je|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ee(jr,Je),Je|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ee(jr,Je),Je|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,ee(jr,Je),Je|=r;return Le(t,e,s,n),e.child}function Mg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Bc(t,e,n,r,s){var i=Qe(n)?lr:De.current;return i=Yr(e,i),Br(e,s),n=id(t,e,n,r,i,s),r=od(),t!==null&&!qe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Jt(t,e,s)):(se&&r&&Gu(e),e.flags|=1,Le(t,e,n,s),e.child)}function Ef(t,e,n,r,s){if(Qe(n)){var i=!0;Ko(e)}else i=!1;if(Br(e,s),e.stateNode===null)bo(t,e),Pg(e,n,r),Vc(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=ut(c):(c=Qe(n)?lr:De.current,c=Yr(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==c)&&gf(e,o,r,c),cn=!1;var f=e.memoizedState;o.state=f,Zo(e,r,o,s),a=e.memoizedState,l!==r||f!==a||Ke.current||cn?(typeof d=="function"&&(zc(e,n,d,r),a=e.memoizedState),(l=cn||mf(e,n,l,r,f,a,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,cg(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:pt(e.type,l),o.props=c,h=e.pendingProps,f=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=ut(a):(a=Qe(n)?lr:De.current,a=Yr(e,a));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==h||f!==a)&&gf(e,o,r,a),cn=!1,f=e.memoizedState,o.state=f,Zo(e,r,o,s);var _=e.memoizedState;l!==h||f!==_||Ke.current||cn?(typeof v=="function"&&(zc(e,n,v,r),_=e.memoizedState),(c=cn||mf(e,n,c,r,f,_,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=a,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return $c(t,e,n,r,i,s)}function $c(t,e,n,r,s,i){Mg(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&lf(e,n,!1),Jt(t,e,i);r=e.stateNode,Sx.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Jr(e,t.child,null,i),e.child=Jr(e,null,l,i)):Le(t,e,l,i),e.memoizedState=r.state,s&&lf(e,n,!0),e.child}function Lg(t){var e=t.stateNode;e.pendingContext?of(t,e.pendingContext,e.pendingContext!==e.context):e.context&&of(t,e.context,!1),td(t,e.containerInfo)}function Cf(t,e,n,r,s){return Xr(),Qu(s),e.flags|=256,Le(t,e,n,r),e.child}var Hc={dehydrated:null,treeContext:null,retryLane:0};function qc(t){return{baseLanes:t,cachePool:null,transitions:null}}function jg(t,e,n){var r=e.pendingProps,s=oe.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),ee(oe,s&1),t===null)return Fc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=$l(o,r,0,null),t=ir(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=qc(n),e.memoizedState=Hc,t):cd(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return kx(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=In(s,a),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=In(l,i):(i=ir(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?qc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Hc,r}return i=t.child,t=i.sibling,r=In(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function cd(t,e){return e=$l({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function po(t,e,n,r){return r!==null&&Qu(r),Jr(e,t.child,null,n),t=cd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function kx(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=$a(Error(w(422))),po(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=$l({mode:"visible",children:r.children},s,0,null),i=ir(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Jr(e,t.child,null,o),e.child.memoizedState=qc(o),e.memoizedState=Hc,i);if(!(e.mode&1))return po(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(w(419)),r=$a(i,r,void 0),po(t,e,o,r)}if(l=(o&t.childLanes)!==0,qe||l){if(r=Ce,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Xt(t,s),wt(r,t,s,-1))}return md(),r=$a(Error(w(421))),po(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=Fx.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Ze=En(s.nextSibling),et=e,se=!0,gt=null,t!==null&&(it[ot++]=zt,it[ot++]=Vt,it[ot++]=ar,zt=t.id,Vt=t.overflow,ar=e),e=cd(e,r.children),e.flags|=4096,e)}function Sf(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Uc(t.return,e,n)}function Ha(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function Fg(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(Le(t,e,r.children,n),r=oe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Sf(t,n,e);else if(t.tag===19)Sf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ee(oe,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&el(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Ha(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&el(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Ha(e,!0,n,null,i);break;case"together":Ha(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function bo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Jt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ur|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(w(153));if(e.child!==null){for(t=e.child,n=In(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=In(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ix(t,e,n){switch(e.tag){case 3:Lg(e),Xr();break;case 5:ug(e);break;case 1:Qe(e.type)&&Ko(e);break;case 4:td(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;ee(Xo,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ee(oe,oe.current&1),e.flags|=128,null):n&e.child.childLanes?jg(t,e,n):(ee(oe,oe.current&1),t=Jt(t,e,n),t!==null?t.sibling:null);ee(oe,oe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Fg(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ee(oe,oe.current),r)break;return null;case 22:case 23:return e.lanes=0,Dg(t,e,n)}return Jt(t,e,n)}var Ug,Gc,zg,Vg;Ug=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Gc=function(){};zg=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,er(Ot.current);var i=null;switch(n){case"input":s=mc(t,s),r=mc(t,r),i=[];break;case"select":s=ae({},s,{value:void 0}),r=ae({},r,{value:void 0}),i=[];break;case"textarea":s=_c(t,s),r=_c(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=qo)}xc(n,r);var o;n=null;for(c in s)if(!r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var l=s[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ii.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var a=r[c];if(l=s!=null?s[c]:void 0,r.hasOwnProperty(c)&&a!==l&&(a!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(i||(i=[]),i.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(i=i||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ii.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&te("scroll",t),i||l===a||(i=[])):(i=i||[]).push(c,a))}n&&(i=i||[]).push("style",n);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};Vg=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ts(t,e){if(!se)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ae(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Nx(t,e,n){var r=e.pendingProps;switch(Ku(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(e),null;case 1:return Qe(e.type)&&Go(),Ae(e),null;case 3:return r=e.stateNode,Zr(),ne(Ke),ne(De),rd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ho(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,gt!==null&&(tu(gt),gt=null))),Gc(t,e),Ae(e),null;case 5:nd(e);var s=er(vi.current);if(n=e.type,t!==null&&e.stateNode!=null)zg(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(w(166));return Ae(e),null}if(t=er(Ot.current),ho(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[Rt]=e,r[mi]=i,t=(e.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(s=0;s<Fs.length;s++)te(Fs[s],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":Ah(r,i),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},te("invalid",r);break;case"textarea":Dh(r,i),te("invalid",r)}xc(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&uo(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&uo(r.textContent,l,t),s=["children",""+l]):ii.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&te("scroll",r)}switch(n){case"input":no(r),Oh(r,i,!0);break;case"textarea":no(r),Mh(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=qo)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=mm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Rt]=e,t[mi]=r,Ug(t,e,!1,!1),e.stateNode=t;e:{switch(o=wc(n,r),n){case"dialog":te("cancel",t),te("close",t),s=r;break;case"iframe":case"object":case"embed":te("load",t),s=r;break;case"video":case"audio":for(s=0;s<Fs.length;s++)te(Fs[s],t);s=r;break;case"source":te("error",t),s=r;break;case"img":case"image":case"link":te("error",t),te("load",t),s=r;break;case"details":te("toggle",t),s=r;break;case"input":Ah(t,r),s=mc(t,r),te("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=ae({},r,{value:void 0}),te("invalid",t);break;case"textarea":Dh(t,r),s=_c(t,r),te("invalid",t);break;default:s=r}xc(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="style"?_m(t,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&gm(t,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&oi(t,a):typeof a=="number"&&oi(t,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ii.hasOwnProperty(i)?a!=null&&i==="onScroll"&&te("scroll",t):a!=null&&Ou(t,i,a,o))}switch(n){case"input":no(t),Oh(t,r,!1);break;case"textarea":no(t),Mh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+An(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Ur(t,!!r.multiple,i,!1):r.defaultValue!=null&&Ur(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=qo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ae(e),null;case 6:if(t&&e.stateNode!=null)Vg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(w(166));if(n=er(vi.current),er(Ot.current),ho(e)){if(r=e.stateNode,n=e.memoizedProps,r[Rt]=e,(i=r.nodeValue!==n)&&(t=et,t!==null))switch(t.tag){case 3:uo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&uo(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Rt]=e,e.stateNode=r}return Ae(e),null;case 13:if(ne(oe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(se&&Ze!==null&&e.mode&1&&!(e.flags&128))ig(),Xr(),e.flags|=98560,i=!1;else if(i=ho(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(w(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(w(317));i[Rt]=e}else Xr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ae(e),i=!1}else gt!==null&&(tu(gt),gt=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||oe.current&1?ye===0&&(ye=3):md())),e.updateQueue!==null&&(e.flags|=4),Ae(e),null);case 4:return Zr(),Gc(t,e),t===null&&fi(e.stateNode.containerInfo),Ae(e),null;case 10:return Ju(e.type._context),Ae(e),null;case 17:return Qe(e.type)&&Go(),Ae(e),null;case 19:if(ne(oe),i=e.memoizedState,i===null)return Ae(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Ts(i,!1);else{if(ye!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=el(t),o!==null){for(e.flags|=128,Ts(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ee(oe,oe.current&1|2),e.child}t=t.sibling}i.tail!==null&&he()>ts&&(e.flags|=128,r=!0,Ts(i,!1),e.lanes=4194304)}else{if(!r)if(t=el(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ts(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!se)return Ae(e),null}else 2*he()-i.renderingStartTime>ts&&n!==1073741824&&(e.flags|=128,r=!0,Ts(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=he(),e.sibling=null,n=oe.current,ee(oe,r?n&1|2:n&1),e):(Ae(e),null);case 22:case 23:return pd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Je&1073741824&&(Ae(e),e.subtreeFlags&6&&(e.flags|=8192)):Ae(e),null;case 24:return null;case 25:return null}throw Error(w(156,e.tag))}function Tx(t,e){switch(Ku(e),e.tag){case 1:return Qe(e.type)&&Go(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Zr(),ne(Ke),ne(De),rd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return nd(e),null;case 13:if(ne(oe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(w(340));Xr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ne(oe),null;case 4:return Zr(),null;case 10:return Ju(e.type._context),null;case 22:case 23:return pd(),null;case 24:return null;default:return null}}var mo=!1,Oe=!1,bx=typeof WeakSet=="function"?WeakSet:Set,I=null;function Lr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ue(t,e,r)}else n.current=null}function Kc(t,e,n){try{n()}catch(r){ue(t,e,r)}}var kf=!1;function Px(t,e){if(Rc=Bo,t=qm(),qu(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,c=0,d=0,h=t,f=null;t:for(;;){for(var v;h!==n||s!==0&&h.nodeType!==3||(l=o+s),h!==i||r!==0&&h.nodeType!==3||(a=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(v=h.firstChild)!==null;)f=h,h=v;for(;;){if(h===t)break t;if(f===n&&++c===s&&(l=o),f===i&&++d===r&&(a=o),(v=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=v}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ac={focusedElem:t,selectionRange:n},Bo=!1,I=e;I!==null;)if(e=I,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,I=t;else for(;I!==null;){e=I;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,b=_.memoizedState,g=e.stateNode,p=g.getSnapshotBeforeUpdate(e.elementType===e.type?y:pt(e.type,y),b);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(x){ue(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,I=t;break}I=e.return}return _=kf,kf=!1,_}function Gs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Kc(e,n,i)}s=s.next}while(s!==r)}}function Wl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Qc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Wg(t){var e=t.alternate;e!==null&&(t.alternate=null,Wg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Rt],delete e[mi],delete e[Mc],delete e[hx],delete e[fx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Bg(t){return t.tag===5||t.tag===3||t.tag===4}function If(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Bg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=qo));else if(r!==4&&(t=t.child,t!==null))for(Yc(t,e,n),t=t.sibling;t!==null;)Yc(t,e,n),t=t.sibling}function Xc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Xc(t,e,n),t=t.sibling;t!==null;)Xc(t,e,n),t=t.sibling}var Ie=null,mt=!1;function on(t,e,n){for(n=n.child;n!==null;)$g(t,e,n),n=n.sibling}function $g(t,e,n){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(Dl,n)}catch{}switch(n.tag){case 5:Oe||Lr(n,e);case 6:var r=Ie,s=mt;Ie=null,on(t,e,n),Ie=r,mt=s,Ie!==null&&(mt?(t=Ie,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ie.removeChild(n.stateNode));break;case 18:Ie!==null&&(mt?(t=Ie,n=n.stateNode,t.nodeType===8?Fa(t.parentNode,n):t.nodeType===1&&Fa(t,n),ui(t)):Fa(Ie,n.stateNode));break;case 4:r=Ie,s=mt,Ie=n.stateNode.containerInfo,mt=!0,on(t,e,n),Ie=r,mt=s;break;case 0:case 11:case 14:case 15:if(!Oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Kc(n,e,o),s=s.next}while(s!==r)}on(t,e,n);break;case 1:if(!Oe&&(Lr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ue(n,e,l)}on(t,e,n);break;case 21:on(t,e,n);break;case 22:n.mode&1?(Oe=(r=Oe)||n.memoizedState!==null,on(t,e,n),Oe=r):on(t,e,n);break;default:on(t,e,n)}}function Nf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new bx),e.forEach(function(r){var s=Ux.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function ft(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ie=l.stateNode,mt=!1;break e;case 3:Ie=l.stateNode.containerInfo,mt=!0;break e;case 4:Ie=l.stateNode.containerInfo,mt=!0;break e}l=l.return}if(Ie===null)throw Error(w(160));$g(i,o,s),Ie=null,mt=!1;var a=s.alternate;a!==null&&(a.return=null),s.return=null}catch(c){ue(s,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Hg(e,t),e=e.sibling}function Hg(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ft(e,t),Tt(t),r&4){try{Gs(3,t,t.return),Wl(3,t)}catch(y){ue(t,t.return,y)}try{Gs(5,t,t.return)}catch(y){ue(t,t.return,y)}}break;case 1:ft(e,t),Tt(t),r&512&&n!==null&&Lr(n,n.return);break;case 5:if(ft(e,t),Tt(t),r&512&&n!==null&&Lr(n,n.return),t.flags&32){var s=t.stateNode;try{oi(s,"")}catch(y){ue(t,t.return,y)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&fm(s,i),wc(l,o);var c=wc(l,i);for(o=0;o<a.length;o+=2){var d=a[o],h=a[o+1];d==="style"?_m(s,h):d==="dangerouslySetInnerHTML"?gm(s,h):d==="children"?oi(s,h):Ou(s,d,h,c)}switch(l){case"input":gc(s,i);break;case"textarea":pm(s,i);break;case"select":var f=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?Ur(s,!!i.multiple,v,!1):f!==!!i.multiple&&(i.defaultValue!=null?Ur(s,!!i.multiple,i.defaultValue,!0):Ur(s,!!i.multiple,i.multiple?[]:"",!1))}s[mi]=i}catch(y){ue(t,t.return,y)}}break;case 6:if(ft(e,t),Tt(t),r&4){if(t.stateNode===null)throw Error(w(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(y){ue(t,t.return,y)}}break;case 3:if(ft(e,t),Tt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ui(e.containerInfo)}catch(y){ue(t,t.return,y)}break;case 4:ft(e,t),Tt(t);break;case 13:ft(e,t),Tt(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(hd=he())),r&4&&Nf(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Oe=(c=Oe)||d,ft(e,t),Oe=c):ft(e,t),Tt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(I=t,d=t.child;d!==null;){for(h=I=d;I!==null;){switch(f=I,v=f.child,f.tag){case 0:case 11:case 14:case 15:Gs(4,f,f.return);break;case 1:Lr(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){ue(r,n,y)}}break;case 5:Lr(f,f.return);break;case 22:if(f.memoizedState!==null){bf(h);continue}}v!==null?(v.return=f,I=v):bf(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{s=h.stateNode,c?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=h.stateNode,a=h.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=vm("display",o))}catch(y){ue(t,t.return,y)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(y){ue(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ft(e,t),Tt(t),r&4&&Nf(t);break;case 21:break;default:ft(e,t),Tt(t)}}function Tt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Bg(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(oi(s,""),r.flags&=-33);var i=If(t);Xc(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=If(t);Yc(t,l,o);break;default:throw Error(w(161))}}catch(a){ue(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Rx(t,e,n){I=t,qg(t)}function qg(t,e,n){for(var r=(t.mode&1)!==0;I!==null;){var s=I,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||mo;if(!o){var l=s.alternate,a=l!==null&&l.memoizedState!==null||Oe;l=mo;var c=Oe;if(mo=o,(Oe=a)&&!c)for(I=s;I!==null;)o=I,a=o.child,o.tag===22&&o.memoizedState!==null?Pf(s):a!==null?(a.return=o,I=a):Pf(s);for(;i!==null;)I=i,qg(i),i=i.sibling;I=s,mo=l,Oe=c}Tf(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,I=i):Tf(t)}}function Tf(t){for(;I!==null;){var e=I;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Oe||Wl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Oe)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:pt(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&hf(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}hf(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&ui(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}Oe||e.flags&512&&Qc(e)}catch(f){ue(e,e.return,f)}}if(e===t){I=null;break}if(n=e.sibling,n!==null){n.return=e.return,I=n;break}I=e.return}}function bf(t){for(;I!==null;){var e=I;if(e===t){I=null;break}var n=e.sibling;if(n!==null){n.return=e.return,I=n;break}I=e.return}}function Pf(t){for(;I!==null;){var e=I;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Wl(4,e)}catch(a){ue(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(a){ue(e,s,a)}}var i=e.return;try{Qc(e)}catch(a){ue(e,i,a)}break;case 5:var o=e.return;try{Qc(e)}catch(a){ue(e,o,a)}}}catch(a){ue(e,e.return,a)}if(e===t){I=null;break}var l=e.sibling;if(l!==null){l.return=e.return,I=l;break}I=e.return}}var Ax=Math.ceil,rl=nn.ReactCurrentDispatcher,ud=nn.ReactCurrentOwner,ct=nn.ReactCurrentBatchConfig,W=0,Ce=null,ge=null,Te=0,Je=0,jr=Un(0),ye=0,wi=null,ur=0,Bl=0,dd=0,Ks=null,He=null,hd=0,ts=1/0,jt=null,sl=!1,Jc=null,Sn=null,go=!1,gn=null,il=0,Qs=0,Zc=null,Po=-1,Ro=0;function Ue(){return W&6?he():Po!==-1?Po:Po=he()}function kn(t){return t.mode&1?W&2&&Te!==0?Te&-Te:mx.transition!==null?(Ro===0&&(Ro=Pm()),Ro):(t=H,t!==0||(t=window.event,t=t===void 0?16:jm(t.type)),t):1}function wt(t,e,n,r){if(50<Qs)throw Qs=0,Zc=null,Error(w(185));Mi(t,n,r),(!(W&2)||t!==Ce)&&(t===Ce&&(!(W&2)&&(Bl|=n),ye===4&&dn(t,Te)),Ye(t,r),n===1&&W===0&&!(e.mode&1)&&(ts=he()+500,Ul&&zn()))}function Ye(t,e){var n=t.callbackNode;m0(t,e);var r=Wo(t,t===Ce?Te:0);if(r===0)n!==null&&Fh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Fh(n),e===1)t.tag===0?px(Rf.bind(null,t)):ng(Rf.bind(null,t)),ux(function(){!(W&6)&&zn()}),n=null;else{switch(Rm(r)){case 1:n=Fu;break;case 4:n=Tm;break;case 16:n=Vo;break;case 536870912:n=bm;break;default:n=Vo}n=ev(n,Gg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Gg(t,e){if(Po=-1,Ro=0,W&6)throw Error(w(327));var n=t.callbackNode;if($r()&&t.callbackNode!==n)return null;var r=Wo(t,t===Ce?Te:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ol(t,r);else{e=r;var s=W;W|=2;var i=Qg();(Ce!==t||Te!==e)&&(jt=null,ts=he()+500,sr(t,e));do try{Mx();break}catch(l){Kg(t,l)}while(!0);Xu(),rl.current=i,W=s,ge!==null?e=0:(Ce=null,Te=0,e=ye)}if(e!==0){if(e===2&&(s=Ic(t),s!==0&&(r=s,e=eu(t,s))),e===1)throw n=wi,sr(t,0),dn(t,r),Ye(t,he()),n;if(e===6)dn(t,r);else{if(s=t.current.alternate,!(r&30)&&!Ox(s)&&(e=ol(t,r),e===2&&(i=Ic(t),i!==0&&(r=i,e=eu(t,i))),e===1))throw n=wi,sr(t,0),dn(t,r),Ye(t,he()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(w(345));case 2:Qn(t,He,jt);break;case 3:if(dn(t,r),(r&130023424)===r&&(e=hd+500-he(),10<e)){if(Wo(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){Ue(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Dc(Qn.bind(null,t,He,jt),e);break}Qn(t,He,jt);break;case 4:if(dn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-xt(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=he()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ax(r/1960))-r,10<r){t.timeoutHandle=Dc(Qn.bind(null,t,He,jt),r);break}Qn(t,He,jt);break;case 5:Qn(t,He,jt);break;default:throw Error(w(329))}}}return Ye(t,he()),t.callbackNode===n?Gg.bind(null,t):null}function eu(t,e){var n=Ks;return t.current.memoizedState.isDehydrated&&(sr(t,e).flags|=256),t=ol(t,e),t!==2&&(e=He,He=n,e!==null&&tu(e)),t}function tu(t){He===null?He=t:He.push.apply(He,t)}function Ox(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!St(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function dn(t,e){for(e&=~dd,e&=~Bl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-xt(e),r=1<<n;t[n]=-1,e&=~r}}function Rf(t){if(W&6)throw Error(w(327));$r();var e=Wo(t,0);if(!(e&1))return Ye(t,he()),null;var n=ol(t,e);if(t.tag!==0&&n===2){var r=Ic(t);r!==0&&(e=r,n=eu(t,r))}if(n===1)throw n=wi,sr(t,0),dn(t,e),Ye(t,he()),n;if(n===6)throw Error(w(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Qn(t,He,jt),Ye(t,he()),null}function fd(t,e){var n=W;W|=1;try{return t(e)}finally{W=n,W===0&&(ts=he()+500,Ul&&zn())}}function dr(t){gn!==null&&gn.tag===0&&!(W&6)&&$r();var e=W;W|=1;var n=ct.transition,r=H;try{if(ct.transition=null,H=1,t)return t()}finally{H=r,ct.transition=n,W=e,!(W&6)&&zn()}}function pd(){Je=jr.current,ne(jr)}function sr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,cx(n)),ge!==null)for(n=ge.return;n!==null;){var r=n;switch(Ku(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Go();break;case 3:Zr(),ne(Ke),ne(De),rd();break;case 5:nd(r);break;case 4:Zr();break;case 13:ne(oe);break;case 19:ne(oe);break;case 10:Ju(r.type._context);break;case 22:case 23:pd()}n=n.return}if(Ce=t,ge=t=In(t.current,null),Te=Je=e,ye=0,wi=null,dd=Bl=ur=0,He=Ks=null,Zn!==null){for(e=0;e<Zn.length;e++)if(n=Zn[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Zn=null}return t}function Kg(t,e){do{var n=ge;try{if(Xu(),No.current=nl,tl){for(var r=le.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}tl=!1}if(cr=0,we=ve=le=null,qs=!1,_i=0,ud.current=null,n===null||n.return===null){ye=1,wi=e,ge=null;break}e:{var i=t,o=n.return,l=n,a=e;if(e=Te,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,d=l,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=_f(o);if(v!==null){v.flags&=-257,yf(v,o,l,i,e),v.mode&1&&vf(i,c,e),e=v,a=c;var _=e.updateQueue;if(_===null){var y=new Set;y.add(a),e.updateQueue=y}else _.add(a);break e}else{if(!(e&1)){vf(i,c,e),md();break e}a=Error(w(426))}}else if(se&&l.mode&1){var b=_f(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),yf(b,o,l,i,e),Qu(es(a,l));break e}}i=a=es(a,l),ye!==4&&(ye=2),Ks===null?Ks=[i]:Ks.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var g=Rg(i,a,e);df(i,g);break e;case 1:l=a;var p=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Sn===null||!Sn.has(m)))){i.flags|=65536,e&=-e,i.lanes|=e;var x=Ag(i,l,e);df(i,x);break e}}i=i.return}while(i!==null)}Xg(n)}catch(C){e=C,ge===n&&n!==null&&(ge=n=n.return);continue}break}while(!0)}function Qg(){var t=rl.current;return rl.current=nl,t===null?nl:t}function md(){(ye===0||ye===3||ye===2)&&(ye=4),Ce===null||!(ur&268435455)&&!(Bl&268435455)||dn(Ce,Te)}function ol(t,e){var n=W;W|=2;var r=Qg();(Ce!==t||Te!==e)&&(jt=null,sr(t,e));do try{Dx();break}catch(s){Kg(t,s)}while(!0);if(Xu(),W=n,rl.current=r,ge!==null)throw Error(w(261));return Ce=null,Te=0,ye}function Dx(){for(;ge!==null;)Yg(ge)}function Mx(){for(;ge!==null&&!o0();)Yg(ge)}function Yg(t){var e=Zg(t.alternate,t,Je);t.memoizedProps=t.pendingProps,e===null?Xg(t):ge=e,ud.current=null}function Xg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Tx(n,e),n!==null){n.flags&=32767,ge=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ye=6,ge=null;return}}else if(n=Nx(n,e,Je),n!==null){ge=n;return}if(e=e.sibling,e!==null){ge=e;return}ge=e=t}while(e!==null);ye===0&&(ye=5)}function Qn(t,e,n){var r=H,s=ct.transition;try{ct.transition=null,H=1,Lx(t,e,n,r)}finally{ct.transition=s,H=r}return null}function Lx(t,e,n,r){do $r();while(gn!==null);if(W&6)throw Error(w(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(w(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(g0(t,i),t===Ce&&(ge=Ce=null,Te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||go||(go=!0,ev(Vo,function(){return $r(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=ct.transition,ct.transition=null;var o=H;H=1;var l=W;W|=4,ud.current=null,Px(t,n),Hg(n,t),nx(Ac),Bo=!!Rc,Ac=Rc=null,t.current=n,Rx(n),l0(),W=l,H=o,ct.transition=i}else t.current=n;if(go&&(go=!1,gn=t,il=s),i=t.pendingLanes,i===0&&(Sn=null),u0(n.stateNode),Ye(t,he()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(sl)throw sl=!1,t=Jc,Jc=null,t;return il&1&&t.tag!==0&&$r(),i=t.pendingLanes,i&1?t===Zc?Qs++:(Qs=0,Zc=t):Qs=0,zn(),null}function $r(){if(gn!==null){var t=Rm(il),e=ct.transition,n=H;try{if(ct.transition=null,H=16>t?16:t,gn===null)var r=!1;else{if(t=gn,gn=null,il=0,W&6)throw Error(w(331));var s=W;for(W|=4,I=t.current;I!==null;){var i=I,o=i.child;if(I.flags&16){var l=i.deletions;if(l!==null){for(var a=0;a<l.length;a++){var c=l[a];for(I=c;I!==null;){var d=I;switch(d.tag){case 0:case 11:case 15:Gs(8,d,i)}var h=d.child;if(h!==null)h.return=d,I=h;else for(;I!==null;){d=I;var f=d.sibling,v=d.return;if(Wg(d),d===c){I=null;break}if(f!==null){f.return=v,I=f;break}I=v}}}var _=i.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var b=y.sibling;y.sibling=null,y=b}while(y!==null)}}I=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,I=o;else e:for(;I!==null;){if(i=I,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Gs(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,I=g;break e}I=i.return}}var p=t.current;for(I=p;I!==null;){o=I;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,I=m;else e:for(o=p;I!==null;){if(l=I,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Wl(9,l)}}catch(C){ue(l,l.return,C)}if(l===o){I=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,I=x;break e}I=l.return}}if(W=s,zn(),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(Dl,t)}catch{}r=!0}return r}finally{H=n,ct.transition=e}}return!1}function Af(t,e,n){e=es(n,e),e=Rg(t,e,1),t=Cn(t,e,1),e=Ue(),t!==null&&(Mi(t,1,e),Ye(t,e))}function ue(t,e,n){if(t.tag===3)Af(t,t,n);else for(;e!==null;){if(e.tag===3){Af(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Sn===null||!Sn.has(r))){t=es(n,t),t=Ag(e,t,1),e=Cn(e,t,1),t=Ue(),e!==null&&(Mi(e,1,t),Ye(e,t));break}}e=e.return}}function jx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ue(),t.pingedLanes|=t.suspendedLanes&n,Ce===t&&(Te&n)===n&&(ye===4||ye===3&&(Te&130023424)===Te&&500>he()-hd?sr(t,0):dd|=n),Ye(t,e)}function Jg(t,e){e===0&&(t.mode&1?(e=io,io<<=1,!(io&130023424)&&(io=4194304)):e=1);var n=Ue();t=Xt(t,e),t!==null&&(Mi(t,e,n),Ye(t,n))}function Fx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Jg(t,n)}function Ux(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(e),Jg(t,n)}var Zg;Zg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ke.current)qe=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return qe=!1,Ix(t,e,n);qe=!!(t.flags&131072)}else qe=!1,se&&e.flags&1048576&&rg(e,Yo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;bo(t,e),t=e.pendingProps;var s=Yr(e,De.current);Br(e,n),s=id(null,e,r,t,s,n);var i=od();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Qe(r)?(i=!0,Ko(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,ed(e),s.updater=Vl,e.stateNode=s,s._reactInternals=e,Vc(e,r,t,n),e=$c(null,e,r,!0,i,n)):(e.tag=0,se&&i&&Gu(e),Le(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(bo(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=Vx(r),t=pt(r,t),s){case 0:e=Bc(null,e,r,t,n);break e;case 1:e=Ef(null,e,r,t,n);break e;case 11:e=xf(null,e,r,t,n);break e;case 14:e=wf(null,e,r,pt(r.type,t),n);break e}throw Error(w(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:pt(r,s),Bc(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:pt(r,s),Ef(t,e,r,s,n);case 3:e:{if(Lg(e),t===null)throw Error(w(387));r=e.pendingProps,i=e.memoizedState,s=i.element,cg(t,e),Zo(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=es(Error(w(423)),e),e=Cf(t,e,r,n,s);break e}else if(r!==s){s=es(Error(w(424)),e),e=Cf(t,e,r,n,s);break e}else for(Ze=En(e.stateNode.containerInfo.firstChild),et=e,se=!0,gt=null,n=lg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Xr(),r===s){e=Jt(t,e,n);break e}Le(t,e,r,n)}e=e.child}return e;case 5:return ug(e),t===null&&Fc(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Oc(r,s)?o=null:i!==null&&Oc(r,i)&&(e.flags|=32),Mg(t,e),Le(t,e,o,n),e.child;case 6:return t===null&&Fc(e),null;case 13:return jg(t,e,n);case 4:return td(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Jr(e,null,r,n):Le(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:pt(r,s),xf(t,e,r,s,n);case 7:return Le(t,e,e.pendingProps,n),e.child;case 8:return Le(t,e,e.pendingProps.children,n),e.child;case 12:return Le(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,ee(Xo,r._currentValue),r._currentValue=o,i!==null)if(St(i.value,o)){if(i.children===s.children&&!Ke.current){e=Jt(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=qt(-1,n&-n),a.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?a.next=a:(a.next=d.next,d.next=a),c.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Uc(i.return,n,e),l.lanes|=n;break}a=a.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(w(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Uc(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Le(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Br(e,n),s=ut(s),r=r(s),e.flags|=1,Le(t,e,r,n),e.child;case 14:return r=e.type,s=pt(r,e.pendingProps),s=pt(r.type,s),wf(t,e,r,s,n);case 15:return Og(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:pt(r,s),bo(t,e),e.tag=1,Qe(r)?(t=!0,Ko(e)):t=!1,Br(e,n),Pg(e,r,s),Vc(e,r,s,n),$c(null,e,r,!0,t,n);case 19:return Fg(t,e,n);case 22:return Dg(t,e,n)}throw Error(w(156,e.tag))};function ev(t,e){return Nm(t,e)}function zx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lt(t,e,n,r){return new zx(t,e,n,r)}function gd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Vx(t){if(typeof t=="function")return gd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Mu)return 11;if(t===Lu)return 14}return 2}function In(t,e){var n=t.alternate;return n===null?(n=lt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ao(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")gd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Nr:return ir(n.children,s,i,e);case Du:o=8,s|=8;break;case dc:return t=lt(12,n,e,s|2),t.elementType=dc,t.lanes=i,t;case hc:return t=lt(13,n,e,s),t.elementType=hc,t.lanes=i,t;case fc:return t=lt(19,n,e,s),t.elementType=fc,t.lanes=i,t;case um:return $l(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case am:o=10;break e;case cm:o=9;break e;case Mu:o=11;break e;case Lu:o=14;break e;case an:o=16,r=null;break e}throw Error(w(130,t==null?t:typeof t,""))}return e=lt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function ir(t,e,n,r){return t=lt(7,t,r,e),t.lanes=n,t}function $l(t,e,n,r){return t=lt(22,t,r,e),t.elementType=um,t.lanes=n,t.stateNode={isHidden:!1},t}function qa(t,e,n){return t=lt(6,t,null,e),t.lanes=n,t}function Ga(t,e,n){return e=lt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Wx(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Na(0),this.expirationTimes=Na(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Na(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function vd(t,e,n,r,s,i,o,l,a){return t=new Wx(t,e,n,l,a),e===1?(e=1,i===!0&&(e|=8)):e=0,i=lt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ed(i),t}function Bx(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ir,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function tv(t){if(!t)return On;t=t._reactInternals;e:{if(xr(t)!==t||t.tag!==1)throw Error(w(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Qe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(w(171))}if(t.tag===1){var n=t.type;if(Qe(n))return tg(t,n,e)}return e}function nv(t,e,n,r,s,i,o,l,a){return t=vd(n,r,!0,t,s,i,o,l,a),t.context=tv(null),n=t.current,r=Ue(),s=kn(n),i=qt(r,s),i.callback=e??null,Cn(n,i,s),t.current.lanes=s,Mi(t,s,r),Ye(t,r),t}function Hl(t,e,n,r){var s=e.current,i=Ue(),o=kn(s);return n=tv(n),e.context===null?e.context=n:e.pendingContext=n,e=qt(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Cn(s,e,o),t!==null&&(wt(t,s,o,i),Io(t,s,o)),o}function ll(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Of(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function _d(t,e){Of(t,e),(t=t.alternate)&&Of(t,e)}function $x(){return null}var rv=typeof reportError=="function"?reportError:function(t){console.error(t)};function yd(t){this._internalRoot=t}ql.prototype.render=yd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(w(409));Hl(t,e,null,null)};ql.prototype.unmount=yd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;dr(function(){Hl(null,t,null,null)}),e[Yt]=null}};function ql(t){this._internalRoot=t}ql.prototype.unstable_scheduleHydration=function(t){if(t){var e=Dm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<un.length&&e!==0&&e<un[n].priority;n++);un.splice(n,0,t),n===0&&Lm(t)}};function xd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Gl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Df(){}function Hx(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var c=ll(o);i.call(c)}}var o=nv(e,r,t,0,null,!1,!1,"",Df);return t._reactRootContainer=o,t[Yt]=o.current,fi(t.nodeType===8?t.parentNode:t),dr(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var c=ll(a);l.call(c)}}var a=vd(t,0,!1,null,null,!1,!1,"",Df);return t._reactRootContainer=a,t[Yt]=a.current,fi(t.nodeType===8?t.parentNode:t),dr(function(){Hl(e,a,n,r)}),a}function Kl(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var a=ll(o);l.call(a)}}Hl(e,o,t,s)}else o=Hx(n,e,t,s,r);return ll(o)}Am=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=js(e.pendingLanes);n!==0&&(Uu(e,n|1),Ye(e,he()),!(W&6)&&(ts=he()+500,zn()))}break;case 13:dr(function(){var r=Xt(t,1);if(r!==null){var s=Ue();wt(r,t,1,s)}}),_d(t,1)}};zu=function(t){if(t.tag===13){var e=Xt(t,134217728);if(e!==null){var n=Ue();wt(e,t,134217728,n)}_d(t,134217728)}};Om=function(t){if(t.tag===13){var e=kn(t),n=Xt(t,e);if(n!==null){var r=Ue();wt(n,t,e,r)}_d(t,e)}};Dm=function(){return H};Mm=function(t,e){var n=H;try{return H=t,e()}finally{H=n}};Cc=function(t,e,n){switch(e){case"input":if(gc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Fl(r);if(!s)throw Error(w(90));hm(r),gc(r,s)}}}break;case"textarea":pm(t,n);break;case"select":e=n.value,e!=null&&Ur(t,!!n.multiple,e,!1)}};wm=fd;Em=dr;var qx={usingClientEntryPoint:!1,Events:[ji,Rr,Fl,ym,xm,fd]},bs={findFiberByHostInstance:Jn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Gx={bundleType:bs.bundleType,version:bs.version,rendererPackageName:bs.rendererPackageName,rendererConfig:bs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=km(t),t===null?null:t.stateNode},findFiberByHostInstance:bs.findFiberByHostInstance||$x,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vo.isDisabled&&vo.supportsFiber)try{Dl=vo.inject(Gx),At=vo}catch{}}rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qx;rt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xd(e))throw Error(w(200));return Bx(t,e,null,n)};rt.createRoot=function(t,e){if(!xd(t))throw Error(w(299));var n=!1,r="",s=rv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=vd(t,1,!1,null,null,n,!1,r,s),t[Yt]=e.current,fi(t.nodeType===8?t.parentNode:t),new yd(e)};rt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(w(188)):(t=Object.keys(t).join(","),Error(w(268,t)));return t=km(e),t=t===null?null:t.stateNode,t};rt.flushSync=function(t){return dr(t)};rt.hydrate=function(t,e,n){if(!Gl(e))throw Error(w(200));return Kl(null,t,e,!0,n)};rt.hydrateRoot=function(t,e,n){if(!xd(t))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=rv;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=nv(e,null,t,1,n??null,s,!1,i,o),t[Yt]=e.current,fi(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new ql(e)};rt.render=function(t,e,n){if(!Gl(e))throw Error(w(200));return Kl(null,t,e,!1,n)};rt.unmountComponentAtNode=function(t){if(!Gl(t))throw Error(w(40));return t._reactRootContainer?(dr(function(){Kl(null,null,t,!1,function(){t._reactRootContainer=null,t[Yt]=null})}),!0):!1};rt.unstable_batchedUpdates=fd;rt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Gl(n))throw Error(w(200));if(t==null||t._reactInternals===void 0)throw Error(w(38));return Kl(t,e,n,!1,r)};rt.version="18.3.1-next-f1338f8080-20240426";function sv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sv)}catch(t){console.error(t)}}sv(),sm.exports=rt;var Kx=sm.exports,Mf=Kx;cc.createRoot=Mf.createRoot,cc.hydrateRoot=Mf.hydrateRoot;var Lf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E=function(t,e){if(!t)throw ds(e)},ds=function(t){return new Error("Firebase Database ("+iv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Qx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},wd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,a=s+2<t.length,c=a?t[s+2]:0,d=i>>2,h=(i&3)<<4|l>>4;let f=(l&15)<<2|c>>6,v=c&63;a||(v=64,o||(f=64)),r.push(n[d],n[h],n[f],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ov(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Qx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||c==null||h==null)throw new Yx;const f=i<<2|l>>4;if(r.push(f),c!==64){const v=l<<4&240|c>>2;if(r.push(v),h!==64){const _=c<<6&192|h;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Yx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lv=function(t){const e=ov(t);return wd.encodeByteArray(e,!0)},al=function(t){return lv(t).replace(/\./g,"")},cl=function(t){try{return wd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xx(t){return av(void 0,t)}function av(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Jx(n)||(t[n]=av(t[n],e[n]));return t}function Jx(t){return t!=="__proto__"}/**
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
 */function Zx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ew=()=>Zx().__FIREBASE_DEFAULTS__,tw=()=>{if(typeof process>"u"||typeof Lf>"u")return;const t=Lf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},nw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&cl(t[1]);return e&&JSON.parse(e)},Ed=()=>{try{return ew()||tw()||nw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},cv=t=>{var e,n;return(n=(e=Ed())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},rw=t=>{const e=cv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},uv=()=>{var t;return(t=Ed())===null||t===void 0?void 0:t.config},dv=t=>{var e;return(e=Ed())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function sw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[al(JSON.stringify(n)),al(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Cd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ve())}function iw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ow(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function hv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lw(){const t=Ve();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function aw(){return iv.NODE_ADMIN===!0}function cw(){try{return typeof indexedDB=="object"}catch{return!1}}function uw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw="FirebaseError";class Vn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=dw,Object.setPrototypeOf(this,Vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ui.prototype.create)}}class Ui{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?hw(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Vn(s,l,r)}}function hw(t,e){return t.replace(fw,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const fw=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(t){return JSON.parse(t)}function _e(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fv=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=Ei(cl(i[0])||""),n=Ei(cl(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},pw=function(t){const e=fv(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},mw=function(t){const e=fv(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function hr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function nu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ul(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function dl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(jf(i)&&jf(o)){if(!dl(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function jf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Us(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function zs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,d;for(let h=0;h<80;h++){h<40?h<20?(c=l^i&(o^l),d=1518500249):(c=i^o^l,d=1859775393):h<60?(c=i&o|l&(i|o),d=2400959708):(c=i^o^l,d=3395469782);const f=(s<<5|s>>>27)+c+a+d+r[h]&4294967295;a=l,l=o,o=(i<<30|i>>>2)&4294967295,i=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function vw(t,e){const n=new _w(t,e);return n.subscribe.bind(n)}class _w{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");yw(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ka),s.error===void 0&&(s.error=Ka),s.complete===void 0&&(s.complete=Ka);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ka(){}function Ql(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,E(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Yl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Se(t){return t&&t._delegate?t._delegate:t}class fr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class ww{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new hs;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Cw(e))try{this.getOrInitializeService({instanceIdentifier:Yn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Yn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yn){return this.instances.has(e)}getOptions(e=Yn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ew(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Yn){return this.component?this.component.multipleInstances?e:Yn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ew(t){return t===Yn?void 0:t}function Cw(t){return t.instantiationMode==="EAGER"}/**
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
 */class Sw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ww(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var K;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(K||(K={}));const kw={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},Iw=K.INFO,Nw={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},Tw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Nw[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Sd{constructor(e){this.name=e,this._logLevel=Iw,this._logHandler=Tw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in K))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...e),this._logHandler(this,K.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...e),this._logHandler(this,K.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,K.INFO,...e),this._logHandler(this,K.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,K.WARN,...e),this._logHandler(this,K.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...e),this._logHandler(this,K.ERROR,...e)}}const bw=(t,e)=>e.some(n=>t instanceof n);let Ff,Uf;function Pw(){return Ff||(Ff=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Rw(){return Uf||(Uf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pv=new WeakMap,ru=new WeakMap,mv=new WeakMap,Qa=new WeakMap,kd=new WeakMap;function Aw(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Nn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&pv.set(n,t)}).catch(()=>{}),kd.set(e,t),e}function Ow(t){if(ru.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ru.set(t,e)}let su={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ru.get(t);if(e==="objectStoreNames")return t.objectStoreNames||mv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Dw(t){su=t(su)}function Mw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ya(this),e,...n);return mv.set(r,e.sort?e.sort():[e]),Nn(r)}:Rw().includes(t)?function(...e){return t.apply(Ya(this),e),Nn(pv.get(this))}:function(...e){return Nn(t.apply(Ya(this),e))}}function Lw(t){return typeof t=="function"?Mw(t):(t instanceof IDBTransaction&&Ow(t),bw(t,Pw())?new Proxy(t,su):t)}function Nn(t){if(t instanceof IDBRequest)return Aw(t);if(Qa.has(t))return Qa.get(t);const e=Lw(t);return e!==t&&(Qa.set(t,e),kd.set(e,t)),e}const Ya=t=>kd.get(t);function jw(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Nn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Nn(o.result),a.oldVersion,a.newVersion,Nn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const Fw=["get","getKey","getAll","getAllKeys","count"],Uw=["put","add","delete","clear"],Xa=new Map;function zf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Xa.get(e))return Xa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Uw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Fw.includes(n)))return;const i=async function(o,...l){const a=this.transaction(o,s?"readwrite":"readonly");let c=a.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),s&&a.done]))[0]};return Xa.set(e,i),i}Dw(t=>({...t,get:(e,n,r)=>zf(e,n)||t.get(e,n,r),has:(e,n)=>!!zf(e,n)||t.has(e,n)}));/**
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
 */class zw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Vw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Vw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const iu="@firebase/app",Vf="0.10.13";/**
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
 */const Zt=new Sd("@firebase/app"),Ww="@firebase/app-compat",Bw="@firebase/analytics-compat",$w="@firebase/analytics",Hw="@firebase/app-check-compat",qw="@firebase/app-check",Gw="@firebase/auth",Kw="@firebase/auth-compat",Qw="@firebase/database",Yw="@firebase/data-connect",Xw="@firebase/database-compat",Jw="@firebase/functions",Zw="@firebase/functions-compat",e1="@firebase/installations",t1="@firebase/installations-compat",n1="@firebase/messaging",r1="@firebase/messaging-compat",s1="@firebase/performance",i1="@firebase/performance-compat",o1="@firebase/remote-config",l1="@firebase/remote-config-compat",a1="@firebase/storage",c1="@firebase/storage-compat",u1="@firebase/firestore",d1="@firebase/vertexai-preview",h1="@firebase/firestore-compat",f1="firebase",p1="10.14.1";/**
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
 */const ou="[DEFAULT]",m1={[iu]:"fire-core",[Ww]:"fire-core-compat",[$w]:"fire-analytics",[Bw]:"fire-analytics-compat",[qw]:"fire-app-check",[Hw]:"fire-app-check-compat",[Gw]:"fire-auth",[Kw]:"fire-auth-compat",[Qw]:"fire-rtdb",[Yw]:"fire-data-connect",[Xw]:"fire-rtdb-compat",[Jw]:"fire-fn",[Zw]:"fire-fn-compat",[e1]:"fire-iid",[t1]:"fire-iid-compat",[n1]:"fire-fcm",[r1]:"fire-fcm-compat",[s1]:"fire-perf",[i1]:"fire-perf-compat",[o1]:"fire-rc",[l1]:"fire-rc-compat",[a1]:"fire-gcs",[c1]:"fire-gcs-compat",[u1]:"fire-fst",[h1]:"fire-fst-compat",[d1]:"fire-vertex","fire-js":"fire-js",[f1]:"fire-js-all"};/**
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
 */const hl=new Map,g1=new Map,lu=new Map;function Wf(t,e){try{t.container.addComponent(e)}catch(n){Zt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ns(t){const e=t.name;if(lu.has(e))return Zt.debug(`There were multiple attempts to register component ${e}.`),!1;lu.set(e,t);for(const n of hl.values())Wf(n,t);for(const n of g1.values())Wf(n,t);return!0}function Id(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function _t(t){return t.settings!==void 0}/**
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
 */const v1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Tn=new Ui("app","Firebase",v1);/**
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
 */class _1{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new fr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tn.create("app-deleted",{appName:this._name})}}/**
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
 */const ps=p1;function gv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ou,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Tn.create("bad-app-name",{appName:String(s)});if(n||(n=uv()),!n)throw Tn.create("no-options");const i=hl.get(s);if(i){if(dl(n,i.options)&&dl(r,i.config))return i;throw Tn.create("duplicate-app",{appName:s})}const o=new Sw(s);for(const a of lu.values())o.addComponent(a);const l=new _1(n,r,o);return hl.set(s,l),l}function vv(t=ou){const e=hl.get(t);if(!e&&t===ou&&uv())return gv();if(!e)throw Tn.create("no-app",{appName:t});return e}function bn(t,e,n){var r;let s=(r=m1[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zt.warn(l.join(" "));return}ns(new fr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const y1="firebase-heartbeat-database",x1=1,Ci="firebase-heartbeat-store";let Ja=null;function _v(){return Ja||(Ja=jw(y1,x1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ci)}catch(n){console.warn(n)}}}}).catch(t=>{throw Tn.create("idb-open",{originalErrorMessage:t.message})})),Ja}async function w1(t){try{const n=(await _v()).transaction(Ci),r=await n.objectStore(Ci).get(yv(t));return await n.done,r}catch(e){if(e instanceof Vn)Zt.warn(e.message);else{const n=Tn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Zt.warn(n.message)}}}async function Bf(t,e){try{const r=(await _v()).transaction(Ci,"readwrite");await r.objectStore(Ci).put(e,yv(t)),await r.done}catch(n){if(n instanceof Vn)Zt.warn(n.message);else{const r=Tn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Zt.warn(r.message)}}}function yv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const E1=1024,C1=30*24*60*60*1e3;class S1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new I1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=$f();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=C1}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Zt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=$f(),{heartbeatsToSend:r,unsentEntries:s}=k1(this._heartbeatsCache.heartbeats),i=al(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Zt.warn(n),""}}}function $f(){return new Date().toISOString().substring(0,10)}function k1(t,e=E1){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Hf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Hf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class I1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cw()?uw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await w1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Bf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Bf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Hf(t){return al(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function N1(t){ns(new fr("platform-logger",e=>new zw(e),"PRIVATE")),ns(new fr("heartbeat",e=>new S1(e),"PRIVATE")),bn(iu,Vf,t),bn(iu,Vf,"esm2017"),bn("fire-js","")}N1("");var qf={};const Gf="@firebase/database",Kf="1.0.8";/**
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
 */let xv="";function T1(t){xv=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),_e(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ei(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return kt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new b1(e)}}catch{}return new P1},tr=wv("localStorage"),R1=wv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr=new Sd("@firebase/database"),Ev=function(){let t=1;return function(){return t++}}(),Cv=function(t){const e=xw(t),n=new gw;n.update(e);const r=n.digest();return wd.encodeByteArray(r)},zi=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=zi.apply(null,r):typeof r=="object"?e+=_e(r):e+=r,e+=" "}return e};let Ys=null,Qf=!0;const A1=function(t,e){E(!0,"Can't turn on custom loggers persistently."),Hr.logLevel=K.VERBOSE,Ys=Hr.log.bind(Hr)},Ne=function(...t){if(Qf===!0&&(Qf=!1,Ys===null&&R1.get("logging_enabled")===!0&&A1()),Ys){const e=zi.apply(null,t);Ys(e)}},Vi=function(t){return function(...e){Ne(t,...e)}},au=function(...t){const e="FIREBASE INTERNAL ERROR: "+zi(...t);Hr.error(e)},en=function(...t){const e=`FIREBASE FATAL ERROR: ${zi(...t)}`;throw Hr.error(e),new Error(e)},ze=function(...t){const e="FIREBASE WARNING: "+zi(...t);Hr.warn(e)},O1=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ze("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Nd=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},D1=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},pr="[MIN_NAME]",Dn="[MAX_NAME]",wr=function(t,e){if(t===e)return 0;if(t===pr||e===Dn)return-1;if(e===pr||t===Dn)return 1;{const n=Yf(t),r=Yf(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},M1=function(t,e){return t===e?0:t<e?-1:1},Ps=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+_e(e))},Td=function(t){if(typeof t!="object"||t===null)return _e(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=_e(e[r]),n+=":",n+=Td(t[e[r]]);return n+="}",n},Sv=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function Pe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const kv=function(t){E(!Nd(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,l,a;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(i%2?1:0),i=Math.floor(i/2);c.push(s?1:0),c.reverse();const d=c.join("");let h="";for(a=0;a<64;a+=8){let f=parseInt(d.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},L1=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},j1=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function F1(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const U1=new RegExp("^-?(0*)\\d{1,10}$"),z1=-2147483648,V1=2147483647,Yf=function(t){if(U1.test(t)){const e=Number(t);if(e>=z1&&e<=V1)return e}return null},ms=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ze("Exception was thrown by user callback.",n),e},Math.floor(0))}},W1=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Xs=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class B1{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){ze(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ne("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ze(e)}}class Oo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Oo.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd="5",Iv="v",Nv="s",Tv="r",bv="f",Pv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Rv="ls",Av="p",cu="ac",Ov="websocket",Dv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(e,n,r,s,i=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=tr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&tr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function H1(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Lv(t,e,n){E(typeof e=="string","typeof type must == string"),E(typeof n=="object","typeof params must == object");let r;if(e===Ov)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Dv)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);H1(t)&&(n.ns=t.namespace);const s=[];return Pe(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{constructor(){this.counters_={}}incrementCounter(e,n=1){kt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Xx(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za={},ec={};function Pd(t){const e=t.toString();return Za[e]||(Za[e]=new q1),Za[e]}function G1(t,e){const n=t.toString();return ec[n]||(ec[n]=e()),ec[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&ms(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf="start",Q1="close",Y1="pLPCommand",X1="pRTLPCB",jv="id",Fv="pw",Uv="ser",J1="cb",Z1="seg",eE="ts",tE="d",nE="dframe",zv=1870,Vv=30,rE=zv-Vv,sE=25e3,iE=3e4;class Fr{constructor(e,n,r,s,i,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Vi(e),this.stats_=Pd(n),this.urlFn=a=>(this.appCheckToken&&(a[cu]=this.appCheckToken),Lv(n,Dv,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new K1(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(iE)),D1(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Rd((...i)=>{const[o,l,a,c,d]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Xf)this.id=l,this.password=a;else if(o===Q1)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,l]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Xf]="t",r[Uv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[J1]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Iv]=bd,this.transportSessionId&&(r[Nv]=this.transportSessionId),this.lastSessionId&&(r[Rv]=this.lastSessionId),this.applicationId&&(r[Av]=this.applicationId),this.appCheckToken&&(r[cu]=this.appCheckToken),typeof location<"u"&&location.hostname&&Pv.test(location.hostname)&&(r[Tv]=bv);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Fr.forceAllow_=!0}static forceDisallow(){Fr.forceDisallow_=!0}static isAvailable(){return Fr.forceAllow_?!0:!Fr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!L1()&&!j1()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=_e(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=lv(n),s=Sv(r,rE);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[nE]="t",r[jv]=e,r[Fv]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=_e(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Rd{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Ev(),window[Y1+this.uniqueCallbackIdentifier]=e,window[X1+this.uniqueCallbackIdentifier]=n,this.myIFrame=Rd.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ne("frame writing exception"),l.stack&&Ne(l.stack),Ne(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ne("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[jv]=this.myID,e[Fv]=this.myPW,e[Uv]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Vv+r.length<=zv;){const o=this.pendingSegs.shift();r=r+"&"+Z1+s+"="+o.seg+"&"+eE+s+"="+o.ts+"&"+tE+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(sE)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ne("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oE=16384,lE=45e3;let fl=null;typeof MozWebSocket<"u"?fl=MozWebSocket:typeof WebSocket<"u"&&(fl=WebSocket);class vt{constructor(e,n,r,s,i,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Vi(this.connId),this.stats_=Pd(n),this.connURL=vt.connectionURL_(n,o,l,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[Iv]=bd,typeof location<"u"&&location.hostname&&Pv.test(location.hostname)&&(o[Tv]=bv),n&&(o[Nv]=n),r&&(o[Rv]=r),s&&(o[cu]=s),i&&(o[Av]=i),Lv(e,Ov,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,tr.set("previous_websocket_failure",!0);try{let r;aw(),this.mySock=new fl(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){vt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&fl!==null&&!vt.forceDisallow_}static previouslyFailed(){return tr.isInMemoryStorage||tr.get("previous_websocket_failure")===!0}markConnectionHealthy(){tr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ei(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(E(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=_e(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Sv(n,oE);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(lE))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}vt.responsesRequiredToBeHealthy=2;vt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Fr,vt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=vt&&vt.isAvailable();let r=n&&!vt.previouslyFailed();if(e.webSocketOnly&&(n||ze("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[vt];else{const s=this.transports_=[];for(const i of Si.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);Si.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Si.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE=6e4,cE=5e3,uE=10*1024,dE=100*1024,tc="t",Jf="d",hE="s",Zf="r",fE="e",ep="o",tp="a",np="n",rp="p",pE="h";class mE{constructor(e,n,r,s,i,o,l,a,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Vi("c:"+this.id+":"),this.transportManager_=new Si(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Xs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>dE?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>uE?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(tc in e){const n=e[tc];n===tp?this.upgradeIfSecondaryHealthy_():n===Zf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===ep&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ps("t",e),r=Ps("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:rp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:tp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:np,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ps("t",e),r=Ps("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ps(tc,e);if(Jf in e){const r=e[Jf];if(n===pE){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===np){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===hE?this.onConnectionShutdown_(r):n===Zf?this.onReset_(r):n===fE?au("Server Error: "+r):n===ep?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):au("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),bd!==r&&ze("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Xs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(aE))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Xs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(cE))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:rp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(tr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(e){this.allowedEvents_=e,this.listeners_={},E(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){E(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl extends Bv{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Cd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new pl}getInitialEvent(e){return E(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp=32,ip=768;class q{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function B(){return new q("")}function j(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Mn(t){return t.pieces_.length-t.pieceNum_}function Z(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new q(t.pieces_,e)}function Ad(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function gE(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ki(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function $v(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new q(e,0)}function de(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof q)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new q(n,0)}function F(t){return t.pieceNum_>=t.pieces_.length}function je(t,e){const n=j(t),r=j(e);if(n===null)return e;if(n===r)return je(Z(t),Z(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function vE(t,e){const n=ki(t,0),r=ki(e,0);for(let s=0;s<n.length&&s<r.length;s++){const i=wr(n[s],r[s]);if(i!==0)return i}return n.length===r.length?0:n.length<r.length?-1:1}function Od(t,e){if(Mn(t)!==Mn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function at(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Mn(t)>Mn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class _E{constructor(e,n){this.errorPrefix_=n,this.parts_=ki(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Yl(this.parts_[r]);Hv(this)}}function yE(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Yl(e),Hv(t)}function xE(t){const e=t.parts_.pop();t.byteLength_-=Yl(e),t.parts_.length>0&&(t.byteLength_-=1)}function Hv(t){if(t.byteLength_>ip)throw new Error(t.errorPrefix_+"has a key path longer than "+ip+" bytes ("+t.byteLength_+").");if(t.parts_.length>sp)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+sp+") or object contains a cycle "+Xn(t))}function Xn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd extends Bv{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Dd}getInitialEvent(e){return E(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs=1e3,wE=60*5*1e3,op=30*1e3,EE=1.3,CE=3e4,SE="server_kill",lp=3;class Gt extends Wv{constructor(e,n,r,s,i,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Gt.nextPersistentConnectionId_++,this.log_=Vi("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Rs,this.maxReconnectDelay_=wE,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Dd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&pl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(_e(i)),E(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new hs,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),E(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const l={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,l=>{const a=l.d,c=l.s;Gt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&kt(e,"w")){const r=hr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();ze(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||mw(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=op)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=pw(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+_e(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):au("Unrecognized action received from server: "+_e(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){E(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Rs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Rs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>CE&&(this.reconnectDelay_=Rs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*EE)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Gt.nextConnectionId_++,i=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},c=function(h){E(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Ne("getToken() completed but was canceled"):(Ne("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,l=new mE(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,v=>{ze(v+" ("+this.repoInfo_.toString()+")"),this.interrupt(SE)},i))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&ze(h),a())}}}interrupt(e){Ne("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ne("Resuming connection for reason: "+e),delete this.interruptReasons_[e],nu(this.interruptReasons_)&&(this.reconnectDelay_=Rs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>Td(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new q(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){Ne("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=lp&&(this.reconnectDelay_=op,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ne("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=lp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+xv.replace(/\./g,"-")]=1,Cd()?e["framework.cordova"]=1:hv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=pl.getInstance().currentlyOnline();return nu(this.interruptReasons_)&&e}}Gt.nextPersistentConnectionId_=0;Gt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Xl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new U(pr,e),s=new U(pr,n);return this.compare(r,s)!==0}minPost(){return U.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _o;class qv extends Xl{static get __EMPTY_NODE(){return _o}static set __EMPTY_NODE(e){_o=e}compare(e,n){return wr(e.name,n.name)}isDefinedOn(e){throw ds("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return U.MIN}maxPost(){return new U(Dn,_o)}makePost(e,n){return E(typeof e=="string","KeyIndex indexValue must always be a string."),new U(e,_o)}toString(){return".key"}}const or=new qv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ee{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ee.RED,this.left=s??Ge.EMPTY_NODE,this.right=i??Ge.EMPTY_NODE}copy(e,n,r,s,i){return new Ee(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ge.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ge.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ee.RED=!0;Ee.BLACK=!1;class kE{copy(e,n,r,s,i){return this}insert(e,n,r){return new Ee(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ge{constructor(e,n=Ge.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ge(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ee.BLACK,null,null))}remove(e){return new Ge(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ee.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new yo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new yo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new yo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new yo(this.root_,null,this.comparator_,!0,e)}}Ge.EMPTY_NODE=new kE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IE(t,e){return wr(t.name,e.name)}function Md(t,e){return wr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uu;function NE(t){uu=t}const Gv=function(t){return typeof t=="number"?"number:"+kv(t):"string:"+t},Kv=function(t){if(t.isLeafNode()){const e=t.val();E(typeof e=="string"||typeof e=="number"||typeof e=="object"&&kt(e,".sv"),"Priority must be a string or number.")}else E(t===uu||t.isEmpty(),"priority of unexpected type.");E(t===uu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ap;class xe{constructor(e,n=xe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,E(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Kv(this.priorityNode_)}static set __childrenNodeConstructor(e){ap=e}static get __childrenNodeConstructor(){return ap}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new xe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:xe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return F(e)?this:j(e)===".priority"?this.priorityNode_:xe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:xe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=j(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(E(r!==".priority"||Mn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,xe.__childrenNodeConstructor.EMPTY_NODE.updateChild(Z(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Gv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=kv(this.value_):e+=this.value_,this.lazyHash_=Cv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===xe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof xe.__childrenNodeConstructor?-1:(E(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=xe.VALUE_TYPE_ORDER.indexOf(n),i=xe.VALUE_TYPE_ORDER.indexOf(r);return E(s>=0,"Unknown leaf type: "+n),E(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}xe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qv,Yv;function TE(t){Qv=t}function bE(t){Yv=t}class PE extends Xl{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?wr(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return U.MIN}maxPost(){return new U(Dn,new xe("[PRIORITY-POST]",Yv))}makePost(e,n){const r=Qv(e);return new U(n,new xe("[PRIORITY-POST]",r))}toString(){return".priority"}}const ie=new PE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE=Math.log(2);class AE{constructor(e){const n=i=>parseInt(Math.log(i)/RE,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ml=function(t,e,n,r){t.sort(e);const s=function(a,c){const d=c-a;let h,f;if(d===0)return null;if(d===1)return h=t[a],f=n?n(h):h,new Ee(f,h.node,Ee.BLACK,null,null);{const v=parseInt(d/2,10)+a,_=s(a,v),y=s(v+1,c);return h=t[v],f=n?n(h):h,new Ee(f,h.node,Ee.BLACK,_,y)}},i=function(a){let c=null,d=null,h=t.length;const f=function(_,y){const b=h-_,g=h;h-=_;const p=s(b+1,g),m=t[b],x=n?n(m):m;v(new Ee(x,m.node,y,null,p))},v=function(_){c?(c.left=_,c=_):(d=_,c=_)};for(let _=0;_<a.count;++_){const y=a.nextBitIsOne(),b=Math.pow(2,a.count-(_+1));y?f(b,Ee.BLACK):(f(b,Ee.BLACK),f(b,Ee.RED))}return d},o=new AE(t.length),l=i(o);return new Ge(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nc;const kr={};class Wt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return E(kr&&ie,"ChildrenNode.ts has not been loaded"),nc=nc||new Wt({".priority":kr},{".priority":ie}),nc}get(e){const n=hr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ge?n:null}hasIndex(e){return kt(this.indexSet_,e.toString())}addIndex(e,n){E(e!==or,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(U.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let l;s?l=ml(r,e.getCompare()):l=kr;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const d=Object.assign({},this.indexes_);return d[a]=l,new Wt(d,c)}addToIndexes(e,n){const r=ul(this.indexes_,(s,i)=>{const o=hr(this.indexSet_,i);if(E(o,"Missing index implementation for "+i),s===kr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(U.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),ml(l,o.getCompare())}else return kr;else{const l=n.get(e.name);let a=s;return l&&(a=a.remove(new U(e.name,l))),a.insert(e,e.node)}});return new Wt(r,this.indexSet_)}removeFromIndexes(e,n){const r=ul(this.indexes_,s=>{if(s===kr)return s;{const i=n.get(e.name);return i?s.remove(new U(e.name,i)):s}});return new Wt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let As;class A{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Kv(this.priorityNode_),this.children_.isEmpty()&&E(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return As||(As=new A(new Ge(Md),null,Wt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||As}updatePriority(e){return this.children_.isEmpty()?this:new A(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?As:n}}getChild(e){const n=j(e);return n===null?this:this.getImmediateChild(n).getChild(Z(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(E(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new U(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?As:this.priorityNode_;return new A(s,o,i)}}updateChild(e,n){const r=j(e);if(r===null)return n;{E(j(e)!==".priority"||Mn(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(Z(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(ie,(o,l)=>{n[o]=l.val(e),r++,i&&A.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Gv(this.getPriority().val())+":"),this.forEachChild(ie,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":Cv(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new U(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new U(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new U(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,U.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,U.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Wi?-1:0}withIndex(e){if(e===or||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new A(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===or||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ie),s=n.getIterator(ie);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===or?null:this.indexMap_.get(e.toString())}}A.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class OE extends A{constructor(){super(new Ge(Md),A.EMPTY_NODE,Wt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return A.EMPTY_NODE}isEmpty(){return!1}}const Wi=new OE;Object.defineProperties(U,{MIN:{value:new U(pr,A.EMPTY_NODE)},MAX:{value:new U(Dn,Wi)}});qv.__EMPTY_NODE=A.EMPTY_NODE;xe.__childrenNodeConstructor=A;NE(Wi);bE(Wi);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE=!0;function me(t,e=null){if(t===null)return A.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),E(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new xe(n,me(e))}if(!(t instanceof Array)&&DE){const n=[];let r=!1;if(Pe(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=me(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new U(o,a)))}}),n.length===0)return A.EMPTY_NODE;const i=ml(n,IE,o=>o.name,Md);if(r){const o=ml(n,ie.getCompare());return new A(i,me(e),new Wt({".priority":o},{".priority":ie}))}else return new A(i,me(e),Wt.Default)}else{let n=A.EMPTY_NODE;return Pe(t,(r,s)=>{if(kt(t,r)&&r.substring(0,1)!=="."){const i=me(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(me(e))}}TE(me);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld extends Xl{constructor(e){super(),this.indexPath_=e,E(!F(e)&&j(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?wr(e.name,n.name):i}makePost(e,n){const r=me(e),s=A.EMPTY_NODE.updateChild(this.indexPath_,r);return new U(n,s)}maxPost(){const e=A.EMPTY_NODE.updateChild(this.indexPath_,Wi);return new U(Dn,e)}toString(){return ki(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME extends Xl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?wr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return U.MIN}maxPost(){return U.MAX}makePost(e,n){const r=me(e);return new U(n,r)}toString(){return".value"}}const Xv=new ME;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jv(t){return{type:"value",snapshotNode:t}}function rs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ii(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ni(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function LE(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e){this.index_=e}updateChild(e,n,r,s,i,o){E(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(s).equals(r.getChild(s))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Ii(n,l)):E(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(rs(n,r)):o.trackChildChange(Ni(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ie,(s,i)=>{n.hasChild(s)||r.trackChildChange(Ii(s,i))}),n.isLeafNode()||n.forEachChild(ie,(s,i)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(i)||r.trackChildChange(Ni(s,i,o))}else r.trackChildChange(rs(s,i))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?A.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e){this.indexedFilter_=new jd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ti.getStartPost_(e),this.endPost_=Ti.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,s,i,o){return this.matches(new U(n,r))||(r=A.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,s,i,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=A.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(A.EMPTY_NODE);const i=this;return n.forEachChild(ie,(o,l)=>{i.matches(new U(o,l))||(s=s.updateImmediateChild(o,A.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Ti(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,s,i,o){return this.rangedFilter_.matches(new U(n,r))||(r=A.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,s,i,o):this.fullLimitUpdateChild_(e,n,r,i,o)}updateFullNode(e,n,r){let s;if(n.isLeafNode()||n.isEmpty())s=A.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=A.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const l=i.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))s=s.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(A.EMPTY_NODE);let i;this.reverse_?i=s.getReverseIterator(this.index_):i=s.getIterator(this.index_);let o=0;for(;i.hasNext();){const l=i.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:s=s.updateImmediateChild(l.name,A.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,s,i){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,v)=>h(v,f)}else o=this.index_.getCompare();const l=e;E(l.numChildren()===this.limit_,"");const a=new U(n,r),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let f=s.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=s.getChildAfterChild(this.index_,f,this.reverse_);const v=f==null?1:o(f,a);if(d&&!r.isEmpty()&&v>=0)return i!=null&&i.trackChildChange(Ni(n,r,h)),l.updateImmediateChild(n,r);{i!=null&&i.trackChildChange(Ii(n,h));const y=l.updateImmediateChild(n,A.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(i!=null&&i.trackChildChange(rs(f.name,f.node)),y.updateImmediateChild(f.name,f.node)):y}}else return r.isEmpty()?e:d&&o(c,a)>=0?(i!=null&&(i.trackChildChange(Ii(c.name,c.node)),i.trackChildChange(rs(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(c.name,A.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ie}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return E(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return E(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:pr}hasEnd(){return this.endSet_}getIndexEndValue(){return E(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return E(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Dn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return E(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ie}copy(){const e=new Fd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function FE(t){return t.loadsAllData()?new jd(t.getIndex()):t.hasLimit()?new jE(t):new Ti(t)}function UE(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function zE(t,e,n){const r=t.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function VE(t,e){const n=t.copy();return n.index_=e,n}function cp(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ie?n="$priority":t.index_===Xv?n="$value":t.index_===or?n="$key":(E(t.index_ instanceof Ld,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=_e(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=_e(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+_e(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=_e(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+_e(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function up(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ie&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl extends Wv{constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=Vi("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(E(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=gl.getListenId_(e,r),l={};this.listens_[o]=l;const a=cp(e._queryParams);this.restRequest_(i+".json",a,(c,d)=>{let h=d;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(i,h,!1,r),hr(this.listens_,o)===l){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",s(f,null)}})}unlisten(e,n){const r=gl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=cp(e._queryParams),r=e._path.toString(),s=new hs;return this.restRequest_(r+".json",n,(i,o)=>{let l=o;i===404&&(l=null,i=null),i===null?(this.onDataUpdate_(r,l,!1,null),s.resolve(l)):s.reject(new Error(l))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+fs(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Ei(l.responseText)}catch{ze("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&ze("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(){this.rootNode_=A.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(){return{value:null,children:new Map}}function Zv(t,e,n){if(F(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=j(e);t.children.has(r)||t.children.set(r,vl());const s=t.children.get(r);e=Z(e),Zv(s,e,n)}}function du(t,e,n){t.value!==null?n(e,t.value):BE(t,(r,s)=>{const i=new q(e.toString()+"/"+r);du(s,i,n)})}function BE(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Pe(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dp=10*1e3,HE=30*1e3,qE=5*60*1e3;class GE{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new $E(e);const r=dp+(HE-dp)*Math.random();Xs(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Pe(e,(s,i)=>{i>0&&kt(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),Xs(this.reportStats_.bind(this),Math.floor(Math.random()*2*qE))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(yt||(yt={}));function Ud(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function zd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Vd(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=yt.ACK_USER_WRITE,this.source=Ud()}operationForChild(e){if(F(this.path)){if(this.affectedTree.value!=null)return E(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new q(e));return new _l(B(),n,this.revert)}}else return E(j(this.path)===e,"operationForChild called for unrelated child."),new _l(Z(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,n){this.source=e,this.path=n,this.type=yt.LISTEN_COMPLETE}operationForChild(e){return F(this.path)?new bi(this.source,B()):new bi(this.source,Z(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=yt.OVERWRITE}operationForChild(e){return F(this.path)?new mr(this.source,B(),this.snap.getImmediateChild(e)):new mr(this.source,Z(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=yt.MERGE}operationForChild(e){if(F(this.path)){const n=this.children.subtree(new q(e));return n.isEmpty()?null:n.value?new mr(this.source,B(),n.value):new ss(this.source,B(),n)}else return E(j(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ss(this.source,Z(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(F(e))return this.isFullyInitialized()&&!this.filtered_;const n=j(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function QE(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(LE(o.childName,o.snapshotNode))}),Os(t,s,"child_removed",e,r,n),Os(t,s,"child_added",e,r,n),Os(t,s,"child_moved",i,r,n),Os(t,s,"child_changed",e,r,n),Os(t,s,"value",e,r,n),s}function Os(t,e,n,r,s,i){const o=r.filter(l=>l.type===n);o.sort((l,a)=>XE(t,l,a)),o.forEach(l=>{const a=YE(t,l,i);s.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function YE(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function XE(t,e,n){if(e.childName==null||n.childName==null)throw ds("Should only compare child_ events.");const r=new U(e.childName,e.snapshotNode),s=new U(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(t,e){return{eventCache:t,serverCache:e}}function Js(t,e,n,r){return Jl(new Ln(e,n,r),t.serverCache)}function e_(t,e,n,r){return Jl(t.eventCache,new Ln(e,n,r))}function yl(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function gr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rc;const JE=()=>(rc||(rc=new Ge(M1)),rc);class J{constructor(e,n=JE()){this.value=e,this.children=n}static fromObject(e){let n=new J(null);return Pe(e,(r,s)=>{n=n.set(new q(r),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:B(),value:this.value};if(F(e))return null;{const r=j(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(Z(e),n);return i!=null?{path:de(new q(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(F(e))return this;{const n=j(e),r=this.children.get(n);return r!==null?r.subtree(Z(e)):new J(null)}}set(e,n){if(F(e))return new J(n,this.children);{const r=j(e),i=(this.children.get(r)||new J(null)).set(Z(e),n),o=this.children.insert(r,i);return new J(this.value,o)}}remove(e){if(F(e))return this.children.isEmpty()?new J(null):new J(null,this.children);{const n=j(e),r=this.children.get(n);if(r){const s=r.remove(Z(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new J(null):new J(this.value,i)}else return this}}get(e){if(F(e))return this.value;{const n=j(e),r=this.children.get(n);return r?r.get(Z(e)):null}}setTree(e,n){if(F(e))return n;{const r=j(e),i=(this.children.get(r)||new J(null)).setTree(Z(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new J(this.value,o)}}fold(e){return this.fold_(B(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(de(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,B(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(F(e))return null;{const i=j(e),o=this.children.get(i);return o?o.findOnPath_(Z(e),de(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,B(),n)}foreachOnPath_(e,n,r){if(F(e))return this;{this.value&&r(n,this.value);const s=j(e),i=this.children.get(s);return i?i.foreachOnPath_(Z(e),de(n,s),r):new J(null)}}foreach(e){this.foreach_(B(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(de(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.writeTree_=e}static empty(){return new Et(new J(null))}}function Zs(t,e,n){if(F(e))return new Et(new J(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=je(s,e);return i=i.updateChild(o,n),new Et(t.writeTree_.set(s,i))}else{const s=new J(n),i=t.writeTree_.setTree(e,s);return new Et(i)}}}function hu(t,e,n){let r=t;return Pe(n,(s,i)=>{r=Zs(r,de(e,s),i)}),r}function hp(t,e){if(F(e))return Et.empty();{const n=t.writeTree_.setTree(e,new J(null));return new Et(n)}}function fu(t,e){return Er(t,e)!=null}function Er(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(je(n.path,e)):null}function fp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ie,(r,s)=>{e.push(new U(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new U(r,s.value))}),e}function Pn(t,e){if(F(e))return t;{const n=Er(t,e);return n!=null?new Et(new J(n)):new Et(t.writeTree_.subtree(e))}}function pu(t){return t.writeTree_.isEmpty()}function is(t,e){return t_(B(),t.writeTree_,e)}function t_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(E(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=t_(de(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(de(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(t,e){return i_(e,t)}function ZE(t,e,n,r,s){E(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=Zs(t.visibleWrites,e,n)),t.lastWriteId=r}function eC(t,e,n,r){E(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=hu(t.visibleWrites,e,n),t.lastWriteId=r}function tC(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function nC(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);E(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&rC(l,r.path)?s=!1:at(r.path,l.path)&&(i=!0)),o--}if(s){if(i)return sC(t),!0;if(r.snap)t.visibleWrites=hp(t.visibleWrites,r.path);else{const l=r.children;Pe(l,a=>{t.visibleWrites=hp(t.visibleWrites,de(r.path,a))})}return!0}else return!1}function rC(t,e){if(t.snap)return at(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&at(de(t.path,n),e))return!0;return!1}function sC(t){t.visibleWrites=n_(t.allWrites,iC,B()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function iC(t){return t.visible}function n_(t,e,n){let r=Et.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let l;if(i.snap)at(n,o)?(l=je(n,o),r=Zs(r,l,i.snap)):at(o,n)&&(l=je(o,n),r=Zs(r,B(),i.snap.getChild(l)));else if(i.children){if(at(n,o))l=je(n,o),r=hu(r,l,i.children);else if(at(o,n))if(l=je(o,n),F(l))r=hu(r,B(),i.children);else{const a=hr(i.children,j(l));if(a){const c=a.getChild(Z(l));r=Zs(r,B(),c)}}}else throw ds("WriteRecord should have .snap or .children")}}return r}function r_(t,e,n,r,s){if(!r&&!s){const i=Er(t.visibleWrites,e);if(i!=null)return i;{const o=Pn(t.visibleWrites,e);if(pu(o))return n;if(n==null&&!fu(o,B()))return null;{const l=n||A.EMPTY_NODE;return is(o,l)}}}else{const i=Pn(t.visibleWrites,e);if(!s&&pu(i))return n;if(!s&&n==null&&!fu(i,B()))return null;{const o=function(c){return(c.visible||s)&&(!r||!~r.indexOf(c.writeId))&&(at(c.path,e)||at(e,c.path))},l=n_(t.allWrites,o,e),a=n||A.EMPTY_NODE;return is(l,a)}}}function oC(t,e,n){let r=A.EMPTY_NODE;const s=Er(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(ie,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=Pn(t.visibleWrites,e);return n.forEachChild(ie,(o,l)=>{const a=is(Pn(i,new q(o)),l);r=r.updateImmediateChild(o,a)}),fp(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=Pn(t.visibleWrites,e);return fp(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function lC(t,e,n,r,s){E(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=de(e,n);if(fu(t.visibleWrites,i))return null;{const o=Pn(t.visibleWrites,i);return pu(o)?s.getChild(n):is(o,s.getChild(n))}}function aC(t,e,n,r){const s=de(e,n),i=Er(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=Pn(t.visibleWrites,s);return is(o,r.getNode().getImmediateChild(n))}else return null}function cC(t,e){return Er(t.visibleWrites,e)}function uC(t,e,n,r,s,i,o){let l;const a=Pn(t.visibleWrites,e),c=Er(a,B());if(c!=null)l=c;else if(n!=null)l=is(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],h=o.getCompare(),f=i?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let v=f.getNext();for(;v&&d.length<s;)h(v,r)!==0&&d.push(v),v=f.getNext();return d}else return[]}function dC(){return{visibleWrites:Et.empty(),allWrites:[],lastWriteId:-1}}function xl(t,e,n,r){return r_(t.writeTree,t.treePath,e,n,r)}function Wd(t,e){return oC(t.writeTree,t.treePath,e)}function pp(t,e,n,r){return lC(t.writeTree,t.treePath,e,n,r)}function wl(t,e){return cC(t.writeTree,de(t.treePath,e))}function hC(t,e,n,r,s,i){return uC(t.writeTree,t.treePath,e,n,r,s,i)}function Bd(t,e,n){return aC(t.writeTree,t.treePath,e,n)}function s_(t,e){return i_(de(t.treePath,e),t.writeTree)}function i_(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;E(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),E(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,Ni(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,Ii(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,rs(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,Ni(r,e.snapshotNode,s.oldSnap));else throw ds("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const o_=new pC;class $d{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Ln(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Bd(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:gr(this.viewCache_),i=hC(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mC(t){return{filter:t}}function gC(t,e){E(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),E(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function vC(t,e,n,r,s){const i=new fC;let o,l;if(n.type===yt.OVERWRITE){const c=n;c.source.fromUser?o=mu(t,e,c.path,c.snap,r,s,i):(E(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!F(c.path),o=El(t,e,c.path,c.snap,r,s,l,i))}else if(n.type===yt.MERGE){const c=n;c.source.fromUser?o=yC(t,e,c.path,c.children,r,s,i):(E(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=gu(t,e,c.path,c.children,r,s,l,i))}else if(n.type===yt.ACK_USER_WRITE){const c=n;c.revert?o=EC(t,e,c.path,r,s,i):o=xC(t,e,c.path,c.affectedTree,r,s,i)}else if(n.type===yt.LISTEN_COMPLETE)o=wC(t,e,n.path,r,i);else throw ds("Unknown operation type: "+n.type);const a=i.getChanges();return _C(e,o,a),{viewCache:o,changes:a}}function _C(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=yl(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(Jv(yl(e)))}}function l_(t,e,n,r,s,i){const o=e.eventCache;if(wl(r,n)!=null)return e;{let l,a;if(F(n))if(E(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=gr(e),d=c instanceof A?c:A.EMPTY_NODE,h=Wd(r,d);l=t.filter.updateFullNode(e.eventCache.getNode(),h,i)}else{const c=xl(r,gr(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,i)}else{const c=j(n);if(c===".priority"){E(Mn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=e.serverCache.getNode();const h=pp(r,n,d,a);h!=null?l=t.filter.updatePriority(d,h):l=o.getNode()}else{const d=Z(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const f=pp(r,n,o.getNode(),a);f!=null?h=o.getNode().getImmediateChild(c).updateChild(d,f):h=o.getNode().getImmediateChild(c)}else h=Bd(r,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,d,s,i):l=o.getNode()}}return Js(e,l,o.isFullyInitialized()||F(n),t.filter.filtersNodes())}}function El(t,e,n,r,s,i,o,l){const a=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(F(n))c=d.updateFullNode(a.getNode(),r,null);else if(d.filtersNodes()&&!a.isFiltered()){const v=a.getNode().updateChild(n,r);c=d.updateFullNode(a.getNode(),v,null)}else{const v=j(n);if(!a.isCompleteForPath(n)&&Mn(n)>1)return e;const _=Z(n),b=a.getNode().getImmediateChild(v).updateChild(_,r);v===".priority"?c=d.updatePriority(a.getNode(),b):c=d.updateChild(a.getNode(),v,b,_,o_,null)}const h=e_(e,c,a.isFullyInitialized()||F(n),d.filtersNodes()),f=new $d(s,h,i);return l_(t,h,n,s,f,l)}function mu(t,e,n,r,s,i,o){const l=e.eventCache;let a,c;const d=new $d(s,e,i);if(F(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Js(e,c,!0,t.filter.filtersNodes());else{const h=j(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),a=Js(e,c,l.isFullyInitialized(),l.isFiltered());else{const f=Z(n),v=l.getNode().getImmediateChild(h);let _;if(F(f))_=r;else{const y=d.getCompleteChild(h);y!=null?Ad(f)===".priority"&&y.getChild($v(f)).isEmpty()?_=y:_=y.updateChild(f,r):_=A.EMPTY_NODE}if(v.equals(_))a=e;else{const y=t.filter.updateChild(l.getNode(),h,_,f,d,o);a=Js(e,y,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function mp(t,e){return t.eventCache.isCompleteForChild(e)}function yC(t,e,n,r,s,i,o){let l=e;return r.foreach((a,c)=>{const d=de(n,a);mp(e,j(d))&&(l=mu(t,l,d,c,s,i,o))}),r.foreach((a,c)=>{const d=de(n,a);mp(e,j(d))||(l=mu(t,l,d,c,s,i,o))}),l}function gp(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function gu(t,e,n,r,s,i,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;F(n)?c=r:c=new J(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(d.hasChild(h)){const v=e.serverCache.getNode().getImmediateChild(h),_=gp(t,v,f);a=El(t,a,new q(h),_,s,i,o,l)}}),c.children.inorderTraversal((h,f)=>{const v=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!d.hasChild(h)&&!v){const _=e.serverCache.getNode().getImmediateChild(h),y=gp(t,_,f);a=El(t,a,new q(h),y,s,i,o,l)}}),a}function xC(t,e,n,r,s,i,o){if(wl(s,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(F(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return El(t,e,n,a.getNode().getChild(n),s,i,l,o);if(F(n)){let c=new J(null);return a.getNode().forEachChild(or,(d,h)=>{c=c.set(new q(d),h)}),gu(t,e,n,c,s,i,l,o)}else return e}else{let c=new J(null);return r.foreach((d,h)=>{const f=de(n,d);a.isCompleteForPath(f)&&(c=c.set(d,a.getNode().getChild(f)))}),gu(t,e,n,c,s,i,l,o)}}function wC(t,e,n,r,s){const i=e.serverCache,o=e_(e,i.getNode(),i.isFullyInitialized()||F(n),i.isFiltered());return l_(t,o,n,r,o_,s)}function EC(t,e,n,r,s,i){let o;if(wl(r,n)!=null)return e;{const l=new $d(r,e,s),a=e.eventCache.getNode();let c;if(F(n)||j(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=xl(r,gr(e));else{const h=e.serverCache.getNode();E(h instanceof A,"serverChildren would be complete if leaf node"),d=Wd(r,h)}d=d,c=t.filter.updateFullNode(a,d,i)}else{const d=j(n);let h=Bd(r,d,e.serverCache);h==null&&e.serverCache.isCompleteForChild(d)&&(h=a.getImmediateChild(d)),h!=null?c=t.filter.updateChild(a,d,h,Z(n),l,i):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(a,d,A.EMPTY_NODE,Z(n),l,i):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=xl(r,gr(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,i)))}return o=e.serverCache.isFullyInitialized()||wl(r,B())!=null,Js(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new jd(r.getIndex()),i=FE(r);this.processor_=mC(i);const o=n.serverCache,l=n.eventCache,a=s.updateFullNode(A.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(A.EMPTY_NODE,l.getNode(),null),d=new Ln(a,o.isFullyInitialized(),s.filtersNodes()),h=new Ln(c,l.isFullyInitialized(),i.filtersNodes());this.viewCache_=Jl(h,d),this.eventGenerator_=new KE(this.query_)}get query(){return this.query_}}function SC(t){return t.viewCache_.serverCache.getNode()}function kC(t){return yl(t.viewCache_)}function IC(t,e){const n=gr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!F(e)&&!n.getImmediateChild(j(e)).isEmpty())?n.getChild(e):null}function vp(t){return t.eventRegistrations_.length===0}function NC(t,e){t.eventRegistrations_.push(e)}function _p(t,e,n){const r=[];if(n){E(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(n,s);o&&r.push(o)})}if(e){let s=[];for(let i=0;i<t.eventRegistrations_.length;++i){const o=t.eventRegistrations_[i];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(i+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return r}function yp(t,e,n,r){e.type===yt.MERGE&&e.source.queryId!==null&&(E(gr(t.viewCache_),"We should always have a full cache before handling merges"),E(yl(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=vC(t.processor_,s,e,n,r);return gC(t.processor_,i.viewCache),E(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,a_(t,i.changes,i.viewCache.eventCache.getNode(),null)}function TC(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ie,(i,o)=>{r.push(rs(i,o))}),n.isFullyInitialized()&&r.push(Jv(n.getNode())),a_(t,r,n.getNode(),e)}function a_(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return QE(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cl;class c_{constructor(){this.views=new Map}}function bC(t){E(!Cl,"__referenceConstructor has already been defined"),Cl=t}function PC(){return E(Cl,"Reference.ts has not been loaded"),Cl}function RC(t){return t.views.size===0}function Hd(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return E(i!=null,"SyncTree gave us an op for an invalid query."),yp(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(yp(o,e,n,r));return i}}function u_(t,e,n,r,s){const i=e._queryIdentifier,o=t.views.get(i);if(!o){let l=xl(n,s?r:null),a=!1;l?a=!0:r instanceof A?(l=Wd(n,r),a=!1):(l=A.EMPTY_NODE,a=!1);const c=Jl(new Ln(l,a,!1),new Ln(r,s,!1));return new CC(e,c)}return o}function AC(t,e,n,r,s,i){const o=u_(t,e,r,s,i);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),NC(o,n),TC(o,n)}function OC(t,e,n,r){const s=e._queryIdentifier,i=[];let o=[];const l=jn(t);if(s==="default")for(const[a,c]of t.views.entries())o=o.concat(_p(c,n,r)),vp(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||i.push(c.query));else{const a=t.views.get(s);a&&(o=o.concat(_p(a,n,r)),vp(a)&&(t.views.delete(s),a.query._queryParams.loadsAllData()||i.push(a.query)))}return l&&!jn(t)&&i.push(new(PC())(e._repo,e._path)),{removed:i,events:o}}function d_(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Rn(t,e){let n=null;for(const r of t.views.values())n=n||IC(r,e);return n}function h_(t,e){if(e._queryParams.loadsAllData())return ea(t);{const r=e._queryIdentifier;return t.views.get(r)}}function f_(t,e){return h_(t,e)!=null}function jn(t){return ea(t)!=null}function ea(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sl;function DC(t){E(!Sl,"__referenceConstructor has already been defined"),Sl=t}function MC(){return E(Sl,"Reference.ts has not been loaded"),Sl}let LC=1;class xp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new J(null),this.pendingWriteTree_=dC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function qd(t,e,n,r,s){return ZE(t.pendingWriteTree_,e,n,r,s),s?gs(t,new mr(Ud(),e,n)):[]}function jC(t,e,n,r){eC(t.pendingWriteTree_,e,n,r);const s=J.fromObject(n);return gs(t,new ss(Ud(),e,s))}function vn(t,e,n=!1){const r=tC(t.pendingWriteTree_,e);if(nC(t.pendingWriteTree_,e)){let i=new J(null);return r.snap!=null?i=i.set(B(),!0):Pe(r.children,o=>{i=i.set(new q(o),!0)}),gs(t,new _l(r.path,i,n))}else return[]}function Bi(t,e,n){return gs(t,new mr(zd(),e,n))}function FC(t,e,n){const r=J.fromObject(n);return gs(t,new ss(zd(),e,r))}function UC(t,e){return gs(t,new bi(zd(),e))}function zC(t,e,n){const r=Gd(t,n);if(r){const s=Kd(r),i=s.path,o=s.queryId,l=je(i,e),a=new bi(Vd(o),l);return Qd(t,i,a)}else return[]}function kl(t,e,n,r,s=!1){const i=e._path,o=t.syncPointTree_.get(i);let l=[];if(o&&(e._queryIdentifier==="default"||f_(o,e))){const a=OC(o,e,n,r);RC(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const c=a.removed;if(l=a.events,!s){const d=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(i,(f,v)=>jn(v));if(d&&!h){const f=t.syncPointTree_.subtree(i);if(!f.isEmpty()){const v=BC(f);for(let _=0;_<v.length;++_){const y=v[_],b=y.query,g=v_(t,y);t.listenProvider_.startListening(ei(b),Pi(t,b),g.hashFn,g.onComplete)}}}!h&&c.length>0&&!r&&(d?t.listenProvider_.stopListening(ei(e),null):c.forEach(f=>{const v=t.queryToTagMap.get(na(f));t.listenProvider_.stopListening(ei(f),v)}))}$C(t,c)}return l}function p_(t,e,n,r){const s=Gd(t,r);if(s!=null){const i=Kd(s),o=i.path,l=i.queryId,a=je(o,e),c=new mr(Vd(l),a,n);return Qd(t,o,c)}else return[]}function VC(t,e,n,r){const s=Gd(t,r);if(s){const i=Kd(s),o=i.path,l=i.queryId,a=je(o,e),c=J.fromObject(n),d=new ss(Vd(l),a,c);return Qd(t,o,d)}else return[]}function vu(t,e,n,r=!1){const s=e._path;let i=null,o=!1;t.syncPointTree_.foreachOnPath(s,(f,v)=>{const _=je(f,s);i=i||Rn(v,_),o=o||jn(v)});let l=t.syncPointTree_.get(s);l?(o=o||jn(l),i=i||Rn(l,B())):(l=new c_,t.syncPointTree_=t.syncPointTree_.set(s,l));let a;i!=null?a=!0:(a=!1,i=A.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((v,_)=>{const y=Rn(_,B());y&&(i=i.updateImmediateChild(v,y))}));const c=f_(l,e);if(!c&&!e._queryParams.loadsAllData()){const f=na(e);E(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const v=HC();t.queryToTagMap.set(f,v),t.tagToQueryMap.set(v,f)}const d=Zl(t.pendingWriteTree_,s);let h=AC(l,e,n,d,i,a);if(!c&&!o&&!r){const f=h_(l,e);h=h.concat(qC(t,e,f))}return h}function ta(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=je(o,e),c=Rn(l,a);if(c)return c});return r_(s,e,i,n,!0)}function WC(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,d)=>{const h=je(c,n);r=r||Rn(d,h)});let s=t.syncPointTree_.get(n);s?r=r||Rn(s,B()):(s=new c_,t.syncPointTree_=t.syncPointTree_.set(n,s));const i=r!=null,o=i?new Ln(r,!0,!1):null,l=Zl(t.pendingWriteTree_,e._path),a=u_(s,e,l,i?o.getNode():A.EMPTY_NODE,i);return kC(a)}function gs(t,e){return m_(e,t.syncPointTree_,null,Zl(t.pendingWriteTree_,B()))}function m_(t,e,n,r){if(F(t.path))return g_(t,e,n,r);{const s=e.get(B());n==null&&s!=null&&(n=Rn(s,B()));let i=[];const o=j(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,d=s_(r,o);i=i.concat(m_(l,a,c,d))}return s&&(i=i.concat(Hd(s,t,r,n))),i}}function g_(t,e,n,r){const s=e.get(B());n==null&&s!=null&&(n=Rn(s,B()));let i=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=s_(r,o),d=t.operationForChild(o);d&&(i=i.concat(g_(d,l,a,c)))}),s&&(i=i.concat(Hd(s,t,r,n))),i}function v_(t,e){const n=e.query,r=Pi(t,n);return{hashFn:()=>(SC(e)||A.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?zC(t,n._path,r):UC(t,n._path);{const i=F1(s,n);return kl(t,n,null,i)}}}}function Pi(t,e){const n=na(e);return t.queryToTagMap.get(n)}function na(t){return t._path.toString()+"$"+t._queryIdentifier}function Gd(t,e){return t.tagToQueryMap.get(e)}function Kd(t){const e=t.indexOf("$");return E(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new q(t.substr(0,e))}}function Qd(t,e,n){const r=t.syncPointTree_.get(e);E(r,"Missing sync point for query tag that we're tracking");const s=Zl(t.pendingWriteTree_,e);return Hd(r,n,s,null)}function BC(t){return t.fold((e,n,r)=>{if(n&&jn(n))return[ea(n)];{let s=[];return n&&(s=d_(n)),Pe(r,(i,o)=>{s=s.concat(o)}),s}})}function ei(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(MC())(t._repo,t._path):t}function $C(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const s=na(r),i=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(i)}}}function HC(){return LC++}function qC(t,e,n){const r=e._path,s=Pi(t,e),i=v_(t,n),o=t.listenProvider_.startListening(ei(e),s,i.hashFn,i.onComplete),l=t.syncPointTree_.subtree(r);if(s)E(!jn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,d,h)=>{if(!F(c)&&d&&jn(d))return[ea(d).query];{let f=[];return d&&(f=f.concat(d_(d).map(v=>v.query))),Pe(h,(v,_)=>{f=f.concat(_)}),f}});for(let c=0;c<a.length;++c){const d=a[c];t.listenProvider_.stopListening(ei(d),Pi(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Yd(n)}node(){return this.node_}}class Xd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=de(this.path_,e);return new Xd(this.syncTree_,n)}node(){return ta(this.syncTree_,this.path_)}}const GC=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},wp=function(t,e,n){if(!t||typeof t!="object")return t;if(E(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return KC(t[".sv"],e,n);if(typeof t[".sv"]=="object")return QC(t[".sv"],e);E(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},KC=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:E(!1,"Unexpected server value: "+t)}},QC=function(t,e,n){t.hasOwnProperty("increment")||E(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&E(!1,"Unexpected increment value: "+r);const s=e.node();if(E(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},__=function(t,e,n,r){return Zd(e,new Xd(n,t),r)},Jd=function(t,e,n){return Zd(t,new Yd(e),n)};function Zd(t,e,n){const r=t.getPriority().val(),s=wp(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,l=wp(o.getValue(),e,n);return l!==o.getValue()||s!==o.getPriority().val()?new xe(l,me(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new xe(s))),o.forEachChild(ie,(l,a)=>{const c=Zd(a,e.getImmediateChild(l),n);c!==a&&(i=i.updateImmediateChild(l,c))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function ra(t,e){let n=e instanceof q?e:new q(e),r=t,s=j(n);for(;s!==null;){const i=hr(r.node.children,s)||{children:{},childCount:0};r=new eh(s,r,i),n=Z(n),s=j(n)}return r}function Cr(t){return t.node.value}function th(t,e){t.node.value=e,_u(t)}function y_(t){return t.node.childCount>0}function YC(t){return Cr(t)===void 0&&!y_(t)}function sa(t,e){Pe(t.node.children,(n,r)=>{e(new eh(n,t,r))})}function x_(t,e,n,r){n&&e(t),sa(t,s=>{x_(s,e,!0)})}function XC(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function $i(t){return new q(t.parent===null?t.name:$i(t.parent)+"/"+t.name)}function _u(t){t.parent!==null&&JC(t.parent,t.name,t)}function JC(t,e,n){const r=YC(n),s=kt(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,_u(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,_u(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZC=/[\[\].#$\/\u0000-\u001F\u007F]/,eS=/[\[\].#$\u0000-\u001F\u007F]/,sc=10*1024*1024,nh=function(t){return typeof t=="string"&&t.length!==0&&!ZC.test(t)},w_=function(t){return typeof t=="string"&&t.length!==0&&!eS.test(t)},tS=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),w_(t)},Il=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Nd(t)||t&&typeof t=="object"&&kt(t,".sv")},rh=function(t,e,n,r){r&&e===void 0||Hi(Ql(t,"value"),e,n)},Hi=function(t,e,n){const r=n instanceof q?new _E(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Xn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Xn(r)+" with contents = "+e.toString());if(Nd(e))throw new Error(t+"contains "+e.toString()+" "+Xn(r));if(typeof e=="string"&&e.length>sc/3&&Yl(e)>sc)throw new Error(t+"contains a string greater than "+sc+" utf8 bytes "+Xn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(Pe(e,(o,l)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!nh(o)))throw new Error(t+" contains an invalid key ("+o+") "+Xn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);yE(r,o),Hi(t,l,r),xE(r)}),s&&i)throw new Error(t+' contains ".value" child '+Xn(r)+" in addition to actual children.")}},nS=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const i=ki(r);for(let o=0;o<i.length;o++)if(!(i[o]===".priority"&&o===i.length-1)){if(!nh(i[o]))throw new Error(t+"contains an invalid key ("+i[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(vE);let s=null;for(n=0;n<e.length;n++){if(r=e[n],s!==null&&at(s,r))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},rS=function(t,e,n,r){const s=Ql(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const i=[];Pe(e,(o,l)=>{const a=new q(o);if(Hi(s,l,de(n,a)),Ad(a)===".priority"&&!Il(l))throw new Error(s+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");i.push(a)}),nS(s,i)},sh=function(t,e,n,r){if(!w_(n))throw new Error(Ql(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},sS=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),sh(t,e,n)},ia=function(t,e){if(j(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},iS=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!nh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!tS(n))throw new Error(Ql(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function oa(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!Od(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function E_(t,e,n){oa(t,n),C_(t,r=>Od(r,e))}function nt(t,e,n){oa(t,n),C_(t,r=>at(r,e)||at(e,r))}function C_(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(lS(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function lS(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Ys&&Ne("event: "+n.toString()),ms(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS="repo_interrupt",cS=25;class uS{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new oS,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=vl(),this.transactionQueueTree_=new eh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function dS(t,e,n){if(t.stats_=Pd(t.repoInfo_),t.forceRestClient_||W1())t.server_=new gl(t.repoInfo_,(r,s,i,o)=>{Ep(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Cp(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{_e(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Gt(t.repoInfo_,e,(r,s,i,o)=>{Ep(t,r,s,i,o)},r=>{Cp(t,r)},r=>{hS(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=G1(t.repoInfo_,()=>new GE(t.stats_,t.server_)),t.infoData_=new WE,t.infoSyncTree_=new xp({startListening:(r,s,i,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Bi(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),ih(t,"connected",!1),t.serverSyncTree_=new xp({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(l,a)=>{const c=o(l,a);nt(t.eventQueue_,r._path,c)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function S_(t){const n=t.infoData_.getNode(new q(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function qi(t){return GC({timestamp:S_(t)})}function Ep(t,e,n,r,s){t.dataUpdateCount++;const i=new q(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const a=ul(n,c=>me(c));o=VC(t.serverSyncTree_,i,a,s)}else{const a=me(n);o=p_(t.serverSyncTree_,i,a,s)}else if(r){const a=ul(n,c=>me(c));o=FC(t.serverSyncTree_,i,a)}else{const a=me(n);o=Bi(t.serverSyncTree_,i,a)}let l=i;o.length>0&&(l=os(t,i)),nt(t.eventQueue_,l,o)}function Cp(t,e){ih(t,"connected",e),e===!1&&gS(t)}function hS(t,e){Pe(e,(n,r)=>{ih(t,n,r)})}function ih(t,e,n){const r=new q("/.info/"+e),s=me(n);t.infoData_.updateSnapshot(r,s);const i=Bi(t.infoSyncTree_,r,s);nt(t.eventQueue_,r,i)}function la(t){return t.nextWriteId_++}function fS(t,e,n){const r=WC(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(s=>{const i=me(s).withIndex(e._queryParams.getIndex());vu(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Bi(t.serverSyncTree_,e._path,i);else{const l=Pi(t.serverSyncTree_,e);o=p_(t.serverSyncTree_,e._path,i,l)}return nt(t.eventQueue_,e._path,o),kl(t.serverSyncTree_,e,n,null,!0),i},s=>(vs(t,"get for query "+_e(e)+" failed: "+s),Promise.reject(new Error(s))))}function pS(t,e,n,r,s){vs(t,"set",{path:e.toString(),value:n,priority:r});const i=qi(t),o=me(n,r),l=ta(t.serverSyncTree_,e),a=Jd(o,l,i),c=la(t),d=qd(t.serverSyncTree_,e,a,c,!0);oa(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(f,v)=>{const _=f==="ok";_||ze("set at "+e+" failed: "+f);const y=vn(t.serverSyncTree_,c,!_);nt(t.eventQueue_,e,y),yu(t,s,f,v)});const h=lh(t,e);os(t,h),nt(t.eventQueue_,h,[])}function mS(t,e,n,r){vs(t,"update",{path:e.toString(),value:n});let s=!0;const i=qi(t),o={};if(Pe(n,(l,a)=>{s=!1,o[l]=__(de(e,l),me(a),t.serverSyncTree_,i)}),s)Ne("update() called with empty data.  Don't do anything."),yu(t,r,"ok",void 0);else{const l=la(t),a=jC(t.serverSyncTree_,e,o,l);oa(t.eventQueue_,a),t.server_.merge(e.toString(),n,(c,d)=>{const h=c==="ok";h||ze("update at "+e+" failed: "+c);const f=vn(t.serverSyncTree_,l,!h),v=f.length>0?os(t,e):e;nt(t.eventQueue_,v,f),yu(t,r,c,d)}),Pe(n,c=>{const d=lh(t,de(e,c));os(t,d)}),nt(t.eventQueue_,e,[])}}function gS(t){vs(t,"onDisconnectEvents");const e=qi(t),n=vl();du(t.onDisconnect_,B(),(s,i)=>{const o=__(s,i,t.serverSyncTree_,e);Zv(n,s,o)});let r=[];du(n,B(),(s,i)=>{r=r.concat(Bi(t.serverSyncTree_,s,i));const o=lh(t,s);os(t,o)}),t.onDisconnect_=vl(),nt(t.eventQueue_,B(),r)}function vS(t,e,n){let r;j(e._path)===".info"?r=vu(t.infoSyncTree_,e,n):r=vu(t.serverSyncTree_,e,n),E_(t.eventQueue_,e._path,r)}function Sp(t,e,n){let r;j(e._path)===".info"?r=kl(t.infoSyncTree_,e,n):r=kl(t.serverSyncTree_,e,n),E_(t.eventQueue_,e._path,r)}function _S(t){t.persistentConnection_&&t.persistentConnection_.interrupt(aS)}function vs(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ne(n,...e)}function yu(t,e,n,r){e&&ms(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let i=s;r&&(i+=": "+r);const o=new Error(i);o.code=s,e(o)}})}function yS(t,e,n,r,s,i){vs(t,"transaction on "+e);const o={path:e,update:n,onComplete:r,status:null,order:Ev(),applyLocally:i,retryCount:0,unwatcher:s,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},l=oh(t,e,void 0);o.currentInputSnapshot=l;const a=o.update(l.val());if(a===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{Hi("transaction failed: Data returned ",a,o.path),o.status=0;const c=ra(t.transactionQueueTree_,e),d=Cr(c)||[];d.push(o),th(c,d);let h;typeof a=="object"&&a!==null&&kt(a,".priority")?(h=hr(a,".priority"),E(Il(h),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):h=(ta(t.serverSyncTree_,e)||A.EMPTY_NODE).getPriority().val();const f=qi(t),v=me(a,h),_=Jd(v,l,f);o.currentOutputSnapshotRaw=v,o.currentOutputSnapshotResolved=_,o.currentWriteId=la(t);const y=qd(t.serverSyncTree_,e,_,o.currentWriteId,o.applyLocally);nt(t.eventQueue_,e,y),aa(t,t.transactionQueueTree_)}}function oh(t,e,n){return ta(t.serverSyncTree_,e,n)||A.EMPTY_NODE}function aa(t,e=t.transactionQueueTree_){if(e||ca(t,e),Cr(e)){const n=I_(t,e);E(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&xS(t,$i(e),n)}else y_(e)&&sa(e,n=>{aa(t,n)})}function xS(t,e,n){const r=n.map(c=>c.currentWriteId),s=oh(t,e,r);let i=s;const o=s.hash();for(let c=0;c<n.length;c++){const d=n[c];E(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const h=je(e,d.path);i=i.updateChild(h,d.currentOutputSnapshotRaw)}const l=i.val(!0),a=e;t.server_.put(a.toString(),l,c=>{vs(t,"transaction put response",{path:a.toString(),status:c});let d=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,d=d.concat(vn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();ca(t,ra(t.transactionQueueTree_,e)),aa(t,t.transactionQueueTree_),nt(t.eventQueue_,e,d);for(let f=0;f<h.length;f++)ms(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{ze("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}os(t,e)}},o)}function os(t,e){const n=k_(t,e),r=$i(n),s=I_(t,n);return wS(t,s,r),r}function wS(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=je(n,a.path);let d=!1,h;if(E(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,h=a.abortReason,s=s.concat(vn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=cS)d=!0,h="maxretry",s=s.concat(vn(t.serverSyncTree_,a.currentWriteId,!0));else{const f=oh(t,a.path,o);a.currentInputSnapshot=f;const v=e[l].update(f.val());if(v!==void 0){Hi("transaction failed: Data returned ",v,a.path);let _=me(v);typeof v=="object"&&v!=null&&kt(v,".priority")||(_=_.updatePriority(f.getPriority()));const b=a.currentWriteId,g=qi(t),p=Jd(_,f,g);a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=p,a.currentWriteId=la(t),o.splice(o.indexOf(b),1),s=s.concat(qd(t.serverSyncTree_,a.path,p,a.currentWriteId,a.applyLocally)),s=s.concat(vn(t.serverSyncTree_,b,!0))}else d=!0,h="nodata",s=s.concat(vn(t.serverSyncTree_,a.currentWriteId,!0))}nt(t.eventQueue_,n,s),s=[],d&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(h),!1,null))))}ca(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)ms(r[l]);aa(t,t.transactionQueueTree_)}function k_(t,e){let n,r=t.transactionQueueTree_;for(n=j(e);n!==null&&Cr(r)===void 0;)r=ra(r,n),e=Z(e),n=j(e);return r}function I_(t,e){const n=[];return N_(t,e,n),n.sort((r,s)=>r.order-s.order),n}function N_(t,e,n){const r=Cr(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);sa(e,s=>{N_(t,s,n)})}function ca(t,e){const n=Cr(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,th(e,n.length>0?n:void 0)}sa(e,r=>{ca(t,r)})}function lh(t,e){const n=$i(k_(t,e)),r=ra(t.transactionQueueTree_,e);return XC(r,s=>{ic(t,s)}),ic(t,r),x_(r,s=>{ic(t,s)}),n}function ic(t,e){const n=Cr(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(E(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(E(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(vn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?th(e,void 0):n.length=i+1,nt(t.eventQueue_,$i(e),s);for(let o=0;o<r.length;o++)ms(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ES(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function CS(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):ze(`Invalid query segment '${n}' in query '${t}'`)}return e}const kp=function(t,e){const n=SS(t),r=n.namespace;n.domain==="firebase.com"&&en(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&en("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||O1();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Mv(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new q(n.pathString)}},SS=function(t){let e="",n="",r="",s="",i="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(d,h)),d<h&&(s=ES(t.substring(d,h)));const f=CS(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const v=e.slice(0,c);if(v.toLowerCase()==="localhost")n="localhost";else if(v.split(".").length<=2)n=v;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),i=r}"ns"in f&&(i=f.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:s,namespace:i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",kS=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let s;const i=new Array(8);for(s=7;s>=0;s--)i[s]=Ip.charAt(n%64),n=Math.floor(n/64);E(n===0,"Cannot push at time == 0");let o=i.join("");if(r){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=Ip.charAt(e[s]);return E(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(e,n,r,s){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+_e(this.snapshot.exportVal())}}class NS{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return E(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return F(this._path)?null:Ad(this._path)}get ref(){return new Mt(this._repo,this._path)}get _queryIdentifier(){const e=up(this._queryParams),n=Td(e);return n==="{}"?"default":n}get _queryObject(){return up(this._queryParams)}isEqual(e){if(e=Se(e),!(e instanceof _s))return!1;const n=this._repo===e._repo,r=Od(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+gE(this._path)}}function TS(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function b_(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===or){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",s="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==pr)throw new Error(r);if(typeof e!="string")throw new Error(s)}if(t.hasEnd()){if(t.getIndexEndName()!==Dn)throw new Error(r);if(typeof n!="string")throw new Error(s)}}else if(t.getIndex()===ie){if(e!=null&&!Il(e)||n!=null&&!Il(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(E(t.getIndex()instanceof Ld||t.getIndex()===Xv,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function bS(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Mt extends _s{constructor(e,n){super(e,n,new Fd,!1)}get parent(){const e=$v(this._path);return e===null?null:new Mt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ls{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new q(e),r=Ri(this.ref,e);return new ls(this._node.getChild(n),r,ie)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new ls(s,Ri(this.ref,r),ie)))}hasChild(e){const n=new q(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Y(t,e){return t=Se(t),t._checkNotDeleted("ref"),e!==void 0?Ri(t._root,e):t._root}function Ri(t,e){return t=Se(t),j(t._path)===null?sS("child","path",e):sh("child","path",e),new Mt(t._repo,de(t._path,e))}function ti(t,e){t=Se(t),ia("push",t._path),rh("push",e,t._path,!0);const n=S_(t._repo),r=kS(n),s=Ri(t,r),i=Ri(t,r);let o;return e!=null?o=P_(i,e).then(()=>i):o=Promise.resolve(i),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function PS(t){return ia("remove",t._path),P_(t,null)}function P_(t,e){t=Se(t),ia("set",t._path),rh("set",e,t._path,!1);const n=new hs;return pS(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function _n(t,e){rS("update",e,t._path);const n=new hs;return mS(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function xu(t){t=Se(t);const e=new T_(()=>{}),n=new ua(e);return fS(t._repo,t,n).then(r=>new ls(r,new Mt(t._repo,t._path),t._queryParams.getIndex()))}class ua{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new IS("value",this,new ls(e.snapshotNode,new Mt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new NS(this,e,n):null}matches(e){return e instanceof ua?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function RS(t,e,n,r,s){let i;if(typeof r=="object"&&(i=void 0,s=r),typeof r=="function"&&(i=r),s&&s.onlyOnce){const a=n,c=(d,h)=>{Sp(t._repo,t,l),a(d,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new T_(n,i||void 0),l=new ua(o);return vS(t._repo,t,l),()=>Sp(t._repo,t,l)}function wu(t,e,n,r){return RS(t,"value",e,n,r)}class ah{}class AS extends ah{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAt"}_apply(e){rh("startAt",this._value,e._path,!0);const n=zE(e._queryParams,this._value,this._key);if(bS(n),b_(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new _s(e._repo,e._path,n,e._orderByCalled)}}function OS(t=null,e){return new AS(t,e)}class DS extends ah{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new _s(e._repo,e._path,UE(e._queryParams,this._limit),e._orderByCalled)}}function MS(t){if(Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new DS(t)}class LS extends ah{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){TS(e,"orderByChild");const n=new q(this._path);if(F(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new Ld(n),s=VE(e._queryParams,r);return b_(s),new _s(e._repo,e._path,s,!0)}}function jS(t){return sh("orderByChild","path",t),new LS(t)}function Np(t,...e){let n=Se(t);for(const r of e)n=r._apply(n);return n}bC(Mt);DC(Mt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FS="FIREBASE_DATABASE_EMULATOR_HOST",Eu={};let US=!1;function zS(t,e,n,r){t.repoInfo_=new Mv(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function VS(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||en("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ne("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=kp(i,s),l=o.repoInfo,a;typeof process<"u"&&qf&&(a=qf[FS]),a?(i=`http://${a}?ns=${l.namespace}`,o=kp(i,s),l=o.repoInfo):o.repoInfo.secure;const c=new $1(t.name,t.options,e);iS("Invalid Firebase Database URL",o),F(o.path)||en("Database URL must point to the root of a Firebase Database (not including a child path).");const d=BS(l,t,c,new B1(t.name,n));return new $S(d,t)}function WS(t,e){const n=Eu[e];(!n||n[t.key]!==t)&&en(`Database ${e}(${t.repoInfo_}) has already been deleted.`),_S(t),delete n[t.key]}function BS(t,e,n,r){let s=Eu[e.name];s||(s={},Eu[e.name]=s);let i=s[t.toURLString()];return i&&en("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new uS(t,US,n,r),s[t.toURLString()]=i,i}class $S{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(dS(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Mt(this._repo,B())),this._rootInternal}_delete(){return this._rootInternal!==null&&(WS(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&en("Cannot call "+e+" on a deleted database.")}}function HS(t=vv(),e){const n=Id(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=rw("database");r&&qS(n,...r)}return n}function qS(t,e,n,r={}){t=Se(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&en("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let i;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&en('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),i=new Oo(Oo.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:sw(r.mockUserToken,t.app.options.projectId);i=new Oo(o)}zS(s,e,n,i)}/**
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
 */function GS(t){T1(ps),ns(new fr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return VS(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),bn(Gf,Kf,t),bn(Gf,Kf,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function QS(t,e,n){var r;if(t=Se(t),ia("Reference.transaction",t._path),t.key===".length"||t.key===".keys")throw"Reference.transaction failed: "+t.key+" is a read-only object.";const s=(r=void 0)!==null&&r!==void 0?r:!0,i=new hs,o=(a,c,d)=>{let h=null;a?i.reject(a):(h=new ls(d,new Mt(t._repo,t._path),ie),i.resolve(new KS(c,h)))},l=wu(t,()=>{});return yS(t._repo,t._path,e,o,l,s),i.promise}Gt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Gt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};GS();function ch(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function R_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const YS=R_,A_=new Ui("auth","Firebase",R_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl=new Sd("@firebase/auth");function XS(t,...e){Nl.logLevel<=K.WARN&&Nl.warn(`Auth (${ps}): ${t}`,...e)}function Do(t,...e){Nl.logLevel<=K.ERROR&&Nl.error(`Auth (${ps}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t,...e){throw dh(t,...e)}function Ct(t,...e){return dh(t,...e)}function uh(t,e,n){const r=Object.assign(Object.assign({},YS()),{[e]:n});return new Ui("auth","Firebase",r).create(e,{appName:t.name})}function Kt(t){return uh(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function JS(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&ht(t,"argument-error"),uh(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function dh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return A_.create(t,...e)}function O(t,e,...n){if(!t)throw dh(e,...n)}function Bt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Do(e),new Error(e)}function tn(t,e){t||Bt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ZS(){return Tp()==="http:"||Tp()==="https:"}function Tp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ek(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ZS()||ow()||"connection"in navigator)?navigator.onLine:!0}function tk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,n){this.shortDelay=e,this.longDelay=n,tn(n>e,"Short delay should be less than long delay!"),this.isMobile=Cd()||hv()}get(){return ek()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hh(t,e){tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Bt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Bt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Bt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rk=new Gi(3e4,6e4);function Wn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Bn(t,e,n,r,s={}){return D_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=fs(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:a},i);return iw()||(c.referrerPolicy="no-referrer"),O_.fetch()(M_(t,t.config.apiHost,n,l),c)})}async function D_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},nk),e);try{const s=new ik(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw xo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[a,c]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw xo(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw xo(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw xo(t,"user-disabled",o);const d=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw uh(t,d,c);ht(t,d)}}catch(s){if(s instanceof Vn)throw s;ht(t,"network-request-failed",{message:String(s)})}}async function Ki(t,e,n,r,s={}){const i=await Bn(t,e,n,r,s);return"mfaPendingCredential"in i&&ht(t,"multi-factor-auth-required",{_serverResponse:i}),i}function M_(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?hh(t.config,s):`${t.config.apiScheme}://${s}`}function sk(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ik{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ct(this.auth,"network-request-failed")),rk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function xo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ct(t,e,r);return s.customData._tokenResponse=n,s}function bp(t){return t!==void 0&&t.enterprise!==void 0}class ok{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return sk(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function lk(t,e){return Bn(t,"GET","/v2/recaptchaConfig",Wn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ak(t,e){return Bn(t,"POST","/v1/accounts:delete",e)}async function L_(t,e){return Bn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ck(t,e=!1){const n=Se(t),r=await n.getIdToken(e),s=fh(r);O(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ni(oc(s.auth_time)),issuedAtTime:ni(oc(s.iat)),expirationTime:ni(oc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function oc(t){return Number(t)*1e3}function fh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Do("JWT malformed, contained fewer than 3 sections"),null;try{const s=cl(n);return s?JSON.parse(s):(Do("Failed to decode base64 JWT payload"),null)}catch(s){return Do("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Pp(t){const e=fh(t);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ai(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Vn&&uk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function uk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ni(this.lastLoginAt),this.creationTime=ni(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Tl(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ai(t,L_(n,{idToken:r}));O(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?j_(i.providerUserInfo):[],l=fk(t.providerData,o),a=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=a?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Su(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,h)}async function hk(t){const e=Se(t);await Tl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function fk(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function j_(t){return t.map(e=>{var{providerId:n}=e,r=ch(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pk(t,e){const n=await D_(t,{},async()=>{const r=fs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=M_(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",O_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function mk(t,e){return Bn(t,"POST","/v2/accounts:revokeToken",Wn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Pp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){O(e.length!==0,"internal-error");const n=Pp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(O(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await pk(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new qr;return r&&(O(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(O(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(O(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qr,this.toJSON())}_performRefresh(){return Bt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(t,e){O(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class $t{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=ch(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new dk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Su(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ai(this,this.stsTokenManager.getToken(this.auth,e));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ck(this,e)}reload(){return hk(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new $t(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Tl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(_t(this.auth.app))return Promise.reject(Kt(this.auth));const e=await this.getIdToken();return await Ai(this,ak(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,a,c,d;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,v=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(l=n.tenantId)!==null&&l!==void 0?l:void 0,b=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,g=(c=n.createdAt)!==null&&c!==void 0?c:void 0,p=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:m,emailVerified:x,isAnonymous:C,providerData:N,stsTokenManager:S}=n;O(m&&S,e,"internal-error");const T=qr.fromJSON(this.name,S);O(typeof m=="string",e,"internal-error"),ln(h,e.name),ln(f,e.name),O(typeof x=="boolean",e,"internal-error"),O(typeof C=="boolean",e,"internal-error"),ln(v,e.name),ln(_,e.name),ln(y,e.name),ln(b,e.name),ln(g,e.name),ln(p,e.name);const Q=new $t({uid:m,auth:e,email:f,emailVerified:x,displayName:h,isAnonymous:C,photoURL:_,phoneNumber:v,tenantId:y,stsTokenManager:T,createdAt:g,lastLoginAt:p});return N&&Array.isArray(N)&&(Q.providerData=N.map(L=>Object.assign({},L))),b&&(Q._redirectEventId=b),Q}static async _fromIdTokenResponse(e,n,r=!1){const s=new qr;s.updateFromServerResponse(n);const i=new $t({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Tl(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];O(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?j_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new qr;l.updateFromIdToken(r);const a=new $t({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Su(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(a,c),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp=new Map;function Ht(t){tn(t instanceof Function,"Expected a class definition");let e=Rp.get(t);return e?(tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Rp.set(t,e),e)}/**
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
 */class F_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}F_.type="NONE";const Ap=F_;/**
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
 */function Mo(t,e,n){return`firebase:${t}:${e}:${n}`}class Gr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Mo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Mo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?$t._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Gr(Ht(Ap),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Ht(Ap);const o=Mo(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){const h=$t._fromJSON(e,d);c!==i&&(l=h),i=c;break}}catch{}const a=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new Gr(i,e,r):(i=a[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Gr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Op(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(W_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(U_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($_(e))return"Blackberry";if(H_(e))return"Webos";if(z_(e))return"Safari";if((e.includes("chrome/")||V_(e))&&!e.includes("edge/"))return"Chrome";if(B_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function U_(t=Ve()){return/firefox\//i.test(t)}function z_(t=Ve()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function V_(t=Ve()){return/crios\//i.test(t)}function W_(t=Ve()){return/iemobile/i.test(t)}function B_(t=Ve()){return/android/i.test(t)}function $_(t=Ve()){return/blackberry/i.test(t)}function H_(t=Ve()){return/webos/i.test(t)}function ph(t=Ve()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function gk(t=Ve()){var e;return ph(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function vk(){return lw()&&document.documentMode===10}function q_(t=Ve()){return ph(t)||B_(t)||H_(t)||$_(t)||/windows phone/i.test(t)||W_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G_(t,e=[]){let n;switch(t){case"Browser":n=Op(Ve());break;case"Worker":n=`${Op(Ve())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ps}/${r}`}/**
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
 */class _k{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const a=e(i);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function yk(t,e={}){return Bn(t,"GET","/v2/passwordPolicy",Wn(t,e))}/**
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
 */const xk=6;class wk{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:xk,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(s=a.containsLowercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(i=a.containsUppercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Dp(this),this.idTokenSubscription=new Dp(this),this.beforeStateQueue=new _k(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=A_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ht(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Gr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await L_(this,{idToken:e}),r=await $t._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(_t(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Tl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=tk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(_t(this.app))return Promise.reject(Kt(this));const n=e?Se(e):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return _t(this.app)?Promise.reject(Kt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return _t(this.app)?Promise.reject(Kt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ht(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await yk(this),n=new wk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ui("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await mk(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ht(e)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await Gr.create(this,[Ht(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(O(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,s);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=G_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&XS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function $n(t){return Se(t)}class Dp{constructor(e){this.auth=e,this.observer=null,this.addObserver=vw(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let da={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ck(t){da=t}function K_(t){return da.loadJS(t)}function Sk(){return da.recaptchaEnterpriseScript}function kk(){return da.gapiScript}function Ik(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Nk="recaptcha-enterprise",Tk="NO_RECAPTCHA";class bk{constructor(e){this.type=Nk,this.auth=$n(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{lk(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new ok(a);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(a=>{l(a)})})}function s(i,o,l){const a=window.grecaptcha;bp(a)?a.enterprise.ready(()=>{a.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(Tk)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&bp(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=Sk();a.length!==0&&(a+=l),K_(a).then(()=>{s(l,i,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function Mp(t,e,n,r=!1){const s=new bk(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function ku(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Mp(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Mp(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pk(t,e){const n=Id(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(dl(i,e??{}))return s;ht(s,"already-initialized")}return n.initialize({options:e})}function Rk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ht);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ak(t,e,n){const r=$n(t);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Q_(e),{host:o,port:l}=Ok(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Dk()}function Q_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Ok(t){const e=Q_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Lp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Lp(o)}}}function Lp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Dk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Bt("not implemented")}_getIdTokenResponse(e){return Bt("not implemented")}_linkToIdToken(e,n){return Bt("not implemented")}_getReauthenticationResolver(e){return Bt("not implemented")}}async function Mk(t,e){return Bn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lk(t,e){return Ki(t,"POST","/v1/accounts:signInWithPassword",Wn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jk(t,e){return Ki(t,"POST","/v1/accounts:signInWithEmailLink",Wn(t,e))}async function Fk(t,e){return Ki(t,"POST","/v1/accounts:signInWithEmailLink",Wn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi extends mh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Oi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Oi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ku(e,n,"signInWithPassword",Lk);case"emailLink":return jk(e,{email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ku(e,r,"signUpPassword",Mk);case"emailLink":return Fk(e,{idToken:n,email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kr(t,e){return Ki(t,"POST","/v1/accounts:signInWithIdp",Wn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uk="http://localhost";class vr extends mh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new vr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ht("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=ch(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new vr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Kr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Kr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Kr(e,n)}buildRequest(){const e={requestUri:Uk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=fs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Vk(t){const e=Us(zs(t)).link,n=e?Us(zs(e)).deep_link_id:null,r=Us(zs(t)).deep_link_id;return(r?Us(zs(r)).link:null)||r||n||e||t}class gh{constructor(e){var n,r,s,i,o,l;const a=Us(zs(e)),c=(n=a.apiKey)!==null&&n!==void 0?n:null,d=(r=a.oobCode)!==null&&r!==void 0?r:null,h=zk((s=a.mode)!==null&&s!==void 0?s:null);O(c&&d&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=d,this.continueUrl=(i=a.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=Vk(e);try{return new gh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(){this.providerId=ys.PROVIDER_ID}static credential(e,n){return Oi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=gh.parseLink(n);return O(r,"argument-error"),Oi._fromEmailAndCode(e,r.code,r.tenantId)}}ys.PROVIDER_ID="password";ys.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ys.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Qi extends vh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends Qi{constructor(){super("facebook.com")}static credential(e){return vr._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hn.credential(e.oauthAccessToken)}catch{return null}}}hn.FACEBOOK_SIGN_IN_METHOD="facebook.com";hn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends Qi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return vr._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ut.credentialFromTaggedObject(e)}static credentialFromError(e){return Ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ut.credential(n,r)}catch{return null}}}Ut.GOOGLE_SIGN_IN_METHOD="google.com";Ut.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends Qi{constructor(){super("github.com")}static credential(e){return vr._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.GITHUB_SIGN_IN_METHOD="github.com";fn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends Qi{constructor(){super("twitter.com")}static credential(e,n){return vr._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return pn.credential(n,r)}catch{return null}}}pn.TWITTER_SIGN_IN_METHOD="twitter.com";pn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wk(t,e){return Ki(t,"POST","/v1/accounts:signUp",Wn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await $t._fromIdTokenResponse(e,r,s),o=jp(r);return new _r({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=jp(r);return new _r({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function jp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl extends Vn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,bl.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new bl(e,n,r,s)}}function Y_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?bl._fromErrorAndOperation(t,i,e,r):i})}async function Bk(t,e,n=!1){const r=await Ai(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return _r._forOperation(t,"link",r)}/**
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
 */async function $k(t,e,n=!1){const{auth:r}=t;if(_t(r.app))return Promise.reject(Kt(r));const s="reauthenticate";try{const i=await Ai(t,Y_(r,s,e,t),n);O(i.idToken,r,"internal-error");const o=fh(i.idToken);O(o,r,"internal-error");const{sub:l}=o;return O(t.uid===l,r,"user-mismatch"),_r._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ht(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X_(t,e,n=!1){if(_t(t.app))return Promise.reject(Kt(t));const r="signIn",s=await Y_(t,r,e),i=await _r._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Hk(t,e){return X_($n(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J_(t){const e=$n(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function qk(t,e,n){if(_t(t.app))return Promise.reject(Kt(t));const r=$n(t),o=await ku(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Wk).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&J_(t),a}),l=await _r._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function Gk(t,e,n){return _t(t.app)?Promise.reject(Kt(t)):Hk(Se(t),ys.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&J_(t),r})}function Kk(t,e,n,r){return Se(t).onIdTokenChanged(e,n,r)}function Qk(t,e,n){return Se(t).beforeAuthStateChanged(e,n)}function Yk(t,e,n,r){return Se(t).onAuthStateChanged(e,n,r)}function Xk(t){return Se(t).signOut()}const Pl="__sak";/**
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
 */class Z_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Pl,"1"),this.storage.removeItem(Pl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jk=1e3,Zk=10;class ey extends Z_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=q_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);vk()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Zk):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Jk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ey.type="LOCAL";const eI=ey;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty extends Z_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ty.type="SESSION";const ny=ty;/**
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
 */function tI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ha{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ha(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async c=>c(n.origin,i)),a=await tI(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ha.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _h(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class nI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,a)=>{const c=_h("",20);s.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(f.data.response);break;default:clearTimeout(d),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(){return window}function rI(t){Dt().location.href=t}/**
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
 */function ry(){return typeof Dt().WorkerGlobalScope<"u"&&typeof Dt().importScripts=="function"}async function sI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function iI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function oI(){return ry()?self:null}/**
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
 */const sy="firebaseLocalStorageDb",lI=1,Rl="firebaseLocalStorage",iy="fbase_key";class Yi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function fa(t,e){return t.transaction([Rl],e?"readwrite":"readonly").objectStore(Rl)}function aI(){const t=indexedDB.deleteDatabase(sy);return new Yi(t).toPromise()}function Iu(){const t=indexedDB.open(sy,lI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Rl,{keyPath:iy})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Rl)?e(r):(r.close(),await aI(),e(await Iu()))})})}async function Fp(t,e,n){const r=fa(t,!0).put({[iy]:e,value:n});return new Yi(r).toPromise()}async function cI(t,e){const n=fa(t,!1).get(e),r=await new Yi(n).toPromise();return r===void 0?null:r.value}function Up(t,e){const n=fa(t,!0).delete(e);return new Yi(n).toPromise()}const uI=800,dI=3;class oy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Iu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>dI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ry()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ha._getInstance(oI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await sI(),!this.activeServiceWorker)return;this.sender=new nI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||iI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Iu();return await Fp(e,Pl,"1"),await Up(e,Pl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Fp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>cI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Up(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=fa(s,!1).getAll();return new Yi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}oy.type="LOCAL";const hI=oy;new Gi(3e4,6e4);/**
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
 */function ly(t,e){return e?Ht(e):(O(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class yh extends mh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Kr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Kr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Kr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function fI(t){return X_(t.auth,new yh(t),t.bypassAuthState)}function pI(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),$k(n,new yh(t),t.bypassAuthState)}async function mI(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),Bk(n,new yh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fI;case"linkViaPopup":case"linkViaRedirect":return mI;case"reauthViaPopup":case"reauthViaRedirect":return pI;default:ht(this.auth,"internal-error")}}resolve(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI=new Gi(2e3,1e4);async function vI(t,e,n){if(_t(t.app))return Promise.reject(Ct(t,"operation-not-supported-in-this-environment"));const r=$n(t);JS(t,e,vh);const s=ly(r,n);return new nr(r,"signInViaPopup",e,s).executeNotNull()}class nr extends ay{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,nr.currentPopupAction&&nr.currentPopupAction.cancel(),nr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){tn(this.filter.length===1,"Popup operations only handle one event");const e=_h();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ct(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ct(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ct(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,gI.get())};e()}}nr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I="pendingRedirect",Lo=new Map;class yI extends ay{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Lo.get(this.auth._key());if(!e){try{const r=await xI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Lo.set(this.auth._key(),e)}return this.bypassAuthState||Lo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xI(t,e){const n=CI(e),r=EI(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function wI(t,e){Lo.set(t._key(),e)}function EI(t){return Ht(t._redirectPersistence)}function CI(t){return Mo(_I,t.config.apiKey,t.name)}async function SI(t,e,n=!1){if(_t(t.app))return Promise.reject(Kt(t));const r=$n(t),s=ly(r,e),o=await new yI(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI=10*60*1e3;class II{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!NI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!cy(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ct(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=kI&&this.cachedEventUids.clear(),this.cachedEventUids.has(zp(e))}saveEventToCache(e){this.cachedEventUids.add(zp(e)),this.lastProcessedEventTime=Date.now()}}function zp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function cy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function NI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return cy(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TI(t,e={}){return Bn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,PI=/^https?/;async function RI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await TI(t);for(const n of e)try{if(AI(n))return}catch{}ht(t,"unauthorized-domain")}function AI(t){const e=Cu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!PI.test(n))return!1;if(bI.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const OI=new Gi(3e4,6e4);function Vp(){const t=Dt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function DI(t){return new Promise((e,n)=>{var r,s,i;function o(){Vp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Vp(),n(Ct(t,"network-request-failed"))},timeout:OI.get()})}if(!((s=(r=Dt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Dt().gapi)===null||i===void 0)&&i.load)o();else{const l=Ik("iframefcb");return Dt()[l]=()=>{gapi.load?o():n(Ct(t,"network-request-failed"))},K_(`${kk()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw jo=null,e})}let jo=null;function MI(t){return jo=jo||DI(t),jo}/**
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
 */const LI=new Gi(5e3,15e3),jI="__/auth/iframe",FI="emulator/auth/iframe",UI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function VI(t){const e=t.config;O(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?hh(e,FI):`https://${t.config.authDomain}/${jI}`,r={apiKey:e.apiKey,appName:t.name,v:ps},s=zI.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${fs(r).slice(1)}`}async function WI(t){const e=await MI(t),n=Dt().gapi;return O(n,t,"internal-error"),e.open({where:document.body,url:VI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:UI,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ct(t,"network-request-failed"),l=Dt().setTimeout(()=>{i(o)},LI.get());function a(){Dt().clearTimeout(l),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
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
 */const BI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$I=500,HI=600,qI="_blank",GI="http://localhost";class Wp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function KI(t,e,n,r=$I,s=HI){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},BI),{width:r.toString(),height:s.toString(),top:i,left:o}),c=Ve().toLowerCase();n&&(l=V_(c)?qI:n),U_(c)&&(e=e||GI,a.scrollbars="yes");const d=Object.entries(a).reduce((f,[v,_])=>`${f}${v}=${_},`,"");if(gk(c)&&l!=="_self")return QI(e||"",l),new Wp(null);const h=window.open(e||"",l,d);O(h,t,"popup-blocked");try{h.focus()}catch{}return new Wp(h)}function QI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const YI="__/auth/handler",XI="emulator/auth/handler",JI=encodeURIComponent("fac");async function Bp(t,e,n,r,s,i){O(t.config.authDomain,t,"auth-domain-config-required"),O(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ps,eventId:s};if(e instanceof vh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",nu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,h]of Object.entries({}))o[d]=h}if(e instanceof Qi){const d=e.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const a=await t._getAppCheckToken(),c=a?`#${JI}=${encodeURIComponent(a)}`:"";return`${ZI(t)}?${fs(l).slice(1)}${c}`}function ZI({config:t}){return t.emulator?hh(t,XI):`https://${t.authDomain}/${YI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc="webStorageSupport";class eN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ny,this._completeRedirectFn=SI,this._overrideRedirectResult=wI}async _openPopup(e,n,r,s){var i;tn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Bp(e,n,r,Cu(),s);return KI(e,o,_h())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Bp(e,n,r,Cu(),s);return rI(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(tn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await WI(e),r=new II(e);return n.register("authEvent",s=>(O(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(lc,{type:lc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[lc];o!==void 0&&n(!!o),ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=RI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return q_()||z_()||ph()}}const tN=eN;var $p="@firebase/auth",Hp="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function sN(t){ns(new fr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;O(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:G_(t)},c=new Ek(r,s,i,a);return Rk(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ns(new fr("auth-internal",e=>{const n=$n(e.getProvider("auth").getImmediate());return(r=>new nN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),bn($p,Hp,rN(t)),bn($p,Hp,"esm2017")}/**
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
 */const iN=5*60,oN=dv("authIdTokenMaxAge")||iN;let qp=null;const lN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>oN)return;const s=n==null?void 0:n.token;qp!==s&&(qp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function aN(t=vv()){const e=Id(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Pk(t,{popupRedirectResolver:tN,persistence:[hI,eI,ny]}),r=dv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=lN(i.toString());Qk(n,o,()=>o(n.currentUser)),Kk(n,l=>o(l))}}const s=cv("auth");return s&&Ak(n,`http://${s}`),n}function cN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Ck({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Ct("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",cN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});sN("Browser");var uN="firebase",dN="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bn(uN,dN,"app");const hN={apiKey:"AIzaSyDJM-VHPdo2ipOFEecEFjxo5W_FQuQ3BAk",authDomain:"vistta-2e1df.firebaseapp.com",databaseURL:"https://vistta-2e1df-default-rtdb.firebaseio.com",projectId:"vistta-2e1df",storageBucket:"vistta-2e1df.firebasestorage.app",messagingSenderId:"13458811244",appId:"1:13458811244:web:e3517470970e9a45142b49",measurementId:"G-TJLG0CPZQM"},uy=gv(hN),ri=aN(uy),X=HS(uy),Fe=t=>Number(t||0).toLocaleString("pt-BR",{style:"currency",currency:"BRL"}),dy=R.createContext(null),Lt=()=>{const t=R.useContext(dy);if(!t)throw new Error("useAppContext deve ser usado dentro de um AppProvider");return t},fN=({children:t})=>{const[e,n]=R.useState(null),[r,s]=R.useState(!0),[i,o]=R.useState(null),[l,a]=R.useState(null),[c,d]=R.useState(null),[h,f]=R.useState("dashboard"),[v,_]=R.useState(""),[y,b]=R.useState([]),[g,p]=R.useState([]),[m,x]=R.useState([]),[C,N]=R.useState([]),[S,T]=R.useState([]),[Q,L]=R.useState([]),[Xe,Hn]=R.useState([]),[qn,Xi]=R.useState([]),[va,xs]=R.useState([]),[ws,k]=R.useState([]),[D,M]=R.useState(""),[re,fe]=R.useState("Pix"),[Gn,It]=R.useState(0),$e=R.useMemo(()=>S.find(P=>P.status==="aberto"),[S]),Nt=R.useMemo(()=>$e?C.filter(P=>P.caixaId===$e.id):[],[C,$e]),rn=R.useMemo(()=>Nt.reduce((P,V)=>P+(V.total||0),0),[Nt]),_a=()=>{if(!l)throw new Error("Empresa não identificada.");return l},Ji=async(P,V,pe)=>{const G=`empresas/${_a()}/${P}`;if(pe){await _n(Y(X,`${G}/${pe}`),V);return}const Me=ti(Y(X,G));await _n(Y(X,`${G}/${Me.key}`),V)},ya=async(P,V)=>{const pe=_a();await PS(Y(X,`empresas/${pe}/${P}/${V}`))};R.useEffect(()=>{let P,V;const pe=()=>{P==null||P(),P=void 0,V&&clearTimeout(V),V=void 0},ke=Yk(ri,G=>{pe(),G?(V=setTimeout(()=>{console.error("Tempo excedido ao carregar o perfil do usuário."),n(G),s(!1)},1e4),P=wu(Y(X,`users/${G.uid}`),Me=>{const ce=Me.val();a((ce==null?void 0:ce.empresaId)||null),o((ce==null?void 0:ce.role)||null),ce!=null&&ce.empresaId?xu(Y(X,`empresas/${ce.empresaId}/info`)).then(sn=>{d(sn.exists()?sn.val():null)}):d(null),n(G),s(!1),pe()},Me=>{console.error("Não foi possível carregar o perfil do usuário:",Me),a(null),o(null),n(G),s(!1),pe()})):(n(null),a(null),o(null),d(null),s(!1))});return()=>{pe(),ke()}},[]),R.useEffect(()=>{if(!l)return;const P=`empresas/${l}`,V=new Date;V.setDate(1),V.setHours(0,0,0,0);const ke=[{name:"produtos",setter:p,queryRef:Y(X,`${P}/produtos`)},{name:"clientes",setter:x,queryRef:Y(X,`${P}/clientes`)},{name:"fornecedores",setter:Hn,queryRef:Y(X,`${P}/fornecedores`)},{name:"contas",setter:Xi,queryRef:Y(X,`${P}/contas`)},{name:"categorias",setter:xs,queryRef:Y(X,`${P}/categorias`)},{name:"usuarios",setter:k,queryRef:Y(X,`${P}/usuarios`)},{name:"orcamentos",setter:L,queryRef:Y(X,`${P}/orcamentos`)},{name:"vendas",setter:N,queryRef:Np(Y(X,`${P}/vendas`),jS("data"),OS(V.toISOString()))},{name:"caixas",setter:T,queryRef:Np(Y(X,`${P}/caixas`),MS(100))}].map(G=>wu(G.queryRef,Me=>{const ce=[];Me.forEach(sn=>{ce.push({id:sn.key,...sn.val()})}),G.setter(ce)}));return()=>ke.forEach(G=>G())},[l]);const xy={user:e,loadingAuth:r,userRole:i,empresaId:l,dadosEmpresa:c,produtos:g,clientes:m,vendas:C,caixas:S,orcamentos:Q,carrinho:y,fornecedores:Xe,contas:qn,categorias:va,usuarios:ws,activeTab:h,setActiveTab:f,pdvSearch:v,setPdvSearch:_,abrirCaixa:async P=>{if($e)throw new Error("Já existe um caixa aberto.");if(!Number.isFinite(P)||P<0)throw new Error("Informe um valor inicial válido.");await Ji("caixas",{dataAbertura:new Date().toISOString(),valorInicial:P,status:"aberto",operador:(e==null?void 0:e.email)||(e==null?void 0:e.uid)||"Operador"})},fecharCaixa:async()=>{const P=$e;if(!P)throw new Error("Nenhum caixa aberto.");await _n(Y(X,`empresas/${_a()}/caixas/${P.id}`),{status:"fechado",dataFechamento:new Date().toISOString(),totalVendas:rn,valorFinal:Number(P.valorInicial||0)+rn})},salvarProduto:(P,V)=>Ji("produtos",P,V),excluirProduto:P=>ya("produtos",P),salvarCliente:(P,V)=>Ji("clientes",P,V),excluirCliente:P=>ya("clientes",P),salvarCadastro:(P,V,pe)=>Ji(P,V,pe),excluirCadastro:(P,V)=>ya(P,V),addToCart:P=>{b(V=>{const pe=V.findIndex(ke=>ke.id===P.id);if(pe>-1){const ke=[...V];return ke[pe].qtd=Math.min(ke[pe].qtd+1,Number(P.qtd)),ke}return[...V,{...P,qtd:1}]})},removeFromCart:P=>b(V=>V.filter(pe=>pe.id!==P)),finalizarVenda:async(P=!1)=>{if(y.length===0||!l)return alert("Carrinho vazio!");if(!P&&!$e)return alert("Abra o caixa primeiro!");let V=y.reduce((G,Me)=>G+Number(Me.venda)*Me.qtd,0),pe=y.reduce((G,Me)=>G+Number(Me.custo)*Me.qtd,0),ke=Math.max(0,Number(Gn)||0);ke=Math.min(ke,V);try{if(P){if(!D)return alert("Selecione um cliente para salvar o orçamento!");await ti(Y(X,`empresas/${l}/orcamentos`),{cliId:D,subtotal:V,desconto:ke,total:V-ke,itens:y.map(G=>({id:G.id,marca:G.marca,modelo:G.modelo,qtd:G.qtd,venda:G.venda})),data:new Date().toISOString(),status:"pendente"})}else{const G=y.map(async ce=>{const sn=Y(X,`empresas/${l}/produtos/${ce.id}/qtd`),Sh=await xu(sn),xa=Number(Sh.val());if(!Sh.exists()||!Number.isFinite(xa)||xa<ce.qtd)throw new Error(`Estoque insuficiente para ${ce.marca} ${ce.modelo}.`);const wa=await QS(sn,Zi=>{if(Zi===null)return Zi;const kh=Number(Zi)-ce.qtd;return kh>=0?kh:Zi}),wy=Number(wa.snapshot.val());if(!wa.committed||wy!==xa-ce.qtd)throw new Error(`Não foi possível reservar o estoque de ${ce.marca} ${ce.modelo}.`);return wa});await Promise.all(G);const Me=ti(Y(X,`empresas/${l}/vendas`));await _n(Y(X,`empresas/${l}/vendas/${Me.key}`),{cliId:D,pag:re,subtotal:V,desconto:ke,total:V-ke,custoBase:pe,itens:y.length,data:new Date().toISOString(),caixaId:$e==null?void 0:$e.id})}b([]),It(0),M(""),alert(P?"Orçamento salvo!":"Venda concluída com sucesso!")}catch(G){alert("Erro ao finalizar: "+G.message)}},caixaAberto:$e,totalVendasCaixa:rn,pdvCliente:D,setPdvCliente:M,pdvDesconto:Gn,setPdvDesconto:It,pdvPagamento:re,setPdvPagamento:fe};return u.jsx(dy.Provider,{value:xy,children:t})};/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var pN={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mN=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=(t,e)=>{const n=R.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:l="",children:a,...c},d)=>R.createElement("svg",{ref:d,...pN,width:s,height:s,stroke:r,strokeWidth:o?Number(i)*24/Number(s):i,className:["lucide",`lucide-${mN(t)}`,l].join(" "),...c},[...e.map(([h,f])=>R.createElement(h,f)),...Array.isArray(a)?a:[a]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=$("ArrowRightLeft",[["path",{d:"m16 3 4 4-4 4",key:"1x1c3m"}],["path",{d:"M20 7H4",key:"zbl0bi"}],["path",{d:"m8 21-4-4 4-4",key:"h9nckh"}],["path",{d:"M4 17h16",key:"g4d7ey"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=$("Boxes",[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gN=$("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vN=$("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _N=$("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yN=$("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=$("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xN=$("Glasses",[["circle",{cx:"6",cy:"15",r:"4",key:"vux9w4"}],["circle",{cx:"18",cy:"15",r:"4",key:"18o8ve"}],["path",{d:"M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2",key:"1ag4bs"}],["path",{d:"M2.5 13 5 7c.7-1.3 1.4-2 3-2",key:"1hm1gs"}],["path",{d:"M21.5 13 19 7c-.7-1.3-1.5-2-3-2",key:"1r31ai"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=$("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Al=$("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wN=$("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EN=$("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CN=$("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SN=$("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kN=$("PackageOpen",[["path",{d:"M12 22v-9",key:"x3hkom"}],["path",{d:"M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z",key:"2ntwy6"}],["path",{d:"M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13",key:"1pmm1c"}],["path",{d:"M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z",key:"12ttoo"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IN=$("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=$("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pa=$("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=$("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=$("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NN=$("Store",[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7",key:"jon5kx"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TN=$("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bN=$("Tags",[["path",{d:"m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19",key:"1cbfv1"}],["path",{d:"M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z",key:"135mg7"}],["circle",{cx:"6.5",cy:"9.5",r:".5",fill:"currentColor",key:"5pm5xn"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ma=$("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=$("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=$("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PN=$("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ga=$("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RN=$("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=$("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function rr({title:t,value:e,subtitle:n,icon:r,bg:s="bg-white dark:bg-slate-800",color:i="text-slate-900 dark:text-white",border:o="border-slate-100 dark:border-slate-700"}){return u.jsxs("div",{className:`p-6 rounded-3xl border shadow-sm ${s} ${o}`,children:[u.jsx("div",{className:"flex items-start justify-between mb-4",children:u.jsx("div",{className:`w-12 h-12 rounded-2xl flex items-center justify-center ${s==="bg-white dark:bg-slate-800"?"bg-indigo-50 text-[#4A3AFF]":i.replace("text-","bg-").replace("500","100")+" "+i}`,children:u.jsx(r,{size:24})})}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-[13px] font-bold text-slate-500 uppercase tracking-wider mb-1",children:t}),u.jsx("div",{className:`text-2xl font-black ${i}`,children:e}),n&&u.jsx("p",{className:"text-[12px] font-medium text-slate-400 mt-1",children:n})]})]})}function Ch({open:t,onClose:e,title:n,width:r="max-w-md",children:s}){return t?u.jsx("div",{className:"fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4",children:u.jsxs("div",{className:`bg-white rounded-[32px] w-full ${r} shadow-2xl flex flex-col max-h-[90vh] animate-fade-in`,children:[u.jsxs("div",{className:"flex justify-between items-center p-6 border-b border-slate-100",children:[u.jsx("h2",{className:"text-xl font-bold text-slate-800",children:n}),u.jsx("button",{onClick:e,className:"p-2 bg-slate-100 rounded-full text-slate-500 hover:text-rose-500 transition-colors",children:u.jsx(_y,{size:20})})]}),u.jsx("div",{className:"overflow-y-auto custom-scrollbar p-6",children:s})]})}):null}function yy({className:t="",solidWhite:e=!1}){const n=e?"currentColor":"white",r=e?"currentColor":"#a094ff";return u.jsxs("svg",{viewBox:"0 0 120 60",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:t,children:[u.jsxs("g",{stroke:n,strokeWidth:"8",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"38",cy:"36",r:"14"}),u.jsx("path",{d:"M 28 26 Q 16 12 10 22"})]}),u.jsxs("g",{stroke:r,strokeWidth:"8",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"82",cy:"36",r:"14"}),u.jsx("path",{d:"M 92 26 Q 104 12 110 22"}),u.jsx("path",{d:"M 52 36 Q 60 28 68 36"})]})]})}function bt({icon:t,label:e,active:n,onClick:r,badge:s,badgeColor:i}){return u.jsxs("button",{onClick:r,className:`w-full flex items-center justify-between px-4 py-3 rounded-2xl transition-all ${n?"bg-indigo-50 text-[#4A3AFF] font-bold":"text-slate-500 hover:bg-slate-100 font-medium"}`,children:[u.jsxs("div",{className:"flex items-center",children:[u.jsx(t,{size:20,className:`mr-3 ${n?"text-[#4A3AFF]":"text-slate-400"}`}),e]}),s&&u.jsx("span",{className:`px-2 py-0.5 rounded-lg text-[11px] font-bold ${i}`,children:s})]})}function ac({label:t}){return u.jsx("div",{className:"px-4 py-2 mt-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider",children:t})}function AN(){var l,a;const{activeTab:t,setActiveTab:e,caixaAberto:n,orcamentos:r,userRole:s,dadosEmpresa:i,user:o}=Lt();return u.jsxs("aside",{className:"hidden md:flex flex-col w-[270px] bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700/50 z-20 shadow-sm",children:[u.jsxs("div",{className:"h-[80px] flex items-center px-6 border-b border-slate-100 dark:border-slate-700/50 flex-shrink-0",children:[u.jsx("div",{className:"w-10 h-10 rounded-xl bg-[#4A3AFF] text-white flex items-center justify-center mr-3",children:u.jsx(yy,{className:"w-7",solidWhite:!0})}),u.jsx("span",{className:"font-bold text-[18px] text-slate-900 dark:text-white truncate",title:i==null?void 0:i.nome,children:(i==null?void 0:i.nome)||"Minha Ótica"})]}),u.jsxs("div",{className:"flex-1 overflow-y-auto py-6 px-4 space-y-1 custom-scrollbar",children:[u.jsx(bt,{icon:py,label:"Dashboard",active:t==="dashboard",onClick:()=>e("dashboard")}),u.jsx(ac,{label:"Operação"}),u.jsx(bt,{icon:RN,label:"Caixa Diário",active:t==="caixa",onClick:()=>e("caixa"),badge:n?"Aberto":"Fechado",badgeColor:n?"bg-emerald-100 text-emerald-700":"bg-slate-100 text-slate-500"}),u.jsx(bt,{icon:gy,label:"PDV",active:t==="vendas",onClick:()=>e("vendas")}),u.jsx(bt,{icon:fy,label:"Orçamentos",active:t==="orcamentos",onClick:()=>e("orcamentos"),badge:r.filter(c=>c.status==="pendente").length||null,badgeColor:"bg-amber-100 text-amber-700"}),u.jsx(ac,{label:"Cadastros"}),u.jsx(bt,{icon:xh,label:"Estoque",active:t==="estoque",onClick:()=>e("estoque")}),u.jsx(bt,{icon:ga,label:"Clientes",active:t==="clientes",onClick:()=>e("clientes")}),u.jsx(bt,{icon:bN,label:"Categorias",active:t==="categorias",onClick:()=>e("categorias")}),s==="admin"&&u.jsxs(u.Fragment,{children:[u.jsx(ac,{label:"Gestão (Admin)"}),u.jsx(bt,{icon:Eh,label:"DRE Financeiro",active:t==="financeiro",onClick:()=>e("financeiro")}),u.jsx(bt,{icon:hy,label:"Contas",active:t==="contas",onClick:()=>e("contas")}),u.jsx(bt,{icon:PN,label:"Usuários",active:t==="usuarios",onClick:()=>e("usuarios")})]})]}),u.jsxs("div",{className:"p-4 border-t border-slate-100 dark:border-slate-700/80 flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center min-w-0",children:[u.jsx("div",{className:"w-10 h-10 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-[#4A3AFF] flex items-center justify-center font-bold mr-3",children:((l=o==null?void 0:o.email)==null?void 0:l.charAt(0).toUpperCase())||"U"}),u.jsxs("div",{className:"min-w-0",children:[u.jsx("div",{className:"text-sm font-bold truncate text-slate-900 dark:text-white",children:((a=o==null?void 0:o.email)==null?void 0:a.split("@")[0])||"Usuário"}),u.jsx("div",{className:"text-[10px] text-slate-500 font-bold uppercase",children:s==="admin"?"Administrador":"Vendedor"})]})]}),u.jsx("button",{onClick:()=>Xk(ri),className:"text-slate-400 hover:text-rose-500",title:"Sair",children:u.jsx(wN,{size:18})})]})]})}function ON(){const[t,e]=R.useState("login"),[n,r]=R.useState(!1),[s,i]=R.useState(""),[o,l]=R.useState(""),[a,c]=R.useState(""),[d,h]=R.useState(""),[f,v]=R.useState(!1),[_,y]=R.useState(!0),b=async p=>{p.preventDefault(),h(""),r(!0);try{if(t==="login")await Gk(ri,s,o);else{const m=await qk(ri,s,o);try{const C=ti(Y(X,"empresas")).key;await _n(Y(X,`empresas/${C}/info`),{nome:a||"Minha Ótica",criadoEm:new Date().toISOString()}),await _n(Y(X,`users/${m.user.uid}`),{empresaId:C,role:"admin",email:s})}catch{await m.user.delete(),h("Falha ao registrar empresa no banco.")}}}catch{h(t==="login"?"E-mail ou senha incorretos.":"Erro ao autenticar.")}finally{r(!1)}},g=async()=>{h(""),r(!0);const p=new Ut;try{const m=await vI(ri,p),x=Y(X,`users/${m.user.uid}`);if(!(await xu(x)).exists()){const S=ti(Y(X,"empresas")).key;await _n(Y(X,`empresas/${S}/info`),{nome:m.user.displayName?`Ótica de ${m.user.displayName}`:"Minha Ótica",criadoEm:new Date().toISOString()}),await _n(Y(X,`users/${m.user.uid}`),{empresaId:S,role:"admin",email:m.user.email,nome:m.user.displayName})}}catch(m){h(`Erro Google: ${m.message}`)}finally{r(!1)}};return u.jsxs("div",{className:"flex h-screen w-full bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white font-sans overflow-hidden",children:[u.jsxs("div",{className:"hidden lg:flex w-[55%] bg-[#120D38] flex-col items-center justify-center p-12 text-white relative",children:[u.jsx("div",{className:"absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-[#3b2b9a] rounded-full blur-[140px] opacity-60"}),u.jsx("div",{className:"absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-[#21146c] rounded-full blur-[140px] opacity-60"}),u.jsxs("div",{className:"relative z-10 flex flex-col items-center text-center w-full max-w-2xl",children:[u.jsxs("div",{className:"mb-10 flex flex-col items-center",children:[u.jsx(yy,{className:"w-36 h-auto mb-4 drop-shadow-2xl",solidWhite:!1}),u.jsx("h1",{className:"text-[56px] font-bold tracking-[0.2em] leading-none mb-3 text-white",children:"VISTTA"}),u.jsx("p",{className:"text-[#a094ff] tracking-[0.35em] text-[11px] uppercase font-semibold",children:"Gestão Inteligente para Óticas"}),u.jsx("div",{className:"w-12 h-[2px] bg-[#6552ff] mt-8 rounded-full"})]}),u.jsx("h2",{className:"text-[40px] font-normal mb-1 tracking-tight text-white/90",children:"Sua ótica. Uma plataforma."}),u.jsx("h2",{className:"text-[42px] font-bold text-[#7b66ff] mb-6 tracking-tight",children:"Mais controle."}),u.jsxs("div",{className:"flex items-start justify-center gap-8 mb-16 w-full",children:[u.jsxs("div",{className:"flex flex-col items-center flex-1 max-w-[180px]",children:[u.jsx(NN,{size:36,className:"text-[#7b66ff] mb-4"}),u.jsx("h3",{className:"text-[14px] font-bold mb-2 text-white",children:"Gestão Multi-Loja"})]}),u.jsx("div",{className:"w-px h-24 bg-indigo-500/20 mt-4"}),u.jsxs("div",{className:"flex flex-col items-center flex-1 max-w-[180px]",children:[u.jsx(IN,{size:36,className:"text-[#7b66ff] mb-4"}),u.jsx("h3",{className:"text-[14px] font-bold mb-2 text-white",children:"Estoque em tempo real"})]})]})]})]}),u.jsx("div",{className:"flex-1 lg:w-[45%] bg-[#F8FAFC] dark:bg-slate-900 flex flex-col items-center justify-center p-6 lg:p-12 relative overflow-y-auto custom-scrollbar",children:u.jsx("div",{className:"w-full max-w-[460px]",children:u.jsxs("div",{className:"bg-white dark:bg-slate-800 rounded-[32px] shadow-sm border border-slate-100 p-8 sm:p-10 mb-8 w-full",children:[u.jsx("div",{className:"text-center mb-8",children:u.jsx("h2",{className:"text-[26px] font-bold mb-2",children:t==="login"?"Bem-vindo de volta!":"Crie sua conta!"})}),u.jsxs("form",{onSubmit:b,className:"space-y-5",children:[d&&u.jsxs("div",{className:"bg-rose-50 text-rose-600 p-3.5 rounded-xl text-sm font-bold flex gap-3 border border-rose-100",children:[u.jsx(vy,{size:18}),u.jsx("span",{children:d})]}),t==="register"&&u.jsxs("div",{children:[u.jsx("label",{className:"block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2",children:"Nome da Ótica"}),u.jsxs("div",{className:"relative",children:[u.jsx(gN,{size:18,className:"absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"}),u.jsx("input",{type:"text",required:!0,value:a,onChange:p=>c(p.target.value),className:"w-full bg-slate-50 border rounded-xl pl-12 pr-4 py-3.5 outline-none focus:border-[#5235ff]",placeholder:"Nome da ótica"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2",children:"E-mail"}),u.jsxs("div",{className:"relative",children:[u.jsx(EN,{size:18,className:"absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"}),u.jsx("input",{type:"email",required:!0,value:s,onChange:p=>i(p.target.value),className:"w-full bg-slate-50 border rounded-xl pl-12 pr-4 py-3.5 outline-none focus:border-[#5235ff]",placeholder:"Seu e-mail"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2",children:"Senha"}),u.jsxs("div",{className:"relative",children:[u.jsx(Al,{size:18,className:"absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"}),u.jsx("input",{type:f?"text":"password",required:!0,value:o,onChange:p=>l(p.target.value),className:"w-full bg-slate-50 border rounded-xl pl-12 pr-12 py-3.5 outline-none focus:border-[#5235ff]",placeholder:"Sua senha"}),u.jsx("button",{type:"button",onClick:()=>v(!f),className:"absolute right-4 top-1/2 -translate-y-1/2 text-slate-400",children:f?u.jsx(_N,{size:18}):u.jsx(yN,{size:18})})]})]}),u.jsx("button",{type:"submit",disabled:n,className:"w-full bg-[#5235ff] hover:bg-[#4323ec] text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 mt-4",children:n?"Aguarde...":t==="login"?"Entrar":"Criar Conta"}),t==="login"&&u.jsx("button",{type:"button",onClick:g,className:"w-full border py-3.5 rounded-xl font-bold flex justify-center gap-3 mt-4 hover:bg-slate-50",children:"Entrar com Google"}),u.jsx("div",{className:"text-center mt-6",children:u.jsx("button",{type:"button",onClick:()=>e(t==="login"?"register":"login"),className:"text-sm font-bold text-[#5235ff] hover:underline",children:t==="login"?"Criar uma conta":"Fazer login"})})]})]})})})]})}function DN(){const{produtos:t,vendas:e,clientes:n,setActiveTab:r}=Lt();return u.jsxs("div",{className:"flex flex-col h-full",children:[u.jsx("div",{className:"mb-8",children:u.jsx("h1",{className:"text-2xl font-bold mb-2",children:"Painel Geral"})}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6",children:[u.jsx(rr,{title:"Estoque Total",value:t.reduce((s,i)=>s+Number(i.qtd),0),subtitle:"unidades ativas",icon:xh}),u.jsx(rr,{title:"Vendas do Mês",value:Fe(e.reduce((s,i)=>s+(i.total||0),0)),icon:Eh,color:"text-emerald-500"}),u.jsx(rr,{title:"Clientes Base",value:n.length,icon:ga}),u.jsx(rr,{title:"Estoque Crítico",value:t.filter(s=>Number(s.qtd)<Number(s.min)).length,icon:vy,bg:"bg-rose-50",color:"text-rose-500"})]})]})}function MN(){const{caixaAberto:t,pdvSearch:e,setPdvSearch:n,carrinho:r,addToCart:s,removeFromCart:i,pdvCliente:o,setPdvCliente:l,clientes:a,pdvDesconto:c,setPdvDesconto:d,pdvPagamento:h,setPdvPagamento:f,finalizarVenda:v,setActiveTab:_,produtos:y}=Lt(),[b,g]=R.useState("produtos"),p=y.filter(m=>Number(m.qtd)>0&&((m.marca||"").toLowerCase().includes(e.toLowerCase())||(m.modelo||"").toLowerCase().includes(e.toLowerCase())||(m.codigo||"").toLowerCase().includes(e.toLowerCase())));return u.jsxs("div",{className:"flex flex-col h-full",children:[u.jsx("div",{className:"mb-6 flex justify-between items-end",children:u.jsxs("div",{children:[u.jsx("h1",{className:"text-2xl sm:text-3xl font-bold mb-2",children:"Ponto de Venda"}),t?u.jsx("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold",children:"Caixa Aberto"}):u.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-slate-600 text-xs font-bold",children:[u.jsx(Al,{size:12})," Caixa Fechado"]})]})}),t?u.jsxs("div",{className:"flex-1 flex flex-col lg:flex-row gap-6",children:[u.jsxs("div",{className:"lg:w-[60%] bg-white rounded-3xl border border-slate-100 p-6 flex flex-col",children:[u.jsxs("div",{className:"relative mb-6",children:[u.jsx(my,{className:"absolute left-4 top-1/2 -translate-y-1/2 text-slate-400",size:18}),u.jsx("input",{type:"text",placeholder:"Buscar por marca, modelo ou código...",value:e,onChange:m=>n(m.target.value),className:"w-full bg-slate-50 border rounded-2xl pl-12 pr-4 py-3.5 outline-none focus:border-[#4A3AFF]"})]}),u.jsx("div",{className:"flex-1 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5",children:p.map(m=>u.jsxs("div",{onClick:()=>s(m),className:"bg-slate-50 border rounded-2xl p-5 cursor-pointer hover:border-[#4A3AFF] transition-all flex flex-col group",children:[u.jsx("div",{className:"text-[11px] text-slate-400 font-mono mb-2",children:m.codigo}),u.jsxs("div",{className:"font-bold text-[15px] group-hover:text-[#4A3AFF]",children:[m.marca," ",m.modelo]}),u.jsx("div",{className:"text-[12px] text-slate-500 mb-4",children:m.categoria}),u.jsxs("div",{className:"mt-auto flex justify-between items-end",children:[u.jsx("span",{className:"font-extrabold text-emerald-600 text-lg",children:Fe(m.venda)}),u.jsxs("span",{className:"text-[11px] bg-white px-2 py-1 rounded-lg font-bold",children:["Est: ",m.qtd]})]})]},m.id))})]}),u.jsxs("div",{className:"lg:w-[40%] bg-white rounded-3xl border border-slate-100 p-6 flex flex-col",children:[u.jsx("h3",{className:"font-bold text-xl mb-5",children:"Carrinho"}),u.jsxs("div",{className:"mb-5",children:[u.jsx("label",{className:"block text-[12px] font-bold text-slate-500 uppercase mb-2",children:"Cliente Vinculado"}),u.jsxs("select",{value:o,onChange:m=>l(m.target.value),className:"w-full bg-slate-50 border rounded-xl px-4 py-3 outline-none focus:border-[#4A3AFF]",children:[u.jsx("option",{value:"",children:"Consumidor Final (Balcão)"}),a.map(m=>u.jsx("option",{value:m.id,children:m.nome},m.id))]})]}),u.jsx("div",{className:"flex-1 overflow-y-auto space-y-3 mb-6 p-3 bg-slate-50 rounded-2xl border",children:r.map(m=>u.jsxs("div",{className:"flex justify-between items-center p-4 bg-white border rounded-xl",children:[u.jsxs("div",{className:"flex-1",children:[u.jsxs("div",{className:"font-bold text-[14px]",children:[m.marca," ",m.modelo]}),u.jsxs("div",{className:"text-[12px] text-slate-500 mt-1",children:[u.jsxs("span",{className:"font-bold px-1.5 py-0.5 bg-slate-100 rounded mr-1",children:[m.qtd,"x"]})," ",Fe(m.venda)]})]}),u.jsx("div",{className:"font-extrabold text-[15px] mr-3",children:Fe(Number(m.venda)*m.qtd)}),u.jsx("button",{onClick:()=>i(m.id),className:"text-slate-300 hover:text-rose-500",children:u.jsx(_y,{size:18})})]},m.id))}),u.jsxs("div",{className:"pt-5 border-t",children:[u.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-6",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-[11px] font-bold text-slate-400 uppercase mb-2",children:"Desc (R$)"}),u.jsx("input",{type:"number",min:"0",value:c,onChange:m=>d(Number(m.target.value)),className:"w-full bg-slate-50 border rounded-xl px-4 py-3 outline-none focus:border-[#4A3AFF]"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-[11px] font-bold text-slate-400 uppercase mb-2",children:"Pagamento"}),u.jsxs("select",{value:h,onChange:m=>f(m.target.value),className:"w-full bg-slate-50 border rounded-xl px-4 py-3 outline-none focus:border-[#4A3AFF]",children:[u.jsx("option",{children:"Pix"}),u.jsx("option",{children:"Crédito"}),u.jsx("option",{children:"Débito"}),u.jsx("option",{children:"Dinheiro"})]})]})]}),u.jsxs("div",{className:"flex justify-between items-end mb-6",children:[u.jsx("span",{className:"font-bold text-slate-500 text-[15px]",children:"Total Geral"}),u.jsx("span",{className:"text-4xl font-black text-[#4A3AFF]",children:Fe(Math.max(0,r.reduce((m,x)=>m+Number(x.venda)*x.qtd,0)-(Number(c)||0)))})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[u.jsxs("button",{onClick:()=>v(!0),className:"w-full border-2 border-slate-200 py-3.5 rounded-xl font-bold flex items-center justify-center",children:[u.jsx(fy,{size:18,className:"mr-2"})," Orçamento"]}),u.jsxs("button",{onClick:()=>v(!1),className:"w-full bg-[#4A3AFF] text-white py-3.5 rounded-xl font-bold flex items-center justify-center",children:[u.jsx(vN,{size:18,className:"mr-2"})," Vender"]})]})]})]})]}):u.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center border-2 border-dashed border-slate-200 rounded-3xl p-8 text-center",children:[u.jsx("div",{className:"w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center text-rose-500 mb-6",children:u.jsx(Al,{className:"w-10 h-10"})}),u.jsx("h2",{className:"text-2xl font-bold mb-3",children:"O Caixa está Fechado"}),u.jsx("p",{className:"text-slate-500 mb-8 max-w-md",children:"Para garantir a segurança financeira, é obrigatório abrir o caixa do dia antes de registrar qualquer venda."}),u.jsx("button",{onClick:()=>_("caixa"),className:"bg-[#4A3AFF] text-white px-8 py-3.5 rounded-xl font-bold",children:"Ir para o Controle de Caixa"})]})]})}function LN(){const{caixaAberto:t,totalVendasCaixa:e,caixas:n,abrirCaixa:r,fecharCaixa:s}=Lt(),[i,o]=R.useState("0"),[l,a]=R.useState(!1),c=async d=>{a(!0);try{await d()}catch(h){alert(h.message||"Não foi possível atualizar o caixa.")}finally{a(!1)}};return u.jsxs("div",{className:"flex flex-col h-full",children:[u.jsxs("div",{className:"mb-8 flex justify-between items-center",children:[u.jsxs("div",{children:[u.jsx("h1",{className:"text-2xl sm:text-3xl font-bold mb-2",children:"Caixa Diário"}),u.jsx("p",{className:"text-slate-500",children:"Abertura e fechamento de caixa para o PDV."})]}),t?u.jsx("button",{disabled:l,onClick:()=>c(s),className:"bg-rose-500 text-white px-6 py-3 rounded-xl font-semibold shadow-md disabled:opacity-60",children:"Fechar Caixa"}):u.jsx("button",{disabled:l,onClick:()=>{const d=Number(i.replace(",","."));c(()=>r(d))},className:"bg-[#4A3AFF] text-white px-6 py-3 rounded-xl font-semibold shadow-md disabled:opacity-60",children:"Abrir Caixa"})]}),t?u.jsxs("div",{className:"bg-white rounded-3xl p-8 mb-10 flex justify-between items-center shadow-sm border border-slate-100",children:[u.jsxs("div",{children:[u.jsx("p",{className:"text-emerald-500 font-bold uppercase text-xs mb-2",children:"Caixa Aberto"}),u.jsxs("p",{className:"text-slate-500",children:["Operador: ",u.jsx("span",{className:"font-bold text-slate-900",children:t.operador})]})]}),u.jsxs("div",{className:"flex gap-10",children:[u.jsxs("div",{className:"text-right",children:[u.jsx("p",{className:"text-[11px] font-bold text-slate-400 uppercase mb-1",children:"Fundo Inicial"}),u.jsx("p",{className:"text-2xl font-bold",children:Fe(t.valorInicial)})]}),u.jsxs("div",{className:"text-right",children:[u.jsx("p",{className:"text-[11px] font-bold text-slate-400 uppercase mb-1",children:"Vendas no Caixa"}),u.jsxs("p",{className:"text-2xl font-bold text-emerald-500",children:["+ ",Fe(e)]})]}),u.jsxs("div",{className:"text-right pl-10 border-l border-slate-100",children:[u.jsx("p",{className:"text-[11px] font-bold text-slate-400 uppercase mb-1",children:"Saldo Atual"}),u.jsx("p",{className:"text-4xl font-extrabold text-[#4A3AFF]",children:Fe((t.valorInicial||0)+e)})]})]})]}):u.jsxs("div",{className:"border-2 border-dashed border-slate-200 rounded-3xl p-16 mb-10 text-center flex flex-col items-center",children:[u.jsx("div",{className:"w-16 h-16 bg-white rounded-full flex items-center justify-center text-slate-400 mb-5 shadow-sm border",children:u.jsx(Al,{size:24})}),u.jsx("h3",{className:"text-2xl font-bold text-slate-800 mb-3",children:"Caixa Fechado"}),u.jsx("p",{className:"text-slate-500 mb-8 max-w-md",children:"Nenhum caixa está aberto no momento. Abra o caixa para permitir novas vendas."}),u.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[u.jsx("label",{htmlFor:"valor-inicial",className:"text-sm font-bold text-slate-600",children:"Fundo inicial"}),u.jsx("input",{id:"valor-inicial",type:"number",min:"0",step:"0.01",value:i,onChange:d=>o(d.target.value),className:"w-36 bg-white border border-slate-200 rounded-xl px-3 py-2 outline-none focus:border-[#4A3AFF]"})]})]})]})}function jN({data:t,onSave:e,onClose:n}){const[r,s]=R.useState(t||{codigo:"",categoria:"Armação",marca:"",modelo:"",cor:"",custo:"",venda:"",qtd:"",min:""}),i=(a,c)=>s(d=>({...d,[a]:c})),o="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3.5 text-[15px] outline-none focus:border-[#4A3AFF] transition-all text-slate-900 dark:text-white",l="text-[12px] font-bold text-slate-500 uppercase tracking-wider mb-2 block";return u.jsxs("form",{onSubmit:a=>{a.preventDefault(),e(r)},children:[u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6",children:[u.jsxs("div",{children:[u.jsx("label",{className:l,children:"SKU (Cód)"}),u.jsx("input",{required:!0,value:r.codigo,onChange:a=>i("codigo",a.target.value),className:o})]}),u.jsxs("div",{className:"sm:col-span-2",children:[u.jsx("label",{className:l,children:"Categoria"}),u.jsxs("select",{value:r.categoria,onChange:a=>i("categoria",a.target.value),className:o,children:[u.jsx("option",{children:"Armação"}),u.jsx("option",{children:"Lente"}),u.jsx("option",{children:"Óculos de Sol"}),u.jsx("option",{children:"Acessório"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:l,children:"Marca"}),u.jsx("input",{required:!0,value:r.marca,onChange:a=>i("marca",a.target.value),className:o})]}),u.jsxs("div",{children:[u.jsx("label",{className:l,children:"Modelo"}),u.jsx("input",{value:r.modelo,onChange:a=>i("modelo",a.target.value),className:o})]}),u.jsxs("div",{children:[u.jsx("label",{className:l,children:"Cor"}),u.jsx("input",{value:r.cor,onChange:a=>i("cor",a.target.value),className:o})]}),u.jsx("div",{className:"sm:col-span-3 border-t border-slate-100 dark:border-slate-700 my-2"}),u.jsxs("div",{children:[u.jsx("label",{className:l,children:"Custo (R$)"}),u.jsx("input",{type:"number",step:"0.01",required:!0,value:r.custo,onChange:a=>i("custo",a.target.value),className:o})]}),u.jsxs("div",{children:[u.jsx("label",{className:"text-[12px] font-bold text-emerald-500 uppercase tracking-wider mb-2 block",children:"Venda (R$)"}),u.jsx("input",{type:"number",step:"0.01",required:!0,value:r.venda,onChange:a=>i("venda",a.target.value),className:`${o} border-emerald-200 dark:border-emerald-800 focus:border-emerald-500 font-extrabold`})]}),u.jsxs("div",{children:[u.jsx("label",{className:l,children:"Estoque Atual"}),u.jsx("input",{type:"number",required:!0,value:r.qtd,onChange:a=>i("qtd",a.target.value),className:o})]}),u.jsxs("div",{children:[u.jsx("label",{className:"text-[12px] font-bold text-rose-500 uppercase tracking-wider mb-2 block",children:"Estoque Mín."}),u.jsx("input",{type:"number",required:!0,value:r.min,onChange:a=>i("min",a.target.value),className:`${o} border-rose-200 dark:border-rose-800 focus:border-rose-500`})]})]}),u.jsxs("div",{className:"pt-4 border-t border-slate-100 dark:border-slate-700 flex justify-end gap-3 sm:gap-4",children:[u.jsx("button",{type:"button",onClick:n,className:"px-6 py-3.5 rounded-xl font-bold bg-slate-100 text-slate-600",children:"Cancelar"}),u.jsx("button",{type:"submit",className:"px-8 py-3.5 rounded-xl font-bold bg-[#4A3AFF] text-white",children:"Salvar Produto"})]})]})}function FN(){const{produtos:t,salvarProduto:e,excluirProduto:n}=Lt(),[r,s]=R.useState(""),[i,o]=R.useState(null),[l,a]=R.useState(!1),c=async d=>{await e(d,i==null?void 0:i.id),a(!1),o(null)};return u.jsxs("div",{className:"flex flex-col h-full",children:[u.jsxs("div",{className:"mb-8 flex justify-between items-center",children:[u.jsxs("div",{children:[u.jsx("h1",{className:"text-2xl sm:text-3xl font-bold mb-2",children:"Estoque"}),u.jsx("p",{className:"text-slate-500",children:"Gerencie produtos e níveis de inventário."})]}),u.jsxs("button",{onClick:()=>{o(null),a(!0)},className:"bg-[#4A3AFF] text-white px-6 py-3 rounded-xl font-semibold flex items-center",children:[u.jsx(pa,{size:20,className:"mr-2"})," Adicionar Produto"]})]}),u.jsxs("div",{className:"bg-white rounded-3xl border border-slate-100 shadow-sm flex-1 flex flex-col overflow-hidden min-h-[400px]",children:[u.jsx("div",{className:"p-4 bg-white border-b border-slate-100",children:u.jsxs("div",{className:"relative max-w-md",children:[u.jsx(my,{className:"absolute left-4 top-1/2 -translate-y-1/2 text-slate-400",size:18}),u.jsx("input",{type:"text",placeholder:"Buscar código, marca...",value:r,onChange:d=>s(d.target.value),className:"w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-4 py-3 outline-none focus:border-[#4A3AFF]"})]})}),u.jsx("div",{className:"flex-1 overflow-auto custom-scrollbar",children:u.jsxs("table",{className:"w-full text-left min-w-[700px]",children:[u.jsx("thead",{children:u.jsxs("tr",{className:"border-b border-slate-100 text-[11px] text-slate-400 uppercase font-semibold sticky top-0 bg-white",children:[u.jsx("th",{className:"py-4 px-6 w-24",children:"Cód."}),u.jsx("th",{className:"py-4 px-6",children:"Produto"}),u.jsx("th",{className:"py-4 px-6",children:"Categoria"}),u.jsx("th",{className:"py-4 px-6 text-right",children:"Venda"}),u.jsx("th",{className:"py-4 px-6 text-center w-28",children:"Qtd"}),u.jsx("th",{className:"py-4 px-6 text-center",children:"Ações"})]})}),u.jsx("tbody",{className:"divide-y divide-slate-50",children:t.filter(d=>{var h,f;return((h=d.codigo)==null?void 0:h.toLowerCase().includes(r.toLowerCase()))||((f=d.marca)==null?void 0:f.toLowerCase().includes(r.toLowerCase()))}).map(d=>u.jsxs("tr",{className:"hover:bg-slate-50 transition-colors",children:[u.jsx("td",{className:"py-4 px-6 font-mono text-[12px] font-bold text-slate-400",children:d.codigo}),u.jsx("td",{className:"py-4 px-6",children:u.jsxs("div",{className:"font-bold text-[14px]",children:[d.marca," ",u.jsx("span",{className:"font-normal text-slate-500",children:d.modelo})]})}),u.jsx("td",{className:"py-4 px-6 text-[13px]",children:u.jsx("span",{className:"bg-slate-100 px-3 py-1.5 rounded-lg font-medium",children:d.categoria})}),u.jsx("td",{className:"py-4 px-6 text-right font-extrabold text-[15px] text-emerald-600",children:Fe(d.venda)}),u.jsx("td",{className:"py-4 px-6 text-center",children:u.jsx("span",{className:`inline-flex items-center justify-center w-10 h-10 rounded-xl text-[14px] font-bold ${Number(d.qtd)<Number(d.min)?"bg-rose-50 text-rose-600":"bg-slate-50 text-slate-700"}`,children:d.qtd})}),u.jsxs("td",{className:"py-4 px-6 text-center",children:[u.jsx("button",{onClick:()=>{o(d),a(!0)},className:"p-2 rounded-xl text-slate-400 hover:text-[#4A3AFF] hover:bg-indigo-50",children:u.jsx(wh,{size:16})}),u.jsx("button",{onClick:()=>n(d.id).catch(h=>alert(h.message)),className:"p-2 rounded-xl text-slate-400 hover:text-rose-500 hover:bg-rose-50",children:u.jsx(ma,{size:16})})]})]},d.id))})]})})]}),u.jsx(Ch,{open:l,onClose:()=>{a(!1),o(null)},title:i?"Editar Produto":"Novo Produto",width:"max-w-3xl",children:u.jsx(jN,{data:i,onSave:c,onClose:()=>{a(!1),o(null)}})})]})}function UN({data:t,onSave:e,onClose:n}){const[r,s]=R.useState({nome:"",cpf:"",tel:"",nasc:"",prescricao:{medico:"",obs:"",od:{esf:"",cil:"",eixo:"",dnp:"",add:""},oe:{esf:"",cil:"",eixo:"",dnp:"",add:""}}});R.useEffect(()=>{var a,c,d,h;t&&s({...t,prescricao:{medico:((a=t.prescricao)==null?void 0:a.medico)||"",obs:((c=t.prescricao)==null?void 0:c.obs)||"",od:{esf:"",cil:"",eixo:"",dnp:"",add:"",...((d=t.prescricao)==null?void 0:d.od)||{}},oe:{esf:"",cil:"",eixo:"",dnp:"",add:"",...((h=t.prescricao)==null?void 0:h.oe)||{}}}})},[t]);const i=(a,c)=>s(d=>({...d,[a]:c})),o="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3 text-[14px] outline-none focus:border-[#4A3AFF]",l="text-[12px] font-bold text-slate-500 uppercase mb-2 block";return u.jsxs("form",{onSubmit:a=>{a.preventDefault(),e(r)},className:"flex flex-col",children:[u.jsxs("div",{className:"space-y-6",children:[u.jsxs("div",{children:[u.jsxs("h3",{className:"text-[13px] font-bold text-indigo-500 uppercase mb-4 flex items-center gap-2",children:[u.jsx(ga,{size:16})," Dados Pessoais"]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[u.jsxs("div",{children:[u.jsx("label",{className:l,children:"Nome Completo"}),u.jsx("input",{required:!0,value:r.nome,onChange:a=>i("nome",a.target.value),className:o})]}),u.jsxs("div",{children:[u.jsx("label",{className:l,children:"WhatsApp"}),u.jsx("input",{required:!0,value:r.tel,onChange:a=>i("tel",a.target.value),className:o,placeholder:"(00) 00000-0000"})]}),u.jsxs("div",{children:[u.jsx("label",{className:l,children:"CPF"}),u.jsx("input",{value:r.cpf,onChange:a=>i("cpf",a.target.value),className:o})]}),u.jsxs("div",{children:[u.jsx("label",{className:l,children:"Nascimento"}),u.jsx("input",{type:"date",value:r.nasc,onChange:a=>i("nasc",a.target.value),className:o})]})]})]}),u.jsxs("div",{className:"border-t pt-6",children:[u.jsxs("h3",{className:"text-[13px] font-bold text-emerald-500 uppercase mb-4 flex items-center gap-2",children:[u.jsx(xN,{size:16})," Receituário Ótico"]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5 mb-5",children:[u.jsxs("div",{children:[u.jsx("label",{className:l,children:"Médico Oftalmologista"}),u.jsx("input",{value:r.prescricao.medico,onChange:a=>s(c=>({...c,prescricao:{...c.prescricao,medico:a.target.value}})),className:o})]}),u.jsxs("div",{children:[u.jsx("label",{className:l,children:"Observações"}),u.jsx("input",{value:r.prescricao.obs,onChange:a=>s(c=>({...c,prescricao:{...c.prescricao,obs:a.target.value}})),className:o})]})]})]})]}),u.jsxs("div",{className:"mt-8 border-t flex justify-end gap-3 pt-4",children:[u.jsx("button",{type:"button",onClick:n,className:"px-6 py-3 rounded-xl font-bold bg-slate-100 text-slate-600",children:"Cancelar"}),u.jsx("button",{type:"submit",className:"px-8 py-3 rounded-xl font-bold bg-[#4A3AFF] text-white",children:"Salvar Ficha"})]})]})}function zN(){const{clientes:t,salvarCliente:e,excluirCliente:n}=Lt(),[r,s]=si.useState(null),[i,o]=si.useState(!1),l=async a=>{await e(a,r==null?void 0:r.id),o(!1),s(null)};return u.jsxs("div",{className:"flex flex-col h-full",children:[u.jsxs("div",{className:"mb-8 flex justify-between items-center",children:[u.jsxs("div",{children:[u.jsx("h1",{className:"text-2xl sm:text-3xl font-bold mb-2",children:"Clientes & Receitas"}),u.jsx("p",{className:"text-slate-500",children:"Gestão de contatos e prontuários óticos."})]}),u.jsxs("button",{onClick:()=>{s(null),o(!0)},className:"bg-[#4A3AFF] text-white px-6 py-3 rounded-xl font-semibold flex items-center shadow-md",children:[u.jsx(pa,{size:20,className:"mr-2"})," Novo Cliente"]})]}),u.jsx("div",{className:"bg-white rounded-3xl border border-slate-100 shadow-sm flex-1 flex flex-col overflow-hidden min-h-[400px]",children:u.jsx("div",{className:"flex-1 overflow-auto custom-scrollbar p-2",children:u.jsxs("table",{className:"w-full text-left min-w-[700px]",children:[u.jsx("thead",{children:u.jsxs("tr",{className:"border-b border-slate-100 text-[11px] text-slate-400 uppercase tracking-wider font-semibold sticky top-0 bg-white",children:[u.jsx("th",{className:"py-4 px-6",children:"Cliente / CPF"}),u.jsx("th",{className:"py-4 px-6",children:"Contato"}),u.jsx("th",{className:"py-4 px-6",children:"Médico Responsável"}),u.jsx("th",{className:"py-4 px-6 text-center w-24",children:"Ações"})]})}),u.jsx("tbody",{className:"divide-y divide-slate-50",children:t.map(a=>{var c;return u.jsxs("tr",{className:"hover:bg-slate-50 transition-colors",children:[u.jsxs("td",{className:"py-4 px-6",children:[u.jsx("div",{className:"font-bold text-[14px]",children:a.nome}),u.jsx("div",{className:"text-[12px] text-slate-400 mt-0.5",children:a.cpf||"Sem CPF"})]}),u.jsx("td",{className:"py-4 px-6 text-[14px] font-medium text-slate-600",children:a.tel}),u.jsx("td",{className:"py-4 px-6",children:u.jsx("div",{className:"text-[14px] font-medium text-slate-700",children:((c=a.prescricao)==null?void 0:c.medico)||"Não informado"})}),u.jsx("td",{className:"py-4 px-6 text-center",children:u.jsxs("div",{className:"flex justify-center gap-2",children:[u.jsx("button",{onClick:()=>{s(a),o(!0)},className:"p-2 rounded-xl text-slate-400 hover:text-[#4A3AFF] hover:bg-indigo-50",children:u.jsx(wh,{size:16})}),u.jsx("button",{onClick:()=>n(a.id).catch(d=>alert(d.message)),className:"p-2 rounded-xl text-slate-400 hover:text-rose-500 hover:bg-rose-50",children:u.jsx(ma,{size:16})})]})})]},a.id)})})]})})}),u.jsx(Ch,{open:i,onClose:()=>{o(!1),s(null)},title:r?"Editar Cliente":"Novo Cliente",width:"max-w-4xl",children:u.jsx(UN,{data:r,onSave:l,onClose:()=>{o(!1),s(null)}})})]})}function VN(){const{orcamentos:t,clientes:e,setActiveTab:n}=Lt();return u.jsxs("div",{className:"flex flex-col h-full",children:[u.jsxs("div",{className:"mb-8 flex justify-between items-center",children:[u.jsxs("div",{children:[u.jsx("h1",{className:"text-2xl sm:text-3xl font-bold mb-2",children:"Orçamentos"}),u.jsx("p",{className:"text-slate-500",children:"Negociações salvas via PDV."})]}),u.jsxs("button",{onClick:()=>n("vendas"),className:"bg-[#4A3AFF] text-white px-6 py-3 rounded-xl font-semibold flex items-center",children:[u.jsx(pa,{size:20,className:"mr-2"})," Novo via PDV"]})]}),u.jsx("div",{className:"bg-white rounded-3xl border border-slate-100 shadow-sm flex-1 flex flex-col overflow-hidden min-h-[400px]",children:u.jsx("div",{className:"flex-1 overflow-auto custom-scrollbar p-2",children:u.jsxs("table",{className:"w-full text-left min-w-[700px]",children:[u.jsx("thead",{children:u.jsxs("tr",{className:"border-b border-slate-100 text-[11px] text-slate-400 uppercase font-semibold sticky top-0 bg-white",children:[u.jsx("th",{className:"py-4 px-6",children:"Data / Cliente"}),u.jsx("th",{className:"py-4 px-6",children:"Itens"}),u.jsx("th",{className:"py-4 px-6 text-right",children:"Total"}),u.jsx("th",{className:"py-4 px-6 text-center w-24",children:"Ações"})]})}),u.jsx("tbody",{className:"divide-y divide-slate-50",children:t.map(r=>{var s,i;return u.jsxs("tr",{className:"hover:bg-slate-50 transition-colors group",children:[u.jsxs("td",{className:"py-4 px-6",children:[u.jsx("div",{className:"font-bold text-[14px]",children:((s=e.find(o=>o.id===r.cliId))==null?void 0:s.nome)||"Desconhecido"}),u.jsx("div",{className:"text-[12px] text-slate-400 mt-0.5",children:new Date(r.data).toLocaleDateString("pt-BR")})]}),u.jsxs("td",{className:"py-4 px-6 text-[14px] font-medium text-slate-600",children:[((i=r.itens)==null?void 0:i.length)||0," produto(s)"]}),u.jsx("td",{className:"py-4 px-6 text-right font-extrabold text-[15px] text-[#4A3AFF]",children:Fe(r.total)}),u.jsx("td",{className:"py-4 px-6 text-center",children:u.jsx("button",{className:"p-2 rounded-xl text-slate-400 hover:text-rose-500 hover:bg-rose-50",children:u.jsx(ma,{size:16})})})]},r.id)})})]})})})]})}function WN(){const{vendas:t,clientes:e}=Lt();return u.jsxs("div",{className:"flex flex-col h-full",children:[u.jsxs("div",{className:"mb-8",children:[u.jsx("h1",{className:"text-2xl sm:text-3xl font-bold mb-2",children:"Financeiro (DRE)"}),u.jsx("p",{className:"text-slate-500",children:"Análise de lucratividade real e CMV."})]}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-6",children:[u.jsx(rr,{title:"Faturamento Bruto",value:Fe(t.reduce((n,r)=>n+(r.total||0),0)),icon:Eh}),u.jsx(rr,{title:"CMV (Custo dos Produtos)",value:Fe(t.reduce((n,r)=>n+(r.custoBase||0),0)),icon:kN,color:"text-rose-500"}),u.jsx(rr,{title:"Lucro Bruto",value:Fe(t.reduce((n,r)=>n+(r.total||0),0)-t.reduce((n,r)=>n+(r.custoBase||0),0)),icon:hy,bg:"bg-[#4A3AFF]/10",color:"text-[#4A3AFF]",border:"border-[#4A3AFF]/20"})]}),u.jsxs("div",{className:"bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden p-2 mt-8 flex-1 flex flex-col min-h-[300px]",children:[u.jsx("div",{className:"p-5 flex-shrink-0",children:u.jsx("h3",{className:"font-bold text-[16px]",children:"Últimas Vendas"})}),u.jsx("div",{className:"overflow-x-auto overflow-y-auto flex-1 custom-scrollbar",children:u.jsxs("table",{className:"w-full text-left min-w-[800px]",children:[u.jsx("thead",{children:u.jsxs("tr",{className:"border-b border-slate-100 text-[11px] text-slate-400 uppercase font-semibold sticky top-0 bg-white",children:[u.jsx("th",{className:"py-4 px-6",children:"Data"}),u.jsx("th",{className:"py-4 px-6",children:"Cliente"}),u.jsx("th",{className:"py-4 px-6",children:"Pagamento"}),u.jsx("th",{className:"py-4 px-6 text-right",children:"Total"})]})}),u.jsx("tbody",{className:"divide-y divide-slate-50",children:t.slice().sort((n,r)=>new Date(r.data).getTime()-new Date(n.data).getTime()).slice(0,10).map(n=>{var r;return u.jsxs("tr",{className:"hover:bg-slate-50 transition-colors",children:[u.jsx("td",{className:"py-4 px-6 text-[14px] text-slate-700",children:new Date(n.data).toLocaleDateString("pt-BR")}),u.jsx("td",{className:"py-4 px-6 text-[14px] font-bold",children:((r=e.find(s=>s.id===n.cliId))==null?void 0:r.nome)||"Balcão"}),u.jsx("td",{className:"py-4 px-6 text-[14px]",children:u.jsx("span",{className:"bg-slate-100 px-3 py-1.5 rounded-lg font-medium",children:n.pag})}),u.jsx("td",{className:"py-4 px-6 text-right font-extrabold text-[15px] text-[#4A3AFF]",children:Fe(n.total)})]},n.id)})})]})})]})]})}function BN({config:t,initialData:e,onSave:n,onClose:r}){const[s,i]=R.useState(e||t.defaultData),o=(c,d)=>i(h=>({...h,[c]:d})),l="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3.5 text-[15px] outline-none focus:border-[#4A3AFF] transition-all text-slate-900 dark:text-white",a="text-[12px] font-bold text-slate-500 uppercase tracking-wider mb-2 block";return u.jsxs("form",{onSubmit:c=>{c.preventDefault(),n(s)},children:[u.jsx("div",{className:"space-y-4 mb-6",children:t.fields.map(c=>u.jsxs("div",{children:[u.jsxs("label",{className:a,children:[c.label," ",c.required&&"*"]}),c.type==="select"?u.jsxs("select",{required:c.required,value:s[c.name]||"",onChange:d=>o(c.name,d.target.value),className:l,children:[u.jsx("option",{value:"",children:"Selecione..."}),c.options.map(d=>u.jsx("option",{value:d.val,children:d.label},d.val))]}):u.jsx("input",{type:c.type,step:c.step,required:c.required,value:s[c.name]||"",onChange:d=>o(c.name,d.target.value),className:l})]},c.name))}),u.jsxs("div",{className:"flex justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-700",children:[u.jsx("button",{type:"button",onClick:r,className:"px-6 py-3 rounded-xl bg-slate-100 text-slate-700 font-bold hover:bg-slate-200 transition-colors",children:"Cancelar"}),u.jsx("button",{type:"submit",className:"px-6 py-3 rounded-xl bg-[#4A3AFF] text-white font-bold hover:bg-[#3d2ee6] shadow-md transition-all",children:"Salvar"})]})]})}function $N({activeTab:t}){const{fornecedores:e,contas:n,categorias:r,usuarios:s,salvarCadastro:i,excluirCadastro:o}=Lt(),[l,a]=si.useState(null),[c,d]=si.useState(!1),f=(()=>{switch(t){case"fornecedores":return e;case"contas":return n;case"categorias":return r;case"usuarios":return s;default:return[]}})(),_={fornecedores:{defaultData:{nome:"",cnpj:"",contato:""},fields:[{name:"nome",label:"Nome",type:"text",required:!0},{name:"cnpj",label:"CNPJ",type:"text"},{name:"contato",label:"Contato",type:"text"}]},contas:{defaultData:{descricao:"",tipo:"pagar",valor:"",vencimento:""},fields:[{name:"descricao",label:"Descrição",type:"text",required:!0},{name:"tipo",label:"Tipo",type:"select",required:!0,options:[{val:"pagar",label:"A pagar"},{val:"receber",label:"A receber"}]},{name:"valor",label:"Valor",type:"number",step:"0.01",required:!0},{name:"vencimento",label:"Vencimento",type:"date"}]},categorias:{defaultData:{nome:""},fields:[{name:"nome",label:"Nome",type:"text",required:!0}]},usuarios:{defaultData:{nome:"",email:"",perfil:"vendedor"},fields:[{name:"nome",label:"Nome",type:"text",required:!0},{name:"email",label:"E-mail",type:"email",required:!0},{name:"perfil",label:"Perfil",type:"select",required:!0,options:[{val:"vendedor",label:"Vendedor"},{val:"admin",label:"Administrador"}]}]}}[t],y=t,b=async g=>{await i(y,g,l==null?void 0:l.id),d(!1),a(null)};return u.jsxs("div",{className:"flex flex-col h-full",children:[u.jsxs("div",{className:"mb-8 flex justify-between items-center",children:[u.jsxs("div",{children:[u.jsx("h1",{className:"text-2xl sm:text-3xl font-bold mb-2 capitalize",children:t}),u.jsx("p",{className:"text-slate-500",children:"Gestão completa liberada."})]}),u.jsxs("button",{onClick:()=>{a(null),d(!0)},className:"bg-[#4A3AFF] text-white px-6 py-3 rounded-xl font-semibold flex items-center",children:[u.jsx(pa,{size:20,className:"mr-2"})," Adicionar"]})]}),u.jsx("div",{className:"bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden p-2 flex-1 flex flex-col min-h-[400px]",children:u.jsx("div",{className:"overflow-x-auto overflow-y-auto flex-1 custom-scrollbar",children:u.jsxs("table",{className:"w-full text-left min-w-[600px]",children:[u.jsx("thead",{children:u.jsxs("tr",{className:"border-b border-slate-100 text-[11px] text-slate-400 uppercase font-semibold sticky top-0 bg-white",children:[u.jsx("th",{className:"py-4 px-6",children:"Registro Principal"}),u.jsx("th",{className:"py-4 px-6",children:"Detalhes"}),u.jsx("th",{className:"py-4 px-6 text-center",children:"Ações"})]})}),u.jsx("tbody",{className:"divide-y divide-slate-50",children:f==null?void 0:f.map(g=>u.jsxs("tr",{className:"hover:bg-slate-50 transition-colors",children:[u.jsxs("td",{className:"py-4 px-6",children:[u.jsx("div",{className:"font-bold text-[14px]",children:g.nome||g.descricao}),u.jsx("div",{className:"text-[12px] text-slate-400 mt-0.5",children:g.cnpj||g.email||(g.vencimento?`Venc: ${new Date(g.vencimento).toLocaleDateString("pt-BR")}`:"")})]}),u.jsx("td",{className:"py-4 px-6 text-[14px] font-medium text-slate-600",children:g.valor?u.jsx("span",{className:`font-extrabold ${g.tipo==="pagar"?"text-rose-500":"text-emerald-500"}`,children:Fe(g.valor)}):g.contato||g.perfil||g.descricao||"-"}),u.jsx("td",{className:"py-4 px-6 text-center",children:u.jsxs("div",{className:"flex justify-center gap-2",children:[u.jsx("button",{onClick:()=>{a(g),d(!0)},className:"p-2 rounded-xl text-slate-400 hover:text-[#4A3AFF] hover:bg-indigo-50",children:u.jsx(wh,{size:16})}),u.jsx("button",{onClick:()=>o(y,g.id).catch(p=>alert(p.message)),className:"p-2 rounded-xl text-slate-400 hover:text-rose-500 hover:bg-rose-50",children:u.jsx(ma,{size:16})})]})})]},g.id))})]})})}),u.jsx(Ch,{open:c,onClose:()=>{d(!1),a(null)},title:l?`Editar ${t}`:`Novo ${t}`,children:u.jsx(BN,{config:_,initialData:l,onSave:b,onClose:()=>{d(!1),a(null)}})})]})}function HN(){const{activeTab:t,user:e,loadingAuth:n,setActiveTab:r,carrinho:s,userRole:i,dadosEmpresa:o}=Lt(),[l,a]=R.useState(!1),[c,d]=R.useState(!1);R.useEffect(()=>{const f=localStorage.getItem("otica_theme")==="dark";d(f),document.documentElement.classList.toggle("dark",f)},[]);const h=()=>{const f=!c;d(f),localStorage.setItem("otica_theme",f?"dark":"light"),document.documentElement.classList.toggle("dark",f)};return n?u.jsx("div",{className:"flex h-screen w-full items-center justify-center bg-slate-50 dark:bg-slate-900",children:u.jsx("p",{className:"text-slate-500 font-medium",children:"Iniciando VISTTA ERP..."})}):e?u.jsxs("div",{className:"flex h-screen w-full bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white overflow-hidden",children:[u.jsx(AN,{}),u.jsxs("div",{className:"flex-1 flex flex-col min-w-0 overflow-hidden relative pb-[70px] md:pb-0",children:[u.jsx("button",{onClick:h,className:"absolute top-4 right-4 z-40 w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 hover:text-[#4A3AFF] shadow-sm",title:"Alternar tema",children:c?u.jsx(TN,{size:18}):u.jsx(SN,{size:18})}),u.jsxs("main",{className:"flex-1 overflow-y-auto p-4 pt-16 sm:pt-10 sm:p-10 lg:p-12 relative z-10 custom-scrollbar h-full",children:[t==="dashboard"&&u.jsx(DN,{}),t==="vendas"&&u.jsx(MN,{}),t==="caixa"&&u.jsx(LN,{}),t==="estoque"&&u.jsx(FN,{}),t==="clientes"&&u.jsx(zN,{}),t==="orcamentos"&&u.jsx(VN,{}),t==="financeiro"&&u.jsx(WN,{}),["fornecedores","contas","categorias","usuarios"].includes(t)&&u.jsx($N,{activeTab:t})]}),u.jsxs("div",{className:"md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-800 border-t border-slate-100 dark:border-slate-700 flex items-center h-[70px] z-[55]",children:[u.jsx(Ds,{icon:py,label:"Início",active:t==="dashboard",onClick:()=>r("dashboard")}),u.jsx(Ds,{icon:gy,label:"PDV",active:t==="vendas",onClick:()=>r("vendas"),badge:s.length}),u.jsx(Ds,{icon:xh,label:"Estoque",active:t==="estoque",onClick:()=>r("estoque")}),u.jsx(Ds,{icon:ga,label:"Clientes",active:t==="clientes",onClick:()=>r("clientes")}),u.jsx(Ds,{icon:CN,label:"Menu",active:l,onClick:()=>a(!l)})]}),l&&u.jsx("div",{className:"md:hidden fixed inset-0 z-[70] bg-slate-900/60",onClick:()=>a(!1),children:u.jsxs("div",{className:"absolute right-0 top-0 h-full w-[80%] max-w-[300px] bg-white dark:bg-slate-800 shadow-2xl p-5",onClick:f=>f.stopPropagation(),children:[u.jsxs("div",{className:"flex items-center justify-between mb-8",children:[u.jsx("span",{className:"font-bold truncate text-slate-900 dark:text-white",children:(o==null?void 0:o.nome)||"Minha Ótica"}),u.jsx("button",{onClick:()=>a(!1),className:"text-slate-400",children:"Fechar"})]}),u.jsx("div",{className:"space-y-2",children:[["caixa","Caixa Diário"],["orcamentos","Orçamentos"],["categorias","Categorias"],...i==="admin"?[["financeiro","Financeiro"],["contas","Contas"],["fornecedores","Fornecedores"],["usuarios","Usuários"]]:[]].map(([f,v])=>u.jsx("button",{onClick:()=>{r(f),a(!1)},className:"w-full text-left px-4 py-3 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-slate-700",children:v},f))})]})})]})]}):u.jsx(ON,{})}function Ds({icon:t,label:e,active:n,onClick:r,badge:s=0}){return u.jsxs("button",{onClick:r,className:`flex-1 h-full flex flex-col items-center justify-center gap-1 text-[10px] relative ${n?"text-[#4A3AFF] font-bold":"text-slate-400"}`,children:[u.jsx(t,{size:22}),s>0&&u.jsx("span",{className:"absolute top-1 right-3 bg-rose-500 text-white text-[10px] rounded-full px-1.5",children:s}),u.jsx("span",{children:e})]})}function qN(){return u.jsx(fN,{children:u.jsx(HN,{})})}cc.createRoot(document.getElementById("root")).render(u.jsx(si.StrictMode,{children:u.jsx(qN,{})}));
