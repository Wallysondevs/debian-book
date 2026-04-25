var Ed=e=>{throw TypeError(e)};var fi=(e,t,o)=>t.has(e)||Ed("Cannot "+o);var P=(e,t,o)=>(fi(e,t,"read from private field"),o?o.call(e):t.get(e)),Y=(e,t,o)=>t.has(e)?Ed("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),j=(e,t,o,a)=>(fi(e,t,"write to private field"),a?a.call(e,o):t.set(e,o),o),ke=(e,t,o)=>(fi(e,t,"access private method"),o);var wn=(e,t,o,a)=>({set _(r){j(e,t,r,o)},get _(){return P(e,t,a)}});function Lg(e,t){for(var o=0;o<t.length;o++){const a=t[o];if(typeof a!="string"&&!Array.isArray(a)){for(const r in a)if(r!=="default"&&!(r in e)){const n=Object.getOwnPropertyDescriptor(a,r);n&&Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:()=>a[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();function Tp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Dp={exports:{}},Ms={},Np={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dn=Symbol.for("react.element"),zg=Symbol.for("react.portal"),_g=Symbol.for("react.fragment"),jg=Symbol.for("react.strict_mode"),Ug=Symbol.for("react.profiler"),Fg=Symbol.for("react.provider"),Bg=Symbol.for("react.context"),Hg=Symbol.for("react.forward_ref"),$g=Symbol.for("react.suspense"),Vg=Symbol.for("react.memo"),Gg=Symbol.for("react.lazy"),Cd=Symbol.iterator;function Wg(e){return e===null||typeof e!="object"?null:(e=Cd&&e[Cd]||e["@@iterator"],typeof e=="function"?e:null)}var Rp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mp=Object.assign,Ip={};function nr(e,t,o){this.props=e,this.context=t,this.refs=Ip,this.updater=o||Rp}nr.prototype.isReactComponent={};nr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};nr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Lp(){}Lp.prototype=nr.prototype;function nu(e,t,o){this.props=e,this.context=t,this.refs=Ip,this.updater=o||Rp}var su=nu.prototype=new Lp;su.constructor=nu;Mp(su,nr.prototype);su.isPureReactComponent=!0;var Pd=Array.isArray,zp=Object.prototype.hasOwnProperty,iu={current:null},_p={key:!0,ref:!0,__self:!0,__source:!0};function jp(e,t,o){var a,r={},n=null,s=null;if(t!=null)for(a in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(n=""+t.key),t)zp.call(t,a)&&!_p.hasOwnProperty(a)&&(r[a]=t[a]);var i=arguments.length-2;if(i===1)r.children=o;else if(1<i){for(var l=Array(i),u=0;u<i;u++)l[u]=arguments[u+2];r.children=l}if(e&&e.defaultProps)for(a in i=e.defaultProps,i)r[a]===void 0&&(r[a]=i[a]);return{$$typeof:dn,type:e,key:n,ref:s,props:r,_owner:iu.current}}function Qg(e,t){return{$$typeof:dn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function lu(e){return typeof e=="object"&&e!==null&&e.$$typeof===dn}function Kg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(o){return t[o]})}var qd=/\/+/g;function hi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Kg(""+e.key):t.toString(36)}function $n(e,t,o,a,r){var n=typeof e;(n==="undefined"||n==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(n){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case dn:case zg:s=!0}}if(s)return s=e,r=r(s),e=a===""?"."+hi(s,0):a,Pd(r)?(o="",e!=null&&(o=e.replace(qd,"$&/")+"/"),$n(r,t,o,"",function(u){return u})):r!=null&&(lu(r)&&(r=Qg(r,o+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(qd,"$&/")+"/")+e)),t.push(r)),1;if(s=0,a=a===""?".":a+":",Pd(e))for(var i=0;i<e.length;i++){n=e[i];var l=a+hi(n,i);s+=$n(n,t,o,l,r)}else if(l=Wg(e),typeof l=="function")for(e=l.call(e),i=0;!(n=e.next()).done;)n=n.value,l=a+hi(n,i++),s+=$n(n,t,o,l,r);else if(n==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Sn(e,t,o){if(e==null)return e;var a=[],r=0;return $n(e,a,"","",function(n){return t.call(o,n,r++)}),a}function Xg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(o){(e._status===0||e._status===-1)&&(e._status=1,e._result=o)},function(o){(e._status===0||e._status===-1)&&(e._status=2,e._result=o)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ze={current:null},Vn={transition:null},Yg={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:Vn,ReactCurrentOwner:iu};function Up(){throw Error("act(...) is not supported in production builds of React.")}Q.Children={map:Sn,forEach:function(e,t,o){Sn(e,function(){t.apply(this,arguments)},o)},count:function(e){var t=0;return Sn(e,function(){t++}),t},toArray:function(e){return Sn(e,function(t){return t})||[]},only:function(e){if(!lu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Q.Component=nr;Q.Fragment=_g;Q.Profiler=Ug;Q.PureComponent=nu;Q.StrictMode=jg;Q.Suspense=$g;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yg;Q.act=Up;Q.cloneElement=function(e,t,o){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=Mp({},e.props),r=e.key,n=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(n=t.ref,s=iu.current),t.key!==void 0&&(r=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(l in t)zp.call(t,l)&&!_p.hasOwnProperty(l)&&(a[l]=t[l]===void 0&&i!==void 0?i[l]:t[l])}var l=arguments.length-2;if(l===1)a.children=o;else if(1<l){i=Array(l);for(var u=0;u<l;u++)i[u]=arguments[u+2];a.children=i}return{$$typeof:dn,type:e.type,key:r,ref:n,props:a,_owner:s}};Q.createContext=function(e){return e={$$typeof:Bg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Fg,_context:e},e.Consumer=e};Q.createElement=jp;Q.createFactory=function(e){var t=jp.bind(null,e);return t.type=e,t};Q.createRef=function(){return{current:null}};Q.forwardRef=function(e){return{$$typeof:Hg,render:e}};Q.isValidElement=lu;Q.lazy=function(e){return{$$typeof:Gg,_payload:{_status:-1,_result:e},_init:Xg}};Q.memo=function(e,t){return{$$typeof:Vg,type:e,compare:t===void 0?null:t}};Q.startTransition=function(e){var t=Vn.transition;Vn.transition={};try{e()}finally{Vn.transition=t}};Q.unstable_act=Up;Q.useCallback=function(e,t){return ze.current.useCallback(e,t)};Q.useContext=function(e){return ze.current.useContext(e)};Q.useDebugValue=function(){};Q.useDeferredValue=function(e){return ze.current.useDeferredValue(e)};Q.useEffect=function(e,t){return ze.current.useEffect(e,t)};Q.useId=function(){return ze.current.useId()};Q.useImperativeHandle=function(e,t,o){return ze.current.useImperativeHandle(e,t,o)};Q.useInsertionEffect=function(e,t){return ze.current.useInsertionEffect(e,t)};Q.useLayoutEffect=function(e,t){return ze.current.useLayoutEffect(e,t)};Q.useMemo=function(e,t){return ze.current.useMemo(e,t)};Q.useReducer=function(e,t,o){return ze.current.useReducer(e,t,o)};Q.useRef=function(e){return ze.current.useRef(e)};Q.useState=function(e){return ze.current.useState(e)};Q.useSyncExternalStore=function(e,t,o){return ze.current.useSyncExternalStore(e,t,o)};Q.useTransition=function(){return ze.current.useTransition()};Q.version="18.3.1";Np.exports=Q;var y=Np.exports;const D=Tp(y),Fp=Lg({__proto__:null,default:D},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zg=y,Jg=Symbol.for("react.element"),ev=Symbol.for("react.fragment"),tv=Object.prototype.hasOwnProperty,ov=Zg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,av={key:!0,ref:!0,__self:!0,__source:!0};function Bp(e,t,o){var a,r={},n=null,s=null;o!==void 0&&(n=""+o),t.key!==void 0&&(n=""+t.key),t.ref!==void 0&&(s=t.ref);for(a in t)tv.call(t,a)&&!av.hasOwnProperty(a)&&(r[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps,t)r[a]===void 0&&(r[a]=t[a]);return{$$typeof:Jg,type:e,key:n,ref:s,props:r,_owner:ov.current}}Ms.Fragment=ev;Ms.jsx=Bp;Ms.jsxs=Bp;Dp.exports=Ms;var b=Dp.exports,Hp={exports:{}},Je={},$p={exports:{}},Vp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(q,O){var I=q.length;q.push(O);e:for(;0<I;){var $=I-1>>>1,_=q[$];if(0<r(_,O))q[$]=O,q[I]=_,I=$;else break e}}function o(q){return q.length===0?null:q[0]}function a(q){if(q.length===0)return null;var O=q[0],I=q.pop();if(I!==O){q[0]=I;e:for(var $=0,_=q.length,W=_>>>1;$<W;){var X=2*($+1)-1,fe=q[X],qe=X+1,J=q[qe];if(0>r(fe,I))qe<_&&0>r(J,fe)?(q[$]=J,q[qe]=I,$=qe):(q[$]=fe,q[X]=I,$=X);else if(qe<_&&0>r(J,I))q[$]=J,q[qe]=I,$=qe;else break e}}return O}function r(q,O){var I=q.sortIndex-O.sortIndex;return I!==0?I:q.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var n=performance;e.unstable_now=function(){return n.now()}}else{var s=Date,i=s.now();e.unstable_now=function(){return s.now()-i}}var l=[],u=[],d=1,p=null,h=3,c=!1,S=!1,v=!1,x=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(q){for(var O=o(u);O!==null;){if(O.callback===null)a(u);else if(O.startTime<=q)a(u),O.sortIndex=O.expirationTime,t(l,O);else break;O=o(u)}}function w(q){if(v=!1,g(q),!S)if(o(l)!==null)S=!0,F(k);else{var O=o(u);O!==null&&H(w,O.startTime-q)}}function k(q,O){S=!1,v&&(v=!1,f(A),A=-1),c=!0;var I=h;try{for(g(O),p=o(l);p!==null&&(!(p.expirationTime>O)||q&&!U());){var $=p.callback;if(typeof $=="function"){p.callback=null,h=p.priorityLevel;var _=$(p.expirationTime<=O);O=e.unstable_now(),typeof _=="function"?p.callback=_:p===o(l)&&a(l),g(O)}else a(l);p=o(l)}if(p!==null)var W=!0;else{var X=o(u);X!==null&&H(w,X.startTime-O),W=!1}return W}finally{p=null,h=I,c=!1}}var E=!1,C=null,A=-1,M=5,N=-1;function U(){return!(e.unstable_now()-N<M)}function z(){if(C!==null){var q=e.unstable_now();N=q;var O=!0;try{O=C(!0,q)}finally{O?G():(E=!1,C=null)}}else E=!1}var G;if(typeof m=="function")G=function(){m(z)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,K=R.port2;R.port1.onmessage=z,G=function(){K.postMessage(null)}}else G=function(){x(z,0)};function F(q){C=q,E||(E=!0,G())}function H(q,O){A=x(function(){q(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(q){q.callback=null},e.unstable_continueExecution=function(){S||c||(S=!0,F(k))},e.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<q?Math.floor(1e3/q):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return o(l)},e.unstable_next=function(q){switch(h){case 1:case 2:case 3:var O=3;break;default:O=h}var I=h;h=O;try{return q()}finally{h=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(q,O){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var I=h;h=q;try{return O()}finally{h=I}},e.unstable_scheduleCallback=function(q,O,I){var $=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?$+I:$):I=$,q){case 1:var _=-1;break;case 2:_=250;break;case 5:_=1073741823;break;case 4:_=1e4;break;default:_=5e3}return _=I+_,q={id:d++,callback:O,priorityLevel:q,startTime:I,expirationTime:_,sortIndex:-1},I>$?(q.sortIndex=I,t(u,q),o(l)===null&&q===o(u)&&(v?(f(A),A=-1):v=!0,H(w,I-$))):(q.sortIndex=_,t(l,q),S||c||(S=!0,F(k))),q},e.unstable_shouldYield=U,e.unstable_wrapCallback=function(q){var O=h;return function(){var I=h;h=O;try{return q.apply(this,arguments)}finally{h=I}}}})(Vp);$p.exports=Vp;var rv=$p.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nv=y,Ze=rv;function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=1;o<arguments.length;o++)t+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gp=new Set,_r={};function da(e,t){Xa(e,t),Xa(e+"Capture",t)}function Xa(e,t){for(_r[e]=t,e=0;e<t.length;e++)Gp.add(t[e])}var $t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ki=Object.prototype.hasOwnProperty,sv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ad={},Od={};function iv(e){return Ki.call(Od,e)?!0:Ki.call(Ad,e)?!1:sv.test(e)?Od[e]=!0:(Ad[e]=!0,!1)}function lv(e,t,o,a){if(o!==null&&o.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:o!==null?!o.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function uv(e,t,o,a){if(t===null||typeof t>"u"||lv(e,t,o,a))return!0;if(a)return!1;if(o!==null)switch(o.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function _e(e,t,o,a,r,n,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=r,this.mustUseProperty=o,this.propertyName=e,this.type=t,this.sanitizeURL=n,this.removeEmptyString=s}var Pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Pe[e]=new _e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Pe[t]=new _e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Pe[e]=new _e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Pe[e]=new _e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Pe[e]=new _e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Pe[e]=new _e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Pe[e]=new _e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Pe[e]=new _e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Pe[e]=new _e(e,5,!1,e.toLowerCase(),null,!1,!1)});var uu=/[\-:]([a-z])/g;function du(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(uu,du);Pe[t]=new _e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(uu,du);Pe[t]=new _e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(uu,du);Pe[t]=new _e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Pe[e]=new _e(e,1,!1,e.toLowerCase(),null,!1,!1)});Pe.xlinkHref=new _e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Pe[e]=new _e(e,1,!1,e.toLowerCase(),null,!0,!0)});function cu(e,t,o,a){var r=Pe.hasOwnProperty(t)?Pe[t]:null;(r!==null?r.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(uv(t,o,r,a)&&(o=null),a||r===null?iv(t)&&(o===null?e.removeAttribute(t):e.setAttribute(t,""+o)):r.mustUseProperty?e[r.propertyName]=o===null?r.type===3?!1:"":o:(t=r.attributeName,a=r.attributeNamespace,o===null?e.removeAttribute(t):(r=r.type,o=r===3||r===4&&o===!0?"":""+o,a?e.setAttributeNS(a,t,o):e.setAttribute(t,o))))}var Xt=nv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,kn=Symbol.for("react.element"),wa=Symbol.for("react.portal"),Sa=Symbol.for("react.fragment"),pu=Symbol.for("react.strict_mode"),Xi=Symbol.for("react.profiler"),Wp=Symbol.for("react.provider"),Qp=Symbol.for("react.context"),mu=Symbol.for("react.forward_ref"),Yi=Symbol.for("react.suspense"),Zi=Symbol.for("react.suspense_list"),fu=Symbol.for("react.memo"),lo=Symbol.for("react.lazy"),Kp=Symbol.for("react.offscreen"),Td=Symbol.iterator;function fr(e){return e===null||typeof e!="object"?null:(e=Td&&e[Td]||e["@@iterator"],typeof e=="function"?e:null)}var de=Object.assign,gi;function Er(e){if(gi===void 0)try{throw Error()}catch(o){var t=o.stack.trim().match(/\n( *(at )?)/);gi=t&&t[1]||""}return`
`+gi+e}var vi=!1;function yi(e,t){if(!e||vi)return"";vi=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var a=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){a=u}e.call(t.prototype)}else{try{throw Error()}catch(u){a=u}e()}}catch(u){if(u&&a&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),n=a.stack.split(`
`),s=r.length-1,i=n.length-1;1<=s&&0<=i&&r[s]!==n[i];)i--;for(;1<=s&&0<=i;s--,i--)if(r[s]!==n[i]){if(s!==1||i!==1)do if(s--,i--,0>i||r[s]!==n[i]){var l=`
`+r[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=i);break}}}finally{vi=!1,Error.prepareStackTrace=o}return(e=e?e.displayName||e.name:"")?Er(e):""}function dv(e){switch(e.tag){case 5:return Er(e.type);case 16:return Er("Lazy");case 13:return Er("Suspense");case 19:return Er("SuspenseList");case 0:case 2:case 15:return e=yi(e.type,!1),e;case 11:return e=yi(e.type.render,!1),e;case 1:return e=yi(e.type,!0),e;default:return""}}function Ji(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Sa:return"Fragment";case wa:return"Portal";case Xi:return"Profiler";case pu:return"StrictMode";case Yi:return"Suspense";case Zi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Qp:return(e.displayName||"Context")+".Consumer";case Wp:return(e._context.displayName||"Context")+".Provider";case mu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case fu:return t=e.displayName||null,t!==null?t:Ji(e.type)||"Memo";case lo:t=e._payload,e=e._init;try{return Ji(e(t))}catch{}}return null}function cv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ji(t);case 8:return t===pu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function To(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function pv(e){var t=Xp(e)?"checked":"value",o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var r=o.get,n=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(s){a=""+s,n.call(this,s)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function En(e){e._valueTracker||(e._valueTracker=pv(e))}function Yp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var o=t.getValue(),a="";return e&&(a=Xp(e)?e.checked?"true":"false":e.value),e=a,e!==o?(t.setValue(e),!0):!1}function ns(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function el(e,t){var o=t.checked;return de({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??e._wrapperState.initialChecked})}function Dd(e,t){var o=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;o=To(t.value!=null?t.value:o),e._wrapperState={initialChecked:a,initialValue:o,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Zp(e,t){t=t.checked,t!=null&&cu(e,"checked",t,!1)}function tl(e,t){Zp(e,t);var o=To(t.value),a=t.type;if(o!=null)a==="number"?(o===0&&e.value===""||e.value!=o)&&(e.value=""+o):e.value!==""+o&&(e.value=""+o);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ol(e,t.type,o):t.hasOwnProperty("defaultValue")&&ol(e,t.type,To(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Nd(e,t,o){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,o||t===e.value||(e.value=t),e.defaultValue=t}o=e.name,o!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,o!==""&&(e.name=o)}function ol(e,t,o){(t!=="number"||ns(e.ownerDocument)!==e)&&(o==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+o&&(e.defaultValue=""+o))}var Cr=Array.isArray;function Ra(e,t,o,a){if(e=e.options,t){t={};for(var r=0;r<o.length;r++)t["$"+o[r]]=!0;for(o=0;o<e.length;o++)r=t.hasOwnProperty("$"+e[o].value),e[o].selected!==r&&(e[o].selected=r),r&&a&&(e[o].defaultSelected=!0)}else{for(o=""+To(o),t=null,r=0;r<e.length;r++){if(e[r].value===o){e[r].selected=!0,a&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function al(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return de({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Rd(e,t){var o=t.value;if(o==null){if(o=t.children,t=t.defaultValue,o!=null){if(t!=null)throw Error(T(92));if(Cr(o)){if(1<o.length)throw Error(T(93));o=o[0]}t=o}t==null&&(t=""),o=t}e._wrapperState={initialValue:To(o)}}function Jp(e,t){var o=To(t.value),a=To(t.defaultValue);o!=null&&(o=""+o,o!==e.value&&(e.value=o),t.defaultValue==null&&e.defaultValue!==o&&(e.defaultValue=o)),a!=null&&(e.defaultValue=""+a)}function Md(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function em(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function rl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?em(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Cn,tm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,o,a,r){MSApp.execUnsafeLocalFunction(function(){return e(t,o,a,r)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Cn=Cn||document.createElement("div"),Cn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Cn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function jr(e,t){if(t){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=t;return}}e.textContent=t}var Ar={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mv=["Webkit","ms","Moz","O"];Object.keys(Ar).forEach(function(e){mv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ar[t]=Ar[e]})});function om(e,t,o){return t==null||typeof t=="boolean"||t===""?"":o||typeof t!="number"||t===0||Ar.hasOwnProperty(e)&&Ar[e]?(""+t).trim():t+"px"}function am(e,t){e=e.style;for(var o in t)if(t.hasOwnProperty(o)){var a=o.indexOf("--")===0,r=om(o,t[o],a);o==="float"&&(o="cssFloat"),a?e.setProperty(o,r):e[o]=r}}var fv=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nl(e,t){if(t){if(fv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function sl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var il=null;function hu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ll=null,Ma=null,Ia=null;function Id(e){if(e=mn(e)){if(typeof ll!="function")throw Error(T(280));var t=e.stateNode;t&&(t=js(t),ll(e.stateNode,e.type,t))}}function rm(e){Ma?Ia?Ia.push(e):Ia=[e]:Ma=e}function nm(){if(Ma){var e=Ma,t=Ia;if(Ia=Ma=null,Id(e),t)for(e=0;e<t.length;e++)Id(t[e])}}function sm(e,t){return e(t)}function im(){}var bi=!1;function lm(e,t,o){if(bi)return e(t,o);bi=!0;try{return sm(e,t,o)}finally{bi=!1,(Ma!==null||Ia!==null)&&(im(),nm())}}function Ur(e,t){var o=e.stateNode;if(o===null)return null;var a=js(o);if(a===null)return null;o=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(T(231,t,typeof o));return o}var ul=!1;if($t)try{var hr={};Object.defineProperty(hr,"passive",{get:function(){ul=!0}}),window.addEventListener("test",hr,hr),window.removeEventListener("test",hr,hr)}catch{ul=!1}function hv(e,t,o,a,r,n,s,i,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(o,u)}catch(d){this.onError(d)}}var Or=!1,ss=null,is=!1,dl=null,gv={onError:function(e){Or=!0,ss=e}};function vv(e,t,o,a,r,n,s,i,l){Or=!1,ss=null,hv.apply(gv,arguments)}function yv(e,t,o,a,r,n,s,i,l){if(vv.apply(this,arguments),Or){if(Or){var u=ss;Or=!1,ss=null}else throw Error(T(198));is||(is=!0,dl=u)}}function ca(e){var t=e,o=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(o=t.return),e=t.return;while(e)}return t.tag===3?o:null}function um(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ld(e){if(ca(e)!==e)throw Error(T(188))}function bv(e){var t=e.alternate;if(!t){if(t=ca(e),t===null)throw Error(T(188));return t!==e?null:e}for(var o=e,a=t;;){var r=o.return;if(r===null)break;var n=r.alternate;if(n===null){if(a=r.return,a!==null){o=a;continue}break}if(r.child===n.child){for(n=r.child;n;){if(n===o)return Ld(r),e;if(n===a)return Ld(r),t;n=n.sibling}throw Error(T(188))}if(o.return!==a.return)o=r,a=n;else{for(var s=!1,i=r.child;i;){if(i===o){s=!0,o=r,a=n;break}if(i===a){s=!0,a=r,o=n;break}i=i.sibling}if(!s){for(i=n.child;i;){if(i===o){s=!0,o=n,a=r;break}if(i===a){s=!0,a=n,o=r;break}i=i.sibling}if(!s)throw Error(T(189))}}if(o.alternate!==a)throw Error(T(190))}if(o.tag!==3)throw Error(T(188));return o.stateNode.current===o?e:t}function dm(e){return e=bv(e),e!==null?cm(e):null}function cm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=cm(e);if(t!==null)return t;e=e.sibling}return null}var pm=Ze.unstable_scheduleCallback,zd=Ze.unstable_cancelCallback,xv=Ze.unstable_shouldYield,wv=Ze.unstable_requestPaint,me=Ze.unstable_now,Sv=Ze.unstable_getCurrentPriorityLevel,gu=Ze.unstable_ImmediatePriority,mm=Ze.unstable_UserBlockingPriority,ls=Ze.unstable_NormalPriority,kv=Ze.unstable_LowPriority,fm=Ze.unstable_IdlePriority,Is=null,Nt=null;function Ev(e){if(Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(Is,e,void 0,(e.current.flags&128)===128)}catch{}}var bt=Math.clz32?Math.clz32:qv,Cv=Math.log,Pv=Math.LN2;function qv(e){return e>>>=0,e===0?32:31-(Cv(e)/Pv|0)|0}var Pn=64,qn=4194304;function Pr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function us(e,t){var o=e.pendingLanes;if(o===0)return 0;var a=0,r=e.suspendedLanes,n=e.pingedLanes,s=o&268435455;if(s!==0){var i=s&~r;i!==0?a=Pr(i):(n&=s,n!==0&&(a=Pr(n)))}else s=o&~r,s!==0?a=Pr(s):n!==0&&(a=Pr(n));if(a===0)return 0;if(t!==0&&t!==a&&!(t&r)&&(r=a&-a,n=t&-t,r>=n||r===16&&(n&4194240)!==0))return t;if(a&4&&(a|=o&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)o=31-bt(t),r=1<<o,a|=e[o],t&=~r;return a}function Av(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ov(e,t){for(var o=e.suspendedLanes,a=e.pingedLanes,r=e.expirationTimes,n=e.pendingLanes;0<n;){var s=31-bt(n),i=1<<s,l=r[s];l===-1?(!(i&o)||i&a)&&(r[s]=Av(i,t)):l<=t&&(e.expiredLanes|=i),n&=~i}}function cl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function hm(){var e=Pn;return Pn<<=1,!(Pn&4194240)&&(Pn=64),e}function xi(e){for(var t=[],o=0;31>o;o++)t.push(e);return t}function cn(e,t,o){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-bt(t),e[t]=o}function Tv(e,t){var o=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<o;){var r=31-bt(o),n=1<<r;t[r]=0,a[r]=-1,e[r]=-1,o&=~n}}function vu(e,t){var o=e.entangledLanes|=t;for(e=e.entanglements;o;){var a=31-bt(o),r=1<<a;r&t|e[a]&t&&(e[a]|=t),o&=~r}}var ee=0;function gm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var vm,yu,ym,bm,xm,pl=!1,An=[],So=null,ko=null,Eo=null,Fr=new Map,Br=new Map,co=[],Dv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _d(e,t){switch(e){case"focusin":case"focusout":So=null;break;case"dragenter":case"dragleave":ko=null;break;case"mouseover":case"mouseout":Eo=null;break;case"pointerover":case"pointerout":Fr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Br.delete(t.pointerId)}}function gr(e,t,o,a,r,n){return e===null||e.nativeEvent!==n?(e={blockedOn:t,domEventName:o,eventSystemFlags:a,nativeEvent:n,targetContainers:[r]},t!==null&&(t=mn(t),t!==null&&yu(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function Nv(e,t,o,a,r){switch(t){case"focusin":return So=gr(So,e,t,o,a,r),!0;case"dragenter":return ko=gr(ko,e,t,o,a,r),!0;case"mouseover":return Eo=gr(Eo,e,t,o,a,r),!0;case"pointerover":var n=r.pointerId;return Fr.set(n,gr(Fr.get(n)||null,e,t,o,a,r)),!0;case"gotpointercapture":return n=r.pointerId,Br.set(n,gr(Br.get(n)||null,e,t,o,a,r)),!0}return!1}function wm(e){var t=Go(e.target);if(t!==null){var o=ca(t);if(o!==null){if(t=o.tag,t===13){if(t=um(o),t!==null){e.blockedOn=t,xm(e.priority,function(){ym(o)});return}}else if(t===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var o=ml(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(o===null){o=e.nativeEvent;var a=new o.constructor(o.type,o);il=a,o.target.dispatchEvent(a),il=null}else return t=mn(o),t!==null&&yu(t),e.blockedOn=o,!1;t.shift()}return!0}function jd(e,t,o){Gn(e)&&o.delete(t)}function Rv(){pl=!1,So!==null&&Gn(So)&&(So=null),ko!==null&&Gn(ko)&&(ko=null),Eo!==null&&Gn(Eo)&&(Eo=null),Fr.forEach(jd),Br.forEach(jd)}function vr(e,t){e.blockedOn===t&&(e.blockedOn=null,pl||(pl=!0,Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority,Rv)))}function Hr(e){function t(r){return vr(r,e)}if(0<An.length){vr(An[0],e);for(var o=1;o<An.length;o++){var a=An[o];a.blockedOn===e&&(a.blockedOn=null)}}for(So!==null&&vr(So,e),ko!==null&&vr(ko,e),Eo!==null&&vr(Eo,e),Fr.forEach(t),Br.forEach(t),o=0;o<co.length;o++)a=co[o],a.blockedOn===e&&(a.blockedOn=null);for(;0<co.length&&(o=co[0],o.blockedOn===null);)wm(o),o.blockedOn===null&&co.shift()}var La=Xt.ReactCurrentBatchConfig,ds=!0;function Mv(e,t,o,a){var r=ee,n=La.transition;La.transition=null;try{ee=1,bu(e,t,o,a)}finally{ee=r,La.transition=n}}function Iv(e,t,o,a){var r=ee,n=La.transition;La.transition=null;try{ee=4,bu(e,t,o,a)}finally{ee=r,La.transition=n}}function bu(e,t,o,a){if(ds){var r=ml(e,t,o,a);if(r===null)Ti(e,t,a,cs,o),_d(e,a);else if(Nv(r,e,t,o,a))a.stopPropagation();else if(_d(e,a),t&4&&-1<Dv.indexOf(e)){for(;r!==null;){var n=mn(r);if(n!==null&&vm(n),n=ml(e,t,o,a),n===null&&Ti(e,t,a,cs,o),n===r)break;r=n}r!==null&&a.stopPropagation()}else Ti(e,t,a,null,o)}}var cs=null;function ml(e,t,o,a){if(cs=null,e=hu(a),e=Go(e),e!==null)if(t=ca(e),t===null)e=null;else if(o=t.tag,o===13){if(e=um(t),e!==null)return e;e=null}else if(o===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return cs=e,null}function Sm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sv()){case gu:return 1;case mm:return 4;case ls:case kv:return 16;case fm:return 536870912;default:return 16}default:return 16}}var bo=null,xu=null,Wn=null;function km(){if(Wn)return Wn;var e,t=xu,o=t.length,a,r="value"in bo?bo.value:bo.textContent,n=r.length;for(e=0;e<o&&t[e]===r[e];e++);var s=o-e;for(a=1;a<=s&&t[o-a]===r[n-a];a++);return Wn=r.slice(e,1<a?1-a:void 0)}function Qn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function On(){return!0}function Ud(){return!1}function et(e){function t(o,a,r,n,s){this._reactName=o,this._targetInst=r,this.type=a,this.nativeEvent=n,this.target=s,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(o=e[i],this[i]=o?o(n):n[i]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?On:Ud,this.isPropagationStopped=Ud,this}return de(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=On)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=On)},persist:function(){},isPersistent:On}),t}var sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wu=et(sr),pn=de({},sr,{view:0,detail:0}),Lv=et(pn),wi,Si,yr,Ls=de({},pn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Su,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yr&&(yr&&e.type==="mousemove"?(wi=e.screenX-yr.screenX,Si=e.screenY-yr.screenY):Si=wi=0,yr=e),wi)},movementY:function(e){return"movementY"in e?e.movementY:Si}}),Fd=et(Ls),zv=de({},Ls,{dataTransfer:0}),_v=et(zv),jv=de({},pn,{relatedTarget:0}),ki=et(jv),Uv=de({},sr,{animationName:0,elapsedTime:0,pseudoElement:0}),Fv=et(Uv),Bv=de({},sr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Hv=et(Bv),$v=de({},sr,{data:0}),Bd=et($v),Vv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wv[e])?!!t[e]:!1}function Su(){return Qv}var Kv=de({},pn,{key:function(e){if(e.key){var t=Vv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Qn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Su,charCode:function(e){return e.type==="keypress"?Qn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xv=et(Kv),Yv=de({},Ls,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hd=et(Yv),Zv=de({},pn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Su}),Jv=et(Zv),ey=de({},sr,{propertyName:0,elapsedTime:0,pseudoElement:0}),ty=et(ey),oy=de({},Ls,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ay=et(oy),ry=[9,13,27,32],ku=$t&&"CompositionEvent"in window,Tr=null;$t&&"documentMode"in document&&(Tr=document.documentMode);var ny=$t&&"TextEvent"in window&&!Tr,Em=$t&&(!ku||Tr&&8<Tr&&11>=Tr),$d=" ",Vd=!1;function Cm(e,t){switch(e){case"keyup":return ry.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ka=!1;function sy(e,t){switch(e){case"compositionend":return Pm(t);case"keypress":return t.which!==32?null:(Vd=!0,$d);case"textInput":return e=t.data,e===$d&&Vd?null:e;default:return null}}function iy(e,t){if(ka)return e==="compositionend"||!ku&&Cm(e,t)?(e=km(),Wn=xu=bo=null,ka=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Em&&t.locale!=="ko"?null:t.data;default:return null}}var ly={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ly[e.type]:t==="textarea"}function qm(e,t,o,a){rm(a),t=ps(t,"onChange"),0<t.length&&(o=new wu("onChange","change",null,o,a),e.push({event:o,listeners:t}))}var Dr=null,$r=null;function uy(e){_m(e,0)}function zs(e){var t=Pa(e);if(Yp(t))return e}function dy(e,t){if(e==="change")return t}var Am=!1;if($t){var Ei;if($t){var Ci="oninput"in document;if(!Ci){var Wd=document.createElement("div");Wd.setAttribute("oninput","return;"),Ci=typeof Wd.oninput=="function"}Ei=Ci}else Ei=!1;Am=Ei&&(!document.documentMode||9<document.documentMode)}function Qd(){Dr&&(Dr.detachEvent("onpropertychange",Om),$r=Dr=null)}function Om(e){if(e.propertyName==="value"&&zs($r)){var t=[];qm(t,$r,e,hu(e)),lm(uy,t)}}function cy(e,t,o){e==="focusin"?(Qd(),Dr=t,$r=o,Dr.attachEvent("onpropertychange",Om)):e==="focusout"&&Qd()}function py(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zs($r)}function my(e,t){if(e==="click")return zs(t)}function fy(e,t){if(e==="input"||e==="change")return zs(t)}function hy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var wt=typeof Object.is=="function"?Object.is:hy;function Vr(e,t){if(wt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(a=0;a<o.length;a++){var r=o[a];if(!Ki.call(t,r)||!wt(e[r],t[r]))return!1}return!0}function Kd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xd(e,t){var o=Kd(e);e=0;for(var a;o;){if(o.nodeType===3){if(a=e+o.textContent.length,e<=t&&a>=t)return{node:o,offset:t-e};e=a}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Kd(o)}}function Tm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Tm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Dm(){for(var e=window,t=ns();t instanceof e.HTMLIFrameElement;){try{var o=typeof t.contentWindow.location.href=="string"}catch{o=!1}if(o)e=t.contentWindow;else break;t=ns(e.document)}return t}function Eu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function gy(e){var t=Dm(),o=e.focusedElem,a=e.selectionRange;if(t!==o&&o&&o.ownerDocument&&Tm(o.ownerDocument.documentElement,o)){if(a!==null&&Eu(o)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in o)o.selectionStart=t,o.selectionEnd=Math.min(e,o.value.length);else if(e=(t=o.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var r=o.textContent.length,n=Math.min(a.start,r);a=a.end===void 0?n:Math.min(a.end,r),!e.extend&&n>a&&(r=a,a=n,n=r),r=Xd(o,n);var s=Xd(o,a);r&&s&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(r.node,r.offset),e.removeAllRanges(),n>a?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=o;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<t.length;o++)e=t[o],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var vy=$t&&"documentMode"in document&&11>=document.documentMode,Ea=null,fl=null,Nr=null,hl=!1;function Yd(e,t,o){var a=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;hl||Ea==null||Ea!==ns(a)||(a=Ea,"selectionStart"in a&&Eu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Nr&&Vr(Nr,a)||(Nr=a,a=ps(fl,"onSelect"),0<a.length&&(t=new wu("onSelect","select",null,t,o),e.push({event:t,listeners:a}),t.target=Ea)))}function Tn(e,t){var o={};return o[e.toLowerCase()]=t.toLowerCase(),o["Webkit"+e]="webkit"+t,o["Moz"+e]="moz"+t,o}var Ca={animationend:Tn("Animation","AnimationEnd"),animationiteration:Tn("Animation","AnimationIteration"),animationstart:Tn("Animation","AnimationStart"),transitionend:Tn("Transition","TransitionEnd")},Pi={},Nm={};$t&&(Nm=document.createElement("div").style,"AnimationEvent"in window||(delete Ca.animationend.animation,delete Ca.animationiteration.animation,delete Ca.animationstart.animation),"TransitionEvent"in window||delete Ca.transitionend.transition);function _s(e){if(Pi[e])return Pi[e];if(!Ca[e])return e;var t=Ca[e],o;for(o in t)if(t.hasOwnProperty(o)&&o in Nm)return Pi[e]=t[o];return e}var Rm=_s("animationend"),Mm=_s("animationiteration"),Im=_s("animationstart"),Lm=_s("transitionend"),zm=new Map,Zd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lo(e,t){zm.set(e,t),da(t,[e])}for(var qi=0;qi<Zd.length;qi++){var Ai=Zd[qi],yy=Ai.toLowerCase(),by=Ai[0].toUpperCase()+Ai.slice(1);Lo(yy,"on"+by)}Lo(Rm,"onAnimationEnd");Lo(Mm,"onAnimationIteration");Lo(Im,"onAnimationStart");Lo("dblclick","onDoubleClick");Lo("focusin","onFocus");Lo("focusout","onBlur");Lo(Lm,"onTransitionEnd");Xa("onMouseEnter",["mouseout","mouseover"]);Xa("onMouseLeave",["mouseout","mouseover"]);Xa("onPointerEnter",["pointerout","pointerover"]);Xa("onPointerLeave",["pointerout","pointerover"]);da("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));da("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));da("onBeforeInput",["compositionend","keypress","textInput","paste"]);da("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));da("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));da("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xy=new Set("cancel close invalid load scroll toggle".split(" ").concat(qr));function Jd(e,t,o){var a=e.type||"unknown-event";e.currentTarget=o,yv(a,t,void 0,e),e.currentTarget=null}function _m(e,t){t=(t&4)!==0;for(var o=0;o<e.length;o++){var a=e[o],r=a.event;a=a.listeners;e:{var n=void 0;if(t)for(var s=a.length-1;0<=s;s--){var i=a[s],l=i.instance,u=i.currentTarget;if(i=i.listener,l!==n&&r.isPropagationStopped())break e;Jd(r,i,u),n=l}else for(s=0;s<a.length;s++){if(i=a[s],l=i.instance,u=i.currentTarget,i=i.listener,l!==n&&r.isPropagationStopped())break e;Jd(r,i,u),n=l}}}if(is)throw e=dl,is=!1,dl=null,e}function re(e,t){var o=t[xl];o===void 0&&(o=t[xl]=new Set);var a=e+"__bubble";o.has(a)||(jm(t,e,2,!1),o.add(a))}function Oi(e,t,o){var a=0;t&&(a|=4),jm(o,e,a,t)}var Dn="_reactListening"+Math.random().toString(36).slice(2);function Gr(e){if(!e[Dn]){e[Dn]=!0,Gp.forEach(function(o){o!=="selectionchange"&&(xy.has(o)||Oi(o,!1,e),Oi(o,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Dn]||(t[Dn]=!0,Oi("selectionchange",!1,t))}}function jm(e,t,o,a){switch(Sm(t)){case 1:var r=Mv;break;case 4:r=Iv;break;default:r=bu}o=r.bind(null,t,o,e),r=void 0,!ul||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),a?r!==void 0?e.addEventListener(t,o,{capture:!0,passive:r}):e.addEventListener(t,o,!0):r!==void 0?e.addEventListener(t,o,{passive:r}):e.addEventListener(t,o,!1)}function Ti(e,t,o,a,r){var n=a;if(!(t&1)&&!(t&2)&&a!==null)e:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var i=a.stateNode.containerInfo;if(i===r||i.nodeType===8&&i.parentNode===r)break;if(s===4)for(s=a.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;i!==null;){if(s=Go(i),s===null)return;if(l=s.tag,l===5||l===6){a=n=s;continue e}i=i.parentNode}}a=a.return}lm(function(){var u=n,d=hu(o),p=[];e:{var h=zm.get(e);if(h!==void 0){var c=wu,S=e;switch(e){case"keypress":if(Qn(o)===0)break e;case"keydown":case"keyup":c=Xv;break;case"focusin":S="focus",c=ki;break;case"focusout":S="blur",c=ki;break;case"beforeblur":case"afterblur":c=ki;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":c=Fd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":c=_v;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":c=Jv;break;case Rm:case Mm:case Im:c=Fv;break;case Lm:c=ty;break;case"scroll":c=Lv;break;case"wheel":c=ay;break;case"copy":case"cut":case"paste":c=Hv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":c=Hd}var v=(t&4)!==0,x=!v&&e==="scroll",f=v?h!==null?h+"Capture":null:h;v=[];for(var m=u,g;m!==null;){g=m;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,f!==null&&(w=Ur(m,f),w!=null&&v.push(Wr(m,w,g)))),x)break;m=m.return}0<v.length&&(h=new c(h,S,null,o,d),p.push({event:h,listeners:v}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",c=e==="mouseout"||e==="pointerout",h&&o!==il&&(S=o.relatedTarget||o.fromElement)&&(Go(S)||S[Vt]))break e;if((c||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,c?(S=o.relatedTarget||o.toElement,c=u,S=S?Go(S):null,S!==null&&(x=ca(S),S!==x||S.tag!==5&&S.tag!==6)&&(S=null)):(c=null,S=u),c!==S)){if(v=Fd,w="onMouseLeave",f="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(v=Hd,w="onPointerLeave",f="onPointerEnter",m="pointer"),x=c==null?h:Pa(c),g=S==null?h:Pa(S),h=new v(w,m+"leave",c,o,d),h.target=x,h.relatedTarget=g,w=null,Go(d)===u&&(v=new v(f,m+"enter",S,o,d),v.target=g,v.relatedTarget=x,w=v),x=w,c&&S)t:{for(v=c,f=S,m=0,g=v;g;g=xa(g))m++;for(g=0,w=f;w;w=xa(w))g++;for(;0<m-g;)v=xa(v),m--;for(;0<g-m;)f=xa(f),g--;for(;m--;){if(v===f||f!==null&&v===f.alternate)break t;v=xa(v),f=xa(f)}v=null}else v=null;c!==null&&ec(p,h,c,v,!1),S!==null&&x!==null&&ec(p,x,S,v,!0)}}e:{if(h=u?Pa(u):window,c=h.nodeName&&h.nodeName.toLowerCase(),c==="select"||c==="input"&&h.type==="file")var k=dy;else if(Gd(h))if(Am)k=fy;else{k=py;var E=cy}else(c=h.nodeName)&&c.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=my);if(k&&(k=k(e,u))){qm(p,k,o,d);break e}E&&E(e,h,u),e==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&ol(h,"number",h.value)}switch(E=u?Pa(u):window,e){case"focusin":(Gd(E)||E.contentEditable==="true")&&(Ea=E,fl=u,Nr=null);break;case"focusout":Nr=fl=Ea=null;break;case"mousedown":hl=!0;break;case"contextmenu":case"mouseup":case"dragend":hl=!1,Yd(p,o,d);break;case"selectionchange":if(vy)break;case"keydown":case"keyup":Yd(p,o,d)}var C;if(ku)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else ka?Cm(e,o)&&(A="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(A="onCompositionStart");A&&(Em&&o.locale!=="ko"&&(ka||A!=="onCompositionStart"?A==="onCompositionEnd"&&ka&&(C=km()):(bo=d,xu="value"in bo?bo.value:bo.textContent,ka=!0)),E=ps(u,A),0<E.length&&(A=new Bd(A,e,null,o,d),p.push({event:A,listeners:E}),C?A.data=C:(C=Pm(o),C!==null&&(A.data=C)))),(C=ny?sy(e,o):iy(e,o))&&(u=ps(u,"onBeforeInput"),0<u.length&&(d=new Bd("onBeforeInput","beforeinput",null,o,d),p.push({event:d,listeners:u}),d.data=C))}_m(p,t)})}function Wr(e,t,o){return{instance:e,listener:t,currentTarget:o}}function ps(e,t){for(var o=t+"Capture",a=[];e!==null;){var r=e,n=r.stateNode;r.tag===5&&n!==null&&(r=n,n=Ur(e,o),n!=null&&a.unshift(Wr(e,n,r)),n=Ur(e,t),n!=null&&a.push(Wr(e,n,r))),e=e.return}return a}function xa(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ec(e,t,o,a,r){for(var n=t._reactName,s=[];o!==null&&o!==a;){var i=o,l=i.alternate,u=i.stateNode;if(l!==null&&l===a)break;i.tag===5&&u!==null&&(i=u,r?(l=Ur(o,n),l!=null&&s.unshift(Wr(o,l,i))):r||(l=Ur(o,n),l!=null&&s.push(Wr(o,l,i)))),o=o.return}s.length!==0&&e.push({event:t,listeners:s})}var wy=/\r\n?/g,Sy=/\u0000|\uFFFD/g;function tc(e){return(typeof e=="string"?e:""+e).replace(wy,`
`).replace(Sy,"")}function Nn(e,t,o){if(t=tc(t),tc(e)!==t&&o)throw Error(T(425))}function ms(){}var gl=null,vl=null;function yl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var bl=typeof setTimeout=="function"?setTimeout:void 0,ky=typeof clearTimeout=="function"?clearTimeout:void 0,oc=typeof Promise=="function"?Promise:void 0,Ey=typeof queueMicrotask=="function"?queueMicrotask:typeof oc<"u"?function(e){return oc.resolve(null).then(e).catch(Cy)}:bl;function Cy(e){setTimeout(function(){throw e})}function Di(e,t){var o=t,a=0;do{var r=o.nextSibling;if(e.removeChild(o),r&&r.nodeType===8)if(o=r.data,o==="/$"){if(a===0){e.removeChild(r),Hr(t);return}a--}else o!=="$"&&o!=="$?"&&o!=="$!"||a++;o=r}while(o);Hr(t)}function Co(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ac(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"){if(t===0)return e;t--}else o==="/$"&&t++}e=e.previousSibling}return null}var ir=Math.random().toString(36).slice(2),Tt="__reactFiber$"+ir,Qr="__reactProps$"+ir,Vt="__reactContainer$"+ir,xl="__reactEvents$"+ir,Py="__reactListeners$"+ir,qy="__reactHandles$"+ir;function Go(e){var t=e[Tt];if(t)return t;for(var o=e.parentNode;o;){if(t=o[Vt]||o[Tt]){if(o=t.alternate,t.child!==null||o!==null&&o.child!==null)for(e=ac(e);e!==null;){if(o=e[Tt])return o;e=ac(e)}return t}e=o,o=e.parentNode}return null}function mn(e){return e=e[Tt]||e[Vt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Pa(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function js(e){return e[Qr]||null}var wl=[],qa=-1;function zo(e){return{current:e}}function ne(e){0>qa||(e.current=wl[qa],wl[qa]=null,qa--)}function oe(e,t){qa++,wl[qa]=e.current,e.current=t}var Do={},Ne=zo(Do),Be=zo(!1),ra=Do;function Ya(e,t){var o=e.type.contextTypes;if(!o)return Do;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var r={},n;for(n in o)r[n]=t[n];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=r),r}function He(e){return e=e.childContextTypes,e!=null}function fs(){ne(Be),ne(Ne)}function rc(e,t,o){if(Ne.current!==Do)throw Error(T(168));oe(Ne,t),oe(Be,o)}function Um(e,t,o){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return o;a=a.getChildContext();for(var r in a)if(!(r in t))throw Error(T(108,cv(e)||"Unknown",r));return de({},o,a)}function hs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Do,ra=Ne.current,oe(Ne,e),oe(Be,Be.current),!0}function nc(e,t,o){var a=e.stateNode;if(!a)throw Error(T(169));o?(e=Um(e,t,ra),a.__reactInternalMemoizedMergedChildContext=e,ne(Be),ne(Ne),oe(Ne,e)):ne(Be),oe(Be,o)}var jt=null,Us=!1,Ni=!1;function Fm(e){jt===null?jt=[e]:jt.push(e)}function Ay(e){Us=!0,Fm(e)}function _o(){if(!Ni&&jt!==null){Ni=!0;var e=0,t=ee;try{var o=jt;for(ee=1;e<o.length;e++){var a=o[e];do a=a(!0);while(a!==null)}jt=null,Us=!1}catch(r){throw jt!==null&&(jt=jt.slice(e+1)),pm(gu,_o),r}finally{ee=t,Ni=!1}}return null}var Aa=[],Oa=0,gs=null,vs=0,at=[],rt=0,na=null,Ft=1,Bt="";function $o(e,t){Aa[Oa++]=vs,Aa[Oa++]=gs,gs=e,vs=t}function Bm(e,t,o){at[rt++]=Ft,at[rt++]=Bt,at[rt++]=na,na=e;var a=Ft;e=Bt;var r=32-bt(a)-1;a&=~(1<<r),o+=1;var n=32-bt(t)+r;if(30<n){var s=r-r%5;n=(a&(1<<s)-1).toString(32),a>>=s,r-=s,Ft=1<<32-bt(t)+r|o<<r|a,Bt=n+e}else Ft=1<<n|o<<r|a,Bt=e}function Cu(e){e.return!==null&&($o(e,1),Bm(e,1,0))}function Pu(e){for(;e===gs;)gs=Aa[--Oa],Aa[Oa]=null,vs=Aa[--Oa],Aa[Oa]=null;for(;e===na;)na=at[--rt],at[rt]=null,Bt=at[--rt],at[rt]=null,Ft=at[--rt],at[rt]=null}var Xe=null,Ke=null,ie=!1,yt=null;function Hm(e,t){var o=nt(5,null,null,0);o.elementType="DELETED",o.stateNode=t,o.return=e,t=e.deletions,t===null?(e.deletions=[o],e.flags|=16):t.push(o)}function sc(e,t){switch(e.tag){case 5:var o=e.type;return t=t.nodeType!==1||o.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Xe=e,Ke=Co(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Xe=e,Ke=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(o=na!==null?{id:Ft,overflow:Bt}:null,e.memoizedState={dehydrated:t,treeContext:o,retryLane:1073741824},o=nt(18,null,null,0),o.stateNode=t,o.return=e,e.child=o,Xe=e,Ke=null,!0):!1;default:return!1}}function Sl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function kl(e){if(ie){var t=Ke;if(t){var o=t;if(!sc(e,t)){if(Sl(e))throw Error(T(418));t=Co(o.nextSibling);var a=Xe;t&&sc(e,t)?Hm(a,o):(e.flags=e.flags&-4097|2,ie=!1,Xe=e)}}else{if(Sl(e))throw Error(T(418));e.flags=e.flags&-4097|2,ie=!1,Xe=e}}}function ic(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Xe=e}function Rn(e){if(e!==Xe)return!1;if(!ie)return ic(e),ie=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!yl(e.type,e.memoizedProps)),t&&(t=Ke)){if(Sl(e))throw $m(),Error(T(418));for(;t;)Hm(e,t),t=Co(t.nextSibling)}if(ic(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"){if(t===0){Ke=Co(e.nextSibling);break e}t--}else o!=="$"&&o!=="$!"&&o!=="$?"||t++}e=e.nextSibling}Ke=null}}else Ke=Xe?Co(e.stateNode.nextSibling):null;return!0}function $m(){for(var e=Ke;e;)e=Co(e.nextSibling)}function Za(){Ke=Xe=null,ie=!1}function qu(e){yt===null?yt=[e]:yt.push(e)}var Oy=Xt.ReactCurrentBatchConfig;function br(e,t,o){if(e=o.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(T(309));var a=o.stateNode}if(!a)throw Error(T(147,e));var r=a,n=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===n?t.ref:(t=function(s){var i=r.refs;s===null?delete i[n]:i[n]=s},t._stringRef=n,t)}if(typeof e!="string")throw Error(T(284));if(!o._owner)throw Error(T(290,e))}return e}function Mn(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function lc(e){var t=e._init;return t(e._payload)}function Vm(e){function t(f,m){if(e){var g=f.deletions;g===null?(f.deletions=[m],f.flags|=16):g.push(m)}}function o(f,m){if(!e)return null;for(;m!==null;)t(f,m),m=m.sibling;return null}function a(f,m){for(f=new Map;m!==null;)m.key!==null?f.set(m.key,m):f.set(m.index,m),m=m.sibling;return f}function r(f,m){return f=Oo(f,m),f.index=0,f.sibling=null,f}function n(f,m,g){return f.index=g,e?(g=f.alternate,g!==null?(g=g.index,g<m?(f.flags|=2,m):g):(f.flags|=2,m)):(f.flags|=1048576,m)}function s(f){return e&&f.alternate===null&&(f.flags|=2),f}function i(f,m,g,w){return m===null||m.tag!==6?(m=ji(g,f.mode,w),m.return=f,m):(m=r(m,g),m.return=f,m)}function l(f,m,g,w){var k=g.type;return k===Sa?d(f,m,g.props.children,w,g.key):m!==null&&(m.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===lo&&lc(k)===m.type)?(w=r(m,g.props),w.ref=br(f,m,g),w.return=f,w):(w=ts(g.type,g.key,g.props,null,f.mode,w),w.ref=br(f,m,g),w.return=f,w)}function u(f,m,g,w){return m===null||m.tag!==4||m.stateNode.containerInfo!==g.containerInfo||m.stateNode.implementation!==g.implementation?(m=Ui(g,f.mode,w),m.return=f,m):(m=r(m,g.children||[]),m.return=f,m)}function d(f,m,g,w,k){return m===null||m.tag!==7?(m=oa(g,f.mode,w,k),m.return=f,m):(m=r(m,g),m.return=f,m)}function p(f,m,g){if(typeof m=="string"&&m!==""||typeof m=="number")return m=ji(""+m,f.mode,g),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case kn:return g=ts(m.type,m.key,m.props,null,f.mode,g),g.ref=br(f,null,m),g.return=f,g;case wa:return m=Ui(m,f.mode,g),m.return=f,m;case lo:var w=m._init;return p(f,w(m._payload),g)}if(Cr(m)||fr(m))return m=oa(m,f.mode,g,null),m.return=f,m;Mn(f,m)}return null}function h(f,m,g,w){var k=m!==null?m.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return k!==null?null:i(f,m,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case kn:return g.key===k?l(f,m,g,w):null;case wa:return g.key===k?u(f,m,g,w):null;case lo:return k=g._init,h(f,m,k(g._payload),w)}if(Cr(g)||fr(g))return k!==null?null:d(f,m,g,w,null);Mn(f,g)}return null}function c(f,m,g,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(g)||null,i(m,f,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case kn:return f=f.get(w.key===null?g:w.key)||null,l(m,f,w,k);case wa:return f=f.get(w.key===null?g:w.key)||null,u(m,f,w,k);case lo:var E=w._init;return c(f,m,g,E(w._payload),k)}if(Cr(w)||fr(w))return f=f.get(g)||null,d(m,f,w,k,null);Mn(m,w)}return null}function S(f,m,g,w){for(var k=null,E=null,C=m,A=m=0,M=null;C!==null&&A<g.length;A++){C.index>A?(M=C,C=null):M=C.sibling;var N=h(f,C,g[A],w);if(N===null){C===null&&(C=M);break}e&&C&&N.alternate===null&&t(f,C),m=n(N,m,A),E===null?k=N:E.sibling=N,E=N,C=M}if(A===g.length)return o(f,C),ie&&$o(f,A),k;if(C===null){for(;A<g.length;A++)C=p(f,g[A],w),C!==null&&(m=n(C,m,A),E===null?k=C:E.sibling=C,E=C);return ie&&$o(f,A),k}for(C=a(f,C);A<g.length;A++)M=c(C,f,A,g[A],w),M!==null&&(e&&M.alternate!==null&&C.delete(M.key===null?A:M.key),m=n(M,m,A),E===null?k=M:E.sibling=M,E=M);return e&&C.forEach(function(U){return t(f,U)}),ie&&$o(f,A),k}function v(f,m,g,w){var k=fr(g);if(typeof k!="function")throw Error(T(150));if(g=k.call(g),g==null)throw Error(T(151));for(var E=k=null,C=m,A=m=0,M=null,N=g.next();C!==null&&!N.done;A++,N=g.next()){C.index>A?(M=C,C=null):M=C.sibling;var U=h(f,C,N.value,w);if(U===null){C===null&&(C=M);break}e&&C&&U.alternate===null&&t(f,C),m=n(U,m,A),E===null?k=U:E.sibling=U,E=U,C=M}if(N.done)return o(f,C),ie&&$o(f,A),k;if(C===null){for(;!N.done;A++,N=g.next())N=p(f,N.value,w),N!==null&&(m=n(N,m,A),E===null?k=N:E.sibling=N,E=N);return ie&&$o(f,A),k}for(C=a(f,C);!N.done;A++,N=g.next())N=c(C,f,A,N.value,w),N!==null&&(e&&N.alternate!==null&&C.delete(N.key===null?A:N.key),m=n(N,m,A),E===null?k=N:E.sibling=N,E=N);return e&&C.forEach(function(z){return t(f,z)}),ie&&$o(f,A),k}function x(f,m,g,w){if(typeof g=="object"&&g!==null&&g.type===Sa&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case kn:e:{for(var k=g.key,E=m;E!==null;){if(E.key===k){if(k=g.type,k===Sa){if(E.tag===7){o(f,E.sibling),m=r(E,g.props.children),m.return=f,f=m;break e}}else if(E.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===lo&&lc(k)===E.type){o(f,E.sibling),m=r(E,g.props),m.ref=br(f,E,g),m.return=f,f=m;break e}o(f,E);break}else t(f,E);E=E.sibling}g.type===Sa?(m=oa(g.props.children,f.mode,w,g.key),m.return=f,f=m):(w=ts(g.type,g.key,g.props,null,f.mode,w),w.ref=br(f,m,g),w.return=f,f=w)}return s(f);case wa:e:{for(E=g.key;m!==null;){if(m.key===E)if(m.tag===4&&m.stateNode.containerInfo===g.containerInfo&&m.stateNode.implementation===g.implementation){o(f,m.sibling),m=r(m,g.children||[]),m.return=f,f=m;break e}else{o(f,m);break}else t(f,m);m=m.sibling}m=Ui(g,f.mode,w),m.return=f,f=m}return s(f);case lo:return E=g._init,x(f,m,E(g._payload),w)}if(Cr(g))return S(f,m,g,w);if(fr(g))return v(f,m,g,w);Mn(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,m!==null&&m.tag===6?(o(f,m.sibling),m=r(m,g),m.return=f,f=m):(o(f,m),m=ji(g,f.mode,w),m.return=f,f=m),s(f)):o(f,m)}return x}var Ja=Vm(!0),Gm=Vm(!1),ys=zo(null),bs=null,Ta=null,Au=null;function Ou(){Au=Ta=bs=null}function Tu(e){var t=ys.current;ne(ys),e._currentValue=t}function El(e,t,o){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===o)break;e=e.return}}function za(e,t){bs=e,Au=Ta=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Fe=!0),e.firstContext=null)}function it(e){var t=e._currentValue;if(Au!==e)if(e={context:e,memoizedValue:t,next:null},Ta===null){if(bs===null)throw Error(T(308));Ta=e,bs.dependencies={lanes:0,firstContext:e}}else Ta=Ta.next=e;return t}var Wo=null;function Du(e){Wo===null?Wo=[e]:Wo.push(e)}function Wm(e,t,o,a){var r=t.interleaved;return r===null?(o.next=o,Du(t)):(o.next=r.next,r.next=o),t.interleaved=o,Gt(e,a)}function Gt(e,t){e.lanes|=t;var o=e.alternate;for(o!==null&&(o.lanes|=t),o=e,e=e.return;e!==null;)e.childLanes|=t,o=e.alternate,o!==null&&(o.childLanes|=t),o=e,e=e.return;return o.tag===3?o.stateNode:null}var uo=!1;function Nu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ht(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Po(e,t,o){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,Z&2){var r=a.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),a.pending=t,Gt(e,o)}return r=a.interleaved,r===null?(t.next=t,Du(a)):(t.next=r.next,r.next=t),a.interleaved=t,Gt(e,o)}function Kn(e,t,o){if(t=t.updateQueue,t!==null&&(t=t.shared,(o&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,o|=a,t.lanes=o,vu(e,o)}}function uc(e,t){var o=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,o===a)){var r=null,n=null;if(o=o.firstBaseUpdate,o!==null){do{var s={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};n===null?r=n=s:n=n.next=s,o=o.next}while(o!==null);n===null?r=n=t:n=n.next=t}else r=n=t;o={baseState:a.baseState,firstBaseUpdate:r,lastBaseUpdate:n,shared:a.shared,effects:a.effects},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=t:e.next=t,o.lastBaseUpdate=t}function xs(e,t,o,a){var r=e.updateQueue;uo=!1;var n=r.firstBaseUpdate,s=r.lastBaseUpdate,i=r.shared.pending;if(i!==null){r.shared.pending=null;var l=i,u=l.next;l.next=null,s===null?n=u:s.next=u,s=l;var d=e.alternate;d!==null&&(d=d.updateQueue,i=d.lastBaseUpdate,i!==s&&(i===null?d.firstBaseUpdate=u:i.next=u,d.lastBaseUpdate=l))}if(n!==null){var p=r.baseState;s=0,d=u=l=null,i=n;do{var h=i.lane,c=i.eventTime;if((a&h)===h){d!==null&&(d=d.next={eventTime:c,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var S=e,v=i;switch(h=t,c=o,v.tag){case 1:if(S=v.payload,typeof S=="function"){p=S.call(c,p,h);break e}p=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=v.payload,h=typeof S=="function"?S.call(c,p,h):S,h==null)break e;p=de({},p,h);break e;case 2:uo=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,h=r.effects,h===null?r.effects=[i]:h.push(i))}else c={eventTime:c,lane:h,tag:i.tag,payload:i.payload,callback:i.callback,next:null},d===null?(u=d=c,l=p):d=d.next=c,s|=h;if(i=i.next,i===null){if(i=r.shared.pending,i===null)break;h=i,i=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(d===null&&(l=p),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=d,t=r.shared.interleaved,t!==null){r=t;do s|=r.lane,r=r.next;while(r!==t)}else n===null&&(r.shared.lanes=0);ia|=s,e.lanes=s,e.memoizedState=p}}function dc(e,t,o){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],r=a.callback;if(r!==null){if(a.callback=null,a=o,typeof r!="function")throw Error(T(191,r));r.call(a)}}}var fn={},Rt=zo(fn),Kr=zo(fn),Xr=zo(fn);function Qo(e){if(e===fn)throw Error(T(174));return e}function Ru(e,t){switch(oe(Xr,t),oe(Kr,e),oe(Rt,fn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:rl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=rl(t,e)}ne(Rt),oe(Rt,t)}function er(){ne(Rt),ne(Kr),ne(Xr)}function Km(e){Qo(Xr.current);var t=Qo(Rt.current),o=rl(t,e.type);t!==o&&(oe(Kr,e),oe(Rt,o))}function Mu(e){Kr.current===e&&(ne(Rt),ne(Kr))}var le=zo(0);function ws(e){for(var t=e;t!==null;){if(t.tag===13){var o=t.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ri=[];function Iu(){for(var e=0;e<Ri.length;e++)Ri[e]._workInProgressVersionPrimary=null;Ri.length=0}var Xn=Xt.ReactCurrentDispatcher,Mi=Xt.ReactCurrentBatchConfig,sa=0,ue=null,ge=null,we=null,Ss=!1,Rr=!1,Yr=0,Ty=0;function Ae(){throw Error(T(321))}function Lu(e,t){if(t===null)return!1;for(var o=0;o<t.length&&o<e.length;o++)if(!wt(e[o],t[o]))return!1;return!0}function zu(e,t,o,a,r,n){if(sa=n,ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Xn.current=e===null||e.memoizedState===null?My:Iy,e=o(a,r),Rr){n=0;do{if(Rr=!1,Yr=0,25<=n)throw Error(T(301));n+=1,we=ge=null,t.updateQueue=null,Xn.current=Ly,e=o(a,r)}while(Rr)}if(Xn.current=ks,t=ge!==null&&ge.next!==null,sa=0,we=ge=ue=null,Ss=!1,t)throw Error(T(300));return e}function _u(){var e=Yr!==0;return Yr=0,e}function Pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?ue.memoizedState=we=e:we=we.next=e,we}function lt(){if(ge===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var t=we===null?ue.memoizedState:we.next;if(t!==null)we=t,ge=e;else{if(e===null)throw Error(T(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},we===null?ue.memoizedState=we=e:we=we.next=e}return we}function Zr(e,t){return typeof t=="function"?t(e):t}function Ii(e){var t=lt(),o=t.queue;if(o===null)throw Error(T(311));o.lastRenderedReducer=e;var a=ge,r=a.baseQueue,n=o.pending;if(n!==null){if(r!==null){var s=r.next;r.next=n.next,n.next=s}a.baseQueue=r=n,o.pending=null}if(r!==null){n=r.next,a=a.baseState;var i=s=null,l=null,u=n;do{var d=u.lane;if((sa&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),a=u.hasEagerState?u.eagerState:e(a,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(i=l=p,s=a):l=l.next=p,ue.lanes|=d,ia|=d}u=u.next}while(u!==null&&u!==n);l===null?s=a:l.next=i,wt(a,t.memoizedState)||(Fe=!0),t.memoizedState=a,t.baseState=s,t.baseQueue=l,o.lastRenderedState=a}if(e=o.interleaved,e!==null){r=e;do n=r.lane,ue.lanes|=n,ia|=n,r=r.next;while(r!==e)}else r===null&&(o.lanes=0);return[t.memoizedState,o.dispatch]}function Li(e){var t=lt(),o=t.queue;if(o===null)throw Error(T(311));o.lastRenderedReducer=e;var a=o.dispatch,r=o.pending,n=t.memoizedState;if(r!==null){o.pending=null;var s=r=r.next;do n=e(n,s.action),s=s.next;while(s!==r);wt(n,t.memoizedState)||(Fe=!0),t.memoizedState=n,t.baseQueue===null&&(t.baseState=n),o.lastRenderedState=n}return[n,a]}function Xm(){}function Ym(e,t){var o=ue,a=lt(),r=t(),n=!wt(a.memoizedState,r);if(n&&(a.memoizedState=r,Fe=!0),a=a.queue,ju(ef.bind(null,o,a,e),[e]),a.getSnapshot!==t||n||we!==null&&we.memoizedState.tag&1){if(o.flags|=2048,Jr(9,Jm.bind(null,o,a,r,t),void 0,null),Se===null)throw Error(T(349));sa&30||Zm(o,t,r)}return r}function Zm(e,t,o){e.flags|=16384,e={getSnapshot:t,value:o},t=ue.updateQueue,t===null?(t={lastEffect:null,stores:null},ue.updateQueue=t,t.stores=[e]):(o=t.stores,o===null?t.stores=[e]:o.push(e))}function Jm(e,t,o,a){t.value=o,t.getSnapshot=a,tf(t)&&of(e)}function ef(e,t,o){return o(function(){tf(t)&&of(e)})}function tf(e){var t=e.getSnapshot;e=e.value;try{var o=t();return!wt(e,o)}catch{return!0}}function of(e){var t=Gt(e,1);t!==null&&xt(t,e,1,-1)}function cc(e){var t=Pt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zr,lastRenderedState:e},t.queue=e,e=e.dispatch=Ry.bind(null,ue,e),[t.memoizedState,e]}function Jr(e,t,o,a){return e={tag:e,create:t,destroy:o,deps:a,next:null},t=ue.updateQueue,t===null?(t={lastEffect:null,stores:null},ue.updateQueue=t,t.lastEffect=e.next=e):(o=t.lastEffect,o===null?t.lastEffect=e.next=e:(a=o.next,o.next=e,e.next=a,t.lastEffect=e)),e}function af(){return lt().memoizedState}function Yn(e,t,o,a){var r=Pt();ue.flags|=e,r.memoizedState=Jr(1|t,o,void 0,a===void 0?null:a)}function Fs(e,t,o,a){var r=lt();a=a===void 0?null:a;var n=void 0;if(ge!==null){var s=ge.memoizedState;if(n=s.destroy,a!==null&&Lu(a,s.deps)){r.memoizedState=Jr(t,o,n,a);return}}ue.flags|=e,r.memoizedState=Jr(1|t,o,n,a)}function pc(e,t){return Yn(8390656,8,e,t)}function ju(e,t){return Fs(2048,8,e,t)}function rf(e,t){return Fs(4,2,e,t)}function nf(e,t){return Fs(4,4,e,t)}function sf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function lf(e,t,o){return o=o!=null?o.concat([e]):null,Fs(4,4,sf.bind(null,t,e),o)}function Uu(){}function uf(e,t){var o=lt();t=t===void 0?null:t;var a=o.memoizedState;return a!==null&&t!==null&&Lu(t,a[1])?a[0]:(o.memoizedState=[e,t],e)}function df(e,t){var o=lt();t=t===void 0?null:t;var a=o.memoizedState;return a!==null&&t!==null&&Lu(t,a[1])?a[0]:(e=e(),o.memoizedState=[e,t],e)}function cf(e,t,o){return sa&21?(wt(o,t)||(o=hm(),ue.lanes|=o,ia|=o,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Fe=!0),e.memoizedState=o)}function Dy(e,t){var o=ee;ee=o!==0&&4>o?o:4,e(!0);var a=Mi.transition;Mi.transition={};try{e(!1),t()}finally{ee=o,Mi.transition=a}}function pf(){return lt().memoizedState}function Ny(e,t,o){var a=Ao(e);if(o={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null},mf(e))ff(t,o);else if(o=Wm(e,t,o,a),o!==null){var r=Le();xt(o,e,a,r),hf(o,t,a)}}function Ry(e,t,o){var a=Ao(e),r={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null};if(mf(e))ff(t,r);else{var n=e.alternate;if(e.lanes===0&&(n===null||n.lanes===0)&&(n=t.lastRenderedReducer,n!==null))try{var s=t.lastRenderedState,i=n(s,o);if(r.hasEagerState=!0,r.eagerState=i,wt(i,s)){var l=t.interleaved;l===null?(r.next=r,Du(t)):(r.next=l.next,l.next=r),t.interleaved=r;return}}catch{}finally{}o=Wm(e,t,r,a),o!==null&&(r=Le(),xt(o,e,a,r),hf(o,t,a))}}function mf(e){var t=e.alternate;return e===ue||t!==null&&t===ue}function ff(e,t){Rr=Ss=!0;var o=e.pending;o===null?t.next=t:(t.next=o.next,o.next=t),e.pending=t}function hf(e,t,o){if(o&4194240){var a=t.lanes;a&=e.pendingLanes,o|=a,t.lanes=o,vu(e,o)}}var ks={readContext:it,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useInsertionEffect:Ae,useLayoutEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useMutableSource:Ae,useSyncExternalStore:Ae,useId:Ae,unstable_isNewReconciler:!1},My={readContext:it,useCallback:function(e,t){return Pt().memoizedState=[e,t===void 0?null:t],e},useContext:it,useEffect:pc,useImperativeHandle:function(e,t,o){return o=o!=null?o.concat([e]):null,Yn(4194308,4,sf.bind(null,t,e),o)},useLayoutEffect:function(e,t){return Yn(4194308,4,e,t)},useInsertionEffect:function(e,t){return Yn(4,2,e,t)},useMemo:function(e,t){var o=Pt();return t=t===void 0?null:t,e=e(),o.memoizedState=[e,t],e},useReducer:function(e,t,o){var a=Pt();return t=o!==void 0?o(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=Ny.bind(null,ue,e),[a.memoizedState,e]},useRef:function(e){var t=Pt();return e={current:e},t.memoizedState=e},useState:cc,useDebugValue:Uu,useDeferredValue:function(e){return Pt().memoizedState=e},useTransition:function(){var e=cc(!1),t=e[0];return e=Dy.bind(null,e[1]),Pt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,o){var a=ue,r=Pt();if(ie){if(o===void 0)throw Error(T(407));o=o()}else{if(o=t(),Se===null)throw Error(T(349));sa&30||Zm(a,t,o)}r.memoizedState=o;var n={value:o,getSnapshot:t};return r.queue=n,pc(ef.bind(null,a,n,e),[e]),a.flags|=2048,Jr(9,Jm.bind(null,a,n,o,t),void 0,null),o},useId:function(){var e=Pt(),t=Se.identifierPrefix;if(ie){var o=Bt,a=Ft;o=(a&~(1<<32-bt(a)-1)).toString(32)+o,t=":"+t+"R"+o,o=Yr++,0<o&&(t+="H"+o.toString(32)),t+=":"}else o=Ty++,t=":"+t+"r"+o.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Iy={readContext:it,useCallback:uf,useContext:it,useEffect:ju,useImperativeHandle:lf,useInsertionEffect:rf,useLayoutEffect:nf,useMemo:df,useReducer:Ii,useRef:af,useState:function(){return Ii(Zr)},useDebugValue:Uu,useDeferredValue:function(e){var t=lt();return cf(t,ge.memoizedState,e)},useTransition:function(){var e=Ii(Zr)[0],t=lt().memoizedState;return[e,t]},useMutableSource:Xm,useSyncExternalStore:Ym,useId:pf,unstable_isNewReconciler:!1},Ly={readContext:it,useCallback:uf,useContext:it,useEffect:ju,useImperativeHandle:lf,useInsertionEffect:rf,useLayoutEffect:nf,useMemo:df,useReducer:Li,useRef:af,useState:function(){return Li(Zr)},useDebugValue:Uu,useDeferredValue:function(e){var t=lt();return ge===null?t.memoizedState=e:cf(t,ge.memoizedState,e)},useTransition:function(){var e=Li(Zr)[0],t=lt().memoizedState;return[e,t]},useMutableSource:Xm,useSyncExternalStore:Ym,useId:pf,unstable_isNewReconciler:!1};function ft(e,t){if(e&&e.defaultProps){t=de({},t),e=e.defaultProps;for(var o in e)t[o]===void 0&&(t[o]=e[o]);return t}return t}function Cl(e,t,o,a){t=e.memoizedState,o=o(a,t),o=o==null?t:de({},t,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var Bs={isMounted:function(e){return(e=e._reactInternals)?ca(e)===e:!1},enqueueSetState:function(e,t,o){e=e._reactInternals;var a=Le(),r=Ao(e),n=Ht(a,r);n.payload=t,o!=null&&(n.callback=o),t=Po(e,n,r),t!==null&&(xt(t,e,r,a),Kn(t,e,r))},enqueueReplaceState:function(e,t,o){e=e._reactInternals;var a=Le(),r=Ao(e),n=Ht(a,r);n.tag=1,n.payload=t,o!=null&&(n.callback=o),t=Po(e,n,r),t!==null&&(xt(t,e,r,a),Kn(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var o=Le(),a=Ao(e),r=Ht(o,a);r.tag=2,t!=null&&(r.callback=t),t=Po(e,r,a),t!==null&&(xt(t,e,a,o),Kn(t,e,a))}};function mc(e,t,o,a,r,n,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,n,s):t.prototype&&t.prototype.isPureReactComponent?!Vr(o,a)||!Vr(r,n):!0}function gf(e,t,o){var a=!1,r=Do,n=t.contextType;return typeof n=="object"&&n!==null?n=it(n):(r=He(t)?ra:Ne.current,a=t.contextTypes,n=(a=a!=null)?Ya(e,r):Do),t=new t(o,n),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Bs,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=n),t}function fc(e,t,o,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(o,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(o,a),t.state!==e&&Bs.enqueueReplaceState(t,t.state,null)}function Pl(e,t,o,a){var r=e.stateNode;r.props=o,r.state=e.memoizedState,r.refs={},Nu(e);var n=t.contextType;typeof n=="object"&&n!==null?r.context=it(n):(n=He(t)?ra:Ne.current,r.context=Ya(e,n)),r.state=e.memoizedState,n=t.getDerivedStateFromProps,typeof n=="function"&&(Cl(e,t,n,o),r.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(t=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),t!==r.state&&Bs.enqueueReplaceState(r,r.state,null),xs(e,o,r,a),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function tr(e,t){try{var o="",a=t;do o+=dv(a),a=a.return;while(a);var r=o}catch(n){r=`
Error generating stack: `+n.message+`
`+n.stack}return{value:e,source:t,stack:r,digest:null}}function zi(e,t,o){return{value:e,source:null,stack:o??null,digest:t??null}}function ql(e,t){try{console.error(t.value)}catch(o){setTimeout(function(){throw o})}}var zy=typeof WeakMap=="function"?WeakMap:Map;function vf(e,t,o){o=Ht(-1,o),o.tag=3,o.payload={element:null};var a=t.value;return o.callback=function(){Cs||(Cs=!0,zl=a),ql(e,t)},o}function yf(e,t,o){o=Ht(-1,o),o.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var r=t.value;o.payload=function(){return a(r)},o.callback=function(){ql(e,t)}}var n=e.stateNode;return n!==null&&typeof n.componentDidCatch=="function"&&(o.callback=function(){ql(e,t),typeof a!="function"&&(qo===null?qo=new Set([this]):qo.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),o}function hc(e,t,o){var a=e.pingCache;if(a===null){a=e.pingCache=new zy;var r=new Set;a.set(t,r)}else r=a.get(t),r===void 0&&(r=new Set,a.set(t,r));r.has(o)||(r.add(o),e=Yy.bind(null,e,t,o),t.then(e,e))}function gc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function vc(e,t,o,a,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===t?e.flags|=65536:(e.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(t=Ht(-1,1),t.tag=2,Po(o,t,1))),o.lanes|=1),e)}var _y=Xt.ReactCurrentOwner,Fe=!1;function Me(e,t,o,a){t.child=e===null?Gm(t,null,o,a):Ja(t,e.child,o,a)}function yc(e,t,o,a,r){o=o.render;var n=t.ref;return za(t,r),a=zu(e,t,o,a,n,r),o=_u(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,Wt(e,t,r)):(ie&&o&&Cu(t),t.flags|=1,Me(e,t,a,r),t.child)}function bc(e,t,o,a,r){if(e===null){var n=o.type;return typeof n=="function"&&!Qu(n)&&n.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(t.tag=15,t.type=n,bf(e,t,n,a,r)):(e=ts(o.type,null,a,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(n=e.child,!(e.lanes&r)){var s=n.memoizedProps;if(o=o.compare,o=o!==null?o:Vr,o(s,a)&&e.ref===t.ref)return Wt(e,t,r)}return t.flags|=1,e=Oo(n,a),e.ref=t.ref,e.return=t,t.child=e}function bf(e,t,o,a,r){if(e!==null){var n=e.memoizedProps;if(Vr(n,a)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=a=n,(e.lanes&r)!==0)e.flags&131072&&(Fe=!0);else return t.lanes=e.lanes,Wt(e,t,r)}return Al(e,t,o,a,r)}function xf(e,t,o){var a=t.pendingProps,r=a.children,n=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},oe(Na,Ge),Ge|=o;else{if(!(o&1073741824))return e=n!==null?n.baseLanes|o:o,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,oe(Na,Ge),Ge|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=n!==null?n.baseLanes:o,oe(Na,Ge),Ge|=a}else n!==null?(a=n.baseLanes|o,t.memoizedState=null):a=o,oe(Na,Ge),Ge|=a;return Me(e,t,r,o),t.child}function wf(e,t){var o=t.ref;(e===null&&o!==null||e!==null&&e.ref!==o)&&(t.flags|=512,t.flags|=2097152)}function Al(e,t,o,a,r){var n=He(o)?ra:Ne.current;return n=Ya(t,n),za(t,r),o=zu(e,t,o,a,n,r),a=_u(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,Wt(e,t,r)):(ie&&a&&Cu(t),t.flags|=1,Me(e,t,o,r),t.child)}function xc(e,t,o,a,r){if(He(o)){var n=!0;hs(t)}else n=!1;if(za(t,r),t.stateNode===null)Zn(e,t),gf(t,o,a),Pl(t,o,a,r),a=!0;else if(e===null){var s=t.stateNode,i=t.memoizedProps;s.props=i;var l=s.context,u=o.contextType;typeof u=="object"&&u!==null?u=it(u):(u=He(o)?ra:Ne.current,u=Ya(t,u));var d=o.getDerivedStateFromProps,p=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(i!==a||l!==u)&&fc(t,s,a,u),uo=!1;var h=t.memoizedState;s.state=h,xs(t,a,s,r),l=t.memoizedState,i!==a||h!==l||Be.current||uo?(typeof d=="function"&&(Cl(t,o,d,a),l=t.memoizedState),(i=uo||mc(t,o,i,a,h,l,u))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=l),s.props=a,s.state=l,s.context=u,a=i):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{s=t.stateNode,Qm(e,t),i=t.memoizedProps,u=t.type===t.elementType?i:ft(t.type,i),s.props=u,p=t.pendingProps,h=s.context,l=o.contextType,typeof l=="object"&&l!==null?l=it(l):(l=He(o)?ra:Ne.current,l=Ya(t,l));var c=o.getDerivedStateFromProps;(d=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(i!==p||h!==l)&&fc(t,s,a,l),uo=!1,h=t.memoizedState,s.state=h,xs(t,a,s,r);var S=t.memoizedState;i!==p||h!==S||Be.current||uo?(typeof c=="function"&&(Cl(t,o,c,a),S=t.memoizedState),(u=uo||mc(t,o,u,a,h,S,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(a,S,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(a,S,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=S),s.props=a,s.state=S,s.context=l,a=u):(typeof s.componentDidUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),a=!1)}return Ol(e,t,o,a,n,r)}function Ol(e,t,o,a,r,n){wf(e,t);var s=(t.flags&128)!==0;if(!a&&!s)return r&&nc(t,o,!1),Wt(e,t,n);a=t.stateNode,_y.current=t;var i=s&&typeof o.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&s?(t.child=Ja(t,e.child,null,n),t.child=Ja(t,null,i,n)):Me(e,t,i,n),t.memoizedState=a.state,r&&nc(t,o,!0),t.child}function Sf(e){var t=e.stateNode;t.pendingContext?rc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&rc(e,t.context,!1),Ru(e,t.containerInfo)}function wc(e,t,o,a,r){return Za(),qu(r),t.flags|=256,Me(e,t,o,a),t.child}var Tl={dehydrated:null,treeContext:null,retryLane:0};function Dl(e){return{baseLanes:e,cachePool:null,transitions:null}}function kf(e,t,o){var a=t.pendingProps,r=le.current,n=!1,s=(t.flags&128)!==0,i;if((i=s)||(i=e!==null&&e.memoizedState===null?!1:(r&2)!==0),i?(n=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),oe(le,r&1),e===null)return kl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=a.children,e=a.fallback,n?(a=t.mode,n=t.child,s={mode:"hidden",children:s},!(a&1)&&n!==null?(n.childLanes=0,n.pendingProps=s):n=Vs(s,a,0,null),e=oa(e,a,o,null),n.return=t,e.return=t,n.sibling=e,t.child=n,t.child.memoizedState=Dl(o),t.memoizedState=Tl,e):Fu(t,s));if(r=e.memoizedState,r!==null&&(i=r.dehydrated,i!==null))return jy(e,t,s,a,i,r,o);if(n){n=a.fallback,s=t.mode,r=e.child,i=r.sibling;var l={mode:"hidden",children:a.children};return!(s&1)&&t.child!==r?(a=t.child,a.childLanes=0,a.pendingProps=l,t.deletions=null):(a=Oo(r,l),a.subtreeFlags=r.subtreeFlags&14680064),i!==null?n=Oo(i,n):(n=oa(n,s,o,null),n.flags|=2),n.return=t,a.return=t,a.sibling=n,t.child=a,a=n,n=t.child,s=e.child.memoizedState,s=s===null?Dl(o):{baseLanes:s.baseLanes|o,cachePool:null,transitions:s.transitions},n.memoizedState=s,n.childLanes=e.childLanes&~o,t.memoizedState=Tl,a}return n=e.child,e=n.sibling,a=Oo(n,{mode:"visible",children:a.children}),!(t.mode&1)&&(a.lanes=o),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a}function Fu(e,t){return t=Vs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function In(e,t,o,a){return a!==null&&qu(a),Ja(t,e.child,null,o),e=Fu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function jy(e,t,o,a,r,n,s){if(o)return t.flags&256?(t.flags&=-257,a=zi(Error(T(422))),In(e,t,s,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(n=a.fallback,r=t.mode,a=Vs({mode:"visible",children:a.children},r,0,null),n=oa(n,r,s,null),n.flags|=2,a.return=t,n.return=t,a.sibling=n,t.child=a,t.mode&1&&Ja(t,e.child,null,s),t.child.memoizedState=Dl(s),t.memoizedState=Tl,n);if(!(t.mode&1))return In(e,t,s,null);if(r.data==="$!"){if(a=r.nextSibling&&r.nextSibling.dataset,a)var i=a.dgst;return a=i,n=Error(T(419)),a=zi(n,a,void 0),In(e,t,s,a)}if(i=(s&e.childLanes)!==0,Fe||i){if(a=Se,a!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(a.suspendedLanes|s)?0:r,r!==0&&r!==n.retryLane&&(n.retryLane=r,Gt(e,r),xt(a,e,r,-1))}return Wu(),a=zi(Error(T(421))),In(e,t,s,a)}return r.data==="$?"?(t.flags|=128,t.child=e.child,t=Zy.bind(null,e),r._reactRetry=t,null):(e=n.treeContext,Ke=Co(r.nextSibling),Xe=t,ie=!0,yt=null,e!==null&&(at[rt++]=Ft,at[rt++]=Bt,at[rt++]=na,Ft=e.id,Bt=e.overflow,na=t),t=Fu(t,a.children),t.flags|=4096,t)}function Sc(e,t,o){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),El(e.return,t,o)}function _i(e,t,o,a,r){var n=e.memoizedState;n===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:o,tailMode:r}:(n.isBackwards=t,n.rendering=null,n.renderingStartTime=0,n.last=a,n.tail=o,n.tailMode=r)}function Ef(e,t,o){var a=t.pendingProps,r=a.revealOrder,n=a.tail;if(Me(e,t,a.children,o),a=le.current,a&2)a=a&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sc(e,o,t);else if(e.tag===19)Sc(e,o,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(oe(le,a),!(t.mode&1))t.memoizedState=null;else switch(r){case"forwards":for(o=t.child,r=null;o!==null;)e=o.alternate,e!==null&&ws(e)===null&&(r=o),o=o.sibling;o=r,o===null?(r=t.child,t.child=null):(r=o.sibling,o.sibling=null),_i(t,!1,r,o,n);break;case"backwards":for(o=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&ws(e)===null){t.child=r;break}e=r.sibling,r.sibling=o,o=r,r=e}_i(t,!0,o,null,n);break;case"together":_i(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Zn(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wt(e,t,o){if(e!==null&&(t.dependencies=e.dependencies),ia|=t.lanes,!(o&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,o=Oo(e,e.pendingProps),t.child=o,o.return=t;e.sibling!==null;)e=e.sibling,o=o.sibling=Oo(e,e.pendingProps),o.return=t;o.sibling=null}return t.child}function Uy(e,t,o){switch(t.tag){case 3:Sf(t),Za();break;case 5:Km(t);break;case 1:He(t.type)&&hs(t);break;case 4:Ru(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,r=t.memoizedProps.value;oe(ys,a._currentValue),a._currentValue=r;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(oe(le,le.current&1),t.flags|=128,null):o&t.child.childLanes?kf(e,t,o):(oe(le,le.current&1),e=Wt(e,t,o),e!==null?e.sibling:null);oe(le,le.current&1);break;case 19:if(a=(o&t.childLanes)!==0,e.flags&128){if(a)return Ef(e,t,o);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),oe(le,le.current),a)break;return null;case 22:case 23:return t.lanes=0,xf(e,t,o)}return Wt(e,t,o)}var Cf,Nl,Pf,qf;Cf=function(e,t){for(var o=t.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break;for(;o.sibling===null;){if(o.return===null||o.return===t)return;o=o.return}o.sibling.return=o.return,o=o.sibling}};Nl=function(){};Pf=function(e,t,o,a){var r=e.memoizedProps;if(r!==a){e=t.stateNode,Qo(Rt.current);var n=null;switch(o){case"input":r=el(e,r),a=el(e,a),n=[];break;case"select":r=de({},r,{value:void 0}),a=de({},a,{value:void 0}),n=[];break;case"textarea":r=al(e,r),a=al(e,a),n=[];break;default:typeof r.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=ms)}nl(o,a);var s;o=null;for(u in r)if(!a.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var i=r[u];for(s in i)i.hasOwnProperty(s)&&(o||(o={}),o[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(_r.hasOwnProperty(u)?n||(n=[]):(n=n||[]).push(u,null));for(u in a){var l=a[u];if(i=r!=null?r[u]:void 0,a.hasOwnProperty(u)&&l!==i&&(l!=null||i!=null))if(u==="style")if(i){for(s in i)!i.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(o||(o={}),o[s]="");for(s in l)l.hasOwnProperty(s)&&i[s]!==l[s]&&(o||(o={}),o[s]=l[s])}else o||(n||(n=[]),n.push(u,o)),o=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,i=i?i.__html:void 0,l!=null&&i!==l&&(n=n||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(n=n||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(_r.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&re("scroll",e),n||i===l||(n=[])):(n=n||[]).push(u,l))}o&&(n=n||[]).push("style",o);var u=n;(t.updateQueue=u)&&(t.flags|=4)}};qf=function(e,t,o,a){o!==a&&(t.flags|=4)};function xr(e,t){if(!ie)switch(e.tailMode){case"hidden":t=e.tail;for(var o=null;t!==null;)t.alternate!==null&&(o=t),t=t.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,o=0,a=0;if(t)for(var r=e.child;r!==null;)o|=r.lanes|r.childLanes,a|=r.subtreeFlags&14680064,a|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)o|=r.lanes|r.childLanes,a|=r.subtreeFlags,a|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=a,e.childLanes=o,t}function Fy(e,t,o){var a=t.pendingProps;switch(Pu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(t),null;case 1:return He(t.type)&&fs(),Oe(t),null;case 3:return a=t.stateNode,er(),ne(Be),ne(Ne),Iu(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Rn(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,yt!==null&&(Ul(yt),yt=null))),Nl(e,t),Oe(t),null;case 5:Mu(t);var r=Qo(Xr.current);if(o=t.type,e!==null&&t.stateNode!=null)Pf(e,t,o,a,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(T(166));return Oe(t),null}if(e=Qo(Rt.current),Rn(t)){a=t.stateNode,o=t.type;var n=t.memoizedProps;switch(a[Tt]=t,a[Qr]=n,e=(t.mode&1)!==0,o){case"dialog":re("cancel",a),re("close",a);break;case"iframe":case"object":case"embed":re("load",a);break;case"video":case"audio":for(r=0;r<qr.length;r++)re(qr[r],a);break;case"source":re("error",a);break;case"img":case"image":case"link":re("error",a),re("load",a);break;case"details":re("toggle",a);break;case"input":Dd(a,n),re("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!n.multiple},re("invalid",a);break;case"textarea":Rd(a,n),re("invalid",a)}nl(o,n),r=null;for(var s in n)if(n.hasOwnProperty(s)){var i=n[s];s==="children"?typeof i=="string"?a.textContent!==i&&(n.suppressHydrationWarning!==!0&&Nn(a.textContent,i,e),r=["children",i]):typeof i=="number"&&a.textContent!==""+i&&(n.suppressHydrationWarning!==!0&&Nn(a.textContent,i,e),r=["children",""+i]):_r.hasOwnProperty(s)&&i!=null&&s==="onScroll"&&re("scroll",a)}switch(o){case"input":En(a),Nd(a,n,!0);break;case"textarea":En(a),Md(a);break;case"select":case"option":break;default:typeof n.onClick=="function"&&(a.onclick=ms)}a=r,t.updateQueue=a,a!==null&&(t.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=em(o)),e==="http://www.w3.org/1999/xhtml"?o==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=s.createElement(o,{is:a.is}):(e=s.createElement(o),o==="select"&&(s=e,a.multiple?s.multiple=!0:a.size&&(s.size=a.size))):e=s.createElementNS(e,o),e[Tt]=t,e[Qr]=a,Cf(e,t,!1,!1),t.stateNode=e;e:{switch(s=sl(o,a),o){case"dialog":re("cancel",e),re("close",e),r=a;break;case"iframe":case"object":case"embed":re("load",e),r=a;break;case"video":case"audio":for(r=0;r<qr.length;r++)re(qr[r],e);r=a;break;case"source":re("error",e),r=a;break;case"img":case"image":case"link":re("error",e),re("load",e),r=a;break;case"details":re("toggle",e),r=a;break;case"input":Dd(e,a),r=el(e,a),re("invalid",e);break;case"option":r=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},r=de({},a,{value:void 0}),re("invalid",e);break;case"textarea":Rd(e,a),r=al(e,a),re("invalid",e);break;default:r=a}nl(o,r),i=r;for(n in i)if(i.hasOwnProperty(n)){var l=i[n];n==="style"?am(e,l):n==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&tm(e,l)):n==="children"?typeof l=="string"?(o!=="textarea"||l!=="")&&jr(e,l):typeof l=="number"&&jr(e,""+l):n!=="suppressContentEditableWarning"&&n!=="suppressHydrationWarning"&&n!=="autoFocus"&&(_r.hasOwnProperty(n)?l!=null&&n==="onScroll"&&re("scroll",e):l!=null&&cu(e,n,l,s))}switch(o){case"input":En(e),Nd(e,a,!1);break;case"textarea":En(e),Md(e);break;case"option":a.value!=null&&e.setAttribute("value",""+To(a.value));break;case"select":e.multiple=!!a.multiple,n=a.value,n!=null?Ra(e,!!a.multiple,n,!1):a.defaultValue!=null&&Ra(e,!!a.multiple,a.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=ms)}switch(o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Oe(t),null;case 6:if(e&&t.stateNode!=null)qf(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(T(166));if(o=Qo(Xr.current),Qo(Rt.current),Rn(t)){if(a=t.stateNode,o=t.memoizedProps,a[Tt]=t,(n=a.nodeValue!==o)&&(e=Xe,e!==null))switch(e.tag){case 3:Nn(a.nodeValue,o,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Nn(a.nodeValue,o,(e.mode&1)!==0)}n&&(t.flags|=4)}else a=(o.nodeType===9?o:o.ownerDocument).createTextNode(a),a[Tt]=t,t.stateNode=a}return Oe(t),null;case 13:if(ne(le),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ie&&Ke!==null&&t.mode&1&&!(t.flags&128))$m(),Za(),t.flags|=98560,n=!1;else if(n=Rn(t),a!==null&&a.dehydrated!==null){if(e===null){if(!n)throw Error(T(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(T(317));n[Tt]=t}else Za(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Oe(t),n=!1}else yt!==null&&(Ul(yt),yt=null),n=!0;if(!n)return t.flags&65536?t:null}return t.flags&128?(t.lanes=o,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,t.mode&1&&(e===null||le.current&1?ye===0&&(ye=3):Wu())),t.updateQueue!==null&&(t.flags|=4),Oe(t),null);case 4:return er(),Nl(e,t),e===null&&Gr(t.stateNode.containerInfo),Oe(t),null;case 10:return Tu(t.type._context),Oe(t),null;case 17:return He(t.type)&&fs(),Oe(t),null;case 19:if(ne(le),n=t.memoizedState,n===null)return Oe(t),null;if(a=(t.flags&128)!==0,s=n.rendering,s===null)if(a)xr(n,!1);else{if(ye!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=ws(e),s!==null){for(t.flags|=128,xr(n,!1),a=s.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=o,o=t.child;o!==null;)n=o,e=a,n.flags&=14680066,s=n.alternate,s===null?(n.childLanes=0,n.lanes=e,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=s.childLanes,n.lanes=s.lanes,n.child=s.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=s.memoizedProps,n.memoizedState=s.memoizedState,n.updateQueue=s.updateQueue,n.type=s.type,e=s.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),o=o.sibling;return oe(le,le.current&1|2),t.child}e=e.sibling}n.tail!==null&&me()>or&&(t.flags|=128,a=!0,xr(n,!1),t.lanes=4194304)}else{if(!a)if(e=ws(s),e!==null){if(t.flags|=128,a=!0,o=e.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),xr(n,!0),n.tail===null&&n.tailMode==="hidden"&&!s.alternate&&!ie)return Oe(t),null}else 2*me()-n.renderingStartTime>or&&o!==1073741824&&(t.flags|=128,a=!0,xr(n,!1),t.lanes=4194304);n.isBackwards?(s.sibling=t.child,t.child=s):(o=n.last,o!==null?o.sibling=s:t.child=s,n.last=s)}return n.tail!==null?(t=n.tail,n.rendering=t,n.tail=t.sibling,n.renderingStartTime=me(),t.sibling=null,o=le.current,oe(le,a?o&1|2:o&1),t):(Oe(t),null);case 22:case 23:return Gu(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&t.mode&1?Ge&1073741824&&(Oe(t),t.subtreeFlags&6&&(t.flags|=8192)):Oe(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function By(e,t){switch(Pu(t),t.tag){case 1:return He(t.type)&&fs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return er(),ne(Be),ne(Ne),Iu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Mu(t),null;case 13:if(ne(le),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));Za()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ne(le),null;case 4:return er(),null;case 10:return Tu(t.type._context),null;case 22:case 23:return Gu(),null;case 24:return null;default:return null}}var Ln=!1,De=!1,Hy=typeof WeakSet=="function"?WeakSet:Set,L=null;function Da(e,t){var o=e.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(a){pe(e,t,a)}else o.current=null}function Rl(e,t,o){try{o()}catch(a){pe(e,t,a)}}var kc=!1;function $y(e,t){if(gl=ds,e=Dm(),Eu(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var a=o.getSelection&&o.getSelection();if(a&&a.rangeCount!==0){o=a.anchorNode;var r=a.anchorOffset,n=a.focusNode;a=a.focusOffset;try{o.nodeType,n.nodeType}catch{o=null;break e}var s=0,i=-1,l=-1,u=0,d=0,p=e,h=null;t:for(;;){for(var c;p!==o||r!==0&&p.nodeType!==3||(i=s+r),p!==n||a!==0&&p.nodeType!==3||(l=s+a),p.nodeType===3&&(s+=p.nodeValue.length),(c=p.firstChild)!==null;)h=p,p=c;for(;;){if(p===e)break t;if(h===o&&++u===r&&(i=s),h===n&&++d===a&&(l=s),(c=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=c}o=i===-1||l===-1?null:{start:i,end:l}}else o=null}o=o||{start:0,end:0}}else o=null;for(vl={focusedElem:e,selectionRange:o},ds=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var v=S.memoizedProps,x=S.memoizedState,f=t.stateNode,m=f.getSnapshotBeforeUpdate(t.elementType===t.type?v:ft(t.type,v),x);f.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(w){pe(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return S=kc,kc=!1,S}function Mr(e,t,o){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var r=a=a.next;do{if((r.tag&e)===e){var n=r.destroy;r.destroy=void 0,n!==void 0&&Rl(t,o,n)}r=r.next}while(r!==a)}}function Hs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var o=t=t.next;do{if((o.tag&e)===e){var a=o.create;o.destroy=a()}o=o.next}while(o!==t)}}function Ml(e){var t=e.ref;if(t!==null){var o=e.stateNode;switch(e.tag){case 5:e=o;break;default:e=o}typeof t=="function"?t(e):t.current=e}}function Af(e){var t=e.alternate;t!==null&&(e.alternate=null,Af(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Tt],delete t[Qr],delete t[xl],delete t[Py],delete t[qy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Of(e){return e.tag===5||e.tag===3||e.tag===4}function Ec(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Of(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Il(e,t,o){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?o.nodeType===8?o.parentNode.insertBefore(e,t):o.insertBefore(e,t):(o.nodeType===8?(t=o.parentNode,t.insertBefore(e,o)):(t=o,t.appendChild(e)),o=o._reactRootContainer,o!=null||t.onclick!==null||(t.onclick=ms));else if(a!==4&&(e=e.child,e!==null))for(Il(e,t,o),e=e.sibling;e!==null;)Il(e,t,o),e=e.sibling}function Ll(e,t,o){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?o.insertBefore(e,t):o.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(Ll(e,t,o),e=e.sibling;e!==null;)Ll(e,t,o),e=e.sibling}var Ee=null,vt=!1;function ro(e,t,o){for(o=o.child;o!==null;)Tf(e,t,o),o=o.sibling}function Tf(e,t,o){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(Is,o)}catch{}switch(o.tag){case 5:De||Da(o,t);case 6:var a=Ee,r=vt;Ee=null,ro(e,t,o),Ee=a,vt=r,Ee!==null&&(vt?(e=Ee,o=o.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)):Ee.removeChild(o.stateNode));break;case 18:Ee!==null&&(vt?(e=Ee,o=o.stateNode,e.nodeType===8?Di(e.parentNode,o):e.nodeType===1&&Di(e,o),Hr(e)):Di(Ee,o.stateNode));break;case 4:a=Ee,r=vt,Ee=o.stateNode.containerInfo,vt=!0,ro(e,t,o),Ee=a,vt=r;break;case 0:case 11:case 14:case 15:if(!De&&(a=o.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){r=a=a.next;do{var n=r,s=n.destroy;n=n.tag,s!==void 0&&(n&2||n&4)&&Rl(o,t,s),r=r.next}while(r!==a)}ro(e,t,o);break;case 1:if(!De&&(Da(o,t),a=o.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=o.memoizedProps,a.state=o.memoizedState,a.componentWillUnmount()}catch(i){pe(o,t,i)}ro(e,t,o);break;case 21:ro(e,t,o);break;case 22:o.mode&1?(De=(a=De)||o.memoizedState!==null,ro(e,t,o),De=a):ro(e,t,o);break;default:ro(e,t,o)}}function Cc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var o=e.stateNode;o===null&&(o=e.stateNode=new Hy),t.forEach(function(a){var r=Jy.bind(null,e,a);o.has(a)||(o.add(a),a.then(r,r))})}}function pt(e,t){var o=t.deletions;if(o!==null)for(var a=0;a<o.length;a++){var r=o[a];try{var n=e,s=t,i=s;e:for(;i!==null;){switch(i.tag){case 5:Ee=i.stateNode,vt=!1;break e;case 3:Ee=i.stateNode.containerInfo,vt=!0;break e;case 4:Ee=i.stateNode.containerInfo,vt=!0;break e}i=i.return}if(Ee===null)throw Error(T(160));Tf(n,s,r),Ee=null,vt=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){pe(r,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Df(t,e),t=t.sibling}function Df(e,t){var o=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(pt(t,e),Ct(e),a&4){try{Mr(3,e,e.return),Hs(3,e)}catch(v){pe(e,e.return,v)}try{Mr(5,e,e.return)}catch(v){pe(e,e.return,v)}}break;case 1:pt(t,e),Ct(e),a&512&&o!==null&&Da(o,o.return);break;case 5:if(pt(t,e),Ct(e),a&512&&o!==null&&Da(o,o.return),e.flags&32){var r=e.stateNode;try{jr(r,"")}catch(v){pe(e,e.return,v)}}if(a&4&&(r=e.stateNode,r!=null)){var n=e.memoizedProps,s=o!==null?o.memoizedProps:n,i=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{i==="input"&&n.type==="radio"&&n.name!=null&&Zp(r,n),sl(i,s);var u=sl(i,n);for(s=0;s<l.length;s+=2){var d=l[s],p=l[s+1];d==="style"?am(r,p):d==="dangerouslySetInnerHTML"?tm(r,p):d==="children"?jr(r,p):cu(r,d,p,u)}switch(i){case"input":tl(r,n);break;case"textarea":Jp(r,n);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!n.multiple;var c=n.value;c!=null?Ra(r,!!n.multiple,c,!1):h!==!!n.multiple&&(n.defaultValue!=null?Ra(r,!!n.multiple,n.defaultValue,!0):Ra(r,!!n.multiple,n.multiple?[]:"",!1))}r[Qr]=n}catch(v){pe(e,e.return,v)}}break;case 6:if(pt(t,e),Ct(e),a&4){if(e.stateNode===null)throw Error(T(162));r=e.stateNode,n=e.memoizedProps;try{r.nodeValue=n}catch(v){pe(e,e.return,v)}}break;case 3:if(pt(t,e),Ct(e),a&4&&o!==null&&o.memoizedState.isDehydrated)try{Hr(t.containerInfo)}catch(v){pe(e,e.return,v)}break;case 4:pt(t,e),Ct(e);break;case 13:pt(t,e),Ct(e),r=e.child,r.flags&8192&&(n=r.memoizedState!==null,r.stateNode.isHidden=n,!n||r.alternate!==null&&r.alternate.memoizedState!==null||($u=me())),a&4&&Cc(e);break;case 22:if(d=o!==null&&o.memoizedState!==null,e.mode&1?(De=(u=De)||d,pt(t,e),De=u):pt(t,e),Ct(e),a&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(L=e,d=e.child;d!==null;){for(p=L=d;L!==null;){switch(h=L,c=h.child,h.tag){case 0:case 11:case 14:case 15:Mr(4,h,h.return);break;case 1:Da(h,h.return);var S=h.stateNode;if(typeof S.componentWillUnmount=="function"){a=h,o=h.return;try{t=a,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(v){pe(a,o,v)}}break;case 5:Da(h,h.return);break;case 22:if(h.memoizedState!==null){qc(p);continue}}c!==null?(c.return=h,L=c):qc(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{r=p.stateNode,u?(n=r.style,typeof n.setProperty=="function"?n.setProperty("display","none","important"):n.display="none"):(i=p.stateNode,l=p.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,i.style.display=om("display",s))}catch(v){pe(e,e.return,v)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(v){pe(e,e.return,v)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:pt(t,e),Ct(e),a&4&&Cc(e);break;case 21:break;default:pt(t,e),Ct(e)}}function Ct(e){var t=e.flags;if(t&2){try{e:{for(var o=e.return;o!==null;){if(Of(o)){var a=o;break e}o=o.return}throw Error(T(160))}switch(a.tag){case 5:var r=a.stateNode;a.flags&32&&(jr(r,""),a.flags&=-33);var n=Ec(e);Ll(e,n,r);break;case 3:case 4:var s=a.stateNode.containerInfo,i=Ec(e);Il(e,i,s);break;default:throw Error(T(161))}}catch(l){pe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Vy(e,t,o){L=e,Nf(e)}function Nf(e,t,o){for(var a=(e.mode&1)!==0;L!==null;){var r=L,n=r.child;if(r.tag===22&&a){var s=r.memoizedState!==null||Ln;if(!s){var i=r.alternate,l=i!==null&&i.memoizedState!==null||De;i=Ln;var u=De;if(Ln=s,(De=l)&&!u)for(L=r;L!==null;)s=L,l=s.child,s.tag===22&&s.memoizedState!==null?Ac(r):l!==null?(l.return=s,L=l):Ac(r);for(;n!==null;)L=n,Nf(n),n=n.sibling;L=r,Ln=i,De=u}Pc(e)}else r.subtreeFlags&8772&&n!==null?(n.return=r,L=n):Pc(e)}}function Pc(e){for(;L!==null;){var t=L;if(t.flags&8772){var o=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:De||Hs(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!De)if(o===null)a.componentDidMount();else{var r=t.elementType===t.type?o.memoizedProps:ft(t.type,o.memoizedProps);a.componentDidUpdate(r,o.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var n=t.updateQueue;n!==null&&dc(t,n,a);break;case 3:var s=t.updateQueue;if(s!==null){if(o=null,t.child!==null)switch(t.child.tag){case 5:o=t.child.stateNode;break;case 1:o=t.child.stateNode}dc(t,s,o)}break;case 5:var i=t.stateNode;if(o===null&&t.flags&4){o=i;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&o.focus();break;case"img":l.src&&(o.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Hr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}De||t.flags&512&&Ml(t)}catch(h){pe(t,t.return,h)}}if(t===e){L=null;break}if(o=t.sibling,o!==null){o.return=t.return,L=o;break}L=t.return}}function qc(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var o=t.sibling;if(o!==null){o.return=t.return,L=o;break}L=t.return}}function Ac(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var o=t.return;try{Hs(4,t)}catch(l){pe(t,o,l)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var r=t.return;try{a.componentDidMount()}catch(l){pe(t,r,l)}}var n=t.return;try{Ml(t)}catch(l){pe(t,n,l)}break;case 5:var s=t.return;try{Ml(t)}catch(l){pe(t,s,l)}}}catch(l){pe(t,t.return,l)}if(t===e){L=null;break}var i=t.sibling;if(i!==null){i.return=t.return,L=i;break}L=t.return}}var Gy=Math.ceil,Es=Xt.ReactCurrentDispatcher,Bu=Xt.ReactCurrentOwner,st=Xt.ReactCurrentBatchConfig,Z=0,Se=null,he=null,Ce=0,Ge=0,Na=zo(0),ye=0,en=null,ia=0,$s=0,Hu=0,Ir=null,Ue=null,$u=0,or=1/0,_t=null,Cs=!1,zl=null,qo=null,zn=!1,xo=null,Ps=0,Lr=0,_l=null,Jn=-1,es=0;function Le(){return Z&6?me():Jn!==-1?Jn:Jn=me()}function Ao(e){return e.mode&1?Z&2&&Ce!==0?Ce&-Ce:Oy.transition!==null?(es===0&&(es=hm()),es):(e=ee,e!==0||(e=window.event,e=e===void 0?16:Sm(e.type)),e):1}function xt(e,t,o,a){if(50<Lr)throw Lr=0,_l=null,Error(T(185));cn(e,o,a),(!(Z&2)||e!==Se)&&(e===Se&&(!(Z&2)&&($s|=o),ye===4&&po(e,Ce)),$e(e,a),o===1&&Z===0&&!(t.mode&1)&&(or=me()+500,Us&&_o()))}function $e(e,t){var o=e.callbackNode;Ov(e,t);var a=us(e,e===Se?Ce:0);if(a===0)o!==null&&zd(o),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(o!=null&&zd(o),t===1)e.tag===0?Ay(Oc.bind(null,e)):Fm(Oc.bind(null,e)),Ey(function(){!(Z&6)&&_o()}),o=null;else{switch(gm(a)){case 1:o=gu;break;case 4:o=mm;break;case 16:o=ls;break;case 536870912:o=fm;break;default:o=ls}o=Uf(o,Rf.bind(null,e))}e.callbackPriority=t,e.callbackNode=o}}function Rf(e,t){if(Jn=-1,es=0,Z&6)throw Error(T(327));var o=e.callbackNode;if(_a()&&e.callbackNode!==o)return null;var a=us(e,e===Se?Ce:0);if(a===0)return null;if(a&30||a&e.expiredLanes||t)t=qs(e,a);else{t=a;var r=Z;Z|=2;var n=If();(Se!==e||Ce!==t)&&(_t=null,or=me()+500,ta(e,t));do try{Ky();break}catch(i){Mf(e,i)}while(!0);Ou(),Es.current=n,Z=r,he!==null?t=0:(Se=null,Ce=0,t=ye)}if(t!==0){if(t===2&&(r=cl(e),r!==0&&(a=r,t=jl(e,r))),t===1)throw o=en,ta(e,0),po(e,a),$e(e,me()),o;if(t===6)po(e,a);else{if(r=e.current.alternate,!(a&30)&&!Wy(r)&&(t=qs(e,a),t===2&&(n=cl(e),n!==0&&(a=n,t=jl(e,n))),t===1))throw o=en,ta(e,0),po(e,a),$e(e,me()),o;switch(e.finishedWork=r,e.finishedLanes=a,t){case 0:case 1:throw Error(T(345));case 2:Vo(e,Ue,_t);break;case 3:if(po(e,a),(a&130023424)===a&&(t=$u+500-me(),10<t)){if(us(e,0)!==0)break;if(r=e.suspendedLanes,(r&a)!==a){Le(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=bl(Vo.bind(null,e,Ue,_t),t);break}Vo(e,Ue,_t);break;case 4:if(po(e,a),(a&4194240)===a)break;for(t=e.eventTimes,r=-1;0<a;){var s=31-bt(a);n=1<<s,s=t[s],s>r&&(r=s),a&=~n}if(a=r,a=me()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Gy(a/1960))-a,10<a){e.timeoutHandle=bl(Vo.bind(null,e,Ue,_t),a);break}Vo(e,Ue,_t);break;case 5:Vo(e,Ue,_t);break;default:throw Error(T(329))}}}return $e(e,me()),e.callbackNode===o?Rf.bind(null,e):null}function jl(e,t){var o=Ir;return e.current.memoizedState.isDehydrated&&(ta(e,t).flags|=256),e=qs(e,t),e!==2&&(t=Ue,Ue=o,t!==null&&Ul(t)),e}function Ul(e){Ue===null?Ue=e:Ue.push.apply(Ue,e)}function Wy(e){for(var t=e;;){if(t.flags&16384){var o=t.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var a=0;a<o.length;a++){var r=o[a],n=r.getSnapshot;r=r.value;try{if(!wt(n(),r))return!1}catch{return!1}}}if(o=t.child,t.subtreeFlags&16384&&o!==null)o.return=t,t=o;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function po(e,t){for(t&=~Hu,t&=~$s,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var o=31-bt(t),a=1<<o;e[o]=-1,t&=~a}}function Oc(e){if(Z&6)throw Error(T(327));_a();var t=us(e,0);if(!(t&1))return $e(e,me()),null;var o=qs(e,t);if(e.tag!==0&&o===2){var a=cl(e);a!==0&&(t=a,o=jl(e,a))}if(o===1)throw o=en,ta(e,0),po(e,t),$e(e,me()),o;if(o===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Vo(e,Ue,_t),$e(e,me()),null}function Vu(e,t){var o=Z;Z|=1;try{return e(t)}finally{Z=o,Z===0&&(or=me()+500,Us&&_o())}}function la(e){xo!==null&&xo.tag===0&&!(Z&6)&&_a();var t=Z;Z|=1;var o=st.transition,a=ee;try{if(st.transition=null,ee=1,e)return e()}finally{ee=a,st.transition=o,Z=t,!(Z&6)&&_o()}}function Gu(){Ge=Na.current,ne(Na)}function ta(e,t){e.finishedWork=null,e.finishedLanes=0;var o=e.timeoutHandle;if(o!==-1&&(e.timeoutHandle=-1,ky(o)),he!==null)for(o=he.return;o!==null;){var a=o;switch(Pu(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&fs();break;case 3:er(),ne(Be),ne(Ne),Iu();break;case 5:Mu(a);break;case 4:er();break;case 13:ne(le);break;case 19:ne(le);break;case 10:Tu(a.type._context);break;case 22:case 23:Gu()}o=o.return}if(Se=e,he=e=Oo(e.current,null),Ce=Ge=t,ye=0,en=null,Hu=$s=ia=0,Ue=Ir=null,Wo!==null){for(t=0;t<Wo.length;t++)if(o=Wo[t],a=o.interleaved,a!==null){o.interleaved=null;var r=a.next,n=o.pending;if(n!==null){var s=n.next;n.next=r,a.next=s}o.pending=a}Wo=null}return e}function Mf(e,t){do{var o=he;try{if(Ou(),Xn.current=ks,Ss){for(var a=ue.memoizedState;a!==null;){var r=a.queue;r!==null&&(r.pending=null),a=a.next}Ss=!1}if(sa=0,we=ge=ue=null,Rr=!1,Yr=0,Bu.current=null,o===null||o.return===null){ye=1,en=t,he=null;break}e:{var n=e,s=o.return,i=o,l=t;if(t=Ce,i.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=i,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var c=gc(s);if(c!==null){c.flags&=-257,vc(c,s,i,n,t),c.mode&1&&hc(n,u,t),t=c,l=u;var S=t.updateQueue;if(S===null){var v=new Set;v.add(l),t.updateQueue=v}else S.add(l);break e}else{if(!(t&1)){hc(n,u,t),Wu();break e}l=Error(T(426))}}else if(ie&&i.mode&1){var x=gc(s);if(x!==null){!(x.flags&65536)&&(x.flags|=256),vc(x,s,i,n,t),qu(tr(l,i));break e}}n=l=tr(l,i),ye!==4&&(ye=2),Ir===null?Ir=[n]:Ir.push(n),n=s;do{switch(n.tag){case 3:n.flags|=65536,t&=-t,n.lanes|=t;var f=vf(n,l,t);uc(n,f);break e;case 1:i=l;var m=n.type,g=n.stateNode;if(!(n.flags&128)&&(typeof m.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(qo===null||!qo.has(g)))){n.flags|=65536,t&=-t,n.lanes|=t;var w=yf(n,i,t);uc(n,w);break e}}n=n.return}while(n!==null)}zf(o)}catch(k){t=k,he===o&&o!==null&&(he=o=o.return);continue}break}while(!0)}function If(){var e=Es.current;return Es.current=ks,e===null?ks:e}function Wu(){(ye===0||ye===3||ye===2)&&(ye=4),Se===null||!(ia&268435455)&&!($s&268435455)||po(Se,Ce)}function qs(e,t){var o=Z;Z|=2;var a=If();(Se!==e||Ce!==t)&&(_t=null,ta(e,t));do try{Qy();break}catch(r){Mf(e,r)}while(!0);if(Ou(),Z=o,Es.current=a,he!==null)throw Error(T(261));return Se=null,Ce=0,ye}function Qy(){for(;he!==null;)Lf(he)}function Ky(){for(;he!==null&&!xv();)Lf(he)}function Lf(e){var t=jf(e.alternate,e,Ge);e.memoizedProps=e.pendingProps,t===null?zf(e):he=t,Bu.current=null}function zf(e){var t=e;do{var o=t.alternate;if(e=t.return,t.flags&32768){if(o=By(o,t),o!==null){o.flags&=32767,he=o;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ye=6,he=null;return}}else if(o=Fy(o,t,Ge),o!==null){he=o;return}if(t=t.sibling,t!==null){he=t;return}he=t=e}while(t!==null);ye===0&&(ye=5)}function Vo(e,t,o){var a=ee,r=st.transition;try{st.transition=null,ee=1,Xy(e,t,o,a)}finally{st.transition=r,ee=a}return null}function Xy(e,t,o,a){do _a();while(xo!==null);if(Z&6)throw Error(T(327));o=e.finishedWork;var r=e.finishedLanes;if(o===null)return null;if(e.finishedWork=null,e.finishedLanes=0,o===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var n=o.lanes|o.childLanes;if(Tv(e,n),e===Se&&(he=Se=null,Ce=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||zn||(zn=!0,Uf(ls,function(){return _a(),null})),n=(o.flags&15990)!==0,o.subtreeFlags&15990||n){n=st.transition,st.transition=null;var s=ee;ee=1;var i=Z;Z|=4,Bu.current=null,$y(e,o),Df(o,e),gy(vl),ds=!!gl,vl=gl=null,e.current=o,Vy(o),wv(),Z=i,ee=s,st.transition=n}else e.current=o;if(zn&&(zn=!1,xo=e,Ps=r),n=e.pendingLanes,n===0&&(qo=null),Ev(o.stateNode),$e(e,me()),t!==null)for(a=e.onRecoverableError,o=0;o<t.length;o++)r=t[o],a(r.value,{componentStack:r.stack,digest:r.digest});if(Cs)throw Cs=!1,e=zl,zl=null,e;return Ps&1&&e.tag!==0&&_a(),n=e.pendingLanes,n&1?e===_l?Lr++:(Lr=0,_l=e):Lr=0,_o(),null}function _a(){if(xo!==null){var e=gm(Ps),t=st.transition,o=ee;try{if(st.transition=null,ee=16>e?16:e,xo===null)var a=!1;else{if(e=xo,xo=null,Ps=0,Z&6)throw Error(T(331));var r=Z;for(Z|=4,L=e.current;L!==null;){var n=L,s=n.child;if(L.flags&16){var i=n.deletions;if(i!==null){for(var l=0;l<i.length;l++){var u=i[l];for(L=u;L!==null;){var d=L;switch(d.tag){case 0:case 11:case 15:Mr(8,d,n)}var p=d.child;if(p!==null)p.return=d,L=p;else for(;L!==null;){d=L;var h=d.sibling,c=d.return;if(Af(d),d===u){L=null;break}if(h!==null){h.return=c,L=h;break}L=c}}}var S=n.alternate;if(S!==null){var v=S.child;if(v!==null){S.child=null;do{var x=v.sibling;v.sibling=null,v=x}while(v!==null)}}L=n}}if(n.subtreeFlags&2064&&s!==null)s.return=n,L=s;else e:for(;L!==null;){if(n=L,n.flags&2048)switch(n.tag){case 0:case 11:case 15:Mr(9,n,n.return)}var f=n.sibling;if(f!==null){f.return=n.return,L=f;break e}L=n.return}}var m=e.current;for(L=m;L!==null;){s=L;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,L=g;else e:for(s=m;L!==null;){if(i=L,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:Hs(9,i)}}catch(k){pe(i,i.return,k)}if(i===s){L=null;break e}var w=i.sibling;if(w!==null){w.return=i.return,L=w;break e}L=i.return}}if(Z=r,_o(),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(Is,e)}catch{}a=!0}return a}finally{ee=o,st.transition=t}}return!1}function Tc(e,t,o){t=tr(o,t),t=vf(e,t,1),e=Po(e,t,1),t=Le(),e!==null&&(cn(e,1,t),$e(e,t))}function pe(e,t,o){if(e.tag===3)Tc(e,e,o);else for(;t!==null;){if(t.tag===3){Tc(t,e,o);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(qo===null||!qo.has(a))){e=tr(o,e),e=yf(t,e,1),t=Po(t,e,1),e=Le(),t!==null&&(cn(t,1,e),$e(t,e));break}}t=t.return}}function Yy(e,t,o){var a=e.pingCache;a!==null&&a.delete(t),t=Le(),e.pingedLanes|=e.suspendedLanes&o,Se===e&&(Ce&o)===o&&(ye===4||ye===3&&(Ce&130023424)===Ce&&500>me()-$u?ta(e,0):Hu|=o),$e(e,t)}function _f(e,t){t===0&&(e.mode&1?(t=qn,qn<<=1,!(qn&130023424)&&(qn=4194304)):t=1);var o=Le();e=Gt(e,t),e!==null&&(cn(e,t,o),$e(e,o))}function Zy(e){var t=e.memoizedState,o=0;t!==null&&(o=t.retryLane),_f(e,o)}function Jy(e,t){var o=0;switch(e.tag){case 13:var a=e.stateNode,r=e.memoizedState;r!==null&&(o=r.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(T(314))}a!==null&&a.delete(t),_f(e,o)}var jf;jf=function(e,t,o){if(e!==null)if(e.memoizedProps!==t.pendingProps||Be.current)Fe=!0;else{if(!(e.lanes&o)&&!(t.flags&128))return Fe=!1,Uy(e,t,o);Fe=!!(e.flags&131072)}else Fe=!1,ie&&t.flags&1048576&&Bm(t,vs,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;Zn(e,t),e=t.pendingProps;var r=Ya(t,Ne.current);za(t,o),r=zu(null,t,a,e,r,o);var n=_u();return t.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,He(a)?(n=!0,hs(t)):n=!1,t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Nu(t),r.updater=Bs,t.stateNode=r,r._reactInternals=t,Pl(t,a,e,o),t=Ol(null,t,a,!0,n,o)):(t.tag=0,ie&&n&&Cu(t),Me(null,t,r,o),t=t.child),t;case 16:a=t.elementType;e:{switch(Zn(e,t),e=t.pendingProps,r=a._init,a=r(a._payload),t.type=a,r=t.tag=tb(a),e=ft(a,e),r){case 0:t=Al(null,t,a,e,o);break e;case 1:t=xc(null,t,a,e,o);break e;case 11:t=yc(null,t,a,e,o);break e;case 14:t=bc(null,t,a,ft(a.type,e),o);break e}throw Error(T(306,a,""))}return t;case 0:return a=t.type,r=t.pendingProps,r=t.elementType===a?r:ft(a,r),Al(e,t,a,r,o);case 1:return a=t.type,r=t.pendingProps,r=t.elementType===a?r:ft(a,r),xc(e,t,a,r,o);case 3:e:{if(Sf(t),e===null)throw Error(T(387));a=t.pendingProps,n=t.memoizedState,r=n.element,Qm(e,t),xs(t,a,null,o);var s=t.memoizedState;if(a=s.element,n.isDehydrated)if(n={element:a,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=n,t.memoizedState=n,t.flags&256){r=tr(Error(T(423)),t),t=wc(e,t,a,o,r);break e}else if(a!==r){r=tr(Error(T(424)),t),t=wc(e,t,a,o,r);break e}else for(Ke=Co(t.stateNode.containerInfo.firstChild),Xe=t,ie=!0,yt=null,o=Gm(t,null,a,o),t.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Za(),a===r){t=Wt(e,t,o);break e}Me(e,t,a,o)}t=t.child}return t;case 5:return Km(t),e===null&&kl(t),a=t.type,r=t.pendingProps,n=e!==null?e.memoizedProps:null,s=r.children,yl(a,r)?s=null:n!==null&&yl(a,n)&&(t.flags|=32),wf(e,t),Me(e,t,s,o),t.child;case 6:return e===null&&kl(t),null;case 13:return kf(e,t,o);case 4:return Ru(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Ja(t,null,a,o):Me(e,t,a,o),t.child;case 11:return a=t.type,r=t.pendingProps,r=t.elementType===a?r:ft(a,r),yc(e,t,a,r,o);case 7:return Me(e,t,t.pendingProps,o),t.child;case 8:return Me(e,t,t.pendingProps.children,o),t.child;case 12:return Me(e,t,t.pendingProps.children,o),t.child;case 10:e:{if(a=t.type._context,r=t.pendingProps,n=t.memoizedProps,s=r.value,oe(ys,a._currentValue),a._currentValue=s,n!==null)if(wt(n.value,s)){if(n.children===r.children&&!Be.current){t=Wt(e,t,o);break e}}else for(n=t.child,n!==null&&(n.return=t);n!==null;){var i=n.dependencies;if(i!==null){s=n.child;for(var l=i.firstContext;l!==null;){if(l.context===a){if(n.tag===1){l=Ht(-1,o&-o),l.tag=2;var u=n.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}n.lanes|=o,l=n.alternate,l!==null&&(l.lanes|=o),El(n.return,o,t),i.lanes|=o;break}l=l.next}}else if(n.tag===10)s=n.type===t.type?null:n.child;else if(n.tag===18){if(s=n.return,s===null)throw Error(T(341));s.lanes|=o,i=s.alternate,i!==null&&(i.lanes|=o),El(s,o,t),s=n.sibling}else s=n.child;if(s!==null)s.return=n;else for(s=n;s!==null;){if(s===t){s=null;break}if(n=s.sibling,n!==null){n.return=s.return,s=n;break}s=s.return}n=s}Me(e,t,r.children,o),t=t.child}return t;case 9:return r=t.type,a=t.pendingProps.children,za(t,o),r=it(r),a=a(r),t.flags|=1,Me(e,t,a,o),t.child;case 14:return a=t.type,r=ft(a,t.pendingProps),r=ft(a.type,r),bc(e,t,a,r,o);case 15:return bf(e,t,t.type,t.pendingProps,o);case 17:return a=t.type,r=t.pendingProps,r=t.elementType===a?r:ft(a,r),Zn(e,t),t.tag=1,He(a)?(e=!0,hs(t)):e=!1,za(t,o),gf(t,a,r),Pl(t,a,r,o),Ol(null,t,a,!0,e,o);case 19:return Ef(e,t,o);case 22:return xf(e,t,o)}throw Error(T(156,t.tag))};function Uf(e,t){return pm(e,t)}function eb(e,t,o,a){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nt(e,t,o,a){return new eb(e,t,o,a)}function Qu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function tb(e){if(typeof e=="function")return Qu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===mu)return 11;if(e===fu)return 14}return 2}function Oo(e,t){var o=e.alternate;return o===null?(o=nt(e.tag,t,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=t,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&14680064,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,t=e.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o}function ts(e,t,o,a,r,n){var s=2;if(a=e,typeof e=="function")Qu(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Sa:return oa(o.children,r,n,t);case pu:s=8,r|=8;break;case Xi:return e=nt(12,o,t,r|2),e.elementType=Xi,e.lanes=n,e;case Yi:return e=nt(13,o,t,r),e.elementType=Yi,e.lanes=n,e;case Zi:return e=nt(19,o,t,r),e.elementType=Zi,e.lanes=n,e;case Kp:return Vs(o,r,n,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Wp:s=10;break e;case Qp:s=9;break e;case mu:s=11;break e;case fu:s=14;break e;case lo:s=16,a=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=nt(s,o,t,r),t.elementType=e,t.type=a,t.lanes=n,t}function oa(e,t,o,a){return e=nt(7,e,a,t),e.lanes=o,e}function Vs(e,t,o,a){return e=nt(22,e,a,t),e.elementType=Kp,e.lanes=o,e.stateNode={isHidden:!1},e}function ji(e,t,o){return e=nt(6,e,null,t),e.lanes=o,e}function Ui(e,t,o){return t=nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=o,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ob(e,t,o,a,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xi(0),this.expirationTimes=xi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xi(0),this.identifierPrefix=a,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ku(e,t,o,a,r,n,s,i,l){return e=new ob(e,t,o,i,l),t===1?(t=1,n===!0&&(t|=8)):t=0,n=nt(3,null,null,t),e.current=n,n.stateNode=e,n.memoizedState={element:a,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nu(n),e}function ab(e,t,o){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wa,key:a==null?null:""+a,children:e,containerInfo:t,implementation:o}}function Ff(e){if(!e)return Do;e=e._reactInternals;e:{if(ca(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(He(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var o=e.type;if(He(o))return Um(e,o,t)}return t}function Bf(e,t,o,a,r,n,s,i,l){return e=Ku(o,a,!0,e,r,n,s,i,l),e.context=Ff(null),o=e.current,a=Le(),r=Ao(o),n=Ht(a,r),n.callback=t??null,Po(o,n,r),e.current.lanes=r,cn(e,r,a),$e(e,a),e}function Gs(e,t,o,a){var r=t.current,n=Le(),s=Ao(r);return o=Ff(o),t.context===null?t.context=o:t.pendingContext=o,t=Ht(n,s),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=Po(r,t,s),e!==null&&(xt(e,r,s,n),Kn(e,r,s)),s}function As(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Dc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<t?o:t}}function Xu(e,t){Dc(e,t),(e=e.alternate)&&Dc(e,t)}function rb(){return null}var Hf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Yu(e){this._internalRoot=e}Ws.prototype.render=Yu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));Gs(e,t,null,null)};Ws.prototype.unmount=Yu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;la(function(){Gs(null,e,null,null)}),t[Vt]=null}};function Ws(e){this._internalRoot=e}Ws.prototype.unstable_scheduleHydration=function(e){if(e){var t=bm();e={blockedOn:null,target:e,priority:t};for(var o=0;o<co.length&&t!==0&&t<co[o].priority;o++);co.splice(o,0,e),o===0&&wm(e)}};function Zu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Qs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Nc(){}function nb(e,t,o,a,r){if(r){if(typeof a=="function"){var n=a;a=function(){var u=As(s);n.call(u)}}var s=Bf(t,a,e,0,null,!1,!1,"",Nc);return e._reactRootContainer=s,e[Vt]=s.current,Gr(e.nodeType===8?e.parentNode:e),la(),s}for(;r=e.lastChild;)e.removeChild(r);if(typeof a=="function"){var i=a;a=function(){var u=As(l);i.call(u)}}var l=Ku(e,0,!1,null,null,!1,!1,"",Nc);return e._reactRootContainer=l,e[Vt]=l.current,Gr(e.nodeType===8?e.parentNode:e),la(function(){Gs(t,l,o,a)}),l}function Ks(e,t,o,a,r){var n=o._reactRootContainer;if(n){var s=n;if(typeof r=="function"){var i=r;r=function(){var l=As(s);i.call(l)}}Gs(t,s,e,r)}else s=nb(o,t,e,r,a);return As(s)}vm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var o=Pr(t.pendingLanes);o!==0&&(vu(t,o|1),$e(t,me()),!(Z&6)&&(or=me()+500,_o()))}break;case 13:la(function(){var a=Gt(e,1);if(a!==null){var r=Le();xt(a,e,1,r)}}),Xu(e,1)}};yu=function(e){if(e.tag===13){var t=Gt(e,134217728);if(t!==null){var o=Le();xt(t,e,134217728,o)}Xu(e,134217728)}};ym=function(e){if(e.tag===13){var t=Ao(e),o=Gt(e,t);if(o!==null){var a=Le();xt(o,e,t,a)}Xu(e,t)}};bm=function(){return ee};xm=function(e,t){var o=ee;try{return ee=e,t()}finally{ee=o}};ll=function(e,t,o){switch(t){case"input":if(tl(e,o),t=o.name,o.type==="radio"&&t!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<o.length;t++){var a=o[t];if(a!==e&&a.form===e.form){var r=js(a);if(!r)throw Error(T(90));Yp(a),tl(a,r)}}}break;case"textarea":Jp(e,o);break;case"select":t=o.value,t!=null&&Ra(e,!!o.multiple,t,!1)}};sm=Vu;im=la;var sb={usingClientEntryPoint:!1,Events:[mn,Pa,js,rm,nm,Vu]},wr={findFiberByHostInstance:Go,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ib={bundleType:wr.bundleType,version:wr.version,rendererPackageName:wr.rendererPackageName,rendererConfig:wr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=dm(e),e===null?null:e.stateNode},findFiberByHostInstance:wr.findFiberByHostInstance||rb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _n=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_n.isDisabled&&_n.supportsFiber)try{Is=_n.inject(ib),Nt=_n}catch{}}Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sb;Je.createPortal=function(e,t){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zu(t))throw Error(T(200));return ab(e,t,null,o)};Je.createRoot=function(e,t){if(!Zu(e))throw Error(T(299));var o=!1,a="",r=Hf;return t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=Ku(e,1,!1,null,null,o,!1,a,r),e[Vt]=t.current,Gr(e.nodeType===8?e.parentNode:e),new Yu(t)};Je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=dm(t),e=e===null?null:e.stateNode,e};Je.flushSync=function(e){return la(e)};Je.hydrate=function(e,t,o){if(!Qs(t))throw Error(T(200));return Ks(null,e,t,!0,o)};Je.hydrateRoot=function(e,t,o){if(!Zu(e))throw Error(T(405));var a=o!=null&&o.hydratedSources||null,r=!1,n="",s=Hf;if(o!=null&&(o.unstable_strictMode===!0&&(r=!0),o.identifierPrefix!==void 0&&(n=o.identifierPrefix),o.onRecoverableError!==void 0&&(s=o.onRecoverableError)),t=Bf(t,null,e,1,o??null,r,!1,n,s),e[Vt]=t.current,Gr(e),a)for(e=0;e<a.length;e++)o=a[e],r=o._getVersion,r=r(o._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[o,r]:t.mutableSourceEagerHydrationData.push(o,r);return new Ws(t)};Je.render=function(e,t,o){if(!Qs(t))throw Error(T(200));return Ks(null,e,t,!1,o)};Je.unmountComponentAtNode=function(e){if(!Qs(e))throw Error(T(40));return e._reactRootContainer?(la(function(){Ks(null,null,e,!1,function(){e._reactRootContainer=null,e[Vt]=null})}),!0):!1};Je.unstable_batchedUpdates=Vu;Je.unstable_renderSubtreeIntoContainer=function(e,t,o,a){if(!Qs(o))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return Ks(e,t,o,!1,a)};Je.version="18.3.1-next-f1338f8080-20240426";function $f(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($f)}catch(e){console.error(e)}}$f(),Hp.exports=Je;var hn=Hp.exports;const Vf=Tp(hn);var Gf,Rc=hn;Gf=Rc.createRoot,Rc.hydrateRoot;const lb=1,ub=1e6;let Fi=0;function db(){return Fi=(Fi+1)%Number.MAX_SAFE_INTEGER,Fi.toString()}const Bi=new Map,Mc=e=>{if(Bi.has(e))return;const t=setTimeout(()=>{Bi.delete(e),zr({type:"REMOVE_TOAST",toastId:e})},ub);Bi.set(e,t)},cb=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,lb)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(o=>o.id===t.toast.id?{...o,...t.toast}:o)};case"DISMISS_TOAST":{const{toastId:o}=t;return o?Mc(o):e.toasts.forEach(a=>{Mc(a.id)}),{...e,toasts:e.toasts.map(a=>a.id===o||o===void 0?{...a,open:!1}:a)}}case"REMOVE_TOAST":return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(o=>o.id!==t.toastId)}}},os=[];let as={toasts:[]};function zr(e){as=cb(as,e),os.forEach(t=>{t(as)})}function pb({...e}){const t=db(),o=r=>zr({type:"UPDATE_TOAST",toast:{...r,id:t}}),a=()=>zr({type:"DISMISS_TOAST",toastId:t});return zr({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:r=>{r||a()}}}),{id:t,dismiss:a,update:o}}function mb(){const[e,t]=y.useState(as);return y.useEffect(()=>(os.push(t),()=>{const o=os.indexOf(t);o>-1&&os.splice(o,1)}),[e]),{...e,toast:pb,dismiss:o=>zr({type:"DISMISS_TOAST",toastId:o})}}function ve(e,t,{checkForDefaultPrevented:o=!0}={}){return function(r){if(e==null||e(r),o===!1||!r.defaultPrevented)return t==null?void 0:t(r)}}function Ic(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function Ju(...e){return t=>{let o=!1;const a=e.map(r=>{const n=Ic(r,t);return!o&&typeof n=="function"&&(o=!0),n});if(o)return()=>{for(let r=0;r<a.length;r++){const n=a[r];typeof n=="function"?n():Ic(e[r],null)}}}}function St(...e){return y.useCallback(Ju(...e),e)}function Xs(e,t=[]){let o=[];function a(n,s){const i=y.createContext(s),l=o.length;o=[...o,s];const u=p=>{var f;const{scope:h,children:c,...S}=p,v=((f=h==null?void 0:h[e])==null?void 0:f[l])||i,x=y.useMemo(()=>S,Object.values(S));return b.jsx(v.Provider,{value:x,children:c})};u.displayName=n+"Provider";function d(p,h){var v;const c=((v=h==null?void 0:h[e])==null?void 0:v[l])||i,S=y.useContext(c);if(S)return S;if(s!==void 0)return s;throw new Error(`\`${p}\` must be used within \`${n}\``)}return[u,d]}const r=()=>{const n=o.map(s=>y.createContext(s));return function(i){const l=(i==null?void 0:i[e])||n;return y.useMemo(()=>({[`__scope${e}`]:{...i,[e]:l}}),[i,l])}};return r.scopeName=e,[a,fb(r,...t)]}function fb(...e){const t=e[0];if(e.length===1)return t;const o=()=>{const a=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(n){const s=a.reduce((i,{useScope:l,scopeName:u})=>{const p=l(n)[`__scope${u}`];return{...i,...p}},{});return y.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])}};return o.scopeName=t.scopeName,o}function Lc(e){const t=hb(e),o=y.forwardRef((a,r)=>{const{children:n,...s}=a,i=y.Children.toArray(n),l=i.find(vb);if(l){const u=l.props.children,d=i.map(p=>p===l?y.Children.count(u)>1?y.Children.only(null):y.isValidElement(u)?u.props.children:null:p);return b.jsx(t,{...s,ref:r,children:y.isValidElement(u)?y.cloneElement(u,void 0,d):null})}return b.jsx(t,{...s,ref:r,children:n})});return o.displayName=`${e}.Slot`,o}function hb(e){const t=y.forwardRef((o,a)=>{const{children:r,...n}=o;if(y.isValidElement(r)){const s=bb(r),i=yb(n,r.props);return r.type!==y.Fragment&&(i.ref=a?Ju(a,s):s),y.cloneElement(r,i)}return y.Children.count(r)>1?y.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var gb=Symbol("radix.slottable");function vb(e){return y.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===gb}function yb(e,t){const o={...t};for(const a in t){const r=e[a],n=t[a];/^on[A-Z]/.test(a)?r&&n?o[a]=(...i)=>{const l=n(...i);return r(...i),l}:r&&(o[a]=r):a==="style"?o[a]={...r,...n}:a==="className"&&(o[a]=[r,n].filter(Boolean).join(" "))}return{...e,...o}}function bb(e){var a,r;let t=(a=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:a.get,o=t&&"isReactWarning"in t&&t.isReactWarning;return o?e.ref:(t=(r=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:r.get,o=t&&"isReactWarning"in t&&t.isReactWarning,o?e.props.ref:e.props.ref||e.ref)}function xb(e){const t=e+"CollectionProvider",[o,a]=Xs(t),[r,n]=o(t,{collectionRef:{current:null},itemMap:new Map}),s=v=>{const{scope:x,children:f}=v,m=D.useRef(null),g=D.useRef(new Map).current;return b.jsx(r,{scope:x,itemMap:g,collectionRef:m,children:f})};s.displayName=t;const i=e+"CollectionSlot",l=Lc(i),u=D.forwardRef((v,x)=>{const{scope:f,children:m}=v,g=n(i,f),w=St(x,g.collectionRef);return b.jsx(l,{ref:w,children:m})});u.displayName=i;const d=e+"CollectionItemSlot",p="data-radix-collection-item",h=Lc(d),c=D.forwardRef((v,x)=>{const{scope:f,children:m,...g}=v,w=D.useRef(null),k=St(x,w),E=n(d,f);return D.useEffect(()=>(E.itemMap.set(w,{ref:w,...g}),()=>void E.itemMap.delete(w))),b.jsx(h,{[p]:"",ref:k,children:m})});c.displayName=d;function S(v){const x=n(e+"CollectionConsumer",v);return D.useCallback(()=>{const m=x.collectionRef.current;if(!m)return[];const g=Array.from(m.querySelectorAll(`[${p}]`));return Array.from(x.itemMap.values()).sort((E,C)=>g.indexOf(E.ref.current)-g.indexOf(C.ref.current))},[x.collectionRef,x.itemMap])}return[{Provider:s,Slot:u,ItemSlot:c},S,a]}function wb(e){const t=Sb(e),o=y.forwardRef((a,r)=>{const{children:n,...s}=a,i=y.Children.toArray(n),l=i.find(Eb);if(l){const u=l.props.children,d=i.map(p=>p===l?y.Children.count(u)>1?y.Children.only(null):y.isValidElement(u)?u.props.children:null:p);return b.jsx(t,{...s,ref:r,children:y.isValidElement(u)?y.cloneElement(u,void 0,d):null})}return b.jsx(t,{...s,ref:r,children:n})});return o.displayName=`${e}.Slot`,o}function Sb(e){const t=y.forwardRef((o,a)=>{const{children:r,...n}=o;if(y.isValidElement(r)){const s=Pb(r),i=Cb(n,r.props);return r.type!==y.Fragment&&(i.ref=a?Ju(a,s):s),y.cloneElement(r,i)}return y.Children.count(r)>1?y.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var kb=Symbol("radix.slottable");function Eb(e){return y.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===kb}function Cb(e,t){const o={...t};for(const a in t){const r=e[a],n=t[a];/^on[A-Z]/.test(a)?r&&n?o[a]=(...i)=>{const l=n(...i);return r(...i),l}:r&&(o[a]=r):a==="style"?o[a]={...r,...n}:a==="className"&&(o[a]=[r,n].filter(Boolean).join(" "))}return{...e,...o}}function Pb(e){var a,r;let t=(a=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:a.get,o=t&&"isReactWarning"in t&&t.isReactWarning;return o?e.ref:(t=(r=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:r.get,o=t&&"isReactWarning"in t&&t.isReactWarning,o?e.props.ref:e.props.ref||e.ref)}var qb=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Ve=qb.reduce((e,t)=>{const o=wb(`Primitive.${t}`),a=y.forwardRef((r,n)=>{const{asChild:s,...i}=r,l=s?o:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),b.jsx(l,{...i,ref:n})});return a.displayName=`Primitive.${t}`,{...e,[t]:a}},{});function Wf(e,t){e&&hn.flushSync(()=>e.dispatchEvent(t))}function No(e){const t=y.useRef(e);return y.useEffect(()=>{t.current=e}),y.useMemo(()=>(...o)=>{var a;return(a=t.current)==null?void 0:a.call(t,...o)},[])}function Ab(e,t=globalThis==null?void 0:globalThis.document){const o=No(e);y.useEffect(()=>{const a=r=>{r.key==="Escape"&&o(r)};return t.addEventListener("keydown",a,{capture:!0}),()=>t.removeEventListener("keydown",a,{capture:!0})},[o,t])}var Ob="DismissableLayer",Fl="dismissableLayer.update",Tb="dismissableLayer.pointerDownOutside",Db="dismissableLayer.focusOutside",zc,Qf=y.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),ed=y.forwardRef((e,t)=>{const{disableOutsidePointerEvents:o=!1,onEscapeKeyDown:a,onPointerDownOutside:r,onFocusOutside:n,onInteractOutside:s,onDismiss:i,...l}=e,u=y.useContext(Qf),[d,p]=y.useState(null),h=(d==null?void 0:d.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,c]=y.useState({}),S=St(t,C=>p(C)),v=Array.from(u.layers),[x]=[...u.layersWithOutsidePointerEventsDisabled].slice(-1),f=v.indexOf(x),m=d?v.indexOf(d):-1,g=u.layersWithOutsidePointerEventsDisabled.size>0,w=m>=f,k=Rb(C=>{const A=C.target,M=[...u.branches].some(N=>N.contains(A));!w||M||(r==null||r(C),s==null||s(C),C.defaultPrevented||i==null||i())},h),E=Mb(C=>{const A=C.target;[...u.branches].some(N=>N.contains(A))||(n==null||n(C),s==null||s(C),C.defaultPrevented||i==null||i())},h);return Ab(C=>{m===u.layers.size-1&&(a==null||a(C),!C.defaultPrevented&&i&&(C.preventDefault(),i()))},h),y.useEffect(()=>{if(d)return o&&(u.layersWithOutsidePointerEventsDisabled.size===0&&(zc=h.body.style.pointerEvents,h.body.style.pointerEvents="none"),u.layersWithOutsidePointerEventsDisabled.add(d)),u.layers.add(d),_c(),()=>{o&&u.layersWithOutsidePointerEventsDisabled.size===1&&(h.body.style.pointerEvents=zc)}},[d,h,o,u]),y.useEffect(()=>()=>{d&&(u.layers.delete(d),u.layersWithOutsidePointerEventsDisabled.delete(d),_c())},[d,u]),y.useEffect(()=>{const C=()=>c({});return document.addEventListener(Fl,C),()=>document.removeEventListener(Fl,C)},[]),b.jsx(Ve.div,{...l,ref:S,style:{pointerEvents:g?w?"auto":"none":void 0,...e.style},onFocusCapture:ve(e.onFocusCapture,E.onFocusCapture),onBlurCapture:ve(e.onBlurCapture,E.onBlurCapture),onPointerDownCapture:ve(e.onPointerDownCapture,k.onPointerDownCapture)})});ed.displayName=Ob;var Nb="DismissableLayerBranch",Kf=y.forwardRef((e,t)=>{const o=y.useContext(Qf),a=y.useRef(null),r=St(t,a);return y.useEffect(()=>{const n=a.current;if(n)return o.branches.add(n),()=>{o.branches.delete(n)}},[o.branches]),b.jsx(Ve.div,{...e,ref:r})});Kf.displayName=Nb;function Rb(e,t=globalThis==null?void 0:globalThis.document){const o=No(e),a=y.useRef(!1),r=y.useRef(()=>{});return y.useEffect(()=>{const n=i=>{if(i.target&&!a.current){let l=function(){Xf(Tb,o,u,{discrete:!0})};const u={originalEvent:i};i.pointerType==="touch"?(t.removeEventListener("click",r.current),r.current=l,t.addEventListener("click",r.current,{once:!0})):l()}else t.removeEventListener("click",r.current);a.current=!1},s=window.setTimeout(()=>{t.addEventListener("pointerdown",n)},0);return()=>{window.clearTimeout(s),t.removeEventListener("pointerdown",n),t.removeEventListener("click",r.current)}},[t,o]),{onPointerDownCapture:()=>a.current=!0}}function Mb(e,t=globalThis==null?void 0:globalThis.document){const o=No(e),a=y.useRef(!1);return y.useEffect(()=>{const r=n=>{n.target&&!a.current&&Xf(Db,o,{originalEvent:n},{discrete:!1})};return t.addEventListener("focusin",r),()=>t.removeEventListener("focusin",r)},[t,o]),{onFocusCapture:()=>a.current=!0,onBlurCapture:()=>a.current=!1}}function _c(){const e=new CustomEvent(Fl);document.dispatchEvent(e)}function Xf(e,t,o,{discrete:a}){const r=o.originalEvent.target,n=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:o});t&&r.addEventListener(e,t,{once:!0}),a?Wf(r,n):r.dispatchEvent(n)}var Ib=ed,Lb=Kf,Ro=globalThis!=null&&globalThis.document?y.useLayoutEffect:()=>{},zb="Portal",Yf=y.forwardRef((e,t)=>{var i;const{container:o,...a}=e,[r,n]=y.useState(!1);Ro(()=>n(!0),[]);const s=o||r&&((i=globalThis==null?void 0:globalThis.document)==null?void 0:i.body);return s?Vf.createPortal(b.jsx(Ve.div,{...a,ref:t}),s):null});Yf.displayName=zb;function _b(e,t){return y.useReducer((o,a)=>t[o][a]??o,e)}var td=e=>{const{present:t,children:o}=e,a=jb(t),r=typeof o=="function"?o({present:a.isPresent}):y.Children.only(o),n=St(a.ref,Ub(r));return typeof o=="function"||a.isPresent?y.cloneElement(r,{ref:n}):null};td.displayName="Presence";function jb(e){const[t,o]=y.useState(),a=y.useRef(null),r=y.useRef(e),n=y.useRef("none"),s=e?"mounted":"unmounted",[i,l]=_b(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return y.useEffect(()=>{const u=jn(a.current);n.current=i==="mounted"?u:"none"},[i]),Ro(()=>{const u=a.current,d=r.current;if(d!==e){const h=n.current,c=jn(u);e?l("MOUNT"):c==="none"||(u==null?void 0:u.display)==="none"?l("UNMOUNT"):l(d&&h!==c?"ANIMATION_OUT":"UNMOUNT"),r.current=e}},[e,l]),Ro(()=>{if(t){let u;const d=t.ownerDocument.defaultView??window,p=c=>{const v=jn(a.current).includes(CSS.escape(c.animationName));if(c.target===t&&v&&(l("ANIMATION_END"),!r.current)){const x=t.style.animationFillMode;t.style.animationFillMode="forwards",u=d.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=x)})}},h=c=>{c.target===t&&(n.current=jn(a.current))};return t.addEventListener("animationstart",h),t.addEventListener("animationcancel",p),t.addEventListener("animationend",p),()=>{d.clearTimeout(u),t.removeEventListener("animationstart",h),t.removeEventListener("animationcancel",p),t.removeEventListener("animationend",p)}}else l("ANIMATION_END")},[t,l]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:y.useCallback(u=>{a.current=u?getComputedStyle(u):null,o(u)},[])}}function jn(e){return(e==null?void 0:e.animationName)||"none"}function Ub(e){var a,r;let t=(a=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:a.get,o=t&&"isReactWarning"in t&&t.isReactWarning;return o?e.ref:(t=(r=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:r.get,o=t&&"isReactWarning"in t&&t.isReactWarning,o?e.props.ref:e.props.ref||e.ref)}var Fb=Fp[" useInsertionEffect ".trim().toString()]||Ro;function Bb({prop:e,defaultProp:t,onChange:o=()=>{},caller:a}){const[r,n,s]=Hb({defaultProp:t,onChange:o}),i=e!==void 0,l=i?e:r;{const d=y.useRef(e!==void 0);y.useEffect(()=>{const p=d.current;p!==i&&console.warn(`${a} is changing from ${p?"controlled":"uncontrolled"} to ${i?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),d.current=i},[i,a])}const u=y.useCallback(d=>{var p;if(i){const h=$b(d)?d(e):d;h!==e&&((p=s.current)==null||p.call(s,h))}else n(d)},[i,e,n,s]);return[l,u]}function Hb({defaultProp:e,onChange:t}){const[o,a]=y.useState(e),r=y.useRef(o),n=y.useRef(t);return Fb(()=>{n.current=t},[t]),y.useEffect(()=>{var s;r.current!==o&&((s=n.current)==null||s.call(n,o),r.current=o)},[o,r]),[o,a,n]}function $b(e){return typeof e=="function"}var Vb=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),Gb="VisuallyHidden",Ys=y.forwardRef((e,t)=>b.jsx(Ve.span,{...e,ref:t,style:{...Vb,...e.style}}));Ys.displayName=Gb;var Wb=Ys,od="ToastProvider",[ad,Qb,Kb]=xb("Toast"),[Zf]=Xs("Toast",[Kb]),[Xb,Zs]=Zf(od),Jf=e=>{const{__scopeToast:t,label:o="Notification",duration:a=5e3,swipeDirection:r="right",swipeThreshold:n=50,children:s}=e,[i,l]=y.useState(null),[u,d]=y.useState(0),p=y.useRef(!1),h=y.useRef(!1);return o.trim()||console.error(`Invalid prop \`label\` supplied to \`${od}\`. Expected non-empty \`string\`.`),b.jsx(ad.Provider,{scope:t,children:b.jsx(Xb,{scope:t,label:o,duration:a,swipeDirection:r,swipeThreshold:n,toastCount:u,viewport:i,onViewportChange:l,onToastAdd:y.useCallback(()=>d(c=>c+1),[]),onToastRemove:y.useCallback(()=>d(c=>c-1),[]),isFocusedToastEscapeKeyDownRef:p,isClosePausedRef:h,children:s})})};Jf.displayName=od;var eh="ToastViewport",Yb=["F8"],Bl="toast.viewportPause",Hl="toast.viewportResume",th=y.forwardRef((e,t)=>{const{__scopeToast:o,hotkey:a=Yb,label:r="Notifications ({hotkey})",...n}=e,s=Zs(eh,o),i=Qb(o),l=y.useRef(null),u=y.useRef(null),d=y.useRef(null),p=y.useRef(null),h=St(t,p,s.onViewportChange),c=a.join("+").replace(/Key/g,"").replace(/Digit/g,""),S=s.toastCount>0;y.useEffect(()=>{const x=f=>{var g;a.length!==0&&a.every(w=>f[w]||f.code===w)&&((g=p.current)==null||g.focus())};return document.addEventListener("keydown",x),()=>document.removeEventListener("keydown",x)},[a]),y.useEffect(()=>{const x=l.current,f=p.current;if(S&&x&&f){const m=()=>{if(!s.isClosePausedRef.current){const E=new CustomEvent(Bl);f.dispatchEvent(E),s.isClosePausedRef.current=!0}},g=()=>{if(s.isClosePausedRef.current){const E=new CustomEvent(Hl);f.dispatchEvent(E),s.isClosePausedRef.current=!1}},w=E=>{!x.contains(E.relatedTarget)&&g()},k=()=>{x.contains(document.activeElement)||g()};return x.addEventListener("focusin",m),x.addEventListener("focusout",w),x.addEventListener("pointermove",m),x.addEventListener("pointerleave",k),window.addEventListener("blur",m),window.addEventListener("focus",g),()=>{x.removeEventListener("focusin",m),x.removeEventListener("focusout",w),x.removeEventListener("pointermove",m),x.removeEventListener("pointerleave",k),window.removeEventListener("blur",m),window.removeEventListener("focus",g)}}},[S,s.isClosePausedRef]);const v=y.useCallback(({tabbingDirection:x})=>{const m=i().map(g=>{const w=g.ref.current,k=[w,...dx(w)];return x==="forwards"?k:k.reverse()});return(x==="forwards"?m.reverse():m).flat()},[i]);return y.useEffect(()=>{const x=p.current;if(x){const f=m=>{var k,E,C;const g=m.altKey||m.ctrlKey||m.metaKey;if(m.key==="Tab"&&!g){const A=document.activeElement,M=m.shiftKey;if(m.target===x&&M){(k=u.current)==null||k.focus();return}const z=v({tabbingDirection:M?"backwards":"forwards"}),G=z.findIndex(R=>R===A);Hi(z.slice(G+1))?m.preventDefault():M?(E=u.current)==null||E.focus():(C=d.current)==null||C.focus()}};return x.addEventListener("keydown",f),()=>x.removeEventListener("keydown",f)}},[i,v]),b.jsxs(Lb,{ref:l,role:"region","aria-label":r.replace("{hotkey}",c),tabIndex:-1,style:{pointerEvents:S?void 0:"none"},children:[S&&b.jsx($l,{ref:u,onFocusFromOutsideViewport:()=>{const x=v({tabbingDirection:"forwards"});Hi(x)}}),b.jsx(ad.Slot,{scope:o,children:b.jsx(Ve.ol,{tabIndex:-1,...n,ref:h})}),S&&b.jsx($l,{ref:d,onFocusFromOutsideViewport:()=>{const x=v({tabbingDirection:"backwards"});Hi(x)}})]})});th.displayName=eh;var oh="ToastFocusProxy",$l=y.forwardRef((e,t)=>{const{__scopeToast:o,onFocusFromOutsideViewport:a,...r}=e,n=Zs(oh,o);return b.jsx(Ys,{tabIndex:0,...r,ref:t,style:{position:"fixed"},onFocus:s=>{var u;const i=s.relatedTarget;!((u=n.viewport)!=null&&u.contains(i))&&a()}})});$l.displayName=oh;var gn="Toast",Zb="toast.swipeStart",Jb="toast.swipeMove",ex="toast.swipeCancel",tx="toast.swipeEnd",ah=y.forwardRef((e,t)=>{const{forceMount:o,open:a,defaultOpen:r,onOpenChange:n,...s}=e,[i,l]=Bb({prop:a,defaultProp:r??!0,onChange:n,caller:gn});return b.jsx(td,{present:o||i,children:b.jsx(rx,{open:i,...s,ref:t,onClose:()=>l(!1),onPause:No(e.onPause),onResume:No(e.onResume),onSwipeStart:ve(e.onSwipeStart,u=>{u.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:ve(e.onSwipeMove,u=>{const{x:d,y:p}=u.detail.delta;u.currentTarget.setAttribute("data-swipe","move"),u.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${d}px`),u.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${p}px`)}),onSwipeCancel:ve(e.onSwipeCancel,u=>{u.currentTarget.setAttribute("data-swipe","cancel"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:ve(e.onSwipeEnd,u=>{const{x:d,y:p}=u.detail.delta;u.currentTarget.setAttribute("data-swipe","end"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),u.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${d}px`),u.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${p}px`),l(!1)})})})});ah.displayName=gn;var[ox,ax]=Zf(gn,{onClose(){}}),rx=y.forwardRef((e,t)=>{const{__scopeToast:o,type:a="foreground",duration:r,open:n,onClose:s,onEscapeKeyDown:i,onPause:l,onResume:u,onSwipeStart:d,onSwipeMove:p,onSwipeCancel:h,onSwipeEnd:c,...S}=e,v=Zs(gn,o),[x,f]=y.useState(null),m=St(t,R=>f(R)),g=y.useRef(null),w=y.useRef(null),k=r||v.duration,E=y.useRef(0),C=y.useRef(k),A=y.useRef(0),{onToastAdd:M,onToastRemove:N}=v,U=No(()=>{var K;(x==null?void 0:x.contains(document.activeElement))&&((K=v.viewport)==null||K.focus()),s()}),z=y.useCallback(R=>{!R||R===1/0||(window.clearTimeout(A.current),E.current=new Date().getTime(),A.current=window.setTimeout(U,R))},[U]);y.useEffect(()=>{const R=v.viewport;if(R){const K=()=>{z(C.current),u==null||u()},F=()=>{const H=new Date().getTime()-E.current;C.current=C.current-H,window.clearTimeout(A.current),l==null||l()};return R.addEventListener(Bl,F),R.addEventListener(Hl,K),()=>{R.removeEventListener(Bl,F),R.removeEventListener(Hl,K)}}},[v.viewport,k,l,u,z]),y.useEffect(()=>{n&&!v.isClosePausedRef.current&&z(k)},[n,k,v.isClosePausedRef,z]),y.useEffect(()=>(M(),()=>N()),[M,N]);const G=y.useMemo(()=>x?dh(x):null,[x]);return v.viewport?b.jsxs(b.Fragment,{children:[G&&b.jsx(nx,{__scopeToast:o,role:"status","aria-live":a==="foreground"?"assertive":"polite",children:G}),b.jsx(ox,{scope:o,onClose:U,children:hn.createPortal(b.jsx(ad.ItemSlot,{scope:o,children:b.jsx(Ib,{asChild:!0,onEscapeKeyDown:ve(i,()=>{v.isFocusedToastEscapeKeyDownRef.current||U(),v.isFocusedToastEscapeKeyDownRef.current=!1}),children:b.jsx(Ve.li,{tabIndex:0,"data-state":n?"open":"closed","data-swipe-direction":v.swipeDirection,...S,ref:m,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:ve(e.onKeyDown,R=>{R.key==="Escape"&&(i==null||i(R.nativeEvent),R.nativeEvent.defaultPrevented||(v.isFocusedToastEscapeKeyDownRef.current=!0,U()))}),onPointerDown:ve(e.onPointerDown,R=>{R.button===0&&(g.current={x:R.clientX,y:R.clientY})}),onPointerMove:ve(e.onPointerMove,R=>{if(!g.current)return;const K=R.clientX-g.current.x,F=R.clientY-g.current.y,H=!!w.current,q=["left","right"].includes(v.swipeDirection),O=["left","up"].includes(v.swipeDirection)?Math.min:Math.max,I=q?O(0,K):0,$=q?0:O(0,F),_=R.pointerType==="touch"?10:2,W={x:I,y:$},X={originalEvent:R,delta:W};H?(w.current=W,Un(Jb,p,X,{discrete:!1})):jc(W,v.swipeDirection,_)?(w.current=W,Un(Zb,d,X,{discrete:!1}),R.target.setPointerCapture(R.pointerId)):(Math.abs(K)>_||Math.abs(F)>_)&&(g.current=null)}),onPointerUp:ve(e.onPointerUp,R=>{const K=w.current,F=R.target;if(F.hasPointerCapture(R.pointerId)&&F.releasePointerCapture(R.pointerId),w.current=null,g.current=null,K){const H=R.currentTarget,q={originalEvent:R,delta:K};jc(K,v.swipeDirection,v.swipeThreshold)?Un(tx,c,q,{discrete:!0}):Un(ex,h,q,{discrete:!0}),H.addEventListener("click",O=>O.preventDefault(),{once:!0})}})})})}),v.viewport)})]}):null}),nx=e=>{const{__scopeToast:t,children:o,...a}=e,r=Zs(gn,t),[n,s]=y.useState(!1),[i,l]=y.useState(!1);return lx(()=>s(!0)),y.useEffect(()=>{const u=window.setTimeout(()=>l(!0),1e3);return()=>window.clearTimeout(u)},[]),i?null:b.jsx(Yf,{asChild:!0,children:b.jsx(Ys,{...a,children:n&&b.jsxs(b.Fragment,{children:[r.label," ",o]})})})},sx="ToastTitle",rh=y.forwardRef((e,t)=>{const{__scopeToast:o,...a}=e;return b.jsx(Ve.div,{...a,ref:t})});rh.displayName=sx;var ix="ToastDescription",nh=y.forwardRef((e,t)=>{const{__scopeToast:o,...a}=e;return b.jsx(Ve.div,{...a,ref:t})});nh.displayName=ix;var sh="ToastAction",ih=y.forwardRef((e,t)=>{const{altText:o,...a}=e;return o.trim()?b.jsx(uh,{altText:o,asChild:!0,children:b.jsx(rd,{...a,ref:t})}):(console.error(`Invalid prop \`altText\` supplied to \`${sh}\`. Expected non-empty \`string\`.`),null)});ih.displayName=sh;var lh="ToastClose",rd=y.forwardRef((e,t)=>{const{__scopeToast:o,...a}=e,r=ax(lh,o);return b.jsx(uh,{asChild:!0,children:b.jsx(Ve.button,{type:"button",...a,ref:t,onClick:ve(e.onClick,r.onClose)})})});rd.displayName=lh;var uh=y.forwardRef((e,t)=>{const{__scopeToast:o,altText:a,...r}=e;return b.jsx(Ve.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":a||void 0,...r,ref:t})});function dh(e){const t=[];return Array.from(e.childNodes).forEach(a=>{if(a.nodeType===a.TEXT_NODE&&a.textContent&&t.push(a.textContent),ux(a)){const r=a.ariaHidden||a.hidden||a.style.display==="none",n=a.dataset.radixToastAnnounceExclude==="";if(!r)if(n){const s=a.dataset.radixToastAnnounceAlt;s&&t.push(s)}else t.push(...dh(a))}}),t}function Un(e,t,o,{discrete:a}){const r=o.originalEvent.currentTarget,n=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:o});t&&r.addEventListener(e,t,{once:!0}),a?Wf(r,n):r.dispatchEvent(n)}var jc=(e,t,o=0)=>{const a=Math.abs(e.x),r=Math.abs(e.y),n=a>r;return t==="left"||t==="right"?n&&a>o:!n&&r>o};function lx(e=()=>{}){const t=No(e);Ro(()=>{let o=0,a=0;return o=window.requestAnimationFrame(()=>a=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(o),window.cancelAnimationFrame(a)}},[t])}function ux(e){return e.nodeType===e.ELEMENT_NODE}function dx(e){const t=[],o=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:a=>{const r=a.tagName==="INPUT"&&a.type==="hidden";return a.disabled||a.hidden||r?NodeFilter.FILTER_SKIP:a.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;o.nextNode();)t.push(o.currentNode);return t}function Hi(e){const t=document.activeElement;return e.some(o=>o===t?!0:(o.focus(),document.activeElement!==t))}var cx=Jf,ch=th,ph=ah,mh=rh,fh=nh,hh=ih,gh=rd;function vh(e){var t,o,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(o=vh(e[t]))&&(a&&(a+=" "),a+=o)}else for(o in e)e[o]&&(a&&(a+=" "),a+=o);return a}function yh(){for(var e,t,o=0,a="",r=arguments.length;o<r;o++)(e=arguments[o])&&(t=vh(e))&&(a&&(a+=" "),a+=t);return a}const Uc=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,Fc=yh,px=(e,t)=>o=>{var a;if((t==null?void 0:t.variants)==null)return Fc(e,o==null?void 0:o.class,o==null?void 0:o.className);const{variants:r,defaultVariants:n}=t,s=Object.keys(r).map(u=>{const d=o==null?void 0:o[u],p=n==null?void 0:n[u];if(d===null)return null;const h=Uc(d)||Uc(p);return r[u][h]}),i=o&&Object.entries(o).reduce((u,d)=>{let[p,h]=d;return h===void 0||(u[p]=h),u},{}),l=t==null||(a=t.compoundVariants)===null||a===void 0?void 0:a.reduce((u,d)=>{let{class:p,className:h,...c}=d;return Object.entries(c).every(S=>{let[v,x]=S;return Array.isArray(x)?x.includes({...n,...i}[v]):{...n,...i}[v]===x})?[...u,p,h]:u},[]);return Fc(e,s,l,o==null?void 0:o.class,o==null?void 0:o.className)};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),bh=(...e)=>e.filter((t,o,a)=>!!t&&t.trim()!==""&&a.indexOf(t)===o).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var fx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx=y.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:o=2,absoluteStrokeWidth:a,className:r="",children:n,iconNode:s,...i},l)=>y.createElement("svg",{ref:l,...fx,width:t,height:t,stroke:e,strokeWidth:a?Number(o)*24/Number(t):o,className:bh("lucide",r),...i},[...s.map(([u,d])=>y.createElement(u,d)),...Array.isArray(n)?n:[n]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=(e,t)=>{const o=y.forwardRef(({className:a,...r},n)=>y.createElement(hx,{ref:n,iconNode:t,className:bh(`lucide-${mx(e)}`,a),...r}));return o.displayName=`${e}`,o};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx=Re("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=Re("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=Re("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=Re("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nd=Re("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bc=Re("FlaskConical",[["path",{d:"M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2",key:"pzvekw"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M7 16h10",key:"wp8him"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=Re("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=Re("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx=Re("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx=Re("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=Re("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ex=Re("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx=Re("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=Re("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=Re("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=Re("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),sd="-",Ax=e=>{const t=Tx(e),{conflictingClassGroups:o,conflictingClassGroupModifiers:a}=e;return{getClassGroupId:s=>{const i=s.split(sd);return i[0]===""&&i.length!==1&&i.shift(),Sh(i,t)||Ox(s)},getConflictingClassGroupIds:(s,i)=>{const l=o[s]||[];return i&&a[s]?[...l,...a[s]]:l}}},Sh=(e,t)=>{var s;if(e.length===0)return t.classGroupId;const o=e[0],a=t.nextPart.get(o),r=a?Sh(e.slice(1),a):void 0;if(r)return r;if(t.validators.length===0)return;const n=e.join(sd);return(s=t.validators.find(({validator:i})=>i(n)))==null?void 0:s.classGroupId},Hc=/^\[(.+)\]$/,Ox=e=>{if(Hc.test(e)){const t=Hc.exec(e)[1],o=t==null?void 0:t.substring(0,t.indexOf(":"));if(o)return"arbitrary.."+o}},Tx=e=>{const{theme:t,prefix:o}=e,a={nextPart:new Map,validators:[]};return Nx(Object.entries(e.classGroups),o).forEach(([n,s])=>{Vl(s,a,n,t)}),a},Vl=(e,t,o,a)=>{e.forEach(r=>{if(typeof r=="string"){const n=r===""?t:$c(t,r);n.classGroupId=o;return}if(typeof r=="function"){if(Dx(r)){Vl(r(a),t,o,a);return}t.validators.push({validator:r,classGroupId:o});return}Object.entries(r).forEach(([n,s])=>{Vl(s,$c(t,n),o,a)})})},$c=(e,t)=>{let o=e;return t.split(sd).forEach(a=>{o.nextPart.has(a)||o.nextPart.set(a,{nextPart:new Map,validators:[]}),o=o.nextPart.get(a)}),o},Dx=e=>e.isThemeGetter,Nx=(e,t)=>t?e.map(([o,a])=>{const r=a.map(n=>typeof n=="string"?t+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(([s,i])=>[t+s,i])):n);return[o,r]}):e,Rx=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,o=new Map,a=new Map;const r=(n,s)=>{o.set(n,s),t++,t>e&&(t=0,a=o,o=new Map)};return{get(n){let s=o.get(n);if(s!==void 0)return s;if((s=a.get(n))!==void 0)return r(n,s),s},set(n,s){o.has(n)?o.set(n,s):r(n,s)}}},kh="!",Mx=e=>{const{separator:t,experimentalParseClassName:o}=e,a=t.length===1,r=t[0],n=t.length,s=i=>{const l=[];let u=0,d=0,p;for(let x=0;x<i.length;x++){let f=i[x];if(u===0){if(f===r&&(a||i.slice(x,x+n)===t)){l.push(i.slice(d,x)),d=x+n;continue}if(f==="/"){p=x;continue}}f==="["?u++:f==="]"&&u--}const h=l.length===0?i:i.substring(d),c=h.startsWith(kh),S=c?h.substring(1):h,v=p&&p>d?p-d:void 0;return{modifiers:l,hasImportantModifier:c,baseClassName:S,maybePostfixModifierPosition:v}};return o?i=>o({className:i,parseClassName:s}):s},Ix=e=>{if(e.length<=1)return e;const t=[];let o=[];return e.forEach(a=>{a[0]==="["?(t.push(...o.sort(),a),o=[]):o.push(a)}),t.push(...o.sort()),t},Lx=e=>({cache:Rx(e.cacheSize),parseClassName:Mx(e),...Ax(e)}),zx=/\s+/,_x=(e,t)=>{const{parseClassName:o,getClassGroupId:a,getConflictingClassGroupIds:r}=t,n=[],s=e.trim().split(zx);let i="";for(let l=s.length-1;l>=0;l-=1){const u=s[l],{modifiers:d,hasImportantModifier:p,baseClassName:h,maybePostfixModifierPosition:c}=o(u);let S=!!c,v=a(S?h.substring(0,c):h);if(!v){if(!S){i=u+(i.length>0?" "+i:i);continue}if(v=a(h),!v){i=u+(i.length>0?" "+i:i);continue}S=!1}const x=Ix(d).join(":"),f=p?x+kh:x,m=f+v;if(n.includes(m))continue;n.push(m);const g=r(v,S);for(let w=0;w<g.length;++w){const k=g[w];n.push(f+k)}i=u+(i.length>0?" "+i:i)}return i};function jx(){let e=0,t,o,a="";for(;e<arguments.length;)(t=arguments[e++])&&(o=Eh(t))&&(a&&(a+=" "),a+=o);return a}const Eh=e=>{if(typeof e=="string")return e;let t,o="";for(let a=0;a<e.length;a++)e[a]&&(t=Eh(e[a]))&&(o&&(o+=" "),o+=t);return o};function Ux(e,...t){let o,a,r,n=s;function s(l){const u=t.reduce((d,p)=>p(d),e());return o=Lx(u),a=o.cache.get,r=o.cache.set,n=i,i(l)}function i(l){const u=a(l);if(u)return u;const d=_x(l,o);return r(l,d),d}return function(){return n(jx.apply(null,arguments))}}const ae=e=>{const t=o=>o[e]||[];return t.isThemeGetter=!0,t},Ch=/^\[(?:([a-z-]+):)?(.+)\]$/i,Fx=/^\d+\/\d+$/,Bx=new Set(["px","full","screen"]),Hx=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,$x=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Vx=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,Gx=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Wx=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Lt=e=>ja(e)||Bx.has(e)||Fx.test(e),no=e=>lr(e,"length",tw),ja=e=>!!e&&!Number.isNaN(Number(e)),$i=e=>lr(e,"number",ja),Sr=e=>!!e&&Number.isInteger(Number(e)),Qx=e=>e.endsWith("%")&&ja(e.slice(0,-1)),V=e=>Ch.test(e),so=e=>Hx.test(e),Kx=new Set(["length","size","percentage"]),Xx=e=>lr(e,Kx,Ph),Yx=e=>lr(e,"position",Ph),Zx=new Set(["image","url"]),Jx=e=>lr(e,Zx,aw),ew=e=>lr(e,"",ow),kr=()=>!0,lr=(e,t,o)=>{const a=Ch.exec(e);return a?a[1]?typeof t=="string"?a[1]===t:t.has(a[1]):o(a[2]):!1},tw=e=>$x.test(e)&&!Vx.test(e),Ph=()=>!1,ow=e=>Gx.test(e),aw=e=>Wx.test(e),rw=()=>{const e=ae("colors"),t=ae("spacing"),o=ae("blur"),a=ae("brightness"),r=ae("borderColor"),n=ae("borderRadius"),s=ae("borderSpacing"),i=ae("borderWidth"),l=ae("contrast"),u=ae("grayscale"),d=ae("hueRotate"),p=ae("invert"),h=ae("gap"),c=ae("gradientColorStops"),S=ae("gradientColorStopPositions"),v=ae("inset"),x=ae("margin"),f=ae("opacity"),m=ae("padding"),g=ae("saturate"),w=ae("scale"),k=ae("sepia"),E=ae("skew"),C=ae("space"),A=ae("translate"),M=()=>["auto","contain","none"],N=()=>["auto","hidden","clip","visible","scroll"],U=()=>["auto",V,t],z=()=>[V,t],G=()=>["",Lt,no],R=()=>["auto",ja,V],K=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],F=()=>["solid","dashed","dotted","double","none"],H=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],q=()=>["start","end","center","between","around","evenly","stretch"],O=()=>["","0",V],I=()=>["auto","avoid","all","avoid-page","page","left","right","column"],$=()=>[ja,V];return{cacheSize:500,separator:":",theme:{colors:[kr],spacing:[Lt,no],blur:["none","",so,V],brightness:$(),borderColor:[e],borderRadius:["none","","full",so,V],borderSpacing:z(),borderWidth:G(),contrast:$(),grayscale:O(),hueRotate:$(),invert:O(),gap:z(),gradientColorStops:[e],gradientColorStopPositions:[Qx,no],inset:U(),margin:U(),opacity:$(),padding:z(),saturate:$(),scale:$(),sepia:O(),skew:$(),space:z(),translate:z()},classGroups:{aspect:[{aspect:["auto","square","video",V]}],container:["container"],columns:[{columns:[so]}],"break-after":[{"break-after":I()}],"break-before":[{"break-before":I()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...K(),V]}],overflow:[{overflow:N()}],"overflow-x":[{"overflow-x":N()}],"overflow-y":[{"overflow-y":N()}],overscroll:[{overscroll:M()}],"overscroll-x":[{"overscroll-x":M()}],"overscroll-y":[{"overscroll-y":M()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[v]}],"inset-x":[{"inset-x":[v]}],"inset-y":[{"inset-y":[v]}],start:[{start:[v]}],end:[{end:[v]}],top:[{top:[v]}],right:[{right:[v]}],bottom:[{bottom:[v]}],left:[{left:[v]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Sr,V]}],basis:[{basis:U()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",V]}],grow:[{grow:O()}],shrink:[{shrink:O()}],order:[{order:["first","last","none",Sr,V]}],"grid-cols":[{"grid-cols":[kr]}],"col-start-end":[{col:["auto",{span:["full",Sr,V]},V]}],"col-start":[{"col-start":R()}],"col-end":[{"col-end":R()}],"grid-rows":[{"grid-rows":[kr]}],"row-start-end":[{row:["auto",{span:[Sr,V]},V]}],"row-start":[{"row-start":R()}],"row-end":[{"row-end":R()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",V]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",V]}],gap:[{gap:[h]}],"gap-x":[{"gap-x":[h]}],"gap-y":[{"gap-y":[h]}],"justify-content":[{justify:["normal",...q()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...q(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...q(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[m]}],px:[{px:[m]}],py:[{py:[m]}],ps:[{ps:[m]}],pe:[{pe:[m]}],pt:[{pt:[m]}],pr:[{pr:[m]}],pb:[{pb:[m]}],pl:[{pl:[m]}],m:[{m:[x]}],mx:[{mx:[x]}],my:[{my:[x]}],ms:[{ms:[x]}],me:[{me:[x]}],mt:[{mt:[x]}],mr:[{mr:[x]}],mb:[{mb:[x]}],ml:[{ml:[x]}],"space-x":[{"space-x":[C]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[C]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",V,t]}],"min-w":[{"min-w":[V,t,"min","max","fit"]}],"max-w":[{"max-w":[V,t,"none","full","min","max","fit","prose",{screen:[so]},so]}],h:[{h:[V,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[V,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[V,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[V,t,"auto","min","max","fit"]}],"font-size":[{text:["base",so,no]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",$i]}],"font-family":[{font:[kr]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",V]}],"line-clamp":[{"line-clamp":["none",ja,$i]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Lt,V]}],"list-image":[{"list-image":["none",V]}],"list-style-type":[{list:["none","disc","decimal",V]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[f]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[f]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...F(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Lt,no]}],"underline-offset":[{"underline-offset":["auto",Lt,V]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:z()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",V]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",V]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[f]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...K(),Yx]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Xx]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Jx]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[S]}],"gradient-via-pos":[{via:[S]}],"gradient-to-pos":[{to:[S]}],"gradient-from":[{from:[c]}],"gradient-via":[{via:[c]}],"gradient-to":[{to:[c]}],rounded:[{rounded:[n]}],"rounded-s":[{"rounded-s":[n]}],"rounded-e":[{"rounded-e":[n]}],"rounded-t":[{"rounded-t":[n]}],"rounded-r":[{"rounded-r":[n]}],"rounded-b":[{"rounded-b":[n]}],"rounded-l":[{"rounded-l":[n]}],"rounded-ss":[{"rounded-ss":[n]}],"rounded-se":[{"rounded-se":[n]}],"rounded-ee":[{"rounded-ee":[n]}],"rounded-es":[{"rounded-es":[n]}],"rounded-tl":[{"rounded-tl":[n]}],"rounded-tr":[{"rounded-tr":[n]}],"rounded-br":[{"rounded-br":[n]}],"rounded-bl":[{"rounded-bl":[n]}],"border-w":[{border:[i]}],"border-w-x":[{"border-x":[i]}],"border-w-y":[{"border-y":[i]}],"border-w-s":[{"border-s":[i]}],"border-w-e":[{"border-e":[i]}],"border-w-t":[{"border-t":[i]}],"border-w-r":[{"border-r":[i]}],"border-w-b":[{"border-b":[i]}],"border-w-l":[{"border-l":[i]}],"border-opacity":[{"border-opacity":[f]}],"border-style":[{border:[...F(),"hidden"]}],"divide-x":[{"divide-x":[i]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[i]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[f]}],"divide-style":[{divide:F()}],"border-color":[{border:[r]}],"border-color-x":[{"border-x":[r]}],"border-color-y":[{"border-y":[r]}],"border-color-s":[{"border-s":[r]}],"border-color-e":[{"border-e":[r]}],"border-color-t":[{"border-t":[r]}],"border-color-r":[{"border-r":[r]}],"border-color-b":[{"border-b":[r]}],"border-color-l":[{"border-l":[r]}],"divide-color":[{divide:[r]}],"outline-style":[{outline:["",...F()]}],"outline-offset":[{"outline-offset":[Lt,V]}],"outline-w":[{outline:[Lt,no]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:G()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[f]}],"ring-offset-w":[{"ring-offset":[Lt,no]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",so,ew]}],"shadow-color":[{shadow:[kr]}],opacity:[{opacity:[f]}],"mix-blend":[{"mix-blend":[...H(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":H()}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[a]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",so,V]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[p]}],saturate:[{saturate:[g]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[a]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[p]}],"backdrop-opacity":[{"backdrop-opacity":[f]}],"backdrop-saturate":[{"backdrop-saturate":[g]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",V]}],duration:[{duration:$()}],ease:[{ease:["linear","in","out","in-out",V]}],delay:[{delay:$()}],animate:[{animate:["none","spin","ping","pulse","bounce",V]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[w]}],"scale-x":[{"scale-x":[w]}],"scale-y":[{"scale-y":[w]}],rotate:[{rotate:[Sr,V]}],"translate-x":[{"translate-x":[A]}],"translate-y":[{"translate-y":[A]}],"skew-x":[{"skew-x":[E]}],"skew-y":[{"skew-y":[E]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",V]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",V]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":z()}],"scroll-mx":[{"scroll-mx":z()}],"scroll-my":[{"scroll-my":z()}],"scroll-ms":[{"scroll-ms":z()}],"scroll-me":[{"scroll-me":z()}],"scroll-mt":[{"scroll-mt":z()}],"scroll-mr":[{"scroll-mr":z()}],"scroll-mb":[{"scroll-mb":z()}],"scroll-ml":[{"scroll-ml":z()}],"scroll-p":[{"scroll-p":z()}],"scroll-px":[{"scroll-px":z()}],"scroll-py":[{"scroll-py":z()}],"scroll-ps":[{"scroll-ps":z()}],"scroll-pe":[{"scroll-pe":z()}],"scroll-pt":[{"scroll-pt":z()}],"scroll-pr":[{"scroll-pr":z()}],"scroll-pb":[{"scroll-pb":z()}],"scroll-pl":[{"scroll-pl":z()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",V]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[Lt,no,$i]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},nw=Ux(rw);function pa(...e){return nw(yh(e))}const sw=cx,qh=y.forwardRef(({className:e,...t},o)=>b.jsx(ch,{ref:o,className:pa("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...t}));qh.displayName=ch.displayName;const iw=px("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),Ah=y.forwardRef(({className:e,variant:t,...o},a)=>b.jsx(ph,{ref:a,className:pa(iw({variant:t}),e),...o}));Ah.displayName=ph.displayName;const lw=y.forwardRef(({className:e,...t},o)=>b.jsx(hh,{ref:o,className:pa("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",e),...t}));lw.displayName=hh.displayName;const Oh=y.forwardRef(({className:e,...t},o)=>b.jsx(gh,{ref:o,className:pa("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...t,children:b.jsx(wh,{className:"h-4 w-4"})}));Oh.displayName=gh.displayName;const Th=y.forwardRef(({className:e,...t},o)=>b.jsx(mh,{ref:o,className:pa("text-sm font-semibold",e),...t}));Th.displayName=mh.displayName;const Dh=y.forwardRef(({className:e,...t},o)=>b.jsx(fh,{ref:o,className:pa("text-sm opacity-90",e),...t}));Dh.displayName=fh.displayName;function uw(){const{toasts:e}=mb();return b.jsxs(sw,{children:[e.map(function({id:t,title:o,description:a,action:r,...n}){return b.jsxs(Ah,{...n,children:[b.jsxs("div",{className:"grid gap-1",children:[o&&b.jsx(Th,{children:o}),a&&b.jsx(Dh,{children:a})]}),r,b.jsx(Oh,{})]},t)}),b.jsx(qh,{})]})}var dw=e=>{switch(e){case"success":return mw;case"info":return hw;case"warning":return fw;case"error":return gw;default:return null}},cw=Array(12).fill(0),pw=({visible:e,className:t})=>D.createElement("div",{className:["sonner-loading-wrapper",t].filter(Boolean).join(" "),"data-visible":e},D.createElement("div",{className:"sonner-spinner"},cw.map((o,a)=>D.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${a}`})))),mw=D.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},D.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),fw=D.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},D.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),hw=D.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},D.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),gw=D.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},D.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),vw=D.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},D.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),D.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),yw=()=>{let[e,t]=D.useState(document.hidden);return D.useEffect(()=>{let o=()=>{t(document.hidden)};return document.addEventListener("visibilitychange",o),()=>window.removeEventListener("visibilitychange",o)},[]),e},Gl=1,bw=class{constructor(){this.subscribe=e=>(this.subscribers.push(e),()=>{let t=this.subscribers.indexOf(e);this.subscribers.splice(t,1)}),this.publish=e=>{this.subscribers.forEach(t=>t(e))},this.addToast=e=>{this.publish(e),this.toasts=[...this.toasts,e]},this.create=e=>{var t;let{message:o,...a}=e,r=typeof(e==null?void 0:e.id)=="number"||((t=e.id)==null?void 0:t.length)>0?e.id:Gl++,n=this.toasts.find(i=>i.id===r),s=e.dismissible===void 0?!0:e.dismissible;return this.dismissedToasts.has(r)&&this.dismissedToasts.delete(r),n?this.toasts=this.toasts.map(i=>i.id===r?(this.publish({...i,...e,id:r,title:o}),{...i,...e,id:r,dismissible:s,title:o}):i):this.addToast({title:o,...a,dismissible:s,id:r}),r},this.dismiss=e=>(this.dismissedToasts.add(e),e||this.toasts.forEach(t=>{this.subscribers.forEach(o=>o({id:t.id,dismiss:!0}))}),this.subscribers.forEach(t=>t({id:e,dismiss:!0})),e),this.message=(e,t)=>this.create({...t,message:e}),this.error=(e,t)=>this.create({...t,message:e,type:"error"}),this.success=(e,t)=>this.create({...t,type:"success",message:e}),this.info=(e,t)=>this.create({...t,type:"info",message:e}),this.warning=(e,t)=>this.create({...t,type:"warning",message:e}),this.loading=(e,t)=>this.create({...t,type:"loading",message:e}),this.promise=(e,t)=>{if(!t)return;let o;t.loading!==void 0&&(o=this.create({...t,promise:e,type:"loading",message:t.loading,description:typeof t.description!="function"?t.description:void 0}));let a=e instanceof Promise?e:e(),r=o!==void 0,n,s=a.then(async l=>{if(n=["resolve",l],D.isValidElement(l))r=!1,this.create({id:o,type:"default",message:l});else if(ww(l)&&!l.ok){r=!1;let u=typeof t.error=="function"?await t.error(`HTTP error! status: ${l.status}`):t.error,d=typeof t.description=="function"?await t.description(`HTTP error! status: ${l.status}`):t.description;this.create({id:o,type:"error",message:u,description:d})}else if(t.success!==void 0){r=!1;let u=typeof t.success=="function"?await t.success(l):t.success,d=typeof t.description=="function"?await t.description(l):t.description;this.create({id:o,type:"success",message:u,description:d})}}).catch(async l=>{if(n=["reject",l],t.error!==void 0){r=!1;let u=typeof t.error=="function"?await t.error(l):t.error,d=typeof t.description=="function"?await t.description(l):t.description;this.create({id:o,type:"error",message:u,description:d})}}).finally(()=>{var l;r&&(this.dismiss(o),o=void 0),(l=t.finally)==null||l.call(t)}),i=()=>new Promise((l,u)=>s.then(()=>n[0]==="reject"?u(n[1]):l(n[1])).catch(u));return typeof o!="string"&&typeof o!="number"?{unwrap:i}:Object.assign(o,{unwrap:i})},this.custom=(e,t)=>{let o=(t==null?void 0:t.id)||Gl++;return this.create({jsx:e(o),id:o,...t}),o},this.getActiveToasts=()=>this.toasts.filter(e=>!this.dismissedToasts.has(e.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}},je=new bw,xw=(e,t)=>{let o=(t==null?void 0:t.id)||Gl++;return je.addToast({title:e,...t,id:o}),o},ww=e=>e&&typeof e=="object"&&"ok"in e&&typeof e.ok=="boolean"&&"status"in e&&typeof e.status=="number",Sw=xw,kw=()=>je.toasts,Ew=()=>je.getActiveToasts();Object.assign(Sw,{success:je.success,info:je.info,warning:je.warning,error:je.error,custom:je.custom,message:je.message,promise:je.promise,dismiss:je.dismiss,loading:je.loading},{getHistory:kw,getToasts:Ew});function Cw(e,{insertAt:t}={}){if(typeof document>"u")return;let o=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",t==="top"&&o.firstChild?o.insertBefore(a,o.firstChild):o.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}Cw(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function Fn(e){return e.label!==void 0}var Pw=3,qw="32px",Aw="16px",Vc=4e3,Ow=356,Tw=14,Dw=20,Nw=200;function mt(...e){return e.filter(Boolean).join(" ")}function Rw(e){let[t,o]=e.split("-"),a=[];return t&&a.push(t),o&&a.push(o),a}var Mw=e=>{var t,o,a,r,n,s,i,l,u,d,p;let{invert:h,toast:c,unstyled:S,interacting:v,setHeights:x,visibleToasts:f,heights:m,index:g,toasts:w,expanded:k,removeToast:E,defaultRichColors:C,closeButton:A,style:M,cancelButtonStyle:N,actionButtonStyle:U,className:z="",descriptionClassName:G="",duration:R,position:K,gap:F,loadingIcon:H,expandByDefault:q,classNames:O,icons:I,closeButtonAriaLabel:$="Close toast",pauseWhenPageIsHidden:_}=e,[W,X]=D.useState(null),[fe,qe]=D.useState(null),[J,fa]=D.useState(!1),[Zt,jo]=D.useState(!1),[Jt,ha]=D.useState(!1),[eo,yn]=D.useState(!1),[di,bn]=D.useState(!1),[ci,pr]=D.useState(0),[ga,yd]=D.useState(0),mr=D.useRef(c.duration||R||Vc),bd=D.useRef(null),Uo=D.useRef(null),qg=g===0,Ag=g+1<=f,tt=c.type,va=c.dismissible!==!1,Og=c.className||"",Tg=c.descriptionClassName||"",xn=D.useMemo(()=>m.findIndex(B=>B.toastId===c.id)||0,[m,c.id]),Dg=D.useMemo(()=>{var B;return(B=c.closeButton)!=null?B:A},[c.closeButton,A]),xd=D.useMemo(()=>c.duration||R||Vc,[c.duration,R]),pi=D.useRef(0),ya=D.useRef(0),wd=D.useRef(0),ba=D.useRef(null),[Ng,Rg]=K.split("-"),Sd=D.useMemo(()=>m.reduce((B,te,se)=>se>=xn?B:B+te.height,0),[m,xn]),kd=yw(),Mg=c.invert||h,mi=tt==="loading";ya.current=D.useMemo(()=>xn*F+Sd,[xn,Sd]),D.useEffect(()=>{mr.current=xd},[xd]),D.useEffect(()=>{fa(!0)},[]),D.useEffect(()=>{let B=Uo.current;if(B){let te=B.getBoundingClientRect().height;return yd(te),x(se=>[{toastId:c.id,height:te,position:c.position},...se]),()=>x(se=>se.filter(ut=>ut.toastId!==c.id))}},[x,c.id]),D.useLayoutEffect(()=>{if(!J)return;let B=Uo.current,te=B.style.height;B.style.height="auto";let se=B.getBoundingClientRect().height;B.style.height=te,yd(se),x(ut=>ut.find(dt=>dt.toastId===c.id)?ut.map(dt=>dt.toastId===c.id?{...dt,height:se}:dt):[{toastId:c.id,height:se,position:c.position},...ut])},[J,c.title,c.description,x,c.id]);let to=D.useCallback(()=>{jo(!0),pr(ya.current),x(B=>B.filter(te=>te.toastId!==c.id)),setTimeout(()=>{E(c)},Nw)},[c,E,x,ya]);D.useEffect(()=>{if(c.promise&&tt==="loading"||c.duration===1/0||c.type==="loading")return;let B;return k||v||_&&kd?(()=>{if(wd.current<pi.current){let te=new Date().getTime()-pi.current;mr.current=mr.current-te}wd.current=new Date().getTime()})():mr.current!==1/0&&(pi.current=new Date().getTime(),B=setTimeout(()=>{var te;(te=c.onAutoClose)==null||te.call(c,c),to()},mr.current)),()=>clearTimeout(B)},[k,v,c,tt,_,kd,to]),D.useEffect(()=>{c.delete&&to()},[to,c.delete]);function Ig(){var B,te,se;return I!=null&&I.loading?D.createElement("div",{className:mt(O==null?void 0:O.loader,(B=c==null?void 0:c.classNames)==null?void 0:B.loader,"sonner-loader"),"data-visible":tt==="loading"},I.loading):H?D.createElement("div",{className:mt(O==null?void 0:O.loader,(te=c==null?void 0:c.classNames)==null?void 0:te.loader,"sonner-loader"),"data-visible":tt==="loading"},H):D.createElement(pw,{className:mt(O==null?void 0:O.loader,(se=c==null?void 0:c.classNames)==null?void 0:se.loader),visible:tt==="loading"})}return D.createElement("li",{tabIndex:0,ref:Uo,className:mt(z,Og,O==null?void 0:O.toast,(t=c==null?void 0:c.classNames)==null?void 0:t.toast,O==null?void 0:O.default,O==null?void 0:O[tt],(o=c==null?void 0:c.classNames)==null?void 0:o[tt]),"data-sonner-toast":"","data-rich-colors":(a=c.richColors)!=null?a:C,"data-styled":!(c.jsx||c.unstyled||S),"data-mounted":J,"data-promise":!!c.promise,"data-swiped":di,"data-removed":Zt,"data-visible":Ag,"data-y-position":Ng,"data-x-position":Rg,"data-index":g,"data-front":qg,"data-swiping":Jt,"data-dismissible":va,"data-type":tt,"data-invert":Mg,"data-swipe-out":eo,"data-swipe-direction":fe,"data-expanded":!!(k||q&&J),style:{"--index":g,"--toasts-before":g,"--z-index":w.length-g,"--offset":`${Zt?ci:ya.current}px`,"--initial-height":q?"auto":`${ga}px`,...M,...c.style},onDragEnd:()=>{ha(!1),X(null),ba.current=null},onPointerDown:B=>{mi||!va||(bd.current=new Date,pr(ya.current),B.target.setPointerCapture(B.pointerId),B.target.tagName!=="BUTTON"&&(ha(!0),ba.current={x:B.clientX,y:B.clientY}))},onPointerUp:()=>{var B,te,se,ut;if(eo||!va)return;ba.current=null;let dt=Number(((B=Uo.current)==null?void 0:B.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),oo=Number(((te=Uo.current)==null?void 0:te.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),Fo=new Date().getTime()-((se=bd.current)==null?void 0:se.getTime()),ct=W==="x"?dt:oo,ao=Math.abs(ct)/Fo;if(Math.abs(ct)>=Dw||ao>.11){pr(ya.current),(ut=c.onDismiss)==null||ut.call(c,c),qe(W==="x"?dt>0?"right":"left":oo>0?"down":"up"),to(),yn(!0),bn(!1);return}ha(!1),X(null)},onPointerMove:B=>{var te,se,ut,dt;if(!ba.current||!va||((te=window.getSelection())==null?void 0:te.toString().length)>0)return;let oo=B.clientY-ba.current.y,Fo=B.clientX-ba.current.x,ct=(se=e.swipeDirections)!=null?se:Rw(K);!W&&(Math.abs(Fo)>1||Math.abs(oo)>1)&&X(Math.abs(Fo)>Math.abs(oo)?"x":"y");let ao={x:0,y:0};W==="y"?(ct.includes("top")||ct.includes("bottom"))&&(ct.includes("top")&&oo<0||ct.includes("bottom")&&oo>0)&&(ao.y=oo):W==="x"&&(ct.includes("left")||ct.includes("right"))&&(ct.includes("left")&&Fo<0||ct.includes("right")&&Fo>0)&&(ao.x=Fo),(Math.abs(ao.x)>0||Math.abs(ao.y)>0)&&bn(!0),(ut=Uo.current)==null||ut.style.setProperty("--swipe-amount-x",`${ao.x}px`),(dt=Uo.current)==null||dt.style.setProperty("--swipe-amount-y",`${ao.y}px`)}},Dg&&!c.jsx?D.createElement("button",{"aria-label":$,"data-disabled":mi,"data-close-button":!0,onClick:mi||!va?()=>{}:()=>{var B;to(),(B=c.onDismiss)==null||B.call(c,c)},className:mt(O==null?void 0:O.closeButton,(r=c==null?void 0:c.classNames)==null?void 0:r.closeButton)},(n=I==null?void 0:I.close)!=null?n:vw):null,c.jsx||y.isValidElement(c.title)?c.jsx?c.jsx:typeof c.title=="function"?c.title():c.title:D.createElement(D.Fragment,null,tt||c.icon||c.promise?D.createElement("div",{"data-icon":"",className:mt(O==null?void 0:O.icon,(s=c==null?void 0:c.classNames)==null?void 0:s.icon)},c.promise||c.type==="loading"&&!c.icon?c.icon||Ig():null,c.type!=="loading"?c.icon||(I==null?void 0:I[tt])||dw(tt):null):null,D.createElement("div",{"data-content":"",className:mt(O==null?void 0:O.content,(i=c==null?void 0:c.classNames)==null?void 0:i.content)},D.createElement("div",{"data-title":"",className:mt(O==null?void 0:O.title,(l=c==null?void 0:c.classNames)==null?void 0:l.title)},typeof c.title=="function"?c.title():c.title),c.description?D.createElement("div",{"data-description":"",className:mt(G,Tg,O==null?void 0:O.description,(u=c==null?void 0:c.classNames)==null?void 0:u.description)},typeof c.description=="function"?c.description():c.description):null),y.isValidElement(c.cancel)?c.cancel:c.cancel&&Fn(c.cancel)?D.createElement("button",{"data-button":!0,"data-cancel":!0,style:c.cancelButtonStyle||N,onClick:B=>{var te,se;Fn(c.cancel)&&va&&((se=(te=c.cancel).onClick)==null||se.call(te,B),to())},className:mt(O==null?void 0:O.cancelButton,(d=c==null?void 0:c.classNames)==null?void 0:d.cancelButton)},c.cancel.label):null,y.isValidElement(c.action)?c.action:c.action&&Fn(c.action)?D.createElement("button",{"data-button":!0,"data-action":!0,style:c.actionButtonStyle||U,onClick:B=>{var te,se;Fn(c.action)&&((se=(te=c.action).onClick)==null||se.call(te,B),!B.defaultPrevented&&to())},className:mt(O==null?void 0:O.actionButton,(p=c==null?void 0:c.classNames)==null?void 0:p.actionButton)},c.action.label):null))};function Gc(){if(typeof window>"u"||typeof document>"u")return"ltr";let e=document.documentElement.getAttribute("dir");return e==="auto"||!e?window.getComputedStyle(document.documentElement).direction:e}function Iw(e,t){let o={};return[e,t].forEach((a,r)=>{let n=r===1,s=n?"--mobile-offset":"--offset",i=n?Aw:qw;function l(u){["top","right","bottom","left"].forEach(d=>{o[`${s}-${d}`]=typeof u=="number"?`${u}px`:u})}typeof a=="number"||typeof a=="string"?l(a):typeof a=="object"?["top","right","bottom","left"].forEach(u=>{a[u]===void 0?o[`${s}-${u}`]=i:o[`${s}-${u}`]=typeof a[u]=="number"?`${a[u]}px`:a[u]}):l(i)}),o}var Lw=y.forwardRef(function(e,t){let{invert:o,position:a="bottom-right",hotkey:r=["altKey","KeyT"],expand:n,closeButton:s,className:i,offset:l,mobileOffset:u,theme:d="light",richColors:p,duration:h,style:c,visibleToasts:S=Pw,toastOptions:v,dir:x=Gc(),gap:f=Tw,loadingIcon:m,icons:g,containerAriaLabel:w="Notifications",pauseWhenPageIsHidden:k}=e,[E,C]=D.useState([]),A=D.useMemo(()=>Array.from(new Set([a].concat(E.filter(_=>_.position).map(_=>_.position)))),[E,a]),[M,N]=D.useState([]),[U,z]=D.useState(!1),[G,R]=D.useState(!1),[K,F]=D.useState(d!=="system"?d:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),H=D.useRef(null),q=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),O=D.useRef(null),I=D.useRef(!1),$=D.useCallback(_=>{C(W=>{var X;return(X=W.find(fe=>fe.id===_.id))!=null&&X.delete||je.dismiss(_.id),W.filter(({id:fe})=>fe!==_.id)})},[]);return D.useEffect(()=>je.subscribe(_=>{if(_.dismiss){C(W=>W.map(X=>X.id===_.id?{...X,delete:!0}:X));return}setTimeout(()=>{Vf.flushSync(()=>{C(W=>{let X=W.findIndex(fe=>fe.id===_.id);return X!==-1?[...W.slice(0,X),{...W[X],..._},...W.slice(X+1)]:[_,...W]})})})}),[]),D.useEffect(()=>{if(d!=="system"){F(d);return}if(d==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?F("dark"):F("light")),typeof window>"u")return;let _=window.matchMedia("(prefers-color-scheme: dark)");try{_.addEventListener("change",({matches:W})=>{F(W?"dark":"light")})}catch{_.addListener(({matches:X})=>{try{F(X?"dark":"light")}catch(fe){console.error(fe)}})}},[d]),D.useEffect(()=>{E.length<=1&&z(!1)},[E]),D.useEffect(()=>{let _=W=>{var X,fe;r.every(qe=>W[qe]||W.code===qe)&&(z(!0),(X=H.current)==null||X.focus()),W.code==="Escape"&&(document.activeElement===H.current||(fe=H.current)!=null&&fe.contains(document.activeElement))&&z(!1)};return document.addEventListener("keydown",_),()=>document.removeEventListener("keydown",_)},[r]),D.useEffect(()=>{if(H.current)return()=>{O.current&&(O.current.focus({preventScroll:!0}),O.current=null,I.current=!1)}},[H.current]),D.createElement("section",{ref:t,"aria-label":`${w} ${q}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},A.map((_,W)=>{var X;let[fe,qe]=_.split("-");return E.length?D.createElement("ol",{key:_,dir:x==="auto"?Gc():x,tabIndex:-1,ref:H,className:i,"data-sonner-toaster":!0,"data-theme":K,"data-y-position":fe,"data-lifted":U&&E.length>1&&!n,"data-x-position":qe,style:{"--front-toast-height":`${((X=M[0])==null?void 0:X.height)||0}px`,"--width":`${Ow}px`,"--gap":`${f}px`,...c,...Iw(l,u)},onBlur:J=>{I.current&&!J.currentTarget.contains(J.relatedTarget)&&(I.current=!1,O.current&&(O.current.focus({preventScroll:!0}),O.current=null))},onFocus:J=>{J.target instanceof HTMLElement&&J.target.dataset.dismissible==="false"||I.current||(I.current=!0,O.current=J.relatedTarget)},onMouseEnter:()=>z(!0),onMouseMove:()=>z(!0),onMouseLeave:()=>{G||z(!1)},onDragEnd:()=>z(!1),onPointerDown:J=>{J.target instanceof HTMLElement&&J.target.dataset.dismissible==="false"||R(!0)},onPointerUp:()=>R(!1)},E.filter(J=>!J.position&&W===0||J.position===_).map((J,fa)=>{var Zt,jo;return D.createElement(Mw,{key:J.id,icons:g,index:fa,toast:J,defaultRichColors:p,duration:(Zt=v==null?void 0:v.duration)!=null?Zt:h,className:v==null?void 0:v.className,descriptionClassName:v==null?void 0:v.descriptionClassName,invert:o,visibleToasts:S,closeButton:(jo=v==null?void 0:v.closeButton)!=null?jo:s,interacting:G,position:_,style:v==null?void 0:v.style,unstyled:v==null?void 0:v.unstyled,classNames:v==null?void 0:v.classNames,cancelButtonStyle:v==null?void 0:v.cancelButtonStyle,actionButtonStyle:v==null?void 0:v.actionButtonStyle,removeToast:$,toasts:E.filter(Jt=>Jt.position==J.position),heights:M.filter(Jt=>Jt.position==J.position),setHeights:N,expandByDefault:n,gap:f,loadingIcon:m,expanded:U,pauseWhenPageIsHidden:k,swipeDirections:e.swipeDirections})})):null}))});const zw=({...e})=>b.jsx(Lw,{className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...e}),_w=["top","right","bottom","left"],Mo=Math.min,Qe=Math.max,Os=Math.round,Bn=Math.floor,Mt=e=>({x:e,y:e}),jw={left:"right",right:"left",bottom:"top",top:"bottom"};function Wl(e,t,o){return Qe(e,Mo(t,o))}function Qt(e,t){return typeof e=="function"?e(t):e}function Kt(e){return e.split("-")[0]}function ur(e){return e.split("-")[1]}function id(e){return e==="x"?"y":"x"}function ld(e){return e==="y"?"height":"width"}function Dt(e){const t=e[0];return t==="t"||t==="b"?"y":"x"}function ud(e){return id(Dt(e))}function Uw(e,t,o){o===void 0&&(o=!1);const a=ur(e),r=ud(e),n=ld(r);let s=r==="x"?a===(o?"end":"start")?"right":"left":a==="start"?"bottom":"top";return t.reference[n]>t.floating[n]&&(s=Ts(s)),[s,Ts(s)]}function Fw(e){const t=Ts(e);return[Ql(e),t,Ql(t)]}function Ql(e){return e.includes("start")?e.replace("start","end"):e.replace("end","start")}const Wc=["left","right"],Qc=["right","left"],Bw=["top","bottom"],Hw=["bottom","top"];function $w(e,t,o){switch(e){case"top":case"bottom":return o?t?Qc:Wc:t?Wc:Qc;case"left":case"right":return t?Bw:Hw;default:return[]}}function Vw(e,t,o,a){const r=ur(e);let n=$w(Kt(e),o==="start",a);return r&&(n=n.map(s=>s+"-"+r),t&&(n=n.concat(n.map(Ql)))),n}function Ts(e){const t=Kt(e);return jw[t]+e.slice(t.length)}function Gw(e){return{top:0,right:0,bottom:0,left:0,...e}}function Nh(e){return typeof e!="number"?Gw(e):{top:e,right:e,bottom:e,left:e}}function Ds(e){const{x:t,y:o,width:a,height:r}=e;return{width:a,height:r,top:o,left:t,right:t+a,bottom:o+r,x:t,y:o}}function Kc(e,t,o){let{reference:a,floating:r}=e;const n=Dt(t),s=ud(t),i=ld(s),l=Kt(t),u=n==="y",d=a.x+a.width/2-r.width/2,p=a.y+a.height/2-r.height/2,h=a[i]/2-r[i]/2;let c;switch(l){case"top":c={x:d,y:a.y-r.height};break;case"bottom":c={x:d,y:a.y+a.height};break;case"right":c={x:a.x+a.width,y:p};break;case"left":c={x:a.x-r.width,y:p};break;default:c={x:a.x,y:a.y}}switch(ur(t)){case"start":c[s]-=h*(o&&u?-1:1);break;case"end":c[s]+=h*(o&&u?-1:1);break}return c}async function Ww(e,t){var o;t===void 0&&(t={});const{x:a,y:r,platform:n,rects:s,elements:i,strategy:l}=e,{boundary:u="clippingAncestors",rootBoundary:d="viewport",elementContext:p="floating",altBoundary:h=!1,padding:c=0}=Qt(t,e),S=Nh(c),x=i[h?p==="floating"?"reference":"floating":p],f=Ds(await n.getClippingRect({element:(o=await(n.isElement==null?void 0:n.isElement(x)))==null||o?x:x.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(i.floating)),boundary:u,rootBoundary:d,strategy:l})),m=p==="floating"?{x:a,y:r,width:s.floating.width,height:s.floating.height}:s.reference,g=await(n.getOffsetParent==null?void 0:n.getOffsetParent(i.floating)),w=await(n.isElement==null?void 0:n.isElement(g))?await(n.getScale==null?void 0:n.getScale(g))||{x:1,y:1}:{x:1,y:1},k=Ds(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:i,rect:m,offsetParent:g,strategy:l}):m);return{top:(f.top-k.top+S.top)/w.y,bottom:(k.bottom-f.bottom+S.bottom)/w.y,left:(f.left-k.left+S.left)/w.x,right:(k.right-f.right+S.right)/w.x}}const Qw=50,Kw=async(e,t,o)=>{const{placement:a="bottom",strategy:r="absolute",middleware:n=[],platform:s}=o,i=s.detectOverflow?s:{...s,detectOverflow:Ww},l=await(s.isRTL==null?void 0:s.isRTL(t));let u=await s.getElementRects({reference:e,floating:t,strategy:r}),{x:d,y:p}=Kc(u,a,l),h=a,c=0;const S={};for(let v=0;v<n.length;v++){const x=n[v];if(!x)continue;const{name:f,fn:m}=x,{x:g,y:w,data:k,reset:E}=await m({x:d,y:p,initialPlacement:a,placement:h,strategy:r,middlewareData:S,rects:u,platform:i,elements:{reference:e,floating:t}});d=g??d,p=w??p,S[f]={...S[f],...k},E&&c<Qw&&(c++,typeof E=="object"&&(E.placement&&(h=E.placement),E.rects&&(u=E.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:r}):E.rects),{x:d,y:p}=Kc(u,h,l)),v=-1)}return{x:d,y:p,placement:h,strategy:r,middlewareData:S}},Xw=e=>({name:"arrow",options:e,async fn(t){const{x:o,y:a,placement:r,rects:n,platform:s,elements:i,middlewareData:l}=t,{element:u,padding:d=0}=Qt(e,t)||{};if(u==null)return{};const p=Nh(d),h={x:o,y:a},c=ud(r),S=ld(c),v=await s.getDimensions(u),x=c==="y",f=x?"top":"left",m=x?"bottom":"right",g=x?"clientHeight":"clientWidth",w=n.reference[S]+n.reference[c]-h[c]-n.floating[S],k=h[c]-n.reference[c],E=await(s.getOffsetParent==null?void 0:s.getOffsetParent(u));let C=E?E[g]:0;(!C||!await(s.isElement==null?void 0:s.isElement(E)))&&(C=i.floating[g]||n.floating[S]);const A=w/2-k/2,M=C/2-v[S]/2-1,N=Mo(p[f],M),U=Mo(p[m],M),z=N,G=C-v[S]-U,R=C/2-v[S]/2+A,K=Wl(z,R,G),F=!l.arrow&&ur(r)!=null&&R!==K&&n.reference[S]/2-(R<z?N:U)-v[S]/2<0,H=F?R<z?R-z:R-G:0;return{[c]:h[c]+H,data:{[c]:K,centerOffset:R-K-H,...F&&{alignmentOffset:H}},reset:F}}}),Yw=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var o,a;const{placement:r,middlewareData:n,rects:s,initialPlacement:i,platform:l,elements:u}=t,{mainAxis:d=!0,crossAxis:p=!0,fallbackPlacements:h,fallbackStrategy:c="bestFit",fallbackAxisSideDirection:S="none",flipAlignment:v=!0,...x}=Qt(e,t);if((o=n.arrow)!=null&&o.alignmentOffset)return{};const f=Kt(r),m=Dt(i),g=Kt(i)===i,w=await(l.isRTL==null?void 0:l.isRTL(u.floating)),k=h||(g||!v?[Ts(i)]:Fw(i)),E=S!=="none";!h&&E&&k.push(...Vw(i,v,S,w));const C=[i,...k],A=await l.detectOverflow(t,x),M=[];let N=((a=n.flip)==null?void 0:a.overflows)||[];if(d&&M.push(A[f]),p){const R=Uw(r,s,w);M.push(A[R[0]],A[R[1]])}if(N=[...N,{placement:r,overflows:M}],!M.every(R=>R<=0)){var U,z;const R=(((U=n.flip)==null?void 0:U.index)||0)+1,K=C[R];if(K&&(!(p==="alignment"?m!==Dt(K):!1)||N.every(q=>Dt(q.placement)===m?q.overflows[0]>0:!0)))return{data:{index:R,overflows:N},reset:{placement:K}};let F=(z=N.filter(H=>H.overflows[0]<=0).sort((H,q)=>H.overflows[1]-q.overflows[1])[0])==null?void 0:z.placement;if(!F)switch(c){case"bestFit":{var G;const H=(G=N.filter(q=>{if(E){const O=Dt(q.placement);return O===m||O==="y"}return!0}).map(q=>[q.placement,q.overflows.filter(O=>O>0).reduce((O,I)=>O+I,0)]).sort((q,O)=>q[1]-O[1])[0])==null?void 0:G[0];H&&(F=H);break}case"initialPlacement":F=i;break}if(r!==F)return{reset:{placement:F}}}return{}}}};function Xc(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function Yc(e){return _w.some(t=>e[t]>=0)}const Zw=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:o,platform:a}=t,{strategy:r="referenceHidden",...n}=Qt(e,t);switch(r){case"referenceHidden":{const s=await a.detectOverflow(t,{...n,elementContext:"reference"}),i=Xc(s,o.reference);return{data:{referenceHiddenOffsets:i,referenceHidden:Yc(i)}}}case"escaped":{const s=await a.detectOverflow(t,{...n,altBoundary:!0}),i=Xc(s,o.floating);return{data:{escapedOffsets:i,escaped:Yc(i)}}}default:return{}}}}},Rh=new Set(["left","top"]);async function Jw(e,t){const{placement:o,platform:a,elements:r}=e,n=await(a.isRTL==null?void 0:a.isRTL(r.floating)),s=Kt(o),i=ur(o),l=Dt(o)==="y",u=Rh.has(s)?-1:1,d=n&&l?-1:1,p=Qt(t,e);let{mainAxis:h,crossAxis:c,alignmentAxis:S}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return i&&typeof S=="number"&&(c=i==="end"?S*-1:S),l?{x:c*d,y:h*u}:{x:h*u,y:c*d}}const e0=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var o,a;const{x:r,y:n,placement:s,middlewareData:i}=t,l=await Jw(t,e);return s===((o=i.offset)==null?void 0:o.placement)&&(a=i.arrow)!=null&&a.alignmentOffset?{}:{x:r+l.x,y:n+l.y,data:{...l,placement:s}}}}},t0=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:o,y:a,placement:r,platform:n}=t,{mainAxis:s=!0,crossAxis:i=!1,limiter:l={fn:f=>{let{x:m,y:g}=f;return{x:m,y:g}}},...u}=Qt(e,t),d={x:o,y:a},p=await n.detectOverflow(t,u),h=Dt(Kt(r)),c=id(h);let S=d[c],v=d[h];if(s){const f=c==="y"?"top":"left",m=c==="y"?"bottom":"right",g=S+p[f],w=S-p[m];S=Wl(g,S,w)}if(i){const f=h==="y"?"top":"left",m=h==="y"?"bottom":"right",g=v+p[f],w=v-p[m];v=Wl(g,v,w)}const x=l.fn({...t,[c]:S,[h]:v});return{...x,data:{x:x.x-o,y:x.y-a,enabled:{[c]:s,[h]:i}}}}}},o0=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:o,y:a,placement:r,rects:n,middlewareData:s}=t,{offset:i=0,mainAxis:l=!0,crossAxis:u=!0}=Qt(e,t),d={x:o,y:a},p=Dt(r),h=id(p);let c=d[h],S=d[p];const v=Qt(i,t),x=typeof v=="number"?{mainAxis:v,crossAxis:0}:{mainAxis:0,crossAxis:0,...v};if(l){const g=h==="y"?"height":"width",w=n.reference[h]-n.floating[g]+x.mainAxis,k=n.reference[h]+n.reference[g]-x.mainAxis;c<w?c=w:c>k&&(c=k)}if(u){var f,m;const g=h==="y"?"width":"height",w=Rh.has(Kt(r)),k=n.reference[p]-n.floating[g]+(w&&((f=s.offset)==null?void 0:f[p])||0)+(w?0:x.crossAxis),E=n.reference[p]+n.reference[g]+(w?0:((m=s.offset)==null?void 0:m[p])||0)-(w?x.crossAxis:0);S<k?S=k:S>E&&(S=E)}return{[h]:c,[p]:S}}}},a0=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var o,a;const{placement:r,rects:n,platform:s,elements:i}=t,{apply:l=()=>{},...u}=Qt(e,t),d=await s.detectOverflow(t,u),p=Kt(r),h=ur(r),c=Dt(r)==="y",{width:S,height:v}=n.floating;let x,f;p==="top"||p==="bottom"?(x=p,f=h===(await(s.isRTL==null?void 0:s.isRTL(i.floating))?"start":"end")?"left":"right"):(f=p,x=h==="end"?"top":"bottom");const m=v-d.top-d.bottom,g=S-d.left-d.right,w=Mo(v-d[x],m),k=Mo(S-d[f],g),E=!t.middlewareData.shift;let C=w,A=k;if((o=t.middlewareData.shift)!=null&&o.enabled.x&&(A=g),(a=t.middlewareData.shift)!=null&&a.enabled.y&&(C=m),E&&!h){const N=Qe(d.left,0),U=Qe(d.right,0),z=Qe(d.top,0),G=Qe(d.bottom,0);c?A=S-2*(N!==0||U!==0?N+U:Qe(d.left,d.right)):C=v-2*(z!==0||G!==0?z+G:Qe(d.top,d.bottom))}await l({...t,availableWidth:A,availableHeight:C});const M=await s.getDimensions(i.floating);return S!==M.width||v!==M.height?{reset:{rects:!0}}:{}}}};function Js(){return typeof window<"u"}function dr(e){return Mh(e)?(e.nodeName||"").toLowerCase():"#document"}function Ye(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function It(e){var t;return(t=(Mh(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Mh(e){return Js()?e instanceof Node||e instanceof Ye(e).Node:!1}function kt(e){return Js()?e instanceof Element||e instanceof Ye(e).Element:!1}function Yt(e){return Js()?e instanceof HTMLElement||e instanceof Ye(e).HTMLElement:!1}function Zc(e){return!Js()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Ye(e).ShadowRoot}function vn(e){const{overflow:t,overflowX:o,overflowY:a,display:r}=Et(e);return/auto|scroll|overlay|hidden|clip/.test(t+a+o)&&r!=="inline"&&r!=="contents"}function r0(e){return/^(table|td|th)$/.test(dr(e))}function ei(e){try{if(e.matches(":popover-open"))return!0}catch{}try{return e.matches(":modal")}catch{return!1}}const n0=/transform|translate|scale|rotate|perspective|filter/,s0=/paint|layout|strict|content/,Bo=e=>!!e&&e!=="none";let Vi;function dd(e){const t=kt(e)?Et(e):e;return Bo(t.transform)||Bo(t.translate)||Bo(t.scale)||Bo(t.rotate)||Bo(t.perspective)||!cd()&&(Bo(t.backdropFilter)||Bo(t.filter))||n0.test(t.willChange||"")||s0.test(t.contain||"")}function i0(e){let t=Io(e);for(;Yt(t)&&!ar(t);){if(dd(t))return t;if(ei(t))return null;t=Io(t)}return null}function cd(){return Vi==null&&(Vi=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),Vi}function ar(e){return/^(html|body|#document)$/.test(dr(e))}function Et(e){return Ye(e).getComputedStyle(e)}function ti(e){return kt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Io(e){if(dr(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Zc(e)&&e.host||It(e);return Zc(t)?t.host:t}function Ih(e){const t=Io(e);return ar(t)?e.ownerDocument?e.ownerDocument.body:e.body:Yt(t)&&vn(t)?t:Ih(t)}function tn(e,t,o){var a;t===void 0&&(t=[]),o===void 0&&(o=!0);const r=Ih(e),n=r===((a=e.ownerDocument)==null?void 0:a.body),s=Ye(r);if(n){const i=Kl(s);return t.concat(s,s.visualViewport||[],vn(r)?r:[],i&&o?tn(i):[])}else return t.concat(r,tn(r,[],o))}function Kl(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Lh(e){const t=Et(e);let o=parseFloat(t.width)||0,a=parseFloat(t.height)||0;const r=Yt(e),n=r?e.offsetWidth:o,s=r?e.offsetHeight:a,i=Os(o)!==n||Os(a)!==s;return i&&(o=n,a=s),{width:o,height:a,$:i}}function pd(e){return kt(e)?e:e.contextElement}function Ua(e){const t=pd(e);if(!Yt(t))return Mt(1);const o=t.getBoundingClientRect(),{width:a,height:r,$:n}=Lh(t);let s=(n?Os(o.width):o.width)/a,i=(n?Os(o.height):o.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!i||!Number.isFinite(i))&&(i=1),{x:s,y:i}}const l0=Mt(0);function zh(e){const t=Ye(e);return!cd()||!t.visualViewport?l0:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function u0(e,t,o){return t===void 0&&(t=!1),!o||t&&o!==Ye(e)?!1:t}function ua(e,t,o,a){t===void 0&&(t=!1),o===void 0&&(o=!1);const r=e.getBoundingClientRect(),n=pd(e);let s=Mt(1);t&&(a?kt(a)&&(s=Ua(a)):s=Ua(e));const i=u0(n,o,a)?zh(n):Mt(0);let l=(r.left+i.x)/s.x,u=(r.top+i.y)/s.y,d=r.width/s.x,p=r.height/s.y;if(n){const h=Ye(n),c=a&&kt(a)?Ye(a):a;let S=h,v=Kl(S);for(;v&&a&&c!==S;){const x=Ua(v),f=v.getBoundingClientRect(),m=Et(v),g=f.left+(v.clientLeft+parseFloat(m.paddingLeft))*x.x,w=f.top+(v.clientTop+parseFloat(m.paddingTop))*x.y;l*=x.x,u*=x.y,d*=x.x,p*=x.y,l+=g,u+=w,S=Ye(v),v=Kl(S)}}return Ds({width:d,height:p,x:l,y:u})}function oi(e,t){const o=ti(e).scrollLeft;return t?t.left+o:ua(It(e)).left+o}function _h(e,t){const o=e.getBoundingClientRect(),a=o.left+t.scrollLeft-oi(e,o),r=o.top+t.scrollTop;return{x:a,y:r}}function d0(e){let{elements:t,rect:o,offsetParent:a,strategy:r}=e;const n=r==="fixed",s=It(a),i=t?ei(t.floating):!1;if(a===s||i&&n)return o;let l={scrollLeft:0,scrollTop:0},u=Mt(1);const d=Mt(0),p=Yt(a);if((p||!p&&!n)&&((dr(a)!=="body"||vn(s))&&(l=ti(a)),p)){const c=ua(a);u=Ua(a),d.x=c.x+a.clientLeft,d.y=c.y+a.clientTop}const h=s&&!p&&!n?_h(s,l):Mt(0);return{width:o.width*u.x,height:o.height*u.y,x:o.x*u.x-l.scrollLeft*u.x+d.x+h.x,y:o.y*u.y-l.scrollTop*u.y+d.y+h.y}}function c0(e){return Array.from(e.getClientRects())}function p0(e){const t=It(e),o=ti(e),a=e.ownerDocument.body,r=Qe(t.scrollWidth,t.clientWidth,a.scrollWidth,a.clientWidth),n=Qe(t.scrollHeight,t.clientHeight,a.scrollHeight,a.clientHeight);let s=-o.scrollLeft+oi(e);const i=-o.scrollTop;return Et(a).direction==="rtl"&&(s+=Qe(t.clientWidth,a.clientWidth)-r),{width:r,height:n,x:s,y:i}}const Jc=25;function m0(e,t){const o=Ye(e),a=It(e),r=o.visualViewport;let n=a.clientWidth,s=a.clientHeight,i=0,l=0;if(r){n=r.width,s=r.height;const d=cd();(!d||d&&t==="fixed")&&(i=r.offsetLeft,l=r.offsetTop)}const u=oi(a);if(u<=0){const d=a.ownerDocument,p=d.body,h=getComputedStyle(p),c=d.compatMode==="CSS1Compat"&&parseFloat(h.marginLeft)+parseFloat(h.marginRight)||0,S=Math.abs(a.clientWidth-p.clientWidth-c);S<=Jc&&(n-=S)}else u<=Jc&&(n+=u);return{width:n,height:s,x:i,y:l}}function f0(e,t){const o=ua(e,!0,t==="fixed"),a=o.top+e.clientTop,r=o.left+e.clientLeft,n=Yt(e)?Ua(e):Mt(1),s=e.clientWidth*n.x,i=e.clientHeight*n.y,l=r*n.x,u=a*n.y;return{width:s,height:i,x:l,y:u}}function ep(e,t,o){let a;if(t==="viewport")a=m0(e,o);else if(t==="document")a=p0(It(e));else if(kt(t))a=f0(t,o);else{const r=zh(e);a={x:t.x-r.x,y:t.y-r.y,width:t.width,height:t.height}}return Ds(a)}function jh(e,t){const o=Io(e);return o===t||!kt(o)||ar(o)?!1:Et(o).position==="fixed"||jh(o,t)}function h0(e,t){const o=t.get(e);if(o)return o;let a=tn(e,[],!1).filter(i=>kt(i)&&dr(i)!=="body"),r=null;const n=Et(e).position==="fixed";let s=n?Io(e):e;for(;kt(s)&&!ar(s);){const i=Et(s),l=dd(s);!l&&i.position==="fixed"&&(r=null),(n?!l&&!r:!l&&i.position==="static"&&!!r&&(r.position==="absolute"||r.position==="fixed")||vn(s)&&!l&&jh(e,s))?a=a.filter(d=>d!==s):r=i,s=Io(s)}return t.set(e,a),a}function g0(e){let{element:t,boundary:o,rootBoundary:a,strategy:r}=e;const s=[...o==="clippingAncestors"?ei(t)?[]:h0(t,this._c):[].concat(o),a],i=ep(t,s[0],r);let l=i.top,u=i.right,d=i.bottom,p=i.left;for(let h=1;h<s.length;h++){const c=ep(t,s[h],r);l=Qe(c.top,l),u=Mo(c.right,u),d=Mo(c.bottom,d),p=Qe(c.left,p)}return{width:u-p,height:d-l,x:p,y:l}}function v0(e){const{width:t,height:o}=Lh(e);return{width:t,height:o}}function y0(e,t,o){const a=Yt(t),r=It(t),n=o==="fixed",s=ua(e,!0,n,t);let i={scrollLeft:0,scrollTop:0};const l=Mt(0);function u(){l.x=oi(r)}if(a||!a&&!n)if((dr(t)!=="body"||vn(r))&&(i=ti(t)),a){const c=ua(t,!0,n,t);l.x=c.x+t.clientLeft,l.y=c.y+t.clientTop}else r&&u();n&&!a&&r&&u();const d=r&&!a&&!n?_h(r,i):Mt(0),p=s.left+i.scrollLeft-l.x-d.x,h=s.top+i.scrollTop-l.y-d.y;return{x:p,y:h,width:s.width,height:s.height}}function Gi(e){return Et(e).position==="static"}function tp(e,t){if(!Yt(e)||Et(e).position==="fixed")return null;if(t)return t(e);let o=e.offsetParent;return It(e)===o&&(o=o.ownerDocument.body),o}function Uh(e,t){const o=Ye(e);if(ei(e))return o;if(!Yt(e)){let r=Io(e);for(;r&&!ar(r);){if(kt(r)&&!Gi(r))return r;r=Io(r)}return o}let a=tp(e,t);for(;a&&r0(a)&&Gi(a);)a=tp(a,t);return a&&ar(a)&&Gi(a)&&!dd(a)?o:a||i0(e)||o}const b0=async function(e){const t=this.getOffsetParent||Uh,o=this.getDimensions,a=await o(e.floating);return{reference:y0(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:a.width,height:a.height}}};function x0(e){return Et(e).direction==="rtl"}const w0={convertOffsetParentRelativeRectToViewportRelativeRect:d0,getDocumentElement:It,getClippingRect:g0,getOffsetParent:Uh,getElementRects:b0,getClientRects:c0,getDimensions:v0,getScale:Ua,isElement:kt,isRTL:x0};function Fh(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function S0(e,t){let o=null,a;const r=It(e);function n(){var i;clearTimeout(a),(i=o)==null||i.disconnect(),o=null}function s(i,l){i===void 0&&(i=!1),l===void 0&&(l=1),n();const u=e.getBoundingClientRect(),{left:d,top:p,width:h,height:c}=u;if(i||t(),!h||!c)return;const S=Bn(p),v=Bn(r.clientWidth-(d+h)),x=Bn(r.clientHeight-(p+c)),f=Bn(d),g={rootMargin:-S+"px "+-v+"px "+-x+"px "+-f+"px",threshold:Qe(0,Mo(1,l))||1};let w=!0;function k(E){const C=E[0].intersectionRatio;if(C!==l){if(!w)return s();C?s(!1,C):a=setTimeout(()=>{s(!1,1e-7)},1e3)}C===1&&!Fh(u,e.getBoundingClientRect())&&s(),w=!1}try{o=new IntersectionObserver(k,{...g,root:r.ownerDocument})}catch{o=new IntersectionObserver(k,g)}o.observe(e)}return s(!0),n}function k0(e,t,o,a){a===void 0&&(a={});const{ancestorScroll:r=!0,ancestorResize:n=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:i=typeof IntersectionObserver=="function",animationFrame:l=!1}=a,u=pd(e),d=r||n?[...u?tn(u):[],...t?tn(t):[]]:[];d.forEach(f=>{r&&f.addEventListener("scroll",o,{passive:!0}),n&&f.addEventListener("resize",o)});const p=u&&i?S0(u,o):null;let h=-1,c=null;s&&(c=new ResizeObserver(f=>{let[m]=f;m&&m.target===u&&c&&t&&(c.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var g;(g=c)==null||g.observe(t)})),o()}),u&&!l&&c.observe(u),t&&c.observe(t));let S,v=l?ua(e):null;l&&x();function x(){const f=ua(e);v&&!Fh(v,f)&&o(),v=f,S=requestAnimationFrame(x)}return o(),()=>{var f;d.forEach(m=>{r&&m.removeEventListener("scroll",o),n&&m.removeEventListener("resize",o)}),p==null||p(),(f=c)==null||f.disconnect(),c=null,l&&cancelAnimationFrame(S)}}const E0=e0,C0=t0,P0=Yw,q0=a0,A0=Zw,op=Xw,O0=o0,T0=(e,t,o)=>{const a=new Map,r={platform:w0,...o},n={...r.platform,_c:a};return Kw(e,t,{...r,platform:n})};var D0=typeof document<"u",N0=function(){},rs=D0?y.useLayoutEffect:N0;function Ns(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let o,a,r;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(o=e.length,o!==t.length)return!1;for(a=o;a--!==0;)if(!Ns(e[a],t[a]))return!1;return!0}if(r=Object.keys(e),o=r.length,o!==Object.keys(t).length)return!1;for(a=o;a--!==0;)if(!{}.hasOwnProperty.call(t,r[a]))return!1;for(a=o;a--!==0;){const n=r[a];if(!(n==="_owner"&&e.$$typeof)&&!Ns(e[n],t[n]))return!1}return!0}return e!==e&&t!==t}function Bh(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function ap(e,t){const o=Bh(e);return Math.round(t*o)/o}function Wi(e){const t=y.useRef(e);return rs(()=>{t.current=e}),t}function R0(e){e===void 0&&(e={});const{placement:t="bottom",strategy:o="absolute",middleware:a=[],platform:r,elements:{reference:n,floating:s}={},transform:i=!0,whileElementsMounted:l,open:u}=e,[d,p]=y.useState({x:0,y:0,strategy:o,placement:t,middlewareData:{},isPositioned:!1}),[h,c]=y.useState(a);Ns(h,a)||c(a);const[S,v]=y.useState(null),[x,f]=y.useState(null),m=y.useCallback(q=>{q!==E.current&&(E.current=q,v(q))},[]),g=y.useCallback(q=>{q!==C.current&&(C.current=q,f(q))},[]),w=n||S,k=s||x,E=y.useRef(null),C=y.useRef(null),A=y.useRef(d),M=l!=null,N=Wi(l),U=Wi(r),z=Wi(u),G=y.useCallback(()=>{if(!E.current||!C.current)return;const q={placement:t,strategy:o,middleware:h};U.current&&(q.platform=U.current),T0(E.current,C.current,q).then(O=>{const I={...O,isPositioned:z.current!==!1};R.current&&!Ns(A.current,I)&&(A.current=I,hn.flushSync(()=>{p(I)}))})},[h,t,o,U,z]);rs(()=>{u===!1&&A.current.isPositioned&&(A.current.isPositioned=!1,p(q=>({...q,isPositioned:!1})))},[u]);const R=y.useRef(!1);rs(()=>(R.current=!0,()=>{R.current=!1}),[]),rs(()=>{if(w&&(E.current=w),k&&(C.current=k),w&&k){if(N.current)return N.current(w,k,G);G()}},[w,k,G,N,M]);const K=y.useMemo(()=>({reference:E,floating:C,setReference:m,setFloating:g}),[m,g]),F=y.useMemo(()=>({reference:w,floating:k}),[w,k]),H=y.useMemo(()=>{const q={position:o,left:0,top:0};if(!F.floating)return q;const O=ap(F.floating,d.x),I=ap(F.floating,d.y);return i?{...q,transform:"translate("+O+"px, "+I+"px)",...Bh(F.floating)>=1.5&&{willChange:"transform"}}:{position:o,left:O,top:I}},[o,i,F.floating,d.x,d.y]);return y.useMemo(()=>({...d,update:G,refs:K,elements:F,floatingStyles:H}),[d,G,K,F,H])}const M0=e=>{function t(o){return{}.hasOwnProperty.call(o,"current")}return{name:"arrow",options:e,fn(o){const{element:a,padding:r}=typeof e=="function"?e(o):e;return a&&t(a)?a.current!=null?op({element:a.current,padding:r}).fn(o):{}:a?op({element:a,padding:r}).fn(o):{}}}},I0=(e,t)=>{const o=E0(e);return{name:o.name,fn:o.fn,options:[e,t]}},L0=(e,t)=>{const o=C0(e);return{name:o.name,fn:o.fn,options:[e,t]}},z0=(e,t)=>({fn:O0(e).fn,options:[e,t]}),_0=(e,t)=>{const o=P0(e);return{name:o.name,fn:o.fn,options:[e,t]}},j0=(e,t)=>{const o=q0(e);return{name:o.name,fn:o.fn,options:[e,t]}},U0=(e,t)=>{const o=A0(e);return{name:o.name,fn:o.fn,options:[e,t]}},F0=(e,t)=>{const o=M0(e);return{name:o.name,fn:o.fn,options:[e,t]}};var B0="Arrow",Hh=y.forwardRef((e,t)=>{const{children:o,width:a=10,height:r=5,...n}=e;return b.jsx(Ve.svg,{...n,ref:t,width:a,height:r,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?o:b.jsx("polygon",{points:"0,0 30,0 15,10"})})});Hh.displayName=B0;var H0=Hh;function $0(e){const[t,o]=y.useState(void 0);return Ro(()=>{if(e){o({width:e.offsetWidth,height:e.offsetHeight});const a=new ResizeObserver(r=>{if(!Array.isArray(r)||!r.length)return;const n=r[0];let s,i;if("borderBoxSize"in n){const l=n.borderBoxSize,u=Array.isArray(l)?l[0]:l;s=u.inlineSize,i=u.blockSize}else s=e.offsetWidth,i=e.offsetHeight;o({width:s,height:i})});return a.observe(e,{box:"border-box"}),()=>a.unobserve(e)}else o(void 0)},[e]),t}var $h="Popper",[Vh,Gh]=Xs($h),[hk,Wh]=Vh($h),Qh="PopperAnchor",Kh=y.forwardRef((e,t)=>{const{__scopePopper:o,virtualRef:a,...r}=e,n=Wh(Qh,o),s=y.useRef(null),i=St(t,s),l=y.useRef(null);return y.useEffect(()=>{const u=l.current;l.current=(a==null?void 0:a.current)||s.current,u!==l.current&&n.onAnchorChange(l.current)}),a?null:b.jsx(Ve.div,{...r,ref:i})});Kh.displayName=Qh;var md="PopperContent",[V0,G0]=Vh(md),Xh=y.forwardRef((e,t)=>{var J,fa,Zt,jo,Jt,ha;const{__scopePopper:o,side:a="bottom",sideOffset:r=0,align:n="center",alignOffset:s=0,arrowPadding:i=0,avoidCollisions:l=!0,collisionBoundary:u=[],collisionPadding:d=0,sticky:p="partial",hideWhenDetached:h=!1,updatePositionStrategy:c="optimized",onPlaced:S,...v}=e,x=Wh(md,o),[f,m]=y.useState(null),g=St(t,eo=>m(eo)),[w,k]=y.useState(null),E=$0(w),C=(E==null?void 0:E.width)??0,A=(E==null?void 0:E.height)??0,M=a+(n!=="center"?"-"+n:""),N=typeof d=="number"?d:{top:0,right:0,bottom:0,left:0,...d},U=Array.isArray(u)?u:[u],z=U.length>0,G={padding:N,boundary:U.filter(Q0),altBoundary:z},{refs:R,floatingStyles:K,placement:F,isPositioned:H,middlewareData:q}=R0({strategy:"fixed",placement:M,whileElementsMounted:(...eo)=>k0(...eo,{animationFrame:c==="always"}),elements:{reference:x.anchor},middleware:[I0({mainAxis:r+A,alignmentAxis:s}),l&&L0({mainAxis:!0,crossAxis:!1,limiter:p==="partial"?z0():void 0,...G}),l&&_0({...G}),j0({...G,apply:({elements:eo,rects:yn,availableWidth:di,availableHeight:bn})=>{const{width:ci,height:pr}=yn.reference,ga=eo.floating.style;ga.setProperty("--radix-popper-available-width",`${di}px`),ga.setProperty("--radix-popper-available-height",`${bn}px`),ga.setProperty("--radix-popper-anchor-width",`${ci}px`),ga.setProperty("--radix-popper-anchor-height",`${pr}px`)}}),w&&F0({element:w,padding:i}),K0({arrowWidth:C,arrowHeight:A}),h&&U0({strategy:"referenceHidden",...G})]}),[O,I]=Jh(F),$=No(S);Ro(()=>{H&&($==null||$())},[H,$]);const _=(J=q.arrow)==null?void 0:J.x,W=(fa=q.arrow)==null?void 0:fa.y,X=((Zt=q.arrow)==null?void 0:Zt.centerOffset)!==0,[fe,qe]=y.useState();return Ro(()=>{f&&qe(window.getComputedStyle(f).zIndex)},[f]),b.jsx("div",{ref:R.setFloating,"data-radix-popper-content-wrapper":"",style:{...K,transform:H?K.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:fe,"--radix-popper-transform-origin":[(jo=q.transformOrigin)==null?void 0:jo.x,(Jt=q.transformOrigin)==null?void 0:Jt.y].join(" "),...((ha=q.hide)==null?void 0:ha.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:b.jsx(V0,{scope:o,placedSide:O,onArrowChange:k,arrowX:_,arrowY:W,shouldHideArrow:X,children:b.jsx(Ve.div,{"data-side":O,"data-align":I,...v,ref:g,style:{...v.style,animation:H?void 0:"none"}})})})});Xh.displayName=md;var Yh="PopperArrow",W0={top:"bottom",right:"left",bottom:"top",left:"right"},Zh=y.forwardRef(function(t,o){const{__scopePopper:a,...r}=t,n=G0(Yh,a),s=W0[n.placedSide];return b.jsx("span",{ref:n.onArrowChange,style:{position:"absolute",left:n.arrowX,top:n.arrowY,[s]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[n.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[n.placedSide],visibility:n.shouldHideArrow?"hidden":void 0},children:b.jsx(H0,{...r,ref:o,style:{...r.style,display:"block"}})})});Zh.displayName=Yh;function Q0(e){return e!==null}var K0=e=>({name:"transformOrigin",options:e,fn(t){var x,f,m;const{placement:o,rects:a,middlewareData:r}=t,s=((x=r.arrow)==null?void 0:x.centerOffset)!==0,i=s?0:e.arrowWidth,l=s?0:e.arrowHeight,[u,d]=Jh(o),p={start:"0%",center:"50%",end:"100%"}[d],h=(((f=r.arrow)==null?void 0:f.x)??0)+i/2,c=(((m=r.arrow)==null?void 0:m.y)??0)+l/2;let S="",v="";return u==="bottom"?(S=s?p:`${h}px`,v=`${-l}px`):u==="top"?(S=s?p:`${h}px`,v=`${a.floating.height+l}px`):u==="right"?(S=`${-l}px`,v=s?p:`${c}px`):u==="left"&&(S=`${a.floating.width+l}px`,v=s?p:`${c}px`),{data:{x:S,y:v}}}});function Jh(e){const[t,o="center"]=e.split("-");return[t,o]}var X0=Kh,Y0=Xh,Z0=Zh,J0=Symbol("radix.slottable");function eS(e){const t=({children:o})=>b.jsx(b.Fragment,{children:o});return t.displayName=`${e}.Slottable`,t.__radixId=J0,t}var[ai]=Xs("Tooltip",[Gh]),fd=Gh(),eg="TooltipProvider",tS=700,rp="tooltip.open",[oS,tg]=ai(eg),og=e=>{const{__scopeTooltip:t,delayDuration:o=tS,skipDelayDuration:a=300,disableHoverableContent:r=!1,children:n}=e,s=y.useRef(!0),i=y.useRef(!1),l=y.useRef(0);return y.useEffect(()=>{const u=l.current;return()=>window.clearTimeout(u)},[]),b.jsx(oS,{scope:t,isOpenDelayedRef:s,delayDuration:o,onOpen:y.useCallback(()=>{window.clearTimeout(l.current),s.current=!1},[]),onClose:y.useCallback(()=>{window.clearTimeout(l.current),l.current=window.setTimeout(()=>s.current=!0,a)},[a]),isPointerInTransitRef:i,onPointerInTransitChange:y.useCallback(u=>{i.current=u},[]),disableHoverableContent:r,children:n})};og.displayName=eg;var ag="Tooltip",[gk,ri]=ai(ag),Xl="TooltipTrigger",aS=y.forwardRef((e,t)=>{const{__scopeTooltip:o,...a}=e,r=ri(Xl,o),n=tg(Xl,o),s=fd(o),i=y.useRef(null),l=St(t,i,r.onTriggerChange),u=y.useRef(!1),d=y.useRef(!1),p=y.useCallback(()=>u.current=!1,[]);return y.useEffect(()=>()=>document.removeEventListener("pointerup",p),[p]),b.jsx(X0,{asChild:!0,...s,children:b.jsx(Ve.button,{"aria-describedby":r.open?r.contentId:void 0,"data-state":r.stateAttribute,...a,ref:l,onPointerMove:ve(e.onPointerMove,h=>{h.pointerType!=="touch"&&!d.current&&!n.isPointerInTransitRef.current&&(r.onTriggerEnter(),d.current=!0)}),onPointerLeave:ve(e.onPointerLeave,()=>{r.onTriggerLeave(),d.current=!1}),onPointerDown:ve(e.onPointerDown,()=>{r.open&&r.onClose(),u.current=!0,document.addEventListener("pointerup",p,{once:!0})}),onFocus:ve(e.onFocus,()=>{u.current||r.onOpen()}),onBlur:ve(e.onBlur,r.onClose),onClick:ve(e.onClick,r.onClose)})})});aS.displayName=Xl;var rS="TooltipPortal",[vk,nS]=ai(rS,{forceMount:void 0}),rr="TooltipContent",rg=y.forwardRef((e,t)=>{const o=nS(rr,e.__scopeTooltip),{forceMount:a=o.forceMount,side:r="top",...n}=e,s=ri(rr,e.__scopeTooltip);return b.jsx(td,{present:a||s.open,children:s.disableHoverableContent?b.jsx(ng,{side:r,...n,ref:t}):b.jsx(sS,{side:r,...n,ref:t})})}),sS=y.forwardRef((e,t)=>{const o=ri(rr,e.__scopeTooltip),a=tg(rr,e.__scopeTooltip),r=y.useRef(null),n=St(t,r),[s,i]=y.useState(null),{trigger:l,onClose:u}=o,d=r.current,{onPointerInTransitChange:p}=a,h=y.useCallback(()=>{i(null),p(!1)},[p]),c=y.useCallback((S,v)=>{const x=S.currentTarget,f={x:S.clientX,y:S.clientY},m=cS(f,x.getBoundingClientRect()),g=pS(f,m),w=mS(v.getBoundingClientRect()),k=hS([...g,...w]);i(k),p(!0)},[p]);return y.useEffect(()=>()=>h(),[h]),y.useEffect(()=>{if(l&&d){const S=x=>c(x,d),v=x=>c(x,l);return l.addEventListener("pointerleave",S),d.addEventListener("pointerleave",v),()=>{l.removeEventListener("pointerleave",S),d.removeEventListener("pointerleave",v)}}},[l,d,c,h]),y.useEffect(()=>{if(s){const S=v=>{const x=v.target,f={x:v.clientX,y:v.clientY},m=(l==null?void 0:l.contains(x))||(d==null?void 0:d.contains(x)),g=!fS(f,s);m?h():g&&(h(),u())};return document.addEventListener("pointermove",S),()=>document.removeEventListener("pointermove",S)}},[l,d,s,u,h]),b.jsx(ng,{...e,ref:n})}),[iS,lS]=ai(ag,{isInside:!1}),uS=eS("TooltipContent"),ng=y.forwardRef((e,t)=>{const{__scopeTooltip:o,children:a,"aria-label":r,onEscapeKeyDown:n,onPointerDownOutside:s,...i}=e,l=ri(rr,o),u=fd(o),{onClose:d}=l;return y.useEffect(()=>(document.addEventListener(rp,d),()=>document.removeEventListener(rp,d)),[d]),y.useEffect(()=>{if(l.trigger){const p=h=>{const c=h.target;c!=null&&c.contains(l.trigger)&&d()};return window.addEventListener("scroll",p,{capture:!0}),()=>window.removeEventListener("scroll",p,{capture:!0})}},[l.trigger,d]),b.jsx(ed,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:n,onPointerDownOutside:s,onFocusOutside:p=>p.preventDefault(),onDismiss:d,children:b.jsxs(Y0,{"data-state":l.stateAttribute,...u,...i,ref:t,style:{...i.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[b.jsx(uS,{children:a}),b.jsx(iS,{scope:o,isInside:!0,children:b.jsx(Wb,{id:l.contentId,role:"tooltip",children:r||a})})]})})});rg.displayName=rr;var sg="TooltipArrow",dS=y.forwardRef((e,t)=>{const{__scopeTooltip:o,...a}=e,r=fd(o);return lS(sg,o).isInside?null:b.jsx(Z0,{...r,...a,ref:t})});dS.displayName=sg;function cS(e,t){const o=Math.abs(t.top-e.y),a=Math.abs(t.bottom-e.y),r=Math.abs(t.right-e.x),n=Math.abs(t.left-e.x);switch(Math.min(o,a,r,n)){case n:return"left";case r:return"right";case o:return"top";case a:return"bottom";default:throw new Error("unreachable")}}function pS(e,t,o=5){const a=[];switch(t){case"top":a.push({x:e.x-o,y:e.y+o},{x:e.x+o,y:e.y+o});break;case"bottom":a.push({x:e.x-o,y:e.y-o},{x:e.x+o,y:e.y-o});break;case"left":a.push({x:e.x+o,y:e.y-o},{x:e.x+o,y:e.y+o});break;case"right":a.push({x:e.x-o,y:e.y-o},{x:e.x-o,y:e.y+o});break}return a}function mS(e){const{top:t,right:o,bottom:a,left:r}=e;return[{x:r,y:t},{x:o,y:t},{x:o,y:a},{x:r,y:a}]}function fS(e,t){const{x:o,y:a}=e;let r=!1;for(let n=0,s=t.length-1;n<t.length;s=n++){const i=t[n],l=t[s],u=i.x,d=i.y,p=l.x,h=l.y;d>a!=h>a&&o<(p-u)*(a-d)/(h-d)+u&&(r=!r)}return r}function hS(e){const t=e.slice();return t.sort((o,a)=>o.x<a.x?-1:o.x>a.x?1:o.y<a.y?-1:o.y>a.y?1:0),gS(t)}function gS(e){if(e.length<=1)return e.slice();const t=[];for(let a=0;a<e.length;a++){const r=e[a];for(;t.length>=2;){const n=t[t.length-1],s=t[t.length-2];if((n.x-s.x)*(r.y-s.y)>=(n.y-s.y)*(r.x-s.x))t.pop();else break}t.push(r)}t.pop();const o=[];for(let a=e.length-1;a>=0;a--){const r=e[a];for(;o.length>=2;){const n=o[o.length-1],s=o[o.length-2];if((n.x-s.x)*(r.y-s.y)>=(n.y-s.y)*(r.x-s.x))o.pop();else break}o.push(r)}return o.pop(),t.length===1&&o.length===1&&t[0].x===o[0].x&&t[0].y===o[0].y?t:t.concat(o)}var vS=og,ig=rg;const yS=vS,bS=y.forwardRef(({className:e,sideOffset:t=4,...o},a)=>b.jsx(ig,{ref:a,sideOffset:t,className:pa("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...o}));bS.displayName=ig.displayName;var ni=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Ko,mo,Fa,wp,xS=(wp=class extends ni{constructor(){super();Y(this,Ko);Y(this,mo);Y(this,Fa);j(this,Fa,t=>{if(typeof window<"u"&&window.addEventListener){const o=()=>t();return window.addEventListener("visibilitychange",o,!1),()=>{window.removeEventListener("visibilitychange",o)}}})}onSubscribe(){P(this,mo)||this.setEventListener(P(this,Fa))}onUnsubscribe(){var t;this.hasListeners()||((t=P(this,mo))==null||t.call(this),j(this,mo,void 0))}setEventListener(t){var o;j(this,Fa,t),(o=P(this,mo))==null||o.call(this),j(this,mo,t(a=>{typeof a=="boolean"?this.setFocused(a):this.onFocus()}))}setFocused(t){P(this,Ko)!==t&&(j(this,Ko,t),this.onFocus())}onFocus(){const t=this.isFocused();this.listeners.forEach(o=>{o(t)})}isFocused(){var t;return typeof P(this,Ko)=="boolean"?P(this,Ko):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"}},Ko=new WeakMap,mo=new WeakMap,Fa=new WeakMap,wp),lg=new xS,wS={setTimeout:(e,t)=>setTimeout(e,t),clearTimeout:e=>clearTimeout(e),setInterval:(e,t)=>setInterval(e,t),clearInterval:e=>clearInterval(e)},fo,ru,Sp,SS=(Sp=class{constructor(){Y(this,fo,wS);Y(this,ru,!1)}setTimeoutProvider(e){j(this,fo,e)}setTimeout(e,t){return P(this,fo).setTimeout(e,t)}clearTimeout(e){P(this,fo).clearTimeout(e)}setInterval(e,t){return P(this,fo).setInterval(e,t)}clearInterval(e){P(this,fo).clearInterval(e)}},fo=new WeakMap,ru=new WeakMap,Sp),Yl=new SS;function kS(e){setTimeout(e,0)}var ES=typeof window>"u"||"Deno"in globalThis;function ht(){}function CS(e,t){return typeof e=="function"?e(t):e}function PS(e){return typeof e=="number"&&e>=0&&e!==1/0}function qS(e,t){return Math.max(e+(t||0)-Date.now(),0)}function Zl(e,t){return typeof e=="function"?e(t):e}function AS(e,t){return typeof e=="function"?e(t):e}function np(e,t){const{type:o="all",exact:a,fetchStatus:r,predicate:n,queryKey:s,stale:i}=e;if(s){if(a){if(t.queryHash!==hd(s,t.options))return!1}else if(!an(t.queryKey,s))return!1}if(o!=="all"){const l=t.isActive();if(o==="active"&&!l||o==="inactive"&&l)return!1}return!(typeof i=="boolean"&&t.isStale()!==i||r&&r!==t.state.fetchStatus||n&&!n(t))}function sp(e,t){const{exact:o,status:a,predicate:r,mutationKey:n}=e;if(n){if(!t.options.mutationKey)return!1;if(o){if(on(t.options.mutationKey)!==on(n))return!1}else if(!an(t.options.mutationKey,n))return!1}return!(a&&t.state.status!==a||r&&!r(t))}function hd(e,t){return((t==null?void 0:t.queryKeyHashFn)||on)(e)}function on(e){return JSON.stringify(e,(t,o)=>Jl(o)?Object.keys(o).sort().reduce((a,r)=>(a[r]=o[r],a),{}):o)}function an(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?Object.keys(t).every(o=>an(e[o],t[o])):!1}var OS=Object.prototype.hasOwnProperty;function ug(e,t,o=0){if(e===t)return e;if(o>500)return t;const a=ip(e)&&ip(t);if(!a&&!(Jl(e)&&Jl(t)))return t;const n=(a?e:Object.keys(e)).length,s=a?t:Object.keys(t),i=s.length,l=a?new Array(i):{};let u=0;for(let d=0;d<i;d++){const p=a?d:s[d],h=e[p],c=t[p];if(h===c){l[p]=h,(a?d<n:OS.call(e,p))&&u++;continue}if(h===null||c===null||typeof h!="object"||typeof c!="object"){l[p]=c;continue}const S=ug(h,c,o+1);l[p]=S,S===h&&u++}return n===i&&u===n?e:l}function ip(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function Jl(e){if(!lp(e))return!1;const t=e.constructor;if(t===void 0)return!0;const o=t.prototype;return!(!lp(o)||!o.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function lp(e){return Object.prototype.toString.call(e)==="[object Object]"}function TS(e){return new Promise(t=>{Yl.setTimeout(t,e)})}function DS(e,t,o){return typeof o.structuralSharing=="function"?o.structuralSharing(e,t):o.structuralSharing!==!1?ug(e,t):t}function NS(e,t,o=0){const a=[...e,t];return o&&a.length>o?a.slice(1):a}function RS(e,t,o=0){const a=[t,...e];return o&&a.length>o?a.slice(0,-1):a}var gd=Symbol();function dg(e,t){return!e.queryFn&&(t!=null&&t.initialPromise)?()=>t.initialPromise:!e.queryFn||e.queryFn===gd?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}function MS(e,t,o){let a=!1,r;return Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(r??(r=t()),a||(a=!0,r.aborted?o():r.addEventListener("abort",o,{once:!0})),r)}),e}var cg=(()=>{let e=()=>ES;return{isServer(){return e()},setIsServer(t){e=t}}})();function IS(){let e,t;const o=new Promise((r,n)=>{e=r,t=n});o.status="pending",o.catch(()=>{});function a(r){Object.assign(o,r),delete o.resolve,delete o.reject}return o.resolve=r=>{a({status:"fulfilled",value:r}),e(r)},o.reject=r=>{a({status:"rejected",reason:r}),t(r)},o}var LS=kS;function zS(){let e=[],t=0,o=i=>{i()},a=i=>{i()},r=LS;const n=i=>{t?e.push(i):r(()=>{o(i)})},s=()=>{const i=e;e=[],i.length&&r(()=>{a(()=>{i.forEach(l=>{o(l)})})})};return{batch:i=>{let l;t++;try{l=i()}finally{t--,t||s()}return l},batchCalls:i=>(...l)=>{n(()=>{i(...l)})},schedule:n,setNotifyFunction:i=>{o=i},setBatchNotifyFunction:i=>{a=i},setScheduler:i=>{r=i}}}var Ie=zS(),Ba,ho,Ha,kp,_S=(kp=class extends ni{constructor(){super();Y(this,Ba,!0);Y(this,ho);Y(this,Ha);j(this,Ha,t=>{if(typeof window<"u"&&window.addEventListener){const o=()=>t(!0),a=()=>t(!1);return window.addEventListener("online",o,!1),window.addEventListener("offline",a,!1),()=>{window.removeEventListener("online",o),window.removeEventListener("offline",a)}}})}onSubscribe(){P(this,ho)||this.setEventListener(P(this,Ha))}onUnsubscribe(){var t;this.hasListeners()||((t=P(this,ho))==null||t.call(this),j(this,ho,void 0))}setEventListener(t){var o;j(this,Ha,t),(o=P(this,ho))==null||o.call(this),j(this,ho,t(this.setOnline.bind(this)))}setOnline(t){P(this,Ba)!==t&&(j(this,Ba,t),this.listeners.forEach(a=>{a(t)}))}isOnline(){return P(this,Ba)}},Ba=new WeakMap,ho=new WeakMap,Ha=new WeakMap,kp),Rs=new _S;function jS(e){return Math.min(1e3*2**e,3e4)}function pg(e){return(e??"online")==="online"?Rs.isOnline():!0}var eu=class extends Error{constructor(e){super("CancelledError"),this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function mg(e){let t=!1,o=0,a;const r=IS(),n=()=>r.status!=="pending",s=v=>{var x;if(!n()){const f=new eu(v);h(f),(x=e.onCancel)==null||x.call(e,f)}},i=()=>{t=!0},l=()=>{t=!1},u=()=>lg.isFocused()&&(e.networkMode==="always"||Rs.isOnline())&&e.canRun(),d=()=>pg(e.networkMode)&&e.canRun(),p=v=>{n()||(a==null||a(),r.resolve(v))},h=v=>{n()||(a==null||a(),r.reject(v))},c=()=>new Promise(v=>{var x;a=f=>{(n()||u())&&v(f)},(x=e.onPause)==null||x.call(e)}).then(()=>{var v;a=void 0,n()||(v=e.onContinue)==null||v.call(e)}),S=()=>{if(n())return;let v;const x=o===0?e.initialPromise:void 0;try{v=x??e.fn()}catch(f){v=Promise.reject(f)}Promise.resolve(v).then(p).catch(f=>{var E;if(n())return;const m=e.retry??(cg.isServer()?0:3),g=e.retryDelay??jS,w=typeof g=="function"?g(o,f):g,k=m===!0||typeof m=="number"&&o<m||typeof m=="function"&&m(o,f);if(t||!k){h(f);return}o++,(E=e.onFail)==null||E.call(e,o,f),TS(w).then(()=>u()?void 0:c()).then(()=>{t?h(f):S()})})};return{promise:r,status:()=>r.status,cancel:s,continue:()=>(a==null||a(),r),cancelRetry:i,continueRetry:l,canStart:d,start:()=>(d()?S():c().then(S),r)}}var Xo,Ep,fg=(Ep=class{constructor(){Y(this,Xo)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),PS(this.gcTime)&&j(this,Xo,Yl.setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(cg.isServer()?1/0:5*60*1e3))}clearGcTimeout(){P(this,Xo)!==void 0&&(Yl.clearTimeout(P(this,Xo)),j(this,Xo,void 0))}},Xo=new WeakMap,Ep);function US(e){return{onFetch:(t,o)=>{var d,p,h,c,S;const a=t.options,r=(h=(p=(d=t.fetchOptions)==null?void 0:d.meta)==null?void 0:p.fetchMore)==null?void 0:h.direction,n=((c=t.state.data)==null?void 0:c.pages)||[],s=((S=t.state.data)==null?void 0:S.pageParams)||[];let i={pages:[],pageParams:[]},l=0;const u=async()=>{let v=!1;const x=g=>{MS(g,()=>t.signal,()=>v=!0)},f=dg(t.options,t.fetchOptions),m=async(g,w,k)=>{if(v)return Promise.reject(t.signal.reason);if(w==null&&g.pages.length)return Promise.resolve(g);const C=(()=>{const U={client:t.client,queryKey:t.queryKey,pageParam:w,direction:k?"backward":"forward",meta:t.options.meta};return x(U),U})(),A=await f(C),{maxPages:M}=t.options,N=k?RS:NS;return{pages:N(g.pages,A,M),pageParams:N(g.pageParams,w,M)}};if(r&&n.length){const g=r==="backward",w=g?FS:up,k={pages:n,pageParams:s},E=w(a,k);i=await m(k,E,g)}else{const g=e??n.length;do{const w=l===0?s[0]??a.initialPageParam:up(a,i);if(l>0&&w==null)break;i=await m(i,w),l++}while(l<g)}return i};t.options.persister?t.fetchFn=()=>{var v,x;return(x=(v=t.options).persister)==null?void 0:x.call(v,u,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},o)}:t.fetchFn=u}}}function up(e,{pages:t,pageParams:o}){const a=t.length-1;return t.length>0?e.getNextPageParam(t[a],t,o[a],o):void 0}function FS(e,{pages:t,pageParams:o}){var a;return t.length>0?(a=e.getPreviousPageParam)==null?void 0:a.call(e,t[0],t,o[0],o):void 0}var $a,Yo,Va,ot,Zo,xe,sn,Jo,We,hg,zt,Cp,BS=(Cp=class extends fg{constructor(t){super();Y(this,We);Y(this,$a);Y(this,Yo);Y(this,Va);Y(this,ot);Y(this,Zo);Y(this,xe);Y(this,sn);Y(this,Jo);j(this,Jo,!1),j(this,sn,t.defaultOptions),this.setOptions(t.options),this.observers=[],j(this,Zo,t.client),j(this,ot,P(this,Zo).getQueryCache()),this.queryKey=t.queryKey,this.queryHash=t.queryHash,j(this,Yo,cp(this.options)),this.state=t.state??P(this,Yo),this.scheduleGc()}get meta(){return this.options.meta}get queryType(){return P(this,$a)}get promise(){var t;return(t=P(this,xe))==null?void 0:t.promise}setOptions(t){if(this.options={...P(this,sn),...t},t!=null&&t._type&&j(this,$a,t._type),this.updateGcTime(this.options.gcTime),this.state&&this.state.data===void 0){const o=cp(this.options);o.data!==void 0&&(this.setState(dp(o.data,o.dataUpdatedAt)),j(this,Yo,o))}}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&P(this,ot).remove(this)}setData(t,o){const a=DS(this.state.data,t,this.options);return ke(this,We,zt).call(this,{data:a,type:"success",dataUpdatedAt:o==null?void 0:o.updatedAt,manual:o==null?void 0:o.manual}),a}setState(t){ke(this,We,zt).call(this,{type:"setState",state:t})}cancel(t){var a,r;const o=(a=P(this,xe))==null?void 0:a.promise;return(r=P(this,xe))==null||r.cancel(t),o?o.then(ht).catch(ht):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}get resetState(){return P(this,Yo)}reset(){this.destroy(),this.setState(this.resetState)}isActive(){return this.observers.some(t=>AS(t.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===gd||!this.isFetched()}isFetched(){return this.state.dataUpdateCount+this.state.errorUpdateCount>0}isStatic(){return this.getObserversCount()>0?this.observers.some(t=>Zl(t.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(t=0){return this.state.data===void 0?!0:t==="static"?!1:this.state.isInvalidated?!0:!qS(this.state.dataUpdatedAt,t)}onFocus(){var o;const t=this.observers.find(a=>a.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(o=P(this,xe))==null||o.continue()}onOnline(){var o;const t=this.observers.find(a=>a.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(o=P(this,xe))==null||o.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),P(this,ot).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(o=>o!==t),this.observers.length||(P(this,xe)&&(P(this,Jo)||ke(this,We,hg).call(this)?P(this,xe).cancel({revert:!0}):P(this,xe).cancelRetry()),this.scheduleGc()),P(this,ot).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||ke(this,We,zt).call(this,{type:"invalidate"})}async fetch(t,o){var u,d,p,h,c,S,v,x,f,m,g;if(this.state.fetchStatus!=="idle"&&((u=P(this,xe))==null?void 0:u.status())!=="rejected"){if(this.state.data!==void 0&&(o!=null&&o.cancelRefetch))this.cancel({silent:!0});else if(P(this,xe))return P(this,xe).continueRetry(),P(this,xe).promise}if(t&&this.setOptions(t),!this.options.queryFn){const w=this.observers.find(k=>k.options.queryFn);w&&this.setOptions(w.options)}const a=new AbortController,r=w=>{Object.defineProperty(w,"signal",{enumerable:!0,get:()=>(j(this,Jo,!0),a.signal)})},n=()=>{const w=dg(this.options,o),E=(()=>{const C={client:P(this,Zo),queryKey:this.queryKey,meta:this.meta};return r(C),C})();return j(this,Jo,!1),this.options.persister?this.options.persister(w,E,this):w(E)},i=(()=>{const w={fetchOptions:o,options:this.options,queryKey:this.queryKey,client:P(this,Zo),state:this.state,fetchFn:n};return r(w),w})(),l=P(this,$a)==="infinite"?US(this.options.pages):this.options.behavior;l==null||l.onFetch(i,this),j(this,Va,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((d=i.fetchOptions)==null?void 0:d.meta))&&ke(this,We,zt).call(this,{type:"fetch",meta:(p=i.fetchOptions)==null?void 0:p.meta}),j(this,xe,mg({initialPromise:o==null?void 0:o.initialPromise,fn:i.fetchFn,onCancel:w=>{w instanceof eu&&w.revert&&this.setState({...P(this,Va),fetchStatus:"idle"}),a.abort()},onFail:(w,k)=>{ke(this,We,zt).call(this,{type:"failed",failureCount:w,error:k})},onPause:()=>{ke(this,We,zt).call(this,{type:"pause"})},onContinue:()=>{ke(this,We,zt).call(this,{type:"continue"})},retry:i.options.retry,retryDelay:i.options.retryDelay,networkMode:i.options.networkMode,canRun:()=>!0}));try{const w=await P(this,xe).start();if(w===void 0)throw new Error(`${this.queryHash} data is undefined`);return this.setData(w),(c=(h=P(this,ot).config).onSuccess)==null||c.call(h,w,this),(v=(S=P(this,ot).config).onSettled)==null||v.call(S,w,this.state.error,this),w}catch(w){if(w instanceof eu){if(w.silent)return P(this,xe).promise;if(w.revert){if(this.state.data===void 0)throw w;return this.state.data}}throw ke(this,We,zt).call(this,{type:"error",error:w}),(f=(x=P(this,ot).config).onError)==null||f.call(x,w,this),(g=(m=P(this,ot).config).onSettled)==null||g.call(m,this.state.data,w,this),w}finally{this.scheduleGc()}}},$a=new WeakMap,Yo=new WeakMap,Va=new WeakMap,ot=new WeakMap,Zo=new WeakMap,xe=new WeakMap,sn=new WeakMap,Jo=new WeakMap,We=new WeakSet,hg=function(){return this.state.fetchStatus==="paused"&&this.state.status==="pending"},zt=function(t){const o=a=>{switch(t.type){case"failed":return{...a,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...a,fetchStatus:"paused"};case"continue":return{...a,fetchStatus:"fetching"};case"fetch":return{...a,...HS(a.data,this.options),fetchMeta:t.meta??null};case"success":const r={...a,...dp(t.data,t.dataUpdatedAt),dataUpdateCount:a.dataUpdateCount+1,...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};return j(this,Va,t.manual?r:void 0),r;case"error":const n=t.error;return{...a,error:n,errorUpdateCount:a.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:a.fetchFailureCount+1,fetchFailureReason:n,fetchStatus:"idle",status:"error",isInvalidated:!0};case"invalidate":return{...a,isInvalidated:!0};case"setState":return{...a,...t.state}}};this.state=o(this.state),Ie.batch(()=>{this.observers.forEach(a=>{a.onQueryUpdate()}),P(this,ot).notify({query:this,type:"updated",action:t})})},Cp);function HS(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:pg(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function dp(e,t){return{data:e,dataUpdatedAt:t??Date.now(),error:null,isInvalidated:!1,status:"success"}}function cp(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,o=t!==void 0,a=o?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:o?a??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:o?"success":"pending",fetchStatus:"idle"}}var ln,qt,Te,ea,At,io,Pp,$S=(Pp=class extends fg{constructor(t){super();Y(this,At);Y(this,ln);Y(this,qt);Y(this,Te);Y(this,ea);j(this,ln,t.client),this.mutationId=t.mutationId,j(this,Te,t.mutationCache),j(this,qt,[]),this.state=t.state||VS(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){P(this,qt).includes(t)||(P(this,qt).push(t),this.clearGcTimeout(),P(this,Te).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){j(this,qt,P(this,qt).filter(o=>o!==t)),this.scheduleGc(),P(this,Te).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){P(this,qt).length||(this.state.status==="pending"?this.scheduleGc():P(this,Te).remove(this))}continue(){var t;return((t=P(this,ea))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var s,i,l,u,d,p,h,c,S,v,x,f,m,g,w,k,E,C;const o=()=>{ke(this,At,io).call(this,{type:"continue"})},a={client:P(this,ln),meta:this.options.meta,mutationKey:this.options.mutationKey};j(this,ea,mg({fn:()=>this.options.mutationFn?this.options.mutationFn(t,a):Promise.reject(new Error("No mutationFn found")),onFail:(A,M)=>{ke(this,At,io).call(this,{type:"failed",failureCount:A,error:M})},onPause:()=>{ke(this,At,io).call(this,{type:"pause"})},onContinue:o,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>P(this,Te).canRun(this)}));const r=this.state.status==="pending",n=!P(this,ea).canStart();try{if(r)o();else{ke(this,At,io).call(this,{type:"pending",variables:t,isPaused:n}),P(this,Te).config.onMutate&&await P(this,Te).config.onMutate(t,this,a);const M=await((i=(s=this.options).onMutate)==null?void 0:i.call(s,t,a));M!==this.state.context&&ke(this,At,io).call(this,{type:"pending",context:M,variables:t,isPaused:n})}const A=await P(this,ea).start();return await((u=(l=P(this,Te).config).onSuccess)==null?void 0:u.call(l,A,t,this.state.context,this,a)),await((p=(d=this.options).onSuccess)==null?void 0:p.call(d,A,t,this.state.context,a)),await((c=(h=P(this,Te).config).onSettled)==null?void 0:c.call(h,A,null,this.state.variables,this.state.context,this,a)),await((v=(S=this.options).onSettled)==null?void 0:v.call(S,A,null,t,this.state.context,a)),ke(this,At,io).call(this,{type:"success",data:A}),A}catch(A){try{await((f=(x=P(this,Te).config).onError)==null?void 0:f.call(x,A,t,this.state.context,this,a))}catch(M){Promise.reject(M)}try{await((g=(m=this.options).onError)==null?void 0:g.call(m,A,t,this.state.context,a))}catch(M){Promise.reject(M)}try{await((k=(w=P(this,Te).config).onSettled)==null?void 0:k.call(w,void 0,A,this.state.variables,this.state.context,this,a))}catch(M){Promise.reject(M)}try{await((C=(E=this.options).onSettled)==null?void 0:C.call(E,void 0,A,t,this.state.context,a))}catch(M){Promise.reject(M)}throw ke(this,At,io).call(this,{type:"error",error:A}),A}finally{P(this,Te).runNext(this)}}},ln=new WeakMap,qt=new WeakMap,Te=new WeakMap,ea=new WeakMap,At=new WeakSet,io=function(t){const o=a=>{switch(t.type){case"failed":return{...a,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...a,isPaused:!0};case"continue":return{...a,isPaused:!1};case"pending":return{...a,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...a,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...a,data:void 0,error:t.error,failureCount:a.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=o(this.state),Ie.batch(()=>{P(this,qt).forEach(a=>{a.onMutationUpdate(t)}),P(this,Te).notify({mutation:this,type:"updated",action:t})})},Pp);function VS(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Ut,gt,un,qp,GS=(qp=class extends ni{constructor(t={}){super();Y(this,Ut);Y(this,gt);Y(this,un);this.config=t,j(this,Ut,new Set),j(this,gt,new Map),j(this,un,0)}build(t,o,a){const r=new $S({client:t,mutationCache:this,mutationId:++wn(this,un)._,options:t.defaultMutationOptions(o),state:a});return this.add(r),r}add(t){P(this,Ut).add(t);const o=Hn(t);if(typeof o=="string"){const a=P(this,gt).get(o);a?a.push(t):P(this,gt).set(o,[t])}this.notify({type:"added",mutation:t})}remove(t){if(P(this,Ut).delete(t)){const o=Hn(t);if(typeof o=="string"){const a=P(this,gt).get(o);if(a)if(a.length>1){const r=a.indexOf(t);r!==-1&&a.splice(r,1)}else a[0]===t&&P(this,gt).delete(o)}}this.notify({type:"removed",mutation:t})}canRun(t){const o=Hn(t);if(typeof o=="string"){const a=P(this,gt).get(o),r=a==null?void 0:a.find(n=>n.state.status==="pending");return!r||r===t}else return!0}runNext(t){var a;const o=Hn(t);if(typeof o=="string"){const r=(a=P(this,gt).get(o))==null?void 0:a.find(n=>n!==t&&n.state.isPaused);return(r==null?void 0:r.continue())??Promise.resolve()}else return Promise.resolve()}clear(){Ie.batch(()=>{P(this,Ut).forEach(t=>{this.notify({type:"removed",mutation:t})}),P(this,Ut).clear(),P(this,gt).clear()})}getAll(){return Array.from(P(this,Ut))}find(t){const o={exact:!0,...t};return this.getAll().find(a=>sp(o,a))}findAll(t={}){return this.getAll().filter(o=>sp(t,o))}notify(t){Ie.batch(()=>{this.listeners.forEach(o=>{o(t)})})}resumePausedMutations(){const t=this.getAll().filter(o=>o.state.isPaused);return Ie.batch(()=>Promise.all(t.map(o=>o.continue().catch(ht))))}},Ut=new WeakMap,gt=new WeakMap,un=new WeakMap,qp);function Hn(e){var t;return(t=e.options.scope)==null?void 0:t.id}var Ot,Ap,WS=(Ap=class extends ni{constructor(t={}){super();Y(this,Ot);this.config=t,j(this,Ot,new Map)}build(t,o,a){const r=o.queryKey,n=o.queryHash??hd(r,o);let s=this.get(n);return s||(s=new BS({client:t,queryKey:r,queryHash:n,options:t.defaultQueryOptions(o),state:a,defaultOptions:t.getQueryDefaults(r)}),this.add(s)),s}add(t){P(this,Ot).has(t.queryHash)||(P(this,Ot).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const o=P(this,Ot).get(t.queryHash);o&&(t.destroy(),o===t&&P(this,Ot).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){Ie.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return P(this,Ot).get(t)}getAll(){return[...P(this,Ot).values()]}find(t){const o={exact:!0,...t};return this.getAll().find(a=>np(o,a))}findAll(t={}){const o=this.getAll();return Object.keys(t).length>0?o.filter(a=>np(t,a)):o}notify(t){Ie.batch(()=>{this.listeners.forEach(o=>{o(t)})})}onFocus(){Ie.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){Ie.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},Ot=new WeakMap,Ap),ce,go,vo,Ga,Wa,yo,Qa,Ka,Op,QS=(Op=class{constructor(e={}){Y(this,ce);Y(this,go);Y(this,vo);Y(this,Ga);Y(this,Wa);Y(this,yo);Y(this,Qa);Y(this,Ka);j(this,ce,e.queryCache||new WS),j(this,go,e.mutationCache||new GS),j(this,vo,e.defaultOptions||{}),j(this,Ga,new Map),j(this,Wa,new Map),j(this,yo,0)}mount(){wn(this,yo)._++,P(this,yo)===1&&(j(this,Qa,lg.subscribe(async e=>{e&&(await this.resumePausedMutations(),P(this,ce).onFocus())})),j(this,Ka,Rs.subscribe(async e=>{e&&(await this.resumePausedMutations(),P(this,ce).onOnline())})))}unmount(){var e,t;wn(this,yo)._--,P(this,yo)===0&&((e=P(this,Qa))==null||e.call(this),j(this,Qa,void 0),(t=P(this,Ka))==null||t.call(this),j(this,Ka,void 0))}isFetching(e){return P(this,ce).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return P(this,go).findAll({...e,status:"pending"}).length}getQueryData(e){var o;const t=this.defaultQueryOptions({queryKey:e});return(o=P(this,ce).get(t.queryHash))==null?void 0:o.state.data}ensureQueryData(e){const t=this.defaultQueryOptions(e),o=P(this,ce).build(this,t),a=o.state.data;return a===void 0?this.fetchQuery(e):(e.revalidateIfStale&&o.isStaleByTime(Zl(t.staleTime,o))&&this.prefetchQuery(t),Promise.resolve(a))}getQueriesData(e){return P(this,ce).findAll(e).map(({queryKey:t,state:o})=>{const a=o.data;return[t,a]})}setQueryData(e,t,o){const a=this.defaultQueryOptions({queryKey:e}),r=P(this,ce).get(a.queryHash),n=r==null?void 0:r.state.data,s=CS(t,n);if(s!==void 0)return P(this,ce).build(this,a).setData(s,{...o,manual:!0})}setQueriesData(e,t,o){return Ie.batch(()=>P(this,ce).findAll(e).map(({queryKey:a})=>[a,this.setQueryData(a,t,o)]))}getQueryState(e){var o;const t=this.defaultQueryOptions({queryKey:e});return(o=P(this,ce).get(t.queryHash))==null?void 0:o.state}removeQueries(e){const t=P(this,ce);Ie.batch(()=>{t.findAll(e).forEach(o=>{t.remove(o)})})}resetQueries(e,t){const o=P(this,ce);return Ie.batch(()=>(o.findAll(e).forEach(a=>{a.reset()}),this.refetchQueries({type:"active",...e},t)))}cancelQueries(e,t={}){const o={revert:!0,...t},a=Ie.batch(()=>P(this,ce).findAll(e).map(r=>r.cancel(o)));return Promise.all(a).then(ht).catch(ht)}invalidateQueries(e,t={}){return Ie.batch(()=>(P(this,ce).findAll(e).forEach(o=>{o.invalidate()}),(e==null?void 0:e.refetchType)==="none"?Promise.resolve():this.refetchQueries({...e,type:(e==null?void 0:e.refetchType)??(e==null?void 0:e.type)??"active"},t)))}refetchQueries(e,t={}){const o={...t,cancelRefetch:t.cancelRefetch??!0},a=Ie.batch(()=>P(this,ce).findAll(e).filter(r=>!r.isDisabled()&&!r.isStatic()).map(r=>{let n=r.fetch(void 0,o);return o.throwOnError||(n=n.catch(ht)),r.state.fetchStatus==="paused"?Promise.resolve():n}));return Promise.all(a).then(ht)}fetchQuery(e){const t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);const o=P(this,ce).build(this,t);return o.isStaleByTime(Zl(t.staleTime,o))?o.fetch(t):Promise.resolve(o.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(ht).catch(ht)}fetchInfiniteQuery(e){return e._type="infinite",this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(ht).catch(ht)}ensureInfiniteQueryData(e){return e._type="infinite",this.ensureQueryData(e)}resumePausedMutations(){return Rs.isOnline()?P(this,go).resumePausedMutations():Promise.resolve()}getQueryCache(){return P(this,ce)}getMutationCache(){return P(this,go)}getDefaultOptions(){return P(this,vo)}setDefaultOptions(e){j(this,vo,e)}setQueryDefaults(e,t){P(this,Ga).set(on(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...P(this,Ga).values()],o={};return t.forEach(a=>{an(e,a.queryKey)&&Object.assign(o,a.defaultOptions)}),o}setMutationDefaults(e,t){P(this,Wa).set(on(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...P(this,Wa).values()],o={};return t.forEach(a=>{an(e,a.mutationKey)&&Object.assign(o,a.defaultOptions)}),o}defaultQueryOptions(e){if(e._defaulted)return e;const t={...P(this,vo).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=hd(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===gd&&(t.enabled=!1),t}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...P(this,vo).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){P(this,ce).clear(),P(this,go).clear()}},ce=new WeakMap,go=new WeakMap,vo=new WeakMap,Ga=new WeakMap,Wa=new WeakMap,yo=new WeakMap,Qa=new WeakMap,Ka=new WeakMap,Op),KS=y.createContext(void 0),XS=({client:e,children:t})=>(y.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),b.jsx(KS.Provider,{value:e,children:t}));/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rn(){return rn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e},rn.apply(this,arguments)}var wo;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(wo||(wo={}));const pp="popstate";function YS(e){e===void 0&&(e={});function t(r,n){let{pathname:s="/",search:i="",hash:l=""}=ma(r.location.hash.substr(1));return!s.startsWith("/")&&!s.startsWith(".")&&(s="/"+s),tu("",{pathname:s,search:i,hash:l},n.state&&n.state.usr||null,n.state&&n.state.key||"default")}function o(r,n){let s=r.document.querySelector("base"),i="";if(s&&s.getAttribute("href")){let l=r.location.href,u=l.indexOf("#");i=u===-1?l:l.slice(0,u)}return i+"#"+(typeof n=="string"?n:gg(n))}function a(r,n){si(r.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(n)+")")}return JS(t,o,a,e)}function be(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function si(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ZS(){return Math.random().toString(36).substr(2,8)}function mp(e,t){return{usr:e.state,key:e.key,idx:t}}function tu(e,t,o,a){return o===void 0&&(o=null),rn({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ma(t):t,{state:o,key:t&&t.key||a||ZS()})}function gg(e){let{pathname:t="/",search:o="",hash:a=""}=e;return o&&o!=="?"&&(t+=o.charAt(0)==="?"?o:"?"+o),a&&a!=="#"&&(t+=a.charAt(0)==="#"?a:"#"+a),t}function ma(e){let t={};if(e){let o=e.indexOf("#");o>=0&&(t.hash=e.substr(o),e=e.substr(0,o));let a=e.indexOf("?");a>=0&&(t.search=e.substr(a),e=e.substr(0,a)),e&&(t.pathname=e)}return t}function JS(e,t,o,a){a===void 0&&(a={});let{window:r=document.defaultView,v5Compat:n=!1}=a,s=r.history,i=wo.Pop,l=null,u=d();u==null&&(u=0,s.replaceState(rn({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function p(){i=wo.Pop;let x=d(),f=x==null?null:x-u;u=x,l&&l({action:i,location:v.location,delta:f})}function h(x,f){i=wo.Push;let m=tu(v.location,x,f);o&&o(m,x),u=d()+1;let g=mp(m,u),w=v.createHref(m);try{s.pushState(g,"",w)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;r.location.assign(w)}n&&l&&l({action:i,location:v.location,delta:1})}function c(x,f){i=wo.Replace;let m=tu(v.location,x,f);o&&o(m,x),u=d();let g=mp(m,u),w=v.createHref(m);s.replaceState(g,"",w),n&&l&&l({action:i,location:v.location,delta:0})}function S(x){let f=r.location.origin!=="null"?r.location.origin:r.location.href,m=typeof x=="string"?x:gg(x);return m=m.replace(/ $/,"%20"),be(f,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,f)}let v={get action(){return i},get location(){return e(r,s)},listen(x){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(pp,p),l=x,()=>{r.removeEventListener(pp,p),l=null}},createHref(x){return t(r,x)},createURL:S,encodeLocation(x){let f=S(x);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:h,replace:c,go(x){return s.go(x)}};return v}var fp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(fp||(fp={}));function e1(e,t,o){return o===void 0&&(o="/"),t1(e,t,o)}function t1(e,t,o,a){let r=typeof t=="string"?ma(t):t,n=bg(r.pathname||"/",o);if(n==null)return null;let s=vg(e);o1(s);let i=null;for(let l=0;i==null&&l<s.length;++l){let u=f1(n);i=c1(s[l],u)}return i}function vg(e,t,o,a){t===void 0&&(t=[]),o===void 0&&(o=[]),a===void 0&&(a="");let r=(n,s,i)=>{let l={relativePath:i===void 0?n.path||"":i,caseSensitive:n.caseSensitive===!0,childrenIndex:s,route:n};l.relativePath.startsWith("/")&&(be(l.relativePath.startsWith(a),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(a.length));let u=aa([a,l.relativePath]),d=o.concat(l);n.children&&n.children.length>0&&(be(n.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),vg(n.children,t,d,u)),!(n.path==null&&!n.index)&&t.push({path:u,score:u1(u,n.index),routesMeta:d})};return e.forEach((n,s)=>{var i;if(n.path===""||!((i=n.path)!=null&&i.includes("?")))r(n,s);else for(let l of yg(n.path))r(n,s,l)}),t}function yg(e){let t=e.split("/");if(t.length===0)return[];let[o,...a]=t,r=o.endsWith("?"),n=o.replace(/\?$/,"");if(a.length===0)return r?[n,""]:[n];let s=yg(a.join("/")),i=[];return i.push(...s.map(l=>l===""?n:[n,l].join("/"))),r&&i.push(...s),i.map(l=>e.startsWith("/")&&l===""?"/":l)}function o1(e){e.sort((t,o)=>t.score!==o.score?o.score-t.score:d1(t.routesMeta.map(a=>a.childrenIndex),o.routesMeta.map(a=>a.childrenIndex)))}const a1=/^:[\w-]+$/,r1=3,n1=2,s1=1,i1=10,l1=-2,hp=e=>e==="*";function u1(e,t){let o=e.split("/"),a=o.length;return o.some(hp)&&(a+=l1),t&&(a+=n1),o.filter(r=>!hp(r)).reduce((r,n)=>r+(a1.test(n)?r1:n===""?s1:i1),a)}function d1(e,t){return e.length===t.length&&e.slice(0,-1).every((a,r)=>a===t[r])?e[e.length-1]-t[t.length-1]:0}function c1(e,t,o){let{routesMeta:a}=e,r={},n="/",s=[];for(let i=0;i<a.length;++i){let l=a[i],u=i===a.length-1,d=n==="/"?t:t.slice(n.length)||"/",p=p1({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d),h=l.route;if(!p)return null;Object.assign(r,p.params),s.push({params:r,pathname:aa([n,p.pathname]),pathnameBase:w1(aa([n,p.pathnameBase])),route:h}),p.pathnameBase!=="/"&&(n=aa([n,p.pathnameBase]))}return s}function p1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[o,a]=m1(e.path,e.caseSensitive,e.end),r=t.match(o);if(!r)return null;let n=r[0],s=n.replace(/(.)\/+$/,"$1"),i=r.slice(1);return{params:a.reduce((u,d,p)=>{let{paramName:h,isOptional:c}=d;if(h==="*"){let v=i[p]||"";s=n.slice(0,n.length-v.length).replace(/(.)\/+$/,"$1")}const S=i[p];return c&&!S?u[h]=void 0:u[h]=(S||"").replace(/%2F/g,"/"),u},{}),pathname:n,pathnameBase:s,pattern:e}}function m1(e,t,o){t===void 0&&(t=!1),o===void 0&&(o=!0),si(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let a=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,i,l)=>(a.push({paramName:i,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,t?void 0:"i"),a]}function f1(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return si(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function bg(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let o=t.endsWith("/")?t.length-1:t.length,a=e.charAt(o);return a&&a!=="/"?null:e.slice(o)||"/"}const h1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,g1=e=>h1.test(e);function v1(e,t){t===void 0&&(t="/");let{pathname:o,search:a="",hash:r=""}=typeof e=="string"?ma(e):e,n;if(o)if(g1(o))n=o;else{if(o.includes("//")){let s=o;o=o.replace(/\/\/+/g,"/"),si(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+o))}o.startsWith("/")?n=gp(o.substring(1),"/"):n=gp(o,t)}else n=t;return{pathname:n,search:S1(a),hash:k1(r)}}function gp(e,t){let o=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?o.length>1&&o.pop():r!=="."&&o.push(r)}),o.length>1?o.join("/"):"/"}function Qi(e,t,o,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+o+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function y1(e){return e.filter((t,o)=>o===0||t.route.path&&t.route.path.length>0)}function b1(e,t){let o=y1(e);return t?o.map((a,r)=>r===o.length-1?a.pathname:a.pathnameBase):o.map(a=>a.pathnameBase)}function x1(e,t,o,a){a===void 0&&(a=!1);let r;typeof e=="string"?r=ma(e):(r=rn({},e),be(!r.pathname||!r.pathname.includes("?"),Qi("?","pathname","search",r)),be(!r.pathname||!r.pathname.includes("#"),Qi("#","pathname","hash",r)),be(!r.search||!r.search.includes("#"),Qi("#","search","hash",r)));let n=e===""||r.pathname==="",s=n?"/":r.pathname,i;if(s==null)i=o;else{let p=t.length-1;if(!a&&s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),p-=1;r.pathname=h.join("/")}i=p>=0?t[p]:"/"}let l=v1(r,i),u=s&&s!=="/"&&s.endsWith("/"),d=(n||s===".")&&o.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const aa=e=>e.join("/").replace(/\/\/+/g,"/"),w1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),S1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,k1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function E1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const xg=["post","put","patch","delete"];new Set(xg);const C1=["get",...xg];new Set(C1);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nn(){return nn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e},nn.apply(this,arguments)}const vd=y.createContext(null),P1=y.createContext(null),ii=y.createContext(null),li=y.createContext(null),cr=y.createContext({outlet:null,matches:[],isDataRoute:!1}),wg=y.createContext(null);function ui(){return y.useContext(li)!=null}function Sg(){return ui()||be(!1),y.useContext(li).location}function kg(e){y.useContext(ii).static||y.useLayoutEffect(e)}function q1(){let{isDataRoute:e}=y.useContext(cr);return e?U1():A1()}function A1(){ui()||be(!1);let e=y.useContext(vd),{basename:t,future:o,navigator:a}=y.useContext(ii),{matches:r}=y.useContext(cr),{pathname:n}=Sg(),s=JSON.stringify(b1(r,o.v7_relativeSplatPath)),i=y.useRef(!1);return kg(()=>{i.current=!0}),y.useCallback(function(u,d){if(d===void 0&&(d={}),!i.current)return;if(typeof u=="number"){a.go(u);return}let p=x1(u,JSON.parse(s),n,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:aa([t,p.pathname])),(d.replace?a.replace:a.push)(p,d.state,d)},[t,a,s,n,e])}function O1(e,t){return T1(e,t)}function T1(e,t,o,a){ui()||be(!1);let{navigator:r}=y.useContext(ii),{matches:n}=y.useContext(cr),s=n[n.length-1],i=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u=Sg(),d;if(t){var p;let x=typeof t=="string"?ma(t):t;l==="/"||(p=x.pathname)!=null&&p.startsWith(l)||be(!1),d=x}else d=u;let h=d.pathname||"/",c=h;if(l!=="/"){let x=l.replace(/^\//,"").split("/");c="/"+h.replace(/^\//,"").split("/").slice(x.length).join("/")}let S=e1(e,{pathname:c}),v=I1(S&&S.map(x=>Object.assign({},x,{params:Object.assign({},i,x.params),pathname:aa([l,r.encodeLocation?r.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?l:aa([l,r.encodeLocation?r.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),n,o,a);return t&&v?y.createElement(li.Provider,{value:{location:nn({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:wo.Pop}},v):v}function D1(){let e=j1(),t=E1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),o=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},t),o?y.createElement("pre",{style:r},o):null,null)}const N1=y.createElement(D1,null);class R1 extends y.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,o){return o.location!==t.location||o.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:o.error,location:o.location,revalidation:t.revalidation||o.revalidation}}componentDidCatch(t,o){console.error("React Router caught the following error during render",t,o)}render(){return this.state.error!==void 0?y.createElement(cr.Provider,{value:this.props.routeContext},y.createElement(wg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function M1(e){let{routeContext:t,match:o,children:a}=e,r=y.useContext(vd);return r&&r.static&&r.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=o.route.id),y.createElement(cr.Provider,{value:t},a)}function I1(e,t,o,a){var r;if(t===void 0&&(t=[]),o===void 0&&(o=null),a===void 0&&(a=null),e==null){var n;if(!o)return null;if(o.errors)e=o.matches;else if((n=a)!=null&&n.v7_partialHydration&&t.length===0&&!o.initialized&&o.matches.length>0)e=o.matches;else return null}let s=e,i=(r=o)==null?void 0:r.errors;if(i!=null){let d=s.findIndex(p=>p.route.id&&(i==null?void 0:i[p.route.id])!==void 0);d>=0||be(!1),s=s.slice(0,Math.min(s.length,d+1))}let l=!1,u=-1;if(o&&a&&a.v7_partialHydration)for(let d=0;d<s.length;d++){let p=s[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:h,errors:c}=o,S=p.route.loader&&h[p.route.id]===void 0&&(!c||c[p.route.id]===void 0);if(p.route.lazy||S){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((d,p,h)=>{let c,S=!1,v=null,x=null;o&&(c=i&&p.route.id?i[p.route.id]:void 0,v=p.route.errorElement||N1,l&&(u<0&&h===0?(F1("route-fallback"),S=!0,x=null):u===h&&(S=!0,x=p.route.hydrateFallbackElement||null)));let f=t.concat(s.slice(0,h+1)),m=()=>{let g;return c?g=v:S?g=x:p.route.Component?g=y.createElement(p.route.Component,null):p.route.element?g=p.route.element:g=d,y.createElement(M1,{match:p,routeContext:{outlet:d,matches:f,isDataRoute:o!=null},children:g})};return o&&(p.route.ErrorBoundary||p.route.errorElement||h===0)?y.createElement(R1,{location:o.location,revalidation:o.revalidation,component:v,error:c,children:m(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):m()},null)}var Eg=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Eg||{}),Cg=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Cg||{});function L1(e){let t=y.useContext(vd);return t||be(!1),t}function z1(e){let t=y.useContext(P1);return t||be(!1),t}function _1(e){let t=y.useContext(cr);return t||be(!1),t}function Pg(e){let t=_1(),o=t.matches[t.matches.length-1];return o.route.id||be(!1),o.route.id}function j1(){var e;let t=y.useContext(wg),o=z1(),a=Pg();return t!==void 0?t:(e=o.errors)==null?void 0:e[a]}function U1(){let{router:e}=L1(Eg.UseNavigateStable),t=Pg(Cg.UseNavigateStable),o=y.useRef(!1);return kg(()=>{o.current=!0}),y.useCallback(function(r,n){n===void 0&&(n={}),o.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,nn({fromRouteId:t},n)))},[e,t])}const vp={};function F1(e,t,o){vp[e]||(vp[e]=!0)}function B1(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function ou(e){be(!1)}function H1(e){let{basename:t="/",children:o=null,location:a,navigationType:r=wo.Pop,navigator:n,static:s=!1,future:i}=e;ui()&&be(!1);let l=t.replace(/^\/*/,"/"),u=y.useMemo(()=>({basename:l,navigator:n,static:s,future:nn({v7_relativeSplatPath:!1},i)}),[l,i,n,s]);typeof a=="string"&&(a=ma(a));let{pathname:d="/",search:p="",hash:h="",state:c=null,key:S="default"}=a,v=y.useMemo(()=>{let x=bg(d,l);return x==null?null:{location:{pathname:x,search:p,hash:h,state:c,key:S},navigationType:r}},[l,d,p,h,c,S,r]);return v==null?null:y.createElement(ii.Provider,{value:u},y.createElement(li.Provider,{children:o,value:v}))}function $1(e){let{children:t,location:o}=e;return O1(au(t),o)}new Promise(()=>{});function au(e,t){t===void 0&&(t=[]);let o=[];return y.Children.forEach(e,(a,r)=>{if(!y.isValidElement(a))return;let n=[...t,r];if(a.type===y.Fragment){o.push.apply(o,au(a.props.children,n));return}a.type!==ou&&be(!1),!a.props.index||!a.props.children||be(!1);let s={id:a.props.id||n.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(s.children=au(a.props.children,n)),o.push(s)}),o}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const V1="6";try{window.__reactRouterVersion=V1}catch{}const G1="startTransition",yp=Fp[G1];function W1(e){let{basename:t,children:o,future:a,window:r}=e,n=y.useRef();n.current==null&&(n.current=YS({window:r,v5Compat:!0}));let s=n.current,[i,l]=y.useState({action:s.action,location:s.location}),{v7_startTransition:u}=a||{},d=y.useCallback(p=>{u&&yp?yp(()=>l(p)):l(p)},[l,u]);return y.useLayoutEffect(()=>s.listen(d),[s,d]),y.useEffect(()=>B1(a),[a]),y.createElement(H1,{basename:t,children:o,location:i.location,navigationType:i.action,navigator:s,future:a})}var bp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(bp||(bp={}));var xp;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(xp||(xp={}));const Q1=({modules:e,activeModule:t,onSelectModule:o,onClose:a})=>{const r=y.useMemo(()=>{const n=new Map;return e.forEach((s,i)=>{const l=n.get(s.category)||[];l.push({module:s,globalIndex:i}),n.set(s.category,l)}),Array.from(n.entries())},[e]);return b.jsxs("aside",{className:"w-[84vw] max-w-72 h-dvh bg-sidebar border-r border-sidebar-border flex flex-col shrink-0 overflow-hidden",children:[b.jsx("div",{className:"p-4 lg:p-5 border-b border-sidebar-border pt-[max(1rem,env(safe-area-inset-top))]",children:b.jsxs("div",{className:"flex items-start justify-between gap-2",children:[b.jsxs("div",{className:"flex items-center gap-2.5",children:[b.jsx("div",{className:"w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm",children:"D"}),b.jsxs("div",{children:[b.jsx("h1",{className:"text-sm font-bold text-sidebar-accent-foreground tracking-tight",children:"Debian"}),b.jsx("p",{className:"text-xs text-sidebar-foreground",children:"Guia Completo"})]})]}),a&&b.jsx("button",{type:"button",onClick:a,className:"lg:hidden w-8 h-8 rounded-md border border-sidebar-border text-sidebar-foreground hover:text-sidebar-accent-foreground hover:bg-sidebar-accent transition-colors flex items-center justify-center","aria-label":"Fechar menu",children:b.jsx(wh,{size:16})})]})}),b.jsx("nav",{className:"flex-1 py-3 overflow-y-auto scrollbar-thin",onWheel:n=>n.stopPropagation(),children:r.map(([n,s])=>b.jsxs("div",{className:"mb-2",children:[b.jsx("div",{className:"px-4 py-2",children:b.jsx("span",{className:"text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground",children:n})}),s.map(({module:i,globalIndex:l})=>b.jsxs("button",{onClick:()=>o(i.id),className:`w-full text-left px-4 py-2 flex items-center gap-3 text-[13px] transition-all duration-150 border-l-[3px] ${t===i.id?"border-l-primary bg-primary/10 text-primary font-medium":"border-l-transparent text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"}`,children:[b.jsx("span",{className:"text-sm",children:i.icon}),b.jsxs("span",{className:"flex items-center gap-2 leading-tight",children:[b.jsx("span",{className:"text-[10px] text-muted-foreground font-mono",children:String(l+1).padStart(2,"0")}),b.jsx("span",{className:"line-clamp-1",children:i.title})]})]},i.id))]},n))}),b.jsx("div",{className:"p-4 border-t border-sidebar-border",children:b.jsx("div",{className:"text-[10px] text-muted-foreground text-center",children:"Debian — Guia Completo v1.0"})})]})},K1=({command:e})=>b.jsxs("div",{className:"mb-6 animate-fade-in",children:[b.jsxs("div",{className:"code-block p-4",children:[b.jsx("div",{className:"flex items-center gap-2 mb-2",children:b.jsx("span",{className:"text-[hsl(var(--debian-light-red))] font-mono text-xs font-semibold tracking-wider uppercase",children:"Comando"})}),b.jsxs("code",{className:"block text-lg font-bold text-terminal",children:[b.jsx("span",{className:"prompt",children:"$ "}),e.command]}),b.jsx("p",{className:"mt-2 text-sm text-secondary-foreground leading-relaxed",children:e.description}),e.example&&b.jsxs("div",{className:"mt-3 pt-3 border-t border-border",children:[b.jsx("span",{className:"text-muted-foreground text-xs font-mono uppercase tracking-wider",children:"Exemplo:"}),b.jsx("pre",{className:"mt-1",children:b.jsx("code",{className:"text-terminal text-sm whitespace-pre-wrap",children:e.example.split(`
`).map((t,o)=>b.jsxs("div",{children:[b.jsx("span",{className:"prompt",children:"$ "}),t]},o))})})]}),e.output&&b.jsxs("div",{className:"mt-2 pt-2 border-t border-border",children:[b.jsx("span",{className:"text-muted-foreground text-xs font-mono uppercase tracking-wider",children:"Saída:"}),b.jsx("pre",{className:"mt-1",children:b.jsx("code",{className:"text-muted-foreground text-sm whitespace-pre-wrap",children:e.output})})]})]}),e.flags&&e.flags.length>0&&b.jsxs("div",{className:"mt-3 ml-4 space-y-1",children:[b.jsx("span",{className:"text-xs font-mono text-muted-foreground uppercase tracking-wider",children:"Flags / Opções:"}),e.flags.map((t,o)=>b.jsxs("div",{className:"flex items-start gap-3 py-1",children:[b.jsx("code",{className:"text-warning font-mono text-sm font-medium min-w-[120px] shrink-0",children:t.flag}),b.jsx("span",{className:"text-sm text-secondary-foreground",children:t.description})]},o))]})]}),X1=({exercise:e})=>{const[t,o]=y.useState(!1),[a,r]=y.useState(!1);return b.jsx("div",{className:"rounded-lg bg-secondary border border-border p-4 mb-3 animate-fade-in",children:b.jsxs("div",{className:"flex items-start gap-3",children:[b.jsx("span",{className:"flex items-center justify-center w-7 h-7 rounded-full bg-primary/20 text-primary text-sm font-bold shrink-0 mt-0.5",children:e.id}),b.jsxs("div",{className:"flex-1",children:[b.jsx("p",{className:"text-foreground font-medium leading-relaxed",children:e.question}),b.jsxs("div",{className:"flex gap-2 mt-3",children:[e.hint&&b.jsxs("button",{onClick:()=>r(!a),className:"flex items-center gap-1.5 text-xs font-medium text-warning hover:text-warning/80 transition-colors",children:[b.jsx(wx,{size:14}),a?"Esconder dica":"Ver dica"]}),b.jsxs("button",{onClick:()=>o(!t),className:"flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/80 transition-colors",children:[t?b.jsx(vx,{size:14}):b.jsx(xh,{size:14}),t?"Esconder resposta":"Ver resposta"]})]}),a&&e.hint&&b.jsxs("div",{className:"mt-2 p-2 rounded bg-warning/10 border border-warning/20 text-sm text-warning",children:["💡 ",e.hint]}),t&&b.jsxs("div",{className:"mt-2 p-3 rounded code-block flex items-center gap-2",children:[b.jsx(nd,{size:16,className:"text-success shrink-0"}),b.jsx("code",{className:"text-terminal text-sm font-mono",children:e.answer})]})]})]})})},Y1={info:{border:"border-blue-500/30",bg:"bg-blue-500/5",headerBg:"bg-blue-500/10",text:"text-blue-300",icon:xx},warning:{border:"border-yellow-500/30",bg:"bg-yellow-500/5",headerBg:"bg-yellow-500/10",text:"text-yellow-300",icon:qx},danger:{border:"border-red-500/30",bg:"bg-red-500/5",headerBg:"bg-red-500/10",text:"text-red-300",icon:Ex},success:{border:"border-green-500/30",bg:"bg-green-500/5",headerBg:"bg-green-500/10",text:"text-green-300",icon:nd}},Z1=({module:e,moduleIndex:t,totalModules:o,onNavigate:a})=>b.jsx("div",{className:"min-w-0 flex-1 overflow-y-auto",children:b.jsxs("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pt-20 lg:pt-10",children:[b.jsxs("div",{className:"mb-8 animate-fade-in",children:[b.jsx("div",{className:"flex items-center gap-2 text-xs text-muted-foreground font-mono mb-1",children:b.jsx("span",{className:"uppercase tracking-wider",children:e.category})}),b.jsxs("div",{className:"flex items-center gap-2 text-xs text-muted-foreground font-mono mb-3",children:[b.jsxs("span",{children:["Módulo ",String(t+1).padStart(2,"0")]}),b.jsx("span",{children:"/"}),b.jsx("span",{children:String(o).padStart(2,"0")})]}),b.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[b.jsx("span",{className:"text-2xl sm:text-3xl",children:e.icon}),b.jsx("h1",{className:"text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight",children:e.title})]}),b.jsx("p",{className:"text-muted-foreground text-base sm:text-lg",children:e.description})]}),e.objectives&&e.objectives.length>0&&b.jsx("section",{className:"mb-10",children:b.jsxs("div",{className:"rounded-xl border border-primary/30 bg-primary/5 p-5",children:[b.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[b.jsx(Cx,{size:18,className:"text-primary"}),b.jsx("h2",{className:"text-sm font-bold text-foreground uppercase tracking-wider",children:"O que você vai aprender"})]}),b.jsx("ul",{className:"space-y-2 list-disc pl-5 text-[15px] text-secondary-foreground",children:e.objectives.map((r,n)=>b.jsx("li",{className:"leading-relaxed",children:r},n))})]})}),b.jsxs("section",{className:"mb-10",children:[b.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[b.jsx(gx,{size:18,className:"text-primary"}),b.jsx("h2",{className:"text-lg font-bold text-foreground",children:"Conceitos"})]}),b.jsx("div",{className:"space-y-4",children:e.content.map((r,n)=>b.jsx("p",{className:"text-secondary-foreground leading-relaxed text-[15px] animate-fade-in whitespace-pre-line",children:r},n))})]}),e.tips&&e.tips.length>0&&b.jsx("section",{className:"mb-10 space-y-4",children:e.tips.map((r,n)=>{const s=Y1[r.type],i=s.icon;return b.jsxs("div",{className:`rounded-xl border ${s.border} ${s.bg} overflow-hidden`,children:[r.title&&b.jsxs("div",{className:`flex items-center gap-2 px-4 py-2 ${s.headerBg} border-b ${s.border}`,children:[b.jsx(i,{size:16,className:s.text}),b.jsx("h4",{className:`text-sm font-bold ${s.text} m-0`,children:r.title})]}),b.jsxs("div",{className:"p-4",children:[!r.title&&b.jsx(i,{size:16,className:`${s.text} float-left mr-2 mt-1`}),b.jsx("p",{className:"text-[14px] text-secondary-foreground leading-relaxed m-0 whitespace-pre-line",children:r.content})]})]},n)})}),b.jsxs("section",{className:"mb-10",children:[b.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[b.jsx(Px,{size:18,className:"text-terminal"}),b.jsxs("h2",{className:"text-lg font-bold text-foreground",children:["Comandos (",e.commands.length,")"]})]}),b.jsx("div",{className:"space-y-2",children:e.commands.map((r,n)=>b.jsx(K1,{command:r},n))})]}),e.practiceLabs&&e.practiceLabs.length>0&&b.jsxs("section",{className:"mb-10",children:[b.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[b.jsx(Bc,{size:18,className:"text-primary"}),b.jsxs("h2",{className:"text-lg font-bold text-foreground",children:["Laboratórios práticos (",e.practiceLabs.length,")"]})]}),b.jsx("div",{className:"space-y-5",children:e.practiceLabs.map((r,n)=>b.jsxs("div",{className:"rounded-xl border border-primary/30 bg-primary/5 overflow-hidden",children:[b.jsxs("div",{className:"flex items-center gap-2 px-5 py-3 bg-primary/10 border-b border-primary/20",children:[b.jsx(Bc,{size:16,className:"text-primary"}),b.jsxs("h4",{className:"font-bold text-foreground m-0 text-base",children:["Pratique: ",r.title]})]}),b.jsxs("div",{className:"p-5 space-y-4",children:[b.jsxs("div",{children:[b.jsx("p",{className:"text-xs uppercase font-semibold text-primary mb-1 tracking-wider",children:"Objetivo"}),b.jsx("p",{className:"text-sm text-secondary-foreground leading-relaxed m-0",children:r.goal})]}),r.steps&&r.steps.length>0&&b.jsxs("div",{children:[b.jsx("p",{className:"text-xs uppercase font-semibold text-primary mb-2 tracking-wider",children:"Passo a passo"}),b.jsx("ol",{className:"text-sm text-secondary-foreground space-y-1.5 list-decimal pl-5 m-0",children:r.steps.map((s,i)=>b.jsx("li",{className:"leading-relaxed",children:s},i))})]}),r.command&&b.jsxs("div",{children:[b.jsx("p",{className:"text-xs uppercase font-semibold text-primary mb-1 tracking-wider",children:"Comandos para executar"}),b.jsx("pre",{className:"text-xs font-mono text-foreground bg-black/40 rounded-lg p-3 overflow-x-auto whitespace-pre-wrap leading-relaxed m-0",children:r.command})]}),r.expected&&b.jsxs("div",{children:[b.jsx("p",{className:"text-xs uppercase font-semibold text-green-500 mb-1 tracking-wider",children:"Saída esperada"}),b.jsx("pre",{className:"text-xs font-mono text-green-300 bg-black/40 rounded-lg p-3 overflow-x-auto whitespace-pre-wrap leading-relaxed m-0",children:r.expected})]}),r.verify&&b.jsxs("div",{className:"flex items-start gap-2 rounded-lg bg-green-500/10 border border-green-500/20 p-3",children:[b.jsx(nd,{size:14,className:"text-green-500 mt-0.5 shrink-0"}),b.jsxs("p",{className:"text-xs text-green-300 leading-relaxed m-0",children:[b.jsx("strong",{className:"text-green-400",children:"Como verificar: "}),r.verify]})]})]})]},n))})]}),b.jsxs("section",{className:"mb-10",children:[b.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[b.jsx(bx,{size:18,className:"text-warning"}),b.jsxs("h2",{className:"text-lg font-bold text-foreground",children:["Exercícios (",e.exercises.length,")"]})]}),b.jsx("p",{className:"text-sm text-muted-foreground mb-4",children:"Tente responder antes de ver a resposta! Pratique no seu terminal para fixar."}),e.exercises.map(r=>b.jsx(X1,{exercise:r},r.id))]}),e.references&&e.references.length>0&&b.jsxs("section",{className:"mb-10",children:[b.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[b.jsx(Sx,{size:18,className:"text-primary"}),b.jsx("h2",{className:"text-lg font-bold text-foreground",children:"Referências e leitura adicional"})]}),b.jsx("ul",{className:"space-y-2",children:e.references.map((r,n)=>b.jsxs("li",{className:"text-sm",children:[r.url?b.jsx("a",{href:r.url,target:"_blank",rel:"noopener noreferrer",className:"text-primary hover:underline font-medium",children:r.title}):b.jsx("span",{className:"text-foreground font-medium",children:r.title}),r.description&&b.jsxs("span",{className:"text-muted-foreground",children:[" — ",r.description]})]},n))})]}),b.jsxs("div",{className:"flex items-center justify-between pt-6 border-t border-border",children:[b.jsxs("button",{onClick:()=>a("prev"),disabled:t===0,className:"flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed",children:[b.jsx(yx,{size:16}),"Anterior"]}),b.jsxs("button",{onClick:()=>a("next"),disabled:t===o-1,className:"flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors disabled:opacity-30 disabled:cursor-not-allowed",children:["Próximo",b.jsx(xh,{size:16})]})]})]})}),J1=[{id:"linux-gnu",title:"O que é Linux e GNU",icon:"🐧",category:"Fundamentos Teóricos",description:"A história do Linux, o projeto GNU e o conceito de software livre — entenda os pilares antes de tocar no terminal.",objectives:["Diferenciar kernel, sistema operacional e distribuição","Entender por que o Debian existe e o que é a GPL","Conhecer as 4 liberdades do software livre","Identificar a versão do kernel e do sistema operacional em uso"],content:["O Linux não é um sistema operacional completo — é um kernel (núcleo). O kernel é o componente que faz a ponte entre o hardware (processador, memória, disco, placa de rede) e os programas que você usa. Ele gerencia processos, memória, dispositivos e atende as chamadas de sistema (system calls) feitas pelos aplicativos.","O kernel Linux foi criado por Linus Torvalds em 1991 quando ele tinha 21 anos, como um projeto pessoal inspirado no MINIX (sistema educacional de Andrew Tanenbaum). Linus liberou o código com uma licença livre (GPLv2), permitindo que qualquer pessoa estudasse, modificasse e redistribuísse. Hoje, o kernel Linux tem mais de 30 milhões de linhas de código e milhares de contribuidores ativos.","O projeto GNU (acrônimo recursivo de 'GNU's Not Unix') foi iniciado por Richard Stallman em 1983, oito anos antes do Linux, com o objetivo de criar um sistema operacional completamente livre. O GNU desenvolveu as ferramentas essenciais que tornam um sistema utilizável: o compilador GCC (que compila a maioria dos programas C/C++ do mundo), o editor Emacs, o shell Bash, as coreutils (ls, cp, mv, rm, cat, echo, grep) e a biblioteca C glibc.","Quando o kernel Linux (1991) se uniu às ferramentas GNU (já maduras em 1991), nasceu o sistema GNU/Linux — um sistema operacional completo e livre. É por isso que muitos puristas, e o próprio Stallman, insistem em chamar de GNU/Linux. Na prática, a maioria das pessoas diz simplesmente 'Linux', mas saber a história ajuda a entender por que pacotes essenciais como bash, ls e gcc vêm de outro projeto.","Software livre não significa gratuito. A palavra 'free' em inglês tem dois sentidos: livre (free as in freedom) e grátis (free as in free beer). 'Free Software' refere-se à liberdade. As 4 liberdades fundamentais definidas por Stallman são: (0) liberdade de usar o programa para qualquer propósito, (1) liberdade de estudar como o programa funciona e adaptá-lo (requer acesso ao código-fonte), (2) liberdade de redistribuir cópias, (3) liberdade de melhorar o programa e distribuir as melhorias. A licença GPL garante essas 4 liberdades através de um conceito chamado 'copyleft' — quem distribui o código modificado é obrigado a manter a mesma licença.","Uma distribuição Linux (distro) é uma combinação coordenada de: kernel Linux + ferramentas GNU + gerenciador de pacotes (apt, dnf, pacman) + ambiente gráfico (GNOME, KDE, XFCE) + configurações específicas + uma comunidade ou empresa que mantém tudo isso integrado. O Debian é uma das distribuições mais antigas e influentes — Ubuntu, Mint, Kali, Raspberry Pi OS, Proxmox e muitas outras são todas baseadas no Debian.","Existem outras famílias de distribuições além do Debian: Red Hat (que originou Fedora, CentOS, Rocky Linux), Arch (que originou Manjaro, EndeavourOS), SUSE (que originou openSUSE), e independentes como Slackware e Gentoo. Cada família tem seu gerenciador de pacotes e filosofia. Conhecer essas diferenças ajuda quando você precisa adaptar um tutorial: 'apt install' (Debian) vira 'dnf install' (Fedora) ou 'pacman -S' (Arch).","Por que isso importa na prática? Quando você instala um programa no Debian com 'sudo apt install vim', o gerenciador busca o pacote pré-compilado em servidores oficiais (repositórios), verifica a assinatura criptográfica para garantir autenticidade, baixa, resolve dependências automaticamente e instala. Tudo isso acontece graças ao trabalho coordenado entre kernel, GNU e a comunidade Debian. Não é magia — é décadas de engenharia de software livre."],commands:[{command:"uname",description:"Exibe informações sobre o kernel e o sistema. É o comando que responde 'em qual kernel estou rodando?'",example:"uname -a",flags:[{flag:"-a",description:"Tudo: kernel, hostname, versão, arquitetura, data"},{flag:"-r",description:"Só a versão do kernel (ex: 6.1.0-21-amd64)"},{flag:"-m",description:"Só a arquitetura da máquina (x86_64, aarch64, armv7l)"},{flag:"-n",description:"Só o hostname (nome da máquina)"},{flag:"-s",description:"Só o nome do kernel (Linux)"}],output:"Linux debian 6.1.0-21-amd64 #1 SMP PREEMPT_DYNAMIC Debian 6.1.90-1 (2024-05-19) x86_64 GNU/Linux"},{command:"cat /etc/os-release",description:"Exibe informações padronizadas sobre a distribuição: nome, versão, ID, codinome. Funciona em qualquer distro moderna.",example:"cat /etc/os-release",output:`PRETTY_NAME="Debian GNU/Linux 12 (bookworm)"
NAME="Debian GNU/Linux"
VERSION_ID="12"
VERSION="12 (bookworm)"
VERSION_CODENAME=bookworm
ID=debian`},{command:"lsb_release",description:"Mostra informações da distribuição padrão LSB (Linux Standard Base). Pode precisar instalar: sudo apt install lsb-release",example:"lsb_release -a",flags:[{flag:"-a",description:"Tudo: distribuição, versão, codinome"},{flag:"-d",description:"Só a descrição"},{flag:"-c",description:"Só o codinome (bookworm, bullseye)"}],output:`Distributor ID: Debian
Description:    Debian GNU/Linux 12 (bookworm)
Release:        12
Codename:       bookworm`},{command:"cat /proc/version",description:"Detalhes do kernel: versão, compilador usado, data de build. /proc é um sistema de arquivos virtual com informações do kernel em tempo real.",example:"cat /proc/version",output:"Linux version 6.1.0-21-amd64 (debian-kernel@lists.debian.org) (gcc-12 (Debian 12.2.0-14) 12.2.0, GNU ld (GNU Binutils for Debian) 2.40) #1 SMP PREEMPT_DYNAMIC Debian 6.1.90-1 (2024-05-19)"},{command:"cat /proc/cpuinfo",description:"Detalhes do processador: modelo, número de núcleos, velocidade, flags suportadas. Útil para diagnosticar performance.",example:"cat /proc/cpuinfo | grep 'model name' | head -1",output:"model name      : Intel(R) Core(TM) i5-8265U CPU @ 1.60GHz"},{command:"free",description:"Mostra uso de memória RAM e swap. Essencial para ver se o sistema está com pressão de memória.",example:"free -h",flags:[{flag:"-h",description:"Formato legível (KB, MB, GB)"},{flag:"-m",description:"Forçar saída em MB"},{flag:"-g",description:"Forçar saída em GB"},{flag:"-s 2",description:"Atualizar a cada 2 segundos (Ctrl+C para sair)"}],output:`               total        used        free      shared  buff/cache   available
Mem:           7.6Gi       1.2Gi       5.1Gi        85Mi       1.4Gi       6.1Gi
Swap:          2.0Gi          0B       2.0Gi`}],tips:[{type:"info",title:"Por que dizemos GNU/Linux",content:"Quando você roda 'ls', 'cp', 'cat' ou 'bash', está usando ferramentas GNU. Quando seu programa pede memória ou abre um arquivo, está pedindo ao kernel Linux. As duas peças trabalham juntas — daí 'GNU/Linux'. Se quiser ser super preciso, fale GNU/Linux. Se quiser ser entendido rapidamente, fale Linux."},{type:"warning",title:"Distros baseadas em Debian compartilham comandos",content:"Tudo que você aprende aqui sobre Debian funciona praticamente igual em Ubuntu, Linux Mint, Pop!_OS, Kali, Raspberry Pi OS e Proxmox. Mas NÃO funciona da mesma forma em Fedora, RHEL, openSUSE ou Arch — esses usam outros gerenciadores de pacotes (dnf, zypper, pacman). Se um tutorial diz 'sudo dnf install', você precisa traduzir para 'sudo apt install'."}],practiceLabs:[{title:"Identifique seu sistema",goal:"Descobrir qual versão do Debian, qual kernel, qual arquitetura e quantos núcleos seu sistema tem. Sempre que pedir ajuda em um fórum, essas informações são as primeiras a serem perguntadas.",steps:["Abra o terminal (Ctrl+Alt+T no GNOME).","Cole o bloco de comandos abaixo de uma vez só.","Anote os resultados em um arquivo de texto para referência futura."],command:`echo "=== Distribuição ==="
cat /etc/os-release | grep PRETTY_NAME

echo ""
echo "=== Kernel ==="
uname -r

echo ""
echo "=== Arquitetura ==="
uname -m

echo ""
echo "=== Núcleos do CPU ==="
nproc

echo ""
echo "=== Memória RAM ==="
free -h | grep Mem

echo ""
echo "=== Tempo ligado ==="
uptime -p`,expected:`=== Distribuição ===
PRETTY_NAME="Debian GNU/Linux 12 (bookworm)"

=== Kernel ===
6.1.0-21-amd64

=== Arquitetura ===
x86_64

=== Núcleos do CPU ===
4

=== Memória RAM ===
Mem:    7.6Gi    1.2Gi    5.1Gi    85Mi    1.4Gi    6.1Gi

=== Tempo ligado ===
up 3 hours, 15 minutes`,verify:"Se algum comando der 'command not found', instale com: sudo apt install procps coreutils. O 'lsb_release' precisa de: sudo apt install lsb-release."}],exercises:[{id:1,question:"Qual é a diferença entre Linux e GNU/Linux?",answer:"Linux é apenas o kernel (o núcleo que conversa com o hardware). GNU/Linux é o sistema completo: kernel Linux + ferramentas GNU (bash, ls, gcc, glibc) + gerenciador de pacotes + interface gráfica. Quando você usa 'cat arquivo.txt', está usando uma ferramenta GNU rodando sobre o kernel Linux."},{id:2,question:"Quais são as 4 liberdades do software livre?",hint:"Elas são numeradas de 0 a 3.",answer:"0) Liberdade de USAR o programa para qualquer propósito. 1) Liberdade de ESTUDAR e adaptar o programa (requer código-fonte). 2) Liberdade de REDISTRIBUIR cópias. 3) Liberdade de MELHORAR o programa e distribuir as melhorias."},{id:3,question:"Qual comando mostra a versão do seu kernel Linux?",answer:"uname -r (mostra apenas a versão, ex: 6.1.0-21-amd64). uname -a mostra tudo."},{id:4,question:"Onde está armazenado o nome da sua distribuição Linux?",hint:"É um arquivo de texto em /etc.",answer:"/etc/os-release é o arquivo padronizado (funciona em todas as distros modernas). Use 'cat /etc/os-release' para ler. Versões mais antigas tinham /etc/debian_version, /etc/lsb-release ou /etc/issue."},{id:5,question:"Por que dizemos que o Debian é uma 'distribuição-mãe'?",answer:"Porque dezenas de outras distribuições são baseadas no Debian (e usam apt, sources.list, dpkg da mesma forma): Ubuntu, Linux Mint, Pop!_OS, Kali Linux, Raspberry Pi OS, MX Linux, Proxmox VE, Tails, entre outras. Aprender Debian = saber o básico de todas essas."},{id:6,question:"O que significa GPL?",answer:"GNU General Public License — a licença criada pela Free Software Foundation que garante as 4 liberdades. Tem o conceito de 'copyleft': se você modifica e distribui um código GPL, deve manter a mesma licença (não pode 'fechar' o código). O kernel Linux usa GPLv2."}],references:[{title:"Site oficial do Projeto GNU",url:"https://www.gnu.org/"},{title:"Site oficial do kernel Linux",url:"https://www.kernel.org/"},{title:"Lista de distribuições baseadas em Debian",url:"https://www.debian.org/derivatives/"},{title:"As 4 liberdades do software livre",url:"https://www.gnu.org/philosophy/free-sw.pt-br.html"}]},{id:"projeto-debian",title:"O Projeto Debian",icon:"🌀",category:"Fundamentos Teóricos",description:"Por que o Debian existe há mais de 30 anos, como ele é organizado, e o que são branches stable, testing e unstable.",objectives:["Conhecer a história e filosofia do Debian","Entender o Contrato Social e as DFSG","Diferenciar as branches stable, testing e unstable","Saber identificar os codinomes (Toy Story) e o ciclo de releases"],content:["O Debian foi fundado em 16 de agosto de 1993 por Ian Murdock, então estudante de ciência da computação na Universidade Purdue (EUA). O nome 'Debian' é a junção de Debra (sua namorada na época, depois esposa) e Ian. Ian queria criar uma distribuição Linux que fosse mantida abertamente, no espírito do projeto GNU, sem dono comercial — diferente da Slackware, que era dominada por uma única pessoa.","Ian Murdock escreveu em 1994 o 'Manifesto Debian', explicando a filosofia: software 100% livre, mantido por uma comunidade global de voluntários, com decisões técnicas tomadas por meritocracia. Ian faleceu em 28 de dezembro de 2015, mas seu legado é o Debian — prova de que uma comunidade global pode criar software de nível empresarial sem CEO, sem investidores, sem ações.","O Debian é mantido pelo 'Debian Project', uma organização de mais de 1000 desenvolvedores espalhados pelo mundo. Ela tem dois documentos fundamentais: o Contrato Social (Debian Social Contract) e as Debian Free Software Guidelines (DFSG). Esses textos definem quais softwares podem entrar no repositório oficial e quais ficam fora (em 'non-free' ou 'contrib').","O Contrato Social tem 5 promessas: (1) Debian permanecerá 100% livre, (2) Vamos retribuir à comunidade software livre, (3) Não vamos esconder problemas — o Bug Tracker é público, (4) Nossas prioridades são nossos usuários e o software livre, (5) Trabalhos que não atendem nossos padrões de software livre vão para non-free, mas não fazem parte do sistema. Isso explica por que firmware proprietário e drivers NVIDIA ficam separados.",`O Debian tem 3 branches paralelas que são na verdade 3 estados de maturidade dos pacotes:
• stable (atual: bookworm/Debian 12) — testado exaustivamente, atualizações só de segurança. Para servidores e usuários conservadores.
• testing (atual: trixie/Debian 13 em desenvolvimento) — pacotes que entram no próximo stable. Mais novos, geralmente estáveis. Para usuários intermediários.
• unstable (sempre chamada de 'sid') — onde tudo entra primeiro. Quebra com mais frequência. Para desenvolvedores e curiosos.
E existe ainda 'experimental' para coisas verdadeiramente quebradas que estão sendo testadas.`,"Os codinomes do Debian seguem personagens do filme Toy Story (escolhido por Bruce Perens, que trabalhou na Pixar): Buzz (1.1, 1996), Rex (1.2), Bo (1.3), Hamm (2.0), Slink (2.1), Potato (2.2), Woody (3.0), Sarge (3.1), Etch (4.0), Lenny (5.0), Squeeze (6.0), Wheezy (7), Jessie (8), Stretch (9), Buster (10), Bullseye (11), Bookworm (12), Trixie (13 — em desenvolvimento), Forky (14 — futuro). Sid, a branch unstable, é o nome do menino vizinho do Andy que destrói brinquedos — referência apropriada.","O ciclo de releases do Debian é tradicionalmente 'quando estiver pronto', mas atualmente é mais ou menos a cada 2 anos. Cada release stable recebe atualizações de segurança por 3 anos como 'oldstable', e depois mais 2 anos pelo time de LTS (Long Term Support), totalizando ~5 anos de suporte. O bookworm (Debian 12), lançado em junho de 2023, terá suporte até 2028.","O Debian é a base de muitas distribuições famosas: Ubuntu (Canonical, foco em desktop), Linux Mint (foco em ex-usuários do Windows), Kali Linux (segurança ofensiva), Raspberry Pi OS (oficial do Raspberry Pi), Proxmox VE (virtualização), Tails (anonimato), Devuan (sem systemd), MX Linux. Quando você aprende Debian, ganha conhecimento aplicável a todas elas."],commands:[{command:"cat /etc/debian_version",description:"Mostra a versão exata do Debian (mais detalhada que /etc/os-release). Para a branch testing, mostra o codinome em vez do número.",example:"cat /etc/debian_version",output:"12.5"},{command:"lsb_release -c",description:"Mostra apenas o codinome da release. Útil em scripts (configurar sources.list, por exemplo).",example:"lsb_release -c",output:"Codename:       bookworm"},{command:"dpkg --print-architecture",description:"Mostra a arquitetura nativa do sistema (amd64, arm64, i386, armhf, riscv64).",example:"dpkg --print-architecture",output:"amd64"},{command:"apt-cache policy",description:"Mostra de qual repositório/branch um pacote está sendo instalado. Essencial para entender de onde vêm seus pacotes.",example:"apt-cache policy bash",output:`bash:
  Instalado: 5.2.15-2+b7
  Candidato: 5.2.15-2+b7
  Tabela de versão:
 *** 5.2.15-2+b7 500
        500 http://deb.debian.org/debian bookworm/main amd64 Packages`},{command:"cat /etc/apt/sources.list",description:"Mostra de quais repositórios o apt vai buscar pacotes. Cada linha 'deb http://...' é um repositório.",example:"cat /etc/apt/sources.list",output:`deb http://deb.debian.org/debian bookworm main contrib non-free non-free-firmware
deb http://security.debian.org/debian-security bookworm-security main contrib non-free non-free-firmware`},{command:"ls /etc/apt/sources.list.d/",description:"Lista repositórios extras configurados. Cada arquivo .list adiciona repositórios além do principal.",example:"ls /etc/apt/sources.list.d/",output:"google-chrome.list  vscode.list"},{command:"uptime",description:"Quanto tempo o sistema está ligado, quantos usuários conectados e load average. Servidores Debian costumam ter uptimes de meses.",example:"uptime",output:"14:32:11 up 47 days, 3:18, 2 users, load average: 0.05, 0.12, 0.09"}],tips:[{type:"info",title:"Como saber qual branch usar?",content:"Para servidores em produção: stable, sem dúvida. Para desktop pessoal: stable se quer estabilidade, testing se quer pacotes mais novos (com risco). Para desenvolvimento bleeding-edge: sid. NUNCA misture branches no mesmo sistema sem entender 'apt pinning' — você pode quebrar o sistema."},{type:"warning",title:"Bookworm tem firmware non-free incluso por padrão",content:"A partir do Debian 12 (bookworm), o instalador oficial inclui firmware non-free (para Wi-Fi, placas de vídeo, áudio) por padrão. Isso é uma mudança grande — antes, você precisava baixar uma ISO especial 'firmware non-free'. Esta foi uma decisão pragmática para reduzir frustração de usuários novos."},{type:"success",title:"O Debian Bug Tracking System é público",content:"Todo bug do Debian fica em https://bugs.debian.org/ — qualquer pessoa pode ver, comentar, e até reportar. É uma das coisas mais transparentes do mundo do software. Reportar bug usa o comando 'reportbug' (instale com: sudo apt install reportbug)."}],practiceLabs:[{title:"Identifique sua versão e codinome do Debian",goal:"Saber exatamente qual versão do Debian você roda. Isso é essencial para seguir tutoriais (muitos tutoriais são específicos de bookworm vs bullseye).",steps:["Abra o terminal.","Rode os comandos abaixo um por um.","Compare com a tabela de codinomes: bullseye=11, bookworm=12, trixie=13."],command:`echo "=== Versao numerica ==="
cat /etc/debian_version

echo ""
echo "=== Codinome ==="
lsb_release -c 2>/dev/null || cat /etc/os-release | grep CODENAME

echo ""
echo "=== Release info completo ==="
cat /etc/os-release`,verify:"Se a versão numérica começa com '12', você está em bookworm (estável atual). Se começa com '11', está em bullseye (oldstable). Se mostra 'trixie/sid' em vez de número, está em testing/unstable."}],exercises:[{id:1,question:"Quem fundou o Projeto Debian e quando?",answer:"Ian Murdock, em 16 de agosto de 1993, quando ainda era estudante na Universidade Purdue. O nome Debian = Debra (esposa) + Ian."},{id:2,question:"Quais são as 3 branches do Debian e para que servem?",answer:"stable (testada, para produção), testing (próximo stable, para usuários intermediários), unstable (chamada 'sid', tudo entra aqui primeiro, para desenvolvedores)."},{id:3,question:"Qual é o codinome da versão estável atual (Debian 12)?",hint:"Nome de personagem do Toy Story.",answer:"Bookworm."},{id:4,question:"Por que o Debian é considerado uma 'distro-mãe'?",answer:"Porque é base de muitas outras distros: Ubuntu, Mint, Kali, Raspberry Pi OS, Proxmox, MX Linux, Tails, etc. Aprender Debian = saber o básico de todas essas."},{id:5,question:"O que são as DFSG?",answer:"Debian Free Software Guidelines — diretrizes que definem o que é considerado software livre o suficiente para entrar no repositório 'main' do Debian. São a base da definição de software livre da OSI."},{id:6,question:"Por quanto tempo uma release stable do Debian recebe atualizações de segurança?",answer:"~3 anos como stable + ~2 anos como oldstable suportada pelo time de LTS = ~5 anos de suporte total. Bookworm (lançado 2023) terá suporte até ~2028."}],references:[{title:"Site oficial do Debian",url:"https://www.debian.org/"},{title:"Contrato Social do Debian",url:"https://www.debian.org/social_contract.pt.html"},{title:"DFSG — Debian Free Software Guidelines",url:"https://www.debian.org/social_contract#guidelines"},{title:"Lista de releases do Debian",url:"https://www.debian.org/releases/"},{title:"Bug Tracking System do Debian",url:"https://bugs.debian.org/"}]},{id:"repositorios-debian",title:"Repositórios Debian — main, contrib, non-free",icon:"📦",category:"Fundamentos Teóricos",description:"Como o apt sabe de onde baixar pacotes, e o que são main, contrib, non-free, non-free-firmware e backports.",objectives:["Entender a estrutura de sources.list","Diferenciar main, contrib, non-free e non-free-firmware","Configurar repositório de backports para pacotes mais novos","Adicionar repositórios de terceiros com segurança (chaves GPG)"],content:["Repositórios são servidores na internet onde ficam os pacotes (.deb) que o apt baixa quando você instala algo. Cada repositório tem um endereço (URL), uma versão do Debian (codinome) e uma ou mais 'componentes' (main, contrib, non-free).",`O arquivo principal de configuração é /etc/apt/sources.list. Cada linha não-comentada é uma fonte (source). O formato é:

deb [opções] URL CODINOME COMPONENTES

Exemplo típico:
deb http://deb.debian.org/debian bookworm main contrib non-free non-free-firmware

Essa linha diz: 'use o repositório em deb.debian.org/debian, da versão bookworm, e habilite os componentes main, contrib, non-free e non-free-firmware'.`,`Componentes disponíveis no Debian:
• main — software 100% livre, conforme DFSG. É o 'verdadeiro Debian'. Tudo aqui passou pela revisão da comunidade.
• contrib — software livre, MAS depende de algo non-free para funcionar (ex: jogos livres que precisam de ROMs proprietárias).
• non-free — software não-livre (drivers proprietários, fontes Microsoft, codecs com patentes). Muitos usuários precisam.
• non-free-firmware — firmware não-livre (Wi-Fi Intel, BIOS de placa de vídeo). Separado de non-free desde Debian 12.`,`Repositórios de segurança são CRÍTICOS — quando aparece uma vulnerabilidade num pacote, o time de segurança do Debian publica a correção aqui. Toda instalação deve ter:

deb http://security.debian.org/debian-security bookworm-security main

O 'apt update' busca atualizações desses repositórios também. Atualizações de segurança são geralmente lançadas em horas após uma CVE ser divulgada.`,`Backports é um repositório especial que oferece versões mais novas de software para a versão stable. Por exemplo: o bookworm tem o kernel 6.1, mas via backports você pode instalar o 6.7. Útil quando você precisa de uma feature nova (ex: suporte a hardware recente). A linha é:

deb http://deb.debian.org/debian bookworm-backports main

E para instalar de lá: sudo apt install -t bookworm-backports nome-pacote`,"Repositórios de terceiros (Google, Microsoft, Spotify, Brave) NÃO devem ser adicionados em sources.list. Use sempre /etc/apt/sources.list.d/ (um arquivo .list por repositório) para isolar e poder remover facilmente. E SEMPRE adicione a chave GPG do repositório em /usr/share/keyrings/ — sem isso, o apt vai dar erro de assinatura inválida (proteção essencial contra ataques).","Hierarquia de prioridade: o apt obedece o sources.list de cima para baixo. Se a mesma versão de um pacote existe em dois lugares, ele pega do primeiro. Para casos complexos (rodar testing junto com stable, por exemplo), existe o 'apt pinning' em /etc/apt/preferences.d/ — não vamos cobrir aqui, mas saiba que existe.","Quando você roda 'sudo apt update', o apt baixa os arquivos 'Release' e 'Packages' de cada repositório. O Release é assinado com GPG — se a assinatura não bate com as chaves em /etc/apt/trusted.gpg.d/ ou /usr/share/keyrings/, dá erro. Por isso adicionar repositório sem chave é problema. O 'Packages' é a lista de tudo que está disponível."],commands:[{command:"cat /etc/apt/sources.list",description:"Mostra os repositórios principais configurados.",example:"cat /etc/apt/sources.list",output:`deb http://deb.debian.org/debian bookworm main contrib non-free non-free-firmware
deb-src http://deb.debian.org/debian bookworm main contrib non-free non-free-firmware

deb http://security.debian.org/debian-security bookworm-security main contrib non-free non-free-firmware

deb http://deb.debian.org/debian bookworm-updates main contrib non-free non-free-firmware`},{command:"ls /etc/apt/sources.list.d/",description:"Lista repositórios extras (de terceiros, normalmente).",example:"ls -la /etc/apt/sources.list.d/"},{command:"apt update",description:"Atualiza a lista de pacotes disponíveis. SEMPRE rode antes de instalar algo novo.",example:"sudo apt update",output:`Get:1 http://security.debian.org bookworm-security InRelease [48.0 kB]
Get:2 http://deb.debian.org/debian bookworm InRelease [151 kB]
...
Reading package lists... Done`},{command:"apt-cache policy",description:"Mostra de qual repositório vem um pacote, com prioridades.",example:"apt-cache policy firefox-esr",output:`firefox-esr:
  Instalado: 115.10.0esr-1~deb12u1
  Candidato: 115.10.0esr-1~deb12u1
  Tabela de versão:
 *** 115.10.0esr-1~deb12u1 500
        500 http://security.debian.org/debian-security bookworm-security/main amd64 Packages`},{command:"apt list --installed",description:"Lista todos os pacotes instalados no sistema.",example:"apt list --installed | wc -l",output:"2147"},{command:"apt-cache search",description:"Busca pacotes pelo nome ou descrição.",example:"apt-cache search 'audio editor'",output:`audacity - fast, cross-platform audio editor
ardour - the digital audio workstation`},{command:"apt-cache show",description:"Mostra detalhes de um pacote: descrição, dependências, mantenedor, tamanho.",example:"apt-cache show vim | head -20"},{command:"apt-key list",description:"Lista as chaves GPG dos repositórios (forma antiga). Em sistemas modernos prefira /etc/apt/trusted.gpg.d/ ou /usr/share/keyrings/.",example:"apt-key list"}],tips:[{type:"info",title:"deb vs deb-src",content:"'deb' = pacotes binários (.deb pré-compilados). 'deb-src' = código-fonte. Você só precisa de deb-src se for compilar pacotes do zero (raro). Pode comentar essas linhas para acelerar 'apt update'."},{type:"warning",title:"NUNCA edite sources.list direto sem entender",content:"Misturar repositórios incompatíveis (ex: stable + sid) sem 'apt pinning' adequado pode quebrar o sistema permanentemente. Sintomas: pacotes parciais instalados, dependências não resolvidas, sistema não dá boot. Se quiser experimentar, faça em VM primeiro."},{type:"danger",title:"Repositórios de terceiros são vetor de ataque",content:"Quando você adiciona um repositório de terceiros (Google, Microsoft, etc.), está dando a essa entidade poder de instalar QUALQUER coisa no seu sistema com privilégios de root. Adicione apenas de fontes que você confia. SEMPRE verifique a chave GPG do repositório."}],practiceLabs:[{title:"Habilitar backports e instalar um pacote mais novo",goal:"Aprender a usar backports para conseguir um pacote mais recente sem migrar o sistema todo para testing.",steps:["Veja sua versão atual do kernel: uname -r","Adicione o repositório backports criando um arquivo dedicado (não edite sources.list).","Atualize a lista de pacotes.","Procure a versão disponível do kernel em backports.","Instale (opcional — substituir kernel é arriscado, faça em VM)."],command:`# 1) Ver kernel atual
uname -r

# 2) Adicionar backports (substitua bookworm pelo seu codinome se necessario)
echo "deb http://deb.debian.org/debian bookworm-backports main contrib non-free non-free-firmware" \\
  | sudo tee /etc/apt/sources.list.d/backports.list

# 3) Atualizar
sudo apt update

# 4) Ver versoes disponiveis do kernel
apt-cache policy linux-image-amd64

# 5) (Opcional - so em VM) instalar kernel novo dos backports
# sudo apt install -t bookworm-backports linux-image-amd64`,verify:"Após o 'apt update', você deve ver linhas como 'Get:X http://deb.debian.org/debian bookworm-backports'. O 'apt-cache policy' deve mostrar duas versões disponíveis."},{title:"Adicionar o repositório do Brave Browser corretamente",goal:"Aprender o procedimento seguro para adicionar repositório de terceiro: chave GPG dedicada + arquivo .list isolado.",steps:["Baixe e salve a chave GPG do Brave em /usr/share/keyrings/","Crie um arquivo .list referenciando a chave","Atualize com apt update","Instale o Brave"],command:`# 1) Baixar a chave GPG do Brave
sudo curl -fsSLo /usr/share/keyrings/brave-browser-archive-keyring.gpg \\
  https://brave-browser-apt-release.s3.brave.com/brave-browser-archive-keyring.gpg

# 2) Adicionar o repositorio referenciando a chave
echo "deb [signed-by=/usr/share/keyrings/brave-browser-archive-keyring.gpg arch=amd64] https://brave-browser-apt-release.s3.brave.com/ stable main" \\
  | sudo tee /etc/apt/sources.list.d/brave-browser-release.list

# 3) Atualizar
sudo apt update

# 4) Instalar
sudo apt install -y brave-browser`,verify:"Se 'apt update' não dá erro 'NO_PUBKEY' nem 'signature invalid', o setup está correto. O Brave deve aparecer no menu de aplicativos depois de instalado."}],exercises:[{id:1,question:"Qual a diferença entre os componentes main, contrib e non-free?",answer:"main = 100% software livre (DFSG). contrib = software livre que DEPENDE de algo non-free para funcionar. non-free = software com restrições de uso/distribuição (drivers proprietários, codecs)."},{id:2,question:"Qual arquivo principal lista os repositórios do apt?",answer:"/etc/apt/sources.list — repositórios principais. Repositórios extras vão em /etc/apt/sources.list.d/*.list"},{id:3,question:"O que é o repositório 'security' e por que é essencial?",answer:"security.debian.org publica correções de segurança (CVEs) para a versão stable em horas/dias. Sem ele, seu sistema fica vulnerável quando aparecem falhas. Sempre habilitado por padrão em instalações novas."},{id:4,question:"Para que servem os 'backports'?",answer:"Para instalar versões mais novas de software (kernel, libreoffice, etc.) na sua versão stable, sem precisar migrar para testing. Os pacotes vêm de testing, recompilados para stable."},{id:5,question:"Qual o jeito CERTO de adicionar um repositório de terceiro?",answer:"1) Baixar a chave GPG do projeto e salvar em /usr/share/keyrings/. 2) Criar um arquivo dedicado em /etc/apt/sources.list.d/ com a opção [signed-by=/usr/share/keyrings/CHAVE.gpg]. 3) Rodar apt update. NUNCA edite sources.list direto e nunca pule a chave."},{id:6,question:"Como saber de qual repositório veio um pacote já instalado?",answer:"apt-cache policy NOME_PACOTE — mostra a versão instalada e de qual repositório veio."}],references:[{title:"Wiki Debian — SourcesList",url:"https://wiki.debian.org/SourcesList"},{title:"Debian Backports oficial",url:"https://backports.debian.org/"},{title:"Lista de mirrors oficiais",url:"https://www.debian.org/mirror/list"}]}],ek=[{id:"instalacao",title:"Instalando o Debian",icon:"💿",category:"Instalação e Ambiente",description:"Como baixar a ISO, gravar pendrive bootável, particionar disco e instalar o Debian 12 (bookworm) corretamente.",objectives:["Escolher a ISO certa entre net-install, full-DVD e live","Gravar um pendrive bootável de forma segura","Entender particionamento (MBR vs GPT, swap, /home separado)","Realizar pós-instalação básica (sudo, atualizações, locale)"],content:[`O Debian oferece vários tipos de ISO para download. A confusão para iniciantes começa aqui. As principais:
• netinst (≈400 MB) — instalador mínimo, baixa o resto da internet durante a instalação. Recomendado quando você tem boa conexão.
• DVD-1 (≈4 GB) — instalador + pacotes principais offline. Útil sem internet.
• Live (≈3 GB) — sistema rodando do pendrive, com opção de instalar. Tem GNOME, KDE, XFCE, MATE, Cinnamon e LXDE.
• Imagens 'firmware non-free' (até Debian 11) — incluíam firmware proprietário. A partir do Debian 12, isso virou padrão na ISO oficial.`,"Onde baixar: https://www.debian.org/distrib/ — sempre do site oficial. NUNCA baixe ISO de Debian de sites de terceiros, mesmo que pareçam confiáveis. Após baixar, verifique o checksum SHA256 — todo download oficial vem com um arquivo SHA256SUMS e SHA256SUMS.sign para você validar que ninguém adulterou a ISO no caminho.","Para gravar a ISO num pendrive, no Linux use o comando 'dd' (poderoso e perigoso — pode apagar o HD se errar o /dev/sdX) ou ferramentas gráficas como GNOME Disks, balenaEtcher ou Ventoy. No Windows, use Rufus (selecione 'modo DD' para Debian). Para iniciantes, recomendo Ventoy: você formata o pendrive uma vez e depois é só copiar ISOs nele — vira pendrive multi-boot.",`Antes de instalar, decida o esquema de particionamento. As opções típicas:
• Particionamento guiado, disco inteiro — o instalador faz tudo. Bom para iniciantes.
• Guiado, com /home separado — recomendado para desktop. Se reinstalar o sistema depois, /home (seus arquivos pessoais) fica intocado.
• Manual — você define cada partição. Necessário para LVM, criptografia full-disk, dual boot complexo.

Layout mínimo recomendado para desktop:
• /boot/efi  — 512 MB (FAT32) — só se usa UEFI
• /          — 30-50 GB (ext4) — sistema
• /home      — restante (ext4) — seus arquivos
• swap       — 2× a RAM se RAM ≤ 8 GB; 1× a RAM se > 8 GB; ou nada se você não vai hibernar`,"Sobre swap em 2026: máquinas modernas com SSD e bastante RAM (16 GB+) muitas vezes prescindem de swap. Mas mesmo com 16 GB, 4-8 GB de swap evita que o sistema travasse se algum processo vazar memória. Alternativa moderna: zram (cria swap comprimido na RAM, acelera tudo). Para hibernar (sleep-to-disk), você precisa de swap ≥ tamanho da RAM.",`Durante a instalação, o instalador pergunta:
1) Idioma, país e teclado
2) Hostname (nome da máquina, ex: 'meu-notebook')
3) Domínio (deixe em branco se não estiver em rede corporativa)
4) Senha do root (PODE deixar em branco — se deixar, o sudo é configurado para o usuário comum, igual no Ubuntu)
5) Criar usuário comum (use o seu nome, não 'admin' ou 'user')
6) Particionamento
7) Fuso horário
8) Pacotes adicionais (use 'tasksel' para escolher: ambiente gráfico, servidor SSH, utilitários)
9) Instalar GRUB no MBR (sim, na grande maioria dos casos)`,"Pós-instalação imediata, na primeira vez que entra: (a) atualizar sistema com 'sudo apt update && sudo apt full-upgrade', (b) configurar timezone correto se não estiver, (c) habilitar firewall com 'sudo apt install ufw && sudo ufw enable', (d) se for desktop, adicionar Flatpak para apps gráficos modernos. Se deu erro 'sudo: command not found', o root não está usando sudo — entre como root com 'su -' e instale: 'apt install sudo && usermod -aG sudo SEU_USUARIO'.",`Erros comuns na primeira instalação:
• Boot não encontra o pendrive: desabilite 'Secure Boot' temporariamente na BIOS, ou use uma ISO com suporte (recente).
• 'No bootable device' depois de instalar: GRUB foi instalado na partição errada, ou Windows ainda está como primeiro no boot. Use boot-repair via live USB.
• Wi-Fi não funciona: provavelmente firmware non-free necessário. A ISO bookworm já inclui — se não, baixe a ISO 'firmware' separada.
• Tela preta após boot: provavelmente conflito com driver de vídeo. Boot em recovery, instale driver correto (nvidia-driver para NVIDIA, firmware-amd-graphics para AMD).`],commands:[{command:"sha256sum",description:"Calcula o SHA256 de um arquivo. Use para verificar que a ISO baixada não foi adulterada.",example:"sha256sum debian-12.5.0-amd64-netinst.iso",output:"0fbb3da0a39c2f8b7f0c5d8a2c3e4f5g6h7i8j9k0l1m2n3o4p5q6r7s8t9u0v1w2  debian-12.5.0-amd64-netinst.iso"},{command:"lsblk",description:"Lista todos os dispositivos de bloco (HDs, SSDs, pendrives, partições). USE para identificar o /dev/sdX correto antes de gravar com dd!",example:"lsblk",output:`NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
sda      8:0    0 465.8G  0 disk
├─sda1   8:1    0   512M  0 part /boot/efi
├─sda2   8:2    0   460G  0 part /
└─sda3   8:3    0   5.3G  0 part [SWAP]
sdb      8:16   1  29.8G  0 disk
└─sdb1   8:17   1  29.8G  0 part`},{command:"dd",description:"Copia bytes de um lugar para outro. Use COM CUIDADO para gravar ISO em pendrive — errar o /dev/sdX apaga o HD.",example:"sudo dd if=debian-12.5.0-amd64-netinst.iso of=/dev/sdb bs=4M status=progress oflag=sync",flags:[{flag:"if=",description:"input file (a ISO)"},{flag:"of=",description:"output file (o pendrive — /dev/sdb, NÃO /dev/sdb1!)"},{flag:"bs=4M",description:"block size — 4 MB acelera a gravação"},{flag:"status=progress",description:"mostra o progresso (essencial para acompanhar)"},{flag:"oflag=sync",description:"garante que tudo foi escrito antes de retornar"}]},{command:"fdisk",description:"Lista e particiona discos. Use 'sudo fdisk -l' para ver toda a estrutura de discos sem modificar nada.",example:"sudo fdisk -l"},{command:"df",description:"Mostra uso de espaço em disco por partição montada.",example:"df -h",flags:[{flag:"-h",description:"Tamanhos legíveis (KB, MB, GB)"},{flag:"-T",description:"Mostrar tipo de filesystem"},{flag:"-i",description:"Mostrar uso de inodes (não bytes)"}],output:`Filesystem      Size  Used Avail Use% Mounted on
/dev/sda2       458G   30G  408G   7% /
/dev/sda1       511M  6.2M  505M   2% /boot/efi
tmpfs           3.8G     0  3.8G   0% /dev/shm`},{command:"tasksel",description:"Reabre o seletor de tarefas da instalação para instalar 'pacotes' (ambiente gráfico, servidor web, etc.).",example:"sudo tasksel"}],tips:[{type:"warning",title:"ATENÇÃO ao usar dd",content:"Se você confundir /dev/sdb (pendrive) com /dev/sda (HD), o comando dd VAI APAGAR seu HD inteiro. Sempre rode 'lsblk' antes para ter certeza qual é o pendrive (geralmente é o último a aparecer, com tamanho menor). Em caso de dúvida, use uma ferramenta gráfica."},{type:"info",title:"Por que /home separado?",content:"Se você reinstalar o Debian no futuro (ou trocar para outra distro), seus arquivos, configurações de aplicativos, downloads, etc. ficam intactos em /home. Basta NÃO formatar /home na nova instalação. Tem que valer a pena: você precisa adivinhar o tamanho certo de cada partição na primeira vez."},{type:"success",title:"Use Ventoy para múltiplas ISOs",content:"Em vez de regravar o pendrive a cada distro nova, instale o Ventoy (https://www.ventoy.net/) uma única vez. Depois é só copiar arquivos .iso para o pendrive — no boot, ele mostra um menu para escolher qual rodar. Essencial para quem testa muitas distros."}],practiceLabs:[{title:"Verificar integridade de uma ISO baixada",goal:"Garantir que a ISO que você baixou é exatamente a oficial do Debian — sem adulteração no caminho.",steps:["Baixe a ISO desejada de https://www.debian.org/CD/http-ftp/","No mesmo diretório, baixe os arquivos SHA256SUMS e SHA256SUMS.sign","Calcule o SHA256 da sua ISO local","Compare com o que está no SHA256SUMS"],command:`# 1) Verificar SHA256 da ISO local
cd ~/Downloads
sha256sum debian-12.5.0-amd64-netinst.iso

# 2) Comparar com o oficial
grep "debian-12.5.0-amd64-netinst.iso" SHA256SUMS

# 3) Os dois hashes devem ser IDENTICOS
# Se forem diferentes: NAO USE essa ISO. Baixe novamente.

# 4) Verificar autenticidade do proprio SHA256SUMS (avancado)
gpg --verify SHA256SUMS.sign SHA256SUMS`,verify:"Os dois SHA256 (calculado e oficial) devem bater caractere por caractere. Diferença = ISO corrompida ou adulterada."},{title:"Gravar pendrive bootável com dd (procedimento seguro)",goal:"Criar um pendrive bootável do Debian sem apagar o HD por engano.",steps:["Antes de plugar o pendrive, rode 'lsblk' e anote os dispositivos atuais.","Plugue o pendrive e rode 'lsblk' de novo. O dispositivo NOVO é o pendrive.","CONFIRA o tamanho — se não bate com o do pendrive, parou tudo.","Se houver partições montadas no pendrive, desmonte com 'sudo umount /dev/sdb1'.","Rode o dd com o /dev/sdX correto (sem número de partição).","Aguarde o sync terminar (vários minutos para ISO grande)."],command:`# 1) Antes de plugar pendrive
lsblk

# 2) Plugar pendrive e rodar de novo
lsblk
# Identifique o NOVO dispositivo (ex: /dev/sdb)

# 3) Conferir que e mesmo o pendrive (tamanho correto)
sudo fdisk -l /dev/sdb | head -3

# 4) Desmontar particoes do pendrive (se houver)
sudo umount /dev/sdb*

# 5) Gravar (CUIDADO com o /dev/sdX!)
sudo dd if=~/Downloads/debian-12.5.0-amd64-netinst.iso of=/dev/sdb bs=4M status=progress oflag=sync

# 6) Sincronizar e ejetar
sync
sudo eject /dev/sdb`,verify:"Após o dd, plugue o pendrive em outra máquina e tente dar boot. Deve aparecer o instalador do Debian. Se aparecer 'Operating System not found', o boot não está em UEFI/Legacy correto na BIOS."}],exercises:[{id:1,question:"Qual a diferença entre netinst, DVD-1 e Live?",answer:"netinst (~400 MB) baixa pacotes da internet durante instalação. DVD-1 (~4 GB) tem pacotes principais offline. Live (~3 GB) é o sistema rodando do pendrive, com opção de instalar."},{id:2,question:"Como verificar se a ISO baixada não foi adulterada?",answer:"Calcule o SHA256 da ISO com 'sha256sum arquivo.iso' e compare com o hash do arquivo SHA256SUMS oficial baixado do site do Debian. Devem ser idênticos."},{id:3,question:"Por que separar /home em uma partição diferente?",answer:"Para preservar arquivos pessoais e configurações ao reinstalar o sistema. Basta não formatar /home na nova instalação."},{id:4,question:"Quanto de swap usar em 2026 com 16 GB de RAM?",answer:"Para uso normal: 4-8 GB de swap (segurança contra OOM). Para hibernar: swap >= RAM (16 GB ou mais). Sem hibernação e com 32 GB+ de RAM: swap pode ser pequeno (2 GB) ou usar zram."},{id:5,question:"Por que NUNCA usar /dev/sdb1 no comando dd para gravar pendrive?",answer:"/dev/sdb1 é a primeira partição do pendrive. Você precisa gravar no DISCO INTEIRO (/dev/sdb), porque a ISO contém também um bootloader que vai no setor de boot do disco — não em uma partição."},{id:6,question:"O que fazer se Wi-Fi não funcionar após instalar Debian?",answer:"Geralmente é firmware non-free necessário. No Debian 12+ a ISO oficial já inclui. Se ainda não funciona: 1) Conecte cabo Ethernet ou tether do celular. 2) sudo apt install firmware-iwlwifi (Intel) ou firmware-realtek (Realtek) ou firmware-atheros etc. 3) Reinicie."}],references:[{title:"Página oficial de download",url:"https://www.debian.org/distrib/"},{title:"Manual de instalação",url:"https://www.debian.org/releases/stable/installmanual"},{title:"Ventoy (multi-boot USB)",url:"https://www.ventoy.net/"},{title:"Lista de firmware non-free",url:"https://wiki.debian.org/Firmware"}]},{id:"pos-instalacao",title:"Pós-Instalação — Os Primeiros 30 Minutos",icon:"🎯",category:"Instalação e Ambiente",description:"O que fazer logo depois de instalar o Debian: sudo, atualizações, locale, firewall, drivers e ajustes essenciais.",objectives:["Configurar sudo se você deixou senha de root vazia","Atualizar o sistema completo na primeira vez","Ajustar timezone, locale pt_BR e teclado","Habilitar firewall UFW e tomar primeiras decisões de segurança"],content:["Instalou o Debian e está olhando para um desktop novinho. O que fazer agora? Esses primeiros 30 minutos definem se sua experiência vai ser tranquila ou cheia de problemas. Vamos por ordem de importância.","Primeiro: confira se o 'sudo' funciona. No Debian, se você definiu senha de root durante a instalação, o sudo PODE não estar configurado para seu usuário comum. Teste: 'sudo whoami'. Se aparecer 'root', está tudo certo. Se aparecer 'usuário X não está na sudoers', você precisa adicionar manualmente. Solução: entre como root com 'su -' (digite a senha de root) e rode 'usermod -aG sudo SEU_USUARIO'. Faça logout e login. Pronto.","Segundo: atualize tudo. Pode parecer redundante (acabou de instalar), mas a ISO foi gravada há semanas/meses, e nesse tempo saíram correções de segurança. Rode em sequência: 'sudo apt update' (atualiza a lista de pacotes), 'sudo apt full-upgrade' (instala atualizações de versão, incluindo kernel). Reinicie depois se atualizou o kernel.",`Terceiro: ajuste timezone, idioma e teclado se algum estiver errado. Comandos úteis:
• 'timedatectl' — mostra timezone atual.
• 'sudo timedatectl set-timezone America/Sao_Paulo' — define seu fuso.
• 'locale' — mostra locale (pt_BR.UTF-8 é o ideal para Brasil).
• 'sudo dpkg-reconfigure locales' — abre menu para escolher locales (marque pt_BR.UTF-8 e en_US.UTF-8, defina pt_BR.UTF-8 como padrão).
• 'sudo dpkg-reconfigure keyboard-configuration' — reconfigurar teclado (escolha Brazilian Portuguese ABNT2).`,`Quarto: instale o firewall. O Debian vem com firewall (iptables/nftables) mas SEM regras configuradas. UFW (Uncomplicated Firewall) é a interface amigável padrão:

sudo apt install ufw
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw enable

Desktop normalmente não precisa abrir portas. Servidor: depois abra só o que precisa (sudo ufw allow 22/tcp para SSH, por exemplo).`,`Quinto: instale pacotes de produtividade que TODO sistema deveria ter. Esses são os 'utilitários esquecidos' — não vêm por padrão mas são essenciais:

sudo apt install -y build-essential curl wget git vim htop tree neofetch \\
  unzip zip p7zip-full file-roller \\
  gnome-disk-utility gparted \\
  ttf-mscorefonts-installer fonts-noto-color-emoji`,`Sexto: configure o git se você é desenvolvedor. Sem isso, o git fica reclamando a cada commit:

git config --global user.name 'Seu Nome'
git config --global user.email 'voce@exemplo.com'
git config --global init.defaultBranch main
git config --global pull.rebase false

Sétimo: se quiser ambiente gráfico mais bonito, considere instalar Flatpak (apps gráficos modernos sandboxados):

sudo apt install -y flatpak
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
# Reinicie a sessão antes de usar`,`Oitavo (importante para hardware recente): drivers proprietários se necessário. Como saber? Rode 'lspci -k | grep -EA3 "VGA|3D"'. Se a placa de vídeo é NVIDIA e sem driver carregado, instale: 'sudo apt install nvidia-driver firmware-misc-nonfree' (precisa de non-free habilitado no sources.list). Para Wi-Fi Intel, geralmente já funciona; Realtek antigo: 'sudo apt install firmware-realtek'. Reinicie depois de instalar drivers.`],commands:[{command:"sudo apt update && sudo apt full-upgrade -y",description:"Atualiza a lista de pacotes e instala TODAS as atualizações disponíveis, incluindo kernel. O '-y' aceita prompts automaticamente. Faça isso semanalmente.",example:"sudo apt update && sudo apt full-upgrade -y"},{command:"timedatectl",description:"Mostra e configura data/hora/fuso horário do sistema.",example:"timedatectl",flags:[{flag:"set-timezone TZ",description:"Define fuso (ex: America/Sao_Paulo, America/Manaus, Europe/Lisbon)"},{flag:"list-timezones",description:"Lista todos os fusos disponíveis"},{flag:"set-time HH:MM:SS",description:"Define hora manualmente (raro - prefira NTP)"},{flag:"set-ntp true",description:"Habilita sincronização automática via internet"}],output:`               Local time: ven 2026-04-25 18:32:15 -03
           Universal time: ven 2026-04-25 21:32:15 UTC
                Time zone: America/Sao_Paulo (-03, -0300)
System clock synchronized: yes
              NTP service: active`},{command:"locale",description:"Mostra todas as variáveis de locale (idioma, formato de data, moeda, etc.).",example:"locale",output:`LANG=pt_BR.UTF-8
LANGUAGE=pt_BR
LC_CTYPE="pt_BR.UTF-8"
LC_NUMERIC="pt_BR.UTF-8"
LC_TIME="pt_BR.UTF-8"
LC_ALL=`},{command:"sudo dpkg-reconfigure",description:"Reabre o menu de configuração de qualquer pacote. Útil para refazer setup que deu errado na instalação.",example:"sudo dpkg-reconfigure locales",flags:[{flag:"locales",description:"Reconfigurar idiomas/locales"},{flag:"tzdata",description:"Reconfigurar fuso horário"},{flag:"keyboard-configuration",description:"Reconfigurar layout de teclado"},{flag:"console-setup",description:"Reconfigurar fonte do console (TTY)"}]},{command:"ufw",description:"Uncomplicated Firewall — interface amigável para o firewall do Linux. Para habilitar firewall em 3 comandos.",example:"sudo ufw status verbose",flags:[{flag:"enable",description:"Liga o firewall"},{flag:"disable",description:"Desliga o firewall"},{flag:"status",description:"Mostra estado e regras"},{flag:"default deny incoming",description:"Bloqueia tudo que vem de fora por padrão"},{flag:"default allow outgoing",description:"Libera tudo que sai por padrão"},{flag:"allow 22/tcp",description:"Libera porta 22 (SSH)"}]},{command:"sudo usermod -aG sudo USUARIO",description:"Adiciona USUARIO ao grupo 'sudo'. Faz logout/login depois para o grupo aplicar.",example:"sudo usermod -aG sudo wallyson"},{command:"lspci",description:"Lista dispositivos PCI (placa de vídeo, rede, áudio). Use para descobrir hardware do sistema.",example:"lspci -k | grep -EA3 'VGA|3D'",flags:[{flag:"-k",description:"Mostra qual driver/módulo cada dispositivo está usando"},{flag:"-v",description:"Verboso (muito mais detalhes)"}]}],tips:[{type:"warning",title:"NUNCA edite /etc/sudoers diretamente",content:"Use SEMPRE 'sudo visudo' (vai abrir o editor padrão e validar a sintaxe ao salvar). Se você editar /etc/sudoers manualmente e introduzir um erro de sintaxe, perde acesso ao sudo permanentemente — só recupera dando boot em modo recovery."},{type:"info",title:"Apt não pede confirmação? Use --simulate",content:"Antes de uma operação grande (full-upgrade, autoremove com muitos pacotes), faça 'apt --simulate full-upgrade' para ver o que SERIA feito sem fazer. Lê com calma. Se OK, roda sem o --simulate."},{type:"success",title:"Schedule um snapshot semanal (se em VM)",content:"Se você roda em VM (VirtualBox, VMware, Proxmox), tire um snapshot semanal antes do 'apt full-upgrade'. Se um upgrade quebrar algo, restaura o snapshot e está de volta em 30 segundos."}],practiceLabs:[{title:"Setup pós-instalação completo em um script",goal:"Executar todas as configurações iniciais de uma vez, em um script você pode reusar em cada nova instalação.",steps:["Salve o bloco de comandos em ~/setup-debian.sh","Dê permissão de execução: chmod +x ~/setup-debian.sh","Execute como root (sudo): sudo ~/setup-debian.sh","Reinicie ao final"],command:`#!/bin/bash
set -e
echo "=== 1) Atualizando sistema ==="
apt update
apt full-upgrade -y

echo "=== 2) Instalando essenciais ==="
apt install -y build-essential curl wget git vim htop tree neofetch \\
  unzip zip p7zip-full file-roller \\
  gnome-disk-utility gparted \\
  ufw flatpak \\
  ttf-mscorefonts-installer fonts-noto-color-emoji

echo "=== 3) Configurando UFW ==="
ufw default deny incoming
ufw default allow outgoing
ufw --force enable

echo "=== 4) Configurando timezone ==="
timedatectl set-timezone America/Sao_Paulo
timedatectl set-ntp true

echo "=== 5) Adicionando Flathub ==="
flatpak remote-add --if-not-exists flathub \\
  https://flathub.org/repo/flathub.flatpakrepo

echo "=== 6) Limpando ==="
apt autoremove -y
apt clean

echo ""
echo "=== Tudo pronto. Reinicie o sistema. ==="`,verify:"Depois de reiniciar: 'sudo ufw status' deve mostrar ativo, 'timedatectl' deve mostrar America/Sao_Paulo, e os pacotes principais devem estar instalados (teste 'htop', 'git --version', etc.)."}],exercises:[{id:1,question:"Você instalou o Debian e o sudo não funciona. O que fazer?",answer:"Entre como root com 'su -' (senha de root). Adicione seu usuário ao grupo sudo: 'usermod -aG sudo SEU_USUARIO'. Saia (exit) e faça logout/login do desktop para o grupo aplicar."},{id:2,question:"Qual o comando padrão para atualizar TUDO no Debian?",answer:"sudo apt update && sudo apt full-upgrade -y. O 'update' baixa lista de pacotes, 'full-upgrade' instala atualizações (inclusive de versão maior, e remove pacotes obsoletos quando necessário)."},{id:3,question:"Como definir o fuso horário para São Paulo?",answer:"sudo timedatectl set-timezone America/Sao_Paulo"},{id:4,question:"Qual a melhor configuração inicial do UFW para um desktop?",answer:"sudo ufw default deny incoming (bloqueia conexões externas) + sudo ufw default allow outgoing (permite suas saídas) + sudo ufw enable. Pronto. Não precisa abrir portas se for só desktop."},{id:5,question:"Como saber qual driver está sendo usado pela placa de vídeo?",answer:"lspci -k | grep -EA3 'VGA|3D' — a linha 'Kernel driver in use:' mostra o driver ativo (nouveau, nvidia, amdgpu, i915, etc.)."},{id:6,question:"Por que NUNCA editar /etc/sudoers diretamente?",answer:"Sintaxe errada quebra o sudo permanentemente. Use SEMPRE 'sudo visudo' que valida a sintaxe ao salvar e impede você de salvar arquivo quebrado."}],references:[{title:"Wiki Debian — PostInstall",url:"https://wiki.debian.org/PostInstall"},{title:"Manual UFW",url:"https://help.ubuntu.com/community/UFW"},{title:"Lista de Flatpaks no Flathub",url:"https://flathub.org/"}]},{id:"ambiente-grafico",title:"Ambientes Gráficos no Debian",icon:"🖥️",category:"Instalação e Ambiente",description:"GNOME, KDE, XFCE, MATE, LXDE, Cinnamon — qual escolher, como instalar/trocar e diferenças práticas.",objectives:["Conhecer os principais ambientes gráficos disponíveis","Decidir qual usar baseado no hardware e preferência","Trocar de ambiente gráfico sem reinstalar o sistema","Entender display server (X11 vs Wayland) e display manager"],content:["Diferente do Windows e macOS (que têm uma única interface), o Linux te dá liberdade absoluta de escolha do desktop. O Debian é neutro — durante a instalação você escolhe (ou não escolhe nenhum, para servidor). Os principais ambientes:",`• GNOME — moderno, polido, focado em produtividade. Padrão do Debian se você não escolher outro. Tem barra superior, atividades (Super para acessar), workspaces dinâmicos. Consome mais RAM (1.2-1.8 GB ocioso).
• KDE Plasma — cheio de recursos, customizável até demais. Visualmente parecido com Windows. Tem o melhor compositor (efeitos visuais). 800 MB - 1.5 GB ocioso.
• XFCE — leve, tradicional, estável. Ideal para máquinas com 4-8 GB de RAM. 400-700 MB ocioso. Padrão do Kali Linux.
• MATE — fork do GNOME 2 (interface clássica que muitos preferem). Familiar para quem usou Linux pre-2011.
• LXDE / LXQt — super leve, para máquinas antigas (1-4 GB de RAM). 200-400 MB ocioso.
• Cinnamon — moderno mas tradicional (taskbar, menu start). Padrão do Linux Mint. Bom equilíbrio.`,`Como escolher se você está em dúvida? Regras práticas:
• Notebook moderno (8-16 GB RAM, SSD): GNOME (se você gosta do Mac) ou KDE (se você gosta do Windows).
• Notebook intermediário (4-8 GB RAM): XFCE ou Cinnamon.
• Máquina antiga (1-4 GB RAM): LXDE ou LXQt.
• Servidor (sem monitor): nenhum. Acesse por SSH.`,`Para trocar de ambiente sem reinstalar o sistema: o Debian usa metapacotes 'task-*-desktop'. Lista:
• task-gnome-desktop — GNOME completo
• task-kde-desktop — KDE Plasma completo
• task-xfce-desktop — XFCE
• task-mate-desktop — MATE
• task-lxde-desktop — LXDE
• task-lxqt-desktop — LXQt
• task-cinnamon-desktop — Cinnamon

Instale com 'sudo apt install task-XXX-desktop' (substitua XXX pelo nome). Pode demorar 1-3 GB de download. NÃO remove o ambiente atual — fica os dois disponíveis. Reinicie e na tela de login escolha qual usar.`,`Display server é a camada de software que desenha as janelas na tela. No Linux, há duas opções:
• X11 (X.Org) — o tradicional, 30+ anos de existência. Funciona com TUDO mas tem limitações modernas (segurança fraca entre apps, sem HiDPI por monitor).
• Wayland — o substituto moderno. Mais seguro, suporta HiDPI por monitor, mas alguns apps antigos têm problemas.

No Debian 12, GNOME usa Wayland por padrão. KDE Plasma também (no Plasma 5.27+). Para ver o seu: 'echo \\$XDG_SESSION_TYPE'.`,`Display manager é a 'tela de login' (antes do desktop carregar). Cada ambiente prefere um:
• GDM3 — usado pelo GNOME
• SDDM — usado pelo KDE
• LightDM — usado por XFCE, MATE, Cinnamon
• LXDM — leve, usado por LXDE

Quando você instala um ambiente novo, o sistema pode te perguntar qual display manager usar. Para mudar depois: 'sudo dpkg-reconfigure lightdm' (substitua pelo seu).`,`Customizar o ambiente: cada um tem seu próprio sistema de temas, ícones, fontes, atalhos. Painéis universais úteis:
• gnome-tweaks (GNOME) — controle fino de tema, fontes, comportamento de janelas
• systemsettings (KDE) — central de configurações completa do KDE
• xfce4-settings-manager (XFCE) — painel de configurações XFCE

Temas: Arc-theme, Materia, Numix, Adwaita-dark são populares. Ícones: Papirus, Numix, Flat-Remix.`,"Servidor sem ambiente gráfico: se você instalou Debian para servidor (escolheu 'no graphical environment'), pode trabalhar 100% por SSH. É leve e seguro. Se DEPOIS quiser instalar interface (raro mas acontece): 'sudo apt install task-xfce-desktop' e reiniciar. Para REMOVER ambiente gráfico de servidor: 'sudo apt remove --purge task-*-desktop' + 'sudo systemctl set-default multi-user.target' + reiniciar."],commands:[{command:"echo $XDG_CURRENT_DESKTOP",description:"Mostra qual ambiente gráfico está em uso na sessão atual.",example:"echo $XDG_CURRENT_DESKTOP",output:"GNOME"},{command:"echo $XDG_SESSION_TYPE",description:"Mostra se sessão usa X11 ou Wayland.",example:"echo $XDG_SESSION_TYPE",output:"wayland"},{command:"tasksel --list-tasks",description:"Lista todas as 'tarefas' disponíveis (incluindo ambientes gráficos).",example:"tasksel --list-tasks | head -20"},{command:"sudo apt install task-DESKTOP-desktop",description:"Instala um ambiente gráfico completo (com aplicativos padrão).",example:"sudo apt install task-kde-desktop"},{command:"sudo systemctl set-default",description:"Define o 'target' padrão do sistema. graphical.target = inicia com interface, multi-user.target = só terminal.",example:"sudo systemctl set-default graphical.target",flags:[{flag:"graphical.target",description:"Inicia com interface gráfica"},{flag:"multi-user.target",description:"Só terminal (servidor)"}]},{command:"sudo systemctl restart display-manager",description:"Reinicia a tela de login (mata sessão atual, volta para login). Útil sem precisar reiniciar todo o sistema.",example:"sudo systemctl restart display-manager"},{command:"wmctrl -m",description:"Mostra qual gerenciador de janelas está rodando (Mutter=GNOME, KWin=KDE, Xfwm=XFCE, Marco=MATE).",example:"wmctrl -m",output:`Name: Mutter
Class: N/A
PID: N/A
Window manager's "showing the desktop" mode: OFF`}],tips:[{type:"info",title:"Wayland vs X11 — qual escolher?",content:"Para uso normal: o que vier por padrão. Se algum app antigo (TeamViewer, AnyDesk, alguns games) não funciona bem em Wayland, na tela de login escolha 'GNOME on Xorg' ou 'Plasma (X11)' temporariamente. Mas a tendência é todos migrarem para Wayland — há suporte cada vez melhor."},{type:"warning",title:"Não remova o ambiente atual antes de testar o novo",content:"Se você instalou KDE para testar, NÃO desinstale GNOME imediatamente. Use o KDE por uns dias, confirme que tudo funciona (Wi-Fi, áudio, suspend, etc.), só então desinstale GNOME. Se algo quebrar no KDE, você ainda pode voltar para o GNOME."}],practiceLabs:[{title:"Trocar de GNOME (padrão Debian) para KDE Plasma",goal:"Ter dois ambientes instalados, conseguir alternar entre eles na tela de login.",steps:["Em VM: tire um snapshot ANTES (segurança).","Atualize o sistema: sudo apt update && sudo apt full-upgrade -y","Instale o KDE: sudo apt install -y task-kde-desktop (1-3 GB de download)","Quando perguntar qual display manager (gdm3 ou sddm), escolha sddm (preferido pelo KDE).","Faça logout. Na tela de login (SDDM agora), procure menu canto inferior esquerdo.","Selecione 'Plasma (X11)' ou 'Plasma (Wayland)' e faça login.","Para voltar ao GNOME: logout, escolha 'GNOME' no menu, login."],command:`# 1) Snapshot da VM (faca pelo painel da sua VM)

# 2) Atualizar
sudo apt update && sudo apt full-upgrade -y

# 3) Instalar KDE completo
sudo apt install -y task-kde-desktop

# 4) Reiniciar display manager
sudo systemctl restart display-manager

# 5) Para confirmar qual ambiente esta rodando depois do login
echo $XDG_CURRENT_DESKTOP

# Para voltar atras (remover KDE):
# sudo apt remove --purge task-kde-desktop
# sudo apt autoremove --purge`,verify:"Após login no KDE, 'echo $XDG_CURRENT_DESKTOP' deve retornar 'KDE'. Faça logout, escolha GNOME, login — deve retornar 'GNOME'."}],exercises:[{id:1,question:"Qual ambiente gráfico você usaria em uma máquina com 4 GB de RAM?",answer:"XFCE ou LXDE — consomem 200-700 MB ocioso, deixando RAM livre para os aplicativos."},{id:2,question:"Como saber qual ambiente gráfico está em uso?",answer:"echo $XDG_CURRENT_DESKTOP — retorna GNOME, KDE, XFCE, MATE, etc."},{id:3,question:"Qual a diferença entre X11 e Wayland?",answer:"X11 é o sistema tradicional de janelas (X.Org), 30+ anos. Wayland é o substituto moderno: mais seguro, suporta melhor HiDPI por monitor, mas alguns apps antigos têm bugs. GNOME e KDE atuais usam Wayland por padrão."},{id:4,question:"Como instalar o KDE Plasma sem remover o GNOME?",answer:"sudo apt install task-kde-desktop. Os dois ficam instalados, escolhe na tela de login."},{id:5,question:"O que é display manager?",answer:"Software que mostra a tela de login (antes do desktop carregar). Principais: GDM3 (GNOME), SDDM (KDE), LightDM (XFCE/MATE), LXDM (LXDE)."},{id:6,question:"Como remover ambiente gráfico de um servidor?",answer:"sudo apt remove --purge task-*-desktop && sudo systemctl set-default multi-user.target && sudo reboot. O sistema volta a inicializar só no terminal."}],references:[{title:"Wiki Debian — DesktopEnvironment",url:"https://wiki.debian.org/DesktopEnvironment"},{title:"Comparação visual de DEs",url:"https://distrochooser.de/"},{title:"Wayland vs X11 explicado",url:"https://wiki.debian.org/Wayland"}]}],tk=[{id:"terminal-basico",title:"Primeiros Passos no Terminal",icon:"⌨️",category:"Terminal e Arquivos",description:"O que é o terminal, anatomia de um comando, atalhos essenciais e como pedir ajuda.",objectives:["Diferenciar terminal, shell e console","Entender a anatomia de um comando (comando, flags, argumentos)","Dominar autocompletar (Tab) e histórico (↑/↓/Ctrl+R)","Saber pedir ajuda com man, --help, tldr"],content:[`Terminal vs shell vs console — três coisas diferentes que costumam ser confundidas:
• Terminal — o programa de janela onde você digita (gnome-terminal, konsole, xterm, alacritty). É só a 'janela'.
• Shell — o interpretador que entende seus comandos (bash, zsh, fish). É o cérebro.
• Console — a interface de texto pura, sem janela gráfica (Ctrl+Alt+F2 te leva ao TTY).

No Debian, o terminal padrão depende do ambiente gráfico (GNOME Terminal no GNOME, Konsole no KDE), e o shell padrão é Bash.`,`Anatomia de um comando: COMANDO [FLAGS] [ARGUMENTOS]

Exemplo: ls -la /home
• ls — comando (listar)
• -la — flags (-l = formato longo, -a = mostrar ocultos). Combinadas em uma palavra.
• /home — argumento (diretório a listar)

Flags curtas usam um traço (-l), longas usam dois (--all). Geralmente são equivalentes: 'ls -a' = 'ls --all'.`,"O prompt do Bash mostra: usuario@hostname:diretorio$. O cifrão $ indica usuário comum, # indica root. Nunca trabalhe como root no dia a dia — use sudo. O caractere ~ representa /home/SEU_USUARIO (atalho universal). O caractere - (após cd) representa o último diretório visitado.","Autocompletar com Tab é o atalho mais importante do Bash. Digite parte de um comando ou caminho de arquivo e aperte Tab — ele completa. Aperte Tab DUAS VEZES — mostra todas as opções disponíveis. Funciona em comandos, arquivos, diretórios e até flags de alguns comandos. Reduz erros e velocidade absurdamente.",`Histórico de comandos é seu melhor amigo:
• Setas ↑ e ↓ — navegar pelos últimos comandos
• Ctrl+R — buscar no histórico (digite parte do comando, vai mostrando os matches; aperte Enter para executar)
• history — listar todo o histórico (cada um tem um número)
• !100 — re-executar o comando número 100
• !! — re-executar o último comando
• !apt — re-executar o último comando que começou com 'apt'
• ~/.bash_history — arquivo onde fica salvo (sobrevive entre sessões)`,`Atalhos de edição na linha de comando (todos do Emacs, padrão do Bash):
• Ctrl+A / Ctrl+E — início / fim da linha
• Ctrl+W — apagar palavra à esquerda
• Ctrl+U — apagar tudo à esquerda do cursor
• Ctrl+K — apagar tudo à direita do cursor
• Ctrl+L — limpar tela (= clear)
• Ctrl+C — cancelar comando atual / matar processo
• Ctrl+Z — pausar processo (recupera com 'fg')
• Ctrl+D — sair do shell (= exit)
• Alt+. — colar último argumento do comando anterior`,`Sistemas de ajuda — quatro maneiras de descobrir o que um comando faz:
• COMANDO --help — ajuda rápida (geralmente uma tela)
• man COMANDO — manual completo (pode ter dezenas de páginas, navegue com setas, q para sair, /palavra para buscar)
• info COMANDO — manual em hipertexto (estilo wiki, pouco usado hoje)
• tldr COMANDO — exemplos práticos resumidos. Instale: 'sudo apt install tldr' depois 'tldr cp'. Muito mais útil que man para casos comuns.`,`Variáveis de ambiente importantes (acesse com $NOME):
• $HOME — sua pasta pessoal (= ~)
• $USER — seu nome de usuário
• $PATH — lista de pastas onde o shell procura comandos
• $PWD — diretório atual
• $SHELL — qual shell está em uso
• $LANG — idioma/locale

Veja todas com 'env' ou 'printenv'. Use em comandos: 'cd $HOME/Downloads' = 'cd ~/Downloads'.`],commands:[{command:"pwd",description:"Print Working Directory — mostra o diretório atual.",example:"pwd",output:"/home/wallyson"},{command:"ls",description:"Lista arquivos e diretórios.",example:"ls -lah /var/log",flags:[{flag:"-l",description:"Formato longo (permissões, dono, tamanho, data)"},{flag:"-a",description:"Mostrar ocultos (que começam com .)"},{flag:"-h",description:"Tamanhos legíveis (KB, MB, GB)"},{flag:"-S",description:"Ordenar por tamanho"},{flag:"-t",description:"Ordenar por data de modificação"},{flag:"-r",description:"Inverter ordem"},{flag:"-R",description:"Recursivo (entrar em subpastas)"},{flag:"--color",description:"Colorir saída por tipo de arquivo"}]},{command:"cd",description:"Change Directory — muda de pasta.",example:"cd ~/Documentos",flags:[{flag:"~",description:"Vai para sua home (/home/USUARIO)"},{flag:"..",description:"Volta um nível (pasta-pai)"},{flag:"-",description:"Volta ao diretório anterior"},{flag:"/",description:"Vai para a raiz do sistema"}]},{command:"clear",description:"Limpa a tela do terminal (atalho: Ctrl+L).",example:"clear"},{command:"history",description:"Mostra o histórico de comandos digitados.",example:"history | tail -20",flags:[{flag:"-c",description:"Limpa o histórico todo"},{flag:"-d N",description:"Apaga linha N do histórico"},{flag:"-w",description:"Salva histórico no arquivo agora"}]},{command:"whoami",description:"Mostra seu nome de usuário atual.",example:"whoami",output:"wallyson"},{command:"hostname",description:"Mostra o nome da máquina.",example:"hostname",output:"debian"},{command:"date",description:"Mostra data/hora atual. Formato customizável.",example:'date "+%d/%m/%Y %H:%M"',output:"25/04/2026 18:43"},{command:"echo",description:"Imprime texto na tela. Útil para testar variáveis: echo $HOME",example:"echo 'Olá, $USER'",output:"Olá, $USER"},{command:"man",description:"Manual de qualquer comando. Navegação: setas ↑↓, /palavra busca, q sai.",example:"man ls"},{command:"tldr",description:"Exemplos práticos de qualquer comando, em vez do manual gigante. Instale: sudo apt install tldr",example:"tldr tar"}],tips:[{type:"info",title:"Tab é seu super-poder",content:"90% dos erros de digitação somem se você usar Tab religiosamente. Digite as primeiras letras → Tab. Se nada acontece, aperte Tab DUAS vezes para ver as opções. Isso te poupa de erros como 'cd Documentso' (típico de quem não usa Tab)."},{type:"warning",title:"Cuidado com o cifrão $ em comandos copiados",content:"Em tutoriais, '$ comando' significa 'rode como usuário comum' e '# comando' significa 'rode como root'. NÃO copie o $ ou # — eles são só indicação visual de prompt, não fazem parte do comando."},{type:"success",title:"Instale o tldr para vida feliz",content:"'sudo apt install tldr' (uma vez). Depois, sempre que precisar lembrar a sintaxe de um comando, 'tldr COMANDO' te mostra os 3-5 usos mais comuns com exemplos. Muito melhor que ler 'man tar' (manual de 30 páginas)."}],practiceLabs:[{title:"Tour pelo seu sistema em 1 minuto",goal:"Conhecer comandos básicos rodando-os de verdade. Sem isso não fica na cabeça.",steps:["Abra o terminal.","Cole o bloco de comandos abaixo um por um, OBSERVANDO cada saída.","Note o que cada um faz e como o prompt muda quando você usa cd."],command:`# Onde estou?
pwd

# O que tem aqui?
ls -lah

# Quem sou eu?
whoami

# Em qual maquina?
hostname

# Que dia e hora e?
date

# Vou para Documentos
cd ~/Documentos

# Ver onde estou agora
pwd

# Voltar para a home (sem argumento)
cd

# Confirmar que voltei
pwd

# Limpar tela
clear`,verify:"Você deve ter visto seu nome de usuário, o hostname, a data atual, e ter navegado para ~/Documentos e voltado. Se algum comando deu 'command not found' você está em uma distro que não é Debian/derivado."},{title:"Use Tab e histórico para acelerar",goal:"Internalizar os atalhos que vão multiplicar sua produtividade no terminal.",steps:["Digite 'ls /v' e aperte Tab. Deve completar para 'ls /var/'.","Aperte Tab de novo (duas vezes total). Mostra todas as pastas em /var.","Digite 'log/' e Enter para listar /var/log.","Aperte ↑ — recupera o último comando.","Aperte ↑ de novo — comando anterior.","Pressione Ctrl+R, digite 'pwd' — busca pelo comando 'pwd' no histórico.","Pressione Enter para executar.","Digite '!ls' — re-executa o último comando que começou com 'ls'."],verify:"Se você usou Tab e o terminal completou os caminhos, você dominou. Se o Ctrl+R funcionou, agora você vai esquecer como vivia sem."}],exercises:[{id:1,question:"Qual a diferença entre terminal, shell e console?",answer:"Terminal = a janela onde você digita. Shell = o interpretador (Bash, Zsh) que entende seus comandos. Console = a interface de texto pura (TTY), acessada com Ctrl+Alt+F2."},{id:2,question:"O que significa o ~ no caminho?",answer:"~ é atalho para sua pasta pessoal (/home/SEU_USUARIO). 'cd ~' = 'cd /home/USUARIO' = 'cd' (sem argumento)."},{id:3,question:"Qual atalho cancela um comando rodando?",answer:"Ctrl+C — envia sinal SIGINT, o comando para imediatamente."},{id:4,question:"Como buscar 'apt' no seu histórico de comandos?",answer:"Pressione Ctrl+R e digite apt — Bash vai mostrando matches enquanto você digita. Enter executa."},{id:5,question:"Você não lembra como usar o comando tar. Como pedir ajuda?",answer:"tar --help (resumo rápido), man tar (manual completo, q sai), ou tldr tar (exemplos práticos — instale: sudo apt install tldr)."},{id:6,question:"O que faz 'cd -'?",answer:"Volta para o diretório anterior (o último em que você esteve antes do atual). Útil para alternar entre duas pastas."}],references:[{title:"Manual completo do Bash",url:"https://www.gnu.org/software/bash/manual/"},{title:"tldr — exemplos práticos",url:"https://tldr.sh/"},{title:"Cheat sheet de atalhos do Bash",url:"https://devhints.io/bash"}]},{id:"navegacao",title:"Navegação no Sistema de Arquivos",icon:"🗂️",category:"Terminal e Arquivos",description:"Hierarquia FHS, caminhos absolutos vs relativos, e por que tudo no Linux é arquivo.",objectives:["Entender a hierarquia padrão do Linux (FHS)","Diferenciar caminhos absolutos e relativos","Saber para que servem /etc, /var, /home, /usr, /tmp, /opt, /root, /boot","Entender que tudo (dispositivos, processos, sockets) são arquivos no Linux"],content:["O Linux organiza arquivos em uma única árvore que começa na raiz '/'. Diferente do Windows (que tem letras de unidade C:, D:), o Linux monta pendrives, HDs externos, partições — todos dentro dessa única árvore. É a Filesystem Hierarchy Standard (FHS), padrão seguido por todas as distros.",`Diretórios principais e sua função:
• /          raiz, contém tudo
• /bin       binários essenciais (ls, cp, cat) — em distros modernas é link para /usr/bin
• /sbin      binários de administração (mkfs, ifconfig) — link para /usr/sbin
• /etc       arquivos de configuração do SISTEMA (sources.list, hostname, fstab)
• /home      pastas pessoais dos usuários (/home/wallyson, /home/maria)
• /root      pasta pessoal do usuário root (não fica em /home)
• /var       dados variáveis: logs (/var/log), cache, mail, banco de dados
• /tmp       arquivos temporários, apagados a cada boot
• /usr       programas e bibliotecas (não-essenciais ao boot)
• /opt       software de terceiros (Chrome, VSCode quando instalados manualmente)
• /boot      kernel, initramfs, configuração do GRUB`,`Diretórios virtuais (não são arquivos de verdade — são interfaces para o kernel):
• /proc      informações sobre processos rodando (/proc/CPUinfo, /proc/meminfo)
• /sys       controle do hardware/kernel (mais novo que /proc)
• /dev       arquivos de dispositivo (/dev/sda = HD, /dev/null = lixeira universal, /dev/zero = bytes zero infinitos)
• /run       dados temporários de runtime (sockets, PIDs)`,`Caminho absoluto começa com '/' — não importa onde você esteja, sempre aponta para o mesmo lugar:
/home/wallyson/Documentos/notas.txt

Caminho relativo NÃO começa com '/' — é interpretado a partir do diretório atual (PWD):
Documentos/notas.txt    (se você está em /home/wallyson)
../arquivo.txt          (sobe um nível e pega arquivo.txt)
./script.sh             (script.sh no diretório atual; o ./ é necessário para executar)

A dica: '..' = pasta-pai, '.' = pasta atual.`,`Convenções de nomes no Linux:
• Sensível a maiúsculas: arquivo.txt ≠ Arquivo.txt ≠ ARQUIVO.txt — são três arquivos diferentes!
• Arquivos ocultos começam com . — '.bashrc' não aparece com 'ls', só com 'ls -a'.
• Espaços em nomes precisam ser escapados ou entre aspas: 'meu arquivo.txt' ou meu\\ arquivo.txt.
• Não há extensão obrigatória — 'script' e 'script.sh' são idênticos para o sistema; a extensão é só para humanos.`,`Filosofia 'tudo é arquivo' — uma das ideias mais brilhantes do Unix:
• Dispositivos físicos (HDs, USBs) são arquivos em /dev (você pode 'cat /dev/sda', mas não faça isso).
• Processos rodando são arquivos em /proc (cada PID tem uma pasta).
• Sockets de rede aparecem como arquivos em /tmp ou /var/run.
• /dev/null é a 'lixeira universal' — qualquer coisa escrita lá some. 'comando > /dev/null' descarta a saída.
• /dev/zero gera infinitos bytes zero — útil para criar arquivos de teste.
• /dev/random e /dev/urandom geram bytes aleatórios para criptografia.`,`Pontos de montagem — onde discos extras 'aparecem' na árvore:
• /mnt — para montagens manuais e temporárias
• /media — onde o sistema monta automaticamente pendrives e HDs externos (/media/wallyson/PENDRIVE)
• /home (pode ser uma partição separada montada aqui)

Ver todas as montagens: comando 'mount' ou 'df -h'.`,`Atalhos especiais que TODO usuário Linux deve memorizar:
• ~        sua home (/home/USUARIO)
• ~outroUsuario   home dele (/home/outroUsuario)
• .        diretório atual
• ..       diretório pai
• -        diretório anterior (após cd -)
• /        raiz

Use em comandos: 'cp ~/foto.jpg /tmp/' = 'cp /home/USUARIO/foto.jpg /tmp/'.`],commands:[{command:"pwd",description:"Print Working Directory — onde você está.",example:"pwd",output:"/home/wallyson/Documentos"},{command:"cd",description:"Change Directory — muda de pasta.",example:"cd /var/log",flags:[{flag:"/",description:"Vai para raiz"},{flag:"~",description:"Vai para sua home"},{flag:"..",description:"Sobe um nível"},{flag:"-",description:"Volta ao diretório anterior"}]},{command:"ls",description:"Lista conteúdo do diretório.",example:"ls -lah ~"},{command:"tree",description:"Mostra estrutura de pastas em árvore. Instale: sudo apt install tree.",example:"tree -L 2 ~/Documentos",flags:[{flag:"-L N",description:"Limitar profundidade (N níveis)"},{flag:"-d",description:"Só diretórios"},{flag:"-a",description:"Incluir ocultos"},{flag:"-h",description:"Mostrar tamanhos legíveis"}]},{command:"find",description:"Busca arquivos por nome, tamanho, data, tipo, etc. EXTREMAMENTE poderoso.",example:"find /home -name '*.pdf' -mtime -7",flags:[{flag:"-name 'PADRÃO'",description:"Busca por nome (com curingas)"},{flag:"-type f",description:"Só arquivos comuns"},{flag:"-type d",description:"Só diretórios"},{flag:"-mtime -7",description:"Modificados nos últimos 7 dias"},{flag:"-size +100M",description:"Maiores que 100 MB"},{flag:"-delete",description:"Apaga os encontrados (CUIDADO!)"}]},{command:"locate",description:"Busca arquivos por nome em um banco de dados (rápido, mas pode estar desatualizado). Atualize com 'sudo updatedb'.",example:"locate firefox"},{command:"mount",description:"Mostra dispositivos montados (ou monta novos).",example:"mount | grep '^/dev'"},{command:"df",description:"Disk Free — espaço livre por partição montada.",example:"df -hT"},{command:"du",description:"Disk Usage — quanto cada pasta/arquivo ocupa.",example:"du -sh ~/Downloads/*",flags:[{flag:"-s",description:"Só o total (não detalha)"},{flag:"-h",description:"Legível"},{flag:"--max-depth=1",description:"Só primeiro nível"}]}],tips:[{type:"info",title:"Decorou os atalhos? Aqui está um quiz",content:"Sem rodar: o que faz 'cd ../..'? (sobe dois níveis) E 'cd ~/-'? (vai para a home, depois volta — ou seja, fica onde estava — pegadinha). E 'ls .'? (lista o diretório atual, mesma coisa que 'ls')."},{type:"warning",title:"Cuidado com find -delete",content:"Sempre rode o find PRIMEIRO sem o -delete para ver o que SERIA deletado. Só depois adicione -delete. Ex: 'find /home -name *.tmp' (lista) → conferir → 'find /home -name *.tmp -delete' (apaga)."}],practiceLabs:[{title:"Mapear sua casa Linux",goal:"Entender visualmente a estrutura de diretórios do seu sistema.",steps:["Instale tree: sudo apt install tree","Olhe a raiz limitada a 1 nível: tree -L 1 /","Veja o tamanho de cada diretório principal: sudo du -sh /* 2>/dev/null","Encontre os 5 diretórios mais pesados.","Olhe sua home: tree -L 2 ~"],command:`# 1) Ferramenta
sudo apt install -y tree

# 2) Estrutura da raiz
tree -L 1 /

# 3) Tamanho de cada um
sudo du -sh /* 2>/dev/null | sort -h

# 4) Sua home
tree -L 2 -a ~ | head -30`,verify:"Você deve ver as pastas /etc, /home, /var, /usr, etc. Provavelmente /usr é o maior (programas instalados) seguido de /var (logs e cache)."},{title:"Encontrar todos os PDFs modificados na última semana",goal:"Aprender a usar find para tarefas reais do dia a dia.",steps:["Crie um PDF de teste: touch ~/Documentos/teste.pdf","Procure todos os PDFs em sua home modificados nos últimos 7 dias.","Veja só os arquivos > 1 MB.","Conte quantos foram encontrados."],command:`# 1) Criar arquivo de teste
mkdir -p ~/Documentos
touch ~/Documentos/teste.pdf

# 2) Procurar PDFs modificados nos ultimos 7 dias
find ~ -name '*.pdf' -mtime -7

# 3) Mesmo, mas so > 1 MB
find ~ -name '*.pdf' -mtime -7 -size +1M

# 4) Contar
find ~ -name '*.pdf' -mtime -7 | wc -l`,verify:"Você deve ver pelo menos o teste.pdf que acabou de criar. Se você usa o computador há tempo, vai ver vários PDFs."}],exercises:[{id:1,question:"O que tem em /etc?",answer:"Arquivos de configuração do SISTEMA (sources.list, fstab, hostname, hosts, sudoers, passwd, etc.). Edição requer root."},{id:2,question:"Diferença entre caminho absoluto e relativo?",answer:"Absoluto começa com / e aponta para o mesmo lugar de qualquer diretório (/home/user/foto.jpg). Relativo é a partir do diretório atual (foto.jpg, ../foto.jpg)."},{id:3,question:"O que é /dev/null?",answer:"Arquivo especial que descarta tudo que escreve nele. Use 'comando > /dev/null' para silenciar saída, ou '2>/dev/null' para silenciar erros."},{id:4,question:"Como descobrir quanto espaço cada pasta de /home está usando?",answer:"sudo du -sh /home/* — mostra total de cada subpasta de /home (-s = só total, -h = legível)."},{id:5,question:"Como achar todos os arquivos .log maiores que 100MB em /var?",answer:"sudo find /var -name '*.log' -size +100M"},{id:6,question:"Por que arquivos ocultos começam com .?",answer:"Convenção do Unix: o ls não mostra arquivos que começam com . (use ls -a). Servem para configurações pessoais (.bashrc, .config) sem poluir a listagem normal."}],references:[{title:"FHS — Filesystem Hierarchy Standard",url:"https://refspecs.linuxfoundation.org/FHS_3.0/fhs/index.html"},{title:"Wiki Debian — Filesystems",url:"https://wiki.debian.org/Filesystems"}]},{id:"arquivos",title:"Manipulação de Arquivos — Criar, Copiar, Mover, Apagar",icon:"📄",category:"Terminal e Arquivos",description:"touch, mkdir, cp, mv, rm — os 5 comandos que você vai usar mil vezes.",objectives:["Criar arquivos vazios e pastas","Copiar e mover com segurança (sem sobrescrever sem querer)","Apagar com confirmação para evitar erros","Conhecer o uso correto de wildcards (* e ?)"],content:["Os 5 comandos básicos para mexer em arquivos: touch (criar arquivo vazio), mkdir (criar diretório), cp (copiar), mv (mover ou renomear), rm (apagar). Você vai usar esses todo dia. Vamos por ordem.",`touch — cria um arquivo vazio (ou atualiza a data se já existe). Útil para criar arquivos rápidos para teste, ou para 'tocar' arquivos para que sistemas de monitoramento detectem mudança:

touch arquivo.txt
touch a.txt b.txt c.txt        (cria 3 de uma vez)
touch -t 202401151200 arq.txt  (define data específica)

Duvida frequente: 'touch' não é o comando 'certo' para criar arquivo de texto — é para criar arquivo VAZIO. Para escrever direto, use 'echo texto > arquivo.txt' ou edite com 'nano arquivo.txt'.`,`mkdir — make directory. Cria pastas:

mkdir nova_pasta
mkdir -p caminho/longo/que/nao/existe   (-p cria intermediárias se faltarem)
mkdir pasta_{a,b,c}                       (cria 3 pastas: pasta_a, pasta_b, pasta_c)

O -p é INDISPENSÁVEL. Sem ele, 'mkdir a/b/c' dá erro se 'a' não existe. Com -p, cria a, b e c.`,`cp — copy. Copia arquivos e diretórios:

cp origem destino                  copia arquivo único
cp arquivo.txt /tmp/               copia para /tmp/
cp arquivo.txt /tmp/novo.txt       copia E renomeia
cp -r pasta/ /tmp/                 -r = recursivo, OBRIGATÓRIO para diretórios
cp -i arquivo.txt /tmp/            -i = pergunta antes de sobrescrever (RECOMENDADO!)
cp -v ...                          -v = verboso, mostra o que está copiando
cp -a ...                          -a = preserva tudo (permissões, dono, datas)

O -i evita você sobrescrever arquivo importante por engano. Crie um alias permanente: 'alias cp="cp -i"' no ~/.bashrc.`,`mv — move. Move OU renomeia arquivos:

mv arquivo.txt /tmp/             move para /tmp/
mv arquivo.txt novo_nome.txt     RENOMEIA (mover para o mesmo lugar com outro nome)
mv -i arq.txt /tmp/              pergunta antes de sobrescrever
mv -v ...                        verboso

Não precisa de -r para mover diretórios — mv funciona com pastas direto. Não tem opção 'undo' — uma vez movido, foi.`,`rm — REMOVE. APAGA. CUIDADO:

rm arquivo.txt                   apaga arquivo (sem ir para lixeira!)
rm -i arquivo.txt                pergunta antes de cada apagar
rm -r pasta/                     RECURSIVO, apaga pasta e tudo dentro
rm -ri pasta/                    pergunta cada item (recomendado!)
rm -f arquivo.txt                força (não pergunta nem reclama)

NUNCA use 'rm -rf /' ou 'rm -rf /*' — apaga TUDO no sistema. Nunca rode rm -rf como root sem checar 3 vezes o caminho. Não há lixeira no terminal — uma vez apagado, foi.`,`Wildcards (curingas) — atalhos que o shell expande antes de chamar o comando:
• *       qualquer sequência de caracteres (até /)
• ?       um único caractere qualquer
• [abc]   um caractere entre a, b ou c
• {1,2,3} expande para 3 alternativas: arq{1,2,3}.txt = arq1.txt arq2.txt arq3.txt

Exemplos:
• rm *.tmp — apaga todos os .tmp do diretório atual
• cp foto?.jpg ~/Imagens/ — copia foto1.jpg, foto2.jpg, fotoA.jpg, etc.
• ls /var/log/*.log — lista todos os .log em /var/log`,`Renomear vários arquivos de uma vez: o mv não faz isso direto. Use 'rename' (perl) ou um for loop:

rename 's/\\.txt$/\\.md/' *.txt          # troca todas .txt por .md

Ou shell loop:
for f in *.jpeg; do mv "$f" "\\\${f%.jpeg}.jpg"; done

Instale rename: sudo apt install rename.`,`Lixeira no terminal — não existe nativa. Mas você pode instalar 'trash-cli' que adiciona comando 'trash' como substituto seguro do rm:

sudo apt install trash-cli
trash arquivo.txt              vai para lixeira
trash-list                     lista o que tem na lixeira
trash-restore                  restaura
trash-empty                    esvazia

Muitos usuários experientes usam 'trash' no dia a dia em vez de rm.`],commands:[{command:"touch",description:"Cria arquivo vazio ou atualiza timestamp.",example:"touch a.txt b.txt c.txt"},{command:"mkdir",description:"Cria diretório.",example:"mkdir -p projeto/src/components",flags:[{flag:"-p",description:"Cria diretórios pais (essencial)"},{flag:"-v",description:"Verboso"},{flag:"-m 700",description:"Cria com permissão específica"}]},{command:"cp",description:"Copia arquivos e diretórios.",example:"cp -ri pasta/ /tmp/",flags:[{flag:"-r",description:"Recursivo (necessário para diretórios)"},{flag:"-i",description:"Pergunta antes de sobrescrever"},{flag:"-v",description:"Verboso"},{flag:"-a",description:"Preserva tudo (permissões, dono, datas)"},{flag:"-u",description:"Só copia se origem é mais nova"}]},{command:"mv",description:"Move ou renomeia.",example:"mv -iv arquivo.txt /tmp/",flags:[{flag:"-i",description:"Pergunta antes de sobrescrever"},{flag:"-v",description:"Verboso"},{flag:"-n",description:"Não sobrescreve nunca"}]},{command:"rm",description:"REMOVE. Use COM CUIDADO.",example:"rm -ri pasta_temporaria/",flags:[{flag:"-i",description:"Pergunta cada um (USE!)"},{flag:"-r",description:"Recursivo (para diretórios)"},{flag:"-f",description:"Força, sem perguntar (CUIDADO)"},{flag:"-v",description:"Verboso (mostra o que apagou)"}]},{command:"rmdir",description:"Remove diretório VAZIO. Falha se houver conteúdo (mais seguro que rm -r).",example:"rmdir pasta_vazia"},{command:"ln",description:"Cria links. Hard link (sem flag) ou soft/symbolic (-s).",example:"ln -s /opt/aplicativo/bin/app /usr/local/bin/app",flags:[{flag:"-s",description:"Cria link simbólico (preferido)"},{flag:"-f",description:"Sobrescreve link existente"}]},{command:"rename",description:"Renomeia vários arquivos com expressão regular (Perl).",example:"rename 's/\\.jpeg$/\\.jpg/' *.jpeg"},{command:"trash",description:"Move para lixeira em vez de apagar (mais seguro que rm). Instale: sudo apt install trash-cli",example:"trash arquivo_suspeito.txt"}],tips:[{type:"danger",title:"rm -rf é PERIGOSO",content:"Sempre cheque o caminho 3 vezes antes de 'rm -rf'. Erros comuns: 'rm -rf /' (apaga tudo!), 'rm -rf /*', 'rm -rf $VAR' onde $VAR está vazio (vira 'rm -rf '). Considere usar 'trash' (sudo apt install trash-cli) no dia a dia em vez de rm."},{type:"info",title:"Crie um alias para cp, mv e rm pedirem confirmação",content:"Adicione no ~/.bashrc: alias rm='rm -i'\\nalias cp='cp -i'\\nalias mv='mv -i'\\nDepois 'source ~/.bashrc'. Agora qualquer rm pergunta antes — vida mais segura."},{type:"success",title:"Para CONFIRMAR que entendeu wildcards: 'echo *'",content:"Antes de rodar 'rm *.tmp', rode 'echo *.tmp'. O echo mostra exatamente o que o * vai expandir. Se a lista parece OK, troque echo por rm. Esse hábito evita 99% dos desastres com wildcards."}],practiceLabs:[{title:"Lab seguro de operações com arquivos",goal:"Praticar criar, copiar, mover, apagar em uma pasta isolada onde não há risco.",steps:["Crie uma pasta de testes em /tmp.","Crie 5 arquivos vazios.","Copie um deles para outro nome.","Mova um para uma subpasta.","Renomeie um.","Apague tudo no final."],command:`# 1) Pasta de testes
mkdir -p /tmp/lab-arquivos
cd /tmp/lab-arquivos

# 2) 5 arquivos vazios
touch arq1.txt arq2.txt arq3.txt arq4.txt arq5.txt
ls

# 3) Copiar um
cp -iv arq1.txt arq1-copia.txt

# 4) Criar subpasta e mover
mkdir -p subpasta
mv -iv arq2.txt subpasta/

# 5) Renomear
mv -iv arq3.txt arq3-renomeado.txt

# 6) Listar tudo
ls -laR

# 7) Apagar a pasta inteira (com -i pergunta cada)
cd ..
rm -ri lab-arquivos`,verify:"Após cada comando, rode ls para ver o resultado. No final 'ls /tmp/lab-arquivos' deve dar 'No such file or directory'."}],exercises:[{id:1,question:"Como criar um diretório aninhado, ex: 'projeto/src/components'?",answer:"mkdir -p projeto/src/components — o -p cria pais que não existem (sem ele, dá erro)."},{id:2,question:"Por que usar 'cp -i' em vez de 'cp' simples?",answer:"Para o cp PERGUNTAR antes de sobrescrever um arquivo existente. Sem o -i, o cp sobrescreve silenciosamente — você pode perder dados."},{id:3,question:"Como copiar uma pasta inteira com tudo dentro?",answer:"cp -r pasta/ destino/ — o -r é recursivo, obrigatório para diretórios."},{id:4,question:"Qual a diferença entre mv e rename?",answer:"mv move OU renomeia (um arquivo por vez). rename usa regex para renomear MUITOS arquivos de uma vez (rename 's/.jpeg/.jpg/' *.jpeg)."},{id:5,question:"O que NUNCA fazer com rm?",answer:"NUNCA: rm -rf / (apaga tudo!), rm -rf /* (idem), rm -rf $VARIAVEL_QUE_PODE_ESTAR_VAZIA (vira rm -rf  que age na pasta atual). Sempre prefira -i e cheque o caminho duas vezes."},{id:6,question:"Como apagar com segurança em vez de usar rm?",answer:"sudo apt install trash-cli, depois use 'trash arquivo' em vez de 'rm arquivo'. Move para lixeira reversível em vez de apagar de vez."}],references:[{title:"Manual GNU coreutils",url:"https://www.gnu.org/software/coreutils/manual/"},{title:"trash-cli no GitHub",url:"https://github.com/andreafrancia/trash-cli"}]}],ok=[{id:"editor-texto",title:"Editores de Texto — nano e vim",icon:"✏️",category:"Terminal e Arquivos",description:"Como editar arquivos de configuração no terminal sem aperto. nano para iniciantes, vim para vida toda.",objectives:["Usar nano para edições rápidas de configuração","Sobreviver no vim (entrar, sair, salvar)","Conhecer atalhos essenciais de cada editor","Saber qual usar quando"],content:["No Linux, MUITAS tarefas envolvem editar arquivos de texto: configurar serviços (/etc/ssh/sshd_config), customizar shell (~/.bashrc), criar scripts. Você precisa de pelo menos um editor de terminal funcional — quando o ambiente gráfico quebra, ou em servidor SSH, é o que você tem.",`nano é o editor amigável para iniciantes. Já vem instalado no Debian. Os atalhos aparecem na parte inferior da tela. O ^ representa Ctrl. Comandos essenciais:
• Ctrl+O — salvar (Output)
• Ctrl+X — sair (com pergunta para salvar se houver mudanças)
• Ctrl+W — buscar (Where is)
• Ctrl+\\ — buscar e substituir
• Ctrl+K — recortar linha
• Ctrl+U — colar (Uncut)
• Ctrl+G — ajuda completa
• Alt+/ — fim do arquivo
• Alt+\\ — início do arquivo

Use nano sempre que o vim te dar pavor. Sem vergonha — administradores experientes usam nano para edições rápidas.`,`vim é o editor lendário do Unix. Tem curva de aprendizado, mas dominado é absurdamente rápido. Versão simplificada já vem no Debian (vim-tiny). Para versão completa: 'sudo apt install vim'. Característica única: vim tem MODOS:
• NORMAL — modo padrão. Teclas executam comandos (não inserem texto). Move-se com h/j/k/l (esquerda/baixo/cima/direita). Esc volta para esse modo de qualquer outro.
• INSERT — modo de digitação. Tecla 'i' entra. Esc sai.
• VISUAL — seleção de texto. Tecla 'v' entra.
• COMMAND — comandos no rodapé. Tecla ':' entra.

Se abriu vim e está perdido: aperte Esc, depois digite ':q!' e Enter para sair sem salvar.`,`Sobrevivência no vim — os 10 comandos que te tiram de qualquer aperto:
• i — entra modo INSERT (começa a editar)
• Esc — volta ao modo NORMAL
• :w — salvar (write)
• :q — sair (quit)
• :wq — salvar e sair
• :q! — sair SEM salvar (descartar mudanças)
• /palavra — buscar 'palavra' (Enter, depois n para próximo, N para anterior)
• u — desfazer (undo)
• Ctrl+r — refazer (redo)
• dd — apagar linha inteira

Com isso você consegue editar QUALQUER arquivo de config no servidor. Suficiente para 90% dos casos.`,`Customização básica do vim — crie ~/.vimrc com:

set number               " mostra números das linhas
set relativenumber       " números relativos (super útil para movimentação)
set tabstop=4            " tab = 4 espaços
set expandtab            " tab insere espaços
set autoindent           " auto-identar
set ignorecase           " busca case-insensitive
set hlsearch             " destacar buscas
set mouse=a              " habilita mouse
syntax on                " colorir sintaxe

Depois 'source ~/.vimrc' ou reabrir o vim. Diferença é dia e noite.`,`Quando usar cada um:
• nano — edições rápidas e ocasionais (mudar uma linha em /etc/hosts, configurar uma flag em /etc/ssh/sshd_config). Sem curva de aprendizado.
• vim — você edita arquivos com frequência. Investe 1-2 semanas para aprender, depois é rápido pra sempre. Padrão em servidores e em ambientes profissionais.

Dicas pessoais: aprenda a sobreviver no vim (10 comandos acima) — você não tem opção quando o servidor remoto só tem vim. Use nano para edições rápidas no seu dia a dia.`,`Editores gráficos no terminal? Existem alternativas modernas:
• micro — sintaxe estilo VSCode, atalhos como Ctrl+S salvar, Ctrl+C copiar. Instale: sudo apt install micro
• helix — fork moderno do vim com modos repensados. Sem repositório oficial Debian (baixe do GitHub).
• neovim — sucessor do vim. sudo apt install neovim. Compatible com vim mas com plugins modernos (Lua).

Mas saiba: nano e vim sempre estarão disponíveis em qualquer servidor Debian/Ubuntu/RHEL. Aprender pelo menos um é seguro.`],commands:[{command:"nano",description:"Editor amigável. Atalhos visíveis no rodapé.",example:"sudo nano /etc/hosts",flags:[{flag:"-w",description:"Não quebrar linhas longas"},{flag:"+N",description:"Abrir na linha N"},{flag:"-l",description:"Mostrar números de linha"},{flag:"-S",description:"Suave (smooth scroll)"}]},{command:"vim",description:"Editor modal lendário. Esc para sair de modo, :q! para sair sem salvar.",example:"vim ~/.bashrc",flags:[{flag:"+N",description:"Abrir na linha N"},{flag:"-R",description:"Modo somente leitura"},{flag:"-d arq1 arq2",description:"Modo diff (compara dois arquivos)"}]},{command:"vimtutor",description:"Tutorial interativo do vim (em texto). Roda 30 minutos e você sai sabendo o suficiente.",example:"vimtutor"},{command:"echo 'texto' >> arquivo",description:"Adiciona linha ao final de arquivo (sem editor). Útil em scripts.",example:'echo "PATH=$PATH:~/bin" >> ~/.bashrc'},{command:"sed -i",description:"Edita arquivo no lugar (sem abrir editor). Para substituições simples.",example:"sudo sed -i 's/PermitRootLogin yes/PermitRootLogin no/' /etc/ssh/sshd_config"},{command:"diff",description:"Compara dois arquivos linha a linha.",example:"diff arquivo1.txt arquivo2.txt",flags:[{flag:"-u",description:"Formato 'unified' (igual git)"},{flag:"-r",description:"Recursivo (compara dois diretórios)"}]}],tips:[{type:"warning",title:"Backup ANTES de editar configs do sistema",content:"Antes de editar /etc/ssh/sshd_config, /etc/fstab, /etc/network/interfaces, etc., faça backup: 'sudo cp /etc/ssh/sshd_config /etc/ssh/sshd_config.bak'. Se quebrar, restaura. Custom 1 segundo, salva horas de debug."},{type:"info",title:"Como sair do vim (a piada da internet)",content:"Existe meme: 'Como saiu do vim?' 'Comprei outro computador'. A resposta real: aperte Esc (volta ao modo normal), digite :q! (sai sem salvar) ou :wq (salva e sai), e Enter. Esc-:q!-Enter te tira do vim em qualquer situação."},{type:"success",title:"Pratique vim sem pressa",content:"Abra 'vimtutor' no terminal — é um tutorial interativo de 30 minutos. Faça uma vez. Depois, force-se a usar vim por uma semana para edições simples (mesmo que demore mais). Após esse mês, você não volta atrás."}],practiceLabs:[{title:"Editar /etc/hosts adicionando uma entrada",goal:"Praticar edição de arquivo de sistema (com backup, edição, validação).",steps:["Faça backup do /etc/hosts.","Abra com nano (ou vim).","Adicione uma linha mapeando 'meu-servidor' para 192.168.1.100.","Salve e teste."],command:`# 1) Backup
sudo cp /etc/hosts /etc/hosts.bak

# 2) Abrir com nano
sudo nano /etc/hosts
# Adicione no final:
# 192.168.1.100   meu-servidor
# Salve com Ctrl+O, Enter, depois Ctrl+X

# 3) Confirmar
cat /etc/hosts

# 4) Testar (ping para o nome resolver)
ping -c 1 meu-servidor

# 5) Se algo deu errado, restaurar:
# sudo cp /etc/hosts.bak /etc/hosts`,verify:"O ping deve resolver 'meu-servidor' para 192.168.1.100 (mesmo que 'host inalcançável' — o que importa é o nome ter resolvido)."},{title:"Aprender vim em 10 minutos",goal:"Ganhar confiança no vim editando um arquivo de teste.",steps:["Crie /tmp/teste.txt com algumas linhas.","Abra no vim.","Use h/j/k/l para mover.","Pressione i, digite 'olá'. Esc.","Pressione dd para apagar linha. u para desfazer.","Salve com :w. Saia com :q."],command:`# 1) Criar arquivo de teste
echo "linha 1
linha 2
linha 3
linha 4
linha 5" > /tmp/teste.txt

# 2) Abrir no vim
vim /tmp/teste.txt

# Dentro do vim:
# - Use h/j/k/l ou setas para mover
# - Pressione 'i' para entrar modo INSERT
# - Digite "Texto adicionado"
# - Pressione Esc
# - Pressione 'dd' para apagar a linha atual
# - Pressione 'u' para desfazer
# - Digite ':wq' e Enter para salvar e sair

# 3) Confirmar mudancas
cat /tmp/teste.txt`,verify:"Você conseguiu editar e salvar. Bonus: rode 'vimtutor' para um tutorial completo de 30 min."}],exercises:[{id:1,question:"Como salvar e sair no nano?",answer:"Ctrl+O salva (depois Enter para confirmar nome), Ctrl+X sai."},{id:2,question:"Você abriu o vim por engano. Como sair sem salvar?",answer:"Pressione Esc (garantir modo NORMAL), digite ':q!' e Enter."},{id:3,question:"Como entrar no modo de edição do vim?",answer:"Tecla 'i' (insert). Tudo que você digitar aparece no arquivo. Esc para voltar ao modo de comandos."},{id:4,question:"Como editar um arquivo de sistema (precisa de root)?",answer:"sudo nano /etc/arquivo (ou sudo vim). Sem o sudo, não vai conseguir salvar — só ler."},{id:5,question:"Por que fazer backup antes de editar configs?",answer:"Configurações erradas em /etc/ssh/sshd_config, /etc/fstab podem deixar o sistema inacessível ou sem boot. Backup permite restaurar em segundos: sudo cp /etc/X /etc/X.bak."},{id:6,question:"Como buscar uma palavra no vim?",answer:"/palavra Enter. Depois 'n' próximo match, 'N' anterior. Buscar para trás: ?palavra."}],references:[{title:"Vim cheat sheet",url:"https://vim.rtorr.com/"},{title:"Manual do nano",url:"https://www.nano-editor.org/dist/latest/cheatsheet.html"},{title:"Vim Adventures (jogo para aprender)",url:"https://vim-adventures.com/"}]},{id:"visualizar-buscar",title:"Visualizar e Buscar Conteúdo de Arquivos",icon:"🔍",category:"Terminal e Arquivos",description:"cat, less, head, tail, grep — ler arquivos sem editor, e buscar texto dentro deles.",objectives:["Ler arquivos pequenos e grandes eficientemente","Acompanhar logs ao vivo com tail -f","Dominar grep (e suas variações grep -i, grep -r, grep -v)","Combinar com pipes para análise rápida"],content:[`Antes de editar, você precisa LER. Quatro comandos cobrem 99% dos casos:
• cat — despeja tudo na tela. Ótimo para arquivos pequenos.
• less — abre arquivo navegável (setas, page up/down, /busca, q sai). Para arquivos grandes.
• head — primeiras linhas (default 10).
• tail — últimas linhas (default 10). Com -f acompanha em tempo real (essencial para logs).`,`cat — concatenate. Joga conteúdo na saída padrão. Use para arquivos curtos:

cat /etc/os-release         leitura simples
cat arq1 arq2 > combinado   junta dois arquivos
cat -n arquivo              numera linhas
cat -A arquivo              mostra caracteres invisíveis (CR, espaços, tabs)

NUNCA cate arquivo grande (10+ MB) — o terminal trava rolando milhares de linhas.`,`less — para arquivos grandes:

less /var/log/syslog

Dentro do less:
• Setas / Page Up / Page Down — navegar
• g — início, G — fim
• /palavra — buscar (Enter, depois n próximo, N anterior)
• &palavra — só mostrar linhas que contêm palavra
• q — sair
• -N — toggle número de linhas (LessKey)

Less é tão bom que MAN usa less internamente.`,`head e tail — primeiras / últimas linhas:

head arquivo                primeiras 10
head -20 arquivo            primeiras 20
head -c 100 arquivo         primeiros 100 bytes

tail arquivo                últimas 10
tail -50 arquivo            últimas 50
tail -f /var/log/syslog     ACOMPANHA EM TEMPO REAL (Ctrl+C sai)
tail -F arquivo             igual mas continua se arquivo for recriado (rotação de log)

'tail -f' é o canivete suíço para debug: rode em um terminal e vá vendo o que acontece em tempo real.`,`grep — busca padrões em arquivos. O comando MAIS USADO no Linux por administradores. Sintaxe básica:

grep PADRÃO ARQUIVO

Exemplos:
grep error /var/log/syslog            linhas com 'error'
grep -i error /var/log/syslog         case-insensitive
grep -n error arquivo                 mostra número da linha
grep -v error arquivo                 INVERTIDO (linhas SEM error)
grep -c error arquivo                 só conta
grep -r error /etc/                   recursivo (busca em todos arquivos da pasta)
grep -A 3 -B 1 error arquivo          3 linhas DEPOIS, 1 ANTES de cada match
grep -E 'error|warning' arquivo       extended regex (| = OU)`,`Combinar com pipes (|) torna o grep ainda mais poderoso:

ps aux | grep firefox                 procurar processo
dmesg | grep -i usb                   ver mensagens kernel sobre USB
history | grep apt                    o que você já fez com apt
ls -la | grep '^d'                    só linhas que começam com d (= diretórios)
df -h | grep -v tmpfs                 ignora linhas tmpfs

Com curingas: grep -r 'function login' /var/www/ — busca uma função em todo o site.`,`Variações úteis do grep:
• fgrep / grep -F — busca literal (não interpreta regex). Mais rápido. Útil para padrões com . [ ] ( ) * etc.
• egrep / grep -E — extended regex (suporta | + ? () sem precisar de escape).
• rgrep — recursivo direto (= grep -r).
• ripgrep (rg) — substituto moderno do grep, MUITO mais rápido. Instale: 'sudo apt install ripgrep'. Sintaxe igual: 'rg error /var/log/'. Pula automaticamente .git/, node_modules/, binários.`,`Outros comandos úteis para inspecionar arquivos:
• wc — word count: 'wc -l arquivo' conta linhas, 'wc -w' palavras, 'wc -c' bytes.
• sort — ordena: 'sort -u arquivo' (único). 'sort -n' numérico. 'sort -r' reverso.
• uniq — remove duplicatas adjacentes (use depois de sort): 'sort arquivo | uniq -c | sort -rn'.
• cut — extrai colunas: 'cut -d',' -f1 arquivo.csv' pega primeira coluna do CSV.
• awk — mini-linguagem para processar texto: 'awk \\\${print $1}' /etc/passwd' pega primeiro campo.`],commands:[{command:"cat",description:"Joga arquivo na tela.",example:"cat /etc/os-release",flags:[{flag:"-n",description:"Numerar linhas"},{flag:"-A",description:"Mostrar caracteres invisíveis"}]},{command:"less",description:"Visualizador navegável. Ótimo para arquivos grandes.",example:"less /var/log/syslog",flags:[{flag:"-N",description:"Mostrar números de linha"},{flag:"-S",description:"Não quebrar linhas longas (rola horizontalmente)"},{flag:"+F",description:"Modo follow (igual tail -f, mas dentro do less)"}]},{command:"head",description:"Primeiras linhas.",example:"head -20 /var/log/syslog",flags:[{flag:"-n N",description:"Primeiras N linhas"},{flag:"-c N",description:"Primeiros N bytes"}]},{command:"tail",description:"Últimas linhas. Com -f, acompanha em tempo real.",example:"tail -f /var/log/syslog",flags:[{flag:"-n N",description:"Últimas N linhas"},{flag:"-f",description:"Follow (atualiza ao vivo)"},{flag:"-F",description:"Follow + reabre se arquivo for recriado"}]},{command:"grep",description:"Busca padrões em arquivos. Comando mais usado no Linux.",example:"grep -rn 'erro' /var/log/",flags:[{flag:"-i",description:"Case-insensitive"},{flag:"-r",description:"Recursivo (em pastas)"},{flag:"-n",description:"Mostra número da linha"},{flag:"-v",description:"Inverte (linhas SEM o padrão)"},{flag:"-c",description:"Só conta matches"},{flag:"-l",description:"Só nomes dos arquivos"},{flag:"-A 3",description:"3 linhas APÓS o match"},{flag:"-B 3",description:"3 linhas ANTES"},{flag:"-E",description:"Extended regex (|, +, ?, () sem escape)"}]},{command:"wc",description:"Word Count — conta linhas, palavras, caracteres.",example:"wc -l /etc/passwd",flags:[{flag:"-l",description:"Linhas"},{flag:"-w",description:"Palavras"},{flag:"-c",description:"Bytes"},{flag:"-m",description:"Caracteres (multibyte)"}]},{command:"sort",description:"Ordena linhas.",example:"sort -u arquivo.txt",flags:[{flag:"-n",description:"Numérico (1, 2, 10 em vez de 1, 10, 2)"},{flag:"-r",description:"Reverso"},{flag:"-u",description:"Único (remove duplicadas)"},{flag:"-h",description:"Human readable (1K, 2M, 3G)"}]},{command:"uniq",description:"Remove duplicadas ADJACENTES. Use depois de sort.",example:"sort arquivo | uniq -c",flags:[{flag:"-c",description:"Conta cada um"},{flag:"-d",description:"Só duplicadas"},{flag:"-u",description:"Só únicas"}]},{command:"cut",description:"Extrai colunas/campos.",example:"cut -d':' -f1 /etc/passwd",flags:[{flag:"-d X",description:"Delimitador (default tab)"},{flag:"-f N",description:"Campo N (1, 2, 3...)"},{flag:"-c N-M",description:"Caracteres N a M"}]}],tips:[{type:"info",title:"Para logs gigantes, use less em vez de cat",content:"'cat /var/log/syslog' pode ter 100 MB e travar seu terminal. 'less /var/log/syslog' abre navegavelmente, sem carregar tudo na memória. Sempre prefira less para arquivos > 1 MB."},{type:"success",title:"Instale ripgrep (rg) — o grep moderno",content:"'sudo apt install ripgrep' depois 'rg PADRAO'. É 5-10x mais rápido que grep, ignora .git/, node_modules/, binários por padrão. Sintaxe quase idêntica. Você não volta atrás."}],practiceLabs:[{title:"Investigar últimos boots e erros do sistema",goal:"Aprender a usar tail, grep e less para análise de logs reais.",steps:["Veja as últimas 20 linhas do syslog.","Procure por mensagens de erro nas últimas 1000 linhas.","Conte quantos erros apareceram hoje.","Acompanhe o syslog em tempo real (Ctrl+C para sair)."],command:`# 1) Ultimas 20 linhas
sudo tail -20 /var/log/syslog

# 2) Erros nas ultimas 1000 linhas
sudo tail -1000 /var/log/syslog | grep -i error

# 3) Quantos
sudo tail -1000 /var/log/syslog | grep -ic error

# 4) Em tempo real (faca uma acao - ex plugue um USB - e veja aparecer)
sudo tail -f /var/log/syslog

# Ctrl+C para sair`,verify:"Você deve ver linhas de log datadas e timestamps. Se aparecem erros (warning, error, fail) — investigue cada um. Em sistema saudável: poucos."},{title:"Análise rápida de /etc/passwd",goal:"Combinar grep, cut, sort, wc para extrair informações.",steps:["Conte quantos usuários existem no sistema.","Liste só os nomes (primeira coluna).","Filtre só usuários que têm shell de login (não /usr/sbin/nologin).","Ordene em ordem alfabética."],command:`# Total de usuarios
wc -l < /etc/passwd

# Lista de nomes
cut -d':' -f1 /etc/passwd

# So usuarios com shell de login real
grep -v 'nologin\\|false' /etc/passwd | cut -d':' -f1

# Mesma lista ordenada
grep -v 'nologin\\|false' /etc/passwd | cut -d':' -f1 | sort`,verify:"Você deve ver lista de usuários do seu sistema, com 'root' e seu usuário entre eles. Total geralmente entre 30-50 (incluindo usuários de sistema como www-data, sshd)."}],exercises:[{id:1,question:"Qual a diferença entre cat e less?",answer:"cat joga TUDO na tela de uma vez (trava com arquivo grande). less abre navegavelmente — você usa setas/page up/down e q para sair. Sempre prefira less para arquivos > 1 MB."},{id:2,question:"Como acompanhar um log em tempo real?",answer:"tail -f /caminho/do/log — atualiza ao vivo. Ctrl+C para parar."},{id:3,question:"Como buscar 'error' em todos os arquivos de /var/log de uma vez?",answer:"sudo grep -ri error /var/log/ — o -r recursivo, -i case-insensitive."},{id:4,question:"Como contar quantos usuários têm /bin/bash como shell em /etc/passwd?",answer:"grep -c '/bin/bash' /etc/passwd — o -c conta matches."},{id:5,question:"Como ver as últimas 50 linhas de um arquivo?",answer:"tail -50 arquivo (ou 'tail -n 50 arquivo')."},{id:6,question:"Como extrair só a primeira coluna de um CSV?",answer:"cut -d',' -f1 arquivo.csv (-d = delimitador, -f = campo)."}],references:[{title:"Manual GNU grep",url:"https://www.gnu.org/software/grep/manual/"},{title:"ripgrep no GitHub",url:"https://github.com/BurntSushi/ripgrep"},{title:"awk introdução prática",url:"https://www.gnu.org/software/gawk/manual/"}]}],ak=[{id:"permissoes",title:"Permissões e Propriedade",icon:"🔐",category:"Permissões e Usuários",description:"Como o Linux protege arquivos: usuário/grupo/outros, leitura/escrita/execução, chmod e chown.",objectives:["Ler permissões em formato simbólico (rwxr-xr-x) e octal (755)","Modificar permissões com chmod","Mudar dono e grupo com chown e chgrp","Entender o que é umask e permissões padrão"],content:[`Cada arquivo no Linux tem três entidades de permissão e três tipos de ação:

Entidades:
• u (user/owner) — o dono do arquivo
• g (group) — usuários do mesmo grupo do arquivo
• o (others) — todo mundo

Ações:
• r (read) — ler conteúdo (cat, ls)
• w (write) — modificar (editar, deletar conteúdo)
• x (execute) — executar (se for script/binário) ou ENTRAR (se for diretório)`,`Quando você roda 'ls -l', vê algo como:

-rw-r--r-- 1 wallyson users 1234 abr 25 18:43 nota.txt
drwxr-xr-x 2 wallyson users 4096 abr 25 18:42 documentos/

A primeira coluna são as permissões. Decompondo '-rw-r--r--':
• Caractere 1 — tipo: '-' arquivo, 'd' diretório, 'l' link, 'b' bloco, 'c' caractere
• Caracteres 2-4 — permissões do USER (rw-)
• Caracteres 5-7 — permissões do GROUP (r--)
• Caracteres 8-10 — permissões dos OTHERS (r--)

Resultado: dono pode ler/escrever, grupo só lê, outros só leem.`,`Notação OCTAL (números) — mais rápida e usada em scripts. Cada permissão tem um valor:
• r = 4
• w = 2
• x = 1

Somar dá o número:
• 7 = rwx (4+2+1)
• 6 = rw- (4+2)
• 5 = r-x (4+1)
• 4 = r--
• 0 = ---

Permissão completa = 3 dígitos (user, group, others):
• 755 = rwxr-xr-x (script executável: dono escreve, todos rodam)
• 644 = rw-r--r-- (arquivo normal de texto)
• 600 = rw------- (arquivo privado: só dono lê e escreve, ex: chave SSH)
• 700 = rwx------ (pasta privada: só dono entra)
• 777 = rwxrwxrwx (TUDO para todos — quase sempre INSEGURO!)`,`chmod — change mode. Modifica permissões. Duas sintaxes:

Simbólica (incremental):
chmod u+x script.sh           dono ganha permissão de executar
chmod g-w arquivo             grupo perde permissão de escrever
chmod o=r arquivo             outros têm SOMENTE r
chmod a+r arquivo             a = all (todos) ganham r
chmod ug+x script.sh          dono e grupo ganham x

Octal (define tudo de uma vez):
chmod 755 script.sh           rwxr-xr-x
chmod 644 arquivo.txt         rw-r--r--
chmod -R 755 pasta/           recursivo (cuidado em pasta com mistura)`,`chown — change owner. Muda o DONO de arquivos:

chown wallyson arquivo                    dono = wallyson
chown wallyson:users arquivo              dono E grupo
chown :users arquivo                      só grupo
chown -R wallyson:users pasta/            recursivo (toda a pasta)

chgrp — change group. Só muda o grupo. (chown :users já faz isso, então pouco usado).

É comum usar chown depois de copiar arquivos com sudo, para devolver propriedade ao usuário comum:
sudo chown -R wallyson:wallyson ~/Downloads`,`Permissões em DIRETÓRIOS funcionam diferente:
• r — listar conteúdo (ls). Sem r, você não sabe o que tem dentro.
• w — criar, renomear, apagar arquivos NO diretório. SEM w no diretório, você não consegue apagar arquivo dentro mesmo se tiver permissão no arquivo!
• x — ENTRAR no diretório (cd). Sem x, você não consegue acessar nada dentro.

Por isso pastas geralmente são 755 (todos podem ENTRAR e LISTAR, só dono modifica) ou 700 (só dono). Sem o x, ls com -la lista o nome mas não consegue ler detalhes.`,`Permissões especiais (avançado):
• SUID (4xxx) — quando setado em executável, ele roda com permissão do DONO (não de quem executou). Ex: /usr/bin/passwd tem SUID — qualquer usuário pode mudar a própria senha (que precisa modificar /etc/shadow, dono root).
• SGID (2xxx) — em executável, roda com grupo do dono. Em diretório, novos arquivos herdam o grupo da pasta.
• Sticky bit (1xxx) — em diretório (típico em /tmp), apenas o dono do arquivo pode apagá-lo (não outros, mesmo com w).

Ver com ls: 's' substitui 'x' no SUID/SGID, 't' substitui 'x' no sticky. Ex: rwsr-xr-x = SUID + 755.`,`umask — máscara de permissão padrão. Define quais permissões NÃO dar a novos arquivos. Usuário comum: 022 (default). Significa que arquivos novos pegam:
• Arquivo: 666 - 022 = 644 (rw-r--r--)
• Diretório: 777 - 022 = 755 (rwxr-xr-x)

Ver: comando 'umask'. Mudar temporariamente: 'umask 077' (mais restritivo, só dono). Permanente: edite ~/.bashrc.`],commands:[{command:"ls -l",description:"Mostra permissões em formato simbólico.",example:"ls -l ~/.ssh",output:`drwx------ 2 wallyson wallyson 4096 abr 25 14:00 .
-rw------- 1 wallyson wallyson 3243 abr 25 14:00 id_rsa
-rw-r--r-- 1 wallyson wallyson  743 abr 25 14:00 id_rsa.pub`},{command:"stat",description:"Detalhes completos de arquivo: permissões em octal e simbólico, datas, inode, etc.",example:"stat ~/.bashrc",output:`  Arquivo: '/home/wallyson/.bashrc'
  Acesso: (0644/-rw-r--r--)
   Uid: ( 1000/wallyson)
   Gid: ( 1000/wallyson)`},{command:"chmod",description:"Muda permissões.",example:"chmod 755 script.sh",flags:[{flag:"u+x",description:"Dono ganha executar"},{flag:"g-w",description:"Grupo perde escrever"},{flag:"o=r",description:"Outros = só ler"},{flag:"a+x",description:"Todos ganham executar"},{flag:"-R",description:"Recursivo"},{flag:"755",description:"rwxr-xr-x (executável padrão)"},{flag:"644",description:"rw-r--r-- (arquivo padrão)"},{flag:"600",description:"rw------- (privado, ex: chave SSH)"}]},{command:"chown",description:"Muda dono e/ou grupo.",example:"sudo chown -R wallyson:wallyson /var/www/meu-site",flags:[{flag:"user",description:"Só dono"},{flag:"user:group",description:"Dono e grupo"},{flag:":group",description:"Só grupo"},{flag:"-R",description:"Recursivo"}]},{command:"chgrp",description:"Muda só o grupo.",example:"sudo chgrp users arquivo.txt"},{command:"umask",description:"Mostra/define máscara de permissão padrão.",example:"umask",output:"0022"},{command:"getfacl / setfacl",description:"Permissões avançadas (ACL) — quando precisa de permissão específica para usuário não-dono. Instale: sudo apt install acl.",example:"setfacl -m u:maria:rw arquivo.txt"}],tips:[{type:"danger",title:"chmod 777 quase nunca é a solução",content:"Quando tutorial diz 'rode chmod 777 para resolver', é sinal que o tutorial está ensinando errado. 777 dá permissão total para QUALQUER usuário — risco de segurança grave. Quase sempre o correto é 755 (executável) ou 644 (arquivo) com chown adequado."},{type:"info",title:"ls -l explicado",content:"drwxr-xr-x significa: d=diretório, rwx=dono lê/escreve/entra, r-x=grupo lê/entra (não modifica), r-x=outros igual. Pasta padrão segura para colaboração."},{type:"warning",title:"Sem x em diretório, NADA funciona",content:"Se você fizer 'chmod 644 ~/.ssh' (sem x), depois nem você mesmo consegue 'cd ~/.ssh' nem ler arquivos dentro. Pastas SEMPRE precisam de x para o usuário acessar. Permissão correta para ~/.ssh: 700."}],practiceLabs:[{title:"Configurar permissões corretas para chave SSH",goal:"Aprender as permissões esperadas pelo OpenSSH (que recusa chaves com permissão errada).",steps:["Crie pasta ~/.ssh se não existir.","Defina permissão 700 nela (só dono entra).","Crie um arquivo de chave fictício.","Defina 600 nele (só dono lê/escreve).","Confirme com ls -l."],command:`# 1) Pasta
mkdir -p ~/.ssh

# 2) Permissao da pasta: 700 (so dono entra)
chmod 700 ~/.ssh

# 3) Arquivo de chave (exemplo)
touch ~/.ssh/teste_key

# 4) Permissao 600 na chave
chmod 600 ~/.ssh/teste_key

# 5) Conferir
ls -ld ~/.ssh
ls -l ~/.ssh/teste_key`,expected:`drwx------ 2 wallyson wallyson 4096 abr 25 18:50 /home/wallyson/.ssh
-rw------- 1 wallyson wallyson 0 abr 25 18:50 /home/wallyson/.ssh/teste_key`,verify:"Permissões devem ser drwx------ na pasta e -rw------- no arquivo. Sem isso, OpenSSH se recusa a usar a chave por segurança."},{title:"Tornar um script executável",goal:"Criar um script bash e dar permissão de execução.",steps:["Crie um script com 'hello world'.","Tente executar — vai falhar.","Adicione +x.","Execute novamente."],command:`# 1) Criar script
cat > /tmp/ola.sh << 'EOF'
#!/bin/bash
echo "Ola, $USER!"
EOF

# 2) Tentar executar (FALHA - sem permissao)
/tmp/ola.sh
# Erro esperado: Permission denied

# 3) Adicionar x
chmod +x /tmp/ola.sh

# 4) Executar (FUNCIONA)
/tmp/ola.sh

# 5) Conferir permissoes
ls -l /tmp/ola.sh`,expected:`Ola, wallyson!
-rwxr-xr-x 1 wallyson wallyson 30 abr 25 18:55 /tmp/ola.sh`,verify:"Após chmod +x, o script roda e imprime 'Ola, SEU_USUARIO'. As permissões mostram rwxr-xr-x."}],exercises:[{id:1,question:"O que significa rwxr-xr-x em octal?",answer:"755 (rwx=7, r-x=5, r-x=5)."},{id:2,question:"Como tornar um script executável?",answer:"chmod +x script.sh (ou chmod 755 script.sh)."},{id:3,question:"Qual permissão correta para a pasta ~/.ssh?",answer:"700 (drwx------) — só o dono pode entrar. SSH recusa funcionar com permissões mais abertas."},{id:4,question:"Por que 777 é problemático?",answer:"Dá permissão TOTAL (rwx) para qualquer usuário do sistema. Vulnerabilidade de segurança grave: outros podem ler chaves, modificar binários, escalar privilégios. Quase sempre o correto é 755 (executável) ou 644 (arquivo)."},{id:5,question:"Como mudar dono de uma pasta inteira?",answer:"sudo chown -R novo_dono:novo_grupo /caminho/da/pasta — o -R é recursivo."},{id:6,question:"O que faz o sticky bit (chmod +t)?",answer:"Em diretório (típico /tmp), faz com que apenas o dono do arquivo possa apagá-lo. Sem isso, qualquer usuário com w no diretório poderia apagar arquivos de outros."}],references:[{title:"Wiki Debian — Permissions",url:"https://wiki.debian.org/Permissions"},{title:"Calculadora de chmod",url:"https://chmodcommand.com/"}]},{id:"usuarios",title:"Gestão de Usuários e Grupos",icon:"👥",category:"Permissões e Usuários",description:"Criar usuários, definir senhas, organizar em grupos e entender /etc/passwd, /etc/shadow, /etc/group.",objectives:["Criar e remover usuários (adduser, deluser)","Gerenciar grupos e adicionar usuários a grupos","Definir e expirar senhas","Entender os arquivos /etc/passwd, /etc/shadow, /etc/group"],content:["O Linux é multi-usuário desde sua origem. Cada pessoa que usa o sistema tem uma CONTA separada (usuário), com sua própria home (/home/NOME), suas configs (.bashrc), suas permissões. O usuário 'root' é o superusuário — pode tudo, sem perguntar.",`Existem dois 'tipos' de usuários:
• Usuários humanos — você, sua família, colegas. UID >= 1000. Têm shell de login real (/bin/bash) e home em /home/.
• Usuários de sistema — criados pelos serviços (www-data para Apache, postgres para PostgreSQL, sshd para SSH). UID < 1000. Geralmente sem login (/usr/sbin/nologin) e sem home utilizável.

Ver todos os usuários: 'cat /etc/passwd' ou 'cut -d: -f1 /etc/passwd'.`,`O arquivo /etc/passwd lista todos os usuários, um por linha:

wallyson:x:1000:1000:Wallyson Lopes:/home/wallyson:/bin/bash

Formato (campos separados por :):
• 1: nome do usuário (wallyson)
• 2: x — placeholder, senha real está em /etc/shadow
• 3: UID — User ID numérico (1000 = primeiro usuário humano)
• 4: GID — Group ID primário
• 5: GECOS — nome completo, telefone, etc. (opcional)
• 6: HOME — diretório pessoal
• 7: SHELL — shell de login (/bin/bash, /bin/zsh, /usr/sbin/nologin)

/etc/passwd é LEGÍVEL por todos. As senhas (criptografadas) ficam em /etc/shadow, lido só pelo root.`,`/etc/shadow tem um por linha:

wallyson:$6$randomsalt$hashlongo:19437:0:99999:7:::

Campos:
• 1: usuário
• 2: senha (hash) — começa com $6$ = SHA-512, $y$ = yescrypt (mais novo). Se '!' = bloqueada, '*' = sem senha
• 3: data da última troca (dias desde 1970)
• 4: dias mínimos antes de poder trocar
• 5: dias máximos (após, força troca)
• 6: dias de aviso antes de expirar
• 7: dias após expirar até desabilitar
• 8: data de expiração da conta (raramente usado)

NUNCA edite /etc/shadow direto. Use 'passwd' ou 'chage'.`,`Grupos em /etc/group:

sudo:x:27:wallyson,maria

Campos:
• 1: nome do grupo (sudo)
• 2: x (placeholder)
• 3: GID
• 4: lista de membros (separados por vírgula)

Grupos importantes no Debian:
• sudo — pode usar sudo (precisa estar nele para administrar)
• adm — pode ler logs em /var/log
• cdrom, audio, video, plugdev, netdev — acesso a hardware específico
• wheel — em algumas distros, equivalente ao sudo (em Debian é o sudo)

Ver seus grupos: 'groups' ou 'id'.`,`Comandos para gerenciar usuários:

adduser nome              cria usuário (interativo: pede senha, GECOS) — RECOMENDADO no Debian
useradd -m nome           cria sem perguntar (mais cru, padrão Unix)
passwd nome               define/troca senha (sem nome = troca a sua)
usermod -aG grupo nome    adiciona usuário a grupo (-a = append, importante!)
usermod -L nome           bloqueia conta
usermod -U nome           desbloqueia
userdel nome              apaga usuário (deixa /home)
userdel -r nome           apaga + remove /home + mail`,`Comandos para grupos:

addgroup nome             cria grupo (Debian)
groupadd nome             cria grupo (padrão Unix)
gpasswd -a usuario grupo  adiciona usuario ao grupo
gpasswd -d usuario grupo  remove usuario do grupo
groupdel nome             apaga grupo

Alternar grupos requer logout/login (ou 'newgrp grupo' para abrir shell com grupo ativo).`,`Expiração e bloqueio de contas (importante em servidores):

chage -l nome             ver políticas de senha do usuário
chage -E 2025-12-31 nome  conta expira em 31/12/2025
chage -M 90 nome          senha expira a cada 90 dias
chage -d 0 nome           força troca de senha no próximo login
passwd -l nome            bloqueia conta
passwd -u nome            desbloqueia`],commands:[{command:"adduser",description:"Cria usuário (Debian — interativo).",example:"sudo adduser maria"},{command:"passwd",description:"Define ou troca senha. Sem argumento, troca a sua.",example:"passwd",flags:[{flag:"USUARIO",description:"Trocar senha de outro usuário (root)"},{flag:"-l USUARIO",description:"Bloquear conta"},{flag:"-u USUARIO",description:"Desbloquear"},{flag:"-d USUARIO",description:"Apagar senha (CUIDADO)"}]},{command:"usermod",description:"Modifica usuário existente.",example:"sudo usermod -aG sudo maria",flags:[{flag:"-aG GRUPO",description:"Adicionar a grupo (-a = append, ESSENCIAL)"},{flag:"-L",description:"Bloquear conta"},{flag:"-U",description:"Desbloquear"},{flag:"-s /bin/zsh",description:"Mudar shell"},{flag:"-l NOVO",description:"Renomear"},{flag:"-d /novo/home -m",description:"Mudar home"}]},{command:"userdel",description:"Apaga usuário.",example:"sudo userdel -r maria",flags:[{flag:"-r",description:"Remove /home e mail também"},{flag:"-f",description:"Força (mesmo se logado)"}]},{command:"groups",description:"Mostra grupos do usuário (default: você).",example:"groups maria",output:"maria : maria sudo audio video"},{command:"id",description:"Mostra UID, GID e grupos.",example:"id",output:"uid=1000(wallyson) gid=1000(wallyson) groups=1000(wallyson),27(sudo),24(cdrom)"},{command:"su",description:"Switch User. su - faz login como root (precisa senha de root). su MARIA vira o usuário MARIA.",example:"su -"},{command:"who / w",description:"Quem está logado AGORA. 'w' mostra também o que estão fazendo.",example:"w"},{command:"last",description:"Histórico de logins. Útil para auditoria.",example:"last -10"},{command:"chage",description:"Change Age — política de expiração de senha.",example:"sudo chage -l maria"}],tips:[{type:"warning",title:"Sempre use 'usermod -aG' (com -a)",content:"Sem o -a (append), 'usermod -G grupo usuario' SUBSTITUI todos os grupos do usuário pelo único listado. Se faltar 'sudo' aí, você se trancou fora do sudo. SEMPRE use -aG (append + group)."},{type:"info",title:"Mudou de grupo, faz logout/login",content:"Adicionar usuário a grupo só vale ao próximo login. Você pode forçar abrindo um shell novo com 'newgrp grupo', mas é confuso. Mais simples: logout, login, pronto."},{type:"danger",title:"Nunca apague o usuário 1000 sem pensar",content:"O usuário com UID 1000 é seu primeiro usuário humano — geralmente o admin do sistema. Apagá-lo (sem ter outro com sudo) pode te trancar fora. Sempre crie outro admin antes de remover algum."}],practiceLabs:[{title:"Criar usuário 'aluno' com senha e dar acesso sudo",goal:"Praticar todo o ciclo: criar usuário, dar privilégios, testar.",steps:["Crie o usuário 'aluno' com adduser.","Defina senha quando solicitado.","Adicione 'aluno' ao grupo sudo.","Confirme grupos.","Faça login como aluno e teste sudo."],command:`# 1) Criar usuario (interativo - pede senha e GECOS)
sudo adduser aluno

# 2) Adicionar ao sudo (-a APPEND, -G GROUP)
sudo usermod -aG sudo aluno

# 3) Confirmar grupos
groups aluno

# 4) Testar (em outro terminal ou tty):
# Ctrl+Alt+F2 -> login como 'aluno'
# Ou no proprio terminal:
su - aluno
sudo whoami     # deve responder "root"
exit            # volta para seu usuario

# 5) Verificar /etc/passwd
grep aluno /etc/passwd`,verify:"Após login como aluno, 'sudo whoami' deve retornar 'root'. 'groups aluno' deve listar 'sudo'. /etc/passwd deve ter linha de aluno."},{title:"Auditoria — quem usou sudo recentemente",goal:"Aprender comandos de auditoria de usuários para diagnóstico.",steps:["Liste quem está logado agora.","Liste últimos logins.","Procure quem usou sudo nos últimos dias em /var/log/auth.log."],command:`# 1) Quem ta logado agora
who
w

# 2) Ultimos 10 logins
last -10

# 3) Tentativas de sudo no auth.log
sudo grep sudo /var/log/auth.log | tail -20

# 4) Logins falhos
sudo grep "Failed password" /var/log/auth.log | tail -10`,verify:"Você deve ver registros datados de cada login e cada uso de sudo. Em servidor, esses logs viram trilha de auditoria."}],exercises:[{id:1,question:"Onde ficam armazenadas as senhas dos usuários?",answer:"Em /etc/shadow (hashes criptografados, lido só pelo root). /etc/passwd tem só os dados públicos (nome, UID, home, shell) — a senha real ficaria 'x' aí, indicando que está em shadow."},{id:2,question:"Como criar o usuário 'maria' no Debian?",answer:"sudo adduser maria — interativo, pede senha e dados. Cria home automaticamente."},{id:3,question:"Como adicionar 'maria' ao grupo sudo SEM remover seus grupos atuais?",answer:"sudo usermod -aG sudo maria — o -a (append) é ESSENCIAL. Sem ele, substitui todos os grupos pelo único listado."},{id:4,question:"Como ver os grupos do usuário atual?",answer:"groups (sem argumento) ou id."},{id:5,question:"Como bloquear (sem apagar) a conta de um usuário?",answer:"sudo passwd -l USUARIO (lock). Para desbloquear: sudo passwd -u. Outra forma: sudo usermod -L USUARIO."},{id:6,question:"Qual o range de UID para usuários humanos no Debian?",answer:"UID >= 1000 são humanos. UID < 1000 são contas de sistema (root=0, daemons=1-999)."}],references:[{title:"Wiki Debian — UserManagement",url:"https://wiki.debian.org/UserManagement"},{title:"man adduser",url:"https://manpages.debian.org/bookworm/adduser/adduser.8.en.html"}]},{id:"sudo",title:"sudo e privilégios — Como Virar Root com Segurança",icon:"🛡️",category:"Permissões e Usuários",description:"sudo, su, /etc/sudoers, sudoers.d e como dar permissões granulares sem expor a senha de root.",objectives:["Usar sudo corretamente no dia a dia","Diferenciar sudo, su e su -","Editar /etc/sudoers com segurança (visudo)","Configurar permissões granulares (sudo sem senha para comandos específicos)"],content:["Por que sudo existe? Porque ninguém deveria estar logado como root o tempo todo. Trabalhar como root é perigoso: um 'rm -rf /' acidental destrói o sistema, malware roda com poderes ilimitados, scripts mal escritos quebram coisas. A regra é: trabalhe como usuário comum, eleve privilégios SOMENTE quando precisar.",`sudo = SuperUser DO. Roda UM comando como outro usuário (geralmente root). Sintaxe básica:

sudo COMANDO              roda comando como root
sudo -u maria COMANDO     roda comando como maria
sudo -i                   abre shell de root (= su -, mais limpo)
sudo -s                   abre shell de root preservando suas variáveis
sudo !!                   re-executa o último comando com sudo (clássico: rodou esquecendo o sudo)

Pede SUA senha (não a de root). Cacheia por 15 minutos por padrão — não pede toda hora.`,`su = Switch User. VIRA outro usuário (não roda comando — abre shell completo).

su                        vira root, mas mantém suas variáveis (PWD, PATH, HOME)
su -                      vira root como se fosse novo login (PATH, env, tudo do root)
su maria                  vira maria
su - maria                vira maria com login completo

A grande diferença: su pede senha do usuário-destino (root, no caso). sudo pede a SUA senha. Por isso sudo é mais seguro em ambientes multi-usuário — você não revela a senha de root para todo mundo.`,"No Debian moderno, se você definiu senha de root durante a instalação, o root está habilitado e você usa 'su -' para virá-lo. Se você DEIXOU EM BRANCO, o sudo é configurado para o seu usuário (igual Ubuntu) e o root fica desabilitado para login (mas existe — o sudo eleva você até ele).",`Configuração do sudo está em /etc/sudoers. NUNCA edite esse arquivo direto — use 'sudo visudo' (abre vim/nano e VALIDA sintaxe ao salvar). Erro de sintaxe sem visudo = perda permanente do sudo (só recupera no modo recovery).

Linhas importantes do sudoers padrão Debian:
%sudo   ALL=(ALL:ALL) ALL    "Membros do grupo sudo podem rodar qualquer comando"
root    ALL=(ALL:ALL) ALL    "root pode tudo (óbvio)"`,`Configurações granulares — em vez de editar /etc/sudoers, prefira criar arquivos em /etc/sudoers.d/ (Debian carrega automaticamente). Use 'sudo visudo -f /etc/sudoers.d/meu-arquivo'. Exemplos práticos:

# Maria pode rodar 'systemctl restart nginx' sem senha
maria ALL=(root) NOPASSWD: /usr/bin/systemctl restart nginx

# Carlos pode atualizar pacotes sem senha
carlos ALL=(root) NOPASSWD: /usr/bin/apt update, /usr/bin/apt upgrade

# Grupo deploy pode reiniciar serviço
%deploy ALL=(root) NOPASSWD: /usr/bin/systemctl restart meu-app

Formato: USUARIO HOSTS=(USUARIOS_DESTINO) [TAGS:] COMANDOS`,`TAGS úteis em sudoers:
• NOPASSWD — não pede senha
• PASSWD — pede senha (default)
• SETENV — permite passar -E (preservar variáveis de ambiente)
• NOEXEC — proíbe spawn de subprocessos (anti-shell escape)

SEMPRE prefira NOPASSWD para comandos ESPECÍFICOS (um caminho completo) — nunca para comandos como 'bash' ou 'sh' que dão shell root direto.`,`Sudo tem auditoria: cada uso é logado em /var/log/auth.log. Em produção, monitore isso:

sudo grep -i 'sudo' /var/log/auth.log | tail -20

Verá:
Apr 25 19:01:02 debian sudo: wallyson : TTY=pts/0 ; PWD=/home/wallyson ; USER=root ; COMMAND=/usr/bin/apt update

Ataques tentam apagar /var/log/auth.log para esconder rastros — se você configurar log remoto (rsyslog para servidor central), fica mais difícil.`],commands:[{command:"sudo",description:"Roda comando como root (ou outro usuário com -u).",example:"sudo apt update",flags:[{flag:"-u USUARIO",description:"Roda como outro usuário (não root)"},{flag:"-i",description:"Shell de root completo"},{flag:"-s",description:"Shell de root preservando suas vars"},{flag:"-l",description:"Lista o que VOCÊ pode rodar"},{flag:"-k",description:"Esquece a senha cacheada (vai pedir de novo)"},{flag:"-v",description:"Valida senha (renova cache de 15 min)"}]},{command:"sudo !!",description:"Re-executa o último comando com sudo. Para quando você esqueceu o sudo.",example:`apt update         # erro: precisa root
sudo !!           # re-executa: sudo apt update`},{command:"su",description:"Switch User. Vira outro usuário.",example:"su -",flags:[{flag:"-",description:"Login completo (PATH, env do destino)"},{flag:"USUARIO",description:"Vira USUARIO (default: root)"},{flag:"-c 'comando'",description:"Roda só o comando"}]},{command:"visudo",description:"Abre /etc/sudoers para edição com VALIDAÇÃO de sintaxe ao salvar.",example:"sudo visudo",flags:[{flag:"-f /etc/sudoers.d/arquivo",description:"Edita arquivo separado (recomendado)"},{flag:"-c",description:"Só checa sintaxe (sem editar)"}]},{command:"sudo -l",description:"Lista o que VOCÊ está autorizado a rodar.",example:"sudo -l",output:`User wallyson may run the following commands:
    (ALL : ALL) ALL`},{command:"groups",description:"Mostra seus grupos. 'sudo' deve estar lá para você poder usar sudo.",example:"groups"}],tips:[{type:"danger",title:"NUNCA edite /etc/sudoers sem visudo",content:"Erro de sintaxe em /etc/sudoers QUEBRA O SUDO permanentemente. Sem sudo, você não consegue ARRUMAR o /etc/sudoers (precisaria de root). Recuperação: dar boot em modo recovery (single user) e editar lá. Use SEMPRE 'sudo visudo'."},{type:"warning",title:"NOPASSWD para comandos genéricos = brecha",content:"NUNCA dê 'NOPASSWD: ALL' nem para 'bash', 'sh', 'su', 'sudo'. Isso permite escape para shell root sem senha. NOPASSWD deve ser sempre para comandos específicos com caminho completo: NOPASSWD: /usr/bin/apt update."},{type:"success",title:"Use sudoers.d em vez de editar /etc/sudoers",content:"Crie '/etc/sudoers.d/meu-app' com 'sudo visudo -f /etc/sudoers.d/meu-app'. Vantagens: arquivos pequenos por contexto, fácil de versionar, fácil de remover. O Debian carrega tudo de sudoers.d/ automaticamente."}],practiceLabs:[{title:"Permitir um usuário reiniciar nginx sem senha",goal:"Caso real: você quer que o usuário 'deploy' possa reiniciar o nginx via script CI/CD sem precisar de senha interativa.",steps:["Crie um arquivo dedicado em /etc/sudoers.d/.","Use visudo -f para garantir sintaxe.","Adicione regra para nginx restart sem senha.","Teste como o usuário em questão."],command:`# 1) Editar com visudo (cria se nao existe)
sudo visudo -f /etc/sudoers.d/deploy-nginx

# 2) Cole esta linha:
# deploy ALL=(root) NOPASSWD: /usr/bin/systemctl restart nginx, /usr/bin/systemctl reload nginx, /usr/bin/systemctl status nginx

# Salve (Ctrl+O Enter Ctrl+X no nano).
# Visudo valida automaticamente.

# 3) Conferir o que deploy pode rodar
sudo -u deploy sudo -l

# 4) Testar (precisa logar como deploy primeiro)
# su - deploy
# sudo systemctl reload nginx
# (deve rodar SEM pedir senha)`,verify:"Após criar o arquivo, 'sudo -u deploy sudo -l' deve mostrar a regra. Como deploy, 'sudo systemctl reload nginx' não pede senha."}],exercises:[{id:1,question:"Diferença entre sudo e su?",answer:"sudo roda UM comando como root, pedindo SUA senha. su VIRA root (abre shell completo) e pede a senha do ROOT. sudo é mais seguro pois você não compartilha a senha de root."},{id:2,question:"Você esqueceu o sudo. O que fazer?",answer:"sudo !! — re-executa o último comando com sudo. Bash interpreta '!!' como 'último comando'."},{id:3,question:"Por que NUNCA editar /etc/sudoers diretamente?",answer:"Erro de sintaxe quebra o sudo permanentemente. Use SEMPRE 'sudo visudo' — ele valida sintaxe ao salvar e impede você de salvar arquivo quebrado."},{id:4,question:"Como ver o que VOCÊ pode rodar com sudo?",answer:"sudo -l — lista todas as permissões sudo do seu usuário."},{id:5,question:"Por que NOPASSWD para 'bash' é uma péssima ideia?",answer:"Permite 'sudo bash' sem senha — você abre shell de root direto, ignorando totalmente a auditoria. NOPASSWD deve ser SEMPRE para comandos específicos com caminho completo."},{id:6,question:"Como adicionar configuração sudo sem mexer em /etc/sudoers?",answer:"Crie um arquivo em /etc/sudoers.d/ com 'sudo visudo -f /etc/sudoers.d/nome'. O Debian carrega tudo de sudoers.d/ automaticamente. Vantagem: isolado, fácil de gerenciar."}],references:[{title:"Manual sudoers",url:"https://www.sudo.ws/docs/man/sudoers.man/"},{title:"Wiki Debian — sudo",url:"https://wiki.debian.org/sudo"}]}],rk=[{id:"apt",title:"APT — O Gerenciador de Pacotes do Debian",icon:"📦",category:"Pacotes",description:"apt update, install, upgrade, search, remove, purge — tudo que você faz com software no Debian.",objectives:["Instalar, remover e atualizar pacotes com apt","Buscar pacotes pelo nome ou função","Entender a diferença entre upgrade e full-upgrade","Limpar cache e pacotes não utilizados"],content:["APT (Advanced Package Tool) é o gerenciador de pacotes do Debian e seus derivados (Ubuntu, Mint, Kali). Ele cuida de tudo: baixar pacotes dos repositórios, resolver dependências automaticamente, verificar assinaturas GPG, instalar, atualizar e remover. Antes do APT, instalar software no Linux era um inferno chamado 'dependency hell'.","O comando moderno é simplesmente 'apt' (introduzido em 2014). Antes existia 'apt-get' e 'apt-cache' separados — ainda funcionam, mas em scripts (porque a saída é estável; a do 'apt' muda entre versões). Para uso interativo: 'apt'. Para scripts: 'apt-get'.",`Comandos do dia a dia, em ordem de uso:

sudo apt update                      atualiza LISTA de pacotes (não instala nada)
sudo apt upgrade                     instala atualizações disponíveis
sudo apt full-upgrade                idem, mas pode REMOVER pacotes em conflito
sudo apt install nome                instala pacote
sudo apt install pkg1 pkg2 pkg3      instala vários
sudo apt remove nome                 remove (mantém configs em /etc)
sudo apt purge nome                  remove + apaga configs
sudo apt autoremove                  remove dependências órfãs
apt search palavra                   busca pacotes
apt show pacote                      detalhes de um pacote
apt list --installed                 lista o que está instalado
apt list --upgradable                lista o que tem atualização`,`Diferença entre upgrade e full-upgrade:
• upgrade — atualiza pacotes existentes para versão nova, MAS nunca remove nada. Se a nova versão de um pacote requer remover outro, ele NÃO atualiza.
• full-upgrade (= dist-upgrade) — atualiza tudo, removendo pacotes em conflito se necessário. Mais agressivo, mas o que VOCÊ geralmente quer.

Recomendação: 'sudo apt update && sudo apt full-upgrade' uma vez por semana.`,`Diferença entre remove e purge:
• remove — desinstala o pacote, MAS deixa arquivos de configuração em /etc/. Útil se você vai reinstalar depois (preserva customizações).
• purge — desinstala E apaga configs. 'limpeza completa'. Use se quer de fato remover tudo.

Dica: depois de remove/purge, sempre rode 'sudo apt autoremove' para tirar dependências que ninguém mais usa.`,`Para instalar pacote SEM perguntar 'continuar? [S/n]', use -y (yes a tudo):

sudo apt install -y vim git htop

Útil em scripts. Mas TEME — combinado com pacotes erradosp, pode quebrar o sistema sem você ter chance de cancelar. Para automatizações: combine com 'apt --simulate' antes para revisar.`,`Cache de pacotes baixados fica em /var/cache/apt/archives/. Pode chegar a vários GB. Limpe com:

sudo apt clean                  apaga TUDO do cache
sudo apt autoclean              só apaga pacotes que não estão mais nos repositórios (mais conservador)

Limpar cache não desinstala nada — só apaga os .deb baixados (que poderiam ser úteis para reinstalar offline). Se está sem espaço, mande clean.`,`Erros comuns e soluções:
• 'Unable to fetch archives' — apt update está velho. Rode 'sudo apt update' primeiro.
• 'Could not get lock /var/lib/dpkg/lock' — outro apt já está rodando (talvez apt automático em background). Aguarde ou: 'sudo killall apt apt-get'.
• 'Unmet dependencies' — pacote requer algo que não pode ser instalado. Tente 'sudo apt --fix-broken install'.
• 'NO_PUBKEY' ao update — repositório de terceiro sem chave GPG. Adicione a chave correta.`],commands:[{command:"sudo apt update",description:"Atualiza a LISTA de pacotes disponíveis. Não instala nada. Rode antes de install/upgrade.",example:"sudo apt update"},{command:"sudo apt full-upgrade",description:"Atualiza tudo (pode remover pacotes em conflito). O upgrade que você quer.",example:"sudo apt full-upgrade -y"},{command:"sudo apt install",description:"Instala pacote(s).",example:"sudo apt install -y htop neofetch tree",flags:[{flag:"-y",description:"Assume yes (sem perguntar)"},{flag:"--no-install-recommends",description:"Não instala recomendações"},{flag:"-t bookworm-backports",description:"Instala da branch backports"},{flag:"--reinstall",description:"Reinstala mesmo se já está instalado"}]},{command:"sudo apt remove / purge",description:"Remove pacote (purge também apaga configs).",example:"sudo apt purge libreoffice-*",flags:[{flag:"remove",description:"Mantém configs em /etc"},{flag:"purge",description:"Apaga configs também"},{flag:"--autoremove",description:"Junto, remove órfãos"}]},{command:"sudo apt autoremove",description:"Remove dependências instaladas automaticamente que ninguém mais usa.",example:"sudo apt autoremove --purge -y"},{command:"apt search",description:"Busca pacotes pelo nome OU descrição.",example:"apt search 'screen recorder'"},{command:"apt show",description:"Detalhes de um pacote: versão, dependências, descrição.",example:"apt show vim"},{command:"apt list --installed",description:"Lista pacotes instalados.",example:"apt list --installed | wc -l"},{command:"apt list --upgradable",description:"Lista pacotes com atualização disponível.",example:"apt list --upgradable"},{command:"apt-cache policy",description:"Mostra de qual repositório vem um pacote, com prioridades.",example:"apt-cache policy firefox-esr"},{command:"sudo apt clean",description:"Apaga cache de pacotes baixados (libera espaço em /var/cache/apt).",example:"sudo apt clean"}],tips:[{type:"info",title:"Comando 'mágico' do dia a dia",content:"sudo apt update && sudo apt full-upgrade -y && sudo apt autoremove -y && sudo apt clean — atualiza tudo, limpa órfãos e libera cache. Pode rodar uma vez por semana sem medo."},{type:"warning",title:"NUNCA rode 'apt' duas vezes em paralelo",content:"Apt usa lock em /var/lib/dpkg/lock. Se você rodar dois 'apt install' ao mesmo tempo (ex: dois terminais), o segundo dá erro. Espere o primeiro terminar."},{type:"success",title:"Use --simulate para grandes mudanças",content:"Antes de 'sudo apt full-upgrade' que vai mexer em centenas de pacotes, rode 'sudo apt --simulate full-upgrade' — mostra TUDO que faria sem fazer. Lê com calma. Se OK, roda sem o --simulate."}],practiceLabs:[{title:"Workflow completo de manutenção semanal",goal:"Praticar o ciclo update-upgrade-cleanup que você deveria rodar semanalmente.",steps:["Atualize a lista.","Veja quantos pacotes têm atualização.","Atualize tudo.","Remova órfãos.","Limpe cache.","Cheque tamanho de /var/cache/apt antes e depois."],command:`# 1) Tamanho inicial do cache
du -sh /var/cache/apt/archives/

# 2) Atualizar lista
sudo apt update

# 3) Quantos tem atualizacao?
apt list --upgradable 2>/dev/null | wc -l

# 4) Atualizar tudo
sudo apt full-upgrade -y

# 5) Remover orfaos
sudo apt autoremove --purge -y

# 6) Limpar cache
sudo apt clean

# 7) Tamanho depois
du -sh /var/cache/apt/archives/`,verify:"O tamanho de /var/cache/apt/archives deve cair drasticamente após 'apt clean'. Se você atualizou kernel, reinicie depois."},{title:"Encontrar e instalar uma alternativa de software",goal:"Praticar o fluxo: 'queria um app para X, como acho?'",steps:["Busque pacotes com 'reproduzir musica'.","Veja detalhes de 2-3 candidatos.","Instale um.","Teste se funciona."],command:`# 1) Buscar
apt search 'music player' | head -20

# 2) Detalhes de candidatos populares
apt show clementine 2>/dev/null | head -20
apt show audacious 2>/dev/null | head -20

# 3) Escolher e instalar (audacious eh leve)
sudo apt install -y audacious

# 4) Testar
audacious --help | head -5

# 5) Caso queira desinstalar depois:
# sudo apt purge audacious
# sudo apt autoremove --purge`,verify:"O 'audacious --help' deve funcionar. No menu de aplicativos, deve aparecer 'Audacious'. Conseguiu encontrar e instalar = você sabe o fluxo."}],exercises:[{id:1,question:"Diferença entre 'apt update' e 'apt upgrade'?",answer:"update atualiza a LISTA de pacotes (não instala nada). upgrade instala as atualizações disponíveis."},{id:2,question:"Diferença entre 'apt remove' e 'apt purge'?",answer:"remove desinstala o pacote mas mantém configs em /etc/. purge desinstala E apaga configs."},{id:3,question:"Como instalar um pacote sem confirmar 'S/n'?",answer:"sudo apt install -y nome — o -y aceita tudo automaticamente."},{id:4,question:"Como liberar espaço removendo cache de pacotes baixados?",answer:"sudo apt clean — apaga TUDO em /var/cache/apt/archives/."},{id:5,question:"Por que usar full-upgrade em vez de upgrade?",answer:"full-upgrade pode REMOVER pacotes em conflito para conseguir atualizar tudo. upgrade não remove nada — pode deixar pacotes desatualizados se houver conflito. Em sistemas estáveis, full-upgrade é seguro e mais completo."},{id:6,question:"Apt deu erro 'Could not get lock'. O que aconteceu?",answer:"Outro processo apt está rodando (talvez atualização automática em segundo plano). Aguarde 1-2 minutos. Se persistir: sudo killall apt apt-get; sudo rm /var/lib/dpkg/lock-frontend."}],references:[{title:"Manual oficial do APT",url:"https://manpages.debian.org/bookworm/apt/apt.8.en.html"},{title:"Wiki Debian — Apt",url:"https://wiki.debian.org/Apt"}]},{id:"dpkg",title:"dpkg — O Nível Baixo do APT",icon:"🔩",category:"Pacotes",description:"Quando você precisa instalar um .deb manual, ver de qual pacote vem um arquivo, ou listar arquivos de um pacote.",objectives:["Instalar pacotes .deb baixados manualmente","Descobrir de qual pacote vem um arquivo (dpkg -S)","Listar arquivos instalados por um pacote (dpkg -L)","Reconfigurar pacotes (dpkg-reconfigure)"],content:["dpkg é a ferramenta de baixo nível do Debian. O apt é uma camada amigável SOBRE o dpkg. Quando você roda 'apt install pacote', por baixo dos panos é o dpkg que instala. dpkg trabalha apenas com arquivos .deb LOCAIS — não baixa nada da internet, não resolve dependências.",`Quando usar dpkg em vez de apt:
• Instalar um .deb que você baixou manualmente (Google Chrome, VSCode, Discord, Steam — todos vêm como .deb fora do repositório oficial).
• Descobrir de qual pacote vem um arquivo qualquer.
• Listar TODOS os arquivos que um pacote instalou.
• Forçar instalação ignorando alguma checagem (raro, perigoso).
• Reconfigurar um pacote (re-rodar o setup interativo do install).`,`Para instalar .deb manualmente — método antigo:

sudo dpkg -i arquivo.deb

Problema: se faltar dependências, dpkg instala parcialmente e dá erro. Solução: rodar 'sudo apt --fix-broken install' depois (apt resolve as dependências). Ou método moderno simples:

sudo apt install ./arquivo.deb

O ./ é importante (apt distingue entre nome de pacote e arquivo local). Apt resolve dependências automaticamente.`,`Casos clássicos onde você usa dpkg/apt local:
• Google Chrome — não está no repositório Debian. Baixe o .deb de google.com/chrome.
• VSCode — Microsoft distribui .deb. Ou adicione o repositório deles.
• Discord — distribui .deb direto.
• Slack, Steam, AnyDesk — todos via .deb.

Procedimento: baixar o .deb, instalar com 'sudo apt install ./arquivo.deb'.`,`dpkg para investigação: descobrir de qual pacote vem um arquivo.

Ex: você quer saber de qual pacote vem o /usr/bin/firefox-esr:

dpkg -S /usr/bin/firefox-esr
# Output: firefox-esr: /usr/bin/firefox-esr

Útil para entender o que cada coisa faz no sistema. Ou para descobrir 'que pacote eu tenho que instalar para ter o comando X?' (faz isso pela busca reversa, ou apt-file).`,`Listar TODOS os arquivos que um pacote instalou:

dpkg -L vim

Verá tudo: binários em /usr/bin, manuais em /usr/share/man, configs em /etc, etc. Útil para entender o que um pacote 'mexe' no sistema.`,`Reconfigurar um pacote (re-rodar setup interativo) — útil quando algo deu errado durante a instalação:

sudo dpkg-reconfigure tzdata          troca timezone
sudo dpkg-reconfigure locales         troca idiomas
sudo dpkg-reconfigure keyboard-configuration
sudo dpkg-reconfigure unattended-upgrades

Muito útil para corrigir setup feito errado durante a instalação.`,`Listar pacotes instalados (alternativa ao apt list --installed):

dpkg -l                          # lista TUDO (pode ser longo)
dpkg -l | grep firefox           # filtra
dpkg --get-selections            # mais simples (uma coluna)

A primeira coluna do 'dpkg -l' tem letras: 'ii' = instalado OK, 'rc' = removido mas com configs, 'pn' = removido completamente. Use 'dpkg -l | grep ^rc' para encontrar configs órfãs e limpar com 'apt purge'.`],commands:[{command:"sudo dpkg -i",description:"Instala arquivo .deb.",example:"sudo dpkg -i ~/Downloads/google-chrome-stable.deb"},{command:"sudo apt install ./arquivo.deb",description:"Forma moderna e melhor — instala .deb e RESOLVE dependências automaticamente.",example:"sudo apt install ./code_1.88.0-amd64.deb"},{command:"sudo apt --fix-broken install",description:"Resolve dependências quebradas após dpkg parcial.",example:"sudo apt --fix-broken install"},{command:"dpkg -S",description:"Search — de qual pacote vem este arquivo?",example:"dpkg -S /usr/bin/firefox-esr",output:"firefox-esr: /usr/bin/firefox-esr"},{command:"dpkg -L",description:"List — quais arquivos foram instalados pelo pacote?",example:"dpkg -L vim | head -10"},{command:"dpkg -l",description:"Lista todos os pacotes (estados: ii=instalado, rc=removido com configs).",example:"dpkg -l | grep firefox"},{command:"sudo dpkg --remove",description:"Remove pacote (mantém configs).",example:"sudo dpkg --remove firefox-esr"},{command:"sudo dpkg --purge",description:"Remove pacote + configs.",example:"sudo dpkg --purge firefox-esr"},{command:"sudo dpkg-reconfigure",description:"Reabre o setup interativo de um pacote.",example:"sudo dpkg-reconfigure tzdata"},{command:"apt-file",description:"Busca arquivo em pacotes NÃO INSTALADOS. Instale: sudo apt install apt-file && sudo apt-file update.",example:"apt-file search /usr/bin/python3"}],tips:[{type:"success",title:"Prefira 'sudo apt install ./arquivo.deb'",content:"Em vez de 'sudo dpkg -i arquivo.deb' + 'sudo apt --fix-broken install', faça direto 'sudo apt install ./arquivo.deb'. O ./ é essencial. Apt baixa dependências e instala tudo numa tacada."},{type:"warning",title:"Cuidado com .deb de fontes desconhecidas",content:"Um .deb pode conter scripts pré/pós-instalação que rodam como ROOT durante o install. Baixar .deb de site desconhecido = dar root para o autor. Só instale .debs de fontes oficiais (google.com, microsoft.com, etc.)."}],practiceLabs:[{title:"Instalar Google Chrome via .deb",goal:"Praticar o fluxo de instalar software .deb que não está no repositório Debian.",steps:["Baixe o .deb do site oficial.","Instale com apt (resolve dependências automaticamente).","Confirme com dpkg."],command:`# 1) Baixar
cd ~/Downloads
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb

# 2) Instalar (apt resolve dependencias)
sudo apt install -y ./google-chrome-stable_current_amd64.deb

# 3) Confirmar
dpkg -l | grep google-chrome

# 4) Conferir que ele criou repositorio para receber atualizacoes
ls /etc/apt/sources.list.d/

# 5) Limpar download
rm google-chrome-stable_current_amd64.deb`,verify:"Após instalar, 'google-chrome --version' deve responder. No menu de apps deve aparecer 'Google Chrome'. O Chrome adiciona automaticamente seu repositório em sources.list.d/, então futuras atualizações vêm via apt update."},{title:"Investigar de onde vem cada arquivo do sistema",goal:"Aprender a usar dpkg -S para entender o que cada coisa é.",steps:["Descubra de qual pacote vem o /usr/bin/cat.","Descubra de qual pacote vem o /etc/hostname.","Liste os primeiros 10 arquivos do pacote 'bash'.","Encontre arquivos de config de algum pacote."],command:`# De onde vem o cat?
dpkg -S /usr/bin/cat

# E o /etc/hostname?
dpkg -S /etc/hostname

# Lista de arquivos do bash
dpkg -L bash | head -10

# Arquivos de config (/etc) do nano
dpkg -L nano | grep '^/etc'`,verify:"/usr/bin/cat vem de coreutils. /etc/hostname vem de base-files (não de pacote específico do hostname). bash instala /bin/bash, /etc/skel/.bashrc, etc."}],exercises:[{id:1,question:"Quando usar dpkg em vez de apt?",answer:"Para instalar arquivo .deb local (Chrome, VSCode, Discord), descobrir de qual pacote vem um arquivo (dpkg -S), ou listar arquivos de um pacote (dpkg -L). Apt é melhor para tudo do dia a dia."},{id:2,question:"Forma MODERNA de instalar um arquivo .deb?",answer:"sudo apt install ./arquivo.deb (com ./). Apt resolve dependências automaticamente."},{id:3,question:"De qual pacote vem o /usr/bin/python3?",answer:"dpkg -S /usr/bin/python3 — o output mostra o pacote (provavelmente python3-minimal ou python3.X)."},{id:4,question:"Como listar TODOS os arquivos instalados pelo pacote vim?",answer:"dpkg -L vim"},{id:5,question:"Após dpkg -i deu erro de dependência. O que fazer?",answer:"sudo apt --fix-broken install — apt baixa as dependências faltantes e completa a instalação."},{id:6,question:"Como reconfigurar o timezone após instalar errado?",answer:"sudo dpkg-reconfigure tzdata — reabre o menu interativo de timezone."}],references:[{title:"Manual dpkg",url:"https://manpages.debian.org/bookworm/dpkg/dpkg.1.en.html"},{title:"Debian Policy Manual (avançado)",url:"https://www.debian.org/doc/debian-policy/"}]},{id:"backports-flatpak",title:"Backports, Flatpak e Snap — Software Mais Novo",icon:"✨",category:"Pacotes",description:"Como conseguir software mais novo que o que vem no Debian estável: backports, Flatpak (Flathub) e Snap.",objectives:["Habilitar e usar Debian backports","Instalar e usar Flatpak (Flathub)","Conhecer Snap (Ubuntu) e por que Debian prefere Flatpak","Decidir qual usar para cada caso"],content:["O Debian Stable é, por design, conservador. Pacotes ficam congelados na versão lançada (LibreOffice 7.4, Firefox ESR 115, kernel 6.1 no bookworm). Isso garante estabilidade — mas às vezes você quer software mais novo. Existem 3 caminhos:",`1. Debian Backports — pacotes da branch testing recompilados para stable. Maneira oficial e segura. Cobre kernel, LibreOffice, libvirt, podman, etc.

Para habilitar:

echo 'deb http://deb.debian.org/debian bookworm-backports main contrib non-free non-free-firmware' | sudo tee /etc/apt/sources.list.d/backports.list
sudo apt update

Instalar pacote do backports (precisa do '-t'):

sudo apt install -t bookworm-backports linux-image-amd64

O -t é importante — sem ele, apt pega da stable normal. Não habilite backports sem precisar (tem menos teste que stable).`,`2. Flatpak — sistema universal de pacotes sandboxados. Cada app vem com suas dependências (= pode rodar versão diferente da do sistema). Roda isolado em sandbox (mais seguro). Repositório principal: Flathub (https://flathub.org/).

Instalar Flatpak no Debian:

sudo apt install -y flatpak
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
# REINICIE o sistema (ou só faça logout/login) para o menu de apps achar os Flatpaks

Instalar app via Flatpak:

flatpak install flathub org.signal.Signal
flatpak install flathub org.telegram.desktop
flatpak install flathub com.spotify.Client
flatpak install flathub com.discordapp.Discord`,`Comandos úteis do Flatpak:

flatpak list                               apps instalados
flatpak update                             atualiza tudo
flatpak run NOME                           roda app pela CLI
flatpak uninstall NOME                     desinstala
flatpak uninstall --unused                 limpa runtimes não usados
flatpak search PALAVRA                     busca

Apps Flatpak aparecem no menu normalmente (depois do logout/login).`,`3. Snap — alternativa criada pela Canonical (Ubuntu). Tecnicamente similar ao Flatpak (sandbox + dependências bundle), mas é controverso: o repositório (Snap Store) é PROPRIETÁRIO da Canonical, e a Canonical tem feito coisas que a comunidade Debian não gostou (forçar Firefox-snap em Ubuntu, por exemplo).

No Debian, Snap não é recomendado oficialmente. Você PODE instalar (sudo apt install snapd), mas a comunidade Debian sugere Flatpak. Se um app SÓ existe como snap (raro hoje), tudo bem instalar.`,`Quando usar cada um:
• Software de sistema (kernel, drivers, daemons, ferramentas CLI) → APT padrão. Backports se precisar versão nova.
• Apps gráficos modernos (Spotify, Discord, Steam, Telegram, OBS Studio, Inkscape) → Flatpak/Flathub. Sandbox + sempre atualizado.
• Software corporativo proprietário (Zoom, AnyDesk) → APT (.deb do site).
• Editor de código (VSCode, JetBrains) → APT (repositório do fornecedor) ou Flatpak.`,`Vantagens do Flatpak para apps gráficos:
• Versões sempre atualizadas (não esperam release de Debian).
• Não polui /usr — instala em /var/lib/flatpak.
• Sandbox — app não acessa arquivos fora de ~/Downloads sem permissão.
• Isolado — atualização não quebra outras coisas.
• Funciona igual em qualquer distro (Debian, Fedora, Arch).

Desvantagens:
• Cada app traz suas dependências = ocupa mais disco (Spotify Flatpak ~250 MB).
• Performance levemente menor (sandbox custa).
• Integração visual pode ser imperfeita (tema, cursor).`,`Configurar permissões granulares de Flatpak — útil para dar acesso a pastas específicas:

flatpak override --user --filesystem=~/Documentos com.spotify.Client

GUI gráfica: instale 'Flatseal' (também via Flatpak: 'flatpak install flathub com.github.tchx84.Flatseal'). Permite gerenciar permissões de qualquer Flatpak instalado.`],commands:[{command:"sudo apt install -t bookworm-backports",description:"Instala pacote da branch backports (em vez de stable).",example:"sudo apt install -t bookworm-backports linux-image-amd64"},{command:"flatpak install",description:"Instala app Flatpak (do Flathub por padrão).",example:"flatpak install flathub org.signal.Signal"},{command:"flatpak run",description:"Roda app Flatpak.",example:"flatpak run org.signal.Signal"},{command:"flatpak list",description:"Lista Flatpaks instalados.",example:"flatpak list"},{command:"flatpak update",description:"Atualiza todos os Flatpaks.",example:"flatpak update -y"},{command:"flatpak search",description:"Busca app no Flathub.",example:"flatpak search spotify"},{command:"flatpak uninstall",description:"Remove Flatpak.",example:"flatpak uninstall com.spotify.Client"},{command:"flatpak override",description:"Configura permissões de um Flatpak.",example:"flatpak override --user --filesystem=~/Música com.spotify.Client"}],tips:[{type:"info",title:"Apps Flatpak não aparecem no menu?",content:"Faça LOGOUT/LOGIN depois de instalar Flatpak pela primeira vez. O menu de apps só varre /var/lib/flatpak/exports/ na sessão nova."},{type:"warning",title:"Não instale o mesmo app em dois lugares",content:"Não tenha Spotify do .deb + Spotify Flatpak. Vão coexistir, ocupar memória dobrada e te confundir. Escolha um."},{type:"success",title:"Flatseal para gerenciar permissões",content:"Instale 'Flatseal' (flatpak install flathub com.github.tchx84.Flatseal) — interface gráfica para controlar quais pastas/dispositivos cada Flatpak acessa. Especialmente útil se um Flatpak não consegue acessar suas pastas."}],practiceLabs:[{title:"Setup Flatpak completo + instalar apps populares",goal:"Habilitar Flatpak no seu Debian e instalar 5 apps comuns.",steps:["Instale Flatpak.","Adicione o repositório Flathub.","Faça logout/login.","Instale Telegram, Signal, Spotify, Discord, OBS Studio.","Confirme que aparecem no menu."],command:`# 1) Instalar Flatpak
sudo apt install -y flatpak

# 2) Adicionar Flathub
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo

# 3) Logout/login (importante!)
# Faca isso pelo menu da interface

# 4) Apos logar de novo, instalar apps
flatpak install -y flathub org.telegram.desktop
flatpak install -y flathub org.signal.Signal
flatpak install -y flathub com.spotify.Client
flatpak install -y flathub com.discordapp.Discord
flatpak install -y flathub com.obsproject.Studio

# 5) Conferir
flatpak list`,verify:"Após login, 'flatpak list' mostra os 5 apps. No menu de aplicativos, eles aparecem normalmente — clica e abre."}],exercises:[{id:1,question:"Quando usar backports?",answer:"Quando você precisa de uma versão MAIS NOVA de um pacote DE SISTEMA (kernel, libvirt, postgres) que está congelado no stable. Mantém o resto do sistema estável."},{id:2,question:"Por que Flatpak e não Snap no Debian?",answer:"Flatpak tem repositório aberto (Flathub é gerenciado pela comunidade). Snap depende do Snap Store proprietário da Canonical. A comunidade Debian prefere soluções 100% abertas."},{id:3,question:"Como instalar Spotify via Flatpak?",answer:"flatpak install flathub com.spotify.Client (depois de adicionar Flathub e fazer logout/login)."},{id:4,question:"Por que apps Flatpak ocupam mais espaço que .deb?",answer:"Cada Flatpak traz suas dependências (runtime KDE, GTK, etc.) bundled em vez de compartilhar com o sistema. Trade-off: mais espaço = mais isolamento e versões garantidas."},{id:5,question:"Como atualizar TODOS os Flatpaks de uma vez?",answer:"flatpak update -y"},{id:6,question:"Qual flag obrigatória para instalar pacote do backports?",answer:"-t bookworm-backports (sem ele, apt pega a versão da stable normal)."}],references:[{title:"Debian Backports oficial",url:"https://backports.debian.org/"},{title:"Flathub (catálogo Flatpak)",url:"https://flathub.org/"},{title:"Flatseal (gerenciar permissões)",url:"https://flathub.org/apps/com.github.tchx84.Flatseal"}]}],nk=[{id:"processos",title:"Processos e Monitoramento",icon:"⚙️",category:"Sistema",description:"ps, top, htop, kill — ver o que está rodando, quanto consome, e como matar processos travados.",objectives:["Listar processos com ps e filtrar pelos relevantes","Usar top/htop para monitoramento em tempo real","Matar processos com kill (sinais SIGTERM, SIGKILL)","Identificar quem está consumindo CPU ou memória"],content:["Tudo que está rodando no Linux é um processo: o kernel, seu shell, o navegador, os serviços (sshd, nginx). Cada processo tem PID (Process ID), PPID (Parent PID), usuário dono, uso de CPU/memória. Você precisa saber listá-los e matá-los quando necessário.",`ps — process snapshot. Lista processos. Sintaxe BSD (mais comum):

ps aux                    todos os processos de todos os usuários
ps aux | grep firefox     filtra firefox
ps -ef                    formato System V (alternativo)
ps -ef --forest           árvore (mostra parent-child)

Colunas importantes do 'ps aux':
• USER — quem rodou
• PID — id único
• %CPU — uso de CPU agora
• %MEM — uso de RAM
• VSZ — memória virtual reservada (KB)
• RSS — memória RAM real (KB)
• STAT — estado (R=rodando, S=sleeping, Z=zombie, D=disk wait)
• START — quando iniciou
• COMMAND — o comando`,`top — monitor em tempo real. Atualiza a cada 3 segundos. Já vem instalado. Atalhos dentro do top:
• q — sair
• h — ajuda
• M — ordenar por memória
• P — ordenar por CPU (default)
• T — ordenar por tempo total
• k — matar processo (pede PID)
• 1 — mostra cada CPU separadamente (multi-core)
• z — colorir
• Espaço — atualizar agora

Útil mas a interface é dos anos 80. Considere htop.`,`htop — top moderno e amigável. Instale: 'sudo apt install htop'. Cores, scroll horizontal, mouse, atalhos visíveis no rodapé:
• F5 — modo árvore (parent-child)
• F6 — escolher coluna de ordenação
• F9 — matar processo
• F10 — sair
• Espaço — selecionar (para matar vários)
• / — buscar processo pelo nome

htop é objetivamente melhor que top. Use htop sempre.`,`Matar processo com kill — envia SINAL ao processo:

kill PID                  envia SIGTERM (15) — pede para terminar (graceful)
kill -9 PID               envia SIGKILL (9) — força morte (não negocia)
kill -15 PID              = kill PID
kill -HUP PID             SIGHUP (1) — recarrega (típico para serviços)
kill -STOP PID            pausa (depois -CONT continua)

Sempre tente SIGTERM primeiro. SIGKILL é só se não responder em 10 segundos. Processos podem ignorar SIGTERM, NÃO podem ignorar SIGKILL.`,`Matar pelo NOME (mais prático que descobrir PID):

pkill firefox             mata todos chamados firefox
pkill -9 firefox          force kill
pkill -u maria            mata todos os processos de maria
killall firefox           similar a pkill (sintaxe ligeiramente diferente)

pgrep — só LISTA PIDs (sem matar):

pgrep firefox             1234\\n5678
pgrep -u maria            mostra PIDs de maria`,`Processos em background:
• comando &              roda em background (você não fica esperando)
• Ctrl+Z                 pausa o processo atual (manda para background pausado)
• jobs                   lista jobs em background
• fg                     traz último job para foreground
• fg %1                  traz job 1 para foreground
• bg                     continua job pausado em background
• nohup comando &        roda independente da sessão (sobrevive a logout)
• disown                 desassocia job da sessão (similar a nohup)`,"Processos zumbis (Z) — processos que terminaram mas o pai não 'colheu' o status. Ocupam só uma entrada na tabela de processos (não consomem CPU/RAM). Geralmente inofensivos, mas se acumular muito pode esgotar PIDs disponíveis. Solução: matar o PROCESSO PAI (que está bugado). Veja com 'ps aux | grep ' Z'' ou 'top' (filtre por estado Z)."],commands:[{command:"ps aux",description:"Lista todos os processos do sistema (formato BSD).",example:"ps aux | grep firefox"},{command:"ps -ef --forest",description:"Mostra processos em formato árvore (parent-child).",example:"ps -ef --forest | head -30"},{command:"top",description:"Monitor em tempo real. q sai, M ordena por memória, P por CPU.",example:"top"},{command:"htop",description:"Top moderno (instale com: sudo apt install htop). Use sempre.",example:"htop"},{command:"kill",description:"Envia sinal a processo pelo PID.",example:"kill -9 12345",flags:[{flag:"-15 / SIGTERM",description:"Pede para encerrar (default, graceful)"},{flag:"-9 / SIGKILL",description:"Força morte (não negocia)"},{flag:"-HUP / -1",description:"Recarrega (serviços)"},{flag:"-STOP",description:"Pausa o processo"},{flag:"-CONT",description:"Resume processo pausado"}]},{command:"pkill / killall",description:"Mata processos pelo NOME.",example:"pkill firefox",flags:[{flag:"-9 NOME",description:"Force kill"},{flag:"-u USUARIO",description:"Mata processos do usuário"},{flag:"-f 'string'",description:"Match no command line completo"}]},{command:"pgrep",description:"Lista PIDs sem matar.",example:"pgrep -u $USER firefox"},{command:"jobs / fg / bg",description:"Gerenciar jobs em background do shell.",example:`comando &     # background
jobs          # lista
fg %1         # traz job 1`},{command:"nohup",description:"Roda comando que sobrevive a logout.",example:"nohup ./script-longo.sh > saida.log 2>&1 &"},{command:"uptime",description:"Carga média do sistema (load average).",example:"uptime",output:" 19:23:51 up 2 days,  5:18,  2 users,  load average: 0.42, 0.38, 0.30"}],tips:[{type:"warning",title:"Tente SIGTERM antes de SIGKILL",content:"kill (sem -9) pede educadamente para encerrar — o processo pode salvar dados, fechar arquivos, terminar transações. kill -9 é a marreta — pode corromper dados (banco de dados aberto, arquivo sendo escrito). Use -9 só se SIGTERM não funcionou em 10s."},{type:"info",title:"Load average — o que significa?",content:"1.0 = um CPU ocupado 100%. Em máquina de 4 cores, 4.0 = todos ocupados. Acima do número de cores = sobrecarga (processos esperando). Os 3 números são média de 1, 5 e 15 minutos. Se o de 15 min está alto e o de 1 min baixo, foi pico passado."},{type:"success",title:"htop com cor para múltiplos cores",content:"Aperte F2 (setup) > Meters > escolha 'Detailed CPUs (1/cores per row)'. Cada core fica visível separado. Útil para ver se um processo está em um core só (single-thread bound)."}],practiceLabs:[{title:"Caçar o processo que está consumindo CPU",goal:"Praticar identificar e matar processo problemático.",steps:["Em um terminal: rode 'yes > /dev/null &' (consome CPU).","Em outro terminal: abra htop e identifique o 'yes'.","Mate via htop (F9, escolha SIGTERM, Enter).","Confirme que sumiu."],command:`# 1) Criar processo que consome CPU
yes > /dev/null &

# 2) Ver via htop
htop
# Use F4 para filtrar e digite 'yes'
# Selecione com setas, F9 para matar, escolha SIGTERM (15), Enter

# Alternativamente via kill direto
pgrep yes
# kill PID_AQUI

# Forma rapida via pkill
pkill yes

# Confirmar
pgrep yes`,verify:"Após matar, 'pgrep yes' não retorna nada. O htop mostra 0 processos chamados 'yes'. CPU volta ao normal."},{title:"Identificar o que mais consome RAM no sistema",goal:"Análise prática de quem está usando memória.",steps:["Veja overview com free.","Liste top 10 por uso de memória com ps.","Use htop para ver em tempo real."],command:`# 1) Visao geral de RAM
free -h

# 2) Top 10 processos por memoria
ps aux --sort=-%mem | head -11

# 3) Top 10 por CPU
ps aux --sort=-%cpu | head -11

# 4) Em tempo real (htop)
htop
# Aperte F6, escolha PERCENT_MEM`,verify:"Você identifica os 3 processos que mais consomem RAM no seu sistema. Geralmente: navegador, editor de código, IDE."}],exercises:[{id:1,question:"Diferença entre kill -15 e kill -9?",answer:"-15 (SIGTERM) pede educadamente para encerrar — processo pode salvar dados. -9 (SIGKILL) força a morte imediata — pode corromper dados. SEMPRE tente -15 primeiro."},{id:2,question:"Como matar todos os processos do firefox de uma vez?",answer:"pkill firefox (ou killall firefox)."},{id:3,question:"Como rodar um comando em background e poder sair do terminal sem matá-lo?",answer:"nohup comando > saida.log 2>&1 & — nohup ignora SIGHUP (sinal enviado quando você desloga)."},{id:4,question:"O que é load average de 4.5 numa máquina de 4 cores?",answer:"Sobrecarga leve — todos os 4 cores estão 100% ocupados E há 0.5 processos a mais esperando. Sistema responde lento. Acima de 8 (2x cores) = sobrecarga grave."},{id:5,question:"Como ver o uso de memória dos top 5 processos?",answer:"ps aux --sort=-%mem | head -6 (cabeçalho + 5 processos)."},{id:6,question:"O que é um processo zumbi?",answer:"Processo que terminou mas o pai não coletou o status (estado Z). Ocupa só uma entrada na tabela. Inofensivo se poucos. Solução: matar o processo PAI (que está bugado)."}],references:[{title:"htop site",url:"https://htop.dev/"},{title:"Manual ps",url:"https://manpages.debian.org/bookworm/procps/ps.1.en.html"}]},{id:"systemd",title:"Systemd e Serviços",icon:"🚀",category:"Sistema",description:"systemctl start/stop/enable/disable, status, logs — gerencie serviços do Debian.",objectives:["Listar, iniciar, parar e reiniciar serviços","Habilitar/desabilitar serviços no boot","Ver status e logs de um serviço","Criar um serviço próprio (.service unit file)"],content:["systemd é o sistema de inicialização (init system) do Debian moderno. É o primeiro processo a rodar (PID 1) e cuida de TUDO: iniciar serviços no boot, gerenciar dependências entre eles, lidar com targets (modo gráfico vs terminal), logs unificados, timers, montagens. Substitui o antigo SysV init.",`Um serviço (service) no systemd é descrito por um arquivo .service (chamado 'unit file'). Os principais ficam em:
• /lib/systemd/system/ — serviços instalados por pacotes do sistema. NÃO EDITE.
• /etc/systemd/system/ — overrides locais e serviços que VOCÊ criou. EDITE AQUI.

Quando você 'apt install nginx', o pacote coloca /lib/systemd/system/nginx.service. Você não toca lá.`,`Comandos do dia a dia (systemctl):

sudo systemctl start nginx          inicia agora
sudo systemctl stop nginx           para agora
sudo systemctl restart nginx        reinicia (stop+start)
sudo systemctl reload nginx         recarrega config sem matar conexões
sudo systemctl enable nginx         habilita no boot
sudo systemctl disable nginx        desabilita do boot
sudo systemctl enable --now nginx   habilita E inicia agora
systemctl status nginx              ver estado e últimas linhas de log
systemctl is-active nginx           só responde 'active' ou 'inactive'
systemctl is-enabled nginx          'enabled' ou 'disabled'`,`Listar serviços:

systemctl list-units --type=service                       todos rodando
systemctl list-units --type=service --state=failed        só falhos
systemctl list-unit-files --type=service                  todos os instalados (rodando ou não)
systemctl list-units --type=service --state=running       só rodando

Serviço falhou? Sempre comece por: 'systemctl status NOME' e 'journalctl -u NOME -n 50'.`,`Targets — o estado geral do sistema (substituto dos runlevels). Mais importantes:
• graphical.target — sistema com interface gráfica (default em desktop)
• multi-user.target — só terminal (servidor)
• rescue.target — modo manutenção (single user)
• reboot.target — reiniciar
• poweroff.target — desligar

Ver atual: 'systemctl get-default'. Mudar default: 'sudo systemctl set-default multi-user.target' (vira servidor, sem ambiente gráfico no próximo boot).`,`journalctl — leitor de logs do systemd (TODOS os logs, unificados):

journalctl -u nginx                       só do nginx
journalctl -u nginx -f                    follow (em tempo real)
journalctl -u nginx --since today
journalctl -u nginx --since '2024-04-25 10:00'
journalctl -u nginx -n 50                 últimas 50 linhas
journalctl -p err                         só erros
journalctl -b                             do boot atual
journalctl -b -1                          do boot anterior

Mais detalhes em journalctl no próximo módulo.`,`Criar seu próprio serviço — exemplo: monitorar uma pasta e fazer backup. Crie /etc/systemd/system/meu-backup.service:

[Unit]
Description=Backup automatico da pasta importante
After=network.target

[Service]
Type=simple
User=wallyson
ExecStart=/home/wallyson/scripts/backup.sh
Restart=on-failure
RestartSec=5s

[Install]
WantedBy=multi-user.target

Depois:
sudo systemctl daemon-reload
sudo systemctl enable --now meu-backup.service
systemctl status meu-backup.service`,`Edição segura de unit files — em vez de modificar /lib/systemd/system/X.service direto, use:

sudo systemctl edit nginx

Isso cria um override em /etc/systemd/system/nginx.service.d/override.conf onde você só sobrescreve o que mudou. Sobrevive a updates do pacote.`],commands:[{command:"sudo systemctl start / stop / restart / reload",description:"Controle imediato do serviço.",example:"sudo systemctl restart nginx"},{command:"sudo systemctl enable --now NOME",description:"Habilita no boot E inicia agora.",example:"sudo systemctl enable --now ssh"},{command:"sudo systemctl disable --now NOME",description:"Desabilita do boot E para agora.",example:"sudo systemctl disable --now bluetooth"},{command:"systemctl status",description:"Estado do serviço + últimas linhas de log.",example:"systemctl status ssh"},{command:"systemctl list-units --type=service",description:"Lista todos os serviços ativos.",example:"systemctl list-units --type=service --state=running"},{command:"systemctl list-units --state=failed",description:"Lista serviços que falharam (importante checar de tempos em tempos).",example:"systemctl list-units --state=failed"},{command:"systemctl get-default / set-default",description:"Ver ou trocar o target padrão.",example:"sudo systemctl set-default multi-user.target"},{command:"sudo systemctl daemon-reload",description:"Recarrega unit files após editá-los. Necessário antes de start/restart de serviço novo/modificado.",example:"sudo systemctl daemon-reload"},{command:"sudo systemctl edit",description:"Edita override de um serviço (não toca o original).",example:"sudo systemctl edit nginx"},{command:"sudo systemctl mask / unmask",description:"Bloqueia COMPLETAMENTE um serviço (mais forte que disable). Usado para serviços teimosos.",example:"sudo systemctl mask cups"}],tips:[{type:"info",title:"enable ≠ start",content:"enable habilita o serviço para iniciar no PRÓXIMO boot. Não inicia agora. Para fazer as duas coisas: 'sudo systemctl enable --now NOME'. Igual para disable + stop."},{type:"warning",title:"Sempre daemon-reload após editar .service",content:"Se você editou um .service ou criou um novo, systemd não sabe ainda. Rode 'sudo systemctl daemon-reload' antes de 'systemctl start'. Sem isso, suas mudanças não pegam."},{type:"success",title:"Edit sempre via systemctl edit",content:"Em vez de editar /lib/systemd/system/nginx.service (que será sobrescrito no próximo upgrade), use 'sudo systemctl edit nginx'. Cria override que sobrevive."}],practiceLabs:[{title:"Habilitar SSH no boot e ver logs",goal:"Workflow completo: habilitar, iniciar, conferir e ver logs de um serviço.",steps:["Instale ssh server.","Habilite no boot.","Inicie.","Cheque status.","Veja logs em tempo real."],command:`# 1) Instalar
sudo apt install -y openssh-server

# 2) Habilitar no boot E iniciar agora
sudo systemctl enable --now ssh

# 3) Status
systemctl status ssh

# 4) Esta rodando?
systemctl is-active ssh

# 5) Logs
sudo journalctl -u ssh -n 20

# 6) Logs em tempo real (Ctrl+C para sair)
sudo journalctl -u ssh -f`,verify:"'systemctl is-active ssh' deve responder 'active'. 'systemctl status ssh' mostra Active: active (running). Tente conectar de outra máquina: ssh USUARIO@IP_DO_DEBIAN."},{title:"Criar serviço próprio para um script",goal:"Criar um .service do zero e gerenciá-lo.",steps:["Crie um script de teste em /usr/local/bin.","Crie um arquivo .service em /etc/systemd/system/.","daemon-reload, enable --now.","Veja status e logs."],command:`# 1) Script de teste
sudo tee /usr/local/bin/meu-script.sh > /dev/null << 'EOF'
#!/bin/bash
while true; do
  echo "[$(date)] meu-script ativo"
  sleep 30
done
EOF
sudo chmod +x /usr/local/bin/meu-script.sh

# 2) .service
sudo tee /etc/systemd/system/meu-script.service > /dev/null << 'EOF'
[Unit]
Description=Meu Script de Teste
After=network.target

[Service]
Type=simple
ExecStart=/usr/local/bin/meu-script.sh
Restart=on-failure
RestartSec=5s
StandardOutput=journal

[Install]
WantedBy=multi-user.target
EOF

# 3) daemon-reload e enable + start
sudo systemctl daemon-reload
sudo systemctl enable --now meu-script.service

# 4) Conferir
systemctl status meu-script.service

# 5) Logs
sudo journalctl -u meu-script.service -f
# (Ctrl+C para sair)

# Para remover depois:
# sudo systemctl disable --now meu-script.service
# sudo rm /etc/systemd/system/meu-script.service
# sudo systemctl daemon-reload`,verify:"'systemctl status meu-script.service' mostra Active: active. journalctl mostra a mensagem aparecendo a cada 30s."}],exercises:[{id:1,question:"Diferença entre 'enable' e 'start'?",answer:"enable = habilita no PRÓXIMO boot. start = inicia agora. 'enable --now' faz os dois."},{id:2,question:"Como ver se o serviço nginx está rodando?",answer:"systemctl status nginx (estado completo) ou systemctl is-active nginx (resposta curta: active/inactive)."},{id:3,question:"Como ver logs do nginx em tempo real?",answer:"sudo journalctl -u nginx -f"},{id:4,question:"Como impedir COMPLETAMENTE um serviço de iniciar (mais forte que disable)?",answer:"sudo systemctl mask NOME — cria link para /dev/null, impossível habilitar até dar unmask."},{id:5,question:"Onde COLOCAR um arquivo .service que você criou?",answer:"/etc/systemd/system/SEU.service. Depois sudo systemctl daemon-reload."},{id:6,question:"Como editar nginx.service preservando suas mudanças após upgrade?",answer:"sudo systemctl edit nginx — cria override em /etc/systemd/system/nginx.service.d/. Sobrevive a updates."}],references:[{title:"Manual systemd.service",url:"https://manpages.debian.org/bookworm/systemd/systemd.service.5.en.html"},{title:"Wiki Debian — systemd",url:"https://wiki.debian.org/systemd"}]},{id:"logs-journalctl",title:"Logs e journalctl — Diagnóstico do Sistema",icon:"📋",category:"Sistema",description:"journalctl, /var/log, dmesg — onde olhar quando algo dá errado, e como filtrar logs gigantes.",objectives:["Usar journalctl para ler logs do systemd","Filtrar logs por unidade, data, prioridade","Conhecer /var/log e os arquivos clássicos (syslog, auth.log)","Configurar persistência de logs e rotação"],content:[`Quando algo dá errado no Linux, a resposta está nos logs. Saber onde olhar e como filtrar é a habilidade #1 de quem administra Linux. No Debian moderno, há dois sistemas de log convivendo:

1. journald (systemd) — armazena tudo em formato binário em /var/log/journal/. Acessa via 'journalctl'. Indexado, filtros poderosos.
2. syslog/rsyslog — formato texto tradicional em /var/log/. Arquivos como /var/log/syslog, /var/log/auth.log. Acessa com cat/grep/less.

Debian instala os dois por padrão. Use journalctl primeiro (mais poderoso); /var/log/* serve quando o serviço usa formato customizado.`,`journalctl — comandos essenciais:

sudo journalctl                              tudo (use less navigation)
sudo journalctl -f                           tail -f equivalente (tempo real)
sudo journalctl -n 100                       últimas 100 linhas
sudo journalctl -r                           ordem reversa (mais novo primeiro)
sudo journalctl --no-pager                   sem less, joga tudo na tela
sudo journalctl -k                           só mensagens do kernel (= dmesg)
sudo journalctl -p err                       só prioridade ≥ erro
sudo journalctl -b                           só do boot atual
sudo journalctl -b -1                        do boot ANTERIOR
sudo journalctl --list-boots                 lista todos os boots conhecidos`,`Filtros por TEMPO:

sudo journalctl --since today
sudo journalctl --since yesterday
sudo journalctl --since '1 hour ago'
sudo journalctl --since '2024-04-25 10:00' --until '2024-04-25 12:00'
sudo journalctl --since '15 min ago'

Filtros por SERVIÇO:

sudo journalctl -u nginx                     só do serviço nginx
sudo journalctl -u nginx -u ssh              dois serviços
sudo journalctl -u 'nginx*'                  glob (todos que começam com nginx)`,`Combinar filtros é o poder real:

sudo journalctl -u nginx --since today -p err
# Erros do nginx hoje

sudo journalctl -u ssh --since '2 days ago' | grep 'Failed password'
# Tentativas de login SSH falhadas dos últimos 2 dias

sudo journalctl -k -p err --since today
# Erros do kernel hoje

sudo journalctl -p warning -b
# Warnings do boot atual`,`Prioridades (níveis) — do mais crítico ao mais verboso:
• 0: emerg — sistema inutilizável
• 1: alert — agir imediatamente
• 2: crit — condição crítica
• 3: err — erro
• 4: warning — aviso
• 5: notice — normal mas significativo
• 6: info — informativo
• 7: debug — debug

Use '-p N' para mostrar tudo até essa prioridade. Ex: '-p warning' inclui warning, err, crit, alert, emerg.`,`Persistência dos logs — por padrão, journald guarda em /run/log (memória, perde no boot) OU em /var/log/journal (disco, persistente). Para ativar persistência:

sudo mkdir -p /var/log/journal
sudo systemd-tmpfiles --create --prefix /var/log/journal
sudo systemctl restart systemd-journald

Depois 'sudo journalctl -b -1' começa a funcionar (logs do boot anterior).`,`Tamanho dos logs — sem limite, journal pode encher o disco. Configure em /etc/systemd/journald.conf:

SystemMaxUse=2G                              # máximo 2 GB no /var/log/journal
SystemKeepFree=1G                            # deixa pelo menos 1 GB livre
SystemMaxFileSize=100M                       # cada arquivo máx 100 MB
MaxRetentionSec=1month                       # mantém só 1 mês

Depois: sudo systemctl restart systemd-journald.

Retirar tamanho atual: 'sudo journalctl --disk-usage'. Limpar manualmente: 'sudo journalctl --vacuum-size=500M' (deixa só 500 MB) ou 'sudo journalctl --vacuum-time=7d' (só últimos 7 dias).`,`Logs clássicos em /var/log:
• /var/log/syslog — log geral do sistema
• /var/log/auth.log — autenticação (sudo, su, ssh login, login do desktop)
• /var/log/kern.log — kernel
• /var/log/dpkg.log — instalações apt/dpkg
• /var/log/apt/ — histórico do apt (history.log, term.log)
• /var/log/Xorg.0.log — servidor gráfico (se X11)
• /var/log/nginx/access.log — acessos ao nginx (se instalado)

Rotação de logs é cuidada por logrotate (/etc/logrotate.d/). Logs antigos viram .gz.`],commands:[{command:"sudo journalctl",description:"Lê todos os logs do journal.",example:"sudo journalctl -n 100",flags:[{flag:"-f",description:"Follow (tempo real)"},{flag:"-n N",description:"Últimas N linhas"},{flag:"-r",description:"Reverso (mais novo primeiro)"},{flag:"-u SERVICE",description:"Só do serviço"},{flag:"-p PRIO",description:"Só com prioridade ≥ PRIO"},{flag:"-b",description:"Só do boot atual"},{flag:"-b -1",description:"Boot anterior"},{flag:"-k",description:"Só kernel"},{flag:"--since TIME",description:"Desde TIME"},{flag:"--until TIME",description:"Até TIME"}]},{command:"sudo journalctl --disk-usage",description:"Quanto journal está ocupando em disco.",example:"sudo journalctl --disk-usage",output:"Archived and active journals take up 1.2G in the file system."},{command:"sudo journalctl --vacuum-size=500M",description:"Apaga journal antigo até sobrar só 500MB.",example:"sudo journalctl --vacuum-size=500M"},{command:"sudo journalctl --vacuum-time=7d",description:"Mantém só últimos 7 dias.",example:"sudo journalctl --vacuum-time=7d"},{command:"dmesg",description:"Mensagens do kernel ring buffer (boot + USB plugado, etc.). Equivalente a 'journalctl -k'.",example:"sudo dmesg | tail -30",flags:[{flag:"-w",description:"Follow (tempo real)"},{flag:"-T",description:"Timestamp legível"},{flag:"-l err",description:"Filtrar por nível"}]},{command:"sudo tail -f /var/log/syslog",description:"Acompanhar log clássico em tempo real.",example:"sudo tail -f /var/log/syslog"},{command:"sudo less /var/log/auth.log",description:"Logs de autenticação (sudo, ssh, login).",example:"sudo grep 'sudo' /var/log/auth.log | tail -20"},{command:"logger",description:"Manda mensagem para o syslog (útil em scripts).",example:'logger -t meu-script "Backup concluido com sucesso"'}],tips:[{type:"info",title:"Servidor lento? Comece pelos logs",content:"sudo journalctl -p err --since '1 hour ago' — mostra todos os erros da última hora. Se vir 'out of memory', 'kernel: BUG', 'I/O error' — você achou o problema."},{type:"warning",title:"Não deixe journal crescer infinitamente",content:"Em servidor que roda há meses, journal pode passar de 10 GB. Configure SystemMaxUse=1G em /etc/systemd/journald.conf e reinicie journald. Sem isso, /var/log enche e quebra o boot."},{type:"success",title:"logger em scripts é gold",content:`Adicione 'logger -t meu-backup "Backup iniciado em $(date)"' no início e fim do seu script. Você verá tudo via journalctl: 'journalctl -t meu-backup'. Nunca perde rastro do que rodou.`}],practiceLabs:[{title:"Investigar tentativas de login SSH falhadas",goal:"Caso real de auditoria — descobrir se alguém tentou invadir seu servidor.",steps:["Liste tentativas de login SSH falhadas das últimas 24h.","Conte quantas foram.","Veja os IPs de origem mais frequentes."],command:`# Tentativas falhadas nas ultimas 24h
sudo journalctl -u ssh --since '1 day ago' | grep 'Failed password'

# Quantas tentativas
sudo journalctl -u ssh --since '1 day ago' | grep -c 'Failed password'

# Os 10 IPs mais ativos (atacantes)
sudo journalctl -u ssh --since '1 day ago' \\
  | grep 'Failed password' \\
  | grep -oP 'from \\K[0-9.]+' \\
  | sort | uniq -c | sort -rn | head -10`,verify:"Em servidor exposto à internet, espere VER muitas tentativas (centenas/milhares por dia de bots). Em servidor interno, deve ser zero. Se vir muitas, considere mudar porta SSH ou instalar fail2ban."},{title:"Configurar persistência e tamanho do journal",goal:"Garantir que logs sobrevivem a reboots e não enchem o disco.",steps:["Crie /var/log/journal para ativar persistência.","Edite /etc/systemd/journald.conf limitando a 1GB.","Reinicie journald.","Confirme que --list-boots mostra mais de um."],command:`# 1) Habilitar persistencia (so necessario uma vez)
sudo mkdir -p /var/log/journal
sudo systemd-tmpfiles --create --prefix /var/log/journal

# 2) Editar config
sudo nano /etc/systemd/journald.conf
# Descomente e altere:
# SystemMaxUse=1G
# SystemKeepFree=500M
# MaxRetentionSec=1month

# 3) Reiniciar journald
sudo systemctl restart systemd-journald

# 4) Confirmar
sudo journalctl --disk-usage
sudo journalctl --list-boots`,verify:"'journalctl --disk-usage' deve mostrar < 1G após algumas semanas. 'journalctl --list-boots' lista todos os boots desde a habilitação da persistência."}],exercises:[{id:1,question:"Como ver logs do nginx em tempo real?",answer:"sudo journalctl -u nginx -f"},{id:2,question:"Como ver erros do sistema na última hora?",answer:"sudo journalctl -p err --since '1 hour ago'"},{id:3,question:"Como ver logs do boot anterior (após sistema travar e reiniciar)?",answer:"sudo journalctl -b -1 (precisa persistência habilitada)."},{id:4,question:"Como liberar espaço apagando logs antigos?",answer:"sudo journalctl --vacuum-size=500M (deixa só 500MB) ou --vacuum-time=7d (só últimos 7 dias)."},{id:5,question:"Onde ficam os logs de tentativas de login SSH?",answer:"/var/log/auth.log — ou via journalctl: 'sudo journalctl -u ssh'."},{id:6,question:"Como mandar uma mensagem para o syslog dentro de um script bash?",answer:"logger -t TAG 'mensagem' — depois 'journalctl -t TAG' mostra todas as mensagens com aquela tag."}],references:[{title:"Manual journalctl",url:"https://manpages.debian.org/bookworm/systemd/journalctl.1.en.html"},{title:"Manual journald.conf",url:"https://manpages.debian.org/bookworm/systemd/journald.conf.5.en.html"}]},{id:"cron-timers",title:"Agendamento — cron e systemd timers",icon:"⏰",category:"Sistema",description:"Como agendar tarefas: cron clássico (cada usuário) e systemd timers (moderno e robusto).",objectives:["Editar crontab de usuário e do sistema","Entender a sintaxe de cron (5 campos)","Criar systemd timer + service para tarefas agendadas modernas","Diferenciar cron e timer e escolher o certo para cada caso"],content:["Você precisa rodar uma tarefa todo dia às 3 da manhã? Backup semanal? Verificação de disco a cada hora? Existem duas abordagens no Linux moderno: cron (clássico, simples) e systemd timer (moderno, mais robusto). Cron é mais fácil para começar; systemd timer é mais poderoso e melhor para servidores.",`Cron — o veterano. Cada usuário tem seu próprio crontab. Edite com:

crontab -e            seu crontab pessoal
sudo crontab -e       crontab do root
sudo crontab -e -u maria    crontab da maria

O crontab abre o editor padrão (geralmente nano). Cada linha é uma tarefa.`,`Sintaxe do cron — 5 campos de tempo + comando:

*  *  *  *  *  comando
│  │  │  │  │
│  │  │  │  └── dia da semana (0-7, 0 e 7 = domingo)
│  │  │  └───── mês (1-12)
│  │  └──────── dia do mês (1-31)
│  └─────────── hora (0-23)
└────────────── minuto (0-59)

Exemplos:

* * * * * comando             toda minuto
0 * * * * comando             a cada hora cheia
0 3 * * * comando             todo dia às 3:00
0 3 * * 1 comando             toda segunda às 3:00
*/15 * * * * comando          a cada 15 minutos
0 9 1 * * comando             dia 1 de cada mês às 9:00
0 0 * * 0 comando             todo domingo à meia-noite`,`Atalhos cron amigáveis (substituem os 5 campos):

@yearly  ou @annually     uma vez por ano (= 0 0 1 1 *)
@monthly                  uma vez por mês  (= 0 0 1 * *)
@weekly                   uma vez por semana (= 0 0 * * 0)
@daily   ou @midnight     uma vez por dia (= 0 0 * * *)
@hourly                   uma vez por hora (= 0 * * * *)
@reboot                   no boot

Exemplo:
@daily /usr/local/bin/backup.sh`,`Erros comuns no cron:
• PATH limitado — cron não tem o $PATH do seu shell. Use SEMPRE caminhos absolutos: '/usr/bin/python3' em vez de 'python3'.
• Output some — cron manda output para email do usuário (que provavelmente nem existe). REDIRECIONE para arquivo: '0 3 * * * /script.sh > /var/log/script.log 2>&1'
• Crontab não é Bash — não use ~. Use $HOME explícito ou caminhos absolutos.
• Editor padrão errado — 'export EDITOR=nano' antes do crontab -e se quer nano em vez de vim.`,`Crontab do SISTEMA (/etc/crontab e /etc/cron.d/) — formato similar mas com USUARIO antes do comando:

# /etc/crontab
0 6 * * * root /usr/sbin/apt update
0 7 * * * www-data /usr/local/bin/backup.sh

E existem pastas mágicas:
• /etc/cron.hourly/  — scripts aqui rodam toda hora
• /etc/cron.daily/   — diariamente
• /etc/cron.weekly/  — semanalmente
• /etc/cron.monthly/ — mensalmente

Muito útil — basta jogar um script executável na pasta certa.`,`systemd timer — alternativa moderna. Mais robusto:
• Logs unificados via journalctl
• Recuperação de tarefas perdidas (se sistema estava off no horário)
• Dependências entre tarefas
• Notificação se falhou

Precisa de DOIS arquivos: o .service (o que rodar) e o .timer (quando).

/etc/systemd/system/meu-backup.service:
[Unit]
Description=Backup diario

[Service]
Type=oneshot
ExecStart=/usr/local/bin/backup.sh

/etc/systemd/system/meu-backup.timer:
[Unit]
Description=Roda backup diariamente

[Timer]
OnCalendar=daily
Persistent=true

[Install]
WantedBy=timers.target

Depois:
sudo systemctl daemon-reload
sudo systemctl enable --now meu-backup.timer
systemctl list-timers`,`Sintaxe OnCalendar do timer (formato: 'DiaSemana ANO-MES-DIA HORA:MIN:SEC'):

OnCalendar=*-*-* 03:00:00          todo dia 3:00
OnCalendar=Mon..Fri 09:00          dias úteis 9:00
OnCalendar=Sat,Sun 10:00           fins de semana 10:00
OnCalendar=*-*-1 00:00             dia 1 de cada mês
OnCalendar=*:0/15                  a cada 15 min

Alias: 'daily', 'weekly', 'monthly', 'hourly' (mais simples, 'OnCalendar=daily').

Flag 'Persistent=true' — se o sistema estava OFF no horário do timer, ele roda assim que o sistema volta. Sem isso, perde a execução.`],commands:[{command:"crontab -e",description:"Edita seu crontab pessoal.",example:"crontab -e"},{command:"crontab -l",description:"Lista seu crontab atual.",example:"crontab -l"},{command:"sudo crontab -e",description:"Edita crontab do root.",example:"sudo crontab -e"},{command:"systemctl list-timers",description:"Lista todos os timers ativos com próximo disparo.",example:"systemctl list-timers --all"},{command:"sudo systemctl enable --now NOME.timer",description:"Habilita e inicia um timer.",example:"sudo systemctl enable --now meu-backup.timer"},{command:"systemctl status NOME.timer",description:"Status de um timer.",example:"systemctl status meu-backup.timer"},{command:"sudo journalctl -u NOME.service",description:"Logs do serviço executado pelo timer.",example:"sudo journalctl -u meu-backup.service -n 50"}],tips:[{type:"warning",title:"Use caminhos ABSOLUTOS no cron",content:"Cron não tem PATH normal. 'python3 script.py' provavelmente falhará. Use '/usr/bin/python3 /home/wallyson/script.py'. Para descobrir caminho: 'which python3'."},{type:"info",title:"Sempre redirecione output do cron",content:"Sem '> /tmp/log.txt 2>&1', o output vai para email local (que ninguém lê). E erros somem. Padrão útil: '0 3 * * * /script.sh >> /var/log/script.log 2>&1'."},{type:"success",title:"Timer > cron para servidor",content:"Em servidor de produção, prefira systemd timer: logs vão pra journalctl, falhas reportam, Persistent=true recupera tarefas perdidas. Em desktop, cron é mais simples e suficiente."}],practiceLabs:[{title:"Backup diário com cron",goal:"Configurar backup automático da home toda madrugada às 3h.",steps:["Crie um script de backup.","Edite seu crontab.","Adicione linha para rodar todo dia 3h.","Confira que foi salvo."],command:`# 1) Script de backup
mkdir -p ~/scripts
cat > ~/scripts/backup-home.sh << 'EOF'
#!/bin/bash
DATA=$(date +%Y%m%d_%H%M)
DESTINO=/tmp/backup_home_$DATA.tar.gz
tar -czf "$DESTINO" /home/$USER --exclude="$DESTINO" 2>/dev/null
echo "[$(date)] Backup criado em $DESTINO" >> ~/scripts/backup.log
EOF
chmod +x ~/scripts/backup-home.sh

# 2) Editar crontab
crontab -e
# Adicione esta linha:
# 0 3 * * * /home/SEU_USUARIO/scripts/backup-home.sh

# 3) Conferir
crontab -l

# 4) Testar manualmente
~/scripts/backup-home.sh
ls -lh /tmp/backup_home_*.tar.gz
cat ~/scripts/backup.log`,verify:"'crontab -l' mostra a linha. O backup manual cria /tmp/backup_home_*.tar.gz e log."},{title:"Backup diário com systemd timer (forma moderna)",goal:"Mesma tarefa do lab anterior, mas com systemd timer (mais robusto).",steps:["Crie .service.","Crie .timer.","daemon-reload + enable.","Liste timers ativos."],command:`# 1) Service
sudo tee /etc/systemd/system/backup-home.service > /dev/null << 'EOF'
[Unit]
Description=Backup diario da home

[Service]
Type=oneshot
User=$USER
ExecStart=/home/$USER/scripts/backup-home.sh
EOF

# 2) Timer
sudo tee /etc/systemd/system/backup-home.timer > /dev/null << 'EOF'
[Unit]
Description=Roda backup-home diariamente as 3h

[Timer]
OnCalendar=*-*-* 03:00:00
Persistent=true

[Install]
WantedBy=timers.target
EOF

# 3) Habilitar
sudo systemctl daemon-reload
sudo systemctl enable --now backup-home.timer

# 4) Listar timers
systemctl list-timers backup-home.timer

# 5) Testar manualmente o servico
sudo systemctl start backup-home.service
sudo journalctl -u backup-home.service -n 20`,verify:"'systemctl list-timers backup-home.timer' mostra próximo disparo às 03:00. journalctl mostra execução do service."}],exercises:[{id:1,question:"Sintaxe cron para rodar todo dia às 3:30 da manhã?",answer:"30 3 * * * /caminho/comando"},{id:2,question:"Como rodar um script a cada 15 minutos?",answer:"*/15 * * * * /caminho/comando"},{id:3,question:"Por que usar caminho absoluto em comando do cron?",answer:"Cron não tem o $PATH normal. 'python3 script.py' pode falhar. Use '/usr/bin/python3 /home/user/script.py'."},{id:4,question:"Como ver os timers do systemd ativos no sistema?",answer:"systemctl list-timers (ou --all para incluir inativos)."},{id:5,question:"Vantagem de systemd timer sobre cron?",answer:"Logs no journalctl, recuperação de tarefas perdidas (Persistent=true), notificação de falha, dependências entre tarefas."},{id:6,question:"Onde ir para colocar um script que deve rodar diariamente sem editar crontab?",answer:"/etc/cron.daily/ — basta jogar um script executável (chmod +x) lá."}],references:[{title:"Manual crontab",url:"https://manpages.debian.org/bookworm/cron/crontab.5.en.html"},{title:"Manual systemd.timer",url:"https://manpages.debian.org/bookworm/systemd/systemd.timer.5.en.html"},{title:"Crontab.guru — testar expressões",url:"https://crontab.guru/"}]}],sk=[{id:"rede",title:"Configuração de Rede",icon:"🌐",category:"Rede e Segurança",description:"ip, ifconfig, NetworkManager, /etc/network/interfaces — entenda como o Debian gerencia rede.",objectives:["Ver e configurar interfaces de rede com ip","Entender NetworkManager (desktop) vs ifupdown (servidor)","Configurar IP estático em servidor","Diagnosticar problemas de conectividade"],content:[`O Debian tem TRÊS sistemas de gerenciamento de rede:
• NetworkManager — usado em desktops (Wi-Fi, perfis, integração com indicadores). Padrão em GNOME/KDE/XFCE.
• systemd-networkd — moderno, usado em alguns servidores e em containers.
• ifupdown — clássico, configurado via /etc/network/interfaces. Padrão em servidores Debian.

Não use OS DOIS ao mesmo tempo na mesma interface — vão brigar. Em desktop: deixa o NM. Em servidor: edite /etc/network/interfaces.`,`Comandos modernos para inspecionar rede (use 'ip', NÃO o velho 'ifconfig' que está deprecated):

ip addr show              ou ip a — lista interfaces e IPs
ip link show              ou ip l — interfaces (sem IPs)
ip route                  ou ip r — tabela de rotas
ip neigh                  vizinhos ARP (devices na sua rede)
ip -s link                estatísticas (pacotes, erros)

O 'ip a' é o que você roda toda vez que quer ver 'qual meu IP?'`,`Saída típica de 'ip a':

2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500
    link/ether 00:11:22:33:44:55
    inet 192.168.1.100/24 brd 192.168.1.255 scope global dynamic eth0
    inet6 fe80::abc/64 scope link

Leitura:
• 'eth0' — nome da interface
• 'UP' — interface ativa
• 'inet 192.168.1.100/24' — IP IPv4 com máscara /24 (= 255.255.255.0)
• 'inet6' — IPv6
• 'dynamic' — IP veio de DHCP (se 'noprefixroute' ou ausência: estático)`,`Configurar IP estático em servidor (sem NetworkManager) — edite /etc/network/interfaces:

auto eth0
iface eth0 inet static
    address 192.168.1.100/24
    gateway 192.168.1.1
    dns-nameservers 1.1.1.1 8.8.8.8

Depois 'sudo systemctl restart networking' ou 'sudo ifdown eth0 && sudo ifup eth0'.

Para DHCP:
auto eth0
iface eth0 inet dhcp`,`Em desktop com NetworkManager — use 'nmcli' (linha de comando) ou nm-applet (interface gráfica):

nmcli device                          interfaces
nmcli connection                      perfis salvos
nmcli device wifi list                Wi-Fi disponíveis
nmcli device wifi connect 'NOME' password 'SENHA'
nmcli connection up minha-rede        ativa perfil
nmcli connection down minha-rede      desativa

nmtui — TUI (interface texto interativa) — facil para configurar Wi-Fi via SSH em servidor: 'sudo nmtui'.`,`Diagnóstico de conectividade — fluxo padrão quando 'internet não funciona':

# 1) Tem IP?
ip a

# 2) Tem rota default?
ip route
# Deve aparecer 'default via X.X.X.X dev eth0'

# 3) Pinga o gateway (rede local OK)?
ping -c 3 192.168.1.1

# 4) Pinga IP externo (internet OK)?
ping -c 3 1.1.1.1

# 5) Resolve nome (DNS OK)?
ping -c 3 google.com
or
resolvectl query google.com

Se 1 OK, 2 OK, 3 OK, 4 falhar = ISP/upstream com problema.
Se 4 OK mas 5 falhar = problema de DNS. Edite /etc/resolv.conf ou troque DNS no NetworkManager.`,`Portas TCP/UDP — listar o que está escutando:

ss -tulpn                         todas as portas TCP/UDP escutando, com programa
ss -tulpn | grep :22              só porta 22
sudo lsof -i :80                  programas usando porta 80
sudo netstat -tulpn               (legado, mesma coisa que ss)

ss é o comando moderno. Mais rápido que netstat.`,`DNS no Debian moderno — historicamente /etc/resolv.conf, mas agora é geralmente gerenciado por systemd-resolved (gera /etc/resolv.conf como link). Para mudar DNS:

• Desktop: NetworkManager > editar conexão > IPv4 > DNS
• Servidor: edite /etc/network/interfaces (dns-nameservers) ou /etc/systemd/resolved.conf

Testar resolução:
resolvectl query example.com         # systemd-resolved
dig example.com                       # ferramenta clássica (sudo apt install dnsutils)
nslookup example.com                  # outra ferramenta clássica
host example.com                      # versão simples`],commands:[{command:"ip a",description:"Lista interfaces de rede e IPs.",example:"ip a"},{command:"ip route",description:"Tabela de rotas (default = onde sai a internet).",example:"ip route",output:`default via 192.168.1.1 dev eth0
192.168.1.0/24 dev eth0 proto kernel scope link`},{command:"ping",description:"Testa conectividade (ICMP). Ctrl+C para parar.",example:"ping -c 4 1.1.1.1",flags:[{flag:"-c N",description:"Manda N pacotes e para"},{flag:"-i 0.2",description:"Intervalo (0.2s — root requerido para < 1s)"},{flag:"-s 1500",description:"Tamanho do pacote"}]},{command:"traceroute",description:"Mostra cada salto até destino. Instale: sudo apt install traceroute.",example:"traceroute google.com"},{command:"ss -tulpn",description:"Lista portas TCP/UDP escutando + programa que está usando.",example:"sudo ss -tulpn"},{command:"nmcli",description:"CLI do NetworkManager (desktop).",example:"nmcli device wifi connect 'minha-rede' password 'xxx'"},{command:"nmtui",description:"Interface TUI (texto) para NetworkManager. Excelente para configurar Wi-Fi via SSH.",example:"sudo nmtui"},{command:"resolvectl",description:"Inspeciona/configura DNS via systemd-resolved.",example:"resolvectl query google.com"},{command:"dig",description:"Consulta DNS detalhada. Instale: sudo apt install dnsutils.",example:"dig +short example.com"},{command:"curl ifconfig.me",description:"Mostra seu IP PÚBLICO (na internet).",example:"curl -4 ifconfig.me"}],tips:[{type:"info",title:"Use 'ip', esqueça 'ifconfig'",content:"ifconfig está OBSOLETO há anos. Não vem instalado no Debian moderno. Use 'ip a' (ver interfaces) e 'ip route' (rotas). Sintaxe nova é mais consistente."},{type:"warning",title:"Após editar /etc/network/interfaces em SSH...",content:"Se você está conectado via SSH e edita config de rede, RISCO de perder conexão. Tenha plano B: console serial, KVM, ou um cron de 'ifup eth0' antigo agendado para 5 min depois (recover automático)."}],practiceLabs:[{title:"Diagnóstico completo de rede em 2 minutos",goal:"Sequência padrão para diagnosticar 'internet não funciona'.",steps:["Cheque interfaces e IP.","Cheque rota default.","Pinga gateway.","Pinga IP externo.","Resolve nome."],command:`# 1) Tenho IP?
ip a | grep -E 'inet |UP'

# 2) Tenho gateway?
ip route | grep default

# 3) Gateway responde?
GATEWAY=$(ip route | grep default | awk '{print $3}')
ping -c 2 $GATEWAY

# 4) Internet responde?
ping -c 2 1.1.1.1

# 5) DNS funciona?
ping -c 2 google.com

# 6) Bonus: meu IP publico
curl -s -4 ifconfig.me`,verify:"Se passos 1-3 OK e 4 falhar: provedor com problema. Se 4 OK mas 5 falhar: DNS quebrado (troque para 1.1.1.1 ou 8.8.8.8). Tudo OK = você tá online."}],exercises:[{id:1,question:"Comando para ver IP da máquina?",answer:"ip a (ou 'ip addr'). Procure 'inet X.X.X.X' na sua interface ativa."},{id:2,question:"Como ver as portas TCP/UDP que estão escutando + programa?",answer:"sudo ss -tulpn"},{id:3,question:"Onde configurar IP estático em servidor Debian sem NetworkManager?",answer:"/etc/network/interfaces — depois 'sudo systemctl restart networking'."},{id:4,question:"Como testar se DNS funciona?",answer:"ping google.com — se resolver para IP e responder, DNS OK. Se 'unknown host', DNS quebrado."},{id:5,question:"Como conectar a Wi-Fi via SSH em servidor (sem GUI)?",answer:"sudo nmtui (TUI interativa) ou sudo nmcli device wifi connect 'NOME' password 'XXX'."},{id:6,question:"Como descobrir seu IP PÚBLICO (na internet)?",answer:"curl -4 ifconfig.me (ou icanhazip.com, ipinfo.io/ip). 'ip a' só mostra IP local."}],references:[{title:"Wiki Debian — NetworkConfiguration",url:"https://wiki.debian.org/NetworkConfiguration"},{title:"Manual ip",url:"https://manpages.debian.org/bookworm/iproute2/ip.8.en.html"}]},{id:"firewall-ufw",title:"Firewall com UFW",icon:"🛡️",category:"Rede e Segurança",description:"UFW — interface amigável para o firewall do Linux. Bloqueia tudo que não foi explicitamente permitido.",objectives:["Habilitar UFW com regras seguras","Abrir portas específicas (22, 80, 443)","Permitir/bloquear IPs específicos","Verificar e debugar regras"],content:[`UFW (Uncomplicated Firewall) é um wrapper sobre o iptables/nftables do kernel Linux. Filosofia: bloqueia tudo que não foi permitido. Padrão recomendado:
• Saída (outgoing): tudo permitido (você confia nas suas requisições)
• Entrada (incoming): tudo bloqueado, exceto portas que você abrir

Resultado: outros não acessam serviços seus que você não quis expor.`,`Habilitar UFW pela primeira vez em um servidor (com cuidado se via SSH):

# 1) Instalar
sudo apt install -y ufw

# 2) IMPORTANTE: abrir SSH ANTES de habilitar (senão você se tranca de fora!)
sudo ufw allow 22/tcp
sudo ufw allow OpenSSH                # equivalente, usa o app profile

# 3) Definir defaults
sudo ufw default deny incoming
sudo ufw default allow outgoing

# 4) Habilitar (vai pedir confirmação se via SSH)
sudo ufw enable

# 5) Conferir
sudo ufw status verbose`,`Regras por porta:

sudo ufw allow 80/tcp                liberar HTTP
sudo ufw allow 443/tcp               liberar HTTPS
sudo ufw allow 8080                  ambos TCP e UDP
sudo ufw deny 23                     bloquear telnet
sudo ufw allow 3000:3010/tcp         range de portas`,`Regras por aplicação (UFW conhece serviços comuns):

sudo ufw app list                    lista perfis disponíveis
sudo ufw app info OpenSSH            detalhes
sudo ufw allow OpenSSH               libera portas do SSH
sudo ufw allow 'Nginx Full'          libera 80 e 443 do nginx
sudo ufw allow Apache`,`Regras por IP origem:

sudo ufw allow from 192.168.1.100                          tudo desse IP
sudo ufw allow from 192.168.1.0/24                         toda a sub-rede
sudo ufw allow from 192.168.1.100 to any port 22           só esse IP, só na porta 22
sudo ufw deny from 1.2.3.4                                 bloqueia esse IP
sudo ufw insert 1 deny from 1.2.3.4                        adiciona como regra #1 (mais prioritária)`,`Status e regras:

sudo ufw status                      lista regras (numeradas)
sudo ufw status verbose              + defaults e logging
sudo ufw status numbered             com números
sudo ufw show added                  só as regras que VOCÊ adicionou

Apagar regra: 'sudo ufw delete N' onde N é o número da regra (de 'status numbered'), OU repita a regra prefixada por 'delete': 'sudo ufw delete allow 80/tcp'.`,`Logging — registra tentativas bloqueadas:

sudo ufw logging on             liga (default low)
sudo ufw logging medium
sudo ufw logging high
sudo ufw logging off

Logs aparecem em /var/log/ufw.log e via journalctl. Útil para auditoria, mas em servidor MUITO atacado pode encher disco — use 'low'.`,`Reset (apagar TUDO e desabilitar):

sudo ufw disable
sudo ufw reset            # confirma

Useful quando você bagunçou as regras e quer recomeçar do zero. Mas ATENÇÃO se via SSH — após reset, perde regra do SSH.`],commands:[{command:"sudo ufw enable / disable",description:"Liga / desliga firewall.",example:"sudo ufw enable"},{command:"sudo ufw status verbose",description:"Estado completo + regras.",example:"sudo ufw status verbose"},{command:"sudo ufw default",description:"Define política padrão.",example:"sudo ufw default deny incoming"},{command:"sudo ufw allow / deny",description:"Cria regra.",example:"sudo ufw allow 22/tcp"},{command:"sudo ufw allow from",description:"Permitir IP/rede específica.",example:"sudo ufw allow from 192.168.1.0/24 to any port 22"},{command:"sudo ufw delete N",description:"Apaga regra número N (de 'ufw status numbered').",example:"sudo ufw delete 3"},{command:"sudo ufw app list",description:"Lista perfis de aplicação conhecidos.",example:"sudo ufw app list"},{command:"sudo ufw reset",description:"Apaga TODAS as regras (confirma).",example:"sudo ufw reset"}],tips:[{type:"danger",title:"Antes de habilitar UFW via SSH",content:"OBRIGATÓRIO: 'sudo ufw allow 22/tcp' ANTES de 'sudo ufw enable'. Sem isso, você perde SSH e fica trancado fora do servidor."},{type:"info",title:"Defaults seguros para qualquer servidor",content:"deny incoming + allow outgoing — bloqueia conexões EXTERNAS, libera as suas. Depois você abre as portas que precisa expor (22 SSH, 80/443 web)."}],practiceLabs:[{title:"Setup completo de firewall em servidor web",goal:"Liberar SSH, HTTP, HTTPS e bloquear o resto.",steps:["Instalar UFW.","Liberar SSH ANTES de qualquer coisa.","Definir defaults seguros.","Liberar HTTP e HTTPS.","Habilitar.","Conferir."],command:`# 1) Instalar
sudo apt install -y ufw

# 2) SSH primeiro (CRITICO se via SSH)
sudo ufw allow 22/tcp

# 3) Defaults
sudo ufw default deny incoming
sudo ufw default allow outgoing

# 4) Web
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# 5) Habilitar (vai perguntar - responda y)
sudo ufw enable

# 6) Conferir
sudo ufw status verbose

# 7) Bonus: limitar SSH a IPs especificos (apos confirmar acesso normal)
# sudo ufw delete allow 22/tcp
# sudo ufw allow from 192.168.1.0/24 to any port 22`,verify:"'sudo ufw status verbose' deve mostrar Status: active, defaults deny/allow, e regras 22/80/443. Tente abrir o site (porta 80) — funciona. Tente outras portas — bloqueadas."}],exercises:[{id:1,question:"Configuração mínima segura de UFW?",answer:"sudo ufw default deny incoming; sudo ufw default allow outgoing; sudo ufw allow 22/tcp (se SSH); sudo ufw enable."},{id:2,question:"Como liberar HTTPS para todo mundo?",answer:"sudo ufw allow 443/tcp"},{id:3,question:"Como permitir SSH só de uma sub-rede?",answer:"sudo ufw allow from 192.168.1.0/24 to any port 22"},{id:4,question:"Como apagar uma regra específica?",answer:"sudo ufw status numbered (ver número) → sudo ufw delete N. Ou repetir comando com 'delete' prefixado: sudo ufw delete allow 80/tcp."},{id:5,question:"Por que perigoso habilitar UFW via SSH sem antes liberar 22?",answer:"Default é deny incoming. Você perde a conexão SSH ATIVA assim que enable. Volta = só com console físico/KVM."},{id:6,question:"Como ver regras do UFW que você criou (sem as defaults)?",answer:"sudo ufw show added"}],references:[{title:"Manual UFW",url:"https://manpages.debian.org/bookworm/ufw/ufw.8.en.html"},{title:"Tutorial Ubuntu UFW",url:"https://help.ubuntu.com/community/UFW"}]},{id:"ssh-conexao",title:"SSH — Conexão Remota Segura",icon:"🔑",category:"Rede e Segurança",description:"Conectar em servidor remoto, configurar chaves SSH (sem senha), endurecer o sshd.",objectives:["Conectar em servidor via SSH","Gerar e configurar autenticação por chave (sem senha)","Editar /etc/ssh/sshd_config para endurecer segurança","Usar config em ~/.ssh/config para múltiplos servidores"],content:["SSH (Secure Shell) é como você administra qualquer servidor Linux. Substitui Telnet/rlogin (inseguros, em texto puro). Cliente padrão é o 'ssh'. No servidor, o serviço chamado 'sshd' (SSH daemon) escuta na porta 22.",`Conexão básica:

ssh usuario@ip_ou_hostname
ssh wallyson@192.168.1.50
ssh -p 2222 wallyson@meuservidor.com         # porta diferente
ssh wallyson@meuservidor.com 'comando'        # roda comando e sai (não abre shell)

Primeira conexão pergunta sobre fingerprint do servidor — é a 'identidade' dele. Salva em ~/.ssh/known_hosts. Se mudar (servidor reinstalado), aviso de man-in-the-middle. Edite known_hosts ou: 'ssh-keygen -R hostname'.`,`Autenticação por chave (sem senha) — método PADRÃO em produção. Mais seguro e prático:

# 1) Gerar par de chaves (no SEU computador)
ssh-keygen -t ed25519 -C 'meu-email@exemplo.com'
# Aceite o caminho padrão (~/.ssh/id_ed25519). Senha opcional.

# 2) Copiar a chave pública para o servidor
ssh-copy-id wallyson@meuservidor.com

# 3) Testar — não deve pedir senha
ssh wallyson@meuservidor.com

O ssh-copy-id adiciona sua ~/.ssh/id_ed25519.pub no ~/.ssh/authorized_keys do servidor. A chave PRIVADA (id_ed25519) NUNCA sai do seu computador.`,`Tipos de chaves SSH:
• ed25519 — moderna, segura, rápida. USE.
• rsa — funciona em servidores muito antigos. 4096 bits.
• ecdsa, dsa — não use mais.

Permissões CORRETAS de ~/.ssh:
• ~/.ssh — 700 (drwx------)
• ~/.ssh/id_ed25519 — 600 (rw-------)
• ~/.ssh/id_ed25519.pub — 644
• ~/.ssh/authorized_keys — 600
• ~/.ssh/known_hosts — 644

SSH RECUSA chaves com permissões erradas — proteção crítica.`,`Endurecimento do sshd_config (servidor) — em /etc/ssh/sshd_config:

Port 22                          # ou outra (segurança por obscuridade leve)
Protocol 2
PermitRootLogin no               # bloqueia login direto como root
PasswordAuthentication no        # SÓ chave (após confirmar acesso por chave funciona)
PubkeyAuthentication yes
PermitEmptyPasswords no
MaxAuthTries 3
ClientAliveInterval 600
AllowUsers wallyson maria        # só esses usuários

Depois: sudo systemctl restart ssh.

IMPORTANTE: NÃO desabilite PasswordAuthentication antes de TESTAR que sua chave funciona. Se sua chave estiver errada, você se tranca para fora.`,`Arquivo ~/.ssh/config — economiza digitação para múltiplos servidores:

Host servidor1
    HostName 192.168.1.50
    User wallyson
    Port 2222
    IdentityFile ~/.ssh/id_ed25519

Host servidor-prod
    HostName meuservidor.com
    User deploy
    Port 22

Depois é só 'ssh servidor1' (em vez de 'ssh -p 2222 wallyson@192.168.1.50').

Opções comuns: User, Port, HostName, IdentityFile, LocalForward (port forward), ProxyJump (usar bastion).`,`scp e rsync — copiar arquivos via SSH:

scp arquivo.txt wallyson@servidor:/tmp/
scp wallyson@servidor:/tmp/log.txt ./
scp -r pasta/ servidor:/tmp/

rsync é melhor (incremental, eficiente):
rsync -avzP arquivo.txt servidor:/tmp/
rsync -avzP --delete pasta/ servidor:/destino/      # sincroniza pasta

Flags rsync: -a (archive=preserva tudo), -v (verbose), -z (compressão), -P (progresso + parcial).`,`Túnel SSH (port forwarding) — útil para acessar serviço interno do servidor:

ssh -L 8080:localhost:80 servidor
# Tudo que vai para localhost:8080 no SEU PC vai para localhost:80 no servidor
# Útil para acessar admin de banco, dashboards internos, etc.

ssh -D 1080 servidor               # SOCKS proxy (pode usar como proxy no navegador)

ssh -J bastion servidor-interno     # ProxyJump — passa por bastion para chegar no destino`],commands:[{command:"ssh",description:"Conecta em servidor.",example:"ssh wallyson@192.168.1.50",flags:[{flag:"-p PORTA",description:"Porta SSH não-padrão"},{flag:"-i CHAVE",description:"Usa essa chave específica"},{flag:"-v",description:"Verbose (debug)"},{flag:"-X",description:"Encaminha X11 (rodar app gráfico remoto)"},{flag:"-L L:H:R",description:"Local port forward"},{flag:"-J BASTION",description:"Proxy jump"}]},{command:"ssh-keygen",description:"Gera par de chaves.",example:"ssh-keygen -t ed25519 -C 'meu-email'"},{command:"ssh-copy-id",description:"Copia sua chave pública para o servidor.",example:"ssh-copy-id wallyson@servidor"},{command:"scp",description:"Copia arquivos via SSH.",example:"scp -r pasta/ servidor:/tmp/"},{command:"rsync",description:"Sync incremental via SSH (melhor que scp para sincronizar pastas).",example:"rsync -avzP --delete pasta/ servidor:/destino/"},{command:"ssh -L",description:"Local port forward (cria túnel local → remoto).",example:"ssh -L 8080:localhost:80 servidor"}],tips:[{type:"warning",title:"Antes de bloquear PasswordAuthentication, TESTE a chave",content:"Se você fizer 'PasswordAuthentication no' no sshd_config sem ter chave funcionando, perde acesso. Sempre TESTE 'ssh servidor' (deve entrar SEM pedir senha) ANTES de aplicar a config."},{type:"info",title:"Mude porta 22 só para reduzir ruído",content:"Mudar SSH para porta 2222 NÃO te torna seguro (atacantes escaneiam). Mas REDUZ logs de tentativas (bots automatizados só vão na 22). Combine com fail2ban e PasswordAuthentication=no para segurança real."}],practiceLabs:[{title:"Configurar acesso SSH sem senha em 4 passos",goal:"Setup definitivo de chave SSH para um servidor.",steps:["Gere par de chaves no seu PC.","Copie a pública para o servidor.","Teste login.","(Servidor) endurecer sshd_config."],command:`# === NO SEU PC ===

# 1) Gerar (se ja nao tem)
ls ~/.ssh/id_ed25519* 2>/dev/null
# Se nao mostrou nada:
ssh-keygen -t ed25519 -C "wallyson@$(hostname)"
# Aceite default. Pode deixar passphrase vazia ou colocar (mais seguro)

# 2) Copiar para o servidor
ssh-copy-id wallyson@meu-servidor
# Ele vai pedir senha do servidor (so essa vez)

# 3) Testar - nao deve pedir senha
ssh wallyson@meu-servidor

# === NO SERVIDOR (apos confirmar acesso por chave) ===

# 4) Endurecer sshd_config
sudo cp /etc/ssh/sshd_config /etc/ssh/sshd_config.bak
sudo sed -i 's/^#\\?PermitRootLogin.*/PermitRootLogin no/' /etc/ssh/sshd_config
sudo sed -i 's/^#\\?PasswordAuthentication.*/PasswordAuthentication no/' /etc/ssh/sshd_config

# 5) Validar config antes de reiniciar
sudo sshd -t
# (silencio = OK; se mostrar erro, NAO reinicie)

# 6) Reiniciar
sudo systemctl restart ssh

# 7) ABRA OUTRA SESSAO SSH e teste
# Se nova sessao funcionar, tudo OK
# Se nao, restaure: sudo cp /etc/ssh/sshd_config.bak /etc/ssh/sshd_config && sudo systemctl restart ssh`,verify:"'ssh servidor' deve entrar direto sem pedir senha. Após endurecimento, login com senha não funciona mais (só chave). 'sudo cat /var/log/auth.log | grep sshd' mostra logins."}],exercises:[{id:1,question:"Como gerar uma chave SSH moderna?",answer:"ssh-keygen -t ed25519 -C 'meu-email@exemplo.com'"},{id:2,question:"Como copiar sua chave pública para o servidor?",answer:"ssh-copy-id usuario@servidor (depois disso, 'ssh usuario@servidor' não pede senha)."},{id:3,question:"Permissão correta para ~/.ssh e ~/.ssh/id_ed25519?",answer:"Pasta ~/.ssh: 700 (drwx------). Chave privada: 600 (rw-------). SSH recusa permissões mais abertas."},{id:4,question:"Como conectar em servidor com porta SSH 2222?",answer:"ssh -p 2222 usuario@servidor"},{id:5,question:"O que faz o ProxyJump (-J)?",answer:"Conecta no destino PASSANDO por um bastion. Ex: 'ssh -J bastion@bastion.com user@interno' usa o bastion como salto."},{id:6,question:"Como copiar pasta via SSH com progress?",answer:"rsync -avzP --delete pasta/ servidor:/destino/ (melhor que scp -r para pastas grandes)."}],references:[{title:"Manual ssh",url:"https://manpages.debian.org/bookworm/openssh-client/ssh.1.en.html"},{title:"Manual sshd_config",url:"https://manpages.debian.org/bookworm/openssh-server/sshd_config.5.en.html"}]},{id:"hardening",title:"Segurança e Hardening Básico",icon:"🔒",category:"Rede e Segurança",description:"Práticas essenciais para reduzir superfície de ataque: updates automáticos, fail2ban, audit logs.",objectives:["Habilitar atualizações automáticas de segurança","Instalar fail2ban contra brute-force SSH","Configurar logging e auditoria básica","Conhecer práticas para minimizar superfície de ataque"],content:["Hardening = endurecimento. Conjunto de práticas que reduzem chances de ser invadido. Em servidor exposto à internet, é OBRIGATÓRIO. Em desktop pessoal, agradável de ter. Vamos pelos itens mais impactantes.",`1. unattended-upgrades — instala atualizações de SEGURANÇA automaticamente. CRÍTICO em servidor:

sudo apt install -y unattended-upgrades apt-listchanges
sudo dpkg-reconfigure -plow unattended-upgrades
# Responda 'Sim' para habilitar

Verifique config em /etc/apt/apt.conf.d/50unattended-upgrades. Por padrão instala só atualizações de security suite. Para incluir updates de stable, descomente as linhas correspondentes.

Teste com:
sudo unattended-upgrades --dry-run -d`,`2. fail2ban — banha IPs após N tentativas de login falhas. Padrão essencial contra brute-force SSH:

sudo apt install -y fail2ban
sudo systemctl enable --now fail2ban

Configure em /etc/fail2ban/jail.local (NÃO em jail.conf — é sobrescrito em update):

[DEFAULT]
bantime = 1h
findtime = 10m
maxretry = 5

[sshd]
enabled = true
port = ssh

Reinicie: sudo systemctl restart fail2ban.

Monitorar:
sudo fail2ban-client status
sudo fail2ban-client status sshd
sudo journalctl -u fail2ban -f`,`3. SSH endurecido — vimos no módulo SSH:
• PermitRootLogin no
• PasswordAuthentication no (depois de chave funcionando)
• AllowUsers wallyson    (limitar usuários que podem logar)
• Port diferente (raro, mas reduz noise)

4. Firewall ativo — UFW vimos. Sempre 'default deny incoming'.

5. Removeu serviços desnecessários:
sudo systemctl list-unit-files --state=enabled
Desabilite tudo que NÃO USA: bluetooth (servidor), avahi (servidor), cups (sem impressora), ModemManager (sem modem). Cada serviço habilitado = mais superfície de ataque.`,`6. Sysctl hardening — parâmetros do kernel para reforçar segurança. Crie /etc/sysctl.d/99-hardening.conf:

# Desabilita IPv6 forwarding (a menos que precise)
net.ipv6.conf.all.forwarding = 0
net.ipv4.ip_forward = 0

# ICMP redirects podem ser usados em ataques
net.ipv4.conf.all.accept_redirects = 0
net.ipv4.conf.all.send_redirects = 0

# Source routing geralmente desnecessario
net.ipv4.conf.all.accept_source_route = 0

# Ignora ICMP broadcast (anti-DDoS Smurf)
net.ipv4.icmp_echo_ignore_broadcasts = 1

# Loga pacotes 'martians' (com source IP impossivel)
net.ipv4.conf.all.log_martians = 1

# Protecao SYN flood
net.ipv4.tcp_syncookies = 1

Aplicar: 'sudo sysctl --system'.`,`7. AppArmor — sandbox de aplicações. Vem habilitado no Debian. Confirme:

sudo aa-status

Mostra perfis ativos. Em modo enforce, processo só pode fazer o que perfil permite. Adicionar perfis: pacote 'apparmor-profiles' e 'apparmor-profiles-extra'.

8. AuditD (avançado) — log de TUDO que acontece no sistema (chamadas de sistema, mudanças em arquivos, etc.):

sudo apt install -y auditd
sudo systemctl enable --now auditd

Configurar regras em /etc/audit/rules.d/. Útil para conformidade (PCI-DSS, HIPAA), mas verboso — só use se realmente precisa.`,`9. AIDE / rkhunter — detectores de modificações suspeitas:

sudo apt install -y aide rkhunter

AIDE faz hash de TUDO em /etc, /bin, /sbin, etc. Roda diariamente comparando — alerta se algo mudou (atacante modificando binário do sistema).

rkhunter procura rootkits conhecidos.

Nenhum dos dois é silver bullet — atacante avançado contorna. Mas eleva o nível.`,`10. Princípio do menor privilégio — sempre:
• Usuário comum por default. Sudo só quando precisa.
• Cada serviço com seu próprio usuário (nginx roda como www-data, postgres como postgres).
• Senhas FORTES (min 14 caracteres, complexidade variada). Use gerenciador (KeepassXC, Bitwarden).
• 2FA onde possível (Google Authenticator no SSH via libpam-google-authenticator).
• Não compartilhe credenciais. Cada pessoa, sua própria conta.`],commands:[{command:"sudo dpkg-reconfigure -plow unattended-upgrades",description:"Configura atualizações automáticas de segurança.",example:"sudo dpkg-reconfigure -plow unattended-upgrades"},{command:"sudo unattended-upgrades --dry-run",description:"Simula o que SERIA atualizado.",example:"sudo unattended-upgrades --dry-run -d"},{command:"sudo fail2ban-client status",description:"Status geral do fail2ban e jails ativas.",example:"sudo fail2ban-client status"},{command:"sudo fail2ban-client status sshd",description:"IPs banidos da jail SSH.",example:"sudo fail2ban-client status sshd"},{command:"sudo fail2ban-client unban IP",description:"Desbanir IP (caso tenha banido um seu por engano).",example:"sudo fail2ban-client unban 192.168.1.50"},{command:"sudo aa-status",description:"Status do AppArmor (perfis ativos).",example:"sudo aa-status"},{command:"sudo systemctl list-unit-files --state=enabled",description:"Lista serviços habilitados (para revisar e desabilitar não-essenciais).",example:"sudo systemctl list-unit-files --state=enabled --type=service"},{command:"sudo sysctl --system",description:"Aplica configs sysctl de /etc/sysctl.conf e /etc/sysctl.d/.",example:"sudo sysctl --system"}],tips:[{type:"danger",title:"Servidor exposto à internet SEM hardening = invadido em horas",content:"Bots fazem milhões de tentativas SSH/HTTP por minuto. Servidor com 'root/admin' como senha e SSH na 22 é invadido em poucas horas. Mínimo: SSH só por chave, fail2ban, firewall, unattended-upgrades."},{type:"info",title:"Hardening é processo, não evento",content:"Não é 'ativei e acabou'. Logs precisam ser monitorados, fail2ban ajustado, atualizações verificadas. Em produção, alguém precisa olhar tudo ao menos semanalmente."},{type:"success",title:"Lynis — auditoria automática",content:"Instale 'sudo apt install lynis' e rode 'sudo lynis audit system'. Faz centenas de checagens de segurança e te dá uma nota + lista de melhorias prioritárias. Excelente ponto de partida."}],practiceLabs:[{title:"Hardening minimo de servidor SSH em 5 minutos",goal:"Aplicar as 4 medidas mais impactantes em sequência.",steps:["Habilitar updates automáticos.","Instalar e ativar fail2ban.","Confirmar UFW ativo com SSH liberado.","Endurecer sshd_config (PasswordAuthentication=no)."],command:`# 1) Updates automaticos
sudo apt install -y unattended-upgrades apt-listchanges
sudo dpkg-reconfigure -plow unattended-upgrades

# 2) Fail2ban
sudo apt install -y fail2ban
sudo tee /etc/fail2ban/jail.local > /dev/null << 'EOF'
[DEFAULT]
bantime = 1h
findtime = 10m
maxretry = 5

[sshd]
enabled = true
EOF
sudo systemctl enable --now fail2ban

# 3) UFW (so se ainda nao ativo)
sudo ufw allow 22/tcp
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw --force enable

# 4) SSH endurecido (apos chave funcionar!)
sudo sed -i 's/^#\\?PermitRootLogin.*/PermitRootLogin no/' /etc/ssh/sshd_config
sudo sed -i 's/^#\\?PasswordAuthentication.*/PasswordAuthentication no/' /etc/ssh/sshd_config
sudo sshd -t && sudo systemctl restart ssh

# 5) Conferir
sudo systemctl status fail2ban
sudo ufw status verbose
sudo fail2ban-client status sshd`,verify:"fail2ban e ufw ativos, ssh recusa login com senha. Em servidor exposto, dentro de 1h fail2ban-client status sshd já mostra IPs banidos."},{title:"Auditoria automática com Lynis",goal:"Rodar uma auditoria completa de segurança e ler as recomendações.",steps:["Instalar lynis.","Rodar audit system.","Ver as warnings e suggestions."],command:`# 1) Instalar
sudo apt install -y lynis

# 2) Auditar
sudo lynis audit system

# 3) Ver relatorio resumido (final do output ou)
sudo lynis show details
sudo cat /var/log/lynis.log | tail -50

# 4) Ver score
sudo lynis show hardening-index`,verify:"Lynis te dá uma nota (0-100). Servidor sem hardening: 50-60. Após aplicar as práticas: 75-90. Suggestions vão te guiar para melhorar."}],exercises:[{id:1,question:"Como habilitar atualizações de segurança automáticas?",answer:"sudo apt install unattended-upgrades && sudo dpkg-reconfigure -plow unattended-upgrades."},{id:2,question:"Para que serve fail2ban?",answer:"Banha IPs após N tentativas de login falhas. Defesa essencial contra brute-force em SSH, web admin, etc. Padrão: 5 tentativas em 10 min = ban de 1h."},{id:3,question:"Por que não confiar só em mudar a porta SSH?",answer:"Atacantes escaneiam portas. Mudar 22 → 2222 só reduz o NOISE (bots vão na 22 só). Segurança real: SSH só por chave, fail2ban, firewall."},{id:4,question:"Comando para ver IPs banidos pelo fail2ban?",answer:"sudo fail2ban-client status sshd"},{id:5,question:"Como saber se o sistema tem AppArmor ativo?",answer:"sudo aa-status — mostra perfis enforced, complain, etc."},{id:6,question:"Ferramenta automatizada para auditar segurança do sistema?",answer:"Lynis: sudo apt install lynis && sudo lynis audit system. Te dá nota e lista de melhorias."}],references:[{title:"Wiki Debian — Security",url:"https://wiki.debian.org/Hardening"},{title:"Lynis (auditoria)",url:"https://cisofy.com/lynis/"},{title:"Fail2ban manual",url:"https://github.com/fail2ban/fail2ban/wiki"}]}],ik=[{id:"pipes-redirecionamento",title:"Pipes e Redirecionamento — A Filosofia Unix",icon:"🔗",category:"Shell e Produtividade",description:"|, >, >>, 2>, &> — combine comandos pequenos para fazer coisas grandes.",objectives:["Redirecionar stdout, stderr para arquivos","Encadear comandos com pipe (|)","Entender stdin/stdout/stderr (FDs 0, 1, 2)","Usar tee para gravar e mostrar ao mesmo tempo"],content:["A filosofia Unix: 'faça uma coisa, faça-a bem, e converse com outros programas via texto'. Cada comando faz pouco. Você COMBINA com pipes (|) para fazer coisas grandes. Aprender pipes muda completamente seu domínio de Linux.",`Todo programa tem 3 streams (file descriptors / FDs):
• 0 — stdin (entrada padrão, geralmente teclado)
• 1 — stdout (saída padrão, geralmente tela)
• 2 — stderr (saída de ERRO, também na tela)

Você pode redirecionar cada um separadamente para arquivos.`,`Operadores de redirecionamento:

comando > arquivo            stdout SOBREESCREVE arquivo
comando >> arquivo           stdout ANEXA ao arquivo
comando 2> erros.log         stderr para arquivo
comando > saida.log 2>&1     stdout E stderr para mesmo arquivo
comando &> tudo.log          atalho do anterior (Bash)
comando < entrada.txt        stdin do arquivo
comando << EOF
texto
EOF
                             heredoc — texto inline como stdin

Exemplos práticos:
ls /var/log > lista.txt              salva listagem
ls /naoexiste 2> erros.log           só erros vão para erros.log
ls > /dev/null 2>&1                  descarta tudo (silencia)`,`Pipe (|) — saída de um vira entrada do próximo:

ls -la /var/log | grep '\\.log$'              listagem filtrando .log
ps aux | grep firefox | grep -v grep          processos firefox (sem o próprio grep)
history | tail -20                            últimos 20 do histórico
dmesg | grep -i usb                           mensagens kernel sobre USB
cat arquivo.txt | sort | uniq | wc -l         linhas únicas ordenadas
ls -laS /var/ | head -10                      maiores arquivos de /var

Você pode encadear quantos pipes quiser.`,`tee — divide a saída: grava em arquivo E continua o pipe:

ls -la | tee listagem.txt              mostra E grava
ls | tee -a listagem.txt | wc -l       grava no final E conta
sudo apt update | tee /var/log/update.log

Útil quando quer LOGAR mas continuar trabalhando com a saída.`,`xargs — pega entrada de um pipe e USA como argumentos do próximo comando. Resolve casos onde pipe não funciona naturalmente:

find . -name '*.tmp' | xargs rm                 apaga todos .tmp encontrados
ls *.jpg | xargs -I {} cp {} /backup/           copia cada um
ps aux | grep firefox | awk '{print $2}' | xargs kill

O -I {} usa {} como placeholder para cada item.`,`Substituição de comando — pega saída de um comando como string em outro:

echo 'Hoje e $(date)'              # $(...) é a forma moderna
echo 'Hoje e \`date\`'               # backticks (clássico, evite)

cd $(dirname /var/log/syslog)      # cd /var/log
rm -f $(find /tmp -name '*.tmp')

O ambiente é literalmente substituído pela saída antes do shell executar o comando final.`,`Combinações úteis do dia a dia:

# Top 10 maiores arquivos em /home
sudo du -ah /home | sort -rh | head -10

# Top 10 IPs com mais tentativas SSH falhas
sudo grep 'Failed password' /var/log/auth.log | grep -oE '[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}' | sort | uniq -c | sort -rn | head

# Quantos arquivos .py no projeto
find . -name '*.py' | wc -l

# Quantas linhas de código Python (excluindo testes e venv)
find . -name '*.py' -not -path '*/venv/*' -not -path '*/test*' | xargs wc -l | tail -1

# Erros de hoje no journal
sudo journalctl --since today -p err | tee /tmp/erros-hoje.log

A arte é DECOMPOR o problema: 'eu quero X' → 'preciso de A, depois filtrar por B, depois ordenar por C'.`],commands:[{command:">",description:"Redireciona stdout (sobrescreve).",example:"ls > listagem.txt"},{command:">>",description:"Redireciona stdout (append).",example:"echo nova_linha >> arquivo.txt"},{command:"2>",description:"Redireciona stderr.",example:"comando 2> erros.log"},{command:"&>",description:"stdout + stderr para mesmo lugar (Bash).",example:"comando &> tudo.log"},{command:"|",description:"Pipe — saída de um vira entrada do próximo.",example:"ls | grep .log"},{command:"tee",description:"Grava em arquivo E continua o pipe.",example:"ls | tee listagem.txt | wc -l",flags:[{flag:"-a",description:"Append (não sobrescreve)"}]},{command:"xargs",description:"Pega input do pipe e usa como argumentos.",example:"find . -name '*.tmp' | xargs rm",flags:[{flag:"-I {}",description:"Usa {} como placeholder"},{flag:"-n N",description:"N argumentos por chamada"},{flag:"-P N",description:"Paralelo (N processos)"}]},{command:"$(comando)",description:"Substituição de comando — usa saída como string.",example:"echo 'Hoje: $(date +%d/%m/%Y)'"},{command:"comando < arquivo",description:"stdin do arquivo (= cat arquivo | comando).",example:"wc -l < /etc/passwd"},{command:"comando << EOF",description:"Heredoc — texto inline como stdin.",example:`cat << EOF > config.txt
linha1
linha2
EOF`}],tips:[{type:"info",title:"stderr não vai pelo pipe",content:"'comando | grep' filtra só stdout. Se erros aparecem, é stderr. Para incluí-lo: 'comando 2>&1 | grep' (redireciona stderr para stdout antes do pipe)."},{type:"success",title:"/dev/null é amigo",content:"Para silenciar tudo (output desnecessário em scripts): 'comando > /dev/null 2>&1'. Para só silenciar erros: 'comando 2>/dev/null'. Útil em backgrounds."}],practiceLabs:[{title:"Análise de logs com pipe",goal:"Usar pipes para extrair informação útil de logs grandes.",steps:["Conte quantas linhas no syslog.","Encontre as 5 mensagens mais frequentes.","Quantos erros nas últimas 24h.","Salve em arquivo para análise."],command:`# 1) Total de linhas
sudo wc -l /var/log/syslog

# 2) 5 mensagens mais frequentes (sem timestamp e PID)
sudo cat /var/log/syslog | awk '{$1=$2=$3=$4=""; print}' | sort | uniq -c | sort -rn | head -5

# 3) Erros nas ultimas 24h
sudo journalctl --since '1 day ago' -p err | wc -l

# 4) Salvar em arquivo
sudo journalctl --since '1 day ago' -p err > ~/erros-24h.log
echo "Salvei $(wc -l < ~/erros-24h.log) erros em ~/erros-24h.log"`,verify:"Você consegue extrair contagens, padrões mais frequentes e salvar para análise — isso é o dia a dia de quem administra Linux."}],exercises:[{id:1,question:"O que faz '> /dev/null 2>&1'?",answer:"Descarta TODA a saída (stdout E stderr). Útil em scripts para silenciar comandos que você não quer poluindo logs."},{id:2,question:"Diferença entre > e >>?",answer:"> sobrescreve o arquivo. >> anexa ao final. Use >> para logs (não perde o que estava lá)."},{id:3,question:"Como contar linhas únicas em um arquivo?",answer:"sort arquivo | uniq | wc -l (sort primeiro, uniq remove duplicatas adjacentes, wc -l conta)."},{id:4,question:"Como gravar saída de comando em arquivo E continuar vendo na tela?",answer:"comando | tee arquivo (ou tee -a para append)."},{id:5,question:"Como apagar todos os arquivos .tmp encontrados pelo find?",answer:"find . -name '*.tmp' | xargs rm (ou find . -name '*.tmp' -delete, mais seguro)."},{id:6,question:"Como capturar erros (stderr) em arquivo separado dos sucessos?",answer:"comando > saida.log 2> erros.log"}],references:[{title:"Bash redirection guide",url:"https://www.gnu.org/software/bash/manual/html_node/Redirections.html"},{title:"Filosofia Unix (Wikipedia)",url:"https://en.wikipedia.org/wiki/Unix_philosophy"}]},{id:"shell-scripting",title:"Shell Scripting Básico",icon:"📜",category:"Shell e Produtividade",description:"Bash scripts: variáveis, if, for, funções — automatize qualquer coisa que você repete.",objectives:["Criar e executar scripts bash","Usar variáveis, condicionais e loops","Receber argumentos da linha de comando","Lidar com erros (set -e, exit codes)"],content:["Shell script = arquivo de texto com comandos bash. O Bash interpreta linha por linha. Útil para automatizar TUDO que você faz mais de uma vez. Não é uma 'linguagem de programação' tradicional, mas resolve 80% dos casos de automação.",`Anatomia de um script:

#!/bin/bash                          # shebang — diz qual interpretador usar
set -euo pipefail                    # opções de segurança (recomendadas)

# Comentário
echo 'Olá, mundo!'

Depois:
chmod +x script.sh                   # tornar executável
./script.sh                           # rodar
bash script.sh                        # alternativa (sem precisar de chmod)`,`set -euo pipefail — as 4 opções essenciais. SEMPRE use:
• -e — sai imediatamente se algum comando falhar (não continua silenciosamente)
• -u — erro se variável usada está indefinida (acaba com 'rm -rf $VAR_VAZIA')
• -o pipefail — erro em pipe se qualquer comando falhar (não só o último)

Sem essas opções, seu script pode falhar SILENCIOSAMENTE e continuar.`,`Variáveis:

NOME='Wallyson'                       # SEM espaços ao redor do =
DATA=$(date +%Y-%m-%d)               # substituição de comando
NUMERO=42

echo "Olá, $NOME"                    # aspas DUPLAS = expande variáveis
echo 'Olá, $NOME'                    # aspas SIMPLES = NÃO expande
echo "\\\${NOME}_backup_\\\${DATA}.tar"    # \\\${} resolve nome ambíguo

Variáveis em maiúsculas por convenção. Não há tipos — tudo é string.`,`Argumentos da linha de comando — passados ao script:

#!/bin/bash
# script.sh nome idade

echo "Primeiro arg: \\$1"             # 'nome'
echo "Segundo arg: \\$2"              # 'idade'
echo "Todos: \\$@"                    # 'nome idade'
echo "Quantos: \\$#"                  # 2
echo "Nome do script: \\$0"           # './script.sh'

Valide:
if [ -z "\\$1" ]; then
    echo 'Uso: \\$0 NOME IDADE'
    exit 1
fi`,`Condicionais:

# Sintaxe moderna [[ ]] (preferida no bash)
if [[ -f /etc/hostname ]]; then
    echo 'arquivo existe'
elif [[ -d /etc ]]; then
    echo 'diretorio existe'
else
    echo 'nada'
fi

# Comparações
[[ "\\$NOME" == 'Wallyson' ]]            # string igual
[[ "\\$NOME" != 'Maria' ]]               # diferente
[[ "\\$NUM" -eq 42 ]]                    # número igual (-eq, -ne, -lt, -gt, -le, -ge)
[[ -f arquivo ]]                        # arquivo existe (-d dir, -e qualquer, -L link)
[[ -z "\\$VAR" ]]                        # vazia
[[ -n "\\$VAR" ]]                        # não vazia
[[ "\\$STR" =~ ^[0-9]+\\$ ]]              # regex match

# Combinar
[[ -f arq.txt && -r arq.txt ]]         # AND
[[ "\\$X" == 'a' || "\\$X" == 'b' ]]     # OR`,`Loops:

# for em lista
for i in 1 2 3 4 5; do
    echo "numero \\$i"
done

# for em arquivos
for arq in *.txt; do
    echo "processando \\$arq"
    cp "\\$arq" backup/
done

# for numerico (estilo C)
for ((i=0; i<10; i++)); do
    echo \\$i
done

# while
i=0
while [[ \\$i -lt 5 ]]; do
    echo \\$i
    i=\\$((i+1))
done

# while leitura linha por linha de arquivo
while read linha; do
    echo "li: \\$linha"
done < arquivo.txt`,`Funções:

saudacao() {
    local nome=\\$1                        # local: variável só dessa função
    echo "Olá, \\$nome!"
    return 0                              # exit code (0=sucesso, ≠0=erro)
}

saudacao 'Wallyson'

# Capturar saída de função
resultado=\\$(saudacao 'Maria')
echo "Resultado: \\$resultado"

Use 'local' para evitar bagunça com variáveis globais.`,`Tratamento de erros:

# Verificar se comando existe
if ! command -v jq &> /dev/null; then
    echo 'Erro: jq nao instalado. Instale: sudo apt install jq'
    exit 1
fi

# Trap — executa ao sair (Ctrl+C, erro, normal)
trap 'echo Limpando...; rm -rf /tmp/meu-trabalho' EXIT

# Conferir exit code de comando anterior
ls /naoexiste
if [[ \\$? -ne 0 ]]; then
    echo 'ls falhou'
fi

# Combinar com && e ||
comando1 && echo OK || echo FALHOU
mkdir -p /tmp/dir && cd /tmp/dir`],commands:[{command:"#!/bin/bash",description:"Shebang — primeira linha de qualquer script bash.",example:`#!/bin/bash
set -euo pipefail
echo 'olá'`},{command:"chmod +x",description:"Torna script executável.",example:"chmod +x script.sh && ./script.sh"},{command:"$(comando)",description:"Substituição de comando.",example:"HOJE=$(date +%Y-%m-%d)"},{command:"$VAR / ${VAR}",description:"Acessa variável. Use ${} quando ambíguo.",example:'echo "${NOME}_backup.tar"'},{command:"if / then / else / fi",description:"Condicional.",example:"if [[ -f arquivo ]]; then echo existe; fi"},{command:"for / while",description:"Loops.",example:'for f in *.txt; do echo "$f"; done'},{command:"function / return",description:"Função.",example:'minha_func() { echo "$1"; return 0; }'},{command:"trap",description:"Executa comando ao sair (cleanup).",example:"trap 'rm -rf /tmp/temp' EXIT"},{command:"set -euo pipefail",description:"Opções de segurança ESSENCIAIS.",example:"set -euo pipefail"},{command:"exit N",description:"Sai do script com exit code N (0=sucesso, ≠0=erro).",example:"exit 1"}],tips:[{type:"warning",title:"Sem 'set -euo pipefail' = bug silencioso",content:"Sem essas opções, 'cd /naoexiste; rm -rf *' (com cd falhando) APAGA O DIRETÓRIO ATUAL. Com set -e, o script para no cd. Use sempre. Não tem desvantagem."},{type:"danger",title:'Sempre aspas em variáveis: "$VAR"',content:'Sem aspas, "rm -rf $DIR" com $DIR vazio vira "rm -rf " (apaga pwd). E nomes com espaço quebram. SEMPRE: rm -rf "$DIR".'},{type:"success",title:"Use shellcheck para validar",content:"'sudo apt install shellcheck' depois 'shellcheck script.sh'. Encontra TODOS os bugs comuns: sem aspas, condicional errada, exit code não-checado. Use sempre antes de colocar em produção."}],practiceLabs:[{title:"Script de backup com argumentos e validação",goal:"Criar script real que recebe pasta como argumento e cria backup .tar.gz.",steps:["Crie o arquivo do script.","Implemente: validação de argumento, criação do backup, log.","Torne executável e teste."],command:`# Criar script
cat > ~/scripts/backup.sh << 'BASH_EOF'
#!/bin/bash
set -euo pipefail

# Validar argumento
if [[ \\$# -lt 1 ]]; then
    echo "Uso: \\$0 PASTA"
    echo "Exemplo: \\$0 /home/wallyson/Documentos"
    exit 1
fi

PASTA="\\$1"
DATA=\\$(date +%Y%m%d_%H%M%S)
DESTINO="/tmp/backup_\\$(basename "\\$PASTA")_\\$DATA.tar.gz"
LOG=~/scripts/backup.log

# Validar que pasta existe
if [[ ! -d "\\$PASTA" ]]; then
    echo "Erro: pasta \\$PASTA nao existe"
    exit 2
fi

# Fazer o backup
echo "[\\$(date)] Iniciando backup de \\$PASTA" | tee -a "\\$LOG"
tar -czf "\\$DESTINO" "\\$PASTA" 2>>"\\$LOG"

# Informar tamanho
TAMANHO=\\$(du -h "\\$DESTINO" | cut -f1)
echo "[\\$(date)] OK - \\$DESTINO (\\$TAMANHO)" | tee -a "\\$LOG"

# Limpar backups com mais de 7 dias
find /tmp -name 'backup_*.tar.gz' -mtime +7 -delete
BASH_EOF

chmod +x ~/scripts/backup.sh

# Testar
mkdir -p ~/scripts
~/scripts/backup.sh ~/Documentos

# Conferir
ls -lh /tmp/backup_*.tar.gz
cat ~/scripts/backup.log`,verify:"Backup é criado em /tmp/. Log mostra entradas datadas. Sem argumento, mostra mensagem de uso. Pasta inexistente, mostra erro."}],exercises:[{id:1,question:"Qual a primeira linha de qualquer script bash?",answer:"#!/bin/bash (shebang)."},{id:2,question:"Por que 'set -euo pipefail' é recomendado?",answer:"-e sai em erro, -u erro se variável indefinida, -o pipefail erro em pipe. Sem isso, scripts continuam silenciosamente após falhas."},{id:3,question:"Como receber primeiro argumento da linha de comando?",answer:"$1 (segundo é $2, todos $@, quantidade $#)."},{id:4,question:"Diferença entre aspas simples e duplas?",answer:`Duplas EXPANDEM variáveis: "olá $NOME" vira 'olá Wallyson'. Simples NÃO expandem: 'olá $NOME' fica literal.`},{id:5,question:"Como verificar se um arquivo existe?",answer:"if [[ -f arquivo ]]; then echo existe; fi (-f arquivo, -d diretório, -e qualquer)."},{id:6,question:"Ferramenta para validar scripts bash?",answer:"shellcheck — sudo apt install shellcheck && shellcheck script.sh."}],references:[{title:"Bash Reference Manual",url:"https://www.gnu.org/software/bash/manual/"},{title:"ShellCheck (validar scripts)",url:"https://www.shellcheck.net/"},{title:"Bash Pitfalls (erros comuns)",url:"https://mywiki.wooledge.org/BashPitfalls"}]},{id:"atalhos-produtividade",title:"Atalhos e Produtividade no Bash",icon:"⚡",category:"Shell e Produtividade",description:"Aliases, funções úteis no .bashrc, plugins, e atalhos avançados que aceleram seu trabalho.",objectives:["Criar aliases permanentes","Personalizar prompt e cores","Usar histórico avançado","Conhecer alternativas modernas (Zsh + Oh My Zsh, fish)"],content:[`Aliases — atalhos para comandos longos. Definidos no ~/.bashrc:

alias ll='ls -lah'
alias gs='git status'
alias ga='git add'
alias gc='git commit'
alias gp='git push'
alias ..='cd ..'
alias ...='cd ../..'
alias h='history | grep'
alias df='df -h'
alias du='du -h'
alias rm='rm -i'                    # mais seguro
alias cp='cp -i'
alias mv='mv -i'
alias update='sudo apt update && sudo apt full-upgrade -y && sudo apt autoremove -y'
alias myip='curl -s ifconfig.me'

Após editar ~/.bashrc: 'source ~/.bashrc' (ou abra novo terminal).`,`Funções no ~/.bashrc — para casos onde alias é insuficiente:

# Cria pasta e entra nela
mkcd() {
    mkdir -p "\\$1" && cd "\\$1"
}

# Extrair qualquer formato de arquivo compactado
extract() {
    case \\$1 in
        *.tar.gz|*.tgz) tar -xzf "\\$1" ;;
        *.tar.bz2)      tar -xjf "\\$1" ;;
        *.zip)          unzip "\\$1" ;;
        *.7z)           7z x "\\$1" ;;
        *)              echo 'Formato não suportado' ;;
    esac
}

# Buscar processo pelo nome
psg() {
    ps aux | grep -i "\\$1" | grep -v grep
}

# Tamanho de cada subpasta do diretório atual
sizes() {
    du -sh ./* 2>/dev/null | sort -h
}`,`Personalizar PROMPT (PS1) — cores e info útil. Adicione no ~/.bashrc:

# Prompt colorido com git branch
parse_git_branch() {
    git branch 2>/dev/null | grep '*' | sed 's/* //'
}

export PS1='\\\\[\\\\e[32m\\\\]\\\\u@\\\\h\\\\[\\\\e[0m\\\\]:\\\\[\\\\e[34m\\\\]\\\\w\\\\[\\\\e[33m\\\\] $(parse_git_branch)\\\\[\\\\e[0m\\\\]\\\\$ '

# Resultado:
# wallyson@debian:/home/wallyson (main)$

Códigos: \\\\e[32m=verde, [33m=amarelo, [34m=azul, [0m=reset.`,`Histórico avançado — adicione no ~/.bashrc:

HISTSIZE=10000                     # tamanho em memória
HISTFILESIZE=20000                  # tamanho no arquivo
HISTCONTROL=ignoreboth              # ignora duplicados E linhas começando com espaço
HISTTIMEFORMAT='%F %T '             # mostra timestamp
shopt -s histappend                 # append em vez de sobrescrever
PROMPT_COMMAND='history -a'         # salva histórico após cada comando

Depois Ctrl+R fica muito mais útil.`,`Atalhos AVANÇADOS de bash que valem ouro:

Ctrl+R                  buscar histórico (já vimos)
Alt+.                   inserir último argumento do comando anterior
!!                      último comando
!apt                    último comando que começou com 'apt'
!:gs/old/new            substituir 'old' por 'new' no último comando
!\\$                     último argumento do comando anterior
ctrl+xe                 abre o comando atual em editor (vim/nano)
ctrl+w                  apaga palavra à esquerda
ctrl+u                  apaga linha toda à esquerda
esc+t                   troca duas palavras

Memorize 5 desses e seu workflow muda.`,`Bash não é o único shell. Alternativas modernas:
• Zsh — superset do Bash com features extras (autocompletion melhor, themes). Padrão no macOS.
• fish — shell amigável, autocompleta SOZINHO baseado em histórico (mostra em cinza enquanto digita). Sintaxe diferente do Bash.

Instalar Zsh + Oh My Zsh (framework de plugins/themes):

sudo apt install -y zsh
sh -c "\\$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
chsh -s \\$(which zsh)              # define como shell padrão
# Logout/login

Vem com 200+ plugins e dezenas de themes prontos. Plugins essenciais: git, sudo, autojump, zsh-syntax-highlighting, zsh-autosuggestions.`,`Ferramentas que enriquecem o terminal — instale e adore:

sudo apt install -y bat exa fd-find ripgrep fzf zoxide tldr

• bat — cat com syntax highlighting e numeração
• exa — ls colorido com ícones (instale também 'fonts-firacode')
• fd-find — find amigável (use 'fdfind' no Debian)
• ripgrep (rg) — grep mais rápido
• fzf — fuzzy finder interativo. Aliás Ctrl+R fica magia.
• zoxide — substitui cd com 'aprende' diretórios mais visitados (z para 'documentos')
• tldr — manuais práticos

No .bashrc adicione:
alias cat='bat'
alias ls='exa --icons'
alias find='fd'
alias grep='rg'
eval "\\$(zoxide init bash)"`],commands:[{command:"alias",description:"Cria atalho. Sem argumentos, lista todos.",example:"alias ll='ls -lah'"},{command:"source ~/.bashrc",description:"Recarrega .bashrc no shell atual (sem precisar reabrir terminal).",example:"source ~/.bashrc"},{command:"echo $PS1",description:"Mostra seu prompt atual.",example:"echo $PS1"},{command:"history",description:"Histórico (com timestamps se HISTTIMEFORMAT setado).",example:"history | tail -20"},{command:"type comando",description:"Mostra se comando é alias, função, builtin ou binário.",example:"type ls"},{command:"which comando",description:"Mostra caminho do binário (não vê aliases).",example:"which python3"},{command:"fc -l",description:"Lista histórico recente para edição.",example:"fc -l -10"},{command:"chsh -s",description:"Muda shell padrão.",example:"chsh -s $(which zsh)"}],tips:[{type:"info",title:"Cuidado ao alias rm",content:`'alias rm="rm -i"' protege você no terminal interativo MAS scripts não pegam aliases, então scripts continuam usando rm sem -i. Não confie só nisso.`},{type:"success",title:"fzf + Ctrl+R = magia",content:"Instale 'sudo apt install fzf' depois '~/.fzf/install'. Apertar Ctrl+R abre busca FUZZY no histórico — digita parte do comando, navega com setas. Vida nova."}],practiceLabs:[{title:"Setup .bashrc produtivo",goal:"Aplicar conjunto de aliases e configs úteis no seu .bashrc.",steps:["Faça backup do .bashrc atual.","Adicione aliases e configs.","Source para aplicar.","Teste alguns comandos."],command:`# 1) Backup
cp ~/.bashrc ~/.bashrc.bak

# 2) Adicionar configs
cat >> ~/.bashrc << 'EOF'

# === MEUS ATALHOS ===

# Aliases
alias ll='ls -lah'
alias la='ls -A'
alias ..='cd ..'
alias ...='cd ../..'
alias h='history'
alias hg='history | grep'
alias myip='curl -s ifconfig.me; echo'
alias ports='ss -tulpn'
alias update='sudo apt update && sudo apt full-upgrade -y && sudo apt autoremove -y'
alias df='df -h'
alias du1='du -h --max-depth=1'

# Seguranca
alias rm='rm -i'
alias cp='cp -i'
alias mv='mv -i'

# Funcoes
mkcd() { mkdir -p "$1" && cd "$1"; }
psg() { ps aux | grep -i "$1" | grep -v grep; }

# Historico melhor
HISTSIZE=10000
HISTFILESIZE=20000
HISTCONTROL=ignoreboth
HISTTIMEFORMAT='%F %T '
shopt -s histappend

# Prompt com cor
export PS1='\\[\\e[32m\\]\\u@\\h\\[\\e[0m\\]:\\[\\e[34m\\]\\w\\[\\e[0m\\]\\\\$ '

EOF

# 3) Aplicar
source ~/.bashrc

# 4) Testar
ll
mkcd /tmp/teste-mkcd
pwd
cd ~
psg bash
myip`,verify:"Aliases funcionam (ll mostra listagem detalhada). mkcd cria pasta e entra. Prompt mudou de cor."}],exercises:[{id:1,question:"Como criar um alias que mostra processos do firefox?",answer:"alias ff='ps aux | grep firefox' (depois adicione no ~/.bashrc para persistir)."},{id:2,question:"Como aplicar mudanças no ~/.bashrc sem reabrir terminal?",answer:"source ~/.bashrc (ou '. ~/.bashrc' que é o mesmo)."},{id:3,question:"Como ver TODOS os aliases definidos?",answer:"alias (sem argumentos)."},{id:4,question:"Atalho para inserir o último argumento do comando anterior?",answer:"Alt+. (ou !$). Ex: 'mkdir foo' depois 'cd Alt+.' → 'cd foo'."},{id:5,question:"Como saber se 'ls' que você roda é alias ou binário real?",answer:"type ls — mostra se é alias, função, builtin ou binário com caminho."},{id:6,question:"Shell alternativo popular ao Bash?",answer:"Zsh (com framework Oh My Zsh para themes/plugins) ou fish (amigável, autocompletion automático)."}],references:[{title:"Oh My Zsh",url:"https://ohmyz.sh/"},{title:"bashrc generator",url:"https://bashrcgenerator.com/"},{title:"Awesome Shell (lista curada)",url:"https://github.com/alebcay/awesome-shell"}]}],lk=[{id:"discos-particoes",title:"Discos, Partições e Filesystems",icon:"💾",category:"Discos e Armazenamento",description:"lsblk, fdisk, mkfs, mount, /etc/fstab — gerencie discos, partições e montagens.",objectives:["Listar discos e partições","Criar partições novas","Formatar com ext4/xfs/btrfs","Montar manualmente e configurar /etc/fstab"],content:[`Cada disco no Linux é representado por um arquivo em /dev:
• /dev/sda, /dev/sdb — HDs/SSDs SATA, USB
• /dev/nvme0n1, /dev/nvme1n1 — SSDs NVMe (mais rápidos)
• /dev/mmcblk0 — cartões SD

Partições do disco recebem número:
• /dev/sda1, /dev/sda2, /dev/sda3 — partições do primeiro HD
• /dev/nvme0n1p1, /dev/nvme0n1p2 — partições NVMe (note o 'p')`,`Para listar discos e partições:

lsblk                     visão hierárquica (use sempre)
lsblk -f                  + filesystem e UUID
lsblk -o NAME,SIZE,FSTYPE,MOUNTPOINT,LABEL

sudo fdisk -l             tudo, com detalhes (DOS partition tables)
sudo parted -l            alternativa moderna (suporta GPT melhor)

df -h                     uso de espaço por filesystem MONTADO`,`Esquemas de partição — duas tecnologias:
• MBR (Master Boot Record) — antigo. Limite: 4 partições primárias OU 3 primárias + 1 estendida (com várias lógicas). Discos até 2TB.
• GPT (GUID Partition Table) — moderno. Limite: 128 partições. Discos > 2TB. Melhor metadata. PADRÃO em sistemas UEFI.

Ver qual: 'sudo parted /dev/sda print' (procure 'Partition Table: gpt' ou 'msdos').`,`Criar partição (use parted, mais moderno e seguro que fdisk):

sudo parted /dev/sdb                    interativo
(parted) print                          # ver atual
(parted) mklabel gpt                    # se vazio, cria GPT
(parted) mkpart primary ext4 0% 100%    # cria partição usando todo o disco
(parted) print
(parted) quit

Depois 'sudo partprobe' ou 'sudo udevadm settle' para o kernel reconhecer.`,`Formatar (criar filesystem) — escolha o tipo certo:
• ext4 — padrão Linux, sólido, suporta journaling. Use sempre que em dúvida.
• xfs — bom para arquivos grandes (mídia, banco). Não pode encolher.
• btrfs — moderno, snapshots integrados, mas algumas features ainda em beta. Padrão do openSUSE/Fedora Workstation.
• vfat (FAT32) — para pendrive compartilhado com Windows. Sem permissões Unix.
• exfat — pendrive grande compartilhado com Windows/macOS.

Comandos de formatação:
sudo mkfs.ext4 -L meu-disco /dev/sdb1
sudo mkfs.xfs -L dados /dev/sdb1
sudo mkfs.btrfs -L dados /dev/sdb1
sudo mkfs.vfat -F 32 -n PENDRIVE /dev/sdb1
sudo mkfs.exfat -n PENDRIVE /dev/sdb1

O -L (label) ajuda a identificar — aparece em lsblk -f.`,`Montar e desmontar:

# Montar manualmente
sudo mkdir -p /mnt/dados
sudo mount /dev/sdb1 /mnt/dados

# Desmontar
sudo umount /mnt/dados

# Forçar desmontar (se ocupado)
sudo umount -l /mnt/dados        # lazy umount
sudo fuser -m /mnt/dados         # ver quem usa

# Ver montagens atuais
mount | grep '^/dev'
findmnt                          # alternativa bonita`,`/etc/fstab — montagens AUTOMÁTICAS no boot. Formato (campos separados por espaço/tab):

# UUID                                       MONTAGEM   FS    OPÇÕES               DUMP PASS
UUID=abc-123-def                            /mnt/dados ext4  defaults,nofail      0    2

Campos:
• 1: identificador (use UUID em vez de /dev/sdb1 — UUID não muda se reordenar discos)
• 2: ponto de montagem
• 3: filesystem
• 4: opções (defaults, ro, rw, noexec, nofail, users)
• 5: dump (0 = não fazer backup com dump, deprecated)
• 6: pass (ordem do fsck no boot — 1 para /, 2 para outros, 0 = não checar)

Descobrir UUID: 'lsblk -f' ou 'blkid'.`,`Opções importantes do fstab:
• defaults — equivalente a rw,suid,dev,exec,auto,nouser,async
• nofail — se o disco não estiver presente, não falha o boot (CRÍTICO para discos USB removíveis)
• ro — read only
• noexec — não permite executar binários (segurança em /tmp e particões de dados)
• users — qualquer usuário pode montar/desmontar
• X-mount.mkdir — cria o ponto de montagem se não existir

Ao editar fstab, TESTE antes de reiniciar:
sudo mount -a                    # tenta montar tudo do fstab
# Se der erro, conserta SEM reiniciar. Senão, sistema pode não bootar.`,`Recuperar boot quebrado por fstab — se você editou fstab e o sistema não dá boot:
• Sistema entra em modo de emergência (pede senha root)
• Monte / como rw: 'mount -o remount,rw /'
• Edite fstab: 'nano /etc/fstab' (corrija ou adicione 'nofail')
• Reinicie: 'reboot'

Lição: SEMPRE teste com 'sudo mount -a' antes de reiniciar.`],commands:[{command:"lsblk -f",description:"Lista discos com filesystem e UUID.",example:"lsblk -f",output:`NAME    FSTYPE LABEL    UUID                                 MOUNTPOINTS
sda                                                                  
├─sda1  vfat            5AB7-ECDD                            /boot/efi
├─sda2  ext4   sistema  abc-123-def                          /
└─sda3  swap            xyz-456-uvw                          [SWAP]
sdb                                                                  
└─sdb1  ext4   dados    789-abc-def                          `},{command:"sudo fdisk -l",description:"Detalhes de todos os discos.",example:"sudo fdisk -l /dev/sdb"},{command:"sudo parted",description:"Ferramenta moderna para particionar (GPT).",example:"sudo parted /dev/sdb mkpart primary ext4 0% 100%"},{command:"sudo mkfs.ext4 / mkfs.xfs / mkfs.btrfs",description:"Formatar partição.",example:"sudo mkfs.ext4 -L dados /dev/sdb1"},{command:"sudo mount / umount",description:"Montar / desmontar.",example:"sudo mount /dev/sdb1 /mnt/dados"},{command:"blkid",description:"Mostra UUID e tipo de FS de cada partição.",example:"sudo blkid"},{command:"df -h",description:"Uso de espaço dos filesystems montados.",example:"df -hT"},{command:"du -sh",description:"Tamanho de pastas.",example:"sudo du -sh /home/* | sort -h"},{command:"sudo fsck",description:"Filesystem check — repara erros (com partição DESMONTADA).",example:"sudo fsck -y /dev/sdb1"},{command:"sudo mount -a",description:"Tenta montar tudo do fstab. ESSENCIAL após editar fstab antes de reiniciar.",example:"sudo mount -a"}],tips:[{type:"danger",title:"Cuidado ao formatar",content:"mkfs.ext4 /dev/sdX APAGA TUDO da partição (e do disco se você apontar para o disco em vez da partição). Sempre confira com 'lsblk -f' qual é o /dev correto antes."},{type:"warning",title:"Use UUID em fstab, não /dev/sdX",content:"Nomes /dev/sdb podem mudar quando você adiciona/remove discos. UUID é único e estável. Sempre 'UUID=xxx' em vez de '/dev/sdb1' no fstab."},{type:"success",title:"Sempre teste fstab com 'mount -a'",content:"Após editar /etc/fstab, rode 'sudo mount -a' antes de reiniciar. Se houver erro, conserta. Sem isso, sistema pode entrar em modo de emergência no próximo boot."}],practiceLabs:[{title:"Formatar e montar permanentemente um HD externo",goal:"Procedimento completo para usar um disco novo: particionar, formatar, montar, configurar fstab.",steps:["Identifique o disco (CUIDADO!).","Crie partição GPT.","Formate em ext4 com label.","Monte temporariamente.","Configure fstab para montagem automática.","Teste com mount -a."],command:`# 1) Identificar disco (substitua sdb pelo SEU disco - ATENCAO!)
lsblk -f
# Confirme o tamanho do disco antes de continuar

# 2) Criar tabela GPT e particao
sudo parted /dev/sdb --script mklabel gpt
sudo parted /dev/sdb --script mkpart primary ext4 0% 100%
sudo partprobe /dev/sdb
lsblk

# 3) Formatar com label
sudo mkfs.ext4 -L meu-disco /dev/sdb1

# 4) Pegar UUID
UUID=\\$(sudo blkid -s UUID -o value /dev/sdb1)
echo "UUID: \\$UUID"

# 5) Criar ponto de montagem
sudo mkdir -p /mnt/meu-disco

# 6) Montar temporariamente
sudo mount /dev/sdb1 /mnt/meu-disco
df -h | grep meu-disco

# 7) Adicionar ao fstab
echo "UUID=\\$UUID  /mnt/meu-disco  ext4  defaults,nofail  0  2" | sudo tee -a /etc/fstab

# 8) TESTAR sem reiniciar (CRITICO)
sudo umount /mnt/meu-disco
sudo mount -a
df -h | grep meu-disco
# Se aparecer, esta tudo OK e sera montado automaticamente nos proximos boots`,verify:"Após mount -a, o disco deve aparecer em df -h. Reinicie e confira que continua montado em /mnt/meu-disco automaticamente."}],exercises:[{id:1,question:"Comando para ver discos e partições com UUID?",answer:"lsblk -f (ou 'sudo blkid' para ver só UUIDs)."},{id:2,question:"Diferença entre MBR e GPT?",answer:"MBR (clássico) suporta até 4 partições primárias e discos até 2TB. GPT (moderno) suporta 128 partições e discos enormes. UEFI requer GPT. Use GPT em discos novos."},{id:3,question:"Por que usar UUID em vez de /dev/sdb1 no fstab?",answer:"Nomes /dev/sdX podem mudar se você adiciona/remove discos (sdb pode virar sdc). UUID é gerado na formatação e não muda."},{id:4,question:"O que faz a opção 'nofail' no fstab?",answer:"Se o disco não estiver presente no boot, não falha (sistema continua bootando). Essencial para discos removíveis (HD externo, USB)."},{id:5,question:"Como testar /etc/fstab antes de reiniciar?",answer:"sudo mount -a — tenta montar tudo. Se der erro, conserta sem precisar reiniciar."},{id:6,question:"Filesystem padrão recomendado para Linux?",answer:"ext4 — sólido, com journaling, suportado em tudo. Use sempre que em dúvida."}],references:[{title:"Wiki Debian — fstab",url:"https://wiki.debian.org/fstab"},{title:"Manual mount",url:"https://manpages.debian.org/bookworm/mount/mount.8.en.html"}]},{id:"backup",title:"Estratégia de Backup com rsync e tar",icon:"🛟",category:"Discos e Armazenamento",description:"rsync, tar, borgbackup — backups manuais e automáticos, rotação, restauração.",objectives:["Fazer backup com tar (snapshots) e rsync (incremental)","Conhecer regra 3-2-1","Automatizar backups com timer + script","Conhecer borgbackup para deduplicação"],content:[`A regra de ouro: 3-2-1
• 3 cópias dos seus dados
• 2 mídias diferentes (HD + cloud, por exemplo)
• 1 cópia OFF-SITE (nuvem ou HD em outro lugar físico — proteção contra incêndio/roubo)

Usuários domésticos: 1 cópia local (HD externo) + 1 nuvem (Backblaze, Google Drive, S3) é o mínimo aceitável.`,`Backup com tar (snapshot completo, simples):

DATA=\\$(date +%Y%m%d_%H%M%S)
tar -czf /mnt/backup/home_\\$DATA.tar.gz /home/wallyson

# Incluindo exclusões
tar -czf backup.tar.gz \\\\
    --exclude='*.cache' \\\\
    --exclude='*/node_modules' \\\\
    --exclude='/home/*/Downloads' \\\\
    /home

# Restaurar
cd /tmp
tar -xzf backup.tar.gz       # extrai o conteúdo no diretório atual

Vantagens: arquivo único, fácil mover. Desvantagens: cada backup é COMPLETO (espaço), sem deduplicação.`,`Backup com rsync (incremental, melhor para uso contínuo):

rsync -avzP --delete /home/wallyson/ /mnt/backup/home/

Flags:
• -a archive — preserva tudo (permissões, dono, datas, links)
• -v verbose
• -z compressão (útil em transferência via SSH)
• -P progresso + parcial (recupera arquivos parcialmente copiados)
• --delete — remove no destino o que não está mais na origem (sincronização real)

PRIMEIRA execução demora (copia tudo). DAS PRÓXIMAS, só copia o que mudou.

IMPORTANTE: as barras finais ('/'). 'rsync /home/wallyson/ destino' copia o CONTEÚDO. 'rsync /home/wallyson destino' copia a PASTA.`,`rsync via SSH (backup para servidor remoto):

rsync -avzP --delete /home/wallyson/ servidor:/backups/wallyson/

A mesma sintaxe. SSH é usado automaticamente se o destino tem ':'. Use chaves SSH para automatizar (sem senha).`,`borgbackup — solução profissional. Deduplicação (cada bloco salvo uma vez), criptografia, compressão. Reduz dramaticamente o espaço em backups múltiplos.

sudo apt install -y borgbackup

# Inicializar repositório
borg init --encryption=repokey /mnt/backup/borg-repo

# Criar backup
borg create --stats --progress \\\\
    /mnt/backup/borg-repo::backup-\\$(date +%Y%m%d-%H%M%S) \\\\
    /home/wallyson \\\\
    --exclude='*.cache' \\\\
    --exclude='*/node_modules'

# Listar snapshots
borg list /mnt/backup/borg-repo

# Restaurar (extrai um snapshot)
cd /tmp
borg extract /mnt/backup/borg-repo::backup-20240425-120000

# Limpar antigos (mantém: 7 diários, 4 semanais, 6 mensais)
borg prune --keep-daily 7 --keep-weekly 4 --keep-monthly 6 /mnt/backup/borg-repo

Deduplicação significa: 100 GB de fotos backup-adas semanalmente por 1 ano ocupam ~110 GB no disco (não 5.2 TB).`,`Automatizar com systemd timer (vimos antes):

/etc/systemd/system/backup-rsync.service:
[Unit]
Description=Backup rsync da home

[Service]
Type=oneshot
User=wallyson
ExecStart=/usr/bin/rsync -azv --delete /home/wallyson/ /mnt/backup/home/

/etc/systemd/system/backup-rsync.timer:
[Unit]
Description=Backup diario

[Timer]
OnCalendar=daily
Persistent=true

[Install]
WantedBy=timers.target

sudo systemctl enable --now backup-rsync.timer`,`Cloud backup — opções gratuitas/baratas para a cópia OFF-SITE:
• rclone — frontend universal para Google Drive, OneDrive, Dropbox, S3, Backblaze B2. Use 'rclone sync /home/wallyson/ remote:/backup/'.
• restic — backup com deduplicação direto para nuvem (S3, B2, etc.).
• Backblaze B2 — armazenamento barato (\\$5/TB/mês).
• Borgbase — hosted Borg (especificamente para Borg).

Passo a passo do rclone:
sudo apt install -y rclone
rclone config         # interativo, configura sua nuvem
rclone sync /home/wallyson/ gdrive:/backup-debian/`,`Testar restauração — tão importante quanto o backup. Backup que NUNCA foi restaurado pode estar corrompido. Mensalmente:
• Pegue o backup mais recente
• Restaure para uma pasta temporária (tar -xzf, borg extract, rsync de volta)
• Confira que arquivos importantes abrem corretamente
• Apague a restauração

Sem teste, é Schroedinger's backup — pode estar bom ou ruim, você só sabe quando precisar.`],commands:[{command:"tar -czf",description:"Cria arquivo .tar.gz.",example:"tar -czf backup.tar.gz /home/wallyson",flags:[{flag:"-c",description:"Create"},{flag:"-z",description:"Comprimir com gzip (.tar.gz)"},{flag:"-j",description:"Comprimir com bzip2 (.tar.bz2, mais lento e menor)"},{flag:"-J",description:"Comprimir com xz (.tar.xz, mais lento e menor)"},{flag:"-f",description:"Arquivo de destino"},{flag:"--exclude",description:"Excluir padrão"}]},{command:"tar -xzf",description:"Extrai .tar.gz.",example:"tar -xzf backup.tar.gz -C /tmp/restaurar/"},{command:"tar -tzf",description:"Lista conteúdo (sem extrair).",example:"tar -tzf backup.tar.gz | head"},{command:"rsync -avzP",description:"Sync incremental (local ou remoto).",example:"rsync -avzP --delete /home/wallyson/ servidor:/backup/"},{command:"borg create",description:"Cria snapshot incremental com deduplicação.",example:"borg create /mnt/backup::name-$(date +%F) /home/wallyson"},{command:"borg list / extract",description:"Lista snapshots / extrai um.",example:"borg extract /mnt/backup::name-2024-04-25"},{command:"borg prune",description:"Limpa snapshots antigos por política de retenção.",example:"borg prune --keep-daily 7 --keep-weekly 4 /mnt/backup"},{command:"rclone sync",description:"Sync para cloud (Google Drive, S3, B2, etc.).",example:"rclone sync /home/wallyson/ gdrive:/backup/"}],tips:[{type:"danger",title:"rsync --delete é perigoso",content:"Se você inverter origem/destino, --delete pode APAGAR sua origem. SEMPRE confira a ordem: 'rsync ORIGEM/ DESTINO/'. Em produção, teste com '--dry-run' antes."},{type:"warning",title:"Backup que não foi testado é metade backup",content:"TESTE restauração mensalmente. 1) Pegue backup. 2) Restaure em /tmp. 3) Abra arquivos importantes. 4) Apague. Sem isso, você pode descobrir tarde demais que está corrompido."},{type:"success",title:"borgbackup é magia",content:"Para backup CONTÍNUO (diário ou semanal por meses/anos), borg é insuperável: deduplicação reduz 5TB de backups históricos a ~150 GB. Compactação + criptografia inclusas."}],practiceLabs:[{title:"Setup de backup diário com borgbackup + systemd timer",goal:"Sistema de backup profissional automatizado.",steps:["Instalar borgbackup.","Inicializar repositório.","Criar primeiro backup manual.","Criar service e timer.","Habilitar.","Testar restauração."],command:`# 1) Instalar
sudo apt install -y borgbackup

# 2) Preparar destino
sudo mkdir -p /mnt/backup
sudo chown $USER:$USER /mnt/backup

# 3) Inicializar repo (anote a senha SE escolher --encryption=repokey)
borg init --encryption=none /mnt/backup/borg-repo

# 4) Primeiro backup manual
borg create --stats --progress \\
    /mnt/backup/borg-repo::primeiro-\\$(date +%Y%m%d-%H%M%S) \\
    \\$HOME \\
    --exclude='*.cache' \\
    --exclude='*/node_modules' \\
    --exclude='*/.npm' \\
    --exclude='*/Trash'

# 5) Listar
borg list /mnt/backup/borg-repo

# 6) Service para backup automatico
sudo tee /etc/systemd/system/borg-backup.service > /dev/null << EOF
[Unit]
Description=Backup borgbackup diario

[Service]
Type=oneshot
User=$USER
Environment=BORG_REPO=/mnt/backup/borg-repo
ExecStart=/usr/bin/borg create --stats \\
    \\\\\\$BORG_REPO::diario-\\\\\\$(date +%%Y%%m%%d-%%H%%M%%S) \\
    /home/$USER \\
    --exclude='*.cache' \\
    --exclude='*/node_modules' \\
    --exclude='*/Trash'
ExecStartPost=/usr/bin/borg prune --keep-daily 7 --keep-weekly 4 --keep-monthly 6 \\\\\\$BORG_REPO
EOF

# 7) Timer
sudo tee /etc/systemd/system/borg-backup.timer > /dev/null << 'EOF'
[Unit]
Description=Roda borg-backup diariamente

[Timer]
OnCalendar=daily
Persistent=true

[Install]
WantedBy=timers.target
EOF

# 8) Habilitar
sudo systemctl daemon-reload
sudo systemctl enable --now borg-backup.timer

# 9) Listar timers
systemctl list-timers borg-backup.timer

# 10) Testar restauracao
mkdir -p /tmp/restore-test
cd /tmp/restore-test
borg extract /mnt/backup/borg-repo::primeiro-... .
ls`,verify:"Após primeiro backup, 'borg list' mostra o snapshot. systemctl list-timers mostra próxima execução. Restauração extrai os arquivos."}],exercises:[{id:1,question:"Qual a regra 3-2-1 de backup?",answer:"3 cópias dos dados, em 2 mídias diferentes (HD + cloud), com pelo menos 1 cópia OFF-SITE (proteção contra fogo/roubo)."},{id:2,question:"Diferença entre tar e rsync para backup?",answer:"tar cria SNAPSHOTS independentes (cada backup é completo, ocupa espaço). rsync é INCREMENTAL (só copia o que mudou, mas mantém uma cópia única). rsync para sincronização contínua, tar para snapshots independentes."},{id:3,question:"O que --delete do rsync faz?",answer:"Remove no destino o que não está mais na origem (sincronização real). CUIDADO: se inverter origem/destino, apaga sua origem."},{id:4,question:"Vantagem do borgbackup sobre tar simples?",answer:"Deduplicação (blocos repetidos só salvos uma vez) — economia massiva de espaço para backups históricos. Inclui compressão e criptografia."},{id:5,question:"Por que testar restauração regularmente?",answer:"Backup pode estar corrompido sem você saber. Sem teste, você descobre que não funciona NA HORA que precisa — tarde demais. Faça mensalmente."},{id:6,question:"Como excluir node_modules de backup com tar?",answer:"tar -czf backup.tar.gz /home --exclude='*/node_modules' --exclude='*.cache'"}],references:[{title:"rsync manual",url:"https://manpages.debian.org/bookworm/rsync/rsync.1.en.html"},{title:"borgbackup docs",url:"https://borgbackup.readthedocs.io/"},{title:"rclone (cloud backup)",url:"https://rclone.org/"}]}],uk=[{id:"servidor-web",title:"Servidor Web — Apache e Nginx",icon:"🌍",category:"Servidores",description:"Instalar, configurar virtualhost e habilitar HTTPS com Let's Encrypt.",objectives:["Instalar e iniciar Apache ou Nginx","Configurar virtual host (múltiplos sites)","Habilitar HTTPS gratuito com Certbot","Diagnosticar logs e problemas"],content:[`Os dois servidores web mais usados no Linux:
• Apache HTTP Server (apache2) — clássico, configurável, suporta .htaccess (configs por diretório), módulo PHP nativo. Ainda padrão em hospedagens compartilhadas.
• Nginx — moderno, leve, ÓTIMO para servir estático e como proxy reverso. Mais usado em servidores de alta performance.

Qual usar? Para sites simples, qualquer um. Para servidor moderno (proxy reverso para apps Node/Python, alta performance), Nginx. Para hospedagem com WordPress + .htaccess, Apache.`,`Instalar Apache:

sudo apt install -y apache2
sudo systemctl enable --now apache2

# Liberar firewall
sudo ufw allow 'Apache Full'

# Testar
curl http://localhost
# Deve mostrar 'It works!'

DocumentRoot padrão: /var/www/html. Edite o index.html ou ponha seus arquivos lá.`,`Virtual hosts no Apache (múltiplos sites no mesmo servidor) — crie /etc/apache2/sites-available/meusite.conf:

<VirtualHost *:80>
    ServerName meusite.com
    ServerAlias www.meusite.com
    DocumentRoot /var/www/meusite
    ErrorLog \\\${APACHE_LOG_DIR}/meusite-error.log
    CustomLog \\\${APACHE_LOG_DIR}/meusite-access.log combined
</VirtualHost>

Depois:
sudo mkdir -p /var/www/meusite
sudo a2ensite meusite           # habilita o site
sudo systemctl reload apache2`,`Instalar Nginx:

sudo apt install -y nginx
sudo systemctl enable --now nginx
sudo ufw allow 'Nginx Full'

curl http://localhost
# Deve mostrar 'Welcome to nginx!'

DocumentRoot padrão: /var/www/html. Configs em /etc/nginx/sites-available/ (igual ao Apache).`,`Virtual host no Nginx — /etc/nginx/sites-available/meusite:

server {
    listen 80;
    server_name meusite.com www.meusite.com;
    root /var/www/meusite;
    index index.html index.htm;

    location / {
        try_files \\$uri \\$uri/ =404;
    }

    access_log /var/log/nginx/meusite-access.log;
    error_log /var/log/nginx/meusite-error.log;
}

Depois:
sudo mkdir -p /var/www/meusite
sudo ln -s /etc/nginx/sites-available/meusite /etc/nginx/sites-enabled/
sudo nginx -t                  # testa config
sudo systemctl reload nginx`,`HTTPS com Let's Encrypt (gratuito, automático) — usa certbot:

sudo apt install -y certbot python3-certbot-apache    # ou python3-certbot-nginx

# Apache
sudo certbot --apache -d meusite.com -d www.meusite.com

# Nginx
sudo certbot --nginx -d meusite.com -d www.meusite.com

Responda as perguntas (e-mail, aceite termos). Certbot:
• Solicita certificado da Let's Encrypt
• Configura virtualhost para HTTPS
• Adiciona redirect HTTP → HTTPS (opcional, recomendado)
• Cria timer para renovar a cada 60-90 dias automaticamente

Teste renovação:
sudo certbot renew --dry-run`,`Nginx como proxy reverso (caso comum: rodar app Node.js na porta 3000 e expor pela 80/443):

server {
    listen 80;
    server_name app.meusite.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host \\$host;
        proxy_set_header X-Real-IP \\$remote_addr;
        proxy_set_header X-Forwarded-For \\$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \\$scheme;
    }
}

Depois certbot --nginx -d app.meusite.com adiciona HTTPS.`,`Logs e diagnóstico:

# Apache
sudo tail -f /var/log/apache2/access.log
sudo tail -f /var/log/apache2/error.log
sudo apache2ctl configtest
sudo apache2ctl -t -D DUMP_VHOSTS

# Nginx
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
sudo nginx -t

Quando algo não funciona, comece pelos logs.`],commands:[{command:"sudo apt install apache2 / nginx",description:"Instala servidor web.",example:"sudo apt install -y nginx"},{command:"sudo systemctl enable --now",description:"Habilita no boot e inicia.",example:"sudo systemctl enable --now nginx"},{command:"sudo a2ensite / a2dissite",description:"Apache: habilita / desabilita virtualhost.",example:"sudo a2ensite meusite && sudo systemctl reload apache2"},{command:"sudo a2enmod / a2dismod",description:"Apache: habilita / desabilita módulos.",example:"sudo a2enmod rewrite headers ssl && sudo systemctl restart apache2"},{command:"sudo nginx -t",description:"Testa config do Nginx (essencial antes de reload).",example:"sudo nginx -t"},{command:"sudo systemctl reload",description:"Reload (não derruba conexões). Após mudar config.",example:"sudo systemctl reload nginx"},{command:"sudo certbot --nginx",description:"HTTPS automático com Let's Encrypt.",example:"sudo certbot --nginx -d meusite.com -d www.meusite.com"},{command:"sudo certbot renew",description:"Renova certificados (timer já roda automaticamente).",example:"sudo certbot renew --dry-run"},{command:"curl -I",description:"Headers HTTP (status, server, content-type).",example:"curl -I https://meusite.com"}],tips:[{type:"info",title:"Apache OU Nginx, não os dois",content:"Se você instalar os dois sem cuidado, vão brigar pela porta 80. Para servidor leigo, escolha um. Para servidor avançado: Nginx na porta 80 como proxy reverso, Apache em outra porta para sites legados."},{type:"success",title:"Use Let's Encrypt — sem desculpa",content:"Certificados HTTPS gratuitos via certbot. 5 minutos para configurar, renovação automática. Não tem motivo para servidor sem HTTPS em 2026."},{type:"warning",title:"Sempre 'nginx -t' antes de reload",content:"Erro de config no Nginx pode derrubar TODOS os sites. 'sudo nginx -t' valida antes do reload. Se OK: 'sudo systemctl reload nginx'."}],practiceLabs:[{title:"Servidor Nginx com HTTPS para um site estático",goal:"Setup completo: Nginx + virtualhost + Let's Encrypt em servidor com domínio.",steps:["Instale Nginx.","Crie pasta do site e index.html.","Configure virtualhost.","Teste e reload.","Habilite HTTPS com certbot."],command:`# 1) Instalar
sudo apt install -y nginx
sudo ufw allow 'Nginx Full'

# 2) Criar pasta e site de teste
sudo mkdir -p /var/www/meusite
sudo tee /var/www/meusite/index.html > /dev/null << 'EOF'
<!DOCTYPE html>
<html><head><title>Meu Site</title></head>
<body><h1>Funcionando!</h1></body></html>
EOF

sudo chown -R www-data:www-data /var/www/meusite

# 3) Virtualhost (substitua meusite.com pelo SEU dominio)
sudo tee /etc/nginx/sites-available/meusite > /dev/null << 'EOF'
server {
    listen 80;
    server_name meusite.com www.meusite.com;
    root /var/www/meusite;
    index index.html;

    location / {
        try_files \\$uri \\$uri/ =404;
    }
}
EOF

# 4) Habilitar
sudo ln -s /etc/nginx/sites-available/meusite /etc/nginx/sites-enabled/
sudo nginx -t

# 5) Reload
sudo systemctl reload nginx

# 6) Testar HTTP
curl -H 'Host: meusite.com' http://localhost

# 7) HTTPS (DNS deve estar apontando para seu IP)
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d meusite.com -d www.meusite.com

# 8) Confirmar HTTPS
curl -I https://meusite.com`,verify:"curl http://localhost mostra 'Funcionando!'. Após certbot, https://meusite.com responde com cadeado verde no browser."}],exercises:[{id:1,question:"Diferença entre Apache e Nginx?",answer:"Apache: clássico, suporta .htaccess, mais usado em hospedagem compartilhada. Nginx: leve, melhor para alta performance e proxy reverso. Para servir Node/Python via proxy, Nginx é melhor."},{id:2,question:"Como habilitar HTTPS gratuito?",answer:"sudo apt install certbot python3-certbot-nginx (ou apache); sudo certbot --nginx -d dominio.com. Renovação automática a cada 60 dias."},{id:3,question:"Como testar config do Nginx antes do reload?",answer:"sudo nginx -t — valida sintaxe. Erro = não recarregue (vai derrubar sites)."},{id:4,question:"Onde ficam os logs do Nginx?",answer:"/var/log/nginx/access.log e /var/log/nginx/error.log. Em tempo real: 'sudo tail -f'."},{id:5,question:"No Apache, qual comando habilita um virtualhost?",answer:"sudo a2ensite NOME && sudo systemctl reload apache2."},{id:6,question:"Por que Nginx como proxy reverso para Node.js?",answer:"Node escuta em porta alta (3000). Nginx na 80/443 recebe externo, encaminha para Node. Permite HTTPS, vários apps no mesmo servidor, balanceamento de carga."}],references:[{title:"Wiki Debian — Apache",url:"https://wiki.debian.org/Apache"},{title:"Nginx docs",url:"https://nginx.org/en/docs/"},{title:"Certbot",url:"https://certbot.eff.org/"}]},{id:"servidor-banco-dados",title:"Banco de Dados — MySQL/MariaDB e PostgreSQL",icon:"🗄️",category:"Servidores",description:"Instalar, criar usuários, bancos, e fazer backup/restore.",objectives:["Instalar MariaDB ou PostgreSQL","Criar bancos e usuários com permissões","Backup com mysqldump / pg_dump","Conhecer prós/contras de cada um"],content:[`Os dois principais bancos relacionais no Linux:
• MariaDB (fork do MySQL) — mais simples, padrão para WordPress e LAMP. Comandos compatíveis com MySQL.
• PostgreSQL — mais robusto, melhor para apps complexos, suporte a JSON nativo, melhor performance em queries pesadas.

Use MariaDB para WordPress / LAMP / apps PHP simples. Use PostgreSQL para apps Node/Python/Go modernos, dados complexos, requisitos de integridade.`,`Instalar MariaDB:

sudo apt install -y mariadb-server
sudo mysql_secure_installation
# Responda Y para tudo (exceto se já tem senha de root)

sudo systemctl status mariadb

Logar como root:
sudo mariadb            # ou: sudo mysql
# (Sem senha, usa autenticação Unix socket)`,`Comandos básicos do MariaDB:

-- Criar banco
CREATE DATABASE meu_app CHARACTER SET utf8mb4;

-- Listar bancos
SHOW DATABASES;

-- Criar usuário e dar permissão
CREATE USER 'meu_user'@'localhost' IDENTIFIED BY 'senha-forte-aqui';
GRANT ALL PRIVILEGES ON meu_app.* TO 'meu_user'@'localhost';
FLUSH PRIVILEGES;

-- Usar banco
USE meu_app;

-- Listar tabelas
SHOW TABLES;

-- Sair
EXIT;

Logar como o usuário criado:
mariadb -u meu_user -p meu_app`,`Backup MariaDB:

# Backup de um banco
mysqldump -u root meu_app > meu_app_backup.sql

# Backup com compressão
mysqldump -u root meu_app | gzip > meu_app_backup.sql.gz

# Backup de TODOS os bancos
sudo mysqldump --all-databases | gzip > all_dbs.sql.gz

# Restore
mariadb -u root meu_app < meu_app_backup.sql
zcat meu_app_backup.sql.gz | mariadb -u root meu_app`,`Instalar PostgreSQL:

sudo apt install -y postgresql postgresql-contrib
sudo systemctl status postgresql

PostgreSQL cria usuário 'postgres' no Linux. Para usar:
sudo -u postgres psql

Dentro do psql:
\\\\l                          # listar bancos
\\\\du                         # listar usuários
\\\\q                          # sair`,`Criar usuário e banco no PostgreSQL:

sudo -u postgres psql

-- Dentro do psql:
CREATE USER meu_user WITH PASSWORD 'senha-forte';
CREATE DATABASE meu_app OWNER meu_user;
GRANT ALL PRIVILEGES ON DATABASE meu_app TO meu_user;
\\\\q

# De fora
psql -U meu_user -d meu_app -h localhost

Para permitir login com senha (e não só socket Unix), edite /etc/postgresql/15/main/pg_hba.conf:
local   all   meu_user                                  md5

Depois 'sudo systemctl restart postgresql'.`,`Backup PostgreSQL:

# Backup
sudo -u postgres pg_dump meu_app > backup.sql
sudo -u postgres pg_dump meu_app | gzip > backup.sql.gz

# Backup de tudo
sudo -u postgres pg_dumpall | gzip > all_dbs.sql.gz

# Restore
sudo -u postgres psql meu_app < backup.sql

# Backup binario (mais rapido para restaurar)
sudo -u postgres pg_dump -F c meu_app -f meu_app.dump
sudo -u postgres pg_restore -d meu_app meu_app.dump`,`Acesso remoto (cuidado!) — por padrão, MariaDB e PostgreSQL só aceitam conexões locais:

MariaDB — edite /etc/mysql/mariadb.conf.d/50-server.cnf:
bind-address = 0.0.0.0          # ou IP específico

Depois reinicie e conceda permissão:
GRANT ALL ON meu_app.* TO 'meu_user'@'%' IDENTIFIED BY 'senha';

PostgreSQL — edite postgresql.conf:
listen_addresses = '*'
E pg_hba.conf:
host  meu_app  meu_user  0.0.0.0/0  md5

ABRA porta 3306 (MariaDB) ou 5432 (Postgres) no firewall — só para IPs confiáveis.`],commands:[{command:"sudo apt install mariadb-server",description:"Instala MariaDB.",example:"sudo apt install -y mariadb-server"},{command:"sudo mysql_secure_installation",description:"Wizard de segurança pós-instalação.",example:"sudo mysql_secure_installation"},{command:"sudo mariadb",description:"Logar como root no MariaDB.",example:"sudo mariadb"},{command:"mysqldump",description:"Backup MariaDB.",example:"mysqldump -u root meu_app | gzip > backup.sql.gz"},{command:"sudo apt install postgresql",description:"Instala PostgreSQL.",example:"sudo apt install -y postgresql postgresql-contrib"},{command:"sudo -u postgres psql",description:"Logar como postgres.",example:"sudo -u postgres psql"},{command:"pg_dump",description:"Backup PostgreSQL.",example:"sudo -u postgres pg_dump meu_app | gzip > backup.sql.gz"},{command:"psql -U user -d db -h host",description:"Conectar PostgreSQL.",example:"psql -U meu_user -d meu_app -h localhost"}],tips:[{type:"warning",title:"Bancos abertos para internet = invadidos",content:"Não exponha portas 3306/5432 para 0.0.0.0/0 sem firewall. Senhas fracas + brute-force = invadido em horas. Prefira: SSH túnel, VPN, ou bind apenas em IPs internos."},{type:"success",title:"Backups automáticos via systemd timer",content:"Combine systemd timer (vimos antes) + pg_dump/mysqldump + rclone para nuvem = backup diário do banco. Setup uma vez, esquece."}],practiceLabs:[{title:"Setup MariaDB com banco e usuário para um app",goal:"Procedimento padrão para preparar banco antes de instalar app (WordPress, etc.).",steps:["Instale MariaDB.","Rode wizard de segurança.","Crie banco, usuário, dê permissões.","Teste login.","Faça backup."],command:`# 1) Instalar
sudo apt install -y mariadb-server

# 2) Wizard
sudo mysql_secure_installation
# Y para tudo

# 3) Logar e configurar
sudo mariadb << 'SQL'
CREATE DATABASE wp_meublog CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'wp_user'@'localhost' IDENTIFIED BY 'TrocarSenha123!';
GRANT ALL PRIVILEGES ON wp_meublog.* TO 'wp_user'@'localhost';
FLUSH PRIVILEGES;
SHOW DATABASES;
SQL

# 4) Testar login do user
mariadb -u wp_user -p'TrocarSenha123!' wp_meublog -e "SELECT DATABASE();"

# 5) Backup
mkdir -p ~/backups
mysqldump -u root wp_meublog | gzip > ~/backups/wp_meublog_\\$(date +%F).sql.gz
ls -lh ~/backups/`,verify:"'SHOW DATABASES' lista wp_meublog. Login do user funciona. Backup .sql.gz criado em ~/backups."}],exercises:[{id:1,question:"MariaDB vs PostgreSQL?",answer:"MariaDB: simples, padrão LAMP/WordPress. PostgreSQL: robusto, melhor para apps modernos, JSON nativo. Para WordPress: MariaDB. Para Django/Rails/Node modernos: PostgreSQL."},{id:2,question:"Como criar usuário no MariaDB com permissão em um banco?",answer:"CREATE USER 'user'@'localhost' IDENTIFIED BY 'senha'; GRANT ALL ON banco.* TO 'user'@'localhost'; FLUSH PRIVILEGES;"},{id:3,question:"Como fazer backup de um banco MariaDB?",answer:"mysqldump -u root nome_banco | gzip > backup.sql.gz"},{id:4,question:"Como logar no PostgreSQL como o usuário postgres?",answer:"sudo -u postgres psql (autentica via socket Unix, sem senha)."},{id:5,question:"Como restaurar backup PostgreSQL?",answer:"sudo -u postgres psql nome_banco < backup.sql (ou zcat se for .gz)."},{id:6,question:"Por que NÃO expor banco para 0.0.0.0 sem firewall?",answer:"Bots escaneiam internet 24/7. Senha fraca = invadido em horas. Use SSH tunnel, VPN ou bind apenas em IPs internos."}],references:[{title:"MariaDB docs",url:"https://mariadb.com/kb/en/"},{title:"PostgreSQL Tutorial",url:"https://www.postgresql.org/docs/current/tutorial.html"}]},{id:"docker-debian",title:"Docker no Debian",icon:"🐳",category:"Servidores",description:"Instalar Docker + Docker Compose, rodar containers e conhecer os comandos essenciais.",objectives:["Instalar Docker no Debian (forma oficial)","Rodar containers e gerenciar imagens","Usar Docker Compose para apps multi-container","Entender volumes, networks e diferença entre imagem/container"],content:["Docker é sistema de containers — empacote app + dependências em uma 'imagem' que roda IGUAL em qualquer máquina (sem 'na minha máquina funciona'). É a forma moderna de implantar apps em servidores.",`Por que Docker em vez de instalar direto?
• Isolamento — cada app em seu próprio espaço, não conflita com outros.
• Reproducibilidade — mesma imagem roda igual em dev, staging, prod.
• Versão — você roda PostgreSQL 15 sem afetar o 13 do sistema.
• Limpeza fácil — 'docker rm' apaga tudo do container, sem deixar resíduos.`,`Instalar Docker (forma oficial recomendada — repositório do Docker):

# 1) Pré-requisitos
sudo apt install -y ca-certificates curl gnupg

# 2) Chave GPG do Docker
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# 3) Repositório
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/debian $(. /etc/os-release && echo \\"\\$VERSION_CODENAME\\") stable" \\\\
  | sudo tee /etc/apt/sources.list.d/docker.list

# 4) Instalar
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# 5) Adicionar seu usuário ao grupo docker (sem precisar sudo a cada comando)
sudo usermod -aG docker $USER
# Logout/login para aplicar

# 6) Testar
docker version
docker run hello-world`,`Comandos básicos:

docker pull NOME              baixa imagem do Docker Hub
docker run NOME               cria container e roda
docker run -d NOME            detached (background)
docker run -p 8080:80 nginx   mapeia porta host:container
docker ps                     containers RODANDO
docker ps -a                  todos (incluindo parados)
docker stop NOME              para
docker start NOME             inicia
docker rm NOME                apaga container
docker rmi IMAGEM             apaga imagem
docker images                 lista imagens
docker logs -f NOME           logs (tempo real)
docker exec -it NOME bash     entra no container`,`Exemplo prático — rodar nginx em 5 segundos:

docker run -d --name meu-nginx -p 8080:80 nginx
curl http://localhost:8080
# Verá a página padrão do nginx

docker stop meu-nginx
docker rm meu-nginx

O 'd' = detached, '--name' nomeia, '-p HOST:CONTAINER' mapeia portas.`,`Volumes — persistir dados (containers são EFÊMEROS por design):

docker volume create meus-dados
docker run -d -v meus-dados:/var/lib/mysql mysql

# Ou bind mount (pasta do host)
docker run -d -v /home/wallyson/site:/usr/share/nginx/html nginx

Sem volume, dados somem quando container é apagado.`,`Docker Compose — definir múltiplos containers em arquivo .yml. Exemplo: WordPress + MySQL.

Crie docker-compose.yml:

version: '3.8'
services:
  db:
    image: mariadb:11
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: rootpass
      MYSQL_DATABASE: wp
      MYSQL_USER: wp_user
      MYSQL_PASSWORD: wp_pass
    volumes:
      - db_data:/var/lib/mysql

  wordpress:
    image: wordpress:latest
    restart: always
    depends_on:
      - db
    ports:
      - '8080:80'
    environment:
      WORDPRESS_DB_HOST: db
      WORDPRESS_DB_USER: wp_user
      WORDPRESS_DB_PASSWORD: wp_pass
      WORDPRESS_DB_NAME: wp

volumes:
  db_data:

Depois:
docker compose up -d            sobe tudo
docker compose ps               lista
docker compose logs -f          logs
docker compose down             para e remove

WordPress disponível em http://localhost:8080.`,`Limpeza de espaço (Docker pode ocupar muito):

docker system df              quanto Docker ocupa
docker system prune           remove containers parados, imagens órfãs, networks sem uso
docker system prune -a        remove TUDO que não está em uso (incluindo imagens)
docker volume prune           remove volumes órfãos

Cuidado: 'prune -a --volumes' apaga DADOS de volumes órfãos.`],commands:[{command:"docker run",description:"Cria e roda container.",example:"docker run -d --name nginx -p 8080:80 nginx",flags:[{flag:"-d",description:"Detached (background)"},{flag:"--name NOME",description:"Nomeia container"},{flag:"-p HOST:CONTAINER",description:"Mapeia porta"},{flag:"-v VOL:/path",description:"Monta volume"},{flag:"-e VAR=val",description:"Variável de ambiente"},{flag:"--restart unless-stopped",description:"Reinicia se cair"}]},{command:"docker ps",description:"Lista containers (rodando).",example:"docker ps -a",flags:[{flag:"-a",description:"Todos (incluindo parados)"},{flag:"-q",description:"Só IDs"}]},{command:"docker logs",description:"Logs do container.",example:"docker logs -f nginx"},{command:"docker exec -it",description:"Entra no container (interativo).",example:"docker exec -it nginx bash"},{command:"docker stop / rm / rmi",description:"Para / remove container / remove imagem.",example:"docker stop nginx && docker rm nginx"},{command:"docker compose up",description:"Sobe stack do docker-compose.yml.",example:"docker compose up -d"},{command:"docker compose down",description:"Para e remove a stack.",example:"docker compose down"},{command:"docker system prune",description:"Limpa containers parados, imagens órfãs, networks sem uso.",example:"docker system prune -a"}],tips:[{type:"info",title:"Adicione seu usuário ao grupo docker",content:"'sudo usermod -aG docker $USER' — depois você roda 'docker' sem sudo. Logout/login obrigatório. Sem isso, todo comando docker precisa sudo."},{type:"warning",title:"Containers são efêmeros — use volumes",content:"Quando você 'docker rm' um container, todos os dados internos somem. Use volumes para persistir banco de dados, uploads, etc. Sem volume = dados perdidos."},{type:"success",title:"Docker Compose é o caminho",content:"Para qualquer app não-trivial (WordPress + MySQL, Node + Postgres + Redis), use Docker Compose. Define tudo em um YAML, sobe com um comando, para com outro."}],practiceLabs:[{title:"Subir WordPress + MariaDB com Docker Compose",goal:"Stack completa funcionando em menos de 2 minutos.",steps:["Crie docker-compose.yml.","Suba com docker compose up -d.","Acesse no navegador.","Pare e limpe."],command:`# 1) Criar diretorio e arquivo
mkdir -p ~/lab-wordpress
cd ~/lab-wordpress

cat > docker-compose.yml << 'EOF'
services:
  db:
    image: mariadb:11
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: rootpass
      MYSQL_DATABASE: wp
      MYSQL_USER: wp_user
      MYSQL_PASSWORD: wp_pass
    volumes:
      - db_data:/var/lib/mysql

  wordpress:
    image: wordpress:latest
    restart: always
    depends_on:
      - db
    ports:
      - '8080:80'
    environment:
      WORDPRESS_DB_HOST: db
      WORDPRESS_DB_USER: wp_user
      WORDPRESS_DB_PASSWORD: wp_pass
      WORDPRESS_DB_NAME: wp

volumes:
  db_data:
EOF

# 2) Subir
docker compose up -d

# 3) Aguardar inicializar (pode demorar 30-60s na primeira vez)
sleep 20
docker compose ps

# 4) Acessar (no navegador)
xdg-open http://localhost:8080
# Ou no terminal
curl -I http://localhost:8080

# 5) Logs (Ctrl+C para sair)
docker compose logs -f wordpress

# 6) Quando terminar - parar e remover (mantem volumes)
docker compose down

# 7) Para apagar TUDO (incluindo dados)
docker compose down -v`,verify:"Após 'docker compose up -d', http://localhost:8080 mostra wizard de instalação do WordPress. 'docker compose ps' mostra os 2 containers rodando."}],exercises:[{id:1,question:"Como rodar nginx na porta 8080 do host?",answer:"docker run -d --name nginx -p 8080:80 nginx"},{id:2,question:"Como ver logs de um container em tempo real?",answer:"docker logs -f NOME (ou docker compose logs -f para Compose)."},{id:3,question:"Como entrar no container para debug?",answer:"docker exec -it NOME bash (ou sh se a imagem é alpine)."},{id:4,question:"Para que serve um VOLUME?",answer:"Persistir dados quando container é apagado. Sem volume, banco de dados/uploads somem quando você 'docker rm' o container."},{id:5,question:"Como subir um stack do docker-compose.yml?",answer:"docker compose up -d (na pasta do yml). Para parar: docker compose down."},{id:6,question:"Como limpar Docker sem perder dados em uso?",answer:"docker system prune (limpa containers parados, imagens órfãs, networks sem uso — preserva o que está em uso)."}],references:[{title:"Docker docs",url:"https://docs.docker.com/"},{title:"Docker Compose docs",url:"https://docs.docker.com/compose/"},{title:"Docker Hub (imagens)",url:"https://hub.docker.com/"}]}],Ho=[...J1,...ek,...tk,...ok,...ak,...rk,...nk,...sk,...ik,...lk,...uk],dk=()=>{const[e,t]=y.useState(Ho[0].id),[o,a]=y.useState(!1);y.useEffect(()=>(o?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[o]);const r=Ho.findIndex(l=>l.id===e),n=Ho[r],s=l=>{const u=l==="prev"?r-1:r+1;u>=0&&u<Ho.length&&(t(Ho[u].id),window.scrollTo(0,0))},i=l=>{t(l),a(!1),window.scrollTo(0,0)};return b.jsxs("div",{className:"relative flex min-h-dvh bg-background",children:[!o&&b.jsx("button",{type:"button",onClick:()=>a(!0),"aria-label":"Abrir menu",className:"fixed z-50 lg:hidden w-10 h-10 rounded-lg bg-card/95 border border-border shadow-md backdrop-blur-sm flex items-center justify-center text-foreground top-[max(1rem,env(safe-area-inset-top))] left-4",children:b.jsx(kx,{size:20})}),b.jsx("div",{className:`fixed inset-y-0 left-0 z-40 transition-transform duration-200 lg:sticky lg:top-0 ${o?"translate-x-0":"-translate-x-full lg:translate-x-0"}`,children:b.jsx(Q1,{modules:Ho,activeModule:e,onSelectModule:i,onClose:()=>a(!1)})}),o&&b.jsx("div",{className:"fixed inset-0 bg-background/80 backdrop-blur-[1px] z-30 lg:hidden",onClick:()=>a(!1),"aria-hidden":"true"}),b.jsx(Z1,{module:n,moduleIndex:r,totalModules:Ho.length,onNavigate:s})]})},ck=()=>{const e=q1();return b.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center bg-background text-foreground",children:[b.jsx("div",{className:"text-6xl mb-4",children:"🐞"}),b.jsx("h1",{className:"text-3xl font-bold mb-2",children:"Página não encontrada"}),b.jsx("p",{className:"text-muted-foreground mb-6",children:"A página que você procura não existe."}),b.jsx("button",{onClick:()=>e("/"),className:"px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors",children:"Voltar ao início"})]})},pk=new QS,mk=()=>b.jsx(XS,{client:pk,children:b.jsxs(yS,{children:[b.jsx(uw,{}),b.jsx(zw,{}),b.jsx(W1,{children:b.jsxs($1,{children:[b.jsx(ou,{path:"/",element:b.jsx(dk,{})}),b.jsx(ou,{path:"*",element:b.jsx(ck,{})})]})})]})});Gf(document.getElementById("root")).render(b.jsx(mk,{}));
