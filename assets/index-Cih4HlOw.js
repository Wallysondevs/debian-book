import{j as s,m as Rg}from"./vendor-motion-DBPMP_p8.js";import{a as Mf,r as de,b as zg,B as Im,H as qg,P as Zm,c as Ho,C as Fm,S as Vo,T as _n,d as hi,F as di,A as qr,L as Or,e as Hn,f as Ur,U as Jm,g as Po,h as Zt,i as Wm,N as Lr,j as Gr,k as ef,M as Qo,W as af,l as Vn,D as tf,m as Og,n as Ug,o as Lg,p as Gg,q as Bg,s as _g,t as Hg,u as Vg,v as Pg,I as Qg}from"./vendor-icons-D1O47Heh.js";import{r as Xg}from"./vendor-react-Ck0hFV0o.js";import{h as Yg}from"./vendor-syntax-ykaEeA8x.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))u(g);new MutationObserver(g=>{for(const S of g)if(S.type==="childList")for(const D of S.addedNodes)D.tagName==="LINK"&&D.rel==="modulepreload"&&u(D)}).observe(document,{childList:!0,subtree:!0});function m(g){const S={};return g.integrity&&(S.integrity=g.integrity),g.referrerPolicy&&(S.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?S.credentials="include":g.crossOrigin==="anonymous"?S.credentials="omit":S.credentials="same-origin",S}function u(g){if(g.ep)return;g.ep=!0;const S=m(g);fetch(g.href,S)}})();var Br={exports:{}},Xo={},_r={exports:{}},Hr={};var nf;function $g(){return nf||(nf=1,(function(i){function r(N,q){var Y=N.length;N.push(q);e:for(;0<Y;){var re=Y-1>>>1,O=N[re];if(0<g(O,q))N[re]=q,N[Y]=O,Y=re;else break e}}function m(N){return N.length===0?null:N[0]}function u(N){if(N.length===0)return null;var q=N[0],Y=N.pop();if(Y!==q){N[0]=Y;e:for(var re=0,O=N.length,Be=O>>>1;re<Be;){var ge=2*(re+1)-1,ie=N[ge],De=ge+1,be=N[De];if(0>g(ie,Y))De<O&&0>g(be,ie)?(N[re]=be,N[De]=Y,re=De):(N[re]=ie,N[ge]=Y,re=ge);else if(De<O&&0>g(be,Y))N[re]=be,N[De]=Y,re=De;else break e}}return q}function g(N,q){var Y=N.sortIndex-q.sortIndex;return Y!==0?Y:N.id-q.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var S=performance;i.unstable_now=function(){return S.now()}}else{var D=Date,A=D.now();i.unstable_now=function(){return D.now()-A}}var k=[],U=[],R=1,V=null,_=3,W=!1,I=!1,Q=!1,Z=!1,oe=typeof setTimeout=="function"?setTimeout:null,Ge=typeof clearTimeout=="function"?clearTimeout:null,ye=typeof setImmediate<"u"?setImmediate:null;function Ce(N){for(var q=m(U);q!==null;){if(q.callback===null)u(U);else if(q.startTime<=N)u(U),q.sortIndex=q.expirationTime,r(k,q);else break;q=m(U)}}function qe(N){if(Q=!1,Ce(N),!I)if(m(k)!==null)I=!0,we||(we=!0,Qe());else{var q=m(U);q!==null&&Ke(qe,q.startTime-N)}}var we=!1,Fe=-1,H=5,Me=-1;function Tt(){return Z?!0:!(i.unstable_now()-Me<H)}function za(){if(Z=!1,we){var N=i.unstable_now();Me=N;var q=!0;try{e:{I=!1,Q&&(Q=!1,Ge(Fe),Fe=-1),W=!0;var Y=_;try{a:{for(Ce(N),V=m(k);V!==null&&!(V.expirationTime>N&&Tt());){var re=V.callback;if(typeof re=="function"){V.callback=null,_=V.priorityLevel;var O=re(V.expirationTime<=N);if(N=i.unstable_now(),typeof O=="function"){V.callback=O,Ce(N),q=!0;break a}V===m(k)&&u(k),Ce(N)}else u(k);V=m(k)}if(V!==null)q=!0;else{var Be=m(U);Be!==null&&Ke(qe,Be.startTime-N),q=!1}}break e}finally{V=null,_=Y,W=!1}q=void 0}}finally{q?Qe():we=!1}}}var Qe;if(typeof ye=="function")Qe=function(){ye(za)};else if(typeof MessageChannel<"u"){var kt=new MessageChannel,qa=kt.port2;kt.port1.onmessage=za,Qe=function(){qa.postMessage(null)}}else Qe=function(){oe(za,0)};function Ke(N,q){Fe=oe(function(){N(i.unstable_now())},q)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(N){N.callback=null},i.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<N?Math.floor(1e3/N):5},i.unstable_getCurrentPriorityLevel=function(){return _},i.unstable_next=function(N){switch(_){case 1:case 2:case 3:var q=3;break;default:q=_}var Y=_;_=q;try{return N()}finally{_=Y}},i.unstable_requestPaint=function(){Z=!0},i.unstable_runWithPriority=function(N,q){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var Y=_;_=N;try{return q()}finally{_=Y}},i.unstable_scheduleCallback=function(N,q,Y){var re=i.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?re+Y:re):Y=re,N){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=Y+O,N={id:R++,callback:q,priorityLevel:N,startTime:Y,expirationTime:O,sortIndex:-1},Y>re?(N.sortIndex=Y,r(U,N),m(k)===null&&N===m(U)&&(Q?(Ge(Fe),Fe=-1):Q=!0,Ke(qe,Y-re))):(N.sortIndex=O,r(k,N),I||W||(I=!0,we||(we=!0,Qe()))),N},i.unstable_shouldYield=Tt,i.unstable_wrapCallback=function(N){var q=_;return function(){var Y=_;_=q;try{return N.apply(this,arguments)}finally{_=Y}}}})(Hr)),Hr}var of;function Kg(){return of||(of=1,_r.exports=$g()),_r.exports}var sf;function Ig(){if(sf)return Xo;sf=1;var i=Kg(),r=Mf(),m=Xg();function u(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)a+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function g(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function S(e){var a=e,t=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(t=a.return),e=a.return;while(e)}return a.tag===3?t:null}function D(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function A(e){if(S(e)!==e)throw Error(u(188))}function k(e){var a=e.alternate;if(!a){if(a=S(e),a===null)throw Error(u(188));return a!==e?null:e}for(var t=e,n=a;;){var o=t.return;if(o===null)break;var l=o.alternate;if(l===null){if(n=o.return,n!==null){t=n;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===t)return A(o),e;if(l===n)return A(o),a;l=l.sibling}throw Error(u(188))}if(t.return!==n.return)t=o,n=l;else{for(var c=!1,d=o.child;d;){if(d===t){c=!0,t=o,n=l;break}if(d===n){c=!0,n=o,t=l;break}d=d.sibling}if(!c){for(d=l.child;d;){if(d===t){c=!0,t=l,n=o;break}if(d===n){c=!0,n=l,t=o;break}d=d.sibling}if(!c)throw Error(u(189))}}if(t.alternate!==n)throw Error(u(190))}if(t.tag!==3)throw Error(u(188));return t.stateNode.current===t?e:a}function U(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=U(e),a!==null)return a;e=e.sibling}return null}var R=Object.assign,V=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),W=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),Z=Symbol.for("react.profiler"),oe=Symbol.for("react.provider"),Ge=Symbol.for("react.consumer"),ye=Symbol.for("react.context"),Ce=Symbol.for("react.forward_ref"),qe=Symbol.for("react.suspense"),we=Symbol.for("react.suspense_list"),Fe=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),Me=Symbol.for("react.activity"),Tt=Symbol.for("react.memo_cache_sentinel"),za=Symbol.iterator;function Qe(e){return e===null||typeof e!="object"?null:(e=za&&e[za]||e["@@iterator"],typeof e=="function"?e:null)}var kt=Symbol.for("react.client.reference");function qa(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===kt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case I:return"Fragment";case Z:return"Profiler";case Q:return"StrictMode";case qe:return"Suspense";case we:return"SuspenseList";case Me:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case W:return"Portal";case ye:return(e.displayName||"Context")+".Provider";case Ge:return(e._context.displayName||"Context")+".Consumer";case Ce:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Fe:return a=e.displayName||null,a!==null?a:qa(e.type)||"Memo";case H:a=e._payload,e=e._init;try{return qa(e(a))}catch{}}return null}var Ke=Array.isArray,N=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=m.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},re=[],O=-1;function Be(e){return{current:e}}function ge(e){0>O||(e.current=re[O],re[O]=null,O--)}function ie(e,a){O++,re[O]=e.current,e.current=a}var De=Be(null),be=Be(null),Se=Be(null),Oa=Be(null);function Ct(e,a){switch(ie(Se,a),ie(be,e),ie(De,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?Am(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=Am(a),e=Dm(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ge(De),ie(De,e)}function xe(){ge(De),ge(be),ge(Se)}function Wt(e){e.memoizedState!==null&&ie(Oa,e);var a=De.current,t=Dm(a,e.type);a!==t&&(ie(be,e),ie(De,t))}function Ua(e){be.current===e&&(ge(De),ge(be)),Oa.current===e&&(ge(Oa),Uo._currentValue=Y)}var Wa=Object.prototype.hasOwnProperty,Mt=i.unstable_scheduleCallback,et=i.unstable_cancelCallback,up=i.unstable_shouldYield,dp=i.unstable_requestPaint,wa=i.unstable_now,mp=i.unstable_getCurrentPriorityLevel,nc=i.unstable_ImmediatePriority,oc=i.unstable_UserBlockingPriority,Fo=i.unstable_NormalPriority,fp=i.unstable_LowPriority,sc=i.unstable_IdlePriority,pp=i.log,hp=i.unstable_setDisableYieldValue,Pn=null,sa=null;function at(e){if(typeof pp=="function"&&hp(e),sa&&typeof sa.setStrictMode=="function")try{sa.setStrictMode(Pn,e)}catch{}}var ia=Math.clz32?Math.clz32:vp,gp=Math.log,bp=Math.LN2;function vp(e){return e>>>=0,e===0?32:31-(gp(e)/bp|0)|0}var Jo=256,Wo=4194304;function Rt(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function es(e,a,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,l=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var d=n&134217727;return d!==0?(n=d&~l,n!==0?o=Rt(n):(c&=d,c!==0?o=Rt(c):t||(t=d&~e,t!==0&&(o=Rt(t))))):(d=n&~l,d!==0?o=Rt(d):c!==0?o=Rt(c):t||(t=n&~e,t!==0&&(o=Rt(t)))),o===0?0:a!==0&&a!==o&&(a&l)===0&&(l=o&-o,t=a&-a,l>=t||l===32&&(t&4194048)!==0)?a:o}function Qn(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function xp(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ic(){var e=Jo;return Jo<<=1,(Jo&4194048)===0&&(Jo=256),e}function lc(){var e=Wo;return Wo<<=1,(Wo&62914560)===0&&(Wo=4194304),e}function Ai(e){for(var a=[],t=0;31>t;t++)a.push(e);return a}function Xn(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function yp(e,a,t,n,o,l){var c=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var d=e.entanglements,p=e.expirationTimes,x=e.hiddenUpdates;for(t=c&~t;0<t;){var E=31-ia(t),T=1<<E;d[E]=0,p[E]=-1;var y=x[E];if(y!==null)for(x[E]=null,E=0;E<y.length;E++){var j=y[E];j!==null&&(j.lane&=-536870913)}t&=~T}n!==0&&rc(e,n,0),l!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=l&~(c&~a))}function rc(e,a,t){e.pendingLanes|=a,e.suspendedLanes&=~a;var n=31-ia(a);e.entangledLanes|=a,e.entanglements[n]=e.entanglements[n]|1073741824|t&4194090}function cc(e,a){var t=e.entangledLanes|=a;for(e=e.entanglements;t;){var n=31-ia(t),o=1<<n;o&a|e[n]&a&&(e[n]|=a),t&=~o}}function Di(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ni(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function uc(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:Pm(e.type))}function Sp(e,a){var t=q.p;try{return q.p=e,a()}finally{q.p=t}}var tt=Math.random().toString(36).slice(2),Ie="__reactFiber$"+tt,ea="__reactProps$"+tt,en="__reactContainer$"+tt,Ei="__reactEvents$"+tt,jp="__reactListeners$"+tt,Ap="__reactHandles$"+tt,dc="__reactResources$"+tt,Yn="__reactMarker$"+tt;function wi(e){delete e[Ie],delete e[ea],delete e[Ei],delete e[jp],delete e[Ap]}function an(e){var a=e[Ie];if(a)return a;for(var t=e.parentNode;t;){if(a=t[en]||t[Ie]){if(t=a.alternate,a.child!==null||t!==null&&t.child!==null)for(e=Tm(e);e!==null;){if(t=e[Ie])return t;e=Tm(e)}return a}e=t,t=e.parentNode}return null}function tn(e){if(e=e[Ie]||e[en]){var a=e.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return e}return null}function $n(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(u(33))}function nn(e){var a=e[dc];return a||(a=e[dc]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function _e(e){e[Yn]=!0}var mc=new Set,fc={};function zt(e,a){on(e,a),on(e+"Capture",a)}function on(e,a){for(fc[e]=a,e=0;e<a.length;e++)mc.add(a[e])}var Dp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),pc={},hc={};function Np(e){return Wa.call(hc,e)?!0:Wa.call(pc,e)?!1:Dp.test(e)?hc[e]=!0:(pc[e]=!0,!1)}function as(e,a,t){if(Np(a))if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var n=a.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+t)}}function ts(e,a,t){if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+t)}}function La(e,a,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(a,t,""+n)}}var Ti,gc;function sn(e){if(Ti===void 0)try{throw Error()}catch(t){var a=t.stack.trim().match(/\n( *(at )?)/);Ti=a&&a[1]||"",gc=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ti+e+gc}var ki=!1;function Ci(e,a){if(!e||ki)return"";ki=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(a){var T=function(){throw Error()};if(Object.defineProperty(T.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(T,[])}catch(j){var y=j}Reflect.construct(e,[],T)}else{try{T.call()}catch(j){y=j}e.call(T.prototype)}}else{try{throw Error()}catch(j){y=j}(T=e())&&typeof T.catch=="function"&&T.catch(function(){})}}catch(j){if(j&&y&&typeof j.stack=="string")return[j.stack,y.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=n.DetermineComponentFrameRoot(),c=l[0],d=l[1];if(c&&d){var p=c.split(`
`),x=d.split(`
`);for(o=n=0;n<p.length&&!p[n].includes("DetermineComponentFrameRoot");)n++;for(;o<x.length&&!x[o].includes("DetermineComponentFrameRoot");)o++;if(n===p.length||o===x.length)for(n=p.length-1,o=x.length-1;1<=n&&0<=o&&p[n]!==x[o];)o--;for(;1<=n&&0<=o;n--,o--)if(p[n]!==x[o]){if(n!==1||o!==1)do if(n--,o--,0>o||p[n]!==x[o]){var E=`
`+p[n].replace(" at new "," at ");return e.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",e.displayName)),E}while(1<=n&&0<=o);break}}}finally{ki=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?sn(t):""}function Ep(e){switch(e.tag){case 26:case 27:case 5:return sn(e.type);case 16:return sn("Lazy");case 13:return sn("Suspense");case 19:return sn("SuspenseList");case 0:case 15:return Ci(e.type,!1);case 11:return Ci(e.type.render,!1);case 1:return Ci(e.type,!0);case 31:return sn("Activity");default:return""}}function bc(e){try{var a="";do a+=Ep(e),e=e.return;while(e);return a}catch(t){return`
Error generating stack: `+t.message+`
`+t.stack}}function pa(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vc(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function wp(e){var a=vc(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,a),n=""+e[a];if(!e.hasOwnProperty(a)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,l=t.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return o.call(this)},set:function(c){n=""+c,l.call(this,c)}}),Object.defineProperty(e,a,{enumerable:t.enumerable}),{getValue:function(){return n},setValue:function(c){n=""+c},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function ns(e){e._valueTracker||(e._valueTracker=wp(e))}function xc(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var t=a.getValue(),n="";return e&&(n=vc(e)?e.checked?"true":"false":e.value),e=n,e!==t?(a.setValue(e),!0):!1}function os(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Tp=/[\n"\\]/g;function ha(e){return e.replace(Tp,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Mi(e,a,t,n,o,l,c,d){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),a!=null?c==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+pa(a)):e.value!==""+pa(a)&&(e.value=""+pa(a)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),a!=null?Ri(e,c,pa(a)):t!=null?Ri(e,c,pa(t)):n!=null&&e.removeAttribute("value"),o==null&&l!=null&&(e.defaultChecked=!!l),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.name=""+pa(d):e.removeAttribute("name")}function yc(e,a,t,n,o,l,c,d){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.type=l),a!=null||t!=null){if(!(l!=="submit"&&l!=="reset"||a!=null))return;t=t!=null?""+pa(t):"",a=a!=null?""+pa(a):t,d||a===e.value||(e.value=a),e.defaultValue=a}n=n??o,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=d?e.checked:!!n,e.defaultChecked=!!n,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c)}function Ri(e,a,t){a==="number"&&os(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function ln(e,a,t,n){if(e=e.options,a){a={};for(var o=0;o<t.length;o++)a["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=a.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&n&&(e[t].defaultSelected=!0)}else{for(t=""+pa(t),a=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,n&&(e[o].defaultSelected=!0);return}a!==null||e[o].disabled||(a=e[o])}a!==null&&(a.selected=!0)}}function Sc(e,a,t){if(a!=null&&(a=""+pa(a),a!==e.value&&(e.value=a),t==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=t!=null?""+pa(t):""}function jc(e,a,t,n){if(a==null){if(n!=null){if(t!=null)throw Error(u(92));if(Ke(n)){if(1<n.length)throw Error(u(93));n=n[0]}t=n}t==null&&(t=""),a=t}t=pa(a),e.defaultValue=t,n=e.textContent,n===t&&n!==""&&n!==null&&(e.value=n)}function rn(e,a){if(a){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=a;return}}e.textContent=a}var kp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ac(e,a,t){var n=a.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?n?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":n?e.setProperty(a,t):typeof t!="number"||t===0||kp.has(a)?a==="float"?e.cssFloat=t:e[a]=(""+t).trim():e[a]=t+"px"}function Dc(e,a,t){if(a!=null&&typeof a!="object")throw Error(u(62));if(e=e.style,t!=null){for(var n in t)!t.hasOwnProperty(n)||a!=null&&a.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var o in a)n=a[o],a.hasOwnProperty(o)&&t[o]!==n&&Ac(e,o,n)}else for(var l in a)a.hasOwnProperty(l)&&Ac(e,l,a[l])}function zi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Mp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ss(e){return Mp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var qi=null;function Oi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var cn=null,un=null;function Nc(e){var a=tn(e);if(a&&(e=a.stateNode)){var t=e[ea]||null;e:switch(e=a.stateNode,a.type){case"input":if(Mi(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),a=t.name,t.type==="radio"&&a!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+ha(""+a)+'"][type="radio"]'),a=0;a<t.length;a++){var n=t[a];if(n!==e&&n.form===e.form){var o=n[ea]||null;if(!o)throw Error(u(90));Mi(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(a=0;a<t.length;a++)n=t[a],n.form===e.form&&xc(n)}break e;case"textarea":Sc(e,t.value,t.defaultValue);break e;case"select":a=t.value,a!=null&&ln(e,!!t.multiple,a,!1)}}}var Ui=!1;function Ec(e,a,t){if(Ui)return e(a,t);Ui=!0;try{var n=e(a);return n}finally{if(Ui=!1,(cn!==null||un!==null)&&(Qs(),cn&&(a=cn,e=un,un=cn=null,Nc(a),e)))for(a=0;a<e.length;a++)Nc(e[a])}}function Kn(e,a){var t=e.stateNode;if(t===null)return null;var n=t[ea]||null;if(n===null)return null;t=n[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(u(231,a,typeof t));return t}var Ga=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Li=!1;if(Ga)try{var In={};Object.defineProperty(In,"passive",{get:function(){Li=!0}}),window.addEventListener("test",In,In),window.removeEventListener("test",In,In)}catch{Li=!1}var nt=null,Gi=null,is=null;function wc(){if(is)return is;var e,a=Gi,t=a.length,n,o="value"in nt?nt.value:nt.textContent,l=o.length;for(e=0;e<t&&a[e]===o[e];e++);var c=t-e;for(n=1;n<=c&&a[t-n]===o[l-n];n++);return is=o.slice(e,1<n?1-n:void 0)}function ls(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function rs(){return!0}function Tc(){return!1}function aa(e){function a(t,n,o,l,c){this._reactName=t,this._targetInst=o,this.type=n,this.nativeEvent=l,this.target=c,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(t=e[d],this[d]=t?t(l):l[d]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?rs:Tc,this.isPropagationStopped=Tc,this}return R(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=rs)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=rs)},persist:function(){},isPersistent:rs}),a}var qt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cs=aa(qt),Zn=R({},qt,{view:0,detail:0}),Rp=aa(Zn),Bi,_i,Fn,us=R({},Zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fn&&(Fn&&e.type==="mousemove"?(Bi=e.screenX-Fn.screenX,_i=e.screenY-Fn.screenY):_i=Bi=0,Fn=e),Bi)},movementY:function(e){return"movementY"in e?e.movementY:_i}}),kc=aa(us),zp=R({},us,{dataTransfer:0}),qp=aa(zp),Op=R({},Zn,{relatedTarget:0}),Hi=aa(Op),Up=R({},qt,{animationName:0,elapsedTime:0,pseudoElement:0}),Lp=aa(Up),Gp=R({},qt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bp=aa(Gp),_p=R({},qt,{data:0}),Cc=aa(_p),Hp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qp(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=Pp[e])?!!a[e]:!1}function Vi(){return Qp}var Xp=R({},Zn,{key:function(e){if(e.key){var a=Hp[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=ls(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Vp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vi,charCode:function(e){return e.type==="keypress"?ls(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ls(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Yp=aa(Xp),$p=R({},us,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mc=aa($p),Kp=R({},Zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vi}),Ip=aa(Kp),Zp=R({},qt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fp=aa(Zp),Jp=R({},us,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Wp=aa(Jp),eh=R({},qt,{newState:0,oldState:0}),ah=aa(eh),th=[9,13,27,32],Pi=Ga&&"CompositionEvent"in window,Jn=null;Ga&&"documentMode"in document&&(Jn=document.documentMode);var nh=Ga&&"TextEvent"in window&&!Jn,Rc=Ga&&(!Pi||Jn&&8<Jn&&11>=Jn),zc=" ",qc=!1;function Oc(e,a){switch(e){case"keyup":return th.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dn=!1;function oh(e,a){switch(e){case"compositionend":return Uc(a);case"keypress":return a.which!==32?null:(qc=!0,zc);case"textInput":return e=a.data,e===zc&&qc?null:e;default:return null}}function sh(e,a){if(dn)return e==="compositionend"||!Pi&&Oc(e,a)?(e=wc(),is=Gi=nt=null,dn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Rc&&a.locale!=="ko"?null:a.data;default:return null}}var ih={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lc(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!ih[e.type]:a==="textarea"}function Gc(e,a,t,n){cn?un?un.push(n):un=[n]:cn=n,a=Zs(a,"onChange"),0<a.length&&(t=new cs("onChange","change",null,t,n),e.push({event:t,listeners:a}))}var Wn=null,eo=null;function lh(e){vm(e,0)}function ds(e){var a=$n(e);if(xc(a))return e}function Bc(e,a){if(e==="change")return a}var _c=!1;if(Ga){var Qi;if(Ga){var Xi="oninput"in document;if(!Xi){var Hc=document.createElement("div");Hc.setAttribute("oninput","return;"),Xi=typeof Hc.oninput=="function"}Qi=Xi}else Qi=!1;_c=Qi&&(!document.documentMode||9<document.documentMode)}function Vc(){Wn&&(Wn.detachEvent("onpropertychange",Pc),eo=Wn=null)}function Pc(e){if(e.propertyName==="value"&&ds(eo)){var a=[];Gc(a,eo,e,Oi(e)),Ec(lh,a)}}function rh(e,a,t){e==="focusin"?(Vc(),Wn=a,eo=t,Wn.attachEvent("onpropertychange",Pc)):e==="focusout"&&Vc()}function ch(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ds(eo)}function uh(e,a){if(e==="click")return ds(a)}function dh(e,a){if(e==="input"||e==="change")return ds(a)}function mh(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var la=typeof Object.is=="function"?Object.is:mh;function ao(e,a){if(la(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var t=Object.keys(e),n=Object.keys(a);if(t.length!==n.length)return!1;for(n=0;n<t.length;n++){var o=t[n];if(!Wa.call(a,o)||!la(e[o],a[o]))return!1}return!0}function Qc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xc(e,a){var t=Qc(e);e=0;for(var n;t;){if(t.nodeType===3){if(n=e+t.textContent.length,e<=a&&n>=a)return{node:t,offset:a-e};e=n}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Qc(t)}}function Yc(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?Yc(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function $c(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=os(e.document);a instanceof e.HTMLIFrameElement;){try{var t=typeof a.contentWindow.location.href=="string"}catch{t=!1}if(t)e=a.contentWindow;else break;a=os(e.document)}return a}function Yi(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var fh=Ga&&"documentMode"in document&&11>=document.documentMode,mn=null,$i=null,to=null,Ki=!1;function Kc(e,a,t){var n=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ki||mn==null||mn!==os(n)||(n=mn,"selectionStart"in n&&Yi(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),to&&ao(to,n)||(to=n,n=Zs($i,"onSelect"),0<n.length&&(a=new cs("onSelect","select",null,a,t),e.push({event:a,listeners:n}),a.target=mn)))}function Ot(e,a){var t={};return t[e.toLowerCase()]=a.toLowerCase(),t["Webkit"+e]="webkit"+a,t["Moz"+e]="moz"+a,t}var fn={animationend:Ot("Animation","AnimationEnd"),animationiteration:Ot("Animation","AnimationIteration"),animationstart:Ot("Animation","AnimationStart"),transitionrun:Ot("Transition","TransitionRun"),transitionstart:Ot("Transition","TransitionStart"),transitioncancel:Ot("Transition","TransitionCancel"),transitionend:Ot("Transition","TransitionEnd")},Ii={},Ic={};Ga&&(Ic=document.createElement("div").style,"AnimationEvent"in window||(delete fn.animationend.animation,delete fn.animationiteration.animation,delete fn.animationstart.animation),"TransitionEvent"in window||delete fn.transitionend.transition);function Ut(e){if(Ii[e])return Ii[e];if(!fn[e])return e;var a=fn[e],t;for(t in a)if(a.hasOwnProperty(t)&&t in Ic)return Ii[e]=a[t];return e}var Zc=Ut("animationend"),Fc=Ut("animationiteration"),Jc=Ut("animationstart"),ph=Ut("transitionrun"),hh=Ut("transitionstart"),gh=Ut("transitioncancel"),Wc=Ut("transitionend"),eu=new Map,Zi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Zi.push("scrollEnd");function Aa(e,a){eu.set(e,a),zt(a,[e])}var au=new WeakMap;function ga(e,a){if(typeof e=="object"&&e!==null){var t=au.get(e);return t!==void 0?t:(a={value:e,source:a,stack:bc(a)},au.set(e,a),a)}return{value:e,source:a,stack:bc(a)}}var ba=[],pn=0,Fi=0;function ms(){for(var e=pn,a=Fi=pn=0;a<e;){var t=ba[a];ba[a++]=null;var n=ba[a];ba[a++]=null;var o=ba[a];ba[a++]=null;var l=ba[a];if(ba[a++]=null,n!==null&&o!==null){var c=n.pending;c===null?o.next=o:(o.next=c.next,c.next=o),n.pending=o}l!==0&&tu(t,o,l)}}function fs(e,a,t,n){ba[pn++]=e,ba[pn++]=a,ba[pn++]=t,ba[pn++]=n,Fi|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Ji(e,a,t,n){return fs(e,a,t,n),ps(e)}function hn(e,a){return fs(e,null,null,a),ps(e)}function tu(e,a,t){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t);for(var o=!1,l=e.return;l!==null;)l.childLanes|=t,n=l.alternate,n!==null&&(n.childLanes|=t),l.tag===22&&(e=l.stateNode,e===null||e._visibility&1||(o=!0)),e=l,l=l.return;return e.tag===3?(l=e.stateNode,o&&a!==null&&(o=31-ia(t),e=l.hiddenUpdates,n=e[o],n===null?e[o]=[a]:n.push(a),a.lane=t|536870912),l):null}function ps(e){if(50<To)throw To=0,or=null,Error(u(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var gn={};function bh(e,a,t,n){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ra(e,a,t,n){return new bh(e,a,t,n)}function Wi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ba(e,a){var t=e.alternate;return t===null?(t=ra(e.tag,a,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=a,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,a=e.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function nu(e,a){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,a=t.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function hs(e,a,t,n,o,l){var c=0;if(n=e,typeof e=="function")Wi(e)&&(c=1);else if(typeof e=="string")c=xg(e,t,De.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Me:return e=ra(31,t,a,o),e.elementType=Me,e.lanes=l,e;case I:return Lt(t.children,o,l,a);case Q:c=8,o|=24;break;case Z:return e=ra(12,t,a,o|2),e.elementType=Z,e.lanes=l,e;case qe:return e=ra(13,t,a,o),e.elementType=qe,e.lanes=l,e;case we:return e=ra(19,t,a,o),e.elementType=we,e.lanes=l,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case oe:case ye:c=10;break e;case Ge:c=9;break e;case Ce:c=11;break e;case Fe:c=14;break e;case H:c=16,n=null;break e}c=29,t=Error(u(130,e===null?"null":typeof e,"")),n=null}return a=ra(c,t,a,o),a.elementType=e,a.type=n,a.lanes=l,a}function Lt(e,a,t,n){return e=ra(7,e,n,a),e.lanes=t,e}function el(e,a,t){return e=ra(6,e,null,a),e.lanes=t,e}function al(e,a,t){return a=ra(4,e.children!==null?e.children:[],e.key,a),a.lanes=t,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var bn=[],vn=0,gs=null,bs=0,va=[],xa=0,Gt=null,_a=1,Ha="";function Bt(e,a){bn[vn++]=bs,bn[vn++]=gs,gs=e,bs=a}function ou(e,a,t){va[xa++]=_a,va[xa++]=Ha,va[xa++]=Gt,Gt=e;var n=_a;e=Ha;var o=32-ia(n)-1;n&=~(1<<o),t+=1;var l=32-ia(a)+o;if(30<l){var c=o-o%5;l=(n&(1<<c)-1).toString(32),n>>=c,o-=c,_a=1<<32-ia(a)+o|t<<o|n,Ha=l+e}else _a=1<<l|t<<o|n,Ha=e}function tl(e){e.return!==null&&(Bt(e,1),ou(e,1,0))}function nl(e){for(;e===gs;)gs=bn[--vn],bn[vn]=null,bs=bn[--vn],bn[vn]=null;for(;e===Gt;)Gt=va[--xa],va[xa]=null,Ha=va[--xa],va[xa]=null,_a=va[--xa],va[xa]=null}var Je=null,Ne=null,le=!1,_t=null,Ta=!1,ol=Error(u(519));function Ht(e){var a=Error(u(418,""));throw so(ga(a,e)),ol}function su(e){var a=e.stateNode,t=e.type,n=e.memoizedProps;switch(a[Ie]=e,a[ea]=n,t){case"dialog":te("cancel",a),te("close",a);break;case"iframe":case"object":case"embed":te("load",a);break;case"video":case"audio":for(t=0;t<Co.length;t++)te(Co[t],a);break;case"source":te("error",a);break;case"img":case"image":case"link":te("error",a),te("load",a);break;case"details":te("toggle",a);break;case"input":te("invalid",a),yc(a,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),ns(a);break;case"select":te("invalid",a);break;case"textarea":te("invalid",a),jc(a,n.value,n.defaultValue,n.children),ns(a)}t=n.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||a.textContent===""+t||n.suppressHydrationWarning===!0||jm(a.textContent,t)?(n.popover!=null&&(te("beforetoggle",a),te("toggle",a)),n.onScroll!=null&&te("scroll",a),n.onScrollEnd!=null&&te("scrollend",a),n.onClick!=null&&(a.onclick=Fs),a=!0):a=!1,a||Ht(e)}function iu(e){for(Je=e.return;Je;)switch(Je.tag){case 5:case 13:Ta=!1;return;case 27:case 3:Ta=!0;return;default:Je=Je.return}}function no(e){if(e!==Je)return!1;if(!le)return iu(e),le=!0,!1;var a=e.tag,t;if((t=a!==3&&a!==27)&&((t=a===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||yr(e.type,e.memoizedProps)),t=!t),t&&Ne&&Ht(e),iu(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,a=0;e;){if(e.nodeType===8)if(t=e.data,t==="/$"){if(a===0){Ne=Na(e.nextSibling);break e}a--}else t!=="$"&&t!=="$!"&&t!=="$?"||a++;e=e.nextSibling}Ne=null}}else a===27?(a=Ne,xt(e.type)?(e=Dr,Dr=null,Ne=e):Ne=a):Ne=Je?Na(e.stateNode.nextSibling):null;return!0}function oo(){Ne=Je=null,le=!1}function lu(){var e=_t;return e!==null&&(oa===null?oa=e:oa.push.apply(oa,e),_t=null),e}function so(e){_t===null?_t=[e]:_t.push(e)}var sl=Be(null),Vt=null,Va=null;function ot(e,a,t){ie(sl,a._currentValue),a._currentValue=t}function Pa(e){e._currentValue=sl.current,ge(sl)}function il(e,a,t){for(;e!==null;){var n=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,n!==null&&(n.childLanes|=a)):n!==null&&(n.childLanes&a)!==a&&(n.childLanes|=a),e===t)break;e=e.return}}function ll(e,a,t,n){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var l=o.dependencies;if(l!==null){var c=o.child;l=l.firstContext;e:for(;l!==null;){var d=l;l=o;for(var p=0;p<a.length;p++)if(d.context===a[p]){l.lanes|=t,d=l.alternate,d!==null&&(d.lanes|=t),il(l.return,t,e),n||(c=null);break e}l=d.next}}else if(o.tag===18){if(c=o.return,c===null)throw Error(u(341));c.lanes|=t,l=c.alternate,l!==null&&(l.lanes|=t),il(c,t,e),c=null}else c=o.child;if(c!==null)c.return=o;else for(c=o;c!==null;){if(c===e){c=null;break}if(o=c.sibling,o!==null){o.return=c.return,c=o;break}c=c.return}o=c}}function io(e,a,t,n){e=null;for(var o=a,l=!1;o!==null;){if(!l){if((o.flags&524288)!==0)l=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var c=o.alternate;if(c===null)throw Error(u(387));if(c=c.memoizedProps,c!==null){var d=o.type;la(o.pendingProps.value,c.value)||(e!==null?e.push(d):e=[d])}}else if(o===Oa.current){if(c=o.alternate,c===null)throw Error(u(387));c.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(Uo):e=[Uo])}o=o.return}e!==null&&ll(a,e,t,n),a.flags|=262144}function vs(e){for(e=e.firstContext;e!==null;){if(!la(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Pt(e){Vt=e,Va=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ze(e){return ru(Vt,e)}function xs(e,a){return Vt===null&&Pt(e),ru(e,a)}function ru(e,a){var t=a._currentValue;if(a={context:a,memoizedValue:t,next:null},Va===null){if(e===null)throw Error(u(308));Va=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else Va=Va.next=a;return t}var vh=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){a.aborted=!0,e.forEach(function(t){return t()})}},xh=i.unstable_scheduleCallback,yh=i.unstable_NormalPriority,Oe={$$typeof:ye,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function rl(){return{controller:new vh,data:new Map,refCount:0}}function lo(e){e.refCount--,e.refCount===0&&xh(yh,function(){e.controller.abort()})}var ro=null,cl=0,xn=0,yn=null;function Sh(e,a){if(ro===null){var t=ro=[];cl=0,xn=dr(),yn={status:"pending",value:void 0,then:function(n){t.push(n)}}}return cl++,a.then(cu,cu),a}function cu(){if(--cl===0&&ro!==null){yn!==null&&(yn.status="fulfilled");var e=ro;ro=null,xn=0,yn=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function jh(e,a){var t=[],n={status:"pending",value:null,reason:null,then:function(o){t.push(o)}};return e.then(function(){n.status="fulfilled",n.value=a;for(var o=0;o<t.length;o++)(0,t[o])(a)},function(o){for(n.status="rejected",n.reason=o,o=0;o<t.length;o++)(0,t[o])(void 0)}),n}var uu=N.S;N.S=function(e,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&Sh(e,a),uu!==null&&uu(e,a)};var Qt=Be(null);function ul(){var e=Qt.current;return e!==null?e:ve.pooledCache}function ys(e,a){a===null?ie(Qt,Qt.current):ie(Qt,a.pool)}function du(){var e=ul();return e===null?null:{parent:Oe._currentValue,pool:e}}var co=Error(u(460)),mu=Error(u(474)),Ss=Error(u(542)),dl={then:function(){}};function fu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function js(){}function pu(e,a,t){switch(t=e[t],t===void 0?e.push(a):t!==a&&(a.then(js,js),a=t),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,gu(e),e;default:if(typeof a.status=="string")a.then(js,js);else{if(e=ve,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=a,e.status="pending",e.then(function(n){if(a.status==="pending"){var o=a;o.status="fulfilled",o.value=n}},function(n){if(a.status==="pending"){var o=a;o.status="rejected",o.reason=n}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,gu(e),e}throw uo=a,co}}var uo=null;function hu(){if(uo===null)throw Error(u(459));var e=uo;return uo=null,e}function gu(e){if(e===co||e===Ss)throw Error(u(483))}var st=!1;function ml(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function fl(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function it(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function lt(e,a,t){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(ce&2)!==0){var o=n.pending;return o===null?a.next=a:(a.next=o.next,o.next=a),n.pending=a,a=ps(e),tu(e,null,t),a}return fs(e,n,a,t),ps(e)}function mo(e,a,t){if(a=a.updateQueue,a!==null&&(a=a.shared,(t&4194048)!==0)){var n=a.lanes;n&=e.pendingLanes,t|=n,a.lanes=t,cc(e,t)}}function pl(e,a){var t=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,t===n)){var o=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var c={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};l===null?o=l=c:l=l.next=c,t=t.next}while(t!==null);l===null?o=l=a:l=l.next=a}else o=l=a;t={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:n.shared,callbacks:n.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=a:e.next=a,t.lastBaseUpdate=a}var hl=!1;function fo(){if(hl){var e=yn;if(e!==null)throw e}}function po(e,a,t,n){hl=!1;var o=e.updateQueue;st=!1;var l=o.firstBaseUpdate,c=o.lastBaseUpdate,d=o.shared.pending;if(d!==null){o.shared.pending=null;var p=d,x=p.next;p.next=null,c===null?l=x:c.next=x,c=p;var E=e.alternate;E!==null&&(E=E.updateQueue,d=E.lastBaseUpdate,d!==c&&(d===null?E.firstBaseUpdate=x:d.next=x,E.lastBaseUpdate=p))}if(l!==null){var T=o.baseState;c=0,E=x=p=null,d=l;do{var y=d.lane&-536870913,j=y!==d.lane;if(j?(ne&y)===y:(n&y)===y){y!==0&&y===xn&&(hl=!0),E!==null&&(E=E.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});e:{var K=e,X=d;y=a;var pe=t;switch(X.tag){case 1:if(K=X.payload,typeof K=="function"){T=K.call(pe,T,y);break e}T=K;break e;case 3:K.flags=K.flags&-65537|128;case 0:if(K=X.payload,y=typeof K=="function"?K.call(pe,T,y):K,y==null)break e;T=R({},T,y);break e;case 2:st=!0}}y=d.callback,y!==null&&(e.flags|=64,j&&(e.flags|=8192),j=o.callbacks,j===null?o.callbacks=[y]:j.push(y))}else j={lane:y,tag:d.tag,payload:d.payload,callback:d.callback,next:null},E===null?(x=E=j,p=T):E=E.next=j,c|=y;if(d=d.next,d===null){if(d=o.shared.pending,d===null)break;j=d,d=j.next,j.next=null,o.lastBaseUpdate=j,o.shared.pending=null}}while(!0);E===null&&(p=T),o.baseState=p,o.firstBaseUpdate=x,o.lastBaseUpdate=E,l===null&&(o.shared.lanes=0),ht|=c,e.lanes=c,e.memoizedState=T}}function bu(e,a){if(typeof e!="function")throw Error(u(191,e));e.call(a)}function vu(e,a){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)bu(t[e],a)}var Sn=Be(null),As=Be(0);function xu(e,a){e=Za,ie(As,e),ie(Sn,a),Za=e|a.baseLanes}function gl(){ie(As,Za),ie(Sn,Sn.current)}function bl(){Za=As.current,ge(Sn),ge(As)}var rt=0,F=null,me=null,Re=null,Ds=!1,jn=!1,Xt=!1,Ns=0,ho=0,An=null,Ah=0;function Te(){throw Error(u(321))}function vl(e,a){if(a===null)return!1;for(var t=0;t<a.length&&t<e.length;t++)if(!la(e[t],a[t]))return!1;return!0}function xl(e,a,t,n,o,l){return rt=l,F=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,N.H=e===null||e.memoizedState===null?td:nd,Xt=!1,l=t(n,o),Xt=!1,jn&&(l=Su(a,t,n,o)),yu(e),l}function yu(e){N.H=Ms;var a=me!==null&&me.next!==null;if(rt=0,Re=me=F=null,Ds=!1,ho=0,An=null,a)throw Error(u(300));e===null||He||(e=e.dependencies,e!==null&&vs(e)&&(He=!0))}function Su(e,a,t,n){F=e;var o=0;do{if(jn&&(An=null),ho=0,jn=!1,25<=o)throw Error(u(301));if(o+=1,Re=me=null,e.updateQueue!=null){var l=e.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}N.H=Ch,l=a(t,n)}while(jn);return l}function Dh(){var e=N.H,a=e.useState()[0];return a=typeof a.then=="function"?go(a):a,e=e.useState()[0],(me!==null?me.memoizedState:null)!==e&&(F.flags|=1024),a}function yl(){var e=Ns!==0;return Ns=0,e}function Sl(e,a,t){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~t}function jl(e){if(Ds){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}Ds=!1}rt=0,Re=me=F=null,jn=!1,ho=Ns=0,An=null}function ta(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?F.memoizedState=Re=e:Re=Re.next=e,Re}function ze(){if(me===null){var e=F.alternate;e=e!==null?e.memoizedState:null}else e=me.next;var a=Re===null?F.memoizedState:Re.next;if(a!==null)Re=a,me=e;else{if(e===null)throw F.alternate===null?Error(u(467)):Error(u(310));me=e,e={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},Re===null?F.memoizedState=Re=e:Re=Re.next=e}return Re}function Al(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function go(e){var a=ho;return ho+=1,An===null&&(An=[]),e=pu(An,e,a),a=F,(Re===null?a.memoizedState:Re.next)===null&&(a=a.alternate,N.H=a===null||a.memoizedState===null?td:nd),e}function Es(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return go(e);if(e.$$typeof===ye)return Ze(e)}throw Error(u(438,String(e)))}function Dl(e){var a=null,t=F.updateQueue;if(t!==null&&(a=t.memoCache),a==null){var n=F.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(a={data:n.data.map(function(o){return o.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),t===null&&(t=Al(),F.updateQueue=t),t.memoCache=a,t=a.data[a.index],t===void 0)for(t=a.data[a.index]=Array(e),n=0;n<e;n++)t[n]=Tt;return a.index++,t}function Qa(e,a){return typeof a=="function"?a(e):a}function ws(e){var a=ze();return Nl(a,me,e)}function Nl(e,a,t){var n=e.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=t;var o=e.baseQueue,l=n.pending;if(l!==null){if(o!==null){var c=o.next;o.next=l.next,l.next=c}a.baseQueue=o=l,n.pending=null}if(l=e.baseState,o===null)e.memoizedState=l;else{a=o.next;var d=c=null,p=null,x=a,E=!1;do{var T=x.lane&-536870913;if(T!==x.lane?(ne&T)===T:(rt&T)===T){var y=x.revertLane;if(y===0)p!==null&&(p=p.next={lane:0,revertLane:0,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),T===xn&&(E=!0);else if((rt&y)===y){x=x.next,y===xn&&(E=!0);continue}else T={lane:0,revertLane:x.revertLane,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},p===null?(d=p=T,c=l):p=p.next=T,F.lanes|=y,ht|=y;T=x.action,Xt&&t(l,T),l=x.hasEagerState?x.eagerState:t(l,T)}else y={lane:T,revertLane:x.revertLane,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},p===null?(d=p=y,c=l):p=p.next=y,F.lanes|=T,ht|=T;x=x.next}while(x!==null&&x!==a);if(p===null?c=l:p.next=d,!la(l,e.memoizedState)&&(He=!0,E&&(t=yn,t!==null)))throw t;e.memoizedState=l,e.baseState=c,e.baseQueue=p,n.lastRenderedState=l}return o===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function El(e){var a=ze(),t=a.queue;if(t===null)throw Error(u(311));t.lastRenderedReducer=e;var n=t.dispatch,o=t.pending,l=a.memoizedState;if(o!==null){t.pending=null;var c=o=o.next;do l=e(l,c.action),c=c.next;while(c!==o);la(l,a.memoizedState)||(He=!0),a.memoizedState=l,a.baseQueue===null&&(a.baseState=l),t.lastRenderedState=l}return[l,n]}function ju(e,a,t){var n=F,o=ze(),l=le;if(l){if(t===void 0)throw Error(u(407));t=t()}else t=a();var c=!la((me||o).memoizedState,t);c&&(o.memoizedState=t,He=!0),o=o.queue;var d=Nu.bind(null,n,o,e);if(bo(2048,8,d,[e]),o.getSnapshot!==a||c||Re!==null&&Re.memoizedState.tag&1){if(n.flags|=2048,Dn(9,Ts(),Du.bind(null,n,o,t,a),null),ve===null)throw Error(u(349));l||(rt&124)!==0||Au(n,a,t)}return t}function Au(e,a,t){e.flags|=16384,e={getSnapshot:a,value:t},a=F.updateQueue,a===null?(a=Al(),F.updateQueue=a,a.stores=[e]):(t=a.stores,t===null?a.stores=[e]:t.push(e))}function Du(e,a,t,n){a.value=t,a.getSnapshot=n,Eu(a)&&wu(e)}function Nu(e,a,t){return t(function(){Eu(a)&&wu(e)})}function Eu(e){var a=e.getSnapshot;e=e.value;try{var t=a();return!la(e,t)}catch{return!0}}function wu(e){var a=hn(e,2);a!==null&&fa(a,e,2)}function wl(e){var a=ta();if(typeof e=="function"){var t=e;if(e=t(),Xt){at(!0);try{t()}finally{at(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qa,lastRenderedState:e},a}function Tu(e,a,t,n){return e.baseState=t,Nl(e,me,typeof n=="function"?n:Qa)}function Nh(e,a,t,n,o){if(Cs(e))throw Error(u(485));if(e=a.action,e!==null){var l={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){l.listeners.push(c)}};N.T!==null?t(!0):l.isTransition=!1,n(l),t=a.pending,t===null?(l.next=a.pending=l,ku(a,l)):(l.next=t.next,a.pending=t.next=l)}}function ku(e,a){var t=a.action,n=a.payload,o=e.state;if(a.isTransition){var l=N.T,c={};N.T=c;try{var d=t(o,n),p=N.S;p!==null&&p(c,d),Cu(e,a,d)}catch(x){Tl(e,a,x)}finally{N.T=l}}else try{l=t(o,n),Cu(e,a,l)}catch(x){Tl(e,a,x)}}function Cu(e,a,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(n){Mu(e,a,n)},function(n){return Tl(e,a,n)}):Mu(e,a,t)}function Mu(e,a,t){a.status="fulfilled",a.value=t,Ru(a),e.state=t,a=e.pending,a!==null&&(t=a.next,t===a?e.pending=null:(t=t.next,a.next=t,ku(e,t)))}function Tl(e,a,t){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do a.status="rejected",a.reason=t,Ru(a),a=a.next;while(a!==n)}e.action=null}function Ru(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function zu(e,a){return a}function qu(e,a){if(le){var t=ve.formState;if(t!==null){e:{var n=F;if(le){if(Ne){a:{for(var o=Ne,l=Ta;o.nodeType!==8;){if(!l){o=null;break a}if(o=Na(o.nextSibling),o===null){o=null;break a}}l=o.data,o=l==="F!"||l==="F"?o:null}if(o){Ne=Na(o.nextSibling),n=o.data==="F!";break e}}Ht(n)}n=!1}n&&(a=t[0])}}return t=ta(),t.memoizedState=t.baseState=a,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zu,lastRenderedState:a},t.queue=n,t=Wu.bind(null,F,n),n.dispatch=t,n=wl(!1),l=zl.bind(null,F,!1,n.queue),n=ta(),o={state:a,dispatch:null,action:e,pending:null},n.queue=o,t=Nh.bind(null,F,o,l,t),o.dispatch=t,n.memoizedState=e,[a,t,!1]}function Ou(e){var a=ze();return Uu(a,me,e)}function Uu(e,a,t){if(a=Nl(e,a,zu)[0],e=ws(Qa)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var n=go(a)}catch(c){throw c===co?Ss:c}else n=a;a=ze();var o=a.queue,l=o.dispatch;return t!==a.memoizedState&&(F.flags|=2048,Dn(9,Ts(),Eh.bind(null,o,t),null)),[n,l,e]}function Eh(e,a){e.action=a}function Lu(e){var a=ze(),t=me;if(t!==null)return Uu(a,t,e);ze(),a=a.memoizedState,t=ze();var n=t.queue.dispatch;return t.memoizedState=e,[a,n,!1]}function Dn(e,a,t,n){return e={tag:e,create:t,deps:n,inst:a,next:null},a=F.updateQueue,a===null&&(a=Al(),F.updateQueue=a),t=a.lastEffect,t===null?a.lastEffect=e.next=e:(n=t.next,t.next=e,e.next=n,a.lastEffect=e),e}function Ts(){return{destroy:void 0,resource:void 0}}function Gu(){return ze().memoizedState}function ks(e,a,t,n){var o=ta();n=n===void 0?null:n,F.flags|=e,o.memoizedState=Dn(1|a,Ts(),t,n)}function bo(e,a,t,n){var o=ze();n=n===void 0?null:n;var l=o.memoizedState.inst;me!==null&&n!==null&&vl(n,me.memoizedState.deps)?o.memoizedState=Dn(a,l,t,n):(F.flags|=e,o.memoizedState=Dn(1|a,l,t,n))}function Bu(e,a){ks(8390656,8,e,a)}function _u(e,a){bo(2048,8,e,a)}function Hu(e,a){return bo(4,2,e,a)}function Vu(e,a){return bo(4,4,e,a)}function Pu(e,a){if(typeof a=="function"){e=e();var t=a(e);return function(){typeof t=="function"?t():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function Qu(e,a,t){t=t!=null?t.concat([e]):null,bo(4,4,Pu.bind(null,a,e),t)}function kl(){}function Xu(e,a){var t=ze();a=a===void 0?null:a;var n=t.memoizedState;return a!==null&&vl(a,n[1])?n[0]:(t.memoizedState=[e,a],e)}function Yu(e,a){var t=ze();a=a===void 0?null:a;var n=t.memoizedState;if(a!==null&&vl(a,n[1]))return n[0];if(n=e(),Xt){at(!0);try{e()}finally{at(!1)}}return t.memoizedState=[n,a],n}function Cl(e,a,t){return t===void 0||(rt&1073741824)!==0?e.memoizedState=a:(e.memoizedState=t,e=Id(),F.lanes|=e,ht|=e,t)}function $u(e,a,t,n){return la(t,a)?t:Sn.current!==null?(e=Cl(e,t,n),la(e,a)||(He=!0),e):(rt&42)===0?(He=!0,e.memoizedState=t):(e=Id(),F.lanes|=e,ht|=e,a)}function Ku(e,a,t,n,o){var l=q.p;q.p=l!==0&&8>l?l:8;var c=N.T,d={};N.T=d,zl(e,!1,a,t);try{var p=o(),x=N.S;if(x!==null&&x(d,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var E=jh(p,n);vo(e,a,E,ma(e))}else vo(e,a,n,ma(e))}catch(T){vo(e,a,{then:function(){},status:"rejected",reason:T},ma())}finally{q.p=l,N.T=c}}function wh(){}function Ml(e,a,t,n){if(e.tag!==5)throw Error(u(476));var o=Iu(e).queue;Ku(e,o,a,Y,t===null?wh:function(){return Zu(e),t(n)})}function Iu(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qa,lastRenderedState:Y},next:null};var t={};return a.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qa,lastRenderedState:t},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function Zu(e){var a=Iu(e).next.queue;vo(e,a,{},ma())}function Rl(){return Ze(Uo)}function Fu(){return ze().memoizedState}function Ju(){return ze().memoizedState}function Th(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var t=ma();e=it(t);var n=lt(a,e,t);n!==null&&(fa(n,a,t),mo(n,a,t)),a={cache:rl()},e.payload=a;return}a=a.return}}function kh(e,a,t){var n=ma();t={lane:n,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null},Cs(e)?ed(a,t):(t=Ji(e,a,t,n),t!==null&&(fa(t,e,n),ad(t,a,n)))}function Wu(e,a,t){var n=ma();vo(e,a,t,n)}function vo(e,a,t,n){var o={lane:n,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null};if(Cs(e))ed(a,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=a.lastRenderedReducer,l!==null))try{var c=a.lastRenderedState,d=l(c,t);if(o.hasEagerState=!0,o.eagerState=d,la(d,c))return fs(e,a,o,0),ve===null&&ms(),!1}catch{}if(t=Ji(e,a,o,n),t!==null)return fa(t,e,n),ad(t,a,n),!0}return!1}function zl(e,a,t,n){if(n={lane:2,revertLane:dr(),action:n,hasEagerState:!1,eagerState:null,next:null},Cs(e)){if(a)throw Error(u(479))}else a=Ji(e,t,n,2),a!==null&&fa(a,e,2)}function Cs(e){var a=e.alternate;return e===F||a!==null&&a===F}function ed(e,a){jn=Ds=!0;var t=e.pending;t===null?a.next=a:(a.next=t.next,t.next=a),e.pending=a}function ad(e,a,t){if((t&4194048)!==0){var n=a.lanes;n&=e.pendingLanes,t|=n,a.lanes=t,cc(e,t)}}var Ms={readContext:Ze,use:Es,useCallback:Te,useContext:Te,useEffect:Te,useImperativeHandle:Te,useLayoutEffect:Te,useInsertionEffect:Te,useMemo:Te,useReducer:Te,useRef:Te,useState:Te,useDebugValue:Te,useDeferredValue:Te,useTransition:Te,useSyncExternalStore:Te,useId:Te,useHostTransitionStatus:Te,useFormState:Te,useActionState:Te,useOptimistic:Te,useMemoCache:Te,useCacheRefresh:Te},td={readContext:Ze,use:Es,useCallback:function(e,a){return ta().memoizedState=[e,a===void 0?null:a],e},useContext:Ze,useEffect:Bu,useImperativeHandle:function(e,a,t){t=t!=null?t.concat([e]):null,ks(4194308,4,Pu.bind(null,a,e),t)},useLayoutEffect:function(e,a){return ks(4194308,4,e,a)},useInsertionEffect:function(e,a){ks(4,2,e,a)},useMemo:function(e,a){var t=ta();a=a===void 0?null:a;var n=e();if(Xt){at(!0);try{e()}finally{at(!1)}}return t.memoizedState=[n,a],n},useReducer:function(e,a,t){var n=ta();if(t!==void 0){var o=t(a);if(Xt){at(!0);try{t(a)}finally{at(!1)}}}else o=a;return n.memoizedState=n.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},n.queue=e,e=e.dispatch=kh.bind(null,F,e),[n.memoizedState,e]},useRef:function(e){var a=ta();return e={current:e},a.memoizedState=e},useState:function(e){e=wl(e);var a=e.queue,t=Wu.bind(null,F,a);return a.dispatch=t,[e.memoizedState,t]},useDebugValue:kl,useDeferredValue:function(e,a){var t=ta();return Cl(t,e,a)},useTransition:function(){var e=wl(!1);return e=Ku.bind(null,F,e.queue,!0,!1),ta().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,t){var n=F,o=ta();if(le){if(t===void 0)throw Error(u(407));t=t()}else{if(t=a(),ve===null)throw Error(u(349));(ne&124)!==0||Au(n,a,t)}o.memoizedState=t;var l={value:t,getSnapshot:a};return o.queue=l,Bu(Nu.bind(null,n,l,e),[e]),n.flags|=2048,Dn(9,Ts(),Du.bind(null,n,l,t,a),null),t},useId:function(){var e=ta(),a=ve.identifierPrefix;if(le){var t=Ha,n=_a;t=(n&~(1<<32-ia(n)-1)).toString(32)+t,a="«"+a+"R"+t,t=Ns++,0<t&&(a+="H"+t.toString(32)),a+="»"}else t=Ah++,a="«"+a+"r"+t.toString(32)+"»";return e.memoizedState=a},useHostTransitionStatus:Rl,useFormState:qu,useActionState:qu,useOptimistic:function(e){var a=ta();a.memoizedState=a.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=t,a=zl.bind(null,F,!0,t),t.dispatch=a,[e,a]},useMemoCache:Dl,useCacheRefresh:function(){return ta().memoizedState=Th.bind(null,F)}},nd={readContext:Ze,use:Es,useCallback:Xu,useContext:Ze,useEffect:_u,useImperativeHandle:Qu,useInsertionEffect:Hu,useLayoutEffect:Vu,useMemo:Yu,useReducer:ws,useRef:Gu,useState:function(){return ws(Qa)},useDebugValue:kl,useDeferredValue:function(e,a){var t=ze();return $u(t,me.memoizedState,e,a)},useTransition:function(){var e=ws(Qa)[0],a=ze().memoizedState;return[typeof e=="boolean"?e:go(e),a]},useSyncExternalStore:ju,useId:Fu,useHostTransitionStatus:Rl,useFormState:Ou,useActionState:Ou,useOptimistic:function(e,a){var t=ze();return Tu(t,me,e,a)},useMemoCache:Dl,useCacheRefresh:Ju},Ch={readContext:Ze,use:Es,useCallback:Xu,useContext:Ze,useEffect:_u,useImperativeHandle:Qu,useInsertionEffect:Hu,useLayoutEffect:Vu,useMemo:Yu,useReducer:El,useRef:Gu,useState:function(){return El(Qa)},useDebugValue:kl,useDeferredValue:function(e,a){var t=ze();return me===null?Cl(t,e,a):$u(t,me.memoizedState,e,a)},useTransition:function(){var e=El(Qa)[0],a=ze().memoizedState;return[typeof e=="boolean"?e:go(e),a]},useSyncExternalStore:ju,useId:Fu,useHostTransitionStatus:Rl,useFormState:Lu,useActionState:Lu,useOptimistic:function(e,a){var t=ze();return me!==null?Tu(t,me,e,a):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:Dl,useCacheRefresh:Ju},Nn=null,xo=0;function Rs(e){var a=xo;return xo+=1,Nn===null&&(Nn=[]),pu(Nn,e,a)}function yo(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function zs(e,a){throw a.$$typeof===V?Error(u(525)):(e=Object.prototype.toString.call(a),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function od(e){var a=e._init;return a(e._payload)}function sd(e){function a(b,h){if(e){var v=b.deletions;v===null?(b.deletions=[h],b.flags|=16):v.push(h)}}function t(b,h){if(!e)return null;for(;h!==null;)a(b,h),h=h.sibling;return null}function n(b){for(var h=new Map;b!==null;)b.key!==null?h.set(b.key,b):h.set(b.index,b),b=b.sibling;return h}function o(b,h){return b=Ba(b,h),b.index=0,b.sibling=null,b}function l(b,h,v){return b.index=v,e?(v=b.alternate,v!==null?(v=v.index,v<h?(b.flags|=67108866,h):v):(b.flags|=67108866,h)):(b.flags|=1048576,h)}function c(b){return e&&b.alternate===null&&(b.flags|=67108866),b}function d(b,h,v,w){return h===null||h.tag!==6?(h=el(v,b.mode,w),h.return=b,h):(h=o(h,v),h.return=b,h)}function p(b,h,v,w){var L=v.type;return L===I?E(b,h,v.props.children,w,v.key):h!==null&&(h.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===H&&od(L)===h.type)?(h=o(h,v.props),yo(h,v),h.return=b,h):(h=hs(v.type,v.key,v.props,null,b.mode,w),yo(h,v),h.return=b,h)}function x(b,h,v,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=al(v,b.mode,w),h.return=b,h):(h=o(h,v.children||[]),h.return=b,h)}function E(b,h,v,w,L){return h===null||h.tag!==7?(h=Lt(v,b.mode,w,L),h.return=b,h):(h=o(h,v),h.return=b,h)}function T(b,h,v){if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return h=el(""+h,b.mode,v),h.return=b,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case _:return v=hs(h.type,h.key,h.props,null,b.mode,v),yo(v,h),v.return=b,v;case W:return h=al(h,b.mode,v),h.return=b,h;case H:var w=h._init;return h=w(h._payload),T(b,h,v)}if(Ke(h)||Qe(h))return h=Lt(h,b.mode,v,null),h.return=b,h;if(typeof h.then=="function")return T(b,Rs(h),v);if(h.$$typeof===ye)return T(b,xs(b,h),v);zs(b,h)}return null}function y(b,h,v,w){var L=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return L!==null?null:d(b,h,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case _:return v.key===L?p(b,h,v,w):null;case W:return v.key===L?x(b,h,v,w):null;case H:return L=v._init,v=L(v._payload),y(b,h,v,w)}if(Ke(v)||Qe(v))return L!==null?null:E(b,h,v,w,null);if(typeof v.then=="function")return y(b,h,Rs(v),w);if(v.$$typeof===ye)return y(b,h,xs(b,v),w);zs(b,v)}return null}function j(b,h,v,w,L){if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return b=b.get(v)||null,d(h,b,""+w,L);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case _:return b=b.get(w.key===null?v:w.key)||null,p(h,b,w,L);case W:return b=b.get(w.key===null?v:w.key)||null,x(h,b,w,L);case H:var ee=w._init;return w=ee(w._payload),j(b,h,v,w,L)}if(Ke(w)||Qe(w))return b=b.get(v)||null,E(h,b,w,L,null);if(typeof w.then=="function")return j(b,h,v,Rs(w),L);if(w.$$typeof===ye)return j(b,h,v,xs(h,w),L);zs(h,w)}return null}function K(b,h,v,w){for(var L=null,ee=null,P=h,$=h=0,Pe=null;P!==null&&$<v.length;$++){P.index>$?(Pe=P,P=null):Pe=P.sibling;var se=y(b,P,v[$],w);if(se===null){P===null&&(P=Pe);break}e&&P&&se.alternate===null&&a(b,P),h=l(se,h,$),ee===null?L=se:ee.sibling=se,ee=se,P=Pe}if($===v.length)return t(b,P),le&&Bt(b,$),L;if(P===null){for(;$<v.length;$++)P=T(b,v[$],w),P!==null&&(h=l(P,h,$),ee===null?L=P:ee.sibling=P,ee=P);return le&&Bt(b,$),L}for(P=n(P);$<v.length;$++)Pe=j(P,b,$,v[$],w),Pe!==null&&(e&&Pe.alternate!==null&&P.delete(Pe.key===null?$:Pe.key),h=l(Pe,h,$),ee===null?L=Pe:ee.sibling=Pe,ee=Pe);return e&&P.forEach(function(Dt){return a(b,Dt)}),le&&Bt(b,$),L}function X(b,h,v,w){if(v==null)throw Error(u(151));for(var L=null,ee=null,P=h,$=h=0,Pe=null,se=v.next();P!==null&&!se.done;$++,se=v.next()){P.index>$?(Pe=P,P=null):Pe=P.sibling;var Dt=y(b,P,se.value,w);if(Dt===null){P===null&&(P=Pe);break}e&&P&&Dt.alternate===null&&a(b,P),h=l(Dt,h,$),ee===null?L=Dt:ee.sibling=Dt,ee=Dt,P=Pe}if(se.done)return t(b,P),le&&Bt(b,$),L;if(P===null){for(;!se.done;$++,se=v.next())se=T(b,se.value,w),se!==null&&(h=l(se,h,$),ee===null?L=se:ee.sibling=se,ee=se);return le&&Bt(b,$),L}for(P=n(P);!se.done;$++,se=v.next())se=j(P,b,$,se.value,w),se!==null&&(e&&se.alternate!==null&&P.delete(se.key===null?$:se.key),h=l(se,h,$),ee===null?L=se:ee.sibling=se,ee=se);return e&&P.forEach(function(Mg){return a(b,Mg)}),le&&Bt(b,$),L}function pe(b,h,v,w){if(typeof v=="object"&&v!==null&&v.type===I&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case _:e:{for(var L=v.key;h!==null;){if(h.key===L){if(L=v.type,L===I){if(h.tag===7){t(b,h.sibling),w=o(h,v.props.children),w.return=b,b=w;break e}}else if(h.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===H&&od(L)===h.type){t(b,h.sibling),w=o(h,v.props),yo(w,v),w.return=b,b=w;break e}t(b,h);break}else a(b,h);h=h.sibling}v.type===I?(w=Lt(v.props.children,b.mode,w,v.key),w.return=b,b=w):(w=hs(v.type,v.key,v.props,null,b.mode,w),yo(w,v),w.return=b,b=w)}return c(b);case W:e:{for(L=v.key;h!==null;){if(h.key===L)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){t(b,h.sibling),w=o(h,v.children||[]),w.return=b,b=w;break e}else{t(b,h);break}else a(b,h);h=h.sibling}w=al(v,b.mode,w),w.return=b,b=w}return c(b);case H:return L=v._init,v=L(v._payload),pe(b,h,v,w)}if(Ke(v))return K(b,h,v,w);if(Qe(v)){if(L=Qe(v),typeof L!="function")throw Error(u(150));return v=L.call(v),X(b,h,v,w)}if(typeof v.then=="function")return pe(b,h,Rs(v),w);if(v.$$typeof===ye)return pe(b,h,xs(b,v),w);zs(b,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,h!==null&&h.tag===6?(t(b,h.sibling),w=o(h,v),w.return=b,b=w):(t(b,h),w=el(v,b.mode,w),w.return=b,b=w),c(b)):t(b,h)}return function(b,h,v,w){try{xo=0;var L=pe(b,h,v,w);return Nn=null,L}catch(P){if(P===co||P===Ss)throw P;var ee=ra(29,P,null,b.mode);return ee.lanes=w,ee.return=b,ee}}}var En=sd(!0),id=sd(!1),ya=Be(null),ka=null;function ct(e){var a=e.alternate;ie(Ue,Ue.current&1),ie(ya,e),ka===null&&(a===null||Sn.current!==null||a.memoizedState!==null)&&(ka=e)}function ld(e){if(e.tag===22){if(ie(Ue,Ue.current),ie(ya,e),ka===null){var a=e.alternate;a!==null&&a.memoizedState!==null&&(ka=e)}}else ut()}function ut(){ie(Ue,Ue.current),ie(ya,ya.current)}function Xa(e){ge(ya),ka===e&&(ka=null),ge(Ue)}var Ue=Be(0);function qs(e){for(var a=e;a!==null;){if(a.tag===13){var t=a.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||Ar(t)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}function ql(e,a,t,n){a=e.memoizedState,t=t(n,a),t=t==null?a:R({},a,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Ol={enqueueSetState:function(e,a,t){e=e._reactInternals;var n=ma(),o=it(n);o.payload=a,t!=null&&(o.callback=t),a=lt(e,o,n),a!==null&&(fa(a,e,n),mo(a,e,n))},enqueueReplaceState:function(e,a,t){e=e._reactInternals;var n=ma(),o=it(n);o.tag=1,o.payload=a,t!=null&&(o.callback=t),a=lt(e,o,n),a!==null&&(fa(a,e,n),mo(a,e,n))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var t=ma(),n=it(t);n.tag=2,a!=null&&(n.callback=a),a=lt(e,n,t),a!==null&&(fa(a,e,t),mo(a,e,t))}};function rd(e,a,t,n,o,l,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,l,c):a.prototype&&a.prototype.isPureReactComponent?!ao(t,n)||!ao(o,l):!0}function cd(e,a,t,n){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(t,n),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(t,n),a.state!==e&&Ol.enqueueReplaceState(a,a.state,null)}function Yt(e,a){var t=a;if("ref"in a){t={};for(var n in a)n!=="ref"&&(t[n]=a[n])}if(e=e.defaultProps){t===a&&(t=R({},t));for(var o in e)t[o]===void 0&&(t[o]=e[o])}return t}var Os=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function ud(e){Os(e)}function dd(e){console.error(e)}function md(e){Os(e)}function Us(e,a){try{var t=e.onUncaughtError;t(a.value,{componentStack:a.stack})}catch(n){setTimeout(function(){throw n})}}function fd(e,a,t){try{var n=e.onCaughtError;n(t.value,{componentStack:t.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function Ul(e,a,t){return t=it(t),t.tag=3,t.payload={element:null},t.callback=function(){Us(e,a)},t}function pd(e){return e=it(e),e.tag=3,e}function hd(e,a,t,n){var o=t.type.getDerivedStateFromError;if(typeof o=="function"){var l=n.value;e.payload=function(){return o(l)},e.callback=function(){fd(a,t,n)}}var c=t.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){fd(a,t,n),typeof o!="function"&&(gt===null?gt=new Set([this]):gt.add(this));var d=n.stack;this.componentDidCatch(n.value,{componentStack:d!==null?d:""})})}function Mh(e,a,t,n,o){if(t.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(a=t.alternate,a!==null&&io(a,t,o,!0),t=ya.current,t!==null){switch(t.tag){case 13:return ka===null?ir():t.alternate===null&&Ee===0&&(Ee=3),t.flags&=-257,t.flags|=65536,t.lanes=o,n===dl?t.flags|=16384:(a=t.updateQueue,a===null?t.updateQueue=new Set([n]):a.add(n),rr(e,n,o)),!1;case 22:return t.flags|=65536,n===dl?t.flags|=16384:(a=t.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([n])},t.updateQueue=a):(t=a.retryQueue,t===null?a.retryQueue=new Set([n]):t.add(n)),rr(e,n,o)),!1}throw Error(u(435,t.tag))}return rr(e,n,o),ir(),!1}if(le)return a=ya.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=o,n!==ol&&(e=Error(u(422),{cause:n}),so(ga(e,t)))):(n!==ol&&(a=Error(u(423),{cause:n}),so(ga(a,t))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,n=ga(n,t),o=Ul(e.stateNode,n,o),pl(e,o),Ee!==4&&(Ee=2)),!1;var l=Error(u(520),{cause:n});if(l=ga(l,t),wo===null?wo=[l]:wo.push(l),Ee!==4&&(Ee=2),a===null)return!0;n=ga(n,t),t=a;do{switch(t.tag){case 3:return t.flags|=65536,e=o&-o,t.lanes|=e,e=Ul(t.stateNode,n,e),pl(t,e),!1;case 1:if(a=t.type,l=t.stateNode,(t.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(gt===null||!gt.has(l))))return t.flags|=65536,o&=-o,t.lanes|=o,o=pd(o),hd(o,e,t,n),pl(t,o),!1}t=t.return}while(t!==null);return!1}var gd=Error(u(461)),He=!1;function Xe(e,a,t,n){a.child=e===null?id(a,null,t,n):En(a,e.child,t,n)}function bd(e,a,t,n,o){t=t.render;var l=a.ref;if("ref"in n){var c={};for(var d in n)d!=="ref"&&(c[d]=n[d])}else c=n;return Pt(a),n=xl(e,a,t,c,l,o),d=yl(),e!==null&&!He?(Sl(e,a,o),Ya(e,a,o)):(le&&d&&tl(a),a.flags|=1,Xe(e,a,n,o),a.child)}function vd(e,a,t,n,o){if(e===null){var l=t.type;return typeof l=="function"&&!Wi(l)&&l.defaultProps===void 0&&t.compare===null?(a.tag=15,a.type=l,xd(e,a,l,n,o)):(e=hs(t.type,null,n,a,a.mode,o),e.ref=a.ref,e.return=a,a.child=e)}if(l=e.child,!Ql(e,o)){var c=l.memoizedProps;if(t=t.compare,t=t!==null?t:ao,t(c,n)&&e.ref===a.ref)return Ya(e,a,o)}return a.flags|=1,e=Ba(l,n),e.ref=a.ref,e.return=a,a.child=e}function xd(e,a,t,n,o){if(e!==null){var l=e.memoizedProps;if(ao(l,n)&&e.ref===a.ref)if(He=!1,a.pendingProps=n=l,Ql(e,o))(e.flags&131072)!==0&&(He=!0);else return a.lanes=e.lanes,Ya(e,a,o)}return Ll(e,a,t,n,o)}function yd(e,a,t){var n=a.pendingProps,o=n.children,l=e!==null?e.memoizedState:null;if(n.mode==="hidden"){if((a.flags&128)!==0){if(n=l!==null?l.baseLanes|t:t,e!==null){for(o=a.child=e.child,l=0;o!==null;)l=l|o.lanes|o.childLanes,o=o.sibling;a.childLanes=l&~n}else a.childLanes=0,a.child=null;return Sd(e,a,n,t)}if((t&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&ys(a,l!==null?l.cachePool:null),l!==null?xu(a,l):gl(),ld(a);else return a.lanes=a.childLanes=536870912,Sd(e,a,l!==null?l.baseLanes|t:t,t)}else l!==null?(ys(a,l.cachePool),xu(a,l),ut(),a.memoizedState=null):(e!==null&&ys(a,null),gl(),ut());return Xe(e,a,o,t),a.child}function Sd(e,a,t,n){var o=ul();return o=o===null?null:{parent:Oe._currentValue,pool:o},a.memoizedState={baseLanes:t,cachePool:o},e!==null&&ys(a,null),gl(),ld(a),e!==null&&io(e,a,n,!0),null}function Ls(e,a){var t=a.ref;if(t===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(u(284));(e===null||e.ref!==t)&&(a.flags|=4194816)}}function Ll(e,a,t,n,o){return Pt(a),t=xl(e,a,t,n,void 0,o),n=yl(),e!==null&&!He?(Sl(e,a,o),Ya(e,a,o)):(le&&n&&tl(a),a.flags|=1,Xe(e,a,t,o),a.child)}function jd(e,a,t,n,o,l){return Pt(a),a.updateQueue=null,t=Su(a,n,t,o),yu(e),n=yl(),e!==null&&!He?(Sl(e,a,l),Ya(e,a,l)):(le&&n&&tl(a),a.flags|=1,Xe(e,a,t,l),a.child)}function Ad(e,a,t,n,o){if(Pt(a),a.stateNode===null){var l=gn,c=t.contextType;typeof c=="object"&&c!==null&&(l=Ze(c)),l=new t(n,l),a.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=Ol,a.stateNode=l,l._reactInternals=a,l=a.stateNode,l.props=n,l.state=a.memoizedState,l.refs={},ml(a),c=t.contextType,l.context=typeof c=="object"&&c!==null?Ze(c):gn,l.state=a.memoizedState,c=t.getDerivedStateFromProps,typeof c=="function"&&(ql(a,t,c,n),l.state=a.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(c=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),c!==l.state&&Ol.enqueueReplaceState(l,l.state,null),po(a,n,l,o),fo(),l.state=a.memoizedState),typeof l.componentDidMount=="function"&&(a.flags|=4194308),n=!0}else if(e===null){l=a.stateNode;var d=a.memoizedProps,p=Yt(t,d);l.props=p;var x=l.context,E=t.contextType;c=gn,typeof E=="object"&&E!==null&&(c=Ze(E));var T=t.getDerivedStateFromProps;E=typeof T=="function"||typeof l.getSnapshotBeforeUpdate=="function",d=a.pendingProps!==d,E||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(d||x!==c)&&cd(a,l,n,c),st=!1;var y=a.memoizedState;l.state=y,po(a,n,l,o),fo(),x=a.memoizedState,d||y!==x||st?(typeof T=="function"&&(ql(a,t,T,n),x=a.memoizedState),(p=st||rd(a,t,p,n,y,x,c))?(E||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(a.flags|=4194308)):(typeof l.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=n,a.memoizedState=x),l.props=n,l.state=x,l.context=c,n=p):(typeof l.componentDidMount=="function"&&(a.flags|=4194308),n=!1)}else{l=a.stateNode,fl(e,a),c=a.memoizedProps,E=Yt(t,c),l.props=E,T=a.pendingProps,y=l.context,x=t.contextType,p=gn,typeof x=="object"&&x!==null&&(p=Ze(x)),d=t.getDerivedStateFromProps,(x=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==T||y!==p)&&cd(a,l,n,p),st=!1,y=a.memoizedState,l.state=y,po(a,n,l,o),fo();var j=a.memoizedState;c!==T||y!==j||st||e!==null&&e.dependencies!==null&&vs(e.dependencies)?(typeof d=="function"&&(ql(a,t,d,n),j=a.memoizedState),(E=st||rd(a,t,E,n,y,j,p)||e!==null&&e.dependencies!==null&&vs(e.dependencies))?(x||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(n,j,p),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(n,j,p)),typeof l.componentDidUpdate=="function"&&(a.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof l.componentDidUpdate!="function"||c===e.memoizedProps&&y===e.memoizedState||(a.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&y===e.memoizedState||(a.flags|=1024),a.memoizedProps=n,a.memoizedState=j),l.props=n,l.state=j,l.context=p,n=E):(typeof l.componentDidUpdate!="function"||c===e.memoizedProps&&y===e.memoizedState||(a.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&y===e.memoizedState||(a.flags|=1024),n=!1)}return l=n,Ls(e,a),n=(a.flags&128)!==0,l||n?(l=a.stateNode,t=n&&typeof t.getDerivedStateFromError!="function"?null:l.render(),a.flags|=1,e!==null&&n?(a.child=En(a,e.child,null,o),a.child=En(a,null,t,o)):Xe(e,a,t,o),a.memoizedState=l.state,e=a.child):e=Ya(e,a,o),e}function Dd(e,a,t,n){return oo(),a.flags|=256,Xe(e,a,t,n),a.child}var Gl={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Bl(e){return{baseLanes:e,cachePool:du()}}function _l(e,a,t){return e=e!==null?e.childLanes&~t:0,a&&(e|=Sa),e}function Nd(e,a,t){var n=a.pendingProps,o=!1,l=(a.flags&128)!==0,c;if((c=l)||(c=e!==null&&e.memoizedState===null?!1:(Ue.current&2)!==0),c&&(o=!0,a.flags&=-129),c=(a.flags&32)!==0,a.flags&=-33,e===null){if(le){if(o?ct(a):ut(),le){var d=Ne,p;if(p=d){e:{for(p=d,d=Ta;p.nodeType!==8;){if(!d){d=null;break e}if(p=Na(p.nextSibling),p===null){d=null;break e}}d=p}d!==null?(a.memoizedState={dehydrated:d,treeContext:Gt!==null?{id:_a,overflow:Ha}:null,retryLane:536870912,hydrationErrors:null},p=ra(18,null,null,0),p.stateNode=d,p.return=a,a.child=p,Je=a,Ne=null,p=!0):p=!1}p||Ht(a)}if(d=a.memoizedState,d!==null&&(d=d.dehydrated,d!==null))return Ar(d)?a.lanes=32:a.lanes=536870912,null;Xa(a)}return d=n.children,n=n.fallback,o?(ut(),o=a.mode,d=Gs({mode:"hidden",children:d},o),n=Lt(n,o,t,null),d.return=a,n.return=a,d.sibling=n,a.child=d,o=a.child,o.memoizedState=Bl(t),o.childLanes=_l(e,c,t),a.memoizedState=Gl,n):(ct(a),Hl(a,d))}if(p=e.memoizedState,p!==null&&(d=p.dehydrated,d!==null)){if(l)a.flags&256?(ct(a),a.flags&=-257,a=Vl(e,a,t)):a.memoizedState!==null?(ut(),a.child=e.child,a.flags|=128,a=null):(ut(),o=n.fallback,d=a.mode,n=Gs({mode:"visible",children:n.children},d),o=Lt(o,d,t,null),o.flags|=2,n.return=a,o.return=a,n.sibling=o,a.child=n,En(a,e.child,null,t),n=a.child,n.memoizedState=Bl(t),n.childLanes=_l(e,c,t),a.memoizedState=Gl,a=o);else if(ct(a),Ar(d)){if(c=d.nextSibling&&d.nextSibling.dataset,c)var x=c.dgst;c=x,n=Error(u(419)),n.stack="",n.digest=c,so({value:n,source:null,stack:null}),a=Vl(e,a,t)}else if(He||io(e,a,t,!1),c=(t&e.childLanes)!==0,He||c){if(c=ve,c!==null&&(n=t&-t,n=(n&42)!==0?1:Di(n),n=(n&(c.suspendedLanes|t))!==0?0:n,n!==0&&n!==p.retryLane))throw p.retryLane=n,hn(e,n),fa(c,e,n),gd;d.data==="$?"||ir(),a=Vl(e,a,t)}else d.data==="$?"?(a.flags|=192,a.child=e.child,a=null):(e=p.treeContext,Ne=Na(d.nextSibling),Je=a,le=!0,_t=null,Ta=!1,e!==null&&(va[xa++]=_a,va[xa++]=Ha,va[xa++]=Gt,_a=e.id,Ha=e.overflow,Gt=a),a=Hl(a,n.children),a.flags|=4096);return a}return o?(ut(),o=n.fallback,d=a.mode,p=e.child,x=p.sibling,n=Ba(p,{mode:"hidden",children:n.children}),n.subtreeFlags=p.subtreeFlags&65011712,x!==null?o=Ba(x,o):(o=Lt(o,d,t,null),o.flags|=2),o.return=a,n.return=a,n.sibling=o,a.child=n,n=o,o=a.child,d=e.child.memoizedState,d===null?d=Bl(t):(p=d.cachePool,p!==null?(x=Oe._currentValue,p=p.parent!==x?{parent:x,pool:x}:p):p=du(),d={baseLanes:d.baseLanes|t,cachePool:p}),o.memoizedState=d,o.childLanes=_l(e,c,t),a.memoizedState=Gl,n):(ct(a),t=e.child,e=t.sibling,t=Ba(t,{mode:"visible",children:n.children}),t.return=a,t.sibling=null,e!==null&&(c=a.deletions,c===null?(a.deletions=[e],a.flags|=16):c.push(e)),a.child=t,a.memoizedState=null,t)}function Hl(e,a){return a=Gs({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function Gs(e,a){return e=ra(22,e,null,a),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Vl(e,a,t){return En(a,e.child,null,t),e=Hl(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function Ed(e,a,t){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a),il(e.return,a,t)}function Pl(e,a,t,n,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:n,tail:t,tailMode:o}:(l.isBackwards=a,l.rendering=null,l.renderingStartTime=0,l.last=n,l.tail=t,l.tailMode=o)}function wd(e,a,t){var n=a.pendingProps,o=n.revealOrder,l=n.tail;if(Xe(e,a,n.children,t),n=Ue.current,(n&2)!==0)n=n&1|2,a.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ed(e,t,a);else if(e.tag===19)Ed(e,t,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}switch(ie(Ue,n),o){case"forwards":for(t=a.child,o=null;t!==null;)e=t.alternate,e!==null&&qs(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=a.child,a.child=null):(o=t.sibling,t.sibling=null),Pl(a,!1,o,t,l);break;case"backwards":for(t=null,o=a.child,a.child=null;o!==null;){if(e=o.alternate,e!==null&&qs(e)===null){a.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}Pl(a,!0,t,null,l);break;case"together":Pl(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Ya(e,a,t){if(e!==null&&(a.dependencies=e.dependencies),ht|=a.lanes,(t&a.childLanes)===0)if(e!==null){if(io(e,a,t,!1),(t&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(u(153));if(a.child!==null){for(e=a.child,t=Ba(e,e.pendingProps),a.child=t,t.return=a;e.sibling!==null;)e=e.sibling,t=t.sibling=Ba(e,e.pendingProps),t.return=a;t.sibling=null}return a.child}function Ql(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&vs(e)))}function Rh(e,a,t){switch(a.tag){case 3:Ct(a,a.stateNode.containerInfo),ot(a,Oe,e.memoizedState.cache),oo();break;case 27:case 5:Wt(a);break;case 4:Ct(a,a.stateNode.containerInfo);break;case 10:ot(a,a.type,a.memoizedProps.value);break;case 13:var n=a.memoizedState;if(n!==null)return n.dehydrated!==null?(ct(a),a.flags|=128,null):(t&a.child.childLanes)!==0?Nd(e,a,t):(ct(a),e=Ya(e,a,t),e!==null?e.sibling:null);ct(a);break;case 19:var o=(e.flags&128)!==0;if(n=(t&a.childLanes)!==0,n||(io(e,a,t,!1),n=(t&a.childLanes)!==0),o){if(n)return wd(e,a,t);a.flags|=128}if(o=a.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ie(Ue,Ue.current),n)break;return null;case 22:case 23:return a.lanes=0,yd(e,a,t);case 24:ot(a,Oe,e.memoizedState.cache)}return Ya(e,a,t)}function Td(e,a,t){if(e!==null)if(e.memoizedProps!==a.pendingProps)He=!0;else{if(!Ql(e,t)&&(a.flags&128)===0)return He=!1,Rh(e,a,t);He=(e.flags&131072)!==0}else He=!1,le&&(a.flags&1048576)!==0&&ou(a,bs,a.index);switch(a.lanes=0,a.tag){case 16:e:{e=a.pendingProps;var n=a.elementType,o=n._init;if(n=o(n._payload),a.type=n,typeof n=="function")Wi(n)?(e=Yt(n,e),a.tag=1,a=Ad(null,a,n,e,t)):(a.tag=0,a=Ll(null,a,n,e,t));else{if(n!=null){if(o=n.$$typeof,o===Ce){a.tag=11,a=bd(null,a,n,e,t);break e}else if(o===Fe){a.tag=14,a=vd(null,a,n,e,t);break e}}throw a=qa(n)||n,Error(u(306,a,""))}}return a;case 0:return Ll(e,a,a.type,a.pendingProps,t);case 1:return n=a.type,o=Yt(n,a.pendingProps),Ad(e,a,n,o,t);case 3:e:{if(Ct(a,a.stateNode.containerInfo),e===null)throw Error(u(387));n=a.pendingProps;var l=a.memoizedState;o=l.element,fl(e,a),po(a,n,null,t);var c=a.memoizedState;if(n=c.cache,ot(a,Oe,n),n!==l.cache&&ll(a,[Oe],t,!0),fo(),n=c.element,l.isDehydrated)if(l={element:n,isDehydrated:!1,cache:c.cache},a.updateQueue.baseState=l,a.memoizedState=l,a.flags&256){a=Dd(e,a,n,t);break e}else if(n!==o){o=ga(Error(u(424)),a),so(o),a=Dd(e,a,n,t);break e}else for(e=a.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ne=Na(e.firstChild),Je=a,le=!0,_t=null,Ta=!0,t=id(a,null,n,t),a.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(oo(),n===o){a=Ya(e,a,t);break e}Xe(e,a,n,t)}a=a.child}return a;case 26:return Ls(e,a),e===null?(t=Rm(a.type,null,a.pendingProps,null))?a.memoizedState=t:le||(t=a.type,e=a.pendingProps,n=Js(Se.current).createElement(t),n[Ie]=a,n[ea]=e,$e(n,t,e),_e(n),a.stateNode=n):a.memoizedState=Rm(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return Wt(a),e===null&&le&&(n=a.stateNode=km(a.type,a.pendingProps,Se.current),Je=a,Ta=!0,o=Ne,xt(a.type)?(Dr=o,Ne=Na(n.firstChild)):Ne=o),Xe(e,a,a.pendingProps.children,t),Ls(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&le&&((o=n=Ne)&&(n=ig(n,a.type,a.pendingProps,Ta),n!==null?(a.stateNode=n,Je=a,Ne=Na(n.firstChild),Ta=!1,o=!0):o=!1),o||Ht(a)),Wt(a),o=a.type,l=a.pendingProps,c=e!==null?e.memoizedProps:null,n=l.children,yr(o,l)?n=null:c!==null&&yr(o,c)&&(a.flags|=32),a.memoizedState!==null&&(o=xl(e,a,Dh,null,null,t),Uo._currentValue=o),Ls(e,a),Xe(e,a,n,t),a.child;case 6:return e===null&&le&&((e=t=Ne)&&(t=lg(t,a.pendingProps,Ta),t!==null?(a.stateNode=t,Je=a,Ne=null,e=!0):e=!1),e||Ht(a)),null;case 13:return Nd(e,a,t);case 4:return Ct(a,a.stateNode.containerInfo),n=a.pendingProps,e===null?a.child=En(a,null,n,t):Xe(e,a,n,t),a.child;case 11:return bd(e,a,a.type,a.pendingProps,t);case 7:return Xe(e,a,a.pendingProps,t),a.child;case 8:return Xe(e,a,a.pendingProps.children,t),a.child;case 12:return Xe(e,a,a.pendingProps.children,t),a.child;case 10:return n=a.pendingProps,ot(a,a.type,n.value),Xe(e,a,n.children,t),a.child;case 9:return o=a.type._context,n=a.pendingProps.children,Pt(a),o=Ze(o),n=n(o),a.flags|=1,Xe(e,a,n,t),a.child;case 14:return vd(e,a,a.type,a.pendingProps,t);case 15:return xd(e,a,a.type,a.pendingProps,t);case 19:return wd(e,a,t);case 31:return n=a.pendingProps,t=a.mode,n={mode:n.mode,children:n.children},e===null?(t=Gs(n,t),t.ref=a.ref,a.child=t,t.return=a,a=t):(t=Ba(e.child,n),t.ref=a.ref,a.child=t,t.return=a,a=t),a;case 22:return yd(e,a,t);case 24:return Pt(a),n=Ze(Oe),e===null?(o=ul(),o===null&&(o=ve,l=rl(),o.pooledCache=l,l.refCount++,l!==null&&(o.pooledCacheLanes|=t),o=l),a.memoizedState={parent:n,cache:o},ml(a),ot(a,Oe,o)):((e.lanes&t)!==0&&(fl(e,a),po(a,null,null,t),fo()),o=e.memoizedState,l=a.memoizedState,o.parent!==n?(o={parent:n,cache:n},a.memoizedState=o,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=o),ot(a,Oe,n)):(n=l.cache,ot(a,Oe,n),n!==o.cache&&ll(a,[Oe],t,!0))),Xe(e,a,a.pendingProps.children,t),a.child;case 29:throw a.pendingProps}throw Error(u(156,a.tag))}function $a(e){e.flags|=4}function kd(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Lm(a)){if(a=ya.current,a!==null&&((ne&4194048)===ne?ka!==null:(ne&62914560)!==ne&&(ne&536870912)===0||a!==ka))throw uo=dl,mu;e.flags|=8192}}function Bs(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?lc():536870912,e.lanes|=a,Cn|=a)}function So(e,a){if(!le)switch(e.tailMode){case"hidden":a=e.tail;for(var t=null;a!==null;)a.alternate!==null&&(t=a),a=a.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Ae(e){var a=e.alternate!==null&&e.alternate.child===e.child,t=0,n=0;if(a)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,n|=o.subtreeFlags&65011712,n|=o.flags&65011712,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=t,a}function zh(e,a,t){var n=a.pendingProps;switch(nl(a),a.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(a),null;case 1:return Ae(a),null;case 3:return t=a.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),a.memoizedState.cache!==n&&(a.flags|=2048),Pa(Oe),xe(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(no(a)?$a(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,lu())),Ae(a),null;case 26:return t=a.memoizedState,e===null?($a(a),t!==null?(Ae(a),kd(a,t)):(Ae(a),a.flags&=-16777217)):t?t!==e.memoizedState?($a(a),Ae(a),kd(a,t)):(Ae(a),a.flags&=-16777217):(e.memoizedProps!==n&&$a(a),Ae(a),a.flags&=-16777217),null;case 27:Ua(a),t=Se.current;var o=a.type;if(e!==null&&a.stateNode!=null)e.memoizedProps!==n&&$a(a);else{if(!n){if(a.stateNode===null)throw Error(u(166));return Ae(a),null}e=De.current,no(a)?su(a):(e=km(o,n,t),a.stateNode=e,$a(a))}return Ae(a),null;case 5:if(Ua(a),t=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==n&&$a(a);else{if(!n){if(a.stateNode===null)throw Error(u(166));return Ae(a),null}if(e=De.current,no(a))su(a);else{switch(o=Js(Se.current),e){case 1:e=o.createElementNS("http://www.w3.org/2000/svg",t);break;case 2:e=o.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;default:switch(t){case"svg":e=o.createElementNS("http://www.w3.org/2000/svg",t);break;case"math":e=o.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;case"script":e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof n.is=="string"?o.createElement("select",{is:n.is}):o.createElement("select"),n.multiple?e.multiple=!0:n.size&&(e.size=n.size);break;default:e=typeof n.is=="string"?o.createElement(t,{is:n.is}):o.createElement(t)}}e[Ie]=a,e[ea]=n;e:for(o=a.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===a)break e;for(;o.sibling===null;){if(o.return===null||o.return===a)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}a.stateNode=e;e:switch($e(e,t,n),t){case"button":case"input":case"select":case"textarea":e=!!n.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&$a(a)}}return Ae(a),a.flags&=-16777217,null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==n&&$a(a);else{if(typeof n!="string"&&a.stateNode===null)throw Error(u(166));if(e=Se.current,no(a)){if(e=a.stateNode,t=a.memoizedProps,n=null,o=Je,o!==null)switch(o.tag){case 27:case 5:n=o.memoizedProps}e[Ie]=a,e=!!(e.nodeValue===t||n!==null&&n.suppressHydrationWarning===!0||jm(e.nodeValue,t)),e||Ht(a)}else e=Js(e).createTextNode(n),e[Ie]=a,a.stateNode=e}return Ae(a),null;case 13:if(n=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=no(a),n!==null&&n.dehydrated!==null){if(e===null){if(!o)throw Error(u(318));if(o=a.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(u(317));o[Ie]=a}else oo(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Ae(a),o=!1}else o=lu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return a.flags&256?(Xa(a),a):(Xa(a),null)}if(Xa(a),(a.flags&128)!==0)return a.lanes=t,a;if(t=n!==null,e=e!==null&&e.memoizedState!==null,t){n=a.child,o=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(o=n.alternate.memoizedState.cachePool.pool);var l=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==o&&(n.flags|=2048)}return t!==e&&t&&(a.child.flags|=8192),Bs(a,a.updateQueue),Ae(a),null;case 4:return xe(),e===null&&hr(a.stateNode.containerInfo),Ae(a),null;case 10:return Pa(a.type),Ae(a),null;case 19:if(ge(Ue),o=a.memoizedState,o===null)return Ae(a),null;if(n=(a.flags&128)!==0,l=o.rendering,l===null)if(n)So(o,!1);else{if(Ee!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(l=qs(e),l!==null){for(a.flags|=128,So(o,!1),e=l.updateQueue,a.updateQueue=e,Bs(a,e),a.subtreeFlags=0,e=t,t=a.child;t!==null;)nu(t,e),t=t.sibling;return ie(Ue,Ue.current&1|2),a.child}e=e.sibling}o.tail!==null&&wa()>Vs&&(a.flags|=128,n=!0,So(o,!1),a.lanes=4194304)}else{if(!n)if(e=qs(l),e!==null){if(a.flags|=128,n=!0,e=e.updateQueue,a.updateQueue=e,Bs(a,e),So(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!le)return Ae(a),null}else 2*wa()-o.renderingStartTime>Vs&&t!==536870912&&(a.flags|=128,n=!0,So(o,!1),a.lanes=4194304);o.isBackwards?(l.sibling=a.child,a.child=l):(e=o.last,e!==null?e.sibling=l:a.child=l,o.last=l)}return o.tail!==null?(a=o.tail,o.rendering=a,o.tail=a.sibling,o.renderingStartTime=wa(),a.sibling=null,e=Ue.current,ie(Ue,n?e&1|2:e&1),a):(Ae(a),null);case 22:case 23:return Xa(a),bl(),n=a.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(a.flags|=8192):n&&(a.flags|=8192),n?(t&536870912)!==0&&(a.flags&128)===0&&(Ae(a),a.subtreeFlags&6&&(a.flags|=8192)):Ae(a),t=a.updateQueue,t!==null&&Bs(a,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==t&&(a.flags|=2048),e!==null&&ge(Qt),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),a.memoizedState.cache!==t&&(a.flags|=2048),Pa(Oe),Ae(a),null;case 25:return null;case 30:return null}throw Error(u(156,a.tag))}function qh(e,a){switch(nl(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return Pa(Oe),xe(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return Ua(a),null;case 13:if(Xa(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(u(340));oo()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return ge(Ue),null;case 4:return xe(),null;case 10:return Pa(a.type),null;case 22:case 23:return Xa(a),bl(),e!==null&&ge(Qt),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return Pa(Oe),null;case 25:return null;default:return null}}function Cd(e,a){switch(nl(a),a.tag){case 3:Pa(Oe),xe();break;case 26:case 27:case 5:Ua(a);break;case 4:xe();break;case 13:Xa(a);break;case 19:ge(Ue);break;case 10:Pa(a.type);break;case 22:case 23:Xa(a),bl(),e!==null&&ge(Qt);break;case 24:Pa(Oe)}}function jo(e,a){try{var t=a.updateQueue,n=t!==null?t.lastEffect:null;if(n!==null){var o=n.next;t=o;do{if((t.tag&e)===e){n=void 0;var l=t.create,c=t.inst;n=l(),c.destroy=n}t=t.next}while(t!==o)}}catch(d){he(a,a.return,d)}}function dt(e,a,t){try{var n=a.updateQueue,o=n!==null?n.lastEffect:null;if(o!==null){var l=o.next;n=l;do{if((n.tag&e)===e){var c=n.inst,d=c.destroy;if(d!==void 0){c.destroy=void 0,o=a;var p=t,x=d;try{x()}catch(E){he(o,p,E)}}}n=n.next}while(n!==l)}}catch(E){he(a,a.return,E)}}function Md(e){var a=e.updateQueue;if(a!==null){var t=e.stateNode;try{vu(a,t)}catch(n){he(e,e.return,n)}}}function Rd(e,a,t){t.props=Yt(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(n){he(e,a,n)}}function Ao(e,a){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof t=="function"?e.refCleanup=t(n):t.current=n}}catch(o){he(e,a,o)}}function Ca(e,a){var t=e.ref,n=e.refCleanup;if(t!==null)if(typeof n=="function")try{n()}catch(o){he(e,a,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(o){he(e,a,o)}else t.current=null}function zd(e){var a=e.type,t=e.memoizedProps,n=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":t.autoFocus&&n.focus();break e;case"img":t.src?n.src=t.src:t.srcSet&&(n.srcset=t.srcSet)}}catch(o){he(e,e.return,o)}}function Xl(e,a,t){try{var n=e.stateNode;ag(n,e.type,t,a),n[ea]=a}catch(o){he(e,e.return,o)}}function qd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&xt(e.type)||e.tag===4}function Yl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||qd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&xt(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $l(e,a,t){var n=e.tag;if(n===5||n===6)e=e.stateNode,a?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,a):(a=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.appendChild(e),t=t._reactRootContainer,t!=null||a.onclick!==null||(a.onclick=Fs));else if(n!==4&&(n===27&&xt(e.type)&&(t=e.stateNode,a=null),e=e.child,e!==null))for($l(e,a,t),e=e.sibling;e!==null;)$l(e,a,t),e=e.sibling}function _s(e,a,t){var n=e.tag;if(n===5||n===6)e=e.stateNode,a?t.insertBefore(e,a):t.appendChild(e);else if(n!==4&&(n===27&&xt(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(_s(e,a,t),e=e.sibling;e!==null;)_s(e,a,t),e=e.sibling}function Od(e){var a=e.stateNode,t=e.memoizedProps;try{for(var n=e.type,o=a.attributes;o.length;)a.removeAttributeNode(o[0]);$e(a,n,t),a[Ie]=e,a[ea]=t}catch(l){he(e,e.return,l)}}var Ka=!1,ke=!1,Kl=!1,Ud=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function Oh(e,a){if(e=e.containerInfo,vr=oi,e=$c(e),Yi(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var n=t.getSelection&&t.getSelection();if(n&&n.rangeCount!==0){t=n.anchorNode;var o=n.anchorOffset,l=n.focusNode;n=n.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var c=0,d=-1,p=-1,x=0,E=0,T=e,y=null;a:for(;;){for(var j;T!==t||o!==0&&T.nodeType!==3||(d=c+o),T!==l||n!==0&&T.nodeType!==3||(p=c+n),T.nodeType===3&&(c+=T.nodeValue.length),(j=T.firstChild)!==null;)y=T,T=j;for(;;){if(T===e)break a;if(y===t&&++x===o&&(d=c),y===l&&++E===n&&(p=c),(j=T.nextSibling)!==null)break;T=y,y=T.parentNode}T=j}t=d===-1||p===-1?null:{start:d,end:p}}else t=null}t=t||{start:0,end:0}}else t=null;for(xr={focusedElem:e,selectionRange:t},oi=!1,Ve=a;Ve!==null;)if(a=Ve,e=a.child,(a.subtreeFlags&1024)!==0&&e!==null)e.return=a,Ve=e;else for(;Ve!==null;){switch(a=Ve,l=a.alternate,e=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&l!==null){e=void 0,t=a,o=l.memoizedProps,l=l.memoizedState,n=t.stateNode;try{var K=Yt(t.type,o,t.elementType===t.type);e=n.getSnapshotBeforeUpdate(K,l),n.__reactInternalSnapshotBeforeUpdate=e}catch(X){he(t,t.return,X)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,t=e.nodeType,t===9)jr(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":jr(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=a.sibling,e!==null){e.return=a.return,Ve=e;break}Ve=a.return}}function Ld(e,a,t){var n=t.flags;switch(t.tag){case 0:case 11:case 15:mt(e,t),n&4&&jo(5,t);break;case 1:if(mt(e,t),n&4)if(e=t.stateNode,a===null)try{e.componentDidMount()}catch(c){he(t,t.return,c)}else{var o=Yt(t.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(o,a,e.__reactInternalSnapshotBeforeUpdate)}catch(c){he(t,t.return,c)}}n&64&&Md(t),n&512&&Ao(t,t.return);break;case 3:if(mt(e,t),n&64&&(e=t.updateQueue,e!==null)){if(a=null,t.child!==null)switch(t.child.tag){case 27:case 5:a=t.child.stateNode;break;case 1:a=t.child.stateNode}try{vu(e,a)}catch(c){he(t,t.return,c)}}break;case 27:a===null&&n&4&&Od(t);case 26:case 5:mt(e,t),a===null&&n&4&&zd(t),n&512&&Ao(t,t.return);break;case 12:mt(e,t);break;case 13:mt(e,t),n&4&&_d(e,t),n&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=Qh.bind(null,t),rg(e,t))));break;case 22:if(n=t.memoizedState!==null||Ka,!n){a=a!==null&&a.memoizedState!==null||ke,o=Ka;var l=ke;Ka=n,(ke=a)&&!l?ft(e,t,(t.subtreeFlags&8772)!==0):mt(e,t),Ka=o,ke=l}break;case 30:break;default:mt(e,t)}}function Gd(e){var a=e.alternate;a!==null&&(e.alternate=null,Gd(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&wi(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var je=null,na=!1;function Ia(e,a,t){for(t=t.child;t!==null;)Bd(e,a,t),t=t.sibling}function Bd(e,a,t){if(sa&&typeof sa.onCommitFiberUnmount=="function")try{sa.onCommitFiberUnmount(Pn,t)}catch{}switch(t.tag){case 26:ke||Ca(t,a),Ia(e,a,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:ke||Ca(t,a);var n=je,o=na;xt(t.type)&&(je=t.stateNode,na=!1),Ia(e,a,t),Ro(t.stateNode),je=n,na=o;break;case 5:ke||Ca(t,a);case 6:if(n=je,o=na,je=null,Ia(e,a,t),je=n,na=o,je!==null)if(na)try{(je.nodeType===9?je.body:je.nodeName==="HTML"?je.ownerDocument.body:je).removeChild(t.stateNode)}catch(l){he(t,a,l)}else try{je.removeChild(t.stateNode)}catch(l){he(t,a,l)}break;case 18:je!==null&&(na?(e=je,wm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),_o(e)):wm(je,t.stateNode));break;case 4:n=je,o=na,je=t.stateNode.containerInfo,na=!0,Ia(e,a,t),je=n,na=o;break;case 0:case 11:case 14:case 15:ke||dt(2,t,a),ke||dt(4,t,a),Ia(e,a,t);break;case 1:ke||(Ca(t,a),n=t.stateNode,typeof n.componentWillUnmount=="function"&&Rd(t,a,n)),Ia(e,a,t);break;case 21:Ia(e,a,t);break;case 22:ke=(n=ke)||t.memoizedState!==null,Ia(e,a,t),ke=n;break;default:Ia(e,a,t)}}function _d(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{_o(e)}catch(t){he(a,a.return,t)}}function Uh(e){switch(e.tag){case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new Ud),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new Ud),a;default:throw Error(u(435,e.tag))}}function Il(e,a){var t=Uh(e);a.forEach(function(n){var o=Xh.bind(null,e,n);t.has(n)||(t.add(n),n.then(o,o))})}function ca(e,a){var t=a.deletions;if(t!==null)for(var n=0;n<t.length;n++){var o=t[n],l=e,c=a,d=c;e:for(;d!==null;){switch(d.tag){case 27:if(xt(d.type)){je=d.stateNode,na=!1;break e}break;case 5:je=d.stateNode,na=!1;break e;case 3:case 4:je=d.stateNode.containerInfo,na=!0;break e}d=d.return}if(je===null)throw Error(u(160));Bd(l,c,o),je=null,na=!1,l=o.alternate,l!==null&&(l.return=null),o.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)Hd(a,e),a=a.sibling}var Da=null;function Hd(e,a){var t=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ca(a,e),ua(e),n&4&&(dt(3,e,e.return),jo(3,e),dt(5,e,e.return));break;case 1:ca(a,e),ua(e),n&512&&(ke||t===null||Ca(t,t.return)),n&64&&Ka&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?n:t.concat(n))));break;case 26:var o=Da;if(ca(a,e),ua(e),n&512&&(ke||t===null||Ca(t,t.return)),n&4){var l=t!==null?t.memoizedState:null;if(n=e.memoizedState,t===null)if(n===null)if(e.stateNode===null){e:{n=e.type,t=e.memoizedProps,o=o.ownerDocument||o;a:switch(n){case"title":l=o.getElementsByTagName("title")[0],(!l||l[Yn]||l[Ie]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=o.createElement(n),o.head.insertBefore(l,o.querySelector("head > title"))),$e(l,n,t),l[Ie]=e,_e(l),n=l;break e;case"link":var c=Om("link","href",o).get(n+(t.href||""));if(c){for(var d=0;d<c.length;d++)if(l=c[d],l.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&l.getAttribute("rel")===(t.rel==null?null:t.rel)&&l.getAttribute("title")===(t.title==null?null:t.title)&&l.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){c.splice(d,1);break a}}l=o.createElement(n),$e(l,n,t),o.head.appendChild(l);break;case"meta":if(c=Om("meta","content",o).get(n+(t.content||""))){for(d=0;d<c.length;d++)if(l=c[d],l.getAttribute("content")===(t.content==null?null:""+t.content)&&l.getAttribute("name")===(t.name==null?null:t.name)&&l.getAttribute("property")===(t.property==null?null:t.property)&&l.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&l.getAttribute("charset")===(t.charSet==null?null:t.charSet)){c.splice(d,1);break a}}l=o.createElement(n),$e(l,n,t),o.head.appendChild(l);break;default:throw Error(u(468,n))}l[Ie]=e,_e(l),n=l}e.stateNode=n}else Um(o,e.type,e.stateNode);else e.stateNode=qm(o,n,e.memoizedProps);else l!==n?(l===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):l.count--,n===null?Um(o,e.type,e.stateNode):qm(o,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Xl(e,e.memoizedProps,t.memoizedProps)}break;case 27:ca(a,e),ua(e),n&512&&(ke||t===null||Ca(t,t.return)),t!==null&&n&4&&Xl(e,e.memoizedProps,t.memoizedProps);break;case 5:if(ca(a,e),ua(e),n&512&&(ke||t===null||Ca(t,t.return)),e.flags&32){o=e.stateNode;try{rn(o,"")}catch(j){he(e,e.return,j)}}n&4&&e.stateNode!=null&&(o=e.memoizedProps,Xl(e,o,t!==null?t.memoizedProps:o)),n&1024&&(Kl=!0);break;case 6:if(ca(a,e),ua(e),n&4){if(e.stateNode===null)throw Error(u(162));n=e.memoizedProps,t=e.stateNode;try{t.nodeValue=n}catch(j){he(e,e.return,j)}}break;case 3:if(ai=null,o=Da,Da=Ws(a.containerInfo),ca(a,e),Da=o,ua(e),n&4&&t!==null&&t.memoizedState.isDehydrated)try{_o(a.containerInfo)}catch(j){he(e,e.return,j)}Kl&&(Kl=!1,Vd(e));break;case 4:n=Da,Da=Ws(e.stateNode.containerInfo),ca(a,e),ua(e),Da=n;break;case 12:ca(a,e),ua(e);break;case 13:ca(a,e),ua(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(ar=wa()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Il(e,n)));break;case 22:o=e.memoizedState!==null;var p=t!==null&&t.memoizedState!==null,x=Ka,E=ke;if(Ka=x||o,ke=E||p,ca(a,e),ke=E,Ka=x,ua(e),n&8192)e:for(a=e.stateNode,a._visibility=o?a._visibility&-2:a._visibility|1,o&&(t===null||p||Ka||ke||$t(e)),t=null,a=e;;){if(a.tag===5||a.tag===26){if(t===null){p=t=a;try{if(l=p.stateNode,o)c=l.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{d=p.stateNode;var T=p.memoizedProps.style,y=T!=null&&T.hasOwnProperty("display")?T.display:null;d.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(j){he(p,p.return,j)}}}else if(a.tag===6){if(t===null){p=a;try{p.stateNode.nodeValue=o?"":p.memoizedProps}catch(j){he(p,p.return,j)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;t===a&&(t=null),a=a.return}t===a&&(t=null),a.sibling.return=a.return,a=a.sibling}n&4&&(n=e.updateQueue,n!==null&&(t=n.retryQueue,t!==null&&(n.retryQueue=null,Il(e,t))));break;case 19:ca(a,e),ua(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Il(e,n)));break;case 30:break;case 21:break;default:ca(a,e),ua(e)}}function ua(e){var a=e.flags;if(a&2){try{for(var t,n=e.return;n!==null;){if(qd(n)){t=n;break}n=n.return}if(t==null)throw Error(u(160));switch(t.tag){case 27:var o=t.stateNode,l=Yl(e);_s(e,l,o);break;case 5:var c=t.stateNode;t.flags&32&&(rn(c,""),t.flags&=-33);var d=Yl(e);_s(e,d,c);break;case 3:case 4:var p=t.stateNode.containerInfo,x=Yl(e);$l(e,x,p);break;default:throw Error(u(161))}}catch(E){he(e,e.return,E)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function Vd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;Vd(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function mt(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Ld(e,a.alternate,a),a=a.sibling}function $t(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:dt(4,a,a.return),$t(a);break;case 1:Ca(a,a.return);var t=a.stateNode;typeof t.componentWillUnmount=="function"&&Rd(a,a.return,t),$t(a);break;case 27:Ro(a.stateNode);case 26:case 5:Ca(a,a.return),$t(a);break;case 22:a.memoizedState===null&&$t(a);break;case 30:$t(a);break;default:$t(a)}e=e.sibling}}function ft(e,a,t){for(t=t&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var n=a.alternate,o=e,l=a,c=l.flags;switch(l.tag){case 0:case 11:case 15:ft(o,l,t),jo(4,l);break;case 1:if(ft(o,l,t),n=l,o=n.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(x){he(n,n.return,x)}if(n=l,o=n.updateQueue,o!==null){var d=n.stateNode;try{var p=o.shared.hiddenCallbacks;if(p!==null)for(o.shared.hiddenCallbacks=null,o=0;o<p.length;o++)bu(p[o],d)}catch(x){he(n,n.return,x)}}t&&c&64&&Md(l),Ao(l,l.return);break;case 27:Od(l);case 26:case 5:ft(o,l,t),t&&n===null&&c&4&&zd(l),Ao(l,l.return);break;case 12:ft(o,l,t);break;case 13:ft(o,l,t),t&&c&4&&_d(o,l);break;case 22:l.memoizedState===null&&ft(o,l,t),Ao(l,l.return);break;case 30:break;default:ft(o,l,t)}a=a.sibling}}function Zl(e,a){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&lo(t))}function Fl(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&lo(e))}function Ma(e,a,t,n){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Pd(e,a,t,n),a=a.sibling}function Pd(e,a,t,n){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ma(e,a,t,n),o&2048&&jo(9,a);break;case 1:Ma(e,a,t,n);break;case 3:Ma(e,a,t,n),o&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&lo(e)));break;case 12:if(o&2048){Ma(e,a,t,n),e=a.stateNode;try{var l=a.memoizedProps,c=l.id,d=l.onPostCommit;typeof d=="function"&&d(c,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(p){he(a,a.return,p)}}else Ma(e,a,t,n);break;case 13:Ma(e,a,t,n);break;case 23:break;case 22:l=a.stateNode,c=a.alternate,a.memoizedState!==null?l._visibility&2?Ma(e,a,t,n):Do(e,a):l._visibility&2?Ma(e,a,t,n):(l._visibility|=2,wn(e,a,t,n,(a.subtreeFlags&10256)!==0)),o&2048&&Zl(c,a);break;case 24:Ma(e,a,t,n),o&2048&&Fl(a.alternate,a);break;default:Ma(e,a,t,n)}}function wn(e,a,t,n,o){for(o=o&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var l=e,c=a,d=t,p=n,x=c.flags;switch(c.tag){case 0:case 11:case 15:wn(l,c,d,p,o),jo(8,c);break;case 23:break;case 22:var E=c.stateNode;c.memoizedState!==null?E._visibility&2?wn(l,c,d,p,o):Do(l,c):(E._visibility|=2,wn(l,c,d,p,o)),o&&x&2048&&Zl(c.alternate,c);break;case 24:wn(l,c,d,p,o),o&&x&2048&&Fl(c.alternate,c);break;default:wn(l,c,d,p,o)}a=a.sibling}}function Do(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var t=e,n=a,o=n.flags;switch(n.tag){case 22:Do(t,n),o&2048&&Zl(n.alternate,n);break;case 24:Do(t,n),o&2048&&Fl(n.alternate,n);break;default:Do(t,n)}a=a.sibling}}var No=8192;function Tn(e){if(e.subtreeFlags&No)for(e=e.child;e!==null;)Qd(e),e=e.sibling}function Qd(e){switch(e.tag){case 26:Tn(e),e.flags&No&&e.memoizedState!==null&&Sg(Da,e.memoizedState,e.memoizedProps);break;case 5:Tn(e);break;case 3:case 4:var a=Da;Da=Ws(e.stateNode.containerInfo),Tn(e),Da=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=No,No=16777216,Tn(e),No=a):Tn(e));break;default:Tn(e)}}function Xd(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function Eo(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var n=a[t];Ve=n,$d(n,e)}Xd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Yd(e),e=e.sibling}function Yd(e){switch(e.tag){case 0:case 11:case 15:Eo(e),e.flags&2048&&dt(9,e,e.return);break;case 3:Eo(e);break;case 12:Eo(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,Hs(e)):Eo(e);break;default:Eo(e)}}function Hs(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var n=a[t];Ve=n,$d(n,e)}Xd(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:dt(8,a,a.return),Hs(a);break;case 22:t=a.stateNode,t._visibility&2&&(t._visibility&=-3,Hs(a));break;default:Hs(a)}e=e.sibling}}function $d(e,a){for(;Ve!==null;){var t=Ve;switch(t.tag){case 0:case 11:case 15:dt(8,t,a);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var n=t.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:lo(t.memoizedState.cache)}if(n=t.child,n!==null)n.return=t,Ve=n;else e:for(t=e;Ve!==null;){n=Ve;var o=n.sibling,l=n.return;if(Gd(n),n===t){Ve=null;break e}if(o!==null){o.return=l,Ve=o;break e}Ve=l}}}var Lh={getCacheForType:function(e){var a=Ze(Oe),t=a.data.get(e);return t===void 0&&(t=e(),a.data.set(e,t)),t}},Gh=typeof WeakMap=="function"?WeakMap:Map,ce=0,ve=null,ae=null,ne=0,ue=0,da=null,pt=!1,kn=!1,Jl=!1,Za=0,Ee=0,ht=0,Kt=0,Wl=0,Sa=0,Cn=0,wo=null,oa=null,er=!1,ar=0,Vs=1/0,Ps=null,gt=null,Ye=0,bt=null,Mn=null,Rn=0,tr=0,nr=null,Kd=null,To=0,or=null;function ma(){if((ce&2)!==0&&ne!==0)return ne&-ne;if(N.T!==null){var e=xn;return e!==0?e:dr()}return uc()}function Id(){Sa===0&&(Sa=(ne&536870912)===0||le?ic():536870912);var e=ya.current;return e!==null&&(e.flags|=32),Sa}function fa(e,a,t){(e===ve&&(ue===2||ue===9)||e.cancelPendingCommit!==null)&&(zn(e,0),vt(e,ne,Sa,!1)),Xn(e,t),((ce&2)===0||e!==ve)&&(e===ve&&((ce&2)===0&&(Kt|=t),Ee===4&&vt(e,ne,Sa,!1)),Ra(e))}function Zd(e,a,t){if((ce&6)!==0)throw Error(u(327));var n=!t&&(a&124)===0&&(a&e.expiredLanes)===0||Qn(e,a),o=n?Hh(e,a):lr(e,a,!0),l=n;do{if(o===0){kn&&!n&&vt(e,a,0,!1);break}else{if(t=e.current.alternate,l&&!Bh(t)){o=lr(e,a,!1),l=!1;continue}if(o===2){if(l=a,e.errorRecoveryDisabledLanes&l)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){a=c;e:{var d=e;o=wo;var p=d.current.memoizedState.isDehydrated;if(p&&(zn(d,c).flags|=256),c=lr(d,c,!1),c!==2){if(Jl&&!p){d.errorRecoveryDisabledLanes|=l,Kt|=l,o=4;break e}l=oa,oa=o,l!==null&&(oa===null?oa=l:oa.push.apply(oa,l))}o=c}if(l=!1,o!==2)continue}}if(o===1){zn(e,0),vt(e,a,0,!0);break}e:{switch(n=e,l=o,l){case 0:case 1:throw Error(u(345));case 4:if((a&4194048)!==a)break;case 6:vt(n,a,Sa,!pt);break e;case 2:oa=null;break;case 3:case 5:break;default:throw Error(u(329))}if((a&62914560)===a&&(o=ar+300-wa(),10<o)){if(vt(n,a,Sa,!pt),es(n,0,!0)!==0)break e;n.timeoutHandle=Nm(Fd.bind(null,n,t,oa,Ps,er,a,Sa,Kt,Cn,pt,l,2,-0,0),o);break e}Fd(n,t,oa,Ps,er,a,Sa,Kt,Cn,pt,l,0,-0,0)}}break}while(!0);Ra(e)}function Fd(e,a,t,n,o,l,c,d,p,x,E,T,y,j){if(e.timeoutHandle=-1,T=a.subtreeFlags,(T&8192||(T&16785408)===16785408)&&(Oo={stylesheets:null,count:0,unsuspend:yg},Qd(a),T=jg(),T!==null)){e.cancelPendingCommit=T(om.bind(null,e,a,l,t,n,o,c,d,p,E,1,y,j)),vt(e,l,c,!x);return}om(e,a,l,t,n,o,c,d,p)}function Bh(e){for(var a=e;;){var t=a.tag;if((t===0||t===11||t===15)&&a.flags&16384&&(t=a.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var n=0;n<t.length;n++){var o=t[n],l=o.getSnapshot;o=o.value;try{if(!la(l(),o))return!1}catch{return!1}}if(t=a.child,a.subtreeFlags&16384&&t!==null)t.return=a,a=t;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function vt(e,a,t,n){a&=~Wl,a&=~Kt,e.suspendedLanes|=a,e.pingedLanes&=~a,n&&(e.warmLanes|=a),n=e.expirationTimes;for(var o=a;0<o;){var l=31-ia(o),c=1<<l;n[l]=-1,o&=~c}t!==0&&rc(e,t,a)}function Qs(){return(ce&6)===0?(ko(0),!1):!0}function sr(){if(ae!==null){if(ue===0)var e=ae.return;else e=ae,Va=Vt=null,jl(e),Nn=null,xo=0,e=ae;for(;e!==null;)Cd(e.alternate,e),e=e.return;ae=null}}function zn(e,a){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,ng(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),sr(),ve=e,ae=t=Ba(e.current,null),ne=a,ue=0,da=null,pt=!1,kn=Qn(e,a),Jl=!1,Cn=Sa=Wl=Kt=ht=Ee=0,oa=wo=null,er=!1,(a&8)!==0&&(a|=a&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=a;0<n;){var o=31-ia(n),l=1<<o;a|=e[o],n&=~l}return Za=a,ms(),t}function Jd(e,a){F=null,N.H=Ms,a===co||a===Ss?(a=hu(),ue=3):a===mu?(a=hu(),ue=4):ue=a===gd?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,da=a,ae===null&&(Ee=1,Us(e,ga(a,e.current)))}function Wd(){var e=N.H;return N.H=Ms,e===null?Ms:e}function em(){var e=N.A;return N.A=Lh,e}function ir(){Ee=4,pt||(ne&4194048)!==ne&&ya.current!==null||(kn=!0),(ht&134217727)===0&&(Kt&134217727)===0||ve===null||vt(ve,ne,Sa,!1)}function lr(e,a,t){var n=ce;ce|=2;var o=Wd(),l=em();(ve!==e||ne!==a)&&(Ps=null,zn(e,a)),a=!1;var c=Ee;e:do try{if(ue!==0&&ae!==null){var d=ae,p=da;switch(ue){case 8:sr(),c=6;break e;case 3:case 2:case 9:case 6:ya.current===null&&(a=!0);var x=ue;if(ue=0,da=null,qn(e,d,p,x),t&&kn){c=0;break e}break;default:x=ue,ue=0,da=null,qn(e,d,p,x)}}_h(),c=Ee;break}catch(E){Jd(e,E)}while(!0);return a&&e.shellSuspendCounter++,Va=Vt=null,ce=n,N.H=o,N.A=l,ae===null&&(ve=null,ne=0,ms()),c}function _h(){for(;ae!==null;)am(ae)}function Hh(e,a){var t=ce;ce|=2;var n=Wd(),o=em();ve!==e||ne!==a?(Ps=null,Vs=wa()+500,zn(e,a)):kn=Qn(e,a);e:do try{if(ue!==0&&ae!==null){a=ae;var l=da;a:switch(ue){case 1:ue=0,da=null,qn(e,a,l,1);break;case 2:case 9:if(fu(l)){ue=0,da=null,tm(a);break}a=function(){ue!==2&&ue!==9||ve!==e||(ue=7),Ra(e)},l.then(a,a);break e;case 3:ue=7;break e;case 4:ue=5;break e;case 7:fu(l)?(ue=0,da=null,tm(a)):(ue=0,da=null,qn(e,a,l,7));break;case 5:var c=null;switch(ae.tag){case 26:c=ae.memoizedState;case 5:case 27:var d=ae;if(!c||Lm(c)){ue=0,da=null;var p=d.sibling;if(p!==null)ae=p;else{var x=d.return;x!==null?(ae=x,Xs(x)):ae=null}break a}}ue=0,da=null,qn(e,a,l,5);break;case 6:ue=0,da=null,qn(e,a,l,6);break;case 8:sr(),Ee=6;break e;default:throw Error(u(462))}}Vh();break}catch(E){Jd(e,E)}while(!0);return Va=Vt=null,N.H=n,N.A=o,ce=t,ae!==null?0:(ve=null,ne=0,ms(),Ee)}function Vh(){for(;ae!==null&&!up();)am(ae)}function am(e){var a=Td(e.alternate,e,Za);e.memoizedProps=e.pendingProps,a===null?Xs(e):ae=a}function tm(e){var a=e,t=a.alternate;switch(a.tag){case 15:case 0:a=jd(t,a,a.pendingProps,a.type,void 0,ne);break;case 11:a=jd(t,a,a.pendingProps,a.type.render,a.ref,ne);break;case 5:jl(a);default:Cd(t,a),a=ae=nu(a,Za),a=Td(t,a,Za)}e.memoizedProps=e.pendingProps,a===null?Xs(e):ae=a}function qn(e,a,t,n){Va=Vt=null,jl(a),Nn=null,xo=0;var o=a.return;try{if(Mh(e,o,a,t,ne)){Ee=1,Us(e,ga(t,e.current)),ae=null;return}}catch(l){if(o!==null)throw ae=o,l;Ee=1,Us(e,ga(t,e.current)),ae=null;return}a.flags&32768?(le||n===1?e=!0:kn||(ne&536870912)!==0?e=!1:(pt=e=!0,(n===2||n===9||n===3||n===6)&&(n=ya.current,n!==null&&n.tag===13&&(n.flags|=16384))),nm(a,e)):Xs(a)}function Xs(e){var a=e;do{if((a.flags&32768)!==0){nm(a,pt);return}e=a.return;var t=zh(a.alternate,a,Za);if(t!==null){ae=t;return}if(a=a.sibling,a!==null){ae=a;return}ae=a=e}while(a!==null);Ee===0&&(Ee=5)}function nm(e,a){do{var t=qh(e.alternate,e);if(t!==null){t.flags&=32767,ae=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!a&&(e=e.sibling,e!==null)){ae=e;return}ae=e=t}while(e!==null);Ee=6,ae=null}function om(e,a,t,n,o,l,c,d,p){e.cancelPendingCommit=null;do Ys();while(Ye!==0);if((ce&6)!==0)throw Error(u(327));if(a!==null){if(a===e.current)throw Error(u(177));if(l=a.lanes|a.childLanes,l|=Fi,yp(e,t,l,c,d,p),e===ve&&(ae=ve=null,ne=0),Mn=a,bt=e,Rn=t,tr=l,nr=o,Kd=n,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Yh(Fo,function(){return cm(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||n){n=N.T,N.T=null,o=q.p,q.p=2,c=ce,ce|=4;try{Oh(e,a,t)}finally{ce=c,q.p=o,N.T=n}}Ye=1,sm(),im(),lm()}}function sm(){if(Ye===1){Ye=0;var e=bt,a=Mn,t=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||t){t=N.T,N.T=null;var n=q.p;q.p=2;var o=ce;ce|=4;try{Hd(a,e);var l=xr,c=$c(e.containerInfo),d=l.focusedElem,p=l.selectionRange;if(c!==d&&d&&d.ownerDocument&&Yc(d.ownerDocument.documentElement,d)){if(p!==null&&Yi(d)){var x=p.start,E=p.end;if(E===void 0&&(E=x),"selectionStart"in d)d.selectionStart=x,d.selectionEnd=Math.min(E,d.value.length);else{var T=d.ownerDocument||document,y=T&&T.defaultView||window;if(y.getSelection){var j=y.getSelection(),K=d.textContent.length,X=Math.min(p.start,K),pe=p.end===void 0?X:Math.min(p.end,K);!j.extend&&X>pe&&(c=pe,pe=X,X=c);var b=Xc(d,X),h=Xc(d,pe);if(b&&h&&(j.rangeCount!==1||j.anchorNode!==b.node||j.anchorOffset!==b.offset||j.focusNode!==h.node||j.focusOffset!==h.offset)){var v=T.createRange();v.setStart(b.node,b.offset),j.removeAllRanges(),X>pe?(j.addRange(v),j.extend(h.node,h.offset)):(v.setEnd(h.node,h.offset),j.addRange(v))}}}}for(T=[],j=d;j=j.parentNode;)j.nodeType===1&&T.push({element:j,left:j.scrollLeft,top:j.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<T.length;d++){var w=T[d];w.element.scrollLeft=w.left,w.element.scrollTop=w.top}}oi=!!vr,xr=vr=null}finally{ce=o,q.p=n,N.T=t}}e.current=a,Ye=2}}function im(){if(Ye===2){Ye=0;var e=bt,a=Mn,t=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||t){t=N.T,N.T=null;var n=q.p;q.p=2;var o=ce;ce|=4;try{Ld(e,a.alternate,a)}finally{ce=o,q.p=n,N.T=t}}Ye=3}}function lm(){if(Ye===4||Ye===3){Ye=0,dp();var e=bt,a=Mn,t=Rn,n=Kd;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Ye=5:(Ye=0,Mn=bt=null,rm(e,e.pendingLanes));var o=e.pendingLanes;if(o===0&&(gt=null),Ni(t),a=a.stateNode,sa&&typeof sa.onCommitFiberRoot=="function")try{sa.onCommitFiberRoot(Pn,a,void 0,(a.current.flags&128)===128)}catch{}if(n!==null){a=N.T,o=q.p,q.p=2,N.T=null;try{for(var l=e.onRecoverableError,c=0;c<n.length;c++){var d=n[c];l(d.value,{componentStack:d.stack})}}finally{N.T=a,q.p=o}}(Rn&3)!==0&&Ys(),Ra(e),o=e.pendingLanes,(t&4194090)!==0&&(o&42)!==0?e===or?To++:(To=0,or=e):To=0,ko(0)}}function rm(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,lo(a)))}function Ys(e){return sm(),im(),lm(),cm()}function cm(){if(Ye!==5)return!1;var e=bt,a=tr;tr=0;var t=Ni(Rn),n=N.T,o=q.p;try{q.p=32>t?32:t,N.T=null,t=nr,nr=null;var l=bt,c=Rn;if(Ye=0,Mn=bt=null,Rn=0,(ce&6)!==0)throw Error(u(331));var d=ce;if(ce|=4,Yd(l.current),Pd(l,l.current,c,t),ce=d,ko(0,!1),sa&&typeof sa.onPostCommitFiberRoot=="function")try{sa.onPostCommitFiberRoot(Pn,l)}catch{}return!0}finally{q.p=o,N.T=n,rm(e,a)}}function um(e,a,t){a=ga(t,a),a=Ul(e.stateNode,a,2),e=lt(e,a,2),e!==null&&(Xn(e,2),Ra(e))}function he(e,a,t){if(e.tag===3)um(e,e,t);else for(;a!==null;){if(a.tag===3){um(a,e,t);break}else if(a.tag===1){var n=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(gt===null||!gt.has(n))){e=ga(t,e),t=pd(2),n=lt(a,t,2),n!==null&&(hd(t,n,a,e),Xn(n,2),Ra(n));break}}a=a.return}}function rr(e,a,t){var n=e.pingCache;if(n===null){n=e.pingCache=new Gh;var o=new Set;n.set(a,o)}else o=n.get(a),o===void 0&&(o=new Set,n.set(a,o));o.has(t)||(Jl=!0,o.add(t),e=Ph.bind(null,e,a,t),a.then(e,e))}function Ph(e,a,t){var n=e.pingCache;n!==null&&n.delete(a),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,ve===e&&(ne&t)===t&&(Ee===4||Ee===3&&(ne&62914560)===ne&&300>wa()-ar?(ce&2)===0&&zn(e,0):Wl|=t,Cn===ne&&(Cn=0)),Ra(e)}function dm(e,a){a===0&&(a=lc()),e=hn(e,a),e!==null&&(Xn(e,a),Ra(e))}function Qh(e){var a=e.memoizedState,t=0;a!==null&&(t=a.retryLane),dm(e,t)}function Xh(e,a){var t=0;switch(e.tag){case 13:var n=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(u(314))}n!==null&&n.delete(a),dm(e,t)}function Yh(e,a){return Mt(e,a)}var $s=null,On=null,cr=!1,Ks=!1,ur=!1,It=0;function Ra(e){e!==On&&e.next===null&&(On===null?$s=On=e:On=On.next=e),Ks=!0,cr||(cr=!0,Kh())}function ko(e,a){if(!ur&&Ks){ur=!0;do for(var t=!1,n=$s;n!==null;){if(e!==0){var o=n.pendingLanes;if(o===0)var l=0;else{var c=n.suspendedLanes,d=n.pingedLanes;l=(1<<31-ia(42|e)+1)-1,l&=o&~(c&~d),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(t=!0,hm(n,l))}else l=ne,l=es(n,n===ve?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(l&3)===0||Qn(n,l)||(t=!0,hm(n,l));n=n.next}while(t);ur=!1}}function $h(){mm()}function mm(){Ks=cr=!1;var e=0;It!==0&&(tg()&&(e=It),It=0);for(var a=wa(),t=null,n=$s;n!==null;){var o=n.next,l=fm(n,a);l===0?(n.next=null,t===null?$s=o:t.next=o,o===null&&(On=t)):(t=n,(e!==0||(l&3)!==0)&&(Ks=!0)),n=o}ko(e)}function fm(e,a){for(var t=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes&-62914561;0<l;){var c=31-ia(l),d=1<<c,p=o[c];p===-1?((d&t)===0||(d&n)!==0)&&(o[c]=xp(d,a)):p<=a&&(e.expiredLanes|=d),l&=~d}if(a=ve,t=ne,t=es(e,e===a?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,t===0||e===a&&(ue===2||ue===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&et(n),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||Qn(e,t)){if(a=t&-t,a===e.callbackPriority)return a;switch(n!==null&&et(n),Ni(t)){case 2:case 8:t=oc;break;case 32:t=Fo;break;case 268435456:t=sc;break;default:t=Fo}return n=pm.bind(null,e),t=Mt(t,n),e.callbackPriority=a,e.callbackNode=t,a}return n!==null&&n!==null&&et(n),e.callbackPriority=2,e.callbackNode=null,2}function pm(e,a){if(Ye!==0&&Ye!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(Ys()&&e.callbackNode!==t)return null;var n=ne;return n=es(e,e===ve?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(Zd(e,n,a),fm(e,wa()),e.callbackNode!=null&&e.callbackNode===t?pm.bind(null,e):null)}function hm(e,a){if(Ys())return null;Zd(e,a,!0)}function Kh(){og(function(){(ce&6)!==0?Mt(nc,$h):mm()})}function dr(){return It===0&&(It=ic()),It}function gm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ss(""+e)}function bm(e,a){var t=a.ownerDocument.createElement("input");return t.name=a.name,t.value=a.value,e.id&&t.setAttribute("form",e.id),a.parentNode.insertBefore(t,a),e=new FormData(e),t.parentNode.removeChild(t),e}function Ih(e,a,t,n,o){if(a==="submit"&&t&&t.stateNode===o){var l=gm((o[ea]||null).action),c=n.submitter;c&&(a=(a=c[ea]||null)?gm(a.formAction):c.getAttribute("formAction"),a!==null&&(l=a,c=null));var d=new cs("action","action",null,n,o);e.push({event:d,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(It!==0){var p=c?bm(o,c):new FormData(o);Ml(t,{pending:!0,data:p,method:o.method,action:l},null,p)}}else typeof l=="function"&&(d.preventDefault(),p=c?bm(o,c):new FormData(o),Ml(t,{pending:!0,data:p,method:o.method,action:l},l,p))},currentTarget:o}]})}}for(var mr=0;mr<Zi.length;mr++){var fr=Zi[mr],Zh=fr.toLowerCase(),Fh=fr[0].toUpperCase()+fr.slice(1);Aa(Zh,"on"+Fh)}Aa(Zc,"onAnimationEnd"),Aa(Fc,"onAnimationIteration"),Aa(Jc,"onAnimationStart"),Aa("dblclick","onDoubleClick"),Aa("focusin","onFocus"),Aa("focusout","onBlur"),Aa(ph,"onTransitionRun"),Aa(hh,"onTransitionStart"),Aa(gh,"onTransitionCancel"),Aa(Wc,"onTransitionEnd"),on("onMouseEnter",["mouseout","mouseover"]),on("onMouseLeave",["mouseout","mouseover"]),on("onPointerEnter",["pointerout","pointerover"]),on("onPointerLeave",["pointerout","pointerover"]),zt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),zt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),zt("onBeforeInput",["compositionend","keypress","textInput","paste"]),zt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),zt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),zt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Co));function vm(e,a){a=(a&4)!==0;for(var t=0;t<e.length;t++){var n=e[t],o=n.event;n=n.listeners;e:{var l=void 0;if(a)for(var c=n.length-1;0<=c;c--){var d=n[c],p=d.instance,x=d.currentTarget;if(d=d.listener,p!==l&&o.isPropagationStopped())break e;l=d,o.currentTarget=x;try{l(o)}catch(E){Os(E)}o.currentTarget=null,l=p}else for(c=0;c<n.length;c++){if(d=n[c],p=d.instance,x=d.currentTarget,d=d.listener,p!==l&&o.isPropagationStopped())break e;l=d,o.currentTarget=x;try{l(o)}catch(E){Os(E)}o.currentTarget=null,l=p}}}}function te(e,a){var t=a[Ei];t===void 0&&(t=a[Ei]=new Set);var n=e+"__bubble";t.has(n)||(xm(a,e,2,!1),t.add(n))}function pr(e,a,t){var n=0;a&&(n|=4),xm(t,e,n,a)}var Is="_reactListening"+Math.random().toString(36).slice(2);function hr(e){if(!e[Is]){e[Is]=!0,mc.forEach(function(t){t!=="selectionchange"&&(Jh.has(t)||pr(t,!1,e),pr(t,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[Is]||(a[Is]=!0,pr("selectionchange",!1,a))}}function xm(e,a,t,n){switch(Pm(a)){case 2:var o=Ng;break;case 8:o=Eg;break;default:o=kr}t=o.bind(null,a,t,e),o=void 0,!Li||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(o=!0),n?o!==void 0?e.addEventListener(a,t,{capture:!0,passive:o}):e.addEventListener(a,t,!0):o!==void 0?e.addEventListener(a,t,{passive:o}):e.addEventListener(a,t,!1)}function gr(e,a,t,n,o){var l=n;if((a&1)===0&&(a&2)===0&&n!==null)e:for(;;){if(n===null)return;var c=n.tag;if(c===3||c===4){var d=n.stateNode.containerInfo;if(d===o)break;if(c===4)for(c=n.return;c!==null;){var p=c.tag;if((p===3||p===4)&&c.stateNode.containerInfo===o)return;c=c.return}for(;d!==null;){if(c=an(d),c===null)return;if(p=c.tag,p===5||p===6||p===26||p===27){n=l=c;continue e}d=d.parentNode}}n=n.return}Ec(function(){var x=l,E=Oi(t),T=[];e:{var y=eu.get(e);if(y!==void 0){var j=cs,K=e;switch(e){case"keypress":if(ls(t)===0)break e;case"keydown":case"keyup":j=Yp;break;case"focusin":K="focus",j=Hi;break;case"focusout":K="blur",j=Hi;break;case"beforeblur":case"afterblur":j=Hi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=kc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=qp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=Ip;break;case Zc:case Fc:case Jc:j=Lp;break;case Wc:j=Fp;break;case"scroll":case"scrollend":j=Rp;break;case"wheel":j=Wp;break;case"copy":case"cut":case"paste":j=Bp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=Mc;break;case"toggle":case"beforetoggle":j=ah}var X=(a&4)!==0,pe=!X&&(e==="scroll"||e==="scrollend"),b=X?y!==null?y+"Capture":null:y;X=[];for(var h=x,v;h!==null;){var w=h;if(v=w.stateNode,w=w.tag,w!==5&&w!==26&&w!==27||v===null||b===null||(w=Kn(h,b),w!=null&&X.push(Mo(h,w,v))),pe)break;h=h.return}0<X.length&&(y=new j(y,K,null,t,E),T.push({event:y,listeners:X}))}}if((a&7)===0){e:{if(y=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",y&&t!==qi&&(K=t.relatedTarget||t.fromElement)&&(an(K)||K[en]))break e;if((j||y)&&(y=E.window===E?E:(y=E.ownerDocument)?y.defaultView||y.parentWindow:window,j?(K=t.relatedTarget||t.toElement,j=x,K=K?an(K):null,K!==null&&(pe=S(K),X=K.tag,K!==pe||X!==5&&X!==27&&X!==6)&&(K=null)):(j=null,K=x),j!==K)){if(X=kc,w="onMouseLeave",b="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(X=Mc,w="onPointerLeave",b="onPointerEnter",h="pointer"),pe=j==null?y:$n(j),v=K==null?y:$n(K),y=new X(w,h+"leave",j,t,E),y.target=pe,y.relatedTarget=v,w=null,an(E)===x&&(X=new X(b,h+"enter",K,t,E),X.target=v,X.relatedTarget=pe,w=X),pe=w,j&&K)a:{for(X=j,b=K,h=0,v=X;v;v=Un(v))h++;for(v=0,w=b;w;w=Un(w))v++;for(;0<h-v;)X=Un(X),h--;for(;0<v-h;)b=Un(b),v--;for(;h--;){if(X===b||b!==null&&X===b.alternate)break a;X=Un(X),b=Un(b)}X=null}else X=null;j!==null&&ym(T,y,j,X,!1),K!==null&&pe!==null&&ym(T,pe,K,X,!0)}}e:{if(y=x?$n(x):window,j=y.nodeName&&y.nodeName.toLowerCase(),j==="select"||j==="input"&&y.type==="file")var L=Bc;else if(Lc(y))if(_c)L=dh;else{L=ch;var ee=rh}else j=y.nodeName,!j||j.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?x&&zi(x.elementType)&&(L=Bc):L=uh;if(L&&(L=L(e,x))){Gc(T,L,t,E);break e}ee&&ee(e,y,x),e==="focusout"&&x&&y.type==="number"&&x.memoizedProps.value!=null&&Ri(y,"number",y.value)}switch(ee=x?$n(x):window,e){case"focusin":(Lc(ee)||ee.contentEditable==="true")&&(mn=ee,$i=x,to=null);break;case"focusout":to=$i=mn=null;break;case"mousedown":Ki=!0;break;case"contextmenu":case"mouseup":case"dragend":Ki=!1,Kc(T,t,E);break;case"selectionchange":if(fh)break;case"keydown":case"keyup":Kc(T,t,E)}var P;if(Pi)e:{switch(e){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else dn?Oc(e,t)&&($="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&($="onCompositionStart");$&&(Rc&&t.locale!=="ko"&&(dn||$!=="onCompositionStart"?$==="onCompositionEnd"&&dn&&(P=wc()):(nt=E,Gi="value"in nt?nt.value:nt.textContent,dn=!0)),ee=Zs(x,$),0<ee.length&&($=new Cc($,e,null,t,E),T.push({event:$,listeners:ee}),P?$.data=P:(P=Uc(t),P!==null&&($.data=P)))),(P=nh?oh(e,t):sh(e,t))&&($=Zs(x,"onBeforeInput"),0<$.length&&(ee=new Cc("onBeforeInput","beforeinput",null,t,E),T.push({event:ee,listeners:$}),ee.data=P)),Ih(T,e,x,t,E)}vm(T,a)})}function Mo(e,a,t){return{instance:e,listener:a,currentTarget:t}}function Zs(e,a){for(var t=a+"Capture",n=[];e!==null;){var o=e,l=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||l===null||(o=Kn(e,t),o!=null&&n.unshift(Mo(e,o,l)),o=Kn(e,a),o!=null&&n.push(Mo(e,o,l))),e.tag===3)return n;e=e.return}return[]}function Un(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ym(e,a,t,n,o){for(var l=a._reactName,c=[];t!==null&&t!==n;){var d=t,p=d.alternate,x=d.stateNode;if(d=d.tag,p!==null&&p===n)break;d!==5&&d!==26&&d!==27||x===null||(p=x,o?(x=Kn(t,l),x!=null&&c.unshift(Mo(t,x,p))):o||(x=Kn(t,l),x!=null&&c.push(Mo(t,x,p)))),t=t.return}c.length!==0&&e.push({event:a,listeners:c})}var Wh=/\r\n?/g,eg=/\u0000|\uFFFD/g;function Sm(e){return(typeof e=="string"?e:""+e).replace(Wh,`
`).replace(eg,"")}function jm(e,a){return a=Sm(a),Sm(e)===a}function Fs(){}function fe(e,a,t,n,o,l){switch(t){case"children":typeof n=="string"?a==="body"||a==="textarea"&&n===""||rn(e,n):(typeof n=="number"||typeof n=="bigint")&&a!=="body"&&rn(e,""+n);break;case"className":ts(e,"class",n);break;case"tabIndex":ts(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":ts(e,t,n);break;case"style":Dc(e,n,l);break;case"data":if(a!=="object"){ts(e,"data",n);break}case"src":case"href":if(n===""&&(a!=="a"||t!=="href")){e.removeAttribute(t);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(t);break}n=ss(""+n),e.setAttribute(t,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(t==="formAction"?(a!=="input"&&fe(e,a,"name",o.name,o,null),fe(e,a,"formEncType",o.formEncType,o,null),fe(e,a,"formMethod",o.formMethod,o,null),fe(e,a,"formTarget",o.formTarget,o,null)):(fe(e,a,"encType",o.encType,o,null),fe(e,a,"method",o.method,o,null),fe(e,a,"target",o.target,o,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(t);break}n=ss(""+n),e.setAttribute(t,n);break;case"onClick":n!=null&&(e.onclick=Fs);break;case"onScroll":n!=null&&te("scroll",e);break;case"onScrollEnd":n!=null&&te("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(u(61));if(t=n.__html,t!=null){if(o.children!=null)throw Error(u(60));e.innerHTML=t}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}t=ss(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(t,""+n):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":n===!0?e.setAttribute(t,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(t,n):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(t,n):e.removeAttribute(t);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(t):e.setAttribute(t,n);break;case"popover":te("beforetoggle",e),te("toggle",e),as(e,"popover",n);break;case"xlinkActuate":La(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":La(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":La(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":La(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":La(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":La(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":La(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":La(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":La(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":as(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=Cp.get(t)||t,as(e,t,n))}}function br(e,a,t,n,o,l){switch(t){case"style":Dc(e,n,l);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(u(61));if(t=n.__html,t!=null){if(o.children!=null)throw Error(u(60));e.innerHTML=t}}break;case"children":typeof n=="string"?rn(e,n):(typeof n=="number"||typeof n=="bigint")&&rn(e,""+n);break;case"onScroll":n!=null&&te("scroll",e);break;case"onScrollEnd":n!=null&&te("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Fs);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!fc.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(o=t.endsWith("Capture"),a=t.slice(2,o?t.length-7:void 0),l=e[ea]||null,l=l!=null?l[t]:null,typeof l=="function"&&e.removeEventListener(a,l,o),typeof n=="function")){typeof l!="function"&&l!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(a,n,o);break e}t in e?e[t]=n:n===!0?e.setAttribute(t,""):as(e,t,n)}}}function $e(e,a,t){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":te("error",e),te("load",e);var n=!1,o=!1,l;for(l in t)if(t.hasOwnProperty(l)){var c=t[l];if(c!=null)switch(l){case"src":n=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,a));default:fe(e,a,l,c,t,null)}}o&&fe(e,a,"srcSet",t.srcSet,t,null),n&&fe(e,a,"src",t.src,t,null);return;case"input":te("invalid",e);var d=l=c=o=null,p=null,x=null;for(n in t)if(t.hasOwnProperty(n)){var E=t[n];if(E!=null)switch(n){case"name":o=E;break;case"type":c=E;break;case"checked":p=E;break;case"defaultChecked":x=E;break;case"value":l=E;break;case"defaultValue":d=E;break;case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(u(137,a));break;default:fe(e,a,n,E,t,null)}}yc(e,l,d,p,x,c,o,!1),ns(e);return;case"select":te("invalid",e),n=c=l=null;for(o in t)if(t.hasOwnProperty(o)&&(d=t[o],d!=null))switch(o){case"value":l=d;break;case"defaultValue":c=d;break;case"multiple":n=d;default:fe(e,a,o,d,t,null)}a=l,t=c,e.multiple=!!n,a!=null?ln(e,!!n,a,!1):t!=null&&ln(e,!!n,t,!0);return;case"textarea":te("invalid",e),l=o=n=null;for(c in t)if(t.hasOwnProperty(c)&&(d=t[c],d!=null))switch(c){case"value":n=d;break;case"defaultValue":o=d;break;case"children":l=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(u(91));break;default:fe(e,a,c,d,t,null)}jc(e,n,o,l),ns(e);return;case"option":for(p in t)t.hasOwnProperty(p)&&(n=t[p],n!=null)&&(p==="selected"?e.selected=n&&typeof n!="function"&&typeof n!="symbol":fe(e,a,p,n,t,null));return;case"dialog":te("beforetoggle",e),te("toggle",e),te("cancel",e),te("close",e);break;case"iframe":case"object":te("load",e);break;case"video":case"audio":for(n=0;n<Co.length;n++)te(Co[n],e);break;case"image":te("error",e),te("load",e);break;case"details":te("toggle",e);break;case"embed":case"source":case"link":te("error",e),te("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(x in t)if(t.hasOwnProperty(x)&&(n=t[x],n!=null))switch(x){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,a));default:fe(e,a,x,n,t,null)}return;default:if(zi(a)){for(E in t)t.hasOwnProperty(E)&&(n=t[E],n!==void 0&&br(e,a,E,n,t,void 0));return}}for(d in t)t.hasOwnProperty(d)&&(n=t[d],n!=null&&fe(e,a,d,n,t,null))}function ag(e,a,t,n){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,l=null,c=null,d=null,p=null,x=null,E=null;for(j in t){var T=t[j];if(t.hasOwnProperty(j)&&T!=null)switch(j){case"checked":break;case"value":break;case"defaultValue":p=T;default:n.hasOwnProperty(j)||fe(e,a,j,null,n,T)}}for(var y in n){var j=n[y];if(T=t[y],n.hasOwnProperty(y)&&(j!=null||T!=null))switch(y){case"type":l=j;break;case"name":o=j;break;case"checked":x=j;break;case"defaultChecked":E=j;break;case"value":c=j;break;case"defaultValue":d=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(u(137,a));break;default:j!==T&&fe(e,a,y,j,n,T)}}Mi(e,c,d,p,x,E,l,o);return;case"select":j=c=d=y=null;for(l in t)if(p=t[l],t.hasOwnProperty(l)&&p!=null)switch(l){case"value":break;case"multiple":j=p;default:n.hasOwnProperty(l)||fe(e,a,l,null,n,p)}for(o in n)if(l=n[o],p=t[o],n.hasOwnProperty(o)&&(l!=null||p!=null))switch(o){case"value":y=l;break;case"defaultValue":d=l;break;case"multiple":c=l;default:l!==p&&fe(e,a,o,l,n,p)}a=d,t=c,n=j,y!=null?ln(e,!!t,y,!1):!!n!=!!t&&(a!=null?ln(e,!!t,a,!0):ln(e,!!t,t?[]:"",!1));return;case"textarea":j=y=null;for(d in t)if(o=t[d],t.hasOwnProperty(d)&&o!=null&&!n.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:fe(e,a,d,null,n,o)}for(c in n)if(o=n[c],l=t[c],n.hasOwnProperty(c)&&(o!=null||l!=null))switch(c){case"value":y=o;break;case"defaultValue":j=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(u(91));break;default:o!==l&&fe(e,a,c,o,n,l)}Sc(e,y,j);return;case"option":for(var K in t)y=t[K],t.hasOwnProperty(K)&&y!=null&&!n.hasOwnProperty(K)&&(K==="selected"?e.selected=!1:fe(e,a,K,null,n,y));for(p in n)y=n[p],j=t[p],n.hasOwnProperty(p)&&y!==j&&(y!=null||j!=null)&&(p==="selected"?e.selected=y&&typeof y!="function"&&typeof y!="symbol":fe(e,a,p,y,n,j));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var X in t)y=t[X],t.hasOwnProperty(X)&&y!=null&&!n.hasOwnProperty(X)&&fe(e,a,X,null,n,y);for(x in n)if(y=n[x],j=t[x],n.hasOwnProperty(x)&&y!==j&&(y!=null||j!=null))switch(x){case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(u(137,a));break;default:fe(e,a,x,y,n,j)}return;default:if(zi(a)){for(var pe in t)y=t[pe],t.hasOwnProperty(pe)&&y!==void 0&&!n.hasOwnProperty(pe)&&br(e,a,pe,void 0,n,y);for(E in n)y=n[E],j=t[E],!n.hasOwnProperty(E)||y===j||y===void 0&&j===void 0||br(e,a,E,y,n,j);return}}for(var b in t)y=t[b],t.hasOwnProperty(b)&&y!=null&&!n.hasOwnProperty(b)&&fe(e,a,b,null,n,y);for(T in n)y=n[T],j=t[T],!n.hasOwnProperty(T)||y===j||y==null&&j==null||fe(e,a,T,y,n,j)}var vr=null,xr=null;function Js(e){return e.nodeType===9?e:e.ownerDocument}function Am(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Dm(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function yr(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Sr=null;function tg(){var e=window.event;return e&&e.type==="popstate"?e===Sr?!1:(Sr=e,!0):(Sr=null,!1)}var Nm=typeof setTimeout=="function"?setTimeout:void 0,ng=typeof clearTimeout=="function"?clearTimeout:void 0,Em=typeof Promise=="function"?Promise:void 0,og=typeof queueMicrotask=="function"?queueMicrotask:typeof Em<"u"?function(e){return Em.resolve(null).then(e).catch(sg)}:Nm;function sg(e){setTimeout(function(){throw e})}function xt(e){return e==="head"}function wm(e,a){var t=a,n=0,o=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(0<n&&8>n){t=n;var c=e.ownerDocument;if(t&1&&Ro(c.documentElement),t&2&&Ro(c.body),t&4)for(t=c.head,Ro(t),c=t.firstChild;c;){var d=c.nextSibling,p=c.nodeName;c[Yn]||p==="SCRIPT"||p==="STYLE"||p==="LINK"&&c.rel.toLowerCase()==="stylesheet"||t.removeChild(c),c=d}}if(o===0){e.removeChild(l),_o(a);return}o--}else t==="$"||t==="$?"||t==="$!"?o++:n=t.charCodeAt(0)-48;else n=0;t=l}while(t);_o(a)}function jr(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var t=a;switch(a=a.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":jr(t),wi(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function ig(e,a,t,n){for(;e.nodeType===1;){var o=t;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Yn])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(l=e.getAttribute("rel"),l==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(l!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(l=e.getAttribute("src"),(l!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&l&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var l=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===l)return e}else return e;if(e=Na(e.nextSibling),e===null)break}return null}function lg(e,a,t){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Na(e.nextSibling),e===null))return null;return e}function Ar(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function rg(e,a){var t=e.ownerDocument;if(e.data!=="$?"||t.readyState==="complete")a();else{var n=function(){a(),t.removeEventListener("DOMContentLoaded",n)};t.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Na(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return e}var Dr=null;function Tm(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(a===0)return e;a--}else t==="/$"&&a++}e=e.previousSibling}return null}function km(e,a,t){switch(a=Js(t),e){case"html":if(e=a.documentElement,!e)throw Error(u(452));return e;case"head":if(e=a.head,!e)throw Error(u(453));return e;case"body":if(e=a.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function Ro(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);wi(e)}var ja=new Map,Cm=new Set;function Ws(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Fa=q.d;q.d={f:cg,r:ug,D:dg,C:mg,L:fg,m:pg,X:gg,S:hg,M:bg};function cg(){var e=Fa.f(),a=Qs();return e||a}function ug(e){var a=tn(e);a!==null&&a.tag===5&&a.type==="form"?Zu(a):Fa.r(e)}var Ln=typeof document>"u"?null:document;function Mm(e,a,t){var n=Ln;if(n&&typeof a=="string"&&a){var o=ha(a);o='link[rel="'+e+'"][href="'+o+'"]',typeof t=="string"&&(o+='[crossorigin="'+t+'"]'),Cm.has(o)||(Cm.add(o),e={rel:e,crossOrigin:t,href:a},n.querySelector(o)===null&&(a=n.createElement("link"),$e(a,"link",e),_e(a),n.head.appendChild(a)))}}function dg(e){Fa.D(e),Mm("dns-prefetch",e,null)}function mg(e,a){Fa.C(e,a),Mm("preconnect",e,a)}function fg(e,a,t){Fa.L(e,a,t);var n=Ln;if(n&&e&&a){var o='link[rel="preload"][as="'+ha(a)+'"]';a==="image"&&t&&t.imageSrcSet?(o+='[imagesrcset="'+ha(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(o+='[imagesizes="'+ha(t.imageSizes)+'"]')):o+='[href="'+ha(e)+'"]';var l=o;switch(a){case"style":l=Gn(e);break;case"script":l=Bn(e)}ja.has(l)||(e=R({rel:"preload",href:a==="image"&&t&&t.imageSrcSet?void 0:e,as:a},t),ja.set(l,e),n.querySelector(o)!==null||a==="style"&&n.querySelector(zo(l))||a==="script"&&n.querySelector(qo(l))||(a=n.createElement("link"),$e(a,"link",e),_e(a),n.head.appendChild(a)))}}function pg(e,a){Fa.m(e,a);var t=Ln;if(t&&e){var n=a&&typeof a.as=="string"?a.as:"script",o='link[rel="modulepreload"][as="'+ha(n)+'"][href="'+ha(e)+'"]',l=o;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=Bn(e)}if(!ja.has(l)&&(e=R({rel:"modulepreload",href:e},a),ja.set(l,e),t.querySelector(o)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(qo(l)))return}n=t.createElement("link"),$e(n,"link",e),_e(n),t.head.appendChild(n)}}}function hg(e,a,t){Fa.S(e,a,t);var n=Ln;if(n&&e){var o=nn(n).hoistableStyles,l=Gn(e);a=a||"default";var c=o.get(l);if(!c){var d={loading:0,preload:null};if(c=n.querySelector(zo(l)))d.loading=5;else{e=R({rel:"stylesheet",href:e,"data-precedence":a},t),(t=ja.get(l))&&Nr(e,t);var p=c=n.createElement("link");_e(p),$e(p,"link",e),p._p=new Promise(function(x,E){p.onload=x,p.onerror=E}),p.addEventListener("load",function(){d.loading|=1}),p.addEventListener("error",function(){d.loading|=2}),d.loading|=4,ei(c,a,n)}c={type:"stylesheet",instance:c,count:1,state:d},o.set(l,c)}}}function gg(e,a){Fa.X(e,a);var t=Ln;if(t&&e){var n=nn(t).hoistableScripts,o=Bn(e),l=n.get(o);l||(l=t.querySelector(qo(o)),l||(e=R({src:e,async:!0},a),(a=ja.get(o))&&Er(e,a),l=t.createElement("script"),_e(l),$e(l,"link",e),t.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},n.set(o,l))}}function bg(e,a){Fa.M(e,a);var t=Ln;if(t&&e){var n=nn(t).hoistableScripts,o=Bn(e),l=n.get(o);l||(l=t.querySelector(qo(o)),l||(e=R({src:e,async:!0,type:"module"},a),(a=ja.get(o))&&Er(e,a),l=t.createElement("script"),_e(l),$e(l,"link",e),t.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},n.set(o,l))}}function Rm(e,a,t,n){var o=(o=Se.current)?Ws(o):null;if(!o)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(a=Gn(t.href),t=nn(o).hoistableStyles,n=t.get(a),n||(n={type:"style",instance:null,count:0,state:null},t.set(a,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=Gn(t.href);var l=nn(o).hoistableStyles,c=l.get(e);if(c||(o=o.ownerDocument||o,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(e,c),(l=o.querySelector(zo(e)))&&!l._p&&(c.instance=l,c.state.loading=5),ja.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},ja.set(e,t),l||vg(o,e,t,c.state))),a&&n===null)throw Error(u(528,""));return c}if(a&&n!==null)throw Error(u(529,""));return null;case"script":return a=t.async,t=t.src,typeof t=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Bn(t),t=nn(o).hoistableScripts,n=t.get(a),n||(n={type:"script",instance:null,count:0,state:null},t.set(a,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Gn(e){return'href="'+ha(e)+'"'}function zo(e){return'link[rel="stylesheet"]['+e+"]"}function zm(e){return R({},e,{"data-precedence":e.precedence,precedence:null})}function vg(e,a,t,n){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?n.loading=1:(a=e.createElement("link"),n.preload=a,a.addEventListener("load",function(){return n.loading|=1}),a.addEventListener("error",function(){return n.loading|=2}),$e(a,"link",t),_e(a),e.head.appendChild(a))}function Bn(e){return'[src="'+ha(e)+'"]'}function qo(e){return"script[async]"+e}function qm(e,a,t){if(a.count++,a.instance===null)switch(a.type){case"style":var n=e.querySelector('style[data-href~="'+ha(t.href)+'"]');if(n)return a.instance=n,_e(n),n;var o=R({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),_e(n),$e(n,"style",o),ei(n,t.precedence,e),a.instance=n;case"stylesheet":o=Gn(t.href);var l=e.querySelector(zo(o));if(l)return a.state.loading|=4,a.instance=l,_e(l),l;n=zm(t),(o=ja.get(o))&&Nr(n,o),l=(e.ownerDocument||e).createElement("link"),_e(l);var c=l;return c._p=new Promise(function(d,p){c.onload=d,c.onerror=p}),$e(l,"link",n),a.state.loading|=4,ei(l,t.precedence,e),a.instance=l;case"script":return l=Bn(t.src),(o=e.querySelector(qo(l)))?(a.instance=o,_e(o),o):(n=t,(o=ja.get(l))&&(n=R({},t),Er(n,o)),e=e.ownerDocument||e,o=e.createElement("script"),_e(o),$e(o,"link",n),e.head.appendChild(o),a.instance=o);case"void":return null;default:throw Error(u(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(n=a.instance,a.state.loading|=4,ei(n,t.precedence,e));return a.instance}function ei(e,a,t){for(var n=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=n.length?n[n.length-1]:null,l=o,c=0;c<n.length;c++){var d=n[c];if(d.dataset.precedence===a)l=d;else if(l!==o)break}l?l.parentNode.insertBefore(e,l.nextSibling):(a=t.nodeType===9?t.head:t,a.insertBefore(e,a.firstChild))}function Nr(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function Er(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var ai=null;function Om(e,a,t){if(ai===null){var n=new Map,o=ai=new Map;o.set(t,n)}else o=ai,n=o.get(t),n||(n=new Map,o.set(t,n));if(n.has(e))return n;for(n.set(e,null),t=t.getElementsByTagName(e),o=0;o<t.length;o++){var l=t[o];if(!(l[Yn]||l[Ie]||e==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var c=l.getAttribute(a)||"";c=e+c;var d=n.get(c);d?d.push(l):n.set(c,[l])}}return n}function Um(e,a,t){e=e.ownerDocument||e,e.head.insertBefore(t,a==="title"?e.querySelector("head > title"):null)}function xg(e,a,t){if(t===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;return a.rel==="stylesheet"?(e=a.disabled,typeof a.precedence=="string"&&e==null):!0;case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function Lm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Oo=null;function yg(){}function Sg(e,a,t){if(Oo===null)throw Error(u(475));var n=Oo;if(a.type==="stylesheet"&&(typeof t.media!="string"||matchMedia(t.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var o=Gn(t.href),l=e.querySelector(zo(o));if(l){e=l._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=ti.bind(n),e.then(n,n)),a.state.loading|=4,a.instance=l,_e(l);return}l=e.ownerDocument||e,t=zm(t),(o=ja.get(o))&&Nr(t,o),l=l.createElement("link"),_e(l);var c=l;c._p=new Promise(function(d,p){c.onload=d,c.onerror=p}),$e(l,"link",t),a.instance=l}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(n.count++,a=ti.bind(n),e.addEventListener("load",a),e.addEventListener("error",a))}}function jg(){if(Oo===null)throw Error(u(475));var e=Oo;return e.stylesheets&&e.count===0&&wr(e,e.stylesheets),0<e.count?function(a){var t=setTimeout(function(){if(e.stylesheets&&wr(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(t)}}:null}function ti(){if(this.count--,this.count===0){if(this.stylesheets)wr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ni=null;function wr(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ni=new Map,a.forEach(Ag,e),ni=null,ti.call(e))}function Ag(e,a){if(!(a.state.loading&4)){var t=ni.get(e);if(t)var n=t.get(null);else{t=new Map,ni.set(e,t);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<o.length;l++){var c=o[l];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(t.set(c.dataset.precedence,c),n=c)}n&&t.set(null,n)}o=a.instance,c=o.getAttribute("data-precedence"),l=t.get(c)||n,l===n&&t.set(null,o),t.set(c,o),this.count++,n=ti.bind(this),o.addEventListener("load",n),o.addEventListener("error",n),l?l.parentNode.insertBefore(o,l.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),a.state.loading|=4}}var Uo={$$typeof:ye,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function Dg(e,a,t,n,o,l,c,d){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ai(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ai(0),this.hiddenUpdates=Ai(null),this.identifierPrefix=n,this.onUncaughtError=o,this.onCaughtError=l,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=d,this.incompleteTransitions=new Map}function Gm(e,a,t,n,o,l,c,d,p,x,E,T){return e=new Dg(e,a,t,c,d,p,x,T),a=1,l===!0&&(a|=24),l=ra(3,null,null,a),e.current=l,l.stateNode=e,a=rl(),a.refCount++,e.pooledCache=a,a.refCount++,l.memoizedState={element:n,isDehydrated:t,cache:a},ml(l),e}function Bm(e){return e?(e=gn,e):gn}function _m(e,a,t,n,o,l){o=Bm(o),n.context===null?n.context=o:n.pendingContext=o,n=it(a),n.payload={element:t},l=l===void 0?null:l,l!==null&&(n.callback=l),t=lt(e,n,a),t!==null&&(fa(t,e,a),mo(t,e,a))}function Hm(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<a?t:a}}function Tr(e,a){Hm(e,a),(e=e.alternate)&&Hm(e,a)}function Vm(e){if(e.tag===13){var a=hn(e,67108864);a!==null&&fa(a,e,67108864),Tr(e,67108864)}}var oi=!0;function Ng(e,a,t,n){var o=N.T;N.T=null;var l=q.p;try{q.p=2,kr(e,a,t,n)}finally{q.p=l,N.T=o}}function Eg(e,a,t,n){var o=N.T;N.T=null;var l=q.p;try{q.p=8,kr(e,a,t,n)}finally{q.p=l,N.T=o}}function kr(e,a,t,n){if(oi){var o=Cr(n);if(o===null)gr(e,a,n,si,t),Qm(e,n);else if(Tg(o,e,a,t,n))n.stopPropagation();else if(Qm(e,n),a&4&&-1<wg.indexOf(e)){for(;o!==null;){var l=tn(o);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var c=Rt(l.pendingLanes);if(c!==0){var d=l;for(d.pendingLanes|=2,d.entangledLanes|=2;c;){var p=1<<31-ia(c);d.entanglements[1]|=p,c&=~p}Ra(l),(ce&6)===0&&(Vs=wa()+500,ko(0))}}break;case 13:d=hn(l,2),d!==null&&fa(d,l,2),Qs(),Tr(l,2)}if(l=Cr(n),l===null&&gr(e,a,n,si,t),l===o)break;o=l}o!==null&&n.stopPropagation()}else gr(e,a,n,null,t)}}function Cr(e){return e=Oi(e),Mr(e)}var si=null;function Mr(e){if(si=null,e=an(e),e!==null){var a=S(e);if(a===null)e=null;else{var t=a.tag;if(t===13){if(e=D(a),e!==null)return e;e=null}else if(t===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return si=e,null}function Pm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(mp()){case nc:return 2;case oc:return 8;case Fo:case fp:return 32;case sc:return 268435456;default:return 32}default:return 32}}var Rr=!1,yt=null,St=null,jt=null,Lo=new Map,Go=new Map,At=[],wg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Qm(e,a){switch(e){case"focusin":case"focusout":yt=null;break;case"dragenter":case"dragleave":St=null;break;case"mouseover":case"mouseout":jt=null;break;case"pointerover":case"pointerout":Lo.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Go.delete(a.pointerId)}}function Bo(e,a,t,n,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:a,domEventName:t,eventSystemFlags:n,nativeEvent:l,targetContainers:[o]},a!==null&&(a=tn(a),a!==null&&Vm(a)),e):(e.eventSystemFlags|=n,a=e.targetContainers,o!==null&&a.indexOf(o)===-1&&a.push(o),e)}function Tg(e,a,t,n,o){switch(a){case"focusin":return yt=Bo(yt,e,a,t,n,o),!0;case"dragenter":return St=Bo(St,e,a,t,n,o),!0;case"mouseover":return jt=Bo(jt,e,a,t,n,o),!0;case"pointerover":var l=o.pointerId;return Lo.set(l,Bo(Lo.get(l)||null,e,a,t,n,o)),!0;case"gotpointercapture":return l=o.pointerId,Go.set(l,Bo(Go.get(l)||null,e,a,t,n,o)),!0}return!1}function Xm(e){var a=an(e.target);if(a!==null){var t=S(a);if(t!==null){if(a=t.tag,a===13){if(a=D(t),a!==null){e.blockedOn=a,Sp(e.priority,function(){if(t.tag===13){var n=ma();n=Di(n);var o=hn(t,n);o!==null&&fa(o,t,n),Tr(t,n)}});return}}else if(a===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ii(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var t=Cr(e.nativeEvent);if(t===null){t=e.nativeEvent;var n=new t.constructor(t.type,t);qi=n,t.target.dispatchEvent(n),qi=null}else return a=tn(t),a!==null&&Vm(a),e.blockedOn=t,!1;a.shift()}return!0}function Ym(e,a,t){ii(e)&&t.delete(a)}function kg(){Rr=!1,yt!==null&&ii(yt)&&(yt=null),St!==null&&ii(St)&&(St=null),jt!==null&&ii(jt)&&(jt=null),Lo.forEach(Ym),Go.forEach(Ym)}function li(e,a){e.blockedOn===a&&(e.blockedOn=null,Rr||(Rr=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,kg)))}var ri=null;function $m(e){ri!==e&&(ri=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){ri===e&&(ri=null);for(var a=0;a<e.length;a+=3){var t=e[a],n=e[a+1],o=e[a+2];if(typeof n!="function"){if(Mr(n||t)===null)continue;break}var l=tn(t);l!==null&&(e.splice(a,3),a-=3,Ml(l,{pending:!0,data:o,method:t.method,action:n},n,o))}}))}function _o(e){function a(p){return li(p,e)}yt!==null&&li(yt,e),St!==null&&li(St,e),jt!==null&&li(jt,e),Lo.forEach(a),Go.forEach(a);for(var t=0;t<At.length;t++){var n=At[t];n.blockedOn===e&&(n.blockedOn=null)}for(;0<At.length&&(t=At[0],t.blockedOn===null);)Xm(t),t.blockedOn===null&&At.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(n=0;n<t.length;n+=3){var o=t[n],l=t[n+1],c=o[ea]||null;if(typeof l=="function")c||$m(t);else if(c){var d=null;if(l&&l.hasAttribute("formAction")){if(o=l,c=l[ea]||null)d=c.formAction;else if(Mr(o)!==null)continue}else d=c.action;typeof d=="function"?t[n+1]=d:(t.splice(n,3),n-=3),$m(t)}}}function zr(e){this._internalRoot=e}ci.prototype.render=zr.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(u(409));var t=a.current,n=ma();_m(t,n,e,a,null,null)},ci.prototype.unmount=zr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;_m(e.current,2,null,e,null,null),Qs(),a[en]=null}};function ci(e){this._internalRoot=e}ci.prototype.unstable_scheduleHydration=function(e){if(e){var a=uc();e={blockedOn:null,target:e,priority:a};for(var t=0;t<At.length&&a!==0&&a<At[t].priority;t++);At.splice(t,0,e),t===0&&Xm(e)}};var Km=r.version;if(Km!=="19.1.0")throw Error(u(527,Km,"19.1.0"));q.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=k(a),e=e!==null?U(e):null,e=e===null?null:e.stateNode,e};var Cg={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ui=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ui.isDisabled&&ui.supportsFiber)try{Pn=ui.inject(Cg),sa=ui}catch{}}return Xo.createRoot=function(e,a){if(!g(e))throw Error(u(299));var t=!1,n="",o=ud,l=dd,c=md,d=null;return a!=null&&(a.unstable_strictMode===!0&&(t=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(o=a.onUncaughtError),a.onCaughtError!==void 0&&(l=a.onCaughtError),a.onRecoverableError!==void 0&&(c=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(d=a.unstable_transitionCallbacks)),a=Gm(e,1,!1,null,null,t,n,o,l,c,d,null),e[en]=a.current,hr(e),new zr(a)},Xo.hydrateRoot=function(e,a,t){if(!g(e))throw Error(u(299));var n=!1,o="",l=ud,c=dd,d=md,p=null,x=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(p=t.unstable_transitionCallbacks),t.formState!==void 0&&(x=t.formState)),a=Gm(e,1,!0,a,t??null,n,o,l,c,d,p,x),a.context=Bm(null),t=a.current,n=ma(),n=Di(n),o=it(n),o.callback=null,lt(t,o,n),t=n,a.current.lanes=t,Xn(a,t),Ra(a),e[en]=a.current,hr(e),new ci(a)},Xo.version="19.1.0",Xo}var lf;function Zg(){if(lf)return Br.exports;lf=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(r){console.error(r)}}return i(),Br.exports=Ig(),Br.exports}var Fg=Zg();function Jg(i,r){if(i instanceof RegExp)return{keys:!1,pattern:i};var m,u,g,S,D=[],A="",k=i.split("/");for(k[0]||k.shift();g=k.shift();)m=g[0],m==="*"?(D.push(m),A+=g[1]==="?"?"(?:/(.*))?":"/(.*)"):m===":"?(u=g.indexOf("?",1),S=g.indexOf(".",1),D.push(g.substring(1,~u?u:~S?S:g.length)),A+=~u&&!~S?"(?:/([^/]+?))?":"/([^/]+?)",~S&&(A+=(~u?"?":"")+"\\"+g.substring(S))):A+="/"+g;return{keys:D,pattern:new RegExp("^"+A+(r?"(?=$|/)":"/?$"),"i")}}var Vr={exports:{}},Pr={};var rf;function Wg(){if(rf)return Pr;rf=1;var i=Mf();function r(V,_){return V===_&&(V!==0||1/V===1/_)||V!==V&&_!==_}var m=typeof Object.is=="function"?Object.is:r,u=i.useState,g=i.useEffect,S=i.useLayoutEffect,D=i.useDebugValue;function A(V,_){var W=_(),I=u({inst:{value:W,getSnapshot:_}}),Q=I[0].inst,Z=I[1];return S(function(){Q.value=W,Q.getSnapshot=_,k(Q)&&Z({inst:Q})},[V,W,_]),g(function(){return k(Q)&&Z({inst:Q}),V(function(){k(Q)&&Z({inst:Q})})},[V]),D(W),W}function k(V){var _=V.getSnapshot;V=V.value;try{var W=_();return!m(V,W)}catch{return!0}}function U(V,_){return _()}var R=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?U:A;return Pr.useSyncExternalStore=i.useSyncExternalStore!==void 0?i.useSyncExternalStore:R,Pr}var cf;function eb(){return cf||(cf=1,Vr.exports=Wg()),Vr.exports}var Rf=eb();const ab=zg.useInsertionEffect,tb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",nb=tb?de.useLayoutEffect:de.useEffect,ob=ab||nb,zf=i=>{const r=de.useRef([i,(...m)=>r[0](...m)]).current;return ob(()=>{r[0]=i}),r[1]},sb="popstate",Zr="pushState",Fr="replaceState",ib="hashchange",uf=[sb,Zr,Fr,ib],lb=i=>{for(const r of uf)addEventListener(r,i);return()=>{for(const r of uf)removeEventListener(r,i)}},qf=(i,r)=>Rf.useSyncExternalStore(lb,i,r),df=()=>location.search,rb=({ssrSearch:i}={})=>qf(df,i!=null?()=>i:df),mf=()=>location.pathname,cb=({ssrPath:i}={})=>qf(mf,i!=null?()=>i:mf),ub=(i,{replace:r=!1,state:m=null}={})=>history[r?Fr:Zr](m,"",i),db=(i={})=>[cb(i),ub],ff=Symbol.for("wouter_v3");if(typeof history<"u"&&typeof window[ff]>"u"){for(const i of[Zr,Fr]){const r=history[i];history[i]=function(){const m=r.apply(this,arguments),u=new Event(i);return u.arguments=arguments,dispatchEvent(u),m}}Object.defineProperty(window,ff,{value:!0})}const mb=(i,r)=>r.toLowerCase().indexOf(i.toLowerCase())?"~"+r:r.slice(i.length)||"/",Of=(i="")=>i==="/"?"":i,fb=(i,r)=>i[0]==="~"?i.slice(1):Of(r)+i,pb=(i="",r)=>mb(pf(Of(i)),pf(r)),pf=i=>{try{return decodeURI(i)}catch{return i}},Uf={hook:db,searchHook:rb,parser:Jg,base:"",ssrPath:void 0,ssrSearch:void 0,ssrContext:void 0,hrefs:i=>i,aroundNav:(i,r,m)=>i(r,m)},Lf=de.createContext(Uf),Zo=()=>de.useContext(Lf),Gf={},Bf=de.createContext(Gf),hb=()=>de.useContext(Bf),yi=i=>{const[r,m]=i.hook(i);return[pb(i.base,r),zf((u,g)=>i.aroundNav(m,fb(u,i.base),g))]},gb=()=>yi(Zo()),_f=(i,r,m,u)=>{const{pattern:g,keys:S}=r instanceof RegExp?{keys:!1,pattern:r}:i(r||"*",u),D=g.exec(m)||[],[A,...k]=D;return A!==void 0?[!0,(()=>{const U=S!==!1?Object.fromEntries(S.map((V,_)=>[V,k[_]])):D.groups;let R={...k};return U&&Object.assign(R,U),R})(),...u?[A]:[]]:[!1,null]},Hf=({children:i,...r})=>{const m=Zo(),u=r.hook?Uf:m;let g=u;const[S,D=r.ssrSearch??""]=r.ssrPath?.split("?")??[];S&&(r.ssrSearch=D,r.ssrPath=S),r.hrefs=r.hrefs??r.hook?.hrefs,r.searchHook=r.searchHook??r.hook?.searchHook;let A=de.useRef({}),k=A.current,U=k;for(let R in u){const V=R==="base"?u[R]+(r[R]??""):r[R]??u[R];k===U&&V!==U[R]&&(A.current=U={...U}),U[R]=V,(V!==u[R]||V!==g[R])&&(g=U)}return de.createElement(Lf.Provider,{value:g,children:i})},hf=({children:i,component:r},m)=>r?de.createElement(r,{params:m}):typeof i=="function"?i(m):i,bb=i=>{let r=de.useRef(Gf);const m=r.current;return r.current=Object.keys(i).length!==Object.keys(m).length||Object.entries(i).some(([u,g])=>g!==m[u])?i:m},C=({path:i,nest:r,match:m,...u})=>{const g=Zo(),[S]=yi(g),[D,A,k]=m??_f(g.parser,i,S,r),U=bb({...hb(),...A});if(!D)return null;const R=k?de.createElement(Hf,{base:k},hf(u,U)):hf(u,U);return de.createElement(Bf.Provider,{value:U,children:R})},gi=de.forwardRef((i,r)=>{const m=Zo(),[u,g]=yi(m),{to:S="",href:D=S,onClick:A,asChild:k,children:U,className:R,replace:V,state:_,transition:W,...I}=i,Q=zf(oe=>{oe.ctrlKey||oe.metaKey||oe.altKey||oe.shiftKey||oe.button!==0||(A?.(oe),oe.defaultPrevented||(oe.preventDefault(),g(D,i)))}),Z=m.hrefs(D[0]==="~"?D.slice(1):m.base+D,m);return k&&de.isValidElement(U)?de.cloneElement(U,{onClick:Q,href:Z}):de.createElement("a",{...I,onClick:Q,href:Z,className:R?.call?R(u===D):R,children:U,ref:r})}),Vf=i=>Array.isArray(i)?i.flatMap(r=>Vf(r&&r.type===de.Fragment?r.props.children:r)):[i],vb=({children:i,location:r})=>{const m=Zo(),[u]=yi(m);for(const g of Vf(i)){let S=0;if(de.isValidElement(g)&&(S=_f(m.parser,g.props.path,r||u,g.props.nest))[0])return de.cloneElement(g,{match:S})}return null},$o={v:[]},gf=()=>$o.v.forEach(i=>i()),xb=i=>($o.v.push(i)===1&&addEventListener("hashchange",gf),()=>{$o.v=$o.v.filter(r=>r!==i),$o.v.length||removeEventListener("hashchange",gf)}),yb=()=>"/"+location.hash.replace(/^#?\/?/,""),Sb=(i,{state:r=null,replace:m=!1}={})=>{const u=location.href,[g,S]=i.replace(/^#?\/?/,"").split("?"),D=new URL(location.href);D.hash=`/${g}`,S&&(D.search=S);const A=D.href;m?history.replaceState(r,"",A):history.pushState(r,"",A);const k=typeof HashChangeEvent<"u"?new HashChangeEvent("hashchange",{oldURL:u,newURL:A}):new Event("hashchange",{detail:{oldURL:u,newURL:A}});dispatchEvent(k)},Jr=({ssrPath:i="/"}={})=>[Rf.useSyncExternalStore(xb,yb,()=>i),Sb];Jr.hrefs=i=>"#"+i;var Si=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(i){return this.listeners.add(i),this.onSubscribe(),()=>{this.listeners.delete(i),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},jb={setTimeout:(i,r)=>setTimeout(i,r),clearTimeout:i=>clearTimeout(i),setInterval:(i,r)=>setInterval(i,r),clearInterval:i=>clearInterval(i)},Ab=class{#e=jb;#t=!1;setTimeoutProvider(i){this.#e=i}setTimeout(i,r){return this.#e.setTimeout(i,r)}clearTimeout(i){this.#e.clearTimeout(i)}setInterval(i,r){return this.#e.setInterval(i,r)}clearInterval(i){this.#e.clearInterval(i)}},Xr=new Ab;function Db(i){setTimeout(i,0)}var ji=typeof window>"u"||"Deno"in globalThis;function Ea(){}function Nb(i,r){return typeof i=="function"?i(r):i}function Eb(i){return typeof i=="number"&&i>=0&&i!==1/0}function wb(i,r){return Math.max(i+(r||0)-Date.now(),0)}function Yr(i,r){return typeof i=="function"?i(r):i}function Tb(i,r){return typeof i=="function"?i(r):i}function bf(i,r){const{type:m="all",exact:u,fetchStatus:g,predicate:S,queryKey:D,stale:A}=i;if(D){if(u){if(r.queryHash!==Wr(D,r.options))return!1}else if(!Io(r.queryKey,D))return!1}if(m!=="all"){const k=r.isActive();if(m==="active"&&!k||m==="inactive"&&k)return!1}return!(typeof A=="boolean"&&r.isStale()!==A||g&&g!==r.state.fetchStatus||S&&!S(r))}function vf(i,r){const{exact:m,status:u,predicate:g,mutationKey:S}=i;if(S){if(!r.options.mutationKey)return!1;if(m){if(Ko(r.options.mutationKey)!==Ko(S))return!1}else if(!Io(r.options.mutationKey,S))return!1}return!(u&&r.state.status!==u||g&&!g(r))}function Wr(i,r){return(r?.queryKeyHashFn||Ko)(i)}function Ko(i){return JSON.stringify(i,(r,m)=>$r(m)?Object.keys(m).sort().reduce((u,g)=>(u[g]=m[g],u),{}):m)}function Io(i,r){return i===r?!0:typeof i!=typeof r?!1:i&&r&&typeof i=="object"&&typeof r=="object"?Object.keys(r).every(m=>Io(i[m],r[m])):!1}var kb=Object.prototype.hasOwnProperty;function Pf(i,r,m=0){if(i===r)return i;if(m>500)return r;const u=xf(i)&&xf(r);if(!u&&!($r(i)&&$r(r)))return r;const S=(u?i:Object.keys(i)).length,D=u?r:Object.keys(r),A=D.length,k=u?new Array(A):{};let U=0;for(let R=0;R<A;R++){const V=u?R:D[R],_=i[V],W=r[V];if(_===W){k[V]=_,(u?R<S:kb.call(i,V))&&U++;continue}if(_===null||W===null||typeof _!="object"||typeof W!="object"){k[V]=W;continue}const I=Pf(_,W,m+1);k[V]=I,I===_&&U++}return S===A&&U===S?i:k}function xf(i){return Array.isArray(i)&&i.length===Object.keys(i).length}function $r(i){if(!yf(i))return!1;const r=i.constructor;if(r===void 0)return!0;const m=r.prototype;return!(!yf(m)||!m.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(i)!==Object.prototype)}function yf(i){return Object.prototype.toString.call(i)==="[object Object]"}function Cb(i){return new Promise(r=>{Xr.setTimeout(r,i)})}function Mb(i,r,m){return typeof m.structuralSharing=="function"?m.structuralSharing(i,r):m.structuralSharing!==!1?Pf(i,r):r}function Rb(i,r,m=0){const u=[...i,r];return m&&u.length>m?u.slice(1):u}function zb(i,r,m=0){const u=[r,...i];return m&&u.length>m?u.slice(0,-1):u}var ec=Symbol();function Qf(i,r){return!i.queryFn&&r?.initialPromise?()=>r.initialPromise:!i.queryFn||i.queryFn===ec?()=>Promise.reject(new Error(`Missing queryFn: '${i.queryHash}'`)):i.queryFn}function qb(i,r,m){let u=!1,g;return Object.defineProperty(i,"signal",{enumerable:!0,get:()=>(g??=r(),u||(u=!0,g.aborted?m():g.addEventListener("abort",m,{once:!0})),g)}),i}var Ob=class extends Si{#e;#t;#a;constructor(){super(),this.#a=i=>{if(!ji&&window.addEventListener){const r=()=>i();return window.addEventListener("visibilitychange",r,!1),()=>{window.removeEventListener("visibilitychange",r)}}}}onSubscribe(){this.#t||this.setEventListener(this.#a)}onUnsubscribe(){this.hasListeners()||(this.#t?.(),this.#t=void 0)}setEventListener(i){this.#a=i,this.#t?.(),this.#t=i(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()})}setFocused(i){this.#e!==i&&(this.#e=i,this.onFocus())}onFocus(){const i=this.isFocused();this.listeners.forEach(r=>{r(i)})}isFocused(){return typeof this.#e=="boolean"?this.#e:globalThis.document?.visibilityState!=="hidden"}},Xf=new Ob;function Ub(){let i,r;const m=new Promise((g,S)=>{i=g,r=S});m.status="pending",m.catch(()=>{});function u(g){Object.assign(m,g),delete m.resolve,delete m.reject}return m.resolve=g=>{u({status:"fulfilled",value:g}),i(g)},m.reject=g=>{u({status:"rejected",reason:g}),r(g)},m}var Lb=Db;function Gb(){let i=[],r=0,m=A=>{A()},u=A=>{A()},g=Lb;const S=A=>{r?i.push(A):g(()=>{m(A)})},D=()=>{const A=i;i=[],A.length&&g(()=>{u(()=>{A.forEach(k=>{m(k)})})})};return{batch:A=>{let k;r++;try{k=A()}finally{r--,r||D()}return k},batchCalls:A=>(...k)=>{S(()=>{A(...k)})},schedule:S,setNotifyFunction:A=>{m=A},setBatchNotifyFunction:A=>{u=A},setScheduler:A=>{g=A}}}var We=Gb(),Bb=class extends Si{#e=!0;#t;#a;constructor(){super(),this.#a=i=>{if(!ji&&window.addEventListener){const r=()=>i(!0),m=()=>i(!1);return window.addEventListener("online",r,!1),window.addEventListener("offline",m,!1),()=>{window.removeEventListener("online",r),window.removeEventListener("offline",m)}}}}onSubscribe(){this.#t||this.setEventListener(this.#a)}onUnsubscribe(){this.hasListeners()||(this.#t?.(),this.#t=void 0)}setEventListener(i){this.#a=i,this.#t?.(),this.#t=i(this.setOnline.bind(this))}setOnline(i){this.#e!==i&&(this.#e=i,this.listeners.forEach(m=>{m(i)}))}isOnline(){return this.#e}},bi=new Bb;function _b(i){return Math.min(1e3*2**i,3e4)}function Yf(i){return(i??"online")==="online"?bi.isOnline():!0}var Kr=class extends Error{constructor(i){super("CancelledError"),this.revert=i?.revert,this.silent=i?.silent}};function $f(i){let r=!1,m=0,u;const g=Ub(),S=()=>g.status!=="pending",D=Q=>{if(!S()){const Z=new Kr(Q);_(Z),i.onCancel?.(Z)}},A=()=>{r=!0},k=()=>{r=!1},U=()=>Xf.isFocused()&&(i.networkMode==="always"||bi.isOnline())&&i.canRun(),R=()=>Yf(i.networkMode)&&i.canRun(),V=Q=>{S()||(u?.(),g.resolve(Q))},_=Q=>{S()||(u?.(),g.reject(Q))},W=()=>new Promise(Q=>{u=Z=>{(S()||U())&&Q(Z)},i.onPause?.()}).then(()=>{u=void 0,S()||i.onContinue?.()}),I=()=>{if(S())return;let Q;const Z=m===0?i.initialPromise:void 0;try{Q=Z??i.fn()}catch(oe){Q=Promise.reject(oe)}Promise.resolve(Q).then(V).catch(oe=>{if(S())return;const Ge=i.retry??(ji?0:3),ye=i.retryDelay??_b,Ce=typeof ye=="function"?ye(m,oe):ye,qe=Ge===!0||typeof Ge=="number"&&m<Ge||typeof Ge=="function"&&Ge(m,oe);if(r||!qe){_(oe);return}m++,i.onFail?.(m,oe),Cb(Ce).then(()=>U()?void 0:W()).then(()=>{r?_(oe):I()})})};return{promise:g,status:()=>g.status,cancel:D,continue:()=>(u?.(),g),cancelRetry:A,continueRetry:k,canStart:R,start:()=>(R()?I():W().then(I),g)}}var Kf=class{#e;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),Eb(this.gcTime)&&(this.#e=Xr.setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(i){this.gcTime=Math.max(this.gcTime||0,i??(ji?1/0:300*1e3))}clearGcTimeout(){this.#e&&(Xr.clearTimeout(this.#e),this.#e=void 0)}},Hb=class extends Kf{#e;#t;#a;#o;#n;#i;#l;constructor(i){super(),this.#l=!1,this.#i=i.defaultOptions,this.setOptions(i.options),this.observers=[],this.#o=i.client,this.#a=this.#o.getQueryCache(),this.queryKey=i.queryKey,this.queryHash=i.queryHash,this.#e=jf(this.options),this.state=i.state??this.#e,this.scheduleGc()}get meta(){return this.options.meta}get promise(){return this.#n?.promise}setOptions(i){if(this.options={...this.#i,...i},this.updateGcTime(this.options.gcTime),this.state&&this.state.data===void 0){const r=jf(this.options);r.data!==void 0&&(this.setState(Sf(r.data,r.dataUpdatedAt)),this.#e=r)}}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.#a.remove(this)}setData(i,r){const m=Mb(this.state.data,i,this.options);return this.#s({data:m,type:"success",dataUpdatedAt:r?.updatedAt,manual:r?.manual}),m}setState(i,r){this.#s({type:"setState",state:i,setStateOptions:r})}cancel(i){const r=this.#n?.promise;return this.#n?.cancel(i),r?r.then(Ea).catch(Ea):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#e)}isActive(){return this.observers.some(i=>Tb(i.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===ec||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(i=>Yr(i.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(i=>i.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(i=0){return this.state.data===void 0?!0:i==="static"?!1:this.state.isInvalidated?!0:!wb(this.state.dataUpdatedAt,i)}onFocus(){this.observers.find(r=>r.shouldFetchOnWindowFocus())?.refetch({cancelRefetch:!1}),this.#n?.continue()}onOnline(){this.observers.find(r=>r.shouldFetchOnReconnect())?.refetch({cancelRefetch:!1}),this.#n?.continue()}addObserver(i){this.observers.includes(i)||(this.observers.push(i),this.clearGcTimeout(),this.#a.notify({type:"observerAdded",query:this,observer:i}))}removeObserver(i){this.observers.includes(i)&&(this.observers=this.observers.filter(r=>r!==i),this.observers.length||(this.#n&&(this.#l?this.#n.cancel({revert:!0}):this.#n.cancelRetry()),this.scheduleGc()),this.#a.notify({type:"observerRemoved",query:this,observer:i}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.#s({type:"invalidate"})}async fetch(i,r){if(this.state.fetchStatus!=="idle"&&this.#n?.status()!=="rejected"){if(this.state.data!==void 0&&r?.cancelRefetch)this.cancel({silent:!0});else if(this.#n)return this.#n.continueRetry(),this.#n.promise}if(i&&this.setOptions(i),!this.options.queryFn){const A=this.observers.find(k=>k.options.queryFn);A&&this.setOptions(A.options)}const m=new AbortController,u=A=>{Object.defineProperty(A,"signal",{enumerable:!0,get:()=>(this.#l=!0,m.signal)})},g=()=>{const A=Qf(this.options,r),U=(()=>{const R={client:this.#o,queryKey:this.queryKey,meta:this.meta};return u(R),R})();return this.#l=!1,this.options.persister?this.options.persister(A,U,this):A(U)},D=(()=>{const A={fetchOptions:r,options:this.options,queryKey:this.queryKey,client:this.#o,state:this.state,fetchFn:g};return u(A),A})();this.options.behavior?.onFetch(D,this),this.#t=this.state,(this.state.fetchStatus==="idle"||this.state.fetchMeta!==D.fetchOptions?.meta)&&this.#s({type:"fetch",meta:D.fetchOptions?.meta}),this.#n=$f({initialPromise:r?.initialPromise,fn:D.fetchFn,onCancel:A=>{A instanceof Kr&&A.revert&&this.setState({...this.#t,fetchStatus:"idle"}),m.abort()},onFail:(A,k)=>{this.#s({type:"failed",failureCount:A,error:k})},onPause:()=>{this.#s({type:"pause"})},onContinue:()=>{this.#s({type:"continue"})},retry:D.options.retry,retryDelay:D.options.retryDelay,networkMode:D.options.networkMode,canRun:()=>!0});try{const A=await this.#n.start();if(A===void 0)throw new Error(`${this.queryHash} data is undefined`);return this.setData(A),this.#a.config.onSuccess?.(A,this),this.#a.config.onSettled?.(A,this.state.error,this),A}catch(A){if(A instanceof Kr){if(A.silent)return this.#n.promise;if(A.revert){if(this.state.data===void 0)throw A;return this.state.data}}throw this.#s({type:"error",error:A}),this.#a.config.onError?.(A,this),this.#a.config.onSettled?.(this.state.data,A,this),A}finally{this.scheduleGc()}}#s(i){const r=m=>{switch(i.type){case"failed":return{...m,fetchFailureCount:i.failureCount,fetchFailureReason:i.error};case"pause":return{...m,fetchStatus:"paused"};case"continue":return{...m,fetchStatus:"fetching"};case"fetch":return{...m,...Vb(m.data,this.options),fetchMeta:i.meta??null};case"success":const u={...m,...Sf(i.data,i.dataUpdatedAt),dataUpdateCount:m.dataUpdateCount+1,...!i.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};return this.#t=i.manual?u:void 0,u;case"error":const g=i.error;return{...m,error:g,errorUpdateCount:m.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:m.fetchFailureCount+1,fetchFailureReason:g,fetchStatus:"idle",status:"error",isInvalidated:!0};case"invalidate":return{...m,isInvalidated:!0};case"setState":return{...m,...i.state}}};this.state=r(this.state),We.batch(()=>{this.observers.forEach(m=>{m.onQueryUpdate()}),this.#a.notify({query:this,type:"updated",action:i})})}};function Vb(i,r){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Yf(r.networkMode)?"fetching":"paused",...i===void 0&&{error:null,status:"pending"}}}function Sf(i,r){return{data:i,dataUpdatedAt:r??Date.now(),error:null,isInvalidated:!1,status:"success"}}function jf(i){const r=typeof i.initialData=="function"?i.initialData():i.initialData,m=r!==void 0,u=m?typeof i.initialDataUpdatedAt=="function"?i.initialDataUpdatedAt():i.initialDataUpdatedAt:0;return{data:r,dataUpdateCount:0,dataUpdatedAt:m?u??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:m?"success":"pending",fetchStatus:"idle"}}function Af(i){return{onFetch:(r,m)=>{const u=r.options,g=r.fetchOptions?.meta?.fetchMore?.direction,S=r.state.data?.pages||[],D=r.state.data?.pageParams||[];let A={pages:[],pageParams:[]},k=0;const U=async()=>{let R=!1;const V=I=>{qb(I,()=>r.signal,()=>R=!0)},_=Qf(r.options,r.fetchOptions),W=async(I,Q,Z)=>{if(R)return Promise.reject();if(Q==null&&I.pages.length)return Promise.resolve(I);const Ge=(()=>{const we={client:r.client,queryKey:r.queryKey,pageParam:Q,direction:Z?"backward":"forward",meta:r.options.meta};return V(we),we})(),ye=await _(Ge),{maxPages:Ce}=r.options,qe=Z?zb:Rb;return{pages:qe(I.pages,ye,Ce),pageParams:qe(I.pageParams,Q,Ce)}};if(g&&S.length){const I=g==="backward",Q=I?Pb:Df,Z={pages:S,pageParams:D},oe=Q(u,Z);A=await W(Z,oe,I)}else{const I=i??S.length;do{const Q=k===0?D[0]??u.initialPageParam:Df(u,A);if(k>0&&Q==null)break;A=await W(A,Q),k++}while(k<I)}return A};r.options.persister?r.fetchFn=()=>r.options.persister?.(U,{client:r.client,queryKey:r.queryKey,meta:r.options.meta,signal:r.signal},m):r.fetchFn=U}}}function Df(i,{pages:r,pageParams:m}){const u=r.length-1;return r.length>0?i.getNextPageParam(r[u],r,m[u],m):void 0}function Pb(i,{pages:r,pageParams:m}){return r.length>0?i.getPreviousPageParam?.(r[0],r,m[0],m):void 0}var Qb=class extends Kf{#e;#t;#a;#o;constructor(i){super(),this.#e=i.client,this.mutationId=i.mutationId,this.#a=i.mutationCache,this.#t=[],this.state=i.state||Xb(),this.setOptions(i.options),this.scheduleGc()}setOptions(i){this.options=i,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(i){this.#t.includes(i)||(this.#t.push(i),this.clearGcTimeout(),this.#a.notify({type:"observerAdded",mutation:this,observer:i}))}removeObserver(i){this.#t=this.#t.filter(r=>r!==i),this.scheduleGc(),this.#a.notify({type:"observerRemoved",mutation:this,observer:i})}optionalRemove(){this.#t.length||(this.state.status==="pending"?this.scheduleGc():this.#a.remove(this))}continue(){return this.#o?.continue()??this.execute(this.state.variables)}async execute(i){const r=()=>{this.#n({type:"continue"})},m={client:this.#e,meta:this.options.meta,mutationKey:this.options.mutationKey};this.#o=$f({fn:()=>this.options.mutationFn?this.options.mutationFn(i,m):Promise.reject(new Error("No mutationFn found")),onFail:(S,D)=>{this.#n({type:"failed",failureCount:S,error:D})},onPause:()=>{this.#n({type:"pause"})},onContinue:r,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#a.canRun(this)});const u=this.state.status==="pending",g=!this.#o.canStart();try{if(u)r();else{this.#n({type:"pending",variables:i,isPaused:g}),this.#a.config.onMutate&&await this.#a.config.onMutate(i,this,m);const D=await this.options.onMutate?.(i,m);D!==this.state.context&&this.#n({type:"pending",context:D,variables:i,isPaused:g})}const S=await this.#o.start();return await this.#a.config.onSuccess?.(S,i,this.state.context,this,m),await this.options.onSuccess?.(S,i,this.state.context,m),await this.#a.config.onSettled?.(S,null,this.state.variables,this.state.context,this,m),await this.options.onSettled?.(S,null,i,this.state.context,m),this.#n({type:"success",data:S}),S}catch(S){try{await this.#a.config.onError?.(S,i,this.state.context,this,m)}catch(D){Promise.reject(D)}try{await this.options.onError?.(S,i,this.state.context,m)}catch(D){Promise.reject(D)}try{await this.#a.config.onSettled?.(void 0,S,this.state.variables,this.state.context,this,m)}catch(D){Promise.reject(D)}try{await this.options.onSettled?.(void 0,S,i,this.state.context,m)}catch(D){Promise.reject(D)}throw this.#n({type:"error",error:S}),S}finally{this.#a.runNext(this)}}#n(i){const r=m=>{switch(i.type){case"failed":return{...m,failureCount:i.failureCount,failureReason:i.error};case"pause":return{...m,isPaused:!0};case"continue":return{...m,isPaused:!1};case"pending":return{...m,context:i.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:i.isPaused,status:"pending",variables:i.variables,submittedAt:Date.now()};case"success":return{...m,data:i.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...m,data:void 0,error:i.error,failureCount:m.failureCount+1,failureReason:i.error,isPaused:!1,status:"error"}}};this.state=r(this.state),We.batch(()=>{this.#t.forEach(m=>{m.onMutationUpdate(i)}),this.#a.notify({mutation:this,type:"updated",action:i})})}};function Xb(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Yb=class extends Si{constructor(i={}){super(),this.config=i,this.#e=new Set,this.#t=new Map,this.#a=0}#e;#t;#a;build(i,r,m){const u=new Qb({client:i,mutationCache:this,mutationId:++this.#a,options:i.defaultMutationOptions(r),state:m});return this.add(u),u}add(i){this.#e.add(i);const r=mi(i);if(typeof r=="string"){const m=this.#t.get(r);m?m.push(i):this.#t.set(r,[i])}this.notify({type:"added",mutation:i})}remove(i){if(this.#e.delete(i)){const r=mi(i);if(typeof r=="string"){const m=this.#t.get(r);if(m)if(m.length>1){const u=m.indexOf(i);u!==-1&&m.splice(u,1)}else m[0]===i&&this.#t.delete(r)}}this.notify({type:"removed",mutation:i})}canRun(i){const r=mi(i);if(typeof r=="string"){const u=this.#t.get(r)?.find(g=>g.state.status==="pending");return!u||u===i}else return!0}runNext(i){const r=mi(i);return typeof r=="string"?this.#t.get(r)?.find(u=>u!==i&&u.state.isPaused)?.continue()??Promise.resolve():Promise.resolve()}clear(){We.batch(()=>{this.#e.forEach(i=>{this.notify({type:"removed",mutation:i})}),this.#e.clear(),this.#t.clear()})}getAll(){return Array.from(this.#e)}find(i){const r={exact:!0,...i};return this.getAll().find(m=>vf(r,m))}findAll(i={}){return this.getAll().filter(r=>vf(i,r))}notify(i){We.batch(()=>{this.listeners.forEach(r=>{r(i)})})}resumePausedMutations(){const i=this.getAll().filter(r=>r.state.isPaused);return We.batch(()=>Promise.all(i.map(r=>r.continue().catch(Ea))))}};function mi(i){return i.options.scope?.id}var $b=class extends Si{constructor(i={}){super(),this.config=i,this.#e=new Map}#e;build(i,r,m){const u=r.queryKey,g=r.queryHash??Wr(u,r);let S=this.get(g);return S||(S=new Hb({client:i,queryKey:u,queryHash:g,options:i.defaultQueryOptions(r),state:m,defaultOptions:i.getQueryDefaults(u)}),this.add(S)),S}add(i){this.#e.has(i.queryHash)||(this.#e.set(i.queryHash,i),this.notify({type:"added",query:i}))}remove(i){const r=this.#e.get(i.queryHash);r&&(i.destroy(),r===i&&this.#e.delete(i.queryHash),this.notify({type:"removed",query:i}))}clear(){We.batch(()=>{this.getAll().forEach(i=>{this.remove(i)})})}get(i){return this.#e.get(i)}getAll(){return[...this.#e.values()]}find(i){const r={exact:!0,...i};return this.getAll().find(m=>bf(r,m))}findAll(i={}){const r=this.getAll();return Object.keys(i).length>0?r.filter(m=>bf(i,m)):r}notify(i){We.batch(()=>{this.listeners.forEach(r=>{r(i)})})}onFocus(){We.batch(()=>{this.getAll().forEach(i=>{i.onFocus()})})}onOnline(){We.batch(()=>{this.getAll().forEach(i=>{i.onOnline()})})}},Kb=class{#e;#t;#a;#o;#n;#i;#l;#s;constructor(i={}){this.#e=i.queryCache||new $b,this.#t=i.mutationCache||new Yb,this.#a=i.defaultOptions||{},this.#o=new Map,this.#n=new Map,this.#i=0}mount(){this.#i++,this.#i===1&&(this.#l=Xf.subscribe(async i=>{i&&(await this.resumePausedMutations(),this.#e.onFocus())}),this.#s=bi.subscribe(async i=>{i&&(await this.resumePausedMutations(),this.#e.onOnline())}))}unmount(){this.#i--,this.#i===0&&(this.#l?.(),this.#l=void 0,this.#s?.(),this.#s=void 0)}isFetching(i){return this.#e.findAll({...i,fetchStatus:"fetching"}).length}isMutating(i){return this.#t.findAll({...i,status:"pending"}).length}getQueryData(i){const r=this.defaultQueryOptions({queryKey:i});return this.#e.get(r.queryHash)?.state.data}ensureQueryData(i){const r=this.defaultQueryOptions(i),m=this.#e.build(this,r),u=m.state.data;return u===void 0?this.fetchQuery(i):(i.revalidateIfStale&&m.isStaleByTime(Yr(r.staleTime,m))&&this.prefetchQuery(r),Promise.resolve(u))}getQueriesData(i){return this.#e.findAll(i).map(({queryKey:r,state:m})=>{const u=m.data;return[r,u]})}setQueryData(i,r,m){const u=this.defaultQueryOptions({queryKey:i}),S=this.#e.get(u.queryHash)?.state.data,D=Nb(r,S);if(D!==void 0)return this.#e.build(this,u).setData(D,{...m,manual:!0})}setQueriesData(i,r,m){return We.batch(()=>this.#e.findAll(i).map(({queryKey:u})=>[u,this.setQueryData(u,r,m)]))}getQueryState(i){const r=this.defaultQueryOptions({queryKey:i});return this.#e.get(r.queryHash)?.state}removeQueries(i){const r=this.#e;We.batch(()=>{r.findAll(i).forEach(m=>{r.remove(m)})})}resetQueries(i,r){const m=this.#e;return We.batch(()=>(m.findAll(i).forEach(u=>{u.reset()}),this.refetchQueries({type:"active",...i},r)))}cancelQueries(i,r={}){const m={revert:!0,...r},u=We.batch(()=>this.#e.findAll(i).map(g=>g.cancel(m)));return Promise.all(u).then(Ea).catch(Ea)}invalidateQueries(i,r={}){return We.batch(()=>(this.#e.findAll(i).forEach(m=>{m.invalidate()}),i?.refetchType==="none"?Promise.resolve():this.refetchQueries({...i,type:i?.refetchType??i?.type??"active"},r)))}refetchQueries(i,r={}){const m={...r,cancelRefetch:r.cancelRefetch??!0},u=We.batch(()=>this.#e.findAll(i).filter(g=>!g.isDisabled()&&!g.isStatic()).map(g=>{let S=g.fetch(void 0,m);return m.throwOnError||(S=S.catch(Ea)),g.state.fetchStatus==="paused"?Promise.resolve():S}));return Promise.all(u).then(Ea)}fetchQuery(i){const r=this.defaultQueryOptions(i);r.retry===void 0&&(r.retry=!1);const m=this.#e.build(this,r);return m.isStaleByTime(Yr(r.staleTime,m))?m.fetch(r):Promise.resolve(m.state.data)}prefetchQuery(i){return this.fetchQuery(i).then(Ea).catch(Ea)}fetchInfiniteQuery(i){return i.behavior=Af(i.pages),this.fetchQuery(i)}prefetchInfiniteQuery(i){return this.fetchInfiniteQuery(i).then(Ea).catch(Ea)}ensureInfiniteQueryData(i){return i.behavior=Af(i.pages),this.ensureQueryData(i)}resumePausedMutations(){return bi.isOnline()?this.#t.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#e}getMutationCache(){return this.#t}getDefaultOptions(){return this.#a}setDefaultOptions(i){this.#a=i}setQueryDefaults(i,r){this.#o.set(Ko(i),{queryKey:i,defaultOptions:r})}getQueryDefaults(i){const r=[...this.#o.values()],m={};return r.forEach(u=>{Io(i,u.queryKey)&&Object.assign(m,u.defaultOptions)}),m}setMutationDefaults(i,r){this.#n.set(Ko(i),{mutationKey:i,defaultOptions:r})}getMutationDefaults(i){const r=[...this.#n.values()],m={};return r.forEach(u=>{Io(i,u.mutationKey)&&Object.assign(m,u.defaultOptions)}),m}defaultQueryOptions(i){if(i._defaulted)return i;const r={...this.#a.queries,...this.getQueryDefaults(i.queryKey),...i,_defaulted:!0};return r.queryHash||(r.queryHash=Wr(r.queryKey,r)),r.refetchOnReconnect===void 0&&(r.refetchOnReconnect=r.networkMode!=="always"),r.throwOnError===void 0&&(r.throwOnError=!!r.suspense),!r.networkMode&&r.persister&&(r.networkMode="offlineFirst"),r.queryFn===ec&&(r.enabled=!1),r}defaultMutationOptions(i){return i?._defaulted?i:{...this.#a.mutations,...i?.mutationKey&&this.getMutationDefaults(i.mutationKey),...i,_defaulted:!0}}clear(){this.#e.clear(),this.#t.clear()}},Ib=de.createContext(void 0),Zb=({client:i,children:r})=>(de.useEffect(()=>(i.mount(),()=>{i.unmount()}),[i]),s.jsx(Ib.Provider,{value:i,children:r}));function If(i){var r,m,u="";if(typeof i=="string"||typeof i=="number")u+=i;else if(typeof i=="object")if(Array.isArray(i)){var g=i.length;for(r=0;r<g;r++)i[r]&&(m=If(i[r]))&&(u&&(u+=" "),u+=m)}else for(m in i)i[m]&&(u&&(u+=" "),u+=m);return u}function Fb(){for(var i,r,m=0,u="",g=arguments.length;m<g;m++)(i=arguments[m])&&(r=If(i))&&(u&&(u+=" "),u+=r);return u}const Jb=(i,r)=>{const m=new Array(i.length+r.length);for(let u=0;u<i.length;u++)m[u]=i[u];for(let u=0;u<r.length;u++)m[i.length+u]=r[u];return m},Wb=(i,r)=>({classGroupId:i,validator:r}),Zf=(i=new Map,r=null,m)=>({nextPart:i,validators:r,classGroupId:m}),vi="-",Nf=[],ev="arbitrary..",av=i=>{const r=nv(i),{conflictingClassGroups:m,conflictingClassGroupModifiers:u}=i;return{getClassGroupId:D=>{if(D.startsWith("[")&&D.endsWith("]"))return tv(D);const A=D.split(vi),k=A[0]===""&&A.length>1?1:0;return Ff(A,k,r)},getConflictingClassGroupIds:(D,A)=>{if(A){const k=u[D],U=m[D];return k?U?Jb(U,k):k:U||Nf}return m[D]||Nf}}},Ff=(i,r,m)=>{if(i.length-r===0)return m.classGroupId;const g=i[r],S=m.nextPart.get(g);if(S){const U=Ff(i,r+1,S);if(U)return U}const D=m.validators;if(D===null)return;const A=r===0?i.join(vi):i.slice(r).join(vi),k=D.length;for(let U=0;U<k;U++){const R=D[U];if(R.validator(A))return R.classGroupId}},tv=i=>i.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const r=i.slice(1,-1),m=r.indexOf(":"),u=r.slice(0,m);return u?ev+u:void 0})(),nv=i=>{const{theme:r,classGroups:m}=i;return ov(m,r)},ov=(i,r)=>{const m=Zf();for(const u in i){const g=i[u];ac(g,m,u,r)}return m},ac=(i,r,m,u)=>{const g=i.length;for(let S=0;S<g;S++){const D=i[S];sv(D,r,m,u)}},sv=(i,r,m,u)=>{if(typeof i=="string"){iv(i,r,m);return}if(typeof i=="function"){lv(i,r,m,u);return}rv(i,r,m,u)},iv=(i,r,m)=>{const u=i===""?r:Jf(r,i);u.classGroupId=m},lv=(i,r,m,u)=>{if(cv(i)){ac(i(u),r,m,u);return}r.validators===null&&(r.validators=[]),r.validators.push(Wb(m,i))},rv=(i,r,m,u)=>{const g=Object.entries(i),S=g.length;for(let D=0;D<S;D++){const[A,k]=g[D];ac(k,Jf(r,A),m,u)}},Jf=(i,r)=>{let m=i;const u=r.split(vi),g=u.length;for(let S=0;S<g;S++){const D=u[S];let A=m.nextPart.get(D);A||(A=Zf(),m.nextPart.set(D,A)),m=A}return m},cv=i=>"isThemeGetter"in i&&i.isThemeGetter===!0,uv=i=>{if(i<1)return{get:()=>{},set:()=>{}};let r=0,m=Object.create(null),u=Object.create(null);const g=(S,D)=>{m[S]=D,r++,r>i&&(r=0,u=m,m=Object.create(null))};return{get(S){let D=m[S];if(D!==void 0)return D;if((D=u[S])!==void 0)return g(S,D),D},set(S,D){S in m?m[S]=D:g(S,D)}}},Ir="!",Ef=":",dv=[],wf=(i,r,m,u,g)=>({modifiers:i,hasImportantModifier:r,baseClassName:m,maybePostfixModifierPosition:u,isExternal:g}),mv=i=>{const{prefix:r,experimentalParseClassName:m}=i;let u=g=>{const S=[];let D=0,A=0,k=0,U;const R=g.length;for(let Q=0;Q<R;Q++){const Z=g[Q];if(D===0&&A===0){if(Z===Ef){S.push(g.slice(k,Q)),k=Q+1;continue}if(Z==="/"){U=Q;continue}}Z==="["?D++:Z==="]"?D--:Z==="("?A++:Z===")"&&A--}const V=S.length===0?g:g.slice(k);let _=V,W=!1;V.endsWith(Ir)?(_=V.slice(0,-1),W=!0):V.startsWith(Ir)&&(_=V.slice(1),W=!0);const I=U&&U>k?U-k:void 0;return wf(S,W,_,I)};if(r){const g=r+Ef,S=u;u=D=>D.startsWith(g)?S(D.slice(g.length)):wf(dv,!1,D,void 0,!0)}if(m){const g=u;u=S=>m({className:S,parseClassName:g})}return u},fv=i=>{const r=new Map;return i.orderSensitiveModifiers.forEach((m,u)=>{r.set(m,1e6+u)}),m=>{const u=[];let g=[];for(let S=0;S<m.length;S++){const D=m[S],A=D[0]==="[",k=r.has(D);A||k?(g.length>0&&(g.sort(),u.push(...g),g=[]),u.push(D)):g.push(D)}return g.length>0&&(g.sort(),u.push(...g)),u}},pv=i=>({cache:uv(i.cacheSize),parseClassName:mv(i),sortModifiers:fv(i),...av(i)}),hv=/\s+/,gv=(i,r)=>{const{parseClassName:m,getClassGroupId:u,getConflictingClassGroupIds:g,sortModifiers:S}=r,D=[],A=i.trim().split(hv);let k="";for(let U=A.length-1;U>=0;U-=1){const R=A[U],{isExternal:V,modifiers:_,hasImportantModifier:W,baseClassName:I,maybePostfixModifierPosition:Q}=m(R);if(V){k=R+(k.length>0?" "+k:k);continue}let Z=!!Q,oe=u(Z?I.substring(0,Q):I);if(!oe){if(!Z){k=R+(k.length>0?" "+k:k);continue}if(oe=u(I),!oe){k=R+(k.length>0?" "+k:k);continue}Z=!1}const Ge=_.length===0?"":_.length===1?_[0]:S(_).join(":"),ye=W?Ge+Ir:Ge,Ce=ye+oe;if(D.indexOf(Ce)>-1)continue;D.push(Ce);const qe=g(oe,Z);for(let we=0;we<qe.length;++we){const Fe=qe[we];D.push(ye+Fe)}k=R+(k.length>0?" "+k:k)}return k},bv=(...i)=>{let r=0,m,u,g="";for(;r<i.length;)(m=i[r++])&&(u=Wf(m))&&(g&&(g+=" "),g+=u);return g},Wf=i=>{if(typeof i=="string")return i;let r,m="";for(let u=0;u<i.length;u++)i[u]&&(r=Wf(i[u]))&&(m&&(m+=" "),m+=r);return m},vv=(i,...r)=>{let m,u,g,S;const D=k=>{const U=r.reduce((R,V)=>V(R),i());return m=pv(U),u=m.cache.get,g=m.cache.set,S=A,A(k)},A=k=>{const U=u(k);if(U)return U;const R=gv(k,m);return g(k,R),R};return S=D,(...k)=>S(bv(...k))},xv=[],Le=i=>{const r=m=>m[i]||xv;return r.isThemeGetter=!0,r},ep=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,ap=/^\((?:(\w[\w-]*):)?(.+)\)$/i,yv=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,Sv=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,jv=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Av=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,Dv=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Nv=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Nt=i=>yv.test(i),J=i=>!!i&&!Number.isNaN(Number(i)),Et=i=>!!i&&Number.isInteger(Number(i)),Qr=i=>i.endsWith("%")&&J(i.slice(0,-1)),Ja=i=>Sv.test(i),tp=()=>!0,Ev=i=>jv.test(i)&&!Av.test(i),tc=()=>!1,wv=i=>Dv.test(i),Tv=i=>Nv.test(i),kv=i=>!G(i)&&!B(i),Cv=i=>wt(i,sp,tc),G=i=>ep.test(i),Ft=i=>wt(i,ip,Ev),Tf=i=>wt(i,Gv,J),Mv=i=>wt(i,rp,tp),Rv=i=>wt(i,lp,tc),kf=i=>wt(i,np,tc),zv=i=>wt(i,op,Tv),fi=i=>wt(i,cp,wv),B=i=>ap.test(i),Yo=i=>Jt(i,ip),qv=i=>Jt(i,lp),Cf=i=>Jt(i,np),Ov=i=>Jt(i,sp),Uv=i=>Jt(i,op),pi=i=>Jt(i,cp,!0),Lv=i=>Jt(i,rp,!0),wt=(i,r,m)=>{const u=ep.exec(i);return u?u[1]?r(u[1]):m(u[2]):!1},Jt=(i,r,m=!1)=>{const u=ap.exec(i);return u?u[1]?r(u[1]):m:!1},np=i=>i==="position"||i==="percentage",op=i=>i==="image"||i==="url",sp=i=>i==="length"||i==="size"||i==="bg-size",ip=i=>i==="length",Gv=i=>i==="number",lp=i=>i==="family-name",rp=i=>i==="number"||i==="weight",cp=i=>i==="shadow",Bv=()=>{const i=Le("color"),r=Le("font"),m=Le("text"),u=Le("font-weight"),g=Le("tracking"),S=Le("leading"),D=Le("breakpoint"),A=Le("container"),k=Le("spacing"),U=Le("radius"),R=Le("shadow"),V=Le("inset-shadow"),_=Le("text-shadow"),W=Le("drop-shadow"),I=Le("blur"),Q=Le("perspective"),Z=Le("aspect"),oe=Le("ease"),Ge=Le("animate"),ye=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Ce=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],qe=()=>[...Ce(),B,G],we=()=>["auto","hidden","clip","visible","scroll"],Fe=()=>["auto","contain","none"],H=()=>[B,G,k],Me=()=>[Nt,"full","auto",...H()],Tt=()=>[Et,"none","subgrid",B,G],za=()=>["auto",{span:["full",Et,B,G]},Et,B,G],Qe=()=>[Et,"auto",B,G],kt=()=>["auto","min","max","fr",B,G],qa=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],Ke=()=>["start","end","center","stretch","center-safe","end-safe"],N=()=>["auto",...H()],q=()=>[Nt,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...H()],Y=()=>[Nt,"screen","full","dvw","lvw","svw","min","max","fit",...H()],re=()=>[Nt,"screen","full","lh","dvh","lvh","svh","min","max","fit",...H()],O=()=>[i,B,G],Be=()=>[...Ce(),Cf,kf,{position:[B,G]}],ge=()=>["no-repeat",{repeat:["","x","y","space","round"]}],ie=()=>["auto","cover","contain",Ov,Cv,{size:[B,G]}],De=()=>[Qr,Yo,Ft],be=()=>["","none","full",U,B,G],Se=()=>["",J,Yo,Ft],Oa=()=>["solid","dashed","dotted","double"],Ct=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],xe=()=>[J,Qr,Cf,kf],Wt=()=>["","none",I,B,G],Ua=()=>["none",J,B,G],Wa=()=>["none",J,B,G],Mt=()=>[J,B,G],et=()=>[Nt,"full",...H()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Ja],breakpoint:[Ja],color:[tp],container:[Ja],"drop-shadow":[Ja],ease:["in","out","in-out"],font:[kv],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Ja],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Ja],shadow:[Ja],spacing:["px",J],text:[Ja],"text-shadow":[Ja],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Nt,G,B,Z]}],container:["container"],columns:[{columns:[J,G,B,A]}],"break-after":[{"break-after":ye()}],"break-before":[{"break-before":ye()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:qe()}],overflow:[{overflow:we()}],"overflow-x":[{"overflow-x":we()}],"overflow-y":[{"overflow-y":we()}],overscroll:[{overscroll:Fe()}],"overscroll-x":[{"overscroll-x":Fe()}],"overscroll-y":[{"overscroll-y":Fe()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:Me()}],"inset-x":[{"inset-x":Me()}],"inset-y":[{"inset-y":Me()}],start:[{"inset-s":Me(),start:Me()}],end:[{"inset-e":Me(),end:Me()}],"inset-bs":[{"inset-bs":Me()}],"inset-be":[{"inset-be":Me()}],top:[{top:Me()}],right:[{right:Me()}],bottom:[{bottom:Me()}],left:[{left:Me()}],visibility:["visible","invisible","collapse"],z:[{z:[Et,"auto",B,G]}],basis:[{basis:[Nt,"full","auto",A,...H()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[J,Nt,"auto","initial","none",G]}],grow:[{grow:["",J,B,G]}],shrink:[{shrink:["",J,B,G]}],order:[{order:[Et,"first","last","none",B,G]}],"grid-cols":[{"grid-cols":Tt()}],"col-start-end":[{col:za()}],"col-start":[{"col-start":Qe()}],"col-end":[{"col-end":Qe()}],"grid-rows":[{"grid-rows":Tt()}],"row-start-end":[{row:za()}],"row-start":[{"row-start":Qe()}],"row-end":[{"row-end":Qe()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":kt()}],"auto-rows":[{"auto-rows":kt()}],gap:[{gap:H()}],"gap-x":[{"gap-x":H()}],"gap-y":[{"gap-y":H()}],"justify-content":[{justify:[...qa(),"normal"]}],"justify-items":[{"justify-items":[...Ke(),"normal"]}],"justify-self":[{"justify-self":["auto",...Ke()]}],"align-content":[{content:["normal",...qa()]}],"align-items":[{items:[...Ke(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...Ke(),{baseline:["","last"]}]}],"place-content":[{"place-content":qa()}],"place-items":[{"place-items":[...Ke(),"baseline"]}],"place-self":[{"place-self":["auto",...Ke()]}],p:[{p:H()}],px:[{px:H()}],py:[{py:H()}],ps:[{ps:H()}],pe:[{pe:H()}],pbs:[{pbs:H()}],pbe:[{pbe:H()}],pt:[{pt:H()}],pr:[{pr:H()}],pb:[{pb:H()}],pl:[{pl:H()}],m:[{m:N()}],mx:[{mx:N()}],my:[{my:N()}],ms:[{ms:N()}],me:[{me:N()}],mbs:[{mbs:N()}],mbe:[{mbe:N()}],mt:[{mt:N()}],mr:[{mr:N()}],mb:[{mb:N()}],ml:[{ml:N()}],"space-x":[{"space-x":H()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":H()}],"space-y-reverse":["space-y-reverse"],size:[{size:q()}],"inline-size":[{inline:["auto",...Y()]}],"min-inline-size":[{"min-inline":["auto",...Y()]}],"max-inline-size":[{"max-inline":["none",...Y()]}],"block-size":[{block:["auto",...re()]}],"min-block-size":[{"min-block":["auto",...re()]}],"max-block-size":[{"max-block":["none",...re()]}],w:[{w:[A,"screen",...q()]}],"min-w":[{"min-w":[A,"screen","none",...q()]}],"max-w":[{"max-w":[A,"screen","none","prose",{screen:[D]},...q()]}],h:[{h:["screen","lh",...q()]}],"min-h":[{"min-h":["screen","lh","none",...q()]}],"max-h":[{"max-h":["screen","lh",...q()]}],"font-size":[{text:["base",m,Yo,Ft]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[u,Lv,Mv]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Qr,G]}],"font-family":[{font:[qv,Rv,r]}],"font-features":[{"font-features":[G]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[g,B,G]}],"line-clamp":[{"line-clamp":[J,"none",B,Tf]}],leading:[{leading:[S,...H()]}],"list-image":[{"list-image":["none",B,G]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",B,G]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:O()}],"text-color":[{text:O()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Oa(),"wavy"]}],"text-decoration-thickness":[{decoration:[J,"from-font","auto",B,Ft]}],"text-decoration-color":[{decoration:O()}],"underline-offset":[{"underline-offset":[J,"auto",B,G]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:H()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",B,G]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",B,G]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:Be()}],"bg-repeat":[{bg:ge()}],"bg-size":[{bg:ie()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Et,B,G],radial:["",B,G],conic:[Et,B,G]},Uv,zv]}],"bg-color":[{bg:O()}],"gradient-from-pos":[{from:De()}],"gradient-via-pos":[{via:De()}],"gradient-to-pos":[{to:De()}],"gradient-from":[{from:O()}],"gradient-via":[{via:O()}],"gradient-to":[{to:O()}],rounded:[{rounded:be()}],"rounded-s":[{"rounded-s":be()}],"rounded-e":[{"rounded-e":be()}],"rounded-t":[{"rounded-t":be()}],"rounded-r":[{"rounded-r":be()}],"rounded-b":[{"rounded-b":be()}],"rounded-l":[{"rounded-l":be()}],"rounded-ss":[{"rounded-ss":be()}],"rounded-se":[{"rounded-se":be()}],"rounded-ee":[{"rounded-ee":be()}],"rounded-es":[{"rounded-es":be()}],"rounded-tl":[{"rounded-tl":be()}],"rounded-tr":[{"rounded-tr":be()}],"rounded-br":[{"rounded-br":be()}],"rounded-bl":[{"rounded-bl":be()}],"border-w":[{border:Se()}],"border-w-x":[{"border-x":Se()}],"border-w-y":[{"border-y":Se()}],"border-w-s":[{"border-s":Se()}],"border-w-e":[{"border-e":Se()}],"border-w-bs":[{"border-bs":Se()}],"border-w-be":[{"border-be":Se()}],"border-w-t":[{"border-t":Se()}],"border-w-r":[{"border-r":Se()}],"border-w-b":[{"border-b":Se()}],"border-w-l":[{"border-l":Se()}],"divide-x":[{"divide-x":Se()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Se()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...Oa(),"hidden","none"]}],"divide-style":[{divide:[...Oa(),"hidden","none"]}],"border-color":[{border:O()}],"border-color-x":[{"border-x":O()}],"border-color-y":[{"border-y":O()}],"border-color-s":[{"border-s":O()}],"border-color-e":[{"border-e":O()}],"border-color-bs":[{"border-bs":O()}],"border-color-be":[{"border-be":O()}],"border-color-t":[{"border-t":O()}],"border-color-r":[{"border-r":O()}],"border-color-b":[{"border-b":O()}],"border-color-l":[{"border-l":O()}],"divide-color":[{divide:O()}],"outline-style":[{outline:[...Oa(),"none","hidden"]}],"outline-offset":[{"outline-offset":[J,B,G]}],"outline-w":[{outline:["",J,Yo,Ft]}],"outline-color":[{outline:O()}],shadow:[{shadow:["","none",R,pi,fi]}],"shadow-color":[{shadow:O()}],"inset-shadow":[{"inset-shadow":["none",V,pi,fi]}],"inset-shadow-color":[{"inset-shadow":O()}],"ring-w":[{ring:Se()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:O()}],"ring-offset-w":[{"ring-offset":[J,Ft]}],"ring-offset-color":[{"ring-offset":O()}],"inset-ring-w":[{"inset-ring":Se()}],"inset-ring-color":[{"inset-ring":O()}],"text-shadow":[{"text-shadow":["none",_,pi,fi]}],"text-shadow-color":[{"text-shadow":O()}],opacity:[{opacity:[J,B,G]}],"mix-blend":[{"mix-blend":[...Ct(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":Ct()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[J]}],"mask-image-linear-from-pos":[{"mask-linear-from":xe()}],"mask-image-linear-to-pos":[{"mask-linear-to":xe()}],"mask-image-linear-from-color":[{"mask-linear-from":O()}],"mask-image-linear-to-color":[{"mask-linear-to":O()}],"mask-image-t-from-pos":[{"mask-t-from":xe()}],"mask-image-t-to-pos":[{"mask-t-to":xe()}],"mask-image-t-from-color":[{"mask-t-from":O()}],"mask-image-t-to-color":[{"mask-t-to":O()}],"mask-image-r-from-pos":[{"mask-r-from":xe()}],"mask-image-r-to-pos":[{"mask-r-to":xe()}],"mask-image-r-from-color":[{"mask-r-from":O()}],"mask-image-r-to-color":[{"mask-r-to":O()}],"mask-image-b-from-pos":[{"mask-b-from":xe()}],"mask-image-b-to-pos":[{"mask-b-to":xe()}],"mask-image-b-from-color":[{"mask-b-from":O()}],"mask-image-b-to-color":[{"mask-b-to":O()}],"mask-image-l-from-pos":[{"mask-l-from":xe()}],"mask-image-l-to-pos":[{"mask-l-to":xe()}],"mask-image-l-from-color":[{"mask-l-from":O()}],"mask-image-l-to-color":[{"mask-l-to":O()}],"mask-image-x-from-pos":[{"mask-x-from":xe()}],"mask-image-x-to-pos":[{"mask-x-to":xe()}],"mask-image-x-from-color":[{"mask-x-from":O()}],"mask-image-x-to-color":[{"mask-x-to":O()}],"mask-image-y-from-pos":[{"mask-y-from":xe()}],"mask-image-y-to-pos":[{"mask-y-to":xe()}],"mask-image-y-from-color":[{"mask-y-from":O()}],"mask-image-y-to-color":[{"mask-y-to":O()}],"mask-image-radial":[{"mask-radial":[B,G]}],"mask-image-radial-from-pos":[{"mask-radial-from":xe()}],"mask-image-radial-to-pos":[{"mask-radial-to":xe()}],"mask-image-radial-from-color":[{"mask-radial-from":O()}],"mask-image-radial-to-color":[{"mask-radial-to":O()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":Ce()}],"mask-image-conic-pos":[{"mask-conic":[J]}],"mask-image-conic-from-pos":[{"mask-conic-from":xe()}],"mask-image-conic-to-pos":[{"mask-conic-to":xe()}],"mask-image-conic-from-color":[{"mask-conic-from":O()}],"mask-image-conic-to-color":[{"mask-conic-to":O()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:Be()}],"mask-repeat":[{mask:ge()}],"mask-size":[{mask:ie()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",B,G]}],filter:[{filter:["","none",B,G]}],blur:[{blur:Wt()}],brightness:[{brightness:[J,B,G]}],contrast:[{contrast:[J,B,G]}],"drop-shadow":[{"drop-shadow":["","none",W,pi,fi]}],"drop-shadow-color":[{"drop-shadow":O()}],grayscale:[{grayscale:["",J,B,G]}],"hue-rotate":[{"hue-rotate":[J,B,G]}],invert:[{invert:["",J,B,G]}],saturate:[{saturate:[J,B,G]}],sepia:[{sepia:["",J,B,G]}],"backdrop-filter":[{"backdrop-filter":["","none",B,G]}],"backdrop-blur":[{"backdrop-blur":Wt()}],"backdrop-brightness":[{"backdrop-brightness":[J,B,G]}],"backdrop-contrast":[{"backdrop-contrast":[J,B,G]}],"backdrop-grayscale":[{"backdrop-grayscale":["",J,B,G]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[J,B,G]}],"backdrop-invert":[{"backdrop-invert":["",J,B,G]}],"backdrop-opacity":[{"backdrop-opacity":[J,B,G]}],"backdrop-saturate":[{"backdrop-saturate":[J,B,G]}],"backdrop-sepia":[{"backdrop-sepia":["",J,B,G]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":H()}],"border-spacing-x":[{"border-spacing-x":H()}],"border-spacing-y":[{"border-spacing-y":H()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",B,G]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[J,"initial",B,G]}],ease:[{ease:["linear","initial",oe,B,G]}],delay:[{delay:[J,B,G]}],animate:[{animate:["none",Ge,B,G]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[Q,B,G]}],"perspective-origin":[{"perspective-origin":qe()}],rotate:[{rotate:Ua()}],"rotate-x":[{"rotate-x":Ua()}],"rotate-y":[{"rotate-y":Ua()}],"rotate-z":[{"rotate-z":Ua()}],scale:[{scale:Wa()}],"scale-x":[{"scale-x":Wa()}],"scale-y":[{"scale-y":Wa()}],"scale-z":[{"scale-z":Wa()}],"scale-3d":["scale-3d"],skew:[{skew:Mt()}],"skew-x":[{"skew-x":Mt()}],"skew-y":[{"skew-y":Mt()}],transform:[{transform:[B,G,"","none","gpu","cpu"]}],"transform-origin":[{origin:qe()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:et()}],"translate-x":[{"translate-x":et()}],"translate-y":[{"translate-y":et()}],"translate-z":[{"translate-z":et()}],"translate-none":["translate-none"],accent:[{accent:O()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:O()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",B,G]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":H()}],"scroll-mx":[{"scroll-mx":H()}],"scroll-my":[{"scroll-my":H()}],"scroll-ms":[{"scroll-ms":H()}],"scroll-me":[{"scroll-me":H()}],"scroll-mbs":[{"scroll-mbs":H()}],"scroll-mbe":[{"scroll-mbe":H()}],"scroll-mt":[{"scroll-mt":H()}],"scroll-mr":[{"scroll-mr":H()}],"scroll-mb":[{"scroll-mb":H()}],"scroll-ml":[{"scroll-ml":H()}],"scroll-p":[{"scroll-p":H()}],"scroll-px":[{"scroll-px":H()}],"scroll-py":[{"scroll-py":H()}],"scroll-ps":[{"scroll-ps":H()}],"scroll-pe":[{"scroll-pe":H()}],"scroll-pbs":[{"scroll-pbs":H()}],"scroll-pbe":[{"scroll-pbe":H()}],"scroll-pt":[{"scroll-pt":H()}],"scroll-pr":[{"scroll-pr":H()}],"scroll-pb":[{"scroll-pb":H()}],"scroll-pl":[{"scroll-pl":H()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",B,G]}],fill:[{fill:["none",...O()]}],"stroke-w":[{stroke:[J,Yo,Ft,Tf]}],stroke:[{stroke:["none",...O()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},_v=vv(Bv);function xi(...i){return _v(Fb(i))}const Hv=[{title:"Introdução",items:[{path:"/",label:"Início",icon:Im},{path:"/historia",label:"História do Debian",icon:qg},{path:"/filosofia",label:"Filosofia & Versões",icon:Zm}]},{title:"Instalação",items:[{path:"/instalacao",label:"Guia de Instalação",icon:Ho},{path:"/primeiros-passos",label:"Primeiros Passos",icon:Fm},{path:"/boas-vindas",label:"Pós-Instalação",icon:Vo}]},{title:"Terminal & Fundamentos",items:[{path:"/terminal",label:"Introdução ao Terminal",icon:_n},{path:"/navegacao",label:"Navegação de Arquivos",icon:hi},{path:"/manipulacao-arquivos",label:"Manipulação de Arquivos",icon:di},{path:"/visualizar-arquivos",label:"Visualização de Arquivos",icon:di},{path:"/editor-texto",label:"Editores de Texto",icon:Zm},{path:"/redirecionamento",label:"Pipes & Redirecionamento",icon:_n},{path:"/localizacao",label:"Localização de Arquivos",icon:hi},{path:"/compressao",label:"Compressão & Empacotamento",icon:qr},{path:"/links-simbolicos",label:"Links Simbólicos",icon:di}]},{title:"Sistema de Arquivos",items:[{path:"/sistema-arquivos",label:"Hierarquia FHS",icon:Or},{path:"/permissoes",label:"Permissões & ACL",icon:Hn},{path:"/disco",label:"Discos & Partições",icon:Ho},{path:"/montagem",label:"Montagem de Volumes",icon:Ho},{path:"/lvm",label:"LVM (Volumes Lógicos)",icon:Or},{path:"/raid",label:"RAID por Software",icon:Ho}]},{title:"Kernel & Boot",items:[{path:"/grub",label:"GRUB Bootloader",icon:Vo},{path:"/kernel",label:"Kernel do Linux",icon:Ur},{path:"/systemd",label:"Systemd & Serviços",icon:Vo},{path:"/logs-sistema",label:"Logs do Sistema",icon:di}]},{title:"Administração",items:[{path:"/processos",label:"Processos & Jobs",icon:Ur},{path:"/usuarios",label:"Usuários",icon:Jm},{path:"/grupos",label:"Grupos",icon:Jm},{path:"/sudo",label:"Sudo & Privilégios",icon:Hn},{path:"/agendamento",label:"Agendamento de Tarefas",icon:Fm},{path:"/variaveis-ambiente",label:"Variáveis de Ambiente",icon:_n}]},{title:"Gerenciamento de Pacotes",items:[{path:"/apt",label:"APT (Completo)",icon:Po},{path:"/dpkg",label:"DPKG & Pacotes .deb",icon:Po},{path:"/apt-avancado",label:"APT Avançado",icon:Po},{path:"/snap",label:"Snap",icon:Po},{path:"/flatpak",label:"Flatpak",icon:Po},{path:"/compilacao",label:"Compilar do Código-Fonte",icon:Zt},{path:"/repos",label:"Repositórios Extras",icon:Wm}]},{title:"Rede",items:[{path:"/rede-basica",label:"Rede Básica",icon:Lr},{path:"/network-manager",label:"NetworkManager",icon:Lr},{path:"/ssh",label:"SSH (Cliente)",icon:_n},{path:"/firewall",label:"Firewall (UFW/iptables)",icon:Hn},{path:"/transferir-arquivos",label:"Transferência de Arquivos",icon:qr},{path:"/dns",label:"DNS & Resolução",icon:Lr},{path:"/vpn",label:"VPN (OpenVPN/WireGuard)",icon:Gr}]},{title:"Segurança",items:[{path:"/seguranca",label:"Hardening & Boas Práticas",icon:Hn},{path:"/apparmor",label:"AppArmor",icon:Gr},{path:"/gpg",label:"GPG & Criptografia",icon:Gr},{path:"/criptografia",label:"LUKS & Discos Cifrados",icon:Ho},{path:"/seguranca-ssh",label:"SSH Hardening",icon:Hn},{path:"/fail2ban",label:"Fail2ban",icon:Hn},{path:"/auditoria",label:"Auditoria do Sistema",icon:ef}]},{title:"Ambiente Gráfico",items:[{path:"/ambiente-grafico",label:"Visão Geral dos DEs",icon:Qo},{path:"/gnome",label:"GNOME",icon:Qo},{path:"/kde",label:"KDE Plasma",icon:Qo},{path:"/xfce",label:"XFCE",icon:Qo},{path:"/display-server",label:"X11 & Wayland",icon:Qo},{path:"/impressora",label:"Impressoras (CUPS)",icon:Vo}]},{title:"Scripting & Shell",items:[{path:"/shell-bash",label:"Shell Bash",icon:_n},{path:"/bash-avancado",label:"Bash Avançado",icon:_n},{path:"/scripts-praticos",label:"Scripts Práticos",icon:Zt},{path:"/regex",label:"Regex & grep/sed/awk",icon:hi},{path:"/depuracao-bash",label:"Depuração de Scripts",icon:af}]},{title:"Servidores",items:[{path:"/servidor-apache",label:"Apache2",icon:Vn},{path:"/servidor-nginx",label:"Nginx",icon:Vn},{path:"/servidor-ssh",label:"Servidor SSH",icon:Vn},{path:"/servidor-samba",label:"Samba (Compartilhamento)",icon:Vn},{path:"/servidor-nfs",label:"NFS",icon:Vn},{path:"/banco-mysql",label:"MySQL / MariaDB",icon:tf},{path:"/banco-postgresql",label:"PostgreSQL",icon:tf},{path:"/docker",label:"Docker & Containers",icon:Or},{path:"/servidor-email",label:"Servidor de E-mail",icon:Vn}]},{title:"Desenvolvimento",items:[{path:"/ambiente-dev",label:"Ambiente de Desenvolvimento",icon:Zt},{path:"/git",label:"Git",icon:Zt},{path:"/python",label:"Python",icon:Zt},{path:"/nodejs",label:"Node.js",icon:Zt},{path:"/java",label:"Java",icon:Zt}]},{title:"Manutenção",items:[{path:"/backup",label:"Backup & Restauração",icon:qr},{path:"/monitoramento",label:"Monitoramento",icon:ef},{path:"/performance",label:"Performance & Tuning",icon:Ur},{path:"/troubleshooting",label:"Troubleshooting",icon:af},{path:"/atualizacao",label:"Atualizações do Sistema",icon:Vo}]},{title:"Referências",items:[{path:"/referencias",label:"Referências & Recursos",icon:Og},{path:"/ref-rapida",label:"Referência Rápida",icon:Wm},{path:"/glossario",label:"Glossário",icon:Im}]}];function Vv({isOpen:i,setIsOpen:r}){const[m]=gb();return s.jsxs(s.Fragment,{children:[i&&s.jsx("div",{className:"fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden",onClick:()=>r(!1)}),s.jsxs("aside",{className:xi("fixed top-0 bottom-0 left-0 z-50 w-72 bg-card border-r border-border transition-transform duration-300 ease-in-out lg:translate-x-0 overflow-y-auto",i?"translate-x-0":"-translate-x-full"),children:[s.jsx("div",{className:"sticky top-0 bg-card z-10 px-5 py-4 border-b border-border",children:s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"w-9 h-9 rounded-xl flex items-center justify-center font-bold text-lg",style:{background:"linear-gradient(135deg, #A80030 60%, #CC0040 100%)"},children:s.jsx("span",{className:"text-white text-xl",children:"🐧"})}),s.jsxs("div",{children:[s.jsx("div",{className:"font-bold text-foreground text-base leading-tight",children:"Debian Linux"}),s.jsx("div",{className:"text-xs text-muted-foreground",children:"Guia Completo"})]})]})}),s.jsx("nav",{className:"px-3 py-4 pb-10",children:Hv.map(u=>s.jsxs("div",{className:"mb-4",children:[s.jsx("div",{className:"px-3 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider",children:u.title}),s.jsx("ul",{children:u.items.map(g=>{const S=g.icon,D=m===g.path;return s.jsx("li",{children:s.jsx(gi,{href:g.path,children:s.jsxs("a",{className:xi("flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-all duration-150 mb-0.5 cursor-pointer",D?"bg-primary/10 text-primary font-medium":"text-muted-foreground hover:text-foreground hover:bg-muted"),children:[s.jsx(S,{className:"w-4 h-4 shrink-0"}),s.jsx("span",{children:g.label})]})})},g.path)})})]},u.title))})]})]})}function Pv(){const[i,r]=de.useState(()=>{if(typeof window<"u"){const m=localStorage.getItem("theme");if(m==="dark"||m==="light")return m;if(window.matchMedia("(prefers-color-scheme: dark)").matches)return"dark"}return"dark"});return de.useEffect(()=>{const m=window.document.documentElement;m.classList.remove("light","dark"),m.classList.add(i),localStorage.setItem("theme",i)},[i]),{theme:i,setTheme:r,toggleTheme:()=>r(m=>m==="dark"?"light":"dark")}}function Qv({onMenuClick:i}){const{theme:r,toggleTheme:m}=Pv();return s.jsxs("header",{className:"sticky top-0 z-30 w-full glass-panel border-b border-border px-4 sm:px-6 h-16 flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx("button",{onClick:i,className:"lg:hidden p-2 -ml-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors",children:s.jsx(Ug,{className:"w-5 h-5"})}),s.jsxs("button",{className:"hidden sm:flex items-center gap-2 px-3 py-1.5 bg-muted/50 hover:bg-muted border border-border rounded-lg text-sm text-muted-foreground transition-colors w-64",children:[s.jsx(hi,{className:"w-4 h-4"}),s.jsx("span",{children:"Pesquisar conteúdo..."}),s.jsx("span",{className:"ml-auto text-xs opacity-50 border border-border rounded px-1.5 py-0.5",children:"Ctrl+K"})]})]}),s.jsx("div",{className:"flex items-center gap-2",children:s.jsx("button",{onClick:m,className:"p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors",title:"Alternar tema",children:r==="dark"?s.jsx(Lg,{className:"w-5 h-5"}):s.jsx(Gg,{className:"w-5 h-5"})})})]})}function Xv({level:i}){const r={iniciante:"bg-secondary/10 text-secondary border-secondary/20",intermediario:"bg-yellow-500/10 text-yellow-500 border-yellow-500/20",avancado:"bg-red-500/10 text-red-500 border-red-500/20"},m={iniciante:"Iniciante",intermediario:"Intermediário",avancado:"Avançado"};return s.jsx("span",{className:xi("px-3 py-1 text-xs font-semibold rounded-full border",r[i]),children:m[i]})}function z({title:i,subtitle:r,difficulty:m,timeToRead:u,children:g}){const[S,D]=de.useState(0);return de.useEffect(()=>{const A=()=>{const k=document.documentElement.scrollTop,U=document.documentElement.scrollHeight-document.documentElement.clientHeight,R=`${k/U}`;D(Number(R))};return window.addEventListener("scroll",A),()=>window.removeEventListener("scroll",A)},[]),s.jsxs("div",{className:"max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 pb-24",children:[s.jsx("div",{className:"fixed top-0 left-0 h-1 bg-primary z-50 transition-all duration-150 ease-out",style:{width:`${S*100}%`}}),s.jsxs(Rg.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.4},children:[s.jsxs("header",{className:"mb-12",children:[s.jsxs("div",{className:"flex flex-wrap items-center gap-4 mb-4",children:[m&&s.jsx(Xv,{level:m}),u&&s.jsxs("span",{className:"text-sm text-muted-foreground font-medium flex items-center gap-1.5",children:["⏱ ",u," de leitura"]})]}),s.jsx("h1",{className:"text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-4",children:i}),r&&s.jsx("p",{className:"text-xl text-muted-foreground leading-relaxed",children:r})]}),s.jsx("div",{className:"prose prose-invert max-w-none",children:g})]})]})}const Yv={'pre[class*="language-"]':{color:"#d4d4d4",fontSize:"13px",textShadow:"none",fontFamily:'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",background:"#1e1e1e"},'code[class*="language-"]':{color:"#d4d4d4",fontSize:"13px",textShadow:"none",fontFamily:'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]::selection':{textShadow:"none",background:"#264F78"},'code[class*="language-"]::selection':{textShadow:"none",background:"#264F78"},'pre[class*="language-"] *::selection':{textShadow:"none",background:"#264F78"},'code[class*="language-"] *::selection':{textShadow:"none",background:"#264F78"},':not(pre) > code[class*="language-"]':{padding:".1em .3em",borderRadius:".3em",color:"#db4c69",background:"#1e1e1e"},".namespace":{Opacity:".7"},"doctype.doctype-tag":{color:"#569CD6"},"doctype.name":{color:"#9cdcfe"},comment:{color:"#6a9955"},prolog:{color:"#6a9955"},punctuation:{color:"#d4d4d4"},".language-html .language-css .token.punctuation":{color:"#d4d4d4"},".language-html .language-javascript .token.punctuation":{color:"#d4d4d4"},property:{color:"#9cdcfe"},tag:{color:"#569cd6"},boolean:{color:"#569cd6"},number:{color:"#b5cea8"},constant:{color:"#9cdcfe"},symbol:{color:"#b5cea8"},inserted:{color:"#b5cea8"},unit:{color:"#b5cea8"},selector:{color:"#d7ba7d"},"attr-name":{color:"#9cdcfe"},string:{color:"#ce9178"},char:{color:"#ce9178"},builtin:{color:"#ce9178"},deleted:{color:"#ce9178"},".language-css .token.string.url":{textDecoration:"underline"},operator:{color:"#d4d4d4"},entity:{color:"#569cd6"},"operator.arrow":{color:"#569CD6"},atrule:{color:"#ce9178"},"atrule.rule":{color:"#c586c0"},"atrule.url":{color:"#9cdcfe"},"atrule.url.function":{color:"#dcdcaa"},"atrule.url.punctuation":{color:"#d4d4d4"},keyword:{color:"#569CD6"},"keyword.module":{color:"#c586c0"},"keyword.control-flow":{color:"#c586c0"},function:{color:"#dcdcaa"},"function.maybe-class-name":{color:"#dcdcaa"},regex:{color:"#d16969"},important:{color:"#569cd6"},italic:{fontStyle:"italic"},"class-name":{color:"#4ec9b0"},"maybe-class-name":{color:"#4ec9b0"},console:{color:"#9cdcfe"},parameter:{color:"#9cdcfe"},interpolation:{color:"#9cdcfe"},"punctuation.interpolation-punctuation":{color:"#569cd6"},variable:{color:"#9cdcfe"},"imports.maybe-class-name":{color:"#9cdcfe"},"exports.maybe-class-name":{color:"#9cdcfe"},escape:{color:"#d7ba7d"},"tag.punctuation":{color:"#808080"},cdata:{color:"#808080"},"attr-value":{color:"#ce9178"},"attr-value.punctuation":{color:"#ce9178"},"attr-value.punctuation.attr-equals":{color:"#d4d4d4"},namespace:{color:"#4ec9b0"},'pre[class*="language-javascript"]':{color:"#9cdcfe"},'code[class*="language-javascript"]':{color:"#9cdcfe"},'pre[class*="language-jsx"]':{color:"#9cdcfe"},'code[class*="language-jsx"]':{color:"#9cdcfe"},'pre[class*="language-typescript"]':{color:"#9cdcfe"},'code[class*="language-typescript"]':{color:"#9cdcfe"},'pre[class*="language-tsx"]':{color:"#9cdcfe"},'code[class*="language-tsx"]':{color:"#9cdcfe"},'pre[class*="language-css"]':{color:"#ce9178"},'code[class*="language-css"]':{color:"#ce9178"},'pre[class*="language-html"]':{color:"#d4d4d4"},'code[class*="language-html"]':{color:"#d4d4d4"},".language-regex .token.anchor":{color:"#dcdcaa"},".language-html .token.punctuation":{color:"#808080"},'pre[class*="language-"] > code[class*="language-"]':{position:"relative",zIndex:"1"},".line-highlight.line-highlight":{background:"#f7ebc6",boxShadow:"inset 5px 0 0 #f7d87c",zIndex:"0"}};function f({code:i,language:r="bash",title:m}){const[u,g]=de.useState(!1),S=()=>{navigator.clipboard.writeText(i),g(!0),setTimeout(()=>g(!1),2e3)};return s.jsxs("div",{className:"my-6 rounded-xl overflow-hidden bg-[#1e1e1e] border border-border shadow-lg",children:[s.jsxs("div",{className:"flex items-center justify-between px-4 py-2 bg-[#2d2d2d] border-b border-white/5",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsxs("div",{className:"flex gap-1.5",children:[s.jsx("div",{className:"w-3 h-3 rounded-full bg-red-500/80"}),s.jsx("div",{className:"w-3 h-3 rounded-full bg-yellow-500/80"}),s.jsx("div",{className:"w-3 h-3 rounded-full bg-green-500/80"})]}),m&&s.jsx("span",{className:"ml-2 text-xs font-mono text-gray-400",children:m}),!m&&s.jsx("span",{className:"ml-2 text-xs font-mono text-gray-500 lowercase",children:r})]}),s.jsx("button",{onClick:S,className:"p-1.5 rounded-md text-gray-400 hover:text-white hover:bg-white/10 transition-colors",title:"Copiar código",children:u?s.jsx(Bg,{className:"w-4 h-4 text-secondary"}):s.jsx(_g,{className:"w-4 h-4"})})]}),s.jsx("div",{className:"p-4 text-sm font-mono overflow-x-auto",children:s.jsx(Yg,{language:r,style:Yv,customStyle:{margin:0,padding:0,background:"transparent"},wrapLines:!0,children:i.trim()})})]})}const $v={info:"bg-blue-500/10 border-blue-500/20 text-blue-400",warning:"bg-yellow-500/10 border-yellow-500/20 text-yellow-400",danger:"bg-red-500/10 border-red-500/20 text-red-400",success:"bg-secondary/10 border-secondary/20 text-secondary"},Kv={info:Qg,warning:Pg,danger:Vg,success:Hg};function M({type:i="info",title:r,children:m,className:u}){const g=Kv[i];return s.jsxs("div",{className:xi("rounded-xl border p-5 my-6 flex gap-4 items-start",$v[i],u),children:[s.jsx(g,{className:"w-6 h-6 shrink-0 mt-0.5"}),s.jsxs("div",{className:"flex-1",children:[s.jsx("h5",{className:"font-semibold text-foreground mb-1",children:r}),s.jsx("div",{className:"text-sm opacity-90 leading-relaxed text-foreground/80",children:m})]})]})}const Iv=[{title:"Iniciantes",icon:"📖",desc:"Comece pela Instalação, Primeiros Passos e Terminal.",path:"/instalacao"},{title:"Intermediários",icon:"⚙️",desc:"Explore APT, Systemd, Rede e Scripting.",path:"/apt"},{title:"Administradores",icon:"🔒",desc:"Segurança, Servidores, LVM, RAID e Monitoramento.",path:"/seguranca"},{title:"Desenvolvedores",icon:"💻",desc:"Git, Python, Node.js, Docker e Ambiente de Dev.",path:"/docker"}],Zv=[{path:"/historia",label:"História do Debian"},{path:"/instalacao",label:"Instalação Completa"},{path:"/apt",label:"APT (Pacotes)"},{path:"/systemd",label:"Systemd"},{path:"/seguranca",label:"Segurança"},{path:"/docker",label:"Docker"},{path:"/servidor-apache",label:"Apache2"},{path:"/servidor-nginx",label:"Nginx"},{path:"/banco-mysql",label:"MySQL/MariaDB"},{path:"/bash-avancado",label:"Bash Avançado"},{path:"/lvm",label:"LVM"},{path:"/ref-rapida",label:"Referência Rápida"}],Fv=`# Gerenciamento de pacotes
sudo apt update && sudo apt upgrade -y
sudo apt install nginx mariadb-server git

# Rede e firewall
ip addr show
sudo ufw enable && sudo ufw allow 22/tcp

# Serviços com systemd
sudo systemctl enable --now nginx
sudo systemctl status mariadb

# Backup e monitoramento
rsync -avz /home/ /mnt/backup/
journalctl -f`;function Jv(){return s.jsxs(z,{title:"Debian Linux — Guia Completo",subtitle:"Tudo sobre o Debian: do iniciante ao administrador de servidores. Documentação prática, exemplos reais e referências em Português Brasileiro.",difficulty:"iniciante",timeToRead:"5 min",children:[s.jsx(M,{type:"success",title:"Bem-vindo ao Guia Completo do Debian!",children:"Este livro cobre desde a instalação básica até administração avançada de servidores, segurança, scripting e desenvolvimento. São mais de 75 capítulos com exemplos práticos e detalhes aprofundados."}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Por que Debian?"}),s.jsx("p",{className:"text-muted-foreground mb-4",children:"O Debian é uma das distribuições Linux mais antigas e respeitadas, fundado em 1993. É a base do Ubuntu, Raspberry Pi OS, Kali Linux, MX Linux e Proxmox — entre centenas de outras distros. Servidores críticos ao redor do mundo rodam Debian, incluindo parte da infraestrutura da Wikipedia."}),s.jsxs("p",{className:"text-muted-foreground mb-6",children:["Com mais de ",s.jsx("strong",{children:"59.000 pacotes"})," nos repositórios e suporte de longo prazo (LTS), o Debian é a escolha ideal tanto para desktops quanto para servidores de produção."]}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Por onde começar?"}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-8",children:Iv.map(i=>s.jsx(gi,{href:i.path,children:s.jsxs("a",{className:"block p-5 rounded-xl border border-border bg-card hover:bg-primary/10 hover:border-primary/30 transition-colors",children:[s.jsx("div",{className:"text-2xl mb-2",children:i.icon}),s.jsx("div",{className:"font-semibold mb-1",children:i.title}),s.jsx("p",{className:"text-sm text-muted-foreground",children:i.desc})]})},i.path))}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Comandos que você vai dominar"}),s.jsx(f,{language:"bash",title:"Exemplos práticos do que você vai aprender",code:Fv}),s.jsxs(M,{type:"info",title:"Versão de referência",children:["Este guia usa como base o ",s.jsx("strong",{children:'Debian 12 "Bookworm"'})," (lançado em junho de 2023). A maioria dos conceitos aplica-se a todas as versões do Debian e derivados como Ubuntu."]}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Acesso rápido aos tópicos"}),s.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-3",children:Zv.map(i=>s.jsx(gi,{href:i.path,children:s.jsx("a",{className:"block p-3 rounded-lg border border-border bg-card hover:bg-primary/10 hover:border-primary/30 transition-colors text-sm font-medium text-center",children:i.label})},i.path))})]})}const Wv=[{ano:"1993",evento:"Ian Murdock funda o Debian. Primeira versão 0.01 publicada."},{ano:"1994",evento:"FSF patrocina o projeto. Versão 0.91."},{ano:"1996",evento:"Debian 1.1 Buzz — primeiro codinome do Toy Story."},{ano:"2005",evento:"Debian 3.1 Sarge — debian-installer moderno."},{ano:"2007",evento:"Debian 4.0 Etch — suporte oficial a AMD64."},{ano:"2015",evento:"Debian 8.0 Jessie — Systemd como init padrão."},{ano:"2019",evento:"Debian 10.0 Buster — AppArmor habilitado por padrão."},{ano:"2021",evento:"Debian 11.0 Bullseye — suporte oficial ao Raspberry Pi."},{ano:"2023",evento:"Debian 12.0 Bookworm — firmware non-free no instalador."}],ex=[{title:"Ubuntu",desc:"Baseado no Debian unstable. Distro para desktop mais popular do mundo."},{title:"Raspberry Pi OS",desc:"Sistema oficial do Raspberry Pi, baseado no Debian Bookworm."},{title:"Kali Linux",desc:"Distro de segurança cibernética baseada no Debian testing."},{title:"MX Linux",desc:"Distro de alta performance, frequentemente no topo do DistroWatch."},{title:"Proxmox VE",desc:"Plataforma de virtualização empresarial baseada no Debian."},{title:"PureOS",desc:"Distro 100% livre da Purism, certificada pela FSF."}],ax=`cat /etc/debian_version
lsb_release -a
cat /etc/os-release`;function tx(){return s.jsxs(z,{title:"História do Debian",subtitle:"A origem, evolução e o impacto de uma das distribuições Linux mais influentes do mundo",difficulty:"iniciante",timeToRead:"12 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"O Nascimento (1993)"}),s.jsxs("p",{className:"text-muted-foreground mb-4",children:["O Debian foi fundado por ",s.jsx("strong",{children:"Ian Murdock"})," em 16 de agosto de 1993 na Purdue University. O nome combina ",s.jsx("em",{children:"Deb"}),"ra Lynn (sua namorada) + ",s.jsx("em",{children:"Ian"})," = ",s.jsx("strong",{children:"Debian"}),". O Manifesto Debian de outubro de 1993 estabeleceu a visão de uma distribuição criada e mantida pela comunidade."]}),s.jsx(M,{type:"success",title:"Legado de Ian Murdock",children:"Ian Murdock faleceu em 28 de dezembro de 2015. Seu legado é o Debian — prova de que uma comunidade global pode criar software de nível empresarial de forma aberta e colaborativa."}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Linha do Tempo"}),s.jsx("div",{className:"space-y-3 mb-8",children:Wv.map(i=>s.jsxs("div",{className:"flex gap-4 p-3 rounded-lg border border-border bg-card",children:[s.jsx("div",{className:"font-bold text-primary w-12 shrink-0",children:i.ano}),s.jsx("div",{className:"text-sm text-muted-foreground",children:i.evento})]},i.ano))}),s.jsx(f,{language:"bash",title:"Identificar a versão",code:ax}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Distros baseadas no Debian"}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:ex.map(i=>s.jsxs("div",{className:"p-4 rounded-xl border border-border bg-card",children:[s.jsx("div",{className:"font-semibold text-primary mb-1",children:i.title}),s.jsx("p",{className:"text-sm text-muted-foreground",children:i.desc})]},i.title))}),s.jsx(M,{type:"info",title:"Codinomes: Toy Story",children:"Todos os codinomes do Debian são personagens do Toy Story. Sid é o menino que destrói brinquedos — por isso é o nome da versão instável!"})]})}const nx=[{nome:"Stable",codinome:"Bookworm (12)",cor:"text-green-400",desc:"Produção. Pacotes testados extensivamente. Apenas updates de segurança.",uso:"Servidores, produção"},{nome:"Testing",codinome:"Trixie (13)",cor:"text-yellow-400",desc:"Próxima stable em preparação. Pacotes mais novos, testes em andamento.",uso:"Desktops avançados"},{nome:"Unstable",codinome:"Sid (sempre)",cor:"text-red-400",desc:"Desenvolvimento contínuo. Sid nunca se torna stable. Pode ser instável.",uso:"Desenvolvedores"}],ox=[{nome:"main",desc:"Software 100% livre conforme as DFSG. Sistema base completo."},{nome:"contrib",desc:"Software livre que depende de componentes não-livres."},{nome:"non-free",desc:"Não segue as DFSG. Drivers NVIDIA, firmwares proprietários."},{nome:"non-free-firmware",desc:"Introduzido no Debian 12. Firmware de hardware separado."}],sx=`cat /etc/apt/sources.list
# Exemplo de sources.list para Debian 12
deb http://deb.debian.org/debian/ bookworm main contrib non-free non-free-firmware
deb http://security.debian.org/debian-security bookworm-security main contrib non-free non-free-firmware
deb http://deb.debian.org/debian/ bookworm-updates main contrib non-free non-free-firmware`,ix=`# Adicionar backports ao sources.list
echo "deb http://deb.debian.org/debian bookworm-backports main" | sudo tee /etc/apt/sources.list.d/backports.list
sudo apt update
# Instalar pacote dos backports
sudo apt install -t bookworm-backports nome-do-pacote
# Ver versões disponíveis
apt-cache policy nome-do-pacote`;function lx(){return s.jsxs(z,{title:"Filosofia & Versões",subtitle:"Entenda as três versões do Debian, os repositórios, as DFSG e como escolher a versão certa",difficulty:"iniciante",timeToRead:"10 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"As Três Versões do Debian"}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-8",children:nx.map(i=>s.jsxs("div",{className:"p-5 rounded-xl border border-border bg-card",children:[s.jsx("div",{className:"text-xl font-bold mb-1 "+i.cor,children:i.nome}),s.jsx("div",{className:"text-xs text-muted-foreground mb-2",children:i.codinome}),s.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:i.desc}),s.jsxs("div",{className:"text-xs font-medium text-primary",children:["Uso: ",i.uso]})]},i.nome))}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Repositórios"}),s.jsx("div",{className:"space-y-3 mb-6",children:ox.map(i=>s.jsxs("div",{className:"p-4 rounded-xl border border-border bg-card",children:[s.jsx("code",{className:"text-primary font-mono text-sm",children:i.nome}),s.jsx("p",{className:"text-sm text-muted-foreground mt-1",children:i.desc})]},i.nome))}),s.jsx(f,{language:"bash",title:"Configurar sources.list",code:sx}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"DFSG — Diretrizes de Software Livre"}),s.jsx("p",{className:"text-muted-foreground mb-4",children:'As Debian Free Software Guidelines definem o que é "software livre" para o projeto. Inspiraram a Definição de Open Source (OSI). Para ser livre, o software deve permitir: redistribuição livre, acesso ao código-fonte, obras derivadas, e sem discriminação de pessoas ou campos de atuação.'}),s.jsx(M,{type:"info",title:"Por que isso importa?",children:"Entender a filosofia do Debian explica por que firmware está em non-free, por que certas versões têm software mais antigo, e por que estabilidade é prioridade máxima sobre novidade."}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Backports"}),s.jsx("p",{className:"text-muted-foreground mb-4",children:"Backports são versões mais novas de pacotes portadas para o Stable. Permitem software atual sem abrir mão da estabilidade."}),s.jsx(f,{language:"bash",title:"Configurar e usar backports",code:ix})]})}const rx=[{item:"RAM",min:"512 MB",rec:"2 GB ou mais"},{item:"Disco",min:"10 GB",rec:"20 GB ou mais"},{item:"CPU",min:"1 GHz",rec:"Qualquer CPU x86_64 moderna"},{item:"Internet",min:"Opcional",rec:"Recomendada para updates"}],cx=`# Verificar hash do ISO baixado
sha256sum debian-12.x.x-amd64-netinst.iso

# Gravar em USB com dd (Linux/Mac)
sudo dd if=debian-12.x.x-amd64-netinst.iso of=/dev/sdX bs=4M status=progress oflag=sync

# Ou usar balenaEtcher (Windows/Linux/Mac) — mais fácil
# Baixar em: https://etcher.balena.io/`,ux=`# Tipos de ISO disponíveis:
# netinst — ~400MB, baixa pacotes durante instalação (recomendado)
# DVD — ~3.7GB, instalação offline completa
# live — ambiente ao vivo sem instalar

# URL de download: https://www.debian.org/download
# Para AMD64: https://cdimage.debian.org/debian-cd/current/amd64/iso-cd/`,dx=`# Após a instalação, verificar o sistema
uname -a                      # Info do kernel
lsb_release -a                # Versão do Debian
df -h                         # Espaço em disco
free -h                       # Memória RAM
ip addr show                  # Interfaces de rede
lscpu                         # Informações da CPU
lsblk                         # Dispositivos de bloco (discos)`;function mx(){return s.jsxs(z,{title:"Guia de Instalação do Debian",subtitle:"Passo a passo completo para instalar o Debian 12 Bookworm do zero",difficulty:"iniciante",timeToRead:"20 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Requisitos de Sistema"}),s.jsx("div",{className:"overflow-x-auto mb-6",children:s.jsxs("table",{className:"w-full text-sm border-collapse",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"border-b border-border",children:[s.jsx("th",{className:"text-left py-2 px-3 text-muted-foreground font-medium",children:"Componente"}),s.jsx("th",{className:"text-left py-2 px-3 text-muted-foreground font-medium",children:"Mínimo"}),s.jsx("th",{className:"text-left py-2 px-3 text-muted-foreground font-medium",children:"Recomendado"})]})}),s.jsx("tbody",{children:rx.map(i=>s.jsxs("tr",{className:"border-b border-border/50 hover:bg-muted/30",children:[s.jsx("td",{className:"py-2 px-3 font-medium",children:i.item}),s.jsx("td",{className:"py-2 px-3 text-muted-foreground",children:i.min}),s.jsx("td",{className:"py-2 px-3 text-green-400",children:i.rec})]},i.item))})]})}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"1. Baixar o ISO"}),s.jsx(f,{language:"bash",title:"Tipos de ISO disponíveis",code:ux}),s.jsxs(M,{type:"info",title:"Qual ISO escolher?",children:["Para a maioria dos usuários, o ",s.jsx("strong",{children:"netinst"})," (instalação via rede) é a melhor opção. É menor, mais rápido de baixar e instala sempre os pacotes mais atuais."]}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"2. Criar Mídia Bootável"}),s.jsx(f,{language:"bash",title:"Gravar ISO em USB",code:cx}),s.jsx(M,{type:"warning",title:"Atenção!",children:"O comando dd substitui todo o conteúdo do dispositivo. Certifique-se de que /dev/sdX é o seu USB (use lsblk para confirmar), nunca o disco do sistema!"}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"3. Processo de Instalação (Passo a Passo)"}),s.jsx("div",{className:"space-y-4 mb-6",children:[{n:"1",title:"Boot pelo USB",desc:"Configure a BIOS/UEFI para bootar pelo USB. Pressione F12, F2, Del ou ESC durante o boot para acessar o menu de boot."},{n:"2",title:"Seleção de Idioma",desc:"Escolha Português Brasileiro para interface e teclado em português."},{n:"3",title:"Configuração de Rede",desc:"O instalador detectará automaticamente interfaces de rede. Configure Wi-Fi ou Ethernet."},{n:"4",title:"Usuário e Senha",desc:"Crie um usuário padrão (não root) e defina senhas. Recomendado: senha root diferente do usuário."},{n:"5",title:"Particionamento",desc:"Para iniciantes: use 'Guiado — usar o disco todo'. Para avançados: particionamento manual com /boot, /, /home e swap."},{n:"6",title:"Seleção de Pacotes",desc:"Tasksel: escolha o ambiente de desktop (GNOME, KDE, XFCE) e 'utilitários de sistema padrão'. Para servidor: desmarque todos os ambientes."},{n:"7",title:"Instalação do GRUB",desc:"Instale o GRUB no disco principal (geralmente /dev/sda ou /dev/nvme0n1)."},{n:"8",title:"Reinicialização",desc:"Remova o USB e reinicie. O sistema deve bootar pelo GRUB normalmente."}].map(i=>s.jsxs("div",{className:"flex gap-4 p-4 rounded-xl border border-border bg-card",children:[s.jsx("div",{className:"w-8 h-8 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center shrink-0 text-sm",children:i.n}),s.jsxs("div",{children:[s.jsx("div",{className:"font-semibold mb-1",children:i.title}),s.jsx("p",{className:"text-sm text-muted-foreground",children:i.desc})]})]},i.n))}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"4. Verificar a Instalação"}),s.jsx(f,{language:"bash",title:"Comandos de verificação pós-instalação",code:dx}),s.jsxs(M,{type:"success",title:"Instalação concluída!",children:["Depois de instalar, acesse a seção ",s.jsx("strong",{children:"Primeiros Passos"})," para configurar o sistema básico e ",s.jsx("strong",{children:"Pós-Instalação"})," para as configurações essenciais recomendadas."]})]})}const fx=`# Atualizar o sistema completamente
sudo apt update            # Baixa lista de pacotes
sudo apt upgrade -y        # Atualiza pacotes instalados
sudo apt full-upgrade -y   # Atualiza com resolução de dependências

# Ver kernel atual
uname -r

# Verificar espaço em disco
df -h

# Verificar memória
free -h`,px=`# Instalar pacotes essenciais
sudo apt install -y \\
  curl wget git vim nano \\
  htop iotop net-tools \\
  build-essential \\
  ca-certificates gnupg \\
  software-properties-common \\
  apt-transport-https \\
  unzip zip p7zip-full \\
  tree lsof strace`,hx=`# Configurar sudo para o seu usuário (se não configurado)
su -                               # Entrar como root
apt install sudo                   # Instalar sudo
usermod -aG sudo nome_usuario      # Adicionar ao grupo sudo
exit                               # Sair do root

# Verificar se sudo está funcionando
sudo whoami                        # Deve retornar 'root'`,gx=`# Configurar timezone
sudo timedatectl set-timezone America/Sao_Paulo
timedatectl status

# Configurar hostname
sudo hostnamectl set-hostname meu-servidor
cat /etc/hostname

# Configurar locale (idioma)
sudo dpkg-reconfigure locales      # Interface gráfica
# Ou manualmente:
sudo locale-gen pt_BR.UTF-8
sudo update-locale LANG=pt_BR.UTF-8`;function bx(){return s.jsxs(z,{title:"Primeiros Passos no Debian",subtitle:"Configure o sistema básico logo após a instalação: atualizações, pacotes essenciais, sudo e configurações regionais",difficulty:"iniciante",timeToRead:"15 min",children:[s.jsx(M,{type:"info",title:"Primeiro acesso",children:"Depois de instalar o Debian, faça login com o usuário que você criou durante a instalação. Para abrir o terminal, procure por 'Terminal' nas aplicações ou pressione Ctrl+Alt+T."}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"1. Atualizar o Sistema"}),s.jsx("p",{className:"text-muted-foreground mb-4",children:"A primeira coisa após instalar é sempre atualizar o sistema. Isso garante que você tem os patches de segurança mais recentes e as versões atuais dos pacotes."}),s.jsx(f,{language:"bash",title:"Atualizar o sistema",code:fx}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"2. Configurar Sudo"}),s.jsx("p",{className:"text-muted-foreground mb-4",children:"O Debian não adiciona o usuário ao grupo sudo automaticamente durante a instalação. Você precisa fazer isso manualmente."}),s.jsx(f,{language:"bash",title:"Configurar sudo",code:hx}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"3. Instalar Pacotes Essenciais"}),s.jsx(f,{language:"bash",title:"Pacotes fundamentais",code:px}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"4. Configurações Regionais"}),s.jsx(f,{language:"bash",title:"Timezone, hostname e locale",code:gx}),s.jsxs(M,{type:"success",title:"Próximos passos",children:["Com o sistema atualizado e configurado, acesse ",s.jsx("strong",{children:"Pós-Instalação"})," para dicas adicionais de configuração, ou vá direto para ",s.jsx("strong",{children:"APT"})," para aprender a gerenciar pacotes com detalhes."]})]})}const vx=`# Verificar drivers de hardware
sudo lspci -k                    # Dispositivos PCI e drivers
sudo lshw -short                 # Hardware resumido
sudo lsusb                       # Dispositivos USB

# Verificar se o Wi-Fi funciona
ip link show
nmcli dev status

# Instalar firmware adicional se necessário
sudo apt install firmware-linux firmware-linux-nonfree
# Para Wi-Fi Intel
sudo apt install firmware-iwlwifi
# Para Wi-Fi Realtek
sudo apt install firmware-realtek`,xx=`# Configurar UFW (firewall)
sudo apt install ufw
sudo ufw enable
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh                # Porta 22
sudo ufw status verbose

# Habilitar atualizações automáticas de segurança
sudo apt install unattended-upgrades
sudo dpkg-reconfigure -plow unattended-upgrades`,yx=`# Instalar ambiente gráfico (se instalou sem GUI)
sudo apt install task-gnome-desktop    # GNOME completo
# OU
sudo apt install task-kde-desktop      # KDE Plasma
# OU
sudo apt install task-xfce-desktop     # XFCE (leve)

# Instalar apps essenciais para desktop
sudo apt install firefox-esr vlc gimp libreoffice \\
  thunderbird transmission-gtk flatpak`,Sx=`# Configurar Flatpak (para apps atualizados)
sudo apt install flatpak gnome-software-plugin-flatpak
flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
# Reiniciar após isso

# Apps populares via Flatpak
flatpak install flathub com.spotify.Client
flatpak install flathub com.discordapp.Discord
flatpak install flathub md.obsidian.Obsidian`,jx=[{title:"Atualize regularmente",desc:"Execute sudo apt update && sudo apt upgrade toda semana para manter o sistema seguro."},{title:"Use sudo, não root",desc:"Evite trabalhar como root. Use sudo para comandos administrativos e seu usuário normal para o dia a dia."},{title:"Faça backups",desc:"Configure um backup regular desde o início. Use rsync, Timeshift ou Duplicati."},{title:"Monitore os logs",desc:"Aprenda a usar journalctl para ver logs do sistema e identificar problemas."},{title:"Documente suas mudanças",desc:"Anote os comandos que você executar para configurar o sistema. Um script de setup é ainda melhor."}];function Ax(){return s.jsxs(z,{title:"Pós-Instalação",subtitle:"Configurações recomendadas logo após instalar o Debian: drivers, firewall, apps essenciais e boas práticas",difficulty:"iniciante",timeToRead:"15 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Verificar Drivers de Hardware"}),s.jsx(f,{language:"bash",title:"Hardware e drivers",code:vx}),s.jsx(M,{type:"warning",title:"Firmware non-free",children:"Se algum hardware não funcionar (especialmente Wi-Fi), você pode precisar de firmware proprietário. O Debian 12 inclui um instalador com firmware non-free que resolve a maioria dos casos."}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Configurar Segurança Básica"}),s.jsx(f,{language:"bash",title:"Firewall e atualizações automáticas",code:xx}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Ambiente Gráfico e Apps"}),s.jsx(f,{language:"bash",title:"Instalar desktop e aplicativos",code:yx}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Flatpak para Apps Modernos"}),s.jsx(f,{language:"bash",title:"Configurar Flatpak e instalar apps",code:Sx}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Boas Práticas desde o Início"}),s.jsx("div",{className:"space-y-4 mb-6",children:jx.map(i=>s.jsxs("div",{className:"p-4 rounded-xl border border-border bg-card",children:[s.jsx("div",{className:"font-semibold mb-1",children:i.title}),s.jsx("p",{className:"text-sm text-muted-foreground",children:i.desc})]},i.title))})]})}const Dx=`# Estrutura básica de um comando Linux:
# comando [opções] [argumentos]
ls -la /home
#  ^    ^^    ^
# cmd  opts  argumento

# Exemplos
ls                    # listar arquivos
ls -l                 # listagem longa
ls -la                # listar todos (incluindo ocultos)
ls -lh                # tamanhos legíveis por humanos
ls -lt                # ordenar por data
ls -lS                # ordenar por tamanho`,Nx=`# Atalhos de teclado essenciais no terminal
Ctrl+C         # Cancelar o comando atual
Ctrl+D         # Encerrar o terminal / EOF
Ctrl+Z         # Suspender processo (vai para background)
Ctrl+L         # Limpar a tela (equivale ao 'clear')
Ctrl+A         # Ir para o início da linha
Ctrl+E         # Ir para o final da linha
Ctrl+U         # Apagar da posição atual até o início
Ctrl+K         # Apagar da posição atual até o fim
Ctrl+W         # Apagar a palavra anterior
Ctrl+R         # Busca reversa no histórico
Tab            # Auto-completar comandos e caminhos
Tab Tab        # Ver todas as opções de completar
Up/Down        # Navegar no histórico de comandos
!123           # Executar comando número 123 do histórico
!!             # Repetir o último comando
sudo !!        # Repetir o último comando com sudo`,Ex=`# Obtendo ajuda
man ls           # Manual completo do ls
ls --help        # Ajuda rápida
info bash        # Documentação detalhada do bash
apropos palavra  # Buscar comandos por palavra-chave
whatis ls        # Descrição de um linha do comando
type ls          # Tipo do comando (built-in, alias, etc.)

# Histórico de comandos
history                # Ver todo o histórico
history | grep apt     # Filtrar histórico
history 20             # Ver os últimos 20 comandos
HISTSIZE=10000         # Configurar tamanho do histórico`,wx=`# Variáveis especiais do shell
$HOME          # Diretório home do usuário (/home/usuario)
$USER          # Nome do usuário atual
$PWD           # Diretório atual
$PATH          # Caminhos de busca de executáveis
$SHELL         # Shell atual (ex: /bin/bash)
$?             # Código de saída do último comando (0 = sucesso)
$             # PID do processo atual
$!             # PID do último processo em background

# Exemplos
echo $HOME
echo $USER
echo "Estou em: $PWD"
echo "Último exit code: $?"`;function Tx(){return s.jsxs(z,{title:"Introdução ao Terminal",subtitle:"Aprenda a usar o terminal Linux: estrutura de comandos, atalhos, histórico e como obter ajuda",difficulty:"iniciante",timeToRead:"18 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"O que é o Terminal?"}),s.jsxs("p",{className:"text-muted-foreground mb-4",children:["O terminal (também chamado de linha de comando, CLI ou shell) é a interface de texto onde você digita comandos que o sistema executa. É mais poderoso, rápido e scriptável do que qualquer interface gráfica. No Debian, o terminal padrão usa o ",s.jsx("strong",{children:"Bash"})," (Bourne Again Shell)."]}),s.jsx(M,{type:"info",title:"Terminal vs Shell vs Console",children:"Terminal é o emulador de terminal (programa gráfico). Shell é o interpretador de comandos (Bash, Zsh, Fish). Console é o terminal em modo texto (sem GUI). Geralmente usamos os termos de forma intercambiável."}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Estrutura de Comandos"}),s.jsx(f,{language:"bash",title:"Anatomia de um comando",code:Dx}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Atalhos Essenciais"}),s.jsx(f,{language:"bash",title:"Atalhos de teclado no terminal",code:Nx}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Obtendo Ajuda"}),s.jsx(f,{language:"bash",title:"Sistemas de ajuda",code:Ex}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Variáveis do Shell"}),s.jsx(f,{language:"bash",title:"Variáveis especiais",code:wx}),s.jsx(M,{type:"success",title:"Próximos passos",children:"Com o terminal dominado, vá para Navegação de Arquivos para aprender ls, cd, pwd e como se mover pelo sistema de arquivos do Debian."})]})}const kx=`pwd
pwd                      # onde voce esta
ls                       # listar arquivos
ls -l                    # listagem longa
ls -la                   # incluir ocultos
ls -lh                   # tamanhos legiveis
ls -lt                   # ordenar por data
ls -lS                   # ordenar por tamanho`,Cx=`cd /etc                  # ir para /etc
cd ~                     # ir para home
cd ..                    # subir um nivel
cd -                     # voltar ao dir anterior
cd /var/log              # caminho absoluto`,Mx=`/          # raiz do sistema
/home      # diretorios dos usuarios
/etc       # configuracoes do sistema
/var       # dados variaveis (logs, spool)
/tmp       # temporarios (apagados no boot)
/usr       # programas e bibliotecas
/bin       # binarios essenciais
/opt       # software de terceiros
/proc      # info do kernel (virtual)`;function Rx(){return s.jsxs(z,{title:"Navegacao de Arquivos",subtitle:"Domine pwd, ls e cd para navegar pelo sistema de arquivos do Debian",difficulty:"iniciante",timeToRead:"15 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Listando Arquivos — ls"}),s.jsx(f,{language:"bash",title:"Usando ls",code:kx}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Mudando de Diretorio — cd"}),s.jsx(f,{language:"bash",title:"Usando cd",code:Cx}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Estrutura de Diretorios do Linux (FHS)"}),s.jsx(f,{language:"bash",title:"Hierarquia FHS",code:Mx}),s.jsx(M,{type:"info",title:"Dica",children:"Use Tab para auto-completar nomes de arquivos e diretorios. Pressione Tab duas vezes para ver todas as opcoes disponíveis."})]})}const zx=`mkdir documentos
mkdir -p projetos/app/src
mkdir dir1 dir2 dir3`,qx=`touch arquivo.txt
echo "conteudo" > arquivo.txt
cp origem.txt destino.txt
cp -r pasta/ nova-pasta/
cp -p arquivo.txt copia.txt`,Ox=`mv arquivo.txt /tmp/
mv velho.txt novo.txt
rm arquivo.txt
rm -r pasta/
rm -rf pasta/
rm -i arquivo.txt`,Ux=`stat arquivo.txt
file foto.jpg
wc -l arquivo.txt
wc -w arquivo.txt
diff arquivo1.txt arquivo2.txt`;function Lx(){return s.jsxs(z,{title:"Manipulacao de Arquivos",subtitle:"Crie, copie, mova e exclua arquivos e diretorios com seguranca no Debian",difficulty:"iniciante",timeToRead:"18 min",children:[s.jsx(M,{type:"danger",title:"rm e irreversivel!",children:"Arquivos removidos com rm sao permanentemente apagados — sem lixeira. Sempre verifique o caminho antes de executar rm -rf."}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Criar Diretorios — mkdir"}),s.jsx(f,{language:"bash",title:"Criando diretorios",code:zx}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Criar e Copiar — touch, cp"}),s.jsx(f,{language:"bash",title:"Criar e copiar",code:qx}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Mover e Remover — mv, rm"}),s.jsx(f,{language:"bash",title:"Mover e remover",code:Ox}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Informacoes sobre Arquivos"}),s.jsx(f,{language:"bash",title:"stat, file, wc, diff",code:Ux}),s.jsx(M,{type:"info",title:"Alias de seguranca",children:"Adicione alias rm='rm -i' no ~/.bashrc para sempre pedir confirmacao antes de remover."})]})}const Gx=`cat arquivo.txt
cat -n arquivo.txt
cat arq1.txt arq2.txt
tac arquivo.txt`,Bx=`less arquivo.txt
# dentro do less: q=sair, Space=proxima pagina, b=anterior, /=buscar, n=proximo, g=inicio, G=fim
more arquivo.txt`,_x=`head arquivo.txt
head -n 20 arquivo.txt
tail arquivo.txt
tail -n 20 arquivo.txt
tail -f /var/log/syslog
tail -F /var/log/nginx/access.log`,Hx=`grep "erro" /var/log/syslog
grep -i "error" arquivo.txt
grep -n "padrao" arquivo.txt
grep -r "texto" /etc/
grep -v "comentario" arquivo.txt
grep -A3 "erro" log.txt
grep -E "ip[0-9]+" interfaces`;function Vx(){return s.jsxs(z,{title:"Visualizacao de Arquivos",subtitle:"Domine cat, less, head, tail e grep para ler e buscar conteudo em arquivos no Debian",difficulty:"iniciante",timeToRead:"15 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Exibir Conteudo — cat"}),s.jsx(f,{language:"bash",title:"Usando cat",code:Gx}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Paginador — less"}),s.jsx(M,{type:"success",title:"Use less, nao more",children:"O less permite voltar, buscar e navegar livremente. E o padrao para leitura de arquivos grandes."}),s.jsx(f,{language:"bash",title:"Usando less e more",code:Bx}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Primeiras e Ultimas Linhas — head/tail"}),s.jsx(f,{language:"bash",title:"head e tail",code:_x}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Busca em Arquivos — grep"}),s.jsx(f,{language:"bash",title:"grep",code:Hx}),s.jsx(M,{type:"info",title:"tail -f para logs",children:"tail -f monitora logs em tempo real. Combine com grep: tail -f /var/log/syslog | grep error"})]})}const Px=`nano arquivo.txt
# Ctrl+O=Salvar Ctrl+X=Sair Ctrl+W=Buscar Ctrl+K=Recortar Ctrl+U=Colar
nano /etc/ssh/sshd_config`,Qx=`vim arquivo.txt
# Modos: Normal(padrao), Insert(i), Visual(v), Command(:)
# Para inserir texto: pressione i
# Para salvar e sair: Esc depois :wq
# Para sair sem salvar: Esc depois :q!
# Para buscar: /palavra depois n para proximo
# dd=deletar linha, yy=copiar linha, p=colar, u=desfazer`,Xx=`# Instalar editores extras
sudo apt install vim      # vim completo
sudo apt install micro     # moderno, intuitivo (como nano mas melhor)
sudo apt install emacs     # poderoso, extensivel
sudo apt install mcedit    # editor do Midnight Commander
# Configurar editor padrao
export EDITOR=nano         # adicione ao ~/.bashrc
sudo update-alternatives --config editor`;function Yx(){return s.jsxs(z,{title:"Editores de Texto no Terminal",subtitle:"Aprenda nano para uso diario e vim para dominio total da edicao de texto no Debian",difficulty:"iniciante",timeToRead:"20 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Nano — O Editor Amigavel"}),s.jsx("p",{className:"text-muted-foreground mb-4",children:"O nano e o editor padrao para iniciantes. Simples, mostra atalhos na tela e nao tem modos. Ideal para editar arquivos de configuracao."}),s.jsx(f,{language:"bash",title:"Usando nano",code:Px}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Vim — O Editor Profissional"}),s.jsx(M,{type:"warning",title:"Como sair do vim?",children:"Digite :q! e pressione Enter. Esta e a piada classica do Linux — mais de 2 milhoes de pessoas pesquisam isso no Stack Overflow!"}),s.jsx("p",{className:"text-muted-foreground mb-4",children:"O vim usa modos: Normal (navegacao), Insert (digitar texto), Visual (selecionar), Command (executar comandos). Isso o torna extremamente eficiente uma vez dominado."}),s.jsx(f,{language:"bash",title:"Vim basico",code:Qx}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Outros Editores"}),s.jsx(f,{language:"bash",title:"Alternativas",code:Xx})]})}const $x=`ls -l > lista.txt
ls -l >> lista.txt
echo "linha" >> arquivo.txt
ls /inexistente 2> erro.txt
ls /inexistente 2>/dev/null
ls /etc /inexistente &> tudo.txt`,Kx=`ls -la | grep ".txt"
ps aux | grep nginx
cat /etc/passwd | sort | head -20
du -sh /var/log/* | sort -h | tail -10
free -m | grep Mem
ip addr | grep "inet "
apt list --installed | grep python`,Ix=`ls -l | tee lista.txt
apt upgrade 2>&1 | tee update.log
ls *.txt | xargs wc -l
find . -name "*.log" | xargs rm
files=$(ls /etc/*.conf)
echo "Hoje e: $(date)"
lines=$(wc -l < arquivo.txt)`;function Zx(){return s.jsxs(z,{title:"Pipes e Redirecionamento",subtitle:"Domine o redirecionamento de I/O e o pipe para combinar comandos de forma poderosa no Linux",difficulty:"intermediario",timeToRead:"18 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Redirecionamento de Entrada e Saida"}),s.jsx("p",{className:"text-muted-foreground mb-4",children:"Todo processo tem 3 streams: stdin (0-entrada), stdout (1-saida), stderr (2-erros). O redirecionamento controla para onde cada stream vai."}),s.jsx(f,{language:"bash",title:"Operadores de redirecionamento",code:$x}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"O Pipe — Conectando Comandos"}),s.jsx("p",{className:"text-muted-foreground mb-4",children:"O pipe (|) e a filosofia Unix em acao: encadeie comandos simples para criar processamentos poderosos."}),s.jsx(f,{language:"bash",title:"Usando o pipe",code:Kx}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"tee, xargs e Substituicao de Comandos"}),s.jsx(f,{language:"bash",title:"Ferramentas avancadas",code:Ix}),s.jsx(M,{type:"success",title:"A Filosofia Unix",children:"O poder do Linux esta em combinar ferramentas simples com pipe. grep, sort, awk, sed, cut, uniq — cada uma faz uma coisa bem e podem ser combinadas infinitamente."})]})}const Fx=`find /home -name "*.txt"
find / -name "sshd_config"
find /etc -type f -name "*.conf"
find /home -user joao
find /tmp -mtime -1
find /var -size +10M
find . -name "*.sh" -exec chmod +x {} \\;`,Jx=`sudo apt install mlocate
sudo updatedb
locate sshd_config
locate -i nome
which python3
which -a python
whereis ls`,Wx=`grep -r "PermitRootLogin" /etc
grep -rl "password" /etc
find / -type f -size +100M 2>/dev/null
find /etc -mtime -7 -type f
du -sh /var/log/* | sort -h | tail -20`;function ey(){return s.jsxs(z,{title:"Localizacao de Arquivos",subtitle:"Domine find, locate, which e grep para encontrar qualquer arquivo ou conteudo no Debian",difficulty:"intermediario",timeToRead:"15 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"find — Busca Detalhada"}),s.jsx("p",{className:"text-muted-foreground mb-4",children:"O find percorre a arvore de diretorios e busca por nome, tipo, tamanho, data, permissao e muito mais. E um dos comandos mais versateis do Linux."}),s.jsx(f,{language:"bash",title:"Usando find",code:Fx}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"locate e which"}),s.jsx(f,{language:"bash",title:"Busca rapida",code:Jx}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Busca por Conteudo"}),s.jsx(f,{language:"bash",title:"Buscas avancadas",code:Wx}),s.jsx(M,{type:"info",title:"find vs locate",children:"Use locate para buscas rapidas do dia a dia. Use find para filtros detalhados ou para executar acoes nos resultados com -exec."})]})}const ay=`tar -czf arquivo.tar.gz pasta/
tar -xzf arquivo.tar.gz
tar -xzf arquivo.tar.gz -C /destino/
tar -cjf arquivo.tar.bz2 pasta/
tar -xjf arquivo.tar.bz2
tar -cJf arquivo.tar.xz pasta/
tar -tzf arquivo.tar.gz`,ty=`gzip arquivo.txt
gzip -k arquivo.txt
gunzip arquivo.txt.gz
gzip -l arquivo.txt.gz
bzip2 arquivo.txt
bunzip2 arquivo.txt.bz2
xz arquivo.txt
unxz arquivo.txt.xz`,ny=`sudo apt install zip unzip p7zip-full
zip arquivo.zip arquivo.txt
zip -r pasta.zip pasta/
zip -e protegido.zip arquivo.txt
unzip arquivo.zip
unzip arquivo.zip -d /destino/
7z a arquivo.7z pasta/
7z x arquivo.7z
7z a -pSENHA arquivo.7z pasta/`;function oy(){return s.jsxs(z,{title:"Compressao e Empacotamento",subtitle:"Domine tar, gzip, bzip2, xz, zip e 7z para comprimir e extrair arquivos no Debian",difficulty:"iniciante",timeToRead:"15 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"tar — O Empacotador Universal"}),s.jsx(f,{language:"bash",title:"Usando tar",code:ay}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"gzip, bzip2 e xz"}),s.jsx(f,{language:"bash",title:"Compressores individuais",code:ty}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"zip e 7z"}),s.jsx(f,{language:"bash",title:"Formatos compativeis com Windows",code:ny}),s.jsx(M,{type:"info",title:"Qual formato usar?",children:"Linux: .tar.gz ou .tar.xz. Compatibilidade Windows: .zip. Maxima compressao: .7z ou .tar.xz. Backups: .tar.gz e o padrao."})]})}const sy=`ln -s /caminho/original /caminho/link
ln -s /usr/local/nginx/sbin/nginx /usr/local/bin/nginx
ln -s /var/www/html /home/usuario/www
ls -la /caminho/link
readlink /caminho/link
readlink -f /caminho/link`,iy=`ln /arquivo/original /arquivo/link
ls -li arquivo_original link_fisico
# Se deletar o original:
# Soft link: fica quebrado (dangling link)
# Hard link: dados preservados`,ly=`# Habilitar site no Nginx
ln -s /etc/nginx/sites-available/meusite /etc/nginx/sites-enabled/
# Habilitar site no Apache2 (comando equivalente)
a2ensite meusite
# Gerenciar alternativas de versao
sudo update-alternatives --config python3
# Remover link (nao usar rm -r!)
rm /caminho/link
unlink /caminho/link`;function ry(){return s.jsxs(z,{title:"Links Simbolicos",subtitle:"Entenda e use links simbolicos e fisicos para organizar arquivos e configurar servicos no Debian",difficulty:"intermediario",timeToRead:"12 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Links Simbolicos (Soft Links)"}),s.jsx("p",{className:"text-muted-foreground mb-4",children:"Um link simbolico e como um atalho. Se o original for deletado, o link fica quebrado. Amplamente usados para configuracao de servicos (nginx, apache2, systemd)."}),s.jsx(f,{language:"bash",title:"Criando e verificando soft links",code:sy}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Links Fisicos (Hard Links)"}),s.jsx(f,{language:"bash",title:"Hard links",code:iy}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Casos de Uso no Debian"}),s.jsx(f,{language:"bash",title:"Links na pratica",code:ly}),s.jsx(M,{type:"info",title:"Dica do Debian",children:"O Debian usa links simbolicos extensivamente: /etc/nginx/sites-enabled/ sao links para sites-available/, e /etc/alternatives/ gerencia versoes padrao de programas."})]})}const cy=[{dir:"/",desc:"Raiz do sistema. Tudo começa aqui."},{dir:"/bin",desc:"Binarios essenciais: ls, cp, mv, cat, bash"},{dir:"/boot",desc:"Arquivos de boot: kernel, initrd, GRUB"},{dir:"/dev",desc:"Dispositivos: /dev/sda, /dev/tty, /dev/null"},{dir:"/etc",desc:"Configuracoes do sistema: fstab, hosts, passwd, ssh/"},{dir:"/home",desc:"Diretorios dos usuarios: /home/joao, /home/maria"},{dir:"/lib",desc:"Bibliotecas compartilhadas (.so files)"},{dir:"/media",desc:"Montagem automatica de midia removivel (USB, CD)"},{dir:"/mnt",desc:"Ponto de montagem temporario"},{dir:"/opt",desc:"Software de terceiros opcional (Google Chrome, etc)"},{dir:"/proc",desc:"Sistema de arquivos virtual — info do kernel e processos"},{dir:"/root",desc:"Home do usuario root"},{dir:"/run",desc:"Dados de runtime (desde o boot)"},{dir:"/sbin",desc:"Binarios do sistema: fdisk, fsck, ifconfig"},{dir:"/srv",desc:"Dados de servicos (web, ftp)"},{dir:"/sys",desc:"Interface com o kernel (dispositivos, modulos)"},{dir:"/tmp",desc:"Arquivos temporarios (apagados no boot ou periodicamente)"},{dir:"/usr",desc:"Unix System Resources: programas, libs, man pages"},{dir:"/var",desc:"Dados variaveis: logs (/var/log), cache, spool, www"}],uy=`df -h                        # Espaco em disco de todos os filesystems
df -h /home                  # Espaco de particao especifica
du -sh /var/log/             # Tamanho total do diretorio
du -sh /var/log/*            # Tamanho de cada item dentro
du -sh /* 2>/dev/null | sort -h  # Maior consumidor de espaco
lsblk                        # Listar dispositivos de bloco
blkid                        # UUID e tipo de filesystem dos dispositivos
findmnt                      # Ver montagens atuais`,dy=`# Tipos de Filesystem suportados no Debian
ext4       # Padrao do Linux, confiavel, journaling
btrfs     # Copy-on-Write, snapshots, RAID nativo
xfs       # Alto desempenho para arquivos grandes
zfs       # Avancado, snapshots, deduplicacao (via DKMS)
vfat/fat32 # Compatibilidade com Windows/USB
exfat     # Para grandes arquivos em USB
ntfs      # Leitura/escrita de particoes Windows
tmpfs     # Em memoria RAM (/tmp, /run)

# Verificar filesystem de uma particao
blkid /dev/sda1
stat -f /home`;function my(){return s.jsxs(z,{title:"Hierarquia do Sistema de Arquivos",subtitle:"Entenda a estrutura FHS do Debian, os tipos de filesystem, e ferramentas de analise de disco",difficulty:"iniciante",timeToRead:"15 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"FHS — Filesystem Hierarchy Standard"}),s.jsx("p",{className:"text-muted-foreground mb-4",children:"O FHS define onde cada tipo de arquivo deve ficar no Linux. Conhecer essa estrutura e fundamental para administrar o sistema."}),s.jsx("div",{className:"space-y-2 mb-8",children:cy.map(i=>s.jsxs("div",{className:"flex gap-4 p-3 rounded-lg border border-border bg-card",children:[s.jsx("code",{className:"text-primary font-mono text-sm w-24 shrink-0",children:i.dir}),s.jsx("div",{className:"text-sm text-muted-foreground",children:i.desc})]},i.dir))}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Analisar Espaco em Disco"}),s.jsx(f,{language:"bash",title:"df e du",code:uy}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Tipos de Filesystem"}),s.jsx(f,{language:"bash",title:"Filesystems suportados",code:dy}),s.jsx(M,{type:"info",title:"Filesystem padrao do Debian",children:"O Debian usa ext4 por padrao, com suporte a journaling para recuperacao em caso de falha de energia. O btrfs e uma alternativa moderna com snapshots nativos."})]})}const fy=`ls -l arquivo.txt
# -rwxrw-r-- 1 joao vendas 4096 jan 10 15:30 arquivo.txt
#  ||||||||| ^ ^^^^ ^^^^^^
#  |||||||||  user  group
#  |         numero de hard links
#  |
# Primeiro char: - arquivo, d dir, l link
# Proximos 9: rwx rwx rwx (dono, grupo, outros)
# r=read(4) w=write(2) x=execute(1)`,py=`chmod 755 arquivo          # rwxr-xr-x
chmod 644 arquivo          # rw-r--r--
chmod 600 chave.pem        # rw------- (chaves SSH!)
chmod +x script.sh         # Adicionar exec para todos
chmod u+x script.sh        # Adicionar exec apenas pro dono
chmod g-w arquivo          # Remover write do grupo
chmod o=r arquivo          # Outros: apenas leitura
chmod -R 755 pasta/        # Recursivo`,hy=`chown usuario arquivo         # Mudar dono
chown usuario:grupo arquivo   # Mudar dono e grupo
chown -R www-data:www-data /var/www/  # Recursivo (web)
chgrp grupo arquivo           # Mudar apenas o grupo
id                            # Ver uid, gid do usuario atual
groups                        # Ver grupos do usuario`,gy=`# Bits especiais
chmod u+s programa    # SetUID — executa com permissoes do dono
chmod g+s pasta/      # SetGID — novos arquivos herdam o grupo
chmod +t /tmp         # Sticky bit — apenas dono pode apagar

# ACL — Controle de Acesso Avancado
sudo apt install acl
getfacl arquivo              # Ver ACL
setfacl -m u:joao:rwx arq   # Dar rwx ao usuario joao
setfacl -m g:dev:rx pasta/  # Dar rx ao grupo dev
setfacl -R -m u:joao:rx pasta/  # Recursivo
setfacl -x u:joao arq       # Remover entrada ACL`,by=[{o:"777",s:"rwxrwxrwx",uso:"Nunca use! Inseguro"},{o:"755",s:"rwxr-xr-x",uso:"Diretorios publicos, executaveis"},{o:"644",s:"rw-r--r--",uso:"Arquivos de texto, configs"},{o:"600",s:"rw-------",uso:"Chaves SSH, arquivos privados"},{o:"700",s:"rwx------",uso:"Diretorios privados"},{o:"640",s:"rw-r-----",uso:"Config de grupo restrito"},{o:"000",s:"---------",uso:"Sem acesso (inutilizavel sem root)"}];function vy(){return s.jsxs(z,{title:"Permissoes e ACL",subtitle:"Domine chmod, chown, grupos e ACLs para controlar o acesso a arquivos no Debian com seguranca",difficulty:"intermediario",timeToRead:"20 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Entendendo as Permissoes"}),s.jsx(f,{language:"bash",title:"Lendo as permissoes",code:fy}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"chmod — Modificar Permissoes"}),s.jsx(f,{language:"bash",title:"Usando chmod",code:py}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Tabela de Permissoes Octal"}),s.jsx("div",{className:"overflow-x-auto mb-6",children:s.jsxs("table",{className:"w-full text-sm border-collapse",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"border-b border-border",children:[s.jsx("th",{className:"text-left py-2 px-3",children:"Octal"}),s.jsx("th",{className:"text-left py-2 px-3",children:"Simbolico"}),s.jsx("th",{className:"text-left py-2 px-3",children:"Uso Tipico"})]})}),s.jsx("tbody",{children:by.map(i=>s.jsxs("tr",{className:"border-b border-border/50 hover:bg-muted/30",children:[s.jsx("td",{className:"py-2 px-3 font-mono text-primary",children:i.o}),s.jsx("td",{className:"py-2 px-3 font-mono",children:i.s}),s.jsx("td",{className:"py-2 px-3 text-muted-foreground",children:i.uso})]},i.o))})]})}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"chown — Mudar Proprietario"}),s.jsx(f,{language:"bash",title:"Usando chown",code:hy}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Bits Especiais e ACL"}),s.jsx(f,{language:"bash",title:"SetUID, SetGID, Sticky e ACL",code:gy})]})}const xy=`lsblk                        # Listar dispositivos de bloco
lsblk -f                     # Com filesystem e UUID
blkid                        # UUID, tipo, label de cada particao
fdisk -l                     # Listar todos os discos e particoes
fdisk -l /dev/sda            # Disco especifico
df -h                        # Uso de espaco por particao
smartctl -a /dev/sda         # Saude do disco (SMART)
sudo apt install smartmontools  # Instalar smartctl`,yy=`# fdisk — particionar discos MBR/GPT
sudo fdisk /dev/sdb
# Comandos dentro do fdisk:
# n = nova particao
# d = deletar particao
# p = listar particoes
# t = mudar tipo
# w = salvar e sair
# q = sair sem salvar

# parted — alternativa moderna
sudo parted /dev/sdb
sudo parted /dev/sdb mklabel gpt
sudo parted /dev/sdb mkpart primary ext4 0% 100%

# gdisk — para discos GPT
sudo gdisk /dev/sdb`,Sy=`# Formatar particoes
sudo mkfs.ext4 /dev/sdb1         # ext4 (padrao Linux)
sudo mkfs.ext4 -L "DADOS" /dev/sdb1  # Com label
sudo mkfs.btrfs /dev/sdb1        # btrfs
sudo mkfs.vfat /dev/sdb1         # FAT32 (USB)
sudo mkswap /dev/sdb2            # Swap
sudo swapon /dev/sdb2            # Ativar swap

# Verificar e corrigir filesystem
sudo fsck -f /dev/sdb1          # Checar ext4 (disco desmontado!)
sudo e2fsck -p /dev/sdb1        # Correcao automatica`;function jy(){return s.jsxs(z,{title:"Discos e Particoes",subtitle:"Gerencie discos, particoes e filesystems com lsblk, fdisk, parted e mkfs no Debian",difficulty:"intermediario",timeToRead:"20 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Identificar Discos e Particoes"}),s.jsx(f,{language:"bash",title:"Visualizar hardware de armazenamento",code:xy}),s.jsx(M,{type:"warning",title:"Convencoes de nomenclatura",children:"No Linux: /dev/sda=primeiro SATA/USB, /dev/sdb=segundo, /dev/nvme0n1=primeiro NVMe, /dev/nvme0n1p1=primeira particao do NVMe."}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Criar Particoes com fdisk e parted"}),s.jsx(M,{type:"danger",title:"Perigo!",children:"Particionar discos apaga dados permanentemente. Faca backup antes! Garanta que esta editando o disco correto com lsblk antes de qualquer alteracao."}),s.jsx(f,{language:"bash",title:"fdisk e parted",code:yy}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Formatar Particoes"}),s.jsx(f,{language:"bash",title:"mkfs — criar filesystem",code:Sy})]})}const Ay=`mount                        # Listar montagens atuais
findmnt                      # Arvore de montagens
cat /proc/mounts             # Arquivo com montagens atuais

# Montar particao manualmente
sudo mount /dev/sdb1 /mnt/dados
sudo mount -t ext4 /dev/sdb1 /mnt/dados  # Especificar tipo
sudo mount -o ro /dev/sdb1 /mnt/   # Montar como somente leitura
sudo mount UUID="abc-123" /mnt/dados  # Montar por UUID

# Desmontar
sudo umount /mnt/dados
sudo umount /dev/sdb1         # Pelo dispositivo

# Montar USB automaticamente detectado
lsblk                        # Encontrar o USB
sudo mount /dev/sdb1 /media/usb`,Dy=`# /etc/fstab — montagem automatica no boot
# UUID           Ponto    FS     Opcoes           dump fsck
UUID=abc-123     /        ext4   defaults          0    1
UUID=def-456     /home    ext4   defaults          0    2
UUID=ghi-789     /data    ext4   defaults,nofail   0    2
UUID=jkl-012     swap     swap   sw                0    0
tmpfs            /tmp     tmpfs  defaults,noatime  0    0

# Para discos externos (nofail = nao falhar se ausente)
UUID=xyz-000     /mnt/backup  ext4  defaults,nofail,noauto  0 2

# Obter UUID dos dispositivos
blkid /dev/sdb1
`,Ny=`# Testar fstab sem reiniciar
sudo mount -a             # Montar tudo do fstab
sudo systemctl daemon-reload

# Montar compartilhamento CIFS (Samba/Windows)
sudo apt install cifs-utils
sudo mount -t cifs //servidor/share /mnt/share -o username=user,password=pass

# Montar ISO
sudo mount -o loop imagem.iso /mnt/iso

# Montar NFS
sudo apt install nfs-common
sudo mount servidor:/exportacao /mnt/nfs`;function Ey(){return s.jsxs(z,{title:"Montagem de Volumes",subtitle:"Aprenda a montar particoes, discos externos, ISOs e compartilhamentos de rede no Debian",difficulty:"intermediario",timeToRead:"18 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Montar e Desmontar — mount/umount"}),s.jsx(f,{language:"bash",title:"Montagem manual",code:Ay}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"/etc/fstab — Montagem Automatica"}),s.jsx("p",{className:"text-muted-foreground mb-4",children:"O /etc/fstab define quais particoes sao montadas automaticamente no boot. Sempre use UUID (nao /dev/sdX, que pode mudar) para identificar particoes."}),s.jsx(f,{language:"bash",title:"Configurando /etc/fstab",code:Dy}),s.jsx(M,{type:"warning",title:"Cuidado com o fstab!",children:"Um erro no fstab pode impedir o sistema de bootar. Sempre teste com mount -a antes de reiniciar. Mantenha um backup do fstab original."}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Casos Especiais"}),s.jsx(f,{language:"bash",title:"CIFS, ISO, NFS",code:Ny})]})}const wy=`# LVM = PV (Physical Volume) -> VG (Volume Group) -> LV (Logical Volume)
# Instalar ferramentas LVM
sudo apt install lvm2

# 1. Criar Physical Volume (PV) num disco/particao
sudo pvcreate /dev/sdb1 /dev/sdc1
pvdisplay                    # Ver PVs
pvs                          # Resumo dos PVs

# 2. Criar Volume Group (VG) com os PVs
sudo vgcreate vg-dados /dev/sdb1 /dev/sdc1
vgdisplay vg-dados           # Ver detalhes
vgs                          # Resumo dos VGs

# 3. Criar Logical Volume (LV) no VG
sudo lvcreate -n lv-home -L 50G vg-dados
sudo lvcreate -n lv-db -l 100%FREE vg-dados  # Usar todo espaco restante
lvdisplay                    # Ver LVs
lvs                          # Resumo dos LVs`,Ty=`# Formatar e montar o LV
sudo mkfs.ext4 /dev/vg-dados/lv-home
sudo mount /dev/vg-dados/lv-home /home

# Adicionar ao fstab
echo "/dev/vg-dados/lv-home /home ext4 defaults 0 2" | sudo tee -a /etc/fstab

# Expandir um LV (SEM perda de dados!)
sudo lvextend -L +10G /dev/vg-dados/lv-home
sudo resize2fs /dev/vg-dados/lv-home    # Expandir o filesystem

# Reduzir um LV (perigoso, faca backup!)
sudo umount /home
sudo e2fsck -f /dev/vg-dados/lv-home
sudo resize2fs /dev/vg-dados/lv-home 40G
sudo lvreduce -L 40G /dev/vg-dados/lv-home`,ky=`# Adicionar disco ao VG (expandir o Volume Group)
sudo pvcreate /dev/sdd1
sudo vgextend vg-dados /dev/sdd1
vgdisplay vg-dados           # Verificar novo tamanho

# Snapshot — backup instantaneo
sudo lvcreate -L 5G -s -n snap-home /dev/vg-dados/lv-home
mount /dev/vg-dados/snap-home /mnt/snap

# Remover snapshot
sudo lvremove /dev/vg-dados/snap-home

# Mover dados entre PVs (para trocar disco)
sudo pvmove /dev/sdb1 /dev/sdd1
sudo vgreduce vg-dados /dev/sdb1
sudo pvremove /dev/sdb1`;function Cy(){return s.jsxs(z,{title:"LVM — Gerenciador de Volumes Logicos",subtitle:"Crie, expanda e gerencie volumes logicos no Debian para maximo controle de armazenamento",difficulty:"avancado",timeToRead:"22 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"O que e o LVM?"}),s.jsx("p",{className:"text-muted-foreground mb-4",children:"O LVM permite criar volumes logicos que podem ser redimensionados dinamicamente, abranger multiplos discos, e fazer snapshots. Ideal para servidores onde o espaco cresce ao longo do tempo."}),s.jsx(M,{type:"info",title:"Camadas do LVM",children:"PV (Physical Volume) = disco/particao fisica. VG (Volume Group) = pool de armazenamento. LV (Logical Volume) = volume logico que voce formata e monta."}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Criar Estrutura LVM"}),s.jsx(f,{language:"bash",title:"PV, VG e LV",code:wy}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Usar e Redimensionar Volumes"}),s.jsx(f,{language:"bash",title:"Formatar, montar e expandir",code:Ty}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Operacoes Avancadas"}),s.jsx(f,{language:"bash",title:"Snapshots, adicionar disco, mover dados",code:ky}),s.jsx(M,{type:"success",title:"Vantagem do LVM",children:"Com LVM voce pode expandir /home sem reiniciar o sistema, criar snapshots para backups consistentes, e mover dados entre discos fisicos de forma transparente."})]})}const My=`# Instalar mdadm (gerenciador de RAID por software)
sudo apt install mdadm

# Niveis de RAID mais comuns:
# RAID 0: Striping - desempenho max, SEM redundancia
# RAID 1: Espelhamento - 2 discos identicos, sobrevive falha de 1
# RAID 5: Paridade distribuida - minimo 3 discos, sobrevive falha de 1
# RAID 6: Dupla paridade - minimo 4 discos, sobrevive falha de 2
# RAID 10: RAID 1+0 - espelho+striping, alta performance + redundancia`,Ry=`# Criar RAID 1 com dois discos
sudo mdadm --create /dev/md0 --level=1 --raid-devices=2 /dev/sdb /dev/sdc

# Criar RAID 5 com tres discos
sudo mdadm --create /dev/md0 --level=5 --raid-devices=3 /dev/sdb /dev/sdc /dev/sdd

# Monitorar criacao (pode demorar horas para sincronizar)
cat /proc/mdstat                 # Ver progresso
watch cat /proc/mdstat           # Atualizar a cada 2s
mdadm --detail /dev/md0          # Detalhes do array`,zy=`# Formatar e montar o RAID
sudo mkfs.ext4 /dev/md0
sudo mkdir /mnt/raid
sudo mount /dev/md0 /mnt/raid

# Salvar configuracao para persistencia
sudo mdadm --detail --scan | sudo tee -a /etc/mdadm/mdadm.conf
sudo update-initramfs -u

# Adicionar ao fstab
echo "/dev/md0 /mnt/raid ext4 defaults,nofail 0 2" | sudo tee -a /etc/fstab

# Simular falha de disco e reconstruir
sudo mdadm /dev/md0 --fail /dev/sdc    # Marcar como falho
sudo mdadm /dev/md0 --remove /dev/sdc  # Remover
sudo mdadm /dev/md0 --add /dev/sde     # Adicionar novo disco
watch cat /proc/mdstat                 # Monitorar reconstrucao`;function qy(){return s.jsxs(z,{title:"RAID por Software (mdadm)",subtitle:"Configure RAID 1, 5 e 10 com mdadm no Debian para redundancia e desempenho de armazenamento",difficulty:"avancado",timeToRead:"20 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Niveis de RAID"}),s.jsx(f,{language:"bash",title:"Conceitos de RAID",code:My}),s.jsx(M,{type:"warning",title:"RAID nao e backup!",children:"RAID protege contra falha de hardware, mas nao contra exclusao acidental, ransomware ou falha logica. Voce ainda precisa de backup separado."}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Criar um Array RAID"}),s.jsx(f,{language:"bash",title:"mdadm --create",code:Ry}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Usar e Recuperar"}),s.jsx(f,{language:"bash",title:"Montar, salvar e reconstruir",code:zy})]})}const Oy=`# Ver configuracao GRUB atual
cat /etc/default/grub

# Configuracoes comuns em /etc/default/grub:
GRUB_DEFAULT=0                # Entry padrao (0=primeira)
GRUB_TIMEOUT=5                # Segundos ate boot automatico
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash"  # Params do kernel
GRUB_CMDLINE_LINUX=""         # Params adicionais sempre

# Apos editar /etc/default/grub:
sudo update-grub              # Regenerar /boot/grub/grub.cfg`,Uy=`# Instalar GRUB no disco principal
sudo grub-install /dev/sda    # MBR/BIOS
sudo grub-install --target=x86_64-efi --efi-directory=/boot/efi  # UEFI
sudo update-grub              # Gerar configuracao

# Verificar GRUB instalado
ls /boot/grub/
ls /boot/efi/EFI/             # Para UEFI

# Adicionar entrada personalizada em /etc/grub.d/40_custom:
menuentry "Meu Sistema" {
    set root=(hd0,1)
    linux /boot/vmlinuz root=/dev/sda1 ro quiet
    initrd /boot/initrd.img
}
sudo update-grub`,Ly=`# Recuperacao via GRUB (quando o sistema nao inicia)
# 1. No menu GRUB, pressione 'e' para editar a entrada
# 2. Adicione 'init=/bin/bash' ao final da linha do kernel
# 3. Pressione Ctrl+X para bootar
# Voce vai cair em um shell root sem senha

# Remontar como read-write e fazer recuperacao
mount -o remount,rw /
passwd root               # Redefinir senha do root
update-grub               # Regenerar GRUB
sync && reboot -f

# Recuperar GRUB de live USB
sudo mount /dev/sda1 /mnt
sudo mount --bind /dev /mnt/dev
sudo mount --bind /proc /mnt/proc
sudo chroot /mnt
grub-install /dev/sda
update-grub`;function Gy(){return s.jsxs(z,{title:"GRUB Bootloader",subtitle:"Configure, atualize e recupere o bootloader GRUB no Debian com parametros, entradas e rescue",difficulty:"intermediario",timeToRead:"18 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"O que e o GRUB?"}),s.jsx("p",{className:"text-muted-foreground mb-4",children:"O GRUB (GRand Unified Bootloader) e o bootloader padrao do Debian. Ele aparece na tela de boot, permite escolher qual sistema operacional iniciar, e passa parametros ao kernel. O arquivo de configuracao gerado fica em /boot/grub/grub.cfg (nunca edite diretamente)."}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Configurar o GRUB"}),s.jsx(f,{language:"bash",title:"/etc/default/grub",code:Oy}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Instalar e Regenerar"}),s.jsx(f,{language:"bash",title:"grub-install e update-grub",code:Uy}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Recuperacao via GRUB"}),s.jsx(M,{type:"warning",title:"Recuperacao de emergencia",children:"Se o sistema nao iniciar, o menu GRUB e sua primeira linha de defesa. Aprenda como acessar o modo de recuperacao antes de precisar dele."}),s.jsx(f,{language:"bash",title:"Modo de recuperacao",code:Ly})]})}const By=`uname -r                       # Versao do kernel atual
uname -a                       # Informacoes completas
dmesg                          # Log de boot do kernel
dmesg | grep -i error          # Ver erros do kernel
dmesg | grep -i usb            # Dispositivos USB detectados
dmesg -T                       # Com timestamps legiveis
journalctl -k                  # Logs do kernel via journalctl`,_y=`lsmod                          # Listar modulos carregados
modinfo nvidia                 # Info sobre um modulo
sudo modprobe nome_modulo      # Carregar modulo
sudo modprobe -r nome_modulo   # Descarregar modulo
sudo depmod -a                 # Atualizar dependencias
# Carregar modulo na inicializacao:
echo "nome_modulo" | sudo tee -a /etc/modules
# Desativar modulo (blacklist):
echo "blacklist nome_modulo" | sudo tee /etc/modprobe.d/blacklist-nome.conf
sudo update-initramfs -u`,Hy=`# sysctl — parametros do kernel em tempo real
sysctl -a                      # Ver todos os parametros
sysctl vm.swappiness           # Ver valor atual
sudo sysctl -w vm.swappiness=10  # Alterar temporariamente
# Persistir apos reboot:
echo "vm.swappiness=10" | sudo tee -a /etc/sysctl.d/99-custom.conf
sudo sysctl --system           # Aplicar todas as configuracoes

# Parametros uteis
net.ipv4.ip_forward=1          # Habilitar roteamento IP
net.core.rmem_max=134217728    # Buffer de rede
vm.dirty_ratio=15              # Cache de escrita
fs.inotify.max_user_watches=524288  # Para editores (VSCode)`,Vy=`# Atualizar o kernel do Debian
sudo apt update
sudo apt install linux-image-amd64  # Kernel generico atual
# Ver kernels instalados:
dpkg --list | grep linux-image
# Remover kernel antigo:
sudo apt remove linux-image-6.1.0-9-amd64
sudo update-grub
# Kernel dos backports (mais novo)
sudo apt install -t bookworm-backports linux-image-amd64`;function Py(){return s.jsxs(z,{title:"Kernel do Linux",subtitle:"Entenda e gerencie modulos do kernel, parametros sysctl e atualizacoes de kernel no Debian",difficulty:"avancado",timeToRead:"20 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Informacoes do Kernel"}),s.jsx(f,{language:"bash",title:"uname e dmesg",code:By}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Modulos do Kernel"}),s.jsx("p",{className:"text-muted-foreground mb-4",children:"O kernel do Linux usa modulos — componentes que podem ser carregados e descarregados dinamicamente, sem reiniciar. Drivers de dispositivos, filesystems e protocolos geralmente sao modulos."}),s.jsx(f,{language:"bash",title:"lsmod, modprobe",code:_y}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Parametros do Kernel (sysctl)"}),s.jsx(f,{language:"bash",title:"sysctl",code:Hy}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Atualizar o Kernel"}),s.jsx(f,{language:"bash",title:"Gerenciar versoes do kernel",code:Vy})]})}const Qy=`# Verificar status de um servico
sudo systemctl status nginx
sudo systemctl status sshd

# Iniciar, parar, reiniciar, recarregar
sudo systemctl start nginx
sudo systemctl stop nginx
sudo systemctl restart nginx
sudo systemctl reload nginx      # Recarregar config sem derrubar conexoes

# Habilitar/desabilitar no boot
sudo systemctl enable nginx      # Habilitar no boot
sudo systemctl disable nginx     # Desabilitar no boot
sudo systemctl enable --now nginx  # Habilitar e ja iniciar
sudo systemctl disable --now nginx # Desabilitar e parar

# Listar servicos
systemctl list-units --type=service --state=running
systemctl list-units --type=service --state=failed
systemctl list-unit-files | grep enabled`,Xy=`# journalctl — logs do systemd
journalctl -f                    # Seguir logs em tempo real
journalctl -n 50                 # Ultimas 50 linhas
journalctl -b                    # Logs desde o ultimo boot
journalctl -b -1                 # Boot anterior
journalctl -u nginx              # Logs de um servico especifico
journalctl -u nginx -f           # Seguir logs do nginx
journalctl --since "1 hour ago"  # Ultima hora
journalctl --since "2024-01-01" --until "2024-01-02"
journalctl -p err                # Apenas erros
journalctl --disk-usage          # Uso de disco dos logs
sudo journalctl --vacuum-size=500M  # Limpar logs antigos`,Yy=`# Criar um servico systemd customizado
sudo nano /etc/systemd/system/meuapp.service

[Unit]
Description=Meu Aplicativo Node.js
After=network.target
Wants=network-online.target

[Service]
Type=simple
User=usuario
WorkingDirectory=/opt/meuapp
ExecStart=/usr/bin/node /opt/meuapp/index.js
Restart=always
RestartSec=5
Environment=NODE_ENV=production
StandardOutput=journal
StandardError=journal

[Install]
WantedBy=multi-user.target

# Ativar o servico
sudo systemctl daemon-reload
sudo systemctl enable --now meuapp`,$y=`# Timers systemd — alternativa ao cron
sudo nano /etc/systemd/system/backup.timer

[Unit]
Description=Timer de Backup Diario

[Timer]
OnCalendar=daily
Persistent=true

[Install]
WantedBy=timers.target

# Servico correspondente (backup.service)
[Unit]
Description=Script de Backup

[Service]
Type=oneshot
ExecStart=/opt/scripts/backup.sh

# Listar timers ativos
systemctl list-timers`;function Ky(){return s.jsxs(z,{title:"Systemd & Servicos",subtitle:"Gerencie servicos, logs e timers com systemctl e journalctl — o sistema init padrao do Debian",difficulty:"intermediario",timeToRead:"22 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Gerenciar Servicos com systemctl"}),s.jsx(f,{language:"bash",title:"systemctl",code:Qy}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Ver Logs com journalctl"}),s.jsx(f,{language:"bash",title:"journalctl",code:Xy}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Criar um Servico Customizado"}),s.jsx("p",{className:"text-muted-foreground mb-4",children:"Voce pode criar unit files para qualquer aplicativo rodar como servico gerenciado pelo systemd, com restart automatico, logs centralizados e controle de dependencias."}),s.jsx(f,{language:"bash",title:"Unit file .service",code:Yy}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Timers Systemd"}),s.jsx(f,{language:"bash",title:"Alternativa ao cron",code:$y}),s.jsx(M,{type:"info",title:"systemd vs SysVinit",children:"O systemd substitui o SysVinit no Debian 8+. E mais rapido (boot paralelo), tem journaling integrado, e oferece controle granular de servicos com dependencias."})]})}const Iy=`# Arquivos de log tradicionais em /var/log/
/var/log/syslog         # Log principal do sistema
/var/log/auth.log       # Autenticacao (login, sudo, ssh)
/var/log/kern.log       # Logs do kernel
/var/log/dpkg.log       # Instalacao/remocao de pacotes
/var/log/apt/history.log # Historico do APT
/var/log/nginx/         # Logs do nginx
/var/log/apache2/       # Logs do apache
/var/log/mysql/         # Logs do MySQL
/var/log/fail2ban.log   # Tentativas bloqueadas

# Ver logs
tail -f /var/log/syslog
tail -n 100 /var/log/auth.log | grep "Failed"
grep "error" /var/log/nginx/error.log`,Zy=`# journalctl — logs do systemd (mais completo)
journalctl -f                    # Tempo real
journalctl -b                    # Desde o boot atual
journalctl -u sshd               # Servico especifico
journalctl -p err                # Prioridade: err, warn, info, debug
journalctl --since "1 hour ago"
journalctl -k                    # Apenas kernel (dmesg)
journalctl --disk-usage          # Espaco usado pelos logs
sudo journalctl --vacuum-size=1G # Manter max 1GB de logs
sudo journalctl --vacuum-time=30d # Manter apenas 30 dias`,Fy=`# logrotate — rotacao automatica de logs
cat /etc/logrotate.conf          # Configuracao global
ls /etc/logrotate.d/             # Configs por aplicativo

# Exemplo de config /etc/logrotate.d/meuapp
/var/log/meuapp/*.log {
    daily                        # Rotacionar diariamente
    rotate 14                    # Manter 14 arquivos
    compress                     # Comprimir com gzip
    delaycompress               # Comprimir na proxima rotacao
    missingok                    # Nao errar se nao existir
    notifempty                   # Nao rotacionar se vazio
    postrotate
        systemctl reload meuapp
    endscript
}

# Testar sem executar
sudo logrotate -d /etc/logrotate.d/meuapp
# Executar manualmente
sudo logrotate -f /etc/logrotate.conf`;function Jy(){return s.jsxs(z,{title:"Logs do Sistema",subtitle:"Monitore, analise e configure logs com journalctl, syslog e logrotate no Debian",difficulty:"intermediario",timeToRead:"18 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Arquivos de Log em /var/log/"}),s.jsx(f,{language:"bash",title:"Principais arquivos de log",code:Iy}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"journalctl — Logs do Systemd"}),s.jsx(f,{language:"bash",title:"Usando journalctl",code:Zy}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"logrotate — Rotacao de Logs"}),s.jsx("p",{className:"text-muted-foreground mb-4",children:"O logrotate gerencia automaticamente o tamanho dos logs, comprimindo e deletando arquivos antigos. Cada aplicativo tem sua configuracao em /etc/logrotate.d/."}),s.jsx(f,{language:"bash",title:"Configurar logrotate",code:Fy}),s.jsxs(M,{type:"info",title:"Analisar auth.log",children:["Para detectar tentativas de invasao: grep Failed /var/log/auth.log | awk '","{"," print $11 ","}","' | sort | uniq -c | sort -rn | head"]})]})}const Wy=`ps aux                  # Ver todos os processos
ps aux | grep nginx    # Filtrar por nome
ps -ef                 # Formato alternativo
pgrep nginx            # Ver PIDs do nginx
pstree                 # Arvore de processos

# top — monitor interativo (pressione q para sair)
top
top -u usuario         # Processos do usuario
# Dentro do top: k=matar, r=renice, q=sair, M=ordenar por mem, P=por CPU

# htop — monitor avancado (instalar: sudo apt install htop)
htop`,e2=`# Enviar sinais para processos
kill PID                  # SIGTERM (encerramento gracioso)
kill -9 PID               # SIGKILL (encerramento forcado)
kill -HUP PID             # Reload de configuracao
pkill nginx               # Matar por nome
pkill -9 processo         # Forcar morte pelo nome
killall nginx             # Matar todos com o nome nginx

# Verificar codigo de saida
echo $?                   # 0 = sucesso, outros = erro

# Enviar para background
comando &                 # Executar em background
Ctrl+Z                    # Suspender processo atual
bg                        # Continuar em background
fg                        # Trazer para foreground
jobs                      # Listar jobs atuais`,a2=`# Nice e ionice — prioridade
nice -n 10 comando        # Rodar com prioridade menor (-20 a 19)
renice 10 -p PID          # Alterar prioridade de processo rodando
ionice -c 3 -p PID        # Prioridade de I/O idle

# Monitoramento avancado
ioiotop                   # I/O por processo (sudo apt install iotop)
vmstat 2                  # Stats de VM a cada 2 segundos
mpstat 1                  # Stats de CPU
lsof                      # Arquivos abertos
lsof -p PID               # Arquivos abertos por um processo
lsof -i :80               # Que processo usa a porta 80
ss -tulpn                 # Portas e processos`;function t2(){return s.jsxs(z,{title:"Processos e Jobs",subtitle:"Monitore, controle e priorize processos no Debian com ps, top, htop, kill e nice",difficulty:"intermediario",timeToRead:"18 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Listar Processos — ps e top"}),s.jsx(f,{language:"bash",title:"ps aux e top",code:Wy}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Controlar Processos — kill e sinais"}),s.jsx(f,{language:"bash",title:"Sinais e controle de jobs",code:e2}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Prioridade e Monitoramento Avancado"}),s.jsx(f,{language:"bash",title:"nice, iotop, lsof",code:a2}),s.jsx(M,{type:"info",title:"Dica",children:"lsof -i :80 mostra qual processo esta usando a porta 80. Essencial para debugging de conflitos de portas."})]})}const n2=`# Criar usuarios
sudo useradd -m -s /bin/bash joao    # Criar com home e bash
sudo useradd -m -G sudo,www-data joao  # Adicionar a grupos
sudo useradd -r -s /usr/sbin/nologin app  # Usuario de sistema
sudo adduser joao                     # Interativo (mais facil)

# Gerenciar senha
sudo passwd joao                     # Definir senha
sudo passwd -l joao                  # Bloquear usuario
sudo passwd -u joao                  # Desbloquear
sudo chage -E 0 joao                 # Expirar senha imediatamente

# Modificar usuario
sudo usermod -s /bin/zsh joao         # Mudar shell
sudo usermod -aG docker joao          # Adicionar ao grupo docker
sudo usermod -d /novo/home joao       # Mudar home
sudo usermod -l novonome joao         # Renomear usuario`,o2=`# Deletar usuario
sudo userdel joao               # Manter home
sudo userdel -r joao             # Remover home e mail

# Ver informacoes
id joao                          # UID, GID, grupos
who                              # Usuarios logados
w                                # Usuarios logados + o que fazem
last                             # Historico de logins
lastlog                          # Ultimo login de cada usuario

# Arquivos de usuario
cat /etc/passwd                  # Usuarios do sistema
cat /etc/shadow                  # Hashes de senha (root apenas)
cat /etc/group                   # Grupos
getent passwd joao               # Info de um usuario`,s2=`# Arquivo /etc/passwd (formato)
# nome:x:UID:GID:GECOS:home:shell
root:x:0:0:root:/root:/bin/bash
joao:x:1001:1001:Joao Silva:/home/joao:/bin/bash
www-data:x:33:33:www-data:/var/www:/usr/sbin/nologin

# Arquivo /etc/shadow (formato)
# usuario:$algoritmo$salt$hash:dias_desde_mudanca:min:max:aviso:...
joao:$6$salt$hashaqui...:19800:0:99999:7:::

# Algoritmos de hash de senha:
# $1$ = MD5 (obsoleto, inseguro)
# $6$ = SHA-512 (recomendado)
# $y$ = yescrypt (Debian 12 padrao)`;function i2(){return s.jsxs(z,{title:"Gerenciamento de Usuarios",subtitle:"Crie, modifique e remova usuarios no Debian com useradd, usermod e userdel",difficulty:"intermediario",timeToRead:"18 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Criar e Gerenciar Usuarios"}),s.jsx(f,{language:"bash",title:"useradd, adduser, passwd",code:n2}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Remover e Monitorar"}),s.jsx(f,{language:"bash",title:"userdel, who, last",code:o2}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Arquivos do Sistema"}),s.jsx(f,{language:"bash",title:"/etc/passwd e /etc/shadow",code:s2}),s.jsx(M,{type:"warning",title:"adduser vs useradd",children:"O adduser e um script Debian mais amigavel que useradd. Para uso interativo, prefira adduser. Para scripts, use useradd com todos os parametros."})]})}const l2=`# Criar grupos
sudo groupadd developers
sudo groupadd -g 1500 dbadmins   # GID especifico

# Adicionar usuario ao grupo
sudo usermod -aG developers joao  # Adicionar sem remover outros grupos
sudo gpasswd -a joao developers   # Alternativa

# Remover usuario do grupo
sudo gpasswd -d joao developers

# Gerenciar membros com gpasswd
sudo gpasswd -A joao developers   # Tornar joao admin do grupo
sudo gpasswd -M joao,maria developers  # Definir membros do grupo

# Ver grupos
cat /etc/group
getent group developers           # Info de um grupo especifico
id joao                           # Grupos do usuario
groups joao                       # Grupos do usuario (alternativa)`,r2=`# Grupos importantes no Debian
sudo           # Permissao de usar sudo
adm            # Acesso a logs do sistema
cdrom          # Acesso ao leitor de CD
plugged        # Dispositivos plugaveis (USB)
video          # Acesso ao hardware de video
audio          # Acesso ao audio
docker         # Acesso ao Docker sem sudo
www-data       # Usuario do Apache/Nginx
ssl-cert       # Acesso a certificados SSL

# Verificar membros de um grupo
getent group docker

# Ver todos os grupos do sistema
less /etc/group`,c2=`# Permissoes baseadas em grupo
# Cenario: compartilhar /var/www entre devs e www-data
sudo groupadd webdevs
sudo usermod -aG webdevs joao
sudo usermod -aG webdevs maria
sudo chown -R www-data:webdevs /var/www/html
sudo chmod -R 2775 /var/www/html
# 2775 = SetGID (2) + rwxrwxr-x (775)
# SetGID faz novos arquivos herdarem o grupo webdevs

# Aplicar mudancas de grupo sem logout
newgrp developers             # Entrar no novo grupo na sessao atual
# Ou fazer logout e login novamente`;function u2(){return s.jsxs(z,{title:"Gerenciamento de Grupos",subtitle:"Crie e gerencie grupos no Debian para controlar acesso a recursos do sistema",difficulty:"intermediario",timeToRead:"14 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Criar e Gerenciar Grupos"}),s.jsx(f,{language:"bash",title:"groupadd, gpasswd, usermod",code:l2}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Grupos Importantes no Debian"}),s.jsx(f,{language:"bash",title:"Grupos do sistema",code:r2}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Permissoes Baseadas em Grupos"}),s.jsx(f,{language:"bash",title:"Compartilhamento com SetGID",code:c2}),s.jsx(M,{type:"info",title:"Dica",children:"Apos adicionar um usuario a um grupo, ele precisa fazer logout/login para as mudancas terem efeito. Use newgrp para testar sem relogar."})]})}const d2=`# Usar sudo
sudo comando              # Executar como root
sudo -u usuario comando   # Executar como outro usuario
sudo -i                   # Shell interativo de root
sudo -s                   # Shell de root preservando env
su -                      # Entrar como root (precisa da senha do root)
su - joao                 # Entrar como joao

# Verificar privilegios
sudo -l                   # Ver o que o usuario pode fazer com sudo

# Executar ultimo comando com sudo
sudo !!`,m2=`# Editar o sudoers (SEMPRE use visudo!)
sudo visudo

# Formato:
# usuario HOST=(runas) COMANDOS

# Dar sudo completo a um usuario:
joao ALL=(ALL:ALL) ALL

# Sudo sem senha:
joao ALL=(ALL:ALL) NOPASSWD: ALL

# Apenas comandos especificos:
joao ALL=(ALL) /usr/sbin/service nginx *, /usr/bin/apt

# Grupo sudo (maneira padrao do Debian):
%sudo   ALL=(ALL:ALL) ALL

# Usuarios no arquivo /etc/sudoers.d/ (mais organizado):
echo "joao ALL=(ALL:ALL) ALL" | sudo tee /etc/sudoers.d/joao
sudo chmod 440 /etc/sudoers.d/joao`,f2=`# Configuracoes de seguranca do sudo
# Em /etc/sudoers ou /etc/sudoers.d/security:

# Exigir senha mesmo para NOPASSWD quando usando sudo -s:
Defaults requiretty

# Limitar o timeout de autenticacao:
Defaults timestamp_timeout=5   # 5 minutos (padrao=15)

# Log de todas as acoes do sudo
Defaults log_output
Defaults logfile="/var/log/sudo.log"

# Configurar PATH seguro
Defaults secure_path="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"

# Verificar logs de sudo
grep sudo /var/log/auth.log`;function p2(){return s.jsxs(z,{title:"Sudo e Privilegios",subtitle:"Configure e use sudo com seguranca para administrar o Debian sem expor a conta root",difficulty:"intermediario",timeToRead:"16 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Usar sudo e su"}),s.jsx(f,{language:"bash",title:"Comandos sudo e su",code:d2}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Configurar o Sudoers"}),s.jsx(M,{type:"danger",title:"Sempre use visudo!",children:"Nunca edite /etc/sudoers diretamente. O visudo valida a sintaxe antes de salvar — um erro pode bloquear todo acesso administrativo ao sistema."}),s.jsx(f,{language:"bash",title:"Configurar /etc/sudoers",code:m2}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Seguranca e Logs"}),s.jsx(f,{language:"bash",title:"Hardening do sudo",code:f2}),s.jsx(M,{type:"info",title:"Boa pratica",children:"Evite usar sudo NOPASSWD: ALL em servidores de producao. Se precisar de automacao, crie um usuario de sistema com permissoes especificas apenas para os comandos necessarios."})]})}const h2=`# cron — agendamento de tarefas recorrentes
crontab -e              # Editar crontab do usuario atual
crontab -l              # Listar crontab atual
crontab -r              # Remover crontab (cuidado!)
sudo crontab -e -u root # Editar crontab do root

# Formato do crontab:
# min hora dia mes dia-semana comando
# 0-59 0-23 1-31 1-12 0-7 (0 e 7 = domingo)

# Exemplos:
0 * * * *     comando    # Todo inicio de hora
0 2 * * *     comando    # Todo dia as 2h
0 2 * * 0     comando    # Todo domingo as 2h
*/15 * * * *  comando    # A cada 15 minutos
0 2 1 * *     comando    # Dia 1 de cada mes as 2h
@reboot       comando    # Na inicializacao do sistema`,g2=`# Exemplos praticos de crontab
# Backup diario as 3h
0 3 * * * rsync -avz /home/ /mnt/backup/ >> /var/log/backup.log 2>&1

# Limpar /tmp toda segunda-feira as 4h
0 4 * * 1 find /tmp -type f -mtime +7 -delete

# Relatorio de disco toda manha
0 8 * * 1-5 df -h | mail -s "Relatorio de Disco" admin@example.com

# Reiniciar servico se cair
*/5 * * * * pgrep nginx > /dev/null || systemctl restart nginx

# Atualizar banco de dados do locate
@daily updatedb`,b2=`# at — executar UMA vez no futuro
sudo apt install at

at 15:30              # Executar as 15h30 de hoje
at now + 1 hour       # Daqui 1 hora
at midnight           # A meia-noite
at 9am tomorrow       # Amanha de manha

# Dentro do at, digitar comandos, terminar com Ctrl+D

atq                   # Ver fila de jobs agendados
atrm 1                # Remover job numero 1
at -c 1               # Ver o que o job 1 vai executar

# systemd timers (alternativa moderna ao cron)
systemctl list-timers
journalctl -u nome-do-timer`;function v2(){return s.jsxs(z,{title:"Agendamento de Tarefas",subtitle:"Automatize tarefas recorrentes com cron, at e systemd timers no Debian",difficulty:"intermediario",timeToRead:"16 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Cron — Tarefas Recorrentes"}),s.jsx(f,{language:"bash",title:"Usando crontab",code:h2}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Exemplos Praticos de Cron"}),s.jsx(f,{language:"bash",title:"Scripts de automacao",code:g2}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"at — Execucao Unica"}),s.jsx(f,{language:"bash",title:"Usando at",code:b2}),s.jsxs(M,{type:"info",title:"Dica para cron",children:["Sempre redirecione stdout e stderr no cron: comando ","{'>>'}"," /var/log/meu-job.log ","{'2>&1'}",". O cron tenta enviar email por padrao, e redirecionamento e mais confiavel."]})]})}const x2=`# Ver variaveis de ambiente
env                         # Todas as variaveis
printenv                    # Alternativa ao env
printenv HOME               # Uma variavel especifica
echo $HOME                  # Ver valor

# Variaveis essenciais
$HOME          # /home/usuario
$USER          # nome do usuario
$PATH          # Caminhos de busca de executaveis
$SHELL         # /bin/bash
$LANG          # pt_BR.UTF-8
$EDITOR        # Editor padrao (nano, vim)
$TERM          # Tipo de terminal
$PS1           # Prompt do shell
$?             # Codigo de saida do ultimo comando`,y2=`# Definir variaveis
NOME="Joao"                 # Variavel local (apenas no shell atual)
export NOME="Joao"          # Exportar para subprocessos
export DB_HOST="localhost"  # Configuracao de banco
export DB_PASS="senha"      # Nao use no historico em prod!

# Adicionar ao PATH
export PATH="$PATH:/opt/meu-programa/bin"

# Remover variavel
unset NOME

# Configurar permanentemente em ~/.bashrc ou ~/.profile
echo 'export EDITOR=nano' >> ~/.bashrc
source ~/.bashrc            # Recarregar sem fechar o terminal`,S2=`# Arquivos de configuracao do shell (Bash)
~/.bashrc         # Executado em cada novo terminal (interativo)
~/.bash_profile   # Executado no login
~/.profile        # Para todos os shells (dash, bash)
/etc/environment  # Variaveis globais do sistema
/etc/profile      # Script de login global
/etc/profile.d/   # Scripts adicionais de perfil

# Diferenca: .bashrc vs .bash_profile
# .bash_profile: login shells (ssh, login grafico)
# .bashrc: terminais interativos (Ctrl+Alt+T)

# Boa pratica para Debian: usar ~/.bashrc e importar no .bash_profile
# Em ~/.bash_profile:
[[ -f ~/.bashrc ]] && . ~/.bashrc`;function j2(){return s.jsxs(z,{title:"Variaveis de Ambiente",subtitle:"Gerencie variaveis de ambiente no Bash, configure o PATH e persista configuracoes no Debian",difficulty:"intermediario",timeToRead:"14 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Ver Variaveis de Ambiente"}),s.jsx(f,{language:"bash",title:"env, printenv e echo",code:x2}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Definir e Exportar Variaveis"}),s.jsx(f,{language:"bash",title:"export e unset",code:y2}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Arquivos de Configuracao do Shell"}),s.jsx(f,{language:"bash",title:".bashrc, .profile e /etc/",code:S2}),s.jsx(M,{type:"warning",title:"Segredos no ambiente",children:"Nunca coloque senhas ou chaves de API diretamente no .bashrc — o arquivo fica no historico e e legivel. Para producao, use gerenciadores de segredos como HashiCorp Vault ou Doppler."})]})}const A2=`# Atualizar lista de pacotes (sempre antes de instalar)
sudo apt update

# Atualizar pacotes instalados
sudo apt upgrade             # Atualiza sem remover pacotes
sudo apt full-upgrade        # Atualiza resolvendo todas as deps
sudo apt dist-upgrade        # Equivalente ao full-upgrade

# Instalar pacotes
sudo apt install nginx       # Instalar um pacote
sudo apt install nginx php8.2 mariadb-server  # Varios pacotes
sudo apt install -y pacote   # Sem pedir confirmacao
sudo apt install ./pacote.deb  # Instalar arquivo .deb local
sudo apt reinstall nginx     # Reinstalar`,D2=`# Buscar pacotes
apt search nginx             # Buscar por nome/descricao
apt-cache search nginx       # Alternativa classica
apt show nginx               # Detalhes do pacote
apt-cache show nginx         # Alternativa
apt-cache policy nginx       # Versoes disponiveis e instalada
apt list --installed         # Listar todos instalados
apt list --installed | grep python  # Filtrar

# Remover pacotes
sudo apt remove nginx        # Remover (manter configs)
sudo apt purge nginx         # Remover + configs
sudo apt autoremove          # Remover dependencias nao usadas
sudo apt autoclean           # Limpar cache de .deb antigos
sudo apt clean               # Limpar todo o cache`,N2=`# Informacoes e diagnostico
apt-cache depends nginx      # Dependencias do nginx
apt-cache rdepends nginx     # Quem depende do nginx
dpkg -L nginx                # Arquivos instalados pelo nginx
dpkg -S /usr/sbin/nginx      # Qual pacote instalou esse arquivo

# Segurar versao de um pacote (evitar update)
sudo apt-mark hold nginx     # Segurar nginx na versao atual
sudo apt-mark unhold nginx   # Liberar
apt-mark showhold            # Ver pacotes segurados

# Simular antes de executar
sudo apt install -s nginx    # Simular instalacao
sudo apt upgrade -s          # Simular atualizacao`;function E2(){return s.jsxs(z,{title:"APT — Gerenciador de Pacotes",subtitle:"Domine o APT para instalar, atualizar, buscar e remover pacotes no Debian",difficulty:"iniciante",timeToRead:"20 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Instalar e Atualizar"}),s.jsx("p",{className:"text-muted-foreground mb-4",children:"O APT (Advanced Package Tool) e o gerenciador de pacotes padrao do Debian. Sempre execute apt update antes de instalar para garantir a lista mais atual de pacotes."}),s.jsx(f,{language:"bash",title:"Instalacao e atualizacao",code:A2}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Buscar e Remover"}),s.jsx(f,{language:"bash",title:"Search, remove e clean",code:D2}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Informacoes e Diagnostico"}),s.jsx(f,{language:"bash",title:"Dependencias e hold",code:N2}),s.jsx(M,{type:"success",title:"Combinacao padrao",children:"sudo apt update && sudo apt upgrade -y e o comando magico de manutencao. Execute semanalmente para manter o sistema seguro e atualizado."})]})}const w2=`# dpkg — gerenciador de pacotes de baixo nivel
# Instalar arquivo .deb
sudo dpkg -i pacote.deb
sudo dpkg -i *.deb           # Varios arquivos

# Se faltar dependencias:
sudo apt install -f          # Corrigir dependencias automaticamente

# Remover pacote
sudo dpkg -r pacote          # Remover (manter configs)
sudo dpkg -P pacote          # Purge (remover + configs)
sudo dpkg --remove pacote    # Alternativa`,T2=`# Listar e consultar pacotes
dpkg -l                      # Listar todos os pacotes
dpkg -l nginx                # Status do nginx
dpkg -l "nginx*"             # Pacotes que comecam com nginx
dpkg -L nginx                # Arquivos instalados pelo nginx
dpkg -S /usr/sbin/nginx      # Qual pacote instalou esse arquivo
dpkg -s nginx                # Status completo do pacote
dpkg --get-selections        # Listar pacotes e seus estados`,k2=`# Extrair sem instalar (para inspecionar)
dpkg -x pacote.deb /tmp/extraido/    # Extrair arquivos
dpkg -e pacote.deb /tmp/control/     # Extrair arquivos de controle

# Criar pacote .deb simples
# Estrutura:
mkdir -p meupacote/DEBIAN
mkdir -p meupacote/usr/local/bin

# Criar arquivo control
cat > meupacote/DEBIAN/control << 'CTL'
Package: meupacote
Version: 1.0
Section: base
Priority: optional
Architecture: amd64
Maintainer: Joao <joao@exemplo.com>
Description: Meu programa customizado
CTL

cp meu-programa meupacote/usr/local/bin/
dpkg-deb --build meupacote meupacote_1.0_amd64.deb`;function C2(){return s.jsxs(z,{title:"DPKG e Pacotes .deb",subtitle:"Use dpkg para gerenciar pacotes .deb individualmente, inspecionar e criar pacotes no Debian",difficulty:"intermediario",timeToRead:"16 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Instalar e Remover Pacotes .deb"}),s.jsx(f,{language:"bash",title:"dpkg -i e dpkg -r",code:w2}),s.jsx(M,{type:"info",title:"dpkg vs apt",children:"O APT usa o dpkg internamente. dpkg opera em arquivos .deb individuais sem resolver dependencias. Prefira apt para instalar da internet; use dpkg para arquivos .deb locais."}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Consultar e Listar Pacotes"}),s.jsx(f,{language:"bash",title:"Consultas dpkg",code:T2}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Criar Pacotes .deb"}),s.jsx(f,{language:"bash",title:"Criando um .deb simples",code:k2})]})}const M2=`# Pinning — controlar de qual repositorio instalar
# Criar /etc/apt/preferences.d/01-preferences
Package: *
Pin: release a=bookworm
Pin-Priority: 500

Package: *
Pin: release a=bookworm-backports
Pin-Priority: 100

Package: nginx
Pin: release a=bookworm-backports
Pin-Priority: 900        # Forcar nginx dos backports

# Aplicar
sudo apt update
apt-cache policy nginx   # Ver prioridades`,R2=`# Configurar repositorios em /etc/apt/sources.list.d/
# Boa pratica: um arquivo por repositorio

# Docker
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
echo "deb [signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/debian bookworm stable" | sudo tee /etc/apt/sources.list.d/docker.list

# GitHub CLI
curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo gpg --dearmor -o /etc/apt/keyrings/github-cli.gpg
echo "deb [signed-by=/etc/apt/keyrings/github-cli.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list

sudo apt update`,z2=`# Verificar autenticidade dos pacotes
sudo apt-key list            # Chaves antigas (deprecated)
ls /etc/apt/keyrings/        # Chaves modernas (recomendado)
ls /etc/apt/trusted.gpg.d/   # Chaves legacy

# Problemas comuns
apt update 2>&1 | grep "NO_PUBKEY"  # Ver chaves ausentes

# Corrigir NO_PUBKEY:
sudo gpg --keyserver keyserver.ubuntu.com --recv-keys CHAVE_ID
sudo gpg --export CHAVE_ID | sudo gpg --dearmor -o /etc/apt/keyrings/repo.gpg

# apt-cacher-ng (cache de pacotes para rede local)
sudo apt install apt-cacher-ng
# Em todos os clientes, adicionar em /etc/apt/apt.conf.d/02proxy:
# Acquire::http::Proxy "http://servidor-cache:3142";`;function q2(){return s.jsxs(z,{title:"APT Avancado",subtitle:"Pinning, repositorios extras, GPG keys e configuracoes avancadas do APT no Debian",difficulty:"avancado",timeToRead:"18 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Pinning — Prioridade de Repositorios"}),s.jsx("p",{className:"text-muted-foreground mb-4",children:"Com pinning voce controla de qual repositorio/versao um pacote sera instalado. Util para misturar stable com backports ou repositorios de terceiros."}),s.jsx(f,{language:"bash",title:"apt pinning",code:M2}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Adicionar Repositorios de Terceiros"}),s.jsx(f,{language:"bash",title:"Docker, GitHub CLI e outros",code:R2}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Chaves GPG e Problemas Comuns"}),s.jsx(f,{language:"bash",title:"Autenticidade e troubleshooting",code:z2}),s.jsx(M,{type:"info",title:"Boa pratica de seguranca",children:"Sempre verifique a origem de repositorios de terceiros. Use signed-by no sources.list para vincular cada repositorio a sua chave GPG especifica, evitando que chaves de um repo autentiquem pacotes de outro."})]})}const O2=`# Instalar o daemon snap (snapd)
sudo apt install snapd
sudo systemctl enable --now snapd.socket
# Reiniciar ou aguardar uns minutos

# Instalar snaps
sudo snap install firefox
sudo snap install code --classic   # --classic para full system access
sudo snap install postman

# Listar snaps instalados
snap list

# Buscar snaps
snap find editor
snap info firefox          # Detalhes e versoes`,U2=`# Gerenciar snaps
sudo snap remove firefox          # Remover
sudo snap refresh                 # Atualizar todos
sudo snap refresh firefox         # Atualizar um especifico
sudo snap revert firefox          # Voltar a versao anterior

# Canais de atualizacao
# stable, candidate, beta, edge
sudo snap install firefox --channel=beta

# Ver conexoes e permissoes
snap connections firefox
sudo snap connect firefox:camera  # Dar permissao de camera

# Confinamento
# strict: sandbox total
# classic: acesso total ao sistema (mais perigoso)`;function L2(){return s.jsxs(z,{title:"Snap",subtitle:"Instale e gerencie aplicativos containerizados via Snap no Debian",difficulty:"iniciante",timeToRead:"12 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Instalando e Usando Snaps"}),s.jsx(f,{language:"bash",title:"snapd e snap install",code:O2}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Gerenciar Snaps"}),s.jsx(f,{language:"bash",title:"Atualizar, remover, permissoes",code:U2}),s.jsx(M,{type:"info",title:"Snap vs APT vs Flatpak",children:"Snap: criado pela Canonical (Ubuntu), bom para apps CLI. Flatpak: padrao da comunidade para apps desktop. APT: melhor integrado ao Debian, sempre prefira quando disponivel."})]})}const G2=`# Instalar Flatpak no Debian
sudo apt install flatpak gnome-software-plugin-flatpak
# Adicionar repositorio Flathub (principal repositorio)
flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
# Reiniciar para aplicar mudancas`,B2=`# Instalar aplicativos
flatpak install flathub com.spotify.Client
flatpak install flathub com.discordapp.Discord
flatpak install flathub org.gimp.GIMP
flatpak install flathub md.obsidian.Obsidian
flatpak install flathub com.visualstudio.code

# Buscar aplicativos
flatpak search spotify
flatpak info com.spotify.Client

# Executar
flatpak run com.spotify.Client

# Listar instalados
flatpak list`,_2=`# Gerenciar Flatpaks
flatpak update                    # Atualizar todos
flatpak update com.spotify.Client # Atualizar um especifico
flatpak remove com.spotify.Client # Remover
flatpak remove --unused           # Remover dependencias nao usadas

# Permissoes (Flatseal recomendado para GUI)
flatpak permissions com.spotify.Client
flatpak override --user --filesystem=home com.spotify.Client  # Dar acesso ao home
flatpak override --reset com.spotify.Client  # Reset permissoes`;function H2(){return s.jsxs(z,{title:"Flatpak",subtitle:"Instale apps modernos e atualizados via Flatpak no Debian sem comprometer a estabilidade do sistema",difficulty:"iniciante",timeToRead:"12 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Instalando o Flatpak"}),s.jsx(f,{language:"bash",title:"Configurar Flatpak e Flathub",code:G2}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Instalar e Buscar Apps"}),s.jsx(f,{language:"bash",title:"Apps populares via Flatpak",code:B2}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Gerenciar e Permissoes"}),s.jsx(f,{language:"bash",title:"Update, remove e permissoes",code:_2}),s.jsx(M,{type:"success",title:"Vantagem do Flatpak",children:"Flatpak permite ter versoes atualizadas de apps (Spotify, Discord, VSCode) sem comprometer a estabilidade do Debian stable. Ideal para desktops que precisam de software atual."})]})}const V2=`# Instalar ferramentas de compilacao essenciais
sudo apt install build-essential   # gcc, g++, make, libc-dev
sudo apt install cmake             # CMake
sudo apt install autoconf automake # GNU Autotools
sudo apt install pkg-config        # Gerenciador de dependencias de desenvolvimento
sudo apt install git               # Para clonar codigo fonte`,P2=`# Fluxo classico: configure, make, make install
# Baixar e extrair codigo fonte
wget https://exemplo.com/programa-1.0.tar.gz
tar -xzf programa-1.0.tar.gz
cd programa-1.0/

# Verificar opcoes de compilacao
./configure --help

# Configurar (verificar dependencias, gerar Makefiles)
./configure --prefix=/usr/local --enable-ssl

# Se faltar dependencias, instalar com apt
# Ex: sudo apt install libssl-dev

# Compilar (use -j para paralelo: -j$(nproc))
make -j$(nproc)

# Instalar (como root)
sudo make install

# Ou criar pacote .deb (mais limpo)
sudo apt install checkinstall
sudo checkinstall make install`,Q2=`# CMake — moderno e multiplataforma
git clone https://github.com/exemplo/projeto.git
cd projeto
mkdir build && cd build
cmake .. -DCMAKE_INSTALL_PREFIX=/usr/local
make -j$(nproc)
sudo make install

# Meson — alternativa moderna ao autotools
sudo apt install meson ninja-build
meson setup build
cd build
ninja
sudo ninja install

# Instalar dependencias de desenvolvimento
# Para cada biblioteca, instale o pacote -dev
sudo apt install libssl-dev         # OpenSSL
sudo apt install libsqlite3-dev     # SQLite
sudo apt install libcurl4-openssl-dev # cURL`;function X2(){return s.jsxs(z,{title:"Compilar do Codigo-Fonte",subtitle:"Compile e instale programas a partir do codigo-fonte no Debian usando make, cmake e meson",difficulty:"avancado",timeToRead:"18 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Preparar o Ambiente de Compilacao"}),s.jsx(f,{language:"bash",title:"Dependencias essenciais",code:V2}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"O Fluxo classico: configure, make, install"}),s.jsx(f,{language:"bash",title:"Compilacao tradicional com autotools",code:P2}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"CMake e Meson"}),s.jsx(f,{language:"bash",title:"Sistemas de build modernos",code:Q2}),s.jsx(M,{type:"info",title:"checkinstall",children:"Use checkinstall em vez de make install para criar um pacote .deb do software compilado. Isso permite remover facilmente com dpkg -r e mantem o sistema de pacotes consistente."})]})}const Y2=`# Ver repositorios configurados
cat /etc/apt/sources.list
ls /etc/apt/sources.list.d/

# Estrutura do sources.list
# tipo  URI  suite  components
deb http://deb.debian.org/debian/ bookworm main contrib non-free non-free-firmware
deb-src http://deb.debian.org/debian/ bookworm main  # Codigo-fonte

# Adicionar repositorios de espelho mais rapido (CDN)
deb http://cdn-fastly.deb.debian.org/debian/ bookworm main

# Usando mirrors brasileiros
deb http://debian.c3sl.ufpr.br/debian/ bookworm main  # UFPR`,$2=`# Adicionar repositorio de terceiros com seguranca
# 1. Baixar e importar a chave GPG
curl -fsSL https://pkg.cloudflare.com/cloudflare-main.gpg | sudo gpg --dearmor -o /etc/apt/keyrings/cloudflare.gpg

# 2. Adicionar o repositorio
echo "deb [signed-by=/etc/apt/keyrings/cloudflare.gpg] https://pkg.cloudflare.com/cloudflared bookworm main" | sudo tee /etc/apt/sources.list.d/cloudflared.list

# 3. Atualizar e instalar
sudo apt update
sudo apt install cloudflared

# Verificar repositorios ativos
apt-cache policy`,K2=`# Repositorios populares para Debian

# NodeJS (Nodesource)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo bash -
sudo apt install nodejs

# PostgreSQL oficial
sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt bookworm-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo gpg --dearmor -o /etc/apt/keyrings/postgresql.gpg
sudo apt update && sudo apt install postgresql-16

# VSCode
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor | sudo tee /etc/apt/keyrings/microsoft.gpg > /dev/null
echo "deb [signed-by=/etc/apt/keyrings/microsoft.gpg] https://packages.microsoft.com/repos/code stable main" | sudo tee /etc/apt/sources.list.d/vscode.list
sudo apt update && sudo apt install code`;function I2(){return s.jsxs(z,{title:"Repositorios Extras",subtitle:"Adicione e gerencie repositorios de terceiros com seguranca no Debian",difficulty:"intermediario",timeToRead:"15 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Entendendo o sources.list"}),s.jsx(f,{language:"bash",title:"Repositorios configurados",code:Y2}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Adicionar Repositorios com Seguranca"}),s.jsx(M,{type:"warning",title:"Confie apenas em fontes conheidas",children:"Repositorios de terceiros tem acesso total para instalar qualquer pacote como root. Verifique a procedencia antes de adicionar."}),s.jsx(f,{language:"bash",title:"Fluxo seguro com GPG",code:$2}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Repositorios Populares"}),s.jsx(f,{language:"bash",title:"Node.js, PostgreSQL, VSCode",code:K2})]})}const Z2=`# Verificar interfaces de rede
ip addr show               # Ver IPs de todas as interfaces
ip addr show eth0          # Interface especifica
ip link show               # Status das interfaces
ip route show              # Tabela de roteamento
ip route show default      # Gateway padrao

# Comandos classicos (net-tools, deprecated mas ainda usados)
sudo apt install net-tools  # Se nao estiver instalado
ifconfig                   # Equivalente ao ip addr
route -n                   # Tabela de roteamento`,F2=`# Diagnostico de rede
ping 8.8.8.8              # Testar conectividade
ping -c 4 8.8.8.8         # 4 pings apenas
ping6 ::1                 # Ping IPv6
traceroute 8.8.8.8        # Rota ate o destino
sudo apt install traceroute
mtr 8.8.8.8               # Traceroute continuo (muito util!)
sudo apt install mtr-tiny
nslookup google.com       # DNS lookup
dig google.com            # DNS detalhado
dig google.com +short     # Apenas o IP
curl -I https://google.com  # Testar HTTP`,J2=`# Portas e conexoes
ss -tulpn                  # Portas abertas e processos
ss -an                     # Todas as conexoes
ss -s                      # Resumo estatistico
netstat -tulpn             # Alternativa classica
lsof -i :80                # Quem usa a porta 80
lsof -i :443               # Quem usa a porta 443

# Configurar IP estatico (sem NetworkManager)
# Editar /etc/network/interfaces
auto eth0
iface eth0 inet static
    address 192.168.1.100
    netmask 255.255.255.0
    gateway 192.168.1.1
    dns-nameservers 8.8.8.8 8.8.4.4

sudo systemctl restart networking`;function W2(){return s.jsxs(z,{title:"Rede Basica",subtitle:"Configure e diagnostique redes no Debian com ip, ss, ping, traceroute e ferramentas de diagnostico",difficulty:"iniciante",timeToRead:"18 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Verificar Configuracao de Rede"}),s.jsx(f,{language:"bash",title:"ip addr, ip route",code:Z2}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Diagnostico de Conectividade"}),s.jsx(f,{language:"bash",title:"ping, mtr, dig, curl",code:F2}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Portas e IP Estatico"}),s.jsx(f,{language:"bash",title:"ss, netstat, IP estatico",code:J2}),s.jsx(M,{type:"info",title:"ip vs ifconfig",children:"O ifconfig esta obsoleto. Use ip addr (IPs), ip link (interfaces), ip route (rotas). O pacote iproute2 esta instalado por padrao no Debian."})]})}const e0=`# nmcli — interface de linha de comando do NetworkManager
nmcli general status         # Status geral
nmcli device status          # Dispositivos e status
nmcli connection show        # Conexoes configuradas
nmcli connection show "Nome" # Detalhes de uma conexao

# WiFi
nmcli device wifi list       # Listar redes WiFi
nmcli device wifi connect "NomeRede" password "senha"  # Conectar
nmcli device wifi hotspot    # Criar hotspot`,a0=`# Gerenciar conexoes
nmcli connection up "Nome"   # Ativar conexao
nmcli connection down "Nome" # Desativar
nmcli connection delete "Nome" # Remover
nmcli connection modify "Nome" ipv4.addresses 192.168.1.100/24  # Mudar IP
nmcli connection modify "Nome" ipv4.gateway 192.168.1.1
nmcli connection modify "Nome" ipv4.dns "8.8.8.8,8.8.4.4"
nmcli connection modify "Nome" ipv4.method manual  # IP estatico
nmcli connection reload`,t0=`# nmtui — interface texto interativa (mais facil)
sudo nmtui
# Menu: Edit a connection, Activate a connection, Set system hostname

# Configurar DNS via systemd-resolved
sudo systemctl status systemd-resolved
resolvectl status
resolvectl query google.com
cat /etc/resolv.conf          # Arquivo de DNS (gerenciado automaticamente)

# Ver logs de rede
journalctl -u NetworkManager -f`;function n0(){return s.jsxs(z,{title:"NetworkManager",subtitle:"Configure conexoes de rede, WiFi e DNS com nmcli e nmtui no Debian",difficulty:"intermediario",timeToRead:"15 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"nmcli — Linha de Comando"}),s.jsx(f,{language:"bash",title:"Verificar e conectar",code:e0}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Gerenciar Conexoes"}),s.jsx(f,{language:"bash",title:"Modificar e gerenciar conexoes",code:a0}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"nmtui e DNS"}),s.jsx(f,{language:"bash",title:"Interface grafica e DNS",code:t0}),s.jsx(M,{type:"success",title:"Dica",children:"O nmtui e muito mais intuitivo para configuracoes avancadas como VLANs e bonding. Basta executar sudo nmtui e navegar pelos menus."})]})}const o0=`# Instalar cliente SSH (ja incluso no Debian)
sudo apt install openssh-client

# Conectar a um servidor
ssh usuario@servidor.com
ssh usuario@192.168.1.100
ssh -p 2222 usuario@servidor.com  # Porta diferente

# Executar comando remoto
ssh usuario@servidor.com "ls -la"
ssh usuario@servidor.com "sudo systemctl status nginx"

# Copiar arquivos
scp arquivo.txt usuario@servidor:/home/usuario/  # Upload
scp usuario@servidor:/home/usuario/arq.txt .     # Download
scp -r pasta/ usuario@servidor:/destino/         # Recursivo`,s0=`# Gerar par de chaves SSH
ssh-keygen -t ed25519 -C "seu@email.com"   # Tipo ed25519 (recomendado)
ssh-keygen -t rsa -b 4096 -C "seu@email"   # RSA 4096 bits (compatibilidade)

# Chaves geradas em:
# ~/.ssh/id_ed25519     (privada — NUNCA compartilhe!)
# ~/.ssh/id_ed25519.pub (publica — pode compartilhar)

# Copiar chave publica para o servidor
ssh-copy-id usuario@servidor.com
# Ou manualmente:
cat ~/.ssh/id_ed25519.pub | ssh usuario@servidor "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"`,i0=`# Arquivo ~/.ssh/config — atalhos de conexao
Host meuserver
    HostName 192.168.1.100
    User joao
    Port 22
    IdentityFile ~/.ssh/id_ed25519

Host producao
    HostName servidor.empresa.com
    User deploy
    Port 2222
    IdentityFile ~/.ssh/deploy_key
    ForwardAgent yes

# Usar: ssh meuserver (em vez de ssh -i ~/.ssh/id_ed25519 -p 22 joao@192.168.1.100)

# Tunnel SSH (port forwarding)
ssh -L 8080:localhost:80 usuario@servidor    # Local: porta 80 do servidor em localhost:8080
ssh -R 2222:localhost:22 usuario@servidor   # Remoto: expor SSH local no servidor
ssh -D 1080 usuario@servidor                # SOCKS proxy`;function l0(){return s.jsxs(z,{title:"SSH — Secure Shell",subtitle:"Conecte-se a servidores remotos, gerencie chaves e configure tunnels SSH no Debian",difficulty:"intermediario",timeToRead:"20 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Conectar a Servidores"}),s.jsx(f,{language:"bash",title:"ssh e scp",code:o0}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Chaves SSH — Autenticacao Segura"}),s.jsx("p",{className:"text-muted-foreground mb-4",children:"Chaves SSH sao mais seguras que senhas. Voce gera um par: a chave privada fica no seu computador, a publica vai no servidor."}),s.jsx(f,{language:"bash",title:"ssh-keygen e ssh-copy-id",code:s0}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Arquivo ~/.ssh/config e Tunnels"}),s.jsx(f,{language:"bash",title:"Configuracao e tunneling",code:i0}),s.jsx(M,{type:"danger",title:"Proteja sua chave privada!",children:"Nunca compartilhe ~/.ssh/id_ed25519. Sempre use passphrase ao gerar a chave. Se comprometida, remova do authorized_keys de todos os servidores imediatamente."})]})}const r0=`# UFW — Uncomplicated Firewall (recomendado para Debian)
sudo apt install ufw

# Configurar politica padrao (rejeitar entrada, permitir saida)
sudo ufw default deny incoming
sudo ufw default allow outgoing

# Regras comuns
sudo ufw allow ssh             # SSH (porta 22)
sudo ufw allow 22/tcp          # Alternativa explicita
sudo ufw allow 80/tcp          # HTTP
sudo ufw allow 443/tcp         # HTTPS
sudo ufw allow 3306/tcp        # MySQL
sudo ufw allow from 192.168.1.0/24  # Subnet inteira

# Ativar o firewall
sudo ufw enable
sudo ufw status verbose        # Ver regras`,c0=`# Regras avancadas do UFW
sudo ufw allow from 192.168.1.100 to any port 22  # SSH apenas de um IP
sudo ufw deny 3306             # Bloquear MySQL externamente
sudo ufw allow proto tcp from any to any port 80,443  # HTTP e HTTPS

# Limitar tentativas (anti-brute-force para SSH)
sudo ufw limit ssh             # Max 6 tentativas em 30s

# Remover regras
sudo ufw delete allow 80/tcp   # Remover por especificacao
sudo ufw status numbered       # Ver com numeros
sudo ufw delete 2             # Remover pela numero

# Desabilitar e resetar
sudo ufw disable
sudo ufw reset`,u0=`# iptables — firewall de baixo nivel (mais complexo)
sudo iptables -L -n -v         # Listar regras
sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT  # Aceitar SSH
sudo iptables -A INPUT -j DROP # Descartar todo o resto

# Salvar regras do iptables (persistencia)
sudo apt install iptables-persistent
sudo netfilter-persistent save

# nftables — substituto moderno do iptables
sudo apt install nftables
sudo nft list ruleset          # Ver regras atuais
# O nftables e o backend moderno do UFW no Debian 10+`;function d0(){return s.jsxs(z,{title:"Firewall — UFW e iptables",subtitle:"Configure e gerencie o firewall no Debian com UFW, iptables e nftables",difficulty:"intermediario",timeToRead:"18 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"UFW — Firewall Simplificado"}),s.jsx("p",{className:"text-muted-foreground mb-4",children:"O UFW (Uncomplicated Firewall) e a forma mais facil de gerenciar o firewall no Debian. E um wrapper amigavel sobre o iptables."}),s.jsx(f,{language:"bash",title:"UFW basico",code:r0}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Regras Avancadas do UFW"}),s.jsx(f,{language:"bash",title:"Regras especificas e limite",code:c0}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"iptables e nftables"}),s.jsx(f,{language:"bash",title:"Camada de baixo nivel",code:u0}),s.jsx(M,{type:"warning",title:"Cuidado ao habilitar o firewall remotamente",children:"Se voce estiver conectado via SSH, certifique-se de ter sudo ufw allow ssh ANTES de sudo ufw enable, para nao se trancar do servidor."})]})}const m0=`# scp — Secure Copy via SSH
scp arquivo.txt usuario@servidor:/destino/    # Upload
scp usuario@servidor:/caminho/arq.txt .       # Download
scp -r pasta/ usuario@servidor:/destino/      # Recursivo
scp -P 2222 arquivo usuario@servidor:/dest/   # Porta diferente
scp -C arquivo usuario@servidor:/dest/        # Com compressao`,f0=`# rsync — sincronizacao eficiente (envia apenas diferencas)
rsync -avz /origem/ /destino/                 # Local
rsync -avz /home/usuario/ usuario@server:/backup/  # Para servidor
rsync -avz usuario@server:/backup/ /local/   # Do servidor
rsync -avz --delete /origem/ /destino/        # Deletar extras no destino
rsync -avz --progress --stats arquivo server:/dest/ # Com progresso
rsync -avz --exclude='*.tmp' --exclude='node_modules' /src/ /dest/
rsync -avz -e "ssh -p 2222" /src/ user@host:/dst/  # SSH na porta 2222`,p0=`# wget e curl — baixar arquivos da internet
wget https://exemplo.com/arquivo.zip
wget -O nome-local.zip https://url.com/arquivo
wget -c https://url.com/grande-arquivo.iso    # Continuar download interrompido
wget -r -np https://site.com/pasta/          # Download recursivo

curl -O https://exemplo.com/arquivo.zip       # Baixar arquivo
curl -o nome-local.zip https://url.com/arq   # Salvar com nome especifico
curl -L https://url.com/redirect             # Seguir redirecionamentos
curl -I https://url.com                      # Apenas headers
curl -X POST -d "key=value" https://api.com  # POST request
curl -H "Authorization: Bearer TOKEN" https://api.com`;function h0(){return s.jsxs(z,{title:"Transferencia de Arquivos",subtitle:"Transfira arquivos com seguranca usando scp, rsync, wget e curl no Debian",difficulty:"intermediario",timeToRead:"16 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"scp — Copia Segura via SSH"}),s.jsx(f,{language:"bash",title:"Usando scp",code:m0}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"rsync — Sincronizacao Eficiente"}),s.jsx("p",{className:"text-muted-foreground mb-4",children:"O rsync e superior ao scp para sincronizacao: transfere apenas o que mudou, suporta retomada de transferencias e pode excluir arquivos do destino que foram removidos na origem."}),s.jsx(f,{language:"bash",title:"rsync",code:f0}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"wget e curl"}),s.jsx(f,{language:"bash",title:"Baixar da internet",code:p0}),s.jsx(M,{type:"success",title:"rsync para backup",children:"rsync -avz --delete /home/ /mnt/backup/home/ e um comando de backup completo. Executado via cron, cria backups incrementais eficientes."})]})}const g0=`# Ferramentas de consulta DNS
nslookup google.com           # Consulta DNS basica
nslookup google.com 8.8.8.8  # Consultar servidor especifico

dig google.com                # Consulta completa
dig google.com A              # Apenas registros A (IPv4)
dig google.com AAAA           # Registros IPv6
dig google.com MX             # Registros de email
dig google.com NS             # Nameservers
dig google.com +short         # Apenas resposta
dig @8.8.8.8 google.com       # Consultar servidor especifico

host google.com               # Resolucao simples
host -t MX google.com        # Tipo especifico`,b0=`# Configuracao de DNS no Debian
cat /etc/resolv.conf          # Configuracao atual de DNS
cat /etc/hosts                # Resolucao local (hosts file)

# Adicionar entradas ao /etc/hosts
sudo nano /etc/hosts
# Formato: IP hostname aliases
127.0.0.1    localhost
192.168.1.10 meuservidor meuservidor.local
10.0.0.1     banco db.interno

# Ver qual servidor DNS esta sendo usado
resolvectl status
nmcli device show | grep DNS`,v0=`# Configurar DNS customizado (systemd-resolved)
sudo nano /etc/systemd/resolved.conf
# [Resolve]
# DNS=1.1.1.1 8.8.8.8
# FallbackDNS=9.9.9.9

sudo systemctl restart systemd-resolved

# DNS via NetworkManager
nmcli connection modify "Nome" ipv4.dns "1.1.1.1,8.8.8.8"
nmcli connection modify "Nome" ipv4.ignore-auto-dns yes
nmcli connection up "Nome"

# Limpar cache DNS
sudo resolvectl flush-caches
sudo systemctl restart systemd-resolved`;function x0(){return s.jsxs(z,{title:"DNS e Resolucao de Nomes",subtitle:"Entenda e configure DNS, resolucao de nomes e o arquivo hosts no Debian",difficulty:"intermediario",timeToRead:"15 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Consultar DNS"}),s.jsx(f,{language:"bash",title:"nslookup, dig, host",code:g0}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Configuracao Local"}),s.jsx(f,{language:"bash",title:"/etc/resolv.conf e /etc/hosts",code:b0}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Configurar DNS Customizado"}),s.jsx(f,{language:"bash",title:"systemd-resolved e NetworkManager",code:v0}),s.jsx(M,{type:"info",title:"DNS Recomendado",children:"Para privacidade: Cloudflare 1.1.1.1 ou Quad9 9.9.9.9. Para velocidade: Google 8.8.8.8. O systemd-resolved no Debian 12 ja usa DoT (DNS over TLS) quando configurado."})]})}const y0=`# OpenVPN — instalar cliente
sudo apt install openvpn network-manager-openvpn
sudo apt install network-manager-openvpn-gnome  # Plugin GNOME

# Conectar com arquivo .ovpn
sudo openvpn --config cliente.ovpn
sudo openvpn --config cliente.ovpn --daemon  # Background

# Via NetworkManager
nmcli connection import type openvpn file cliente.ovpn
nmcli connection up nome-vpn
nmcli connection down nome-vpn`,S0=`# WireGuard — VPN moderna, rapida e simples
sudo apt install wireguard

# Gerar par de chaves
wg genkey | tee /etc/wireguard/privatekey | wg pubkey > /etc/wireguard/publickey
chmod 600 /etc/wireguard/privatekey

# Arquivo de configuracao /etc/wireguard/wg0.conf
[Interface]
PrivateKey = CHAVE_PRIVADA_AQUI
Address = 10.0.0.2/24
DNS = 1.1.1.1

[Peer]
PublicKey = CHAVE_PUBLICA_DO_SERVIDOR
Endpoint = servidor.com:51820
AllowedIPs = 0.0.0.0/0  # Todo o trafico pelo tunnel
PersistentKeepalive = 25

# Iniciar VPN
sudo wg-quick up wg0
sudo wg-quick down wg0
sudo systemctl enable --now wg-quick@wg0  # Persistente`;function j0(){return s.jsxs(z,{title:"VPN — OpenVPN e WireGuard",subtitle:"Configure e use VPNs com OpenVPN e WireGuard no Debian para conexoes seguras",difficulty:"avancado",timeToRead:"18 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"OpenVPN"}),s.jsx(f,{language:"bash",title:"Instalacao e uso do OpenVPN",code:y0}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"WireGuard"}),s.jsx("p",{className:"text-muted-foreground mb-4",children:"O WireGuard e uma VPN moderna incluida no kernel Linux desde a versao 5.6. E muito mais rapido que OpenVPN, com configuracao mais simples e melhor seguranca por padrao."}),s.jsx(f,{language:"bash",title:"Configurar WireGuard",code:S0}),s.jsx(M,{type:"success",title:"WireGuard vs OpenVPN",children:"WireGuard: mais rapido, mais simples, incluido no kernel, melhor para uso pessoal. OpenVPN: mais compativel, mais maduro, mais opcoes de configuracao, padrao corporativo."})]})}const A0=`# Verificar servicos desnecessarios
sudo systemctl list-units --type=service --state=running
# Desabilitar o que nao precisar:
sudo systemctl disable --now bluetooth.service
sudo systemctl disable --now cups.service   # Impressao

# Verificar portas abertas
ss -tulpn
# Fechar portas desnecessarias com UFW:
sudo ufw deny [porta]`,D0=`# Atualizacoes automaticas de seguranca
sudo apt install unattended-upgrades apt-listchanges
sudo dpkg-reconfigure unattended-upgrades

# Configurar /etc/apt/apt.conf.d/50unattended-upgrades
Unattended-Upgrade::Automatic-Reboot "false";
Unattended-Upgrade::Mail "admin@example.com";

# Verificar configuracao
sudo unattended-upgrade --dry-run -d

# Auditoria basica do sistema
sudo apt install lynis
sudo lynis audit system     # Auditoria completa`,N0=`# SSH Hardening basico
sudo nano /etc/ssh/sshd_config

# Configuracoes essenciais:
Port 2222                    # Mudar porta padrao (opcional)
PermitRootLogin no           # Nunca! Use sudo.
PasswordAuthentication no    # Usar apenas chaves SSH
MaxAuthTries 3               # Max 3 tentativas
AllowUsers joao maria        # Apenas esses usuarios
ClientAliveInterval 300      # Timeout de 5 min
ClientAliveCountMax 2        # Desconectar apos 2 timeouts

sudo systemctl reload sshd`,E0=[{title:"Atualize regularmente",desc:"Execute apt update && apt upgrade toda semana. Ative unattended-upgrades para patches de seguranca automaticos."},{title:"Principio do menor privilegio",desc:"Cada usuario e servico deve ter apenas as permissoes necessarias. Nunca rode servicos como root."},{title:"Desative o que nao usa",desc:"Cada servico rodando e uma superficie de ataque. Desative o que nao precisar."},{title:"Monitore logs",desc:"Revise /var/log/auth.log regularmente. Instale fail2ban para bloqueio automatico."},{title:"Firewall sempre ativo",desc:"Habilite UFW com politica padrao deny incoming. Libere apenas as portas necessarias."}];function w0(){return s.jsxs(z,{title:"Hardening e Seguranca",subtitle:"Boas praticas de seguranca, hardening do sistema e SSH, auditoria e protecao do Debian",difficulty:"avancado",timeToRead:"22 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Minimizar Superficie de Ataque"}),s.jsx(f,{language:"bash",title:"Servicos e portas desnecessarios",code:A0}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Atualizacoes e Auditoria"}),s.jsx(f,{language:"bash",title:"Atualizacoes automaticas e lynis",code:D0}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"SSH Hardening"}),s.jsx(f,{language:"bash",title:"/etc/ssh/sshd_config",code:N0}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Boas Praticas"}),s.jsx("div",{className:"space-y-4",children:E0.map(i=>s.jsxs("div",{className:"p-4 rounded-xl border border-border bg-card",children:[s.jsx("div",{className:"font-semibold mb-1",children:i.title}),s.jsx("p",{className:"text-sm text-muted-foreground",children:i.desc})]},i.title))})]})}const T0=`# AppArmor - Controle de Acesso Obrigatorio (MAC)
# No Debian 10+, AppArmor esta habilitado por padrao!
sudo systemctl status apparmor
aa-status                    # Ver perfis ativos

# Modos de perfis:
# enforce - bloqueia violacoes
# complain - apenas loga violacoes (util para aprender)
# disabled - perfil desativado`,k0=`# Gerenciar perfis AppArmor
sudo apt install apparmor-utils apparmor-profiles

# Colocar em modo complain (para desenvolvimento)
sudo aa-complain /usr/sbin/nginx

# Colocar em enforce
sudo aa-enforce /usr/sbin/nginx

# Ver perfis
ls /etc/apparmor.d/           # Perfis instalados
aa-status | grep enforce      # Perfis em enforce
aa-status | grep complain     # Perfis em complain

# Ver logs de violacoes
sudo aa-logprof               # Analisar e corrigir logs`,C0=`# Criar perfil basico para um programa
sudo aa-genprof /opt/meuapp/meuapp   # Gerar perfil automaticamente
# Execute o programa durante aa-genprof para capturar acessos
# Pressione S para salvar

# Perfil manual em /etc/apparmor.d/opt.meuapp.meuapp
#include <tunables/global>

/opt/meuapp/meuapp {
  #include <abstractions/base>
  
  /opt/meuapp/meuapp mr,        # Permissao de execucao
  /var/log/meuapp/ rw,          # Escrever logs
  /etc/meuapp.conf r,           # Ler configuracao
  deny /etc/ w,                  # Negar escrita em /etc
}

sudo apparmor_parser -r /etc/apparmor.d/opt.meuapp.meuapp`;function M0(){return s.jsxs(z,{title:"AppArmor",subtitle:"Configure e gerencie o AppArmor para controle de acesso mandatorio no Debian",difficulty:"avancado",timeToRead:"18 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"O que e o AppArmor?"}),s.jsx("p",{className:"text-muted-foreground mb-4",children:"O AppArmor e um sistema de Controle de Acesso Mandatorio (MAC) que restringe o que programas podem fazer, independentemente das permissoes do usuario. Habilitado por padrao no Debian 10+."}),s.jsx(f,{language:"bash",title:"Status e modos",code:T0}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Gerenciar Perfis"}),s.jsx(f,{language:"bash",title:"enforce, complain e aa-status",code:k0}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Criar Perfis Customizados"}),s.jsx(f,{language:"bash",title:"aa-genprof e perfil manual",code:C0}),s.jsx(M,{type:"info",title:"AppArmor vs SELinux",children:"O Debian usa AppArmor (mais simples), enquanto o RHEL/CentOS usa SELinux (mais poderoso). Ambos implementam MAC mas com abordagens diferentes. O Ubuntu tambem usa AppArmor por padrao."})]})}const R0=`# Gerar par de chaves GPG
gpg --full-generate-key
# Escolha: RSA and RSA, 4096 bits, expiracao 2y, nome, email, passphrase

# Ver chaves
gpg --list-keys               # Chaves publicas
gpg --list-secret-keys        # Chaves privadas

# Exportar chave publica (para compartilhar)
gpg --armor --export seu@email.com > chave_publica.asc
gpg --armor --export seu@email.com | xclip  # Copiar para clipboard`,z0=`# Cifrar e decifrar arquivos
# Cifrar para um destinatario (usa a chave publica dele)
gpg --encrypt --recipient destinatario@email.com arquivo.txt
# Cria: arquivo.txt.gpg

# Cifrar com senha simetrica
gpg --symmetric arquivo.txt
gpg -c arquivo.txt            # Shorthand

# Decifrar
gpg --decrypt arquivo.txt.gpg
gpg --output saida.txt --decrypt arquivo.txt.gpg`,q0=`# Assinar arquivos
gpg --sign arquivo.txt           # Assinatura incorporada
gpg --detach-sign arquivo.txt    # Assinatura separada (.sig)
gpg --armor --detach-sign arq.txt  # Assinatura em texto ASCII

# Verificar assinatura
gpg --verify arquivo.txt.sig arquivo.txt  # Verificar
gpg --verify arquivo.txt.gpg             # Assinatura incorporada

# Importar chave publica de terceiros
gpg --import chave_publica.asc
gpg --keyserver keys.openpgp.org --recv-keys ID_DA_CHAVE

# Assinar commits do git com GPG
git config --global user.signingkey ID_CHAVE
git config --global commit.gpgsign true`;function O0(){return s.jsxs(z,{title:"GPG — Criptografia e Assinatura",subtitle:"Use GPG para criptografar arquivos, assinar commits e verificar autenticidade no Debian",difficulty:"avancado",timeToRead:"18 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Gerar e Gerenciar Chaves"}),s.jsx(f,{language:"bash",title:"gpg --gen-key e gerenciamento",code:R0}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Cifrar e Decifrar"}),s.jsx(f,{language:"bash",title:"Criptografia de arquivos",code:z0}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Assinar e Verificar"}),s.jsx(f,{language:"bash",title:"Assinatura digital e verificacao",code:q0}),s.jsx(M,{type:"success",title:"GPG no Debian",children:"O Debian usa GPG para assinar pacotes nos repositorios. Quando voce executa apt update, o APT verifica as assinaturas GPG de todos os metadados — garantindo que nao foram adulterados."})]})}const U0=`# LUKS — Linux Unified Key Setup
# Criptografar uma particao (DESTROI os dados!)
sudo cryptsetup luksFormat /dev/sdb1
# Digitar YES (maiusculo) para confirmar, depois a senha

# Abrir (decrypt) a particao cifrada
sudo cryptsetup luksOpen /dev/sdb1 dados-cifrados
# Disponivel em /dev/mapper/dados-cifrados

# Formatar e montar
sudo mkfs.ext4 /dev/mapper/dados-cifrados
sudo mount /dev/mapper/dados-cifrados /mnt/dados

# Fechar (unmount e fechar)
sudo umount /mnt/dados
sudo cryptsetup luksClose dados-cifrados`,L0=`# Informacoes do volume LUKS
sudo cryptsetup luksDump /dev/sdb1

# Gerenciar senhas (slots — ate 8 senhas por volume)
sudo cryptsetup luksAddKey /dev/sdb1     # Adicionar nova senha
sudo cryptsetup luksRemoveKey /dev/sdb1  # Remover uma senha
sudo cryptsetup luksChangeKey /dev/sdb1  # Alterar senha

# Adicionar backup da chave mestra (para recuperacao)
sudo cryptsetup luksHeaderBackup /dev/sdb1 --header-backup-file backup-header.bin
sudo cryptsetup luksHeaderRestore /dev/sdb1 --header-backup-file backup-header.bin`,G0=`# Montagem automatica de volume LUKS (/etc/crypttab + /etc/fstab)
# 1. Obter UUID do disco
sudo blkid /dev/sdb1

# 2. Adicionar ao /etc/crypttab
# nome_mapeador  UUID=...  none  luks
dados-cifrados   UUID=abc-123  none  luks

# 3. Adicionar ao /etc/fstab
/dev/mapper/dados-cifrados  /mnt/dados  ext4  defaults  0  2

# O sistema pedira a senha no boot

# Criptografar arquivo individual com openssl
openssl enc -aes-256-cbc -salt -in arquivo.txt -out arquivo.enc
openssl enc -d -aes-256-cbc -in arquivo.enc -out arquivo.txt`;function B0(){return s.jsxs(z,{title:"LUKS e Criptografia de Disco",subtitle:"Criptografe particoes e discos com LUKS e gerencie volumes cifrados no Debian",difficulty:"avancado",timeToRead:"20 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"LUKS — Criptografar Particao"}),s.jsx(M,{type:"danger",title:"luksFormat DESTROI os dados!",children:"O comando luksFormat apaga todos os dados da particao. Certifique-se de ter backup e de estar no dispositivo certo antes de executar."}),s.jsx(f,{language:"bash",title:"Criar e usar volume LUKS",code:U0}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Gerenciar Senhas e Header"}),s.jsx(f,{language:"bash",title:"Slots de senha e backup do header",code:L0}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Montagem Automatica"}),s.jsx(f,{language:"bash",title:"crypttab e fstab",code:G0})]})}const _0=`# /etc/ssh/sshd_config — configuracoes essenciais de seguranca

# Proibir login como root
PermitRootLogin no

# Usar apenas autenticacao por chave
PasswordAuthentication no
PubkeyAuthentication yes

# Permitir apenas usuarios especificos
AllowUsers joao maria admin

# Mudar porta (dificulta bots automaticos)
Port 2222

# Limitar tentativas
MaxAuthTries 3
MaxSessions 5

# Timeout de sessao inativa (5 min)
ClientAliveInterval 300
ClientAliveCountMax 2

# Desabilitar recursos nao usados
X11Forwarding no
AllowTcpForwarding no
AllowAgentForwarding no

sudo systemctl reload sshd   # Aplicar mudancas`,H0=`# Instalar e configurar fail2ban para SSH
sudo apt install fail2ban
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
sudo nano /etc/fail2ban/jail.local

# Configurar jail do SSH:
[sshd]
enabled = true
port = 2222          # Mesma porta do sshd_config
logpath = %(sshd_log)s
maxretry = 3         # Bloquear apos 3 falhas
bantime = 3600       # Banir por 1 hora (em segundos)
findtime = 600       # Janela de 10 minutos

sudo systemctl enable --now fail2ban
sudo fail2ban-client status sshd   # Ver status
sudo fail2ban-client set sshd unbanip 1.2.3.4  # Desbanir IP`,V0=`# Chaves SSH com passphrase + ssh-agent
ssh-keygen -t ed25519 -C "email@example.com" -f ~/.ssh/id_ed25519
# Sempre use passphrase!

# Adicionar ao ssh-agent (para nao digitar toda vez)
eval $(ssh-agent)
ssh-add ~/.ssh/id_ed25519

# Usar certificados SSH em vez de chaves (mais escalavel)
# Para grandes infraestruturas com muitos servidores:
ssh-keygen -s /etc/ssh/ca -I "joao@empresa" -n joao,admin -V +365d ~/.ssh/id_ed25519.pub

# Auditar authorized_keys nos servidores
for server in server1 server2 server3; do
  echo "=== $server ==="
  ssh $server "cat ~/.ssh/authorized_keys"
done`;function P0(){return s.jsxs(z,{title:"SSH Hardening",subtitle:"Proteja o servidor SSH do Debian com configuracoes avancadas, fail2ban e melhores praticas",difficulty:"avancado",timeToRead:"20 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"sshd_config — Configuracoes de Seguranca"}),s.jsx(f,{language:"bash",title:"Hardening do sshd",code:_0}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"fail2ban — Protecao contra Brute Force"}),s.jsx(f,{language:"bash",title:"Configurar fail2ban",code:H0}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Chaves com Passphrase e Certificados"}),s.jsx(f,{language:"bash",title:"Praticas avancadas",code:V0}),s.jsx(M,{type:"warning",title:"Antes de endurecer o SSH",children:"Mantenha uma sessao SSH aberta enquanto faz mudancas no sshd_config. Se cometer um erro, voce ainda podera corrigir sem perder o acesso."})]})}const Q0=`# Instalar e iniciar fail2ban
sudo apt install fail2ban
sudo systemctl enable --now fail2ban

# Status geral
sudo fail2ban-client status
sudo fail2ban-client status sshd

# Ver IPs banidos
sudo iptables -L -n | grep REJECT
sudo fail2ban-client set sshd banip 1.2.3.4   # Banir manualmente
sudo fail2ban-client set sshd unbanip 1.2.3.4 # Desbanir`,X0=`# Configurar jails personalizadas
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
sudo nano /etc/fail2ban/jail.local

[DEFAULT]
ignoreip = 127.0.0.1/8 192.168.1.0/24  # IPs que nunca sao banidos
bantime = 3600                           # 1 hora de ban
findtime = 600                           # Janela de 10 min
maxretry = 3                             # Max tentativas

[sshd]
enabled = true
port = 22,2222

[nginx-http-auth]
enabled = true
port = http,https
logpath = /var/log/nginx/error.log

[apache-auth]
enabled = true
port = http,https
logpath = /var/log/apache2/error.log`,Y0=`# Criar jail customizada para sua aplicacao
sudo nano /etc/fail2ban/jail.d/meuapp.conf

[meuapp-login]
enabled = true
filter = meuapp-login
port = 8080
logpath = /var/log/meuapp/access.log
maxretry = 5
bantime = 7200

# Criar filtro em /etc/fail2ban/filter.d/meuapp-login.conf
[Definition]
failregex = ^.*Login failed for.*<HOST>.*$
ignoreregex =

# Testar filtro
sudo fail2ban-regex /var/log/meuapp/access.log /etc/fail2ban/filter.d/meuapp-login.conf

# Recarregar
sudo systemctl reload fail2ban`;function $0(){return s.jsxs(z,{title:"Fail2ban",subtitle:"Proteja servicos do Debian contra ataques de forca bruta com fail2ban",difficulty:"intermediario",timeToRead:"16 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Instalar e Monitorar"}),s.jsx(f,{language:"bash",title:"fail2ban basico",code:Q0}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Configurar Jails"}),s.jsx("p",{className:"text-muted-foreground mb-4",children:"Jails sao regras que monitoram arquivos de log especificos e bloqueiam IPs que violam os limites definidos. Cada servico tem sua jail."}),s.jsx(f,{language:"bash",title:"jail.local — configuracao principal",code:X0}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Jails Customizadas"}),s.jsx(f,{language:"bash",title:"Proteger sua propria aplicacao",code:Y0})]})}const K0=`# auditd — servico de auditoria do Linux
sudo apt install auditd audispd-plugins
sudo systemctl enable --now auditd

# Ver regras de auditoria atuais
sudo auditctl -l

# Adicionar regras
sudo auditctl -w /etc/passwd -p wa -k mudancas-senha   # Monitorar passwd
sudo auditctl -w /etc/sudoers -p wa -k sudo-mudancas   # Monitorar sudoers
sudo auditctl -w /bin/su -p x -k uso-su               # Monitorar uso do su
sudo auditctl -a exit,always -F arch=b64 -S execve -k exec-monitoramento`,I0=`# Consultar logs de auditoria
ausearch -k mudancas-senha      # Buscar por chave
ausearch -m login               # Eventos de login
ausearch -ts today              # Hoje
ausearch -ts yesterday          # Ontem
ausearch -u joao                # Por usuario
ausearch -i -m USER_AUTH        # Autenticacoes (formato legivel)

# Relatorios
aureport                         # Sumario geral
aureport --failed                # Eventos com falha
aureport --login                 # Relatorio de login
aureport --auth --failed         # Autenticacoes falhas`,Z0=`# AIDE — Advanced Intrusion Detection Environment
sudo apt install aide
sudo aideinit                    # Inicializar banco de dados
sudo cp /var/lib/aide/aide.db.new /var/lib/aide/aide.db

# Verificar integridade
sudo aide --check                # Comparar com o banco de dados

# Automatizar verificacao diaria (cron)
echo "0 4 * * * root /usr/sbin/aide --check 2>&1 | mail -s 'AIDE Report' admin@example.com" | sudo tee /etc/cron.d/aide-check

# lynis — auditoria de seguranca geral
sudo apt install lynis
sudo lynis audit system          # Auditoria completa (pode demorar)
sudo lynis show details TEST-ID  # Detalhes de um teste especifico`;function F0(){return s.jsxs(z,{title:"Auditoria do Sistema",subtitle:"Implemente auditoria de seguranca com auditd, AIDE e lynis no Debian",difficulty:"avancado",timeToRead:"18 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"auditd — Auditoria do Kernel"}),s.jsx(f,{language:"bash",title:"Configurar e usar auditd",code:K0}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Consultar Logs de Auditoria"}),s.jsx(f,{language:"bash",title:"ausearch e aureport",code:I0}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"AIDE e lynis"}),s.jsx(f,{language:"bash",title:"Integridade de arquivos e auditoria geral",code:Z0}),s.jsx(M,{type:"info",title:"Conformidade e PCI-DSS",children:"Em ambientes que exigem conformidade (PCI-DSS, HIPAA, SOC 2), auditoria com auditd e AIDE e praticamente obrigatorio. O lynis ajuda a identificar lacunas de seguranca."})]})}const J0=[{name:"GNOME",desc:"Ambiente padrao do Debian. Moderno, elegante, muito polido. Consome mais recursos.",pkg:"task-gnome-desktop",ram:"~2GB"},{name:"KDE Plasma",desc:"Altamente customizavel, visual impressionante, feature-rich. Consumo moderado.",pkg:"task-kde-desktop",ram:"~1.5GB"},{name:"XFCE",desc:"Leve e rapido, ideal para hardware antigo. Menos bonito mas muito funcional.",pkg:"task-xfce-desktop",ram:"~512MB"},{name:"LXDE/LXQt",desc:"Ultra leve para hardware muito antigo. Interface simples.",pkg:"task-lxde-desktop",ram:"~256MB"},{name:"MATE",desc:"Fork do GNOME 2, classico e estavel. Bom equili­brio entre recursos e leveza.",pkg:"task-mate-desktop",ram:"~512MB"},{name:"Cinnamon",desc:"Desenvolvido pelo Linux Mint, interface tradicional Windows-like.",pkg:"cinnamon",ram:"~1GB"}],W0=`# Instalar ambiente grafico
sudo apt install task-gnome-desktop     # GNOME completo
sudo apt install task-kde-desktop       # KDE Plasma
sudo apt install task-xfce-desktop      # XFCE
sudo apt install task-lxde-desktop      # LXDE

# Instalar apenas o ambiente minimo (sem apps extras)
sudo apt install gnome-session gnome-shell gnome-terminal  # GNOME minimo
sudo apt install plasma-desktop konsole dolphin           # KDE minimo
sudo apt install xfce4 xfce4-terminal                     # XFCE minimo`,e1=`# Gerenciadores de Display (tela de login)
gdm3           # GNOME Display Manager (padrao GNOME)
sddm           # KDE Display Manager
lightdm        # Universal, leve

# Trocar gerenciador de display
sudo dpkg-reconfigure gdm3
# Ou instalar outro e selecionar:
sudo apt install lightdm
sudo systemctl enable --now lightdm
sudo systemctl disable gdm3`;function a1(){return s.jsxs(z,{title:"Ambientes Graficos no Debian",subtitle:"Compare e instale GNOME, KDE, XFCE e outros ambientes de desktop no Debian",difficulty:"iniciante",timeToRead:"15 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Comparativo de Desktops"}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-8",children:J0.map(i=>s.jsxs("div",{className:"p-4 rounded-xl border border-border bg-card",children:[s.jsx("div",{className:"font-semibold text-primary mb-1",children:i.name}),s.jsx("p",{className:"text-sm text-muted-foreground mb-2",children:i.desc}),s.jsxs("div",{className:"text-xs text-muted-foreground",children:[s.jsx("code",{children:i.pkg})," • RAM: ",i.ram]})]},i.name))}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Instalar o Ambiente"}),s.jsx(f,{language:"bash",title:"Instalacao de ambientes graficos",code:W0}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Gerenciadores de Display"}),s.jsx(f,{language:"bash",title:"GDM3, SDDM, LightDM",code:e1}),s.jsx(M,{type:"info",title:"Qual escolher?",children:"Para hardware moderno: GNOME (padrao) ou KDE. Para hardware antigo/limitado: XFCE ou LXDE. Para servidores: nenhum — instale apenas o que precisar via SSH."})]})}const t1=`# Instalar GNOME completo
sudo apt install task-gnome-desktop
# Ou GNOME minimal
sudo apt install gnome-core

# Ferramentas de configuracao
sudo apt install gnome-tweaks         # Customizacoes avancadas
sudo apt install gnome-extensions-app # Gerenciar extensoes
sudo apt install dconf-editor         # Editor de configuracoes avancadas

# Ver versao do GNOME
gnome-shell --version`,n1=`# Extensoes populares do GNOME
# Instalar via https://extensions.gnome.org (requer plugin do navegador)
# Ou via apt:
sudo apt install gnome-shell-extensions

# Extensoes essenciais:
# - Dash to Panel: barra de tarefas estilo Windows
# - Clipboard Indicator: gerenciador de area de transferencia
# - Night Light Slider: controle de luz noturna
# - Hide Top Bar: esconder barra superior em tela cheia

# Habilitar/desabilitar extensoes
gnome-extensions list
gnome-extensions enable nome-extensao@dominio.com`,o1=`# Atalhos uteis do GNOME
Super               # Visao de atividades
Super + A           # Todos os aplicativos
Super + Tab         # Alternar janelas (mesmo app)
Alt + Tab           # Alternar entre aplicativos
Super + D           # Mostrar desktop
Ctrl + Alt + T      # Abrir terminal
Ctrl + Alt + F2     # Terminal virtual (TTY2)
Super + seta        # Encaixar janelas`;function s1(){return s.jsxs(z,{title:"GNOME no Debian",subtitle:"Configure, personalize e use o GNOME de forma produtiva no Debian",difficulty:"iniciante",timeToRead:"14 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Instalar e Configurar"}),s.jsx(f,{language:"bash",title:"Instalacao e ferramentas",code:t1}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Extensoes do GNOME"}),s.jsx(f,{language:"bash",title:"Extensoes populares",code:n1}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Atalhos de Teclado"}),s.jsx(f,{language:"bash",title:"Atalhos do GNOME",code:o1}),s.jsx(M,{type:"info",title:"GNOME 45 no Debian 12",children:"O Debian 12 Bookworm inclui GNOME 43. Use backports para versoes mais recentes. O GNOME no Debian e mais estavel mas pode ser ligeiramente mais antigo."})]})}const i1=`# Instalar KDE Plasma
sudo apt install task-kde-desktop

# KDE minimal
sudo apt install plasma-desktop konsole dolphin plasma-nm

# Ferramentas de sistema KDE
sudo apt install kde-system-settings
sudo apt install ksystemlog          # Visualizador de logs
sudo apt install krdc                # Desktop remoto

# Ver versao do Plasma
plasmashell --version`,l1=`# Customizacao do KDE
# KDE e altamente customizavel via Interface Grafica
# Configuracoes do Sistema (System Settings):
# - Aparencia: temas, icones, cursores
# - Espaco de Trabalho: comportamento de janelas, atalhos
# - Hardware: display, audio, impressora

# Temas e estilos populares:
sudo apt install breeze-gtk-theme    # Tema GTK compativel com KDE
sudo apt install papirus-icon-theme  # Icones Papirus

# Atalhos essenciais
Alt + F2          # KRunner (buscador universal)
Alt + Tab         # Alternar janelas
Meta (Super)      # Abrir buscador de atividades
Ctrl + F12        # Mostrar desktop (KWin)`;function r1(){return s.jsxs(z,{title:"KDE Plasma no Debian",subtitle:"Configure e personalize o KDE Plasma no Debian para uma experiencia de desktop completa",difficulty:"iniciante",timeToRead:"12 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Instalar KDE"}),s.jsx(f,{language:"bash",title:"Instalacao do KDE Plasma",code:i1}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Customizacao e Atalhos"}),s.jsx(f,{language:"bash",title:"Temas e atalhos",code:l1}),s.jsx(M,{type:"success",title:"KDE e altamente customizavel",children:"O KDE oferece controle granular sobre praticamente todos os aspectos do desktop. Se voce gosta de personalizar seu ambiente, o KDE provavelmente e o melhor para voce no Debian."})]})}const c1=`# Instalar XFCE
sudo apt install task-xfce-desktop
# XFCE minimal
sudo apt install xfce4 xfce4-terminal xfce4-appfinder

# Extras uteis
sudo apt install xfce4-goodies       # Plugins e extras
sudo apt install thunar              # Gerenciador de arquivos
sudo apt install xfce4-power-manager # Gerenciamento de energia
sudo apt install lightdm             # Display manager para XFCE`,u1=`# XFCE para hardware antigo/limitado
# Para sistemas com < 1GB RAM:
sudo apt install xfce4 lightdm xfce4-terminal
# Usar apps leves:
sudo apt install mousepad            # Editor de texto leve
sudo apt install ristretto           # Visualizador de imagens leve
sudo apt install parole              # Player de midia leve
sudo apt install gigolo              # Gerenciar volumes/redes

# Desativar efeitos visuais para mais velocidade:
# Janela Manager Tweaks > Compositor > Desativar`;function d1(){return s.jsxs(z,{title:"XFCE no Debian",subtitle:"Configure o XFCE para um desktop leve e rapido, ideal para hardware com recursos limitados",difficulty:"iniciante",timeToRead:"12 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Instalar XFCE"}),s.jsx(f,{language:"bash",title:"Instalacao do XFCE",code:c1}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"XFCE para Hardware Antigo"}),s.jsx(f,{language:"bash",title:"Configuracao otimizada",code:u1}),s.jsx(M,{type:"success",title:"XFCE no Debian Stable",children:"O XFCE e o ambiente grafico mais estavel e previsivel do Debian. Para servidores que precisam de uma interface grafica minima, XFCE + LightDM e uma excelente combinacao."})]})}const m1=`# Verificar qual display server esta em uso
echo $XDG_SESSION_TYPE         # wayland ou x11
loginctl show-session -p Type  # Tipo da sessao

# X11 (X.org) — o classico
# Configuracao em /etc/X11/xorg.conf.d/
ls /etc/X11/xorg.conf.d/
sudo X -configure               # Gerar xorg.conf automaticamente

# Informacoes da sessao X11
xrandr                          # Monitores e resolucoes
xrandr --output HDMI-1 --mode 1920x1080  # Configurar resolucao
xdpyinfo                        # Informacoes do display`,f1=`# Wayland — o moderno
# Wayland e o padrao no GNOME do Debian 10+
# Para verificar:
echo $WAYLAND_DISPLAY

# Forcar X11 em vez de Wayland (para compatibilidade)
# Em /etc/gdm3/custom.conf:
[daemon]
WaylandEnable=false

# Ou por usuario, em /home/usuario/.profile:
export GDK_BACKEND=x11
export QT_QPA_PLATFORM=xcb

# Ferramentas de diagnostico
wayland-info                    # Info da sessao Wayland
wlr-randr                       # Monitor config (Wayland)`,p1=`# Drivers de video no Debian
# Mesa (Open Source) — padrao
sudo apt install mesa-utils
glxinfo | grep "OpenGL renderer"    # GPU em uso
glxgears                            # Teste de performance

# NVIDIA proprietario
sudo apt install nvidia-detect      # Detectar versao recomendada
sudo nvidia-detect
sudo apt install nvidia-driver      # Driver recomendado
sudo apt install firmware-misc-nonfree nvidia-driver-libs  # Dependencias

# AMD (ja incluido no Mesa/kernel)
sudo apt install firmware-amd-graphics  # Firmware adicional
vainfo                              # Info de aceleracao de video`;function h1(){return s.jsxs(z,{title:"X11 e Wayland",subtitle:"Entenda os display servers, configure resolucoes, drivers de video e diagnostique problemas graficos no Debian",difficulty:"avancado",timeToRead:"16 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"X11 — O Classico"}),s.jsx(f,{language:"bash",title:"X.org e xrandr",code:m1}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Wayland — O Moderno"}),s.jsx(f,{language:"bash",title:"Wayland e forcar X11",code:f1}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Drivers de Video"}),s.jsx(f,{language:"bash",title:"Mesa, NVIDIA e AMD",code:p1}),s.jsx(M,{type:"info",title:"X11 vs Wayland",children:"Wayland e mais seguro e tem melhor suporte a telas de alta DPI. X11 tem melhor compatibilidade com aplicativos mais antigos. O GNOME no Debian usa Wayland por padrao desde o Debian 10."})]})}const g1=`# CUPS — Common Unix Printing System
sudo apt install cups cups-client
sudo systemctl enable --now cups

# Interface web do CUPS
# Acesse: http://localhost:631

# Adicionar ao grupo de administracao do CUPS
sudo usermod -aG lpadmin usuario`,b1=`# Gerenciar impressoras via CLI
lpstat -p -d                     # Ver impressoras e padrao
lpstat -s                        # Status do sistema de impressao
lpadmin -p NomeImpressora -E -v printer_uri  # Adicionar impressora
lpadmin -d NomeImpressora        # Definir impressora padrao

# Imprimir arquivos
lpr arquivo.pdf                  # Imprimir na impressora padrao
lpr -P NomeImpressora arquivo    # Impressora especifica
lp arquivo.pdf                   # Alternativa ao lpr

# Ver fila de impressao
lpq                              # Fila da impressora padrao
lpq -P NomeImpressora            # Fila de impressora especifica
cancel 123                       # Cancelar job 123`,v1=`# Instalar driver de impressora HP
sudo apt install hplip hplip-gui
sudo hp-setup                    # Configurar impressora HP

# Impressoras Canon, Epson, etc
sudo apt install printer-driver-gutenprint  # Drivers genericos

# Samsung/Dell/Xerox via pacote
sudo apt install openprinting-ppds

# Diagnose
sudo apt install cups-pdf        # Impressora PDF virtual (util para testes)
journalctl -u cups               # Logs do CUPS`;function x1(){return s.jsxs(z,{title:"Impressoras no Debian — CUPS",subtitle:"Configure e gerencie impressoras no Debian com CUPS, drivers e linha de comando",difficulty:"intermediario",timeToRead:"14 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Instalar CUPS"}),s.jsx(f,{language:"bash",title:"Instalacao e configuracao basica",code:g1}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Gerenciar Impressoras"}),s.jsx(f,{language:"bash",title:"lpadmin, lpr e lpq",code:b1}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Drivers e Diagnostico"}),s.jsx(f,{language:"bash",title:"HP, Canon, Epson",code:v1}),s.jsx(M,{type:"info",title:"Interface web do CUPS",children:"O CUPS tem uma interface web em http://localhost:631 que facilita muito a configuracao de impressoras. Acesse com as credenciais do seu usuario lpadmin."})]})}const y1=`#!/bin/bash
echo "Ola, Mundo!"
echo "Hoje e: $(date)"
echo "Voce e: $USER"
echo "Diretorio: $PWD"`,S1=`#!/bin/bash
NOME="Joao"
IDADE=30
HOJE=$(date +%Y-%m-%d)
echo "Nome: $NOME"
echo "Idade: $IDADE"
echo "Data: $HOJE"
read -p "Digite seu nome: " NOME_USUARIO
echo "Ola, $NOME_USUARIO!"`,j1=`#!/bin/bash
ARQUIVO="/etc/passwd"
if [ -f "$ARQUIVO" ]; then
    echo "O arquivo existe"
elif [ -d "$ARQUIVO" ]; then
    echo "E um diretorio"
else
    echo "Nao existe"
fi
NUM=10
if [ $NUM -gt 5 ]; then
    echo "$NUM e maior que 5"
fi
if [ "$USER" = "root" ]; then
    echo "Voce e root"
fi`,A1=`#!/bin/bash
for i in 1 2 3 4 5; do
    echo "Numero: $i"
done
for i in $(seq 1 10); do
    echo "Item $i"
done
CONTADOR=0
while [ $CONTADOR -lt 5 ]; do
    echo "Contador: $CONTADOR"
    CONTADOR=$((CONTADOR + 1))
done
for arquivo in /etc/*.conf; do
    echo "Processando: $arquivo"
done`;function D1(){return s.jsxs(z,{title:"Shell Bash — Scripting",subtitle:"Aprenda a escrever scripts bash: variaveis, condicionais, loops e boas praticas no Debian",difficulty:"intermediario",timeToRead:"22 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Primeiro Script"}),s.jsx(f,{language:"bash",title:"Estrutura basica",code:y1}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Variaveis e Entrada"}),s.jsx(f,{language:"bash",title:"Variaveis e read",code:S1}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Condicionais — if/elif/else"}),s.jsx(f,{language:"bash",title:"Estruturas condicionais",code:j1}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Loops — for e while"}),s.jsx(f,{language:"bash",title:"Iteracao",code:A1}),s.jsx(M,{type:"info",title:"Tornar executavel",children:"chmod +x script.sh para tornar executavel, depois ./script.sh para executar. Use bash -n script.sh para verificar sintaxe sem executar."})]})}const N1=`#!/bin/bash
saudar() {
    local nome=$1
    local saudacao=\${2:-"Ola"}
    echo "$saudacao, $nome!"
}
saudar "Joao"
saudar "Maria" "Bom dia"`,E1=`#!/bin/bash
frutas=("maca" "banana" "laranja" "uva")
echo \${frutas[0]}
echo \${frutas[@]}
echo \${#frutas[@]}
frutas+=("manga")
for fruta in "\${frutas[@]}"; do
    echo "Fruta: $fruta"
done
declare -A capitais
capitais["Brasil"]="Brasilia"
echo "\${capitais["Brasil"]}"`,w1=`#!/bin/bash
set -euo pipefail
cleanup() {
    echo "Limpando antes de sair..."
    rm -f /tmp/temp.$
}
trap cleanup EXIT
trap 'echo "Interrompido!"; exit 1' INT TERM`,T1=`#!/bin/bash
STR="Hello, World!"
echo "\${#STR}"
echo "\${STR,,}"
echo "\${STR^^}"
echo "\${STR/World/Debian}"
echo "\${STR#Hello, }"
echo "\${STR:0:5}"
A=10; B=3
echo $((A + B))
echo $((A * B))
echo $((A / B))
echo $((A % B))`;function k1(){return s.jsxs(z,{title:"Bash Avancado",subtitle:"Funcoes, arrays, tratamento de erros e manipulacao de strings em scripts bash",difficulty:"avancado",timeToRead:"22 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Funcoes"}),s.jsx(f,{language:"bash",title:"Definir e usar funcoes",code:N1}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Arrays"}),s.jsx(f,{language:"bash",title:"Arrays indexados e associativos",code:E1}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Tratamento de Erros"}),s.jsx(f,{language:"bash",title:"set -euo pipefail e trap",code:w1}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Manipulacao de Strings"}),s.jsx(f,{language:"bash",title:"Strings e calculos",code:T1})]})}const C1=`#!/bin/bash
set -euo pipefail
ORIGEM="$HOME"
DESTINO="/mnt/backup"
DATA=$(date +%Y%m%d_%H%M%S)
LOG="/var/log/backup.log"
echo "[$DATA] Iniciando backup" | tee -a "$LOG"
if ! mountpoint -q "$DESTINO"; then
    echo "Erro: $DESTINO nao montado" | tee -a "$LOG"
    exit 1
fi
rsync -avz --delete --exclude='*.tmp' --exclude='.cache/' "$ORIGEM/" "$DESTINO/home_$DATA/" 2>&1 | tee -a "$LOG"
echo "Backup concluido!" | tee -a "$LOG"`,M1=`#!/bin/bash
SERVICOS=("nginx" "mariadb" "ssh")
EMAIL="admin@example.com"
for servico in "\\\${SERVICOS[@]}"; do
    if ! systemctl is-active --quiet "$servico"; then
        echo "ALERTA: $servico parado!" | mail -s "Alerta" "$EMAIL"
        systemctl restart "$servico"
        echo "$(date): $servico reiniciado" >> /var/log/reiniciar.log
    fi
done`,R1=`#!/bin/bash
echo "=== Relatorio: $(date) ==="
echo ""; echo "--- Uptime ---"; uptime
echo ""; echo "--- Memoria ---"; free -h
echo ""; echo "--- Disco ---"; df -h | grep -v tmpfs
echo ""; echo "--- CPU ---"; top -bn1 | grep "Cpu(s)"
echo ""; echo "--- Logins falhos ---"
grep "Failed password" /var/log/auth.log | tail -5 2>/dev/null || echo "Nenhum"`;function z1(){return s.jsxs(z,{title:"Scripts Praticos",subtitle:"Scripts bash prontos para uso: backup, monitoramento, relatorios e automacao no Debian",difficulty:"intermediario",timeToRead:"20 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Script de Backup"}),s.jsx(f,{language:"bash",title:"Backup com rsync e log",code:C1}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Monitoramento de Servicos"}),s.jsx(f,{language:"bash",title:"Verificar e reiniciar servicos",code:M1}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Relatorio de Sistema"}),s.jsx(f,{language:"bash",title:"Dashboard do sistema via CLI",code:R1}),s.jsx(M,{type:"success",title:"Automatize com cron",children:"Estes scripts sao ainda mais poderosos quando agendados com cron."})]})}const q1=`grep "erro" arquivo.txt
grep "^Erro" arquivo.txt
grep "erro$" arquivo.txt
grep "err.r" arquivo.txt
grep "[Ee]rro" arquivo.txt
grep "[0-9]" arquivo.txt`,O1=`grep -E "erro|falha" arquivo.txt
grep -E "err(or|o)s?" arquivo.txt
grep -E "[0-9]+" arquivo.txt
grep -E "[0-9]{2,4}" arquivo.txt
grep -E "([0-9]{1,3}\\.){3}[0-9]{1,3}" logs.txt`,U1=`sed 's/velho/novo/' arquivo.txt
sed 's/velho/novo/g' arquivo.txt
sed -i 's/velho/novo/g' arquivo.txt
sed '/^#/d' arquivo.txt

awk '{print $1}' arquivo.txt
awk -F: '{print $1}' /etc/passwd
awk '$3 > 1000' /etc/passwd
awk '{soma += $1} END {print soma}' nums.txt`;function L1(){return s.jsxs(z,{title:"Regex, grep, sed e awk",subtitle:"Domine expressoes regulares e ferramentas de processamento de texto no Debian",difficulty:"avancado",timeToRead:"22 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"grep com Expressoes Regulares"}),s.jsx(f,{language:"bash",title:"grep com BRE",code:q1}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Extended Regex (ERE)"}),s.jsx(f,{language:"bash",title:"grep -E",code:O1}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"sed e awk"}),s.jsx(f,{language:"bash",title:"Transformar e processar texto",code:U1}),s.jsx(M,{type:"info",title:"Pratica",children:"Teste suas regex em https://regex101.com. Use grep --color para ver matches coloridos."})]})}const G1=`bash -x script.sh
set -x
comando_suspeito
set +x
bash -n script.sh`,B1=`#!/bin/bash
set -euo pipefail
for cmd in curl jq rsync; do
    command -v "$cmd" &>/dev/null || { echo "Erro: $cmd nao encontrado"; exit 1; }
done
log() { echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*" | tee -a "$LOG_FILE"; }
log "Script iniciado"
if [ $# -lt 1 ]; then
    echo "Uso: $0 <argumento>"
    exit 1
fi`,_1=`sudo apt install shellcheck
shellcheck script.sh
time ./script.sh
strace -e trace=file ./script.sh 2>&1 | grep -v "^---"`;function H1(){return s.jsxs(z,{title:"Depuracao de Scripts Bash",subtitle:"Tecnicas e ferramentas para debugar e garantir qualidade em scripts bash no Debian",difficulty:"avancado",timeToRead:"16 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Modo Debug — bash -x"}),s.jsx(f,{language:"bash",title:"set -x e bash -n",code:G1}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Boas Praticas Defensivas"}),s.jsx(f,{language:"bash",title:"set -euo pipefail e verificacoes",code:B1}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Ferramentas de Analise"}),s.jsx(f,{language:"bash",title:"shellcheck, strace, time",code:_1}),s.jsx(M,{type:"success",title:"shellcheck e obrigatorio",children:"O shellcheck detecta dezenas de erros comuns. Integre ao seu editor para feedback imediato."})]})}const V1=`sudo apt install apache2
sudo systemctl enable --now apache2
sudo systemctl status apache2
# Acessar: http://localhost ou http://IP-do-servidor
# Raiz do site padrao: /var/www/html/`,P1=`# Habilitar modulos essenciais
sudo a2enmod rewrite          # mod_rewrite (URLs amigaveis)
sudo a2enmod ssl              # HTTPS
sudo a2enmod headers          # Headers HTTP
sudo a2enmod proxy proxy_http # Proxy reverso
sudo systemctl restart apache2

# Configurar um Virtual Host (site)
sudo nano /etc/apache2/sites-available/meusite.conf

<VirtualHost *:80>
    ServerName meusite.com
    ServerAlias www.meusite.com
    DocumentRoot /var/www/meusite

    <Directory /var/www/meusite>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog /var/log/apache2/meusite-error.log
    CustomLog /var/log/apache2/meusite-access.log combined
</VirtualHost>`,Q1=`# Habilitar e testar o site
sudo mkdir -p /var/www/meusite
echo "<h1>Meu Site</h1>" | sudo tee /var/www/meusite/index.html
sudo chown -R www-data:www-data /var/www/meusite
sudo a2ensite meusite
sudo a2dissite 000-default
sudo apache2ctl configtest    # Verificar config
sudo systemctl reload apache2

# HTTPS com Let's Encrypt
sudo apt install certbot python3-certbot-apache
sudo certbot --apache -d meusite.com -d www.meusite.com
# Renovacao automatica ja e configurada pelo certbot`;function X1(){return s.jsxs(z,{title:"Servidor Apache2",subtitle:"Configure o Apache2 com Virtual Hosts, modulos e HTTPS no Debian",difficulty:"intermediario",timeToRead:"20 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Instalar e Iniciar"}),s.jsx(f,{language:"bash",title:"Instalacao basica",code:V1}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Virtual Hosts e Modulos"}),s.jsx(f,{language:"bash",title:"Configurar Virtual Host",code:P1}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Ativar o Site e HTTPS"}),s.jsx(f,{language:"bash",title:"a2ensite e Let's Encrypt",code:Q1}),s.jsx(M,{type:"info",title:"Apache vs Nginx",children:"Apache e mais flexivel para PHP e .htaccess. Nginx e mais performatico para sites estaticos e proxy reverso. Para WordPress e PHP: Apache e uma escolha solida."})]})}const Y1=`sudo apt install nginx
sudo systemctl enable --now nginx
sudo systemctl status nginx
# Raiz padrao: /var/www/html/
# Config principal: /etc/nginx/nginx.conf
# Sites disponiveis: /etc/nginx/sites-available/
# Sites ativos: /etc/nginx/sites-enabled/ (links simbolicos)`,$1=`# Configurar Virtual Host no Nginx
sudo nano /etc/nginx/sites-available/meusite

server {
    listen 80;
    listen [::]:80;
    server_name meusite.com www.meusite.com;
    root /var/www/meusite;
    index index.html index.php;

    location / {
        try_files $uri $uri/ =404;
    }

    access_log /var/log/nginx/meusite-access.log;
    error_log /var/log/nginx/meusite-error.log;
}

# Ativar o site
sudo ln -s /etc/nginx/sites-available/meusite /etc/nginx/sites-enabled/
sudo nginx -t                  # Testar configuracao
sudo systemctl reload nginx`,K1=`# Proxy reverso para app Node.js/Python
server {
    listen 80;
    server_name app.meusite.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_cache_bypass $http_upgrade;
    }
}

# HTTPS com Let's Encrypt
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d meusite.com -d www.meusite.com`;function I1(){return s.jsxs(z,{title:"Servidor Nginx",subtitle:"Configure o Nginx como servidor web e proxy reverso com HTTPS no Debian",difficulty:"intermediario",timeToRead:"20 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Instalar e Configurar"}),s.jsx(f,{language:"bash",title:"Instalacao basica",code:Y1}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Virtual Host"}),s.jsx(f,{language:"bash",title:"Configuracao de site",code:$1}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Proxy Reverso e HTTPS"}),s.jsx(f,{language:"bash",title:"Node.js proxy e Let's Encrypt",code:K1}),s.jsx(M,{type:"success",title:"Nginx para producao",children:"Nginx e o servidor web mais usado em producao. Para apps Node.js, Python (Gunicorn) e similares, configure-o como proxy reverso para receber o trafego publico."})]})}const Z1=`sudo apt install openssh-server
sudo systemctl enable --now ssh
sudo systemctl status ssh

# Configuracao principal: /etc/ssh/sshd_config
sudo nano /etc/ssh/sshd_config

# Configuracoes essenciais:
Port 22
PermitRootLogin no
PasswordAuthentication no
PubkeyAuthentication yes
AllowUsers joao maria
MaxAuthTries 3
ClientAliveInterval 300

sudo systemctl reload ssh     # Aplicar mudancas`,F1=`# Configurar acesso por chaves SSH
# 1. Usuario gera o par de chaves no cliente:
ssh-keygen -t ed25519 -C "usuario@exemplo.com"

# 2. Copiar chave publica para o servidor
ssh-copy-id usuario@servidor

# Ou manualmente no servidor, adicionar ao authorized_keys:
cat chave.pub >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
chmod 700 ~/.ssh`,J1=`# Restricoes avancadas por usuario
# Match block no sshd_config:
Match User deploy
    ForceCommand /opt/deploy/run.sh
    AllowTcpForwarding no
    X11Forwarding no

Match Group backup
    ChrootDirectory /backup
    ForceCommand internal-sftp
    AllowTcpForwarding no

# SFTP apenas (sem shell)
Subsystem sftp /usr/lib/openssh/sftp-server
Match User ftpuser
    ForceCommand internal-sftp
    PasswordAuthentication yes`;function W1(){return s.jsxs(z,{title:"Servidor SSH",subtitle:"Configure e proteja o servidor OpenSSH com chaves, restricoes e Match blocks no Debian",difficulty:"intermediario",timeToRead:"18 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Instalar e Configurar sshd"}),s.jsx(f,{language:"bash",title:"openssh-server e sshd_config",code:Z1}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Autenticacao por Chaves"}),s.jsx(f,{language:"bash",title:"Configurar authorized_keys",code:F1}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Match Blocks e SFTP"}),s.jsx(f,{language:"bash",title:"Restricoes por usuario/grupo",code:J1})]})}const eS=`sudo apt install samba smbclient
sudo systemctl enable --now smbd nmbd

# Adicionar usuario Samba (deve ser usuario Linux existente)
sudo smbpasswd -a joao
sudo smbpasswd -e joao          # Habilitar usuario`,aS=`# Configurar compartilhamento em /etc/samba/smb.conf
[global]
   workgroup = WORKGROUP
   server string = Servidor Debian
   security = user
   map to guest = Bad User

# Compartilhamento publico (sem senha)
[publico]
   path = /srv/samba/publico
   browseable = yes
   read only = yes
   guest ok = yes

# Compartilhamento privado (com autenticacao)
[privado]
   path = /srv/samba/privado
   browseable = yes
   read only = no
   valid users = joao maria
   write list = joao

# Criar diretorios e ajustar permissoes
sudo mkdir -p /srv/samba/publico /srv/samba/privado
sudo chown -R nobody:nogroup /srv/samba/publico
sudo chown -R joao:joao /srv/samba/privado
sudo testparm                   # Validar configuracao
sudo systemctl restart smbd`,tS=`# Verificar compartilhamentos
smbclient -L localhost -U joao  # Listar compartilhamentos do proprio servidor
smbclient //servidor/privado -U joao  # Conectar a um compartilhamento

# Montar compartilhamento Samba no cliente Linux
sudo apt install cifs-utils
sudo mount -t cifs //servidor/privado /mnt/samba -o username=joao
# Montar automaticamente no /etc/fstab:
//servidor/privado  /mnt/samba  cifs  username=joao,password=SENHA,uid=joao,iocharset=utf8  0  0`;function nS(){return s.jsxs(z,{title:"Servidor Samba",subtitle:"Compartilhe arquivos com Windows e Linux via protocolo SMB/CIFS usando Samba no Debian",difficulty:"intermediario",timeToRead:"18 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Instalar Samba"}),s.jsx(f,{language:"bash",title:"Instalacao e usuarios",code:eS}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Configurar Compartilhamentos"}),s.jsx(f,{language:"bash",title:"smb.conf",code:aS}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Conectar e Montar"}),s.jsx(f,{language:"bash",title:"smbclient e montagem via cifs",code:tS})]})}const oS=`# No SERVIDOR NFS
sudo apt install nfs-kernel-server
sudo systemctl enable --now nfs-server

# Configurar exports em /etc/exports
sudo nano /etc/exports

# Sintaxe: diretorio  cliente(opcoes)
/srv/nfs       192.168.1.0/24(rw,sync,no_subtree_check)
/home/shared   192.168.1.0/24(rw,sync,no_root_squash)
/dados         192.168.1.100(ro,sync)  # Somente leitura para um IP

# Exportar os diretorios
sudo exportfs -arv
sudo exportfs -v              # Ver exports ativos
showmount -e localhost        # Ver o que esta sendo compartilhado`,sS=`# No CLIENTE NFS
sudo apt install nfs-common

# Montar manualmente
sudo mount servidor:/srv/nfs /mnt/nfs
sudo mount -t nfs servidor:/home/shared /mnt/shared

# Verificar montagem
df -h
mount | grep nfs

# Montar automaticamente no /etc/fstab
servidor:/srv/nfs  /mnt/nfs  nfs  defaults,nofail  0  0
servidor:/home/shared  /mnt/shared  nfs  rw,sync,hard,intr  0  0`;function iS(){return s.jsxs(z,{title:"Servidor NFS",subtitle:"Compartilhe diretorios entre sistemas Linux via NFS no Debian",difficulty:"intermediario",timeToRead:"15 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Configurar o Servidor NFS"}),s.jsx(f,{language:"bash",title:"nfs-kernel-server e /etc/exports",code:oS}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Configurar o Cliente NFS"}),s.jsx(f,{language:"bash",title:"Montar compartilhamentos NFS",code:sS}),s.jsx(M,{type:"info",title:"NFS vs Samba",children:"NFS e nativo do Linux e mais performatico para redes Linux. Samba e compativel com Windows. Para ambientes exclusivamente Linux (clusters, servidores de arquivo), NFS e a melhor escolha."})]})}const lS=`# Instalar MariaDB (fork do MySQL, padrao no Debian)
sudo apt install mariadb-server mariadb-client
sudo systemctl enable --now mariadb
sudo mysql_secure_installation    # Configuracao inicial segura
sudo mysql -u root               # Entrar como root`,rS=`-- Comandos basicos SQL
SHOW DATABASES;
CREATE DATABASE meuapp CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE meuapp;
SHOW TABLES;

-- Criar usuario e dar permissoes
CREATE USER 'appuser'@'localhost' IDENTIFIED BY 'senha_forte';
GRANT ALL PRIVILEGES ON meuapp.* TO 'appuser'@'localhost';
FLUSH PRIVILEGES;

-- Criar tabela
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- CRUD
INSERT INTO usuarios (nome, email) VALUES ('Joao', 'joao@email.com');
SELECT * FROM usuarios;
UPDATE usuarios SET nome='Joao Silva' WHERE id=1;
DELETE FROM usuarios WHERE id=1;`,cS=`# Backup e restore MySQL
# Backup
sudo mysqldump -u root meuapp > backup_meuapp.sql
sudo mysqldump -u root --all-databases > backup_completo.sql
sudo mysqldump -u root meuapp | gzip > backup_$(date +%Y%m%d).sql.gz

# Restore
sudo mysql -u root meuapp < backup_meuapp.sql
sudo mysql -u root < backup_completo.sql
zcat backup_20240101.sql.gz | sudo mysql -u root meuapp

# Configurar /etc/mysql/mariadb.conf.d/50-server.cnf
# bind-address = 0.0.0.0   # Aceitar conexoes externas (cuidado!)`;function uS(){return s.jsxs(z,{title:"MariaDB / MySQL",subtitle:"Instale, configure e use o MariaDB no Debian para gerenciar bancos de dados",difficulty:"intermediario",timeToRead:"20 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Instalar MariaDB"}),s.jsx(f,{language:"bash",title:"Instalacao e configuracao inicial",code:lS}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Comandos SQL Essenciais"}),s.jsx(f,{language:"sql",title:"DDL, DML e gerenciamento de usuarios",code:rS}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Backup e Restore"}),s.jsx(f,{language:"bash",title:"mysqldump",code:cS}),s.jsx(M,{type:"info",title:"MariaDB vs MySQL",children:"O Debian usa MariaDB por padrao, que e compativel com MySQL mas com melhorias de desempenho e licenca 100% GPL. A maioria dos guias MySQL funciona no MariaDB sem alteracoes."})]})}const dS=`# Instalar PostgreSQL
sudo apt install postgresql postgresql-client
sudo systemctl enable --now postgresql
sudo systemctl status postgresql

# Entrar como usuario postgres (superusuario padrao)
sudo -u postgres psql
# Ou:
sudo su - postgres
psql`,mS=`-- Comandos basicos no psql
\\l                             -- Listar databases
\\c meuapp                      -- Conectar ao banco
\\dt                            -- Listar tabelas
\\d tabela                      -- Descrever tabela
\\q                             -- Sair

-- Criar banco e usuario
CREATE DATABASE meuapp ENCODING 'UTF8' LC_COLLATE 'pt_BR.UTF-8';
CREATE USER appuser WITH ENCRYPTED PASSWORD 'senha_forte';
GRANT ALL PRIVILEGES ON DATABASE meuapp TO appuser;

-- Tabela com tipos modernos
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    dados JSONB,
    criado_em TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO usuarios (nome, email, dados) VALUES ('Joao', 'joao@mail.com', '{"plano": "pro"}');
SELECT * FROM usuarios WHERE dados->>'plano' = 'pro';`,fS=`# Backup e restore PostgreSQL
# Backup de um banco
sudo -u postgres pg_dump meuapp > backup_meuapp.sql
sudo -u postgres pg_dump -Fc meuapp > backup_meuapp.dump  # Formato customizado (mais eficiente)

# Backup de todos os bancos
sudo -u postgres pg_dumpall > backup_completo.sql

# Restore
sudo -u postgres psql meuapp < backup_meuapp.sql
sudo -u postgres pg_restore -d meuapp backup_meuapp.dump

# Configurar acesso remoto em /etc/postgresql/*/main/pg_hba.conf:
# host  all  all  192.168.1.0/24  scram-sha-256
# Em postgresql.conf:
# listen_addresses = '*'`;function pS(){return s.jsxs(z,{title:"PostgreSQL",subtitle:"Instale e use o PostgreSQL no Debian, o banco de dados relacional mais avancado do mundo",difficulty:"intermediario",timeToRead:"20 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Instalar PostgreSQL"}),s.jsx(f,{language:"bash",title:"Instalacao e primeiro acesso",code:dS}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Comandos psql e SQL"}),s.jsx(f,{language:"sql",title:"psql e SQL basico",code:mS}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Backup e Restore"}),s.jsx(f,{language:"bash",title:"pg_dump e pg_restore",code:fS}),s.jsx(M,{type:"success",title:"PostgreSQL para producao",children:"PostgreSQL tem suporte a JSON/JSONB, arrays, CTE, window functions, triggers, e escalabilidade excelente. Para novos projetos que precisam de um banco relacional robusto, PostgreSQL e a melhor escolha."})]})}const hS=`# Instalar Docker no Debian
curl -fsSL https://get.docker.com | sudo bash
# Ou pelo repositorio oficial:
sudo apt install apt-transport-https ca-certificates curl gnupg
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
echo "deb [signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/debian bookworm stable" | sudo tee /etc/apt/sources.list.d/docker.list
sudo apt update && sudo apt install docker-ce docker-ce-cli containerd.io docker-compose-plugin

# Usar Docker sem sudo
sudo usermod -aG docker $USER
# Fazer logout e login novamente!`,gS=`# Comandos basicos do Docker
docker ps                         # Containers rodando
docker ps -a                      # Todos os containers
docker images                     # Imagens locais
docker pull nginx                 # Baixar imagem
docker run -d -p 80:80 nginx      # Rodar em background
docker run -it ubuntu bash        # Interativo com bash
docker stop ID                    # Parar container
docker rm ID                      # Remover container
docker rmi nginx                  # Remover imagem
docker logs container_id          # Ver logs
docker exec -it container bash    # Entrar no container`,bS=`# docker-compose.yml — orquestrar multiplos containers
version: '3.8'
services:
  web:
    image: nginx:alpine
    ports:
      - "80:80"
    volumes:
      - ./html:/usr/share/nginx/html
    depends_on:
      - db

  db:
    image: mariadb:10.11
    environment:
      MYSQL_ROOT_PASSWORD: senha_root
      MYSQL_DATABASE: meuapp
      MYSQL_USER: appuser
      MYSQL_PASSWORD: senha_user
    volumes:
      - db_data:/var/lib/mysql

volumes:
  db_data:

# Usar:
docker compose up -d              # Subir todos os servicos
docker compose down               # Derrubar
docker compose logs -f web        # Logs do servico web`;function vS(){return s.jsxs(z,{title:"Docker no Debian",subtitle:"Instale, use e orquestre containers Docker no Debian para desenvolvimento e producao",difficulty:"intermediario",timeToRead:"22 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Instalar Docker"}),s.jsx(f,{language:"bash",title:"Instalacao oficial",code:hS}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Comandos Essenciais"}),s.jsx(f,{language:"bash",title:"Gerenciar containers e imagens",code:gS}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Docker Compose"}),s.jsx(f,{language:"yaml",title:"docker-compose.yml",code:bS}),s.jsx(M,{type:"info",title:"Docker em producao",children:"Para producao, considere Kubernetes (K8s) ou K3s para orquestracao de containers em escala. O docker compose e excelente para desenvolvimento e producao de pequeno porte."})]})}const xS=`# Postfix — MTA (Mail Transfer Agent) padrao do Debian
sudo apt install postfix
# Durante a instalacao, escolher: Internet Site
# System mail name: exemplo.com

sudo systemctl status postfix
# Teste de envio local:
echo "Teste" | mail -s "Assunto" usuario@exemplo.com
# Ver fila de emails:
mailq
# Forcar tentativa de entrega:
sudo postqueue -f`,yS=`# Configurar Postfix como relay SMTP (Gmail/SES/etc)
sudo apt install postfix libsasl2-modules ca-certificates

# Em /etc/postfix/main.cf:
relayhost = [smtp.gmail.com]:587
smtp_use_tls = yes
smtp_sasl_auth_enable = yes
smtp_sasl_security_options = noanonymous
smtp_sasl_password_maps = hash:/etc/postfix/sasl_passwd
smtp_tls_CAfile = /etc/ssl/certs/ca-certificates.crt

# Criar /etc/postfix/sasl_passwd:
[smtp.gmail.com]:587  usuario@gmail.com:SENHA_DE_APP

sudo postmap /etc/postfix/sasl_passwd
sudo chmod 600 /etc/postfix/sasl_passwd
sudo systemctl restart postfix`,SS=`# Dovecot — servidor IMAP/POP3 (para receber emails)
sudo apt install dovecot-imapd dovecot-pop3d
sudo systemctl enable --now dovecot

# Para um servidor de email completo, use iRedMail:
# https://www.iredmail.org/ — instala Postfix, Dovecot, SpamAssassin, etc
# curl -O https://mirror.iredmail.org/iRedMail/VERSAO/iRedMail-VERSAO.tar.gz

# Requisitos DNS para servidor de email:
# - Registro MX apontando para o servidor
# - Registro A/AAAA para o hostname do servidor  
# - Registro SPF: v=spf1 mx ~all
# - DKIM: assinar emails (postfix-policyd-spf, opendkim)
# - DMARC: politica de rejeicao`;function jS(){return s.jsxs(z,{title:"Servidor de Email — Postfix",subtitle:"Configure Postfix para envio de emails, relay SMTP e servidor completo no Debian",difficulty:"avancado",timeToRead:"18 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Instalar Postfix"}),s.jsx(f,{language:"bash",title:"MTA basico para envio local",code:xS}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Configurar como Relay SMTP"}),s.jsx("p",{className:"text-muted-foreground mb-4",children:"Para enviar emails via Gmail, Amazon SES ou outro provedor externo, configure o Postfix como relay. E mais confiavel que tentar enviar diretamente."}),s.jsx(f,{language:"bash",title:"Relay via Gmail/SES",code:yS}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Servidor Completo"}),s.jsx(f,{language:"bash",title:"Dovecot, DNS e iRedMail",code:SS}),s.jsx(M,{type:"warning",title:"Servidor de email e complexo",children:"Manter um servidor de email proprio requer configuracao cuidadosa de DNS, SSL, SPF, DKIM e DMARC. Para a maioria dos casos, use um servico como Amazon SES, SendGrid ou Mailgun."})]})}const AS=`sudo apt install build-essential git curl wget vim golang
sudo snap install code --classic`,DS=`sudo apt install tmux fzf ripgrep tig
sudo apt install docker.io docker-compose-v2
# GitHub CLI (apos adicionar repositorio)
sudo apt install gh`,NS=`# nvm — gerenciar versoes do Node.js
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 20
nvm use 20
sudo apt install postgresql redis-server`;function ES(){return s.jsxs(z,{title:"Ambiente de Desenvolvimento",subtitle:"Configure um ambiente de desenvolvimento completo e produtivo no Debian",difficulty:"intermediario",timeToRead:"18 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Ferramentas Essenciais"}),s.jsx(f,{language:"bash",title:"Build, editores e linguagens",code:AS}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Ferramentas Modernas de Terminal"}),s.jsx(f,{language:"bash",title:"tmux, fzf, ripgrep e Docker",code:DS}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Stack de Dev Web"}),s.jsx(f,{language:"bash",title:"Node.js via nvm, PostgreSQL, Redis",code:NS})]})}const wS=`sudo apt install git
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
git config --global core.editor nano
git config --global init.defaultBranch main
git config --list`,TS=`git init
git clone https://github.com/usuario/repositorio
git status
git add arquivo.txt
git add .
git commit -m "Descricao do commit"
git log --oneline --graph
git diff`,kS=`git branch nova-feature
git checkout -b nova-feature
git merge nova-feature
git rebase main
git stash
git stash pop`,CS=`git remote add origin URL
git push origin main
git pull
git pull --rebase
git fetch`;function MS(){return s.jsxs(z,{title:"Git no Debian",subtitle:"Domine o Git para controle de versao, branches e colaboracao no Debian",difficulty:"intermediario",timeToRead:"20 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Configuracao Inicial"}),s.jsx(f,{language:"bash",title:"Instalar e configurar git",code:wS}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Comandos Essenciais"}),s.jsx(f,{language:"bash",title:"init, add, commit, log",code:TS}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Branches e Merge"}),s.jsx(f,{language:"bash",title:"branch, checkout, merge, stash",code:kS}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Repositorios Remotos"}),s.jsx(f,{language:"bash",title:"push, pull, fetch",code:CS}),s.jsx(M,{type:"success",title:"GitHub CLI",children:"Instale o gh para interagir com GitHub no terminal: gh repo create, gh pr create, gh issue list. Muito mais produtivo que a interface web para fluxos repetitivos."})]})}const RS=`python3 --version
sudo apt install python3-pip python3-venv python3-dev
pip3 install requests flask django
pip3 list`,zS=`python3 -m venv .venv
source .venv/bin/activate
pip install flask
pip freeze > requirements.txt
deactivate
# Instalar num projeto existente:
source .venv/bin/activate
pip install -r requirements.txt`,qS=`from flask import Flask, jsonify, request

app = Flask(__name__)
usuarios = []

@app.route('/api/usuarios')
def listar():
    return jsonify(usuarios)

@app.route('/api/usuarios', methods=['POST'])
def criar():
    u = request.json
    usuarios.append(u)
    return jsonify(u), 201

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)`;function OS(){return s.jsxs(z,{title:"Python no Debian",subtitle:"Configure Python com venv, pip e crie APIs com Flask no Debian",difficulty:"intermediario",timeToRead:"18 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Python 3 e pip"}),s.jsx(f,{language:"bash",title:"Instalacao e pacotes",code:RS}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Ambientes Virtuais (venv)"}),s.jsx(M,{type:"warning",title:"Use sempre venv",children:"Nunca instale pacotes pip globalmente — pode conflitar com pacotes do apt. Sempre use venv por projeto."}),s.jsx(f,{language:"bash",title:"python3 -m venv",code:zS}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"API com Flask"}),s.jsx(f,{language:"python",title:"API REST simples",code:qS})]})}const US=`curl -fsSL https://deb.nodesource.com/setup_20.x | sudo bash -
sudo apt install nodejs
node --version
npm --version`,LS=`npm init -y
npm install express
npm install
npm run dev
npm run build
npx create-react-app meuapp`,GS=`const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

const usuarios = [];
app.get('/api/usuarios', (req, res) => res.json(usuarios));
app.post('/api/usuarios', (req, res) => {
    usuarios.push(req.body);
    res.status(201).json(req.body);
});

app.listen(PORT, () => console.log('Rodando em porta ' + PORT));`;function BS(){return s.jsxs(z,{title:"Node.js no Debian",subtitle:"Instale Node.js, use npm e crie APIs com Express no Debian",difficulty:"intermediario",timeToRead:"18 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Instalar Node.js"}),s.jsx(f,{language:"bash",title:"NodeSource",code:US}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"npm Essencial"}),s.jsx(f,{language:"bash",title:"Gerenciar pacotes",code:LS}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"API com Express"}),s.jsx(f,{language:"javascript",title:"Servidor Express REST",code:GS}),s.jsx(M,{type:"info",title:"nvm para multiplas versoes",children:"Para desenvolvimento, use o nvm (Node Version Manager) em vez do NodeSource. Permite gerenciar multiplas versoes do Node.js sem sudo."})]})}const _S=`sudo apt install default-jdk
sudo apt install openjdk-17-jdk
sudo apt install openjdk-21-jdk
java --version
javac --version
sudo update-alternatives --config java`,HS=`# Criar OlaDebian.java:
public class OlaDebian {
    public static void main(String[] args) {
        System.out.println("Ola, Debian!");
    }
}
javac OlaDebian.java
java OlaDebian`,VS=`sudo apt install maven
mvn --version
mvn archetype:generate \\\\
  -DgroupId=com.exemplo \\\\
  -DartifactId=meuapp \\\\
  -DarchetypeArtifactId=maven-archetype-quickstart \\\\
  -DinteractiveMode=false
cd meuapp
mvn compile
mvn test
mvn package`;function PS(){return s.jsxs(z,{title:"Java no Debian",subtitle:"Instale OpenJDK e gerencie projetos Java com Maven no Debian",difficulty:"intermediario",timeToRead:"16 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Instalar OpenJDK"}),s.jsx(f,{language:"bash",title:"OpenJDK no Debian",code:_S}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Compilar e Executar"}),s.jsx(f,{language:"java",title:"Primeiro programa Java",code:HS}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Maven"}),s.jsx(f,{language:"bash",title:"Criar e compilar projetos com Maven",code:VS}),s.jsx(M,{type:"info",title:"SDKMan para Java",children:"Use o SDKMan (sdk.sh) para gerenciar multiplas versoes do Java, Maven, Gradle e outras ferramentas JVM facilmente."})]})}const QS=`# rsync — backup local e remoto
rsync -avz /home/ /mnt/backup/home/
rsync -avz /home/ usuario@servidor:/backup/home/
rsync -avz --delete /home/ /mnt/backup/home/
rsync -avz --exclude='Downloads/' --exclude='.cache/' /home/ /mnt/backup/

# Script de backup com timestamp:
DATA=$(date +%Y%m%d_%H%M%S)
rsync -avz /home/ /mnt/backup/home_$DATA/
echo "Backup concluido: $DATA" >> /var/log/backup.log`,XS=`# tar — backup em arquivo comprimido
tar -czf /mnt/backup/home_$(date +%Y%m%d).tar.gz /home/
tar -czf backup_etc.tar.gz /etc/
# Restaurar:
tar -xzf backup.tar.gz -C /restore/

# Backup do banco MariaDB
mysqldump -u root --all-databases | gzip > /mnt/backup/db_$(date +%Y%m%d).sql.gz
# Backup do PostgreSQL
sudo -u postgres pg_dumpall | gzip > /mnt/backup/pg_$(date +%Y%m%d).sql.gz`,YS=`# Borg Backup — deduplicacao e criptografia
sudo apt install borgbackup

# Inicializar repositorio
borg init --encryption=repokey /mnt/backup/borg-repo

# Criar backup
borg create /mnt/backup/borg-repo::backup-$(date +%Y%m%d) /home /etc

# Listar backups
borg list /mnt/backup/borg-repo

# Restaurar
borg extract /mnt/backup/borg-repo::backup-20240101

# Restic — alternativa moderna ao Borg
sudo apt install restic
restic init --repo /mnt/backup/restic-repo
restic backup /home /etc --repo /mnt/backup/restic-repo
restic snapshots --repo /mnt/backup/restic-repo`,$S=`# Regra 3-2-1: 3 copias, 2 midias diferentes, 1 offsite
# Automatizar backup com cron:
# /etc/cron.d/backup
0 3 * * * root rsync -avz --delete /home/ /mnt/backup/home/ >> /var/log/backup.log 2>&1
0 4 * * 0 root tar -czf /mnt/backup/etc_$(date +\\\\%Y\\\\%m\\\\%d).tar.gz /etc/ >> /var/log/backup.log 2>&1`;function KS(){return s.jsxs(z,{title:"Backup e Restauracao",subtitle:"Implemente estrategias de backup com rsync, tar, Borg e Restic no Debian",difficulty:"intermediario",timeToRead:"20 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"rsync — Backup Eficiente"}),s.jsx(f,{language:"bash",title:"rsync local e remoto",code:QS}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"tar e Bancos de Dados"}),s.jsx(f,{language:"bash",title:"tar, mysqldump, pg_dumpall",code:XS}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Borg e Restic"}),s.jsx("p",{className:"text-muted-foreground mb-4",children:"Para backups avancados com deduplicacao (economiza espaco), criptografia e verificacao de integridade, use Borg ou Restic."}),s.jsx(f,{language:"bash",title:"Borg e Restic",code:YS}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Estrategia 3-2-1 e Automacao"}),s.jsx(f,{language:"bash",title:"Automacao com cron",code:$S}),s.jsx(M,{type:"danger",title:"Teste seus backups!",children:"Um backup nunca testado nao e um backup. Periodicamente, restaure arquivos do backup para garantir que funciona corretamente quando precisar."})]})}const IS=`# Monitoramento de recursos em tempo real
htop                           # Processos e CPU/RAM
sudo apt install htop
iotop                          # I/O por processo
sudo apt install iotop
nethogs                        # Uso de rede por processo
sudo apt install nethogs

# Comandos classicos
top                            # Monitor interativo
vmstat 2                       # Stats de VM a cada 2s
iostat -x 2                    # Stats de I/O
mpstat 1                       # Stats por CPU
free -h                        # Memoria
df -h                          # Disco`,ZS=`# Netdata — monitoramento em tempo real com dashboard web
bash <(curl -Ss https://my-netdata.io/kickstart.sh)
# Acessar: http://localhost:19999

# Prometheus + Grafana — monitoramento profissional
sudo apt install prometheus
# Config em /etc/prometheus/prometheus.yml

# Node Exporter — coletar metricas do sistema
sudo apt install prometheus-node-exporter
sudo systemctl enable --now prometheus-node-exporter`,FS=`# Monitorar logs em tempo real
tail -f /var/log/syslog
journalctl -f
journalctl -f -u nginx
journalctl -p err -f

# Alertas com scripts
# Verificar uso de disco e alertar:
USO=$(df / | awk 'NR==2 {print $5}' | tr -d '%')
if [ $USO -gt 80 ]; then
    echo "ALERTA: Disco com $USO% de uso!" | mail -s "Alerta de Disco" admin@exemplo.com
fi

# monit — monitorar e reiniciar servicos automaticamente
sudo apt install monit
# Config em /etc/monit/monitrc`;function JS(){return s.jsxs(z,{title:"Monitoramento do Sistema",subtitle:"Monitore recursos, logs e servicos com htop, Netdata, Prometheus e scripts no Debian",difficulty:"intermediario",timeToRead:"18 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Ferramentas de Monitoramento"}),s.jsx(f,{language:"bash",title:"htop, iotop, nethogs e classicos",code:IS}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Netdata e Prometheus"}),s.jsx(f,{language:"bash",title:"Dashboards de monitoramento",code:ZS}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Logs e Alertas"}),s.jsx(f,{language:"bash",title:"journalctl e alertas por script",code:FS}),s.jsx(M,{type:"info",title:"Para homelab e pequenos servidores",children:"O Netdata e a solucao mais facil de instalar e usar. Para producao com multiplos servidores, Prometheus+Grafana e a solucao profissional."})]})}const WS=`# Diagnostico de performance
top -bn1                       # Snapshot de CPU/RAM
free -h                        # Estado da memoria
vmstat 1 10                    # CPU, memoria, I/O (10 amostras)
iostat -x 1 5                  # I/O detalhado
sar -u 1 10                    # CPU historico (sysstat)
sudo apt install sysstat       # Instalar sar

# Ver o que esta consumindo mais
ps aux --sort=-%cpu | head     # Mais CPU
ps aux --sort=-%mem | head     # Mais memoria
iotop -o                       # Mais I/O`,ej=`# Otimizar uso de RAM
# Ver consumo de memoria
cat /proc/meminfo
sysctl vm.swappiness           # Swappiness (0-100, padrao 60)
sudo sysctl -w vm.swappiness=10  # Reduzir uso de swap

# Limpar cache (nao apaga dados realmente em uso)
sync && echo 3 | sudo tee /proc/sys/vm/drop_caches

# Ver swap
swapon -s
free -h

# Criar arquivo de swap (se precisar de mais)
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile`,aj=`# Otimizar I/O de disco
# Ver scheduler de I/O
cat /sys/block/sda/queue/scheduler

# Schedulers:
# mq-deadline: padrao para SSDs e NVMe
# bfq: bom para desktops (evita latencia)
# none: para NVMe (minimo overhead)

# Mudar scheduler temporariamente:
echo mq-deadline | sudo tee /sys/block/sda/queue/scheduler

# Persistir via udev (/etc/udev/rules.d/60-scheduler.rules):
ACTION=="add|change", KERNEL=="sda", ATTR{queue/scheduler}="mq-deadline"

# Montar tmpfs em memoria para /tmp
# Em /etc/fstab:
tmpfs /tmp tmpfs defaults,nosuid,nodev,noatime,size=2G 0 0`;function tj(){return s.jsxs(z,{title:"Otimizacao de Performance",subtitle:"Diagnostique e otimize a performance de CPU, RAM e disco no Debian",difficulty:"avancado",timeToRead:"18 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Diagnostico de Performance"}),s.jsx(f,{language:"bash",title:"top, vmstat, iostat",code:WS}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Otimizar Memoria"}),s.jsx(f,{language:"bash",title:"Swappiness e cache",code:ej}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Otimizar I/O de Disco"}),s.jsx(f,{language:"bash",title:"Schedulers de I/O e tmpfs",code:aj}),s.jsx(M,{type:"info",title:"Primeira regra de otimizacao",children:"Meça antes de otimizar. Use ferramentas de profiling para identificar o real gargalo — frequentemente nao e onde voce imagina."})]})}const nj=`# Sistema nao inicia
# 1. Verificar no GRUB — editar entrada, adicionar 'init=/bin/bash'
# 2. Verificar logs com journalctl -b -1 (boot anterior)
# 3. Iniciar em modo de recuperacao (rescue mode)
systemctl rescue

# Servico nao inicia
systemctl status servico       # Ver status e ultimas linhas do log
journalctl -u servico -n 50    # Ultimas 50 linhas de log
journalctl -u servico --since "1 hour ago"

# Verificar erros gerais
journalctl -p err -b           # Erros desde o boot
dmesg | grep -i error          # Erros do kernel`,oj=`# Sem espaco em disco
df -h                          # Ver filesystem cheio
du -sh /* 2>/dev/null | sort -h | tail -20   # Maior consumidor
find / -type f -size +100M 2>/dev/null       # Arquivos grandes
du -sh /var/log/*              # Logs grandes
sudo journalctl --vacuum-size=500M           # Limpar logs do journal
sudo apt clean                               # Limpar cache do apt

# Memoria cheia
free -h
ps aux --sort=-%mem | head -15 # Processos com mais memoria
# Matar processo:
kill -9 PID`,sj=`# Rede com problema
ping 8.8.8.8                   # Testar conectividade externa
ping 192.168.1.1               # Testar gateway
ip route show default          # Ver gateway configurado
cat /etc/resolv.conf           # Ver DNS configurado
resolvectl status              # Status do DNS resolver
nmcli general status           # Status do NetworkManager
journalctl -u NetworkManager   # Logs de rede

# Pacote quebrado
sudo apt install -f            # Corrigir dependencias
sudo dpkg --configure -a       # Configurar pacotes pendentes
sudo apt clean && sudo apt update  # Limpar cache e atualizar lista

# Filesystem corrompido (disco desmontado!)
sudo fsck /dev/sda1            # Checar e corrigir`;function ij(){return s.jsxs(z,{title:"Resolucao de Problemas",subtitle:"Diagnostique e resolva os problemas mais comuns no Debian com uma abordagem sistematica",difficulty:"intermediario",timeToRead:"20 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Sistema e Servicos"}),s.jsx(M,{type:"info",title:"Abordagem sistematica",children:"1. Colete informacoes (logs). 2. Identifique o que mudou recentemente. 3. Isole o problema. 4. Teste uma solucao por vez. 5. Documente o que funcionou."}),s.jsx(f,{language:"bash",title:"Boot e servicos",code:nj}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Disco e Memoria"}),s.jsx(f,{language:"bash",title:"Espaco e memoria",code:oj}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Rede e Pacotes"}),s.jsx(f,{language:"bash",title:"Conectividade e dpkg",code:sj})]})}const lj=`# Atualizacao de rotina (executar semanalmente)
sudo apt update                   # Atualizar lista de pacotes
sudo apt upgrade                  # Atualizar pacotes
sudo apt full-upgrade             # Incluindo mudancas de dependencias
sudo apt autoremove               # Remover dependencias nao usadas
sudo apt autoclean                # Limpar cache antigo

# Verificar se precisa reiniciar (kernel atualizado)
cat /var/run/reboot-required 2>/dev/null && echo "REINICIAR!" || echo "OK"
sudo apt install needrestart      # Verificar servicos que precisam reiniciar`,rj=`# Atualizacoes de seguranca apenas
sudo apt install unattended-upgrades
sudo dpkg-reconfigure unattended-upgrades

# Ver quais pacotes tem atualizacao de seguranca
apt list --upgradable 2>/dev/null | grep security

# Configurar /etc/apt/apt.conf.d/50unattended-upgrades
Unattended-Upgrade::Origins-Pattern {
    "origin=Debian,codename=bookworm,label=Debian-Security";
};
Unattended-Upgrade::Automatic-Reboot "false";
Unattended-Upgrade::Mail "admin@exemplo.com";`,cj=`# Upgrade de versao major (ex: Debian 11 para 12)
# 1. Atualizar tudo no sistema atual
sudo apt update && sudo apt full-upgrade && sudo apt autoremove

# 2. Verificar versao atual
cat /etc/debian_version
lsb_release -a

# 3. Atualizar sources.list (bullseye -> bookworm)
sudo sed -i 's/bullseye/bookworm/g' /etc/apt/sources.list
sudo sed -i 's/bullseye/bookworm/g' /etc/apt/sources.list.d/*.list

# 4. Executar o upgrade
sudo apt update
sudo apt upgrade
sudo apt full-upgrade

# 5. Reiniciar
sudo reboot

# 6. Verificar versao nova
lsb_release -a`;function uj(){return s.jsxs(z,{title:"Atualizacao do Sistema",subtitle:"Mantenha o Debian atualizado com seguranca, automatize patches e faca upgrade de versao",difficulty:"intermediario",timeToRead:"16 min",children:[s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-4",children:"Atualizacao de Rotina"}),s.jsx(f,{language:"bash",title:"Comandos de atualizacao",code:lj}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Atualizacoes de Seguranca Automaticas"}),s.jsx(f,{language:"bash",title:"unattended-upgrades",code:rj}),s.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:"Upgrade de Versao Major"}),s.jsx(M,{type:"warning",title:"Faca backup antes do upgrade!",children:"Um upgrade de versao major (ex: Debian 11 para 12) pode causar problemas em configuracoes customizadas. Faca backup completo antes e leia as release notes do Debian."}),s.jsx(f,{language:"bash",title:"Debian 11 para 12",code:cj})]})}const dj=[{category:"Documentacao Oficial Debian",items:[{name:"Debian.org — Site oficial",url:"https://www.debian.org/",desc:"Pagina principal do projeto Debian"},{name:"Debian Wiki",url:"https://wiki.debian.org/",desc:"Wiki colaborativo com guias e documentacao"},{name:"Debian Reference Manual",url:"https://www.debian.org/doc/manuals/debian-reference/",desc:"Manual de referencia completo do Debian"},{name:"Guia de Instalacao do Debian",url:"https://www.debian.org/releases/stable/amd64/install.en.html",desc:"Guia oficial de instalacao"},{name:"Debian Handbook",url:"https://debian-handbook.info/",desc:"Livro completo disponivel gratuitamente online"},{name:"Debian Security",url:"https://www.debian.org/security/",desc:"Anuncios de seguranca e CVEs"}]},{category:"Pacotes e Repositorios",items:[{name:"packages.debian.org",url:"https://packages.debian.org/",desc:"Pesquisar pacotes disponiveis no Debian"},{name:"tracker.debian.org",url:"https://tracker.debian.org/",desc:"Rastrear status de pacotes"},{name:"Debian Backports",url:"https://backports.debian.org/",desc:"Pacotes mais novos para Debian stable"},{name:"Repology.org",url:"https://repology.org/",desc:"Comparar versoes de pacotes entre distros"}]},{category:"Comunidade e Suporte",items:[{name:"Debian Forums",url:"https://forums.debian.net/",desc:"Forum oficial de suporte da comunidade"},{name:"Debian Mailing Lists",url:"https://lists.debian.org/",desc:"Listas de discussao dos desenvolvedores"},{name:"r/debian",url:"https://www.reddit.com/r/debian/",desc:"Comunidade Debian no Reddit"},{name:"Stack Overflow",url:"https://stackoverflow.com/questions/tagged/debian",desc:"Perguntas e respostas sobre Debian"},{name:"IRC: #debian no Libera.Chat",url:"https://www.debian.org/support#irc",desc:"Suporte em tempo real via IRC"}]},{category:"Ferramentas Online",items:[{name:"Debian Stable Release Notes",url:"https://www.debian.org/releases/stable/releasenotes",desc:"Notas de lancamento com mudancas entre versoes"},{name:"Manpages.debian.org",url:"https://manpages.debian.org/",desc:"Man pages online para todos os pacotes"},{name:"CVE.mitre.org",url:"https://cve.mitre.org/",desc:"Base de vulnerabilidades CVE"},{name:"Explainshell.com",url:"https://explainshell.com/",desc:"Explicar o que um comando shell faz"}]}];function mj(){return s.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8",children:[s.jsx("h1",{className:"text-3xl font-bold mb-2",children:"Referencias e Links Uteis"}),s.jsx("p",{className:"text-muted-foreground mb-8",children:"Documentacao oficial, comunidades e ferramentas para continuar sua jornada com Debian"}),s.jsx("div",{className:"space-y-8",children:dj.map(i=>s.jsxs("div",{children:[s.jsx("h2",{className:"text-xl font-semibold mb-4 text-primary",children:i.category}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:i.items.map(r=>s.jsxs("a",{href:r.url,target:"_blank",rel:"noopener noreferrer",className:"p-4 rounded-xl border border-border bg-card hover:bg-muted/50 transition-colors",children:[s.jsx("div",{className:"font-medium text-sm mb-1",children:r.name}),s.jsx("div",{className:"text-xs text-muted-foreground",children:r.desc})]},r.name))})]},i.category))})]})}const fj=[{title:"APT — Gerenciamento de Pacotes",cmds:[["apt update","Atualizar lista de pacotes"],["apt upgrade","Atualizar pacotes instalados"],["apt install pkg","Instalar pacote"],["apt remove pkg","Remover pacote"],["apt purge pkg","Remover + configs"],["apt search nome","Buscar pacote"],["apt show pkg","Detalhes do pacote"],["apt autoremove","Remover dependencias nao usadas"]]},{title:"systemctl — Servicos",cmds:[["systemctl start svc","Iniciar servico"],["systemctl stop svc","Parar servico"],["systemctl restart svc","Reiniciar servico"],["systemctl enable svc","Habilitar no boot"],["systemctl status svc","Ver status"],["journalctl -u svc -f","Ver logs do servico"]]},{title:"Arquivos e Diretorios",cmds:[["ls -lah","Listar com detalhes"],["cd /caminho","Mudar diretorio"],["cp -r src dst","Copiar recursivo"],["mv src dst","Mover/renomear"],["rm -rf dir/","Remover recursivo (cuidado!)"],["find / -name arq","Buscar arquivo"],["chmod 755 arq","Permissoes"],["chown user:grp arq","Mudar dono"]]},{title:"Rede",cmds:[["ip addr show","Ver IPs"],["ss -tulpn","Portas abertas"],["ping 8.8.8.8","Testar conexao"],["dig google.com","Consulta DNS"],["ssh user@host","Conectar SSH"],["scp arq user@host:/","Copiar via SSH"],["curl -O url","Baixar arquivo"]]},{title:"Processos e Sistema",cmds:[["ps aux","Listar processos"],["kill PID","Encerrar processo"],["kill -9 PID","Forcar encerramento"],["top / htop","Monitor interativo"],["free -h","Uso de memoria"],["df -h","Uso de disco"],["du -sh dir/","Tamanho de diretorio"],["uptime","Tempo ligado e carga"]]},{title:"Usuarios e Permissoes",cmds:[["sudo comando","Executar como root"],["su - usuario","Mudar para usuario"],["useradd -m joao","Criar usuario"],["passwd joao","Definir senha"],["usermod -aG grupo joao","Adicionar ao grupo"],["id","Ver usuario e grupos atuais"],["who","Ver quem esta logado"]]}];function pj(){return s.jsxs("div",{className:"max-w-5xl mx-auto px-4 py-8",children:[s.jsx("h1",{className:"text-3xl font-bold mb-2",children:"Referencia Rapida"}),s.jsx("p",{className:"text-muted-foreground mb-8",children:"Os comandos mais usados do Debian em um so lugar"}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:fj.map(i=>s.jsxs("div",{className:"rounded-xl border border-border overflow-hidden",children:[s.jsx("div",{className:"bg-primary/10 px-4 py-2 font-semibold text-sm",children:i.title}),s.jsx("div",{className:"divide-y divide-border/50",children:i.cmds.map(([r,m])=>s.jsxs("div",{className:"flex items-start gap-3 px-4 py-2",children:[s.jsx("code",{className:"text-primary text-xs font-mono shrink-0 w-40",children:r}),s.jsx("span",{className:"text-xs text-muted-foreground",children:m})]},r))})]},i.title))})]})}const hj=[{term:"APT",def:"Advanced Package Tool. Gerenciador de pacotes do Debian que resolve dependencias automaticamente."},{term:"CLI",def:"Command Line Interface. Interface de linha de comando, onde voce interage via texto."},{term:"CRON",def:"Daemon de agendamento de tarefas no Unix/Linux. Executa comandos em horarios programados."},{term:"DAEMON",def:"Processo que roda em background, sem interface com usuario. Ex: sshd, nginx, cron."},{term:"Debian stable",def:"A versao estavel e suportada do Debian, focada em confiabilidade e seguranca."},{term:"DPKG",def:"Debian Package. Ferramenta de baixo nivel para instalar, remover e gerenciar pacotes .deb."},{term:"FHS",def:"Filesystem Hierarchy Standard. Padrao que define a estrutura de diretorios em sistemas Linux."},{term:"FOSS",def:"Free and Open Source Software. Software livre e de codigo aberto."},{term:"GID",def:"Group Identifier. Numero unico que identifica um grupo no sistema Linux."},{term:"GNU",def:"GNU's Not Unix. Projeto que desenvolveu as ferramentas usadas junto ao kernel Linux."},{term:"GRUB",def:"GRand Unified Bootloader. Bootloader padrao do Debian, responsavel por iniciar o sistema."},{term:"GUI",def:"Graphical User Interface. Interface grafica com janelas, icones e menus."},{term:"Initramfs",def:"Initial RAM Filesystem. Sistema de arquivos temporario carregado durante o boot para iniciar o kernel."},{term:"IP",def:"Internet Protocol. Protocolo de enderecamento de rede. IPv4 (ex: 192.168.1.1) e IPv6 (ex: ::1)."},{term:"Kernel",def:"Nucleo do sistema operacional. Gerencia hardware, processos, memoria e dispositivos."},{term:"LVM",def:"Logical Volume Manager. Camada de abstrato sobre particoes fisicas que permite redimensionamento dinamico."},{term:"MBR",def:"Master Boot Record. Esquema de particao antigo (max 2TB, 4 particoes primarias). Substituido por GPT."},{term:"GPT",def:"GUID Partition Table. Esquema de particao moderno (suporta discos grandes, muitas particoes)."},{term:"PAM",def:"Pluggable Authentication Modules. Framework de autenticacao modular do Linux."},{term:"PID",def:"Process Identifier. Numero unico que identifica um processo em execucao."},{term:"POSIX",def:"Portable Operating System Interface. Conjunto de padroes de compatibilidade para sistemas Unix-like."},{term:"RAID",def:"Redundant Array of Independent Disks. Tecnica de combinar multiplos discos para redundancia ou desempenho."},{term:"Root",def:"O superusuario do sistema Linux (UID 0). Tem acesso irrestrito a todo o sistema."},{term:"SELinux",def:"Security-Enhanced Linux. Sistema de controle de acesso mandatorio (MAC). O Debian usa AppArmor."},{term:"SSH",def:"Secure Shell. Protocolo de comunicacao remota criptografada. Substitui o telnet."},{term:"Sudo",def:"Superuser Do. Comando que permite executar um comando com privilegios de outro usuario (geralmente root)."},{term:"Swap",def:"Particao ou arquivo usado como extensao da RAM quando a memoria fisica acaba."},{term:"Systemd",def:"Sistema de init moderno do Debian (desde o Debian 8). Gerencia servicos, logs e boot."},{term:"TTY",def:"TeleType Terminal. Terminal virtual do Linux. Acesse com Ctrl+Alt+F2 a F6."},{term:"UID",def:"User Identifier. Numero unico que identifica um usuario no sistema Linux."},{term:"UUID",def:"Universally Unique Identifier. Identificador unico de particoes, usado no /etc/fstab para maior seguranca."},{term:"VPN",def:"Virtual Private Network. Rede privada virtual que criptografa o trafego de rede."},{term:"Wayland",def:"Protocolo de display moderno que substitui o X11/X.org. Padrao no GNOME do Debian 10+."},{term:"X11/X.org",def:"Sistema de display grafico classico do Linux, base para ambientes de desktop."}];function gj(){return s.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8",children:[s.jsx("h1",{className:"text-3xl font-bold mb-2",children:"Glossario"}),s.jsx("p",{className:"text-muted-foreground mb-8",children:"Termos tecnicos importantes no universo Debian e Linux"}),s.jsx("div",{className:"space-y-2",children:hj.map(i=>s.jsxs("div",{className:"flex gap-4 p-3 rounded-lg border border-border bg-card hover:bg-muted/30 transition-colors",children:[s.jsx("code",{className:"text-primary font-mono text-sm font-bold w-32 shrink-0",children:i.term}),s.jsx("p",{className:"text-sm text-muted-foreground",children:i.def})]},i.term))})]})}function bj(){return s.jsxs("div",{className:"flex flex-col items-center justify-center min-h-[60vh] text-center px-4",children:[s.jsx("div",{className:"text-8xl mb-6",children:"404"}),s.jsx("h1",{className:"text-3xl font-bold mb-4",children:"Página não encontrada"}),s.jsx("p",{className:"text-muted-foreground mb-8",children:"A página que você está procurando não existe."}),s.jsx(gi,{href:"/",children:s.jsx("a",{className:"px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors",children:"Voltar ao Início"})})]})}const vj=new Kb;function xj({children:i}){const[r,m]=de.useState(!1),[u]=Jr();return de.useEffect(()=>{m(!1),window.scrollTo(0,0)},[u]),s.jsxs("div",{className:"min-h-screen bg-background text-foreground flex",children:[s.jsx(Vv,{isOpen:r,setIsOpen:m}),s.jsxs("div",{className:"flex-1 lg:pl-72 flex flex-col min-w-0 transition-all duration-300",children:[s.jsx(Qv,{onMenuClick:()=>m(!0)}),s.jsx("main",{className:"flex-1",children:i})]})]})}function yj(){return s.jsx(xj,{children:s.jsxs(vb,{children:[s.jsx(C,{path:"/",component:Jv}),s.jsx(C,{path:"/historia",component:tx}),s.jsx(C,{path:"/filosofia",component:lx}),s.jsx(C,{path:"/instalacao",component:mx}),s.jsx(C,{path:"/primeiros-passos",component:bx}),s.jsx(C,{path:"/boas-vindas",component:Ax}),s.jsx(C,{path:"/terminal",component:Tx}),s.jsx(C,{path:"/navegacao",component:Rx}),s.jsx(C,{path:"/manipulacao-arquivos",component:Lx}),s.jsx(C,{path:"/visualizar-arquivos",component:Vx}),s.jsx(C,{path:"/editor-texto",component:Yx}),s.jsx(C,{path:"/redirecionamento",component:Zx}),s.jsx(C,{path:"/localizacao",component:ey}),s.jsx(C,{path:"/compressao",component:oy}),s.jsx(C,{path:"/links-simbolicos",component:ry}),s.jsx(C,{path:"/sistema-arquivos",component:my}),s.jsx(C,{path:"/permissoes",component:vy}),s.jsx(C,{path:"/disco",component:jy}),s.jsx(C,{path:"/montagem",component:Ey}),s.jsx(C,{path:"/lvm",component:Cy}),s.jsx(C,{path:"/raid",component:qy}),s.jsx(C,{path:"/grub",component:Gy}),s.jsx(C,{path:"/kernel",component:Py}),s.jsx(C,{path:"/systemd",component:Ky}),s.jsx(C,{path:"/logs-sistema",component:Jy}),s.jsx(C,{path:"/processos",component:t2}),s.jsx(C,{path:"/usuarios",component:i2}),s.jsx(C,{path:"/grupos",component:u2}),s.jsx(C,{path:"/sudo",component:p2}),s.jsx(C,{path:"/agendamento",component:v2}),s.jsx(C,{path:"/variaveis-ambiente",component:j2}),s.jsx(C,{path:"/apt",component:E2}),s.jsx(C,{path:"/dpkg",component:C2}),s.jsx(C,{path:"/apt-avancado",component:q2}),s.jsx(C,{path:"/snap",component:L2}),s.jsx(C,{path:"/flatpak",component:H2}),s.jsx(C,{path:"/compilacao",component:X2}),s.jsx(C,{path:"/repos",component:I2}),s.jsx(C,{path:"/rede-basica",component:W2}),s.jsx(C,{path:"/network-manager",component:n0}),s.jsx(C,{path:"/ssh",component:l0}),s.jsx(C,{path:"/firewall",component:d0}),s.jsx(C,{path:"/transferir-arquivos",component:h0}),s.jsx(C,{path:"/dns",component:x0}),s.jsx(C,{path:"/vpn",component:j0}),s.jsx(C,{path:"/seguranca",component:w0}),s.jsx(C,{path:"/apparmor",component:M0}),s.jsx(C,{path:"/gpg",component:O0}),s.jsx(C,{path:"/criptografia",component:B0}),s.jsx(C,{path:"/seguranca-ssh",component:P0}),s.jsx(C,{path:"/fail2ban",component:$0}),s.jsx(C,{path:"/auditoria",component:F0}),s.jsx(C,{path:"/ambiente-grafico",component:a1}),s.jsx(C,{path:"/gnome",component:s1}),s.jsx(C,{path:"/kde",component:r1}),s.jsx(C,{path:"/xfce",component:d1}),s.jsx(C,{path:"/display-server",component:h1}),s.jsx(C,{path:"/impressora",component:x1}),s.jsx(C,{path:"/shell-bash",component:D1}),s.jsx(C,{path:"/bash-avancado",component:k1}),s.jsx(C,{path:"/scripts-praticos",component:z1}),s.jsx(C,{path:"/regex",component:L1}),s.jsx(C,{path:"/depuracao-bash",component:H1}),s.jsx(C,{path:"/servidor-apache",component:X1}),s.jsx(C,{path:"/servidor-nginx",component:I1}),s.jsx(C,{path:"/servidor-ssh",component:W1}),s.jsx(C,{path:"/servidor-samba",component:nS}),s.jsx(C,{path:"/servidor-nfs",component:iS}),s.jsx(C,{path:"/banco-mysql",component:uS}),s.jsx(C,{path:"/banco-postgresql",component:pS}),s.jsx(C,{path:"/docker",component:vS}),s.jsx(C,{path:"/servidor-email",component:jS}),s.jsx(C,{path:"/ambiente-dev",component:ES}),s.jsx(C,{path:"/git",component:MS}),s.jsx(C,{path:"/python",component:OS}),s.jsx(C,{path:"/nodejs",component:BS}),s.jsx(C,{path:"/java",component:PS}),s.jsx(C,{path:"/backup",component:KS}),s.jsx(C,{path:"/monitoramento",component:JS}),s.jsx(C,{path:"/performance",component:tj}),s.jsx(C,{path:"/troubleshooting",component:ij}),s.jsx(C,{path:"/atualizacao",component:uj}),s.jsx(C,{path:"/referencias",component:mj}),s.jsx(C,{path:"/ref-rapida",component:pj}),s.jsx(C,{path:"/glossario",component:gj}),s.jsx(C,{component:bj})]})})}function Sj(){return s.jsx(Zb,{client:vj,children:s.jsx(Hf,{hook:Jr,children:s.jsx(yj,{})})})}Fg.createRoot(document.getElementById("root")).render(s.jsx(Sj,{}));
