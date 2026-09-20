(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var jh={exports:{}},El={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r_;function b1(){if(r_)return El;r_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:s,type:r,key:d,ref:l!==void 0?l:null,props:u}}return El.Fragment=t,El.jsx=i,El.jsxs=i,El}var s_;function E1(){return s_||(s_=1,jh.exports=b1()),jh.exports}var g=E1(),Xh={exports:{}},lt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o_;function M1(){if(o_)return lt;o_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),v=Symbol.for("react.view_transition"),E=Symbol.iterator;function T(z){return z===null||typeof z!="object"?null:(z=E&&z[E]||z["@@iterator"],typeof z=="function"?z:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,S={};function U(z,ve,Re){this.props=z,this.context=ve,this.refs=S,this.updater=Re||C}U.prototype.isReactComponent={},U.prototype.setState=function(z,ve){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,ve,"setState")},U.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function I(){}I.prototype=U.prototype;function N(z,ve,Re){this.props=z,this.context=ve,this.refs=S,this.updater=Re||C}var D=N.prototype=new I;D.constructor=N,b(D,U.prototype),D.isPureReactComponent=!0;var L=Array.isArray;function O(){}var A={H:null,A:null,T:null,S:null},P=Object.prototype.hasOwnProperty;function V(z,ve,Re){var J=Re.ref;return{$$typeof:s,type:z,key:ve,ref:J!==void 0?J:null,props:Re}}function Y(z,ve){return V(z.type,ve,z.props)}function ne(z){return typeof z=="object"&&z!==null&&z.$$typeof===s}function ce(z){var ve={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(Re){return ve[Re]})}var Q=/\/+/g;function k(z,ve){return typeof z=="object"&&z!==null&&z.key!=null?ce(""+z.key):ve.toString(36)}function W(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(O,O):(z.status="pending",z.then(function(ve){z.status==="pending"&&(z.status="fulfilled",z.value=ve)},function(ve){z.status==="pending"&&(z.status="rejected",z.reason=ve)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function j(z,ve,Re,J,ge){var Ae=typeof z;(Ae==="undefined"||Ae==="boolean")&&(z=null);var Ie=!1;if(z===null)Ie=!0;else switch(Ae){case"bigint":case"string":case"number":Ie=!0;break;case"object":switch(z.$$typeof){case s:case t:Ie=!0;break;case _:return Ie=z._init,j(Ie(z._payload),ve,Re,J,ge)}}if(Ie)return ge=ge(z),Ie=J===""?"."+k(z,0):J,L(ge)?(Re="",Ie!=null&&(Re=Ie.replace(Q,"$&/")+"/"),j(ge,ve,Re,"",function(kt){return kt})):ge!=null&&(ne(ge)&&(ge=Y(ge,Re+(ge.key==null||z&&z.key===ge.key?"":(""+ge.key).replace(Q,"$&/")+"/")+Ie)),ve.push(ge)),1;Ie=0;var ye=J===""?".":J+":";if(L(z))for(var Ce=0;Ce<z.length;Ce++)J=z[Ce],Ae=ye+k(J,Ce),Ie+=j(J,ve,Re,Ae,ge);else if(Ce=T(z),typeof Ce=="function")for(z=Ce.call(z),Ce=0;!(J=z.next()).done;)J=J.value,Ae=ye+k(J,Ce++),Ie+=j(J,ve,Re,Ae,ge);else if(Ae==="object"){if(typeof z.then=="function")return j(W(z),ve,Re,J,ge);throw ve=String(z),Error("Objects are not valid as a React child (found: "+(ve==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":ve)+"). If you meant to render a collection of children, use an array instead.")}return Ie}function se(z,ve,Re){if(z==null)return z;var J=[],ge=0;return j(z,J,"","",function(Ae){return ve.call(Re,Ae,ge++)}),J}function ae(z){if(z._status===-1){var ve=z._result,Re=ve();Re.then(function(J){(z._status===0||z._status===-1)&&(z._status=1,z._result=J,Re.status===void 0&&(Re.status="fulfilled",Re.value=J))},function(J){(z._status===0||z._status===-1)&&(z._status=2,z._result=J,Re.status===void 0&&(Re.status="rejected",Re.reason=J))}),z._status===-1&&(z._status=0,z._result=Re)}if(z._status===1)return z._result.default;throw z._result}var he=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ve=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(ve))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)};function pe(z){var ve=A.T,Re={};Re.types=ve!==null?ve.types:null,A.T=Re;try{var J=z(),ge=A.S;ge!==null&&ge(Re,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(O,he)}catch(Ae){he(Ae)}finally{ve!==null&&Re.types!==null&&(ve.types=Re.types),A.T=ve}}function ze(z){var ve=A.T;if(ve!==null){var Re=ve.types;Re===null?ve.types=[z]:Re.indexOf(z)===-1&&Re.push(z)}else pe(ze.bind(null,z))}var qe={map:se,forEach:function(z,ve,Re){se(z,function(){ve.apply(this,arguments)},Re)},count:function(z){var ve=0;return se(z,function(){ve++}),ve},toArray:function(z){return se(z,function(ve){return ve})||[]},only:function(z){if(!ne(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return lt.Activity=x,lt.Children=qe,lt.Component=U,lt.Fragment=i,lt.Profiler=l,lt.PureComponent=N,lt.StrictMode=r,lt.Suspense=p,lt.ViewTransition=v,lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=A,lt.__COMPILER_RUNTIME={__proto__:null,c:function(z){return A.H.useMemoCache(z)}},lt.addTransitionType=ze,lt.cache=function(z){return function(){return z.apply(null,arguments)}},lt.cacheSignal=function(){return null},lt.cloneElement=function(z,ve,Re){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var J=b({},z.props),ge=z.key;if(ve!=null)for(Ae in ve.key!==void 0&&(ge=""+ve.key),ve)!P.call(ve,Ae)||Ae==="key"||Ae==="__self"||Ae==="__source"||Ae==="ref"&&ve.ref===void 0||(J[Ae]=ve[Ae]);var Ae=arguments.length-2;if(Ae===1)J.children=Re;else if(1<Ae){for(var Ie=Array(Ae),ye=0;ye<Ae;ye++)Ie[ye]=arguments[ye+2];J.children=Ie}return V(z.type,ge,J)},lt.createContext=function(z){return z={$$typeof:d,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:u,_context:z},z},lt.createElement=function(z,ve,Re){var J,ge={},Ae=null;if(ve!=null)for(J in ve.key!==void 0&&(Ae=""+ve.key),ve)P.call(ve,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(ge[J]=ve[J]);var Ie=arguments.length-2;if(Ie===1)ge.children=Re;else if(1<Ie){for(var ye=Array(Ie),Ce=0;Ce<Ie;Ce++)ye[Ce]=arguments[Ce+2];ge.children=ye}if(z&&z.defaultProps)for(J in Ie=z.defaultProps,Ie)ge[J]===void 0&&(ge[J]=Ie[J]);return V(z,Ae,ge)},lt.createRef=function(){return{current:null}},lt.forwardRef=function(z){return{$$typeof:h,render:z}},lt.isValidElement=ne,lt.lazy=function(z){return{$$typeof:_,_payload:{_status:-1,_result:z},_init:ae}},lt.memo=function(z,ve){return{$$typeof:m,type:z,compare:ve===void 0?null:ve}},lt.startTransition=pe,lt.unstable_useCacheRefresh=function(){return A.H.useCacheRefresh()},lt.use=function(z){return A.H.use(z)},lt.useActionState=function(z,ve,Re){return A.H.useActionState(z,ve,Re)},lt.useCallback=function(z,ve){return A.H.useCallback(z,ve)},lt.useContext=function(z){return A.H.useContext(z)},lt.useDebugValue=function(){},lt.useDeferredValue=function(z,ve){return A.H.useDeferredValue(z,ve)},lt.useEffect=function(z,ve){return A.H.useEffect(z,ve)},lt.useEffectEvent=function(z){return A.H.useEffectEvent(z)},lt.useId=function(){return A.H.useId()},lt.useImperativeHandle=function(z,ve,Re){return A.H.useImperativeHandle(z,ve,Re)},lt.useInsertionEffect=function(z,ve){return A.H.useInsertionEffect(z,ve)},lt.useLayoutEffect=function(z,ve){return A.H.useLayoutEffect(z,ve)},lt.useMemo=function(z,ve){return A.H.useMemo(z,ve)},lt.useOptimistic=function(z,ve){return A.H.useOptimistic(z,ve)},lt.useReducer=function(z,ve,Re){return A.H.useReducer(z,ve,Re)},lt.useRef=function(z){return A.H.useRef(z)},lt.useState=function(z){return A.H.useState(z)},lt.useSyncExternalStore=function(z,ve,Re){return A.H.useSyncExternalStore(z,ve,Re)},lt.useTransition=function(){return A.H.useTransition()},lt.version="19.3.0",lt}var l_;function Cm(){return l_||(l_=1,Xh.exports=M1()),Xh.exports}var K=Cm(),Wh={exports:{}},Ml={},qh={exports:{}},Yh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c_;function T1(){return c_||(c_=1,(function(s){function t(W,j){var se=W.length;W.push(j);e:for(;0<se;){var ae=se-1>>>1,he=W[ae];if(0<l(he,j))W[ae]=j,W[se]=he,se=ae;else break e}}function i(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var j=W[0],se=W.pop();if(se!==j){W[0]=se;e:for(var ae=0,he=W.length,pe=he>>>1;ae<pe;){var ze=2*(ae+1)-1,qe=W[ze],z=ze+1,ve=W[z];if(0>l(qe,se))z<he&&0>l(ve,qe)?(W[ae]=ve,W[z]=se,ae=z):(W[ae]=qe,W[ze]=se,ae=ze);else if(z<he&&0>l(ve,se))W[ae]=ve,W[z]=se,ae=z;else break e}}return j}function l(W,j){var se=W.sortIndex-j.sortIndex;return se!==0?se:W.id-j.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();s.unstable_now=function(){return d.now()-h}}var p=[],m=[],_=1,x=null,v=3,E=!1,T=!1,C=!1,b=!1,S=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function N(W){for(var j=i(m);j!==null;){if(j.callback===null)r(m);else if(j.startTime<=W)r(m),j.sortIndex=j.expirationTime,t(p,j);else break;j=i(m)}}function D(W){if(C=!1,N(W),!T)if(i(p)!==null)T=!0,L||(L=!0,ne());else{var j=i(m);j!==null&&k(D,j.startTime-W)}}var L=!1,O=-1,A=5,P=-1;function V(){return b?!0:!(s.unstable_now()-P<A)}function Y(){if(b=!1,L){var W=s.unstable_now();P=W;var j=!0;try{e:{T=!1,C&&(C=!1,U(O),O=-1),E=!0;var se=v;try{t:{for(N(W),x=i(p);x!==null&&!(x.expirationTime>W&&V());){var ae=x.callback;if(typeof ae=="function"){x.callback=null,v=x.priorityLevel;var he=ae(x.expirationTime<=W);if(W=s.unstable_now(),typeof he=="function"){x.callback=he,N(W),j=!0;break t}x===i(p)&&r(p),N(W)}else r(p);x=i(p)}if(x!==null)j=!0;else{var pe=i(m);pe!==null&&k(D,pe.startTime-W),j=!1}}break e}finally{x=null,v=se,E=!1}j=void 0}}finally{j?ne():L=!1}}}var ne;if(typeof I=="function")ne=function(){I(Y)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,Q=ce.port2;ce.port1.onmessage=Y,ne=function(){Q.postMessage(null)}}else ne=function(){S(Y,0)};function k(W,j){O=S(function(){W(s.unstable_now())},j)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(W){W.callback=null},s.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<W?Math.floor(1e3/W):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_next=function(W){switch(v){case 1:case 2:case 3:var j=3;break;default:j=v}var se=v;v=j;try{return W()}finally{v=se}},s.unstable_requestPaint=function(){b=!0},s.unstable_runWithPriority=function(W,j){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var se=v;v=W;try{return j()}finally{v=se}},s.unstable_scheduleCallback=function(W,j,se){var ae=s.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?ae+se:ae):se=ae,W){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=se+he,W={id:_++,callback:j,priorityLevel:W,startTime:se,expirationTime:he,sortIndex:-1},se>ae?(W.sortIndex=se,t(m,W),i(p)===null&&W===i(m)&&(C?(U(O),O=-1):C=!0,k(D,se-ae))):(W.sortIndex=he,t(p,W),T||E||(T=!0,L||(L=!0,ne()))),W},s.unstable_shouldYield=V,s.unstable_wrapCallback=function(W){var j=v;return function(){var se=v;v=j;try{return W.apply(this,arguments)}finally{v=se}}}})(Yh)),Yh}var u_;function A1(){return u_||(u_=1,qh.exports=T1()),qh.exports}var Zh={exports:{}},Pn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f_;function w1(){if(f_)return Pn;f_=1;var s=Cm();function t(_){var x="https://react.dev/errors/"+_;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)x+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+_+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),u=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(_,x,v){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:E==null?null:E===d?d:""+E,children:_,containerInfo:x,implementation:v}}var p=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(_,x){if(_==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return Pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Pn.browser=function(_){return{$$typeof:u,_reason:_}},Pn.createPortal=function(_,x){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(t(299));return h(_,x,null,v)},Pn.flushSync=function(_){var x=p.T,v=r.p;try{if(p.T=null,r.p=2,_)return _()}finally{p.T=x,r.p=v,r.d.f()}},Pn.preconnect=function(_,x){typeof _=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,r.d.C(_,x))},Pn.prefetchDNS=function(_){typeof _=="string"&&r.d.D(_)},Pn.preinit=function(_,x){if(typeof _=="string"&&x&&typeof x.as=="string"){var v=x.as,E=m(v,x.crossOrigin),T=typeof x.integrity=="string"?x.integrity:void 0,C=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;v==="style"?r.d.S(_,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:E,integrity:T,fetchPriority:C}):v==="script"&&r.d.X(_,{crossOrigin:E,integrity:T,fetchPriority:C,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},Pn.preinitModule=function(_,x){if(typeof _=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var v=m(x.as,x.crossOrigin);r.d.M(_,{crossOrigin:v,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0})}}else x==null&&r.d.M(_)},Pn.preload=function(_,x){if(typeof _=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var v=x.as,E=m(v,x.crossOrigin);r.d.L(_,v,{crossOrigin:E,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},Pn.preloadModule=function(_,x){if(typeof _=="string")if(x){var v=m(x.as,x.crossOrigin);r.d.m(_,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:v,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0})}else r.d.m(_)},Pn.requestFormReset=function(_){r.d.r(_)},Pn.unstable_batchedUpdates=function(_,x){return _(x)},Pn.useFormState=function(_,x,v){return p.H.useFormState(_,x,v)},Pn.useFormStatus=function(){return p.H.useHostTransitionStatus()},Pn.version="19.3.0",Pn}var d_;function R1(){if(d_)return Zh.exports;d_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Zh.exports=w1(),Zh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h_;function C1(){if(h_)return Ml;h_=1;var s=A1(),t=Cm(),i=R1();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){for(var n=e,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(e=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?e:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return p(c),e;if(f===o)return p(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=f;else{for(var y=!1,R=c.child;R;){if(R===a){y=!0,a=c,o=f;break}if(R===o){y=!0,o=c,a=f;break}R=R.sibling}if(!y){for(R=f.child;R;){if(R===a){y=!0,a=f,o=c;break}if(R===o){y=!0,o=f,a=c;break}R=R.sibling}if(!y)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}function x(e,n,a,o,c,f){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&a(e,o,c,f)||(e.tag!==22||e.memoizedState===null)&&(n||e.tag!==5&&e.tag!==27)&&x(e.child,n,a,o,c,f))return!0;e=e.sibling}return!1}function v(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function E(e){var n=!1;for(e=e.return;e!==null&&(e.tag===4&&(n=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return n}function T(e){var n=[null,null],a=v(e);return a===null||C(n,e,a.child,{foundSelf:!1}),n}function C(e,n,a,o){for(;a!==null;){if(a===n)o.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(o.foundSelf)return e[1]=a,!0;e[0]=a}else if((a.tag!==22||a.memoizedState===null)&&C(e,n,a.child,o))return!0;a=a.sibling}return!1}function b(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(r(559))}}var S=null,U=null;function I(e,n,a){return e===a?!0:e===n?(S=e,!0):!1}function N(e,n,a){return e===a?(U=e,!1):e===n?(U!==null&&(S=e),!0):!1}function D(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function L(e,n,a){for(var o=0,c=e;c;c=a(c))o++;c=0;for(var f=n;f;f=a(f))c++;for(;0<o-c;)e=a(e),o--;for(;0<c-o;)n=a(n),c--;for(;o--;){if(e===n||n!==null&&e===n.alternate)return e;e=a(e),n=a(n)}return null}var O=Object.assign,A=Symbol.for("react.element"),P=Symbol.for("react.transitional.element"),V=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),ne=Symbol.for("react.strict_mode"),ce=Symbol.for("react.profiler"),Q=Symbol.for("react.consumer"),k=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),se=Symbol.for("react.suspense_list"),ae=Symbol.for("react.memo"),he=Symbol.for("react.lazy"),pe=Symbol.for("react.activity"),ze=Symbol.for("react.legacy_hidden"),qe=Symbol.for("react.memo_cache_sentinel"),z=Symbol.for("react.view_transition"),ve=Symbol.for("react.recoverable"),Re=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=Re&&e[Re]||e["@@iterator"],typeof e=="function"?e:null)}var ge=Symbol.for("react.client.reference");function Ae(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ge?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Y:return"Fragment";case ce:return"Profiler";case ne:return"StrictMode";case j:return"Suspense";case se:return"SuspenseList";case pe:return"Activity";case z:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case V:return"Portal";case k:return e.displayName||"Context";case Q:return(e._context.displayName||"Context")+".Consumer";case W:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ae:return n=e.displayName||null,n!==null?n:Ae(e.type)||"Memo";case he:n=e._payload,e=e._init;try{return Ae(e(n))}catch{}}return null}var Ie=Array.isArray,ye=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ce=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,kt={pending:!1,data:null,method:null,action:null},mt=[],xt=-1;function St(e){return{current:e}}function nt(e){0>xt||(e.current=mt[xt],mt[xt]=null,xt--)}function at(e,n){xt++,mt[xt]=e.current,e.current=n}var jt=St(null),mn=St(null),Ot=St(null),nn=St(null);function q(e,n){switch(at(Ot,n),at(mn,e),at(jt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?pv(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=pv(n),e=mv(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}nt(jt),at(jt,e)}function rn(){nt(jt),nt(mn),nt(Ot)}function Pt(e){var n=e.memoizedState;n!==null&&(Js._currentValue=n.memoizedState,at(nn,e)),n=jt.current;var a=mv(n,e.type);n!==a&&(at(mn,e),at(jt,a))}function F(e){mn.current===e&&(nt(jt),nt(mn)),nn.current===e&&(nt(nn),Js._currentValue=kt)}var M,te;function ue(e){if(M===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);M=n&&n[1]||"",te=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+M+e+te}var xe=!1;function we(e,n){if(!e||xe)return"";xe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var be=function(){throw Error()};if(Object.defineProperty(be.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(be,[])}catch(Pe){var Z=Pe}Reflect.construct(e,[],be)}else{try{be.call()}catch(Pe){Z=Pe}be=!1;try{var le=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),be=!0,new e}finally{be&&(le!==void 0?Object.defineProperty(e.prototype,"props",le):delete e.prototype.props)}}}else{try{throw Error()}catch(Pe){Z=Pe}(be=e())&&typeof be.catch=="function"&&be.catch(function(){})}}catch(Pe){if(Pe&&Z&&typeof Pe.stack=="string")return[Pe.stack,Z.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),y=f[0],R=f[1];if(y&&R){var B=y.split(`
`),ee=R.split(`
`);for(c=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;c<ee.length&&!ee[c].includes("DetermineComponentFrameRoot");)c++;if(o===B.length||c===ee.length)for(o=B.length-1,c=ee.length-1;1<=o&&0<=c&&B[o]!==ee[c];)c--;for(;1<=o&&0<=c;o--,c--)if(B[o]!==ee[c]){if(o!==1||c!==1)do if(o--,c--,0>c||B[o]!==ee[c]){var fe=`
`+B[o].replace(" at new "," at ");return e.displayName&&fe.includes("<anonymous>")&&(fe=fe.replace("<anonymous>",e.displayName)),fe}while(1<=o&&0<=c);break}}}finally{xe=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ue(a):""}function Ue(e,n){switch(e.tag){case 26:case 27:case 5:return ue(e.type);case 16:return ue("Lazy");case 13:return e.child!==n&&n!==null?ue("Suspense Fallback"):ue("Suspense");case 19:return ue("SuspenseList");case 0:case 15:return we(e.type,!1);case 11:return we(e.type.render,!1);case 1:return we(e.type,!0);case 31:return ue("Activity");case 30:return ue("ViewTransition");default:return""}}function _e(e){try{var n="",a=null;do n+=Ue(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Me=Object.prototype.hasOwnProperty,De=s.unstable_scheduleCallback,et=s.unstable_cancelCallback,Be=s.unstable_shouldYield,Oe=s.unstable_requestPaint,Xe=s.unstable_now,it=s.unstable_getCurrentPriorityLevel,ct=s.unstable_ImmediatePriority,X=s.unstable_UserBlockingPriority,Ne=s.unstable_NormalPriority,Ee=s.unstable_LowPriority,Le=s.unstable_IdlePriority,je=s.log,Te=s.unstable_setDisableYieldValue,$e=null,ke=null;function Ct(e){if(typeof je=="function"&&Te(e),ke&&typeof ke.setStrictMode=="function")try{ke.setStrictMode($e,e)}catch{}}var ut=Math.clz32?Math.clz32:_f,ni=Math.log,pi=Math.LN2;function _f(e){return e>>>=0,e===0?32:31-(ni(e)/pi|0)|0}var ps=256,Ur=262144,Za=4194304;function va(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Lr(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var c=0,f=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var R=o&134217727;return R!==0?(o=R&~f,o!==0?c=va(o):(y&=R,y!==0?c=va(y):a||(a=R&~e,a!==0&&(c=va(a))))):(R=o&~f,R!==0?c=va(R):y!==0?c=va(y):a||(a=o&~e,a!==0&&(c=va(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Ka(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Wi(e,n){(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var o=31-ut(a),c=1<<o;n|=e[o],a&=~c}return n}function Co(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function No(){var e=Za;return Za<<=1,(Za&62914560)===0&&(Za=4194304),e}function ms(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function qi(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Zl(e,n,a,o,c,f){var y=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,B=e.expirationTimes,ee=e.hiddenUpdates;for(a=y&~a;0<a;){var fe=31-ut(a),be=1<<fe;R[fe]=0,B[fe]=-1;var Z=ee[fe];if(Z!==null)for(ee[fe]=null,fe=0;fe<Z.length;fe++){var le=Z[fe];le!==null&&(le.lane&=-536870913)}a&=~be}o!==0&&Fr(e,o,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(y&~n))}function Fr(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-ut(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Do(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-ut(a),c=1<<o;c&n|e[o]&n&&(e[o]|=n),a&=~c}}function Uo(e,n){var a=n&-n;return a=(a&42)!==0?1:Lo(a),(a&(e.suspendedLanes|n))!==0?0:a}function Lo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Fo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Kl(){var e=Ce.p;return e!==0?e:(e=window.event,e===void 0?32:Jv(e.type))}function Ql(e,n){var a=Ce.p;try{return Ce.p=e,n()}finally{Ce.p=a}}var mi=Math.random().toString(36).slice(2),w="__reactFiber$"+mi,H="__reactProps$"+mi,de="__reactContainer$"+mi,re="__reactEvents$"+mi,oe="__reactListeners$"+mi,He="__reactHandles$"+mi,We="__reactResources$"+mi,Fe="__reactMarker$"+mi,Ke="__reactLoad$"+mi;function Qe(e){delete e[w],delete e[H],delete e[oe],delete e[He]}function st(e){var n;if(n=e[w])return n;for(var a=e.parentNode;a;){if(n=a[de]||a[w]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Uv(e);e!==null;){if(a=e[w])return a;e=Uv(e)}return n}e=a,a=e.parentNode}return null}function ft(e){if(e=e[w]||e[de]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Ye(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function bt(e){var n=e[We];return n||(n=e[We]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function vt(e){e[Fe]=!0}function Kt(e){e[Ke]=void 0}var Gt=new Set,Sn={};function Ge(e,n){ln(e,n),ln(e+"Capture",n)}function ln(e,n){for(Sn[e]=n,e=0;e<n.length;e++)Gt.add(n[e])}var Nt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Vn={},ii={};function Yi(e){return Me.call(ii,e)?!0:Me.call(Vn,e)?!1:Nt.test(e)?ii[e]=!0:(Vn[e]=!0,!1)}var _t=!1;function It(){var e=_t;return _t=!1,e}function $t(e,n,a){if(Yi(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,a)}}function ai(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,a)}}function At(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,o)}}function cn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _a(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Jl(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(y){a=""+y,f.call(this,y)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function yf(e){if(!e._valueTracker){var n=_a(e)?"checked":"value";e._valueTracker=Jl(e,n,""+e[n])}}function n0(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=_a(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}var kS=/[\n"\\]/g;function gi(e){return e.replace(kS,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Sf(e,n,a,o,c,f,y,R){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+cn(n)):e.value!==""+cn(n)&&(e.value=""+cn(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?y==="number"&&e.value==n?bf(e,cn(e.value)):bf(e,cn(n)):a!=null?bf(e,cn(a)):o!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+cn(R):e.removeAttribute("name")}function i0(e,n,a,o,c,f,y,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){yf(e);return}a=a!=null?""+cn(a):"",n=n!=null?""+cn(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),yf(e)}function bf(e,n){e.defaultValue!==""+n&&(e.defaultValue=""+n)}function gs(e,n,a,o){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&o&&(e[a].defaultSelected=!0)}else{for(a=""+cn(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function a0(e,n,a){if(n!=null&&(n=""+cn(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+cn(a):""}function r0(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(Ie(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=cn(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),yf(e)}function xs(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var jS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function s0(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||jS.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function o0(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="",_t=!0);for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&(s0(e,c,o),_t=!0)}else for(var f in n)n.hasOwnProperty(f)&&s0(e,f,n[f])}function Ef(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var XS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),WS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $l(e){return WS.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Zi(){}var Mf=null;function Tf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var vs=null,_s=null;function l0(e){var n=ft(e);if(n&&(e=n.stateNode)){var a=e[H]||null;e:switch(e=n.stateNode,n.type){case"input":if(Sf(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+gi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var c=o[H]||null;if(!c)throw Error(r(90));Sf(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&n0(o)}break e;case"textarea":a0(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&gs(e,!!a.multiple,n,!1)}}}var Af=!1;function c0(e,n,a){if(Af)return e(n,a);Af=!0;try{var o=e(n);return o}finally{if(Af=!1,(vs!==null||_s!==null)&&($c(),vs&&(n=vs,e=_s,_s=vs=null,l0(n),e)))for(n=0;n<e.length;n++)l0(e[n])}}function Po(e,n){var a=e.stateNode;if(a===null)return null;var o=a[H]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var ya=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wf=!1;if(ya)try{var Oo={};Object.defineProperty(Oo,"passive",{get:function(){wf=!0}}),window.addEventListener("test",Oo,Oo),window.removeEventListener("test",Oo,Oo)}catch{wf=!1}var Qa=null,Rf=null,ec=null;function u0(){if(ec)return ec;var e,n=Rf,a=n.length,o,c="value"in Qa?Qa.value:Qa.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var y=a-e;for(o=1;o<=y&&n[a-o]===c[f-o];o++);return ec=c.slice(e,1<o?1-o:void 0)}function tc(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function nc(){return!0}function f0(){return!1}function kn(e){function n(a,o,c,f,y){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?nc:f0,this.isPropagationStopped=f0,this}return O(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=nc)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=nc)},persist:function(){},isPersistent:nc}),n}var Ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ic=kn(Ja),Bo=O({},Ja,{view:0,detail:0}),qS=kn(Bo),Cf,Nf,Io,ac=O({},Bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Io&&(Io&&e.type==="mousemove"?(Cf=e.screenX-Io.screenX,Nf=e.screenY-Io.screenY):Nf=Cf=0,Io=e),Cf)},movementY:function(e){return"movementY"in e?e.movementY:Nf}}),d0=kn(ac),YS=O({},ac,{dataTransfer:0}),ZS=kn(YS),KS=O({},Bo,{relatedTarget:0}),Df=kn(KS),QS=O({},Ja,{animationName:0,elapsedTime:0,pseudoElement:0}),JS=kn(QS),$S=O({},Ja,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),eb=kn($S),tb=O({},Ja,{data:0}),h0=kn(tb),nb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ib={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ab={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rb(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ab[e])?!!n[e]:!1}function Uf(){return rb}var sb=O({},Bo,{key:function(e){if(e.key){var n=nb[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=tc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ib[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uf,charCode:function(e){return e.type==="keypress"?tc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?tc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ob=kn(sb),lb=O({},ac,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),p0=kn(lb),cb=O({},Ja,{submitter:0}),ub=kn(cb),fb=O({},Bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uf}),db=kn(fb),hb=O({},Ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),pb=kn(hb),mb=O({},ac,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),gb=kn(mb),xb=O({},Ja,{newState:0,oldState:0,source:0}),vb=kn(xb),_b=[9,13,27,32],Lf=ya&&"CompositionEvent"in window,zo=null;ya&&"documentMode"in document&&(zo=document.documentMode);var yb=ya&&"TextEvent"in window&&!zo,m0=ya&&(!Lf||zo&&8<zo&&11>=zo),g0=" ",x0=!1;function v0(e,n){switch(e){case"keyup":return _b.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ys=!1;function Sb(e,n){switch(e){case"compositionend":return _0(n);case"keypress":return n.which!==32?null:(x0=!0,g0);case"textInput":return e=n.data,e===g0&&x0?null:e;default:return null}}function bb(e,n){if(ys)return e==="compositionend"||!Lf&&v0(e,n)?(e=u0(),ec=Rf=Qa=null,ys=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return m0&&n.locale!=="ko"?null:n.data;default:return null}}var Eb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function y0(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Eb[e.type]:n==="textarea"}function S0(e,n,a,o){vs?_s?_s.push(o):_s=[o]:vs=o,n=ru(n,"onChange"),0<n.length&&(a=new ic("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Ho=null,Go=null;function Mb(e){lv(e,0)}function rc(e){var n=Ye(e);if(n0(n))return e}function b0(e,n){if(e==="change")return n}var E0=!1;if(ya){var Ff;if(ya){var Pf="oninput"in document;if(!Pf){var M0=document.createElement("div");M0.setAttribute("oninput","return;"),Pf=typeof M0.oninput=="function"}Ff=Pf}else Ff=!1;E0=Ff&&(!document.documentMode||9<document.documentMode)}function T0(){Ho&&(Ho.detachEvent("onpropertychange",A0),Go=Ho=null)}function A0(e){if(e.propertyName==="value"&&rc(Go)){var n=[];S0(n,Go,e,Tf(e)),c0(Mb,n)}}function Tb(e,n,a){e==="focusin"?(T0(),Ho=n,Go=a,Ho.attachEvent("onpropertychange",A0)):e==="focusout"&&T0()}function Ab(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return rc(Go)}function wb(e,n){if(e==="click")return rc(n)}function Rb(e,n){if(e==="input"||e==="change")return rc(n)}function Cb(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ri=typeof Object.is=="function"?Object.is:Cb;function Vo(e,n){if(ri(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!Me.call(n,c)||!ri(e[c],n[c]))return!1}return!0}function Of(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function w0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function R0(e,n){var a=w0(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=w0(a)}}function C0(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?C0(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function N0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Of(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Of(e.document)}return n}function Bf(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Nb=ya&&"documentMode"in document&&11>=document.documentMode,Ss=null,If=null,ko=null,zf=!1;function D0(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;zf||Ss==null||Ss!==Of(o)||(o=Ss,"selectionStart"in o&&Bf(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ko&&Vo(ko,o)||(ko=o,o=ru(If,"onSelect"),0<o.length&&(n=new ic("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Ss)))}function Pr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var bs={animationend:Pr("Animation","AnimationEnd"),animationiteration:Pr("Animation","AnimationIteration"),animationstart:Pr("Animation","AnimationStart"),transitionrun:Pr("Transition","TransitionRun"),transitionstart:Pr("Transition","TransitionStart"),transitioncancel:Pr("Transition","TransitionCancel"),transitionend:Pr("Transition","TransitionEnd")},Hf={},U0={};ya&&(U0=document.createElement("div").style,"AnimationEvent"in window||(delete bs.animationend.animation,delete bs.animationiteration.animation,delete bs.animationstart.animation),"TransitionEvent"in window||delete bs.transitionend.transition);function Or(e){if(Hf[e])return Hf[e];if(!bs[e])return e;var n=bs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in U0)return Hf[e]=n[a];return e}var L0=Or("animationend"),F0=Or("animationiteration"),P0=Or("animationstart"),Db=Or("transitionrun"),Ub=Or("transitionstart"),Lb=Or("transitioncancel"),O0=Or("transitionend"),B0=new Map,Gf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gf.push("scrollEnd");function Ni(e,n){B0.set(e,n),Ge(n,[e])}var Fb=0;function Sa(e,n){if(e.name!=null&&e.name!=="auto")return e.name;if(n.autoName!==null)return n.autoName;e=Fi.identifierPrefix;var a=Fb++;return e="_"+e+"t_"+a.toString(32)+"_",n.autoName=e}function I0(e){if(e==null||typeof e=="string")return e;var n=null,a=Vs;if(a!==null)for(var o=0;o<a.length;o++){var c=e[a[o]];if(c!=null){if(c==="none")return"none";n=n==null?c:n+(" "+c)}}return n??e.default}function ba(e,n){return e=I0(e),n=I0(n),n==null?e==="auto"?null:e:n==="auto"?null:n}var sc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},xi=[],Es=0,Vf=0;function oc(){for(var e=Es,n=Vf=Es=0;n<e;){var a=xi[n];xi[n++]=null;var o=xi[n];xi[n++]=null;var c=xi[n];xi[n++]=null;var f=xi[n];if(xi[n++]=null,o!==null&&c!==null){var y=o.pending;y===null?c.next=c:(c.next=y.next,y.next=c),o.pending=c}f!==0&&z0(a,c,f)}}function lc(e,n,a,o){xi[Es++]=e,xi[Es++]=n,xi[Es++]=a,xi[Es++]=o,Vf|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function kf(e,n,a,o){return lc(e,n,a,o),cc(e)}function Br(e,n){return lc(e,null,null,n),cc(e)}function z0(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-ut(a),e=f.hiddenUpdates,o=e[c],o===null?e[c]=[n]:o.push(n),n.lane=a|536870912),f):null}function cc(e){if(50<fl)throw fl=0,Jc=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ms={};function Pb(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(e,n,a,o){return new Pb(e,n,a,o)}function jf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ea(e,n){var a=e.alternate;return a===null?(a=Yn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&1206910976,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function H0(e,n){e.flags&=1206910978;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function uc(e,n,a,o,c,f){var y=0;if(o=e,typeof o=="function")jf(o)&&(y=1);else if(typeof o=="string")y=c1(e,a,jt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(o){case pe:return e=Yn(31,a,n,c),e.elementType=pe,e.lanes=f,e;case Y:return Ir(a.children,c,f,n);case ne:y=8,c|=24;break;case ce:return e=Yn(12,a,n,c|2),e.elementType=ce,e.lanes=f,e;case j:return e=Yn(13,a,n,c),e.elementType=j,e.lanes=f,e;case se:return e=Yn(19,a,n,c),e.elementType=se,e.lanes=f,e;case ze:case z:return e=c|32,e=Yn(30,a,n,e),e.elementType=z,e.lanes=f,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof o=="object"&&o!==null)switch(o.$$typeof){case k:y=10;break e;case Q:y=9;break e;case W:y=11;break e;case ae:y=14;break e;case he:y=16,o=null;break e}y=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=Yn(y,a,n,c),n.elementType=e,n.type=o,n.lanes=f,n}function Ir(e,n,a,o){return e=Yn(7,e,o,n),e.lanes=a,e}function Xf(e,n,a){return e=Yn(6,e,null,n),e.lanes=a,e}function G0(e){var n=Yn(18,null,null,0);return n.stateNode=e,n}function Wf(e,n,a){return n=Yn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var V0=new WeakMap;function vi(e,n){if(typeof e=="object"&&e!==null){var a=V0.get(e);return a!==void 0?a:(n={value:e,source:n,stack:_e(n)},V0.set(e,n),n)}return{value:e,source:n,stack:_e(n)}}var Ts=[],As=0,fc=null,jo=0,_i=[],yi=0,$a=null,Ki=1,Qi="";function Ma(e,n){Ts[As++]=jo,Ts[As++]=fc,fc=e,jo=n}function k0(e,n,a){_i[yi++]=Ki,_i[yi++]=Qi,_i[yi++]=$a,$a=e;var o=Ki;e=Qi;var c=32-ut(o)-1;o&=~(1<<c),a+=1;var f=32-ut(n)+c;if(30<f){var y=c-c%5;f=(o&(1<<y)-1).toString(32),o>>=y,c-=y,Ki=1<<32-ut(n)+c|a<<c|o,Qi=f+e}else Ki=1<<f|a<<c|o,Qi=e}function dc(e){e.return!==null&&(Ma(e,1),k0(e,1,0))}function qf(e){for(;e===fc;)fc=Ts[--As],Ts[As]=null,jo=Ts[--As],Ts[As]=null;for(;e===$a;)$a=_i[--yi],_i[yi]=null,Qi=_i[--yi],_i[yi]=null,Ki=_i[--yi],_i[yi]=null}function j0(e,n){_i[yi++]=Ki,_i[yi++]=Qi,_i[yi++]=$a,Ki=n.id,Qi=n.overflow,$a=e}var Tn=null,en=null,yt=!1,er=null,Si=!1,Yf=Error(r(519));function tr(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Xo(vi(n,e)),Yf}function X0(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[w]=e,n[H]=o,a){case"dialog":Mt("cancel",n),Mt("close",n);break;case"iframe":case"object":case"embed":Mt("load",n);break;case"video":case"audio":for(a=0;a<hl.length;a++)Mt(hl[a],n);break;case"source":Mt("error",n);break;case"img":case"image":case"link":Mt("error",n),Mt("load",n);break;case"details":Mt("toggle",n);break;case"input":Mt("invalid",n),i0(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Mt("invalid",n);break;case"textarea":Mt("invalid",n),r0(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||dv(n.textContent,a)?(o.popover!=null&&(Mt("beforetoggle",n),Mt("toggle",n)),o.onScroll!=null&&Mt("scroll",n),o.onScrollEnd!=null&&Mt("scrollend",n),o.onClick!=null&&(n.onclick=Zi),n=!0):n=!1,n||tr(e,!0)}function hc(e){for(Tn=e.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:Si=!1;return;case 27:case 3:Si=!0;return;default:Tn=Tn.return}}function ws(e){if(e!==Tn)return!1;if(!yt)return hc(e),yt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Mh(e.type,e.memoizedProps)),a=!a),a&&en&&tr(e),hc(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));en=Dv(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));en=Dv(e)}else n===27?(n=en,xr(e.type)?(e=Lh,Lh=null,en=e):en=n):en=Tn?Ei(e.stateNode.nextSibling):null;return!0}function zr(){en=Tn=null,yt=!1}function Zf(){var e=er;return e!==null&&(Qn===null?Qn=e:Qn.push.apply(Qn,e),er=null),e}function Xo(e){er===null?er=[e]:er.push(e)}var Kf=St(null),Hr=null,Ta=null;function nr(e,n,a){at(Kf,n._currentValue),n._currentValue=a}function Aa(e){e._currentValue=Kf.current,nt(Kf)}function pc(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Qf(e,n,a,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var y=c.child;f=f.firstContext;e:for(;f!==null;){var R=f;f=c;for(var B=0;B<n.length;B++)if(R.context===n[B]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),pc(f.return,a,e),o||(y=null);break e}f=R.next}}else if(c.tag===18){if(y=c.return,y===null)throw Error(r(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),pc(y,a,e),y=null}else c.tag===13&&c.memoizedState!==null&&c.memoizedState.dehydrated===null?(c.lanes|=a,y=c.alternate,y!==null&&(y.lanes|=a),pc(c.return,a,e),y=c.child,y=y!==null?y.sibling:null):y=c.child;if(y!==null)y.return=c;else for(y=c;y!==null;){if(y===e){y=null;break}if(c=y.sibling,c!==null){c.return=y.return,y=c;break}y=y.return}c=y}}function Gr(e,n,a,o){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var y=c.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var R=c.type;ri(c.pendingProps.value,y.value)||(e!==null?e.push(R):e=[R])}}else if(c===nn.current){if(y=c.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Js):e=[Js])}c=c.return}return e!==null&&Qf(n,e,a,o),n.flags|=262144,e!==null}function mc(e){for(e=e.firstContext;e!==null;){if(!ri(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Vr(e){Hr=e,Ta=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Nn(e){return W0(Hr,e)}function gc(e,n){return Hr===null&&Vr(e),W0(e,n)}function W0(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ta===null){if(e===null)throw Error(r(308));Ta=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Ta=Ta.next=n;return a}var Ob=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Bb=s.unstable_scheduleCallback,Ib=s.unstable_NormalPriority,gn={$$typeof:k,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Jf(){return{controller:new Ob,data:new Map,refCount:0}}function Wo(e){e.refCount--,e.refCount===0&&Bb(Ib,function(){e.controller.abort()})}function q0(e,n){if((e.pendingLanes&4194048)!==0){var a=e.transitionTypes;for(a===null&&(a=e.transitionTypes=[]),e=0;e<n.length;e++){var o=n[e];a.indexOf(o)===-1&&a.push(o)}}}var qo=null;function zb(e){var n=e.transitionTypes;return e.transitionTypes=null,n}var Yo=null,$f=0,kr=0,Rs=null;function Hb(e,n){if(Yo===null){var a=Yo=[];$f=0,kr=mh(),Rs={status:"pending",value:void 0,then:function(o){a.push(o)}}}return $f++,n.then(Y0,Y0),n}function Y0(){if(--$f===0&&(qo=null,Yo!==null)){Rs!==null&&(Rs.status="fulfilled");var e=Yo;Yo=null,kr=0,Rs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Gb(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var Z0=ye.S;ye.S=function(e,n){if(Gx=Xe(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Hb(e,n),qo!==null)for(var a=Ws;a!==null;)q0(a,qo),a=a.next;if(a=e.types,a!==null){for(var o=Ws;o!==null;)q0(o,a),o=o.next;if(kr!==0){o=qo,o===null&&(o=qo=[]);for(var c=0;c<a.length;c++){var f=a[c];o.indexOf(f)===-1&&o.push(f)}}}Z0!==null&&Z0(e,n)};var jr=St(null);function ed(){var e=jr.current;return e!==null?e:Jt.pooledCache}function xc(e,n){n===null?at(jr,jr.current):at(jr,n.pool)}function K0(){var e=ed();return e===null?null:{parent:gn._currentValue,pool:e}}var Cs=Error(r(460)),td=Error(r(474)),vc=Error(r(542)),_c={then:function(){}};function Q0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function J0(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Zi,Zi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,eg(e),e===void 0&&!("reason"in n)?Error(r(600)):e;default:if(typeof n.status=="string")n.then(Zi,Zi);else{if(e=Jt,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,eg(e),e}throw Wr=n,Cs}}function Xr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Wr=a,Cs):a}}var Wr=null;function $0(){if(Wr===null)throw Error(r(459));var e=Wr;return Wr=null,e}function eg(e){if(e===Cs||e===vc)throw Error(r(483))}var Ns=null,Zo=0;function yc(e){var n=Zo;return Zo+=1,Ns===null&&(Ns=[]),J0(Ns,e,n)}function ir(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Sc(e,n){throw n.$$typeof===A?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function tg(e){function n($,G){if(e){var ie=$.deletions;ie===null?($.deletions=[G],$.flags|=16):ie.push(G)}}function a($,G){if(!e)return null;for(;G!==null;)n($,G),G=G.sibling;return null}function o($){for(var G=new Map;$!==null;)$.key===null?G.set($.index,$):G.set($.key,$),$=$.sibling;return G}function c($,G){return $=Ea($,G),$.index=0,$.sibling=null,$}function f($,G,ie){return $.index=ie,e?(ie=$.alternate,ie!==null?(ie=ie.index,ie<G?($.flags|=2,G):ie):($.flags|=134217730,G)):($.flags|=1048576,G)}function y($){return e&&$.alternate===null&&($.flags|=134217730),$}function R($,G,ie,Se){return G===null||G.tag!==6?(G=Xf(ie,$.mode,Se),G.return=$,G):(G=c(G,ie),G.return=$,G)}function B($,G,ie,Se){var Ze=ie.type;return Ze===Y?($=fe($,G,ie.props.children,Se,ie.key),ir($,ie),$):G!==null&&(G.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===he&&Xr(Ze)===G.type)?(G=c(G,ie.props),ir(G,ie),G.return=$,G):(G=uc(ie.type,ie.key,ie.props,null,$.mode,Se),ir(G,ie),G.return=$,G)}function ee($,G,ie,Se){return G===null||G.tag!==4||G.stateNode.containerInfo!==ie.containerInfo||G.stateNode.implementation!==ie.implementation?(G=Wf(ie,$.mode,Se),G.return=$,G):(G=c(G,ie.children||[]),G.return=$,G)}function fe($,G,ie,Se,Ze){return G===null||G.tag!==7?(G=Ir(ie,$.mode,Se,Ze),G.return=$,G):(G=c(G,ie),G.return=$,G)}function be($,G,ie){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=Xf(""+G,$.mode,ie),G.return=$,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case P:return ie=uc(G.type,G.key,G.props,null,$.mode,ie),ir(ie,G),ie.return=$,ie;case V:return G=Wf(G,$.mode,ie),G.return=$,G;case he:return G=Xr(G),be($,G,ie)}if(Ie(G)||J(G))return G=Ir(G,$.mode,ie,null),G.return=$,G;if(typeof G.then=="function")return be($,yc(G),ie);if(G.$$typeof===k)return be($,gc($,G),ie);Sc($,G)}return null}function Z($,G,ie,Se){var Ze=G!==null?G.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint")return Ze!==null?null:R($,G,""+ie,Se);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case P:return ie.key===Ze?B($,G,ie,Se):null;case V:return ie.key===Ze?ee($,G,ie,Se):null;case he:return ie=Xr(ie),Z($,G,ie,Se)}if(Ie(ie)||J(ie))return Ze!==null?null:fe($,G,ie,Se,null);if(typeof ie.then=="function")return Z($,G,yc(ie),Se);if(ie.$$typeof===k)return Z($,G,gc($,ie),Se);Sc($,ie)}return null}function le($,G,ie,Se,Ze){if(typeof Se=="string"&&Se!==""||typeof Se=="number"||typeof Se=="bigint")return $=$.get(ie)||null,R(G,$,""+Se,Ze);if(typeof Se=="object"&&Se!==null){switch(Se.$$typeof){case P:return $=$.get(Se.key===null?ie:Se.key)||null,B(G,$,Se,Ze);case V:return $=$.get(Se.key===null?ie:Se.key)||null,ee(G,$,Se,Ze);case he:return Se=Xr(Se),le($,G,ie,Se,Ze)}if(Ie(Se)||J(Se))return $=$.get(ie)||null,fe(G,$,Se,Ze,null);if(typeof Se.then=="function")return le($,G,ie,yc(Se),Ze);if(Se.$$typeof===k)return le($,G,ie,gc(G,Se),Ze);Sc(G,Se)}return null}function Pe($,G,ie,Se){for(var Ze=null,Rt=null,tt=G,rt=G=0,_n=null;tt!==null&&rt<ie.length;rt++){tt.index>rt?(_n=tt,tt=null):_n=tt.sibling;var Ft=Z($,tt,ie[rt],Se);if(Ft===null){tt===null&&(tt=_n);break}e&&tt&&Ft.alternate===null&&n($,tt),G=f(Ft,G,rt),Rt===null?Ze=Ft:Rt.sibling=Ft,Rt=Ft,tt=_n}if(rt===ie.length)return a($,tt),yt&&Ma($,rt),Ze;if(tt===null){for(;rt<ie.length;rt++)tt=be($,ie[rt],Se),tt!==null&&(G=f(tt,G,rt),Rt===null?Ze=tt:Rt.sibling=tt,Rt=tt);return yt&&Ma($,rt),Ze}for(tt=o(tt);rt<ie.length;rt++)_n=le(tt,$,rt,ie[rt],Se),_n!==null&&(e&&(Ft=_n.alternate,Ft!==null&&tt.delete(Ft.key===null?rt:Ft.key)),G=f(_n,G,rt),Rt===null?Ze=_n:Rt.sibling=_n,Rt=_n);return e&&tt.forEach(function(br){return n($,br)}),yt&&Ma($,rt),Ze}function Je($,G,ie,Se){if(ie==null)throw Error(r(151));for(var Ze=null,Rt=null,tt=G,rt=G=0,_n=null,Ft=ie.next();tt!==null&&!Ft.done;rt++,Ft=ie.next()){tt.index>rt?(_n=tt,tt=null):_n=tt.sibling;var br=Z($,tt,Ft.value,Se);if(br===null){tt===null&&(tt=_n);break}e&&tt&&br.alternate===null&&n($,tt),G=f(br,G,rt),Rt===null?Ze=br:Rt.sibling=br,Rt=br,tt=_n}if(Ft.done)return a($,tt),yt&&Ma($,rt),Ze;if(tt===null){for(;!Ft.done;rt++,Ft=ie.next())Ft=be($,Ft.value,Se),Ft!==null&&(G=f(Ft,G,rt),Rt===null?Ze=Ft:Rt.sibling=Ft,Rt=Ft);return yt&&Ma($,rt),Ze}for(tt=o(tt);!Ft.done;rt++,Ft=ie.next())Ft=le(tt,$,rt,Ft.value,Se),Ft!==null&&(e&&(_n=Ft.alternate,_n!==null&&tt.delete(_n.key===null?rt:_n.key)),G=f(Ft,G,rt),Rt===null?Ze=Ft:Rt.sibling=Ft,Rt=Ft);return e&&tt.forEach(function(S1){return n($,S1)}),yt&&Ma($,rt),Ze}function pt($,G,ie,Se){if(typeof ie=="object"&&ie!==null&&ie.type===Y&&ie.key===null&&ie.props.ref===void 0&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case P:e:{for(var Ze=ie.key;G!==null;){if(G.key===Ze){if(Ze=ie.type,Ze===Y){if(G.tag===7){a($,G.sibling),Se=c(G,ie.props.children),ir(Se,ie),Se.return=$,$=Se;break e}}else if(G.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===he&&Xr(Ze)===G.type){a($,G.sibling),Se=c(G,ie.props),ir(Se,ie),Se.return=$,$=Se;break e}a($,G);break}else n($,G);G=G.sibling}ie.type===Y?(Se=Ir(ie.props.children,$.mode,Se,ie.key),ir(Se,ie),Se.return=$,$=Se):(Se=uc(ie.type,ie.key,ie.props,null,$.mode,Se),ir(Se,ie),Se.return=$,$=Se)}return y($);case V:e:{for(Ze=ie.key;G!==null;){if(G.key===Ze)if(G.tag===4&&G.stateNode.containerInfo===ie.containerInfo&&G.stateNode.implementation===ie.implementation){a($,G.sibling),Se=c(G,ie.children||[]),Se.return=$,$=Se;break e}else{a($,G);break}else n($,G);G=G.sibling}Se=Wf(ie,$.mode,Se),Se.return=$,$=Se}return y($);case he:return ie=Xr(ie),pt($,G,ie,Se)}if(Ie(ie))return Pe($,G,ie,Se);if(J(ie)){if(Ze=J(ie),typeof Ze!="function")throw Error(r(150));return ie=Ze.call(ie),Je($,G,ie,Se)}if(typeof ie.then=="function")return pt($,G,yc(ie),Se);if(ie.$$typeof===k)return pt($,G,gc($,ie),Se);Sc($,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint"?(ie=""+ie,G!==null&&G.tag===6?(a($,G.sibling),Se=c(G,ie),Se.return=$,$=Se):(a($,G),Se=Xf(ie,$.mode,Se),Se.return=$,$=Se),y($)):a($,G)}return function($,G,ie,Se){try{Zo=0;var Ze=pt($,G,ie,Se);return Ns=null,Ze}catch(tt){if(tt===Cs||tt===vc)throw tt;var Rt=Yn(29,tt,null,$.mode);return Rt.lanes=Se,Rt.return=$,Rt}finally{}}}var qr=tg(!0),ng=tg(!1),ar=!1;function nd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function id(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function rr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function sr(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(zt&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=cc(e),z0(e,null,a),n}return lc(e,o,n,a),cc(e)}function Ko(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Do(e,a)}}function ad(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var rd=!1;function Qo(){if(rd){var e=Rs;if(e!==null)throw e}}function Jo(e,n,a,o){rd=!1;var c=e.updateQueue;ar=!1;var f=c.firstBaseUpdate,y=c.lastBaseUpdate,R=c.shared.pending;if(R!==null){c.shared.pending=null;var B=R,ee=B.next;B.next=null,y===null?f=ee:y.next=ee,y=B;var fe=e.alternate;fe!==null&&(fe=fe.updateQueue,R=fe.lastBaseUpdate,R!==y&&(R===null?fe.firstBaseUpdate=ee:R.next=ee,fe.lastBaseUpdate=B))}if(f!==null){var be=c.baseState;y=0,fe=ee=B=null,R=f;do{var Z=R.lane&-536870913,le=Z!==R.lane;if(le?(wt&Z)===Z:(o&Z)===Z){Z!==0&&Z===kr&&(rd=!0),fe!==null&&(fe=fe.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var Pe=e,Je=R;Z=n;var pt=a;switch(Je.tag){case 1:if(Pe=Je.payload,typeof Pe=="function"){be=Pe.call(pt,be,Z);break e}be=Pe;break e;case 3:Pe.flags=Pe.flags&-65537|128;case 0:if(Pe=Je.payload,Z=typeof Pe=="function"?Pe.call(pt,be,Z):Pe,Z==null)break e;be=O({},be,Z);break e;case 2:ar=!0}}Z=R.callback,Z!==null&&(e.flags|=64,le&&(e.flags|=8192),le=c.callbacks,le===null?c.callbacks=[Z]:le.push(Z))}else le={lane:Z,tag:R.tag,payload:R.payload,callback:R.callback,next:null},fe===null?(ee=fe=le,B=be):fe=fe.next=le,y|=Z;if(R=R.next,R===null){if(R=c.shared.pending,R===null)break;le=R,R=le.next,le.next=null,c.lastBaseUpdate=le,c.shared.pending=null}}while(!0);fe===null&&(B=be),c.baseState=B,c.firstBaseUpdate=ee,c.lastBaseUpdate=fe,f===null&&(c.shared.lanes=0),hr|=y,e.lanes=y,e.memoizedState=be}}function ig(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function ag(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)ig(a[e],n)}var or=St(null),bc=St(0);function rg(e,n){e=Da,at(bc,e),at(or,n),Da=e|n.baseLanes}function sd(){at(bc,Da),at(or,or.current)}function od(){Da=bc.current,nt(or),nt(bc)}var Dn=St(null),Bn=null;function lr(e){var n=e.alternate;at(Un,Un.current&1),at(Dn,e),Bn===null&&(n===null||or.current!==null||n.memoizedState!==null)&&(Bn=e)}function ld(e){at(Un,Un.current),at(Dn,e),Bn===null&&(Bn=e)}function sg(e){e.tag===22?(at(Un,Un.current),at(Dn,e),Bn===null&&(Bn=e)):cr()}function cr(){at(Un,Un.current),at(Dn,Dn.current)}function si(e){nt(Dn),Bn===e&&(Bn=null),nt(Un)}var Un=St(0);function $o(e,n){at(Dn,Dn.current),at(Un,n)}function cd(e){nt(Un),nt(Dn),Bn===e&&(Bn=null)}function Ec(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Dh(a)||Uh(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var wa=0,ht=null,Qt=null,xn=null,Mc=!1,Ds=!1,Yr=!1,Tc=0,el=0,Us=null,Vb=0;function un(){throw Error(r(321))}function ud(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ri(e[a],n[a]))return!1;return!0}function fd(e,n,a,o,c,f){return wa=f,ht=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,ye.H=e===null||e.memoizedState===null?kg:jg,Yr=!1,f=a(o,c),Yr=!1,Ds&&(f=lg(n,a,o,c)),og(e),f}function og(e){ye.H=Uc;var n=Qt!==null&&Qt.next!==null;if(wa=0,xn=Qt=ht=null,Mc=!1,el=0,Us=null,n)throw Error(r(300));e===null||vn||(e=e.dependencies,e!==null&&mc(e)&&(vn=!0))}function lg(e,n,a,o){ht=e;var c=0;do{if(Ds&&(Us=null),el=0,Ds=!1,25<=c)throw Error(r(301));if(c+=1,xn=Qt=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}ye.H=Kb,f=n(a,o)}while(Ds);return f}function kb(){var e=ye.H,n=e.useState()[0];return n=typeof n.then=="function"?tl(n):n,e=e.useState()[0],(Qt!==null?Qt.memoizedState:null)!==e&&(ht.flags|=1024),n}function dd(){var e=Tc!==0;return Tc=0,e}function hd(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function pd(e){if(Mc){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Mc=!1}wa=0,xn=Qt=ht=null,Ds=!1,el=Tc=0,Us=null}function jn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xn===null?ht.memoizedState=xn=e:xn=xn.next=e,xn}function hn(){if(Qt===null){var e=ht.alternate;e=e!==null?e.memoizedState:null}else e=Qt.next;var n=xn===null?ht.memoizedState:xn.next;if(n!==null)xn=n,Qt=e;else{if(e===null)throw ht.alternate===null?Error(r(467)):Error(r(310));Qt=e,e={memoizedState:Qt.memoizedState,baseState:Qt.baseState,baseQueue:Qt.baseQueue,queue:Qt.queue,next:null},xn===null?ht.memoizedState=xn=e:xn=xn.next=e}return xn}function Ac(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function tl(e){var n=el;return el+=1,Us===null&&(Us=[]),e=J0(Us,e,n),n=ht,(xn===null?n.memoizedState:xn.next)===null&&(n=n.alternate,ye.H=n===null||n.memoizedState===null?kg:jg),e}function wc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return tl(e);if(e.$$typeof===ve)return;if(e.$$typeof===k)return Nn(e)}throw Error(r(438,String(e)))}function md(e){var n=null,a=ht.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ht.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ac(),ht.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=qe;return n.index++,a}function Ra(e,n){return typeof n=="function"?n(e):n}function Rc(e){var n=hn();return gd(n,Qt,e)}function gd(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=e.baseQueue,f=o.pending;if(f!==null){if(c!==null){var y=c.next;c.next=f.next,f.next=y}n.baseQueue=c=f,o.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var R=y=null,B=null,ee=n,fe=!1;do{var be=ee.lane&-536870913;if(be!==ee.lane?(wt&be)===be:(wa&be)===be){var Z=ee.revertLane;if(Z===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),be===kr&&(fe=!0);else if((wa&Z)===Z){ee=ee.next,Z===kr&&(fe=!0);continue}else be={lane:0,revertLane:ee.revertLane,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},B===null?(R=B=be,y=f):B=B.next=be,ht.lanes|=Z,hr|=Z;be=ee.action,Yr&&a(f,be),f=ee.hasEagerState?ee.eagerState:a(f,be)}else Z={lane:be,revertLane:ee.revertLane,gesture:ee.gesture,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},B===null?(R=B=Z,y=f):B=B.next=Z,ht.lanes|=be,hr|=be;ee=ee.next}while(ee!==null&&ee!==n);if(B===null?y=f:B.next=R,!ri(f,e.memoizedState)&&(vn=!0,fe&&(a=Rs,a!==null)))throw a;e.memoizedState=f,e.baseState=y,e.baseQueue=B,o.lastRenderedState=f}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function xd(e){var n=hn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var y=c=c.next;do f=e(f,y.action),y=y.next;while(y!==c);ri(f,n.memoizedState)||(vn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function cg(e,n,a){var o=ht,c=hn(),f=yt;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var y=!ri((Qt||c).memoizedState,a);if(y&&(c.memoizedState=a,vn=!0),c=c.queue,yd(dg.bind(null,o,c,e),[e]),e=c.getSnapshot!==n||y||xn!==null&&(xn.memoizedState.tag&1)!==0,Ls(e?9:8,{destroy:void 0},fg.bind(null,o,c,a,n),null),e){if(o.flags|=2048,Jt===null)throw Error(r(349));f||(wa&127)!==0||ug(o,n,a)}return a}function ug(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ht.updateQueue,n===null?(n=Ac(),ht.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function fg(e,n,a,o){n.value=a,n.getSnapshot=o,hg(n)&&pg(e)}function dg(e,n,a){return a(function(){hg(n)&&pg(e)})}function hg(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ri(e,a)}catch{return!0}}function pg(e){var n=Br(e,2);n!==null&&Jn(n,e,2)}function vd(e){var n=jn();if(typeof e=="function"){var a=e;if(e=a(),Yr){Ct(!0);try{a()}finally{Ct(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:e},n}function mg(e,n,a,o){return e.baseState=a,gd(e,Qt,typeof o=="function"?o:Ra)}function jb(e,n,a,o,c){if(Dc(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};ye.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,gg(n,f)):(f.next=a.next,n.pending=a.next=f)}}function gg(e,n){var a=n.action,o=n.payload,c=e.state;if(n.isTransition){var f=ye.T,y={};y.types=f!==null?f.types:null,ye.T=y;try{var R=a(c,o),B=ye.S;B!==null&&B(y,R),xg(e,n,R)}catch(ee){_d(e,n,ee)}finally{f!==null&&y.types!==null&&(f.types=y.types),ye.T=f}}else try{f=a(c,o),xg(e,n,f)}catch(ee){_d(e,n,ee)}}function xg(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){vg(e,n,o)},function(o){return _d(e,n,o)}):vg(e,n,a)}function vg(e,n,a){n.status="fulfilled",n.value=a,_g(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,gg(e,a)))}function _d(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,_g(n),n=n.next;while(n!==o)}e.action=null}function _g(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function yg(e,n){return n}function Sg(e,n){if(yt){var a=Jt.formState;if(a!==null){e:{var o=ht;if(yt){if(en){t:{for(var c=en,f=Si;c.nodeType!==8;){if(!f){c=null;break t}if(c=Ei(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){en=Ei(c.nextSibling),o=c.data==="F!";break e}}tr(o)}o=!1}o&&(n=a[0])}}return a=jn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yg,lastRenderedState:n},a.queue=o,a=Hg.bind(null,ht,o),o.dispatch=a,o=vd(!1),f=Td.bind(null,ht,!1,o.queue),o=jn(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,a=jb.bind(null,ht,c,f,a),c.dispatch=a,o.memoizedState=e,[n,a,!1]}function bg(e){var n=hn();return Eg(n,Qt,e)}function Eg(e,n,a){if(n=gd(e,n,yg)[0],e=Rc(Ra)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=tl(n)}catch(y){throw y===Cs?vc:y}else o=n;n=hn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ht.flags|=2048,Ls(9,{destroy:void 0},Xb.bind(null,c,a),null)),[o,f,e]}function Xb(e,n){e.action=n}function Mg(e){var n=hn(),a=Qt;if(a!==null)return Eg(n,a,e);hn(),n=n.memoizedState,a=hn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Ls(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ht.updateQueue,n===null&&(n=Ac(),ht.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Tg(){return hn().memoizedState}function Cc(e,n,a,o){var c=jn();ht.flags|=e,c.memoizedState=Ls(1|n,{destroy:void 0},a,o===void 0?null:o)}function Nc(e,n,a,o){var c=hn();o=o===void 0?null:o;var f=c.memoizedState.inst;Qt!==null&&o!==null&&ud(o,Qt.memoizedState.deps)?c.memoizedState=Ls(n,f,a,o):(ht.flags|=e,c.memoizedState=Ls(1|n,f,a,o))}function Ag(e,n){Cc(8390656,8,e,n)}function yd(e,n){Nc(2048,8,e,n)}function Wb(e){ht.flags|=4;var n=ht.updateQueue;if(n===null)n=Ac(),ht.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function wg(e){var n=hn().memoizedState;return Wb({ref:n,nextImpl:e}),function(){if((zt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Rg(e,n){return Nc(4,2,e,n)}function Cg(e,n){return Nc(4,4,e,n)}function Ng(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Dg(e,n,a){a=a!=null?a.concat([e]):null,Nc(4,4,Ng.bind(null,n,e),a)}function Sd(){}function Ug(e,n){var a=hn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&ud(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Lg(e,n){var a=hn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&ud(n,o[1]))return o[0];if(o=e(),Yr){Ct(!0);try{e()}finally{Ct(!1)}}return a.memoizedState=[o,n],o}function bd(e,n,a){return a===void 0||(wa&1073741824)!==0&&(wt&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=kx(),ht.lanes|=e,hr|=e,a)}function Fg(e,n,a,o){return ri(a,n)?a:or.current!==null?(e=bd(e,a,o),ri(e,n)||(vn=!0),e):(wa&106)===0||(wa&1073741824)!==0&&(wt&261930)===0?(vn=!0,e.memoizedState=a):(e=kx(),ht.lanes|=e,hr|=e,n)}function Pg(e,n,a,o,c){var f=Ce.p;Ce.p=f!==0&&8>f?f:8;var y=ye.T,R={};R.types=y!==null?y.types:null,ye.T=R,Td(e,!1,n,a);try{var B=c(),ee=ye.S;if(ee!==null&&ee(R,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var fe=Gb(B,o);nl(e,n,fe,ui(e))}else nl(e,n,o,ui(e))}catch(be){nl(e,n,{then:function(){},status:"rejected",reason:be},ui())}finally{Ce.p=f,y!==null&&R.types!==null&&(y.types=R.types),ye.T=y}}function qb(){}function Ed(e,n,a,o){if(e.tag!==5)throw Error(r(476));var c=Og(e).queue;Pg(e,c,n,kt,a===null?qb:function(){return Bg(e),a(o)})}function Og(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:kt,baseState:kt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:kt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Bg(e){var n=Og(e);n.next===null&&(n=e.alternate.memoizedState),nl(e,n.next.queue,{},ui())}function Md(){return Nn(Js)}function Ig(){return hn().memoizedState}function zg(){return hn().memoizedState}function Yb(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ui();e=rr(a);var o=sr(n,e,a);o!==null&&(Jn(o,n,a),Ko(o,n,a)),n={cache:Jf()},e.payload=n;return}n=n.return}}function Zb(e,n,a){var o=ui();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Dc(e)?Gg(n,a):(a=kf(e,n,a,o),a!==null&&(Jn(a,e,o),Vg(a,n,o)))}function Hg(e,n,a){var o=ui();nl(e,n,a,o)}function nl(e,n,a,o){var c={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Dc(e))Gg(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,R=f(y,a);if(c.hasEagerState=!0,c.eagerState=R,ri(R,y))return lc(e,n,c,0),Jt===null&&oc(),!1}catch{}finally{}if(a=kf(e,n,c,o),a!==null)return Jn(a,e,o),Vg(a,n,o),!0}return!1}function Td(e,n,a,o){if(o={lane:2,revertLane:mh(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Dc(e)){if(n)throw Error(r(479))}else n=kf(e,a,o,2),n!==null&&Jn(n,e,2)}function Dc(e){var n=e.alternate;return e===ht||n!==null&&n===ht}function Gg(e,n){Ds=Mc=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Vg(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Do(e,a)}}var Uc={readContext:Nn,use:wc,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useLayoutEffect:un,useInsertionEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useSyncExternalStore:un,useId:un,useHostTransitionStatus:un,useFormState:un,useActionState:un,useOptimistic:un,useMemoCache:un,useCacheRefresh:un,useEffectEvent:un},kg={readContext:Nn,use:wc,useCallback:function(e,n){return jn().memoizedState=[e,n===void 0?null:n],e},useContext:Nn,useEffect:Ag,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Cc(4194308,4,Ng.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Cc(4194308,4,e,n)},useInsertionEffect:function(e,n){Cc(4,2,e,n)},useMemo:function(e,n){var a=jn();n=n===void 0?null:n;var o=e();if(Yr){Ct(!0);try{e()}finally{Ct(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=jn();if(a!==void 0){var c=a(n);if(Yr){Ct(!0);try{a(n)}finally{Ct(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=Zb.bind(null,ht,e),[o.memoizedState,e]},useRef:function(e){var n=jn();return e={current:e},n.memoizedState=e},useState:function(e){e=vd(e);var n=e.queue,a=Hg.bind(null,ht,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Sd,useDeferredValue:function(e,n){var a=jn();return bd(a,e,n)},useTransition:function(){var e=vd(!1);return e=Pg.bind(null,ht,e.queue,!0,!1),jn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ht,c=jn();if(yt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Jt===null)throw Error(r(349));(wt&127)!==0||ug(o,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Ag(dg.bind(null,o,f,e),[e]),o.flags|=2048,Ls(9,{destroy:void 0},fg.bind(null,o,f,a,n),null),a},useId:function(){var e=jn(),n=Jt.identifierPrefix;if(yt){var a=Qi,o=Ki;a=(o&~(1<<32-ut(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Tc++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Vb++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Md,useFormState:Sg,useActionState:Sg,useOptimistic:function(e){var n=jn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Td.bind(null,ht,!0,a),a.dispatch=n,[e,n]},useMemoCache:md,useCacheRefresh:function(){return jn().memoizedState=Yb.bind(null,ht)},useEffectEvent:function(e){var n=jn(),a={impl:e};return n.memoizedState=a,function(){if((zt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},jg={readContext:Nn,use:wc,useCallback:Ug,useContext:Nn,useEffect:yd,useImperativeHandle:Dg,useInsertionEffect:Rg,useLayoutEffect:Cg,useMemo:Lg,useReducer:Rc,useRef:Tg,useState:function(){return Rc(Ra)},useDebugValue:Sd,useDeferredValue:function(e,n){var a=hn();return Fg(a,Qt.memoizedState,e,n)},useTransition:function(){var e=Rc(Ra)[0],n=hn().memoizedState;return[typeof e=="boolean"?e:tl(e),n]},useSyncExternalStore:cg,useId:Ig,useHostTransitionStatus:Md,useFormState:bg,useActionState:bg,useOptimistic:function(e,n){var a=hn();return mg(a,Qt,e,n)},useMemoCache:md,useCacheRefresh:zg,useEffectEvent:wg},Kb={readContext:Nn,use:wc,useCallback:Ug,useContext:Nn,useEffect:yd,useImperativeHandle:Dg,useInsertionEffect:Rg,useLayoutEffect:Cg,useMemo:Lg,useReducer:xd,useRef:Tg,useState:function(){return xd(Ra)},useDebugValue:Sd,useDeferredValue:function(e,n){var a=hn();return Qt===null?bd(a,e,n):Fg(a,Qt.memoizedState,e,n)},useTransition:function(){var e=xd(Ra)[0],n=hn().memoizedState;return[typeof e=="boolean"?e:tl(e),n]},useSyncExternalStore:cg,useId:Ig,useHostTransitionStatus:Md,useFormState:Mg,useActionState:Mg,useOptimistic:function(e,n){var a=hn();return Qt!==null?mg(a,Qt,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:md,useCacheRefresh:zg,useEffectEvent:wg};function Ad(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:O({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var wd={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ui(),c=rr(o);c.payload=n,a!=null&&(c.callback=a),n=sr(e,c,o),n!==null&&(Jn(n,e,o),Ko(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ui(),c=rr(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=sr(e,c,o),n!==null&&(Jn(n,e,o),Ko(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ui(),o=rr(a);o.tag=2,n!=null&&(o.callback=n),n=sr(e,o,a),n!==null&&(Jn(n,e,a),Ko(n,e,a))}};function Xg(e,n,a,o,c,f,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,y):n.prototype&&n.prototype.isPureReactComponent?!Vo(a,o)||!Vo(c,f):!0}function Wg(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&wd.enqueueReplaceState(n,n.state,null)}function Zr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=O({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function qg(e){sc(e)}function Yg(e){console.error(e)}function Zg(e){sc(e)}function Lc(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Kg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Rd(e,n,a){return a=rr(a),a.tag=3,a.payload={element:null},a.callback=function(){Lc(e,n)},a}function Qg(e){return e=rr(e),e.tag=3,e}function Jg(e,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;e.payload=function(){return c(f)},e.callback=function(){Kg(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){Kg(n,a,o),typeof c!="function"&&(pr===null?pr=new Set([this]):pr.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function Qb(e,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Gr(n,a,c,!0),a=Dn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Bn===null?eu():a.alternate===null&&fn===0&&(fn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===_c?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),dh(e,o,c)),!1;case 22:return a.flags|=65536,o===_c?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),dh(e,o,c)),!1}throw Error(r(435,a.tag))}return dh(e,o,c),eu(),!1}if(yt)return n=Dn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==Yf&&(e=Error(r(422),{cause:o}),Xo(vi(e,a)))):(o!==Yf&&(n=Error(r(423),{cause:o}),Xo(vi(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=vi(o,a),c=Rd(e.stateNode,o,c),ad(e,c),fn!==4&&(fn=2)),!1;var f=Error(r(520),{cause:o});if(f=vi(f,a),ul===null?ul=[f]:ul.push(f),fn!==4&&(fn=2),n===null)return!0;o=vi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Rd(a.stateNode,o,e),ad(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(pr===null||!pr.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Qg(c),Jg(c,e,a,o),ad(a,c),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var Cd=Error(r(461)),vn=!1;function bn(e,n,a,o){n.child=e===null?ng(n,null,a,o):qr(n,e.child,a,o)}function $g(e,n,a,o,c){a=a.render;var f=n.ref;if("ref"in o){var y={};for(var R in o)R!=="ref"&&(y[R]=o[R])}else y=o;return Vr(n),o=fd(e,n,a,y,f,c),R=dd(),e!==null&&!vn?(hd(e,n,c),Ca(e,n,c)):(yt&&R&&dc(n),n.flags|=1,bn(e,n,o,c),n.child)}function ex(e,n,a,o,c){if(e===null){var f=a.type;return typeof f=="function"&&!jf(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,tx(e,n,f,o,c)):(e=uc(a.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Bd(e,c)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:Vo,a(y,o)&&e.ref===n.ref)return Ca(e,n,c)}return n.flags|=1,e=Ea(f,o),e.ref=n.ref,e.return=n,n.child=e}function tx(e,n,a,o,c){if(e!==null){var f=e.memoizedProps;if(Vo(f,o)&&e.ref===n.ref)if(vn=!1,n.pendingProps=o=f,Bd(e,c))(e.flags&131072)!==0&&(vn=!0);else return n.lanes=e.lanes,Ca(e,n,c)}return Nd(e,n,a,o,c)}function nx(e,n,a,o){var c=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;o=c&~f}else o=0,n.child=null;return ix(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&xc(n,f!==null?f.cachePool:null),f!==null?rg(n,f):sd(),sg(n);else return o=n.lanes=536870912,ix(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(xc(n,f.cachePool),rg(n,f),cr(),n.memoizedState=null):(e!==null&&xc(n,null),sd(),cr());return bn(e,n,c,a),n.child}function il(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function ix(e,n,a,o,c){var f=ed();return f=f===null?null:{parent:gn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&xc(n,null),sd(),sg(n),e!==null&&Gr(e,n,o,!0),n.childLanes=c,null}function Fc(e,n){return n=Pc({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function ax(e,n,a){return qr(n,e.child,null,a),e=Fc(n,n.pendingProps),e.flags|=2,si(n),n.memoizedState=null,e}function Jb(e,n,a){var o=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(yt){if(o.mode==="hidden")return e=Fc(n,o),n.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},il(null,e);if(ld(n),(e=en)?(e=Nv(e,Si),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:$a!==null?{id:Ki,overflow:Qi}:null,retryLane:536870912,hydrationErrors:null},a=G0(e),a.return=n,n.child=a,Tn=n,en=null)):e=null,e===null)throw tr(n);return n.lanes=536870912,null}return Fc(n,o)}var f=e.memoizedState;if(f!==null){var y=f.dehydrated;if(ld(n),c)if(n.flags&256)n.flags&=-257,n=ax(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(vn||Gr(e,n,a,!1),c=(a&e.childLanes)!==0,vn||c){if(or.current===null){if(o=Jt,o!==null&&(y=Uo(o,a),y!==0&&y!==f.retryLane))throw f.retryLane=y,Br(e,y),Jn(o,e,y),Cd;eu()}n=ax(e,n,a)}else e=f.treeContext,en=Ei(y.nextSibling),Tn=n,yt=!0,er=null,Si=!1,e!==null&&j0(n,e),n=Fc(n,o),n.flags|=134221824;return n}return e=Ea(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Fs(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Nd(e,n,a,o,c){return Vr(n),a=fd(e,n,a,o,void 0,c),o=dd(),e!==null&&!vn?(hd(e,n,c),Ca(e,n,c)):(yt&&o&&dc(n),n.flags|=1,bn(e,n,a,c),n.child)}function rx(e,n,a,o,c,f){return Vr(n),n.updateQueue=null,a=lg(n,o,a,c),og(e),o=dd(),e!==null&&!vn?(hd(e,n,f),Ca(e,n,f)):(yt&&o&&dc(n),n.flags|=1,bn(e,n,a,f),n.child)}function sx(e,n,a,o,c){if(Vr(n),n.stateNode===null){var f=Ms,y=a.contextType;typeof y=="object"&&y!==null&&(f=Nn(y)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=wd,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},nd(n),y=a.contextType,f.context=typeof y=="object"&&y!==null?Nn(y):Ms,f.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(Ad(n,a,y,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&wd.enqueueReplaceState(f,f.state,null),Jo(n,o,f,c),Qo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var R=n.memoizedProps,B=Zr(a,R);f.props=B;var ee=f.context,fe=a.contextType;y=Ms,typeof fe=="object"&&fe!==null&&(y=Nn(fe));var be=a.getDerivedStateFromProps;fe=typeof be=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,fe||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||ee!==y)&&Wg(n,f,o,y),ar=!1;var Z=n.memoizedState;f.state=Z,Jo(n,o,f,c),Qo(),ee=n.memoizedState,R||Z!==ee||ar?(typeof be=="function"&&(Ad(n,a,be,o),ee=n.memoizedState),(B=ar||Xg(n,a,B,o,Z,ee,y))?(fe||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ee),f.props=o,f.state=ee,f.context=y,o=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,id(e,n),y=n.memoizedProps,fe=Zr(a,y),f.props=fe,be=n.pendingProps,Z=f.context,ee=a.contextType,B=Ms,typeof ee=="object"&&ee!==null&&(B=Nn(ee)),R=a.getDerivedStateFromProps,(ee=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==be||Z!==B)&&Wg(n,f,o,B),ar=!1,Z=n.memoizedState,f.state=Z,Jo(n,o,f,c),Qo();var le=n.memoizedState;y!==be||Z!==le||ar||e!==null&&e.dependencies!==null&&mc(e.dependencies)?(typeof R=="function"&&(Ad(n,a,R,o),le=n.memoizedState),(fe=ar||Xg(n,a,fe,o,Z,le,B)||e!==null&&e.dependencies!==null&&mc(e.dependencies))?(ee||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,le,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,le,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&Z===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&Z===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=le),f.props=o,f.state=le,f.context=B,o=fe):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&Z===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&Z===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Fs(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=qr(n,e.child,null,c),n.child=qr(n,null,a,c)):bn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Ca(e,n,c),e}function ox(e,n,a,o){return zr(),n.flags|=256,bn(e,n,a,o),n.child}var Dd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ud(e){return{baseLanes:e,cachePool:K0()}}function Ld(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ci),e}function lx(e,n,a){var o=n.pendingProps,c=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=e!==null&&e.memoizedState===null?!1:(Un.current&2)!==0),y&&(c=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(yt){if(c?lr(n):cr(),(e=en)?(e=Nv(e,Si),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:$a!==null?{id:Ki,overflow:Qi}:null,retryLane:536870912,hydrationErrors:null},a=G0(e),a.return=n,n.child=a,Tn=n,en=null)):e=null,e===null)throw tr(n);return Uh(e)?n.lanes=32:n.lanes=536870912,null}return f=o.children,o=o.fallback,c?(cr(),c=n.mode,f=Pc({mode:"hidden",children:f},c),o=Ir(o,c,a,null),f.return=n,o.return=n,f.sibling=o,n.child=f,o=n.child,o.memoizedState=Ud(a),o.childLanes=Ld(e,y,a),n.memoizedState=Dd,il(null,o)):(lr(n),Fd(n,f))}var R=e.memoizedState;if(R!==null){var B=R.dehydrated;if(B!==null)return $b(e,n,f,y,o,B,R,a)}return c?(cr(),c=o.fallback,f=n.mode,R=e.child,B=R.sibling,o=Ea(R,{mode:"hidden",children:o.children}),o.subtreeFlags=R.subtreeFlags&1206910976,B!==null?c=Ea(B,c):(c=Ir(c,f,a,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,il(null,o),o=n.child,c=e.child.memoizedState,c===null?c=Ud(a):(f=c.cachePool,f!==null?(R=gn._currentValue,f=f.parent!==R?{parent:R,pool:R}:f):f=K0(),c={baseLanes:c.baseLanes|a,cachePool:f}),o.memoizedState=c,o.childLanes=Ld(e,y,a),n.memoizedState=Dd,il(e.child,o)):(lr(n),a=e.child,e=a.sibling,a=Ea(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=a,n.memoizedState=null,a)}function Fd(e,n){return n=Pc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Pc(e,n){return e=Yn(22,e,null,n),e.lanes=0,e}function Oc(e,n,a){return qr(n,e.child,null,a),e=Fd(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function $b(e,n,a,o,c,f,y,R){if(a)return n.flags&256?(lr(n),n.flags&=-257,Oc(e,n,R)):n.memoizedState!==null?(cr(),n.child=e.child,n.flags|=128,null):(cr(),f=c.fallback,y=n.mode,c=Pc({mode:"visible",children:c.children},y),f=Ir(f,y,R,null),f.flags|=2,c.return=n,f.return=n,c.sibling=f,n.child=c,qr(n,e.child,null,R),c=n.child,c.memoizedState=Ud(R),c.childLanes=Ld(e,o,R),n.memoizedState=Dd,il(null,c));if(lr(n),Uh(f)){if(o=f.nextSibling&&f.nextSibling.dataset,o)var B=o.dgst;return o=B,o!==""&&(c=Error(r(419)),c.stack="",c.digest=o,Xo({value:c,source:null,stack:null})),Oc(e,n,R)}if(vn||Gr(e,n,R,!1),o=(R&e.childLanes)!==0,vn||o){if(or.current!==null)return Oc(e,n,R);if(o=Jt,o!==null&&(c=Uo(o,R),c!==0&&c!==y.retryLane))throw y.retryLane=c,Br(e,c),Jn(o,e,c),Cd;return Dh(f)||eu(),Oc(e,n,R)}return Dh(f)?(n.flags|=192,n.child=e.child,null):(e=y.treeContext,en=Ei(f.nextSibling),Tn=n,yt=!0,er=null,Si=!1,e!==null&&j0(n,e),n=Fd(n,c.children),n.flags|=134221824,n)}function cx(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),pc(e.return,n,a)}function ux(e){for(var n=null;e!==null;){var a=e.alternate;a!==null&&Ec(a)===null&&(n=e),e=e.sibling}return n}function Bc(e,n,a,o,c,f){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c,treeForkCount:f}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=c,y.treeForkCount=f)}function Pd(e){var n=e.child;for(e.child=null;n!==null;){var a=n.sibling;n.sibling=e.child,e.child=n,n=a}}function Od(e,n,a){var o=n.pendingProps,c=o.revealOrder,f=o.tail;o=o.children;var y=Un.current;if(n.flags&128)return $o(n,y),null;var R=(y&2)!==0;if(R?(y=y&1|2,n.flags|=128):y&=1,$o(n,y),c==="backwards"&&e!==null?(Pd(e),bn(e,n,o,a),Pd(e)):bn(e,n,o,a),o=yt?jo:0,!R&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cx(e,a,n);else if(e.tag===19)cx(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"backwards":a=ux(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null,Pd(n)),Bc(n,!0,c,null,f,o);break;case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Ec(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Bc(n,!0,a,null,f,o);break;case"together":Bc(n,!1,null,null,void 0,o);break;case"independent":n.memoizedState=null;break;default:a=ux(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Bc(n,!1,c,a,f,o)}return n.child}function fx(e,n,a){var o=n.pendingProps;return nr(n,n.type,o.value),bn(e,n,o.children,a),n.child}function Ca(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),hr|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Gr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Ea(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ea(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Bd(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&mc(e)))}function eE(e,n,a){switch(n.tag){case 3:q(n,n.stateNode.containerInfo),nr(n,gn,e.memoizedState.cache),zr();break;case 27:case 5:Pt(n);break;case 4:q(n,n.stateNode.containerInfo);break;case 10:nr(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,ld(n),null;break;case 13:var o=n.memoizedState;if(o!==null){if(o.dehydrated!==null)return lr(n),n.flags|=128,null;o=Gr(e,n,a,!1);var c=n.child.childLanes;return o||(a&c)!==0?lx(e,n,a):(lr(n),e=Ca(e,n,a),e!==null?e.sibling:null)}lr(n);break;case 19:if(n.flags&128)return Od(e,n,a);if(c=(e.flags&128)!==0,o=(a&n.childLanes)!==0,o||(Gr(e,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return Od(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),$o(n,Un.current),o)break;return null;case 22:return n.lanes=0,nx(e,n,a,n.pendingProps);case 24:nr(n,gn,e.memoizedState.cache)}return Ca(e,n,a)}function dx(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)vn=!0;else{if(!Bd(e,a)&&(n.flags&128)===0)return vn=!1,eE(e,n,a);vn=(e.flags&131072)!==0}else vn=!1,yt&&(n.flags&1048576)!==0&&k0(n,jo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(e=Xr(n.elementType),n.type=e,typeof e=="function")jf(e)?(o=Zr(e,o),n.tag=1,n=sx(null,n,e,o,a)):(n.tag=0,n=Nd(null,n,e,o,a));else{if(e!=null){var c=e.$$typeof;if(c===W){n.tag=11,n=$g(null,n,e,o,a);break e}else if(c===ae){n.tag=14,n=ex(null,n,e,o,a);break e}else if(c===k){n.tag=10,n.type=e,n=fx(null,n,a);break e}}throw n=Ae(e)||e,Error(r(306,n,""))}}return n;case 0:return Nd(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=Zr(o,n.pendingProps),sx(e,n,o,c,a);case 3:e:{if(q(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;c=f.element,id(e,n),Jo(n,o,null,a);var y=n.memoizedState;if(o=y.cache,nr(n,gn,o),o!==f.cache&&Qf(n,[gn],a,!0),Qo(),o=y.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=ox(e,n,o,a);break e}else if(o!==c){c=vi(Error(r(424)),n),Xo(c),n=ox(e,n,o,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(en=Ei(e.firstChild),Tn=n,yt=!0,er=null,Si=!0,a=ng(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(zr(),o===c){n=Ca(e,n,a);break e}bn(e,n,o,a)}n=n.child}return n;case 26:return Fs(e,n),e===null?(a=Bv(n.type,null,n.pendingProps,null))?n.memoizedState=a:yt||(n.stateNode=gv(n.type,n.pendingProps,Ot.current,n)):n.memoizedState=Bv(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Pt(n),e===null&&yt&&(o=n.stateNode=Lv(n.type,n.pendingProps,Ot.current),Tn=n,Si=!0,c=en,xr(n.type)?(Lh=c,en=Ei(o.firstChild)):en=c),bn(e,n,n.pendingProps.children,a),Fs(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&yt&&((c=o=en)&&(o=YE(o,n.type,n.pendingProps,Si),o!==null?(n.stateNode=o,Tn=n,en=Ei(o.firstChild),Si=!1,c=!0):c=!1),c||tr(n)),Pt(n),c=n.type,f=n.pendingProps,y=e!==null?e.memoizedProps:null,o=f.children,Mh(c,f)?o=null:y!==null&&Mh(c,y)&&(n.flags|=32),n.memoizedState!==null&&(c=fd(e,n,kb,null,null,a),Js._currentValue=c),Fs(e,n),bn(e,n,o,a),n.child;case 6:return e===null&&yt&&((e=a=en)&&(a=ZE(a,n.pendingProps,Si),a!==null?(n.stateNode=a,Tn=n,en=null,e=!0):e=!1),e||tr(n)),null;case 13:return lx(e,n,a);case 4:return q(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=qr(n,null,o,a):bn(e,n,o,a),n.child;case 11:return $g(e,n,n.type,n.pendingProps,a);case 7:return o=n.pendingProps,Fs(e,n),bn(e,n,o,a),n.child;case 8:return bn(e,n,n.pendingProps.children,a),n.child;case 12:return bn(e,n,n.pendingProps.children,a),n.child;case 10:return fx(e,n,a);case 9:return c=n.type._context,o=n.pendingProps.children,Vr(n),c=Nn(c),o=o(c),n.flags|=1,bn(e,n,o,a),n.child;case 14:return ex(e,n,n.type,n.pendingProps,a);case 15:return tx(e,n,n.type,n.pendingProps,a);case 19:return Od(e,n,a);case 31:return Jb(e,n,a);case 22:return nx(e,n,a,n.pendingProps);case 24:return Vr(n),o=Nn(gn),e===null?(c=ed(),c===null&&(c=Jt,f=Jf(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:o,cache:c},nd(n),nr(n,gn,c)):((e.lanes&a)!==0&&(id(e,n),Jo(n,null,null,a),Qo()),c=e.memoizedState,f=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),nr(n,gn,o)):(o=f.cache,nr(n,gn,o),o!==c.cache&&Qf(n,[gn],a,!0))),bn(e,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),o=n.pendingProps,o.name!=null&&o.name!=="auto"?n.flags|=e===null?18882560:18874368:yt&&dc(n),e!==null&&e.memoizedProps.name!==o.name?n.flags|=4194816:Fs(e,n),bn(e,n,o.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Na(e){e.flags|=4}function Id(e,n,a,o,c){var f;if((f=(e.mode&32)!==0)&&(f=a===null?Gv(n,o):Gv(n,o)&&(o.src!==a.src||o.srcSet!==a.srcSet)),f){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(qx())e.flags|=8192;else throw Wr=_c,td}else e.flags&=-16777217}function hx(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Vv(n))if(qx())e.flags|=8192;else throw Wr=_c,td}function Ic(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?No():536870912,e.lanes|=n,zs|=n)}function al(e,n){if(!yt)switch(e.tailMode){case"visible":break;case"collapsed":for(var a=e.tail,o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null;break;default:for(n=e.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null}}function tn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&1206910976,o|=c.flags&1206910976,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function tE(e,n,a){var o=n.pendingProps;switch(qf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(n),null;case 1:return tn(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Aa(gn),rn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ws(n)?Na(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Zf())),tn(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(Na(n),f!==null?(tn(n),hx(n,f)):(tn(n),Id(n,c,null,o,a))):f?f!==e.memoizedState?(Na(n),tn(n),hx(n,f)):(tn(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&Na(n),tn(n),Id(n,c,e,o,a)),null;case 27:if(F(n),a=Ot.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Na(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return tn(n),n.subtreeFlags&=-33554433,null}e=jt.current,ws(n)?X0(n):(e=Lv(c,o,a),n.stateNode=e,Na(n))}return tn(n),n.subtreeFlags&=-33554433,null;case 5:if(F(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Na(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return tn(n),n.subtreeFlags&=-33554433,null}if(f=jt.current,ws(n))X0(n);else{var y=ml(Ot.current);switch(f){case 1:f=y.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=y.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=y.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=y.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=y.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?y.createElement(c,{is:o.is}):y.createElement(c)}}f[w]=n,f[H]=o;e:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)f.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break e;for(;y.sibling===null;){if(y.return===null||y.return===n)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=f;e:switch(Fn(f,c,o),c){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Na(n)}}return tn(n),n.subtreeFlags&=-33554433,Id(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Na(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=Ot.current,ws(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,c=Tn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[w]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||dv(e.nodeValue,a)),e||tr(n,!0)}else e=ml(e).createTextNode(o),e[w]=n,n.stateNode=e}return tn(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=ws(n),a!==null){if(e===null){if(!o)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[w]=n}else zr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;tn(n),e=!1}else a=Zf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(si(n),n):(si(n),null);if((n.flags&128)!==0)throw Error(r(558))}return tn(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=ws(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[w]=n}else zr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;tn(n),c=!1}else c=Zf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(si(n),n):(si(n),null)}return si(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Ic(n,n.updateQueue),tn(n),null);case 4:return rn(),e===null&&_h(n.stateNode.containerInfo),n.flags|=67108864,tn(n),null;case 10:return Aa(n.type),tn(n),null;case 19:if(cd(n),o=n.memoizedState,o===null)return tn(n),null;if(c=(n.flags&128)!==0,f=o.rendering,f===null)if(c)al(o,!1);else{if(fn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Ec(e),f!==null){for(n.flags|=128,al(o,!1),e=f.updateQueue,n.updateQueue=e,Ic(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)H0(a,e),a=a.sibling;return $o(n,Un.current&1|2),yt&&Ma(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&Xe()>Kc&&(n.flags|=128,c=!0,al(o,!1),n.lanes=4194304)}else{if(!c)if(e=Ec(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Ic(n,e),al(o,!0),o.tail===null&&o.tailMode!=="collapsed"&&o.tailMode!=="visible"&&!f.alternate&&!yt)return tn(n),null}else 2*Xe()-o.renderingStartTime>Kc&&a!==536870912&&(n.flags|=128,c=!0,al(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}if(o.tail!==null){e=o.tail;e:{for(a=e;a!==null;){if(a.alternate!==null){a=!1;break e}a=a.sibling}a=!0}return o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Xe(),e.sibling=null,f=Un.current,f=c?f&1|2:f&1,o.tailMode==="visible"||o.tailMode==="collapsed"||!a||yt?$o(n,f):(a=f,at(Dn,n),at(Un,a),Bn===null&&(Bn=n)),yt&&Ma(n,o.treeForkCount),e}return tn(n),null;case 22:case 23:return si(n),od(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(tn(n),n.subtreeFlags&6&&(n.flags|=8192)):tn(n),a=n.updateQueue,a!==null&&Ic(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&nt(jr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Aa(gn),tn(n),null;case 25:return null;case 30:return n.flags|=33554432,tn(n),null}throw Error(r(156,n.tag))}function nE(e,n){switch(qf(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Aa(gn),rn(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return F(n),null;case 31:if(n.memoizedState!==null){if(si(n),n.alternate===null)throw Error(r(340));zr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(si(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));zr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return cd(n),e=n.flags,e&65536?(n.flags=e&-65537|128,e=n.memoizedState,e!==null&&(e.rendering=null,e.tail=null),n.flags|=4,n):null;case 4:return rn(),null;case 10:return Aa(n.type),null;case 22:case 23:return si(n),od(),e!==null&&nt(jr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Aa(gn),null;case 25:return null;default:return null}}function px(e,n){switch(qf(n),n.tag){case 3:Aa(gn),rn();break;case 26:case 27:case 5:F(n);break;case 4:rn();break;case 31:n.memoizedState!==null&&si(n);break;case 13:si(n);break;case 19:cd(n);break;case 10:Aa(n.type);break;case 22:case 23:si(n),od(),e!==null&&nt(jr);break;case 24:Aa(gn)}}function rl(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&e)===e){o=void 0;var f=a.create,y=a.inst;o=f(),y.destroy=o}a=a.next}while(a!==c)}}catch(R){Wt(n,n.return,R)}}function ur(e,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&e)===e){var y=o.inst,R=y.destroy;if(R!==void 0){y.destroy=void 0,c=n;var B=a,ee=R;try{ee()}catch(fe){Wt(c,B,fe)}}}o=o.next}while(o!==f)}}catch(fe){Wt(n,n.return,fe)}}function mx(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{ag(n,a)}catch(o){Wt(e,e.return,o)}}}function gx(e,n,a){a.props=Zr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Wt(e,n,o)}}function Ji(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:var c=e.stateNode,f=Sa(e.memoizedProps,c);(c.ref===null||c.ref.name!==f)&&(c.ref=Ev(f)),o=c.ref;break;case 7:if(e.stateNode===null){var y=new fi(e);x(e.child,!1,WE,y,void 0,void 0),e.stateNode=y}o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(R){Wt(e,n,R)}}function Ln(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Wt(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Wt(e,n,c)}else a.current=null}function zc(e,n){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&n!==null)for(var a=0;a<n.length;a++)Cv(e.stateNode,n[a])}function xx(e){for(var n=e.return;n!==null&&(Hd(n)&&Cv(e.stateNode,n.stateNode),!zd(n));)n=n.return}function sl(e){for(var n=e.return;n!==null&&(Hd(n)&&qE(e.stateNode,n.stateNode),!zd(n));)n=n.return}function zd(e){return e.tag===5||e.tag===3||e.tag===27}function Hd(e){return e&&e.tag===7&&e.stateNode!==null}function Gd(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Wt(e,e.return,c)}}function Vd(e,n,a){try{var o=e.stateNode;RE(o,e.type,a,n),o[H]=n}catch(c){Wt(e,e.return,c)}}function vx(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&xr(e.type)||e.tag===4}function kd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||vx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&xr(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function jd(e,n,a,o){var c=e.tag;if(c===5||c===6)c=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(c,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(c),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Zi)),zc(e,o),_t=!0;else if(c!==4&&(c===27&&(zc(e,o),o=null,xr(e.type)&&(a=e.stateNode,n=null)),e=e.child,e!==null))for(jd(e,n,a,o),e=e.sibling;e!==null;)jd(e,n,a,o),e=e.sibling}function Hc(e,n,a,o){var c=e.tag;if(c===5||c===6)c=e.stateNode,n?a.insertBefore(c,n):a.appendChild(c),zc(e,o),_t=!0;else if(c!==4&&(c===27&&(zc(e,o),o=null,xr(e.type)&&(a=e.stateNode)),e=e.child,e!==null))for(Hc(e,n,a,o),e=e.sibling;e!==null;)Hc(e,n,a,o),e=e.sibling}function _x(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Fn(n,o,a),n[w]=e,n[H]=a}catch(f){Wt(e,e.return,f)}}var Gc=!1,oi=null;function yx(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Gc=!0)}var $i=null;function Sx(){var e=$i;return $i=null,e}var Zn=0;function Ps(e,n,a,o,c){return Zn=0,bx(e.child,n,a,o,c)}function bx(e,n,a,o,c){for(var f=!1;e!==null;){if(e.tag===5){var y=e.stateNode;if(o!==null){var R=wh(y);o.push(R),R.view&&(f=!0)}else f||wh(y).view&&(f=!0);Gc=!0,Sv(y,Zn===0?n:n+"_"+Zn,a),Zn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&c||bx(e.child,n,a,o,c)&&(f=!0));e=e.sibling}return f}function ea(e,n){for(;e!==null;)e.tag===5?bv(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&n||ea(e.child,n)),e=e.sibling}function Vc(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Vc(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var n=e.memoizedProps;if(n.name==null||n.name==="auto")throw Error(r(544));var a=n.name;n=ba(n.default,n.share),n!=="none"&&(Ps(e,a,n,null,!1)||ea(e.child,!1))}e=e.sibling}}function Xd(e,n){if(e.tag===30){var a=e.stateNode,o=e.memoizedProps,c=Sa(o,a),f=ba(o.default,a.paired?o.share:o.enter);f!=="none"?Ps(e,c,f,null,!1)?(Vc(e),a.paired||n||ks(e,o.onEnter)):ea(e.child,!1):Vc(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Xd(e,n),e=e.sibling;else Vc(e)}function Wd(e){if(oi!==null&&oi.size!==0){var n=oi;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.memoizedProps,o=a.name;if(o!=null&&o!=="auto"){var c=n.get(o);if(c!==void 0){var f=ba(a.default,a.share);if(f!=="none"&&(Ps(e,o,f,null,!1)?(f=e.stateNode,c.paired=f,f.paired=c,ks(e,a.onShare)):ea(e.child,!1)),n.delete(o),n.size===0)break}}}Wd(e)}e=e.sibling}}}function qd(e){if(e.tag===30){var n=e.memoizedProps,a=Sa(n,e.stateNode),o=oi!==null?oi.get(a):void 0,c=ba(n.default,o!==void 0?n.share:n.exit);c!=="none"&&(Ps(e,a,c,null,!1)?o!==void 0?(c=e.stateNode,o.paired=c,c.paired=o,oi.delete(a),ks(e,n.onShare)):ks(e,n.onExit):ea(e.child,!1)),oi!==null&&Wd(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)qd(e),e=e.sibling;else oi!==null&&Wd(e)}function Ex(e){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,a=Sa(n,e.stateNode);n=ba(n.default,n.update),e.flags&=-5,n!=="none"&&Ps(e,a,n,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&Ex(e);e=e.sibling}}function Yd(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.stateNode;n.paired!==null&&(n.paired=null,ea(e.child,!1))}Yd(e)}e=e.sibling}}function kc(e){if(e.tag===30)e.stateNode.paired=null,ea(e.child,!1),Yd(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)kc(e),e=e.sibling;else Yd(e)}function Mx(e){for(e=e.child;e!==null;)e.tag===30?ea(e.child,!1):(e.subtreeFlags&33554432)!==0&&Mx(e),e=e.sibling}function Zd(e,n,a,o,c,f,y){for(var R=!1;n!==null;){if(n.tag===5){var B=n.stateNode;if(f!==null&&Zn<f.length){var ee=f[Zn],fe=wh(B);(ee.view||fe.view)&&(R=!0);var be;if(be=(e.flags&4)===0)if(fe.clip)be=!0;else{be=ee.rect;var Z=fe.rect;be=be.y!==Z.y||be.x!==Z.x||be.height!==Z.height||be.width!==Z.width}be&&(e.flags|=4),fe.abs?fe=!ee.abs:(ee=ee.rect,fe=fe.rect,fe=ee.height!==fe.height||ee.width!==fe.width),fe&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&Sv(B,Zn===0?a:a+"_"+Zn,c),R&&(e.flags&4)!==0||($i===null&&($i=[]),$i.push(B,Zn===0?o:o+"_"+Zn,n.memoizedProps)),Zn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&y?e.flags|=n.flags&32:Zd(e,n.child,a,o,c,f,y)&&(R=!0));n=n.sibling}return R}function Tx(e,n){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,o=e.stateNode,c=Sa(a,o),f=ba(a.default,a.update),y;y=e.memoizedState,e.memoizedState=null,o=e;var R=e.child;Zn=0,c=Zd(o,R,c,c,f,y,!1),(e.flags&4)!==0&&c&&ks(e,a.onUpdate)}else(e.subtreeFlags&33554432)!==0&&Tx(e);e=e.sibling}}var An=!1,Vt=!1,ta=!1,Kd=!1,Ax=typeof WeakSet=="function"?WeakSet:Set,wn=null,na=!1,ol=!1,jc=!1,Qd=!1;function iE(e,n,a){if(e=e.containerInfo,bh=$s,e=N0(e),Bf(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var f=c.anchorOffset,y=c.focusNode;c=c.focusOffset;try{o.nodeType,y.nodeType}catch{o=null;break e}var R=0,B=-1,ee=-1,fe=0,be=0,Z=e,le=null;t:for(;;){for(var Pe;Z!==o||f!==0&&Z.nodeType!==3||(B=R+f),Z!==y||c!==0&&Z.nodeType!==3||(ee=R+c),Z.nodeType===3&&(R+=Z.nodeValue.length),(Pe=Z.firstChild)!==null;)le=Z,Z=Pe;for(;;){if(Z===e)break t;if(le===o&&++fe===f&&(B=R),le===y&&++be===c&&(ee=R),(Pe=Z.nextSibling)!==null)break;Z=le,le=Z.parentNode}Z=Pe}o=B===-1||ee===-1?null:{start:B,end:ee}}else o=null}o=o||{start:0,end:0}}else o=null;for(Eh={focusedElem:e,selectionRange:o},$s=!1,a=(a&335544064)===a,wn=n,n=a?9270:1024;wn!==null;){if(e=wn,a&&(o=e.deletions,o!==null))for(f=0;f<o.length;f++)a&&qd(o[f]);if(e.alternate===null&&(e.flags&2)!==0)a&&yx(e),Xc(a);else{if(e.tag===22){if(o=e.alternate,e.memoizedState!==null){o!==null&&o.memoizedState===null&&a&&qd(o),Xc(a);continue}else if(o!==null&&o.memoizedState!==null){a&&yx(e),Xc(a);continue}}o=e.child,(e.subtreeFlags&n)!==0&&o!==null?(o.return=e,wn=o):(a&&Ex(e),Xc(a))}}oi=null}function Xc(e){for(;wn!==null;){var n=wn,a=e,o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((c&1024)!==0&&o!==null){a=void 0,c=o.memoizedProps,o=o.memoizedState;var f=n.stateNode;try{var y=Zr(n.type,c);a=f.getSnapshotBeforeUpdate(y,o),f.__reactInternalSnapshotBeforeUpdate=a}catch(R){Wt(n,n.return,R)}}break;case 3:if((c&1024)!==0){if(o=n.stateNode.containerInfo,a=o.nodeType,a===9)Nh(o);else if(a===1)switch(o.nodeName){case"HEAD":case"HTML":case"BODY":Nh(o);break;default:o.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&o!==null&&(a=Sa(o.memoizedProps,o.stateNode),c=n.memoizedProps,c=ba(c.default,c.update),c!=="none"&&Ps(o,a,c,o.memoizedState=[],!0));break;default:if((c&1024)!==0)throw Error(r(163))}if(o=n.sibling,o!==null){o.return=n.return,wn=o;break}wn=n.return}}function wx(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ia(e,a),o&4&&rl(5,a);break;case 1:if(ia(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(y){Wt(a,a.return,y)}else{var c=Zr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Wt(a,a.return,y)}}o&64&&mx(a),o&512&&Ji(a,a.return);break;case 3:if(ia(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{ag(e,n)}catch(y){Wt(a,a.return,y)}}break;case 27:n===null&&o&4&&_x(a);case 26:case 5:ia(e,a),n===null&&o&4&&Gd(a),o&512&&Ji(a,a.return);break;case 12:ia(e,a);break;case 31:ia(e,a),o&4&&Dx(e,a);break;case 13:ia(e,a),o&4&&Ux(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=mE.bind(null,a),KE(e,a))));break;case 22:if(o=a.memoizedState!==null||An,!o){var f=n!==null&&n.memoizedState!==null||Vt;n=An,c=Vt,An=o,(Vt=f)&&!c?(o=2,(a.subtreeFlags&8772)!==0&&(o|=1),Li(e,a,o)):ia(e,a),An=n,Vt=c}break;case 30:ia(e,a),o&512&&Ji(a,a.return);break;case 7:o&512&&Ji(a,a.return);default:ia(e,a)}}function Jd(e,n){for(e=e.child;e!==null;)Rx(e,n),e=e.sibling}function Rx(e,n){switch(e.tag){case 5:case 26:try{var a=e.stateNode;if(n){var o=a.style;typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"}else{var c=e.stateNode,f=e.memoizedProps.style,y=f!=null&&f.hasOwnProperty("display")?f.display:null;c.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(B){Wt(e,e.return,B)}$d(e,n);break;case 6:try{e.stateNode.nodeValue=n?"":e.memoizedProps,_t=!0}catch(B){Wt(e,e.return,B)}break;case 18:try{var R=e.stateNode;n?yv(R,!0):yv(e.stateNode,!1)}catch(B){Wt(e,e.return,B)}break;case 22:case 23:e.memoizedState===null&&Jd(e,n);break;default:Jd(e,n)}}function $d(e,n){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var a=e,o=n;switch(a.tag){case 4:Rx(a,o);break e;case 22:a.memoizedState===null&&$d(a,o);break e;default:$d(a,o)}}e=e.sibling}}function Cx(e){var n=e.alternate;n!==null&&(e.alternate=null,Cx(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Qe(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var an=null,Kn=!1;function Di(e,n,a){for(a=a.child;a!==null;)Nx(e,n,a),a=a.sibling}function Nx(e,n,a){if(ke&&typeof ke.onCommitFiberUnmount=="function")try{ke.onCommitFiberUnmount($e,a)}catch{}switch(a.tag){case 26:Vt||Ln(a,n),Di(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Vt&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Vt||Ln(a,n),sl(a);var o=an,c=Kn;xr(a.type)&&(an=a.stateNode,Kn=!1),Di(e,n,a),Fv(a.stateNode,a.type,a.memoizedProps),an=o,Kn=c;break;case 5:Vt||Ln(a,n),sl(a);case 6:if(a.tag===6&&sl(a),o=an,c=Kn,an=null,Di(e,n,a),an=o,Kn=c,an!==null)if(Kn)try{(an.nodeType===9?an.body:an.nodeName==="HTML"?an.ownerDocument.body:an).removeChild(a.stateNode),_t=!0}catch(f){Wt(a,n,f)}else try{an.removeChild(a.stateNode),_t=!0}catch(f){Wt(a,n,f)}break;case 18:an!==null&&(Kn?(e=an,_v(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),eo(e)):_v(an,a.stateNode));break;case 4:o=an,c=Kn,an=a.stateNode.containerInfo,Kn=!0,Di(e,n,a),an=o,Kn=c;break;case 0:case 11:case 14:case 15:ur(2,a,n),Vt||ur(4,a,n),Di(e,n,a);break;case 1:Vt||(Ln(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&gx(a,n,o)),Di(e,n,a);break;case 21:Di(e,n,a);break;case 22:Vt=(o=Vt)||a.memoizedState!==null,Di(e,n,a),Vt=o;break;case 30:Ln(a,n),Di(e,n,a);break;case 7:Vt||Ln(a,n),Di(e,n,a);break;default:Di(e,n,a)}}function Dx(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{eo(e)}catch(a){Wt(n,n.return,a)}}}function Ux(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{eo(e)}catch(a){Wt(n,n.return,a)}}function aE(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Ax),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Ax),n;default:throw Error(r(435,e.tag))}}function Wc(e,n){var a=aE(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var c=gE.bind(null,e,o);o.then(c,c)}})}function Xn(e,n,a){var o=n.deletions;if(o!==null)for(var c=0;c<o.length;c++){var f=o[c],y=e,R=n,B=R;e:for(;B!==null;){switch(B.tag){case 27:if(xr(B.type)){an=B.stateNode,Kn=!1;break e}break;case 5:an=B.stateNode,Kn=!1;break e;case 3:case 4:an=B.stateNode.containerInfo,Kn=!0;break e}B=B.return}if(an===null)throw Error(r(160));Nx(y,R,f),an=null,Kn=!1,y=f.alternate,y!==null&&(y.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Lx(n,e,a),n=n.sibling}var Ui=null;function Lx(e,n,a){var o=e.alternate,c=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(c&4&&(o=e.updateQueue,o=o!==null?o.events:null,o!==null))for(var f=0;f<o.length;f++){var y=o[f];y.ref.impl=y.nextImpl}Xn(n,e,a),Wn(e),c&4&&(ur(3,e,e.return),rl(3,e),ur(5,e,e.return));break;case 1:Xn(n,e,a),Wn(e),c&512&&(Vt||o===null||Ln(o,o.return)),c&64&&An&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(f=Ui,Xn(n,e,a),Wn(e),c&512&&(Vt||o===null||Ln(o,o.return)),c&4)if(c=o!==null?o.memoizedState:null,a=e.memoizedState,o===null)if(a===null)if(e.stateNode===null)if(An)e.stateNode=gv(e.type,e.memoizedProps,n.containerInfo,e);else{e:{n=e.type,a=e.memoizedProps,c=f.ownerDocument||f;t:switch(n){case"title":o=c.getElementsByTagName("title")[0],(!o||o[Fe]||o[w]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=c.createElement(n),c.head.insertBefore(o,c.querySelector("head > title"))),Fn(o,n,a),o[w]=e,vt(o),n=o;break e;case"link":if(f=Hv("link","href",c).get(n+(a.href||""))){for(y=0;y<f.length;y++)if(o=f[y],o.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&o.getAttribute("rel")===(a.rel==null?null:a.rel)&&o.getAttribute("title")===(a.title==null?null:a.title)&&o.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(y,1);break t}}o=c.createElement(n),Fn(o,n,a),c.head.appendChild(o);break;case"meta":if(f=Hv("meta","content",c).get(n+(a.content||""))){for(y=0;y<f.length;y++)if(o=f[y],o.getAttribute("content")===(a.content==null?null:""+a.content)&&o.getAttribute("name")===(a.name==null?null:a.name)&&o.getAttribute("property")===(a.property==null?null:a.property)&&o.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&o.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(y,1);break t}}o=c.createElement(n),Fn(o,n,a),c.head.appendChild(o);break;default:throw Error(r(468,n))}o[w]=e,vt(o),n=o}e.stateNode=n}else An||Bh(f,e.type,e.stateNode);else e.stateNode=zv(f,a,e.memoizedProps);else c!==a?(c===null?(n=o.stateNode,n===null||Vt||n.parentNode.removeChild(n)):c.count--,a===null?An||Bh(f,e.type,e.stateNode):zv(f,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Vd(e,e.memoizedProps,o.memoizedProps);break;case 27:Xn(n,e,a),Wn(e),c&512&&(Vt||o===null||Ln(o,o.return)),o!==null&&c&4&&Vd(e,e.memoizedProps,o.memoizedProps);break;case 5:if(f=ta,ta=!1,Xn(n,e,a),ta=f,Wn(e),c&512&&(Vt||o===null||Ln(o,o.return)),e.flags&32){n=e.stateNode;try{xs(n,""),_t=!0}catch(fe){Wt(e,e.return,fe)}}c&4&&e.stateNode!=null&&(n=e.memoizedProps,Vd(e,n,o!==null?o.memoizedProps:n)),c&1024&&(Kd=!0);break;case 6:if(Xn(n,e,a),Wn(e),c&4){if(e.stateNode===null)throw Error(r(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n,_t=!0}catch(fe){Wt(e,e.return,fe)}}break;case 3:if(_t=!1,ou=null,f=Ui,Ui=gl(n.containerInfo),Xn(n,e,a),Ui=f,Wn(e),c&4&&o!==null&&o.memoizedState.isDehydrated)try{eo(n.containerInfo)}catch(fe){Wt(e,e.return,fe)}Kd&&(Kd=!1,Fx(e)),_t=!1;break;case 4:c=ta,ta=An,o=It(),f=Ui,Ui=gl(e.stateNode.containerInfo),Xn(n,e,a),Wn(e),Ui=f,_t&&ol&&(jc=!0),_t=o,ta=c;break;case 12:Xn(n,e,a),Wn(e);break;case 31:Xn(n,e,a),Wn(e),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Wc(e,n)));break;case 13:Xn(n,e,a),Wn(e),e.child.flags&8192&&e.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Zc=Xe()),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Wc(e,n)));break;case 22:f=e.memoizedState!==null,y=o!==null&&o.memoizedState!==null;var R=An,B=Vt,ee=ta;An=R||f,ta=ee||f,Vt=B||y,Xn(n,e,a),Vt=B,ta=ee,An=R,Wn(e),c&8192&&(n=e.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,!f||o===null||y||An||Vt||(n=y||Vt,a=An,o=Vt,An=f||An,Vt=n,fr(e,2),An=a,Vt=o),!f&&ta||Jd(e,f)),c&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Wc(e,a))));break;case 19:Xn(n,e,a),Wn(e),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Wc(e,n)));break;case 30:c&512&&(Vt||o===null||Ln(o,o.return)),c=It(),f=ol,y=(a&335544064)===a,R=e.memoizedProps,ol=y&&ba(R.default,R.update)!=="none",Xn(n,e,a),Wn(e),y&&o!==null&&_t&&(e.flags|=4),ol=f,_t=c;break;case 21:break;case 7:c&512&&(Vt||o===null||Ln(o,o.return)),o&&o.stateNode!==null&&(o.stateNode._fragmentFiber=e);default:Xn(n,e,a),Wn(e)}}function Wn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(vx(o)){a=o;break}o=o.return}o=null;for(var c=e.return;c!==null;){if(Hd(c)){var f=c.stateNode;o===null?o=[f]:o.push(f)}if(zd(c))break;c=c.return}var y=o;if(a==null)throw Error(r(160));switch(a.tag){case 27:var R=a.stateNode,B=kd(e);Hc(e,B,R,y);break;case 5:var ee=a.stateNode;a.flags&32&&(xs(ee,""),a.flags&=-33);var fe=kd(e);Hc(e,fe,ee,y);break;case 3:case 4:var be=a.stateNode.containerInfo,Z=kd(e);jd(e,Z,be,y);break;default:throw Error(r(161))}}catch(le){Wt(e,e.return,le)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Fx(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Fx(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,$s=!0,n.reset(),$s=!1),e=e.sibling}}function Os(e,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)Px(n,e),n=n.sibling;else Tx(n)}function Px(e,n){var a=e.alternate;if(a===null)Xd(e,!1);else switch(e.tag){case 3:if(Qd=na=!1,Sx(),Os(n,e),!na&&!jc){if(e=$i,e!==null)for(var o=0;o<e.length;o+=3){a=e[o];var c=e[o+1];bv(a,e[o+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+c+")"})}e=n.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Qd=!0}$i=null;break;case 5:Os(n,e);break;case 4:o=na,na=!1,Os(n,e),na&&(jc=!0),na=o;break;case 22:e.memoizedState===null&&(a.memoizedState!==null?Xd(e,!1):Os(n,e));break;case 30:o=na,c=Sx(),na=!1,Os(n,e),na&&(e.flags|=4);var f=e.memoizedProps,y=e.stateNode;n=Sa(f,y),y=Sa(a.memoizedProps,y);var R=ba(f.default,f.update);R==="none"?n=!1:(f=a.memoizedState,a.memoizedState=null,a=e.child,Zn=0,n=Zd(e,a,n,y,R,f,!0),Zn!==(f===null?0:f.length)&&(e.flags|=32)),(e.flags&4)!==0&&n?(ks(e,e.memoizedProps.onUpdate),$i=c):c!==null&&(c.push.apply(c,$i),$i=c),na=(e.flags&32)!==0?!0:o;break;default:Os(n,e)}}function ia(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)wx(e,n.alternate,n),n=n.sibling}function fr(e,n){for(e=e.child;e!==null;){var a=e,o=n;switch(a.tag){case 0:case 11:case 14:case 15:ur(4,a,a.return),fr(a,o);break;case 1:Ln(a,a.return);var c=a.stateNode;typeof c.componentWillUnmount=="function"&&gx(a,a.return,c),fr(a,o);break;case 27:(o&2)!==0&&Fv(a.stateNode,a.type,a.memoizedProps);case 5:Ln(a,a.return),a.tag!==5&&a.tag!==27||sl(a),fr(a,o);break;case 6:sl(a);break;case 26:Ln(a,a.return),c=a.stateNode,a.memoizedState!==null||c===null||Vt||c.parentNode.removeChild(c),fr(a,o);break;case 22:a.memoizedState===null&&fr(a,o);break;case 30:Ln(a,a.return),fr(a,o);break;case 7:Ln(a,a.return);default:fr(a,o)}e=e.sibling}}function Li(e,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var o=n.alternate,c=e,f=n,y=f.flags,R=(a&1)!==0;switch(f.tag){case 0:case 11:case 15:Li(c,f,a),rl(4,f);break;case 1:if(Li(c,f,a),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(fe){Wt(o,o.return,fe)}if(o=f,c=o.updateQueue,c!==null){var B=o.stateNode;try{var ee=c.shared.hiddenCallbacks;if(ee!==null)for(c.shared.hiddenCallbacks=null,c=0;c<ee.length;c++)ig(ee[c],B)}catch(fe){Wt(o,o.return,fe)}}R&&y&64&&mx(f),Ji(f,f.return);break;case 27:(a&2)!==0&&_x(f);case 5:f.tag!==5&&f.tag!==27||xx(f),Li(c,f,a),R&&o===null&&y&4&&Gd(f),Ji(f,f.return);break;case 6:xx(f);break;case 26:B=f.stateNode,f.memoizedState!==null||B===null||An||Bh(gl(B.ownerDocument),f.type,B),Li(c,f,a),R&&o===null&&y&4&&Gd(f),Ji(f,f.return);break;case 12:Li(c,f,a);break;case 31:Li(c,f,a),R&&y&4&&Dx(c,f);break;case 13:Li(c,f,a),R&&y&4&&Ux(c,f);break;case 22:f.memoizedState===null&&Li(c,f,a),Ji(f,f.return);break;case 30:Li(c,f,a),Ji(f,f.return);break;case 7:Ji(f,f.return);default:Li(c,f,a)}n=n.sibling}}function eh(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Wo(a))}function th(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Wo(e))}function bi(e,n,a,o){var c=(a&335544064)===a;if(n.subtreeFlags&(c?10262:10256))for(n=n.child;n!==null;)Ox(e,n,a,o),n=n.sibling;else c&&Mx(n)}function Ox(e,n,a,o){var c=(a&335544064)===a;c&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&kc(n);var f=n.flags;switch(n.tag){case 0:case 11:case 15:bi(e,n,a,o),f&2048&&rl(9,n);break;case 1:bi(e,n,a,o);break;case 3:bi(e,n,a,o),c&&Qd&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),f&2048&&(f=null,n.alternate!==null&&(f=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==f&&(n.refCount++,f!=null&&Wo(f)));break;case 12:if(f&2048){bi(e,n,a,o),f=n.stateNode;try{var y=n.memoizedProps,R=y.id,B=y.onPostCommit;typeof B=="function"&&B(R,n.alternate===null?"mount":"update",f.passiveEffectDuration,-0)}catch(ee){Wt(n,n.return,ee)}}else bi(e,n,a,o);break;case 31:bi(e,n,a,o);break;case 13:bi(e,n,a,o);break;case 23:break;case 22:y=n.stateNode,R=n.alternate,n.memoizedState!==null?(c&&R!==null&&R.memoizedState===null&&kc(R),y._visibility&2?bi(e,n,a,o):ll(e,n)):(c&&R!==null&&R.memoizedState!==null&&kc(n),y._visibility&2?bi(e,n,a,o):(y._visibility|=2,Bs(e,n,a,o,(n.subtreeFlags&10256)!==0||!1))),f&2048&&eh(R,n);break;case 24:bi(e,n,a,o),f&2048&&th(n.alternate,n);break;case 30:c&&(f=n.alternate,f!==null&&(ea(f.child,!0),ea(n.child,!0))),bi(e,n,a,o);break;default:bi(e,n,a,o)}}function Bs(e,n,a,o,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,y=n,R=a,B=o,ee=y.flags;switch(y.tag){case 0:case 11:case 15:Bs(f,y,R,B,c),rl(8,y);break;case 23:break;case 22:var fe=y.stateNode;y.memoizedState!==null?fe._visibility&2?Bs(f,y,R,B,c):ll(f,y):(fe._visibility|=2,Bs(f,y,R,B,c)),c&&ee&2048&&eh(y.alternate,y);break;case 24:Bs(f,y,R,B,c),c&&ee&2048&&th(y.alternate,y);break;default:Bs(f,y,R,B,c)}n=n.sibling}}function ll(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,c=o.flags;switch(o.tag){case 22:ll(a,o),c&2048&&eh(o.alternate,o);break;case 24:ll(a,o),c&2048&&th(o.alternate,o);break;default:ll(a,o)}n=n.sibling}}var Kr=8192;function Qr(e,n,a){if(e.subtreeFlags&Kr)for(e=e.child;e!==null;)Bx(e,n,a),e=e.sibling}function Bx(e,n,a){switch(e.tag){case 26:Qr(e,n,a),e.flags&Kr&&(e.memoizedState!==null?u1(a,Ui,e.memoizedState,e.memoizedProps):(e=e.stateNode,(n&335544128)===n&&jv(a,e)));break;case 5:Qr(e,n,a),e.flags&Kr&&(e=e.stateNode,(n&335544128)===n&&jv(a,e));break;case 3:case 4:var o=Ui;Ui=gl(e.stateNode.containerInfo),Qr(e,n,a),Ui=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Kr,Kr=16777216,Qr(e,n,a),Kr=o):Qr(e,n,a));break;case 30:if((e.flags&Kr)!==0&&(o=e.memoizedProps.name,o!=null&&o!=="auto")){var c=e.stateNode;c.paired=null,oi===null&&(oi=new Map),oi.set(o,c)}Qr(e,n,a);break;default:Qr(e,n,a)}}function Ix(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function cl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];wn=o,Hx(o,e)}Ix(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)zx(e),e=e.sibling}function zx(e){switch(e.tag){case 0:case 11:case 15:cl(e),e.flags&2048&&ur(9,e,e.return);break;case 3:cl(e);break;case 12:cl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,qc(e)):cl(e);break;default:cl(e)}}function qc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];wn=o,Hx(o,e)}Ix(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ur(8,n,n.return),qc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,qc(n));break;default:qc(n)}e=e.sibling}}function Hx(e,n){for(;wn!==null;){var a=wn;switch(a.tag){case 0:case 11:case 15:ur(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Wo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,wn=o;else e:for(a=e;wn!==null;){o=wn;var c=o.sibling,f=o.return;if(Cx(o),o===a){wn=null;break e}if(c!==null){c.return=f,wn=c;break e}wn=f}}}var rE={getCacheForType:function(e){var n=Nn(gn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Nn(gn).controller.signal}},sE=typeof WeakMap=="function"?WeakMap:Map,zt=0,Jt=null,Et=null,wt=0,Xt=0,li=null,dr=!1,Is=!1,nh=!1,Da=0,fn=0,hr=0,Jr=0,Yc=0,ci=0,zs=0,ul=null,Qn=null,ih=!1,Zc=0,Gx=0,Kc=1/0,Qc=null,pr=null,sn=0,Fi=null,$r=null,aa=0,ah=0,rh=null,Vx=null,Hs=null,Gs=null,Vs=null,fl=0,Jc=null;function ui(){return(zt&2)!==0&&wt!==0?wt&-wt:ye.T!==null?mh():Kl()}function kx(){if(ci===0)if((wt&536870912)===0||yt){var e=Ur;Ur<<=1,(Ur&3932160)===0&&(Ur=262144),ci=e}else ci=536870912;return e=Dn.current,e!==null&&(e.flags|=32),ci}function ks(e,n){if(n!=null){var a=e.stateNode,o=a.ref;o===null&&(o=a.ref=Ev(Sa(e.memoizedProps,a))),Gs===null&&(Gs=[]),Gs.push(n.bind(null,o))}}function Jn(e,n,a){(e===Jt&&(Xt===2||Xt===9)||e.cancelPendingCommit!==null)&&(js(e,0),mr(e,wt,ci,!1)),qi(e,a),((zt&2)===0||e!==Jt)&&(e===Jt&&((zt&2)===0&&(Jr|=a),fn===4&&mr(e,wt,ci,!1)),ra(e))}function jx(e,n,a){if((zt&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ka(e,n),c=o?cE(e,n):oh(e,n,!0),f=o;do{if(c===0){Is&&!o&&mr(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!oE(a)){c=oh(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;e:{var R=e;c=ul;var B=R.current.memoizedState.isDehydrated;if(B&&(js(R,y).flags|=256),y=oh(R,y,!1),y!==2&&y!==6){if(nh&&!B){R.errorRecoveryDisabledLanes|=f,Jr|=f,c=4;break e}f=Qn,Qn=c,f!==null&&(Qn===null?Qn=f:Qn.push.apply(Qn,f))}c=y}if(f=!1,c!==2)continue}}if(c===1){js(e,0),mr(e,n,0,!0);break}e:{switch(o=e,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:mr(o,n,ci,!dr);break e;case 2:Qn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Zc+300-Xe(),10<c)){if(mr(o,n,ci,!dr),Lr(o,0,!0)!==0)break e;aa=n,o.timeoutHandle=Ah(Xx.bind(null,o,a,Qn,Qc,ih,n,ci,Jr,zs,dr,f,"Throttled",-0,0),c);break e}Xx(o,a,Qn,Qc,ih,n,ci,Jr,zs,dr,f,null,-0,0)}}break}while(!0);ra(e)}function Xx(e,n,a,o,c,f,y,R,B,ee,fe,be,Z,le){e.timeoutHandle=-1;var Pe=n.subtreeFlags,Je=(f&335544064)===f;if(be=null,(Je||Pe&8192||(Pe&16785408)===16785408)&&(be={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zi},oi=null,Bx(n,f,be),Je&&(Pe=be,Je=e.containerInfo,Je=(Je.nodeType===9?Je:Je.ownerDocument).__reactViewTransition,Je!=null&&(Pe.count++,Pe.waitingForViewTransition=!0,Pe=_l.bind(Pe),Je.finished.then(Pe,Pe))),Pe=(f&62914560)===f?Zc-Xe():(f&4194048)===f?Gx-Xe():0,Pe=f1(be,Pe),Pe!==null)){aa=f,e.cancelPendingCommit=Pe($x.bind(null,e,n,f,a,o,c,y,R,B,ee,fe,be,null,Z,le)),mr(e,f,y,!ee);return}$x(e,n,f,a,o,c,y,R,B,ee,fe,be)}function oE(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],f=c.getSnapshot;c=c.value;try{if(!ri(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function mr(e,n,a,o){n=Wi(e,n),n&=~Yc,n&=~Jr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var f=31-ut(c),y=1<<f;o[f]=-1,c&=~y}a!==0&&Fr(e,a,n)}function $c(){return(zt&6)===0?(dl(0),!1):!0}function sh(){if(Et!==null){if(Xt===0)var e=Et.return;else e=Et,Ta=Hr=null,pd(e),Ns=null,Zo=0,e=Et;for(;e!==null;)px(e.alternate,e),e=e.return;Et=null}}function js(e,n){var a=e.timeoutHandle;return a!==-1&&(e.timeoutHandle=-1,DE(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),aa=0,sh(),Jt=e,Et=a=Ea(e.current,null),wt=n,Xt=0,li=null,dr=!1,Is=Ka(e,n),nh=!1,zs=ci=Yc=Jr=hr=fn=0,Qn=ul=null,ih=!1,Da=Wi(e,n),oc(),a}function Wx(e,n){ht=null,ye.H=Uc,n===Cs||n===vc?(n=$0(),Xt=3):n===td?(n=$0(),Xt=4):Xt=n===Cd?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,li=n,Et===null&&(fn=1,Lc(e,vi(n,e.current)))}function qx(){var e=Dn.current;return e===null?!0:(wt&4194048)===wt?Bn===null:(wt&62914560)===wt||(wt&536870912)!==0?e===Bn:!1}function Yx(){var e=ye.H;return ye.H=Uc,e===null?Uc:e}function Zx(){var e=ye.A;return ye.A=rE,e}function eu(){fn=4,dr||(wt&4194048)!==wt&&Dn.current!==null||(Is=!0),(hr&134217727)===0&&(Jr&134217727)===0||Jt===null||mr(Jt,wt,ci,!1)}function oh(e,n,a){var o=zt;zt|=2;var c=Yx(),f=Zx();(Jt!==e||wt!==n)&&(Qc=null,js(e,n)),n=!1;var y=fn;e:do try{if(Xt!==0&&Et!==null){var R=Et,B=li;switch(Xt){case 8:sh(),y=6;break e;case 3:case 2:case 9:case 6:Dn.current===null&&(n=!0);var ee=Xt;if(Xt=0,li=null,Xs(e,R,B,ee),a&&Is){y=0;break e}break;default:ee=Xt,Xt=0,li=null,Xs(e,R,B,ee)}}lE(),y=fn;break}catch(fe){Wx(e,fe)}while(!0);return n&&e.shellSuspendCounter++,Ta=Hr=null,zt=o,ye.H=c,ye.A=f,Et===null&&(Jt=null,wt=0,oc()),y}function lE(){for(;Et!==null;)Kx(Et)}function cE(e,n){var a=zt;zt|=2;var o=Yx(),c=Zx();Jt!==e||wt!==n?(Qc=null,Kc=Xe()+500,js(e,n)):Is=Ka(e,n);e:do try{if(Xt!==0&&Et!==null){n=Et;var f=li;t:switch(Xt){case 1:Xt=0,li=null,Xs(e,n,f,1);break;case 2:case 9:if(Q0(f)){Xt=0,li=null,Qx(n);break}n=function(){Xt!==2&&Xt!==9||Jt!==e||(Xt=7),ra(e)},f.then(n,n);break e;case 3:Xt=7;break e;case 4:Xt=5;break e;case 7:Q0(f)?(Xt=0,li=null,Qx(n)):(Xt=0,li=null,Xs(e,n,f,7));break;case 5:var y=null;switch(Et.tag){case 26:y=Et.memoizedState;case 5:case 27:var R=Et;if(y?Vv(y):R.stateNode.complete){Xt=0,li=null;var B=R.sibling;if(B!==null)Et=B;else{var ee=R.return;ee!==null?(Et=ee,tu(ee)):Et=null}break t}}Xt=0,li=null,Xs(e,n,f,5);break;case 6:Xt=0,li=null,Xs(e,n,f,6);break;case 8:sh(),fn=6;break e;default:throw Error(r(462))}}uE();break}catch(fe){Wx(e,fe)}while(!0);return Ta=Hr=null,ye.H=o,ye.A=c,zt=a,Et!==null?0:(Jt=null,wt=0,oc(),fn)}function uE(){for(;Et!==null&&!Be();)Kx(Et)}function Kx(e){var n=dx(e.alternate,e,Da);e.memoizedProps=e.pendingProps,n===null?tu(e):Et=n}function Qx(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=rx(a,n,n.pendingProps,n.type,void 0,wt);break;case 11:n=rx(a,n,n.pendingProps,n.type.render,n.ref,wt);break;case 5:pd(n);var o=n;o===Tn&&(yt?(hc(o),o.tag===5&&o.stateNode!=null&&(en=o.stateNode)):(hc(o),yt=!0));default:px(a,n),n=Et=H0(n,Da),n=dx(a,n,Da)}e.memoizedProps=e.pendingProps,n===null?tu(e):Et=n}function Xs(e,n,a,o){Ta=Hr=null,pd(n),Ns=null,Zo=0;var c=n.return;try{if(Qb(e,c,n,a,wt)){fn=1,Lc(e,vi(a,e.current)),Et=null;return}}catch(f){if(c!==null)throw Et=c,f;fn=1,Lc(e,vi(a,e.current)),Et=null;return}n.flags&32768?(yt||o===1?e=!0:Is||(wt&536870912)!==0?e=!1:(dr=e=!0,(o===2||o===9||o===3||o===6)&&(o=Dn.current,o!==null&&o.tag===13&&(o.flags|=16384))),Jx(n,e)):tu(n)}function tu(e){var n=e;do{if((n.flags&32768)!==0){Jx(n,dr);return}e=n.return;var a=tE(n.alternate,n,Da);if(a!==null){Et=a;return}if(n=n.sibling,n!==null){Et=n;return}Et=n=e}while(n!==null);fn===0&&(fn=5)}function Jx(e,n){do{var a=nE(e.alternate,e);if(a!==null){a.flags&=32767,Et=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Et=e;return}Et=e=a}while(e!==null);fn=6,Et=null}function $x(e,n,a,o,c,f,y,R,B,ee,fe,be){e.cancelPendingCommit=null;do nu();while(sn!==0);if((zt&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));e===Jt&&(Et=Jt=null,wt=0),$r=n,Fi=e,aa=a,rh=c,Vx=o,fE(e,n,a,y,R,B,be)}}function fE(e,n,a,o,c,f,y){var R=n.lanes|n.childLanes;if(ah=R,R|=Vf,Zl(e,a,R,o,c,f),Gs=null,(a&335544064)===a?(Vs=zb(e),o=10262):(Vs=null,o=10256),(n.subtreeFlags&o)!==0||(n.flags&o)!==0?(e.callbackNode=null,e.callbackPriority=0,xE(Ne,function(){return fh(),null})):(e.callbackNode=null,e.callbackPriority=0),Gc=!1,o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=ye.T,ye.T=null,c=Ce.p,Ce.p=2,f=zt,zt|=4;try{iE(e,n,a)}finally{zt=f,Ce.p=c,ye.T=o}}sn=1,Gc?Hs=BE(y,e.containerInfo,Vs,lh,ch,hE,uh,fh,dE):(lh(),ch(),uh())}function dE(e){if(sn!==0){var n=Fi.onRecoverableError;n(e,{componentStack:null})}}function hE(){sn===3&&(sn=0,Px($r,Fi),sn=4)}function lh(){if(sn===1){sn=0;var e=Fi,n=$r,a=aa,o=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||o){o=ye.T,ye.T=null;var c=Ce.p;Ce.p=2;var f=zt;zt|=4;try{ol=jc=!1,Lx(n,e,a),a=Eh;var y=N0(e.containerInfo),R=a.focusedElem,B=a.selectionRange;if(y!==R&&R&&R.ownerDocument&&C0(R.ownerDocument.documentElement,R)){if(B!==null&&Bf(R)){var ee=B.start,fe=B.end;if(fe===void 0&&(fe=ee),"selectionStart"in R)R.selectionStart=ee,R.selectionEnd=Math.min(fe,R.value.length);else{var be=R.ownerDocument||document,Z=be&&be.defaultView||window;if(Z.getSelection){var le=Z.getSelection(),Pe=R.textContent.length,Je=Math.min(B.start,Pe),pt=B.end===void 0?Je:Math.min(B.end,Pe);!le.extend&&Je>pt&&(y=pt,pt=Je,Je=y);var $=R0(R,Je),G=R0(R,pt);if($&&G&&(le.rangeCount!==1||le.anchorNode!==$.node||le.anchorOffset!==$.offset||le.focusNode!==G.node||le.focusOffset!==G.offset)){var ie=be.createRange();ie.setStart($.node,$.offset),le.removeAllRanges(),Je>pt?(le.addRange(ie),le.extend(G.node,G.offset)):(ie.setEnd(G.node,G.offset),le.addRange(ie))}}}}for(be=[],le=R;le=le.parentNode;)le.nodeType===1&&be.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<be.length;R++){var Se=be[R];Se.element.scrollLeft=Se.left,Se.element.scrollTop=Se.top}}$s=!!bh,Eh=bh=null}finally{zt=f,Ce.p=c,ye.T=o}}e.current=n,sn=2}}function ch(){if(sn===2){sn=0;var e=Fi,n=$r,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=ye.T,ye.T=null;var o=Ce.p;Ce.p=2;var c=zt;zt|=4;try{wx(e,n.alternate,n)}finally{zt=c,Ce.p=o,ye.T=a}}sn=3}}function uh(){if(sn===4||sn===3){sn=0;var e=Hs;Hs=null,Oe();var n=Fi,a=$r,o=aa,c=Vx,f=(o&335544064)===o?10262:10256;if((a.subtreeFlags&f)!==0||(a.flags&f)!==0?sn=5:(sn=0,$r=Fi=null,ev(n,n.pendingLanes)),f=n.pendingLanes,f===0&&(pr=null),Fo(o),a=a.stateNode,ke&&typeof ke.onCommitFiberRoot=="function")try{ke.onCommitFiberRoot($e,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=ye.T,f=Ce.p,Ce.p=2,ye.T=null;try{for(var y=n.onRecoverableError,R=0;R<c.length;R++){var B=c[R];y(B.value,{componentStack:B.stack})}}finally{ye.T=a,Ce.p=f}}if(c=Gs,y=Vs,Vs=null,c!==null&&(Gs=null,y===null&&(y=[]),e!==null))for(B=0;B<c.length;B++)a=(0,c[B])(y),a!==void 0&&e.finished.finally(a);(aa&3)!==0&&nu(),ra(n),f=n.pendingLanes,(o&261930)!==0&&(f&42)!==0?n===Jc?fl++:(fl=0,Jc=n):(fl=0,Jc=null),dl(0)}}function ev(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Wo(n)))}function nu(){return Hs!==null&&(Hs.skipTransition(),Hs=null),lh(),ch(),uh(),fh()}function fh(){if(sn!==5)return!1;var e=Fi,n=ah;ah=0;var a=Fo(aa),o=ye.T,c=Ce.p;try{Ce.p=32>a?32:a,ye.T=null,a=rh,rh=null;var f=Fi,y=aa;if(sn=0,$r=Fi=null,aa=0,(zt&6)!==0)throw Error(r(331));var R=zt;if(zt|=4,zx(f.current),Ox(f,f.current,y,a),zt=R,dl(0,!1),ke&&typeof ke.onPostCommitFiberRoot=="function")try{ke.onPostCommitFiberRoot($e,f)}catch{}return!0}finally{Ce.p=c,ye.T=o,ev(e,n)}}function tv(e,n,a){n=vi(a,n),n=Rd(e.stateNode,n,2),e=sr(e,n,2),e!==null&&(qi(e,2),ra(e))}function Wt(e,n,a){if(e.tag===3)tv(e,e,a);else for(;n!==null;){if(n.tag===3){tv(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(pr===null||!pr.has(o))){e=vi(a,e),a=Qg(2),o=sr(n,a,2),o!==null&&(Jg(a,o,n,e),qi(o,2),ra(o));break}}n=n.return}}function dh(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new sE;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(nh=!0,c.add(a),e=pE.bind(null,e,n,a),n.then(e,e))}function pE(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Jt===e&&(wt&a)===a&&((fn===4||fn===3&&(wt&62914560)===wt&&300>Xe()-Zc)&&(zt&2)===0?js(e,0):Yc|=a,zs===wt&&(zs=0)),ra(e)}function nv(e,n){n===0&&(n=No()),e=Br(e,n),e!==null&&(qi(e,n),ra(e))}function mE(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),nv(e,a)}function gE(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),nv(e,a)}function xE(e,n){return De(e,n)}var Ws=null,qs=null,hh=!1,iu=!1,ph=!1,gr=0;function ra(e){e!==qs&&e.next===null&&(qs===null?Ws=qs=e:qs=qs.next=e),iu=!0,hh||(hh=!0,_E())}function dl(e,n){if(!ph&&iu){ph=!0;do for(var a=!1,o=Ws;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var y=o.suspendedLanes,R=o.pingedLanes;f=(1<<31-ut(42|e)+1)-1,f&=c&~(y&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,sv(o,f))}else f=wt,f=Lr(o,o===Jt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Ka(o,f)||(a=!0,sv(o,f));o=o.next}while(a);ph=!1}}function vE(){iv()}function iv(){iu=hh=!1;var e=0;gr!==0&&NE()&&(e=gr);for(var n=Xe(),a=null,o=Ws;o!==null;){var c=o.next,f=av(o,n);f===0?(o.next=null,a===null?Ws=c:a.next=c,c===null&&(qs=a)):(a=o,(e!==0||(f&3)!==0)&&(iu=!0)),o=c}sn!==0&&sn!==5||dl(e),gr!==0&&(gr=0)}function av(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var y=31-ut(f),R=1<<y,B=c[y];B===-1?((R&a)===0||(R&o)!==0)&&(c[y]=Co(R,n)):B<=n&&(e.expiredLanes|=R),f&=~R}if(n=Jt,a=wt,a=Lr(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Xt===2||Xt===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&et(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ka(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&et(o),Fo(a)){case 2:case 8:a=X;break;case 32:a=Ne;break;case 268435456:a=Le;break;default:a=Ne}return o=rv.bind(null,e),a=De(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&et(o),e.callbackPriority=2,e.callbackNode=null,2}function rv(e,n){if(sn!==0&&sn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(nu()&&e.callbackNode!==a)return null;var o=wt;return o=Lr(e,e===Jt?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(jx(e,o,n),av(e,Xe()),e.callbackNode!=null&&e.callbackNode===a?rv.bind(null,e):null)}function sv(e,n){if(nu())return null;jx(e,n,!0)}function _E(){UE(function(){(zt&6)!==0?De(ct,vE):iv()})}function mh(){if(gr===0){var e=kr;e===0&&(e=ps,ps<<=1,(ps&261888)===0&&(ps=256)),gr=e}return gr}function ov(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:$l(e)}function yE(e,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var f=ov((c[H]||null).action),y=o.submitter;y&&(n=(n=y[H]||null)?ov(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var R=new ic("action","action",null,o,c);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(gr!==0){var B=new FormData(c,y);Ed(a,{pending:!0,data:B,method:c.method,action:f},null,B)}}else typeof f=="function"&&(R.preventDefault(),B=new FormData(c,y),Ed(a,{pending:!0,data:B,method:c.method,action:f},f,B))},currentTarget:c}]})}}for(var gh=0;gh<Gf.length;gh++){var xh=Gf[gh],SE=xh.toLowerCase(),bE=xh[0].toUpperCase()+xh.slice(1);Ni(SE,"on"+bE)}Ni(L0,"onAnimationEnd"),Ni(F0,"onAnimationIteration"),Ni(P0,"onAnimationStart"),Ni("dblclick","onDoubleClick"),Ni("focusin","onFocus"),Ni("focusout","onBlur"),Ni(Db,"onTransitionRun"),Ni(Ub,"onTransitionStart"),Ni(Lb,"onTransitionCancel"),Ni(O0,"onTransitionEnd"),ln("onMouseEnter",["mouseout","mouseover"]),ln("onMouseLeave",["mouseout","mouseover"]),ln("onPointerEnter",["pointerout","pointerover"]),ln("onPointerLeave",["pointerout","pointerover"]),Ge("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ge("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ge("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ge("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ge("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ge("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),EE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hl));function lv(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],c=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var y=o.length-1;0<=y;y--){var R=o[y],B=R.instance,ee=R.currentTarget;if(R=R.listener,B!==f&&c.isPropagationStopped())break e;f=R,c.currentTarget=ee;try{f(c)}catch(fe){sc(fe)}c.currentTarget=null,f=B}else for(y=0;y<o.length;y++){if(R=o[y],B=R.instance,ee=R.currentTarget,R=R.listener,B!==f&&c.isPropagationStopped())break e;f=R,c.currentTarget=ee;try{f(c)}catch(fe){sc(fe)}c.currentTarget=null,f=B}}}}function Mt(e,n){var a=n[re];a===void 0&&(a=n[re]=new Set);var o=e+"__bubble";a.has(o)||(cv(n,e,2,!1),a.add(o))}function vh(e,n,a){var o=0;n&&(o|=4),cv(a,e,o,n)}var au="_reactListening"+Math.random().toString(36).slice(2);function _h(e){if(!e[au]){e[au]=!0,Gt.forEach(function(a){a!=="selectionchange"&&(EE.has(a)||vh(a,!1,e),vh(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[au]||(n[au]=!0,vh("selectionchange",!1,n))}}function cv(e,n,a,o){switch(Jv(n)){case 2:var c=m1;break;case 8:c=g1;break;default:c=zh}a=c.bind(null,n,a,e),c=void 0,!wf||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function yh(e,n,a,o,c){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var R=o.stateNode.containerInfo;if(R===c)break;if(y===4)for(y=o.return;y!==null;){var B=y.tag;if((B===3||B===4)&&y.stateNode.containerInfo===c)return;y=y.return}for(;R!==null;){if(y=st(R),y===null)return;if(B=y.tag,B===5||B===6||B===26||B===27){o=f=y;continue e}R=R.parentNode}}o=o.return}c0(function(){var ee=f,fe=Tf(a),be=[];e:{var Z=B0.get(e);if(Z!==void 0){var le=ic,Pe=e;switch(e){case"keypress":if(tc(a)===0)break e;case"keydown":case"keyup":le=ob;break;case"focusin":Pe="focus",le=Df;break;case"focusout":Pe="blur",le=Df;break;case"beforeblur":case"afterblur":le=Df;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=d0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=ZS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=db;break;case L0:case F0:case P0:le=JS;break;case O0:le=pb;break;case"scroll":case"scrollend":le=qS;break;case"wheel":le=gb;break;case"copy":case"cut":case"paste":le=eb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=p0;break;case"submit":le=ub;break;case"toggle":case"beforetoggle":le=vb}var Je=(n&4)!==0,pt=!Je&&(e==="scroll"||e==="scrollend"),$=Je?Z!==null?Z+"Capture":null:Z;Je=[];for(var G=ee,ie;G!==null;){var Se=G;if(ie=Se.stateNode,Se=Se.tag,Se!==5&&Se!==26&&Se!==27||ie===null||$===null||(Se=Po(G,$),Se!=null&&Je.push(pl(G,Se,ie))),pt)break;G=G.return}0<Je.length&&(Z=new le(Z,Pe,null,a,fe),be.push({event:Z,listeners:Je}))}}if((n&7)===0){e:{if(le=e==="mouseover"||e==="pointerover",Z=e==="mouseout"||e==="pointerout",le&&a!==Mf&&(Pe=a.relatedTarget||a.fromElement)&&(st(Pe)||Pe[de]))break e;(Z||le)&&(Pe=fe.window===fe?fe:(le=fe.ownerDocument)?le.defaultView||le.parentWindow:window,Z?(le=a.relatedTarget||a.toElement,Z=ee,le=le?st(le):null,le!==null&&(pt=u(le),Je=le.tag,le!==pt||Je!==5&&Je!==27&&Je!==6)&&(le=null)):(Z=null,le=ee),Z!==le&&(Je=d0,Se="onMouseLeave",$="onMouseEnter",G="mouse",(e==="pointerout"||e==="pointerover")&&(Je=p0,Se="onPointerLeave",$="onPointerEnter",G="pointer"),pt=Z==null?Pe:Ye(Z),ie=le==null?Pe:Ye(le),Pe=new Je(Se,G+"leave",Z,a,fe),Pe.target=pt,Pe.relatedTarget=ie,Se=null,st(fe)===ee&&(Je=new Je($,G+"enter",le,a,fe),Je.target=ie,Je.relatedTarget=pt,Se=Je),pt=Se,Je=Z&&le?L(Z,le,ME):null,Z!==null&&uv(be,Pe,Z,Je,!1),le!==null&&pt!==null&&uv(be,pt,le,Je,!0)))}e:{if(Z=ee?Ye(ee):window,le=Z.nodeName&&Z.nodeName.toLowerCase(),le==="select"||le==="input"&&Z.type==="file")var Ze=b0;else if(y0(Z))if(E0)Ze=Rb;else{Ze=Ab;var Rt=Tb}else le=Z.nodeName,!le||le.toLowerCase()!=="input"||Z.type!=="checkbox"&&Z.type!=="radio"?ee&&Ef(ee.elementType)&&(Ze=b0):Ze=wb;if(Ze&&(Ze=Ze(e,ee))){S0(be,Ze,a,fe);break e}Rt&&Rt(e,Z,ee)}switch(Rt=ee?Ye(ee):window,e){case"focusin":(y0(Rt)||Rt.contentEditable==="true")&&(Ss=Rt,If=ee,ko=null);break;case"focusout":ko=If=Ss=null;break;case"mousedown":zf=!0;break;case"contextmenu":case"mouseup":case"dragend":zf=!1,D0(be,a,fe);break;case"selectionchange":if(Nb)break;case"keydown":case"keyup":D0(be,a,fe)}var tt;if(Lf)e:{switch(e){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else ys?v0(e,a)&&(rt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(rt="onCompositionStart");rt&&(m0&&a.locale!=="ko"&&(ys||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&ys&&(tt=u0()):(Qa=fe,Rf="value"in Qa?Qa.value:Qa.textContent,ys=!0)),Rt=ru(ee,rt),0<Rt.length&&(rt=new h0(rt,e,null,a,fe),be.push({event:rt,listeners:Rt}),tt?rt.data=tt:(tt=_0(a),tt!==null&&(rt.data=tt)))),(tt=yb?Sb(e,a):bb(e,a))&&(rt=ru(ee,"onBeforeInput"),0<rt.length&&(Rt=new h0("onBeforeInput","beforeinput",null,a,fe),be.push({event:Rt,listeners:rt}),Rt.data=tt)),yE(be,e,ee,a,fe)}lv(be,n)})}function pl(e,n,a){return{instance:e,listener:n,currentTarget:a}}function ru(e,n){for(var a=n+"Capture",o=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Po(e,a),c!=null&&o.unshift(pl(e,c,f)),c=Po(e,n),c!=null&&o.push(pl(e,c,f))),e.tag===3)return o;e=e.return}return[]}function ME(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function uv(e,n,a,o,c){for(var f=n._reactName,y=[];a!==null&&a!==o;){var R=a,B=R.alternate,ee=R.stateNode;if(R=R.tag,B!==null&&B===o)break;R!==5&&R!==26&&R!==27||ee===null||(B=ee,c?(ee=Po(a,f),ee!=null&&y.unshift(pl(a,ee,B))):c||(ee=Po(a,f),ee!=null&&y.push(pl(a,ee,B)))),a=a.return}y.length!==0&&e.push({event:n,listeners:y})}var TE=/\r\n?/g,AE=/\u0000|\uFFFD/g;function fv(e){return(typeof e=="string"?e:""+e).replace(TE,`
`).replace(AE,"")}function dv(e,n){return n=fv(n),fv(e)===n}function qt(e,n,a,o,c,f){switch(a){case"children":if(typeof o=="string")n==="body"||n==="textarea"&&o===""||xs(e,o);else if(typeof o=="number"||typeof o=="bigint")n!=="body"&&xs(e,""+o);else return;break;case"className":ai(e,"class",o);break;case"tabIndex":ai(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ai(e,a,o);break;case"style":o0(e,o,f);return;case"data":if(n!=="object"){ai(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=$l(o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&qt(e,n,"name",c.name,c,null),qt(e,n,"formEncType",c.formEncType,c,null),qt(e,n,"formMethod",c.formMethod,c,null),qt(e,n,"formTarget",c.formTarget,c,null)):(qt(e,n,"encType",c.encType,c,null),qt(e,n,"method",c.method,c,null),qt(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=$l(o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Zi);return;case"onScroll":o!=null&&Mt("scroll",e);return;case"onScrollEnd":o!=null&&Mt("scrollend",e);return;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));(f!=null?f.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=$l(o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Mt("beforetoggle",e),Mt("toggle",e),$t(e,"popover",o);break;case"xlinkActuate":At(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":At(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":At(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":At(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":At(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":At(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":At(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":At(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":At(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":$t(e,"is",o);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=XS.get(a)||a,$t(e,a,o);else return}_t=!0}function Sh(e,n,a,o,c,f){switch(a){case"style":o0(e,o,f);return;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));(f!=null?f.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"children":if(typeof o=="string")xs(e,o);else if(typeof o=="number"||typeof o=="bigint")xs(e,""+o);else return;break;case"onScroll":o!=null&&Mt("scroll",e);return;case"onScrollEnd":o!=null&&Mt("scrollend",e);return;case"onClick":o!=null&&(e.onclick=Zi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Sn.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),f=a.slice(2,c?a.length-7:void 0),n=e[H]||null,n=n!=null?n[a]:null,typeof n=="function"&&e.removeEventListener(f,n,c),typeof o=="function")){typeof n!="function"&&n!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(f,o,c);break e}_t=!0,a in e?e[a]=o:o===!0?e.setAttribute(a,""):$t(e,a,o)}return}_t=!0}function Fn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Mt("error",e),Mt("load",e);var o=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:qt(e,n,f,y,a,null)}}c&&qt(e,n,"srcSet",a.srcSet,a,null),o&&qt(e,n,"src",a.src,a,null);return;case"input":Mt("invalid",e);var R=f=y=c=null,B=null,ee=null;for(o in a)if(a.hasOwnProperty(o)){var fe=a[o];if(fe!=null)switch(o){case"name":c=fe;break;case"type":y=fe;break;case"checked":B=fe;break;case"defaultChecked":ee=fe;break;case"value":f=fe;break;case"defaultValue":R=fe;break;case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(r(137,n));break;default:qt(e,n,o,fe,a,null)}}i0(e,f,R,B,ee,y,c,!1);return;case"select":Mt("invalid",e),o=y=f=null;for(c in a)if(a.hasOwnProperty(c)&&(R=a[c],R!=null))switch(c){case"value":f=R;break;case"defaultValue":y=R;break;case"multiple":o=R;default:qt(e,n,c,R,a,null)}n=f,a=y,e.multiple=!!o,n!=null?gs(e,!!o,n,!1):a!=null&&gs(e,!!o,a,!0);return;case"textarea":Mt("invalid",e),f=c=o=null;for(y in a)if(a.hasOwnProperty(y)&&(R=a[y],R!=null))switch(y){case"value":o=R;break;case"defaultValue":c=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:qt(e,n,y,R,a,null)}r0(e,o,c,f);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(o=a[B],o!=null))switch(B){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:qt(e,n,B,o,a,null)}return;case"dialog":Mt("beforetoggle",e),Mt("toggle",e),Mt("cancel",e),Mt("close",e);break;case"iframe":case"object":Mt("load",e);break;case"video":case"audio":for(o=0;o<hl.length;o++)Mt(hl[o],e);break;case"image":Mt("error",e),Mt("load",e);break;case"details":Mt("toggle",e);break;case"embed":case"source":case"link":Mt("error",e),Mt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ee in a)if(a.hasOwnProperty(ee)&&(o=a[ee],o!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:qt(e,n,ee,o,a,null)}return;default:if(Ef(n)){for(fe in a)a.hasOwnProperty(fe)&&(o=a[fe],o!==void 0&&Sh(e,n,fe,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&qt(e,n,R,o,a,null))}var wE={};function RE(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,y=null,R=null,B=null,ee=null,fe=null;for(le in a){var be=a[le];if(a.hasOwnProperty(le)&&be!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":B=be;default:o.hasOwnProperty(le)||qt(e,n,le,null,o,be)}}for(var Z in o){var le=o[Z];if(be=a[Z],o.hasOwnProperty(Z)&&(le!=null||be!=null))switch(Z){case"type":le!==be&&(_t=!0),f=le;break;case"name":le!==be&&(_t=!0),c=le;break;case"checked":le!==be&&(_t=!0),ee=le;break;case"defaultChecked":le!==be&&(_t=!0),fe=le;break;case"value":le!==be&&(_t=!0),y=le;break;case"defaultValue":le!==be&&(_t=!0),R=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,n));break;default:le!==be&&qt(e,n,Z,le,o,be)}}Sf(e,y,R,B,ee,fe,f,c);return;case"select":le=y=R=Z=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":le=B;default:o.hasOwnProperty(f)||qt(e,n,f,null,o,B)}for(c in o)if(f=o[c],B=a[c],o.hasOwnProperty(c)&&(f!=null||B!=null))switch(c){case"value":f!==B&&(_t=!0),Z=f;break;case"defaultValue":f!==B&&(_t=!0),R=f;break;case"multiple":f!==B&&(_t=!0),y=f;default:f!==B&&qt(e,n,c,f,o,B)}n=R,a=y,o=le,Z!=null?gs(e,!!a,Z,!1):!!o!=!!a&&(n!=null?gs(e,!!a,n,!0):gs(e,!!a,a?[]:"",!1));return;case"textarea":le=Z=null;for(R in a)if(c=a[R],a.hasOwnProperty(R)&&c!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:qt(e,n,R,null,o,c)}for(y in o)if(c=o[y],f=a[y],o.hasOwnProperty(y)&&(c!=null||f!=null))switch(y){case"value":c!==f&&(_t=!0),Z=c;break;case"defaultValue":c!==f&&(_t=!0),le=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&qt(e,n,y,c,o,f)}a0(e,Z,le);return;case"option":for(var Pe in a)if(Z=a[Pe],a.hasOwnProperty(Pe)&&Z!=null&&!o.hasOwnProperty(Pe))switch(Pe){case"selected":e.selected=!1;break;default:qt(e,n,Pe,null,o,Z)}for(B in o)if(Z=o[B],le=a[B],o.hasOwnProperty(B)&&Z!==le&&(Z!=null||le!=null))switch(B){case"selected":Z!==le&&(_t=!0),e.selected=Z&&typeof Z!="function"&&typeof Z!="symbol";break;default:qt(e,n,B,Z,o,le)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Je in a)Z=a[Je],a.hasOwnProperty(Je)&&Z!=null&&!o.hasOwnProperty(Je)&&qt(e,n,Je,null,o,Z);for(ee in o)if(Z=o[ee],le=a[ee],o.hasOwnProperty(ee)&&Z!==le&&(Z!=null||le!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(r(137,n));break;default:qt(e,n,ee,Z,o,le)}return;default:if(Ef(n)){for(var pt in a)Z=a[pt],a.hasOwnProperty(pt)&&Z!==void 0&&!o.hasOwnProperty(pt)&&Sh(e,n,pt,void 0,o,Z);for(fe in o)Z=o[fe],le=a[fe],!o.hasOwnProperty(fe)||Z===le||Z===void 0&&le===void 0||Sh(e,n,fe,Z,o,le);return}}for(var $ in a)Z=a[$],a.hasOwnProperty($)&&Z!=null&&!o.hasOwnProperty($)&&qt(e,n,$,null,o,Z);for(be in o)Z=o[be],le=a[be],!o.hasOwnProperty(be)||Z===le||Z==null&&le==null||qt(e,n,be,Z,o,le)}function hv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function CE(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var c=a[o],f=c.transferSize,y=c.initiatorType,R=c.duration;if(f&&R&&hv(y)){for(y=0,R=c.responseEnd,o+=1;o<a.length;o++){var B=a[o],ee=B.startTime;if(ee>R)break;var fe=B.transferSize,be=B.initiatorType;fe&&hv(be)&&(B=B.responseEnd,y+=fe*(B<R?1:(R-ee)/(B-ee)))}if(--o,n+=8*(f+y)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var bh=null,Eh=null;function ml(e){return e.nodeType===9?e:e.ownerDocument}function pv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function mv(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function gv(e,n,a,o){return a=ml(a).createElement(e),a[w]=o,a[H]=n,Fn(a,e,n),vt(a),a}function Mh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Th=null;function NE(){var e=window.event;return e&&e.type==="popstate"?e===Th?!1:(Th=e,!0):(Th=null,!1)}var Ah=typeof setTimeout=="function"?setTimeout:void 0,DE=typeof clearTimeout=="function"?clearTimeout:void 0,xv=typeof Promise=="function"?Promise:void 0,vv=typeof requestAnimationFrame=="function"?requestAnimationFrame:Ah,UE=typeof queueMicrotask=="function"?queueMicrotask:typeof xv<"u"?function(e){return xv.resolve(null).then(e).catch(LE)}:Ah;function LE(e){setTimeout(function(){throw e})}function xr(e){return e==="head"}function _v(e,n){var a=n,o=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(c),eo(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Fh(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Fh(a);for(var f=a.firstChild;f;){var y=f.nextSibling,R=f.nodeName;f[Fe]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=y}}else a==="body"&&Fh(e.ownerDocument.body);a=c}while(a);eo(n)}function yv(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Sv(e,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,e.style.viewTransitionName=n,a!=null&&(e.style.viewTransitionClass=a),a=getComputedStyle(e),a.display==="inline"){if(n=e.getClientRects(),n.length===1)var o=1;else for(var c=o=0;c<n.length;c++){var f=n[c];0<f.width&&0<f.height&&o++}o===1&&(e=e.style,e.display=n.length===1?"inline-block":"block",e.marginTop="-"+a.paddingTop,e.marginBottom="-"+a.paddingBottom)}}function bv(e,n){e=e.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;e.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,e.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),e.display==="inline-block"&&(n==null?e.display=e.margin="":(a=n.display,e.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?e.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],e.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],e.marginBottom=n==null||typeof n=="boolean"?"":n)))}function FE(e,n,a){return a=a.ownerDocument.defaultView,{rect:e,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=a.innerHeight&&e.left<=a.innerWidth}}function wh(e){var n=e.getBoundingClientRect(),a=getComputedStyle(e);return FE(n,a,e)}function PE(e){return e.documentElement.clientHeight}function OE(e){this.addEventListener("load",e),this.addEventListener("error",e)}function BE(e,n,a,o,c,f,y,R,B){var ee=n.nodeType===9?n:n.ownerDocument;try{var fe=ee.startViewTransition({update:function(){var Z=ee.defaultView,le=Z.navigation&&Z.navigation.transition,Pe=ee.fonts.status;o();var Je=[];if(Pe==="loaded"&&(PE(ee),ee.fonts.status==="loading"&&Je.push(ee.fonts.ready)),Pe=Je.length,e!==null)for(var pt=e.suspenseyImages,$=0,G=0;G<pt.length;G++){var ie=pt[G];if(!ie.complete){var Se=ie.getBoundingClientRect();if(0<Se.bottom&&0<Se.right&&Se.top<Z.innerHeight&&Se.left<Z.innerWidth){if($+=kv(ie),$>lu){Je.length=Pe;break}ie=new Promise(OE.bind(ie)),Je.push(ie)}}}if(0<Je.length)return Z=Promise.race([Promise.all(Je),new Promise(function(Ze){return setTimeout(Ze,500)})]).then(c,c),(le?Promise.allSettled([le.finished,Z]):Z).then(f,f);if(c(),le)return le.finished.then(f,f);f()},types:a});ee.__reactViewTransition=fe;var be=[];return fe.ready.then(function(){for(var Z=ee.documentElement.getAnimations({subtree:!0}),le=0;le<Z.length;le++){var Pe=Z[le],Je=Pe.effect,pt=Je.pseudoElement;if(pt!=null&&pt.startsWith("::view-transition")){be.push(Pe),Pe=Je.getKeyframes();for(var $=pt=void 0,G=!0,ie=0;ie<Pe.length;ie++){var Se=Pe[ie],Ze=Se.width;if(pt===void 0)pt=Ze;else if(pt!==Ze){G=!1;break}if(Ze=Se.height,$===void 0)$=Ze;else if($!==Ze){G=!1;break}delete Se.width,delete Se.height,Se.transform==="none"&&delete Se.transform}G&&pt!==void 0&&$!==void 0&&(Je.setKeyframes(Pe),G=getComputedStyle(Je.target,Je.pseudoElement),G.width!==pt||G.height!==$)&&(G=Pe[0],G.width=pt,G.height=$,G=Pe[Pe.length-1],G.width=pt,G.height=$,Je.setKeyframes(Pe))}}y()},function(Z){ee.__reactViewTransition===fe&&(ee.__reactViewTransition=null);try{if(typeof Z=="object"&&Z!==null)switch(Z.name){case"InvalidStateError":(Z.message==="View transition was skipped because document visibility state is hidden."||Z.message==="Skipping view transition because document visibility state has become hidden."||Z.message==="Skipping view transition because viewport size changed."||Z.message==="Transition was aborted because of invalid state")&&(Z=null)}Z!==null&&B(Z)}finally{o(),c(),y()}}),fe.finished.finally(function(){for(var Z=0;Z<be.length;Z++)be[Z].cancel();ee.__reactViewTransition===fe&&(ee.__reactViewTransition=null),R()}),fe}catch{return o(),c(),y(),null}}function es(e,n){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+n+")"}es.prototype.animate=function(e,n){return n=typeof n=="number"?{duration:n}:O({},n),n.pseudoElement=this._selector,this._scope.animate(e,n)},es.prototype.getAnimations=function(){for(var e=this._scope,n=this._selector,a=e.getAnimations({subtree:!0}),o=[],c=0;c<a.length;c++){var f=a[c].effect;f!==null&&f.target===e&&f.pseudoElement===n&&o.push(a[c])}return o},es.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Ev(e){return{name:e,group:new es("group",e),imagePair:new es("image-pair",e),old:new es("old",e),new:new es("new",e)}}function fi(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}fi.prototype.addEventListener=function(e,n,a){var o=null,c=null;if(!(a!=null&&typeof a!="boolean"&&(o=a.signal||null,o!==null&&o.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var f=this._eventListeners;if(Tv(f,e,n,a)===-1){var y=this,R=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(R=function(B){y.removeEventListener(e,n,a),typeof n=="function"?n.call(this,B):n.handleEvent(B)}),o!==null&&(c=y.removeEventListener.bind(y,e,n,a),o.addEventListener("abort",c,{once:!0}),c=o.removeEventListener.bind(o,"abort",c)),o=Ys(a),f.push({type:e,listener:n,optionsOrUseCapture:a,attachedListener:R,cleanup:c}),x(this._fragmentFiber.child,!1,IE,e,R,o)}this._eventListeners=f}};function IE(e,n,a,o){return b(e).addEventListener(n,a,o),!1}fi.prototype.removeEventListener=function(e,n,a){var o=this._eventListeners;if(o!==null&&(n=Tv(o,e,n,a),n!==-1)){var c=o[n];a=c.attachedListener;var f=c.cleanup;c=Ys(c.optionsOrUseCapture),x(this._fragmentFiber.child,!1,zE,e,a,c),o.splice(n,1),f!==null&&f()}};function zE(e,n,a,o){return b(e).removeEventListener(n,a,o),!1}function Ys(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Mv(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function Tv(e,n,a,o){if(e.length===0)return-1;o=Mv(o);for(var c=0;c<e.length;c++){var f=e[c];if(f.type===n&&f.listener===a&&Mv(f.optionsOrUseCapture)===o)return c}return-1}fi.prototype.dispatchEvent=function(e){var n=v(this._fragmentFiber);if(n===null)return!0;n=b(n);var a=this._eventListeners;if(a!==null&&0<a.length||!e.bubbles){var o=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var c=0;c<a.length;c++){var f=a[c];o.addEventListener(f.type,f.attachedListener,Ys(f.optionsOrUseCapture))}if(n.appendChild(o),e=o.dispatchEvent(e),a)for(c=0;c<a.length;c++)f=a[c],o.removeEventListener(f.type,f.attachedListener,Ys(f.optionsOrUseCapture));return n.removeChild(o),e}return n.dispatchEvent(e)},fi.prototype.focus=function(e){x(this._fragmentFiber.child,!0,Av,e,void 0,void 0)};function Av(e,n){return e.tag===6?!1:(e=b(e),QE(e,n))}fi.prototype.focusLast=function(e){var n=[];x(this._fragmentFiber.child,!0,Rh,n,void 0,void 0);for(var a=n.length-1;0<=a&&!Av(n[a],e);a--);};function Rh(e,n){return n.push(e),!1}fi.prototype.blur=function(){var e=v(this._fragmentFiber);e!==null&&(e=b(e),e=ml(e).activeElement,e!==null&&x(this._fragmentFiber.child,!1,HE,e,void 0,void 0))};function HE(e,n){return e.tag===6?!1:(e=b(e),e===n||e.contains(n)?(n.blur(),!0):!1)}fi.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),x(this._fragmentFiber.child,!1,GE,e,void 0,void 0)};function GE(e,n){return e.tag===6||(e=b(e),n.observe(e)),!1}fi.prototype.unobserveUsing=function(e){var n=this._observers;if(n!==null&&n.has(e)){n.delete(e),x(this._fragmentFiber.child,!1,VE,e,void 0,void 0);for(var a=n=0;a<Pi.length;a++){var o=Pi[a];o.fragmentInstance===this&&o.observer===e?e.unobserve(o.instance):Pi[n++]=o}Pi.length=n}};function VE(e,n){return e.tag===6||(e=b(e),n.unobserve(e)),!1}var Pi=[],Ch=!1;function kE(e,n,a){Pi.push({fragmentInstance:e,observer:n,instance:a}),Ch||(Ch=!0,JE(function(){Ch=!1;var o=Pi;Pi=[];for(var c=0;c<o.length;c++){var f=o[c];f.observer.unobserve(f.instance)}}))}fi.prototype.getClientRects=function(){var e=[];return x(this._fragmentFiber.child,!1,jE,e,void 0,void 0),e};function jE(e,n){if(e.tag===6){e=e.stateNode;var a=e.ownerDocument.createRange();a.selectNodeContents(e),n.push.apply(n,a.getClientRects())}else e=b(e),n.push.apply(n,e.getClientRects());return!1}fi.prototype.getRootNode=function(e){var n=v(this._fragmentFiber);return n===null?this:b(n).getRootNode(e)},fi.prototype.compareDocumentPosition=function(e){var n=v(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];x(this._fragmentFiber.child,!1,Rh,a,void 0,void 0);var o=b(n);if(a.length===0){if(a=o,E(this._fragmentFiber)){e:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break e}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var c=o=a.compareDocumentPosition(e);return a===e?c=Node.DOCUMENT_POSITION_CONTAINS:o&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=T(n)[1],a===null?c=Node.DOCUMENT_POSITION_PRECEDING:(e=b(a).compareDocumentPosition(e),c=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),c|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=b(a[0]),c=b(a[a.length-1]);var f=E(this._fragmentFiber)?n.parentElement:o;if(f==null)return Node.DOCUMENT_POSITION_DISCONNECTED;o=f.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,f=f.compareDocumentPosition(c)&Node.DOCUMENT_POSITION_CONTAINED_BY;var y=n.compareDocumentPosition(e),R=c.compareDocumentPosition(e),B=y&Node.DOCUMENT_POSITION_CONTAINED_BY||R&Node.DOCUMENT_POSITION_CONTAINED_BY;return R=o&&f&&y&Node.DOCUMENT_POSITION_FOLLOWING&&R&Node.DOCUMENT_POSITION_PRECEDING,n=o&&n===e||f&&c===e||B||R?Node.DOCUMENT_POSITION_CONTAINED_BY:!o&&n===e||!f&&c===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:y,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||XE(n,this._fragmentFiber,a[0],a[a.length-1],e)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function XE(e,n,a,o,c){var f=st(c);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!f)e:{for(;f!==null;){if(f.tag===7&&(f===n||f.alternate===n)){a=!0;break e}f=f.return}a=!1}return a}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(f===null)return f=c.ownerDocument,c===f||c===f.documentElement||c===f.body;e:{for(f=n,n=v(n);f!==null;){if(!(f.tag!==5&&f.tag!==3&&f.tag!==27||f!==n&&f.alternate!==n)){f=!0;break e}f=f.return}f=!1}return f}return e&Node.DOCUMENT_POSITION_PRECEDING?((n=!!f)&&!(n=f===a)&&(n=L(a,f,D),n===null?n=!1:(x(n,!0,I,f,a),f=S,S=null,n=f!==null)),n):e&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!f)&&!(n=f===o)&&(n=L(o,f,D),n===null?n=!1:(x(n,!0,N,f,o),f=S,U=S=null,n=f!==null)),n):!1}function wv(e,n){var a=e.ownerDocument.createRange();a.selectNodeContents(e),e=a.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,n?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}fi.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(r(566));var n=[];x(this._fragmentFiber.child,!1,Rh,n,void 0,void 0);var a=e!==!1;if(n.length===0){var o=T(this._fragmentFiber);if(o=a?o[1]||o[0]||v(this._fragmentFiber):o[0]||o[1],o===null)return;if(o.tag===6){e=b(o),wv(e,a);return}if(o=b(o),o.nodeType!==9){if(o.nodeType===11){a="host"in o?o.host:null,a!==null&&a.scrollIntoView(e);return}o.scrollIntoView(e)}}for(o=a?n.length-1:0;o!==(a?-1:n.length);){var c=n[o];c.tag===6?(c=b(c),wv(c,a)):b(c).scrollIntoView(e),o+=a?-1:1}};function WE(e,n){return e=b(e),Rv(e,n),!1}function Rv(e,n){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(n)}function Cv(e,n){var a=n._eventListeners;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o];e.addEventListener(c.type,c.attachedListener,Ys(c.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){for(var y=0,R=0;R<Pi.length;R++){var B=Pi[R];(B.fragmentInstance!==n||B.observer!==f||B.instance!==e)&&(Pi[y++]=B)}Pi.length=y,f.observe(e)}),Rv(e,n))}function qE(e,n){var a=n._eventListeners;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o];e.removeEventListener(c.type,c.attachedListener,Ys(c.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){typeof f.rootMargin=="string"?kE(n,f,e):f.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(n))}function Nh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Nh(a),Qe(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function YE(e,n,a,o){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Fe])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Ei(e.nextSibling),e===null)break}return null}function ZE(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ei(e.nextSibling),e===null))return null;return e}function Nv(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ei(e.nextSibling),e===null))return null;return e}function Dh(e){return e.data==="$?"||e.data==="$~"}function Uh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function KE(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Ei(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Lh=null;function Dv(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Ei(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Uv(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function QE(e,n){function a(){o=!0}if(e.ownerDocument.activeElement===e)return!0;var o=!1;try{e.ownerDocument.addEventListener("focus",a,!0),(e.focus||HTMLElement.prototype.focus).call(e,n)}finally{e.ownerDocument.removeEventListener("focus",a,!0)}return o}function JE(e){vv(function(){vv(function(n){return e(n)})})}function Lv(e,n,a){switch(n=ml(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Fv(e,n,a){for(var o in a){var c=a[o];a.hasOwnProperty(o)&&c!=null&&qt(e,n,o,null,wE,c)}a.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Zi&&(e.onclick=null),Qe(e)}function Fh(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Qe(e)}var Mi=new Map,Pv=new Set;function gl(e){if(typeof e.getRootNode=="function"){var n=e.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return e.nodeType===9?e:e.ownerDocument}var Ua=Ce.d;Ce.d={f:$E,r:e1,D:t1,C:n1,L:i1,m:a1,X:s1,S:r1,M:o1};function $E(){var e=Ua.f(),n=$c();return e||n}function e1(e){var n=ft(e);n!==null&&n.tag===5&&n.type==="form"?Bg(n):Ua.r(e)}var Zs=typeof document>"u"?null:document;function Ov(e,n,a){var o=Zs;if(o&&typeof n=="string"&&n){var c=gi(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Pv.has(c)||(Pv.add(c),e={rel:e,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),Fn(n,"link",e),vt(n),o.head.appendChild(n)))}}function t1(e){Ua.D(e),Ov("dns-prefetch",e,null)}function n1(e,n){Ua.C(e,n),Ov("preconnect",e,n)}function i1(e,n,a){Ua.L(e,n,a);var o=Zs;if(o&&e&&n){var c='link[rel="preload"][as="'+gi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+gi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+gi(a.imageSizes)+'"]')):c+='[href="'+gi(e)+'"]';var f=c;switch(n){case"style":f=Ks(e);break;case"script":f=Qs(e)}if(!(Mi.has(f)||(e=O({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Mi.set(f,e),o.querySelector(c)!==null||n==="style"&&o.querySelector(xl(f))||n==="script"&&o.querySelector(vl(f))))){var y=o.createElement("link");Fn(y,"link",e),n==="style"&&(y[Ke]=!0,y.onload=y.onerror=function(){Kt(y)}),vt(y),o.head.appendChild(y)}}}function a1(e,n){Ua.m(e,n);var a=Zs;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+gi(o)+'"][href="'+gi(e)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Qs(e)}if(!Mi.has(f)&&(e=O({rel:"modulepreload",href:e},n),Mi.set(f,e),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(vl(f)))return}o=a.createElement("link"),Fn(o,"link",e),vt(o),a.head.appendChild(o)}}}function r1(e,n,a){Ua.S(e,n,a);var o=Zs;if(o&&e){var c=bt(o).hoistableStyles,f=Ks(e);n=n||"default";var y=c.get(f);if(!y){var R={loading:0,preload:null};if(y=o.querySelector(xl(f)))R.loading=5;else{e=O({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Mi.get(f))&&Ph(e,a);var B=y=o.createElement("link");vt(B),Fn(B,"link",e),B._p=new Promise(function(ee,fe){B.onload=ee,B.onerror=fe}),B.addEventListener("load",function(){R.loading|=1}),B.addEventListener("error",function(){R.loading|=2}),R.loading|=4,su(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:R},c.set(f,y)}}}function s1(e,n){Ua.X(e,n);var a=Zs;if(a&&e){var o=bt(a).hoistableScripts,c=Qs(e),f=o.get(c);f||(f=a.querySelector(vl(c)),f||(e=O({src:e,async:!0},n),(n=Mi.get(c))&&Oh(e,n),f=a.createElement("script"),vt(f),Fn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function o1(e,n){Ua.M(e,n);var a=Zs;if(a&&e){var o=bt(a).hoistableScripts,c=Qs(e),f=o.get(c);f||(f=a.querySelector(vl(c)),f||(e=O({src:e,async:!0,type:"module"},n),(n=Mi.get(c))&&Oh(e,n),f=a.createElement("script"),vt(f),Fn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function Bv(e,n,a,o){var c=(c=Ot.current)?gl(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Ks(a.href),n=bt(c).hoistableStyles,o=n.get(a),o||(o={type:"style",instance:null,count:0,state:null},n.set(a,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ks(a.href);var f=bt(c).hoistableStyles,y=f.get(e);if(y||(c=c.ownerDocument||c,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,y),(f=c.querySelector(xl(e)))?f._p||(y.instance=f,y.state.loading=5):(f=Mi.get(e),f||(f={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Mi.set(e,f)),l1(c,e,f,y.state))),n&&o===null)throw Error(r(528,""));return y}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Qs(a),n=bt(c).hoistableScripts,o=n.get(a),o||(o={type:"script",instance:null,count:0,state:null},n.set(a,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Ks(e){return'href="'+gi(e)+'"'}function xl(e){return'link[rel="stylesheet"]['+e+"]"}function Iv(e){return O({},e,{"data-precedence":e.precedence,precedence:null})}function l1(e,n,a,o){if(n=e.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Ke]!==!0){o.loading=1;return}}else n=e.createElement("link"),n[Ke]=!0,n.onload=n.onerror=Kt.bind(null,n),Fn(n,"link",a),vt(n),e.head.appendChild(n);o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2})}function Qs(e){return'[src="'+gi(e)+'"]'}function vl(e){return"script[async]"+e}function zv(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+gi(a.href)+'"]');if(o)return n.instance=o,vt(o),o;var c=O({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),vt(o),Fn(o,"style",c),su(o,a.precedence,e),n.instance=o;case"stylesheet":c=Ks(a.href);var f=e.querySelector(xl(c));if(f)return n.state.loading|=4,n.instance=f,vt(f),f;o=Iv(a),(c=Mi.get(c))&&Ph(o,c),f=(e.ownerDocument||e).createElement("link"),vt(f);var y=f;return y._p=new Promise(function(R,B){y.onload=R,y.onerror=B}),Fn(f,"link",o),n.state.loading|=4,su(f,a.precedence,e),n.instance=f;case"script":return f=Qs(a.src),(c=e.querySelector(vl(f)))?(n.instance=c,vt(c),c):(o=a,(c=Mi.get(f))&&(o=O({},a),Oh(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),vt(c),Fn(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,su(o,a.precedence,e));return n.instance}function su(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,y=0;y<o.length;y++){var R=o[y];if(R.dataset.precedence===n)f=R;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Ph(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Oh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var ou=null;function Hv(e,n,a){if(ou===null){var o=new Map,c=ou=new Map;c.set(a,o)}else c=ou,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[Fe]||f[w]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=e+y;var R=o.get(y);R?R.push(f):o.set(y,[f])}}return o}function Bh(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function c1(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Gv(e,n){return e==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function Vv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function kv(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function jv(e,n){typeof n.decode=="function"&&(e.imgCount++,n.complete||(e.imgBytes+=kv(n),e.suspenseyImages.push(n)),e=d1.bind(e),n.decode().then(e,e))}function u1(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=Ks(o.href),f=n.querySelector(xl(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=_l.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,vt(f);return}f=n.ownerDocument||n,o=Iv(o),(c=Mi.get(c))&&Ph(o,c),f=f.createElement("link"),vt(f);var y=f;y._p=new Promise(function(R,B){y.onload=R,y.onerror=B}),Fn(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=_l.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var lu=0;function f1(e,n){return e.stylesheets&&e.count===0&&uu(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&uu(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&lu===0&&(lu=62500*CE());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&uu(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>lu?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(c)}}:null}function Xv(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)uu(e,e.stylesheets);else if(e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}}}function _l(){this.count--,Xv(this)}function d1(){this.imgCount--,Xv(this)}var cu=null;function uu(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,cu=new Map,n.forEach(h1,e),cu=null,_l.call(e))}function h1(e,n){if(!(n.state.loading&4)){var a=cu.get(e);if(a)var o=a.get(null);else{a=new Map,cu.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var y=c[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}c=n.instance,y=c.getAttribute("data-precedence"),f=a.get(y)||o,f===o&&a.set(null,c),a.set(y,c),this.count++,o=_l.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Js={$$typeof:k,Provider:null,Consumer:null,_currentValue:kt,_currentValue2:kt,_threadCount:0};function p1(e,n,a,o,c,f,y,R,B){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ms(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ms(0),this.hiddenUpdates=ms(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.transitionTypes=null,this.incompleteTransitions=new Map}function Wv(e,n,a,o,c,f,y,R,B,ee,fe,be){return e=new p1(e,n,a,y,B,ee,fe,be,R),n=1,f===!0&&(n|=24),f=Yn(3,null,null,n),e.current=f,f.stateNode=e,n=Jf(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},nd(f),e}function qv(e){return e?(e=Ms,e):Ms}function Yv(e,n,a,o,c,f){c=qv(c),o.context===null?o.context=c:o.pendingContext=c,o=rr(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=sr(e,o,n),a!==null&&(Jn(a,e,n),Ko(a,e,n))}function Zv(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Ih(e,n){Zv(e,n),(e=e.alternate)&&Zv(e,n)}function Kv(e){if(e.tag===13||e.tag===31){var n=Br(e,67108864);n!==null&&Jn(n,e,67108864),Ih(e,67108864)}}function Qv(e){if(e.tag===13||e.tag===31){var n=ui();n=Lo(n);var a=Br(e,n);a!==null&&Jn(a,e,n),Ih(e,n)}}var $s=!0;function m1(e,n,a,o){var c=ye.T;ye.T=null;var f=Ce.p;try{Ce.p=2,zh(e,n,a,o)}finally{Ce.p=f,ye.T=c}}function g1(e,n,a,o){var c=ye.T;ye.T=null;var f=Ce.p;try{Ce.p=8,zh(e,n,a,o)}finally{Ce.p=f,ye.T=c}}function zh(e,n,a,o){if($s){var c=Hh(o);if(c===null)yh(e,n,o,fu,a),$v(e,o);else if(v1(c,e,n,a,o))o.stopPropagation();else if($v(e,o),n&4&&-1<x1.indexOf(e)){for(;c!==null;){var f=ft(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=va(f.pendingLanes);if(y!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;y;){var B=1<<31-ut(y);R.entanglements[1]|=B,y&=~B}ra(f),(zt&6)===0&&(Kc=Xe()+500,dl(0))}}break;case 31:case 13:R=Br(f,2),R!==null&&Jn(R,f,2),$c(),Ih(f,2)}if(f=Hh(o),f===null&&yh(e,n,o,fu,a),f===c)break;c=f}c!==null&&o.stopPropagation()}else yh(e,n,o,null,a)}}function Hh(e){return e=Tf(e),Gh(e)}var fu=null;function Gh(e){if(fu=null,e=st(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return fu=e,null}function Jv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(it()){case ct:return 2;case X:return 8;case Ne:case Ee:return 32;case Le:return 268435456;default:return 32}default:return 32}}var Vh=!1,vr=null,_r=null,yr=null,yl=new Map,Sl=new Map,Sr=[],x1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $v(e,n){switch(e){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":_r=null;break;case"mouseover":case"mouseout":yr=null;break;case"pointerover":case"pointerout":yl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sl.delete(n.pointerId)}}function bl(e,n,a,o,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},n!==null&&(n=ft(n),n!==null&&Kv(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function v1(e,n,a,o,c){switch(n){case"focusin":return vr=bl(vr,e,n,a,o,c),!0;case"dragenter":return _r=bl(_r,e,n,a,o,c),!0;case"mouseover":return yr=bl(yr,e,n,a,o,c),!0;case"pointerover":var f=c.pointerId;return yl.set(f,bl(yl.get(f)||null,e,n,a,o,c)),!0;case"gotpointercapture":return f=c.pointerId,Sl.set(f,bl(Sl.get(f)||null,e,n,a,o,c)),!0}return!1}function e_(e){var n=st(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Ql(e.priority,function(){Qv(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Ql(e.priority,function(){Qv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function du(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Hh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Mf=o,a.target.dispatchEvent(o),Mf=null}else return n=ft(a),n!==null&&Kv(n),e.blockedOn=a,!1;n.shift()}return!0}function t_(e,n,a){du(e)&&a.delete(n)}function _1(){Vh=!1,vr!==null&&du(vr)&&(vr=null),_r!==null&&du(_r)&&(_r=null),yr!==null&&du(yr)&&(yr=null),yl.forEach(t_),Sl.forEach(t_)}function hu(e,n){e.blockedOn===n&&(e.blockedOn=null,Vh||(Vh=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,_1)))}var pu=null;function n_(e){pu!==e&&(pu=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){pu===e&&(pu=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if(Gh(o||a)===null)continue;break}var f=ft(a);f!==null&&(e.splice(n,3),n-=3,Ed(f,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function eo(e){function n(B){return hu(B,e)}vr!==null&&hu(vr,e),_r!==null&&hu(_r,e),yr!==null&&hu(yr,e),yl.forEach(n),Sl.forEach(n);for(var a=0;a<Sr.length;a++){var o=Sr[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Sr.length&&(a=Sr[0],a.blockedOn===null);)e_(a),a.blockedOn===null&&Sr.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],f=a[o+1],y=c[H]||null;if(typeof f=="function")y||n_(a);else if(y){var R=null;if(f&&f.hasAttribute("formAction")){if(c=f,y=f[H]||null)R=y.formAction;else if(Gh(c)!==null)continue}else R=y.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),n_(a)}}}function i_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(y){return c=y})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function kh(e){this._internalRoot=e}mu.prototype.render=kh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=ui();Yv(a,o,e,n,null,null)},mu.prototype.unmount=kh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Yv(e.current,2,null,e,null,null),$c(),n[de]=null}};function mu(e){this._internalRoot=e}mu.prototype.unstable_scheduleHydration=function(e){if(e){var n=Kl();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Sr.length&&n!==0&&n<Sr[a].priority;a++);Sr.splice(a,0,e),a===0&&e_(e)}};var a_=t.version;if(a_!=="19.3.0")throw Error(r(527,a_,"19.3.0"));Ce.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var y1={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:ye,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gu.isDisabled&&gu.supportsFiber)try{$e=gu.inject(y1),ke=gu}catch{}}return Ml.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",c=qg,f=Yg,y=Zg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=Wv(e,1,!1,null,null,a,o,null,c,f,y,i_),e[de]=n.current,_h(e),new kh(n)},Ml.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,c="",f=qg,y=Yg,R=Zg,B=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=Wv(e,1,!0,n,a??null,o,c,B,f,y,R,i_),n.context=qv(null),a=n.current,o=ui(),o=Lo(o),c=rr(o),c.callback=null,sr(a,c,o),a=o,n.current.lanes=a,qi(n,a),ra(n),e[de]=n.current,_h(e),new mu(n)},Ml.version="19.3.0",Ml}var p_;function N1(){if(p_)return Wh.exports;p_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Wh.exports=C1(),Wh.exports}var D1=N1();/**
 * react-router v7.18.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Nm=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,yy=/^[\\/]{2}/;function U1(s,t){return t+s.replace(/\\/g,"/")}var m_="popstate";function g_(s){return typeof s=="object"&&s!=null&&"pathname"in s&&"search"in s&&"hash"in s&&"state"in s&&"key"in s}function L1(s={}){function t(r,l){var m;let u=(m=l.state)==null?void 0:m.masked,{pathname:d,search:h,hash:p}=u||r.location;return Fp("",{pathname:d,search:h,hash:p},l.state&&l.state.usr||null,l.state&&l.state.key||"default",u?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function i(r,l){return typeof l=="string"?l:So(l)}return P1(t,i,null,s)}function on(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function da(s,t){if(!s){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function F1(){return Math.random().toString(36).substring(2,10)}function x_(s,t){return{usr:s.state,key:s.key,idx:t,masked:s.mask?{pathname:s.pathname,search:s.search,hash:s.hash}:void 0}}function Fp(s,t,i=null,r,l){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof t=="string"?To(t):t,state:i,key:t&&t.key||r||F1(),mask:l}}function So({pathname:s="/",search:t="",hash:i=""}){return t&&t!=="?"&&(s+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function To(s){let t={};if(s){let i=s.indexOf("#");i>=0&&(t.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(t.search=s.substring(r),s=s.substring(0,r)),s&&(t.pathname=s)}return t}function P1(s,t,i,r={}){let{window:l=document.defaultView,v5Compat:u=!1}=r,d=l.history,h="POP",p=null,m=_();m==null&&(m=0,d.replaceState({...d.state,idx:m},""));function _(){return(d.state||{idx:null}).idx}function x(){h="POP";let b=_(),S=b==null?null:b-m;m=b,p&&p({action:h,location:C.location,delta:S})}function v(b,S){h="PUSH";let U=g_(b)?b:Fp(C.location,b,S);m=_()+1;let I=x_(U,m),N=C.createHref(U.mask||U);try{d.pushState(I,"",N)}catch(D){if(D instanceof DOMException&&D.name==="DataCloneError")throw D;l.location.assign(N)}u&&p&&p({action:h,location:C.location,delta:1})}function E(b,S){h="REPLACE";let U=g_(b)?b:Fp(C.location,b,S);m=_();let I=x_(U,m),N=C.createHref(U.mask||U);d.replaceState(I,"",N),u&&p&&p({action:h,location:C.location,delta:0})}function T(b){return O1(l,b)}let C={get action(){return h},get location(){return s(l,d)},listen(b){if(p)throw new Error("A history only accepts one active listener");return l.addEventListener(m_,x),p=b,()=>{l.removeEventListener(m_,x),p=null}},createHref(b){return t(l,b)},createURL:T,encodeLocation(b){let S=T(b);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:v,replace:E,go(b){return d.go(b)}};return C}function O1(s,t,i=!1){let r="http://localhost";s&&(r=s.location.origin!=="null"?s.location.origin:s.location.href),on(r,"No window.location.(origin|href) available to create URL");let l=typeof t=="string"?t:So(t);return l=l.replace(/ $/,"%20"),!i&&yy.test(l)&&(l=r+l),new URL(l,r)}function Sy(s,t,i="/"){return B1(s,t,i,!1)}function B1(s,t,i,r,l){let u=typeof t=="string"?To(t):t,d=ja(u.pathname||"/",i);if(d==null)return null;let h=I1(s),p=null,m=Z1(d);for(let _=0;p==null&&_<h.length;++_)p=Y1(h[_],m,r);return p}function I1(s){let t=by(s);return z1(t),t}function by(s,t=[],i=[],r="",l=!1){let u=(d,h,p=l,m)=>{let _={relativePath:m===void 0?d.path||"":m,caseSensitive:d.caseSensitive===!0,childrenIndex:h,route:d};if(_.relativePath.startsWith("/")){if(!_.relativePath.startsWith(r)&&p)return;on(_.relativePath.startsWith(r),`Absolute route path "${_.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),_.relativePath=_.relativePath.slice(r.length)}let x=Gi([r,_.relativePath]),v=i.concat(_);d.children&&d.children.length>0&&(on(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),by(d.children,t,v,x,p)),!(d.path==null&&!d.index)&&t.push({path:x,score:W1(x,d.index),routesMeta:v.map((E,T)=>{let[C,b]=Ty(E.relativePath,E.caseSensitive,T===v.length-1);return{...E,matcher:C,compiledParams:b}})})};return s.forEach((d,h)=>{var p;if(d.path===""||!((p=d.path)!=null&&p.includes("?")))u(d,h);else for(let m of Ey(d.path))u(d,h,!0,m)}),t}function Ey(s){let t=s.split("/");if(t.length===0)return[];let[i,...r]=t,l=i.endsWith("?"),u=i.replace(/\?$/,"");if(r.length===0)return l?[u,""]:[u];let d=Ey(r.join("/")),h=[];return h.push(...d.map(p=>p===""?u:[u,p].join("/"))),l&&h.push(...d),h.map(p=>s.startsWith("/")&&p===""?"/":p)}function z1(s){s.sort((t,i)=>t.score!==i.score?i.score-t.score:q1(t.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var H1=/^:[\w-]+$/,G1=3,V1=2,k1=1,j1=10,X1=-2,v_=s=>s==="*";function W1(s,t){let i=s.split("/"),r=i.length;return i.some(v_)&&(r+=X1),t&&(r+=V1),i.filter(l=>!v_(l)).reduce((l,u)=>l+(H1.test(u)?G1:u===""?k1:j1),r)}function q1(s,t){return s.length===t.length&&s.slice(0,-1).every((r,l)=>r===t[l])?s[s.length-1]-t[t.length-1]:0}function Y1(s,t,i=!1){let{routesMeta:r}=s,l={},u="/",d=[];for(let h=0;h<r.length;++h){let p=r[h],m=h===r.length-1,_=u==="/"?t:t.slice(u.length)||"/",x={path:p.relativePath,caseSensitive:p.caseSensitive,end:m},v=p.matcher&&p.compiledParams?My(x,_,p.matcher,p.compiledParams):Ju(x,_),E=p.route;if(!v&&m&&i&&!r[r.length-1].route.index&&(v=Ju({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},_)),!v)return null;Object.assign(l,v.params),d.push({params:l,pathname:Gi([u,v.pathname]),pathnameBase:J1(Gi([u,v.pathnameBase])),route:E}),v.pathnameBase!=="/"&&(u=Gi([u,v.pathnameBase]))}return d}function Ju(s,t){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=Ty(s.path,s.caseSensitive,s.end);return My(s,t,i,r)}function My(s,t,i,r){let l=t.match(i);if(!l)return null;let u=l[0],d=bo(u,1),h=l.slice(1);return{params:r.reduce((m,{paramName:_,isOptional:x},v)=>{if(_==="*"){let T=h[v]||"";d=bo(u.slice(0,u.length-T.length),1)}const E=h[v];return x&&!E?m[_]=void 0:m[_]=(E||"").replace(/%2F/g,"/"),m},{}),pathname:u,pathnameBase:d,pattern:s}}function Ty(s,t=!1,i=!0){da(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,h,p,m,_)=>{if(r.push({paramName:h,isOptional:p!=null}),p){let x=_.charAt(m+d.length);return x&&x!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function Z1(s){try{return s.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return da(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),s}}function ja(s,t){if(t==="/")return s;if(!s.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}function K1(s,t="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?To(s):s,u;return i?(i=wy(i),i.startsWith("/")||i.startsWith("\\")?u=__(i.substring(1),"/"):u=__(i,t)):u=t,{pathname:u,search:$1(r),hash:eM(l)}}function __(s,t){let i=bo(t).split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Kh(s,t,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Q1(s){return s.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function Ay(s){let t=Q1(s);return t.map((i,r)=>r===t.length-1?i.pathname:i.pathnameBase)}function Dm(s,t,i,r=!1){let l;typeof s=="string"?l=To(s):(l={...s},on(!l.pathname||!l.pathname.includes("?"),Kh("?","pathname","search",l)),on(!l.pathname||!l.pathname.includes("#"),Kh("#","pathname","hash",l)),on(!l.search||!l.search.includes("#"),Kh("#","search","hash",l)));let u=s===""||l.pathname==="",d=u?"/":l.pathname,h;if(d==null)h=i;else{let x=t.length-1;if(!r&&d.startsWith("..")){let v=d.split("/");for(;v[0]==="..";)v.shift(),x-=1;l.pathname=v.join("/")}h=x>=0?t[x]:"/"}let p=K1(l,h),m=d&&d!=="/"&&d.endsWith("/"),_=(u||d===".")&&i.endsWith("/");return!p.pathname.endsWith("/")&&(m||_)&&(p.pathname+="/"),p}var wy=s=>s.replace(/[\\/]{2,}/g,"/"),Gi=s=>wy(s.join("/"));function bo(s,t=0){let i=s.length;for(;i>t&&s.charCodeAt(i-1)===47;)i--;return i===s.length?s:s.slice(0,i)}var J1=s=>bo(s).replace(/^\/*/,"/"),$1=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,eM=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,tM=class{constructor(s,t,i,r=!1){this.status=s,this.statusText=t||"",this.internal=r,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function nM(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function iM(s){let t=s.map(i=>i.route.path).filter(Boolean);return Gi(t)||"/"}var Ry=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Cy(s,t){let i=s;if(typeof i!="string"||!Nm.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let r=i,l=!1;if(Ry)try{let u=new URL(window.location.href),d=yy.test(i)?new URL(U1(i,u.protocol)):new URL(i),h=ja(d.pathname,t);d.origin===u.origin&&h!=null?i=h+d.search+d.hash:l=!0}catch{da(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var y_=new URL("http://localhost");function Ny(s){if(s.createURL)return s.createURL("/");try{return new URL(s.createHref("/"),y_)}catch{return y_}}function Qh(s,t){return s.origin===t.origin&&(s.origin!=="null"||s.protocol===t.protocol&&s.host===t.host)}function aM(s,t){if(s.startsWith("//"))return!0;let i=t.protocol.toLowerCase();return s.toLowerCase().startsWith(i)?t.host===""||s.slice(i.length).startsWith("//"):!1}function Dy(s,t,i,r){let l=null;try{l=s==null?null:new URL(s,i)}catch{}let u=new URL(t,i),d=l!=null&&!Qh(l,i),h=!Qh(u,i);if(r==="reject"){if(d||h)throw new Error("External navigation is not allowed")}else if(h&&(l==null||!aM(s,l)||!Qh(l,u)))throw new Error("External navigation is not allowed")}var Uy=["POST","PUT","PATCH","DELETE"];new Set(Uy);var rM=["GET",...Uy];new Set(rM);var sM=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function oM(s){try{return sM.includes(new URL(s).protocol)}catch{return!1}}var Ao=K.createContext(null);Ao.displayName="DataRouter";var cf=K.createContext(null);cf.displayName="DataRouterState";var Ly=K.createContext(!1);function lM(){return K.useContext(Ly)}var Fy=K.createContext({isTransitioning:!1});Fy.displayName="ViewTransition";var cM=K.createContext(new Map);cM.displayName="Fetchers";var uM=K.createContext(null);uM.displayName="Await";var Ci=K.createContext(null);Ci.displayName="Navigation";var Vl=K.createContext(null);Vl.displayName="Location";var ga=K.createContext({outlet:null,matches:[],isDataRoute:!1});ga.displayName="Route";var Um=K.createContext(null);Um.displayName="RouteError";var Py="REACT_ROUTER_ERROR",fM="REDIRECT",dM="ROUTE_ERROR_RESPONSE";function hM(s){if(s.startsWith(`${Py}:${fM}:{`))try{let t=JSON.parse(s.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function pM(s){if(s.startsWith(`${Py}:${dM}:{`))try{let t=JSON.parse(s.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new tM(t.status,t.statusText,t.data)}catch{}}function mM(s,{relative:t}={}){on(kl(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=K.useContext(Ci),{hash:l,pathname:u,search:d}=jl(s,{relative:t}),h=u;return i!=="/"&&(h=u==="/"?i:Gi([i,u])),r.createHref({pathname:h,search:d,hash:l})}function kl(){return K.useContext(Vl)!=null}function xa(){return on(kl(),"useLocation() may be used only in the context of a <Router> component."),K.useContext(Vl).location}var Oy="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function By(s){K.useContext(Ci).static||K.useLayoutEffect(s)}function uf(){let{isDataRoute:s}=K.useContext(ga);return s?CM():gM()}function gM(){on(kl(),"useNavigate() may be used only in the context of a <Router> component.");let s=K.useContext(Ao),{basename:t,navigator:i}=K.useContext(Ci),{matches:r}=K.useContext(ga),{pathname:l}=xa(),u=JSON.stringify(Ay(r)),d=K.useRef(!1);return By(()=>{d.current=!0}),K.useCallback((p,m={})=>{if(da(d.current,Oy),!d.current)return;if(typeof p=="number"){i.go(p);return}let _=Dm(p,JSON.parse(u),l,m.relative==="path");s==null&&t!=="/"&&(_.pathname=_.pathname==="/"?t:Gi([t,_.pathname])),Dy(typeof p=="string"?p:So(p),i.createHref(_),Ny(i),"reject"),(m.replace?i.replace:i.push)(_,m.state,m)},[t,i,u,l,s])}K.createContext(null);function xM(){let{matches:s}=K.useContext(ga),t=s[s.length-1];return(t==null?void 0:t.params)??{}}function jl(s,{relative:t}={}){let{matches:i}=K.useContext(ga),{pathname:r}=xa(),l=JSON.stringify(Ay(i));return K.useMemo(()=>Dm(s,JSON.parse(l),r,t==="path"),[s,l,r,t])}function vM(s,t){return Iy(s,t)}function Iy(s,t,i){var b;on(kl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=K.useContext(Ci),{matches:l}=K.useContext(ga),u=l[l.length-1],d=u?u.params:{},h=u?u.pathname:"/",p=u?u.pathnameBase:"/",m=u&&u.route;{let S=m&&m.path||"";Hy(h,!m||S.endsWith("*")||S.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${S}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${S}"> to <Route path="${S==="/"?"*":`${S}/*`}">.`)}let _=xa(),x;if(t){let S=typeof t=="string"?To(t):t;on(p==="/"||((b=S.pathname)==null?void 0:b.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${S.pathname}" was given in the \`location\` prop.`),x=S}else x=_;let v=x.pathname||"/",E=v;if(p!=="/"){let S=p.replace(/^\//,"").split("/");E="/"+v.replace(/^\//,"").split("/").slice(S.length).join("/")}let T=i&&i.state.matches.length?i.state.matches.map(S=>Object.assign(S,{route:i.manifest[S.route.id]||S.route})):Sy(s,{pathname:E});da(m||T!=null,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),da(T==null||T[T.length-1].route.element!==void 0||T[T.length-1].route.Component!==void 0||T[T.length-1].route.lazy!==void 0,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let C=EM(T&&T.map(S=>Object.assign({},S,{params:Object.assign({},d,S.params),pathname:Gi([p,r.encodeLocation?r.encodeLocation(S.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?p:Gi([p,r.encodeLocation?r.encodeLocation(S.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:S.pathnameBase])})),l,i);return t&&C?K.createElement(Vl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...x},navigationType:"POP"}},C):C}function _M(){let s=RM(),t=nM(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},u={padding:"2px 4px",backgroundColor:r},d=null;return console.error("Error handled by React Router default ErrorBoundary:",s),d=K.createElement(K.Fragment,null,K.createElement("p",null,"💿 Hey developer 👋"),K.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",K.createElement("code",{style:u},"ErrorBoundary")," or"," ",K.createElement("code",{style:u},"errorElement")," prop on your route.")),K.createElement(K.Fragment,null,K.createElement("h2",null,"Unexpected Application Error!"),K.createElement("h3",{style:{fontStyle:"italic"}},t),i?K.createElement("pre",{style:l},i):null,d)}var yM=K.createElement(_M,null),zy=class extends K.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,t){return t.location!==s.location||t.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:t.error,location:t.location,revalidation:s.revalidation||t.revalidation}}componentDidCatch(s,t){this.props.onError?this.props.onError(s,t):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const i=pM(s.digest);i&&(s=i)}let t=s!==void 0?K.createElement(ga.Provider,{value:this.props.routeContext},K.createElement(Um.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?K.createElement(SM,{error:s},t):t}};zy.contextType=Ly;var Jh=new WeakMap;function SM({children:s,error:t}){let{basename:i,navigator:r}=K.useContext(Ci);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let l=hM(t.digest);if(l){let u=Jh.get(t);if(u)throw u;let d=Cy(l.location,i),h=d.absoluteURL||d.to;if(Dy(l.location,h,Ny(r),"allow-explicit"),oM(h))throw new Error("Invalid redirect location");if(Ry&&!Jh.get(t))if(d.isExternal||l.reloadDocument)window.location.href=h;else{const p=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(d.to,{replace:l.replace}));throw Jh.set(t,p),p}return K.createElement("meta",{httpEquiv:"refresh",content:`0;url=${h}`})}}return s}function bM({routeContext:s,match:t,children:i}){let r=K.useContext(Ao);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),K.createElement(ga.Provider,{value:s},i)}function EM(s,t=[],i){let r=i==null?void 0:i.state;if(s==null){if(!r)return null;if(r.errors)s=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)s=r.matches;else return null}let l=s,u=r==null?void 0:r.errors;if(u!=null){let _=l.findIndex(x=>x.route.id&&(u==null?void 0:u[x.route.id])!==void 0);on(_>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,_+1))}let d=!1,h=-1;if(i&&r){d=r.renderFallback;for(let _=0;_<l.length;_++){let x=l[_];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(h=_),x.route.id){let{loaderData:v,errors:E}=r,T=x.route.loader&&!v.hasOwnProperty(x.route.id)&&(!E||E[x.route.id]===void 0);if(x.route.lazy||T){i.isStatic&&(d=!0),h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}}let p=i==null?void 0:i.onError,m=r&&p?(_,x)=>{var v,E;p(_,{location:r.location,params:((E=(v=r.matches)==null?void 0:v[0])==null?void 0:E.params)??{},pattern:iM(r.matches),errorInfo:x})}:void 0;return l.reduceRight((_,x,v)=>{let E,T=!1,C=null,b=null;r&&(E=u&&x.route.id?u[x.route.id]:void 0,C=x.route.errorElement||yM,d&&(h<0&&v===0?(Hy("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),T=!0,b=null):h===v&&(T=!0,b=x.route.hydrateFallbackElement||null)));let S=t.concat(l.slice(0,v+1)),U=()=>{let I;return E?I=C:T?I=b:x.route.Component?I=K.createElement(x.route.Component,null):x.route.element?I=x.route.element:I=_,K.createElement(bM,{match:x,routeContext:{outlet:_,matches:S,isDataRoute:r!=null},children:I})};return r&&(x.route.ErrorBoundary||x.route.errorElement||v===0)?K.createElement(zy,{location:r.location,revalidation:r.revalidation,component:C,error:E,children:U(),routeContext:{outlet:null,matches:S,isDataRoute:!0},onError:m}):U()},null)}function Lm(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function MM(s){let t=K.useContext(Ao);return on(t,Lm(s)),t}function TM(s){let t=K.useContext(cf);return on(t,Lm(s)),t}function AM(s){let t=K.useContext(ga);return on(t,Lm(s)),t}function Fm(s){let t=AM(s),i=t.matches[t.matches.length-1];return on(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function wM(){return Fm("useRouteId")}function RM(){var r;let s=K.useContext(Um),t=TM("useRouteError"),i=Fm("useRouteError");return s!==void 0?s:(r=t.errors)==null?void 0:r[i]}function CM(){let{router:s}=MM("useNavigate"),t=Fm("useNavigate"),i=K.useRef(!1);return By(()=>{i.current=!0}),K.useCallback(async(l,u={})=>{da(i.current,Oy),i.current&&(typeof l=="number"?await s.navigate(l):await s.navigate(l,{fromRouteId:t,...u}))},[s,t])}var S_={};function Hy(s,t,i){!t&&!S_[s]&&(S_[s]=!0,da(!1,i))}K.memo(NM);function NM({routes:s,manifest:t,future:i,state:r,isStatic:l,onError:u}){return Iy(s,void 0,{manifest:t,state:r,isStatic:l,onError:u})}function Ia(s){on(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function DM({basename:s="/",children:t=null,location:i,navigationType:r="POP",navigator:l,static:u=!1,useTransitions:d}){on(!kl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=s.replace(/^\/*/,"/"),p=K.useMemo(()=>({basename:h,navigator:l,static:u,useTransitions:d,future:{}}),[h,l,u,d]);typeof i=="string"&&(i=To(i));let{pathname:m="/",search:_="",hash:x="",state:v=null,key:E="default",mask:T}=i,C=K.useMemo(()=>{let b=ja(m,h);return b==null?null:{location:{pathname:b,search:_,hash:x,state:v,key:E,mask:T},navigationType:r}},[h,m,_,x,v,E,r,T]);return da(C!=null,`<Router basename="${h}"> is not able to match the URL "${m}${_}${x}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:K.createElement(Ci.Provider,{value:p},K.createElement(Vl.Provider,{children:t,value:C}))}function UM({children:s,location:t}){return vM(Pp(s),t)}function Pp(s,t=[]){let i=[];return K.Children.forEach(s,(r,l)=>{if(!K.isValidElement(r))return;let u=[...t,l];if(r.type===K.Fragment){i.push.apply(i,Pp(r.props.children,u));return}on(r.type===Ia,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),on(!r.props.index||!r.props.children,"An index route cannot have child routes.");let d={id:r.props.id||u.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(d.children=Pp(r.props.children,u)),i.push(d)}),i}var ku="get",ju="application/x-www-form-urlencoded";function ff(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function LM(s){return ff(s)&&s.tagName.toLowerCase()==="button"}function FM(s){return ff(s)&&s.tagName.toLowerCase()==="form"}function PM(s){return ff(s)&&s.tagName.toLowerCase()==="input"}function OM(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function BM(s,t){return s.button===0&&(!t||t==="_self")&&!OM(s)}var xu=null;function IM(){if(xu===null)try{new FormData(document.createElement("form"),0),xu=!1}catch{xu=!0}return xu}var zM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function $h(s){return s!=null&&!zM.has(s)?(da(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ju}"`),null):s}function HM(s,t){let i,r,l,u,d;if(FM(s)){let h=s.getAttribute("action");r=h?ja(h,t):null,i=s.getAttribute("method")||ku,l=$h(s.getAttribute("enctype"))||ju,u=new FormData(s)}else if(LM(s)||PM(s)&&(s.type==="submit"||s.type==="image")){let h=s.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=s.getAttribute("formaction")||h.getAttribute("action");if(r=p?ja(p,t):null,i=s.getAttribute("formmethod")||h.getAttribute("method")||ku,l=$h(s.getAttribute("formenctype"))||$h(h.getAttribute("enctype"))||ju,u=new FormData(h,s),!IM()){let{name:m,type:_,value:x}=s;if(_==="image"){let v=m?`${m}.`:"";u.append(`${v}x`,"0"),u.append(`${v}y`,"0")}else m&&u.append(m,x)}}else{if(ff(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=ku,r=null,l=ju,d=s}return u&&l==="text/plain"&&(d=u,u=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:u,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Pm(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function Gy(s,t,i,r){let l=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return i?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${r}`:l.pathname=`${l.pathname}.${r}`:l.pathname==="/"?l.pathname=`_root.${r}`:t&&ja(l.pathname,t)==="/"?l.pathname=`${bo(t)}/_root.${r}`:l.pathname=`${bo(l.pathname)}.${r}`,l}async function GM(s,t){if(s.id in t)return t[s.id];try{let i=await import(s.module);return t[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function VM(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function kM(s,t,i){let r=await Promise.all(s.map(async l=>{let u=t.routes[l.route.id];if(u){let d=await GM(u,i);return d.links?d.links():[]}return[]}));return qM(r.flat(1).filter(VM).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function b_(s,t,i,r,l,u){let d=(p,m)=>i[m]?p.route.id!==i[m].route.id:!0,h=(p,m)=>{var _;return i[m].pathname!==p.pathname||((_=i[m].route.path)==null?void 0:_.endsWith("*"))&&i[m].params["*"]!==p.params["*"]};return u==="assets"?t.filter((p,m)=>d(p,m)||h(p,m)):u==="data"?t.filter((p,m)=>{var x;let _=r.routes[p.route.id];if(!_||!_.hasLoader)return!1;if(d(p,m)||h(p,m))return!0;if(p.route.shouldRevalidate){let v=p.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((x=i[0])==null?void 0:x.params)||{},nextUrl:new URL(s,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function jM(s,t,{includeHydrateFallback:i}={}){return XM(s.map(r=>{let l=t.routes[r.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function XM(s){return[...new Set(s)]}function WM(s){let t={},i=Object.keys(s).sort();for(let r of i)t[r]=s[r];return t}function qM(s,t){let i=new Set;return new Set(t),s.reduce((r,l)=>{let u=JSON.stringify(WM(l));return i.has(u)||(i.add(u),r.push({key:u,link:l})),r},[])}function Om(){let s=K.useContext(Ao);return Pm(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function YM(){let s=K.useContext(cf);return Pm(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Bm=K.createContext(void 0);Bm.displayName="FrameworkContext";function df(){let s=K.useContext(Bm);return Pm(s,"You must render this element inside a <HydratedRouter> element"),s}function ZM(s,t){let i=K.useContext(Bm),[r,l]=K.useState(!1),[u,d]=K.useState(!1),{onFocus:h,onBlur:p,onMouseEnter:m,onMouseLeave:_,onTouchStart:x}=t,v=K.useRef(null);K.useEffect(()=>{if(s==="render"&&d(!0),s==="viewport"){let C=S=>{S.forEach(U=>{d(U.isIntersecting)})},b=new IntersectionObserver(C,{threshold:.5});return v.current&&b.observe(v.current),()=>{b.disconnect()}}},[s]),K.useEffect(()=>{if(r){let C=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(C)}}},[r]);let E=()=>{l(!0)},T=()=>{l(!1),d(!1)};return i?s!=="intent"?[u,v,{}]:[u,v,{onFocus:Tl(h,E),onBlur:Tl(p,T),onMouseEnter:Tl(m,E),onMouseLeave:Tl(_,T),onTouchStart:Tl(x,E)}]:[!1,v,{}]}function Tl(s,t){return i=>{s&&s(i),i.defaultPrevented||t(i)}}function KM({page:s,...t}){let i=lM(),{nonce:r}=df(),{router:l}=Om(),u=K.useMemo(()=>Sy(l.routes,s,l.basename),[l.routes,s,l.basename]);return u?(t.nonce==null&&r&&(t={...t,nonce:r}),i?K.createElement(JM,{page:s,matches:u,...t}):K.createElement($M,{page:s,matches:u,...t})):null}function QM(s){let{manifest:t,routeModules:i}=df(),[r,l]=K.useState([]);return K.useEffect(()=>{let u=!1;return kM(s,t,i).then(d=>{u||l(d)}),()=>{u=!0}},[s,t,i]),r}function JM({page:s,matches:t,...i}){let r=xa(),{future:l}=df(),{basename:u}=Om(),d=K.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let h=Gy(s,u,l.v8_trailingSlashAwareDataRequests,"rsc"),p=!1,m=[];for(let _ of t)typeof _.route.shouldRevalidate=="function"?p=!0:m.push(_.route.id);return p&&m.length>0&&h.searchParams.set("_routes",m.join(",")),[h.pathname+h.search]},[u,l.v8_trailingSlashAwareDataRequests,s,r,t]);return K.createElement(K.Fragment,null,d.map(h=>K.createElement("link",{key:h,rel:"prefetch",as:"fetch",href:h,...i})))}function $M({page:s,matches:t,...i}){let r=xa(),{future:l,manifest:u,routeModules:d}=df(),{basename:h}=Om(),{loaderData:p,matches:m}=YM(),_=K.useMemo(()=>b_(s,t,m,u,r,"data"),[s,t,m,u,r]),x=K.useMemo(()=>b_(s,t,m,u,r,"assets"),[s,t,m,u,r]),v=K.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let C=new Set,b=!1;if(t.forEach(U=>{var N;let I=u.routes[U.route.id];!I||!I.hasLoader||(!_.some(D=>D.route.id===U.route.id)&&U.route.id in p&&((N=d[U.route.id])!=null&&N.shouldRevalidate)||I.hasClientLoader?b=!0:C.add(U.route.id))}),C.size===0)return[];let S=Gy(s,h,l.v8_trailingSlashAwareDataRequests,"data");return b&&C.size>0&&S.searchParams.set("_routes",t.filter(U=>C.has(U.route.id)).map(U=>U.route.id).join(",")),[S.pathname+S.search]},[h,l.v8_trailingSlashAwareDataRequests,p,r,u,_,t,s,d]),E=K.useMemo(()=>jM(x,u),[x,u]),T=QM(x);return K.createElement(K.Fragment,null,v.map(C=>K.createElement("link",{key:C,rel:"prefetch",as:"fetch",href:C,...i})),E.map(C=>K.createElement("link",{key:C,rel:"modulepreload",href:C,...i})),T.map(({key:C,link:b})=>K.createElement("link",{key:C,nonce:i.nonce,...b,crossOrigin:b.crossOrigin??i.crossOrigin})))}function eT(...s){return t=>{s.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var tT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{tT&&(window.__reactRouterVersion="7.18.4")}catch{}function nT({basename:s,children:t,useTransitions:i,window:r}){let l=K.useRef();l.current==null&&(l.current=L1({window:r,v5Compat:!0}));let u=l.current,[d,h]=K.useState({action:u.action,location:u.location}),p=K.useCallback(m=>{i===!1?h(m):K.startTransition(()=>h(m))},[i]);return K.useLayoutEffect(()=>u.listen(p),[u,p]),K.createElement(DM,{basename:s,children:t,location:d.location,navigationType:d.action,navigator:u,useTransitions:i})}var Zt=K.forwardRef(function({onClick:t,discover:i="render",prefetch:r="none",relative:l,reloadDocument:u,replace:d,mask:h,state:p,target:m,to:_,preventScrollReset:x,viewTransition:v,defaultShouldRevalidate:E,...T},C){let{basename:b,navigator:S,useTransitions:U}=K.useContext(Ci),I=typeof _=="string"&&Nm.test(_),N=Cy(_,b);_=N.to;let D=mM(_,{relative:l}),L=xa(),O=null;if(h){let k=Dm(h,[],L.mask?L.mask.pathname:"/",!0);b!=="/"&&(k.pathname=k.pathname==="/"?b:Gi([b,k.pathname])),O=S.createHref(k)}let[A,P,V]=ZM(r,T),Y=sT(_,{replace:d,mask:h,state:p,target:m,preventScrollReset:x,relative:l,viewTransition:v,defaultShouldRevalidate:E,useTransitions:U});function ne(k){t&&t(k),k.defaultPrevented||Y(k)}let ce=!(N.isExternal||u),Q=K.createElement("a",{...T,...V,href:(ce?O:void 0)||N.absoluteURL||D,onClick:ce?ne:t,ref:eT(C,P),target:m,"data-discover":!I&&i==="render"?"true":void 0});return A&&!I?K.createElement(K.Fragment,null,Q,K.createElement(KM,{page:D})):Q});Zt.displayName="Link";var iT=K.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:r="",end:l=!1,style:u,to:d,viewTransition:h,children:p,...m},_){let x=jl(d,{relative:m.relative}),v=xa(),E=K.useContext(cf),{navigator:T,basename:C}=K.useContext(Ci),b=E!=null&&fT(x)&&h===!0,S=T.encodeLocation?T.encodeLocation(x).pathname:x.pathname,U=v.pathname,I=E&&E.navigation&&E.navigation.location?E.navigation.location.pathname:null;i||(U=U.toLowerCase(),I=I?I.toLowerCase():null,S=S.toLowerCase()),I&&C&&(I=ja(I,C)||I);const N=S!=="/"&&S.endsWith("/")?S.length-1:S.length;let D=U===S||!l&&U.startsWith(S)&&U.charAt(N)==="/",L=I!=null&&(I===S||!l&&I.startsWith(S)&&I.charAt(S.length)==="/"),O={isActive:D,isPending:L,isTransitioning:b},A=D?t:void 0,P;typeof r=="function"?P=r(O):P=[r,D?"active":null,L?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let V=typeof u=="function"?u(O):u;return K.createElement(Zt,{...m,"aria-current":A,className:P,ref:_,style:V,to:d,viewTransition:h},typeof p=="function"?p(O):p)});iT.displayName="NavLink";var aT=K.forwardRef(({discover:s="render",fetcherKey:t,navigate:i,reloadDocument:r,replace:l,state:u,method:d=ku,action:h,onSubmit:p,relative:m,preventScrollReset:_,viewTransition:x,defaultShouldRevalidate:v,...E},T)=>{let{useTransitions:C}=K.useContext(Ci),b=cT(),S=uT(h,{relative:m}),U=d.toLowerCase()==="get"?"get":"post",I=typeof h=="string"&&Nm.test(h),N=D=>{if(p&&p(D),D.defaultPrevented)return;D.preventDefault();let L=D.nativeEvent.submitter,O=(L==null?void 0:L.getAttribute("formmethod"))||d,A=()=>b(L||D.currentTarget,{fetcherKey:t,method:O,navigate:i,replace:l,state:u,relative:m,preventScrollReset:_,viewTransition:x,defaultShouldRevalidate:v});C&&i!==!1?K.startTransition(()=>A()):A()};return K.createElement("form",{ref:T,method:U,action:S,onSubmit:r?p:N,...E,"data-discover":!I&&s==="render"?"true":void 0})});aT.displayName="Form";function rT(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Vy(s){let t=K.useContext(Ao);return on(t,rT(s)),t}function sT(s,{target:t,replace:i,mask:r,state:l,preventScrollReset:u,relative:d,viewTransition:h,defaultShouldRevalidate:p,useTransitions:m}={}){let _=uf(),x=xa(),v=jl(s,{relative:d});return K.useCallback(E=>{if(BM(E,t)){E.preventDefault();let T=i!==void 0?i:So(x)===So(v),C=()=>_(s,{replace:T,mask:r,state:l,preventScrollReset:u,relative:d,viewTransition:h,defaultShouldRevalidate:p});m?K.startTransition(()=>C()):C()}},[x,_,v,i,r,l,t,s,u,d,h,p,m])}var oT=0,lT=()=>`__${String(++oT)}__`;function cT(){let{router:s}=Vy("useSubmit"),{basename:t}=K.useContext(Ci),i=wM(),r=s.fetch,l=s.navigate;return K.useCallback(async(u,d={})=>{let{action:h,method:p,encType:m,formData:_,body:x}=HM(u,t);if(d.navigate===!1){let v=d.fetcherKey||lT();await r(v,i,d.action||h,{defaultShouldRevalidate:d.defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:_,body:x,formMethod:d.method||p,formEncType:d.encType||m,flushSync:d.flushSync})}else await l(d.action||h,{defaultShouldRevalidate:d.defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:_,body:x,formMethod:d.method||p,formEncType:d.encType||m,replace:d.replace,state:d.state,fromRouteId:i,flushSync:d.flushSync,viewTransition:d.viewTransition})},[r,l,t,i])}function uT(s,{relative:t}={}){let{basename:i}=K.useContext(Ci),r=K.useContext(ga);on(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),u={...jl(s||".",{relative:t})},d=xa();if(s==null){u.search=d.search;let h=new URLSearchParams(u.search),p=h.getAll("index");if(p.some(_=>_==="")){h.delete("index"),p.filter(x=>x).forEach(x=>h.append("index",x));let _=h.toString();u.search=_?`?${_}`:""}}return(!s||s===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:Gi([i,u.pathname])),So(u)}function fT(s,{relative:t}={}){let i=K.useContext(Fy);on(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Vy("useViewTransitionState"),l=jl(s,{relative:t});if(!i.isTransitioning)return!1;let u=ja(i.currentLocation.pathname,r)||i.currentLocation.pathname,d=ja(i.nextLocation.pathname,r)||i.nextLocation.pathname;return Ju(l.pathname,d)!=null||Ju(l.pathname,u)!=null}const Op="proofloop_auth_user",dT={id:"usr_poster_1",email:"sarah.lin@hopefoodbank.org",name:"Sarah Lin",role:"poster",bio:"Outreach Director at Hope Valley Food Bank. Connecting surplus food to families.",avatarUrl:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",createdAt:"2026-09-10T08:00:00Z"},Bp={id:"usr_builder_1",email:"alex.rivera@university.edu",name:"Alex Rivera",role:"builder",bio:"Computer Science Senior @ State Tech. Building web solutions for social impact.",skills:["React","TypeScript","Node.js","AWS DynamoDB","Lambda"],avatarUrl:"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80",createdAt:"2026-09-11T14:20:00Z"};function hT(){try{const s=localStorage.getItem(Op);return s?JSON.parse(s):Bp}catch{return Bp}}function pT(s){s?localStorage.setItem(Op,JSON.stringify(s)):localStorage.removeItem(Op)}const ky=K.createContext(void 0),mT=({children:s})=>{const[t,i]=K.useState(hT());K.useEffect(()=>{pT(t)},[t]);const r=(d,h,p)=>{const m={id:`usr_${Date.now()}`,email:d,name:p||d.split("@")[0],role:h,createdAt:new Date().toISOString(),avatarUrl:h==="poster"?"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80":"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"};i(m)},l=()=>{i(null)},u=d=>{i(d==="poster"?dT:Bp)};return g.jsx(ky.Provider,{value:{user:t,role:t?t.role:null,login:r,logout:l,switchDemoRole:u},children:s})},Dr=()=>{const s=K.useContext(ky);if(!s)throw new Error("useAuth must be used within an AuthProvider");return s};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gT=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),jy=(...s)=>s.filter((t,i,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===i).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var xT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vT=K.forwardRef(({color:s="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:u,iconNode:d,...h},p)=>K.createElement("svg",{ref:p,...xT,width:t,height:t,stroke:s,strokeWidth:r?Number(i)*24/Number(t):i,className:jy("lucide",l),...h},[...d.map(([m,_])=>K.createElement(m,_)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tt=(s,t)=>{const i=K.forwardRef(({className:r,...l},u)=>K.createElement(vT,{ref:u,iconNode:t,className:jy(`lucide-${gT(s)}`,r),...l}));return i.displayName=`${s}`,i};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _T=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Xy=Tt("ArrowLeft",_T);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yT=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Nr=Tt("ArrowRight",yT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ST=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],bT=Tt("ArrowUpRight",ST);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ET=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],Im=Tt("Award",ET);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MT=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],TT=Tt("Calendar",MT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AT=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],wT=Tt("Check",AT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],CT=Tt("CircleAlert",RT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],$u=Tt("CircleCheck",NT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],Bl=Tt("CirclePlus",DT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],LT=Tt("CircleX",UT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],Xu=Tt("Clock",FT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PT=[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]],OT=Tt("Cpu",PT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BT=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],IT=Tt("Database",BT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zT=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Wy=Tt("ExternalLink",zT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HT=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],qy=Tt("Eye",HT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GT=[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]],VT=Tt("Filter",GT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kT=[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]],Yy=Tt("Flame",kT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jT=[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["path",{d:"M18 19c-2.8 0-5-2.2-5-5v8",key:"pkpw2h"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]],Zy=Tt("FolderGit2",jT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XT=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],WT=Tt("Image",XT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qT=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Ky=Tt("Layers",qT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YT=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],ZT=Tt("LayoutDashboard",YT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KT=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],QT=Tt("LoaderCircle",KT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JT=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],$T=Tt("LogOut",JT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eA=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M8 12a2 2 0 0 0 2-2V8H8",key:"1jfesj"}],["path",{d:"M14 12a2 2 0 0 0 2-2V8h-2",key:"1dq9mh"}]],tA=Tt("MessageSquareQuote",eA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nA=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],iA=Tt("Search",nA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aA=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],rA=Tt("Send",aA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sA=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],oA=Tt("Server",sA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lA=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],cA=Tt("ShieldAlert",lA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uA=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Qy=Tt("ShieldCheck",uA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fA=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],Cn=Tt("Sparkles",fA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dA=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],hA=Tt("TriangleAlert",dA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pA=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],Pl=Tt("Upload",pA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mA=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]],gA=Tt("UserCheck",mA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xA=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],vA=Tt("Users",xA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _A=[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]],hf=Tt("Workflow",_A);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yA=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Jy=Tt("X",yA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SA=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],bA=Tt("Zap",SA),EA=()=>{const{user:s,role:t,logout:i,switchDemoRole:r}=Dr(),l=xa(),u=d=>l.pathname===d;return g.jsx("header",{className:"sticky top-0 z-50 bg-[#0B0E14]/85 backdrop-blur-xl border-b border-[#242834]",children:g.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between",children:[g.jsxs(Zt,{to:"/",className:"flex items-center gap-3 group",children:[g.jsx("div",{className:"w-9 h-9 rounded-xl bg-gradient-amber p-0.5 shadow-md shadow-[#FFB020]/20 group-hover:shadow-[#FFB020]/40 transition-all",children:g.jsx("div",{className:"w-full h-full bg-[#0B0E14] rounded-[10px] flex items-center justify-center",children:g.jsx(hf,{className:"w-5 h-5 text-[#FFB020] group-hover:rotate-12 transition-transform duration-300"})})}),g.jsxs("span",{className:"font-display font-black text-xl tracking-tight text-[#F2F0EB]",children:["Proof",g.jsx("span",{className:"text-gradient-amber",children:"Loop"})]})]}),g.jsxs("nav",{className:"hidden md:flex items-center gap-1",children:[g.jsx(Zt,{to:"/problems",className:`px-3.5 py-2 rounded-xl text-sm font-medium transition-colors ${u("/problems")?"bg-[#12151C] text-[#FFB020] font-semibold border border-[#242834]":"text-[#A8A5A0] hover:text-[#F2F0EB] hover:bg-[#12151C]/60"}`,children:"Browse Problems"}),g.jsxs(Zt,{to:"/wall",className:`px-3.5 py-2 rounded-xl text-sm font-medium transition-colors flex items-center gap-2 ${u("/wall")?"bg-[#12151C] text-[#FFB020] font-semibold border border-[#242834]":"text-[#A8A5A0] hover:text-[#F2F0EB] hover:bg-[#12151C]/60"}`,children:[g.jsx(Cn,{className:"w-4 h-4 text-[#FFB020]"}),"Proof Wall"]}),s&&g.jsxs(Zt,{to:"/dashboard",className:`px-3.5 py-2 rounded-xl text-sm font-medium transition-colors flex items-center gap-1.5 ${u("/dashboard")?"bg-[#12151C] text-[#FFB020] font-semibold border border-[#242834]":"text-[#A8A5A0] hover:text-[#F2F0EB] hover:bg-[#12151C]/60"}`,children:[g.jsx(ZT,{className:"w-4 h-4"}),"Dashboard"]})]}),g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsxs("div",{className:"hidden lg:flex items-center bg-[#12151C] p-1 rounded-xl border border-[#242834] text-xs",children:[g.jsx("span",{className:"px-2 text-[#6E6B65] font-medium text-[11px]",children:"Role:"}),g.jsx("button",{onClick:()=>r("poster"),className:`px-2.5 py-1 rounded-lg font-medium transition-all ${t==="poster"?"bg-[#FFB020] text-[#0B0E14] font-bold shadow-sm":"text-[#A8A5A0] hover:text-[#F2F0EB]"}`,title:"Switch to Problem Poster role",children:"Poster"}),g.jsx("button",{onClick:()=>r("builder"),className:`px-2.5 py-1 rounded-lg font-medium transition-all ${t==="builder"?"bg-[#FF6B4A] text-[#0B0E14] font-bold shadow-sm":"text-[#A8A5A0] hover:text-[#F2F0EB]"}`,title:"Switch to Student Builder role",children:"Builder"})]}),t==="poster"&&g.jsxs(Zt,{to:"/create-problem",className:"px-4 py-2 rounded-xl text-xs font-bold btn-primary flex items-center gap-1.5 shadow-md shadow-[#FFB020]/20",children:[g.jsx(Bl,{className:"w-4 h-4"}),"Post Problem"]}),s?g.jsxs("div",{className:"flex items-center gap-2 pl-2 border-l border-[#242834]",children:[g.jsx("img",{src:s.avatarUrl||"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",alt:s.name,className:"w-8 h-8 rounded-full border border-[#FFB020]/40 object-cover"}),g.jsxs("div",{className:"hidden sm:block text-left",children:[g.jsx("p",{className:"text-xs font-semibold text-[#F2F0EB] leading-tight",children:s.name}),g.jsx("p",{className:"text-[10px] font-medium text-[#FFB020] capitalize",children:s.role==="poster"?"Problem Poster":"Student Builder"})]}),g.jsx("button",{onClick:i,className:"p-1.5 text-[#A8A5A0] hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors",title:"Log Out",children:g.jsx($T,{className:"w-4 h-4"})})]}):g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx(Zt,{to:"/login",className:"px-3 py-1.5 text-xs font-medium text-[#A8A5A0] hover:text-[#F2F0EB]",children:"Log In"}),g.jsx(Zt,{to:"/signup",className:"px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-[#12151C] hover:bg-[#1A1E28] text-[#F2F0EB] border border-[#242834]",children:"Sign Up"})]})]})]})})},MA=()=>g.jsx("footer",{className:"bg-[#0B0E14] border-t border-[#242834] mt-24 py-14 text-[#A8A5A0] text-xs",children:g.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8 mb-10",children:[g.jsxs("div",{className:"space-y-3",children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx(hf,{className:"w-5 h-5 text-[#FFB020]"}),g.jsx("span",{className:"font-display font-bold text-[#F2F0EB] text-lg",children:"ProofLoop"})]}),g.jsx("p",{className:"text-[#A8A5A0] leading-relaxed text-xs",children:"Connecting authentic real-world problems to student builders with verified impact proof."})]}),g.jsxs("div",{children:[g.jsx("h4",{className:"font-display font-semibold text-[#F2F0EB] uppercase tracking-wider text-[11px] mb-3",children:"Workflow"}),g.jsxs("ul",{className:"space-y-2",children:[g.jsx("li",{children:g.jsx("a",{href:"/problems",className:"hover:text-[#FFB020] transition-colors",children:"1. Browse Real Problems"})}),g.jsx("li",{children:g.jsx("a",{href:"/dashboard",className:"hover:text-[#FFB020] transition-colors",children:"2. Claim & Build Progress"})}),g.jsx("li",{children:g.jsx("a",{href:"/wall",className:"hover:text-[#FFB020] transition-colors",children:"3. Public Proof Wall"})})]})]}),g.jsxs("div",{children:[g.jsx("h4",{className:"font-display font-semibold text-[#F2F0EB] uppercase tracking-wider text-[11px] mb-3",children:"AWS Architecture"}),g.jsxs("ul",{className:"space-y-2 text-[#A8A5A0]",children:[g.jsxs("li",{className:"flex items-center gap-1.5",children:[g.jsx(oA,{className:"w-3.5 h-3.5 text-[#FFB020]"})," AWS Lambda & API Gateway"]}),g.jsxs("li",{className:"flex items-center gap-1.5",children:[g.jsx(IT,{className:"w-3.5 h-3.5 text-[#FFB020]"})," Amazon DynamoDB Single-Table"]}),g.jsxs("li",{className:"flex items-center gap-1.5",children:[g.jsx(Qy,{className:"w-3.5 h-3.5 text-[#FFB020]"})," Amazon Cognito User Pools"]}),g.jsxs("li",{className:"flex items-center gap-1.5",children:[g.jsx(OT,{className:"w-3.5 h-3.5 text-[#FFB020]"})," AWS S3 Pre-Signed Uploads"]})]})]}),g.jsxs("div",{children:[g.jsx("h4",{className:"font-display font-semibold text-[#F2F0EB] uppercase tracking-wider text-[11px] mb-3",children:"AWS Ship It Track"}),g.jsxs("div",{className:"p-3.5 rounded-xl bg-[#12151C] border border-[#242834] text-[#A8A5A0] space-y-1.5",children:[g.jsxs("p",{className:"font-bold text-[#FFB020] text-xs flex items-center gap-1.5",children:[g.jsx("span",{className:"w-2 h-2 rounded-full bg-[#FFB020] animate-pulse"}),"Grand Prize Track Ready"]}),g.jsx("p",{className:"text-[11px] text-[#A8A5A0]",children:"Built and documented for serverless AWS deployment with Cognito roles, DynamoDB single-table design, and S3 media storage."})]})]})]}),g.jsxs("div",{className:"pt-8 border-t border-[#242834] flex flex-col sm:flex-row justify-between items-center gap-4 text-[#6E6B65] text-[11px]",children:[g.jsx("p",{children:"© 2026 ProofLoop. Real problems → real projects → real proof."}),g.jsxs("div",{className:"flex gap-4",children:[g.jsx("span",{className:"text-[#A8A5A0]",children:"AWS Amplify"}),g.jsx("span",{children:"•"}),g.jsx("span",{className:"text-[#A8A5A0]",children:"DynamoDB"}),g.jsx("span",{children:"•"}),g.jsx("span",{className:"text-[#A8A5A0]",children:"Cognito"})]})]})]})});/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zm="186",TA=0,E_=1,AA=2,Wu=1,wA=2,Ll=3,cs=0,ei=1,za=2,Ga=0,Ol=1,Ip=2,M_=3,T_=4,RA=5,go=100,CA=101,NA=102,DA=103,UA=104,LA=200,FA=201,PA=202,OA=203,$y=204,eS=205,BA=206,IA=207,zA=208,HA=209,GA=210,VA=211,kA=212,jA=213,XA=214,zp=0,Hp=1,Gp=2,Il=3,Vp=4,kp=5,jp=6,Xp=7,tS=0,WA=1,qA=2,fa=0,nS=1,iS=2,aS=3,rS=4,sS=5,oS=6,lS=7,cS=300,us=301,Eo=302,ep=303,tp=304,pf=306,Wp=1e3,Ha=1001,qp=1002,On=1003,YA=1004,vu=1005,Hn=1006,np=1007,os=1008,Ri=1009,uS=1010,fS=1011,zl=1012,Hm=1013,ha=1014,ca=1015,pa=1016,Gm=1017,Vm=1018,Hl=1020,dS=35902,hS=35899,pS=1021,mS=1022,Hi=1023,Xa=1026,ls=1027,gS=1028,km=1029,fs=1030,jm=1031,Xm=1033,qu=33776,Yu=33777,Zu=33778,Ku=33779,Yp=35840,Zp=35841,Kp=35842,Qp=35843,Jp=36196,$p=37492,em=37496,tm=37488,nm=37489,ef=37490,im=37491,am=37808,rm=37809,sm=37810,om=37811,lm=37812,cm=37813,um=37814,fm=37815,dm=37816,hm=37817,pm=37818,mm=37819,gm=37820,xm=37821,vm=36492,_m=36494,ym=36495,Sm=36283,bm=36284,tf=36285,Em=36286,ZA=3200,A_=0,KA=1,Cr="",Ai="srgb",nf="srgb-linear",af="linear",Yt="srgb",ip=7680,QA=519,JA=512,$A=513,e2=514,Wm=515,t2=516,n2=517,qm=518,i2=519,a2=35044,w_="300 es",ua=2e3,rf=2001;function r2(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function sf(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function s2(){const s=sf("canvas");return s.style.display="block",s}const R_={};function C_(...s){const t="THREE."+s.shift();console.log(t,...s)}function xS(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=s[1];i&&i.isStackTrace?s[0]+=" "+i.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ot(...s){s=xS(s);const t="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...s)}}function Bt(...s){s=xS(s);const t="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...s)}}function vo(...s){const t=s.join(" ");t in R_||(R_[t]=!0,ot(...s))}function o2(s,t,i){return new Promise(function(r,l){function u(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const l2={[zp]:Hp,[Gp]:jp,[Vp]:Xp,[Il]:kp,[Hp]:zp,[jp]:Gp,[Xp]:Vp,[kp]:Il};class hs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,t);t.target=null}}}const In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ap=Math.PI/180,Mm=180/Math.PI;function Xl(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(In[s&255]+In[s>>8&255]+In[s>>16&255]+In[s>>24&255]+"-"+In[t&255]+In[t>>8&255]+"-"+In[t>>16&15|64]+In[t>>24&255]+"-"+In[i&63|128]+In[i>>8&255]+"-"+In[i>>16&255]+In[i>>24&255]+In[r&255]+In[r>>8&255]+In[r>>16&255]+In[r>>24&255]).toLowerCase()}function Ut(s,t,i){return Math.max(t,Math.min(i,s))}function c2(s,t){return(s%t+t)%t}function rp(s,t,i){return(1-i)*s+i*t}function Al(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function $n(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Qm=class Qm{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ut(this.x,t.x,i.x),this.y=Ut(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ut(this.x,t,i),this.y=Ut(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ut(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Ut(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,d=this.y-t.y;return this.x=u*r-d*l+t.x,this.y=u*l+d*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Qm.prototype.isVector2=!0;let Ht=Qm;class wo{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,d,h){let p=r[l+0],m=r[l+1],_=r[l+2],x=r[l+3],v=u[d+0],E=u[d+1],T=u[d+2],C=u[d+3];if(x!==C||p!==v||m!==E||_!==T){let b=p*v+m*E+_*T+x*C;b<0&&(v=-v,E=-E,T=-T,C=-C,b=-b);let S=1-h;if(b<.9995){const U=Math.acos(b),I=Math.sin(U);S=Math.sin(S*U)/I,h=Math.sin(h*U)/I,p=p*S+v*h,m=m*S+E*h,_=_*S+T*h,x=x*S+C*h}else{p=p*S+v*h,m=m*S+E*h,_=_*S+T*h,x=x*S+C*h;const U=1/Math.sqrt(p*p+m*m+_*_+x*x);p*=U,m*=U,_*=U,x*=U}}t[i]=p,t[i+1]=m,t[i+2]=_,t[i+3]=x}static multiplyQuaternionsFlat(t,i,r,l,u,d){const h=r[l],p=r[l+1],m=r[l+2],_=r[l+3],x=u[d],v=u[d+1],E=u[d+2],T=u[d+3];return t[i]=h*T+_*x+p*E-m*v,t[i+1]=p*T+_*v+m*x-h*E,t[i+2]=m*T+_*E+h*v-p*x,t[i+3]=_*T-h*x-p*v-m*E,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,d=t._order,h=Math.cos,p=Math.sin,m=h(r/2),_=h(l/2),x=h(u/2),v=p(r/2),E=p(l/2),T=p(u/2);switch(d){case"XYZ":this._x=v*_*x+m*E*T,this._y=m*E*x-v*_*T,this._z=m*_*T+v*E*x,this._w=m*_*x-v*E*T;break;case"YXZ":this._x=v*_*x+m*E*T,this._y=m*E*x-v*_*T,this._z=m*_*T-v*E*x,this._w=m*_*x+v*E*T;break;case"ZXY":this._x=v*_*x-m*E*T,this._y=m*E*x+v*_*T,this._z=m*_*T+v*E*x,this._w=m*_*x-v*E*T;break;case"ZYX":this._x=v*_*x-m*E*T,this._y=m*E*x+v*_*T,this._z=m*_*T-v*E*x,this._w=m*_*x+v*E*T;break;case"YZX":this._x=v*_*x+m*E*T,this._y=m*E*x+v*_*T,this._z=m*_*T-v*E*x,this._w=m*_*x-v*E*T;break;case"XZY":this._x=v*_*x-m*E*T,this._y=m*E*x-v*_*T,this._z=m*_*T+v*E*x,this._w=m*_*x+v*E*T;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],p=i[9],m=i[2],_=i[6],x=i[10],v=r+h+x;if(v>0){const E=.5/Math.sqrt(v+1);this._w=.25/E,this._x=(_-p)*E,this._y=(u-m)*E,this._z=(d-l)*E}else if(r>h&&r>x){const E=2*Math.sqrt(1+r-h-x);this._w=(_-p)/E,this._x=.25*E,this._y=(l+d)/E,this._z=(u+m)/E}else if(h>x){const E=2*Math.sqrt(1+h-r-x);this._w=(u-m)/E,this._x=(l+d)/E,this._y=.25*E,this._z=(p+_)/E}else{const E=2*Math.sqrt(1+x-r-h);this._w=(d-l)/E,this._x=(u+m)/E,this._y=(p+_)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ut(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,d=t._w,h=i._x,p=i._y,m=i._z,_=i._w;return this._x=r*_+d*h+l*m-u*p,this._y=l*_+d*p+u*h-r*m,this._z=u*_+d*m+r*p-l*h,this._w=d*_-r*h-l*p-u*m,this._onChangeCallback(),this}slerp(t,i){let r=t._x,l=t._y,u=t._z,d=t._w,h=this.dot(t);h<0&&(r=-r,l=-l,u=-u,d=-d,h=-h);let p=1-i;if(h<.9995){const m=Math.acos(h),_=Math.sin(m);p=Math.sin(p*m)/_,i=Math.sin(i*m)/_,this._x=this._x*p+r*i,this._y=this._y*p+l*i,this._z=this._z*p+u*i,this._w=this._w*p+d*i,this._onChangeCallback()}else this._x=this._x*p+r*i,this._y=this._y*p+l*i,this._z=this._z*p+u*i,this._w=this._w*p+d*i,this.normalize();return this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Jm=class Jm{constructor(t=0,i=0,r=0){this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(N_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(N_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,d=t.y,h=t.z,p=t.w,m=2*(d*l-h*r),_=2*(h*i-u*l),x=2*(u*r-d*i);return this.x=i+p*m+d*x-h*_,this.y=r+p*_+h*m-u*x,this.z=l+p*x+u*_-d*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ut(this.x,t.x,i.x),this.y=Ut(this.y,t.y,i.y),this.z=Ut(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ut(this.x,t,i),this.y=Ut(this.y,t,i),this.z=Ut(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ut(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,d=i.x,h=i.y,p=i.z;return this.x=l*p-u*h,this.y=u*d-r*p,this.z=r*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return sp.copy(this).projectOnVector(t),this.sub(sp)}reflect(t){return this.sub(sp.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Ut(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Jm.prototype.isVector3=!0;let me=Jm;const sp=new me,N_=new wo,$m=class $m{constructor(t,i,r,l,u,d,h,p,m){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,d,h,p,m)}set(t,i,r,l,u,d,h,p,m){const _=this.elements;return _[0]=t,_[1]=l,_[2]=h,_[3]=i,_[4]=u,_[5]=p,_[6]=r,_[7]=d,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],p=r[6],m=r[1],_=r[4],x=r[7],v=r[2],E=r[5],T=r[8],C=l[0],b=l[3],S=l[6],U=l[1],I=l[4],N=l[7],D=l[2],L=l[5],O=l[8];return u[0]=d*C+h*U+p*D,u[3]=d*b+h*I+p*L,u[6]=d*S+h*N+p*O,u[1]=m*C+_*U+x*D,u[4]=m*b+_*I+x*L,u[7]=m*S+_*N+x*O,u[2]=v*C+E*U+T*D,u[5]=v*b+E*I+T*L,u[8]=v*S+E*N+T*O,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],p=t[6],m=t[7],_=t[8];return i*d*_-i*h*m-r*u*_+r*h*p+l*u*m-l*d*p}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],p=t[6],m=t[7],_=t[8],x=_*d-h*m,v=h*p-_*u,E=m*u-d*p,T=i*x+r*v+l*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return t[0]=x*C,t[1]=(l*m-_*r)*C,t[2]=(h*r-l*d)*C,t[3]=v*C,t[4]=(_*i-l*p)*C,t[5]=(l*u-h*i)*C,t[6]=E*C,t[7]=(r*p-m*i)*C,t[8]=(d*i-r*u)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,d,h){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*d+m*h)+d+t,-l*m,l*p,-l*(-m*d+p*h)+h+i,0,0,1),this}scale(t,i){return vo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(op.makeScale(t,i)),this}rotate(t){return vo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(op.makeRotation(-t)),this}translate(t,i){return vo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(op.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}};$m.prototype.isMatrix3=!0;let dt=$m;const op=new dt,D_=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),U_=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function u2(){const s={enabled:!0,workingColorSpace:nf,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===Yt&&(l.r=Va(l.r),l.g=Va(l.g),l.b=Va(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Yt&&(l.r=_o(l.r),l.g=_o(l.g),l.b=_o(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Cr?af:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return vo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return vo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[nf]:{primaries:t,whitePoint:r,transfer:af,toXYZ:D_,fromXYZ:U_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ai},outputColorSpaceConfig:{drawingBufferColorSpace:Ai}},[Ai]:{primaries:t,whitePoint:r,transfer:Yt,toXYZ:D_,fromXYZ:U_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ai}}}),s}const Dt=u2();function Va(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function _o(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let to;class f2{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{to===void 0&&(to=sf("canvas")),to.width=t.width,to.height=t.height;const l=to.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=to}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=sf("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=Va(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Va(i[r]/255)*255):i[r]=Va(i[r]);return{data:i,width:t.width,height:t.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let d2=0;class Ym{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:d2++}),this.uuid=Xl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(lp(l[d].image)):u.push(lp(l[d]))}else u=lp(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function lp(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?f2.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}let h2=0;const cp=new me;class Gn extends hs{constructor(t=Gn.DEFAULT_IMAGE,i=Gn.DEFAULT_MAPPING,r=Ha,l=Ha,u=Hn,d=os,h=Hi,p=Ri,m=Gn.DEFAULT_ANISOTROPY,_=Cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:h2++}),this.uuid=Xl(),this.name="",this.source=new Ym(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(cp).x}get height(){return this.source.getSize(cp).y}get depth(){return this.source.getSize(cp).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){ot(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ot(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==cS)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wp:t.x=t.x-Math.floor(t.x);break;case Ha:t.x=t.x<0?0:1;break;case qp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wp:t.y=t.y-Math.floor(t.y);break;case Ha:t.y=t.y<0?0:1;break;case qp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=cS;Gn.DEFAULT_ANISOTROPY=1;const e0=class e0{constructor(t=0,i=0,r=0,l=1){this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,d=t.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const p=t.elements,m=p[0],_=p[4],x=p[8],v=p[1],E=p[5],T=p[9],C=p[2],b=p[6],S=p[10];if(Math.abs(_-v)<.01&&Math.abs(x-C)<.01&&Math.abs(T-b)<.01){if(Math.abs(_+v)<.1&&Math.abs(x+C)<.1&&Math.abs(T+b)<.1&&Math.abs(m+E+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const I=(m+1)/2,N=(E+1)/2,D=(S+1)/2,L=(_+v)/4,O=(x+C)/4,A=(T+b)/4;return I>N&&I>D?I<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(I),l=L/r,u=O/r):N>D?N<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(N),r=L/l,u=A/l):D<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(D),r=O/u,l=A/u),this.set(r,l,u,i),this}let U=Math.sqrt((b-T)*(b-T)+(x-C)*(x-C)+(v-_)*(v-_));return Math.abs(U)<.001&&(U=1),this.x=(b-T)/U,this.y=(x-C)/U,this.z=(v-_)/U,this.w=Math.acos((m+E+S-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ut(this.x,t.x,i.x),this.y=Ut(this.y,t.y,i.y),this.z=Ut(this.z,t.z,i.z),this.w=Ut(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ut(this.x,t,i),this.y=Ut(this.y,t,i),this.z=Ut(this.z,t,i),this.w=Ut(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ut(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};e0.prototype.isVector4=!0;let dn=e0;class p2 extends hs{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new dn(0,0,t,i),this.scissorTest=!1,this.viewport=new dn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:r.depth},u=new Gn(l),d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(t={}){const i={minFilter:Hn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Ym(l)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const i=t.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends p2{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class vS extends Gn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=On,this.minFilter=On,this.wrapR=Ha,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class m2 extends Gn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=On,this.minFilter=On,this.wrapR=Ha,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const lf=class lf{constructor(t,i,r,l,u,d,h,p,m,_,x,v,E,T,C,b){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,d,h,p,m,_,x,v,E,T,C,b)}set(t,i,r,l,u,d,h,p,m,_,x,v,E,T,C,b){const S=this.elements;return S[0]=t,S[4]=i,S[8]=r,S[12]=l,S[1]=u,S[5]=d,S[9]=h,S[13]=p,S[2]=m,S[6]=_,S[10]=x,S[14]=v,S[3]=E,S[7]=T,S[11]=C,S[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lf().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const i=this.elements,r=t.elements,l=1/no.setFromMatrixColumn(t,0).length(),u=1/no.setFromMatrixColumn(t,1).length(),d=1/no.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,d=Math.cos(r),h=Math.sin(r),p=Math.cos(l),m=Math.sin(l),_=Math.cos(u),x=Math.sin(u);if(t.order==="XYZ"){const v=d*_,E=d*x,T=h*_,C=h*x;i[0]=p*_,i[4]=-p*x,i[8]=m,i[1]=E+T*m,i[5]=v-C*m,i[9]=-h*p,i[2]=C-v*m,i[6]=T+E*m,i[10]=d*p}else if(t.order==="YXZ"){const v=p*_,E=p*x,T=m*_,C=m*x;i[0]=v+C*h,i[4]=T*h-E,i[8]=d*m,i[1]=d*x,i[5]=d*_,i[9]=-h,i[2]=E*h-T,i[6]=C+v*h,i[10]=d*p}else if(t.order==="ZXY"){const v=p*_,E=p*x,T=m*_,C=m*x;i[0]=v-C*h,i[4]=-d*x,i[8]=T+E*h,i[1]=E+T*h,i[5]=d*_,i[9]=C-v*h,i[2]=-d*m,i[6]=h,i[10]=d*p}else if(t.order==="ZYX"){const v=d*_,E=d*x,T=h*_,C=h*x;i[0]=p*_,i[4]=T*m-E,i[8]=v*m+C,i[1]=p*x,i[5]=C*m+v,i[9]=E*m-T,i[2]=-m,i[6]=h*p,i[10]=d*p}else if(t.order==="YZX"){const v=d*p,E=d*m,T=h*p,C=h*m;i[0]=p*_,i[4]=C-v*x,i[8]=T*x+E,i[1]=x,i[5]=d*_,i[9]=-h*_,i[2]=-m*_,i[6]=E*x+T,i[10]=v-C*x}else if(t.order==="XZY"){const v=d*p,E=d*m,T=h*p,C=h*m;i[0]=p*_,i[4]=-x,i[8]=m*_,i[1]=v*x+C,i[5]=d*_,i[9]=E*x-T,i[2]=T*x-E,i[6]=h*_,i[10]=C*x+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(g2,t,x2)}lookAt(t,i,r){const l=this.elements;return di.subVectors(t,i),di.lengthSq()===0&&(di.z=1),di.normalize(),Er.crossVectors(r,di),Er.lengthSq()===0&&(Math.abs(r.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),Er.crossVectors(r,di)),Er.normalize(),_u.crossVectors(di,Er),l[0]=Er.x,l[4]=_u.x,l[8]=di.x,l[1]=Er.y,l[5]=_u.y,l[9]=di.y,l[2]=Er.z,l[6]=_u.z,l[10]=di.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],p=r[8],m=r[12],_=r[1],x=r[5],v=r[9],E=r[13],T=r[2],C=r[6],b=r[10],S=r[14],U=r[3],I=r[7],N=r[11],D=r[15],L=l[0],O=l[4],A=l[8],P=l[12],V=l[1],Y=l[5],ne=l[9],ce=l[13],Q=l[2],k=l[6],W=l[10],j=l[14],se=l[3],ae=l[7],he=l[11],pe=l[15];return u[0]=d*L+h*V+p*Q+m*se,u[4]=d*O+h*Y+p*k+m*ae,u[8]=d*A+h*ne+p*W+m*he,u[12]=d*P+h*ce+p*j+m*pe,u[1]=_*L+x*V+v*Q+E*se,u[5]=_*O+x*Y+v*k+E*ae,u[9]=_*A+x*ne+v*W+E*he,u[13]=_*P+x*ce+v*j+E*pe,u[2]=T*L+C*V+b*Q+S*se,u[6]=T*O+C*Y+b*k+S*ae,u[10]=T*A+C*ne+b*W+S*he,u[14]=T*P+C*ce+b*j+S*pe,u[3]=U*L+I*V+N*Q+D*se,u[7]=U*O+I*Y+N*k+D*ae,u[11]=U*A+I*ne+N*W+D*he,u[15]=U*P+I*ce+N*j+D*pe,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],d=t[1],h=t[5],p=t[9],m=t[13],_=t[2],x=t[6],v=t[10],E=t[14],T=t[3],C=t[7],b=t[11],S=t[15],U=p*E-m*v,I=h*E-m*x,N=h*v-p*x,D=d*E-m*_,L=d*v-p*_,O=d*x-h*_;return i*(C*U-b*I+S*N)-r*(T*U-b*D+S*L)+l*(T*I-C*D+S*O)-u*(T*N-C*L+b*O)}determinantAffine(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[1],d=t[5],h=t[9],p=t[2],m=t[6],_=t[10];return i*(d*_-h*m)-r*(u*_-h*p)+l*(u*m-d*p)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],p=t[6],m=t[7],_=t[8],x=t[9],v=t[10],E=t[11],T=t[12],C=t[13],b=t[14],S=t[15],U=i*h-r*d,I=i*p-l*d,N=i*m-u*d,D=r*p-l*h,L=r*m-u*h,O=l*m-u*p,A=_*C-x*T,P=_*b-v*T,V=_*S-E*T,Y=x*b-v*C,ne=x*S-E*C,ce=v*S-E*b,Q=U*ce-I*ne+N*Y+D*V-L*P+O*A;if(Q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/Q;return t[0]=(h*ce-p*ne+m*Y)*k,t[1]=(l*ne-r*ce-u*Y)*k,t[2]=(C*O-b*L+S*D)*k,t[3]=(v*L-x*O-E*D)*k,t[4]=(p*V-d*ce-m*P)*k,t[5]=(i*ce-l*V+u*P)*k,t[6]=(b*N-T*O-S*I)*k,t[7]=(_*O-v*N+E*I)*k,t[8]=(d*ne-h*V+m*A)*k,t[9]=(r*V-i*ne-u*A)*k,t[10]=(T*L-C*N+S*U)*k,t[11]=(x*N-_*L-E*U)*k,t[12]=(h*P-d*Y-p*A)*k,t[13]=(i*Y-r*P+l*A)*k,t[14]=(C*I-T*D-b*U)*k,t[15]=(_*D-x*I+v*U)*k,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=t.x,h=t.y,p=t.z,m=u*d,_=u*h;return this.set(m*d+r,m*h-l*p,m*p+l*h,0,m*h+l*p,_*h+r,_*p-l*d,0,m*p-l*h,_*p+l*d,u*p*p+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,d){return this.set(1,r,u,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,p=i._w,m=u+u,_=d+d,x=h+h,v=u*m,E=u*_,T=u*x,C=d*_,b=d*x,S=h*x,U=p*m,I=p*_,N=p*x,D=r.x,L=r.y,O=r.z;return l[0]=(1-(C+S))*D,l[1]=(E+N)*D,l[2]=(T-I)*D,l[3]=0,l[4]=(E-N)*L,l[5]=(1-(v+S))*L,l[6]=(b+U)*L,l[7]=0,l[8]=(T+I)*O,l[9]=(b-U)*O,l[10]=(1-(v+C))*O,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const u=this.determinantAffine();if(u===0)return r.set(1,1,1),i.identity(),this;let d=no.set(l[0],l[1],l[2]).length();const h=no.set(l[4],l[5],l[6]).length(),p=no.set(l[8],l[9],l[10]).length();u<0&&(d=-d),Oi.copy(this);const m=1/d,_=1/h,x=1/p;return Oi.elements[0]*=m,Oi.elements[1]*=m,Oi.elements[2]*=m,Oi.elements[4]*=_,Oi.elements[5]*=_,Oi.elements[6]*=_,Oi.elements[8]*=x,Oi.elements[9]*=x,Oi.elements[10]*=x,i.setFromRotationMatrix(Oi),r.x=d,r.y=h,r.z=p,this}makePerspective(t,i,r,l,u,d,h=ua,p=!1){const m=this.elements,_=2*u/(i-t),x=2*u/(r-l),v=(i+t)/(i-t),E=(r+l)/(r-l);let T,C;if(p)T=u/(d-u),C=d*u/(d-u);else if(h===ua)T=-(d+u)/(d-u),C=-2*d*u/(d-u);else if(h===rf)T=-d/(d-u),C=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=_,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=x,m[9]=E,m[13]=0,m[2]=0,m[6]=0,m[10]=T,m[14]=C,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,r,l,u,d,h=ua,p=!1){const m=this.elements,_=2/(i-t),x=2/(r-l),v=-(i+t)/(i-t),E=-(r+l)/(r-l);let T,C;if(p)T=1/(d-u),C=d/(d-u);else if(h===ua)T=-2/(d-u),C=-(d+u)/(d-u);else if(h===rf)T=-1/(d-u),C=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=_,m[4]=0,m[8]=0,m[12]=v,m[1]=0,m[5]=x,m[9]=0,m[13]=E,m[2]=0,m[6]=0,m[10]=T,m[14]=C,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}};lf.prototype.isMatrix4=!0;let pn=lf;const no=new me,Oi=new pn,g2=new me(0,0,0),x2=new me(1,1,1),Er=new me,_u=new me,di=new me,L_=new pn,F_=new wo;class ds{constructor(t=0,i=0,r=0,l=ds.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],d=l[4],h=l[8],p=l[1],m=l[5],_=l[9],x=l[2],v=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Ut(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,E),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,E),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-x,E),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Ut(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(v,E),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Ut(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(h,E));break;case"XZY":this._z=Math.asin(-Ut(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-_,E),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return L_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(L_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return F_.setFromEuler(this),this.setFromQuaternion(F_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ds.DEFAULT_ORDER="XYZ";class _S{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let v2=0;const P_=new me,io=new wo,La=new pn,yu=new me,wl=new me,_2=new me,y2=new wo,O_=new me(1,0,0),B_=new me(0,1,0),I_=new me(0,0,1),z_={type:"added"},S2={type:"removed"},ao={type:"childadded",child:null},up={type:"childremoved",child:null};class ti extends hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:v2++}),this.uuid=Xl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ti.DEFAULT_UP.clone();const t=new me,i=new ds,r=new wo,l=new me(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new pn},normalMatrix:{value:new dt}}),this.matrix=new pn,this.matrixWorld=new pn,this.matrixAutoUpdate=ti.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _S,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return io.setFromAxisAngle(t,i),this.quaternion.multiply(io),this}rotateOnWorldAxis(t,i){return io.setFromAxisAngle(t,i),this.quaternion.premultiply(io),this}rotateX(t){return this.rotateOnAxis(O_,t)}rotateY(t){return this.rotateOnAxis(B_,t)}rotateZ(t){return this.rotateOnAxis(I_,t)}translateOnAxis(t,i){return P_.copy(t).applyQuaternion(this.quaternion),this.position.add(P_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(O_,t)}translateY(t){return this.translateOnAxis(B_,t)}translateZ(t){return this.translateOnAxis(I_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(La.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?yu.copy(t):yu.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),wl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?La.lookAt(wl,yu,this.up):La.lookAt(yu,wl,this.up),this.quaternion.setFromRotationMatrix(La),l&&(La.extractRotation(l.matrixWorld),io.setFromRotationMatrix(La),this.quaternion.premultiply(io.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Bt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(z_),ao.child=t,this.dispatchEvent(ao),ao.child=null):Bt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(S2),up.child=t,this.dispatchEvent(up),up.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),La.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),La.multiply(t.parent.matrixWorld)),t.applyMatrix4(La),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(z_),ao.child=t,this.dispatchEvent(ao),ao.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wl,t,_2),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wl,y2,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,r=t.y,l=t.z,u=this.matrix.elements;u[12]+=i-u[0]*i-u[4]*r-u[8]*l,u[13]+=r-u[1]*i-u[5]*r-u[9]*l,u[14]+=l-u[2]*i-u[6]*r-u[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i,r=!1){const l=this.parent;if(t===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const u=this.children;for(let d=0,h=u.length;d<h;d++)u[d].updateWorldMatrix(!1,!0,r)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,l.name=this.name,l.castShadow=this.castShadow,l.receiveShadow=this.receiveShadow,l.visible=this.visible,l.frustumCulled=this.frustumCulled,l.renderOrder=this.renderOrder,l.static=this.static,l.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const x=p[m];u(t.shapes,x)}else u(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(u(t.materials,this.material[p]));l.material=h}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(u(t.animations,p))}}if(i){const h=d(t.geometries),p=d(t.materials),m=d(t.textures),_=d(t.images),x=d(t.shapes),v=d(t.skeletons),E=d(t.animations),T=d(t.nodes);h.length>0&&(r.geometries=h),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),x.length>0&&(r.shapes=x),v.length>0&&(r.skeletons=v),E.length>0&&(r.animations=E),T.length>0&&(r.nodes=T)}return r.object=l,r;function d(h){const p=[];for(const m in h){const _=h[m];delete _.metadata,p.push(_)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}ti.DEFAULT_UP=new me(0,1,0);ti.DEFAULT_MATRIX_AUTO_UPDATE=!0;ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Su extends ti{constructor(){super(),this.isGroup=!0,this.type="Group"}}const b2={type:"move"};class fp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Su,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Su,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new me,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new me),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Su,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new me,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new me,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,d=null;const h=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){d=!0;for(const C of t.hand.values()){const b=i.getJointPose(C,r),S=this._getHandJoint(m,C);b!==null&&(S.matrix.fromArray(b.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=b.radius),S.visible=b!==null}const _=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],v=_.position.distanceTo(x.position),E=.02,T=.005;m.inputState.pinching&&v>E+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&v<=E-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:t,target:this})));h!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(b2)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Su;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}const yS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mr={h:0,s:0,l:0},bu={h:0,s:0,l:0};function dp(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class Lt{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Ai){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Dt.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Dt.workingColorSpace){return this.r=t,this.g=i,this.b=r,Dt.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Dt.workingColorSpace){if(t=c2(t,1),i=Ut(i,0,1),r=Ut(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=dp(d,u,t+1/3),this.g=dp(d,u,t),this.b=dp(d,u,t-1/3)}return Dt.colorSpaceToWorking(this,l),this}setStyle(t,i=Ai){function r(u){u!==void 0&&parseFloat(u)<1&&ot("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:ot("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);ot("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Ai){const r=yS[t.toLowerCase()];return r!==void 0?this.setHex(r,i):ot("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Va(t.r),this.g=Va(t.g),this.b=Va(t.b),this}copyLinearToSRGB(t){return this.r=_o(t.r),this.g=_o(t.g),this.b=_o(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ai){return Dt.workingToColorSpace(zn.copy(this),t),Math.round(Ut(zn.r*255,0,255))*65536+Math.round(Ut(zn.g*255,0,255))*256+Math.round(Ut(zn.b*255,0,255))}getHexString(t=Ai){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Dt.workingColorSpace){Dt.workingToColorSpace(zn.copy(this),i);const r=zn.r,l=zn.g,u=zn.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let p,m;const _=(h+d)/2;if(h===d)p=0,m=0;else{const x=d-h;switch(m=_<=.5?x/(d+h):x/(2-d-h),d){case r:p=(l-u)/x+(l<u?6:0);break;case l:p=(u-r)/x+2;break;case u:p=(r-l)/x+4;break}p/=6}return t.h=p,t.s=m,t.l=_,t}getRGB(t,i=Dt.workingColorSpace){return Dt.workingToColorSpace(zn.copy(this),i),t.r=zn.r,t.g=zn.g,t.b=zn.b,t}getStyle(t=Ai){Dt.workingToColorSpace(zn.copy(this),t);const i=zn.r,r=zn.g,l=zn.b;return t!==Ai?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Mr),this.setHSL(Mr.h+t,Mr.s+i,Mr.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Mr),t.getHSL(bu);const r=rp(Mr.h,bu.h,i),l=rp(Mr.s,bu.s,i),u=rp(Mr.l,bu.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new Lt;Lt.NAMES=yS;class Zm{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Lt(t),this.density=i}clone(){return new Zm(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class E2 extends ti{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ds,this.environmentIntensity=1,this.environmentRotation=new ds,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Bi=new me,Fa=new me,hp=new me,Pa=new me,ro=new me,so=new me,H_=new me,pp=new me,mp=new me,gp=new me,xp=new dn,vp=new dn,_p=new dn;class zi{constructor(t=new me,i=new me,r=new me){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Bi.subVectors(t,i),l.cross(Bi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){Bi.subVectors(l,i),Fa.subVectors(r,i),hp.subVectors(t,i);const d=Bi.dot(Bi),h=Bi.dot(Fa),p=Bi.dot(hp),m=Fa.dot(Fa),_=Fa.dot(hp),x=d*m-h*h;if(x===0)return u.set(0,0,0),null;const v=1/x,E=(m*p-h*_)*v,T=(d*_-h*p)*v;return u.set(1-E-T,T,E)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,Pa)===null?!1:Pa.x>=0&&Pa.y>=0&&Pa.x+Pa.y<=1}static getInterpolation(t,i,r,l,u,d,h,p){return this.getBarycoord(t,i,r,l,Pa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Pa.x),p.addScaledVector(d,Pa.y),p.addScaledVector(h,Pa.z),p)}static getInterpolatedAttribute(t,i,r,l,u,d){return xp.setScalar(0),vp.setScalar(0),_p.setScalar(0),xp.fromBufferAttribute(t,i),vp.fromBufferAttribute(t,r),_p.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(xp,u.x),d.addScaledVector(vp,u.y),d.addScaledVector(_p,u.z),d}static isFrontFacing(t,i,r,l){return Bi.subVectors(r,i),Fa.subVectors(t,i),Bi.cross(Fa).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bi.subVectors(this.c,this.b),Fa.subVectors(this.a,this.b),Bi.cross(Fa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return zi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return zi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return zi.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return zi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return zi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let d,h;ro.subVectors(l,r),so.subVectors(u,r),pp.subVectors(t,r);const p=ro.dot(pp),m=so.dot(pp);if(p<=0&&m<=0)return i.copy(r);mp.subVectors(t,l);const _=ro.dot(mp),x=so.dot(mp);if(_>=0&&x<=_)return i.copy(l);const v=p*x-_*m;if(v<=0&&p>=0&&_<=0)return d=p/(p-_),i.copy(r).addScaledVector(ro,d);gp.subVectors(t,u);const E=ro.dot(gp),T=so.dot(gp);if(T>=0&&E<=T)return i.copy(u);const C=E*m-p*T;if(C<=0&&m>=0&&T<=0)return h=m/(m-T),i.copy(r).addScaledVector(so,h);const b=_*T-E*x;if(b<=0&&x-_>=0&&E-T>=0)return H_.subVectors(u,l),h=(x-_)/(x-_+(E-T)),i.copy(l).addScaledVector(H_,h);const S=1/(b+C+v);return d=C*S,h=v*S,i.copy(r).addScaledVector(ro,d).addScaledVector(so,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Wl{constructor(t=new me(1/0,1/0,1/0),i=new me(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(Ii.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(Ii.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=Ii.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,Ii):Ii.fromBufferAttribute(u,d),Ii.applyMatrix4(t.matrixWorld),this.expandByPoint(Ii);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Eu.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Eu.copy(r.boundingBox)),Eu.applyMatrix4(t.matrixWorld),this.union(Eu)}const l=t.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ii),Ii.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Rl),Mu.subVectors(this.max,Rl),oo.subVectors(t.a,Rl),lo.subVectors(t.b,Rl),co.subVectors(t.c,Rl),Tr.subVectors(lo,oo),Ar.subVectors(co,lo),ts.subVectors(oo,co);let i=[0,-Tr.z,Tr.y,0,-Ar.z,Ar.y,0,-ts.z,ts.y,Tr.z,0,-Tr.x,Ar.z,0,-Ar.x,ts.z,0,-ts.x,-Tr.y,Tr.x,0,-Ar.y,Ar.x,0,-ts.y,ts.x,0];return!yp(i,oo,lo,co,Mu)||(i=[1,0,0,0,1,0,0,0,1],!yp(i,oo,lo,co,Mu))?!1:(Tu.crossVectors(Tr,Ar),i=[Tu.x,Tu.y,Tu.z],yp(i,oo,lo,co,Mu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ii).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ii).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Oa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Oa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Oa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Oa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Oa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Oa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Oa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Oa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Oa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Oa=[new me,new me,new me,new me,new me,new me,new me,new me],Ii=new me,Eu=new Wl,oo=new me,lo=new me,co=new me,Tr=new me,Ar=new me,ts=new me,Rl=new me,Mu=new me,Tu=new me,ns=new me;function yp(s,t,i,r,l){for(let u=0,d=s.length-3;u<=d;u+=3){ns.fromArray(s,u);const h=l.x*Math.abs(ns.x)+l.y*Math.abs(ns.y)+l.z*Math.abs(ns.z),p=t.dot(ns),m=i.dot(ns),_=r.dot(ns);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>h)return!1}return!0}const yn=new me,Au=new Ht;let M2=0;class ki extends hs{constructor(t,i,r=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:M2++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=a2,this.updateRanges=[],this.gpuType=ca,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Au.fromBufferAttribute(this,i),Au.applyMatrix3(t),this.setXY(i,Au.x,Au.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)yn.fromBufferAttribute(this,i),yn.applyMatrix3(t),this.setXYZ(i,yn.x,yn.y,yn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)yn.fromBufferAttribute(this,i),yn.applyMatrix4(t),this.setXYZ(i,yn.x,yn.y,yn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)yn.fromBufferAttribute(this,i),yn.applyNormalMatrix(t),this.setXYZ(i,yn.x,yn.y,yn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)yn.fromBufferAttribute(this,i),yn.transformDirection(t),this.setXYZ(i,yn.x,yn.y,yn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Al(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=$n(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Al(i,this.array)),i}setX(t,i){return this.normalized&&(i=$n(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Al(i,this.array)),i}setY(t,i){return this.normalized&&(i=$n(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Al(i,this.array)),i}setZ(t,i){return this.normalized&&(i=$n(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Al(i,this.array)),i}setW(t,i){return this.normalized&&(i=$n(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=$n(i,this.array),r=$n(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=$n(i,this.array),r=$n(r,this.array),l=$n(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=$n(i,this.array),r=$n(r,this.array),l=$n(l,this.array),u=$n(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class SS extends ki{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class bS extends ki{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class ka extends ki{constructor(t,i,r){super(new Float32Array(t),i,r)}}const T2=new Wl,Cl=new me,Sp=new me;class mf{constructor(t=new me,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):T2.setFromPoints(t).getCenter(r);let l=0;for(let u=0,d=t.length;u<d;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Cl.subVectors(t,this.center);const i=Cl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Cl,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sp.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Cl.copy(t.center).add(Sp)),this.expandByPoint(Cl.copy(t.center).sub(Sp))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let A2=0;const Ti=new pn,bp=new ti,uo=new me,hi=new Wl,Nl=new Wl,Rn=new me;class Xi extends hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:A2++}),this.uuid=Xl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(r2(t)?bS:SS)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new dt().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ti.makeRotationFromQuaternion(t),this.applyMatrix4(Ti),this}rotateX(t){return Ti.makeRotationX(t),this.applyMatrix4(Ti),this}rotateY(t){return Ti.makeRotationY(t),this.applyMatrix4(Ti),this}rotateZ(t){return Ti.makeRotationZ(t),this.applyMatrix4(Ti),this}translate(t,i,r){return Ti.makeTranslation(t,i,r),this.applyMatrix4(Ti),this}scale(t,i,r){return Ti.makeScale(t,i,r),this.applyMatrix4(Ti),this}lookAt(t){return bp.lookAt(t),bp.updateMatrix(),this.applyMatrix4(bp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(uo).negate(),this.translate(uo.x,uo.y,uo.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const d=t[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new ka(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new me(-1/0,-1/0,-1/0),new me(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];hi.setFromBufferAttribute(u),this.morphTargetsRelative?(Rn.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(Rn),Rn.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(Rn)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mf);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new me,1/0);return}if(t){const r=this.boundingSphere.center;if(hi.setFromBufferAttribute(t),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Nl.setFromBufferAttribute(h),this.morphTargetsRelative?(Rn.addVectors(hi.min,Nl.min),hi.expandByPoint(Rn),Rn.addVectors(hi.max,Nl.max),hi.expandByPoint(Rn)):(hi.expandByPoint(Nl.min),hi.expandByPoint(Nl.max))}hi.getCenter(r);let l=0;for(let u=0,d=t.count;u<d;u++)Rn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(Rn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],p=this.morphTargetsRelative;for(let m=0,_=h.count;m<_;m++)Rn.fromBufferAttribute(h,m),p&&(uo.fromBufferAttribute(t,m),Rn.add(uo)),l=Math.max(l,r.distanceToSquared(Rn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==r.count)&&(d=new ki(new Float32Array(4*r.count),4),this.setAttribute("tangent",d));const h=[],p=[];for(let A=0;A<r.count;A++)h[A]=new me,p[A]=new me;const m=new me,_=new me,x=new me,v=new Ht,E=new Ht,T=new Ht,C=new me,b=new me;function S(A,P,V){m.fromBufferAttribute(r,A),_.fromBufferAttribute(r,P),x.fromBufferAttribute(r,V),v.fromBufferAttribute(u,A),E.fromBufferAttribute(u,P),T.fromBufferAttribute(u,V),_.sub(m),x.sub(m),E.sub(v),T.sub(v);const Y=1/(E.x*T.y-T.x*E.y);isFinite(Y)&&(C.copy(_).multiplyScalar(T.y).addScaledVector(x,-E.y).multiplyScalar(Y),b.copy(x).multiplyScalar(E.x).addScaledVector(_,-T.x).multiplyScalar(Y),h[A].add(C),h[P].add(C),h[V].add(C),p[A].add(b),p[P].add(b),p[V].add(b))}let U=this.groups;U.length===0&&(U=[{start:0,count:t.count}]);for(let A=0,P=U.length;A<P;++A){const V=U[A],Y=V.start,ne=V.count;for(let ce=Y,Q=Y+ne;ce<Q;ce+=3)S(t.getX(ce+0),t.getX(ce+1),t.getX(ce+2))}const I=new me,N=new me,D=new me,L=new me;function O(A){D.fromBufferAttribute(l,A),L.copy(D);const P=h[A];I.copy(P),I.sub(D.multiplyScalar(D.dot(P))).normalize(),N.crossVectors(L,P);const Y=N.dot(p[A])<0?-1:1;d.setXYZW(A,I.x,I.y,I.z,Y)}for(let A=0,P=U.length;A<P;++A){const V=U[A],Y=V.start,ne=V.count;for(let ce=Y,Q=Y+ne;ce<Q;ce+=3)O(t.getX(ce+0)),O(t.getX(ce+1)),O(t.getX(ce+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new ki(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,E=r.count;v<E;v++)r.setXYZ(v,0,0,0);const l=new me,u=new me,d=new me,h=new me,p=new me,m=new me,_=new me,x=new me;if(t)for(let v=0,E=t.count;v<E;v+=3){const T=t.getX(v+0),C=t.getX(v+1),b=t.getX(v+2);l.fromBufferAttribute(i,T),u.fromBufferAttribute(i,C),d.fromBufferAttribute(i,b),_.subVectors(d,u),x.subVectors(l,u),_.cross(x),h.fromBufferAttribute(r,T),p.fromBufferAttribute(r,C),m.fromBufferAttribute(r,b),h.add(_),p.add(_),m.add(_),r.setXYZ(T,h.x,h.y,h.z),r.setXYZ(C,p.x,p.y,p.z),r.setXYZ(b,m.x,m.y,m.z)}else for(let v=0,E=i.count;v<E;v+=3)l.fromBufferAttribute(i,v+0),u.fromBufferAttribute(i,v+1),d.fromBufferAttribute(i,v+2),_.subVectors(d,u),x.subVectors(l,u),_.cross(x),r.setXYZ(v+0,_.x,_.y,_.z),r.setXYZ(v+1,_.x,_.y,_.z),r.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Rn.fromBufferAttribute(t,i),Rn.normalize(),t.setXYZ(i,Rn.x,Rn.y,Rn.z)}toNonIndexed(){function t(h,p){const m=h.array,_=h.itemSize,x=h.normalized,v=new m.constructor(p.length*_);let E=0,T=0;for(let C=0,b=p.length;C<b;C++){h.isInterleavedBufferAttribute?E=p[C]*h.data.stride+h.offset:E=p[C]*_;for(let S=0;S<_;S++)v[T++]=m[E++]}return new ki(v,_,x)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Xi,r=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=t(p,r);i.setAttribute(h,m)}const u=this.morphAttributes;for(const h in u){const p=[],m=u[h];for(let _=0,x=m.length;_<x;_++){const v=m[_],E=t(v,r);p.push(E)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,p=d.length;h<p;h++){const m=d[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let x=0,v=m.length;x<v;x++){const E=m[x];_.push(E.toJSON(t.data))}_.length>0&&(l[p]=_,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const m in l){const _=l[m];this.setAttribute(m,_.clone(i))}const u=t.morphAttributes;for(const m in u){const _=[],x=u[m];for(let v=0,E=x.length;v<E;v++)_.push(x[v].clone(i));this.morphAttributes[m]=_}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let m=0,_=d.length;m<_;m++){const x=d[m];this.addGroup(x.start,x.count,x.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ep=new me,w2=new me,R2=new dt;class Rr{constructor(t=new me(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Ep.subVectors(r,i).cross(w2.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,r=!0){const l=t.delta(Ep),u=this.normal.dot(l);if(u===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const d=-(t.start.dot(this.normal)+this.constant)/u;return r===!0&&(d<0||d>1)?null:i.copy(t.start).addScaledVector(l,d)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||R2.getNormalMatrix(t),l=this.coplanarPoint(Ep).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let C2=0;class ql extends hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:C2++}),this.uuid=Xl(),this.name="",this.type="Material",this.blending=Ol,this.side=cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$y,this.blendDst=eS,this.blendEquation=go,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=Il,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=QA,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ip,this.stencilZFail=ip,this.stencilZPass=ip,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){ot(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ot(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector2&&r&&r.isVector2||l&&l.isEuler&&r&&r.isEuler||l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(u=>u.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const p=u[h];delete p.metadata,d.push(p)}return d}if(i){const u=l(t.textures),d=l(t.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}fromJSON(t,i){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Lt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(r=>new Rr().fromJSON(r))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=i[t.map]||null),t.matcap!==void 0&&(this.matcap=i[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=i[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=i[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=i[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let r=t.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Ht().fromArray(r)}return t.displacementMap!==void 0&&(this.displacementMap=i[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=i[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=i[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=i[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=i[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=i[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=i[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=i[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=i[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=i[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=i[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ht().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=i[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=i[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=i[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=i[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=i[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Ba=new me,Mp=new me,wu=new me,Ru=new me;class ES{constructor(t=new me,i=new me(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ba)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ba.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ba.copy(this.origin).addScaledVector(this.direction,i),Ba.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Mp.copy(t).add(i).multiplyScalar(.5),wu.copy(i).sub(t).normalize(),Ru.copy(this.origin).sub(Mp);const u=t.distanceTo(i)*.5,d=-this.direction.dot(wu),h=Ru.dot(this.direction),p=-Ru.dot(wu),m=Ru.lengthSq(),_=Math.abs(1-d*d);let x,v,E,T;if(_>0)if(x=d*p-h,v=d*h-p,T=u*_,x>=0)if(v>=-T)if(v<=T){const C=1/_;x*=C,v*=C,E=x*(x+d*v+2*h)+v*(d*x+v+2*p)+m}else v=u,x=Math.max(0,-(d*v+h)),E=-x*x+v*(v+2*p)+m;else v=-u,x=Math.max(0,-(d*v+h)),E=-x*x+v*(v+2*p)+m;else v<=-T?(x=Math.max(0,-(-d*u+h)),v=x>0?-u:Math.min(Math.max(-u,-p),u),E=-x*x+v*(v+2*p)+m):v<=T?(x=0,v=Math.min(Math.max(-u,-p),u),E=v*(v+2*p)+m):(x=Math.max(0,-(d*u+h)),v=x>0?u:Math.min(Math.max(-u,-p),u),E=-x*x+v*(v+2*p)+m);else v=d>0?-u:u,x=Math.max(0,-(d*v+h)),E=-x*x+v*(v+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Mp).addScaledVector(wu,v),E}intersectSphere(t,i){if(t.radius<0)return null;Ba.subVectors(t.center,this.origin);const r=Ba.dot(this.direction),l=Ba.dot(Ba)-r*r,u=t.radius*t.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,p=r+d;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,d,h,p;const m=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,v=this.origin;return m>=0?(r=(t.min.x-v.x)*m,l=(t.max.x-v.x)*m):(r=(t.max.x-v.x)*m,l=(t.min.x-v.x)*m),_>=0?(u=(t.min.y-v.y)*_,d=(t.max.y-v.y)*_):(u=(t.max.y-v.y)*_,d=(t.min.y-v.y)*_),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),x>=0?(h=(t.min.z-v.z)*x,p=(t.max.z-v.z)*x):(h=(t.max.z-v.z)*x,p=(t.min.z-v.z)*x),r>p||h>l)||((h>r||r!==r)&&(r=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,Ba)!==null}intersectTriangle(t,i,r,l,u){const d=this.origin,h=this.direction,p=h.x,m=h.y,_=h.z,x=t.x-d.x,v=t.y-d.y,E=t.z-d.z,T=i.x-d.x,C=i.y-d.y,b=i.z-d.z,S=r.x-d.x,U=r.y-d.y,I=r.z-d.z,N=Math.abs(p),D=Math.abs(m),L=Math.abs(_);let O,A,P,V,Y,ne,ce,Q,k,W,j,se;if(N>=D&&N>=L?(P=p,ne=x,k=T,se=S,p>=0?(O=m,A=_,V=v,Y=E,ce=C,Q=b,W=U,j=I):(O=_,A=m,V=E,Y=v,ce=b,Q=C,W=I,j=U)):D>=L?(P=m,ne=v,k=C,se=U,m>=0?(O=_,A=p,V=E,Y=x,ce=b,Q=T,W=I,j=S):(O=p,A=_,V=x,Y=E,ce=T,Q=b,W=S,j=I)):(P=_,ne=E,k=b,se=I,_>=0?(O=p,A=m,V=x,Y=v,ce=T,Q=C,W=S,j=U):(O=m,A=p,V=v,Y=x,ce=C,Q=T,W=U,j=S)),P===0)return null;const ae=O/P,he=A/P,pe=1/P,ze=V-ae*ne,qe=Y-he*ne,z=ce-ae*k,ve=Q-he*k,Re=W-ae*se,J=j-he*se,ge=Re*ve-J*z,Ae=ze*J-qe*Re,Ie=z*qe-ve*ze;if(l){if(ge<0||Ae<0||Ie<0)return null}else if((ge<0||Ae<0||Ie<0)&&(ge>0||Ae>0||Ie>0))return null;const ye=ge+Ae+Ie;if(ye===0)return null;const Ce=pe*(ge*ne+Ae*k+Ie*se);return(ye>0?Ce<0:Ce>0)?null:this.at(Ce/ye,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class MS extends ql{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ds,this.combine=tS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const G_=new pn,is=new ES,Cu=new mf,V_=new me,Nu=new me,Du=new me,Uu=new me,Tp=new me,Lu=new me,k_=new me,Fu=new me;class Wa extends ti{constructor(t=new Xi,i=new MS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(u&&h){Lu.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const _=h[p],x=u[p];_!==0&&(Tp.fromBufferAttribute(x,t),d?Lu.addScaledVector(Tp,_):Lu.addScaledVector(Tp.sub(i),_))}i.add(Lu)}return i}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Cu.copy(r.boundingSphere),Cu.applyMatrix4(u),is.copy(t.ray).recast(t.near),!(Cu.containsPoint(is.origin)===!1&&(is.intersectSphere(Cu,V_)===null||is.origin.distanceToSquared(V_)>(t.far-t.near)**2))&&(G_.copy(u).invert(),is.copy(t.ray).applyMatrix4(G_),!(r.boundingBox!==null&&is.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,is)))}_computeIntersections(t,i,r){let l;const u=this.geometry,d=this.material,h=u.index,p=u.attributes.position,m=u.attributes.uv,_=u.attributes.uv1,x=u.attributes.normal,v=u.groups,E=u.drawRange;if(h!==null)if(Array.isArray(d))for(let T=0,C=v.length;T<C;T++){const b=v[T],S=d[b.materialIndex],U=Math.max(b.start,E.start),I=Math.min(h.count,Math.min(b.start+b.count,E.start+E.count));for(let N=U,D=I;N<D;N+=3){const L=h.getX(N),O=h.getX(N+1),A=h.getX(N+2);l=Pu(this,S,t,r,m,_,x,L,O,A),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const T=Math.max(0,E.start),C=Math.min(h.count,E.start+E.count);for(let b=T,S=C;b<S;b+=3){const U=h.getX(b),I=h.getX(b+1),N=h.getX(b+2);l=Pu(this,d,t,r,m,_,x,U,I,N),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(d))for(let T=0,C=v.length;T<C;T++){const b=v[T],S=d[b.materialIndex],U=Math.max(b.start,E.start),I=Math.min(p.count,Math.min(b.start+b.count,E.start+E.count));for(let N=U,D=I;N<D;N+=3){const L=N,O=N+1,A=N+2;l=Pu(this,S,t,r,m,_,x,L,O,A),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const T=Math.max(0,E.start),C=Math.min(p.count,E.start+E.count);for(let b=T,S=C;b<S;b+=3){const U=b,I=b+1,N=b+2;l=Pu(this,d,t,r,m,_,x,U,I,N),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}}}function N2(s,t,i,r,l,u,d,h){let p;if(t.side===ei?p=r.intersectTriangle(d,u,l,!0,h):p=r.intersectTriangle(l,u,d,t.side===cs,h),p===null)return null;Fu.copy(h),Fu.applyMatrix4(s.matrixWorld);const m=i.ray.origin.distanceTo(Fu);return m<i.near||m>i.far?null:{distance:m,point:Fu.clone(),object:s}}function Pu(s,t,i,r,l,u,d,h,p,m){s.getVertexPosition(h,Nu),s.getVertexPosition(p,Du),s.getVertexPosition(m,Uu);const _=N2(s,t,i,r,Nu,Du,Uu,k_);if(_){const x=new me;zi.getBarycoord(k_,Nu,Du,Uu,x),l&&(_.uv=zi.getInterpolatedAttribute(l,h,p,m,x,new Ht)),u&&(_.uv1=zi.getInterpolatedAttribute(u,h,p,m,x,new Ht)),d&&(_.normal=zi.getInterpolatedAttribute(d,h,p,m,x,new me),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const v={a:h,b:p,c:m,normal:new me,materialIndex:0};zi.getNormal(Nu,Du,Uu,v.normal),_.face=v,_.barycoord=x}return _}class D2 extends Gn{constructor(t=null,i=1,r=1,l,u,d,h,p,m=On,_=On,x,v){super(null,d,h,p,m,_,l,u,x,v),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const as=new mf,U2=new Ht(.5,.5),Ou=new me;class TS{constructor(t=new Rr,i=new Rr,r=new Rr,l=new Rr,u=new Rr,d=new Rr){this.planes=[t,i,r,l,u,d]}set(t,i,r,l,u,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=ua,r=!1){const l=this.planes,u=t.elements,d=u[0],h=u[1],p=u[2],m=u[3],_=u[4],x=u[5],v=u[6],E=u[7],T=u[8],C=u[9],b=u[10],S=u[11],U=u[12],I=u[13],N=u[14],D=u[15];if(l[0].setComponents(m-d,E-_,S-T,D-U).normalize(),l[1].setComponents(m+d,E+_,S+T,D+U).normalize(),l[2].setComponents(m+h,E+x,S+C,D+I).normalize(),l[3].setComponents(m-h,E-x,S-C,D-I).normalize(),r)l[4].setComponents(p,v,b,N).normalize(),l[5].setComponents(m-p,E-v,S-b,D-N).normalize();else if(l[4].setComponents(m-p,E-v,S-b,D-N).normalize(),i===ua)l[5].setComponents(m+p,E+v,S+b,D+N).normalize();else if(i===rf)l[5].setComponents(p,v,b,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),as.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(t){as.center.set(0,0,0);const i=U2.distanceTo(t.center);return as.radius=.7071067811865476+i,as.applyMatrix4(t.matrixWorld),this.intersectsSphere(as)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Ou.x=l.normal.x>0?t.max.x:t.min.x,Ou.y=l.normal.y>0?t.max.y:t.min.y,Ou.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Ou)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class AS extends ql{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const j_=new pn,Tm=new ES,Bu=new mf,Iu=new me;class L2 extends ti{constructor(t=new Xi,i=new AS){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const r=this.geometry,l=this.matrixWorld,u=t.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Bu.copy(r.boundingSphere),Bu.applyMatrix4(l),Bu.radius+=u,t.ray.intersectsSphere(Bu)===!1)return;j_.copy(l).invert(),Tm.copy(t.ray).applyMatrix4(j_);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,m=r.index,x=r.attributes.position;if(m!==null){const v=Math.max(0,d.start),E=Math.min(m.count,d.start+d.count);for(let T=v,C=E;T<C;T++){const b=m.getX(T);Iu.fromBufferAttribute(x,b),X_(Iu,b,p,l,t,i,this)}}else{const v=Math.max(0,d.start),E=Math.min(x.count,d.start+d.count);for(let T=v,C=E;T<C;T++)Iu.fromBufferAttribute(x,T),X_(Iu,T,p,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function X_(s,t,i,r,l,u,d){const h=Tm.distanceSqToPoint(s);if(h<i){const p=new me;Tm.closestPointToPoint(s,p),p.applyMatrix4(r);const m=l.ray.origin.distanceTo(p);if(m<l.near||m>l.far)return;u.push({distance:m,distanceToRay:Math.sqrt(h),point:p,index:t,face:null,faceIndex:null,barycoord:null,object:d})}}class wS extends Gn{constructor(t=[],i=us,r,l,u,d,h,p,m,_){super(t,i,r,l,u,d,h,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class F2 extends Gn{constructor(t,i,r,l,u,d,h,p,m){super(t,i,r,l,u,d,h,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Gl extends Gn{constructor(t,i,r=ha,l,u,d,h=On,p=On,m,_=Xa,x=1){if(_!==Xa&&_!==ls)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:i,depth:x};super(v,l,u,d,h,p,_,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ym(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return i.compareFunction=this.compareFunction,i}}class P2 extends Gl{constructor(t,i=ha,r=us,l,u,d=On,h=On,p,m=Xa){const _={width:t,height:t,depth:1},x=[_,_,_,_,_,_];super(t,t,i,r,l,u,d,h,p,m),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class RS extends Gn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Yl extends Xi{constructor(t=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const p=[],m=[],_=[],x=[];let v=0,E=0;T("z","y","x",-1,-1,r,i,t,d,u,0),T("z","y","x",1,-1,r,i,-t,d,u,1),T("x","z","y",1,1,t,r,i,l,d,2),T("x","z","y",1,-1,t,r,-i,l,d,3),T("x","y","z",1,-1,t,i,r,l,u,4),T("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(p),this.setAttribute("position",new ka(m,3)),this.setAttribute("normal",new ka(_,3)),this.setAttribute("uv",new ka(x,2));function T(C,b,S,U,I,N,D,L,O,A,P){const V=N/O,Y=D/A,ne=N/2,ce=D/2,Q=L/2,k=O+1,W=A+1;let j=0,se=0;const ae=new me;for(let he=0;he<W;he++){const pe=he*Y-ce;for(let ze=0;ze<k;ze++){const qe=ze*V-ne;ae[C]=qe*U,ae[b]=pe*I,ae[S]=Q,m.push(ae.x,ae.y,ae.z),ae[C]=0,ae[b]=0,ae[S]=L>0?1:-1,_.push(ae.x,ae.y,ae.z),x.push(ze/O),x.push(1-he/A),j+=1}}for(let he=0;he<A;he++)for(let pe=0;pe<O;pe++){const ze=v+pe+k*he,qe=v+pe+k*(he+1),z=v+(pe+1)+k*(he+1),ve=v+(pe+1)+k*he;p.push(ze,qe,ve),p.push(qe,z,ve),se+=6}h.addGroup(E,se,P),E+=se,v+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class gf extends Xi{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,d=i/2,h=Math.floor(r),p=Math.floor(l),m=h+1,_=p+1,x=t/h,v=i/p,E=[],T=[],C=[],b=[];for(let S=0;S<_;S++){const U=S*v-d;for(let I=0;I<m;I++){const N=I*x-u;T.push(N,-U,0),C.push(0,0,1),b.push(I/h),b.push(1-S/p)}}for(let S=0;S<p;S++)for(let U=0;U<h;U++){const I=U+m*S,N=U+m*(S+1),D=U+1+m*(S+1),L=U+1+m*S;E.push(I,N,L),E.push(N,D,L)}this.setIndex(E),this.setAttribute("position",new ka(T,3)),this.setAttribute("normal",new ka(C,3)),this.setAttribute("uv",new ka(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gf(t.width,t.height,t.widthSegments,t.heightSegments)}}function Mo(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];if(W_(l))l.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone();else if(Array.isArray(l))if(W_(l[0])){const u=[];for(let d=0,h=l.length;d<h;d++)u[d]=l[d].clone();t[i][r]=u}else t[i][r]=l.slice();else t[i][r]=l}}return t}function qn(s){const t={};for(let i=0;i<s.length;i++){const r=Mo(s[i]);for(const l in r)t[l]=r[l]}return t}function W_(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function O2(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function CS(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Dt.workingColorSpace}const B2={clone:Mo,merge:qn};var I2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,z2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ma extends ql{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=I2,this.fragmentShader=z2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Mo(t.uniforms),this.uniformsGroups=O2(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(t,i){if(super.fromJSON(t,i),t.uniforms!==void 0)for(const r in t.uniforms){const l=t.uniforms[r];switch(this.uniforms[r]={},l.type){case"t":this.uniforms[r].value=i[l.value]||null;break;case"c":this.uniforms[r].value=new Lt().setHex(l.value);break;case"v2":this.uniforms[r].value=new Ht().fromArray(l.value);break;case"v3":this.uniforms[r].value=new me().fromArray(l.value);break;case"v4":this.uniforms[r].value=new dn().fromArray(l.value);break;case"m3":this.uniforms[r].value=new dt().fromArray(l.value);break;case"m4":this.uniforms[r].value=new pn().fromArray(l.value);break;default:this.uniforms[r].value=l.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const r in t.extensions)this.extensions[r]=t.extensions[r];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class H2 extends ma{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class G2 extends ql{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ZA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class V2 extends ql{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const zu=new me,Hu=new wo,sa=new me;class NS extends ti{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pn,this.projectionMatrix=new pn,this.projectionMatrixInverse=new pn,this.coordinateSystem=ua,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(zu,Hu,sa),sa.x===1&&sa.y===1&&sa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zu,Hu,sa.set(1,1,1)).invert()}updateWorldMatrix(t,i,r=!1){super.updateWorldMatrix(t,i,r),this.matrixWorld.decompose(zu,Hu,sa),sa.x===1&&sa.y===1&&sa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zu,Hu,sa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const wr=new me,q_=new Ht,Y_=new Ht;class wi extends NS{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Mm*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ap*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Mm*2*Math.atan(Math.tan(ap*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){wr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wr.x,wr.y).multiplyScalar(-t/wr.z),wr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(wr.x,wr.y).multiplyScalar(-t/wr.z)}getViewSize(t,i){return this.getViewBounds(t,q_,Y_),i.subVectors(Y_,q_)}setViewOffset(t,i,r,l,u,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(ap*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;u+=d.offsetX*l/p,i-=d.offsetY*r/m,l*=d.width/p,r*=d.height/m}const h=this.filmOffset;h!==0&&(u+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class DS extends NS{constructor(t=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,d=r+t,h=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,d=u+m*this.view.width,h-=_*this.view.offsetY,p=h-_*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const fo=-90,ho=1;class k2 extends ti{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new wi(fo,ho,t,i);l.layers=this.layers,this.add(l);const u=new wi(fo,ho,t,i);u.layers=this.layers,this.add(u);const d=new wi(fo,ho,t,i);d.layers=this.layers,this.add(d);const h=new wi(fo,ho,t,i);h.layers=this.layers,this.add(h);const p=new wi(fo,ho,t,i);p.layers=this.layers,this.add(p);const m=new wi(fo,ho,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,p]=i;for(const m of i)this.remove(m);if(t===ua)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===rf)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,p,m,_]=this.children,x=t.getRenderTarget(),v=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let b=!1;t.isWebGLRenderer===!0?b=t.state.buffers.depth.getReversed():b=t.reversedDepthBuffer,t.setRenderTarget(r,0,l),b&&t.autoClear===!1&&t.clearDepth(),t.render(i,u),t.setRenderTarget(r,1,l),b&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(r,2,l),b&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(r,3,l),b&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(r,4,l),b&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),r.texture.generateMipmaps=C,t.setRenderTarget(r,5,l),b&&t.autoClear===!1&&t.clearDepth(),t.render(i,_),t.setRenderTarget(x,v,E),t.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class j2 extends wi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class X2{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ot("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}const t0=class t0{constructor(t,i,r,l){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,r,l)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let r=0;r<4;r++)this.elements[r]=t[r+i];return this}set(t,i,r,l){const u=this.elements;return u[0]=t,u[2]=i,u[1]=r,u[3]=l,this}};t0.prototype.isMatrix2=!0;let Z_=t0;function K_(s,t,i,r){const l=W2(r);switch(i){case pS:return s*t;case gS:return s*t/l.components*l.byteLength;case km:return s*t/l.components*l.byteLength;case fs:return s*t*2/l.components*l.byteLength;case jm:return s*t*2/l.components*l.byteLength;case mS:return s*t*3/l.components*l.byteLength;case Hi:return s*t*4/l.components*l.byteLength;case Xm:return s*t*4/l.components*l.byteLength;case qu:case Yu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Zu:case Ku:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Zp:case Qp:return Math.max(s,16)*Math.max(t,8)/4;case Yp:case Kp:return Math.max(s,8)*Math.max(t,8)/2;case Jp:case $p:case tm:case nm:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case em:case ef:case im:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case am:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case rm:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case sm:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case om:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case lm:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case cm:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case um:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case fm:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case dm:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case hm:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case pm:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case mm:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case gm:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case xm:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case vm:case _m:case ym:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Sm:case bm:return Math.ceil(s/4)*Math.ceil(t/4)*8;case tf:case Em:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function W2(s){switch(s){case Ri:case uS:return{byteLength:1,components:1};case zl:case fS:case pa:return{byteLength:2,components:1};case Gm:case Vm:return{byteLength:2,components:4};case ha:case Hm:case ca:return{byteLength:4,components:1};case dS:case hS:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zm}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function US(){let s=null,t=!1,i=null,r=null;function l(u,d){r=s.requestAnimationFrame(l),i(u,d)}return{start:function(){t!==!0&&i!==null&&s!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){s=u}}}function q2(s){const t=new WeakMap;function i(h,p){const m=h.array,_=h.usage,x=m.byteLength,v=s.createBuffer();s.bindBuffer(p,v),s.bufferData(p,m,_),h.onUploadCallback();let E;if(m instanceof Float32Array)E=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)E=s.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?E=s.HALF_FLOAT:E=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)E=s.SHORT;else if(m instanceof Uint32Array)E=s.UNSIGNED_INT;else if(m instanceof Int32Array)E=s.INT;else if(m instanceof Int8Array)E=s.BYTE;else if(m instanceof Uint8Array)E=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)E=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:E,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:x}}function r(h,p,m){const _=p.array,x=p.updateRanges;if(s.bindBuffer(m,h),x.length===0)s.bufferSubData(m,0,_);else{x.sort((E,T)=>E.start-T.start);let v=0;for(let E=1;E<x.length;E++){const T=x[v],C=x[E];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++v,x[v]=C)}x.length=v+1;for(let E=0,T=x.length;E<T;E++){const C=x[E];s.bufferSubData(m,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=t.get(h);p&&(s.deleteBuffer(p.buffer),t.delete(h))}function d(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=t.get(h);(!_||_.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=t.get(h);if(m===void 0)t.set(h,i(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,h,p),m.version=h.version}}return{get:l,remove:u,update:d}}var Y2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Z2=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,K2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Q2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,J2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ew=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,tw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,iw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,aw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ow=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,lw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,uw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,pw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,mw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,gw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,xw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_w=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,yw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ew=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Aw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ww=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Rw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Cw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Dw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Uw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ow=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Iw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Hw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Gw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ww=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Yw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zw=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kw=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Qw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$w=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,t3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,n3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,i3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,a3=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,r3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,s3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,o3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,l3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,c3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u3=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,f3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,h3=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,p3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,x3=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,v3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,y3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,S3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,b3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,E3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,M3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,T3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,A3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,w3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,R3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,C3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,N3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,D3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,U3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,L3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,F3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,P3=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,O3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,B3=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,I3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,z3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,H3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,G3=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,V3=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,k3=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,j3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,X3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,W3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,q3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Y3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Z3=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,tR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,nR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,iR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,aR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_R=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ER=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gt={alphahash_fragment:Y2,alphahash_pars_fragment:Z2,alphamap_fragment:K2,alphamap_pars_fragment:Q2,alphatest_fragment:J2,alphatest_pars_fragment:$2,aomap_fragment:ew,aomap_pars_fragment:tw,batching_pars_vertex:nw,batching_vertex:iw,begin_vertex:aw,beginnormal_vertex:rw,bsdfs:sw,iridescence_fragment:ow,bumpmap_pars_fragment:lw,clipping_planes_fragment:cw,clipping_planes_pars_fragment:uw,clipping_planes_pars_vertex:fw,clipping_planes_vertex:dw,color_fragment:hw,color_pars_fragment:pw,color_pars_vertex:mw,color_vertex:gw,common:xw,cube_uv_reflection_fragment:vw,defaultnormal_vertex:_w,displacementmap_pars_vertex:yw,displacementmap_vertex:Sw,emissivemap_fragment:bw,emissivemap_pars_fragment:Ew,colorspace_fragment:Mw,colorspace_pars_fragment:Tw,envmap_fragment:Aw,envmap_common_pars_fragment:ww,envmap_pars_fragment:Rw,envmap_pars_vertex:Cw,envmap_physical_pars_fragment:Hw,envmap_vertex:Nw,fog_vertex:Dw,fog_pars_vertex:Uw,fog_fragment:Lw,fog_pars_fragment:Fw,gradientmap_pars_fragment:Pw,lightmap_pars_fragment:Ow,lights_lambert_fragment:Bw,lights_lambert_pars_fragment:Iw,lights_pars_begin:zw,lights_toon_fragment:Gw,lights_toon_pars_fragment:Vw,lights_phong_fragment:kw,lights_phong_pars_fragment:jw,lights_physical_fragment:Xw,lights_physical_pars_fragment:Ww,lights_fragment_begin:qw,lights_fragment_maps:Yw,lights_fragment_end:Zw,lightprobes_pars_fragment:Kw,logdepthbuf_fragment:Qw,logdepthbuf_pars_fragment:Jw,logdepthbuf_pars_vertex:$w,logdepthbuf_vertex:e3,map_fragment:t3,map_pars_fragment:n3,map_particle_fragment:i3,map_particle_pars_fragment:a3,metalnessmap_fragment:r3,metalnessmap_pars_fragment:s3,morphinstance_vertex:o3,morphcolor_vertex:l3,morphnormal_vertex:c3,morphtarget_pars_vertex:u3,morphtarget_vertex:f3,normal_fragment_begin:d3,normal_fragment_maps:h3,normal_pars_fragment:p3,normal_pars_vertex:m3,normal_vertex:g3,normalmap_pars_fragment:x3,clearcoat_normal_fragment_begin:v3,clearcoat_normal_fragment_maps:_3,clearcoat_pars_fragment:y3,iridescence_pars_fragment:S3,opaque_fragment:b3,packing:E3,premultiplied_alpha_fragment:M3,project_vertex:T3,dithering_fragment:A3,dithering_pars_fragment:w3,roughnessmap_fragment:R3,roughnessmap_pars_fragment:C3,shadowmap_pars_fragment:N3,shadowmap_pars_vertex:D3,shadowmap_vertex:U3,shadowmask_pars_fragment:L3,skinbase_vertex:F3,skinning_pars_vertex:P3,skinning_vertex:O3,skinnormal_vertex:B3,specularmap_fragment:I3,specularmap_pars_fragment:z3,tonemapping_fragment:H3,tonemapping_pars_fragment:G3,transmission_fragment:V3,transmission_pars_fragment:k3,uv_pars_fragment:j3,uv_pars_vertex:X3,uv_vertex:W3,worldpos_vertex:q3,background_vert:Y3,background_frag:Z3,backgroundCube_vert:K3,backgroundCube_frag:Q3,cube_vert:J3,cube_frag:$3,depth_vert:eR,depth_frag:tR,distance_vert:nR,distance_frag:iR,equirect_vert:aR,equirect_frag:rR,linedashed_vert:sR,linedashed_frag:oR,meshbasic_vert:lR,meshbasic_frag:cR,meshlambert_vert:uR,meshlambert_frag:fR,meshmatcap_vert:dR,meshmatcap_frag:hR,meshnormal_vert:pR,meshnormal_frag:mR,meshphong_vert:gR,meshphong_frag:xR,meshphysical_vert:vR,meshphysical_frag:_R,meshtoon_vert:yR,meshtoon_frag:SR,points_vert:bR,points_frag:ER,shadow_vert:MR,shadow_frag:TR,sprite_vert:AR,sprite_frag:wR},Ve={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new me},probesMax:{value:new me},probesResolution:{value:new me}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},la={basic:{uniforms:qn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:qn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Lt(0)},envMapIntensity:{value:1}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:qn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:qn([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:qn([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new Lt(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:qn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:qn([Ve.points,Ve.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:qn([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:qn([Ve.common,Ve.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:qn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:qn([Ve.sprite,Ve.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:qn([Ve.common,Ve.displacementmap,{referencePosition:{value:new me},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:qn([Ve.lights,Ve.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};la.physical={uniforms:qn([la.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const Gu={r:0,b:0,g:0},RR=new pn,LS=new dt;LS.set(-1,0,0,0,1,0,0,0,1);function CR(s,t,i,r,l,u){const d=new Lt(0);let h=l===!0?0:1,p,m,_=null,x=0,v=null;function E(U){let I=U.isScene===!0?U.background:null;if(I&&I.isTexture){const N=U.backgroundBlurriness>0;I=t.get(I,N)}return I}function T(U){let I=!1;const N=E(U);N===null?b(d,h):N&&N.isColor&&(b(N,1),I=!0);const D=s.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,u):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(s.autoClear||I)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function C(U,I){const N=E(I);N&&(N.isCubeTexture||N.mapping===pf)?(m===void 0&&(m=new Wa(new Yl(1,1,1),new ma({name:"BackgroundCubeMaterial",uniforms:Mo(la.backgroundCube.uniforms),vertexShader:la.backgroundCube.vertexShader,fragmentShader:la.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(D,L,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=N,m.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(RR.makeRotationFromEuler(I.backgroundRotation)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(LS),m.material.toneMapped=Dt.getTransfer(N.colorSpace)!==Yt,(_!==N||x!==N.version||v!==s.toneMapping)&&(m.material.needsUpdate=!0,_=N,x=N.version,v=s.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null)):N&&N.isTexture&&(p===void 0&&(p=new Wa(new gf(2,2),new ma({name:"BackgroundMaterial",uniforms:Mo(la.background.uniforms),vertexShader:la.background.vertexShader,fragmentShader:la.background.fragmentShader,side:cs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=N,p.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,p.material.toneMapped=Dt.getTransfer(N.colorSpace)!==Yt,N.matrixAutoUpdate===!0&&N.updateMatrix(),p.material.uniforms.uvTransform.value.copy(N.matrix),(_!==N||x!==N.version||v!==s.toneMapping)&&(p.material.needsUpdate=!0,_=N,x=N.version,v=s.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function b(U,I){U.getRGB(Gu,CS(s)),i.buffers.color.setClear(Gu.r,Gu.g,Gu.b,I,u)}function S(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,I=1){d.set(U),h=I,b(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(U){h=U,b(d,h)},render:T,addToRenderList:C,dispose:S}}function NR(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=v(null);let u=l,d=!1;function h(Y,ne,ce,Q,k){let W=!1;const j=x(Y,Q,ce,ne);u!==j&&(u=j,m(u.object)),W=E(Y,Q,ce,k),W&&T(Y,Q,ce,k),k!==null&&t.update(k,s.ELEMENT_ARRAY_BUFFER),(W||d)&&(d=!1,N(Y,ne,ce,Q),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function p(){return s.createVertexArray()}function m(Y){return s.bindVertexArray(Y)}function _(Y){return s.deleteVertexArray(Y)}function x(Y,ne,ce,Q){const k=Q.wireframe===!0;let W=r[ne.id];W===void 0&&(W={},r[ne.id]=W);const j=Y.isInstancedMesh===!0?Y.id:0;let se=W[j];se===void 0&&(se={},W[j]=se);let ae=se[ce.id];ae===void 0&&(ae={},se[ce.id]=ae);let he=ae[k];return he===void 0&&(he=v(p()),ae[k]=he),he}function v(Y){const ne=[],ce=[],Q=[];for(let k=0;k<i;k++)ne[k]=0,ce[k]=0,Q[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ne,enabledAttributes:ce,attributeDivisors:Q,object:Y,attributes:{},index:null}}function E(Y,ne,ce,Q){const k=u.attributes,W=ne.attributes;let j=0;const se=ce.getAttributes();for(const ae in se)if(se[ae].location>=0){const pe=k[ae];let ze=W[ae];if(ze===void 0&&(ae==="instanceMatrix"&&Y.instanceMatrix&&(ze=Y.instanceMatrix),ae==="instanceColor"&&Y.instanceColor&&(ze=Y.instanceColor)),pe===void 0||pe.attribute!==ze||ze&&pe.data!==ze.data)return!0;j++}return u.attributesNum!==j||u.index!==Q}function T(Y,ne,ce,Q){const k={},W=ne.attributes;let j=0;const se=ce.getAttributes();for(const ae in se)if(se[ae].location>=0){let pe=W[ae];pe===void 0&&(ae==="instanceMatrix"&&Y.instanceMatrix&&(pe=Y.instanceMatrix),ae==="instanceColor"&&Y.instanceColor&&(pe=Y.instanceColor));const ze={};ze.attribute=pe,pe&&pe.data&&(ze.data=pe.data),k[ae]=ze,j++}u.attributes=k,u.attributesNum=j,u.index=Q}function C(){const Y=u.newAttributes;for(let ne=0,ce=Y.length;ne<ce;ne++)Y[ne]=0}function b(Y){S(Y,0)}function S(Y,ne){const ce=u.newAttributes,Q=u.enabledAttributes,k=u.attributeDivisors;ce[Y]=1,Q[Y]===0&&(s.enableVertexAttribArray(Y),Q[Y]=1),k[Y]!==ne&&(s.vertexAttribDivisor(Y,ne),k[Y]=ne)}function U(){const Y=u.newAttributes,ne=u.enabledAttributes;for(let ce=0,Q=ne.length;ce<Q;ce++)ne[ce]!==Y[ce]&&(s.disableVertexAttribArray(ce),ne[ce]=0)}function I(Y,ne,ce,Q,k,W,j){j===!0?s.vertexAttribIPointer(Y,ne,ce,k,W):s.vertexAttribPointer(Y,ne,ce,Q,k,W)}function N(Y,ne,ce,Q){C();const k=Q.attributes,W=ce.getAttributes(),j=ne.defaultAttributeValues;for(const se in W){const ae=W[se];if(ae.location>=0){let he=k[se];if(he===void 0&&(se==="instanceMatrix"&&Y.instanceMatrix&&(he=Y.instanceMatrix),se==="instanceColor"&&Y.instanceColor&&(he=Y.instanceColor)),he!==void 0){const pe=he.normalized,ze=he.itemSize,qe=t.get(he);if(qe===void 0)continue;const z=qe.buffer,ve=qe.type,Re=qe.bytesPerElement,J=ve===s.INT||ve===s.UNSIGNED_INT||he.gpuType===Hm;if(he.isInterleavedBufferAttribute){const ge=he.data,Ae=ge.stride,Ie=he.offset;if(ge.isInstancedInterleavedBuffer){for(let ye=0;ye<ae.locationSize;ye++)S(ae.location+ye,ge.meshPerAttribute);Y.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let ye=0;ye<ae.locationSize;ye++)b(ae.location+ye);s.bindBuffer(s.ARRAY_BUFFER,z);for(let ye=0;ye<ae.locationSize;ye++)I(ae.location+ye,ze/ae.locationSize,ve,pe,Ae*Re,(Ie+ze/ae.locationSize*ye)*Re,J)}else{if(he.isInstancedBufferAttribute){for(let ge=0;ge<ae.locationSize;ge++)S(ae.location+ge,he.meshPerAttribute);Y.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ge=0;ge<ae.locationSize;ge++)b(ae.location+ge);s.bindBuffer(s.ARRAY_BUFFER,z);for(let ge=0;ge<ae.locationSize;ge++)I(ae.location+ge,ze/ae.locationSize,ve,pe,ze*Re,ze/ae.locationSize*ge*Re,J)}}else if(j!==void 0){const pe=j[se];if(pe!==void 0)switch(pe.length){case 2:s.vertexAttrib2fv(ae.location,pe);break;case 3:s.vertexAttrib3fv(ae.location,pe);break;case 4:s.vertexAttrib4fv(ae.location,pe);break;default:s.vertexAttrib1fv(ae.location,pe)}}}}U()}function D(){P();for(const Y in r){const ne=r[Y];for(const ce in ne){const Q=ne[ce];for(const k in Q){const W=Q[k];for(const j in W)_(W[j].object),delete W[j];delete Q[k]}}delete r[Y]}}function L(Y){if(r[Y.id]===void 0)return;const ne=r[Y.id];for(const ce in ne){const Q=ne[ce];for(const k in Q){const W=Q[k];for(const j in W)_(W[j].object),delete W[j];delete Q[k]}}delete r[Y.id]}function O(Y){for(const ne in r){const ce=r[ne];for(const Q in ce){const k=ce[Q];if(k[Y.id]===void 0)continue;const W=k[Y.id];for(const j in W)_(W[j].object),delete W[j];delete k[Y.id]}}}function A(Y){for(const ne in r){const ce=r[ne],Q=Y.isInstancedMesh===!0?Y.id:0,k=ce[Q];if(k!==void 0){for(const W in k){const j=k[W];for(const se in j)_(j[se].object),delete j[se];delete k[W]}delete ce[Q],Object.keys(ce).length===0&&delete r[ne]}}}function P(){V(),d=!0,u!==l&&(u=l,m(u.object))}function V(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:P,resetDefaultState:V,dispose:D,releaseStatesOfGeometry:L,releaseStatesOfObject:A,releaseStatesOfProgram:O,initAttributes:C,enableAttribute:b,disableUnusedAttributes:U}}function DR(s,t,i){let r;function l(p){r=p}function u(p,m){s.drawArrays(r,p,m),i.update(m,r,1)}function d(p,m,_){_!==0&&(s.drawArraysInstanced(r,p,m,_),i.update(m,r,_))}function h(p,m,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,m,0,_);let v=0;for(let E=0;E<_;E++)v+=m[E];i.update(v,r,1)}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h}function UR(s,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(O){return!(O!==Hi&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(O){const A=O===pa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==Ri&&O!==ca&&!A&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function p(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const _=p(m);_!==m&&(ot("WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const x=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&v===!1&&ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const E=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),b=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),S=s.getParameter(s.MAX_VERTEX_ATTRIBS),U=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),I=s.getParameter(s.MAX_VARYING_VECTORS),N=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),D=s.getParameter(s.MAX_SAMPLES),L=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:x,reversedDepthBuffer:v,maxTextures:E,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:b,maxAttributes:S,maxVertexUniforms:U,maxVaryings:I,maxFragmentUniforms:N,maxSamples:D,samples:L}}function LR(s){const t=this;let i=null,r=0,l=!1,u=!1;const d=new Rr,h=new dt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,v){const E=x.length!==0||v||r!==0||l;return l=v,r=x.length,E},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,v){i=_(x,v,0)},this.setState=function(x,v,E){const T=x.clippingPlanes,C=x.clipIntersection,b=x.clipShadows,S=s.get(x);if(!l||T===null||T.length===0||u&&!b)u?_(null):m();else{const U=u?0:r,I=U*4;let N=S.clippingState||null;p.value=N,N=_(T,v,I,E);for(let D=0;D!==I;++D)N[D]=i[D];S.clippingState=N,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=U}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function _(x,v,E,T){const C=x!==null?x.length:0;let b=null;if(C!==0){if(b=p.value,T!==!0||b===null){const S=E+C*4,U=v.matrixWorldInverse;h.getNormalMatrix(U),(b===null||b.length<S)&&(b=new Float32Array(S));for(let I=0,N=E;I!==C;++I,N+=4)d.copy(x[I]).applyMatrix4(U,h),d.normal.toArray(b,N),b[N+3]=d.constant}p.value=b,p.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,b}}const xo=4,FR=6,PR=20,OR=256,Dl=new DS,Q_=new Lt;let Ap=null,wp=0,Rp=0,Cp=!1;const BR=new me,rs=new me;class J_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,r=.1,l=100,u={}){const{size:d=256,position:h=BR}=u;Ap=this._renderer.getRenderTarget(),wp=this._renderer.getActiveCubeFace(),Rp=this._renderer.getActiveMipmapLevel(),Cp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,r,l,p,h),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ty(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ey(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ap,wp,Rp),this._renderer.xr.enabled=Cp,t.scissorTest=!1,po(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===us||t.mapping===Eo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ap=this._renderer.getRenderTarget(),wp=this._renderer.getActiveCubeFace(),Rp=this._renderer.getActiveMipmapLevel(),Cp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:pa,format:Hi,colorSpace:nf,depthBuffer:!1},l=$_(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$_(t,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=IR(u)),this._blurMaterial=HR(u,t,i),this._ggxMaterial=zR(u,t,i)}return l}_compileMaterial(t){const i=new Wa(new Xi,t);this._renderer.compile(i,Dl)}_sceneToCubeUV(t,i,r,l,u){const p=new wi(90,1,i,r),m=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],x=this._renderer,v=x.autoClear,E=x.toneMapping;x.getClearColor(Q_),x.toneMapping=fa,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Wa(new Yl,new MS({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,b=C.material;let S=!1;const U=t.background;U?U.isColor&&(b.color.copy(U),t.background=null,S=!0):(b.color.copy(Q_),S=!0);for(let I=0;I<6;I++){const N=I%3;N===0?(p.up.set(0,m[I],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+_[I],u.y,u.z)):N===1?(p.up.set(0,0,m[I]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+_[I],u.z)):(p.up.set(0,m[I],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+_[I]));const D=this._cubeSize;po(l,N*D,I>2?D:0,D,D),x.setRenderTarget(l),S&&x.render(C,p),x.render(t,p)}x.toneMapping=E,x.autoClear=v,t.background=U}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===us||t.mapping===Eo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=ty()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ey());const u=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=u;const h=u.uniforms;h.envMap.value=t;const p=this._cubeSize;po(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(d,Dl)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(t,u-1,u);i.autoClear=r}_applyGGXFilter(t,i,r){const l=this._renderer,u=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[r];h.material=d;const p=d.uniforms,m=r/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),x=Math.sqrt(m*m-_*_),v=m*1.25,E=x*v,{_lodMax:T}=this,C=this._sizeLods[r],b=3*C*(r>T-xo?r-T+xo:0),S=4*(this._cubeSize-C);p.envMap.value=t.texture,p.roughness.value=E,p.mipInt.value=T-i,po(u,b,S,3*C,2*C),l.setRenderTarget(u),l.render(h,Dl),p.envMap.value=u.texture,p.roughness.value=0,p.mipInt.value=T-r,po(t,b,S,3*C,2*C),l.setRenderTarget(t),l.render(h,Dl)}_blur(t,i,r,l){const u=this._pingPongRenderTarget,d=Math.min(l,Math.PI)/Math.SQRT2;this._blurPass(t,u,i,r,d),this._blurPass(u,t,r,r,d)}_blurPass(t,i,r,l,u){const d=this._renderer,h=this._blurMaterial,p=this._lodMeshes[l];p.material=h;const m=h.uniforms;m.envMap.value=t.texture,m.sigma.value=u,m.mipInt.value=this._lodMax-r;const _=this._sizeLods[l],x=3*_*(l>this._lodMax-xo?l-this._lodMax+xo:0),v=4*(this._cubeSize-_);po(i,x,v,3*_,2*_),d.setRenderTarget(i),d.render(p,Dl)}}function IR(s){const t=[],i=[];let r=s;const l=s-xo+1+FR;for(let u=0;u<l;u++){const d=Math.pow(2,r);t.push(d);const h=1/(d-2),p=-h,m=1+h,_=[p,p,m,p,m,m,p,p,m,m,p,m],x=6,v=6,E=3,T=new Float32Array(E*v*x),C=new Float32Array(E*v*x);for(let S=0;S<x;S++){const U=S%3*2/3-1,I=S>2?0:-1,N=[U,I,0,U+2/3,I,0,U+2/3,I+1,0,U,I,0,U+2/3,I+1,0,U,I+1,0];T.set(N,E*v*S);for(let D=0;D<v;D++){const L=_[D*2]*2-1,O=_[D*2+1]*2-1;S===0?rs.set(1,O,L):S===1?rs.set(-L,1,-O):S===2?rs.set(-L,O,1):S===3?rs.set(-1,O,-L):S===4?rs.set(-L,-1,O):rs.set(L,O,-1),rs.toArray(C,(S*v+D)*E)}}const b=new Xi;b.setAttribute("position",new ki(T,E)),b.setAttribute("outputDirection",new ki(C,E)),i.push(new Wa(b,null)),r>xo&&r--}return{lodMeshes:i,sizeLods:t}}function $_(s,t,i){const r=new Vi(s,t,i);return r.texture.mapping=pf,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function po(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function zR(s,t,i){return new ma({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:OR,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function HR(s,t,i){return new ma({name:"SphericalGaussianBlur",defines:{SAMPLES:PR,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:xf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function ey(){return new ma({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function ty(){return new ma({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function xf(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class FS extends Vi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new wS(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Yl(5,5,5),u=new ma({name:"CubemapFromEquirect",uniforms:Mo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ei,blending:Ga});u.uniforms.tEquirect.value=i;const d=new Wa(l,u),h=i.minFilter;return i.minFilter===os&&(i.minFilter=Hn),new k2(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const u=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,r,l);t.setRenderTarget(u)}}function GR(s){let t=new WeakMap,i=new WeakMap,r=null;function l(v,E=!1){return v==null?null:E?d(v):u(v)}function u(v){if(v&&v.isTexture){const E=v.mapping;if(E===ep||E===tp)if(t.has(v)){const T=t.get(v).texture;return h(T,v.mapping)}else{const T=v.image;if(T&&T.height>0){const C=new FS(T.height);return C.fromEquirectangularTexture(s,v),t.set(v,C),v.addEventListener("dispose",m),h(C.texture,v.mapping)}else return null}}return v}function d(v){if(v&&v.isTexture){const E=v.mapping,T=E===ep||E===tp,C=E===us||E===Eo;if(T||C){let b=i.get(v);const S=b!==void 0?b.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==S)return r===null&&(r=new J_(s)),b=T?r.fromEquirectangular(v,b):r.fromCubemap(v,b),b.texture.pmremVersion=v.pmremVersion,i.set(v,b),b.texture;if(b!==void 0)return b.texture;{const U=v.image;return T&&U&&U.height>0||C&&U&&p(U)?(r===null&&(r=new J_(s)),b=T?r.fromEquirectangular(v):r.fromCubemap(v),b.texture.pmremVersion=v.pmremVersion,i.set(v,b),v.addEventListener("dispose",_),b.texture):null}}}return v}function h(v,E){return E===ep?v.mapping=us:E===tp&&(v.mapping=Eo),v}function p(v){let E=0;const T=6;for(let C=0;C<T;C++)v[C]!==void 0&&E++;return E===T}function m(v){const E=v.target;E.removeEventListener("dispose",m);const T=t.get(E);T!==void 0&&(t.delete(E),T.dispose())}function _(v){const E=v.target;E.removeEventListener("dispose",_);const T=i.get(E);T!==void 0&&(i.delete(E),T.dispose())}function x(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:x}}function VR(s){const t={};function i(r){if(t[r]!==void 0)return t[r];const l=s.getExtension(r);return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&vo("WebGLRenderer: "+r+" extension not supported."),l}}}function kR(s,t,i,r){const l={},u=new WeakMap;function d(x){const v=x.target;v.index!==null&&t.remove(v.index);for(const T in v.attributes)t.remove(v.attributes[T]);v.removeEventListener("dispose",d),delete l[v.id];const E=u.get(v);E&&(t.remove(E),u.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function h(x,v){return l[v.id]===!0||(v.addEventListener("dispose",d),l[v.id]=!0,i.memory.geometries++),v}function p(x){const v=x.attributes;for(const E in v)t.update(v[E],s.ARRAY_BUFFER)}function m(x){const v=[],E=x.index,T=x.attributes.position;let C=0;if(T===void 0)return;if(E!==null){const U=E.array;C=E.version;for(let I=0,N=U.length;I<N;I+=3){const D=U[I+0],L=U[I+1],O=U[I+2];v.push(D,L,L,O,O,D)}}else{const U=T.array;C=T.version;for(let I=0,N=U.length/3-1;I<N;I+=3){const D=I+0,L=I+1,O=I+2;v.push(D,L,L,O,O,D)}}const b=new(T.count>=65535?bS:SS)(v,1);b.version=C;const S=u.get(x);S&&t.remove(S),u.set(x,b)}function _(x){const v=u.get(x);if(v){const E=x.index;E!==null&&v.version<E.version&&m(x)}else m(x);return u.get(x)}return{get:h,update:p,getWireframeAttribute:_}}function jR(s,t,i){let r;function l(x){r=x}let u,d;function h(x){u=x.type,d=x.bytesPerElement}function p(x,v){s.drawElements(r,v,u,x*d),i.update(v,r,1)}function m(x,v,E){E!==0&&(s.drawElementsInstanced(r,v,u,x*d,E),i.update(v,r,E))}function _(x,v,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,v,0,u,x,0,E);let C=0;for(let b=0;b<E;b++)C+=v[b];i.update(C,r,1)}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=_}function XR(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case s.TRIANGLES:i.triangles+=h*(u/3);break;case s.LINES:i.lines+=h*(u/2);break;case s.LINE_STRIP:i.lines+=h*(u-1);break;case s.LINE_LOOP:i.lines+=h*u;break;case s.POINTS:i.points+=h*u;break;default:Bt("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function WR(s,t,i){const r=new WeakMap,l=new dn;function u(d,h,p){const m=d.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=_!==void 0?_.length:0;let v=r.get(h);if(v===void 0||v.count!==x){let V=function(){A.dispose(),r.delete(h),h.removeEventListener("dispose",V)};var E=V;v!==void 0&&v.texture.dispose();const T=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],U=h.morphAttributes.normal||[],I=h.morphAttributes.color||[];let N=0;T===!0&&(N=1),C===!0&&(N=2),b===!0&&(N=3);let D=h.attributes.position.count*N,L=1;D>t.maxTextureSize&&(L=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const O=new Float32Array(D*L*4*x),A=new vS(O,D,L,x);A.type=ca,A.needsUpdate=!0;const P=N*4;for(let Y=0;Y<x;Y++){const ne=S[Y],ce=U[Y],Q=I[Y],k=D*L*4*Y;for(let W=0;W<ne.count;W++){const j=W*P;T===!0&&(l.fromBufferAttribute(ne,W),O[k+j+0]=l.x,O[k+j+1]=l.y,O[k+j+2]=l.z,O[k+j+3]=0),C===!0&&(l.fromBufferAttribute(ce,W),O[k+j+4]=l.x,O[k+j+5]=l.y,O[k+j+6]=l.z,O[k+j+7]=0),b===!0&&(l.fromBufferAttribute(Q,W),O[k+j+8]=l.x,O[k+j+9]=l.y,O[k+j+10]=l.z,O[k+j+11]=Q.itemSize===4?l.w:1)}}v={count:x,texture:A,size:new Ht(D,L)},r.set(h,v),h.addEventListener("dispose",V)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",d.morphTexture,i);else{let T=0;for(let b=0;b<m.length;b++)T+=m[b];const C=h.morphTargetsRelative?1:1-T;p.getUniforms().setValue(s,"morphTargetBaseInfluence",C),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",v.texture,i),p.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:u}}function qR(s,t,i,r,l){let u=new WeakMap;function d(m){const _=l.render.frame,x=m.geometry,v=t.get(m,x);if(u.get(v)!==_&&(t.update(v),u.set(v,_)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),u.get(m)!==_&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),u.set(m,_))),m.isSkinnedMesh){const E=m.skeleton;u.get(E)!==_&&(E.update(),u.set(E,_))}return v}function h(){u=new WeakMap}function p(m){const _=m.target;_.removeEventListener("dispose",p),r.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:d,dispose:h}}const YR={[nS]:"LINEAR_TONE_MAPPING",[iS]:"REINHARD_TONE_MAPPING",[aS]:"CINEON_TONE_MAPPING",[rS]:"ACES_FILMIC_TONE_MAPPING",[oS]:"AGX_TONE_MAPPING",[lS]:"NEUTRAL_TONE_MAPPING",[sS]:"CUSTOM_TONE_MAPPING"};function ZR(s,t,i,r,l,u){const d=new Vi(t,i,{type:s,depthBuffer:l,stencilBuffer:u,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let h=null,p=null;const m=new Xi;m.setAttribute("position",new ka([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new ka([0,2,0,0,2,0],2));const _=new H2({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),x=new Wa(m,_),v=new DS(-1,1,1,-1,0,1);let E=null,T=null,C=!1,b,S=null,U=[],I=!1;this.setSize=function(N,D){d.setSize(N,D),h!==null&&h.setSize(N,D),p!==null&&p.setSize(N,D);for(let L=0;L<U.length;L++){const O=U[L];O.setSize&&O.setSize(N,D)}},this.setEffects=function(N){U=N,I=U.length>0&&U[0].isRenderPass===!0;const D=d.width,L=d.height;U.length>0&&h===null&&(h=new Vi(D,L,{type:pa,depthBuffer:!1,stencilBuffer:!1}),p=new Vi(D,L,{type:pa,depthBuffer:!1,stencilBuffer:!1}));for(let O=0;O<U.length;O++){const A=U[O];A.setSize&&A.setSize(D,L)}},this.begin=function(N,D){if(C||N.toneMapping===fa&&U.length===0)return!1;if(S=D,D!==null){const L=D.width,O=D.height;(d.width!==L||d.height!==O)&&this.setSize(L,O)}return I===!1&&N.setRenderTarget(d),b=N.toneMapping,N.toneMapping=fa,!0},this.hasRenderPass=function(){return I},this.end=function(N,D){N.toneMapping=b,C=!0;let L=d,O=h;for(let A=0;A<U.length;A++){const P=U[A];P.enabled!==!1&&(P.render(N,O,L,D),P.needsSwap!==!1&&(L=O,O=O===h?p:h))}if(E!==N.outputColorSpace||T!==N.toneMapping){E=N.outputColorSpace,T=N.toneMapping,_.defines={},Dt.getTransfer(E)===Yt&&(_.defines.SRGB_TRANSFER="");const A=YR[T];A&&(_.defines[A]=""),_.needsUpdate=!0}_.uniforms.tDiffuse.value=L.texture,N.setRenderTarget(S),N.render(x,v),S=null,C=!1},this.isCompositing=function(){return C},this.dispose=function(){d.dispose(),h!==null&&h.dispose(),p!==null&&p.dispose(),m.dispose(),_.dispose()}}const PS=new Gn,Am=new Gl(1,1),OS=new vS,BS=new m2,IS=new wS,ny=[],iy=[],ay=new Float32Array(16),ry=new Float32Array(9),sy=new Float32Array(4);function Ro(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let u=ny[l];if(u===void 0&&(u=new Float32Array(l),ny[l]=u),t!==0){r.toArray(u,0);for(let d=1,h=0;d!==t;++d)h+=i,s[d].toArray(u,h)}return u}function En(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function Mn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function vf(s,t){let i=iy[t];i===void 0&&(i=new Int32Array(t),iy[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function KR(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function QR(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(En(i,t))return;s.uniform2fv(this.addr,t),Mn(i,t)}}function JR(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(En(i,t))return;s.uniform3fv(this.addr,t),Mn(i,t)}}function $R(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(En(i,t))return;s.uniform4fv(this.addr,t),Mn(i,t)}}function eC(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(En(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),Mn(i,t)}else{if(En(i,r))return;sy.set(r),s.uniformMatrix2fv(this.addr,!1,sy),Mn(i,r)}}function tC(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(En(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),Mn(i,t)}else{if(En(i,r))return;ry.set(r),s.uniformMatrix3fv(this.addr,!1,ry),Mn(i,r)}}function nC(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(En(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),Mn(i,t)}else{if(En(i,r))return;ay.set(r),s.uniformMatrix4fv(this.addr,!1,ay),Mn(i,r)}}function iC(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function aC(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(En(i,t))return;s.uniform2iv(this.addr,t),Mn(i,t)}}function rC(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(En(i,t))return;s.uniform3iv(this.addr,t),Mn(i,t)}}function sC(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(En(i,t))return;s.uniform4iv(this.addr,t),Mn(i,t)}}function oC(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function lC(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(En(i,t))return;s.uniform2uiv(this.addr,t),Mn(i,t)}}function cC(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(En(i,t))return;s.uniform3uiv(this.addr,t),Mn(i,t)}}function uC(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(En(i,t))return;s.uniform4uiv(this.addr,t),Mn(i,t)}}function fC(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let u;this.type===s.SAMPLER_2D_SHADOW?(Am.compareFunction=i.isReversedDepthBuffer()?qm:Wm,u=Am):u=PS,i.setTexture2D(t||u,l)}function dC(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||BS,l)}function hC(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||IS,l)}function pC(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||OS,l)}function mC(s){switch(s){case 5126:return KR;case 35664:return QR;case 35665:return JR;case 35666:return $R;case 35674:return eC;case 35675:return tC;case 35676:return nC;case 5124:case 35670:return iC;case 35667:case 35671:return aC;case 35668:case 35672:return rC;case 35669:case 35673:return sC;case 5125:return oC;case 36294:return lC;case 36295:return cC;case 36296:return uC;case 35678:case 36198:case 36298:case 36306:case 35682:return fC;case 35679:case 36299:case 36307:return dC;case 35680:case 36300:case 36308:case 36293:return hC;case 36289:case 36303:case 36311:case 36292:return pC}}function gC(s,t){s.uniform1fv(this.addr,t)}function xC(s,t){const i=Ro(t,this.size,2);s.uniform2fv(this.addr,i)}function vC(s,t){const i=Ro(t,this.size,3);s.uniform3fv(this.addr,i)}function _C(s,t){const i=Ro(t,this.size,4);s.uniform4fv(this.addr,i)}function yC(s,t){const i=Ro(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function SC(s,t){const i=Ro(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function bC(s,t){const i=Ro(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function EC(s,t){s.uniform1iv(this.addr,t)}function MC(s,t){s.uniform2iv(this.addr,t)}function TC(s,t){s.uniform3iv(this.addr,t)}function AC(s,t){s.uniform4iv(this.addr,t)}function wC(s,t){s.uniform1uiv(this.addr,t)}function RC(s,t){s.uniform2uiv(this.addr,t)}function CC(s,t){s.uniform3uiv(this.addr,t)}function NC(s,t){s.uniform4uiv(this.addr,t)}function DC(s,t,i){const r=this.cache,l=t.length,u=vf(i,l);En(r,u)||(s.uniform1iv(this.addr,u),Mn(r,u));let d;this.type===s.SAMPLER_2D_SHADOW?d=Am:d=PS;for(let h=0;h!==l;++h)i.setTexture2D(t[h]||d,u[h])}function UC(s,t,i){const r=this.cache,l=t.length,u=vf(i,l);En(r,u)||(s.uniform1iv(this.addr,u),Mn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||BS,u[d])}function LC(s,t,i){const r=this.cache,l=t.length,u=vf(i,l);En(r,u)||(s.uniform1iv(this.addr,u),Mn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||IS,u[d])}function FC(s,t,i){const r=this.cache,l=t.length,u=vf(i,l);En(r,u)||(s.uniform1iv(this.addr,u),Mn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||OS,u[d])}function PC(s){switch(s){case 5126:return gC;case 35664:return xC;case 35665:return vC;case 35666:return _C;case 35674:return yC;case 35675:return SC;case 35676:return bC;case 5124:case 35670:return EC;case 35667:case 35671:return MC;case 35668:case 35672:return TC;case 35669:case 35673:return AC;case 5125:return wC;case 36294:return RC;case 36295:return CC;case 36296:return NC;case 35678:case 36198:case 36298:case 36306:case 35682:return DC;case 35679:case 36299:case 36307:return UC;case 35680:case 36300:case 36308:case 36293:return LC;case 36289:case 36303:case 36311:case 36292:return FC}}class OC{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=mC(i.type)}}class BC{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=PC(i.type)}}class IC{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(t,i[h.id],r)}}}const Np=/(\w+)(\])?(\[|\.)?/g;function oy(s,t){s.seq.push(t),s.map[t.id]=t}function zC(s,t,i){const r=s.name,l=r.length;for(Np.lastIndex=0;;){const u=Np.exec(r),d=Np.lastIndex;let h=u[1];const p=u[2]==="]",m=u[3];if(p&&(h=h|0),m===void 0||m==="["&&d+2===l){oy(i,m===void 0?new OC(h,s,t):new BC(h,s,t));break}else{let x=i.map[h];x===void 0&&(x=new IC(h),oy(i,x)),i=x}}}class Qu{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const h=t.getActiveUniform(i,d),p=t.getUniformLocation(i,h.name);zC(h,p,this)}const l=[],u=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(d):u.push(d);l.length>0&&(this.seq=l.concat(u))}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],p=r[h.id];p.needsUpdate!==!1&&h.setValue(t,p.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const d=t[l];d.id in i&&r.push(d)}return r}}function ly(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const HC=37297;let GC=0;function VC(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const cy=new dt;function kC(s){Dt._getMatrix(cy,Dt.workingColorSpace,s);const t=`mat3( ${cy.elements.map(i=>i.toFixed(4))} )`;switch(Dt.getTransfer(s)){case af:return[t,"LinearTransferOETF"];case Yt:return[t,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function uy(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),u=(s.getShaderInfoLog(t)||"").trim();if(r&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+VC(s.getShaderSource(t),h)}else return u}function jC(s,t){const i=kC(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const XC={[nS]:"Linear",[iS]:"Reinhard",[aS]:"Cineon",[rS]:"ACESFilmic",[oS]:"AgX",[lS]:"Neutral",[sS]:"Custom"};function WC(s,t){const i=XC[t];return i===void 0?(ot("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Vu=new me;function qC(){Dt.getLuminanceCoefficients(Vu);const s=Vu.x.toFixed(4),t=Vu.y.toFixed(4),i=Vu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function YC(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fl).join(`
`)}function ZC(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function KC(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=s.getActiveAttrib(t,l),d=u.name;let h=1;u.type===s.FLOAT_MAT2&&(h=2),u.type===s.FLOAT_MAT3&&(h=3),u.type===s.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:s.getAttribLocation(t,d),locationSize:h}}return i}function Fl(s){return s!==""}function fy(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function dy(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const QC=/^[ \t]*#include +<([\w\d./]+)>/gm;function wm(s){return s.replace(QC,$C)}const JC=new Map;function $C(s,t){let i=gt[t];if(i===void 0){const r=JC.get(t);if(r!==void 0)i=gt[r],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return wm(i)}const eN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hy(s){return s.replace(eN,tN)}function tN(s,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function py(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const nN={[Wu]:"SHADOWMAP_TYPE_PCF",[Ll]:"SHADOWMAP_TYPE_VSM"};function iN(s){return nN[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const aN={[us]:"ENVMAP_TYPE_CUBE",[Eo]:"ENVMAP_TYPE_CUBE",[pf]:"ENVMAP_TYPE_CUBE_UV"};function rN(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":aN[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const sN={[Eo]:"ENVMAP_MODE_REFRACTION"};function oN(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":sN[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const lN={[tS]:"ENVMAP_BLENDING_MULTIPLY",[WA]:"ENVMAP_BLENDING_MIX",[qA]:"ENVMAP_BLENDING_ADD"};function cN(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":lN[s.combine]||"ENVMAP_BLENDING_NONE"}function uN(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function fN(s,t,i,r){const l=s.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const p=iN(i),m=rN(i),_=oN(i),x=cN(i),v=uN(i),E=YC(i),T=ZC(u),C=l.createProgram();let b,S,U=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(b=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Fl).join(`
`),b.length>0&&(b+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Fl).join(`
`),S.length>0&&(S+=`
`)):(b=[py(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fl).join(`
`),S=[py(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+_:"",i.envMap?"#define "+x:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==fa?"#define TONE_MAPPING":"",i.toneMapping!==fa?gt.tonemapping_pars_fragment:"",i.toneMapping!==fa?WC("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,jC("linearToOutputTexel",i.outputColorSpace),qC(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Fl).join(`
`)),d=wm(d),d=fy(d,i),d=dy(d,i),h=wm(h),h=fy(h,i),h=dy(h,i),d=hy(d),h=hy(h),i.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,b=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,S=["#define varying in",i.glslVersion===w_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===w_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const I=U+b+d,N=U+S+h,D=ly(l,l.VERTEX_SHADER,I),L=ly(l,l.FRAGMENT_SHADER,N);l.attachShader(C,D),l.attachShader(C,L),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function O(Y){if(s.debug.checkShaderErrors){const ne=l.getProgramInfoLog(C)||"",ce=l.getShaderInfoLog(D)||"",Q=l.getShaderInfoLog(L)||"",k=ne.trim(),W=ce.trim(),j=Q.trim();let se=!0,ae=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(se=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,C,D,L);else{const he=uy(l,D,"vertex"),pe=uy(l,L,"fragment");Bt("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+Y.name+`
Material Type: `+Y.type+`

Program Info Log: `+k+`
`+he+`
`+pe)}else k!==""?ot("WebGLProgram: Program Info Log:",k):(W===""||j==="")&&(ae=!1);ae&&(Y.diagnostics={runnable:se,programLog:k,vertexShader:{log:W,prefix:b},fragmentShader:{log:j,prefix:S}})}l.deleteShader(D),l.deleteShader(L),A=new Qu(l,C),P=KC(l,C)}let A;this.getUniforms=function(){return A===void 0&&O(this),A};let P;this.getAttributes=function(){return P===void 0&&O(this),P};let V=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=l.getProgramParameter(C,HC)),V},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=GC++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=D,this.fragmentShader=L,this}let dN=0;class hN{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,i,r){const l=this._getShaderCacheForMaterial(t);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(r)===!1&&(l.add(r),r.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new pN(t),i.set(t,r)),r}}class pN{constructor(t){this.id=dN++,this.code=t,this.usedTimes=0}}function mN(s){return s===fs||s===ef||s===tf}function gN(s,t,i,r,l,u){const d=new _S,h=new hN,p=new Set,m=[],_=new Map,x=r.logarithmicDepthBuffer;let v=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(A){return p.add(A),A===0?"uv":`uv${A}`}function C(A,P,V,Y,ne,ce){const Q=Y.fog,k=ne.geometry,W=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?Y.environment:null,j=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,se=t.get(A.envMap||W,j),ae=se&&se.mapping===pf?se.image.height:null,he=E[A.type];A.precision!==null&&(v=r.getMaxPrecision(A.precision),v!==A.precision&&ot("WebGLProgram.getParameters:",A.precision,"not supported, using",v,"instead."));const pe=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ze=pe!==void 0?pe.length:0;let qe=0;k.morphAttributes.position!==void 0&&(qe=1),k.morphAttributes.normal!==void 0&&(qe=2),k.morphAttributes.color!==void 0&&(qe=3);let z,ve,Re,J;if(he){const Ct=la[he];z=Ct.vertexShader,ve=Ct.fragmentShader}else{z=A.vertexShader,ve=A.fragmentShader;const Ct=h.getVertexShaderStage(A),ut=h.getFragmentShaderStage(A);h.update(A,Ct,ut),Re=Ct.id,J=ut.id}const ge=s.getRenderTarget(),Ae=s.state.buffers.depth.getReversed(),Ie=ne.isInstancedMesh===!0,ye=ne.isBatchedMesh===!0,Ce=!!A.map,kt=!!A.matcap,mt=!!se,xt=!!A.aoMap,St=!!A.lightMap,nt=!!A.bumpMap&&A.wireframe===!1,at=!!A.normalMap,jt=!!A.displacementMap,mn=!!A.emissiveMap,Ot=!!A.metalnessMap,nn=!!A.roughnessMap,q=A.anisotropy>0,rn=A.clearcoat>0,Pt=A.dispersion>0,F=A.retroreflectivity>0,M=A.iridescence>0,te=A.sheen>0,ue=A.transmission>0,xe=q&&!!A.anisotropyMap,we=rn&&!!A.clearcoatMap,Ue=rn&&!!A.clearcoatNormalMap,_e=rn&&!!A.clearcoatRoughnessMap,Me=M&&!!A.iridescenceMap,De=M&&!!A.iridescenceThicknessMap,et=te&&!!A.sheenColorMap,Be=te&&!!A.sheenRoughnessMap,Oe=!!A.specularMap,Xe=!!A.specularColorMap,it=!!A.specularIntensityMap,ct=ue&&!!A.transmissionMap,X=ue&&!!A.thicknessMap,Ne=!!A.gradientMap,Ee=!!A.alphaMap,Le=A.alphaTest>0,je=!!A.alphaHash,Te=!!A.extensions;let $e=fa;A.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&($e=s.toneMapping);const ke={shaderID:he,shaderType:A.type,shaderName:A.name,vertexShader:z,fragmentShader:ve,defines:A.defines,customVertexShaderID:Re,customFragmentShaderID:J,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:v,batching:ye,batchingColor:ye&&ne._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&ne.instanceColor!==null,instancingMorph:Ie&&ne.morphTexture!==null,outputColorSpace:ge===null?s.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Dt.workingColorSpace,alphaToCoverage:!!A.alphaToCoverage,map:Ce,matcap:kt,envMap:mt,envMapMode:mt&&se.mapping,envMapCubeUVHeight:ae,aoMap:xt,lightMap:St,bumpMap:nt,normalMap:at,displacementMap:jt,emissiveMap:mn,normalMapObjectSpace:at&&A.normalMapType===KA,normalMapTangentSpace:at&&A.normalMapType===A_,packedNormalMap:at&&A.normalMapType===A_&&mN(A.normalMap.format),metalnessMap:Ot,roughnessMap:nn,anisotropy:q,anisotropyMap:xe,clearcoat:rn,clearcoatMap:we,clearcoatNormalMap:Ue,clearcoatRoughnessMap:_e,dispersion:Pt,retroreflection:F,iridescence:M,iridescenceMap:Me,iridescenceThicknessMap:De,sheen:te,sheenColorMap:et,sheenRoughnessMap:Be,specularMap:Oe,specularColorMap:Xe,specularIntensityMap:it,transmission:ue,transmissionMap:ct,thicknessMap:X,gradientMap:Ne,opaque:A.transparent===!1&&A.blending===Ol&&A.alphaToCoverage===!1,alphaMap:Ee,alphaTest:Le,alphaHash:je,combine:A.combine,mapUv:Ce&&T(A.map.channel),aoMapUv:xt&&T(A.aoMap.channel),lightMapUv:St&&T(A.lightMap.channel),bumpMapUv:nt&&T(A.bumpMap.channel),normalMapUv:at&&T(A.normalMap.channel),displacementMapUv:jt&&T(A.displacementMap.channel),emissiveMapUv:mn&&T(A.emissiveMap.channel),metalnessMapUv:Ot&&T(A.metalnessMap.channel),roughnessMapUv:nn&&T(A.roughnessMap.channel),anisotropyMapUv:xe&&T(A.anisotropyMap.channel),clearcoatMapUv:we&&T(A.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&T(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&T(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&T(A.iridescenceMap.channel),iridescenceThicknessMapUv:De&&T(A.iridescenceThicknessMap.channel),sheenColorMapUv:et&&T(A.sheenColorMap.channel),sheenRoughnessMapUv:Be&&T(A.sheenRoughnessMap.channel),specularMapUv:Oe&&T(A.specularMap.channel),specularColorMapUv:Xe&&T(A.specularColorMap.channel),specularIntensityMapUv:it&&T(A.specularIntensityMap.channel),transmissionMapUv:ct&&T(A.transmissionMap.channel),thicknessMapUv:X&&T(A.thicknessMap.channel),alphaMapUv:Ee&&T(A.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(at||q),vertexNormals:!!k.attributes.normal,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:ne.isPoints===!0&&!!k.attributes.uv&&(Ce||Ee),fog:!!Q,useFog:A.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||k.attributes.normal===void 0&&at===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Ae,skinning:ne.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ze,morphTextureStride:qe,numSunLights:P.sun.length,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numSunLightShadows:P.sunShadowMap.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:ce.length,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:A.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:$e,decodeVideoTexture:Ce&&A.map.isVideoTexture===!0&&Dt.getTransfer(A.map.colorSpace)===Yt,decodeVideoTextureEmissive:mn&&A.emissiveMap.isVideoTexture===!0&&Dt.getTransfer(A.emissiveMap.colorSpace)===Yt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===za,flipSided:A.side===ei,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Te&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&A.extensions.multiDraw===!0||ye)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return ke.vertexUv1s=p.has(1),ke.vertexUv2s=p.has(2),ke.vertexUv3s=p.has(3),p.clear(),ke}function b(A){const P=[];if(A.shaderID?P.push(A.shaderID):(P.push(A.customVertexShaderID),P.push(A.customFragmentShaderID)),A.defines!==void 0)for(const V in A.defines)P.push(V),P.push(A.defines[V]);return A.isRawShaderMaterial===!1&&(S(P,A),U(P,A),P.push(s.outputColorSpace)),P.push(A.customProgramCacheKey),P.join()}function S(A,P){A.push(P.precision),A.push(P.outputColorSpace),A.push(P.envMapMode),A.push(P.envMapCubeUVHeight),A.push(P.mapUv),A.push(P.alphaMapUv),A.push(P.lightMapUv),A.push(P.aoMapUv),A.push(P.bumpMapUv),A.push(P.normalMapUv),A.push(P.displacementMapUv),A.push(P.emissiveMapUv),A.push(P.metalnessMapUv),A.push(P.roughnessMapUv),A.push(P.anisotropyMapUv),A.push(P.clearcoatMapUv),A.push(P.clearcoatNormalMapUv),A.push(P.clearcoatRoughnessMapUv),A.push(P.iridescenceMapUv),A.push(P.iridescenceThicknessMapUv),A.push(P.sheenColorMapUv),A.push(P.sheenRoughnessMapUv),A.push(P.specularMapUv),A.push(P.specularColorMapUv),A.push(P.specularIntensityMapUv),A.push(P.transmissionMapUv),A.push(P.thicknessMapUv),A.push(P.combine),A.push(P.fogExp2),A.push(P.sizeAttenuation),A.push(P.morphTargetsCount),A.push(P.morphAttributeCount),A.push(P.numSunLights),A.push(P.numDirLights),A.push(P.numPointLights),A.push(P.numSpotLights),A.push(P.numSpotLightMaps),A.push(P.numHemiLights),A.push(P.numRectAreaLights),A.push(P.numSunLightShadows),A.push(P.numDirLightShadows),A.push(P.numPointLightShadows),A.push(P.numSpotLightShadows),A.push(P.numSpotLightShadowsWithMaps),A.push(P.numLightProbes),A.push(P.shadowMapType),A.push(P.toneMapping),A.push(P.numClippingPlanes),A.push(P.numClipIntersection),A.push(P.depthPacking)}function U(A,P){d.disableAll(),P.instancing&&d.enable(0),P.instancingColor&&d.enable(1),P.instancingMorph&&d.enable(2),P.matcap&&d.enable(3),P.envMap&&d.enable(4),P.normalMapObjectSpace&&d.enable(5),P.normalMapTangentSpace&&d.enable(6),P.clearcoat&&d.enable(7),P.iridescence&&d.enable(8),P.alphaTest&&d.enable(9),P.vertexColors&&d.enable(10),P.vertexAlphas&&d.enable(11),P.vertexUv1s&&d.enable(12),P.vertexUv2s&&d.enable(13),P.vertexUv3s&&d.enable(14),P.vertexTangents&&d.enable(15),P.anisotropy&&d.enable(16),P.alphaHash&&d.enable(17),P.batching&&d.enable(18),P.dispersion&&d.enable(19),P.retroreflection&&d.enable(24),P.batchingColor&&d.enable(20),P.gradientMap&&d.enable(21),P.packedNormalMap&&d.enable(22),P.vertexNormals&&d.enable(23),A.push(d.mask),d.disableAll(),P.fog&&d.enable(0),P.useFog&&d.enable(1),P.flatShading&&d.enable(2),P.logarithmicDepthBuffer&&d.enable(3),P.reversedDepthBuffer&&d.enable(4),P.skinning&&d.enable(5),P.morphTargets&&d.enable(6),P.morphNormals&&d.enable(7),P.morphColors&&d.enable(8),P.premultipliedAlpha&&d.enable(9),P.shadowMapEnabled&&d.enable(10),P.doubleSided&&d.enable(11),P.flipSided&&d.enable(12),P.useDepthPacking&&d.enable(13),P.dithering&&d.enable(14),P.transmission&&d.enable(15),P.sheen&&d.enable(16),P.opaque&&d.enable(17),P.pointsUvs&&d.enable(18),P.decodeVideoTexture&&d.enable(19),P.decodeVideoTextureEmissive&&d.enable(20),P.alphaToCoverage&&d.enable(21),P.numLightProbeGrids>0&&d.enable(22),P.hasPositionAttribute&&d.enable(23),A.push(d.mask)}function I(A){const P=E[A.type];let V;if(P){const Y=la[P];V=B2.clone(Y.uniforms)}else V=A.uniforms;return V}function N(A,P){let V=_.get(P);return V!==void 0?++V.usedTimes:(V=new fN(s,P,A,l),m.push(V),_.set(P,V)),V}function D(A){if(--A.usedTimes===0){const P=m.indexOf(A);m[P]=m[m.length-1],m.pop(),_.delete(A.cacheKey),A.destroy()}}function L(A){h.remove(A)}function O(){h.dispose()}return{getParameters:C,getProgramCacheKey:b,getUniforms:I,acquireProgram:N,releaseProgram:D,releaseShaderCache:L,programs:m,dispose:O}}function xN(){let s=new WeakMap;function t(d){return s.has(d)}function i(d){let h=s.get(d);return h===void 0&&(h={},s.set(d,h)),h}function r(d){s.delete(d)}function l(d,h,p){s.get(d)[h]=p}function u(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function vN(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function my(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function gy(){const s=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function d(v){let E=0;return v.isInstancedMesh&&(E+=2),v.isSkinnedMesh&&(E+=1),E}function h(v,E,T,C,b,S){let U=s[t];return U===void 0?(U={id:v.id,object:v,geometry:E,material:T,materialVariant:d(v),groupOrder:C,renderOrder:v.renderOrder,z:b,group:S},s[t]=U):(U.id=v.id,U.object=v,U.geometry=E,U.material=T,U.materialVariant=d(v),U.groupOrder=C,U.renderOrder=v.renderOrder,U.z=b,U.group=S),t++,U}function p(v,E,T,C,b,S,U){U.reversedDepth===!0&&(b=-b);const I=h(v,E,T,C,b,S);T.transmission>0?r.push(I):T.transparent===!0?l.push(I):i.push(I)}function m(v,E,T,C,b,S){const U=h(v,E,T,C,b,S);T.transmission>0?r.unshift(U):T.transparent===!0?l.unshift(U):i.unshift(U)}function _(v,E){i.length>1&&i.sort(v||vN),r.length>1&&r.sort(E||my),l.length>1&&l.sort(E||my)}function x(){for(let v=t,E=s.length;v<E;v++){const T=s[v];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:p,unshift:m,finish:x,sort:_}}function _N(){let s=new WeakMap;function t(r,l){const u=s.get(r);let d;return u===void 0?(d=new gy,s.set(r,[d])):l>=u.length?(d=new gy,u.push(d)):d=u[l],d}function i(){s=new WeakMap}return{get:t,dispose:i}}function yN(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new me,color:new Lt};break;case"SpotLight":i={position:new me,direction:new me,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new me,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new me,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":i={color:new Lt,position:new me,halfWidth:new me,halfHeight:new me};break}return s[t.id]=i,i}}}function SN(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let bN=0;function EN(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function MN(s){const t=new yN,i=SN(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new me);const l=new me,u=new pn,d=new pn;function h(m){let _=0,x=0,v=0;for(let ne=0;ne<9;ne++)r.probe[ne].set(0,0,0);let E=0,T=0,C=0,b=0,S=0,U=0,I=0,N=0,D=0,L=0,O=0,A=0,P=0,V=0;m.sort(EN);for(let ne=0,ce=m.length;ne<ce;ne++){const Q=m[ne],k=Q.color,W=Q.intensity,j=Q.distance;let se=null;if(Q.shadow&&Q.shadow.map&&(Q.shadow.map.texture.format===fs?se=Q.shadow.map.texture:se=Q.shadow.map.depthTexture||Q.shadow.map.texture),Q.isAmbientLight)_+=k.r*W,x+=k.g*W,v+=k.b*W;else if(Q.isLightProbe){for(let ae=0;ae<9;ae++)r.probe[ae].addScaledVector(Q.sh.coefficients[ae],W);V++}else if(Q.isSunLight){const ae=t.get(Q);if(ae.color.copy(Q.color).multiplyScalar(Q.intensity),Q.castShadow){const he=Q.shadow,pe=i.get(Q);pe.shadowIntensity=he.intensity,pe.shadowBias=he.bias,pe.shadowNormalBias=he.normalBias,pe.shadowRadius=he.radius,pe.shadowMapSize.copy(he.mapSize).multiply(he.getFrameExtents()),r.sunShadow[T]=pe,r.sunShadowMap[T]=se;const ze=he.getViewportCount();for(let qe=0;qe<ze;qe++)r.sunShadowMatrix[C+qe]=he.getMatrix(qe),r.sunShadowCascade[C+qe]=he._cascadeData[qe];C+=ze,T++}r.sun[E]=ae,E++}else if(Q.isDirectionalLight){const ae=t.get(Q);if(ae.color.copy(Q.color).multiplyScalar(Q.intensity),Q.castShadow){const he=Q.shadow,pe=i.get(Q);pe.shadowIntensity=he.intensity,pe.shadowBias=he.bias,pe.shadowNormalBias=he.normalBias,pe.shadowRadius=he.radius,pe.shadowMapSize=he.mapSize,r.directionalShadow[b]=pe,r.directionalShadowMap[b]=se,r.directionalShadowMatrix[b]=Q.shadow.matrix,D++}r.directional[b]=ae,b++}else if(Q.isSpotLight){const ae=t.get(Q);ae.position.setFromMatrixPosition(Q.matrixWorld),ae.color.copy(k).multiplyScalar(W),ae.distance=j,ae.coneCos=Math.cos(Q.angle),ae.penumbraCos=Math.cos(Q.angle*(1-Q.penumbra)),ae.decay=Q.decay,r.spot[U]=ae;const he=Q.shadow;if(Q.map&&(r.spotLightMap[A]=Q.map,A++,he.updateMatrices(Q),Q.castShadow&&P++),r.spotLightMatrix[U]=he.matrix,Q.castShadow){const pe=i.get(Q);pe.shadowIntensity=he.intensity,pe.shadowBias=he.bias,pe.shadowNormalBias=he.normalBias,pe.shadowRadius=he.radius,pe.shadowMapSize=he.mapSize,r.spotShadow[U]=pe,r.spotShadowMap[U]=se,O++}U++}else if(Q.isRectAreaLight){const ae=t.get(Q);ae.color.copy(k).multiplyScalar(W),ae.halfWidth.set(Q.width*.5,0,0),ae.halfHeight.set(0,Q.height*.5,0),r.rectArea[I]=ae,I++}else if(Q.isPointLight){const ae=t.get(Q);if(ae.color.copy(Q.color).multiplyScalar(Q.intensity),ae.distance=Q.distance,ae.decay=Q.decay,Q.castShadow){const he=Q.shadow,pe=i.get(Q);pe.shadowIntensity=he.intensity,pe.shadowBias=he.bias,pe.shadowNormalBias=he.normalBias,pe.shadowRadius=he.radius,pe.shadowMapSize=he.mapSize,pe.shadowCameraNear=he.camera.near,pe.shadowCameraFar=he.camera.far,r.pointShadow[S]=pe,r.pointShadowMap[S]=se,r.pointShadowMatrix[S]=Q.shadow.matrix,L++}r.point[S]=ae,S++}else if(Q.isHemisphereLight){const ae=t.get(Q);ae.skyColor.copy(Q.color).multiplyScalar(W),ae.groundColor.copy(Q.groundColor).multiplyScalar(W),r.hemi[N]=ae,N++}}I>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ve.LTC_FLOAT_1,r.rectAreaLTC2=Ve.LTC_FLOAT_2):(r.rectAreaLTC1=Ve.LTC_HALF_1,r.rectAreaLTC2=Ve.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=x,r.ambient[2]=v;const Y=r.hash;(Y.sunLength!==E||Y.directionalLength!==b||Y.pointLength!==S||Y.spotLength!==U||Y.rectAreaLength!==I||Y.hemiLength!==N||Y.numSunShadows!==T||Y.numDirectionalShadows!==D||Y.numPointShadows!==L||Y.numSpotShadows!==O||Y.numSpotMaps!==A||Y.numLightProbes!==V)&&(r.sun.length=E,r.directional.length=b,r.spot.length=U,r.rectArea.length=I,r.point.length=S,r.hemi.length=N,r.sunShadow.length=T,r.sunShadowMap.length=T,r.sunShadowMatrix.length=C,r.sunShadowCascade.length=C,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.directionalShadowMatrix.length=D,r.pointShadow.length=L,r.pointShadowMap.length=L,r.pointShadowMatrix.length=L,r.spotShadow.length=O,r.spotShadowMap.length=O,r.spotLightMatrix.length=O+A-P,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=V,Y.sunLength=E,Y.directionalLength=b,Y.pointLength=S,Y.spotLength=U,Y.rectAreaLength=I,Y.hemiLength=N,Y.numSunShadows=T,Y.numDirectionalShadows=D,Y.numPointShadows=L,Y.numSpotShadows=O,Y.numSpotMaps=A,Y.numLightProbes=V,r.version=bN++)}function p(m,_){let x=0,v=0,E=0,T=0,C=0,b=0;const S=_.matrixWorldInverse;for(let U=0,I=m.length;U<I;U++){const N=m[U];if(N.isSunLight){const D=r.sun[x];D.direction.setFromMatrixPosition(N.matrixWorld),D.direction.transformDirection(S),x++}else if(N.isDirectionalLight){const D=r.directional[v];D.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),v++}else if(N.isSpotLight){const D=r.spot[T];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(S),D.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),T++}else if(N.isRectAreaLight){const D=r.rectArea[C];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(S),d.identity(),u.copy(N.matrixWorld),u.premultiply(S),d.extractRotation(u),D.halfWidth.set(N.width*.5,0,0),D.halfHeight.set(0,N.height*.5,0),D.halfWidth.applyMatrix4(d),D.halfHeight.applyMatrix4(d),C++}else if(N.isPointLight){const D=r.point[E];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(S),E++}else if(N.isHemisphereLight){const D=r.hemi[b];D.direction.setFromMatrixPosition(N.matrixWorld),D.direction.transformDirection(S),b++}}}return{setup:h,setupView:p,state:r}}function xy(s){const t=new MN(s),i=[],r=[],l=[];function u(v){x.camera=v,i.length=0,r.length=0,l.length=0}function d(v){i.push(v)}function h(v){r.push(v)}function p(v){l.push(v)}function m(){t.setup(i)}function _(v){t.setupView(i,v)}const x={lightsArray:i,shadowsArray:r,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:u,state:x,setupLights:m,setupLightsView:_,pushLight:d,pushShadow:h,pushLightProbeGrid:p}}function TN(s){let t=new WeakMap;function i(l,u=0){const d=t.get(l);let h;return d===void 0?(h=new xy(s),t.set(l,[h])):u>=d.length?(h=new xy(s),d.push(h)):h=d[u],h}function r(){t=new WeakMap}return{get:i,dispose:r}}const AN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wN=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,RN=[new me(1,0,0),new me(-1,0,0),new me(0,1,0),new me(0,-1,0),new me(0,0,1),new me(0,0,-1)],CN=[new me(0,-1,0),new me(0,-1,0),new me(0,0,1),new me(0,0,-1),new me(0,-1,0),new me(0,-1,0)],vy=new pn,Ul=new me,Dp=new me;function NN(s,t,i){let r=new TS;const l=new Ht,u=new Ht,d=new dn,h=new G2,p=new V2,m={},_=i.maxTextureSize,x={[cs]:ei,[ei]:cs,[za]:za},v=new ma({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:AN,fragmentShader:wN}),E=v.clone();E.defines.HORIZONTAL_PASS=1;const T=new Xi;T.setAttribute("position",new ki(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Wa(T,v),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wu;let S=this.type;this.render=function(L,O,A){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||L.length===0)return;this.type===wA&&(ot("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Wu);const P=s.getRenderTarget(),V=s.getActiveCubeFace(),Y=s.getActiveMipmapLevel(),ne=s.state;ne.setBlending(Ga),ne.buffers.depth.getReversed()===!0?ne.buffers.color.setClear(0,0,0,0):ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const ce=S!==this.type;ce&&O.traverse(function(Q){Q.material&&(Array.isArray(Q.material)?Q.material.forEach(k=>k.needsUpdate=!0):Q.material.needsUpdate=!0)});for(let Q=0,k=L.length;Q<k;Q++){const W=L[Q],j=W.shadow;if(j===void 0){ot("WebGLShadowMap:",W,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;l.copy(j.mapSize);const se=j.getFrameExtents();l.multiply(se),u.copy(j.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/se.x),l.x=u.x*se.x,j.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/se.y),l.y=u.y*se.y,j.mapSize.y=u.y));const ae=s.state.buffers.depth.getReversed();if(j.camera._reversedDepth=ae,j.map===null||ce===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===Ll){if(W.isPointLight){ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new Vi(l.x,l.y,{format:fs,type:pa,minFilter:Hn,magFilter:Hn,generateMipmaps:!1}),j.map.texture.name=W.name+".shadowMap",j.map.depthTexture=new Gl(l.x,l.y,ca),j.map.depthTexture.name=W.name+".shadowMapDepth",j.map.depthTexture.format=Xa,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=On,j.map.depthTexture.magFilter=On}else W.isPointLight?(j.map=new FS(l.x),j.map.depthTexture=new P2(l.x,ha)):(j.map=new Vi(l.x,l.y),j.map.depthTexture=new Gl(l.x,l.y,ha)),j.map.depthTexture.name=W.name+".shadowMap",j.map.depthTexture.format=Xa,this.type===Wu?(j.map.depthTexture.compareFunction=ae?qm:Wm,j.map.depthTexture.minFilter=Hn,j.map.depthTexture.magFilter=Hn):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=On,j.map.depthTexture.magFilter=On);j.camera.updateProjectionMatrix()}j.map.isWebGLCubeRenderTarget!==!0&&(j.map.width!==l.x||j.map.height!==l.y)&&j.map.setSize(l.x,l.y);const he=j.map.isWebGLCubeRenderTarget?6:j.getViewportCount();W.isPointLight!==!0&&j.updateMatrices(W,A);for(let pe=0;pe<he;pe++){const ze=j.getCamera(pe);if(W.isPointLight){const qe=j.camera,z=j.matrix,ve=W.distance||qe.far;ve!==qe.far&&(qe.far=ve,qe.updateProjectionMatrix()),Ul.setFromMatrixPosition(W.matrixWorld),qe.position.copy(Ul),Dp.copy(qe.position),Dp.add(RN[pe]),qe.up.copy(CN[pe]),qe.lookAt(Dp),qe.updateMatrixWorld(),z.makeTranslation(-Ul.x,-Ul.y,-Ul.z),vy.multiplyMatrices(qe.projectionMatrix,qe.matrixWorldInverse),j._frustum.setFromProjectionMatrix(vy,qe.coordinateSystem,qe.reversedDepth)}if(j.map.isWebGLCubeRenderTarget)s.setRenderTarget(j.map,pe),s.clear();else{pe===0&&(s.setRenderTarget(j.map),s.clear());const qe=j.getViewport(pe);d.set(u.x*qe.x,u.y*qe.y,u.x*qe.z,u.y*qe.w),ne.viewport(d)}r=j.getFrustum(pe),N(O,A,ze,W,this.type)}j.isPointLightShadow!==!0&&this.type===Ll&&U(j,A),j.needsUpdate=!1}S=this.type,b.needsUpdate=!1,s.setRenderTarget(P,V,Y)};function U(L,O){const A=t.update(C);v.defines.VSM_SAMPLES!==L.blurSamples&&(v.defines.VSM_SAMPLES=L.blurSamples,E.defines.VSM_SAMPLES=L.blurSamples,v.needsUpdate=!0,E.needsUpdate=!0),L.mapPass===null?L.mapPass=new Vi(l.x,l.y,{format:fs,type:pa}):(L.mapPass.width!==L.map.width||L.mapPass.height!==L.map.height)&&L.mapPass.setSize(L.map.width,L.map.height),v.uniforms.shadow_pass.value=L.map.depthTexture,v.uniforms.resolution.value.set(L.map.width,L.map.height),v.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(O,null,A,v,C,null),E.uniforms.shadow_pass.value=L.mapPass.texture,E.uniforms.resolution.value.set(L.map.width,L.map.height),E.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(O,null,A,E,C,null)}function I(L,O,A,P){let V=null;const Y=A.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(Y!==void 0)V=Y;else if(V=A.isPointLight===!0?p:h,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const ne=V.uuid,ce=O.uuid;let Q=m[ne];Q===void 0&&(Q={},m[ne]=Q);let k=Q[ce];k===void 0&&(k=V.clone(),Q[ce]=k,O.addEventListener("dispose",D)),V=k}if(V.visible=O.visible,V.wireframe=O.wireframe,P===Ll?V.side=O.shadowSide!==null?O.shadowSide:O.side:V.side=O.shadowSide!==null?O.shadowSide:x[O.side],V.alphaMap=O.alphaMap,V.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,V.map=O.map,V.clipShadows=O.clipShadows,V.clippingPlanes=O.clippingPlanes,V.clipIntersection=O.clipIntersection,V.displacementMap=O.displacementMap,V.displacementScale=O.displacementScale,V.displacementBias=O.displacementBias,V.wireframeLinewidth=O.wireframeLinewidth,V.linewidth=O.linewidth,A.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const ne=s.properties.get(V);ne.light=A}return V}function N(L,O,A,P,V){if(L.visible===!1)return;if(L.layers.test(O.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&V===Ll)&&(!L.frustumCulled||L.intersectsFrustum(r))){L.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,L.matrixWorld);const ce=t.update(L),Q=L.material;if(Array.isArray(Q)){const k=ce.groups;for(let W=0,j=k.length;W<j;W++){const se=k[W],ae=Q[se.materialIndex];if(ae&&ae.visible){const he=I(L,ae,P,V);L.onBeforeShadow(s,L,O,A,ce,he,se),s.renderBufferDirect(A,null,ce,he,L,se),L.onAfterShadow(s,L,O,A,ce,he,se)}}}else if(Q.visible){const k=I(L,Q,P,V);L.onBeforeShadow(s,L,O,A,ce,k,null),s.renderBufferDirect(A,null,ce,k,L,null),L.onAfterShadow(s,L,O,A,ce,k,null)}}const ne=L.children;for(let ce=0,Q=ne.length;ce<Q;ce++)N(ne[ce],O,A,P,V)}function D(L){L.target.removeEventListener("dispose",D);for(const A in m){const P=m[A],V=L.target.uuid;V in P&&(P[V].dispose(),delete P[V])}}}function DN(s,t){function i(){let X=!1;const Ne=new dn;let Ee=null;const Le=new dn(0,0,0,0);return{setMask:function(je){Ee!==je&&!X&&(s.colorMask(je,je,je,je),Ee=je)},setLocked:function(je){X=je},setClear:function(je,Te,$e,ke,Ct){Ct===!0&&(je*=ke,Te*=ke,$e*=ke),Ne.set(je,Te,$e,ke),Le.equals(Ne)===!1&&(s.clearColor(je,Te,$e,ke),Le.copy(Ne))},reset:function(){X=!1,Ee=null,Le.set(-1,0,0,0)}}}function r(){let X=!1,Ne=!1,Ee=null,Le=null,je=null;return{setReversed:function(Te){if(Ne!==Te){const $e=t.get("EXT_clip_control");Te?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),Ne=Te;const ke=je;je=null,this.setClear(ke)}},getReversed:function(){return Ne},setTest:function(Te){Te?ge(s.DEPTH_TEST):Ae(s.DEPTH_TEST)},setMask:function(Te){Ee!==Te&&!X&&(s.depthMask(Te),Ee=Te)},setFunc:function(Te){if(Ne&&(Te=l2[Te]),Le!==Te){switch(Te){case zp:s.depthFunc(s.NEVER);break;case Hp:s.depthFunc(s.ALWAYS);break;case Gp:s.depthFunc(s.LESS);break;case Il:s.depthFunc(s.LEQUAL);break;case Vp:s.depthFunc(s.EQUAL);break;case kp:s.depthFunc(s.GEQUAL);break;case jp:s.depthFunc(s.GREATER);break;case Xp:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Le=Te}},setLocked:function(Te){X=Te},setClear:function(Te){je!==Te&&(je=Te,Ne&&(Te=1-Te),s.clearDepth(Te))},reset:function(){X=!1,Ee=null,Le=null,je=null,Ne=!1}}}function l(){let X=!1,Ne=null,Ee=null,Le=null,je=null,Te=null,$e=null,ke=null,Ct=null;return{setTest:function(ut){X||(ut?ge(s.STENCIL_TEST):Ae(s.STENCIL_TEST))},setMask:function(ut){Ne!==ut&&!X&&(s.stencilMask(ut),Ne=ut)},setFunc:function(ut,ni,pi){(Ee!==ut||Le!==ni||je!==pi)&&(s.stencilFunc(ut,ni,pi),Ee=ut,Le=ni,je=pi)},setOp:function(ut,ni,pi){(Te!==ut||$e!==ni||ke!==pi)&&(s.stencilOp(ut,ni,pi),Te=ut,$e=ni,ke=pi)},setLocked:function(ut){X=ut},setClear:function(ut){Ct!==ut&&(s.clearStencil(ut),Ct=ut)},reset:function(){X=!1,Ne=null,Ee=null,Le=null,je=null,Te=null,$e=null,ke=null,Ct=null}}}const u=new i,d=new r,h=new l,p=new WeakMap,m=new WeakMap;let _={},x={},v={},E=new WeakMap,T=[],C=null,b=!1,S=null,U=null,I=null,N=null,D=null,L=null,O=null,A=new Lt(0,0,0),P=0,V=!1,Y=null,ne=null,ce=null,Q=null,k=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,se=0;const ae=s.getParameter(s.VERSION);ae.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(ae)[1]),j=se>=1):ae.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),j=se>=2);let he=null,pe={};const ze=s.getParameter(s.SCISSOR_BOX),qe=s.getParameter(s.VIEWPORT),z=new dn().fromArray(ze),ve=new dn().fromArray(qe);function Re(X,Ne,Ee,Le){const je=new Uint8Array(4),Te=s.createTexture();s.bindTexture(X,Te),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let $e=0;$e<Ee;$e++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(Ne,0,s.RGBA,1,1,Le,0,s.RGBA,s.UNSIGNED_BYTE,je):s.texImage2D(Ne+$e,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,je);return Te}const J={};J[s.TEXTURE_2D]=Re(s.TEXTURE_2D,s.TEXTURE_2D,1),J[s.TEXTURE_CUBE_MAP]=Re(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[s.TEXTURE_2D_ARRAY]=Re(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),J[s.TEXTURE_3D]=Re(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ge(s.DEPTH_TEST),d.setFunc(Il),nt(!1),at(E_),ge(s.CULL_FACE),xt(Ga);function ge(X){_[X]!==!0&&(s.enable(X),_[X]=!0)}function Ae(X){_[X]!==!1&&(s.disable(X),_[X]=!1)}function Ie(X,Ne){return v[X]!==Ne?(s.bindFramebuffer(X,Ne),v[X]=Ne,X===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Ne),X===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Ne),!0):!1}function ye(X,Ne){let Ee=T,Le=!1;if(X){Ee=E.get(Ne),Ee===void 0&&(Ee=[],E.set(Ne,Ee));const je=X.textures;if(Ee.length!==je.length||Ee[0]!==s.COLOR_ATTACHMENT0){for(let Te=0,$e=je.length;Te<$e;Te++)Ee[Te]=s.COLOR_ATTACHMENT0+Te;Ee.length=je.length,Le=!0}}else Ee[0]!==s.BACK&&(Ee[0]=s.BACK,Le=!0);Le&&s.drawBuffers(Ee)}function Ce(X){return C!==X?(s.useProgram(X),C=X,!0):!1}const kt={[go]:s.FUNC_ADD,[CA]:s.FUNC_SUBTRACT,[NA]:s.FUNC_REVERSE_SUBTRACT};kt[DA]=s.MIN,kt[UA]=s.MAX;const mt={[LA]:s.ZERO,[FA]:s.ONE,[PA]:s.SRC_COLOR,[$y]:s.SRC_ALPHA,[GA]:s.SRC_ALPHA_SATURATE,[zA]:s.DST_COLOR,[BA]:s.DST_ALPHA,[OA]:s.ONE_MINUS_SRC_COLOR,[eS]:s.ONE_MINUS_SRC_ALPHA,[HA]:s.ONE_MINUS_DST_COLOR,[IA]:s.ONE_MINUS_DST_ALPHA,[VA]:s.CONSTANT_COLOR,[kA]:s.ONE_MINUS_CONSTANT_COLOR,[jA]:s.CONSTANT_ALPHA,[XA]:s.ONE_MINUS_CONSTANT_ALPHA};function xt(X,Ne,Ee,Le,je,Te,$e,ke,Ct,ut){if(X===Ga){b===!0&&(Ae(s.BLEND),b=!1);return}if(b===!1&&(ge(s.BLEND),b=!0),X!==RA){if(X!==S||ut!==V){if((U!==go||D!==go)&&(s.blendEquation(s.FUNC_ADD),U=go,D=go),ut)switch(X){case Ol:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ip:s.blendFunc(s.ONE,s.ONE);break;case M_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case T_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Bt("WebGLState: Invalid blending: ",X);break}else switch(X){case Ol:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ip:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case M_:Bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case T_:Bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Bt("WebGLState: Invalid blending: ",X);break}I=null,N=null,L=null,O=null,A.set(0,0,0),P=0,S=X,V=ut}return}je=je||Ne,Te=Te||Ee,$e=$e||Le,(Ne!==U||je!==D)&&(s.blendEquationSeparate(kt[Ne],kt[je]),U=Ne,D=je),(Ee!==I||Le!==N||Te!==L||$e!==O)&&(s.blendFuncSeparate(mt[Ee],mt[Le],mt[Te],mt[$e]),I=Ee,N=Le,L=Te,O=$e),(ke.equals(A)===!1||Ct!==P)&&(s.blendColor(ke.r,ke.g,ke.b,Ct),A.copy(ke),P=Ct),S=X,V=!1}function St(X,Ne){X.side===za?Ae(s.CULL_FACE):ge(s.CULL_FACE);let Ee=X.side===ei;Ne&&(Ee=!Ee),nt(Ee),X.blending===Ol&&X.transparent===!1?xt(Ga):xt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),d.setFunc(X.depthFunc),d.setTest(X.depthTest),d.setMask(X.depthWrite),u.setMask(X.colorWrite);const Le=X.stencilWrite;h.setTest(Le),Le&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),mn(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ge(s.SAMPLE_ALPHA_TO_COVERAGE):Ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function nt(X){Y!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),Y=X)}function at(X){X!==TA?(ge(s.CULL_FACE),X!==ne&&(X===E_?s.cullFace(s.BACK):X===AA?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ae(s.CULL_FACE),ne=X}function jt(X){X!==ce&&(j&&s.lineWidth(X),ce=X)}function mn(X,Ne,Ee){X?(ge(s.POLYGON_OFFSET_FILL),(Q!==Ne||k!==Ee)&&(Q=Ne,k=Ee,d.getReversed()&&(Ne=-Ne),s.polygonOffset(Ne,Ee))):Ae(s.POLYGON_OFFSET_FILL)}function Ot(X){X?ge(s.SCISSOR_TEST):Ae(s.SCISSOR_TEST)}function nn(X){X===void 0&&(X=s.TEXTURE0+W-1),he!==X&&(s.activeTexture(X),he=X)}function q(X,Ne,Ee){Ee===void 0&&(he===null?Ee=s.TEXTURE0+W-1:Ee=he);let Le=pe[Ee];Le===void 0&&(Le={type:void 0,texture:void 0},pe[Ee]=Le),(Le.type!==X||Le.texture!==Ne)&&(he!==Ee&&(s.activeTexture(Ee),he=Ee),s.bindTexture(X,Ne||J[X]),Le.type=X,Le.texture=Ne)}function rn(){const X=pe[he];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function Pt(){try{s.compressedTexImage2D(...arguments)}catch(X){Bt("WebGLState:",X)}}function F(){try{s.compressedTexImage3D(...arguments)}catch(X){Bt("WebGLState:",X)}}function M(){try{s.texSubImage2D(...arguments)}catch(X){Bt("WebGLState:",X)}}function te(){try{s.texSubImage3D(...arguments)}catch(X){Bt("WebGLState:",X)}}function ue(){try{s.compressedTexSubImage2D(...arguments)}catch(X){Bt("WebGLState:",X)}}function xe(){try{s.compressedTexSubImage3D(...arguments)}catch(X){Bt("WebGLState:",X)}}function we(){try{s.texStorage2D(...arguments)}catch(X){Bt("WebGLState:",X)}}function Ue(){try{s.texStorage3D(...arguments)}catch(X){Bt("WebGLState:",X)}}function _e(){try{s.texImage2D(...arguments)}catch(X){Bt("WebGLState:",X)}}function Me(){try{s.texImage3D(...arguments)}catch(X){Bt("WebGLState:",X)}}function De(X){return x[X]!==void 0?x[X]:s.getParameter(X)}function et(X,Ne){x[X]!==Ne&&(s.pixelStorei(X,Ne),x[X]=Ne)}function Be(X){z.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),z.copy(X))}function Oe(X){ve.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),ve.copy(X))}function Xe(X,Ne){let Ee=m.get(Ne);Ee===void 0&&(Ee=new WeakMap,m.set(Ne,Ee));let Le=Ee.get(X);Le===void 0&&(Le=s.getUniformBlockIndex(Ne,X.name),Ee.set(X,Le))}function it(X,Ne){const Le=m.get(Ne).get(X);p.get(Ne)!==Le&&(s.uniformBlockBinding(Ne,Le,X.__bindingPointIndex),p.set(Ne,Le))}function ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),_={},x={},he=null,pe={},v={},E=new WeakMap,T=[],C=null,b=!1,S=null,U=null,I=null,N=null,D=null,L=null,O=null,A=new Lt(0,0,0),P=0,V=!1,Y=null,ne=null,ce=null,Q=null,k=null,z.set(0,0,s.canvas.width,s.canvas.height),ve.set(0,0,s.canvas.width,s.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:ge,disable:Ae,bindFramebuffer:Ie,drawBuffers:ye,useProgram:Ce,setBlending:xt,setMaterial:St,setFlipSided:nt,setCullFace:at,setLineWidth:jt,setPolygonOffset:mn,setScissorTest:Ot,activeTexture:nn,bindTexture:q,unbindTexture:rn,compressedTexImage2D:Pt,compressedTexImage3D:F,texImage2D:_e,texImage3D:Me,pixelStorei:et,getParameter:De,updateUBOMapping:Xe,uniformBlockBinding:it,texStorage2D:we,texStorage3D:Ue,texSubImage2D:M,texSubImage3D:te,compressedTexSubImage2D:ue,compressedTexSubImage3D:xe,scissor:Be,viewport:Oe,reset:ct}}function UN(s,t,i,r,l,u,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Ht,_=new WeakMap,x=new Set;let v;const E=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(F,M){return T?new OffscreenCanvas(F,M):sf("canvas")}function b(F,M,te){let ue=1;const xe=Pt(F);if((xe.width>te||xe.height>te)&&(ue=te/Math.max(xe.width,xe.height)),ue<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const we=Math.floor(ue*xe.width),Ue=Math.floor(ue*xe.height);v===void 0&&(v=C(we,Ue));const _e=M?C(we,Ue):v;return _e.width=we,_e.height=Ue,_e.getContext("2d").drawImage(F,0,0,we,Ue),ot("WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+we+"x"+Ue+")."),_e}else return"data"in F&&ot("WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),F;return F}function S(F){return F.generateMipmaps}function U(F){s.generateMipmap(F)}function I(F){return F.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?s.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(F,M,te,ue,xe,we=!1){if(F!==null){if(s[F]!==void 0)return s[F];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let Ue;ue&&(Ue=t.get("EXT_texture_norm16"),Ue||ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let _e=M;if(M===s.RED&&(te===s.FLOAT&&(_e=s.R32F),te===s.HALF_FLOAT&&(_e=s.R16F),te===s.UNSIGNED_BYTE&&(_e=s.R8),te===s.UNSIGNED_SHORT&&Ue&&(_e=Ue.R16_EXT),te===s.SHORT&&Ue&&(_e=Ue.R16_SNORM_EXT)),M===s.RED_INTEGER&&(te===s.UNSIGNED_BYTE&&(_e=s.R8UI),te===s.UNSIGNED_SHORT&&(_e=s.R16UI),te===s.UNSIGNED_INT&&(_e=s.R32UI),te===s.BYTE&&(_e=s.R8I),te===s.SHORT&&(_e=s.R16I),te===s.INT&&(_e=s.R32I)),M===s.RG&&(te===s.FLOAT&&(_e=s.RG32F),te===s.HALF_FLOAT&&(_e=s.RG16F),te===s.UNSIGNED_BYTE&&(_e=s.RG8),te===s.UNSIGNED_SHORT&&Ue&&(_e=Ue.RG16_EXT),te===s.SHORT&&Ue&&(_e=Ue.RG16_SNORM_EXT)),M===s.RG_INTEGER&&(te===s.UNSIGNED_BYTE&&(_e=s.RG8UI),te===s.UNSIGNED_SHORT&&(_e=s.RG16UI),te===s.UNSIGNED_INT&&(_e=s.RG32UI),te===s.BYTE&&(_e=s.RG8I),te===s.SHORT&&(_e=s.RG16I),te===s.INT&&(_e=s.RG32I)),M===s.RGB_INTEGER&&(te===s.UNSIGNED_BYTE&&(_e=s.RGB8UI),te===s.UNSIGNED_SHORT&&(_e=s.RGB16UI),te===s.UNSIGNED_INT&&(_e=s.RGB32UI),te===s.BYTE&&(_e=s.RGB8I),te===s.SHORT&&(_e=s.RGB16I),te===s.INT&&(_e=s.RGB32I)),M===s.RGBA_INTEGER&&(te===s.UNSIGNED_BYTE&&(_e=s.RGBA8UI),te===s.UNSIGNED_SHORT&&(_e=s.RGBA16UI),te===s.UNSIGNED_INT&&(_e=s.RGBA32UI),te===s.BYTE&&(_e=s.RGBA8I),te===s.SHORT&&(_e=s.RGBA16I),te===s.INT&&(_e=s.RGBA32I)),M===s.RGB&&(te===s.UNSIGNED_SHORT&&Ue&&(_e=Ue.RGB16_EXT),te===s.SHORT&&Ue&&(_e=Ue.RGB16_SNORM_EXT),te===s.UNSIGNED_INT_5_9_9_9_REV&&(_e=s.RGB9_E5),te===s.UNSIGNED_INT_10F_11F_11F_REV&&(_e=s.R11F_G11F_B10F)),M===s.RGBA){const Me=we?af:Dt.getTransfer(xe);te===s.FLOAT&&(_e=s.RGBA32F),te===s.HALF_FLOAT&&(_e=s.RGBA16F),te===s.UNSIGNED_BYTE&&(_e=Me===Yt?s.SRGB8_ALPHA8:s.RGBA8),te===s.UNSIGNED_SHORT&&Ue&&(_e=Ue.RGBA16_EXT),te===s.SHORT&&Ue&&(_e=Ue.RGBA16_SNORM_EXT),te===s.UNSIGNED_SHORT_4_4_4_4&&(_e=s.RGBA4),te===s.UNSIGNED_SHORT_5_5_5_1&&(_e=s.RGB5_A1)}return(_e===s.R16F||_e===s.R32F||_e===s.RG16F||_e===s.RG32F||_e===s.RGBA16F||_e===s.RGBA32F)&&t.get("EXT_color_buffer_float"),_e}function D(F,M){let te;return F?M===null||M===ha||M===Hl?te=s.DEPTH24_STENCIL8:M===ca?te=s.DEPTH32F_STENCIL8:M===zl&&(te=s.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ha||M===Hl?te=s.DEPTH_COMPONENT24:M===ca?te=s.DEPTH_COMPONENT32F:M===zl&&(te=s.DEPTH_COMPONENT16),te}function L(F,M){return S(F)===!0||F.isFramebufferTexture&&F.minFilter!==On&&F.minFilter!==Hn?Math.log2(Math.max(M.width,M.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?M.mipmaps.length:1}function O(F){const M=F.target;M.removeEventListener("dispose",O),P(M),M.isVideoTexture&&_.delete(M),M.isHTMLTexture&&x.delete(M)}function A(F){const M=F.target;M.removeEventListener("dispose",A),Y(M)}function P(F){const M=r.get(F);if(M.__webglInit===void 0)return;const te=F.source,ue=E.get(te);if(ue){const xe=ue[M.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&V(F),Object.keys(ue).length===0&&E.delete(te)}r.remove(F)}function V(F){const M=r.get(F);s.deleteTexture(M.__webglTexture);const te=F.source,ue=E.get(te);delete ue[M.__cacheKey],d.memory.textures--}function Y(F){const M=r.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),r.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(M.__webglFramebuffer[ue]))for(let xe=0;xe<M.__webglFramebuffer[ue].length;xe++)s.deleteFramebuffer(M.__webglFramebuffer[ue][xe]);else s.deleteFramebuffer(M.__webglFramebuffer[ue]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[ue])}else{if(Array.isArray(M.__webglFramebuffer))for(let ue=0;ue<M.__webglFramebuffer.length;ue++)s.deleteFramebuffer(M.__webglFramebuffer[ue]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ue=0;ue<M.__webglColorRenderbuffer.length;ue++)M.__webglColorRenderbuffer[ue]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[ue]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const te=F.textures;for(let ue=0,xe=te.length;ue<xe;ue++){const we=r.get(te[ue]);we.__webglTexture&&(s.deleteTexture(we.__webglTexture),d.memory.textures--),r.remove(te[ue])}r.remove(F)}let ne=0;function ce(){ne=0}function Q(){return ne}function k(F){ne=F}function W(){const F=ne;return F>=l.maxTextures&&ot("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+l.maxTextures),ne+=1,F}function j(F){const M=[];return M.push(F.wrapS),M.push(F.wrapT),M.push(F.wrapR||0),M.push(F.magFilter),M.push(F.minFilter),M.push(F.anisotropy),M.push(F.internalFormat),M.push(F.format),M.push(F.type),M.push(F.generateMipmaps),M.push(F.premultiplyAlpha),M.push(F.flipY),M.push(F.unpackAlignment),M.push(F.colorSpace),M.join()}function se(F,M){const te=r.get(F);if(F.isVideoTexture&&q(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&te.__version!==F.version){const ue=F.image;if(ue===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(te,F,M);return}}else F.isExternalTexture&&(te.__webglTexture=F.sourceTexture?F.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,te.__webglTexture,s.TEXTURE0+M)}function ae(F,M){const te=r.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&te.__version!==F.version){Ae(te,F,M);return}else F.isExternalTexture&&(te.__webglTexture=F.sourceTexture?F.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,te.__webglTexture,s.TEXTURE0+M)}function he(F,M){const te=r.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&te.__version!==F.version){Ae(te,F,M);return}i.bindTexture(s.TEXTURE_3D,te.__webglTexture,s.TEXTURE0+M)}function pe(F,M){const te=r.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&te.__version!==F.version){Ie(te,F,M);return}i.bindTexture(s.TEXTURE_CUBE_MAP,te.__webglTexture,s.TEXTURE0+M)}const ze={[Wp]:s.REPEAT,[Ha]:s.CLAMP_TO_EDGE,[qp]:s.MIRRORED_REPEAT},qe={[On]:s.NEAREST,[YA]:s.NEAREST_MIPMAP_NEAREST,[vu]:s.NEAREST_MIPMAP_LINEAR,[Hn]:s.LINEAR,[np]:s.LINEAR_MIPMAP_NEAREST,[os]:s.LINEAR_MIPMAP_LINEAR},z={[JA]:s.NEVER,[i2]:s.ALWAYS,[$A]:s.LESS,[Wm]:s.LEQUAL,[e2]:s.EQUAL,[qm]:s.GEQUAL,[t2]:s.GREATER,[n2]:s.NOTEQUAL};function ve(F,M){if(M.type===ca&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Hn||M.magFilter===np||M.magFilter===vu||M.magFilter===os||M.minFilter===Hn||M.minFilter===np||M.minFilter===vu||M.minFilter===os)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(F,s.TEXTURE_WRAP_S,ze[M.wrapS]),s.texParameteri(F,s.TEXTURE_WRAP_T,ze[M.wrapT]),(F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY)&&s.texParameteri(F,s.TEXTURE_WRAP_R,ze[M.wrapR]),s.texParameteri(F,s.TEXTURE_MAG_FILTER,qe[M.magFilter]),s.texParameteri(F,s.TEXTURE_MIN_FILTER,qe[M.minFilter]),M.compareFunction&&(s.texParameteri(F,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(F,s.TEXTURE_COMPARE_FUNC,z[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===On||M.minFilter!==vu&&M.minFilter!==os||M.type===ca&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const te=t.get("EXT_texture_filter_anisotropic");s.texParameterf(F,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function Re(F,M){let te=!1;F.__webglInit===void 0&&(F.__webglInit=!0,M.addEventListener("dispose",O));const ue=M.source;let xe=E.get(ue);xe===void 0&&(xe={},E.set(ue,xe));const we=j(M);if(we!==F.__cacheKey){xe[we]===void 0&&(xe[we]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,te=!0),xe[we].usedTimes++;const Ue=xe[F.__cacheKey];Ue!==void 0&&(xe[F.__cacheKey].usedTimes--,Ue.usedTimes===0&&V(M)),F.__cacheKey=we,F.__webglTexture=xe[we].texture}return te}function J(F,M,te){return Math.floor(Math.floor(F/te)/M)}function ge(F,M,te,ue){const we=F.updateRanges;if(we.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,te,ue,M.data);else{we.sort((et,Be)=>et.start-Be.start);let Ue=0;for(let et=1;et<we.length;et++){const Be=we[Ue],Oe=we[et],Xe=Be.start+Be.count,it=J(Oe.start,M.width,4),ct=J(Be.start,M.width,4);Oe.start<=Xe+1&&it===ct&&J(Oe.start+Oe.count-1,M.width,4)===it?Be.count=Math.max(Be.count,Oe.start+Oe.count-Be.start):(++Ue,we[Ue]=Oe)}we.length=Ue+1;const _e=i.getParameter(s.UNPACK_ROW_LENGTH),Me=i.getParameter(s.UNPACK_SKIP_PIXELS),De=i.getParameter(s.UNPACK_SKIP_ROWS);i.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let et=0,Be=we.length;et<Be;et++){const Oe=we[et],Xe=Math.floor(Oe.start/4),it=Math.ceil(Oe.count/4),ct=Xe%M.width,X=Math.floor(Xe/M.width),Ne=it,Ee=1;i.pixelStorei(s.UNPACK_SKIP_PIXELS,ct),i.pixelStorei(s.UNPACK_SKIP_ROWS,X),i.texSubImage2D(s.TEXTURE_2D,0,ct,X,Ne,Ee,te,ue,M.data)}F.clearUpdateRanges(),i.pixelStorei(s.UNPACK_ROW_LENGTH,_e),i.pixelStorei(s.UNPACK_SKIP_PIXELS,Me),i.pixelStorei(s.UNPACK_SKIP_ROWS,De)}}function Ae(F,M,te){let ue=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ue=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ue=s.TEXTURE_3D);const xe=Re(F,M),we=M.source;i.bindTexture(ue,F.__webglTexture,s.TEXTURE0+te);const Ue=r.get(we);if(we.version!==Ue.__version||xe===!0){if(i.activeTexture(s.TEXTURE0+te),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const Ee=Dt.getPrimaries(Dt.workingColorSpace),Le=M.colorSpace===Cr?null:Dt.getPrimaries(M.colorSpace),je=M.colorSpace===Cr||Ee===Le?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,je)}i.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment);let Me=b(M.image,!1,l.maxTextureSize);Me=rn(M,Me);const De=u.convert(M.format,M.colorSpace),et=u.convert(M.type);let Be=N(M.internalFormat,De,et,M.normalized,M.colorSpace,M.isVideoTexture);ve(ue,M);let Oe;const Xe=M.mipmaps,it=M.isVideoTexture!==!0,ct=Ue.__version===void 0||xe===!0,X=we.dataReady,Ne=L(M,Me);if(M.isDepthTexture)Be=D(M.format===ls,M.type),ct&&(it?i.texStorage2D(s.TEXTURE_2D,1,Be,Me.width,Me.height):i.texImage2D(s.TEXTURE_2D,0,Be,Me.width,Me.height,0,De,et,null));else if(M.isDataTexture)if(Xe.length>0){it&&ct&&i.texStorage2D(s.TEXTURE_2D,Ne,Be,Xe[0].width,Xe[0].height);for(let Ee=0,Le=Xe.length;Ee<Le;Ee++)Oe=Xe[Ee],it?X&&i.texSubImage2D(s.TEXTURE_2D,Ee,0,0,Oe.width,Oe.height,De,et,Oe.data):i.texImage2D(s.TEXTURE_2D,Ee,Be,Oe.width,Oe.height,0,De,et,Oe.data);M.generateMipmaps=!1}else it?(ct&&i.texStorage2D(s.TEXTURE_2D,Ne,Be,Me.width,Me.height),X&&ge(M,Me,De,et)):i.texImage2D(s.TEXTURE_2D,0,Be,Me.width,Me.height,0,De,et,Me.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){it&&ct&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,Be,Xe[0].width,Xe[0].height,Me.depth);for(let Ee=0,Le=Xe.length;Ee<Le;Ee++)if(Oe=Xe[Ee],M.format!==Hi)if(De!==null)if(it){if(X)if(M.layerUpdates.size>0){const je=K_(Oe.width,Oe.height,M.format,M.type);for(const Te of M.layerUpdates){const $e=Oe.data.subarray(Te*je/Oe.data.BYTES_PER_ELEMENT,(Te+1)*je/Oe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ee,0,0,Te,Oe.width,Oe.height,1,De,$e)}}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ee,0,0,0,Oe.width,Oe.height,Me.depth,De,Oe.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Ee,Be,Oe.width,Oe.height,Me.depth,0,Oe.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?X&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Ee,0,0,0,Oe.width,Oe.height,Me.depth,De,et,Oe.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Ee,Be,Oe.width,Oe.height,Me.depth,0,De,et,Oe.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{it&&ct&&i.texStorage2D(s.TEXTURE_2D,Ne,Be,Xe[0].width,Xe[0].height);for(let Ee=0,Le=Xe.length;Ee<Le;Ee++)Oe=Xe[Ee],M.format!==Hi?De!==null?it?X&&i.compressedTexSubImage2D(s.TEXTURE_2D,Ee,0,0,Oe.width,Oe.height,De,Oe.data):i.compressedTexImage2D(s.TEXTURE_2D,Ee,Be,Oe.width,Oe.height,0,Oe.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?X&&i.texSubImage2D(s.TEXTURE_2D,Ee,0,0,Oe.width,Oe.height,De,et,Oe.data):i.texImage2D(s.TEXTURE_2D,Ee,Be,Oe.width,Oe.height,0,De,et,Oe.data)}else if(M.isDataArrayTexture)if(it){if(ct&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,Be,Me.width,Me.height,Me.depth),X)if(M.layerUpdates.size>0){const Ee=K_(Me.width,Me.height,M.format,M.type);for(const Le of M.layerUpdates){const je=Me.data.subarray(Le*Ee/Me.data.BYTES_PER_ELEMENT,(Le+1)*Ee/Me.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Le,Me.width,Me.height,1,De,et,je)}M.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,De,et,Me.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Be,Me.width,Me.height,Me.depth,0,De,et,Me.data);else if(M.isData3DTexture)it?(ct&&i.texStorage3D(s.TEXTURE_3D,Ne,Be,Me.width,Me.height,Me.depth),X&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,De,et,Me.data)):i.texImage3D(s.TEXTURE_3D,0,Be,Me.width,Me.height,Me.depth,0,De,et,Me.data);else if(M.isFramebufferTexture){if(ct)if(it)i.texStorage2D(s.TEXTURE_2D,Ne,Be,Me.width,Me.height);else{let Ee=Me.width,Le=Me.height;for(let je=0;je<Ne;je++)i.texImage2D(s.TEXTURE_2D,je,Be,Ee,Le,0,De,et,null),Ee>>=1,Le>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in s){const Ee=s.canvas;if(Ee.hasAttribute("layoutsubtree")||Ee.setAttribute("layoutsubtree","true"),Me.parentNode!==Ee){Ee.appendChild(Me),x.add(M),Ee.onpaint=Le=>{const je=Le.changedElements;for(const Te of x)je.includes(Te.image)&&(Te.needsUpdate=!0)},Ee.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,Me);else{const je=s.RGBA,Te=s.RGBA,$e=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,je,Te,$e,Me)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Xe.length>0){if(it&&ct){const Ee=Pt(Xe[0]);i.texStorage2D(s.TEXTURE_2D,Ne,Be,Ee.width,Ee.height)}for(let Ee=0,Le=Xe.length;Ee<Le;Ee++)Oe=Xe[Ee],it?X&&i.texSubImage2D(s.TEXTURE_2D,Ee,0,0,De,et,Oe):i.texImage2D(s.TEXTURE_2D,Ee,Be,De,et,Oe);M.generateMipmaps=!1}else if(it){if(ct){const Ee=Pt(Me);i.texStorage2D(s.TEXTURE_2D,Ne,Be,Ee.width,Ee.height)}X&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,De,et,Me)}else i.texImage2D(s.TEXTURE_2D,0,Be,De,et,Me);S(M)&&U(ue),Ue.__version=we.version,M.onUpdate&&M.onUpdate(M)}F.__version=M.version}function Ie(F,M,te){if(M.image.length!==6)return;const ue=Re(F,M),xe=M.source;i.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+te);const we=r.get(xe);if(xe.version!==we.__version||ue===!0){i.activeTexture(s.TEXTURE0+te);const Ue=Dt.getPrimaries(Dt.workingColorSpace),_e=M.colorSpace===Cr?null:Dt.getPrimaries(M.colorSpace),Me=M.colorSpace===Cr||Ue===_e?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const De=M.isCompressedTexture||M.image[0].isCompressedTexture,et=M.image[0]&&M.image[0].isDataTexture,Be=[];for(let Te=0;Te<6;Te++)!De&&!et?Be[Te]=b(M.image[Te],!0,l.maxCubemapSize):Be[Te]=et?M.image[Te].image:M.image[Te],Be[Te]=rn(M,Be[Te]);const Oe=Be[0],Xe=u.convert(M.format,M.colorSpace),it=u.convert(M.type),ct=N(M.internalFormat,Xe,it,M.normalized,M.colorSpace),X=M.isVideoTexture!==!0,Ne=we.__version===void 0||ue===!0,Ee=xe.dataReady;let Le=L(M,Oe);ve(s.TEXTURE_CUBE_MAP,M);let je;if(De){X&&Ne&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Le,ct,Oe.width,Oe.height);for(let Te=0;Te<6;Te++){je=Be[Te].mipmaps;for(let $e=0;$e<je.length;$e++){const ke=je[$e];M.format!==Hi?Xe!==null?X?Ee&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,$e,0,0,ke.width,ke.height,Xe,ke.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,$e,ct,ke.width,ke.height,0,ke.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Ee&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,$e,0,0,ke.width,ke.height,Xe,it,ke.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,$e,ct,ke.width,ke.height,0,Xe,it,ke.data)}}}else{if(je=M.mipmaps,X&&Ne){je.length>0&&Le++;const Te=Pt(Be[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Le,ct,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(et){X?Ee&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,Be[Te].width,Be[Te].height,Xe,it,Be[Te].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,ct,Be[Te].width,Be[Te].height,0,Xe,it,Be[Te].data);for(let $e=0;$e<je.length;$e++){const Ct=je[$e].image[Te].image;X?Ee&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,$e+1,0,0,Ct.width,Ct.height,Xe,it,Ct.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,$e+1,ct,Ct.width,Ct.height,0,Xe,it,Ct.data)}}else{X?Ee&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,Xe,it,Be[Te]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,ct,Xe,it,Be[Te]);for(let $e=0;$e<je.length;$e++){const ke=je[$e];X?Ee&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,$e+1,0,0,Xe,it,ke.image[Te]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,$e+1,ct,Xe,it,ke.image[Te])}}}S(M)&&U(s.TEXTURE_CUBE_MAP),we.__version=xe.version,M.onUpdate&&M.onUpdate(M)}F.__version=M.version}function ye(F,M,te,ue,xe,we){const Ue=u.convert(te.format,te.colorSpace),_e=u.convert(te.type),Me=N(te.internalFormat,Ue,_e,te.normalized,te.colorSpace),De=r.get(M),et=r.get(te);if(et.__renderTarget=M,!De.__hasExternalTextures){const Be=Math.max(1,M.width>>we),Oe=Math.max(1,M.height>>we);xe===s.TEXTURE_3D||xe===s.TEXTURE_2D_ARRAY?i.texImage3D(xe,we,Me,Be,Oe,M.depth,0,Ue,_e,null):i.texImage2D(xe,we,Me,Be,Oe,0,Ue,_e,null)}i.bindFramebuffer(s.FRAMEBUFFER,F),nn(M)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ue,xe,et.__webglTexture,0,Ot(M)):(xe===s.TEXTURE_2D||xe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ue,xe,et.__webglTexture,we),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Ce(F,M,te){if(s.bindRenderbuffer(s.RENDERBUFFER,F),M.depthBuffer){const ue=M.depthTexture,xe=ue&&ue.isDepthTexture?ue.type:null,we=D(M.stencilBuffer,xe),Ue=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;nn(M)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ot(M),we,M.width,M.height):te?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ot(M),we,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,we,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ue,s.RENDERBUFFER,F)}else{const ue=M.textures;for(let xe=0;xe<ue.length;xe++){const we=ue[xe],Ue=u.convert(we.format,we.colorSpace),_e=u.convert(we.type),Me=N(we.internalFormat,Ue,_e,we.normalized,we.colorSpace);nn(M)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ot(M),Me,M.width,M.height):te?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ot(M),Me,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Me,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function kt(F,M,te){const ue=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,F),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const xe=r.get(M.depthTexture);if(xe.__renderTarget=M,(!xe.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ue){if(xe.__webglInit===void 0&&(xe.__webglInit=!0,M.depthTexture.addEventListener("dispose",O)),xe.__webglTexture===void 0){xe.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,xe.__webglTexture),ve(s.TEXTURE_CUBE_MAP,M.depthTexture);const De=u.convert(M.depthTexture.format),et=u.convert(M.depthTexture.type);let Be;M.depthTexture.format===Xa?Be=s.DEPTH_COMPONENT24:M.depthTexture.format===ls&&(Be=s.DEPTH24_STENCIL8);for(let Oe=0;Oe<6;Oe++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Be,M.width,M.height,0,De,et,null)}}else se(M.depthTexture,0);const we=xe.__webglTexture,Ue=Ot(M),_e=ue?s.TEXTURE_CUBE_MAP_POSITIVE_X+te:s.TEXTURE_2D,Me=M.depthTexture.format===ls?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===Xa)nn(M)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Me,_e,we,0,Ue):s.framebufferTexture2D(s.FRAMEBUFFER,Me,_e,we,0);else if(M.depthTexture.format===ls)nn(M)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Me,_e,we,0,Ue):s.framebufferTexture2D(s.FRAMEBUFFER,Me,_e,we,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function mt(F){const M=r.get(F),te=F.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==F.depthTexture){const ue=F.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ue){const xe=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ue.removeEventListener("dispose",xe)};ue.addEventListener("dispose",xe),M.__depthDisposeCallback=xe}M.__boundDepthTexture=ue}if(F.depthTexture&&!M.__autoAllocateDepthBuffer)if(te)for(let ue=0;ue<6;ue++)kt(M.__webglFramebuffer[ue],F,ue);else{const ue=F.texture.mipmaps;ue&&ue.length>0?kt(M.__webglFramebuffer[0],F,0):kt(M.__webglFramebuffer,F,0)}else if(te){M.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(i.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[ue]),M.__webglDepthbuffer[ue]===void 0)M.__webglDepthbuffer[ue]=s.createRenderbuffer(),Ce(M.__webglDepthbuffer[ue],F,!1);else{const xe=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=M.__webglDepthbuffer[ue];s.bindRenderbuffer(s.RENDERBUFFER,we),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,we)}}else{const ue=F.texture.mipmaps;if(ue&&ue.length>0?i.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),Ce(M.__webglDepthbuffer,F,!1);else{const xe=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,we),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,we)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function xt(F,M,te){const ue=r.get(F);M!==void 0&&ye(ue.__webglFramebuffer,F,F.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),te!==void 0&&mt(F)}function St(F){const M=F.texture,te=r.get(F),ue=r.get(M);F.addEventListener("dispose",A);const xe=F.textures,we=F.isWebGLCubeRenderTarget===!0,Ue=xe.length>1;if(Ue||(ue.__webglTexture===void 0&&(ue.__webglTexture=s.createTexture()),ue.__version=M.version,d.memory.textures++),we){te.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(M.mipmaps&&M.mipmaps.length>0){te.__webglFramebuffer[_e]=[];for(let Me=0;Me<M.mipmaps.length;Me++)te.__webglFramebuffer[_e][Me]=s.createFramebuffer()}else te.__webglFramebuffer[_e]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){te.__webglFramebuffer=[];for(let _e=0;_e<M.mipmaps.length;_e++)te.__webglFramebuffer[_e]=s.createFramebuffer()}else te.__webglFramebuffer=s.createFramebuffer();if(Ue)for(let _e=0,Me=xe.length;_e<Me;_e++){const De=r.get(xe[_e]);De.__webglTexture===void 0&&(De.__webglTexture=s.createTexture(),d.memory.textures++)}if(F.samples>0&&nn(F)===!1){te.__webglMultisampledFramebuffer=s.createFramebuffer(),te.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let _e=0;_e<xe.length;_e++){const Me=xe[_e];te.__webglColorRenderbuffer[_e]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,te.__webglColorRenderbuffer[_e]);const De=u.convert(Me.format,Me.colorSpace),et=u.convert(Me.type),Be=N(Me.internalFormat,De,et,Me.normalized,Me.colorSpace,F.isXRRenderTarget===!0),Oe=Ot(F);s.renderbufferStorageMultisample(s.RENDERBUFFER,Oe,Be,F.width,F.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,te.__webglColorRenderbuffer[_e])}s.bindRenderbuffer(s.RENDERBUFFER,null),F.depthBuffer&&(te.__webglDepthRenderbuffer=s.createRenderbuffer(),Ce(te.__webglDepthRenderbuffer,F,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(we){i.bindTexture(s.TEXTURE_CUBE_MAP,ue.__webglTexture),ve(s.TEXTURE_CUBE_MAP,M);for(let _e=0;_e<6;_e++)if(M.mipmaps&&M.mipmaps.length>0)for(let Me=0;Me<M.mipmaps.length;Me++)ye(te.__webglFramebuffer[_e][Me],F,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Me);else ye(te.__webglFramebuffer[_e],F,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);S(M)&&U(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ue){for(let _e=0,Me=xe.length;_e<Me;_e++){const De=xe[_e],et=r.get(De);let Be=s.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Be=F.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Be,et.__webglTexture),ve(Be,De),ye(te.__webglFramebuffer,F,De,s.COLOR_ATTACHMENT0+_e,Be,0),S(De)&&U(Be)}i.unbindTexture()}else{let _e=s.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(_e=F.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(_e,ue.__webglTexture),ve(_e,M),M.mipmaps&&M.mipmaps.length>0)for(let Me=0;Me<M.mipmaps.length;Me++)ye(te.__webglFramebuffer[Me],F,M,s.COLOR_ATTACHMENT0,_e,Me);else ye(te.__webglFramebuffer,F,M,s.COLOR_ATTACHMENT0,_e,0);S(M)&&U(_e),i.unbindTexture()}F.depthBuffer&&mt(F)}function nt(F){const M=F.textures;for(let te=0,ue=M.length;te<ue;te++){const xe=M[te];if(S(xe)){const we=I(F),Ue=r.get(xe).__webglTexture;i.bindTexture(we,Ue),U(we),i.unbindTexture()}}}const at=[],jt=[];function mn(F){if(F.samples>0){if(nn(F)===!1){const M=F.textures,te=F.width,ue=F.height;let xe=s.COLOR_BUFFER_BIT;const we=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ue=r.get(F),_e=M.length>1;if(_e)for(let De=0;De<M.length;De++)i.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const Me=F.texture.mipmaps;Me&&Me.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let De=0;De<M.length;De++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(xe|=s.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(xe|=s.STENCIL_BUFFER_BIT)),_e){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ue.__webglColorRenderbuffer[De]);const et=r.get(M[De]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,et,0)}s.blitFramebuffer(0,0,te,ue,0,0,te,ue,xe,s.NEAREST),p===!0&&(at.length=0,jt.length=0,at.push(s.COLOR_ATTACHMENT0+De),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&(at.push(we),jt.push(we),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,jt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,at))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),_e)for(let De=0;De<M.length;De++){i.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.RENDERBUFFER,Ue.__webglColorRenderbuffer[De]);const et=r.get(M[De]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.TEXTURE_2D,et,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&p){const M=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function Ot(F){return Math.min(l.maxSamples,F.samples)}function nn(F){const M=r.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function q(F){const M=d.render.frame;_.get(F)!==M&&(_.set(F,M),F.update())}function rn(F,M){const te=F.colorSpace,ue=F.format,xe=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||te!==nf&&te!==Cr&&(Dt.getTransfer(te)===Yt?(ue!==Hi||xe!==Ri)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Bt("WebGLTextures: Unsupported texture color space:",te)),M}function Pt(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(m.width=F.naturalWidth||F.width,m.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(m.width=F.displayWidth,m.height=F.displayHeight):(m.width=F.width,m.height=F.height),m}this.allocateTextureUnit=W,this.resetTextureUnits=ce,this.getTextureUnits=Q,this.setTextureUnits=k,this.setTexture2D=se,this.setTexture2DArray=ae,this.setTexture3D=he,this.setTextureCube=pe,this.rebindTextures=xt,this.setupRenderTarget=St,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=mn,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=nn,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function LN(s,t){function i(r,l=Cr){let u;const d=Dt.getTransfer(l);if(r===Ri)return s.UNSIGNED_BYTE;if(r===Gm)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Vm)return s.UNSIGNED_SHORT_5_5_5_1;if(r===dS)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===hS)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===uS)return s.BYTE;if(r===fS)return s.SHORT;if(r===zl)return s.UNSIGNED_SHORT;if(r===Hm)return s.INT;if(r===ha)return s.UNSIGNED_INT;if(r===ca)return s.FLOAT;if(r===pa)return s.HALF_FLOAT;if(r===pS)return s.ALPHA;if(r===mS)return s.RGB;if(r===Hi)return s.RGBA;if(r===Xa)return s.DEPTH_COMPONENT;if(r===ls)return s.DEPTH_STENCIL;if(r===gS)return s.RED;if(r===km)return s.RED_INTEGER;if(r===fs)return s.RG;if(r===jm)return s.RG_INTEGER;if(r===Xm)return s.RGBA_INTEGER;if(r===qu||r===Yu||r===Zu||r===Ku)if(d===Yt)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===qu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Yu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Zu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ku)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===qu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Yu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Zu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ku)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Yp||r===Zp||r===Kp||r===Qp)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Yp)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Zp)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Kp)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Qp)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Jp||r===$p||r===em||r===tm||r===nm||r===ef||r===im)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Jp||r===$p)return d===Yt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===em)return d===Yt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(r===tm)return u.COMPRESSED_R11_EAC;if(r===nm)return u.COMPRESSED_SIGNED_R11_EAC;if(r===ef)return u.COMPRESSED_RG11_EAC;if(r===im)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===am||r===rm||r===sm||r===om||r===lm||r===cm||r===um||r===fm||r===dm||r===hm||r===pm||r===mm||r===gm||r===xm)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===am)return d===Yt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===rm)return d===Yt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===sm)return d===Yt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===om)return d===Yt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===lm)return d===Yt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===cm)return d===Yt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===um)return d===Yt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===fm)return d===Yt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===dm)return d===Yt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===hm)return d===Yt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===pm)return d===Yt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===mm)return d===Yt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===gm)return d===Yt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===xm)return d===Yt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===vm||r===_m||r===ym)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===vm)return d===Yt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===_m)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ym)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Sm||r===bm||r===tf||r===Em)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===Sm)return u.COMPRESSED_RED_RGTC1_EXT;if(r===bm)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===tf)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Em)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Hl?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const FN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PN=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ON{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new RS(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new ma({vertexShader:FN,fragmentShader:PN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Wa(new gf(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class BN extends hs{constructor(t,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",p=1,m=null,_=null,x=null,v=null,E=null,T=null;const C=typeof XRWebGLBinding<"u",b=new ON,S={},U=i.getContextAttributes();let I=null,N=null;const D=[],L=[],O=new Ht;let A=null,P=null;const V=new wi;V.viewport=new dn;const Y=new wi;Y.viewport=new dn;const ne=[V,Y],ce=new j2;let Q=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ge=D[J];return ge===void 0&&(ge=new fp,D[J]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(J){let ge=D[J];return ge===void 0&&(ge=new fp,D[J]=ge),ge.getGripSpace()},this.getHand=function(J){let ge=D[J];return ge===void 0&&(ge=new fp,D[J]=ge),ge.getHandSpace()};function W(J){const ge=L.indexOf(J.inputSource);if(ge===-1)return;const Ae=D[ge];Ae!==void 0&&(Ae.update(J.inputSource,J.frame,m||d),Ae.dispatchEvent({type:J.type,data:J.inputSource}))}function j(){l.removeEventListener("select",W),l.removeEventListener("selectstart",W),l.removeEventListener("selectend",W),l.removeEventListener("squeeze",W),l.removeEventListener("squeezestart",W),l.removeEventListener("squeezeend",W),l.removeEventListener("end",j),l.removeEventListener("inputsourceschange",se);for(let J=0;J<D.length;J++){const ge=L[J];ge!==null&&(L[J]=null,D[J].disconnect(ge))}Q=null,k=null,b.reset();for(const J in S)delete S[J];if(t.setRenderTarget(I),E=null,v=null,x=null,l=null,N=null,Re.stop(),r.isPresenting=!1,t.setPixelRatio(A),t.setSize(O.width,O.height,!1),P!==null){const J=P.camera;J.fov=P.fov,J.zoom=P.zoom,J.updateProjectionMatrix(),P=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){u=J,r.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){h=J,r.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(J){m=J},this.getBaseLayer=function(){return v!==null?v:E},this.getBinding=function(){return x===null&&C&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(J){if(l=J,l!==null){if(I=t.getRenderTarget(),l.addEventListener("select",W),l.addEventListener("selectstart",W),l.addEventListener("selectend",W),l.addEventListener("squeeze",W),l.addEventListener("squeezestart",W),l.addEventListener("squeezeend",W),l.addEventListener("end",j),l.addEventListener("inputsourceschange",se),U.xrCompatible!==!0&&await i.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(O),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,Ie=null,ye=null;U.depth&&(ye=U.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ae=U.stencil?ls:Xa,Ie=U.stencil?Hl:ha);const Ce={colorFormat:i.RGBA8,depthFormat:ye,scaleFactor:u};x=this.getBinding(),v=x.createProjectionLayer(Ce),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),N=new Vi(v.textureWidth,v.textureHeight,{format:Hi,type:Ri,depthTexture:new Gl(v.textureWidth,v.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:U.stencil,colorSpace:t.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}else{const Ae={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:u};E=new XRWebGLLayer(l,i,Ae),l.updateRenderState({baseLayer:E}),t.setPixelRatio(1),t.setSize(E.framebufferWidth,E.framebufferHeight,!1),N=new Vi(E.framebufferWidth,E.framebufferHeight,{format:Hi,type:Ri,colorSpace:t.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1,storeMultisampledDepthBuffer:E.ignoreDepthValues===!1,storeMultisampledStencilBuffer:E.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await l.requestReferenceSpace(h),Re.setContext(l),Re.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function se(J){for(let ge=0;ge<J.removed.length;ge++){const Ae=J.removed[ge],Ie=L.indexOf(Ae);Ie>=0&&(L[Ie]=null,D[Ie].disconnect(Ae))}for(let ge=0;ge<J.added.length;ge++){const Ae=J.added[ge];let Ie=L.indexOf(Ae);if(Ie===-1){for(let Ce=0;Ce<D.length;Ce++)if(Ce>=L.length){L.push(Ae),Ie=Ce;break}else if(L[Ce]===null){L[Ce]=Ae,Ie=Ce;break}if(Ie===-1)break}const ye=D[Ie];ye&&ye.connect(Ae)}}const ae=new me,he=new me;function pe(J,ge,Ae){ae.setFromMatrixPosition(ge.matrixWorld),he.setFromMatrixPosition(Ae.matrixWorld);const Ie=ae.distanceTo(he),ye=ge.projectionMatrix.elements,Ce=Ae.projectionMatrix.elements,kt=ye[14]/(ye[10]-1),mt=ye[14]/(ye[10]+1),xt=(ye[9]+1)/ye[5],St=(ye[9]-1)/ye[5],nt=(ye[8]-1)/ye[0],at=(Ce[8]+1)/Ce[0],jt=kt*nt,mn=kt*at,Ot=Ie/(-nt+at),nn=Ot*-nt;if(ge.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(nn),J.translateZ(Ot),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),ye[10]===-1)J.projectionMatrix.copy(ge.projectionMatrix),J.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const q=kt+Ot,rn=mt+Ot,Pt=jt-nn,F=mn+(Ie-nn),M=xt*mt/rn*q,te=St*mt/rn*q;J.projectionMatrix.makePerspective(Pt,F,M,te,q,rn),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ze(J,ge){ge===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ge.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(l===null)return;let ge=J.near,Ae=J.far;b.texture!==null&&(b.depthNear>0&&(ge=b.depthNear),b.depthFar>0&&(Ae=b.depthFar)),ce.near=Y.near=V.near=ge,ce.far=Y.far=V.far=Ae,(Q!==ce.near||k!==ce.far)&&(l.updateRenderState({depthNear:ce.near,depthFar:ce.far}),Q=ce.near,k=ce.far),ce.layers.mask=J.layers.mask|6,V.layers.mask=ce.layers.mask&-5,Y.layers.mask=ce.layers.mask&-3;const Ie=J.parent,ye=ce.cameras;ze(ce,Ie);for(let Ce=0;Ce<ye.length;Ce++)ze(ye[Ce],Ie);ye.length===2?pe(ce,V,Y):ce.projectionMatrix.copy(V.projectionMatrix),P===null&&J.isPerspectiveCamera&&(P={camera:J,fov:J.fov,zoom:J.zoom}),qe(J,ce,Ie)};function qe(J,ge,Ae){Ae===null?J.matrix.copy(ge.matrixWorld):(J.matrix.copy(Ae.matrixWorld),J.matrix.invert(),J.matrix.multiply(ge.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ge.projectionMatrix),J.projectionMatrixInverse.copy(ge.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Mm*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return ce},this.getFoveation=function(){if(!(v===null&&E===null))return p},this.setFoveation=function(J){p=J,v!==null&&(v.fixedFoveation=J),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=J)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(ce)},this.getCameraTexture=function(J){return S[J]};let z=null;function ve(J,ge){if(_=ge.getViewerPose(m||d),T=ge,_!==null){const Ae=_.views;E!==null&&(t.setRenderTargetFramebuffer(N,E.framebuffer),t.setRenderTarget(N));let Ie=!1;Ae.length!==ce.cameras.length&&(ce.cameras.length=0,Ie=!0);for(let mt=0;mt<Ae.length;mt++){const xt=Ae[mt];let St=null;if(E!==null)St=E.getViewport(xt);else{const at=x.getViewSubImage(v,xt);St=at.viewport,mt===0&&(t.setRenderTargetTextures(N,at.colorTexture,at.depthStencilTexture),t.setRenderTarget(N))}let nt=ne[mt];nt===void 0&&(nt=new wi,nt.layers.enable(mt),nt.viewport=new dn,ne[mt]=nt),nt.matrix.fromArray(xt.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(xt.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(St.x,St.y,St.width,St.height),mt===0&&(ce.matrix.copy(nt.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale)),Ie===!0&&ce.cameras.push(nt)}const ye=l.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){x=r.getBinding();const mt=x.getDepthInformation(Ae[0]);mt&&mt.isValid&&mt.texture&&b.init(mt,l.renderState)}if(ye&&ye.includes("camera-access")&&C){t.state.unbindTexture(),x=r.getBinding();for(let mt=0;mt<Ae.length;mt++){const xt=Ae[mt].camera;if(xt){let St=S[xt];St||(St=new RS,S[xt]=St);const nt=x.getCameraImage(xt);St.sourceTexture=nt}}}}for(let Ae=0;Ae<D.length;Ae++){const Ie=L[Ae],ye=D[Ae];Ie!==null&&ye!==void 0&&ye.update(Ie,ge,m||d)}z&&z(J,ge),ge.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ge}),T=null}const Re=new US;Re.setAnimationLoop(ve),this.setAnimationLoop=function(J){z=J},this.dispose=function(){}}}const IN=new pn,zS=new dt;zS.set(-1,0,0,0,1,0,0,0,1);function zN(s,t){function i(b,S){b.matrixAutoUpdate===!0&&b.updateMatrix(),S.value.copy(b.matrix)}function r(b,S){S.color.getRGB(b.fogColor.value,CS(s)),S.isFog?(b.fogNear.value=S.near,b.fogFar.value=S.far):S.isFogExp2&&(b.fogDensity.value=S.density)}function l(b,S,U,I,N){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?u(b,S):S.isMeshLambertMaterial?(u(b,S),S.envMap&&(b.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(u(b,S),x(b,S)):S.isMeshPhongMaterial?(u(b,S),_(b,S),S.envMap&&(b.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(u(b,S),v(b,S),S.isMeshPhysicalMaterial&&E(b,S,N)):S.isMeshMatcapMaterial?(u(b,S),T(b,S)):S.isMeshDepthMaterial?u(b,S):S.isMeshDistanceMaterial?(u(b,S),C(b,S)):S.isMeshNormalMaterial?u(b,S):S.isLineBasicMaterial?(d(b,S),S.isLineDashedMaterial&&h(b,S)):S.isPointsMaterial?p(b,S,U,I):S.isSpriteMaterial?m(b,S):S.isShadowMaterial?(b.color.value.copy(S.color),b.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function u(b,S){b.opacity.value=S.opacity,S.color&&b.diffuse.value.copy(S.color),S.emissive&&b.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(b.map.value=S.map,i(S.map,b.mapTransform)),S.alphaMap&&(b.alphaMap.value=S.alphaMap,i(S.alphaMap,b.alphaMapTransform)),S.bumpMap&&(b.bumpMap.value=S.bumpMap,i(S.bumpMap,b.bumpMapTransform),b.bumpScale.value=S.bumpScale,S.side===ei&&(b.bumpScale.value*=-1)),S.normalMap&&(b.normalMap.value=S.normalMap,i(S.normalMap,b.normalMapTransform),b.normalScale.value.copy(S.normalScale),S.side===ei&&b.normalScale.value.negate()),S.displacementMap&&(b.displacementMap.value=S.displacementMap,i(S.displacementMap,b.displacementMapTransform),b.displacementScale.value=S.displacementScale,b.displacementBias.value=S.displacementBias),S.emissiveMap&&(b.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,b.emissiveMapTransform)),S.specularMap&&(b.specularMap.value=S.specularMap,i(S.specularMap,b.specularMapTransform)),S.alphaTest>0&&(b.alphaTest.value=S.alphaTest);const U=t.get(S),I=U.envMap,N=U.envMapRotation;I&&(b.envMap.value=I,b.envMapRotation.value.setFromMatrix4(IN.makeRotationFromEuler(N)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&b.envMapRotation.value.premultiply(zS),b.reflectivity.value=S.reflectivity,b.ior.value=S.ior,b.refractionRatio.value=S.refractionRatio),S.lightMap&&(b.lightMap.value=S.lightMap,b.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,b.lightMapTransform)),S.aoMap&&(b.aoMap.value=S.aoMap,b.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,b.aoMapTransform))}function d(b,S){b.diffuse.value.copy(S.color),b.opacity.value=S.opacity,S.map&&(b.map.value=S.map,i(S.map,b.mapTransform))}function h(b,S){b.dashSize.value=S.dashSize,b.totalSize.value=S.dashSize+S.gapSize,b.scale.value=S.scale}function p(b,S,U,I){b.diffuse.value.copy(S.color),b.opacity.value=S.opacity,b.size.value=S.size*U,b.scale.value=I*.5,S.map&&(b.map.value=S.map,i(S.map,b.uvTransform)),S.alphaMap&&(b.alphaMap.value=S.alphaMap,i(S.alphaMap,b.alphaMapTransform)),S.alphaTest>0&&(b.alphaTest.value=S.alphaTest)}function m(b,S){b.diffuse.value.copy(S.color),b.opacity.value=S.opacity,b.rotation.value=S.rotation,S.map&&(b.map.value=S.map,i(S.map,b.mapTransform)),S.alphaMap&&(b.alphaMap.value=S.alphaMap,i(S.alphaMap,b.alphaMapTransform)),S.alphaTest>0&&(b.alphaTest.value=S.alphaTest)}function _(b,S){b.specular.value.copy(S.specular),b.shininess.value=Math.max(S.shininess,1e-4)}function x(b,S){S.gradientMap&&(b.gradientMap.value=S.gradientMap)}function v(b,S){b.metalness.value=S.metalness,S.metalnessMap&&(b.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,b.metalnessMapTransform)),b.roughness.value=S.roughness,S.roughnessMap&&(b.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,b.roughnessMapTransform)),S.envMap&&(b.envMapIntensity.value=S.envMapIntensity)}function E(b,S,U){b.ior.value=S.ior,S.sheen>0&&(b.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),b.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(b.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,b.sheenColorMapTransform)),S.sheenRoughnessMap&&(b.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,b.sheenRoughnessMapTransform))),S.clearcoat>0&&(b.clearcoat.value=S.clearcoat,b.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(b.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,b.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(b.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===ei&&b.clearcoatNormalScale.value.negate())),S.dispersion>0&&(b.dispersion.value=S.dispersion),S.retroreflectivity>0&&(b.retroreflectivity.value=S.retroreflectivity),S.iridescence>0&&(b.iridescence.value=S.iridescence,b.iridescenceIOR.value=S.iridescenceIOR,b.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(b.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,b.iridescenceMapTransform)),S.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),S.transmission>0&&(b.transmission.value=S.transmission,b.transmissionSamplerMap.value=U.texture,b.transmissionSamplerSize.value.set(U.width,U.height),S.transmissionMap&&(b.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,b.transmissionMapTransform)),b.thickness.value=S.thickness,S.thicknessMap&&(b.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=S.attenuationDistance,b.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(b.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(b.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=S.specularIntensity,b.specularColor.value.copy(S.specularColor),S.specularColorMap&&(b.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,b.specularColorMapTransform)),S.specularIntensityMap&&(b.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,b.specularIntensityMapTransform))}function T(b,S){S.matcap&&(b.matcap.value=S.matcap)}function C(b,S){const U=t.get(S).light;b.referencePosition.value.setFromMatrixPosition(U.matrixWorld),b.nearDistance.value=U.shadow.camera.near,b.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function HN(s,t,i,r){let l={},u={},d=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(N,D){const L=D.program;r.uniformBlockBinding(N,L)}function m(N,D){let L=l[N.id];L===void 0&&(b(N),L=_(N),l[N.id]=L,N.addEventListener("dispose",U));const O=D.program;r.updateUBOMapping(N,O);const A=t.render.frame;u[N.id]!==A&&(v(N),u[N.id]=A)}function _(N){const D=x();N.__bindingPointIndex=D;const L=s.createBuffer(),O=N.__size,A=N.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,O,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,L),L}function x(){for(let N=0;N<h;N++)if(d.indexOf(N)===-1)return d.push(N),N;return Bt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(N){const D=l[N.id],L=N.uniforms,O=N.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let A=0,P=L.length;A<P;A++){const V=L[A];if(Array.isArray(V))for(let Y=0,ne=V.length;Y<ne;Y++)E(V[Y],A,Y,O);else E(V,A,0,O)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function E(N,D,L,O){if(C(N,D,L,O)===!0){const A=N.__offset,P=N.value;if(Array.isArray(P)){let V=0;for(let Y=0;Y<P.length;Y++){const ne=P[Y],ce=S(ne);T(ne,N.__data,V),typeof ne!="number"&&typeof ne!="boolean"&&!ne.isMatrix3&&!ArrayBuffer.isView(ne)&&(V+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(P,N.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,A,N.__data)}}function T(N,D,L){typeof N=="number"||typeof N=="boolean"?D[0]=N:N.isMatrix3?(D[0]=N.elements[0],D[1]=N.elements[1],D[2]=N.elements[2],D[3]=0,D[4]=N.elements[3],D[5]=N.elements[4],D[6]=N.elements[5],D[7]=0,D[8]=N.elements[6],D[9]=N.elements[7],D[10]=N.elements[8],D[11]=0):ArrayBuffer.isView(N)?D.set(new N.constructor(N.buffer,N.byteOffset,D.length)):N.toArray(D,L)}function C(N,D,L,O){const A=N.value,P=D+"_"+L;if(O[P]===void 0)return typeof A=="number"||typeof A=="boolean"?O[P]=A:ArrayBuffer.isView(A)?O[P]=A.slice():O[P]=A.clone(),!0;{const V=O[P];if(typeof A=="number"||typeof A=="boolean"){if(V!==A)return O[P]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(V.equals(A)===!1)return V.copy(A),!0}}return!1}function b(N){const D=N.uniforms;let L=0;const O=16;for(let P=0,V=D.length;P<V;P++){const Y=Array.isArray(D[P])?D[P]:[D[P]];for(let ne=0,ce=Y.length;ne<ce;ne++){const Q=Y[ne],k=Array.isArray(Q.value)?Q.value:[Q.value];for(let W=0,j=k.length;W<j;W++){const se=k[W],ae=S(se),he=L%O,pe=he%ae.boundary,ze=he+pe;L+=pe,ze!==0&&O-ze<ae.storage&&(L+=O-ze),Q.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=L,L+=ae.storage}}}const A=L%O;return A>0&&(L+=O-A),N.__size=L,N.__cache={},this}function S(N){const D={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(D.boundary=4,D.storage=4):N.isVector2?(D.boundary=8,D.storage=8):N.isVector3||N.isColor?(D.boundary=16,D.storage=12):N.isVector4?(D.boundary=16,D.storage=16):N.isMatrix3?(D.boundary=48,D.storage=48):N.isMatrix4?(D.boundary=64,D.storage=64):N.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(N)?(D.boundary=16,D.storage=N.byteLength):ot("WebGLRenderer: Unsupported uniform value type.",N),D}function U(N){const D=N.target;D.removeEventListener("dispose",U);const L=d.indexOf(D.__bindingPointIndex);d.splice(L,1),s.deleteBuffer(l[D.id]),delete l[D.id],delete u[D.id]}function I(){for(const N in l)s.deleteBuffer(l[N]);d=[],l={},u={}}return{bind:p,update:m,dispose:I}}const GN=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let oa=null;function VN(){return oa===null&&(oa=new D2(GN,16,16,fs,pa),oa.name="DFG_LUT",oa.minFilter=Hn,oa.magFilter=Hn,oa.wrapS=Ha,oa.wrapT=Ha,oa.generateMipmaps=!1,oa.needsUpdate=!0),oa}class kN{constructor(t={}){const{canvas:i=s2(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:v=!1,outputBufferType:E=Ri}=t;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=d;const C=E,b=new Set([Xm,jm,km]),S=new Set([Ri,ha,zl,Hl,Gm,Vm]),U=new Uint32Array(4),I=new Int32Array(4),N=new me;let D=null,L=null;const O=[],A=[];let P=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const V=this;let Y=!1,ne=null,ce=null,Q=null,k=null;this._outputColorSpace=Ai;let W=0,j=0,se=null,ae=-1,he=null;const pe=new dn,ze=new dn;let qe=null;const z=new Lt(0);let ve=0,Re=i.width,J=i.height,ge=1,Ae=null,Ie=null;const ye=new dn(0,0,Re,J),Ce=new dn(0,0,Re,J);let kt=!1;const mt=new TS;let xt=!1,St=!1;const nt=new pn,at=new me,jt=new dn,mn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ot=!1;function nn(){return se===null?ge:1}let q=r;function rn(w,H){return i.getContext(w,H)}let Pt,F,M,te,ue,xe,we,Ue,_e,Me,De,et,Be,Oe,Xe,it,ct,X,Ne,Ee,Le,je,Te;try{const w={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${zm}`),i.addEventListener("webglcontextlost",Ct,!1),i.addEventListener("webglcontextrestored",ut,!1),i.addEventListener("webglcontextcreationerror",ni,!1),q===null){const H="webgl2";if(q=rn(H,w),q===null)throw rn(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$e()}catch(w){throw i.removeEventListener("webglcontextlost",Ct,!1),i.removeEventListener("webglcontextrestored",ut,!1),i.removeEventListener("webglcontextcreationerror",ni,!1),Bt("WebGLRenderer: "+w.message),w}function $e(){Pt=new VR(q),Pt.init(),Le=new LN(q,Pt),F=new UR(q,Pt,t,Le),M=new DN(q,Pt),F.reversedDepthBuffer&&v&&M.buffers.depth.setReversed(!0),ce=q.createFramebuffer(),Q=q.createFramebuffer(),k=q.createFramebuffer(),te=new XR(q),ue=new xN,xe=new UN(q,Pt,M,ue,F,Le,te),we=new GR(V),Ue=new q2(q),je=new NR(q,Ue),_e=new kR(q,Ue,te,je),Me=new qR(q,_e,Ue,je,te),X=new WR(q,F,xe),Xe=new LR(ue),De=new gN(V,we,Pt,F,je,Xe),et=new zN(V,ue),Be=new _N,Oe=new TN(Pt),ct=new CR(V,we,M,Me,T,p),it=new NN(V,Me,F),Te=new HN(q,te,F,M),Ne=new DR(q,Pt,te),Ee=new jR(q,Pt,te),te.programs=De.programs,V.capabilities=F,V.extensions=Pt,V.properties=ue,V.renderLists=Be,V.shadowMap=it,V.state=M,V.info=te}C!==Ri&&(P=new ZR(C,i.width,i.height,h,l,u));const ke=new BN(V,q);this.xr=ke,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const w=Pt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Pt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(w){w!==void 0&&(ge=w,this.setSize(Re,J,!1))},this.getSize=function(w){return w.set(Re,J)},this.setSize=function(w,H,de=!0){if(ke.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}Re=w,J=H,i.width=Math.floor(w*ge),i.height=Math.floor(H*ge),de===!0&&(i.style.width=w+"px",i.style.height=H+"px"),P!==null&&P.setSize(i.width,i.height),this.setViewport(0,0,w,H)},this.getDrawingBufferSize=function(w){return w.set(Re*ge,J*ge).floor()},this.setDrawingBufferSize=function(w,H,de){Re=w,J=H,ge=de,i.width=Math.floor(w*de),i.height=Math.floor(H*de),this.setViewport(0,0,w,H)},this.setEffects=function(w){if(C===Ri){Bt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let H=0;H<w.length;H++)if(w[H].isOutputPass===!0){ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(pe)},this.getViewport=function(w){return w.copy(ye)},this.setViewport=function(w,H,de,re){w.isVector4?ye.set(w.x,w.y,w.z,w.w):ye.set(w,H,de,re),M.viewport(pe.copy(ye).multiplyScalar(ge).round())},this.getScissor=function(w){return w.copy(Ce)},this.setScissor=function(w,H,de,re){w.isVector4?Ce.set(w.x,w.y,w.z,w.w):Ce.set(w,H,de,re),M.scissor(ze.copy(Ce).multiplyScalar(ge).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(w){M.setScissorTest(kt=w)},this.setOpaqueSort=function(w){Ae=w},this.setTransparentSort=function(w){Ie=w},this.getClearColor=function(w){return w.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor(...arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha(...arguments)},this.clear=function(w=!0,H=!0,de=!0){let re=0;if(w){let oe=!1;if(se!==null){const He=se.texture.format;oe=b.has(He)}if(oe){const He=se.texture.type,We=S.has(He),Fe=ct.getClearColor(),Ke=ct.getClearAlpha(),Qe=Fe.r,st=Fe.g,ft=Fe.b;We?(U[0]=Qe,U[1]=st,U[2]=ft,U[3]=Ke,q.clearBufferuiv(q.COLOR,0,U)):(I[0]=Qe,I[1]=st,I[2]=ft,I[3]=Ke,q.clearBufferiv(q.COLOR,0,I))}else re|=q.COLOR_BUFFER_BIT}H&&(re|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),de&&(re|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),re!==0&&q.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),ne=w},this.dispose=function(){i.removeEventListener("webglcontextlost",Ct,!1),i.removeEventListener("webglcontextrestored",ut,!1),i.removeEventListener("webglcontextcreationerror",ni,!1),ct.dispose(),Be.dispose(),Oe.dispose(),ue.dispose(),we.dispose(),Me.dispose(),je.dispose(),Te.dispose(),De.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",Lr),ke.removeEventListener("sessionend",Ka),Wi.stop()};function Ct(w){w.preventDefault(),C_("WebGLRenderer: Context Lost."),Y=!0}function ut(){C_("WebGLRenderer: Context Restored."),Y=!1;const w=te.autoReset,H=it.enabled,de=it.autoUpdate,re=it.needsUpdate,oe=it.type;$e(),te.autoReset=w,it.enabled=H,it.autoUpdate=de,it.needsUpdate=re,it.type=oe}function ni(w){Bt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function pi(w){const H=w.target;H.removeEventListener("dispose",pi),_f(H)}function _f(w){ps(w),ue.remove(w)}function ps(w){const H=ue.get(w).programs;H!==void 0&&(H.forEach(function(de){De.releaseProgram(de)}),w.isShaderMaterial&&De.releaseShaderCache(w))}this.renderBufferDirect=function(w,H,de,re,oe,He){H===null&&(H=mn);const We=oe.isMesh&&oe.matrixWorld.determinantAffine()<0,Fe=Fo(w,H,de,re,oe);M.setMaterial(re,We);let Ke=de.index,Qe=1;if(re.wireframe===!0){if(Ke=_e.getWireframeAttribute(de),Ke===void 0)return;Qe=2}const st=de.drawRange,ft=de.attributes.position;let Ye=st.start*Qe,bt=(st.start+st.count)*Qe;He!==null&&(Ye=Math.max(Ye,He.start*Qe),bt=Math.min(bt,(He.start+He.count)*Qe)),Ke!==null?(Ye=Math.max(Ye,0),bt=Math.min(bt,Ke.count)):ft!=null&&(Ye=Math.max(Ye,0),bt=Math.min(bt,ft.count));const vt=bt-Ye;if(vt<0||vt===1/0)return;je.setup(oe,re,Fe,de,Ke);let Kt,Gt=Ne;if(Ke!==null&&(Kt=Ue.get(Ke),Gt=Ee,Gt.setIndex(Kt)),oe.isMesh)re.wireframe===!0?(M.setLineWidth(re.wireframeLinewidth*nn()),Gt.setMode(q.LINES)):Gt.setMode(q.TRIANGLES);else if(oe.isLine){let Sn=re.linewidth;Sn===void 0&&(Sn=1),M.setLineWidth(Sn*nn()),oe.isLineSegments?Gt.setMode(q.LINES):oe.isLineLoop?Gt.setMode(q.LINE_LOOP):Gt.setMode(q.LINE_STRIP)}else oe.isPoints?Gt.setMode(q.POINTS):oe.isSprite&&Gt.setMode(q.TRIANGLES);if(oe.isBatchedMesh)if(Pt.get("WEBGL_multi_draw"))Gt.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else{const Sn=oe._multiDrawStarts,Ge=oe._multiDrawCounts,ln=oe._multiDrawCount,Nt=Ke?Ue.get(Ke).bytesPerElement:1,Vn=ue.get(re).currentProgram.getUniforms();for(let ii=0;ii<ln;ii++)Vn.setValue(q,"_gl_DrawID",ii),Gt.render(Sn[ii]/Nt,Ge[ii])}else if(oe.isInstancedMesh)Gt.renderInstances(Ye,vt,oe.count);else if(de.isInstancedBufferGeometry){const Sn=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,Ge=Math.min(de.instanceCount,Sn);Gt.renderInstances(Ye,vt,Ge)}else Gt.render(Ye,vt)};function Ur(w,H,de,re){ne!==null&&w.isNodeMaterial&&ne.setObject(re,w),xt===!0&&Xe.setState(w,de,!1),w.transparent===!0&&w.side===za&&w.forceSinglePass===!1?(w.side=ei,w.needsUpdate=!0,Fr(w,H,re),w.side=cs,w.needsUpdate=!0,Fr(w,H,re),w.side=za):Fr(w,H,re)}this.compile=function(w,H,de=null){de===null&&(de=w),ne!==null&&ne.renderStart(w,H,de),L=Oe.get(de),L.init(H),A.push(L),de.traverseVisible(function(oe){oe.isLight&&oe.layers.test(H.layers)&&(L.pushLight(oe),oe.castShadow&&L.pushShadow(oe))}),w!==de&&w.traverseVisible(function(oe){oe.isLight&&oe.layers.test(H.layers)&&(L.pushLight(oe),oe.castShadow&&L.pushShadow(oe))}),L.setupLights(),ne!==null&&ne.updateLights(L.state.lightsArray),St=this.localClippingEnabled,xt=Xe.init(this.clippingPlanes,St),xt===!0&&Xe.setGlobalState(this.clippingPlanes,H),ne!==null&&it.render(L.state.shadowsArray,de,H);const re=new Set;return w.traverse(function(oe){if(!(oe.isMesh||oe.isPoints||oe.isLine||oe.isSprite))return;const He=oe.material;if(He)if(Array.isArray(He))for(let We=0;We<He.length;We++){const Fe=He[We];Ur(Fe,de,H,oe),re.add(Fe)}else Ur(He,de,H,oe),re.add(He)}),L=A.pop(),ne!==null&&ne.renderEnd(),re},this.compileAsync=function(w,H,de=null){const re=this.compile(w,H,de);return new Promise(oe=>{function He(){if(re.forEach(function(We){const Ke=ue.get(We).currentProgram;(Ke===void 0||Ke.isReady())&&re.delete(We)}),re.size===0){oe(w);return}setTimeout(He,10)}Pt.get("KHR_parallel_shader_compile")!==null?He():setTimeout(He,10)})};let Za=null;function va(w){Za&&Za(w)}function Lr(){Wi.stop()}function Ka(){Wi.start()}const Wi=new US;Wi.setAnimationLoop(va),typeof self<"u"&&Wi.setContext(self),this.setAnimationLoop=function(w){Za=w,ke.setAnimationLoop(w),w===null?Wi.stop():Wi.start()},ke.addEventListener("sessionstart",Lr),ke.addEventListener("sessionend",Ka),this.render=function(w,H){if(H!==void 0&&H.isCamera!==!0){Bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;ne!==null&&ne.renderStart(w,H);const de=ke.enabled===!0&&ke.isPresenting===!0,re=P!==null&&(se===null||de)&&P.begin(V,se);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(H),H=ke.getCamera()),w.isScene===!0&&w.onBeforeRender(V,w,H,se),L=Oe.get(w,A.length),L.init(H),L.state.textureUnits=xe.getTextureUnits(),A.push(L),nt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),mt.setFromProjectionMatrix(nt,ua,H.reversedDepth),St=this.localClippingEnabled,xt=Xe.init(this.clippingPlanes,St),D=Be.get(w,O.length),D.init(),O.push(D),ke.enabled===!0&&ke.isPresenting===!0){const We=V.xr.getDepthSensingMesh();We!==null&&Co(We,H,-1/0,V.sortObjects)}Co(w,H,0,V.sortObjects),D.finish(),ne!==null&&ne.updateLights(L.state.lightsArray),V.sortObjects===!0&&D.sort(Ae,Ie),Ot=ke.enabled===!1||ke.isPresenting===!1||ke.hasDepthSensing()===!1,Ot&&ct.addToRenderList(D,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),xt===!0&&Xe.beginShadows();const oe=L.state.shadowsArray;if(it.render(oe,w,H),xt===!0&&Xe.endShadows(),(re&&P.hasRenderPass())===!1){const We=D.opaque,Fe=D.transmissive;if(L.setupLights(),H.isArrayCamera){const Ke=H.cameras;if(Fe.length>0)for(let Qe=0,st=Ke.length;Qe<st;Qe++){const ft=Ke[Qe];ms(We,Fe,w,ft)}Ot&&ct.render(w);for(let Qe=0,st=Ke.length;Qe<st;Qe++){const ft=Ke[Qe];No(D,w,ft,ft.viewport)}}else Fe.length>0&&ms(We,Fe,w,H),Ot&&ct.render(w),No(D,w,H)}se!==null&&j===0&&(xe.updateMultisampleRenderTarget(se),xe.updateRenderTargetMipmap(se)),re&&P.end(V),w.isScene===!0&&w.onAfterRender(V,w,H),je.resetDefaultState(),ae=-1,he=null,A.pop(),A.length>0?(L=A[A.length-1],xe.setTextureUnits(L.state.textureUnits),xt===!0&&Xe.setGlobalState(V.clippingPlanes,L.state.camera)):L=null,O.pop(),O.length>0?D=O[O.length-1]:D=null,ne!==null&&ne.renderEnd()};function Co(w,H,de,re){if(w.visible===!1)return;if(w.layers.test(H.layers)){if(w.isGroup)de=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(H);else if(w.isLightProbeGrid)L.pushLightProbeGrid(w);else if(w.isLight)L.pushLight(w),w.castShadow&&L.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(mt)){re&&jt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(nt);const We=Me.update(w),Fe=w.material;Fe.visible&&D.push(w,We,Fe,de,jt.z,null,H)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(mt))){const We=Me.update(w),Fe=w.material;if(re&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),jt.copy(w.boundingSphere.center)):(We.boundingSphere===null&&We.computeBoundingSphere(),jt.copy(We.boundingSphere.center)),jt.applyMatrix4(w.matrixWorld).applyMatrix4(nt)),Array.isArray(Fe)){const Ke=We.groups;for(let Qe=0,st=Ke.length;Qe<st;Qe++){const ft=Ke[Qe],Ye=Fe[ft.materialIndex];Ye&&Ye.visible&&D.push(w,We,Ye,de,jt.z,ft,H)}}else Fe.visible&&D.push(w,We,Fe,de,jt.z,null,H)}}const He=w.children;for(let We=0,Fe=He.length;We<Fe;We++)Co(He[We],H,de,re)}function No(w,H,de,re){const{opaque:oe,transmissive:He,transparent:We}=w;L.setupLightsView(de),xt===!0&&Xe.setGlobalState(V.clippingPlanes,de),re&&M.viewport(pe.copy(re)),oe.length>0&&qi(oe,H,de),He.length>0&&qi(He,H,de),We.length>0&&qi(We,H,de),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function ms(w,H,de,re){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[re.id]===void 0){const Ye=Pt.has("EXT_color_buffer_half_float")||Pt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[re.id]=new Vi(1,1,{generateMipmaps:!0,type:Ye?pa:Ri,minFilter:os,samples:Math.max(4,F.samples),stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Dt.workingColorSpace})}const He=L.state.transmissionRenderTarget[re.id],We=re.viewport||pe;He.setSize(We.z*V.transmissionResolutionScale,We.w*V.transmissionResolutionScale);const Fe=V.getRenderTarget(),Ke=V.getActiveCubeFace(),Qe=V.getActiveMipmapLevel();V.setRenderTarget(He),V.getClearColor(z),ve=V.getClearAlpha(),ve<1&&V.setClearColor(16777215,.5),V.clear(),Ot&&ct.render(de);const st=V.toneMapping;V.toneMapping=fa;const ft=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),L.setupLightsView(re),xt===!0&&Xe.setGlobalState(V.clippingPlanes,re),qi(w,de,re),xe.updateMultisampleRenderTarget(He),xe.updateRenderTargetMipmap(He),Pt.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let bt=0,vt=H.length;bt<vt;bt++){const Kt=H[bt],{object:Gt,geometry:Sn,material:Ge,group:ln}=Kt;if(Ge.side===za&&Gt.layers.test(re.layers)){const Nt=Ge.side;Ge.side=ei,Ge.needsUpdate=!0,Zl(Gt,de,re,Sn,Ge,ln),Ge.side=Nt,Ge.needsUpdate=!0,Ye=!0}}Ye===!0&&(xe.updateMultisampleRenderTarget(He),xe.updateRenderTargetMipmap(He))}V.setRenderTarget(Fe,Ke,Qe),V.setClearColor(z,ve),ft!==void 0&&(re.viewport=ft),V.toneMapping=st}function qi(w,H,de){const re=H.isScene===!0?H.overrideMaterial:null;for(let oe=0,He=w.length;oe<He;oe++){const We=w[oe],{object:Fe,geometry:Ke,group:Qe}=We;let st=We.material;st.allowOverride===!0&&re!==null&&(st=re),Fe.layers.test(de.layers)&&Zl(Fe,H,de,Ke,st,Qe)}}function Zl(w,H,de,re,oe,He){ne!==null&&oe.isNodeMaterial&&ne.setObject(w,oe),w.onBeforeRender(V,H,de,re,oe,He),w.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),oe.onBeforeRender(V,H,de,re,w,He),oe.transparent===!0&&oe.side===za&&oe.forceSinglePass===!1?(oe.side=ei,oe.needsUpdate=!0,V.renderBufferDirect(de,H,re,oe,w,He),oe.side=cs,oe.needsUpdate=!0,V.renderBufferDirect(de,H,re,oe,w,He),oe.side=za):V.renderBufferDirect(de,H,re,oe,w,He),w.onAfterRender(V,H,de,re,oe,He)}function Fr(w,H,de){H.isScene!==!0&&(H=mn);const re=ue.get(w),oe=L.state.lights,He=L.state.shadowsArray,We=oe.state.version,Fe=De.getParameters(w,oe.state,He,H,de,L.state.lightProbeGridArray),Ke=De.getProgramCacheKey(Fe);let Qe=re.programs;re.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?H.environment:null,re.fog=H.fog;const st=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;re.envMap=we.get(w.envMap||re.environment,st),re.envMapRotation=re.environment!==null&&w.envMap===null?H.environmentRotation:w.envMapRotation,Qe===void 0&&(w.addEventListener("dispose",pi),Qe=new Map,re.programs=Qe);let ft=Qe.get(Ke);if(ft!==void 0){if(re.currentProgram===ft&&re.lightsStateVersion===We)return Uo(w,Fe),ft}else Fe.uniforms=De.getUniforms(w),ne!==null&&w.isNodeMaterial&&ne.build(w,de,Fe),w.onBeforeCompile(Fe,V),ft=De.acquireProgram(Fe,Ke),Qe.set(Ke,ft),re.uniforms=Fe.uniforms;const Ye=re.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ye.clippingPlanes=Xe.uniform),Uo(w,Fe),re.needsLights=Ql(w),re.lightsStateVersion=We,re.needsLights&&(Ye.ambientLightColor.value=oe.state.ambient,Ye.lightProbe.value=oe.state.probe,Ye.sunLights.value=oe.state.sun,Ye.sunLightShadows.value=oe.state.sunShadow,Ye.directionalLights.value=oe.state.directional,Ye.directionalLightShadows.value=oe.state.directionalShadow,Ye.spotLights.value=oe.state.spot,Ye.spotLightShadows.value=oe.state.spotShadow,Ye.rectAreaLights.value=oe.state.rectArea,Ye.ltc_1.value=oe.state.rectAreaLTC1,Ye.ltc_2.value=oe.state.rectAreaLTC2,Ye.pointLights.value=oe.state.point,Ye.pointLightShadows.value=oe.state.pointShadow,Ye.hemisphereLights.value=oe.state.hemi,Ye.sunShadowMatrix.value=oe.state.sunShadowMatrix,Ye.sunShadowCascade.value=oe.state.sunShadowCascade,Ye.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,Ye.spotLightMatrix.value=oe.state.spotLightMatrix,Ye.spotLightMap.value=oe.state.spotLightMap,Ye.pointShadowMatrix.value=oe.state.pointShadowMatrix),re.lightProbeGrid=L.state.lightProbeGridArray.length>0,re.currentProgram=ft,re.uniformsList=null,ft}function Do(w){if(w.uniformsList===null){const H=w.currentProgram.getUniforms();w.uniformsList=Qu.seqWithValue(H.seq,w.uniforms)}return w.uniformsList}function Uo(w,H){const de=ue.get(w);de.outputColorSpace=H.outputColorSpace,de.batching=H.batching,de.batchingColor=H.batchingColor,de.instancing=H.instancing,de.instancingColor=H.instancingColor,de.instancingMorph=H.instancingMorph,de.skinning=H.skinning,de.morphTargets=H.morphTargets,de.morphNormals=H.morphNormals,de.morphColors=H.morphColors,de.morphTargetsCount=H.morphTargetsCount,de.numClippingPlanes=H.numClippingPlanes,de.numIntersection=H.numClipIntersection,de.vertexAlphas=H.vertexAlphas,de.vertexTangents=H.vertexTangents,de.toneMapping=H.toneMapping}function Lo(w,H){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;N.setFromMatrixPosition(H.matrixWorld);for(let de=0,re=w.length;de<re;de++){const oe=w[de];if(oe.texture!==null&&oe.boundingBox.containsPoint(N))return oe}return null}function Fo(w,H,de,re,oe){H.isScene!==!0&&(H=mn),xe.resetTextureUnits();const He=H.fog,We=re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial?H.environment:null,Fe=se===null?V.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Dt.workingColorSpace,Ke=re.isMeshStandardMaterial||re.isMeshLambertMaterial&&!re.envMap||re.isMeshPhongMaterial&&!re.envMap,Qe=we.get(re.envMap||We,Ke),st=re.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,ft=!!de.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Ye=!!de.morphAttributes.position,bt=!!de.morphAttributes.normal,vt=!!de.morphAttributes.color;let Kt=fa;re.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Kt=V.toneMapping);const Gt=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,Sn=Gt!==void 0?Gt.length:0,Ge=ue.get(re),ln=L.state.lights;if(xt===!0&&(St===!0||w!==he)){const At=w===he&&re.id===ae;Xe.setState(re,w,At)}let Nt=!1;re.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==ln.state.version||Ge.outputColorSpace!==Fe||oe.isBatchedMesh&&Ge.batching===!1||!oe.isBatchedMesh&&Ge.batching===!0||oe.isBatchedMesh&&Ge.batchingColor===!0&&oe._colorsTexture===null||oe.isBatchedMesh&&Ge.batchingColor===!1&&oe._colorsTexture!==null||oe.isInstancedMesh&&Ge.instancing===!1||!oe.isInstancedMesh&&Ge.instancing===!0||oe.isSkinnedMesh&&Ge.skinning===!1||!oe.isSkinnedMesh&&Ge.skinning===!0||oe.isInstancedMesh&&Ge.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&Ge.instancingColor===!1&&oe.instanceColor!==null||oe.isInstancedMesh&&Ge.instancingMorph===!0&&oe.morphTexture===null||oe.isInstancedMesh&&Ge.instancingMorph===!1&&oe.morphTexture!==null||Ge.envMap!==Qe||re.fog===!0&&Ge.fog!==He||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Xe.numPlanes||Ge.numIntersection!==Xe.numIntersection)||Ge.vertexAlphas!==st||Ge.vertexTangents!==ft||Ge.morphTargets!==Ye||Ge.morphNormals!==bt||Ge.morphColors!==vt||Ge.toneMapping!==Kt||Ge.morphTargetsCount!==Sn||!!Ge.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(Nt=!0):(Nt=!0,Ge.__version=re.version);let Vn=Ge.currentProgram;Nt===!0&&(Vn=Fr(re,H,oe),ne&&re.isNodeMaterial&&ne.onUpdateProgram(re,Vn,Ge));let ii=!1,Yi=!1,_t=!1;const It=Vn.getUniforms(),$t=Ge.uniforms;if(M.useProgram(Vn.program)&&(ii=!0,Yi=!0,_t=!0),re.id!==ae&&(ae=re.id,Yi=!0),Ge.needsLights){const At=Lo(L.state.lightProbeGridArray,oe);Ge.lightProbeGrid!==At&&(Ge.lightProbeGrid=At,Yi=!0)}if(ii||he!==w){M.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),It.setValue(q,"projectionMatrix",w.projectionMatrix),It.setValue(q,"viewMatrix",w.matrixWorldInverse);const cn=It.map.cameraPosition;cn!==void 0&&cn.setValue(q,at.setFromMatrixPosition(w.matrixWorld)),F.logarithmicDepthBuffer&&It.setValue(q,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&It.setValue(q,"isOrthographic",w.isOrthographicCamera===!0),he!==w&&(he=w,Yi=!0,_t=!0)}if(Ge.needsLights&&(ln.state.sunShadowMap.length>0&&It.setValue(q,"sunShadowMap",ln.state.sunShadowMap,xe),ln.state.directionalShadowMap.length>0&&It.setValue(q,"directionalShadowMap",ln.state.directionalShadowMap,xe),ln.state.spotShadowMap.length>0&&It.setValue(q,"spotShadowMap",ln.state.spotShadowMap,xe),ln.state.pointShadowMap.length>0&&It.setValue(q,"pointShadowMap",ln.state.pointShadowMap,xe)),oe.isSkinnedMesh){It.setOptional(q,oe,"bindMatrix"),It.setOptional(q,oe,"bindMatrixInverse");const At=oe.skeleton;At&&(At.boneTexture===null&&At.computeBoneTexture(),It.setValue(q,"boneTexture",At.boneTexture,xe))}oe.isBatchedMesh&&(It.setOptional(q,oe,"batchingTexture"),It.setValue(q,"batchingTexture",oe._matricesTexture,xe),It.setOptional(q,oe,"batchingIdTexture"),It.setValue(q,"batchingIdTexture",oe._indirectTexture,xe),It.setOptional(q,oe,"batchingColorTexture"),oe._colorsTexture!==null&&It.setValue(q,"batchingColorTexture",oe._colorsTexture,xe));const ai=de.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&X.update(oe,de,Vn),(Yi||Ge.receiveShadow!==oe.receiveShadow)&&(Ge.receiveShadow=oe.receiveShadow,It.setValue(q,"receiveShadow",oe.receiveShadow)),(re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial)&&re.envMap===null&&H.environment!==null&&($t.envMapIntensity.value=H.environmentIntensity),$t.dfgLUT!==void 0&&($t.dfgLUT.value=VN()),Yi){if(It.setValue(q,"toneMappingExposure",V.toneMappingExposure),Ge.needsLights&&Kl($t,_t),He&&re.fog===!0&&et.refreshFogUniforms($t,He),et.refreshMaterialUniforms($t,re,ge,J,L.state.transmissionRenderTarget[w.id]),Ge.needsLights&&Ge.lightProbeGrid){const At=Ge.lightProbeGrid;$t.probesSH.value=At.texture,$t.probesMin.value.copy(At.boundingBox.min),$t.probesMax.value.copy(At.boundingBox.max),$t.probesResolution.value.copy(At.resolution)}Qu.upload(q,Do(Ge),$t,xe)}if(re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Qu.upload(q,Do(Ge),$t,xe),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&It.setValue(q,"center",oe.center),It.setValue(q,"modelViewMatrix",oe.modelViewMatrix),It.setValue(q,"normalMatrix",oe.normalMatrix),It.setValue(q,"modelMatrix",oe.matrixWorld),re.uniformsGroups!==void 0){const At=re.uniformsGroups;for(let cn=0,_a=At.length;cn<_a;cn++){const Jl=At[cn];Te.update(Jl,Vn),Te.bind(Jl,Vn)}}return Vn}function Kl(w,H){w.ambientLightColor.needsUpdate=H,w.lightProbe.needsUpdate=H,w.sunLights.needsUpdate=H,w.sunLightShadows.needsUpdate=H,w.directionalLights.needsUpdate=H,w.directionalLightShadows.needsUpdate=H,w.pointLights.needsUpdate=H,w.pointLightShadows.needsUpdate=H,w.spotLights.needsUpdate=H,w.spotLightShadows.needsUpdate=H,w.rectAreaLights.needsUpdate=H,w.hemisphereLights.needsUpdate=H}function Ql(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(w,H,de){const re=ue.get(w);re.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),ue.get(w.texture).__webglTexture=H,ue.get(w.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:de,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,H){const de=ue.get(w);de.__webglFramebuffer=H,de.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(w,H=0,de=0){se=w,W=H,j=de;let re=null,oe=!1,He=!1;if(w){const Fe=ue.get(w);if(Fe.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(q.FRAMEBUFFER,Fe.__webglFramebuffer),pe.copy(w.viewport),ze.copy(w.scissor),qe=w.scissorTest,M.viewport(pe),M.scissor(ze),M.setScissorTest(qe),ae=-1;return}else if(Fe.__webglFramebuffer===void 0)xe.setupRenderTarget(w);else if(Fe.__hasExternalTextures)xe.rebindTextures(w,ue.get(w.texture).__webglTexture,ue.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const st=w.depthTexture;if(Fe.__boundDepthTexture!==st){if(st!==null&&ue.has(st)&&(w.width!==st.image.width||w.height!==st.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");xe.setupDepthRenderbuffer(w)}}const Ke=w.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(He=!0);const Qe=ue.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Qe[H])?re=Qe[H][de]:re=Qe[H],oe=!0):w.samples>0&&xe.useMultisampledRTT(w)===!1?re=ue.get(w).__webglMultisampledFramebuffer:Array.isArray(Qe)?re=Qe[de]:re=Qe,pe.copy(w.viewport),ze.copy(w.scissor),qe=w.scissorTest}else pe.copy(ye).multiplyScalar(ge).floor(),ze.copy(Ce).multiplyScalar(ge).floor(),qe=kt;if(de!==0&&(re=ce),M.bindFramebuffer(q.FRAMEBUFFER,re)&&M.drawBuffers(w,re),M.viewport(pe),M.scissor(ze),M.setScissorTest(qe),oe){const Fe=ue.get(w.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+H,Fe.__webglTexture,de)}else if(He){const Fe=H;for(let Ke=0;Ke<w.textures.length;Ke++){const Qe=ue.get(w.textures[Ke]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+Ke,Qe.__webglTexture,de,Fe)}}else if(w!==null&&de!==0){const Fe=ue.get(w.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Fe.__webglTexture,de)}ae=-1};function mi(w){const H=ue.get(w);return(H.__readFormat!==w.format||H.__readType!==w.type)&&(H.__readFormat=w.format,H.__readType=w.type,H.__formatReadable=F.textureFormatReadable(w.format),H.__typeReadable=F.textureTypeReadable(w.type)),H}this.readRenderTargetPixels=function(w,H,de,re,oe,He,We,Fe=0){if(!(w&&w.isWebGLRenderTarget)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=ue.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&We!==void 0&&(Ke=Ke[We]),Ke){M.bindFramebuffer(q.FRAMEBUFFER,Ke);try{const Qe=w.textures[Fe],st=Qe.format,ft=Qe.type;w.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Fe);const Ye=mi(Qe);if(Ye.__formatReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ye.__typeReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=w.width-re&&de>=0&&de<=w.height-oe&&q.readPixels(H,de,re,oe,Le.convert(st),Le.convert(ft),He)}finally{const Qe=se!==null?ue.get(se).__webglFramebuffer:null;M.bindFramebuffer(q.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(w,H,de,re,oe,He,We,Fe=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ke=ue.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&We!==void 0&&(Ke=Ke[We]),Ke)if(H>=0&&H<=w.width-re&&de>=0&&de<=w.height-oe){M.bindFramebuffer(q.FRAMEBUFFER,Ke);const Qe=w.textures[Fe],st=Qe.format,ft=Qe.type;w.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Fe);const Ye=mi(Qe);if(Ye.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ye.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const bt=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,bt),q.bufferData(q.PIXEL_PACK_BUFFER,He.byteLength,q.STREAM_READ),q.readPixels(H,de,re,oe,Le.convert(st),Le.convert(ft),0),q.bindBuffer(q.PIXEL_PACK_BUFFER,null);const vt=se!==null?ue.get(se).__webglFramebuffer:null;M.bindFramebuffer(q.FRAMEBUFFER,vt);const Kt=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await o2(q,Kt,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,bt),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,He),q.bindBuffer(q.PIXEL_PACK_BUFFER,null),q.deleteBuffer(bt),q.deleteSync(Kt),He}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,H=null,de=0){const re=Math.pow(2,-de),oe=Math.floor(w.image.width*re),He=Math.floor(w.image.height*re),We=H!==null?H.x:0,Fe=H!==null?H.y:0;xe.setTexture2D(w,0),q.copyTexSubImage2D(q.TEXTURE_2D,de,0,0,We,Fe,oe,He),M.unbindTexture()},this.copyTextureToTexture=function(w,H,de=null,re=null,oe=0,He=0){let We,Fe,Ke,Qe,st,ft,Ye,bt,vt;const Kt=w.isCompressedTexture?w.mipmaps[He]:w.image;if(de!==null)We=de.max.x-de.min.x,Fe=de.max.y-de.min.y,Ke=de.isBox3?de.max.z-de.min.z:1,Qe=de.min.x,st=de.min.y,ft=de.isBox3?de.min.z:0;else{const $t=Math.pow(2,-oe);We=Math.floor(Kt.width*$t),Fe=Math.floor(Kt.height*$t),w.isDataArrayTexture?Ke=Kt.depth:w.isData3DTexture?Ke=Math.floor(Kt.depth*$t):Ke=1,Qe=0,st=0,ft=0}re!==null?(Ye=re.x,bt=re.y,vt=re.z):(Ye=0,bt=0,vt=0);const Gt=Le.convert(H.format),Sn=Le.convert(H.type);let Ge;H.isData3DTexture?(xe.setTexture3D(H,0),Ge=q.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(xe.setTexture2DArray(H,0),Ge=q.TEXTURE_2D_ARRAY):(xe.setTexture2D(H,0),Ge=q.TEXTURE_2D),M.activeTexture(q.TEXTURE0),M.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,H.flipY),M.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),M.pixelStorei(q.UNPACK_ALIGNMENT,H.unpackAlignment);const ln=M.getParameter(q.UNPACK_ROW_LENGTH),Nt=M.getParameter(q.UNPACK_IMAGE_HEIGHT),Vn=M.getParameter(q.UNPACK_SKIP_PIXELS),ii=M.getParameter(q.UNPACK_SKIP_ROWS),Yi=M.getParameter(q.UNPACK_SKIP_IMAGES);M.pixelStorei(q.UNPACK_ROW_LENGTH,Kt.width),M.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Kt.height),M.pixelStorei(q.UNPACK_SKIP_PIXELS,Qe),M.pixelStorei(q.UNPACK_SKIP_ROWS,st),M.pixelStorei(q.UNPACK_SKIP_IMAGES,ft);const _t=w.isDataArrayTexture||w.isData3DTexture,It=H.isDataArrayTexture||H.isData3DTexture;if(w.isDepthTexture){const $t=ue.get(w),ai=ue.get(H),At=ue.get($t.__renderTarget),cn=ue.get(ai.__renderTarget);M.bindFramebuffer(q.READ_FRAMEBUFFER,At.__webglFramebuffer),M.bindFramebuffer(q.DRAW_FRAMEBUFFER,cn.__webglFramebuffer);for(let _a=0;_a<Ke;_a++)_t&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,ue.get(w).__webglTexture,oe,ft+_a),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,ue.get(H).__webglTexture,He,vt+_a)),q.blitFramebuffer(Qe,st,We,Fe,Ye,bt,We,Fe,q.DEPTH_BUFFER_BIT,q.NEAREST);M.bindFramebuffer(q.READ_FRAMEBUFFER,null),M.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(oe!==0||w.isRenderTargetTexture||ue.has(w)){const $t=ue.get(w),ai=ue.get(H);M.bindFramebuffer(q.READ_FRAMEBUFFER,Q),M.bindFramebuffer(q.DRAW_FRAMEBUFFER,k);for(let At=0;At<Ke;At++)_t?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,$t.__webglTexture,oe,ft+At):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,$t.__webglTexture,oe),It?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,ai.__webglTexture,He,vt+At):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,ai.__webglTexture,He),oe!==0?q.blitFramebuffer(Qe,st,We,Fe,Ye,bt,We,Fe,q.COLOR_BUFFER_BIT,q.NEAREST):It?q.copyTexSubImage3D(Ge,He,Ye,bt,vt+At,Qe,st,We,Fe):q.copyTexSubImage2D(Ge,He,Ye,bt,Qe,st,We,Fe);M.bindFramebuffer(q.READ_FRAMEBUFFER,null),M.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else It?w.isDataTexture||w.isData3DTexture?q.texSubImage3D(Ge,He,Ye,bt,vt,We,Fe,Ke,Gt,Sn,Kt.data):H.isCompressedArrayTexture?q.compressedTexSubImage3D(Ge,He,Ye,bt,vt,We,Fe,Ke,Gt,Kt.data):q.texSubImage3D(Ge,He,Ye,bt,vt,We,Fe,Ke,Gt,Sn,Kt):w.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,He,Ye,bt,We,Fe,Gt,Sn,Kt.data):w.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,He,Ye,bt,Kt.width,Kt.height,Gt,Kt.data):q.texSubImage2D(q.TEXTURE_2D,He,Ye,bt,We,Fe,Gt,Sn,Kt);M.pixelStorei(q.UNPACK_ROW_LENGTH,ln),M.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Nt),M.pixelStorei(q.UNPACK_SKIP_PIXELS,Vn),M.pixelStorei(q.UNPACK_SKIP_ROWS,ii),M.pixelStorei(q.UNPACK_SKIP_IMAGES,Yi),He===0&&H.generateMipmaps&&q.generateMipmap(Ge),M.unbindTexture()},this.initRenderTarget=function(w){ue.get(w).__webglFramebuffer===void 0&&xe.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?xe.setTextureCube(w,0):w.isData3DTexture?xe.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?xe.setTexture2DArray(w,0):xe.setTexture2D(w,0),M.unbindTexture()},this.resetState=function(){W=0,j=0,se=null,M.reset(),je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ua}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Dt._getDrawingBufferColorSpace(t),i.unpackColorSpace=Dt._getUnpackColorSpace()}}const jN=()=>{const s=K.useRef(null);return K.useEffect(()=>{const t=s.current;if(!t)return;const i=new E2;i.fog=new Zm(724500,.0015);const r=new wi(60,window.innerWidth/window.innerHeight,.1,1e3);r.position.z=60;const l=new kN({alpha:!0,antialias:!0});l.setSize(window.innerWidth,window.innerHeight),l.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.appendChild(l.domElement);const u=750,d=new Float32Array(u*3),h=new Float32Array(u*3),p=new Float32Array(u*3),m=new Float32Array(u),_=new Lt(16756768),x=new Lt(16739146),v=new Lt(3900150);for(let k=0;k<u;k++){const W=(Math.random()-.5)*180,j=(Math.random()-.5)*180,se=(Math.random()-.5)*100;d[k*3]=W,d[k*3+1]=j,d[k*3+2]=se,p[k*3]=W,p[k*3+1]=j,p[k*3+2]=se,m[k]=.2+Math.random()*.8;const ae=Math.random(),he=ae>.55?_:ae>.25?x:v;h[k*3]=he.r,h[k*3+1]=he.g,h[k*3+2]=he.b}const E=new Xi;E.setAttribute("position",new ki(d,3)),E.setAttribute("color",new ki(h,3));const T=document.createElement("canvas");T.width=32,T.height=32;const C=T.getContext("2d"),b=C.createRadialGradient(16,16,0,16,16,16);b.addColorStop(0,"rgba(255, 255, 255, 1)"),b.addColorStop(.4,"rgba(255, 255, 255, 0.6)"),b.addColorStop(1,"rgba(255, 255, 255, 0)"),C.fillStyle=b,C.fillRect(0,0,32,32);const S=new F2(T),U=new AS({size:2.2,map:S,transparent:!0,vertexColors:!0,opacity:.65,depthWrite:!1,blending:Ip}),I=new L2(E,U);i.add(I);let N=0,D=0,L=0,O=0;const A=window.innerWidth/2,P=window.innerHeight/2,V=k=>{N=(k.clientX-A)*.001,D=(k.clientY-P)*.001};window.addEventListener("mousemove",V);const Y=()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",Y);let ne=new X2,ce;const Q=()=>{ce=requestAnimationFrame(Q);const k=ne.getElapsedTime(),W=E.attributes.position,j=W.array;for(let se=0;se<u;se++){const ae=se*3,he=se*3+1,pe=se*3+2,ze=p[ae],qe=p[he];j[ae]=ze+Math.sin(k*.5*m[se]+qe*.03)*6,j[he]=qe+Math.cos(k*.4*m[se]+ze*.03)*6,j[pe]=p[pe]+Math.sin(k*.3*m[se]+(ze+qe)*.02)*8}W.needsUpdate=!0,I.rotation.y=k*.02,L+=(N-L)*.05,O+=(D-O)*.05,r.position.x=L*12,r.position.y=-O*12,r.lookAt(i.position),l.render(i,r)};return Q(),()=>{window.removeEventListener("mousemove",V),window.removeEventListener("resize",Y),cancelAnimationFrame(ce),t.contains(l.domElement)&&t.removeChild(l.domElement),E.dispose(),U.dispose(),S.dispose(),l.dispose()}},[]),g.jsx("div",{ref:s,className:"fixed inset-0 pointer-events-none z-0 opacity-40 transition-opacity duration-1000 overflow-hidden","aria-hidden":"true"})},XN=[{id:"usr_poster_1",email:"sarah.lin@hopefoodbank.org",name:"Sarah Lin",role:"poster",bio:"Outreach Director at Hope Valley Food Bank. Connecting surplus food to families.",avatarUrl:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",createdAt:"2026-09-10T08:00:00Z"},{id:"usr_poster_2",email:"marcus@vancewoodworking.com",name:"Marcus Vance",role:"poster",bio:"Independent artisan woodworker running a local custom furniture shop.",avatarUrl:"https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80",createdAt:"2026-09-12T10:30:00Z"},{id:"usr_poster_3",email:"elena@humanesociety.org",name:"Elena Rostova",role:"poster",bio:"Shelter Manager at Eastside Animal Rescue. Helping pets find forever homes.",avatarUrl:"https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",createdAt:"2026-09-14T09:15:00Z"},{id:"usr_builder_1",email:"alex.rivera@university.edu",name:"Alex Rivera",role:"builder",bio:"Computer Science Senior @ State Tech. Passionate about full-stack web apps and social impact.",skills:["React","TypeScript","Node.js","DynamoDB","AWS Lambda"],avatarUrl:"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80",createdAt:"2026-09-11T14:20:00Z"},{id:"usr_builder_2",email:"priya.sharma@state.edu",name:"Priya Sharma",role:"builder",bio:"Frontend & UI/UX Developer focusing on lightweight web applications for small businesses.",skills:["React","TailwindCSS","REST APIs","UI/UX Design"],avatarUrl:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",createdAt:"2026-09-13T11:00:00Z"}],WN=[{id:"prob_101",title:"Food Bank Expiry & Surplus Redistribution Dashboard",description:"Our food bank processes ~2 tons of donated food weekly. Volunteers currently log batch expiration dates on paper whiteboards, leading to accidental food spoilage and missed donation pickups from grocery partners. We need a simple web dashboard where staff can quickly log perishables, get automated 48-hour expiration alerts, and dispatch pickup requests to local partner pantries.",category:"Non-Profit",urgency:"High",whoAffected:"Hope Valley Food Bank staff, 350+ weekly food pantry recipients, and 12 grocery donors.",skillsNeeded:["React","Node.js","Database","Twilio / Email Alerts"],posterId:"usr_poster_1",posterName:"Sarah Lin (Hope Valley Food Bank)",status:"solved",claimedBy:"usr_builder_1",claimedByName:"Alex Rivera",claimedAt:"2026-09-12T09:00:00Z",imageUrl:"https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&auto=format&fit=crop&q=80",createdAt:"2026-09-10T09:30:00Z"},{id:"prob_102",title:"Custom Artisan Furniture Deposit & Invoice Portal",description:"As a solo craftsman, I waste 6+ hours every week texting clients back and forth to confirm custom timber orders, compute material deposits (50%), and email PDF invoices. I need a straightforward portal where clients can review item specs, sign off on deposit terms, and pay/track invoice status without complex ERP software.",category:"Small Business",urgency:"Medium",whoAffected:"Vance Woodworking and 15-20 active custom furniture clients per month.",skillsNeeded:["React","Tailwind","Stripe / Payment API","PDF Generation"],posterId:"usr_poster_2",posterName:"Marcus Vance (Vance Woodworking)",status:"claimed",claimedBy:"usr_builder_2",claimedByName:"Priya Sharma",claimedAt:"2026-09-15T10:00:00Z",imageUrl:"https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800&auto=format&fit=crop&q=80",createdAt:"2026-09-12T11:00:00Z"},{id:"prob_103",title:"Interactive Shelter Pet Personality & Lifestyle Matchmaker",description:"High return rates happen when adopters pick shelter dogs based solely on photos rather than energy level, living space, and family dynamic. We need an interactive 5-question matchmaker quiz that takes potential adopters through lifestyle preferences and filters our current shelter animals by temperament compatibility.",category:"Non-Profit",urgency:"High",whoAffected:"Eastside Animal Rescue, 80+ shelter dogs/cats, and prospective pet adopters.",skillsNeeded:["React","JavaScript","Responsive UI","Filter Logic"],posterId:"usr_poster_3",posterName:"Elena Rostova (Eastside Animal Rescue)",status:"open",imageUrl:"https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=800&auto=format&fit=crop&q=80",createdAt:"2026-09-14T10:00:00Z"},{id:"prob_104",title:"Community Garden Plot Reservation & Watering Schedule App",description:"Our 40-plot neighborhood garden uses a paper sign-up sheet pinned to a wooden post. Neighbors frequently double-book plots or forget their watering rotations. We need a web app where residents can claim available plots, view seasonal planting guides, and receive watering reminders.",category:"Community",urgency:"Medium",whoAffected:"60+ community gardeners in Oakridge neighborhood.",skillsNeeded:["React","Calendar UI","Express / Node.js"],posterId:"usr_poster_1",posterName:"Sarah Lin",status:"solved",claimedBy:"usr_builder_1",claimedByName:"Alex Rivera",claimedAt:"2026-09-14T14:00:00Z",imageUrl:"https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&auto=format&fit=crop&q=80",createdAt:"2026-09-13T16:00:00Z"},{id:"prob_105",title:"Accessible PDF Document Formatter for Special Ed Classrooms",description:"Special Education teachers spend hours formatting lesson worksheets so screen readers can parse headings, tables, and images properly. We need a web tool where teachers upload raw DOCX/PDF files and receive an accessible, screen-reader validated PDF with automatically generated alt-text suggestions.",category:"Education",urgency:"High",whoAffected:"24 Special Education teachers and 140+ visually impaired students across 4 local schools.",skillsNeeded:["TypeScript","PDF Parsing / Accessibility","AI / OpenAI API"],posterId:"usr_poster_3",posterName:"Elena Rostova",status:"open",imageUrl:"https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop&q=80",createdAt:"2026-09-16T12:00:00Z"}],qN=[{id:"log_201",problemId:"prob_101",builderId:"usr_builder_1",builderName:"Alex Rivera",text:"Connected DynamoDB table for inventory tracking and built the real-time food batch expiration countdown widget.",imageUrl:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",createdAt:"2026-09-14T15:30:00Z"},{id:"log_202",problemId:"prob_101",builderId:"usr_builder_1",builderName:"Alex Rivera",text:"Integrated Twilio SMS gateway + AWS SNS to automatically send SMS notifications to 3 partner pantries when perishables hit 48h to expiration.",imageUrl:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",createdAt:"2026-09-16T11:00:00Z"},{id:"log_203",problemId:"prob_102",builderId:"usr_builder_2",builderName:"Priya Sharma",text:"Designed responsive furniture quote builder component with automated 50% deposit breakdown calculations.",imageUrl:"https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80",createdAt:"2026-09-16T16:45:00Z"}],YN=[{id:"prf_301",problemId:"prob_101",builderId:"usr_builder_1",builderName:"Alex Rivera",summary:"Built and deployed a production-ready Food Pantry Expiration & Alert Dashboard on AWS (Vite + DynamoDB + SNS). Hope Valley Food Bank tested it with 45 real batch items; 0 food spoiled this week and 180 lbs of produce were redistributed on time!",demoUrl:"/problems/prob_101",imageUrl:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&auto=format&fit=crop&q=80",status:"validated",posterComment:'Validated by Sarah Lin (Hope Valley Food Bank)! "Alex built exactly what our volunteers needed. The automated 48-hour SMS alerts saved 180 lbs of fresh vegetables from being wasted on day 1. Fantastic job!"',createdAt:"2026-09-17T14:00:00Z",updatedAt:"2026-09-18T09:30:00Z"},{id:"prf_302",problemId:"prob_104",builderId:"usr_builder_1",builderName:"Alex Rivera",summary:"Created Oakridge Garden Plot Booking Web App with interactive grid map, automated watering calendar sync, and SMS reminders.",demoUrl:"/problems/prob_104",imageUrl:"https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1000&auto=format&fit=crop&q=80",status:"validated",posterComment:'Validated by Sarah Lin! "No more double-booked plots or dead tomato plants. The interactive grid map was an instant hit with our neighborhood gardeners."',createdAt:"2026-09-18T10:00:00Z",updatedAt:"2026-09-18T16:20:00Z"}];let Up=[...XN],ss=[...WN],Lp=[...qN],mo=[...YN];const ji={getUserById:s=>Up.find(t=>t.id===s),getUserByEmail:s=>Up.find(t=>t.email.toLowerCase()===s.toLowerCase()),createUser:s=>(Up.push(s),s),getProblems:s=>{let t=[...ss];if(s!=null&&s.category&&s.category!=="All"&&(t=t.filter(i=>i.category===s.category)),s!=null&&s.status&&s.status!=="All"&&(t=t.filter(i=>i.status===s.status)),s!=null&&s.search){const i=s.search.toLowerCase();t=t.filter(r=>r.title.toLowerCase().includes(i)||r.description.toLowerCase().includes(i)||r.whoAffected.toLowerCase().includes(i))}return t.sort((i,r)=>new Date(r.createdAt).getTime()-new Date(i.createdAt).getTime())},getProblemById:s=>ss.find(t=>t.id===s),createProblem:s=>(ss.unshift(s),s),updateProblemStatus:(s,t,i)=>{const r=ss.find(l=>l.id===s);return r?(r.status=t,i&&(r.claimedBy=i.id,r.claimedByName=i.name,r.claimedAt=new Date().toISOString()),r):null},getBuildLogsByProblemId:s=>Lp.filter(t=>t.problemId===s).sort((t,i)=>new Date(i.createdAt).getTime()-new Date(t.createdAt).getTime()),addBuildLog:s=>{Lp.unshift(s);const t=ss.find(i=>i.id===s.problemId);return t&&t.status==="claimed"&&(t.status="in_progress"),s},getProofByProblemId:s=>mo.find(t=>t.problemId===s),submitProof:s=>{const t=mo.findIndex(i=>i.problemId===s.problemId);return t>=0?mo[t]=s:mo.unshift(s),s},validateProof:(s,t,i)=>{const r=mo.find(l=>l.id===s);if(!r)return null;if(r.status=t,r.posterComment=i,r.updatedAt=new Date().toISOString(),t==="validated"){const l=ss.find(u=>u.id===r.problemId);l&&(l.status="solved")}return r},getProofWallItems:()=>{const s=mo.filter(i=>i.status==="validated"),t=[];for(const i of s){const r=ss.find(l=>l.id===i.problemId);if(r){const l=Lp.filter(u=>u.problemId===i.problemId);t.push({problem:r,proof:i,buildLogCount:l.length})}}return t}},qa="/api";async function Ya(s,t={},i=2500){const r=new AbortController,l=setTimeout(()=>r.abort(),i);try{const u=await fetch(s,{...t,signal:r.signal});return clearTimeout(l),u}catch(u){throw clearTimeout(l),u}}async function Km(s){try{const i=new URLSearchParams;s!=null&&s.category&&s.category!=="All"&&i.append("category",s.category),s!=null&&s.status&&s.status!=="All"&&i.append("status",s.status),s!=null&&s.search&&i.append("search",s.search);const r=await Ya(`${qa}/problems?${i.toString()}`);if(r.ok){const l=await r.json();if(Array.isArray(l)&&l.length>0)return l}}catch{}const t=ji.getProblems(s);return t.length===0&&(s==null?void 0:s.status)==="open"?ji.getProblems():t}async function ZN(s){try{const l=await Ya(`${qa}/problems/${s}`);if(l.ok)return await l.json()}catch{}const t=ji.getProblemById(s);if(!t)throw new Error("Problem not found");const i=ji.getBuildLogsByProblemId(s),r=ji.getProofByProblemId(s);return{problem:t,logs:i,proof:r||null}}async function KN(s){try{const i=await Ya(`${qa}/problems`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(i.ok)return await i.json()}catch{}const t={id:`prob_${Date.now()}_${Math.random().toString(36).substr(2,4)}`,...s,status:"open",createdAt:new Date().toISOString()};return ji.createProblem(t)}async function HS(s,t,i){try{const l=await Ya(`${qa}/problems/${s}/claim`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({builderId:t,builderName:i})});if(l.ok)return await l.json()}catch{}const r=ji.updateProblemStatus(s,"claimed",{id:t,name:i});if(!r)throw new Error("Problem not found");return r}async function QN(s,t,i,r,l){try{const d=await Ya(`${qa}/problems/${s}/logs`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({builderId:t,builderName:i,text:r,imageUrl:l})});if(d.ok)return await d.json()}catch{}const u={id:`log_${Date.now()}_${Math.random().toString(36).substr(2,4)}`,problemId:s,builderId:t,builderName:i,text:r,imageUrl:l,createdAt:new Date().toISOString()};return ji.addBuildLog(u)}async function JN(s,t,i,r,l,u){try{const h=await Ya(`${qa}/problems/${s}/proof`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({builderId:t,builderName:i,summary:r,demoUrl:l,imageUrl:u})});if(h.ok)return await h.json()}catch{}const d={id:`prf_${Date.now()}_${Math.random().toString(36).substr(2,4)}`,problemId:s,builderId:t,builderName:i,summary:r,demoUrl:l,imageUrl:u,status:"pending",createdAt:new Date().toISOString()};return ji.submitProof(d)}async function $N(s,t,i){try{const l=await Ya(`${qa}/proofs/${s}/validate`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:t,posterComment:i})});if(l.ok)return await l.json()}catch{}const r=ji.validateProof(s,t,i);if(!r)throw new Error("Proof not found");return r}async function GS(){try{const s=await Ya(`${qa}/wall`);if(s.ok){const t=await s.json();if(Array.isArray(t)&&t.length>0)return t}}catch{}return ji.getProofWallItems()}async function eD(s,t){try{const r=await Ya(`${qa}/storage/upload-url`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:s,contentType:t})});if(r.ok)return await r.json()}catch{}const i=`uploads/${Date.now()}_${s.replace(/[^a-zA-Z0-9.-]/g,"_")}`;return{uploadUrl:`/api/storage/mock-upload?key=${i}`,publicUrl:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&auto=format&fit=crop&q=80",key:i}}const yo=({type:s,value:t})=>{if(s==="problem")switch(t){case"open":return g.jsxs("span",{className:"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold badge-open",children:[g.jsx(Xu,{className:"w-3.5 h-3.5"}),"Open for Claim"]});case"claimed":return g.jsxs("span",{className:"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold badge-claimed",children:[g.jsx(Cn,{className:"w-3.5 h-3.5"}),"Claimed"]});case"in_progress":return g.jsxs("span",{className:"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold badge-in-progress",children:[g.jsx(Xu,{className:"w-3.5 h-3.5"}),"In Progress"]});case"solved":return g.jsxs("span",{className:"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold badge-solved",children:[g.jsx($u,{className:"w-3.5 h-3.5"}),"Validated & Solved"]});default:return null}if(s==="proof")switch(t){case"pending":return g.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-[#FFB020]/15 text-[#FFB020] border border-[#FFB020]/30",children:[g.jsx(Xu,{className:"w-3.5 h-3.5"}),"Pending Review"]});case"validated":return g.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 shadow-sm",children:[g.jsx($u,{className:"w-3.5 h-3.5"}),"Validated Solution"]});case"rejected":return g.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-rose-500/15 text-rose-400 border border-rose-500/30",children:[g.jsx(hA,{className:"w-3.5 h-3.5"}),"Needs Revisions"]});default:return null}if(s==="urgency")switch(t){case"Critical":return g.jsxs("span",{className:"inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg text-xs font-bold bg-rose-500/20 text-rose-400 border border-rose-500/30",children:[g.jsx(Yy,{className:"w-3 h-3"})," Critical"]});case"High":return g.jsxs("span",{className:"inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg text-xs font-semibold bg-orange-500/20 text-orange-400 border border-orange-500/30",children:[g.jsx(cA,{className:"w-3 h-3"})," High Urgency"]});case"Medium":return g.jsx("span",{className:"inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg text-xs font-medium bg-blue-500/15 text-blue-400 border border-blue-500/30",children:"Medium"});default:return g.jsx("span",{className:"inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg text-xs font-medium bg-[#1A1E28] text-[#A8A5A0] border border-[#242834]",children:"Low"})}return null},_y={"Non-Profit":"bg-emerald-500/10 text-emerald-400 border-emerald-500/30","Small Business":"bg-purple-500/10 text-purple-400 border-purple-500/30",Community:"bg-blue-500/10 text-blue-400 border-blue-500/30",Education:"bg-amber-500/10 text-amber-400 border-amber-500/30","Developer Tools":"bg-cyan-500/10 text-cyan-400 border-cyan-500/30",Other:"bg-slate-500/10 text-slate-400 border-slate-500/30"},of=({problem:s,onClaim:t,isBuilder:i,hideSkills:r})=>{const l=_y[s.category]||_y.Other;return g.jsxs("div",{className:"glass-card rounded-2xl p-6 flex flex-col justify-between group hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#FFB020]/10 hover:border-[#FFB020]/40 transition-all duration-300",children:[g.jsxs("div",{children:[g.jsxs("div",{className:"flex items-center justify-between gap-2 mb-3.5",children:[g.jsx("span",{className:`px-2.5 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider border ${l}`,children:s.category}),g.jsxs("div",{className:"flex items-center gap-1.5",children:[g.jsx(yo,{type:"urgency",value:s.urgency}),g.jsx(yo,{type:"problem",value:s.status})]})]}),g.jsx(Zt,{to:`/problems/${s.id}`,children:g.jsx("h3",{className:"font-display text-lg font-bold text-[#F2F0EB] group-hover:text-[#FFB020] transition-colors line-clamp-2 mb-2 leading-snug",children:s.title})}),g.jsxs("div",{className:"flex items-center gap-2 text-xs text-[#A8A5A0] mb-3",children:[g.jsxs("span",{className:"font-semibold text-[#F2F0EB]",children:["Posted by ",s.posterName]}),g.jsx("span",{children:"•"}),g.jsxs("span",{className:"flex items-center gap-1 text-[#A8A5A0] truncate",children:[g.jsx(vA,{className:"w-3.5 h-3.5 text-[#A8A5A0] shrink-0"}),g.jsx("span",{className:"truncate",children:s.whoAffected})]})]}),g.jsx("p",{className:"text-[#A8A5A0] text-sm line-clamp-3 mb-4 leading-relaxed font-normal",children:s.description})]}),g.jsxs("div",{className:"pt-4 border-t border-[#242834] flex items-center justify-between mt-auto",children:[g.jsxs("div",{className:"text-[11px] text-[#6E6B65] flex items-center gap-1",children:[g.jsx(TT,{className:"w-3 h-3"}),new Date(s.createdAt).toLocaleDateString(void 0,{month:"short",day:"numeric"})]}),g.jsxs("div",{className:"flex items-center gap-2",children:[s.status==="open"&&i&&t&&g.jsxs("button",{onClick:()=>t(s.id),className:"px-3.5 py-1.5 rounded-xl text-xs font-bold btn-primary flex items-center gap-1 shadow-sm",children:[g.jsx(Cn,{className:"w-3.5 h-3.5"}),"Claim"]}),g.jsxs(Zt,{to:`/problems/${s.id}`,className:"px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#1A1E28] hover:bg-[#242834] text-[#F2F0EB] flex items-center gap-1 transition-colors border border-[#242834]",children:["Details ",g.jsx(Nr,{className:"w-3.5 h-3.5"})]})]})]})]})},VS=({item:s})=>{const{problem:t,proof:i,buildLogCount:r}=s,[l,u]=K.useState(!1);K.useEffect(()=>(l?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[l]);const d=i.demoUrl&&(i.demoUrl.startsWith("http://")||i.demoUrl.startsWith("https://"))&&!i.demoUrl.includes("proofloop-foodbank-app.com")&&!i.demoUrl.includes("proofloop.dev");return g.jsxs("div",{className:"glass-card rounded-3xl overflow-hidden border border-[#242834] bg-[#12151C] shadow-2xl hover:border-[#FFB020]/40 transition-all duration-300 relative group",children:[g.jsxs("div",{className:"bg-[#1A1E28] px-6 py-3.5 border-b border-[#242834] flex items-center justify-between",children:[g.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-gradient-amber text-[#0B0E14] font-display font-extrabold text-xs shadow-md shadow-[#FFB020]/20",children:[g.jsx(Im,{className:"w-4 h-4 text-[#0B0E14]"}),g.jsx("span",{children:"VALIDATED PROOF OF IMPACT"})]}),g.jsx("span",{className:"px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#12151C] text-[#FFB020] border border-[#242834]",children:t.category})]}),g.jsxs("div",{className:"p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative",children:[g.jsxs("div",{className:"lg:col-span-6 flex flex-col justify-between space-y-6",children:[g.jsxs("div",{className:"space-y-4",children:[g.jsxs("div",{children:[g.jsxs("span",{className:"text-[11px] font-bold uppercase tracking-widest text-[#FF6B4A] flex items-center gap-1.5 mb-1.5",children:[g.jsx("span",{className:"w-2 h-2 rounded-full bg-[#FF6B4A]"})," Real Problem Stated"]}),g.jsx("h2",{className:"font-display text-2xl md:text-3xl font-bold text-[#F2F0EB] tracking-tight leading-snug",children:t.title}),g.jsxs("p",{className:"text-xs text-[#A8A5A0] font-medium mt-1.5",children:["Posted by ",g.jsx("span",{className:"text-[#F2F0EB] font-bold",children:t.posterName})]})]}),g.jsx("div",{className:"p-4 rounded-2xl bg-[#0B0E14] border border-[#242834] leading-relaxed",children:g.jsxs("p",{className:"text-xs text-[#A8A5A0] italic",children:['"',t.description,'"']})}),i.posterComment&&g.jsxs("div",{className:"p-5 rounded-2xl bg-[#1A1E28] border border-[#FFB020]/30 relative shadow-inner",children:[g.jsx(tA,{className:"w-7 h-7 text-[#FFB020]/30 absolute top-4 right-4"}),g.jsx("span",{className:"text-[11px] font-bold uppercase tracking-wider text-[#FFB020] block mb-1",children:"Problem Poster Endorsement"}),g.jsx("p",{className:"text-xs text-[#F2F0EB] font-medium leading-relaxed pr-6",children:i.posterComment})]})]}),g.jsxs("div",{className:"pt-4 border-t border-[#242834] text-[11px] text-[#6E6B65]",children:["Validated on ",new Date(i.updatedAt||i.createdAt).toLocaleDateString(void 0,{month:"long",day:"numeric",year:"numeric"})]})]}),g.jsx("div",{className:"hidden lg:block absolute left-1/2 top-8 bottom-8 w-[1px] -ml-[0.5px] bg-[#242834]"}),g.jsxs("div",{className:"lg:col-span-6 flex flex-col justify-between space-y-6",children:[g.jsxs("div",{className:"space-y-4",children:[g.jsxs("div",{children:[g.jsxs("span",{className:"text-[11px] font-bold uppercase tracking-widest text-[#FFB020] flex items-center gap-1.5 mb-1.5",children:[g.jsx(Cn,{className:"w-4 h-4 text-[#FFB020]"})," Student Solution & Proof"]}),g.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[g.jsx("span",{className:"font-display text-lg font-bold text-[#F2F0EB]",children:i.builderName}),g.jsxs("span",{className:"text-xs px-2.5 py-0.5 rounded-lg bg-[#1A1E28] text-[#FFB020] border border-[#242834] font-medium flex items-center gap-1",children:[g.jsx(Ky,{className:"w-3 h-3 text-[#FFB020]"})," ",r," Build Updates"]})]}),g.jsx("p",{className:"text-[#A8A5A0] text-sm leading-relaxed",children:i.summary})]}),g.jsxs("div",{className:"relative group rounded-2xl overflow-hidden border border-[#242834] bg-[#0B0E14] shadow-md",children:[g.jsx("img",{src:i.imageUrl||t.imageUrl||"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000",alt:"Proof Demonstration",className:"w-full h-56 object-cover object-top group-hover:scale-105 transition-transform duration-500",onError:h=>{h.target.src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000"}}),g.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#0B0E14]/90 via-transparent to-transparent flex flex-col justify-end p-3",children:g.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider text-[#FFB020] bg-[#0B0E14] px-2.5 py-1 rounded-lg w-max border border-[#FFB020]/30",children:"Visual Screenshot Proof"})})]})]}),g.jsx("div",{className:"pt-2 flex flex-wrap gap-2 justify-end",children:d?g.jsxs("a",{href:i.demoUrl,target:"_blank",rel:"noreferrer",className:"px-6 py-3.5 rounded-2xl text-xs font-extrabold btn-primary flex items-center gap-2 shadow-lg shadow-[#FFB020]/20 w-full sm:w-auto justify-center",children:["Launch Working Demo ",g.jsx(Wy,{className:"w-4 h-4"})]}):g.jsxs("div",{className:"flex gap-2 w-full sm:w-auto",children:[g.jsxs("button",{onClick:()=>u(!0),className:"px-5 py-3 rounded-2xl text-xs font-extrabold btn-primary flex items-center gap-2 shadow-lg shadow-[#FFB020]/20 flex-1 sm:flex-none justify-center",children:[g.jsx(qy,{className:"w-4 h-4"})," Launch Interactive Demo"]}),g.jsxs(Zt,{to:`/problems/${t.id}`,className:"px-4 py-3 rounded-2xl text-xs font-bold bg-[#1A1E28] hover:bg-[#242834] text-[#F2F0EB] border border-[#242834] flex items-center gap-1.5 justify-center",children:["Proof Details ",g.jsx(Nr,{className:"w-4 h-4"})]})]})})]})]}),l&&g.jsx("div",{className:"fixed inset-0 z-[999] bg-[#0B0E14] flex items-center justify-center p-4 sm:p-6 overflow-y-auto",children:g.jsxs("div",{className:"bg-[#12151C] border border-[#242834] rounded-3xl w-full max-w-3xl p-6 sm:p-8 relative space-y-6 shadow-2xl my-auto",children:[g.jsx("button",{onClick:()=>u(!1),className:"absolute top-5 right-5 text-[#A8A5A0] hover:text-[#F2F0EB] bg-[#1A1E28] p-2 rounded-xl border border-[#242834]",title:"Close Modal",children:g.jsx(Jy,{className:"w-5 h-5"})}),g.jsxs("div",{className:"space-y-2 pr-8",children:[g.jsxs("span",{className:"px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#FFB020]/15 text-[#FFB020] border border-[#FFB020]/30 inline-flex items-center gap-1.5",children:[g.jsx(Cn,{className:"w-3.5 h-3.5"})," Verified Live Solution Demo"]}),g.jsx("h3",{className:"font-display text-2xl font-extrabold text-[#F2F0EB]",children:t.title}),g.jsxs("p",{className:"text-xs text-[#A8A5A0]",children:["Built by ",g.jsx("span",{className:"text-[#F2F0EB] font-bold",children:i.builderName})," for ",g.jsx("span",{className:"text-[#F2F0EB] font-bold",children:t.posterName})]})]}),g.jsxs("div",{className:"rounded-2xl border border-[#242834] bg-[#0B0E14] p-6 space-y-4",children:[g.jsxs("div",{className:"flex items-center justify-between border-b border-[#242834] pb-3 text-xs",children:[g.jsxs("span",{className:"font-bold text-[#FFB020] flex items-center gap-2",children:[g.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"}),"AWS Application Status: Active"]}),g.jsx("span",{className:"text-[#6E6B65]",children:"AWS Region: us-east-1"})]}),g.jsxs("div",{className:"space-y-3",children:[g.jsx("h4",{className:"text-sm font-bold text-[#F2F0EB]",children:"Solution Summary & Metrics:"}),g.jsx("p",{className:"text-xs text-[#A8A5A0] leading-relaxed",children:i.summary}),i.posterComment&&g.jsxs("div",{className:"p-4 rounded-xl bg-[#12151C] border border-[#FFB020]/30 text-xs text-[#F2F0EB] italic",children:['"',i.posterComment,'"']})]}),g.jsx("div",{className:"rounded-xl overflow-hidden border border-[#242834] max-h-72",children:g.jsx("img",{src:i.imageUrl||t.imageUrl||"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000",alt:"Live Demo Preview",className:"w-full h-full object-cover object-top",onError:h=>{h.target.src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000"}})})]}),g.jsxs("div",{className:"flex flex-wrap justify-between items-center gap-3 pt-2",children:[g.jsxs(Zt,{to:`/problems/${t.id}`,onClick:()=>u(!1),className:"text-xs font-bold text-[#FFB020] hover:underline flex items-center gap-1",children:["View Full Timeline & Build Logs ",g.jsx(Nr,{className:"w-4 h-4"})]}),g.jsx("button",{onClick:()=>u(!1),className:"px-5 py-2.5 rounded-xl text-xs font-bold bg-[#1A1E28] hover:bg-[#242834] text-[#F2F0EB] border border-[#242834]",children:"Close Preview"})]})]})})]})},tD=()=>{const{role:s,switchDemoRole:t}=Dr(),[i,r]=K.useState([]),[l,u]=K.useState([]),[d,h]=K.useState(!0);return K.useEffect(()=>{async function p(){try{const[m,_]=await Promise.all([Km({status:"open"}),GS()]);r(m.slice(0,3)),u(_.slice(0,1))}catch(m){console.error(m)}finally{h(!1)}}p()},[]),g.jsxs("div",{className:"space-y-28 pb-20",children:[g.jsxs("section",{className:"relative pt-16 lg:pt-24 overflow-hidden",children:[g.jsx("div",{className:"absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#FFB020]/10 rounded-full blur-[120px] pointer-events-none"}),g.jsx("div",{className:"absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-[#FF6B4A]/10 rounded-full blur-[100px] pointer-events-none"}),g.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10",children:[g.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFB020]/10 text-[#FFB020] border border-[#FFB020]/30 mb-8 shadow-sm",children:[g.jsx(Cn,{className:"w-3.5 h-3.5 text-[#FFB020]"}),g.jsx("span",{children:"AWS Ship It Track Entry • Built with Serverless Architecture"})]}),g.jsxs("h1",{className:"font-display text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#F2F0EB] max-w-5xl mx-auto leading-[1.03]",children:["Real problems ",g.jsx("span",{className:"text-[#6E6B65] font-light",children:"→"})," real projects ",g.jsx("span",{className:"text-[#6E6B65] font-light",children:"→"})," ",g.jsx("span",{className:"text-gradient-amber",children:"real proof."})]}),g.jsx("p",{className:"mt-8 text-lg sm:text-2xl text-[#A8A5A0] max-w-3xl mx-auto leading-relaxed font-normal",children:"Connecting real-world organizations with genuine operational problems to student builders who deliver verified, working solutions."}),g.jsxs("div",{className:"mt-12 flex flex-col sm:flex-row items-center justify-center gap-4",children:[g.jsxs(Zt,{to:"/problems",className:"w-full sm:w-auto px-9 py-4 rounded-2xl text-sm font-extrabold btn-primary flex items-center justify-center gap-2 shadow-xl shadow-[#FFB020]/20",children:["Browse Open Problems ",g.jsx(Nr,{className:"w-4 h-4"})]}),g.jsx(Zt,{to:"/create-problem",onClick:()=>t("poster"),className:"w-full sm:w-auto px-9 py-4 rounded-2xl text-sm font-bold bg-[#12151C] hover:bg-[#1A1E28] text-[#F2F0EB] border border-[#242834] flex items-center justify-center gap-2 transition-colors",children:"Post a Real Problem"})]})]})]}),g.jsxs("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[g.jsxs("div",{className:"text-center max-w-2xl mx-auto mb-14",children:[g.jsx("span",{className:"text-xs font-bold uppercase tracking-widest text-[#FFB020] block mb-2",children:"Workflow"}),g.jsx("h2",{className:"font-display text-3xl sm:text-4xl font-extrabold text-[#F2F0EB]",children:"How ProofLoop Operates"})]}),g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6 relative",children:[g.jsxs("div",{className:"glass-card rounded-2xl p-8 relative overflow-hidden group",children:[g.jsx("span",{className:"font-display text-7xl font-extrabold text-[#242834]/60 absolute -right-2 -bottom-3 select-none pointer-events-none group-hover:text-[#FFB020]/20 transition-colors",children:"01"}),g.jsxs("div",{className:"relative z-10 space-y-3",children:[g.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-[#FFB020] block",children:"Step 01"}),g.jsx("h3",{className:"font-display text-lg font-bold text-[#F2F0EB]",children:"Problem Poster"}),g.jsx("p",{className:"text-xs text-[#A8A5A0] leading-relaxed",children:"Local businesses & orgs submit real operational problems with urgency & affected specs."})]})]}),g.jsxs("div",{className:"glass-card rounded-2xl p-8 relative overflow-hidden group",children:[g.jsx("span",{className:"font-display text-7xl font-extrabold text-[#242834]/60 absolute -right-2 -bottom-3 select-none pointer-events-none group-hover:text-[#FF6B4A]/20 transition-colors",children:"02"}),g.jsxs("div",{className:"relative z-10 space-y-3",children:[g.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-[#FF6B4A] block",children:"Step 02"}),g.jsx("h3",{className:"font-display text-lg font-bold text-[#F2F0EB]",children:"Student Claim"}),g.jsx("p",{className:"text-xs text-[#A8A5A0] leading-relaxed",children:"Builders filter open problems by skills needed and claim authentic projects to build."})]})]}),g.jsxs("div",{className:"glass-card rounded-2xl p-8 relative overflow-hidden group",children:[g.jsx("span",{className:"font-display text-7xl font-extrabold text-[#242834]/60 absolute -right-2 -bottom-3 select-none pointer-events-none group-hover:text-purple-500/20 transition-colors",children:"03"}),g.jsxs("div",{className:"relative z-10 space-y-3",children:[g.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-purple-400 block",children:"Step 03"}),g.jsx("h3",{className:"font-display text-lg font-bold text-[#F2F0EB]",children:"Build Log Updates"}),g.jsx("p",{className:"text-xs text-[#A8A5A0] leading-relaxed",children:"Builders post progress logs (text & screenshots) tied directly to the problem timeline."})]})]}),g.jsxs("div",{className:"glass-card rounded-2xl p-8 relative overflow-hidden group",children:[g.jsx("span",{className:"font-display text-7xl font-extrabold text-[#242834]/60 absolute -right-2 -bottom-3 select-none pointer-events-none group-hover:text-emerald-500/20 transition-colors",children:"04"}),g.jsxs("div",{className:"relative z-10 space-y-3",children:[g.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-emerald-400 block",children:"Step 04"}),g.jsx("h3",{className:"font-display text-lg font-bold text-[#F2F0EB]",children:"Validated Proof"}),g.jsx("p",{className:"text-xs text-[#A8A5A0] leading-relaxed",children:"Poster validates working demo proof. Result is published on the public proof wall feed."})]})]})]})]}),l.length>0&&g.jsxs("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8",children:[g.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-4",children:[g.jsxs("div",{children:[g.jsxs("div",{className:"flex items-center gap-2 text-[#FFB020] text-xs font-bold uppercase tracking-wider mb-1.5",children:[g.jsx(Im,{className:"w-4 h-4 text-[#FFB020]"})," Featured Proof of Solution"]}),g.jsx("h2",{className:"font-display text-3xl font-extrabold text-[#F2F0EB]",children:"The Proof Wall"}),g.jsx("p",{className:"text-[#A8A5A0] text-sm mt-1",children:"Real problems solved with verified demo links & poster endorsements."})]}),g.jsxs(Zt,{to:"/wall",className:"text-xs font-bold text-[#FFB020] hover:text-[#FF6B4A] flex items-center gap-1 transition-colors",children:["View Full Proof Wall ",g.jsx(bT,{className:"w-4 h-4"})]})]}),g.jsx(VS,{item:l[0]})]}),g.jsxs("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8",children:[g.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-4",children:[g.jsxs("div",{children:[g.jsxs("div",{className:"flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider mb-1.5",children:[g.jsx(bA,{className:"w-4 h-4"})," Open for Builders"]}),g.jsx("h2",{className:"font-display text-3xl font-extrabold text-[#F2F0EB]",children:"Latest Authentic Problems"}),g.jsx("p",{className:"text-[#A8A5A0] text-sm mt-1",children:"Filter by skills needed and claim a real project that matters."})]}),g.jsxs(Zt,{to:"/problems",className:"text-xs font-bold text-[#FFB020] hover:text-[#FF6B4A] flex items-center gap-1 transition-colors",children:["Explore All Problems (",i.length,") ",g.jsx(Nr,{className:"w-4 h-4"})]})]}),d?g.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[1,2,3].map(p=>g.jsx("div",{className:"h-64 rounded-2xl bg-[#12151C] animate-pulse border border-[#242834]"},p))}):g.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:i.map(p=>g.jsx(of,{problem:p,isBuilder:s==="builder"},p.id))})]})]})},nD=["All","Non-Profit","Small Business","Community","Education","Developer Tools","Other"],iD=[{label:"All Problems",value:"All"},{label:"Open for Claim",value:"open"},{label:"Claimed",value:"claimed"},{label:"In Progress",value:"in_progress"},{label:"Solved",value:"solved"}],aD=()=>{const{user:s,role:t}=Dr(),[i,r]=K.useState([]),[l,u]=K.useState(!0),[d,h]=K.useState("All"),[p,m]=K.useState("All"),[_,x]=K.useState(""),[v,E]=K.useState(null),T=async()=>{try{u(!0);const U=await Km({category:d,status:p,search:_});r(U)}catch(U){console.error(U)}finally{u(!1)}};K.useEffect(()=>{T()},[d,p,_]);const C=async U=>{if(!s){alert("Please log in as a Student Builder to claim a problem.");return}try{await HS(U,s.id,s.name),E("🎉 Problem claimed successfully! Added to your Builder Dashboard."),setTimeout(()=>E(null),4e3),T()}catch(I){alert(I.message||"Failed to claim problem")}},b=i.length>0?i[0]:null,S=i.length>1?i.slice(1):[];return g.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10",children:[g.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#242834]",children:[g.jsxs("div",{children:[g.jsx("h1",{className:"font-display text-4xl font-extrabold text-[#F2F0EB]",children:"Browse Real Problems"}),g.jsx("p",{className:"text-[#A8A5A0] text-sm mt-1",children:"Real operational problems submitted by local organizations, small businesses, and non-profits."})]}),t==="poster"&&g.jsxs(Zt,{to:"/create-problem",className:"px-5 py-2.5 rounded-xl text-xs font-bold btn-primary flex items-center gap-1.5 shadow-md shadow-[#FFB020]/20 w-fit",children:[g.jsx(Bl,{className:"w-4 h-4"})," Post New Problem"]})]}),v&&g.jsxs("div",{className:"p-4 rounded-xl bg-[#FFB020]/15 border border-[#FFB020]/30 text-[#FFB020] text-sm font-semibold flex items-center gap-2",children:[g.jsx(Cn,{className:"w-4 h-4 text-[#FFB020]"}),v]}),g.jsxs("div",{className:"space-y-4",children:[g.jsxs("div",{className:"flex flex-col md:flex-row gap-4",children:[g.jsxs("div",{className:"relative flex-1",children:[g.jsx(iA,{className:"w-4 h-4 text-[#A8A5A0] absolute left-4 top-1/2 -translate-y-1/2"}),g.jsx("input",{type:"text",placeholder:"Search by title, description, or organization...",value:_,onChange:U=>x(U.target.value),className:"w-full bg-[#12151C] border border-[#242834] rounded-xl pl-11 pr-4 py-3 text-sm text-[#F2F0EB] placeholder-[#6E6B65] focus:border-[#FFB020] outline-none transition-colors"})]}),g.jsx("div",{className:"w-full md:w-56",children:g.jsx("select",{value:p,onChange:U=>m(U.target.value),className:"w-full bg-[#12151C] border border-[#242834] rounded-xl px-4 py-3 text-sm text-[#F2F0EB] outline-none focus:border-[#FFB020]",children:iD.map(U=>g.jsx("option",{value:U.value,children:U.label},U.value))})})]}),g.jsxs("div",{className:"flex flex-wrap items-center gap-2 pt-2",children:[g.jsxs("span",{className:"text-xs font-semibold text-[#6E6B65] mr-2 flex items-center gap-1",children:[g.jsx(VT,{className:"w-3.5 h-3.5"})," Category:"]}),nD.map(U=>g.jsx("button",{onClick:()=>h(U),className:`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${d===U?"bg-[#FFB020] text-[#0B0E14] font-bold shadow-sm":"bg-[#12151C] text-[#A8A5A0] hover:text-[#F2F0EB] border border-[#242834]"}`,children:U},U))]})]}),b&&!l&&d==="All"&&p==="All"&&!_&&g.jsxs("div",{className:"glass-card rounded-3xl p-8 border-2 border-[#FFB020]/40 bg-gradient-to-r from-[#12151C] via-[#1A1E28] to-[#12151C] space-y-6 shadow-xl relative overflow-hidden group",children:[g.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsxs("span",{className:"px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-rose-500/20 text-rose-400 border border-rose-500/30 flex items-center gap-1",children:[g.jsx(Yy,{className:"w-3.5 h-3.5"})," Featured Urgent Problem"]}),g.jsx("span",{className:"px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#1A1E28] text-[#FFB020] border border-[#242834]",children:b.category})]}),g.jsx(yo,{type:"problem",value:b.status})]}),g.jsxs("div",{className:"space-y-2",children:[g.jsx(Zt,{to:`/problems/${b.id}`,children:g.jsx("h2",{className:"font-display text-2xl sm:text-3xl font-bold text-[#F2F0EB] group-hover:text-[#FFB020] transition-colors",children:b.title})}),g.jsxs("p",{className:"text-xs text-[#A8A5A0] font-medium",children:["Posted by ",g.jsx("span",{className:"text-[#F2F0EB] font-bold",children:b.posterName})," • Affects: ",b.whoAffected]})]}),g.jsx("p",{className:"text-[#A8A5A0] text-sm leading-relaxed max-w-4xl",children:b.description}),g.jsx("div",{className:"flex flex-wrap items-center justify-end gap-4 pt-4 border-t border-[#242834]",children:g.jsxs("div",{className:"flex items-center gap-2",children:[b.status==="open"&&t==="builder"&&g.jsxs("button",{onClick:()=>C(b.id),className:"px-5 py-2.5 rounded-xl text-xs font-bold btn-primary flex items-center gap-1.5 shadow-md shadow-[#FFB020]/20",children:[g.jsx(Cn,{className:"w-4 h-4"})," Claim Problem"]}),g.jsxs(Zt,{to:`/problems/${b.id}`,className:"px-4 py-2.5 rounded-xl text-xs font-semibold bg-[#1A1E28] hover:bg-[#242834] text-[#F2F0EB] border border-[#242834] flex items-center gap-1",children:["View Details ",g.jsx(Nr,{className:"w-4 h-4"})]})]})})]}),l?g.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[1,2,3,4,5,6].map(U=>g.jsx("div",{className:"h-64 rounded-2xl bg-[#12151C] animate-pulse border border-[#242834]"},U))}):i.length===0?g.jsxs("div",{className:"p-14 rounded-3xl bg-[#12151C] border border-[#242834] text-center space-y-3",children:[g.jsx(CT,{className:"w-10 h-10 text-[#6E6B65] mx-auto"}),g.jsx("h3",{className:"font-display text-lg font-bold text-[#F2F0EB]",children:"No problems match your filters"}),g.jsx("p",{className:"text-[#A8A5A0] text-xs max-w-md mx-auto",children:"Try adjusting your search terms or select a different category filter."})]}):g.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:(d==="All"&&p==="All"&&!_?S:i).map(U=>g.jsx(of,{problem:U,onClaim:C,isBuilder:t==="builder",hideSkills:!0},U.id))})]})},rD=({logs:s})=>!s||s.length===0?g.jsxs("div",{className:"p-10 rounded-2xl bg-[#0B0E14] border border-[#242834] text-center space-y-3",children:[g.jsx("div",{className:"w-12 h-12 rounded-2xl bg-[#FFB020]/10 border border-[#FFB020]/20 flex items-center justify-center mx-auto text-[#FFB020]",children:g.jsx(Zy,{className:"w-6 h-6"})}),g.jsx("h4",{className:"font-display font-bold text-[#F2F0EB] text-sm",children:"No Build Updates Logged Yet"}),g.jsx("p",{className:"text-xs text-[#A8A5A0] max-w-sm mx-auto leading-relaxed",children:"When the claimed student builder works on this project, their transparent build log progress & screenshots will appear right here."})]}):g.jsx("div",{className:"relative border-l-2 border-[#242834] pl-6 space-y-6 my-4",children:s.map(t=>g.jsxs("div",{className:"relative group",children:[g.jsx("div",{className:"absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-[#0B0E14] border-2 border-[#FFB020] group-hover:bg-[#FFB020] transition-colors shadow-sm shadow-[#FFB020]/30"}),g.jsxs("div",{className:"p-5 rounded-2xl bg-[#0B0E14] border border-[#242834] space-y-2.5 hover:border-[#FFB020]/30 transition-colors",children:[g.jsxs("div",{className:"flex items-center justify-between text-xs",children:[g.jsxs("span",{className:"font-bold text-[#F2F0EB] flex items-center gap-1.5",children:[g.jsx("span",{className:"w-2 h-2 rounded-full bg-[#FFB020]"}),t.builderName]}),g.jsxs("span",{className:"text-[#6E6B65] flex items-center gap-1",children:[g.jsx(Xu,{className:"w-3.5 h-3.5"}),new Date(t.createdAt).toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})]})]}),g.jsx("p",{className:"text-sm text-[#A8A5A0] leading-relaxed",children:t.text}),t.imageUrl&&g.jsx("div",{className:"mt-3 rounded-xl overflow-hidden border border-[#242834] max-w-md",children:g.jsx("img",{src:t.imageUrl,alt:"Build log attachment",className:"w-full h-48 object-cover hover:scale-105 transition-transform duration-300"})})]})]},t.id))}),Rm=({onImageUploaded:s,onClose:t,title:i="Attach Image / Screenshot"})=>{const[r,l]=K.useState(null),[u,d]=K.useState(null),[h,p]=K.useState(!1),[m,_]=K.useState("");K.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow="unset"}),[]);const x=E=>{if(E.target.files&&E.target.files[0]){const T=E.target.files[0];l(T),d(URL.createObjectURL(T))}},v=async()=>{if(m.trim()){s(m.trim()),t();return}if(r)try{p(!0);const{uploadUrl:E,publicUrl:T}=await eD(r.name,r.type);await fetch(E,{method:"PUT",headers:{"Content-Type":r.type},body:r}).catch(()=>{}),s(u||T),t()}catch{s(u||"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"),t()}finally{p(!1)}};return g.jsx("div",{className:"fixed inset-0 z-[999] bg-[#0B0E14] flex items-center justify-center p-4 overflow-y-auto",children:g.jsxs("div",{className:"bg-[#12151C] border border-[#242834] rounded-3xl w-full max-w-md p-6 relative space-y-4 shadow-2xl my-auto",children:[g.jsx("button",{onClick:t,className:"absolute top-4 right-4 text-[#A8A5A0] hover:text-[#F2F0EB]",children:g.jsx(Jy,{className:"w-5 h-5"})}),g.jsxs("h3",{className:"font-display text-lg font-bold text-[#F2F0EB] flex items-center gap-2",children:[g.jsx(WT,{className:"w-5 h-5 text-[#FFB020]"}),i]}),g.jsxs("div",{className:"p-3 rounded-xl bg-[#0B0E14] border border-[#242834] text-[11px] text-[#A8A5A0]",children:[g.jsx("span",{className:"font-bold text-[#FFB020]",children:"AWS S3 Pre-Signed Uploads:"})," Direct browser-to-bucket upload via pre-signed Lambda URLs."]}),g.jsx("div",{className:"border-2 border-dashed border-[#242834] rounded-2xl p-6 text-center hover:border-[#FFB020]/50 transition-colors bg-[#0B0E14]",children:u?g.jsxs("div",{className:"relative group",children:[g.jsx("img",{src:u,alt:"Preview",className:"max-h-40 rounded-xl mx-auto object-cover"}),g.jsx("button",{onClick:()=>{l(null),d(null)},className:"mt-2 text-xs text-rose-400 hover:underline",children:"Remove image"})]}):g.jsxs("label",{className:"cursor-pointer space-y-2 block",children:[g.jsx(Pl,{className:"w-8 h-8 text-[#FFB020] mx-auto"}),g.jsx("p",{className:"text-xs text-[#F2F0EB] font-medium",children:"Click to select image or drag file"}),g.jsx("p",{className:"text-[10px] text-[#6E6B65]",children:"PNG, JPG, WebP up to 10MB"}),g.jsx("input",{type:"file",accept:"image/*",onChange:x,className:"hidden"})]})}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-semibold text-[#A8A5A0] mb-1",children:"Or paste Image URL:"}),g.jsx("input",{type:"url",value:m,onChange:E=>_(E.target.value),placeholder:"https://images.unsplash.com/...",className:"w-full bg-[#0B0E14] border border-[#242834] rounded-xl px-3.5 py-2 text-xs text-[#F2F0EB] placeholder-[#6E6B65] focus:border-[#FFB020] outline-none"})]}),g.jsxs("div",{className:"flex justify-end gap-2 pt-2",children:[g.jsx("button",{onClick:t,className:"px-4 py-2 rounded-xl text-xs font-medium text-[#A8A5A0] hover:text-[#F2F0EB]",children:"Cancel"}),g.jsx("button",{onClick:v,disabled:h||!r&&!m.trim(),className:"px-5 py-2 rounded-xl text-xs font-bold btn-primary disabled:opacity-50 flex items-center gap-1.5",children:h?g.jsxs(g.Fragment,{children:[g.jsx(QT,{className:"w-4 h-4 animate-spin"})," Uploading..."]}):g.jsxs(g.Fragment,{children:[g.jsx(wT,{className:"w-4 h-4"})," Confirm Image"]})})]})]})})},sD=()=>{const{id:s}=xM(),{user:t,role:i}=Dr(),[r,l]=K.useState(null),[u,d]=K.useState([]),[h,p]=K.useState(null),[m,_]=K.useState(!0),[x,v]=K.useState(""),[E,T]=K.useState(void 0),[C,b]=K.useState(!1),[S,U]=K.useState(!1),[I,N]=K.useState(""),[D,L]=K.useState(""),[O,A]=K.useState(void 0),[P,V]=K.useState(!1),[Y,ne]=K.useState("");K.useEffect(()=>(S?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[S]);const ce=async()=>{if(s)try{_(!0);const pe=await ZN(s);l(pe.problem),d(pe.logs),p(pe.proof)}catch(pe){console.error(pe)}finally{_(!1)}};K.useEffect(()=>{ce()},[s]);const Q=async()=>{if(!(!t||!r))try{await HS(r.id,t.id,t.name),ce()}catch(pe){alert(pe.message||"Failed to claim problem")}},k=async pe=>{if(pe.preventDefault(),!(!t||!r||!x.trim()))try{await QN(r.id,t.id,t.name,x,E),v(""),T(void 0),ce()}catch(ze){alert(ze.message||"Failed to add build log")}},W=async pe=>{if(pe.preventDefault(),!(!t||!r||!I.trim()||!D.trim()))try{await JN(r.id,t.id,t.name,I,D,O),U(!1),ce()}catch(ze){alert(ze.message||"Failed to submit proof")}},j=async pe=>{if(h)try{await $N(h.id,pe,Y),ce()}catch(ze){alert(ze.message||"Failed to validate proof")}};if(m)return g.jsxs("div",{className:"max-w-5xl mx-auto px-4 py-16 space-y-6",children:[g.jsx("div",{className:"h-8 bg-[#12151C] rounded-lg w-1/3 animate-pulse"}),g.jsx("div",{className:"h-96 bg-[#12151C] rounded-3xl animate-pulse"})]});if(!r)return g.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-16 text-center text-[#A8A5A0]",children:[g.jsx("h2",{className:"font-display text-xl font-bold text-[#F2F0EB] mb-2",children:"Problem Not Found"}),g.jsx(Zt,{to:"/problems",className:"text-[#FFB020] hover:underline",children:"Return to Problems List"})]});const se=t&&r.claimedBy===t.id,ae=t&&r.posterId===t.id,he=(h==null?void 0:h.demoUrl)&&(h.demoUrl.startsWith("http://")||h.demoUrl.startsWith("https://"))&&!h.demoUrl.includes("proofloop-foodbank-app.com")&&!h.demoUrl.includes("proofloop.dev");return g.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10",children:[g.jsxs(Zt,{to:"/problems",className:"inline-flex items-center gap-1.5 text-xs font-semibold text-[#A8A5A0] hover:text-[#F2F0EB] transition-colors",children:[g.jsx(Xy,{className:"w-4 h-4"})," Back to Problems"]}),r.imageUrl&&g.jsxs("div",{className:"relative rounded-3xl overflow-hidden border border-[#242834] bg-[#0B0E14] h-64 sm:h-96 shadow-2xl",children:[g.jsx("img",{src:r.imageUrl,alt:r.title,className:"w-full h-full object-cover",onError:pe=>{pe.target.src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000"}}),g.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-[#0B0E14]/30 to-transparent flex items-end p-8",children:g.jsx("span",{className:"px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#0B0E14] text-[#FFB020] border border-[#FFB020]/30",children:r.category})})]}),g.jsxs("div",{className:"glass-card rounded-3xl p-8 space-y-6",children:[g.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[!r.imageUrl&&g.jsx("span",{className:"px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#1A1E28] text-[#FFB020] border border-[#242834]",children:r.category}),g.jsxs("div",{className:"flex items-center gap-2 ml-auto",children:[g.jsx(yo,{type:"urgency",value:r.urgency}),g.jsx(yo,{type:"problem",value:r.status})]})]}),g.jsx("h1",{className:"font-display text-3xl sm:text-4xl font-extrabold text-[#F2F0EB] leading-tight",children:r.title}),g.jsxs("div",{className:"flex flex-wrap items-center gap-4 text-xs text-[#A8A5A0] pb-4 border-b border-[#242834]",children:[g.jsxs("p",{children:["Posted by ",g.jsx("span",{className:"text-[#F2F0EB] font-bold",children:r.posterName})]}),g.jsx("span",{children:"•"}),g.jsxs("p",{children:["Affects: ",g.jsx("span",{className:"text-[#F2F0EB] font-medium",children:r.whoAffected})]}),g.jsx("span",{children:"•"}),g.jsxs("p",{children:["Posted ",new Date(r.createdAt).toLocaleDateString()]})]}),g.jsxs("div",{className:"space-y-2",children:[g.jsx("h3",{className:"text-xs uppercase font-bold text-[#FFB020] tracking-wider",children:"Problem Description"}),g.jsx("p",{className:"text-[#F2F0EB] text-base leading-relaxed whitespace-pre-line font-normal",children:r.description})]}),g.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#242834]",children:[g.jsxs("div",{children:[g.jsx("span",{className:"text-xs text-[#A8A5A0] block mb-2 font-semibold",children:"Skills Needed:"}),g.jsx("div",{className:"flex flex-wrap gap-2",children:r.skillsNeeded.map((pe,ze)=>g.jsx("span",{className:"px-3 py-1 rounded-xl text-xs font-bold bg-[#FFB020]/15 text-[#FFB020] border border-[#FFB020]/30",children:pe},ze))})]}),r.status==="open"&&i==="builder"&&g.jsxs("button",{onClick:Q,className:"px-6 py-3.5 rounded-2xl text-xs font-extrabold btn-primary flex items-center justify-center gap-2 shadow-lg shadow-[#FFB020]/20",children:[g.jsx(Cn,{className:"w-4 h-4"})," Claim Problem to Build"]}),r.claimedByName&&g.jsxs("div",{className:"p-3.5 rounded-2xl bg-[#0B0E14] border border-[#242834] text-xs",children:[g.jsx("span",{className:"text-[#A8A5A0] block",children:"Assigned Builder:"}),g.jsx("span",{className:"font-bold text-[#FFB020]",children:r.claimedByName})]})]})]}),h&&g.jsxs("div",{className:"glass-card rounded-3xl p-8 border-2 border-[#FFB020]/40 space-y-6",children:[g.jsxs("div",{className:"flex items-center justify-between border-b border-[#242834] pb-4",children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx(Cn,{className:"w-5 h-5 text-[#FFB020]"}),g.jsx("h2",{className:"font-display text-xl font-bold text-[#F2F0EB]",children:"Submitted Solution Proof"})]}),g.jsx(yo,{type:"proof",value:h.status})]}),g.jsxs("div",{className:"space-y-4",children:[g.jsxs("div",{children:[g.jsx("p",{className:"text-xs text-[#A8A5A0] font-semibold mb-1",children:"Solution Summary:"}),g.jsx("p",{className:"text-[#F2F0EB] text-sm leading-relaxed",children:h.summary})]}),h.demoUrl&&g.jsx("div",{children:he?g.jsxs("a",{href:h.demoUrl,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-extrabold btn-primary",children:[g.jsx(Wy,{className:"w-4 h-4"})," View Live External Demo"]}):g.jsxs("div",{className:"p-4 rounded-2xl bg-[#0B0E14] border border-[#FFB020]/30 text-xs text-[#F2F0EB] space-y-1",children:[g.jsxs("span",{className:"font-bold text-[#FFB020] flex items-center gap-1",children:[g.jsx(qy,{className:"w-3.5 h-3.5"})," Working Demo Solution Attached"]}),g.jsxs("p",{className:"text-[#A8A5A0] text-[11px]",children:["This solution was built and verified live for ",r.posterName,". See screenshot proof below."]})]})}),h.imageUrl&&g.jsx("div",{className:"rounded-2xl overflow-hidden border border-[#242834] max-w-lg",children:g.jsx("img",{src:h.imageUrl,alt:"Proof demo",className:"w-full h-64 object-cover",onError:pe=>{pe.target.src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000"}})}),h.posterComment&&g.jsxs("div",{className:"p-4 rounded-2xl bg-[#0B0E14] border border-[#242834] text-xs text-[#F2F0EB]",children:[g.jsx("span",{className:"font-bold text-[#FFB020] block mb-1",children:"Poster Endorsement:"}),'"',h.posterComment,'"']})]}),ae&&h.status==="pending"&&g.jsxs("div",{className:"pt-6 border-t border-[#242834] space-y-4 bg-[#0B0E14] p-6 rounded-2xl border border-[#242834]",children:[g.jsxs("h3",{className:"font-display text-sm font-bold text-[#F2F0EB] flex items-center gap-2",children:[g.jsx(gA,{className:"w-4 h-4 text-[#FFB020]"})," Problem Poster Review & Validation"]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs text-[#A8A5A0] mb-1",children:"Review Comment / Feedback:"}),g.jsx("textarea",{rows:2,value:Y,onChange:pe=>ne(pe.target.value),placeholder:"e.g. Validated! Worked amazingly with our staff. Thank you!",className:"w-full bg-[#12151C] border border-[#242834] rounded-xl p-3 text-xs text-[#F2F0EB] outline-none focus:border-[#FFB020]"})]}),g.jsxs("div",{className:"flex gap-3",children:[g.jsxs("button",{onClick:()=>j("validated"),className:"px-5 py-2.5 rounded-xl text-xs font-bold btn-primary flex items-center gap-1.5",children:[g.jsx($u,{className:"w-4 h-4"})," Validate Solution & Publish to Proof Wall"]}),g.jsxs("button",{onClick:()=>j("rejected"),className:"px-5 py-2.5 rounded-xl text-xs font-bold bg-rose-500/20 text-rose-300 hover:bg-rose-500/30 border border-rose-500/40 flex items-center gap-1.5",children:[g.jsx(LT,{className:"w-4 h-4"})," Request Changes / Reject"]})]})]})]}),g.jsxs("div",{className:"glass-card rounded-3xl p-8 space-y-6",children:[g.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#242834] pb-4",children:[g.jsxs("div",{children:[g.jsxs("h2",{className:"font-display text-xl font-bold text-[#F2F0EB] flex items-center gap-2",children:[g.jsx(Ky,{className:"w-5 h-5 text-[#FFB020]"})," Build Log Progress Timeline"]}),g.jsx("p",{className:"text-xs text-[#A8A5A0] mt-0.5",children:"Transparent builder updates tied to this problem."})]}),se&&r.status!=="solved"&&g.jsxs("button",{onClick:()=>U(!0),className:"px-4 py-2 rounded-xl text-xs font-bold btn-primary flex items-center gap-1.5 shadow-md",children:[g.jsx(Cn,{className:"w-4 h-4"})," Submit Final Proof"]})]}),se&&r.status!=="solved"&&g.jsxs("form",{onSubmit:k,className:"p-5 rounded-2xl bg-[#0B0E14] border border-[#242834] space-y-3",children:[g.jsx("h4",{className:"text-xs font-bold text-[#F2F0EB] uppercase tracking-wider",children:"Post Build Progress Update"}),g.jsx("textarea",{rows:2,value:x,onChange:pe=>v(pe.target.value),placeholder:"What progress did you make? (e.g. Connected database API, added dashboard layout...)",className:"w-full bg-[#12151C] border border-[#242834] rounded-xl p-3 text-xs text-[#F2F0EB] outline-none focus:border-[#FFB020]"}),E&&g.jsxs("div",{className:"flex items-center gap-2 text-xs text-[#FFB020]",children:[g.jsx(Pl,{className:"w-3.5 h-3.5"})," Screenshot attached"]}),g.jsxs("div",{className:"flex items-center justify-between pt-1",children:[g.jsxs("button",{type:"button",onClick:()=>b(!0),className:"text-xs text-[#A8A5A0] hover:text-[#FFB020] flex items-center gap-1",children:[g.jsx(Pl,{className:"w-3.5 h-3.5"})," Attach Screenshot (S3 Upload)"]}),g.jsxs("button",{type:"submit",disabled:!x.trim(),className:"px-4 py-2 rounded-xl text-xs font-bold btn-primary disabled:opacity-50 flex items-center gap-1",children:[g.jsx(rA,{className:"w-3.5 h-3.5"})," Post Update"]})]})]}),g.jsx(rD,{logs:u})]}),C&&g.jsx(Rm,{title:"Upload Progress Screenshot",onImageUploaded:pe=>T(pe),onClose:()=>b(!1)}),S&&g.jsx("div",{className:"fixed inset-0 z-[999] bg-[#0B0E14] flex items-center justify-center p-4 overflow-y-auto",children:g.jsxs("div",{className:"bg-[#12151C] border border-[#242834] rounded-3xl w-full max-w-lg p-6 space-y-4 shadow-2xl my-auto",children:[g.jsxs("h3",{className:"font-display text-lg font-bold text-[#F2F0EB] flex items-center gap-2",children:[g.jsx(Cn,{className:"w-5 h-5 text-[#FFB020]"})," Submit Solution Proof"]}),g.jsx("p",{className:"text-xs text-[#A8A5A0]",children:"Provide a brief summary and working demo link showing your project solves the stated problem."}),g.jsxs("form",{onSubmit:W,className:"space-y-4",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-semibold text-[#F2F0EB] mb-1",children:"Solution Summary:"}),g.jsx("textarea",{rows:3,required:!0,value:I,onChange:pe=>N(pe.target.value),placeholder:"Describe what you built and how it addresses the poster's needs...",className:"w-full bg-[#0B0E14] border border-[#242834] rounded-xl p-3 text-xs text-[#F2F0EB] outline-none focus:border-[#FFB020]"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-semibold text-[#F2F0EB] mb-1",children:"Demo / Deployment URL:"}),g.jsx("input",{type:"url",required:!0,value:D,onChange:pe=>L(pe.target.value),placeholder:"https://demo.myproject.com or /problems/prob_101",className:"w-full bg-[#0B0E14] border border-[#242834] rounded-xl p-3 text-xs text-[#F2F0EB] outline-none focus:border-[#FFB020]"})]}),g.jsx("div",{children:g.jsxs("button",{type:"button",onClick:()=>V(!0),className:"text-xs text-[#A8A5A0] hover:text-[#FFB020] flex items-center gap-1",children:[g.jsx(Pl,{className:"w-3.5 h-3.5"})," ",O?"Screenshot Attached ✓":"Upload Solution Screenshot (S3)"]})}),g.jsxs("div",{className:"flex justify-end gap-2 pt-2",children:[g.jsx("button",{type:"button",onClick:()=>U(!1),className:"px-4 py-2 rounded-xl text-xs font-medium text-[#A8A5A0]",children:"Cancel"}),g.jsx("button",{type:"submit",className:"px-5 py-2 rounded-xl text-xs font-bold btn-primary",children:"Submit Proof to Poster"})]})]})]})}),P&&g.jsx(Rm,{title:"Upload Solution Proof Screenshot",onImageUploaded:pe=>A(pe),onClose:()=>V(!1)})]})},oD=["Community","Small Business","Non-Profit","Education","Developer Tools","Other"],lD=["Low","Medium","High","Critical"],cD=()=>{const{user:s}=Dr(),t=uf(),[i,r]=K.useState(""),[l,u]=K.useState(""),[d,h]=K.useState("Community"),[p,m]=K.useState("Medium"),[_,x]=K.useState(""),[v,E]=K.useState("React, Node.js, Database"),[T,C]=K.useState(void 0),[b,S]=K.useState(!1),[U,I]=K.useState(!1),N=async D=>{if(D.preventDefault(),!s){alert("Please log in as a Problem Poster.");return}try{I(!0);const L=v.split(",").map(A=>A.trim()).filter(Boolean),O=await KN({title:i,description:l,category:d,urgency:p,whoAffected:_,skillsNeeded:L,posterId:s.id,posterName:`${s.name} (${s.bio?s.bio.split(".")[0]:"Problem Poster"})`,imageUrl:T});t(`/problems/${O.id}`)}catch(L){alert(L.message||"Failed to submit problem")}finally{I(!1)}};return g.jsxs("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8",children:[g.jsxs(Zt,{to:"/problems",className:"inline-flex items-center gap-1.5 text-xs font-semibold text-[#A8A5A0] hover:text-[#F2F0EB]",children:[g.jsx(Xy,{className:"w-4 h-4"})," Back to Problems"]}),g.jsxs("div",{className:"glass-card rounded-3xl p-8 space-y-6 border border-[#242834]",children:[g.jsxs("div",{children:[g.jsxs("span",{className:"text-xs uppercase font-bold text-[#FFB020] tracking-wider flex items-center gap-1.5 mb-1",children:[g.jsx(Cn,{className:"w-4 h-4"})," Problem Poster Submission"]}),g.jsx("h1",{className:"font-display text-3xl font-extrabold text-[#F2F0EB]",children:"Post a Real Problem"}),g.jsx("p",{className:"text-[#A8A5A0] text-xs mt-1",children:"Share a concrete problem faced by your organization or business. Student builders will browse and claim it."})]}),g.jsxs("form",{onSubmit:N,className:"space-y-6",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-bold text-[#F2F0EB] mb-1.5",children:"Problem Title *"}),g.jsx("input",{type:"text",required:!0,value:i,onChange:D=>r(D.target.value),placeholder:"e.g. Food Bank Perishable Inventory & Expiry Dashboard",className:"w-full bg-[#0B0E14] border border-[#242834] rounded-xl px-4 py-3 text-sm text-[#F2F0EB] placeholder-[#6E6B65] focus:border-[#FFB020] outline-none transition-colors"})]}),g.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-bold text-[#F2F0EB] mb-1.5",children:"Category *"}),g.jsx("select",{value:d,onChange:D=>h(D.target.value),className:"w-full bg-[#0B0E14] border border-[#242834] rounded-xl px-4 py-3 text-sm text-[#F2F0EB] focus:border-[#FFB020] outline-none",children:oD.map(D=>g.jsx("option",{value:D,children:D},D))})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-bold text-[#F2F0EB] mb-1.5",children:"Urgency Level *"}),g.jsx("select",{value:p,onChange:D=>m(D.target.value),className:"w-full bg-[#0B0E14] border border-[#242834] rounded-xl px-4 py-3 text-sm text-[#F2F0EB] focus:border-[#FFB020] outline-none",children:lD.map(D=>g.jsx("option",{value:D,children:D},D))})]})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-bold text-[#F2F0EB] mb-1.5",children:"Who does this affect? *"}),g.jsx("input",{type:"text",required:!0,value:_,onChange:D=>x(D.target.value),placeholder:"e.g. 350+ weekly food bank recipients and 12 local grocery donors",className:"w-full bg-[#0B0E14] border border-[#242834] rounded-xl px-4 py-3 text-sm text-[#F2F0EB] placeholder-[#6E6B65] focus:border-[#FFB020] outline-none"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-bold text-[#F2F0EB] mb-1.5",children:"Recommended Skills (Comma separated)"}),g.jsx("input",{type:"text",value:v,onChange:D=>E(D.target.value),placeholder:"React, TypeScript, Database, Twilio API",className:"w-full bg-[#0B0E14] border border-[#242834] rounded-xl px-4 py-3 text-sm text-[#F2F0EB] placeholder-[#6E6B65] focus:border-[#FFB020] outline-none"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-bold text-[#F2F0EB] mb-1.5",children:"Detailed Description *"}),g.jsx("textarea",{rows:5,required:!0,value:l,onChange:D=>u(D.target.value),placeholder:"Describe the current manual pain point, how it impacts operations, and what a successful solution would look like...",className:"w-full bg-[#0B0E14] border border-[#242834] rounded-xl p-4 text-sm text-[#F2F0EB] placeholder-[#6E6B65] focus:border-[#FFB020] outline-none"})]}),g.jsxs("div",{className:"p-4 rounded-2xl bg-[#0B0E14] border border-[#242834] space-y-2",children:[g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsx("span",{className:"text-xs font-bold text-[#F2F0EB]",children:"Optional Attachment Image:"}),g.jsxs("button",{type:"button",onClick:()=>S(!0),className:"px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#1A1E28] hover:bg-[#242834] text-[#FFB020] border border-[#242834] flex items-center gap-1",children:[g.jsx(Pl,{className:"w-3.5 h-3.5"})," ",T?"Change Image":"Upload Image (S3)"]})]}),T&&g.jsx("div",{className:"rounded-xl overflow-hidden border border-[#242834] max-h-48",children:g.jsx("img",{src:T,alt:"Uploaded attachment",className:"w-full h-full object-cover"})})]}),g.jsx("div",{className:"flex justify-end pt-4 border-t border-[#242834]",children:g.jsxs("button",{type:"submit",disabled:U,className:"px-8 py-3.5 rounded-2xl text-sm font-extrabold btn-primary flex items-center gap-2 shadow-lg shadow-[#FFB020]/20",children:[g.jsx(Bl,{className:"w-4 h-4"}),U?"Publishing Problem...":"Submit Problem for Builders"]})})]})]}),b&&g.jsx(Rm,{title:"Upload Problem Image / Photo",onImageUploaded:D=>C(D),onClose:()=>S(!1)})]})},uD=()=>{const{user:s,role:t,switchDemoRole:i}=Dr(),[r,l]=K.useState([]),[u,d]=K.useState(!0);if(K.useEffect(()=>{async function m(){try{d(!0);const _=await Km();l(_)}catch(_){console.error(_)}finally{d(!1)}}m()},[]),!s)return g.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-16 text-center space-y-4",children:[g.jsx("h2",{className:"font-display text-2xl font-bold text-[#F2F0EB]",children:"Please log in to view your dashboard"}),g.jsxs("div",{className:"flex justify-center gap-3",children:[g.jsx("button",{onClick:()=>i("poster"),className:"px-5 py-2.5 rounded-xl text-xs font-bold btn-primary",children:"Demo as Problem Poster"}),g.jsx("button",{onClick:()=>i("builder"),className:"px-5 py-2.5 rounded-xl text-xs font-bold bg-[#FF6B4A] text-[#0B0E14]",children:"Demo as Student Builder"})]})]});const h=r.filter(m=>m.posterId===s.id),p=r.filter(m=>m.claimedBy===s.id);return g.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10",children:[g.jsxs("div",{className:"glass-card rounded-3xl p-8 bg-gradient-to-r from-[#12151C] via-[#1A1E28] to-[#12151C] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-[#242834]",children:[g.jsxs("div",{className:"flex items-center gap-4",children:[g.jsx("img",{src:s.avatarUrl||"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",alt:s.name,className:"w-16 h-16 rounded-2xl border-2 border-[#FFB020]/60 object-cover shadow-lg"}),g.jsxs("div",{children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx("h1",{className:"font-display text-2xl font-black text-[#F2F0EB]",children:s.name}),g.jsx("span",{className:"px-3 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-[#FFB020]/15 text-[#FFB020] border border-[#FFB020]/30",children:t==="poster"?"Problem Poster":"Student Builder"})]}),g.jsx("p",{className:"text-xs text-[#A8A5A0] mt-1",children:s.email}),s.bio&&g.jsx("p",{className:"text-xs text-[#A8A5A0] italic mt-1",children:s.bio})]})]}),g.jsx("div",{className:"flex items-center gap-3",children:t==="poster"?g.jsxs(Zt,{to:"/create-problem",className:"px-5 py-2.5 rounded-xl text-xs font-bold btn-primary flex items-center gap-1.5 shadow-md shadow-[#FFB020]/20",children:[g.jsx(Bl,{className:"w-4 h-4"})," Post New Problem"]}):g.jsxs(Zt,{to:"/problems",className:"px-5 py-2.5 rounded-xl text-xs font-bold btn-primary flex items-center gap-1.5 shadow-md",children:[g.jsx(Cn,{className:"w-4 h-4"})," Claim Open Problems"]})})]}),t==="poster"?g.jsxs("div",{className:"space-y-8",children:[g.jsx("div",{className:"flex items-center justify-between",children:g.jsxs("h2",{className:"font-display text-xl font-bold text-[#F2F0EB] flex items-center gap-2",children:[g.jsx(Zy,{className:"w-5 h-5 text-[#FFB020]"})," My Posted Problems (",h.length,")"]})}),u?g.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[1,2].map(m=>g.jsx("div",{className:"h-48 rounded-2xl bg-[#12151C] animate-pulse border border-[#242834]"},m))}):h.length===0?g.jsxs("div",{className:"p-10 rounded-2xl bg-[#12151C] border border-[#242834] text-center space-y-3",children:[g.jsx("p",{className:"text-sm text-[#F2F0EB] font-semibold",children:"You haven't posted any problems yet."}),g.jsxs(Zt,{to:"/create-problem",className:"inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold btn-primary",children:[g.jsx(Bl,{className:"w-4 h-4"})," Submit First Problem"]})]}):g.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:h.map(m=>g.jsx(of,{problem:m},m.id))})]}):g.jsxs("div",{className:"space-y-8",children:[g.jsx("div",{className:"flex items-center justify-between",children:g.jsxs("h2",{className:"font-display text-xl font-bold text-[#F2F0EB] flex items-center gap-2",children:[g.jsx(Cn,{className:"w-5 h-5 text-[#FFB020]"})," My Claimed Projects (",p.length,")"]})}),u?g.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[1,2].map(m=>g.jsx("div",{className:"h-48 rounded-2xl bg-[#12151C] animate-pulse border border-[#242834]"},m))}):p.length===0?g.jsxs("div",{className:"p-10 rounded-2xl bg-[#12151C] border border-[#242834] text-center space-y-3",children:[g.jsx("p",{className:"text-sm text-[#F2F0EB] font-semibold",children:"You haven't claimed any problems yet."}),g.jsxs(Zt,{to:"/problems",className:"inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold btn-primary",children:[g.jsx(Cn,{className:"w-4 h-4"})," Browse & Claim a Problem"]})]}):g.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:p.map(m=>g.jsx(of,{problem:m,isBuilder:!0},m.id))})]})]})},fD=()=>{const[s,t]=K.useState([]),[i,r]=K.useState(!0);return K.useEffect(()=>{async function l(){try{r(!0);const u=await GS();t(u)}catch(u){console.error(u)}finally{r(!1)}}l()},[]),g.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12",children:[g.jsxs("div",{className:"text-center max-w-3xl mx-auto space-y-4",children:[g.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFB020]/10 text-[#FFB020] border border-[#FFB020]/30 shadow-sm",children:[g.jsx(Im,{className:"w-4 h-4 text-[#FFB020]"}),"Public Showcase Feed"]}),g.jsxs("h1",{className:"font-display text-4xl sm:text-6xl font-extrabold text-[#F2F0EB] tracking-tight",children:["The ",g.jsx("span",{className:"text-gradient-amber",children:"Proof Wall"})]}),g.jsx("p",{className:"text-[#A8A5A0] text-base leading-relaxed",children:"Authentic real-world problems solved by student developers and validated with proof of real operational impact."}),g.jsxs("div",{className:"pt-2 flex items-center justify-center gap-6 text-xs text-[#A8A5A0]",children:[g.jsxs("span",{className:"flex items-center gap-1.5 font-semibold text-[#F2F0EB]",children:[g.jsx($u,{className:"w-4 h-4 text-emerald-400"})," ",s.length," Validated Solutions"]}),g.jsx("span",{children:"•"}),g.jsxs("span",{className:"flex items-center gap-1.5 font-semibold text-[#F2F0EB]",children:[g.jsx(Qy,{className:"w-4 h-4 text-[#FFB020]"})," 100% Poster Endorsed"]})]})]}),i?g.jsx("div",{className:"space-y-8",children:[1,2].map(l=>g.jsx("div",{className:"h-96 rounded-3xl bg-[#12151C] animate-pulse border border-[#242834]"},l))}):s.length===0?g.jsxs("div",{className:"p-16 rounded-3xl bg-[#12151C] border border-[#242834] text-center space-y-3",children:[g.jsx(Cn,{className:"w-10 h-10 text-[#6E6B65] mx-auto"}),g.jsx("h3",{className:"font-display text-xl font-bold text-[#F2F0EB]",children:"No validated proofs published yet"}),g.jsx("p",{className:"text-[#A8A5A0] text-xs max-w-md mx-auto",children:"Once a student builder completes a claimed project and the problem poster validates the proof, it appears right here on the public wall!"})]}):g.jsx("div",{className:"space-y-12",children:s.map(l=>g.jsx(VS,{item:l},l.proof.id))})]})},dD=()=>{const{login:s,switchDemoRole:t}=Dr(),i=uf(),[r,l]=K.useState(""),[u,d]=K.useState(""),[h,p]=K.useState("builder"),m=x=>{x.preventDefault(),r&&(s(r,h),i("/dashboard"))},_=x=>{t(x),i("/dashboard")};return g.jsxs("div",{className:"max-w-md mx-auto px-4 py-16 space-y-8",children:[g.jsxs("div",{className:"text-center space-y-2",children:[g.jsx("div",{className:"w-12 h-12 rounded-2xl bg-gradient-amber p-0.5 mx-auto mb-4 shadow-lg shadow-[#FFB020]/20",children:g.jsx("div",{className:"w-full h-full bg-[#0B0E14] rounded-[14px] flex items-center justify-center",children:g.jsx(hf,{className:"w-6 h-6 text-[#FFB020]"})})}),g.jsx("h1",{className:"font-display text-2xl font-extrabold text-[#F2F0EB]",children:"Log in to ProofLoop"}),g.jsx("p",{className:"text-xs text-[#A8A5A0]",children:"Amazon Cognito User Pool Authenticated"})]}),g.jsxs("div",{className:"p-4 rounded-2xl bg-[#12151C] border border-[#242834] space-y-2",children:[g.jsxs("span",{className:"text-xs font-bold text-[#FFB020] flex items-center gap-1",children:[g.jsx(Cn,{className:"w-3.5 h-3.5"})," Quick Demo Session Switcher:"]}),g.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[g.jsxs("button",{onClick:()=>_("poster"),className:"p-3 rounded-xl bg-[#0B0E14] border border-[#242834] text-left hover:border-[#FFB020]/50 transition-colors",children:[g.jsx("p",{className:"text-xs font-bold text-[#F2F0EB]",children:"Sarah Lin"}),g.jsx("p",{className:"text-[10px] text-[#FFB020] font-semibold",children:"Problem Poster"})]}),g.jsxs("button",{onClick:()=>_("builder"),className:"p-3 rounded-xl bg-[#0B0E14] border border-[#242834] text-left hover:border-[#FF6B4A]/50 transition-colors",children:[g.jsx("p",{className:"text-xs font-bold text-[#F2F0EB]",children:"Alex Rivera"}),g.jsx("p",{className:"text-[10px] text-[#FF6B4A] font-semibold",children:"Student Builder"})]})]})]}),g.jsxs("div",{className:"glass-card rounded-3xl p-6 space-y-4 border border-[#242834]",children:[g.jsxs("form",{onSubmit:m,className:"space-y-4",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-bold text-[#F2F0EB] mb-1.5",children:"Select Role *"}),g.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[g.jsx("button",{type:"button",onClick:()=>p("poster"),className:`py-2.5 rounded-xl text-xs font-bold transition-all ${h==="poster"?"bg-[#FFB020] text-[#0B0E14] shadow-md":"bg-[#0B0E14] text-[#A8A5A0] border border-[#242834]"}`,children:"Problem Poster"}),g.jsx("button",{type:"button",onClick:()=>p("builder"),className:`py-2.5 rounded-xl text-xs font-bold transition-all ${h==="builder"?"bg-[#FF6B4A] text-[#0B0E14] shadow-md":"bg-[#0B0E14] text-[#A8A5A0] border border-[#242834]"}`,children:"Student Builder"})]})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-bold text-[#F2F0EB] mb-1",children:"Email Address"}),g.jsx("input",{type:"email",required:!0,value:r,onChange:x=>l(x.target.value),placeholder:"user@example.com",className:"w-full bg-[#0B0E14] border border-[#242834] rounded-xl px-4 py-2.5 text-xs text-[#F2F0EB] outline-none focus:border-[#FFB020]"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-bold text-[#F2F0EB] mb-1",children:"Password"}),g.jsx("input",{type:"password",required:!0,value:u,onChange:x=>d(x.target.value),placeholder:"••••••••",className:"w-full bg-[#0B0E14] border border-[#242834] rounded-xl px-4 py-2.5 text-xs text-[#F2F0EB] outline-none focus:border-[#FFB020]"})]}),g.jsxs("button",{type:"submit",className:"w-full py-3 rounded-xl text-xs font-extrabold btn-primary flex items-center justify-center gap-1.5 shadow-md shadow-[#FFB020]/20",children:["Log In ",g.jsx(Nr,{className:"w-4 h-4"})]})]}),g.jsxs("div",{className:"pt-2 text-center text-xs text-[#A8A5A0]",children:["Don't have an account?"," ",g.jsx(Zt,{to:"/signup",className:"text-[#FFB020] hover:underline font-bold",children:"Sign Up"})]})]})]})},hD=()=>{const{login:s}=Dr(),t=uf(),[i,r]=K.useState(""),[l,u]=K.useState(""),[d,h]=K.useState(""),[p,m]=K.useState("builder"),_=x=>{x.preventDefault(),!(!l||!i)&&(s(l,p,i),t("/dashboard"))};return g.jsxs("div",{className:"max-w-md mx-auto px-4 py-16 space-y-8",children:[g.jsxs("div",{className:"text-center space-y-2",children:[g.jsx("div",{className:"w-12 h-12 rounded-2xl bg-gradient-amber p-0.5 mx-auto mb-4 shadow-lg shadow-[#FFB020]/20",children:g.jsx("div",{className:"w-full h-full bg-[#0B0E14] rounded-[14px] flex items-center justify-center",children:g.jsx(hf,{className:"w-6 h-6 text-[#FFB020]"})})}),g.jsx("h1",{className:"font-display text-2xl font-extrabold text-[#F2F0EB]",children:"Create ProofLoop Account"}),g.jsx("p",{className:"text-xs text-[#A8A5A0]",children:"Join as a Problem Poster or Student Builder"})]}),g.jsxs("div",{className:"glass-card rounded-3xl p-6 space-y-4 border border-[#242834]",children:[g.jsxs("form",{onSubmit:_,className:"space-y-4",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-bold text-[#F2F0EB] mb-1.5",children:"Pick Your Role *"}),g.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[g.jsxs("button",{type:"button",onClick:()=>m("poster"),className:`p-3 rounded-xl text-left border transition-all ${p==="poster"?"bg-[#FFB020]/15 text-[#FFB020] border-[#FFB020]":"bg-[#0B0E14] text-[#A8A5A0] border-[#242834]"}`,children:[g.jsx("p",{className:"text-xs font-bold",children:"Problem Poster"}),g.jsx("p",{className:"text-[10px] text-[#A8A5A0] mt-0.5",children:"Person / Org with real problems"})]}),g.jsxs("button",{type:"button",onClick:()=>m("builder"),className:`p-3 rounded-xl text-left border transition-all ${p==="builder"?"bg-[#FF6B4A]/15 text-[#FF6B4A] border-[#FF6B4A]":"bg-[#0B0E14] text-[#A8A5A0] border-[#242834]"}`,children:[g.jsx("p",{className:"text-xs font-bold",children:"Student Builder"}),g.jsx("p",{className:"text-[10px] text-[#A8A5A0] mt-0.5",children:"Wants to build real solutions"})]})]})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-bold text-[#F2F0EB] mb-1",children:"Full Name *"}),g.jsx("input",{type:"text",required:!0,value:i,onChange:x=>r(x.target.value),placeholder:"e.g. Alex Rivera",className:"w-full bg-[#0B0E14] border border-[#242834] rounded-xl px-4 py-2.5 text-xs text-[#F2F0EB] outline-none focus:border-[#FFB020]"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-bold text-[#F2F0EB] mb-1",children:"Email Address *"}),g.jsx("input",{type:"email",required:!0,value:l,onChange:x=>u(x.target.value),placeholder:"user@example.com",className:"w-full bg-[#0B0E14] border border-[#242834] rounded-xl px-4 py-2.5 text-xs text-[#F2F0EB] outline-none focus:border-[#FFB020]"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-bold text-[#F2F0EB] mb-1",children:"Password *"}),g.jsx("input",{type:"password",required:!0,value:d,onChange:x=>h(x.target.value),placeholder:"••••••••",className:"w-full bg-[#0B0E14] border border-[#242834] rounded-xl px-4 py-2.5 text-xs text-[#F2F0EB] outline-none focus:border-[#FFB020]"})]}),g.jsxs("button",{type:"submit",className:"w-full py-3 rounded-xl text-xs font-extrabold btn-primary flex items-center justify-center gap-1.5 shadow-md shadow-[#FFB020]/20",children:["Create Account ",g.jsx(Nr,{className:"w-4 h-4"})]})]}),g.jsxs("div",{className:"pt-2 text-center text-xs text-[#A8A5A0]",children:["Already have an account?"," ",g.jsx(Zt,{to:"/login",className:"text-[#FFB020] hover:underline font-bold",children:"Log In"})]})]})]})};function pD(){return g.jsx(mT,{children:g.jsx(nT,{children:g.jsxs("div",{className:"min-h-screen flex flex-col bg-[#0B0E14] text-[#F2F0EB] selection:bg-[#FFB020] selection:text-[#0B0E14] relative",children:[g.jsx(jN,{}),g.jsxs("div",{className:"relative z-10 flex flex-col min-h-screen",children:[g.jsx(EA,{}),g.jsx("main",{className:"flex-grow",children:g.jsxs(UM,{children:[g.jsx(Ia,{path:"/",element:g.jsx(tD,{})}),g.jsx(Ia,{path:"/problems",element:g.jsx(aD,{})}),g.jsx(Ia,{path:"/problems/:id",element:g.jsx(sD,{})}),g.jsx(Ia,{path:"/create-problem",element:g.jsx(cD,{})}),g.jsx(Ia,{path:"/dashboard",element:g.jsx(uD,{})}),g.jsx(Ia,{path:"/wall",element:g.jsx(fD,{})}),g.jsx(Ia,{path:"/login",element:g.jsx(dD,{})}),g.jsx(Ia,{path:"/signup",element:g.jsx(hD,{})})]})}),g.jsx(MA,{})]})]})})})}D1.createRoot(document.getElementById("root")).render(g.jsx(K.StrictMode,{children:g.jsx(pD,{})}));
