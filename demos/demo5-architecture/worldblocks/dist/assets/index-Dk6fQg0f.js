(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var yh={exports:{}},jo={};var p_;function AM(){if(p_)return jo;p_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var f in l)f!=="key"&&(c[f]=l[f])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return jo.Fragment=t,jo.jsx=i,jo.jsxs=i,jo}var m_;function CM(){return m_||(m_=1,yh.exports=AM()),yh.exports}var Et=CM(),Eh={exports:{}},re={};var g_;function RM(){if(g_)return re;g_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),_=Symbol.iterator;function x(N){return N===null||typeof N!="object"?null:(N=_&&N[_]||N["@@iterator"],typeof N=="function"?N:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,y={};function M(N,at,gt){this.props=N,this.context=at,this.refs=y,this.updater=gt||E}M.prototype.isReactComponent={},M.prototype.setState=function(N,at){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,at,"setState")},M.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function w(){}w.prototype=M.prototype;function P(N,at,gt){this.props=N,this.context=at,this.refs=y,this.updater=gt||E}var U=P.prototype=new w;U.constructor=P,T(U,M.prototype),U.isPureReactComponent=!0;var F=Array.isArray;function I(){}var z={H:null,A:null,T:null,S:null},Y=Object.prototype.hasOwnProperty;function R(N,at,gt){var At=gt.ref;return{$$typeof:r,type:N,key:at,ref:At!==void 0?At:null,props:gt}}function D(N,at){return R(N.type,at,N.props)}function V(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function Q(N){var at={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(gt){return at[gt]})}var et=/\/+/g;function tt(N,at){return typeof N=="object"&&N!==null&&N.key!=null?Q(""+N.key):at.toString(36)}function G(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(I,I):(N.status="pending",N.then(function(at){N.status==="pending"&&(N.status="fulfilled",N.value=at)},function(at){N.status==="pending"&&(N.status="rejected",N.reason=at)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function L(N,at,gt,At,Bt){var ot=typeof N;(ot==="undefined"||ot==="boolean")&&(N=null);var ft=!1;if(N===null)ft=!0;else switch(ot){case"bigint":case"string":case"number":ft=!0;break;case"object":switch(N.$$typeof){case r:case t:ft=!0;break;case g:return ft=N._init,L(ft(N._payload),at,gt,At,Bt)}}if(ft)return Bt=Bt(N),ft=At===""?"."+tt(N,0):At,F(Bt)?(gt="",ft!=null&&(gt=ft.replace(et,"$&/")+"/"),L(Bt,at,gt,"",function(Ht){return Ht})):Bt!=null&&(V(Bt)&&(Bt=D(Bt,gt+(Bt.key==null||N&&N.key===Bt.key?"":(""+Bt.key).replace(et,"$&/")+"/")+ft)),at.push(Bt)),1;ft=0;var Dt=At===""?".":At+":";if(F(N))for(var kt=0;kt<N.length;kt++)At=N[kt],ot=Dt+tt(At,kt),ft+=L(At,at,gt,ot,Bt);else if(kt=x(N),typeof kt=="function")for(N=kt.call(N),kt=0;!(At=N.next()).done;)At=At.value,ot=Dt+tt(At,kt++),ft+=L(At,at,gt,ot,Bt);else if(ot==="object"){if(typeof N.then=="function")return L(G(N),at,gt,At,Bt);throw at=String(N),Error("Objects are not valid as a React child (found: "+(at==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":at)+"). If you meant to render a collection of children, use an array instead.")}return ft}function B(N,at,gt){if(N==null)return N;var At=[],Bt=0;return L(N,At,"","",function(ot){return at.call(gt,ot,Bt++)}),At}function $(N){if(N._status===-1){var at=N._result;at=at(),at.then(function(gt){(N._status===0||N._status===-1)&&(N._status=1,N._result=gt)},function(gt){(N._status===0||N._status===-1)&&(N._status=2,N._result=gt)}),N._status===-1&&(N._status=0,N._result=at)}if(N._status===1)return N._result.default;throw N._result}var xt=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var at=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(at))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},vt={map:B,forEach:function(N,at,gt){B(N,function(){at.apply(this,arguments)},gt)},count:function(N){var at=0;return B(N,function(){at++}),at},toArray:function(N){return B(N,function(at){return at})||[]},only:function(N){if(!V(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return re.Activity=v,re.Children=vt,re.Component=M,re.Fragment=i,re.Profiler=l,re.PureComponent=P,re.StrictMode=s,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,re.__COMPILER_RUNTIME={__proto__:null,c:function(N){return z.H.useMemoCache(N)}},re.cache=function(N){return function(){return N.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(N,at,gt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var At=T({},N.props),Bt=N.key;if(at!=null)for(ot in at.key!==void 0&&(Bt=""+at.key),at)!Y.call(at,ot)||ot==="key"||ot==="__self"||ot==="__source"||ot==="ref"&&at.ref===void 0||(At[ot]=at[ot]);var ot=arguments.length-2;if(ot===1)At.children=gt;else if(1<ot){for(var ft=Array(ot),Dt=0;Dt<ot;Dt++)ft[Dt]=arguments[Dt+2];At.children=ft}return R(N.type,Bt,At)},re.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},re.createElement=function(N,at,gt){var At,Bt={},ot=null;if(at!=null)for(At in at.key!==void 0&&(ot=""+at.key),at)Y.call(at,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(Bt[At]=at[At]);var ft=arguments.length-2;if(ft===1)Bt.children=gt;else if(1<ft){for(var Dt=Array(ft),kt=0;kt<ft;kt++)Dt[kt]=arguments[kt+2];Bt.children=Dt}if(N&&N.defaultProps)for(At in ft=N.defaultProps,ft)Bt[At]===void 0&&(Bt[At]=ft[At]);return R(N,ot,Bt)},re.createRef=function(){return{current:null}},re.forwardRef=function(N){return{$$typeof:f,render:N}},re.isValidElement=V,re.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:$}},re.memo=function(N,at){return{$$typeof:p,type:N,compare:at===void 0?null:at}},re.startTransition=function(N){var at=z.T,gt={};z.T=gt;try{var At=N(),Bt=z.S;Bt!==null&&Bt(gt,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(I,xt)}catch(ot){xt(ot)}finally{at!==null&&gt.types!==null&&(at.types=gt.types),z.T=at}},re.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},re.use=function(N){return z.H.use(N)},re.useActionState=function(N,at,gt){return z.H.useActionState(N,at,gt)},re.useCallback=function(N,at){return z.H.useCallback(N,at)},re.useContext=function(N){return z.H.useContext(N)},re.useDebugValue=function(){},re.useDeferredValue=function(N,at){return z.H.useDeferredValue(N,at)},re.useEffect=function(N,at){return z.H.useEffect(N,at)},re.useEffectEvent=function(N){return z.H.useEffectEvent(N)},re.useId=function(){return z.H.useId()},re.useImperativeHandle=function(N,at,gt){return z.H.useImperativeHandle(N,at,gt)},re.useInsertionEffect=function(N,at){return z.H.useInsertionEffect(N,at)},re.useLayoutEffect=function(N,at){return z.H.useLayoutEffect(N,at)},re.useMemo=function(N,at){return z.H.useMemo(N,at)},re.useOptimistic=function(N,at){return z.H.useOptimistic(N,at)},re.useReducer=function(N,at,gt){return z.H.useReducer(N,at,gt)},re.useRef=function(N){return z.H.useRef(N)},re.useState=function(N){return z.H.useState(N)},re.useSyncExternalStore=function(N,at,gt){return z.H.useSyncExternalStore(N,at,gt)},re.useTransition=function(){return z.H.useTransition()},re.version="19.2.8",re}var __;function pp(){return __||(__=1,Eh.exports=RM()),Eh.exports}var Qe=pp(),bh={exports:{}},Zo={},Th={exports:{}},Ah={};var v_;function wM(){return v_||(v_=1,(function(r){function t(L,B){var $=L.length;L.push(B);t:for(;0<$;){var xt=$-1>>>1,vt=L[xt];if(0<l(vt,B))L[xt]=B,L[$]=vt,$=xt;else break t}}function i(L){return L.length===0?null:L[0]}function s(L){if(L.length===0)return null;var B=L[0],$=L.pop();if($!==B){L[0]=$;t:for(var xt=0,vt=L.length,N=vt>>>1;xt<N;){var at=2*(xt+1)-1,gt=L[at],At=at+1,Bt=L[At];if(0>l(gt,$))At<vt&&0>l(Bt,gt)?(L[xt]=Bt,L[At]=$,xt=At):(L[xt]=gt,L[at]=$,xt=at);else if(At<vt&&0>l(Bt,$))L[xt]=Bt,L[At]=$,xt=At;else break t}}return B}function l(L,B){var $=L.sortIndex-B.sortIndex;return $!==0?$:L.id-B.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,f=h.now();r.unstable_now=function(){return h.now()-f}}var m=[],p=[],g=1,v=null,_=3,x=!1,E=!1,T=!1,y=!1,M=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function U(L){for(var B=i(p);B!==null;){if(B.callback===null)s(p);else if(B.startTime<=L)s(p),B.sortIndex=B.expirationTime,t(m,B);else break;B=i(p)}}function F(L){if(T=!1,U(L),!E)if(i(m)!==null)E=!0,I||(I=!0,Q());else{var B=i(p);B!==null&&G(F,B.startTime-L)}}var I=!1,z=-1,Y=5,R=-1;function D(){return y?!0:!(r.unstable_now()-R<Y)}function V(){if(y=!1,I){var L=r.unstable_now();R=L;var B=!0;try{t:{E=!1,T&&(T=!1,w(z),z=-1),x=!0;var $=_;try{e:{for(U(L),v=i(m);v!==null&&!(v.expirationTime>L&&D());){var xt=v.callback;if(typeof xt=="function"){v.callback=null,_=v.priorityLevel;var vt=xt(v.expirationTime<=L);if(L=r.unstable_now(),typeof vt=="function"){v.callback=vt,U(L),B=!0;break e}v===i(m)&&s(m),U(L)}else s(m);v=i(m)}if(v!==null)B=!0;else{var N=i(p);N!==null&&G(F,N.startTime-L),B=!1}}break t}finally{v=null,_=$,x=!1}B=void 0}}finally{B?Q():I=!1}}}var Q;if(typeof P=="function")Q=function(){P(V)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,tt=et.port2;et.port1.onmessage=V,Q=function(){tt.postMessage(null)}}else Q=function(){M(V,0)};function G(L,B){z=M(function(){L(r.unstable_now())},B)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(L){L.callback=null},r.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<L?Math.floor(1e3/L):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_next=function(L){switch(_){case 1:case 2:case 3:var B=3;break;default:B=_}var $=_;_=B;try{return L()}finally{_=$}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(L,B){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var $=_;_=L;try{return B()}finally{_=$}},r.unstable_scheduleCallback=function(L,B,$){var xt=r.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?xt+$:xt):$=xt,L){case 1:var vt=-1;break;case 2:vt=250;break;case 5:vt=1073741823;break;case 4:vt=1e4;break;default:vt=5e3}return vt=$+vt,L={id:g++,callback:B,priorityLevel:L,startTime:$,expirationTime:vt,sortIndex:-1},$>xt?(L.sortIndex=$,t(p,L),i(m)===null&&L===i(p)&&(T?(w(z),z=-1):T=!0,G(F,$-xt))):(L.sortIndex=vt,t(m,L),E||x||(E=!0,I||(I=!0,Q()))),L},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(L){var B=_;return function(){var $=_;_=B;try{return L.apply(this,arguments)}finally{_=$}}}})(Ah)),Ah}var x_;function DM(){return x_||(x_=1,Th.exports=wM()),Th.exports}var Ch={exports:{}},Pn={};var S_;function UM(){if(S_)return Pn;S_=1;var r=pp();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Pn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},Pn.flushSync=function(m){var p=h.T,g=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=g,s.d.f()}},Pn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Pn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Pn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=f(g,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,x=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:x}):g==="script"&&s.d.X(m,{crossOrigin:v,integrity:_,fetchPriority:x,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Pn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=f(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Pn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=f(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Pn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=f(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Pn.requestFormReset=function(m){s.d.r(m)},Pn.unstable_batchedUpdates=function(m,p){return m(p)},Pn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},Pn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Pn.version="19.2.8",Pn}var M_;function LM(){if(M_)return Ch.exports;M_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Ch.exports=UM(),Ch.exports}var y_;function NM(){if(y_)return Zo;y_=1;var r=DM(),t=pp(),i=LM();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function f(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),e;if(d===o)return m(u),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=d;else{for(var S=!1,A=u.child;A;){if(A===a){S=!0,a=u,o=d;break}if(A===o){S=!0,o=u,a=d;break}A=A.sibling}if(!S){for(A=d.child;A;){if(A===a){S=!0,a=d,o=u;break}if(A===o){S=!0,o=d,a=u;break}A=A.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,_=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),P=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function Q(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var et=Symbol.for("react.client.reference");function tt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===et?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case M:return"Profiler";case y:return"StrictMode";case F:return"Suspense";case I:return"SuspenseList";case R:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case P:return e.displayName||"Context";case w:return(e._context.displayName||"Context")+".Consumer";case U:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:tt(e.type)||"Memo";case Y:n=e._payload,e=e._init;try{return tt(e(n))}catch{}}return null}var G=Array.isArray,L=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},xt=[],vt=-1;function N(e){return{current:e}}function at(e){0>vt||(e.current=xt[vt],xt[vt]=null,vt--)}function gt(e,n){vt++,xt[vt]=e.current,e.current=n}var At=N(null),Bt=N(null),ot=N(null),ft=N(null);function Dt(e,n){switch(gt(ot,n),gt(Bt,e),gt(At,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?F0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=F0(n),e=I0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}at(At),gt(At,e)}function kt(){at(At),at(Bt),at(ot)}function Ht(e){e.memoizedState!==null&&gt(ft,e);var n=At.current,a=I0(n,e.type);n!==a&&(gt(Bt,e),gt(At,a))}function me(e){Bt.current===e&&(at(At),at(Bt)),ft.current===e&&(at(ft),Xo._currentValue=$)}var $e,xe;function ge(e){if($e===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);$e=n&&n[1]||"",xe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$e+e+xe}var we=!1;function le(e,n){if(!e||we)return"";we=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(ct){var rt=ct}Reflect.construct(e,[],mt)}else{try{mt.call()}catch(ct){rt=ct}e.call(mt.prototype)}}else{try{throw Error()}catch(ct){rt=ct}(mt=e())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(ct){if(ct&&rt&&typeof ct.stack=="string")return[ct.stack,rt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),S=d[0],A=d[1];if(S&&A){var H=S.split(`
`),it=A.split(`
`);for(u=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;u<it.length&&!it[u].includes("DetermineComponentFrameRoot");)u++;if(o===H.length||u===it.length)for(o=H.length-1,u=it.length-1;1<=o&&0<=u&&H[o]!==it[u];)u--;for(;1<=o&&0<=u;o--,u--)if(H[o]!==it[u]){if(o!==1||u!==1)do if(o--,u--,0>u||H[o]!==it[u]){var ht=`
`+H[o].replace(" at new "," at ");return e.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",e.displayName)),ht}while(1<=o&&0<=u);break}}}finally{we=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ge(a):""}function tn(e,n){switch(e.tag){case 26:case 27:case 5:return ge(e.type);case 16:return ge("Lazy");case 13:return e.child!==n&&n!==null?ge("Suspense Fallback"):ge("Suspense");case 19:return ge("SuspenseList");case 0:case 15:return le(e.type,!1);case 11:return le(e.type.render,!1);case 1:return le(e.type,!0);case 31:return ge("Activity");default:return""}}function k(e){try{var n="",a=null;do n+=tn(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var je=Object.prototype.hasOwnProperty,Ee=r.unstable_scheduleCallback,Ne=r.unstable_cancelCallback,Yt=r.unstable_shouldYield,O=r.unstable_requestPaint,b=r.unstable_now,j=r.unstable_getCurrentPriorityLevel,dt=r.unstable_ImmediatePriority,St=r.unstable_UserBlockingPriority,ut=r.unstable_NormalPriority,Zt=r.unstable_LowPriority,Rt=r.unstable_IdlePriority,Xt=r.log,ne=r.unstable_setDisableYieldValue,yt=null,bt=null;function Ft(e){if(typeof Xt=="function"&&ne(e),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(yt,e)}catch{}}var Pt=Math.clz32?Math.clz32:W,wt=Math.log,fe=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(wt(e)/fe|0)|0}var Lt=256,Tt=262144,zt=4194304;function Mt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function _t(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,d=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~d,o!==0?u=Mt(o):(S&=A,S!==0?u=Mt(S):a||(a=A&~e,a!==0&&(u=Mt(a))))):(A=o&~d,A!==0?u=Mt(A):S!==0?u=Mt(S):a||(a=o&~e,a!==0&&(u=Mt(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Ct(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ae(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pe(){var e=zt;return zt<<=1,(zt&62914560)===0&&(zt=4194304),e}function be(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function On(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ci(e,n,a,o,u,d){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,H=e.expirationTimes,it=e.hiddenUpdates;for(a=S&~a;0<a;){var ht=31-Pt(a),mt=1<<ht;A[ht]=0,H[ht]=-1;var rt=it[ht];if(rt!==null)for(it[ht]=null,ht=0;ht<rt.length;ht++){var ct=rt[ht];ct!==null&&(ct.lane&=-536870913)}a&=~mt}o!==0&&_l(e,o,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(S&~n))}function _l(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Pt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function eo(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Pt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function ks(e,n){var a=n&-n;return a=(a&42)!==0?1:no(a),(a&(e.suspendedLanes|n))!==0?0:a}function no(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Xs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function io(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:o_(e.type))}function Vi(e,n){var a=B.p;try{return B.p=e,n()}finally{B.p=a}}var fi=Math.random().toString(36).slice(2),ln="__reactFiber$"+fi,yn="__reactProps$"+fi,Ri="__reactContainer$"+fi,Ws="__reactEvents$"+fi,qs="__reactListeners$"+fi,vl="__reactHandles$"+fi,ao="__reactResources$"+fi,hs="__reactMarker$"+fi;function so(e){delete e[ln],delete e[yn],delete e[Ws],delete e[qs],delete e[vl]}function wa(e){var n=e[ln];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ri]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=W0(e);e!==null;){if(a=e[ln])return a;e=W0(e)}return n}e=a,a=e.parentNode}return null}function Da(e){if(e=e[ln]||e[Ri]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ds(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Ua(e){var n=e[ao];return n||(n=e[ao]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function C(e){e[hs]=!0}var Z=new Set,lt={};function st(e,n){J(e,n),J(e+"Capture",n)}function J(e,n){for(lt[e]=n,e=0;e<n.length;e++)Z.add(n[e])}var Ut=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),It={},Nt={};function Gt(e){return je.call(Nt,e)?!0:je.call(It,e)?!1:Ut.test(e)?Nt[e]=!0:(It[e]=!0,!1)}function Wt(e,n,a){if(Gt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Jt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function qt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function te(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function De(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ze(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){a=""+S,d.call(this,S)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function We(e){if(!e._valueTracker){var n=De(e)?"checked":"value";e._valueTracker=Ze(e,n,""+e[n])}}function Oe(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=De(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Kt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ue=/[\n"\\]/g;function se(e){return e.replace(Ue,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function En(e,n,a,o,u,d,S,A){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+te(n)):e.value!==""+te(n)&&(e.value=""+te(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?bn(e,S,te(n)):a!=null?bn(e,S,te(a)):o!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+te(A):e.removeAttribute("name")}function ta(e,n,a,o,u,d,S,A){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){We(e);return}a=a!=null?""+te(a):"",n=n!=null?""+te(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),We(e)}function bn(e,n,a){n==="number"&&Kt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function hi(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+te(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function ze(e,n,a){if(n!=null&&(n=""+te(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+te(a):""}function Tn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(G(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=te(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),We(e)}function pn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var An=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Cn(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||An.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Ys(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Cn(e,u,o)}else for(var d in n)n.hasOwnProperty(d)&&Cn(e,d,n[d])}function wi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ex=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function xl(e){return Ex.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ea(){}var vu=null;function xu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var js=null,Zs=null;function zp(e){var n=Da(e);if(n&&(e=n.stateNode)){var a=e[yn]||null;t:switch(e=n.stateNode,n.type){case"input":if(En(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+se(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[yn]||null;if(!u)throw Error(s(90));En(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Oe(o)}break t;case"textarea":ze(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&hi(e,!!a.multiple,n,!1)}}}var Su=!1;function Fp(e,n,a){if(Su)return e(n,a);Su=!0;try{var o=e(n);return o}finally{if(Su=!1,(js!==null||Zs!==null)&&(rc(),js&&(n=js,e=Zs,Zs=js=null,zp(n),e)))for(n=0;n<e.length;n++)zp(e[n])}}function ro(e,n){var a=e.stateNode;if(a===null)return null;var o=a[yn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var na=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mu=!1;if(na)try{var oo={};Object.defineProperty(oo,"passive",{get:function(){Mu=!0}}),window.addEventListener("test",oo,oo),window.removeEventListener("test",oo,oo)}catch{Mu=!1}var La=null,yu=null,Sl=null;function Ip(){if(Sl)return Sl;var e,n=yu,a=n.length,o,u="value"in La?La.value:La.textContent,d=u.length;for(e=0;e<a&&n[e]===u[e];e++);var S=a-e;for(o=1;o<=S&&n[a-o]===u[d-o];o++);return Sl=u.slice(e,1<o?1-o:void 0)}function Ml(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function yl(){return!0}function Bp(){return!1}function Vn(e){function n(a,o,u,d,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=S,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(d):d[A]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?yl:Bp,this.isPropagationStopped=Bp,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=yl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=yl)},persist:function(){},isPersistent:yl}),n}var ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},El=Vn(ps),lo=v({},ps,{view:0,detail:0}),bx=Vn(lo),Eu,bu,co,bl=v({},lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Au,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==co&&(co&&e.type==="mousemove"?(Eu=e.screenX-co.screenX,bu=e.screenY-co.screenY):bu=Eu=0,co=e),Eu)},movementY:function(e){return"movementY"in e?e.movementY:bu}}),Hp=Vn(bl),Tx=v({},bl,{dataTransfer:0}),Ax=Vn(Tx),Cx=v({},lo,{relatedTarget:0}),Tu=Vn(Cx),Rx=v({},ps,{animationName:0,elapsedTime:0,pseudoElement:0}),wx=Vn(Rx),Dx=v({},ps,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ux=Vn(Dx),Lx=v({},ps,{data:0}),Gp=Vn(Lx),Nx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ox={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Px={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Px[e])?!!n[e]:!1}function Au(){return zx}var Fx=v({},lo,{key:function(e){if(e.key){var n=Nx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ml(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ox[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Au,charCode:function(e){return e.type==="keypress"?Ml(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ml(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ix=Vn(Fx),Bx=v({},bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vp=Vn(Bx),Hx=v({},lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Au}),Gx=Vn(Hx),Vx=v({},ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),kx=Vn(Vx),Xx=v({},bl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Wx=Vn(Xx),qx=v({},ps,{newState:0,oldState:0}),Yx=Vn(qx),jx=[9,13,27,32],Cu=na&&"CompositionEvent"in window,uo=null;na&&"documentMode"in document&&(uo=document.documentMode);var Zx=na&&"TextEvent"in window&&!uo,kp=na&&(!Cu||uo&&8<uo&&11>=uo),Xp=" ",Wp=!1;function qp(e,n){switch(e){case"keyup":return jx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ks=!1;function Kx(e,n){switch(e){case"compositionend":return Yp(n);case"keypress":return n.which!==32?null:(Wp=!0,Xp);case"textInput":return e=n.data,e===Xp&&Wp?null:e;default:return null}}function Qx(e,n){if(Ks)return e==="compositionend"||!Cu&&qp(e,n)?(e=Ip(),Sl=yu=La=null,Ks=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return kp&&n.locale!=="ko"?null:n.data;default:return null}}var Jx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Jx[e.type]:n==="textarea"}function Zp(e,n,a,o){js?Zs?Zs.push(o):Zs=[o]:js=o,n=dc(n,"onChange"),0<n.length&&(a=new El("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var fo=null,ho=null;function $x(e){U0(e,0)}function Tl(e){var n=ds(e);if(Oe(n))return e}function Kp(e,n){if(e==="change")return n}var Qp=!1;if(na){var Ru;if(na){var wu="oninput"in document;if(!wu){var Jp=document.createElement("div");Jp.setAttribute("oninput","return;"),wu=typeof Jp.oninput=="function"}Ru=wu}else Ru=!1;Qp=Ru&&(!document.documentMode||9<document.documentMode)}function $p(){fo&&(fo.detachEvent("onpropertychange",tm),ho=fo=null)}function tm(e){if(e.propertyName==="value"&&Tl(ho)){var n=[];Zp(n,ho,e,xu(e)),Fp($x,n)}}function tS(e,n,a){e==="focusin"?($p(),fo=n,ho=a,fo.attachEvent("onpropertychange",tm)):e==="focusout"&&$p()}function eS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Tl(ho)}function nS(e,n){if(e==="click")return Tl(n)}function iS(e,n){if(e==="input"||e==="change")return Tl(n)}function aS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var $n=typeof Object.is=="function"?Object.is:aS;function po(e,n){if($n(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!je.call(n,u)||!$n(e[u],n[u]))return!1}return!0}function em(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nm(e,n){var a=em(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=em(a)}}function im(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?im(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function am(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Kt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Kt(e.document)}return n}function Du(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var sS=na&&"documentMode"in document&&11>=document.documentMode,Qs=null,Uu=null,mo=null,Lu=!1;function sm(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Lu||Qs==null||Qs!==Kt(o)||(o=Qs,"selectionStart"in o&&Du(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),mo&&po(mo,o)||(mo=o,o=dc(Uu,"onSelect"),0<o.length&&(n=new El("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Qs)))}function ms(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Js={animationend:ms("Animation","AnimationEnd"),animationiteration:ms("Animation","AnimationIteration"),animationstart:ms("Animation","AnimationStart"),transitionrun:ms("Transition","TransitionRun"),transitionstart:ms("Transition","TransitionStart"),transitioncancel:ms("Transition","TransitionCancel"),transitionend:ms("Transition","TransitionEnd")},Nu={},rm={};na&&(rm=document.createElement("div").style,"AnimationEvent"in window||(delete Js.animationend.animation,delete Js.animationiteration.animation,delete Js.animationstart.animation),"TransitionEvent"in window||delete Js.transitionend.transition);function gs(e){if(Nu[e])return Nu[e];if(!Js[e])return e;var n=Js[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in rm)return Nu[e]=n[a];return e}var om=gs("animationend"),lm=gs("animationiteration"),cm=gs("animationstart"),rS=gs("transitionrun"),oS=gs("transitionstart"),lS=gs("transitioncancel"),um=gs("transitionend"),fm=new Map,Ou="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ou.push("scrollEnd");function Di(e,n){fm.set(e,n),st(n,[e])}var Al=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},di=[],$s=0,Pu=0;function Cl(){for(var e=$s,n=Pu=$s=0;n<e;){var a=di[n];di[n++]=null;var o=di[n];di[n++]=null;var u=di[n];di[n++]=null;var d=di[n];if(di[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}d!==0&&hm(a,u,d)}}function Rl(e,n,a,o){di[$s++]=e,di[$s++]=n,di[$s++]=a,di[$s++]=o,Pu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function zu(e,n,a,o){return Rl(e,n,a,o),wl(e)}function _s(e,n){return Rl(e,null,null,n),wl(e)}function hm(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&n!==null&&(u=31-Pt(a),e=d.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function wl(e){if(50<Fo)throw Fo=0,qf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var tr={};function cS(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(e,n,a,o){return new cS(e,n,a,o)}function Fu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ia(e,n){var a=e.alternate;return a===null?(a=ti(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function dm(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Dl(e,n,a,o,u,d){var S=0;if(o=e,typeof e=="function")Fu(e)&&(S=1);else if(typeof e=="string")S=pM(e,a,At.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case R:return e=ti(31,a,n,u),e.elementType=R,e.lanes=d,e;case T:return vs(a.children,u,d,n);case y:S=8,u|=24;break;case M:return e=ti(12,a,n,u|2),e.elementType=M,e.lanes=d,e;case F:return e=ti(13,a,n,u),e.elementType=F,e.lanes=d,e;case I:return e=ti(19,a,n,u),e.elementType=I,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case P:S=10;break t;case w:S=9;break t;case U:S=11;break t;case z:S=14;break t;case Y:S=16,o=null;break t}S=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ti(S,a,n,u),n.elementType=e,n.type=o,n.lanes=d,n}function vs(e,n,a,o){return e=ti(7,e,o,n),e.lanes=a,e}function Iu(e,n,a){return e=ti(6,e,null,n),e.lanes=a,e}function pm(e){var n=ti(18,null,null,0);return n.stateNode=e,n}function Bu(e,n,a){return n=ti(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var mm=new WeakMap;function pi(e,n){if(typeof e=="object"&&e!==null){var a=mm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:k(n)},mm.set(e,n),n)}return{value:e,source:n,stack:k(n)}}var er=[],nr=0,Ul=null,go=0,mi=[],gi=0,Na=null,ki=1,Xi="";function aa(e,n){er[nr++]=go,er[nr++]=Ul,Ul=e,go=n}function gm(e,n,a){mi[gi++]=ki,mi[gi++]=Xi,mi[gi++]=Na,Na=e;var o=ki;e=Xi;var u=32-Pt(o)-1;o&=~(1<<u),a+=1;var d=32-Pt(n)+u;if(30<d){var S=u-u%5;d=(o&(1<<S)-1).toString(32),o>>=S,u-=S,ki=1<<32-Pt(n)+u|a<<u|o,Xi=d+e}else ki=1<<d|a<<u|o,Xi=e}function Hu(e){e.return!==null&&(aa(e,1),gm(e,1,0))}function Gu(e){for(;e===Ul;)Ul=er[--nr],er[nr]=null,go=er[--nr],er[nr]=null;for(;e===Na;)Na=mi[--gi],mi[gi]=null,Xi=mi[--gi],mi[gi]=null,ki=mi[--gi],mi[gi]=null}function _m(e,n){mi[gi++]=ki,mi[gi++]=Xi,mi[gi++]=Na,ki=n.id,Xi=n.overflow,Na=e}var Rn=null,qe=null,ye=!1,Oa=null,_i=!1,Vu=Error(s(519));function Pa(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw _o(pi(n,e)),Vu}function vm(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[ln]=e,n[yn]=o,a){case"dialog":ve("cancel",n),ve("close",n);break;case"iframe":case"object":case"embed":ve("load",n);break;case"video":case"audio":for(a=0;a<Bo.length;a++)ve(Bo[a],n);break;case"source":ve("error",n);break;case"img":case"image":case"link":ve("error",n),ve("load",n);break;case"details":ve("toggle",n);break;case"input":ve("invalid",n),ta(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ve("invalid",n);break;case"textarea":ve("invalid",n),Tn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||P0(n.textContent,a)?(o.popover!=null&&(ve("beforetoggle",n),ve("toggle",n)),o.onScroll!=null&&ve("scroll",n),o.onScrollEnd!=null&&ve("scrollend",n),o.onClick!=null&&(n.onclick=ea),n=!0):n=!1,n||Pa(e,!0)}function xm(e){for(Rn=e.return;Rn;)switch(Rn.tag){case 5:case 31:case 13:_i=!1;return;case 27:case 3:_i=!0;return;default:Rn=Rn.return}}function ir(e){if(e!==Rn)return!1;if(!ye)return xm(e),ye=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||oh(e.type,e.memoizedProps)),a=!a),a&&qe&&Pa(e),xm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));qe=X0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));qe=X0(e)}else n===27?(n=qe,Za(e.type)?(e=hh,hh=null,qe=e):qe=n):qe=Rn?xi(e.stateNode.nextSibling):null;return!0}function xs(){qe=Rn=null,ye=!1}function ku(){var e=Oa;return e!==null&&(qn===null?qn=e:qn.push.apply(qn,e),Oa=null),e}function _o(e){Oa===null?Oa=[e]:Oa.push(e)}var Xu=N(null),Ss=null,sa=null;function za(e,n,a){gt(Xu,n._currentValue),n._currentValue=a}function ra(e){e._currentValue=Xu.current,at(Xu)}function Wu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function qu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var S=u.child;d=d.firstContext;t:for(;d!==null;){var A=d;d=u;for(var H=0;H<n.length;H++)if(A.context===n[H]){d.lanes|=a,A=d.alternate,A!==null&&(A.lanes|=a),Wu(d.return,a,e),o||(S=null);break t}d=A.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(s(341));S.lanes|=a,d=S.alternate,d!==null&&(d.lanes|=a),Wu(S,a,e),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===e){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function ar(e,n,a,o){e=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var A=u.type;$n(u.pendingProps.value,S.value)||(e!==null?e.push(A):e=[A])}}else if(u===ft.current){if(S=u.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Xo):e=[Xo])}u=u.return}e!==null&&qu(n,e,a,o),n.flags|=262144}function Ll(e){for(e=e.firstContext;e!==null;){if(!$n(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ms(e){Ss=e,sa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function wn(e){return Sm(Ss,e)}function Nl(e,n){return Ss===null&&Ms(e),Sm(e,n)}function Sm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},sa===null){if(e===null)throw Error(s(308));sa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else sa=sa.next=n;return a}var uS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},fS=r.unstable_scheduleCallback,hS=r.unstable_NormalPriority,cn={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yu(){return{controller:new uS,data:new Map,refCount:0}}function vo(e){e.refCount--,e.refCount===0&&fS(hS,function(){e.controller.abort()})}var xo=null,ju=0,sr=0,rr=null;function dS(e,n){if(xo===null){var a=xo=[];ju=0,sr=Jf(),rr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return ju++,n.then(Mm,Mm),n}function Mm(){if(--ju===0&&xo!==null){rr!==null&&(rr.status="fulfilled");var e=xo;xo=null,sr=0,rr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function pS(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var ym=L.S;L.S=function(e,n){s0=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&dS(e,n),ym!==null&&ym(e,n)};var ys=N(null);function Zu(){var e=ys.current;return e!==null?e:Xe.pooledCache}function Ol(e,n){n===null?gt(ys,ys.current):gt(ys,n.pool)}function Em(){var e=Zu();return e===null?null:{parent:cn._currentValue,pool:e}}var or=Error(s(460)),Ku=Error(s(474)),Pl=Error(s(542)),zl={then:function(){}};function bm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Tm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ea,ea),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Cm(e),e;default:if(typeof n.status=="string")n.then(ea,ea);else{if(e=Xe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Cm(e),e}throw bs=n,or}}function Es(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(bs=a,or):a}}var bs=null;function Am(){if(bs===null)throw Error(s(459));var e=bs;return bs=null,e}function Cm(e){if(e===or||e===Pl)throw Error(s(483))}var lr=null,So=0;function Fl(e){var n=So;return So+=1,lr===null&&(lr=[]),Tm(lr,e,n)}function Mo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Il(e,n){throw n.$$typeof===_?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Rm(e){function n(K,X){if(e){var nt=K.deletions;nt===null?(K.deletions=[X],K.flags|=16):nt.push(X)}}function a(K,X){if(!e)return null;for(;X!==null;)n(K,X),X=X.sibling;return null}function o(K){for(var X=new Map;K!==null;)K.key!==null?X.set(K.key,K):X.set(K.index,K),K=K.sibling;return X}function u(K,X){return K=ia(K,X),K.index=0,K.sibling=null,K}function d(K,X,nt){return K.index=nt,e?(nt=K.alternate,nt!==null?(nt=nt.index,nt<X?(K.flags|=67108866,X):nt):(K.flags|=67108866,X)):(K.flags|=1048576,X)}function S(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function A(K,X,nt,pt){return X===null||X.tag!==6?(X=Iu(nt,K.mode,pt),X.return=K,X):(X=u(X,nt),X.return=K,X)}function H(K,X,nt,pt){var Qt=nt.type;return Qt===T?ht(K,X,nt.props.children,pt,nt.key):X!==null&&(X.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===Y&&Es(Qt)===X.type)?(X=u(X,nt.props),Mo(X,nt),X.return=K,X):(X=Dl(nt.type,nt.key,nt.props,null,K.mode,pt),Mo(X,nt),X.return=K,X)}function it(K,X,nt,pt){return X===null||X.tag!==4||X.stateNode.containerInfo!==nt.containerInfo||X.stateNode.implementation!==nt.implementation?(X=Bu(nt,K.mode,pt),X.return=K,X):(X=u(X,nt.children||[]),X.return=K,X)}function ht(K,X,nt,pt,Qt){return X===null||X.tag!==7?(X=vs(nt,K.mode,pt,Qt),X.return=K,X):(X=u(X,nt),X.return=K,X)}function mt(K,X,nt){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Iu(""+X,K.mode,nt),X.return=K,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case x:return nt=Dl(X.type,X.key,X.props,null,K.mode,nt),Mo(nt,X),nt.return=K,nt;case E:return X=Bu(X,K.mode,nt),X.return=K,X;case Y:return X=Es(X),mt(K,X,nt)}if(G(X)||Q(X))return X=vs(X,K.mode,nt,null),X.return=K,X;if(typeof X.then=="function")return mt(K,Fl(X),nt);if(X.$$typeof===P)return mt(K,Nl(K,X),nt);Il(K,X)}return null}function rt(K,X,nt,pt){var Qt=X!==null?X.key:null;if(typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint")return Qt!==null?null:A(K,X,""+nt,pt);if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case x:return nt.key===Qt?H(K,X,nt,pt):null;case E:return nt.key===Qt?it(K,X,nt,pt):null;case Y:return nt=Es(nt),rt(K,X,nt,pt)}if(G(nt)||Q(nt))return Qt!==null?null:ht(K,X,nt,pt,null);if(typeof nt.then=="function")return rt(K,X,Fl(nt),pt);if(nt.$$typeof===P)return rt(K,X,Nl(K,nt),pt);Il(K,nt)}return null}function ct(K,X,nt,pt,Qt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return K=K.get(nt)||null,A(X,K,""+pt,Qt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case x:return K=K.get(pt.key===null?nt:pt.key)||null,H(X,K,pt,Qt);case E:return K=K.get(pt.key===null?nt:pt.key)||null,it(X,K,pt,Qt);case Y:return pt=Es(pt),ct(K,X,nt,pt,Qt)}if(G(pt)||Q(pt))return K=K.get(nt)||null,ht(X,K,pt,Qt,null);if(typeof pt.then=="function")return ct(K,X,nt,Fl(pt),Qt);if(pt.$$typeof===P)return ct(K,X,nt,Nl(X,pt),Qt);Il(X,pt)}return null}function Vt(K,X,nt,pt){for(var Qt=null,Ae=null,jt=X,he=X=0,Me=null;jt!==null&&he<nt.length;he++){jt.index>he?(Me=jt,jt=null):Me=jt.sibling;var Ce=rt(K,jt,nt[he],pt);if(Ce===null){jt===null&&(jt=Me);break}e&&jt&&Ce.alternate===null&&n(K,jt),X=d(Ce,X,he),Ae===null?Qt=Ce:Ae.sibling=Ce,Ae=Ce,jt=Me}if(he===nt.length)return a(K,jt),ye&&aa(K,he),Qt;if(jt===null){for(;he<nt.length;he++)jt=mt(K,nt[he],pt),jt!==null&&(X=d(jt,X,he),Ae===null?Qt=jt:Ae.sibling=jt,Ae=jt);return ye&&aa(K,he),Qt}for(jt=o(jt);he<nt.length;he++)Me=ct(jt,K,he,nt[he],pt),Me!==null&&(e&&Me.alternate!==null&&jt.delete(Me.key===null?he:Me.key),X=d(Me,X,he),Ae===null?Qt=Me:Ae.sibling=Me,Ae=Me);return e&&jt.forEach(function(ts){return n(K,ts)}),ye&&aa(K,he),Qt}function ee(K,X,nt,pt){if(nt==null)throw Error(s(151));for(var Qt=null,Ae=null,jt=X,he=X=0,Me=null,Ce=nt.next();jt!==null&&!Ce.done;he++,Ce=nt.next()){jt.index>he?(Me=jt,jt=null):Me=jt.sibling;var ts=rt(K,jt,Ce.value,pt);if(ts===null){jt===null&&(jt=Me);break}e&&jt&&ts.alternate===null&&n(K,jt),X=d(ts,X,he),Ae===null?Qt=ts:Ae.sibling=ts,Ae=ts,jt=Me}if(Ce.done)return a(K,jt),ye&&aa(K,he),Qt;if(jt===null){for(;!Ce.done;he++,Ce=nt.next())Ce=mt(K,Ce.value,pt),Ce!==null&&(X=d(Ce,X,he),Ae===null?Qt=Ce:Ae.sibling=Ce,Ae=Ce);return ye&&aa(K,he),Qt}for(jt=o(jt);!Ce.done;he++,Ce=nt.next())Ce=ct(jt,K,he,Ce.value,pt),Ce!==null&&(e&&Ce.alternate!==null&&jt.delete(Ce.key===null?he:Ce.key),X=d(Ce,X,he),Ae===null?Qt=Ce:Ae.sibling=Ce,Ae=Ce);return e&&jt.forEach(function(TM){return n(K,TM)}),ye&&aa(K,he),Qt}function Ve(K,X,nt,pt){if(typeof nt=="object"&&nt!==null&&nt.type===T&&nt.key===null&&(nt=nt.props.children),typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case x:t:{for(var Qt=nt.key;X!==null;){if(X.key===Qt){if(Qt=nt.type,Qt===T){if(X.tag===7){a(K,X.sibling),pt=u(X,nt.props.children),pt.return=K,K=pt;break t}}else if(X.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===Y&&Es(Qt)===X.type){a(K,X.sibling),pt=u(X,nt.props),Mo(pt,nt),pt.return=K,K=pt;break t}a(K,X);break}else n(K,X);X=X.sibling}nt.type===T?(pt=vs(nt.props.children,K.mode,pt,nt.key),pt.return=K,K=pt):(pt=Dl(nt.type,nt.key,nt.props,null,K.mode,pt),Mo(pt,nt),pt.return=K,K=pt)}return S(K);case E:t:{for(Qt=nt.key;X!==null;){if(X.key===Qt)if(X.tag===4&&X.stateNode.containerInfo===nt.containerInfo&&X.stateNode.implementation===nt.implementation){a(K,X.sibling),pt=u(X,nt.children||[]),pt.return=K,K=pt;break t}else{a(K,X);break}else n(K,X);X=X.sibling}pt=Bu(nt,K.mode,pt),pt.return=K,K=pt}return S(K);case Y:return nt=Es(nt),Ve(K,X,nt,pt)}if(G(nt))return Vt(K,X,nt,pt);if(Q(nt)){if(Qt=Q(nt),typeof Qt!="function")throw Error(s(150));return nt=Qt.call(nt),ee(K,X,nt,pt)}if(typeof nt.then=="function")return Ve(K,X,Fl(nt),pt);if(nt.$$typeof===P)return Ve(K,X,Nl(K,nt),pt);Il(K,nt)}return typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint"?(nt=""+nt,X!==null&&X.tag===6?(a(K,X.sibling),pt=u(X,nt),pt.return=K,K=pt):(a(K,X),pt=Iu(nt,K.mode,pt),pt.return=K,K=pt),S(K)):a(K,X)}return function(K,X,nt,pt){try{So=0;var Qt=Ve(K,X,nt,pt);return lr=null,Qt}catch(jt){if(jt===or||jt===Pl)throw jt;var Ae=ti(29,jt,null,K.mode);return Ae.lanes=pt,Ae.return=K,Ae}}}var Ts=Rm(!0),wm=Rm(!1),Fa=!1;function Qu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ju(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ia(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ba(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Le&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=wl(e),hm(e,null,a),n}return Rl(e,o,n,a),wl(e)}function yo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,eo(e,a)}}function $u(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=S:d=d.next=S,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var tf=!1;function Eo(){if(tf){var e=rr;if(e!==null)throw e}}function bo(e,n,a,o){tf=!1;var u=e.updateQueue;Fa=!1;var d=u.firstBaseUpdate,S=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var H=A,it=H.next;H.next=null,S===null?d=it:S.next=it,S=H;var ht=e.alternate;ht!==null&&(ht=ht.updateQueue,A=ht.lastBaseUpdate,A!==S&&(A===null?ht.firstBaseUpdate=it:A.next=it,ht.lastBaseUpdate=H))}if(d!==null){var mt=u.baseState;S=0,ht=it=H=null,A=d;do{var rt=A.lane&-536870913,ct=rt!==A.lane;if(ct?(Se&rt)===rt:(o&rt)===rt){rt!==0&&rt===sr&&(tf=!0),ht!==null&&(ht=ht.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Vt=e,ee=A;rt=n;var Ve=a;switch(ee.tag){case 1:if(Vt=ee.payload,typeof Vt=="function"){mt=Vt.call(Ve,mt,rt);break t}mt=Vt;break t;case 3:Vt.flags=Vt.flags&-65537|128;case 0:if(Vt=ee.payload,rt=typeof Vt=="function"?Vt.call(Ve,mt,rt):Vt,rt==null)break t;mt=v({},mt,rt);break t;case 2:Fa=!0}}rt=A.callback,rt!==null&&(e.flags|=64,ct&&(e.flags|=8192),ct=u.callbacks,ct===null?u.callbacks=[rt]:ct.push(rt))}else ct={lane:rt,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ht===null?(it=ht=ct,H=mt):ht=ht.next=ct,S|=rt;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ct=A,A=ct.next,ct.next=null,u.lastBaseUpdate=ct,u.shared.pending=null}}while(!0);ht===null&&(H=mt),u.baseState=H,u.firstBaseUpdate=it,u.lastBaseUpdate=ht,d===null&&(u.shared.lanes=0),Xa|=S,e.lanes=S,e.memoizedState=mt}}function Dm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Um(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Dm(a[e],n)}var cr=N(null),Bl=N(0);function Lm(e,n){e=ma,gt(Bl,e),gt(cr,n),ma=e|n.baseLanes}function ef(){gt(Bl,ma),gt(cr,cr.current)}function nf(){ma=Bl.current,at(cr),at(Bl)}var ei=N(null),vi=null;function Ha(e){var n=e.alternate;gt(sn,sn.current&1),gt(ei,e),vi===null&&(n===null||cr.current!==null||n.memoizedState!==null)&&(vi=e)}function af(e){gt(sn,sn.current),gt(ei,e),vi===null&&(vi=e)}function Nm(e){e.tag===22?(gt(sn,sn.current),gt(ei,e),vi===null&&(vi=e)):Ga()}function Ga(){gt(sn,sn.current),gt(ei,ei.current)}function ni(e){at(ei),vi===e&&(vi=null),at(sn)}var sn=N(0);function Hl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||uh(a)||fh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var oa=0,ce=null,He=null,un=null,Gl=!1,ur=!1,As=!1,Vl=0,To=0,fr=null,mS=0;function en(){throw Error(s(321))}function sf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!$n(e[a],n[a]))return!1;return!0}function rf(e,n,a,o,u,d){return oa=d,ce=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,L.H=e===null||e.memoizedState===null?gg:Mf,As=!1,d=a(o,u),As=!1,ur&&(d=Pm(n,a,o,u)),Om(e),d}function Om(e){L.H=Ro;var n=He!==null&&He.next!==null;if(oa=0,un=He=ce=null,Gl=!1,To=0,fr=null,n)throw Error(s(300));e===null||fn||(e=e.dependencies,e!==null&&Ll(e)&&(fn=!0))}function Pm(e,n,a,o){ce=e;var u=0;do{if(ur&&(fr=null),To=0,ur=!1,25<=u)throw Error(s(301));if(u+=1,un=He=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}L.H=_g,d=n(a,o)}while(ur);return d}function gS(){var e=L.H,n=e.useState()[0];return n=typeof n.then=="function"?Ao(n):n,e=e.useState()[0],(He!==null?He.memoizedState:null)!==e&&(ce.flags|=1024),n}function of(){var e=Vl!==0;return Vl=0,e}function lf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function cf(e){if(Gl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Gl=!1}oa=0,un=He=ce=null,ur=!1,To=Vl=0,fr=null}function Bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?ce.memoizedState=un=e:un=un.next=e,un}function rn(){if(He===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var n=un===null?ce.memoizedState:un.next;if(n!==null)un=n,He=e;else{if(e===null)throw ce.alternate===null?Error(s(467)):Error(s(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},un===null?ce.memoizedState=un=e:un=un.next=e}return un}function kl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ao(e){var n=To;return To+=1,fr===null&&(fr=[]),e=Tm(fr,e,n),n=ce,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,L.H=n===null||n.memoizedState===null?gg:Mf),e}function Xl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ao(e);if(e.$$typeof===P)return wn(e)}throw Error(s(438,String(e)))}function uf(e){var n=null,a=ce.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ce.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=kl(),ce.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=D;return n.index++,a}function la(e,n){return typeof n=="function"?n(e):n}function Wl(e){var n=rn();return ff(n,He,e)}function ff(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,d=o.pending;if(d!==null){if(u!==null){var S=u.next;u.next=d.next,d.next=S}n.baseQueue=u=d,o.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{n=u.next;var A=S=null,H=null,it=n,ht=!1;do{var mt=it.lane&-536870913;if(mt!==it.lane?(Se&mt)===mt:(oa&mt)===mt){var rt=it.revertLane;if(rt===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null}),mt===sr&&(ht=!0);else if((oa&rt)===rt){it=it.next,rt===sr&&(ht=!0);continue}else mt={lane:0,revertLane:it.revertLane,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},H===null?(A=H=mt,S=d):H=H.next=mt,ce.lanes|=rt,Xa|=rt;mt=it.action,As&&a(d,mt),d=it.hasEagerState?it.eagerState:a(d,mt)}else rt={lane:mt,revertLane:it.revertLane,gesture:it.gesture,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},H===null?(A=H=rt,S=d):H=H.next=rt,ce.lanes|=mt,Xa|=mt;it=it.next}while(it!==null&&it!==n);if(H===null?S=d:H.next=A,!$n(d,e.memoizedState)&&(fn=!0,ht&&(a=rr,a!==null)))throw a;e.memoizedState=d,e.baseState=S,e.baseQueue=H,o.lastRenderedState=d}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function hf(e){var n=rn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do d=e(d,S.action),S=S.next;while(S!==u);$n(d,n.memoizedState)||(fn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function zm(e,n,a){var o=ce,u=rn(),d=ye;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var S=!$n((He||u).memoizedState,a);if(S&&(u.memoizedState=a,fn=!0),u=u.queue,mf(Bm.bind(null,o,u,e),[e]),u.getSnapshot!==n||S||un!==null&&un.memoizedState.tag&1){if(o.flags|=2048,hr(9,{destroy:void 0},Im.bind(null,o,u,a,n),null),Xe===null)throw Error(s(349));d||(oa&127)!==0||Fm(o,n,a)}return a}function Fm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ce.updateQueue,n===null?(n=kl(),ce.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Im(e,n,a,o){n.value=a,n.getSnapshot=o,Hm(n)&&Gm(e)}function Bm(e,n,a){return a(function(){Hm(n)&&Gm(e)})}function Hm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!$n(e,a)}catch{return!0}}function Gm(e){var n=_s(e,2);n!==null&&Yn(n,e,2)}function df(e){var n=Bn();if(typeof e=="function"){var a=e;if(e=a(),As){Ft(!0);try{a()}finally{Ft(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:e},n}function Vm(e,n,a,o){return e.baseState=a,ff(e,He,typeof o=="function"?o:la)}function _S(e,n,a,o,u){if(jl(e))throw Error(s(485));if(e=n.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){d.listeners.push(S)}};L.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,km(n,d)):(d.next=a.next,n.pending=a.next=d)}}function km(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var d=L.T,S={};L.T=S;try{var A=a(u,o),H=L.S;H!==null&&H(S,A),Xm(e,n,A)}catch(it){pf(e,n,it)}finally{d!==null&&S.types!==null&&(d.types=S.types),L.T=d}}else try{d=a(u,o),Xm(e,n,d)}catch(it){pf(e,n,it)}}function Xm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Wm(e,n,o)},function(o){return pf(e,n,o)}):Wm(e,n,a)}function Wm(e,n,a){n.status="fulfilled",n.value=a,qm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,km(e,a)))}function pf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,qm(n),n=n.next;while(n!==o)}e.action=null}function qm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Ym(e,n){return n}function jm(e,n){if(ye){var a=Xe.formState;if(a!==null){t:{var o=ce;if(ye){if(qe){e:{for(var u=qe,d=_i;u.nodeType!==8;){if(!d){u=null;break e}if(u=xi(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){qe=xi(u.nextSibling),o=u.data==="F!";break t}}Pa(o)}o=!1}o&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ym,lastRenderedState:n},a.queue=o,a=dg.bind(null,ce,o),o.dispatch=a,o=df(!1),d=Sf.bind(null,ce,!1,o.queue),o=Bn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=_S.bind(null,ce,u,d,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Zm(e){var n=rn();return Km(n,He,e)}function Km(e,n,a){if(n=ff(e,n,Ym)[0],e=Wl(la)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Ao(n)}catch(S){throw S===or?Pl:S}else o=n;n=rn();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(ce.flags|=2048,hr(9,{destroy:void 0},vS.bind(null,u,a),null)),[o,d,e]}function vS(e,n){e.action=n}function Qm(e){var n=rn(),a=He;if(a!==null)return Km(n,a,e);rn(),n=n.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function hr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ce.updateQueue,n===null&&(n=kl(),ce.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Jm(){return rn().memoizedState}function ql(e,n,a,o){var u=Bn();ce.flags|=e,u.memoizedState=hr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Yl(e,n,a,o){var u=rn();o=o===void 0?null:o;var d=u.memoizedState.inst;He!==null&&o!==null&&sf(o,He.memoizedState.deps)?u.memoizedState=hr(n,d,a,o):(ce.flags|=e,u.memoizedState=hr(1|n,d,a,o))}function $m(e,n){ql(8390656,8,e,n)}function mf(e,n){Yl(2048,8,e,n)}function xS(e){ce.flags|=4;var n=ce.updateQueue;if(n===null)n=kl(),ce.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function tg(e){var n=rn().memoizedState;return xS({ref:n,nextImpl:e}),function(){if((Le&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function eg(e,n){return Yl(4,2,e,n)}function ng(e,n){return Yl(4,4,e,n)}function ig(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function ag(e,n,a){a=a!=null?a.concat([e]):null,Yl(4,4,ig.bind(null,n,e),a)}function gf(){}function sg(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&sf(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function rg(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&sf(n,o[1]))return o[0];if(o=e(),As){Ft(!0);try{e()}finally{Ft(!1)}}return a.memoizedState=[o,n],o}function _f(e,n,a){return a===void 0||(oa&1073741824)!==0&&(Se&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=o0(),ce.lanes|=e,Xa|=e,a)}function og(e,n,a,o){return $n(a,n)?a:cr.current!==null?(e=_f(e,a,o),$n(e,n)||(fn=!0),e):(oa&42)===0||(oa&1073741824)!==0&&(Se&261930)===0?(fn=!0,e.memoizedState=a):(e=o0(),ce.lanes|=e,Xa|=e,n)}function lg(e,n,a,o,u){var d=B.p;B.p=d!==0&&8>d?d:8;var S=L.T,A={};L.T=A,Sf(e,!1,n,a);try{var H=u(),it=L.S;if(it!==null&&it(A,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var ht=pS(H,o);Co(e,n,ht,si(e))}else Co(e,n,o,si(e))}catch(mt){Co(e,n,{then:function(){},status:"rejected",reason:mt},si())}finally{B.p=d,S!==null&&A.types!==null&&(S.types=A.types),L.T=S}}function SS(){}function vf(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=cg(e).queue;lg(e,u,n,$,a===null?SS:function(){return ug(e),a(o)})}function cg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:$},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function ug(e){var n=cg(e);n.next===null&&(n=e.alternate.memoizedState),Co(e,n.next.queue,{},si())}function xf(){return wn(Xo)}function fg(){return rn().memoizedState}function hg(){return rn().memoizedState}function MS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=si();e=Ia(a);var o=Ba(n,e,a);o!==null&&(Yn(o,n,a),yo(o,n,a)),n={cache:Yu()},e.payload=n;return}n=n.return}}function yS(e,n,a){var o=si();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},jl(e)?pg(n,a):(a=zu(e,n,a,o),a!==null&&(Yn(a,e,o),mg(a,n,o)))}function dg(e,n,a){var o=si();Co(e,n,a,o)}function Co(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(jl(e))pg(n,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var S=n.lastRenderedState,A=d(S,a);if(u.hasEagerState=!0,u.eagerState=A,$n(A,S))return Rl(e,n,u,0),Xe===null&&Cl(),!1}catch{}if(a=zu(e,n,u,o),a!==null)return Yn(a,e,o),mg(a,n,o),!0}return!1}function Sf(e,n,a,o){if(o={lane:2,revertLane:Jf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},jl(e)){if(n)throw Error(s(479))}else n=zu(e,a,o,2),n!==null&&Yn(n,e,2)}function jl(e){var n=e.alternate;return e===ce||n!==null&&n===ce}function pg(e,n){ur=Gl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function mg(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,eo(e,a)}}var Ro={readContext:wn,use:Xl,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};Ro.useEffectEvent=en;var gg={readContext:wn,use:Xl,useCallback:function(e,n){return Bn().memoizedState=[e,n===void 0?null:n],e},useContext:wn,useEffect:$m,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,ql(4194308,4,ig.bind(null,n,e),a)},useLayoutEffect:function(e,n){return ql(4194308,4,e,n)},useInsertionEffect:function(e,n){ql(4,2,e,n)},useMemo:function(e,n){var a=Bn();n=n===void 0?null:n;var o=e();if(As){Ft(!0);try{e()}finally{Ft(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Bn();if(a!==void 0){var u=a(n);if(As){Ft(!0);try{a(n)}finally{Ft(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=yS.bind(null,ce,e),[o.memoizedState,e]},useRef:function(e){var n=Bn();return e={current:e},n.memoizedState=e},useState:function(e){e=df(e);var n=e.queue,a=dg.bind(null,ce,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:gf,useDeferredValue:function(e,n){var a=Bn();return _f(a,e,n)},useTransition:function(){var e=df(!1);return e=lg.bind(null,ce,e.queue,!0,!1),Bn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ce,u=Bn();if(ye){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Xe===null)throw Error(s(349));(Se&127)!==0||Fm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,$m(Bm.bind(null,o,d,e),[e]),o.flags|=2048,hr(9,{destroy:void 0},Im.bind(null,o,d,a,n),null),a},useId:function(){var e=Bn(),n=Xe.identifierPrefix;if(ye){var a=Xi,o=ki;a=(o&~(1<<32-Pt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Vl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=mS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:xf,useFormState:jm,useActionState:jm,useOptimistic:function(e){var n=Bn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Sf.bind(null,ce,!0,a),a.dispatch=n,[e,n]},useMemoCache:uf,useCacheRefresh:function(){return Bn().memoizedState=MS.bind(null,ce)},useEffectEvent:function(e){var n=Bn(),a={impl:e};return n.memoizedState=a,function(){if((Le&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Mf={readContext:wn,use:Xl,useCallback:sg,useContext:wn,useEffect:mf,useImperativeHandle:ag,useInsertionEffect:eg,useLayoutEffect:ng,useMemo:rg,useReducer:Wl,useRef:Jm,useState:function(){return Wl(la)},useDebugValue:gf,useDeferredValue:function(e,n){var a=rn();return og(a,He.memoizedState,e,n)},useTransition:function(){var e=Wl(la)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:Ao(e),n]},useSyncExternalStore:zm,useId:fg,useHostTransitionStatus:xf,useFormState:Zm,useActionState:Zm,useOptimistic:function(e,n){var a=rn();return Vm(a,He,e,n)},useMemoCache:uf,useCacheRefresh:hg};Mf.useEffectEvent=tg;var _g={readContext:wn,use:Xl,useCallback:sg,useContext:wn,useEffect:mf,useImperativeHandle:ag,useInsertionEffect:eg,useLayoutEffect:ng,useMemo:rg,useReducer:hf,useRef:Jm,useState:function(){return hf(la)},useDebugValue:gf,useDeferredValue:function(e,n){var a=rn();return He===null?_f(a,e,n):og(a,He.memoizedState,e,n)},useTransition:function(){var e=hf(la)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:Ao(e),n]},useSyncExternalStore:zm,useId:fg,useHostTransitionStatus:xf,useFormState:Qm,useActionState:Qm,useOptimistic:function(e,n){var a=rn();return He!==null?Vm(a,He,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:uf,useCacheRefresh:hg};_g.useEffectEvent=tg;function yf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ef={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=si(),u=Ia(o);u.payload=n,a!=null&&(u.callback=a),n=Ba(e,u,o),n!==null&&(Yn(n,e,o),yo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=si(),u=Ia(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ba(e,u,o),n!==null&&(Yn(n,e,o),yo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=si(),o=Ia(a);o.tag=2,n!=null&&(o.callback=n),n=Ba(e,o,a),n!==null&&(Yn(n,e,a),yo(n,e,a))}};function vg(e,n,a,o,u,d,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,S):n.prototype&&n.prototype.isPureReactComponent?!po(a,o)||!po(u,d):!0}function xg(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Ef.enqueueReplaceState(n,n.state,null)}function Cs(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=v({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Sg(e){Al(e)}function Mg(e){console.error(e)}function yg(e){Al(e)}function Zl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Eg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function bf(e,n,a){return a=Ia(a),a.tag=3,a.payload={element:null},a.callback=function(){Zl(e,n)},a}function bg(e){return e=Ia(e),e.tag=3,e}function Tg(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;e.payload=function(){return u(d)},e.callback=function(){Eg(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){Eg(n,a,o),typeof u!="function"&&(Wa===null?Wa=new Set([this]):Wa.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function ES(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&ar(n,a,u,!0),a=ei.current,a!==null){switch(a.tag){case 31:case 13:return vi===null?oc():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===zl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Zf(e,o,u)),!1;case 22:return a.flags|=65536,o===zl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Zf(e,o,u)),!1}throw Error(s(435,a.tag))}return Zf(e,o,u),oc(),!1}if(ye)return n=ei.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Vu&&(e=Error(s(422),{cause:o}),_o(pi(e,a)))):(o!==Vu&&(n=Error(s(423),{cause:o}),_o(pi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=pi(o,a),u=bf(e.stateNode,o,u),$u(e,u),nn!==4&&(nn=2)),!1;var d=Error(s(520),{cause:o});if(d=pi(d,a),zo===null?zo=[d]:zo.push(d),nn!==4&&(nn=2),n===null)return!0;o=pi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=bf(a.stateNode,o,e),$u(a,e),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Wa===null||!Wa.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=bg(u),Tg(u,e,a,o),$u(a,u),!1}a=a.return}while(a!==null);return!1}var Tf=Error(s(461)),fn=!1;function Dn(e,n,a,o){n.child=e===null?wm(n,null,a,o):Ts(n,e.child,a,o)}function Ag(e,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var S={};for(var A in o)A!=="ref"&&(S[A]=o[A])}else S=o;return Ms(n),o=rf(e,n,a,S,d,u),A=of(),e!==null&&!fn?(lf(e,n,u),ca(e,n,u)):(ye&&A&&Hu(n),n.flags|=1,Dn(e,n,o,u),n.child)}function Cg(e,n,a,o,u){if(e===null){var d=a.type;return typeof d=="function"&&!Fu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,Rg(e,n,d,o,u)):(e=Dl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!Nf(e,u)){var S=d.memoizedProps;if(a=a.compare,a=a!==null?a:po,a(S,o)&&e.ref===n.ref)return ca(e,n,u)}return n.flags|=1,e=ia(d,o),e.ref=n.ref,e.return=n,n.child=e}function Rg(e,n,a,o,u){if(e!==null){var d=e.memoizedProps;if(po(d,o)&&e.ref===n.ref)if(fn=!1,n.pendingProps=o=d,Nf(e,u))(e.flags&131072)!==0&&(fn=!0);else return n.lanes=e.lanes,ca(e,n,u)}return Af(e,n,a,o,u)}function wg(e,n,a,o){var u=o.children,d=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return Dg(e,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ol(n,d!==null?d.cachePool:null),d!==null?Lm(n,d):ef(),Nm(n);else return o=n.lanes=536870912,Dg(e,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(Ol(n,d.cachePool),Lm(n,d),Ga(),n.memoizedState=null):(e!==null&&Ol(n,null),ef(),Ga());return Dn(e,n,u,a),n.child}function wo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Dg(e,n,a,o,u){var d=Zu();return d=d===null?null:{parent:cn._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},e!==null&&Ol(n,null),ef(),Nm(n),e!==null&&ar(e,n,o,!0),n.childLanes=u,null}function Kl(e,n){return n=Jl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Ug(e,n,a){return Ts(n,e.child,null,a),e=Kl(n,n.pendingProps),e.flags|=2,ni(n),n.memoizedState=null,e}function bS(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(ye){if(o.mode==="hidden")return e=Kl(n,o),n.lanes=536870912,wo(null,e);if(af(n),(e=qe)?(e=k0(e,_i),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Na!==null?{id:ki,overflow:Xi}:null,retryLane:536870912,hydrationErrors:null},a=pm(e),a.return=n,n.child=a,Rn=n,qe=null)):e=null,e===null)throw Pa(n);return n.lanes=536870912,null}return Kl(n,o)}var d=e.memoizedState;if(d!==null){var S=d.dehydrated;if(af(n),u)if(n.flags&256)n.flags&=-257,n=Ug(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(fn||ar(e,n,a,!1),u=(a&e.childLanes)!==0,fn||u){if(o=Xe,o!==null&&(S=ks(o,a),S!==0&&S!==d.retryLane))throw d.retryLane=S,_s(e,S),Yn(o,e,S),Tf;oc(),n=Ug(e,n,a)}else e=d.treeContext,qe=xi(S.nextSibling),Rn=n,ye=!0,Oa=null,_i=!1,e!==null&&_m(n,e),n=Kl(n,o),n.flags|=4096;return n}return e=ia(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Ql(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Af(e,n,a,o,u){return Ms(n),a=rf(e,n,a,o,void 0,u),o=of(),e!==null&&!fn?(lf(e,n,u),ca(e,n,u)):(ye&&o&&Hu(n),n.flags|=1,Dn(e,n,a,u),n.child)}function Lg(e,n,a,o,u,d){return Ms(n),n.updateQueue=null,a=Pm(n,o,a,u),Om(e),o=of(),e!==null&&!fn?(lf(e,n,d),ca(e,n,d)):(ye&&o&&Hu(n),n.flags|=1,Dn(e,n,a,d),n.child)}function Ng(e,n,a,o,u){if(Ms(n),n.stateNode===null){var d=tr,S=a.contextType;typeof S=="object"&&S!==null&&(d=wn(S)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Ef,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Qu(n),S=a.contextType,d.context=typeof S=="object"&&S!==null?wn(S):tr,d.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(yf(n,a,S,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(S=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),S!==d.state&&Ef.enqueueReplaceState(d,d.state,null),bo(n,o,d,u),Eo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){d=n.stateNode;var A=n.memoizedProps,H=Cs(a,A);d.props=H;var it=d.context,ht=a.contextType;S=tr,typeof ht=="object"&&ht!==null&&(S=wn(ht));var mt=a.getDerivedStateFromProps;ht=typeof mt=="function"||typeof d.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ht||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(A||it!==S)&&xg(n,d,o,S),Fa=!1;var rt=n.memoizedState;d.state=rt,bo(n,o,d,u),Eo(),it=n.memoizedState,A||rt!==it||Fa?(typeof mt=="function"&&(yf(n,a,mt,o),it=n.memoizedState),(H=Fa||vg(n,a,H,o,rt,it,S))?(ht||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=it),d.props=o,d.state=it,d.context=S,o=H):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Ju(e,n),S=n.memoizedProps,ht=Cs(a,S),d.props=ht,mt=n.pendingProps,rt=d.context,it=a.contextType,H=tr,typeof it=="object"&&it!==null&&(H=wn(it)),A=a.getDerivedStateFromProps,(it=typeof A=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S!==mt||rt!==H)&&xg(n,d,o,H),Fa=!1,rt=n.memoizedState,d.state=rt,bo(n,o,d,u),Eo();var ct=n.memoizedState;S!==mt||rt!==ct||Fa||e!==null&&e.dependencies!==null&&Ll(e.dependencies)?(typeof A=="function"&&(yf(n,a,A,o),ct=n.memoizedState),(ht=Fa||vg(n,a,ht,o,rt,ct,H)||e!==null&&e.dependencies!==null&&Ll(e.dependencies))?(it||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ct,H),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ct,H)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||S===e.memoizedProps&&rt===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&rt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ct),d.props=o,d.state=ct,d.context=H,o=ht):(typeof d.componentDidUpdate!="function"||S===e.memoizedProps&&rt===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&rt===e.memoizedState||(n.flags|=1024),o=!1)}return d=o,Ql(e,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&o?(n.child=Ts(n,e.child,null,u),n.child=Ts(n,null,a,u)):Dn(e,n,a,u),n.memoizedState=d.state,e=n.child):e=ca(e,n,u),e}function Og(e,n,a,o){return xs(),n.flags|=256,Dn(e,n,a,o),n.child}var Cf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Rf(e){return{baseLanes:e,cachePool:Em()}}function wf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ai),e}function Pg(e,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,S;if((S=d)||(S=e!==null&&e.memoizedState===null?!1:(sn.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(ye){if(u?Ha(n):Ga(),(e=qe)?(e=k0(e,_i),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Na!==null?{id:ki,overflow:Xi}:null,retryLane:536870912,hydrationErrors:null},a=pm(e),a.return=n,n.child=a,Rn=n,qe=null)):e=null,e===null)throw Pa(n);return fh(e)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(Ga(),u=n.mode,A=Jl({mode:"hidden",children:A},u),o=vs(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=Rf(a),o.childLanes=wf(e,S,a),n.memoizedState=Cf,wo(null,o)):(Ha(n),Df(n,A))}var H=e.memoizedState;if(H!==null&&(A=H.dehydrated,A!==null)){if(d)n.flags&256?(Ha(n),n.flags&=-257,n=Uf(e,n,a)):n.memoizedState!==null?(Ga(),n.child=e.child,n.flags|=128,n=null):(Ga(),A=o.fallback,u=n.mode,o=Jl({mode:"visible",children:o.children},u),A=vs(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,Ts(n,e.child,null,a),o=n.child,o.memoizedState=Rf(a),o.childLanes=wf(e,S,a),n.memoizedState=Cf,n=wo(null,o));else if(Ha(n),fh(A)){if(S=A.nextSibling&&A.nextSibling.dataset,S)var it=S.dgst;S=it,o=Error(s(419)),o.stack="",o.digest=S,_o({value:o,source:null,stack:null}),n=Uf(e,n,a)}else if(fn||ar(e,n,a,!1),S=(a&e.childLanes)!==0,fn||S){if(S=Xe,S!==null&&(o=ks(S,a),o!==0&&o!==H.retryLane))throw H.retryLane=o,_s(e,o),Yn(S,e,o),Tf;uh(A)||oc(),n=Uf(e,n,a)}else uh(A)?(n.flags|=192,n.child=e.child,n=null):(e=H.treeContext,qe=xi(A.nextSibling),Rn=n,ye=!0,Oa=null,_i=!1,e!==null&&_m(n,e),n=Df(n,o.children),n.flags|=4096);return n}return u?(Ga(),A=o.fallback,u=n.mode,H=e.child,it=H.sibling,o=ia(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,it!==null?A=ia(it,A):(A=vs(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,wo(null,o),o=n.child,A=e.child.memoizedState,A===null?A=Rf(a):(u=A.cachePool,u!==null?(H=cn._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=Em(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=wf(e,S,a),n.memoizedState=Cf,wo(e.child,o)):(Ha(n),a=e.child,e=a.sibling,a=ia(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function Df(e,n){return n=Jl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Jl(e,n){return e=ti(22,e,null,n),e.lanes=0,e}function Uf(e,n,a){return Ts(n,e.child,null,a),e=Df(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function zg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Wu(e.return,n,a)}function Lf(e,n,a,o,u,d){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=a,S.tailMode=u,S.treeForkCount=d)}function Fg(e,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var S=sn.current,A=(S&2)!==0;if(A?(S=S&1|2,n.flags|=128):S&=1,gt(sn,S),Dn(e,n,o,a),o=ye?go:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zg(e,a,n);else if(e.tag===19)zg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Hl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Lf(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Hl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Lf(n,!0,a,null,d,o);break;case"together":Lf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ca(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Xa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(ar(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ia(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ia(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Nf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Ll(e)))}function TS(e,n,a){switch(n.tag){case 3:Dt(n,n.stateNode.containerInfo),za(n,cn,e.memoizedState.cache),xs();break;case 27:case 5:Ht(n);break;case 4:Dt(n,n.stateNode.containerInfo);break;case 10:za(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,af(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ha(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Pg(e,n,a):(Ha(n),e=ca(e,n,a),e!==null?e.sibling:null);Ha(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(ar(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Fg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),gt(sn,sn.current),o)break;return null;case 22:return n.lanes=0,wg(e,n,a,n.pendingProps);case 24:za(n,cn,e.memoizedState.cache)}return ca(e,n,a)}function Ig(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)fn=!0;else{if(!Nf(e,a)&&(n.flags&128)===0)return fn=!1,TS(e,n,a);fn=(e.flags&131072)!==0}else fn=!1,ye&&(n.flags&1048576)!==0&&gm(n,go,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Es(n.elementType),n.type=e,typeof e=="function")Fu(e)?(o=Cs(e,o),n.tag=1,n=Ng(null,n,e,o,a)):(n.tag=0,n=Af(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===U){n.tag=11,n=Ag(null,n,e,o,a);break t}else if(u===z){n.tag=14,n=Cg(null,n,e,o,a);break t}}throw n=tt(e)||e,Error(s(306,n,""))}}return n;case 0:return Af(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Cs(o,n.pendingProps),Ng(e,n,o,u,a);case 3:t:{if(Dt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Ju(e,n),bo(n,o,null,a);var S=n.memoizedState;if(o=S.cache,za(n,cn,o),o!==d.cache&&qu(n,[cn],a,!0),Eo(),o=S.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=Og(e,n,o,a);break t}else if(o!==u){u=pi(Error(s(424)),n),_o(u),n=Og(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,qe=xi(e.firstChild),Rn=n,ye=!0,Oa=null,_i=!0,a=wm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(xs(),o===u){n=ca(e,n,a);break t}Dn(e,n,o,a)}n=n.child}return n;case 26:return Ql(e,n),e===null?(a=Z0(n.type,null,n.pendingProps,null))?n.memoizedState=a:ye||(a=n.type,e=n.pendingProps,o=pc(ot.current).createElement(a),o[ln]=n,o[yn]=e,Un(o,a,e),C(o),n.stateNode=o):n.memoizedState=Z0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Ht(n),e===null&&ye&&(o=n.stateNode=q0(n.type,n.pendingProps,ot.current),Rn=n,_i=!0,u=qe,Za(n.type)?(hh=u,qe=xi(o.firstChild)):qe=u),Dn(e,n,n.pendingProps.children,a),Ql(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&ye&&((u=o=qe)&&(o=eM(o,n.type,n.pendingProps,_i),o!==null?(n.stateNode=o,Rn=n,qe=xi(o.firstChild),_i=!1,u=!0):u=!1),u||Pa(n)),Ht(n),u=n.type,d=n.pendingProps,S=e!==null?e.memoizedProps:null,o=d.children,oh(u,d)?o=null:S!==null&&oh(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=rf(e,n,gS,null,null,a),Xo._currentValue=u),Ql(e,n),Dn(e,n,o,a),n.child;case 6:return e===null&&ye&&((e=a=qe)&&(a=nM(a,n.pendingProps,_i),a!==null?(n.stateNode=a,Rn=n,qe=null,e=!0):e=!1),e||Pa(n)),null;case 13:return Pg(e,n,a);case 4:return Dt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Ts(n,null,o,a):Dn(e,n,o,a),n.child;case 11:return Ag(e,n,n.type,n.pendingProps,a);case 7:return Dn(e,n,n.pendingProps,a),n.child;case 8:return Dn(e,n,n.pendingProps.children,a),n.child;case 12:return Dn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,za(n,n.type,o.value),Dn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Ms(n),u=wn(u),o=o(u),n.flags|=1,Dn(e,n,o,a),n.child;case 14:return Cg(e,n,n.type,n.pendingProps,a);case 15:return Rg(e,n,n.type,n.pendingProps,a);case 19:return Fg(e,n,a);case 31:return bS(e,n,a);case 22:return wg(e,n,a,n.pendingProps);case 24:return Ms(n),o=wn(cn),e===null?(u=Zu(),u===null&&(u=Xe,d=Yu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},Qu(n),za(n,cn,u)):((e.lanes&a)!==0&&(Ju(e,n),bo(n,null,null,a),Eo()),u=e.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),za(n,cn,o)):(o=d.cache,za(n,cn,o),o!==u.cache&&qu(n,[cn],a,!0))),Dn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ua(e){e.flags|=4}function Of(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(f0())e.flags|=8192;else throw bs=zl,Ku}else e.flags&=-16777217}function Bg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!t_(n))if(f0())e.flags|=8192;else throw bs=zl,Ku}function $l(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Pe():536870912,e.lanes|=n,gr|=n)}function Do(e,n){if(!ye)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ye(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function AS(e,n,a){var o=n.pendingProps;switch(Gu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(n),null;case 1:return Ye(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ra(cn),kt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ir(n)?ua(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ku())),Ye(n),null;case 26:var u=n.type,d=n.memoizedState;return e===null?(ua(n),d!==null?(Ye(n),Bg(n,d)):(Ye(n),Of(n,u,null,o,a))):d?d!==e.memoizedState?(ua(n),Ye(n),Bg(n,d)):(Ye(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&ua(n),Ye(n),Of(n,u,e,o,a)),null;case 27:if(me(n),a=ot.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ua(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ye(n),null}e=At.current,ir(n)?vm(n):(e=q0(u,o,a),n.stateNode=e,ua(n))}return Ye(n),null;case 5:if(me(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ua(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ye(n),null}if(d=At.current,ir(n))vm(n);else{var S=pc(ot.current);switch(d){case 1:d=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=S.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?S.createElement(u,{is:o.is}):S.createElement(u)}}d[ln]=n,d[yn]=o;t:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)d.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break t;for(;S.sibling===null;){if(S.return===null||S.return===n)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=d;t:switch(Un(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&ua(n)}}return Ye(n),Of(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ua(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=ot.current,ir(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Rn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[ln]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||P0(e.nodeValue,a)),e||Pa(n,!0)}else e=pc(e).createTextNode(o),e[ln]=n,n.stateNode=e}return Ye(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=ir(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[ln]=n}else xs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ye(n),e=!1}else a=ku(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ni(n),n):(ni(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ye(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=ir(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[ln]=n}else xs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ye(n),u=!1}else u=ku(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ni(n),n):(ni(n),null)}return ni(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),$l(n,n.updateQueue),Ye(n),null);case 4:return kt(),e===null&&nh(n.stateNode.containerInfo),Ye(n),null;case 10:return ra(n.type),Ye(n),null;case 19:if(at(sn),o=n.memoizedState,o===null)return Ye(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)Do(o,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=Hl(e),d!==null){for(n.flags|=128,Do(o,!1),e=d.updateQueue,n.updateQueue=e,$l(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)dm(a,e),a=a.sibling;return gt(sn,sn.current&1|2),ye&&aa(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&b()>ac&&(n.flags|=128,u=!0,Do(o,!1),n.lanes=4194304)}else{if(!u)if(e=Hl(d),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,$l(n,e),Do(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!ye)return Ye(n),null}else 2*b()-o.renderingStartTime>ac&&a!==536870912&&(n.flags|=128,u=!0,Do(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(e=o.last,e!==null?e.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=b(),e.sibling=null,a=sn.current,gt(sn,u?a&1|2:a&1),ye&&aa(n,o.treeForkCount),e):(Ye(n),null);case 22:case 23:return ni(n),nf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ye(n),n.subtreeFlags&6&&(n.flags|=8192)):Ye(n),a=n.updateQueue,a!==null&&$l(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&at(ys),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ra(cn),Ye(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function CS(e,n){switch(Gu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ra(cn),kt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return me(n),null;case 31:if(n.memoizedState!==null){if(ni(n),n.alternate===null)throw Error(s(340));xs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ni(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));xs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return at(sn),null;case 4:return kt(),null;case 10:return ra(n.type),null;case 22:case 23:return ni(n),nf(),e!==null&&at(ys),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ra(cn),null;case 25:return null;default:return null}}function Hg(e,n){switch(Gu(n),n.tag){case 3:ra(cn),kt();break;case 26:case 27:case 5:me(n);break;case 4:kt();break;case 31:n.memoizedState!==null&&ni(n);break;case 13:ni(n);break;case 19:at(sn);break;case 10:ra(n.type);break;case 22:case 23:ni(n),nf(),e!==null&&at(ys);break;case 24:ra(cn)}}function Uo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var d=a.create,S=a.inst;o=d(),S.destroy=o}a=a.next}while(a!==u)}}catch(A){Ie(n,n.return,A)}}function Va(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&e)===e){var S=o.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,u=n;var H=a,it=A;try{it()}catch(ht){Ie(u,H,ht)}}}o=o.next}while(o!==d)}}catch(ht){Ie(n,n.return,ht)}}function Gg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Um(n,a)}catch(o){Ie(e,e.return,o)}}}function Vg(e,n,a){a.props=Cs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ie(e,n,o)}}function Lo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Ie(e,n,u)}}function Wi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ie(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ie(e,n,u)}else a.current=null}function kg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ie(e,e.return,u)}}function Pf(e,n,a){try{var o=e.stateNode;ZS(o,e.type,a,n),o[yn]=n}catch(u){Ie(e,e.return,u)}}function Xg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Za(e.type)||e.tag===4}function zf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Xg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Za(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ff(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ea));else if(o!==4&&(o===27&&Za(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Ff(e,n,a),e=e.sibling;e!==null;)Ff(e,n,a),e=e.sibling}function tc(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Za(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(tc(e,n,a),e=e.sibling;e!==null;)tc(e,n,a),e=e.sibling}function Wg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Un(n,o,a),n[ln]=e,n[yn]=a}catch(d){Ie(e,e.return,d)}}var fa=!1,hn=!1,If=!1,qg=typeof WeakSet=="function"?WeakSet:Set,xn=null;function RS(e,n){if(e=e.containerInfo,sh=Mc,e=am(e),Du(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var S=0,A=-1,H=-1,it=0,ht=0,mt=e,rt=null;e:for(;;){for(var ct;mt!==a||u!==0&&mt.nodeType!==3||(A=S+u),mt!==d||o!==0&&mt.nodeType!==3||(H=S+o),mt.nodeType===3&&(S+=mt.nodeValue.length),(ct=mt.firstChild)!==null;)rt=mt,mt=ct;for(;;){if(mt===e)break e;if(rt===a&&++it===u&&(A=S),rt===d&&++ht===o&&(H=S),(ct=mt.nextSibling)!==null)break;mt=rt,rt=mt.parentNode}mt=ct}a=A===-1||H===-1?null:{start:A,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(rh={focusedElem:e,selectionRange:a},Mc=!1,xn=n;xn!==null;)if(n=xn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,xn=e;else for(;xn!==null;){switch(n=xn,d=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var Vt=Cs(a.type,u);e=o.getSnapshotBeforeUpdate(Vt,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(ee){Ie(a,a.return,ee)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)ch(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ch(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,xn=e;break}xn=n.return}}function Yg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:da(e,a),o&4&&Uo(5,a);break;case 1:if(da(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){Ie(a,a.return,S)}else{var u=Cs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Ie(a,a.return,S)}}o&64&&Gg(a),o&512&&Lo(a,a.return);break;case 3:if(da(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Um(e,n)}catch(S){Ie(a,a.return,S)}}break;case 27:n===null&&o&4&&Wg(a);case 26:case 5:da(e,a),n===null&&o&4&&kg(a),o&512&&Lo(a,a.return);break;case 12:da(e,a);break;case 31:da(e,a),o&4&&Kg(e,a);break;case 13:da(e,a),o&4&&Qg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=FS.bind(null,a),iM(e,a))));break;case 22:if(o=a.memoizedState!==null||fa,!o){n=n!==null&&n.memoizedState!==null||hn,u=fa;var d=hn;fa=o,(hn=n)&&!d?pa(e,a,(a.subtreeFlags&8772)!==0):da(e,a),fa=u,hn=d}break;case 30:break;default:da(e,a)}}function jg(e){var n=e.alternate;n!==null&&(e.alternate=null,jg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&so(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ke=null,kn=!1;function ha(e,n,a){for(a=a.child;a!==null;)Zg(e,n,a),a=a.sibling}function Zg(e,n,a){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(yt,a)}catch{}switch(a.tag){case 26:hn||Wi(a,n),ha(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:hn||Wi(a,n);var o=Ke,u=kn;Za(a.type)&&(Ke=a.stateNode,kn=!1),ha(e,n,a),Go(a.stateNode),Ke=o,kn=u;break;case 5:hn||Wi(a,n);case 6:if(o=Ke,u=kn,Ke=null,ha(e,n,a),Ke=o,kn=u,Ke!==null)if(kn)try{(Ke.nodeType===9?Ke.body:Ke.nodeName==="HTML"?Ke.ownerDocument.body:Ke).removeChild(a.stateNode)}catch(d){Ie(a,n,d)}else try{Ke.removeChild(a.stateNode)}catch(d){Ie(a,n,d)}break;case 18:Ke!==null&&(kn?(e=Ke,G0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),br(e)):G0(Ke,a.stateNode));break;case 4:o=Ke,u=kn,Ke=a.stateNode.containerInfo,kn=!0,ha(e,n,a),Ke=o,kn=u;break;case 0:case 11:case 14:case 15:Va(2,a,n),hn||Va(4,a,n),ha(e,n,a);break;case 1:hn||(Wi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Vg(a,n,o)),ha(e,n,a);break;case 21:ha(e,n,a);break;case 22:hn=(o=hn)||a.memoizedState!==null,ha(e,n,a),hn=o;break;default:ha(e,n,a)}}function Kg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{br(e)}catch(a){Ie(n,n.return,a)}}}function Qg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{br(e)}catch(a){Ie(n,n.return,a)}}function wS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new qg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new qg),n;default:throw Error(s(435,e.tag))}}function ec(e,n){var a=wS(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=IS.bind(null,e,o);o.then(u,u)}})}function Xn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=e,S=n,A=S;t:for(;A!==null;){switch(A.tag){case 27:if(Za(A.type)){Ke=A.stateNode,kn=!1;break t}break;case 5:Ke=A.stateNode,kn=!1;break t;case 3:case 4:Ke=A.stateNode.containerInfo,kn=!0;break t}A=A.return}if(Ke===null)throw Error(s(160));Zg(d,S,u),Ke=null,kn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Jg(n,e),n=n.sibling}var Ui=null;function Jg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Xn(n,e),Wn(e),o&4&&(Va(3,e,e.return),Uo(3,e),Va(5,e,e.return));break;case 1:Xn(n,e),Wn(e),o&512&&(hn||a===null||Wi(a,a.return)),o&64&&fa&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ui;if(Xn(n,e),Wn(e),o&512&&(hn||a===null||Wi(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[hs]||d[ln]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Un(d,o,a),d[ln]=e,C(d),o=d;break t;case"link":var S=J0("link","href",u).get(o+(a.href||""));if(S){for(var A=0;A<S.length;A++)if(d=S[A],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(A,1);break e}}d=u.createElement(o),Un(d,o,a),u.head.appendChild(d);break;case"meta":if(S=J0("meta","content",u).get(o+(a.content||""))){for(A=0;A<S.length;A++)if(d=S[A],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(A,1);break e}}d=u.createElement(o),Un(d,o,a),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[ln]=e,C(d),o=d}e.stateNode=o}else $0(u,e.type,e.stateNode);else e.stateNode=Q0(u,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?$0(u,e.type,e.stateNode):Q0(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Pf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Xn(n,e),Wn(e),o&512&&(hn||a===null||Wi(a,a.return)),a!==null&&o&4&&Pf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Xn(n,e),Wn(e),o&512&&(hn||a===null||Wi(a,a.return)),e.flags&32){u=e.stateNode;try{pn(u,"")}catch(Vt){Ie(e,e.return,Vt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Pf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(If=!0);break;case 6:if(Xn(n,e),Wn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Vt){Ie(e,e.return,Vt)}}break;case 3:if(_c=null,u=Ui,Ui=mc(n.containerInfo),Xn(n,e),Ui=u,Wn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{br(n.containerInfo)}catch(Vt){Ie(e,e.return,Vt)}If&&(If=!1,$g(e));break;case 4:o=Ui,Ui=mc(e.stateNode.containerInfo),Xn(n,e),Wn(e),Ui=o;break;case 12:Xn(n,e),Wn(e);break;case 31:Xn(n,e),Wn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ec(e,o)));break;case 13:Xn(n,e),Wn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ic=b()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ec(e,o)));break;case 22:u=e.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,it=fa,ht=hn;if(fa=it||u,hn=ht||H,Xn(n,e),hn=ht,fa=it,Wn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||fa||hn||Rs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(d=H.stateNode,u)S=d.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{A=H.stateNode;var mt=H.memoizedProps.style,rt=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;A.style.display=rt==null||typeof rt=="boolean"?"":(""+rt).trim()}}catch(Vt){Ie(H,H.return,Vt)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(Vt){Ie(H,H.return,Vt)}}}else if(n.tag===18){if(a===null){H=n;try{var ct=H.stateNode;u?V0(ct,!0):V0(H.stateNode,!1)}catch(Vt){Ie(H,H.return,Vt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,ec(e,a))));break;case 19:Xn(n,e),Wn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ec(e,o)));break;case 30:break;case 21:break;default:Xn(n,e),Wn(e)}}function Wn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Xg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=zf(e);tc(e,d,u);break;case 5:var S=a.stateNode;a.flags&32&&(pn(S,""),a.flags&=-33);var A=zf(e);tc(e,A,S);break;case 3:case 4:var H=a.stateNode.containerInfo,it=zf(e);Ff(e,it,H);break;default:throw Error(s(161))}}catch(ht){Ie(e,e.return,ht)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function $g(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;$g(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function da(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Yg(e,n.alternate,n),n=n.sibling}function Rs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Va(4,n,n.return),Rs(n);break;case 1:Wi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Vg(n,n.return,a),Rs(n);break;case 27:Go(n.stateNode);case 26:case 5:Wi(n,n.return),Rs(n);break;case 22:n.memoizedState===null&&Rs(n);break;case 30:Rs(n);break;default:Rs(n)}e=e.sibling}}function pa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,d=n,S=d.flags;switch(d.tag){case 0:case 11:case 15:pa(u,d,a),Uo(4,d);break;case 1:if(pa(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(it){Ie(o,o.return,it)}if(o=d,u=o.updateQueue,u!==null){var A=o.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)Dm(H[u],A)}catch(it){Ie(o,o.return,it)}}a&&S&64&&Gg(d),Lo(d,d.return);break;case 27:Wg(d);case 26:case 5:pa(u,d,a),a&&o===null&&S&4&&kg(d),Lo(d,d.return);break;case 12:pa(u,d,a);break;case 31:pa(u,d,a),a&&S&4&&Kg(u,d);break;case 13:pa(u,d,a),a&&S&4&&Qg(u,d);break;case 22:d.memoizedState===null&&pa(u,d,a),Lo(d,d.return);break;case 30:break;default:pa(u,d,a)}n=n.sibling}}function Bf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&vo(a))}function Hf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&vo(e))}function Li(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)t0(e,n,a,o),n=n.sibling}function t0(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Li(e,n,a,o),u&2048&&Uo(9,n);break;case 1:Li(e,n,a,o);break;case 3:Li(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&vo(e)));break;case 12:if(u&2048){Li(e,n,a,o),e=n.stateNode;try{var d=n.memoizedProps,S=d.id,A=d.onPostCommit;typeof A=="function"&&A(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(H){Ie(n,n.return,H)}}else Li(e,n,a,o);break;case 31:Li(e,n,a,o);break;case 13:Li(e,n,a,o);break;case 23:break;case 22:d=n.stateNode,S=n.alternate,n.memoizedState!==null?d._visibility&2?Li(e,n,a,o):No(e,n):d._visibility&2?Li(e,n,a,o):(d._visibility|=2,dr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Bf(S,n);break;case 24:Li(e,n,a,o),u&2048&&Hf(n.alternate,n);break;default:Li(e,n,a,o)}}function dr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=e,S=n,A=a,H=o,it=S.flags;switch(S.tag){case 0:case 11:case 15:dr(d,S,A,H,u),Uo(8,S);break;case 23:break;case 22:var ht=S.stateNode;S.memoizedState!==null?ht._visibility&2?dr(d,S,A,H,u):No(d,S):(ht._visibility|=2,dr(d,S,A,H,u)),u&&it&2048&&Bf(S.alternate,S);break;case 24:dr(d,S,A,H,u),u&&it&2048&&Hf(S.alternate,S);break;default:dr(d,S,A,H,u)}n=n.sibling}}function No(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:No(a,o),u&2048&&Bf(o.alternate,o);break;case 24:No(a,o),u&2048&&Hf(o.alternate,o);break;default:No(a,o)}n=n.sibling}}var Oo=8192;function pr(e,n,a){if(e.subtreeFlags&Oo)for(e=e.child;e!==null;)e0(e,n,a),e=e.sibling}function e0(e,n,a){switch(e.tag){case 26:pr(e,n,a),e.flags&Oo&&e.memoizedState!==null&&mM(a,Ui,e.memoizedState,e.memoizedProps);break;case 5:pr(e,n,a);break;case 3:case 4:var o=Ui;Ui=mc(e.stateNode.containerInfo),pr(e,n,a),Ui=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Oo,Oo=16777216,pr(e,n,a),Oo=o):pr(e,n,a));break;default:pr(e,n,a)}}function n0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Po(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,a0(o,e)}n0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)i0(e),e=e.sibling}function i0(e){switch(e.tag){case 0:case 11:case 15:Po(e),e.flags&2048&&Va(9,e,e.return);break;case 3:Po(e);break;case 12:Po(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,nc(e)):Po(e);break;default:Po(e)}}function nc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,a0(o,e)}n0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Va(8,n,n.return),nc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,nc(n));break;default:nc(n)}e=e.sibling}}function a0(e,n){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:Va(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:vo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,xn=o;else t:for(a=e;xn!==null;){o=xn;var u=o.sibling,d=o.return;if(jg(o),o===a){xn=null;break t}if(u!==null){u.return=d,xn=u;break t}xn=d}}}var DS={getCacheForType:function(e){var n=wn(cn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return wn(cn).controller.signal}},US=typeof WeakMap=="function"?WeakMap:Map,Le=0,Xe=null,_e=null,Se=0,Fe=0,ii=null,ka=!1,mr=!1,Gf=!1,ma=0,nn=0,Xa=0,ws=0,Vf=0,ai=0,gr=0,zo=null,qn=null,kf=!1,ic=0,s0=0,ac=1/0,sc=null,Wa=null,mn=0,qa=null,_r=null,ga=0,Xf=0,Wf=null,r0=null,Fo=0,qf=null;function si(){return(Le&2)!==0&&Se!==0?Se&-Se:L.T!==null?Jf():io()}function o0(){if(ai===0)if((Se&536870912)===0||ye){var e=Tt;Tt<<=1,(Tt&3932160)===0&&(Tt=262144),ai=e}else ai=536870912;return e=ei.current,e!==null&&(e.flags|=32),ai}function Yn(e,n,a){(e===Xe&&(Fe===2||Fe===9)||e.cancelPendingCommit!==null)&&(vr(e,0),Ya(e,Se,ai,!1)),On(e,a),((Le&2)===0||e!==Xe)&&(e===Xe&&((Le&2)===0&&(ws|=a),nn===4&&Ya(e,Se,ai,!1)),qi(e))}function l0(e,n,a){if((Le&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ct(e,n),u=o?OS(e,n):jf(e,n,!0),d=o;do{if(u===0){mr&&!o&&Ya(e,n,0,!1);break}else{if(a=e.current.alternate,d&&!LS(a)){u=jf(e,n,!1),d=!1;continue}if(u===2){if(d=n,e.errorRecoveryDisabledLanes&d)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var A=e;u=zo;var H=A.current.memoizedState.isDehydrated;if(H&&(vr(A,S).flags|=256),S=jf(A,S,!1),S!==2){if(Gf&&!H){A.errorRecoveryDisabledLanes|=d,ws|=d,u=4;break t}d=qn,qn=u,d!==null&&(qn===null?qn=d:qn.push.apply(qn,d))}u=S}if(d=!1,u!==2)continue}}if(u===1){vr(e,0),Ya(e,n,0,!0);break}t:{switch(o=e,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ya(o,n,ai,!ka);break t;case 2:qn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=ic+300-b(),10<u)){if(Ya(o,n,ai,!ka),_t(o,0,!0)!==0)break t;ga=n,o.timeoutHandle=B0(c0.bind(null,o,a,qn,sc,kf,n,ai,ws,gr,ka,d,"Throttled",-0,0),u);break t}c0(o,a,qn,sc,kf,n,ai,ws,gr,ka,d,null,-0,0)}}break}while(!0);qi(e)}function c0(e,n,a,o,u,d,S,A,H,it,ht,mt,rt,ct){if(e.timeoutHandle=-1,mt=n.subtreeFlags,mt&8192||(mt&16785408)===16785408){mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ea},e0(n,d,mt);var Vt=(d&62914560)===d?ic-b():(d&4194048)===d?s0-b():0;if(Vt=gM(mt,Vt),Vt!==null){ga=d,e.cancelPendingCommit=Vt(_0.bind(null,e,n,d,a,o,u,S,A,H,ht,mt,null,rt,ct)),Ya(e,d,S,!it);return}}_0(e,n,d,a,o,u,S,A,H)}function LS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!$n(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ya(e,n,a,o){n&=~Vf,n&=~ws,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var d=31-Pt(u),S=1<<d;o[d]=-1,u&=~S}a!==0&&_l(e,a,n)}function rc(){return(Le&6)===0?(Io(0),!1):!0}function Yf(){if(_e!==null){if(Fe===0)var e=_e.return;else e=_e,sa=Ss=null,cf(e),lr=null,So=0,e=_e;for(;e!==null;)Hg(e.alternate,e),e=e.return;_e=null}}function vr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,JS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ga=0,Yf(),Xe=e,_e=a=ia(e.current,null),Se=n,Fe=0,ii=null,ka=!1,mr=Ct(e,n),Gf=!1,gr=ai=Vf=ws=Xa=nn=0,qn=zo=null,kf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Pt(o),d=1<<u;n|=e[u],o&=~d}return ma=n,Cl(),a}function u0(e,n){ce=null,L.H=Ro,n===or||n===Pl?(n=Am(),Fe=3):n===Ku?(n=Am(),Fe=4):Fe=n===Tf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ii=n,_e===null&&(nn=1,Zl(e,pi(n,e.current)))}function f0(){var e=ei.current;return e===null?!0:(Se&4194048)===Se?vi===null:(Se&62914560)===Se||(Se&536870912)!==0?e===vi:!1}function h0(){var e=L.H;return L.H=Ro,e===null?Ro:e}function d0(){var e=L.A;return L.A=DS,e}function oc(){nn=4,ka||(Se&4194048)!==Se&&ei.current!==null||(mr=!0),(Xa&134217727)===0&&(ws&134217727)===0||Xe===null||Ya(Xe,Se,ai,!1)}function jf(e,n,a){var o=Le;Le|=2;var u=h0(),d=d0();(Xe!==e||Se!==n)&&(sc=null,vr(e,n)),n=!1;var S=nn;t:do try{if(Fe!==0&&_e!==null){var A=_e,H=ii;switch(Fe){case 8:Yf(),S=6;break t;case 3:case 2:case 9:case 6:ei.current===null&&(n=!0);var it=Fe;if(Fe=0,ii=null,xr(e,A,H,it),a&&mr){S=0;break t}break;default:it=Fe,Fe=0,ii=null,xr(e,A,H,it)}}NS(),S=nn;break}catch(ht){u0(e,ht)}while(!0);return n&&e.shellSuspendCounter++,sa=Ss=null,Le=o,L.H=u,L.A=d,_e===null&&(Xe=null,Se=0,Cl()),S}function NS(){for(;_e!==null;)p0(_e)}function OS(e,n){var a=Le;Le|=2;var o=h0(),u=d0();Xe!==e||Se!==n?(sc=null,ac=b()+500,vr(e,n)):mr=Ct(e,n);t:do try{if(Fe!==0&&_e!==null){n=_e;var d=ii;e:switch(Fe){case 1:Fe=0,ii=null,xr(e,n,d,1);break;case 2:case 9:if(bm(d)){Fe=0,ii=null,m0(n);break}n=function(){Fe!==2&&Fe!==9||Xe!==e||(Fe=7),qi(e)},d.then(n,n);break t;case 3:Fe=7;break t;case 4:Fe=5;break t;case 7:bm(d)?(Fe=0,ii=null,m0(n)):(Fe=0,ii=null,xr(e,n,d,7));break;case 5:var S=null;switch(_e.tag){case 26:S=_e.memoizedState;case 5:case 27:var A=_e;if(S?t_(S):A.stateNode.complete){Fe=0,ii=null;var H=A.sibling;if(H!==null)_e=H;else{var it=A.return;it!==null?(_e=it,lc(it)):_e=null}break e}}Fe=0,ii=null,xr(e,n,d,5);break;case 6:Fe=0,ii=null,xr(e,n,d,6);break;case 8:Yf(),nn=6;break t;default:throw Error(s(462))}}PS();break}catch(ht){u0(e,ht)}while(!0);return sa=Ss=null,L.H=o,L.A=u,Le=a,_e!==null?0:(Xe=null,Se=0,Cl(),nn)}function PS(){for(;_e!==null&&!Yt();)p0(_e)}function p0(e){var n=Ig(e.alternate,e,ma);e.memoizedProps=e.pendingProps,n===null?lc(e):_e=n}function m0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Lg(a,n,n.pendingProps,n.type,void 0,Se);break;case 11:n=Lg(a,n,n.pendingProps,n.type.render,n.ref,Se);break;case 5:cf(n);default:Hg(a,n),n=_e=dm(n,ma),n=Ig(a,n,ma)}e.memoizedProps=e.pendingProps,n===null?lc(e):_e=n}function xr(e,n,a,o){sa=Ss=null,cf(n),lr=null,So=0;var u=n.return;try{if(ES(e,u,n,a,Se)){nn=1,Zl(e,pi(a,e.current)),_e=null;return}}catch(d){if(u!==null)throw _e=u,d;nn=1,Zl(e,pi(a,e.current)),_e=null;return}n.flags&32768?(ye||o===1?e=!0:mr||(Se&536870912)!==0?e=!1:(ka=e=!0,(o===2||o===9||o===3||o===6)&&(o=ei.current,o!==null&&o.tag===13&&(o.flags|=16384))),g0(n,e)):lc(n)}function lc(e){var n=e;do{if((n.flags&32768)!==0){g0(n,ka);return}e=n.return;var a=AS(n.alternate,n,ma);if(a!==null){_e=a;return}if(n=n.sibling,n!==null){_e=n;return}_e=n=e}while(n!==null);nn===0&&(nn=5)}function g0(e,n){do{var a=CS(e.alternate,e);if(a!==null){a.flags&=32767,_e=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){_e=e;return}_e=e=a}while(e!==null);nn=6,_e=null}function _0(e,n,a,o,u,d,S,A,H){e.cancelPendingCommit=null;do cc();while(mn!==0);if((Le&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=Pu,Ci(e,a,d,S,A,H),e===Xe&&(_e=Xe=null,Se=0),_r=n,qa=e,ga=a,Xf=d,Wf=u,r0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,BS(ut,function(){return y0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=L.T,L.T=null,u=B.p,B.p=2,S=Le,Le|=4;try{RS(e,n,a)}finally{Le=S,B.p=u,L.T=o}}mn=1,v0(),x0(),S0()}}function v0(){if(mn===1){mn=0;var e=qa,n=_r,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=L.T,L.T=null;var o=B.p;B.p=2;var u=Le;Le|=4;try{Jg(n,e);var d=rh,S=am(e.containerInfo),A=d.focusedElem,H=d.selectionRange;if(S!==A&&A&&A.ownerDocument&&im(A.ownerDocument.documentElement,A)){if(H!==null&&Du(A)){var it=H.start,ht=H.end;if(ht===void 0&&(ht=it),"selectionStart"in A)A.selectionStart=it,A.selectionEnd=Math.min(ht,A.value.length);else{var mt=A.ownerDocument||document,rt=mt&&mt.defaultView||window;if(rt.getSelection){var ct=rt.getSelection(),Vt=A.textContent.length,ee=Math.min(H.start,Vt),Ve=H.end===void 0?ee:Math.min(H.end,Vt);!ct.extend&&ee>Ve&&(S=Ve,Ve=ee,ee=S);var K=nm(A,ee),X=nm(A,Ve);if(K&&X&&(ct.rangeCount!==1||ct.anchorNode!==K.node||ct.anchorOffset!==K.offset||ct.focusNode!==X.node||ct.focusOffset!==X.offset)){var nt=mt.createRange();nt.setStart(K.node,K.offset),ct.removeAllRanges(),ee>Ve?(ct.addRange(nt),ct.extend(X.node,X.offset)):(nt.setEnd(X.node,X.offset),ct.addRange(nt))}}}}for(mt=[],ct=A;ct=ct.parentNode;)ct.nodeType===1&&mt.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<mt.length;A++){var pt=mt[A];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}Mc=!!sh,rh=sh=null}finally{Le=u,B.p=o,L.T=a}}e.current=n,mn=2}}function x0(){if(mn===2){mn=0;var e=qa,n=_r,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=L.T,L.T=null;var o=B.p;B.p=2;var u=Le;Le|=4;try{Yg(e,n.alternate,n)}finally{Le=u,B.p=o,L.T=a}}mn=3}}function S0(){if(mn===4||mn===3){mn=0,O();var e=qa,n=_r,a=ga,o=r0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,_r=qa=null,M0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Wa=null),Xs(a),n=n.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(yt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=L.T,u=B.p,B.p=2,L.T=null;try{for(var d=e.onRecoverableError,S=0;S<o.length;S++){var A=o[S];d(A.value,{componentStack:A.stack})}}finally{L.T=n,B.p=u}}(ga&3)!==0&&cc(),qi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===qf?Fo++:(Fo=0,qf=e):Fo=0,Io(0)}}function M0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,vo(n)))}function cc(){return v0(),x0(),S0(),y0()}function y0(){if(mn!==5)return!1;var e=qa,n=Xf;Xf=0;var a=Xs(ga),o=L.T,u=B.p;try{B.p=32>a?32:a,L.T=null,a=Wf,Wf=null;var d=qa,S=ga;if(mn=0,_r=qa=null,ga=0,(Le&6)!==0)throw Error(s(331));var A=Le;if(Le|=4,i0(d.current),t0(d,d.current,S,a),Le=A,Io(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(yt,d)}catch{}return!0}finally{B.p=u,L.T=o,M0(e,n)}}function E0(e,n,a){n=pi(a,n),n=bf(e.stateNode,n,2),e=Ba(e,n,2),e!==null&&(On(e,2),qi(e))}function Ie(e,n,a){if(e.tag===3)E0(e,e,a);else for(;n!==null;){if(n.tag===3){E0(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Wa===null||!Wa.has(o))){e=pi(a,e),a=bg(2),o=Ba(n,a,2),o!==null&&(Tg(a,o,n,e),On(o,2),qi(o));break}}n=n.return}}function Zf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new US;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Gf=!0,u.add(a),e=zS.bind(null,e,n,a),n.then(e,e))}function zS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Xe===e&&(Se&a)===a&&(nn===4||nn===3&&(Se&62914560)===Se&&300>b()-ic?(Le&2)===0&&vr(e,0):Vf|=a,gr===Se&&(gr=0)),qi(e)}function b0(e,n){n===0&&(n=Pe()),e=_s(e,n),e!==null&&(On(e,n),qi(e))}function FS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),b0(e,a)}function IS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),b0(e,a)}function BS(e,n){return Ee(e,n)}var uc=null,Sr=null,Kf=!1,fc=!1,Qf=!1,ja=0;function qi(e){e!==Sr&&e.next===null&&(Sr===null?uc=Sr=e:Sr=Sr.next=e),fc=!0,Kf||(Kf=!0,GS())}function Io(e,n){if(!Qf&&fc){Qf=!0;do for(var a=!1,o=uc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var S=o.suspendedLanes,A=o.pingedLanes;d=(1<<31-Pt(42|e)+1)-1,d&=u&~(S&~A),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,R0(o,d))}else d=Se,d=_t(o,o===Xe?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Ct(o,d)||(a=!0,R0(o,d));o=o.next}while(a);Qf=!1}}function HS(){T0()}function T0(){fc=Kf=!1;var e=0;ja!==0&&QS()&&(e=ja);for(var n=b(),a=null,o=uc;o!==null;){var u=o.next,d=A0(o,n);d===0?(o.next=null,a===null?uc=u:a.next=u,u===null&&(Sr=a)):(a=o,(e!==0||(d&3)!==0)&&(fc=!0)),o=u}mn!==0&&mn!==5||Io(e),ja!==0&&(ja=0)}function A0(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var S=31-Pt(d),A=1<<S,H=u[S];H===-1?((A&a)===0||(A&o)!==0)&&(u[S]=ae(A,n)):H<=n&&(e.expiredLanes|=A),d&=~A}if(n=Xe,a=Se,a=_t(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Fe===2||Fe===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Ne(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ct(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Ne(o),Xs(a)){case 2:case 8:a=St;break;case 32:a=ut;break;case 268435456:a=Rt;break;default:a=ut}return o=C0.bind(null,e),a=Ee(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Ne(o),e.callbackPriority=2,e.callbackNode=null,2}function C0(e,n){if(mn!==0&&mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(cc()&&e.callbackNode!==a)return null;var o=Se;return o=_t(e,e===Xe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(l0(e,o,n),A0(e,b()),e.callbackNode!=null&&e.callbackNode===a?C0.bind(null,e):null)}function R0(e,n){if(cc())return null;l0(e,n,!0)}function GS(){$S(function(){(Le&6)!==0?Ee(dt,HS):T0()})}function Jf(){if(ja===0){var e=sr;e===0&&(e=Lt,Lt<<=1,(Lt&261888)===0&&(Lt=256)),ja=e}return ja}function w0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:xl(""+e)}function D0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function VS(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=w0((u[yn]||null).action),S=o.submitter;S&&(n=(n=S[yn]||null)?w0(n.formAction):S.getAttribute("formAction"),n!==null&&(d=n,S=null));var A=new El("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ja!==0){var H=S?D0(u,S):new FormData(u);vf(a,{pending:!0,data:H,method:u.method,action:d},null,H)}}else typeof d=="function"&&(A.preventDefault(),H=S?D0(u,S):new FormData(u),vf(a,{pending:!0,data:H,method:u.method,action:d},d,H))},currentTarget:u}]})}}for(var $f=0;$f<Ou.length;$f++){var th=Ou[$f],kS=th.toLowerCase(),XS=th[0].toUpperCase()+th.slice(1);Di(kS,"on"+XS)}Di(om,"onAnimationEnd"),Di(lm,"onAnimationIteration"),Di(cm,"onAnimationStart"),Di("dblclick","onDoubleClick"),Di("focusin","onFocus"),Di("focusout","onBlur"),Di(rS,"onTransitionRun"),Di(oS,"onTransitionStart"),Di(lS,"onTransitionCancel"),Di(um,"onTransitionEnd"),J("onMouseEnter",["mouseout","mouseover"]),J("onMouseLeave",["mouseout","mouseover"]),J("onPointerEnter",["pointerout","pointerover"]),J("onPointerLeave",["pointerout","pointerover"]),st("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),st("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),st("onBeforeInput",["compositionend","keypress","textInput","paste"]),st("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),st("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),st("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),WS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Bo));function U0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var d=void 0;if(n)for(var S=o.length-1;0<=S;S--){var A=o[S],H=A.instance,it=A.currentTarget;if(A=A.listener,H!==d&&u.isPropagationStopped())break t;d=A,u.currentTarget=it;try{d(u)}catch(ht){Al(ht)}u.currentTarget=null,d=H}else for(S=0;S<o.length;S++){if(A=o[S],H=A.instance,it=A.currentTarget,A=A.listener,H!==d&&u.isPropagationStopped())break t;d=A,u.currentTarget=it;try{d(u)}catch(ht){Al(ht)}u.currentTarget=null,d=H}}}}function ve(e,n){var a=n[Ws];a===void 0&&(a=n[Ws]=new Set);var o=e+"__bubble";a.has(o)||(L0(n,e,2,!1),a.add(o))}function eh(e,n,a){var o=0;n&&(o|=4),L0(a,e,o,n)}var hc="_reactListening"+Math.random().toString(36).slice(2);function nh(e){if(!e[hc]){e[hc]=!0,Z.forEach(function(a){a!=="selectionchange"&&(WS.has(a)||eh(a,!1,e),eh(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[hc]||(n[hc]=!0,eh("selectionchange",!1,n))}}function L0(e,n,a,o){switch(o_(n)){case 2:var u=xM;break;case 8:u=SM;break;default:u=_h}a=u.bind(null,n,a,e),u=void 0,!Mu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function ih(e,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var A=o.stateNode.containerInfo;if(A===u)break;if(S===4)for(S=o.return;S!==null;){var H=S.tag;if((H===3||H===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;A!==null;){if(S=wa(A),S===null)return;if(H=S.tag,H===5||H===6||H===26||H===27){o=d=S;continue t}A=A.parentNode}}o=o.return}Fp(function(){var it=d,ht=xu(a),mt=[];t:{var rt=fm.get(e);if(rt!==void 0){var ct=El,Vt=e;switch(e){case"keypress":if(Ml(a)===0)break t;case"keydown":case"keyup":ct=Ix;break;case"focusin":Vt="focus",ct=Tu;break;case"focusout":Vt="blur",ct=Tu;break;case"beforeblur":case"afterblur":ct=Tu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=Hp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=Ax;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=Gx;break;case om:case lm:case cm:ct=wx;break;case um:ct=kx;break;case"scroll":case"scrollend":ct=bx;break;case"wheel":ct=Wx;break;case"copy":case"cut":case"paste":ct=Ux;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=Vp;break;case"toggle":case"beforetoggle":ct=Yx}var ee=(n&4)!==0,Ve=!ee&&(e==="scroll"||e==="scrollend"),K=ee?rt!==null?rt+"Capture":null:rt;ee=[];for(var X=it,nt;X!==null;){var pt=X;if(nt=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||nt===null||K===null||(pt=ro(X,K),pt!=null&&ee.push(Ho(X,pt,nt))),Ve)break;X=X.return}0<ee.length&&(rt=new ct(rt,Vt,null,a,ht),mt.push({event:rt,listeners:ee}))}}if((n&7)===0){t:{if(rt=e==="mouseover"||e==="pointerover",ct=e==="mouseout"||e==="pointerout",rt&&a!==vu&&(Vt=a.relatedTarget||a.fromElement)&&(wa(Vt)||Vt[Ri]))break t;if((ct||rt)&&(rt=ht.window===ht?ht:(rt=ht.ownerDocument)?rt.defaultView||rt.parentWindow:window,ct?(Vt=a.relatedTarget||a.toElement,ct=it,Vt=Vt?wa(Vt):null,Vt!==null&&(Ve=c(Vt),ee=Vt.tag,Vt!==Ve||ee!==5&&ee!==27&&ee!==6)&&(Vt=null)):(ct=null,Vt=it),ct!==Vt)){if(ee=Hp,pt="onMouseLeave",K="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(ee=Vp,pt="onPointerLeave",K="onPointerEnter",X="pointer"),Ve=ct==null?rt:ds(ct),nt=Vt==null?rt:ds(Vt),rt=new ee(pt,X+"leave",ct,a,ht),rt.target=Ve,rt.relatedTarget=nt,pt=null,wa(ht)===it&&(ee=new ee(K,X+"enter",Vt,a,ht),ee.target=nt,ee.relatedTarget=Ve,pt=ee),Ve=pt,ct&&Vt)e:{for(ee=qS,K=ct,X=Vt,nt=0,pt=K;pt;pt=ee(pt))nt++;pt=0;for(var Qt=X;Qt;Qt=ee(Qt))pt++;for(;0<nt-pt;)K=ee(K),nt--;for(;0<pt-nt;)X=ee(X),pt--;for(;nt--;){if(K===X||X!==null&&K===X.alternate){ee=K;break e}K=ee(K),X=ee(X)}ee=null}else ee=null;ct!==null&&N0(mt,rt,ct,ee,!1),Vt!==null&&Ve!==null&&N0(mt,Ve,Vt,ee,!0)}}t:{if(rt=it?ds(it):window,ct=rt.nodeName&&rt.nodeName.toLowerCase(),ct==="select"||ct==="input"&&rt.type==="file")var Ae=Kp;else if(jp(rt))if(Qp)Ae=iS;else{Ae=eS;var jt=tS}else ct=rt.nodeName,!ct||ct.toLowerCase()!=="input"||rt.type!=="checkbox"&&rt.type!=="radio"?it&&wi(it.elementType)&&(Ae=Kp):Ae=nS;if(Ae&&(Ae=Ae(e,it))){Zp(mt,Ae,a,ht);break t}jt&&jt(e,rt,it),e==="focusout"&&it&&rt.type==="number"&&it.memoizedProps.value!=null&&bn(rt,"number",rt.value)}switch(jt=it?ds(it):window,e){case"focusin":(jp(jt)||jt.contentEditable==="true")&&(Qs=jt,Uu=it,mo=null);break;case"focusout":mo=Uu=Qs=null;break;case"mousedown":Lu=!0;break;case"contextmenu":case"mouseup":case"dragend":Lu=!1,sm(mt,a,ht);break;case"selectionchange":if(sS)break;case"keydown":case"keyup":sm(mt,a,ht)}var he;if(Cu)t:{switch(e){case"compositionstart":var Me="onCompositionStart";break t;case"compositionend":Me="onCompositionEnd";break t;case"compositionupdate":Me="onCompositionUpdate";break t}Me=void 0}else Ks?qp(e,a)&&(Me="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Me="onCompositionStart");Me&&(kp&&a.locale!=="ko"&&(Ks||Me!=="onCompositionStart"?Me==="onCompositionEnd"&&Ks&&(he=Ip()):(La=ht,yu="value"in La?La.value:La.textContent,Ks=!0)),jt=dc(it,Me),0<jt.length&&(Me=new Gp(Me,e,null,a,ht),mt.push({event:Me,listeners:jt}),he?Me.data=he:(he=Yp(a),he!==null&&(Me.data=he)))),(he=Zx?Kx(e,a):Qx(e,a))&&(Me=dc(it,"onBeforeInput"),0<Me.length&&(jt=new Gp("onBeforeInput","beforeinput",null,a,ht),mt.push({event:jt,listeners:Me}),jt.data=he)),VS(mt,e,it,a,ht)}U0(mt,n)})}function Ho(e,n,a){return{instance:e,listener:n,currentTarget:a}}function dc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=ro(e,a),u!=null&&o.unshift(Ho(e,u,d)),u=ro(e,n),u!=null&&o.push(Ho(e,u,d))),e.tag===3)return o;e=e.return}return[]}function qS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function N0(e,n,a,o,u){for(var d=n._reactName,S=[];a!==null&&a!==o;){var A=a,H=A.alternate,it=A.stateNode;if(A=A.tag,H!==null&&H===o)break;A!==5&&A!==26&&A!==27||it===null||(H=it,u?(it=ro(a,d),it!=null&&S.unshift(Ho(a,it,H))):u||(it=ro(a,d),it!=null&&S.push(Ho(a,it,H)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var YS=/\r\n?/g,jS=/\u0000|\uFFFD/g;function O0(e){return(typeof e=="string"?e:""+e).replace(YS,`
`).replace(jS,"")}function P0(e,n){return n=O0(n),O0(e)===n}function Ge(e,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||pn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&pn(e,""+o);break;case"className":Jt(e,"class",o);break;case"tabIndex":Jt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Jt(e,a,o);break;case"style":Ys(e,o,d);break;case"data":if(n!=="object"){Jt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=xl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Ge(e,n,"name",u.name,u,null),Ge(e,n,"formEncType",u.formEncType,u,null),Ge(e,n,"formMethod",u.formMethod,u,null),Ge(e,n,"formTarget",u.formTarget,u,null)):(Ge(e,n,"encType",u.encType,u,null),Ge(e,n,"method",u.method,u,null),Ge(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=xl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=ea);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=xl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ve("beforetoggle",e),ve("toggle",e),Wt(e,"popover",o);break;case"xlinkActuate":qt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":qt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":qt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":qt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":qt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":qt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":qt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":qt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":qt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Wt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=yx.get(a)||a,Wt(e,a,o))}}function ah(e,n,a,o,u,d){switch(a){case"style":Ys(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?pn(e,o):(typeof o=="number"||typeof o=="bigint")&&pn(e,""+o);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ea);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!lt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=e[yn]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Wt(e,a,o)}}}function Un(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var S=a[d];if(S!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ge(e,n,d,S,a,null)}}u&&Ge(e,n,"srcSet",a.srcSet,a,null),o&&Ge(e,n,"src",a.src,a,null);return;case"input":ve("invalid",e);var A=d=S=u=null,H=null,it=null;for(o in a)if(a.hasOwnProperty(o)){var ht=a[o];if(ht!=null)switch(o){case"name":u=ht;break;case"type":S=ht;break;case"checked":H=ht;break;case"defaultChecked":it=ht;break;case"value":d=ht;break;case"defaultValue":A=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(s(137,n));break;default:Ge(e,n,o,ht,a,null)}}ta(e,d,A,H,it,S,u,!1);return;case"select":ve("invalid",e),o=S=d=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":d=A;break;case"defaultValue":S=A;break;case"multiple":o=A;default:Ge(e,n,u,A,a,null)}n=d,a=S,e.multiple=!!o,n!=null?hi(e,!!o,n,!1):a!=null&&hi(e,!!o,a,!0);return;case"textarea":ve("invalid",e),d=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(A=a[S],A!=null))switch(S){case"value":o=A;break;case"defaultValue":u=A;break;case"children":d=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Ge(e,n,S,A,a,null)}Tn(e,o,u,d);return;case"option":for(H in a)a.hasOwnProperty(H)&&(o=a[H],o!=null)&&(H==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Ge(e,n,H,o,a,null));return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(o=0;o<Bo.length;o++)ve(Bo[o],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(it in a)if(a.hasOwnProperty(it)&&(o=a[it],o!=null))switch(it){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ge(e,n,it,o,a,null)}return;default:if(wi(n)){for(ht in a)a.hasOwnProperty(ht)&&(o=a[ht],o!==void 0&&ah(e,n,ht,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Ge(e,n,A,o,a,null))}function ZS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,S=null,A=null,H=null,it=null,ht=null;for(ct in a){var mt=a[ct];if(a.hasOwnProperty(ct)&&mt!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":H=mt;default:o.hasOwnProperty(ct)||Ge(e,n,ct,null,o,mt)}}for(var rt in o){var ct=o[rt];if(mt=a[rt],o.hasOwnProperty(rt)&&(ct!=null||mt!=null))switch(rt){case"type":d=ct;break;case"name":u=ct;break;case"checked":it=ct;break;case"defaultChecked":ht=ct;break;case"value":S=ct;break;case"defaultValue":A=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:ct!==mt&&Ge(e,n,rt,ct,o,mt)}}En(e,S,A,H,it,ht,d,u);return;case"select":ct=S=A=rt=null;for(d in a)if(H=a[d],a.hasOwnProperty(d)&&H!=null)switch(d){case"value":break;case"multiple":ct=H;default:o.hasOwnProperty(d)||Ge(e,n,d,null,o,H)}for(u in o)if(d=o[u],H=a[u],o.hasOwnProperty(u)&&(d!=null||H!=null))switch(u){case"value":rt=d;break;case"defaultValue":A=d;break;case"multiple":S=d;default:d!==H&&Ge(e,n,u,d,o,H)}n=A,a=S,o=ct,rt!=null?hi(e,!!a,rt,!1):!!o!=!!a&&(n!=null?hi(e,!!a,n,!0):hi(e,!!a,a?[]:"",!1));return;case"textarea":ct=rt=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Ge(e,n,A,null,o,u)}for(S in o)if(u=o[S],d=a[S],o.hasOwnProperty(S)&&(u!=null||d!=null))switch(S){case"value":rt=u;break;case"defaultValue":ct=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&Ge(e,n,S,u,o,d)}ze(e,rt,ct);return;case"option":for(var Vt in a)rt=a[Vt],a.hasOwnProperty(Vt)&&rt!=null&&!o.hasOwnProperty(Vt)&&(Vt==="selected"?e.selected=!1:Ge(e,n,Vt,null,o,rt));for(H in o)rt=o[H],ct=a[H],o.hasOwnProperty(H)&&rt!==ct&&(rt!=null||ct!=null)&&(H==="selected"?e.selected=rt&&typeof rt!="function"&&typeof rt!="symbol":Ge(e,n,H,rt,o,ct));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in a)rt=a[ee],a.hasOwnProperty(ee)&&rt!=null&&!o.hasOwnProperty(ee)&&Ge(e,n,ee,null,o,rt);for(it in o)if(rt=o[it],ct=a[it],o.hasOwnProperty(it)&&rt!==ct&&(rt!=null||ct!=null))switch(it){case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,n));break;default:Ge(e,n,it,rt,o,ct)}return;default:if(wi(n)){for(var Ve in a)rt=a[Ve],a.hasOwnProperty(Ve)&&rt!==void 0&&!o.hasOwnProperty(Ve)&&ah(e,n,Ve,void 0,o,rt);for(ht in o)rt=o[ht],ct=a[ht],!o.hasOwnProperty(ht)||rt===ct||rt===void 0&&ct===void 0||ah(e,n,ht,rt,o,ct);return}}for(var K in a)rt=a[K],a.hasOwnProperty(K)&&rt!=null&&!o.hasOwnProperty(K)&&Ge(e,n,K,null,o,rt);for(mt in o)rt=o[mt],ct=a[mt],!o.hasOwnProperty(mt)||rt===ct||rt==null&&ct==null||Ge(e,n,mt,rt,o,ct)}function z0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function KS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,S=u.initiatorType,A=u.duration;if(d&&A&&z0(S)){for(S=0,A=u.responseEnd,o+=1;o<a.length;o++){var H=a[o],it=H.startTime;if(it>A)break;var ht=H.transferSize,mt=H.initiatorType;ht&&z0(mt)&&(H=H.responseEnd,S+=ht*(H<A?1:(A-it)/(H-it)))}if(--o,n+=8*(d+S)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var sh=null,rh=null;function pc(e){return e.nodeType===9?e:e.ownerDocument}function F0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function I0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function oh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var lh=null;function QS(){var e=window.event;return e&&e.type==="popstate"?e===lh?!1:(lh=e,!0):(lh=null,!1)}var B0=typeof setTimeout=="function"?setTimeout:void 0,JS=typeof clearTimeout=="function"?clearTimeout:void 0,H0=typeof Promise=="function"?Promise:void 0,$S=typeof queueMicrotask=="function"?queueMicrotask:typeof H0<"u"?function(e){return H0.resolve(null).then(e).catch(tM)}:B0;function tM(e){setTimeout(function(){throw e})}function Za(e){return e==="head"}function G0(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),br(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Go(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Go(a);for(var d=a.firstChild;d;){var S=d.nextSibling,A=d.nodeName;d[hs]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=S}}else a==="body"&&Go(e.ownerDocument.body);a=u}while(a);br(n)}function V0(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function ch(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ch(a),so(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function eM(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[hs])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=xi(e.nextSibling),e===null)break}return null}function nM(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=xi(e.nextSibling),e===null))return null;return e}function k0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=xi(e.nextSibling),e===null))return null;return e}function uh(e){return e.data==="$?"||e.data==="$~"}function fh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function iM(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function xi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var hh=null;function X0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return xi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function W0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function q0(e,n,a){switch(n=pc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Go(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);so(e)}var Si=new Map,Y0=new Set;function mc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _a=B.d;B.d={f:aM,r:sM,D:rM,C:oM,L:lM,m:cM,X:fM,S:uM,M:hM};function aM(){var e=_a.f(),n=rc();return e||n}function sM(e){var n=Da(e);n!==null&&n.tag===5&&n.type==="form"?ug(n):_a.r(e)}var Mr=typeof document>"u"?null:document;function j0(e,n,a){var o=Mr;if(o&&typeof n=="string"&&n){var u=se(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Y0.has(u)||(Y0.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Un(n,"link",e),C(n),o.head.appendChild(n)))}}function rM(e){_a.D(e),j0("dns-prefetch",e,null)}function oM(e,n){_a.C(e,n),j0("preconnect",e,n)}function lM(e,n,a){_a.L(e,n,a);var o=Mr;if(o&&e&&n){var u='link[rel="preload"][as="'+se(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+se(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+se(a.imageSizes)+'"]')):u+='[href="'+se(e)+'"]';var d=u;switch(n){case"style":d=yr(e);break;case"script":d=Er(e)}Si.has(d)||(e=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Si.set(d,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Vo(d))||n==="script"&&o.querySelector(ko(d))||(n=o.createElement("link"),Un(n,"link",e),C(n),o.head.appendChild(n)))}}function cM(e,n){_a.m(e,n);var a=Mr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+se(o)+'"][href="'+se(e)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Er(e)}if(!Si.has(d)&&(e=v({rel:"modulepreload",href:e},n),Si.set(d,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ko(d)))return}o=a.createElement("link"),Un(o,"link",e),C(o),a.head.appendChild(o)}}}function uM(e,n,a){_a.S(e,n,a);var o=Mr;if(o&&e){var u=Ua(o).hoistableStyles,d=yr(e);n=n||"default";var S=u.get(d);if(!S){var A={loading:0,preload:null};if(S=o.querySelector(Vo(d)))A.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Si.get(d))&&dh(e,a);var H=S=o.createElement("link");C(H),Un(H,"link",e),H._p=new Promise(function(it,ht){H.onload=it,H.onerror=ht}),H.addEventListener("load",function(){A.loading|=1}),H.addEventListener("error",function(){A.loading|=2}),A.loading|=4,gc(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:A},u.set(d,S)}}}function fM(e,n){_a.X(e,n);var a=Mr;if(a&&e){var o=Ua(a).hoistableScripts,u=Er(e),d=o.get(u);d||(d=a.querySelector(ko(u)),d||(e=v({src:e,async:!0},n),(n=Si.get(u))&&ph(e,n),d=a.createElement("script"),C(d),Un(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function hM(e,n){_a.M(e,n);var a=Mr;if(a&&e){var o=Ua(a).hoistableScripts,u=Er(e),d=o.get(u);d||(d=a.querySelector(ko(u)),d||(e=v({src:e,async:!0,type:"module"},n),(n=Si.get(u))&&ph(e,n),d=a.createElement("script"),C(d),Un(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Z0(e,n,a,o){var u=(u=ot.current)?mc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=yr(a.href),a=Ua(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=yr(a.href);var d=Ua(u).hoistableStyles,S=d.get(e);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,S),(d=u.querySelector(Vo(e)))&&!d._p&&(S.instance=d,S.state.loading=5),Si.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Si.set(e,a),d||dM(u,e,a,S.state))),n&&o===null)throw Error(s(528,""));return S}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Er(a),a=Ua(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function yr(e){return'href="'+se(e)+'"'}function Vo(e){return'link[rel="stylesheet"]['+e+"]"}function K0(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function dM(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Un(n,"link",a),C(n),e.head.appendChild(n))}function Er(e){return'[src="'+se(e)+'"]'}function ko(e){return"script[async]"+e}function Q0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+se(a.href)+'"]');if(o)return n.instance=o,C(o),o;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),C(o),Un(o,"style",u),gc(o,a.precedence,e),n.instance=o;case"stylesheet":u=yr(a.href);var d=e.querySelector(Vo(u));if(d)return n.state.loading|=4,n.instance=d,C(d),d;o=K0(a),(u=Si.get(u))&&dh(o,u),d=(e.ownerDocument||e).createElement("link"),C(d);var S=d;return S._p=new Promise(function(A,H){S.onload=A,S.onerror=H}),Un(d,"link",o),n.state.loading|=4,gc(d,a.precedence,e),n.instance=d;case"script":return d=Er(a.src),(u=e.querySelector(ko(d)))?(n.instance=u,C(u),u):(o=a,(u=Si.get(d))&&(o=v({},a),ph(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),C(u),Un(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,gc(o,a.precedence,e));return n.instance}function gc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,S=0;S<o.length;S++){var A=o[S];if(A.dataset.precedence===n)d=A;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function dh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function ph(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var _c=null;function J0(e,n,a){if(_c===null){var o=new Map,u=_c=new Map;u.set(a,o)}else u=_c,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var d=a[u];if(!(d[hs]||d[ln]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var S=d.getAttribute(n)||"";S=e+S;var A=o.get(S);A?A.push(d):o.set(S,[d])}}return o}function $0(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function pM(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function t_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function mM(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=yr(o.href),d=n.querySelector(Vo(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=vc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=d,C(d);return}d=n.ownerDocument||n,o=K0(o),(u=Si.get(u))&&dh(o,u),d=d.createElement("link"),C(d);var S=d;S._p=new Promise(function(A,H){S.onload=A,S.onerror=H}),Un(d,"link",o),a.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=vc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var mh=0;function gM(e,n){return e.stylesheets&&e.count===0&&Sc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Sc(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+n);0<e.imgBytes&&mh===0&&(mh=62500*KS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Sc(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>mh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function vc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Sc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var xc=null;function Sc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,xc=new Map,n.forEach(_M,e),xc=null,vc.call(e))}function _M(e,n){if(!(n.state.loading&4)){var a=xc.get(e);if(a)var o=a.get(null);else{a=new Map,xc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var S=u[d];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),d=a.get(S)||o,d===o&&a.set(null,u),a.set(S,u),this.count++,o=vc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Xo={$$typeof:P,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function vM(e,n,a,o,u,d,S,A,H){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=be(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=be(0),this.hiddenUpdates=be(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function e_(e,n,a,o,u,d,S,A,H,it,ht,mt){return e=new vM(e,n,a,S,H,it,ht,mt,A),n=1,d===!0&&(n|=24),d=ti(3,null,null,n),e.current=d,d.stateNode=e,n=Yu(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Qu(d),e}function n_(e){return e?(e=tr,e):tr}function i_(e,n,a,o,u,d){u=n_(u),o.context===null?o.context=u:o.pendingContext=u,o=Ia(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Ba(e,o,n),a!==null&&(Yn(a,e,n),yo(a,e,n))}function a_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function gh(e,n){a_(e,n),(e=e.alternate)&&a_(e,n)}function s_(e){if(e.tag===13||e.tag===31){var n=_s(e,67108864);n!==null&&Yn(n,e,67108864),gh(e,67108864)}}function r_(e){if(e.tag===13||e.tag===31){var n=si();n=no(n);var a=_s(e,n);a!==null&&Yn(a,e,n),gh(e,n)}}var Mc=!0;function xM(e,n,a,o){var u=L.T;L.T=null;var d=B.p;try{B.p=2,_h(e,n,a,o)}finally{B.p=d,L.T=u}}function SM(e,n,a,o){var u=L.T;L.T=null;var d=B.p;try{B.p=8,_h(e,n,a,o)}finally{B.p=d,L.T=u}}function _h(e,n,a,o){if(Mc){var u=vh(o);if(u===null)ih(e,n,o,yc,a),l_(e,o);else if(yM(u,e,n,a,o))o.stopPropagation();else if(l_(e,o),n&4&&-1<MM.indexOf(e)){for(;u!==null;){var d=Da(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var S=Mt(d.pendingLanes);if(S!==0){var A=d;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var H=1<<31-Pt(S);A.entanglements[1]|=H,S&=~H}qi(d),(Le&6)===0&&(ac=b()+500,Io(0))}}break;case 31:case 13:A=_s(d,2),A!==null&&Yn(A,d,2),rc(),gh(d,2)}if(d=vh(o),d===null&&ih(e,n,o,yc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else ih(e,n,o,null,a)}}function vh(e){return e=xu(e),xh(e)}var yc=null;function xh(e){if(yc=null,e=wa(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=f(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return yc=e,null}function o_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(j()){case dt:return 2;case St:return 8;case ut:case Zt:return 32;case Rt:return 268435456;default:return 32}default:return 32}}var Sh=!1,Ka=null,Qa=null,Ja=null,Wo=new Map,qo=new Map,$a=[],MM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function l_(e,n){switch(e){case"focusin":case"focusout":Ka=null;break;case"dragenter":case"dragleave":Qa=null;break;case"mouseover":case"mouseout":Ja=null;break;case"pointerover":case"pointerout":Wo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":qo.delete(n.pointerId)}}function Yo(e,n,a,o,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=Da(n),n!==null&&s_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function yM(e,n,a,o,u){switch(n){case"focusin":return Ka=Yo(Ka,e,n,a,o,u),!0;case"dragenter":return Qa=Yo(Qa,e,n,a,o,u),!0;case"mouseover":return Ja=Yo(Ja,e,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Wo.set(d,Yo(Wo.get(d)||null,e,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,qo.set(d,Yo(qo.get(d)||null,e,n,a,o,u)),!0}return!1}function c_(e){var n=wa(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Vi(e.priority,function(){r_(a)});return}}else if(n===31){if(n=f(a),n!==null){e.blockedOn=n,Vi(e.priority,function(){r_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ec(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=vh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);vu=o,a.target.dispatchEvent(o),vu=null}else return n=Da(a),n!==null&&s_(n),e.blockedOn=a,!1;n.shift()}return!0}function u_(e,n,a){Ec(e)&&a.delete(n)}function EM(){Sh=!1,Ka!==null&&Ec(Ka)&&(Ka=null),Qa!==null&&Ec(Qa)&&(Qa=null),Ja!==null&&Ec(Ja)&&(Ja=null),Wo.forEach(u_),qo.forEach(u_)}function bc(e,n){e.blockedOn===n&&(e.blockedOn=null,Sh||(Sh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,EM)))}var Tc=null;function f_(e){Tc!==e&&(Tc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Tc===e&&(Tc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(xh(o||a)===null)continue;break}var d=Da(a);d!==null&&(e.splice(n,3),n-=3,vf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function br(e){function n(H){return bc(H,e)}Ka!==null&&bc(Ka,e),Qa!==null&&bc(Qa,e),Ja!==null&&bc(Ja,e),Wo.forEach(n),qo.forEach(n);for(var a=0;a<$a.length;a++){var o=$a[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<$a.length&&(a=$a[0],a.blockedOn===null);)c_(a),a.blockedOn===null&&$a.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],S=u[yn]||null;if(typeof d=="function")S||f_(a);else if(S){var A=null;if(d&&d.hasAttribute("formAction")){if(u=d,S=d[yn]||null)A=S.formAction;else if(xh(u)!==null)continue}else A=S.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),f_(a)}}}function h_(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Mh(e){this._internalRoot=e}Ac.prototype.render=Mh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=si();i_(a,o,e,n,null,null)},Ac.prototype.unmount=Mh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;i_(e.current,2,null,e,null,null),rc(),n[Ri]=null}};function Ac(e){this._internalRoot=e}Ac.prototype.unstable_scheduleHydration=function(e){if(e){var n=io();e={blockedOn:null,target:e,priority:n};for(var a=0;a<$a.length&&n!==0&&n<$a[a].priority;a++);$a.splice(a,0,e),a===0&&c_(e)}};var d_=t.version;if(d_!=="19.2.8")throw Error(s(527,d_,"19.2.8"));B.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var bM={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cc.isDisabled&&Cc.supportsFiber)try{yt=Cc.inject(bM),bt=Cc}catch{}}return Zo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=Sg,d=Mg,S=yg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=e_(e,1,!1,null,null,a,o,null,u,d,S,h_),e[Ri]=n.current,nh(e),new Mh(n)},Zo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",d=Sg,S=Mg,A=yg,H=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=e_(e,1,!0,n,a??null,o,u,H,d,S,A,h_),n.context=n_(null),a=n.current,o=si(),o=no(o),u=Ia(o),u.callback=null,Ba(a,u,o),a=o,n.current.lanes=a,On(n,a),qi(n),e[Ri]=n.current,nh(e),new Ac(n)},Zo.version="19.2.8",Zo}var E_;function OM(){if(E_)return bh.exports;E_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),bh.exports=NM(),bh.exports}var PM=OM();const zM="worldblocks-input-v1",FM=new Set(["C0","C1","C2","C3","C4","C5"]);function mp(r,{source:t="hardware"}={}){if(!r||typeof r!="object"||!["hardware","mock"].includes(t))throw new Error("Invalid snapshot or source");const i=r.topology,s=new Map((r.codebook?.codes||[]).map(v=>[v.unit,v.id])),l=[],c=i?.module_count||0,h=r.module_layout||{module_count:c,grid_rows:c,grid_cols:1,slots:Array.from({length:c},(v,_)=>`A${_}`)};if(i&&(!Number.isInteger(h.grid_cols)||h.grid_cols<1||h.module_count!==c||h.grid_rows*h.grid_cols!==c||!Array.isArray(h.slots)||h.slots.length!==c||new Set(h.slots).size!==c))throw new Error("Invalid or mismatched module layout; do not guess coordinates");const f=(i?.columns||[]).map(v=>{const _=v.id,x=v.port||`A${v.module}`,E=h.slots.indexOf(x);if(E<0||!["L0","L0.5"].includes(v.layer))throw new Error(`Unmapped position ${_}`);const T=v.layer==="L0.5"?.5:0,y=E%h.grid_cols*4+v.col+T,M=Math.floor(E/h.grid_cols)*2+v.row%2+T;let w=!1;const P=(r.board?.[_]||[]).map((F,I)=>{const z=s.get(F),Y=FM.has(z)?z:null;return Y||(w=!0),{slot_key:`${_}:${I}`,code_id:Y,index:I,position:{x:y,y:I+T,z:M}}}),U=r.active_faults?.[_];return(U||w)&&l.push({column_id:_,reason:w?"unknown_type":"hardware_attention"}),{id:_,port:x,layer:v.layer,enabled:v.enabled!==!1,position:{x:y,y:T,z:M},stack:P,needs_attention:!!(U||w),beyond_validated_height:P.length>i.max_stack}}),m=r.connected===!0,p=!!r.hello?.recovery_mode||["starting","restoring","stopping"].includes(r.recovery?.status),g=m?i?p?"recovering":l.length||["attention","failed"].includes(r.recovery?.status)?"attention":"live":"waiting":"offline";return{contract:zM,source:t,connected:m,status:g,boot_id:i?.boot_id||r.hello?.boot_id||null,topology_id:i?.topology_id||null,module_count:c,validated_max_stack:i?.max_stack??null,columns:f,issues:l}}function IM({baseUrl:r,source:t="hardware",onState:i,onConnection:s=()=>{},onError:l=()=>{},watchdogMs:c=45e3}){if(typeof i!="function")throw new Error("baseUrl and onState are required");const h=r.replace(/\/$/,"");let f,m,p=!1,g=Date.now();function v(){p||(f?.close(),g=Date.now(),s("connecting"),f=new EventSource(`${h}/api/events`),f.onmessage=_=>{g=Date.now();let x;try{const E=JSON.parse(_.data);if(!E.snapshot)return;x=mp(E.snapshot,{source:t})}catch(E){l(E),s("invalid-data");return}s("live"),i(x)},f.onerror=()=>{p||s("reconnecting")})}return v(),m=setInterval(()=>{Date.now()-g>c&&v()},Math.min(5e3,c)),{reconnect:v,close(){p=!0,f?.close(),clearInterval(m),s("stopped")}}}function BM(r,t=Math.random){const i=mp(r,{source:"mock"}).columns.filter(w=>w.enabled);if(!i.length)return null;const s=i.map(w=>w.position.x),l=i.map(w=>w.position.z),c=(Math.min(...s)+Math.max(...s))/2,h=(Math.min(...l)+Math.max(...l))/2,f=Math.max(1,(Math.max(...s)-Math.min(...s))/2),m=Math.max(1,(Math.max(...l)-Math.min(...l))/2),p=w=>Math.hypot((w.position.x-c)/f,(w.position.z-h)/m),g=i.filter(w=>w.stack.length<r.topology.max_stack);if(!g.length)return null;const v=t()<.18;let _=g.filter(w=>v?p(w)>.65:p(w)<=.8);_.length||(_=g);const x=t()<.28,E=_.filter(w=>x?w.stack.length>0:!w.stack.length);E.length&&(_=E);const T=i.filter(w=>w.stack.length),y=_.map(w=>{const P=T.some(U=>Math.hypot(w.position.x-U.position.x,w.position.z-U.position.z)<=1.1);return v?1:(.15+Math.exp(-3*p(w)**2))*(P?1.7:1)/(1+w.stack.length*.35)});let M=t()*y.reduce((w,P)=>w+P,0);for(let w=0;w<_.length;w++)if(M-=y[w],M<0)return _[w].id;return _.at(-1).id}const gp=["C0","C1","C2","C3","C4","C5"],_p=Array.from({length:8},(r,t)=>"A"+t),Ea=_p.flatMap((r,t)=>["L0","L0.5"].flatMap(i=>Array.from({length:8},(s,l)=>({id:i+"-r"+(t*2+Math.floor(l/4))+"-c"+l%4,layer:i,row:t*2+Math.floor(l/4),col:l%4,module:t,port:r,enabled:!0}))));function md(){return{connected:!0,topology:{module_count:8,max_stack:7,columns:Ea},module_layout:{module_count:8,grid_rows:4,grid_cols:2,slots:_p},codebook:{codes:gp.map(r=>({id:r,unit:r}))},board:{},active_faults:{}}}function Rh(r,t){return[1,2,4,8].includes(t)?{...r,module_layout:{...r.module_layout,grid_rows:8/t,grid_cols:t}}:r}function wh(r,t,i,s="C0"){if(!r.topology.columns.some(h=>h.id===t))return r;const l={...r.board},c=[...l[t]||[]];return i==="add"&&gp.includes(s)&&c.length<7&&c.push(s),i==="remove"&&c.pop(),c.length?l[t]=c:delete l[t],{...r,board:l}}function HM(r){const t=md();return t.board=Object.fromEntries(Ea.map((i,s)=>[i.id,r[s]||[]])),t}function zv(r){const t=[];for(const i of r.columns||[])if(i.enabled)for(const s of i.stack){if(!gp.includes(s.code_id))throw new Error("Unknown input code");t.push({id:s.slot_key,column:i.id,code:s.code_id,index:s.index,...s.position,attention:i.needs_attention})}return t.sort((i,s)=>i.id.localeCompare(s.id))}const GM=r=>mp(r,{source:"mock"});function VM(){const[r,t]=Qe.useState([]),[i,s]=Qe.useState("connecting");return Qe.useEffect(()=>{let l=!0,c,h,f="";const m=new AbortController;async function p(){try{const g=await fetch("/__hub/settings",{signal:m.signal});if(!g.ok)throw new Error;const{settings:v}=await g.json();if(!l)return;if(!v?.confirmed){s("setup"),c=setTimeout(p,2e3);return}h=IM({baseUrl:"http://127.0.0.1:8787",onState:_=>{if(l)try{const x=zv(_),E=JSON.stringify(x);E!==f&&(f=E,t(x)),s(_.status)}catch{s("invalid-data")}},onConnection:_=>{l&&_!=="live"&&s(_)},onError:()=>{l&&s("invalid-data")}})}catch{l&&(s("launcher-offline"),c=setTimeout(p,3e3))}}return p(),()=>{l=!1,m.abort(),clearTimeout(c),h?.close()}},[]),{blocks:r,status:i}}function vp(r){let t=2166136261;for(const i of r)t=Math.imul(t^i.charCodeAt(0),16777619);return(t>>>0)/4294967295}function kM(r){const t=r.map(f=>({...f,neighbors:[]})),i=new Map(t.map(f=>[[f.x,f.y,f.z].join(","),f])),s=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];for(const f of[-.5,.5])for(const m of[-.5,.5])for(const p of[-.5,.5])s.push([f,m,p]);for(const f of t)for(const[m,p,g]of s){const v=i.get([f.x+m,f.y+p,f.z+g].join(","));v&&f.neighbors.push(v.id)}const l=new Map(t.map(f=>[f.id,f])),c=[],h=new Set;for(const f of t){if(h.has(f.id))continue;const m=[],p=[f.id];for(h.add(f.id);p.length;){const g=p.pop(),v=l.get(g);m.push(v);for(const _ of v.neighbors)h.has(_)||(h.add(_),p.push(_))}c.push(m)}return{nodes:t,byId:l,groups:c}}function XM(r){if(!r.length)return{cx:1.75,cz:.75,width:6,depth:4,height:1};const t=r.map(s=>s.x),i=r.map(s=>s.z);return{cx:(Math.min(...t)+Math.max(...t))/2,cz:(Math.min(...i)+Math.max(...i))/2,width:Math.max(...t)-Math.min(...t)+3,depth:Math.max(...i)-Math.min(...i)+3,height:Math.max(...r.map(s=>s.y))+1}}const Kn={number:"05",title:"ARCHITECTURE",subtitle:"Matter, void, and the spaces between.",kind:"architecture"},ol=[{id:"C0",name:"Living",color:"#e5e4dc",description:"Dense inhabited volumes, carved by neighboring public space."},{id:"C1",name:"Commons",color:"#7d868c",description:"Shared voids open galleries through adjacent volumes."},{id:"C2",name:"Garden",color:"#83938a",description:"Porous living membranes become glazed conservatories near light."},{id:"C3",name:"Passage",color:"#b0b8bd",description:"Exposed structure and bridges connect the inhabited field."},{id:"C4",name:"Atelier",color:"#d4d9da",description:"Recursive lattice workshops unfold into public galleries."},{id:"C5",name:"Lantern",color:"#c8dfdf",description:"Folded luminous skins introduce light and translucency."}],b_=[{name:"Porous monolith",stacks:[["C0","C0","C2"],["C3","C1","C0","C2"],["C0","C4","C5"],["C2"],["C1","C0"],["C3","C1","C0"],["C1","C4"],["C1"],["C0","C2"],["C1","C0","C2"],["C3","C4"],["C2"],["C2"],["C0"],["C4","C5"],[]]},{name:"Distributed atelier",stacks:[["C4","C5"],["C1"],["C4","C0"],["C2"],["C4"],["C3","C1"],["C4","C5"],["C0"],["C3"],["C1","C2"],["C3"],["C4"],["C2"],["C0"],["C2"],[]]},{name:"Living lattice",stacks:[["C2","C2","C5"],["C5","C2","C5"],["C0"],["C2"],["C0","C2"],["C3","C1"],["C0","C5"],[],["C5","C2"],["C2","C5"],["C3"],[],["C0"],["C1"],[],[]]}];function WM(r){const t=kM(r),i=new Set,s=new Set;for(const f of t.nodes.filter(m=>m.code==="C2")){const m=[],p=new Set([f.id]),g=[f];let v=!1;for(;g.length;){const _=g.pop();m.push(_);for(const x of _.neighbors){const E=t.byId.get(x);E.code==="C5"&&(v=!0),E.code==="C2"&&E.x===_.x&&E.z===_.z&&!p.has(E.id)&&(p.add(E.id),g.push(E))}}if(v)for(const _ of m)s.add(_.id)}const l=t.nodes.map(f=>{const m=f.neighbors.map(U=>t.byId.get(U)),p=U=>m.some(F=>F.code===U),g=!m.some(U=>U.x===f.x&&U.z===f.z&&U.y>f.y),v=p("C2"),_=p("C5")||s.has(f.id),x=p("C1"),E=p("C3"),T=p("C4");let y=["home","common-room","terrace","stair","atelier","lantern"][Number(f.code[1])];f.code==="C0"&&v&&(y="garden-home",i.add("Garden living")),f.code==="C0"&&p("C4")&&i.add("Live / work"),f.code==="C1"&&_&&(y="light-hall",i.add("Daylit commons")),f.code==="C2"&&(y=_?"conservatory":g?"terrace":"winter-garden",_&&i.add("Conservatory")),f.code==="C4"&&x&&(y="gallery",i.add("Open studios")),f.code==="C4"&&_&&i.add("North-light atelier");const M=m.map(U=>({id:U.id,code:U.code,dx:U.x-f.x,dy:U.y-f.y,dz:U.z-f.z})),w=m.filter(U=>U.code===f.code).length,P=Math.max(.2,Math.min(.85,.57+w*.055-(x?.18:0)-(_?.08:0)));return f.code==="C0"&&w>=2&&i.add("Aggregated mass"),f.code==="C4"&&E&&i.add("Structural weave"),{...f,density:P,same:w,form:y,garden:v,light:_,publicRoom:x,passage:E,work:T,roof:g,connections:M,seed:vp(f.id)}});for(const f of t.groups){const m=Object.fromEntries(ol.map(p=>[p.id,f.filter(g=>g.code===p.id).length]));m.C0>=2&&m.C3>=2&&i.add("Vertical neighborhood"),m.C0&&m.C1&&m.C2&&i.add("Neighborhood commons"),m.C4&&m.C1&&m.C3&&i.add("Makers’ street"),f.some(p=>p.code==="C2"&&s.has(p.id)&&p.neighbors.some(g=>{const v=t.byId.get(g);return v.code==="C2"&&v.x===p.x&&v.z===p.z&&v.y!==p.y}))&&i.add("Vertical greenhouse")}const c=new Map(l.filter(f=>f.y===0).map(f=>[[f.x,f.z].join(","),f])),h=[];for(const f of c.values()){const m=f.x+1,p=f.z,g=[m,p].join(",");!c.has(g)&&[[m-1,p],[m+1,p],[m,p-1],[m,p+1]].every(v=>c.has(v.join(",")))&&h.push({x:m,z:p})}return h.length&&i.add("Sheltered courtyard"),{nodes:l,events:[...i].sort(),courtyards:h,bounds:XM(r),links:l.reduce((f,m)=>f+m.neighbors.length,0)/2}}const xp="182",Xr={ROTATE:0,DOLLY:1,PAN:2},Gr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},qM=0,T_=1,YM=2,$c=1,Fv=2,Vr=3,us=0,Jn=1,Bi=2,Aa=0,Wr=1,gd=2,A_=3,C_=4,jM=5,zs=100,ZM=101,KM=102,QM=103,JM=104,$M=200,ty=201,ey=202,ny=203,_d=204,vd=205,iy=206,ay=207,sy=208,ry=209,oy=210,ly=211,cy=212,uy=213,fy=214,xd=0,Sd=1,Md=2,Yr=3,yd=4,Ed=5,bd=6,Td=7,Iv=0,hy=1,dy=2,Qi=0,Bv=1,Hv=2,Gv=3,Sp=4,Vv=5,kv=6,Xv=7,Wv=300,Hs=301,jr=302,Ad=303,Cd=304,hu=306,Rd=1e3,Ta=1001,wd=1002,Ln=1003,py=1004,Rc=1005,In=1006,Dh=1007,Is=1008,ci=1009,qv=1010,Yv=1011,ll=1012,Mp=1013,Ji=1014,Zi=1015,Ti=1016,yp=1017,Ep=1018,cl=1020,jv=35902,Zv=35899,Kv=1021,Qv=1022,Hi=1023,Ra=1026,Bs=1027,Jv=1028,bp=1029,Zr=1030,Tp=1031,Ap=1033,tu=33776,eu=33777,nu=33778,iu=33779,Dd=35840,Ud=35841,Ld=35842,Nd=35843,Od=36196,Pd=37492,zd=37496,Fd=37488,Id=37489,Bd=37490,Hd=37491,Gd=37808,Vd=37809,kd=37810,Xd=37811,Wd=37812,qd=37813,Yd=37814,jd=37815,Zd=37816,Kd=37817,Qd=37818,Jd=37819,$d=37820,tp=37821,ep=36492,np=36494,ip=36495,ap=36283,sp=36284,rp=36285,op=36286,my=3200,$v=0,gy=1,os="",yi="srgb",Kr="srgb-linear",ou="linear",Be="srgb",Tr=7680,R_=519,_y=512,vy=513,xy=514,Cp=515,Sy=516,My=517,Rp=518,yy=519,w_=35044,D_="300 es",Ki=2e3,lu=2001;function tx(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function cu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Ey(){const r=cu("canvas");return r.style.display="block",r}const U_={};function L_(...r){const t="THREE."+r.shift();console.log(t,...r)}function ie(...r){const t="THREE."+r.shift();console.warn(t,...r)}function Re(...r){const t="THREE."+r.shift();console.error(t,...r)}function ul(...r){const t=r.join(" ");t in U_||(U_[t]=!0,ie(...r))}function by(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class Vs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],au=Math.PI/180,lp=180/Math.PI;function pl(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(zn[r&255]+zn[r>>8&255]+zn[r>>16&255]+zn[r>>24&255]+"-"+zn[t&255]+zn[t>>8&255]+"-"+zn[t>>16&15|64]+zn[t>>24&255]+"-"+zn[i&63|128]+zn[i>>8&255]+"-"+zn[i>>16&255]+zn[i>>24&255]+zn[s&255]+zn[s>>8&255]+zn[s>>16&255]+zn[s>>24&255]).toLowerCase()}function oe(r,t,i){return Math.max(t,Math.min(i,r))}function Ty(r,t){return(r%t+t)%t}function Uh(r,t,i){return(1-i)*r+i*t}function Ko(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function jn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ay={DEG2RAD:au};class $t{constructor(t=0,i=0){$t.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=oe(this.x,t.x,i.x),this.y=oe(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=oe(this.x,t,i),this.y=oe(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(oe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(oe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gs{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,f){let m=s[l+0],p=s[l+1],g=s[l+2],v=s[l+3],_=c[h+0],x=c[h+1],E=c[h+2],T=c[h+3];if(f<=0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v;return}if(f>=1){t[i+0]=_,t[i+1]=x,t[i+2]=E,t[i+3]=T;return}if(v!==T||m!==_||p!==x||g!==E){let y=m*_+p*x+g*E+v*T;y<0&&(_=-_,x=-x,E=-E,T=-T,y=-y);let M=1-f;if(y<.9995){const w=Math.acos(y),P=Math.sin(w);M=Math.sin(M*w)/P,f=Math.sin(f*w)/P,m=m*M+_*f,p=p*M+x*f,g=g*M+E*f,v=v*M+T*f}else{m=m*M+_*f,p=p*M+x*f,g=g*M+E*f,v=v*M+T*f;const w=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=w,p*=w,g*=w,v*=w}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v}static multiplyQuaternionsFlat(t,i,s,l,c,h){const f=s[l],m=s[l+1],p=s[l+2],g=s[l+3],v=c[h],_=c[h+1],x=c[h+2],E=c[h+3];return t[i]=f*E+g*v+m*x-p*_,t[i+1]=m*E+g*_+p*v-f*x,t[i+2]=p*E+g*x+f*_-m*v,t[i+3]=g*E-f*v-m*_-p*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,f=Math.cos,m=Math.sin,p=f(s/2),g=f(l/2),v=f(c/2),_=m(s/2),x=m(l/2),E=m(c/2);switch(h){case"XYZ":this._x=_*g*v+p*x*E,this._y=p*x*v-_*g*E,this._z=p*g*E+_*x*v,this._w=p*g*v-_*x*E;break;case"YXZ":this._x=_*g*v+p*x*E,this._y=p*x*v-_*g*E,this._z=p*g*E-_*x*v,this._w=p*g*v+_*x*E;break;case"ZXY":this._x=_*g*v-p*x*E,this._y=p*x*v+_*g*E,this._z=p*g*E+_*x*v,this._w=p*g*v-_*x*E;break;case"ZYX":this._x=_*g*v-p*x*E,this._y=p*x*v+_*g*E,this._z=p*g*E-_*x*v,this._w=p*g*v+_*x*E;break;case"YZX":this._x=_*g*v+p*x*E,this._y=p*x*v+_*g*E,this._z=p*g*E-_*x*v,this._w=p*g*v-_*x*E;break;case"XZY":this._x=_*g*v-p*x*E,this._y=p*x*v-_*g*E,this._z=p*g*E+_*x*v,this._w=p*g*v+_*x*E;break;default:ie("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],f=i[5],m=i[9],p=i[2],g=i[6],v=i[10],_=s+f+v;if(_>0){const x=.5/Math.sqrt(_+1);this._w=.25/x,this._x=(g-m)*x,this._y=(c-p)*x,this._z=(h-l)*x}else if(s>f&&s>v){const x=2*Math.sqrt(1+s-f-v);this._w=(g-m)/x,this._x=.25*x,this._y=(l+h)/x,this._z=(c+p)/x}else if(f>v){const x=2*Math.sqrt(1+f-s-v);this._w=(c-p)/x,this._x=(l+h)/x,this._y=.25*x,this._z=(m+g)/x}else{const x=2*Math.sqrt(1+v-s-f);this._w=(h-l)/x,this._x=(c+p)/x,this._y=(m+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(oe(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,f=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+h*f+l*p-c*m,this._y=l*g+h*m+c*f-s*p,this._z=c*g+h*p+s*m-l*f,this._w=h*g-s*f-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let s=t._x,l=t._y,c=t._z,h=t._w,f=this.dot(t);f<0&&(s=-s,l=-l,c=-c,h=-h,f=-f);let m=1-i;if(f<.9995){const p=Math.acos(f),g=Math.sin(p);m=Math.sin(m*p)/g,i=Math.sin(i*p)/g,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(t=0,i=0,s=0){q.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(N_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(N_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,f=t.z,m=t.w,p=2*(h*l-f*s),g=2*(f*i-c*l),v=2*(c*s-h*i);return this.x=i+m*p+h*v-f*g,this.y=s+m*g+f*p-c*v,this.z=l+m*v+c*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=oe(this.x,t.x,i.x),this.y=oe(this.y,t.y,i.y),this.z=oe(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=oe(this.x,t,i),this.y=oe(this.y,t,i),this.z=oe(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(oe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,f=i.y,m=i.z;return this.x=l*m-c*f,this.y=c*h-s*m,this.z=s*f-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Lh.copy(this).projectOnVector(t),this.sub(Lh)}reflect(t){return this.sub(Lh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(oe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lh=new q,N_=new Gs;class de{constructor(t,i,s,l,c,h,f,m,p){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,f,m,p)}set(t,i,s,l,c,h,f,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=f,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],f=s[3],m=s[6],p=s[1],g=s[4],v=s[7],_=s[2],x=s[5],E=s[8],T=l[0],y=l[3],M=l[6],w=l[1],P=l[4],U=l[7],F=l[2],I=l[5],z=l[8];return c[0]=h*T+f*w+m*F,c[3]=h*y+f*P+m*I,c[6]=h*M+f*U+m*z,c[1]=p*T+g*w+v*F,c[4]=p*y+g*P+v*I,c[7]=p*M+g*U+v*z,c[2]=_*T+x*w+E*F,c[5]=_*y+x*P+E*I,c[8]=_*M+x*U+E*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],f=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*f*p-s*c*g+s*f*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],f=t[5],m=t[6],p=t[7],g=t[8],v=g*h-f*p,_=f*m-g*c,x=p*c-h*m,E=i*v+s*_+l*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=v*T,t[1]=(l*p-g*s)*T,t[2]=(f*s-l*h)*T,t[3]=_*T,t[4]=(g*i-l*m)*T,t[5]=(l*c-f*i)*T,t[6]=x*T,t[7]=(s*m-p*i)*T,t[8]=(h*i-s*c)*T,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,f){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*f)+h+t,-l*p,l*m,-l*(-p*h+m*f)+f+i,0,0,1),this}scale(t,i){return this.premultiply(Nh.makeScale(t,i)),this}rotate(t){return this.premultiply(Nh.makeRotation(-t)),this}translate(t,i){return this.premultiply(Nh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Nh=new de,O_=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),P_=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Cy(){const r={enabled:!0,workingColorSpace:Kr,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Be&&(l.r=Ca(l.r),l.g=Ca(l.g),l.b=Ca(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Be&&(l.r=qr(l.r),l.g=qr(l.g),l.b=qr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===os?ou:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return ul("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return ul("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Kr]:{primaries:t,whitePoint:s,transfer:ou,toXYZ:O_,fromXYZ:P_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:yi},outputColorSpaceConfig:{drawingBufferColorSpace:yi}},[yi]:{primaries:t,whitePoint:s,transfer:Be,toXYZ:O_,fromXYZ:P_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:yi}}}),r}const Te=Cy();function Ca(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function qr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ar;class Ry{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Ar===void 0&&(Ar=cu("canvas")),Ar.width=t.width,Ar.height=t.height;const l=Ar.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Ar}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=cu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Ca(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ca(i[s]/255)*255):i[s]=Ca(i[s]);return{data:i,width:t.width,height:t.height}}else return ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let wy=0;class wp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wy++}),this.uuid=pl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,f=l.length;h<f;h++)l[h].isDataTexture?c.push(Oh(l[h].image)):c.push(Oh(l[h]))}else c=Oh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Oh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ry.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ie("Texture: Unable to serialize Texture."),{})}let Dy=0;const Ph=new q;class Gn extends Vs{constructor(t=Gn.DEFAULT_IMAGE,i=Gn.DEFAULT_MAPPING,s=Ta,l=Ta,c=In,h=Is,f=Hi,m=ci,p=Gn.DEFAULT_ANISOTROPY,g=os){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dy++}),this.uuid=pl(),this.name="",this.source=new wp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=m,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ph).x}get height(){return this.source.getSize(Ph).y}get depth(){return this.source.getSize(Ph).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){ie(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ie(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Rd:t.x=t.x-Math.floor(t.x);break;case Ta:t.x=t.x<0?0:1;break;case wd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Rd:t.y=t.y-Math.floor(t.y);break;case Ta:t.y=t.y<0?0:1;break;case wd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=Wv;Gn.DEFAULT_ANISOTROPY=1;class an{constructor(t=0,i=0,s=0,l=1){an.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],g=m[4],v=m[8],_=m[1],x=m[5],E=m[9],T=m[2],y=m[6],M=m[10];if(Math.abs(g-_)<.01&&Math.abs(v-T)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+T)<.1&&Math.abs(E+y)<.1&&Math.abs(p+x+M-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(p+1)/2,U=(x+1)/2,F=(M+1)/2,I=(g+_)/4,z=(v+T)/4,Y=(E+y)/4;return P>U&&P>F?P<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(P),l=I/s,c=z/s):U>F?U<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),s=I/l,c=Y/l):F<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),s=z/c,l=Y/c),this.set(s,l,c,i),this}let w=Math.sqrt((y-E)*(y-E)+(v-T)*(v-T)+(_-g)*(_-g));return Math.abs(w)<.001&&(w=1),this.x=(y-E)/w,this.y=(v-T)/w,this.z=(_-g)/w,this.w=Math.acos((p+x+M-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=oe(this.x,t.x,i.x),this.y=oe(this.y,t.y,i.y),this.z=oe(this.z,t.z,i.z),this.w=oe(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=oe(this.x,t,i),this.y=oe(this.y,t,i),this.z=oe(this.z,t,i),this.w=oe(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(oe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Uy extends Vs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new an(0,0,t,i),this.scissorTest=!1,this.viewport=new an(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new Gn(l);this.textures=[];const h=s.count;for(let f=0;f<h;f++)this.textures[f]=c.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new wp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ui extends Uy{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class ex extends Gn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Ta,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ly extends Gn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Ta,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ml{constructor(t=new q(1/0,1/0,1/0),i=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ni.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ni.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ni.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,f=c.count;h<f;h++)t.isMesh===!0?t.getVertexPosition(h,Ni):Ni.fromBufferAttribute(c,h),Ni.applyMatrix4(t.matrixWorld),this.expandByPoint(Ni);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),wc.copy(s.boundingBox)),wc.applyMatrix4(t.matrixWorld),this.union(wc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ni),Ni.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qo),Dc.subVectors(this.max,Qo),Cr.subVectors(t.a,Qo),Rr.subVectors(t.b,Qo),wr.subVectors(t.c,Qo),es.subVectors(Rr,Cr),ns.subVectors(wr,Rr),Ds.subVectors(Cr,wr);let i=[0,-es.z,es.y,0,-ns.z,ns.y,0,-Ds.z,Ds.y,es.z,0,-es.x,ns.z,0,-ns.x,Ds.z,0,-Ds.x,-es.y,es.x,0,-ns.y,ns.x,0,-Ds.y,Ds.x,0];return!zh(i,Cr,Rr,wr,Dc)||(i=[1,0,0,0,1,0,0,0,1],!zh(i,Cr,Rr,wr,Dc))?!1:(Uc.crossVectors(es,ns),i=[Uc.x,Uc.y,Uc.z],zh(i,Cr,Rr,wr,Dc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ni).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ni).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(va[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),va[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),va[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),va[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),va[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),va[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),va[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),va[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(va),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const va=[new q,new q,new q,new q,new q,new q,new q,new q],Ni=new q,wc=new ml,Cr=new q,Rr=new q,wr=new q,es=new q,ns=new q,Ds=new q,Qo=new q,Dc=new q,Uc=new q,Us=new q;function zh(r,t,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){Us.fromArray(r,c);const f=l.x*Math.abs(Us.x)+l.y*Math.abs(Us.y)+l.z*Math.abs(Us.z),m=t.dot(Us),p=i.dot(Us),g=s.dot(Us);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>f)return!1}return!0}const Ny=new ml,Jo=new q,Fh=new q;class du{constructor(t=new q,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):Ny.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Jo.subVectors(t,this.center);const i=Jo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Jo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Jo.copy(t.center).add(Fh)),this.expandByPoint(Jo.copy(t.center).sub(Fh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const xa=new q,Ih=new q,Lc=new q,is=new q,Bh=new q,Nc=new q,Hh=new q;class Dp{constructor(t=new q,i=new q(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=xa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(xa.copy(this.origin).addScaledVector(this.direction,i),xa.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Ih.copy(t).add(i).multiplyScalar(.5),Lc.copy(i).sub(t).normalize(),is.copy(this.origin).sub(Ih);const c=t.distanceTo(i)*.5,h=-this.direction.dot(Lc),f=is.dot(this.direction),m=-is.dot(Lc),p=is.lengthSq(),g=Math.abs(1-h*h);let v,_,x,E;if(g>0)if(v=h*m-f,_=h*f-m,E=c*g,v>=0)if(_>=-E)if(_<=E){const T=1/g;v*=T,_*=T,x=v*(v+h*_+2*f)+_*(h*v+_+2*m)+p}else _=c,v=Math.max(0,-(h*_+f)),x=-v*v+_*(_+2*m)+p;else _=-c,v=Math.max(0,-(h*_+f)),x=-v*v+_*(_+2*m)+p;else _<=-E?(v=Math.max(0,-(-h*c+f)),_=v>0?-c:Math.min(Math.max(-c,-m),c),x=-v*v+_*(_+2*m)+p):_<=E?(v=0,_=Math.min(Math.max(-c,-m),c),x=_*(_+2*m)+p):(v=Math.max(0,-(h*c+f)),_=v>0?c:Math.min(Math.max(-c,-m),c),x=-v*v+_*(_+2*m)+p);else _=h>0?-c:c,v=Math.max(0,-(h*_+f)),x=-v*v+_*(_+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Ih).addScaledVector(Lc,_),x}intersectSphere(t,i){xa.subVectors(t.center,this.origin);const s=xa.dot(this.direction),l=xa.dot(xa)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),f=s-h,m=s+h;return m<0?null:f<0?this.at(m,i):this.at(f,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,f,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return p>=0?(s=(t.min.x-_.x)*p,l=(t.max.x-_.x)*p):(s=(t.max.x-_.x)*p,l=(t.min.x-_.x)*p),g>=0?(c=(t.min.y-_.y)*g,h=(t.max.y-_.y)*g):(c=(t.max.y-_.y)*g,h=(t.min.y-_.y)*g),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),v>=0?(f=(t.min.z-_.z)*v,m=(t.max.z-_.z)*v):(f=(t.max.z-_.z)*v,m=(t.min.z-_.z)*v),s>m||f>l)||((f>s||s!==s)&&(s=f),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,xa)!==null}intersectTriangle(t,i,s,l,c){Bh.subVectors(i,t),Nc.subVectors(s,t),Hh.crossVectors(Bh,Nc);let h=this.direction.dot(Hh),f;if(h>0){if(l)return null;f=1}else if(h<0)f=-1,h=-h;else return null;is.subVectors(this.origin,t);const m=f*this.direction.dot(Nc.crossVectors(is,Nc));if(m<0)return null;const p=f*this.direction.dot(Bh.cross(is));if(p<0||m+p>h)return null;const g=-f*is.dot(Hh);return g<0?null:this.at(g/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(t,i,s,l,c,h,f,m,p,g,v,_,x,E,T,y){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,f,m,p,g,v,_,x,E,T,y)}set(t,i,s,l,c,h,f,m,p,g,v,_,x,E,T,y){const M=this.elements;return M[0]=t,M[4]=i,M[8]=s,M[12]=l,M[1]=c,M[5]=h,M[9]=f,M[13]=m,M[2]=p,M[6]=g,M[10]=v,M[14]=_,M[3]=x,M[7]=E,M[11]=T,M[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Dr.setFromMatrixColumn(t,0).length(),c=1/Dr.setFromMatrixColumn(t,1).length(),h=1/Dr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),f=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const _=h*g,x=h*v,E=f*g,T=f*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=x+E*p,i[5]=_-T*p,i[9]=-f*m,i[2]=T-_*p,i[6]=E+x*p,i[10]=h*m}else if(t.order==="YXZ"){const _=m*g,x=m*v,E=p*g,T=p*v;i[0]=_+T*f,i[4]=E*f-x,i[8]=h*p,i[1]=h*v,i[5]=h*g,i[9]=-f,i[2]=x*f-E,i[6]=T+_*f,i[10]=h*m}else if(t.order==="ZXY"){const _=m*g,x=m*v,E=p*g,T=p*v;i[0]=_-T*f,i[4]=-h*v,i[8]=E+x*f,i[1]=x+E*f,i[5]=h*g,i[9]=T-_*f,i[2]=-h*p,i[6]=f,i[10]=h*m}else if(t.order==="ZYX"){const _=h*g,x=h*v,E=f*g,T=f*v;i[0]=m*g,i[4]=E*p-x,i[8]=_*p+T,i[1]=m*v,i[5]=T*p+_,i[9]=x*p-E,i[2]=-p,i[6]=f*m,i[10]=h*m}else if(t.order==="YZX"){const _=h*m,x=h*p,E=f*m,T=f*p;i[0]=m*g,i[4]=T-_*v,i[8]=E*v+x,i[1]=v,i[5]=h*g,i[9]=-f*g,i[2]=-p*g,i[6]=x*v+E,i[10]=_-T*v}else if(t.order==="XZY"){const _=h*m,x=h*p,E=f*m,T=f*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=_*v+T,i[5]=h*g,i[9]=x*v-E,i[2]=E*v-x,i[6]=f*g,i[10]=T*v+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Oy,t,Py)}lookAt(t,i,s){const l=this.elements;return ri.subVectors(t,i),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),as.crossVectors(s,ri),as.lengthSq()===0&&(Math.abs(s.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),as.crossVectors(s,ri)),as.normalize(),Oc.crossVectors(ri,as),l[0]=as.x,l[4]=Oc.x,l[8]=ri.x,l[1]=as.y,l[5]=Oc.y,l[9]=ri.y,l[2]=as.z,l[6]=Oc.z,l[10]=ri.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],f=s[4],m=s[8],p=s[12],g=s[1],v=s[5],_=s[9],x=s[13],E=s[2],T=s[6],y=s[10],M=s[14],w=s[3],P=s[7],U=s[11],F=s[15],I=l[0],z=l[4],Y=l[8],R=l[12],D=l[1],V=l[5],Q=l[9],et=l[13],tt=l[2],G=l[6],L=l[10],B=l[14],$=l[3],xt=l[7],vt=l[11],N=l[15];return c[0]=h*I+f*D+m*tt+p*$,c[4]=h*z+f*V+m*G+p*xt,c[8]=h*Y+f*Q+m*L+p*vt,c[12]=h*R+f*et+m*B+p*N,c[1]=g*I+v*D+_*tt+x*$,c[5]=g*z+v*V+_*G+x*xt,c[9]=g*Y+v*Q+_*L+x*vt,c[13]=g*R+v*et+_*B+x*N,c[2]=E*I+T*D+y*tt+M*$,c[6]=E*z+T*V+y*G+M*xt,c[10]=E*Y+T*Q+y*L+M*vt,c[14]=E*R+T*et+y*B+M*N,c[3]=w*I+P*D+U*tt+F*$,c[7]=w*z+P*V+U*G+F*xt,c[11]=w*Y+P*Q+U*L+F*vt,c[15]=w*R+P*et+U*B+F*N,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],f=t[5],m=t[9],p=t[13],g=t[2],v=t[6],_=t[10],x=t[14],E=t[3],T=t[7],y=t[11],M=t[15],w=m*x-p*_,P=f*x-p*v,U=f*_-m*v,F=h*x-p*g,I=h*_-m*g,z=h*v-f*g;return i*(T*w-y*P+M*U)-s*(E*w-y*F+M*I)+l*(E*P-T*F+M*z)-c*(E*U-T*I+y*z)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],f=t[5],m=t[6],p=t[7],g=t[8],v=t[9],_=t[10],x=t[11],E=t[12],T=t[13],y=t[14],M=t[15],w=v*y*p-T*_*p+T*m*x-f*y*x-v*m*M+f*_*M,P=E*_*p-g*y*p-E*m*x+h*y*x+g*m*M-h*_*M,U=g*T*p-E*v*p+E*f*x-h*T*x-g*f*M+h*v*M,F=E*v*m-g*T*m-E*f*_+h*T*_+g*f*y-h*v*y,I=i*w+s*P+l*U+c*F;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/I;return t[0]=w*z,t[1]=(T*_*c-v*y*c-T*l*x+s*y*x+v*l*M-s*_*M)*z,t[2]=(f*y*c-T*m*c+T*l*p-s*y*p-f*l*M+s*m*M)*z,t[3]=(v*m*c-f*_*c-v*l*p+s*_*p+f*l*x-s*m*x)*z,t[4]=P*z,t[5]=(g*y*c-E*_*c+E*l*x-i*y*x-g*l*M+i*_*M)*z,t[6]=(E*m*c-h*y*c-E*l*p+i*y*p+h*l*M-i*m*M)*z,t[7]=(h*_*c-g*m*c+g*l*p-i*_*p-h*l*x+i*m*x)*z,t[8]=U*z,t[9]=(E*v*c-g*T*c-E*s*x+i*T*x+g*s*M-i*v*M)*z,t[10]=(h*T*c-E*f*c+E*s*p-i*T*p-h*s*M+i*f*M)*z,t[11]=(g*f*c-h*v*c-g*s*p+i*v*p+h*s*x-i*f*x)*z,t[12]=F*z,t[13]=(g*T*l-E*v*l+E*s*_-i*T*_-g*s*y+i*v*y)*z,t[14]=(E*f*l-h*T*l-E*s*m+i*T*m+h*s*y-i*f*y)*z,t[15]=(h*v*l-g*f*l+g*s*m-i*v*m-h*s*_+i*f*_)*z,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,f=t.y,m=t.z,p=c*h,g=c*f;return this.set(p*h+s,p*f-l*m,p*m+l*f,0,p*f+l*m,g*f+s,g*m-l*h,0,p*m-l*f,g*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,f=i._z,m=i._w,p=c+c,g=h+h,v=f+f,_=c*p,x=c*g,E=c*v,T=h*g,y=h*v,M=f*v,w=m*p,P=m*g,U=m*v,F=s.x,I=s.y,z=s.z;return l[0]=(1-(T+M))*F,l[1]=(x+U)*F,l[2]=(E-P)*F,l[3]=0,l[4]=(x-U)*I,l[5]=(1-(_+M))*I,l[6]=(y+w)*I,l[7]=0,l[8]=(E+P)*z,l[9]=(y-w)*z,l[10]=(1-(_+T))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let c=Dr.set(l[0],l[1],l[2]).length();const h=Dr.set(l[4],l[5],l[6]).length(),f=Dr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Oi.copy(this);const p=1/c,g=1/h,v=1/f;return Oi.elements[0]*=p,Oi.elements[1]*=p,Oi.elements[2]*=p,Oi.elements[4]*=g,Oi.elements[5]*=g,Oi.elements[6]*=g,Oi.elements[8]*=v,Oi.elements[9]*=v,Oi.elements[10]*=v,i.setFromRotationMatrix(Oi),s.x=c,s.y=h,s.z=f,this}makePerspective(t,i,s,l,c,h,f=Ki,m=!1){const p=this.elements,g=2*c/(i-t),v=2*c/(s-l),_=(i+t)/(i-t),x=(s+l)/(s-l);let E,T;if(m)E=c/(h-c),T=h*c/(h-c);else if(f===Ki)E=-(h+c)/(h-c),T=-2*h*c/(h-c);else if(f===lu)E=-h/(h-c),T=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=g,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=v,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,h,f=Ki,m=!1){const p=this.elements,g=2/(i-t),v=2/(s-l),_=-(i+t)/(i-t),x=-(s+l)/(s-l);let E,T;if(m)E=1/(h-c),T=h/(h-c);else if(f===Ki)E=-2/(h-c),T=-(h+c)/(h-c);else if(f===lu)E=-1/(h-c),T=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=g,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=v,p[9]=0,p[13]=x,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Dr=new q,Oi=new Je,Oy=new q(0,0,0),Py=new q(1,1,1),as=new q,Oc=new q,ri=new q,z_=new Je,F_=new Gs;class $i{constructor(t=0,i=0,s=0,l=$i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],f=l[8],m=l[1],p=l[5],g=l[9],v=l[2],_=l[6],x=l[10];switch(i){case"XYZ":this._y=Math.asin(oe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-oe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,x),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(oe(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,x),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-oe(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,x),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(oe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(f,x));break;case"XZY":this._z=Math.asin(-oe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-g,x),this._y=0);break;default:ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return z_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(z_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return F_.setFromEuler(this),this.setFromQuaternion(F_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$i.DEFAULT_ORDER="XYZ";class nx{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zy=0;const I_=new q,Ur=new Gs,Sa=new Je,Pc=new q,$o=new q,Fy=new q,Iy=new Gs,B_=new q(1,0,0),H_=new q(0,1,0),G_=new q(0,0,1),V_={type:"added"},By={type:"removed"},Lr={type:"childadded",child:null},Gh={type:"childremoved",child:null};class Mn extends Vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zy++}),this.uuid=pl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mn.DEFAULT_UP.clone();const t=new q,i=new $i,s=new Gs,l=new q(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Je},normalMatrix:{value:new de}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=Mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Ur.setFromAxisAngle(t,i),this.quaternion.multiply(Ur),this}rotateOnWorldAxis(t,i){return Ur.setFromAxisAngle(t,i),this.quaternion.premultiply(Ur),this}rotateX(t){return this.rotateOnAxis(B_,t)}rotateY(t){return this.rotateOnAxis(H_,t)}rotateZ(t){return this.rotateOnAxis(G_,t)}translateOnAxis(t,i){return I_.copy(t).applyQuaternion(this.quaternion),this.position.add(I_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(B_,t)}translateY(t){return this.translateOnAxis(H_,t)}translateZ(t){return this.translateOnAxis(G_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Sa.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Pc.copy(t):Pc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),$o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sa.lookAt($o,Pc,this.up):Sa.lookAt(Pc,$o,this.up),this.quaternion.setFromRotationMatrix(Sa),l&&(Sa.extractRotation(l.matrixWorld),Ur.setFromRotationMatrix(Sa),this.quaternion.premultiply(Ur.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Re("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(V_),Lr.child=t,this.dispatchEvent(Lr),Lr.child=null):Re("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(By),Gh.child=t,this.dispatchEvent(Gh),Gh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Sa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Sa.multiply(t.parent.matrixWorld)),t.applyMatrix4(Sa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(V_),Lr.child=t,this.dispatchEvent(Lr),Lr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,t,Fy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,Iy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(f=>({...f})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(f,m){return f[m.uuid]===void 0&&(f[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const m=f.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let m=0,p=this.material.length;m<p;m++)f.push(c(t.materials,this.material[m]));l.material=f}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let f=0;f<this.children.length;f++)l.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let f=0;f<this.animations.length;f++){const m=this.animations[f];l.animations.push(c(t.animations,m))}}if(i){const f=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),v=h(t.shapes),_=h(t.skeletons),x=h(t.animations),E=h(t.nodes);f.length>0&&(s.geometries=f),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),v.length>0&&(s.shapes=v),_.length>0&&(s.skeletons=_),x.length>0&&(s.animations=x),E.length>0&&(s.nodes=E)}return s.object=l,s;function h(f){const m=[];for(const p in f){const g=f[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Mn.DEFAULT_UP=new q(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pi=new q,Ma=new q,Vh=new q,ya=new q,Nr=new q,Or=new q,k_=new q,kh=new q,Xh=new q,Wh=new q,qh=new an,Yh=new an,jh=new an;class bi{constructor(t=new q,i=new q,s=new q){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Pi.subVectors(t,i),l.cross(Pi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Pi.subVectors(l,i),Ma.subVectors(s,i),Vh.subVectors(t,i);const h=Pi.dot(Pi),f=Pi.dot(Ma),m=Pi.dot(Vh),p=Ma.dot(Ma),g=Ma.dot(Vh),v=h*p-f*f;if(v===0)return c.set(0,0,0),null;const _=1/v,x=(p*m-f*g)*_,E=(h*g-f*m)*_;return c.set(1-x-E,E,x)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,ya)===null?!1:ya.x>=0&&ya.y>=0&&ya.x+ya.y<=1}static getInterpolation(t,i,s,l,c,h,f,m){return this.getBarycoord(t,i,s,l,ya)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ya.x),m.addScaledVector(h,ya.y),m.addScaledVector(f,ya.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return qh.setScalar(0),Yh.setScalar(0),jh.setScalar(0),qh.fromBufferAttribute(t,i),Yh.fromBufferAttribute(t,s),jh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(qh,c.x),h.addScaledVector(Yh,c.y),h.addScaledVector(jh,c.z),h}static isFrontFacing(t,i,s,l){return Pi.subVectors(s,i),Ma.subVectors(t,i),Pi.cross(Ma).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pi.subVectors(this.c,this.b),Ma.subVectors(this.a,this.b),Pi.cross(Ma).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return bi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return bi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return bi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return bi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return bi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,f;Nr.subVectors(l,s),Or.subVectors(c,s),kh.subVectors(t,s);const m=Nr.dot(kh),p=Or.dot(kh);if(m<=0&&p<=0)return i.copy(s);Xh.subVectors(t,l);const g=Nr.dot(Xh),v=Or.dot(Xh);if(g>=0&&v<=g)return i.copy(l);const _=m*v-g*p;if(_<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(s).addScaledVector(Nr,h);Wh.subVectors(t,c);const x=Nr.dot(Wh),E=Or.dot(Wh);if(E>=0&&x<=E)return i.copy(c);const T=x*p-m*E;if(T<=0&&p>=0&&E<=0)return f=p/(p-E),i.copy(s).addScaledVector(Or,f);const y=g*E-x*v;if(y<=0&&v-g>=0&&x-E>=0)return k_.subVectors(c,l),f=(v-g)/(v-g+(x-E)),i.copy(l).addScaledVector(k_,f);const M=1/(y+T+_);return h=T*M,f=_*M,i.copy(s).addScaledVector(Nr,h).addScaledVector(Or,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ix={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ss={h:0,s:0,l:0},zc={h:0,s:0,l:0};function Zh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class ue{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=yi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Te.workingColorSpace){return this.r=t,this.g=i,this.b=s,Te.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Te.workingColorSpace){if(t=Ty(t,1),i=oe(i,0,1),s=oe(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Zh(h,c,t+1/3),this.g=Zh(h,c,t),this.b=Zh(h,c,t-1/3)}return Te.colorSpaceToWorking(this,l),this}setStyle(t,i=yi){function s(c){c!==void 0&&parseFloat(c)<1&&ie("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],f=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ie("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);ie("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=yi){const s=ix[t.toLowerCase()];return s!==void 0?this.setHex(s,i):ie("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ca(t.r),this.g=Ca(t.g),this.b=Ca(t.b),this}copyLinearToSRGB(t){return this.r=qr(t.r),this.g=qr(t.g),this.b=qr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=yi){return Te.workingToColorSpace(Fn.copy(this),t),Math.round(oe(Fn.r*255,0,255))*65536+Math.round(oe(Fn.g*255,0,255))*256+Math.round(oe(Fn.b*255,0,255))}getHexString(t=yi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Te.workingColorSpace){Te.workingToColorSpace(Fn.copy(this),i);const s=Fn.r,l=Fn.g,c=Fn.b,h=Math.max(s,l,c),f=Math.min(s,l,c);let m,p;const g=(f+h)/2;if(f===h)m=0,p=0;else{const v=h-f;switch(p=g<=.5?v/(h+f):v/(2-h-f),h){case s:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-s)/v+2;break;case c:m=(s-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Te.workingColorSpace){return Te.workingToColorSpace(Fn.copy(this),i),t.r=Fn.r,t.g=Fn.g,t.b=Fn.b,t}getStyle(t=yi){Te.workingToColorSpace(Fn.copy(this),t);const i=Fn.r,s=Fn.g,l=Fn.b;return t!==yi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(ss),this.setHSL(ss.h+t,ss.s+i,ss.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ss),t.getHSL(zc);const s=Uh(ss.h,zc.h,i),l=Uh(ss.s,zc.s,i),c=Uh(ss.l,zc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new ue;ue.NAMES=ix;let Hy=0;class Jr extends Vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hy++}),this.uuid=pl(),this.name="",this.type="Material",this.blending=Wr,this.side=us,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_d,this.blendDst=vd,this.blendEquation=zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ue(0,0,0),this.blendAlpha=0,this.depthFunc=Yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=R_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tr,this.stencilZFail=Tr,this.stencilZPass=Tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){ie(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ie(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Wr&&(s.blending=this.blending),this.side!==us&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==_d&&(s.blendSrc=this.blendSrc),this.blendDst!==vd&&(s.blendDst=this.blendDst),this.blendEquation!==zs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Yr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==R_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Tr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Tr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Tr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const f in c){const m=c[f];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Up extends Jr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=Iv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dn=new q,Fc=new $t;let Gy=0;class Ai{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gy++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=w_,this.updateRanges=[],this.gpuType=Zi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Fc.fromBufferAttribute(this,i),Fc.applyMatrix3(t),this.setXY(i,Fc.x,Fc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Ko(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=jn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ko(i,this.array)),i}setX(t,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ko(i,this.array)),i}setY(t,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ko(i,this.array)),i}setZ(t,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ko(i,this.array)),i}setW(t,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array),l=jn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array),l=jn(l,this.array),c=jn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==w_&&(t.usage=this.usage),t}}class ax extends Ai{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class sx extends Ai{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class on extends Ai{constructor(t,i,s){super(new Float32Array(t),i,s)}}let Vy=0;const Mi=new Je,Kh=new Mn,Pr=new q,oi=new ml,tl=new ml,Sn=new q;class Nn extends Vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vy++}),this.uuid=pl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(tx(t)?sx:ax)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new de().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Mi.makeRotationFromQuaternion(t),this.applyMatrix4(Mi),this}rotateX(t){return Mi.makeRotationX(t),this.applyMatrix4(Mi),this}rotateY(t){return Mi.makeRotationY(t),this.applyMatrix4(Mi),this}rotateZ(t){return Mi.makeRotationZ(t),this.applyMatrix4(Mi),this}translate(t,i,s){return Mi.makeTranslation(t,i,s),this.applyMatrix4(Mi),this}scale(t,i,s){return Mi.makeScale(t,i,s),this.applyMatrix4(Mi),this}lookAt(t){return Kh.lookAt(t),Kh.updateMatrix(),this.applyMatrix4(Kh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new on(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ml);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Re("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];oi.setFromBufferAttribute(c),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Re('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new du);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Re("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){const s=this.boundingSphere.center;if(oi.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const f=i[c];tl.setFromBufferAttribute(f),this.morphTargetsRelative?(Sn.addVectors(oi.min,tl.min),oi.expandByPoint(Sn),Sn.addVectors(oi.max,tl.max),oi.expandByPoint(Sn)):(oi.expandByPoint(tl.min),oi.expandByPoint(tl.max))}oi.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)Sn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Sn));if(i)for(let c=0,h=i.length;c<h;c++){const f=i[c],m=this.morphTargetsRelative;for(let p=0,g=f.count;p<g;p++)Sn.fromBufferAttribute(f,p),m&&(Pr.fromBufferAttribute(t,p),Sn.add(Pr)),l=Math.max(l,s.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Re('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Re("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ai(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),f=[],m=[];for(let Y=0;Y<s.count;Y++)f[Y]=new q,m[Y]=new q;const p=new q,g=new q,v=new q,_=new $t,x=new $t,E=new $t,T=new q,y=new q;function M(Y,R,D){p.fromBufferAttribute(s,Y),g.fromBufferAttribute(s,R),v.fromBufferAttribute(s,D),_.fromBufferAttribute(c,Y),x.fromBufferAttribute(c,R),E.fromBufferAttribute(c,D),g.sub(p),v.sub(p),x.sub(_),E.sub(_);const V=1/(x.x*E.y-E.x*x.y);isFinite(V)&&(T.copy(g).multiplyScalar(E.y).addScaledVector(v,-x.y).multiplyScalar(V),y.copy(v).multiplyScalar(x.x).addScaledVector(g,-E.x).multiplyScalar(V),f[Y].add(T),f[R].add(T),f[D].add(T),m[Y].add(y),m[R].add(y),m[D].add(y))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let Y=0,R=w.length;Y<R;++Y){const D=w[Y],V=D.start,Q=D.count;for(let et=V,tt=V+Q;et<tt;et+=3)M(t.getX(et+0),t.getX(et+1),t.getX(et+2))}const P=new q,U=new q,F=new q,I=new q;function z(Y){F.fromBufferAttribute(l,Y),I.copy(F);const R=f[Y];P.copy(R),P.sub(F.multiplyScalar(F.dot(R))).normalize(),U.crossVectors(I,R);const V=U.dot(m[Y])<0?-1:1;h.setXYZW(Y,P.x,P.y,P.z,V)}for(let Y=0,R=w.length;Y<R;++Y){const D=w[Y],V=D.start,Q=D.count;for(let et=V,tt=V+Q;et<tt;et+=3)z(t.getX(et+0)),z(t.getX(et+1)),z(t.getX(et+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ai(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let _=0,x=s.count;_<x;_++)s.setXYZ(_,0,0,0);const l=new q,c=new q,h=new q,f=new q,m=new q,p=new q,g=new q,v=new q;if(t)for(let _=0,x=t.count;_<x;_+=3){const E=t.getX(_+0),T=t.getX(_+1),y=t.getX(_+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,T),h.fromBufferAttribute(i,y),g.subVectors(h,c),v.subVectors(l,c),g.cross(v),f.fromBufferAttribute(s,E),m.fromBufferAttribute(s,T),p.fromBufferAttribute(s,y),f.add(g),m.add(g),p.add(g),s.setXYZ(E,f.x,f.y,f.z),s.setXYZ(T,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let _=0,x=i.count;_<x;_+=3)l.fromBufferAttribute(i,_+0),c.fromBufferAttribute(i,_+1),h.fromBufferAttribute(i,_+2),g.subVectors(h,c),v.subVectors(l,c),g.cross(v),s.setXYZ(_+0,g.x,g.y,g.z),s.setXYZ(_+1,g.x,g.y,g.z),s.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Sn.fromBufferAttribute(t,i),Sn.normalize(),t.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function t(f,m){const p=f.array,g=f.itemSize,v=f.normalized,_=new p.constructor(m.length*g);let x=0,E=0;for(let T=0,y=m.length;T<y;T++){f.isInterleavedBufferAttribute?x=m[T]*f.data.stride+f.offset:x=m[T]*g;for(let M=0;M<g;M++)_[E++]=p[x++]}return new Ai(_,g,v)}if(this.index===null)return ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Nn,s=this.index.array,l=this.attributes;for(const f in l){const m=l[f],p=t(m,s);i.setAttribute(f,p)}const c=this.morphAttributes;for(const f in c){const m=[],p=c[f];for(let g=0,v=p.length;g<v;g++){const _=p[g],x=t(_,s);m.push(x)}i.morphAttributes[f]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let f=0,m=h.length;f<m;f++){const p=h[f];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,_=p.length;v<_;v++){const x=p[v];g.push(x.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere=f.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],v=c[p];for(let _=0,x=v.length;_<x;_++)g.push(v[_].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const X_=new Je,Ls=new Dp,Ic=new du,W_=new q,Bc=new q,Hc=new q,Gc=new q,Qh=new q,Vc=new q,q_=new q,kc=new q;class Gi extends Mn{constructor(t=new Nn,i=new Up){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const f=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const f=this.morphTargetInfluences;if(c&&f){Vc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=f[m],v=c[m];g!==0&&(Qh.fromBufferAttribute(v,t),h?Vc.addScaledVector(Qh,g):Vc.addScaledVector(Qh.sub(i),g))}i.add(Vc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Ic.copy(s.boundingSphere),Ic.applyMatrix4(c),Ls.copy(t.ray).recast(t.near),!(Ic.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(Ic,W_)===null||Ls.origin.distanceToSquared(W_)>(t.far-t.near)**2))&&(X_.copy(c).invert(),Ls.copy(t.ray).applyMatrix4(X_),!(s.boundingBox!==null&&Ls.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Ls)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,f=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,_=c.groups,x=c.drawRange;if(f!==null)if(Array.isArray(h))for(let E=0,T=_.length;E<T;E++){const y=_[E],M=h[y.materialIndex],w=Math.max(y.start,x.start),P=Math.min(f.count,Math.min(y.start+y.count,x.start+x.count));for(let U=w,F=P;U<F;U+=3){const I=f.getX(U),z=f.getX(U+1),Y=f.getX(U+2);l=Xc(this,M,t,s,p,g,v,I,z,Y),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,x.start),T=Math.min(f.count,x.start+x.count);for(let y=E,M=T;y<M;y+=3){const w=f.getX(y),P=f.getX(y+1),U=f.getX(y+2);l=Xc(this,h,t,s,p,g,v,w,P,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,T=_.length;E<T;E++){const y=_[E],M=h[y.materialIndex],w=Math.max(y.start,x.start),P=Math.min(m.count,Math.min(y.start+y.count,x.start+x.count));for(let U=w,F=P;U<F;U+=3){const I=U,z=U+1,Y=U+2;l=Xc(this,M,t,s,p,g,v,I,z,Y),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,x.start),T=Math.min(m.count,x.start+x.count);for(let y=E,M=T;y<M;y+=3){const w=y,P=y+1,U=y+2;l=Xc(this,h,t,s,p,g,v,w,P,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function ky(r,t,i,s,l,c,h,f){let m;if(t.side===Jn?m=s.intersectTriangle(h,c,l,!0,f):m=s.intersectTriangle(l,c,h,t.side===us,f),m===null)return null;kc.copy(f),kc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(kc);return p<i.near||p>i.far?null:{distance:p,point:kc.clone(),object:r}}function Xc(r,t,i,s,l,c,h,f,m,p){r.getVertexPosition(f,Bc),r.getVertexPosition(m,Hc),r.getVertexPosition(p,Gc);const g=ky(r,t,i,s,Bc,Hc,Gc,q_);if(g){const v=new q;bi.getBarycoord(q_,Bc,Hc,Gc,v),l&&(g.uv=bi.getInterpolatedAttribute(l,f,m,p,v,new $t)),c&&(g.uv1=bi.getInterpolatedAttribute(c,f,m,p,v,new $t)),h&&(g.normal=bi.getInterpolatedAttribute(h,f,m,p,v,new q),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const _={a:f,b:m,c:p,normal:new q,materialIndex:0};bi.getNormal(Bc,Hc,Gc,_.normal),g.face=_,g.barycoord=v}return g}class $r extends Nn{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const f=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],g=[],v=[];let _=0,x=0;E("z","y","x",-1,-1,s,i,t,h,c,0),E("z","y","x",1,-1,s,i,-t,h,c,1),E("x","z","y",1,1,t,s,i,l,h,2),E("x","z","y",1,-1,t,s,-i,l,h,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new on(p,3)),this.setAttribute("normal",new on(g,3)),this.setAttribute("uv",new on(v,2));function E(T,y,M,w,P,U,F,I,z,Y,R){const D=U/z,V=F/Y,Q=U/2,et=F/2,tt=I/2,G=z+1,L=Y+1;let B=0,$=0;const xt=new q;for(let vt=0;vt<L;vt++){const N=vt*V-et;for(let at=0;at<G;at++){const gt=at*D-Q;xt[T]=gt*w,xt[y]=N*P,xt[M]=tt,p.push(xt.x,xt.y,xt.z),xt[T]=0,xt[y]=0,xt[M]=I>0?1:-1,g.push(xt.x,xt.y,xt.z),v.push(at/z),v.push(1-vt/Y),B+=1}}for(let vt=0;vt<Y;vt++)for(let N=0;N<z;N++){const at=_+N+G*vt,gt=_+N+G*(vt+1),At=_+(N+1)+G*(vt+1),Bt=_+(N+1)+G*vt;m.push(at,gt,Bt),m.push(gt,At,Bt),$+=6}f.addGroup(x,$,R),x+=$,_+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Qr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Hn(r){const t={};for(let i=0;i<r.length;i++){const s=Qr(r[i]);for(const l in s)t[l]=s[l]}return t}function Xy(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function rx(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Te.workingColorSpace}const cp={clone:Qr,merge:Hn};var Wy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qn extends Jr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wy,this.fragmentShader=qy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qr(t.uniforms),this.uniformsGroups=Xy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class ox extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=Ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const rs=new q,Y_=new $t,j_=new $t;class Ei extends ox{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=lp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(au*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return lp*2*Math.atan(Math.tan(au*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rs.x,rs.y).multiplyScalar(-t/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(rs.x,rs.y).multiplyScalar(-t/rs.z)}getViewSize(t,i){return this.getViewBounds(t,Y_,j_),i.subVectors(j_,Y_)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(au*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const f=this.filmOffset;f!==0&&(c+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const zr=-90,Fr=1;class Yy extends Mn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ei(zr,Fr,t,i);l.layers=this.layers,this.add(l);const c=new Ei(zr,Fr,t,i);c.layers=this.layers,this.add(c);const h=new Ei(zr,Fr,t,i);h.layers=this.layers,this.add(h);const f=new Ei(zr,Fr,t,i);f.layers=this.layers,this.add(f);const m=new Ei(zr,Fr,t,i);m.layers=this.layers,this.add(m);const p=new Ei(zr,Fr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,f,m]=i;for(const p of i)this.remove(p);if(t===Ki)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===lu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,f,m,p,g]=this.children,v=t.getRenderTarget(),_=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,f),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=T,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(v,_,x),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class lx extends Gn{constructor(t=[],i=Hs,s,l,c,h,f,m,p,g){super(t,i,s,l,c,h,f,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class cx extends ui{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new lx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new $r(5,5,5),c=new Qn({name:"CubemapFromEquirect",uniforms:Qr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Jn,blending:Aa});c.uniforms.tEquirect.value=i;const h=new Gi(l,c),f=i.minFilter;return i.minFilter===Is&&(i.minFilter=In),new Yy(1,10,this).update(t,h),i.minFilter=f,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}class ls extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jy={type:"move"};class Jh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ls,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ls,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ls,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const f=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const T of t.hand.values()){const y=i.getJointPose(T,s),M=this._getHandJoint(p,T);y!==null&&(M.matrix.fromArray(y.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=y.radius),M.visible=y!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],_=g.position.distanceTo(v.position),x=.02,E=.005;p.inputState.pinching&&_>x+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&_<=x-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));f!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(jy)))}return f!==null&&(f.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new ls;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class Lp{constructor(t,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new ue(t),this.near=i,this.far=s}clone(){return new Lp(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}let Zy=class extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $i,this.environmentIntensity=1,this.environmentRotation=new $i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}};class Ky extends Gn{constructor(t=null,i=1,s=1,l,c,h,f,m,p=Ln,g=Ln,v,_){super(null,h,f,m,p,g,l,c,v,_),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $h=new q,Qy=new q,Jy=new de;class ba{constructor(t=new q(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=$h.subVectors(s,i).cross(Qy.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta($h),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||Jy.getNormalMatrix(t),l=this.coplanarPoint($h).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ns=new du,$y=new $t(.5,.5),Wc=new q;class Np{constructor(t=new ba,i=new ba,s=new ba,l=new ba,c=new ba,h=new ba){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const f=this.planes;return f[0].copy(t),f[1].copy(i),f[2].copy(s),f[3].copy(l),f[4].copy(c),f[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Ki,s=!1){const l=this.planes,c=t.elements,h=c[0],f=c[1],m=c[2],p=c[3],g=c[4],v=c[5],_=c[6],x=c[7],E=c[8],T=c[9],y=c[10],M=c[11],w=c[12],P=c[13],U=c[14],F=c[15];if(l[0].setComponents(p-h,x-g,M-E,F-w).normalize(),l[1].setComponents(p+h,x+g,M+E,F+w).normalize(),l[2].setComponents(p+f,x+v,M+T,F+P).normalize(),l[3].setComponents(p-f,x-v,M-T,F-P).normalize(),s)l[4].setComponents(m,_,y,U).normalize(),l[5].setComponents(p-m,x-_,M-y,F-U).normalize();else if(l[4].setComponents(p-m,x-_,M-y,F-U).normalize(),i===Ki)l[5].setComponents(p+m,x+_,M+y,F+U).normalize();else if(i===lu)l[5].setComponents(m,_,y,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ns.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ns.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ns)}intersectsSprite(t){Ns.center.set(0,0,0);const i=$y.distanceTo(t.center);return Ns.radius=.7071067811865476+i,Ns.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ns)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Wc.x=l.normal.x>0?t.max.x:t.min.x,Wc.y=l.normal.y>0?t.max.y:t.min.y,Wc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Wc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ux extends Jr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const uu=new q,fu=new q,Z_=new Je,el=new Dp,qc=new du,td=new q,K_=new q;class tE extends Mn{constructor(t=new Nn,i=new ux){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)uu.fromBufferAttribute(i,l-1),fu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=uu.distanceTo(fu);t.setAttribute("lineDistance",new on(s,1))}else ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),qc.copy(s.boundingSphere),qc.applyMatrix4(l),qc.radius+=c,t.ray.intersectsSphere(qc)===!1)return;Z_.copy(l).invert(),el.copy(t.ray).applyMatrix4(Z_);const f=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=f*f,p=this.isLineSegments?2:1,g=s.index,_=s.attributes.position;if(g!==null){const x=Math.max(0,h.start),E=Math.min(g.count,h.start+h.count);for(let T=x,y=E-1;T<y;T+=p){const M=g.getX(T),w=g.getX(T+1),P=Yc(this,t,el,m,M,w,T);P&&i.push(P)}if(this.isLineLoop){const T=g.getX(E-1),y=g.getX(x),M=Yc(this,t,el,m,T,y,E-1);M&&i.push(M)}}else{const x=Math.max(0,h.start),E=Math.min(_.count,h.start+h.count);for(let T=x,y=E-1;T<y;T+=p){const M=Yc(this,t,el,m,T,T+1,T);M&&i.push(M)}if(this.isLineLoop){const T=Yc(this,t,el,m,E-1,x,E-1);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const f=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}}function Yc(r,t,i,s,l,c,h){const f=r.geometry.attributes.position;if(uu.fromBufferAttribute(f,l),fu.fromBufferAttribute(f,c),i.distanceSqToSegment(uu,fu,td,K_)>s)return;td.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(td);if(!(p<t.near||p>t.far))return{distance:p,point:K_.clone().applyMatrix4(r.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:r}}const Q_=new q,J_=new q;class eE extends tE{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)Q_.fromBufferAttribute(i,l),J_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+Q_.distanceTo(J_);t.setAttribute("lineDistance",new on(s,1))}else ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class fl extends Gn{constructor(t,i,s=Ji,l,c,h,f=Ln,m=Ln,p,g=Ra,v=1){if(g!==Ra&&g!==Bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:i,depth:v};super(_,l,c,h,f,m,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new wp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class nE extends fl{constructor(t,i=Ji,s=Hs,l,c,h=Ln,f=Ln,m,p=Ra){const g={width:t,height:t,depth:1},v=[g,g,g,g,g,g];super(t,t,i,s,l,c,h,f,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class fx extends Gn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class pu extends Nn{constructor(t=1,i=1,s=1,l=32,c=1,h=!1,f=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:f,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const g=[],v=[],_=[],x=[];let E=0;const T=[],y=s/2;let M=0;w(),h===!1&&(t>0&&P(!0),i>0&&P(!1)),this.setIndex(g),this.setAttribute("position",new on(v,3)),this.setAttribute("normal",new on(_,3)),this.setAttribute("uv",new on(x,2));function w(){const U=new q,F=new q;let I=0;const z=(i-t)/s;for(let Y=0;Y<=c;Y++){const R=[],D=Y/c,V=D*(i-t)+t;for(let Q=0;Q<=l;Q++){const et=Q/l,tt=et*m+f,G=Math.sin(tt),L=Math.cos(tt);F.x=V*G,F.y=-D*s+y,F.z=V*L,v.push(F.x,F.y,F.z),U.set(G,z,L).normalize(),_.push(U.x,U.y,U.z),x.push(et,1-D),R.push(E++)}T.push(R)}for(let Y=0;Y<l;Y++)for(let R=0;R<c;R++){const D=T[R][Y],V=T[R+1][Y],Q=T[R+1][Y+1],et=T[R][Y+1];(t>0||R!==0)&&(g.push(D,V,et),I+=3),(i>0||R!==c-1)&&(g.push(V,Q,et),I+=3)}p.addGroup(M,I,0),M+=I}function P(U){const F=E,I=new $t,z=new q;let Y=0;const R=U===!0?t:i,D=U===!0?1:-1;for(let Q=1;Q<=l;Q++)v.push(0,y*D,0),_.push(0,D,0),x.push(.5,.5),E++;const V=E;for(let Q=0;Q<=l;Q++){const tt=Q/l*m+f,G=Math.cos(tt),L=Math.sin(tt);z.x=R*L,z.y=y*D,z.z=R*G,v.push(z.x,z.y,z.z),_.push(0,D,0),I.x=G*.5+.5,I.y=L*.5*D+.5,x.push(I.x,I.y),E++}for(let Q=0;Q<l;Q++){const et=F+Q,tt=V+Q;U===!0?g.push(tt,tt+1,et):g.push(tt+1,tt,et),Y+=3}p.addGroup(M,Y,U===!0?1:2),M+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pu(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Op extends pu{constructor(t=1,i=1,s=32,l=1,c=!1,h=0,f=Math.PI*2){super(0,t,i,s,l,c,h,f),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:s,heightSegments:l,openEnded:c,thetaStart:h,thetaLength:f}}static fromJSON(t){return new Op(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class gl extends Nn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,f=Math.floor(s),m=Math.floor(l),p=f+1,g=m+1,v=t/f,_=i/m,x=[],E=[],T=[],y=[];for(let M=0;M<g;M++){const w=M*_-h;for(let P=0;P<p;P++){const U=P*v-c;E.push(U,-w,0),T.push(0,0,1),y.push(P/f),y.push(1-M/m)}}for(let M=0;M<m;M++)for(let w=0;w<f;w++){const P=w+p*M,U=w+p*(M+1),F=w+1+p*(M+1),I=w+1+p*M;x.push(P,U,I),x.push(U,F,I)}this.setIndex(x),this.setAttribute("position",new on(E,3)),this.setAttribute("normal",new on(T,3)),this.setAttribute("uv",new on(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gl(t.width,t.height,t.widthSegments,t.heightSegments)}}class iE extends Qn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class hx extends Jr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$v,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class aE extends hx{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $t(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return oe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class sE extends Jr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=my,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class rE extends Jr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class dx extends Mn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ue(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class px extends dx{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ue(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}toJSON(t){const i=super.toJSON(t);return i.object.groundColor=this.groundColor.getHex(),i}}const ed=new Je,$_=new q,tv=new q;class oE{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $t(512,512),this.mapType=ci,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Np,this._frameExtents=new $t(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;$_.setFromMatrixPosition(t.matrixWorld),i.position.copy($_),tv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(tv),i.updateMatrixWorld(),ed.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ed,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(ed)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class mu extends ox{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,f=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,f-=g*this.view.offsetY,m=f-g*this.view.height}this.projectionMatrix.makeOrthographic(c,h,f,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class lE extends oE{constructor(){super(new mu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class up extends dx{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.shadow=new lE}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class cE extends Ei{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class ev{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=oe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(oe(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const nv=new q,jc=new q,Ir=new q,Br=new q,nd=new q,uE=new q,fE=new q;class hE{constructor(t=new q,i=new q){this.start=t,this.end=i}set(t,i){return this.start.copy(t),this.end.copy(i),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,i){return this.delta(i).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,i){nv.subVectors(t,this.start),jc.subVectors(this.end,this.start);const s=jc.dot(jc);let c=jc.dot(nv)/s;return i&&(c=oe(c,0,1)),c}closestPointToPoint(t,i,s){const l=this.closestPointToPointParameter(t,i);return this.delta(s).multiplyScalar(l).add(this.start)}distanceSqToLine3(t,i=uE,s=fE){const l=10000000000000001e-32;let c,h;const f=this.start,m=t.start,p=this.end,g=t.end;Ir.subVectors(p,f),Br.subVectors(g,m),nd.subVectors(f,m);const v=Ir.dot(Ir),_=Br.dot(Br),x=Br.dot(nd);if(v<=l&&_<=l)return i.copy(f),s.copy(m),i.sub(s),i.dot(i);if(v<=l)c=0,h=x/_,h=oe(h,0,1);else{const E=Ir.dot(nd);if(_<=l)h=0,c=oe(-E/v,0,1);else{const T=Ir.dot(Br),y=v*_-T*T;y!==0?c=oe((T*x-E*_)/y,0,1):c=0,h=(T*c+x)/_,h<0?(h=0,c=oe(-E/v,0,1)):h>1&&(h=1,c=oe((T-E)/v,0,1))}}return i.copy(f).add(Ir.multiplyScalar(c)),s.copy(m).add(Br.multiplyScalar(h)),i.sub(s),i.dot(i)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class dE extends Vs{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){ie("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function iv(r,t,i,s){const l=pE(s);switch(i){case Kv:return r*t;case Jv:return r*t/l.components*l.byteLength;case bp:return r*t/l.components*l.byteLength;case Zr:return r*t*2/l.components*l.byteLength;case Tp:return r*t*2/l.components*l.byteLength;case Qv:return r*t*3/l.components*l.byteLength;case Hi:return r*t*4/l.components*l.byteLength;case Ap:return r*t*4/l.components*l.byteLength;case tu:case eu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case nu:case iu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ud:case Nd:return Math.max(r,16)*Math.max(t,8)/4;case Dd:case Ld:return Math.max(r,8)*Math.max(t,8)/2;case Od:case Pd:case Fd:case Id:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case zd:case Bd:case Hd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Gd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Vd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case kd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Xd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Wd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case qd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Yd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case jd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Zd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Kd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Qd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Jd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case $d:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case tp:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case ep:case np:case ip:return Math.ceil(r/4)*Math.ceil(t/4)*16;case ap:case sp:return Math.ceil(r/4)*Math.ceil(t/4)*8;case rp:case op:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function pE(r){switch(r){case ci:case qv:return{byteLength:1,components:1};case ll:case Yv:case Ti:return{byteLength:2,components:1};case yp:case Ep:return{byteLength:2,components:4};case Ji:case Mp:case Zi:return{byteLength:4,components:1};case jv:case Zv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xp}}));typeof window<"u"&&(window.__THREE__?ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xp);function mx(){let r=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function mE(r){const t=new WeakMap;function i(f,m){const p=f.array,g=f.usage,v=p.byteLength,_=r.createBuffer();r.bindBuffer(m,_),r.bufferData(m,p,g),f.onUploadCallback();let x;if(p instanceof Float32Array)x=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)x=r.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?x=r.HALF_FLOAT:x=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=r.SHORT;else if(p instanceof Uint32Array)x=r.UNSIGNED_INT;else if(p instanceof Int32Array)x=r.INT;else if(p instanceof Int8Array)x=r.BYTE;else if(p instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:v}}function s(f,m,p){const g=m.array,v=m.updateRanges;if(r.bindBuffer(p,f),v.length===0)r.bufferSubData(p,0,g);else{v.sort((x,E)=>x.start-E.start);let _=0;for(let x=1;x<v.length;x++){const E=v[_],T=v[x];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++_,v[_]=T)}v.length=_+1;for(let x=0,E=v.length;x<E;x++){const T=v[x];r.bufferSubData(p,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const m=t.get(f);m&&(r.deleteBuffer(m.buffer),t.delete(f))}function h(f,m){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=t.get(f);(!g||g.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=t.get(f);if(p===void 0)t.set(f,i(f,m));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,f,m),p.version=f.version}}return{get:l,remove:c,update:h}}var gE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_E=`#ifdef USE_ALPHAHASH
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
#endif`,vE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ME=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yE=`#ifdef USE_AOMAP
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
#endif`,EE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bE=`#ifdef USE_BATCHING
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
#endif`,TE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,AE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,CE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,RE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wE=`#ifdef USE_IRIDESCENCE
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
#endif`,DE=`#ifdef USE_BUMPMAP
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
#endif`,UE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,LE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,NE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,OE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,PE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,FE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,IE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,BE=`#define PI 3.141592653589793
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
} // validated`,HE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,GE=`vec3 transformedNormal = objectNormal;
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
#endif`,VE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,XE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,WE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qE="gl_FragColor = linearToOutputTexel( gl_FragColor );",YE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jE=`#ifdef USE_ENVMAP
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
#endif`,ZE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,KE=`#ifdef USE_ENVMAP
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
#endif`,QE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,JE=`#ifdef USE_ENVMAP
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
#endif`,$E=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ib=`#ifdef USE_GRADIENTMAP
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
}`,ab=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ob=`uniform bool receiveShadow;
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
#endif`,lb=`#ifdef USE_ENVMAP
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
#endif`,cb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ub=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,db=`PhysicalMaterial material;
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
#endif`,pb=`uniform sampler2D dfgLUT;
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
}`,mb=`
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
#endif`,gb=`#if defined( RE_IndirectDiffuse )
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
#endif`,_b=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Eb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Tb=`#if defined( USE_POINTS_UV )
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
#endif`,Ab=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Db=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ub=`#ifdef USE_MORPHTARGETS
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
#endif`,Lb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ob=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Pb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ib=`#ifdef USE_NORMALMAP
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
#endif`,Bb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$b=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tT=`float getShadowMask() {
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
}`,eT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nT=`#ifdef USE_SKINNING
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
#endif`,iT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,aT=`#ifdef USE_SKINNING
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
#endif`,sT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,oT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cT=`#ifdef USE_TRANSMISSION
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
#endif`,uT=`#ifdef USE_TRANSMISSION
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
#endif`,fT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gT=`uniform sampler2D t2D;
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
}`,_T=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ST=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MT=`#include <common>
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
}`,yT=`#if DEPTH_PACKING == 3200
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
}`,ET=`#define DISTANCE
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
}`,bT=`#define DISTANCE
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
}`,TT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,AT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CT=`uniform float scale;
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
}`,RT=`uniform vec3 diffuse;
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
}`,wT=`#include <common>
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
}`,DT=`uniform vec3 diffuse;
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
}`,UT=`#define LAMBERT
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
}`,LT=`#define LAMBERT
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
}`,NT=`#define MATCAP
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
}`,OT=`#define MATCAP
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
}`,PT=`#define NORMAL
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
}`,zT=`#define NORMAL
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
}`,FT=`#define PHONG
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
}`,IT=`#define PHONG
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
}`,BT=`#define STANDARD
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
}`,HT=`#define STANDARD
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
}`,GT=`#define TOON
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
}`,VT=`#define TOON
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
}`,kT=`uniform float size;
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
}`,XT=`uniform vec3 diffuse;
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
}`,WT=`#include <common>
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
}`,qT=`uniform vec3 color;
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
}`,YT=`uniform float rotation;
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
}`,jT=`uniform vec3 diffuse;
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
}`,pe={alphahash_fragment:gE,alphahash_pars_fragment:_E,alphamap_fragment:vE,alphamap_pars_fragment:xE,alphatest_fragment:SE,alphatest_pars_fragment:ME,aomap_fragment:yE,aomap_pars_fragment:EE,batching_pars_vertex:bE,batching_vertex:TE,begin_vertex:AE,beginnormal_vertex:CE,bsdfs:RE,iridescence_fragment:wE,bumpmap_pars_fragment:DE,clipping_planes_fragment:UE,clipping_planes_pars_fragment:LE,clipping_planes_pars_vertex:NE,clipping_planes_vertex:OE,color_fragment:PE,color_pars_fragment:zE,color_pars_vertex:FE,color_vertex:IE,common:BE,cube_uv_reflection_fragment:HE,defaultnormal_vertex:GE,displacementmap_pars_vertex:VE,displacementmap_vertex:kE,emissivemap_fragment:XE,emissivemap_pars_fragment:WE,colorspace_fragment:qE,colorspace_pars_fragment:YE,envmap_fragment:jE,envmap_common_pars_fragment:ZE,envmap_pars_fragment:KE,envmap_pars_vertex:QE,envmap_physical_pars_fragment:lb,envmap_vertex:JE,fog_vertex:$E,fog_pars_vertex:tb,fog_fragment:eb,fog_pars_fragment:nb,gradientmap_pars_fragment:ib,lightmap_pars_fragment:ab,lights_lambert_fragment:sb,lights_lambert_pars_fragment:rb,lights_pars_begin:ob,lights_toon_fragment:cb,lights_toon_pars_fragment:ub,lights_phong_fragment:fb,lights_phong_pars_fragment:hb,lights_physical_fragment:db,lights_physical_pars_fragment:pb,lights_fragment_begin:mb,lights_fragment_maps:gb,lights_fragment_end:_b,logdepthbuf_fragment:vb,logdepthbuf_pars_fragment:xb,logdepthbuf_pars_vertex:Sb,logdepthbuf_vertex:Mb,map_fragment:yb,map_pars_fragment:Eb,map_particle_fragment:bb,map_particle_pars_fragment:Tb,metalnessmap_fragment:Ab,metalnessmap_pars_fragment:Cb,morphinstance_vertex:Rb,morphcolor_vertex:wb,morphnormal_vertex:Db,morphtarget_pars_vertex:Ub,morphtarget_vertex:Lb,normal_fragment_begin:Nb,normal_fragment_maps:Ob,normal_pars_fragment:Pb,normal_pars_vertex:zb,normal_vertex:Fb,normalmap_pars_fragment:Ib,clearcoat_normal_fragment_begin:Bb,clearcoat_normal_fragment_maps:Hb,clearcoat_pars_fragment:Gb,iridescence_pars_fragment:Vb,opaque_fragment:kb,packing:Xb,premultiplied_alpha_fragment:Wb,project_vertex:qb,dithering_fragment:Yb,dithering_pars_fragment:jb,roughnessmap_fragment:Zb,roughnessmap_pars_fragment:Kb,shadowmap_pars_fragment:Qb,shadowmap_pars_vertex:Jb,shadowmap_vertex:$b,shadowmask_pars_fragment:tT,skinbase_vertex:eT,skinning_pars_vertex:nT,skinning_vertex:iT,skinnormal_vertex:aT,specularmap_fragment:sT,specularmap_pars_fragment:rT,tonemapping_fragment:oT,tonemapping_pars_fragment:lT,transmission_fragment:cT,transmission_pars_fragment:uT,uv_pars_fragment:fT,uv_pars_vertex:hT,uv_vertex:dT,worldpos_vertex:pT,background_vert:mT,background_frag:gT,backgroundCube_vert:_T,backgroundCube_frag:vT,cube_vert:xT,cube_frag:ST,depth_vert:MT,depth_frag:yT,distance_vert:ET,distance_frag:bT,equirect_vert:TT,equirect_frag:AT,linedashed_vert:CT,linedashed_frag:RT,meshbasic_vert:wT,meshbasic_frag:DT,meshlambert_vert:UT,meshlambert_frag:LT,meshmatcap_vert:NT,meshmatcap_frag:OT,meshnormal_vert:PT,meshnormal_frag:zT,meshphong_vert:FT,meshphong_frag:IT,meshphysical_vert:BT,meshphysical_frag:HT,meshtoon_vert:GT,meshtoon_frag:VT,points_vert:kT,points_frag:XT,shadow_vert:WT,shadow_frag:qT,sprite_vert:YT,sprite_frag:jT},Ot={common:{diffuse:{value:new ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new ue(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},ji={basic:{uniforms:Hn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:Hn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new ue(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:Hn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new ue(0)},specular:{value:new ue(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:Hn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:Hn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new ue(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:Hn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:Hn([Ot.points,Ot.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:Hn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:Hn([Ot.common,Ot.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:Hn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:Hn([Ot.sprite,Ot.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distance:{uniforms:Hn([Ot.common,Ot.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distance_vert,fragmentShader:pe.distance_frag},shadow:{uniforms:Hn([Ot.lights,Ot.fog,{color:{value:new ue(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};ji.physical={uniforms:Hn([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new ue(0)},specularColor:{value:new ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const Zc={r:0,b:0,g:0},Os=new $i,ZT=new Je;function KT(r,t,i,s,l,c,h){const f=new ue(0);let m=c===!0?0:1,p,g,v=null,_=0,x=null;function E(P){let U=P.isScene===!0?P.background:null;return U&&U.isTexture&&(U=(P.backgroundBlurriness>0?i:t).get(U)),U}function T(P){let U=!1;const F=E(P);F===null?M(f,m):F&&F.isColor&&(M(F,1),U=!0);const I=r.xr.getEnvironmentBlendMode();I==="additive"?s.buffers.color.setClear(0,0,0,1,h):I==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||U)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(P,U){const F=E(U);F&&(F.isCubeTexture||F.mapping===hu)?(g===void 0&&(g=new Gi(new $r(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:Qr(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(I,z,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Os.copy(U.backgroundRotation),Os.x*=-1,Os.y*=-1,Os.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Os.y*=-1,Os.z*=-1),g.material.uniforms.envMap.value=F,g.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(ZT.makeRotationFromEuler(Os)),g.material.toneMapped=Te.getTransfer(F.colorSpace)!==Be,(v!==F||_!==F.version||x!==r.toneMapping)&&(g.material.needsUpdate=!0,v=F,_=F.version,x=r.toneMapping),g.layers.enableAll(),P.unshift(g,g.geometry,g.material,0,0,null)):F&&F.isTexture&&(p===void 0&&(p=new Gi(new gl(2,2),new Qn({name:"BackgroundMaterial",uniforms:Qr(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:us,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=F,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=Te.getTransfer(F.colorSpace)!==Be,F.matrixAutoUpdate===!0&&F.updateMatrix(),p.material.uniforms.uvTransform.value.copy(F.matrix),(v!==F||_!==F.version||x!==r.toneMapping)&&(p.material.needsUpdate=!0,v=F,_=F.version,x=r.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function M(P,U){P.getRGB(Zc,rx(r)),s.buffers.color.setClear(Zc.r,Zc.g,Zc.b,U,h)}function w(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(P,U=1){f.set(P),m=U,M(f,m)},getClearAlpha:function(){return m},setClearAlpha:function(P){m=P,M(f,m)},render:T,addToRenderList:y,dispose:w}}function QT(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=_(null);let c=l,h=!1;function f(D,V,Q,et,tt){let G=!1;const L=v(et,Q,V);c!==L&&(c=L,p(c.object)),G=x(D,et,Q,tt),G&&E(D,et,Q,tt),tt!==null&&t.update(tt,r.ELEMENT_ARRAY_BUFFER),(G||h)&&(h=!1,U(D,V,Q,et),tt!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(tt).buffer))}function m(){return r.createVertexArray()}function p(D){return r.bindVertexArray(D)}function g(D){return r.deleteVertexArray(D)}function v(D,V,Q){const et=Q.wireframe===!0;let tt=s[D.id];tt===void 0&&(tt={},s[D.id]=tt);let G=tt[V.id];G===void 0&&(G={},tt[V.id]=G);let L=G[et];return L===void 0&&(L=_(m()),G[et]=L),L}function _(D){const V=[],Q=[],et=[];for(let tt=0;tt<i;tt++)V[tt]=0,Q[tt]=0,et[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:Q,attributeDivisors:et,object:D,attributes:{},index:null}}function x(D,V,Q,et){const tt=c.attributes,G=V.attributes;let L=0;const B=Q.getAttributes();for(const $ in B)if(B[$].location>=0){const vt=tt[$];let N=G[$];if(N===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(N=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(N=D.instanceColor)),vt===void 0||vt.attribute!==N||N&&vt.data!==N.data)return!0;L++}return c.attributesNum!==L||c.index!==et}function E(D,V,Q,et){const tt={},G=V.attributes;let L=0;const B=Q.getAttributes();for(const $ in B)if(B[$].location>=0){let vt=G[$];vt===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(vt=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(vt=D.instanceColor));const N={};N.attribute=vt,vt&&vt.data&&(N.data=vt.data),tt[$]=N,L++}c.attributes=tt,c.attributesNum=L,c.index=et}function T(){const D=c.newAttributes;for(let V=0,Q=D.length;V<Q;V++)D[V]=0}function y(D){M(D,0)}function M(D,V){const Q=c.newAttributes,et=c.enabledAttributes,tt=c.attributeDivisors;Q[D]=1,et[D]===0&&(r.enableVertexAttribArray(D),et[D]=1),tt[D]!==V&&(r.vertexAttribDivisor(D,V),tt[D]=V)}function w(){const D=c.newAttributes,V=c.enabledAttributes;for(let Q=0,et=V.length;Q<et;Q++)V[Q]!==D[Q]&&(r.disableVertexAttribArray(Q),V[Q]=0)}function P(D,V,Q,et,tt,G,L){L===!0?r.vertexAttribIPointer(D,V,Q,tt,G):r.vertexAttribPointer(D,V,Q,et,tt,G)}function U(D,V,Q,et){T();const tt=et.attributes,G=Q.getAttributes(),L=V.defaultAttributeValues;for(const B in G){const $=G[B];if($.location>=0){let xt=tt[B];if(xt===void 0&&(B==="instanceMatrix"&&D.instanceMatrix&&(xt=D.instanceMatrix),B==="instanceColor"&&D.instanceColor&&(xt=D.instanceColor)),xt!==void 0){const vt=xt.normalized,N=xt.itemSize,at=t.get(xt);if(at===void 0)continue;const gt=at.buffer,At=at.type,Bt=at.bytesPerElement,ot=At===r.INT||At===r.UNSIGNED_INT||xt.gpuType===Mp;if(xt.isInterleavedBufferAttribute){const ft=xt.data,Dt=ft.stride,kt=xt.offset;if(ft.isInstancedInterleavedBuffer){for(let Ht=0;Ht<$.locationSize;Ht++)M($.location+Ht,ft.meshPerAttribute);D.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Ht=0;Ht<$.locationSize;Ht++)y($.location+Ht);r.bindBuffer(r.ARRAY_BUFFER,gt);for(let Ht=0;Ht<$.locationSize;Ht++)P($.location+Ht,N/$.locationSize,At,vt,Dt*Bt,(kt+N/$.locationSize*Ht)*Bt,ot)}else{if(xt.isInstancedBufferAttribute){for(let ft=0;ft<$.locationSize;ft++)M($.location+ft,xt.meshPerAttribute);D.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let ft=0;ft<$.locationSize;ft++)y($.location+ft);r.bindBuffer(r.ARRAY_BUFFER,gt);for(let ft=0;ft<$.locationSize;ft++)P($.location+ft,N/$.locationSize,At,vt,N*Bt,N/$.locationSize*ft*Bt,ot)}}else if(L!==void 0){const vt=L[B];if(vt!==void 0)switch(vt.length){case 2:r.vertexAttrib2fv($.location,vt);break;case 3:r.vertexAttrib3fv($.location,vt);break;case 4:r.vertexAttrib4fv($.location,vt);break;default:r.vertexAttrib1fv($.location,vt)}}}}w()}function F(){Y();for(const D in s){const V=s[D];for(const Q in V){const et=V[Q];for(const tt in et)g(et[tt].object),delete et[tt];delete V[Q]}delete s[D]}}function I(D){if(s[D.id]===void 0)return;const V=s[D.id];for(const Q in V){const et=V[Q];for(const tt in et)g(et[tt].object),delete et[tt];delete V[Q]}delete s[D.id]}function z(D){for(const V in s){const Q=s[V];if(Q[D.id]===void 0)continue;const et=Q[D.id];for(const tt in et)g(et[tt].object),delete et[tt];delete Q[D.id]}}function Y(){R(),h=!0,c!==l&&(c=l,p(c.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:Y,resetDefaultState:R,dispose:F,releaseStatesOfGeometry:I,releaseStatesOfProgram:z,initAttributes:T,enableAttribute:y,disableUnusedAttributes:w}}function JT(r,t,i){let s;function l(p){s=p}function c(p,g){r.drawArrays(s,p,g),i.update(g,s,1)}function h(p,g,v){v!==0&&(r.drawArraysInstanced(s,p,g,v),i.update(g,s,v))}function f(p,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,v);let x=0;for(let E=0;E<v;E++)x+=g[E];i.update(x,s,1)}function m(p,g,v,_){if(v===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let E=0;E<p.length;E++)h(p[E],g[E],_[E]);else{x.multiDrawArraysInstancedWEBGL(s,p,0,g,0,_,0,v);let E=0;for(let T=0;T<v;T++)E+=g[T]*_[T];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=f,this.renderMultiDrawInstances=m}function $T(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(z){return!(z!==Hi&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(z){const Y=z===Ti&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==ci&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Zi&&!Y)}function m(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(ie("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),x=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),M=r.getParameter(r.MAX_VERTEX_ATTRIBS),w=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),P=r.getParameter(r.MAX_VARYING_VECTORS),U=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),F=r.getParameter(r.MAX_SAMPLES),I=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:x,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:y,maxAttributes:M,maxVertexUniforms:w,maxVaryings:P,maxFragmentUniforms:U,maxSamples:F,samples:I}}function t1(r){const t=this;let i=null,s=0,l=!1,c=!1;const h=new ba,f=new de,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const x=v.length!==0||_||s!==0||l;return l=_,s=v.length,x},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,_){i=g(v,_,0)},this.setState=function(v,_,x){const E=v.clippingPlanes,T=v.clipIntersection,y=v.clipShadows,M=r.get(v);if(!l||E===null||E.length===0||c&&!y)c?g(null):p();else{const w=c?0:s,P=w*4;let U=M.clippingState||null;m.value=U,U=g(E,_,P,x);for(let F=0;F!==P;++F)U[F]=i[F];M.clippingState=U,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=w}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(v,_,x,E){const T=v!==null?v.length:0;let y=null;if(T!==0){if(y=m.value,E!==!0||y===null){const M=x+T*4,w=_.matrixWorldInverse;f.getNormalMatrix(w),(y===null||y.length<M)&&(y=new Float32Array(M));for(let P=0,U=x;P!==T;++P,U+=4)h.copy(v[P]).applyMatrix4(w,f),h.normal.toArray(y,U),y[U+3]=h.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,y}}function e1(r){let t=new WeakMap;function i(h,f){return f===Ad?h.mapping=Hs:f===Cd&&(h.mapping=jr),h}function s(h){if(h&&h.isTexture){const f=h.mapping;if(f===Ad||f===Cd)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new cx(m.height);return p.fromEquirectangularTexture(r,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const f=h.target;f.removeEventListener("dispose",l);const m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const cs=4,av=[.125,.215,.35,.446,.526,.582],Fs=20,n1=256,nl=new mu,sv=new ue;let id=null,ad=0,sd=0,rd=!1;const i1=new q;class rv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:f=i1}=c;id=this._renderer.getRenderTarget(),ad=this._renderer.getActiveCubeFace(),sd=this._renderer.getActiveMipmapLevel(),rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,f),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(id,ad,sd),this._renderer.xr.enabled=rd,t.scissorTest=!1,Hr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Hs||t.mapping===jr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),id=this._renderer.getRenderTarget(),ad=this._renderer.getActiveCubeFace(),sd=this._renderer.getActiveMipmapLevel(),rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:In,minFilter:In,generateMipmaps:!1,type:Ti,format:Hi,colorSpace:Kr,depthBuffer:!1},l=ov(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ov(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=a1(c)),this._blurMaterial=r1(c,t,i),this._ggxMaterial=s1(c,t,i)}return l}_compileMaterial(t){const i=new Gi(new Nn,t);this._renderer.compile(i,nl)}_sceneToCubeUV(t,i,s,l,c){const m=new Ei(90,1,i,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,x=v.toneMapping;v.getClearColor(sv),v.toneMapping=Qi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Gi(new $r,new Up({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,y=T.material;let M=!1;const w=t.background;w?w.isColor&&(y.color.copy(w),t.background=null,M=!0):(y.color.copy(sv),M=!0);for(let P=0;P<6;P++){const U=P%3;U===0?(m.up.set(0,p[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[P],c.y,c.z)):U===1?(m.up.set(0,0,p[P]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[P],c.z)):(m.up.set(0,p[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[P]));const F=this._cubeSize;Hr(l,U*F,P>2?F:0,F,F),v.setRenderTarget(l),M&&v.render(T,m),v.render(t,m)}v.toneMapping=x,v.autoClear=_,t.background=w}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Hs||t.mapping===jr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=cv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lv());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const f=c.uniforms;f.envMap.value=t;const m=this._cubeSize;Hr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,nl)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,f=this._lodMeshes[s];f.material=h;const m=h.uniforms,p=s/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),v=Math.sqrt(p*p-g*g),_=0+p*1.25,x=v*_,{_lodMax:E}=this,T=this._sizeLods[s],y=3*T*(s>E-cs?s-E+cs:0),M=4*(this._cubeSize-T);m.envMap.value=t.texture,m.roughness.value=x,m.mipInt.value=E-i,Hr(c,y,M,3*T,2*T),l.setRenderTarget(c),l.render(f,nl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,Hr(t,y,M,3*T,2*T),l.setRenderTarget(t),l.render(f,nl)}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,f){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Re("blur direction must be either latitudinal or longitudinal!");const g=3,v=this._lodMeshes[l];v.material=p;const _=p.uniforms,x=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*Fs-1),T=c/E,y=isFinite(c)?1+Math.floor(g*T):Fs;y>Fs&&ie(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Fs}`);const M=[];let w=0;for(let z=0;z<Fs;++z){const Y=z/T,R=Math.exp(-Y*Y/2);M.push(R),z===0?w+=R:z<y&&(w+=2*R)}for(let z=0;z<M.length;z++)M[z]=M[z]/w;_.envMap.value=t.texture,_.samples.value=y,_.weights.value=M,_.latitudinal.value=h==="latitudinal",f&&(_.poleAxis.value=f);const{_lodMax:P}=this;_.dTheta.value=E,_.mipInt.value=P-s;const U=this._sizeLods[l],F=3*U*(l>P-cs?l-P+cs:0),I=4*(this._cubeSize-U);Hr(i,F,I,3*U,2*U),m.setRenderTarget(i),m.render(v,nl)}}function a1(r){const t=[],i=[],s=[];let l=r;const c=r-cs+1+av.length;for(let h=0;h<c;h++){const f=Math.pow(2,l);t.push(f);let m=1/f;h>r-cs?m=av[h-r+cs-1]:h===0&&(m=0),i.push(m);const p=1/(f-2),g=-p,v=1+p,_=[g,g,v,g,v,v,g,g,v,v,g,v],x=6,E=6,T=3,y=2,M=1,w=new Float32Array(T*E*x),P=new Float32Array(y*E*x),U=new Float32Array(M*E*x);for(let I=0;I<x;I++){const z=I%3*2/3-1,Y=I>2?0:-1,R=[z,Y,0,z+2/3,Y,0,z+2/3,Y+1,0,z,Y,0,z+2/3,Y+1,0,z,Y+1,0];w.set(R,T*E*I),P.set(_,y*E*I);const D=[I,I,I,I,I,I];U.set(D,M*E*I)}const F=new Nn;F.setAttribute("position",new Ai(w,T)),F.setAttribute("uv",new Ai(P,y)),F.setAttribute("faceIndex",new Ai(U,M)),s.push(new Gi(F,null)),l>cs&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function ov(r,t,i){const s=new ui(r,t,i);return s.texture.mapping=hu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Hr(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function s1(r,t,i){return new Qn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:n1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gu(),fragmentShader:`

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
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function r1(r,t,i){const s=new Float32Array(Fs),l=new q(0,1,0);return new Qn({name:"SphericalGaussianBlur",defines:{n:Fs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:gu(),fragmentShader:`

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
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function lv(){return new Qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gu(),fragmentShader:`

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
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function cv(){return new Qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function gu(){return`

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
	`}function o1(r){let t=new WeakMap,i=null;function s(f){if(f&&f.isTexture){const m=f.mapping,p=m===Ad||m===Cd,g=m===Hs||m===jr;if(p||g){let v=t.get(f);const _=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==_)return i===null&&(i=new rv(r)),v=p?i.fromEquirectangular(f,v):i.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,t.set(f,v),v.texture;if(v!==void 0)return v.texture;{const x=f.image;return p&&x&&x.height>0||g&&x&&l(x)?(i===null&&(i=new rv(r)),v=p?i.fromEquirectangular(f):i.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,t.set(f,v),f.addEventListener("dispose",c),v.texture):null}}}return f}function l(f){let m=0;const p=6;for(let g=0;g<p;g++)f[g]!==void 0&&m++;return m===p}function c(f){const m=f.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function l1(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&ul("WebGLRenderer: "+s+" extension not supported."),l}}}function c1(r,t,i,s){const l={},c=new WeakMap;function h(v){const _=v.target;_.index!==null&&t.remove(_.index);for(const E in _.attributes)t.remove(_.attributes[E]);_.removeEventListener("dispose",h),delete l[_.id];const x=c.get(_);x&&(t.remove(x),c.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function f(v,_){return l[_.id]===!0||(_.addEventListener("dispose",h),l[_.id]=!0,i.memory.geometries++),_}function m(v){const _=v.attributes;for(const x in _)t.update(_[x],r.ARRAY_BUFFER)}function p(v){const _=[],x=v.index,E=v.attributes.position;let T=0;if(x!==null){const w=x.array;T=x.version;for(let P=0,U=w.length;P<U;P+=3){const F=w[P+0],I=w[P+1],z=w[P+2];_.push(F,I,I,z,z,F)}}else if(E!==void 0){const w=E.array;T=E.version;for(let P=0,U=w.length/3-1;P<U;P+=3){const F=P+0,I=P+1,z=P+2;_.push(F,I,I,z,z,F)}}else return;const y=new(tx(_)?sx:ax)(_,1);y.version=T;const M=c.get(v);M&&t.remove(M),c.set(v,y)}function g(v){const _=c.get(v);if(_){const x=v.index;x!==null&&_.version<x.version&&p(v)}else p(v);return c.get(v)}return{get:f,update:m,getWireframeAttribute:g}}function u1(r,t,i){let s;function l(_){s=_}let c,h;function f(_){c=_.type,h=_.bytesPerElement}function m(_,x){r.drawElements(s,x,c,_*h),i.update(x,s,1)}function p(_,x,E){E!==0&&(r.drawElementsInstanced(s,x,c,_*h,E),i.update(x,s,E))}function g(_,x,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,x,0,c,_,0,E);let y=0;for(let M=0;M<E;M++)y+=x[M];i.update(y,s,1)}function v(_,x,E,T){if(E===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<_.length;M++)p(_[M]/h,x[M],T[M]);else{y.multiDrawElementsInstancedWEBGL(s,x,0,c,_,0,T,0,E);let M=0;for(let w=0;w<E;w++)M+=x[w]*T[w];i.update(M,s,1)}}this.setMode=l,this.setIndex=f,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function f1(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,f){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=f*(c/3);break;case r.LINES:i.lines+=f*(c/2);break;case r.LINE_STRIP:i.lines+=f*(c-1);break;case r.LINE_LOOP:i.lines+=f*c;break;case r.POINTS:i.points+=f*c;break;default:Re("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function h1(r,t,i){const s=new WeakMap,l=new an;function c(h,f,m){const p=h.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=g!==void 0?g.length:0;let _=s.get(f);if(_===void 0||_.count!==v){let D=function(){Y.dispose(),s.delete(f),f.removeEventListener("dispose",D)};var x=D;_!==void 0&&_.texture.dispose();const E=f.morphAttributes.position!==void 0,T=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,M=f.morphAttributes.position||[],w=f.morphAttributes.normal||[],P=f.morphAttributes.color||[];let U=0;E===!0&&(U=1),T===!0&&(U=2),y===!0&&(U=3);let F=f.attributes.position.count*U,I=1;F>t.maxTextureSize&&(I=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const z=new Float32Array(F*I*4*v),Y=new ex(z,F,I,v);Y.type=Zi,Y.needsUpdate=!0;const R=U*4;for(let V=0;V<v;V++){const Q=M[V],et=w[V],tt=P[V],G=F*I*4*V;for(let L=0;L<Q.count;L++){const B=L*R;E===!0&&(l.fromBufferAttribute(Q,L),z[G+B+0]=l.x,z[G+B+1]=l.y,z[G+B+2]=l.z,z[G+B+3]=0),T===!0&&(l.fromBufferAttribute(et,L),z[G+B+4]=l.x,z[G+B+5]=l.y,z[G+B+6]=l.z,z[G+B+7]=0),y===!0&&(l.fromBufferAttribute(tt,L),z[G+B+8]=l.x,z[G+B+9]=l.y,z[G+B+10]=l.z,z[G+B+11]=tt.itemSize===4?l.w:1)}}_={count:v,texture:Y,size:new $t(F,I)},s.set(f,_),f.addEventListener("dispose",D)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let E=0;for(let y=0;y<p.length;y++)E+=p[y];const T=f.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",T),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}return{update:c}}function d1(r,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,g=m.geometry,v=t.get(m,g);if(l.get(v)!==p&&(t.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",f)===!1&&m.addEventListener("dispose",f),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const _=m.skeleton;l.get(_)!==p&&(_.update(),l.set(_,p))}return v}function h(){l=new WeakMap}function f(m){const p=m.target;p.removeEventListener("dispose",f),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const p1={[Bv]:"LINEAR_TONE_MAPPING",[Hv]:"REINHARD_TONE_MAPPING",[Gv]:"CINEON_TONE_MAPPING",[Sp]:"ACES_FILMIC_TONE_MAPPING",[kv]:"AGX_TONE_MAPPING",[Xv]:"NEUTRAL_TONE_MAPPING",[Vv]:"CUSTOM_TONE_MAPPING"};function m1(r,t,i,s,l){const c=new ui(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),h=new ui(t,i,{type:Ti,depthBuffer:!1,stencilBuffer:!1}),f=new Nn;f.setAttribute("position",new on([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new on([0,2,0,0,2,0],2));const m=new iE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Gi(f,m),g=new mu(-1,1,1,-1,0,1);let v=null,_=null,x=!1,E,T=null,y=[],M=!1;this.setSize=function(w,P){c.setSize(w,P),h.setSize(w,P);for(let U=0;U<y.length;U++){const F=y[U];F.setSize&&F.setSize(w,P)}},this.setEffects=function(w){y=w,M=y.length>0&&y[0].isRenderPass===!0;const P=c.width,U=c.height;for(let F=0;F<y.length;F++){const I=y[F];I.setSize&&I.setSize(P,U)}},this.begin=function(w,P){if(x||w.toneMapping===Qi&&y.length===0)return!1;if(T=P,P!==null){const U=P.width,F=P.height;(c.width!==U||c.height!==F)&&this.setSize(U,F)}return M===!1&&w.setRenderTarget(c),E=w.toneMapping,w.toneMapping=Qi,!0},this.hasRenderPass=function(){return M},this.end=function(w,P){w.toneMapping=E,x=!0;let U=c,F=h;for(let I=0;I<y.length;I++){const z=y[I];if(z.enabled!==!1&&(z.render(w,F,U,P),z.needsSwap!==!1)){const Y=U;U=F,F=Y}}if(v!==w.outputColorSpace||_!==w.toneMapping){v=w.outputColorSpace,_=w.toneMapping,m.defines={},Te.getTransfer(v)===Be&&(m.defines.SRGB_TRANSFER="");const I=p1[_];I&&(m.defines[I]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,w.setRenderTarget(T),w.render(p,g),T=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){c.dispose(),h.dispose(),f.dispose(),m.dispose()}}const gx=new Gn,fp=new fl(1,1),_x=new ex,vx=new Ly,xx=new lx,uv=[],fv=[],hv=new Float32Array(16),dv=new Float32Array(9),pv=new Float32Array(4);function to(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=uv[l];if(c===void 0&&(c=new Float32Array(l),uv[l]=c),t!==0){s.toArray(c,0);for(let h=1,f=0;h!==t;++h)f+=i,r[h].toArray(c,f)}return c}function _n(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function vn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function _u(r,t){let i=fv[t];i===void 0&&(i=new Int32Array(t),fv[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function g1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function _1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;r.uniform2fv(this.addr,t),vn(i,t)}}function v1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(_n(i,t))return;r.uniform3fv(this.addr,t),vn(i,t)}}function x1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;r.uniform4fv(this.addr,t),vn(i,t)}}function S1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;pv.set(s),r.uniformMatrix2fv(this.addr,!1,pv),vn(i,s)}}function M1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;dv.set(s),r.uniformMatrix3fv(this.addr,!1,dv),vn(i,s)}}function y1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;hv.set(s),r.uniformMatrix4fv(this.addr,!1,hv),vn(i,s)}}function E1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function b1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;r.uniform2iv(this.addr,t),vn(i,t)}}function T1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;r.uniform3iv(this.addr,t),vn(i,t)}}function A1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;r.uniform4iv(this.addr,t),vn(i,t)}}function C1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function R1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;r.uniform2uiv(this.addr,t),vn(i,t)}}function w1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;r.uniform3uiv(this.addr,t),vn(i,t)}}function D1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;r.uniform4uiv(this.addr,t),vn(i,t)}}function U1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(fp.compareFunction=i.isReversedDepthBuffer()?Rp:Cp,c=fp):c=gx,i.setTexture2D(t||c,l)}function L1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||vx,l)}function N1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||xx,l)}function O1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||_x,l)}function P1(r){switch(r){case 5126:return g1;case 35664:return _1;case 35665:return v1;case 35666:return x1;case 35674:return S1;case 35675:return M1;case 35676:return y1;case 5124:case 35670:return E1;case 35667:case 35671:return b1;case 35668:case 35672:return T1;case 35669:case 35673:return A1;case 5125:return C1;case 36294:return R1;case 36295:return w1;case 36296:return D1;case 35678:case 36198:case 36298:case 36306:case 35682:return U1;case 35679:case 36299:case 36307:return L1;case 35680:case 36300:case 36308:case 36293:return N1;case 36289:case 36303:case 36311:case 36292:return O1}}function z1(r,t){r.uniform1fv(this.addr,t)}function F1(r,t){const i=to(t,this.size,2);r.uniform2fv(this.addr,i)}function I1(r,t){const i=to(t,this.size,3);r.uniform3fv(this.addr,i)}function B1(r,t){const i=to(t,this.size,4);r.uniform4fv(this.addr,i)}function H1(r,t){const i=to(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function G1(r,t){const i=to(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function V1(r,t){const i=to(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function k1(r,t){r.uniform1iv(this.addr,t)}function X1(r,t){r.uniform2iv(this.addr,t)}function W1(r,t){r.uniform3iv(this.addr,t)}function q1(r,t){r.uniform4iv(this.addr,t)}function Y1(r,t){r.uniform1uiv(this.addr,t)}function j1(r,t){r.uniform2uiv(this.addr,t)}function Z1(r,t){r.uniform3uiv(this.addr,t)}function K1(r,t){r.uniform4uiv(this.addr,t)}function Q1(r,t,i){const s=this.cache,l=t.length,c=_u(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));let h;this.type===r.SAMPLER_2D_SHADOW?h=fp:h=gx;for(let f=0;f!==l;++f)i.setTexture2D(t[f]||h,c[f])}function J1(r,t,i){const s=this.cache,l=t.length,c=_u(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||vx,c[h])}function $1(r,t,i){const s=this.cache,l=t.length,c=_u(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||xx,c[h])}function tA(r,t,i){const s=this.cache,l=t.length,c=_u(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||_x,c[h])}function eA(r){switch(r){case 5126:return z1;case 35664:return F1;case 35665:return I1;case 35666:return B1;case 35674:return H1;case 35675:return G1;case 35676:return V1;case 5124:case 35670:return k1;case 35667:case 35671:return X1;case 35668:case 35672:return W1;case 35669:case 35673:return q1;case 5125:return Y1;case 36294:return j1;case 36295:return Z1;case 36296:return K1;case 35678:case 36198:case 36298:case 36306:case 35682:return Q1;case 35679:case 36299:case 36307:return J1;case 35680:case 36300:case 36308:case 36293:return $1;case 36289:case 36303:case 36311:case 36292:return tA}}class nA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=P1(i.type)}}class iA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=eA(i.type)}}class aA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const f=l[c];f.setValue(t,i[f.id],s)}}}const od=/(\w+)(\])?(\[|\.)?/g;function mv(r,t){r.seq.push(t),r.map[t.id]=t}function sA(r,t,i){const s=r.name,l=s.length;for(od.lastIndex=0;;){const c=od.exec(s),h=od.lastIndex;let f=c[1];const m=c[2]==="]",p=c[3];if(m&&(f=f|0),p===void 0||p==="["&&h+2===l){mv(i,p===void 0?new nA(f,r,t):new iA(f,r,t));break}else{let v=i.map[f];v===void 0&&(v=new aA(f),mv(i,v)),i=v}}}class su{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const f=t.getActiveUniform(i,h),m=t.getUniformLocation(i,f.name);sA(f,m,this)}const l=[],c=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const f=i[c],m=s[f.id];m.needsUpdate!==!1&&f.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function gv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const rA=37297;let oA=0;function lA(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const f=h+1;s.push(`${f===t?">":" "} ${f}: ${i[h]}`)}return s.join(`
`)}const _v=new de;function cA(r){Te._getMatrix(_v,Te.workingColorSpace,r);const t=`mat3( ${_v.elements.map(i=>i.toFixed(4))} )`;switch(Te.getTransfer(r)){case ou:return[t,"LinearTransferOETF"];case Be:return[t,"sRGBTransferOETF"];default:return ie("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function vv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const f=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+lA(r.getShaderSource(t),f)}else return c}function uA(r,t){const i=cA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const fA={[Bv]:"Linear",[Hv]:"Reinhard",[Gv]:"Cineon",[Sp]:"ACESFilmic",[kv]:"AgX",[Xv]:"Neutral",[Vv]:"Custom"};function hA(r,t){const i=fA[t];return i===void 0?(ie("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Kc=new q;function dA(){Te.getLuminanceCoefficients(Kc);const r=Kc.x.toFixed(4),t=Kc.y.toFixed(4),i=Kc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sl).join(`
`)}function mA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function gA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),h=c.name;let f=1;c.type===r.FLOAT_MAT2&&(f=2),c.type===r.FLOAT_MAT3&&(f=3),c.type===r.FLOAT_MAT4&&(f=4),i[h]={type:c.type,location:r.getAttribLocation(t,h),locationSize:f}}return i}function sl(r){return r!==""}function xv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Sv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const _A=/^[ \t]*#include +<([\w\d./]+)>/gm;function hp(r){return r.replace(_A,xA)}const vA=new Map;function xA(r,t){let i=pe[t];if(i===void 0){const s=vA.get(t);if(s!==void 0)i=pe[s],ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return hp(i)}const SA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mv(r){return r.replace(SA,MA)}function MA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function yv(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const yA={[$c]:"SHADOWMAP_TYPE_PCF",[Vr]:"SHADOWMAP_TYPE_VSM"};function EA(r){return yA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const bA={[Hs]:"ENVMAP_TYPE_CUBE",[jr]:"ENVMAP_TYPE_CUBE",[hu]:"ENVMAP_TYPE_CUBE_UV"};function TA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":bA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const AA={[jr]:"ENVMAP_MODE_REFRACTION"};function CA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":AA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const RA={[Iv]:"ENVMAP_BLENDING_MULTIPLY",[hy]:"ENVMAP_BLENDING_MIX",[dy]:"ENVMAP_BLENDING_ADD"};function wA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":RA[r.combine]||"ENVMAP_BLENDING_NONE"}function DA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function UA(r,t,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,f=i.fragmentShader;const m=EA(i),p=TA(i),g=CA(i),v=wA(i),_=DA(i),x=pA(i),E=mA(c),T=l.createProgram();let y,M,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(sl).join(`
`),y.length>0&&(y+=`
`),M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(sl).join(`
`),M.length>0&&(M+=`
`)):(y=[yv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sl).join(`
`),M=[yv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Qi?"#define TONE_MAPPING":"",i.toneMapping!==Qi?pe.tonemapping_pars_fragment:"",i.toneMapping!==Qi?hA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,uA("linearToOutputTexel",i.outputColorSpace),dA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(sl).join(`
`)),h=hp(h),h=xv(h,i),h=Sv(h,i),f=hp(f),f=xv(f,i),f=Sv(f,i),h=Mv(h),f=Mv(f),i.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,y=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,M=["#define varying in",i.glslVersion===D_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===D_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const P=w+y+h,U=w+M+f,F=gv(l,l.VERTEX_SHADER,P),I=gv(l,l.FRAGMENT_SHADER,U);l.attachShader(T,F),l.attachShader(T,I),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function z(V){if(r.debug.checkShaderErrors){const Q=l.getProgramInfoLog(T)||"",et=l.getShaderInfoLog(F)||"",tt=l.getShaderInfoLog(I)||"",G=Q.trim(),L=et.trim(),B=tt.trim();let $=!0,xt=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if($=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,T,F,I);else{const vt=vv(l,F,"vertex"),N=vv(l,I,"fragment");Re("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+G+`
`+vt+`
`+N)}else G!==""?ie("WebGLProgram: Program Info Log:",G):(L===""||B==="")&&(xt=!1);xt&&(V.diagnostics={runnable:$,programLog:G,vertexShader:{log:L,prefix:y},fragmentShader:{log:B,prefix:M}})}l.deleteShader(F),l.deleteShader(I),Y=new su(l,T),R=gA(l,T)}let Y;this.getUniforms=function(){return Y===void 0&&z(this),Y};let R;this.getAttributes=function(){return R===void 0&&z(this),R};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(T,rA)),D},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=oA++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=F,this.fragmentShader=I,this}let LA=0;class NA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new OA(t),i.set(t,s)),s}}class OA{constructor(t){this.id=LA++,this.code=t,this.usedTimes=0}}function PA(r,t,i,s,l,c,h){const f=new nx,m=new NA,p=new Set,g=[],v=new Map,_=l.logarithmicDepthBuffer;let x=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(R){return p.add(R),R===0?"uv":`uv${R}`}function y(R,D,V,Q,et){const tt=Q.fog,G=et.geometry,L=R.isMeshStandardMaterial?Q.environment:null,B=(R.isMeshStandardMaterial?i:t).get(R.envMap||L),$=B&&B.mapping===hu?B.image.height:null,xt=E[R.type];R.precision!==null&&(x=l.getMaxPrecision(R.precision),x!==R.precision&&ie("WebGLProgram.getParameters:",R.precision,"not supported, using",x,"instead."));const vt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,N=vt!==void 0?vt.length:0;let at=0;G.morphAttributes.position!==void 0&&(at=1),G.morphAttributes.normal!==void 0&&(at=2),G.morphAttributes.color!==void 0&&(at=3);let gt,At,Bt,ot;if(xt){const be=ji[xt];gt=be.vertexShader,At=be.fragmentShader}else gt=R.vertexShader,At=R.fragmentShader,m.update(R),Bt=m.getVertexShaderID(R),ot=m.getFragmentShaderID(R);const ft=r.getRenderTarget(),Dt=r.state.buffers.depth.getReversed(),kt=et.isInstancedMesh===!0,Ht=et.isBatchedMesh===!0,me=!!R.map,$e=!!R.matcap,xe=!!B,ge=!!R.aoMap,we=!!R.lightMap,le=!!R.bumpMap,tn=!!R.normalMap,k=!!R.displacementMap,je=!!R.emissiveMap,Ee=!!R.metalnessMap,Ne=!!R.roughnessMap,Yt=R.anisotropy>0,O=R.clearcoat>0,b=R.dispersion>0,j=R.iridescence>0,dt=R.sheen>0,St=R.transmission>0,ut=Yt&&!!R.anisotropyMap,Zt=O&&!!R.clearcoatMap,Rt=O&&!!R.clearcoatNormalMap,Xt=O&&!!R.clearcoatRoughnessMap,ne=j&&!!R.iridescenceMap,yt=j&&!!R.iridescenceThicknessMap,bt=dt&&!!R.sheenColorMap,Ft=dt&&!!R.sheenRoughnessMap,Pt=!!R.specularMap,wt=!!R.specularColorMap,fe=!!R.specularIntensityMap,W=St&&!!R.transmissionMap,Lt=St&&!!R.thicknessMap,Tt=!!R.gradientMap,zt=!!R.alphaMap,Mt=R.alphaTest>0,_t=!!R.alphaHash,Ct=!!R.extensions;let ae=Qi;R.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(ae=r.toneMapping);const Pe={shaderID:xt,shaderType:R.type,shaderName:R.name,vertexShader:gt,fragmentShader:At,defines:R.defines,customVertexShaderID:Bt,customFragmentShaderID:ot,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:x,batching:Ht,batchingColor:Ht&&et._colorsTexture!==null,instancing:kt,instancingColor:kt&&et.instanceColor!==null,instancingMorph:kt&&et.morphTexture!==null,outputColorSpace:ft===null?r.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:Kr,alphaToCoverage:!!R.alphaToCoverage,map:me,matcap:$e,envMap:xe,envMapMode:xe&&B.mapping,envMapCubeUVHeight:$,aoMap:ge,lightMap:we,bumpMap:le,normalMap:tn,displacementMap:k,emissiveMap:je,normalMapObjectSpace:tn&&R.normalMapType===gy,normalMapTangentSpace:tn&&R.normalMapType===$v,metalnessMap:Ee,roughnessMap:Ne,anisotropy:Yt,anisotropyMap:ut,clearcoat:O,clearcoatMap:Zt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Xt,dispersion:b,iridescence:j,iridescenceMap:ne,iridescenceThicknessMap:yt,sheen:dt,sheenColorMap:bt,sheenRoughnessMap:Ft,specularMap:Pt,specularColorMap:wt,specularIntensityMap:fe,transmission:St,transmissionMap:W,thicknessMap:Lt,gradientMap:Tt,opaque:R.transparent===!1&&R.blending===Wr&&R.alphaToCoverage===!1,alphaMap:zt,alphaTest:Mt,alphaHash:_t,combine:R.combine,mapUv:me&&T(R.map.channel),aoMapUv:ge&&T(R.aoMap.channel),lightMapUv:we&&T(R.lightMap.channel),bumpMapUv:le&&T(R.bumpMap.channel),normalMapUv:tn&&T(R.normalMap.channel),displacementMapUv:k&&T(R.displacementMap.channel),emissiveMapUv:je&&T(R.emissiveMap.channel),metalnessMapUv:Ee&&T(R.metalnessMap.channel),roughnessMapUv:Ne&&T(R.roughnessMap.channel),anisotropyMapUv:ut&&T(R.anisotropyMap.channel),clearcoatMapUv:Zt&&T(R.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&T(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xt&&T(R.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&T(R.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&T(R.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&T(R.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&T(R.sheenRoughnessMap.channel),specularMapUv:Pt&&T(R.specularMap.channel),specularColorMapUv:wt&&T(R.specularColorMap.channel),specularIntensityMapUv:fe&&T(R.specularIntensityMap.channel),transmissionMapUv:W&&T(R.transmissionMap.channel),thicknessMapUv:Lt&&T(R.thicknessMap.channel),alphaMapUv:zt&&T(R.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(tn||Yt),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:et.isPoints===!0&&!!G.attributes.uv&&(me||zt),fog:!!tt,useFog:R.fog===!0,fogExp2:!!tt&&tt.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Dt,skinning:et.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:at,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:R.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:ae,decodeVideoTexture:me&&R.map.isVideoTexture===!0&&Te.getTransfer(R.map.colorSpace)===Be,decodeVideoTextureEmissive:je&&R.emissiveMap.isVideoTexture===!0&&Te.getTransfer(R.emissiveMap.colorSpace)===Be,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Bi,flipSided:R.side===Jn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:Ct&&R.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&R.extensions.multiDraw===!0||Ht)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Pe.vertexUv1s=p.has(1),Pe.vertexUv2s=p.has(2),Pe.vertexUv3s=p.has(3),p.clear(),Pe}function M(R){const D=[];if(R.shaderID?D.push(R.shaderID):(D.push(R.customVertexShaderID),D.push(R.customFragmentShaderID)),R.defines!==void 0)for(const V in R.defines)D.push(V),D.push(R.defines[V]);return R.isRawShaderMaterial===!1&&(w(D,R),P(D,R),D.push(r.outputColorSpace)),D.push(R.customProgramCacheKey),D.join()}function w(R,D){R.push(D.precision),R.push(D.outputColorSpace),R.push(D.envMapMode),R.push(D.envMapCubeUVHeight),R.push(D.mapUv),R.push(D.alphaMapUv),R.push(D.lightMapUv),R.push(D.aoMapUv),R.push(D.bumpMapUv),R.push(D.normalMapUv),R.push(D.displacementMapUv),R.push(D.emissiveMapUv),R.push(D.metalnessMapUv),R.push(D.roughnessMapUv),R.push(D.anisotropyMapUv),R.push(D.clearcoatMapUv),R.push(D.clearcoatNormalMapUv),R.push(D.clearcoatRoughnessMapUv),R.push(D.iridescenceMapUv),R.push(D.iridescenceThicknessMapUv),R.push(D.sheenColorMapUv),R.push(D.sheenRoughnessMapUv),R.push(D.specularMapUv),R.push(D.specularColorMapUv),R.push(D.specularIntensityMapUv),R.push(D.transmissionMapUv),R.push(D.thicknessMapUv),R.push(D.combine),R.push(D.fogExp2),R.push(D.sizeAttenuation),R.push(D.morphTargetsCount),R.push(D.morphAttributeCount),R.push(D.numDirLights),R.push(D.numPointLights),R.push(D.numSpotLights),R.push(D.numSpotLightMaps),R.push(D.numHemiLights),R.push(D.numRectAreaLights),R.push(D.numDirLightShadows),R.push(D.numPointLightShadows),R.push(D.numSpotLightShadows),R.push(D.numSpotLightShadowsWithMaps),R.push(D.numLightProbes),R.push(D.shadowMapType),R.push(D.toneMapping),R.push(D.numClippingPlanes),R.push(D.numClipIntersection),R.push(D.depthPacking)}function P(R,D){f.disableAll(),D.instancing&&f.enable(0),D.instancingColor&&f.enable(1),D.instancingMorph&&f.enable(2),D.matcap&&f.enable(3),D.envMap&&f.enable(4),D.normalMapObjectSpace&&f.enable(5),D.normalMapTangentSpace&&f.enable(6),D.clearcoat&&f.enable(7),D.iridescence&&f.enable(8),D.alphaTest&&f.enable(9),D.vertexColors&&f.enable(10),D.vertexAlphas&&f.enable(11),D.vertexUv1s&&f.enable(12),D.vertexUv2s&&f.enable(13),D.vertexUv3s&&f.enable(14),D.vertexTangents&&f.enable(15),D.anisotropy&&f.enable(16),D.alphaHash&&f.enable(17),D.batching&&f.enable(18),D.dispersion&&f.enable(19),D.batchingColor&&f.enable(20),D.gradientMap&&f.enable(21),R.push(f.mask),f.disableAll(),D.fog&&f.enable(0),D.useFog&&f.enable(1),D.flatShading&&f.enable(2),D.logarithmicDepthBuffer&&f.enable(3),D.reversedDepthBuffer&&f.enable(4),D.skinning&&f.enable(5),D.morphTargets&&f.enable(6),D.morphNormals&&f.enable(7),D.morphColors&&f.enable(8),D.premultipliedAlpha&&f.enable(9),D.shadowMapEnabled&&f.enable(10),D.doubleSided&&f.enable(11),D.flipSided&&f.enable(12),D.useDepthPacking&&f.enable(13),D.dithering&&f.enable(14),D.transmission&&f.enable(15),D.sheen&&f.enable(16),D.opaque&&f.enable(17),D.pointsUvs&&f.enable(18),D.decodeVideoTexture&&f.enable(19),D.decodeVideoTextureEmissive&&f.enable(20),D.alphaToCoverage&&f.enable(21),R.push(f.mask)}function U(R){const D=E[R.type];let V;if(D){const Q=ji[D];V=cp.clone(Q.uniforms)}else V=R.uniforms;return V}function F(R,D){let V=v.get(D);return V!==void 0?++V.usedTimes:(V=new UA(r,D,R,c),g.push(V),v.set(D,V)),V}function I(R){if(--R.usedTimes===0){const D=g.indexOf(R);g[D]=g[g.length-1],g.pop(),v.delete(R.cacheKey),R.destroy()}}function z(R){m.remove(R)}function Y(){m.dispose()}return{getParameters:y,getProgramCacheKey:M,getUniforms:U,acquireProgram:F,releaseProgram:I,releaseShaderCache:z,programs:g,dispose:Y}}function zA(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let f=r.get(h);return f===void 0&&(f={},r.set(h,f)),f}function s(h){r.delete(h)}function l(h,f,m){r.get(h)[f]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function FA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Ev(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function bv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(v,_,x,E,T,y){let M=r[t];return M===void 0?(M={id:v.id,object:v,geometry:_,material:x,groupOrder:E,renderOrder:v.renderOrder,z:T,group:y},r[t]=M):(M.id=v.id,M.object=v,M.geometry=_,M.material=x,M.groupOrder=E,M.renderOrder=v.renderOrder,M.z=T,M.group=y),t++,M}function f(v,_,x,E,T,y){const M=h(v,_,x,E,T,y);x.transmission>0?s.push(M):x.transparent===!0?l.push(M):i.push(M)}function m(v,_,x,E,T,y){const M=h(v,_,x,E,T,y);x.transmission>0?s.unshift(M):x.transparent===!0?l.unshift(M):i.unshift(M)}function p(v,_){i.length>1&&i.sort(v||FA),s.length>1&&s.sort(_||Ev),l.length>1&&l.sort(_||Ev)}function g(){for(let v=t,_=r.length;v<_;v++){const x=r[v];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:f,unshift:m,finish:g,sort:p}}function IA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let h;return c===void 0?(h=new bv,r.set(s,[h])):l>=c.length?(h=new bv,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function BA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new q,color:new ue};break;case"SpotLight":i={position:new q,direction:new q,color:new ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new q,color:new ue,distance:0,decay:0};break;case"HemisphereLight":i={direction:new q,skyColor:new ue,groundColor:new ue};break;case"RectAreaLight":i={color:new ue,position:new q,halfWidth:new q,halfHeight:new q};break}return r[t.id]=i,i}}}function HA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let GA=0;function VA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function kA(r){const t=new BA,i=HA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new q);const l=new q,c=new Je,h=new Je;function f(p){let g=0,v=0,_=0;for(let R=0;R<9;R++)s.probe[R].set(0,0,0);let x=0,E=0,T=0,y=0,M=0,w=0,P=0,U=0,F=0,I=0,z=0;p.sort(VA);for(let R=0,D=p.length;R<D;R++){const V=p[R],Q=V.color,et=V.intensity,tt=V.distance;let G=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Zr?G=V.shadow.map.texture:G=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)g+=Q.r*et,v+=Q.g*et,_+=Q.b*et;else if(V.isLightProbe){for(let L=0;L<9;L++)s.probe[L].addScaledVector(V.sh.coefficients[L],et);z++}else if(V.isDirectionalLight){const L=t.get(V);if(L.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const B=V.shadow,$=i.get(V);$.shadowIntensity=B.intensity,$.shadowBias=B.bias,$.shadowNormalBias=B.normalBias,$.shadowRadius=B.radius,$.shadowMapSize=B.mapSize,s.directionalShadow[x]=$,s.directionalShadowMap[x]=G,s.directionalShadowMatrix[x]=V.shadow.matrix,w++}s.directional[x]=L,x++}else if(V.isSpotLight){const L=t.get(V);L.position.setFromMatrixPosition(V.matrixWorld),L.color.copy(Q).multiplyScalar(et),L.distance=tt,L.coneCos=Math.cos(V.angle),L.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),L.decay=V.decay,s.spot[T]=L;const B=V.shadow;if(V.map&&(s.spotLightMap[F]=V.map,F++,B.updateMatrices(V),V.castShadow&&I++),s.spotLightMatrix[T]=B.matrix,V.castShadow){const $=i.get(V);$.shadowIntensity=B.intensity,$.shadowBias=B.bias,$.shadowNormalBias=B.normalBias,$.shadowRadius=B.radius,$.shadowMapSize=B.mapSize,s.spotShadow[T]=$,s.spotShadowMap[T]=G,U++}T++}else if(V.isRectAreaLight){const L=t.get(V);L.color.copy(Q).multiplyScalar(et),L.halfWidth.set(V.width*.5,0,0),L.halfHeight.set(0,V.height*.5,0),s.rectArea[y]=L,y++}else if(V.isPointLight){const L=t.get(V);if(L.color.copy(V.color).multiplyScalar(V.intensity),L.distance=V.distance,L.decay=V.decay,V.castShadow){const B=V.shadow,$=i.get(V);$.shadowIntensity=B.intensity,$.shadowBias=B.bias,$.shadowNormalBias=B.normalBias,$.shadowRadius=B.radius,$.shadowMapSize=B.mapSize,$.shadowCameraNear=B.camera.near,$.shadowCameraFar=B.camera.far,s.pointShadow[E]=$,s.pointShadowMap[E]=G,s.pointShadowMatrix[E]=V.shadow.matrix,P++}s.point[E]=L,E++}else if(V.isHemisphereLight){const L=t.get(V);L.skyColor.copy(V.color).multiplyScalar(et),L.groundColor.copy(V.groundColor).multiplyScalar(et),s.hemi[M]=L,M++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ot.LTC_FLOAT_1,s.rectAreaLTC2=Ot.LTC_FLOAT_2):(s.rectAreaLTC1=Ot.LTC_HALF_1,s.rectAreaLTC2=Ot.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=v,s.ambient[2]=_;const Y=s.hash;(Y.directionalLength!==x||Y.pointLength!==E||Y.spotLength!==T||Y.rectAreaLength!==y||Y.hemiLength!==M||Y.numDirectionalShadows!==w||Y.numPointShadows!==P||Y.numSpotShadows!==U||Y.numSpotMaps!==F||Y.numLightProbes!==z)&&(s.directional.length=x,s.spot.length=T,s.rectArea.length=y,s.point.length=E,s.hemi.length=M,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=U+F-I,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=z,Y.directionalLength=x,Y.pointLength=E,Y.spotLength=T,Y.rectAreaLength=y,Y.hemiLength=M,Y.numDirectionalShadows=w,Y.numPointShadows=P,Y.numSpotShadows=U,Y.numSpotMaps=F,Y.numLightProbes=z,s.version=GA++)}function m(p,g){let v=0,_=0,x=0,E=0,T=0;const y=g.matrixWorldInverse;for(let M=0,w=p.length;M<w;M++){const P=p[M];if(P.isDirectionalLight){const U=s.directional[v];U.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),v++}else if(P.isSpotLight){const U=s.spot[x];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(y),U.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),x++}else if(P.isRectAreaLight){const U=s.rectArea[E];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(y),h.identity(),c.copy(P.matrixWorld),c.premultiply(y),h.extractRotation(c),U.halfWidth.set(P.width*.5,0,0),U.halfHeight.set(0,P.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),E++}else if(P.isPointLight){const U=s.point[_];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(y),_++}else if(P.isHemisphereLight){const U=s.hemi[T];U.direction.setFromMatrixPosition(P.matrixWorld),U.direction.transformDirection(y),T++}}}return{setup:f,setupView:m,state:s}}function Tv(r){const t=new kA(r),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function h(g){s.push(g)}function f(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:f,setupLightsView:m,pushLight:c,pushShadow:h}}function XA(r){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let f;return h===void 0?(f=new Tv(r),t.set(l,[f])):c>=h.length?(f=new Tv(r),h.push(f)):f=h[c],f}function s(){t=new WeakMap}return{get:i,dispose:s}}const WA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qA=`uniform sampler2D shadow_pass;
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
}`,YA=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],jA=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],Av=new Je,il=new q,ld=new q;function ZA(r,t,i){let s=new Np;const l=new $t,c=new $t,h=new an,f=new sE,m=new rE,p={},g=i.maxTextureSize,v={[us]:Jn,[Jn]:us,[Bi]:Bi},_=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:WA,fragmentShader:qA}),x=_.clone();x.defines.HORIZONTAL_PASS=1;const E=new Nn;E.setAttribute("position",new Ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Gi(E,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$c;let M=this.type;this.render=function(I,z,Y){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;I.type===Fv&&(ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),I.type=$c);const R=r.getRenderTarget(),D=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),Q=r.state;Q.setBlending(Aa),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const et=M!==this.type;et&&z.traverse(function(tt){tt.material&&(Array.isArray(tt.material)?tt.material.forEach(G=>G.needsUpdate=!0):tt.material.needsUpdate=!0)});for(let tt=0,G=I.length;tt<G;tt++){const L=I[tt],B=L.shadow;if(B===void 0){ie("WebGLShadowMap:",L,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;l.copy(B.mapSize);const $=B.getFrameExtents();if(l.multiply($),c.copy(B.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/$.x),l.x=c.x*$.x,B.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/$.y),l.y=c.y*$.y,B.mapSize.y=c.y)),B.map===null||et===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Vr){if(L.isPointLight){ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new ui(l.x,l.y,{format:Zr,type:Ti,minFilter:In,magFilter:In,generateMipmaps:!1}),B.map.texture.name=L.name+".shadowMap",B.map.depthTexture=new fl(l.x,l.y,Zi),B.map.depthTexture.name=L.name+".shadowMapDepth",B.map.depthTexture.format=Ra,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ln,B.map.depthTexture.magFilter=Ln}else{L.isPointLight?(B.map=new cx(l.x),B.map.depthTexture=new nE(l.x,Ji)):(B.map=new ui(l.x,l.y),B.map.depthTexture=new fl(l.x,l.y,Ji)),B.map.depthTexture.name=L.name+".shadowMap",B.map.depthTexture.format=Ra;const vt=r.state.buffers.depth.getReversed();this.type===$c?(B.map.depthTexture.compareFunction=vt?Rp:Cp,B.map.depthTexture.minFilter=In,B.map.depthTexture.magFilter=In):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ln,B.map.depthTexture.magFilter=Ln)}B.camera.updateProjectionMatrix()}const xt=B.map.isWebGLCubeRenderTarget?6:1;for(let vt=0;vt<xt;vt++){if(B.map.isWebGLCubeRenderTarget)r.setRenderTarget(B.map,vt),r.clear();else{vt===0&&(r.setRenderTarget(B.map),r.clear());const N=B.getViewport(vt);h.set(c.x*N.x,c.y*N.y,c.x*N.z,c.y*N.w),Q.viewport(h)}if(L.isPointLight){const N=B.camera,at=B.matrix,gt=L.distance||N.far;gt!==N.far&&(N.far=gt,N.updateProjectionMatrix()),il.setFromMatrixPosition(L.matrixWorld),N.position.copy(il),ld.copy(N.position),ld.add(YA[vt]),N.up.copy(jA[vt]),N.lookAt(ld),N.updateMatrixWorld(),at.makeTranslation(-il.x,-il.y,-il.z),Av.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Av,N.coordinateSystem,N.reversedDepth)}else B.updateMatrices(L);s=B.getFrustum(),U(z,Y,B.camera,L,this.type)}B.isPointLightShadow!==!0&&this.type===Vr&&w(B,Y),B.needsUpdate=!1}M=this.type,y.needsUpdate=!1,r.setRenderTarget(R,D,V)};function w(I,z){const Y=t.update(T);_.defines.VSM_SAMPLES!==I.blurSamples&&(_.defines.VSM_SAMPLES=I.blurSamples,x.defines.VSM_SAMPLES=I.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new ui(l.x,l.y,{format:Zr,type:Ti})),_.uniforms.shadow_pass.value=I.map.depthTexture,_.uniforms.resolution.value=I.mapSize,_.uniforms.radius.value=I.radius,r.setRenderTarget(I.mapPass),r.clear(),r.renderBufferDirect(z,null,Y,_,T,null),x.uniforms.shadow_pass.value=I.mapPass.texture,x.uniforms.resolution.value=I.mapSize,x.uniforms.radius.value=I.radius,r.setRenderTarget(I.map),r.clear(),r.renderBufferDirect(z,null,Y,x,T,null)}function P(I,z,Y,R){let D=null;const V=Y.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(V!==void 0)D=V;else if(D=Y.isPointLight===!0?m:f,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const Q=D.uuid,et=z.uuid;let tt=p[Q];tt===void 0&&(tt={},p[Q]=tt);let G=tt[et];G===void 0&&(G=D.clone(),tt[et]=G,z.addEventListener("dispose",F)),D=G}if(D.visible=z.visible,D.wireframe=z.wireframe,R===Vr?D.side=z.shadowSide!==null?z.shadowSide:z.side:D.side=z.shadowSide!==null?z.shadowSide:v[z.side],D.alphaMap=z.alphaMap,D.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,D.map=z.map,D.clipShadows=z.clipShadows,D.clippingPlanes=z.clippingPlanes,D.clipIntersection=z.clipIntersection,D.displacementMap=z.displacementMap,D.displacementScale=z.displacementScale,D.displacementBias=z.displacementBias,D.wireframeLinewidth=z.wireframeLinewidth,D.linewidth=z.linewidth,Y.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const Q=r.properties.get(D);Q.light=Y}return D}function U(I,z,Y,R,D){if(I.visible===!1)return;if(I.layers.test(z.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&D===Vr)&&(!I.frustumCulled||s.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,I.matrixWorld);const et=t.update(I),tt=I.material;if(Array.isArray(tt)){const G=et.groups;for(let L=0,B=G.length;L<B;L++){const $=G[L],xt=tt[$.materialIndex];if(xt&&xt.visible){const vt=P(I,xt,R,D);I.onBeforeShadow(r,I,z,Y,et,vt,$),r.renderBufferDirect(Y,null,et,vt,I,$),I.onAfterShadow(r,I,z,Y,et,vt,$)}}}else if(tt.visible){const G=P(I,tt,R,D);I.onBeforeShadow(r,I,z,Y,et,G,null),r.renderBufferDirect(Y,null,et,G,I,null),I.onAfterShadow(r,I,z,Y,et,G,null)}}const Q=I.children;for(let et=0,tt=Q.length;et<tt;et++)U(Q[et],z,Y,R,D)}function F(I){I.target.removeEventListener("dispose",F);for(const Y in p){const R=p[Y],D=I.target.uuid;D in R&&(R[D].dispose(),delete R[D])}}}const KA={[xd]:Sd,[Md]:bd,[yd]:Td,[Yr]:Ed,[Sd]:xd,[bd]:Md,[Td]:yd,[Ed]:Yr};function QA(r,t){function i(){let W=!1;const Lt=new an;let Tt=null;const zt=new an(0,0,0,0);return{setMask:function(Mt){Tt!==Mt&&!W&&(r.colorMask(Mt,Mt,Mt,Mt),Tt=Mt)},setLocked:function(Mt){W=Mt},setClear:function(Mt,_t,Ct,ae,Pe){Pe===!0&&(Mt*=ae,_t*=ae,Ct*=ae),Lt.set(Mt,_t,Ct,ae),zt.equals(Lt)===!1&&(r.clearColor(Mt,_t,Ct,ae),zt.copy(Lt))},reset:function(){W=!1,Tt=null,zt.set(-1,0,0,0)}}}function s(){let W=!1,Lt=!1,Tt=null,zt=null,Mt=null;return{setReversed:function(_t){if(Lt!==_t){const Ct=t.get("EXT_clip_control");_t?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),Lt=_t;const ae=Mt;Mt=null,this.setClear(ae)}},getReversed:function(){return Lt},setTest:function(_t){_t?ft(r.DEPTH_TEST):Dt(r.DEPTH_TEST)},setMask:function(_t){Tt!==_t&&!W&&(r.depthMask(_t),Tt=_t)},setFunc:function(_t){if(Lt&&(_t=KA[_t]),zt!==_t){switch(_t){case xd:r.depthFunc(r.NEVER);break;case Sd:r.depthFunc(r.ALWAYS);break;case Md:r.depthFunc(r.LESS);break;case Yr:r.depthFunc(r.LEQUAL);break;case yd:r.depthFunc(r.EQUAL);break;case Ed:r.depthFunc(r.GEQUAL);break;case bd:r.depthFunc(r.GREATER);break;case Td:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}zt=_t}},setLocked:function(_t){W=_t},setClear:function(_t){Mt!==_t&&(Lt&&(_t=1-_t),r.clearDepth(_t),Mt=_t)},reset:function(){W=!1,Tt=null,zt=null,Mt=null,Lt=!1}}}function l(){let W=!1,Lt=null,Tt=null,zt=null,Mt=null,_t=null,Ct=null,ae=null,Pe=null;return{setTest:function(be){W||(be?ft(r.STENCIL_TEST):Dt(r.STENCIL_TEST))},setMask:function(be){Lt!==be&&!W&&(r.stencilMask(be),Lt=be)},setFunc:function(be,On,Ci){(Tt!==be||zt!==On||Mt!==Ci)&&(r.stencilFunc(be,On,Ci),Tt=be,zt=On,Mt=Ci)},setOp:function(be,On,Ci){(_t!==be||Ct!==On||ae!==Ci)&&(r.stencilOp(be,On,Ci),_t=be,Ct=On,ae=Ci)},setLocked:function(be){W=be},setClear:function(be){Pe!==be&&(r.clearStencil(be),Pe=be)},reset:function(){W=!1,Lt=null,Tt=null,zt=null,Mt=null,_t=null,Ct=null,ae=null,Pe=null}}}const c=new i,h=new s,f=new l,m=new WeakMap,p=new WeakMap;let g={},v={},_=new WeakMap,x=[],E=null,T=!1,y=null,M=null,w=null,P=null,U=null,F=null,I=null,z=new ue(0,0,0),Y=0,R=!1,D=null,V=null,Q=null,et=null,tt=null;const G=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,B=0;const $=r.getParameter(r.VERSION);$.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec($)[1]),L=B>=1):$.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),L=B>=2);let xt=null,vt={};const N=r.getParameter(r.SCISSOR_BOX),at=r.getParameter(r.VIEWPORT),gt=new an().fromArray(N),At=new an().fromArray(at);function Bt(W,Lt,Tt,zt){const Mt=new Uint8Array(4),_t=r.createTexture();r.bindTexture(W,_t),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ct=0;Ct<Tt;Ct++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Lt,0,r.RGBA,1,1,zt,0,r.RGBA,r.UNSIGNED_BYTE,Mt):r.texImage2D(Lt+Ct,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Mt);return _t}const ot={};ot[r.TEXTURE_2D]=Bt(r.TEXTURE_2D,r.TEXTURE_2D,1),ot[r.TEXTURE_CUBE_MAP]=Bt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[r.TEXTURE_2D_ARRAY]=Bt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ot[r.TEXTURE_3D]=Bt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),f.setClear(0),ft(r.DEPTH_TEST),h.setFunc(Yr),le(!1),tn(T_),ft(r.CULL_FACE),ge(Aa);function ft(W){g[W]!==!0&&(r.enable(W),g[W]=!0)}function Dt(W){g[W]!==!1&&(r.disable(W),g[W]=!1)}function kt(W,Lt){return v[W]!==Lt?(r.bindFramebuffer(W,Lt),v[W]=Lt,W===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=Lt),W===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Ht(W,Lt){let Tt=x,zt=!1;if(W){Tt=_.get(Lt),Tt===void 0&&(Tt=[],_.set(Lt,Tt));const Mt=W.textures;if(Tt.length!==Mt.length||Tt[0]!==r.COLOR_ATTACHMENT0){for(let _t=0,Ct=Mt.length;_t<Ct;_t++)Tt[_t]=r.COLOR_ATTACHMENT0+_t;Tt.length=Mt.length,zt=!0}}else Tt[0]!==r.BACK&&(Tt[0]=r.BACK,zt=!0);zt&&r.drawBuffers(Tt)}function me(W){return E!==W?(r.useProgram(W),E=W,!0):!1}const $e={[zs]:r.FUNC_ADD,[ZM]:r.FUNC_SUBTRACT,[KM]:r.FUNC_REVERSE_SUBTRACT};$e[QM]=r.MIN,$e[JM]=r.MAX;const xe={[$M]:r.ZERO,[ty]:r.ONE,[ey]:r.SRC_COLOR,[_d]:r.SRC_ALPHA,[oy]:r.SRC_ALPHA_SATURATE,[sy]:r.DST_COLOR,[iy]:r.DST_ALPHA,[ny]:r.ONE_MINUS_SRC_COLOR,[vd]:r.ONE_MINUS_SRC_ALPHA,[ry]:r.ONE_MINUS_DST_COLOR,[ay]:r.ONE_MINUS_DST_ALPHA,[ly]:r.CONSTANT_COLOR,[cy]:r.ONE_MINUS_CONSTANT_COLOR,[uy]:r.CONSTANT_ALPHA,[fy]:r.ONE_MINUS_CONSTANT_ALPHA};function ge(W,Lt,Tt,zt,Mt,_t,Ct,ae,Pe,be){if(W===Aa){T===!0&&(Dt(r.BLEND),T=!1);return}if(T===!1&&(ft(r.BLEND),T=!0),W!==jM){if(W!==y||be!==R){if((M!==zs||U!==zs)&&(r.blendEquation(r.FUNC_ADD),M=zs,U=zs),be)switch(W){case Wr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case gd:r.blendFunc(r.ONE,r.ONE);break;case A_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case C_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Re("WebGLState: Invalid blending: ",W);break}else switch(W){case Wr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case gd:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case A_:Re("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case C_:Re("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Re("WebGLState: Invalid blending: ",W);break}w=null,P=null,F=null,I=null,z.set(0,0,0),Y=0,y=W,R=be}return}Mt=Mt||Lt,_t=_t||Tt,Ct=Ct||zt,(Lt!==M||Mt!==U)&&(r.blendEquationSeparate($e[Lt],$e[Mt]),M=Lt,U=Mt),(Tt!==w||zt!==P||_t!==F||Ct!==I)&&(r.blendFuncSeparate(xe[Tt],xe[zt],xe[_t],xe[Ct]),w=Tt,P=zt,F=_t,I=Ct),(ae.equals(z)===!1||Pe!==Y)&&(r.blendColor(ae.r,ae.g,ae.b,Pe),z.copy(ae),Y=Pe),y=W,R=!1}function we(W,Lt){W.side===Bi?Dt(r.CULL_FACE):ft(r.CULL_FACE);let Tt=W.side===Jn;Lt&&(Tt=!Tt),le(Tt),W.blending===Wr&&W.transparent===!1?ge(Aa):ge(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),h.setFunc(W.depthFunc),h.setTest(W.depthTest),h.setMask(W.depthWrite),c.setMask(W.colorWrite);const zt=W.stencilWrite;f.setTest(zt),zt&&(f.setMask(W.stencilWriteMask),f.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),f.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),je(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ft(r.SAMPLE_ALPHA_TO_COVERAGE):Dt(r.SAMPLE_ALPHA_TO_COVERAGE)}function le(W){D!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),D=W)}function tn(W){W!==qM?(ft(r.CULL_FACE),W!==V&&(W===T_?r.cullFace(r.BACK):W===YM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Dt(r.CULL_FACE),V=W}function k(W){W!==Q&&(L&&r.lineWidth(W),Q=W)}function je(W,Lt,Tt){W?(ft(r.POLYGON_OFFSET_FILL),(et!==Lt||tt!==Tt)&&(r.polygonOffset(Lt,Tt),et=Lt,tt=Tt)):Dt(r.POLYGON_OFFSET_FILL)}function Ee(W){W?ft(r.SCISSOR_TEST):Dt(r.SCISSOR_TEST)}function Ne(W){W===void 0&&(W=r.TEXTURE0+G-1),xt!==W&&(r.activeTexture(W),xt=W)}function Yt(W,Lt,Tt){Tt===void 0&&(xt===null?Tt=r.TEXTURE0+G-1:Tt=xt);let zt=vt[Tt];zt===void 0&&(zt={type:void 0,texture:void 0},vt[Tt]=zt),(zt.type!==W||zt.texture!==Lt)&&(xt!==Tt&&(r.activeTexture(Tt),xt=Tt),r.bindTexture(W,Lt||ot[W]),zt.type=W,zt.texture=Lt)}function O(){const W=vt[xt];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(W){Re("WebGLState:",W)}}function j(){try{r.compressedTexImage3D(...arguments)}catch(W){Re("WebGLState:",W)}}function dt(){try{r.texSubImage2D(...arguments)}catch(W){Re("WebGLState:",W)}}function St(){try{r.texSubImage3D(...arguments)}catch(W){Re("WebGLState:",W)}}function ut(){try{r.compressedTexSubImage2D(...arguments)}catch(W){Re("WebGLState:",W)}}function Zt(){try{r.compressedTexSubImage3D(...arguments)}catch(W){Re("WebGLState:",W)}}function Rt(){try{r.texStorage2D(...arguments)}catch(W){Re("WebGLState:",W)}}function Xt(){try{r.texStorage3D(...arguments)}catch(W){Re("WebGLState:",W)}}function ne(){try{r.texImage2D(...arguments)}catch(W){Re("WebGLState:",W)}}function yt(){try{r.texImage3D(...arguments)}catch(W){Re("WebGLState:",W)}}function bt(W){gt.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),gt.copy(W))}function Ft(W){At.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),At.copy(W))}function Pt(W,Lt){let Tt=p.get(Lt);Tt===void 0&&(Tt=new WeakMap,p.set(Lt,Tt));let zt=Tt.get(W);zt===void 0&&(zt=r.getUniformBlockIndex(Lt,W.name),Tt.set(W,zt))}function wt(W,Lt){const zt=p.get(Lt).get(W);m.get(Lt)!==zt&&(r.uniformBlockBinding(Lt,zt,W.__bindingPointIndex),m.set(Lt,zt))}function fe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},xt=null,vt={},v={},_=new WeakMap,x=[],E=null,T=!1,y=null,M=null,w=null,P=null,U=null,F=null,I=null,z=new ue(0,0,0),Y=0,R=!1,D=null,V=null,Q=null,et=null,tt=null,gt.set(0,0,r.canvas.width,r.canvas.height),At.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),f.reset()}return{buffers:{color:c,depth:h,stencil:f},enable:ft,disable:Dt,bindFramebuffer:kt,drawBuffers:Ht,useProgram:me,setBlending:ge,setMaterial:we,setFlipSided:le,setCullFace:tn,setLineWidth:k,setPolygonOffset:je,setScissorTest:Ee,activeTexture:Ne,bindTexture:Yt,unbindTexture:O,compressedTexImage2D:b,compressedTexImage3D:j,texImage2D:ne,texImage3D:yt,updateUBOMapping:Pt,uniformBlockBinding:wt,texStorage2D:Rt,texStorage3D:Xt,texSubImage2D:dt,texSubImage3D:St,compressedTexSubImage2D:ut,compressedTexSubImage3D:Zt,scissor:bt,viewport:Ft,reset:fe}}function JA(r,t,i,s,l,c,h){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new $t,g=new WeakMap;let v;const _=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,b){return x?new OffscreenCanvas(O,b):cu("canvas")}function T(O,b,j){let dt=1;const St=Yt(O);if((St.width>j||St.height>j)&&(dt=j/Math.max(St.width,St.height)),dt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const ut=Math.floor(dt*St.width),Zt=Math.floor(dt*St.height);v===void 0&&(v=E(ut,Zt));const Rt=b?E(ut,Zt):v;return Rt.width=ut,Rt.height=Zt,Rt.getContext("2d").drawImage(O,0,0,ut,Zt),ie("WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+ut+"x"+Zt+")."),Rt}else return"data"in O&&ie("WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),O;return O}function y(O){return O.generateMipmaps}function M(O){r.generateMipmap(O)}function w(O){return O.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?r.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function P(O,b,j,dt,St=!1){if(O!==null){if(r[O]!==void 0)return r[O];ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let ut=b;if(b===r.RED&&(j===r.FLOAT&&(ut=r.R32F),j===r.HALF_FLOAT&&(ut=r.R16F),j===r.UNSIGNED_BYTE&&(ut=r.R8)),b===r.RED_INTEGER&&(j===r.UNSIGNED_BYTE&&(ut=r.R8UI),j===r.UNSIGNED_SHORT&&(ut=r.R16UI),j===r.UNSIGNED_INT&&(ut=r.R32UI),j===r.BYTE&&(ut=r.R8I),j===r.SHORT&&(ut=r.R16I),j===r.INT&&(ut=r.R32I)),b===r.RG&&(j===r.FLOAT&&(ut=r.RG32F),j===r.HALF_FLOAT&&(ut=r.RG16F),j===r.UNSIGNED_BYTE&&(ut=r.RG8)),b===r.RG_INTEGER&&(j===r.UNSIGNED_BYTE&&(ut=r.RG8UI),j===r.UNSIGNED_SHORT&&(ut=r.RG16UI),j===r.UNSIGNED_INT&&(ut=r.RG32UI),j===r.BYTE&&(ut=r.RG8I),j===r.SHORT&&(ut=r.RG16I),j===r.INT&&(ut=r.RG32I)),b===r.RGB_INTEGER&&(j===r.UNSIGNED_BYTE&&(ut=r.RGB8UI),j===r.UNSIGNED_SHORT&&(ut=r.RGB16UI),j===r.UNSIGNED_INT&&(ut=r.RGB32UI),j===r.BYTE&&(ut=r.RGB8I),j===r.SHORT&&(ut=r.RGB16I),j===r.INT&&(ut=r.RGB32I)),b===r.RGBA_INTEGER&&(j===r.UNSIGNED_BYTE&&(ut=r.RGBA8UI),j===r.UNSIGNED_SHORT&&(ut=r.RGBA16UI),j===r.UNSIGNED_INT&&(ut=r.RGBA32UI),j===r.BYTE&&(ut=r.RGBA8I),j===r.SHORT&&(ut=r.RGBA16I),j===r.INT&&(ut=r.RGBA32I)),b===r.RGB&&(j===r.UNSIGNED_INT_5_9_9_9_REV&&(ut=r.RGB9_E5),j===r.UNSIGNED_INT_10F_11F_11F_REV&&(ut=r.R11F_G11F_B10F)),b===r.RGBA){const Zt=St?ou:Te.getTransfer(dt);j===r.FLOAT&&(ut=r.RGBA32F),j===r.HALF_FLOAT&&(ut=r.RGBA16F),j===r.UNSIGNED_BYTE&&(ut=Zt===Be?r.SRGB8_ALPHA8:r.RGBA8),j===r.UNSIGNED_SHORT_4_4_4_4&&(ut=r.RGBA4),j===r.UNSIGNED_SHORT_5_5_5_1&&(ut=r.RGB5_A1)}return(ut===r.R16F||ut===r.R32F||ut===r.RG16F||ut===r.RG32F||ut===r.RGBA16F||ut===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function U(O,b){let j;return O?b===null||b===Ji||b===cl?j=r.DEPTH24_STENCIL8:b===Zi?j=r.DEPTH32F_STENCIL8:b===ll&&(j=r.DEPTH24_STENCIL8,ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ji||b===cl?j=r.DEPTH_COMPONENT24:b===Zi?j=r.DEPTH_COMPONENT32F:b===ll&&(j=r.DEPTH_COMPONENT16),j}function F(O,b){return y(O)===!0||O.isFramebufferTexture&&O.minFilter!==Ln&&O.minFilter!==In?Math.log2(Math.max(b.width,b.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?b.mipmaps.length:1}function I(O){const b=O.target;b.removeEventListener("dispose",I),Y(b),b.isVideoTexture&&g.delete(b)}function z(O){const b=O.target;b.removeEventListener("dispose",z),D(b)}function Y(O){const b=s.get(O);if(b.__webglInit===void 0)return;const j=O.source,dt=_.get(j);if(dt){const St=dt[b.__cacheKey];St.usedTimes--,St.usedTimes===0&&R(O),Object.keys(dt).length===0&&_.delete(j)}s.remove(O)}function R(O){const b=s.get(O);r.deleteTexture(b.__webglTexture);const j=O.source,dt=_.get(j);delete dt[b.__cacheKey],h.memory.textures--}function D(O){const b=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(b.__webglFramebuffer[dt]))for(let St=0;St<b.__webglFramebuffer[dt].length;St++)r.deleteFramebuffer(b.__webglFramebuffer[dt][St]);else r.deleteFramebuffer(b.__webglFramebuffer[dt]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[dt])}else{if(Array.isArray(b.__webglFramebuffer))for(let dt=0;dt<b.__webglFramebuffer.length;dt++)r.deleteFramebuffer(b.__webglFramebuffer[dt]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let dt=0;dt<b.__webglColorRenderbuffer.length;dt++)b.__webglColorRenderbuffer[dt]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[dt]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const j=O.textures;for(let dt=0,St=j.length;dt<St;dt++){const ut=s.get(j[dt]);ut.__webglTexture&&(r.deleteTexture(ut.__webglTexture),h.memory.textures--),s.remove(j[dt])}s.remove(O)}let V=0;function Q(){V=0}function et(){const O=V;return O>=l.maxTextures&&ie("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),V+=1,O}function tt(O){const b=[];return b.push(O.wrapS),b.push(O.wrapT),b.push(O.wrapR||0),b.push(O.magFilter),b.push(O.minFilter),b.push(O.anisotropy),b.push(O.internalFormat),b.push(O.format),b.push(O.type),b.push(O.generateMipmaps),b.push(O.premultiplyAlpha),b.push(O.flipY),b.push(O.unpackAlignment),b.push(O.colorSpace),b.join()}function G(O,b){const j=s.get(O);if(O.isVideoTexture&&Ee(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&j.__version!==O.version){const dt=O.image;if(dt===null)ie("WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)ie("WebGLRenderer: Texture marked for update but image is incomplete");else{ot(j,O,b);return}}else O.isExternalTexture&&(j.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,j.__webglTexture,r.TEXTURE0+b)}function L(O,b){const j=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&j.__version!==O.version){ot(j,O,b);return}else O.isExternalTexture&&(j.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,j.__webglTexture,r.TEXTURE0+b)}function B(O,b){const j=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&j.__version!==O.version){ot(j,O,b);return}i.bindTexture(r.TEXTURE_3D,j.__webglTexture,r.TEXTURE0+b)}function $(O,b){const j=s.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&j.__version!==O.version){ft(j,O,b);return}i.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture,r.TEXTURE0+b)}const xt={[Rd]:r.REPEAT,[Ta]:r.CLAMP_TO_EDGE,[wd]:r.MIRRORED_REPEAT},vt={[Ln]:r.NEAREST,[py]:r.NEAREST_MIPMAP_NEAREST,[Rc]:r.NEAREST_MIPMAP_LINEAR,[In]:r.LINEAR,[Dh]:r.LINEAR_MIPMAP_NEAREST,[Is]:r.LINEAR_MIPMAP_LINEAR},N={[_y]:r.NEVER,[yy]:r.ALWAYS,[vy]:r.LESS,[Cp]:r.LEQUAL,[xy]:r.EQUAL,[Rp]:r.GEQUAL,[Sy]:r.GREATER,[My]:r.NOTEQUAL};function at(O,b){if(b.type===Zi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===In||b.magFilter===Dh||b.magFilter===Rc||b.magFilter===Is||b.minFilter===In||b.minFilter===Dh||b.minFilter===Rc||b.minFilter===Is)&&ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(O,r.TEXTURE_WRAP_S,xt[b.wrapS]),r.texParameteri(O,r.TEXTURE_WRAP_T,xt[b.wrapT]),(O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY)&&r.texParameteri(O,r.TEXTURE_WRAP_R,xt[b.wrapR]),r.texParameteri(O,r.TEXTURE_MAG_FILTER,vt[b.magFilter]),r.texParameteri(O,r.TEXTURE_MIN_FILTER,vt[b.minFilter]),b.compareFunction&&(r.texParameteri(O,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(O,r.TEXTURE_COMPARE_FUNC,N[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ln||b.minFilter!==Rc&&b.minFilter!==Is||b.type===Zi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const j=t.get("EXT_texture_filter_anisotropic");r.texParameterf(O,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function gt(O,b){let j=!1;O.__webglInit===void 0&&(O.__webglInit=!0,b.addEventListener("dispose",I));const dt=b.source;let St=_.get(dt);St===void 0&&(St={},_.set(dt,St));const ut=tt(b);if(ut!==O.__cacheKey){St[ut]===void 0&&(St[ut]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,j=!0),St[ut].usedTimes++;const Zt=St[O.__cacheKey];Zt!==void 0&&(St[O.__cacheKey].usedTimes--,Zt.usedTimes===0&&R(b)),O.__cacheKey=ut,O.__webglTexture=St[ut].texture}return j}function At(O,b,j){return Math.floor(Math.floor(O/j)/b)}function Bt(O,b,j,dt){const ut=O.updateRanges;if(ut.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,j,dt,b.data);else{ut.sort((yt,bt)=>yt.start-bt.start);let Zt=0;for(let yt=1;yt<ut.length;yt++){const bt=ut[Zt],Ft=ut[yt],Pt=bt.start+bt.count,wt=At(Ft.start,b.width,4),fe=At(bt.start,b.width,4);Ft.start<=Pt+1&&wt===fe&&At(Ft.start+Ft.count-1,b.width,4)===wt?bt.count=Math.max(bt.count,Ft.start+Ft.count-bt.start):(++Zt,ut[Zt]=Ft)}ut.length=Zt+1;const Rt=r.getParameter(r.UNPACK_ROW_LENGTH),Xt=r.getParameter(r.UNPACK_SKIP_PIXELS),ne=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let yt=0,bt=ut.length;yt<bt;yt++){const Ft=ut[yt],Pt=Math.floor(Ft.start/4),wt=Math.ceil(Ft.count/4),fe=Pt%b.width,W=Math.floor(Pt/b.width),Lt=wt,Tt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,fe),r.pixelStorei(r.UNPACK_SKIP_ROWS,W),i.texSubImage2D(r.TEXTURE_2D,0,fe,W,Lt,Tt,j,dt,b.data)}O.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Rt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Xt),r.pixelStorei(r.UNPACK_SKIP_ROWS,ne)}}function ot(O,b,j){let dt=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(dt=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(dt=r.TEXTURE_3D);const St=gt(O,b),ut=b.source;i.bindTexture(dt,O.__webglTexture,r.TEXTURE0+j);const Zt=s.get(ut);if(ut.version!==Zt.__version||St===!0){i.activeTexture(r.TEXTURE0+j);const Rt=Te.getPrimaries(Te.workingColorSpace),Xt=b.colorSpace===os?null:Te.getPrimaries(b.colorSpace),ne=b.colorSpace===os||Rt===Xt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let yt=T(b.image,!1,l.maxTextureSize);yt=Ne(b,yt);const bt=c.convert(b.format,b.colorSpace),Ft=c.convert(b.type);let Pt=P(b.internalFormat,bt,Ft,b.colorSpace,b.isVideoTexture);at(dt,b);let wt;const fe=b.mipmaps,W=b.isVideoTexture!==!0,Lt=Zt.__version===void 0||St===!0,Tt=ut.dataReady,zt=F(b,yt);if(b.isDepthTexture)Pt=U(b.format===Bs,b.type),Lt&&(W?i.texStorage2D(r.TEXTURE_2D,1,Pt,yt.width,yt.height):i.texImage2D(r.TEXTURE_2D,0,Pt,yt.width,yt.height,0,bt,Ft,null));else if(b.isDataTexture)if(fe.length>0){W&&Lt&&i.texStorage2D(r.TEXTURE_2D,zt,Pt,fe[0].width,fe[0].height);for(let Mt=0,_t=fe.length;Mt<_t;Mt++)wt=fe[Mt],W?Tt&&i.texSubImage2D(r.TEXTURE_2D,Mt,0,0,wt.width,wt.height,bt,Ft,wt.data):i.texImage2D(r.TEXTURE_2D,Mt,Pt,wt.width,wt.height,0,bt,Ft,wt.data);b.generateMipmaps=!1}else W?(Lt&&i.texStorage2D(r.TEXTURE_2D,zt,Pt,yt.width,yt.height),Tt&&Bt(b,yt,bt,Ft)):i.texImage2D(r.TEXTURE_2D,0,Pt,yt.width,yt.height,0,bt,Ft,yt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){W&&Lt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,zt,Pt,fe[0].width,fe[0].height,yt.depth);for(let Mt=0,_t=fe.length;Mt<_t;Mt++)if(wt=fe[Mt],b.format!==Hi)if(bt!==null)if(W){if(Tt)if(b.layerUpdates.size>0){const Ct=iv(wt.width,wt.height,b.format,b.type);for(const ae of b.layerUpdates){const Pe=wt.data.subarray(ae*Ct/wt.data.BYTES_PER_ELEMENT,(ae+1)*Ct/wt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Mt,0,0,ae,wt.width,wt.height,1,bt,Pe)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Mt,0,0,0,wt.width,wt.height,yt.depth,bt,wt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Mt,Pt,wt.width,wt.height,yt.depth,0,wt.data,0,0);else ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Tt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Mt,0,0,0,wt.width,wt.height,yt.depth,bt,Ft,wt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Mt,Pt,wt.width,wt.height,yt.depth,0,bt,Ft,wt.data)}else{W&&Lt&&i.texStorage2D(r.TEXTURE_2D,zt,Pt,fe[0].width,fe[0].height);for(let Mt=0,_t=fe.length;Mt<_t;Mt++)wt=fe[Mt],b.format!==Hi?bt!==null?W?Tt&&i.compressedTexSubImage2D(r.TEXTURE_2D,Mt,0,0,wt.width,wt.height,bt,wt.data):i.compressedTexImage2D(r.TEXTURE_2D,Mt,Pt,wt.width,wt.height,0,wt.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Tt&&i.texSubImage2D(r.TEXTURE_2D,Mt,0,0,wt.width,wt.height,bt,Ft,wt.data):i.texImage2D(r.TEXTURE_2D,Mt,Pt,wt.width,wt.height,0,bt,Ft,wt.data)}else if(b.isDataArrayTexture)if(W){if(Lt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,zt,Pt,yt.width,yt.height,yt.depth),Tt)if(b.layerUpdates.size>0){const Mt=iv(yt.width,yt.height,b.format,b.type);for(const _t of b.layerUpdates){const Ct=yt.data.subarray(_t*Mt/yt.data.BYTES_PER_ELEMENT,(_t+1)*Mt/yt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,_t,yt.width,yt.height,1,bt,Ft,Ct)}b.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,bt,Ft,yt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Pt,yt.width,yt.height,yt.depth,0,bt,Ft,yt.data);else if(b.isData3DTexture)W?(Lt&&i.texStorage3D(r.TEXTURE_3D,zt,Pt,yt.width,yt.height,yt.depth),Tt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,bt,Ft,yt.data)):i.texImage3D(r.TEXTURE_3D,0,Pt,yt.width,yt.height,yt.depth,0,bt,Ft,yt.data);else if(b.isFramebufferTexture){if(Lt)if(W)i.texStorage2D(r.TEXTURE_2D,zt,Pt,yt.width,yt.height);else{let Mt=yt.width,_t=yt.height;for(let Ct=0;Ct<zt;Ct++)i.texImage2D(r.TEXTURE_2D,Ct,Pt,Mt,_t,0,bt,Ft,null),Mt>>=1,_t>>=1}}else if(fe.length>0){if(W&&Lt){const Mt=Yt(fe[0]);i.texStorage2D(r.TEXTURE_2D,zt,Pt,Mt.width,Mt.height)}for(let Mt=0,_t=fe.length;Mt<_t;Mt++)wt=fe[Mt],W?Tt&&i.texSubImage2D(r.TEXTURE_2D,Mt,0,0,bt,Ft,wt):i.texImage2D(r.TEXTURE_2D,Mt,Pt,bt,Ft,wt);b.generateMipmaps=!1}else if(W){if(Lt){const Mt=Yt(yt);i.texStorage2D(r.TEXTURE_2D,zt,Pt,Mt.width,Mt.height)}Tt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,bt,Ft,yt)}else i.texImage2D(r.TEXTURE_2D,0,Pt,bt,Ft,yt);y(b)&&M(dt),Zt.__version=ut.version,b.onUpdate&&b.onUpdate(b)}O.__version=b.version}function ft(O,b,j){if(b.image.length!==6)return;const dt=gt(O,b),St=b.source;i.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+j);const ut=s.get(St);if(St.version!==ut.__version||dt===!0){i.activeTexture(r.TEXTURE0+j);const Zt=Te.getPrimaries(Te.workingColorSpace),Rt=b.colorSpace===os?null:Te.getPrimaries(b.colorSpace),Xt=b.colorSpace===os||Zt===Rt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);const ne=b.isCompressedTexture||b.image[0].isCompressedTexture,yt=b.image[0]&&b.image[0].isDataTexture,bt=[];for(let _t=0;_t<6;_t++)!ne&&!yt?bt[_t]=T(b.image[_t],!0,l.maxCubemapSize):bt[_t]=yt?b.image[_t].image:b.image[_t],bt[_t]=Ne(b,bt[_t]);const Ft=bt[0],Pt=c.convert(b.format,b.colorSpace),wt=c.convert(b.type),fe=P(b.internalFormat,Pt,wt,b.colorSpace),W=b.isVideoTexture!==!0,Lt=ut.__version===void 0||dt===!0,Tt=St.dataReady;let zt=F(b,Ft);at(r.TEXTURE_CUBE_MAP,b);let Mt;if(ne){W&&Lt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,zt,fe,Ft.width,Ft.height);for(let _t=0;_t<6;_t++){Mt=bt[_t].mipmaps;for(let Ct=0;Ct<Mt.length;Ct++){const ae=Mt[Ct];b.format!==Hi?Pt!==null?W?Tt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,0,0,ae.width,ae.height,Pt,ae.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,fe,ae.width,ae.height,0,ae.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Tt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,0,0,ae.width,ae.height,Pt,wt,ae.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,fe,ae.width,ae.height,0,Pt,wt,ae.data)}}}else{if(Mt=b.mipmaps,W&&Lt){Mt.length>0&&zt++;const _t=Yt(bt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,zt,fe,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(yt){W?Tt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,bt[_t].width,bt[_t].height,Pt,wt,bt[_t].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,fe,bt[_t].width,bt[_t].height,0,Pt,wt,bt[_t].data);for(let Ct=0;Ct<Mt.length;Ct++){const Pe=Mt[Ct].image[_t].image;W?Tt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,0,0,Pe.width,Pe.height,Pt,wt,Pe.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,fe,Pe.width,Pe.height,0,Pt,wt,Pe.data)}}else{W?Tt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Pt,wt,bt[_t]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,fe,Pt,wt,bt[_t]);for(let Ct=0;Ct<Mt.length;Ct++){const ae=Mt[Ct];W?Tt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,0,0,Pt,wt,ae.image[_t]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,fe,Pt,wt,ae.image[_t])}}}y(b)&&M(r.TEXTURE_CUBE_MAP),ut.__version=St.version,b.onUpdate&&b.onUpdate(b)}O.__version=b.version}function Dt(O,b,j,dt,St,ut){const Zt=c.convert(j.format,j.colorSpace),Rt=c.convert(j.type),Xt=P(j.internalFormat,Zt,Rt,j.colorSpace),ne=s.get(b),yt=s.get(j);if(yt.__renderTarget=b,!ne.__hasExternalTextures){const bt=Math.max(1,b.width>>ut),Ft=Math.max(1,b.height>>ut);St===r.TEXTURE_3D||St===r.TEXTURE_2D_ARRAY?i.texImage3D(St,ut,Xt,bt,Ft,b.depth,0,Zt,Rt,null):i.texImage2D(St,ut,Xt,bt,Ft,0,Zt,Rt,null)}i.bindFramebuffer(r.FRAMEBUFFER,O),je(b)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,dt,St,yt.__webglTexture,0,k(b)):(St===r.TEXTURE_2D||St>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,dt,St,yt.__webglTexture,ut),i.bindFramebuffer(r.FRAMEBUFFER,null)}function kt(O,b,j){if(r.bindRenderbuffer(r.RENDERBUFFER,O),b.depthBuffer){const dt=b.depthTexture,St=dt&&dt.isDepthTexture?dt.type:null,ut=U(b.stencilBuffer,St),Zt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;je(b)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(b),ut,b.width,b.height):j?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(b),ut,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,ut,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Zt,r.RENDERBUFFER,O)}else{const dt=b.textures;for(let St=0;St<dt.length;St++){const ut=dt[St],Zt=c.convert(ut.format,ut.colorSpace),Rt=c.convert(ut.type),Xt=P(ut.internalFormat,Zt,Rt,ut.colorSpace);je(b)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(b),Xt,b.width,b.height):j?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(b),Xt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Xt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ht(O,b,j){const dt=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,O),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const St=s.get(b.depthTexture);if(St.__renderTarget=b,(!St.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),dt){if(St.__webglInit===void 0&&(St.__webglInit=!0,b.depthTexture.addEventListener("dispose",I)),St.__webglTexture===void 0){St.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,St.__webglTexture),at(r.TEXTURE_CUBE_MAP,b.depthTexture);const ne=c.convert(b.depthTexture.format),yt=c.convert(b.depthTexture.type);let bt;b.depthTexture.format===Ra?bt=r.DEPTH_COMPONENT24:b.depthTexture.format===Bs&&(bt=r.DEPTH24_STENCIL8);for(let Ft=0;Ft<6;Ft++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0,bt,b.width,b.height,0,ne,yt,null)}}else G(b.depthTexture,0);const ut=St.__webglTexture,Zt=k(b),Rt=dt?r.TEXTURE_CUBE_MAP_POSITIVE_X+j:r.TEXTURE_2D,Xt=b.depthTexture.format===Bs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ra)je(b)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Xt,Rt,ut,0,Zt):r.framebufferTexture2D(r.FRAMEBUFFER,Xt,Rt,ut,0);else if(b.depthTexture.format===Bs)je(b)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Xt,Rt,ut,0,Zt):r.framebufferTexture2D(r.FRAMEBUFFER,Xt,Rt,ut,0);else throw new Error("Unknown depthTexture format")}function me(O){const b=s.get(O),j=O.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==O.depthTexture){const dt=O.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),dt){const St=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,dt.removeEventListener("dispose",St)};dt.addEventListener("dispose",St),b.__depthDisposeCallback=St}b.__boundDepthTexture=dt}if(O.depthTexture&&!b.__autoAllocateDepthBuffer)if(j)for(let dt=0;dt<6;dt++)Ht(b.__webglFramebuffer[dt],O,dt);else{const dt=O.texture.mipmaps;dt&&dt.length>0?Ht(b.__webglFramebuffer[0],O,0):Ht(b.__webglFramebuffer,O,0)}else if(j){b.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[dt]),b.__webglDepthbuffer[dt]===void 0)b.__webglDepthbuffer[dt]=r.createRenderbuffer(),kt(b.__webglDepthbuffer[dt],O,!1);else{const St=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=b.__webglDepthbuffer[dt];r.bindRenderbuffer(r.RENDERBUFFER,ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,St,r.RENDERBUFFER,ut)}}else{const dt=O.texture.mipmaps;if(dt&&dt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),kt(b.__webglDepthbuffer,O,!1);else{const St=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,St,r.RENDERBUFFER,ut)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function $e(O,b,j){const dt=s.get(O);b!==void 0&&Dt(dt.__webglFramebuffer,O,O.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),j!==void 0&&me(O)}function xe(O){const b=O.texture,j=s.get(O),dt=s.get(b);O.addEventListener("dispose",z);const St=O.textures,ut=O.isWebGLCubeRenderTarget===!0,Zt=St.length>1;if(Zt||(dt.__webglTexture===void 0&&(dt.__webglTexture=r.createTexture()),dt.__version=b.version,h.memory.textures++),ut){j.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer[Rt]=[];for(let Xt=0;Xt<b.mipmaps.length;Xt++)j.__webglFramebuffer[Rt][Xt]=r.createFramebuffer()}else j.__webglFramebuffer[Rt]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer=[];for(let Rt=0;Rt<b.mipmaps.length;Rt++)j.__webglFramebuffer[Rt]=r.createFramebuffer()}else j.__webglFramebuffer=r.createFramebuffer();if(Zt)for(let Rt=0,Xt=St.length;Rt<Xt;Rt++){const ne=s.get(St[Rt]);ne.__webglTexture===void 0&&(ne.__webglTexture=r.createTexture(),h.memory.textures++)}if(O.samples>0&&je(O)===!1){j.__webglMultisampledFramebuffer=r.createFramebuffer(),j.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Rt=0;Rt<St.length;Rt++){const Xt=St[Rt];j.__webglColorRenderbuffer[Rt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,j.__webglColorRenderbuffer[Rt]);const ne=c.convert(Xt.format,Xt.colorSpace),yt=c.convert(Xt.type),bt=P(Xt.internalFormat,ne,yt,Xt.colorSpace,O.isXRRenderTarget===!0),Ft=k(O);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ft,bt,O.width,O.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Rt,r.RENDERBUFFER,j.__webglColorRenderbuffer[Rt])}r.bindRenderbuffer(r.RENDERBUFFER,null),O.depthBuffer&&(j.__webglDepthRenderbuffer=r.createRenderbuffer(),kt(j.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ut){i.bindTexture(r.TEXTURE_CUBE_MAP,dt.__webglTexture),at(r.TEXTURE_CUBE_MAP,b);for(let Rt=0;Rt<6;Rt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Xt=0;Xt<b.mipmaps.length;Xt++)Dt(j.__webglFramebuffer[Rt][Xt],O,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Xt);else Dt(j.__webglFramebuffer[Rt],O,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);y(b)&&M(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Zt){for(let Rt=0,Xt=St.length;Rt<Xt;Rt++){const ne=St[Rt],yt=s.get(ne);let bt=r.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(bt=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(bt,yt.__webglTexture),at(bt,ne),Dt(j.__webglFramebuffer,O,ne,r.COLOR_ATTACHMENT0+Rt,bt,0),y(ne)&&M(bt)}i.unbindTexture()}else{let Rt=r.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Rt=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Rt,dt.__webglTexture),at(Rt,b),b.mipmaps&&b.mipmaps.length>0)for(let Xt=0;Xt<b.mipmaps.length;Xt++)Dt(j.__webglFramebuffer[Xt],O,b,r.COLOR_ATTACHMENT0,Rt,Xt);else Dt(j.__webglFramebuffer,O,b,r.COLOR_ATTACHMENT0,Rt,0);y(b)&&M(Rt),i.unbindTexture()}O.depthBuffer&&me(O)}function ge(O){const b=O.textures;for(let j=0,dt=b.length;j<dt;j++){const St=b[j];if(y(St)){const ut=w(O),Zt=s.get(St).__webglTexture;i.bindTexture(ut,Zt),M(ut),i.unbindTexture()}}}const we=[],le=[];function tn(O){if(O.samples>0){if(je(O)===!1){const b=O.textures,j=O.width,dt=O.height;let St=r.COLOR_BUFFER_BIT;const ut=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Zt=s.get(O),Rt=b.length>1;if(Rt)for(let ne=0;ne<b.length;ne++)i.bindFramebuffer(r.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Zt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer);const Xt=O.texture.mipmaps;Xt&&Xt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let ne=0;ne<b.length;ne++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(St|=r.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(St|=r.STENCIL_BUFFER_BIT)),Rt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Zt.__webglColorRenderbuffer[ne]);const yt=s.get(b[ne]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,yt,0)}r.blitFramebuffer(0,0,j,dt,0,0,j,dt,St,r.NEAREST),m===!0&&(we.length=0,le.length=0,we.push(r.COLOR_ATTACHMENT0+ne),O.depthBuffer&&O.resolveDepthBuffer===!1&&(we.push(ut),le.push(ut),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,le)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,we))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Rt)for(let ne=0;ne<b.length;ne++){i.bindFramebuffer(r.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.RENDERBUFFER,Zt.__webglColorRenderbuffer[ne]);const yt=s.get(b[ne]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Zt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.TEXTURE_2D,yt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const b=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function k(O){return Math.min(l.maxSamples,O.samples)}function je(O){const b=s.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ee(O){const b=h.render.frame;g.get(O)!==b&&(g.set(O,b),O.update())}function Ne(O,b){const j=O.colorSpace,dt=O.format,St=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||j!==Kr&&j!==os&&(Te.getTransfer(j)===Be?(dt!==Hi||St!==ci)&&ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Re("WebGLTextures: Unsupported texture color space:",j)),b}function Yt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=et,this.resetTextureUnits=Q,this.setTexture2D=G,this.setTexture2DArray=L,this.setTexture3D=B,this.setTextureCube=$,this.rebindTextures=$e,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=tn,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=je,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function $A(r,t){function i(s,l=os){let c;const h=Te.getTransfer(l);if(s===ci)return r.UNSIGNED_BYTE;if(s===yp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Ep)return r.UNSIGNED_SHORT_5_5_5_1;if(s===jv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Zv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===qv)return r.BYTE;if(s===Yv)return r.SHORT;if(s===ll)return r.UNSIGNED_SHORT;if(s===Mp)return r.INT;if(s===Ji)return r.UNSIGNED_INT;if(s===Zi)return r.FLOAT;if(s===Ti)return r.HALF_FLOAT;if(s===Kv)return r.ALPHA;if(s===Qv)return r.RGB;if(s===Hi)return r.RGBA;if(s===Ra)return r.DEPTH_COMPONENT;if(s===Bs)return r.DEPTH_STENCIL;if(s===Jv)return r.RED;if(s===bp)return r.RED_INTEGER;if(s===Zr)return r.RG;if(s===Tp)return r.RG_INTEGER;if(s===Ap)return r.RGBA_INTEGER;if(s===tu||s===eu||s===nu||s===iu)if(h===Be)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===tu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===nu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===iu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===tu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===eu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===nu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===iu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Dd||s===Ud||s===Ld||s===Nd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Dd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ud)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ld)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Nd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Od||s===Pd||s===zd||s===Fd||s===Id||s===Bd||s===Hd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Od||s===Pd)return h===Be?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===zd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Fd)return c.COMPRESSED_R11_EAC;if(s===Id)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Bd)return c.COMPRESSED_RG11_EAC;if(s===Hd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Gd||s===Vd||s===kd||s===Xd||s===Wd||s===qd||s===Yd||s===jd||s===Zd||s===Kd||s===Qd||s===Jd||s===$d||s===tp)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Gd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Vd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===kd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Xd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Wd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===qd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Yd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===jd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Zd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Kd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Qd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Jd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===$d)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===tp)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ep||s===np||s===ip)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===ep)return h===Be?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===np)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ip)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ap||s===sp||s===rp||s===op)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===ap)return c.COMPRESSED_RED_RGTC1_EXT;if(s===sp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===rp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===op)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===cl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const tC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eC=`
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

}`;class nC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new fx(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Qn({vertexShader:tC,fragmentShader:eC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Gi(new gl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class iC extends Vs{constructor(t,i){super();const s=this;let l=null,c=1,h=null,f="local-floor",m=1,p=null,g=null,v=null,_=null,x=null,E=null;const T=typeof XRWebGLBinding<"u",y=new nC,M={},w=i.getContextAttributes();let P=null,U=null;const F=[],I=[],z=new $t;let Y=null;const R=new Ei;R.viewport=new an;const D=new Ei;D.viewport=new an;const V=[R,D],Q=new cE;let et=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ot){let ft=F[ot];return ft===void 0&&(ft=new Jh,F[ot]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(ot){let ft=F[ot];return ft===void 0&&(ft=new Jh,F[ot]=ft),ft.getGripSpace()},this.getHand=function(ot){let ft=F[ot];return ft===void 0&&(ft=new Jh,F[ot]=ft),ft.getHandSpace()};function G(ot){const ft=I.indexOf(ot.inputSource);if(ft===-1)return;const Dt=F[ft];Dt!==void 0&&(Dt.update(ot.inputSource,ot.frame,p||h),Dt.dispatchEvent({type:ot.type,data:ot.inputSource}))}function L(){l.removeEventListener("select",G),l.removeEventListener("selectstart",G),l.removeEventListener("selectend",G),l.removeEventListener("squeeze",G),l.removeEventListener("squeezestart",G),l.removeEventListener("squeezeend",G),l.removeEventListener("end",L),l.removeEventListener("inputsourceschange",B);for(let ot=0;ot<F.length;ot++){const ft=I[ot];ft!==null&&(I[ot]=null,F[ot].disconnect(ft))}et=null,tt=null,y.reset();for(const ot in M)delete M[ot];t.setRenderTarget(P),x=null,_=null,v=null,l=null,U=null,Bt.stop(),s.isPresenting=!1,t.setPixelRatio(Y),t.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ot){c=ot,s.isPresenting===!0&&ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ot){f=ot,s.isPresenting===!0&&ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(ot){p=ot},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return v===null&&T&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(ot){if(l=ot,l!==null){if(P=t.getRenderTarget(),l.addEventListener("select",G),l.addEventListener("selectstart",G),l.addEventListener("selectend",G),l.addEventListener("squeeze",G),l.addEventListener("squeezestart",G),l.addEventListener("squeezeend",G),l.addEventListener("end",L),l.addEventListener("inputsourceschange",B),w.xrCompatible!==!0&&await i.makeXRCompatible(),Y=t.getPixelRatio(),t.getSize(z),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Dt=null,kt=null,Ht=null;w.depth&&(Ht=w.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Dt=w.stencil?Bs:Ra,kt=w.stencil?cl:Ji);const me={colorFormat:i.RGBA8,depthFormat:Ht,scaleFactor:c};v=this.getBinding(),_=v.createProjectionLayer(me),l.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),U=new ui(_.textureWidth,_.textureHeight,{format:Hi,type:ci,depthTexture:new fl(_.textureWidth,_.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,Dt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Dt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(l,i,Dt),l.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),U=new ui(x.framebufferWidth,x.framebufferHeight,{format:Hi,type:ci,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(f),Bt.setContext(l),Bt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function B(ot){for(let ft=0;ft<ot.removed.length;ft++){const Dt=ot.removed[ft],kt=I.indexOf(Dt);kt>=0&&(I[kt]=null,F[kt].disconnect(Dt))}for(let ft=0;ft<ot.added.length;ft++){const Dt=ot.added[ft];let kt=I.indexOf(Dt);if(kt===-1){for(let me=0;me<F.length;me++)if(me>=I.length){I.push(Dt),kt=me;break}else if(I[me]===null){I[me]=Dt,kt=me;break}if(kt===-1)break}const Ht=F[kt];Ht&&Ht.connect(Dt)}}const $=new q,xt=new q;function vt(ot,ft,Dt){$.setFromMatrixPosition(ft.matrixWorld),xt.setFromMatrixPosition(Dt.matrixWorld);const kt=$.distanceTo(xt),Ht=ft.projectionMatrix.elements,me=Dt.projectionMatrix.elements,$e=Ht[14]/(Ht[10]-1),xe=Ht[14]/(Ht[10]+1),ge=(Ht[9]+1)/Ht[5],we=(Ht[9]-1)/Ht[5],le=(Ht[8]-1)/Ht[0],tn=(me[8]+1)/me[0],k=$e*le,je=$e*tn,Ee=kt/(-le+tn),Ne=Ee*-le;if(ft.matrixWorld.decompose(ot.position,ot.quaternion,ot.scale),ot.translateX(Ne),ot.translateZ(Ee),ot.matrixWorld.compose(ot.position,ot.quaternion,ot.scale),ot.matrixWorldInverse.copy(ot.matrixWorld).invert(),Ht[10]===-1)ot.projectionMatrix.copy(ft.projectionMatrix),ot.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const Yt=$e+Ee,O=xe+Ee,b=k-Ne,j=je+(kt-Ne),dt=ge*xe/O*Yt,St=we*xe/O*Yt;ot.projectionMatrix.makePerspective(b,j,dt,St,Yt,O),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert()}}function N(ot,ft){ft===null?ot.matrixWorld.copy(ot.matrix):ot.matrixWorld.multiplyMatrices(ft.matrixWorld,ot.matrix),ot.matrixWorldInverse.copy(ot.matrixWorld).invert()}this.updateCamera=function(ot){if(l===null)return;let ft=ot.near,Dt=ot.far;y.texture!==null&&(y.depthNear>0&&(ft=y.depthNear),y.depthFar>0&&(Dt=y.depthFar)),Q.near=D.near=R.near=ft,Q.far=D.far=R.far=Dt,(et!==Q.near||tt!==Q.far)&&(l.updateRenderState({depthNear:Q.near,depthFar:Q.far}),et=Q.near,tt=Q.far),Q.layers.mask=ot.layers.mask|6,R.layers.mask=Q.layers.mask&3,D.layers.mask=Q.layers.mask&5;const kt=ot.parent,Ht=Q.cameras;N(Q,kt);for(let me=0;me<Ht.length;me++)N(Ht[me],kt);Ht.length===2?vt(Q,R,D):Q.projectionMatrix.copy(R.projectionMatrix),at(ot,Q,kt)};function at(ot,ft,Dt){Dt===null?ot.matrix.copy(ft.matrixWorld):(ot.matrix.copy(Dt.matrixWorld),ot.matrix.invert(),ot.matrix.multiply(ft.matrixWorld)),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.updateMatrixWorld(!0),ot.projectionMatrix.copy(ft.projectionMatrix),ot.projectionMatrixInverse.copy(ft.projectionMatrixInverse),ot.isPerspectiveCamera&&(ot.fov=lp*2*Math.atan(1/ot.projectionMatrix.elements[5]),ot.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(_===null&&x===null))return m},this.setFoveation=function(ot){m=ot,_!==null&&(_.fixedFoveation=ot),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=ot)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Q)},this.getCameraTexture=function(ot){return M[ot]};let gt=null;function At(ot,ft){if(g=ft.getViewerPose(p||h),E=ft,g!==null){const Dt=g.views;x!==null&&(t.setRenderTargetFramebuffer(U,x.framebuffer),t.setRenderTarget(U));let kt=!1;Dt.length!==Q.cameras.length&&(Q.cameras.length=0,kt=!0);for(let xe=0;xe<Dt.length;xe++){const ge=Dt[xe];let we=null;if(x!==null)we=x.getViewport(ge);else{const tn=v.getViewSubImage(_,ge);we=tn.viewport,xe===0&&(t.setRenderTargetTextures(U,tn.colorTexture,tn.depthStencilTexture),t.setRenderTarget(U))}let le=V[xe];le===void 0&&(le=new Ei,le.layers.enable(xe),le.viewport=new an,V[xe]=le),le.matrix.fromArray(ge.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(ge.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(we.x,we.y,we.width,we.height),xe===0&&(Q.matrix.copy(le.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),kt===!0&&Q.cameras.push(le)}const Ht=l.enabledFeatures;if(Ht&&Ht.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){v=s.getBinding();const xe=v.getDepthInformation(Dt[0]);xe&&xe.isValid&&xe.texture&&y.init(xe,l.renderState)}if(Ht&&Ht.includes("camera-access")&&T){t.state.unbindTexture(),v=s.getBinding();for(let xe=0;xe<Dt.length;xe++){const ge=Dt[xe].camera;if(ge){let we=M[ge];we||(we=new fx,M[ge]=we);const le=v.getCameraImage(ge);we.sourceTexture=le}}}}for(let Dt=0;Dt<F.length;Dt++){const kt=I[Dt],Ht=F[Dt];kt!==null&&Ht!==void 0&&Ht.update(kt,ft,p||h)}gt&&gt(ot,ft),ft.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ft}),E=null}const Bt=new mx;Bt.setAnimationLoop(At),this.setAnimationLoop=function(ot){gt=ot},this.dispose=function(){}}}const Ps=new $i,aC=new Je;function sC(r,t){function i(y,M){y.matrixAutoUpdate===!0&&y.updateMatrix(),M.value.copy(y.matrix)}function s(y,M){M.color.getRGB(y.fogColor.value,rx(r)),M.isFog?(y.fogNear.value=M.near,y.fogFar.value=M.far):M.isFogExp2&&(y.fogDensity.value=M.density)}function l(y,M,w,P,U){M.isMeshBasicMaterial||M.isMeshLambertMaterial?c(y,M):M.isMeshToonMaterial?(c(y,M),v(y,M)):M.isMeshPhongMaterial?(c(y,M),g(y,M)):M.isMeshStandardMaterial?(c(y,M),_(y,M),M.isMeshPhysicalMaterial&&x(y,M,U)):M.isMeshMatcapMaterial?(c(y,M),E(y,M)):M.isMeshDepthMaterial?c(y,M):M.isMeshDistanceMaterial?(c(y,M),T(y,M)):M.isMeshNormalMaterial?c(y,M):M.isLineBasicMaterial?(h(y,M),M.isLineDashedMaterial&&f(y,M)):M.isPointsMaterial?m(y,M,w,P):M.isSpriteMaterial?p(y,M):M.isShadowMaterial?(y.color.value.copy(M.color),y.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function c(y,M){y.opacity.value=M.opacity,M.color&&y.diffuse.value.copy(M.color),M.emissive&&y.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(y.map.value=M.map,i(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.bumpMap&&(y.bumpMap.value=M.bumpMap,i(M.bumpMap,y.bumpMapTransform),y.bumpScale.value=M.bumpScale,M.side===Jn&&(y.bumpScale.value*=-1)),M.normalMap&&(y.normalMap.value=M.normalMap,i(M.normalMap,y.normalMapTransform),y.normalScale.value.copy(M.normalScale),M.side===Jn&&y.normalScale.value.negate()),M.displacementMap&&(y.displacementMap.value=M.displacementMap,i(M.displacementMap,y.displacementMapTransform),y.displacementScale.value=M.displacementScale,y.displacementBias.value=M.displacementBias),M.emissiveMap&&(y.emissiveMap.value=M.emissiveMap,i(M.emissiveMap,y.emissiveMapTransform)),M.specularMap&&(y.specularMap.value=M.specularMap,i(M.specularMap,y.specularMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest);const w=t.get(M),P=w.envMap,U=w.envMapRotation;P&&(y.envMap.value=P,Ps.copy(U),Ps.x*=-1,Ps.y*=-1,Ps.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Ps.y*=-1,Ps.z*=-1),y.envMapRotation.value.setFromMatrix4(aC.makeRotationFromEuler(Ps)),y.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=M.reflectivity,y.ior.value=M.ior,y.refractionRatio.value=M.refractionRatio),M.lightMap&&(y.lightMap.value=M.lightMap,y.lightMapIntensity.value=M.lightMapIntensity,i(M.lightMap,y.lightMapTransform)),M.aoMap&&(y.aoMap.value=M.aoMap,y.aoMapIntensity.value=M.aoMapIntensity,i(M.aoMap,y.aoMapTransform))}function h(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,M.map&&(y.map.value=M.map,i(M.map,y.mapTransform))}function f(y,M){y.dashSize.value=M.dashSize,y.totalSize.value=M.dashSize+M.gapSize,y.scale.value=M.scale}function m(y,M,w,P){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.size.value=M.size*w,y.scale.value=P*.5,M.map&&(y.map.value=M.map,i(M.map,y.uvTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function p(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.rotation.value=M.rotation,M.map&&(y.map.value=M.map,i(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function g(y,M){y.specular.value.copy(M.specular),y.shininess.value=Math.max(M.shininess,1e-4)}function v(y,M){M.gradientMap&&(y.gradientMap.value=M.gradientMap)}function _(y,M){y.metalness.value=M.metalness,M.metalnessMap&&(y.metalnessMap.value=M.metalnessMap,i(M.metalnessMap,y.metalnessMapTransform)),y.roughness.value=M.roughness,M.roughnessMap&&(y.roughnessMap.value=M.roughnessMap,i(M.roughnessMap,y.roughnessMapTransform)),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)}function x(y,M,w){y.ior.value=M.ior,M.sheen>0&&(y.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),y.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(y.sheenColorMap.value=M.sheenColorMap,i(M.sheenColorMap,y.sheenColorMapTransform)),M.sheenRoughnessMap&&(y.sheenRoughnessMap.value=M.sheenRoughnessMap,i(M.sheenRoughnessMap,y.sheenRoughnessMapTransform))),M.clearcoat>0&&(y.clearcoat.value=M.clearcoat,y.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(y.clearcoatMap.value=M.clearcoatMap,i(M.clearcoatMap,y.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,i(M.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(y.clearcoatNormalMap.value=M.clearcoatNormalMap,i(M.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===Jn&&y.clearcoatNormalScale.value.negate())),M.dispersion>0&&(y.dispersion.value=M.dispersion),M.iridescence>0&&(y.iridescence.value=M.iridescence,y.iridescenceIOR.value=M.iridescenceIOR,y.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(y.iridescenceMap.value=M.iridescenceMap,i(M.iridescenceMap,y.iridescenceMapTransform)),M.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=M.iridescenceThicknessMap,i(M.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),M.transmission>0&&(y.transmission.value=M.transmission,y.transmissionSamplerMap.value=w.texture,y.transmissionSamplerSize.value.set(w.width,w.height),M.transmissionMap&&(y.transmissionMap.value=M.transmissionMap,i(M.transmissionMap,y.transmissionMapTransform)),y.thickness.value=M.thickness,M.thicknessMap&&(y.thicknessMap.value=M.thicknessMap,i(M.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=M.attenuationDistance,y.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(y.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(y.anisotropyMap.value=M.anisotropyMap,i(M.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=M.specularIntensity,y.specularColor.value.copy(M.specularColor),M.specularColorMap&&(y.specularColorMap.value=M.specularColorMap,i(M.specularColorMap,y.specularColorMapTransform)),M.specularIntensityMap&&(y.specularIntensityMap.value=M.specularIntensityMap,i(M.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,M){M.matcap&&(y.matcap.value=M.matcap)}function T(y,M){const w=t.get(M).light;y.referencePosition.value.setFromMatrixPosition(w.matrixWorld),y.nearDistance.value=w.shadow.camera.near,y.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function rC(r,t,i,s){let l={},c={},h=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,P){const U=P.program;s.uniformBlockBinding(w,U)}function p(w,P){let U=l[w.id];U===void 0&&(E(w),U=g(w),l[w.id]=U,w.addEventListener("dispose",y));const F=P.program;s.updateUBOMapping(w,F);const I=t.render.frame;c[w.id]!==I&&(_(w),c[w.id]=I)}function g(w){const P=v();w.__bindingPointIndex=P;const U=r.createBuffer(),F=w.__size,I=w.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,F,I),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,P,U),U}function v(){for(let w=0;w<f;w++)if(h.indexOf(w)===-1)return h.push(w),w;return Re("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(w){const P=l[w.id],U=w.uniforms,F=w.__cache;r.bindBuffer(r.UNIFORM_BUFFER,P);for(let I=0,z=U.length;I<z;I++){const Y=Array.isArray(U[I])?U[I]:[U[I]];for(let R=0,D=Y.length;R<D;R++){const V=Y[R];if(x(V,I,R,F)===!0){const Q=V.__offset,et=Array.isArray(V.value)?V.value:[V.value];let tt=0;for(let G=0;G<et.length;G++){const L=et[G],B=T(L);typeof L=="number"||typeof L=="boolean"?(V.__data[0]=L,r.bufferSubData(r.UNIFORM_BUFFER,Q+tt,V.__data)):L.isMatrix3?(V.__data[0]=L.elements[0],V.__data[1]=L.elements[1],V.__data[2]=L.elements[2],V.__data[3]=0,V.__data[4]=L.elements[3],V.__data[5]=L.elements[4],V.__data[6]=L.elements[5],V.__data[7]=0,V.__data[8]=L.elements[6],V.__data[9]=L.elements[7],V.__data[10]=L.elements[8],V.__data[11]=0):(L.toArray(V.__data,tt),tt+=B.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Q,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(w,P,U,F){const I=w.value,z=P+"_"+U;if(F[z]===void 0)return typeof I=="number"||typeof I=="boolean"?F[z]=I:F[z]=I.clone(),!0;{const Y=F[z];if(typeof I=="number"||typeof I=="boolean"){if(Y!==I)return F[z]=I,!0}else if(Y.equals(I)===!1)return Y.copy(I),!0}return!1}function E(w){const P=w.uniforms;let U=0;const F=16;for(let z=0,Y=P.length;z<Y;z++){const R=Array.isArray(P[z])?P[z]:[P[z]];for(let D=0,V=R.length;D<V;D++){const Q=R[D],et=Array.isArray(Q.value)?Q.value:[Q.value];for(let tt=0,G=et.length;tt<G;tt++){const L=et[tt],B=T(L),$=U%F,xt=$%B.boundary,vt=$+xt;U+=xt,vt!==0&&F-vt<B.storage&&(U+=F-vt),Q.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=U,U+=B.storage}}}const I=U%F;return I>0&&(U+=F-I),w.__size=U,w.__cache={},this}function T(w){const P={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(P.boundary=4,P.storage=4):w.isVector2?(P.boundary=8,P.storage=8):w.isVector3||w.isColor?(P.boundary=16,P.storage=12):w.isVector4?(P.boundary=16,P.storage=16):w.isMatrix3?(P.boundary=48,P.storage=48):w.isMatrix4?(P.boundary=64,P.storage=64):w.isTexture?ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ie("WebGLRenderer: Unsupported uniform value type.",w),P}function y(w){const P=w.target;P.removeEventListener("dispose",y);const U=h.indexOf(P.__bindingPointIndex);h.splice(U,1),r.deleteBuffer(l[P.id]),delete l[P.id],delete c[P.id]}function M(){for(const w in l)r.deleteBuffer(l[w]);h=[],l={},c={}}return{bind:m,update:p,dispose:M}}const oC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Yi=null;function lC(){return Yi===null&&(Yi=new Ky(oC,16,16,Zr,Ti),Yi.name="DFG_LUT",Yi.minFilter=In,Yi.magFilter=In,Yi.wrapS=Ta,Yi.wrapT=Ta,Yi.generateMipmaps=!1,Yi.needsUpdate=!0),Yi}class cC{constructor(t={}){const{canvas:i=Ey(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:f=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:x=ci}=t;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=h;const T=x,y=new Set([Ap,Tp,bp]),M=new Set([ci,Ji,ll,cl,yp,Ep]),w=new Uint32Array(4),P=new Int32Array(4);let U=null,F=null;const I=[],z=[];let Y=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let D=!1;this._outputColorSpace=yi;let V=0,Q=0,et=null,tt=-1,G=null;const L=new an,B=new an;let $=null;const xt=new ue(0);let vt=0,N=i.width,at=i.height,gt=1,At=null,Bt=null;const ot=new an(0,0,N,at),ft=new an(0,0,N,at);let Dt=!1;const kt=new Np;let Ht=!1,me=!1;const $e=new Je,xe=new q,ge=new an,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let le=!1;function tn(){return et===null?gt:1}let k=s;function je(C,Z){return i.getContext(C,Z)}try{const C={alpha:!0,depth:l,stencil:c,antialias:f,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${xp}`),i.addEventListener("webglcontextlost",ae,!1),i.addEventListener("webglcontextrestored",Pe,!1),i.addEventListener("webglcontextcreationerror",be,!1),k===null){const Z="webgl2";if(k=je(Z,C),k===null)throw je(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Re("WebGLRenderer: "+C.message),C}let Ee,Ne,Yt,O,b,j,dt,St,ut,Zt,Rt,Xt,ne,yt,bt,Ft,Pt,wt,fe,W,Lt,Tt,zt,Mt;function _t(){Ee=new l1(k),Ee.init(),Tt=new $A(k,Ee),Ne=new $T(k,Ee,t,Tt),Yt=new QA(k,Ee),Ne.reversedDepthBuffer&&_&&Yt.buffers.depth.setReversed(!0),O=new f1(k),b=new zA,j=new JA(k,Ee,Yt,b,Ne,Tt,O),dt=new e1(R),St=new o1(R),ut=new mE(k),zt=new QT(k,ut),Zt=new c1(k,ut,O,zt),Rt=new d1(k,Zt,ut,O),fe=new h1(k,Ne,j),Ft=new t1(b),Xt=new PA(R,dt,St,Ee,Ne,zt,Ft),ne=new sC(R,b),yt=new IA,bt=new XA(Ee),wt=new KT(R,dt,St,Yt,Rt,E,m),Pt=new ZA(R,Rt,Ne),Mt=new rC(k,O,Ne,Yt),W=new JT(k,Ee,O),Lt=new u1(k,Ee,O),O.programs=Xt.programs,R.capabilities=Ne,R.extensions=Ee,R.properties=b,R.renderLists=yt,R.shadowMap=Pt,R.state=Yt,R.info=O}_t(),T!==ci&&(Y=new m1(T,i.width,i.height,l,c));const Ct=new iC(R,k);this.xr=Ct,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const C=Ee.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ee.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(C){C!==void 0&&(gt=C,this.setSize(N,at,!1))},this.getSize=function(C){return C.set(N,at)},this.setSize=function(C,Z,lt=!0){if(Ct.isPresenting){ie("WebGLRenderer: Can't change size while VR device is presenting.");return}N=C,at=Z,i.width=Math.floor(C*gt),i.height=Math.floor(Z*gt),lt===!0&&(i.style.width=C+"px",i.style.height=Z+"px"),Y!==null&&Y.setSize(i.width,i.height),this.setViewport(0,0,C,Z)},this.getDrawingBufferSize=function(C){return C.set(N*gt,at*gt).floor()},this.setDrawingBufferSize=function(C,Z,lt){N=C,at=Z,gt=lt,i.width=Math.floor(C*lt),i.height=Math.floor(Z*lt),this.setViewport(0,0,C,Z)},this.setEffects=function(C){if(T===ci){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let Z=0;Z<C.length;Z++)if(C[Z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Y.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(L)},this.getViewport=function(C){return C.copy(ot)},this.setViewport=function(C,Z,lt,st){C.isVector4?ot.set(C.x,C.y,C.z,C.w):ot.set(C,Z,lt,st),Yt.viewport(L.copy(ot).multiplyScalar(gt).round())},this.getScissor=function(C){return C.copy(ft)},this.setScissor=function(C,Z,lt,st){C.isVector4?ft.set(C.x,C.y,C.z,C.w):ft.set(C,Z,lt,st),Yt.scissor(B.copy(ft).multiplyScalar(gt).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(C){Yt.setScissorTest(Dt=C)},this.setOpaqueSort=function(C){At=C},this.setTransparentSort=function(C){Bt=C},this.getClearColor=function(C){return C.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor(...arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha(...arguments)},this.clear=function(C=!0,Z=!0,lt=!0){let st=0;if(C){let J=!1;if(et!==null){const Ut=et.texture.format;J=y.has(Ut)}if(J){const Ut=et.texture.type,It=M.has(Ut),Nt=wt.getClearColor(),Gt=wt.getClearAlpha(),Wt=Nt.r,Jt=Nt.g,qt=Nt.b;It?(w[0]=Wt,w[1]=Jt,w[2]=qt,w[3]=Gt,k.clearBufferuiv(k.COLOR,0,w)):(P[0]=Wt,P[1]=Jt,P[2]=qt,P[3]=Gt,k.clearBufferiv(k.COLOR,0,P))}else st|=k.COLOR_BUFFER_BIT}Z&&(st|=k.DEPTH_BUFFER_BIT),lt&&(st|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ae,!1),i.removeEventListener("webglcontextrestored",Pe,!1),i.removeEventListener("webglcontextcreationerror",be,!1),wt.dispose(),yt.dispose(),bt.dispose(),b.dispose(),dt.dispose(),St.dispose(),Rt.dispose(),zt.dispose(),Mt.dispose(),Xt.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",Xs),Ct.removeEventListener("sessionend",io),Vi.stop()};function ae(C){C.preventDefault(),L_("WebGLRenderer: Context Lost."),D=!0}function Pe(){L_("WebGLRenderer: Context Restored."),D=!1;const C=O.autoReset,Z=Pt.enabled,lt=Pt.autoUpdate,st=Pt.needsUpdate,J=Pt.type;_t(),O.autoReset=C,Pt.enabled=Z,Pt.autoUpdate=lt,Pt.needsUpdate=st,Pt.type=J}function be(C){Re("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function On(C){const Z=C.target;Z.removeEventListener("dispose",On),Ci(Z)}function Ci(C){_l(C),b.remove(C)}function _l(C){const Z=b.get(C).programs;Z!==void 0&&(Z.forEach(function(lt){Xt.releaseProgram(lt)}),C.isShaderMaterial&&Xt.releaseShaderCache(C))}this.renderBufferDirect=function(C,Z,lt,st,J,Ut){Z===null&&(Z=we);const It=J.isMesh&&J.matrixWorld.determinant()<0,Nt=hs(C,Z,lt,st,J);Yt.setMaterial(st,It);let Gt=lt.index,Wt=1;if(st.wireframe===!0){if(Gt=Zt.getWireframeAttribute(lt),Gt===void 0)return;Wt=2}const Jt=lt.drawRange,qt=lt.attributes.position;let te=Jt.start*Wt,De=(Jt.start+Jt.count)*Wt;Ut!==null&&(te=Math.max(te,Ut.start*Wt),De=Math.min(De,(Ut.start+Ut.count)*Wt)),Gt!==null?(te=Math.max(te,0),De=Math.min(De,Gt.count)):qt!=null&&(te=Math.max(te,0),De=Math.min(De,qt.count));const Ze=De-te;if(Ze<0||Ze===1/0)return;zt.setup(J,st,Nt,lt,Gt);let We,Oe=W;if(Gt!==null&&(We=ut.get(Gt),Oe=Lt,Oe.setIndex(We)),J.isMesh)st.wireframe===!0?(Yt.setLineWidth(st.wireframeLinewidth*tn()),Oe.setMode(k.LINES)):Oe.setMode(k.TRIANGLES);else if(J.isLine){let Kt=st.linewidth;Kt===void 0&&(Kt=1),Yt.setLineWidth(Kt*tn()),J.isLineSegments?Oe.setMode(k.LINES):J.isLineLoop?Oe.setMode(k.LINE_LOOP):Oe.setMode(k.LINE_STRIP)}else J.isPoints?Oe.setMode(k.POINTS):J.isSprite&&Oe.setMode(k.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)ul("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Oe.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(Ee.get("WEBGL_multi_draw"))Oe.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Kt=J._multiDrawStarts,Ue=J._multiDrawCounts,se=J._multiDrawCount,En=Gt?ut.get(Gt).bytesPerElement:1,ta=b.get(st).currentProgram.getUniforms();for(let bn=0;bn<se;bn++)ta.setValue(k,"_gl_DrawID",bn),Oe.render(Kt[bn]/En,Ue[bn])}else if(J.isInstancedMesh)Oe.renderInstances(te,Ze,J.count);else if(lt.isInstancedBufferGeometry){const Kt=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Ue=Math.min(lt.instanceCount,Kt);Oe.renderInstances(te,Ze,Ue)}else Oe.render(te,Ze)};function eo(C,Z,lt){C.transparent===!0&&C.side===Bi&&C.forceSinglePass===!1?(C.side=Jn,C.needsUpdate=!0,qs(C,Z,lt),C.side=us,C.needsUpdate=!0,qs(C,Z,lt),C.side=Bi):qs(C,Z,lt)}this.compile=function(C,Z,lt=null){lt===null&&(lt=C),F=bt.get(lt),F.init(Z),z.push(F),lt.traverseVisible(function(J){J.isLight&&J.layers.test(Z.layers)&&(F.pushLight(J),J.castShadow&&F.pushShadow(J))}),C!==lt&&C.traverseVisible(function(J){J.isLight&&J.layers.test(Z.layers)&&(F.pushLight(J),J.castShadow&&F.pushShadow(J))}),F.setupLights();const st=new Set;return C.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Ut=J.material;if(Ut)if(Array.isArray(Ut))for(let It=0;It<Ut.length;It++){const Nt=Ut[It];eo(Nt,lt,J),st.add(Nt)}else eo(Ut,lt,J),st.add(Ut)}),F=z.pop(),st},this.compileAsync=function(C,Z,lt=null){const st=this.compile(C,Z,lt);return new Promise(J=>{function Ut(){if(st.forEach(function(It){b.get(It).currentProgram.isReady()&&st.delete(It)}),st.size===0){J(C);return}setTimeout(Ut,10)}Ee.get("KHR_parallel_shader_compile")!==null?Ut():setTimeout(Ut,10)})};let ks=null;function no(C){ks&&ks(C)}function Xs(){Vi.stop()}function io(){Vi.start()}const Vi=new mx;Vi.setAnimationLoop(no),typeof self<"u"&&Vi.setContext(self),this.setAnimationLoop=function(C){ks=C,Ct.setAnimationLoop(C),C===null?Vi.stop():Vi.start()},Ct.addEventListener("sessionstart",Xs),Ct.addEventListener("sessionend",io),this.render=function(C,Z){if(Z!==void 0&&Z.isCamera!==!0){Re("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;const lt=Ct.enabled===!0&&Ct.isPresenting===!0,st=Y!==null&&(et===null||lt)&&Y.begin(R,et);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(Y===null||Y.isCompositing()===!1)&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(Z),Z=Ct.getCamera()),C.isScene===!0&&C.onBeforeRender(R,C,Z,et),F=bt.get(C,z.length),F.init(Z),z.push(F),$e.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),kt.setFromProjectionMatrix($e,Ki,Z.reversedDepth),me=this.localClippingEnabled,Ht=Ft.init(this.clippingPlanes,me),U=yt.get(C,I.length),U.init(),I.push(U),Ct.enabled===!0&&Ct.isPresenting===!0){const It=R.xr.getDepthSensingMesh();It!==null&&fi(It,Z,-1/0,R.sortObjects)}fi(C,Z,0,R.sortObjects),U.finish(),R.sortObjects===!0&&U.sort(At,Bt),le=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,le&&wt.addToRenderList(U,C),this.info.render.frame++,Ht===!0&&Ft.beginShadows();const J=F.state.shadowsArray;if(Pt.render(J,C,Z),Ht===!0&&Ft.endShadows(),this.info.autoReset===!0&&this.info.reset(),(st&&Y.hasRenderPass())===!1){const It=U.opaque,Nt=U.transmissive;if(F.setupLights(),Z.isArrayCamera){const Gt=Z.cameras;if(Nt.length>0)for(let Wt=0,Jt=Gt.length;Wt<Jt;Wt++){const qt=Gt[Wt];yn(It,Nt,C,qt)}le&&wt.render(C);for(let Wt=0,Jt=Gt.length;Wt<Jt;Wt++){const qt=Gt[Wt];ln(U,C,qt,qt.viewport)}}else Nt.length>0&&yn(It,Nt,C,Z),le&&wt.render(C),ln(U,C,Z)}et!==null&&Q===0&&(j.updateMultisampleRenderTarget(et),j.updateRenderTargetMipmap(et)),st&&Y.end(R),C.isScene===!0&&C.onAfterRender(R,C,Z),zt.resetDefaultState(),tt=-1,G=null,z.pop(),z.length>0?(F=z[z.length-1],Ht===!0&&Ft.setGlobalState(R.clippingPlanes,F.state.camera)):F=null,I.pop(),I.length>0?U=I[I.length-1]:U=null};function fi(C,Z,lt,st){if(C.visible===!1)return;if(C.layers.test(Z.layers)){if(C.isGroup)lt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Z);else if(C.isLight)F.pushLight(C),C.castShadow&&F.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||kt.intersectsSprite(C)){st&&ge.setFromMatrixPosition(C.matrixWorld).applyMatrix4($e);const It=Rt.update(C),Nt=C.material;Nt.visible&&U.push(C,It,Nt,lt,ge.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||kt.intersectsObject(C))){const It=Rt.update(C),Nt=C.material;if(st&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ge.copy(C.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),ge.copy(It.boundingSphere.center)),ge.applyMatrix4(C.matrixWorld).applyMatrix4($e)),Array.isArray(Nt)){const Gt=It.groups;for(let Wt=0,Jt=Gt.length;Wt<Jt;Wt++){const qt=Gt[Wt],te=Nt[qt.materialIndex];te&&te.visible&&U.push(C,It,te,lt,ge.z,qt)}}else Nt.visible&&U.push(C,It,Nt,lt,ge.z,null)}}const Ut=C.children;for(let It=0,Nt=Ut.length;It<Nt;It++)fi(Ut[It],Z,lt,st)}function ln(C,Z,lt,st){const{opaque:J,transmissive:Ut,transparent:It}=C;F.setupLightsView(lt),Ht===!0&&Ft.setGlobalState(R.clippingPlanes,lt),st&&Yt.viewport(L.copy(st)),J.length>0&&Ri(J,Z,lt),Ut.length>0&&Ri(Ut,Z,lt),It.length>0&&Ri(It,Z,lt),Yt.buffers.depth.setTest(!0),Yt.buffers.depth.setMask(!0),Yt.buffers.color.setMask(!0),Yt.setPolygonOffset(!1)}function yn(C,Z,lt,st){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[st.id]===void 0){const te=Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[st.id]=new ui(1,1,{generateMipmaps:!0,type:te?Ti:ci,minFilter:Is,samples:Ne.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace})}const Ut=F.state.transmissionRenderTarget[st.id],It=st.viewport||L;Ut.setSize(It.z*R.transmissionResolutionScale,It.w*R.transmissionResolutionScale);const Nt=R.getRenderTarget(),Gt=R.getActiveCubeFace(),Wt=R.getActiveMipmapLevel();R.setRenderTarget(Ut),R.getClearColor(xt),vt=R.getClearAlpha(),vt<1&&R.setClearColor(16777215,.5),R.clear(),le&&wt.render(lt);const Jt=R.toneMapping;R.toneMapping=Qi;const qt=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),F.setupLightsView(st),Ht===!0&&Ft.setGlobalState(R.clippingPlanes,st),Ri(C,lt,st),j.updateMultisampleRenderTarget(Ut),j.updateRenderTargetMipmap(Ut),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let De=0,Ze=Z.length;De<Ze;De++){const We=Z[De],{object:Oe,geometry:Kt,material:Ue,group:se}=We;if(Ue.side===Bi&&Oe.layers.test(st.layers)){const En=Ue.side;Ue.side=Jn,Ue.needsUpdate=!0,Ws(Oe,lt,st,Kt,Ue,se),Ue.side=En,Ue.needsUpdate=!0,te=!0}}te===!0&&(j.updateMultisampleRenderTarget(Ut),j.updateRenderTargetMipmap(Ut))}R.setRenderTarget(Nt,Gt,Wt),R.setClearColor(xt,vt),qt!==void 0&&(st.viewport=qt),R.toneMapping=Jt}function Ri(C,Z,lt){const st=Z.isScene===!0?Z.overrideMaterial:null;for(let J=0,Ut=C.length;J<Ut;J++){const It=C[J],{object:Nt,geometry:Gt,group:Wt}=It;let Jt=It.material;Jt.allowOverride===!0&&st!==null&&(Jt=st),Nt.layers.test(lt.layers)&&Ws(Nt,Z,lt,Gt,Jt,Wt)}}function Ws(C,Z,lt,st,J,Ut){C.onBeforeRender(R,Z,lt,st,J,Ut),C.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),J.onBeforeRender(R,Z,lt,st,C,Ut),J.transparent===!0&&J.side===Bi&&J.forceSinglePass===!1?(J.side=Jn,J.needsUpdate=!0,R.renderBufferDirect(lt,Z,st,J,C,Ut),J.side=us,J.needsUpdate=!0,R.renderBufferDirect(lt,Z,st,J,C,Ut),J.side=Bi):R.renderBufferDirect(lt,Z,st,J,C,Ut),C.onAfterRender(R,Z,lt,st,J,Ut)}function qs(C,Z,lt){Z.isScene!==!0&&(Z=we);const st=b.get(C),J=F.state.lights,Ut=F.state.shadowsArray,It=J.state.version,Nt=Xt.getParameters(C,J.state,Ut,Z,lt),Gt=Xt.getProgramCacheKey(Nt);let Wt=st.programs;st.environment=C.isMeshStandardMaterial?Z.environment:null,st.fog=Z.fog,st.envMap=(C.isMeshStandardMaterial?St:dt).get(C.envMap||st.environment),st.envMapRotation=st.environment!==null&&C.envMap===null?Z.environmentRotation:C.envMapRotation,Wt===void 0&&(C.addEventListener("dispose",On),Wt=new Map,st.programs=Wt);let Jt=Wt.get(Gt);if(Jt!==void 0){if(st.currentProgram===Jt&&st.lightsStateVersion===It)return ao(C,Nt),Jt}else Nt.uniforms=Xt.getUniforms(C),C.onBeforeCompile(Nt,R),Jt=Xt.acquireProgram(Nt,Gt),Wt.set(Gt,Jt),st.uniforms=Nt.uniforms;const qt=st.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(qt.clippingPlanes=Ft.uniform),ao(C,Nt),st.needsLights=wa(C),st.lightsStateVersion=It,st.needsLights&&(qt.ambientLightColor.value=J.state.ambient,qt.lightProbe.value=J.state.probe,qt.directionalLights.value=J.state.directional,qt.directionalLightShadows.value=J.state.directionalShadow,qt.spotLights.value=J.state.spot,qt.spotLightShadows.value=J.state.spotShadow,qt.rectAreaLights.value=J.state.rectArea,qt.ltc_1.value=J.state.rectAreaLTC1,qt.ltc_2.value=J.state.rectAreaLTC2,qt.pointLights.value=J.state.point,qt.pointLightShadows.value=J.state.pointShadow,qt.hemisphereLights.value=J.state.hemi,qt.directionalShadowMap.value=J.state.directionalShadowMap,qt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,qt.spotShadowMap.value=J.state.spotShadowMap,qt.spotLightMatrix.value=J.state.spotLightMatrix,qt.spotLightMap.value=J.state.spotLightMap,qt.pointShadowMap.value=J.state.pointShadowMap,qt.pointShadowMatrix.value=J.state.pointShadowMatrix),st.currentProgram=Jt,st.uniformsList=null,Jt}function vl(C){if(C.uniformsList===null){const Z=C.currentProgram.getUniforms();C.uniformsList=su.seqWithValue(Z.seq,C.uniforms)}return C.uniformsList}function ao(C,Z){const lt=b.get(C);lt.outputColorSpace=Z.outputColorSpace,lt.batching=Z.batching,lt.batchingColor=Z.batchingColor,lt.instancing=Z.instancing,lt.instancingColor=Z.instancingColor,lt.instancingMorph=Z.instancingMorph,lt.skinning=Z.skinning,lt.morphTargets=Z.morphTargets,lt.morphNormals=Z.morphNormals,lt.morphColors=Z.morphColors,lt.morphTargetsCount=Z.morphTargetsCount,lt.numClippingPlanes=Z.numClippingPlanes,lt.numIntersection=Z.numClipIntersection,lt.vertexAlphas=Z.vertexAlphas,lt.vertexTangents=Z.vertexTangents,lt.toneMapping=Z.toneMapping}function hs(C,Z,lt,st,J){Z.isScene!==!0&&(Z=we),j.resetTextureUnits();const Ut=Z.fog,It=st.isMeshStandardMaterial?Z.environment:null,Nt=et===null?R.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Kr,Gt=(st.isMeshStandardMaterial?St:dt).get(st.envMap||It),Wt=st.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,Jt=!!lt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),qt=!!lt.morphAttributes.position,te=!!lt.morphAttributes.normal,De=!!lt.morphAttributes.color;let Ze=Qi;st.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Ze=R.toneMapping);const We=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,Oe=We!==void 0?We.length:0,Kt=b.get(st),Ue=F.state.lights;if(Ht===!0&&(me===!0||C!==G)){const An=C===G&&st.id===tt;Ft.setState(st,C,An)}let se=!1;st.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==Ue.state.version||Kt.outputColorSpace!==Nt||J.isBatchedMesh&&Kt.batching===!1||!J.isBatchedMesh&&Kt.batching===!0||J.isBatchedMesh&&Kt.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Kt.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Kt.instancing===!1||!J.isInstancedMesh&&Kt.instancing===!0||J.isSkinnedMesh&&Kt.skinning===!1||!J.isSkinnedMesh&&Kt.skinning===!0||J.isInstancedMesh&&Kt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Kt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Kt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Kt.instancingMorph===!1&&J.morphTexture!==null||Kt.envMap!==Gt||st.fog===!0&&Kt.fog!==Ut||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Ft.numPlanes||Kt.numIntersection!==Ft.numIntersection)||Kt.vertexAlphas!==Wt||Kt.vertexTangents!==Jt||Kt.morphTargets!==qt||Kt.morphNormals!==te||Kt.morphColors!==De||Kt.toneMapping!==Ze||Kt.morphTargetsCount!==Oe)&&(se=!0):(se=!0,Kt.__version=st.version);let En=Kt.currentProgram;se===!0&&(En=qs(st,Z,J));let ta=!1,bn=!1,hi=!1;const ze=En.getUniforms(),Tn=Kt.uniforms;if(Yt.useProgram(En.program)&&(ta=!0,bn=!0,hi=!0),st.id!==tt&&(tt=st.id,bn=!0),ta||G!==C){Yt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),ze.setValue(k,"projectionMatrix",C.projectionMatrix),ze.setValue(k,"viewMatrix",C.matrixWorldInverse);const Cn=ze.map.cameraPosition;Cn!==void 0&&Cn.setValue(k,xe.setFromMatrixPosition(C.matrixWorld)),Ne.logarithmicDepthBuffer&&ze.setValue(k,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&ze.setValue(k,"isOrthographic",C.isOrthographicCamera===!0),G!==C&&(G=C,bn=!0,hi=!0)}if(Kt.needsLights&&(Ue.state.directionalShadowMap.length>0&&ze.setValue(k,"directionalShadowMap",Ue.state.directionalShadowMap,j),Ue.state.spotShadowMap.length>0&&ze.setValue(k,"spotShadowMap",Ue.state.spotShadowMap,j),Ue.state.pointShadowMap.length>0&&ze.setValue(k,"pointShadowMap",Ue.state.pointShadowMap,j)),J.isSkinnedMesh){ze.setOptional(k,J,"bindMatrix"),ze.setOptional(k,J,"bindMatrixInverse");const An=J.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),ze.setValue(k,"boneTexture",An.boneTexture,j))}J.isBatchedMesh&&(ze.setOptional(k,J,"batchingTexture"),ze.setValue(k,"batchingTexture",J._matricesTexture,j),ze.setOptional(k,J,"batchingIdTexture"),ze.setValue(k,"batchingIdTexture",J._indirectTexture,j),ze.setOptional(k,J,"batchingColorTexture"),J._colorsTexture!==null&&ze.setValue(k,"batchingColorTexture",J._colorsTexture,j));const pn=lt.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&fe.update(J,lt,En),(bn||Kt.receiveShadow!==J.receiveShadow)&&(Kt.receiveShadow=J.receiveShadow,ze.setValue(k,"receiveShadow",J.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(Tn.envMap.value=Gt,Tn.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&Z.environment!==null&&(Tn.envMapIntensity.value=Z.environmentIntensity),Tn.dfgLUT!==void 0&&(Tn.dfgLUT.value=lC()),bn&&(ze.setValue(k,"toneMappingExposure",R.toneMappingExposure),Kt.needsLights&&so(Tn,hi),Ut&&st.fog===!0&&ne.refreshFogUniforms(Tn,Ut),ne.refreshMaterialUniforms(Tn,st,gt,at,F.state.transmissionRenderTarget[C.id]),su.upload(k,vl(Kt),Tn,j)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(su.upload(k,vl(Kt),Tn,j),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&ze.setValue(k,"center",J.center),ze.setValue(k,"modelViewMatrix",J.modelViewMatrix),ze.setValue(k,"normalMatrix",J.normalMatrix),ze.setValue(k,"modelMatrix",J.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const An=st.uniformsGroups;for(let Cn=0,Ys=An.length;Cn<Ys;Cn++){const wi=An[Cn];Mt.update(wi,En),Mt.bind(wi,En)}}return En}function so(C,Z){C.ambientLightColor.needsUpdate=Z,C.lightProbe.needsUpdate=Z,C.directionalLights.needsUpdate=Z,C.directionalLightShadows.needsUpdate=Z,C.pointLights.needsUpdate=Z,C.pointLightShadows.needsUpdate=Z,C.spotLights.needsUpdate=Z,C.spotLightShadows.needsUpdate=Z,C.rectAreaLights.needsUpdate=Z,C.hemisphereLights.needsUpdate=Z}function wa(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(C,Z,lt){const st=b.get(C);st.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),b.get(C.texture).__webglTexture=Z,b.get(C.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:lt,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Z){const lt=b.get(C);lt.__webglFramebuffer=Z,lt.__useDefaultFramebuffer=Z===void 0};const Da=k.createFramebuffer();this.setRenderTarget=function(C,Z=0,lt=0){et=C,V=Z,Q=lt;let st=null,J=!1,Ut=!1;if(C){const Nt=b.get(C);if(Nt.__useDefaultFramebuffer!==void 0){Yt.bindFramebuffer(k.FRAMEBUFFER,Nt.__webglFramebuffer),L.copy(C.viewport),B.copy(C.scissor),$=C.scissorTest,Yt.viewport(L),Yt.scissor(B),Yt.setScissorTest($),tt=-1;return}else if(Nt.__webglFramebuffer===void 0)j.setupRenderTarget(C);else if(Nt.__hasExternalTextures)j.rebindTextures(C,b.get(C.texture).__webglTexture,b.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Jt=C.depthTexture;if(Nt.__boundDepthTexture!==Jt){if(Jt!==null&&b.has(Jt)&&(C.width!==Jt.image.width||C.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(C)}}const Gt=C.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Ut=!0);const Wt=b.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Wt[Z])?st=Wt[Z][lt]:st=Wt[Z],J=!0):C.samples>0&&j.useMultisampledRTT(C)===!1?st=b.get(C).__webglMultisampledFramebuffer:Array.isArray(Wt)?st=Wt[lt]:st=Wt,L.copy(C.viewport),B.copy(C.scissor),$=C.scissorTest}else L.copy(ot).multiplyScalar(gt).floor(),B.copy(ft).multiplyScalar(gt).floor(),$=Dt;if(lt!==0&&(st=Da),Yt.bindFramebuffer(k.FRAMEBUFFER,st)&&Yt.drawBuffers(C,st),Yt.viewport(L),Yt.scissor(B),Yt.setScissorTest($),J){const Nt=b.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Nt.__webglTexture,lt)}else if(Ut){const Nt=Z;for(let Gt=0;Gt<C.textures.length;Gt++){const Wt=b.get(C.textures[Gt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Gt,Wt.__webglTexture,lt,Nt)}}else if(C!==null&&lt!==0){const Nt=b.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Nt.__webglTexture,lt)}tt=-1},this.readRenderTargetPixels=function(C,Z,lt,st,J,Ut,It,Nt=0){if(!(C&&C.isWebGLRenderTarget)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&It!==void 0&&(Gt=Gt[It]),Gt){Yt.bindFramebuffer(k.FRAMEBUFFER,Gt);try{const Wt=C.textures[Nt],Jt=Wt.format,qt=Wt.type;if(!Ne.textureFormatReadable(Jt)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ne.textureTypeReadable(qt)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=C.width-st&&lt>=0&&lt<=C.height-J&&(C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Nt),k.readPixels(Z,lt,st,J,Tt.convert(Jt),Tt.convert(qt),Ut))}finally{const Wt=et!==null?b.get(et).__webglFramebuffer:null;Yt.bindFramebuffer(k.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(C,Z,lt,st,J,Ut,It,Nt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&It!==void 0&&(Gt=Gt[It]),Gt)if(Z>=0&&Z<=C.width-st&&lt>=0&&lt<=C.height-J){Yt.bindFramebuffer(k.FRAMEBUFFER,Gt);const Wt=C.textures[Nt],Jt=Wt.format,qt=Wt.type;if(!Ne.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ne.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const te=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,te),k.bufferData(k.PIXEL_PACK_BUFFER,Ut.byteLength,k.STREAM_READ),C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Nt),k.readPixels(Z,lt,st,J,Tt.convert(Jt),Tt.convert(qt),0);const De=et!==null?b.get(et).__webglFramebuffer:null;Yt.bindFramebuffer(k.FRAMEBUFFER,De);const Ze=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await by(k,Ze,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,te),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ut),k.deleteBuffer(te),k.deleteSync(Ze),Ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Z=null,lt=0){const st=Math.pow(2,-lt),J=Math.floor(C.image.width*st),Ut=Math.floor(C.image.height*st),It=Z!==null?Z.x:0,Nt=Z!==null?Z.y:0;j.setTexture2D(C,0),k.copyTexSubImage2D(k.TEXTURE_2D,lt,0,0,It,Nt,J,Ut),Yt.unbindTexture()};const ds=k.createFramebuffer(),Ua=k.createFramebuffer();this.copyTextureToTexture=function(C,Z,lt=null,st=null,J=0,Ut=null){Ut===null&&(J!==0?(ul("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ut=J,J=0):Ut=0);let It,Nt,Gt,Wt,Jt,qt,te,De,Ze;const We=C.isCompressedTexture?C.mipmaps[Ut]:C.image;if(lt!==null)It=lt.max.x-lt.min.x,Nt=lt.max.y-lt.min.y,Gt=lt.isBox3?lt.max.z-lt.min.z:1,Wt=lt.min.x,Jt=lt.min.y,qt=lt.isBox3?lt.min.z:0;else{const pn=Math.pow(2,-J);It=Math.floor(We.width*pn),Nt=Math.floor(We.height*pn),C.isDataArrayTexture?Gt=We.depth:C.isData3DTexture?Gt=Math.floor(We.depth*pn):Gt=1,Wt=0,Jt=0,qt=0}st!==null?(te=st.x,De=st.y,Ze=st.z):(te=0,De=0,Ze=0);const Oe=Tt.convert(Z.format),Kt=Tt.convert(Z.type);let Ue;Z.isData3DTexture?(j.setTexture3D(Z,0),Ue=k.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(j.setTexture2DArray(Z,0),Ue=k.TEXTURE_2D_ARRAY):(j.setTexture2D(Z,0),Ue=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Z.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Z.unpackAlignment);const se=k.getParameter(k.UNPACK_ROW_LENGTH),En=k.getParameter(k.UNPACK_IMAGE_HEIGHT),ta=k.getParameter(k.UNPACK_SKIP_PIXELS),bn=k.getParameter(k.UNPACK_SKIP_ROWS),hi=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,We.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,We.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Wt),k.pixelStorei(k.UNPACK_SKIP_ROWS,Jt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,qt);const ze=C.isDataArrayTexture||C.isData3DTexture,Tn=Z.isDataArrayTexture||Z.isData3DTexture;if(C.isDepthTexture){const pn=b.get(C),An=b.get(Z),Cn=b.get(pn.__renderTarget),Ys=b.get(An.__renderTarget);Yt.bindFramebuffer(k.READ_FRAMEBUFFER,Cn.__webglFramebuffer),Yt.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ys.__webglFramebuffer);for(let wi=0;wi<Gt;wi++)ze&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,b.get(C).__webglTexture,J,qt+wi),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,b.get(Z).__webglTexture,Ut,Ze+wi)),k.blitFramebuffer(Wt,Jt,It,Nt,te,De,It,Nt,k.DEPTH_BUFFER_BIT,k.NEAREST);Yt.bindFramebuffer(k.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(J!==0||C.isRenderTargetTexture||b.has(C)){const pn=b.get(C),An=b.get(Z);Yt.bindFramebuffer(k.READ_FRAMEBUFFER,ds),Yt.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ua);for(let Cn=0;Cn<Gt;Cn++)ze?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,pn.__webglTexture,J,qt+Cn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,pn.__webglTexture,J),Tn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,An.__webglTexture,Ut,Ze+Cn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,An.__webglTexture,Ut),J!==0?k.blitFramebuffer(Wt,Jt,It,Nt,te,De,It,Nt,k.COLOR_BUFFER_BIT,k.NEAREST):Tn?k.copyTexSubImage3D(Ue,Ut,te,De,Ze+Cn,Wt,Jt,It,Nt):k.copyTexSubImage2D(Ue,Ut,te,De,Wt,Jt,It,Nt);Yt.bindFramebuffer(k.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Tn?C.isDataTexture||C.isData3DTexture?k.texSubImage3D(Ue,Ut,te,De,Ze,It,Nt,Gt,Oe,Kt,We.data):Z.isCompressedArrayTexture?k.compressedTexSubImage3D(Ue,Ut,te,De,Ze,It,Nt,Gt,Oe,We.data):k.texSubImage3D(Ue,Ut,te,De,Ze,It,Nt,Gt,Oe,Kt,We):C.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Ut,te,De,It,Nt,Oe,Kt,We.data):C.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Ut,te,De,We.width,We.height,Oe,We.data):k.texSubImage2D(k.TEXTURE_2D,Ut,te,De,It,Nt,Oe,Kt,We);k.pixelStorei(k.UNPACK_ROW_LENGTH,se),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,En),k.pixelStorei(k.UNPACK_SKIP_PIXELS,ta),k.pixelStorei(k.UNPACK_SKIP_ROWS,bn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,hi),Ut===0&&Z.generateMipmaps&&k.generateMipmap(Ue),Yt.unbindTexture()},this.initRenderTarget=function(C){b.get(C).__webglFramebuffer===void 0&&j.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?j.setTextureCube(C,0):C.isData3DTexture?j.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?j.setTexture2DArray(C,0):j.setTexture2D(C,0),Yt.unbindTexture()},this.resetState=function(){V=0,Q=0,et=null,Yt.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(t),i.unpackColorSpace=Te._getUnpackColorSpace()}}const Cv={type:"change"},Pp={type:"start"},Sx={type:"end"},Qc=new Dp,Rv=new ba,uC=Math.cos(70*Ay.DEG2RAD),gn=new q,Zn=2*Math.PI,ke={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},cd=1e-6;class fC extends dE{constructor(t,i=null){super(t,i),this.state=ke.NONE,this.target=new q,this.cursor=new q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xr.ROTATE,MIDDLE:Xr.DOLLY,RIGHT:Xr.PAN},this.touches={ONE:Gr.ROTATE,TWO:Gr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new q,this._lastQuaternion=new Gs,this._lastTargetPosition=new q,this._quat=new Gs().setFromUnitVectors(t.up,new q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ev,this._sphericalDelta=new ev,this._scale=1,this._panOffset=new q,this._rotateStart=new $t,this._rotateEnd=new $t,this._rotateDelta=new $t,this._panStart=new $t,this._panEnd=new $t,this._panDelta=new $t,this._dollyStart=new $t,this._dollyEnd=new $t,this._dollyDelta=new $t,this._dollyDirection=new q,this._mouse=new $t,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=dC.bind(this),this._onPointerDown=hC.bind(this),this._onPointerUp=pC.bind(this),this._onContextMenu=MC.bind(this),this._onMouseWheel=_C.bind(this),this._onKeyDown=vC.bind(this),this._onTouchStart=xC.bind(this),this._onTouchMove=SC.bind(this),this._onMouseDown=mC.bind(this),this._onMouseMove=gC.bind(this),this._interceptControlDown=yC.bind(this),this._interceptControlUp=EC.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Cv),this.update(),this.state=ke.NONE}update(t=null){const i=this.object.position;gn.copy(i).sub(this.target),gn.applyQuaternion(this._quat),this._spherical.setFromVector3(gn),this.autoRotate&&this.state===ke.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Zn:s>Math.PI&&(s-=Zn),l<-Math.PI?l+=Zn:l>Math.PI&&(l-=Zn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(gn.setFromSpherical(this._spherical),gn.applyQuaternion(this._quatInverse),i.copy(this.target).add(gn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const f=gn.length();h=this._clampDistance(f*this._scale);const m=f-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const f=new q(this._mouse.x,this._mouse.y,0);f.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new q(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(f),this.object.updateMatrixWorld(),h=gn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Qc.origin.copy(this.object.position),Qc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Qc.direction))<uC?this.object.lookAt(this.target):(Rv.setFromNormalAndCoplanarPoint(this.object.up,this.target),Qc.intersectPlane(Rv,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>cd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>cd||this._lastTargetPosition.distanceToSquared(this.target)>cd?(this.dispatchEvent(Cv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Zn/60*this.autoRotateSpeed*t:Zn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){gn.setFromMatrixColumn(i,0),gn.multiplyScalar(-t),this._panOffset.add(gn)}_panUp(t,i){this.screenSpacePanning===!0?gn.setFromMatrixColumn(i,1):(gn.setFromMatrixColumn(i,0),gn.crossVectors(this.object.up,gn)),gn.multiplyScalar(t),this._panOffset.add(gn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;gn.copy(l).sub(this.target);let c=gn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,h=s.width,f=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/f)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Zn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Zn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Zn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Zn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,f=(t.pageY+i.y)*.5;this._updateZoomParameters(h,f)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new $t,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function hC(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function dC(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function pC(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Sx),this.state=ke.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function mC(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Xr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=ke.DOLLY;break;case Xr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=ke.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=ke.ROTATE}break;case Xr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=ke.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=ke.PAN}break;default:this.state=ke.NONE}this.state!==ke.NONE&&this.dispatchEvent(Pp)}function gC(r){switch(this.state){case ke.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case ke.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case ke.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function _C(r){this.enabled===!1||this.enableZoom===!1||this.state!==ke.NONE||(r.preventDefault(),this.dispatchEvent(Pp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Sx))}function vC(r){this.enabled!==!1&&this._handleKeyDown(r)}function xC(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Gr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=ke.TOUCH_ROTATE;break;case Gr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=ke.TOUCH_PAN;break;default:this.state=ke.NONE}break;case 2:switch(this.touches.TWO){case Gr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=ke.TOUCH_DOLLY_PAN;break;case Gr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=ke.TOUCH_DOLLY_ROTATE;break;default:this.state=ke.NONE}break;default:this.state=ke.NONE}this.state!==ke.NONE&&this.dispatchEvent(Pp)}function SC(r){switch(this._trackPointer(r),this.state){case ke.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case ke.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case ke.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case ke.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=ke.NONE}}function MC(r){this.enabled!==!1&&r.preventDefault()}function yC(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function EC(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ru=0,bC=1,TC=new q,wv=new hE,ud=new ba,Dv=new q,Jc=new bi;class AC{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new Uv,this.unassigned=new Uv,this.vertices=[]}setFromPoints(t){if(t.length>=4){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.vertices.push(new CC(t[i]));this._compute()}return this}setFromObject(t){const i=[];return t.updateMatrixWorld(!0),t.traverse(function(s){const l=s.geometry;if(l!==void 0){const c=l.attributes.position;if(c!==void 0)for(let h=0,f=c.count;h<f;h++){const m=new q;m.fromBufferAttribute(c,h).applyMatrix4(s.matrixWorld),i.push(m)}}}),this.setFromPoints(i)}containsPoint(t){const i=this.faces;for(let s=0,l=i.length;s<l;s++)if(i[s].distanceToPoint(t)>this.tolerance)return!1;return!0}intersectRay(t,i){const s=this.faces;let l=-1/0,c=1/0;for(let h=0,f=s.length;h<f;h++){const m=s[h],p=m.distanceToPoint(t.origin),g=m.normal.dot(t.direction);if(p>0&&g>=0)return null;const v=g!==0?-p/g:0;if(!(v<=0)&&(g>0?c=Math.min(v,c):l=Math.max(v,l),l>c))return null}return l!==-1/0?t.at(l,i):t.at(c,i),i}intersectsRay(t){return this.intersectRay(t,TC)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}_addVertexToFace(t,i){return t.face=i,i.outside===null?this.assigned.append(t):this.assigned.insertBefore(i.outside,t),i.outside=t,this}_removeVertexFromFace(t,i){return t===i.outside&&(t.next!==null&&t.next.face===i?i.outside=t.next:i.outside=null),this.assigned.remove(t),this}_removeAllVerticesFromFace(t){if(t.outside!==null){const i=t.outside;let s=t.outside;for(;s.next!==null&&s.next.face===t;)s=s.next;return this.assigned.removeSubList(i,s),i.prev=s.next=null,t.outside=null,i}}_deleteFaceVertices(t,i){const s=this._removeAllVerticesFromFace(t);if(s!==void 0)if(i===void 0)this.unassigned.appendChain(s);else{let l=s;do{const c=l.next;i.distanceToPoint(l.point)>this.tolerance?this._addVertexToFace(l,i):this.unassigned.append(l),l=c}while(l!==null)}return this}_resolveUnassignedPoints(t){if(this.unassigned.isEmpty()===!1){let i=this.unassigned.first();do{const s=i.next;let l=this.tolerance,c=null;for(let h=0;h<t.length;h++){const f=t[h];if(f.mark===ru){const m=f.distanceToPoint(i.point);if(m>l&&(l=m,c=f),l>1e3*this.tolerance)break}}c!==null&&this._addVertexToFace(i,c),i=s}while(i!==null)}return this}_computeExtremes(){const t=new q,i=new q,s=[],l=[];for(let c=0;c<3;c++)s[c]=l[c]=this.vertices[0];t.copy(this.vertices[0].point),i.copy(this.vertices[0].point);for(let c=0,h=this.vertices.length;c<h;c++){const f=this.vertices[c],m=f.point;for(let p=0;p<3;p++)m.getComponent(p)<t.getComponent(p)&&(t.setComponent(p,m.getComponent(p)),s[p]=f);for(let p=0;p<3;p++)m.getComponent(p)>i.getComponent(p)&&(i.setComponent(p,m.getComponent(p)),l[p]=f)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(t.x),Math.abs(i.x))+Math.max(Math.abs(t.y),Math.abs(i.y))+Math.max(Math.abs(t.z),Math.abs(i.z))),{min:s,max:l}}_computeInitialHull(){const t=this.vertices,i=this._computeExtremes(),s=i.min,l=i.max;let c=0,h=0;for(let _=0;_<3;_++){const x=l[_].point.getComponent(_)-s[_].point.getComponent(_);x>c&&(c=x,h=_)}const f=s[h],m=l[h];let p,g;c=0,wv.set(f.point,m.point);for(let _=0,x=this.vertices.length;_<x;_++){const E=t[_];if(E!==f&&E!==m){wv.closestPointToPoint(E.point,!0,Dv);const T=Dv.distanceToSquared(E.point);T>c&&(c=T,p=E)}}c=-1,ud.setFromCoplanarPoints(f.point,m.point,p.point);for(let _=0,x=this.vertices.length;_<x;_++){const E=t[_];if(E!==f&&E!==m&&E!==p){const T=Math.abs(ud.distanceToPoint(E.point));T>c&&(c=T,g=E)}}const v=[];if(ud.distanceToPoint(g.point)<0){v.push(zi.create(f,m,p),zi.create(g,m,f),zi.create(g,p,m),zi.create(g,f,p));for(let _=0;_<3;_++){const x=(_+1)%3;v[_+1].getEdge(2).setTwin(v[0].getEdge(x)),v[_+1].getEdge(1).setTwin(v[x+1].getEdge(0))}}else{v.push(zi.create(f,p,m),zi.create(g,f,m),zi.create(g,m,p),zi.create(g,p,f));for(let _=0;_<3;_++){const x=(_+1)%3;v[_+1].getEdge(2).setTwin(v[0].getEdge((3-_)%3)),v[_+1].getEdge(0).setTwin(v[x+1].getEdge(1))}}for(let _=0;_<4;_++)this.faces.push(v[_]);for(let _=0,x=t.length;_<x;_++){const E=t[_];if(E!==f&&E!==m&&E!==p&&E!==g){c=this.tolerance;let T=null;for(let y=0;y<4;y++){const M=this.faces[y].distanceToPoint(E.point);M>c&&(c=M,T=this.faces[y])}T!==null&&this._addVertexToFace(E,T)}}return this}_reindexFaces(){const t=[];for(let i=0;i<this.faces.length;i++){const s=this.faces[i];s.mark===ru&&t.push(s)}return this.faces=t,this}_nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let t,i=0;const s=this.assigned.first().face;let l=s.outside;do{const c=s.distanceToPoint(l.point);c>i&&(i=c,t=l),l=l.next}while(l!==null&&l.face===s);return t}}_computeHorizon(t,i,s,l){this._deleteFaceVertices(s),s.mark=bC;let c;i===null?c=i=s.getEdge(0):c=i.next;do{const h=c.twin,f=h.face;f.mark===ru&&(f.distanceToPoint(t)>this.tolerance?this._computeHorizon(t,h,f,l):l.push(c)),c=c.next}while(c!==i);return this}_addAdjoiningFace(t,i){const s=zi.create(t,i.tail(),i.head());return this.faces.push(s),s.getEdge(-1).setTwin(i.twin),s.getEdge(0)}_addNewFaces(t,i){this.newFaces=[];let s=null,l=null;for(let c=0;c<i.length;c++){const h=i[c],f=this._addAdjoiningFace(t,h);s===null?s=f:f.next.setTwin(l),this.newFaces.push(f.face),l=f}return s.next.setTwin(l),this}_addVertexToHull(t){const i=[];return this.unassigned.clear(),this._removeVertexFromFace(t,t.face),this._computeHorizon(t.point,null,t.face,i),this._addNewFaces(t,i),this._resolveUnassignedPoints(this.newFaces),this}_cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}_compute(){let t;for(this._computeInitialHull();(t=this._nextVertexToAdd())!==void 0;)this._addVertexToHull(t);return this._reindexFaces(),this._cleanup(),this}}class zi{constructor(){this.normal=new q,this.midpoint=new q,this.area=0,this.constant=0,this.outside=null,this.mark=ru,this.edge=null}static create(t,i,s){const l=new zi,c=new fd(t,l),h=new fd(i,l),f=new fd(s,l);return c.next=f.prev=h,h.next=c.prev=f,f.next=h.prev=c,l.edge=c,l.compute()}getEdge(t){let i=this.edge;for(;t>0;)i=i.next,t--;for(;t<0;)i=i.prev,t++;return i}compute(){const t=this.edge.tail(),i=this.edge.head(),s=this.edge.next.head();return Jc.set(t.point,i.point,s.point),Jc.getNormal(this.normal),Jc.getMidpoint(this.midpoint),this.area=Jc.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(t){return this.normal.dot(t)-this.constant}}class fd{constructor(t,i){this.vertex=t,this.prev=null,this.next=null,this.twin=null,this.face=i}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){const t=this.head(),i=this.tail();return i!==null?i.point.distanceTo(t.point):-1}lengthSquared(){const t=this.head(),i=this.tail();return i!==null?i.point.distanceToSquared(t.point):-1}setTwin(t){return this.twin=t,t.twin=this,this}}class CC{constructor(t){this.point=t,this.prev=null,this.next=null,this.face=null}}class Uv{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(t,i){return i.prev=t.prev,i.next=t,i.prev===null?this.head=i:i.prev.next=i,t.prev=i,this}insertAfter(t,i){return i.prev=t,i.next=t.next,i.next===null?this.tail=i:i.next.prev=i,t.next=i,this}append(t){return this.head===null?this.head=t:this.tail.next=t,t.prev=this.tail,t.next=null,this.tail=t,this}appendChain(t){for(this.head===null?this.head=t:this.tail.next=t,t.prev=this.tail;t.next!==null;)t=t.next;return this.tail=t,this}remove(t){return t.prev===null?this.head=t.next:t.prev.next=t.next,t.next===null?this.tail=t.prev:t.next.prev=t.prev,this}removeSubList(t,i){return t.prev===null?this.head=i.next:t.prev.next=i.next,i.next===null?this.tail=t.prev:i.next.prev=t.prev,this}isEmpty(){return this.head===null}}class RC extends Nn{constructor(t=[]){super();const i=[],s=[],c=new AC().setFromPoints(t).faces;for(let h=0;h<c.length;h++){const f=c[h];let m=f.edge;do{const p=m.head().point;i.push(p.x,p.y,p.z),s.push(f.normal.x,f.normal.y,f.normal.z),m=m.next}while(m!==f.edge)}this.setAttribute("position",new on(i,3)),this.setAttribute("normal",new on(s,3))}}const hd={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class wC{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const DC=new mu(-1,1,1,-1,0,1);class UC extends Nn{constructor(){super(),this.setAttribute("position",new on([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new on([0,2,0,0,2,0],2))}}const LC=new UC;class NC{constructor(t){this._mesh=new Gi(LC,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,DC)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}const OC={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ue(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class hl extends wC{constructor(t,i=1,s,l){super(),this.strength=i,this.radius=s,this.threshold=l,this.resolution=t!==void 0?new $t(t.x,t.y):new $t(256,256),this.clearColor=new ue(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let c=Math.round(this.resolution.x/2),h=Math.round(this.resolution.y/2);this.renderTargetBright=new ui(c,h,{type:Ti}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let g=0;g<this.nMips;g++){const v=new ui(c,h,{type:Ti});v.texture.name="UnrealBloomPass.h"+g,v.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(v);const _=new ui(c,h,{type:Ti});_.texture.name="UnrealBloomPass.v"+g,_.texture.generateMipmaps=!1,this.renderTargetsVertical.push(_),c=Math.round(c/2),h=Math.round(h/2)}const f=OC;this.highPassUniforms=cp.clone(f.uniforms),this.highPassUniforms.luminosityThreshold.value=l,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Qn({uniforms:this.highPassUniforms,vertexShader:f.vertexShader,fragmentShader:f.fragmentShader}),this.separableBlurMaterials=[];const m=[6,10,14,18,22];c=Math.round(this.resolution.x/2),h=Math.round(this.resolution.y/2);for(let g=0;g<this.nMips;g++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(m[g])),this.separableBlurMaterials[g].uniforms.invSize.value=new $t(1/c,1/h),c=Math.round(c/2),h=Math.round(h/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=i,this.compositeMaterial.uniforms.bloomRadius.value=.1;const p=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=p,this.bloomTintColors=[new q(1,1,1),new q(1,1,1),new q(1,1,1),new q(1,1,1),new q(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=cp.clone(hd.uniforms),this.blendMaterial=new Qn({uniforms:this.copyUniforms,vertexShader:hd.vertexShader,fragmentShader:hd.fragmentShader,premultipliedAlpha:!0,blending:gd,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ue,this._oldClearAlpha=1,this._basic=new Up,this._fsQuad=new NC(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,i){let s=Math.round(t/2),l=Math.round(i/2);this.renderTargetBright.setSize(s,l);for(let c=0;c<this.nMips;c++)this.renderTargetsHorizontal[c].setSize(s,l),this.renderTargetsVertical[c].setSize(s,l),this.separableBlurMaterials[c].uniforms.invSize.value=new $t(1/s,1/l),s=Math.round(s/2),l=Math.round(l/2)}render(t,i,s,l,c){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const h=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),c&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=s.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=s.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let f=this.renderTargetBright;for(let m=0;m<this.nMips;m++)this._fsQuad.material=this.separableBlurMaterials[m],this.separableBlurMaterials[m].uniforms.colorTexture.value=f.texture,this.separableBlurMaterials[m].uniforms.direction.value=hl.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[m]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[m].uniforms.colorTexture.value=this.renderTargetsHorizontal[m].texture,this.separableBlurMaterials[m].uniforms.direction.value=hl.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[m]),t.clear(),this._fsQuad.render(t),f=this.renderTargetsVertical[m];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,c&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(s),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=h}_getSeparableBlurMaterial(t){const i=[],s=t/3;for(let l=0;l<t;l++)i.push(.39894*Math.exp(-.5*l*l/(s*s))/s);return new Qn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new $t(.5,.5)},direction:{value:new $t(.5,.5)},gaussianCoefficients:{value:i}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new Qn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}hl.BlurDirectionX=new $t(1,0);hl.BlurDirectionY=new $t(0,1);function PC(r,t=!1){const i=r[0].index!==null,s=new Set(Object.keys(r[0].attributes)),l=new Set(Object.keys(r[0].morphAttributes)),c={},h={},f=r[0].morphTargetsRelative,m=new Nn;let p=0;for(let g=0;g<r.length;++g){const v=r[g];let _=0;if(i!==(v.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const x in v.attributes){if(!s.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+'. All geometries must have compatible attributes; make sure "'+x+'" attribute exists among all geometries, or in none of them.'),null;c[x]===void 0&&(c[x]=[]),c[x].push(v.attributes[x]),_++}if(_!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". Make sure all geometries have the same number of attributes."),null;if(f!==v.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const x in v.morphAttributes){if(!l.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+".  .morphAttributes must be consistent throughout all geometries."),null;h[x]===void 0&&(h[x]=[]),h[x].push(v.morphAttributes[x])}if(t){let x;if(i)x=v.index.count;else if(v.attributes.position!==void 0)x=v.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". The geometry must have either an index or a position attribute"),null;m.addGroup(p,x,g),p+=x}}if(i){let g=0;const v=[];for(let _=0;_<r.length;++_){const x=r[_].index;for(let E=0;E<x.count;++E)v.push(x.getX(E)+g);g+=r[_].attributes.position.count}m.setIndex(v)}for(const g in c){const v=Lv(c[g]);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+g+" attribute."),null;m.setAttribute(g,v)}for(const g in h){const v=h[g][0].length;if(v===0)break;m.morphAttributes=m.morphAttributes||{},m.morphAttributes[g]=[];for(let _=0;_<v;++_){const x=[];for(let T=0;T<h[g].length;++T)x.push(h[g][T][_]);const E=Lv(x);if(!E)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+g+" morphAttribute."),null;m.morphAttributes[g].push(E)}}return m}function Lv(r){let t,i,s,l=-1,c=0;for(let p=0;p<r.length;++p){const g=r[p];if(t===void 0&&(t=g.array.constructor),t!==g.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(i===void 0&&(i=g.itemSize),i!==g.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(s===void 0&&(s=g.normalized),s!==g.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(l===-1&&(l=g.gpuType),l!==g.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;c+=g.count*i}const h=new t(c),f=new Ai(h,i,s);let m=0;for(let p=0;p<r.length;++p){const g=r[p];if(g.isInterleavedBufferAttribute){const v=m/i;for(let _=0,x=g.count;_<x;_++)for(let E=0;E<i;E++){const T=g.getComponent(_,E);f.setComponent(_+v,E,T)}}else h.set(g.array,m);m+=g.count*i}return l!==void 0&&(f.gpuType=l),f}const zC=r=>{let t=0;return()=>vp(r+":"+t++)},Fi=(r,t={})=>new hx({color:r,roughness:.78,metalness:0,...t});function fs(r,t,i,s=0,l=0,c=0,h){const f=new Gi(t,i);return f.position.set(s,l,c),h&&f.scale.set(...h),f.castShadow=!0,f.receiveShadow=!0,r.add(f),f}function li(r,t,i,s,l,c,h,f){return fs(r,new $r(c,h,f),t,i,s,l)}function al(r,t,i,s,l=.02,c=l){const h=new q(...i),f=new q(...s),m=f.clone().sub(h),p=fs(r,new pu(c,l,m.length(),7),t,...h.clone().add(f).multiplyScalar(.5).toArray());return p.quaternion.setFromUnitVectors(new q(0,1,0),m.normalize()),p}function rl(r){const t=new Set,i=new Set;r.traverse(s=>{if(s.geometry&&t.add(s.geometry),s.material)for(const l of Array.isArray(s.material)?s.material:[s.material])i.add(l)}),t.forEach(s=>s.dispose()),i.forEach(s=>{for(const l of["map","bumpMap","roughnessMap","normalMap"])s[l]?.dispose();s.dispose()}),r.clear()}function FC(r){r.updateMatrixWorld(!0);const t=new Map,i=[];r.traverse(s=>{if(s.isMesh&&!Array.isArray(s.material)){const l=s.geometry.clone().applyMatrix4(s.matrixWorld),c=s.material.uuid;t.has(c)||t.set(c,{mat:s.material,geometries:[]}),t.get(c).geometries.push(l.index?l.toNonIndexed():l),i.push(s)}});for(const s of i)s.removeFromParent(),s.geometry.dispose();for(const{mat:s,geometries:l}of t.values()){for(const h of l)h.getAttribute("uv")||h.setAttribute("uv",new Ai(new Float32Array(h.getAttribute("position").count*2),2));const c=PC(l,!1);l.forEach(h=>h.dispose()),c&&fs(r,c,s)}return r}function IC(r){const t=r.code==="C4"?4:3,i=[],s=1.22/t;for(let l=0;l<t;l++)for(let c=0;c<t;c++)for(let h=0;h<t;h++){const f=h===0||h===t-1||c===0||c===t-1,m=vp(`${r.id}:cell:${h}:${l}:${c}`),p=h===Math.floor(t/2)&&c===Math.floor(t/2);let g=m<r.density;r.code==="C1"&&(g=f&&l!==1&&m<.72),(r.code==="C2"||r.code==="C3"||r.code==="C4")&&(g=!1),r.code==="C5"&&(g=f&&m<.2),r.publicRoom&&l===1&&c===1&&(g=!1),r.code==="C0"&&p&&!r.publicRoom&&(g=!0),i.push({x:(h-(t-1)/2)*s,y:(l-(t-1)/2)*s,z:(c-(t-1)/2)*s,size:s*.96,solid:g,frame:!g&&(f||r.code==="C4"||p),diagonal:m>.52,light:!g&&r.light&&m>.7,value:m})}return i}const kr=Object.freeze({x:1.75,z:.75});function Nv(r,t,i=0){return[(r.x-kr.x)*t,i+r.y*t,(r.z-kr.z)*t]}function BC(r,t,i){return!r||t===0&&i>0}const Ii=1.6,HC=.69;function dd(r,t,i,s,l,c=!1){const h=l/2,f=[];for(const m of[-1,1])for(const p of[-1,1])for(const g of[-1,1])f.push([t+m*h,i+p*h,s+g*h]);for(let m=0;m<8;m++)for(let p=m+1;p<8;p++)[0,1,2].filter(g=>f[m][g]!==f[p][g]).length===1&&r.push(...f[m],...f[p]);c&&r.push(...f[0],...f[7],...f[1],...f[6])}function dp(r,t,i,s=1){if(!t.length)return;const l=new Nn;l.setAttribute("position",new on(t,3));const c=new eE(l,new ux({color:i,transparent:s<1,opacity:s}));return r.add(c),c}function pd(r,t,i,s){const l=[];for(let f=0;f<10;f++){const m=-.6+f*.12,p=m+.12,g=.025+f%2*.085;let v=[[m,-.59,.6+g],[p,-.59,.6+.11-g],[p,.59,.6+.11-g],[m,.59,.6+g]];if(s===1&&(v=v.map(([_,x,E])=>[E,x,_])),s===2&&(v=v.map(([_,x,E])=>[_,E-.03,x])),!(i()<.18))for(const _ of[0,1,2,0,2,3])l.push(...v[_])}const h=new Nn;h.setAttribute("position",new on(l,3)),h.computeVertexNormals(),fs(r,h,t)}function GC(r,t,i){for(let c=0;c<3;c++){const h=[],f=[];for(let g=0;g<=18;g++)for(let v=0;v<=18;v++){const _=(v/18-.5)*2,x=(g/18-.5)*2;h.push(_*.63,x*.63,Math.sin(_*Math.PI)*Math.cos(x*Math.PI)*.19+(c-1)*.34)}for(let g=0;g<18;g++)for(let v=0;v<18;v++){if((v+2*g+c)%5===0||(v-9)**2+(g-9)**2<7)continue;const _=g*19+v;f.push(_,_+1,_+18+2,_,_+18+2,_+18+1)}const m=new Nn;m.setAttribute("position",new on(h,3)),m.setIndex(f),m.computeVertexNormals();const p=fs(r,m,t);p.rotation.y=(i.seed-.5)*.5}}function VC(r,t){const i=new ls,s=zC(r.id+":generative"),l=IC(r),c=Fi(r.code==="C1"?"#41484b":"#d4d4cb",{roughness:.72,metalness:.08}),h=Fi("#222a2e",{roughness:.64,metalness:.24}),f=Fi("#aab6b9",{roughness:.34,metalness:.65}),m=Fi("#d9eeee",{emissive:"#a4c4c6",emissiveIntensity:.42,roughness:.32}),p=new aE({color:"#acc7cb",metalness:.18,roughness:.28,transparent:!0,opacity:.22,side:Bi,depthWrite:!1}),g=[],v=[];for(const _ of l){const{x,y:E,z:T,size:y}=_;_.solid?(li(i,_.value>.25?c:h,x,E,T,y,y,y),r.code==="C0"&&T>.1&&li(i,r.light?m:h,x,E+.02,T+y*.502,y*.75,.026,.007)):_.frame&&dd(g,x,E,T,y,_.diagonal&&(r.code==="C4"||r.code==="C3")),_.light&&li(i,m,x,E-y*.4,T,y*.72,.009,.011)}if(dd(v,0,0,0,1.25,!1),r.code==="C4"){for(const _ of l.filter(x=>x.value>.72))for(const x of[-1,1])for(const E of[-1,1])for(const T of[-1,1])dd(g,_.x+x*_.size/4,_.y+E*_.size/4,_.z+T*_.size/4,_.size/2,!0);for(const _ of[-.59,0,.59])li(i,h,0,_,0,1.26,.028,1.26);r.publicRoom&&li(i,m,0,.02,.63,.65,.05,.008)}if(r.code==="C1"){for(const _ of[-.6,.6])li(i,c,0,_,0,1.28,.065,1.28);for(const _ of[-.54,.54])al(i,f,[_,-.6,-.54],[_,.6,.54],.018)}if(r.code==="C2"){GC(i,r.light?p:Fi("#7e9389",{roughness:.65,metalness:.2,side:Bi}),r);for(let _=0;_<12;_++){const x=(s()-.5)*1.05,E=(s()-.5)*1.05,T=.12+s()*.23,y=fs(i,new Op(.035,T,4),Fi("#657e70"),x,-.5+T/2,E);y.rotation.z=(s()-.5)*.45}li(i,h,0,-.61,0,1.26,.04,1.26)}if(r.code==="C3"){for(let _=0;_<13;_++)li(i,f,-.49+_*.077,-.57+_*.09,0,.13,.025,.44);al(i,f,[-.59,-.59,-.26],[.59,.59,-.26],.012),al(i,f,[-.59,-.59,.26],[.59,.59,.26],.012)}if(r.code==="C5"){pd(i,p,s,0),pd(i,p,s,1),pd(i,p,s,2);for(let _=0;_<4;_++)li(i,m,-.43+_*.28,0,0,.014,1.18,.014)}if(r.code==="C0"&&r.garden)for(let _=0;_<3;_++)li(i,Fi("#6c8177"),-.36+_*.34,.64,.4,.26,.06,.23);for(const _ of r.connections){if(r.id.localeCompare(_.id)>0)continue;const x=[_.dx*Ii,_.dy*Ii,_.dz*Ii];for(const E of[-1,1])al(i,f,[0,-.25,E*.19],[x[0],x[1]-.25,x[2]+E*.19],.011);if(r.code==="C3"||_.code==="C3"){const E=new q(0,-.33,0),T=new q(...x).add(new q(0,-.33,0)),y=T.clone().sub(E);li(i,h,...E.clone().add(T).multiplyScalar(.5).toArray(),.38,.035,y.length()).quaternion.setFromUnitVectors(new q(0,0,1),y.normalize())}}if(r.index===0){const _=r.y*Ii;for(const x of[-.46,.46])for(const E of[-.46,.46])al(i,h,[x,-.61,E],[x,-.68-_,E],.018)}FC(i),dp(i,g,r.code==="C4"?"#d0d8d8":"#77898e",r.code==="C4"?.78:.48),dp(i,v,"#b4c3c7",.7);for(const _ of[c,h,f,m,p])i.children.some(x=>x.material===_)||_.dispose();return i}function kC(r,t,i){r.background=new ue("#101619"),r.fog=new Lp("#101619",22,65),r.add(new px("#d8e3e7","#111b24",1.65));const s=new up("#f3f2e8",3.3);s.position.set(-5,10,7),s.castShadow=!0,s.shadow.mapSize.set(2048,2048),Object.assign(s.shadow.camera,{left:-18,right:18,top:18,bottom:-18,near:.1,far:60}),s.shadow.normalBias=.025,s.shadow.radius=5,r.add(s);const l=new up("#92b7c4",2.4);l.position.set(6,7,-8),r.add(l);const c=fs(r,new gl(180,180),Fi("#161e22",{roughness:.77,metalness:.2}),0,-.025,0);c.rotation.x=-Math.PI/2,c.castShadow=!1;const h=new ls;r.add(h);let f="";function m(p){const g=p.bounds,v=[g.cx,g.cz,g.width,g.depth,...p.courtyards.flatMap(w=>[w.x,w.z])].join(",");if(v===f)return;f=v,rl(h);const _=(g.cx-kr.x)*Ii,x=(g.cz-kr.z)*Ii,E=g.width*Ii,T=g.depth*Ii,y=Fi("#252f33",{roughness:.65,metalness:.3});li(h,y,_,-.04,x,E,.06,T);const M=[];for(let w=0;w<=Math.ceil(E);w++){const P=_-E/2+w;M.push(P,0,x-T/2,P,0,x+T/2)}for(let w=0;w<=Math.ceil(T);w++){const P=x-T/2+w;M.push(_-E/2,0,P,_+E/2,0,P)}dp(h,M,"#708087",.12);for(const w of p.courtyards)li(h,Fi("#60736b"),(w.x-kr.x)*Ii,.025,(w.z-kr.z)*Ii,.8,.025,.8)}return{spacing:Ii,baseY:HC,build:VC,update:m,dispose:()=>s.shadow.map?.dispose()}}const dl=[];for(const r of[-1,1])for(const t of[-2,2])for(const i of[[0,r,t],[0,t,r],[r,0,t],[t,0,r],[r,t,0],[t,r,0]])dl.some(s=>s.every((l,c)=>l===i[c]))||dl.push(i);const Mx=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];for(const r of[-1,1])for(const t of[-1,1])for(const i of[-1,1])Mx.push([r/Math.sqrt(3),t/Math.sqrt(3),i/Math.sqrt(3)]);Mx.map(r=>{const t=Math.max(...dl.map(i=>i.reduce((s,l,c)=>s+l*r[c],0)));return{normal:r,distance:t,vertices:dl.filter(i=>Math.abs(i.reduce((s,l,c)=>s+l*r[c],0)-t)<1e-6)}});function Ov({model:r,monitor:t=!1,reset:i=0,onError:s}){const l=Qe.useRef(null),c=Qe.useRef(null),h=Qe.useRef(r);return h.current=r,Qe.useEffect(()=>{const f=l.current,m=new Zy;let p,g,v,_,x,E,T=0;try{let y=function(){const tt=f.clientWidth,G=f.clientHeight;!tt||!G||(p.setSize(tt,G),w.aspect=tt/G,w.updateProjectionMatrix(),v?.setSize(tt,G))},M=function(tt){T=requestAnimationFrame(M);const G=Math.min((tt-I)/1e3,.05);I=tt,F+=G,x.update();for(const L of U.values()){const B=Math.min(1,(F-L.birth)/.5);L.object.scale.setScalar(1-Math.pow(1-B,3)),L.object.userData.tick?.(Q?0:F,G)}for(let L=V.length-1;L>=0;L--){const B=V[L];B.object.scale.multiplyScalar(Math.exp(-G*12)),B.object.scale.x<.025&&(P.remove(B.object),rl(B.object),V.splice(L,1))}g?.tick?.(Q?0:F,G),v?v.render():p.render(m,w)};p=new cC({antialias:!0,alpha:!1,powerPreference:"high-performance"}),p.setPixelRatio(Math.min(window.devicePixelRatio,t?1.5:1.75)),p.shadowMap.enabled=!t,p.shadowMap.type=Kn.kind==="architecture"?Vr:Fv,p.toneMapping=Sp,p.toneMappingExposure=Kn.kind==="ocean"?1.05:1.02,f.appendChild(p.domElement);const w=new Ei(t?38:36,1,.1,180);x=new fC(w,p.domElement),x.enableDamping=!0,x.dampingFactor=.065,x.enablePan=!t,x.minDistance=t?3:5,x.maxDistance=85,x.maxPolarAngle=Math.PI*.475,x.minPolarAngle=.12;const P=new ls;m.add(P);const U=new Map;let F=0,I=performance.now(),z=!1,Y;if(t){m.background=new ue("#10171b"),m.add(new px("#ffffff","#334047",2.5));const tt=new up("#ffffff",3);tt.position.set(4,8,6),m.add(tt)}else g=kC(m,P,p);const R=()=>{const tt=h.current.bounds,G=t?1.44:g.spacing,L=Math.max(tt.width,tt.depth,tt.height+2)*G,B=Math.max(t?8:Kn.kind==="ocean"?17:12,L*(Kn.kind==="ocean"&&!t?1.08:t?1.7:1.4))*(w.aspect<1?1/w.aspect*.75:1),$=t?.7:Kn.kind==="ocean"?1.7:Math.max(.8,tt.height*.66),[xt,,vt]=Nv({x:tt.cx,y:0,z:tt.cz},G);x.target.set(xt,$,vt),w.position.set(xt+B*(Kn.kind==="ocean"&&!t?.38:.66),$+B*(Kn.kind==="ocean"&&!t?.32:.62),vt+B*.92),x.update(),z=!0},D=tt=>{const G=BC(z,Y?.nodes.length||0,tt.nodes.length);Y=tt;const L=t?1.44:g.spacing,B=new Set(tt.nodes.map($=>$.id));for(const[$,xt]of U)B.has($)||(xt.removing=!0,U.delete($),V.push(xt));for(const $ of tt.nodes){const xt=JSON.stringify($),vt=U.get($.id);if(vt?.signature===xt)continue;vt&&(P.remove(vt.object),rl(vt.object),U.delete($.id));let N;t?(N=new ls,fs(N,new RC(dl.map(at=>new q(...at).multiplyScalar(.34))),Fi(ol[Number($.code[1])].color))):N=g.build($,tt),N.position.set(...Nv($,L,t?.72:g.baseY)),N.scale.setScalar(.01),P.add(N),U.set($.id,{object:N,signature:xt,birth:F})}g?.update?.(tt),G&&R()},V=[];!t&&Kn.kind,E=new ResizeObserver(y),E.observe(f),y(),c.current={sync:D,frameModel:R},D(h.current);const Q=window.matchMedia("(prefers-reduced-motion: reduce)").matches;T=requestAnimationFrame(M);const et=tt=>{tt.preventDefault(),s?.("The graphics context was interrupted. Reload this page to restore the scene.")};return p.domElement.addEventListener("webglcontextlost",et),()=>{cancelAnimationFrame(T),E.disconnect(),x.dispose(),g?.dispose?.(),rl(m),_?.dispose(),v?.dispose(),p.dispose(),p.domElement.remove(),c.current=null}}catch{s?.("This scene needs WebGL. Try reopening it in Chrome or another browser."),cancelAnimationFrame(T),E?.disconnect(),x?.dispose(),rl(m),p?.dispose(),p?.domElement.remove()}},[t]),Qe.useEffect(()=>{c.current?.sync(r)},[r]),Qe.useEffect(()=>{i&&c.current?.frameModel()},[i]),Et.jsx("div",{className:"canvas-host",ref:l,"aria-label":t?"Digital block reconstruction":"Interactive rendered world"})}const Pv={live:"Live input",setup:"Hardware setup needed",connecting:"Connecting",reconnecting:"Reconnecting",offline:"Board disconnected",waiting:"Waiting for board",recovering:"Restoring board",attention:"Check input","invalid-data":"Input needs attention","launcher-offline":"Launcher unavailable"};function XC(){const r=VM(),[t,i]=Qe.useState("hardware"),[s,l]=Qe.useState(null),[c,h]=Qe.useState(md),[f,m]=Qe.useState(Ea[0].id),[p,g]=Qe.useState("C0"),[v,_]=Qe.useState("0"),[x,E]=Qe.useState(0),[T,y]=Qe.useState("A0"),[M,w]=Qe.useState(""),P=Qe.useRef(null),U=Qe.useMemo(()=>zv(GM(c)),[c]),F=t==="test"?U:r.blocks,I=Qe.useMemo(()=>WM(F),[F]),z=c.board[f]||[],Y=Qe.useRef([]),[R,D]=Qe.useState("");function V(G){Y.current.push(c),Y.current.length>100&&Y.current.shift(),h(G),D("")}function Q(){const G=BM(c);G&&(V(wh(c,G,"add",p)),m(G),y(Ea.find(L=>L.id===G).port),D(`${p} added · ${G} · layer ${(c.board[G]?.length||0)+1}`))}function et(){const G=Y.current.pop();G&&(h(G),D("Last change undone"))}const tt=()=>{l(null),P.current?.focus()};return Qe.useEffect(()=>{const G=L=>{L.key==="Escape"&&tt()};return window.addEventListener("keydown",G),()=>window.removeEventListener("keydown",G)},[]),Et.jsxs("main",{className:"app "+Kn.kind,children:[Et.jsxs("header",{className:"bar",children:[Et.jsxs("div",{className:"brand",children:[Et.jsx("span",{children:Kn.number}),Et.jsx("h1",{children:Kn.title})]}),Et.jsxs("div",{className:"actions",children:[Et.jsxs("span",{className:"status",role:"status",children:[Et.jsx("i",{className:t==="hardware"&&r.status==="live"?"live":""}),t==="test"?"Test board · simulated":Pv[r.status]||"Waiting"]}),t==="test"&&Et.jsx("button",{onClick:()=>{i("hardware"),l(null)},children:"Return to hardware"}),Et.jsx("button",{onClick:()=>l(s==="guide"?null:"guide"),children:"Field guide"}),Et.jsx("button",{ref:P,"aria-controls":"test-panel","aria-expanded":s==="test",onClick:()=>{s!=="test"&&i("test"),l(s==="test"?null:"test")},children:s==="test"?"Hide test view":"Test view"})]})]}),Et.jsxs("section",{className:"stage","aria-label":Kn.title+" real-time scene",children:[Et.jsx(Ov,{model:I,reset:x,onError:w}),Et.jsxs("div",{className:"scene-label",children:[Et.jsxs("p",{children:["WORLDBLOCKS / EXPERIMENT ",Kn.number]}),Et.jsx("h2",{children:"Form follows connection."}),Et.jsx("span",{children:Kn.subtitle})]}),!F.length&&Et.jsx("div",{className:"invitation",children:t==="test"?"Add a block, or load a sample in Test view.":r.status==="setup"?"Confirm Hardware settings to bring your blocks to life.":"Place a block. Watch the world respond."}),M&&Et.jsx("p",{className:"scene-error",role:"alert",children:M}),t==="hardware"&&F.length>0&&r.status!=="live"&&Et.jsxs("p",{className:"connection-note",children:[Pv[r.status]," · Last received board"]}),Et.jsxs("div",{className:"scene-footer",children:[Et.jsxs("span",{children:[t==="test"?"SIMULATED INPUT":"HARDWARE INPUT",Et.jsx("b",{children:" / "}),F.length," MODULES"]}),Et.jsxs("div",{children:[Et.jsx("span",{children:"Drag to orbit · Scroll to zoom"}),Et.jsx("button",{onClick:()=>E(G=>G+1),children:"Reset view ↗"})]})]}),!!I.events.length&&Et.jsxs("div",{className:"emergence","aria-live":"polite",children:[Et.jsx("span",{children:"EMERGING"}),I.events.slice(0,3).map(G=>Et.jsx("p",{children:G},G)),I.events.length>3&&Et.jsxs("p",{children:["+",I.events.length-3," more in Field guide"]})]})]}),s&&Et.jsxs("aside",{id:"test-panel",className:"panel","aria-label":s==="test"?"Test view":"Field guide",children:[Et.jsxs("div",{className:"panel-title",children:[Et.jsxs("div",{children:[Et.jsx("small",{children:s==="test"?"SIMULATED INPUT":"HOW THIS WORLD WORKS"}),Et.jsx("h2",{children:s==="test"?"Test playground":"Field guide"})]}),Et.jsx("button",{"aria-label":"Close panel",onClick:tt,children:"×"})]}),Et.jsx("div",{className:"panel-content",children:s==="test"?Et.jsxs(Et.Fragment,{children:[Et.jsxs("details",{className:"monitor-toggle",children:[Et.jsx("summary",{children:"Block monitor"}),Et.jsx("div",{className:"input-preview",children:Et.jsx(Ov,{model:I,monitor:!0,onError:w})})]}),Et.jsxs("div",{className:"metrics",children:[Et.jsxs("span",{children:[F.length," blocks"]}),Et.jsxs("span",{children:[I.links," links"]}),Et.jsxs("span",{children:[F.filter(G=>G.attention).length," issues"]})]}),Et.jsxs(Et.Fragment,{children:[Et.jsx("p",{className:"note",children:"8 boards · 64 base + 64 offset positions. Every layer remains active."}),Et.jsx("div",{className:"unit-picker",role:"group","aria-label":"Unit type",children:ol.map(G=>Et.jsxs("button",{"aria-pressed":p===G.id,onClick:()=>g(G.id),children:[G.name,Et.jsx("small",{children:G.id})]},G.id))}),Et.jsxs("div",{className:"edit-row",children:[Et.jsx("button",{disabled:!Ea.some(G=>(c.board[G.id]?.length||0)<7),onClick:Q,children:"Add unit"}),Et.jsx("button",{disabled:!Y.current.length,onClick:et,children:"Undo"})]}),Et.jsx("p",{className:"random-feedback",role:"status",children:R||"Choose a unit, then add. Mostly central, occasionally scattered."}),Et.jsxs("details",{className:"manual-test",children:[Et.jsx("summary",{children:"Precise placement & board layout"}),Et.jsxs("label",{children:["Board layout",Et.jsx("select",{value:c.module_layout.grid_cols,onChange:G=>V(Rh(c,Number(G.target.value))),children:[1,2,4,8].map(G=>Et.jsxs("option",{value:G,children:[8/G," rows × ",G," columns"]},G))})]}),Et.jsx("div",{className:"board-map",role:"group","aria-label":"Select a board",style:{gridTemplateColumns:`repeat(${c.module_layout.grid_cols},1fr)`},children:_p.map(G=>Et.jsxs("button",{"aria-pressed":T===G,onClick:()=>{y(G),m(Ea.find(L=>L.port===G).id)},children:[G,Et.jsxs("small",{children:[Ea.filter(L=>L.port===G).reduce((L,B)=>L+(c.board[B.id]?.length||0),0)," blocks"]})]},G))}),Et.jsxs("label",{children:["Position",Et.jsx("select",{value:f,onChange:G=>m(G.target.value),children:Ea.filter(G=>G.port===T).map(G=>Et.jsxs("option",{value:G.id,children:[G.layer," · row ",G.row%2+1," / col ",G.col+1]},G.id))})]}),Et.jsxs("div",{className:"edit-row",children:[Et.jsx("button",{disabled:z.length>=7,onClick:()=>V(wh(c,f,"add",p)),children:"Add block"}),Et.jsx("button",{disabled:!z.length,onClick:()=>V(wh(c,f,"remove")),children:"Remove top"})]}),Et.jsxs("p",{className:"stack",children:["Bottom → top: ",z.join(" / ")||"Empty"]})]}),Et.jsxs("label",{children:["Example",Et.jsx("select",{value:v,onChange:G=>_(G.target.value),children:b_.map((G,L)=>Et.jsx("option",{value:L,children:G.name},G.name))})]}),Et.jsxs("div",{className:"edit-row secondary",children:[Et.jsx("button",{onClick:()=>{V(Rh(HM(b_[Number(v)].stacks),c.module_layout.grid_cols)),y("A0"),m(Ea[0].id),E(G=>G+1)},children:"Load sample"}),Et.jsx("button",{onClick:()=>V(Rh(md(),c.module_layout.grid_cols)),children:"Clear test board"})]})]}),Et.jsx("div",{className:"legend",children:ol.map(G=>Et.jsxs("span",{children:[Et.jsx("i",{style:{background:G.color}}),G.id," ",G.name]},G.id))})]}):Et.jsxs(Et.Fragment,{children:[Et.jsx("p",{className:"note",children:"Six roles. Countless connections. Neighboring modules shape each other; every layer contributes."}),ol.map(G=>Et.jsxs("div",{className:"type",children:[Et.jsx("i",{style:{background:G.color}}),Et.jsxs("div",{children:[Et.jsxs("h3",{children:[G.id," / ",G.name]}),Et.jsx("p",{children:G.description})]})]},G.id)),Et.jsx("h3",{className:"section-label",children:"IN THIS COMPOSITION"}),I.events.length?I.events.map(G=>Et.jsx("p",{className:"event",children:G},G)):Et.jsx("p",{className:"note",children:"Connect different modules to discover a habitat or a shared space."}),Et.jsx("p",{className:"note",children:"Links follow face-adjacent positions and stack heights. Moving the camera does not change them."})]})})]})]})}PM.createRoot(document.getElementById("root")).render(Et.jsx(XC,{}));
