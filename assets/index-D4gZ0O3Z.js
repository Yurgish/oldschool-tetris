(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const p of u.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Eo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function VS(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Bf={exports:{}},To={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q_;function kS(){if(q_)return To;q_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var p=null;if(u!==void 0&&(p=""+u),l.key!==void 0&&(p=""+l.key),"key"in l){u={};for(var m in l)m!=="key"&&(u[m]=l[m])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:p,ref:l!==void 0?l:null,props:u}}return To.Fragment=e,To.jsx=i,To.jsxs=i,To}var Y_;function XS(){return Y_||(Y_=1,Bf.exports=kS()),Bf.exports}var Fa=XS(),If={exports:{}},st={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z_;function WS(){if(Z_)return st;Z_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),p=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),c=Symbol.iterator;function d(L){return L===null||typeof L!="object"?null:(L=c&&L[c]||L["@@iterator"],typeof L=="function"?L:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,T={};function y(L,J,ve){this.props=L,this.context=J,this.refs=T,this.updater=ve||g}y.prototype.isReactComponent={},y.prototype.setState=function(L,J){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,J,"setState")},y.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function S(){}S.prototype=y.prototype;function I(L,J,ve){this.props=L,this.context=J,this.refs=T,this.updater=ve||g}var O=I.prototype=new S;O.constructor=I,M(O,y.prototype),O.isPureReactComponent=!0;var A=Array.isArray,U={H:null,A:null,T:null,S:null,V:null},N=Object.prototype.hasOwnProperty;function B(L,J,ve,xe,we,te){return ve=te.ref,{$$typeof:o,type:L,key:J,ref:ve!==void 0?ve:null,props:te}}function G(L,J){return B(L.type,J,void 0,void 0,void 0,L.props)}function C(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function D(L){var J={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(ve){return J[ve]})}var z=/\/+/g;function se(L,J){return typeof L=="object"&&L!==null&&L.key!=null?D(""+L.key):J.toString(36)}function oe(){}function ue(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(oe,oe):(L.status="pending",L.then(function(J){L.status==="pending"&&(L.status="fulfilled",L.value=J)},function(J){L.status==="pending"&&(L.status="rejected",L.reason=J)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function de(L,J,ve,xe,we){var te=typeof L;(te==="undefined"||te==="boolean")&&(L=null);var he=!1;if(L===null)he=!0;else switch(te){case"bigint":case"string":case"number":he=!0;break;case"object":switch(L.$$typeof){case o:case e:he=!0;break;case x:return he=L._init,de(he(L._payload),J,ve,xe,we)}}if(he)return we=we(L),he=xe===""?"."+se(L,0):xe,A(we)?(ve="",he!=null&&(ve=he.replace(z,"$&/")+"/"),de(we,J,ve,"",function(qe){return qe})):we!=null&&(C(we)&&(we=G(we,ve+(we.key==null||L&&L.key===we.key?"":(""+we.key).replace(z,"$&/")+"/")+he)),J.push(we)),1;he=0;var ye=xe===""?".":xe+":";if(A(L))for(var Oe=0;Oe<L.length;Oe++)xe=L[Oe],te=ye+se(xe,Oe),he+=de(xe,J,ve,te,we);else if(Oe=d(L),typeof Oe=="function")for(L=Oe.call(L),Oe=0;!(xe=L.next()).done;)xe=xe.value,te=ye+se(xe,Oe++),he+=de(xe,J,ve,te,we);else if(te==="object"){if(typeof L.then=="function")return de(ue(L),J,ve,xe,we);throw J=String(L),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return he}function H(L,J,ve){if(L==null)return L;var xe=[],we=0;return de(L,xe,"","",function(te){return J.call(ve,te,we++)}),xe}function K(L){if(L._status===-1){var J=L._result;J=J(),J.then(function(ve){(L._status===0||L._status===-1)&&(L._status=1,L._result=ve)},function(ve){(L._status===0||L._status===-1)&&(L._status=2,L._result=ve)}),L._status===-1&&(L._status=0,L._result=J)}if(L._status===1)return L._result.default;throw L._result}var Y=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function Se(){}return st.Children={map:H,forEach:function(L,J,ve){H(L,function(){J.apply(this,arguments)},ve)},count:function(L){var J=0;return H(L,function(){J++}),J},toArray:function(L){return H(L,function(J){return J})||[]},only:function(L){if(!C(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},st.Component=y,st.Fragment=i,st.Profiler=l,st.PureComponent=I,st.StrictMode=r,st.Suspense=v,st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=U,st.__COMPILER_RUNTIME={__proto__:null,c:function(L){return U.H.useMemoCache(L)}},st.cache=function(L){return function(){return L.apply(null,arguments)}},st.cloneElement=function(L,J,ve){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var xe=M({},L.props),we=L.key,te=void 0;if(J!=null)for(he in J.ref!==void 0&&(te=void 0),J.key!==void 0&&(we=""+J.key),J)!N.call(J,he)||he==="key"||he==="__self"||he==="__source"||he==="ref"&&J.ref===void 0||(xe[he]=J[he]);var he=arguments.length-2;if(he===1)xe.children=ve;else if(1<he){for(var ye=Array(he),Oe=0;Oe<he;Oe++)ye[Oe]=arguments[Oe+2];xe.children=ye}return B(L.type,we,void 0,void 0,te,xe)},st.createContext=function(L){return L={$$typeof:p,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},st.createElement=function(L,J,ve){var xe,we={},te=null;if(J!=null)for(xe in J.key!==void 0&&(te=""+J.key),J)N.call(J,xe)&&xe!=="key"&&xe!=="__self"&&xe!=="__source"&&(we[xe]=J[xe]);var he=arguments.length-2;if(he===1)we.children=ve;else if(1<he){for(var ye=Array(he),Oe=0;Oe<he;Oe++)ye[Oe]=arguments[Oe+2];we.children=ye}if(L&&L.defaultProps)for(xe in he=L.defaultProps,he)we[xe]===void 0&&(we[xe]=he[xe]);return B(L,te,void 0,void 0,null,we)},st.createRef=function(){return{current:null}},st.forwardRef=function(L){return{$$typeof:m,render:L}},st.isValidElement=C,st.lazy=function(L){return{$$typeof:x,_payload:{_status:-1,_result:L},_init:K}},st.memo=function(L,J){return{$$typeof:_,type:L,compare:J===void 0?null:J}},st.startTransition=function(L){var J=U.T,ve={};U.T=ve;try{var xe=L(),we=U.S;we!==null&&we(ve,xe),typeof xe=="object"&&xe!==null&&typeof xe.then=="function"&&xe.then(Se,Y)}catch(te){Y(te)}finally{U.T=J}},st.unstable_useCacheRefresh=function(){return U.H.useCacheRefresh()},st.use=function(L){return U.H.use(L)},st.useActionState=function(L,J,ve){return U.H.useActionState(L,J,ve)},st.useCallback=function(L,J){return U.H.useCallback(L,J)},st.useContext=function(L){return U.H.useContext(L)},st.useDebugValue=function(){},st.useDeferredValue=function(L,J){return U.H.useDeferredValue(L,J)},st.useEffect=function(L,J,ve){var xe=U.H;if(typeof ve=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return xe.useEffect(L,J)},st.useId=function(){return U.H.useId()},st.useImperativeHandle=function(L,J,ve){return U.H.useImperativeHandle(L,J,ve)},st.useInsertionEffect=function(L,J){return U.H.useInsertionEffect(L,J)},st.useLayoutEffect=function(L,J){return U.H.useLayoutEffect(L,J)},st.useMemo=function(L,J){return U.H.useMemo(L,J)},st.useOptimistic=function(L,J){return U.H.useOptimistic(L,J)},st.useReducer=function(L,J,ve){return U.H.useReducer(L,J,ve)},st.useRef=function(L){return U.H.useRef(L)},st.useState=function(L){return U.H.useState(L)},st.useSyncExternalStore=function(L,J,ve){return U.H.useSyncExternalStore(L,J,ve)},st.useTransition=function(){return U.H.useTransition()},st.version="19.1.1",st}var K_;function lh(){return K_||(K_=1,If.exports=WS()),If.exports}var Gn=lh();const Ql=VS(Gn);var zf={exports:{}},Ao={},Ff={exports:{}},Hf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j_;function qS(){return j_||(j_=1,(function(o){function e(H,K){var Y=H.length;H.push(K);e:for(;0<Y;){var Se=Y-1>>>1,L=H[Se];if(0<l(L,K))H[Se]=K,H[Y]=L,Y=Se;else break e}}function i(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var K=H[0],Y=H.pop();if(Y!==K){H[0]=Y;e:for(var Se=0,L=H.length,J=L>>>1;Se<J;){var ve=2*(Se+1)-1,xe=H[ve],we=ve+1,te=H[we];if(0>l(xe,Y))we<L&&0>l(te,xe)?(H[Se]=te,H[we]=Y,Se=we):(H[Se]=xe,H[ve]=Y,Se=ve);else if(we<L&&0>l(te,Y))H[Se]=te,H[we]=Y,Se=we;else break e}}return K}function l(H,K){var Y=H.sortIndex-K.sortIndex;return Y!==0?Y:H.id-K.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var p=Date,m=p.now();o.unstable_now=function(){return p.now()-m}}var v=[],_=[],x=1,c=null,d=3,g=!1,M=!1,T=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function A(H){for(var K=i(_);K!==null;){if(K.callback===null)r(_);else if(K.startTime<=H)r(_),K.sortIndex=K.expirationTime,e(v,K);else break;K=i(_)}}function U(H){if(T=!1,A(H),!M)if(i(v)!==null)M=!0,N||(N=!0,se());else{var K=i(_);K!==null&&de(U,K.startTime-H)}}var N=!1,B=-1,G=5,C=-1;function D(){return y?!0:!(o.unstable_now()-C<G)}function z(){if(y=!1,N){var H=o.unstable_now();C=H;var K=!0;try{e:{M=!1,T&&(T=!1,I(B),B=-1),g=!0;var Y=d;try{t:{for(A(H),c=i(v);c!==null&&!(c.expirationTime>H&&D());){var Se=c.callback;if(typeof Se=="function"){c.callback=null,d=c.priorityLevel;var L=Se(c.expirationTime<=H);if(H=o.unstable_now(),typeof L=="function"){c.callback=L,A(H),K=!0;break t}c===i(v)&&r(v),A(H)}else r(v);c=i(v)}if(c!==null)K=!0;else{var J=i(_);J!==null&&de(U,J.startTime-H),K=!1}}break e}finally{c=null,d=Y,g=!1}K=void 0}}finally{K?se():N=!1}}}var se;if(typeof O=="function")se=function(){O(z)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,ue=oe.port2;oe.port1.onmessage=z,se=function(){ue.postMessage(null)}}else se=function(){S(z,0)};function de(H,K){B=S(function(){H(o.unstable_now())},K)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(H){H.callback=null},o.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<H?Math.floor(1e3/H):5},o.unstable_getCurrentPriorityLevel=function(){return d},o.unstable_next=function(H){switch(d){case 1:case 2:case 3:var K=3;break;default:K=d}var Y=d;d=K;try{return H()}finally{d=Y}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(H,K){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var Y=d;d=H;try{return K()}finally{d=Y}},o.unstable_scheduleCallback=function(H,K,Y){var Se=o.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?Se+Y:Se):Y=Se,H){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=Y+L,H={id:x++,callback:K,priorityLevel:H,startTime:Y,expirationTime:L,sortIndex:-1},Y>Se?(H.sortIndex=Y,e(_,H),i(v)===null&&H===i(_)&&(T?(I(B),B=-1):T=!0,de(U,Y-Se))):(H.sortIndex=L,e(v,H),M||g||(M=!0,N||(N=!0,se()))),H},o.unstable_shouldYield=D,o.unstable_wrapCallback=function(H){var K=d;return function(){var Y=d;d=K;try{return H.apply(this,arguments)}finally{d=Y}}}})(Hf)),Hf}var Q_;function YS(){return Q_||(Q_=1,Ff.exports=qS()),Ff.exports}var Gf={exports:{}},Rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J_;function ZS(){if(J_)return Rn;J_=1;var o=lh();function e(v){var _="https://react.dev/errors/"+v;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)_+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+v+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(v,_,x){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:c==null?null:""+c,children:v,containerInfo:_,implementation:x}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(v,_){if(v==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Rn.createPortal=function(v,_){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(e(299));return u(v,_,null,x)},Rn.flushSync=function(v){var _=p.T,x=r.p;try{if(p.T=null,r.p=2,v)return v()}finally{p.T=_,r.p=x,r.d.f()}},Rn.preconnect=function(v,_){typeof v=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,r.d.C(v,_))},Rn.prefetchDNS=function(v){typeof v=="string"&&r.d.D(v)},Rn.preinit=function(v,_){if(typeof v=="string"&&_&&typeof _.as=="string"){var x=_.as,c=m(x,_.crossOrigin),d=typeof _.integrity=="string"?_.integrity:void 0,g=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;x==="style"?r.d.S(v,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:c,integrity:d,fetchPriority:g}):x==="script"&&r.d.X(v,{crossOrigin:c,integrity:d,fetchPriority:g,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},Rn.preinitModule=function(v,_){if(typeof v=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var x=m(_.as,_.crossOrigin);r.d.M(v,{crossOrigin:x,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0})}}else _==null&&r.d.M(v)},Rn.preload=function(v,_){if(typeof v=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var x=_.as,c=m(x,_.crossOrigin);r.d.L(v,x,{crossOrigin:c,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},Rn.preloadModule=function(v,_){if(typeof v=="string")if(_){var x=m(_.as,_.crossOrigin);r.d.m(v,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:x,integrity:typeof _.integrity=="string"?_.integrity:void 0})}else r.d.m(v)},Rn.requestFormReset=function(v){r.d.r(v)},Rn.unstable_batchedUpdates=function(v,_){return v(_)},Rn.useFormState=function(v,_,x){return p.H.useFormState(v,_,x)},Rn.useFormStatus=function(){return p.H.useHostTransitionStatus()},Rn.version="19.1.1",Rn}var $_;function KS(){if($_)return Gf.exports;$_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Gf.exports=ZS(),Gf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eg;function jS(){if(eg)return Ao;eg=1;var o=YS(),e=lh(),i=KS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function p(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(r(188))}function v(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var f=a.return;if(f===null)break;var h=f.alternate;if(h===null){if(s=f.return,s!==null){a=s;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===a)return m(f),t;if(h===s)return m(f),n;h=h.sibling}throw Error(r(188))}if(a.return!==s.return)a=f,s=h;else{for(var E=!1,R=f.child;R;){if(R===a){E=!0,a=f,s=h;break}if(R===s){E=!0,s=f,a=h;break}R=R.sibling}if(!E){for(R=h.child;R;){if(R===a){E=!0,a=h,s=f;break}if(R===s){E=!0,s=h,a=f;break}R=R.sibling}if(!E)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var x=Object.assign,c=Symbol.for("react.element"),d=Symbol.for("react.transitional.element"),g=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),S=Symbol.for("react.provider"),I=Symbol.for("react.consumer"),O=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),z=Symbol.iterator;function se(t){return t===null||typeof t!="object"?null:(t=z&&t[z]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Symbol.for("react.client.reference");function ue(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===oe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case M:return"Fragment";case y:return"Profiler";case T:return"StrictMode";case U:return"Suspense";case N:return"SuspenseList";case C:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case g:return"Portal";case O:return(t.displayName||"Context")+".Provider";case I:return(t._context.displayName||"Context")+".Consumer";case A:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return n=t.displayName||null,n!==null?n:ue(t.type)||"Memo";case G:n=t._payload,t=t._init;try{return ue(t(n))}catch{}}return null}var de=Array.isArray,H=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},Se=[],L=-1;function J(t){return{current:t}}function ve(t){0>L||(t.current=Se[L],Se[L]=null,L--)}function xe(t,n){L++,Se[L]=t.current,t.current=n}var we=J(null),te=J(null),he=J(null),ye=J(null);function Oe(t,n){switch(xe(he,n),xe(te,t),xe(we,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?x_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=x_(n),t=y_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ve(we),xe(we,t)}function qe(){ve(we),ve(te),ve(he)}function nt(t){t.memoizedState!==null&&xe(ye,t);var n=we.current,a=y_(n,t.type);n!==a&&(xe(te,t),xe(we,a))}function zt(t){te.current===t&&(ve(we),ve(te)),ye.current===t&&(ve(ye),vo._currentValue=Y)}var ht=Object.prototype.hasOwnProperty,V=o.unstable_scheduleCallback,At=o.unstable_cancelCallback,je=o.unstable_shouldYield,St=o.unstable_requestPaint,ze=o.unstable_now,Ft=o.unstable_getCurrentPriorityLevel,Fe=o.unstable_ImmediatePriority,rt=o.unstable_UserBlockingPriority,Xt=o.unstable_NormalPriority,Wt=o.unstable_LowPriority,P=o.unstable_IdlePriority,b=o.log,$=o.unstable_setDisableYieldValue,ce=null,ge=null;function le(t){if(typeof b=="function"&&$(t),ge&&typeof ge.setStrictMode=="function")try{ge.setStrictMode(ce,t)}catch{}}var Pe=Math.clz32?Math.clz32:We,be=Math.log,ke=Math.LN2;function We(t){return t>>>=0,t===0?32:31-(be(t)/ke|0)|0}var Me=256,Ue=4194304;function Ze(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ve(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var f=0,h=t.suspendedLanes,E=t.pingedLanes;t=t.warmLanes;var R=s&134217727;return R!==0?(s=R&~h,s!==0?f=Ze(s):(E&=R,E!==0?f=Ze(E):a||(a=R&~t,a!==0&&(f=Ze(a))))):(R=s&~h,R!==0?f=Ze(R):E!==0?f=Ze(E):a||(a=s&~t,a!==0&&(f=Ze(a)))),f===0?0:n!==0&&n!==f&&(n&h)===0&&(h=f&-f,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:f}function Ce(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function at(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X(){var t=Me;return Me<<=1,(Me&4194048)===0&&(Me=256),t}function Ae(){var t=Ue;return Ue<<=1,(Ue&62914560)===0&&(Ue=4194304),t}function Re(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Be(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ee(t,n,a,s,f,h){var E=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,F=t.expirationTimes,Q=t.hiddenUpdates;for(a=E&~a;0<a;){var fe=31-Pe(a),me=1<<fe;R[fe]=0,F[fe]=-1;var ee=Q[fe];if(ee!==null)for(Q[fe]=null,fe=0;fe<ee.length;fe++){var ne=ee[fe];ne!==null&&(ne.lane&=-536870913)}a&=~me}s!==0&&_e(t,s,0),h!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=h&~(E&~n))}function _e(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Pe(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&4194090}function Ge(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Pe(a),f=1<<s;f&n|t[s]&n&&(t[s]|=n),a&=~f}}function it(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function bt(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function xt(){var t=K.p;return t!==0?t:(t=window.event,t===void 0?32:H_(t.type))}function ui(t,n){var a=K.p;try{return K.p=t,n()}finally{K.p=a}}var on=Math.random().toString(36).slice(2),ln="__reactFiber$"+on,Yt="__reactProps$"+on,yi="__reactContainer$"+on,Mr="__reactEvents$"+on,Vo="__reactListeners$"+on,Er="__reactHandles$"+on,Cs="__reactResources$"+on,Mi="__reactMarker$"+on;function Tr(t){delete t[ln],delete t[Yt],delete t[Mr],delete t[Vo],delete t[Er]}function Oi(t){var n=t[ln];if(n)return n;for(var a=t.parentNode;a;){if(n=a[yi]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=A_(t);t!==null;){if(a=t[ln])return a;t=A_(t)}return n}t=a,a=t.parentNode}return null}function oa(t){if(t=t[ln]||t[yi]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function ka(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function la(t){var n=t[Cs];return n||(n=t[Cs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function nn(t){t[Mi]=!0}var ko=new Set,Xo={};function w(t,n){W(t,n),W(t+"Capture",n)}function W(t,n){for(Xo[t]=n,t=0;t<n.length;t++)ko.add(n[t])}var ie=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ae={},Z={};function Te(t){return ht.call(Z,t)?!0:ht.call(ae,t)?!1:ie.test(t)?Z[t]=!0:(ae[t]=!0,!1)}function De(t,n,a){if(Te(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ie(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Le(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}var Qe,$e;function Xe(t){if(Qe===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Qe=n&&n[1]||"",$e=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qe+t+$e}var lt=!1;function yt(t,n){if(!t||lt)return"";lt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var me=function(){throw Error()};if(Object.defineProperty(me.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(me,[])}catch(ne){var ee=ne}Reflect.construct(t,[],me)}else{try{me.call()}catch(ne){ee=ne}t.call(me.prototype)}}else{try{throw Error()}catch(ne){ee=ne}(me=t())&&typeof me.catch=="function"&&me.catch(function(){})}}catch(ne){if(ne&&ee&&typeof ne.stack=="string")return[ne.stack,ee.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=s.DetermineComponentFrameRoot(),E=h[0],R=h[1];if(E&&R){var F=E.split(`
`),Q=R.split(`
`);for(f=s=0;s<F.length&&!F[s].includes("DetermineComponentFrameRoot");)s++;for(;f<Q.length&&!Q[f].includes("DetermineComponentFrameRoot");)f++;if(s===F.length||f===Q.length)for(s=F.length-1,f=Q.length-1;1<=s&&0<=f&&F[s]!==Q[f];)f--;for(;1<=s&&0<=f;s--,f--)if(F[s]!==Q[f]){if(s!==1||f!==1)do if(s--,f--,0>f||F[s]!==Q[f]){var fe=`
`+F[s].replace(" at new "," at ");return t.displayName&&fe.includes("<anonymous>")&&(fe=fe.replace("<anonymous>",t.displayName)),fe}while(1<=s&&0<=f);break}}}finally{lt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Xe(a):""}function Vt(t){switch(t.tag){case 26:case 27:case 5:return Xe(t.type);case 16:return Xe("Lazy");case 13:return Xe("Suspense");case 19:return Xe("SuspenseList");case 0:case 15:return yt(t.type,!1);case 11:return yt(t.type.render,!1);case 1:return yt(t.type,!0);case 31:return Xe("Activity");default:return""}}function Dt(t){try{var n="";do n+=Vt(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ut(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ke(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Gt(t){var n=Ke(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),s=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,h=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return f.call(this)},set:function(E){s=""+E,h.call(this,E)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(E){s=""+E},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function pt(t){t._valueTracker||(t._valueTracker=Gt(t))}function Tn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Ke(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function ci(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Dn=/[\n"\\]/g;function pn(t){return t.replace(Dn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Bt(t,n,a,s,f,h,E,R){t.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.type=E:t.removeAttribute("type"),n!=null?E==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ut(n)):t.value!==""+ut(n)&&(t.value=""+ut(n)):E!=="submit"&&E!=="reset"||t.removeAttribute("value"),n!=null?An(t,E,ut(n)):a!=null?An(t,E,ut(a)):s!=null&&t.removeAttribute("value"),f==null&&h!=null&&(t.defaultChecked=!!h),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+ut(R):t.removeAttribute("name")}function Un(t,n,a,s,f,h,E,R){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null))return;a=a!=null?""+ut(a):"",n=n!=null?""+ut(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}s=s??f,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=R?t.checked:!!s,t.defaultChecked=!!s,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(t.name=E)}function An(t,n,a){n==="number"&&ci(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Zt(t,n,a,s){if(t=t.options,n){n={};for(var f=0;f<a.length;f++)n["$"+a[f]]=!0;for(a=0;a<t.length;a++)f=n.hasOwnProperty("$"+t[a].value),t[a].selected!==f&&(t[a].selected=f),f&&s&&(t[a].defaultSelected=!0)}else{for(a=""+ut(a),n=null,f=0;f<t.length;f++){if(t[f].value===a){t[f].selected=!0,s&&(t[f].defaultSelected=!0);return}n!==null||t[f].disabled||(n=t[f])}n!==null&&(n.selected=!0)}}function xn(t,n,a){if(n!=null&&(n=""+ut(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ut(a):""}function Ar(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(de(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ut(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s)}function Pn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Fv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function xh(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||Fv.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function yh(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var f in n)s=n[f],n.hasOwnProperty(f)&&a[f]!==s&&xh(t,f,s)}else for(var h in n)n.hasOwnProperty(h)&&xh(t,h,n[h])}function Ou(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Gv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Wo(t){return Gv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Pu=null;function Bu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var br=null,Rr=null;function Mh(t){var n=oa(t);if(n&&(t=n.stateNode)){var a=t[Yt]||null;e:switch(t=n.stateNode,n.type){case"input":if(Bt(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+pn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var f=s[Yt]||null;if(!f)throw Error(r(90));Bt(s,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Tn(s)}break e;case"textarea":xn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Zt(t,!!a.multiple,n,!1)}}}var Iu=!1;function Eh(t,n,a){if(Iu)return t(n,a);Iu=!0;try{var s=t(n);return s}finally{if(Iu=!1,(br!==null||Rr!==null)&&(Dl(),br&&(n=br,t=Rr,Rr=br=null,Mh(n),t)))for(n=0;n<t.length;n++)Mh(t[n])}}function Ds(t,n){var a=t.stateNode;if(a===null)return null;var s=a[Yt]||null;if(s===null)return null;a=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zu=!1;if(Pi)try{var Us={};Object.defineProperty(Us,"passive",{get:function(){zu=!0}}),window.addEventListener("test",Us,Us),window.removeEventListener("test",Us,Us)}catch{zu=!1}var ua=null,Fu=null,qo=null;function Th(){if(qo)return qo;var t,n=Fu,a=n.length,s,f="value"in ua?ua.value:ua.textContent,h=f.length;for(t=0;t<a&&n[t]===f[t];t++);var E=a-t;for(s=1;s<=E&&n[a-s]===f[h-s];s++);return qo=f.slice(t,1<s?1-s:void 0)}function Yo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Zo(){return!0}function Ah(){return!1}function Bn(t){function n(a,s,f,h,E){this._reactName=a,this._targetInst=f,this.type=s,this.nativeEvent=h,this.target=E,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(h):h[R]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Zo:Ah,this.isPropagationStopped=Ah,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Zo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Zo)},persist:function(){},isPersistent:Zo}),n}var Xa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ko=Bn(Xa),Ls=x({},Xa,{view:0,detail:0}),Vv=Bn(Ls),Hu,Gu,Ns,jo=x({},Ls,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ku,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ns&&(Ns&&t.type==="mousemove"?(Hu=t.screenX-Ns.screenX,Gu=t.screenY-Ns.screenY):Gu=Hu=0,Ns=t),Hu)},movementY:function(t){return"movementY"in t?t.movementY:Gu}}),bh=Bn(jo),kv=x({},jo,{dataTransfer:0}),Xv=Bn(kv),Wv=x({},Ls,{relatedTarget:0}),Vu=Bn(Wv),qv=x({},Xa,{animationName:0,elapsedTime:0,pseudoElement:0}),Yv=Bn(qv),Zv=x({},Xa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Kv=Bn(Zv),jv=x({},Xa,{data:0}),Rh=Bn(jv),Qv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$v={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function e0(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=$v[t])?!!n[t]:!1}function ku(){return e0}var t0=x({},Ls,{key:function(t){if(t.key){var n=Qv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Yo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Jv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ku,charCode:function(t){return t.type==="keypress"?Yo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Yo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),n0=Bn(t0),i0=x({},jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wh=Bn(i0),a0=x({},Ls,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ku}),r0=Bn(a0),s0=x({},Xa,{propertyName:0,elapsedTime:0,pseudoElement:0}),o0=Bn(s0),l0=x({},jo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),u0=Bn(l0),c0=x({},Xa,{newState:0,oldState:0}),f0=Bn(c0),d0=[9,13,27,32],Xu=Pi&&"CompositionEvent"in window,Os=null;Pi&&"documentMode"in document&&(Os=document.documentMode);var h0=Pi&&"TextEvent"in window&&!Os,Ch=Pi&&(!Xu||Os&&8<Os&&11>=Os),Dh=" ",Uh=!1;function Lh(t,n){switch(t){case"keyup":return d0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var wr=!1;function p0(t,n){switch(t){case"compositionend":return Nh(n);case"keypress":return n.which!==32?null:(Uh=!0,Dh);case"textInput":return t=n.data,t===Dh&&Uh?null:t;default:return null}}function m0(t,n){if(wr)return t==="compositionend"||!Xu&&Lh(t,n)?(t=Th(),qo=Fu=ua=null,wr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ch&&n.locale!=="ko"?null:n.data;default:return null}}var _0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Oh(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!_0[t.type]:n==="textarea"}function Ph(t,n,a,s){br?Rr?Rr.push(s):Rr=[s]:br=s,n=Bl(n,"onChange"),0<n.length&&(a=new Ko("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Ps=null,Bs=null;function g0(t){m_(t,0)}function Qo(t){var n=ka(t);if(Tn(n))return t}function Bh(t,n){if(t==="change")return n}var Ih=!1;if(Pi){var Wu;if(Pi){var qu="oninput"in document;if(!qu){var zh=document.createElement("div");zh.setAttribute("oninput","return;"),qu=typeof zh.oninput=="function"}Wu=qu}else Wu=!1;Ih=Wu&&(!document.documentMode||9<document.documentMode)}function Fh(){Ps&&(Ps.detachEvent("onpropertychange",Hh),Bs=Ps=null)}function Hh(t){if(t.propertyName==="value"&&Qo(Bs)){var n=[];Ph(n,Bs,t,Bu(t)),Eh(g0,n)}}function v0(t,n,a){t==="focusin"?(Fh(),Ps=n,Bs=a,Ps.attachEvent("onpropertychange",Hh)):t==="focusout"&&Fh()}function S0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Qo(Bs)}function x0(t,n){if(t==="click")return Qo(n)}function y0(t,n){if(t==="input"||t==="change")return Qo(n)}function M0(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var kn=typeof Object.is=="function"?Object.is:M0;function Is(t,n){if(kn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var f=a[s];if(!ht.call(n,f)||!kn(t[f],n[f]))return!1}return!0}function Gh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vh(t,n){var a=Gh(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Gh(a)}}function kh(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?kh(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Xh(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=ci(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=ci(t.document)}return n}function Yu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var E0=Pi&&"documentMode"in document&&11>=document.documentMode,Cr=null,Zu=null,zs=null,Ku=!1;function Wh(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ku||Cr==null||Cr!==ci(s)||(s=Cr,"selectionStart"in s&&Yu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),zs&&Is(zs,s)||(zs=s,s=Bl(Zu,"onSelect"),0<s.length&&(n=new Ko("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Cr)))}function Wa(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Dr={animationend:Wa("Animation","AnimationEnd"),animationiteration:Wa("Animation","AnimationIteration"),animationstart:Wa("Animation","AnimationStart"),transitionrun:Wa("Transition","TransitionRun"),transitionstart:Wa("Transition","TransitionStart"),transitioncancel:Wa("Transition","TransitionCancel"),transitionend:Wa("Transition","TransitionEnd")},ju={},qh={};Pi&&(qh=document.createElement("div").style,"AnimationEvent"in window||(delete Dr.animationend.animation,delete Dr.animationiteration.animation,delete Dr.animationstart.animation),"TransitionEvent"in window||delete Dr.transitionend.transition);function qa(t){if(ju[t])return ju[t];if(!Dr[t])return t;var n=Dr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in qh)return ju[t]=n[a];return t}var Yh=qa("animationend"),Zh=qa("animationiteration"),Kh=qa("animationstart"),T0=qa("transitionrun"),A0=qa("transitionstart"),b0=qa("transitioncancel"),jh=qa("transitionend"),Qh=new Map,Qu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Qu.push("scrollEnd");function fi(t,n){Qh.set(t,n),w(n,[t])}var Jh=new WeakMap;function ei(t,n){if(typeof t=="object"&&t!==null){var a=Jh.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Dt(n)},Jh.set(t,n),n)}return{value:t,source:n,stack:Dt(n)}}var ti=[],Ur=0,Ju=0;function Jo(){for(var t=Ur,n=Ju=Ur=0;n<t;){var a=ti[n];ti[n++]=null;var s=ti[n];ti[n++]=null;var f=ti[n];ti[n++]=null;var h=ti[n];if(ti[n++]=null,s!==null&&f!==null){var E=s.pending;E===null?f.next=f:(f.next=E.next,E.next=f),s.pending=f}h!==0&&$h(a,f,h)}}function $o(t,n,a,s){ti[Ur++]=t,ti[Ur++]=n,ti[Ur++]=a,ti[Ur++]=s,Ju|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function $u(t,n,a,s){return $o(t,n,a,s),el(t)}function Lr(t,n){return $o(t,null,null,n),el(t)}function $h(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var f=!1,h=t.return;h!==null;)h.childLanes|=a,s=h.alternate,s!==null&&(s.childLanes|=a),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(f=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,f&&n!==null&&(f=31-Pe(a),t=h.hiddenUpdates,s=t[f],s===null?t[f]=[n]:s.push(n),n.lane=a|536870912),h):null}function el(t){if(50<uo)throw uo=0,sf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Nr={};function R0(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(t,n,a,s){return new R0(t,n,a,s)}function ec(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Bi(t,n){var a=t.alternate;return a===null?(a=Xn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function ep(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function tl(t,n,a,s,f,h){var E=0;if(s=t,typeof t=="function")ec(t)&&(E=1);else if(typeof t=="string")E=CS(t,a,we.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case C:return t=Xn(31,a,n,f),t.elementType=C,t.lanes=h,t;case M:return Ya(a.children,f,h,n);case T:E=8,f|=24;break;case y:return t=Xn(12,a,n,f|2),t.elementType=y,t.lanes=h,t;case U:return t=Xn(13,a,n,f),t.elementType=U,t.lanes=h,t;case N:return t=Xn(19,a,n,f),t.elementType=N,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case S:case O:E=10;break e;case I:E=9;break e;case A:E=11;break e;case B:E=14;break e;case G:E=16,s=null;break e}E=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Xn(E,a,n,f),n.elementType=t,n.type=s,n.lanes=h,n}function Ya(t,n,a,s){return t=Xn(7,t,s,n),t.lanes=a,t}function tc(t,n,a){return t=Xn(6,t,null,n),t.lanes=a,t}function nc(t,n,a){return n=Xn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Or=[],Pr=0,nl=null,il=0,ni=[],ii=0,Za=null,Ii=1,zi="";function Ka(t,n){Or[Pr++]=il,Or[Pr++]=nl,nl=t,il=n}function tp(t,n,a){ni[ii++]=Ii,ni[ii++]=zi,ni[ii++]=Za,Za=t;var s=Ii;t=zi;var f=32-Pe(s)-1;s&=~(1<<f),a+=1;var h=32-Pe(n)+f;if(30<h){var E=f-f%5;h=(s&(1<<E)-1).toString(32),s>>=E,f-=E,Ii=1<<32-Pe(n)+f|a<<f|s,zi=h+t}else Ii=1<<h|a<<f|s,zi=t}function ic(t){t.return!==null&&(Ka(t,1),tp(t,1,0))}function ac(t){for(;t===nl;)nl=Or[--Pr],Or[Pr]=null,il=Or[--Pr],Or[Pr]=null;for(;t===Za;)Za=ni[--ii],ni[ii]=null,zi=ni[--ii],ni[ii]=null,Ii=ni[--ii],ni[ii]=null}var Ln=null,Kt=null,Tt=!1,ja=null,Ei=!1,rc=Error(r(519));function Qa(t){var n=Error(r(418,""));throw Gs(ei(n,t)),rc}function np(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[ln]=t,n[Yt]=s,a){case"dialog":_t("cancel",n),_t("close",n);break;case"iframe":case"object":case"embed":_t("load",n);break;case"video":case"audio":for(a=0;a<fo.length;a++)_t(fo[a],n);break;case"source":_t("error",n);break;case"img":case"image":case"link":_t("error",n),_t("load",n);break;case"details":_t("toggle",n);break;case"input":_t("invalid",n),Un(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),pt(n);break;case"select":_t("invalid",n);break;case"textarea":_t("invalid",n),Ar(n,s.value,s.defaultValue,s.children),pt(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||S_(n.textContent,a)?(s.popover!=null&&(_t("beforetoggle",n),_t("toggle",n)),s.onScroll!=null&&_t("scroll",n),s.onScrollEnd!=null&&_t("scrollend",n),s.onClick!=null&&(n.onclick=Il),n=!0):n=!1,n||Qa(t)}function ip(t){for(Ln=t.return;Ln;)switch(Ln.tag){case 5:case 13:Ei=!1;return;case 27:case 3:Ei=!0;return;default:Ln=Ln.return}}function Fs(t){if(t!==Ln)return!1;if(!Tt)return ip(t),Tt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Mf(t.type,t.memoizedProps)),a=!a),a&&Kt&&Qa(t),ip(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){Kt=hi(t.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}Kt=null}}else n===27?(n=Kt,Aa(t.type)?(t=bf,bf=null,Kt=t):Kt=n):Kt=Ln?hi(t.stateNode.nextSibling):null;return!0}function Hs(){Kt=Ln=null,Tt=!1}function ap(){var t=ja;return t!==null&&(Fn===null?Fn=t:Fn.push.apply(Fn,t),ja=null),t}function Gs(t){ja===null?ja=[t]:ja.push(t)}var sc=J(null),Ja=null,Fi=null;function ca(t,n,a){xe(sc,n._currentValue),n._currentValue=a}function Hi(t){t._currentValue=sc.current,ve(sc)}function oc(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function lc(t,n,a,s){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var h=f.dependencies;if(h!==null){var E=f.child;h=h.firstContext;e:for(;h!==null;){var R=h;h=f;for(var F=0;F<n.length;F++)if(R.context===n[F]){h.lanes|=a,R=h.alternate,R!==null&&(R.lanes|=a),oc(h.return,a,t),s||(E=null);break e}h=R.next}}else if(f.tag===18){if(E=f.return,E===null)throw Error(r(341));E.lanes|=a,h=E.alternate,h!==null&&(h.lanes|=a),oc(E,a,t),E=null}else E=f.child;if(E!==null)E.return=f;else for(E=f;E!==null;){if(E===t){E=null;break}if(f=E.sibling,f!==null){f.return=E.return,E=f;break}E=E.return}f=E}}function Vs(t,n,a,s){t=null;for(var f=n,h=!1;f!==null;){if(!h){if((f.flags&524288)!==0)h=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var E=f.alternate;if(E===null)throw Error(r(387));if(E=E.memoizedProps,E!==null){var R=f.type;kn(f.pendingProps.value,E.value)||(t!==null?t.push(R):t=[R])}}else if(f===ye.current){if(E=f.alternate,E===null)throw Error(r(387));E.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(vo):t=[vo])}f=f.return}t!==null&&lc(n,t,a,s),n.flags|=262144}function al(t){for(t=t.firstContext;t!==null;){if(!kn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function $a(t){Ja=t,Fi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function bn(t){return rp(Ja,t)}function rl(t,n){return Ja===null&&$a(t),rp(t,n)}function rp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Fi===null){if(t===null)throw Error(r(308));Fi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Fi=Fi.next=n;return a}var w0=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},C0=o.unstable_scheduleCallback,D0=o.unstable_NormalPriority,un={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function uc(){return{controller:new w0,data:new Map,refCount:0}}function ks(t){t.refCount--,t.refCount===0&&C0(D0,function(){t.controller.abort()})}var Xs=null,cc=0,Br=0,Ir=null;function U0(t,n){if(Xs===null){var a=Xs=[];cc=0,Br=hf(),Ir={status:"pending",value:void 0,then:function(s){a.push(s)}}}return cc++,n.then(sp,sp),n}function sp(){if(--cc===0&&Xs!==null){Ir!==null&&(Ir.status="fulfilled");var t=Xs;Xs=null,Br=0,Ir=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function L0(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(f){a.push(f)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var f=0;f<a.length;f++)(0,a[f])(n)},function(f){for(s.status="rejected",s.reason=f,f=0;f<a.length;f++)(0,a[f])(void 0)}),s}var op=H.S;H.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&U0(t,n),op!==null&&op(t,n)};var er=J(null);function fc(){var t=er.current;return t!==null?t:Ht.pooledCache}function sl(t,n){n===null?xe(er,er.current):xe(er,n.pool)}function lp(){var t=fc();return t===null?null:{parent:un._currentValue,pool:t}}var Ws=Error(r(460)),up=Error(r(474)),ol=Error(r(542)),dc={then:function(){}};function cp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function ll(){}function fp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ll,ll),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,hp(t),t;default:if(typeof n.status=="string")n.then(ll,ll);else{if(t=Ht,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var f=n;f.status="fulfilled",f.value=s}},function(s){if(n.status==="pending"){var f=n;f.status="rejected",f.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,hp(t),t}throw qs=n,Ws}}var qs=null;function dp(){if(qs===null)throw Error(r(459));var t=qs;return qs=null,t}function hp(t){if(t===Ws||t===ol)throw Error(r(483))}var fa=!1;function hc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function pc(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function da(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ha(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Rt&2)!==0){var f=s.pending;return f===null?n.next=n:(n.next=f.next,f.next=n),s.pending=n,n=el(t),$h(t,null,a),n}return $o(t,s,n,a),el(t)}function Ys(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Ge(t,a)}}function mc(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var f=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var E={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?f=h=E:h=h.next=E,a=a.next}while(a!==null);h===null?f=h=n:h=h.next=n}else f=h=n;a={baseState:s.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var _c=!1;function Zs(){if(_c){var t=Ir;if(t!==null)throw t}}function Ks(t,n,a,s){_c=!1;var f=t.updateQueue;fa=!1;var h=f.firstBaseUpdate,E=f.lastBaseUpdate,R=f.shared.pending;if(R!==null){f.shared.pending=null;var F=R,Q=F.next;F.next=null,E===null?h=Q:E.next=Q,E=F;var fe=t.alternate;fe!==null&&(fe=fe.updateQueue,R=fe.lastBaseUpdate,R!==E&&(R===null?fe.firstBaseUpdate=Q:R.next=Q,fe.lastBaseUpdate=F))}if(h!==null){var me=f.baseState;E=0,fe=Q=F=null,R=h;do{var ee=R.lane&-536870913,ne=ee!==R.lane;if(ne?(vt&ee)===ee:(s&ee)===ee){ee!==0&&ee===Br&&(_c=!0),fe!==null&&(fe=fe.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var tt=t,Je=R;ee=n;var Nt=a;switch(Je.tag){case 1:if(tt=Je.payload,typeof tt=="function"){me=tt.call(Nt,me,ee);break e}me=tt;break e;case 3:tt.flags=tt.flags&-65537|128;case 0:if(tt=Je.payload,ee=typeof tt=="function"?tt.call(Nt,me,ee):tt,ee==null)break e;me=x({},me,ee);break e;case 2:fa=!0}}ee=R.callback,ee!==null&&(t.flags|=64,ne&&(t.flags|=8192),ne=f.callbacks,ne===null?f.callbacks=[ee]:ne.push(ee))}else ne={lane:ee,tag:R.tag,payload:R.payload,callback:R.callback,next:null},fe===null?(Q=fe=ne,F=me):fe=fe.next=ne,E|=ee;if(R=R.next,R===null){if(R=f.shared.pending,R===null)break;ne=R,R=ne.next,ne.next=null,f.lastBaseUpdate=ne,f.shared.pending=null}}while(!0);fe===null&&(F=me),f.baseState=F,f.firstBaseUpdate=Q,f.lastBaseUpdate=fe,h===null&&(f.shared.lanes=0),ya|=E,t.lanes=E,t.memoizedState=me}}function pp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function mp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)pp(a[t],n)}var zr=J(null),ul=J(0);function _p(t,n){t=Yi,xe(ul,t),xe(zr,n),Yi=t|n.baseLanes}function gc(){xe(ul,Yi),xe(zr,zr.current)}function vc(){Yi=ul.current,ve(zr),ve(ul)}var pa=0,ft=null,Ut=null,an=null,cl=!1,Fr=!1,tr=!1,fl=0,js=0,Hr=null,N0=0;function $t(){throw Error(r(321))}function Sc(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!kn(t[a],n[a]))return!1;return!0}function xc(t,n,a,s,f,h){return pa=h,ft=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,H.H=t===null||t.memoizedState===null?$p:em,tr=!1,h=a(s,f),tr=!1,Fr&&(h=vp(n,a,s,f)),gp(t),h}function gp(t){H.H=gl;var n=Ut!==null&&Ut.next!==null;if(pa=0,an=Ut=ft=null,cl=!1,js=0,Hr=null,n)throw Error(r(300));t===null||mn||(t=t.dependencies,t!==null&&al(t)&&(mn=!0))}function vp(t,n,a,s){ft=t;var f=0;do{if(Fr&&(Hr=null),js=0,Fr=!1,25<=f)throw Error(r(301));if(f+=1,an=Ut=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}H.H=H0,h=n(a,s)}while(Fr);return h}function O0(){var t=H.H,n=t.useState()[0];return n=typeof n.then=="function"?Qs(n):n,t=t.useState()[0],(Ut!==null?Ut.memoizedState:null)!==t&&(ft.flags|=1024),n}function yc(){var t=fl!==0;return fl=0,t}function Mc(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Ec(t){if(cl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}cl=!1}pa=0,an=Ut=ft=null,Fr=!1,js=fl=0,Hr=null}function In(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?ft.memoizedState=an=t:an=an.next=t,an}function rn(){if(Ut===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=Ut.next;var n=an===null?ft.memoizedState:an.next;if(n!==null)an=n,Ut=t;else{if(t===null)throw ft.alternate===null?Error(r(467)):Error(r(310));Ut=t,t={memoizedState:Ut.memoizedState,baseState:Ut.baseState,baseQueue:Ut.baseQueue,queue:Ut.queue,next:null},an===null?ft.memoizedState=an=t:an=an.next=t}return an}function Tc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Qs(t){var n=js;return js+=1,Hr===null&&(Hr=[]),t=fp(Hr,t,n),n=ft,(an===null?n.memoizedState:an.next)===null&&(n=n.alternate,H.H=n===null||n.memoizedState===null?$p:em),t}function dl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Qs(t);if(t.$$typeof===O)return bn(t)}throw Error(r(438,String(t)))}function Ac(t){var n=null,a=ft.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ft.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(f){return f.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Tc(),ft.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=D;return n.index++,a}function Gi(t,n){return typeof n=="function"?n(t):n}function hl(t){var n=rn();return bc(n,Ut,t)}function bc(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var f=t.baseQueue,h=s.pending;if(h!==null){if(f!==null){var E=f.next;f.next=h.next,h.next=E}n.baseQueue=f=h,s.pending=null}if(h=t.baseState,f===null)t.memoizedState=h;else{n=f.next;var R=E=null,F=null,Q=n,fe=!1;do{var me=Q.lane&-536870913;if(me!==Q.lane?(vt&me)===me:(pa&me)===me){var ee=Q.revertLane;if(ee===0)F!==null&&(F=F.next={lane:0,revertLane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),me===Br&&(fe=!0);else if((pa&ee)===ee){Q=Q.next,ee===Br&&(fe=!0);continue}else me={lane:0,revertLane:Q.revertLane,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},F===null?(R=F=me,E=h):F=F.next=me,ft.lanes|=ee,ya|=ee;me=Q.action,tr&&a(h,me),h=Q.hasEagerState?Q.eagerState:a(h,me)}else ee={lane:me,revertLane:Q.revertLane,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},F===null?(R=F=ee,E=h):F=F.next=ee,ft.lanes|=me,ya|=me;Q=Q.next}while(Q!==null&&Q!==n);if(F===null?E=h:F.next=R,!kn(h,t.memoizedState)&&(mn=!0,fe&&(a=Ir,a!==null)))throw a;t.memoizedState=h,t.baseState=E,t.baseQueue=F,s.lastRenderedState=h}return f===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Rc(t){var n=rn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,f=a.pending,h=n.memoizedState;if(f!==null){a.pending=null;var E=f=f.next;do h=t(h,E.action),E=E.next;while(E!==f);kn(h,n.memoizedState)||(mn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,s]}function Sp(t,n,a){var s=ft,f=rn(),h=Tt;if(h){if(a===void 0)throw Error(r(407));a=a()}else a=n();var E=!kn((Ut||f).memoizedState,a);E&&(f.memoizedState=a,mn=!0),f=f.queue;var R=Mp.bind(null,s,f,t);if(Js(2048,8,R,[t]),f.getSnapshot!==n||E||an!==null&&an.memoizedState.tag&1){if(s.flags|=2048,Gr(9,pl(),yp.bind(null,s,f,a,n),null),Ht===null)throw Error(r(349));h||(pa&124)!==0||xp(s,n,a)}return a}function xp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ft.updateQueue,n===null?(n=Tc(),ft.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function yp(t,n,a,s){n.value=a,n.getSnapshot=s,Ep(n)&&Tp(t)}function Mp(t,n,a){return a(function(){Ep(n)&&Tp(t)})}function Ep(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!kn(t,a)}catch{return!0}}function Tp(t){var n=Lr(t,2);n!==null&&Kn(n,t,2)}function wc(t){var n=In();if(typeof t=="function"){var a=t;if(t=a(),tr){le(!0);try{a()}finally{le(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:t},n}function Ap(t,n,a,s){return t.baseState=a,bc(t,Ut,typeof s=="function"?s:Gi)}function P0(t,n,a,s,f){if(_l(t))throw Error(r(485));if(t=n.action,t!==null){var h={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){h.listeners.push(E)}};H.T!==null?a(!0):h.isTransition=!1,s(h),a=n.pending,a===null?(h.next=n.pending=h,bp(n,h)):(h.next=a.next,n.pending=a.next=h)}}function bp(t,n){var a=n.action,s=n.payload,f=t.state;if(n.isTransition){var h=H.T,E={};H.T=E;try{var R=a(f,s),F=H.S;F!==null&&F(E,R),Rp(t,n,R)}catch(Q){Cc(t,n,Q)}finally{H.T=h}}else try{h=a(f,s),Rp(t,n,h)}catch(Q){Cc(t,n,Q)}}function Rp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){wp(t,n,s)},function(s){return Cc(t,n,s)}):wp(t,n,a)}function wp(t,n,a){n.status="fulfilled",n.value=a,Cp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,bp(t,a)))}function Cc(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Cp(n),n=n.next;while(n!==s)}t.action=null}function Cp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Dp(t,n){return n}function Up(t,n){if(Tt){var a=Ht.formState;if(a!==null){e:{var s=ft;if(Tt){if(Kt){t:{for(var f=Kt,h=Ei;f.nodeType!==8;){if(!h){f=null;break t}if(f=hi(f.nextSibling),f===null){f=null;break t}}h=f.data,f=h==="F!"||h==="F"?f:null}if(f){Kt=hi(f.nextSibling),s=f.data==="F!";break e}}Qa(s)}s=!1}s&&(n=a[0])}}return a=In(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dp,lastRenderedState:n},a.queue=s,a=jp.bind(null,ft,s),s.dispatch=a,s=wc(!1),h=Oc.bind(null,ft,!1,s.queue),s=In(),f={state:n,dispatch:null,action:t,pending:null},s.queue=f,a=P0.bind(null,ft,f,h,a),f.dispatch=a,s.memoizedState=t,[n,a,!1]}function Lp(t){var n=rn();return Np(n,Ut,t)}function Np(t,n,a){if(n=bc(t,n,Dp)[0],t=hl(Gi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Qs(n)}catch(E){throw E===Ws?ol:E}else s=n;n=rn();var f=n.queue,h=f.dispatch;return a!==n.memoizedState&&(ft.flags|=2048,Gr(9,pl(),B0.bind(null,f,a),null)),[s,h,t]}function B0(t,n){t.action=n}function Op(t){var n=rn(),a=Ut;if(a!==null)return Np(n,a,t);rn(),n=n.memoizedState,a=rn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Gr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=ft.updateQueue,n===null&&(n=Tc(),ft.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function pl(){return{destroy:void 0,resource:void 0}}function Pp(){return rn().memoizedState}function ml(t,n,a,s){var f=In();s=s===void 0?null:s,ft.flags|=t,f.memoizedState=Gr(1|n,pl(),a,s)}function Js(t,n,a,s){var f=rn();s=s===void 0?null:s;var h=f.memoizedState.inst;Ut!==null&&s!==null&&Sc(s,Ut.memoizedState.deps)?f.memoizedState=Gr(n,h,a,s):(ft.flags|=t,f.memoizedState=Gr(1|n,h,a,s))}function Bp(t,n){ml(8390656,8,t,n)}function Ip(t,n){Js(2048,8,t,n)}function zp(t,n){return Js(4,2,t,n)}function Fp(t,n){return Js(4,4,t,n)}function Hp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Gp(t,n,a){a=a!=null?a.concat([t]):null,Js(4,4,Hp.bind(null,n,t),a)}function Dc(){}function Vp(t,n){var a=rn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Sc(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function kp(t,n){var a=rn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Sc(n,s[1]))return s[0];if(s=t(),tr){le(!0);try{t()}finally{le(!1)}}return a.memoizedState=[s,n],s}function Uc(t,n,a){return a===void 0||(pa&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=qm(),ft.lanes|=t,ya|=t,a)}function Xp(t,n,a,s){return kn(a,n)?a:zr.current!==null?(t=Uc(t,a,s),kn(t,n)||(mn=!0),t):(pa&42)===0?(mn=!0,t.memoizedState=a):(t=qm(),ft.lanes|=t,ya|=t,n)}function Wp(t,n,a,s,f){var h=K.p;K.p=h!==0&&8>h?h:8;var E=H.T,R={};H.T=R,Oc(t,!1,n,a);try{var F=f(),Q=H.S;if(Q!==null&&Q(R,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var fe=L0(F,s);$s(t,n,fe,Zn(t))}else $s(t,n,s,Zn(t))}catch(me){$s(t,n,{then:function(){},status:"rejected",reason:me},Zn())}finally{K.p=h,H.T=E}}function I0(){}function Lc(t,n,a,s){if(t.tag!==5)throw Error(r(476));var f=qp(t).queue;Wp(t,f,n,Y,a===null?I0:function(){return Yp(t),a(s)})}function qp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Yp(t){var n=qp(t).next.queue;$s(t,n,{},Zn())}function Nc(){return bn(vo)}function Zp(){return rn().memoizedState}function Kp(){return rn().memoizedState}function z0(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Zn();t=da(a);var s=ha(n,t,a);s!==null&&(Kn(s,n,a),Ys(s,n,a)),n={cache:uc()},t.payload=n;return}n=n.return}}function F0(t,n,a){var s=Zn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},_l(t)?Qp(n,a):(a=$u(t,n,a,s),a!==null&&(Kn(a,t,s),Jp(a,n,s)))}function jp(t,n,a){var s=Zn();$s(t,n,a,s)}function $s(t,n,a,s){var f={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(_l(t))Qp(n,f);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var E=n.lastRenderedState,R=h(E,a);if(f.hasEagerState=!0,f.eagerState=R,kn(R,E))return $o(t,n,f,0),Ht===null&&Jo(),!1}catch{}finally{}if(a=$u(t,n,f,s),a!==null)return Kn(a,t,s),Jp(a,n,s),!0}return!1}function Oc(t,n,a,s){if(s={lane:2,revertLane:hf(),action:s,hasEagerState:!1,eagerState:null,next:null},_l(t)){if(n)throw Error(r(479))}else n=$u(t,a,s,2),n!==null&&Kn(n,t,2)}function _l(t){var n=t.alternate;return t===ft||n!==null&&n===ft}function Qp(t,n){Fr=cl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Jp(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Ge(t,a)}}var gl={readContext:bn,use:dl,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useLayoutEffect:$t,useInsertionEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useSyncExternalStore:$t,useId:$t,useHostTransitionStatus:$t,useFormState:$t,useActionState:$t,useOptimistic:$t,useMemoCache:$t,useCacheRefresh:$t},$p={readContext:bn,use:dl,useCallback:function(t,n){return In().memoizedState=[t,n===void 0?null:n],t},useContext:bn,useEffect:Bp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,ml(4194308,4,Hp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return ml(4194308,4,t,n)},useInsertionEffect:function(t,n){ml(4,2,t,n)},useMemo:function(t,n){var a=In();n=n===void 0?null:n;var s=t();if(tr){le(!0);try{t()}finally{le(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=In();if(a!==void 0){var f=a(n);if(tr){le(!0);try{a(n)}finally{le(!1)}}}else f=n;return s.memoizedState=s.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},s.queue=t,t=t.dispatch=F0.bind(null,ft,t),[s.memoizedState,t]},useRef:function(t){var n=In();return t={current:t},n.memoizedState=t},useState:function(t){t=wc(t);var n=t.queue,a=jp.bind(null,ft,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Dc,useDeferredValue:function(t,n){var a=In();return Uc(a,t,n)},useTransition:function(){var t=wc(!1);return t=Wp.bind(null,ft,t.queue,!0,!1),In().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=ft,f=In();if(Tt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ht===null)throw Error(r(349));(vt&124)!==0||xp(s,n,a)}f.memoizedState=a;var h={value:a,getSnapshot:n};return f.queue=h,Bp(Mp.bind(null,s,h,t),[t]),s.flags|=2048,Gr(9,pl(),yp.bind(null,s,h,a,n),null),a},useId:function(){var t=In(),n=Ht.identifierPrefix;if(Tt){var a=zi,s=Ii;a=(s&~(1<<32-Pe(s)-1)).toString(32)+a,n="«"+n+"R"+a,a=fl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=N0++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:Nc,useFormState:Up,useActionState:Up,useOptimistic:function(t){var n=In();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Oc.bind(null,ft,!0,a),a.dispatch=n,[t,n]},useMemoCache:Ac,useCacheRefresh:function(){return In().memoizedState=z0.bind(null,ft)}},em={readContext:bn,use:dl,useCallback:Vp,useContext:bn,useEffect:Ip,useImperativeHandle:Gp,useInsertionEffect:zp,useLayoutEffect:Fp,useMemo:kp,useReducer:hl,useRef:Pp,useState:function(){return hl(Gi)},useDebugValue:Dc,useDeferredValue:function(t,n){var a=rn();return Xp(a,Ut.memoizedState,t,n)},useTransition:function(){var t=hl(Gi)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:Qs(t),n]},useSyncExternalStore:Sp,useId:Zp,useHostTransitionStatus:Nc,useFormState:Lp,useActionState:Lp,useOptimistic:function(t,n){var a=rn();return Ap(a,Ut,t,n)},useMemoCache:Ac,useCacheRefresh:Kp},H0={readContext:bn,use:dl,useCallback:Vp,useContext:bn,useEffect:Ip,useImperativeHandle:Gp,useInsertionEffect:zp,useLayoutEffect:Fp,useMemo:kp,useReducer:Rc,useRef:Pp,useState:function(){return Rc(Gi)},useDebugValue:Dc,useDeferredValue:function(t,n){var a=rn();return Ut===null?Uc(a,t,n):Xp(a,Ut.memoizedState,t,n)},useTransition:function(){var t=Rc(Gi)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:Qs(t),n]},useSyncExternalStore:Sp,useId:Zp,useHostTransitionStatus:Nc,useFormState:Op,useActionState:Op,useOptimistic:function(t,n){var a=rn();return Ut!==null?Ap(a,Ut,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Ac,useCacheRefresh:Kp},Vr=null,eo=0;function vl(t){var n=eo;return eo+=1,Vr===null&&(Vr=[]),fp(Vr,t,n)}function to(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Sl(t,n){throw n.$$typeof===c?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function tm(t){var n=t._init;return n(t._payload)}function nm(t){function n(q,k){if(t){var j=q.deletions;j===null?(q.deletions=[k],q.flags|=16):j.push(k)}}function a(q,k){if(!t)return null;for(;k!==null;)n(q,k),k=k.sibling;return null}function s(q){for(var k=new Map;q!==null;)q.key!==null?k.set(q.key,q):k.set(q.index,q),q=q.sibling;return k}function f(q,k){return q=Bi(q,k),q.index=0,q.sibling=null,q}function h(q,k,j){return q.index=j,t?(j=q.alternate,j!==null?(j=j.index,j<k?(q.flags|=67108866,k):j):(q.flags|=67108866,k)):(q.flags|=1048576,k)}function E(q){return t&&q.alternate===null&&(q.flags|=67108866),q}function R(q,k,j,pe){return k===null||k.tag!==6?(k=tc(j,q.mode,pe),k.return=q,k):(k=f(k,j),k.return=q,k)}function F(q,k,j,pe){var He=j.type;return He===M?fe(q,k,j.props.children,pe,j.key):k!==null&&(k.elementType===He||typeof He=="object"&&He!==null&&He.$$typeof===G&&tm(He)===k.type)?(k=f(k,j.props),to(k,j),k.return=q,k):(k=tl(j.type,j.key,j.props,null,q.mode,pe),to(k,j),k.return=q,k)}function Q(q,k,j,pe){return k===null||k.tag!==4||k.stateNode.containerInfo!==j.containerInfo||k.stateNode.implementation!==j.implementation?(k=nc(j,q.mode,pe),k.return=q,k):(k=f(k,j.children||[]),k.return=q,k)}function fe(q,k,j,pe,He){return k===null||k.tag!==7?(k=Ya(j,q.mode,pe,He),k.return=q,k):(k=f(k,j),k.return=q,k)}function me(q,k,j){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=tc(""+k,q.mode,j),k.return=q,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case d:return j=tl(k.type,k.key,k.props,null,q.mode,j),to(j,k),j.return=q,j;case g:return k=nc(k,q.mode,j),k.return=q,k;case G:var pe=k._init;return k=pe(k._payload),me(q,k,j)}if(de(k)||se(k))return k=Ya(k,q.mode,j,null),k.return=q,k;if(typeof k.then=="function")return me(q,vl(k),j);if(k.$$typeof===O)return me(q,rl(q,k),j);Sl(q,k)}return null}function ee(q,k,j,pe){var He=k!==null?k.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return He!==null?null:R(q,k,""+j,pe);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case d:return j.key===He?F(q,k,j,pe):null;case g:return j.key===He?Q(q,k,j,pe):null;case G:return He=j._init,j=He(j._payload),ee(q,k,j,pe)}if(de(j)||se(j))return He!==null?null:fe(q,k,j,pe,null);if(typeof j.then=="function")return ee(q,k,vl(j),pe);if(j.$$typeof===O)return ee(q,k,rl(q,j),pe);Sl(q,j)}return null}function ne(q,k,j,pe,He){if(typeof pe=="string"&&pe!==""||typeof pe=="number"||typeof pe=="bigint")return q=q.get(j)||null,R(k,q,""+pe,He);if(typeof pe=="object"&&pe!==null){switch(pe.$$typeof){case d:return q=q.get(pe.key===null?j:pe.key)||null,F(k,q,pe,He);case g:return q=q.get(pe.key===null?j:pe.key)||null,Q(k,q,pe,He);case G:var dt=pe._init;return pe=dt(pe._payload),ne(q,k,j,pe,He)}if(de(pe)||se(pe))return q=q.get(j)||null,fe(k,q,pe,He,null);if(typeof pe.then=="function")return ne(q,k,j,vl(pe),He);if(pe.$$typeof===O)return ne(q,k,j,rl(k,pe),He);Sl(k,pe)}return null}function tt(q,k,j,pe){for(var He=null,dt=null,Ye=k,et=k=0,gn=null;Ye!==null&&et<j.length;et++){Ye.index>et?(gn=Ye,Ye=null):gn=Ye.sibling;var Mt=ee(q,Ye,j[et],pe);if(Mt===null){Ye===null&&(Ye=gn);break}t&&Ye&&Mt.alternate===null&&n(q,Ye),k=h(Mt,k,et),dt===null?He=Mt:dt.sibling=Mt,dt=Mt,Ye=gn}if(et===j.length)return a(q,Ye),Tt&&Ka(q,et),He;if(Ye===null){for(;et<j.length;et++)Ye=me(q,j[et],pe),Ye!==null&&(k=h(Ye,k,et),dt===null?He=Ye:dt.sibling=Ye,dt=Ye);return Tt&&Ka(q,et),He}for(Ye=s(Ye);et<j.length;et++)gn=ne(Ye,q,et,j[et],pe),gn!==null&&(t&&gn.alternate!==null&&Ye.delete(gn.key===null?et:gn.key),k=h(gn,k,et),dt===null?He=gn:dt.sibling=gn,dt=gn);return t&&Ye.forEach(function(Da){return n(q,Da)}),Tt&&Ka(q,et),He}function Je(q,k,j,pe){if(j==null)throw Error(r(151));for(var He=null,dt=null,Ye=k,et=k=0,gn=null,Mt=j.next();Ye!==null&&!Mt.done;et++,Mt=j.next()){Ye.index>et?(gn=Ye,Ye=null):gn=Ye.sibling;var Da=ee(q,Ye,Mt.value,pe);if(Da===null){Ye===null&&(Ye=gn);break}t&&Ye&&Da.alternate===null&&n(q,Ye),k=h(Da,k,et),dt===null?He=Da:dt.sibling=Da,dt=Da,Ye=gn}if(Mt.done)return a(q,Ye),Tt&&Ka(q,et),He;if(Ye===null){for(;!Mt.done;et++,Mt=j.next())Mt=me(q,Mt.value,pe),Mt!==null&&(k=h(Mt,k,et),dt===null?He=Mt:dt.sibling=Mt,dt=Mt);return Tt&&Ka(q,et),He}for(Ye=s(Ye);!Mt.done;et++,Mt=j.next())Mt=ne(Ye,q,et,Mt.value,pe),Mt!==null&&(t&&Mt.alternate!==null&&Ye.delete(Mt.key===null?et:Mt.key),k=h(Mt,k,et),dt===null?He=Mt:dt.sibling=Mt,dt=Mt);return t&&Ye.forEach(function(GS){return n(q,GS)}),Tt&&Ka(q,et),He}function Nt(q,k,j,pe){if(typeof j=="object"&&j!==null&&j.type===M&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case d:e:{for(var He=j.key;k!==null;){if(k.key===He){if(He=j.type,He===M){if(k.tag===7){a(q,k.sibling),pe=f(k,j.props.children),pe.return=q,q=pe;break e}}else if(k.elementType===He||typeof He=="object"&&He!==null&&He.$$typeof===G&&tm(He)===k.type){a(q,k.sibling),pe=f(k,j.props),to(pe,j),pe.return=q,q=pe;break e}a(q,k);break}else n(q,k);k=k.sibling}j.type===M?(pe=Ya(j.props.children,q.mode,pe,j.key),pe.return=q,q=pe):(pe=tl(j.type,j.key,j.props,null,q.mode,pe),to(pe,j),pe.return=q,q=pe)}return E(q);case g:e:{for(He=j.key;k!==null;){if(k.key===He)if(k.tag===4&&k.stateNode.containerInfo===j.containerInfo&&k.stateNode.implementation===j.implementation){a(q,k.sibling),pe=f(k,j.children||[]),pe.return=q,q=pe;break e}else{a(q,k);break}else n(q,k);k=k.sibling}pe=nc(j,q.mode,pe),pe.return=q,q=pe}return E(q);case G:return He=j._init,j=He(j._payload),Nt(q,k,j,pe)}if(de(j))return tt(q,k,j,pe);if(se(j)){if(He=se(j),typeof He!="function")throw Error(r(150));return j=He.call(j),Je(q,k,j,pe)}if(typeof j.then=="function")return Nt(q,k,vl(j),pe);if(j.$$typeof===O)return Nt(q,k,rl(q,j),pe);Sl(q,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,k!==null&&k.tag===6?(a(q,k.sibling),pe=f(k,j),pe.return=q,q=pe):(a(q,k),pe=tc(j,q.mode,pe),pe.return=q,q=pe),E(q)):a(q,k)}return function(q,k,j,pe){try{eo=0;var He=Nt(q,k,j,pe);return Vr=null,He}catch(Ye){if(Ye===Ws||Ye===ol)throw Ye;var dt=Xn(29,Ye,null,q.mode);return dt.lanes=pe,dt.return=q,dt}finally{}}}var kr=nm(!0),im=nm(!1),ai=J(null),Ti=null;function ma(t){var n=t.alternate;xe(cn,cn.current&1),xe(ai,t),Ti===null&&(n===null||zr.current!==null||n.memoizedState!==null)&&(Ti=t)}function am(t){if(t.tag===22){if(xe(cn,cn.current),xe(ai,t),Ti===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Ti=t)}}else _a()}function _a(){xe(cn,cn.current),xe(ai,ai.current)}function Vi(t){ve(ai),Ti===t&&(Ti=null),ve(cn)}var cn=J(0);function xl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Af(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Pc(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:x({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Bc={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Zn(),f=da(s);f.payload=n,a!=null&&(f.callback=a),n=ha(t,f,s),n!==null&&(Kn(n,t,s),Ys(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Zn(),f=da(s);f.tag=1,f.payload=n,a!=null&&(f.callback=a),n=ha(t,f,s),n!==null&&(Kn(n,t,s),Ys(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Zn(),s=da(a);s.tag=2,n!=null&&(s.callback=n),n=ha(t,s,a),n!==null&&(Kn(n,t,a),Ys(n,t,a))}};function rm(t,n,a,s,f,h,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,h,E):n.prototype&&n.prototype.isPureReactComponent?!Is(a,s)||!Is(f,h):!0}function sm(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Bc.enqueueReplaceState(n,n.state,null)}function nr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=x({},a));for(var f in t)a[f]===void 0&&(a[f]=t[f])}return a}var yl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function om(t){yl(t)}function lm(t){console.error(t)}function um(t){yl(t)}function Ml(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function cm(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Ic(t,n,a){return a=da(a),a.tag=3,a.payload={element:null},a.callback=function(){Ml(t,n)},a}function fm(t){return t=da(t),t.tag=3,t}function dm(t,n,a,s){var f=a.type.getDerivedStateFromError;if(typeof f=="function"){var h=s.value;t.payload=function(){return f(h)},t.callback=function(){cm(n,a,s)}}var E=a.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(t.callback=function(){cm(n,a,s),typeof f!="function"&&(Ma===null?Ma=new Set([this]):Ma.add(this));var R=s.stack;this.componentDidCatch(s.value,{componentStack:R!==null?R:""})})}function G0(t,n,a,s,f){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Vs(n,a,f,!0),a=ai.current,a!==null){switch(a.tag){case 13:return Ti===null?lf():a.alternate===null&&jt===0&&(jt=3),a.flags&=-257,a.flags|=65536,a.lanes=f,s===dc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),cf(t,s,f)),!1;case 22:return a.flags|=65536,s===dc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),cf(t,s,f)),!1}throw Error(r(435,a.tag))}return cf(t,s,f),lf(),!1}if(Tt)return n=ai.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=f,s!==rc&&(t=Error(r(422),{cause:s}),Gs(ei(t,a)))):(s!==rc&&(n=Error(r(423),{cause:s}),Gs(ei(n,a))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,s=ei(s,a),f=Ic(t.stateNode,s,f),mc(t,f),jt!==4&&(jt=2)),!1;var h=Error(r(520),{cause:s});if(h=ei(h,a),lo===null?lo=[h]:lo.push(h),jt!==4&&(jt=2),n===null)return!0;s=ei(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=f&-f,a.lanes|=t,t=Ic(a.stateNode,s,t),mc(a,t),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ma===null||!Ma.has(h))))return a.flags|=65536,f&=-f,a.lanes|=f,f=fm(f),dm(f,t,a,s),mc(a,f),!1}a=a.return}while(a!==null);return!1}var hm=Error(r(461)),mn=!1;function yn(t,n,a,s){n.child=t===null?im(n,null,a,s):kr(n,t.child,a,s)}function pm(t,n,a,s,f){a=a.render;var h=n.ref;if("ref"in s){var E={};for(var R in s)R!=="ref"&&(E[R]=s[R])}else E=s;return $a(n),s=xc(t,n,a,E,h,f),R=yc(),t!==null&&!mn?(Mc(t,n,f),ki(t,n,f)):(Tt&&R&&ic(n),n.flags|=1,yn(t,n,s,f),n.child)}function mm(t,n,a,s,f){if(t===null){var h=a.type;return typeof h=="function"&&!ec(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,_m(t,n,h,s,f)):(t=tl(a.type,null,s,n,n.mode,f),t.ref=n.ref,t.return=n,n.child=t)}if(h=t.child,!Wc(t,f)){var E=h.memoizedProps;if(a=a.compare,a=a!==null?a:Is,a(E,s)&&t.ref===n.ref)return ki(t,n,f)}return n.flags|=1,t=Bi(h,s),t.ref=n.ref,t.return=n,n.child=t}function _m(t,n,a,s,f){if(t!==null){var h=t.memoizedProps;if(Is(h,s)&&t.ref===n.ref)if(mn=!1,n.pendingProps=s=h,Wc(t,f))(t.flags&131072)!==0&&(mn=!0);else return n.lanes=t.lanes,ki(t,n,f)}return zc(t,n,a,s,f)}function gm(t,n,a){var s=n.pendingProps,f=s.children,h=t!==null?t.memoizedState:null;if(s.mode==="hidden"){if((n.flags&128)!==0){if(s=h!==null?h.baseLanes|a:a,t!==null){for(f=n.child=t.child,h=0;f!==null;)h=h|f.lanes|f.childLanes,f=f.sibling;n.childLanes=h&~s}else n.childLanes=0,n.child=null;return vm(t,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&sl(n,h!==null?h.cachePool:null),h!==null?_p(n,h):gc(),am(n);else return n.lanes=n.childLanes=536870912,vm(t,n,h!==null?h.baseLanes|a:a,a)}else h!==null?(sl(n,h.cachePool),_p(n,h),_a(),n.memoizedState=null):(t!==null&&sl(n,null),gc(),_a());return yn(t,n,f,a),n.child}function vm(t,n,a,s){var f=fc();return f=f===null?null:{parent:un._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&sl(n,null),gc(),am(n),t!==null&&Vs(t,n,s,!0),null}function El(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function zc(t,n,a,s,f){return $a(n),a=xc(t,n,a,s,void 0,f),s=yc(),t!==null&&!mn?(Mc(t,n,f),ki(t,n,f)):(Tt&&s&&ic(n),n.flags|=1,yn(t,n,a,f),n.child)}function Sm(t,n,a,s,f,h){return $a(n),n.updateQueue=null,a=vp(n,s,a,f),gp(t),s=yc(),t!==null&&!mn?(Mc(t,n,h),ki(t,n,h)):(Tt&&s&&ic(n),n.flags|=1,yn(t,n,a,h),n.child)}function xm(t,n,a,s,f){if($a(n),n.stateNode===null){var h=Nr,E=a.contextType;typeof E=="object"&&E!==null&&(h=bn(E)),h=new a(s,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Bc,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=s,h.state=n.memoizedState,h.refs={},hc(n),E=a.contextType,h.context=typeof E=="object"&&E!==null?bn(E):Nr,h.state=n.memoizedState,E=a.getDerivedStateFromProps,typeof E=="function"&&(Pc(n,a,E,s),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(E=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),E!==h.state&&Bc.enqueueReplaceState(h,h.state,null),Ks(n,s,h,f),Zs(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){h=n.stateNode;var R=n.memoizedProps,F=nr(a,R);h.props=F;var Q=h.context,fe=a.contextType;E=Nr,typeof fe=="object"&&fe!==null&&(E=bn(fe));var me=a.getDerivedStateFromProps;fe=typeof me=="function"||typeof h.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,fe||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(R||Q!==E)&&sm(n,h,s,E),fa=!1;var ee=n.memoizedState;h.state=ee,Ks(n,s,h,f),Zs(),Q=n.memoizedState,R||ee!==Q||fa?(typeof me=="function"&&(Pc(n,a,me,s),Q=n.memoizedState),(F=fa||rm(n,a,F,s,ee,Q,E))?(fe||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=Q),h.props=s,h.state=Q,h.context=E,s=F):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{h=n.stateNode,pc(t,n),E=n.memoizedProps,fe=nr(a,E),h.props=fe,me=n.pendingProps,ee=h.context,Q=a.contextType,F=Nr,typeof Q=="object"&&Q!==null&&(F=bn(Q)),R=a.getDerivedStateFromProps,(Q=typeof R=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(E!==me||ee!==F)&&sm(n,h,s,F),fa=!1,ee=n.memoizedState,h.state=ee,Ks(n,s,h,f),Zs();var ne=n.memoizedState;E!==me||ee!==ne||fa||t!==null&&t.dependencies!==null&&al(t.dependencies)?(typeof R=="function"&&(Pc(n,a,R,s),ne=n.memoizedState),(fe=fa||rm(n,a,fe,s,ee,ne,F)||t!==null&&t.dependencies!==null&&al(t.dependencies))?(Q||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(s,ne,F),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(s,ne,F)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||E===t.memoizedProps&&ee===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&ee===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ne),h.props=s,h.state=ne,h.context=F,s=fe):(typeof h.componentDidUpdate!="function"||E===t.memoizedProps&&ee===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&ee===t.memoizedState||(n.flags|=1024),s=!1)}return h=s,El(t,n),s=(n.flags&128)!==0,h||s?(h=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,t!==null&&s?(n.child=kr(n,t.child,null,f),n.child=kr(n,null,a,f)):yn(t,n,a,f),n.memoizedState=h.state,t=n.child):t=ki(t,n,f),t}function ym(t,n,a,s){return Hs(),n.flags|=256,yn(t,n,a,s),n.child}var Fc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hc(t){return{baseLanes:t,cachePool:lp()}}function Gc(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ri),t}function Mm(t,n,a){var s=n.pendingProps,f=!1,h=(n.flags&128)!==0,E;if((E=h)||(E=t!==null&&t.memoizedState===null?!1:(cn.current&2)!==0),E&&(f=!0,n.flags&=-129),E=(n.flags&32)!==0,n.flags&=-33,t===null){if(Tt){if(f?ma(n):_a(),Tt){var R=Kt,F;if(F=R){e:{for(F=R,R=Ei;F.nodeType!==8;){if(!R){R=null;break e}if(F=hi(F.nextSibling),F===null){R=null;break e}}R=F}R!==null?(n.memoizedState={dehydrated:R,treeContext:Za!==null?{id:Ii,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},F=Xn(18,null,null,0),F.stateNode=R,F.return=n,n.child=F,Ln=n,Kt=null,F=!0):F=!1}F||Qa(n)}if(R=n.memoizedState,R!==null&&(R=R.dehydrated,R!==null))return Af(R)?n.lanes=32:n.lanes=536870912,null;Vi(n)}return R=s.children,s=s.fallback,f?(_a(),f=n.mode,R=Tl({mode:"hidden",children:R},f),s=Ya(s,f,a,null),R.return=n,s.return=n,R.sibling=s,n.child=R,f=n.child,f.memoizedState=Hc(a),f.childLanes=Gc(t,E,a),n.memoizedState=Fc,s):(ma(n),Vc(n,R))}if(F=t.memoizedState,F!==null&&(R=F.dehydrated,R!==null)){if(h)n.flags&256?(ma(n),n.flags&=-257,n=kc(t,n,a)):n.memoizedState!==null?(_a(),n.child=t.child,n.flags|=128,n=null):(_a(),f=s.fallback,R=n.mode,s=Tl({mode:"visible",children:s.children},R),f=Ya(f,R,a,null),f.flags|=2,s.return=n,f.return=n,s.sibling=f,n.child=s,kr(n,t.child,null,a),s=n.child,s.memoizedState=Hc(a),s.childLanes=Gc(t,E,a),n.memoizedState=Fc,n=f);else if(ma(n),Af(R)){if(E=R.nextSibling&&R.nextSibling.dataset,E)var Q=E.dgst;E=Q,s=Error(r(419)),s.stack="",s.digest=E,Gs({value:s,source:null,stack:null}),n=kc(t,n,a)}else if(mn||Vs(t,n,a,!1),E=(a&t.childLanes)!==0,mn||E){if(E=Ht,E!==null&&(s=a&-a,s=(s&42)!==0?1:it(s),s=(s&(E.suspendedLanes|a))!==0?0:s,s!==0&&s!==F.retryLane))throw F.retryLane=s,Lr(t,s),Kn(E,t,s),hm;R.data==="$?"||lf(),n=kc(t,n,a)}else R.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=F.treeContext,Kt=hi(R.nextSibling),Ln=n,Tt=!0,ja=null,Ei=!1,t!==null&&(ni[ii++]=Ii,ni[ii++]=zi,ni[ii++]=Za,Ii=t.id,zi=t.overflow,Za=n),n=Vc(n,s.children),n.flags|=4096);return n}return f?(_a(),f=s.fallback,R=n.mode,F=t.child,Q=F.sibling,s=Bi(F,{mode:"hidden",children:s.children}),s.subtreeFlags=F.subtreeFlags&65011712,Q!==null?f=Bi(Q,f):(f=Ya(f,R,a,null),f.flags|=2),f.return=n,s.return=n,s.sibling=f,n.child=s,s=f,f=n.child,R=t.child.memoizedState,R===null?R=Hc(a):(F=R.cachePool,F!==null?(Q=un._currentValue,F=F.parent!==Q?{parent:Q,pool:Q}:F):F=lp(),R={baseLanes:R.baseLanes|a,cachePool:F}),f.memoizedState=R,f.childLanes=Gc(t,E,a),n.memoizedState=Fc,s):(ma(n),a=t.child,t=a.sibling,a=Bi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(E=n.deletions,E===null?(n.deletions=[t],n.flags|=16):E.push(t)),n.child=a,n.memoizedState=null,a)}function Vc(t,n){return n=Tl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Tl(t,n){return t=Xn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function kc(t,n,a){return kr(n,t.child,null,a),t=Vc(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Em(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),oc(t.return,n,a)}function Xc(t,n,a,s,f){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:f}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=s,h.tail=a,h.tailMode=f)}function Tm(t,n,a){var s=n.pendingProps,f=s.revealOrder,h=s.tail;if(yn(t,n,s.children,a),s=cn.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Em(t,a,n);else if(t.tag===19)Em(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}s&=1}switch(xe(cn,s),f){case"forwards":for(a=n.child,f=null;a!==null;)t=a.alternate,t!==null&&xl(t)===null&&(f=a),a=a.sibling;a=f,a===null?(f=n.child,n.child=null):(f=a.sibling,a.sibling=null),Xc(n,!1,f,a,h);break;case"backwards":for(a=null,f=n.child,n.child=null;f!==null;){if(t=f.alternate,t!==null&&xl(t)===null){n.child=f;break}t=f.sibling,f.sibling=a,a=f,f=t}Xc(n,!0,a,null,h);break;case"together":Xc(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ki(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ya|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Vs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Bi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Bi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Wc(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&al(t)))}function V0(t,n,a){switch(n.tag){case 3:Oe(n,n.stateNode.containerInfo),ca(n,un,t.memoizedState.cache),Hs();break;case 27:case 5:nt(n);break;case 4:Oe(n,n.stateNode.containerInfo);break;case 10:ca(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ma(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Mm(t,n,a):(ma(n),t=ki(t,n,a),t!==null?t.sibling:null);ma(n);break;case 19:var f=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Vs(t,n,a,!1),s=(a&n.childLanes)!==0),f){if(s)return Tm(t,n,a);n.flags|=128}if(f=n.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),xe(cn,cn.current),s)break;return null;case 22:case 23:return n.lanes=0,gm(t,n,a);case 24:ca(n,un,t.memoizedState.cache)}return ki(t,n,a)}function Am(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)mn=!0;else{if(!Wc(t,a)&&(n.flags&128)===0)return mn=!1,V0(t,n,a);mn=(t.flags&131072)!==0}else mn=!1,Tt&&(n.flags&1048576)!==0&&tp(n,il,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var s=n.elementType,f=s._init;if(s=f(s._payload),n.type=s,typeof s=="function")ec(s)?(t=nr(s,t),n.tag=1,n=xm(null,n,s,t,a)):(n.tag=0,n=zc(null,n,s,t,a));else{if(s!=null){if(f=s.$$typeof,f===A){n.tag=11,n=pm(null,n,s,t,a);break e}else if(f===B){n.tag=14,n=mm(null,n,s,t,a);break e}}throw n=ue(s)||s,Error(r(306,n,""))}}return n;case 0:return zc(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,f=nr(s,n.pendingProps),xm(t,n,s,f,a);case 3:e:{if(Oe(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var h=n.memoizedState;f=h.element,pc(t,n),Ks(n,s,null,a);var E=n.memoizedState;if(s=E.cache,ca(n,un,s),s!==h.cache&&lc(n,[un],a,!0),Zs(),s=E.element,h.isDehydrated)if(h={element:s,isDehydrated:!1,cache:E.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=ym(t,n,s,a);break e}else if(s!==f){f=ei(Error(r(424)),n),Gs(f),n=ym(t,n,s,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Kt=hi(t.firstChild),Ln=n,Tt=!0,ja=null,Ei=!0,a=im(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Hs(),s===f){n=ki(t,n,a);break e}yn(t,n,s,a)}n=n.child}return n;case 26:return El(t,n),t===null?(a=C_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Tt||(a=n.type,t=n.pendingProps,s=zl(he.current).createElement(a),s[ln]=n,s[Yt]=t,En(s,a,t),nn(s),n.stateNode=s):n.memoizedState=C_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return nt(n),t===null&&Tt&&(s=n.stateNode=b_(n.type,n.pendingProps,he.current),Ln=n,Ei=!0,f=Kt,Aa(n.type)?(bf=f,Kt=hi(s.firstChild)):Kt=f),yn(t,n,n.pendingProps.children,a),El(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Tt&&((f=s=Kt)&&(s=_S(s,n.type,n.pendingProps,Ei),s!==null?(n.stateNode=s,Ln=n,Kt=hi(s.firstChild),Ei=!1,f=!0):f=!1),f||Qa(n)),nt(n),f=n.type,h=n.pendingProps,E=t!==null?t.memoizedProps:null,s=h.children,Mf(f,h)?s=null:E!==null&&Mf(f,E)&&(n.flags|=32),n.memoizedState!==null&&(f=xc(t,n,O0,null,null,a),vo._currentValue=f),El(t,n),yn(t,n,s,a),n.child;case 6:return t===null&&Tt&&((t=a=Kt)&&(a=gS(a,n.pendingProps,Ei),a!==null?(n.stateNode=a,Ln=n,Kt=null,t=!0):t=!1),t||Qa(n)),null;case 13:return Mm(t,n,a);case 4:return Oe(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=kr(n,null,s,a):yn(t,n,s,a),n.child;case 11:return pm(t,n,n.type,n.pendingProps,a);case 7:return yn(t,n,n.pendingProps,a),n.child;case 8:return yn(t,n,n.pendingProps.children,a),n.child;case 12:return yn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,ca(n,n.type,s.value),yn(t,n,s.children,a),n.child;case 9:return f=n.type._context,s=n.pendingProps.children,$a(n),f=bn(f),s=s(f),n.flags|=1,yn(t,n,s,a),n.child;case 14:return mm(t,n,n.type,n.pendingProps,a);case 15:return _m(t,n,n.type,n.pendingProps,a);case 19:return Tm(t,n,a);case 31:return s=n.pendingProps,a=n.mode,s={mode:s.mode,children:s.children},t===null?(a=Tl(s,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Bi(t.child,s),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return gm(t,n,a);case 24:return $a(n),s=bn(un),t===null?(f=fc(),f===null&&(f=Ht,h=uc(),f.pooledCache=h,h.refCount++,h!==null&&(f.pooledCacheLanes|=a),f=h),n.memoizedState={parent:s,cache:f},hc(n),ca(n,un,f)):((t.lanes&a)!==0&&(pc(t,n),Ks(n,null,null,a),Zs()),f=t.memoizedState,h=n.memoizedState,f.parent!==s?(f={parent:s,cache:s},n.memoizedState=f,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=f),ca(n,un,s)):(s=h.cache,ca(n,un,s),s!==f.cache&&lc(n,[un],a,!0))),yn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Xi(t){t.flags|=4}function bm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!O_(n)){if(n=ai.current,n!==null&&((vt&4194048)===vt?Ti!==null:(vt&62914560)!==vt&&(vt&536870912)===0||n!==Ti))throw qs=dc,up;t.flags|=8192}}function Al(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ae():536870912,t.lanes|=n,Yr|=n)}function no(t,n){if(!Tt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function qt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var f=t.child;f!==null;)a|=f.lanes|f.childLanes,s|=f.subtreeFlags&65011712,s|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)a|=f.lanes|f.childLanes,s|=f.subtreeFlags,s|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function k0(t,n,a){var s=n.pendingProps;switch(ac(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(n),null;case 1:return qt(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Hi(un),qe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Fs(n)?Xi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ap())),qt(n),null;case 26:return a=n.memoizedState,t===null?(Xi(n),a!==null?(qt(n),bm(n,a)):(qt(n),n.flags&=-16777217)):a?a!==t.memoizedState?(Xi(n),qt(n),bm(n,a)):(qt(n),n.flags&=-16777217):(t.memoizedProps!==s&&Xi(n),qt(n),n.flags&=-16777217),null;case 27:zt(n),a=he.current;var f=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Xi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return qt(n),null}t=we.current,Fs(n)?np(n):(t=b_(f,s,a),n.stateNode=t,Xi(n))}return qt(n),null;case 5:if(zt(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Xi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return qt(n),null}if(t=we.current,Fs(n))np(n);else{switch(f=zl(he.current),t){case 1:t=f.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=f.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=f.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=f.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=f.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof s.is=="string"?f.createElement("select",{is:s.is}):f.createElement("select"),s.multiple?t.multiple=!0:s.size&&(t.size=s.size);break;default:t=typeof s.is=="string"?f.createElement(a,{is:s.is}):f.createElement(a)}}t[ln]=n,t[Yt]=s;e:for(f=n.child;f!==null;){if(f.tag===5||f.tag===6)t.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}n.stateNode=t;e:switch(En(t,a,s),a){case"button":case"input":case"select":case"textarea":t=!!s.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Xi(n)}}return qt(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Xi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=he.current,Fs(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,f=Ln,f!==null)switch(f.tag){case 27:case 5:s=f.memoizedProps}t[ln]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||S_(t.nodeValue,a)),t||Qa(n)}else t=zl(t).createTextNode(s),t[ln]=n,n.stateNode=t}return qt(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=Fs(n),s!==null&&s.dehydrated!==null){if(t===null){if(!f)throw Error(r(318));if(f=n.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[ln]=n}else Hs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qt(n),f=!1}else f=ap(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return n.flags&256?(Vi(n),n):(Vi(n),null)}if(Vi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,t=t!==null&&t.memoizedState!==null,a){s=n.child,f=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(f=s.alternate.memoizedState.cachePool.pool);var h=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(h=s.memoizedState.cachePool.pool),h!==f&&(s.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),Al(n,n.updateQueue),qt(n),null;case 4:return qe(),t===null&&gf(n.stateNode.containerInfo),qt(n),null;case 10:return Hi(n.type),qt(n),null;case 19:if(ve(cn),f=n.memoizedState,f===null)return qt(n),null;if(s=(n.flags&128)!==0,h=f.rendering,h===null)if(s)no(f,!1);else{if(jt!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(h=xl(t),h!==null){for(n.flags|=128,no(f,!1),t=h.updateQueue,n.updateQueue=t,Al(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)ep(a,t),a=a.sibling;return xe(cn,cn.current&1|2),n.child}t=t.sibling}f.tail!==null&&ze()>wl&&(n.flags|=128,s=!0,no(f,!1),n.lanes=4194304)}else{if(!s)if(t=xl(h),t!==null){if(n.flags|=128,s=!0,t=t.updateQueue,n.updateQueue=t,Al(n,t),no(f,!0),f.tail===null&&f.tailMode==="hidden"&&!h.alternate&&!Tt)return qt(n),null}else 2*ze()-f.renderingStartTime>wl&&a!==536870912&&(n.flags|=128,s=!0,no(f,!1),n.lanes=4194304);f.isBackwards?(h.sibling=n.child,n.child=h):(t=f.last,t!==null?t.sibling=h:n.child=h,f.last=h)}return f.tail!==null?(n=f.tail,f.rendering=n,f.tail=n.sibling,f.renderingStartTime=ze(),n.sibling=null,t=cn.current,xe(cn,s?t&1|2:t&1),n):(qt(n),null);case 22:case 23:return Vi(n),vc(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(qt(n),n.subtreeFlags&6&&(n.flags|=8192)):qt(n),a=n.updateQueue,a!==null&&Al(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&ve(er),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Hi(un),qt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function X0(t,n){switch(ac(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Hi(un),qe(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return zt(n),null;case 13:if(Vi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Hs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return ve(cn),null;case 4:return qe(),null;case 10:return Hi(n.type),null;case 22:case 23:return Vi(n),vc(),t!==null&&ve(er),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Hi(un),null;case 25:return null;default:return null}}function Rm(t,n){switch(ac(n),n.tag){case 3:Hi(un),qe();break;case 26:case 27:case 5:zt(n);break;case 4:qe();break;case 13:Vi(n);break;case 19:ve(cn);break;case 10:Hi(n.type);break;case 22:case 23:Vi(n),vc(),t!==null&&ve(er);break;case 24:Hi(un)}}function io(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var f=s.next;a=f;do{if((a.tag&t)===t){s=void 0;var h=a.create,E=a.inst;s=h(),E.destroy=s}a=a.next}while(a!==f)}}catch(R){It(n,n.return,R)}}function ga(t,n,a){try{var s=n.updateQueue,f=s!==null?s.lastEffect:null;if(f!==null){var h=f.next;s=h;do{if((s.tag&t)===t){var E=s.inst,R=E.destroy;if(R!==void 0){E.destroy=void 0,f=n;var F=a,Q=R;try{Q()}catch(fe){It(f,F,fe)}}}s=s.next}while(s!==h)}}catch(fe){It(n,n.return,fe)}}function wm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{mp(n,a)}catch(s){It(t,t.return,s)}}}function Cm(t,n,a){a.props=nr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){It(t,n,s)}}function ao(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(f){It(t,n,f)}}function Ai(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(f){It(t,n,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(f){It(t,n,f)}else a.current=null}function Dm(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(f){It(t,t.return,f)}}function qc(t,n,a){try{var s=t.stateNode;fS(s,t.type,a,n),s[Yt]=n}catch(f){It(t,t.return,f)}}function Um(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Aa(t.type)||t.tag===4}function Yc(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Um(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Aa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zc(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Il));else if(s!==4&&(s===27&&Aa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Zc(t,n,a),t=t.sibling;t!==null;)Zc(t,n,a),t=t.sibling}function bl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Aa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(bl(t,n,a),t=t.sibling;t!==null;)bl(t,n,a),t=t.sibling}function Lm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,f=n.attributes;f.length;)n.removeAttributeNode(f[0]);En(n,s,a),n[ln]=t,n[Yt]=a}catch(h){It(t,t.return,h)}}var Wi=!1,en=!1,Kc=!1,Nm=typeof WeakSet=="function"?WeakSet:Set,_n=null;function W0(t,n){if(t=t.containerInfo,xf=Xl,t=Xh(t),Yu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var f=s.anchorOffset,h=s.focusNode;s=s.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var E=0,R=-1,F=-1,Q=0,fe=0,me=t,ee=null;t:for(;;){for(var ne;me!==a||f!==0&&me.nodeType!==3||(R=E+f),me!==h||s!==0&&me.nodeType!==3||(F=E+s),me.nodeType===3&&(E+=me.nodeValue.length),(ne=me.firstChild)!==null;)ee=me,me=ne;for(;;){if(me===t)break t;if(ee===a&&++Q===f&&(R=E),ee===h&&++fe===s&&(F=E),(ne=me.nextSibling)!==null)break;me=ee,ee=me.parentNode}me=ne}a=R===-1||F===-1?null:{start:R,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(yf={focusedElem:t,selectionRange:a},Xl=!1,_n=n;_n!==null;)if(n=_n,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,_n=t;else for(;_n!==null;){switch(n=_n,h=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,a=n,f=h.memoizedProps,h=h.memoizedState,s=a.stateNode;try{var tt=nr(a.type,f,a.elementType===a.type);t=s.getSnapshotBeforeUpdate(tt,h),s.__reactInternalSnapshotBeforeUpdate=t}catch(Je){It(a,a.return,Je)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Tf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Tf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,_n=t;break}_n=n.return}}function Om(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:va(t,a),s&4&&io(5,a);break;case 1:if(va(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(E){It(a,a.return,E)}else{var f=nr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(f,n,t.__reactInternalSnapshotBeforeUpdate)}catch(E){It(a,a.return,E)}}s&64&&wm(a),s&512&&ao(a,a.return);break;case 3:if(va(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{mp(t,n)}catch(E){It(a,a.return,E)}}break;case 27:n===null&&s&4&&Lm(a);case 26:case 5:va(t,a),n===null&&s&4&&Dm(a),s&512&&ao(a,a.return);break;case 12:va(t,a);break;case 13:va(t,a),s&4&&Im(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=eS.bind(null,a),vS(t,a))));break;case 22:if(s=a.memoizedState!==null||Wi,!s){n=n!==null&&n.memoizedState!==null||en,f=Wi;var h=en;Wi=s,(en=n)&&!h?Sa(t,a,(a.subtreeFlags&8772)!==0):va(t,a),Wi=f,en=h}break;case 30:break;default:va(t,a)}}function Pm(t){var n=t.alternate;n!==null&&(t.alternate=null,Pm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Tr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var kt=null,zn=!1;function qi(t,n,a){for(a=a.child;a!==null;)Bm(t,n,a),a=a.sibling}function Bm(t,n,a){if(ge&&typeof ge.onCommitFiberUnmount=="function")try{ge.onCommitFiberUnmount(ce,a)}catch{}switch(a.tag){case 26:en||Ai(a,n),qi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:en||Ai(a,n);var s=kt,f=zn;Aa(a.type)&&(kt=a.stateNode,zn=!1),qi(t,n,a),po(a.stateNode),kt=s,zn=f;break;case 5:en||Ai(a,n);case 6:if(s=kt,f=zn,kt=null,qi(t,n,a),kt=s,zn=f,kt!==null)if(zn)try{(kt.nodeType===9?kt.body:kt.nodeName==="HTML"?kt.ownerDocument.body:kt).removeChild(a.stateNode)}catch(h){It(a,n,h)}else try{kt.removeChild(a.stateNode)}catch(h){It(a,n,h)}break;case 18:kt!==null&&(zn?(t=kt,T_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Mo(t)):T_(kt,a.stateNode));break;case 4:s=kt,f=zn,kt=a.stateNode.containerInfo,zn=!0,qi(t,n,a),kt=s,zn=f;break;case 0:case 11:case 14:case 15:en||ga(2,a,n),en||ga(4,a,n),qi(t,n,a);break;case 1:en||(Ai(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Cm(a,n,s)),qi(t,n,a);break;case 21:qi(t,n,a);break;case 22:en=(s=en)||a.memoizedState!==null,qi(t,n,a),en=s;break;default:qi(t,n,a)}}function Im(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Mo(t)}catch(a){It(n,n.return,a)}}function q0(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Nm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Nm),n;default:throw Error(r(435,t.tag))}}function jc(t,n){var a=q0(t);n.forEach(function(s){var f=tS.bind(null,t,s);a.has(s)||(a.add(s),s.then(f,f))})}function Wn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var f=a[s],h=t,E=n,R=E;e:for(;R!==null;){switch(R.tag){case 27:if(Aa(R.type)){kt=R.stateNode,zn=!1;break e}break;case 5:kt=R.stateNode,zn=!1;break e;case 3:case 4:kt=R.stateNode.containerInfo,zn=!0;break e}R=R.return}if(kt===null)throw Error(r(160));Bm(h,E,f),kt=null,zn=!1,h=f.alternate,h!==null&&(h.return=null),f.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)zm(n,t),n=n.sibling}var di=null;function zm(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Wn(n,t),qn(t),s&4&&(ga(3,t,t.return),io(3,t),ga(5,t,t.return));break;case 1:Wn(n,t),qn(t),s&512&&(en||a===null||Ai(a,a.return)),s&64&&Wi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var f=di;if(Wn(n,t),qn(t),s&512&&(en||a===null||Ai(a,a.return)),s&4){var h=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){e:{s=t.type,a=t.memoizedProps,f=f.ownerDocument||f;t:switch(s){case"title":h=f.getElementsByTagName("title")[0],(!h||h[Mi]||h[ln]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=f.createElement(s),f.head.insertBefore(h,f.querySelector("head > title"))),En(h,s,a),h[ln]=t,nn(h),s=h;break e;case"link":var E=L_("link","href",f).get(s+(a.href||""));if(E){for(var R=0;R<E.length;R++)if(h=E[R],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){E.splice(R,1);break t}}h=f.createElement(s),En(h,s,a),f.head.appendChild(h);break;case"meta":if(E=L_("meta","content",f).get(s+(a.content||""))){for(R=0;R<E.length;R++)if(h=E[R],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){E.splice(R,1);break t}}h=f.createElement(s),En(h,s,a),f.head.appendChild(h);break;default:throw Error(r(468,s))}h[ln]=t,nn(h),s=h}t.stateNode=s}else N_(f,t.type,t.stateNode);else t.stateNode=U_(f,s,t.memoizedProps);else h!==s?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,s===null?N_(f,t.type,t.stateNode):U_(f,s,t.memoizedProps)):s===null&&t.stateNode!==null&&qc(t,t.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,t),qn(t),s&512&&(en||a===null||Ai(a,a.return)),a!==null&&s&4&&qc(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,t),qn(t),s&512&&(en||a===null||Ai(a,a.return)),t.flags&32){f=t.stateNode;try{Pn(f,"")}catch(ne){It(t,t.return,ne)}}s&4&&t.stateNode!=null&&(f=t.memoizedProps,qc(t,f,a!==null?a.memoizedProps:f)),s&1024&&(Kc=!0);break;case 6:if(Wn(n,t),qn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(ne){It(t,t.return,ne)}}break;case 3:if(Gl=null,f=di,di=Fl(n.containerInfo),Wn(n,t),di=f,qn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{Mo(n.containerInfo)}catch(ne){It(t,t.return,ne)}Kc&&(Kc=!1,Fm(t));break;case 4:s=di,di=Fl(t.stateNode.containerInfo),Wn(n,t),qn(t),di=s;break;case 12:Wn(n,t),qn(t);break;case 13:Wn(n,t),qn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(nf=ze()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,jc(t,s)));break;case 22:f=t.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,Q=Wi,fe=en;if(Wi=Q||f,en=fe||F,Wn(n,t),en=fe,Wi=Q,qn(t),s&8192)e:for(n=t.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,f&&(a===null||F||Wi||en||ir(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(h=F.stateNode,f)E=h.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{R=F.stateNode;var me=F.memoizedProps.style,ee=me!=null&&me.hasOwnProperty("display")?me.display:null;R.style.display=ee==null||typeof ee=="boolean"?"":(""+ee).trim()}}catch(ne){It(F,F.return,ne)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=f?"":F.memoizedProps}catch(ne){It(F,F.return,ne)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,jc(t,a))));break;case 19:Wn(n,t),qn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,jc(t,s)));break;case 30:break;case 21:break;default:Wn(n,t),qn(t)}}function qn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(Um(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var f=a.stateNode,h=Yc(t);bl(t,h,f);break;case 5:var E=a.stateNode;a.flags&32&&(Pn(E,""),a.flags&=-33);var R=Yc(t);bl(t,R,E);break;case 3:case 4:var F=a.stateNode.containerInfo,Q=Yc(t);Zc(t,Q,F);break;default:throw Error(r(161))}}catch(fe){It(t,t.return,fe)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Fm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Fm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function va(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Om(t,n.alternate,n),n=n.sibling}function ir(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ga(4,n,n.return),ir(n);break;case 1:Ai(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Cm(n,n.return,a),ir(n);break;case 27:po(n.stateNode);case 26:case 5:Ai(n,n.return),ir(n);break;case 22:n.memoizedState===null&&ir(n);break;case 30:ir(n);break;default:ir(n)}t=t.sibling}}function Sa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,f=t,h=n,E=h.flags;switch(h.tag){case 0:case 11:case 15:Sa(f,h,a),io(4,h);break;case 1:if(Sa(f,h,a),s=h,f=s.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(Q){It(s,s.return,Q)}if(s=h,f=s.updateQueue,f!==null){var R=s.stateNode;try{var F=f.shared.hiddenCallbacks;if(F!==null)for(f.shared.hiddenCallbacks=null,f=0;f<F.length;f++)pp(F[f],R)}catch(Q){It(s,s.return,Q)}}a&&E&64&&wm(h),ao(h,h.return);break;case 27:Lm(h);case 26:case 5:Sa(f,h,a),a&&s===null&&E&4&&Dm(h),ao(h,h.return);break;case 12:Sa(f,h,a);break;case 13:Sa(f,h,a),a&&E&4&&Im(f,h);break;case 22:h.memoizedState===null&&Sa(f,h,a),ao(h,h.return);break;case 30:break;default:Sa(f,h,a)}n=n.sibling}}function Qc(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&ks(a))}function Jc(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ks(t))}function bi(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Hm(t,n,a,s),n=n.sibling}function Hm(t,n,a,s){var f=n.flags;switch(n.tag){case 0:case 11:case 15:bi(t,n,a,s),f&2048&&io(9,n);break;case 1:bi(t,n,a,s);break;case 3:bi(t,n,a,s),f&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ks(t)));break;case 12:if(f&2048){bi(t,n,a,s),t=n.stateNode;try{var h=n.memoizedProps,E=h.id,R=h.onPostCommit;typeof R=="function"&&R(E,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(F){It(n,n.return,F)}}else bi(t,n,a,s);break;case 13:bi(t,n,a,s);break;case 23:break;case 22:h=n.stateNode,E=n.alternate,n.memoizedState!==null?h._visibility&2?bi(t,n,a,s):ro(t,n):h._visibility&2?bi(t,n,a,s):(h._visibility|=2,Xr(t,n,a,s,(n.subtreeFlags&10256)!==0)),f&2048&&Qc(E,n);break;case 24:bi(t,n,a,s),f&2048&&Jc(n.alternate,n);break;default:bi(t,n,a,s)}}function Xr(t,n,a,s,f){for(f=f&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var h=t,E=n,R=a,F=s,Q=E.flags;switch(E.tag){case 0:case 11:case 15:Xr(h,E,R,F,f),io(8,E);break;case 23:break;case 22:var fe=E.stateNode;E.memoizedState!==null?fe._visibility&2?Xr(h,E,R,F,f):ro(h,E):(fe._visibility|=2,Xr(h,E,R,F,f)),f&&Q&2048&&Qc(E.alternate,E);break;case 24:Xr(h,E,R,F,f),f&&Q&2048&&Jc(E.alternate,E);break;default:Xr(h,E,R,F,f)}n=n.sibling}}function ro(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,f=s.flags;switch(s.tag){case 22:ro(a,s),f&2048&&Qc(s.alternate,s);break;case 24:ro(a,s),f&2048&&Jc(s.alternate,s);break;default:ro(a,s)}n=n.sibling}}var so=8192;function Wr(t){if(t.subtreeFlags&so)for(t=t.child;t!==null;)Gm(t),t=t.sibling}function Gm(t){switch(t.tag){case 26:Wr(t),t.flags&so&&t.memoizedState!==null&&US(di,t.memoizedState,t.memoizedProps);break;case 5:Wr(t);break;case 3:case 4:var n=di;di=Fl(t.stateNode.containerInfo),Wr(t),di=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=so,so=16777216,Wr(t),so=n):Wr(t));break;default:Wr(t)}}function Vm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function oo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];_n=s,Xm(s,t)}Vm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)km(t),t=t.sibling}function km(t){switch(t.tag){case 0:case 11:case 15:oo(t),t.flags&2048&&ga(9,t,t.return);break;case 3:oo(t);break;case 12:oo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Rl(t)):oo(t);break;default:oo(t)}}function Rl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];_n=s,Xm(s,t)}Vm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ga(8,n,n.return),Rl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Rl(n));break;default:Rl(n)}t=t.sibling}}function Xm(t,n){for(;_n!==null;){var a=_n;switch(a.tag){case 0:case 11:case 15:ga(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:ks(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,_n=s;else e:for(a=t;_n!==null;){s=_n;var f=s.sibling,h=s.return;if(Pm(s),s===a){_n=null;break e}if(f!==null){f.return=h,_n=f;break e}_n=h}}}var Y0={getCacheForType:function(t){var n=bn(un),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},Z0=typeof WeakMap=="function"?WeakMap:Map,Rt=0,Ht=null,mt=null,vt=0,wt=0,Yn=null,xa=!1,qr=!1,$c=!1,Yi=0,jt=0,ya=0,ar=0,ef=0,ri=0,Yr=0,lo=null,Fn=null,tf=!1,nf=0,wl=1/0,Cl=null,Ma=null,Mn=0,Ea=null,Zr=null,Kr=0,af=0,rf=null,Wm=null,uo=0,sf=null;function Zn(){if((Rt&2)!==0&&vt!==0)return vt&-vt;if(H.T!==null){var t=Br;return t!==0?t:hf()}return xt()}function qm(){ri===0&&(ri=(vt&536870912)===0||Tt?X():536870912);var t=ai.current;return t!==null&&(t.flags|=32),ri}function Kn(t,n,a){(t===Ht&&(wt===2||wt===9)||t.cancelPendingCommit!==null)&&(jr(t,0),Ta(t,vt,ri,!1)),Be(t,a),((Rt&2)===0||t!==Ht)&&(t===Ht&&((Rt&2)===0&&(ar|=a),jt===4&&Ta(t,vt,ri,!1)),Ri(t))}function Ym(t,n,a){if((Rt&6)!==0)throw Error(r(327));var s=!a&&(n&124)===0&&(n&t.expiredLanes)===0||Ce(t,n),f=s?Q0(t,n):uf(t,n,!0),h=s;do{if(f===0){qr&&!s&&Ta(t,n,0,!1);break}else{if(a=t.current.alternate,h&&!K0(a)){f=uf(t,n,!1),h=!1;continue}if(f===2){if(h=n,t.errorRecoveryDisabledLanes&h)var E=0;else E=t.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){n=E;e:{var R=t;f=lo;var F=R.current.memoizedState.isDehydrated;if(F&&(jr(R,E).flags|=256),E=uf(R,E,!1),E!==2){if($c&&!F){R.errorRecoveryDisabledLanes|=h,ar|=h,f=4;break e}h=Fn,Fn=f,h!==null&&(Fn===null?Fn=h:Fn.push.apply(Fn,h))}f=E}if(h=!1,f!==2)continue}}if(f===1){jr(t,0),Ta(t,n,0,!0);break}e:{switch(s=t,h=f,h){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ta(s,n,ri,!xa);break e;case 2:Fn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(f=nf+300-ze(),10<f)){if(Ta(s,n,ri,!xa),Ve(s,0,!0)!==0)break e;s.timeoutHandle=M_(Zm.bind(null,s,a,Fn,Cl,tf,n,ri,ar,Yr,xa,h,2,-0,0),f);break e}Zm(s,a,Fn,Cl,tf,n,ri,ar,Yr,xa,h,0,-0,0)}}break}while(!0);Ri(t)}function Zm(t,n,a,s,f,h,E,R,F,Q,fe,me,ee,ne){if(t.timeoutHandle=-1,me=n.subtreeFlags,(me&8192||(me&16785408)===16785408)&&(go={stylesheets:null,count:0,unsuspend:DS},Gm(n),me=LS(),me!==null)){t.cancelPendingCommit=me(t_.bind(null,t,n,h,a,s,f,E,R,F,fe,1,ee,ne)),Ta(t,h,E,!Q);return}t_(t,n,h,a,s,f,E,R,F)}function K0(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var f=a[s],h=f.getSnapshot;f=f.value;try{if(!kn(h(),f))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ta(t,n,a,s){n&=~ef,n&=~ar,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var f=n;0<f;){var h=31-Pe(f),E=1<<h;s[h]=-1,f&=~E}a!==0&&_e(t,a,n)}function Dl(){return(Rt&6)===0?(co(0),!1):!0}function of(){if(mt!==null){if(wt===0)var t=mt.return;else t=mt,Fi=Ja=null,Ec(t),Vr=null,eo=0,t=mt;for(;t!==null;)Rm(t.alternate,t),t=t.return;mt=null}}function jr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,hS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),of(),Ht=t,mt=a=Bi(t.current,null),vt=n,wt=0,Yn=null,xa=!1,qr=Ce(t,n),$c=!1,Yr=ri=ef=ar=ya=jt=0,Fn=lo=null,tf=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var f=31-Pe(s),h=1<<f;n|=t[f],s&=~h}return Yi=n,Jo(),a}function Km(t,n){ft=null,H.H=gl,n===Ws||n===ol?(n=dp(),wt=3):n===up?(n=dp(),wt=4):wt=n===hm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Yn=n,mt===null&&(jt=1,Ml(t,ei(n,t.current)))}function jm(){var t=H.H;return H.H=gl,t===null?gl:t}function Qm(){var t=H.A;return H.A=Y0,t}function lf(){jt=4,xa||(vt&4194048)!==vt&&ai.current!==null||(qr=!0),(ya&134217727)===0&&(ar&134217727)===0||Ht===null||Ta(Ht,vt,ri,!1)}function uf(t,n,a){var s=Rt;Rt|=2;var f=jm(),h=Qm();(Ht!==t||vt!==n)&&(Cl=null,jr(t,n)),n=!1;var E=jt;e:do try{if(wt!==0&&mt!==null){var R=mt,F=Yn;switch(wt){case 8:of(),E=6;break e;case 3:case 2:case 9:case 6:ai.current===null&&(n=!0);var Q=wt;if(wt=0,Yn=null,Qr(t,R,F,Q),a&&qr){E=0;break e}break;default:Q=wt,wt=0,Yn=null,Qr(t,R,F,Q)}}j0(),E=jt;break}catch(fe){Km(t,fe)}while(!0);return n&&t.shellSuspendCounter++,Fi=Ja=null,Rt=s,H.H=f,H.A=h,mt===null&&(Ht=null,vt=0,Jo()),E}function j0(){for(;mt!==null;)Jm(mt)}function Q0(t,n){var a=Rt;Rt|=2;var s=jm(),f=Qm();Ht!==t||vt!==n?(Cl=null,wl=ze()+500,jr(t,n)):qr=Ce(t,n);e:do try{if(wt!==0&&mt!==null){n=mt;var h=Yn;t:switch(wt){case 1:wt=0,Yn=null,Qr(t,n,h,1);break;case 2:case 9:if(cp(h)){wt=0,Yn=null,$m(n);break}n=function(){wt!==2&&wt!==9||Ht!==t||(wt=7),Ri(t)},h.then(n,n);break e;case 3:wt=7;break e;case 4:wt=5;break e;case 7:cp(h)?(wt=0,Yn=null,$m(n)):(wt=0,Yn=null,Qr(t,n,h,7));break;case 5:var E=null;switch(mt.tag){case 26:E=mt.memoizedState;case 5:case 27:var R=mt;if(!E||O_(E)){wt=0,Yn=null;var F=R.sibling;if(F!==null)mt=F;else{var Q=R.return;Q!==null?(mt=Q,Ul(Q)):mt=null}break t}}wt=0,Yn=null,Qr(t,n,h,5);break;case 6:wt=0,Yn=null,Qr(t,n,h,6);break;case 8:of(),jt=6;break e;default:throw Error(r(462))}}J0();break}catch(fe){Km(t,fe)}while(!0);return Fi=Ja=null,H.H=s,H.A=f,Rt=a,mt!==null?0:(Ht=null,vt=0,Jo(),jt)}function J0(){for(;mt!==null&&!je();)Jm(mt)}function Jm(t){var n=Am(t.alternate,t,Yi);t.memoizedProps=t.pendingProps,n===null?Ul(t):mt=n}function $m(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Sm(a,n,n.pendingProps,n.type,void 0,vt);break;case 11:n=Sm(a,n,n.pendingProps,n.type.render,n.ref,vt);break;case 5:Ec(n);default:Rm(a,n),n=mt=ep(n,Yi),n=Am(a,n,Yi)}t.memoizedProps=t.pendingProps,n===null?Ul(t):mt=n}function Qr(t,n,a,s){Fi=Ja=null,Ec(n),Vr=null,eo=0;var f=n.return;try{if(G0(t,f,n,a,vt)){jt=1,Ml(t,ei(a,t.current)),mt=null;return}}catch(h){if(f!==null)throw mt=f,h;jt=1,Ml(t,ei(a,t.current)),mt=null;return}n.flags&32768?(Tt||s===1?t=!0:qr||(vt&536870912)!==0?t=!1:(xa=t=!0,(s===2||s===9||s===3||s===6)&&(s=ai.current,s!==null&&s.tag===13&&(s.flags|=16384))),e_(n,t)):Ul(n)}function Ul(t){var n=t;do{if((n.flags&32768)!==0){e_(n,xa);return}t=n.return;var a=k0(n.alternate,n,Yi);if(a!==null){mt=a;return}if(n=n.sibling,n!==null){mt=n;return}mt=n=t}while(n!==null);jt===0&&(jt=5)}function e_(t,n){do{var a=X0(t.alternate,t);if(a!==null){a.flags&=32767,mt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){mt=t;return}mt=t=a}while(t!==null);jt=6,mt=null}function t_(t,n,a,s,f,h,E,R,F){t.cancelPendingCommit=null;do Ll();while(Mn!==0);if((Rt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(h=n.lanes|n.childLanes,h|=Ju,Ee(t,a,h,E,R,F),t===Ht&&(mt=Ht=null,vt=0),Zr=n,Ea=t,Kr=a,af=h,rf=f,Wm=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,nS(Xt,function(){return s_(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=H.T,H.T=null,f=K.p,K.p=2,E=Rt,Rt|=4;try{W0(t,n,a)}finally{Rt=E,K.p=f,H.T=s}}Mn=1,n_(),i_(),a_()}}function n_(){if(Mn===1){Mn=0;var t=Ea,n=Zr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=H.T,H.T=null;var s=K.p;K.p=2;var f=Rt;Rt|=4;try{zm(n,t);var h=yf,E=Xh(t.containerInfo),R=h.focusedElem,F=h.selectionRange;if(E!==R&&R&&R.ownerDocument&&kh(R.ownerDocument.documentElement,R)){if(F!==null&&Yu(R)){var Q=F.start,fe=F.end;if(fe===void 0&&(fe=Q),"selectionStart"in R)R.selectionStart=Q,R.selectionEnd=Math.min(fe,R.value.length);else{var me=R.ownerDocument||document,ee=me&&me.defaultView||window;if(ee.getSelection){var ne=ee.getSelection(),tt=R.textContent.length,Je=Math.min(F.start,tt),Nt=F.end===void 0?Je:Math.min(F.end,tt);!ne.extend&&Je>Nt&&(E=Nt,Nt=Je,Je=E);var q=Vh(R,Je),k=Vh(R,Nt);if(q&&k&&(ne.rangeCount!==1||ne.anchorNode!==q.node||ne.anchorOffset!==q.offset||ne.focusNode!==k.node||ne.focusOffset!==k.offset)){var j=me.createRange();j.setStart(q.node,q.offset),ne.removeAllRanges(),Je>Nt?(ne.addRange(j),ne.extend(k.node,k.offset)):(j.setEnd(k.node,k.offset),ne.addRange(j))}}}}for(me=[],ne=R;ne=ne.parentNode;)ne.nodeType===1&&me.push({element:ne,left:ne.scrollLeft,top:ne.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<me.length;R++){var pe=me[R];pe.element.scrollLeft=pe.left,pe.element.scrollTop=pe.top}}Xl=!!xf,yf=xf=null}finally{Rt=f,K.p=s,H.T=a}}t.current=n,Mn=2}}function i_(){if(Mn===2){Mn=0;var t=Ea,n=Zr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=H.T,H.T=null;var s=K.p;K.p=2;var f=Rt;Rt|=4;try{Om(t,n.alternate,n)}finally{Rt=f,K.p=s,H.T=a}}Mn=3}}function a_(){if(Mn===4||Mn===3){Mn=0,St();var t=Ea,n=Zr,a=Kr,s=Wm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Mn=5:(Mn=0,Zr=Ea=null,r_(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(Ma=null),bt(a),n=n.stateNode,ge&&typeof ge.onCommitFiberRoot=="function")try{ge.onCommitFiberRoot(ce,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=H.T,f=K.p,K.p=2,H.T=null;try{for(var h=t.onRecoverableError,E=0;E<s.length;E++){var R=s[E];h(R.value,{componentStack:R.stack})}}finally{H.T=n,K.p=f}}(Kr&3)!==0&&Ll(),Ri(t),f=t.pendingLanes,(a&4194090)!==0&&(f&42)!==0?t===sf?uo++:(uo=0,sf=t):uo=0,co(0)}}function r_(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,ks(n)))}function Ll(t){return n_(),i_(),a_(),s_()}function s_(){if(Mn!==5)return!1;var t=Ea,n=af;af=0;var a=bt(Kr),s=H.T,f=K.p;try{K.p=32>a?32:a,H.T=null,a=rf,rf=null;var h=Ea,E=Kr;if(Mn=0,Zr=Ea=null,Kr=0,(Rt&6)!==0)throw Error(r(331));var R=Rt;if(Rt|=4,km(h.current),Hm(h,h.current,E,a),Rt=R,co(0,!1),ge&&typeof ge.onPostCommitFiberRoot=="function")try{ge.onPostCommitFiberRoot(ce,h)}catch{}return!0}finally{K.p=f,H.T=s,r_(t,n)}}function o_(t,n,a){n=ei(a,n),n=Ic(t.stateNode,n,2),t=ha(t,n,2),t!==null&&(Be(t,2),Ri(t))}function It(t,n,a){if(t.tag===3)o_(t,t,a);else for(;n!==null;){if(n.tag===3){o_(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ma===null||!Ma.has(s))){t=ei(a,t),a=fm(2),s=ha(n,a,2),s!==null&&(dm(a,s,n,t),Be(s,2),Ri(s));break}}n=n.return}}function cf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new Z0;var f=new Set;s.set(n,f)}else f=s.get(n),f===void 0&&(f=new Set,s.set(n,f));f.has(a)||($c=!0,f.add(a),t=$0.bind(null,t,n,a),n.then(t,t))}function $0(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ht===t&&(vt&a)===a&&(jt===4||jt===3&&(vt&62914560)===vt&&300>ze()-nf?(Rt&2)===0&&jr(t,0):ef|=a,Yr===vt&&(Yr=0)),Ri(t)}function l_(t,n){n===0&&(n=Ae()),t=Lr(t,n),t!==null&&(Be(t,n),Ri(t))}function eS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),l_(t,a)}function tS(t,n){var a=0;switch(t.tag){case 13:var s=t.stateNode,f=t.memoizedState;f!==null&&(a=f.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),l_(t,a)}function nS(t,n){return V(t,n)}var Nl=null,Jr=null,ff=!1,Ol=!1,df=!1,rr=0;function Ri(t){t!==Jr&&t.next===null&&(Jr===null?Nl=Jr=t:Jr=Jr.next=t),Ol=!0,ff||(ff=!0,aS())}function co(t,n){if(!df&&Ol){df=!0;do for(var a=!1,s=Nl;s!==null;){if(t!==0){var f=s.pendingLanes;if(f===0)var h=0;else{var E=s.suspendedLanes,R=s.pingedLanes;h=(1<<31-Pe(42|t)+1)-1,h&=f&~(E&~R),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,d_(s,h))}else h=vt,h=Ve(s,s===Ht?h:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(h&3)===0||Ce(s,h)||(a=!0,d_(s,h));s=s.next}while(a);df=!1}}function iS(){u_()}function u_(){Ol=ff=!1;var t=0;rr!==0&&(dS()&&(t=rr),rr=0);for(var n=ze(),a=null,s=Nl;s!==null;){var f=s.next,h=c_(s,n);h===0?(s.next=null,a===null?Nl=f:a.next=f,f===null&&(Jr=a)):(a=s,(t!==0||(h&3)!==0)&&(Ol=!0)),s=f}co(t)}function c_(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,f=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var E=31-Pe(h),R=1<<E,F=f[E];F===-1?((R&a)===0||(R&s)!==0)&&(f[E]=at(R,n)):F<=n&&(t.expiredLanes|=R),h&=~R}if(n=Ht,a=vt,a=Ve(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(wt===2||wt===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&At(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ce(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&At(s),bt(a)){case 2:case 8:a=rt;break;case 32:a=Xt;break;case 268435456:a=P;break;default:a=Xt}return s=f_.bind(null,t),a=V(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&At(s),t.callbackPriority=2,t.callbackNode=null,2}function f_(t,n){if(Mn!==0&&Mn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Ll()&&t.callbackNode!==a)return null;var s=vt;return s=Ve(t,t===Ht?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(Ym(t,s,n),c_(t,ze()),t.callbackNode!=null&&t.callbackNode===a?f_.bind(null,t):null)}function d_(t,n){if(Ll())return null;Ym(t,n,!0)}function aS(){pS(function(){(Rt&6)!==0?V(Fe,iS):u_()})}function hf(){return rr===0&&(rr=X()),rr}function h_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Wo(""+t)}function p_(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function rS(t,n,a,s,f){if(n==="submit"&&a&&a.stateNode===f){var h=h_((f[Yt]||null).action),E=s.submitter;E&&(n=(n=E[Yt]||null)?h_(n.formAction):E.getAttribute("formAction"),n!==null&&(h=n,E=null));var R=new Ko("action","action",null,s,f);t.push({event:R,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(rr!==0){var F=E?p_(f,E):new FormData(f);Lc(a,{pending:!0,data:F,method:f.method,action:h},null,F)}}else typeof h=="function"&&(R.preventDefault(),F=E?p_(f,E):new FormData(f),Lc(a,{pending:!0,data:F,method:f.method,action:h},h,F))},currentTarget:f}]})}}for(var pf=0;pf<Qu.length;pf++){var mf=Qu[pf],sS=mf.toLowerCase(),oS=mf[0].toUpperCase()+mf.slice(1);fi(sS,"on"+oS)}fi(Yh,"onAnimationEnd"),fi(Zh,"onAnimationIteration"),fi(Kh,"onAnimationStart"),fi("dblclick","onDoubleClick"),fi("focusin","onFocus"),fi("focusout","onBlur"),fi(T0,"onTransitionRun"),fi(A0,"onTransitionStart"),fi(b0,"onTransitionCancel"),fi(jh,"onTransitionEnd"),W("onMouseEnter",["mouseout","mouseover"]),W("onMouseLeave",["mouseout","mouseover"]),W("onPointerEnter",["pointerout","pointerover"]),W("onPointerLeave",["pointerout","pointerover"]),w("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),w("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),w("onBeforeInput",["compositionend","keypress","textInput","paste"]),w("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fo));function m_(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],f=s.event;s=s.listeners;e:{var h=void 0;if(n)for(var E=s.length-1;0<=E;E--){var R=s[E],F=R.instance,Q=R.currentTarget;if(R=R.listener,F!==h&&f.isPropagationStopped())break e;h=R,f.currentTarget=Q;try{h(f)}catch(fe){yl(fe)}f.currentTarget=null,h=F}else for(E=0;E<s.length;E++){if(R=s[E],F=R.instance,Q=R.currentTarget,R=R.listener,F!==h&&f.isPropagationStopped())break e;h=R,f.currentTarget=Q;try{h(f)}catch(fe){yl(fe)}f.currentTarget=null,h=F}}}}function _t(t,n){var a=n[Mr];a===void 0&&(a=n[Mr]=new Set);var s=t+"__bubble";a.has(s)||(__(n,t,2,!1),a.add(s))}function _f(t,n,a){var s=0;n&&(s|=4),__(a,t,s,n)}var Pl="_reactListening"+Math.random().toString(36).slice(2);function gf(t){if(!t[Pl]){t[Pl]=!0,ko.forEach(function(a){a!=="selectionchange"&&(lS.has(a)||_f(a,!1,t),_f(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Pl]||(n[Pl]=!0,_f("selectionchange",!1,n))}}function __(t,n,a,s){switch(H_(n)){case 2:var f=PS;break;case 8:f=BS;break;default:f=Uf}a=f.bind(null,n,a,t),f=void 0,!zu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(f=!0),s?f!==void 0?t.addEventListener(n,a,{capture:!0,passive:f}):t.addEventListener(n,a,!0):f!==void 0?t.addEventListener(n,a,{passive:f}):t.addEventListener(n,a,!1)}function vf(t,n,a,s,f){var h=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var E=s.tag;if(E===3||E===4){var R=s.stateNode.containerInfo;if(R===f)break;if(E===4)for(E=s.return;E!==null;){var F=E.tag;if((F===3||F===4)&&E.stateNode.containerInfo===f)return;E=E.return}for(;R!==null;){if(E=Oi(R),E===null)return;if(F=E.tag,F===5||F===6||F===26||F===27){s=h=E;continue e}R=R.parentNode}}s=s.return}Eh(function(){var Q=h,fe=Bu(a),me=[];e:{var ee=Qh.get(t);if(ee!==void 0){var ne=Ko,tt=t;switch(t){case"keypress":if(Yo(a)===0)break e;case"keydown":case"keyup":ne=n0;break;case"focusin":tt="focus",ne=Vu;break;case"focusout":tt="blur",ne=Vu;break;case"beforeblur":case"afterblur":ne=Vu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ne=bh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ne=Xv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ne=r0;break;case Yh:case Zh:case Kh:ne=Yv;break;case jh:ne=o0;break;case"scroll":case"scrollend":ne=Vv;break;case"wheel":ne=u0;break;case"copy":case"cut":case"paste":ne=Kv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ne=wh;break;case"toggle":case"beforetoggle":ne=f0}var Je=(n&4)!==0,Nt=!Je&&(t==="scroll"||t==="scrollend"),q=Je?ee!==null?ee+"Capture":null:ee;Je=[];for(var k=Q,j;k!==null;){var pe=k;if(j=pe.stateNode,pe=pe.tag,pe!==5&&pe!==26&&pe!==27||j===null||q===null||(pe=Ds(k,q),pe!=null&&Je.push(ho(k,pe,j))),Nt)break;k=k.return}0<Je.length&&(ee=new ne(ee,tt,null,a,fe),me.push({event:ee,listeners:Je}))}}if((n&7)===0){e:{if(ee=t==="mouseover"||t==="pointerover",ne=t==="mouseout"||t==="pointerout",ee&&a!==Pu&&(tt=a.relatedTarget||a.fromElement)&&(Oi(tt)||tt[yi]))break e;if((ne||ee)&&(ee=fe.window===fe?fe:(ee=fe.ownerDocument)?ee.defaultView||ee.parentWindow:window,ne?(tt=a.relatedTarget||a.toElement,ne=Q,tt=tt?Oi(tt):null,tt!==null&&(Nt=u(tt),Je=tt.tag,tt!==Nt||Je!==5&&Je!==27&&Je!==6)&&(tt=null)):(ne=null,tt=Q),ne!==tt)){if(Je=bh,pe="onMouseLeave",q="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(Je=wh,pe="onPointerLeave",q="onPointerEnter",k="pointer"),Nt=ne==null?ee:ka(ne),j=tt==null?ee:ka(tt),ee=new Je(pe,k+"leave",ne,a,fe),ee.target=Nt,ee.relatedTarget=j,pe=null,Oi(fe)===Q&&(Je=new Je(q,k+"enter",tt,a,fe),Je.target=j,Je.relatedTarget=Nt,pe=Je),Nt=pe,ne&&tt)t:{for(Je=ne,q=tt,k=0,j=Je;j;j=$r(j))k++;for(j=0,pe=q;pe;pe=$r(pe))j++;for(;0<k-j;)Je=$r(Je),k--;for(;0<j-k;)q=$r(q),j--;for(;k--;){if(Je===q||q!==null&&Je===q.alternate)break t;Je=$r(Je),q=$r(q)}Je=null}else Je=null;ne!==null&&g_(me,ee,ne,Je,!1),tt!==null&&Nt!==null&&g_(me,Nt,tt,Je,!0)}}e:{if(ee=Q?ka(Q):window,ne=ee.nodeName&&ee.nodeName.toLowerCase(),ne==="select"||ne==="input"&&ee.type==="file")var He=Bh;else if(Oh(ee))if(Ih)He=y0;else{He=S0;var dt=v0}else ne=ee.nodeName,!ne||ne.toLowerCase()!=="input"||ee.type!=="checkbox"&&ee.type!=="radio"?Q&&Ou(Q.elementType)&&(He=Bh):He=x0;if(He&&(He=He(t,Q))){Ph(me,He,a,fe);break e}dt&&dt(t,ee,Q),t==="focusout"&&Q&&ee.type==="number"&&Q.memoizedProps.value!=null&&An(ee,"number",ee.value)}switch(dt=Q?ka(Q):window,t){case"focusin":(Oh(dt)||dt.contentEditable==="true")&&(Cr=dt,Zu=Q,zs=null);break;case"focusout":zs=Zu=Cr=null;break;case"mousedown":Ku=!0;break;case"contextmenu":case"mouseup":case"dragend":Ku=!1,Wh(me,a,fe);break;case"selectionchange":if(E0)break;case"keydown":case"keyup":Wh(me,a,fe)}var Ye;if(Xu)e:{switch(t){case"compositionstart":var et="onCompositionStart";break e;case"compositionend":et="onCompositionEnd";break e;case"compositionupdate":et="onCompositionUpdate";break e}et=void 0}else wr?Lh(t,a)&&(et="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(et="onCompositionStart");et&&(Ch&&a.locale!=="ko"&&(wr||et!=="onCompositionStart"?et==="onCompositionEnd"&&wr&&(Ye=Th()):(ua=fe,Fu="value"in ua?ua.value:ua.textContent,wr=!0)),dt=Bl(Q,et),0<dt.length&&(et=new Rh(et,t,null,a,fe),me.push({event:et,listeners:dt}),Ye?et.data=Ye:(Ye=Nh(a),Ye!==null&&(et.data=Ye)))),(Ye=h0?p0(t,a):m0(t,a))&&(et=Bl(Q,"onBeforeInput"),0<et.length&&(dt=new Rh("onBeforeInput","beforeinput",null,a,fe),me.push({event:dt,listeners:et}),dt.data=Ye)),rS(me,t,Q,a,fe)}m_(me,n)})}function ho(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Bl(t,n){for(var a=n+"Capture",s=[];t!==null;){var f=t,h=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||h===null||(f=Ds(t,a),f!=null&&s.unshift(ho(t,f,h)),f=Ds(t,n),f!=null&&s.push(ho(t,f,h))),t.tag===3)return s;t=t.return}return[]}function $r(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function g_(t,n,a,s,f){for(var h=n._reactName,E=[];a!==null&&a!==s;){var R=a,F=R.alternate,Q=R.stateNode;if(R=R.tag,F!==null&&F===s)break;R!==5&&R!==26&&R!==27||Q===null||(F=Q,f?(Q=Ds(a,h),Q!=null&&E.unshift(ho(a,Q,F))):f||(Q=Ds(a,h),Q!=null&&E.push(ho(a,Q,F)))),a=a.return}E.length!==0&&t.push({event:n,listeners:E})}var uS=/\r\n?/g,cS=/\u0000|\uFFFD/g;function v_(t){return(typeof t=="string"?t:""+t).replace(uS,`
`).replace(cS,"")}function S_(t,n){return n=v_(n),v_(t)===n}function Il(){}function Lt(t,n,a,s,f,h){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Pn(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Pn(t,""+s);break;case"className":Ie(t,"class",s);break;case"tabIndex":Ie(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Ie(t,a,s);break;case"style":yh(t,s,h);break;case"data":if(n!=="object"){Ie(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Wo(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Lt(t,n,"name",f.name,f,null),Lt(t,n,"formEncType",f.formEncType,f,null),Lt(t,n,"formMethod",f.formMethod,f,null),Lt(t,n,"formTarget",f.formTarget,f,null)):(Lt(t,n,"encType",f.encType,f,null),Lt(t,n,"method",f.method,f,null),Lt(t,n,"target",f.target,f,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Wo(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Il);break;case"onScroll":s!=null&&_t("scroll",t);break;case"onScrollEnd":s!=null&&_t("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Wo(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":_t("beforetoggle",t),_t("toggle",t),De(t,"popover",s);break;case"xlinkActuate":Le(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Le(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Le(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Le(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Le(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Le(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Le(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Le(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Le(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":De(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Hv.get(a)||a,De(t,a,s))}}function Sf(t,n,a,s,f,h){switch(a){case"style":yh(t,s,h);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?Pn(t,s):(typeof s=="number"||typeof s=="bigint")&&Pn(t,""+s);break;case"onScroll":s!=null&&_t("scroll",t);break;case"onScrollEnd":s!=null&&_t("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Il);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Xo.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(f=a.endsWith("Capture"),n=a.slice(2,f?a.length-7:void 0),h=t[Yt]||null,h=h!=null?h[a]:null,typeof h=="function"&&t.removeEventListener(n,h,f),typeof s=="function")){typeof h!="function"&&h!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,f);break e}a in t?t[a]=s:s===!0?t.setAttribute(a,""):De(t,a,s)}}}function En(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_t("error",t),_t("load",t);var s=!1,f=!1,h;for(h in a)if(a.hasOwnProperty(h)){var E=a[h];if(E!=null)switch(h){case"src":s=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Lt(t,n,h,E,a,null)}}f&&Lt(t,n,"srcSet",a.srcSet,a,null),s&&Lt(t,n,"src",a.src,a,null);return;case"input":_t("invalid",t);var R=h=E=f=null,F=null,Q=null;for(s in a)if(a.hasOwnProperty(s)){var fe=a[s];if(fe!=null)switch(s){case"name":f=fe;break;case"type":E=fe;break;case"checked":F=fe;break;case"defaultChecked":Q=fe;break;case"value":h=fe;break;case"defaultValue":R=fe;break;case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(r(137,n));break;default:Lt(t,n,s,fe,a,null)}}Un(t,h,R,F,Q,E,f,!1),pt(t);return;case"select":_t("invalid",t),s=E=h=null;for(f in a)if(a.hasOwnProperty(f)&&(R=a[f],R!=null))switch(f){case"value":h=R;break;case"defaultValue":E=R;break;case"multiple":s=R;default:Lt(t,n,f,R,a,null)}n=h,a=E,t.multiple=!!s,n!=null?Zt(t,!!s,n,!1):a!=null&&Zt(t,!!s,a,!0);return;case"textarea":_t("invalid",t),h=f=s=null;for(E in a)if(a.hasOwnProperty(E)&&(R=a[E],R!=null))switch(E){case"value":s=R;break;case"defaultValue":f=R;break;case"children":h=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Lt(t,n,E,R,a,null)}Ar(t,s,f,h),pt(t);return;case"option":for(F in a)if(a.hasOwnProperty(F)&&(s=a[F],s!=null))switch(F){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Lt(t,n,F,s,a,null)}return;case"dialog":_t("beforetoggle",t),_t("toggle",t),_t("cancel",t),_t("close",t);break;case"iframe":case"object":_t("load",t);break;case"video":case"audio":for(s=0;s<fo.length;s++)_t(fo[s],t);break;case"image":_t("error",t),_t("load",t);break;case"details":_t("toggle",t);break;case"embed":case"source":case"link":_t("error",t),_t("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(s=a[Q],s!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Lt(t,n,Q,s,a,null)}return;default:if(Ou(n)){for(fe in a)a.hasOwnProperty(fe)&&(s=a[fe],s!==void 0&&Sf(t,n,fe,s,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(s=a[R],s!=null&&Lt(t,n,R,s,a,null))}function fS(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,h=null,E=null,R=null,F=null,Q=null,fe=null;for(ne in a){var me=a[ne];if(a.hasOwnProperty(ne)&&me!=null)switch(ne){case"checked":break;case"value":break;case"defaultValue":F=me;default:s.hasOwnProperty(ne)||Lt(t,n,ne,null,s,me)}}for(var ee in s){var ne=s[ee];if(me=a[ee],s.hasOwnProperty(ee)&&(ne!=null||me!=null))switch(ee){case"type":h=ne;break;case"name":f=ne;break;case"checked":Q=ne;break;case"defaultChecked":fe=ne;break;case"value":E=ne;break;case"defaultValue":R=ne;break;case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(r(137,n));break;default:ne!==me&&Lt(t,n,ee,ne,s,me)}}Bt(t,E,R,F,Q,fe,h,f);return;case"select":ne=E=R=ee=null;for(h in a)if(F=a[h],a.hasOwnProperty(h)&&F!=null)switch(h){case"value":break;case"multiple":ne=F;default:s.hasOwnProperty(h)||Lt(t,n,h,null,s,F)}for(f in s)if(h=s[f],F=a[f],s.hasOwnProperty(f)&&(h!=null||F!=null))switch(f){case"value":ee=h;break;case"defaultValue":R=h;break;case"multiple":E=h;default:h!==F&&Lt(t,n,f,h,s,F)}n=R,a=E,s=ne,ee!=null?Zt(t,!!a,ee,!1):!!s!=!!a&&(n!=null?Zt(t,!!a,n,!0):Zt(t,!!a,a?[]:"",!1));return;case"textarea":ne=ee=null;for(R in a)if(f=a[R],a.hasOwnProperty(R)&&f!=null&&!s.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Lt(t,n,R,null,s,f)}for(E in s)if(f=s[E],h=a[E],s.hasOwnProperty(E)&&(f!=null||h!=null))switch(E){case"value":ee=f;break;case"defaultValue":ne=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==h&&Lt(t,n,E,f,s,h)}xn(t,ee,ne);return;case"option":for(var tt in a)if(ee=a[tt],a.hasOwnProperty(tt)&&ee!=null&&!s.hasOwnProperty(tt))switch(tt){case"selected":t.selected=!1;break;default:Lt(t,n,tt,null,s,ee)}for(F in s)if(ee=s[F],ne=a[F],s.hasOwnProperty(F)&&ee!==ne&&(ee!=null||ne!=null))switch(F){case"selected":t.selected=ee&&typeof ee!="function"&&typeof ee!="symbol";break;default:Lt(t,n,F,ee,s,ne)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Je in a)ee=a[Je],a.hasOwnProperty(Je)&&ee!=null&&!s.hasOwnProperty(Je)&&Lt(t,n,Je,null,s,ee);for(Q in s)if(ee=s[Q],ne=a[Q],s.hasOwnProperty(Q)&&ee!==ne&&(ee!=null||ne!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(ee!=null)throw Error(r(137,n));break;default:Lt(t,n,Q,ee,s,ne)}return;default:if(Ou(n)){for(var Nt in a)ee=a[Nt],a.hasOwnProperty(Nt)&&ee!==void 0&&!s.hasOwnProperty(Nt)&&Sf(t,n,Nt,void 0,s,ee);for(fe in s)ee=s[fe],ne=a[fe],!s.hasOwnProperty(fe)||ee===ne||ee===void 0&&ne===void 0||Sf(t,n,fe,ee,s,ne);return}}for(var q in a)ee=a[q],a.hasOwnProperty(q)&&ee!=null&&!s.hasOwnProperty(q)&&Lt(t,n,q,null,s,ee);for(me in s)ee=s[me],ne=a[me],!s.hasOwnProperty(me)||ee===ne||ee==null&&ne==null||Lt(t,n,me,ee,s,ne)}var xf=null,yf=null;function zl(t){return t.nodeType===9?t:t.ownerDocument}function x_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function y_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Mf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ef=null;function dS(){var t=window.event;return t&&t.type==="popstate"?t===Ef?!1:(Ef=t,!0):(Ef=null,!1)}var M_=typeof setTimeout=="function"?setTimeout:void 0,hS=typeof clearTimeout=="function"?clearTimeout:void 0,E_=typeof Promise=="function"?Promise:void 0,pS=typeof queueMicrotask=="function"?queueMicrotask:typeof E_<"u"?function(t){return E_.resolve(null).then(t).catch(mS)}:M_;function mS(t){setTimeout(function(){throw t})}function Aa(t){return t==="head"}function T_(t,n){var a=n,s=0,f=0;do{var h=a.nextSibling;if(t.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(0<s&&8>s){a=s;var E=t.ownerDocument;if(a&1&&po(E.documentElement),a&2&&po(E.body),a&4)for(a=E.head,po(a),E=a.firstChild;E;){var R=E.nextSibling,F=E.nodeName;E[Mi]||F==="SCRIPT"||F==="STYLE"||F==="LINK"&&E.rel.toLowerCase()==="stylesheet"||a.removeChild(E),E=R}}if(f===0){t.removeChild(h),Mo(n);return}f--}else a==="$"||a==="$?"||a==="$!"?f++:s=a.charCodeAt(0)-48;else s=0;a=h}while(a);Mo(n)}function Tf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Tf(a),Tr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function _S(t,n,a,s){for(;t.nodeType===1;){var f=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Mi])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var h=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=hi(t.nextSibling),t===null)break}return null}function gS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=hi(t.nextSibling),t===null))return null;return t}function Af(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function vS(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function hi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var bf=null;function A_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function b_(t,n,a){switch(n=zl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function po(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Tr(t)}var si=new Map,R_=new Set;function Fl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Zi=K.d;K.d={f:SS,r:xS,D:yS,C:MS,L:ES,m:TS,X:bS,S:AS,M:RS};function SS(){var t=Zi.f(),n=Dl();return t||n}function xS(t){var n=oa(t);n!==null&&n.tag===5&&n.type==="form"?Yp(n):Zi.r(t)}var es=typeof document>"u"?null:document;function w_(t,n,a){var s=es;if(s&&typeof n=="string"&&n){var f=pn(n);f='link[rel="'+t+'"][href="'+f+'"]',typeof a=="string"&&(f+='[crossorigin="'+a+'"]'),R_.has(f)||(R_.add(f),t={rel:t,crossOrigin:a,href:n},s.querySelector(f)===null&&(n=s.createElement("link"),En(n,"link",t),nn(n),s.head.appendChild(n)))}}function yS(t){Zi.D(t),w_("dns-prefetch",t,null)}function MS(t,n){Zi.C(t,n),w_("preconnect",t,n)}function ES(t,n,a){Zi.L(t,n,a);var s=es;if(s&&t&&n){var f='link[rel="preload"][as="'+pn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(f+='[imagesrcset="'+pn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(f+='[imagesizes="'+pn(a.imageSizes)+'"]')):f+='[href="'+pn(t)+'"]';var h=f;switch(n){case"style":h=ts(t);break;case"script":h=ns(t)}si.has(h)||(t=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),si.set(h,t),s.querySelector(f)!==null||n==="style"&&s.querySelector(mo(h))||n==="script"&&s.querySelector(_o(h))||(n=s.createElement("link"),En(n,"link",t),nn(n),s.head.appendChild(n)))}}function TS(t,n){Zi.m(t,n);var a=es;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",f='link[rel="modulepreload"][as="'+pn(s)+'"][href="'+pn(t)+'"]',h=f;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=ns(t)}if(!si.has(h)&&(t=x({rel:"modulepreload",href:t},n),si.set(h,t),a.querySelector(f)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(_o(h)))return}s=a.createElement("link"),En(s,"link",t),nn(s),a.head.appendChild(s)}}}function AS(t,n,a){Zi.S(t,n,a);var s=es;if(s&&t){var f=la(s).hoistableStyles,h=ts(t);n=n||"default";var E=f.get(h);if(!E){var R={loading:0,preload:null};if(E=s.querySelector(mo(h)))R.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":n},a),(a=si.get(h))&&Rf(t,a);var F=E=s.createElement("link");nn(F),En(F,"link",t),F._p=new Promise(function(Q,fe){F.onload=Q,F.onerror=fe}),F.addEventListener("load",function(){R.loading|=1}),F.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Hl(E,n,s)}E={type:"stylesheet",instance:E,count:1,state:R},f.set(h,E)}}}function bS(t,n){Zi.X(t,n);var a=es;if(a&&t){var s=la(a).hoistableScripts,f=ns(t),h=s.get(f);h||(h=a.querySelector(_o(f)),h||(t=x({src:t,async:!0},n),(n=si.get(f))&&wf(t,n),h=a.createElement("script"),nn(h),En(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},s.set(f,h))}}function RS(t,n){Zi.M(t,n);var a=es;if(a&&t){var s=la(a).hoistableScripts,f=ns(t),h=s.get(f);h||(h=a.querySelector(_o(f)),h||(t=x({src:t,async:!0,type:"module"},n),(n=si.get(f))&&wf(t,n),h=a.createElement("script"),nn(h),En(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},s.set(f,h))}}function C_(t,n,a,s){var f=(f=he.current)?Fl(f):null;if(!f)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ts(a.href),a=la(f).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ts(a.href);var h=la(f).hoistableStyles,E=h.get(t);if(E||(f=f.ownerDocument||f,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,E),(h=f.querySelector(mo(t)))&&!h._p&&(E.instance=h,E.state.loading=5),si.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},si.set(t,a),h||wS(f,t,a,E.state))),n&&s===null)throw Error(r(528,""));return E}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ns(a),a=la(f).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function ts(t){return'href="'+pn(t)+'"'}function mo(t){return'link[rel="stylesheet"]['+t+"]"}function D_(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function wS(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),En(n,"link",a),nn(n),t.head.appendChild(n))}function ns(t){return'[src="'+pn(t)+'"]'}function _o(t){return"script[async]"+t}function U_(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+pn(a.href)+'"]');if(s)return n.instance=s,nn(s),s;var f=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),nn(s),En(s,"style",f),Hl(s,a.precedence,t),n.instance=s;case"stylesheet":f=ts(a.href);var h=t.querySelector(mo(f));if(h)return n.state.loading|=4,n.instance=h,nn(h),h;s=D_(a),(f=si.get(f))&&Rf(s,f),h=(t.ownerDocument||t).createElement("link"),nn(h);var E=h;return E._p=new Promise(function(R,F){E.onload=R,E.onerror=F}),En(h,"link",s),n.state.loading|=4,Hl(h,a.precedence,t),n.instance=h;case"script":return h=ns(a.src),(f=t.querySelector(_o(h)))?(n.instance=f,nn(f),f):(s=a,(f=si.get(h))&&(s=x({},a),wf(s,f)),t=t.ownerDocument||t,f=t.createElement("script"),nn(f),En(f,"link",s),t.head.appendChild(f),n.instance=f);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Hl(s,a.precedence,t));return n.instance}function Hl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=s.length?s[s.length-1]:null,h=f,E=0;E<s.length;E++){var R=s[E];if(R.dataset.precedence===n)h=R;else if(h!==f)break}h?h.parentNode.insertBefore(t,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Rf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function wf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Gl=null;function L_(t,n,a){if(Gl===null){var s=new Map,f=Gl=new Map;f.set(a,s)}else f=Gl,s=f.get(a),s||(s=new Map,f.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),f=0;f<a.length;f++){var h=a[f];if(!(h[Mi]||h[ln]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var E=h.getAttribute(n)||"";E=t+E;var R=s.get(E);R?R.push(h):s.set(E,[h])}}return s}function N_(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function CS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function O_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var go=null;function DS(){}function US(t,n,a){if(go===null)throw Error(r(475));var s=go;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var f=ts(a.href),h=t.querySelector(mo(f));if(h){t=h._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(s.count++,s=Vl.bind(s),t.then(s,s)),n.state.loading|=4,n.instance=h,nn(h);return}h=t.ownerDocument||t,a=D_(a),(f=si.get(f))&&Rf(a,f),h=h.createElement("link"),nn(h);var E=h;E._p=new Promise(function(R,F){E.onload=R,E.onerror=F}),En(h,"link",a),n.instance=h}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=Vl.bind(s),t.addEventListener("load",n),t.addEventListener("error",n))}}function LS(){if(go===null)throw Error(r(475));var t=go;return t.stylesheets&&t.count===0&&Cf(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&Cf(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Vl(){if(this.count--,this.count===0){if(this.stylesheets)Cf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var kl=null;function Cf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,kl=new Map,n.forEach(NS,t),kl=null,Vl.call(t))}function NS(t,n){if(!(n.state.loading&4)){var a=kl.get(t);if(a)var s=a.get(null);else{a=new Map,kl.set(t,a);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<f.length;h++){var E=f[h];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(a.set(E.dataset.precedence,E),s=E)}s&&a.set(null,s)}f=n.instance,E=f.getAttribute("data-precedence"),h=a.get(E)||s,h===s&&a.set(null,f),a.set(E,f),this.count++,s=Vl.bind(this),f.addEventListener("load",s),f.addEventListener("error",s),h?h.parentNode.insertBefore(f,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),n.state.loading|=4}}var vo={$$typeof:O,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function OS(t,n,a,s,f,h,E,R){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Re(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Re(0),this.hiddenUpdates=Re(null),this.identifierPrefix=s,this.onUncaughtError=f,this.onCaughtError=h,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=R,this.incompleteTransitions=new Map}function P_(t,n,a,s,f,h,E,R,F,Q,fe,me){return t=new OS(t,n,a,E,R,F,Q,me),n=1,h===!0&&(n|=24),h=Xn(3,null,null,n),t.current=h,h.stateNode=t,n=uc(),n.refCount++,t.pooledCache=n,n.refCount++,h.memoizedState={element:s,isDehydrated:a,cache:n},hc(h),t}function B_(t){return t?(t=Nr,t):Nr}function I_(t,n,a,s,f,h){f=B_(f),s.context===null?s.context=f:s.pendingContext=f,s=da(n),s.payload={element:a},h=h===void 0?null:h,h!==null&&(s.callback=h),a=ha(t,s,n),a!==null&&(Kn(a,t,n),Ys(a,t,n))}function z_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Df(t,n){z_(t,n),(t=t.alternate)&&z_(t,n)}function F_(t){if(t.tag===13){var n=Lr(t,67108864);n!==null&&Kn(n,t,67108864),Df(t,67108864)}}var Xl=!0;function PS(t,n,a,s){var f=H.T;H.T=null;var h=K.p;try{K.p=2,Uf(t,n,a,s)}finally{K.p=h,H.T=f}}function BS(t,n,a,s){var f=H.T;H.T=null;var h=K.p;try{K.p=8,Uf(t,n,a,s)}finally{K.p=h,H.T=f}}function Uf(t,n,a,s){if(Xl){var f=Lf(s);if(f===null)vf(t,n,s,Wl,a),G_(t,s);else if(zS(f,t,n,a,s))s.stopPropagation();else if(G_(t,s),n&4&&-1<IS.indexOf(t)){for(;f!==null;){var h=oa(f);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var E=Ze(h.pendingLanes);if(E!==0){var R=h;for(R.pendingLanes|=2,R.entangledLanes|=2;E;){var F=1<<31-Pe(E);R.entanglements[1]|=F,E&=~F}Ri(h),(Rt&6)===0&&(wl=ze()+500,co(0))}}break;case 13:R=Lr(h,2),R!==null&&Kn(R,h,2),Dl(),Df(h,2)}if(h=Lf(s),h===null&&vf(t,n,s,Wl,a),h===f)break;f=h}f!==null&&s.stopPropagation()}else vf(t,n,s,null,a)}}function Lf(t){return t=Bu(t),Nf(t)}var Wl=null;function Nf(t){if(Wl=null,t=Oi(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Wl=t,null}function H_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ft()){case Fe:return 2;case rt:return 8;case Xt:case Wt:return 32;case P:return 268435456;default:return 32}default:return 32}}var Of=!1,ba=null,Ra=null,wa=null,So=new Map,xo=new Map,Ca=[],IS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function G_(t,n){switch(t){case"focusin":case"focusout":ba=null;break;case"dragenter":case"dragleave":Ra=null;break;case"mouseover":case"mouseout":wa=null;break;case"pointerover":case"pointerout":So.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":xo.delete(n.pointerId)}}function yo(t,n,a,s,f,h){return t===null||t.nativeEvent!==h?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:h,targetContainers:[f]},n!==null&&(n=oa(n),n!==null&&F_(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,f!==null&&n.indexOf(f)===-1&&n.push(f),t)}function zS(t,n,a,s,f){switch(n){case"focusin":return ba=yo(ba,t,n,a,s,f),!0;case"dragenter":return Ra=yo(Ra,t,n,a,s,f),!0;case"mouseover":return wa=yo(wa,t,n,a,s,f),!0;case"pointerover":var h=f.pointerId;return So.set(h,yo(So.get(h)||null,t,n,a,s,f)),!0;case"gotpointercapture":return h=f.pointerId,xo.set(h,yo(xo.get(h)||null,t,n,a,s,f)),!0}return!1}function V_(t){var n=Oi(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=p(a),n!==null){t.blockedOn=n,ui(t.priority,function(){if(a.tag===13){var s=Zn();s=it(s);var f=Lr(a,s);f!==null&&Kn(f,a,s),Df(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ql(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Lf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Pu=s,a.target.dispatchEvent(s),Pu=null}else return n=oa(a),n!==null&&F_(n),t.blockedOn=a,!1;n.shift()}return!0}function k_(t,n,a){ql(t)&&a.delete(n)}function FS(){Of=!1,ba!==null&&ql(ba)&&(ba=null),Ra!==null&&ql(Ra)&&(Ra=null),wa!==null&&ql(wa)&&(wa=null),So.forEach(k_),xo.forEach(k_)}function Yl(t,n){t.blockedOn===n&&(t.blockedOn=null,Of||(Of=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,FS)))}var Zl=null;function X_(t){Zl!==t&&(Zl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Zl===t&&(Zl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],f=t[n+2];if(typeof s!="function"){if(Nf(s||a)===null)continue;break}var h=oa(a);h!==null&&(t.splice(n,3),n-=3,Lc(h,{pending:!0,data:f,method:a.method,action:s},s,f))}}))}function Mo(t){function n(F){return Yl(F,t)}ba!==null&&Yl(ba,t),Ra!==null&&Yl(Ra,t),wa!==null&&Yl(wa,t),So.forEach(n),xo.forEach(n);for(var a=0;a<Ca.length;a++){var s=Ca[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Ca.length&&(a=Ca[0],a.blockedOn===null);)V_(a),a.blockedOn===null&&Ca.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var f=a[s],h=a[s+1],E=f[Yt]||null;if(typeof h=="function")E||X_(a);else if(E){var R=null;if(h&&h.hasAttribute("formAction")){if(f=h,E=h[Yt]||null)R=E.formAction;else if(Nf(f)!==null)continue}else R=E.action;typeof R=="function"?a[s+1]=R:(a.splice(s,3),s-=3),X_(a)}}}function Pf(t){this._internalRoot=t}Kl.prototype.render=Pf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Zn();I_(a,s,t,n,null,null)},Kl.prototype.unmount=Pf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;I_(t.current,2,null,t,null,null),Dl(),n[yi]=null}};function Kl(t){this._internalRoot=t}Kl.prototype.unstable_scheduleHydration=function(t){if(t){var n=xt();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ca.length&&n!==0&&n<Ca[a].priority;a++);Ca.splice(a,0,t),a===0&&V_(t)}};var W_=e.version;if(W_!=="19.1.1")throw Error(r(527,W_,"19.1.1"));K.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=v(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var HS={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jl.isDisabled&&jl.supportsFiber)try{ce=jl.inject(HS),ge=jl}catch{}}return Ao.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",f=om,h=lm,E=um,R=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(f=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(E=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(R=n.unstable_transitionCallbacks)),n=P_(t,1,!1,null,null,a,s,f,h,E,R,null),t[yi]=n.current,gf(t),new Pf(n)},Ao.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,f="",h=om,E=lm,R=um,F=null,Q=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(E=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(F=a.unstable_transitionCallbacks),a.formState!==void 0&&(Q=a.formState)),n=P_(t,1,!0,n,a??null,s,f,h,E,R,F,Q),n.context=B_(null),a=n.current,s=Zn(),s=it(s),f=da(s),f.callback=null,ha(a,f,s),a=s,n.current.lanes=a,Be(n,a),Ri(n),t[yi]=n.current,gf(t),new Kl(n)},Ao.version="19.1.1",Ao}var tg;function QS(){if(tg)return zf.exports;tg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),zf.exports=jS(),zf.exports}var JS=QS();const Jn=10,Ci=20,$S=Jn+2,ex=Ci+2,Ua=18,ng=500,ig=50,tx=10,ag=.8,nx={1:{points:100,label:"Single"},2:{points:300,label:"Double"},3:{points:500,label:"Triple"},4:{points:800,label:"Tetris"}},ix=1.5,ax=50,rg={normal:{"0>1":[[0,0],[-1,0],[-1,1],[0,-2],[-1,-2]],"1>0":[[0,0],[1,0],[1,-1],[0,2],[1,2]],"1>2":[[0,0],[1,0],[1,1],[0,-2],[1,-2]],"2>1":[[0,0],[-1,0],[-1,-1],[0,2],[-1,2]],"2>3":[[0,0],[1,0],[1,1],[0,-2],[1,-2]],"3>2":[[0,0],[-1,0],[-1,-1],[0,2],[-1,2]],"3>0":[[0,0],[-1,0],[-1,1],[0,-2],[-1,-2]],"0>3":[[0,0],[1,0],[1,-1],[0,2],[1,2]]},I:{"0>1":[[0,0],[-2,0],[1,0],[-2,-1],[1,2]],"1>0":[[0,0],[2,0],[-1,0],[2,1],[-1,-2]],"1>2":[[0,0],[-1,0],[2,0],[-1,2],[2,-1]],"2>1":[[0,0],[1,0],[-2,0],[1,-2],[-2,1]],"2>3":[[0,0],[2,0],[-1,0],[2,1],[-1,-2]],"3>2":[[0,0],[-2,0],[1,0],[-2,-1],[1,2]],"3>0":[[0,0],[1,0],[-2,0],[1,-2],[-2,1]],"0>3":[[0,0],[-1,0],[2,0],[-1,2],[2,-1]]}},is={T:["[][][][][][]","    [][]    ","    [][]    ","    [][]    ","    [][]    ","    [][]    ","    [][]    "],E:["[][][][][][]","[][]        ","[][]        ","[][][][][][]","[][]        ","[][]        ","[][][][][][]"],R:["[][][][][]  ","[][]    [][]","[][]    [][]","[][][][][]  ","[][]  [][]  ","[][]   [][] ","[][]    [][]"],I:["[][][][][][]","    [][]    ","    [][]    ","    [][]    ","    [][]    ","    [][]    ","[][][][][][]"],S:["[][][][][][]","[][]        ","[][]        ","[][][][][][]","        [][]","        [][]","[][][][][][]"]},sg=[...is.T.map((o,e)=>o+"  "+is.E[e]+"  "+is.T[e]+"  "+is.R[e]+" "+is.I[e]+"  "+is.S[e])],rx=o=>{const e=o.length,i=Array.from({length:e},()=>Array(e).fill(0));for(let r=0;r<e;r++)for(let l=0;l<e;l++)i[l][e-1-r]=o[r][l];return i},sx=o=>{const e=o.length,i=Array.from({length:e},()=>Array(e).fill(0));for(let r=0;r<e;r++)for(let l=0;l<e;l++)i[e-1-l][r]=o[r][l];return i},ox=(o,e,i="clockwise")=>{const r=o.rotation,l=i==="clockwise"?(r+1)%4:(r+3)%4;let u=o.shape;i==="counter-clockwise"?u=sx(u):u=rx(u);const p={...o,shape:u,rotation:l},m=o.type==="I"?rg.I:rg.normal,v=`${r}>${l}`,_=m[v]??[[0,0]];for(const[x,c]of _){const d={...p,position:{x:o.position.x+x,y:o.position.y+c}};if(!e(d))return d}return o};var Jl={exports:{}},og;function lx(){if(og)return Jl.exports;og=1;var o=typeof Reflect=="object"?Reflect:null,e=o&&typeof o.apply=="function"?o.apply:function(U,N,B){return Function.prototype.apply.call(U,N,B)},i;o&&typeof o.ownKeys=="function"?i=o.ownKeys:Object.getOwnPropertySymbols?i=function(U){return Object.getOwnPropertyNames(U).concat(Object.getOwnPropertySymbols(U))}:i=function(U){return Object.getOwnPropertyNames(U)};function r(A){console&&console.warn&&console.warn(A)}var l=Number.isNaN||function(U){return U!==U};function u(){u.init.call(this)}Jl.exports=u,Jl.exports.once=S,u.EventEmitter=u,u.prototype._events=void 0,u.prototype._eventsCount=0,u.prototype._maxListeners=void 0;var p=10;function m(A){if(typeof A!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof A)}Object.defineProperty(u,"defaultMaxListeners",{enumerable:!0,get:function(){return p},set:function(A){if(typeof A!="number"||A<0||l(A))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+A+".");p=A}}),u.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},u.prototype.setMaxListeners=function(U){if(typeof U!="number"||U<0||l(U))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+U+".");return this._maxListeners=U,this};function v(A){return A._maxListeners===void 0?u.defaultMaxListeners:A._maxListeners}u.prototype.getMaxListeners=function(){return v(this)},u.prototype.emit=function(U){for(var N=[],B=1;B<arguments.length;B++)N.push(arguments[B]);var G=U==="error",C=this._events;if(C!==void 0)G=G&&C.error===void 0;else if(!G)return!1;if(G){var D;if(N.length>0&&(D=N[0]),D instanceof Error)throw D;var z=new Error("Unhandled error."+(D?" ("+D.message+")":""));throw z.context=D,z}var se=C[U];if(se===void 0)return!1;if(typeof se=="function")e(se,this,N);else for(var oe=se.length,ue=M(se,oe),B=0;B<oe;++B)e(ue[B],this,N);return!0};function _(A,U,N,B){var G,C,D;if(m(N),C=A._events,C===void 0?(C=A._events=Object.create(null),A._eventsCount=0):(C.newListener!==void 0&&(A.emit("newListener",U,N.listener?N.listener:N),C=A._events),D=C[U]),D===void 0)D=C[U]=N,++A._eventsCount;else if(typeof D=="function"?D=C[U]=B?[N,D]:[D,N]:B?D.unshift(N):D.push(N),G=v(A),G>0&&D.length>G&&!D.warned){D.warned=!0;var z=new Error("Possible EventEmitter memory leak detected. "+D.length+" "+String(U)+" listeners added. Use emitter.setMaxListeners() to increase limit");z.name="MaxListenersExceededWarning",z.emitter=A,z.type=U,z.count=D.length,r(z)}return A}u.prototype.addListener=function(U,N){return _(this,U,N,!1)},u.prototype.on=u.prototype.addListener,u.prototype.prependListener=function(U,N){return _(this,U,N,!0)};function x(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function c(A,U,N){var B={fired:!1,wrapFn:void 0,target:A,type:U,listener:N},G=x.bind(B);return G.listener=N,B.wrapFn=G,G}u.prototype.once=function(U,N){return m(N),this.on(U,c(this,U,N)),this},u.prototype.prependOnceListener=function(U,N){return m(N),this.prependListener(U,c(this,U,N)),this},u.prototype.removeListener=function(U,N){var B,G,C,D,z;if(m(N),G=this._events,G===void 0)return this;if(B=G[U],B===void 0)return this;if(B===N||B.listener===N)--this._eventsCount===0?this._events=Object.create(null):(delete G[U],G.removeListener&&this.emit("removeListener",U,B.listener||N));else if(typeof B!="function"){for(C=-1,D=B.length-1;D>=0;D--)if(B[D]===N||B[D].listener===N){z=B[D].listener,C=D;break}if(C<0)return this;C===0?B.shift():T(B,C),B.length===1&&(G[U]=B[0]),G.removeListener!==void 0&&this.emit("removeListener",U,z||N)}return this},u.prototype.off=u.prototype.removeListener,u.prototype.removeAllListeners=function(U){var N,B,G;if(B=this._events,B===void 0)return this;if(B.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):B[U]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete B[U]),this;if(arguments.length===0){var C=Object.keys(B),D;for(G=0;G<C.length;++G)D=C[G],D!=="removeListener"&&this.removeAllListeners(D);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(N=B[U],typeof N=="function")this.removeListener(U,N);else if(N!==void 0)for(G=N.length-1;G>=0;G--)this.removeListener(U,N[G]);return this};function d(A,U,N){var B=A._events;if(B===void 0)return[];var G=B[U];return G===void 0?[]:typeof G=="function"?N?[G.listener||G]:[G]:N?y(G):M(G,G.length)}u.prototype.listeners=function(U){return d(this,U,!0)},u.prototype.rawListeners=function(U){return d(this,U,!1)},u.listenerCount=function(A,U){return typeof A.listenerCount=="function"?A.listenerCount(U):g.call(A,U)},u.prototype.listenerCount=g;function g(A){var U=this._events;if(U!==void 0){var N=U[A];if(typeof N=="function")return 1;if(N!==void 0)return N.length}return 0}u.prototype.eventNames=function(){return this._eventsCount>0?i(this._events):[]};function M(A,U){for(var N=new Array(U),B=0;B<U;++B)N[B]=A[B];return N}function T(A,U){for(;U+1<A.length;U++)A[U]=A[U+1];A.pop()}function y(A){for(var U=new Array(A.length),N=0;N<U.length;++N)U[N]=A[N].listener||A[N];return U}function S(A,U){return new Promise(function(N,B){function G(D){A.removeListener(U,C),B(D)}function C(){typeof A.removeListener=="function"&&A.removeListener("error",G),N([].slice.call(arguments))}O(A,U,C,{once:!0}),U!=="error"&&I(A,G,{once:!0})})}function I(A,U,N){typeof A.on=="function"&&O(A,"error",U,N)}function O(A,U,N,B){if(typeof A.on=="function")B.once?A.once(U,N):A.on(U,N);else if(typeof A.addEventListener=="function")A.addEventListener(U,function G(C){B.once&&A.removeEventListener(U,G),N(C)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof A)}return Jl.exports}var ux=lx();const Qt={RENDER:"render",MENU:"menu",ANIMATE_LINE_CLEAR:"animateLineClear",ANIMATE_CLEAR_BLOCKS:"animateClearBlocks",STATUS_CHANGED:"statusChanged",SCORE_EVENT:"scoreEvent",SHOW_HIGHEST_SCORE:"showHighestScore"},Jt=new ux.EventEmitter,cx=[{type:"I",shape:[[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]]},{type:"O",shape:[[1,1],[1,1]]},{type:"L",shape:[[0,0,0],[1,1,1],[1,0,0]]},{type:"J",shape:[[0,0,0],[1,1,1],[0,0,1]]},{type:"T",shape:[[0,0,0],[1,1,1],[0,1,0]]},{type:"S",shape:[[0,0,0],[0,1,1],[1,1,0]]},{type:"Z",shape:[[0,0,0],[1,1,0],[0,1,1]]}];function fx({type:o,shape:e}){return{type:o,shape:e,position:{x:3,y:0},rotation:0}}class lg{pieces=[];refill(){const e=[...cx];for(let i=e.length-1;i>0;i--){const r=Math.floor(Math.random()*(i+1));[e[i],e[r]]=[e[r],e[i]]}this.pieces.push(...e.map(fx))}next(){return this.pieces.length===0&&this.refill(),this.pieces.shift()}}class uh{key;bestSession;constructor(e="tetris_best_session"){this.key=e,this.bestSession=this.load()}load(){const e=localStorage.getItem(this.key);if(!e)return null;try{return JSON.parse(e)}catch{return null}}getBest(){return this.bestSession}tryUpdate(e){return!this.bestSession||e.score>this.bestSession.score?(this.bestSession=e,localStorage.setItem(this.key,JSON.stringify(e)),!0):!1}}class dx{level;startLevel;combo=0;lastClearWasTetris=!1;score=0;lines=0;constructor(e=1){this.level=e,this.startLevel=e}addSoftDrop(e){this.score+=e*1*this.level}addHardDrop(e){this.score+=e*2*this.level}addLineClear(e){let i=0,r="";const l=nx[e];if(l&&(i=l.points,r=l.label),e===4&&this.lastClearWasTetris&&(i=Math.floor(i*ix),r="Back-to-Back Tetris"),e>0){this.combo++;const p=ax*this.combo;i+=p,r+=this.combo>1?` (Combo x${this.combo})`:""}else this.combo=0;this.lastClearWasTetris=e===4;const u=i*this.level;for(this.score+=u,this.lines+=e;this.lines>=this.level*tx;)this.level++;u>0&&Jt.emit(Qt.SCORE_EVENT,`${r} +${u}`)}getLevel(){return this.level}getStartLevel(){return this.startLevel}reset(){this.level=this.startLevel,this.combo=0,this.lastClearWasTetris=!1,this.score=0,this.lines=0}}var Vf={};/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */var ug;function hx(){return ug||(ug=1,(function(o){(function(){var e=function(){this.init()};e.prototype={init:function(){var c=this||i;return c._counter=1e3,c._html5AudioPool=[],c.html5PoolSize=10,c._codecs={},c._howls=[],c._muted=!1,c._volume=1,c._canPlayEvent="canplaythrough",c._navigator=typeof window<"u"&&window.navigator?window.navigator:null,c.masterGain=null,c.noAudio=!1,c.usingWebAudio=!0,c.autoSuspend=!0,c.ctx=null,c.autoUnlock=!0,c._setup(),c},volume:function(c){var d=this||i;if(c=parseFloat(c),d.ctx||x(),typeof c<"u"&&c>=0&&c<=1){if(d._volume=c,d._muted)return d;d.usingWebAudio&&d.masterGain.gain.setValueAtTime(c,i.ctx.currentTime);for(var g=0;g<d._howls.length;g++)if(!d._howls[g]._webAudio)for(var M=d._howls[g]._getSoundIds(),T=0;T<M.length;T++){var y=d._howls[g]._soundById(M[T]);y&&y._node&&(y._node.volume=y._volume*c)}return d}return d._volume},mute:function(c){var d=this||i;d.ctx||x(),d._muted=c,d.usingWebAudio&&d.masterGain.gain.setValueAtTime(c?0:d._volume,i.ctx.currentTime);for(var g=0;g<d._howls.length;g++)if(!d._howls[g]._webAudio)for(var M=d._howls[g]._getSoundIds(),T=0;T<M.length;T++){var y=d._howls[g]._soundById(M[T]);y&&y._node&&(y._node.muted=c?!0:y._muted)}return d},stop:function(){for(var c=this||i,d=0;d<c._howls.length;d++)c._howls[d].stop();return c},unload:function(){for(var c=this||i,d=c._howls.length-1;d>=0;d--)c._howls[d].unload();return c.usingWebAudio&&c.ctx&&typeof c.ctx.close<"u"&&(c.ctx.close(),c.ctx=null,x()),c},codecs:function(c){return(this||i)._codecs[c.replace(/^x-/,"")]},_setup:function(){var c=this||i;if(c.state=c.ctx&&c.ctx.state||"suspended",c._autoSuspend(),!c.usingWebAudio)if(typeof Audio<"u")try{var d=new Audio;typeof d.oncanplaythrough>"u"&&(c._canPlayEvent="canplay")}catch{c.noAudio=!0}else c.noAudio=!0;try{var d=new Audio;d.muted&&(c.noAudio=!0)}catch{}return c.noAudio||c._setupCodecs(),c},_setupCodecs:function(){var c=this||i,d=null;try{d=typeof Audio<"u"?new Audio:null}catch{return c}if(!d||typeof d.canPlayType!="function")return c;var g=d.canPlayType("audio/mpeg;").replace(/^no$/,""),M=c._navigator?c._navigator.userAgent:"",T=M.match(/OPR\/(\d+)/g),y=T&&parseInt(T[0].split("/")[1],10)<33,S=M.indexOf("Safari")!==-1&&M.indexOf("Chrome")===-1,I=M.match(/Version\/(.*?) /),O=S&&I&&parseInt(I[1],10)<15;return c._codecs={mp3:!!(!y&&(g||d.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!g,opus:!!d.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!d.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!d.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(d.canPlayType('audio/wav; codecs="1"')||d.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!d.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!d.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(d.canPlayType("audio/x-m4a;")||d.canPlayType("audio/m4a;")||d.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(d.canPlayType("audio/x-m4b;")||d.canPlayType("audio/m4b;")||d.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(d.canPlayType("audio/x-mp4;")||d.canPlayType("audio/mp4;")||d.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!O&&d.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!O&&d.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!d.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(d.canPlayType("audio/x-flac;")||d.canPlayType("audio/flac;")).replace(/^no$/,"")},c},_unlockAudio:function(){var c=this||i;if(!(c._audioUnlocked||!c.ctx)){c._audioUnlocked=!1,c.autoUnlock=!1,!c._mobileUnloaded&&c.ctx.sampleRate!==44100&&(c._mobileUnloaded=!0,c.unload()),c._scratchBuffer=c.ctx.createBuffer(1,1,22050);var d=function(g){for(;c._html5AudioPool.length<c.html5PoolSize;)try{var M=new Audio;M._unlocked=!0,c._releaseHtml5Audio(M)}catch{c.noAudio=!0;break}for(var T=0;T<c._howls.length;T++)if(!c._howls[T]._webAudio)for(var y=c._howls[T]._getSoundIds(),S=0;S<y.length;S++){var I=c._howls[T]._soundById(y[S]);I&&I._node&&!I._node._unlocked&&(I._node._unlocked=!0,I._node.load())}c._autoResume();var O=c.ctx.createBufferSource();O.buffer=c._scratchBuffer,O.connect(c.ctx.destination),typeof O.start>"u"?O.noteOn(0):O.start(0),typeof c.ctx.resume=="function"&&c.ctx.resume(),O.onended=function(){O.disconnect(0),c._audioUnlocked=!0,document.removeEventListener("touchstart",d,!0),document.removeEventListener("touchend",d,!0),document.removeEventListener("click",d,!0),document.removeEventListener("keydown",d,!0);for(var A=0;A<c._howls.length;A++)c._howls[A]._emit("unlock")}};return document.addEventListener("touchstart",d,!0),document.addEventListener("touchend",d,!0),document.addEventListener("click",d,!0),document.addEventListener("keydown",d,!0),c}},_obtainHtml5Audio:function(){var c=this||i;if(c._html5AudioPool.length)return c._html5AudioPool.pop();var d=new Audio().play();return d&&typeof Promise<"u"&&(d instanceof Promise||typeof d.then=="function")&&d.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(c){var d=this||i;return c._unlocked&&d._html5AudioPool.push(c),d},_autoSuspend:function(){var c=this;if(!(!c.autoSuspend||!c.ctx||typeof c.ctx.suspend>"u"||!i.usingWebAudio)){for(var d=0;d<c._howls.length;d++)if(c._howls[d]._webAudio){for(var g=0;g<c._howls[d]._sounds.length;g++)if(!c._howls[d]._sounds[g]._paused)return c}return c._suspendTimer&&clearTimeout(c._suspendTimer),c._suspendTimer=setTimeout(function(){if(c.autoSuspend){c._suspendTimer=null,c.state="suspending";var M=function(){c.state="suspended",c._resumeAfterSuspend&&(delete c._resumeAfterSuspend,c._autoResume())};c.ctx.suspend().then(M,M)}},3e4),c}},_autoResume:function(){var c=this;if(!(!c.ctx||typeof c.ctx.resume>"u"||!i.usingWebAudio))return c.state==="running"&&c.ctx.state!=="interrupted"&&c._suspendTimer?(clearTimeout(c._suspendTimer),c._suspendTimer=null):c.state==="suspended"||c.state==="running"&&c.ctx.state==="interrupted"?(c.ctx.resume().then(function(){c.state="running";for(var d=0;d<c._howls.length;d++)c._howls[d]._emit("resume")}),c._suspendTimer&&(clearTimeout(c._suspendTimer),c._suspendTimer=null)):c.state==="suspending"&&(c._resumeAfterSuspend=!0),c}};var i=new e,r=function(c){var d=this;if(!c.src||c.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}d.init(c)};r.prototype={init:function(c){var d=this;return i.ctx||x(),d._autoplay=c.autoplay||!1,d._format=typeof c.format!="string"?c.format:[c.format],d._html5=c.html5||!1,d._muted=c.mute||!1,d._loop=c.loop||!1,d._pool=c.pool||5,d._preload=typeof c.preload=="boolean"||c.preload==="metadata"?c.preload:!0,d._rate=c.rate||1,d._sprite=c.sprite||{},d._src=typeof c.src!="string"?c.src:[c.src],d._volume=c.volume!==void 0?c.volume:1,d._xhr={method:c.xhr&&c.xhr.method?c.xhr.method:"GET",headers:c.xhr&&c.xhr.headers?c.xhr.headers:null,withCredentials:c.xhr&&c.xhr.withCredentials?c.xhr.withCredentials:!1},d._duration=0,d._state="unloaded",d._sounds=[],d._endTimers={},d._queue=[],d._playLock=!1,d._onend=c.onend?[{fn:c.onend}]:[],d._onfade=c.onfade?[{fn:c.onfade}]:[],d._onload=c.onload?[{fn:c.onload}]:[],d._onloaderror=c.onloaderror?[{fn:c.onloaderror}]:[],d._onplayerror=c.onplayerror?[{fn:c.onplayerror}]:[],d._onpause=c.onpause?[{fn:c.onpause}]:[],d._onplay=c.onplay?[{fn:c.onplay}]:[],d._onstop=c.onstop?[{fn:c.onstop}]:[],d._onmute=c.onmute?[{fn:c.onmute}]:[],d._onvolume=c.onvolume?[{fn:c.onvolume}]:[],d._onrate=c.onrate?[{fn:c.onrate}]:[],d._onseek=c.onseek?[{fn:c.onseek}]:[],d._onunlock=c.onunlock?[{fn:c.onunlock}]:[],d._onresume=[],d._webAudio=i.usingWebAudio&&!d._html5,typeof i.ctx<"u"&&i.ctx&&i.autoUnlock&&i._unlockAudio(),i._howls.push(d),d._autoplay&&d._queue.push({event:"play",action:function(){d.play()}}),d._preload&&d._preload!=="none"&&d.load(),d},load:function(){var c=this,d=null;if(i.noAudio){c._emit("loaderror",null,"No audio support.");return}typeof c._src=="string"&&(c._src=[c._src]);for(var g=0;g<c._src.length;g++){var M,T;if(c._format&&c._format[g])M=c._format[g];else{if(T=c._src[g],typeof T!="string"){c._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}M=/^data:audio\/([^;,]+);/i.exec(T),M||(M=/\.([^.]+)$/.exec(T.split("?",1)[0])),M&&(M=M[1].toLowerCase())}if(M||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),M&&i.codecs(M)){d=c._src[g];break}}if(!d){c._emit("loaderror",null,"No codec support for selected audio sources.");return}return c._src=d,c._state="loading",window.location.protocol==="https:"&&d.slice(0,5)==="http:"&&(c._html5=!0,c._webAudio=!1),new l(c),c._webAudio&&p(c),c},play:function(c,d){var g=this,M=null;if(typeof c=="number")M=c,c=null;else{if(typeof c=="string"&&g._state==="loaded"&&!g._sprite[c])return null;if(typeof c>"u"&&(c="__default",!g._playLock)){for(var T=0,y=0;y<g._sounds.length;y++)g._sounds[y]._paused&&!g._sounds[y]._ended&&(T++,M=g._sounds[y]._id);T===1?c=null:M=null}}var S=M?g._soundById(M):g._inactiveSound();if(!S)return null;if(M&&!c&&(c=S._sprite||"__default"),g._state!=="loaded"){S._sprite=c,S._ended=!1;var I=S._id;return g._queue.push({event:"play",action:function(){g.play(I)}}),I}if(M&&!S._paused)return d||g._loadQueue("play"),S._id;g._webAudio&&i._autoResume();var O=Math.max(0,S._seek>0?S._seek:g._sprite[c][0]/1e3),A=Math.max(0,(g._sprite[c][0]+g._sprite[c][1])/1e3-O),U=A*1e3/Math.abs(S._rate),N=g._sprite[c][0]/1e3,B=(g._sprite[c][0]+g._sprite[c][1])/1e3;S._sprite=c,S._ended=!1;var G=function(){S._paused=!1,S._seek=O,S._start=N,S._stop=B,S._loop=!!(S._loop||g._sprite[c][2])};if(O>=B){g._ended(S);return}var C=S._node;if(g._webAudio){var D=function(){g._playLock=!1,G(),g._refreshBuffer(S);var ue=S._muted||g._muted?0:S._volume;C.gain.setValueAtTime(ue,i.ctx.currentTime),S._playStart=i.ctx.currentTime,typeof C.bufferSource.start>"u"?S._loop?C.bufferSource.noteGrainOn(0,O,86400):C.bufferSource.noteGrainOn(0,O,A):S._loop?C.bufferSource.start(0,O,86400):C.bufferSource.start(0,O,A),U!==1/0&&(g._endTimers[S._id]=setTimeout(g._ended.bind(g,S),U)),d||setTimeout(function(){g._emit("play",S._id),g._loadQueue()},0)};i.state==="running"&&i.ctx.state!=="interrupted"?D():(g._playLock=!0,g.once("resume",D),g._clearTimer(S._id))}else{var z=function(){C.currentTime=O,C.muted=S._muted||g._muted||i._muted||C.muted,C.volume=S._volume*i.volume(),C.playbackRate=S._rate;try{var ue=C.play();if(ue&&typeof Promise<"u"&&(ue instanceof Promise||typeof ue.then=="function")?(g._playLock=!0,G(),ue.then(function(){g._playLock=!1,C._unlocked=!0,d?g._loadQueue():g._emit("play",S._id)}).catch(function(){g._playLock=!1,g._emit("playerror",S._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),S._ended=!0,S._paused=!0})):d||(g._playLock=!1,G(),g._emit("play",S._id)),C.playbackRate=S._rate,C.paused){g._emit("playerror",S._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}c!=="__default"||S._loop?g._endTimers[S._id]=setTimeout(g._ended.bind(g,S),U):(g._endTimers[S._id]=function(){g._ended(S),C.removeEventListener("ended",g._endTimers[S._id],!1)},C.addEventListener("ended",g._endTimers[S._id],!1))}catch(de){g._emit("playerror",S._id,de)}};C.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(C.src=g._src,C.load());var se=window&&window.ejecta||!C.readyState&&i._navigator.isCocoonJS;if(C.readyState>=3||se)z();else{g._playLock=!0,g._state="loading";var oe=function(){g._state="loaded",z(),C.removeEventListener(i._canPlayEvent,oe,!1)};C.addEventListener(i._canPlayEvent,oe,!1),g._clearTimer(S._id)}}return S._id},pause:function(c){var d=this;if(d._state!=="loaded"||d._playLock)return d._queue.push({event:"pause",action:function(){d.pause(c)}}),d;for(var g=d._getSoundIds(c),M=0;M<g.length;M++){d._clearTimer(g[M]);var T=d._soundById(g[M]);if(T&&!T._paused&&(T._seek=d.seek(g[M]),T._rateSeek=0,T._paused=!0,d._stopFade(g[M]),T._node))if(d._webAudio){if(!T._node.bufferSource)continue;typeof T._node.bufferSource.stop>"u"?T._node.bufferSource.noteOff(0):T._node.bufferSource.stop(0),d._cleanBuffer(T._node)}else(!isNaN(T._node.duration)||T._node.duration===1/0)&&T._node.pause();arguments[1]||d._emit("pause",T?T._id:null)}return d},stop:function(c,d){var g=this;if(g._state!=="loaded"||g._playLock)return g._queue.push({event:"stop",action:function(){g.stop(c)}}),g;for(var M=g._getSoundIds(c),T=0;T<M.length;T++){g._clearTimer(M[T]);var y=g._soundById(M[T]);y&&(y._seek=y._start||0,y._rateSeek=0,y._paused=!0,y._ended=!0,g._stopFade(M[T]),y._node&&(g._webAudio?y._node.bufferSource&&(typeof y._node.bufferSource.stop>"u"?y._node.bufferSource.noteOff(0):y._node.bufferSource.stop(0),g._cleanBuffer(y._node)):(!isNaN(y._node.duration)||y._node.duration===1/0)&&(y._node.currentTime=y._start||0,y._node.pause(),y._node.duration===1/0&&g._clearSound(y._node))),d||g._emit("stop",y._id))}return g},mute:function(c,d){var g=this;if(g._state!=="loaded"||g._playLock)return g._queue.push({event:"mute",action:function(){g.mute(c,d)}}),g;if(typeof d>"u")if(typeof c=="boolean")g._muted=c;else return g._muted;for(var M=g._getSoundIds(d),T=0;T<M.length;T++){var y=g._soundById(M[T]);y&&(y._muted=c,y._interval&&g._stopFade(y._id),g._webAudio&&y._node?y._node.gain.setValueAtTime(c?0:y._volume,i.ctx.currentTime):y._node&&(y._node.muted=i._muted?!0:c),g._emit("mute",y._id))}return g},volume:function(){var c=this,d=arguments,g,M;if(d.length===0)return c._volume;if(d.length===1||d.length===2&&typeof d[1]>"u"){var T=c._getSoundIds(),y=T.indexOf(d[0]);y>=0?M=parseInt(d[0],10):g=parseFloat(d[0])}else d.length>=2&&(g=parseFloat(d[0]),M=parseInt(d[1],10));var S;if(typeof g<"u"&&g>=0&&g<=1){if(c._state!=="loaded"||c._playLock)return c._queue.push({event:"volume",action:function(){c.volume.apply(c,d)}}),c;typeof M>"u"&&(c._volume=g),M=c._getSoundIds(M);for(var I=0;I<M.length;I++)S=c._soundById(M[I]),S&&(S._volume=g,d[2]||c._stopFade(M[I]),c._webAudio&&S._node&&!S._muted?S._node.gain.setValueAtTime(g,i.ctx.currentTime):S._node&&!S._muted&&(S._node.volume=g*i.volume()),c._emit("volume",S._id))}else return S=M?c._soundById(M):c._sounds[0],S?S._volume:0;return c},fade:function(c,d,g,M){var T=this;if(T._state!=="loaded"||T._playLock)return T._queue.push({event:"fade",action:function(){T.fade(c,d,g,M)}}),T;c=Math.min(Math.max(0,parseFloat(c)),1),d=Math.min(Math.max(0,parseFloat(d)),1),g=parseFloat(g),T.volume(c,M);for(var y=T._getSoundIds(M),S=0;S<y.length;S++){var I=T._soundById(y[S]);if(I){if(M||T._stopFade(y[S]),T._webAudio&&!I._muted){var O=i.ctx.currentTime,A=O+g/1e3;I._volume=c,I._node.gain.setValueAtTime(c,O),I._node.gain.linearRampToValueAtTime(d,A)}T._startFadeInterval(I,c,d,g,y[S],typeof M>"u")}}return T},_startFadeInterval:function(c,d,g,M,T,y){var S=this,I=d,O=g-d,A=Math.abs(O/.01),U=Math.max(4,A>0?M/A:M),N=Date.now();c._fadeTo=g,c._interval=setInterval(function(){var B=(Date.now()-N)/M;N=Date.now(),I+=O*B,I=Math.round(I*100)/100,O<0?I=Math.max(g,I):I=Math.min(g,I),S._webAudio?c._volume=I:S.volume(I,c._id,!0),y&&(S._volume=I),(g<d&&I<=g||g>d&&I>=g)&&(clearInterval(c._interval),c._interval=null,c._fadeTo=null,S.volume(g,c._id),S._emit("fade",c._id))},U)},_stopFade:function(c){var d=this,g=d._soundById(c);return g&&g._interval&&(d._webAudio&&g._node.gain.cancelScheduledValues(i.ctx.currentTime),clearInterval(g._interval),g._interval=null,d.volume(g._fadeTo,c),g._fadeTo=null,d._emit("fade",c)),d},loop:function(){var c=this,d=arguments,g,M,T;if(d.length===0)return c._loop;if(d.length===1)if(typeof d[0]=="boolean")g=d[0],c._loop=g;else return T=c._soundById(parseInt(d[0],10)),T?T._loop:!1;else d.length===2&&(g=d[0],M=parseInt(d[1],10));for(var y=c._getSoundIds(M),S=0;S<y.length;S++)T=c._soundById(y[S]),T&&(T._loop=g,c._webAudio&&T._node&&T._node.bufferSource&&(T._node.bufferSource.loop=g,g&&(T._node.bufferSource.loopStart=T._start||0,T._node.bufferSource.loopEnd=T._stop,c.playing(y[S])&&(c.pause(y[S],!0),c.play(y[S],!0)))));return c},rate:function(){var c=this,d=arguments,g,M;if(d.length===0)M=c._sounds[0]._id;else if(d.length===1){var T=c._getSoundIds(),y=T.indexOf(d[0]);y>=0?M=parseInt(d[0],10):g=parseFloat(d[0])}else d.length===2&&(g=parseFloat(d[0]),M=parseInt(d[1],10));var S;if(typeof g=="number"){if(c._state!=="loaded"||c._playLock)return c._queue.push({event:"rate",action:function(){c.rate.apply(c,d)}}),c;typeof M>"u"&&(c._rate=g),M=c._getSoundIds(M);for(var I=0;I<M.length;I++)if(S=c._soundById(M[I]),S){c.playing(M[I])&&(S._rateSeek=c.seek(M[I]),S._playStart=c._webAudio?i.ctx.currentTime:S._playStart),S._rate=g,c._webAudio&&S._node&&S._node.bufferSource?S._node.bufferSource.playbackRate.setValueAtTime(g,i.ctx.currentTime):S._node&&(S._node.playbackRate=g);var O=c.seek(M[I]),A=(c._sprite[S._sprite][0]+c._sprite[S._sprite][1])/1e3-O,U=A*1e3/Math.abs(S._rate);(c._endTimers[M[I]]||!S._paused)&&(c._clearTimer(M[I]),c._endTimers[M[I]]=setTimeout(c._ended.bind(c,S),U)),c._emit("rate",S._id)}}else return S=c._soundById(M),S?S._rate:c._rate;return c},seek:function(){var c=this,d=arguments,g,M;if(d.length===0)c._sounds.length&&(M=c._sounds[0]._id);else if(d.length===1){var T=c._getSoundIds(),y=T.indexOf(d[0]);y>=0?M=parseInt(d[0],10):c._sounds.length&&(M=c._sounds[0]._id,g=parseFloat(d[0]))}else d.length===2&&(g=parseFloat(d[0]),M=parseInt(d[1],10));if(typeof M>"u")return 0;if(typeof g=="number"&&(c._state!=="loaded"||c._playLock))return c._queue.push({event:"seek",action:function(){c.seek.apply(c,d)}}),c;var S=c._soundById(M);if(S)if(typeof g=="number"&&g>=0){var I=c.playing(M);I&&c.pause(M,!0),S._seek=g,S._ended=!1,c._clearTimer(M),!c._webAudio&&S._node&&!isNaN(S._node.duration)&&(S._node.currentTime=g);var O=function(){I&&c.play(M,!0),c._emit("seek",M)};if(I&&!c._webAudio){var A=function(){c._playLock?setTimeout(A,0):O()};setTimeout(A,0)}else O()}else if(c._webAudio){var U=c.playing(M)?i.ctx.currentTime-S._playStart:0,N=S._rateSeek?S._rateSeek-S._seek:0;return S._seek+(N+U*Math.abs(S._rate))}else return S._node.currentTime;return c},playing:function(c){var d=this;if(typeof c=="number"){var g=d._soundById(c);return g?!g._paused:!1}for(var M=0;M<d._sounds.length;M++)if(!d._sounds[M]._paused)return!0;return!1},duration:function(c){var d=this,g=d._duration,M=d._soundById(c);return M&&(g=d._sprite[M._sprite][1]/1e3),g},state:function(){return this._state},unload:function(){for(var c=this,d=c._sounds,g=0;g<d.length;g++)d[g]._paused||c.stop(d[g]._id),c._webAudio||(c._clearSound(d[g]._node),d[g]._node.removeEventListener("error",d[g]._errorFn,!1),d[g]._node.removeEventListener(i._canPlayEvent,d[g]._loadFn,!1),d[g]._node.removeEventListener("ended",d[g]._endFn,!1),i._releaseHtml5Audio(d[g]._node)),delete d[g]._node,c._clearTimer(d[g]._id);var M=i._howls.indexOf(c);M>=0&&i._howls.splice(M,1);var T=!0;for(g=0;g<i._howls.length;g++)if(i._howls[g]._src===c._src||c._src.indexOf(i._howls[g]._src)>=0){T=!1;break}return u&&T&&delete u[c._src],i.noAudio=!1,c._state="unloaded",c._sounds=[],c=null,null},on:function(c,d,g,M){var T=this,y=T["_on"+c];return typeof d=="function"&&y.push(M?{id:g,fn:d,once:M}:{id:g,fn:d}),T},off:function(c,d,g){var M=this,T=M["_on"+c],y=0;if(typeof d=="number"&&(g=d,d=null),d||g)for(y=0;y<T.length;y++){var S=g===T[y].id;if(d===T[y].fn&&S||!d&&S){T.splice(y,1);break}}else if(c)M["_on"+c]=[];else{var I=Object.keys(M);for(y=0;y<I.length;y++)I[y].indexOf("_on")===0&&Array.isArray(M[I[y]])&&(M[I[y]]=[])}return M},once:function(c,d,g){var M=this;return M.on(c,d,g,1),M},_emit:function(c,d,g){for(var M=this,T=M["_on"+c],y=T.length-1;y>=0;y--)(!T[y].id||T[y].id===d||c==="load")&&(setTimeout((function(S){S.call(this,d,g)}).bind(M,T[y].fn),0),T[y].once&&M.off(c,T[y].fn,T[y].id));return M._loadQueue(c),M},_loadQueue:function(c){var d=this;if(d._queue.length>0){var g=d._queue[0];g.event===c&&(d._queue.shift(),d._loadQueue()),c||g.action()}return d},_ended:function(c){var d=this,g=c._sprite;if(!d._webAudio&&c._node&&!c._node.paused&&!c._node.ended&&c._node.currentTime<c._stop)return setTimeout(d._ended.bind(d,c),100),d;var M=!!(c._loop||d._sprite[g][2]);if(d._emit("end",c._id),!d._webAudio&&M&&d.stop(c._id,!0).play(c._id),d._webAudio&&M){d._emit("play",c._id),c._seek=c._start||0,c._rateSeek=0,c._playStart=i.ctx.currentTime;var T=(c._stop-c._start)*1e3/Math.abs(c._rate);d._endTimers[c._id]=setTimeout(d._ended.bind(d,c),T)}return d._webAudio&&!M&&(c._paused=!0,c._ended=!0,c._seek=c._start||0,c._rateSeek=0,d._clearTimer(c._id),d._cleanBuffer(c._node),i._autoSuspend()),!d._webAudio&&!M&&d.stop(c._id,!0),d},_clearTimer:function(c){var d=this;if(d._endTimers[c]){if(typeof d._endTimers[c]!="function")clearTimeout(d._endTimers[c]);else{var g=d._soundById(c);g&&g._node&&g._node.removeEventListener("ended",d._endTimers[c],!1)}delete d._endTimers[c]}return d},_soundById:function(c){for(var d=this,g=0;g<d._sounds.length;g++)if(c===d._sounds[g]._id)return d._sounds[g];return null},_inactiveSound:function(){var c=this;c._drain();for(var d=0;d<c._sounds.length;d++)if(c._sounds[d]._ended)return c._sounds[d].reset();return new l(c)},_drain:function(){var c=this,d=c._pool,g=0,M=0;if(!(c._sounds.length<d)){for(M=0;M<c._sounds.length;M++)c._sounds[M]._ended&&g++;for(M=c._sounds.length-1;M>=0;M--){if(g<=d)return;c._sounds[M]._ended&&(c._webAudio&&c._sounds[M]._node&&c._sounds[M]._node.disconnect(0),c._sounds.splice(M,1),g--)}}},_getSoundIds:function(c){var d=this;if(typeof c>"u"){for(var g=[],M=0;M<d._sounds.length;M++)g.push(d._sounds[M]._id);return g}else return[c]},_refreshBuffer:function(c){var d=this;return c._node.bufferSource=i.ctx.createBufferSource(),c._node.bufferSource.buffer=u[d._src],c._panner?c._node.bufferSource.connect(c._panner):c._node.bufferSource.connect(c._node),c._node.bufferSource.loop=c._loop,c._loop&&(c._node.bufferSource.loopStart=c._start||0,c._node.bufferSource.loopEnd=c._stop||0),c._node.bufferSource.playbackRate.setValueAtTime(c._rate,i.ctx.currentTime),d},_cleanBuffer:function(c){var d=this,g=i._navigator&&i._navigator.vendor.indexOf("Apple")>=0;if(!c.bufferSource)return d;if(i._scratchBuffer&&c.bufferSource&&(c.bufferSource.onended=null,c.bufferSource.disconnect(0),g))try{c.bufferSource.buffer=i._scratchBuffer}catch{}return c.bufferSource=null,d},_clearSound:function(c){var d=/MSIE |Trident\//.test(i._navigator&&i._navigator.userAgent);d||(c.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var l=function(c){this._parent=c,this.init()};l.prototype={init:function(){var c=this,d=c._parent;return c._muted=d._muted,c._loop=d._loop,c._volume=d._volume,c._rate=d._rate,c._seek=0,c._paused=!0,c._ended=!0,c._sprite="__default",c._id=++i._counter,d._sounds.push(c),c.create(),c},create:function(){var c=this,d=c._parent,g=i._muted||c._muted||c._parent._muted?0:c._volume;return d._webAudio?(c._node=typeof i.ctx.createGain>"u"?i.ctx.createGainNode():i.ctx.createGain(),c._node.gain.setValueAtTime(g,i.ctx.currentTime),c._node.paused=!0,c._node.connect(i.masterGain)):i.noAudio||(c._node=i._obtainHtml5Audio(),c._errorFn=c._errorListener.bind(c),c._node.addEventListener("error",c._errorFn,!1),c._loadFn=c._loadListener.bind(c),c._node.addEventListener(i._canPlayEvent,c._loadFn,!1),c._endFn=c._endListener.bind(c),c._node.addEventListener("ended",c._endFn,!1),c._node.src=d._src,c._node.preload=d._preload===!0?"auto":d._preload,c._node.volume=g*i.volume(),c._node.load()),c},reset:function(){var c=this,d=c._parent;return c._muted=d._muted,c._loop=d._loop,c._volume=d._volume,c._rate=d._rate,c._seek=0,c._rateSeek=0,c._paused=!0,c._ended=!0,c._sprite="__default",c._id=++i._counter,c},_errorListener:function(){var c=this;c._parent._emit("loaderror",c._id,c._node.error?c._node.error.code:0),c._node.removeEventListener("error",c._errorFn,!1)},_loadListener:function(){var c=this,d=c._parent;d._duration=Math.ceil(c._node.duration*10)/10,Object.keys(d._sprite).length===0&&(d._sprite={__default:[0,d._duration*1e3]}),d._state!=="loaded"&&(d._state="loaded",d._emit("load"),d._loadQueue()),c._node.removeEventListener(i._canPlayEvent,c._loadFn,!1)},_endListener:function(){var c=this,d=c._parent;d._duration===1/0&&(d._duration=Math.ceil(c._node.duration*10)/10,d._sprite.__default[1]===1/0&&(d._sprite.__default[1]=d._duration*1e3),d._ended(c)),c._node.removeEventListener("ended",c._endFn,!1)}};var u={},p=function(c){var d=c._src;if(u[d]){c._duration=u[d].duration,_(c);return}if(/^data:[^;]+;base64,/.test(d)){for(var g=atob(d.split(",")[1]),M=new Uint8Array(g.length),T=0;T<g.length;++T)M[T]=g.charCodeAt(T);v(M.buffer,c)}else{var y=new XMLHttpRequest;y.open(c._xhr.method,d,!0),y.withCredentials=c._xhr.withCredentials,y.responseType="arraybuffer",c._xhr.headers&&Object.keys(c._xhr.headers).forEach(function(S){y.setRequestHeader(S,c._xhr.headers[S])}),y.onload=function(){var S=(y.status+"")[0];if(S!=="0"&&S!=="2"&&S!=="3"){c._emit("loaderror",null,"Failed loading audio file with status: "+y.status+".");return}v(y.response,c)},y.onerror=function(){c._webAudio&&(c._html5=!0,c._webAudio=!1,c._sounds=[],delete u[d],c.load())},m(y)}},m=function(c){try{c.send()}catch{c.onerror()}},v=function(c,d){var g=function(){d._emit("loaderror",null,"Decoding audio data failed.")},M=function(T){T&&d._sounds.length>0?(u[d._src]=T,_(d,T)):g()};typeof Promise<"u"&&i.ctx.decodeAudioData.length===1?i.ctx.decodeAudioData(c).then(M).catch(g):i.ctx.decodeAudioData(c,M,g)},_=function(c,d){d&&!c._duration&&(c._duration=d.duration),Object.keys(c._sprite).length===0&&(c._sprite={__default:[0,c._duration*1e3]}),c._state!=="loaded"&&(c._state="loaded",c._emit("load"),c._loadQueue())},x=function(){if(i.usingWebAudio){try{typeof AudioContext<"u"?i.ctx=new AudioContext:typeof webkitAudioContext<"u"?i.ctx=new webkitAudioContext:i.usingWebAudio=!1}catch{i.usingWebAudio=!1}i.ctx||(i.usingWebAudio=!1);var c=/iP(hone|od|ad)/.test(i._navigator&&i._navigator.platform),d=i._navigator&&i._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),g=d?parseInt(d[1],10):null;if(c&&g&&g<9){var M=/safari/.test(i._navigator&&i._navigator.userAgent.toLowerCase());i._navigator&&!M&&(i.usingWebAudio=!1)}i.usingWebAudio&&(i.masterGain=typeof i.ctx.createGain>"u"?i.ctx.createGainNode():i.ctx.createGain(),i.masterGain.gain.setValueAtTime(i._muted?0:i._volume,i.ctx.currentTime),i.masterGain.connect(i.ctx.destination)),i._setup()}};o.Howler=i,o.Howl=r,typeof Eo<"u"?(Eo.HowlerGlobal=e,Eo.Howler=i,Eo.Howl=r,Eo.Sound=l):typeof window<"u"&&(window.HowlerGlobal=e,window.Howler=i,window.Howl=r,window.Sound=l)})();/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(i){var r=this;if(!r.ctx||!r.ctx.listener)return r;for(var l=r._howls.length-1;l>=0;l--)r._howls[l].stereo(i);return r},HowlerGlobal.prototype.pos=function(i,r,l){var u=this;if(!u.ctx||!u.ctx.listener)return u;if(r=typeof r!="number"?u._pos[1]:r,l=typeof l!="number"?u._pos[2]:l,typeof i=="number")u._pos=[i,r,l],typeof u.ctx.listener.positionX<"u"?(u.ctx.listener.positionX.setTargetAtTime(u._pos[0],Howler.ctx.currentTime,.1),u.ctx.listener.positionY.setTargetAtTime(u._pos[1],Howler.ctx.currentTime,.1),u.ctx.listener.positionZ.setTargetAtTime(u._pos[2],Howler.ctx.currentTime,.1)):u.ctx.listener.setPosition(u._pos[0],u._pos[1],u._pos[2]);else return u._pos;return u},HowlerGlobal.prototype.orientation=function(i,r,l,u,p,m){var v=this;if(!v.ctx||!v.ctx.listener)return v;var _=v._orientation;if(r=typeof r!="number"?_[1]:r,l=typeof l!="number"?_[2]:l,u=typeof u!="number"?_[3]:u,p=typeof p!="number"?_[4]:p,m=typeof m!="number"?_[5]:m,typeof i=="number")v._orientation=[i,r,l,u,p,m],typeof v.ctx.listener.forwardX<"u"?(v.ctx.listener.forwardX.setTargetAtTime(i,Howler.ctx.currentTime,.1),v.ctx.listener.forwardY.setTargetAtTime(r,Howler.ctx.currentTime,.1),v.ctx.listener.forwardZ.setTargetAtTime(l,Howler.ctx.currentTime,.1),v.ctx.listener.upX.setTargetAtTime(u,Howler.ctx.currentTime,.1),v.ctx.listener.upY.setTargetAtTime(p,Howler.ctx.currentTime,.1),v.ctx.listener.upZ.setTargetAtTime(m,Howler.ctx.currentTime,.1)):v.ctx.listener.setOrientation(i,r,l,u,p,m);else return _;return v},Howl.prototype.init=(function(i){return function(r){var l=this;return l._orientation=r.orientation||[1,0,0],l._stereo=r.stereo||null,l._pos=r.pos||null,l._pannerAttr={coneInnerAngle:typeof r.coneInnerAngle<"u"?r.coneInnerAngle:360,coneOuterAngle:typeof r.coneOuterAngle<"u"?r.coneOuterAngle:360,coneOuterGain:typeof r.coneOuterGain<"u"?r.coneOuterGain:0,distanceModel:typeof r.distanceModel<"u"?r.distanceModel:"inverse",maxDistance:typeof r.maxDistance<"u"?r.maxDistance:1e4,panningModel:typeof r.panningModel<"u"?r.panningModel:"HRTF",refDistance:typeof r.refDistance<"u"?r.refDistance:1,rolloffFactor:typeof r.rolloffFactor<"u"?r.rolloffFactor:1},l._onstereo=r.onstereo?[{fn:r.onstereo}]:[],l._onpos=r.onpos?[{fn:r.onpos}]:[],l._onorientation=r.onorientation?[{fn:r.onorientation}]:[],i.call(this,r)}})(Howl.prototype.init),Howl.prototype.stereo=function(i,r){var l=this;if(!l._webAudio)return l;if(l._state!=="loaded")return l._queue.push({event:"stereo",action:function(){l.stereo(i,r)}}),l;var u=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof r>"u")if(typeof i=="number")l._stereo=i,l._pos=[i,0,0];else return l._stereo;for(var p=l._getSoundIds(r),m=0;m<p.length;m++){var v=l._soundById(p[m]);if(v)if(typeof i=="number")v._stereo=i,v._pos=[i,0,0],v._node&&(v._pannerAttr.panningModel="equalpower",(!v._panner||!v._panner.pan)&&e(v,u),u==="spatial"?typeof v._panner.positionX<"u"?(v._panner.positionX.setValueAtTime(i,Howler.ctx.currentTime),v._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),v._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):v._panner.setPosition(i,0,0):v._panner.pan.setValueAtTime(i,Howler.ctx.currentTime)),l._emit("stereo",v._id);else return v._stereo}return l},Howl.prototype.pos=function(i,r,l,u){var p=this;if(!p._webAudio)return p;if(p._state!=="loaded")return p._queue.push({event:"pos",action:function(){p.pos(i,r,l,u)}}),p;if(r=typeof r!="number"?0:r,l=typeof l!="number"?-.5:l,typeof u>"u")if(typeof i=="number")p._pos=[i,r,l];else return p._pos;for(var m=p._getSoundIds(u),v=0;v<m.length;v++){var _=p._soundById(m[v]);if(_)if(typeof i=="number")_._pos=[i,r,l],_._node&&((!_._panner||_._panner.pan)&&e(_,"spatial"),typeof _._panner.positionX<"u"?(_._panner.positionX.setValueAtTime(i,Howler.ctx.currentTime),_._panner.positionY.setValueAtTime(r,Howler.ctx.currentTime),_._panner.positionZ.setValueAtTime(l,Howler.ctx.currentTime)):_._panner.setPosition(i,r,l)),p._emit("pos",_._id);else return _._pos}return p},Howl.prototype.orientation=function(i,r,l,u){var p=this;if(!p._webAudio)return p;if(p._state!=="loaded")return p._queue.push({event:"orientation",action:function(){p.orientation(i,r,l,u)}}),p;if(r=typeof r!="number"?p._orientation[1]:r,l=typeof l!="number"?p._orientation[2]:l,typeof u>"u")if(typeof i=="number")p._orientation=[i,r,l];else return p._orientation;for(var m=p._getSoundIds(u),v=0;v<m.length;v++){var _=p._soundById(m[v]);if(_)if(typeof i=="number")_._orientation=[i,r,l],_._node&&(_._panner||(_._pos||(_._pos=p._pos||[0,0,-.5]),e(_,"spatial")),typeof _._panner.orientationX<"u"?(_._panner.orientationX.setValueAtTime(i,Howler.ctx.currentTime),_._panner.orientationY.setValueAtTime(r,Howler.ctx.currentTime),_._panner.orientationZ.setValueAtTime(l,Howler.ctx.currentTime)):_._panner.setOrientation(i,r,l)),p._emit("orientation",_._id);else return _._orientation}return p},Howl.prototype.pannerAttr=function(){var i=this,r=arguments,l,u,p;if(!i._webAudio)return i;if(r.length===0)return i._pannerAttr;if(r.length===1)if(typeof r[0]=="object")l=r[0],typeof u>"u"&&(l.pannerAttr||(l.pannerAttr={coneInnerAngle:l.coneInnerAngle,coneOuterAngle:l.coneOuterAngle,coneOuterGain:l.coneOuterGain,distanceModel:l.distanceModel,maxDistance:l.maxDistance,refDistance:l.refDistance,rolloffFactor:l.rolloffFactor,panningModel:l.panningModel}),i._pannerAttr={coneInnerAngle:typeof l.pannerAttr.coneInnerAngle<"u"?l.pannerAttr.coneInnerAngle:i._coneInnerAngle,coneOuterAngle:typeof l.pannerAttr.coneOuterAngle<"u"?l.pannerAttr.coneOuterAngle:i._coneOuterAngle,coneOuterGain:typeof l.pannerAttr.coneOuterGain<"u"?l.pannerAttr.coneOuterGain:i._coneOuterGain,distanceModel:typeof l.pannerAttr.distanceModel<"u"?l.pannerAttr.distanceModel:i._distanceModel,maxDistance:typeof l.pannerAttr.maxDistance<"u"?l.pannerAttr.maxDistance:i._maxDistance,refDistance:typeof l.pannerAttr.refDistance<"u"?l.pannerAttr.refDistance:i._refDistance,rolloffFactor:typeof l.pannerAttr.rolloffFactor<"u"?l.pannerAttr.rolloffFactor:i._rolloffFactor,panningModel:typeof l.pannerAttr.panningModel<"u"?l.pannerAttr.panningModel:i._panningModel});else return p=i._soundById(parseInt(r[0],10)),p?p._pannerAttr:i._pannerAttr;else r.length===2&&(l=r[0],u=parseInt(r[1],10));for(var m=i._getSoundIds(u),v=0;v<m.length;v++)if(p=i._soundById(m[v]),p){var _=p._pannerAttr;_={coneInnerAngle:typeof l.coneInnerAngle<"u"?l.coneInnerAngle:_.coneInnerAngle,coneOuterAngle:typeof l.coneOuterAngle<"u"?l.coneOuterAngle:_.coneOuterAngle,coneOuterGain:typeof l.coneOuterGain<"u"?l.coneOuterGain:_.coneOuterGain,distanceModel:typeof l.distanceModel<"u"?l.distanceModel:_.distanceModel,maxDistance:typeof l.maxDistance<"u"?l.maxDistance:_.maxDistance,refDistance:typeof l.refDistance<"u"?l.refDistance:_.refDistance,rolloffFactor:typeof l.rolloffFactor<"u"?l.rolloffFactor:_.rolloffFactor,panningModel:typeof l.panningModel<"u"?l.panningModel:_.panningModel};var x=p._panner;x||(p._pos||(p._pos=i._pos||[0,0,-.5]),e(p,"spatial"),x=p._panner),x.coneInnerAngle=_.coneInnerAngle,x.coneOuterAngle=_.coneOuterAngle,x.coneOuterGain=_.coneOuterGain,x.distanceModel=_.distanceModel,x.maxDistance=_.maxDistance,x.refDistance=_.refDistance,x.rolloffFactor=_.rolloffFactor,x.panningModel=_.panningModel}return i},Sound.prototype.init=(function(i){return function(){var r=this,l=r._parent;r._orientation=l._orientation,r._stereo=l._stereo,r._pos=l._pos,r._pannerAttr=l._pannerAttr,i.call(this),r._stereo?l.stereo(r._stereo):r._pos&&l.pos(r._pos[0],r._pos[1],r._pos[2],r._id)}})(Sound.prototype.init),Sound.prototype.reset=(function(i){return function(){var r=this,l=r._parent;return r._orientation=l._orientation,r._stereo=l._stereo,r._pos=l._pos,r._pannerAttr=l._pannerAttr,r._stereo?l.stereo(r._stereo):r._pos?l.pos(r._pos[0],r._pos[1],r._pos[2],r._id):r._panner&&(r._panner.disconnect(0),r._panner=void 0,l._refreshBuffer(r)),i.call(this)}})(Sound.prototype.reset);var e=function(i,r){r=r||"spatial",r==="spatial"?(i._panner=Howler.ctx.createPanner(),i._panner.coneInnerAngle=i._pannerAttr.coneInnerAngle,i._panner.coneOuterAngle=i._pannerAttr.coneOuterAngle,i._panner.coneOuterGain=i._pannerAttr.coneOuterGain,i._panner.distanceModel=i._pannerAttr.distanceModel,i._panner.maxDistance=i._pannerAttr.maxDistance,i._panner.refDistance=i._pannerAttr.refDistance,i._panner.rolloffFactor=i._pannerAttr.rolloffFactor,i._panner.panningModel=i._pannerAttr.panningModel,typeof i._panner.positionX<"u"?(i._panner.positionX.setValueAtTime(i._pos[0],Howler.ctx.currentTime),i._panner.positionY.setValueAtTime(i._pos[1],Howler.ctx.currentTime),i._panner.positionZ.setValueAtTime(i._pos[2],Howler.ctx.currentTime)):i._panner.setPosition(i._pos[0],i._pos[1],i._pos[2]),typeof i._panner.orientationX<"u"?(i._panner.orientationX.setValueAtTime(i._orientation[0],Howler.ctx.currentTime),i._panner.orientationY.setValueAtTime(i._orientation[1],Howler.ctx.currentTime),i._panner.orientationZ.setValueAtTime(i._orientation[2],Howler.ctx.currentTime)):i._panner.setOrientation(i._orientation[0],i._orientation[1],i._orientation[2])):(i._panner=Howler.ctx.createStereoPanner(),i._panner.pan.setValueAtTime(i._stereo,Howler.ctx.currentTime)),i._panner.connect(i._node),i._paused||i._parent.pause(i._id,!0).play(i._id,!0)}})()})(Vf)),Vf}var px=hx();const mx="/oldschool-tetris/sounds/dropTetroid.wav",_x="/oldschool-tetris/sounds/moveTetroid.wav",gx="/oldschool-tetris/sounds/openWindow.wav",cg={moveTetroid:{path:_x,volume:.2},dropTetroid:{path:mx,volume:.15},openWindow:{path:gx,volume:.3}};class vx{sounds;isMuted=!1;defaultVolumes;constructor(){this.sounds={},this.defaultVolumes={};for(const e in cg){const{path:i,volume:r}=cg[e];this.sounds[e]=new px.Howl({src:[i],volume:r}),this.defaultVolumes[e]=r}}play(e){this.isMuted||this.sounds[e]?.play()}setVolume(e){for(const i in this.sounds)this.sounds[i].volume(e),this.defaultVolumes[i]=e}mute(){this.isMuted=!0;for(const e in this.sounds)this.sounds[e].volume(0)}unmute(){this.isMuted=!1;for(const e in this.sounds)this.sounds[e].volume(this.defaultVolumes[e])}toggleMute(){this.isMuted?this.unmute():this.mute()}}const Ru=new vx,Sn={EMPTY:"empty",BLOCK:"block"};class Sx{board;currentPiece;nextPiece;status;animationStatus;bag;scoreSystem;highScoreManager;tickSpeed;constructor(e=1){this.board=this.createEmptyBoard(),this.bag=new lg,this.currentPiece=this.bag.next(),this.nextPiece=this.bag.next(),this.status="menu",this.animationStatus="idle",this.scoreSystem=new dx(e),this.highScoreManager=new uh,this.tickSpeed=Math.max(ig,Math.floor(ng*Math.pow(ag,e-1)))}async render(){this.status!=="gameover"&&(this.status==="menu"?(this.animationStatus="running",await new Promise(e=>{Jt.emit(Qt.MENU,e)}),this.animationStatus="idle"):Jt.emit(Qt.RENDER,this.board,this.currentPiece,{score:this.scoreSystem.score,lines:this.scoreSystem.lines,level:this.scoreSystem.getLevel(),nextPiece:this.nextPiece}))}_createTestBoard(e){const i=e?.fillBottomRows??0,r=e?.skipColumn??0,l=Array.from({length:Ci},()=>Array.from({length:Jn},()=>Sn.EMPTY));for(let u=0;u<i;u++){const p=Ci-1-u;for(let m=0;m<Jn;m++)l[p][m]=m===r?Sn.EMPTY:Sn.BLOCK}return l}createEmptyBoard(){return Array.from({length:Ci},()=>Array.from({length:Jn},()=>Sn.EMPTY))}spawnPiece(){if(this.currentPiece=this.nextPiece,this.hasCollision(this.currentPiece)){this.status="gameover",Jt.emit(Qt.STATUS_CHANGED,this.status),this.highScoreManager.tryUpdate({score:this.scoreSystem.score,level:this.scoreSystem.getLevel(),lines:this.scoreSystem.lines});return}this.nextPiece=this.bag.next()}hasCollision(e){for(let i=0;i<e.shape.length;i++)for(let r=0;r<e.shape[i].length;r++)if(e.shape[i][r]===1){const l=e.position.x+r,u=e.position.y+i;if(l<0||l>=Jn||u>=Ci||u>=0&&this.board[u][l]===Sn.BLOCK)return!0}return!1}mergePiece(e){for(let i=0;i<e.shape.length;i++)for(let r=0;r<e.shape[i].length;r++)if(e.shape[i][r]===1){const l=e.position.y+i,u=e.position.x+r;l>=0&&(this.board[l][u]="block")}}tick(){this.animationStatus!=="running"&&(this.moveDown(),this.render())}applyAction(e){if(this.animationStatus!=="running"&&this.status==="playing"){switch(e){case"moveLeft":this.move(-1);break;case"moveRight":this.move(1);break;case"rotate":this.rotate();break;case"softDrop":this.moveDown(!0);break;case"hardDrop":this.drop();break}this.render()}}move(e){if(this.status!=="playing")return;const i={...this.currentPiece,position:{x:this.currentPiece.position.x+e,y:this.currentPiece.position.y}};this.hasCollision(i)||(this.currentPiece=i)}moveDown(e=!1){if(this.status!=="playing")return;const i={...this.currentPiece,position:{x:this.currentPiece.position.x,y:this.currentPiece.position.y+1}};this.hasCollision(i)?(this.mergePiece(this.currentPiece),this.spawnPiece(),this.checkAndClearLines()):(this.currentPiece=i,e&&this.scoreSystem.addSoftDrop(1))}rotate(){this.status==="playing"&&(this.currentPiece=ox(this.currentPiece,e=>this.hasCollision(e)))}drop(){if(this.status!=="playing")return;Ru.play("dropTetroid");const e={...this.currentPiece.position};let i=0;for(;!this.hasCollision({...this.currentPiece,position:{...e,y:e.y+1}});)e.y++,i++;this.currentPiece.position=e,this.scoreSystem.addHardDrop(i),this.tick()}updateTickSpeed(){this.tickSpeed=Math.max(ig,Math.floor(ng*Math.pow(ag,this.scoreSystem.getLevel()-1)))}async checkAndClearLines(){const e=[];for(let r=0;r<this.board.length;r++)this.board[r].every(l=>l===Sn.BLOCK)&&e.push(r);const i=this.scoreSystem.getLevel();if(this.scoreSystem.addLineClear(e.length),e.length>0){this.scoreSystem.getLevel()!==i&&this.updateTickSpeed();const r=this.dropBlocks(structuredClone(this.board),e);this.animationStatus="running",await new Promise(l=>{Jt.emit(Qt.ANIMATE_LINE_CLEAR,this.board,e,r,{score:this.scoreSystem.score,lines:this.scoreSystem.lines,level:this.scoreSystem.getLevel(),nextPiece:this.nextPiece},this.currentPiece,l)}),this.animationStatus="idle",this.board=r}return e}dropBlocks(e,i){const r=e.filter((u,p)=>!i.includes(p));return[...Array.from({length:i.length},()=>Array(e[0].length).fill(Sn.EMPTY)),...r]}resetState(){this.board=this.createEmptyBoard(),this.bag=new lg,this.scoreSystem.reset(),this.updateTickSpeed()}async restart(){this.status="restarting",this.animationStatus="running";const e=this.board.map((u,p)=>u.some(m=>m===Sn.BLOCK)?p:null).filter(u=>u!==null),i=Math.min(...e),r=Math.max(...e),l=[];for(let u=i;u<=r;u++)l.push(u);await new Promise(u=>{Jt.emit(Qt.ANIMATE_CLEAR_BLOCKS,this.board,l,{score:0,lines:0,level:this.scoreSystem.getStartLevel(),nextPiece:this.nextPiece},u)}),this.animationStatus="idle",this.resetState(),this.render(),this.spawnPiece(),this.status="playing"}}async function xx(o,e){const i=new FontFace(o,`url(${e})`);await i.load(),document.fonts.add(i)}class yx{cancelWindowAnimation(){this.isWindowCancelled=!0}ctx;blockSize;offsetX;offsetY;currentScoreMessage="";isWindowCancelled=!1;constructor(e,i=32){this.ctx=e,this.blockSize=i;const r=$S*this.blockSize,l=ex*this.blockSize;this.offsetX=(this.ctx.canvas.width-r)/2,this.offsetY=(this.ctx.canvas.height-l)/2}async init(){await xx("Dina","/oldschool-tetris/fonts/DinaRemasterII.ttc"),this.ctx.font=`${this.blockSize}px Dina`,this.ctx.fillStyle="lime",this.ctx.textBaseline="top",this.ctx.textAlign="left"}delay=e=>new Promise(i=>setTimeout(i,e));setNewScoreMessage(e){this.currentScoreMessage=e,setTimeout(()=>{this.currentScoreMessage===e&&(this.currentScoreMessage="")},3e3)}drawScoreMessage(){this.ctx.fillText(this.currentScoreMessage,20,this.ctx.canvas.height-100)}drawCell(e,i,r){this.ctx.fillText(r?"[]":" .",this.offsetX+(e+1)*this.blockSize,this.offsetY+i*this.blockSize)}drawBorders(e){this.ctx.fillText("<!",this.offsetX,this.offsetY+e*this.blockSize),this.ctx.fillText("!>",this.offsetX+(Jn+1)*this.blockSize,this.offsetY+e*this.blockSize)}drawBottom(){const e="<!"+"=".repeat(Jn*2)+"!>";this.ctx.fillText(e,this.offsetX,this.offsetY+Ci*this.blockSize);const i="  "+Array.from({length:Jn*2},(r,l)=>l%2===0?"\\":"/").join("")+"  ";this.ctx.fillText(i,this.offsetX,this.offsetY+(Ci+1)*this.blockSize)}drawBoard(e){e.forEach((i,r)=>{this.drawBorders(r),i.forEach((l,u)=>this.drawCell(u,r,l===Sn.BLOCK))}),this.drawBottom()}drawCurrentPiece(e,i){i.shape.forEach((r,l)=>{r.forEach((u,p)=>{if(u===1){const m=i.position.y+l,v=i.position.x+p;m>=0&&m<Ci&&v>=0&&v<Jn&&(e[m][v]=Sn.BLOCK)}})})}drawHUD(e,i,r){this.ctx.fillText(`SCORE: ${e}`,20,20),this.ctx.fillText(`LEVEL: ${r}`,20,20+this.blockSize),this.ctx.fillText(`LINES: ${i}`,20,20+this.blockSize*2)}drawInstructions(){const e=this.ctx.canvas.width-300,i=20,r=this.blockSize;["← → : MOVE","↑ / X : ROTATE","↓ : SOFT DROP","SPACE : HARD DROP","P : PAUSE","R : RESTART","M : MUTE/UNMUTE"].forEach((u,p)=>{this.ctx.fillText(u,e,i+p*r)})}drawNextPiece(e){if(!e)return;const i=Ci*this.blockSize,r=this.offsetY+i/2,l=this.offsetX-this.blockSize*5;this.ctx.textAlign="left",this.ctx.fillText("NEXT:",l,r-this.blockSize*2),e.shape.forEach((u,p)=>{u.forEach((m,v)=>{m===1&&this.ctx.fillText("[]",l+v*this.blockSize,r-20+p*this.blockSize)})})}render(e,i,r){this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height),Ru.play("moveTetroid");const l=e.map(u=>[...u]);i&&this.drawCurrentPiece(l,i),this.drawBoard(l),r&&(this.drawHUD(r.score,r.lines,r.level),this.drawNextPiece(r.nextPiece)),this.drawInstructions(),this.drawScoreMessage()}async animateLineClear(e,i,r,l,u){const p=structuredClone(e);for(const m of i)for(let v=0;v<Jn;v++)await this.delay(Ua),p[m][v]=Sn.EMPTY,this.render(p,u,l);if(i.length>0){const m=Math.min(...i);for(let v=0;v<=m-1;v++)for(let _=0;_<Jn;_++)p[v][_]===Sn.BLOCK&&(await this.delay(Ua),p[v][_]=Sn.EMPTY,this.render(p,u,l))}for(let m=0;m<=Ci-1;m++)for(let v=0;v<Jn;v++)r[m][v]===Sn.BLOCK&&p[m][v]===Sn.EMPTY&&(await this.delay(Ua),p[m][v]=Sn.BLOCK,this.render(p,u,l))}async animateClearBlocks(e,i,r,l){const u=structuredClone(e);for(const p of i)for(let m=0;m<Jn;m++)u[p][m]===Sn.BLOCK&&(await this.delay(Ua),u[p][m]=Sn.EMPTY,this.render(u,l,r))}async renderMenu(e=!0){this.ctx.save(),this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height);const i=28;this.ctx.textBaseline="top",this.ctx.fillStyle="lime",this.ctx.font=`${i}px Dina`,this.ctx.textAlign="center",this.ctx.textBaseline="middle";const r=this.ctx.canvas.height/4;e?await Promise.all(sg.map((u,p)=>this.printTextAnimated(u,this.ctx.canvas.width/2,r+p*i,i,Ua,"rgba(0,0,0,0.0)","lime"))):sg.forEach((u,p)=>{this.ctx.fillText(u,this.ctx.canvas.width/2,r+p*i)});const l=42;this.ctx.font=`${l}px Dina`,e?await this.printTextAnimated("PRESS [S] TO START",this.ctx.canvas.width/2,this.ctx.canvas.height*3/4,l,Ua,"rgba(0,0,0,0.0)","white"):(this.ctx.fillStyle="white",this.ctx.fillText("PRESS [S] TO START",this.ctx.canvas.width/2,this.ctx.canvas.height*3/4)),new uh().getBest()&&(e?await this.printTextAnimated("PRESS [B] TO SHOW HIGHSCORE",this.ctx.canvas.width-250,this.ctx.canvas.height*3/6,l/1.5,Ua,"rgba(0,0,0,0.0)","white"):(this.ctx.font=`${l/1.5}px Dina`,this.ctx.fillStyle="white",this.ctx.fillText("PRESS [B] TO SHOW HIGHSCORE",this.ctx.canvas.width-250,this.ctx.canvas.height*3/6))),this.ctx.restore()}async printTextAnimated(e,i,r,l=16,u=50,p="rgba(0,0,0,0.0)",m="white",v=4){let _="";this.ctx.save(),this.ctx.font=`${l}px Dina`,this.ctx.textAlign="center",this.ctx.textBaseline="middle";const x=this.ctx.measureText(e).width,c=l*1.4;for(let d=0;d<e.length&&!this.isWindowCancelled;d++)_+=e[d],this.ctx.clearRect(i-x/2-v,r-c/2,x+v*2,c*1.2),this.ctx.fillStyle=p,this.ctx.fillRect(i-x/2-v,r-c/2,x+v*2,c*1.2),this.ctx.fillStyle=m,this.ctx.fillText(_,i,r),await this.delay(u);this.ctx.restore()}async renderWindow(e,i=!0){this.isWindowCancelled=!1,Ru.play("openWindow"),this.ctx.save();const r=this.blockSize*1.5,l=12*this.blockSize,u=(e.length+1)*r,p=(this.ctx.canvas.width-l)/2,m=(this.ctx.canvas.height-u)/2;if(this.ctx.fillStyle="rgba(0, 0, 0, 0.8)",this.ctx.fillRect(p,m,l,u),this.ctx.strokeStyle="lime",this.ctx.lineWidth=2,this.ctx.strokeRect(p,m,l,u),this.ctx.fillStyle="white",this.ctx.font=`${this.blockSize}px Dina`,this.ctx.textAlign="center",this.ctx.textBaseline="middle",i)for(let v=0;v<e.length&&!this.isWindowCancelled;v++)await this.printTextAnimated(e[v],this.ctx.canvas.width/2,m+(v+1)*r,this.blockSize,Ua,"rgba(0,0,0,0.8)");else for(let v=0;v<e.length&&!this.isWindowCancelled;v++)this.ctx.fillText(e[v],this.ctx.canvas.width/2,m+(v+1)*r);this.ctx.restore()}}const fg=o=>{let e;const i=new Set,r=(_,x)=>{const c=typeof _=="function"?_(e):_;if(!Object.is(c,e)){const d=e;e=x??(typeof c!="object"||c===null)?c:Object.assign({},e,c),i.forEach(g=>g(e,d))}},l=()=>e,m={setState:r,getState:l,getInitialState:()=>v,subscribe:_=>(i.add(_),()=>i.delete(_))},v=e=o(r,l,m);return m},Mx=(o=>o?fg(o):fg),Ex=o=>o;function Tx(o,e=Ex){const i=Ql.useSyncExternalStore(o.subscribe,Ql.useCallback(()=>e(o.getState()),[o,e]),Ql.useCallback(()=>e(o.getInitialState()),[o,e]));return Ql.useDebugValue(i),i}const dg=o=>{const e=Mx(o),i=r=>Tx(e,r);return Object.assign(i,e),i},Ax=(o=>o?dg(o):dg),xd=Ax(o=>({status:"menu",score:0,lines:0,level:1,setStatus:e=>o({status:e}),setScore:e=>o({score:e}),setLines:e=>o({lines:e}),setLevel:e=>o({level:e})}));class bx{renderer;isHighScoreWindowVisible=!1;constructor(e){this.renderer=e,this.subscribe()}subscribe(){Jt.on(Qt.RENDER,this.handleRender),Jt.on(Qt.MENU,this.handleMenu),Jt.on(Qt.ANIMATE_LINE_CLEAR,this.handleLineClear),Jt.on(Qt.ANIMATE_CLEAR_BLOCKS,this.handleClearBlocks),Jt.on(Qt.STATUS_CHANGED,this.handleStatusChange),Jt.on(Qt.SCORE_EVENT,this.handleScoreEvent),Jt.on(Qt.SHOW_HIGHEST_SCORE,this.handleShowHighestScore)}handleRender=(e,i,r)=>{this.renderer.render(e,i,r)};handleMenu=async e=>{await this.renderer.renderMenu(),e?.()};handleLineClear=async(e,i,r,l,u,p)=>{await this.renderer.animateLineClear(e,i,r,l,u),p?.()};handleClearBlocks=async(e,i,r,l)=>{await this.renderer.animateClearBlocks(e,i,r),l?.()};handleStatusChange=e=>{e==="paused"?this.renderer.renderWindow(["PAUSED","PRESS [P] TO RESUME"]):e==="gameover"&&this.renderer.renderWindow(["GAME OVER","PRESS [R] TO RESTART"])};handleScoreEvent=e=>{this.renderer.setNewScoreMessage(e)};handleShowHighestScore=()=>{if(this.isHighScoreWindowVisible)this.isHighScoreWindowVisible=!1,this.renderer.cancelWindowAnimation(),this.renderer.renderMenu(!1);else{const e=new uh().getBest();if(!e)return;const i=Object.entries(e).map(([r,l])=>`${r.toUpperCase()}: ${l}`);this.isHighScoreWindowVisible=!0,this.renderer.renderWindow(i)}};unsubscribe(){Jt.off(Qt.RENDER,this.handleRender),Jt.off(Qt.MENU,this.handleMenu),Jt.off(Qt.ANIMATE_LINE_CLEAR,this.handleLineClear),Jt.off(Qt.ANIMATE_CLEAR_BLOCKS,this.handleClearBlocks),Jt.off(Qt.STATUS_CHANGED,this.handleStatusChange),Jt.off(Qt.SCORE_EVENT,this.handleScoreEvent),Jt.off(Qt.SHOW_HIGHEST_SCORE,this.handleShowHighestScore)}}function Rx(o){const e=Gn.useRef(new Sx),{status:i,setStatus:r}=xd(),[l,u]=Gn.useState(e.current.tickSpeed),[p,m]=Gn.useState(null),v=window.innerHeight,_=v*4/3;return Gn.useEffect(()=>{if(!o.current)return;const x=o.current.getContext("2d");if(!x)return;o.current.width=_,o.current.height=v;const c=new yx(x);c.init().then(()=>e.current.render());const d=new bx(c);return m(o.current),()=>d.unsubscribe()},[o,v,_]),Gn.useEffect(()=>{const x=e.current;if(x.status!=="playing")return;const c=setInterval(()=>{x.tick(),x.tickSpeed!==l&&u(x.tickSpeed),x.status!==i&&r(x.status)},x.tickSpeed);return()=>clearInterval(c)},[r,i,l]),{engine:e.current,canvasReady:p,height:v,width:_}}function wx(o){const e=xd(p=>p.status),i=xd(p=>p.setStatus),r=Gn.useCallback(()=>{e==="gameover"||e==="menu"||(e==="paused"?(i("playing"),o.status="playing"):e==="playing"&&(i("paused"),o.status="paused"),Jt.emit(Qt.STATUS_CHANGED,o.status))},[e,i,o]),l=Gn.useCallback(()=>{e==="menu"&&o.animationStatus==="idle"&&(i("playing"),o.status="playing")},[e,i,o]),u=Gn.useCallback(()=>{(e==="playing"||e==="paused"||e==="gameover")&&(i("restarting"),o.status="restarting",o.restart().then(()=>{i("playing")}))},[e,i,o]);Gn.useEffect(()=>{function p(m){switch(["ArrowLeft","ArrowRight","ArrowDown","ArrowUp","KeyX","Space","KeyP","KeyS","KeyR","KeyB","KeyM"].includes(m.code)&&m.preventDefault(),m.code){case"ArrowLeft":o.applyAction("moveLeft");break;case"ArrowRight":o.applyAction("moveRight");break;case"ArrowDown":o.applyAction("softDrop");break;case"ArrowUp":case"KeyX":o.applyAction("rotate");break;case"Space":o.applyAction("hardDrop");break;case"KeyP":r();break;case"KeyS":l();break;case"KeyR":u();break;case"KeyB":e==="menu"&&Jt.emit(Qt.SHOW_HIGHEST_SCORE);break;case"KeyM":Ru.toggleMute();break}}return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[e,o,i,r,l,u])}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ch="179",Cx=0,hg=1,Dx=2,lv=1,Ux=2,ea=3,Va=0,Vn=1,ta=2,Ha=0,Ss=1,pg=2,mg=3,_g=4,Lx=5,pr=100,Nx=101,Ox=102,Px=103,Bx=104,Ix=200,zx=201,Fx=202,Hx=203,yd=204,Md=205,Gx=206,Vx=207,kx=208,Xx=209,Wx=210,qx=211,Yx=212,Zx=213,Kx=214,Ed=0,Td=1,Ad=2,Ms=3,bd=4,Rd=5,wd=6,Cd=7,uv=0,jx=1,Qx=2,Ga=0,Jx=1,$x=2,ey=3,ty=4,ny=5,iy=6,ay=7,cv=300,Es=301,Ts=302,Dd=303,Ud=304,Uu=306,Ld=1e3,_r=1001,Nd=1002,xi=1003,ry=1004,$l=1005,Di=1006,kf=1007,gr=1008,aa=1009,fv=1010,dv=1011,Lo=1012,fh=1013,Sr=1014,na=1015,Bo=1016,dh=1017,hh=1018,No=1020,hv=35902,pv=1021,mv=1022,Si=1023,Oo=1026,Po=1027,_v=1028,ph=1029,gv=1030,mh=1031,_h=1033,yu=33776,Mu=33777,Eu=33778,Tu=33779,Od=35840,Pd=35841,Bd=35842,Id=35843,zd=36196,Fd=37492,Hd=37496,Gd=37808,Vd=37809,kd=37810,Xd=37811,Wd=37812,qd=37813,Yd=37814,Zd=37815,Kd=37816,jd=37817,Qd=37818,Jd=37819,$d=37820,eh=37821,Au=36492,th=36494,nh=36495,vv=36283,ih=36284,ah=36285,rh=36286,sy=3200,oy=3201,ly=0,uy=1,za="",li="srgb",As="srgb-linear",wu="linear",Ot="srgb",as=7680,gg=519,cy=512,fy=513,dy=514,Sv=515,hy=516,py=517,my=518,_y=519,vg=35044,Sg="300 es",Ui=2e3,Cu=2001;class Rs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,p=l.length;u<p;u++)l[u].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xf=Math.PI/180,sh=180/Math.PI;function Io(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(wn[o&255]+wn[o>>8&255]+wn[o>>16&255]+wn[o>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[i&63|128]+wn[i>>8&255]+"-"+wn[i>>16&255]+wn[i>>24&255]+wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]).toLowerCase()}function gt(o,e,i){return Math.max(e,Math.min(i,o))}function gy(o,e){return(o%e+e)%e}function Wf(o,e,i){return(1-i)*o+i*e}function bo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Hn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ct{constructor(e=0,i=0){Ct.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=gt(this.x,e.x,i.x),this.y=gt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=gt(this.x,e,i),this.y=gt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,p=this.y-e.y;return this.x=u*r-p*l+e.x,this.y=u*l+p*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,p,m){let v=r[l+0],_=r[l+1],x=r[l+2],c=r[l+3];const d=u[p+0],g=u[p+1],M=u[p+2],T=u[p+3];if(m===0){e[i+0]=v,e[i+1]=_,e[i+2]=x,e[i+3]=c;return}if(m===1){e[i+0]=d,e[i+1]=g,e[i+2]=M,e[i+3]=T;return}if(c!==T||v!==d||_!==g||x!==M){let y=1-m;const S=v*d+_*g+x*M+c*T,I=S>=0?1:-1,O=1-S*S;if(O>Number.EPSILON){const U=Math.sqrt(O),N=Math.atan2(U,S*I);y=Math.sin(y*N)/U,m=Math.sin(m*N)/U}const A=m*I;if(v=v*y+d*A,_=_*y+g*A,x=x*y+M*A,c=c*y+T*A,y===1-m){const U=1/Math.sqrt(v*v+_*_+x*x+c*c);v*=U,_*=U,x*=U,c*=U}}e[i]=v,e[i+1]=_,e[i+2]=x,e[i+3]=c}static multiplyQuaternionsFlat(e,i,r,l,u,p){const m=r[l],v=r[l+1],_=r[l+2],x=r[l+3],c=u[p],d=u[p+1],g=u[p+2],M=u[p+3];return e[i]=m*M+x*c+v*g-_*d,e[i+1]=v*M+x*d+_*c-m*g,e[i+2]=_*M+x*g+m*d-v*c,e[i+3]=x*M-m*c-v*d-_*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,p=e._order,m=Math.cos,v=Math.sin,_=m(r/2),x=m(l/2),c=m(u/2),d=v(r/2),g=v(l/2),M=v(u/2);switch(p){case"XYZ":this._x=d*x*c+_*g*M,this._y=_*g*c-d*x*M,this._z=_*x*M+d*g*c,this._w=_*x*c-d*g*M;break;case"YXZ":this._x=d*x*c+_*g*M,this._y=_*g*c-d*x*M,this._z=_*x*M-d*g*c,this._w=_*x*c+d*g*M;break;case"ZXY":this._x=d*x*c-_*g*M,this._y=_*g*c+d*x*M,this._z=_*x*M+d*g*c,this._w=_*x*c-d*g*M;break;case"ZYX":this._x=d*x*c-_*g*M,this._y=_*g*c+d*x*M,this._z=_*x*M-d*g*c,this._w=_*x*c+d*g*M;break;case"YZX":this._x=d*x*c+_*g*M,this._y=_*g*c+d*x*M,this._z=_*x*M-d*g*c,this._w=_*x*c-d*g*M;break;case"XZY":this._x=d*x*c-_*g*M,this._y=_*g*c-d*x*M,this._z=_*x*M+d*g*c,this._w=_*x*c+d*g*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+p)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],p=i[1],m=i[5],v=i[9],_=i[2],x=i[6],c=i[10],d=r+m+c;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(x-v)*g,this._y=(u-_)*g,this._z=(p-l)*g}else if(r>m&&r>c){const g=2*Math.sqrt(1+r-m-c);this._w=(x-v)/g,this._x=.25*g,this._y=(l+p)/g,this._z=(u+_)/g}else if(m>c){const g=2*Math.sqrt(1+m-r-c);this._w=(u-_)/g,this._x=(l+p)/g,this._y=.25*g,this._z=(v+x)/g}else{const g=2*Math.sqrt(1+c-r-m);this._w=(p-l)/g,this._x=(u+_)/g,this._y=(v+x)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,p=e._w,m=i._x,v=i._y,_=i._z,x=i._w;return this._x=r*x+p*m+l*_-u*v,this._y=l*x+p*v+u*m-r*_,this._z=u*x+p*_+r*v-l*m,this._w=p*x-r*m-l*v-u*_,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,p=this._w;let m=p*e._w+r*e._x+l*e._y+u*e._z;if(m<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,m=-m):this.copy(e),m>=1)return this._w=p,this._x=r,this._y=l,this._z=u,this;const v=1-m*m;if(v<=Number.EPSILON){const g=1-i;return this._w=g*p+i*this._w,this._x=g*r+i*this._x,this._y=g*l+i*this._y,this._z=g*u+i*this._z,this.normalize(),this}const _=Math.sqrt(v),x=Math.atan2(_,m),c=Math.sin((1-i)*x)/_,d=Math.sin(i*x)/_;return this._w=p*c+this._w*d,this._x=r*c+this._x*d,this._y=l*c+this._y*d,this._z=u*c+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(e=0,i=0,r=0){re.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(xg.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(xg.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,p=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*p,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*p,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*p,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,p=e.y,m=e.z,v=e.w,_=2*(p*l-m*r),x=2*(m*i-u*l),c=2*(u*r-p*i);return this.x=i+v*_+p*c-m*x,this.y=r+v*x+m*_-u*c,this.z=l+v*c+u*x-p*_,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=gt(this.x,e.x,i.x),this.y=gt(this.y,e.y,i.y),this.z=gt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=gt(this.x,e,i),this.y=gt(this.y,e,i),this.z=gt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,p=i.x,m=i.y,v=i.z;return this.x=l*v-u*m,this.y=u*p-r*v,this.z=r*m-l*p,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return qf.copy(this).projectOnVector(e),this.sub(qf)}reflect(e){return this.sub(qf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qf=new re,xg=new zo;class ot{constructor(e,i,r,l,u,p,m,v,_){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,p,m,v,_)}set(e,i,r,l,u,p,m,v,_){const x=this.elements;return x[0]=e,x[1]=l,x[2]=m,x[3]=i,x[4]=u,x[5]=v,x[6]=r,x[7]=p,x[8]=_,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,p=r[0],m=r[3],v=r[6],_=r[1],x=r[4],c=r[7],d=r[2],g=r[5],M=r[8],T=l[0],y=l[3],S=l[6],I=l[1],O=l[4],A=l[7],U=l[2],N=l[5],B=l[8];return u[0]=p*T+m*I+v*U,u[3]=p*y+m*O+v*N,u[6]=p*S+m*A+v*B,u[1]=_*T+x*I+c*U,u[4]=_*y+x*O+c*N,u[7]=_*S+x*A+c*B,u[2]=d*T+g*I+M*U,u[5]=d*y+g*O+M*N,u[8]=d*S+g*A+M*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],p=e[4],m=e[5],v=e[6],_=e[7],x=e[8];return i*p*x-i*m*_-r*u*x+r*m*v+l*u*_-l*p*v}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],p=e[4],m=e[5],v=e[6],_=e[7],x=e[8],c=x*p-m*_,d=m*v-x*u,g=_*u-p*v,M=i*c+r*d+l*g;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=c*T,e[1]=(l*_-x*r)*T,e[2]=(m*r-l*p)*T,e[3]=d*T,e[4]=(x*i-l*v)*T,e[5]=(l*u-m*i)*T,e[6]=g*T,e[7]=(r*v-_*i)*T,e[8]=(p*i-r*u)*T,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,p,m){const v=Math.cos(u),_=Math.sin(u);return this.set(r*v,r*_,-r*(v*p+_*m)+p+e,-l*_,l*v,-l*(-_*p+v*m)+m+i,0,0,1),this}scale(e,i){return this.premultiply(Yf.makeScale(e,i)),this}rotate(e){return this.premultiply(Yf.makeRotation(-e)),this}translate(e,i){return this.premultiply(Yf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Yf=new ot;function xv(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Du(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function vy(){const o=Du("canvas");return o.style.display="block",o}const yg={};function xs(o){o in yg||(yg[o]=!0,console.warn(o))}function Sy(o,e,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const Mg=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Eg=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xy(){const o={enabled:!0,workingColorSpace:As,spaces:{},convert:function(l,u,p){return this.enabled===!1||u===p||!u||!p||(this.spaces[u].transfer===Ot&&(l.r=ia(l.r),l.g=ia(l.g),l.b=ia(l.b)),this.spaces[u].primaries!==this.spaces[p].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[p].fromXYZ)),this.spaces[p].transfer===Ot&&(l.r=ys(l.r),l.g=ys(l.g),l.b=ys(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===za?wu:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,p){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[p].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return xs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return xs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[As]:{primaries:e,whitePoint:r,transfer:wu,toXYZ:Mg,fromXYZ:Eg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:li},outputColorSpaceConfig:{drawingBufferColorSpace:li}},[li]:{primaries:e,whitePoint:r,transfer:Ot,toXYZ:Mg,fromXYZ:Eg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:li}}}),o}const Et=xy();function ia(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ys(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let rs;class yy{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{rs===void 0&&(rs=Du("canvas")),rs.width=e.width,rs.height=e.height;const l=rs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=rs}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Du("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let p=0;p<u.length;p++)u[p]=ia(u[p]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ia(i[r]/255)*255):i[r]=ia(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let My=0;class gh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:My++}),this.uuid=Io(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let p=0,m=l.length;p<m;p++)l[p].isDataTexture?u.push(Zf(l[p].image)):u.push(Zf(l[p]))}else u=Zf(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function Zf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?yy.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ey=0;const Kf=new re;class On extends Rs{constructor(e=On.DEFAULT_IMAGE,i=On.DEFAULT_MAPPING,r=_r,l=_r,u=Di,p=gr,m=Si,v=aa,_=On.DEFAULT_ANISOTROPY,x=za){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ey++}),this.uuid=Io(),this.name="",this.source=new gh(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=p,this.anisotropy=_,this.format=m,this.internalFormat=null,this.type=v,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Kf).x}get height(){return this.source.getSize(Kf).y}get depth(){return this.source.getSize(Kf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ld:e.x=e.x-Math.floor(e.x);break;case _r:e.x=e.x<0?0:1;break;case Nd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ld:e.y=e.y-Math.floor(e.y);break;case _r:e.y=e.y<0?0:1;break;case Nd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=cv;On.DEFAULT_ANISOTROPY=1;class tn{constructor(e=0,i=0,r=0,l=1){tn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,p=e.elements;return this.x=p[0]*i+p[4]*r+p[8]*l+p[12]*u,this.y=p[1]*i+p[5]*r+p[9]*l+p[13]*u,this.z=p[2]*i+p[6]*r+p[10]*l+p[14]*u,this.w=p[3]*i+p[7]*r+p[11]*l+p[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const v=e.elements,_=v[0],x=v[4],c=v[8],d=v[1],g=v[5],M=v[9],T=v[2],y=v[6],S=v[10];if(Math.abs(x-d)<.01&&Math.abs(c-T)<.01&&Math.abs(M-y)<.01){if(Math.abs(x+d)<.1&&Math.abs(c+T)<.1&&Math.abs(M+y)<.1&&Math.abs(_+g+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(_+1)/2,A=(g+1)/2,U=(S+1)/2,N=(x+d)/4,B=(c+T)/4,G=(M+y)/4;return O>A&&O>U?O<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(O),l=N/r,u=B/r):A>U?A<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(A),r=N/l,u=G/l):U<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(U),r=B/u,l=G/u),this.set(r,l,u,i),this}let I=Math.sqrt((y-M)*(y-M)+(c-T)*(c-T)+(d-x)*(d-x));return Math.abs(I)<.001&&(I=1),this.x=(y-M)/I,this.y=(c-T)/I,this.z=(d-x)/I,this.w=Math.acos((_+g+S-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=gt(this.x,e.x,i.x),this.y=gt(this.y,e.y,i.y),this.z=gt(this.z,e.z,i.z),this.w=gt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=gt(this.x,e,i),this.y=gt(this.y,e,i),this.z=gt(this.z,e,i),this.w=gt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ty extends Rs{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new tn(0,0,e,i),this.scissorTest=!1,this.viewport=new tn(0,0,e,i);const l={width:e,height:i,depth:r.depth},u=new On(l);this.textures=[];const p=r.count;for(let m=0;m<p;m++)this.textures[m]=u.clone(),this.textures[m].isRenderTargetTexture=!0,this.textures[m].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Di,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new gh(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xr extends Ty{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class yv extends On{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=xi,this.minFilter=xi,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ay extends On{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=xi,this.minFilter=xi,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fo{constructor(e=new re(1/0,1/0,1/0),i=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(pi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(pi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=pi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let p=0,m=u.count;p<m;p++)e.isMesh===!0?e.getVertexPosition(p,pi):pi.fromBufferAttribute(u,p),pi.applyMatrix4(e.matrixWorld),this.expandByPoint(pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),eu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),eu.copy(r.boundingBox)),eu.applyMatrix4(e.matrixWorld),this.union(eu)}const l=e.children;for(let u=0,p=l.length;u<p;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ro),tu.subVectors(this.max,Ro),ss.subVectors(e.a,Ro),os.subVectors(e.b,Ro),ls.subVectors(e.c,Ro),La.subVectors(os,ss),Na.subVectors(ls,os),sr.subVectors(ss,ls);let i=[0,-La.z,La.y,0,-Na.z,Na.y,0,-sr.z,sr.y,La.z,0,-La.x,Na.z,0,-Na.x,sr.z,0,-sr.x,-La.y,La.x,0,-Na.y,Na.x,0,-sr.y,sr.x,0];return!jf(i,ss,os,ls,tu)||(i=[1,0,0,0,1,0,0,0,1],!jf(i,ss,os,ls,tu))?!1:(nu.crossVectors(La,Na),i=[nu.x,nu.y,nu.z],jf(i,ss,os,ls,tu))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ki=[new re,new re,new re,new re,new re,new re,new re,new re],pi=new re,eu=new Fo,ss=new re,os=new re,ls=new re,La=new re,Na=new re,sr=new re,Ro=new re,tu=new re,nu=new re,or=new re;function jf(o,e,i,r,l){for(let u=0,p=o.length-3;u<=p;u+=3){or.fromArray(o,u);const m=l.x*Math.abs(or.x)+l.y*Math.abs(or.y)+l.z*Math.abs(or.z),v=e.dot(or),_=i.dot(or),x=r.dot(or);if(Math.max(-Math.max(v,_,x),Math.min(v,_,x))>m)return!1}return!0}const by=new Fo,wo=new re,Qf=new re;class vh{constructor(e=new re,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):by.setFromPoints(e).getCenter(r);let l=0;for(let u=0,p=e.length;u<p;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wo.subVectors(e,this.center);const i=wo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(wo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wo.copy(e.center).add(Qf)),this.expandByPoint(wo.copy(e.center).sub(Qf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ji=new re,Jf=new re,iu=new re,Oa=new re,$f=new re,au=new re,ed=new re;class Ry{constructor(e=new re,i=new re(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ji)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ji.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ji.copy(this.origin).addScaledVector(this.direction,i),ji.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Jf.copy(e).add(i).multiplyScalar(.5),iu.copy(i).sub(e).normalize(),Oa.copy(this.origin).sub(Jf);const u=e.distanceTo(i)*.5,p=-this.direction.dot(iu),m=Oa.dot(this.direction),v=-Oa.dot(iu),_=Oa.lengthSq(),x=Math.abs(1-p*p);let c,d,g,M;if(x>0)if(c=p*v-m,d=p*m-v,M=u*x,c>=0)if(d>=-M)if(d<=M){const T=1/x;c*=T,d*=T,g=c*(c+p*d+2*m)+d*(p*c+d+2*v)+_}else d=u,c=Math.max(0,-(p*d+m)),g=-c*c+d*(d+2*v)+_;else d=-u,c=Math.max(0,-(p*d+m)),g=-c*c+d*(d+2*v)+_;else d<=-M?(c=Math.max(0,-(-p*u+m)),d=c>0?-u:Math.min(Math.max(-u,-v),u),g=-c*c+d*(d+2*v)+_):d<=M?(c=0,d=Math.min(Math.max(-u,-v),u),g=d*(d+2*v)+_):(c=Math.max(0,-(p*u+m)),d=c>0?u:Math.min(Math.max(-u,-v),u),g=-c*c+d*(d+2*v)+_);else d=p>0?-u:u,c=Math.max(0,-(p*d+m)),g=-c*c+d*(d+2*v)+_;return r&&r.copy(this.origin).addScaledVector(this.direction,c),l&&l.copy(Jf).addScaledVector(iu,d),g}intersectSphere(e,i){ji.subVectors(e.center,this.origin);const r=ji.dot(this.direction),l=ji.dot(ji)-r*r,u=e.radius*e.radius;if(l>u)return null;const p=Math.sqrt(u-l),m=r-p,v=r+p;return v<0?null:m<0?this.at(v,i):this.at(m,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,p,m,v;const _=1/this.direction.x,x=1/this.direction.y,c=1/this.direction.z,d=this.origin;return _>=0?(r=(e.min.x-d.x)*_,l=(e.max.x-d.x)*_):(r=(e.max.x-d.x)*_,l=(e.min.x-d.x)*_),x>=0?(u=(e.min.y-d.y)*x,p=(e.max.y-d.y)*x):(u=(e.max.y-d.y)*x,p=(e.min.y-d.y)*x),r>p||u>l||((u>r||isNaN(r))&&(r=u),(p<l||isNaN(l))&&(l=p),c>=0?(m=(e.min.z-d.z)*c,v=(e.max.z-d.z)*c):(m=(e.max.z-d.z)*c,v=(e.min.z-d.z)*c),r>v||m>l)||((m>r||r!==r)&&(r=m),(v<l||l!==l)&&(l=v),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ji)!==null}intersectTriangle(e,i,r,l,u){$f.subVectors(i,e),au.subVectors(r,e),ed.crossVectors($f,au);let p=this.direction.dot(ed),m;if(p>0){if(l)return null;m=1}else if(p<0)m=-1,p=-p;else return null;Oa.subVectors(this.origin,e);const v=m*this.direction.dot(au.crossVectors(Oa,au));if(v<0)return null;const _=m*this.direction.dot($f.cross(Oa));if(_<0||v+_>p)return null;const x=-m*Oa.dot(ed);return x<0?null:this.at(x/p,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fn{constructor(e,i,r,l,u,p,m,v,_,x,c,d,g,M,T,y){fn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,p,m,v,_,x,c,d,g,M,T,y)}set(e,i,r,l,u,p,m,v,_,x,c,d,g,M,T,y){const S=this.elements;return S[0]=e,S[4]=i,S[8]=r,S[12]=l,S[1]=u,S[5]=p,S[9]=m,S[13]=v,S[2]=_,S[6]=x,S[10]=c,S[14]=d,S[3]=g,S[7]=M,S[11]=T,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/us.setFromMatrixColumn(e,0).length(),u=1/us.setFromMatrixColumn(e,1).length(),p=1/us.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*p,i[9]=r[9]*p,i[10]=r[10]*p,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,p=Math.cos(r),m=Math.sin(r),v=Math.cos(l),_=Math.sin(l),x=Math.cos(u),c=Math.sin(u);if(e.order==="XYZ"){const d=p*x,g=p*c,M=m*x,T=m*c;i[0]=v*x,i[4]=-v*c,i[8]=_,i[1]=g+M*_,i[5]=d-T*_,i[9]=-m*v,i[2]=T-d*_,i[6]=M+g*_,i[10]=p*v}else if(e.order==="YXZ"){const d=v*x,g=v*c,M=_*x,T=_*c;i[0]=d+T*m,i[4]=M*m-g,i[8]=p*_,i[1]=p*c,i[5]=p*x,i[9]=-m,i[2]=g*m-M,i[6]=T+d*m,i[10]=p*v}else if(e.order==="ZXY"){const d=v*x,g=v*c,M=_*x,T=_*c;i[0]=d-T*m,i[4]=-p*c,i[8]=M+g*m,i[1]=g+M*m,i[5]=p*x,i[9]=T-d*m,i[2]=-p*_,i[6]=m,i[10]=p*v}else if(e.order==="ZYX"){const d=p*x,g=p*c,M=m*x,T=m*c;i[0]=v*x,i[4]=M*_-g,i[8]=d*_+T,i[1]=v*c,i[5]=T*_+d,i[9]=g*_-M,i[2]=-_,i[6]=m*v,i[10]=p*v}else if(e.order==="YZX"){const d=p*v,g=p*_,M=m*v,T=m*_;i[0]=v*x,i[4]=T-d*c,i[8]=M*c+g,i[1]=c,i[5]=p*x,i[9]=-m*x,i[2]=-_*x,i[6]=g*c+M,i[10]=d-T*c}else if(e.order==="XZY"){const d=p*v,g=p*_,M=m*v,T=m*_;i[0]=v*x,i[4]=-c,i[8]=_*x,i[1]=d*c+T,i[5]=p*x,i[9]=g*c-M,i[2]=M*c-g,i[6]=m*x,i[10]=T*c+d}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wy,e,Cy)}lookAt(e,i,r){const l=this.elements;return jn.subVectors(e,i),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),Pa.crossVectors(r,jn),Pa.lengthSq()===0&&(Math.abs(r.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),Pa.crossVectors(r,jn)),Pa.normalize(),ru.crossVectors(jn,Pa),l[0]=Pa.x,l[4]=ru.x,l[8]=jn.x,l[1]=Pa.y,l[5]=ru.y,l[9]=jn.y,l[2]=Pa.z,l[6]=ru.z,l[10]=jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,p=r[0],m=r[4],v=r[8],_=r[12],x=r[1],c=r[5],d=r[9],g=r[13],M=r[2],T=r[6],y=r[10],S=r[14],I=r[3],O=r[7],A=r[11],U=r[15],N=l[0],B=l[4],G=l[8],C=l[12],D=l[1],z=l[5],se=l[9],oe=l[13],ue=l[2],de=l[6],H=l[10],K=l[14],Y=l[3],Se=l[7],L=l[11],J=l[15];return u[0]=p*N+m*D+v*ue+_*Y,u[4]=p*B+m*z+v*de+_*Se,u[8]=p*G+m*se+v*H+_*L,u[12]=p*C+m*oe+v*K+_*J,u[1]=x*N+c*D+d*ue+g*Y,u[5]=x*B+c*z+d*de+g*Se,u[9]=x*G+c*se+d*H+g*L,u[13]=x*C+c*oe+d*K+g*J,u[2]=M*N+T*D+y*ue+S*Y,u[6]=M*B+T*z+y*de+S*Se,u[10]=M*G+T*se+y*H+S*L,u[14]=M*C+T*oe+y*K+S*J,u[3]=I*N+O*D+A*ue+U*Y,u[7]=I*B+O*z+A*de+U*Se,u[11]=I*G+O*se+A*H+U*L,u[15]=I*C+O*oe+A*K+U*J,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],p=e[1],m=e[5],v=e[9],_=e[13],x=e[2],c=e[6],d=e[10],g=e[14],M=e[3],T=e[7],y=e[11],S=e[15];return M*(+u*v*c-l*_*c-u*m*d+r*_*d+l*m*g-r*v*g)+T*(+i*v*g-i*_*d+u*p*d-l*p*g+l*_*x-u*v*x)+y*(+i*_*c-i*m*g-u*p*c+r*p*g+u*m*x-r*_*x)+S*(-l*m*x-i*v*c+i*m*d+l*p*c-r*p*d+r*v*x)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],p=e[4],m=e[5],v=e[6],_=e[7],x=e[8],c=e[9],d=e[10],g=e[11],M=e[12],T=e[13],y=e[14],S=e[15],I=c*y*_-T*d*_+T*v*g-m*y*g-c*v*S+m*d*S,O=M*d*_-x*y*_-M*v*g+p*y*g+x*v*S-p*d*S,A=x*T*_-M*c*_+M*m*g-p*T*g-x*m*S+p*c*S,U=M*c*v-x*T*v-M*m*d+p*T*d+x*m*y-p*c*y,N=i*I+r*O+l*A+u*U;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/N;return e[0]=I*B,e[1]=(T*d*u-c*y*u-T*l*g+r*y*g+c*l*S-r*d*S)*B,e[2]=(m*y*u-T*v*u+T*l*_-r*y*_-m*l*S+r*v*S)*B,e[3]=(c*v*u-m*d*u-c*l*_+r*d*_+m*l*g-r*v*g)*B,e[4]=O*B,e[5]=(x*y*u-M*d*u+M*l*g-i*y*g-x*l*S+i*d*S)*B,e[6]=(M*v*u-p*y*u-M*l*_+i*y*_+p*l*S-i*v*S)*B,e[7]=(p*d*u-x*v*u+x*l*_-i*d*_-p*l*g+i*v*g)*B,e[8]=A*B,e[9]=(M*c*u-x*T*u-M*r*g+i*T*g+x*r*S-i*c*S)*B,e[10]=(p*T*u-M*m*u+M*r*_-i*T*_-p*r*S+i*m*S)*B,e[11]=(x*m*u-p*c*u-x*r*_+i*c*_+p*r*g-i*m*g)*B,e[12]=U*B,e[13]=(x*T*l-M*c*l+M*r*d-i*T*d-x*r*y+i*c*y)*B,e[14]=(M*m*l-p*T*l-M*r*v+i*T*v+p*r*y-i*m*y)*B,e[15]=(p*c*l-x*m*l+x*r*v-i*c*v-p*r*d+i*m*d)*B,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,p=e.x,m=e.y,v=e.z,_=u*p,x=u*m;return this.set(_*p+r,_*m-l*v,_*v+l*m,0,_*m+l*v,x*m+r,x*v-l*p,0,_*v-l*m,x*v+l*p,u*v*v+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,p){return this.set(1,r,u,0,e,1,p,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,p=i._y,m=i._z,v=i._w,_=u+u,x=p+p,c=m+m,d=u*_,g=u*x,M=u*c,T=p*x,y=p*c,S=m*c,I=v*_,O=v*x,A=v*c,U=r.x,N=r.y,B=r.z;return l[0]=(1-(T+S))*U,l[1]=(g+A)*U,l[2]=(M-O)*U,l[3]=0,l[4]=(g-A)*N,l[5]=(1-(d+S))*N,l[6]=(y+I)*N,l[7]=0,l[8]=(M+O)*B,l[9]=(y-I)*B,l[10]=(1-(d+T))*B,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=us.set(l[0],l[1],l[2]).length();const p=us.set(l[4],l[5],l[6]).length(),m=us.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],mi.copy(this);const _=1/u,x=1/p,c=1/m;return mi.elements[0]*=_,mi.elements[1]*=_,mi.elements[2]*=_,mi.elements[4]*=x,mi.elements[5]*=x,mi.elements[6]*=x,mi.elements[8]*=c,mi.elements[9]*=c,mi.elements[10]*=c,i.setFromRotationMatrix(mi),r.x=u,r.y=p,r.z=m,this}makePerspective(e,i,r,l,u,p,m=Ui,v=!1){const _=this.elements,x=2*u/(i-e),c=2*u/(r-l),d=(i+e)/(i-e),g=(r+l)/(r-l);let M,T;if(v)M=u/(p-u),T=p*u/(p-u);else if(m===Ui)M=-(p+u)/(p-u),T=-2*p*u/(p-u);else if(m===Cu)M=-p/(p-u),T=-p*u/(p-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+m);return _[0]=x,_[4]=0,_[8]=d,_[12]=0,_[1]=0,_[5]=c,_[9]=g,_[13]=0,_[2]=0,_[6]=0,_[10]=M,_[14]=T,_[3]=0,_[7]=0,_[11]=-1,_[15]=0,this}makeOrthographic(e,i,r,l,u,p,m=Ui,v=!1){const _=this.elements,x=2/(i-e),c=2/(r-l),d=-(i+e)/(i-e),g=-(r+l)/(r-l);let M,T;if(v)M=1/(p-u),T=p/(p-u);else if(m===Ui)M=-2/(p-u),T=-(p+u)/(p-u);else if(m===Cu)M=-1/(p-u),T=-u/(p-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+m);return _[0]=x,_[4]=0,_[8]=0,_[12]=d,_[1]=0,_[5]=c,_[9]=0,_[13]=g,_[2]=0,_[6]=0,_[10]=M,_[14]=T,_[3]=0,_[7]=0,_[11]=0,_[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const us=new re,mi=new fn,wy=new re(0,0,0),Cy=new re(1,1,1),Pa=new re,ru=new re,jn=new re,Tg=new fn,Ag=new zo;class ra{constructor(e=0,i=0,r=0,l=ra.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],p=l[4],m=l[8],v=l[1],_=l[5],x=l[9],c=l[2],d=l[6],g=l[10];switch(i){case"XYZ":this._y=Math.asin(gt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,g),this._z=Math.atan2(-p,u)):(this._x=Math.atan2(d,_),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(m,g),this._z=Math.atan2(v,_)):(this._y=Math.atan2(-c,u),this._z=0);break;case"ZXY":this._x=Math.asin(gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-c,g),this._z=Math.atan2(-p,_)):(this._y=0,this._z=Math.atan2(v,u));break;case"ZYX":this._y=Math.asin(-gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(v,u)):(this._x=0,this._z=Math.atan2(-p,_));break;case"YZX":this._z=Math.asin(gt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(-x,_),this._y=Math.atan2(-c,u)):(this._x=0,this._y=Math.atan2(m,g));break;case"XZY":this._z=Math.asin(-gt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,_),this._y=Math.atan2(m,u)):(this._x=Math.atan2(-x,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Tg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tg,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Ag.setFromEuler(this),this.setFromQuaternion(Ag,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ra.DEFAULT_ORDER="XYZ";class Mv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Dy=0;const bg=new re,cs=new zo,Qi=new fn,su=new re,Co=new re,Uy=new re,Ly=new zo,Rg=new re(1,0,0),wg=new re(0,1,0),Cg=new re(0,0,1),Dg={type:"added"},Ny={type:"removed"},fs={type:"childadded",child:null},td={type:"childremoved",child:null};class $n extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dy++}),this.uuid=Io(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$n.DEFAULT_UP.clone();const e=new re,i=new ra,r=new zo,l=new re(1,1,1);function u(){r.setFromEuler(i,!1)}function p(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(p),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new fn},normalMatrix:{value:new ot}}),this.matrix=new fn,this.matrixWorld=new fn,this.matrixAutoUpdate=$n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return cs.setFromAxisAngle(e,i),this.quaternion.multiply(cs),this}rotateOnWorldAxis(e,i){return cs.setFromAxisAngle(e,i),this.quaternion.premultiply(cs),this}rotateX(e){return this.rotateOnAxis(Rg,e)}rotateY(e){return this.rotateOnAxis(wg,e)}rotateZ(e){return this.rotateOnAxis(Cg,e)}translateOnAxis(e,i){return bg.copy(e).applyQuaternion(this.quaternion),this.position.add(bg.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Rg,e)}translateY(e){return this.translateOnAxis(wg,e)}translateZ(e){return this.translateOnAxis(Cg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?su.copy(e):su.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(Co,su,this.up):Qi.lookAt(su,Co,this.up),this.quaternion.setFromRotationMatrix(Qi),l&&(Qi.extractRotation(l.matrixWorld),cs.setFromRotationMatrix(Qi),this.quaternion.premultiply(cs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dg),fs.child=e,this.dispatchEvent(fs),fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Ny),td.child=e,this.dispatchEvent(td),td.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dg),fs.child=e,this.dispatchEvent(fs),fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const p=this.children[r].getObjectByProperty(e,i);if(p!==void 0)return p}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,p=l.length;u<p;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,e,Uy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,Ly,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,p=l.length;u<p;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(m=>({...m,boundingBox:m.boundingBox?m.boundingBox.toJSON():void 0,boundingSphere:m.boundingSphere?m.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(m=>({...m})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(m,v){return m[v.uuid]===void 0&&(m[v.uuid]=v.toJSON(e)),v.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const m=this.geometry.parameters;if(m!==void 0&&m.shapes!==void 0){const v=m.shapes;if(Array.isArray(v))for(let _=0,x=v.length;_<x;_++){const c=v[_];u(e.shapes,c)}else u(e.shapes,v)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const m=[];for(let v=0,_=this.material.length;v<_;v++)m.push(u(e.materials,this.material[v]));l.material=m}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let m=0;m<this.children.length;m++)l.children.push(this.children[m].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let m=0;m<this.animations.length;m++){const v=this.animations[m];l.animations.push(u(e.animations,v))}}if(i){const m=p(e.geometries),v=p(e.materials),_=p(e.textures),x=p(e.images),c=p(e.shapes),d=p(e.skeletons),g=p(e.animations),M=p(e.nodes);m.length>0&&(r.geometries=m),v.length>0&&(r.materials=v),_.length>0&&(r.textures=_),x.length>0&&(r.images=x),c.length>0&&(r.shapes=c),d.length>0&&(r.skeletons=d),g.length>0&&(r.animations=g),M.length>0&&(r.nodes=M)}return r.object=l,r;function p(m){const v=[];for(const _ in m){const x=m[_];delete x.metadata,v.push(x)}return v}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}$n.DEFAULT_UP=new re(0,1,0);$n.DEFAULT_MATRIX_AUTO_UPDATE=!0;$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _i=new re,Ji=new re,nd=new re,$i=new re,ds=new re,hs=new re,Ug=new re,id=new re,ad=new re,rd=new re,sd=new tn,od=new tn,ld=new tn;class vi{constructor(e=new re,i=new re,r=new re){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),_i.subVectors(e,i),l.cross(_i);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){_i.subVectors(l,i),Ji.subVectors(r,i),nd.subVectors(e,i);const p=_i.dot(_i),m=_i.dot(Ji),v=_i.dot(nd),_=Ji.dot(Ji),x=Ji.dot(nd),c=p*_-m*m;if(c===0)return u.set(0,0,0),null;const d=1/c,g=(_*v-m*x)*d,M=(p*x-m*v)*d;return u.set(1-g-M,M,g)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(e,i,r,l,u,p,m,v){return this.getBarycoord(e,i,r,l,$i)===null?(v.x=0,v.y=0,"z"in v&&(v.z=0),"w"in v&&(v.w=0),null):(v.setScalar(0),v.addScaledVector(u,$i.x),v.addScaledVector(p,$i.y),v.addScaledVector(m,$i.z),v)}static getInterpolatedAttribute(e,i,r,l,u,p){return sd.setScalar(0),od.setScalar(0),ld.setScalar(0),sd.fromBufferAttribute(e,i),od.fromBufferAttribute(e,r),ld.fromBufferAttribute(e,l),p.setScalar(0),p.addScaledVector(sd,u.x),p.addScaledVector(od,u.y),p.addScaledVector(ld,u.z),p}static isFrontFacing(e,i,r,l){return _i.subVectors(r,i),Ji.subVectors(e,i),_i.cross(Ji).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),_i.cross(Ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return vi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return vi.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let p,m;ds.subVectors(l,r),hs.subVectors(u,r),id.subVectors(e,r);const v=ds.dot(id),_=hs.dot(id);if(v<=0&&_<=0)return i.copy(r);ad.subVectors(e,l);const x=ds.dot(ad),c=hs.dot(ad);if(x>=0&&c<=x)return i.copy(l);const d=v*c-x*_;if(d<=0&&v>=0&&x<=0)return p=v/(v-x),i.copy(r).addScaledVector(ds,p);rd.subVectors(e,u);const g=ds.dot(rd),M=hs.dot(rd);if(M>=0&&g<=M)return i.copy(u);const T=g*_-v*M;if(T<=0&&_>=0&&M<=0)return m=_/(_-M),i.copy(r).addScaledVector(hs,m);const y=x*M-g*c;if(y<=0&&c-x>=0&&g-M>=0)return Ug.subVectors(u,l),m=(c-x)/(c-x+(g-M)),i.copy(l).addScaledVector(Ug,m);const S=1/(y+T+d);return p=T*S,m=d*S,i.copy(r).addScaledVector(ds,p).addScaledVector(hs,m)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ev={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ba={h:0,s:0,l:0},ou={h:0,s:0,l:0};function ud(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Pt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=li){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Et.workingColorSpace){return this.r=e,this.g=i,this.b=r,Et.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Et.workingColorSpace){if(e=gy(e,1),i=gt(i,0,1),r=gt(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,p=2*r-u;this.r=ud(p,u,e+1/3),this.g=ud(p,u,e),this.b=ud(p,u,e-1/3)}return Et.colorSpaceToWorking(this,l),this}setStyle(e,i=li){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const p=l[1],m=l[2];switch(p){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],p=u.length;if(p===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(p===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=li){const r=Ev[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ia(e.r),this.g=ia(e.g),this.b=ia(e.b),this}copyLinearToSRGB(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=li){return Et.workingToColorSpace(Cn.copy(this),e),Math.round(gt(Cn.r*255,0,255))*65536+Math.round(gt(Cn.g*255,0,255))*256+Math.round(gt(Cn.b*255,0,255))}getHexString(e=li){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Et.workingColorSpace){Et.workingToColorSpace(Cn.copy(this),i);const r=Cn.r,l=Cn.g,u=Cn.b,p=Math.max(r,l,u),m=Math.min(r,l,u);let v,_;const x=(m+p)/2;if(m===p)v=0,_=0;else{const c=p-m;switch(_=x<=.5?c/(p+m):c/(2-p-m),p){case r:v=(l-u)/c+(l<u?6:0);break;case l:v=(u-r)/c+2;break;case u:v=(r-l)/c+4;break}v/=6}return e.h=v,e.s=_,e.l=x,e}getRGB(e,i=Et.workingColorSpace){return Et.workingToColorSpace(Cn.copy(this),i),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=li){Et.workingToColorSpace(Cn.copy(this),e);const i=Cn.r,r=Cn.g,l=Cn.b;return e!==li?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Ba),this.setHSL(Ba.h+e,Ba.s+i,Ba.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Ba),e.getHSL(ou);const r=Wf(Ba.h,ou.h,i),l=Wf(Ba.s,ou.s,i),u=Wf(Ba.l,ou.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new Pt;Pt.NAMES=Ev;let Oy=0;class Lu extends Rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Oy++}),this.uuid=Io(),this.name="",this.type="Material",this.blending=Ss,this.side=Va,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yd,this.blendDst=Md,this.blendEquation=pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ss&&(r.blending=this.blending),this.side!==Va&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==yd&&(r.blendSrc=this.blendSrc),this.blendDst!==Md&&(r.blendDst=this.blendDst),this.blendEquation!==pr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ms&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(r.stencilFail=this.stencilFail),this.stencilZFail!==as&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const p=[];for(const m in u){const v=u[m];delete v.metadata,p.push(v)}return p}if(i){const u=l(e.textures),p=l(e.images);u.length>0&&(r.textures=u),p.length>0&&(r.images=p)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Tv extends Lu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ra,this.combine=uv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const sn=new re,lu=new Ct;let Py=0;class Ni{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Py++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=vg,this.updateRanges=[],this.gpuType=na,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)lu.fromBufferAttribute(this,i),lu.applyMatrix3(e),this.setXY(i,lu.x,lu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix3(e),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix4(e),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyNormalMatrix(e),this.setXYZ(i,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.transformDirection(e),this.setXYZ(i,sn.x,sn.y,sn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=bo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Hn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=bo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=bo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=bo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=bo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array),u=Hn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vg&&(e.usage=this.usage),e}}class Av extends Ni{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class bv extends Ni{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class vr extends Ni{constructor(e,i,r){super(new Float32Array(e),i,r)}}let By=0;const oi=new fn,cd=new $n,ps=new re,Qn=new Fo,Do=new Fo,vn=new re;class yr extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:By++}),this.uuid=Io(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xv(e)?bv:Av)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ot().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,i,r){return oi.makeTranslation(e,i,r),this.applyMatrix4(oi),this}scale(e,i,r){return oi.makeScale(e,i,r),this.applyMatrix4(oi),this}lookAt(e){return cd.lookAt(e),cd.updateMatrix(),this.applyMatrix4(cd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const p=e[l];r.push(p.x,p.y,p.z||0)}this.setAttribute("position",new vr(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Qn.setFromBufferAttribute(u),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vh);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(e){const r=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),i)for(let u=0,p=i.length;u<p;u++){const m=i[u];Do.setFromBufferAttribute(m),this.morphTargetsRelative?(vn.addVectors(Qn.min,Do.min),Qn.expandByPoint(vn),vn.addVectors(Qn.max,Do.max),Qn.expandByPoint(vn)):(Qn.expandByPoint(Do.min),Qn.expandByPoint(Do.max))}Qn.getCenter(r);let l=0;for(let u=0,p=e.count;u<p;u++)vn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(vn));if(i)for(let u=0,p=i.length;u<p;u++){const m=i[u],v=this.morphTargetsRelative;for(let _=0,x=m.count;_<x;_++)vn.fromBufferAttribute(m,_),v&&(ps.fromBufferAttribute(e,_),vn.add(ps)),l=Math.max(l,r.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ni(new Float32Array(4*r.count),4));const p=this.getAttribute("tangent"),m=[],v=[];for(let G=0;G<r.count;G++)m[G]=new re,v[G]=new re;const _=new re,x=new re,c=new re,d=new Ct,g=new Ct,M=new Ct,T=new re,y=new re;function S(G,C,D){_.fromBufferAttribute(r,G),x.fromBufferAttribute(r,C),c.fromBufferAttribute(r,D),d.fromBufferAttribute(u,G),g.fromBufferAttribute(u,C),M.fromBufferAttribute(u,D),x.sub(_),c.sub(_),g.sub(d),M.sub(d);const z=1/(g.x*M.y-M.x*g.y);isFinite(z)&&(T.copy(x).multiplyScalar(M.y).addScaledVector(c,-g.y).multiplyScalar(z),y.copy(c).multiplyScalar(g.x).addScaledVector(x,-M.x).multiplyScalar(z),m[G].add(T),m[C].add(T),m[D].add(T),v[G].add(y),v[C].add(y),v[D].add(y))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let G=0,C=I.length;G<C;++G){const D=I[G],z=D.start,se=D.count;for(let oe=z,ue=z+se;oe<ue;oe+=3)S(e.getX(oe+0),e.getX(oe+1),e.getX(oe+2))}const O=new re,A=new re,U=new re,N=new re;function B(G){U.fromBufferAttribute(l,G),N.copy(U);const C=m[G];O.copy(C),O.sub(U.multiplyScalar(U.dot(C))).normalize(),A.crossVectors(N,C);const z=A.dot(v[G])<0?-1:1;p.setXYZW(G,O.x,O.y,O.z,z)}for(let G=0,C=I.length;G<C;++G){const D=I[G],z=D.start,se=D.count;for(let oe=z,ue=z+se;oe<ue;oe+=3)B(e.getX(oe+0)),B(e.getX(oe+1)),B(e.getX(oe+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ni(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let d=0,g=r.count;d<g;d++)r.setXYZ(d,0,0,0);const l=new re,u=new re,p=new re,m=new re,v=new re,_=new re,x=new re,c=new re;if(e)for(let d=0,g=e.count;d<g;d+=3){const M=e.getX(d+0),T=e.getX(d+1),y=e.getX(d+2);l.fromBufferAttribute(i,M),u.fromBufferAttribute(i,T),p.fromBufferAttribute(i,y),x.subVectors(p,u),c.subVectors(l,u),x.cross(c),m.fromBufferAttribute(r,M),v.fromBufferAttribute(r,T),_.fromBufferAttribute(r,y),m.add(x),v.add(x),_.add(x),r.setXYZ(M,m.x,m.y,m.z),r.setXYZ(T,v.x,v.y,v.z),r.setXYZ(y,_.x,_.y,_.z)}else for(let d=0,g=i.count;d<g;d+=3)l.fromBufferAttribute(i,d+0),u.fromBufferAttribute(i,d+1),p.fromBufferAttribute(i,d+2),x.subVectors(p,u),c.subVectors(l,u),x.cross(c),r.setXYZ(d+0,x.x,x.y,x.z),r.setXYZ(d+1,x.x,x.y,x.z),r.setXYZ(d+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)vn.fromBufferAttribute(e,i),vn.normalize(),e.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function e(m,v){const _=m.array,x=m.itemSize,c=m.normalized,d=new _.constructor(v.length*x);let g=0,M=0;for(let T=0,y=v.length;T<y;T++){m.isInterleavedBufferAttribute?g=v[T]*m.data.stride+m.offset:g=v[T]*x;for(let S=0;S<x;S++)d[M++]=_[g++]}return new Ni(d,x,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new yr,r=this.index.array,l=this.attributes;for(const m in l){const v=l[m],_=e(v,r);i.setAttribute(m,_)}const u=this.morphAttributes;for(const m in u){const v=[],_=u[m];for(let x=0,c=_.length;x<c;x++){const d=_[x],g=e(d,r);v.push(g)}i.morphAttributes[m]=v}i.morphTargetsRelative=this.morphTargetsRelative;const p=this.groups;for(let m=0,v=p.length;m<v;m++){const _=p[m];i.addGroup(_.start,_.count,_.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const v=this.parameters;for(const _ in v)v[_]!==void 0&&(e[_]=v[_]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const v in r){const _=r[v];e.data.attributes[v]=_.toJSON(e.data)}const l={};let u=!1;for(const v in this.morphAttributes){const _=this.morphAttributes[v],x=[];for(let c=0,d=_.length;c<d;c++){const g=_[c];x.push(g.toJSON(e.data))}x.length>0&&(l[v]=x,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const p=this.groups;p.length>0&&(e.data.groups=JSON.parse(JSON.stringify(p)));const m=this.boundingSphere;return m!==null&&(e.data.boundingSphere=m.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const _ in l){const x=l[_];this.setAttribute(_,x.clone(i))}const u=e.morphAttributes;for(const _ in u){const x=[],c=u[_];for(let d=0,g=c.length;d<g;d++)x.push(c[d].clone(i));this.morphAttributes[_]=x}this.morphTargetsRelative=e.morphTargetsRelative;const p=e.groups;for(let _=0,x=p.length;_<x;_++){const c=p[_];this.addGroup(c.start,c.count,c.materialIndex)}const m=e.boundingBox;m!==null&&(this.boundingBox=m.clone());const v=e.boundingSphere;return v!==null&&(this.boundingSphere=v.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lg=new fn,lr=new Ry,uu=new vh,Ng=new re,cu=new re,fu=new re,du=new re,fd=new re,hu=new re,Og=new re,pu=new re;class Li extends $n{constructor(e=new yr,i=new Tv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,p=l.length;u<p;u++){const m=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[m]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,p=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const m=this.morphTargetInfluences;if(u&&m){hu.set(0,0,0);for(let v=0,_=u.length;v<_;v++){const x=m[v],c=u[v];x!==0&&(fd.fromBufferAttribute(c,e),p?hu.addScaledVector(fd,x):hu.addScaledVector(fd.sub(i),x))}i.add(hu)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),uu.copy(r.boundingSphere),uu.applyMatrix4(u),lr.copy(e.ray).recast(e.near),!(uu.containsPoint(lr.origin)===!1&&(lr.intersectSphere(uu,Ng)===null||lr.origin.distanceToSquared(Ng)>(e.far-e.near)**2))&&(Lg.copy(u).invert(),lr.copy(e.ray).applyMatrix4(Lg),!(r.boundingBox!==null&&lr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,lr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,p=this.material,m=u.index,v=u.attributes.position,_=u.attributes.uv,x=u.attributes.uv1,c=u.attributes.normal,d=u.groups,g=u.drawRange;if(m!==null)if(Array.isArray(p))for(let M=0,T=d.length;M<T;M++){const y=d[M],S=p[y.materialIndex],I=Math.max(y.start,g.start),O=Math.min(m.count,Math.min(y.start+y.count,g.start+g.count));for(let A=I,U=O;A<U;A+=3){const N=m.getX(A),B=m.getX(A+1),G=m.getX(A+2);l=mu(this,S,e,r,_,x,c,N,B,G),l&&(l.faceIndex=Math.floor(A/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const M=Math.max(0,g.start),T=Math.min(m.count,g.start+g.count);for(let y=M,S=T;y<S;y+=3){const I=m.getX(y),O=m.getX(y+1),A=m.getX(y+2);l=mu(this,p,e,r,_,x,c,I,O,A),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(v!==void 0)if(Array.isArray(p))for(let M=0,T=d.length;M<T;M++){const y=d[M],S=p[y.materialIndex],I=Math.max(y.start,g.start),O=Math.min(v.count,Math.min(y.start+y.count,g.start+g.count));for(let A=I,U=O;A<U;A+=3){const N=A,B=A+1,G=A+2;l=mu(this,S,e,r,_,x,c,N,B,G),l&&(l.faceIndex=Math.floor(A/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const M=Math.max(0,g.start),T=Math.min(v.count,g.start+g.count);for(let y=M,S=T;y<S;y+=3){const I=y,O=y+1,A=y+2;l=mu(this,p,e,r,_,x,c,I,O,A),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function Iy(o,e,i,r,l,u,p,m){let v;if(e.side===Vn?v=r.intersectTriangle(p,u,l,!0,m):v=r.intersectTriangle(l,u,p,e.side===Va,m),v===null)return null;pu.copy(m),pu.applyMatrix4(o.matrixWorld);const _=i.ray.origin.distanceTo(pu);return _<i.near||_>i.far?null:{distance:_,point:pu.clone(),object:o}}function mu(o,e,i,r,l,u,p,m,v,_){o.getVertexPosition(m,cu),o.getVertexPosition(v,fu),o.getVertexPosition(_,du);const x=Iy(o,e,i,r,cu,fu,du,Og);if(x){const c=new re;vi.getBarycoord(Og,cu,fu,du,c),l&&(x.uv=vi.getInterpolatedAttribute(l,m,v,_,c,new Ct)),u&&(x.uv1=vi.getInterpolatedAttribute(u,m,v,_,c,new Ct)),p&&(x.normal=vi.getInterpolatedAttribute(p,m,v,_,c,new re),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const d={a:m,b:v,c:_,normal:new re,materialIndex:0};vi.getNormal(cu,fu,du,d.normal),x.face=d,x.barycoord=c}return x}class Ho extends yr{constructor(e=1,i=1,r=1,l=1,u=1,p=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:p};const m=this;l=Math.floor(l),u=Math.floor(u),p=Math.floor(p);const v=[],_=[],x=[],c=[];let d=0,g=0;M("z","y","x",-1,-1,r,i,e,p,u,0),M("z","y","x",1,-1,r,i,-e,p,u,1),M("x","z","y",1,1,e,r,i,l,p,2),M("x","z","y",1,-1,e,r,-i,l,p,3),M("x","y","z",1,-1,e,i,r,l,u,4),M("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(v),this.setAttribute("position",new vr(_,3)),this.setAttribute("normal",new vr(x,3)),this.setAttribute("uv",new vr(c,2));function M(T,y,S,I,O,A,U,N,B,G,C){const D=A/B,z=U/G,se=A/2,oe=U/2,ue=N/2,de=B+1,H=G+1;let K=0,Y=0;const Se=new re;for(let L=0;L<H;L++){const J=L*z-oe;for(let ve=0;ve<de;ve++){const xe=ve*D-se;Se[T]=xe*I,Se[y]=J*O,Se[S]=ue,_.push(Se.x,Se.y,Se.z),Se[T]=0,Se[y]=0,Se[S]=N>0?1:-1,x.push(Se.x,Se.y,Se.z),c.push(ve/B),c.push(1-L/G),K+=1}}for(let L=0;L<G;L++)for(let J=0;J<B;J++){const ve=d+J+de*L,xe=d+J+de*(L+1),we=d+(J+1)+de*(L+1),te=d+(J+1)+de*L;v.push(ve,xe,te),v.push(xe,we,te),Y+=6}m.addGroup(g,Y,C),g+=Y,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ho(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function bs(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Nn(o){const e={};for(let i=0;i<o.length;i++){const r=bs(o[i]);for(const l in r)e[l]=r[l]}return e}function zy(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Rv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const Fy={clone:bs,merge:Nn};var Hy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sa extends Lu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hy,this.fragmentShader=Gy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bs(e.uniforms),this.uniformsGroups=zy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const p=this.uniforms[l].value;p&&p.isTexture?i.uniforms[l]={type:"t",value:p.toJSON(e).uuid}:p&&p.isColor?i.uniforms[l]={type:"c",value:p.getHex()}:p&&p.isVector2?i.uniforms[l]={type:"v2",value:p.toArray()}:p&&p.isVector3?i.uniforms[l]={type:"v3",value:p.toArray()}:p&&p.isVector4?i.uniforms[l]={type:"v4",value:p.toArray()}:p&&p.isMatrix3?i.uniforms[l]={type:"m3",value:p.toArray()}:p&&p.isMatrix4?i.uniforms[l]={type:"m4",value:p.toArray()}:i.uniforms[l]={value:p}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class wv extends $n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fn,this.projectionMatrix=new fn,this.projectionMatrixInverse=new fn,this.coordinateSystem=Ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ia=new re,Pg=new Ct,Bg=new Ct;class gi extends wv{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=sh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sh*2*Math.atan(Math.tan(Xf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Ia.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ia.x,Ia.y).multiplyScalar(-e/Ia.z),Ia.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ia.x,Ia.y).multiplyScalar(-e/Ia.z)}getViewSize(e,i){return this.getViewBounds(e,Pg,Bg),i.subVectors(Bg,Pg)}setViewOffset(e,i,r,l,u,p){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=p,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Xf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const p=this.view;if(this.view!==null&&this.view.enabled){const v=p.fullWidth,_=p.fullHeight;u+=p.offsetX*l/v,i-=p.offsetY*r/_,l*=p.width/v,r*=p.height/_}const m=this.filmOffset;m!==0&&(u+=e*m/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ms=-90,_s=1;class Vy extends $n{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new gi(ms,_s,e,i);l.layers=this.layers,this.add(l);const u=new gi(ms,_s,e,i);u.layers=this.layers,this.add(u);const p=new gi(ms,_s,e,i);p.layers=this.layers,this.add(p);const m=new gi(ms,_s,e,i);m.layers=this.layers,this.add(m);const v=new gi(ms,_s,e,i);v.layers=this.layers,this.add(v);const _=new gi(ms,_s,e,i);_.layers=this.layers,this.add(_)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,p,m,v]=i;for(const _ of i)this.remove(_);if(e===Ui)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),p.up.set(0,0,1),p.lookAt(0,-1,0),m.up.set(0,1,0),m.lookAt(0,0,1),v.up.set(0,1,0),v.lookAt(0,0,-1);else if(e===Cu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),p.up.set(0,0,-1),p.lookAt(0,-1,0),m.up.set(0,-1,0),m.lookAt(0,0,1),v.up.set(0,-1,0),v.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const _ of i)this.add(_),_.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,p,m,v,_,x]=this.children,c=e.getRenderTarget(),d=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,p),e.setRenderTarget(r,2,l),e.render(i,m),e.setRenderTarget(r,3,l),e.render(i,v),e.setRenderTarget(r,4,l),e.render(i,_),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,l),e.render(i,x),e.setRenderTarget(c,d,g),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class Cv extends On{constructor(e=[],i=Es,r,l,u,p,m,v,_,x){super(e,i,r,l,u,p,m,v,_,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ky extends xr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Cv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Ho(5,5,5),u=new sa({name:"CubemapFromEquirect",uniforms:bs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Vn,blending:Ha});u.uniforms.tEquirect.value=i;const p=new Li(l,u),m=i.minFilter;return i.minFilter===gr&&(i.minFilter=Di),new Vy(1,10,this).update(e,p),i.minFilter=m,p.geometry.dispose(),p.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let p=0;p<6;p++)e.setRenderTarget(this,p),e.clear(i,r,l);e.setRenderTarget(u)}}class _u extends $n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xy={type:"move"};class dd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _u,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _u,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _u,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,p=null;const m=this._targetRay,v=this._grip,_=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(_&&e.hand){p=!0;for(const T of e.hand.values()){const y=i.getJointPose(T,r),S=this._getHandJoint(_,T);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const x=_.joints["index-finger-tip"],c=_.joints["thumb-tip"],d=x.position.distanceTo(c.position),g=.02,M=.005;_.inputState.pinching&&d>g+M?(_.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!_.inputState.pinching&&d<=g-M&&(_.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else v!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(v.matrix.fromArray(u.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,u.linearVelocity?(v.hasLinearVelocity=!0,v.linearVelocity.copy(u.linearVelocity)):v.hasLinearVelocity=!1,u.angularVelocity?(v.hasAngularVelocity=!0,v.angularVelocity.copy(u.angularVelocity)):v.hasAngularVelocity=!1));m!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(m.matrix.fromArray(l.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,l.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(l.linearVelocity)):m.hasLinearVelocity=!1,l.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(l.angularVelocity)):m.hasAngularVelocity=!1,this.dispatchEvent(Xy)))}return m!==null&&(m.visible=l!==null),v!==null&&(v.visible=u!==null),_!==null&&(_.visible=p!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new _u;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class Wy extends $n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ra,this.environmentIntensity=1,this.environmentRotation=new ra,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const hd=new re,qy=new re,Yy=new ot;class dr{constructor(e=new re(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=hd.subVectors(r,i).cross(qy.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(hd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||Yy.getNormalMatrix(e),l=this.coplanarPoint(hd).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ur=new vh,Zy=new Ct(.5,.5),gu=new re;class Dv{constructor(e=new dr,i=new dr,r=new dr,l=new dr,u=new dr,p=new dr){this.planes=[e,i,r,l,u,p]}set(e,i,r,l,u,p){const m=this.planes;return m[0].copy(e),m[1].copy(i),m[2].copy(r),m[3].copy(l),m[4].copy(u),m[5].copy(p),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Ui,r=!1){const l=this.planes,u=e.elements,p=u[0],m=u[1],v=u[2],_=u[3],x=u[4],c=u[5],d=u[6],g=u[7],M=u[8],T=u[9],y=u[10],S=u[11],I=u[12],O=u[13],A=u[14],U=u[15];if(l[0].setComponents(_-p,g-x,S-M,U-I).normalize(),l[1].setComponents(_+p,g+x,S+M,U+I).normalize(),l[2].setComponents(_+m,g+c,S+T,U+O).normalize(),l[3].setComponents(_-m,g-c,S-T,U-O).normalize(),r)l[4].setComponents(v,d,y,A).normalize(),l[5].setComponents(_-v,g-d,S-y,U-A).normalize();else if(l[4].setComponents(_-v,g-d,S-y,U-A).normalize(),i===Ui)l[5].setComponents(_+v,g+d,S+y,U+A).normalize();else if(i===Cu)l[5].setComponents(v,d,y,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ur.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(e){ur.center.set(0,0,0);const i=Zy.distanceTo(e.center);return ur.radius=.7071067811865476+i,ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(gu.x=l.normal.x>0?e.max.x:e.min.x,gu.y=l.normal.y>0?e.max.y:e.min.y,gu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(gu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Uv extends On{constructor(e,i,r=Sr,l,u,p,m=xi,v=xi,_,x=Oo,c=1){if(x!==Oo&&x!==Po)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:i,depth:c};super(d,l,u,p,m,v,x,r,_),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Go extends yr{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,p=i/2,m=Math.floor(r),v=Math.floor(l),_=m+1,x=v+1,c=e/m,d=i/v,g=[],M=[],T=[],y=[];for(let S=0;S<x;S++){const I=S*d-p;for(let O=0;O<_;O++){const A=O*c-u;M.push(A,-I,0),T.push(0,0,1),y.push(O/m),y.push(1-S/v)}}for(let S=0;S<v;S++)for(let I=0;I<m;I++){const O=I+_*S,A=I+_*(S+1),U=I+1+_*(S+1),N=I+1+_*S;g.push(O,A,N),g.push(A,U,N)}this.setIndex(g),this.setAttribute("position",new vr(M,3)),this.setAttribute("normal",new vr(T,3)),this.setAttribute("uv",new vr(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Go(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ky extends Lu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jy extends Lu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Lv extends wv{constructor(e=-1,i=1,r=1,l=-1,u=.1,p=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=p,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,p){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=p,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,p=r+e,m=l+i,v=l-i;if(this.view!==null&&this.view.enabled){const _=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=_*this.view.offsetX,p=u+_*this.view.width,m-=x*this.view.offsetY,v=m-x*this.view.height}this.projectionMatrix.makeOrthographic(u,p,m,v,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Qy extends gi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Jy{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function Ig(o,e,i,r){const l=$y(r);switch(i){case pv:return o*e;case _v:return o*e/l.components*l.byteLength;case ph:return o*e/l.components*l.byteLength;case gv:return o*e*2/l.components*l.byteLength;case mh:return o*e*2/l.components*l.byteLength;case mv:return o*e*3/l.components*l.byteLength;case Si:return o*e*4/l.components*l.byteLength;case _h:return o*e*4/l.components*l.byteLength;case yu:case Mu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Eu:case Tu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Pd:case Id:return Math.max(o,16)*Math.max(e,8)/4;case Od:case Bd:return Math.max(o,8)*Math.max(e,8)/2;case zd:case Fd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Hd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Gd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Vd:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case kd:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Xd:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Wd:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case qd:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Yd:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Zd:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Kd:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case jd:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Qd:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Jd:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case $d:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case eh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Au:case th:case nh:return Math.ceil(o/4)*Math.ceil(e/4)*16;case vv:case ih:return Math.ceil(o/4)*Math.ceil(e/4)*8;case ah:case rh:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function $y(o){switch(o){case aa:case fv:return{byteLength:1,components:1};case Lo:case dv:case Bo:return{byteLength:2,components:1};case dh:case hh:return{byteLength:2,components:4};case Sr:case fh:case na:return{byteLength:4,components:1};case hv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ch}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ch);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Nv(){let o=null,e=!1,i=null,r=null;function l(u,p){i(u,p),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function eM(o){const e=new WeakMap;function i(m,v){const _=m.array,x=m.usage,c=_.byteLength,d=o.createBuffer();o.bindBuffer(v,d),o.bufferData(v,_,x),m.onUploadCallback();let g;if(_ instanceof Float32Array)g=o.FLOAT;else if(typeof Float16Array<"u"&&_ instanceof Float16Array)g=o.HALF_FLOAT;else if(_ instanceof Uint16Array)m.isFloat16BufferAttribute?g=o.HALF_FLOAT:g=o.UNSIGNED_SHORT;else if(_ instanceof Int16Array)g=o.SHORT;else if(_ instanceof Uint32Array)g=o.UNSIGNED_INT;else if(_ instanceof Int32Array)g=o.INT;else if(_ instanceof Int8Array)g=o.BYTE;else if(_ instanceof Uint8Array)g=o.UNSIGNED_BYTE;else if(_ instanceof Uint8ClampedArray)g=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+_);return{buffer:d,type:g,bytesPerElement:_.BYTES_PER_ELEMENT,version:m.version,size:c}}function r(m,v,_){const x=v.array,c=v.updateRanges;if(o.bindBuffer(_,m),c.length===0)o.bufferSubData(_,0,x);else{c.sort((g,M)=>g.start-M.start);let d=0;for(let g=1;g<c.length;g++){const M=c[d],T=c[g];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++d,c[d]=T)}c.length=d+1;for(let g=0,M=c.length;g<M;g++){const T=c[g];o.bufferSubData(_,T.start*x.BYTES_PER_ELEMENT,x,T.start,T.count)}v.clearUpdateRanges()}v.onUploadCallback()}function l(m){return m.isInterleavedBufferAttribute&&(m=m.data),e.get(m)}function u(m){m.isInterleavedBufferAttribute&&(m=m.data);const v=e.get(m);v&&(o.deleteBuffer(v.buffer),e.delete(m))}function p(m,v){if(m.isInterleavedBufferAttribute&&(m=m.data),m.isGLBufferAttribute){const x=e.get(m);(!x||x.version<m.version)&&e.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}const _=e.get(m);if(_===void 0)e.set(m,i(m,v));else if(_.version<m.version){if(_.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(_.buffer,m,v),_.version=m.version}}return{get:l,remove:u,update:p}}var tM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nM=`#ifdef USE_ALPHAHASH
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
#endif`,iM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,aM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oM=`#ifdef USE_AOMAP
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
#endif`,lM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uM=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,cM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pM=`#ifdef USE_IRIDESCENCE
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
#endif`,mM=`#ifdef USE_BUMPMAP
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
#endif`,_M=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,SM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,MM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,EM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,TM=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,AM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bM=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,RM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,CM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,DM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,UM="gl_FragColor = linearToOutputTexel( gl_FragColor );",LM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,NM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,OM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,PM=`#ifdef USE_ENVMAP
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
#endif`,BM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,IM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,FM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,HM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,GM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,VM=`#ifdef USE_GRADIENTMAP
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
}`,kM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,XM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,WM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qM=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,YM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,ZM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,KM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,QM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,JM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,$M=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,eE=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,nE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,aE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cE=`#if defined( USE_POINTS_UV )
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
#endif`,fE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_E=`#ifdef USE_MORPHTARGETS
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
#endif`,gE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,SE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ME=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,EE=`#ifdef USE_NORMALMAP
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
#endif`,TE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,AE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,RE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,CE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,DE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,UE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,LE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,NE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,OE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,PE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,BE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,IE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,zE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,FE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,HE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GE=`#ifdef USE_SKINNING
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
#endif`,VE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kE=`#ifdef USE_SKINNING
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
#endif`,XE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,WE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,YE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ZE=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,KE=`#ifdef USE_TRANSMISSION
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
#endif`,jE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$E=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tT=`uniform sampler2D t2D;
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
}`,nT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sT=`#include <common>
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
}`,oT=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSEDEPTHBUF
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
}`,lT=`#define DISTANCE
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
}`,uT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dT=`uniform float scale;
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
}`,hT=`uniform vec3 diffuse;
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
}`,pT=`#include <common>
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
}`,mT=`uniform vec3 diffuse;
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
}`,_T=`#define LAMBERT
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
}`,gT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,vT=`#define MATCAP
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
}`,ST=`#define MATCAP
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
}`,xT=`#define NORMAL
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
}`,yT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,MT=`#define PHONG
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
}`,ET=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,TT=`#define STANDARD
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
}`,AT=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,bT=`#define TOON
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
}`,RT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,wT=`uniform float size;
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
}`,CT=`uniform vec3 diffuse;
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
}`,DT=`#include <common>
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
}`,UT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,LT=`uniform float rotation;
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
}`,NT=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:tM,alphahash_pars_fragment:nM,alphamap_fragment:iM,alphamap_pars_fragment:aM,alphatest_fragment:rM,alphatest_pars_fragment:sM,aomap_fragment:oM,aomap_pars_fragment:lM,batching_pars_vertex:uM,batching_vertex:cM,begin_vertex:fM,beginnormal_vertex:dM,bsdfs:hM,iridescence_fragment:pM,bumpmap_pars_fragment:mM,clipping_planes_fragment:_M,clipping_planes_pars_fragment:gM,clipping_planes_pars_vertex:vM,clipping_planes_vertex:SM,color_fragment:xM,color_pars_fragment:yM,color_pars_vertex:MM,color_vertex:EM,common:TM,cube_uv_reflection_fragment:AM,defaultnormal_vertex:bM,displacementmap_pars_vertex:RM,displacementmap_vertex:wM,emissivemap_fragment:CM,emissivemap_pars_fragment:DM,colorspace_fragment:UM,colorspace_pars_fragment:LM,envmap_fragment:NM,envmap_common_pars_fragment:OM,envmap_pars_fragment:PM,envmap_pars_vertex:BM,envmap_physical_pars_fragment:YM,envmap_vertex:IM,fog_vertex:zM,fog_pars_vertex:FM,fog_fragment:HM,fog_pars_fragment:GM,gradientmap_pars_fragment:VM,lightmap_pars_fragment:kM,lights_lambert_fragment:XM,lights_lambert_pars_fragment:WM,lights_pars_begin:qM,lights_toon_fragment:ZM,lights_toon_pars_fragment:KM,lights_phong_fragment:jM,lights_phong_pars_fragment:QM,lights_physical_fragment:JM,lights_physical_pars_fragment:$M,lights_fragment_begin:eE,lights_fragment_maps:tE,lights_fragment_end:nE,logdepthbuf_fragment:iE,logdepthbuf_pars_fragment:aE,logdepthbuf_pars_vertex:rE,logdepthbuf_vertex:sE,map_fragment:oE,map_pars_fragment:lE,map_particle_fragment:uE,map_particle_pars_fragment:cE,metalnessmap_fragment:fE,metalnessmap_pars_fragment:dE,morphinstance_vertex:hE,morphcolor_vertex:pE,morphnormal_vertex:mE,morphtarget_pars_vertex:_E,morphtarget_vertex:gE,normal_fragment_begin:vE,normal_fragment_maps:SE,normal_pars_fragment:xE,normal_pars_vertex:yE,normal_vertex:ME,normalmap_pars_fragment:EE,clearcoat_normal_fragment_begin:TE,clearcoat_normal_fragment_maps:AE,clearcoat_pars_fragment:bE,iridescence_pars_fragment:RE,opaque_fragment:wE,packing:CE,premultiplied_alpha_fragment:DE,project_vertex:UE,dithering_fragment:LE,dithering_pars_fragment:NE,roughnessmap_fragment:OE,roughnessmap_pars_fragment:PE,shadowmap_pars_fragment:BE,shadowmap_pars_vertex:IE,shadowmap_vertex:zE,shadowmask_pars_fragment:FE,skinbase_vertex:HE,skinning_pars_vertex:GE,skinning_vertex:VE,skinnormal_vertex:kE,specularmap_fragment:XE,specularmap_pars_fragment:WE,tonemapping_fragment:qE,tonemapping_pars_fragment:YE,transmission_fragment:ZE,transmission_pars_fragment:KE,uv_pars_fragment:jE,uv_pars_vertex:QE,uv_vertex:JE,worldpos_vertex:$E,background_vert:eT,background_frag:tT,backgroundCube_vert:nT,backgroundCube_frag:iT,cube_vert:aT,cube_frag:rT,depth_vert:sT,depth_frag:oT,distanceRGBA_vert:lT,distanceRGBA_frag:uT,equirect_vert:cT,equirect_frag:fT,linedashed_vert:dT,linedashed_frag:hT,meshbasic_vert:pT,meshbasic_frag:mT,meshlambert_vert:_T,meshlambert_frag:gT,meshmatcap_vert:vT,meshmatcap_frag:ST,meshnormal_vert:xT,meshnormal_frag:yT,meshphong_vert:MT,meshphong_frag:ET,meshphysical_vert:TT,meshphysical_frag:AT,meshtoon_vert:bT,meshtoon_frag:RT,points_vert:wT,points_frag:CT,shadow_vert:DT,shadow_frag:UT,sprite_vert:LT,sprite_frag:NT},Ne={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},wi={basic:{uniforms:Nn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:Nn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Pt(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:Nn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:Nn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:Nn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new Pt(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:Nn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:Nn([Ne.points,Ne.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:Nn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:Nn([Ne.common,Ne.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:Nn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:Nn([Ne.sprite,Ne.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:Nn([Ne.common,Ne.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:Nn([Ne.lights,Ne.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};wi.physical={uniforms:Nn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const vu={r:0,b:0,g:0},cr=new ra,OT=new fn;function PT(o,e,i,r,l,u,p){const m=new Pt(0);let v=u===!0?0:1,_,x,c=null,d=0,g=null;function M(O){let A=O.isScene===!0?O.background:null;return A&&A.isTexture&&(A=(O.backgroundBlurriness>0?i:e).get(A)),A}function T(O){let A=!1;const U=M(O);U===null?S(m,v):U&&U.isColor&&(S(U,1),A=!0);const N=o.xr.getEnvironmentBlendMode();N==="additive"?r.buffers.color.setClear(0,0,0,1,p):N==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,p),(o.autoClear||A)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(O,A){const U=M(A);U&&(U.isCubeTexture||U.mapping===Uu)?(x===void 0&&(x=new Li(new Ho(1,1,1),new sa({name:"BackgroundCubeMaterial",uniforms:bs(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(N,B,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(x)),cr.copy(A.backgroundRotation),cr.x*=-1,cr.y*=-1,cr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),x.material.uniforms.envMap.value=U,x.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(OT.makeRotationFromEuler(cr)),x.material.toneMapped=Et.getTransfer(U.colorSpace)!==Ot,(c!==U||d!==U.version||g!==o.toneMapping)&&(x.material.needsUpdate=!0,c=U,d=U.version,g=o.toneMapping),x.layers.enableAll(),O.unshift(x,x.geometry,x.material,0,0,null)):U&&U.isTexture&&(_===void 0&&(_=new Li(new Go(2,2),new sa({name:"BackgroundMaterial",uniforms:bs(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Va,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),Object.defineProperty(_.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(_)),_.material.uniforms.t2D.value=U,_.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,_.material.toneMapped=Et.getTransfer(U.colorSpace)!==Ot,U.matrixAutoUpdate===!0&&U.updateMatrix(),_.material.uniforms.uvTransform.value.copy(U.matrix),(c!==U||d!==U.version||g!==o.toneMapping)&&(_.material.needsUpdate=!0,c=U,d=U.version,g=o.toneMapping),_.layers.enableAll(),O.unshift(_,_.geometry,_.material,0,0,null))}function S(O,A){O.getRGB(vu,Rv(o)),r.buffers.color.setClear(vu.r,vu.g,vu.b,A,p)}function I(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0)}return{getClearColor:function(){return m},setClearColor:function(O,A=1){m.set(O),v=A,S(m,v)},getClearAlpha:function(){return v},setClearAlpha:function(O){v=O,S(m,v)},render:T,addToRenderList:y,dispose:I}}function BT(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=d(null);let u=l,p=!1;function m(D,z,se,oe,ue){let de=!1;const H=c(oe,se,z);u!==H&&(u=H,_(u.object)),de=g(D,oe,se,ue),de&&M(D,oe,se,ue),ue!==null&&e.update(ue,o.ELEMENT_ARRAY_BUFFER),(de||p)&&(p=!1,A(D,z,se,oe),ue!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function v(){return o.createVertexArray()}function _(D){return o.bindVertexArray(D)}function x(D){return o.deleteVertexArray(D)}function c(D,z,se){const oe=se.wireframe===!0;let ue=r[D.id];ue===void 0&&(ue={},r[D.id]=ue);let de=ue[z.id];de===void 0&&(de={},ue[z.id]=de);let H=de[oe];return H===void 0&&(H=d(v()),de[oe]=H),H}function d(D){const z=[],se=[],oe=[];for(let ue=0;ue<i;ue++)z[ue]=0,se[ue]=0,oe[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:se,attributeDivisors:oe,object:D,attributes:{},index:null}}function g(D,z,se,oe){const ue=u.attributes,de=z.attributes;let H=0;const K=se.getAttributes();for(const Y in K)if(K[Y].location>=0){const L=ue[Y];let J=de[Y];if(J===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(J=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(J=D.instanceColor)),L===void 0||L.attribute!==J||J&&L.data!==J.data)return!0;H++}return u.attributesNum!==H||u.index!==oe}function M(D,z,se,oe){const ue={},de=z.attributes;let H=0;const K=se.getAttributes();for(const Y in K)if(K[Y].location>=0){let L=de[Y];L===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(L=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(L=D.instanceColor));const J={};J.attribute=L,L&&L.data&&(J.data=L.data),ue[Y]=J,H++}u.attributes=ue,u.attributesNum=H,u.index=oe}function T(){const D=u.newAttributes;for(let z=0,se=D.length;z<se;z++)D[z]=0}function y(D){S(D,0)}function S(D,z){const se=u.newAttributes,oe=u.enabledAttributes,ue=u.attributeDivisors;se[D]=1,oe[D]===0&&(o.enableVertexAttribArray(D),oe[D]=1),ue[D]!==z&&(o.vertexAttribDivisor(D,z),ue[D]=z)}function I(){const D=u.newAttributes,z=u.enabledAttributes;for(let se=0,oe=z.length;se<oe;se++)z[se]!==D[se]&&(o.disableVertexAttribArray(se),z[se]=0)}function O(D,z,se,oe,ue,de,H){H===!0?o.vertexAttribIPointer(D,z,se,ue,de):o.vertexAttribPointer(D,z,se,oe,ue,de)}function A(D,z,se,oe){T();const ue=oe.attributes,de=se.getAttributes(),H=z.defaultAttributeValues;for(const K in de){const Y=de[K];if(Y.location>=0){let Se=ue[K];if(Se===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(Se=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(Se=D.instanceColor)),Se!==void 0){const L=Se.normalized,J=Se.itemSize,ve=e.get(Se);if(ve===void 0)continue;const xe=ve.buffer,we=ve.type,te=ve.bytesPerElement,he=we===o.INT||we===o.UNSIGNED_INT||Se.gpuType===fh;if(Se.isInterleavedBufferAttribute){const ye=Se.data,Oe=ye.stride,qe=Se.offset;if(ye.isInstancedInterleavedBuffer){for(let nt=0;nt<Y.locationSize;nt++)S(Y.location+nt,ye.meshPerAttribute);D.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let nt=0;nt<Y.locationSize;nt++)y(Y.location+nt);o.bindBuffer(o.ARRAY_BUFFER,xe);for(let nt=0;nt<Y.locationSize;nt++)O(Y.location+nt,J/Y.locationSize,we,L,Oe*te,(qe+J/Y.locationSize*nt)*te,he)}else{if(Se.isInstancedBufferAttribute){for(let ye=0;ye<Y.locationSize;ye++)S(Y.location+ye,Se.meshPerAttribute);D.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let ye=0;ye<Y.locationSize;ye++)y(Y.location+ye);o.bindBuffer(o.ARRAY_BUFFER,xe);for(let ye=0;ye<Y.locationSize;ye++)O(Y.location+ye,J/Y.locationSize,we,L,J*te,J/Y.locationSize*ye*te,he)}}else if(H!==void 0){const L=H[K];if(L!==void 0)switch(L.length){case 2:o.vertexAttrib2fv(Y.location,L);break;case 3:o.vertexAttrib3fv(Y.location,L);break;case 4:o.vertexAttrib4fv(Y.location,L);break;default:o.vertexAttrib1fv(Y.location,L)}}}}I()}function U(){G();for(const D in r){const z=r[D];for(const se in z){const oe=z[se];for(const ue in oe)x(oe[ue].object),delete oe[ue];delete z[se]}delete r[D]}}function N(D){if(r[D.id]===void 0)return;const z=r[D.id];for(const se in z){const oe=z[se];for(const ue in oe)x(oe[ue].object),delete oe[ue];delete z[se]}delete r[D.id]}function B(D){for(const z in r){const se=r[z];if(se[D.id]===void 0)continue;const oe=se[D.id];for(const ue in oe)x(oe[ue].object),delete oe[ue];delete se[D.id]}}function G(){C(),p=!0,u!==l&&(u=l,_(u.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:m,reset:G,resetDefaultState:C,dispose:U,releaseStatesOfGeometry:N,releaseStatesOfProgram:B,initAttributes:T,enableAttribute:y,disableUnusedAttributes:I}}function IT(o,e,i){let r;function l(_){r=_}function u(_,x){o.drawArrays(r,_,x),i.update(x,r,1)}function p(_,x,c){c!==0&&(o.drawArraysInstanced(r,_,x,c),i.update(x,r,c))}function m(_,x,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,_,0,x,0,c);let g=0;for(let M=0;M<c;M++)g+=x[M];i.update(g,r,1)}function v(_,x,c,d){if(c===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let M=0;M<_.length;M++)p(_[M],x[M],d[M]);else{g.multiDrawArraysInstancedWEBGL(r,_,0,x,0,d,0,c);let M=0;for(let T=0;T<c;T++)M+=x[T]*d[T];i.update(M,r,1)}}this.setMode=l,this.render=u,this.renderInstances=p,this.renderMultiDraw=m,this.renderMultiDrawInstances=v}function zT(o,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function p(B){return!(B!==Si&&r.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function m(B){const G=B===Bo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==aa&&r.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==na&&!G)}function v(B){if(B==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let _=i.precision!==void 0?i.precision:"highp";const x=v(_);x!==_&&(console.warn("THREE.WebGLRenderer:",_,"not supported, using",x,"instead."),_=x);const c=i.logarithmicDepthBuffer===!0,d=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),g=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),I=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),O=o.getParameter(o.MAX_VARYING_VECTORS),A=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),U=M>0,N=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:v,textureFormatReadable:p,textureTypeReadable:m,precision:_,logarithmicDepthBuffer:c,reversedDepthBuffer:d,maxTextures:g,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:I,maxVaryings:O,maxFragmentUniforms:A,vertexTextures:U,maxSamples:N}}function FT(o){const e=this;let i=null,r=0,l=!1,u=!1;const p=new dr,m=new ot,v={value:null,needsUpdate:!1};this.uniform=v,this.numPlanes=0,this.numIntersection=0,this.init=function(c,d){const g=c.length!==0||d||r!==0||l;return l=d,r=c.length,g},this.beginShadows=function(){u=!0,x(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(c,d){i=x(c,d,0)},this.setState=function(c,d,g){const M=c.clippingPlanes,T=c.clipIntersection,y=c.clipShadows,S=o.get(c);if(!l||M===null||M.length===0||u&&!y)u?x(null):_();else{const I=u?0:r,O=I*4;let A=S.clippingState||null;v.value=A,A=x(M,d,O,g);for(let U=0;U!==O;++U)A[U]=i[U];S.clippingState=A,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=I}};function _(){v.value!==i&&(v.value=i,v.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(c,d,g,M){const T=c!==null?c.length:0;let y=null;if(T!==0){if(y=v.value,M!==!0||y===null){const S=g+T*4,I=d.matrixWorldInverse;m.getNormalMatrix(I),(y===null||y.length<S)&&(y=new Float32Array(S));for(let O=0,A=g;O!==T;++O,A+=4)p.copy(c[O]).applyMatrix4(I,m),p.normal.toArray(y,A),y[A+3]=p.constant}v.value=y,v.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}function HT(o){let e=new WeakMap;function i(p,m){return m===Dd?p.mapping=Es:m===Ud&&(p.mapping=Ts),p}function r(p){if(p&&p.isTexture){const m=p.mapping;if(m===Dd||m===Ud)if(e.has(p)){const v=e.get(p).texture;return i(v,p.mapping)}else{const v=p.image;if(v&&v.height>0){const _=new ky(v.height);return _.fromEquirectangularTexture(o,p),e.set(p,_),p.addEventListener("dispose",l),i(_.texture,p.mapping)}else return null}}return p}function l(p){const m=p.target;m.removeEventListener("dispose",l);const v=e.get(m);v!==void 0&&(e.delete(m),v.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const vs=4,zg=[.125,.215,.35,.446,.526,.582],mr=20,pd=new Lv,Fg=new Pt;let md=null,_d=0,gd=0,vd=!1;const hr=(1+Math.sqrt(5))/2,gs=1/hr,Hg=[new re(-hr,gs,0),new re(hr,gs,0),new re(-gs,0,hr),new re(gs,0,hr),new re(0,hr,-gs),new re(0,hr,gs),new re(-1,1,-1),new re(1,1,-1),new re(-1,1,1),new re(1,1,1)],GT=new re;class Gg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,u={}){const{size:p=256,position:m=GT}=u;md=this._renderer.getRenderTarget(),_d=this._renderer.getActiveCubeFace(),gd=this._renderer.getActiveMipmapLevel(),vd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(p);const v=this._allocateTargets();return v.depthBuffer=!0,this._sceneToCubeUV(e,r,l,v,m),i>0&&this._blur(v,0,0,i),this._applyPMREM(v),this._cleanup(v),v}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(md,_d,gd),this._renderer.xr.enabled=vd,e.scissorTest=!1,Su(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Es||e.mapping===Ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),md=this._renderer.getRenderTarget(),_d=this._renderer.getActiveCubeFace(),gd=this._renderer.getActiveMipmapLevel(),vd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Di,minFilter:Di,generateMipmaps:!1,type:Bo,format:Si,colorSpace:As,depthBuffer:!1},l=Vg(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vg(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=VT(u)),this._blurMaterial=kT(u,e,i)}return l}_compileMaterial(e){const i=new Li(this._lodPlanes[0],e);this._renderer.compile(i,pd)}_sceneToCubeUV(e,i,r,l,u){const v=new gi(90,1,i,r),_=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,g=c.toneMapping;c.getClearColor(Fg),c.toneMapping=Ga,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(l),c.clearDepth(),c.setRenderTarget(null));const T=new Tv({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1}),y=new Li(new Ho,T);let S=!1;const I=e.background;I?I.isColor&&(T.color.copy(I),e.background=null,S=!0):(T.color.copy(Fg),S=!0);for(let O=0;O<6;O++){const A=O%3;A===0?(v.up.set(0,_[O],0),v.position.set(u.x,u.y,u.z),v.lookAt(u.x+x[O],u.y,u.z)):A===1?(v.up.set(0,0,_[O]),v.position.set(u.x,u.y,u.z),v.lookAt(u.x,u.y+x[O],u.z)):(v.up.set(0,_[O],0),v.position.set(u.x,u.y,u.z),v.lookAt(u.x,u.y,u.z+x[O]));const U=this._cubeSize;Su(l,A*U,O>2?U:0,U,U),c.setRenderTarget(l),S&&c.render(y,v),c.render(e,v)}y.geometry.dispose(),y.material.dispose(),c.toneMapping=g,c.autoClear=d,e.background=I}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Es||e.mapping===Ts;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kg());const u=l?this._cubemapMaterial:this._equirectMaterial,p=new Li(this._lodPlanes[0],u),m=u.uniforms;m.envMap.value=e;const v=this._cubeSize;Su(i,0,0,3*v,2*v),r.setRenderTarget(i),r.render(p,pd)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const p=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),m=Hg[(l-u-1)%Hg.length];this._blur(e,u-1,u,p,m)}i.autoClear=r}_blur(e,i,r,l,u){const p=this._pingPongRenderTarget;this._halfBlur(e,p,i,r,l,"latitudinal",u),this._halfBlur(p,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,p,m){const v=this._renderer,_=this._blurMaterial;p!=="latitudinal"&&p!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const x=3,c=new Li(this._lodPlanes[l],_),d=_.uniforms,g=this._sizeLods[r]-1,M=isFinite(u)?Math.PI/(2*g):2*Math.PI/(2*mr-1),T=u/M,y=isFinite(u)?1+Math.floor(x*T):mr;y>mr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${mr}`);const S=[];let I=0;for(let B=0;B<mr;++B){const G=B/T,C=Math.exp(-G*G/2);S.push(C),B===0?I+=C:B<y&&(I+=2*C)}for(let B=0;B<S.length;B++)S[B]=S[B]/I;d.envMap.value=e.texture,d.samples.value=y,d.weights.value=S,d.latitudinal.value=p==="latitudinal",m&&(d.poleAxis.value=m);const{_lodMax:O}=this;d.dTheta.value=M,d.mipInt.value=O-r;const A=this._sizeLods[l],U=3*A*(l>O-vs?l-O+vs:0),N=4*(this._cubeSize-A);Su(i,U,N,3*A,2*A),v.setRenderTarget(i),v.render(c,pd)}}function VT(o){const e=[],i=[],r=[];let l=o;const u=o-vs+1+zg.length;for(let p=0;p<u;p++){const m=Math.pow(2,l);i.push(m);let v=1/m;p>o-vs?v=zg[p-o+vs-1]:p===0&&(v=0),r.push(v);const _=1/(m-2),x=-_,c=1+_,d=[x,x,c,x,c,c,x,x,c,c,x,c],g=6,M=6,T=3,y=2,S=1,I=new Float32Array(T*M*g),O=new Float32Array(y*M*g),A=new Float32Array(S*M*g);for(let N=0;N<g;N++){const B=N%3*2/3-1,G=N>2?0:-1,C=[B,G,0,B+2/3,G,0,B+2/3,G+1,0,B,G,0,B+2/3,G+1,0,B,G+1,0];I.set(C,T*M*N),O.set(d,y*M*N);const D=[N,N,N,N,N,N];A.set(D,S*M*N)}const U=new yr;U.setAttribute("position",new Ni(I,T)),U.setAttribute("uv",new Ni(O,y)),U.setAttribute("faceIndex",new Ni(A,S)),e.push(U),l>vs&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function Vg(o,e,i){const r=new xr(o,e,i);return r.texture.mapping=Uu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Su(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function kT(o,e,i){const r=new Float32Array(mr),l=new re(0,1,0);return new sa({name:"SphericalGaussianBlur",defines:{n:mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function kg(){return new sa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sh(),fragmentShader:`

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
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function Xg(){return new sa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function Sh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function XT(o){let e=new WeakMap,i=null;function r(m){if(m&&m.isTexture){const v=m.mapping,_=v===Dd||v===Ud,x=v===Es||v===Ts;if(_||x){let c=e.get(m);const d=c!==void 0?c.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==d)return i===null&&(i=new Gg(o)),c=_?i.fromEquirectangular(m,c):i.fromCubemap(m,c),c.texture.pmremVersion=m.pmremVersion,e.set(m,c),c.texture;if(c!==void 0)return c.texture;{const g=m.image;return _&&g&&g.height>0||x&&g&&l(g)?(i===null&&(i=new Gg(o)),c=_?i.fromEquirectangular(m):i.fromCubemap(m),c.texture.pmremVersion=m.pmremVersion,e.set(m,c),m.addEventListener("dispose",u),c.texture):null}}}return m}function l(m){let v=0;const _=6;for(let x=0;x<_;x++)m[x]!==void 0&&v++;return v===_}function u(m){const v=m.target;v.removeEventListener("dispose",u);const _=e.get(v);_!==void 0&&(e.delete(v),_.dispose())}function p(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function WT(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&xs("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function qT(o,e,i,r){const l={},u=new WeakMap;function p(c){const d=c.target;d.index!==null&&e.remove(d.index);for(const M in d.attributes)e.remove(d.attributes[M]);d.removeEventListener("dispose",p),delete l[d.id];const g=u.get(d);g&&(e.remove(g),u.delete(d)),r.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,i.memory.geometries--}function m(c,d){return l[d.id]===!0||(d.addEventListener("dispose",p),l[d.id]=!0,i.memory.geometries++),d}function v(c){const d=c.attributes;for(const g in d)e.update(d[g],o.ARRAY_BUFFER)}function _(c){const d=[],g=c.index,M=c.attributes.position;let T=0;if(g!==null){const I=g.array;T=g.version;for(let O=0,A=I.length;O<A;O+=3){const U=I[O+0],N=I[O+1],B=I[O+2];d.push(U,N,N,B,B,U)}}else if(M!==void 0){const I=M.array;T=M.version;for(let O=0,A=I.length/3-1;O<A;O+=3){const U=O+0,N=O+1,B=O+2;d.push(U,N,N,B,B,U)}}else return;const y=new(xv(d)?bv:Av)(d,1);y.version=T;const S=u.get(c);S&&e.remove(S),u.set(c,y)}function x(c){const d=u.get(c);if(d){const g=c.index;g!==null&&d.version<g.version&&_(c)}else _(c);return u.get(c)}return{get:m,update:v,getWireframeAttribute:x}}function YT(o,e,i){let r;function l(d){r=d}let u,p;function m(d){u=d.type,p=d.bytesPerElement}function v(d,g){o.drawElements(r,g,u,d*p),i.update(g,r,1)}function _(d,g,M){M!==0&&(o.drawElementsInstanced(r,g,u,d*p,M),i.update(g,r,M))}function x(d,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,u,d,0,M);let y=0;for(let S=0;S<M;S++)y+=g[S];i.update(y,r,1)}function c(d,g,M,T){if(M===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let S=0;S<d.length;S++)_(d[S]/p,g[S],T[S]);else{y.multiDrawElementsInstancedWEBGL(r,g,0,u,d,0,T,0,M);let S=0;for(let I=0;I<M;I++)S+=g[I]*T[I];i.update(S,r,1)}}this.setMode=l,this.setIndex=m,this.render=v,this.renderInstances=_,this.renderMultiDraw=x,this.renderMultiDrawInstances=c}function ZT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,p,m){switch(i.calls++,p){case o.TRIANGLES:i.triangles+=m*(u/3);break;case o.LINES:i.lines+=m*(u/2);break;case o.LINE_STRIP:i.lines+=m*(u-1);break;case o.LINE_LOOP:i.lines+=m*u;break;case o.POINTS:i.points+=m*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",p);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function KT(o,e,i){const r=new WeakMap,l=new tn;function u(p,m,v){const _=p.morphTargetInfluences,x=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,c=x!==void 0?x.length:0;let d=r.get(m);if(d===void 0||d.count!==c){let D=function(){G.dispose(),r.delete(m),m.removeEventListener("dispose",D)};var g=D;d!==void 0&&d.texture.dispose();const M=m.morphAttributes.position!==void 0,T=m.morphAttributes.normal!==void 0,y=m.morphAttributes.color!==void 0,S=m.morphAttributes.position||[],I=m.morphAttributes.normal||[],O=m.morphAttributes.color||[];let A=0;M===!0&&(A=1),T===!0&&(A=2),y===!0&&(A=3);let U=m.attributes.position.count*A,N=1;U>e.maxTextureSize&&(N=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const B=new Float32Array(U*N*4*c),G=new yv(B,U,N,c);G.type=na,G.needsUpdate=!0;const C=A*4;for(let z=0;z<c;z++){const se=S[z],oe=I[z],ue=O[z],de=U*N*4*z;for(let H=0;H<se.count;H++){const K=H*C;M===!0&&(l.fromBufferAttribute(se,H),B[de+K+0]=l.x,B[de+K+1]=l.y,B[de+K+2]=l.z,B[de+K+3]=0),T===!0&&(l.fromBufferAttribute(oe,H),B[de+K+4]=l.x,B[de+K+5]=l.y,B[de+K+6]=l.z,B[de+K+7]=0),y===!0&&(l.fromBufferAttribute(ue,H),B[de+K+8]=l.x,B[de+K+9]=l.y,B[de+K+10]=l.z,B[de+K+11]=ue.itemSize===4?l.w:1)}}d={count:c,texture:G,size:new Ct(U,N)},r.set(m,d),m.addEventListener("dispose",D)}if(p.isInstancedMesh===!0&&p.morphTexture!==null)v.getUniforms().setValue(o,"morphTexture",p.morphTexture,i);else{let M=0;for(let y=0;y<_.length;y++)M+=_[y];const T=m.morphTargetsRelative?1:1-M;v.getUniforms().setValue(o,"morphTargetBaseInfluence",T),v.getUniforms().setValue(o,"morphTargetInfluences",_)}v.getUniforms().setValue(o,"morphTargetsTexture",d.texture,i),v.getUniforms().setValue(o,"morphTargetsTextureSize",d.size)}return{update:u}}function jT(o,e,i,r){let l=new WeakMap;function u(v){const _=r.render.frame,x=v.geometry,c=e.get(v,x);if(l.get(c)!==_&&(e.update(c),l.set(c,_)),v.isInstancedMesh&&(v.hasEventListener("dispose",m)===!1&&v.addEventListener("dispose",m),l.get(v)!==_&&(i.update(v.instanceMatrix,o.ARRAY_BUFFER),v.instanceColor!==null&&i.update(v.instanceColor,o.ARRAY_BUFFER),l.set(v,_))),v.isSkinnedMesh){const d=v.skeleton;l.get(d)!==_&&(d.update(),l.set(d,_))}return c}function p(){l=new WeakMap}function m(v){const _=v.target;_.removeEventListener("dispose",m),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:u,dispose:p}}const Ov=new On,Wg=new Uv(1,1),Pv=new yv,Bv=new Ay,Iv=new Cv,qg=[],Yg=[],Zg=new Float32Array(16),Kg=new Float32Array(9),jg=new Float32Array(4);function ws(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=qg[l];if(u===void 0&&(u=new Float32Array(l),qg[l]=u),e!==0){r.toArray(u,0);for(let p=1,m=0;p!==e;++p)m+=i,o[p].toArray(u,m)}return u}function dn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function hn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Nu(o,e){let i=Yg[e];i===void 0&&(i=new Int32Array(e),Yg[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function QT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function JT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(dn(i,e))return;o.uniform2fv(this.addr,e),hn(i,e)}}function $T(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(dn(i,e))return;o.uniform3fv(this.addr,e),hn(i,e)}}function eA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(dn(i,e))return;o.uniform4fv(this.addr,e),hn(i,e)}}function tA(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(dn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),hn(i,e)}else{if(dn(i,r))return;jg.set(r),o.uniformMatrix2fv(this.addr,!1,jg),hn(i,r)}}function nA(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(dn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),hn(i,e)}else{if(dn(i,r))return;Kg.set(r),o.uniformMatrix3fv(this.addr,!1,Kg),hn(i,r)}}function iA(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(dn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),hn(i,e)}else{if(dn(i,r))return;Zg.set(r),o.uniformMatrix4fv(this.addr,!1,Zg),hn(i,r)}}function aA(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function rA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(dn(i,e))return;o.uniform2iv(this.addr,e),hn(i,e)}}function sA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(dn(i,e))return;o.uniform3iv(this.addr,e),hn(i,e)}}function oA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(dn(i,e))return;o.uniform4iv(this.addr,e),hn(i,e)}}function lA(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function uA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(dn(i,e))return;o.uniform2uiv(this.addr,e),hn(i,e)}}function cA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(dn(i,e))return;o.uniform3uiv(this.addr,e),hn(i,e)}}function fA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(dn(i,e))return;o.uniform4uiv(this.addr,e),hn(i,e)}}function dA(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Wg.compareFunction=Sv,u=Wg):u=Ov,i.setTexture2D(e||u,l)}function hA(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Bv,l)}function pA(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Iv,l)}function mA(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Pv,l)}function _A(o){switch(o){case 5126:return QT;case 35664:return JT;case 35665:return $T;case 35666:return eA;case 35674:return tA;case 35675:return nA;case 35676:return iA;case 5124:case 35670:return aA;case 35667:case 35671:return rA;case 35668:case 35672:return sA;case 35669:case 35673:return oA;case 5125:return lA;case 36294:return uA;case 36295:return cA;case 36296:return fA;case 35678:case 36198:case 36298:case 36306:case 35682:return dA;case 35679:case 36299:case 36307:return hA;case 35680:case 36300:case 36308:case 36293:return pA;case 36289:case 36303:case 36311:case 36292:return mA}}function gA(o,e){o.uniform1fv(this.addr,e)}function vA(o,e){const i=ws(e,this.size,2);o.uniform2fv(this.addr,i)}function SA(o,e){const i=ws(e,this.size,3);o.uniform3fv(this.addr,i)}function xA(o,e){const i=ws(e,this.size,4);o.uniform4fv(this.addr,i)}function yA(o,e){const i=ws(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function MA(o,e){const i=ws(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function EA(o,e){const i=ws(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function TA(o,e){o.uniform1iv(this.addr,e)}function AA(o,e){o.uniform2iv(this.addr,e)}function bA(o,e){o.uniform3iv(this.addr,e)}function RA(o,e){o.uniform4iv(this.addr,e)}function wA(o,e){o.uniform1uiv(this.addr,e)}function CA(o,e){o.uniform2uiv(this.addr,e)}function DA(o,e){o.uniform3uiv(this.addr,e)}function UA(o,e){o.uniform4uiv(this.addr,e)}function LA(o,e,i){const r=this.cache,l=e.length,u=Nu(i,l);dn(r,u)||(o.uniform1iv(this.addr,u),hn(r,u));for(let p=0;p!==l;++p)i.setTexture2D(e[p]||Ov,u[p])}function NA(o,e,i){const r=this.cache,l=e.length,u=Nu(i,l);dn(r,u)||(o.uniform1iv(this.addr,u),hn(r,u));for(let p=0;p!==l;++p)i.setTexture3D(e[p]||Bv,u[p])}function OA(o,e,i){const r=this.cache,l=e.length,u=Nu(i,l);dn(r,u)||(o.uniform1iv(this.addr,u),hn(r,u));for(let p=0;p!==l;++p)i.setTextureCube(e[p]||Iv,u[p])}function PA(o,e,i){const r=this.cache,l=e.length,u=Nu(i,l);dn(r,u)||(o.uniform1iv(this.addr,u),hn(r,u));for(let p=0;p!==l;++p)i.setTexture2DArray(e[p]||Pv,u[p])}function BA(o){switch(o){case 5126:return gA;case 35664:return vA;case 35665:return SA;case 35666:return xA;case 35674:return yA;case 35675:return MA;case 35676:return EA;case 5124:case 35670:return TA;case 35667:case 35671:return AA;case 35668:case 35672:return bA;case 35669:case 35673:return RA;case 5125:return wA;case 36294:return CA;case 36295:return DA;case 36296:return UA;case 35678:case 36198:case 36298:case 36306:case 35682:return LA;case 35679:case 36299:case 36307:return NA;case 35680:case 36300:case 36308:case 36293:return OA;case 36289:case 36303:case 36311:case 36292:return PA}}class IA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=_A(i.type)}}class zA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=BA(i.type)}}class FA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,p=l.length;u!==p;++u){const m=l[u];m.setValue(e,i[m.id],r)}}}const Sd=/(\w+)(\])?(\[|\.)?/g;function Qg(o,e){o.seq.push(e),o.map[e.id]=e}function HA(o,e,i){const r=o.name,l=r.length;for(Sd.lastIndex=0;;){const u=Sd.exec(r),p=Sd.lastIndex;let m=u[1];const v=u[2]==="]",_=u[3];if(v&&(m=m|0),_===void 0||_==="["&&p+2===l){Qg(i,_===void 0?new IA(m,o,e):new zA(m,o,e));break}else{let c=i.map[m];c===void 0&&(c=new FA(m),Qg(i,c)),i=c}}}class bu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),p=e.getUniformLocation(i,u.name);HA(u,p,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,p=i.length;u!==p;++u){const m=i[u],v=r[m.id];v.needsUpdate!==!1&&m.setValue(e,v.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const p=e[l];p.id in i&&r.push(p)}return r}}function Jg(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const GA=37297;let VA=0;function kA(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let p=l;p<u;p++){const m=p+1;r.push(`${m===e?">":" "} ${m}: ${i[p]}`)}return r.join(`
`)}const $g=new ot;function XA(o){Et._getMatrix($g,Et.workingColorSpace,o);const e=`mat3( ${$g.elements.map(i=>i.toFixed(4))} )`;switch(Et.getTransfer(o)){case wu:return[e,"LinearTransferOETF"];case Ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function ev(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),u=(o.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const p=/ERROR: 0:(\d+)/.exec(u);if(p){const m=parseInt(p[1]);return i.toUpperCase()+`

`+u+`

`+kA(o.getShaderSource(e),m)}else return u}function WA(o,e){const i=XA(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function qA(o,e){let i;switch(e){case Jx:i="Linear";break;case $x:i="Reinhard";break;case ey:i="Cineon";break;case ty:i="ACESFilmic";break;case iy:i="AgX";break;case ay:i="Neutral";break;case ny:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const xu=new re;function YA(){Et.getLuminanceCoefficients(xu);const o=xu.x.toFixed(4),e=xu.y.toFixed(4),i=xu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ZA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Uo).join(`
`)}function KA(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function jA(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),p=u.name;let m=1;u.type===o.FLOAT_MAT2&&(m=2),u.type===o.FLOAT_MAT3&&(m=3),u.type===o.FLOAT_MAT4&&(m=4),i[p]={type:u.type,location:o.getAttribLocation(e,p),locationSize:m}}return i}function Uo(o){return o!==""}function tv(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nv(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QA=/^[ \t]*#include +<([\w\d./]+)>/gm;function oh(o){return o.replace(QA,$A)}const JA=new Map;function $A(o,e){let i=ct[e];if(i===void 0){const r=JA.get(e);if(r!==void 0)i=ct[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return oh(i)}const eb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function iv(o){return o.replace(eb,tb)}function tb(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function av(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function nb(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===lv?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Ux?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ea&&(e="SHADOWMAP_TYPE_VSM"),e}function ib(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Es:case Ts:e="ENVMAP_TYPE_CUBE";break;case Uu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ab(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Ts:e="ENVMAP_MODE_REFRACTION";break}return e}function rb(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case uv:e="ENVMAP_BLENDING_MULTIPLY";break;case jx:e="ENVMAP_BLENDING_MIX";break;case Qx:e="ENVMAP_BLENDING_ADD";break}return e}function sb(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function ob(o,e,i,r){const l=o.getContext(),u=i.defines;let p=i.vertexShader,m=i.fragmentShader;const v=nb(i),_=ib(i),x=ab(i),c=rb(i),d=sb(i),g=ZA(i),M=KA(u),T=l.createProgram();let y,S,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(Uo).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(Uo).join(`
`),S.length>0&&(S+=`
`)):(y=[av(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+v:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Uo).join(`
`),S=[av(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.envMap?"#define "+x:"",i.envMap?"#define "+c:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+v:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ga?"#define TONE_MAPPING":"",i.toneMapping!==Ga?ct.tonemapping_pars_fragment:"",i.toneMapping!==Ga?qA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,WA("linearToOutputTexel",i.outputColorSpace),YA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Uo).join(`
`)),p=oh(p),p=tv(p,i),p=nv(p,i),m=oh(m),m=tv(m,i),m=nv(m,i),p=iv(p),m=iv(m),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,y=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",i.glslVersion===Sg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Sg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const O=I+y+p,A=I+S+m,U=Jg(l,l.VERTEX_SHADER,O),N=Jg(l,l.FRAGMENT_SHADER,A);l.attachShader(T,U),l.attachShader(T,N),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function B(z){if(o.debug.checkShaderErrors){const se=l.getProgramInfoLog(T)||"",oe=l.getShaderInfoLog(U)||"",ue=l.getShaderInfoLog(N)||"",de=se.trim(),H=oe.trim(),K=ue.trim();let Y=!0,Se=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(Y=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,T,U,N);else{const L=ev(l,U,"vertex"),J=ev(l,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+de+`
`+L+`
`+J)}else de!==""?console.warn("THREE.WebGLProgram: Program Info Log:",de):(H===""||K==="")&&(Se=!1);Se&&(z.diagnostics={runnable:Y,programLog:de,vertexShader:{log:H,prefix:y},fragmentShader:{log:K,prefix:S}})}l.deleteShader(U),l.deleteShader(N),G=new bu(l,T),C=jA(l,T)}let G;this.getUniforms=function(){return G===void 0&&B(this),G};let C;this.getAttributes=function(){return C===void 0&&B(this),C};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(T,GA)),D},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=VA++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=U,this.fragmentShader=N,this}let lb=0;class ub{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),p=this._getShaderCacheForMaterial(e);return p.has(l)===!1&&(p.add(l),l.usedTimes++),p.has(u)===!1&&(p.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new cb(e),i.set(e,r)),r}}class cb{constructor(e){this.id=lb++,this.code=e,this.usedTimes=0}}function fb(o,e,i,r,l,u,p){const m=new Mv,v=new ub,_=new Set,x=[],c=l.logarithmicDepthBuffer,d=l.vertexTextures;let g=l.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(C){return _.add(C),C===0?"uv":`uv${C}`}function y(C,D,z,se,oe){const ue=se.fog,de=oe.geometry,H=C.isMeshStandardMaterial?se.environment:null,K=(C.isMeshStandardMaterial?i:e).get(C.envMap||H),Y=K&&K.mapping===Uu?K.image.height:null,Se=M[C.type];C.precision!==null&&(g=l.getMaxPrecision(C.precision),g!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",g,"instead."));const L=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,J=L!==void 0?L.length:0;let ve=0;de.morphAttributes.position!==void 0&&(ve=1),de.morphAttributes.normal!==void 0&&(ve=2),de.morphAttributes.color!==void 0&&(ve=3);let xe,we,te,he;if(Se){const xt=wi[Se];xe=xt.vertexShader,we=xt.fragmentShader}else xe=C.vertexShader,we=C.fragmentShader,v.update(C),te=v.getVertexShaderID(C),he=v.getFragmentShaderID(C);const ye=o.getRenderTarget(),Oe=o.state.buffers.depth.getReversed(),qe=oe.isInstancedMesh===!0,nt=oe.isBatchedMesh===!0,zt=!!C.map,ht=!!C.matcap,V=!!K,At=!!C.aoMap,je=!!C.lightMap,St=!!C.bumpMap,ze=!!C.normalMap,Ft=!!C.displacementMap,Fe=!!C.emissiveMap,rt=!!C.metalnessMap,Xt=!!C.roughnessMap,Wt=C.anisotropy>0,P=C.clearcoat>0,b=C.dispersion>0,$=C.iridescence>0,ce=C.sheen>0,ge=C.transmission>0,le=Wt&&!!C.anisotropyMap,Pe=P&&!!C.clearcoatMap,be=P&&!!C.clearcoatNormalMap,ke=P&&!!C.clearcoatRoughnessMap,We=$&&!!C.iridescenceMap,Me=$&&!!C.iridescenceThicknessMap,Ue=ce&&!!C.sheenColorMap,Ze=ce&&!!C.sheenRoughnessMap,Ve=!!C.specularMap,Ce=!!C.specularColorMap,at=!!C.specularIntensityMap,X=ge&&!!C.transmissionMap,Ae=ge&&!!C.thicknessMap,Re=!!C.gradientMap,Be=!!C.alphaMap,Ee=C.alphaTest>0,_e=!!C.alphaHash,Ge=!!C.extensions;let it=Ga;C.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(it=o.toneMapping);const bt={shaderID:Se,shaderType:C.type,shaderName:C.name,vertexShader:xe,fragmentShader:we,defines:C.defines,customVertexShaderID:te,customFragmentShaderID:he,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:g,batching:nt,batchingColor:nt&&oe._colorsTexture!==null,instancing:qe,instancingColor:qe&&oe.instanceColor!==null,instancingMorph:qe&&oe.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ye===null?o.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:As,alphaToCoverage:!!C.alphaToCoverage,map:zt,matcap:ht,envMap:V,envMapMode:V&&K.mapping,envMapCubeUVHeight:Y,aoMap:At,lightMap:je,bumpMap:St,normalMap:ze,displacementMap:d&&Ft,emissiveMap:Fe,normalMapObjectSpace:ze&&C.normalMapType===uy,normalMapTangentSpace:ze&&C.normalMapType===ly,metalnessMap:rt,roughnessMap:Xt,anisotropy:Wt,anisotropyMap:le,clearcoat:P,clearcoatMap:Pe,clearcoatNormalMap:be,clearcoatRoughnessMap:ke,dispersion:b,iridescence:$,iridescenceMap:We,iridescenceThicknessMap:Me,sheen:ce,sheenColorMap:Ue,sheenRoughnessMap:Ze,specularMap:Ve,specularColorMap:Ce,specularIntensityMap:at,transmission:ge,transmissionMap:X,thicknessMap:Ae,gradientMap:Re,opaque:C.transparent===!1&&C.blending===Ss&&C.alphaToCoverage===!1,alphaMap:Be,alphaTest:Ee,alphaHash:_e,combine:C.combine,mapUv:zt&&T(C.map.channel),aoMapUv:At&&T(C.aoMap.channel),lightMapUv:je&&T(C.lightMap.channel),bumpMapUv:St&&T(C.bumpMap.channel),normalMapUv:ze&&T(C.normalMap.channel),displacementMapUv:Ft&&T(C.displacementMap.channel),emissiveMapUv:Fe&&T(C.emissiveMap.channel),metalnessMapUv:rt&&T(C.metalnessMap.channel),roughnessMapUv:Xt&&T(C.roughnessMap.channel),anisotropyMapUv:le&&T(C.anisotropyMap.channel),clearcoatMapUv:Pe&&T(C.clearcoatMap.channel),clearcoatNormalMapUv:be&&T(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&T(C.clearcoatRoughnessMap.channel),iridescenceMapUv:We&&T(C.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&T(C.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&T(C.sheenColorMap.channel),sheenRoughnessMapUv:Ze&&T(C.sheenRoughnessMap.channel),specularMapUv:Ve&&T(C.specularMap.channel),specularColorMapUv:Ce&&T(C.specularColorMap.channel),specularIntensityMapUv:at&&T(C.specularIntensityMap.channel),transmissionMapUv:X&&T(C.transmissionMap.channel),thicknessMapUv:Ae&&T(C.thicknessMap.channel),alphaMapUv:Be&&T(C.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(ze||Wt),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:oe.isPoints===!0&&!!de.attributes.uv&&(zt||Be),fog:!!ue,useFog:C.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:c,reversedDepthBuffer:Oe,skinning:oe.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ve,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:p.numPlanes,numClipIntersection:p.numIntersection,dithering:C.dithering,shadowMapEnabled:o.shadowMap.enabled&&z.length>0,shadowMapType:o.shadowMap.type,toneMapping:it,decodeVideoTexture:zt&&C.map.isVideoTexture===!0&&Et.getTransfer(C.map.colorSpace)===Ot,decodeVideoTextureEmissive:Fe&&C.emissiveMap.isVideoTexture===!0&&Et.getTransfer(C.emissiveMap.colorSpace)===Ot,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===ta,flipSided:C.side===Vn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Ge&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&C.extensions.multiDraw===!0||nt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return bt.vertexUv1s=_.has(1),bt.vertexUv2s=_.has(2),bt.vertexUv3s=_.has(3),_.clear(),bt}function S(C){const D=[];if(C.shaderID?D.push(C.shaderID):(D.push(C.customVertexShaderID),D.push(C.customFragmentShaderID)),C.defines!==void 0)for(const z in C.defines)D.push(z),D.push(C.defines[z]);return C.isRawShaderMaterial===!1&&(I(D,C),O(D,C),D.push(o.outputColorSpace)),D.push(C.customProgramCacheKey),D.join()}function I(C,D){C.push(D.precision),C.push(D.outputColorSpace),C.push(D.envMapMode),C.push(D.envMapCubeUVHeight),C.push(D.mapUv),C.push(D.alphaMapUv),C.push(D.lightMapUv),C.push(D.aoMapUv),C.push(D.bumpMapUv),C.push(D.normalMapUv),C.push(D.displacementMapUv),C.push(D.emissiveMapUv),C.push(D.metalnessMapUv),C.push(D.roughnessMapUv),C.push(D.anisotropyMapUv),C.push(D.clearcoatMapUv),C.push(D.clearcoatNormalMapUv),C.push(D.clearcoatRoughnessMapUv),C.push(D.iridescenceMapUv),C.push(D.iridescenceThicknessMapUv),C.push(D.sheenColorMapUv),C.push(D.sheenRoughnessMapUv),C.push(D.specularMapUv),C.push(D.specularColorMapUv),C.push(D.specularIntensityMapUv),C.push(D.transmissionMapUv),C.push(D.thicknessMapUv),C.push(D.combine),C.push(D.fogExp2),C.push(D.sizeAttenuation),C.push(D.morphTargetsCount),C.push(D.morphAttributeCount),C.push(D.numDirLights),C.push(D.numPointLights),C.push(D.numSpotLights),C.push(D.numSpotLightMaps),C.push(D.numHemiLights),C.push(D.numRectAreaLights),C.push(D.numDirLightShadows),C.push(D.numPointLightShadows),C.push(D.numSpotLightShadows),C.push(D.numSpotLightShadowsWithMaps),C.push(D.numLightProbes),C.push(D.shadowMapType),C.push(D.toneMapping),C.push(D.numClippingPlanes),C.push(D.numClipIntersection),C.push(D.depthPacking)}function O(C,D){m.disableAll(),D.supportsVertexTextures&&m.enable(0),D.instancing&&m.enable(1),D.instancingColor&&m.enable(2),D.instancingMorph&&m.enable(3),D.matcap&&m.enable(4),D.envMap&&m.enable(5),D.normalMapObjectSpace&&m.enable(6),D.normalMapTangentSpace&&m.enable(7),D.clearcoat&&m.enable(8),D.iridescence&&m.enable(9),D.alphaTest&&m.enable(10),D.vertexColors&&m.enable(11),D.vertexAlphas&&m.enable(12),D.vertexUv1s&&m.enable(13),D.vertexUv2s&&m.enable(14),D.vertexUv3s&&m.enable(15),D.vertexTangents&&m.enable(16),D.anisotropy&&m.enable(17),D.alphaHash&&m.enable(18),D.batching&&m.enable(19),D.dispersion&&m.enable(20),D.batchingColor&&m.enable(21),D.gradientMap&&m.enable(22),C.push(m.mask),m.disableAll(),D.fog&&m.enable(0),D.useFog&&m.enable(1),D.flatShading&&m.enable(2),D.logarithmicDepthBuffer&&m.enable(3),D.reversedDepthBuffer&&m.enable(4),D.skinning&&m.enable(5),D.morphTargets&&m.enable(6),D.morphNormals&&m.enable(7),D.morphColors&&m.enable(8),D.premultipliedAlpha&&m.enable(9),D.shadowMapEnabled&&m.enable(10),D.doubleSided&&m.enable(11),D.flipSided&&m.enable(12),D.useDepthPacking&&m.enable(13),D.dithering&&m.enable(14),D.transmission&&m.enable(15),D.sheen&&m.enable(16),D.opaque&&m.enable(17),D.pointsUvs&&m.enable(18),D.decodeVideoTexture&&m.enable(19),D.decodeVideoTextureEmissive&&m.enable(20),D.alphaToCoverage&&m.enable(21),C.push(m.mask)}function A(C){const D=M[C.type];let z;if(D){const se=wi[D];z=Fy.clone(se.uniforms)}else z=C.uniforms;return z}function U(C,D){let z;for(let se=0,oe=x.length;se<oe;se++){const ue=x[se];if(ue.cacheKey===D){z=ue,++z.usedTimes;break}}return z===void 0&&(z=new ob(o,D,C,u),x.push(z)),z}function N(C){if(--C.usedTimes===0){const D=x.indexOf(C);x[D]=x[x.length-1],x.pop(),C.destroy()}}function B(C){v.remove(C)}function G(){v.dispose()}return{getParameters:y,getProgramCacheKey:S,getUniforms:A,acquireProgram:U,releaseProgram:N,releaseShaderCache:B,programs:x,dispose:G}}function db(){let o=new WeakMap;function e(p){return o.has(p)}function i(p){let m=o.get(p);return m===void 0&&(m={},o.set(p,m)),m}function r(p){o.delete(p)}function l(p,m,v){o.get(p)[m]=v}function u(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function hb(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function rv(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function sv(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function p(c,d,g,M,T,y){let S=o[e];return S===void 0?(S={id:c.id,object:c,geometry:d,material:g,groupOrder:M,renderOrder:c.renderOrder,z:T,group:y},o[e]=S):(S.id=c.id,S.object=c,S.geometry=d,S.material=g,S.groupOrder=M,S.renderOrder=c.renderOrder,S.z=T,S.group=y),e++,S}function m(c,d,g,M,T,y){const S=p(c,d,g,M,T,y);g.transmission>0?r.push(S):g.transparent===!0?l.push(S):i.push(S)}function v(c,d,g,M,T,y){const S=p(c,d,g,M,T,y);g.transmission>0?r.unshift(S):g.transparent===!0?l.unshift(S):i.unshift(S)}function _(c,d){i.length>1&&i.sort(c||hb),r.length>1&&r.sort(d||rv),l.length>1&&l.sort(d||rv)}function x(){for(let c=e,d=o.length;c<d;c++){const g=o[c];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:m,unshift:v,finish:x,sort:_}}function pb(){let o=new WeakMap;function e(r,l){const u=o.get(r);let p;return u===void 0?(p=new sv,o.set(r,[p])):l>=u.length?(p=new sv,u.push(p)):p=u[l],p}function i(){o=new WeakMap}return{get:e,dispose:i}}function mb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new re,color:new Pt};break;case"SpotLight":i={position:new re,direction:new re,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new re,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new re,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":i={color:new Pt,position:new re,halfWidth:new re,halfHeight:new re};break}return o[e.id]=i,i}}}function _b(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let gb=0;function vb(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Sb(o){const e=new mb,i=_b(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let _=0;_<9;_++)r.probe.push(new re);const l=new re,u=new fn,p=new fn;function m(_){let x=0,c=0,d=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let g=0,M=0,T=0,y=0,S=0,I=0,O=0,A=0,U=0,N=0,B=0;_.sort(vb);for(let C=0,D=_.length;C<D;C++){const z=_[C],se=z.color,oe=z.intensity,ue=z.distance,de=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)x+=se.r*oe,c+=se.g*oe,d+=se.b*oe;else if(z.isLightProbe){for(let H=0;H<9;H++)r.probe[H].addScaledVector(z.sh.coefficients[H],oe);B++}else if(z.isDirectionalLight){const H=e.get(z);if(H.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const K=z.shadow,Y=i.get(z);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,r.directionalShadow[g]=Y,r.directionalShadowMap[g]=de,r.directionalShadowMatrix[g]=z.shadow.matrix,I++}r.directional[g]=H,g++}else if(z.isSpotLight){const H=e.get(z);H.position.setFromMatrixPosition(z.matrixWorld),H.color.copy(se).multiplyScalar(oe),H.distance=ue,H.coneCos=Math.cos(z.angle),H.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),H.decay=z.decay,r.spot[T]=H;const K=z.shadow;if(z.map&&(r.spotLightMap[U]=z.map,U++,K.updateMatrices(z),z.castShadow&&N++),r.spotLightMatrix[T]=K.matrix,z.castShadow){const Y=i.get(z);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,r.spotShadow[T]=Y,r.spotShadowMap[T]=de,A++}T++}else if(z.isRectAreaLight){const H=e.get(z);H.color.copy(se).multiplyScalar(oe),H.halfWidth.set(z.width*.5,0,0),H.halfHeight.set(0,z.height*.5,0),r.rectArea[y]=H,y++}else if(z.isPointLight){const H=e.get(z);if(H.color.copy(z.color).multiplyScalar(z.intensity),H.distance=z.distance,H.decay=z.decay,z.castShadow){const K=z.shadow,Y=i.get(z);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,Y.shadowCameraNear=K.camera.near,Y.shadowCameraFar=K.camera.far,r.pointShadow[M]=Y,r.pointShadowMap[M]=de,r.pointShadowMatrix[M]=z.shadow.matrix,O++}r.point[M]=H,M++}else if(z.isHemisphereLight){const H=e.get(z);H.skyColor.copy(z.color).multiplyScalar(oe),H.groundColor.copy(z.groundColor).multiplyScalar(oe),r.hemi[S]=H,S++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ne.LTC_FLOAT_1,r.rectAreaLTC2=Ne.LTC_FLOAT_2):(r.rectAreaLTC1=Ne.LTC_HALF_1,r.rectAreaLTC2=Ne.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=c,r.ambient[2]=d;const G=r.hash;(G.directionalLength!==g||G.pointLength!==M||G.spotLength!==T||G.rectAreaLength!==y||G.hemiLength!==S||G.numDirectionalShadows!==I||G.numPointShadows!==O||G.numSpotShadows!==A||G.numSpotMaps!==U||G.numLightProbes!==B)&&(r.directional.length=g,r.spot.length=T,r.rectArea.length=y,r.point.length=M,r.hemi.length=S,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=O,r.pointShadowMap.length=O,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=O,r.spotLightMatrix.length=A+U-N,r.spotLightMap.length=U,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=B,G.directionalLength=g,G.pointLength=M,G.spotLength=T,G.rectAreaLength=y,G.hemiLength=S,G.numDirectionalShadows=I,G.numPointShadows=O,G.numSpotShadows=A,G.numSpotMaps=U,G.numLightProbes=B,r.version=gb++)}function v(_,x){let c=0,d=0,g=0,M=0,T=0;const y=x.matrixWorldInverse;for(let S=0,I=_.length;S<I;S++){const O=_[S];if(O.isDirectionalLight){const A=r.directional[c];A.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),A.direction.sub(l),A.direction.transformDirection(y),c++}else if(O.isSpotLight){const A=r.spot[g];A.position.setFromMatrixPosition(O.matrixWorld),A.position.applyMatrix4(y),A.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),A.direction.sub(l),A.direction.transformDirection(y),g++}else if(O.isRectAreaLight){const A=r.rectArea[M];A.position.setFromMatrixPosition(O.matrixWorld),A.position.applyMatrix4(y),p.identity(),u.copy(O.matrixWorld),u.premultiply(y),p.extractRotation(u),A.halfWidth.set(O.width*.5,0,0),A.halfHeight.set(0,O.height*.5,0),A.halfWidth.applyMatrix4(p),A.halfHeight.applyMatrix4(p),M++}else if(O.isPointLight){const A=r.point[d];A.position.setFromMatrixPosition(O.matrixWorld),A.position.applyMatrix4(y),d++}else if(O.isHemisphereLight){const A=r.hemi[T];A.direction.setFromMatrixPosition(O.matrixWorld),A.direction.transformDirection(y),T++}}}return{setup:m,setupView:v,state:r}}function ov(o){const e=new Sb(o),i=[],r=[];function l(x){_.camera=x,i.length=0,r.length=0}function u(x){i.push(x)}function p(x){r.push(x)}function m(){e.setup(i)}function v(x){e.setupView(i,x)}const _={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:_,setupLights:m,setupLightsView:v,pushLight:u,pushShadow:p}}function xb(o){let e=new WeakMap;function i(l,u=0){const p=e.get(l);let m;return p===void 0?(m=new ov(o),e.set(l,[m])):u>=p.length?(m=new ov(o),p.push(m)):m=p[u],m}function r(){e=new WeakMap}return{get:i,dispose:r}}const yb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Eb(o,e,i){let r=new Dv;const l=new Ct,u=new Ct,p=new tn,m=new Ky({depthPacking:oy}),v=new jy,_={},x=i.maxTextureSize,c={[Va]:Vn,[Vn]:Va,[ta]:ta},d=new sa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:yb,fragmentShader:Mb}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const M=new yr;M.setAttribute("position",new Ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Li(M,d),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lv;let S=this.type;this.render=function(N,B,G){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;const C=o.getRenderTarget(),D=o.getActiveCubeFace(),z=o.getActiveMipmapLevel(),se=o.state;se.setBlending(Ha),se.buffers.depth.getReversed()?se.buffers.color.setClear(0,0,0,0):se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const oe=S!==ea&&this.type===ea,ue=S===ea&&this.type!==ea;for(let de=0,H=N.length;de<H;de++){const K=N[de],Y=K.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const Se=Y.getFrameExtents();if(l.multiply(Se),u.copy(Y.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(u.x=Math.floor(x/Se.x),l.x=u.x*Se.x,Y.mapSize.x=u.x),l.y>x&&(u.y=Math.floor(x/Se.y),l.y=u.y*Se.y,Y.mapSize.y=u.y)),Y.map===null||oe===!0||ue===!0){const J=this.type!==ea?{minFilter:xi,magFilter:xi}:{};Y.map!==null&&Y.map.dispose(),Y.map=new xr(l.x,l.y,J),Y.map.texture.name=K.name+".shadowMap",Y.camera.updateProjectionMatrix()}o.setRenderTarget(Y.map),o.clear();const L=Y.getViewportCount();for(let J=0;J<L;J++){const ve=Y.getViewport(J);p.set(u.x*ve.x,u.y*ve.y,u.x*ve.z,u.y*ve.w),se.viewport(p),Y.updateMatrices(K,J),r=Y.getFrustum(),A(B,G,Y.camera,K,this.type)}Y.isPointLightShadow!==!0&&this.type===ea&&I(Y,G),Y.needsUpdate=!1}S=this.type,y.needsUpdate=!1,o.setRenderTarget(C,D,z)};function I(N,B){const G=e.update(T);d.defines.VSM_SAMPLES!==N.blurSamples&&(d.defines.VSM_SAMPLES=N.blurSamples,g.defines.VSM_SAMPLES=N.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new xr(l.x,l.y)),d.uniforms.shadow_pass.value=N.map.texture,d.uniforms.resolution.value=N.mapSize,d.uniforms.radius.value=N.radius,o.setRenderTarget(N.mapPass),o.clear(),o.renderBufferDirect(B,null,G,d,T,null),g.uniforms.shadow_pass.value=N.mapPass.texture,g.uniforms.resolution.value=N.mapSize,g.uniforms.radius.value=N.radius,o.setRenderTarget(N.map),o.clear(),o.renderBufferDirect(B,null,G,g,T,null)}function O(N,B,G,C){let D=null;const z=G.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(z!==void 0)D=z;else if(D=G.isPointLight===!0?v:m,o.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const se=D.uuid,oe=B.uuid;let ue=_[se];ue===void 0&&(ue={},_[se]=ue);let de=ue[oe];de===void 0&&(de=D.clone(),ue[oe]=de,B.addEventListener("dispose",U)),D=de}if(D.visible=B.visible,D.wireframe=B.wireframe,C===ea?D.side=B.shadowSide!==null?B.shadowSide:B.side:D.side=B.shadowSide!==null?B.shadowSide:c[B.side],D.alphaMap=B.alphaMap,D.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,D.map=B.map,D.clipShadows=B.clipShadows,D.clippingPlanes=B.clippingPlanes,D.clipIntersection=B.clipIntersection,D.displacementMap=B.displacementMap,D.displacementScale=B.displacementScale,D.displacementBias=B.displacementBias,D.wireframeLinewidth=B.wireframeLinewidth,D.linewidth=B.linewidth,G.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const se=o.properties.get(D);se.light=G}return D}function A(N,B,G,C,D){if(N.visible===!1)return;if(N.layers.test(B.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&D===ea)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,N.matrixWorld);const oe=e.update(N),ue=N.material;if(Array.isArray(ue)){const de=oe.groups;for(let H=0,K=de.length;H<K;H++){const Y=de[H],Se=ue[Y.materialIndex];if(Se&&Se.visible){const L=O(N,Se,C,D);N.onBeforeShadow(o,N,B,G,oe,L,Y),o.renderBufferDirect(G,null,oe,L,N,Y),N.onAfterShadow(o,N,B,G,oe,L,Y)}}}else if(ue.visible){const de=O(N,ue,C,D);N.onBeforeShadow(o,N,B,G,oe,de,null),o.renderBufferDirect(G,null,oe,de,N,null),N.onAfterShadow(o,N,B,G,oe,de,null)}}const se=N.children;for(let oe=0,ue=se.length;oe<ue;oe++)A(se[oe],B,G,C,D)}function U(N){N.target.removeEventListener("dispose",U);for(const G in _){const C=_[G],D=N.target.uuid;D in C&&(C[D].dispose(),delete C[D])}}}const Tb={[Ed]:Td,[Ad]:wd,[bd]:Cd,[Ms]:Rd,[Td]:Ed,[wd]:Ad,[Cd]:bd,[Rd]:Ms};function Ab(o,e){function i(){let X=!1;const Ae=new tn;let Re=null;const Be=new tn(0,0,0,0);return{setMask:function(Ee){Re!==Ee&&!X&&(o.colorMask(Ee,Ee,Ee,Ee),Re=Ee)},setLocked:function(Ee){X=Ee},setClear:function(Ee,_e,Ge,it,bt){bt===!0&&(Ee*=it,_e*=it,Ge*=it),Ae.set(Ee,_e,Ge,it),Be.equals(Ae)===!1&&(o.clearColor(Ee,_e,Ge,it),Be.copy(Ae))},reset:function(){X=!1,Re=null,Be.set(-1,0,0,0)}}}function r(){let X=!1,Ae=!1,Re=null,Be=null,Ee=null;return{setReversed:function(_e){if(Ae!==_e){const Ge=e.get("EXT_clip_control");_e?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),Ae=_e;const it=Ee;Ee=null,this.setClear(it)}},getReversed:function(){return Ae},setTest:function(_e){_e?ye(o.DEPTH_TEST):Oe(o.DEPTH_TEST)},setMask:function(_e){Re!==_e&&!X&&(o.depthMask(_e),Re=_e)},setFunc:function(_e){if(Ae&&(_e=Tb[_e]),Be!==_e){switch(_e){case Ed:o.depthFunc(o.NEVER);break;case Td:o.depthFunc(o.ALWAYS);break;case Ad:o.depthFunc(o.LESS);break;case Ms:o.depthFunc(o.LEQUAL);break;case bd:o.depthFunc(o.EQUAL);break;case Rd:o.depthFunc(o.GEQUAL);break;case wd:o.depthFunc(o.GREATER);break;case Cd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Be=_e}},setLocked:function(_e){X=_e},setClear:function(_e){Ee!==_e&&(Ae&&(_e=1-_e),o.clearDepth(_e),Ee=_e)},reset:function(){X=!1,Re=null,Be=null,Ee=null,Ae=!1}}}function l(){let X=!1,Ae=null,Re=null,Be=null,Ee=null,_e=null,Ge=null,it=null,bt=null;return{setTest:function(xt){X||(xt?ye(o.STENCIL_TEST):Oe(o.STENCIL_TEST))},setMask:function(xt){Ae!==xt&&!X&&(o.stencilMask(xt),Ae=xt)},setFunc:function(xt,ui,on){(Re!==xt||Be!==ui||Ee!==on)&&(o.stencilFunc(xt,ui,on),Re=xt,Be=ui,Ee=on)},setOp:function(xt,ui,on){(_e!==xt||Ge!==ui||it!==on)&&(o.stencilOp(xt,ui,on),_e=xt,Ge=ui,it=on)},setLocked:function(xt){X=xt},setClear:function(xt){bt!==xt&&(o.clearStencil(xt),bt=xt)},reset:function(){X=!1,Ae=null,Re=null,Be=null,Ee=null,_e=null,Ge=null,it=null,bt=null}}}const u=new i,p=new r,m=new l,v=new WeakMap,_=new WeakMap;let x={},c={},d=new WeakMap,g=[],M=null,T=!1,y=null,S=null,I=null,O=null,A=null,U=null,N=null,B=new Pt(0,0,0),G=0,C=!1,D=null,z=null,se=null,oe=null,ue=null;const de=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,K=0;const Y=o.getParameter(o.VERSION);Y.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Y)[1]),H=K>=1):Y.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),H=K>=2);let Se=null,L={};const J=o.getParameter(o.SCISSOR_BOX),ve=o.getParameter(o.VIEWPORT),xe=new tn().fromArray(J),we=new tn().fromArray(ve);function te(X,Ae,Re,Be){const Ee=new Uint8Array(4),_e=o.createTexture();o.bindTexture(X,_e),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ge=0;Ge<Re;Ge++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Ae,0,o.RGBA,1,1,Be,0,o.RGBA,o.UNSIGNED_BYTE,Ee):o.texImage2D(Ae+Ge,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ee);return _e}const he={};he[o.TEXTURE_2D]=te(o.TEXTURE_2D,o.TEXTURE_2D,1),he[o.TEXTURE_CUBE_MAP]=te(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[o.TEXTURE_2D_ARRAY]=te(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),he[o.TEXTURE_3D]=te(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),p.setClear(1),m.setClear(0),ye(o.DEPTH_TEST),p.setFunc(Ms),St(!1),ze(hg),ye(o.CULL_FACE),At(Ha);function ye(X){x[X]!==!0&&(o.enable(X),x[X]=!0)}function Oe(X){x[X]!==!1&&(o.disable(X),x[X]=!1)}function qe(X,Ae){return c[X]!==Ae?(o.bindFramebuffer(X,Ae),c[X]=Ae,X===o.DRAW_FRAMEBUFFER&&(c[o.FRAMEBUFFER]=Ae),X===o.FRAMEBUFFER&&(c[o.DRAW_FRAMEBUFFER]=Ae),!0):!1}function nt(X,Ae){let Re=g,Be=!1;if(X){Re=d.get(Ae),Re===void 0&&(Re=[],d.set(Ae,Re));const Ee=X.textures;if(Re.length!==Ee.length||Re[0]!==o.COLOR_ATTACHMENT0){for(let _e=0,Ge=Ee.length;_e<Ge;_e++)Re[_e]=o.COLOR_ATTACHMENT0+_e;Re.length=Ee.length,Be=!0}}else Re[0]!==o.BACK&&(Re[0]=o.BACK,Be=!0);Be&&o.drawBuffers(Re)}function zt(X){return M!==X?(o.useProgram(X),M=X,!0):!1}const ht={[pr]:o.FUNC_ADD,[Nx]:o.FUNC_SUBTRACT,[Ox]:o.FUNC_REVERSE_SUBTRACT};ht[Px]=o.MIN,ht[Bx]=o.MAX;const V={[Ix]:o.ZERO,[zx]:o.ONE,[Fx]:o.SRC_COLOR,[yd]:o.SRC_ALPHA,[Wx]:o.SRC_ALPHA_SATURATE,[kx]:o.DST_COLOR,[Gx]:o.DST_ALPHA,[Hx]:o.ONE_MINUS_SRC_COLOR,[Md]:o.ONE_MINUS_SRC_ALPHA,[Xx]:o.ONE_MINUS_DST_COLOR,[Vx]:o.ONE_MINUS_DST_ALPHA,[qx]:o.CONSTANT_COLOR,[Yx]:o.ONE_MINUS_CONSTANT_COLOR,[Zx]:o.CONSTANT_ALPHA,[Kx]:o.ONE_MINUS_CONSTANT_ALPHA};function At(X,Ae,Re,Be,Ee,_e,Ge,it,bt,xt){if(X===Ha){T===!0&&(Oe(o.BLEND),T=!1);return}if(T===!1&&(ye(o.BLEND),T=!0),X!==Lx){if(X!==y||xt!==C){if((S!==pr||A!==pr)&&(o.blendEquation(o.FUNC_ADD),S=pr,A=pr),xt)switch(X){case Ss:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case pg:o.blendFunc(o.ONE,o.ONE);break;case mg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case _g:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Ss:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case pg:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case mg:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _g:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}I=null,O=null,U=null,N=null,B.set(0,0,0),G=0,y=X,C=xt}return}Ee=Ee||Ae,_e=_e||Re,Ge=Ge||Be,(Ae!==S||Ee!==A)&&(o.blendEquationSeparate(ht[Ae],ht[Ee]),S=Ae,A=Ee),(Re!==I||Be!==O||_e!==U||Ge!==N)&&(o.blendFuncSeparate(V[Re],V[Be],V[_e],V[Ge]),I=Re,O=Be,U=_e,N=Ge),(it.equals(B)===!1||bt!==G)&&(o.blendColor(it.r,it.g,it.b,bt),B.copy(it),G=bt),y=X,C=!1}function je(X,Ae){X.side===ta?Oe(o.CULL_FACE):ye(o.CULL_FACE);let Re=X.side===Vn;Ae&&(Re=!Re),St(Re),X.blending===Ss&&X.transparent===!1?At(Ha):At(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),p.setFunc(X.depthFunc),p.setTest(X.depthTest),p.setMask(X.depthWrite),u.setMask(X.colorWrite);const Be=X.stencilWrite;m.setTest(Be),Be&&(m.setMask(X.stencilWriteMask),m.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),m.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Fe(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ye(o.SAMPLE_ALPHA_TO_COVERAGE):Oe(o.SAMPLE_ALPHA_TO_COVERAGE)}function St(X){D!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),D=X)}function ze(X){X!==Cx?(ye(o.CULL_FACE),X!==z&&(X===hg?o.cullFace(o.BACK):X===Dx?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Oe(o.CULL_FACE),z=X}function Ft(X){X!==se&&(H&&o.lineWidth(X),se=X)}function Fe(X,Ae,Re){X?(ye(o.POLYGON_OFFSET_FILL),(oe!==Ae||ue!==Re)&&(o.polygonOffset(Ae,Re),oe=Ae,ue=Re)):Oe(o.POLYGON_OFFSET_FILL)}function rt(X){X?ye(o.SCISSOR_TEST):Oe(o.SCISSOR_TEST)}function Xt(X){X===void 0&&(X=o.TEXTURE0+de-1),Se!==X&&(o.activeTexture(X),Se=X)}function Wt(X,Ae,Re){Re===void 0&&(Se===null?Re=o.TEXTURE0+de-1:Re=Se);let Be=L[Re];Be===void 0&&(Be={type:void 0,texture:void 0},L[Re]=Be),(Be.type!==X||Be.texture!==Ae)&&(Se!==Re&&(o.activeTexture(Re),Se=Re),o.bindTexture(X,Ae||he[X]),Be.type=X,Be.texture=Ae)}function P(){const X=L[Se];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function b(){try{o.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function $(){try{o.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ce(){try{o.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ge(){try{o.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function le(){try{o.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Pe(){try{o.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function be(){try{o.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ke(){try{o.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function We(){try{o.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Me(){try{o.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ue(X){xe.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),xe.copy(X))}function Ze(X){we.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),we.copy(X))}function Ve(X,Ae){let Re=_.get(Ae);Re===void 0&&(Re=new WeakMap,_.set(Ae,Re));let Be=Re.get(X);Be===void 0&&(Be=o.getUniformBlockIndex(Ae,X.name),Re.set(X,Be))}function Ce(X,Ae){const Be=_.get(Ae).get(X);v.get(Ae)!==Be&&(o.uniformBlockBinding(Ae,Be,X.__bindingPointIndex),v.set(Ae,Be))}function at(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),p.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),x={},Se=null,L={},c={},d=new WeakMap,g=[],M=null,T=!1,y=null,S=null,I=null,O=null,A=null,U=null,N=null,B=new Pt(0,0,0),G=0,C=!1,D=null,z=null,se=null,oe=null,ue=null,xe.set(0,0,o.canvas.width,o.canvas.height),we.set(0,0,o.canvas.width,o.canvas.height),u.reset(),p.reset(),m.reset()}return{buffers:{color:u,depth:p,stencil:m},enable:ye,disable:Oe,bindFramebuffer:qe,drawBuffers:nt,useProgram:zt,setBlending:At,setMaterial:je,setFlipSided:St,setCullFace:ze,setLineWidth:Ft,setPolygonOffset:Fe,setScissorTest:rt,activeTexture:Xt,bindTexture:Wt,unbindTexture:P,compressedTexImage2D:b,compressedTexImage3D:$,texImage2D:We,texImage3D:Me,updateUBOMapping:Ve,uniformBlockBinding:Ce,texStorage2D:be,texStorage3D:ke,texSubImage2D:ce,texSubImage3D:ge,compressedTexSubImage2D:le,compressedTexSubImage3D:Pe,scissor:Ue,viewport:Ze,reset:at}}function bb(o,e,i,r,l,u,p){const m=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,v=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new Ct,x=new WeakMap;let c;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(P,b){return g?new OffscreenCanvas(P,b):Du("canvas")}function T(P,b,$){let ce=1;const ge=Wt(P);if((ge.width>$||ge.height>$)&&(ce=$/Math.max(ge.width,ge.height)),ce<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const le=Math.floor(ce*ge.width),Pe=Math.floor(ce*ge.height);c===void 0&&(c=M(le,Pe));const be=b?M(le,Pe):c;return be.width=le,be.height=Pe,be.getContext("2d").drawImage(P,0,0,le,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+le+"x"+Pe+")."),be}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),P;return P}function y(P){return P.generateMipmaps}function S(P){o.generateMipmap(P)}function I(P){return P.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?o.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function O(P,b,$,ce,ge=!1){if(P!==null){if(o[P]!==void 0)return o[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let le=b;if(b===o.RED&&($===o.FLOAT&&(le=o.R32F),$===o.HALF_FLOAT&&(le=o.R16F),$===o.UNSIGNED_BYTE&&(le=o.R8)),b===o.RED_INTEGER&&($===o.UNSIGNED_BYTE&&(le=o.R8UI),$===o.UNSIGNED_SHORT&&(le=o.R16UI),$===o.UNSIGNED_INT&&(le=o.R32UI),$===o.BYTE&&(le=o.R8I),$===o.SHORT&&(le=o.R16I),$===o.INT&&(le=o.R32I)),b===o.RG&&($===o.FLOAT&&(le=o.RG32F),$===o.HALF_FLOAT&&(le=o.RG16F),$===o.UNSIGNED_BYTE&&(le=o.RG8)),b===o.RG_INTEGER&&($===o.UNSIGNED_BYTE&&(le=o.RG8UI),$===o.UNSIGNED_SHORT&&(le=o.RG16UI),$===o.UNSIGNED_INT&&(le=o.RG32UI),$===o.BYTE&&(le=o.RG8I),$===o.SHORT&&(le=o.RG16I),$===o.INT&&(le=o.RG32I)),b===o.RGB_INTEGER&&($===o.UNSIGNED_BYTE&&(le=o.RGB8UI),$===o.UNSIGNED_SHORT&&(le=o.RGB16UI),$===o.UNSIGNED_INT&&(le=o.RGB32UI),$===o.BYTE&&(le=o.RGB8I),$===o.SHORT&&(le=o.RGB16I),$===o.INT&&(le=o.RGB32I)),b===o.RGBA_INTEGER&&($===o.UNSIGNED_BYTE&&(le=o.RGBA8UI),$===o.UNSIGNED_SHORT&&(le=o.RGBA16UI),$===o.UNSIGNED_INT&&(le=o.RGBA32UI),$===o.BYTE&&(le=o.RGBA8I),$===o.SHORT&&(le=o.RGBA16I),$===o.INT&&(le=o.RGBA32I)),b===o.RGB&&$===o.UNSIGNED_INT_5_9_9_9_REV&&(le=o.RGB9_E5),b===o.RGBA){const Pe=ge?wu:Et.getTransfer(ce);$===o.FLOAT&&(le=o.RGBA32F),$===o.HALF_FLOAT&&(le=o.RGBA16F),$===o.UNSIGNED_BYTE&&(le=Pe===Ot?o.SRGB8_ALPHA8:o.RGBA8),$===o.UNSIGNED_SHORT_4_4_4_4&&(le=o.RGBA4),$===o.UNSIGNED_SHORT_5_5_5_1&&(le=o.RGB5_A1)}return(le===o.R16F||le===o.R32F||le===o.RG16F||le===o.RG32F||le===o.RGBA16F||le===o.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function A(P,b){let $;return P?b===null||b===Sr||b===No?$=o.DEPTH24_STENCIL8:b===na?$=o.DEPTH32F_STENCIL8:b===Lo&&($=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Sr||b===No?$=o.DEPTH_COMPONENT24:b===na?$=o.DEPTH_COMPONENT32F:b===Lo&&($=o.DEPTH_COMPONENT16),$}function U(P,b){return y(P)===!0||P.isFramebufferTexture&&P.minFilter!==xi&&P.minFilter!==Di?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function N(P){const b=P.target;b.removeEventListener("dispose",N),G(b),b.isVideoTexture&&x.delete(b)}function B(P){const b=P.target;b.removeEventListener("dispose",B),D(b)}function G(P){const b=r.get(P);if(b.__webglInit===void 0)return;const $=P.source,ce=d.get($);if(ce){const ge=ce[b.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&C(P),Object.keys(ce).length===0&&d.delete($)}r.remove(P)}function C(P){const b=r.get(P);o.deleteTexture(b.__webglTexture);const $=P.source,ce=d.get($);delete ce[b.__cacheKey],p.memory.textures--}function D(P){const b=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(b.__webglFramebuffer[ce]))for(let ge=0;ge<b.__webglFramebuffer[ce].length;ge++)o.deleteFramebuffer(b.__webglFramebuffer[ce][ge]);else o.deleteFramebuffer(b.__webglFramebuffer[ce]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[ce])}else{if(Array.isArray(b.__webglFramebuffer))for(let ce=0;ce<b.__webglFramebuffer.length;ce++)o.deleteFramebuffer(b.__webglFramebuffer[ce]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ce=0;ce<b.__webglColorRenderbuffer.length;ce++)b.__webglColorRenderbuffer[ce]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[ce]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const $=P.textures;for(let ce=0,ge=$.length;ce<ge;ce++){const le=r.get($[ce]);le.__webglTexture&&(o.deleteTexture(le.__webglTexture),p.memory.textures--),r.remove($[ce])}r.remove(P)}let z=0;function se(){z=0}function oe(){const P=z;return P>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),z+=1,P}function ue(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function de(P,b){const $=r.get(P);if(P.isVideoTexture&&rt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&$.__version!==P.version){const ce=P.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he($,P,b);return}}else P.isExternalTexture&&($.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,$.__webglTexture,o.TEXTURE0+b)}function H(P,b){const $=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){he($,P,b);return}i.bindTexture(o.TEXTURE_2D_ARRAY,$.__webglTexture,o.TEXTURE0+b)}function K(P,b){const $=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){he($,P,b);return}i.bindTexture(o.TEXTURE_3D,$.__webglTexture,o.TEXTURE0+b)}function Y(P,b){const $=r.get(P);if(P.version>0&&$.__version!==P.version){ye($,P,b);return}i.bindTexture(o.TEXTURE_CUBE_MAP,$.__webglTexture,o.TEXTURE0+b)}const Se={[Ld]:o.REPEAT,[_r]:o.CLAMP_TO_EDGE,[Nd]:o.MIRRORED_REPEAT},L={[xi]:o.NEAREST,[ry]:o.NEAREST_MIPMAP_NEAREST,[$l]:o.NEAREST_MIPMAP_LINEAR,[Di]:o.LINEAR,[kf]:o.LINEAR_MIPMAP_NEAREST,[gr]:o.LINEAR_MIPMAP_LINEAR},J={[cy]:o.NEVER,[_y]:o.ALWAYS,[fy]:o.LESS,[Sv]:o.LEQUAL,[dy]:o.EQUAL,[my]:o.GEQUAL,[hy]:o.GREATER,[py]:o.NOTEQUAL};function ve(P,b){if(b.type===na&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Di||b.magFilter===kf||b.magFilter===$l||b.magFilter===gr||b.minFilter===Di||b.minFilter===kf||b.minFilter===$l||b.minFilter===gr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(P,o.TEXTURE_WRAP_S,Se[b.wrapS]),o.texParameteri(P,o.TEXTURE_WRAP_T,Se[b.wrapT]),(P===o.TEXTURE_3D||P===o.TEXTURE_2D_ARRAY)&&o.texParameteri(P,o.TEXTURE_WRAP_R,Se[b.wrapR]),o.texParameteri(P,o.TEXTURE_MAG_FILTER,L[b.magFilter]),o.texParameteri(P,o.TEXTURE_MIN_FILTER,L[b.minFilter]),b.compareFunction&&(o.texParameteri(P,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(P,o.TEXTURE_COMPARE_FUNC,J[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===xi||b.minFilter!==$l&&b.minFilter!==gr||b.type===na&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");o.texParameterf(P,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function xe(P,b){let $=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",N));const ce=b.source;let ge=d.get(ce);ge===void 0&&(ge={},d.set(ce,ge));const le=ue(b);if(le!==P.__cacheKey){ge[le]===void 0&&(ge[le]={texture:o.createTexture(),usedTimes:0},p.memory.textures++,$=!0),ge[le].usedTimes++;const Pe=ge[P.__cacheKey];Pe!==void 0&&(ge[P.__cacheKey].usedTimes--,Pe.usedTimes===0&&C(b)),P.__cacheKey=le,P.__webglTexture=ge[le].texture}return $}function we(P,b,$){return Math.floor(Math.floor(P/$)/b)}function te(P,b,$,ce){const le=P.updateRanges;if(le.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,b.width,b.height,$,ce,b.data);else{le.sort((Me,Ue)=>Me.start-Ue.start);let Pe=0;for(let Me=1;Me<le.length;Me++){const Ue=le[Pe],Ze=le[Me],Ve=Ue.start+Ue.count,Ce=we(Ze.start,b.width,4),at=we(Ue.start,b.width,4);Ze.start<=Ve+1&&Ce===at&&we(Ze.start+Ze.count-1,b.width,4)===Ce?Ue.count=Math.max(Ue.count,Ze.start+Ze.count-Ue.start):(++Pe,le[Pe]=Ze)}le.length=Pe+1;const be=o.getParameter(o.UNPACK_ROW_LENGTH),ke=o.getParameter(o.UNPACK_SKIP_PIXELS),We=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,b.width);for(let Me=0,Ue=le.length;Me<Ue;Me++){const Ze=le[Me],Ve=Math.floor(Ze.start/4),Ce=Math.ceil(Ze.count/4),at=Ve%b.width,X=Math.floor(Ve/b.width),Ae=Ce,Re=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,at),o.pixelStorei(o.UNPACK_SKIP_ROWS,X),i.texSubImage2D(o.TEXTURE_2D,0,at,X,Ae,Re,$,ce,b.data)}P.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,be),o.pixelStorei(o.UNPACK_SKIP_PIXELS,ke),o.pixelStorei(o.UNPACK_SKIP_ROWS,We)}}function he(P,b,$){let ce=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ce=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ce=o.TEXTURE_3D);const ge=xe(P,b),le=b.source;i.bindTexture(ce,P.__webglTexture,o.TEXTURE0+$);const Pe=r.get(le);if(le.version!==Pe.__version||ge===!0){i.activeTexture(o.TEXTURE0+$);const be=Et.getPrimaries(Et.workingColorSpace),ke=b.colorSpace===za?null:Et.getPrimaries(b.colorSpace),We=b.colorSpace===za||be===ke?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let Me=T(b.image,!1,l.maxTextureSize);Me=Xt(b,Me);const Ue=u.convert(b.format,b.colorSpace),Ze=u.convert(b.type);let Ve=O(b.internalFormat,Ue,Ze,b.colorSpace,b.isVideoTexture);ve(ce,b);let Ce;const at=b.mipmaps,X=b.isVideoTexture!==!0,Ae=Pe.__version===void 0||ge===!0,Re=le.dataReady,Be=U(b,Me);if(b.isDepthTexture)Ve=A(b.format===Po,b.type),Ae&&(X?i.texStorage2D(o.TEXTURE_2D,1,Ve,Me.width,Me.height):i.texImage2D(o.TEXTURE_2D,0,Ve,Me.width,Me.height,0,Ue,Ze,null));else if(b.isDataTexture)if(at.length>0){X&&Ae&&i.texStorage2D(o.TEXTURE_2D,Be,Ve,at[0].width,at[0].height);for(let Ee=0,_e=at.length;Ee<_e;Ee++)Ce=at[Ee],X?Re&&i.texSubImage2D(o.TEXTURE_2D,Ee,0,0,Ce.width,Ce.height,Ue,Ze,Ce.data):i.texImage2D(o.TEXTURE_2D,Ee,Ve,Ce.width,Ce.height,0,Ue,Ze,Ce.data);b.generateMipmaps=!1}else X?(Ae&&i.texStorage2D(o.TEXTURE_2D,Be,Ve,Me.width,Me.height),Re&&te(b,Me,Ue,Ze)):i.texImage2D(o.TEXTURE_2D,0,Ve,Me.width,Me.height,0,Ue,Ze,Me.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){X&&Ae&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Be,Ve,at[0].width,at[0].height,Me.depth);for(let Ee=0,_e=at.length;Ee<_e;Ee++)if(Ce=at[Ee],b.format!==Si)if(Ue!==null)if(X){if(Re)if(b.layerUpdates.size>0){const Ge=Ig(Ce.width,Ce.height,b.format,b.type);for(const it of b.layerUpdates){const bt=Ce.data.subarray(it*Ge/Ce.data.BYTES_PER_ELEMENT,(it+1)*Ge/Ce.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ee,0,0,it,Ce.width,Ce.height,1,Ue,bt)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ee,0,0,0,Ce.width,Ce.height,Me.depth,Ue,Ce.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Ee,Ve,Ce.width,Ce.height,Me.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Re&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Ee,0,0,0,Ce.width,Ce.height,Me.depth,Ue,Ze,Ce.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Ee,Ve,Ce.width,Ce.height,Me.depth,0,Ue,Ze,Ce.data)}else{X&&Ae&&i.texStorage2D(o.TEXTURE_2D,Be,Ve,at[0].width,at[0].height);for(let Ee=0,_e=at.length;Ee<_e;Ee++)Ce=at[Ee],b.format!==Si?Ue!==null?X?Re&&i.compressedTexSubImage2D(o.TEXTURE_2D,Ee,0,0,Ce.width,Ce.height,Ue,Ce.data):i.compressedTexImage2D(o.TEXTURE_2D,Ee,Ve,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Re&&i.texSubImage2D(o.TEXTURE_2D,Ee,0,0,Ce.width,Ce.height,Ue,Ze,Ce.data):i.texImage2D(o.TEXTURE_2D,Ee,Ve,Ce.width,Ce.height,0,Ue,Ze,Ce.data)}else if(b.isDataArrayTexture)if(X){if(Ae&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Be,Ve,Me.width,Me.height,Me.depth),Re)if(b.layerUpdates.size>0){const Ee=Ig(Me.width,Me.height,b.format,b.type);for(const _e of b.layerUpdates){const Ge=Me.data.subarray(_e*Ee/Me.data.BYTES_PER_ELEMENT,(_e+1)*Ee/Me.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_e,Me.width,Me.height,1,Ue,Ze,Ge)}b.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Ue,Ze,Me.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Ve,Me.width,Me.height,Me.depth,0,Ue,Ze,Me.data);else if(b.isData3DTexture)X?(Ae&&i.texStorage3D(o.TEXTURE_3D,Be,Ve,Me.width,Me.height,Me.depth),Re&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Ue,Ze,Me.data)):i.texImage3D(o.TEXTURE_3D,0,Ve,Me.width,Me.height,Me.depth,0,Ue,Ze,Me.data);else if(b.isFramebufferTexture){if(Ae)if(X)i.texStorage2D(o.TEXTURE_2D,Be,Ve,Me.width,Me.height);else{let Ee=Me.width,_e=Me.height;for(let Ge=0;Ge<Be;Ge++)i.texImage2D(o.TEXTURE_2D,Ge,Ve,Ee,_e,0,Ue,Ze,null),Ee>>=1,_e>>=1}}else if(at.length>0){if(X&&Ae){const Ee=Wt(at[0]);i.texStorage2D(o.TEXTURE_2D,Be,Ve,Ee.width,Ee.height)}for(let Ee=0,_e=at.length;Ee<_e;Ee++)Ce=at[Ee],X?Re&&i.texSubImage2D(o.TEXTURE_2D,Ee,0,0,Ue,Ze,Ce):i.texImage2D(o.TEXTURE_2D,Ee,Ve,Ue,Ze,Ce);b.generateMipmaps=!1}else if(X){if(Ae){const Ee=Wt(Me);i.texStorage2D(o.TEXTURE_2D,Be,Ve,Ee.width,Ee.height)}Re&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ue,Ze,Me)}else i.texImage2D(o.TEXTURE_2D,0,Ve,Ue,Ze,Me);y(b)&&S(ce),Pe.__version=le.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function ye(P,b,$){if(b.image.length!==6)return;const ce=xe(P,b),ge=b.source;i.bindTexture(o.TEXTURE_CUBE_MAP,P.__webglTexture,o.TEXTURE0+$);const le=r.get(ge);if(ge.version!==le.__version||ce===!0){i.activeTexture(o.TEXTURE0+$);const Pe=Et.getPrimaries(Et.workingColorSpace),be=b.colorSpace===za?null:Et.getPrimaries(b.colorSpace),ke=b.colorSpace===za||Pe===be?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const We=b.isCompressedTexture||b.image[0].isCompressedTexture,Me=b.image[0]&&b.image[0].isDataTexture,Ue=[];for(let _e=0;_e<6;_e++)!We&&!Me?Ue[_e]=T(b.image[_e],!0,l.maxCubemapSize):Ue[_e]=Me?b.image[_e].image:b.image[_e],Ue[_e]=Xt(b,Ue[_e]);const Ze=Ue[0],Ve=u.convert(b.format,b.colorSpace),Ce=u.convert(b.type),at=O(b.internalFormat,Ve,Ce,b.colorSpace),X=b.isVideoTexture!==!0,Ae=le.__version===void 0||ce===!0,Re=ge.dataReady;let Be=U(b,Ze);ve(o.TEXTURE_CUBE_MAP,b);let Ee;if(We){X&&Ae&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Be,at,Ze.width,Ze.height);for(let _e=0;_e<6;_e++){Ee=Ue[_e].mipmaps;for(let Ge=0;Ge<Ee.length;Ge++){const it=Ee[Ge];b.format!==Si?Ve!==null?X?Re&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ge,0,0,it.width,it.height,Ve,it.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ge,at,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Re&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ge,0,0,it.width,it.height,Ve,Ce,it.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ge,at,it.width,it.height,0,Ve,Ce,it.data)}}}else{if(Ee=b.mipmaps,X&&Ae){Ee.length>0&&Be++;const _e=Wt(Ue[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Be,at,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(Me){X?Re&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ue[_e].width,Ue[_e].height,Ve,Ce,Ue[_e].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,at,Ue[_e].width,Ue[_e].height,0,Ve,Ce,Ue[_e].data);for(let Ge=0;Ge<Ee.length;Ge++){const bt=Ee[Ge].image[_e].image;X?Re&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ge+1,0,0,bt.width,bt.height,Ve,Ce,bt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ge+1,at,bt.width,bt.height,0,Ve,Ce,bt.data)}}else{X?Re&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ve,Ce,Ue[_e]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,at,Ve,Ce,Ue[_e]);for(let Ge=0;Ge<Ee.length;Ge++){const it=Ee[Ge];X?Re&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ge+1,0,0,Ve,Ce,it.image[_e]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ge+1,at,Ve,Ce,it.image[_e])}}}y(b)&&S(o.TEXTURE_CUBE_MAP),le.__version=ge.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Oe(P,b,$,ce,ge,le){const Pe=u.convert($.format,$.colorSpace),be=u.convert($.type),ke=O($.internalFormat,Pe,be,$.colorSpace),We=r.get(b),Me=r.get($);if(Me.__renderTarget=b,!We.__hasExternalTextures){const Ue=Math.max(1,b.width>>le),Ze=Math.max(1,b.height>>le);ge===o.TEXTURE_3D||ge===o.TEXTURE_2D_ARRAY?i.texImage3D(ge,le,ke,Ue,Ze,b.depth,0,Pe,be,null):i.texImage2D(ge,le,ke,Ue,Ze,0,Pe,be,null)}i.bindFramebuffer(o.FRAMEBUFFER,P),Fe(b)?m.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ce,ge,Me.__webglTexture,0,Ft(b)):(ge===o.TEXTURE_2D||ge>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ce,ge,Me.__webglTexture,le),i.bindFramebuffer(o.FRAMEBUFFER,null)}function qe(P,b,$){if(o.bindRenderbuffer(o.RENDERBUFFER,P),b.depthBuffer){const ce=b.depthTexture,ge=ce&&ce.isDepthTexture?ce.type:null,le=A(b.stencilBuffer,ge),Pe=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,be=Ft(b);Fe(b)?m.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,be,le,b.width,b.height):$?o.renderbufferStorageMultisample(o.RENDERBUFFER,be,le,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,le,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Pe,o.RENDERBUFFER,P)}else{const ce=b.textures;for(let ge=0;ge<ce.length;ge++){const le=ce[ge],Pe=u.convert(le.format,le.colorSpace),be=u.convert(le.type),ke=O(le.internalFormat,Pe,be,le.colorSpace),We=Ft(b);$&&Fe(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,We,ke,b.width,b.height):Fe(b)?m.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,We,ke,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,ke,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function nt(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ce=r.get(b.depthTexture);ce.__renderTarget=b,(!ce.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),de(b.depthTexture,0);const ge=ce.__webglTexture,le=Ft(b);if(b.depthTexture.format===Oo)Fe(b)?m.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ge,0,le):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ge,0);else if(b.depthTexture.format===Po)Fe(b)?m.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ge,0,le):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function zt(P){const b=r.get(P),$=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){const ce=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ce){const ge=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ce.removeEventListener("dispose",ge)};ce.addEventListener("dispose",ge),b.__depthDisposeCallback=ge}b.__boundDepthTexture=ce}if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");const ce=P.texture.mipmaps;ce&&ce.length>0?nt(b.__webglFramebuffer[0],P):nt(b.__webglFramebuffer,P)}else if($){b.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[ce]),b.__webglDepthbuffer[ce]===void 0)b.__webglDepthbuffer[ce]=o.createRenderbuffer(),qe(b.__webglDepthbuffer[ce],P,!1);else{const ge=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,le=b.__webglDepthbuffer[ce];o.bindRenderbuffer(o.RENDERBUFFER,le),o.framebufferRenderbuffer(o.FRAMEBUFFER,ge,o.RENDERBUFFER,le)}}else{const ce=P.texture.mipmaps;if(ce&&ce.length>0?i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),qe(b.__webglDepthbuffer,P,!1);else{const ge=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,le=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,le),o.framebufferRenderbuffer(o.FRAMEBUFFER,ge,o.RENDERBUFFER,le)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function ht(P,b,$){const ce=r.get(P);b!==void 0&&Oe(ce.__webglFramebuffer,P,P.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),$!==void 0&&zt(P)}function V(P){const b=P.texture,$=r.get(P),ce=r.get(b);P.addEventListener("dispose",B);const ge=P.textures,le=P.isWebGLCubeRenderTarget===!0,Pe=ge.length>1;if(Pe||(ce.__webglTexture===void 0&&(ce.__webglTexture=o.createTexture()),ce.__version=b.version,p.memory.textures++),le){$.__webglFramebuffer=[];for(let be=0;be<6;be++)if(b.mipmaps&&b.mipmaps.length>0){$.__webglFramebuffer[be]=[];for(let ke=0;ke<b.mipmaps.length;ke++)$.__webglFramebuffer[be][ke]=o.createFramebuffer()}else $.__webglFramebuffer[be]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){$.__webglFramebuffer=[];for(let be=0;be<b.mipmaps.length;be++)$.__webglFramebuffer[be]=o.createFramebuffer()}else $.__webglFramebuffer=o.createFramebuffer();if(Pe)for(let be=0,ke=ge.length;be<ke;be++){const We=r.get(ge[be]);We.__webglTexture===void 0&&(We.__webglTexture=o.createTexture(),p.memory.textures++)}if(P.samples>0&&Fe(P)===!1){$.__webglMultisampledFramebuffer=o.createFramebuffer(),$.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let be=0;be<ge.length;be++){const ke=ge[be];$.__webglColorRenderbuffer[be]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,$.__webglColorRenderbuffer[be]);const We=u.convert(ke.format,ke.colorSpace),Me=u.convert(ke.type),Ue=O(ke.internalFormat,We,Me,ke.colorSpace,P.isXRRenderTarget===!0),Ze=Ft(P);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ze,Ue,P.width,P.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+be,o.RENDERBUFFER,$.__webglColorRenderbuffer[be])}o.bindRenderbuffer(o.RENDERBUFFER,null),P.depthBuffer&&($.__webglDepthRenderbuffer=o.createRenderbuffer(),qe($.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(le){i.bindTexture(o.TEXTURE_CUBE_MAP,ce.__webglTexture),ve(o.TEXTURE_CUBE_MAP,b);for(let be=0;be<6;be++)if(b.mipmaps&&b.mipmaps.length>0)for(let ke=0;ke<b.mipmaps.length;ke++)Oe($.__webglFramebuffer[be][ke],P,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+be,ke);else Oe($.__webglFramebuffer[be],P,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);y(b)&&S(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Pe){for(let be=0,ke=ge.length;be<ke;be++){const We=ge[be],Me=r.get(We);let Ue=o.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ue=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ue,Me.__webglTexture),ve(Ue,We),Oe($.__webglFramebuffer,P,We,o.COLOR_ATTACHMENT0+be,Ue,0),y(We)&&S(Ue)}i.unbindTexture()}else{let be=o.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(be=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(be,ce.__webglTexture),ve(be,b),b.mipmaps&&b.mipmaps.length>0)for(let ke=0;ke<b.mipmaps.length;ke++)Oe($.__webglFramebuffer[ke],P,b,o.COLOR_ATTACHMENT0,be,ke);else Oe($.__webglFramebuffer,P,b,o.COLOR_ATTACHMENT0,be,0);y(b)&&S(be),i.unbindTexture()}P.depthBuffer&&zt(P)}function At(P){const b=P.textures;for(let $=0,ce=b.length;$<ce;$++){const ge=b[$];if(y(ge)){const le=I(P),Pe=r.get(ge).__webglTexture;i.bindTexture(le,Pe),S(le),i.unbindTexture()}}}const je=[],St=[];function ze(P){if(P.samples>0){if(Fe(P)===!1){const b=P.textures,$=P.width,ce=P.height;let ge=o.COLOR_BUFFER_BIT;const le=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Pe=r.get(P),be=b.length>1;if(be)for(let We=0;We<b.length;We++)i.bindFramebuffer(o.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+We,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Pe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+We,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const ke=P.texture.mipmaps;ke&&ke.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let We=0;We<b.length;We++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ge|=o.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ge|=o.STENCIL_BUFFER_BIT)),be){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Pe.__webglColorRenderbuffer[We]);const Me=r.get(b[We]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Me,0)}o.blitFramebuffer(0,0,$,ce,0,0,$,ce,ge,o.NEAREST),v===!0&&(je.length=0,St.length=0,je.push(o.COLOR_ATTACHMENT0+We),P.depthBuffer&&P.resolveDepthBuffer===!1&&(je.push(le),St.push(le),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,St)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,je))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),be)for(let We=0;We<b.length;We++){i.bindFramebuffer(o.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+We,o.RENDERBUFFER,Pe.__webglColorRenderbuffer[We]);const Me=r.get(b[We]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Pe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+We,o.TEXTURE_2D,Me,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&v){const b=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function Ft(P){return Math.min(l.maxSamples,P.samples)}function Fe(P){const b=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function rt(P){const b=p.render.frame;x.get(P)!==b&&(x.set(P,b),P.update())}function Xt(P,b){const $=P.colorSpace,ce=P.format,ge=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||$!==As&&$!==za&&(Et.getTransfer($)===Ot?(ce!==Si||ge!==aa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),b}function Wt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(_.width=P.naturalWidth||P.width,_.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(_.width=P.displayWidth,_.height=P.displayHeight):(_.width=P.width,_.height=P.height),_}this.allocateTextureUnit=oe,this.resetTextureUnits=se,this.setTexture2D=de,this.setTexture2DArray=H,this.setTexture3D=K,this.setTextureCube=Y,this.rebindTextures=ht,this.setupRenderTarget=V,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=Fe}function Rb(o,e){function i(r,l=za){let u;const p=Et.getTransfer(l);if(r===aa)return o.UNSIGNED_BYTE;if(r===dh)return o.UNSIGNED_SHORT_4_4_4_4;if(r===hh)return o.UNSIGNED_SHORT_5_5_5_1;if(r===hv)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===fv)return o.BYTE;if(r===dv)return o.SHORT;if(r===Lo)return o.UNSIGNED_SHORT;if(r===fh)return o.INT;if(r===Sr)return o.UNSIGNED_INT;if(r===na)return o.FLOAT;if(r===Bo)return o.HALF_FLOAT;if(r===pv)return o.ALPHA;if(r===mv)return o.RGB;if(r===Si)return o.RGBA;if(r===Oo)return o.DEPTH_COMPONENT;if(r===Po)return o.DEPTH_STENCIL;if(r===_v)return o.RED;if(r===ph)return o.RED_INTEGER;if(r===gv)return o.RG;if(r===mh)return o.RG_INTEGER;if(r===_h)return o.RGBA_INTEGER;if(r===yu||r===Mu||r===Eu||r===Tu)if(p===Ot)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===yu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Mu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Eu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Tu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===yu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Mu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Eu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Tu)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Od||r===Pd||r===Bd||r===Id)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Od)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Pd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Bd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Id)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===zd||r===Fd||r===Hd)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===zd||r===Fd)return p===Ot?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Hd)return p===Ot?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Gd||r===Vd||r===kd||r===Xd||r===Wd||r===qd||r===Yd||r===Zd||r===Kd||r===jd||r===Qd||r===Jd||r===$d||r===eh)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Gd)return p===Ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Vd)return p===Ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===kd)return p===Ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Xd)return p===Ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Wd)return p===Ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===qd)return p===Ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Yd)return p===Ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Zd)return p===Ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Kd)return p===Ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===jd)return p===Ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Qd)return p===Ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Jd)return p===Ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===$d)return p===Ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===eh)return p===Ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Au||r===th||r===nh)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Au)return p===Ot?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===th)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===nh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===vv||r===ih||r===ah||r===rh)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Au)return u.COMPRESSED_RED_RGTC1_EXT;if(r===ih)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ah)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===rh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===No?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}class zv extends On{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const wb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cb=`
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

}`;class Db{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new zv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new sa({vertexShader:wb,fragmentShader:Cb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Li(new Go(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ub extends Rs{constructor(e,i){super();const r=this;let l=null,u=1,p=null,m="local-floor",v=1,_=null,x=null,c=null,d=null,g=null,M=null;const T=new Db,y={},S=i.getContextAttributes();let I=null,O=null;const A=[],U=[],N=new Ct;let B=null;const G=new gi;G.viewport=new tn;const C=new gi;C.viewport=new tn;const D=[G,C],z=new Qy;let se=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let he=A[te];return he===void 0&&(he=new dd,A[te]=he),he.getTargetRaySpace()},this.getControllerGrip=function(te){let he=A[te];return he===void 0&&(he=new dd,A[te]=he),he.getGripSpace()},this.getHand=function(te){let he=A[te];return he===void 0&&(he=new dd,A[te]=he),he.getHandSpace()};function ue(te){const he=U.indexOf(te.inputSource);if(he===-1)return;const ye=A[he];ye!==void 0&&(ye.update(te.inputSource,te.frame,_||p),ye.dispatchEvent({type:te.type,data:te.inputSource}))}function de(){l.removeEventListener("select",ue),l.removeEventListener("selectstart",ue),l.removeEventListener("selectend",ue),l.removeEventListener("squeeze",ue),l.removeEventListener("squeezestart",ue),l.removeEventListener("squeezeend",ue),l.removeEventListener("end",de),l.removeEventListener("inputsourceschange",H);for(let te=0;te<A.length;te++){const he=U[te];he!==null&&(U[te]=null,A[te].disconnect(he))}se=null,oe=null,T.reset();for(const te in y)delete y[te];e.setRenderTarget(I),g=null,d=null,c=null,l=null,O=null,we.stop(),r.isPresenting=!1,e.setPixelRatio(B),e.setSize(N.width,N.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){u=te,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){m=te,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return _||p},this.setReferenceSpace=function(te){_=te},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return c},this.getFrame=function(){return M},this.getSession=function(){return l},this.setSession=async function(te){if(l=te,l!==null){if(I=e.getRenderTarget(),l.addEventListener("select",ue),l.addEventListener("selectstart",ue),l.addEventListener("selectend",ue),l.addEventListener("squeeze",ue),l.addEventListener("squeezestart",ue),l.addEventListener("squeezeend",ue),l.addEventListener("end",de),l.addEventListener("inputsourceschange",H),S.xrCompatible!==!0&&await i.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(N),typeof XRWebGLBinding<"u"&&(c=new XRWebGLBinding(l,i)),c!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Oe=null,qe=null;S.depth&&(qe=S.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ye=S.stencil?Po:Oo,Oe=S.stencil?No:Sr);const nt={colorFormat:i.RGBA8,depthFormat:qe,scaleFactor:u};d=c.createProjectionLayer(nt),l.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),O=new xr(d.textureWidth,d.textureHeight,{format:Si,type:aa,depthTexture:new Uv(d.textureWidth,d.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ye={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:u};g=new XRWebGLLayer(l,i,ye),l.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),O=new xr(g.framebufferWidth,g.framebufferHeight,{format:Si,type:aa,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(v),_=null,p=await l.requestReferenceSpace(m),we.setContext(l),we.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function H(te){for(let he=0;he<te.removed.length;he++){const ye=te.removed[he],Oe=U.indexOf(ye);Oe>=0&&(U[Oe]=null,A[Oe].disconnect(ye))}for(let he=0;he<te.added.length;he++){const ye=te.added[he];let Oe=U.indexOf(ye);if(Oe===-1){for(let nt=0;nt<A.length;nt++)if(nt>=U.length){U.push(ye),Oe=nt;break}else if(U[nt]===null){U[nt]=ye,Oe=nt;break}if(Oe===-1)break}const qe=A[Oe];qe&&qe.connect(ye)}}const K=new re,Y=new re;function Se(te,he,ye){K.setFromMatrixPosition(he.matrixWorld),Y.setFromMatrixPosition(ye.matrixWorld);const Oe=K.distanceTo(Y),qe=he.projectionMatrix.elements,nt=ye.projectionMatrix.elements,zt=qe[14]/(qe[10]-1),ht=qe[14]/(qe[10]+1),V=(qe[9]+1)/qe[5],At=(qe[9]-1)/qe[5],je=(qe[8]-1)/qe[0],St=(nt[8]+1)/nt[0],ze=zt*je,Ft=zt*St,Fe=Oe/(-je+St),rt=Fe*-je;if(he.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(rt),te.translateZ(Fe),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),qe[10]===-1)te.projectionMatrix.copy(he.projectionMatrix),te.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const Xt=zt+Fe,Wt=ht+Fe,P=ze-rt,b=Ft+(Oe-rt),$=V*ht/Wt*Xt,ce=At*ht/Wt*Xt;te.projectionMatrix.makePerspective(P,b,$,ce,Xt,Wt),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function L(te,he){he===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(he.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(l===null)return;let he=te.near,ye=te.far;T.texture!==null&&(T.depthNear>0&&(he=T.depthNear),T.depthFar>0&&(ye=T.depthFar)),z.near=C.near=G.near=he,z.far=C.far=G.far=ye,(se!==z.near||oe!==z.far)&&(l.updateRenderState({depthNear:z.near,depthFar:z.far}),se=z.near,oe=z.far),z.layers.mask=te.layers.mask|6,G.layers.mask=z.layers.mask&3,C.layers.mask=z.layers.mask&5;const Oe=te.parent,qe=z.cameras;L(z,Oe);for(let nt=0;nt<qe.length;nt++)L(qe[nt],Oe);qe.length===2?Se(z,G,C):z.projectionMatrix.copy(G.projectionMatrix),J(te,z,Oe)};function J(te,he,ye){ye===null?te.matrix.copy(he.matrixWorld):(te.matrix.copy(ye.matrixWorld),te.matrix.invert(),te.matrix.multiply(he.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(he.projectionMatrix),te.projectionMatrixInverse.copy(he.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=sh*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&g===null))return v},this.setFoveation=function(te){v=te,d!==null&&(d.fixedFoveation=te),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=te)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(z)},this.getCameraTexture=function(te){return y[te]};let ve=null;function xe(te,he){if(x=he.getViewerPose(_||p),M=he,x!==null){const ye=x.views;g!==null&&(e.setRenderTargetFramebuffer(O,g.framebuffer),e.setRenderTarget(O));let Oe=!1;ye.length!==z.cameras.length&&(z.cameras.length=0,Oe=!0);for(let ht=0;ht<ye.length;ht++){const V=ye[ht];let At=null;if(g!==null)At=g.getViewport(V);else{const St=c.getViewSubImage(d,V);At=St.viewport,ht===0&&(e.setRenderTargetTextures(O,St.colorTexture,St.depthStencilTexture),e.setRenderTarget(O))}let je=D[ht];je===void 0&&(je=new gi,je.layers.enable(ht),je.viewport=new tn,D[ht]=je),je.matrix.fromArray(V.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(V.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(At.x,At.y,At.width,At.height),ht===0&&(z.matrix.copy(je.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Oe===!0&&z.cameras.push(je)}const qe=l.enabledFeatures;if(qe&&qe.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&c){const ht=c.getDepthInformation(ye[0]);ht&&ht.isValid&&ht.texture&&T.init(ht,l.renderState)}if(qe&&qe.includes("camera-access")&&(e.state.unbindTexture(),c))for(let ht=0;ht<ye.length;ht++){const V=ye[ht].camera;if(V){let At=y[V];At||(At=new zv,y[V]=At);const je=c.getCameraImage(V);At.sourceTexture=je}}}for(let ye=0;ye<A.length;ye++){const Oe=U[ye],qe=A[ye];Oe!==null&&qe!==void 0&&qe.update(Oe,he,_||p)}ve&&ve(te,he),he.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:he}),M=null}const we=new Nv;we.setAnimationLoop(xe),this.setAnimationLoop=function(te){ve=te},this.dispose=function(){}}}const fr=new ra,Lb=new fn;function Nb(o,e){function i(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function r(y,S){S.color.getRGB(y.fogColor.value,Rv(o)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function l(y,S,I,O,A){S.isMeshBasicMaterial||S.isMeshLambertMaterial?u(y,S):S.isMeshToonMaterial?(u(y,S),c(y,S)):S.isMeshPhongMaterial?(u(y,S),x(y,S)):S.isMeshStandardMaterial?(u(y,S),d(y,S),S.isMeshPhysicalMaterial&&g(y,S,A)):S.isMeshMatcapMaterial?(u(y,S),M(y,S)):S.isMeshDepthMaterial?u(y,S):S.isMeshDistanceMaterial?(u(y,S),T(y,S)):S.isMeshNormalMaterial?u(y,S):S.isLineBasicMaterial?(p(y,S),S.isLineDashedMaterial&&m(y,S)):S.isPointsMaterial?v(y,S,I,O):S.isSpriteMaterial?_(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function u(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,i(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===Vn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,i(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===Vn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,i(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,i(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const I=e.get(S),O=I.envMap,A=I.envMapRotation;O&&(y.envMap.value=O,fr.copy(A),fr.x*=-1,fr.y*=-1,fr.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),y.envMapRotation.value.setFromMatrix4(Lb.makeRotationFromEuler(fr)),y.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,y.aoMapTransform))}function p(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform))}function m(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function v(y,S,I,O){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*I,y.scale.value=O*.5,S.map&&(y.map.value=S.map,i(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function _(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function x(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function c(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function d(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function g(y,S,I){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Vn&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=I.texture,y.transmissionSamplerSize.value.set(I.width,I.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,S){S.matcap&&(y.matcap.value=S.matcap)}function T(y,S){const I=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(I.matrixWorld),y.nearDistance.value=I.shadow.camera.near,y.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function Ob(o,e,i,r){let l={},u={},p=[];const m=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function v(I,O){const A=O.program;r.uniformBlockBinding(I,A)}function _(I,O){let A=l[I.id];A===void 0&&(M(I),A=x(I),l[I.id]=A,I.addEventListener("dispose",y));const U=O.program;r.updateUBOMapping(I,U);const N=e.render.frame;u[I.id]!==N&&(d(I),u[I.id]=N)}function x(I){const O=c();I.__bindingPointIndex=O;const A=o.createBuffer(),U=I.__size,N=I.usage;return o.bindBuffer(o.UNIFORM_BUFFER,A),o.bufferData(o.UNIFORM_BUFFER,U,N),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,O,A),A}function c(){for(let I=0;I<m;I++)if(p.indexOf(I)===-1)return p.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(I){const O=l[I.id],A=I.uniforms,U=I.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let N=0,B=A.length;N<B;N++){const G=Array.isArray(A[N])?A[N]:[A[N]];for(let C=0,D=G.length;C<D;C++){const z=G[C];if(g(z,N,C,U)===!0){const se=z.__offset,oe=Array.isArray(z.value)?z.value:[z.value];let ue=0;for(let de=0;de<oe.length;de++){const H=oe[de],K=T(H);typeof H=="number"||typeof H=="boolean"?(z.__data[0]=H,o.bufferSubData(o.UNIFORM_BUFFER,se+ue,z.__data)):H.isMatrix3?(z.__data[0]=H.elements[0],z.__data[1]=H.elements[1],z.__data[2]=H.elements[2],z.__data[3]=0,z.__data[4]=H.elements[3],z.__data[5]=H.elements[4],z.__data[6]=H.elements[5],z.__data[7]=0,z.__data[8]=H.elements[6],z.__data[9]=H.elements[7],z.__data[10]=H.elements[8],z.__data[11]=0):(H.toArray(z.__data,ue),ue+=K.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,se,z.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function g(I,O,A,U){const N=I.value,B=O+"_"+A;if(U[B]===void 0)return typeof N=="number"||typeof N=="boolean"?U[B]=N:U[B]=N.clone(),!0;{const G=U[B];if(typeof N=="number"||typeof N=="boolean"){if(G!==N)return U[B]=N,!0}else if(G.equals(N)===!1)return G.copy(N),!0}return!1}function M(I){const O=I.uniforms;let A=0;const U=16;for(let B=0,G=O.length;B<G;B++){const C=Array.isArray(O[B])?O[B]:[O[B]];for(let D=0,z=C.length;D<z;D++){const se=C[D],oe=Array.isArray(se.value)?se.value:[se.value];for(let ue=0,de=oe.length;ue<de;ue++){const H=oe[ue],K=T(H),Y=A%U,Se=Y%K.boundary,L=Y+Se;A+=Se,L!==0&&U-L<K.storage&&(A+=U-L),se.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),se.__offset=A,A+=K.storage}}}const N=A%U;return N>0&&(A+=U-N),I.__size=A,I.__cache={},this}function T(I){const O={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(O.boundary=4,O.storage=4):I.isVector2?(O.boundary=8,O.storage=8):I.isVector3||I.isColor?(O.boundary=16,O.storage=12):I.isVector4?(O.boundary=16,O.storage=16):I.isMatrix3?(O.boundary=48,O.storage=48):I.isMatrix4?(O.boundary=64,O.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),O}function y(I){const O=I.target;O.removeEventListener("dispose",y);const A=p.indexOf(O.__bindingPointIndex);p.splice(A,1),o.deleteBuffer(l[O.id]),delete l[O.id],delete u[O.id]}function S(){for(const I in l)o.deleteBuffer(l[I]);p=[],l={},u={}}return{bind:v,update:_,dispose:S}}class Pb{constructor(e={}){const{canvas:i=vy(),context:r=null,depth:l=!0,stencil:u=!1,alpha:p=!1,antialias:m=!1,premultipliedAlpha:v=!0,preserveDrawingBuffer:_=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:c=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let g;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=r.getContextAttributes().alpha}else g=p;const M=new Uint32Array(4),T=new Int32Array(4);let y=null,S=null;const I=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ga,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let U=!1;this._outputColorSpace=li;let N=0,B=0,G=null,C=-1,D=null;const z=new tn,se=new tn;let oe=null;const ue=new Pt(0);let de=0,H=i.width,K=i.height,Y=1,Se=null,L=null;const J=new tn(0,0,H,K),ve=new tn(0,0,H,K);let xe=!1;const we=new Dv;let te=!1,he=!1;const ye=new fn,Oe=new re,qe=new tn,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let zt=!1;function ht(){return G===null?Y:1}let V=r;function At(w,W){return i.getContext(w,W)}try{const w={alpha:!0,depth:l,stencil:u,antialias:m,premultipliedAlpha:v,preserveDrawingBuffer:_,powerPreference:x,failIfMajorPerformanceCaveat:c};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${ch}`),i.addEventListener("webglcontextlost",Re,!1),i.addEventListener("webglcontextrestored",Be,!1),i.addEventListener("webglcontextcreationerror",Ee,!1),V===null){const W="webgl2";if(V=At(W,w),V===null)throw At(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let je,St,ze,Ft,Fe,rt,Xt,Wt,P,b,$,ce,ge,le,Pe,be,ke,We,Me,Ue,Ze,Ve,Ce,at;function X(){je=new WT(V),je.init(),Ve=new Rb(V,je),St=new zT(V,je,e,Ve),ze=new Ab(V,je),St.reversedDepthBuffer&&d&&ze.buffers.depth.setReversed(!0),Ft=new ZT(V),Fe=new db,rt=new bb(V,je,ze,Fe,St,Ve,Ft),Xt=new HT(A),Wt=new XT(A),P=new eM(V),Ce=new BT(V,P),b=new qT(V,P,Ft,Ce),$=new jT(V,b,P,Ft),Me=new KT(V,St,rt),be=new FT(Fe),ce=new fb(A,Xt,Wt,je,St,Ce,be),ge=new Nb(A,Fe),le=new pb,Pe=new xb(je),We=new PT(A,Xt,Wt,ze,$,g,v),ke=new Eb(A,$,St),at=new Ob(V,Ft,St,ze),Ue=new IT(V,je,Ft),Ze=new YT(V,je,Ft),Ft.programs=ce.programs,A.capabilities=St,A.extensions=je,A.properties=Fe,A.renderLists=le,A.shadowMap=ke,A.state=ze,A.info=Ft}X();const Ae=new Ub(A,V);this.xr=Ae,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const w=je.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=je.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(w){w!==void 0&&(Y=w,this.setSize(H,K,!1))},this.getSize=function(w){return w.set(H,K)},this.setSize=function(w,W,ie=!0){if(Ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=w,K=W,i.width=Math.floor(w*Y),i.height=Math.floor(W*Y),ie===!0&&(i.style.width=w+"px",i.style.height=W+"px"),this.setViewport(0,0,w,W)},this.getDrawingBufferSize=function(w){return w.set(H*Y,K*Y).floor()},this.setDrawingBufferSize=function(w,W,ie){H=w,K=W,Y=ie,i.width=Math.floor(w*ie),i.height=Math.floor(W*ie),this.setViewport(0,0,w,W)},this.getCurrentViewport=function(w){return w.copy(z)},this.getViewport=function(w){return w.copy(J)},this.setViewport=function(w,W,ie,ae){w.isVector4?J.set(w.x,w.y,w.z,w.w):J.set(w,W,ie,ae),ze.viewport(z.copy(J).multiplyScalar(Y).round())},this.getScissor=function(w){return w.copy(ve)},this.setScissor=function(w,W,ie,ae){w.isVector4?ve.set(w.x,w.y,w.z,w.w):ve.set(w,W,ie,ae),ze.scissor(se.copy(ve).multiplyScalar(Y).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(w){ze.setScissorTest(xe=w)},this.setOpaqueSort=function(w){Se=w},this.setTransparentSort=function(w){L=w},this.getClearColor=function(w){return w.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(w=!0,W=!0,ie=!0){let ae=0;if(w){let Z=!1;if(G!==null){const Te=G.texture.format;Z=Te===_h||Te===mh||Te===ph}if(Z){const Te=G.texture.type,De=Te===aa||Te===Sr||Te===Lo||Te===No||Te===dh||Te===hh,Ie=We.getClearColor(),Le=We.getClearAlpha(),Qe=Ie.r,$e=Ie.g,Xe=Ie.b;De?(M[0]=Qe,M[1]=$e,M[2]=Xe,M[3]=Le,V.clearBufferuiv(V.COLOR,0,M)):(T[0]=Qe,T[1]=$e,T[2]=Xe,T[3]=Le,V.clearBufferiv(V.COLOR,0,T))}else ae|=V.COLOR_BUFFER_BIT}W&&(ae|=V.DEPTH_BUFFER_BIT),ie&&(ae|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Re,!1),i.removeEventListener("webglcontextrestored",Be,!1),i.removeEventListener("webglcontextcreationerror",Ee,!1),We.dispose(),le.dispose(),Pe.dispose(),Fe.dispose(),Xt.dispose(),Wt.dispose(),$.dispose(),Ce.dispose(),at.dispose(),ce.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",on),Ae.removeEventListener("sessionend",ln),Yt.stop()};function Re(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function Be(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const w=Ft.autoReset,W=ke.enabled,ie=ke.autoUpdate,ae=ke.needsUpdate,Z=ke.type;X(),Ft.autoReset=w,ke.enabled=W,ke.autoUpdate=ie,ke.needsUpdate=ae,ke.type=Z}function Ee(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function _e(w){const W=w.target;W.removeEventListener("dispose",_e),Ge(W)}function Ge(w){it(w),Fe.remove(w)}function it(w){const W=Fe.get(w).programs;W!==void 0&&(W.forEach(function(ie){ce.releaseProgram(ie)}),w.isShaderMaterial&&ce.releaseShaderCache(w))}this.renderBufferDirect=function(w,W,ie,ae,Z,Te){W===null&&(W=nt);const De=Z.isMesh&&Z.matrixWorld.determinant()<0,Ie=oa(w,W,ie,ae,Z);ze.setMaterial(ae,De);let Le=ie.index,Qe=1;if(ae.wireframe===!0){if(Le=b.getWireframeAttribute(ie),Le===void 0)return;Qe=2}const $e=ie.drawRange,Xe=ie.attributes.position;let lt=$e.start*Qe,yt=($e.start+$e.count)*Qe;Te!==null&&(lt=Math.max(lt,Te.start*Qe),yt=Math.min(yt,(Te.start+Te.count)*Qe)),Le!==null?(lt=Math.max(lt,0),yt=Math.min(yt,Le.count)):Xe!=null&&(lt=Math.max(lt,0),yt=Math.min(yt,Xe.count));const Vt=yt-lt;if(Vt<0||Vt===1/0)return;Ce.setup(Z,ae,Ie,ie,Le);let Dt,ut=Ue;if(Le!==null&&(Dt=P.get(Le),ut=Ze,ut.setIndex(Dt)),Z.isMesh)ae.wireframe===!0?(ze.setLineWidth(ae.wireframeLinewidth*ht()),ut.setMode(V.LINES)):ut.setMode(V.TRIANGLES);else if(Z.isLine){let Ke=ae.linewidth;Ke===void 0&&(Ke=1),ze.setLineWidth(Ke*ht()),Z.isLineSegments?ut.setMode(V.LINES):Z.isLineLoop?ut.setMode(V.LINE_LOOP):ut.setMode(V.LINE_STRIP)}else Z.isPoints?ut.setMode(V.POINTS):Z.isSprite&&ut.setMode(V.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)xs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ut.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))ut.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Ke=Z._multiDrawStarts,Gt=Z._multiDrawCounts,pt=Z._multiDrawCount,Tn=Le?P.get(Le).bytesPerElement:1,ci=Fe.get(ae).currentProgram.getUniforms();for(let Dn=0;Dn<pt;Dn++)ci.setValue(V,"_gl_DrawID",Dn),ut.render(Ke[Dn]/Tn,Gt[Dn])}else if(Z.isInstancedMesh)ut.renderInstances(lt,Vt,Z.count);else if(ie.isInstancedBufferGeometry){const Ke=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Gt=Math.min(ie.instanceCount,Ke);ut.renderInstances(lt,Vt,Gt)}else ut.render(lt,Vt)};function bt(w,W,ie){w.transparent===!0&&w.side===ta&&w.forceSinglePass===!1?(w.side=Vn,w.needsUpdate=!0,Mi(w,W,ie),w.side=Va,w.needsUpdate=!0,Mi(w,W,ie),w.side=ta):Mi(w,W,ie)}this.compile=function(w,W,ie=null){ie===null&&(ie=w),S=Pe.get(ie),S.init(W),O.push(S),ie.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(S.pushLight(Z),Z.castShadow&&S.pushShadow(Z))}),w!==ie&&w.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(S.pushLight(Z),Z.castShadow&&S.pushShadow(Z))}),S.setupLights();const ae=new Set;return w.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Te=Z.material;if(Te)if(Array.isArray(Te))for(let De=0;De<Te.length;De++){const Ie=Te[De];bt(Ie,ie,Z),ae.add(Ie)}else bt(Te,ie,Z),ae.add(Te)}),S=O.pop(),ae},this.compileAsync=function(w,W,ie=null){const ae=this.compile(w,W,ie);return new Promise(Z=>{function Te(){if(ae.forEach(function(De){Fe.get(De).currentProgram.isReady()&&ae.delete(De)}),ae.size===0){Z(w);return}setTimeout(Te,10)}je.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let xt=null;function ui(w){xt&&xt(w)}function on(){Yt.stop()}function ln(){Yt.start()}const Yt=new Nv;Yt.setAnimationLoop(ui),typeof self<"u"&&Yt.setContext(self),this.setAnimationLoop=function(w){xt=w,Ae.setAnimationLoop(w),w===null?Yt.stop():Yt.start()},Ae.addEventListener("sessionstart",on),Ae.addEventListener("sessionend",ln),this.render=function(w,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(W),W=Ae.getCamera()),w.isScene===!0&&w.onBeforeRender(A,w,W,G),S=Pe.get(w,O.length),S.init(W),O.push(S),ye.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),we.setFromProjectionMatrix(ye,Ui,W.reversedDepth),he=this.localClippingEnabled,te=be.init(this.clippingPlanes,he),y=le.get(w,I.length),y.init(),I.push(y),Ae.enabled===!0&&Ae.isPresenting===!0){const Te=A.xr.getDepthSensingMesh();Te!==null&&yi(Te,W,-1/0,A.sortObjects)}yi(w,W,0,A.sortObjects),y.finish(),A.sortObjects===!0&&y.sort(Se,L),zt=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,zt&&We.addToRenderList(y,w),this.info.render.frame++,te===!0&&be.beginShadows();const ie=S.state.shadowsArray;ke.render(ie,w,W),te===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset();const ae=y.opaque,Z=y.transmissive;if(S.setupLights(),W.isArrayCamera){const Te=W.cameras;if(Z.length>0)for(let De=0,Ie=Te.length;De<Ie;De++){const Le=Te[De];Vo(ae,Z,w,Le)}zt&&We.render(w);for(let De=0,Ie=Te.length;De<Ie;De++){const Le=Te[De];Mr(y,w,Le,Le.viewport)}}else Z.length>0&&Vo(ae,Z,w,W),zt&&We.render(w),Mr(y,w,W);G!==null&&B===0&&(rt.updateMultisampleRenderTarget(G),rt.updateRenderTargetMipmap(G)),w.isScene===!0&&w.onAfterRender(A,w,W),Ce.resetDefaultState(),C=-1,D=null,O.pop(),O.length>0?(S=O[O.length-1],te===!0&&be.setGlobalState(A.clippingPlanes,S.state.camera)):S=null,I.pop(),I.length>0?y=I[I.length-1]:y=null};function yi(w,W,ie,ae){if(w.visible===!1)return;if(w.layers.test(W.layers)){if(w.isGroup)ie=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(W);else if(w.isLight)S.pushLight(w),w.castShadow&&S.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||we.intersectsSprite(w)){ae&&qe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ye);const De=$.update(w),Ie=w.material;Ie.visible&&y.push(w,De,Ie,ie,qe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||we.intersectsObject(w))){const De=$.update(w),Ie=w.material;if(ae&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),qe.copy(w.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),qe.copy(De.boundingSphere.center)),qe.applyMatrix4(w.matrixWorld).applyMatrix4(ye)),Array.isArray(Ie)){const Le=De.groups;for(let Qe=0,$e=Le.length;Qe<$e;Qe++){const Xe=Le[Qe],lt=Ie[Xe.materialIndex];lt&&lt.visible&&y.push(w,De,lt,ie,qe.z,Xe)}}else Ie.visible&&y.push(w,De,Ie,ie,qe.z,null)}}const Te=w.children;for(let De=0,Ie=Te.length;De<Ie;De++)yi(Te[De],W,ie,ae)}function Mr(w,W,ie,ae){const Z=w.opaque,Te=w.transmissive,De=w.transparent;S.setupLightsView(ie),te===!0&&be.setGlobalState(A.clippingPlanes,ie),ae&&ze.viewport(z.copy(ae)),Z.length>0&&Er(Z,W,ie),Te.length>0&&Er(Te,W,ie),De.length>0&&Er(De,W,ie),ze.buffers.depth.setTest(!0),ze.buffers.depth.setMask(!0),ze.buffers.color.setMask(!0),ze.setPolygonOffset(!1)}function Vo(w,W,ie,ae){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;S.state.transmissionRenderTarget[ae.id]===void 0&&(S.state.transmissionRenderTarget[ae.id]=new xr(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?Bo:aa,minFilter:gr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace}));const Te=S.state.transmissionRenderTarget[ae.id],De=ae.viewport||z;Te.setSize(De.z*A.transmissionResolutionScale,De.w*A.transmissionResolutionScale);const Ie=A.getRenderTarget(),Le=A.getActiveCubeFace(),Qe=A.getActiveMipmapLevel();A.setRenderTarget(Te),A.getClearColor(ue),de=A.getClearAlpha(),de<1&&A.setClearColor(16777215,.5),A.clear(),zt&&We.render(ie);const $e=A.toneMapping;A.toneMapping=Ga;const Xe=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),S.setupLightsView(ae),te===!0&&be.setGlobalState(A.clippingPlanes,ae),Er(w,ie,ae),rt.updateMultisampleRenderTarget(Te),rt.updateRenderTargetMipmap(Te),je.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let yt=0,Vt=W.length;yt<Vt;yt++){const Dt=W[yt],ut=Dt.object,Ke=Dt.geometry,Gt=Dt.material,pt=Dt.group;if(Gt.side===ta&&ut.layers.test(ae.layers)){const Tn=Gt.side;Gt.side=Vn,Gt.needsUpdate=!0,Cs(ut,ie,ae,Ke,Gt,pt),Gt.side=Tn,Gt.needsUpdate=!0,lt=!0}}lt===!0&&(rt.updateMultisampleRenderTarget(Te),rt.updateRenderTargetMipmap(Te))}A.setRenderTarget(Ie,Le,Qe),A.setClearColor(ue,de),Xe!==void 0&&(ae.viewport=Xe),A.toneMapping=$e}function Er(w,W,ie){const ae=W.isScene===!0?W.overrideMaterial:null;for(let Z=0,Te=w.length;Z<Te;Z++){const De=w[Z],Ie=De.object,Le=De.geometry,Qe=De.group;let $e=De.material;$e.allowOverride===!0&&ae!==null&&($e=ae),Ie.layers.test(ie.layers)&&Cs(Ie,W,ie,Le,$e,Qe)}}function Cs(w,W,ie,ae,Z,Te){w.onBeforeRender(A,W,ie,ae,Z,Te),w.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Z.onBeforeRender(A,W,ie,ae,w,Te),Z.transparent===!0&&Z.side===ta&&Z.forceSinglePass===!1?(Z.side=Vn,Z.needsUpdate=!0,A.renderBufferDirect(ie,W,ae,Z,w,Te),Z.side=Va,Z.needsUpdate=!0,A.renderBufferDirect(ie,W,ae,Z,w,Te),Z.side=ta):A.renderBufferDirect(ie,W,ae,Z,w,Te),w.onAfterRender(A,W,ie,ae,Z,Te)}function Mi(w,W,ie){W.isScene!==!0&&(W=nt);const ae=Fe.get(w),Z=S.state.lights,Te=S.state.shadowsArray,De=Z.state.version,Ie=ce.getParameters(w,Z.state,Te,W,ie),Le=ce.getProgramCacheKey(Ie);let Qe=ae.programs;ae.environment=w.isMeshStandardMaterial?W.environment:null,ae.fog=W.fog,ae.envMap=(w.isMeshStandardMaterial?Wt:Xt).get(w.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&w.envMap===null?W.environmentRotation:w.envMapRotation,Qe===void 0&&(w.addEventListener("dispose",_e),Qe=new Map,ae.programs=Qe);let $e=Qe.get(Le);if($e!==void 0){if(ae.currentProgram===$e&&ae.lightsStateVersion===De)return Oi(w,Ie),$e}else Ie.uniforms=ce.getUniforms(w),w.onBeforeCompile(Ie,A),$e=ce.acquireProgram(Ie,Le),Qe.set(Le,$e),ae.uniforms=Ie.uniforms;const Xe=ae.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Xe.clippingPlanes=be.uniform),Oi(w,Ie),ae.needsLights=la(w),ae.lightsStateVersion=De,ae.needsLights&&(Xe.ambientLightColor.value=Z.state.ambient,Xe.lightProbe.value=Z.state.probe,Xe.directionalLights.value=Z.state.directional,Xe.directionalLightShadows.value=Z.state.directionalShadow,Xe.spotLights.value=Z.state.spot,Xe.spotLightShadows.value=Z.state.spotShadow,Xe.rectAreaLights.value=Z.state.rectArea,Xe.ltc_1.value=Z.state.rectAreaLTC1,Xe.ltc_2.value=Z.state.rectAreaLTC2,Xe.pointLights.value=Z.state.point,Xe.pointLightShadows.value=Z.state.pointShadow,Xe.hemisphereLights.value=Z.state.hemi,Xe.directionalShadowMap.value=Z.state.directionalShadowMap,Xe.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Xe.spotShadowMap.value=Z.state.spotShadowMap,Xe.spotLightMatrix.value=Z.state.spotLightMatrix,Xe.spotLightMap.value=Z.state.spotLightMap,Xe.pointShadowMap.value=Z.state.pointShadowMap,Xe.pointShadowMatrix.value=Z.state.pointShadowMatrix),ae.currentProgram=$e,ae.uniformsList=null,$e}function Tr(w){if(w.uniformsList===null){const W=w.currentProgram.getUniforms();w.uniformsList=bu.seqWithValue(W.seq,w.uniforms)}return w.uniformsList}function Oi(w,W){const ie=Fe.get(w);ie.outputColorSpace=W.outputColorSpace,ie.batching=W.batching,ie.batchingColor=W.batchingColor,ie.instancing=W.instancing,ie.instancingColor=W.instancingColor,ie.instancingMorph=W.instancingMorph,ie.skinning=W.skinning,ie.morphTargets=W.morphTargets,ie.morphNormals=W.morphNormals,ie.morphColors=W.morphColors,ie.morphTargetsCount=W.morphTargetsCount,ie.numClippingPlanes=W.numClippingPlanes,ie.numIntersection=W.numClipIntersection,ie.vertexAlphas=W.vertexAlphas,ie.vertexTangents=W.vertexTangents,ie.toneMapping=W.toneMapping}function oa(w,W,ie,ae,Z){W.isScene!==!0&&(W=nt),rt.resetTextureUnits();const Te=W.fog,De=ae.isMeshStandardMaterial?W.environment:null,Ie=G===null?A.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:As,Le=(ae.isMeshStandardMaterial?Wt:Xt).get(ae.envMap||De),Qe=ae.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,$e=!!ie.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Xe=!!ie.morphAttributes.position,lt=!!ie.morphAttributes.normal,yt=!!ie.morphAttributes.color;let Vt=Ga;ae.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Vt=A.toneMapping);const Dt=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,ut=Dt!==void 0?Dt.length:0,Ke=Fe.get(ae),Gt=S.state.lights;if(te===!0&&(he===!0||w!==D)){const Zt=w===D&&ae.id===C;be.setState(ae,w,Zt)}let pt=!1;ae.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Gt.state.version||Ke.outputColorSpace!==Ie||Z.isBatchedMesh&&Ke.batching===!1||!Z.isBatchedMesh&&Ke.batching===!0||Z.isBatchedMesh&&Ke.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Ke.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Ke.instancing===!1||!Z.isInstancedMesh&&Ke.instancing===!0||Z.isSkinnedMesh&&Ke.skinning===!1||!Z.isSkinnedMesh&&Ke.skinning===!0||Z.isInstancedMesh&&Ke.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ke.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ke.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ke.instancingMorph===!1&&Z.morphTexture!==null||Ke.envMap!==Le||ae.fog===!0&&Ke.fog!==Te||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==be.numPlanes||Ke.numIntersection!==be.numIntersection)||Ke.vertexAlphas!==Qe||Ke.vertexTangents!==$e||Ke.morphTargets!==Xe||Ke.morphNormals!==lt||Ke.morphColors!==yt||Ke.toneMapping!==Vt||Ke.morphTargetsCount!==ut)&&(pt=!0):(pt=!0,Ke.__version=ae.version);let Tn=Ke.currentProgram;pt===!0&&(Tn=Mi(ae,W,Z));let ci=!1,Dn=!1,pn=!1;const Bt=Tn.getUniforms(),Un=Ke.uniforms;if(ze.useProgram(Tn.program)&&(ci=!0,Dn=!0,pn=!0),ae.id!==C&&(C=ae.id,Dn=!0),ci||D!==w){ze.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Bt.setValue(V,"projectionMatrix",w.projectionMatrix),Bt.setValue(V,"viewMatrix",w.matrixWorldInverse);const xn=Bt.map.cameraPosition;xn!==void 0&&xn.setValue(V,Oe.setFromMatrixPosition(w.matrixWorld)),St.logarithmicDepthBuffer&&Bt.setValue(V,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Bt.setValue(V,"isOrthographic",w.isOrthographicCamera===!0),D!==w&&(D=w,Dn=!0,pn=!0)}if(Z.isSkinnedMesh){Bt.setOptional(V,Z,"bindMatrix"),Bt.setOptional(V,Z,"bindMatrixInverse");const Zt=Z.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),Bt.setValue(V,"boneTexture",Zt.boneTexture,rt))}Z.isBatchedMesh&&(Bt.setOptional(V,Z,"batchingTexture"),Bt.setValue(V,"batchingTexture",Z._matricesTexture,rt),Bt.setOptional(V,Z,"batchingIdTexture"),Bt.setValue(V,"batchingIdTexture",Z._indirectTexture,rt),Bt.setOptional(V,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Bt.setValue(V,"batchingColorTexture",Z._colorsTexture,rt));const An=ie.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&Me.update(Z,ie,Tn),(Dn||Ke.receiveShadow!==Z.receiveShadow)&&(Ke.receiveShadow=Z.receiveShadow,Bt.setValue(V,"receiveShadow",Z.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(Un.envMap.value=Le,Un.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&W.environment!==null&&(Un.envMapIntensity.value=W.environmentIntensity),Dn&&(Bt.setValue(V,"toneMappingExposure",A.toneMappingExposure),Ke.needsLights&&ka(Un,pn),Te&&ae.fog===!0&&ge.refreshFogUniforms(Un,Te),ge.refreshMaterialUniforms(Un,ae,Y,K,S.state.transmissionRenderTarget[w.id]),bu.upload(V,Tr(Ke),Un,rt)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(bu.upload(V,Tr(Ke),Un,rt),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Bt.setValue(V,"center",Z.center),Bt.setValue(V,"modelViewMatrix",Z.modelViewMatrix),Bt.setValue(V,"normalMatrix",Z.normalMatrix),Bt.setValue(V,"modelMatrix",Z.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const Zt=ae.uniformsGroups;for(let xn=0,Ar=Zt.length;xn<Ar;xn++){const Pn=Zt[xn];at.update(Pn,Tn),at.bind(Pn,Tn)}}return Tn}function ka(w,W){w.ambientLightColor.needsUpdate=W,w.lightProbe.needsUpdate=W,w.directionalLights.needsUpdate=W,w.directionalLightShadows.needsUpdate=W,w.pointLights.needsUpdate=W,w.pointLightShadows.needsUpdate=W,w.spotLights.needsUpdate=W,w.spotLightShadows.needsUpdate=W,w.rectAreaLights.needsUpdate=W,w.hemisphereLights.needsUpdate=W}function la(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(w,W,ie){const ae=Fe.get(w);ae.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),Fe.get(w.texture).__webglTexture=W,Fe.get(w.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:ie,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,W){const ie=Fe.get(w);ie.__webglFramebuffer=W,ie.__useDefaultFramebuffer=W===void 0};const nn=V.createFramebuffer();this.setRenderTarget=function(w,W=0,ie=0){G=w,N=W,B=ie;let ae=!0,Z=null,Te=!1,De=!1;if(w){const Le=Fe.get(w);if(Le.__useDefaultFramebuffer!==void 0)ze.bindFramebuffer(V.FRAMEBUFFER,null),ae=!1;else if(Le.__webglFramebuffer===void 0)rt.setupRenderTarget(w);else if(Le.__hasExternalTextures)rt.rebindTextures(w,Fe.get(w.texture).__webglTexture,Fe.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Xe=w.depthTexture;if(Le.__boundDepthTexture!==Xe){if(Xe!==null&&Fe.has(Xe)&&(w.width!==Xe.image.width||w.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");rt.setupDepthRenderbuffer(w)}}const Qe=w.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(De=!0);const $e=Fe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray($e[W])?Z=$e[W][ie]:Z=$e[W],Te=!0):w.samples>0&&rt.useMultisampledRTT(w)===!1?Z=Fe.get(w).__webglMultisampledFramebuffer:Array.isArray($e)?Z=$e[ie]:Z=$e,z.copy(w.viewport),se.copy(w.scissor),oe=w.scissorTest}else z.copy(J).multiplyScalar(Y).floor(),se.copy(ve).multiplyScalar(Y).floor(),oe=xe;if(ie!==0&&(Z=nn),ze.bindFramebuffer(V.FRAMEBUFFER,Z)&&ae&&ze.drawBuffers(w,Z),ze.viewport(z),ze.scissor(se),ze.setScissorTest(oe),Te){const Le=Fe.get(w.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+W,Le.__webglTexture,ie)}else if(De){const Le=W;for(let Qe=0;Qe<w.textures.length;Qe++){const $e=Fe.get(w.textures[Qe]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Qe,$e.__webglTexture,ie,Le)}}else if(w!==null&&ie!==0){const Le=Fe.get(w.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Le.__webglTexture,ie)}C=-1},this.readRenderTargetPixels=function(w,W,ie,ae,Z,Te,De,Ie=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Fe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&De!==void 0&&(Le=Le[De]),Le){ze.bindFramebuffer(V.FRAMEBUFFER,Le);try{const Qe=w.textures[Ie],$e=Qe.format,Xe=Qe.type;if(!St.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!St.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=w.width-ae&&ie>=0&&ie<=w.height-Z&&(w.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ie),V.readPixels(W,ie,ae,Z,Ve.convert($e),Ve.convert(Xe),Te))}finally{const Qe=G!==null?Fe.get(G).__webglFramebuffer:null;ze.bindFramebuffer(V.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(w,W,ie,ae,Z,Te,De,Ie=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=Fe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&De!==void 0&&(Le=Le[De]),Le)if(W>=0&&W<=w.width-ae&&ie>=0&&ie<=w.height-Z){ze.bindFramebuffer(V.FRAMEBUFFER,Le);const Qe=w.textures[Ie],$e=Qe.format,Xe=Qe.type;if(!St.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!St.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const lt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,lt),V.bufferData(V.PIXEL_PACK_BUFFER,Te.byteLength,V.STREAM_READ),w.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ie),V.readPixels(W,ie,ae,Z,Ve.convert($e),Ve.convert(Xe),0);const yt=G!==null?Fe.get(G).__webglFramebuffer:null;ze.bindFramebuffer(V.FRAMEBUFFER,yt);const Vt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Sy(V,Vt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,lt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Te),V.deleteBuffer(lt),V.deleteSync(Vt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,W=null,ie=0){const ae=Math.pow(2,-ie),Z=Math.floor(w.image.width*ae),Te=Math.floor(w.image.height*ae),De=W!==null?W.x:0,Ie=W!==null?W.y:0;rt.setTexture2D(w,0),V.copyTexSubImage2D(V.TEXTURE_2D,ie,0,0,De,Ie,Z,Te),ze.unbindTexture()};const ko=V.createFramebuffer(),Xo=V.createFramebuffer();this.copyTextureToTexture=function(w,W,ie=null,ae=null,Z=0,Te=null){Te===null&&(Z!==0?(xs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=Z,Z=0):Te=0);let De,Ie,Le,Qe,$e,Xe,lt,yt,Vt;const Dt=w.isCompressedTexture?w.mipmaps[Te]:w.image;if(ie!==null)De=ie.max.x-ie.min.x,Ie=ie.max.y-ie.min.y,Le=ie.isBox3?ie.max.z-ie.min.z:1,Qe=ie.min.x,$e=ie.min.y,Xe=ie.isBox3?ie.min.z:0;else{const An=Math.pow(2,-Z);De=Math.floor(Dt.width*An),Ie=Math.floor(Dt.height*An),w.isDataArrayTexture?Le=Dt.depth:w.isData3DTexture?Le=Math.floor(Dt.depth*An):Le=1,Qe=0,$e=0,Xe=0}ae!==null?(lt=ae.x,yt=ae.y,Vt=ae.z):(lt=0,yt=0,Vt=0);const ut=Ve.convert(W.format),Ke=Ve.convert(W.type);let Gt;W.isData3DTexture?(rt.setTexture3D(W,0),Gt=V.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(rt.setTexture2DArray(W,0),Gt=V.TEXTURE_2D_ARRAY):(rt.setTexture2D(W,0),Gt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,W.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,W.unpackAlignment);const pt=V.getParameter(V.UNPACK_ROW_LENGTH),Tn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),ci=V.getParameter(V.UNPACK_SKIP_PIXELS),Dn=V.getParameter(V.UNPACK_SKIP_ROWS),pn=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Dt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Dt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Qe),V.pixelStorei(V.UNPACK_SKIP_ROWS,$e),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Xe);const Bt=w.isDataArrayTexture||w.isData3DTexture,Un=W.isDataArrayTexture||W.isData3DTexture;if(w.isDepthTexture){const An=Fe.get(w),Zt=Fe.get(W),xn=Fe.get(An.__renderTarget),Ar=Fe.get(Zt.__renderTarget);ze.bindFramebuffer(V.READ_FRAMEBUFFER,xn.__webglFramebuffer),ze.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ar.__webglFramebuffer);for(let Pn=0;Pn<Le;Pn++)Bt&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Fe.get(w).__webglTexture,Z,Xe+Pn),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Fe.get(W).__webglTexture,Te,Vt+Pn)),V.blitFramebuffer(Qe,$e,De,Ie,lt,yt,De,Ie,V.DEPTH_BUFFER_BIT,V.NEAREST);ze.bindFramebuffer(V.READ_FRAMEBUFFER,null),ze.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Z!==0||w.isRenderTargetTexture||Fe.has(w)){const An=Fe.get(w),Zt=Fe.get(W);ze.bindFramebuffer(V.READ_FRAMEBUFFER,ko),ze.bindFramebuffer(V.DRAW_FRAMEBUFFER,Xo);for(let xn=0;xn<Le;xn++)Bt?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,An.__webglTexture,Z,Xe+xn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,An.__webglTexture,Z),Un?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Zt.__webglTexture,Te,Vt+xn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Zt.__webglTexture,Te),Z!==0?V.blitFramebuffer(Qe,$e,De,Ie,lt,yt,De,Ie,V.COLOR_BUFFER_BIT,V.NEAREST):Un?V.copyTexSubImage3D(Gt,Te,lt,yt,Vt+xn,Qe,$e,De,Ie):V.copyTexSubImage2D(Gt,Te,lt,yt,Qe,$e,De,Ie);ze.bindFramebuffer(V.READ_FRAMEBUFFER,null),ze.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Un?w.isDataTexture||w.isData3DTexture?V.texSubImage3D(Gt,Te,lt,yt,Vt,De,Ie,Le,ut,Ke,Dt.data):W.isCompressedArrayTexture?V.compressedTexSubImage3D(Gt,Te,lt,yt,Vt,De,Ie,Le,ut,Dt.data):V.texSubImage3D(Gt,Te,lt,yt,Vt,De,Ie,Le,ut,Ke,Dt):w.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Te,lt,yt,De,Ie,ut,Ke,Dt.data):w.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Te,lt,yt,Dt.width,Dt.height,ut,Dt.data):V.texSubImage2D(V.TEXTURE_2D,Te,lt,yt,De,Ie,ut,Ke,Dt);V.pixelStorei(V.UNPACK_ROW_LENGTH,pt),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Tn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,ci),V.pixelStorei(V.UNPACK_SKIP_ROWS,Dn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,pn),Te===0&&W.generateMipmaps&&V.generateMipmap(Gt),ze.unbindTexture()},this.copyTextureToTexture3D=function(w,W,ie=null,ae=null,Z=0){return xs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,W,ie,ae,Z)},this.initRenderTarget=function(w){Fe.get(w).__webglFramebuffer===void 0&&rt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?rt.setTextureCube(w,0):w.isData3DTexture?rt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?rt.setTexture2DArray(w,0):rt.setTexture2D(w,0),ze.unbindTexture()},this.resetState=function(){N=0,B=0,G=null,ze.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(e),i.unpackColorSpace=Et._getUnpackColorSpace()}}const Bb=`uniform sampler2D uTexture;
varying vec2 vUv;
uniform vec2 uResolution;
uniform float uTime;

void main() {
    vec2 uv = vUv * 2.0 - 1.0;
    float r2 = uv.x * uv.x + uv.y * uv.y;
    float k = 0.1;
    vec2 distorted = uv * (1.0 + k * r2);
    distorted = (distorted + 1.0) * 0.5;

    if (distorted.x < 0.0 || distorted.x > 1.0 || distorted.y < 0.0 || distorted.y > 1.0) {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        return;
    }

    float scanline = 0.9 + 0.6 * sin(distorted.y * uResolution.y * 2.0);

    vec4 color = texture2D(uTexture, distorted) * scanline;

    color.g *= 1.2;

    float noise = fract(sin(dot(distorted.xy, vec2(12.9898,78.233))) * 43758.5453 + uTime) * 0.04;
    color.rgb += noise;

    float vignette = 1.0 - 0.2 * r2;
    color.rgb *= vignette;

    float lineNoise = fract(sin(distorted.y * 1234.0 + uTime * 10.0) * 43758.0) * 0.02;
    color.rgb += lineNoise;

    gl_FragColor = color;
}`,Ib=`varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;function zb({sourceCanvas:o,width:e,height:i}){const r=Gn.useRef(null);return Gn.useEffect(()=>{const l=r.current;if(!l)return;const u=new Pb;u.setSize(e,i),l.appendChild(u.domElement);const p=new Wy,m=new Lv(-1,1,1,-1,0,1),v=new On(o);v.needsUpdate=!0;const _=new sa({uniforms:{uTexture:{value:v},uTime:{value:0},uResolution:{value:new Ct(e,i)}},vertexShader:Ib,fragmentShader:Bb}),x=new Go(2,2),c=new Li(x,_);p.add(c);const d=new Jy;function g(){requestAnimationFrame(g),_.uniforms.uTime.value=d.getElapsedTime(),v.needsUpdate=!0,u.render(p,m)}return g(),()=>{u.dispose(),l?.removeChild(u.domElement)}},[i,o,e]),Fa.jsx("div",{ref:r,style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}})}function Fb(){const o=Gn.useRef(null),{engine:e,canvasReady:i,height:r,width:l}=Rx(o);return wx(e),Fa.jsxs("div",{className:"relative flex items-center justify-center h-screen bg-gray-950",style:{width:l},children:[Fa.jsx("canvas",{ref:o,style:{background:"#1a202c",visibility:"hidden",width:l,height:r}}),i&&Fa.jsx(zb,{sourceCanvas:i,width:l,height:r})]})}function Hb(){return Fa.jsx("div",{className:"h-screen bg-black flex items-center justify-center",children:Fa.jsx(Fb,{})})}JS.createRoot(document.getElementById("root")).render(Fa.jsx(Gn.StrictMode,{children:Fa.jsx(Hb,{})}));
