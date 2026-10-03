(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();var Zh={exports:{}},nl={};var $1;function wS(){if($1)return nl;$1=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var f in o)f!=="key"&&(c[f]=o[f])}else c=o;return o=c.ref,{$$typeof:r,type:a,key:u,ref:o!==void 0?o:null,props:c}}return nl.Fragment=t,nl.jsx=n,nl.jsxs=n,nl}var t_;function DS(){return t_||(t_=1,Zh.exports=wS()),Zh.exports}var Et=DS(),Kh={exports:{}},ce={};var e_;function US(){if(e_)return ce;e_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function y(B){return B===null||typeof B!="object"?null:(B=v&&B[v]||B["@@iterator"],typeof B=="function"?B:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,S={};function x(B,et,ft){this.props=B,this.context=et,this.refs=S,this.updater=ft||E}x.prototype.isReactComponent={},x.prototype.setState=function(B,et){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,et,"setState")},x.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function T(){}T.prototype=x.prototype;function M(B,et,ft){this.props=B,this.context=et,this.refs=S,this.updater=ft||E}var A=M.prototype=new T;A.constructor=M,R(A,x.prototype),A.isPureReactComponent=!0;var N=Array.isArray;function L(){}var U={H:null,A:null,T:null,S:null},z=Object.prototype.hasOwnProperty;function C(B,et,ft){var bt=ft.ref;return{$$typeof:r,type:B,key:et,ref:bt!==void 0?bt:null,props:ft}}function w(B,et){return C(B.type,et,B.props)}function I(B){return typeof B=="object"&&B!==null&&B.$$typeof===r}function k(B){var et={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(ft){return et[ft]})}var X=/\/+/g;function q(B,et){return typeof B=="object"&&B!==null&&B.key!=null?k(""+B.key):et.toString(36)}function G(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(L,L):(B.status="pending",B.then(function(et){B.status==="pending"&&(B.status="fulfilled",B.value=et)},function(et){B.status==="pending"&&(B.status="rejected",B.reason=et)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function F(B,et,ft,bt,Ot){var it=typeof B;(it==="undefined"||it==="boolean")&&(B=null);var ut=!1;if(B===null)ut=!0;else switch(it){case"bigint":case"string":case"number":ut=!0;break;case"object":switch(B.$$typeof){case r:case t:ut=!0;break;case g:return ut=B._init,F(ut(B._payload),et,ft,bt,Ot)}}if(ut)return Ot=Ot(B),ut=bt===""?"."+q(B,0):bt,N(Ot)?(ft="",ut!=null&&(ft=ut.replace(X,"$&/")+"/"),F(Ot,et,ft,"",function(Bt){return Bt})):Ot!=null&&(I(Ot)&&(Ot=w(Ot,ft+(Ot.key==null||B&&B.key===Ot.key?"":(""+Ot.key).replace(X,"$&/")+"/")+ut)),et.push(Ot)),1;ut=0;var Ct=bt===""?".":bt+":";if(N(B))for(var Gt=0;Gt<B.length;Gt++)bt=B[Gt],it=Ct+q(bt,Gt),ut+=F(bt,et,ft,it,Ot);else if(Gt=y(B),typeof Gt=="function")for(B=Gt.call(B),Gt=0;!(bt=B.next()).done;)bt=bt.value,it=Ct+q(bt,Gt++),ut+=F(bt,et,ft,it,Ot);else if(it==="object"){if(typeof B.then=="function")return F(G(B),et,ft,bt,Ot);throw et=String(B),Error("Objects are not valid as a React child (found: "+(et==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":et)+"). If you meant to render a collection of children, use an array instead.")}return ut}function V(B,et,ft){if(B==null)return B;var bt=[],Ot=0;return F(B,bt,"","",function(it){return et.call(ft,it,Ot++)}),bt}function Q(B){if(B._status===-1){var et=B._result;et=et(),et.then(function(ft){(B._status===0||B._status===-1)&&(B._status=1,B._result=ft)},function(ft){(B._status===0||B._status===-1)&&(B._status=2,B._result=ft)}),B._status===-1&&(B._status=0,B._result=et)}if(B._status===1)return B._result.default;throw B._result}var pt=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var et=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent(et))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)},dt={map:V,forEach:function(B,et,ft){V(B,function(){et.apply(this,arguments)},ft)},count:function(B){var et=0;return V(B,function(){et++}),et},toArray:function(B){return V(B,function(et){return et})||[]},only:function(B){if(!I(B))throw Error("React.Children.only expected to receive a single React element child.");return B}};return ce.Activity=_,ce.Children=dt,ce.Component=x,ce.Fragment=n,ce.Profiler=o,ce.PureComponent=M,ce.StrictMode=a,ce.Suspense=p,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=U,ce.__COMPILER_RUNTIME={__proto__:null,c:function(B){return U.H.useMemoCache(B)}},ce.cache=function(B){return function(){return B.apply(null,arguments)}},ce.cacheSignal=function(){return null},ce.cloneElement=function(B,et,ft){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var bt=R({},B.props),Ot=B.key;if(et!=null)for(it in et.key!==void 0&&(Ot=""+et.key),et)!z.call(et,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&et.ref===void 0||(bt[it]=et[it]);var it=arguments.length-2;if(it===1)bt.children=ft;else if(1<it){for(var ut=Array(it),Ct=0;Ct<it;Ct++)ut[Ct]=arguments[Ct+2];bt.children=ut}return C(B.type,Ot,bt)},ce.createContext=function(B){return B={$$typeof:u,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:c,_context:B},B},ce.createElement=function(B,et,ft){var bt,Ot={},it=null;if(et!=null)for(bt in et.key!==void 0&&(it=""+et.key),et)z.call(et,bt)&&bt!=="key"&&bt!=="__self"&&bt!=="__source"&&(Ot[bt]=et[bt]);var ut=arguments.length-2;if(ut===1)Ot.children=ft;else if(1<ut){for(var Ct=Array(ut),Gt=0;Gt<ut;Gt++)Ct[Gt]=arguments[Gt+2];Ot.children=Ct}if(B&&B.defaultProps)for(bt in ut=B.defaultProps,ut)Ot[bt]===void 0&&(Ot[bt]=ut[bt]);return C(B,it,Ot)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(B){return{$$typeof:f,render:B}},ce.isValidElement=I,ce.lazy=function(B){return{$$typeof:g,_payload:{_status:-1,_result:B},_init:Q}},ce.memo=function(B,et){return{$$typeof:d,type:B,compare:et===void 0?null:et}},ce.startTransition=function(B){var et=U.T,ft={};U.T=ft;try{var bt=B(),Ot=U.S;Ot!==null&&Ot(ft,bt),typeof bt=="object"&&bt!==null&&typeof bt.then=="function"&&bt.then(L,pt)}catch(it){pt(it)}finally{et!==null&&ft.types!==null&&(et.types=ft.types),U.T=et}},ce.unstable_useCacheRefresh=function(){return U.H.useCacheRefresh()},ce.use=function(B){return U.H.use(B)},ce.useActionState=function(B,et,ft){return U.H.useActionState(B,et,ft)},ce.useCallback=function(B,et){return U.H.useCallback(B,et)},ce.useContext=function(B){return U.H.useContext(B)},ce.useDebugValue=function(){},ce.useDeferredValue=function(B,et){return U.H.useDeferredValue(B,et)},ce.useEffect=function(B,et){return U.H.useEffect(B,et)},ce.useEffectEvent=function(B){return U.H.useEffectEvent(B)},ce.useId=function(){return U.H.useId()},ce.useImperativeHandle=function(B,et,ft){return U.H.useImperativeHandle(B,et,ft)},ce.useInsertionEffect=function(B,et){return U.H.useInsertionEffect(B,et)},ce.useLayoutEffect=function(B,et){return U.H.useLayoutEffect(B,et)},ce.useMemo=function(B,et){return U.H.useMemo(B,et)},ce.useOptimistic=function(B,et){return U.H.useOptimistic(B,et)},ce.useReducer=function(B,et,ft){return U.H.useReducer(B,et,ft)},ce.useRef=function(B){return U.H.useRef(B)},ce.useState=function(B){return U.H.useState(B)},ce.useSyncExternalStore=function(B,et,ft){return U.H.useSyncExternalStore(B,et,ft)},ce.useTransition=function(){return U.H.useTransition()},ce.version="19.2.8",ce}var n_;function Vp(){return n_||(n_=1,Kh.exports=US()),Kh.exports}var $e=Vp(),Qh={exports:{}},il={},Jh={exports:{}},$h={};var i_;function NS(){return i_||(i_=1,(function(r){function t(F,V){var Q=F.length;F.push(V);t:for(;0<Q;){var pt=Q-1>>>1,dt=F[pt];if(0<o(dt,V))F[pt]=V,F[Q]=dt,Q=pt;else break t}}function n(F){return F.length===0?null:F[0]}function a(F){if(F.length===0)return null;var V=F[0],Q=F.pop();if(Q!==V){F[0]=Q;t:for(var pt=0,dt=F.length,B=dt>>>1;pt<B;){var et=2*(pt+1)-1,ft=F[et],bt=et+1,Ot=F[bt];if(0>o(ft,Q))bt<dt&&0>o(Ot,ft)?(F[pt]=Ot,F[bt]=Q,pt=bt):(F[pt]=ft,F[et]=Q,pt=et);else if(bt<dt&&0>o(Ot,Q))F[pt]=Ot,F[bt]=Q,pt=bt;else break t}}return V}function o(F,V){var Q=F.sortIndex-V.sortIndex;return Q!==0?Q:F.id-V.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var u=Date,f=u.now();r.unstable_now=function(){return u.now()-f}}var p=[],d=[],g=1,_=null,v=3,y=!1,E=!1,R=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;function A(F){for(var V=n(d);V!==null;){if(V.callback===null)a(d);else if(V.startTime<=F)a(d),V.sortIndex=V.expirationTime,t(p,V);else break;V=n(d)}}function N(F){if(R=!1,A(F),!E)if(n(p)!==null)E=!0,L||(L=!0,k());else{var V=n(d);V!==null&&G(N,V.startTime-F)}}var L=!1,U=-1,z=5,C=-1;function w(){return S?!0:!(r.unstable_now()-C<z)}function I(){if(S=!1,L){var F=r.unstable_now();C=F;var V=!0;try{t:{E=!1,R&&(R=!1,T(U),U=-1),y=!0;var Q=v;try{e:{for(A(F),_=n(p);_!==null&&!(_.expirationTime>F&&w());){var pt=_.callback;if(typeof pt=="function"){_.callback=null,v=_.priorityLevel;var dt=pt(_.expirationTime<=F);if(F=r.unstable_now(),typeof dt=="function"){_.callback=dt,A(F),V=!0;break e}_===n(p)&&a(p),A(F)}else a(p);_=n(p)}if(_!==null)V=!0;else{var B=n(d);B!==null&&G(N,B.startTime-F),V=!1}}break t}finally{_=null,v=Q,y=!1}V=void 0}}finally{V?k():L=!1}}}var k;if(typeof M=="function")k=function(){M(I)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,q=X.port2;X.port1.onmessage=I,k=function(){q.postMessage(null)}}else k=function(){x(I,0)};function G(F,V){U=x(function(){F(r.unstable_now())},V)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_next=function(F){switch(v){case 1:case 2:case 3:var V=3;break;default:V=v}var Q=v;v=V;try{return F()}finally{v=Q}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(F,V){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var Q=v;v=F;try{return V()}finally{v=Q}},r.unstable_scheduleCallback=function(F,V,Q){var pt=r.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?pt+Q:pt):Q=pt,F){case 1:var dt=-1;break;case 2:dt=250;break;case 5:dt=1073741823;break;case 4:dt=1e4;break;default:dt=5e3}return dt=Q+dt,F={id:g++,callback:V,priorityLevel:F,startTime:Q,expirationTime:dt,sortIndex:-1},Q>pt?(F.sortIndex=Q,t(d,F),n(p)===null&&F===n(d)&&(R?(T(U),U=-1):R=!0,G(N,Q-pt))):(F.sortIndex=dt,t(p,F),E||y||(E=!0,L||(L=!0,k()))),F},r.unstable_shouldYield=w,r.unstable_wrapCallback=function(F){var V=v;return function(){var Q=v;v=V;try{return F.apply(this,arguments)}finally{v=Q}}}})($h)),$h}var a_;function LS(){return a_||(a_=1,Jh.exports=NS()),Jh.exports}var td={exports:{}},Gn={};var s_;function OS(){if(s_)return Gn;s_=1;var r=Vp();function t(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(p,d,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:p,containerInfo:d,implementation:g}}var u=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Gn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Gn.createPortal=function(p,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return c(p,d,null,g)},Gn.flushSync=function(p){var d=u.T,g=a.p;try{if(u.T=null,a.p=2,p)return p()}finally{u.T=d,a.p=g,a.d.f()}},Gn.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(p,d))},Gn.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Gn.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var g=d.as,_=f(g,d.crossOrigin),v=typeof d.integrity=="string"?d.integrity:void 0,y=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?a.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:y}):g==="script"&&a.d.X(p,{crossOrigin:_,integrity:v,fetchPriority:y,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Gn.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=f(d.as,d.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(p)},Gn.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,_=f(g,d.crossOrigin);a.d.L(p,g,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Gn.preloadModule=function(p,d){if(typeof p=="string")if(d){var g=f(d.as,d.crossOrigin);a.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(p)},Gn.requestFormReset=function(p){a.d.r(p)},Gn.unstable_batchedUpdates=function(p,d){return p(d)},Gn.useFormState=function(p,d,g){return u.H.useFormState(p,d,g)},Gn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Gn.version="19.2.8",Gn}var r_;function PS(){if(r_)return td.exports;r_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),td.exports=OS(),td.exports}var o_;function zS(){if(o_)return il;o_=1;var r=LS(),t=Vp(),n=PS();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function u(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function f(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(a(188))}function d(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(a(188));return i!==e?null:e}for(var s=e,l=i;;){var h=s.return;if(h===null)break;var m=h.alternate;if(m===null){if(l=h.return,l!==null){s=l;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===s)return p(h),e;if(m===l)return p(h),i;m=m.sibling}throw Error(a(188))}if(s.return!==l.return)s=h,l=m;else{for(var b=!1,O=h.child;O;){if(O===s){b=!0,s=h,l=m;break}if(O===l){b=!0,l=h,s=m;break}O=O.sibling}if(!b){for(O=m.child;O;){if(O===s){b=!0,s=m,l=h;break}if(O===l){b=!0,l=m,s=h;break}O=O.sibling}if(!b)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:i}function g(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=g(e),i!==null)return i;e=e.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),T=Symbol.for("react.consumer"),M=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),U=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),I=Symbol.iterator;function k(e){return e===null||typeof e!="object"?null:(e=I&&e[I]||e["@@iterator"],typeof e=="function"?e:null)}var X=Symbol.for("react.client.reference");function q(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===X?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case x:return"Profiler";case S:return"StrictMode";case N:return"Suspense";case L:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case M:return e.displayName||"Context";case T:return(e._context.displayName||"Context")+".Consumer";case A:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case U:return i=e.displayName||null,i!==null?i:q(e.type)||"Memo";case z:i=e._payload,e=e._init;try{return q(e(i))}catch{}}return null}var G=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q={pending:!1,data:null,method:null,action:null},pt=[],dt=-1;function B(e){return{current:e}}function et(e){0>dt||(e.current=pt[dt],pt[dt]=null,dt--)}function ft(e,i){dt++,pt[dt]=e.current,e.current=i}var bt=B(null),Ot=B(null),it=B(null),ut=B(null);function Ct(e,i){switch(ft(it,i),ft(Ot,e),ft(bt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?M1(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=M1(i),e=b1(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}et(bt),ft(bt,e)}function Gt(){et(bt),et(Ot),et(it)}function Bt(e){e.memoizedState!==null&&ft(ut,e);var i=bt.current,s=b1(i,e.type);i!==s&&(ft(Ot,e),ft(bt,s))}function le(e){Ot.current===e&&(et(bt),et(Ot)),ut.current===e&&(et(ut),Jo._currentValue=Q)}var Ae,me;function _e(e){if(Ae===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Ae=i&&i[1]||"",me=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ae+e+me}var Ue=!1;function ue(e,i){if(!e||Ue)return"";Ue=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(ct){var ot=ct}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(ct){ot=ct}e.call(vt.prototype)}}else{try{throw Error()}catch(ct){ot=ct}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(ct){if(ct&&ot&&typeof ct.stack=="string")return[ct.stack,ot.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),b=m[0],O=m[1];if(b&&O){var Y=b.split(`
`),st=O.split(`
`);for(h=l=0;l<Y.length&&!Y[l].includes("DetermineComponentFrameRoot");)l++;for(;h<st.length&&!st[h].includes("DetermineComponentFrameRoot");)h++;if(l===Y.length||h===st.length)for(l=Y.length-1,h=st.length-1;1<=l&&0<=h&&Y[l]!==st[h];)h--;for(;1<=l&&0<=h;l--,h--)if(Y[l]!==st[h]){if(l!==1||h!==1)do if(l--,h--,0>h||Y[l]!==st[h]){var mt=`
`+Y[l].replace(" at new "," at ");return e.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",e.displayName)),mt}while(1<=l&&0<=h);break}}}finally{Ue=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?_e(s):""}function sn(e,i){switch(e.tag){case 26:case 27:case 5:return _e(e.type);case 16:return _e("Lazy");case 13:return e.child!==i&&i!==null?_e("Suspense Fallback"):_e("Suspense");case 19:return _e("SuspenseList");case 0:case 15:return ue(e.type,!1);case 11:return ue(e.type.render,!1);case 1:return ue(e.type,!0);case 31:return _e("Activity");default:return""}}function j(e){try{var i="",s=null;do i+=sn(e,s),s=e,e=e.return;while(e);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Ke=Object.prototype.hasOwnProperty,be=r.unstable_scheduleCallback,Pe=r.unstable_cancelCallback,jt=r.unstable_shouldYield,H=r.unstable_requestPaint,D=r.unstable_now,J=r.unstable_getCurrentPriorityLevel,gt=r.unstable_ImmediatePriority,yt=r.unstable_UserBlockingPriority,ht=r.unstable_NormalPriority,Kt=r.unstable_LowPriority,Dt=r.unstable_IdlePriority,Wt=r.log,ne=r.unstable_setDisableYieldValue,Mt=null,Tt=null;function Ht(e){if(typeof Wt=="function"&&ne(e),Tt&&typeof Tt.setStrictMode=="function")try{Tt.setStrictMode(Mt,e)}catch{}}var Ft=Math.clz32?Math.clz32:K,Ut=Math.log,he=Math.LN2;function K(e){return e>>>=0,e===0?32:31-(Ut(e)/he|0)|0}var Lt=256,At=262144,It=4194304;function St(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xt(e,i,s){var l=e.pendingLanes;if(l===0)return 0;var h=0,m=e.suspendedLanes,b=e.pingedLanes;e=e.warmLanes;var O=l&134217727;return O!==0?(l=O&~m,l!==0?h=St(l):(b&=O,b!==0?h=St(b):s||(s=O&~e,s!==0&&(h=St(s))))):(O=l&~m,O!==0?h=St(O):b!==0?h=St(b):s||(s=l&~e,s!==0&&(h=St(s)))),h===0?0:i!==0&&i!==h&&(i&m)===0&&(m=h&-h,s=i&-i,m>=s||m===32&&(s&4194048)!==0)?i:h}function wt(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function ae(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ie(){var e=It;return It<<=1,(It&62914560)===0&&(It=4194304),e}function Ce(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function Hn(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Oi(e,i,s,l,h,m){var b=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var O=e.entanglements,Y=e.expirationTimes,st=e.hiddenUpdates;for(s=b&~s;0<s;){var mt=31-Ft(s),vt=1<<mt;O[mt]=0,Y[mt]=-1;var ot=st[mt];if(ot!==null)for(st[mt]=null,mt=0;mt<ot.length;mt++){var ct=ot[mt];ct!==null&&(ct.lane&=-536870913)}s&=~vt}l!==0&&Dl(e,l,0),m!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=m&~(b&~i))}function Dl(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-Ft(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|s&261930}function co(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var l=31-Ft(s),h=1<<l;h&i|e[l]&i&&(e[l]|=i),s&=~h}}function Ys(e,i){var s=i&-i;return s=(s&42)!==0?1:uo(s),(s&(e.suspendedLanes|i))!==0?0:s}function uo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function qs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function fo(){var e=V.p;return e!==0?e:(e=window.event,e===void 0?32:Y1(e.type))}function Xi(e,i){var s=V.p;try{return V.p=e,i()}finally{V.p=s}}var xi=Math.random().toString(36).slice(2),hn="__reactFiber$"+xi,Cn="__reactProps$"+xi,Pi="__reactContainer$"+xi,js="__reactEvents$"+xi,Zs="__reactListeners$"+xi,Ul="__reactHandles$"+xi,ho="__reactResources$"+xi,ds="__reactMarker$"+xi;function po(e){delete e[hn],delete e[Cn],delete e[js],delete e[Zs],delete e[Ul]}function Na(e){var i=e[hn];if(i)return i;for(var s=e.parentNode;s;){if(i=s[Pi]||s[hn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=D1(e);e!==null;){if(s=e[hn])return s;e=D1(e)}return i}e=s,s=e.parentNode}return null}function La(e){if(e=e[hn]||e[Pi]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function ps(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function Oa(e){var i=e[ho];return i||(i=e[ho]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function P(e){e[ds]=!0}var $=new Set,lt={};function rt(e,i){nt(e,i),nt(e+"Capture",i)}function nt(e,i){for(lt[e]=i,e=0;e<i.length;e++)$.add(i[e])}var Nt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Vt={},Pt={};function kt(e){return Ke.call(Pt,e)?!0:Ke.call(Vt,e)?!1:Nt.test(e)?Pt[e]=!0:(Vt[e]=!0,!1)}function Yt(e,i,s){if(kt(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function $t(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function qt(e,i,s,l){if(l===null)e.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+l)}}function te(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ne(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Qe(e,i,s){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var h=l.get,m=l.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(b){s=""+b,m.call(this,b)}}),Object.defineProperty(e,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(b){s=""+b},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function qe(e){if(!e._valueTracker){var i=Ne(e)?"checked":"value";e._valueTracker=Qe(e,i,""+e[i])}}function ze(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return e&&(l=Ne(e)?e.checked?"true":"false":e.value),e=l,e!==s?(i.setValue(e),!0):!1}function Qt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Le=/[\n"\\]/g;function oe(e){return e.replace(Le,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Rn(e,i,s,l,h,m,b,O){e.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.type=b:e.removeAttribute("type"),i!=null?b==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+te(i)):e.value!==""+te(i)&&(e.value=""+te(i)):b!=="submit"&&b!=="reset"||e.removeAttribute("value"),i!=null?wn(e,b,te(i)):s!=null?wn(e,b,te(s)):l!=null&&e.removeAttribute("value"),h==null&&m!=null&&(e.defaultChecked=!!m),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),O!=null&&typeof O!="function"&&typeof O!="symbol"&&typeof O!="boolean"?e.name=""+te(O):e.removeAttribute("name")}function aa(e,i,s,l,h,m,b,O){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),i!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){qe(e);return}s=s!=null?""+te(s):"",i=i!=null?""+te(i):s,O||i===e.value||(e.value=i),e.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=O?e.checked:!!l,e.defaultChecked=!!l,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(e.name=b),qe(e)}function wn(e,i,s){i==="number"&&Qt(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function yi(e,i,s,l){if(e=e.options,i){i={};for(var h=0;h<s.length;h++)i["$"+s[h]]=!0;for(s=0;s<e.length;s++)h=i.hasOwnProperty("$"+e[s].value),e[s].selected!==h&&(e[s].selected=h),h&&l&&(e[s].defaultSelected=!0)}else{for(s=""+te(s),i=null,h=0;h<e.length;h++){if(e[h].value===s){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function Be(e,i,s){if(i!=null&&(i=""+te(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+te(s):""}function Dn(e,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(G(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=te(i),e.defaultValue=s,l=e.textContent,l===s&&l!==""&&l!==null&&(e.value=l),qe(e)}function vn(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var Un=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Nn(e,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,s):typeof s!="number"||s===0||Un.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function Ks(e,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&s[h]!==l&&Nn(e,h,l)}else for(var m in i)i.hasOwnProperty(m)&&Nn(e,m,i[m])}function zi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ax=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Nl(e){return Ax.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function sa(){}var Wu=null;function Yu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qs=null,Js=null;function Sm(e){var i=La(e);if(i&&(e=i.stateNode)){var s=e[Cn]||null;t:switch(e=i.stateNode,i.type){case"input":if(Rn(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+oe(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==e&&l.form===e.form){var h=l[Cn]||null;if(!h)throw Error(a(90));Rn(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===e.form&&ze(l)}break t;case"textarea":Be(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&yi(e,!!s.multiple,i,!1)}}}var qu=!1;function Mm(e,i,s){if(qu)return e(i,s);qu=!0;try{var l=e(i);return l}finally{if(qu=!1,(Qs!==null||Js!==null)&&(xc(),Qs&&(i=Qs,e=Js,Js=Qs=null,Sm(i),e)))for(i=0;i<e.length;i++)Sm(e[i])}}function mo(e,i){var s=e.stateNode;if(s===null)return null;var l=s[Cn]||null;if(l===null)return null;s=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var ra=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ju=!1;if(ra)try{var go={};Object.defineProperty(go,"passive",{get:function(){ju=!0}}),window.addEventListener("test",go,go),window.removeEventListener("test",go,go)}catch{ju=!1}var Pa=null,Zu=null,Ll=null;function bm(){if(Ll)return Ll;var e,i=Zu,s=i.length,l,h="value"in Pa?Pa.value:Pa.textContent,m=h.length;for(e=0;e<s&&i[e]===h[e];e++);var b=s-e;for(l=1;l<=b&&i[s-l]===h[m-l];l++);return Ll=h.slice(e,1<l?1-l:void 0)}function Ol(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Pl(){return!0}function Em(){return!1}function Zn(e){function i(s,l,h,m,b){this._reactName=s,this._targetInst=h,this.type=l,this.nativeEvent=m,this.target=b,this.currentTarget=null;for(var O in e)e.hasOwnProperty(O)&&(s=e[O],this[O]=s?s(m):m[O]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Pl:Em,this.isPropagationStopped=Em,this}return _(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Pl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Pl)},persist:function(){},isPersistent:Pl}),i}var ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zl=Zn(ms),_o=_({},ms,{view:0,detail:0}),Cx=Zn(_o),Ku,Qu,vo,Fl=_({},_o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$u,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vo&&(vo&&e.type==="mousemove"?(Ku=e.screenX-vo.screenX,Qu=e.screenY-vo.screenY):Qu=Ku=0,vo=e),Ku)},movementY:function(e){return"movementY"in e?e.movementY:Qu}}),Tm=Zn(Fl),Rx=_({},Fl,{dataTransfer:0}),wx=Zn(Rx),Dx=_({},_o,{relatedTarget:0}),Ju=Zn(Dx),Ux=_({},ms,{animationName:0,elapsedTime:0,pseudoElement:0}),Nx=Zn(Ux),Lx=_({},ms,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ox=Zn(Lx),Px=_({},ms,{data:0}),Am=Zn(Px),zx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ix={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bx(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=Ix[e])?!!i[e]:!1}function $u(){return Bx}var Hx=_({},_o,{key:function(e){if(e.key){var i=zx[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Ol(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Fx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$u,charCode:function(e){return e.type==="keypress"?Ol(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ol(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gx=Zn(Hx),Vx=_({},Fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cm=Zn(Vx),kx=_({},_o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$u}),Xx=Zn(kx),Wx=_({},ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yx=Zn(Wx),qx=_({},Fl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jx=Zn(qx),Zx=_({},ms,{newState:0,oldState:0}),Kx=Zn(Zx),Qx=[9,13,27,32],tf=ra&&"CompositionEvent"in window,xo=null;ra&&"documentMode"in document&&(xo=document.documentMode);var Jx=ra&&"TextEvent"in window&&!xo,Rm=ra&&(!tf||xo&&8<xo&&11>=xo),wm=" ",Dm=!1;function Um(e,i){switch(e){case"keyup":return Qx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $s=!1;function $x(e,i){switch(e){case"compositionend":return Nm(i);case"keypress":return i.which!==32?null:(Dm=!0,wm);case"textInput":return e=i.data,e===wm&&Dm?null:e;default:return null}}function ty(e,i){if($s)return e==="compositionend"||!tf&&Um(e,i)?(e=bm(),Ll=Zu=Pa=null,$s=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Rm&&i.locale!=="ko"?null:i.data;default:return null}}var ey={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lm(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!ey[e.type]:i==="textarea"}function Om(e,i,s,l){Qs?Js?Js.push(l):Js=[l]:Qs=l,i=Ac(i,"onChange"),0<i.length&&(s=new zl("onChange","change",null,s,l),e.push({event:s,listeners:i}))}var yo=null,So=null;function ny(e){g1(e,0)}function Il(e){var i=ps(e);if(ze(i))return e}function Pm(e,i){if(e==="change")return i}var zm=!1;if(ra){var ef;if(ra){var nf="oninput"in document;if(!nf){var Fm=document.createElement("div");Fm.setAttribute("oninput","return;"),nf=typeof Fm.oninput=="function"}ef=nf}else ef=!1;zm=ef&&(!document.documentMode||9<document.documentMode)}function Im(){yo&&(yo.detachEvent("onpropertychange",Bm),So=yo=null)}function Bm(e){if(e.propertyName==="value"&&Il(So)){var i=[];Om(i,So,e,Yu(e)),Mm(ny,i)}}function iy(e,i,s){e==="focusin"?(Im(),yo=i,So=s,yo.attachEvent("onpropertychange",Bm)):e==="focusout"&&Im()}function ay(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Il(So)}function sy(e,i){if(e==="click")return Il(i)}function ry(e,i){if(e==="input"||e==="change")return Il(i)}function oy(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var oi=typeof Object.is=="function"?Object.is:oy;function Mo(e,i){if(oi(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var h=s[l];if(!Ke.call(i,h)||!oi(e[h],i[h]))return!1}return!0}function Hm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gm(e,i){var s=Hm(e);e=0;for(var l;s;){if(s.nodeType===3){if(l=e+s.textContent.length,e<=i&&l>=i)return{node:s,offset:i-e};e=l}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=Hm(s)}}function Vm(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Vm(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function km(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=Qt(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=Qt(e.document)}return i}function af(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var ly=ra&&"documentMode"in document&&11>=document.documentMode,tr=null,sf=null,bo=null,rf=!1;function Xm(e,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;rf||tr==null||tr!==Qt(l)||(l=tr,"selectionStart"in l&&af(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),bo&&Mo(bo,l)||(bo=l,l=Ac(sf,"onSelect"),0<l.length&&(i=new zl("onSelect","select",null,i,s),e.push({event:i,listeners:l}),i.target=tr)))}function gs(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var er={animationend:gs("Animation","AnimationEnd"),animationiteration:gs("Animation","AnimationIteration"),animationstart:gs("Animation","AnimationStart"),transitionrun:gs("Transition","TransitionRun"),transitionstart:gs("Transition","TransitionStart"),transitioncancel:gs("Transition","TransitionCancel"),transitionend:gs("Transition","TransitionEnd")},of={},Wm={};ra&&(Wm=document.createElement("div").style,"AnimationEvent"in window||(delete er.animationend.animation,delete er.animationiteration.animation,delete er.animationstart.animation),"TransitionEvent"in window||delete er.transitionend.transition);function _s(e){if(of[e])return of[e];if(!er[e])return e;var i=er[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in Wm)return of[e]=i[s];return e}var Ym=_s("animationend"),qm=_s("animationiteration"),jm=_s("animationstart"),cy=_s("transitionrun"),uy=_s("transitionstart"),fy=_s("transitioncancel"),Zm=_s("transitionend"),Km=new Map,lf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lf.push("scrollEnd");function Fi(e,i){Km.set(e,i),rt(i,[e])}var Bl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Si=[],nr=0,cf=0;function Hl(){for(var e=nr,i=cf=nr=0;i<e;){var s=Si[i];Si[i++]=null;var l=Si[i];Si[i++]=null;var h=Si[i];Si[i++]=null;var m=Si[i];if(Si[i++]=null,l!==null&&h!==null){var b=l.pending;b===null?h.next=h:(h.next=b.next,b.next=h),l.pending=h}m!==0&&Qm(s,h,m)}}function Gl(e,i,s,l){Si[nr++]=e,Si[nr++]=i,Si[nr++]=s,Si[nr++]=l,cf|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function uf(e,i,s,l){return Gl(e,i,s,l),Vl(e)}function vs(e,i){return Gl(e,null,null,i),Vl(e)}function Qm(e,i,s){e.lanes|=s;var l=e.alternate;l!==null&&(l.lanes|=s);for(var h=!1,m=e.return;m!==null;)m.childLanes|=s,l=m.alternate,l!==null&&(l.childLanes|=s),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(h=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,h&&i!==null&&(h=31-Ft(s),e=m.hiddenUpdates,l=e[h],l===null?e[h]=[i]:l.push(i),i.lane=s|536870912),m):null}function Vl(e){if(50<Wo)throw Wo=0,xh=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var ir={};function hy(e,i,s,l){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(e,i,s,l){return new hy(e,i,s,l)}function ff(e){return e=e.prototype,!(!e||!e.isReactComponent)}function oa(e,i){var s=e.alternate;return s===null?(s=li(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function Jm(e,i){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function kl(e,i,s,l,h,m){var b=0;if(l=e,typeof e=="function")ff(e)&&(b=1);else if(typeof e=="string")b=_S(e,s,bt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=li(31,s,i,h),e.elementType=C,e.lanes=m,e;case R:return xs(s.children,h,m,i);case S:b=8,h|=24;break;case x:return e=li(12,s,i,h|2),e.elementType=x,e.lanes=m,e;case N:return e=li(13,s,i,h),e.elementType=N,e.lanes=m,e;case L:return e=li(19,s,i,h),e.elementType=L,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case M:b=10;break t;case T:b=9;break t;case A:b=11;break t;case U:b=14;break t;case z:b=16,l=null;break t}b=29,s=Error(a(130,e===null?"null":typeof e,"")),l=null}return i=li(b,s,i,h),i.elementType=e,i.type=l,i.lanes=m,i}function xs(e,i,s,l){return e=li(7,e,l,i),e.lanes=s,e}function hf(e,i,s){return e=li(6,e,null,i),e.lanes=s,e}function $m(e){var i=li(18,null,null,0);return i.stateNode=e,i}function df(e,i,s){return i=li(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var t0=new WeakMap;function Mi(e,i){if(typeof e=="object"&&e!==null){var s=t0.get(e);return s!==void 0?s:(i={value:e,source:i,stack:j(i)},t0.set(e,i),i)}return{value:e,source:i,stack:j(i)}}var ar=[],sr=0,Xl=null,Eo=0,bi=[],Ei=0,za=null,Wi=1,Yi="";function la(e,i){ar[sr++]=Eo,ar[sr++]=Xl,Xl=e,Eo=i}function e0(e,i,s){bi[Ei++]=Wi,bi[Ei++]=Yi,bi[Ei++]=za,za=e;var l=Wi;e=Yi;var h=32-Ft(l)-1;l&=~(1<<h),s+=1;var m=32-Ft(i)+h;if(30<m){var b=h-h%5;m=(l&(1<<b)-1).toString(32),l>>=b,h-=b,Wi=1<<32-Ft(i)+h|s<<h|l,Yi=m+e}else Wi=1<<m|s<<h|l,Yi=e}function pf(e){e.return!==null&&(la(e,1),e0(e,1,0))}function mf(e){for(;e===Xl;)Xl=ar[--sr],ar[sr]=null,Eo=ar[--sr],ar[sr]=null;for(;e===za;)za=bi[--Ei],bi[Ei]=null,Yi=bi[--Ei],bi[Ei]=null,Wi=bi[--Ei],bi[Ei]=null}function n0(e,i){bi[Ei++]=Wi,bi[Ei++]=Yi,bi[Ei++]=za,Wi=i.id,Yi=i.overflow,za=e}var Ln=null,je=null,Me=!1,Fa=null,Ti=!1,gf=Error(a(519));function Ia(e){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw To(Mi(i,e)),gf}function i0(e){var i=e.stateNode,s=e.type,l=e.memoizedProps;switch(i[hn]=e,i[Cn]=l,s){case"dialog":xe("cancel",i),xe("close",i);break;case"iframe":case"object":case"embed":xe("load",i);break;case"video":case"audio":for(s=0;s<qo.length;s++)xe(qo[s],i);break;case"source":xe("error",i);break;case"img":case"image":case"link":xe("error",i),xe("load",i);break;case"details":xe("toggle",i);break;case"input":xe("invalid",i),aa(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":xe("invalid",i);break;case"textarea":xe("invalid",i),Dn(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||y1(i.textContent,s)?(l.popover!=null&&(xe("beforetoggle",i),xe("toggle",i)),l.onScroll!=null&&xe("scroll",i),l.onScrollEnd!=null&&xe("scrollend",i),l.onClick!=null&&(i.onclick=sa),i=!0):i=!1,i||Ia(e,!0)}function a0(e){for(Ln=e.return;Ln;)switch(Ln.tag){case 5:case 31:case 13:Ti=!1;return;case 27:case 3:Ti=!0;return;default:Ln=Ln.return}}function rr(e){if(e!==Ln)return!1;if(!Me)return a0(e),Me=!0,!1;var i=e.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||Oh(e.type,e.memoizedProps)),s=!s),s&&je&&Ia(e),a0(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));je=w1(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));je=w1(e)}else i===27?(i=je,Ja(e.type)?(e=Bh,Bh=null,je=e):je=i):je=Ln?Ci(e.stateNode.nextSibling):null;return!0}function ys(){je=Ln=null,Me=!1}function _f(){var e=Fa;return e!==null&&($n===null?$n=e:$n.push.apply($n,e),Fa=null),e}function To(e){Fa===null?Fa=[e]:Fa.push(e)}var vf=B(null),Ss=null,ca=null;function Ba(e,i,s){ft(vf,i._currentValue),i._currentValue=s}function ua(e){e._currentValue=vf.current,et(vf)}function xf(e,i,s){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===s)break;e=e.return}}function yf(e,i,s,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var m=h.dependencies;if(m!==null){var b=h.child;m=m.firstContext;t:for(;m!==null;){var O=m;m=h;for(var Y=0;Y<i.length;Y++)if(O.context===i[Y]){m.lanes|=s,O=m.alternate,O!==null&&(O.lanes|=s),xf(m.return,s,e),l||(b=null);break t}m=O.next}}else if(h.tag===18){if(b=h.return,b===null)throw Error(a(341));b.lanes|=s,m=b.alternate,m!==null&&(m.lanes|=s),xf(b,s,e),b=null}else b=h.child;if(b!==null)b.return=h;else for(b=h;b!==null;){if(b===e){b=null;break}if(h=b.sibling,h!==null){h.return=b.return,b=h;break}b=b.return}h=b}}function or(e,i,s,l){e=null;for(var h=i,m=!1;h!==null;){if(!m){if((h.flags&524288)!==0)m=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var b=h.alternate;if(b===null)throw Error(a(387));if(b=b.memoizedProps,b!==null){var O=h.type;oi(h.pendingProps.value,b.value)||(e!==null?e.push(O):e=[O])}}else if(h===ut.current){if(b=h.alternate,b===null)throw Error(a(387));b.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(Jo):e=[Jo])}h=h.return}e!==null&&yf(i,e,s,l),i.flags|=262144}function Wl(e){for(e=e.firstContext;e!==null;){if(!oi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ms(e){Ss=e,ca=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function On(e){return s0(Ss,e)}function Yl(e,i){return Ss===null&&Ms(e),s0(e,i)}function s0(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},ca===null){if(e===null)throw Error(a(308));ca=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else ca=ca.next=i;return s}var dy=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},py=r.unstable_scheduleCallback,my=r.unstable_NormalPriority,dn={$$typeof:M,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Sf(){return{controller:new dy,data:new Map,refCount:0}}function Ao(e){e.refCount--,e.refCount===0&&py(my,function(){e.controller.abort()})}var Co=null,Mf=0,lr=0,cr=null;function gy(e,i){if(Co===null){var s=Co=[];Mf=0,lr=Th(),cr={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Mf++,i.then(r0,r0),i}function r0(){if(--Mf===0&&Co!==null){cr!==null&&(cr.status="fulfilled");var e=Co;Co=null,lr=0,cr=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function _y(e,i){var s=[],l={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<s.length;h++)(0,s[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),l}var o0=F.S;F.S=function(e,i){Xg=D(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&gy(e,i),o0!==null&&o0(e,i)};var bs=B(null);function bf(){var e=bs.current;return e!==null?e:Ye.pooledCache}function ql(e,i){i===null?ft(bs,bs.current):ft(bs,i.pool)}function l0(){var e=bf();return e===null?null:{parent:dn._currentValue,pool:e}}var ur=Error(a(460)),Ef=Error(a(474)),jl=Error(a(542)),Zl={then:function(){}};function c0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function u0(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(sa,sa),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,h0(e),e;default:if(typeof i.status=="string")i.then(sa,sa);else{if(e=Ye,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,h0(e),e}throw Ts=i,ur}}function Es(e){try{var i=e._init;return i(e._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Ts=s,ur):s}}var Ts=null;function f0(){if(Ts===null)throw Error(a(459));var e=Ts;return Ts=null,e}function h0(e){if(e===ur||e===jl)throw Error(a(483))}var fr=null,Ro=0;function Kl(e){var i=Ro;return Ro+=1,fr===null&&(fr=[]),u0(fr,e,i)}function wo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Ql(e,i){throw i.$$typeof===v?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function d0(e){function i(tt,Z){if(e){var at=tt.deletions;at===null?(tt.deletions=[Z],tt.flags|=16):at.push(Z)}}function s(tt,Z){if(!e)return null;for(;Z!==null;)i(tt,Z),Z=Z.sibling;return null}function l(tt){for(var Z=new Map;tt!==null;)tt.key!==null?Z.set(tt.key,tt):Z.set(tt.index,tt),tt=tt.sibling;return Z}function h(tt,Z){return tt=oa(tt,Z),tt.index=0,tt.sibling=null,tt}function m(tt,Z,at){return tt.index=at,e?(at=tt.alternate,at!==null?(at=at.index,at<Z?(tt.flags|=67108866,Z):at):(tt.flags|=67108866,Z)):(tt.flags|=1048576,Z)}function b(tt){return e&&tt.alternate===null&&(tt.flags|=67108866),tt}function O(tt,Z,at,_t){return Z===null||Z.tag!==6?(Z=hf(at,tt.mode,_t),Z.return=tt,Z):(Z=h(Z,at),Z.return=tt,Z)}function Y(tt,Z,at,_t){var Jt=at.type;return Jt===R?mt(tt,Z,at.props.children,_t,at.key):Z!==null&&(Z.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===z&&Es(Jt)===Z.type)?(Z=h(Z,at.props),wo(Z,at),Z.return=tt,Z):(Z=kl(at.type,at.key,at.props,null,tt.mode,_t),wo(Z,at),Z.return=tt,Z)}function st(tt,Z,at,_t){return Z===null||Z.tag!==4||Z.stateNode.containerInfo!==at.containerInfo||Z.stateNode.implementation!==at.implementation?(Z=df(at,tt.mode,_t),Z.return=tt,Z):(Z=h(Z,at.children||[]),Z.return=tt,Z)}function mt(tt,Z,at,_t,Jt){return Z===null||Z.tag!==7?(Z=xs(at,tt.mode,_t,Jt),Z.return=tt,Z):(Z=h(Z,at),Z.return=tt,Z)}function vt(tt,Z,at){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return Z=hf(""+Z,tt.mode,at),Z.return=tt,Z;if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case y:return at=kl(Z.type,Z.key,Z.props,null,tt.mode,at),wo(at,Z),at.return=tt,at;case E:return Z=df(Z,tt.mode,at),Z.return=tt,Z;case z:return Z=Es(Z),vt(tt,Z,at)}if(G(Z)||k(Z))return Z=xs(Z,tt.mode,at,null),Z.return=tt,Z;if(typeof Z.then=="function")return vt(tt,Kl(Z),at);if(Z.$$typeof===M)return vt(tt,Yl(tt,Z),at);Ql(tt,Z)}return null}function ot(tt,Z,at,_t){var Jt=Z!==null?Z.key:null;if(typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint")return Jt!==null?null:O(tt,Z,""+at,_t);if(typeof at=="object"&&at!==null){switch(at.$$typeof){case y:return at.key===Jt?Y(tt,Z,at,_t):null;case E:return at.key===Jt?st(tt,Z,at,_t):null;case z:return at=Es(at),ot(tt,Z,at,_t)}if(G(at)||k(at))return Jt!==null?null:mt(tt,Z,at,_t,null);if(typeof at.then=="function")return ot(tt,Z,Kl(at),_t);if(at.$$typeof===M)return ot(tt,Z,Yl(tt,at),_t);Ql(tt,at)}return null}function ct(tt,Z,at,_t,Jt){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return tt=tt.get(at)||null,O(Z,tt,""+_t,Jt);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case y:return tt=tt.get(_t.key===null?at:_t.key)||null,Y(Z,tt,_t,Jt);case E:return tt=tt.get(_t.key===null?at:_t.key)||null,st(Z,tt,_t,Jt);case z:return _t=Es(_t),ct(tt,Z,at,_t,Jt)}if(G(_t)||k(_t))return tt=tt.get(at)||null,mt(Z,tt,_t,Jt,null);if(typeof _t.then=="function")return ct(tt,Z,at,Kl(_t),Jt);if(_t.$$typeof===M)return ct(tt,Z,at,Yl(Z,_t),Jt);Ql(Z,_t)}return null}function Xt(tt,Z,at,_t){for(var Jt=null,Re=null,Zt=Z,de=Z=0,Se=null;Zt!==null&&de<at.length;de++){Zt.index>de?(Se=Zt,Zt=null):Se=Zt.sibling;var we=ot(tt,Zt,at[de],_t);if(we===null){Zt===null&&(Zt=Se);break}e&&Zt&&we.alternate===null&&i(tt,Zt),Z=m(we,Z,de),Re===null?Jt=we:Re.sibling=we,Re=we,Zt=Se}if(de===at.length)return s(tt,Zt),Me&&la(tt,de),Jt;if(Zt===null){for(;de<at.length;de++)Zt=vt(tt,at[de],_t),Zt!==null&&(Z=m(Zt,Z,de),Re===null?Jt=Zt:Re.sibling=Zt,Re=Zt);return Me&&la(tt,de),Jt}for(Zt=l(Zt);de<at.length;de++)Se=ct(Zt,tt,de,at[de],_t),Se!==null&&(e&&Se.alternate!==null&&Zt.delete(Se.key===null?de:Se.key),Z=m(Se,Z,de),Re===null?Jt=Se:Re.sibling=Se,Re=Se);return e&&Zt.forEach(function(is){return i(tt,is)}),Me&&la(tt,de),Jt}function ee(tt,Z,at,_t){if(at==null)throw Error(a(151));for(var Jt=null,Re=null,Zt=Z,de=Z=0,Se=null,we=at.next();Zt!==null&&!we.done;de++,we=at.next()){Zt.index>de?(Se=Zt,Zt=null):Se=Zt.sibling;var is=ot(tt,Zt,we.value,_t);if(is===null){Zt===null&&(Zt=Se);break}e&&Zt&&is.alternate===null&&i(tt,Zt),Z=m(is,Z,de),Re===null?Jt=is:Re.sibling=is,Re=is,Zt=Se}if(we.done)return s(tt,Zt),Me&&la(tt,de),Jt;if(Zt===null){for(;!we.done;de++,we=at.next())we=vt(tt,we.value,_t),we!==null&&(Z=m(we,Z,de),Re===null?Jt=we:Re.sibling=we,Re=we);return Me&&la(tt,de),Jt}for(Zt=l(Zt);!we.done;de++,we=at.next())we=ct(Zt,tt,de,we.value,_t),we!==null&&(e&&we.alternate!==null&&Zt.delete(we.key===null?de:we.key),Z=m(we,Z,de),Re===null?Jt=we:Re.sibling=we,Re=we);return e&&Zt.forEach(function(RS){return i(tt,RS)}),Me&&la(tt,de),Jt}function Xe(tt,Z,at,_t){if(typeof at=="object"&&at!==null&&at.type===R&&at.key===null&&(at=at.props.children),typeof at=="object"&&at!==null){switch(at.$$typeof){case y:t:{for(var Jt=at.key;Z!==null;){if(Z.key===Jt){if(Jt=at.type,Jt===R){if(Z.tag===7){s(tt,Z.sibling),_t=h(Z,at.props.children),_t.return=tt,tt=_t;break t}}else if(Z.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===z&&Es(Jt)===Z.type){s(tt,Z.sibling),_t=h(Z,at.props),wo(_t,at),_t.return=tt,tt=_t;break t}s(tt,Z);break}else i(tt,Z);Z=Z.sibling}at.type===R?(_t=xs(at.props.children,tt.mode,_t,at.key),_t.return=tt,tt=_t):(_t=kl(at.type,at.key,at.props,null,tt.mode,_t),wo(_t,at),_t.return=tt,tt=_t)}return b(tt);case E:t:{for(Jt=at.key;Z!==null;){if(Z.key===Jt)if(Z.tag===4&&Z.stateNode.containerInfo===at.containerInfo&&Z.stateNode.implementation===at.implementation){s(tt,Z.sibling),_t=h(Z,at.children||[]),_t.return=tt,tt=_t;break t}else{s(tt,Z);break}else i(tt,Z);Z=Z.sibling}_t=df(at,tt.mode,_t),_t.return=tt,tt=_t}return b(tt);case z:return at=Es(at),Xe(tt,Z,at,_t)}if(G(at))return Xt(tt,Z,at,_t);if(k(at)){if(Jt=k(at),typeof Jt!="function")throw Error(a(150));return at=Jt.call(at),ee(tt,Z,at,_t)}if(typeof at.then=="function")return Xe(tt,Z,Kl(at),_t);if(at.$$typeof===M)return Xe(tt,Z,Yl(tt,at),_t);Ql(tt,at)}return typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint"?(at=""+at,Z!==null&&Z.tag===6?(s(tt,Z.sibling),_t=h(Z,at),_t.return=tt,tt=_t):(s(tt,Z),_t=hf(at,tt.mode,_t),_t.return=tt,tt=_t),b(tt)):s(tt,Z)}return function(tt,Z,at,_t){try{Ro=0;var Jt=Xe(tt,Z,at,_t);return fr=null,Jt}catch(Zt){if(Zt===ur||Zt===jl)throw Zt;var Re=li(29,Zt,null,tt.mode);return Re.lanes=_t,Re.return=tt,Re}}}var As=d0(!0),p0=d0(!1),Ha=!1;function Tf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Af(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ga(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Va(e,i,s){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Oe&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=Vl(e),Qm(e,null,s),i}return Gl(e,l,i,s),Vl(e)}function Do(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,co(e,s)}}function Cf(e,i){var s=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var h=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var b={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?h=m=b:m=m.next=b,s=s.next}while(s!==null);m===null?h=m=i:m=m.next=i}else h=m=i;s={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var Rf=!1;function Uo(){if(Rf){var e=cr;if(e!==null)throw e}}function No(e,i,s,l){Rf=!1;var h=e.updateQueue;Ha=!1;var m=h.firstBaseUpdate,b=h.lastBaseUpdate,O=h.shared.pending;if(O!==null){h.shared.pending=null;var Y=O,st=Y.next;Y.next=null,b===null?m=st:b.next=st,b=Y;var mt=e.alternate;mt!==null&&(mt=mt.updateQueue,O=mt.lastBaseUpdate,O!==b&&(O===null?mt.firstBaseUpdate=st:O.next=st,mt.lastBaseUpdate=Y))}if(m!==null){var vt=h.baseState;b=0,mt=st=Y=null,O=m;do{var ot=O.lane&-536870913,ct=ot!==O.lane;if(ct?(ye&ot)===ot:(l&ot)===ot){ot!==0&&ot===lr&&(Rf=!0),mt!==null&&(mt=mt.next={lane:0,tag:O.tag,payload:O.payload,callback:null,next:null});t:{var Xt=e,ee=O;ot=i;var Xe=s;switch(ee.tag){case 1:if(Xt=ee.payload,typeof Xt=="function"){vt=Xt.call(Xe,vt,ot);break t}vt=Xt;break t;case 3:Xt.flags=Xt.flags&-65537|128;case 0:if(Xt=ee.payload,ot=typeof Xt=="function"?Xt.call(Xe,vt,ot):Xt,ot==null)break t;vt=_({},vt,ot);break t;case 2:Ha=!0}}ot=O.callback,ot!==null&&(e.flags|=64,ct&&(e.flags|=8192),ct=h.callbacks,ct===null?h.callbacks=[ot]:ct.push(ot))}else ct={lane:ot,tag:O.tag,payload:O.payload,callback:O.callback,next:null},mt===null?(st=mt=ct,Y=vt):mt=mt.next=ct,b|=ot;if(O=O.next,O===null){if(O=h.shared.pending,O===null)break;ct=O,O=ct.next,ct.next=null,h.lastBaseUpdate=ct,h.shared.pending=null}}while(!0);mt===null&&(Y=vt),h.baseState=Y,h.firstBaseUpdate=st,h.lastBaseUpdate=mt,m===null&&(h.shared.lanes=0),qa|=b,e.lanes=b,e.memoizedState=vt}}function m0(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function g0(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)m0(s[e],i)}var hr=B(null),Jl=B(0);function _0(e,i){e=xa,ft(Jl,e),ft(hr,i),xa=e|i.baseLanes}function wf(){ft(Jl,xa),ft(hr,hr.current)}function Df(){xa=Jl.current,et(hr),et(Jl)}var ci=B(null),Ai=null;function ka(e){var i=e.alternate;ft(cn,cn.current&1),ft(ci,e),Ai===null&&(i===null||hr.current!==null||i.memoizedState!==null)&&(Ai=e)}function Uf(e){ft(cn,cn.current),ft(ci,e),Ai===null&&(Ai=e)}function v0(e){e.tag===22?(ft(cn,cn.current),ft(ci,e),Ai===null&&(Ai=e)):Xa()}function Xa(){ft(cn,cn.current),ft(ci,ci.current)}function ui(e){et(ci),Ai===e&&(Ai=null),et(cn)}var cn=B(0);function $l(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Fh(s)||Ih(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var fa=0,fe=null,Ve=null,pn=null,tc=!1,dr=!1,Cs=!1,ec=0,Lo=0,pr=null,vy=0;function rn(){throw Error(a(321))}function Nf(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!oi(e[s],i[s]))return!1;return!0}function Lf(e,i,s,l,h,m){return fa=m,fe=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,F.H=e===null||e.memoizedState===null?eg:jf,Cs=!1,m=s(l,h),Cs=!1,dr&&(m=y0(i,s,l,h)),x0(e),m}function x0(e){F.H=zo;var i=Ve!==null&&Ve.next!==null;if(fa=0,pn=Ve=fe=null,tc=!1,Lo=0,pr=null,i)throw Error(a(300));e===null||mn||(e=e.dependencies,e!==null&&Wl(e)&&(mn=!0))}function y0(e,i,s,l){fe=e;var h=0;do{if(dr&&(pr=null),Lo=0,dr=!1,25<=h)throw Error(a(301));if(h+=1,pn=Ve=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}F.H=ng,m=i(s,l)}while(dr);return m}function xy(){var e=F.H,i=e.useState()[0];return i=typeof i.then=="function"?Oo(i):i,e=e.useState()[0],(Ve!==null?Ve.memoizedState:null)!==e&&(fe.flags|=1024),i}function Of(){var e=ec!==0;return ec=0,e}function Pf(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function zf(e){if(tc){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}tc=!1}fa=0,pn=Ve=fe=null,dr=!1,Lo=ec=0,pr=null}function Xn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?fe.memoizedState=pn=e:pn=pn.next=e,pn}function un(){if(Ve===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Ve.next;var i=pn===null?fe.memoizedState:pn.next;if(i!==null)pn=i,Ve=e;else{if(e===null)throw fe.alternate===null?Error(a(467)):Error(a(310));Ve=e,e={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},pn===null?fe.memoizedState=pn=e:pn=pn.next=e}return pn}function nc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Oo(e){var i=Lo;return Lo+=1,pr===null&&(pr=[]),e=u0(pr,e,i),i=fe,(pn===null?i.memoizedState:pn.next)===null&&(i=i.alternate,F.H=i===null||i.memoizedState===null?eg:jf),e}function ic(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Oo(e);if(e.$$typeof===M)return On(e)}throw Error(a(438,String(e)))}function Ff(e){var i=null,s=fe.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=fe.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=nc(),fe.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),l=0;l<e;l++)s[l]=w;return i.index++,s}function ha(e,i){return typeof i=="function"?i(e):i}function ac(e){var i=un();return If(i,Ve,e)}function If(e,i,s){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var h=e.baseQueue,m=l.pending;if(m!==null){if(h!==null){var b=h.next;h.next=m.next,m.next=b}i.baseQueue=h=m,l.pending=null}if(m=e.baseState,h===null)e.memoizedState=m;else{i=h.next;var O=b=null,Y=null,st=i,mt=!1;do{var vt=st.lane&-536870913;if(vt!==st.lane?(ye&vt)===vt:(fa&vt)===vt){var ot=st.revertLane;if(ot===0)Y!==null&&(Y=Y.next={lane:0,revertLane:0,gesture:null,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null}),vt===lr&&(mt=!0);else if((fa&ot)===ot){st=st.next,ot===lr&&(mt=!0);continue}else vt={lane:0,revertLane:st.revertLane,gesture:null,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},Y===null?(O=Y=vt,b=m):Y=Y.next=vt,fe.lanes|=ot,qa|=ot;vt=st.action,Cs&&s(m,vt),m=st.hasEagerState?st.eagerState:s(m,vt)}else ot={lane:vt,revertLane:st.revertLane,gesture:st.gesture,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},Y===null?(O=Y=ot,b=m):Y=Y.next=ot,fe.lanes|=vt,qa|=vt;st=st.next}while(st!==null&&st!==i);if(Y===null?b=m:Y.next=O,!oi(m,e.memoizedState)&&(mn=!0,mt&&(s=cr,s!==null)))throw s;e.memoizedState=m,e.baseState=b,e.baseQueue=Y,l.lastRenderedState=m}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Bf(e){var i=un(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var l=s.dispatch,h=s.pending,m=i.memoizedState;if(h!==null){s.pending=null;var b=h=h.next;do m=e(m,b.action),b=b.next;while(b!==h);oi(m,i.memoizedState)||(mn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,l]}function S0(e,i,s){var l=fe,h=un(),m=Me;if(m){if(s===void 0)throw Error(a(407));s=s()}else s=i();var b=!oi((Ve||h).memoizedState,s);if(b&&(h.memoizedState=s,mn=!0),h=h.queue,Vf(E0.bind(null,l,h,e),[e]),h.getSnapshot!==i||b||pn!==null&&pn.memoizedState.tag&1){if(l.flags|=2048,mr(9,{destroy:void 0},b0.bind(null,l,h,s,i),null),Ye===null)throw Error(a(349));m||(fa&127)!==0||M0(l,i,s)}return s}function M0(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=fe.updateQueue,i===null?(i=nc(),fe.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function b0(e,i,s,l){i.value=s,i.getSnapshot=l,T0(i)&&A0(e)}function E0(e,i,s){return s(function(){T0(i)&&A0(e)})}function T0(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!oi(e,s)}catch{return!0}}function A0(e){var i=vs(e,2);i!==null&&ti(i,e,2)}function Hf(e){var i=Xn();if(typeof e=="function"){var s=e;if(e=s(),Cs){Ht(!0);try{s()}finally{Ht(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:e},i}function C0(e,i,s,l){return e.baseState=s,If(e,Ve,typeof l=="function"?l:ha)}function yy(e,i,s,l,h){if(oc(e))throw Error(a(485));if(e=i.action,e!==null){var m={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){m.listeners.push(b)}};F.T!==null?s(!0):m.isTransition=!1,l(m),s=i.pending,s===null?(m.next=i.pending=m,R0(i,m)):(m.next=s.next,i.pending=s.next=m)}}function R0(e,i){var s=i.action,l=i.payload,h=e.state;if(i.isTransition){var m=F.T,b={};F.T=b;try{var O=s(h,l),Y=F.S;Y!==null&&Y(b,O),w0(e,i,O)}catch(st){Gf(e,i,st)}finally{m!==null&&b.types!==null&&(m.types=b.types),F.T=m}}else try{m=s(h,l),w0(e,i,m)}catch(st){Gf(e,i,st)}}function w0(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){D0(e,i,l)},function(l){return Gf(e,i,l)}):D0(e,i,s)}function D0(e,i,s){i.status="fulfilled",i.value=s,U0(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,R0(e,s)))}function Gf(e,i,s){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,U0(i),i=i.next;while(i!==l)}e.action=null}function U0(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function N0(e,i){return i}function L0(e,i){if(Me){var s=Ye.formState;if(s!==null){t:{var l=fe;if(Me){if(je){e:{for(var h=je,m=Ti;h.nodeType!==8;){if(!m){h=null;break e}if(h=Ci(h.nextSibling),h===null){h=null;break e}}m=h.data,h=m==="F!"||m==="F"?h:null}if(h){je=Ci(h.nextSibling),l=h.data==="F!";break t}}Ia(l)}l=!1}l&&(i=s[0])}}return s=Xn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:N0,lastRenderedState:i},s.queue=l,s=J0.bind(null,fe,l),l.dispatch=s,l=Hf(!1),m=qf.bind(null,fe,!1,l.queue),l=Xn(),h={state:i,dispatch:null,action:e,pending:null},l.queue=h,s=yy.bind(null,fe,h,m,s),h.dispatch=s,l.memoizedState=e,[i,s,!1]}function O0(e){var i=un();return P0(i,Ve,e)}function P0(e,i,s){if(i=If(e,i,N0)[0],e=ac(ha)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Oo(i)}catch(b){throw b===ur?jl:b}else l=i;i=un();var h=i.queue,m=h.dispatch;return s!==i.memoizedState&&(fe.flags|=2048,mr(9,{destroy:void 0},Sy.bind(null,h,s),null)),[l,m,e]}function Sy(e,i){e.action=i}function z0(e){var i=un(),s=Ve;if(s!==null)return P0(i,s,e);un(),i=i.memoizedState,s=un();var l=s.queue.dispatch;return s.memoizedState=e,[i,l,!1]}function mr(e,i,s,l){return e={tag:e,create:s,deps:l,inst:i,next:null},i=fe.updateQueue,i===null&&(i=nc(),fe.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(l=s.next,s.next=e,e.next=l,i.lastEffect=e),e}function F0(){return un().memoizedState}function sc(e,i,s,l){var h=Xn();fe.flags|=e,h.memoizedState=mr(1|i,{destroy:void 0},s,l===void 0?null:l)}function rc(e,i,s,l){var h=un();l=l===void 0?null:l;var m=h.memoizedState.inst;Ve!==null&&l!==null&&Nf(l,Ve.memoizedState.deps)?h.memoizedState=mr(i,m,s,l):(fe.flags|=e,h.memoizedState=mr(1|i,m,s,l))}function I0(e,i){sc(8390656,8,e,i)}function Vf(e,i){rc(2048,8,e,i)}function My(e){fe.flags|=4;var i=fe.updateQueue;if(i===null)i=nc(),fe.updateQueue=i,i.events=[e];else{var s=i.events;s===null?i.events=[e]:s.push(e)}}function B0(e){var i=un().memoizedState;return My({ref:i,nextImpl:e}),function(){if((Oe&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function H0(e,i){return rc(4,2,e,i)}function G0(e,i){return rc(4,4,e,i)}function V0(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function k0(e,i,s){s=s!=null?s.concat([e]):null,rc(4,4,V0.bind(null,i,e),s)}function kf(){}function X0(e,i){var s=un();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&Nf(i,l[1])?l[0]:(s.memoizedState=[e,i],e)}function W0(e,i){var s=un();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&Nf(i,l[1]))return l[0];if(l=e(),Cs){Ht(!0);try{e()}finally{Ht(!1)}}return s.memoizedState=[l,i],l}function Xf(e,i,s){return s===void 0||(fa&1073741824)!==0&&(ye&261930)===0?e.memoizedState=i:(e.memoizedState=s,e=Yg(),fe.lanes|=e,qa|=e,s)}function Y0(e,i,s,l){return oi(s,i)?s:hr.current!==null?(e=Xf(e,s,l),oi(e,i)||(mn=!0),e):(fa&42)===0||(fa&1073741824)!==0&&(ye&261930)===0?(mn=!0,e.memoizedState=s):(e=Yg(),fe.lanes|=e,qa|=e,i)}function q0(e,i,s,l,h){var m=V.p;V.p=m!==0&&8>m?m:8;var b=F.T,O={};F.T=O,qf(e,!1,i,s);try{var Y=h(),st=F.S;if(st!==null&&st(O,Y),Y!==null&&typeof Y=="object"&&typeof Y.then=="function"){var mt=_y(Y,l);Po(e,i,mt,di(e))}else Po(e,i,l,di(e))}catch(vt){Po(e,i,{then:function(){},status:"rejected",reason:vt},di())}finally{V.p=m,b!==null&&O.types!==null&&(b.types=O.types),F.T=b}}function by(){}function Wf(e,i,s,l){if(e.tag!==5)throw Error(a(476));var h=j0(e).queue;q0(e,h,i,Q,s===null?by:function(){return Z0(e),s(l)})}function j0(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:Q,baseState:Q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:Q},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Z0(e){var i=j0(e);i.next===null&&(i=e.alternate.memoizedState),Po(e,i.next.queue,{},di())}function Yf(){return On(Jo)}function K0(){return un().memoizedState}function Q0(){return un().memoizedState}function Ey(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=di();e=Ga(s);var l=Va(i,e,s);l!==null&&(ti(l,i,s),Do(l,i,s)),i={cache:Sf()},e.payload=i;return}i=i.return}}function Ty(e,i,s){var l=di();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},oc(e)?$0(i,s):(s=uf(e,i,s,l),s!==null&&(ti(s,e,l),tg(s,i,l)))}function J0(e,i,s){var l=di();Po(e,i,s,l)}function Po(e,i,s,l){var h={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(oc(e))$0(i,h);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var b=i.lastRenderedState,O=m(b,s);if(h.hasEagerState=!0,h.eagerState=O,oi(O,b))return Gl(e,i,h,0),Ye===null&&Hl(),!1}catch{}if(s=uf(e,i,h,l),s!==null)return ti(s,e,l),tg(s,i,l),!0}return!1}function qf(e,i,s,l){if(l={lane:2,revertLane:Th(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},oc(e)){if(i)throw Error(a(479))}else i=uf(e,s,l,2),i!==null&&ti(i,e,2)}function oc(e){var i=e.alternate;return e===fe||i!==null&&i===fe}function $0(e,i){dr=tc=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function tg(e,i,s){if((s&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,co(e,s)}}var zo={readContext:On,use:ic,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn,useHostTransitionStatus:rn,useFormState:rn,useActionState:rn,useOptimistic:rn,useMemoCache:rn,useCacheRefresh:rn};zo.useEffectEvent=rn;var eg={readContext:On,use:ic,useCallback:function(e,i){return Xn().memoizedState=[e,i===void 0?null:i],e},useContext:On,useEffect:I0,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,sc(4194308,4,V0.bind(null,i,e),s)},useLayoutEffect:function(e,i){return sc(4194308,4,e,i)},useInsertionEffect:function(e,i){sc(4,2,e,i)},useMemo:function(e,i){var s=Xn();i=i===void 0?null:i;var l=e();if(Cs){Ht(!0);try{e()}finally{Ht(!1)}}return s.memoizedState=[l,i],l},useReducer:function(e,i,s){var l=Xn();if(s!==void 0){var h=s(i);if(Cs){Ht(!0);try{s(i)}finally{Ht(!1)}}}else h=i;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=Ty.bind(null,fe,e),[l.memoizedState,e]},useRef:function(e){var i=Xn();return e={current:e},i.memoizedState=e},useState:function(e){e=Hf(e);var i=e.queue,s=J0.bind(null,fe,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:kf,useDeferredValue:function(e,i){var s=Xn();return Xf(s,e,i)},useTransition:function(){var e=Hf(!1);return e=q0.bind(null,fe,e.queue,!0,!1),Xn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var l=fe,h=Xn();if(Me){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),Ye===null)throw Error(a(349));(ye&127)!==0||M0(l,i,s)}h.memoizedState=s;var m={value:s,getSnapshot:i};return h.queue=m,I0(E0.bind(null,l,m,e),[e]),l.flags|=2048,mr(9,{destroy:void 0},b0.bind(null,l,m,s,i),null),s},useId:function(){var e=Xn(),i=Ye.identifierPrefix;if(Me){var s=Yi,l=Wi;s=(l&~(1<<32-Ft(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=ec++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=vy++,i="_"+i+"r_"+s.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:Yf,useFormState:L0,useActionState:L0,useOptimistic:function(e){var i=Xn();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=qf.bind(null,fe,!0,s),s.dispatch=i,[e,i]},useMemoCache:Ff,useCacheRefresh:function(){return Xn().memoizedState=Ey.bind(null,fe)},useEffectEvent:function(e){var i=Xn(),s={impl:e};return i.memoizedState=s,function(){if((Oe&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},jf={readContext:On,use:ic,useCallback:X0,useContext:On,useEffect:Vf,useImperativeHandle:k0,useInsertionEffect:H0,useLayoutEffect:G0,useMemo:W0,useReducer:ac,useRef:F0,useState:function(){return ac(ha)},useDebugValue:kf,useDeferredValue:function(e,i){var s=un();return Y0(s,Ve.memoizedState,e,i)},useTransition:function(){var e=ac(ha)[0],i=un().memoizedState;return[typeof e=="boolean"?e:Oo(e),i]},useSyncExternalStore:S0,useId:K0,useHostTransitionStatus:Yf,useFormState:O0,useActionState:O0,useOptimistic:function(e,i){var s=un();return C0(s,Ve,e,i)},useMemoCache:Ff,useCacheRefresh:Q0};jf.useEffectEvent=B0;var ng={readContext:On,use:ic,useCallback:X0,useContext:On,useEffect:Vf,useImperativeHandle:k0,useInsertionEffect:H0,useLayoutEffect:G0,useMemo:W0,useReducer:Bf,useRef:F0,useState:function(){return Bf(ha)},useDebugValue:kf,useDeferredValue:function(e,i){var s=un();return Ve===null?Xf(s,e,i):Y0(s,Ve.memoizedState,e,i)},useTransition:function(){var e=Bf(ha)[0],i=un().memoizedState;return[typeof e=="boolean"?e:Oo(e),i]},useSyncExternalStore:S0,useId:K0,useHostTransitionStatus:Yf,useFormState:z0,useActionState:z0,useOptimistic:function(e,i){var s=un();return Ve!==null?C0(s,Ve,e,i):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:Ff,useCacheRefresh:Q0};ng.useEffectEvent=B0;function Zf(e,i,s,l){i=e.memoizedState,s=s(l,i),s=s==null?i:_({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var Kf={enqueueSetState:function(e,i,s){e=e._reactInternals;var l=di(),h=Ga(l);h.payload=i,s!=null&&(h.callback=s),i=Va(e,h,l),i!==null&&(ti(i,e,l),Do(i,e,l))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var l=di(),h=Ga(l);h.tag=1,h.payload=i,s!=null&&(h.callback=s),i=Va(e,h,l),i!==null&&(ti(i,e,l),Do(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=di(),l=Ga(s);l.tag=2,i!=null&&(l.callback=i),i=Va(e,l,s),i!==null&&(ti(i,e,s),Do(i,e,s))}};function ig(e,i,s,l,h,m,b){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,m,b):i.prototype&&i.prototype.isPureReactComponent?!Mo(s,l)||!Mo(h,m):!0}function ag(e,i,s,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==e&&Kf.enqueueReplaceState(i,i.state,null)}function Rs(e,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(e=e.defaultProps){s===i&&(s=_({},s));for(var h in e)s[h]===void 0&&(s[h]=e[h])}return s}function sg(e){Bl(e)}function rg(e){console.error(e)}function og(e){Bl(e)}function lc(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function lg(e,i,s){try{var l=e.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Qf(e,i,s){return s=Ga(s),s.tag=3,s.payload={element:null},s.callback=function(){lc(e,i)},s}function cg(e){return e=Ga(e),e.tag=3,e}function ug(e,i,s,l){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var m=l.value;e.payload=function(){return h(m)},e.callback=function(){lg(i,s,l)}}var b=s.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(e.callback=function(){lg(i,s,l),typeof h!="function"&&(ja===null?ja=new Set([this]):ja.add(this));var O=l.stack;this.componentDidCatch(l.value,{componentStack:O!==null?O:""})})}function Ay(e,i,s,l,h){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&or(i,s,h,!0),s=ci.current,s!==null){switch(s.tag){case 31:case 13:return Ai===null?yc():s.alternate===null&&on===0&&(on=3),s.flags&=-257,s.flags|=65536,s.lanes=h,l===Zl?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),Mh(e,l,h)),!1;case 22:return s.flags|=65536,l===Zl?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),Mh(e,l,h)),!1}throw Error(a(435,s.tag))}return Mh(e,l,h),yc(),!1}if(Me)return i=ci.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==gf&&(e=Error(a(422),{cause:l}),To(Mi(e,s)))):(l!==gf&&(i=Error(a(423),{cause:l}),To(Mi(i,s))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=Mi(l,s),h=Qf(e.stateNode,l,h),Cf(e,h),on!==4&&(on=2)),!1;var m=Error(a(520),{cause:l});if(m=Mi(m,s),Xo===null?Xo=[m]:Xo.push(m),on!==4&&(on=2),i===null)return!0;l=Mi(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=h&-h,s.lanes|=e,e=Qf(s.stateNode,l,e),Cf(s,e),!1;case 1:if(i=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ja===null||!ja.has(m))))return s.flags|=65536,h&=-h,s.lanes|=h,h=cg(h),ug(h,e,s,l),Cf(s,h),!1}s=s.return}while(s!==null);return!1}var Jf=Error(a(461)),mn=!1;function Pn(e,i,s,l){i.child=e===null?p0(i,null,s,l):As(i,e.child,s,l)}function fg(e,i,s,l,h){s=s.render;var m=i.ref;if("ref"in l){var b={};for(var O in l)O!=="ref"&&(b[O]=l[O])}else b=l;return Ms(i),l=Lf(e,i,s,b,m,h),O=Of(),e!==null&&!mn?(Pf(e,i,h),da(e,i,h)):(Me&&O&&pf(i),i.flags|=1,Pn(e,i,l,h),i.child)}function hg(e,i,s,l,h){if(e===null){var m=s.type;return typeof m=="function"&&!ff(m)&&m.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=m,dg(e,i,m,l,h)):(e=kl(s.type,null,l,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(m=e.child,!rh(e,h)){var b=m.memoizedProps;if(s=s.compare,s=s!==null?s:Mo,s(b,l)&&e.ref===i.ref)return da(e,i,h)}return i.flags|=1,e=oa(m,l),e.ref=i.ref,e.return=i,i.child=e}function dg(e,i,s,l,h){if(e!==null){var m=e.memoizedProps;if(Mo(m,l)&&e.ref===i.ref)if(mn=!1,i.pendingProps=l=m,rh(e,h))(e.flags&131072)!==0&&(mn=!0);else return i.lanes=e.lanes,da(e,i,h)}return $f(e,i,s,l,h)}function pg(e,i,s,l){var h=l.children,m=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|s:s,e!==null){for(l=i.child=e.child,h=0;l!==null;)h=h|l.lanes|l.childLanes,l=l.sibling;l=h&~m}else l=0,i.child=null;return mg(e,i,m,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&ql(i,m!==null?m.cachePool:null),m!==null?_0(i,m):wf(),v0(i);else return l=i.lanes=536870912,mg(e,i,m!==null?m.baseLanes|s:s,s,l)}else m!==null?(ql(i,m.cachePool),_0(i,m),Xa(),i.memoizedState=null):(e!==null&&ql(i,null),wf(),Xa());return Pn(e,i,h,s),i.child}function Fo(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function mg(e,i,s,l,h){var m=bf();return m=m===null?null:{parent:dn._currentValue,pool:m},i.memoizedState={baseLanes:s,cachePool:m},e!==null&&ql(i,null),wf(),v0(i),e!==null&&or(e,i,l,!0),i.childLanes=h,null}function cc(e,i){return i=fc({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function gg(e,i,s){return As(i,e.child,null,s),e=cc(i,i.pendingProps),e.flags|=2,ui(i),i.memoizedState=null,e}function Cy(e,i,s){var l=i.pendingProps,h=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(Me){if(l.mode==="hidden")return e=cc(i,l),i.lanes=536870912,Fo(null,e);if(Uf(i),(e=je)?(e=R1(e,Ti),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:za!==null?{id:Wi,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},s=$m(e),s.return=i,i.child=s,Ln=i,je=null)):e=null,e===null)throw Ia(i);return i.lanes=536870912,null}return cc(i,l)}var m=e.memoizedState;if(m!==null){var b=m.dehydrated;if(Uf(i),h)if(i.flags&256)i.flags&=-257,i=gg(e,i,s);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(a(558));else if(mn||or(e,i,s,!1),h=(s&e.childLanes)!==0,mn||h){if(l=Ye,l!==null&&(b=Ys(l,s),b!==0&&b!==m.retryLane))throw m.retryLane=b,vs(e,b),ti(l,e,b),Jf;yc(),i=gg(e,i,s)}else e=m.treeContext,je=Ci(b.nextSibling),Ln=i,Me=!0,Fa=null,Ti=!1,e!==null&&n0(i,e),i=cc(i,l),i.flags|=4096;return i}return e=oa(e.child,{mode:l.mode,children:l.children}),e.ref=i.ref,i.child=e,e.return=i,e}function uc(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(i.flags|=4194816)}}function $f(e,i,s,l,h){return Ms(i),s=Lf(e,i,s,l,void 0,h),l=Of(),e!==null&&!mn?(Pf(e,i,h),da(e,i,h)):(Me&&l&&pf(i),i.flags|=1,Pn(e,i,s,h),i.child)}function _g(e,i,s,l,h,m){return Ms(i),i.updateQueue=null,s=y0(i,l,s,h),x0(e),l=Of(),e!==null&&!mn?(Pf(e,i,m),da(e,i,m)):(Me&&l&&pf(i),i.flags|=1,Pn(e,i,s,m),i.child)}function vg(e,i,s,l,h){if(Ms(i),i.stateNode===null){var m=ir,b=s.contextType;typeof b=="object"&&b!==null&&(m=On(b)),m=new s(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Kf,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},Tf(i),b=s.contextType,m.context=typeof b=="object"&&b!==null?On(b):ir,m.state=i.memoizedState,b=s.getDerivedStateFromProps,typeof b=="function"&&(Zf(i,s,b,l),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(b=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),b!==m.state&&Kf.enqueueReplaceState(m,m.state,null),No(i,l,m,h),Uo(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){m=i.stateNode;var O=i.memoizedProps,Y=Rs(s,O);m.props=Y;var st=m.context,mt=s.contextType;b=ir,typeof mt=="object"&&mt!==null&&(b=On(mt));var vt=s.getDerivedStateFromProps;mt=typeof vt=="function"||typeof m.getSnapshotBeforeUpdate=="function",O=i.pendingProps!==O,mt||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(O||st!==b)&&ag(i,m,l,b),Ha=!1;var ot=i.memoizedState;m.state=ot,No(i,l,m,h),Uo(),st=i.memoizedState,O||ot!==st||Ha?(typeof vt=="function"&&(Zf(i,s,vt,l),st=i.memoizedState),(Y=Ha||ig(i,s,Y,l,ot,st,b))?(mt||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=st),m.props=l,m.state=st,m.context=b,l=Y):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,Af(e,i),b=i.memoizedProps,mt=Rs(s,b),m.props=mt,vt=i.pendingProps,ot=m.context,st=s.contextType,Y=ir,typeof st=="object"&&st!==null&&(Y=On(st)),O=s.getDerivedStateFromProps,(st=typeof O=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(b!==vt||ot!==Y)&&ag(i,m,l,Y),Ha=!1,ot=i.memoizedState,m.state=ot,No(i,l,m,h),Uo();var ct=i.memoizedState;b!==vt||ot!==ct||Ha||e!==null&&e.dependencies!==null&&Wl(e.dependencies)?(typeof O=="function"&&(Zf(i,s,O,l),ct=i.memoizedState),(mt=Ha||ig(i,s,mt,l,ot,ct,Y)||e!==null&&e.dependencies!==null&&Wl(e.dependencies))?(st||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,ct,Y),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,ct,Y)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||b===e.memoizedProps&&ot===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&ot===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ct),m.props=l,m.state=ct,m.context=Y,l=mt):(typeof m.componentDidUpdate!="function"||b===e.memoizedProps&&ot===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&ot===e.memoizedState||(i.flags|=1024),l=!1)}return m=l,uc(e,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,e!==null&&l?(i.child=As(i,e.child,null,h),i.child=As(i,null,s,h)):Pn(e,i,s,h),i.memoizedState=m.state,e=i.child):e=da(e,i,h),e}function xg(e,i,s,l){return ys(),i.flags|=256,Pn(e,i,s,l),i.child}var th={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function eh(e){return{baseLanes:e,cachePool:l0()}}function nh(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=hi),e}function yg(e,i,s){var l=i.pendingProps,h=!1,m=(i.flags&128)!==0,b;if((b=m)||(b=e!==null&&e.memoizedState===null?!1:(cn.current&2)!==0),b&&(h=!0,i.flags&=-129),b=(i.flags&32)!==0,i.flags&=-33,e===null){if(Me){if(h?ka(i):Xa(),(e=je)?(e=R1(e,Ti),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:za!==null?{id:Wi,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},s=$m(e),s.return=i,i.child=s,Ln=i,je=null)):e=null,e===null)throw Ia(i);return Ih(e)?i.lanes=32:i.lanes=536870912,null}var O=l.children;return l=l.fallback,h?(Xa(),h=i.mode,O=fc({mode:"hidden",children:O},h),l=xs(l,h,s,null),O.return=i,l.return=i,O.sibling=l,i.child=O,l=i.child,l.memoizedState=eh(s),l.childLanes=nh(e,b,s),i.memoizedState=th,Fo(null,l)):(ka(i),ih(i,O))}var Y=e.memoizedState;if(Y!==null&&(O=Y.dehydrated,O!==null)){if(m)i.flags&256?(ka(i),i.flags&=-257,i=ah(e,i,s)):i.memoizedState!==null?(Xa(),i.child=e.child,i.flags|=128,i=null):(Xa(),O=l.fallback,h=i.mode,l=fc({mode:"visible",children:l.children},h),O=xs(O,h,s,null),O.flags|=2,l.return=i,O.return=i,l.sibling=O,i.child=l,As(i,e.child,null,s),l=i.child,l.memoizedState=eh(s),l.childLanes=nh(e,b,s),i.memoizedState=th,i=Fo(null,l));else if(ka(i),Ih(O)){if(b=O.nextSibling&&O.nextSibling.dataset,b)var st=b.dgst;b=st,l=Error(a(419)),l.stack="",l.digest=b,To({value:l,source:null,stack:null}),i=ah(e,i,s)}else if(mn||or(e,i,s,!1),b=(s&e.childLanes)!==0,mn||b){if(b=Ye,b!==null&&(l=Ys(b,s),l!==0&&l!==Y.retryLane))throw Y.retryLane=l,vs(e,l),ti(b,e,l),Jf;Fh(O)||yc(),i=ah(e,i,s)}else Fh(O)?(i.flags|=192,i.child=e.child,i=null):(e=Y.treeContext,je=Ci(O.nextSibling),Ln=i,Me=!0,Fa=null,Ti=!1,e!==null&&n0(i,e),i=ih(i,l.children),i.flags|=4096);return i}return h?(Xa(),O=l.fallback,h=i.mode,Y=e.child,st=Y.sibling,l=oa(Y,{mode:"hidden",children:l.children}),l.subtreeFlags=Y.subtreeFlags&65011712,st!==null?O=oa(st,O):(O=xs(O,h,s,null),O.flags|=2),O.return=i,l.return=i,l.sibling=O,i.child=l,Fo(null,l),l=i.child,O=e.child.memoizedState,O===null?O=eh(s):(h=O.cachePool,h!==null?(Y=dn._currentValue,h=h.parent!==Y?{parent:Y,pool:Y}:h):h=l0(),O={baseLanes:O.baseLanes|s,cachePool:h}),l.memoizedState=O,l.childLanes=nh(e,b,s),i.memoizedState=th,Fo(e.child,l)):(ka(i),s=e.child,e=s.sibling,s=oa(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,e!==null&&(b=i.deletions,b===null?(i.deletions=[e],i.flags|=16):b.push(e)),i.child=s,i.memoizedState=null,s)}function ih(e,i){return i=fc({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function fc(e,i){return e=li(22,e,null,i),e.lanes=0,e}function ah(e,i,s){return As(i,e.child,null,s),e=ih(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Sg(e,i,s){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),xf(e.return,i,s)}function sh(e,i,s,l,h,m){var b=e.memoizedState;b===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:h,treeForkCount:m}:(b.isBackwards=i,b.rendering=null,b.renderingStartTime=0,b.last=l,b.tail=s,b.tailMode=h,b.treeForkCount=m)}function Mg(e,i,s){var l=i.pendingProps,h=l.revealOrder,m=l.tail;l=l.children;var b=cn.current,O=(b&2)!==0;if(O?(b=b&1|2,i.flags|=128):b&=1,ft(cn,b),Pn(e,i,l,s),l=Me?Eo:0,!O&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sg(e,s,i);else if(e.tag===19)Sg(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(h){case"forwards":for(s=i.child,h=null;s!==null;)e=s.alternate,e!==null&&$l(e)===null&&(h=s),s=s.sibling;s=h,s===null?(h=i.child,i.child=null):(h=s.sibling,s.sibling=null),sh(i,!1,h,s,m,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&$l(e)===null){i.child=h;break}e=h.sibling,h.sibling=s,s=h,h=e}sh(i,!0,s,null,m,l);break;case"together":sh(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function da(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),qa|=i.lanes,(s&i.childLanes)===0)if(e!==null){if(or(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,s=oa(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=oa(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function rh(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Wl(e)))}function Ry(e,i,s){switch(i.tag){case 3:Ct(i,i.stateNode.containerInfo),Ba(i,dn,e.memoizedState.cache),ys();break;case 27:case 5:Bt(i);break;case 4:Ct(i,i.stateNode.containerInfo);break;case 10:Ba(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Uf(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(ka(i),i.flags|=128,null):(s&i.child.childLanes)!==0?yg(e,i,s):(ka(i),e=da(e,i,s),e!==null?e.sibling:null);ka(i);break;case 19:var h=(e.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(or(e,i,s,!1),l=(s&i.childLanes)!==0),h){if(l)return Mg(e,i,s);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),ft(cn,cn.current),l)break;return null;case 22:return i.lanes=0,pg(e,i,s,i.pendingProps);case 24:Ba(i,dn,e.memoizedState.cache)}return da(e,i,s)}function bg(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)mn=!0;else{if(!rh(e,s)&&(i.flags&128)===0)return mn=!1,Ry(e,i,s);mn=(e.flags&131072)!==0}else mn=!1,Me&&(i.flags&1048576)!==0&&e0(i,Eo,i.index);switch(i.lanes=0,i.tag){case 16:t:{var l=i.pendingProps;if(e=Es(i.elementType),i.type=e,typeof e=="function")ff(e)?(l=Rs(e,l),i.tag=1,i=vg(null,i,e,l,s)):(i.tag=0,i=$f(null,i,e,l,s));else{if(e!=null){var h=e.$$typeof;if(h===A){i.tag=11,i=fg(null,i,e,l,s);break t}else if(h===U){i.tag=14,i=hg(null,i,e,l,s);break t}}throw i=q(e)||e,Error(a(306,i,""))}}return i;case 0:return $f(e,i,i.type,i.pendingProps,s);case 1:return l=i.type,h=Rs(l,i.pendingProps),vg(e,i,l,h,s);case 3:t:{if(Ct(i,i.stateNode.containerInfo),e===null)throw Error(a(387));l=i.pendingProps;var m=i.memoizedState;h=m.element,Af(e,i),No(i,l,null,s);var b=i.memoizedState;if(l=b.cache,Ba(i,dn,l),l!==m.cache&&yf(i,[dn],s,!0),Uo(),l=b.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:b.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=xg(e,i,l,s);break t}else if(l!==h){h=Mi(Error(a(424)),i),To(h),i=xg(e,i,l,s);break t}else for(e=i.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,je=Ci(e.firstChild),Ln=i,Me=!0,Fa=null,Ti=!0,s=p0(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(ys(),l===h){i=da(e,i,s);break t}Pn(e,i,l,s)}i=i.child}return i;case 26:return uc(e,i),e===null?(s=O1(i.type,null,i.pendingProps,null))?i.memoizedState=s:Me||(s=i.type,e=i.pendingProps,l=Cc(it.current).createElement(s),l[hn]=i,l[Cn]=e,zn(l,s,e),P(l),i.stateNode=l):i.memoizedState=O1(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Bt(i),e===null&&Me&&(l=i.stateNode=U1(i.type,i.pendingProps,it.current),Ln=i,Ti=!0,h=je,Ja(i.type)?(Bh=h,je=Ci(l.firstChild)):je=h),Pn(e,i,i.pendingProps.children,s),uc(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Me&&((h=l=je)&&(l=aS(l,i.type,i.pendingProps,Ti),l!==null?(i.stateNode=l,Ln=i,je=Ci(l.firstChild),Ti=!1,h=!0):h=!1),h||Ia(i)),Bt(i),h=i.type,m=i.pendingProps,b=e!==null?e.memoizedProps:null,l=m.children,Oh(h,m)?l=null:b!==null&&Oh(h,b)&&(i.flags|=32),i.memoizedState!==null&&(h=Lf(e,i,xy,null,null,s),Jo._currentValue=h),uc(e,i),Pn(e,i,l,s),i.child;case 6:return e===null&&Me&&((e=s=je)&&(s=sS(s,i.pendingProps,Ti),s!==null?(i.stateNode=s,Ln=i,je=null,e=!0):e=!1),e||Ia(i)),null;case 13:return yg(e,i,s);case 4:return Ct(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=As(i,null,l,s):Pn(e,i,l,s),i.child;case 11:return fg(e,i,i.type,i.pendingProps,s);case 7:return Pn(e,i,i.pendingProps,s),i.child;case 8:return Pn(e,i,i.pendingProps.children,s),i.child;case 12:return Pn(e,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,Ba(i,i.type,l.value),Pn(e,i,l.children,s),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,Ms(i),h=On(h),l=l(h),i.flags|=1,Pn(e,i,l,s),i.child;case 14:return hg(e,i,i.type,i.pendingProps,s);case 15:return dg(e,i,i.type,i.pendingProps,s);case 19:return Mg(e,i,s);case 31:return Cy(e,i,s);case 22:return pg(e,i,s,i.pendingProps);case 24:return Ms(i),l=On(dn),e===null?(h=bf(),h===null&&(h=Ye,m=Sf(),h.pooledCache=m,m.refCount++,m!==null&&(h.pooledCacheLanes|=s),h=m),i.memoizedState={parent:l,cache:h},Tf(i),Ba(i,dn,h)):((e.lanes&s)!==0&&(Af(e,i),No(i,null,null,s),Uo()),h=e.memoizedState,m=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),Ba(i,dn,l)):(l=m.cache,Ba(i,dn,l),l!==h.cache&&yf(i,[dn],s,!0))),Pn(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function pa(e){e.flags|=4}function oh(e,i,s,l,h){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(h&335544128)===h)if(e.stateNode.complete)e.flags|=8192;else if(Kg())e.flags|=8192;else throw Ts=Zl,Ef}else e.flags&=-16777217}function Eg(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!B1(i))if(Kg())e.flags|=8192;else throw Ts=Zl,Ef}function hc(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Ie():536870912,e.lanes|=i,xr|=i)}function Io(e,i){if(!Me)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ze(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,l=0;if(i)for(var h=e.child;h!==null;)s|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)s|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=s,i}function wy(e,i,s){var l=i.pendingProps;switch(mf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(i),null;case 1:return Ze(i),null;case 3:return s=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),ua(dn),Gt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(rr(i)?pa(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,_f())),Ze(i),null;case 26:var h=i.type,m=i.memoizedState;return e===null?(pa(i),m!==null?(Ze(i),Eg(i,m)):(Ze(i),oh(i,h,null,l,s))):m?m!==e.memoizedState?(pa(i),Ze(i),Eg(i,m)):(Ze(i),i.flags&=-16777217):(e=e.memoizedProps,e!==l&&pa(i),Ze(i),oh(i,h,e,l,s)),null;case 27:if(le(i),s=it.current,h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&pa(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Ze(i),null}e=bt.current,rr(i)?i0(i):(e=U1(h,l,s),i.stateNode=e,pa(i))}return Ze(i),null;case 5:if(le(i),h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&pa(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Ze(i),null}if(m=bt.current,rr(i))i0(i);else{var b=Cc(it.current);switch(m){case 1:m=b.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:m=b.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":m=b.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":m=b.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":m=b.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof l.is=="string"?b.createElement("select",{is:l.is}):b.createElement("select"),l.multiple?m.multiple=!0:l.size&&(m.size=l.size);break;default:m=typeof l.is=="string"?b.createElement(h,{is:l.is}):b.createElement(h)}}m[hn]=i,m[Cn]=l;t:for(b=i.child;b!==null;){if(b.tag===5||b.tag===6)m.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===i)break t;for(;b.sibling===null;){if(b.return===null||b.return===i)break t;b=b.return}b.sibling.return=b.return,b=b.sibling}i.stateNode=m;t:switch(zn(m,h,l),h){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&pa(i)}}return Ze(i),oh(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,s),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&pa(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(e=it.current,rr(i)){if(e=i.stateNode,s=i.memoizedProps,l=null,h=Ln,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[hn]=i,e=!!(e.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||y1(e.nodeValue,s)),e||Ia(i,!0)}else e=Cc(e).createTextNode(l),e[hn]=i,i.stateNode=e}return Ze(i),null;case 31:if(s=i.memoizedState,e===null||e.memoizedState!==null){if(l=rr(i),s!==null){if(e===null){if(!l)throw Error(a(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[hn]=i}else ys(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ze(i),e=!1}else s=_f(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),e=!0;if(!e)return i.flags&256?(ui(i),i):(ui(i),null);if((i.flags&128)!==0)throw Error(a(558))}return Ze(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=rr(i),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(a(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[hn]=i}else ys(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ze(i),h=!1}else h=_f(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(ui(i),i):(ui(i),null)}return ui(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,e=e!==null&&e.memoizedState!==null,s&&(l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool),m=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==h&&(l.flags|=2048)),s!==e&&s&&(i.child.flags|=8192),hc(i,i.updateQueue),Ze(i),null);case 4:return Gt(),e===null&&wh(i.stateNode.containerInfo),Ze(i),null;case 10:return ua(i.type),Ze(i),null;case 19:if(et(cn),l=i.memoizedState,l===null)return Ze(i),null;if(h=(i.flags&128)!==0,m=l.rendering,m===null)if(h)Io(l,!1);else{if(on!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(m=$l(e),m!==null){for(i.flags|=128,Io(l,!1),e=m.updateQueue,i.updateQueue=e,hc(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)Jm(s,e),s=s.sibling;return ft(cn,cn.current&1|2),Me&&la(i,l.treeForkCount),i.child}e=e.sibling}l.tail!==null&&D()>_c&&(i.flags|=128,h=!0,Io(l,!1),i.lanes=4194304)}else{if(!h)if(e=$l(m),e!==null){if(i.flags|=128,h=!0,e=e.updateQueue,i.updateQueue=e,hc(i,e),Io(l,!0),l.tail===null&&l.tailMode==="hidden"&&!m.alternate&&!Me)return Ze(i),null}else 2*D()-l.renderingStartTime>_c&&s!==536870912&&(i.flags|=128,h=!0,Io(l,!1),i.lanes=4194304);l.isBackwards?(m.sibling=i.child,i.child=m):(e=l.last,e!==null?e.sibling=m:i.child=m,l.last=m)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=D(),e.sibling=null,s=cn.current,ft(cn,h?s&1|2:s&1),Me&&la(i,l.treeForkCount),e):(Ze(i),null);case 22:case 23:return ui(i),Df(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(Ze(i),i.subtreeFlags&6&&(i.flags|=8192)):Ze(i),s=i.updateQueue,s!==null&&hc(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),e!==null&&et(bs),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),ua(dn),Ze(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function Dy(e,i){switch(mf(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return ua(dn),Gt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return le(i),null;case 31:if(i.memoizedState!==null){if(ui(i),i.alternate===null)throw Error(a(340));ys()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(ui(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));ys()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return et(cn),null;case 4:return Gt(),null;case 10:return ua(i.type),null;case 22:case 23:return ui(i),Df(),e!==null&&et(bs),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return ua(dn),null;case 25:return null;default:return null}}function Tg(e,i){switch(mf(i),i.tag){case 3:ua(dn),Gt();break;case 26:case 27:case 5:le(i);break;case 4:Gt();break;case 31:i.memoizedState!==null&&ui(i);break;case 13:ui(i);break;case 19:et(cn);break;case 10:ua(i.type);break;case 22:case 23:ui(i),Df(),e!==null&&et(bs);break;case 24:ua(dn)}}function Bo(e,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var h=l.next;s=h;do{if((s.tag&e)===e){l=void 0;var m=s.create,b=s.inst;l=m(),b.destroy=l}s=s.next}while(s!==h)}}catch(O){Ge(i,i.return,O)}}function Wa(e,i,s){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var m=h.next;l=m;do{if((l.tag&e)===e){var b=l.inst,O=b.destroy;if(O!==void 0){b.destroy=void 0,h=i;var Y=s,st=O;try{st()}catch(mt){Ge(h,Y,mt)}}}l=l.next}while(l!==m)}}catch(mt){Ge(i,i.return,mt)}}function Ag(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{g0(i,s)}catch(l){Ge(e,e.return,l)}}}function Cg(e,i,s){s.props=Rs(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(l){Ge(e,i,l)}}function Ho(e,i){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof s=="function"?e.refCleanup=s(l):s.current=l}}catch(h){Ge(e,i,h)}}function qi(e,i){var s=e.ref,l=e.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(h){Ge(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){Ge(e,i,h)}else s.current=null}function Rg(e){var i=e.type,s=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break t;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(h){Ge(e,e.return,h)}}function lh(e,i,s){try{var l=e.stateNode;Jy(l,e.type,s,i),l[Cn]=i}catch(h){Ge(e,e.return,h)}}function wg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ja(e.type)||e.tag===4}function ch(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||wg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ja(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function uh(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(e),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=sa));else if(l!==4&&(l===27&&Ja(e.type)&&(s=e.stateNode,i=null),e=e.child,e!==null))for(uh(e,i,s),e=e.sibling;e!==null;)uh(e,i,s),e=e.sibling}function dc(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(l!==4&&(l===27&&Ja(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(dc(e,i,s),e=e.sibling;e!==null;)dc(e,i,s),e=e.sibling}function Dg(e){var i=e.stateNode,s=e.memoizedProps;try{for(var l=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);zn(i,l,s),i[hn]=e,i[Cn]=s}catch(m){Ge(e,e.return,m)}}var ma=!1,gn=!1,fh=!1,Ug=typeof WeakSet=="function"?WeakSet:Set,En=null;function Uy(e,i){if(e=e.containerInfo,Nh=Oc,e=km(e),af(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var h=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break t}var b=0,O=-1,Y=-1,st=0,mt=0,vt=e,ot=null;e:for(;;){for(var ct;vt!==s||h!==0&&vt.nodeType!==3||(O=b+h),vt!==m||l!==0&&vt.nodeType!==3||(Y=b+l),vt.nodeType===3&&(b+=vt.nodeValue.length),(ct=vt.firstChild)!==null;)ot=vt,vt=ct;for(;;){if(vt===e)break e;if(ot===s&&++st===h&&(O=b),ot===m&&++mt===l&&(Y=b),(ct=vt.nextSibling)!==null)break;vt=ot,ot=vt.parentNode}vt=ct}s=O===-1||Y===-1?null:{start:O,end:Y}}else s=null}s=s||{start:0,end:0}}else s=null;for(Lh={focusedElem:e,selectionRange:s},Oc=!1,En=i;En!==null;)if(i=En,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,En=e;else for(;En!==null;){switch(i=En,m=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(s=0;s<e.length;s++)h=e[s],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,s=i,h=m.memoizedProps,m=m.memoizedState,l=s.stateNode;try{var Xt=Rs(s.type,h);e=l.getSnapshotBeforeUpdate(Xt,m),l.__reactInternalSnapshotBeforeUpdate=e}catch(ee){Ge(s,s.return,ee)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)zh(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":zh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,En=e;break}En=i.return}}function Ng(e,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:_a(e,s),l&4&&Bo(5,s);break;case 1:if(_a(e,s),l&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(b){Ge(s,s.return,b)}else{var h=Rs(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(b){Ge(s,s.return,b)}}l&64&&Ag(s),l&512&&Ho(s,s.return);break;case 3:if(_a(e,s),l&64&&(e=s.updateQueue,e!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{g0(e,i)}catch(b){Ge(s,s.return,b)}}break;case 27:i===null&&l&4&&Dg(s);case 26:case 5:_a(e,s),i===null&&l&4&&Rg(s),l&512&&Ho(s,s.return);break;case 12:_a(e,s);break;case 31:_a(e,s),l&4&&Pg(e,s);break;case 13:_a(e,s),l&4&&zg(e,s),l&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=Hy.bind(null,s),rS(e,s))));break;case 22:if(l=s.memoizedState!==null||ma,!l){i=i!==null&&i.memoizedState!==null||gn,h=ma;var m=gn;ma=l,(gn=i)&&!m?va(e,s,(s.subtreeFlags&8772)!==0):_a(e,s),ma=h,gn=m}break;case 30:break;default:_a(e,s)}}function Lg(e){var i=e.alternate;i!==null&&(e.alternate=null,Lg(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&po(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Je=null,Kn=!1;function ga(e,i,s){for(s=s.child;s!==null;)Og(e,i,s),s=s.sibling}function Og(e,i,s){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(Mt,s)}catch{}switch(s.tag){case 26:gn||qi(s,i),ga(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:gn||qi(s,i);var l=Je,h=Kn;Ja(s.type)&&(Je=s.stateNode,Kn=!1),ga(e,i,s),Zo(s.stateNode),Je=l,Kn=h;break;case 5:gn||qi(s,i);case 6:if(l=Je,h=Kn,Je=null,ga(e,i,s),Je=l,Kn=h,Je!==null)if(Kn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(s.stateNode)}catch(m){Ge(s,i,m)}else try{Je.removeChild(s.stateNode)}catch(m){Ge(s,i,m)}break;case 18:Je!==null&&(Kn?(e=Je,A1(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),Cr(e)):A1(Je,s.stateNode));break;case 4:l=Je,h=Kn,Je=s.stateNode.containerInfo,Kn=!0,ga(e,i,s),Je=l,Kn=h;break;case 0:case 11:case 14:case 15:Wa(2,s,i),gn||Wa(4,s,i),ga(e,i,s);break;case 1:gn||(qi(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&Cg(s,i,l)),ga(e,i,s);break;case 21:ga(e,i,s);break;case 22:gn=(l=gn)||s.memoizedState!==null,ga(e,i,s),gn=l;break;default:ga(e,i,s)}}function Pg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Cr(e)}catch(s){Ge(i,i.return,s)}}}function zg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Cr(e)}catch(s){Ge(i,i.return,s)}}function Ny(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Ug),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Ug),i;default:throw Error(a(435,e.tag))}}function pc(e,i){var s=Ny(e);i.forEach(function(l){if(!s.has(l)){s.add(l);var h=Gy.bind(null,e,l);l.then(h,h)}})}function Qn(e,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var h=s[l],m=e,b=i,O=b;t:for(;O!==null;){switch(O.tag){case 27:if(Ja(O.type)){Je=O.stateNode,Kn=!1;break t}break;case 5:Je=O.stateNode,Kn=!1;break t;case 3:case 4:Je=O.stateNode.containerInfo,Kn=!0;break t}O=O.return}if(Je===null)throw Error(a(160));Og(m,b,h),Je=null,Kn=!1,m=h.alternate,m!==null&&(m.return=null),h.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)Fg(i,e),i=i.sibling}var Ii=null;function Fg(e,i){var s=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Qn(i,e),Jn(e),l&4&&(Wa(3,e,e.return),Bo(3,e),Wa(5,e,e.return));break;case 1:Qn(i,e),Jn(e),l&512&&(gn||s===null||qi(s,s.return)),l&64&&ma&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var h=Ii;if(Qn(i,e),Jn(e),l&512&&(gn||s===null||qi(s,s.return)),l&4){var m=s!==null?s.memoizedState:null;if(l=e.memoizedState,s===null)if(l===null)if(e.stateNode===null){t:{l=e.type,s=e.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":m=h.getElementsByTagName("title")[0],(!m||m[ds]||m[hn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=h.createElement(l),h.head.insertBefore(m,h.querySelector("head > title"))),zn(m,l,s),m[hn]=e,P(m),l=m;break t;case"link":var b=F1("link","href",h).get(l+(s.href||""));if(b){for(var O=0;O<b.length;O++)if(m=b[O],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){b.splice(O,1);break e}}m=h.createElement(l),zn(m,l,s),h.head.appendChild(m);break;case"meta":if(b=F1("meta","content",h).get(l+(s.content||""))){for(O=0;O<b.length;O++)if(m=b[O],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){b.splice(O,1);break e}}m=h.createElement(l),zn(m,l,s),h.head.appendChild(m);break;default:throw Error(a(468,l))}m[hn]=e,P(m),l=m}e.stateNode=l}else I1(h,e.type,e.stateNode);else e.stateNode=z1(h,l,e.memoizedProps);else m!==l?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,l===null?I1(h,e.type,e.stateNode):z1(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&lh(e,e.memoizedProps,s.memoizedProps)}break;case 27:Qn(i,e),Jn(e),l&512&&(gn||s===null||qi(s,s.return)),s!==null&&l&4&&lh(e,e.memoizedProps,s.memoizedProps);break;case 5:if(Qn(i,e),Jn(e),l&512&&(gn||s===null||qi(s,s.return)),e.flags&32){h=e.stateNode;try{vn(h,"")}catch(Xt){Ge(e,e.return,Xt)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,lh(e,h,s!==null?s.memoizedProps:h)),l&1024&&(fh=!0);break;case 6:if(Qn(i,e),Jn(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,s=e.stateNode;try{s.nodeValue=l}catch(Xt){Ge(e,e.return,Xt)}}break;case 3:if(Dc=null,h=Ii,Ii=Rc(i.containerInfo),Qn(i,e),Ii=h,Jn(e),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Cr(i.containerInfo)}catch(Xt){Ge(e,e.return,Xt)}fh&&(fh=!1,Ig(e));break;case 4:l=Ii,Ii=Rc(e.stateNode.containerInfo),Qn(i,e),Jn(e),Ii=l;break;case 12:Qn(i,e),Jn(e);break;case 31:Qn(i,e),Jn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,pc(e,l)));break;case 13:Qn(i,e),Jn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(gc=D()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,pc(e,l)));break;case 22:h=e.memoizedState!==null;var Y=s!==null&&s.memoizedState!==null,st=ma,mt=gn;if(ma=st||h,gn=mt||Y,Qn(i,e),gn=mt,ma=st,Jn(e),l&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(s===null||Y||ma||gn||ws(e)),s=null,i=e;;){if(i.tag===5||i.tag===26){if(s===null){Y=s=i;try{if(m=Y.stateNode,h)b=m.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{O=Y.stateNode;var vt=Y.memoizedProps.style,ot=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;O.style.display=ot==null||typeof ot=="boolean"?"":(""+ot).trim()}}catch(Xt){Ge(Y,Y.return,Xt)}}}else if(i.tag===6){if(s===null){Y=i;try{Y.stateNode.nodeValue=h?"":Y.memoizedProps}catch(Xt){Ge(Y,Y.return,Xt)}}}else if(i.tag===18){if(s===null){Y=i;try{var ct=Y.stateNode;h?C1(ct,!0):C1(Y.stateNode,!1)}catch(Xt){Ge(Y,Y.return,Xt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,pc(e,s))));break;case 19:Qn(i,e),Jn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,pc(e,l)));break;case 30:break;case 21:break;default:Qn(i,e),Jn(e)}}function Jn(e){var i=e.flags;if(i&2){try{for(var s,l=e.return;l!==null;){if(wg(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var h=s.stateNode,m=ch(e);dc(e,m,h);break;case 5:var b=s.stateNode;s.flags&32&&(vn(b,""),s.flags&=-33);var O=ch(e);dc(e,O,b);break;case 3:case 4:var Y=s.stateNode.containerInfo,st=ch(e);uh(e,st,Y);break;default:throw Error(a(161))}}catch(mt){Ge(e,e.return,mt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Ig(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;Ig(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function _a(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Ng(e,i.alternate,i),i=i.sibling}function ws(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Wa(4,i,i.return),ws(i);break;case 1:qi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&Cg(i,i.return,s),ws(i);break;case 27:Zo(i.stateNode);case 26:case 5:qi(i,i.return),ws(i);break;case 22:i.memoizedState===null&&ws(i);break;case 30:ws(i);break;default:ws(i)}e=e.sibling}}function va(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=e,m=i,b=m.flags;switch(m.tag){case 0:case 11:case 15:va(h,m,s),Bo(4,m);break;case 1:if(va(h,m,s),l=m,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(st){Ge(l,l.return,st)}if(l=m,h=l.updateQueue,h!==null){var O=l.stateNode;try{var Y=h.shared.hiddenCallbacks;if(Y!==null)for(h.shared.hiddenCallbacks=null,h=0;h<Y.length;h++)m0(Y[h],O)}catch(st){Ge(l,l.return,st)}}s&&b&64&&Ag(m),Ho(m,m.return);break;case 27:Dg(m);case 26:case 5:va(h,m,s),s&&l===null&&b&4&&Rg(m),Ho(m,m.return);break;case 12:va(h,m,s);break;case 31:va(h,m,s),s&&b&4&&Pg(h,m);break;case 13:va(h,m,s),s&&b&4&&zg(h,m);break;case 22:m.memoizedState===null&&va(h,m,s),Ho(m,m.return);break;case 30:break;default:va(h,m,s)}i=i.sibling}}function hh(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&Ao(s))}function dh(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Ao(e))}function Bi(e,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Bg(e,i,s,l),i=i.sibling}function Bg(e,i,s,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:Bi(e,i,s,l),h&2048&&Bo(9,i);break;case 1:Bi(e,i,s,l);break;case 3:Bi(e,i,s,l),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Ao(e)));break;case 12:if(h&2048){Bi(e,i,s,l),e=i.stateNode;try{var m=i.memoizedProps,b=m.id,O=m.onPostCommit;typeof O=="function"&&O(b,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(Y){Ge(i,i.return,Y)}}else Bi(e,i,s,l);break;case 31:Bi(e,i,s,l);break;case 13:Bi(e,i,s,l);break;case 23:break;case 22:m=i.stateNode,b=i.alternate,i.memoizedState!==null?m._visibility&2?Bi(e,i,s,l):Go(e,i):m._visibility&2?Bi(e,i,s,l):(m._visibility|=2,gr(e,i,s,l,(i.subtreeFlags&10256)!==0||!1)),h&2048&&hh(b,i);break;case 24:Bi(e,i,s,l),h&2048&&dh(i.alternate,i);break;default:Bi(e,i,s,l)}}function gr(e,i,s,l,h){for(h=h&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=e,b=i,O=s,Y=l,st=b.flags;switch(b.tag){case 0:case 11:case 15:gr(m,b,O,Y,h),Bo(8,b);break;case 23:break;case 22:var mt=b.stateNode;b.memoizedState!==null?mt._visibility&2?gr(m,b,O,Y,h):Go(m,b):(mt._visibility|=2,gr(m,b,O,Y,h)),h&&st&2048&&hh(b.alternate,b);break;case 24:gr(m,b,O,Y,h),h&&st&2048&&dh(b.alternate,b);break;default:gr(m,b,O,Y,h)}i=i.sibling}}function Go(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,l=i,h=l.flags;switch(l.tag){case 22:Go(s,l),h&2048&&hh(l.alternate,l);break;case 24:Go(s,l),h&2048&&dh(l.alternate,l);break;default:Go(s,l)}i=i.sibling}}var Vo=8192;function _r(e,i,s){if(e.subtreeFlags&Vo)for(e=e.child;e!==null;)Hg(e,i,s),e=e.sibling}function Hg(e,i,s){switch(e.tag){case 26:_r(e,i,s),e.flags&Vo&&e.memoizedState!==null&&vS(s,Ii,e.memoizedState,e.memoizedProps);break;case 5:_r(e,i,s);break;case 3:case 4:var l=Ii;Ii=Rc(e.stateNode.containerInfo),_r(e,i,s),Ii=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Vo,Vo=16777216,_r(e,i,s),Vo=l):_r(e,i,s));break;default:_r(e,i,s)}}function Gg(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function ko(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];En=l,kg(l,e)}Gg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Vg(e),e=e.sibling}function Vg(e){switch(e.tag){case 0:case 11:case 15:ko(e),e.flags&2048&&Wa(9,e,e.return);break;case 3:ko(e);break;case 12:ko(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,mc(e)):ko(e);break;default:ko(e)}}function mc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];En=l,kg(l,e)}Gg(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Wa(8,i,i.return),mc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,mc(i));break;default:mc(i)}e=e.sibling}}function kg(e,i){for(;En!==null;){var s=En;switch(s.tag){case 0:case 11:case 15:Wa(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ao(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,En=l;else t:for(s=e;En!==null;){l=En;var h=l.sibling,m=l.return;if(Lg(l),l===s){En=null;break t}if(h!==null){h.return=m,En=h;break t}En=m}}}var Ly={getCacheForType:function(e){var i=On(dn),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s},cacheSignal:function(){return On(dn).controller.signal}},Oy=typeof WeakMap=="function"?WeakMap:Map,Oe=0,Ye=null,ve=null,ye=0,He=0,fi=null,Ya=!1,vr=!1,ph=!1,xa=0,on=0,qa=0,Ds=0,mh=0,hi=0,xr=0,Xo=null,$n=null,gh=!1,gc=0,Xg=0,_c=1/0,vc=null,ja=null,xn=0,Za=null,yr=null,ya=0,_h=0,vh=null,Wg=null,Wo=0,xh=null;function di(){return(Oe&2)!==0&&ye!==0?ye&-ye:F.T!==null?Th():fo()}function Yg(){if(hi===0)if((ye&536870912)===0||Me){var e=At;At<<=1,(At&3932160)===0&&(At=262144),hi=e}else hi=536870912;return e=ci.current,e!==null&&(e.flags|=32),hi}function ti(e,i,s){(e===Ye&&(He===2||He===9)||e.cancelPendingCommit!==null)&&(Sr(e,0),Ka(e,ye,hi,!1)),Hn(e,s),((Oe&2)===0||e!==Ye)&&(e===Ye&&((Oe&2)===0&&(Ds|=s),on===4&&Ka(e,ye,hi,!1)),ji(e))}function qg(e,i,s){if((Oe&6)!==0)throw Error(a(327));var l=!s&&(i&127)===0&&(i&e.expiredLanes)===0||wt(e,i),h=l?Fy(e,i):Sh(e,i,!0),m=l;do{if(h===0){vr&&!l&&Ka(e,i,0,!1);break}else{if(s=e.current.alternate,m&&!Py(s)){h=Sh(e,i,!1),m=!1;continue}if(h===2){if(m=i,e.errorRecoveryDisabledLanes&m)var b=0;else b=e.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){i=b;t:{var O=e;h=Xo;var Y=O.current.memoizedState.isDehydrated;if(Y&&(Sr(O,b).flags|=256),b=Sh(O,b,!1),b!==2){if(ph&&!Y){O.errorRecoveryDisabledLanes|=m,Ds|=m,h=4;break t}m=$n,$n=h,m!==null&&($n===null?$n=m:$n.push.apply($n,m))}h=b}if(m=!1,h!==2)continue}}if(h===1){Sr(e,0),Ka(e,i,0,!0);break}t:{switch(l=e,m=h,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Ka(l,i,hi,!Ya);break t;case 2:$n=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(h=gc+300-D(),10<h)){if(Ka(l,i,hi,!Ya),xt(l,0,!0)!==0)break t;ya=i,l.timeoutHandle=E1(jg.bind(null,l,s,$n,vc,gh,i,hi,Ds,xr,Ya,m,"Throttled",-0,0),h);break t}jg(l,s,$n,vc,gh,i,hi,Ds,xr,Ya,m,null,-0,0)}}break}while(!0);ji(e)}function jg(e,i,s,l,h,m,b,O,Y,st,mt,vt,ot,ct){if(e.timeoutHandle=-1,vt=i.subtreeFlags,vt&8192||(vt&16785408)===16785408){vt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:sa},Hg(i,m,vt);var Xt=(m&62914560)===m?gc-D():(m&4194048)===m?Xg-D():0;if(Xt=xS(vt,Xt),Xt!==null){ya=m,e.cancelPendingCommit=Xt(n1.bind(null,e,i,m,s,l,h,b,O,Y,mt,vt,null,ot,ct)),Ka(e,m,b,!st);return}}n1(e,i,m,s,l,h,b,O,Y)}function Py(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var h=s[l],m=h.getSnapshot;h=h.value;try{if(!oi(m(),h))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ka(e,i,s,l){i&=~mh,i&=~Ds,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var h=i;0<h;){var m=31-Ft(h),b=1<<m;l[m]=-1,h&=~b}s!==0&&Dl(e,s,i)}function xc(){return(Oe&6)===0?(Yo(0),!1):!0}function yh(){if(ve!==null){if(He===0)var e=ve.return;else e=ve,ca=Ss=null,zf(e),fr=null,Ro=0,e=ve;for(;e!==null;)Tg(e.alternate,e),e=e.return;ve=null}}function Sr(e,i){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,eS(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),ya=0,yh(),Ye=e,ve=s=oa(e.current,null),ye=i,He=0,fi=null,Ya=!1,vr=wt(e,i),ph=!1,xr=hi=mh=Ds=qa=on=0,$n=Xo=null,gh=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var h=31-Ft(l),m=1<<h;i|=e[h],l&=~m}return xa=i,Hl(),s}function Zg(e,i){fe=null,F.H=zo,i===ur||i===jl?(i=f0(),He=3):i===Ef?(i=f0(),He=4):He=i===Jf?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,fi=i,ve===null&&(on=1,lc(e,Mi(i,e.current)))}function Kg(){var e=ci.current;return e===null?!0:(ye&4194048)===ye?Ai===null:(ye&62914560)===ye||(ye&536870912)!==0?e===Ai:!1}function Qg(){var e=F.H;return F.H=zo,e===null?zo:e}function Jg(){var e=F.A;return F.A=Ly,e}function yc(){on=4,Ya||(ye&4194048)!==ye&&ci.current!==null||(vr=!0),(qa&134217727)===0&&(Ds&134217727)===0||Ye===null||Ka(Ye,ye,hi,!1)}function Sh(e,i,s){var l=Oe;Oe|=2;var h=Qg(),m=Jg();(Ye!==e||ye!==i)&&(vc=null,Sr(e,i)),i=!1;var b=on;t:do try{if(He!==0&&ve!==null){var O=ve,Y=fi;switch(He){case 8:yh(),b=6;break t;case 3:case 2:case 9:case 6:ci.current===null&&(i=!0);var st=He;if(He=0,fi=null,Mr(e,O,Y,st),s&&vr){b=0;break t}break;default:st=He,He=0,fi=null,Mr(e,O,Y,st)}}zy(),b=on;break}catch(mt){Zg(e,mt)}while(!0);return i&&e.shellSuspendCounter++,ca=Ss=null,Oe=l,F.H=h,F.A=m,ve===null&&(Ye=null,ye=0,Hl()),b}function zy(){for(;ve!==null;)$g(ve)}function Fy(e,i){var s=Oe;Oe|=2;var l=Qg(),h=Jg();Ye!==e||ye!==i?(vc=null,_c=D()+500,Sr(e,i)):vr=wt(e,i);t:do try{if(He!==0&&ve!==null){i=ve;var m=fi;e:switch(He){case 1:He=0,fi=null,Mr(e,i,m,1);break;case 2:case 9:if(c0(m)){He=0,fi=null,t1(i);break}i=function(){He!==2&&He!==9||Ye!==e||(He=7),ji(e)},m.then(i,i);break t;case 3:He=7;break t;case 4:He=5;break t;case 7:c0(m)?(He=0,fi=null,t1(i)):(He=0,fi=null,Mr(e,i,m,7));break;case 5:var b=null;switch(ve.tag){case 26:b=ve.memoizedState;case 5:case 27:var O=ve;if(b?B1(b):O.stateNode.complete){He=0,fi=null;var Y=O.sibling;if(Y!==null)ve=Y;else{var st=O.return;st!==null?(ve=st,Sc(st)):ve=null}break e}}He=0,fi=null,Mr(e,i,m,5);break;case 6:He=0,fi=null,Mr(e,i,m,6);break;case 8:yh(),on=6;break t;default:throw Error(a(462))}}Iy();break}catch(mt){Zg(e,mt)}while(!0);return ca=Ss=null,F.H=l,F.A=h,Oe=s,ve!==null?0:(Ye=null,ye=0,Hl(),on)}function Iy(){for(;ve!==null&&!jt();)$g(ve)}function $g(e){var i=bg(e.alternate,e,xa);e.memoizedProps=e.pendingProps,i===null?Sc(e):ve=i}function t1(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=_g(s,i,i.pendingProps,i.type,void 0,ye);break;case 11:i=_g(s,i,i.pendingProps,i.type.render,i.ref,ye);break;case 5:zf(i);default:Tg(s,i),i=ve=Jm(i,xa),i=bg(s,i,xa)}e.memoizedProps=e.pendingProps,i===null?Sc(e):ve=i}function Mr(e,i,s,l){ca=Ss=null,zf(i),fr=null,Ro=0;var h=i.return;try{if(Ay(e,h,i,s,ye)){on=1,lc(e,Mi(s,e.current)),ve=null;return}}catch(m){if(h!==null)throw ve=h,m;on=1,lc(e,Mi(s,e.current)),ve=null;return}i.flags&32768?(Me||l===1?e=!0:vr||(ye&536870912)!==0?e=!1:(Ya=e=!0,(l===2||l===9||l===3||l===6)&&(l=ci.current,l!==null&&l.tag===13&&(l.flags|=16384))),e1(i,e)):Sc(i)}function Sc(e){var i=e;do{if((i.flags&32768)!==0){e1(i,Ya);return}e=i.return;var s=wy(i.alternate,i,xa);if(s!==null){ve=s;return}if(i=i.sibling,i!==null){ve=i;return}ve=i=e}while(i!==null);on===0&&(on=5)}function e1(e,i){do{var s=Dy(e.alternate,e);if(s!==null){s.flags&=32767,ve=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){ve=e;return}ve=e=s}while(e!==null);on=6,ve=null}function n1(e,i,s,l,h,m,b,O,Y){e.cancelPendingCommit=null;do Mc();while(xn!==0);if((Oe&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=cf,Oi(e,s,m,b,O,Y),e===Ye&&(ve=Ye=null,ye=0),yr=i,Za=e,ya=s,_h=m,vh=h,Wg=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Vy(ht,function(){return o1(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=F.T,F.T=null,h=V.p,V.p=2,b=Oe,Oe|=4;try{Uy(e,i,s)}finally{Oe=b,V.p=h,F.T=l}}xn=1,i1(),a1(),s1()}}function i1(){if(xn===1){xn=0;var e=Za,i=yr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=F.T,F.T=null;var l=V.p;V.p=2;var h=Oe;Oe|=4;try{Fg(i,e);var m=Lh,b=km(e.containerInfo),O=m.focusedElem,Y=m.selectionRange;if(b!==O&&O&&O.ownerDocument&&Vm(O.ownerDocument.documentElement,O)){if(Y!==null&&af(O)){var st=Y.start,mt=Y.end;if(mt===void 0&&(mt=st),"selectionStart"in O)O.selectionStart=st,O.selectionEnd=Math.min(mt,O.value.length);else{var vt=O.ownerDocument||document,ot=vt&&vt.defaultView||window;if(ot.getSelection){var ct=ot.getSelection(),Xt=O.textContent.length,ee=Math.min(Y.start,Xt),Xe=Y.end===void 0?ee:Math.min(Y.end,Xt);!ct.extend&&ee>Xe&&(b=Xe,Xe=ee,ee=b);var tt=Gm(O,ee),Z=Gm(O,Xe);if(tt&&Z&&(ct.rangeCount!==1||ct.anchorNode!==tt.node||ct.anchorOffset!==tt.offset||ct.focusNode!==Z.node||ct.focusOffset!==Z.offset)){var at=vt.createRange();at.setStart(tt.node,tt.offset),ct.removeAllRanges(),ee>Xe?(ct.addRange(at),ct.extend(Z.node,Z.offset)):(at.setEnd(Z.node,Z.offset),ct.addRange(at))}}}}for(vt=[],ct=O;ct=ct.parentNode;)ct.nodeType===1&&vt.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof O.focus=="function"&&O.focus(),O=0;O<vt.length;O++){var _t=vt[O];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}Oc=!!Nh,Lh=Nh=null}finally{Oe=h,V.p=l,F.T=s}}e.current=i,xn=2}}function a1(){if(xn===2){xn=0;var e=Za,i=yr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=F.T,F.T=null;var l=V.p;V.p=2;var h=Oe;Oe|=4;try{Ng(e,i.alternate,i)}finally{Oe=h,V.p=l,F.T=s}}xn=3}}function s1(){if(xn===4||xn===3){xn=0,H();var e=Za,i=yr,s=ya,l=Wg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?xn=5:(xn=0,yr=Za=null,r1(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(ja=null),qs(s),i=i.stateNode,Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(Mt,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=F.T,h=V.p,V.p=2,F.T=null;try{for(var m=e.onRecoverableError,b=0;b<l.length;b++){var O=l[b];m(O.value,{componentStack:O.stack})}}finally{F.T=i,V.p=h}}(ya&3)!==0&&Mc(),ji(e),h=e.pendingLanes,(s&261930)!==0&&(h&42)!==0?e===xh?Wo++:(Wo=0,xh=e):Wo=0,Yo(0)}}function r1(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Ao(i)))}function Mc(){return i1(),a1(),s1(),o1()}function o1(){if(xn!==5)return!1;var e=Za,i=_h;_h=0;var s=qs(ya),l=F.T,h=V.p;try{V.p=32>s?32:s,F.T=null,s=vh,vh=null;var m=Za,b=ya;if(xn=0,yr=Za=null,ya=0,(Oe&6)!==0)throw Error(a(331));var O=Oe;if(Oe|=4,Vg(m.current),Bg(m,m.current,b,s),Oe=O,Yo(0,!1),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(Mt,m)}catch{}return!0}finally{V.p=h,F.T=l,r1(e,i)}}function l1(e,i,s){i=Mi(s,i),i=Qf(e.stateNode,i,2),e=Va(e,i,2),e!==null&&(Hn(e,2),ji(e))}function Ge(e,i,s){if(e.tag===3)l1(e,e,s);else for(;i!==null;){if(i.tag===3){l1(i,e,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ja===null||!ja.has(l))){e=Mi(s,e),s=cg(2),l=Va(i,s,2),l!==null&&(ug(s,l,i,e),Hn(l,2),ji(l));break}}i=i.return}}function Mh(e,i,s){var l=e.pingCache;if(l===null){l=e.pingCache=new Oy;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(s)||(ph=!0,h.add(s),e=By.bind(null,e,i,s),i.then(e,e))}function By(e,i,s){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,Ye===e&&(ye&s)===s&&(on===4||on===3&&(ye&62914560)===ye&&300>D()-gc?(Oe&2)===0&&Sr(e,0):mh|=s,xr===ye&&(xr=0)),ji(e)}function c1(e,i){i===0&&(i=Ie()),e=vs(e,i),e!==null&&(Hn(e,i),ji(e))}function Hy(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),c1(e,s)}function Gy(e,i){var s=0;switch(e.tag){case 31:case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(s=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),c1(e,s)}function Vy(e,i){return be(e,i)}var bc=null,br=null,bh=!1,Ec=!1,Eh=!1,Qa=0;function ji(e){e!==br&&e.next===null&&(br===null?bc=br=e:br=br.next=e),Ec=!0,bh||(bh=!0,Xy())}function Yo(e,i){if(!Eh&&Ec){Eh=!0;do for(var s=!1,l=bc;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var m=0;else{var b=l.suspendedLanes,O=l.pingedLanes;m=(1<<31-Ft(42|e)+1)-1,m&=h&~(b&~O),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,d1(l,m))}else m=ye,m=xt(l,l===Ye?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||wt(l,m)||(s=!0,d1(l,m));l=l.next}while(s);Eh=!1}}function ky(){u1()}function u1(){Ec=bh=!1;var e=0;Qa!==0&&tS()&&(e=Qa);for(var i=D(),s=null,l=bc;l!==null;){var h=l.next,m=f1(l,i);m===0?(l.next=null,s===null?bc=h:s.next=h,h===null&&(br=s)):(s=l,(e!==0||(m&3)!==0)&&(Ec=!0)),l=h}xn!==0&&xn!==5||Yo(e),Qa!==0&&(Qa=0)}function f1(e,i){for(var s=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var b=31-Ft(m),O=1<<b,Y=h[b];Y===-1?((O&s)===0||(O&l)!==0)&&(h[b]=ae(O,i)):Y<=i&&(e.expiredLanes|=O),m&=~O}if(i=Ye,s=ye,s=xt(e,e===i?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,s===0||e===i&&(He===2||He===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Pe(l),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||wt(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(l!==null&&Pe(l),qs(s)){case 2:case 8:s=yt;break;case 32:s=ht;break;case 268435456:s=Dt;break;default:s=ht}return l=h1.bind(null,e),s=be(s,l),e.callbackPriority=i,e.callbackNode=s,i}return l!==null&&l!==null&&Pe(l),e.callbackPriority=2,e.callbackNode=null,2}function h1(e,i){if(xn!==0&&xn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(Mc()&&e.callbackNode!==s)return null;var l=ye;return l=xt(e,e===Ye?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(qg(e,l,i),f1(e,D()),e.callbackNode!=null&&e.callbackNode===s?h1.bind(null,e):null)}function d1(e,i){if(Mc())return null;qg(e,i,!0)}function Xy(){nS(function(){(Oe&6)!==0?be(gt,ky):u1()})}function Th(){if(Qa===0){var e=lr;e===0&&(e=Lt,Lt<<=1,(Lt&261888)===0&&(Lt=256)),Qa=e}return Qa}function p1(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Nl(""+e)}function m1(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function Wy(e,i,s,l,h){if(i==="submit"&&s&&s.stateNode===h){var m=p1((h[Cn]||null).action),b=l.submitter;b&&(i=(i=b[Cn]||null)?p1(i.formAction):b.getAttribute("formAction"),i!==null&&(m=i,b=null));var O=new zl("action","action",null,l,h);e.push({event:O,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Qa!==0){var Y=b?m1(h,b):new FormData(h);Wf(s,{pending:!0,data:Y,method:h.method,action:m},null,Y)}}else typeof m=="function"&&(O.preventDefault(),Y=b?m1(h,b):new FormData(h),Wf(s,{pending:!0,data:Y,method:h.method,action:m},m,Y))},currentTarget:h}]})}}for(var Ah=0;Ah<lf.length;Ah++){var Ch=lf[Ah],Yy=Ch.toLowerCase(),qy=Ch[0].toUpperCase()+Ch.slice(1);Fi(Yy,"on"+qy)}Fi(Ym,"onAnimationEnd"),Fi(qm,"onAnimationIteration"),Fi(jm,"onAnimationStart"),Fi("dblclick","onDoubleClick"),Fi("focusin","onFocus"),Fi("focusout","onBlur"),Fi(cy,"onTransitionRun"),Fi(uy,"onTransitionStart"),Fi(fy,"onTransitionCancel"),Fi(Zm,"onTransitionEnd"),nt("onMouseEnter",["mouseout","mouseover"]),nt("onMouseLeave",["mouseout","mouseover"]),nt("onPointerEnter",["pointerout","pointerover"]),nt("onPointerLeave",["pointerout","pointerover"]),rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),rt("onBeforeInput",["compositionend","keypress","textInput","paste"]),rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(qo));function g1(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var l=e[s],h=l.event;l=l.listeners;t:{var m=void 0;if(i)for(var b=l.length-1;0<=b;b--){var O=l[b],Y=O.instance,st=O.currentTarget;if(O=O.listener,Y!==m&&h.isPropagationStopped())break t;m=O,h.currentTarget=st;try{m(h)}catch(mt){Bl(mt)}h.currentTarget=null,m=Y}else for(b=0;b<l.length;b++){if(O=l[b],Y=O.instance,st=O.currentTarget,O=O.listener,Y!==m&&h.isPropagationStopped())break t;m=O,h.currentTarget=st;try{m(h)}catch(mt){Bl(mt)}h.currentTarget=null,m=Y}}}}function xe(e,i){var s=i[js];s===void 0&&(s=i[js]=new Set);var l=e+"__bubble";s.has(l)||(_1(i,e,2,!1),s.add(l))}function Rh(e,i,s){var l=0;i&&(l|=4),_1(s,e,l,i)}var Tc="_reactListening"+Math.random().toString(36).slice(2);function wh(e){if(!e[Tc]){e[Tc]=!0,$.forEach(function(s){s!=="selectionchange"&&(jy.has(s)||Rh(s,!1,e),Rh(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[Tc]||(i[Tc]=!0,Rh("selectionchange",!1,i))}}function _1(e,i,s,l){switch(Y1(i)){case 2:var h=MS;break;case 8:h=bS;break;default:h=Xh}s=h.bind(null,i,s,e),h=void 0,!ju||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(i,s,{capture:!0,passive:h}):e.addEventListener(i,s,!0):h!==void 0?e.addEventListener(i,s,{passive:h}):e.addEventListener(i,s,!1)}function Dh(e,i,s,l,h){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var b=l.tag;if(b===3||b===4){var O=l.stateNode.containerInfo;if(O===h)break;if(b===4)for(b=l.return;b!==null;){var Y=b.tag;if((Y===3||Y===4)&&b.stateNode.containerInfo===h)return;b=b.return}for(;O!==null;){if(b=Na(O),b===null)return;if(Y=b.tag,Y===5||Y===6||Y===26||Y===27){l=m=b;continue t}O=O.parentNode}}l=l.return}Mm(function(){var st=m,mt=Yu(s),vt=[];t:{var ot=Km.get(e);if(ot!==void 0){var ct=zl,Xt=e;switch(e){case"keypress":if(Ol(s)===0)break t;case"keydown":case"keyup":ct=Gx;break;case"focusin":Xt="focus",ct=Ju;break;case"focusout":Xt="blur",ct=Ju;break;case"beforeblur":case"afterblur":ct=Ju;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=Tm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=wx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=Xx;break;case Ym:case qm:case jm:ct=Nx;break;case Zm:ct=Yx;break;case"scroll":case"scrollend":ct=Cx;break;case"wheel":ct=jx;break;case"copy":case"cut":case"paste":ct=Ox;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=Cm;break;case"toggle":case"beforetoggle":ct=Kx}var ee=(i&4)!==0,Xe=!ee&&(e==="scroll"||e==="scrollend"),tt=ee?ot!==null?ot+"Capture":null:ot;ee=[];for(var Z=st,at;Z!==null;){var _t=Z;if(at=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||at===null||tt===null||(_t=mo(Z,tt),_t!=null&&ee.push(jo(Z,_t,at))),Xe)break;Z=Z.return}0<ee.length&&(ot=new ct(ot,Xt,null,s,mt),vt.push({event:ot,listeners:ee}))}}if((i&7)===0){t:{if(ot=e==="mouseover"||e==="pointerover",ct=e==="mouseout"||e==="pointerout",ot&&s!==Wu&&(Xt=s.relatedTarget||s.fromElement)&&(Na(Xt)||Xt[Pi]))break t;if((ct||ot)&&(ot=mt.window===mt?mt:(ot=mt.ownerDocument)?ot.defaultView||ot.parentWindow:window,ct?(Xt=s.relatedTarget||s.toElement,ct=st,Xt=Xt?Na(Xt):null,Xt!==null&&(Xe=c(Xt),ee=Xt.tag,Xt!==Xe||ee!==5&&ee!==27&&ee!==6)&&(Xt=null)):(ct=null,Xt=st),ct!==Xt)){if(ee=Tm,_t="onMouseLeave",tt="onMouseEnter",Z="mouse",(e==="pointerout"||e==="pointerover")&&(ee=Cm,_t="onPointerLeave",tt="onPointerEnter",Z="pointer"),Xe=ct==null?ot:ps(ct),at=Xt==null?ot:ps(Xt),ot=new ee(_t,Z+"leave",ct,s,mt),ot.target=Xe,ot.relatedTarget=at,_t=null,Na(mt)===st&&(ee=new ee(tt,Z+"enter",Xt,s,mt),ee.target=at,ee.relatedTarget=Xe,_t=ee),Xe=_t,ct&&Xt)e:{for(ee=Zy,tt=ct,Z=Xt,at=0,_t=tt;_t;_t=ee(_t))at++;_t=0;for(var Jt=Z;Jt;Jt=ee(Jt))_t++;for(;0<at-_t;)tt=ee(tt),at--;for(;0<_t-at;)Z=ee(Z),_t--;for(;at--;){if(tt===Z||Z!==null&&tt===Z.alternate){ee=tt;break e}tt=ee(tt),Z=ee(Z)}ee=null}else ee=null;ct!==null&&v1(vt,ot,ct,ee,!1),Xt!==null&&Xe!==null&&v1(vt,Xe,Xt,ee,!0)}}t:{if(ot=st?ps(st):window,ct=ot.nodeName&&ot.nodeName.toLowerCase(),ct==="select"||ct==="input"&&ot.type==="file")var Re=Pm;else if(Lm(ot))if(zm)Re=ry;else{Re=ay;var Zt=iy}else ct=ot.nodeName,!ct||ct.toLowerCase()!=="input"||ot.type!=="checkbox"&&ot.type!=="radio"?st&&zi(st.elementType)&&(Re=Pm):Re=sy;if(Re&&(Re=Re(e,st))){Om(vt,Re,s,mt);break t}Zt&&Zt(e,ot,st),e==="focusout"&&st&&ot.type==="number"&&st.memoizedProps.value!=null&&wn(ot,"number",ot.value)}switch(Zt=st?ps(st):window,e){case"focusin":(Lm(Zt)||Zt.contentEditable==="true")&&(tr=Zt,sf=st,bo=null);break;case"focusout":bo=sf=tr=null;break;case"mousedown":rf=!0;break;case"contextmenu":case"mouseup":case"dragend":rf=!1,Xm(vt,s,mt);break;case"selectionchange":if(ly)break;case"keydown":case"keyup":Xm(vt,s,mt)}var de;if(tf)t:{switch(e){case"compositionstart":var Se="onCompositionStart";break t;case"compositionend":Se="onCompositionEnd";break t;case"compositionupdate":Se="onCompositionUpdate";break t}Se=void 0}else $s?Um(e,s)&&(Se="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(Se="onCompositionStart");Se&&(Rm&&s.locale!=="ko"&&($s||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&$s&&(de=bm()):(Pa=mt,Zu="value"in Pa?Pa.value:Pa.textContent,$s=!0)),Zt=Ac(st,Se),0<Zt.length&&(Se=new Am(Se,e,null,s,mt),vt.push({event:Se,listeners:Zt}),de?Se.data=de:(de=Nm(s),de!==null&&(Se.data=de)))),(de=Jx?$x(e,s):ty(e,s))&&(Se=Ac(st,"onBeforeInput"),0<Se.length&&(Zt=new Am("onBeforeInput","beforeinput",null,s,mt),vt.push({event:Zt,listeners:Se}),Zt.data=de)),Wy(vt,e,st,s,mt)}g1(vt,i)})}function jo(e,i,s){return{instance:e,listener:i,currentTarget:s}}function Ac(e,i){for(var s=i+"Capture",l=[];e!==null;){var h=e,m=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||m===null||(h=mo(e,s),h!=null&&l.unshift(jo(e,h,m)),h=mo(e,i),h!=null&&l.push(jo(e,h,m))),e.tag===3)return l;e=e.return}return[]}function Zy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function v1(e,i,s,l,h){for(var m=i._reactName,b=[];s!==null&&s!==l;){var O=s,Y=O.alternate,st=O.stateNode;if(O=O.tag,Y!==null&&Y===l)break;O!==5&&O!==26&&O!==27||st===null||(Y=st,h?(st=mo(s,m),st!=null&&b.unshift(jo(s,st,Y))):h||(st=mo(s,m),st!=null&&b.push(jo(s,st,Y)))),s=s.return}b.length!==0&&e.push({event:i,listeners:b})}var Ky=/\r\n?/g,Qy=/\u0000|\uFFFD/g;function x1(e){return(typeof e=="string"?e:""+e).replace(Ky,`
`).replace(Qy,"")}function y1(e,i){return i=x1(i),x1(e)===i}function ke(e,i,s,l,h,m){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||vn(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&vn(e,""+l);break;case"className":$t(e,"class",l);break;case"tabIndex":$t(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":$t(e,s,l);break;case"style":Ks(e,l,m);break;case"data":if(i!=="object"){$t(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Nl(""+l),e.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(i!=="input"&&ke(e,i,"name",h.name,h,null),ke(e,i,"formEncType",h.formEncType,h,null),ke(e,i,"formMethod",h.formMethod,h,null),ke(e,i,"formTarget",h.formTarget,h,null)):(ke(e,i,"encType",h.encType,h,null),ke(e,i,"method",h.method,h,null),ke(e,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Nl(""+l),e.setAttribute(s,l);break;case"onClick":l!=null&&(e.onclick=sa);break;case"onScroll":l!=null&&xe("scroll",e);break;case"onScrollEnd":l!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}s=Nl(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""+l):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":l===!0?e.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,l):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(s,l):e.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(s):e.setAttribute(s,l);break;case"popover":xe("beforetoggle",e),xe("toggle",e),Yt(e,"popover",l);break;case"xlinkActuate":qt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":qt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":qt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":qt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":qt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":qt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":qt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":qt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":qt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Yt(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Tx.get(s)||s,Yt(e,s,l))}}function Uh(e,i,s,l,h,m){switch(s){case"style":Ks(e,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof l=="string"?vn(e,l):(typeof l=="number"||typeof l=="bigint")&&vn(e,""+l);break;case"onScroll":l!=null&&xe("scroll",e);break;case"onScrollEnd":l!=null&&xe("scrollend",e);break;case"onClick":l!=null&&(e.onclick=sa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!lt.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),i=s.slice(2,h?s.length-7:void 0),m=e[Cn]||null,m=m!=null?m[s]:null,typeof m=="function"&&e.removeEventListener(i,m,h),typeof l=="function")){typeof m!="function"&&m!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,l,h);break t}s in e?e[s]=l:l===!0?e.setAttribute(s,""):Yt(e,s,l)}}}function zn(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var l=!1,h=!1,m;for(m in s)if(s.hasOwnProperty(m)){var b=s[m];if(b!=null)switch(m){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:ke(e,i,m,b,s,null)}}h&&ke(e,i,"srcSet",s.srcSet,s,null),l&&ke(e,i,"src",s.src,s,null);return;case"input":xe("invalid",e);var O=m=b=h=null,Y=null,st=null;for(l in s)if(s.hasOwnProperty(l)){var mt=s[l];if(mt!=null)switch(l){case"name":h=mt;break;case"type":b=mt;break;case"checked":Y=mt;break;case"defaultChecked":st=mt;break;case"value":m=mt;break;case"defaultValue":O=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(a(137,i));break;default:ke(e,i,l,mt,s,null)}}aa(e,m,O,Y,st,b,h,!1);return;case"select":xe("invalid",e),l=b=m=null;for(h in s)if(s.hasOwnProperty(h)&&(O=s[h],O!=null))switch(h){case"value":m=O;break;case"defaultValue":b=O;break;case"multiple":l=O;default:ke(e,i,h,O,s,null)}i=m,s=b,e.multiple=!!l,i!=null?yi(e,!!l,i,!1):s!=null&&yi(e,!!l,s,!0);return;case"textarea":xe("invalid",e),m=h=l=null;for(b in s)if(s.hasOwnProperty(b)&&(O=s[b],O!=null))switch(b){case"value":l=O;break;case"defaultValue":h=O;break;case"children":m=O;break;case"dangerouslySetInnerHTML":if(O!=null)throw Error(a(91));break;default:ke(e,i,b,O,s,null)}Dn(e,l,h,m);return;case"option":for(Y in s)s.hasOwnProperty(Y)&&(l=s[Y],l!=null)&&(Y==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":ke(e,i,Y,l,s,null));return;case"dialog":xe("beforetoggle",e),xe("toggle",e),xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(l=0;l<qo.length;l++)xe(qo[l],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(st in s)if(s.hasOwnProperty(st)&&(l=s[st],l!=null))switch(st){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:ke(e,i,st,l,s,null)}return;default:if(zi(i)){for(mt in s)s.hasOwnProperty(mt)&&(l=s[mt],l!==void 0&&Uh(e,i,mt,l,s,void 0));return}}for(O in s)s.hasOwnProperty(O)&&(l=s[O],l!=null&&ke(e,i,O,l,s,null))}function Jy(e,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,m=null,b=null,O=null,Y=null,st=null,mt=null;for(ct in s){var vt=s[ct];if(s.hasOwnProperty(ct)&&vt!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":Y=vt;default:l.hasOwnProperty(ct)||ke(e,i,ct,null,l,vt)}}for(var ot in l){var ct=l[ot];if(vt=s[ot],l.hasOwnProperty(ot)&&(ct!=null||vt!=null))switch(ot){case"type":m=ct;break;case"name":h=ct;break;case"checked":st=ct;break;case"defaultChecked":mt=ct;break;case"value":b=ct;break;case"defaultValue":O=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(a(137,i));break;default:ct!==vt&&ke(e,i,ot,ct,l,vt)}}Rn(e,b,O,Y,st,mt,m,h);return;case"select":ct=b=O=ot=null;for(m in s)if(Y=s[m],s.hasOwnProperty(m)&&Y!=null)switch(m){case"value":break;case"multiple":ct=Y;default:l.hasOwnProperty(m)||ke(e,i,m,null,l,Y)}for(h in l)if(m=l[h],Y=s[h],l.hasOwnProperty(h)&&(m!=null||Y!=null))switch(h){case"value":ot=m;break;case"defaultValue":O=m;break;case"multiple":b=m;default:m!==Y&&ke(e,i,h,m,l,Y)}i=O,s=b,l=ct,ot!=null?yi(e,!!s,ot,!1):!!l!=!!s&&(i!=null?yi(e,!!s,i,!0):yi(e,!!s,s?[]:"",!1));return;case"textarea":ct=ot=null;for(O in s)if(h=s[O],s.hasOwnProperty(O)&&h!=null&&!l.hasOwnProperty(O))switch(O){case"value":break;case"children":break;default:ke(e,i,O,null,l,h)}for(b in l)if(h=l[b],m=s[b],l.hasOwnProperty(b)&&(h!=null||m!=null))switch(b){case"value":ot=h;break;case"defaultValue":ct=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==m&&ke(e,i,b,h,l,m)}Be(e,ot,ct);return;case"option":for(var Xt in s)ot=s[Xt],s.hasOwnProperty(Xt)&&ot!=null&&!l.hasOwnProperty(Xt)&&(Xt==="selected"?e.selected=!1:ke(e,i,Xt,null,l,ot));for(Y in l)ot=l[Y],ct=s[Y],l.hasOwnProperty(Y)&&ot!==ct&&(ot!=null||ct!=null)&&(Y==="selected"?e.selected=ot&&typeof ot!="function"&&typeof ot!="symbol":ke(e,i,Y,ot,l,ct));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in s)ot=s[ee],s.hasOwnProperty(ee)&&ot!=null&&!l.hasOwnProperty(ee)&&ke(e,i,ee,null,l,ot);for(st in l)if(ot=l[st],ct=s[st],l.hasOwnProperty(st)&&ot!==ct&&(ot!=null||ct!=null))switch(st){case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(a(137,i));break;default:ke(e,i,st,ot,l,ct)}return;default:if(zi(i)){for(var Xe in s)ot=s[Xe],s.hasOwnProperty(Xe)&&ot!==void 0&&!l.hasOwnProperty(Xe)&&Uh(e,i,Xe,void 0,l,ot);for(mt in l)ot=l[mt],ct=s[mt],!l.hasOwnProperty(mt)||ot===ct||ot===void 0&&ct===void 0||Uh(e,i,mt,ot,l,ct);return}}for(var tt in s)ot=s[tt],s.hasOwnProperty(tt)&&ot!=null&&!l.hasOwnProperty(tt)&&ke(e,i,tt,null,l,ot);for(vt in l)ot=l[vt],ct=s[vt],!l.hasOwnProperty(vt)||ot===ct||ot==null&&ct==null||ke(e,i,vt,ot,l,ct)}function S1(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function $y(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var h=s[l],m=h.transferSize,b=h.initiatorType,O=h.duration;if(m&&O&&S1(b)){for(b=0,O=h.responseEnd,l+=1;l<s.length;l++){var Y=s[l],st=Y.startTime;if(st>O)break;var mt=Y.transferSize,vt=Y.initiatorType;mt&&S1(vt)&&(Y=Y.responseEnd,b+=mt*(Y<O?1:(O-st)/(Y-st)))}if(--l,i+=8*(m+b)/(h.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Nh=null,Lh=null;function Cc(e){return e.nodeType===9?e:e.ownerDocument}function M1(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function b1(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function Oh(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ph=null;function tS(){var e=window.event;return e&&e.type==="popstate"?e===Ph?!1:(Ph=e,!0):(Ph=null,!1)}var E1=typeof setTimeout=="function"?setTimeout:void 0,eS=typeof clearTimeout=="function"?clearTimeout:void 0,T1=typeof Promise=="function"?Promise:void 0,nS=typeof queueMicrotask=="function"?queueMicrotask:typeof T1<"u"?function(e){return T1.resolve(null).then(e).catch(iS)}:E1;function iS(e){setTimeout(function(){throw e})}function Ja(e){return e==="head"}function A1(e,i){var s=i,l=0;do{var h=s.nextSibling;if(e.removeChild(s),h&&h.nodeType===8)if(s=h.data,s==="/$"||s==="/&"){if(l===0){e.removeChild(h),Cr(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")Zo(e.ownerDocument.documentElement);else if(s==="head"){s=e.ownerDocument.head,Zo(s);for(var m=s.firstChild;m;){var b=m.nextSibling,O=m.nodeName;m[ds]||O==="SCRIPT"||O==="STYLE"||O==="LINK"&&m.rel.toLowerCase()==="stylesheet"||s.removeChild(m),m=b}}else s==="body"&&Zo(e.ownerDocument.body);s=h}while(s);Cr(i)}function C1(e,i){var s=e;e=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(e===0)break;e--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||e++;s=l}while(s)}function zh(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":zh(s),po(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function aS(e,i,s,l){for(;e.nodeType===1;){var h=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[ds])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var m=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Ci(e.nextSibling),e===null)break}return null}function sS(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=Ci(e.nextSibling),e===null))return null;return e}function R1(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=Ci(e.nextSibling),e===null))return null;return e}function Fh(e){return e.data==="$?"||e.data==="$~"}function Ih(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function rS(e,i){var s=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Ci(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var Bh=null;function w1(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"||s==="/&"){if(i===0)return Ci(e.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}e=e.nextSibling}return null}function D1(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return e;i--}else s!=="/$"&&s!=="/&"||i++}e=e.previousSibling}return null}function U1(e,i,s){switch(i=Cc(s),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Zo(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);po(e)}var Ri=new Map,N1=new Set;function Rc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Sa=V.d;V.d={f:oS,r:lS,D:cS,C:uS,L:fS,m:hS,X:pS,S:dS,M:mS};function oS(){var e=Sa.f(),i=xc();return e||i}function lS(e){var i=La(e);i!==null&&i.tag===5&&i.type==="form"?Z0(i):Sa.r(e)}var Er=typeof document>"u"?null:document;function L1(e,i,s){var l=Er;if(l&&typeof i=="string"&&i){var h=oe(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),N1.has(h)||(N1.add(h),e={rel:e,crossOrigin:s,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),zn(i,"link",e),P(i),l.head.appendChild(i)))}}function cS(e){Sa.D(e),L1("dns-prefetch",e,null)}function uS(e,i){Sa.C(e,i),L1("preconnect",e,i)}function fS(e,i,s){Sa.L(e,i,s);var l=Er;if(l&&e&&i){var h='link[rel="preload"][as="'+oe(i)+'"]';i==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+oe(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+oe(s.imageSizes)+'"]')):h+='[href="'+oe(e)+'"]';var m=h;switch(i){case"style":m=Tr(e);break;case"script":m=Ar(e)}Ri.has(m)||(e=_({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),Ri.set(m,e),l.querySelector(h)!==null||i==="style"&&l.querySelector(Ko(m))||i==="script"&&l.querySelector(Qo(m))||(i=l.createElement("link"),zn(i,"link",e),P(i),l.head.appendChild(i)))}}function hS(e,i){Sa.m(e,i);var s=Er;if(s&&e){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+oe(l)+'"][href="'+oe(e)+'"]',m=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Ar(e)}if(!Ri.has(m)&&(e=_({rel:"modulepreload",href:e},i),Ri.set(m,e),s.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Qo(m)))return}l=s.createElement("link"),zn(l,"link",e),P(l),s.head.appendChild(l)}}}function dS(e,i,s){Sa.S(e,i,s);var l=Er;if(l&&e){var h=Oa(l).hoistableStyles,m=Tr(e);i=i||"default";var b=h.get(m);if(!b){var O={loading:0,preload:null};if(b=l.querySelector(Ko(m)))O.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":i},s),(s=Ri.get(m))&&Hh(e,s);var Y=b=l.createElement("link");P(Y),zn(Y,"link",e),Y._p=new Promise(function(st,mt){Y.onload=st,Y.onerror=mt}),Y.addEventListener("load",function(){O.loading|=1}),Y.addEventListener("error",function(){O.loading|=2}),O.loading|=4,wc(b,i,l)}b={type:"stylesheet",instance:b,count:1,state:O},h.set(m,b)}}}function pS(e,i){Sa.X(e,i);var s=Er;if(s&&e){var l=Oa(s).hoistableScripts,h=Ar(e),m=l.get(h);m||(m=s.querySelector(Qo(h)),m||(e=_({src:e,async:!0},i),(i=Ri.get(h))&&Gh(e,i),m=s.createElement("script"),P(m),zn(m,"link",e),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(h,m))}}function mS(e,i){Sa.M(e,i);var s=Er;if(s&&e){var l=Oa(s).hoistableScripts,h=Ar(e),m=l.get(h);m||(m=s.querySelector(Qo(h)),m||(e=_({src:e,async:!0,type:"module"},i),(i=Ri.get(h))&&Gh(e,i),m=s.createElement("script"),P(m),zn(m,"link",e),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(h,m))}}function O1(e,i,s,l){var h=(h=it.current)?Rc(h):null;if(!h)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Tr(s.href),s=Oa(h).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=Tr(s.href);var m=Oa(h).hoistableStyles,b=m.get(e);if(b||(h=h.ownerDocument||h,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,b),(m=h.querySelector(Ko(e)))&&!m._p&&(b.instance=m,b.state.loading=5),Ri.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Ri.set(e,s),m||gS(h,e,s,b.state))),i&&l===null)throw Error(a(528,""));return b}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Ar(s),s=Oa(h).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Tr(e){return'href="'+oe(e)+'"'}function Ko(e){return'link[rel="stylesheet"]['+e+"]"}function P1(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function gS(e,i,s,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),zn(i,"link",s),P(i),e.head.appendChild(i))}function Ar(e){return'[src="'+oe(e)+'"]'}function Qo(e){return"script[async]"+e}function z1(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+oe(s.href)+'"]');if(l)return i.instance=l,P(l),l;var h=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),P(l),zn(l,"style",h),wc(l,s.precedence,e),i.instance=l;case"stylesheet":h=Tr(s.href);var m=e.querySelector(Ko(h));if(m)return i.state.loading|=4,i.instance=m,P(m),m;l=P1(s),(h=Ri.get(h))&&Hh(l,h),m=(e.ownerDocument||e).createElement("link"),P(m);var b=m;return b._p=new Promise(function(O,Y){b.onload=O,b.onerror=Y}),zn(m,"link",l),i.state.loading|=4,wc(m,s.precedence,e),i.instance=m;case"script":return m=Ar(s.src),(h=e.querySelector(Qo(m)))?(i.instance=h,P(h),h):(l=s,(h=Ri.get(m))&&(l=_({},s),Gh(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),P(h),zn(h,"link",l),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,wc(l,s.precedence,e));return i.instance}function wc(e,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,m=h,b=0;b<l.length;b++){var O=l[b];if(O.dataset.precedence===i)m=O;else if(m!==h)break}m?m.parentNode.insertBefore(e,m.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function Hh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Gh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var Dc=null;function F1(e,i,s){if(Dc===null){var l=new Map,h=Dc=new Map;h.set(s,l)}else h=Dc,l=h.get(s),l||(l=new Map,h.set(s,l));if(l.has(e))return l;for(l.set(e,null),s=s.getElementsByTagName(e),h=0;h<s.length;h++){var m=s[h];if(!(m[ds]||m[hn]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var b=m.getAttribute(i)||"";b=e+b;var O=l.get(b);O?O.push(m):l.set(b,[m])}}return l}function I1(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function _S(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(e=i.disabled,typeof i.precedence=="string"&&e==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function B1(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function vS(e,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var h=Tr(l.href),m=i.querySelector(Ko(h));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=Uc.bind(e),i.then(e,e)),s.state.loading|=4,s.instance=m,P(m);return}m=i.ownerDocument||i,l=P1(l),(h=Ri.get(h))&&Hh(l,h),m=m.createElement("link"),P(m);var b=m;b._p=new Promise(function(O,Y){b.onload=O,b.onerror=Y}),zn(m,"link",l),s.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(e.count++,s=Uc.bind(e),i.addEventListener("load",s),i.addEventListener("error",s))}}var Vh=0;function xS(e,i){return e.stylesheets&&e.count===0&&Lc(e,e.stylesheets),0<e.count||0<e.imgCount?function(s){var l=setTimeout(function(){if(e.stylesheets&&Lc(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+i);0<e.imgBytes&&Vh===0&&(Vh=62500*$y());var h=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Lc(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>Vh?50:800)+i);return e.unsuspend=s,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(h)}}:null}function Uc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Lc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Nc=null;function Lc(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Nc=new Map,i.forEach(yS,e),Nc=null,Uc.call(e))}function yS(e,i){if(!(i.state.loading&4)){var s=Nc.get(e);if(s)var l=s.get(null);else{s=new Map,Nc.set(e,s);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<h.length;m++){var b=h[m];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(s.set(b.dataset.precedence,b),l=b)}l&&s.set(null,l)}h=i.instance,b=h.getAttribute("data-precedence"),m=s.get(b)||l,m===l&&s.set(null,h),s.set(b,h),this.count++,l=Uc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),m?m.parentNode.insertBefore(h,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var Jo={$$typeof:M,Provider:null,Consumer:null,_currentValue:Q,_currentValue2:Q,_threadCount:0};function SS(e,i,s,l,h,m,b,O,Y){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ce(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ce(0),this.hiddenUpdates=Ce(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=m,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=Y,this.incompleteTransitions=new Map}function H1(e,i,s,l,h,m,b,O,Y,st,mt,vt){return e=new SS(e,i,s,b,Y,st,mt,vt,O),i=1,m===!0&&(i|=24),m=li(3,null,null,i),e.current=m,m.stateNode=e,i=Sf(),i.refCount++,e.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:s,cache:i},Tf(m),e}function G1(e){return e?(e=ir,e):ir}function V1(e,i,s,l,h,m){h=G1(h),l.context===null?l.context=h:l.pendingContext=h,l=Ga(i),l.payload={element:s},m=m===void 0?null:m,m!==null&&(l.callback=m),s=Va(e,l,i),s!==null&&(ti(s,e,i),Do(s,e,i))}function k1(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function kh(e,i){k1(e,i),(e=e.alternate)&&k1(e,i)}function X1(e){if(e.tag===13||e.tag===31){var i=vs(e,67108864);i!==null&&ti(i,e,67108864),kh(e,67108864)}}function W1(e){if(e.tag===13||e.tag===31){var i=di();i=uo(i);var s=vs(e,i);s!==null&&ti(s,e,i),kh(e,i)}}var Oc=!0;function MS(e,i,s,l){var h=F.T;F.T=null;var m=V.p;try{V.p=2,Xh(e,i,s,l)}finally{V.p=m,F.T=h}}function bS(e,i,s,l){var h=F.T;F.T=null;var m=V.p;try{V.p=8,Xh(e,i,s,l)}finally{V.p=m,F.T=h}}function Xh(e,i,s,l){if(Oc){var h=Wh(l);if(h===null)Dh(e,i,l,Pc,s),q1(e,l);else if(TS(h,e,i,s,l))l.stopPropagation();else if(q1(e,l),i&4&&-1<ES.indexOf(e)){for(;h!==null;){var m=La(h);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var b=St(m.pendingLanes);if(b!==0){var O=m;for(O.pendingLanes|=2,O.entangledLanes|=2;b;){var Y=1<<31-Ft(b);O.entanglements[1]|=Y,b&=~Y}ji(m),(Oe&6)===0&&(_c=D()+500,Yo(0))}}break;case 31:case 13:O=vs(m,2),O!==null&&ti(O,m,2),xc(),kh(m,2)}if(m=Wh(l),m===null&&Dh(e,i,l,Pc,s),m===h)break;h=m}h!==null&&l.stopPropagation()}else Dh(e,i,l,null,s)}}function Wh(e){return e=Yu(e),Yh(e)}var Pc=null;function Yh(e){if(Pc=null,e=Na(e),e!==null){var i=c(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=u(i),e!==null)return e;e=null}else if(s===31){if(e=f(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Pc=e,null}function Y1(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(J()){case gt:return 2;case yt:return 8;case ht:case Kt:return 32;case Dt:return 268435456;default:return 32}default:return 32}}var qh=!1,$a=null,ts=null,es=null,$o=new Map,tl=new Map,ns=[],ES="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function q1(e,i){switch(e){case"focusin":case"focusout":$a=null;break;case"dragenter":case"dragleave":ts=null;break;case"mouseover":case"mouseout":es=null;break;case"pointerover":case"pointerout":$o.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":tl.delete(i.pointerId)}}function el(e,i,s,l,h,m){return e===null||e.nativeEvent!==m?(e={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:m,targetContainers:[h]},i!==null&&(i=La(i),i!==null&&X1(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function TS(e,i,s,l,h){switch(i){case"focusin":return $a=el($a,e,i,s,l,h),!0;case"dragenter":return ts=el(ts,e,i,s,l,h),!0;case"mouseover":return es=el(es,e,i,s,l,h),!0;case"pointerover":var m=h.pointerId;return $o.set(m,el($o.get(m)||null,e,i,s,l,h)),!0;case"gotpointercapture":return m=h.pointerId,tl.set(m,el(tl.get(m)||null,e,i,s,l,h)),!0}return!1}function j1(e){var i=Na(e.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){e.blockedOn=i,Xi(e.priority,function(){W1(s)});return}}else if(i===31){if(i=f(s),i!==null){e.blockedOn=i,Xi(e.priority,function(){W1(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=Wh(e.nativeEvent);if(s===null){s=e.nativeEvent;var l=new s.constructor(s.type,s);Wu=l,s.target.dispatchEvent(l),Wu=null}else return i=La(s),i!==null&&X1(i),e.blockedOn=s,!1;i.shift()}return!0}function Z1(e,i,s){zc(e)&&s.delete(i)}function AS(){qh=!1,$a!==null&&zc($a)&&($a=null),ts!==null&&zc(ts)&&(ts=null),es!==null&&zc(es)&&(es=null),$o.forEach(Z1),tl.forEach(Z1)}function Fc(e,i){e.blockedOn===i&&(e.blockedOn=null,qh||(qh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,AS)))}var Ic=null;function K1(e){Ic!==e&&(Ic=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Ic===e&&(Ic=null);for(var i=0;i<e.length;i+=3){var s=e[i],l=e[i+1],h=e[i+2];if(typeof l!="function"){if(Yh(l||s)===null)continue;break}var m=La(s);m!==null&&(e.splice(i,3),i-=3,Wf(m,{pending:!0,data:h,method:s.method,action:l},l,h))}}))}function Cr(e){function i(Y){return Fc(Y,e)}$a!==null&&Fc($a,e),ts!==null&&Fc(ts,e),es!==null&&Fc(es,e),$o.forEach(i),tl.forEach(i);for(var s=0;s<ns.length;s++){var l=ns[s];l.blockedOn===e&&(l.blockedOn=null)}for(;0<ns.length&&(s=ns[0],s.blockedOn===null);)j1(s),s.blockedOn===null&&ns.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var h=s[l],m=s[l+1],b=h[Cn]||null;if(typeof m=="function")b||K1(s);else if(b){var O=null;if(m&&m.hasAttribute("formAction")){if(h=m,b=m[Cn]||null)O=b.formAction;else if(Yh(h)!==null)continue}else O=b.action;typeof O=="function"?s[l+1]=O:(s.splice(l,3),l-=3),K1(s)}}}function Q1(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(b){return h=b})},focusReset:"manual",scroll:"manual"})}function i(){h!==null&&(h(),h=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,h=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),h!==null&&(h(),h=null)}}}function jh(e){this._internalRoot=e}Bc.prototype.render=jh.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=di();V1(s,l,e,i,null,null)},Bc.prototype.unmount=jh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;V1(e.current,2,null,e,null,null),xc(),i[Pi]=null}};function Bc(e){this._internalRoot=e}Bc.prototype.unstable_scheduleHydration=function(e){if(e){var i=fo();e={blockedOn:null,target:e,priority:i};for(var s=0;s<ns.length&&i!==0&&i<ns[s].priority;s++);ns.splice(s,0,e),s===0&&j1(e)}};var J1=t.version;if(J1!=="19.2.8")throw Error(a(527,J1,"19.2.8"));V.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=d(i),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var CS={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hc.isDisabled&&Hc.supportsFiber)try{Mt=Hc.inject(CS),Tt=Hc}catch{}}return il.createRoot=function(e,i){if(!o(e))throw Error(a(299));var s=!1,l="",h=sg,m=rg,b=og;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(b=i.onRecoverableError)),i=H1(e,1,!1,null,null,s,l,null,h,m,b,Q1),e[Pi]=i.current,wh(e),new jh(i)},il.hydrateRoot=function(e,i,s){if(!o(e))throw Error(a(299));var l=!1,h="",m=sg,b=rg,O=og,Y=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(b=s.onCaughtError),s.onRecoverableError!==void 0&&(O=s.onRecoverableError),s.formState!==void 0&&(Y=s.formState)),i=H1(e,1,!0,i,s??null,l,h,Y,m,b,O,Q1),i.context=G1(null),s=i.current,l=di(),l=uo(l),h=Ga(l),h.callback=null,Va(s,h,l),s=l,i.current.lanes=s,Hn(i,s),ji(i),e[Pi]=i.current,wh(e),new Bc(i)},il.version="19.2.8",il}var l_;function FS(){if(l_)return Qh.exports;l_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Qh.exports=zS(),Qh.exports}var IS=FS();const BS="worldblocks-input-v1",HS=new Set(["C0","C1","C2","C3","C4","C5"]);function kp(r,{source:t="hardware"}={}){if(!r||typeof r!="object"||!["hardware","mock"].includes(t))throw new Error("Invalid snapshot or source");const n=r.topology,a=new Map((r.codebook?.codes||[]).map(_=>[_.unit,_.id])),o=[],c=n?.module_count||0,u=r.module_layout||{module_count:c,grid_rows:c,grid_cols:1,slots:Array.from({length:c},(_,v)=>`A${v}`)};if(n&&(!Number.isInteger(u.grid_cols)||u.grid_cols<1||u.module_count!==c||u.grid_rows*u.grid_cols!==c||!Array.isArray(u.slots)||u.slots.length!==c||new Set(u.slots).size!==c))throw new Error("Invalid or mismatched module layout; do not guess coordinates");const f=(n?.columns||[]).map(_=>{const v=_.id,y=_.port||`A${_.module}`,E=u.slots.indexOf(y);if(E<0||!["L0","L0.5"].includes(_.layer))throw new Error(`Unmapped position ${v}`);const R=_.layer==="L0.5"?.5:0,S=E%u.grid_cols*4+_.col+R,x=Math.floor(E/u.grid_cols)*2+_.row%2+R;let T=!1;const M=(r.board?.[v]||[]).map((N,L)=>{const U=a.get(N),z=HS.has(U)?U:null;return z||(T=!0),{slot_key:`${v}:${L}`,code_id:z,index:L,position:{x:S,y:L+R,z:x}}}),A=r.active_faults?.[v];return(A||T)&&o.push({column_id:v,reason:T?"unknown_type":"hardware_attention"}),{id:v,port:y,layer:_.layer,enabled:_.enabled!==!1,position:{x:S,y:R,z:x},stack:M,needs_attention:!!(A||T),beyond_validated_height:M.length>n.max_stack}}),p=r.connected===!0,d=!!r.hello?.recovery_mode||["starting","restoring","stopping"].includes(r.recovery?.status),g=p?n?d?"recovering":o.length||["attention","failed"].includes(r.recovery?.status)?"attention":"live":"waiting":"offline";return{contract:BS,source:t,connected:p,status:g,boot_id:n?.boot_id||r.hello?.boot_id||null,topology_id:n?.topology_id||null,module_count:c,validated_max_stack:n?.max_stack??null,columns:f,issues:o}}function GS({baseUrl:r,source:t="hardware",onState:n,onConnection:a=()=>{},onError:o=()=>{},watchdogMs:c=45e3}){if(typeof n!="function")throw new Error("baseUrl and onState are required");const u=r.replace(/\/$/,"");let f,p,d=!1,g=Date.now();function _(){d||(f?.close(),g=Date.now(),a("connecting"),f=new EventSource(`${u}/api/events`),f.onmessage=v=>{g=Date.now();let y;try{const E=JSON.parse(v.data);if(!E.snapshot)return;y=kp(E.snapshot,{source:t})}catch(E){o(E),a("invalid-data");return}a("live"),n(y)},f.onerror=()=>{d||a("reconnecting")})}return _(),p=setInterval(()=>{Date.now()-g>c&&_()},Math.min(5e3,c)),{reconnect:_,close(){d=!0,f?.close(),clearInterval(p),a("stopped")}}}function VS(r,t=Math.random){const n=kp(r,{source:"mock"}).columns.filter(T=>T.enabled);if(!n.length)return null;const a=n.map(T=>T.position.x),o=n.map(T=>T.position.z),c=(Math.min(...a)+Math.max(...a))/2,u=(Math.min(...o)+Math.max(...o))/2,f=Math.max(1,(Math.max(...a)-Math.min(...a))/2),p=Math.max(1,(Math.max(...o)-Math.min(...o))/2),d=T=>Math.hypot((T.position.x-c)/f,(T.position.z-u)/p),g=n.filter(T=>T.stack.length<r.topology.max_stack);if(!g.length)return null;const _=t()<.18;let v=g.filter(T=>_?d(T)>.65:d(T)<=.8);v.length||(v=g);const y=t()<.28,E=v.filter(T=>y?T.stack.length>0:!T.stack.length);E.length&&(v=E);const R=n.filter(T=>T.stack.length),S=v.map(T=>{const M=R.some(A=>Math.hypot(T.position.x-A.position.x,T.position.z-A.position.z)<=1.1);return _?1:(.15+Math.exp(-3*d(T)**2))*(M?1.7:1)/(1+T.stack.length*.35)});let x=t()*S.reduce((T,M)=>T+M,0);for(let T=0;T<v.length;T++)if(x-=S[T],x<0)return v[T].id;return v.at(-1).id}const Xp=["C0","C1","C2","C3","C4","C5"],Wp=Array.from({length:8},(r,t)=>"A"+t),Ca=Wp.flatMap((r,t)=>["L0","L0.5"].flatMap(n=>Array.from({length:8},(a,o)=>({id:n+"-r"+(t*2+Math.floor(o/4))+"-c"+o%4,layer:n,row:t*2+Math.floor(o/4),col:o%4,module:t,port:r,enabled:!0}))));function kd(){return{connected:!0,topology:{module_count:8,max_stack:7,columns:Ca},module_layout:{module_count:8,grid_rows:4,grid_cols:2,slots:Wp},codebook:{codes:Xp.map(r=>({id:r,unit:r}))},board:{},active_faults:{}}}function ed(r,t){return[1,2,4,8].includes(t)?{...r,module_layout:{...r.module_layout,grid_rows:8/t,grid_cols:t}}:r}function nd(r,t,n,a="C0"){if(!r.topology.columns.some(u=>u.id===t))return r;const o={...r.board},c=[...o[t]||[]];return n==="add"&&Xp.includes(a)&&c.length<7&&c.push(a),n==="remove"&&c.pop(),c.length?o[t]=c:delete o[t],{...r,board:o}}function kS(r){const t=kd();return t.board=Object.fromEntries(Ca.map((n,a)=>[n.id,r[a]||[]])),t}function Uv(r){const t=[];for(const n of r.columns||[])if(n.enabled)for(const a of n.stack){if(!Xp.includes(a.code_id))throw new Error("Unknown input code");t.push({id:a.slot_key,column:n.id,code:a.code_id,index:a.index,...a.position,attention:n.needs_attention})}return t.sort((n,a)=>n.id.localeCompare(a.id))}const XS=r=>kp(r,{source:"mock"});function WS(){const[r,t]=$e.useState([]),[n,a]=$e.useState("connecting");return $e.useEffect(()=>{let o=!0,c,u,f="";const p=new AbortController;async function d(){try{const g=await fetch("/__hub/settings",{signal:p.signal});if(!g.ok)throw new Error;const{settings:_}=await g.json();if(!o)return;if(!_?.confirmed){a("setup"),c=setTimeout(d,2e3);return}u=GS({baseUrl:"http://127.0.0.1:8787",onState:v=>{if(o)try{const y=Uv(v),E=JSON.stringify(y);E!==f&&(f=E,t(y)),a(v.status)}catch{a("invalid-data")}},onConnection:v=>{o&&v!=="live"&&a(v)},onError:()=>{o&&a("invalid-data")}})}catch{o&&(a("launcher-offline"),c=setTimeout(d,3e3))}}return d(),()=>{o=!1,p.abort(),clearTimeout(c),u?.close()}},[]),{blocks:r,status:n}}function Yr(r){let t=2166136261;for(const n of r)t=Math.imul(t^n.charCodeAt(0),16777619);return(t>>>0)/4294967295}function c_(r){const t=r.map(f=>({...f,neighbors:[]})),n=new Map(t.map(f=>[[f.x,f.y,f.z].join(","),f])),a=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];for(const f of[-.5,.5])for(const p of[-.5,.5])for(const d of[-.5,.5])a.push([f,p,d]);for(const f of t)for(const[p,d,g]of a){const _=n.get([f.x+p,f.y+d,f.z+g].join(","));_&&f.neighbors.push(_.id)}const o=new Map(t.map(f=>[f.id,f])),c=[],u=new Set;for(const f of t){if(u.has(f.id))continue;const p=[],d=[f.id];for(u.add(f.id);d.length;){const g=d.pop(),_=o.get(g);p.push(_);for(const v of _.neighbors)u.has(v)||(u.add(v),d.push(v))}c.push(p)}return{nodes:t,byId:o,groups:c}}function YS(r){if(!r.length)return{cx:1.75,cz:.75,width:6,depth:4,height:1};const t=r.map(a=>a.x),n=r.map(a=>a.z);return{cx:(Math.min(...t)+Math.max(...t))/2,cz:(Math.min(...n)+Math.max(...n))/2,width:Math.max(...t)-Math.min(...t)+3,depth:Math.max(...n)-Math.min(...n)+3,height:Math.max(...r.map(a=>a.y))+1}}const ai={number:"04",title:"OCEAN",subtitle:"A quiet world, alive with possibility.",kind:"ocean"},yu=[{id:"C0",name:"Reef",color:"#759eac",description:"Stone, shelter and surfaces for life."},{id:"C1",name:"Meadow",color:"#7cbd9b",description:"Seagrass and kelp respond to nearby currents."},{id:"C2",name:"Shoal",color:"#efc276",description:"Fish adapt to reefs, meadows and moving water."},{id:"C3",name:"Symbiosis",color:"#d89eab",description:"Small lives inhabit the reef and seabed."},{id:"C4",name:"Luminance",color:"#a8daed",description:"Jellies in open water; anemones beside low reefs."},{id:"C5",name:"Current",color:"#82cdd6",description:"A living flow connects motion across the habitat."}],u_=[{name:"Luminous sanctuary",stacks:[["C0","C0"],["C0","C1"],["C5"],["C4"],["C1"],["C2"],["C3"],["C0","C4"],["C0","C1"],["C2"],["C5"],["C4"],["C3"],["C1"],["C0"],["C2"]]},{name:"Kelp & currents",stacks:[["C1","C1"],["C1","C1","C1"],["C5"],["C5"],["C1"],["C2"],["C2"],["C4"],["C1","C1"],["C2"],["C5"],["C4"],["C3"],["C1"],["C2"],[]]},{name:"Night reef",stacks:[["C0","C0"],["C4"],["C0","C0","C0"],["C4"],["C3"],["C0"],["C4"],["C3"],["C4"],["C3"],["C0","C4"],["C2"],[],["C0"],["C4"],[]]}];function qS(r){const t=c_(r),n=new Set,a=c_(r.filter(u=>u.code==="C0")).groups,o=new Map;for(const u of a){const f=u.map(({id:d,x:g,y:_,z:v})=>({id:d,x:g,y:_,z:v})).sort((d,g)=>d.id.localeCompare(g.id)),p=u.flatMap(d=>d.neighbors.filter(g=>d.id.localeCompare(g)<0).map(g=>[d.id,g]));f.length>1&&n.add("Living reef");for(const d of u)o.set(d.id,{reefColony:f[0].id,reefSize:f.length,reefSurface:d.id===f[0].id?{members:f,links:p}:null,reefExposed:!u.some(g=>g.x===d.x&&g.z===d.z&&g.y===d.y+1)})}const c=t.nodes.map(u=>{const f=u.neighbors.map(T=>t.byId.get(T)),p=T=>f.some(M=>M.code===T),d=f.filter(T=>T.code===u.code).length,g=p("C0"),_=p("C1"),v=p("C5");let y=["reef","seagrass","open-shoal","seastar","jelly","flow"][Number(u.code[1])];u.code==="C0"&&_&&(y="coral-reef",n.add("Coral garden")),u.code==="C1"&&(d||u.index>0)&&(y="kelp"),u.code==="C2"&&(y=g?"reef-fish":_?"grass-fish":v?"ribbon-shoal":"open-shoal"),u.code==="C2"&&g&&_&&n.add("Nursery habitat"),u.code==="C3"&&(y=g?"reef-crab":_?"grazing-snail":"seastar"),u.code==="C4"&&g&&u.y<=.5&&(y="anemone",n.add("Luminous garden")),u.code==="C0"&&p("C3")&&p("C4")&&n.add("Night reef"),u.code==="C5"&&d&&n.add("Current corridor");const E=f.find(T=>T.code==="C5"),R=u.code==="C5"?E:null,S=u.code==="C5"?f.filter(T=>T.code==="C5").map(T=>({id:T.id,x:T.x,y:T.y,z:T.z})):[],x=E?Math.atan2(E.z-u.z,E.x-u.x):Yr(u.id)*Math.PI*2;return{...u,...o.get(u.id),form:y,same:d,reef:g,meadow:_,current:v,direction:x,flowNeighbors:S,flowNeighbor:R?{id:R.id,x:R.x,y:R.y,z:R.z}:null,nursery:u.code==="C2"&&g&&_,night:u.code==="C0"&&p("C3")&&p("C4"),seed:Yr(u.id)}});return{nodes:c,events:[...n].sort(),bounds:YS(r),links:c.reduce((u,f)=>u+f.neighbors.length,0)/2}}const Yp="182",qr={ROTATE:0,DOLLY:1,PAN:2},Xr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},jS=0,f_=1,ZS=2,Su=1,Nv=2,Wr=3,hs=0,si=1,Yn=2,$i=0,jr=1,Uu=2,h_=3,d_=4,KS=5,Fs=100,QS=101,JS=102,$S=103,tM=104,eM=200,nM=201,iM=202,aM=203,Xd=204,Wd=205,sM=206,rM=207,oM=208,lM=209,cM=210,uM=211,fM=212,hM=213,dM=214,Yd=0,qd=1,jd=2,Kr=3,Zd=4,Kd=5,Qd=6,Jd=7,Lv=0,pM=1,mM=2,ta=0,qp=1,jp=2,Zp=3,zu=4,Kp=5,Qp=6,Jp=7,Ov=300,Gs=301,Qr=302,$d=303,tp=304,Fu=306,Nu=1e3,wa=1001,ep=1002,Fn=1003,gM=1004,Gc=1005,In=1006,id=1007,Bs=1008,gi=1009,Pv=1010,zv=1011,gl=1012,$p=1013,ea=1014,Qi=1015,_i=1016,tm=1017,em=1018,_l=1020,Fv=35902,Iv=35899,Bv=1021,Hv=1022,Li=1023,Ua=1026,Hs=1027,Gv=1028,nm=1029,Jr=1030,im=1031,am=1033,Mu=33776,bu=33777,Eu=33778,Tu=33779,np=35840,ip=35841,ap=35842,sp=35843,rp=36196,op=37492,lp=37496,cp=37488,up=37489,fp=37490,hp=37491,dp=37808,pp=37809,mp=37810,gp=37811,_p=37812,vp=37813,xp=37814,yp=37815,Sp=37816,Mp=37817,bp=37818,Ep=37819,Tp=37820,Ap=37821,Cp=36492,Rp=36494,wp=36495,Dp=36283,Up=36284,Np=36285,Lp=36286,_M=3200,Vv=0,vM=1,us="",Di="srgb",$r="srgb-linear",Lu="linear",Fe="srgb",Rr=7680,p_=519,xM=512,yM=513,SM=514,sm=515,MM=516,bM=517,rm=518,EM=519,m_=35044,Vc=35048,g_="300 es",Ji=2e3,Ou=2001;function kv(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Pu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function TM(){const r=Pu("canvas");return r.style.display="block",r}const __={};function v_(...r){const t="THREE."+r.shift();console.log(t,...r)}function se(...r){const t="THREE."+r.shift();console.warn(t,...r)}function De(...r){const t="THREE."+r.shift();console.error(t,...r)}function vl(...r){const t=r.join(" ");t in __||(__[t]=!0,se(...r))}function AM(r,t,n){return new Promise(function(a,o){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}class Xs{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const o=a[t];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const o=a.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,t);t.target=null}}}const Vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Au=Math.PI/180,Op=180/Math.PI;function so(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Vn[r&255]+Vn[r>>8&255]+Vn[r>>16&255]+Vn[r>>24&255]+"-"+Vn[t&255]+Vn[t>>8&255]+"-"+Vn[t>>16&15|64]+Vn[t>>24&255]+"-"+Vn[n&63|128]+Vn[n>>8&255]+"-"+Vn[n>>16&255]+Vn[n>>24&255]+Vn[a&255]+Vn[a>>8&255]+Vn[a>>16&255]+Vn[a>>24&255]).toLowerCase()}function re(r,t,n){return Math.max(t,Math.min(n,r))}function CM(r,t){return(r%t+t)%t}function ad(r,t,n){return(1-n)*r+n*t}function al(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ei(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const RM={DEG2RAD:Au};class Rt{constructor(t=0,n=0){Rt.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,o=t.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=re(this.x,t.x,n.x),this.y=re(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=re(this.x,t,n),this.y=re(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(re(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(re(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),o=Math.sin(n),c=this.x-t.x,u=this.y-t.y;return this.x=c*a-u*o+t.x,this.y=c*o+u*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vs{constructor(t=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=o}static slerpFlat(t,n,a,o,c,u,f){let p=a[o+0],d=a[o+1],g=a[o+2],_=a[o+3],v=c[u+0],y=c[u+1],E=c[u+2],R=c[u+3];if(f<=0){t[n+0]=p,t[n+1]=d,t[n+2]=g,t[n+3]=_;return}if(f>=1){t[n+0]=v,t[n+1]=y,t[n+2]=E,t[n+3]=R;return}if(_!==R||p!==v||d!==y||g!==E){let S=p*v+d*y+g*E+_*R;S<0&&(v=-v,y=-y,E=-E,R=-R,S=-S);let x=1-f;if(S<.9995){const T=Math.acos(S),M=Math.sin(T);x=Math.sin(x*T)/M,f=Math.sin(f*T)/M,p=p*x+v*f,d=d*x+y*f,g=g*x+E*f,_=_*x+R*f}else{p=p*x+v*f,d=d*x+y*f,g=g*x+E*f,_=_*x+R*f;const T=1/Math.sqrt(p*p+d*d+g*g+_*_);p*=T,d*=T,g*=T,_*=T}}t[n]=p,t[n+1]=d,t[n+2]=g,t[n+3]=_}static multiplyQuaternionsFlat(t,n,a,o,c,u){const f=a[o],p=a[o+1],d=a[o+2],g=a[o+3],_=c[u],v=c[u+1],y=c[u+2],E=c[u+3];return t[n]=f*E+g*_+p*y-d*v,t[n+1]=p*E+g*v+d*_-f*y,t[n+2]=d*E+g*y+f*v-p*_,t[n+3]=g*E-f*_-p*v-d*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,o){return this._x=t,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,o=t._y,c=t._z,u=t._order,f=Math.cos,p=Math.sin,d=f(a/2),g=f(o/2),_=f(c/2),v=p(a/2),y=p(o/2),E=p(c/2);switch(u){case"XYZ":this._x=v*g*_+d*y*E,this._y=d*y*_-v*g*E,this._z=d*g*E+v*y*_,this._w=d*g*_-v*y*E;break;case"YXZ":this._x=v*g*_+d*y*E,this._y=d*y*_-v*g*E,this._z=d*g*E-v*y*_,this._w=d*g*_+v*y*E;break;case"ZXY":this._x=v*g*_-d*y*E,this._y=d*y*_+v*g*E,this._z=d*g*E+v*y*_,this._w=d*g*_-v*y*E;break;case"ZYX":this._x=v*g*_-d*y*E,this._y=d*y*_+v*g*E,this._z=d*g*E-v*y*_,this._w=d*g*_+v*y*E;break;case"YZX":this._x=v*g*_+d*y*E,this._y=d*y*_+v*g*E,this._z=d*g*E-v*y*_,this._w=d*g*_-v*y*E;break;case"XZY":this._x=v*g*_-d*y*E,this._y=d*y*_-v*g*E,this._z=d*g*E+v*y*_,this._w=d*g*_+v*y*E;break;default:se("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,o=Math.sin(a);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],o=n[4],c=n[8],u=n[1],f=n[5],p=n[9],d=n[2],g=n[6],_=n[10],v=a+f+_;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(g-p)*y,this._y=(c-d)*y,this._z=(u-o)*y}else if(a>f&&a>_){const y=2*Math.sqrt(1+a-f-_);this._w=(g-p)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(c+d)/y}else if(f>_){const y=2*Math.sqrt(1+f-a-_);this._w=(c-d)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(p+g)/y}else{const y=2*Math.sqrt(1+_-a-f);this._w=(u-o)/y,this._x=(c+d)/y,this._y=(p+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,o=t._y,c=t._z,u=t._w,f=n._x,p=n._y,d=n._z,g=n._w;return this._x=a*g+u*f+o*d-c*p,this._y=o*g+u*p+c*f-a*d,this._z=c*g+u*d+a*p-o*f,this._w=u*g-a*f-o*p-c*d,this._onChangeCallback(),this}slerp(t,n){if(n<=0)return this;if(n>=1)return this.copy(t);let a=t._x,o=t._y,c=t._z,u=t._w,f=this.dot(t);f<0&&(a=-a,o=-o,c=-c,u=-u,f=-f);let p=1-n;if(f<.9995){const d=Math.acos(f),g=Math.sin(d);p=Math.sin(p*d)/g,n=Math.sin(n*d)/g,this._x=this._x*p+a*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this._onChangeCallback()}else this._x=this._x*p+a*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this.normalize();return this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(t),o*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(t=0,n=0,a=0){W.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(x_.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(x_.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[3]*a+c[6]*o,this.y=c[1]*n+c[4]*a+c[7]*o,this.z=c[2]*n+c[5]*a+c[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=t.elements,u=1/(c[3]*n+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*o+c[14])*u,this}applyQuaternion(t){const n=this.x,a=this.y,o=this.z,c=t.x,u=t.y,f=t.z,p=t.w,d=2*(u*o-f*a),g=2*(f*n-c*o),_=2*(c*a-u*n);return this.x=n+p*d+u*_-f*g,this.y=a+p*g+f*d-c*_,this.z=o+p*_+c*g-u*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*o,this.y=c[1]*n+c[5]*a+c[9]*o,this.z=c[2]*n+c[6]*a+c[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=re(this.x,t.x,n.x),this.y=re(this.y,t.y,n.y),this.z=re(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=re(this.x,t,n),this.y=re(this.y,t,n),this.z=re(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(re(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,o=t.y,c=t.z,u=n.x,f=n.y,p=n.z;return this.x=o*p-c*f,this.y=c*u-a*p,this.z=a*f-o*u,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return sd.copy(this).projectOnVector(t),this.sub(sd)}reflect(t){return this.sub(sd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(re(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,o=this.z-t.z;return n*n+a*a+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const o=Math.sin(n)*t;return this.x=o*Math.sin(a),this.y=Math.cos(n)*t,this.z=o*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sd=new W,x_=new Vs;class pe{constructor(t,n,a,o,c,u,f,p,d){pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,u,f,p,d)}set(t,n,a,o,c,u,f,p,d){const g=this.elements;return g[0]=t,g[1]=o,g[2]=f,g[3]=n,g[4]=c,g[5]=p,g[6]=a,g[7]=u,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,u=a[0],f=a[3],p=a[6],d=a[1],g=a[4],_=a[7],v=a[2],y=a[5],E=a[8],R=o[0],S=o[3],x=o[6],T=o[1],M=o[4],A=o[7],N=o[2],L=o[5],U=o[8];return c[0]=u*R+f*T+p*N,c[3]=u*S+f*M+p*L,c[6]=u*x+f*A+p*U,c[1]=d*R+g*T+_*N,c[4]=d*S+g*M+_*L,c[7]=d*x+g*A+_*U,c[2]=v*R+y*T+E*N,c[5]=v*S+y*M+E*L,c[8]=v*x+y*A+E*U,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],f=t[5],p=t[6],d=t[7],g=t[8];return n*u*g-n*f*d-a*c*g+a*f*p+o*c*d-o*u*p}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],f=t[5],p=t[6],d=t[7],g=t[8],_=g*u-f*d,v=f*p-g*c,y=d*c-u*p,E=n*_+a*v+o*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/E;return t[0]=_*R,t[1]=(o*d-g*a)*R,t[2]=(f*a-o*u)*R,t[3]=v*R,t[4]=(g*n-o*p)*R,t[5]=(o*c-f*n)*R,t[6]=y*R,t[7]=(a*p-d*n)*R,t[8]=(u*n-a*c)*R,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,o,c,u,f){const p=Math.cos(c),d=Math.sin(c);return this.set(a*p,a*d,-a*(p*u+d*f)+u+t,-o*d,o*p,-o*(-d*u+p*f)+f+n,0,0,1),this}scale(t,n){return this.premultiply(rd.makeScale(t,n)),this}rotate(t){return this.premultiply(rd.makeRotation(-t)),this}translate(t,n){return this.premultiply(rd.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const rd=new pe,y_=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),S_=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wM(){const r={enabled:!0,workingColorSpace:$r,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Fe&&(o.r=Da(o.r),o.g=Da(o.g),o.b=Da(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Fe&&(o.r=Zr(o.r),o.g=Zr(o.g),o.b=Zr(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===us?Lu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return vl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return vl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[$r]:{primaries:t,whitePoint:a,transfer:Lu,toXYZ:y_,fromXYZ:S_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Di},outputColorSpaceConfig:{drawingBufferColorSpace:Di}},[Di]:{primaries:t,whitePoint:a,transfer:Fe,toXYZ:y_,fromXYZ:S_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Di}}}),r}const Ee=wM();function Da(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Zr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let wr;class DM{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{wr===void 0&&(wr=Pu("canvas")),wr.width=t.width,wr.height=t.height;const o=wr.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),a=wr}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Pu("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const o=a.getImageData(0,0,t.width,t.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Da(c[u]/255)*255;return a.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Da(n[a]/255)*255):n[a]=Da(n[a]);return{data:n,width:t.width,height:t.height}}else return se("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let UM=0;class om{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:UM++}),this.uuid=so(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?c.push(od(o[u].image)):c.push(od(o[u]))}else c=od(o);a.url=c}return n||(t.images[this.uuid]=a),a}}function od(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?DM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(se("Texture: Unable to serialize Texture."),{})}let NM=0;const ld=new W;class jn extends Xs{constructor(t=jn.DEFAULT_IMAGE,n=jn.DEFAULT_MAPPING,a=wa,o=wa,c=In,u=Bs,f=Li,p=gi,d=jn.DEFAULT_ANISOTROPY,g=us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:NM++}),this.uuid=so(),this.name="",this.source=new om(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=d,this.format=f,this.internalFormat=null,this.type=p,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ld).x}get height(){return this.source.getSize(ld).y}get depth(){return this.source.getSize(ld).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){se(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){se(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ov)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Nu:t.x=t.x-Math.floor(t.x);break;case wa:t.x=t.x<0?0:1;break;case ep:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Nu:t.y=t.y-Math.floor(t.y);break;case wa:t.y=t.y<0?0:1;break;case ep:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=Ov;jn.DEFAULT_ANISOTROPY=1;class ln{constructor(t=0,n=0,a=0,o=1){ln.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,o){return this.x=t,this.y=n,this.z=a,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=this.w,u=t.elements;return this.x=u[0]*n+u[4]*a+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*o+u[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,o,c;const p=t.elements,d=p[0],g=p[4],_=p[8],v=p[1],y=p[5],E=p[9],R=p[2],S=p[6],x=p[10];if(Math.abs(g-v)<.01&&Math.abs(_-R)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+R)<.1&&Math.abs(E+S)<.1&&Math.abs(d+y+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(d+1)/2,A=(y+1)/2,N=(x+1)/2,L=(g+v)/4,U=(_+R)/4,z=(E+S)/4;return M>A&&M>N?M<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(M),o=L/a,c=U/a):A>N?A<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(A),a=L/o,c=z/o):N<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(N),a=U/c,o=z/c),this.set(a,o,c,n),this}let T=Math.sqrt((S-E)*(S-E)+(_-R)*(_-R)+(v-g)*(v-g));return Math.abs(T)<.001&&(T=1),this.x=(S-E)/T,this.y=(_-R)/T,this.z=(v-g)/T,this.w=Math.acos((d+y+x-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=re(this.x,t.x,n.x),this.y=re(this.y,t.y,n.y),this.z=re(this.z,t.z,n.z),this.w=re(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=re(this.x,t,n),this.y=re(this.y,t,n),this.z=re(this.z,t,n),this.w=re(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(re(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class LM extends Xs{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new ln(0,0,t,n),this.scissorTest=!1,this.viewport=new ln(0,0,t,n);const o={width:t,height:n,depth:a.depth},c=new jn(o);this.textures=[];const u=a.count;for(let f=0;f<u;f++)this.textures[f]=c.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const n={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=a,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},t.textures[n].image);this.textures[n].source=new om(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ri extends LM{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class Xv extends jn{constructor(t=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=wa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class OM extends jn{constructor(t=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=wa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Al{constructor(t=new W(1/0,1/0,1/0),n=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(Hi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(Hi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=Hi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let u=0,f=c.count;u<f;u++)t.isMesh===!0?t.getVertexPosition(u,Hi):Hi.fromBufferAttribute(c,u),Hi.applyMatrix4(t.matrixWorld),this.expandByPoint(Hi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),kc.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),kc.copy(a.boundingBox)),kc.applyMatrix4(t.matrixWorld),this.union(kc)}const o=t.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Hi),Hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(sl),Xc.subVectors(this.max,sl),Dr.subVectors(t.a,sl),Ur.subVectors(t.b,sl),Nr.subVectors(t.c,sl),as.subVectors(Ur,Dr),ss.subVectors(Nr,Ur),Us.subVectors(Dr,Nr);let n=[0,-as.z,as.y,0,-ss.z,ss.y,0,-Us.z,Us.y,as.z,0,-as.x,ss.z,0,-ss.x,Us.z,0,-Us.x,-as.y,as.x,0,-ss.y,ss.x,0,-Us.y,Us.x,0];return!cd(n,Dr,Ur,Nr,Xc)||(n=[1,0,0,0,1,0,0,0,1],!cd(n,Dr,Ur,Nr,Xc))?!1:(Wc.crossVectors(as,ss),n=[Wc.x,Wc.y,Wc.z],cd(n,Dr,Ur,Nr,Xc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Hi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ma[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ma[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ma[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ma[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ma[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ma[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ma[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ma[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ma),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ma=[new W,new W,new W,new W,new W,new W,new W,new W],Hi=new W,kc=new Al,Dr=new W,Ur=new W,Nr=new W,as=new W,ss=new W,Us=new W,sl=new W,Xc=new W,Wc=new W,Ns=new W;function cd(r,t,n,a,o){for(let c=0,u=r.length-3;c<=u;c+=3){Ns.fromArray(r,c);const f=o.x*Math.abs(Ns.x)+o.y*Math.abs(Ns.y)+o.z*Math.abs(Ns.z),p=t.dot(Ns),d=n.dot(Ns),g=a.dot(Ns);if(Math.max(-Math.max(p,d,g),Math.min(p,d,g))>f)return!1}return!0}const PM=new Al,rl=new W,ud=new W;class Cl{constructor(t=new W,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):PM.setFromPoints(t).getCenter(a);let o=0;for(let c=0,u=t.length;c<u;c++)o=Math.max(o,a.distanceToSquared(t[c]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;rl.subVectors(t,this.center);const n=rl.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(rl,o/a),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ud.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(rl.copy(t.center).add(ud)),this.expandByPoint(rl.copy(t.center).sub(ud))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ba=new W,fd=new W,Yc=new W,rs=new W,hd=new W,qc=new W,dd=new W;class lm{constructor(t=new W,n=new W(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ba)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=ba.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(ba.copy(this.origin).addScaledVector(this.direction,n),ba.distanceToSquared(t))}distanceSqToSegment(t,n,a,o){fd.copy(t).add(n).multiplyScalar(.5),Yc.copy(n).sub(t).normalize(),rs.copy(this.origin).sub(fd);const c=t.distanceTo(n)*.5,u=-this.direction.dot(Yc),f=rs.dot(this.direction),p=-rs.dot(Yc),d=rs.lengthSq(),g=Math.abs(1-u*u);let _,v,y,E;if(g>0)if(_=u*p-f,v=u*f-p,E=c*g,_>=0)if(v>=-E)if(v<=E){const R=1/g;_*=R,v*=R,y=_*(_+u*v+2*f)+v*(u*_+v+2*p)+d}else v=c,_=Math.max(0,-(u*v+f)),y=-_*_+v*(v+2*p)+d;else v=-c,_=Math.max(0,-(u*v+f)),y=-_*_+v*(v+2*p)+d;else v<=-E?(_=Math.max(0,-(-u*c+f)),v=_>0?-c:Math.min(Math.max(-c,-p),c),y=-_*_+v*(v+2*p)+d):v<=E?(_=0,v=Math.min(Math.max(-c,-p),c),y=v*(v+2*p)+d):(_=Math.max(0,-(u*c+f)),v=_>0?c:Math.min(Math.max(-c,-p),c),y=-_*_+v*(v+2*p)+d);else v=u>0?-c:c,_=Math.max(0,-(u*v+f)),y=-_*_+v*(v+2*p)+d;return a&&a.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(fd).addScaledVector(Yc,v),y}intersectSphere(t,n){ba.subVectors(t.center,this.origin);const a=ba.dot(this.direction),o=ba.dot(ba)-a*a,c=t.radius*t.radius;if(o>c)return null;const u=Math.sqrt(c-o),f=a-u,p=a+u;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,o,c,u,f,p;const d=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return d>=0?(a=(t.min.x-v.x)*d,o=(t.max.x-v.x)*d):(a=(t.max.x-v.x)*d,o=(t.min.x-v.x)*d),g>=0?(c=(t.min.y-v.y)*g,u=(t.max.y-v.y)*g):(c=(t.max.y-v.y)*g,u=(t.min.y-v.y)*g),a>u||c>o||((c>a||isNaN(a))&&(a=c),(u<o||isNaN(o))&&(o=u),_>=0?(f=(t.min.z-v.z)*_,p=(t.max.z-v.z)*_):(f=(t.max.z-v.z)*_,p=(t.min.z-v.z)*_),a>p||f>o)||((f>a||a!==a)&&(a=f),(p<o||o!==o)&&(o=p),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(t){return this.intersectBox(t,ba)!==null}intersectTriangle(t,n,a,o,c){hd.subVectors(n,t),qc.subVectors(a,t),dd.crossVectors(hd,qc);let u=this.direction.dot(dd),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;rs.subVectors(this.origin,t);const p=f*this.direction.dot(qc.crossVectors(rs,qc));if(p<0)return null;const d=f*this.direction.dot(hd.cross(rs));if(d<0||p+d>u)return null;const g=-f*rs.dot(dd);return g<0?null:this.at(g/u,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(t,n,a,o,c,u,f,p,d,g,_,v,y,E,R,S){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,u,f,p,d,g,_,v,y,E,R,S)}set(t,n,a,o,c,u,f,p,d,g,_,v,y,E,R,S){const x=this.elements;return x[0]=t,x[4]=n,x[8]=a,x[12]=o,x[1]=c,x[5]=u,x[9]=f,x[13]=p,x[2]=d,x[6]=g,x[10]=_,x[14]=v,x[3]=y,x[7]=E,x[11]=R,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,a=t.elements,o=1/Lr.setFromMatrixColumn(t,0).length(),c=1/Lr.setFromMatrixColumn(t,1).length(),u=1/Lr.setFromMatrixColumn(t,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,o=t.y,c=t.z,u=Math.cos(a),f=Math.sin(a),p=Math.cos(o),d=Math.sin(o),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const v=u*g,y=u*_,E=f*g,R=f*_;n[0]=p*g,n[4]=-p*_,n[8]=d,n[1]=y+E*d,n[5]=v-R*d,n[9]=-f*p,n[2]=R-v*d,n[6]=E+y*d,n[10]=u*p}else if(t.order==="YXZ"){const v=p*g,y=p*_,E=d*g,R=d*_;n[0]=v+R*f,n[4]=E*f-y,n[8]=u*d,n[1]=u*_,n[5]=u*g,n[9]=-f,n[2]=y*f-E,n[6]=R+v*f,n[10]=u*p}else if(t.order==="ZXY"){const v=p*g,y=p*_,E=d*g,R=d*_;n[0]=v-R*f,n[4]=-u*_,n[8]=E+y*f,n[1]=y+E*f,n[5]=u*g,n[9]=R-v*f,n[2]=-u*d,n[6]=f,n[10]=u*p}else if(t.order==="ZYX"){const v=u*g,y=u*_,E=f*g,R=f*_;n[0]=p*g,n[4]=E*d-y,n[8]=v*d+R,n[1]=p*_,n[5]=R*d+v,n[9]=y*d-E,n[2]=-d,n[6]=f*p,n[10]=u*p}else if(t.order==="YZX"){const v=u*p,y=u*d,E=f*p,R=f*d;n[0]=p*g,n[4]=R-v*_,n[8]=E*_+y,n[1]=_,n[5]=u*g,n[9]=-f*g,n[2]=-d*g,n[6]=y*_+E,n[10]=v-R*_}else if(t.order==="XZY"){const v=u*p,y=u*d,E=f*p,R=f*d;n[0]=p*g,n[4]=-_,n[8]=d*g,n[1]=v*_+R,n[5]=u*g,n[9]=y*_-E,n[2]=E*_-y,n[6]=f*g,n[10]=R*_+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zM,t,FM)}lookAt(t,n,a){const o=this.elements;return pi.subVectors(t,n),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),os.crossVectors(a,pi),os.lengthSq()===0&&(Math.abs(a.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),os.crossVectors(a,pi)),os.normalize(),jc.crossVectors(pi,os),o[0]=os.x,o[4]=jc.x,o[8]=pi.x,o[1]=os.y,o[5]=jc.y,o[9]=pi.y,o[2]=os.z,o[6]=jc.z,o[10]=pi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,u=a[0],f=a[4],p=a[8],d=a[12],g=a[1],_=a[5],v=a[9],y=a[13],E=a[2],R=a[6],S=a[10],x=a[14],T=a[3],M=a[7],A=a[11],N=a[15],L=o[0],U=o[4],z=o[8],C=o[12],w=o[1],I=o[5],k=o[9],X=o[13],q=o[2],G=o[6],F=o[10],V=o[14],Q=o[3],pt=o[7],dt=o[11],B=o[15];return c[0]=u*L+f*w+p*q+d*Q,c[4]=u*U+f*I+p*G+d*pt,c[8]=u*z+f*k+p*F+d*dt,c[12]=u*C+f*X+p*V+d*B,c[1]=g*L+_*w+v*q+y*Q,c[5]=g*U+_*I+v*G+y*pt,c[9]=g*z+_*k+v*F+y*dt,c[13]=g*C+_*X+v*V+y*B,c[2]=E*L+R*w+S*q+x*Q,c[6]=E*U+R*I+S*G+x*pt,c[10]=E*z+R*k+S*F+x*dt,c[14]=E*C+R*X+S*V+x*B,c[3]=T*L+M*w+A*q+N*Q,c[7]=T*U+M*I+A*G+N*pt,c[11]=T*z+M*k+A*F+N*dt,c[15]=T*C+M*X+A*V+N*B,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],o=t[8],c=t[12],u=t[1],f=t[5],p=t[9],d=t[13],g=t[2],_=t[6],v=t[10],y=t[14],E=t[3],R=t[7],S=t[11],x=t[15],T=p*y-d*v,M=f*y-d*_,A=f*v-p*_,N=u*y-d*g,L=u*v-p*g,U=u*_-f*g;return n*(R*T-S*M+x*A)-a*(E*T-S*N+x*L)+o*(E*M-R*N+x*U)-c*(E*A-R*L+S*U)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],f=t[5],p=t[6],d=t[7],g=t[8],_=t[9],v=t[10],y=t[11],E=t[12],R=t[13],S=t[14],x=t[15],T=_*S*d-R*v*d+R*p*y-f*S*y-_*p*x+f*v*x,M=E*v*d-g*S*d-E*p*y+u*S*y+g*p*x-u*v*x,A=g*R*d-E*_*d+E*f*y-u*R*y-g*f*x+u*_*x,N=E*_*p-g*R*p-E*f*v+u*R*v+g*f*S-u*_*S,L=n*T+a*M+o*A+c*N;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/L;return t[0]=T*U,t[1]=(R*v*c-_*S*c-R*o*y+a*S*y+_*o*x-a*v*x)*U,t[2]=(f*S*c-R*p*c+R*o*d-a*S*d-f*o*x+a*p*x)*U,t[3]=(_*p*c-f*v*c-_*o*d+a*v*d+f*o*y-a*p*y)*U,t[4]=M*U,t[5]=(g*S*c-E*v*c+E*o*y-n*S*y-g*o*x+n*v*x)*U,t[6]=(E*p*c-u*S*c-E*o*d+n*S*d+u*o*x-n*p*x)*U,t[7]=(u*v*c-g*p*c+g*o*d-n*v*d-u*o*y+n*p*y)*U,t[8]=A*U,t[9]=(E*_*c-g*R*c-E*a*y+n*R*y+g*a*x-n*_*x)*U,t[10]=(u*R*c-E*f*c+E*a*d-n*R*d-u*a*x+n*f*x)*U,t[11]=(g*f*c-u*_*c-g*a*d+n*_*d+u*a*y-n*f*y)*U,t[12]=N*U,t[13]=(g*R*o-E*_*o+E*a*v-n*R*v-g*a*S+n*_*S)*U,t[14]=(E*f*o-u*R*o-E*a*p+n*R*p+u*a*S-n*f*S)*U,t[15]=(u*_*o-g*f*o+g*a*p-n*_*p-u*a*v+n*f*v)*U,this}scale(t){const n=this.elements,a=t.x,o=t.y,c=t.z;return n[0]*=a,n[4]*=o,n[8]*=c,n[1]*=a,n[5]*=o,n[9]*=c,n[2]*=a,n[6]*=o,n[10]*=c,n[3]*=a,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),o=Math.sin(n),c=1-a,u=t.x,f=t.y,p=t.z,d=c*u,g=c*f;return this.set(d*u+a,d*f-o*p,d*p+o*f,0,d*f+o*p,g*f+a,g*p-o*u,0,d*p-o*f,g*p+o*u,c*p*p+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,o,c,u){return this.set(1,a,c,0,t,1,u,0,n,o,1,0,0,0,0,1),this}compose(t,n,a){const o=this.elements,c=n._x,u=n._y,f=n._z,p=n._w,d=c+c,g=u+u,_=f+f,v=c*d,y=c*g,E=c*_,R=u*g,S=u*_,x=f*_,T=p*d,M=p*g,A=p*_,N=a.x,L=a.y,U=a.z;return o[0]=(1-(R+x))*N,o[1]=(y+A)*N,o[2]=(E-M)*N,o[3]=0,o[4]=(y-A)*L,o[5]=(1-(v+x))*L,o[6]=(S+T)*L,o[7]=0,o[8]=(E+M)*U,o[9]=(S-T)*U,o[10]=(1-(v+R))*U,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,a){const o=this.elements;if(t.x=o[12],t.y=o[13],t.z=o[14],this.determinant()===0)return a.set(1,1,1),n.identity(),this;let c=Lr.set(o[0],o[1],o[2]).length();const u=Lr.set(o[4],o[5],o[6]).length(),f=Lr.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),Gi.copy(this);const d=1/c,g=1/u,_=1/f;return Gi.elements[0]*=d,Gi.elements[1]*=d,Gi.elements[2]*=d,Gi.elements[4]*=g,Gi.elements[5]*=g,Gi.elements[6]*=g,Gi.elements[8]*=_,Gi.elements[9]*=_,Gi.elements[10]*=_,n.setFromRotationMatrix(Gi),a.x=c,a.y=u,a.z=f,this}makePerspective(t,n,a,o,c,u,f=Ji,p=!1){const d=this.elements,g=2*c/(n-t),_=2*c/(a-o),v=(n+t)/(n-t),y=(a+o)/(a-o);let E,R;if(p)E=c/(u-c),R=u*c/(u-c);else if(f===Ji)E=-(u+c)/(u-c),R=-2*u*c/(u-c);else if(f===Ou)E=-u/(u-c),R=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=g,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=_,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=E,d[14]=R,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,n,a,o,c,u,f=Ji,p=!1){const d=this.elements,g=2/(n-t),_=2/(a-o),v=-(n+t)/(n-t),y=-(a+o)/(a-o);let E,R;if(p)E=1/(u-c),R=u/(u-c);else if(f===Ji)E=-2/(u-c),R=-(u+c)/(u-c);else if(f===Ou)E=-1/(u-c),R=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=g,d[4]=0,d[8]=0,d[12]=v,d[1]=0,d[5]=_,d[9]=0,d[13]=y,d[2]=0,d[6]=0,d[10]=E,d[14]=R,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const Lr=new W,Gi=new tn,zM=new W(0,0,0),FM=new W(1,1,1),os=new W,jc=new W,pi=new W,M_=new tn,b_=new Vs;class na{constructor(t=0,n=0,a=0,o=na.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,o=this._order){return this._x=t,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const o=t.elements,c=o[0],u=o[4],f=o[8],p=o[1],d=o[5],g=o[9],_=o[2],v=o[6],y=o[10];switch(n){case"XYZ":this._y=Math.asin(re(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-re(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(re(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-re(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(re(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-re(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:se("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return M_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(M_,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return b_.setFromEuler(this),this.setFromQuaternion(b_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}na.DEFAULT_ORDER="XYZ";class Wv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let IM=0;const E_=new W,Or=new Vs,Ea=new tn,Zc=new W,ol=new W,BM=new W,HM=new Vs,T_=new W(1,0,0),A_=new W(0,1,0),C_=new W(0,0,1),R_={type:"added"},GM={type:"removed"},Pr={type:"childadded",child:null},pd={type:"childremoved",child:null};class An extends Xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:IM++}),this.uuid=so(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const t=new W,n=new na,a=new Vs,o=new W(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new tn},normalMatrix:{value:new pe}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Or.setFromAxisAngle(t,n),this.quaternion.multiply(Or),this}rotateOnWorldAxis(t,n){return Or.setFromAxisAngle(t,n),this.quaternion.premultiply(Or),this}rotateX(t){return this.rotateOnAxis(T_,t)}rotateY(t){return this.rotateOnAxis(A_,t)}rotateZ(t){return this.rotateOnAxis(C_,t)}translateOnAxis(t,n){return E_.copy(t).applyQuaternion(this.quaternion),this.position.add(E_.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(T_,t)}translateY(t){return this.translateOnAxis(A_,t)}translateZ(t){return this.translateOnAxis(C_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ea.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?Zc.copy(t):Zc.set(t,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),ol.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ea.lookAt(ol,Zc,this.up):Ea.lookAt(Zc,ol,this.up),this.quaternion.setFromRotationMatrix(Ea),o&&(Ea.extractRotation(o.matrixWorld),Or.setFromRotationMatrix(Ea),this.quaternion.premultiply(Or.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(De("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(R_),Pr.child=t,this.dispatchEvent(Pr),Pr.child=null):De("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(GM),pd.child=t,this.dispatchEvent(pd),pd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ea.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ea.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ea),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(R_),Pr.child=t,this.dispatchEvent(Pr),Pr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const u=this.children[a].getObjectByProperty(t,n);if(u!==void 0)return u}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ol,t,BM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ol,HM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let d=0,g=p.length;d<g;d++){const _=p[d];c(t.shapes,_)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,d=this.material.length;p<d;p++)f.push(c(t.materials,this.material[p]));o.material=f}else o.material=c(t.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];o.animations.push(c(t.animations,p))}}if(n){const f=u(t.geometries),p=u(t.materials),d=u(t.textures),g=u(t.images),_=u(t.shapes),v=u(t.skeletons),y=u(t.animations),E=u(t.nodes);f.length>0&&(a.geometries=f),p.length>0&&(a.materials=p),d.length>0&&(a.textures=d),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),v.length>0&&(a.skeletons=v),y.length>0&&(a.animations=y),E.length>0&&(a.nodes=E)}return a.object=o,a;function u(f){const p=[];for(const d in f){const g=f[d];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const o=t.children[a];this.add(o.clone())}return this}}An.DEFAULT_UP=new W(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vi=new W,Ta=new W,md=new W,Aa=new W,zr=new W,Fr=new W,w_=new W,gd=new W,_d=new W,vd=new W,xd=new ln,yd=new ln,Sd=new ln;class Ni{constructor(t=new W,n=new W,a=new W){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,o){o.subVectors(a,n),Vi.subVectors(t,n),o.cross(Vi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(t,n,a,o,c){Vi.subVectors(o,n),Ta.subVectors(a,n),md.subVectors(t,n);const u=Vi.dot(Vi),f=Vi.dot(Ta),p=Vi.dot(md),d=Ta.dot(Ta),g=Ta.dot(md),_=u*d-f*f;if(_===0)return c.set(0,0,0),null;const v=1/_,y=(d*p-f*g)*v,E=(u*g-f*p)*v;return c.set(1-y-E,E,y)}static containsPoint(t,n,a,o){return this.getBarycoord(t,n,a,o,Aa)===null?!1:Aa.x>=0&&Aa.y>=0&&Aa.x+Aa.y<=1}static getInterpolation(t,n,a,o,c,u,f,p){return this.getBarycoord(t,n,a,o,Aa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Aa.x),p.addScaledVector(u,Aa.y),p.addScaledVector(f,Aa.z),p)}static getInterpolatedAttribute(t,n,a,o,c,u){return xd.setScalar(0),yd.setScalar(0),Sd.setScalar(0),xd.fromBufferAttribute(t,n),yd.fromBufferAttribute(t,a),Sd.fromBufferAttribute(t,o),u.setScalar(0),u.addScaledVector(xd,c.x),u.addScaledVector(yd,c.y),u.addScaledVector(Sd,c.z),u}static isFrontFacing(t,n,a,o){return Vi.subVectors(a,n),Ta.subVectors(t,n),Vi.cross(Ta).dot(o)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,o){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,a,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Vi.subVectors(this.c,this.b),Ta.subVectors(this.a,this.b),Vi.cross(Ta).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ni.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Ni.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,o,c){return Ni.getInterpolation(t,this.a,this.b,this.c,n,a,o,c)}containsPoint(t){return Ni.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ni.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,o=this.b,c=this.c;let u,f;zr.subVectors(o,a),Fr.subVectors(c,a),gd.subVectors(t,a);const p=zr.dot(gd),d=Fr.dot(gd);if(p<=0&&d<=0)return n.copy(a);_d.subVectors(t,o);const g=zr.dot(_d),_=Fr.dot(_d);if(g>=0&&_<=g)return n.copy(o);const v=p*_-g*d;if(v<=0&&p>=0&&g<=0)return u=p/(p-g),n.copy(a).addScaledVector(zr,u);vd.subVectors(t,c);const y=zr.dot(vd),E=Fr.dot(vd);if(E>=0&&y<=E)return n.copy(c);const R=y*d-p*E;if(R<=0&&d>=0&&E<=0)return f=d/(d-E),n.copy(a).addScaledVector(Fr,f);const S=g*E-y*_;if(S<=0&&_-g>=0&&y-E>=0)return w_.subVectors(c,o),f=(_-g)/(_-g+(y-E)),n.copy(o).addScaledVector(w_,f);const x=1/(S+R+v);return u=R*x,f=v*x,n.copy(a).addScaledVector(zr,u).addScaledVector(Fr,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Yv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ls={h:0,s:0,l:0},Kc={h:0,s:0,l:0};function Md(r,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(t-r)*6*n:n<1/2?t:n<2/3?r+(t-r)*6*(2/3-n):r}class ie{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Di){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ee.colorSpaceToWorking(this,n),this}setRGB(t,n,a,o=Ee.workingColorSpace){return this.r=t,this.g=n,this.b=a,Ee.colorSpaceToWorking(this,o),this}setHSL(t,n,a,o=Ee.workingColorSpace){if(t=CM(t,1),n=re(n,0,1),a=re(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=Md(u,c,t+1/3),this.g=Md(u,c,t),this.b=Md(u,c,t-1/3)}return Ee.colorSpaceToWorking(this,o),this}setStyle(t,n=Di){function a(c){c!==void 0&&parseFloat(c)<1&&se("Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:se("Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);se("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Di){const a=Yv[t.toLowerCase()];return a!==void 0?this.setHex(a,n):se("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Da(t.r),this.g=Da(t.g),this.b=Da(t.b),this}copyLinearToSRGB(t){return this.r=Zr(t.r),this.g=Zr(t.g),this.b=Zr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Di){return Ee.workingToColorSpace(kn.copy(this),t),Math.round(re(kn.r*255,0,255))*65536+Math.round(re(kn.g*255,0,255))*256+Math.round(re(kn.b*255,0,255))}getHexString(t=Di){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Ee.workingColorSpace){Ee.workingToColorSpace(kn.copy(this),n);const a=kn.r,o=kn.g,c=kn.b,u=Math.max(a,o,c),f=Math.min(a,o,c);let p,d;const g=(f+u)/2;if(f===u)p=0,d=0;else{const _=u-f;switch(d=g<=.5?_/(u+f):_/(2-u-f),u){case a:p=(o-c)/_+(o<c?6:0);break;case o:p=(c-a)/_+2;break;case c:p=(a-o)/_+4;break}p/=6}return t.h=p,t.s=d,t.l=g,t}getRGB(t,n=Ee.workingColorSpace){return Ee.workingToColorSpace(kn.copy(this),n),t.r=kn.r,t.g=kn.g,t.b=kn.b,t}getStyle(t=Di){Ee.workingToColorSpace(kn.copy(this),t);const n=kn.r,a=kn.g,o=kn.b;return t!==Di?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(t,n,a){return this.getHSL(ls),this.setHSL(ls.h+t,ls.s+n,ls.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(ls),t.getHSL(Kc);const a=ad(ls.h,Kc.h,n),o=ad(ls.s,Kc.s,n),c=ad(ls.l,Kc.l,n);return this.setHSL(a,o,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,o=this.b,c=t.elements;return this.r=c[0]*n+c[3]*a+c[6]*o,this.g=c[1]*n+c[4]*a+c[7]*o,this.b=c[2]*n+c[5]*a+c[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kn=new ie;ie.NAMES=Yv;let VM=0;class ro extends Xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:VM++}),this.uuid=so(),this.name="",this.type="Material",this.blending=jr,this.side=hs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xd,this.blendDst=Wd,this.blendEquation=Fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ie(0,0,0),this.blendAlpha=0,this.depthFunc=Kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=p_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rr,this.stencilZFail=Rr,this.stencilZPass=Rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){se(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){se(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==jr&&(a.blending=this.blending),this.side!==hs&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Xd&&(a.blendSrc=this.blendSrc),this.blendDst!==Wd&&(a.blendDst=this.blendDst),this.blendEquation!==Fs&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Kr&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==p_&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rr&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Rr&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Rr&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const u=[];for(const f in c){const p=c[f];delete p.metadata,u.push(p)}return u}if(n){const c=o(t.textures),u=o(t.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Iu extends ro{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new na,this.combine=Lv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _n=new W,Qc=new Rt;let kM=0;class Sn{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kM++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=m_,this.updateRanges=[],this.gpuType=Qi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[t+o]=n.array[a+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Qc.fromBufferAttribute(this,n),Qc.applyMatrix3(t),this.setXY(n,Qc.x,Qc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)_n.fromBufferAttribute(this,n),_n.applyMatrix3(t),this.setXYZ(n,_n.x,_n.y,_n.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)_n.fromBufferAttribute(this,n),_n.applyMatrix4(t),this.setXYZ(n,_n.x,_n.y,_n.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)_n.fromBufferAttribute(this,n),_n.applyNormalMatrix(t),this.setXYZ(n,_n.x,_n.y,_n.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)_n.fromBufferAttribute(this,n),_n.transformDirection(t),this.setXYZ(n,_n.x,_n.y,_n.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=al(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=ei(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=al(n,this.array)),n}setX(t,n){return this.normalized&&(n=ei(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=al(n,this.array)),n}setY(t,n){return this.normalized&&(n=ei(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=al(n,this.array)),n}setZ(t,n){return this.normalized&&(n=ei(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=al(n,this.array)),n}setW(t,n){return this.normalized&&(n=ei(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=ei(n,this.array),a=ei(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,o){return t*=this.itemSize,this.normalized&&(n=ei(n,this.array),a=ei(a,this.array),o=ei(o,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this}setXYZW(t,n,a,o,c){return t*=this.itemSize,this.normalized&&(n=ei(n,this.array),a=ei(a,this.array),o=ei(o,this.array),c=ei(c,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==m_&&(t.usage=this.usage),t}}class qv extends Sn{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class jv extends Sn{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class Te extends Sn{constructor(t,n,a){super(new Float32Array(t),n,a)}}let XM=0;const wi=new tn,bd=new An,Ir=new W,mi=new Al,ll=new Al,Tn=new W;class an extends Xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:XM++}),this.uuid=so(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(kv(t)?jv:qv)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new pe().getNormalMatrix(t);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return wi.makeRotationFromQuaternion(t),this.applyMatrix4(wi),this}rotateX(t){return wi.makeRotationX(t),this.applyMatrix4(wi),this}rotateY(t){return wi.makeRotationY(t),this.applyMatrix4(wi),this}rotateZ(t){return wi.makeRotationZ(t),this.applyMatrix4(wi),this}translate(t,n,a){return wi.makeTranslation(t,n,a),this.applyMatrix4(wi),this}scale(t,n,a){return wi.makeScale(t,n,a),this.applyMatrix4(wi),this}lookAt(t){return bd.lookAt(t),bd.updateMatrix(),this.applyMatrix4(bd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,c=t.length;o<c;o++){const u=t[o];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Te(a,3))}else{const a=Math.min(t.length,n.count);for(let o=0;o<a;o++){const c=t[o];n.setXYZ(o,c.x,c.y,c.z||0)}t.length>n.count&&se("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Al);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){De("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,o=n.length;a<o;a++){const c=n[a];mi.setFromBufferAttribute(c),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&De('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){De("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){const a=this.boundingSphere.center;if(mi.setFromBufferAttribute(t),n)for(let c=0,u=n.length;c<u;c++){const f=n[c];ll.setFromBufferAttribute(f),this.morphTargetsRelative?(Tn.addVectors(mi.min,ll.min),mi.expandByPoint(Tn),Tn.addVectors(mi.max,ll.max),mi.expandByPoint(Tn)):(mi.expandByPoint(ll.min),mi.expandByPoint(ll.max))}mi.getCenter(a);let o=0;for(let c=0,u=t.count;c<u;c++)Tn.fromBufferAttribute(t,c),o=Math.max(o,a.distanceToSquared(Tn));if(n)for(let c=0,u=n.length;c<u;c++){const f=n[c],p=this.morphTargetsRelative;for(let d=0,g=f.count;d<g;d++)Tn.fromBufferAttribute(f,d),p&&(Ir.fromBufferAttribute(t,d),Tn.add(Ir)),o=Math.max(o,a.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&De('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){De("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sn(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),f=[],p=[];for(let z=0;z<a.count;z++)f[z]=new W,p[z]=new W;const d=new W,g=new W,_=new W,v=new Rt,y=new Rt,E=new Rt,R=new W,S=new W;function x(z,C,w){d.fromBufferAttribute(a,z),g.fromBufferAttribute(a,C),_.fromBufferAttribute(a,w),v.fromBufferAttribute(c,z),y.fromBufferAttribute(c,C),E.fromBufferAttribute(c,w),g.sub(d),_.sub(d),y.sub(v),E.sub(v);const I=1/(y.x*E.y-E.x*y.y);isFinite(I)&&(R.copy(g).multiplyScalar(E.y).addScaledVector(_,-y.y).multiplyScalar(I),S.copy(_).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(I),f[z].add(R),f[C].add(R),f[w].add(R),p[z].add(S),p[C].add(S),p[w].add(S))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let z=0,C=T.length;z<C;++z){const w=T[z],I=w.start,k=w.count;for(let X=I,q=I+k;X<q;X+=3)x(t.getX(X+0),t.getX(X+1),t.getX(X+2))}const M=new W,A=new W,N=new W,L=new W;function U(z){N.fromBufferAttribute(o,z),L.copy(N);const C=f[z];M.copy(C),M.sub(N.multiplyScalar(N.dot(C))).normalize(),A.crossVectors(L,C);const I=A.dot(p[z])<0?-1:1;u.setXYZW(z,M.x,M.y,M.z,I)}for(let z=0,C=T.length;z<C;++z){const w=T[z],I=w.start,k=w.count;for(let X=I,q=I+k;X<q;X+=3)U(t.getX(X+0)),U(t.getX(X+1)),U(t.getX(X+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Sn(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,y=a.count;v<y;v++)a.setXYZ(v,0,0,0);const o=new W,c=new W,u=new W,f=new W,p=new W,d=new W,g=new W,_=new W;if(t)for(let v=0,y=t.count;v<y;v+=3){const E=t.getX(v+0),R=t.getX(v+1),S=t.getX(v+2);o.fromBufferAttribute(n,E),c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,S),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),f.fromBufferAttribute(a,E),p.fromBufferAttribute(a,R),d.fromBufferAttribute(a,S),f.add(g),p.add(g),d.add(g),a.setXYZ(E,f.x,f.y,f.z),a.setXYZ(R,p.x,p.y,p.z),a.setXYZ(S,d.x,d.y,d.z)}else for(let v=0,y=n.count;v<y;v+=3)o.fromBufferAttribute(n,v+0),c.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),a.setXYZ(v+0,g.x,g.y,g.z),a.setXYZ(v+1,g.x,g.y,g.z),a.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)Tn.fromBufferAttribute(t,n),Tn.normalize(),t.setXYZ(n,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function t(f,p){const d=f.array,g=f.itemSize,_=f.normalized,v=new d.constructor(p.length*g);let y=0,E=0;for(let R=0,S=p.length;R<S;R++){f.isInterleavedBufferAttribute?y=p[R]*f.data.stride+f.offset:y=p[R]*g;for(let x=0;x<g;x++)v[E++]=d[y++]}return new Sn(v,g,_)}if(this.index===null)return se("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new an,a=this.index.array,o=this.attributes;for(const f in o){const p=o[f],d=t(p,a);n.setAttribute(f,d)}const c=this.morphAttributes;for(const f in c){const p=[],d=c[f];for(let g=0,_=d.length;g<_;g++){const v=d[g],y=t(v,a);p.push(y)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,p=u.length;f<p;f++){const d=u[f];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(t[d]=p[d]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const d=a[p];t.data.attributes[p]=d.toJSON(t.data)}const o={};let c=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],g=[];for(let _=0,v=d.length;_<v;_++){const y=d[_];g.push(y.toJSON(t.data))}g.length>0&&(o[p]=g,c=!0)}c&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere=f.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const o=t.attributes;for(const d in o){const g=o[d];this.setAttribute(d,g.clone(n))}const c=t.morphAttributes;for(const d in c){const g=[],_=c[d];for(let v=0,y=_.length;v<y;v++)g.push(_[v].clone(n));this.morphAttributes[d]=g}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let d=0,g=u.length;d<g;d++){const _=u[d];this.addGroup(_.start,_.count,_.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const D_=new tn,Ls=new lm,Jc=new Cl,U_=new W,$c=new W,tu=new W,eu=new W,Ed=new W,nu=new W,N_=new W,iu=new W;class vi extends An{constructor(t=new an,n=new Iu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(t,n){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(o,t);const f=this.morphTargetInfluences;if(c&&f){nu.set(0,0,0);for(let p=0,d=c.length;p<d;p++){const g=f[p],_=c[p];g!==0&&(Ed.fromBufferAttribute(_,t),u?nu.addScaledVector(Ed,g):nu.addScaledVector(Ed.sub(n),g))}n.add(nu)}return n}raycast(t,n){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Jc.copy(a.boundingSphere),Jc.applyMatrix4(c),Ls.copy(t.ray).recast(t.near),!(Jc.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(Jc,U_)===null||Ls.origin.distanceToSquared(U_)>(t.far-t.near)**2))&&(D_.copy(c).invert(),Ls.copy(t.ray).applyMatrix4(D_),!(a.boundingBox!==null&&Ls.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,Ls)))}_computeIntersections(t,n,a){let o;const c=this.geometry,u=this.material,f=c.index,p=c.attributes.position,d=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,y=c.drawRange;if(f!==null)if(Array.isArray(u))for(let E=0,R=v.length;E<R;E++){const S=v[E],x=u[S.materialIndex],T=Math.max(S.start,y.start),M=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let A=T,N=M;A<N;A+=3){const L=f.getX(A),U=f.getX(A+1),z=f.getX(A+2);o=au(this,x,t,a,d,g,_,L,U,z),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const E=Math.max(0,y.start),R=Math.min(f.count,y.start+y.count);for(let S=E,x=R;S<x;S+=3){const T=f.getX(S),M=f.getX(S+1),A=f.getX(S+2);o=au(this,u,t,a,d,g,_,T,M,A),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let E=0,R=v.length;E<R;E++){const S=v[E],x=u[S.materialIndex],T=Math.max(S.start,y.start),M=Math.min(p.count,Math.min(S.start+S.count,y.start+y.count));for(let A=T,N=M;A<N;A+=3){const L=A,U=A+1,z=A+2;o=au(this,x,t,a,d,g,_,L,U,z),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const E=Math.max(0,y.start),R=Math.min(p.count,y.start+y.count);for(let S=E,x=R;S<x;S+=3){const T=S,M=S+1,A=S+2;o=au(this,u,t,a,d,g,_,T,M,A),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}}}function WM(r,t,n,a,o,c,u,f){let p;if(t.side===si?p=a.intersectTriangle(u,c,o,!0,f):p=a.intersectTriangle(o,c,u,t.side===hs,f),p===null)return null;iu.copy(f),iu.applyMatrix4(r.matrixWorld);const d=n.ray.origin.distanceTo(iu);return d<n.near||d>n.far?null:{distance:d,point:iu.clone(),object:r}}function au(r,t,n,a,o,c,u,f,p,d){r.getVertexPosition(f,$c),r.getVertexPosition(p,tu),r.getVertexPosition(d,eu);const g=WM(r,t,n,a,$c,tu,eu,N_);if(g){const _=new W;Ni.getBarycoord(N_,$c,tu,eu,_),o&&(g.uv=Ni.getInterpolatedAttribute(o,f,p,d,_,new Rt)),c&&(g.uv1=Ni.getInterpolatedAttribute(c,f,p,d,_,new Rt)),u&&(g.normal=Ni.getInterpolatedAttribute(u,f,p,d,_,new W),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const v={a:f,b:p,c:d,normal:new W,materialIndex:0};Ni.getNormal($c,tu,eu,v.normal),g.face=v,g.barycoord=_}return g}class Rl extends an{constructor(t=1,n=1,a=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:o,heightSegments:c,depthSegments:u};const f=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const p=[],d=[],g=[],_=[];let v=0,y=0;E("z","y","x",-1,-1,a,n,t,u,c,0),E("z","y","x",1,-1,a,n,-t,u,c,1),E("x","z","y",1,1,t,a,n,o,u,2),E("x","z","y",1,-1,t,a,-n,o,u,3),E("x","y","z",1,-1,t,n,a,o,c,4),E("x","y","z",-1,-1,t,n,-a,o,c,5),this.setIndex(p),this.setAttribute("position",new Te(d,3)),this.setAttribute("normal",new Te(g,3)),this.setAttribute("uv",new Te(_,2));function E(R,S,x,T,M,A,N,L,U,z,C){const w=A/U,I=N/z,k=A/2,X=N/2,q=L/2,G=U+1,F=z+1;let V=0,Q=0;const pt=new W;for(let dt=0;dt<F;dt++){const B=dt*I-X;for(let et=0;et<G;et++){const ft=et*w-k;pt[R]=ft*T,pt[S]=B*M,pt[x]=q,d.push(pt.x,pt.y,pt.z),pt[R]=0,pt[S]=0,pt[x]=L>0?1:-1,g.push(pt.x,pt.y,pt.z),_.push(et/U),_.push(1-dt/z),V+=1}}for(let dt=0;dt<z;dt++)for(let B=0;B<U;B++){const et=v+B+G*dt,ft=v+B+G*(dt+1),bt=v+(B+1)+G*(dt+1),Ot=v+(B+1)+G*dt;p.push(et,ft,Ot),p.push(ft,bt,Ot),Q+=6}f.addGroup(y,Q,C),y+=Q,v+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function to(r){const t={};for(const n in r){t[n]={};for(const a in r[n]){const o=r[n][a];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(se("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=o.clone():Array.isArray(o)?t[n][a]=o.slice():t[n][a]=o}}return t}function Wn(r){const t={};for(let n=0;n<r.length;n++){const a=to(r[n]);for(const o in a)t[o]=a[o]}return t}function YM(r){const t=[];for(let n=0;n<r.length;n++)t.push(r[n].clone());return t}function Zv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ee.workingColorSpace}const xl={clone:to,merge:Wn};var qM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bn extends ro{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qM,this.fragmentShader=jM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=to(t.uniforms),this.uniformsGroups=YM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class Kv extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=Ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const cs=new W,L_=new Rt,O_=new Rt;class Ui extends Kv{constructor(t=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Op*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Au*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Op*2*Math.atan(Math.tan(Au*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(cs.x,cs.y).multiplyScalar(-t/cs.z),cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(cs.x,cs.y).multiplyScalar(-t/cs.z)}getViewSize(t,n){return this.getViewBounds(t,L_,O_),n.subVectors(O_,L_)}setViewOffset(t,n,a,o,c,u){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Au*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,d=u.fullHeight;c+=u.offsetX*o/p,n-=u.offsetY*a/d,o*=u.width/p,a*=u.height/d}const f=this.filmOffset;f!==0&&(c+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Br=-90,Hr=1;class ZM extends An{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Ui(Br,Hr,t,n);o.layers=this.layers,this.add(o);const c=new Ui(Br,Hr,t,n);c.layers=this.layers,this.add(c);const u=new Ui(Br,Hr,t,n);u.layers=this.layers,this.add(u);const f=new Ui(Br,Hr,t,n);f.layers=this.layers,this.add(f);const p=new Ui(Br,Hr,t,n);p.layers=this.layers,this.add(p);const d=new Ui(Br,Hr,t,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,o,c,u,f,p]=n;for(const d of n)this.remove(d);if(t===Ji)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Ou)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of n)this.add(d),d.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,u,f,p,d,g]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const R=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,o),t.render(n,c),t.setRenderTarget(a,1,o),t.render(n,u),t.setRenderTarget(a,2,o),t.render(n,f),t.setRenderTarget(a,3,o),t.render(n,p),t.setRenderTarget(a,4,o),t.render(n,d),a.texture.generateMipmaps=R,t.setRenderTarget(a,5,o),t.render(n,g),t.setRenderTarget(_,v,y),t.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class Qv extends jn{constructor(t=[],n=Gs,a,o,c,u,f,p,d,g){super(t,n,a,o,c,u,f,p,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Jv extends ri{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},o=[a,a,a,a,a,a];this.texture=new Qv(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Rl(5,5,5),c=new Bn({name:"CubemapFromEquirect",uniforms:to(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:si,blending:$i});c.uniforms.tEquirect.value=n;const u=new vi(o,c),f=n.minFilter;return n.minFilter===Bs&&(n.minFilter=In),new ZM(1,10,this).update(t,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(t,n=!0,a=!0,o=!0){const c=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(n,a,o);t.setRenderTarget(c)}}class qn extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const KM={type:"move"};class Td{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let o=null,c=null,u=null;const f=this._targetRay,p=this._grip,d=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(d&&t.hand){u=!0;for(const R of t.hand.values()){const S=n.getJointPose(R,a),x=this._getHandJoint(d,R);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const g=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],v=g.position.distanceTo(_.position),y=.02,E=.005;d.inputState.pinching&&v>y+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&v<=y-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,a),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(o=n.getPose(t.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(KM)))}return f!==null&&(f.visible=o!==null),p!==null&&(p.visible=c!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new qn;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}class cm{constructor(t,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new ie(t),this.density=n}clone(){return new cm(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}let QM=class extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new na,this.environmentIntensity=1,this.environmentRotation=new na,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}};class $v extends jn{constructor(t=null,n=1,a=1,o,c,u,f,p,d=Fn,g=Fn,_,v){super(null,u,f,p,d,g,o,c,_,v),this.isDataTexture=!0,this.image={data:t,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ad=new W,JM=new W,$M=new pe;class Ra{constructor(t=new W(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,o){return this.normal.set(t,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const o=Ad.subVectors(a,n).cross(JM.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(Ad),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(t.start).addScaledVector(a,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||$M.getNormalMatrix(t),o=this.coplanarPoint(Ad).applyMatrix4(t),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Os=new Cl,tb=new Rt(.5,.5),su=new W;class um{constructor(t=new Ra,n=new Ra,a=new Ra,o=new Ra,c=new Ra,u=new Ra){this.planes=[t,n,a,o,c,u]}set(t,n,a,o,c,u){const f=this.planes;return f[0].copy(t),f[1].copy(n),f[2].copy(a),f[3].copy(o),f[4].copy(c),f[5].copy(u),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=Ji,a=!1){const o=this.planes,c=t.elements,u=c[0],f=c[1],p=c[2],d=c[3],g=c[4],_=c[5],v=c[6],y=c[7],E=c[8],R=c[9],S=c[10],x=c[11],T=c[12],M=c[13],A=c[14],N=c[15];if(o[0].setComponents(d-u,y-g,x-E,N-T).normalize(),o[1].setComponents(d+u,y+g,x+E,N+T).normalize(),o[2].setComponents(d+f,y+_,x+R,N+M).normalize(),o[3].setComponents(d-f,y-_,x-R,N-M).normalize(),a)o[4].setComponents(p,v,S,A).normalize(),o[5].setComponents(d-p,y-v,x-S,N-A).normalize();else if(o[4].setComponents(d-p,y-v,x-S,N-A).normalize(),n===Ji)o[5].setComponents(d+p,y+v,x+S,N+A).normalize();else if(n===Ou)o[5].setComponents(p,v,S,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Os.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Os.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Os)}intersectsSprite(t){Os.center.set(0,0,0);const n=tb.distanceTo(t.center);return Os.radius=.7071067811865476+n,Os.applyMatrix4(t.matrixWorld),this.intersectsSphere(Os)}intersectsSphere(t){const n=this.planes,a=t.center,o=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(su.x=o.normal.x>0?t.max.x:t.min.x,su.y=o.normal.y>0?t.max.y:t.min.y,su.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(su)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class tx extends ro{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const P_=new tn,Pp=new lm,ru=new Cl,ou=new W;class eb extends An{constructor(t=new an,n=new tx){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const a=this.geometry,o=this.matrixWorld,c=t.params.Points.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),ru.copy(a.boundingSphere),ru.applyMatrix4(o),ru.radius+=c,t.ray.intersectsSphere(ru)===!1)return;P_.copy(o).invert(),Pp.copy(t.ray).applyMatrix4(P_);const f=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,d=a.index,_=a.attributes.position;if(d!==null){const v=Math.max(0,u.start),y=Math.min(d.count,u.start+u.count);for(let E=v,R=y;E<R;E++){const S=d.getX(E);ou.fromBufferAttribute(_,S),z_(ou,S,p,o,t,n,this)}}else{const v=Math.max(0,u.start),y=Math.min(_.count,u.start+u.count);for(let E=v,R=y;E<R;E++)ou.fromBufferAttribute(_,E),z_(ou,E,p,o,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}}function z_(r,t,n,a,o,c,u){const f=Pp.distanceSqToPoint(r);if(f<n){const p=new W;Pp.closestPointToPoint(r,p),p.applyMatrix4(a);const d=o.ray.origin.distanceTo(p);if(d<o.near||d>o.far)return;c.push({distance:d,distanceToRay:Math.sqrt(f),point:p,index:t,face:null,faceIndex:null,barycoord:null,object:u})}}class yl extends jn{constructor(t,n,a=ea,o,c,u,f=Fn,p=Fn,d,g=Ua,_=1){if(g!==Ua&&g!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:n,depth:_};super(v,o,c,u,f,p,g,a,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new om(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class nb extends yl{constructor(t,n=ea,a=Gs,o,c,u=Fn,f=Fn,p,d=Ua){const g={width:t,height:t,depth:1},_=[g,g,g,g,g,g];super(t,t,n,a,o,c,u,f,p,d),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class ex extends jn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class fm extends an{constructor(t=1,n=32,a=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:n,thetaStart:a,thetaLength:o},n=Math.max(3,n);const c=[],u=[],f=[],p=[],d=new W,g=new Rt;u.push(0,0,0),f.push(0,0,1),p.push(.5,.5);for(let _=0,v=3;_<=n;_++,v+=3){const y=a+_/n*o;d.x=t*Math.cos(y),d.y=t*Math.sin(y),u.push(d.x,d.y,d.z),f.push(0,0,1),g.x=(u[v]/t+1)/2,g.y=(u[v+1]/t+1)/2,p.push(g.x,g.y)}for(let _=1;_<=n;_++)c.push(_,_+1,0);this.setIndex(c),this.setAttribute("position",new Te(u,3)),this.setAttribute("normal",new Te(f,3)),this.setAttribute("uv",new Te(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fm(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Bu extends an{constructor(t=1,n=1,a=1,o=32,c=1,u=!1,f=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:a,radialSegments:o,heightSegments:c,openEnded:u,thetaStart:f,thetaLength:p};const d=this;o=Math.floor(o),c=Math.floor(c);const g=[],_=[],v=[],y=[];let E=0;const R=[],S=a/2;let x=0;T(),u===!1&&(t>0&&M(!0),n>0&&M(!1)),this.setIndex(g),this.setAttribute("position",new Te(_,3)),this.setAttribute("normal",new Te(v,3)),this.setAttribute("uv",new Te(y,2));function T(){const A=new W,N=new W;let L=0;const U=(n-t)/a;for(let z=0;z<=c;z++){const C=[],w=z/c,I=w*(n-t)+t;for(let k=0;k<=o;k++){const X=k/o,q=X*p+f,G=Math.sin(q),F=Math.cos(q);N.x=I*G,N.y=-w*a+S,N.z=I*F,_.push(N.x,N.y,N.z),A.set(G,U,F).normalize(),v.push(A.x,A.y,A.z),y.push(X,1-w),C.push(E++)}R.push(C)}for(let z=0;z<o;z++)for(let C=0;C<c;C++){const w=R[C][z],I=R[C+1][z],k=R[C+1][z+1],X=R[C][z+1];(t>0||C!==0)&&(g.push(w,I,X),L+=3),(n>0||C!==c-1)&&(g.push(I,k,X),L+=3)}d.addGroup(x,L,0),x+=L}function M(A){const N=E,L=new Rt,U=new W;let z=0;const C=A===!0?t:n,w=A===!0?1:-1;for(let k=1;k<=o;k++)_.push(0,S*w,0),v.push(0,w,0),y.push(.5,.5),E++;const I=E;for(let k=0;k<=o;k++){const q=k/o*p+f,G=Math.cos(q),F=Math.sin(q);U.x=C*F,U.y=S*w,U.z=C*G,_.push(U.x,U.y,U.z),v.push(0,w,0),L.x=G*.5+.5,L.y=F*.5*w+.5,y.push(L.x,L.y),E++}for(let k=0;k<o;k++){const X=N+k,q=I+k;A===!0?g.push(q,q+1,X):g.push(q+1,q,X),z+=3}d.addGroup(x,z,A===!0?1:2),x+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bu(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class hm extends an{constructor(t=[],n=[],a=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:a,detail:o};const c=[],u=[];f(o),d(a),g(),this.setAttribute("position",new Te(c,3)),this.setAttribute("normal",new Te(c.slice(),3)),this.setAttribute("uv",new Te(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function f(T){const M=new W,A=new W,N=new W;for(let L=0;L<n.length;L+=3)y(n[L+0],M),y(n[L+1],A),y(n[L+2],N),p(M,A,N,T)}function p(T,M,A,N){const L=N+1,U=[];for(let z=0;z<=L;z++){U[z]=[];const C=T.clone().lerp(A,z/L),w=M.clone().lerp(A,z/L),I=L-z;for(let k=0;k<=I;k++)k===0&&z===L?U[z][k]=C:U[z][k]=C.clone().lerp(w,k/I)}for(let z=0;z<L;z++)for(let C=0;C<2*(L-z)-1;C++){const w=Math.floor(C/2);C%2===0?(v(U[z][w+1]),v(U[z+1][w]),v(U[z][w])):(v(U[z][w+1]),v(U[z+1][w+1]),v(U[z+1][w]))}}function d(T){const M=new W;for(let A=0;A<c.length;A+=3)M.x=c[A+0],M.y=c[A+1],M.z=c[A+2],M.normalize().multiplyScalar(T),c[A+0]=M.x,c[A+1]=M.y,c[A+2]=M.z}function g(){const T=new W;for(let M=0;M<c.length;M+=3){T.x=c[M+0],T.y=c[M+1],T.z=c[M+2];const A=S(T)/2/Math.PI+.5,N=x(T)/Math.PI+.5;u.push(A,1-N)}E(),_()}function _(){for(let T=0;T<u.length;T+=6){const M=u[T+0],A=u[T+2],N=u[T+4],L=Math.max(M,A,N),U=Math.min(M,A,N);L>.9&&U<.1&&(M<.2&&(u[T+0]+=1),A<.2&&(u[T+2]+=1),N<.2&&(u[T+4]+=1))}}function v(T){c.push(T.x,T.y,T.z)}function y(T,M){const A=T*3;M.x=t[A+0],M.y=t[A+1],M.z=t[A+2]}function E(){const T=new W,M=new W,A=new W,N=new W,L=new Rt,U=new Rt,z=new Rt;for(let C=0,w=0;C<c.length;C+=9,w+=6){T.set(c[C+0],c[C+1],c[C+2]),M.set(c[C+3],c[C+4],c[C+5]),A.set(c[C+6],c[C+7],c[C+8]),L.set(u[w+0],u[w+1]),U.set(u[w+2],u[w+3]),z.set(u[w+4],u[w+5]),N.copy(T).add(M).add(A).divideScalar(3);const I=S(N);R(L,w+0,T,I),R(U,w+2,M,I),R(z,w+4,A,I)}}function R(T,M,A,N){N<0&&T.x===1&&(u[M]=T.x-1),A.x===0&&A.z===0&&(u[M]=N/2/Math.PI+.5)}function S(T){return Math.atan2(T.z,-T.x)}function x(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hm(t.vertices,t.indices,t.radius,t.detail)}}class ia{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){se("Curve: .getPoint() not implemented.")}getPointAt(t,n){const a=this.getUtoTmapping(t);return this.getPoint(a,n)}getPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPoint(a/t));return n}getSpacedPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPointAt(a/t));return n}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let a,o=this.getPoint(0),c=0;n.push(0);for(let u=1;u<=t;u++)a=this.getPoint(u/t),c+=a.distanceTo(o),n.push(c),o=a;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){const a=this.getLengths();let o=0;const c=a.length;let u;n?u=n:u=t*a[c-1];let f=0,p=c-1,d;for(;f<=p;)if(o=Math.floor(f+(p-f)/2),d=a[o]-u,d<0)f=o+1;else if(d>0)p=o-1;else{p=o;break}if(o=p,a[o]===u)return o/(c-1);const g=a[o],v=a[o+1]-g,y=(u-g)/v;return(o+y)/(c-1)}getTangent(t,n){let o=t-1e-4,c=t+1e-4;o<0&&(o=0),c>1&&(c=1);const u=this.getPoint(o),f=this.getPoint(c),p=n||(u.isVector2?new Rt:new W);return p.copy(f).sub(u).normalize(),p}getTangentAt(t,n){const a=this.getUtoTmapping(t);return this.getTangent(a,n)}computeFrenetFrames(t,n=!1){const a=new W,o=[],c=[],u=[],f=new W,p=new tn;for(let y=0;y<=t;y++){const E=y/t;o[y]=this.getTangentAt(E,new W)}c[0]=new W,u[0]=new W;let d=Number.MAX_VALUE;const g=Math.abs(o[0].x),_=Math.abs(o[0].y),v=Math.abs(o[0].z);g<=d&&(d=g,a.set(1,0,0)),_<=d&&(d=_,a.set(0,1,0)),v<=d&&a.set(0,0,1),f.crossVectors(o[0],a).normalize(),c[0].crossVectors(o[0],f),u[0].crossVectors(o[0],c[0]);for(let y=1;y<=t;y++){if(c[y]=c[y-1].clone(),u[y]=u[y-1].clone(),f.crossVectors(o[y-1],o[y]),f.length()>Number.EPSILON){f.normalize();const E=Math.acos(re(o[y-1].dot(o[y]),-1,1));c[y].applyMatrix4(p.makeRotationAxis(f,E))}u[y].crossVectors(o[y],c[y])}if(n===!0){let y=Math.acos(re(c[0].dot(c[t]),-1,1));y/=t,o[0].dot(f.crossVectors(c[0],c[t]))>0&&(y=-y);for(let E=1;E<=t;E++)c[E].applyMatrix4(p.makeRotationAxis(o[E],y*E)),u[E].crossVectors(o[E],c[E])}return{tangents:o,normals:c,binormals:u}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class dm extends ia{constructor(t=0,n=0,a=1,o=1,c=0,u=Math.PI*2,f=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=a,this.yRadius=o,this.aStartAngle=c,this.aEndAngle=u,this.aClockwise=f,this.aRotation=p}getPoint(t,n=new Rt){const a=n,o=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const u=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=o;for(;c>o;)c-=o;c<Number.EPSILON&&(u?c=0:c=o),this.aClockwise===!0&&!u&&(c===o?c=-o:c=c-o);const f=this.aStartAngle+t*c;let p=this.aX+this.xRadius*Math.cos(f),d=this.aY+this.yRadius*Math.sin(f);if(this.aRotation!==0){const g=Math.cos(this.aRotation),_=Math.sin(this.aRotation),v=p-this.aX,y=d-this.aY;p=v*g-y*_+this.aX,d=v*_+y*g+this.aY}return a.set(p,d)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ib extends dm{constructor(t,n,a,o,c,u){super(t,n,a,a,o,c,u),this.isArcCurve=!0,this.type="ArcCurve"}}function pm(){let r=0,t=0,n=0,a=0;function o(c,u,f,p){r=c,t=f,n=-3*c+3*u-2*f-p,a=2*c-2*u+f+p}return{initCatmullRom:function(c,u,f,p,d){o(u,f,d*(f-c),d*(p-u))},initNonuniformCatmullRom:function(c,u,f,p,d,g,_){let v=(u-c)/d-(f-c)/(d+g)+(f-u)/g,y=(f-u)/g-(p-u)/(g+_)+(p-f)/_;v*=g,y*=g,o(u,f,v,y)},calc:function(c){const u=c*c,f=u*c;return r+t*c+n*u+a*f}}}const lu=new W,Cd=new pm,Rd=new pm,wd=new pm;class mm extends ia{constructor(t=[],n=!1,a="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=a,this.tension=o}getPoint(t,n=new W){const a=n,o=this.points,c=o.length,u=(c-(this.closed?0:1))*t;let f=Math.floor(u),p=u-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/c)+1)*c:p===0&&f===c-1&&(f=c-2,p=1);let d,g;this.closed||f>0?d=o[(f-1)%c]:(lu.subVectors(o[0],o[1]).add(o[0]),d=lu);const _=o[f%c],v=o[(f+1)%c];if(this.closed||f+2<c?g=o[(f+2)%c]:(lu.subVectors(o[c-1],o[c-2]).add(o[c-1]),g=lu),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let E=Math.pow(d.distanceToSquared(_),y),R=Math.pow(_.distanceToSquared(v),y),S=Math.pow(v.distanceToSquared(g),y);R<1e-4&&(R=1),E<1e-4&&(E=R),S<1e-4&&(S=R),Cd.initNonuniformCatmullRom(d.x,_.x,v.x,g.x,E,R,S),Rd.initNonuniformCatmullRom(d.y,_.y,v.y,g.y,E,R,S),wd.initNonuniformCatmullRom(d.z,_.z,v.z,g.z,E,R,S)}else this.curveType==="catmullrom"&&(Cd.initCatmullRom(d.x,_.x,v.x,g.x,this.tension),Rd.initCatmullRom(d.y,_.y,v.y,g.y,this.tension),wd.initCatmullRom(d.z,_.z,v.z,g.z,this.tension));return a.set(Cd.calc(p),Rd.calc(p),wd.calc(p)),a}copy(t){super.copy(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(o.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,a=this.points.length;n<a;n++){const o=this.points[n];t.points.push(o.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(new W().fromArray(o))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function F_(r,t,n,a,o){const c=(a-t)*.5,u=(o-n)*.5,f=r*r,p=r*f;return(2*n-2*a+c+u)*p+(-3*n+3*a-2*c-u)*f+c*r+n}function ab(r,t){const n=1-r;return n*n*t}function sb(r,t){return 2*(1-r)*r*t}function rb(r,t){return r*r*t}function dl(r,t,n,a){return ab(r,t)+sb(r,n)+rb(r,a)}function ob(r,t){const n=1-r;return n*n*n*t}function lb(r,t){const n=1-r;return 3*n*n*r*t}function cb(r,t){return 3*(1-r)*r*r*t}function ub(r,t){return r*r*r*t}function pl(r,t,n,a,o){return ob(r,t)+lb(r,n)+cb(r,a)+ub(r,o)}class nx extends ia{constructor(t=new Rt,n=new Rt,a=new Rt,o=new Rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=a,this.v3=o}getPoint(t,n=new Rt){const a=n,o=this.v0,c=this.v1,u=this.v2,f=this.v3;return a.set(pl(t,o.x,c.x,u.x,f.x),pl(t,o.y,c.y,u.y,f.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class fb extends ia{constructor(t=new W,n=new W,a=new W,o=new W){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=a,this.v3=o}getPoint(t,n=new W){const a=n,o=this.v0,c=this.v1,u=this.v2,f=this.v3;return a.set(pl(t,o.x,c.x,u.x,f.x),pl(t,o.y,c.y,u.y,f.y),pl(t,o.z,c.z,u.z,f.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ix extends ia{constructor(t=new Rt,n=new Rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new Rt){const a=n;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new Rt){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hb extends ia{constructor(t=new W,n=new W){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new W){const a=n;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new W){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ax extends ia{constructor(t=new Rt,n=new Rt,a=new Rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=a}getPoint(t,n=new Rt){const a=n,o=this.v0,c=this.v1,u=this.v2;return a.set(dl(t,o.x,c.x,u.x),dl(t,o.y,c.y,u.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class sx extends ia{constructor(t=new W,n=new W,a=new W){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=a}getPoint(t,n=new W){const a=n,o=this.v0,c=this.v1,u=this.v2;return a.set(dl(t,o.x,c.x,u.x),dl(t,o.y,c.y,u.y),dl(t,o.z,c.z,u.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class rx extends ia{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new Rt){const a=n,o=this.points,c=(o.length-1)*t,u=Math.floor(c),f=c-u,p=o[u===0?u:u-1],d=o[u],g=o[u>o.length-2?o.length-1:u+1],_=o[u>o.length-3?o.length-1:u+2];return a.set(F_(f,p.x,d.x,g.x,_.x),F_(f,p.y,d.y,g.y,_.y)),a}copy(t){super.copy(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(o.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,a=this.points.length;n<a;n++){const o=this.points[n];t.points.push(o.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(new Rt().fromArray(o))}return this}}var zp=Object.freeze({__proto__:null,ArcCurve:ib,CatmullRomCurve3:mm,CubicBezierCurve:nx,CubicBezierCurve3:fb,EllipseCurve:dm,LineCurve:ix,LineCurve3:hb,QuadraticBezierCurve:ax,QuadraticBezierCurve3:sx,SplineCurve:rx});class db extends ia{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(n)){const a=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zp[a](n,t))}return this}getPoint(t,n){const a=t*this.getLength(),o=this.getCurveLengths();let c=0;for(;c<o.length;){if(o[c]>=a){const u=o[c]-a,f=this.curves[c],p=f.getLength(),d=p===0?0:1-u/p;return f.getPointAt(d,n)}c++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let n=0;for(let a=0,o=this.curves.length;a<o;a++)n+=this.curves[a].getLength(),t.push(n);return this.cacheLengths=t,t}getSpacedPoints(t=40){const n=[];for(let a=0;a<=t;a++)n.push(this.getPoint(a/t));return this.autoClose&&n.push(n[0]),n}getPoints(t=12){const n=[];let a;for(let o=0,c=this.curves;o<c.length;o++){const u=c[o],f=u.isEllipseCurve?t*2:u.isLineCurve||u.isLineCurve3?1:u.isSplineCurve?t*u.points.length:t,p=u.getPoints(f);for(let d=0;d<p.length;d++){const g=p[d];a&&a.equals(g)||(n.push(g),a=g)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(t){super.copy(t),this.curves=[];for(let n=0,a=t.curves.length;n<a;n++){const o=t.curves[n];this.curves.push(o.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let n=0,a=this.curves.length;n<a;n++){const o=this.curves[n];t.curves.push(o.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let n=0,a=t.curves.length;n<a;n++){const o=t.curves[n];this.curves.push(new zp[o.type]().fromJSON(o))}return this}}class I_ extends db{constructor(t){super(),this.type="Path",this.currentPoint=new Rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let n=1,a=t.length;n<a;n++)this.lineTo(t[n].x,t[n].y);return this}moveTo(t,n){return this.currentPoint.set(t,n),this}lineTo(t,n){const a=new ix(this.currentPoint.clone(),new Rt(t,n));return this.curves.push(a),this.currentPoint.set(t,n),this}quadraticCurveTo(t,n,a,o){const c=new ax(this.currentPoint.clone(),new Rt(t,n),new Rt(a,o));return this.curves.push(c),this.currentPoint.set(a,o),this}bezierCurveTo(t,n,a,o,c,u){const f=new nx(this.currentPoint.clone(),new Rt(t,n),new Rt(a,o),new Rt(c,u));return this.curves.push(f),this.currentPoint.set(c,u),this}splineThru(t){const n=[this.currentPoint.clone()].concat(t),a=new rx(n);return this.curves.push(a),this.currentPoint.copy(t[t.length-1]),this}arc(t,n,a,o,c,u){const f=this.currentPoint.x,p=this.currentPoint.y;return this.absarc(t+f,n+p,a,o,c,u),this}absarc(t,n,a,o,c,u){return this.absellipse(t,n,a,a,o,c,u),this}ellipse(t,n,a,o,c,u,f,p){const d=this.currentPoint.x,g=this.currentPoint.y;return this.absellipse(t+d,n+g,a,o,c,u,f,p),this}absellipse(t,n,a,o,c,u,f,p){const d=new dm(t,n,a,o,c,u,f,p);if(this.curves.length>0){const _=d.getPoint(0);_.equals(this.currentPoint)||this.lineTo(_.x,_.y)}this.curves.push(d);const g=d.getPoint(1);return this.currentPoint.copy(g),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Sl extends I_{constructor(t){super(t),this.uuid=so(),this.type="Shape",this.holes=[]}getPointsHoles(t){const n=[];for(let a=0,o=this.holes.length;a<o;a++)n[a]=this.holes[a].getPoints(t);return n}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let n=0,a=t.holes.length;n<a;n++){const o=t.holes[n];this.holes.push(o.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let n=0,a=this.holes.length;n<a;n++){const o=this.holes[n];t.holes.push(o.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let n=0,a=t.holes.length;n<a;n++){const o=t.holes[n];this.holes.push(new I_().fromJSON(o))}return this}}function pb(r,t,n=2){const a=t&&t.length,o=a?t[0]*n:r.length;let c=ox(r,0,o,n,!0);const u=[];if(!c||c.next===c.prev)return u;let f,p,d;if(a&&(c=xb(r,t,c,n)),r.length>80*n){f=r[0],p=r[1];let g=f,_=p;for(let v=n;v<o;v+=n){const y=r[v],E=r[v+1];y<f&&(f=y),E<p&&(p=E),y>g&&(g=y),E>_&&(_=E)}d=Math.max(g-f,_-p),d=d!==0?32767/d:0}return Ml(c,u,n,f,p,d,0),u}function ox(r,t,n,a,o){let c;if(o===Db(r,t,n,a)>0)for(let u=t;u<n;u+=a)c=B_(u/a|0,r[u],r[u+1],c);else for(let u=n-a;u>=t;u-=a)c=B_(u/a|0,r[u],r[u+1],c);return c&&eo(c,c.next)&&(El(c),c=c.next),c}function ks(r,t){if(!r)return r;t||(t=r);let n=r,a;do if(a=!1,!n.steiner&&(eo(n,n.next)||nn(n.prev,n,n.next)===0)){if(El(n),n=t=n.prev,n===n.next)break;a=!0}else n=n.next;while(a||n!==t);return t}function Ml(r,t,n,a,o,c,u){if(!r)return;!u&&c&&Eb(r,a,o,c);let f=r;for(;r.prev!==r.next;){const p=r.prev,d=r.next;if(c?gb(r,a,o,c):mb(r)){t.push(p.i,r.i,d.i),El(r),r=d.next,f=d.next;continue}if(r=d,r===f){u?u===1?(r=_b(ks(r),t),Ml(r,t,n,a,o,c,2)):u===2&&vb(r,t,n,a,o,c):Ml(ks(r),t,n,a,o,c,1);break}}}function mb(r){const t=r.prev,n=r,a=r.next;if(nn(t,n,a)>=0)return!1;const o=t.x,c=n.x,u=a.x,f=t.y,p=n.y,d=a.y,g=Math.min(o,c,u),_=Math.min(f,p,d),v=Math.max(o,c,u),y=Math.max(f,p,d);let E=a.next;for(;E!==t;){if(E.x>=g&&E.x<=v&&E.y>=_&&E.y<=y&&fl(o,f,c,p,u,d,E.x,E.y)&&nn(E.prev,E,E.next)>=0)return!1;E=E.next}return!0}function gb(r,t,n,a){const o=r.prev,c=r,u=r.next;if(nn(o,c,u)>=0)return!1;const f=o.x,p=c.x,d=u.x,g=o.y,_=c.y,v=u.y,y=Math.min(f,p,d),E=Math.min(g,_,v),R=Math.max(f,p,d),S=Math.max(g,_,v),x=Fp(y,E,t,n,a),T=Fp(R,S,t,n,a);let M=r.prevZ,A=r.nextZ;for(;M&&M.z>=x&&A&&A.z<=T;){if(M.x>=y&&M.x<=R&&M.y>=E&&M.y<=S&&M!==o&&M!==u&&fl(f,g,p,_,d,v,M.x,M.y)&&nn(M.prev,M,M.next)>=0||(M=M.prevZ,A.x>=y&&A.x<=R&&A.y>=E&&A.y<=S&&A!==o&&A!==u&&fl(f,g,p,_,d,v,A.x,A.y)&&nn(A.prev,A,A.next)>=0))return!1;A=A.nextZ}for(;M&&M.z>=x;){if(M.x>=y&&M.x<=R&&M.y>=E&&M.y<=S&&M!==o&&M!==u&&fl(f,g,p,_,d,v,M.x,M.y)&&nn(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;A&&A.z<=T;){if(A.x>=y&&A.x<=R&&A.y>=E&&A.y<=S&&A!==o&&A!==u&&fl(f,g,p,_,d,v,A.x,A.y)&&nn(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function _b(r,t){let n=r;do{const a=n.prev,o=n.next.next;!eo(a,o)&&cx(a,n,n.next,o)&&bl(a,o)&&bl(o,a)&&(t.push(a.i,n.i,o.i),El(n),El(n.next),n=r=o),n=n.next}while(n!==r);return ks(n)}function vb(r,t,n,a,o,c){let u=r;do{let f=u.next.next;for(;f!==u.prev;){if(u.i!==f.i&&Cb(u,f)){let p=ux(u,f);u=ks(u,u.next),p=ks(p,p.next),Ml(u,t,n,a,o,c,0),Ml(p,t,n,a,o,c,0);return}f=f.next}u=u.next}while(u!==r)}function xb(r,t,n,a){const o=[];for(let c=0,u=t.length;c<u;c++){const f=t[c]*a,p=c<u-1?t[c+1]*a:r.length,d=ox(r,f,p,a,!1);d===d.next&&(d.steiner=!0),o.push(Ab(d))}o.sort(yb);for(let c=0;c<o.length;c++)n=Sb(o[c],n);return n}function yb(r,t){let n=r.x-t.x;if(n===0&&(n=r.y-t.y,n===0)){const a=(r.next.y-r.y)/(r.next.x-r.x),o=(t.next.y-t.y)/(t.next.x-t.x);n=a-o}return n}function Sb(r,t){const n=Mb(r,t);if(!n)return t;const a=ux(n,r);return ks(a,a.next),ks(n,n.next)}function Mb(r,t){let n=t;const a=r.x,o=r.y;let c=-1/0,u;if(eo(r,n))return n;do{if(eo(r,n.next))return n.next;if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const _=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(_<=a&&_>c&&(c=_,u=n.x<n.next.x?n:n.next,_===a))return u}n=n.next}while(n!==t);if(!u)return null;const f=u,p=u.x,d=u.y;let g=1/0;n=u;do{if(a>=n.x&&n.x>=p&&a!==n.x&&lx(o<d?a:c,o,p,d,o<d?c:a,o,n.x,n.y)){const _=Math.abs(o-n.y)/(a-n.x);bl(n,r)&&(_<g||_===g&&(n.x>u.x||n.x===u.x&&bb(u,n)))&&(u=n,g=_)}n=n.next}while(n!==f);return u}function bb(r,t){return nn(r.prev,r,t.prev)<0&&nn(t.next,r,r.next)<0}function Eb(r,t,n,a){let o=r;do o.z===0&&(o.z=Fp(o.x,o.y,t,n,a)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==r);o.prevZ.nextZ=null,o.prevZ=null,Tb(o)}function Tb(r){let t,n=1;do{let a=r,o;r=null;let c=null;for(t=0;a;){t++;let u=a,f=0;for(let d=0;d<n&&(f++,u=u.nextZ,!!u);d++);let p=n;for(;f>0||p>0&&u;)f!==0&&(p===0||!u||a.z<=u.z)?(o=a,a=a.nextZ,f--):(o=u,u=u.nextZ,p--),c?c.nextZ=o:r=o,o.prevZ=c,c=o;a=u}c.nextZ=null,n*=2}while(t>1);return r}function Fp(r,t,n,a,o){return r=(r-n)*o|0,t=(t-a)*o|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function Ab(r){let t=r,n=r;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==r);return n}function lx(r,t,n,a,o,c,u,f){return(o-u)*(t-f)>=(r-u)*(c-f)&&(r-u)*(a-f)>=(n-u)*(t-f)&&(n-u)*(c-f)>=(o-u)*(a-f)}function fl(r,t,n,a,o,c,u,f){return!(r===u&&t===f)&&lx(r,t,n,a,o,c,u,f)}function Cb(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!Rb(r,t)&&(bl(r,t)&&bl(t,r)&&wb(r,t)&&(nn(r.prev,r,t.prev)||nn(r,t.prev,t))||eo(r,t)&&nn(r.prev,r,r.next)>0&&nn(t.prev,t,t.next)>0)}function nn(r,t,n){return(t.y-r.y)*(n.x-t.x)-(t.x-r.x)*(n.y-t.y)}function eo(r,t){return r.x===t.x&&r.y===t.y}function cx(r,t,n,a){const o=uu(nn(r,t,n)),c=uu(nn(r,t,a)),u=uu(nn(n,a,r)),f=uu(nn(n,a,t));return!!(o!==c&&u!==f||o===0&&cu(r,n,t)||c===0&&cu(r,a,t)||u===0&&cu(n,r,a)||f===0&&cu(n,t,a))}function cu(r,t,n){return t.x<=Math.max(r.x,n.x)&&t.x>=Math.min(r.x,n.x)&&t.y<=Math.max(r.y,n.y)&&t.y>=Math.min(r.y,n.y)}function uu(r){return r>0?1:r<0?-1:0}function Rb(r,t){let n=r;do{if(n.i!==r.i&&n.next.i!==r.i&&n.i!==t.i&&n.next.i!==t.i&&cx(n,n.next,r,t))return!0;n=n.next}while(n!==r);return!1}function bl(r,t){return nn(r.prev,r,r.next)<0?nn(r,t,r.next)>=0&&nn(r,r.prev,t)>=0:nn(r,t,r.prev)<0||nn(r,r.next,t)<0}function wb(r,t){let n=r,a=!1;const o=(r.x+t.x)/2,c=(r.y+t.y)/2;do n.y>c!=n.next.y>c&&n.next.y!==n.y&&o<(n.next.x-n.x)*(c-n.y)/(n.next.y-n.y)+n.x&&(a=!a),n=n.next;while(n!==r);return a}function ux(r,t){const n=Ip(r.i,r.x,r.y),a=Ip(t.i,t.x,t.y),o=r.next,c=t.prev;return r.next=t,t.prev=r,n.next=o,o.prev=n,a.next=n,n.prev=a,c.next=a,a.prev=c,a}function B_(r,t,n,a){const o=Ip(r,t,n);return a?(o.next=a.next,o.prev=a,a.next.prev=o,a.next=o):(o.prev=o,o.next=o),o}function El(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Ip(r,t,n){return{i:r,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Db(r,t,n,a){let o=0;for(let c=t,u=n-a;c<n;c+=a)o+=(r[u]-r[c])*(r[c+1]+r[u+1]),u=c;return o}class Ub{static triangulate(t,n,a=2){return pb(t,n,a)}}class ml{static area(t){const n=t.length;let a=0;for(let o=n-1,c=0;c<n;o=c++)a+=t[o].x*t[c].y-t[c].x*t[o].y;return a*.5}static isClockWise(t){return ml.area(t)<0}static triangulateShape(t,n){const a=[],o=[],c=[];H_(t),G_(a,t);let u=t.length;n.forEach(H_);for(let p=0;p<n.length;p++)o.push(u),u+=n[p].length,G_(a,n[p]);const f=Ub.triangulate(a,o);for(let p=0;p<f.length;p+=3)c.push(f.slice(p,p+3));return c}}function H_(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function G_(r,t){for(let n=0;n<t.length;n++)r.push(t[n].x),r.push(t[n].y)}class Hu extends hm{constructor(t=1,n=0){const a=(1+Math.sqrt(5))/2,o=[-1,a,0,1,a,0,-1,-a,0,1,-a,0,0,-1,a,0,1,a,0,-1,-a,0,1,-a,a,0,-1,a,0,1,-a,0,-1,-a,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,c,t,n),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new Hu(t.radius,t.detail)}}class Ws extends an{constructor(t=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:o};const c=t/2,u=n/2,f=Math.floor(a),p=Math.floor(o),d=f+1,g=p+1,_=t/f,v=n/p,y=[],E=[],R=[],S=[];for(let x=0;x<g;x++){const T=x*v-u;for(let M=0;M<d;M++){const A=M*_-c;E.push(A,-T,0),R.push(0,0,1),S.push(M/f),S.push(1-x/p)}}for(let x=0;x<p;x++)for(let T=0;T<f;T++){const M=T+d*x,A=T+d*(x+1),N=T+1+d*(x+1),L=T+1+d*x;y.push(M,A,L),y.push(A,N,L)}this.setIndex(y),this.setAttribute("position",new Te(E,3)),this.setAttribute("normal",new Te(R,3)),this.setAttribute("uv",new Te(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ws(t.width,t.height,t.widthSegments,t.heightSegments)}}class no extends an{constructor(t=new Sl([new Rt(0,.5),new Rt(-.5,-.5),new Rt(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:n};const a=[],o=[],c=[],u=[];let f=0,p=0;if(Array.isArray(t)===!1)d(t);else for(let g=0;g<t.length;g++)d(t[g]),this.addGroup(f,p,g),f+=p,p=0;this.setIndex(a),this.setAttribute("position",new Te(o,3)),this.setAttribute("normal",new Te(c,3)),this.setAttribute("uv",new Te(u,2));function d(g){const _=o.length/3,v=g.extractPoints(n);let y=v.shape;const E=v.holes;ml.isClockWise(y)===!1&&(y=y.reverse());for(let S=0,x=E.length;S<x;S++){const T=E[S];ml.isClockWise(T)===!0&&(E[S]=T.reverse())}const R=ml.triangulateShape(y,E);for(let S=0,x=E.length;S<x;S++){const T=E[S];y=y.concat(T)}for(let S=0,x=y.length;S<x;S++){const T=y[S];o.push(T.x,T.y,0),c.push(0,0,1),u.push(T.x,T.y)}for(let S=0,x=R.length;S<x;S++){const T=R[S],M=T[0]+_,A=T[1]+_,N=T[2]+_;a.push(M,A,N),p+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),n=this.parameters.shapes;return Nb(n,t)}static fromJSON(t,n){const a=[];for(let o=0,c=t.shapes.length;o<c;o++){const u=n[t.shapes[o]];a.push(u)}return new no(a,t.curveSegments)}}function Nb(r,t){if(t.shapes=[],Array.isArray(r))for(let n=0,a=r.length;n<a;n++){const o=r[n];t.shapes.push(o.uuid)}else t.shapes.push(r.uuid);return t}class gm extends an{constructor(t=1,n=32,a=16,o=0,c=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:a,phiStart:o,phiLength:c,thetaStart:u,thetaLength:f},n=Math.max(3,Math.floor(n)),a=Math.max(2,Math.floor(a));const p=Math.min(u+f,Math.PI);let d=0;const g=[],_=new W,v=new W,y=[],E=[],R=[],S=[];for(let x=0;x<=a;x++){const T=[],M=x/a;let A=0;x===0&&u===0?A=.5/n:x===a&&p===Math.PI&&(A=-.5/n);for(let N=0;N<=n;N++){const L=N/n;_.x=-t*Math.cos(o+L*c)*Math.sin(u+M*f),_.y=t*Math.cos(u+M*f),_.z=t*Math.sin(o+L*c)*Math.sin(u+M*f),E.push(_.x,_.y,_.z),v.copy(_).normalize(),R.push(v.x,v.y,v.z),S.push(L+A,1-M),T.push(d++)}g.push(T)}for(let x=0;x<a;x++)for(let T=0;T<n;T++){const M=g[x][T+1],A=g[x][T],N=g[x+1][T],L=g[x+1][T+1];(x!==0||u>0)&&y.push(M,A,L),(x!==a-1||p<Math.PI)&&y.push(A,N,L)}this.setIndex(y),this.setAttribute("position",new Te(E,3)),this.setAttribute("normal",new Te(R,3)),this.setAttribute("uv",new Te(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gm(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class io extends an{constructor(t=1,n=.4,a=12,o=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:a,tubularSegments:o,arc:c},a=Math.floor(a),o=Math.floor(o);const u=[],f=[],p=[],d=[],g=new W,_=new W,v=new W;for(let y=0;y<=a;y++)for(let E=0;E<=o;E++){const R=E/o*c,S=y/a*Math.PI*2;_.x=(t+n*Math.cos(S))*Math.cos(R),_.y=(t+n*Math.cos(S))*Math.sin(R),_.z=n*Math.sin(S),f.push(_.x,_.y,_.z),g.x=t*Math.cos(R),g.y=t*Math.sin(R),v.subVectors(_,g).normalize(),p.push(v.x,v.y,v.z),d.push(E/o),d.push(y/a)}for(let y=1;y<=a;y++)for(let E=1;E<=o;E++){const R=(o+1)*y+E-1,S=(o+1)*(y-1)+E-1,x=(o+1)*(y-1)+E,T=(o+1)*y+E;u.push(R,S,T),u.push(S,x,T)}this.setIndex(u),this.setAttribute("position",new Te(f,3)),this.setAttribute("normal",new Te(p,3)),this.setAttribute("uv",new Te(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new io(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Gu extends an{constructor(t=new sx(new W(-1,-1,0),new W(-1,1,0),new W(1,1,0)),n=64,a=1,o=8,c=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:n,radius:a,radialSegments:o,closed:c};const u=t.computeFrenetFrames(n,c);this.tangents=u.tangents,this.normals=u.normals,this.binormals=u.binormals;const f=new W,p=new W,d=new Rt;let g=new W;const _=[],v=[],y=[],E=[];R(),this.setIndex(E),this.setAttribute("position",new Te(_,3)),this.setAttribute("normal",new Te(v,3)),this.setAttribute("uv",new Te(y,2));function R(){for(let M=0;M<n;M++)S(M);S(c===!1?n:0),T(),x()}function S(M){g=t.getPointAt(M/n,g);const A=u.normals[M],N=u.binormals[M];for(let L=0;L<=o;L++){const U=L/o*Math.PI*2,z=Math.sin(U),C=-Math.cos(U);p.x=C*A.x+z*N.x,p.y=C*A.y+z*N.y,p.z=C*A.z+z*N.z,p.normalize(),v.push(p.x,p.y,p.z),f.x=g.x+a*p.x,f.y=g.y+a*p.y,f.z=g.z+a*p.z,_.push(f.x,f.y,f.z)}}function x(){for(let M=1;M<=n;M++)for(let A=1;A<=o;A++){const N=(o+1)*(M-1)+(A-1),L=(o+1)*M+(A-1),U=(o+1)*M+A,z=(o+1)*(M-1)+A;E.push(N,L,z),E.push(L,U,z)}}function T(){for(let M=0;M<=n;M++)for(let A=0;A<=o;A++)d.x=M/n,d.y=A/o,y.push(d.x,d.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Gu(new zp[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class fx extends Bn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class _m extends ro{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vv,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new na,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Lb extends _m{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Rt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return re(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Ob extends ro{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_M,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Pb extends ro{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class hx extends An{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ie(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class dx extends hx{constructor(t,n,a){super(t,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ie(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}toJSON(t){const n=super.toJSON(t);return n.object.groundColor=this.groundColor.getHex(),n}}const Dd=new tn,V_=new W,k_=new W;class zb{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.mapType=gi,this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new um,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new ln(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,a=this.matrix;V_.setFromMatrixPosition(t.matrixWorld),n.position.copy(V_),k_.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(k_),n.updateMatrixWorld(),Dd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dd,n.coordinateSystem,n.reversedDepth),n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(Dd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Vu extends Kv{constructor(t=-1,n=1,a=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-t,u=a+t,f=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,u=c+d*this.view.width,f-=g*this.view.offsetY,p=f-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Fb extends zb{constructor(){super(new Vu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bp extends hx{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.shadow=new Fb}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class Ib extends Ui{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Bb{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}class X_{constructor(t=1,n=0,a=0){this.radius=t,this.phi=n,this.theta=a}set(t,n,a){return this.radius=t,this.phi=n,this.theta=a,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=re(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,a){return this.radius=Math.sqrt(t*t+n*n+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,a),this.phi=Math.acos(re(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const W_=new W,fu=new W,Gr=new W,Vr=new W,Ud=new W,Hb=new W,Gb=new W;class Vb{constructor(t=new W,n=new W){this.start=t,this.end=n}set(t,n){return this.start.copy(t),this.end.copy(n),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,n){return this.delta(n).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,n){W_.subVectors(t,this.start),fu.subVectors(this.end,this.start);const a=fu.dot(fu);let c=fu.dot(W_)/a;return n&&(c=re(c,0,1)),c}closestPointToPoint(t,n,a){const o=this.closestPointToPointParameter(t,n);return this.delta(a).multiplyScalar(o).add(this.start)}distanceSqToLine3(t,n=Hb,a=Gb){const o=10000000000000001e-32;let c,u;const f=this.start,p=t.start,d=this.end,g=t.end;Gr.subVectors(d,f),Vr.subVectors(g,p),Ud.subVectors(f,p);const _=Gr.dot(Gr),v=Vr.dot(Vr),y=Vr.dot(Ud);if(_<=o&&v<=o)return n.copy(f),a.copy(p),n.sub(a),n.dot(n);if(_<=o)c=0,u=y/v,u=re(u,0,1);else{const E=Gr.dot(Ud);if(v<=o)u=0,c=re(-E/_,0,1);else{const R=Gr.dot(Vr),S=_*v-R*R;S!==0?c=re((R*y-E*v)/S,0,1):c=0,u=(R*c+y)/v,u<0?(u=0,c=re(-E/_,0,1)):u>1&&(u=1,c=re((R-E)/_,0,1))}}return n.copy(f).add(Gr.multiplyScalar(c)),a.copy(p).add(Vr.multiplyScalar(u)),n.sub(a),n.dot(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class kb extends Xs{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){se("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Y_(r,t,n,a){const o=Xb(a);switch(n){case Bv:return r*t;case Gv:return r*t/o.components*o.byteLength;case nm:return r*t/o.components*o.byteLength;case Jr:return r*t*2/o.components*o.byteLength;case im:return r*t*2/o.components*o.byteLength;case Hv:return r*t*3/o.components*o.byteLength;case Li:return r*t*4/o.components*o.byteLength;case am:return r*t*4/o.components*o.byteLength;case Mu:case bu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Eu:case Tu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ip:case sp:return Math.max(r,16)*Math.max(t,8)/4;case np:case ap:return Math.max(r,8)*Math.max(t,8)/2;case rp:case op:case cp:case up:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case lp:case fp:case hp:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case dp:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case pp:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case mp:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case gp:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case _p:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case vp:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case xp:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case yp:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Sp:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Mp:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case bp:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Ep:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Tp:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Ap:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Cp:case Rp:case wp:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Dp:case Up:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Np:case Lp:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Xb(r){switch(r){case gi:case Pv:return{byteLength:1,components:1};case gl:case zv:case _i:return{byteLength:2,components:1};case tm:case em:return{byteLength:2,components:4};case ea:case $p:case Qi:return{byteLength:4,components:1};case Fv:case Iv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yp}}));typeof window<"u"&&(window.__THREE__?se("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yp);function px(){let r=null,t=!1,n=null,a=null;function o(c,u){n(c,u),a=r.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&(a=r.requestAnimationFrame(o),t=!0)},stop:function(){r.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function Wb(r){const t=new WeakMap;function n(f,p){const d=f.array,g=f.usage,_=d.byteLength,v=r.createBuffer();r.bindBuffer(p,v),r.bufferData(p,d,g),f.onUploadCallback();let y;if(d instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)y=r.HALF_FLOAT;else if(d instanceof Uint16Array)f.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=r.SHORT;else if(d instanceof Uint32Array)y=r.UNSIGNED_INT;else if(d instanceof Int32Array)y=r.INT;else if(d instanceof Int8Array)y=r.BYTE;else if(d instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:f.version,size:_}}function a(f,p,d){const g=p.array,_=p.updateRanges;if(r.bindBuffer(d,f),_.length===0)r.bufferSubData(d,0,g);else{_.sort((y,E)=>y.start-E.start);let v=0;for(let y=1;y<_.length;y++){const E=_[v],R=_[y];R.start<=E.start+E.count+1?E.count=Math.max(E.count,R.start+R.count-E.start):(++v,_[v]=R)}_.length=v+1;for(let y=0,E=_.length;y<E;y++){const R=_[y];r.bufferSubData(d,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=t.get(f);p&&(r.deleteBuffer(p.buffer),t.delete(f))}function u(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=t.get(f);(!g||g.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const d=t.get(f);if(d===void 0)t.set(f,n(f,p));else if(d.version<f.version){if(d.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,f,p),d.version=f.version}}return{get:o,remove:c,update:u}}var Yb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qb=`#ifdef USE_ALPHAHASH
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
#endif`,jb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jb=`#ifdef USE_AOMAP
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
#endif`,$b=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tE=`#ifdef USE_BATCHING
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
#endif`,eE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,aE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sE=`#ifdef USE_IRIDESCENCE
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
#endif`,rE=`#ifdef USE_BUMPMAP
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
#endif`,oE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,mE=`#define PI 3.141592653589793
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
} // validated`,gE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_E=`vec3 transformedNormal = objectNormal;
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
#endif`,vE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,SE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ME="gl_FragColor = linearToOutputTexel( gl_FragColor );",bE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,EE=`#ifdef USE_ENVMAP
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
#endif`,TE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,AE=`#ifdef USE_ENVMAP
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
#endif`,CE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,RE=`#ifdef USE_ENVMAP
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
#endif`,wE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,DE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,UE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,NE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,LE=`#ifdef USE_GRADIENTMAP
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
}`,OE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,PE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,FE=`uniform bool receiveShadow;
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
#endif`,IE=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,BE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,HE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,GE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,VE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kE=`PhysicalMaterial material;
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
#endif`,XE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
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
}`,WE=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
#endif`,YE=`#if defined( RE_IndirectDiffuse )
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
#endif`,qE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ZE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,JE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$E=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,eT=`#if defined( USE_POINTS_UV )
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
#endif`,nT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,aT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oT=`#ifdef USE_MORPHTARGETS
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
#endif`,lT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,uT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pT=`#ifdef USE_NORMALMAP
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
#endif`,mT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_T=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ST=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,MT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ET=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,TT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,AT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,CT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
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
			shadowCoord.z += shadowBias;
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
			shadowCoord.z += shadowBias;
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,RT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,DT=`float getShadowMask() {
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
}`,UT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,NT=`#ifdef USE_SKINNING
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
#endif`,LT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,OT=`#ifdef USE_SKINNING
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
#endif`,PT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,FT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,IT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,BT=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,HT=`#ifdef USE_TRANSMISSION
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
#endif`,GT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,VT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const WT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,YT=`uniform sampler2D t2D;
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
}`,qT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ZT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QT=`#include <common>
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
}`,JT=`#if DEPTH_PACKING == 3200
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
}`,$T=`#define DISTANCE
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
}`,tA=`#define DISTANCE
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,eA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iA=`uniform float scale;
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
}`,aA=`uniform vec3 diffuse;
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
}`,sA=`#include <common>
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
}`,rA=`uniform vec3 diffuse;
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
}`,oA=`#define LAMBERT
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
}`,lA=`#define LAMBERT
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
}`,cA=`#define MATCAP
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
}`,uA=`#define MATCAP
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
}`,fA=`#define NORMAL
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
}`,hA=`#define NORMAL
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
}`,dA=`#define PHONG
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
}`,pA=`#define PHONG
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
}`,mA=`#define STANDARD
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
}`,gA=`#define STANDARD
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
}`,_A=`#define TOON
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
}`,vA=`#define TOON
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
}`,xA=`uniform float size;
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
}`,yA=`uniform vec3 diffuse;
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
}`,SA=`#include <common>
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
}`,MA=`uniform vec3 color;
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
}`,bA=`uniform float rotation;
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
}`,EA=`uniform vec3 diffuse;
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
}`,ge={alphahash_fragment:Yb,alphahash_pars_fragment:qb,alphamap_fragment:jb,alphamap_pars_fragment:Zb,alphatest_fragment:Kb,alphatest_pars_fragment:Qb,aomap_fragment:Jb,aomap_pars_fragment:$b,batching_pars_vertex:tE,batching_vertex:eE,begin_vertex:nE,beginnormal_vertex:iE,bsdfs:aE,iridescence_fragment:sE,bumpmap_pars_fragment:rE,clipping_planes_fragment:oE,clipping_planes_pars_fragment:lE,clipping_planes_pars_vertex:cE,clipping_planes_vertex:uE,color_fragment:fE,color_pars_fragment:hE,color_pars_vertex:dE,color_vertex:pE,common:mE,cube_uv_reflection_fragment:gE,defaultnormal_vertex:_E,displacementmap_pars_vertex:vE,displacementmap_vertex:xE,emissivemap_fragment:yE,emissivemap_pars_fragment:SE,colorspace_fragment:ME,colorspace_pars_fragment:bE,envmap_fragment:EE,envmap_common_pars_fragment:TE,envmap_pars_fragment:AE,envmap_pars_vertex:CE,envmap_physical_pars_fragment:IE,envmap_vertex:RE,fog_vertex:wE,fog_pars_vertex:DE,fog_fragment:UE,fog_pars_fragment:NE,gradientmap_pars_fragment:LE,lightmap_pars_fragment:OE,lights_lambert_fragment:PE,lights_lambert_pars_fragment:zE,lights_pars_begin:FE,lights_toon_fragment:BE,lights_toon_pars_fragment:HE,lights_phong_fragment:GE,lights_phong_pars_fragment:VE,lights_physical_fragment:kE,lights_physical_pars_fragment:XE,lights_fragment_begin:WE,lights_fragment_maps:YE,lights_fragment_end:qE,logdepthbuf_fragment:jE,logdepthbuf_pars_fragment:ZE,logdepthbuf_pars_vertex:KE,logdepthbuf_vertex:QE,map_fragment:JE,map_pars_fragment:$E,map_particle_fragment:tT,map_particle_pars_fragment:eT,metalnessmap_fragment:nT,metalnessmap_pars_fragment:iT,morphinstance_vertex:aT,morphcolor_vertex:sT,morphnormal_vertex:rT,morphtarget_pars_vertex:oT,morphtarget_vertex:lT,normal_fragment_begin:cT,normal_fragment_maps:uT,normal_pars_fragment:fT,normal_pars_vertex:hT,normal_vertex:dT,normalmap_pars_fragment:pT,clearcoat_normal_fragment_begin:mT,clearcoat_normal_fragment_maps:gT,clearcoat_pars_fragment:_T,iridescence_pars_fragment:vT,opaque_fragment:xT,packing:yT,premultiplied_alpha_fragment:ST,project_vertex:MT,dithering_fragment:bT,dithering_pars_fragment:ET,roughnessmap_fragment:TT,roughnessmap_pars_fragment:AT,shadowmap_pars_fragment:CT,shadowmap_pars_vertex:RT,shadowmap_vertex:wT,shadowmask_pars_fragment:DT,skinbase_vertex:UT,skinning_pars_vertex:NT,skinning_vertex:LT,skinnormal_vertex:OT,specularmap_fragment:PT,specularmap_pars_fragment:zT,tonemapping_fragment:FT,tonemapping_pars_fragment:IT,transmission_fragment:BT,transmission_pars_fragment:HT,uv_pars_fragment:GT,uv_pars_vertex:VT,uv_vertex:kT,worldpos_vertex:XT,background_vert:WT,background_frag:YT,backgroundCube_vert:qT,backgroundCube_frag:jT,cube_vert:ZT,cube_frag:KT,depth_vert:QT,depth_frag:JT,distance_vert:$T,distance_frag:tA,equirect_vert:eA,equirect_frag:nA,linedashed_vert:iA,linedashed_frag:aA,meshbasic_vert:sA,meshbasic_frag:rA,meshlambert_vert:oA,meshlambert_frag:lA,meshmatcap_vert:cA,meshmatcap_frag:uA,meshnormal_vert:fA,meshnormal_frag:hA,meshphong_vert:dA,meshphong_frag:pA,meshphysical_vert:mA,meshphysical_frag:gA,meshtoon_vert:_A,meshtoon_frag:vA,points_vert:xA,points_frag:yA,shadow_vert:SA,shadow_frag:MA,sprite_vert:bA,sprite_frag:EA},zt={common:{diffuse:{value:new ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new ie(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},Ki={basic:{uniforms:Wn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:Wn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new ie(0)}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:Wn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new ie(0)},specular:{value:new ie(1118481)},shininess:{value:30}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:Wn([zt.common,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.roughnessmap,zt.metalnessmap,zt.fog,zt.lights,{emissive:{value:new ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:Wn([zt.common,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.gradientmap,zt.fog,zt.lights,{emissive:{value:new ie(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:Wn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:Wn([zt.points,zt.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:Wn([zt.common,zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:Wn([zt.common,zt.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:Wn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:Wn([zt.sprite,zt.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distance:{uniforms:Wn([zt.common,zt.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distance_vert,fragmentShader:ge.distance_frag},shadow:{uniforms:Wn([zt.lights,zt.fog,{color:{value:new ie(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};Ki.physical={uniforms:Wn([Ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new ie(0)},specularColor:{value:new ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};const hu={r:0,b:0,g:0},Ps=new na,TA=new tn;function AA(r,t,n,a,o,c,u){const f=new ie(0);let p=c===!0?0:1,d,g,_=null,v=0,y=null;function E(M){let A=M.isScene===!0?M.background:null;return A&&A.isTexture&&(A=(M.backgroundBlurriness>0?n:t).get(A)),A}function R(M){let A=!1;const N=E(M);N===null?x(f,p):N&&N.isColor&&(x(N,1),A=!0);const L=r.xr.getEnvironmentBlendMode();L==="additive"?a.buffers.color.setClear(0,0,0,1,u):L==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(r.autoClear||A)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(M,A){const N=E(A);N&&(N.isCubeTexture||N.mapping===Fu)?(g===void 0&&(g=new vi(new Rl(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:to(Ki.backgroundCube.uniforms),vertexShader:Ki.backgroundCube.vertexShader,fragmentShader:Ki.backgroundCube.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(L,U,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),Ps.copy(A.backgroundRotation),Ps.x*=-1,Ps.y*=-1,Ps.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Ps.y*=-1,Ps.z*=-1),g.material.uniforms.envMap.value=N,g.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(TA.makeRotationFromEuler(Ps)),g.material.toneMapped=Ee.getTransfer(N.colorSpace)!==Fe,(_!==N||v!==N.version||y!==r.toneMapping)&&(g.material.needsUpdate=!0,_=N,v=N.version,y=r.toneMapping),g.layers.enableAll(),M.unshift(g,g.geometry,g.material,0,0,null)):N&&N.isTexture&&(d===void 0&&(d=new vi(new Ws(2,2),new Bn({name:"BackgroundMaterial",uniforms:to(Ki.background.uniforms),vertexShader:Ki.background.vertexShader,fragmentShader:Ki.background.fragmentShader,side:hs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(d)),d.material.uniforms.t2D.value=N,d.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,d.material.toneMapped=Ee.getTransfer(N.colorSpace)!==Fe,N.matrixAutoUpdate===!0&&N.updateMatrix(),d.material.uniforms.uvTransform.value.copy(N.matrix),(_!==N||v!==N.version||y!==r.toneMapping)&&(d.material.needsUpdate=!0,_=N,v=N.version,y=r.toneMapping),d.layers.enableAll(),M.unshift(d,d.geometry,d.material,0,0,null))}function x(M,A){M.getRGB(hu,Zv(r)),a.buffers.color.setClear(hu.r,hu.g,hu.b,A,u)}function T(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return f},setClearColor:function(M,A=1){f.set(M),p=A,x(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(M){p=M,x(f,p)},render:R,addToRenderList:S,dispose:T}}function CA(r,t){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},o=v(null);let c=o,u=!1;function f(w,I,k,X,q){let G=!1;const F=_(X,k,I);c!==F&&(c=F,d(c.object)),G=y(w,X,k,q),G&&E(w,X,k,q),q!==null&&t.update(q,r.ELEMENT_ARRAY_BUFFER),(G||u)&&(u=!1,A(w,I,k,X),q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function p(){return r.createVertexArray()}function d(w){return r.bindVertexArray(w)}function g(w){return r.deleteVertexArray(w)}function _(w,I,k){const X=k.wireframe===!0;let q=a[w.id];q===void 0&&(q={},a[w.id]=q);let G=q[I.id];G===void 0&&(G={},q[I.id]=G);let F=G[X];return F===void 0&&(F=v(p()),G[X]=F),F}function v(w){const I=[],k=[],X=[];for(let q=0;q<n;q++)I[q]=0,k[q]=0,X[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:k,attributeDivisors:X,object:w,attributes:{},index:null}}function y(w,I,k,X){const q=c.attributes,G=I.attributes;let F=0;const V=k.getAttributes();for(const Q in V)if(V[Q].location>=0){const dt=q[Q];let B=G[Q];if(B===void 0&&(Q==="instanceMatrix"&&w.instanceMatrix&&(B=w.instanceMatrix),Q==="instanceColor"&&w.instanceColor&&(B=w.instanceColor)),dt===void 0||dt.attribute!==B||B&&dt.data!==B.data)return!0;F++}return c.attributesNum!==F||c.index!==X}function E(w,I,k,X){const q={},G=I.attributes;let F=0;const V=k.getAttributes();for(const Q in V)if(V[Q].location>=0){let dt=G[Q];dt===void 0&&(Q==="instanceMatrix"&&w.instanceMatrix&&(dt=w.instanceMatrix),Q==="instanceColor"&&w.instanceColor&&(dt=w.instanceColor));const B={};B.attribute=dt,dt&&dt.data&&(B.data=dt.data),q[Q]=B,F++}c.attributes=q,c.attributesNum=F,c.index=X}function R(){const w=c.newAttributes;for(let I=0,k=w.length;I<k;I++)w[I]=0}function S(w){x(w,0)}function x(w,I){const k=c.newAttributes,X=c.enabledAttributes,q=c.attributeDivisors;k[w]=1,X[w]===0&&(r.enableVertexAttribArray(w),X[w]=1),q[w]!==I&&(r.vertexAttribDivisor(w,I),q[w]=I)}function T(){const w=c.newAttributes,I=c.enabledAttributes;for(let k=0,X=I.length;k<X;k++)I[k]!==w[k]&&(r.disableVertexAttribArray(k),I[k]=0)}function M(w,I,k,X,q,G,F){F===!0?r.vertexAttribIPointer(w,I,k,q,G):r.vertexAttribPointer(w,I,k,X,q,G)}function A(w,I,k,X){R();const q=X.attributes,G=k.getAttributes(),F=I.defaultAttributeValues;for(const V in G){const Q=G[V];if(Q.location>=0){let pt=q[V];if(pt===void 0&&(V==="instanceMatrix"&&w.instanceMatrix&&(pt=w.instanceMatrix),V==="instanceColor"&&w.instanceColor&&(pt=w.instanceColor)),pt!==void 0){const dt=pt.normalized,B=pt.itemSize,et=t.get(pt);if(et===void 0)continue;const ft=et.buffer,bt=et.type,Ot=et.bytesPerElement,it=bt===r.INT||bt===r.UNSIGNED_INT||pt.gpuType===$p;if(pt.isInterleavedBufferAttribute){const ut=pt.data,Ct=ut.stride,Gt=pt.offset;if(ut.isInstancedInterleavedBuffer){for(let Bt=0;Bt<Q.locationSize;Bt++)x(Q.location+Bt,ut.meshPerAttribute);w.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Bt=0;Bt<Q.locationSize;Bt++)S(Q.location+Bt);r.bindBuffer(r.ARRAY_BUFFER,ft);for(let Bt=0;Bt<Q.locationSize;Bt++)M(Q.location+Bt,B/Q.locationSize,bt,dt,Ct*Ot,(Gt+B/Q.locationSize*Bt)*Ot,it)}else{if(pt.isInstancedBufferAttribute){for(let ut=0;ut<Q.locationSize;ut++)x(Q.location+ut,pt.meshPerAttribute);w.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let ut=0;ut<Q.locationSize;ut++)S(Q.location+ut);r.bindBuffer(r.ARRAY_BUFFER,ft);for(let ut=0;ut<Q.locationSize;ut++)M(Q.location+ut,B/Q.locationSize,bt,dt,B*Ot,B/Q.locationSize*ut*Ot,it)}}else if(F!==void 0){const dt=F[V];if(dt!==void 0)switch(dt.length){case 2:r.vertexAttrib2fv(Q.location,dt);break;case 3:r.vertexAttrib3fv(Q.location,dt);break;case 4:r.vertexAttrib4fv(Q.location,dt);break;default:r.vertexAttrib1fv(Q.location,dt)}}}}T()}function N(){z();for(const w in a){const I=a[w];for(const k in I){const X=I[k];for(const q in X)g(X[q].object),delete X[q];delete I[k]}delete a[w]}}function L(w){if(a[w.id]===void 0)return;const I=a[w.id];for(const k in I){const X=I[k];for(const q in X)g(X[q].object),delete X[q];delete I[k]}delete a[w.id]}function U(w){for(const I in a){const k=a[I];if(k[w.id]===void 0)continue;const X=k[w.id];for(const q in X)g(X[q].object),delete X[q];delete k[w.id]}}function z(){C(),u=!0,c!==o&&(c=o,d(c.object))}function C(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:z,resetDefaultState:C,dispose:N,releaseStatesOfGeometry:L,releaseStatesOfProgram:U,initAttributes:R,enableAttribute:S,disableUnusedAttributes:T}}function RA(r,t,n){let a;function o(d){a=d}function c(d,g){r.drawArrays(a,d,g),n.update(g,a,1)}function u(d,g,_){_!==0&&(r.drawArraysInstanced(a,d,g,_),n.update(g,a,_))}function f(d,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,d,0,g,0,_);let y=0;for(let E=0;E<_;E++)y+=g[E];n.update(y,a,1)}function p(d,g,_,v){if(_===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<d.length;E++)u(d[E],g[E],v[E]);else{y.multiDrawArraysInstancedWEBGL(a,d,0,g,0,v,0,_);let E=0;for(let R=0;R<_;R++)E+=g[R]*v[R];n.update(E,a,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function wA(r,t,n,a){let o;function c(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const U=t.get("EXT_texture_filter_anisotropic");o=r.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(U){return!(U!==Li&&a.convert(U)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(U){const z=U===_i&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(U!==gi&&a.convert(U)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Qi&&!z)}function p(U){if(U==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const g=p(d);g!==d&&(se("WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const _=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),T=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),A=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),N=r.getParameter(r.MAX_SAMPLES),L=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:f,precision:d,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:E,maxTextureSize:R,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:T,maxVaryings:M,maxFragmentUniforms:A,maxSamples:N,samples:L}}function DA(r){const t=this;let n=null,a=0,o=!1,c=!1;const u=new Ra,f=new pe,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const y=_.length!==0||v||a!==0||o;return o=v,a=_.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){n=g(_,v,0)},this.setState=function(_,v,y){const E=_.clippingPlanes,R=_.clipIntersection,S=_.clipShadows,x=r.get(_);if(!o||E===null||E.length===0||c&&!S)c?g(null):d();else{const T=c?0:a,M=T*4;let A=x.clippingState||null;p.value=A,A=g(E,v,M,y);for(let N=0;N!==M;++N)A[N]=n[N];x.clippingState=A,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=T}};function d(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function g(_,v,y,E){const R=_!==null?_.length:0;let S=null;if(R!==0){if(S=p.value,E!==!0||S===null){const x=y+R*4,T=v.matrixWorldInverse;f.getNormalMatrix(T),(S===null||S.length<x)&&(S=new Float32Array(x));for(let M=0,A=y;M!==R;++M,A+=4)u.copy(_[M]).applyMatrix4(T,f),u.normal.toArray(S,A),S[A+3]=u.constant}p.value=S,p.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,S}}function UA(r){let t=new WeakMap;function n(u,f){return f===$d?u.mapping=Gs:f===tp&&(u.mapping=Qr),u}function a(u){if(u&&u.isTexture){const f=u.mapping;if(f===$d||f===tp)if(t.has(u)){const p=t.get(u).texture;return n(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const d=new Jv(p.height);return d.fromEquirectangularTexture(r,u),t.set(u,d),u.addEventListener("dispose",o),n(d.texture,u.mapping)}else return null}}return u}function o(u){const f=u.target;f.removeEventListener("dispose",o);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function c(){t=new WeakMap}return{get:a,dispose:c}}const fs=4,q_=[.125,.215,.35,.446,.526,.582],Is=20,NA=256,cl=new Vu,j_=new ie;let Nd=null,Ld=0,Od=0,Pd=!1;const LA=new W;class Z_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,a=.1,o=100,c={}){const{size:u=256,position:f=LA}=c;Nd=this._renderer.getRenderTarget(),Ld=this._renderer.getActiveCubeFace(),Od=this._renderer.getActiveMipmapLevel(),Pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,a,o,p,f),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=J_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Q_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Nd,Ld,Od),this._renderer.xr.enabled=Pd,t.scissorTest=!1,kr(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Gs||t.mapping===Qr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Nd=this._renderer.getRenderTarget(),Ld=this._renderer.getActiveCubeFace(),Od=this._renderer.getActiveMipmapLevel(),Pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:In,minFilter:In,generateMipmaps:!1,type:_i,format:Li,colorSpace:$r,depthBuffer:!1},o=K_(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=K_(t,n,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=OA(c)),this._blurMaterial=zA(c,t,n),this._ggxMaterial=PA(c,t,n)}return o}_compileMaterial(t){const n=new vi(new an,t);this._renderer.compile(n,cl)}_sceneToCubeUV(t,n,a,o,c){const p=new Ui(90,1,n,a),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,y=_.toneMapping;_.getClearColor(j_),_.toneMapping=ta,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new vi(new Rl,new Iu({name:"PMREM.Background",side:si,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,S=R.material;let x=!1;const T=t.background;T?T.isColor&&(S.color.copy(T),t.background=null,x=!0):(S.color.copy(j_),x=!0);for(let M=0;M<6;M++){const A=M%3;A===0?(p.up.set(0,d[M],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[M],c.y,c.z)):A===1?(p.up.set(0,0,d[M]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[M],c.z)):(p.up.set(0,d[M],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[M]));const N=this._cubeSize;kr(o,A*N,M>2?N:0,N,N),_.setRenderTarget(o),x&&_.render(R,p),_.render(t,p)}_.toneMapping=y,_.autoClear=v,t.background=T}_textureToCubeUV(t,n){const a=this._renderer,o=t.mapping===Gs||t.mapping===Qr;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=J_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Q_());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const f=c.uniforms;f.envMap.value=t;const p=this._cubeSize;kr(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(u,cl)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(t,c-1,c);n.autoClear=a}_applyGGXFilter(t,n,a){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[a];f.material=u;const p=u.uniforms,d=a/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),_=Math.sqrt(d*d-g*g),v=0+d*1.25,y=_*v,{_lodMax:E}=this,R=this._sizeLods[a],S=3*R*(a>E-fs?a-E+fs:0),x=4*(this._cubeSize-R);p.envMap.value=t.texture,p.roughness.value=y,p.mipInt.value=E-n,kr(c,S,x,3*R,2*R),o.setRenderTarget(c),o.render(f,cl),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=E-a,kr(t,S,x,3*R,2*R),o.setRenderTarget(t),o.render(f,cl)}_blur(t,n,a,o,c){const u=this._pingPongRenderTarget;this._halfBlur(t,u,n,a,o,"latitudinal",c),this._halfBlur(u,t,a,a,o,"longitudinal",c)}_halfBlur(t,n,a,o,c,u,f){const p=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&De("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[o];_.material=d;const v=d.uniforms,y=this._sizeLods[a]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Is-1),R=c/E,S=isFinite(c)?1+Math.floor(g*R):Is;S>Is&&se(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Is}`);const x=[];let T=0;for(let U=0;U<Is;++U){const z=U/R,C=Math.exp(-z*z/2);x.push(C),U===0?T+=C:U<S&&(T+=2*C)}for(let U=0;U<x.length;U++)x[U]=x[U]/T;v.envMap.value=t.texture,v.samples.value=S,v.weights.value=x,v.latitudinal.value=u==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:M}=this;v.dTheta.value=E,v.mipInt.value=M-a;const A=this._sizeLods[o],N=3*A*(o>M-fs?o-M+fs:0),L=4*(this._cubeSize-A);kr(n,N,L,3*A,2*A),p.setRenderTarget(n),p.render(_,cl)}}function OA(r){const t=[],n=[],a=[];let o=r;const c=r-fs+1+q_.length;for(let u=0;u<c;u++){const f=Math.pow(2,o);t.push(f);let p=1/f;u>r-fs?p=q_[u-r+fs-1]:u===0&&(p=0),n.push(p);const d=1/(f-2),g=-d,_=1+d,v=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,E=6,R=3,S=2,x=1,T=new Float32Array(R*E*y),M=new Float32Array(S*E*y),A=new Float32Array(x*E*y);for(let L=0;L<y;L++){const U=L%3*2/3-1,z=L>2?0:-1,C=[U,z,0,U+2/3,z,0,U+2/3,z+1,0,U,z,0,U+2/3,z+1,0,U,z+1,0];T.set(C,R*E*L),M.set(v,S*E*L);const w=[L,L,L,L,L,L];A.set(w,x*E*L)}const N=new an;N.setAttribute("position",new Sn(T,R)),N.setAttribute("uv",new Sn(M,S)),N.setAttribute("faceIndex",new Sn(A,x)),a.push(new vi(N,null)),o>fs&&o--}return{lodMeshes:a,sizeLods:t,sigmas:n}}function K_(r,t,n){const a=new ri(r,t,n);return a.texture.mapping=Fu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function kr(r,t,n,a,o){r.viewport.set(t,n,a,o),r.scissor.set(t,n,a,o)}function PA(r,t,n){return new Bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:NA,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ku(),fragmentShader:`

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

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function zA(r,t,n){const a=new Float32Array(Is),o=new W(0,1,0);return new Bn({name:"SphericalGaussianBlur",defines:{n:Is,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:ku(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Q_(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ku(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function J_(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function ku(){return`

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
	`}function FA(r){let t=new WeakMap,n=null;function a(f){if(f&&f.isTexture){const p=f.mapping,d=p===$d||p===tp,g=p===Gs||p===Qr;if(d||g){let _=t.get(f);const v=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return n===null&&(n=new Z_(r)),_=d?n.fromEquirectangular(f,_):n.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,t.set(f,_),_.texture;if(_!==void 0)return _.texture;{const y=f.image;return d&&y&&y.height>0||g&&y&&o(y)?(n===null&&(n=new Z_(r)),_=d?n.fromEquirectangular(f):n.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,t.set(f,_),f.addEventListener("dispose",c),_.texture):null}}}return f}function o(f){let p=0;const d=6;for(let g=0;g<d;g++)f[g]!==void 0&&p++;return p===d}function c(f){const p=f.target;p.removeEventListener("dispose",c);const d=t.get(p);d!==void 0&&(t.delete(p),d.dispose())}function u(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:u}}function IA(r){const t={};function n(a){if(t[a]!==void 0)return t[a];const o=r.getExtension(a);return t[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&vl("WebGLRenderer: "+a+" extension not supported."),o}}}function BA(r,t,n,a){const o={},c=new WeakMap;function u(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);v.removeEventListener("dispose",u),delete o[v.id];const y=c.get(v);y&&(t.remove(y),c.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function f(_,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,n.memory.geometries++),v}function p(_){const v=_.attributes;for(const y in v)t.update(v[y],r.ARRAY_BUFFER)}function d(_){const v=[],y=_.index,E=_.attributes.position;let R=0;if(y!==null){const T=y.array;R=y.version;for(let M=0,A=T.length;M<A;M+=3){const N=T[M+0],L=T[M+1],U=T[M+2];v.push(N,L,L,U,U,N)}}else if(E!==void 0){const T=E.array;R=E.version;for(let M=0,A=T.length/3-1;M<A;M+=3){const N=M+0,L=M+1,U=M+2;v.push(N,L,L,U,U,N)}}else return;const S=new(kv(v)?jv:qv)(v,1);S.version=R;const x=c.get(_);x&&t.remove(x),c.set(_,S)}function g(_){const v=c.get(_);if(v){const y=_.index;y!==null&&v.version<y.version&&d(_)}else d(_);return c.get(_)}return{get:f,update:p,getWireframeAttribute:g}}function HA(r,t,n){let a;function o(v){a=v}let c,u;function f(v){c=v.type,u=v.bytesPerElement}function p(v,y){r.drawElements(a,y,c,v*u),n.update(y,a,1)}function d(v,y,E){E!==0&&(r.drawElementsInstanced(a,y,c,v*u,E),n.update(y,a,E))}function g(v,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,y,0,c,v,0,E);let S=0;for(let x=0;x<E;x++)S+=y[x];n.update(S,a,1)}function _(v,y,E,R){if(E===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<v.length;x++)d(v[x]/u,y[x],R[x]);else{S.multiDrawElementsInstancedWEBGL(a,y,0,c,v,0,R,0,E);let x=0;for(let T=0;T<E;T++)x+=y[T]*R[T];n.update(x,a,1)}}this.setMode=o,this.setIndex=f,this.render=p,this.renderInstances=d,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function GA(r){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,f){switch(n.calls++,u){case r.TRIANGLES:n.triangles+=f*(c/3);break;case r.LINES:n.lines+=f*(c/2);break;case r.LINE_STRIP:n.lines+=f*(c-1);break;case r.LINE_LOOP:n.lines+=f*c;break;case r.POINTS:n.points+=f*c;break;default:De("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:a}}function VA(r,t,n){const a=new WeakMap,o=new ln;function c(u,f,p){const d=u.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=g!==void 0?g.length:0;let v=a.get(f);if(v===void 0||v.count!==_){let w=function(){z.dispose(),a.delete(f),f.removeEventListener("dispose",w)};var y=w;v!==void 0&&v.texture.dispose();const E=f.morphAttributes.position!==void 0,R=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],T=f.morphAttributes.normal||[],M=f.morphAttributes.color||[];let A=0;E===!0&&(A=1),R===!0&&(A=2),S===!0&&(A=3);let N=f.attributes.position.count*A,L=1;N>t.maxTextureSize&&(L=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const U=new Float32Array(N*L*4*_),z=new Xv(U,N,L,_);z.type=Qi,z.needsUpdate=!0;const C=A*4;for(let I=0;I<_;I++){const k=x[I],X=T[I],q=M[I],G=N*L*4*I;for(let F=0;F<k.count;F++){const V=F*C;E===!0&&(o.fromBufferAttribute(k,F),U[G+V+0]=o.x,U[G+V+1]=o.y,U[G+V+2]=o.z,U[G+V+3]=0),R===!0&&(o.fromBufferAttribute(X,F),U[G+V+4]=o.x,U[G+V+5]=o.y,U[G+V+6]=o.z,U[G+V+7]=0),S===!0&&(o.fromBufferAttribute(q,F),U[G+V+8]=o.x,U[G+V+9]=o.y,U[G+V+10]=o.z,U[G+V+11]=q.itemSize===4?o.w:1)}}v={count:_,texture:z,size:new Rt(N,L)},a.set(f,v),f.addEventListener("dispose",w)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",u.morphTexture,n);else{let E=0;for(let S=0;S<d.length;S++)E+=d[S];const R=f.morphTargetsRelative?1:1-E;p.getUniforms().setValue(r,"morphTargetBaseInfluence",R),p.getUniforms().setValue(r,"morphTargetInfluences",d)}p.getUniforms().setValue(r,"morphTargetsTexture",v.texture,n),p.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:c}}function kA(r,t,n,a){let o=new WeakMap;function c(p){const d=a.render.frame,g=p.geometry,_=t.get(p,g);if(o.get(_)!==d&&(t.update(_),o.set(_,d)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),o.get(p)!==d&&(n.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,r.ARRAY_BUFFER),o.set(p,d))),p.isSkinnedMesh){const v=p.skeleton;o.get(v)!==d&&(v.update(),o.set(v,d))}return _}function u(){o=new WeakMap}function f(p){const d=p.target;d.removeEventListener("dispose",f),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:c,dispose:u}}const XA={[qp]:"LINEAR_TONE_MAPPING",[jp]:"REINHARD_TONE_MAPPING",[Zp]:"CINEON_TONE_MAPPING",[zu]:"ACES_FILMIC_TONE_MAPPING",[Qp]:"AGX_TONE_MAPPING",[Jp]:"NEUTRAL_TONE_MAPPING",[Kp]:"CUSTOM_TONE_MAPPING"};function WA(r,t,n,a,o){const c=new ri(t,n,{type:r,depthBuffer:a,stencilBuffer:o}),u=new ri(t,n,{type:_i,depthBuffer:!1,stencilBuffer:!1}),f=new an;f.setAttribute("position",new Te([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Te([0,2,0,0,2,0],2));const p=new fx({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new vi(f,p),g=new Vu(-1,1,1,-1,0,1);let _=null,v=null,y=!1,E,R=null,S=[],x=!1;this.setSize=function(T,M){c.setSize(T,M),u.setSize(T,M);for(let A=0;A<S.length;A++){const N=S[A];N.setSize&&N.setSize(T,M)}},this.setEffects=function(T){S=T,x=S.length>0&&S[0].isRenderPass===!0;const M=c.width,A=c.height;for(let N=0;N<S.length;N++){const L=S[N];L.setSize&&L.setSize(M,A)}},this.begin=function(T,M){if(y||T.toneMapping===ta&&S.length===0)return!1;if(R=M,M!==null){const A=M.width,N=M.height;(c.width!==A||c.height!==N)&&this.setSize(A,N)}return x===!1&&T.setRenderTarget(c),E=T.toneMapping,T.toneMapping=ta,!0},this.hasRenderPass=function(){return x},this.end=function(T,M){T.toneMapping=E,y=!0;let A=c,N=u;for(let L=0;L<S.length;L++){const U=S[L];if(U.enabled!==!1&&(U.render(T,N,A,M),U.needsSwap!==!1)){const z=A;A=N,N=z}}if(_!==T.outputColorSpace||v!==T.toneMapping){_=T.outputColorSpace,v=T.toneMapping,p.defines={},Ee.getTransfer(_)===Fe&&(p.defines.SRGB_TRANSFER="");const L=XA[v];L&&(p.defines[L]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=A.texture,T.setRenderTarget(R),T.render(d,g),R=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),u.dispose(),f.dispose(),p.dispose()}}const mx=new jn,Hp=new yl(1,1),gx=new Xv,_x=new OM,vx=new Qv,$_=[],tv=[],ev=new Float32Array(16),nv=new Float32Array(9),iv=new Float32Array(4);function oo(r,t,n){const a=r[0];if(a<=0||a>0)return r;const o=t*n;let c=$_[o];if(c===void 0&&(c=new Float32Array(o),$_[o]=c),t!==0){a.toArray(c,0);for(let u=1,f=0;u!==t;++u)f+=n,r[u].toArray(c,f)}return c}function Mn(r,t){if(r.length!==t.length)return!1;for(let n=0,a=r.length;n<a;n++)if(r[n]!==t[n])return!1;return!0}function bn(r,t){for(let n=0,a=t.length;n<a;n++)r[n]=t[n]}function Xu(r,t){let n=tv[t];n===void 0&&(n=new Int32Array(t),tv[t]=n);for(let a=0;a!==t;++a)n[a]=r.allocateTextureUnit();return n}function YA(r,t){const n=this.cache;n[0]!==t&&(r.uniform1f(this.addr,t),n[0]=t)}function qA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Mn(n,t))return;r.uniform2fv(this.addr,t),bn(n,t)}}function jA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Mn(n,t))return;r.uniform3fv(this.addr,t),bn(n,t)}}function ZA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Mn(n,t))return;r.uniform4fv(this.addr,t),bn(n,t)}}function KA(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(Mn(n,t))return;r.uniformMatrix2fv(this.addr,!1,t),bn(n,t)}else{if(Mn(n,a))return;iv.set(a),r.uniformMatrix2fv(this.addr,!1,iv),bn(n,a)}}function QA(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(Mn(n,t))return;r.uniformMatrix3fv(this.addr,!1,t),bn(n,t)}else{if(Mn(n,a))return;nv.set(a),r.uniformMatrix3fv(this.addr,!1,nv),bn(n,a)}}function JA(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(Mn(n,t))return;r.uniformMatrix4fv(this.addr,!1,t),bn(n,t)}else{if(Mn(n,a))return;ev.set(a),r.uniformMatrix4fv(this.addr,!1,ev),bn(n,a)}}function $A(r,t){const n=this.cache;n[0]!==t&&(r.uniform1i(this.addr,t),n[0]=t)}function t3(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Mn(n,t))return;r.uniform2iv(this.addr,t),bn(n,t)}}function e3(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Mn(n,t))return;r.uniform3iv(this.addr,t),bn(n,t)}}function n3(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Mn(n,t))return;r.uniform4iv(this.addr,t),bn(n,t)}}function i3(r,t){const n=this.cache;n[0]!==t&&(r.uniform1ui(this.addr,t),n[0]=t)}function a3(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Mn(n,t))return;r.uniform2uiv(this.addr,t),bn(n,t)}}function s3(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Mn(n,t))return;r.uniform3uiv(this.addr,t),bn(n,t)}}function r3(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Mn(n,t))return;r.uniform4uiv(this.addr,t),bn(n,t)}}function o3(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o);let c;this.type===r.SAMPLER_2D_SHADOW?(Hp.compareFunction=n.isReversedDepthBuffer()?rm:sm,c=Hp):c=mx,n.setTexture2D(t||c,o)}function l3(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(t||_x,o)}function c3(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(t||vx,o)}function u3(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(t||gx,o)}function f3(r){switch(r){case 5126:return YA;case 35664:return qA;case 35665:return jA;case 35666:return ZA;case 35674:return KA;case 35675:return QA;case 35676:return JA;case 5124:case 35670:return $A;case 35667:case 35671:return t3;case 35668:case 35672:return e3;case 35669:case 35673:return n3;case 5125:return i3;case 36294:return a3;case 36295:return s3;case 36296:return r3;case 35678:case 36198:case 36298:case 36306:case 35682:return o3;case 35679:case 36299:case 36307:return l3;case 35680:case 36300:case 36308:case 36293:return c3;case 36289:case 36303:case 36311:case 36292:return u3}}function h3(r,t){r.uniform1fv(this.addr,t)}function d3(r,t){const n=oo(t,this.size,2);r.uniform2fv(this.addr,n)}function p3(r,t){const n=oo(t,this.size,3);r.uniform3fv(this.addr,n)}function m3(r,t){const n=oo(t,this.size,4);r.uniform4fv(this.addr,n)}function g3(r,t){const n=oo(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function _3(r,t){const n=oo(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function v3(r,t){const n=oo(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function x3(r,t){r.uniform1iv(this.addr,t)}function y3(r,t){r.uniform2iv(this.addr,t)}function S3(r,t){r.uniform3iv(this.addr,t)}function M3(r,t){r.uniform4iv(this.addr,t)}function b3(r,t){r.uniform1uiv(this.addr,t)}function E3(r,t){r.uniform2uiv(this.addr,t)}function T3(r,t){r.uniform3uiv(this.addr,t)}function A3(r,t){r.uniform4uiv(this.addr,t)}function C3(r,t,n){const a=this.cache,o=t.length,c=Xu(n,o);Mn(a,c)||(r.uniform1iv(this.addr,c),bn(a,c));let u;this.type===r.SAMPLER_2D_SHADOW?u=Hp:u=mx;for(let f=0;f!==o;++f)n.setTexture2D(t[f]||u,c[f])}function R3(r,t,n){const a=this.cache,o=t.length,c=Xu(n,o);Mn(a,c)||(r.uniform1iv(this.addr,c),bn(a,c));for(let u=0;u!==o;++u)n.setTexture3D(t[u]||_x,c[u])}function w3(r,t,n){const a=this.cache,o=t.length,c=Xu(n,o);Mn(a,c)||(r.uniform1iv(this.addr,c),bn(a,c));for(let u=0;u!==o;++u)n.setTextureCube(t[u]||vx,c[u])}function D3(r,t,n){const a=this.cache,o=t.length,c=Xu(n,o);Mn(a,c)||(r.uniform1iv(this.addr,c),bn(a,c));for(let u=0;u!==o;++u)n.setTexture2DArray(t[u]||gx,c[u])}function U3(r){switch(r){case 5126:return h3;case 35664:return d3;case 35665:return p3;case 35666:return m3;case 35674:return g3;case 35675:return _3;case 35676:return v3;case 5124:case 35670:return x3;case 35667:case 35671:return y3;case 35668:case 35672:return S3;case 35669:case 35673:return M3;case 5125:return b3;case 36294:return E3;case 36295:return T3;case 36296:return A3;case 35678:case 36198:case 36298:case 36306:case 35682:return C3;case 35679:case 36299:case 36307:return R3;case 35680:case 36300:case 36308:case 36293:return w3;case 36289:case 36303:case 36311:case 36292:return D3}}class N3{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=f3(n.type)}}class L3{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=U3(n.type)}}class O3{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const f=o[c];f.setValue(t,n[f.id],a)}}}const zd=/(\w+)(\])?(\[|\.)?/g;function av(r,t){r.seq.push(t),r.map[t.id]=t}function P3(r,t,n){const a=r.name,o=a.length;for(zd.lastIndex=0;;){const c=zd.exec(a),u=zd.lastIndex;let f=c[1];const p=c[2]==="]",d=c[3];if(p&&(f=f|0),d===void 0||d==="["&&u+2===o){av(n,d===void 0?new N3(f,r,t):new L3(f,r,t));break}else{let _=n.map[f];_===void 0&&(_=new O3(f),av(n,_)),n=_}}}class Cu{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let u=0;u<a;++u){const f=t.getActiveUniform(n,u),p=t.getUniformLocation(n,f.name);P3(f,p,this)}const o=[],c=[];for(const u of this.seq)u.type===t.SAMPLER_2D_SHADOW||u.type===t.SAMPLER_CUBE_SHADOW||u.type===t.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(t,n,a,o){const c=this.map[n];c!==void 0&&c.setValue(t,a,o)}setOptional(t,n,a){const o=n[a];o!==void 0&&this.setValue(t,a,o)}static upload(t,n,a,o){for(let c=0,u=n.length;c!==u;++c){const f=n[c],p=a[f.id];p.needsUpdate!==!1&&f.setValue(t,p.value,o)}}static seqWithValue(t,n){const a=[];for(let o=0,c=t.length;o!==c;++o){const u=t[o];u.id in n&&a.push(u)}return a}}function sv(r,t,n){const a=r.createShader(t);return r.shaderSource(a,n),r.compileShader(a),a}const z3=37297;let F3=0;function I3(r,t){const n=r.split(`
`),a=[],o=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let u=o;u<c;u++){const f=u+1;a.push(`${f===t?">":" "} ${f}: ${n[u]}`)}return a.join(`
`)}const rv=new pe;function B3(r){Ee._getMatrix(rv,Ee.workingColorSpace,r);const t=`mat3( ${rv.elements.map(n=>n.toFixed(4))} )`;switch(Ee.getTransfer(r)){case Lu:return[t,"LinearTransferOETF"];case Fe:return[t,"sRGBTransferOETF"];default:return se("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function ov(r,t,n){const a=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(a&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+I3(r.getShaderSource(t),f)}else return c}function H3(r,t){const n=B3(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const G3={[qp]:"Linear",[jp]:"Reinhard",[Zp]:"Cineon",[zu]:"ACESFilmic",[Qp]:"AgX",[Jp]:"Neutral",[Kp]:"Custom"};function V3(r,t){const n=G3[t];return n===void 0?(se("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const du=new W;function k3(){Ee.getLuminanceCoefficients(du);const r=du.x.toFixed(4),t=du.y.toFixed(4),n=du.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function X3(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hl).join(`
`)}function W3(r){const t=[];for(const n in r){const a=r[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function Y3(r,t){const n={},a=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=r.getActiveAttrib(t,o),u=c.name;let f=1;c.type===r.FLOAT_MAT2&&(f=2),c.type===r.FLOAT_MAT3&&(f=3),c.type===r.FLOAT_MAT4&&(f=4),n[u]={type:c.type,location:r.getAttribLocation(t,u),locationSize:f}}return n}function hl(r){return r!==""}function lv(r,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function cv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const q3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gp(r){return r.replace(q3,Z3)}const j3=new Map;function Z3(r,t){let n=ge[t];if(n===void 0){const a=j3.get(t);if(a!==void 0)n=ge[a],se('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return Gp(n)}const K3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uv(r){return r.replace(K3,Q3)}function Q3(r,t,n,a){let o="";for(let c=parseInt(t);c<parseInt(n);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function fv(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const J3={[Su]:"SHADOWMAP_TYPE_PCF",[Wr]:"SHADOWMAP_TYPE_VSM"};function $3(r){return J3[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const t2={[Gs]:"ENVMAP_TYPE_CUBE",[Qr]:"ENVMAP_TYPE_CUBE",[Fu]:"ENVMAP_TYPE_CUBE_UV"};function e2(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":t2[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const n2={[Qr]:"ENVMAP_MODE_REFRACTION"};function i2(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":n2[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const a2={[Lv]:"ENVMAP_BLENDING_MULTIPLY",[pM]:"ENVMAP_BLENDING_MIX",[mM]:"ENVMAP_BLENDING_ADD"};function s2(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":a2[r.combine]||"ENVMAP_BLENDING_NONE"}function r2(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function o2(r,t,n,a){const o=r.getContext(),c=n.defines;let u=n.vertexShader,f=n.fragmentShader;const p=$3(n),d=e2(n),g=i2(n),_=s2(n),v=r2(n),y=X3(n),E=W3(c),R=o.createProgram();let S,x,T=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(hl).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(hl).join(`
`),x.length>0&&(x+=`
`)):(S=[fv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hl).join(`
`),x=[fv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ta?"#define TONE_MAPPING":"",n.toneMapping!==ta?ge.tonemapping_pars_fragment:"",n.toneMapping!==ta?V3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,H3("linearToOutputTexel",n.outputColorSpace),k3(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(hl).join(`
`)),u=Gp(u),u=lv(u,n),u=cv(u,n),f=Gp(f),f=lv(f,n),f=cv(f,n),u=uv(u),f=uv(f),n.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",n.glslVersion===g_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===g_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const M=T+S+u,A=T+x+f,N=sv(o,o.VERTEX_SHADER,M),L=sv(o,o.FRAGMENT_SHADER,A);o.attachShader(R,N),o.attachShader(R,L),n.index0AttributeName!==void 0?o.bindAttribLocation(R,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(R,0,"position"),o.linkProgram(R);function U(I){if(r.debug.checkShaderErrors){const k=o.getProgramInfoLog(R)||"",X=o.getShaderInfoLog(N)||"",q=o.getShaderInfoLog(L)||"",G=k.trim(),F=X.trim(),V=q.trim();let Q=!0,pt=!0;if(o.getProgramParameter(R,o.LINK_STATUS)===!1)if(Q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,R,N,L);else{const dt=ov(o,N,"vertex"),B=ov(o,L,"fragment");De("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(R,o.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+G+`
`+dt+`
`+B)}else G!==""?se("WebGLProgram: Program Info Log:",G):(F===""||V==="")&&(pt=!1);pt&&(I.diagnostics={runnable:Q,programLog:G,vertexShader:{log:F,prefix:S},fragmentShader:{log:V,prefix:x}})}o.deleteShader(N),o.deleteShader(L),z=new Cu(o,R),C=Y3(o,R)}let z;this.getUniforms=function(){return z===void 0&&U(this),z};let C;this.getAttributes=function(){return C===void 0&&U(this),C};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=o.getProgramParameter(R,z3)),w},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(R),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=F3++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=N,this.fragmentShader=L,this}let l2=0;class c2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(a),u=this._getShaderCacheForMaterial(t);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new u2(t),n.set(t,a)),a}}class u2{constructor(t){this.id=l2++,this.code=t,this.usedTimes=0}}function f2(r,t,n,a,o,c,u){const f=new Wv,p=new c2,d=new Set,g=[],_=new Map,v=o.logarithmicDepthBuffer;let y=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(C){return d.add(C),C===0?"uv":`uv${C}`}function S(C,w,I,k,X){const q=k.fog,G=X.geometry,F=C.isMeshStandardMaterial?k.environment:null,V=(C.isMeshStandardMaterial?n:t).get(C.envMap||F),Q=V&&V.mapping===Fu?V.image.height:null,pt=E[C.type];C.precision!==null&&(y=o.getMaxPrecision(C.precision),y!==C.precision&&se("WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const dt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,B=dt!==void 0?dt.length:0;let et=0;G.morphAttributes.position!==void 0&&(et=1),G.morphAttributes.normal!==void 0&&(et=2),G.morphAttributes.color!==void 0&&(et=3);let ft,bt,Ot,it;if(pt){const Ce=Ki[pt];ft=Ce.vertexShader,bt=Ce.fragmentShader}else ft=C.vertexShader,bt=C.fragmentShader,p.update(C),Ot=p.getVertexShaderID(C),it=p.getFragmentShaderID(C);const ut=r.getRenderTarget(),Ct=r.state.buffers.depth.getReversed(),Gt=X.isInstancedMesh===!0,Bt=X.isBatchedMesh===!0,le=!!C.map,Ae=!!C.matcap,me=!!V,_e=!!C.aoMap,Ue=!!C.lightMap,ue=!!C.bumpMap,sn=!!C.normalMap,j=!!C.displacementMap,Ke=!!C.emissiveMap,be=!!C.metalnessMap,Pe=!!C.roughnessMap,jt=C.anisotropy>0,H=C.clearcoat>0,D=C.dispersion>0,J=C.iridescence>0,gt=C.sheen>0,yt=C.transmission>0,ht=jt&&!!C.anisotropyMap,Kt=H&&!!C.clearcoatMap,Dt=H&&!!C.clearcoatNormalMap,Wt=H&&!!C.clearcoatRoughnessMap,ne=J&&!!C.iridescenceMap,Mt=J&&!!C.iridescenceThicknessMap,Tt=gt&&!!C.sheenColorMap,Ht=gt&&!!C.sheenRoughnessMap,Ft=!!C.specularMap,Ut=!!C.specularColorMap,he=!!C.specularIntensityMap,K=yt&&!!C.transmissionMap,Lt=yt&&!!C.thicknessMap,At=!!C.gradientMap,It=!!C.alphaMap,St=C.alphaTest>0,xt=!!C.alphaHash,wt=!!C.extensions;let ae=ta;C.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(ae=r.toneMapping);const Ie={shaderID:pt,shaderType:C.type,shaderName:C.name,vertexShader:ft,fragmentShader:bt,defines:C.defines,customVertexShaderID:Ot,customFragmentShaderID:it,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:Bt,batchingColor:Bt&&X._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&X.instanceColor!==null,instancingMorph:Gt&&X.morphTexture!==null,outputColorSpace:ut===null?r.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:$r,alphaToCoverage:!!C.alphaToCoverage,map:le,matcap:Ae,envMap:me,envMapMode:me&&V.mapping,envMapCubeUVHeight:Q,aoMap:_e,lightMap:Ue,bumpMap:ue,normalMap:sn,displacementMap:j,emissiveMap:Ke,normalMapObjectSpace:sn&&C.normalMapType===vM,normalMapTangentSpace:sn&&C.normalMapType===Vv,metalnessMap:be,roughnessMap:Pe,anisotropy:jt,anisotropyMap:ht,clearcoat:H,clearcoatMap:Kt,clearcoatNormalMap:Dt,clearcoatRoughnessMap:Wt,dispersion:D,iridescence:J,iridescenceMap:ne,iridescenceThicknessMap:Mt,sheen:gt,sheenColorMap:Tt,sheenRoughnessMap:Ht,specularMap:Ft,specularColorMap:Ut,specularIntensityMap:he,transmission:yt,transmissionMap:K,thicknessMap:Lt,gradientMap:At,opaque:C.transparent===!1&&C.blending===jr&&C.alphaToCoverage===!1,alphaMap:It,alphaTest:St,alphaHash:xt,combine:C.combine,mapUv:le&&R(C.map.channel),aoMapUv:_e&&R(C.aoMap.channel),lightMapUv:Ue&&R(C.lightMap.channel),bumpMapUv:ue&&R(C.bumpMap.channel),normalMapUv:sn&&R(C.normalMap.channel),displacementMapUv:j&&R(C.displacementMap.channel),emissiveMapUv:Ke&&R(C.emissiveMap.channel),metalnessMapUv:be&&R(C.metalnessMap.channel),roughnessMapUv:Pe&&R(C.roughnessMap.channel),anisotropyMapUv:ht&&R(C.anisotropyMap.channel),clearcoatMapUv:Kt&&R(C.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&R(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Wt&&R(C.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&R(C.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&R(C.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&R(C.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&R(C.sheenRoughnessMap.channel),specularMapUv:Ft&&R(C.specularMap.channel),specularColorMapUv:Ut&&R(C.specularColorMap.channel),specularIntensityMapUv:he&&R(C.specularIntensityMap.channel),transmissionMapUv:K&&R(C.transmissionMap.channel),thicknessMapUv:Lt&&R(C.thicknessMap.channel),alphaMapUv:It&&R(C.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(sn||jt),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!G.attributes.uv&&(le||It),fog:!!q,useFog:C.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ct,skinning:X.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:et,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:ae,decodeVideoTexture:le&&C.map.isVideoTexture===!0&&Ee.getTransfer(C.map.colorSpace)===Fe,decodeVideoTextureEmissive:Ke&&C.emissiveMap.isVideoTexture===!0&&Ee.getTransfer(C.emissiveMap.colorSpace)===Fe,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Yn,flipSided:C.side===si,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:wt&&C.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(wt&&C.extensions.multiDraw===!0||Bt)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Ie.vertexUv1s=d.has(1),Ie.vertexUv2s=d.has(2),Ie.vertexUv3s=d.has(3),d.clear(),Ie}function x(C){const w=[];if(C.shaderID?w.push(C.shaderID):(w.push(C.customVertexShaderID),w.push(C.customFragmentShaderID)),C.defines!==void 0)for(const I in C.defines)w.push(I),w.push(C.defines[I]);return C.isRawShaderMaterial===!1&&(T(w,C),M(w,C),w.push(r.outputColorSpace)),w.push(C.customProgramCacheKey),w.join()}function T(C,w){C.push(w.precision),C.push(w.outputColorSpace),C.push(w.envMapMode),C.push(w.envMapCubeUVHeight),C.push(w.mapUv),C.push(w.alphaMapUv),C.push(w.lightMapUv),C.push(w.aoMapUv),C.push(w.bumpMapUv),C.push(w.normalMapUv),C.push(w.displacementMapUv),C.push(w.emissiveMapUv),C.push(w.metalnessMapUv),C.push(w.roughnessMapUv),C.push(w.anisotropyMapUv),C.push(w.clearcoatMapUv),C.push(w.clearcoatNormalMapUv),C.push(w.clearcoatRoughnessMapUv),C.push(w.iridescenceMapUv),C.push(w.iridescenceThicknessMapUv),C.push(w.sheenColorMapUv),C.push(w.sheenRoughnessMapUv),C.push(w.specularMapUv),C.push(w.specularColorMapUv),C.push(w.specularIntensityMapUv),C.push(w.transmissionMapUv),C.push(w.thicknessMapUv),C.push(w.combine),C.push(w.fogExp2),C.push(w.sizeAttenuation),C.push(w.morphTargetsCount),C.push(w.morphAttributeCount),C.push(w.numDirLights),C.push(w.numPointLights),C.push(w.numSpotLights),C.push(w.numSpotLightMaps),C.push(w.numHemiLights),C.push(w.numRectAreaLights),C.push(w.numDirLightShadows),C.push(w.numPointLightShadows),C.push(w.numSpotLightShadows),C.push(w.numSpotLightShadowsWithMaps),C.push(w.numLightProbes),C.push(w.shadowMapType),C.push(w.toneMapping),C.push(w.numClippingPlanes),C.push(w.numClipIntersection),C.push(w.depthPacking)}function M(C,w){f.disableAll(),w.instancing&&f.enable(0),w.instancingColor&&f.enable(1),w.instancingMorph&&f.enable(2),w.matcap&&f.enable(3),w.envMap&&f.enable(4),w.normalMapObjectSpace&&f.enable(5),w.normalMapTangentSpace&&f.enable(6),w.clearcoat&&f.enable(7),w.iridescence&&f.enable(8),w.alphaTest&&f.enable(9),w.vertexColors&&f.enable(10),w.vertexAlphas&&f.enable(11),w.vertexUv1s&&f.enable(12),w.vertexUv2s&&f.enable(13),w.vertexUv3s&&f.enable(14),w.vertexTangents&&f.enable(15),w.anisotropy&&f.enable(16),w.alphaHash&&f.enable(17),w.batching&&f.enable(18),w.dispersion&&f.enable(19),w.batchingColor&&f.enable(20),w.gradientMap&&f.enable(21),C.push(f.mask),f.disableAll(),w.fog&&f.enable(0),w.useFog&&f.enable(1),w.flatShading&&f.enable(2),w.logarithmicDepthBuffer&&f.enable(3),w.reversedDepthBuffer&&f.enable(4),w.skinning&&f.enable(5),w.morphTargets&&f.enable(6),w.morphNormals&&f.enable(7),w.morphColors&&f.enable(8),w.premultipliedAlpha&&f.enable(9),w.shadowMapEnabled&&f.enable(10),w.doubleSided&&f.enable(11),w.flipSided&&f.enable(12),w.useDepthPacking&&f.enable(13),w.dithering&&f.enable(14),w.transmission&&f.enable(15),w.sheen&&f.enable(16),w.opaque&&f.enable(17),w.pointsUvs&&f.enable(18),w.decodeVideoTexture&&f.enable(19),w.decodeVideoTextureEmissive&&f.enable(20),w.alphaToCoverage&&f.enable(21),C.push(f.mask)}function A(C){const w=E[C.type];let I;if(w){const k=Ki[w];I=xl.clone(k.uniforms)}else I=C.uniforms;return I}function N(C,w){let I=_.get(w);return I!==void 0?++I.usedTimes:(I=new o2(r,w,C,c),g.push(I),_.set(w,I)),I}function L(C){if(--C.usedTimes===0){const w=g.indexOf(C);g[w]=g[g.length-1],g.pop(),_.delete(C.cacheKey),C.destroy()}}function U(C){p.remove(C)}function z(){p.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:A,acquireProgram:N,releaseProgram:L,releaseShaderCache:U,programs:g,dispose:z}}function h2(){let r=new WeakMap;function t(u){return r.has(u)}function n(u){let f=r.get(u);return f===void 0&&(f={},r.set(u,f)),f}function a(u){r.delete(u)}function o(u,f,p){r.get(u)[f]=p}function c(){r=new WeakMap}return{has:t,get:n,remove:a,update:o,dispose:c}}function d2(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function hv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function dv(){const r=[];let t=0;const n=[],a=[],o=[];function c(){t=0,n.length=0,a.length=0,o.length=0}function u(_,v,y,E,R,S){let x=r[t];return x===void 0?(x={id:_.id,object:_,geometry:v,material:y,groupOrder:E,renderOrder:_.renderOrder,z:R,group:S},r[t]=x):(x.id=_.id,x.object=_,x.geometry=v,x.material=y,x.groupOrder=E,x.renderOrder=_.renderOrder,x.z=R,x.group=S),t++,x}function f(_,v,y,E,R,S){const x=u(_,v,y,E,R,S);y.transmission>0?a.push(x):y.transparent===!0?o.push(x):n.push(x)}function p(_,v,y,E,R,S){const x=u(_,v,y,E,R,S);y.transmission>0?a.unshift(x):y.transparent===!0?o.unshift(x):n.unshift(x)}function d(_,v){n.length>1&&n.sort(_||d2),a.length>1&&a.sort(v||hv),o.length>1&&o.sort(v||hv)}function g(){for(let _=t,v=r.length;_<v;_++){const y=r[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:a,transparent:o,init:c,push:f,unshift:p,finish:g,sort:d}}function p2(){let r=new WeakMap;function t(a,o){const c=r.get(a);let u;return c===void 0?(u=new dv,r.set(a,[u])):o>=c.length?(u=new dv,c.push(u)):u=c[o],u}function n(){r=new WeakMap}return{get:t,dispose:n}}function m2(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new W,color:new ie};break;case"SpotLight":n={position:new W,direction:new W,color:new ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new ie,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new ie,groundColor:new ie};break;case"RectAreaLight":n={color:new ie,position:new W,halfWidth:new W,halfHeight:new W};break}return r[t.id]=n,n}}}function g2(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=n,n}}}let _2=0;function v2(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function x2(r){const t=new m2,n=g2(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new W);const o=new W,c=new tn,u=new tn;function f(d){let g=0,_=0,v=0;for(let C=0;C<9;C++)a.probe[C].set(0,0,0);let y=0,E=0,R=0,S=0,x=0,T=0,M=0,A=0,N=0,L=0,U=0;d.sort(v2);for(let C=0,w=d.length;C<w;C++){const I=d[C],k=I.color,X=I.intensity,q=I.distance;let G=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Jr?G=I.shadow.map.texture:G=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)g+=k.r*X,_+=k.g*X,v+=k.b*X;else if(I.isLightProbe){for(let F=0;F<9;F++)a.probe[F].addScaledVector(I.sh.coefficients[F],X);U++}else if(I.isDirectionalLight){const F=t.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const V=I.shadow,Q=n.get(I);Q.shadowIntensity=V.intensity,Q.shadowBias=V.bias,Q.shadowNormalBias=V.normalBias,Q.shadowRadius=V.radius,Q.shadowMapSize=V.mapSize,a.directionalShadow[y]=Q,a.directionalShadowMap[y]=G,a.directionalShadowMatrix[y]=I.shadow.matrix,T++}a.directional[y]=F,y++}else if(I.isSpotLight){const F=t.get(I);F.position.setFromMatrixPosition(I.matrixWorld),F.color.copy(k).multiplyScalar(X),F.distance=q,F.coneCos=Math.cos(I.angle),F.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),F.decay=I.decay,a.spot[R]=F;const V=I.shadow;if(I.map&&(a.spotLightMap[N]=I.map,N++,V.updateMatrices(I),I.castShadow&&L++),a.spotLightMatrix[R]=V.matrix,I.castShadow){const Q=n.get(I);Q.shadowIntensity=V.intensity,Q.shadowBias=V.bias,Q.shadowNormalBias=V.normalBias,Q.shadowRadius=V.radius,Q.shadowMapSize=V.mapSize,a.spotShadow[R]=Q,a.spotShadowMap[R]=G,A++}R++}else if(I.isRectAreaLight){const F=t.get(I);F.color.copy(k).multiplyScalar(X),F.halfWidth.set(I.width*.5,0,0),F.halfHeight.set(0,I.height*.5,0),a.rectArea[S]=F,S++}else if(I.isPointLight){const F=t.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity),F.distance=I.distance,F.decay=I.decay,I.castShadow){const V=I.shadow,Q=n.get(I);Q.shadowIntensity=V.intensity,Q.shadowBias=V.bias,Q.shadowNormalBias=V.normalBias,Q.shadowRadius=V.radius,Q.shadowMapSize=V.mapSize,Q.shadowCameraNear=V.camera.near,Q.shadowCameraFar=V.camera.far,a.pointShadow[E]=Q,a.pointShadowMap[E]=G,a.pointShadowMatrix[E]=I.shadow.matrix,M++}a.point[E]=F,E++}else if(I.isHemisphereLight){const F=t.get(I);F.skyColor.copy(I.color).multiplyScalar(X),F.groundColor.copy(I.groundColor).multiplyScalar(X),a.hemi[x]=F,x++}}S>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=zt.LTC_FLOAT_1,a.rectAreaLTC2=zt.LTC_FLOAT_2):(a.rectAreaLTC1=zt.LTC_HALF_1,a.rectAreaLTC2=zt.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=_,a.ambient[2]=v;const z=a.hash;(z.directionalLength!==y||z.pointLength!==E||z.spotLength!==R||z.rectAreaLength!==S||z.hemiLength!==x||z.numDirectionalShadows!==T||z.numPointShadows!==M||z.numSpotShadows!==A||z.numSpotMaps!==N||z.numLightProbes!==U)&&(a.directional.length=y,a.spot.length=R,a.rectArea.length=S,a.point.length=E,a.hemi.length=x,a.directionalShadow.length=T,a.directionalShadowMap.length=T,a.pointShadow.length=M,a.pointShadowMap.length=M,a.spotShadow.length=A,a.spotShadowMap.length=A,a.directionalShadowMatrix.length=T,a.pointShadowMatrix.length=M,a.spotLightMatrix.length=A+N-L,a.spotLightMap.length=N,a.numSpotLightShadowsWithMaps=L,a.numLightProbes=U,z.directionalLength=y,z.pointLength=E,z.spotLength=R,z.rectAreaLength=S,z.hemiLength=x,z.numDirectionalShadows=T,z.numPointShadows=M,z.numSpotShadows=A,z.numSpotMaps=N,z.numLightProbes=U,a.version=_2++)}function p(d,g){let _=0,v=0,y=0,E=0,R=0;const S=g.matrixWorldInverse;for(let x=0,T=d.length;x<T;x++){const M=d[x];if(M.isDirectionalLight){const A=a.directional[_];A.direction.setFromMatrixPosition(M.matrixWorld),o.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(S),_++}else if(M.isSpotLight){const A=a.spot[y];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(S),A.direction.setFromMatrixPosition(M.matrixWorld),o.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(S),y++}else if(M.isRectAreaLight){const A=a.rectArea[E];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(S),u.identity(),c.copy(M.matrixWorld),c.premultiply(S),u.extractRotation(c),A.halfWidth.set(M.width*.5,0,0),A.halfHeight.set(0,M.height*.5,0),A.halfWidth.applyMatrix4(u),A.halfHeight.applyMatrix4(u),E++}else if(M.isPointLight){const A=a.point[v];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(S),v++}else if(M.isHemisphereLight){const A=a.hemi[R];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(S),R++}}}return{setup:f,setupView:p,state:a}}function pv(r){const t=new x2(r),n=[],a=[];function o(g){d.camera=g,n.length=0,a.length=0}function c(g){n.push(g)}function u(g){a.push(g)}function f(){t.setup(n)}function p(g){t.setupView(n,g)}const d={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:d,setupLights:f,setupLightsView:p,pushLight:c,pushShadow:u}}function y2(r){let t=new WeakMap;function n(o,c=0){const u=t.get(o);let f;return u===void 0?(f=new pv(r),t.set(o,[f])):c>=u.length?(f=new pv(r),u.push(f)):f=u[c],f}function a(){t=new WeakMap}return{get:n,dispose:a}}const S2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,M2=`uniform sampler2D shadow_pass;
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
}`,b2=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],E2=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],mv=new tn,ul=new W,Fd=new W;function T2(r,t,n){let a=new um;const o=new Rt,c=new Rt,u=new ln,f=new Ob,p=new Pb,d={},g=n.maxTextureSize,_={[hs]:si,[si]:hs,[Yn]:Yn},v=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:S2,fragmentShader:M2}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const E=new an;E.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new vi(E,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Su;let x=this.type;this.render=function(L,U,z){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||L.length===0)return;L.type===Nv&&(se("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),L.type=Su);const C=r.getRenderTarget(),w=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),k=r.state;k.setBlending($i),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const X=x!==this.type;X&&U.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(G=>G.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,G=L.length;q<G;q++){const F=L[q],V=F.shadow;if(V===void 0){se("WebGLShadowMap:",F,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;o.copy(V.mapSize);const Q=V.getFrameExtents();if(o.multiply(Q),c.copy(V.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/Q.x),o.x=c.x*Q.x,V.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/Q.y),o.y=c.y*Q.y,V.mapSize.y=c.y)),V.map===null||X===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Wr){if(F.isPointLight){se("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new ri(o.x,o.y,{format:Jr,type:_i,minFilter:In,magFilter:In,generateMipmaps:!1}),V.map.texture.name=F.name+".shadowMap",V.map.depthTexture=new yl(o.x,o.y,Qi),V.map.depthTexture.name=F.name+".shadowMapDepth",V.map.depthTexture.format=Ua,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Fn,V.map.depthTexture.magFilter=Fn}else{F.isPointLight?(V.map=new Jv(o.x),V.map.depthTexture=new nb(o.x,ea)):(V.map=new ri(o.x,o.y),V.map.depthTexture=new yl(o.x,o.y,ea)),V.map.depthTexture.name=F.name+".shadowMap",V.map.depthTexture.format=Ua;const dt=r.state.buffers.depth.getReversed();this.type===Su?(V.map.depthTexture.compareFunction=dt?rm:sm,V.map.depthTexture.minFilter=In,V.map.depthTexture.magFilter=In):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Fn,V.map.depthTexture.magFilter=Fn)}V.camera.updateProjectionMatrix()}const pt=V.map.isWebGLCubeRenderTarget?6:1;for(let dt=0;dt<pt;dt++){if(V.map.isWebGLCubeRenderTarget)r.setRenderTarget(V.map,dt),r.clear();else{dt===0&&(r.setRenderTarget(V.map),r.clear());const B=V.getViewport(dt);u.set(c.x*B.x,c.y*B.y,c.x*B.z,c.y*B.w),k.viewport(u)}if(F.isPointLight){const B=V.camera,et=V.matrix,ft=F.distance||B.far;ft!==B.far&&(B.far=ft,B.updateProjectionMatrix()),ul.setFromMatrixPosition(F.matrixWorld),B.position.copy(ul),Fd.copy(B.position),Fd.add(b2[dt]),B.up.copy(E2[dt]),B.lookAt(Fd),B.updateMatrixWorld(),et.makeTranslation(-ul.x,-ul.y,-ul.z),mv.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),V._frustum.setFromProjectionMatrix(mv,B.coordinateSystem,B.reversedDepth)}else V.updateMatrices(F);a=V.getFrustum(),A(U,z,V.camera,F,this.type)}V.isPointLightShadow!==!0&&this.type===Wr&&T(V,z),V.needsUpdate=!1}x=this.type,S.needsUpdate=!1,r.setRenderTarget(C,w,I)};function T(L,U){const z=t.update(R);v.defines.VSM_SAMPLES!==L.blurSamples&&(v.defines.VSM_SAMPLES=L.blurSamples,y.defines.VSM_SAMPLES=L.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new ri(o.x,o.y,{format:Jr,type:_i})),v.uniforms.shadow_pass.value=L.map.depthTexture,v.uniforms.resolution.value=L.mapSize,v.uniforms.radius.value=L.radius,r.setRenderTarget(L.mapPass),r.clear(),r.renderBufferDirect(U,null,z,v,R,null),y.uniforms.shadow_pass.value=L.mapPass.texture,y.uniforms.resolution.value=L.mapSize,y.uniforms.radius.value=L.radius,r.setRenderTarget(L.map),r.clear(),r.renderBufferDirect(U,null,z,y,R,null)}function M(L,U,z,C){let w=null;const I=z.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(I!==void 0)w=I;else if(w=z.isPointLight===!0?p:f,r.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const k=w.uuid,X=U.uuid;let q=d[k];q===void 0&&(q={},d[k]=q);let G=q[X];G===void 0&&(G=w.clone(),q[X]=G,U.addEventListener("dispose",N)),w=G}if(w.visible=U.visible,w.wireframe=U.wireframe,C===Wr?w.side=U.shadowSide!==null?U.shadowSide:U.side:w.side=U.shadowSide!==null?U.shadowSide:_[U.side],w.alphaMap=U.alphaMap,w.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,w.map=U.map,w.clipShadows=U.clipShadows,w.clippingPlanes=U.clippingPlanes,w.clipIntersection=U.clipIntersection,w.displacementMap=U.displacementMap,w.displacementScale=U.displacementScale,w.displacementBias=U.displacementBias,w.wireframeLinewidth=U.wireframeLinewidth,w.linewidth=U.linewidth,z.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const k=r.properties.get(w);k.light=z}return w}function A(L,U,z,C,w){if(L.visible===!1)return;if(L.layers.test(U.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&w===Wr)&&(!L.frustumCulled||a.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,L.matrixWorld);const X=t.update(L),q=L.material;if(Array.isArray(q)){const G=X.groups;for(let F=0,V=G.length;F<V;F++){const Q=G[F],pt=q[Q.materialIndex];if(pt&&pt.visible){const dt=M(L,pt,C,w);L.onBeforeShadow(r,L,U,z,X,dt,Q),r.renderBufferDirect(z,null,X,dt,L,Q),L.onAfterShadow(r,L,U,z,X,dt,Q)}}}else if(q.visible){const G=M(L,q,C,w);L.onBeforeShadow(r,L,U,z,X,G,null),r.renderBufferDirect(z,null,X,G,L,null),L.onAfterShadow(r,L,U,z,X,G,null)}}const k=L.children;for(let X=0,q=k.length;X<q;X++)A(k[X],U,z,C,w)}function N(L){L.target.removeEventListener("dispose",N);for(const z in d){const C=d[z],w=L.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}const A2={[Yd]:qd,[jd]:Qd,[Zd]:Jd,[Kr]:Kd,[qd]:Yd,[Qd]:jd,[Jd]:Zd,[Kd]:Kr};function C2(r,t){function n(){let K=!1;const Lt=new ln;let At=null;const It=new ln(0,0,0,0);return{setMask:function(St){At!==St&&!K&&(r.colorMask(St,St,St,St),At=St)},setLocked:function(St){K=St},setClear:function(St,xt,wt,ae,Ie){Ie===!0&&(St*=ae,xt*=ae,wt*=ae),Lt.set(St,xt,wt,ae),It.equals(Lt)===!1&&(r.clearColor(St,xt,wt,ae),It.copy(Lt))},reset:function(){K=!1,At=null,It.set(-1,0,0,0)}}}function a(){let K=!1,Lt=!1,At=null,It=null,St=null;return{setReversed:function(xt){if(Lt!==xt){const wt=t.get("EXT_clip_control");xt?wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.ZERO_TO_ONE_EXT):wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.NEGATIVE_ONE_TO_ONE_EXT),Lt=xt;const ae=St;St=null,this.setClear(ae)}},getReversed:function(){return Lt},setTest:function(xt){xt?ut(r.DEPTH_TEST):Ct(r.DEPTH_TEST)},setMask:function(xt){At!==xt&&!K&&(r.depthMask(xt),At=xt)},setFunc:function(xt){if(Lt&&(xt=A2[xt]),It!==xt){switch(xt){case Yd:r.depthFunc(r.NEVER);break;case qd:r.depthFunc(r.ALWAYS);break;case jd:r.depthFunc(r.LESS);break;case Kr:r.depthFunc(r.LEQUAL);break;case Zd:r.depthFunc(r.EQUAL);break;case Kd:r.depthFunc(r.GEQUAL);break;case Qd:r.depthFunc(r.GREATER);break;case Jd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}It=xt}},setLocked:function(xt){K=xt},setClear:function(xt){St!==xt&&(Lt&&(xt=1-xt),r.clearDepth(xt),St=xt)},reset:function(){K=!1,At=null,It=null,St=null,Lt=!1}}}function o(){let K=!1,Lt=null,At=null,It=null,St=null,xt=null,wt=null,ae=null,Ie=null;return{setTest:function(Ce){K||(Ce?ut(r.STENCIL_TEST):Ct(r.STENCIL_TEST))},setMask:function(Ce){Lt!==Ce&&!K&&(r.stencilMask(Ce),Lt=Ce)},setFunc:function(Ce,Hn,Oi){(At!==Ce||It!==Hn||St!==Oi)&&(r.stencilFunc(Ce,Hn,Oi),At=Ce,It=Hn,St=Oi)},setOp:function(Ce,Hn,Oi){(xt!==Ce||wt!==Hn||ae!==Oi)&&(r.stencilOp(Ce,Hn,Oi),xt=Ce,wt=Hn,ae=Oi)},setLocked:function(Ce){K=Ce},setClear:function(Ce){Ie!==Ce&&(r.clearStencil(Ce),Ie=Ce)},reset:function(){K=!1,Lt=null,At=null,It=null,St=null,xt=null,wt=null,ae=null,Ie=null}}}const c=new n,u=new a,f=new o,p=new WeakMap,d=new WeakMap;let g={},_={},v=new WeakMap,y=[],E=null,R=!1,S=null,x=null,T=null,M=null,A=null,N=null,L=null,U=new ie(0,0,0),z=0,C=!1,w=null,I=null,k=null,X=null,q=null;const G=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,V=0;const Q=r.getParameter(r.VERSION);Q.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(Q)[1]),F=V>=1):Q.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),F=V>=2);let pt=null,dt={};const B=r.getParameter(r.SCISSOR_BOX),et=r.getParameter(r.VIEWPORT),ft=new ln().fromArray(B),bt=new ln().fromArray(et);function Ot(K,Lt,At,It){const St=new Uint8Array(4),xt=r.createTexture();r.bindTexture(K,xt),r.texParameteri(K,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(K,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let wt=0;wt<At;wt++)K===r.TEXTURE_3D||K===r.TEXTURE_2D_ARRAY?r.texImage3D(Lt,0,r.RGBA,1,1,It,0,r.RGBA,r.UNSIGNED_BYTE,St):r.texImage2D(Lt+wt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,St);return xt}const it={};it[r.TEXTURE_2D]=Ot(r.TEXTURE_2D,r.TEXTURE_2D,1),it[r.TEXTURE_CUBE_MAP]=Ot(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[r.TEXTURE_2D_ARRAY]=Ot(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),it[r.TEXTURE_3D]=Ot(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ut(r.DEPTH_TEST),u.setFunc(Kr),ue(!1),sn(f_),ut(r.CULL_FACE),_e($i);function ut(K){g[K]!==!0&&(r.enable(K),g[K]=!0)}function Ct(K){g[K]!==!1&&(r.disable(K),g[K]=!1)}function Gt(K,Lt){return _[K]!==Lt?(r.bindFramebuffer(K,Lt),_[K]=Lt,K===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Lt),K===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Bt(K,Lt){let At=y,It=!1;if(K){At=v.get(Lt),At===void 0&&(At=[],v.set(Lt,At));const St=K.textures;if(At.length!==St.length||At[0]!==r.COLOR_ATTACHMENT0){for(let xt=0,wt=St.length;xt<wt;xt++)At[xt]=r.COLOR_ATTACHMENT0+xt;At.length=St.length,It=!0}}else At[0]!==r.BACK&&(At[0]=r.BACK,It=!0);It&&r.drawBuffers(At)}function le(K){return E!==K?(r.useProgram(K),E=K,!0):!1}const Ae={[Fs]:r.FUNC_ADD,[QS]:r.FUNC_SUBTRACT,[JS]:r.FUNC_REVERSE_SUBTRACT};Ae[$S]=r.MIN,Ae[tM]=r.MAX;const me={[eM]:r.ZERO,[nM]:r.ONE,[iM]:r.SRC_COLOR,[Xd]:r.SRC_ALPHA,[cM]:r.SRC_ALPHA_SATURATE,[oM]:r.DST_COLOR,[sM]:r.DST_ALPHA,[aM]:r.ONE_MINUS_SRC_COLOR,[Wd]:r.ONE_MINUS_SRC_ALPHA,[lM]:r.ONE_MINUS_DST_COLOR,[rM]:r.ONE_MINUS_DST_ALPHA,[uM]:r.CONSTANT_COLOR,[fM]:r.ONE_MINUS_CONSTANT_COLOR,[hM]:r.CONSTANT_ALPHA,[dM]:r.ONE_MINUS_CONSTANT_ALPHA};function _e(K,Lt,At,It,St,xt,wt,ae,Ie,Ce){if(K===$i){R===!0&&(Ct(r.BLEND),R=!1);return}if(R===!1&&(ut(r.BLEND),R=!0),K!==KS){if(K!==S||Ce!==C){if((x!==Fs||A!==Fs)&&(r.blendEquation(r.FUNC_ADD),x=Fs,A=Fs),Ce)switch(K){case jr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Uu:r.blendFunc(r.ONE,r.ONE);break;case h_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case d_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:De("WebGLState: Invalid blending: ",K);break}else switch(K){case jr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Uu:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case h_:De("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case d_:De("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:De("WebGLState: Invalid blending: ",K);break}T=null,M=null,N=null,L=null,U.set(0,0,0),z=0,S=K,C=Ce}return}St=St||Lt,xt=xt||At,wt=wt||It,(Lt!==x||St!==A)&&(r.blendEquationSeparate(Ae[Lt],Ae[St]),x=Lt,A=St),(At!==T||It!==M||xt!==N||wt!==L)&&(r.blendFuncSeparate(me[At],me[It],me[xt],me[wt]),T=At,M=It,N=xt,L=wt),(ae.equals(U)===!1||Ie!==z)&&(r.blendColor(ae.r,ae.g,ae.b,Ie),U.copy(ae),z=Ie),S=K,C=!1}function Ue(K,Lt){K.side===Yn?Ct(r.CULL_FACE):ut(r.CULL_FACE);let At=K.side===si;Lt&&(At=!At),ue(At),K.blending===jr&&K.transparent===!1?_e($i):_e(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),u.setFunc(K.depthFunc),u.setTest(K.depthTest),u.setMask(K.depthWrite),c.setMask(K.colorWrite);const It=K.stencilWrite;f.setTest(It),It&&(f.setMask(K.stencilWriteMask),f.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),f.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),Ke(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?ut(r.SAMPLE_ALPHA_TO_COVERAGE):Ct(r.SAMPLE_ALPHA_TO_COVERAGE)}function ue(K){w!==K&&(K?r.frontFace(r.CW):r.frontFace(r.CCW),w=K)}function sn(K){K!==jS?(ut(r.CULL_FACE),K!==I&&(K===f_?r.cullFace(r.BACK):K===ZS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ct(r.CULL_FACE),I=K}function j(K){K!==k&&(F&&r.lineWidth(K),k=K)}function Ke(K,Lt,At){K?(ut(r.POLYGON_OFFSET_FILL),(X!==Lt||q!==At)&&(r.polygonOffset(Lt,At),X=Lt,q=At)):Ct(r.POLYGON_OFFSET_FILL)}function be(K){K?ut(r.SCISSOR_TEST):Ct(r.SCISSOR_TEST)}function Pe(K){K===void 0&&(K=r.TEXTURE0+G-1),pt!==K&&(r.activeTexture(K),pt=K)}function jt(K,Lt,At){At===void 0&&(pt===null?At=r.TEXTURE0+G-1:At=pt);let It=dt[At];It===void 0&&(It={type:void 0,texture:void 0},dt[At]=It),(It.type!==K||It.texture!==Lt)&&(pt!==At&&(r.activeTexture(At),pt=At),r.bindTexture(K,Lt||it[K]),It.type=K,It.texture=Lt)}function H(){const K=dt[pt];K!==void 0&&K.type!==void 0&&(r.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function D(){try{r.compressedTexImage2D(...arguments)}catch(K){De("WebGLState:",K)}}function J(){try{r.compressedTexImage3D(...arguments)}catch(K){De("WebGLState:",K)}}function gt(){try{r.texSubImage2D(...arguments)}catch(K){De("WebGLState:",K)}}function yt(){try{r.texSubImage3D(...arguments)}catch(K){De("WebGLState:",K)}}function ht(){try{r.compressedTexSubImage2D(...arguments)}catch(K){De("WebGLState:",K)}}function Kt(){try{r.compressedTexSubImage3D(...arguments)}catch(K){De("WebGLState:",K)}}function Dt(){try{r.texStorage2D(...arguments)}catch(K){De("WebGLState:",K)}}function Wt(){try{r.texStorage3D(...arguments)}catch(K){De("WebGLState:",K)}}function ne(){try{r.texImage2D(...arguments)}catch(K){De("WebGLState:",K)}}function Mt(){try{r.texImage3D(...arguments)}catch(K){De("WebGLState:",K)}}function Tt(K){ft.equals(K)===!1&&(r.scissor(K.x,K.y,K.z,K.w),ft.copy(K))}function Ht(K){bt.equals(K)===!1&&(r.viewport(K.x,K.y,K.z,K.w),bt.copy(K))}function Ft(K,Lt){let At=d.get(Lt);At===void 0&&(At=new WeakMap,d.set(Lt,At));let It=At.get(K);It===void 0&&(It=r.getUniformBlockIndex(Lt,K.name),At.set(K,It))}function Ut(K,Lt){const It=d.get(Lt).get(K);p.get(Lt)!==It&&(r.uniformBlockBinding(Lt,It,K.__bindingPointIndex),p.set(Lt,It))}function he(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},pt=null,dt={},_={},v=new WeakMap,y=[],E=null,R=!1,S=null,x=null,T=null,M=null,A=null,N=null,L=null,U=new ie(0,0,0),z=0,C=!1,w=null,I=null,k=null,X=null,q=null,ft.set(0,0,r.canvas.width,r.canvas.height),bt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),u.reset(),f.reset()}return{buffers:{color:c,depth:u,stencil:f},enable:ut,disable:Ct,bindFramebuffer:Gt,drawBuffers:Bt,useProgram:le,setBlending:_e,setMaterial:Ue,setFlipSided:ue,setCullFace:sn,setLineWidth:j,setPolygonOffset:Ke,setScissorTest:be,activeTexture:Pe,bindTexture:jt,unbindTexture:H,compressedTexImage2D:D,compressedTexImage3D:J,texImage2D:ne,texImage3D:Mt,updateUBOMapping:Ft,uniformBlockBinding:Ut,texStorage2D:Dt,texStorage3D:Wt,texSubImage2D:gt,texSubImage3D:yt,compressedTexSubImage2D:ht,compressedTexSubImage3D:Kt,scissor:Tt,viewport:Ht,reset:he}}function R2(r,t,n,a,o,c,u){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Rt,g=new WeakMap;let _;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(H,D){return y?new OffscreenCanvas(H,D):Pu("canvas")}function R(H,D,J){let gt=1;const yt=jt(H);if((yt.width>J||yt.height>J)&&(gt=J/Math.max(yt.width,yt.height)),gt<1)if(typeof HTMLImageElement<"u"&&H instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&H instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&H instanceof ImageBitmap||typeof VideoFrame<"u"&&H instanceof VideoFrame){const ht=Math.floor(gt*yt.width),Kt=Math.floor(gt*yt.height);_===void 0&&(_=E(ht,Kt));const Dt=D?E(ht,Kt):_;return Dt.width=ht,Dt.height=Kt,Dt.getContext("2d").drawImage(H,0,0,ht,Kt),se("WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+ht+"x"+Kt+")."),Dt}else return"data"in H&&se("WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),H;return H}function S(H){return H.generateMipmaps}function x(H){r.generateMipmap(H)}function T(H){return H.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:H.isWebGL3DRenderTarget?r.TEXTURE_3D:H.isWebGLArrayRenderTarget||H.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function M(H,D,J,gt,yt=!1){if(H!==null){if(r[H]!==void 0)return r[H];se("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+H+"'")}let ht=D;if(D===r.RED&&(J===r.FLOAT&&(ht=r.R32F),J===r.HALF_FLOAT&&(ht=r.R16F),J===r.UNSIGNED_BYTE&&(ht=r.R8)),D===r.RED_INTEGER&&(J===r.UNSIGNED_BYTE&&(ht=r.R8UI),J===r.UNSIGNED_SHORT&&(ht=r.R16UI),J===r.UNSIGNED_INT&&(ht=r.R32UI),J===r.BYTE&&(ht=r.R8I),J===r.SHORT&&(ht=r.R16I),J===r.INT&&(ht=r.R32I)),D===r.RG&&(J===r.FLOAT&&(ht=r.RG32F),J===r.HALF_FLOAT&&(ht=r.RG16F),J===r.UNSIGNED_BYTE&&(ht=r.RG8)),D===r.RG_INTEGER&&(J===r.UNSIGNED_BYTE&&(ht=r.RG8UI),J===r.UNSIGNED_SHORT&&(ht=r.RG16UI),J===r.UNSIGNED_INT&&(ht=r.RG32UI),J===r.BYTE&&(ht=r.RG8I),J===r.SHORT&&(ht=r.RG16I),J===r.INT&&(ht=r.RG32I)),D===r.RGB_INTEGER&&(J===r.UNSIGNED_BYTE&&(ht=r.RGB8UI),J===r.UNSIGNED_SHORT&&(ht=r.RGB16UI),J===r.UNSIGNED_INT&&(ht=r.RGB32UI),J===r.BYTE&&(ht=r.RGB8I),J===r.SHORT&&(ht=r.RGB16I),J===r.INT&&(ht=r.RGB32I)),D===r.RGBA_INTEGER&&(J===r.UNSIGNED_BYTE&&(ht=r.RGBA8UI),J===r.UNSIGNED_SHORT&&(ht=r.RGBA16UI),J===r.UNSIGNED_INT&&(ht=r.RGBA32UI),J===r.BYTE&&(ht=r.RGBA8I),J===r.SHORT&&(ht=r.RGBA16I),J===r.INT&&(ht=r.RGBA32I)),D===r.RGB&&(J===r.UNSIGNED_INT_5_9_9_9_REV&&(ht=r.RGB9_E5),J===r.UNSIGNED_INT_10F_11F_11F_REV&&(ht=r.R11F_G11F_B10F)),D===r.RGBA){const Kt=yt?Lu:Ee.getTransfer(gt);J===r.FLOAT&&(ht=r.RGBA32F),J===r.HALF_FLOAT&&(ht=r.RGBA16F),J===r.UNSIGNED_BYTE&&(ht=Kt===Fe?r.SRGB8_ALPHA8:r.RGBA8),J===r.UNSIGNED_SHORT_4_4_4_4&&(ht=r.RGBA4),J===r.UNSIGNED_SHORT_5_5_5_1&&(ht=r.RGB5_A1)}return(ht===r.R16F||ht===r.R32F||ht===r.RG16F||ht===r.RG32F||ht===r.RGBA16F||ht===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function A(H,D){let J;return H?D===null||D===ea||D===_l?J=r.DEPTH24_STENCIL8:D===Qi?J=r.DEPTH32F_STENCIL8:D===gl&&(J=r.DEPTH24_STENCIL8,se("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):D===null||D===ea||D===_l?J=r.DEPTH_COMPONENT24:D===Qi?J=r.DEPTH_COMPONENT32F:D===gl&&(J=r.DEPTH_COMPONENT16),J}function N(H,D){return S(H)===!0||H.isFramebufferTexture&&H.minFilter!==Fn&&H.minFilter!==In?Math.log2(Math.max(D.width,D.height))+1:H.mipmaps!==void 0&&H.mipmaps.length>0?H.mipmaps.length:H.isCompressedTexture&&Array.isArray(H.image)?D.mipmaps.length:1}function L(H){const D=H.target;D.removeEventListener("dispose",L),z(D),D.isVideoTexture&&g.delete(D)}function U(H){const D=H.target;D.removeEventListener("dispose",U),w(D)}function z(H){const D=a.get(H);if(D.__webglInit===void 0)return;const J=H.source,gt=v.get(J);if(gt){const yt=gt[D.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&C(H),Object.keys(gt).length===0&&v.delete(J)}a.remove(H)}function C(H){const D=a.get(H);r.deleteTexture(D.__webglTexture);const J=H.source,gt=v.get(J);delete gt[D.__cacheKey],u.memory.textures--}function w(H){const D=a.get(H);if(H.depthTexture&&(H.depthTexture.dispose(),a.remove(H.depthTexture)),H.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++){if(Array.isArray(D.__webglFramebuffer[gt]))for(let yt=0;yt<D.__webglFramebuffer[gt].length;yt++)r.deleteFramebuffer(D.__webglFramebuffer[gt][yt]);else r.deleteFramebuffer(D.__webglFramebuffer[gt]);D.__webglDepthbuffer&&r.deleteRenderbuffer(D.__webglDepthbuffer[gt])}else{if(Array.isArray(D.__webglFramebuffer))for(let gt=0;gt<D.__webglFramebuffer.length;gt++)r.deleteFramebuffer(D.__webglFramebuffer[gt]);else r.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&r.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&r.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let gt=0;gt<D.__webglColorRenderbuffer.length;gt++)D.__webglColorRenderbuffer[gt]&&r.deleteRenderbuffer(D.__webglColorRenderbuffer[gt]);D.__webglDepthRenderbuffer&&r.deleteRenderbuffer(D.__webglDepthRenderbuffer)}const J=H.textures;for(let gt=0,yt=J.length;gt<yt;gt++){const ht=a.get(J[gt]);ht.__webglTexture&&(r.deleteTexture(ht.__webglTexture),u.memory.textures--),a.remove(J[gt])}a.remove(H)}let I=0;function k(){I=0}function X(){const H=I;return H>=o.maxTextures&&se("WebGLTextures: Trying to use "+H+" texture units while this GPU supports only "+o.maxTextures),I+=1,H}function q(H){const D=[];return D.push(H.wrapS),D.push(H.wrapT),D.push(H.wrapR||0),D.push(H.magFilter),D.push(H.minFilter),D.push(H.anisotropy),D.push(H.internalFormat),D.push(H.format),D.push(H.type),D.push(H.generateMipmaps),D.push(H.premultiplyAlpha),D.push(H.flipY),D.push(H.unpackAlignment),D.push(H.colorSpace),D.join()}function G(H,D){const J=a.get(H);if(H.isVideoTexture&&be(H),H.isRenderTargetTexture===!1&&H.isExternalTexture!==!0&&H.version>0&&J.__version!==H.version){const gt=H.image;if(gt===null)se("WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)se("WebGLRenderer: Texture marked for update but image is incomplete");else{it(J,H,D);return}}else H.isExternalTexture&&(J.__webglTexture=H.sourceTexture?H.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,J.__webglTexture,r.TEXTURE0+D)}function F(H,D){const J=a.get(H);if(H.isRenderTargetTexture===!1&&H.version>0&&J.__version!==H.version){it(J,H,D);return}else H.isExternalTexture&&(J.__webglTexture=H.sourceTexture?H.sourceTexture:null);n.bindTexture(r.TEXTURE_2D_ARRAY,J.__webglTexture,r.TEXTURE0+D)}function V(H,D){const J=a.get(H);if(H.isRenderTargetTexture===!1&&H.version>0&&J.__version!==H.version){it(J,H,D);return}n.bindTexture(r.TEXTURE_3D,J.__webglTexture,r.TEXTURE0+D)}function Q(H,D){const J=a.get(H);if(H.isCubeDepthTexture!==!0&&H.version>0&&J.__version!==H.version){ut(J,H,D);return}n.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture,r.TEXTURE0+D)}const pt={[Nu]:r.REPEAT,[wa]:r.CLAMP_TO_EDGE,[ep]:r.MIRRORED_REPEAT},dt={[Fn]:r.NEAREST,[gM]:r.NEAREST_MIPMAP_NEAREST,[Gc]:r.NEAREST_MIPMAP_LINEAR,[In]:r.LINEAR,[id]:r.LINEAR_MIPMAP_NEAREST,[Bs]:r.LINEAR_MIPMAP_LINEAR},B={[xM]:r.NEVER,[EM]:r.ALWAYS,[yM]:r.LESS,[sm]:r.LEQUAL,[SM]:r.EQUAL,[rm]:r.GEQUAL,[MM]:r.GREATER,[bM]:r.NOTEQUAL};function et(H,D){if(D.type===Qi&&t.has("OES_texture_float_linear")===!1&&(D.magFilter===In||D.magFilter===id||D.magFilter===Gc||D.magFilter===Bs||D.minFilter===In||D.minFilter===id||D.minFilter===Gc||D.minFilter===Bs)&&se("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(H,r.TEXTURE_WRAP_S,pt[D.wrapS]),r.texParameteri(H,r.TEXTURE_WRAP_T,pt[D.wrapT]),(H===r.TEXTURE_3D||H===r.TEXTURE_2D_ARRAY)&&r.texParameteri(H,r.TEXTURE_WRAP_R,pt[D.wrapR]),r.texParameteri(H,r.TEXTURE_MAG_FILTER,dt[D.magFilter]),r.texParameteri(H,r.TEXTURE_MIN_FILTER,dt[D.minFilter]),D.compareFunction&&(r.texParameteri(H,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(H,r.TEXTURE_COMPARE_FUNC,B[D.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(D.magFilter===Fn||D.minFilter!==Gc&&D.minFilter!==Bs||D.type===Qi&&t.has("OES_texture_float_linear")===!1)return;if(D.anisotropy>1||a.get(D).__currentAnisotropy){const J=t.get("EXT_texture_filter_anisotropic");r.texParameterf(H,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,o.getMaxAnisotropy())),a.get(D).__currentAnisotropy=D.anisotropy}}}function ft(H,D){let J=!1;H.__webglInit===void 0&&(H.__webglInit=!0,D.addEventListener("dispose",L));const gt=D.source;let yt=v.get(gt);yt===void 0&&(yt={},v.set(gt,yt));const ht=q(D);if(ht!==H.__cacheKey){yt[ht]===void 0&&(yt[ht]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,J=!0),yt[ht].usedTimes++;const Kt=yt[H.__cacheKey];Kt!==void 0&&(yt[H.__cacheKey].usedTimes--,Kt.usedTimes===0&&C(D)),H.__cacheKey=ht,H.__webglTexture=yt[ht].texture}return J}function bt(H,D,J){return Math.floor(Math.floor(H/J)/D)}function Ot(H,D,J,gt){const ht=H.updateRanges;if(ht.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,D.width,D.height,J,gt,D.data);else{ht.sort((Mt,Tt)=>Mt.start-Tt.start);let Kt=0;for(let Mt=1;Mt<ht.length;Mt++){const Tt=ht[Kt],Ht=ht[Mt],Ft=Tt.start+Tt.count,Ut=bt(Ht.start,D.width,4),he=bt(Tt.start,D.width,4);Ht.start<=Ft+1&&Ut===he&&bt(Ht.start+Ht.count-1,D.width,4)===Ut?Tt.count=Math.max(Tt.count,Ht.start+Ht.count-Tt.start):(++Kt,ht[Kt]=Ht)}ht.length=Kt+1;const Dt=r.getParameter(r.UNPACK_ROW_LENGTH),Wt=r.getParameter(r.UNPACK_SKIP_PIXELS),ne=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,D.width);for(let Mt=0,Tt=ht.length;Mt<Tt;Mt++){const Ht=ht[Mt],Ft=Math.floor(Ht.start/4),Ut=Math.ceil(Ht.count/4),he=Ft%D.width,K=Math.floor(Ft/D.width),Lt=Ut,At=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,he),r.pixelStorei(r.UNPACK_SKIP_ROWS,K),n.texSubImage2D(r.TEXTURE_2D,0,he,K,Lt,At,J,gt,D.data)}H.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Dt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Wt),r.pixelStorei(r.UNPACK_SKIP_ROWS,ne)}}function it(H,D,J){let gt=r.TEXTURE_2D;(D.isDataArrayTexture||D.isCompressedArrayTexture)&&(gt=r.TEXTURE_2D_ARRAY),D.isData3DTexture&&(gt=r.TEXTURE_3D);const yt=ft(H,D),ht=D.source;n.bindTexture(gt,H.__webglTexture,r.TEXTURE0+J);const Kt=a.get(ht);if(ht.version!==Kt.__version||yt===!0){n.activeTexture(r.TEXTURE0+J);const Dt=Ee.getPrimaries(Ee.workingColorSpace),Wt=D.colorSpace===us?null:Ee.getPrimaries(D.colorSpace),ne=D.colorSpace===us||Dt===Wt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,D.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,D.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let Mt=R(D.image,!1,o.maxTextureSize);Mt=Pe(D,Mt);const Tt=c.convert(D.format,D.colorSpace),Ht=c.convert(D.type);let Ft=M(D.internalFormat,Tt,Ht,D.colorSpace,D.isVideoTexture);et(gt,D);let Ut;const he=D.mipmaps,K=D.isVideoTexture!==!0,Lt=Kt.__version===void 0||yt===!0,At=ht.dataReady,It=N(D,Mt);if(D.isDepthTexture)Ft=A(D.format===Hs,D.type),Lt&&(K?n.texStorage2D(r.TEXTURE_2D,1,Ft,Mt.width,Mt.height):n.texImage2D(r.TEXTURE_2D,0,Ft,Mt.width,Mt.height,0,Tt,Ht,null));else if(D.isDataTexture)if(he.length>0){K&&Lt&&n.texStorage2D(r.TEXTURE_2D,It,Ft,he[0].width,he[0].height);for(let St=0,xt=he.length;St<xt;St++)Ut=he[St],K?At&&n.texSubImage2D(r.TEXTURE_2D,St,0,0,Ut.width,Ut.height,Tt,Ht,Ut.data):n.texImage2D(r.TEXTURE_2D,St,Ft,Ut.width,Ut.height,0,Tt,Ht,Ut.data);D.generateMipmaps=!1}else K?(Lt&&n.texStorage2D(r.TEXTURE_2D,It,Ft,Mt.width,Mt.height),At&&Ot(D,Mt,Tt,Ht)):n.texImage2D(r.TEXTURE_2D,0,Ft,Mt.width,Mt.height,0,Tt,Ht,Mt.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){K&&Lt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,It,Ft,he[0].width,he[0].height,Mt.depth);for(let St=0,xt=he.length;St<xt;St++)if(Ut=he[St],D.format!==Li)if(Tt!==null)if(K){if(At)if(D.layerUpdates.size>0){const wt=Y_(Ut.width,Ut.height,D.format,D.type);for(const ae of D.layerUpdates){const Ie=Ut.data.subarray(ae*wt/Ut.data.BYTES_PER_ELEMENT,(ae+1)*wt/Ut.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,St,0,0,ae,Ut.width,Ut.height,1,Tt,Ie)}D.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,St,0,0,0,Ut.width,Ut.height,Mt.depth,Tt,Ut.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,St,Ft,Ut.width,Ut.height,Mt.depth,0,Ut.data,0,0);else se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else K?At&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,St,0,0,0,Ut.width,Ut.height,Mt.depth,Tt,Ht,Ut.data):n.texImage3D(r.TEXTURE_2D_ARRAY,St,Ft,Ut.width,Ut.height,Mt.depth,0,Tt,Ht,Ut.data)}else{K&&Lt&&n.texStorage2D(r.TEXTURE_2D,It,Ft,he[0].width,he[0].height);for(let St=0,xt=he.length;St<xt;St++)Ut=he[St],D.format!==Li?Tt!==null?K?At&&n.compressedTexSubImage2D(r.TEXTURE_2D,St,0,0,Ut.width,Ut.height,Tt,Ut.data):n.compressedTexImage2D(r.TEXTURE_2D,St,Ft,Ut.width,Ut.height,0,Ut.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):K?At&&n.texSubImage2D(r.TEXTURE_2D,St,0,0,Ut.width,Ut.height,Tt,Ht,Ut.data):n.texImage2D(r.TEXTURE_2D,St,Ft,Ut.width,Ut.height,0,Tt,Ht,Ut.data)}else if(D.isDataArrayTexture)if(K){if(Lt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,It,Ft,Mt.width,Mt.height,Mt.depth),At)if(D.layerUpdates.size>0){const St=Y_(Mt.width,Mt.height,D.format,D.type);for(const xt of D.layerUpdates){const wt=Mt.data.subarray(xt*St/Mt.data.BYTES_PER_ELEMENT,(xt+1)*St/Mt.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,xt,Mt.width,Mt.height,1,Tt,Ht,wt)}D.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Tt,Ht,Mt.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,Ft,Mt.width,Mt.height,Mt.depth,0,Tt,Ht,Mt.data);else if(D.isData3DTexture)K?(Lt&&n.texStorage3D(r.TEXTURE_3D,It,Ft,Mt.width,Mt.height,Mt.depth),At&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Tt,Ht,Mt.data)):n.texImage3D(r.TEXTURE_3D,0,Ft,Mt.width,Mt.height,Mt.depth,0,Tt,Ht,Mt.data);else if(D.isFramebufferTexture){if(Lt)if(K)n.texStorage2D(r.TEXTURE_2D,It,Ft,Mt.width,Mt.height);else{let St=Mt.width,xt=Mt.height;for(let wt=0;wt<It;wt++)n.texImage2D(r.TEXTURE_2D,wt,Ft,St,xt,0,Tt,Ht,null),St>>=1,xt>>=1}}else if(he.length>0){if(K&&Lt){const St=jt(he[0]);n.texStorage2D(r.TEXTURE_2D,It,Ft,St.width,St.height)}for(let St=0,xt=he.length;St<xt;St++)Ut=he[St],K?At&&n.texSubImage2D(r.TEXTURE_2D,St,0,0,Tt,Ht,Ut):n.texImage2D(r.TEXTURE_2D,St,Ft,Tt,Ht,Ut);D.generateMipmaps=!1}else if(K){if(Lt){const St=jt(Mt);n.texStorage2D(r.TEXTURE_2D,It,Ft,St.width,St.height)}At&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Tt,Ht,Mt)}else n.texImage2D(r.TEXTURE_2D,0,Ft,Tt,Ht,Mt);S(D)&&x(gt),Kt.__version=ht.version,D.onUpdate&&D.onUpdate(D)}H.__version=D.version}function ut(H,D,J){if(D.image.length!==6)return;const gt=ft(H,D),yt=D.source;n.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+J);const ht=a.get(yt);if(yt.version!==ht.__version||gt===!0){n.activeTexture(r.TEXTURE0+J);const Kt=Ee.getPrimaries(Ee.workingColorSpace),Dt=D.colorSpace===us?null:Ee.getPrimaries(D.colorSpace),Wt=D.colorSpace===us||Kt===Dt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,D.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,D.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);const ne=D.isCompressedTexture||D.image[0].isCompressedTexture,Mt=D.image[0]&&D.image[0].isDataTexture,Tt=[];for(let xt=0;xt<6;xt++)!ne&&!Mt?Tt[xt]=R(D.image[xt],!0,o.maxCubemapSize):Tt[xt]=Mt?D.image[xt].image:D.image[xt],Tt[xt]=Pe(D,Tt[xt]);const Ht=Tt[0],Ft=c.convert(D.format,D.colorSpace),Ut=c.convert(D.type),he=M(D.internalFormat,Ft,Ut,D.colorSpace),K=D.isVideoTexture!==!0,Lt=ht.__version===void 0||gt===!0,At=yt.dataReady;let It=N(D,Ht);et(r.TEXTURE_CUBE_MAP,D);let St;if(ne){K&&Lt&&n.texStorage2D(r.TEXTURE_CUBE_MAP,It,he,Ht.width,Ht.height);for(let xt=0;xt<6;xt++){St=Tt[xt].mipmaps;for(let wt=0;wt<St.length;wt++){const ae=St[wt];D.format!==Li?Ft!==null?K?At&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt,0,0,ae.width,ae.height,Ft,ae.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt,he,ae.width,ae.height,0,ae.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):K?At&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt,0,0,ae.width,ae.height,Ft,Ut,ae.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt,he,ae.width,ae.height,0,Ft,Ut,ae.data)}}}else{if(St=D.mipmaps,K&&Lt){St.length>0&&It++;const xt=jt(Tt[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,It,he,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(Mt){K?At&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Tt[xt].width,Tt[xt].height,Ft,Ut,Tt[xt].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,he,Tt[xt].width,Tt[xt].height,0,Ft,Ut,Tt[xt].data);for(let wt=0;wt<St.length;wt++){const Ie=St[wt].image[xt].image;K?At&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt+1,0,0,Ie.width,Ie.height,Ft,Ut,Ie.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt+1,he,Ie.width,Ie.height,0,Ft,Ut,Ie.data)}}else{K?At&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Ft,Ut,Tt[xt]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,he,Ft,Ut,Tt[xt]);for(let wt=0;wt<St.length;wt++){const ae=St[wt];K?At&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt+1,0,0,Ft,Ut,ae.image[xt]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt+1,he,Ft,Ut,ae.image[xt])}}}S(D)&&x(r.TEXTURE_CUBE_MAP),ht.__version=yt.version,D.onUpdate&&D.onUpdate(D)}H.__version=D.version}function Ct(H,D,J,gt,yt,ht){const Kt=c.convert(J.format,J.colorSpace),Dt=c.convert(J.type),Wt=M(J.internalFormat,Kt,Dt,J.colorSpace),ne=a.get(D),Mt=a.get(J);if(Mt.__renderTarget=D,!ne.__hasExternalTextures){const Tt=Math.max(1,D.width>>ht),Ht=Math.max(1,D.height>>ht);yt===r.TEXTURE_3D||yt===r.TEXTURE_2D_ARRAY?n.texImage3D(yt,ht,Wt,Tt,Ht,D.depth,0,Kt,Dt,null):n.texImage2D(yt,ht,Wt,Tt,Ht,0,Kt,Dt,null)}n.bindFramebuffer(r.FRAMEBUFFER,H),Ke(D)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,gt,yt,Mt.__webglTexture,0,j(D)):(yt===r.TEXTURE_2D||yt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,gt,yt,Mt.__webglTexture,ht),n.bindFramebuffer(r.FRAMEBUFFER,null)}function Gt(H,D,J){if(r.bindRenderbuffer(r.RENDERBUFFER,H),D.depthBuffer){const gt=D.depthTexture,yt=gt&&gt.isDepthTexture?gt.type:null,ht=A(D.stencilBuffer,yt),Kt=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Ke(D)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,j(D),ht,D.width,D.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,j(D),ht,D.width,D.height):r.renderbufferStorage(r.RENDERBUFFER,ht,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Kt,r.RENDERBUFFER,H)}else{const gt=D.textures;for(let yt=0;yt<gt.length;yt++){const ht=gt[yt],Kt=c.convert(ht.format,ht.colorSpace),Dt=c.convert(ht.type),Wt=M(ht.internalFormat,Kt,Dt,ht.colorSpace);Ke(D)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,j(D),Wt,D.width,D.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,j(D),Wt,D.width,D.height):r.renderbufferStorage(r.RENDERBUFFER,Wt,D.width,D.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Bt(H,D,J){const gt=D.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(r.FRAMEBUFFER,H),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const yt=a.get(D.depthTexture);if(yt.__renderTarget=D,(!yt.__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)&&(D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0),gt){if(yt.__webglInit===void 0&&(yt.__webglInit=!0,D.depthTexture.addEventListener("dispose",L)),yt.__webglTexture===void 0){yt.__webglTexture=r.createTexture(),n.bindTexture(r.TEXTURE_CUBE_MAP,yt.__webglTexture),et(r.TEXTURE_CUBE_MAP,D.depthTexture);const ne=c.convert(D.depthTexture.format),Mt=c.convert(D.depthTexture.type);let Tt;D.depthTexture.format===Ua?Tt=r.DEPTH_COMPONENT24:D.depthTexture.format===Hs&&(Tt=r.DEPTH24_STENCIL8);for(let Ht=0;Ht<6;Ht++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,0,Tt,D.width,D.height,0,ne,Mt,null)}}else G(D.depthTexture,0);const ht=yt.__webglTexture,Kt=j(D),Dt=gt?r.TEXTURE_CUBE_MAP_POSITIVE_X+J:r.TEXTURE_2D,Wt=D.depthTexture.format===Hs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(D.depthTexture.format===Ua)Ke(D)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Wt,Dt,ht,0,Kt):r.framebufferTexture2D(r.FRAMEBUFFER,Wt,Dt,ht,0);else if(D.depthTexture.format===Hs)Ke(D)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Wt,Dt,ht,0,Kt):r.framebufferTexture2D(r.FRAMEBUFFER,Wt,Dt,ht,0);else throw new Error("Unknown depthTexture format")}function le(H){const D=a.get(H),J=H.isWebGLCubeRenderTarget===!0;if(D.__boundDepthTexture!==H.depthTexture){const gt=H.depthTexture;if(D.__depthDisposeCallback&&D.__depthDisposeCallback(),gt){const yt=()=>{delete D.__boundDepthTexture,delete D.__depthDisposeCallback,gt.removeEventListener("dispose",yt)};gt.addEventListener("dispose",yt),D.__depthDisposeCallback=yt}D.__boundDepthTexture=gt}if(H.depthTexture&&!D.__autoAllocateDepthBuffer)if(J)for(let gt=0;gt<6;gt++)Bt(D.__webglFramebuffer[gt],H,gt);else{const gt=H.texture.mipmaps;gt&&gt.length>0?Bt(D.__webglFramebuffer[0],H,0):Bt(D.__webglFramebuffer,H,0)}else if(J){D.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(n.bindFramebuffer(r.FRAMEBUFFER,D.__webglFramebuffer[gt]),D.__webglDepthbuffer[gt]===void 0)D.__webglDepthbuffer[gt]=r.createRenderbuffer(),Gt(D.__webglDepthbuffer[gt],H,!1);else{const yt=H.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=D.__webglDepthbuffer[gt];r.bindRenderbuffer(r.RENDERBUFFER,ht),r.framebufferRenderbuffer(r.FRAMEBUFFER,yt,r.RENDERBUFFER,ht)}}else{const gt=H.texture.mipmaps;if(gt&&gt.length>0?n.bindFramebuffer(r.FRAMEBUFFER,D.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,D.__webglFramebuffer),D.__webglDepthbuffer===void 0)D.__webglDepthbuffer=r.createRenderbuffer(),Gt(D.__webglDepthbuffer,H,!1);else{const yt=H.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=D.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ht),r.framebufferRenderbuffer(r.FRAMEBUFFER,yt,r.RENDERBUFFER,ht)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function Ae(H,D,J){const gt=a.get(H);D!==void 0&&Ct(gt.__webglFramebuffer,H,H.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),J!==void 0&&le(H)}function me(H){const D=H.texture,J=a.get(H),gt=a.get(D);H.addEventListener("dispose",U);const yt=H.textures,ht=H.isWebGLCubeRenderTarget===!0,Kt=yt.length>1;if(Kt||(gt.__webglTexture===void 0&&(gt.__webglTexture=r.createTexture()),gt.__version=D.version,u.memory.textures++),ht){J.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(D.mipmaps&&D.mipmaps.length>0){J.__webglFramebuffer[Dt]=[];for(let Wt=0;Wt<D.mipmaps.length;Wt++)J.__webglFramebuffer[Dt][Wt]=r.createFramebuffer()}else J.__webglFramebuffer[Dt]=r.createFramebuffer()}else{if(D.mipmaps&&D.mipmaps.length>0){J.__webglFramebuffer=[];for(let Dt=0;Dt<D.mipmaps.length;Dt++)J.__webglFramebuffer[Dt]=r.createFramebuffer()}else J.__webglFramebuffer=r.createFramebuffer();if(Kt)for(let Dt=0,Wt=yt.length;Dt<Wt;Dt++){const ne=a.get(yt[Dt]);ne.__webglTexture===void 0&&(ne.__webglTexture=r.createTexture(),u.memory.textures++)}if(H.samples>0&&Ke(H)===!1){J.__webglMultisampledFramebuffer=r.createFramebuffer(),J.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Dt=0;Dt<yt.length;Dt++){const Wt=yt[Dt];J.__webglColorRenderbuffer[Dt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,J.__webglColorRenderbuffer[Dt]);const ne=c.convert(Wt.format,Wt.colorSpace),Mt=c.convert(Wt.type),Tt=M(Wt.internalFormat,ne,Mt,Wt.colorSpace,H.isXRRenderTarget===!0),Ht=j(H);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ht,Tt,H.width,H.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Dt,r.RENDERBUFFER,J.__webglColorRenderbuffer[Dt])}r.bindRenderbuffer(r.RENDERBUFFER,null),H.depthBuffer&&(J.__webglDepthRenderbuffer=r.createRenderbuffer(),Gt(J.__webglDepthRenderbuffer,H,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ht){n.bindTexture(r.TEXTURE_CUBE_MAP,gt.__webglTexture),et(r.TEXTURE_CUBE_MAP,D);for(let Dt=0;Dt<6;Dt++)if(D.mipmaps&&D.mipmaps.length>0)for(let Wt=0;Wt<D.mipmaps.length;Wt++)Ct(J.__webglFramebuffer[Dt][Wt],H,D,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Wt);else Ct(J.__webglFramebuffer[Dt],H,D,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);S(D)&&x(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Kt){for(let Dt=0,Wt=yt.length;Dt<Wt;Dt++){const ne=yt[Dt],Mt=a.get(ne);let Tt=r.TEXTURE_2D;(H.isWebGL3DRenderTarget||H.isWebGLArrayRenderTarget)&&(Tt=H.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Tt,Mt.__webglTexture),et(Tt,ne),Ct(J.__webglFramebuffer,H,ne,r.COLOR_ATTACHMENT0+Dt,Tt,0),S(ne)&&x(Tt)}n.unbindTexture()}else{let Dt=r.TEXTURE_2D;if((H.isWebGL3DRenderTarget||H.isWebGLArrayRenderTarget)&&(Dt=H.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Dt,gt.__webglTexture),et(Dt,D),D.mipmaps&&D.mipmaps.length>0)for(let Wt=0;Wt<D.mipmaps.length;Wt++)Ct(J.__webglFramebuffer[Wt],H,D,r.COLOR_ATTACHMENT0,Dt,Wt);else Ct(J.__webglFramebuffer,H,D,r.COLOR_ATTACHMENT0,Dt,0);S(D)&&x(Dt),n.unbindTexture()}H.depthBuffer&&le(H)}function _e(H){const D=H.textures;for(let J=0,gt=D.length;J<gt;J++){const yt=D[J];if(S(yt)){const ht=T(H),Kt=a.get(yt).__webglTexture;n.bindTexture(ht,Kt),x(ht),n.unbindTexture()}}}const Ue=[],ue=[];function sn(H){if(H.samples>0){if(Ke(H)===!1){const D=H.textures,J=H.width,gt=H.height;let yt=r.COLOR_BUFFER_BIT;const ht=H.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Kt=a.get(H),Dt=D.length>1;if(Dt)for(let ne=0;ne<D.length;ne++)n.bindFramebuffer(r.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,Kt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer);const Wt=H.texture.mipmaps;Wt&&Wt.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer);for(let ne=0;ne<D.length;ne++){if(H.resolveDepthBuffer&&(H.depthBuffer&&(yt|=r.DEPTH_BUFFER_BIT),H.stencilBuffer&&H.resolveStencilBuffer&&(yt|=r.STENCIL_BUFFER_BIT)),Dt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Kt.__webglColorRenderbuffer[ne]);const Mt=a.get(D[ne]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Mt,0)}r.blitFramebuffer(0,0,J,gt,0,0,J,gt,yt,r.NEAREST),p===!0&&(Ue.length=0,ue.length=0,Ue.push(r.COLOR_ATTACHMENT0+ne),H.depthBuffer&&H.resolveDepthBuffer===!1&&(Ue.push(ht),ue.push(ht),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ue)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ue))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Dt)for(let ne=0;ne<D.length;ne++){n.bindFramebuffer(r.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.RENDERBUFFER,Kt.__webglColorRenderbuffer[ne]);const Mt=a.get(D[ne]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,Kt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.TEXTURE_2D,Mt,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer)}else if(H.depthBuffer&&H.resolveDepthBuffer===!1&&p){const D=H.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[D])}}}function j(H){return Math.min(o.maxSamples,H.samples)}function Ke(H){const D=a.get(H);return H.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function be(H){const D=u.render.frame;g.get(H)!==D&&(g.set(H,D),H.update())}function Pe(H,D){const J=H.colorSpace,gt=H.format,yt=H.type;return H.isCompressedTexture===!0||H.isVideoTexture===!0||J!==$r&&J!==us&&(Ee.getTransfer(J)===Fe?(gt!==Li||yt!==gi)&&se("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):De("WebGLTextures: Unsupported texture color space:",J)),D}function jt(H){return typeof HTMLImageElement<"u"&&H instanceof HTMLImageElement?(d.width=H.naturalWidth||H.width,d.height=H.naturalHeight||H.height):typeof VideoFrame<"u"&&H instanceof VideoFrame?(d.width=H.displayWidth,d.height=H.displayHeight):(d.width=H.width,d.height=H.height),d}this.allocateTextureUnit=X,this.resetTextureUnits=k,this.setTexture2D=G,this.setTexture2DArray=F,this.setTexture3D=V,this.setTextureCube=Q,this.rebindTextures=Ae,this.setupRenderTarget=me,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=sn,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=Ke,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function w2(r,t){function n(a,o=us){let c;const u=Ee.getTransfer(o);if(a===gi)return r.UNSIGNED_BYTE;if(a===tm)return r.UNSIGNED_SHORT_4_4_4_4;if(a===em)return r.UNSIGNED_SHORT_5_5_5_1;if(a===Fv)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===Iv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(a===Pv)return r.BYTE;if(a===zv)return r.SHORT;if(a===gl)return r.UNSIGNED_SHORT;if(a===$p)return r.INT;if(a===ea)return r.UNSIGNED_INT;if(a===Qi)return r.FLOAT;if(a===_i)return r.HALF_FLOAT;if(a===Bv)return r.ALPHA;if(a===Hv)return r.RGB;if(a===Li)return r.RGBA;if(a===Ua)return r.DEPTH_COMPONENT;if(a===Hs)return r.DEPTH_STENCIL;if(a===Gv)return r.RED;if(a===nm)return r.RED_INTEGER;if(a===Jr)return r.RG;if(a===im)return r.RG_INTEGER;if(a===am)return r.RGBA_INTEGER;if(a===Mu||a===bu||a===Eu||a===Tu)if(u===Fe)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Mu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===bu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Mu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===bu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Eu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Tu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===np||a===ip||a===ap||a===sp)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===np)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===ip)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===ap)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===sp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===rp||a===op||a===lp||a===cp||a===up||a===fp||a===hp)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(a===rp||a===op)return u===Fe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===lp)return u===Fe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(a===cp)return c.COMPRESSED_R11_EAC;if(a===up)return c.COMPRESSED_SIGNED_R11_EAC;if(a===fp)return c.COMPRESSED_RG11_EAC;if(a===hp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===dp||a===pp||a===mp||a===gp||a===_p||a===vp||a===xp||a===yp||a===Sp||a===Mp||a===bp||a===Ep||a===Tp||a===Ap)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(a===dp)return u===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===pp)return u===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===mp)return u===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===gp)return u===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===_p)return u===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===vp)return u===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===xp)return u===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===yp)return u===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Sp)return u===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Mp)return u===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===bp)return u===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Ep)return u===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Tp)return u===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Ap)return u===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Cp||a===Rp||a===wp)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(a===Cp)return u===Fe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Rp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===wp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Dp||a===Up||a===Np||a===Lp)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(a===Dp)return c.COMPRESSED_RED_RGTC1_EXT;if(a===Up)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Np)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Lp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===_l?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:n}}const D2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,U2=`
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

}`;class N2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const a=new ex(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new Bn({vertexShader:D2,fragmentShader:U2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new vi(new Ws(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class L2 extends Xs{constructor(t,n){super();const a=this;let o=null,c=1,u=null,f="local-floor",p=1,d=null,g=null,_=null,v=null,y=null,E=null;const R=typeof XRWebGLBinding<"u",S=new N2,x={},T=n.getContextAttributes();let M=null,A=null;const N=[],L=[],U=new Rt;let z=null;const C=new Ui;C.viewport=new ln;const w=new Ui;w.viewport=new ln;const I=[C,w],k=new Ib;let X=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let ut=N[it];return ut===void 0&&(ut=new Td,N[it]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(it){let ut=N[it];return ut===void 0&&(ut=new Td,N[it]=ut),ut.getGripSpace()},this.getHand=function(it){let ut=N[it];return ut===void 0&&(ut=new Td,N[it]=ut),ut.getHandSpace()};function G(it){const ut=L.indexOf(it.inputSource);if(ut===-1)return;const Ct=N[ut];Ct!==void 0&&(Ct.update(it.inputSource,it.frame,d||u),Ct.dispatchEvent({type:it.type,data:it.inputSource}))}function F(){o.removeEventListener("select",G),o.removeEventListener("selectstart",G),o.removeEventListener("selectend",G),o.removeEventListener("squeeze",G),o.removeEventListener("squeezestart",G),o.removeEventListener("squeezeend",G),o.removeEventListener("end",F),o.removeEventListener("inputsourceschange",V);for(let it=0;it<N.length;it++){const ut=L[it];ut!==null&&(L[it]=null,N[it].disconnect(ut))}X=null,q=null,S.reset();for(const it in x)delete x[it];t.setRenderTarget(M),y=null,v=null,_=null,o=null,A=null,Ot.stop(),a.isPresenting=!1,t.setPixelRatio(z),t.setSize(U.width,U.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){c=it,a.isPresenting===!0&&se("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){f=it,a.isPresenting===!0&&se("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(it){d=it},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return _===null&&R&&(_=new XRWebGLBinding(o,n)),_},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(it){if(o=it,o!==null){if(M=t.getRenderTarget(),o.addEventListener("select",G),o.addEventListener("selectstart",G),o.addEventListener("selectend",G),o.addEventListener("squeeze",G),o.addEventListener("squeezestart",G),o.addEventListener("squeezeend",G),o.addEventListener("end",F),o.addEventListener("inputsourceschange",V),T.xrCompatible!==!0&&await n.makeXRCompatible(),z=t.getPixelRatio(),t.getSize(U),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ct=null,Gt=null,Bt=null;T.depth&&(Bt=T.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ct=T.stencil?Hs:Ua,Gt=T.stencil?_l:ea);const le={colorFormat:n.RGBA8,depthFormat:Bt,scaleFactor:c};_=this.getBinding(),v=_.createProjectionLayer(le),o.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),A=new ri(v.textureWidth,v.textureHeight,{format:Li,type:gi,depthTexture:new yl(v.textureWidth,v.textureHeight,Gt,void 0,void 0,void 0,void 0,void 0,void 0,Ct),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Ct={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(o,n,Ct),o.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),A=new ri(y.framebufferWidth,y.framebufferHeight,{format:Li,type:gi,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(p),d=null,u=await o.requestReferenceSpace(f),Ot.setContext(o),Ot.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function V(it){for(let ut=0;ut<it.removed.length;ut++){const Ct=it.removed[ut],Gt=L.indexOf(Ct);Gt>=0&&(L[Gt]=null,N[Gt].disconnect(Ct))}for(let ut=0;ut<it.added.length;ut++){const Ct=it.added[ut];let Gt=L.indexOf(Ct);if(Gt===-1){for(let le=0;le<N.length;le++)if(le>=L.length){L.push(Ct),Gt=le;break}else if(L[le]===null){L[le]=Ct,Gt=le;break}if(Gt===-1)break}const Bt=N[Gt];Bt&&Bt.connect(Ct)}}const Q=new W,pt=new W;function dt(it,ut,Ct){Q.setFromMatrixPosition(ut.matrixWorld),pt.setFromMatrixPosition(Ct.matrixWorld);const Gt=Q.distanceTo(pt),Bt=ut.projectionMatrix.elements,le=Ct.projectionMatrix.elements,Ae=Bt[14]/(Bt[10]-1),me=Bt[14]/(Bt[10]+1),_e=(Bt[9]+1)/Bt[5],Ue=(Bt[9]-1)/Bt[5],ue=(Bt[8]-1)/Bt[0],sn=(le[8]+1)/le[0],j=Ae*ue,Ke=Ae*sn,be=Gt/(-ue+sn),Pe=be*-ue;if(ut.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(Pe),it.translateZ(be),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Bt[10]===-1)it.projectionMatrix.copy(ut.projectionMatrix),it.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const jt=Ae+be,H=me+be,D=j-Pe,J=Ke+(Gt-Pe),gt=_e*me/H*jt,yt=Ue*me/H*jt;it.projectionMatrix.makePerspective(D,J,gt,yt,jt,H),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function B(it,ut){ut===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(ut.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(o===null)return;let ut=it.near,Ct=it.far;S.texture!==null&&(S.depthNear>0&&(ut=S.depthNear),S.depthFar>0&&(Ct=S.depthFar)),k.near=w.near=C.near=ut,k.far=w.far=C.far=Ct,(X!==k.near||q!==k.far)&&(o.updateRenderState({depthNear:k.near,depthFar:k.far}),X=k.near,q=k.far),k.layers.mask=it.layers.mask|6,C.layers.mask=k.layers.mask&3,w.layers.mask=k.layers.mask&5;const Gt=it.parent,Bt=k.cameras;B(k,Gt);for(let le=0;le<Bt.length;le++)B(Bt[le],Gt);Bt.length===2?dt(k,C,w):k.projectionMatrix.copy(C.projectionMatrix),et(it,k,Gt)};function et(it,ut,Ct){Ct===null?it.matrix.copy(ut.matrixWorld):(it.matrix.copy(Ct.matrixWorld),it.matrix.invert(),it.matrix.multiply(ut.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(ut.projectionMatrix),it.projectionMatrixInverse.copy(ut.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=Op*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(v===null&&y===null))return p},this.setFoveation=function(it){p=it,v!==null&&(v.fixedFoveation=it),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=it)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(k)},this.getCameraTexture=function(it){return x[it]};let ft=null;function bt(it,ut){if(g=ut.getViewerPose(d||u),E=ut,g!==null){const Ct=g.views;y!==null&&(t.setRenderTargetFramebuffer(A,y.framebuffer),t.setRenderTarget(A));let Gt=!1;Ct.length!==k.cameras.length&&(k.cameras.length=0,Gt=!0);for(let me=0;me<Ct.length;me++){const _e=Ct[me];let Ue=null;if(y!==null)Ue=y.getViewport(_e);else{const sn=_.getViewSubImage(v,_e);Ue=sn.viewport,me===0&&(t.setRenderTargetTextures(A,sn.colorTexture,sn.depthStencilTexture),t.setRenderTarget(A))}let ue=I[me];ue===void 0&&(ue=new Ui,ue.layers.enable(me),ue.viewport=new ln,I[me]=ue),ue.matrix.fromArray(_e.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(_e.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),me===0&&(k.matrix.copy(ue.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Gt===!0&&k.cameras.push(ue)}const Bt=o.enabledFeatures;if(Bt&&Bt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&R){_=a.getBinding();const me=_.getDepthInformation(Ct[0]);me&&me.isValid&&me.texture&&S.init(me,o.renderState)}if(Bt&&Bt.includes("camera-access")&&R){t.state.unbindTexture(),_=a.getBinding();for(let me=0;me<Ct.length;me++){const _e=Ct[me].camera;if(_e){let Ue=x[_e];Ue||(Ue=new ex,x[_e]=Ue);const ue=_.getCameraImage(_e);Ue.sourceTexture=ue}}}}for(let Ct=0;Ct<N.length;Ct++){const Gt=L[Ct],Bt=N[Ct];Gt!==null&&Bt!==void 0&&Bt.update(Gt,ut,d||u)}ft&&ft(it,ut),ut.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:ut}),E=null}const Ot=new px;Ot.setAnimationLoop(bt),this.setAnimationLoop=function(it){ft=it},this.dispose=function(){}}}const zs=new na,O2=new tn;function P2(r,t){function n(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function a(S,x){x.color.getRGB(S.fogColor.value,Zv(r)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function o(S,x,T,M,A){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(S,x):x.isMeshToonMaterial?(c(S,x),_(S,x)):x.isMeshPhongMaterial?(c(S,x),g(S,x)):x.isMeshStandardMaterial?(c(S,x),v(S,x),x.isMeshPhysicalMaterial&&y(S,x,A)):x.isMeshMatcapMaterial?(c(S,x),E(S,x)):x.isMeshDepthMaterial?c(S,x):x.isMeshDistanceMaterial?(c(S,x),R(S,x)):x.isMeshNormalMaterial?c(S,x):x.isLineBasicMaterial?(u(S,x),x.isLineDashedMaterial&&f(S,x)):x.isPointsMaterial?p(S,x,T,M):x.isSpriteMaterial?d(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,n(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===si&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,n(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===si&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,n(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,n(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const T=t.get(x),M=T.envMap,A=T.envMapRotation;M&&(S.envMap.value=M,zs.copy(A),zs.x*=-1,zs.y*=-1,zs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(zs.y*=-1,zs.z*=-1),S.envMapRotation.value.setFromMatrix4(O2.makeRotationFromEuler(zs)),S.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,S.aoMapTransform))}function u(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform))}function f(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function p(S,x,T,M){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*T,S.scale.value=M*.5,x.map&&(S.map.value=x.map,n(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function d(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function g(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function _(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function v(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,T){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===si&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=T.texture,S.transmissionSamplerSize.value.set(T.width,T.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,x){x.matcap&&(S.matcap.value=x.matcap)}function R(S,x){const T=t.get(x).light;S.referencePosition.value.setFromMatrixPosition(T.matrixWorld),S.nearDistance.value=T.shadow.camera.near,S.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function z2(r,t,n,a){let o={},c={},u=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(T,M){const A=M.program;a.uniformBlockBinding(T,A)}function d(T,M){let A=o[T.id];A===void 0&&(E(T),A=g(T),o[T.id]=A,T.addEventListener("dispose",S));const N=M.program;a.updateUBOMapping(T,N);const L=t.render.frame;c[T.id]!==L&&(v(T),c[T.id]=L)}function g(T){const M=_();T.__bindingPointIndex=M;const A=r.createBuffer(),N=T.__size,L=T.usage;return r.bindBuffer(r.UNIFORM_BUFFER,A),r.bufferData(r.UNIFORM_BUFFER,N,L),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,A),A}function _(){for(let T=0;T<f;T++)if(u.indexOf(T)===-1)return u.push(T),T;return De("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(T){const M=o[T.id],A=T.uniforms,N=T.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let L=0,U=A.length;L<U;L++){const z=Array.isArray(A[L])?A[L]:[A[L]];for(let C=0,w=z.length;C<w;C++){const I=z[C];if(y(I,L,C,N)===!0){const k=I.__offset,X=Array.isArray(I.value)?I.value:[I.value];let q=0;for(let G=0;G<X.length;G++){const F=X[G],V=R(F);typeof F=="number"||typeof F=="boolean"?(I.__data[0]=F,r.bufferSubData(r.UNIFORM_BUFFER,k+q,I.__data)):F.isMatrix3?(I.__data[0]=F.elements[0],I.__data[1]=F.elements[1],I.__data[2]=F.elements[2],I.__data[3]=0,I.__data[4]=F.elements[3],I.__data[5]=F.elements[4],I.__data[6]=F.elements[5],I.__data[7]=0,I.__data[8]=F.elements[6],I.__data[9]=F.elements[7],I.__data[10]=F.elements[8],I.__data[11]=0):(F.toArray(I.__data,q),q+=V.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,k,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(T,M,A,N){const L=T.value,U=M+"_"+A;if(N[U]===void 0)return typeof L=="number"||typeof L=="boolean"?N[U]=L:N[U]=L.clone(),!0;{const z=N[U];if(typeof L=="number"||typeof L=="boolean"){if(z!==L)return N[U]=L,!0}else if(z.equals(L)===!1)return z.copy(L),!0}return!1}function E(T){const M=T.uniforms;let A=0;const N=16;for(let U=0,z=M.length;U<z;U++){const C=Array.isArray(M[U])?M[U]:[M[U]];for(let w=0,I=C.length;w<I;w++){const k=C[w],X=Array.isArray(k.value)?k.value:[k.value];for(let q=0,G=X.length;q<G;q++){const F=X[q],V=R(F),Q=A%N,pt=Q%V.boundary,dt=Q+pt;A+=pt,dt!==0&&N-dt<V.storage&&(A+=N-dt),k.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=A,A+=V.storage}}}const L=A%N;return L>0&&(A+=N-L),T.__size=A,T.__cache={},this}function R(T){const M={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(M.boundary=4,M.storage=4):T.isVector2?(M.boundary=8,M.storage=8):T.isVector3||T.isColor?(M.boundary=16,M.storage=12):T.isVector4?(M.boundary=16,M.storage=16):T.isMatrix3?(M.boundary=48,M.storage=48):T.isMatrix4?(M.boundary=64,M.storage=64):T.isTexture?se("WebGLRenderer: Texture samplers can not be part of an uniforms group."):se("WebGLRenderer: Unsupported uniform value type.",T),M}function S(T){const M=T.target;M.removeEventListener("dispose",S);const A=u.indexOf(M.__bindingPointIndex);u.splice(A,1),r.deleteBuffer(o[M.id]),delete o[M.id],delete c[M.id]}function x(){for(const T in o)r.deleteBuffer(o[T]);u=[],o={},c={}}return{bind:p,update:d,dispose:x}}const F2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Zi=null;function I2(){return Zi===null&&(Zi=new $v(F2,16,16,Jr,_i),Zi.name="DFG_LUT",Zi.minFilter=In,Zi.magFilter=In,Zi.wrapS=wa,Zi.wrapT=wa,Zi.generateMipmaps=!1,Zi.needsUpdate=!0),Zi}class B2{constructor(t={}){const{canvas:n=TM(),context:a=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:y=gi}=t;this.isWebGLRenderer=!0;let E;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=a.getContextAttributes().alpha}else E=u;const R=y,S=new Set([am,im,nm]),x=new Set([gi,ea,gl,_l,tm,em]),T=new Uint32Array(4),M=new Int32Array(4);let A=null,N=null;const L=[],U=[];let z=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ta,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let w=!1;this._outputColorSpace=Di;let I=0,k=0,X=null,q=-1,G=null;const F=new ln,V=new ln;let Q=null;const pt=new ie(0);let dt=0,B=n.width,et=n.height,ft=1,bt=null,Ot=null;const it=new ln(0,0,B,et),ut=new ln(0,0,B,et);let Ct=!1;const Gt=new um;let Bt=!1,le=!1;const Ae=new tn,me=new W,_e=new ln,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ue=!1;function sn(){return X===null?ft:1}let j=a;function Ke(P,$){return n.getContext(P,$)}try{const P={alpha:!0,depth:o,stencil:c,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Yp}`),n.addEventListener("webglcontextlost",ae,!1),n.addEventListener("webglcontextrestored",Ie,!1),n.addEventListener("webglcontextcreationerror",Ce,!1),j===null){const $="webgl2";if(j=Ke($,P),j===null)throw Ke($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw De("WebGLRenderer: "+P.message),P}let be,Pe,jt,H,D,J,gt,yt,ht,Kt,Dt,Wt,ne,Mt,Tt,Ht,Ft,Ut,he,K,Lt,At,It,St;function xt(){be=new IA(j),be.init(),At=new w2(j,be),Pe=new wA(j,be,t,At),jt=new C2(j,be),Pe.reversedDepthBuffer&&v&&jt.buffers.depth.setReversed(!0),H=new GA(j),D=new h2,J=new R2(j,be,jt,D,Pe,At,H),gt=new UA(C),yt=new FA(C),ht=new Wb(j),It=new CA(j,ht),Kt=new BA(j,ht,H,It),Dt=new kA(j,Kt,ht,H),he=new VA(j,Pe,J),Ht=new DA(D),Wt=new f2(C,gt,yt,be,Pe,It,Ht),ne=new P2(C,D),Mt=new p2,Tt=new y2(be),Ut=new AA(C,gt,yt,jt,Dt,E,p),Ft=new T2(C,Dt,Pe),St=new z2(j,H,Pe,jt),K=new RA(j,be,H),Lt=new HA(j,be,H),H.programs=Wt.programs,C.capabilities=Pe,C.extensions=be,C.properties=D,C.renderLists=Mt,C.shadowMap=Ft,C.state=jt,C.info=H}xt(),R!==gi&&(z=new WA(R,n.width,n.height,o,c));const wt=new L2(C,j);this.xr=wt,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const P=be.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=be.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return ft},this.setPixelRatio=function(P){P!==void 0&&(ft=P,this.setSize(B,et,!1))},this.getSize=function(P){return P.set(B,et)},this.setSize=function(P,$,lt=!0){if(wt.isPresenting){se("WebGLRenderer: Can't change size while VR device is presenting.");return}B=P,et=$,n.width=Math.floor(P*ft),n.height=Math.floor($*ft),lt===!0&&(n.style.width=P+"px",n.style.height=$+"px"),z!==null&&z.setSize(n.width,n.height),this.setViewport(0,0,P,$)},this.getDrawingBufferSize=function(P){return P.set(B*ft,et*ft).floor()},this.setDrawingBufferSize=function(P,$,lt){B=P,et=$,ft=lt,n.width=Math.floor(P*lt),n.height=Math.floor($*lt),this.setViewport(0,0,P,$)},this.setEffects=function(P){if(R===gi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let $=0;$<P.length;$++)if(P[$].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(F)},this.getViewport=function(P){return P.copy(it)},this.setViewport=function(P,$,lt,rt){P.isVector4?it.set(P.x,P.y,P.z,P.w):it.set(P,$,lt,rt),jt.viewport(F.copy(it).multiplyScalar(ft).round())},this.getScissor=function(P){return P.copy(ut)},this.setScissor=function(P,$,lt,rt){P.isVector4?ut.set(P.x,P.y,P.z,P.w):ut.set(P,$,lt,rt),jt.scissor(V.copy(ut).multiplyScalar(ft).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(P){jt.setScissorTest(Ct=P)},this.setOpaqueSort=function(P){bt=P},this.setTransparentSort=function(P){Ot=P},this.getClearColor=function(P){return P.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor(...arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha(...arguments)},this.clear=function(P=!0,$=!0,lt=!0){let rt=0;if(P){let nt=!1;if(X!==null){const Nt=X.texture.format;nt=S.has(Nt)}if(nt){const Nt=X.texture.type,Vt=x.has(Nt),Pt=Ut.getClearColor(),kt=Ut.getClearAlpha(),Yt=Pt.r,$t=Pt.g,qt=Pt.b;Vt?(T[0]=Yt,T[1]=$t,T[2]=qt,T[3]=kt,j.clearBufferuiv(j.COLOR,0,T)):(M[0]=Yt,M[1]=$t,M[2]=qt,M[3]=kt,j.clearBufferiv(j.COLOR,0,M))}else rt|=j.COLOR_BUFFER_BIT}$&&(rt|=j.DEPTH_BUFFER_BIT),lt&&(rt|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ae,!1),n.removeEventListener("webglcontextrestored",Ie,!1),n.removeEventListener("webglcontextcreationerror",Ce,!1),Ut.dispose(),Mt.dispose(),Tt.dispose(),D.dispose(),gt.dispose(),yt.dispose(),Dt.dispose(),It.dispose(),St.dispose(),Wt.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",qs),wt.removeEventListener("sessionend",fo),Xi.stop()};function ae(P){P.preventDefault(),v_("WebGLRenderer: Context Lost."),w=!0}function Ie(){v_("WebGLRenderer: Context Restored."),w=!1;const P=H.autoReset,$=Ft.enabled,lt=Ft.autoUpdate,rt=Ft.needsUpdate,nt=Ft.type;xt(),H.autoReset=P,Ft.enabled=$,Ft.autoUpdate=lt,Ft.needsUpdate=rt,Ft.type=nt}function Ce(P){De("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Hn(P){const $=P.target;$.removeEventListener("dispose",Hn),Oi($)}function Oi(P){Dl(P),D.remove(P)}function Dl(P){const $=D.get(P).programs;$!==void 0&&($.forEach(function(lt){Wt.releaseProgram(lt)}),P.isShaderMaterial&&Wt.releaseShaderCache(P))}this.renderBufferDirect=function(P,$,lt,rt,nt,Nt){$===null&&($=Ue);const Vt=nt.isMesh&&nt.matrixWorld.determinant()<0,Pt=ds(P,$,lt,rt,nt);jt.setMaterial(rt,Vt);let kt=lt.index,Yt=1;if(rt.wireframe===!0){if(kt=Kt.getWireframeAttribute(lt),kt===void 0)return;Yt=2}const $t=lt.drawRange,qt=lt.attributes.position;let te=$t.start*Yt,Ne=($t.start+$t.count)*Yt;Nt!==null&&(te=Math.max(te,Nt.start*Yt),Ne=Math.min(Ne,(Nt.start+Nt.count)*Yt)),kt!==null?(te=Math.max(te,0),Ne=Math.min(Ne,kt.count)):qt!=null&&(te=Math.max(te,0),Ne=Math.min(Ne,qt.count));const Qe=Ne-te;if(Qe<0||Qe===1/0)return;It.setup(nt,rt,Pt,lt,kt);let qe,ze=K;if(kt!==null&&(qe=ht.get(kt),ze=Lt,ze.setIndex(qe)),nt.isMesh)rt.wireframe===!0?(jt.setLineWidth(rt.wireframeLinewidth*sn()),ze.setMode(j.LINES)):ze.setMode(j.TRIANGLES);else if(nt.isLine){let Qt=rt.linewidth;Qt===void 0&&(Qt=1),jt.setLineWidth(Qt*sn()),nt.isLineSegments?ze.setMode(j.LINES):nt.isLineLoop?ze.setMode(j.LINE_LOOP):ze.setMode(j.LINE_STRIP)}else nt.isPoints?ze.setMode(j.POINTS):nt.isSprite&&ze.setMode(j.TRIANGLES);if(nt.isBatchedMesh)if(nt._multiDrawInstances!==null)vl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ze.renderMultiDrawInstances(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount,nt._multiDrawInstances);else if(be.get("WEBGL_multi_draw"))ze.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{const Qt=nt._multiDrawStarts,Le=nt._multiDrawCounts,oe=nt._multiDrawCount,Rn=kt?ht.get(kt).bytesPerElement:1,aa=D.get(rt).currentProgram.getUniforms();for(let wn=0;wn<oe;wn++)aa.setValue(j,"_gl_DrawID",wn),ze.render(Qt[wn]/Rn,Le[wn])}else if(nt.isInstancedMesh)ze.renderInstances(te,Qe,nt.count);else if(lt.isInstancedBufferGeometry){const Qt=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Le=Math.min(lt.instanceCount,Qt);ze.renderInstances(te,Qe,Le)}else ze.render(te,Qe)};function co(P,$,lt){P.transparent===!0&&P.side===Yn&&P.forceSinglePass===!1?(P.side=si,P.needsUpdate=!0,Zs(P,$,lt),P.side=hs,P.needsUpdate=!0,Zs(P,$,lt),P.side=Yn):Zs(P,$,lt)}this.compile=function(P,$,lt=null){lt===null&&(lt=P),N=Tt.get(lt),N.init($),U.push(N),lt.traverseVisible(function(nt){nt.isLight&&nt.layers.test($.layers)&&(N.pushLight(nt),nt.castShadow&&N.pushShadow(nt))}),P!==lt&&P.traverseVisible(function(nt){nt.isLight&&nt.layers.test($.layers)&&(N.pushLight(nt),nt.castShadow&&N.pushShadow(nt))}),N.setupLights();const rt=new Set;return P.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;const Nt=nt.material;if(Nt)if(Array.isArray(Nt))for(let Vt=0;Vt<Nt.length;Vt++){const Pt=Nt[Vt];co(Pt,lt,nt),rt.add(Pt)}else co(Nt,lt,nt),rt.add(Nt)}),N=U.pop(),rt},this.compileAsync=function(P,$,lt=null){const rt=this.compile(P,$,lt);return new Promise(nt=>{function Nt(){if(rt.forEach(function(Vt){D.get(Vt).currentProgram.isReady()&&rt.delete(Vt)}),rt.size===0){nt(P);return}setTimeout(Nt,10)}be.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let Ys=null;function uo(P){Ys&&Ys(P)}function qs(){Xi.stop()}function fo(){Xi.start()}const Xi=new px;Xi.setAnimationLoop(uo),typeof self<"u"&&Xi.setContext(self),this.setAnimationLoop=function(P){Ys=P,wt.setAnimationLoop(P),P===null?Xi.stop():Xi.start()},wt.addEventListener("sessionstart",qs),wt.addEventListener("sessionend",fo),this.render=function(P,$){if($!==void 0&&$.isCamera!==!0){De("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const lt=wt.enabled===!0&&wt.isPresenting===!0,rt=z!==null&&(X===null||lt)&&z.begin(C,X);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(wt.cameraAutoUpdate===!0&&wt.updateCamera($),$=wt.getCamera()),P.isScene===!0&&P.onBeforeRender(C,P,$,X),N=Tt.get(P,U.length),N.init($),U.push(N),Ae.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Gt.setFromProjectionMatrix(Ae,Ji,$.reversedDepth),le=this.localClippingEnabled,Bt=Ht.init(this.clippingPlanes,le),A=Mt.get(P,L.length),A.init(),L.push(A),wt.enabled===!0&&wt.isPresenting===!0){const Vt=C.xr.getDepthSensingMesh();Vt!==null&&xi(Vt,$,-1/0,C.sortObjects)}xi(P,$,0,C.sortObjects),A.finish(),C.sortObjects===!0&&A.sort(bt,Ot),ue=wt.enabled===!1||wt.isPresenting===!1||wt.hasDepthSensing()===!1,ue&&Ut.addToRenderList(A,P),this.info.render.frame++,Bt===!0&&Ht.beginShadows();const nt=N.state.shadowsArray;if(Ft.render(nt,P,$),Bt===!0&&Ht.endShadows(),this.info.autoReset===!0&&this.info.reset(),(rt&&z.hasRenderPass())===!1){const Vt=A.opaque,Pt=A.transmissive;if(N.setupLights(),$.isArrayCamera){const kt=$.cameras;if(Pt.length>0)for(let Yt=0,$t=kt.length;Yt<$t;Yt++){const qt=kt[Yt];Cn(Vt,Pt,P,qt)}ue&&Ut.render(P);for(let Yt=0,$t=kt.length;Yt<$t;Yt++){const qt=kt[Yt];hn(A,P,qt,qt.viewport)}}else Pt.length>0&&Cn(Vt,Pt,P,$),ue&&Ut.render(P),hn(A,P,$)}X!==null&&k===0&&(J.updateMultisampleRenderTarget(X),J.updateRenderTargetMipmap(X)),rt&&z.end(C),P.isScene===!0&&P.onAfterRender(C,P,$),It.resetDefaultState(),q=-1,G=null,U.pop(),U.length>0?(N=U[U.length-1],Bt===!0&&Ht.setGlobalState(C.clippingPlanes,N.state.camera)):N=null,L.pop(),L.length>0?A=L[L.length-1]:A=null};function xi(P,$,lt,rt){if(P.visible===!1)return;if(P.layers.test($.layers)){if(P.isGroup)lt=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update($);else if(P.isLight)N.pushLight(P),P.castShadow&&N.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Gt.intersectsSprite(P)){rt&&_e.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Ae);const Vt=Dt.update(P),Pt=P.material;Pt.visible&&A.push(P,Vt,Pt,lt,_e.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Gt.intersectsObject(P))){const Vt=Dt.update(P),Pt=P.material;if(rt&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),_e.copy(P.boundingSphere.center)):(Vt.boundingSphere===null&&Vt.computeBoundingSphere(),_e.copy(Vt.boundingSphere.center)),_e.applyMatrix4(P.matrixWorld).applyMatrix4(Ae)),Array.isArray(Pt)){const kt=Vt.groups;for(let Yt=0,$t=kt.length;Yt<$t;Yt++){const qt=kt[Yt],te=Pt[qt.materialIndex];te&&te.visible&&A.push(P,Vt,te,lt,_e.z,qt)}}else Pt.visible&&A.push(P,Vt,Pt,lt,_e.z,null)}}const Nt=P.children;for(let Vt=0,Pt=Nt.length;Vt<Pt;Vt++)xi(Nt[Vt],$,lt,rt)}function hn(P,$,lt,rt){const{opaque:nt,transmissive:Nt,transparent:Vt}=P;N.setupLightsView(lt),Bt===!0&&Ht.setGlobalState(C.clippingPlanes,lt),rt&&jt.viewport(F.copy(rt)),nt.length>0&&Pi(nt,$,lt),Nt.length>0&&Pi(Nt,$,lt),Vt.length>0&&Pi(Vt,$,lt),jt.buffers.depth.setTest(!0),jt.buffers.depth.setMask(!0),jt.buffers.color.setMask(!0),jt.setPolygonOffset(!1)}function Cn(P,$,lt,rt){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[rt.id]===void 0){const te=be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[rt.id]=new ri(1,1,{generateMipmaps:!0,type:te?_i:gi,minFilter:Bs,samples:Pe.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ee.workingColorSpace})}const Nt=N.state.transmissionRenderTarget[rt.id],Vt=rt.viewport||F;Nt.setSize(Vt.z*C.transmissionResolutionScale,Vt.w*C.transmissionResolutionScale);const Pt=C.getRenderTarget(),kt=C.getActiveCubeFace(),Yt=C.getActiveMipmapLevel();C.setRenderTarget(Nt),C.getClearColor(pt),dt=C.getClearAlpha(),dt<1&&C.setClearColor(16777215,.5),C.clear(),ue&&Ut.render(lt);const $t=C.toneMapping;C.toneMapping=ta;const qt=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),N.setupLightsView(rt),Bt===!0&&Ht.setGlobalState(C.clippingPlanes,rt),Pi(P,lt,rt),J.updateMultisampleRenderTarget(Nt),J.updateRenderTargetMipmap(Nt),be.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let Ne=0,Qe=$.length;Ne<Qe;Ne++){const qe=$[Ne],{object:ze,geometry:Qt,material:Le,group:oe}=qe;if(Le.side===Yn&&ze.layers.test(rt.layers)){const Rn=Le.side;Le.side=si,Le.needsUpdate=!0,js(ze,lt,rt,Qt,Le,oe),Le.side=Rn,Le.needsUpdate=!0,te=!0}}te===!0&&(J.updateMultisampleRenderTarget(Nt),J.updateRenderTargetMipmap(Nt))}C.setRenderTarget(Pt,kt,Yt),C.setClearColor(pt,dt),qt!==void 0&&(rt.viewport=qt),C.toneMapping=$t}function Pi(P,$,lt){const rt=$.isScene===!0?$.overrideMaterial:null;for(let nt=0,Nt=P.length;nt<Nt;nt++){const Vt=P[nt],{object:Pt,geometry:kt,group:Yt}=Vt;let $t=Vt.material;$t.allowOverride===!0&&rt!==null&&($t=rt),Pt.layers.test(lt.layers)&&js(Pt,$,lt,kt,$t,Yt)}}function js(P,$,lt,rt,nt,Nt){P.onBeforeRender(C,$,lt,rt,nt,Nt),P.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),nt.onBeforeRender(C,$,lt,rt,P,Nt),nt.transparent===!0&&nt.side===Yn&&nt.forceSinglePass===!1?(nt.side=si,nt.needsUpdate=!0,C.renderBufferDirect(lt,$,rt,nt,P,Nt),nt.side=hs,nt.needsUpdate=!0,C.renderBufferDirect(lt,$,rt,nt,P,Nt),nt.side=Yn):C.renderBufferDirect(lt,$,rt,nt,P,Nt),P.onAfterRender(C,$,lt,rt,nt,Nt)}function Zs(P,$,lt){$.isScene!==!0&&($=Ue);const rt=D.get(P),nt=N.state.lights,Nt=N.state.shadowsArray,Vt=nt.state.version,Pt=Wt.getParameters(P,nt.state,Nt,$,lt),kt=Wt.getProgramCacheKey(Pt);let Yt=rt.programs;rt.environment=P.isMeshStandardMaterial?$.environment:null,rt.fog=$.fog,rt.envMap=(P.isMeshStandardMaterial?yt:gt).get(P.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&P.envMap===null?$.environmentRotation:P.envMapRotation,Yt===void 0&&(P.addEventListener("dispose",Hn),Yt=new Map,rt.programs=Yt);let $t=Yt.get(kt);if($t!==void 0){if(rt.currentProgram===$t&&rt.lightsStateVersion===Vt)return ho(P,Pt),$t}else Pt.uniforms=Wt.getUniforms(P),P.onBeforeCompile(Pt,C),$t=Wt.acquireProgram(Pt,kt),Yt.set(kt,$t),rt.uniforms=Pt.uniforms;const qt=rt.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(qt.clippingPlanes=Ht.uniform),ho(P,Pt),rt.needsLights=Na(P),rt.lightsStateVersion=Vt,rt.needsLights&&(qt.ambientLightColor.value=nt.state.ambient,qt.lightProbe.value=nt.state.probe,qt.directionalLights.value=nt.state.directional,qt.directionalLightShadows.value=nt.state.directionalShadow,qt.spotLights.value=nt.state.spot,qt.spotLightShadows.value=nt.state.spotShadow,qt.rectAreaLights.value=nt.state.rectArea,qt.ltc_1.value=nt.state.rectAreaLTC1,qt.ltc_2.value=nt.state.rectAreaLTC2,qt.pointLights.value=nt.state.point,qt.pointLightShadows.value=nt.state.pointShadow,qt.hemisphereLights.value=nt.state.hemi,qt.directionalShadowMap.value=nt.state.directionalShadowMap,qt.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,qt.spotShadowMap.value=nt.state.spotShadowMap,qt.spotLightMatrix.value=nt.state.spotLightMatrix,qt.spotLightMap.value=nt.state.spotLightMap,qt.pointShadowMap.value=nt.state.pointShadowMap,qt.pointShadowMatrix.value=nt.state.pointShadowMatrix),rt.currentProgram=$t,rt.uniformsList=null,$t}function Ul(P){if(P.uniformsList===null){const $=P.currentProgram.getUniforms();P.uniformsList=Cu.seqWithValue($.seq,P.uniforms)}return P.uniformsList}function ho(P,$){const lt=D.get(P);lt.outputColorSpace=$.outputColorSpace,lt.batching=$.batching,lt.batchingColor=$.batchingColor,lt.instancing=$.instancing,lt.instancingColor=$.instancingColor,lt.instancingMorph=$.instancingMorph,lt.skinning=$.skinning,lt.morphTargets=$.morphTargets,lt.morphNormals=$.morphNormals,lt.morphColors=$.morphColors,lt.morphTargetsCount=$.morphTargetsCount,lt.numClippingPlanes=$.numClippingPlanes,lt.numIntersection=$.numClipIntersection,lt.vertexAlphas=$.vertexAlphas,lt.vertexTangents=$.vertexTangents,lt.toneMapping=$.toneMapping}function ds(P,$,lt,rt,nt){$.isScene!==!0&&($=Ue),J.resetTextureUnits();const Nt=$.fog,Vt=rt.isMeshStandardMaterial?$.environment:null,Pt=X===null?C.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:$r,kt=(rt.isMeshStandardMaterial?yt:gt).get(rt.envMap||Vt),Yt=rt.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,$t=!!lt.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),qt=!!lt.morphAttributes.position,te=!!lt.morphAttributes.normal,Ne=!!lt.morphAttributes.color;let Qe=ta;rt.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Qe=C.toneMapping);const qe=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,ze=qe!==void 0?qe.length:0,Qt=D.get(rt),Le=N.state.lights;if(Bt===!0&&(le===!0||P!==G)){const Un=P===G&&rt.id===q;Ht.setState(rt,P,Un)}let oe=!1;rt.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==Le.state.version||Qt.outputColorSpace!==Pt||nt.isBatchedMesh&&Qt.batching===!1||!nt.isBatchedMesh&&Qt.batching===!0||nt.isBatchedMesh&&Qt.batchingColor===!0&&nt.colorTexture===null||nt.isBatchedMesh&&Qt.batchingColor===!1&&nt.colorTexture!==null||nt.isInstancedMesh&&Qt.instancing===!1||!nt.isInstancedMesh&&Qt.instancing===!0||nt.isSkinnedMesh&&Qt.skinning===!1||!nt.isSkinnedMesh&&Qt.skinning===!0||nt.isInstancedMesh&&Qt.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&Qt.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&Qt.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&Qt.instancingMorph===!1&&nt.morphTexture!==null||Qt.envMap!==kt||rt.fog===!0&&Qt.fog!==Nt||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==Ht.numPlanes||Qt.numIntersection!==Ht.numIntersection)||Qt.vertexAlphas!==Yt||Qt.vertexTangents!==$t||Qt.morphTargets!==qt||Qt.morphNormals!==te||Qt.morphColors!==Ne||Qt.toneMapping!==Qe||Qt.morphTargetsCount!==ze)&&(oe=!0):(oe=!0,Qt.__version=rt.version);let Rn=Qt.currentProgram;oe===!0&&(Rn=Zs(rt,$,nt));let aa=!1,wn=!1,yi=!1;const Be=Rn.getUniforms(),Dn=Qt.uniforms;if(jt.useProgram(Rn.program)&&(aa=!0,wn=!0,yi=!0),rt.id!==q&&(q=rt.id,wn=!0),aa||G!==P){jt.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),Be.setValue(j,"projectionMatrix",P.projectionMatrix),Be.setValue(j,"viewMatrix",P.matrixWorldInverse);const Nn=Be.map.cameraPosition;Nn!==void 0&&Nn.setValue(j,me.setFromMatrixPosition(P.matrixWorld)),Pe.logarithmicDepthBuffer&&Be.setValue(j,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Be.setValue(j,"isOrthographic",P.isOrthographicCamera===!0),G!==P&&(G=P,wn=!0,yi=!0)}if(Qt.needsLights&&(Le.state.directionalShadowMap.length>0&&Be.setValue(j,"directionalShadowMap",Le.state.directionalShadowMap,J),Le.state.spotShadowMap.length>0&&Be.setValue(j,"spotShadowMap",Le.state.spotShadowMap,J),Le.state.pointShadowMap.length>0&&Be.setValue(j,"pointShadowMap",Le.state.pointShadowMap,J)),nt.isSkinnedMesh){Be.setOptional(j,nt,"bindMatrix"),Be.setOptional(j,nt,"bindMatrixInverse");const Un=nt.skeleton;Un&&(Un.boneTexture===null&&Un.computeBoneTexture(),Be.setValue(j,"boneTexture",Un.boneTexture,J))}nt.isBatchedMesh&&(Be.setOptional(j,nt,"batchingTexture"),Be.setValue(j,"batchingTexture",nt._matricesTexture,J),Be.setOptional(j,nt,"batchingIdTexture"),Be.setValue(j,"batchingIdTexture",nt._indirectTexture,J),Be.setOptional(j,nt,"batchingColorTexture"),nt._colorsTexture!==null&&Be.setValue(j,"batchingColorTexture",nt._colorsTexture,J));const vn=lt.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&he.update(nt,lt,Rn),(wn||Qt.receiveShadow!==nt.receiveShadow)&&(Qt.receiveShadow=nt.receiveShadow,Be.setValue(j,"receiveShadow",nt.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(Dn.envMap.value=kt,Dn.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&$.environment!==null&&(Dn.envMapIntensity.value=$.environmentIntensity),Dn.dfgLUT!==void 0&&(Dn.dfgLUT.value=I2()),wn&&(Be.setValue(j,"toneMappingExposure",C.toneMappingExposure),Qt.needsLights&&po(Dn,yi),Nt&&rt.fog===!0&&ne.refreshFogUniforms(Dn,Nt),ne.refreshMaterialUniforms(Dn,rt,ft,et,N.state.transmissionRenderTarget[P.id]),Cu.upload(j,Ul(Qt),Dn,J)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Cu.upload(j,Ul(Qt),Dn,J),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Be.setValue(j,"center",nt.center),Be.setValue(j,"modelViewMatrix",nt.modelViewMatrix),Be.setValue(j,"normalMatrix",nt.normalMatrix),Be.setValue(j,"modelMatrix",nt.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const Un=rt.uniformsGroups;for(let Nn=0,Ks=Un.length;Nn<Ks;Nn++){const zi=Un[Nn];St.update(zi,Rn),St.bind(zi,Rn)}}return Rn}function po(P,$){P.ambientLightColor.needsUpdate=$,P.lightProbe.needsUpdate=$,P.directionalLights.needsUpdate=$,P.directionalLightShadows.needsUpdate=$,P.pointLights.needsUpdate=$,P.pointLightShadows.needsUpdate=$,P.spotLights.needsUpdate=$,P.spotLightShadows.needsUpdate=$,P.rectAreaLights.needsUpdate=$,P.hemisphereLights.needsUpdate=$}function Na(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(P,$,lt){const rt=D.get(P);rt.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),D.get(P.texture).__webglTexture=$,D.get(P.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:lt,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,$){const lt=D.get(P);lt.__webglFramebuffer=$,lt.__useDefaultFramebuffer=$===void 0};const La=j.createFramebuffer();this.setRenderTarget=function(P,$=0,lt=0){X=P,I=$,k=lt;let rt=null,nt=!1,Nt=!1;if(P){const Pt=D.get(P);if(Pt.__useDefaultFramebuffer!==void 0){jt.bindFramebuffer(j.FRAMEBUFFER,Pt.__webglFramebuffer),F.copy(P.viewport),V.copy(P.scissor),Q=P.scissorTest,jt.viewport(F),jt.scissor(V),jt.setScissorTest(Q),q=-1;return}else if(Pt.__webglFramebuffer===void 0)J.setupRenderTarget(P);else if(Pt.__hasExternalTextures)J.rebindTextures(P,D.get(P.texture).__webglTexture,D.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const $t=P.depthTexture;if(Pt.__boundDepthTexture!==$t){if($t!==null&&D.has($t)&&(P.width!==$t.image.width||P.height!==$t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(P)}}const kt=P.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Nt=!0);const Yt=D.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Yt[$])?rt=Yt[$][lt]:rt=Yt[$],nt=!0):P.samples>0&&J.useMultisampledRTT(P)===!1?rt=D.get(P).__webglMultisampledFramebuffer:Array.isArray(Yt)?rt=Yt[lt]:rt=Yt,F.copy(P.viewport),V.copy(P.scissor),Q=P.scissorTest}else F.copy(it).multiplyScalar(ft).floor(),V.copy(ut).multiplyScalar(ft).floor(),Q=Ct;if(lt!==0&&(rt=La),jt.bindFramebuffer(j.FRAMEBUFFER,rt)&&jt.drawBuffers(P,rt),jt.viewport(F),jt.scissor(V),jt.setScissorTest(Q),nt){const Pt=D.get(P.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+$,Pt.__webglTexture,lt)}else if(Nt){const Pt=$;for(let kt=0;kt<P.textures.length;kt++){const Yt=D.get(P.textures[kt]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+kt,Yt.__webglTexture,lt,Pt)}}else if(P!==null&&lt!==0){const Pt=D.get(P.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Pt.__webglTexture,lt)}q=-1},this.readRenderTargetPixels=function(P,$,lt,rt,nt,Nt,Vt,Pt=0){if(!(P&&P.isWebGLRenderTarget)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=D.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Vt!==void 0&&(kt=kt[Vt]),kt){jt.bindFramebuffer(j.FRAMEBUFFER,kt);try{const Yt=P.textures[Pt],$t=Yt.format,qt=Yt.type;if(!Pe.textureFormatReadable($t)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pe.textureTypeReadable(qt)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=P.width-rt&&lt>=0&&lt<=P.height-nt&&(P.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Pt),j.readPixels($,lt,rt,nt,At.convert($t),At.convert(qt),Nt))}finally{const Yt=X!==null?D.get(X).__webglFramebuffer:null;jt.bindFramebuffer(j.FRAMEBUFFER,Yt)}}},this.readRenderTargetPixelsAsync=async function(P,$,lt,rt,nt,Nt,Vt,Pt=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=D.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Vt!==void 0&&(kt=kt[Vt]),kt)if($>=0&&$<=P.width-rt&&lt>=0&&lt<=P.height-nt){jt.bindFramebuffer(j.FRAMEBUFFER,kt);const Yt=P.textures[Pt],$t=Yt.format,qt=Yt.type;if(!Pe.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pe.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const te=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,te),j.bufferData(j.PIXEL_PACK_BUFFER,Nt.byteLength,j.STREAM_READ),P.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Pt),j.readPixels($,lt,rt,nt,At.convert($t),At.convert(qt),0);const Ne=X!==null?D.get(X).__webglFramebuffer:null;jt.bindFramebuffer(j.FRAMEBUFFER,Ne);const Qe=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await AM(j,Qe,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,te),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Nt),j.deleteBuffer(te),j.deleteSync(Qe),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,$=null,lt=0){const rt=Math.pow(2,-lt),nt=Math.floor(P.image.width*rt),Nt=Math.floor(P.image.height*rt),Vt=$!==null?$.x:0,Pt=$!==null?$.y:0;J.setTexture2D(P,0),j.copyTexSubImage2D(j.TEXTURE_2D,lt,0,0,Vt,Pt,nt,Nt),jt.unbindTexture()};const ps=j.createFramebuffer(),Oa=j.createFramebuffer();this.copyTextureToTexture=function(P,$,lt=null,rt=null,nt=0,Nt=null){Nt===null&&(nt!==0?(vl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Nt=nt,nt=0):Nt=0);let Vt,Pt,kt,Yt,$t,qt,te,Ne,Qe;const qe=P.isCompressedTexture?P.mipmaps[Nt]:P.image;if(lt!==null)Vt=lt.max.x-lt.min.x,Pt=lt.max.y-lt.min.y,kt=lt.isBox3?lt.max.z-lt.min.z:1,Yt=lt.min.x,$t=lt.min.y,qt=lt.isBox3?lt.min.z:0;else{const vn=Math.pow(2,-nt);Vt=Math.floor(qe.width*vn),Pt=Math.floor(qe.height*vn),P.isDataArrayTexture?kt=qe.depth:P.isData3DTexture?kt=Math.floor(qe.depth*vn):kt=1,Yt=0,$t=0,qt=0}rt!==null?(te=rt.x,Ne=rt.y,Qe=rt.z):(te=0,Ne=0,Qe=0);const ze=At.convert($.format),Qt=At.convert($.type);let Le;$.isData3DTexture?(J.setTexture3D($,0),Le=j.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(J.setTexture2DArray($,0),Le=j.TEXTURE_2D_ARRAY):(J.setTexture2D($,0),Le=j.TEXTURE_2D),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,$.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,$.unpackAlignment);const oe=j.getParameter(j.UNPACK_ROW_LENGTH),Rn=j.getParameter(j.UNPACK_IMAGE_HEIGHT),aa=j.getParameter(j.UNPACK_SKIP_PIXELS),wn=j.getParameter(j.UNPACK_SKIP_ROWS),yi=j.getParameter(j.UNPACK_SKIP_IMAGES);j.pixelStorei(j.UNPACK_ROW_LENGTH,qe.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,qe.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,Yt),j.pixelStorei(j.UNPACK_SKIP_ROWS,$t),j.pixelStorei(j.UNPACK_SKIP_IMAGES,qt);const Be=P.isDataArrayTexture||P.isData3DTexture,Dn=$.isDataArrayTexture||$.isData3DTexture;if(P.isDepthTexture){const vn=D.get(P),Un=D.get($),Nn=D.get(vn.__renderTarget),Ks=D.get(Un.__renderTarget);jt.bindFramebuffer(j.READ_FRAMEBUFFER,Nn.__webglFramebuffer),jt.bindFramebuffer(j.DRAW_FRAMEBUFFER,Ks.__webglFramebuffer);for(let zi=0;zi<kt;zi++)Be&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,D.get(P).__webglTexture,nt,qt+zi),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,D.get($).__webglTexture,Nt,Qe+zi)),j.blitFramebuffer(Yt,$t,Vt,Pt,te,Ne,Vt,Pt,j.DEPTH_BUFFER_BIT,j.NEAREST);jt.bindFramebuffer(j.READ_FRAMEBUFFER,null),jt.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(nt!==0||P.isRenderTargetTexture||D.has(P)){const vn=D.get(P),Un=D.get($);jt.bindFramebuffer(j.READ_FRAMEBUFFER,ps),jt.bindFramebuffer(j.DRAW_FRAMEBUFFER,Oa);for(let Nn=0;Nn<kt;Nn++)Be?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,vn.__webglTexture,nt,qt+Nn):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,vn.__webglTexture,nt),Dn?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Un.__webglTexture,Nt,Qe+Nn):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Un.__webglTexture,Nt),nt!==0?j.blitFramebuffer(Yt,$t,Vt,Pt,te,Ne,Vt,Pt,j.COLOR_BUFFER_BIT,j.NEAREST):Dn?j.copyTexSubImage3D(Le,Nt,te,Ne,Qe+Nn,Yt,$t,Vt,Pt):j.copyTexSubImage2D(Le,Nt,te,Ne,Yt,$t,Vt,Pt);jt.bindFramebuffer(j.READ_FRAMEBUFFER,null),jt.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else Dn?P.isDataTexture||P.isData3DTexture?j.texSubImage3D(Le,Nt,te,Ne,Qe,Vt,Pt,kt,ze,Qt,qe.data):$.isCompressedArrayTexture?j.compressedTexSubImage3D(Le,Nt,te,Ne,Qe,Vt,Pt,kt,ze,qe.data):j.texSubImage3D(Le,Nt,te,Ne,Qe,Vt,Pt,kt,ze,Qt,qe):P.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Nt,te,Ne,Vt,Pt,ze,Qt,qe.data):P.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Nt,te,Ne,qe.width,qe.height,ze,qe.data):j.texSubImage2D(j.TEXTURE_2D,Nt,te,Ne,Vt,Pt,ze,Qt,qe);j.pixelStorei(j.UNPACK_ROW_LENGTH,oe),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Rn),j.pixelStorei(j.UNPACK_SKIP_PIXELS,aa),j.pixelStorei(j.UNPACK_SKIP_ROWS,wn),j.pixelStorei(j.UNPACK_SKIP_IMAGES,yi),Nt===0&&$.generateMipmaps&&j.generateMipmap(Le),jt.unbindTexture()},this.initRenderTarget=function(P){D.get(P).__webglFramebuffer===void 0&&J.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?J.setTextureCube(P,0):P.isData3DTexture?J.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?J.setTexture2DArray(P,0):J.setTexture2D(P,0),jt.unbindTexture()},this.resetState=function(){I=0,k=0,X=null,jt.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Ee._getDrawingBufferColorSpace(t),n.unpackColorSpace=Ee._getUnpackColorSpace()}}const gv={type:"change"},vm={type:"start"},xx={type:"end"},pu=new lm,_v=new Ra,H2=Math.cos(70*RM.DEG2RAD),yn=new W,ni=2*Math.PI,We={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Id=1e-6;class G2 extends kb{constructor(t,n=null){super(t,n),this.state=We.NONE,this.target=new W,this.cursor=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:qr.ROTATE,MIDDLE:qr.DOLLY,RIGHT:qr.PAN},this.touches={ONE:Xr.ROTATE,TWO:Xr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new W,this._lastQuaternion=new Vs,this._lastTargetPosition=new W,this._quat=new Vs().setFromUnitVectors(t.up,new W(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new X_,this._sphericalDelta=new X_,this._scale=1,this._panOffset=new W,this._rotateStart=new Rt,this._rotateEnd=new Rt,this._rotateDelta=new Rt,this._panStart=new Rt,this._panEnd=new Rt,this._panDelta=new Rt,this._dollyStart=new Rt,this._dollyEnd=new Rt,this._dollyDelta=new Rt,this._dollyDirection=new W,this._mouse=new Rt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=k2.bind(this),this._onPointerDown=V2.bind(this),this._onPointerUp=X2.bind(this),this._onContextMenu=Q2.bind(this),this._onMouseWheel=q2.bind(this),this._onKeyDown=j2.bind(this),this._onTouchStart=Z2.bind(this),this._onTouchMove=K2.bind(this),this._onMouseDown=W2.bind(this),this._onMouseMove=Y2.bind(this),this._interceptControlDown=J2.bind(this),this._interceptControlUp=$2.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(gv),this.update(),this.state=We.NONE}update(t=null){const n=this.object.position;yn.copy(n).sub(this.target),yn.applyQuaternion(this._quat),this._spherical.setFromVector3(yn),this.autoRotate&&this.state===We.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let a=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(a)&&isFinite(o)&&(a<-Math.PI?a+=ni:a>Math.PI&&(a-=ni),o<-Math.PI?o+=ni:o>Math.PI&&(o-=ni),a<=o?this._spherical.theta=Math.max(a,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(a+o)/2?Math.max(a,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=u!=this._spherical.radius}if(yn.setFromSpherical(this._spherical),yn.applyQuaternion(this._quatInverse),n.copy(this.target).add(yn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const f=yn.length();u=this._clampDistance(f*this._scale);const p=f-u;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),c=!!p}else if(this.object.isOrthographicCamera){const f=new W(this._mouse.x,this._mouse.y,0);f.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=p!==this.object.zoom;const d=new W(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(f),this.object.updateMatrixWorld(),u=yn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(pu.origin.copy(this.object.position),pu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(pu.direction))<H2?this.object.lookAt(this.target):(_v.setFromNormalAndCoplanarPoint(this.object.up,this.target),pu.intersectPlane(_v,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Id||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Id||this._lastTargetPosition.distanceToSquared(this.target)>Id?(this.dispatchEvent(gv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ni/60*this.autoRotateSpeed*t:ni/60/60*this.autoRotateSpeed}_getZoomScale(t){const n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){yn.setFromMatrixColumn(n,0),yn.multiplyScalar(-t),this._panOffset.add(yn)}_panUp(t,n){this.screenSpacePanning===!0?yn.setFromMatrixColumn(n,1):(yn.setFromMatrixColumn(n,0),yn.crossVectors(this.object.up,yn)),yn.multiplyScalar(t),this._panOffset.add(yn)}_pan(t,n){const a=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;yn.copy(o).sub(this.target);let c=yn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/a.clientHeight,this.object.matrix),this._panUp(2*n*c/a.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/a.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/a.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const a=this.domElement.getBoundingClientRect(),o=t-a.left,c=n-a.top,u=a.width,f=a.height;this._mouse.x=o/u*2-1,this._mouse.y=-(c/f)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(ni*this._rotateDelta.x/n.clientHeight),this._rotateUp(ni*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateStart.set(a,o)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._panStart.set(a,o)}}_handleTouchStartDolly(t){const n=this._getSecondPointerPosition(t),a=t.pageX-n.x,o=t.pageY-n.y,c=Math.sqrt(a*a+o*o);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const a=this._getSecondPointerPosition(t),o=.5*(t.pageX+a.x),c=.5*(t.pageY+a.y);this._rotateEnd.set(o,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(ni*this._rotateDelta.x/n.clientHeight),this._rotateUp(ni*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._panEnd.set(a,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const n=this._getSecondPointerPosition(t),a=t.pageX-n.x,o=t.pageY-n.y,c=Math.sqrt(a*a+o*o);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(t.pageX+n.x)*.5,f=(t.pageY+n.y)*.5;this._updateZoomParameters(u,f)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new Rt,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){const n=t.deltaMode,a={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:a.deltaY*=16;break;case 2:a.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(a.deltaY*=10),a}}function V2(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function k2(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function X2(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(xx),this.state=We.NONE;break;case 1:const t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function W2(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case qr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=We.DOLLY;break;case qr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=We.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=We.ROTATE}break;case qr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=We.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=We.PAN}break;default:this.state=We.NONE}this.state!==We.NONE&&this.dispatchEvent(vm)}function Y2(r){switch(this.state){case We.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case We.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case We.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function q2(r){this.enabled===!1||this.enableZoom===!1||this.state!==We.NONE||(r.preventDefault(),this.dispatchEvent(vm),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(xx))}function j2(r){this.enabled!==!1&&this._handleKeyDown(r)}function Z2(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Xr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=We.TOUCH_ROTATE;break;case Xr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=We.TOUCH_PAN;break;default:this.state=We.NONE}break;case 2:switch(this.touches.TWO){case Xr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=We.TOUCH_DOLLY_PAN;break;case Xr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=We.TOUCH_DOLLY_ROTATE;break;default:this.state=We.NONE}break;default:this.state=We.NONE}this.state!==We.NONE&&this.dispatchEvent(vm)}function K2(r){switch(this._trackPointer(r),this.state){case We.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case We.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case We.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case We.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=We.NONE}}function Q2(r){this.enabled!==!1&&r.preventDefault()}function J2(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function $2(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Ru=0,tC=1,eC=new W,vv=new Vb,Bd=new Ra,xv=new W,mu=new Ni;class nC{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new yv,this.unassigned=new yv,this.vertices=[]}setFromPoints(t){if(t.length>=4){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.vertices.push(new iC(t[n]));this._compute()}return this}setFromObject(t){const n=[];return t.updateMatrixWorld(!0),t.traverse(function(a){const o=a.geometry;if(o!==void 0){const c=o.attributes.position;if(c!==void 0)for(let u=0,f=c.count;u<f;u++){const p=new W;p.fromBufferAttribute(c,u).applyMatrix4(a.matrixWorld),n.push(p)}}}),this.setFromPoints(n)}containsPoint(t){const n=this.faces;for(let a=0,o=n.length;a<o;a++)if(n[a].distanceToPoint(t)>this.tolerance)return!1;return!0}intersectRay(t,n){const a=this.faces;let o=-1/0,c=1/0;for(let u=0,f=a.length;u<f;u++){const p=a[u],d=p.distanceToPoint(t.origin),g=p.normal.dot(t.direction);if(d>0&&g>=0)return null;const _=g!==0?-d/g:0;if(!(_<=0)&&(g>0?c=Math.min(_,c):o=Math.max(_,o),o>c))return null}return o!==-1/0?t.at(o,n):t.at(c,n),n}intersectsRay(t){return this.intersectRay(t,eC)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}_addVertexToFace(t,n){return t.face=n,n.outside===null?this.assigned.append(t):this.assigned.insertBefore(n.outside,t),n.outside=t,this}_removeVertexFromFace(t,n){return t===n.outside&&(t.next!==null&&t.next.face===n?n.outside=t.next:n.outside=null),this.assigned.remove(t),this}_removeAllVerticesFromFace(t){if(t.outside!==null){const n=t.outside;let a=t.outside;for(;a.next!==null&&a.next.face===t;)a=a.next;return this.assigned.removeSubList(n,a),n.prev=a.next=null,t.outside=null,n}}_deleteFaceVertices(t,n){const a=this._removeAllVerticesFromFace(t);if(a!==void 0)if(n===void 0)this.unassigned.appendChain(a);else{let o=a;do{const c=o.next;n.distanceToPoint(o.point)>this.tolerance?this._addVertexToFace(o,n):this.unassigned.append(o),o=c}while(o!==null)}return this}_resolveUnassignedPoints(t){if(this.unassigned.isEmpty()===!1){let n=this.unassigned.first();do{const a=n.next;let o=this.tolerance,c=null;for(let u=0;u<t.length;u++){const f=t[u];if(f.mark===Ru){const p=f.distanceToPoint(n.point);if(p>o&&(o=p,c=f),o>1e3*this.tolerance)break}}c!==null&&this._addVertexToFace(n,c),n=a}while(n!==null)}return this}_computeExtremes(){const t=new W,n=new W,a=[],o=[];for(let c=0;c<3;c++)a[c]=o[c]=this.vertices[0];t.copy(this.vertices[0].point),n.copy(this.vertices[0].point);for(let c=0,u=this.vertices.length;c<u;c++){const f=this.vertices[c],p=f.point;for(let d=0;d<3;d++)p.getComponent(d)<t.getComponent(d)&&(t.setComponent(d,p.getComponent(d)),a[d]=f);for(let d=0;d<3;d++)p.getComponent(d)>n.getComponent(d)&&(n.setComponent(d,p.getComponent(d)),o[d]=f)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(t.x),Math.abs(n.x))+Math.max(Math.abs(t.y),Math.abs(n.y))+Math.max(Math.abs(t.z),Math.abs(n.z))),{min:a,max:o}}_computeInitialHull(){const t=this.vertices,n=this._computeExtremes(),a=n.min,o=n.max;let c=0,u=0;for(let v=0;v<3;v++){const y=o[v].point.getComponent(v)-a[v].point.getComponent(v);y>c&&(c=y,u=v)}const f=a[u],p=o[u];let d,g;c=0,vv.set(f.point,p.point);for(let v=0,y=this.vertices.length;v<y;v++){const E=t[v];if(E!==f&&E!==p){vv.closestPointToPoint(E.point,!0,xv);const R=xv.distanceToSquared(E.point);R>c&&(c=R,d=E)}}c=-1,Bd.setFromCoplanarPoints(f.point,p.point,d.point);for(let v=0,y=this.vertices.length;v<y;v++){const E=t[v];if(E!==f&&E!==p&&E!==d){const R=Math.abs(Bd.distanceToPoint(E.point));R>c&&(c=R,g=E)}}const _=[];if(Bd.distanceToPoint(g.point)<0){_.push(ki.create(f,p,d),ki.create(g,p,f),ki.create(g,d,p),ki.create(g,f,d));for(let v=0;v<3;v++){const y=(v+1)%3;_[v+1].getEdge(2).setTwin(_[0].getEdge(y)),_[v+1].getEdge(1).setTwin(_[y+1].getEdge(0))}}else{_.push(ki.create(f,d,p),ki.create(g,f,p),ki.create(g,p,d),ki.create(g,d,f));for(let v=0;v<3;v++){const y=(v+1)%3;_[v+1].getEdge(2).setTwin(_[0].getEdge((3-v)%3)),_[v+1].getEdge(0).setTwin(_[y+1].getEdge(1))}}for(let v=0;v<4;v++)this.faces.push(_[v]);for(let v=0,y=t.length;v<y;v++){const E=t[v];if(E!==f&&E!==p&&E!==d&&E!==g){c=this.tolerance;let R=null;for(let S=0;S<4;S++){const x=this.faces[S].distanceToPoint(E.point);x>c&&(c=x,R=this.faces[S])}R!==null&&this._addVertexToFace(E,R)}}return this}_reindexFaces(){const t=[];for(let n=0;n<this.faces.length;n++){const a=this.faces[n];a.mark===Ru&&t.push(a)}return this.faces=t,this}_nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let t,n=0;const a=this.assigned.first().face;let o=a.outside;do{const c=a.distanceToPoint(o.point);c>n&&(n=c,t=o),o=o.next}while(o!==null&&o.face===a);return t}}_computeHorizon(t,n,a,o){this._deleteFaceVertices(a),a.mark=tC;let c;n===null?c=n=a.getEdge(0):c=n.next;do{const u=c.twin,f=u.face;f.mark===Ru&&(f.distanceToPoint(t)>this.tolerance?this._computeHorizon(t,u,f,o):o.push(c)),c=c.next}while(c!==n);return this}_addAdjoiningFace(t,n){const a=ki.create(t,n.tail(),n.head());return this.faces.push(a),a.getEdge(-1).setTwin(n.twin),a.getEdge(0)}_addNewFaces(t,n){this.newFaces=[];let a=null,o=null;for(let c=0;c<n.length;c++){const u=n[c],f=this._addAdjoiningFace(t,u);a===null?a=f:f.next.setTwin(o),this.newFaces.push(f.face),o=f}return a.next.setTwin(o),this}_addVertexToHull(t){const n=[];return this.unassigned.clear(),this._removeVertexFromFace(t,t.face),this._computeHorizon(t.point,null,t.face,n),this._addNewFaces(t,n),this._resolveUnassignedPoints(this.newFaces),this}_cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}_compute(){let t;for(this._computeInitialHull();(t=this._nextVertexToAdd())!==void 0;)this._addVertexToHull(t);return this._reindexFaces(),this._cleanup(),this}}class ki{constructor(){this.normal=new W,this.midpoint=new W,this.area=0,this.constant=0,this.outside=null,this.mark=Ru,this.edge=null}static create(t,n,a){const o=new ki,c=new Hd(t,o),u=new Hd(n,o),f=new Hd(a,o);return c.next=f.prev=u,u.next=c.prev=f,f.next=u.prev=c,o.edge=c,o.compute()}getEdge(t){let n=this.edge;for(;t>0;)n=n.next,t--;for(;t<0;)n=n.prev,t++;return n}compute(){const t=this.edge.tail(),n=this.edge.head(),a=this.edge.next.head();return mu.set(t.point,n.point,a.point),mu.getNormal(this.normal),mu.getMidpoint(this.midpoint),this.area=mu.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(t){return this.normal.dot(t)-this.constant}}class Hd{constructor(t,n){this.vertex=t,this.prev=null,this.next=null,this.twin=null,this.face=n}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){const t=this.head(),n=this.tail();return n!==null?n.point.distanceTo(t.point):-1}lengthSquared(){const t=this.head(),n=this.tail();return n!==null?n.point.distanceToSquared(t.point):-1}setTwin(t){return this.twin=t,t.twin=this,this}}class iC{constructor(t){this.point=t,this.prev=null,this.next=null,this.face=null}}class yv{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(t,n){return n.prev=t.prev,n.next=t,n.prev===null?this.head=n:n.prev.next=n,t.prev=n,this}insertAfter(t,n){return n.prev=t,n.next=t.next,n.next===null?this.tail=n:n.next.prev=n,t.next=n,this}append(t){return this.head===null?this.head=t:this.tail.next=t,t.prev=this.tail,t.next=null,this.tail=t,this}appendChain(t){for(this.head===null?this.head=t:this.tail.next=t,t.prev=this.tail;t.next!==null;)t=t.next;return this.tail=t,this}remove(t){return t.prev===null?this.head=t.next:t.prev.next=t.next,t.next===null?this.tail=t.prev:t.next.prev=t.prev,this}removeSubList(t,n){return t.prev===null?this.head=n.next:t.prev.next=n.next,n.next===null?this.tail=t.prev:n.next.prev=t.prev,this}isEmpty(){return this.head===null}}class aC extends an{constructor(t=[]){super();const n=[],a=[],c=new nC().setFromPoints(t).faces;for(let u=0;u<c.length;u++){const f=c[u];let p=f.edge;do{const d=p.head().point;n.push(d.x,d.y,d.z),a.push(f.normal.x,f.normal.y,f.normal.z),p=p.next}while(p!==f.edge)}this.setAttribute("position",new Te(n,3)),this.setAttribute("normal",new Te(a,3))}}const wu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class lo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const sC=new Vu(-1,1,1,-1,0,1);class rC extends an{constructor(){super(),this.setAttribute("position",new Te([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Te([0,2,0,0,2,0],2))}}const oC=new rC;class xm{constructor(t){this._mesh=new vi(oC,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,sC)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class lC extends lo{constructor(t,n="tDiffuse"){super(),this.textureID=n,this.uniforms=null,this.material=null,t instanceof Bn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=xl.clone(t.uniforms),this.material=new Bn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new xm(this.material)}render(t,n,a){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=a.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Sv extends lo{constructor(t,n){super(),this.scene=t,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,n,a){const o=t.getContext(),c=t.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0);let u,f;this.inverse?(u=0,f=1):(u=1,f=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),c.buffers.stencil.setFunc(o.ALWAYS,u,4294967295),c.buffers.stencil.setClear(f),c.buffers.stencil.setLocked(!0),t.setRenderTarget(a),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.color.setMask(!0),c.buffers.depth.setMask(!0),c.buffers.stencil.setLocked(!1),c.buffers.stencil.setFunc(o.EQUAL,1,4294967295),c.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),c.buffers.stencil.setLocked(!0)}}class cC extends lo{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class uC{constructor(t,n){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),n===void 0){const a=t.getSize(new Rt);this._width=a.width,this._height=a.height,n=new ri(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:_i}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new lC(wu),this.copyPass.material.blending=$i,this.clock=new Bb}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,n){this.passes.splice(n,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const n=this.passes.indexOf(t);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(t){for(let n=t+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const n=this.renderer.getRenderTarget();let a=!1;for(let o=0,c=this.passes.length;o<c;o++){const u=this.passes[o];if(u.enabled!==!1){if(u.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(o),u.render(this.renderer,this.writeBuffer,this.readBuffer,t,a),u.needsSwap){if(a){const f=this.renderer.getContext(),p=this.renderer.state.buffers.stencil;p.setFunc(f.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),p.setFunc(f.EQUAL,1,4294967295)}this.swapBuffers()}Sv!==void 0&&(u instanceof Sv?a=!0:u instanceof cC&&(a=!1))}}this.renderer.setRenderTarget(n)}reset(t){if(t===void 0){const n=this.renderer.getSize(new Rt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,n){this._width=t,this._height=n;const a=this._width*this._pixelRatio,o=this._height*this._pixelRatio;this.renderTarget1.setSize(a,o),this.renderTarget2.setSize(a,o);for(let c=0;c<this.passes.length;c++)this.passes[c].setSize(a,o)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class fC extends lo{constructor(t,n,a=null,o=null,c=null){super(),this.scene=t,this.camera=n,this.overrideMaterial=a,this.clearColor=o,this.clearAlpha=c,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ie}render(t,n,a){const o=t.autoClear;t.autoClear=!1;let c,u;this.overrideMaterial!==null&&(u=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(c=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:a),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(c),this.overrideMaterial!==null&&(this.scene.overrideMaterial=u),t.autoClear=o}}const hC={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ie(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ao extends lo{constructor(t,n=1,a,o){super(),this.strength=n,this.radius=a,this.threshold=o,this.resolution=t!==void 0?new Rt(t.x,t.y):new Rt(256,256),this.clearColor=new ie(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let c=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);this.renderTargetBright=new ri(c,u,{type:_i}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let g=0;g<this.nMips;g++){const _=new ri(c,u,{type:_i});_.texture.name="UnrealBloomPass.h"+g,_.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(_);const v=new ri(c,u,{type:_i});v.texture.name="UnrealBloomPass.v"+g,v.texture.generateMipmaps=!1,this.renderTargetsVertical.push(v),c=Math.round(c/2),u=Math.round(u/2)}const f=hC;this.highPassUniforms=xl.clone(f.uniforms),this.highPassUniforms.luminosityThreshold.value=o,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Bn({uniforms:this.highPassUniforms,vertexShader:f.vertexShader,fragmentShader:f.fragmentShader}),this.separableBlurMaterials=[];const p=[6,10,14,18,22];c=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);for(let g=0;g<this.nMips;g++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(p[g])),this.separableBlurMaterials[g].uniforms.invSize.value=new Rt(1/c,1/u),c=Math.round(c/2),u=Math.round(u/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const d=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=d,this.bloomTintColors=[new W(1,1,1),new W(1,1,1),new W(1,1,1),new W(1,1,1),new W(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=xl.clone(wu.uniforms),this.blendMaterial=new Bn({uniforms:this.copyUniforms,vertexShader:wu.vertexShader,fragmentShader:wu.fragmentShader,premultipliedAlpha:!0,blending:Uu,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ie,this._oldClearAlpha=1,this._basic=new Iu,this._fsQuad=new xm(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,n){let a=Math.round(t/2),o=Math.round(n/2);this.renderTargetBright.setSize(a,o);for(let c=0;c<this.nMips;c++)this.renderTargetsHorizontal[c].setSize(a,o),this.renderTargetsVertical[c].setSize(a,o),this.separableBlurMaterials[c].uniforms.invSize.value=new Rt(1/a,1/o),a=Math.round(a/2),o=Math.round(o/2)}render(t,n,a,o,c){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const u=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),c&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=a.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=a.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let f=this.renderTargetBright;for(let p=0;p<this.nMips;p++)this._fsQuad.material=this.separableBlurMaterials[p],this.separableBlurMaterials[p].uniforms.colorTexture.value=f.texture,this.separableBlurMaterials[p].uniforms.direction.value=ao.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[p]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[p].uniforms.colorTexture.value=this.renderTargetsHorizontal[p].texture,this.separableBlurMaterials[p].uniforms.direction.value=ao.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[p]),t.clear(),this._fsQuad.render(t),f=this.renderTargetsVertical[p];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,c&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(a),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=u}_getSeparableBlurMaterial(t){const n=[],a=t/3;for(let o=0;o<t;o++)n.push(.39894*Math.exp(-.5*o*o/(a*a))/a);return new Bn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Rt(.5,.5)},direction:{value:new Rt(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new Bn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}ao.BlurDirectionX=new Rt(1,0);ao.BlurDirectionY=new Rt(0,1);const gu={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class dC extends lo{constructor(){super(),this.isOutputPass=!0,this.uniforms=xl.clone(gu.uniforms),this.material=new fx({name:gu.name,uniforms:this.uniforms,vertexShader:gu.vertexShader,fragmentShader:gu.fragmentShader}),this._fsQuad=new xm(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,n,a){this.uniforms.tDiffuse.value=a.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Ee.getTransfer(this._outputColorSpace)===Fe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===qp?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===jp?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Zp?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===zu?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Qp?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Jp?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Kp&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}function pC(r,t=!1){const n=r[0].index!==null,a=new Set(Object.keys(r[0].attributes)),o=new Set(Object.keys(r[0].morphAttributes)),c={},u={},f=r[0].morphTargetsRelative,p=new an;let d=0;for(let g=0;g<r.length;++g){const _=r[g];let v=0;if(n!==(_.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const y in _.attributes){if(!a.has(y))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+'. All geometries must have compatible attributes; make sure "'+y+'" attribute exists among all geometries, or in none of them.'),null;c[y]===void 0&&(c[y]=[]),c[y].push(_.attributes[y]),v++}if(v!==a.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". Make sure all geometries have the same number of attributes."),null;if(f!==_.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const y in _.morphAttributes){if(!o.has(y))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+".  .morphAttributes must be consistent throughout all geometries."),null;u[y]===void 0&&(u[y]=[]),u[y].push(_.morphAttributes[y])}if(t){let y;if(n)y=_.index.count;else if(_.attributes.position!==void 0)y=_.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". The geometry must have either an index or a position attribute"),null;p.addGroup(d,y,g),d+=y}}if(n){let g=0;const _=[];for(let v=0;v<r.length;++v){const y=r[v].index;for(let E=0;E<y.count;++E)_.push(y.getX(E)+g);g+=r[v].attributes.position.count}p.setIndex(_)}for(const g in c){const _=Mv(c[g]);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+g+" attribute."),null;p.setAttribute(g,_)}for(const g in u){const _=u[g][0].length;if(_===0)break;p.morphAttributes=p.morphAttributes||{},p.morphAttributes[g]=[];for(let v=0;v<_;++v){const y=[];for(let R=0;R<u[g].length;++R)y.push(u[g][R][v]);const E=Mv(y);if(!E)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+g+" morphAttribute."),null;p.morphAttributes[g].push(E)}}return p}function Mv(r){let t,n,a,o=-1,c=0;for(let d=0;d<r.length;++d){const g=r[d];if(t===void 0&&(t=g.array.constructor),t!==g.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(n===void 0&&(n=g.itemSize),n!==g.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(a===void 0&&(a=g.normalized),a!==g.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(o===-1&&(o=g.gpuType),o!==g.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;c+=g.count*n}const u=new t(c),f=new Sn(u,n,a);let p=0;for(let d=0;d<r.length;++d){const g=r[d];if(g.isInterleavedBufferAttribute){const _=p/n;for(let v=0,y=g.count;v<y;v++)for(let E=0;E<n;E++){const R=g.getComponent(v,E);f.setComponent(v+_,E,R)}}else u.set(g.array,p);p+=g.count*n}return o!==void 0&&(f.gpuType=o),f}function yx(r,t=1e-4){t=Math.max(t,Number.EPSILON);const n={},a=r.getIndex(),o=r.getAttribute("position"),c=a?a.count:o.count;let u=0;const f=Object.keys(r.attributes),p={},d={},g=[],_=["getX","getY","getZ","getW"],v=["setX","setY","setZ","setW"];for(let T=0,M=f.length;T<M;T++){const A=f[T],N=r.attributes[A];p[A]=new N.constructor(new N.array.constructor(N.count*N.itemSize),N.itemSize,N.normalized);const L=r.morphAttributes[A];L&&(d[A]||(d[A]=[]),L.forEach((U,z)=>{const C=new U.array.constructor(U.count*U.itemSize);d[A][z]=new U.constructor(C,U.itemSize,U.normalized)}))}const y=t*.5,E=Math.log10(1/t),R=Math.pow(10,E),S=y*R;for(let T=0;T<c;T++){const M=a?a.getX(T):T;let A="";for(let N=0,L=f.length;N<L;N++){const U=f[N],z=r.getAttribute(U),C=z.itemSize;for(let w=0;w<C;w++)A+=`${~~(z[_[w]](M)*R+S)},`}if(A in n)g.push(n[A]);else{for(let N=0,L=f.length;N<L;N++){const U=f[N],z=r.getAttribute(U),C=r.morphAttributes[U],w=z.itemSize,I=p[U],k=d[U];for(let X=0;X<w;X++){const q=_[X],G=v[X];if(I[G](u,z[q](M)),C)for(let F=0,V=C.length;F<V;F++)k[F][G](u,C[F][q](M))}}n[A]=u,g.push(u),u++}}const x=r.clone();for(const T in r.attributes){const M=p[T];if(x.setAttribute(T,new M.constructor(M.array.slice(0,u*M.itemSize),M.itemSize,M.normalized)),T in d)for(let A=0;A<d[T].length;A++){const N=d[T][A];x.morphAttributes[T][A]=new N.constructor(N.array.slice(0,u*N.itemSize),N.itemSize,N.normalized)}}return x.setIndex(g),x}class mC extends vi{constructor(t,n,a=!1,o=!1,c=1e4){const u=new an;super(u,n),this.isMarchingCubes=!0;const f=this,p=new Float32Array(36),d=new Float32Array(36),g=new Float32Array(36);this.enableUvs=a,this.enableColors=o,this.init=function(T){this.resolution=T,this.isolation=80,this.size=T,this.size2=this.size*this.size,this.size3=this.size2*this.size,this.halfsize=this.size/2,this.delta=2/this.size,this.yd=this.size,this.zd=this.size2,this.field=new Float32Array(this.size3),this.normal_cache=new Float32Array(this.size3*3),this.palette=new Float32Array(this.size3*3),this.count=0;const M=c*3;this.positionArray=new Float32Array(M*3);const A=new Sn(this.positionArray,3);A.setUsage(Vc),u.setAttribute("position",A),this.normalArray=new Float32Array(M*3);const N=new Sn(this.normalArray,3);if(N.setUsage(Vc),u.setAttribute("normal",N),this.enableUvs){this.uvArray=new Float32Array(M*2);const L=new Sn(this.uvArray,2);L.setUsage(Vc),u.setAttribute("uv",L)}if(this.enableColors){this.colorArray=new Float32Array(M*3);const L=new Sn(this.colorArray,3);L.setUsage(Vc),u.setAttribute("color",L)}u.boundingSphere=new Cl(new W,1)};function _(T,M,A){return T+(M-T)*A}function v(T,M,A,N,L,U,z,C,w,I){const k=(A-z)/(C-z),X=f.normal_cache;p[M+0]=N+k*f.delta,p[M+1]=L,p[M+2]=U,d[M+0]=_(X[T+0],X[T+3],k),d[M+1]=_(X[T+1],X[T+4],k),d[M+2]=_(X[T+2],X[T+5],k),g[M+0]=_(f.palette[w*3+0],f.palette[I*3+0],k),g[M+1]=_(f.palette[w*3+1],f.palette[I*3+1],k),g[M+2]=_(f.palette[w*3+2],f.palette[I*3+2],k)}function y(T,M,A,N,L,U,z,C,w,I){const k=(A-z)/(C-z),X=f.normal_cache;p[M+0]=N,p[M+1]=L+k*f.delta,p[M+2]=U;const q=T+f.yd*3;d[M+0]=_(X[T+0],X[q+0],k),d[M+1]=_(X[T+1],X[q+1],k),d[M+2]=_(X[T+2],X[q+2],k),g[M+0]=_(f.palette[w*3+0],f.palette[I*3+0],k),g[M+1]=_(f.palette[w*3+1],f.palette[I*3+1],k),g[M+2]=_(f.palette[w*3+2],f.palette[I*3+2],k)}function E(T,M,A,N,L,U,z,C,w,I){const k=(A-z)/(C-z),X=f.normal_cache;p[M+0]=N,p[M+1]=L,p[M+2]=U+k*f.delta;const q=T+f.zd*3;d[M+0]=_(X[T+0],X[q+0],k),d[M+1]=_(X[T+1],X[q+1],k),d[M+2]=_(X[T+2],X[q+2],k),g[M+0]=_(f.palette[w*3+0],f.palette[I*3+0],k),g[M+1]=_(f.palette[w*3+1],f.palette[I*3+1],k),g[M+2]=_(f.palette[w*3+2],f.palette[I*3+2],k)}function R(T){const M=T*3;f.normal_cache[M]===0&&(f.normal_cache[M+0]=f.field[T-1]-f.field[T+1],f.normal_cache[M+1]=f.field[T-f.yd]-f.field[T+f.yd],f.normal_cache[M+2]=f.field[T-f.zd]-f.field[T+f.zd])}function S(T,M,A,N,L){const U=N+1,z=N+f.yd,C=N+f.zd,w=U+f.yd,I=U+f.zd,k=N+f.yd+f.zd,X=U+f.yd+f.zd;let q=0;const G=f.field[N],F=f.field[U],V=f.field[z],Q=f.field[w],pt=f.field[C],dt=f.field[I],B=f.field[k],et=f.field[X];G<L&&(q|=1),F<L&&(q|=2),V<L&&(q|=8),Q<L&&(q|=4),pt<L&&(q|=16),dt<L&&(q|=32),B<L&&(q|=128),et<L&&(q|=64);const ft=gC[q];if(ft===0)return 0;const bt=f.delta,Ot=T+bt,it=M+bt,ut=A+bt;ft&1&&(R(N),R(U),v(N*3,0,L,T,M,A,G,F,N,U)),ft&2&&(R(U),R(w),y(U*3,3,L,Ot,M,A,F,Q,U,w)),ft&4&&(R(z),R(w),v(z*3,6,L,T,it,A,V,Q,z,w)),ft&8&&(R(N),R(z),y(N*3,9,L,T,M,A,G,V,N,z)),ft&16&&(R(C),R(I),v(C*3,12,L,T,M,ut,pt,dt,C,I)),ft&32&&(R(I),R(X),y(I*3,15,L,Ot,M,ut,dt,et,I,X)),ft&64&&(R(k),R(X),v(k*3,18,L,T,it,ut,B,et,k,X)),ft&128&&(R(C),R(k),y(C*3,21,L,T,M,ut,pt,B,C,k)),ft&256&&(R(N),R(C),E(N*3,24,L,T,M,A,G,pt,N,C)),ft&512&&(R(U),R(I),E(U*3,27,L,Ot,M,A,F,dt,U,I)),ft&1024&&(R(w),R(X),E(w*3,30,L,Ot,it,A,Q,et,w,X)),ft&2048&&(R(z),R(k),E(z*3,33,L,T,it,A,V,B,z,k)),q<<=4;let Ct,Gt,Bt,le=0,Ae=0;for(;_u[q+Ae]!=-1;)Ct=q+Ae,Gt=Ct+1,Bt=Ct+2,x(p,d,g,3*_u[Ct],3*_u[Gt],3*_u[Bt]),Ae+=3,le++;return le}function x(T,M,A,N,L,U){const z=f.count*3;if(f.positionArray[z+0]=T[N],f.positionArray[z+1]=T[N+1],f.positionArray[z+2]=T[N+2],f.positionArray[z+3]=T[L],f.positionArray[z+4]=T[L+1],f.positionArray[z+5]=T[L+2],f.positionArray[z+6]=T[U],f.positionArray[z+7]=T[U+1],f.positionArray[z+8]=T[U+2],f.material.flatShading===!0){const C=(M[N+0]+M[L+0]+M[U+0])/3,w=(M[N+1]+M[L+1]+M[U+1])/3,I=(M[N+2]+M[L+2]+M[U+2])/3;f.normalArray[z+0]=C,f.normalArray[z+1]=w,f.normalArray[z+2]=I,f.normalArray[z+3]=C,f.normalArray[z+4]=w,f.normalArray[z+5]=I,f.normalArray[z+6]=C,f.normalArray[z+7]=w,f.normalArray[z+8]=I}else f.normalArray[z+0]=M[N+0],f.normalArray[z+1]=M[N+1],f.normalArray[z+2]=M[N+2],f.normalArray[z+3]=M[L+0],f.normalArray[z+4]=M[L+1],f.normalArray[z+5]=M[L+2],f.normalArray[z+6]=M[U+0],f.normalArray[z+7]=M[U+1],f.normalArray[z+8]=M[U+2];if(f.enableUvs){const C=f.count*2;f.uvArray[C+0]=T[N+0],f.uvArray[C+1]=T[N+2],f.uvArray[C+2]=T[L+0],f.uvArray[C+3]=T[L+2],f.uvArray[C+4]=T[U+0],f.uvArray[C+5]=T[U+2]}f.enableColors&&(f.colorArray[z+0]=A[N+0],f.colorArray[z+1]=A[N+1],f.colorArray[z+2]=A[N+2],f.colorArray[z+3]=A[L+0],f.colorArray[z+4]=A[L+1],f.colorArray[z+5]=A[L+2],f.colorArray[z+6]=A[U+0],f.colorArray[z+7]=A[U+1],f.colorArray[z+8]=A[U+2]),f.count+=3}this.addBall=function(T,M,A,N,L,U){const z=Math.sign(N);N=Math.abs(N);const C=U!=null;let w=new ie(T,M,A);if(C)try{w=U instanceof ie?U:Array.isArray(U)?new ie(Math.min(Math.abs(U[0]),1),Math.min(Math.abs(U[1]),1),Math.min(Math.abs(U[2]),1)):new ie(U)}catch{w=new ie(T,M,A)}const I=this.size*Math.sqrt(N/L),k=A*this.size,X=M*this.size,q=T*this.size;let G=Math.floor(k-I);G<1&&(G=1);let F=Math.floor(k+I);F>this.size-1&&(F=this.size-1);let V=Math.floor(X-I);V<1&&(V=1);let Q=Math.floor(X+I);Q>this.size-1&&(Q=this.size-1);let pt=Math.floor(q-I);pt<1&&(pt=1);let dt=Math.floor(q+I);dt>this.size-1&&(dt=this.size-1);let B,et,ft,bt,Ot,it,ut,Ct,Gt,Bt,le;for(ft=G;ft<F;ft++)for(Ot=this.size2*ft,Ct=ft/this.size-A,Gt=Ct*Ct,et=V;et<Q;et++)for(bt=Ot+this.size*et,ut=et/this.size-M,Bt=ut*ut,B=pt;B<dt;B++)if(it=B/this.size-T,le=N/(1e-6+it*it+Bt+Gt)-L,le>0){this.field[bt+B]+=le*z;const Ae=Math.sqrt((B-q)*(B-q)+(et-X)*(et-X)+(ft-k)*(ft-k))/I,me=1-Ae*Ae*Ae*(Ae*(Ae*6-15)+10);this.palette[(bt+B)*3+0]+=w.r*me,this.palette[(bt+B)*3+1]+=w.g*me,this.palette[(bt+B)*3+2]+=w.b*me}},this.addPlaneX=function(T,M){const A=this.size,N=this.yd,L=this.zd,U=this.field;let z,C,w,I,k,X,q,G=A*Math.sqrt(T/M);for(G>A&&(G=A),z=0;z<G;z++)if(X=z/A,I=X*X,k=T/(1e-4+I)-M,k>0)for(C=0;C<A;C++)for(q=z+C*N,w=0;w<A;w++)U[L*w+q]+=k},this.addPlaneY=function(T,M){const A=this.size,N=this.yd,L=this.zd,U=this.field;let z,C,w,I,k,X,q,G,F=A*Math.sqrt(T/M);for(F>A&&(F=A),C=0;C<F;C++)if(X=C/A,I=X*X,k=T/(1e-4+I)-M,k>0)for(q=C*N,z=0;z<A;z++)for(G=q+z,w=0;w<A;w++)U[L*w+G]+=k},this.addPlaneZ=function(T,M){const A=this.size,N=this.yd,L=this.zd,U=this.field;let z,C,w,I,k,X,q,G,F=A*Math.sqrt(T/M);for(F>A&&(F=A),w=0;w<F;w++)if(X=w/A,I=X*X,k=T/(1e-4+I)-M,k>0)for(q=L*w,C=0;C<A;C++)for(G=q+C*N,z=0;z<A;z++)U[G+z]+=k},this.setCell=function(T,M,A,N){const L=this.size2*A+this.size*M+T;this.field[L]=N},this.getCell=function(T,M,A){const N=this.size2*A+this.size*M+T;return this.field[N]},this.blur=function(T=1){const M=this.field,A=M.slice(),N=this.size,L=this.size2;for(let U=0;U<N;U++)for(let z=0;z<N;z++)for(let C=0;C<N;C++){const w=L*C+N*z+U;let I=A[w],k=1;for(let X=-1;X<=1;X+=2){const q=X+U;if(!(q<0||q>=N))for(let G=-1;G<=1;G+=2){const F=G+z;if(!(F<0||F>=N))for(let V=-1;V<=1;V+=2){const Q=V+C;if(Q<0||Q>=N)continue;const pt=L*Q+N*F+q,dt=A[pt];k++,I+=T*(dt-I)/k}}}M[w]=I}},this.reset=function(){for(let T=0;T<this.size3;T++)this.normal_cache[T*3]=0,this.field[T]=0,this.palette[T*3]=this.palette[T*3+1]=this.palette[T*3+2]=0},this.update=function(){this.count=0;const T=this.size-2;for(let M=1;M<T;M++){const A=this.size2*M,N=(M-this.halfsize)/this.halfsize;for(let L=1;L<T;L++){const U=A+this.size*L,z=(L-this.halfsize)/this.halfsize;for(let C=1;C<T;C++){const w=(C-this.halfsize)/this.halfsize,I=U+C;S(w,z,N,I,this.isolation)}}}this.geometry.setDrawRange(0,this.count),u.getAttribute("position").needsUpdate=!0,u.getAttribute("normal").needsUpdate=!0,this.enableUvs&&(u.getAttribute("uv").needsUpdate=!0),this.enableColors&&(u.getAttribute("color").needsUpdate=!0),this.count/3>c&&console.warn("THREE.MarchingCubes: Geometry buffers too small for rendering. Please create an instance with a higher poly count.")},this.init(t)}}const gC=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]),_u=new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]);function Sx(r,t,n=2.45){const a=r[0],o=new Map(r.map(u=>[u.id,[(u.x-a.x)*n,(u.y-a.y)*n,(u.z-a.z)*n]])),c=[];for(const u of r){const f=o.get(u.id),p=g=>Yr(u.id+":reef:"+g),d=f.map((g,_)=>g+(p("shift"+_)-.5)*.27);c.push({a:d,b:d,r:1.01+p("radius")*.15});for(let g=0;g<5;g++){const _=p(g+"az")*Math.PI*2,v=p(g+"height")*1.5-.7,y=.56+p(g+"reach")*.26,E=[d[0]+Math.cos(_)*y,d[1]+v,d[2]+Math.sin(_)*y];c.push({a:E,b:E,r:.39+p(g+"size")*.25})}}for(const[u,f]of t){const p=o.get(u),d=o.get(f),g=p.map((v,y)=>(v+d[y])/2+(Yr(u+":"+f+":bend:"+y)-.5)*.22),_=.79+Yr(u+":"+f+":neck")*.09;c.push({a:p,b:g,r:_},{a:g,b:d,r:_})}return c}function Mx(r,t,n){const a=n.map((u,f)=>u-t[f]),o=a.reduce((u,f)=>u+f*f,0),c=o?Math.max(0,Math.min(1,a.reduce((u,f,p)=>u+(r[p]-t[p])*f,0)/o)):0;return Math.hypot(...r.map((u,f)=>u-t[f]-a[f]*c))}function _C(r,t){let n=-1;for(const a of t){const o=a.r-Mx(r,a.a,a.b),c=Math.max(.34-Math.abs(n-o),0)/.34;n=Math.max(n,o)+c*c*.085}return n}function vC(r,t){const n=Sx(r,t),a=[1/0,1/0,1/0],o=[-1/0,-1/0,-1/0];for(const S of n)for(let x=0;x<3;x++)a[x]=Math.min(a[x],S.a[x]-S.r-1,S.b[x]-S.r-1),o[x]=Math.max(o[x],S.a[x]+S.r+1,S.b[x]+S.r+1);const c=a.map((S,x)=>(S+o[x])/2),u=Math.max(...o.map((S,x)=>S-a[x])),f=Math.max(28,Math.min(88,Math.ceil(u/.18))),p=u/f,d=new Iu,g=new mC(f,d,!1,!1,12e4);g.isolation=0,g.field.fill(-1);for(const S of n){const x=S.a.map((M,A)=>Math.max(1,Math.floor((Math.min(M,S.b[A])-S.r-.45-c[A]+u/2)/p))),T=S.a.map((M,A)=>Math.min(f-2,Math.ceil((Math.max(M,S.b[A])+S.r+.45-c[A]+u/2)/p)));for(let M=x[2];M<=T[2];M++)for(let A=x[1];A<=T[1];A++)for(let N=x[0];N<=T[0];N++){const L=[N,A,M].map((I,k)=>c[k]-u/2+I*p),U=N+f*(A+f*M),z=S.r-Mx(L,S.a,S.b),C=g.field[U],w=Math.max(.34-Math.abs(C-z),0)/.34;g.field[U]=Math.max(C,z)+w*w*.085}}g.update();const _=new an;for(const S of["position","normal"])_.setAttribute(S,new Sn(g.geometry.attributes[S].array.slice(0,g.count*3),3));_.scale(u/2,u/2,u/2),_.translate(...c);const v=_.attributes.position,y=_.attributes.normal,E=r[0];for(let S=0;S<v.count;S++){const x=v.getX(S),T=v.getY(S),M=v.getZ(S),A=x+E.x*2.45,N=T+E.y*2.45,L=M+E.z*2.45,U=(Gd(A*2.6,N*2.6,L*2.6)-.5)*.32+(Gd(A*6.7+11,N*6.7,L*6.7)-.5)*.13+(Gd(A*15,N*15+7,L*15)-.5)*.035;v.setXYZ(S,x+y.getX(S)*U,T+y.getY(S)*U,M+y.getZ(S)*U)}_.deleteAttribute("normal");const R=yx(_,1e-4);return R.computeVertexNormals(),R.computeBoundingSphere(),_.dispose(),g.geometry.dispose(),d.dispose(),R}function Gd(r,t,n){const a=Math.floor(r),o=Math.floor(t),c=Math.floor(n),u=v=>v*v*(3-2*v),f=u(r-a),p=u(t-o),d=u(n-c),g=(v,y,E)=>{const R=Math.sin(v*127.1+y*311.7+E*74.7)*43758.5453;return R-Math.floor(R)},_=(v,y,E)=>v+(y-v)*E;return _(_(_(g(a,o,c),g(a+1,o,c),f),_(g(a,o+1,c),g(a+1,o+1,c),f),p),_(_(g(a,o,c+1),g(a+1,o,c+1),f),_(g(a,o+1,c+1),g(a+1,o+1,c+1),f),p),d)}function xC(r){const t=new _m({color:"#698f91",roughness:1,metalness:0});return t.onBeforeCompile=n=>{n.uniforms.reefOrigin={value:new W(r.x*2.45,r.y*2.45,r.z*2.45)},n.vertexShader=`varying vec3 vReefStone;
uniform vec3 reefOrigin;
`+n.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vReefStone=position+reefOrigin;`),n.fragmentShader=`varying vec3 vReefStone;
      float stoneHash(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);}
      float stoneNoise(vec3 p){
        vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
        return mix(mix(mix(stoneHash(i),stoneHash(i+vec3(1,0,0)),f.x),mix(stoneHash(i+vec3(0,1,0)),stoneHash(i+vec3(1,1,0)),f.x),f.y),mix(mix(stoneHash(i+vec3(0,0,1)),stoneHash(i+vec3(1,0,1)),f.x),mix(stoneHash(i+vec3(0,1,1)),stoneHash(i+vec3(1,1,1)),f.x),f.y),f.z);
      }
      `+n.fragmentShader,n.fragmentShader=n.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
      float mineral=stoneNoise(vReefStone*2.7);
      float grit=stoneNoise(vReefStone*15.);
      float pores=smoothstep(.60,.84,stoneNoise(vReefStone*32.));
      diffuseColor.rgb*=.80+mineral*.30+grit*.06-pores*.10;
      diffuseColor.rgb=mix(diffuseColor.rgb,diffuseColor.rgb*vec3(.82,1.04,.93),smoothstep(.53,.77,mineral)*.35);
    `),n.fragmentShader=n.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
      float relief=grit*.012+stoneNoise(vReefStone*65.)*.0025-pores*.008;
      vec3 sx=dFdx(-vViewPosition),sy=dFdy(-vViewPosition);
      vec3 r1=cross(sy,normal),r2=cross(normal,sx);
      float det=dot(sx,r1);
      vec3 gradient=sign(det)*(dFdx(relief)*r1+dFdy(relief)*r2);
      normal=normalize(abs(det)*normal-gradient);
    `)},t.customProgramCacheKey=()=>"porous-reef-v1",t}const Du=r=>{let t=0;return()=>Yr(r+":"+t++)},en=(r,t={})=>new _m({color:r,roughness:.78,metalness:0,...t});function fn(r,t,n,a=0,o=0,c=0,u){const f=new vi(t,n);return f.position.set(a,o,c),u&&f.scale.set(...u),f.castShadow=!0,f.receiveShadow=!0,r.add(f),f}function ii(r,t,n,a,o,c,u=c,f=c,p=1){return fn(r,new Hu(1,p),t,n,a,o,[c,u,f])}function ym(r,t,n,a,o=.02,c=o){const u=new W(...n),f=new W(...a),p=f.clone().sub(u),d=fn(r,new Bu(c,o,p.length(),7),t,...u.clone().add(f).multiplyScalar(.5).toArray());return d.quaternion.setFromUnitVectors(new W(0,1,0),p.normalize()),d}function wl(r,t,n,a=.02,o=24){return fn(r,new Gu(new mm(n.map(c=>new W(...c))),o,a,5,!1),t)}function vu(r){const t=new Set,n=new Set;r.traverse(a=>{if(a.geometry&&t.add(a.geometry),a.material)for(const o of Array.isArray(a.material)?a.material:[a.material])n.add(o)}),t.forEach(a=>a.dispose()),n.forEach(a=>{for(const o of["map","bumpMap","roughnessMap","normalMap"])a[o]?.dispose();a.dispose()}),r.clear()}function yC(r){r.updateMatrixWorld(!0);const t=new Map,n=[];r.traverse(a=>{if(a.isMesh&&!Array.isArray(a.material)){const o=a.geometry.clone().applyMatrix4(a.matrixWorld),c=a.material.uuid;t.has(c)||t.set(c,{mat:a.material,geometries:[]}),t.get(c).geometries.push(o.index?o.toNonIndexed():o),n.push(a)}});for(const a of n)a.removeFromParent(),a.geometry.dispose();for(const{mat:a,geometries:o}of t.values()){for(const u of o)u.getAttribute("uv")||u.setAttribute("uv",new Sn(new Float32Array(u.getAttribute("position").count*2),2));const c=pC(o,!1);o.forEach(u=>u.dispose()),c&&fn(r,c,a)}return r}const xu=2.45;function bx(){const t=new Uint8Array(16384),n=Du("porous-stone");for(let o=0;o<64;o++)for(let c=0;c<64;c++){const u=(o*64+c)*4,f=Math.round(120+Math.sin(c*.8+Math.cos(o*.4))*22+n()*70);t[u]=t[u+1]=t[u+2]=f,t[u+3]=255}const a=new $v(t,64,64,Li);return a.wrapS=a.wrapT=Nu,a.repeat.set(3,3),a.magFilter=In,a.needsUpdate=!0,a}function bv(r,t,n,a,o,c=1,u="#476d79"){const f=yx(new Hu(1,4)),p=f.attributes.position;for(let g=0;g<p.count;g++){const _=new W().fromBufferAttribute(p,g),v=1+.06*Math.sin(_.x*9+_.y*7+_.z*13)+.07*Math.cos(_.z*4-_.y*6);_.multiplyScalar(v),p.setXYZ(g,_.x,_.y,_.z)}f.computeVertexNormals();const d=fn(r,f,en(u,{roughness:.97,bumpMap:bx(),bumpScale:.07}),n,a,o,[c*(.8+t()*.3),c*(.7+t()*.5),c*(.7+t()*.4)]);return d.rotation.set(t()*.2,t()*6,t()*.2),d}function Ev(r,t,n,a,o,c=1){const u=en("#88afb9",{side:Yn,roughness:.62}),f=en("#bcdddd",{roughness:.55,emissive:"#366c75",emissiveIntensity:.12});for(let p=0;p<9;p++){const d=new qn;d.position.set(n+(t()-.5)*c*.5,a,o+(t()-.5)*c*.5),d.rotation.y=p*2.4,d.rotation.z=(t()-.5)*.25,r.add(d);const g=new Sl;g.moveTo(0,0);const _=(.45+t()*.4)*c;g.bezierCurveTo(-_*.65,_*.35,-_*.46,_*.95,0,_),g.bezierCurveTo(_*.46,_*.95,_*.65,_*.35,0,0),fn(d,new no(g,18),u);const v=g.getPoints(24).map(y=>[y.x,y.y,.005]);wl(d,f,v,.012*c,40),ym(d,f,[0,0,.015],[0,_*.85,.015],.007*c)}}function Vd(r,t,n,a,o,c=1,u="#79b5bd",f=!1){const p=en(u,{roughness:.65,emissive:f?"#78e9e0":"#143e44",emissiveIntensity:f?1.1:.08}),d=en("#c5f8e6",{emissive:"#88f3d5",emissiveIntensity:f?1.5:.2,roughness:.3}),g=5;for(let _=0;_<g;_++){const v=_*2.4+t(),y=(.45+t()*.5)*c,E=(.13+t()*.16)*c,R=[n+Math.cos(v)*E,a+y,o+Math.sin(v)*E];wl(r,p,[[n,a,o],[n+Math.cos(v)*E*.25,a+y*.5,o+Math.sin(v)*E*.25],R],.042*c,10);for(let S=0;S<2;S++){const x=[R[0]+Math.cos(v+S*2)*.22*c,R[1]+.22*c,R[2]+Math.sin(v+S*2)*.22*c];ym(r,p,[R[0],R[1]-.2*c,R[2]],x,.026*c,.012*c),ii(r,d,...x,.034*c,.045*c,.034*c,0)}}}function Tv(r,t,n,a,o,c=1){const u=en("#a3c8cd",{side:Yn,roughness:.55,emissive:"#2b5960",emissiveIntensity:.14}),f=[n,a,o];for(let p=0;p<13;p++){const d=-1.25+p/12*2.5,g=c*(.85+t()*.15),_=[n+Math.sin(d)*g,a+Math.cos(d)*g,o];if(wl(r,u,[f,[n+Math.sin(d)*g*.55,a+g*.5,o+.03],_],c*.017,10),p){const v=new Sl;v.moveTo(0,0),v.lineTo(Math.sin(d)*g,Math.cos(d)*g),v.lineTo(Math.sin(d-.17)*g,Math.cos(d-.17)*g),v.closePath();const y=fn(r,new no(v),u,n,a,o);y.rotation.y=.15}}}function Av(r,t,n,a,o,c=1.5,u="#408e81"){const f=new qn;f.position.set(n,a,o),r.add(f);const p=en(u,{side:Yn,roughness:.52,emissive:"#12483d",emissiveIntensity:.17});for(let d=0;d<4;d++){const g=new Ws(.16+t()*.17,c*(.65+t()*.35),4,24);g.translate(0,c*.5,0);const _=g.attributes.position;for(let y=0;y<_.count;y++){const E=_.getY(y)/c;_.setX(y,_.getX(y)*(Math.sin(Math.PI*E)*.7+.18)+Math.sin(E*4+d)*c*.12),_.setZ(y,Math.sin(E*4+d)*.06+_.getX(y)*Math.sin(E*6+d)*.55)}g.computeVertexNormals();const v=fn(f,g,p);v.rotation.y=d*2.4,v.rotation.z=(t()-.5)*.25}return f}function SC(r,t){const n=new qn,a=t==="reef-fish"?["#dda052","#d89b96","#57a0c7"]:t==="grass-fish"?["#94bba0","#d8d0a4"]:["#b5e1df","#ecbc8c","#78b6c7"],o=en(a[Math.floor(r()*a.length)],{roughness:.4,metalness:.12}),c=en("#214955",{roughness:.45}),u=en("#c1e3d1",{side:Yn,transparent:!0,opacity:.76,roughness:.6}),f=t==="grass-fish"?.32:.27;ii(n,o,0,0,0,f,t==="grass-fish"?.055:.125,.065,2),ii(n,c,f*.75,.025,.062,.019,.02,.01,1),ii(n,c,f*.75,.025,-.062,.019,.02,.01,1);const p=new qn;p.position.x=-f*.8,n.add(p);const d=new Sl;d.moveTo(0,0),d.lineTo(-.18,.12),d.lineTo(-.18,-.12),d.closePath(),fn(p,new no(d),u);const g=new Sl;g.moveTo(-.12,.06),g.lineTo(.06,.08),g.lineTo(-.08,.2),g.closePath(),fn(n,new no(g),u);const _=fn(n,new io(.1,.009,4,16),c,-.015,0,0,[1,.72,1]);return _.rotation.y=Math.PI/2,n.userData.tail=p,n}function MC(r,t,n,a=1){const o=new qn;o.position.set(...n),r.add(o);const c=new Lb({color:"#b5e5ef",roughness:.12,metalness:.1,transparent:!0,opacity:.58,side:Yn,emissive:"#4e9cac",emissiveIntensity:.55,depthWrite:!1});fn(o,new gm(.36*a,24,16,0,Math.PI*2,0,Math.PI*.58),c,0,.07,0,[1,.65,1]);const u=en("#a9f1df",{emissive:"#73e3df",emissiveIntensity:1.65,roughness:.3}),f=fn(o,new io(.35*a,.015*a,5,36),u,0,0,0);f.rotation.x=Math.PI/2,ii(o,en("#fcecc1",{emissive:"#cdeec4",emissiveIntensity:2.5}),0,.12*a,0,.085*a);for(let p=0;p<7;p++){const d=p/7*Math.PI*2,g=.23*a;wl(o,u,[[Math.cos(d)*g,0,Math.sin(d)*g],[Math.cos(d)*g*1.3,-.35*a,Math.sin(d)*g],[Math.cos(d)*g*.4,-.8*a,Math.sin(d)*g*.8],[Math.cos(d+.4)*g,-1.12*a,Math.sin(d+.4)*g]],.009*a,18)}return o}function bC(){const r=new Ws(100,100,160,160);r.rotateX(-Math.PI/2);const t=r.attributes.position;for(let o=0;o<t.count;o++){const c=t.getX(o),u=t.getZ(o);t.setY(o,-.48+Math.sin(c*.28+u*.17)*.25+Math.cos(u*.41-c*.12)*.12)}r.computeVertexNormals();const n=en("#497f80",{roughness:.96}),a={value:0};return n.onBeforeCompile=o=>{o.uniforms.uTime=a,o.vertexShader=`varying vec3 vBed;
`+o.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vBed=position;`),o.fragmentShader=`uniform float uTime;varying vec3 vBed;
`+o.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
float a=sin(vBed.x*2.8+sin(vBed.z*2.1+uTime*.33))*sin(vBed.z*2.6+sin(vBed.x*1.7-uTime*.25));float c=pow(max(0.,1.-abs(a)),20.);float grain=fract(sin(dot(vBed.xz,vec2(127.1,311.7)))*43758.5453);diffuseColor.rgb*=.89+grain*.12;diffuseColor.rgb+=vec3(.025,.075,.065)*c;`)},{object:new vi(r,n),time:a}}function EC(r,t,n){r.background=new ie("#073440"),r.fog=new cm("#174b58",.029),r.add(new dx("#aee8f0","#153e4b",1.65));const a=new Bp("#bceaf0",3.4);a.position.set(-10,18,8),a.castShadow=!0,a.shadow.mapSize.set(2048,2048),a.shadow.camera.left=-18,a.shadow.camera.right=18,a.shadow.camera.top=18,a.shadow.camera.bottom=-18,a.shadow.normalBias=.06,a.shadow.bias=-2e-4,r.add(a);const o=new Bp("#48aaa7",1.7);o.position.set(7,4,-8),r.add(o);const c=bC();c.object.receiveShadow=!0,r.add(c.object);const u=new qn;r.add(u);const f=Du("ocean-environment-v1");for(let x=0;x<13;x++){const T=(x-6)*3.7,M=-14-f()*9,A=4+f()*9;bv(u,f,T,A*.35-1,M,A*.52,"#315a6a")}const p=new mm([new W(-13,-1,-7),new W(-12,6,-8),new W(-7,9,-10),new W(-2,11,-13)]),d=fn(u,new Gu(p,44,1.6,20,!1),en("#345c6c",{roughness:1}));d.castShadow=!0;const g=[];for(let x=0;x<65;x++){const T=x%2?1:-1,M=T*(5.4+f()*10),A=-6+f()*12;x%4===0&&bv(u,f,M,-.15,A,.45+f()*.9,"#3b7078"),x%3===0?Tv(u,f,M,-.3,A,.8+f()*1.2):g.push(Av(u,f,M,-.35,A,.8+f()*2.8,x%2?"#3f837b":"#568e88"))}for(let x=0;x<20;x++){const T=(x%2?1:-1)*(5.5+f()*5),M=-5+f()*9;Vd(u,f,T,-.25,M,.5+f()*.5,"#a0cace",x%3===0)}for(let x=0;x<12;x++){const T=(x%2?1:-1)*(5.3+f()*4),M=-3+f()*9;Ev(u,f,T,-.3,M,.7+f()*.7)}const _=450,v=new Float32Array(_*3),y=new Float32Array(_*3);for(let x=0;x<_;x++)v[x*3]=(f()-.5)*45,v[x*3+1]=f()*15,v[x*3+2]=(f()-.5)*35,y.set([.45+f()*.3,.78,.79],x*3);const E=new an;E.setAttribute("position",new Sn(v,3)),E.setAttribute("color",new Sn(y,3));const R=new eb(E,new tx({size:.026,vertexColors:!0,transparent:!0,opacity:.65,depthWrite:!1}));r.add(R);for(let x=0;x<5;x++){const T=new Bn({transparent:!0,depthWrite:!1,side:Yn,blending:Uu,uniforms:{},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv;void main(){float a=pow(max(0.,1.-abs(vUv.x-.5)*2.),2.)*sin(vUv.y*3.14159)*.075;gl_FragColor=vec4(.38,.77,.79,a);}"}),M=fn(r,new Ws(2+x*.4,22),T,-8+x*4,8,-4-x*2);M.rotation.z=-.28,M.castShadow=!1,M.receiveShadow=!1}function S(x,T){const M=new qn,A=Du(x.id+":"+x.form),N=[],L=T.nodes.length>90?.55:1;if(x.code==="C0"){if(x.reefSurface){const U=vC(x.reefSurface.members,x.reefSurface.links);fn(M,U,xC(x.reefSurface.members[0]))}if(x.reefExposed){const U=en("#719f9f",{roughness:1,bumpMap:bx(),bumpScale:.045}),z=en("#153f4a"),C=en("#94c7bf"),w=Du(x.id+":reef-life"),I=Sx([{...x,x:0,y:0,z:0}],[]),k=3+Math.floor(w()*4);for(let X=0;X<k;X++){const q=w()*Math.PI*2,G=Math.sqrt(w())*.78,F=.28+w()*.67,V=Math.cos(q)*G,Q=Math.sin(q)*G,pt=.085+w()*.08;let dt=1.9;for(;dt>-.2&&_C([V,dt,Q],I)<0;)dt-=.04;const B=new qn;M.add(B),B.position.set(V,dt-.18,Q),B.rotation.set((w()-.5)*.35,w()*6,(w()-.5)*.35),fn(B,new Bu(pt,pt*1.4,F,9,1,!0),U,0,F/2,0);const et=fn(B,new fm(pt*.93,12),z,0,F,0);et.rotation.x=-Math.PI/2;const ft=fn(B,new io(pt,.019,4,12),C,0,F,0);ft.rotation.x=Math.PI/2}if(x.form==="coral-reef"||x.night)for(let X=0;X<4;X++)Vd(M,A,(A()-.5)*1.5,.65,(A()-.5)*1.3,.55+A()*.5,x.night?"#b1dbdc":"#83b9b8",x.night);else Tv(M,A,.25,.85,0,.7);x.form==="coral-reef"&&Ev(M,A,-.4,.3,.5,.8)}yC(M)}if(x.code==="C1"){const U=x.form==="kelp"?2.2+Math.min(x.same,3)*.35:1;for(let z=0;z<Math.round(10*L);z++){const C=z*2.4,w=Math.sqrt(A())*.8,I=Av(M,A,Math.cos(C)*w,-.22,Math.sin(C)*w,U*(.55+A()*.45),z%3?"#5aaa91":"#88b8a4");N.push(k=>{I.rotation.z=Math.sin(k*(x.current?.85:.48)+z)*.08+(x.current?.1:0),I.rotation.x=Math.cos(k*.36+z)*.06})}for(let z=0;z<5;z++)ii(M,en("#57756a"),(A()-.5)*1.6,-.18,(A()-.5)*1.6,.2,.12,.15)}if(x.code==="C2"){const U=Math.round((x.nursery?12:8+Math.min(x.same,3)*2)*L);for(let z=0;z<U;z++){const C=SC(A,x.form),w=A()*Math.PI*2,I=.75+A()*.9,k=.2+A()*.8;M.add(C);const X=x.nursery?.65:1;C.scale.setScalar(X),N.push(q=>{const G=q*(x.current?.48:.24)+w,F=x.current?x.direction:0,V=Math.cos(G)*I,Q=Math.sin(G)*I*.55,pt=-Math.sin(G)*I,dt=Math.cos(G)*I*.55;C.position.set(V*Math.cos(F)-Q*Math.sin(F),.5+k+Math.sin(G*1.7)*.18,V*Math.sin(F)+Q*Math.cos(F)),C.rotation.y=-Math.atan2(pt*Math.sin(F)+dt*Math.cos(F),pt*Math.cos(F)-dt*Math.sin(F)),C.rotation.z=Math.sin(q+w)*.035,C.userData.tail.rotation.y=Math.sin(q*8+w)*.45})}}if(x.code==="C3"){const U=en(x.form==="reef-crab"?"#d7a494":x.form==="grazing-snail"?"#b7ccad":"#d8b4ac"),z=en("#829d92");for(let C=0;C<4;C++){const w=new qn,I=(A()-.5)*1.5,k=(A()-.5)*1.5;if(M.add(w),w.position.set(I,x.reef?.4:-.13,k),x.form==="seastar"){for(let X=0;X<5;X++){const q=X/5*Math.PI*2,G=ii(w,U,Math.cos(q)*.1,.02,Math.sin(q)*.1,.14,.035,.06,1);G.rotation.y=-q}ii(w,U,0,.03,0,.09,.035,.09)}else if(x.form==="reef-crab"){ii(w,U,0,0,0,.15,.07,.11);for(let X=0;X<6;X++){const q=X<3?-1:1,G=(X%3-1)*.075;ym(w,U,[q*.09,0,G],[q*.23,-.05,G+.06],.015)}ii(w,z,.08,.08,.06,.025),ii(w,z,.08,.08,-.06,.025)}else ii(w,U,0,0,0,.2,.035,.08),ii(w,z,-.035,.08,0,.12,.13,.1);N.push(X=>{w.position.x=I+Math.sin(X*.14+C)*.16,w.rotation.y=Math.sin(X*.13+C)*.4})}}if(x.code==="C4")if(x.form==="anemone")for(let U=0;U<5;U++)Vd(M,A,(A()-.5)*1.3,.15,(A()-.5)*1.3,.8,"#bbe6d7",!0);else for(let U=0;U<3;U++){const z=(A()-.5)*1.6,C=(A()-.5)*1.4,w=.85+A(),I=MC(M,A,[z,w,C],.65+A()*.35);N.push(k=>{I.position.y=w+Math.sin(k*.65+U)*.2,I.position.x=z+Math.sin(k*.17+U)*(x.current?.55:.15)*Math.cos(x.direction),I.position.z=C+Math.sin(k*.17+U)*(x.current?.55:.15)*Math.sin(x.direction),I.scale.set(1+Math.sin(k*1.3+U)*.07,1-Math.sin(k*1.3+U)*.06,1+Math.sin(k*1.3+U)*.07)})}if(x.code==="C5"){const U=en("#8edbdd",{transparent:!0,opacity:.28,emissive:"#65c4cf",emissiveIntensity:1.2,depthWrite:!1});for(const C of x.flowNeighbors){if(x.id>=C.id)continue;const w=[(C.x-x.x)*xu,(C.y-x.y)*xu,(C.z-x.z)*xu];wl(M,U,[[0,.35,0],[w[0]*.5,w[1]*.5+.7,w[2]*.5],[w[0],w[1]+.35,w[2]]],.018,30)}const z=1+Math.min(x.same,3)*.2;for(let C=0;C<Math.round(14*L*z);C++){const w=A(),I=ii(M,U,0,0,0,.025+A()*.025,void 0,void 0,1);N.push(k=>{const X=(k*.13+w)%1,q=X*Math.PI*2;I.position.set(Math.cos(q)*(1+w*.3),X*1.6*z-.2,Math.sin(q)*(1+w*.3))})}}if(x.attention){const U=fn(M,new io(1.05,.025,6,48),en("#e6af76",{emissive:"#b6632c",emissiveIntensity:.5}));U.rotation.x=Math.PI/2}return M.userData.tick=U=>{for(const z of N)z(U+x.seed*20)},M}return{spacing:xu,baseY:.25,build:S,tick:x=>{c.time.value=x,R.position.x=Math.sin(x*.03)*1.3,R.position.y=Math.sin(x*.05)*.4,g.forEach((T,M)=>{T.rotation.z=Math.sin(x*.4+M)*.045})},dispose:()=>{a.shadow.map?.dispose()}}}const Tl=[];for(const r of[-1,1])for(const t of[-2,2])for(const n of[[0,r,t],[0,t,r],[r,0,t],[t,0,r],[r,t,0],[t,r,0]])Tl.some(a=>a.every((o,c)=>o===n[c]))||Tl.push(n);const Ex=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];for(const r of[-1,1])for(const t of[-1,1])for(const n of[-1,1])Ex.push([r/Math.sqrt(3),t/Math.sqrt(3),n/Math.sqrt(3)]);Ex.map(r=>{const t=Math.max(...Tl.map(n=>n.reduce((a,o,c)=>a+o*r[c],0)));return{normal:r,distance:t,vertices:Tl.filter(n=>Math.abs(n.reduce((a,o,c)=>a+o*r[c],0)-t)<1e-6)}});const Cv=Object.freeze({x:1.75,z:.75});function Rv(r,t,n=0){return[(r.x-Cv.x)*t,n+r.y*t,(r.z-Cv.z)*t]}function TC(r,t,n){return!r||t===0&&n>0}function wv({model:r,monitor:t=!1,reset:n=0,onError:a}){const o=$e.useRef(null),c=$e.useRef(null),u=$e.useRef(r);return u.current=r,$e.useEffect(()=>{const f=o.current,p=new QM;let d,g,_,v,y,E,R=0;try{let S=function(){const q=f.clientWidth,G=f.clientHeight;!q||!G||(d.setSize(q,G),T.aspect=q/G,T.updateProjectionMatrix(),_?.setSize(q,G))},x=function(q){R=requestAnimationFrame(x);const G=Math.min((q-L)/1e3,.05);L=q,N+=G,y.update();for(const F of A.values()){const V=Math.min(1,(N-F.birth)/.5);F.object.scale.setScalar(1-Math.pow(1-V,3)),F.object.userData.tick?.(k?0:N,G)}for(let F=I.length-1;F>=0;F--){const V=I[F];V.object.scale.multiplyScalar(Math.exp(-G*12)),V.object.scale.x<.025&&(M.remove(V.object),vu(V.object),I.splice(F,1))}g?.tick?.(k?0:N,G),_?_.render():d.render(p,T)};d=new B2({antialias:!0,alpha:!1,powerPreference:"high-performance"}),d.setPixelRatio(Math.min(window.devicePixelRatio,t?1.5:1.75)),d.shadowMap.enabled=!t,d.shadowMap.type=ai.kind==="architecture"?Wr:Nv,d.toneMapping=zu,d.toneMappingExposure=ai.kind==="ocean"?1.05:1.02,f.appendChild(d.domElement);const T=new Ui(t?38:36,1,.1,180);y=new G2(T,d.domElement),y.enableDamping=!0,y.dampingFactor=.065,y.enablePan=!t,y.minDistance=t?3:5,y.maxDistance=85,y.maxPolarAngle=Math.PI*.475,y.minPolarAngle=.12;const M=new qn;p.add(M);const A=new Map;let N=0,L=performance.now(),U=!1,z;if(t){p.background=new ie("#10171b"),p.add(new dx("#ffffff","#334047",2.5));const q=new Bp("#ffffff",3);q.position.set(4,8,6),p.add(q)}else g=EC(p,M,d);const C=()=>{const q=u.current.bounds,G=t?1.44:g.spacing,F=Math.max(q.width,q.depth,q.height+2)*G,V=Math.max(t?8:ai.kind==="ocean"?17:12,F*(ai.kind==="ocean"&&!t?1.08:t?1.7:1.4))*(T.aspect<1?1/T.aspect*.75:1),Q=t?.7:ai.kind==="ocean"?1.7:Math.max(.8,q.height*.66),[pt,,dt]=Rv({x:q.cx,y:0,z:q.cz},G);y.target.set(pt,Q,dt),T.position.set(pt+V*(ai.kind==="ocean"&&!t?.38:.66),Q+V*(ai.kind==="ocean"&&!t?.32:.62),dt+V*.92),y.update(),U=!0},w=q=>{const G=TC(U,z?.nodes.length||0,q.nodes.length);z=q;const F=t?1.44:g.spacing,V=new Set(q.nodes.map(Q=>Q.id));for(const[Q,pt]of A)V.has(Q)||(pt.removing=!0,A.delete(Q),I.push(pt));for(const Q of q.nodes){const pt=JSON.stringify(Q),dt=A.get(Q.id);if(dt?.signature===pt)continue;dt&&(M.remove(dt.object),vu(dt.object),A.delete(Q.id));let B;t?(B=new qn,fn(B,new aC(Tl.map(et=>new W(...et).multiplyScalar(.34))),en(yu[Number(Q.code[1])].color))):B=g.build(Q,q),B.position.set(...Rv(Q,F,t?.72:g.baseY)),B.scale.setScalar(.01),M.add(B),A.set(Q.id,{object:B,signature:pt,birth:N})}g?.update?.(q),G&&C()},I=[];!t&&ai.kind==="ocean"&&(_=new uC(d),_.addPass(new fC(p,T)),v=new ao(new Rt(1,1),.32,.65,1.15),_.addPass(v),_.addPass(new dC)),E=new ResizeObserver(S),E.observe(f),S(),c.current={sync:w,frameModel:C},w(u.current);const k=window.matchMedia("(prefers-reduced-motion: reduce)").matches;R=requestAnimationFrame(x);const X=q=>{q.preventDefault(),a?.("The graphics context was interrupted. Reload this page to restore the scene.")};return d.domElement.addEventListener("webglcontextlost",X),()=>{cancelAnimationFrame(R),E.disconnect(),y.dispose(),g?.dispose?.(),vu(p),v?.dispose(),_?.dispose(),d.dispose(),d.domElement.remove(),c.current=null}}catch{a?.("This scene needs WebGL. Try reopening it in Chrome or another browser."),cancelAnimationFrame(R),E?.disconnect(),y?.dispose(),vu(p),d?.dispose(),d?.domElement.remove()}},[t]),$e.useEffect(()=>{c.current?.sync(r)},[r]),$e.useEffect(()=>{n&&c.current?.frameModel()},[n]),Et.jsx("div",{className:"canvas-host",ref:o,"aria-label":t?"Digital block reconstruction":"Interactive rendered world"})}const Dv={live:"Live input",setup:"Hardware setup needed",connecting:"Connecting",reconnecting:"Reconnecting",offline:"Board disconnected",waiting:"Waiting for board",recovering:"Restoring board",attention:"Check input","invalid-data":"Input needs attention","launcher-offline":"Launcher unavailable"};function AC(){const r=WS(),[t,n]=$e.useState("hardware"),[a,o]=$e.useState(null),[c,u]=$e.useState(kd),[f,p]=$e.useState(Ca[0].id),[d,g]=$e.useState("C0"),[_,v]=$e.useState("0"),[y,E]=$e.useState(0),[R,S]=$e.useState("A0"),[x,T]=$e.useState(""),M=$e.useRef(null),A=$e.useMemo(()=>Uv(XS(c)),[c]),N=t==="test"?A:r.blocks,L=$e.useMemo(()=>qS(N),[N]),U=c.board[f]||[],z=$e.useRef([]),[C,w]=$e.useState("");function I(G){z.current.push(c),z.current.length>100&&z.current.shift(),u(G),w("")}function k(){const G=VS(c);G&&(I(nd(c,G,"add",d)),p(G),S(Ca.find(F=>F.id===G).port),w(`${d} added · ${G} · layer ${(c.board[G]?.length||0)+1}`))}function X(){const G=z.current.pop();G&&(u(G),w("Last change undone"))}const q=()=>{o(null),M.current?.focus()};return $e.useEffect(()=>{const G=F=>{F.key==="Escape"&&q()};return window.addEventListener("keydown",G),()=>window.removeEventListener("keydown",G)},[]),Et.jsxs("main",{className:"app "+ai.kind,children:[Et.jsxs("header",{className:"bar",children:[Et.jsxs("div",{className:"brand",children:[Et.jsx("span",{children:ai.number}),Et.jsx("h1",{children:ai.title})]}),Et.jsxs("div",{className:"actions",children:[Et.jsxs("span",{className:"status",role:"status",children:[Et.jsx("i",{className:t==="hardware"&&r.status==="live"?"live":""}),t==="test"?"Test board · simulated":Dv[r.status]||"Waiting"]}),t==="test"&&Et.jsx("button",{onClick:()=>{n("hardware"),o(null)},children:"Return to hardware"}),Et.jsx("button",{onClick:()=>o(a==="guide"?null:"guide"),children:"Field guide"}),Et.jsx("button",{ref:M,"aria-controls":"test-panel","aria-expanded":a==="test",onClick:()=>{a!=="test"&&n("test"),o(a==="test"?null:"test")},children:a==="test"?"Hide test view":"Test view"})]})]}),Et.jsxs("section",{className:"stage","aria-label":ai.title+" real-time scene",children:[Et.jsx(wv,{model:L,reset:y,onError:T}),Et.jsxs("div",{className:"scene-label",children:[Et.jsxs("p",{children:["WORLDBLOCKS / EXPERIMENT ",ai.number]}),Et.jsx("h2",{children:"Below the surface."}),Et.jsx("span",{children:ai.subtitle})]}),!N.length&&Et.jsx("div",{className:"invitation",children:t==="test"?"Add a block, or load a sample in Test view.":r.status==="setup"?"Confirm Hardware settings to bring your blocks to life.":"Place a block. Watch the world respond."}),x&&Et.jsx("p",{className:"scene-error",role:"alert",children:x}),t==="hardware"&&N.length>0&&r.status!=="live"&&Et.jsxs("p",{className:"connection-note",children:[Dv[r.status]," · Last received board"]}),Et.jsxs("div",{className:"scene-footer",children:[Et.jsxs("span",{children:[t==="test"?"SIMULATED INPUT":"HARDWARE INPUT",Et.jsx("b",{children:" / "}),N.length," MODULES"]}),Et.jsxs("div",{children:[Et.jsx("span",{children:"Drag to orbit · Scroll to zoom"}),Et.jsx("button",{onClick:()=>E(G=>G+1),children:"Reset view ↗"})]})]}),!!L.events.length&&Et.jsxs("div",{className:"emergence","aria-live":"polite",children:[Et.jsx("span",{children:"EMERGING"}),L.events.slice(0,3).map(G=>Et.jsx("p",{children:G},G)),L.events.length>3&&Et.jsxs("p",{children:["+",L.events.length-3," more in Field guide"]})]})]}),a&&Et.jsxs("aside",{id:"test-panel",className:"panel","aria-label":a==="test"?"Test view":"Field guide",children:[Et.jsxs("div",{className:"panel-title",children:[Et.jsxs("div",{children:[Et.jsx("small",{children:a==="test"?"SIMULATED INPUT":"HOW THIS WORLD WORKS"}),Et.jsx("h2",{children:a==="test"?"Test playground":"Field guide"})]}),Et.jsx("button",{"aria-label":"Close panel",onClick:q,children:"×"})]}),Et.jsx("div",{className:"panel-content",children:a==="test"?Et.jsxs(Et.Fragment,{children:[Et.jsxs("details",{className:"monitor-toggle",children:[Et.jsx("summary",{children:"Block monitor"}),Et.jsx("div",{className:"input-preview",children:Et.jsx(wv,{model:L,monitor:!0,onError:T})})]}),Et.jsxs("div",{className:"metrics",children:[Et.jsxs("span",{children:[N.length," blocks"]}),Et.jsxs("span",{children:[L.links," links"]}),Et.jsxs("span",{children:[N.filter(G=>G.attention).length," issues"]})]}),Et.jsxs(Et.Fragment,{children:[Et.jsx("p",{className:"note",children:"8 boards · 64 base + 64 offset positions. Every layer remains active."}),Et.jsx("div",{className:"unit-picker",role:"group","aria-label":"Unit type",children:yu.map(G=>Et.jsxs("button",{"aria-pressed":d===G.id,onClick:()=>g(G.id),children:[G.name,Et.jsx("small",{children:G.id})]},G.id))}),Et.jsxs("div",{className:"edit-row",children:[Et.jsx("button",{disabled:!Ca.some(G=>(c.board[G.id]?.length||0)<7),onClick:k,children:"Add unit"}),Et.jsx("button",{disabled:!z.current.length,onClick:X,children:"Undo"})]}),Et.jsx("p",{className:"random-feedback",role:"status",children:C||"Choose a unit, then add. Mostly central, occasionally scattered."}),Et.jsxs("details",{className:"manual-test",children:[Et.jsx("summary",{children:"Precise placement & board layout"}),Et.jsxs("label",{children:["Board layout",Et.jsx("select",{value:c.module_layout.grid_cols,onChange:G=>I(ed(c,Number(G.target.value))),children:[1,2,4,8].map(G=>Et.jsxs("option",{value:G,children:[8/G," rows × ",G," columns"]},G))})]}),Et.jsx("div",{className:"board-map",role:"group","aria-label":"Select a board",style:{gridTemplateColumns:`repeat(${c.module_layout.grid_cols},1fr)`},children:Wp.map(G=>Et.jsxs("button",{"aria-pressed":R===G,onClick:()=>{S(G),p(Ca.find(F=>F.port===G).id)},children:[G,Et.jsxs("small",{children:[Ca.filter(F=>F.port===G).reduce((F,V)=>F+(c.board[V.id]?.length||0),0)," blocks"]})]},G))}),Et.jsxs("label",{children:["Position",Et.jsx("select",{value:f,onChange:G=>p(G.target.value),children:Ca.filter(G=>G.port===R).map(G=>Et.jsxs("option",{value:G.id,children:[G.layer," · row ",G.row%2+1," / col ",G.col+1]},G.id))})]}),Et.jsxs("div",{className:"edit-row",children:[Et.jsx("button",{disabled:U.length>=7,onClick:()=>I(nd(c,f,"add",d)),children:"Add block"}),Et.jsx("button",{disabled:!U.length,onClick:()=>I(nd(c,f,"remove")),children:"Remove top"})]}),Et.jsxs("p",{className:"stack",children:["Bottom → top: ",U.join(" / ")||"Empty"]})]}),Et.jsxs("label",{children:["Example",Et.jsx("select",{value:_,onChange:G=>v(G.target.value),children:u_.map((G,F)=>Et.jsx("option",{value:F,children:G.name},G.name))})]}),Et.jsxs("div",{className:"edit-row secondary",children:[Et.jsx("button",{onClick:()=>{I(ed(kS(u_[Number(_)].stacks),c.module_layout.grid_cols)),S("A0"),p(Ca[0].id),E(G=>G+1)},children:"Load sample"}),Et.jsx("button",{onClick:()=>I(ed(kd(),c.module_layout.grid_cols)),children:"Clear test board"})]})]}),Et.jsx("div",{className:"legend",children:yu.map(G=>Et.jsxs("span",{children:[Et.jsx("i",{style:{background:G.color}}),G.id," ",G.name]},G.id))})]}):Et.jsxs(Et.Fragment,{children:[Et.jsx("p",{className:"note",children:"Six roles. Countless connections. Neighboring modules shape each other; every layer contributes."}),yu.map(G=>Et.jsxs("div",{className:"type",children:[Et.jsx("i",{style:{background:G.color}}),Et.jsxs("div",{children:[Et.jsxs("h3",{children:[G.id," / ",G.name]}),Et.jsx("p",{children:G.description})]})]},G.id)),Et.jsx("h3",{className:"section-label",children:"IN THIS COMPOSITION"}),L.events.length?L.events.map(G=>Et.jsx("p",{className:"event",children:G},G)):Et.jsx("p",{className:"note",children:"Connect different modules to discover a habitat or a shared space."}),Et.jsx("p",{className:"note",children:"Links follow face-adjacent positions and stack heights. Moving the camera does not change them."})]})})]})]})}IS.createRoot(document.getElementById("root")).render(Et.jsx(AC,{}));
