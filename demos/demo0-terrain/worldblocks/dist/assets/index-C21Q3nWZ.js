(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function kM(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var rd={exports:{}},sl={};var uv;function XM(){if(uv)return sl;uv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var f in o)f!=="key"&&(c[f]=o[f])}else c=o;return o=c.ref,{$$typeof:r,type:a,key:u,ref:o!==void 0?o:null,props:c}}return sl.Fragment=t,sl.jsx=n,sl.jsxs=n,sl}var fv;function WM(){return fv||(fv=1,rd.exports=XM()),rd.exports}var Yt=WM(),od={exports:{}},pe={};var hv;function YM(){if(hv)return pe;hv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.iterator;function y(I){return I===null||typeof I!="object"?null:(I=v&&I[v]||I["@@iterator"],typeof I=="function"?I:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,S={};function x(I,at,gt){this.props=I,this.context=at,this.refs=S,this.updater=gt||M}x.prototype.isReactComponent={},x.prototype.setState=function(I,at){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,at,"setState")},x.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function R(){}R.prototype=x.prototype;function w(I,at,gt){this.props=I,this.context=at,this.refs=S,this.updater=gt||M}var A=w.prototype=new R;A.constructor=w,b(A,x.prototype),A.isPureReactComponent=!0;var N=Array.isArray;function O(){}var z={H:null,A:null,T:null,S:null},V=Object.prototype.hasOwnProperty;function T(I,at,gt){var Rt=gt.ref;return{$$typeof:r,type:I,key:at,ref:Rt!==void 0?Rt:null,props:gt}}function D(I,at){return T(I.type,at,I.props)}function F(I){return typeof I=="object"&&I!==null&&I.$$typeof===r}function H(I){var at={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(gt){return at[gt]})}var j=/\/+/g;function et(I,at){return typeof I=="object"&&I!==null&&I.key!=null?H(""+I.key):at.toString(36)}function rt(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(O,O):(I.status="pending",I.then(function(at){I.status==="pending"&&(I.status="fulfilled",I.value=at)},function(at){I.status==="pending"&&(I.status="rejected",I.reason=at)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function B(I,at,gt,Rt,Lt){var P=typeof I;(P==="undefined"||P==="boolean")&&(I=null);var X=!1;if(I===null)X=!0;else switch(P){case"bigint":case"string":case"number":X=!0;break;case"object":switch(I.$$typeof){case r:case t:X=!0;break;case _:return X=I._init,B(X(I._payload),at,gt,Rt,Lt)}}if(X)return Lt=Lt(I),X=Rt===""?"."+et(I,0):Rt,N(Lt)?(gt="",X!=null&&(gt=X.replace(j,"$&/")+"/"),B(Lt,at,gt,"",function(ut){return ut})):Lt!=null&&(F(Lt)&&(Lt=D(Lt,gt+(Lt.key==null||I&&I.key===Lt.key?"":(""+Lt.key).replace(j,"$&/")+"/")+X)),at.push(Lt)),1;X=0;var it=Rt===""?".":Rt+":";if(N(I))for(var pt=0;pt<I.length;pt++)Rt=I[pt],P=it+et(Rt,pt),X+=B(Rt,at,gt,P,Lt);else if(pt=y(I),typeof pt=="function")for(I=pt.call(I),pt=0;!(Rt=I.next()).done;)Rt=Rt.value,P=it+et(Rt,pt++),X+=B(Rt,at,gt,P,Lt);else if(P==="object"){if(typeof I.then=="function")return B(rt(I),at,gt,Rt,Lt);throw at=String(I),Error("Objects are not valid as a React child (found: "+(at==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":at)+"). If you meant to render a collection of children, use an array instead.")}return X}function k(I,at,gt){if(I==null)return I;var Rt=[],Lt=0;return B(I,Rt,"","",function(P){return at.call(gt,P,Lt++)}),Rt}function q(I){if(I._status===-1){var at=I._result;at=at(),at.then(function(gt){(I._status===0||I._status===-1)&&(I._status=1,I._result=gt)},function(gt){(I._status===0||I._status===-1)&&(I._status=2,I._result=gt)}),I._status===-1&&(I._status=0,I._result=at)}if(I._status===1)return I._result.default;throw I._result}var ft=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var at=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(at))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},vt={map:k,forEach:function(I,at,gt){k(I,function(){at.apply(this,arguments)},gt)},count:function(I){var at=0;return k(I,function(){at++}),at},toArray:function(I){return k(I,function(at){return at})||[]},only:function(I){if(!F(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return pe.Activity=g,pe.Children=vt,pe.Component=x,pe.Fragment=n,pe.Profiler=o,pe.PureComponent=w,pe.StrictMode=a,pe.Suspense=p,pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,pe.__COMPILER_RUNTIME={__proto__:null,c:function(I){return z.H.useMemoCache(I)}},pe.cache=function(I){return function(){return I.apply(null,arguments)}},pe.cacheSignal=function(){return null},pe.cloneElement=function(I,at,gt){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var Rt=b({},I.props),Lt=I.key;if(at!=null)for(P in at.key!==void 0&&(Lt=""+at.key),at)!V.call(at,P)||P==="key"||P==="__self"||P==="__source"||P==="ref"&&at.ref===void 0||(Rt[P]=at[P]);var P=arguments.length-2;if(P===1)Rt.children=gt;else if(1<P){for(var X=Array(P),it=0;it<P;it++)X[it]=arguments[it+2];Rt.children=X}return T(I.type,Lt,Rt)},pe.createContext=function(I){return I={$$typeof:u,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:c,_context:I},I},pe.createElement=function(I,at,gt){var Rt,Lt={},P=null;if(at!=null)for(Rt in at.key!==void 0&&(P=""+at.key),at)V.call(at,Rt)&&Rt!=="key"&&Rt!=="__self"&&Rt!=="__source"&&(Lt[Rt]=at[Rt]);var X=arguments.length-2;if(X===1)Lt.children=gt;else if(1<X){for(var it=Array(X),pt=0;pt<X;pt++)it[pt]=arguments[pt+2];Lt.children=it}if(I&&I.defaultProps)for(Rt in X=I.defaultProps,X)Lt[Rt]===void 0&&(Lt[Rt]=X[Rt]);return T(I,P,Lt)},pe.createRef=function(){return{current:null}},pe.forwardRef=function(I){return{$$typeof:f,render:I}},pe.isValidElement=F,pe.lazy=function(I){return{$$typeof:_,_payload:{_status:-1,_result:I},_init:q}},pe.memo=function(I,at){return{$$typeof:d,type:I,compare:at===void 0?null:at}},pe.startTransition=function(I){var at=z.T,gt={};z.T=gt;try{var Rt=I(),Lt=z.S;Lt!==null&&Lt(gt,Rt),typeof Rt=="object"&&Rt!==null&&typeof Rt.then=="function"&&Rt.then(O,ft)}catch(P){ft(P)}finally{at!==null&&gt.types!==null&&(at.types=gt.types),z.T=at}},pe.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},pe.use=function(I){return z.H.use(I)},pe.useActionState=function(I,at,gt){return z.H.useActionState(I,at,gt)},pe.useCallback=function(I,at){return z.H.useCallback(I,at)},pe.useContext=function(I){return z.H.useContext(I)},pe.useDebugValue=function(){},pe.useDeferredValue=function(I,at){return z.H.useDeferredValue(I,at)},pe.useEffect=function(I,at){return z.H.useEffect(I,at)},pe.useEffectEvent=function(I){return z.H.useEffectEvent(I)},pe.useId=function(){return z.H.useId()},pe.useImperativeHandle=function(I,at,gt){return z.H.useImperativeHandle(I,at,gt)},pe.useInsertionEffect=function(I,at){return z.H.useInsertionEffect(I,at)},pe.useLayoutEffect=function(I,at){return z.H.useLayoutEffect(I,at)},pe.useMemo=function(I,at){return z.H.useMemo(I,at)},pe.useOptimistic=function(I,at){return z.H.useOptimistic(I,at)},pe.useReducer=function(I,at,gt){return z.H.useReducer(I,at,gt)},pe.useRef=function(I){return z.H.useRef(I)},pe.useState=function(I){return z.H.useState(I)},pe.useSyncExternalStore=function(I,at,gt){return z.H.useSyncExternalStore(I,at,gt)},pe.useTransition=function(){return z.H.useTransition()},pe.version="19.2.8",pe}var dv;function om(){return dv||(dv=1,od.exports=YM()),od.exports}var Ae=om();const qM=kM(Ae);var ld={exports:{}},rl={},cd={exports:{}},ud={};var pv;function jM(){return pv||(pv=1,(function(r){function t(B,k){var q=B.length;B.push(k);t:for(;0<q;){var ft=q-1>>>1,vt=B[ft];if(0<o(vt,k))B[ft]=k,B[q]=vt,q=ft;else break t}}function n(B){return B.length===0?null:B[0]}function a(B){if(B.length===0)return null;var k=B[0],q=B.pop();if(q!==k){B[0]=q;t:for(var ft=0,vt=B.length,I=vt>>>1;ft<I;){var at=2*(ft+1)-1,gt=B[at],Rt=at+1,Lt=B[Rt];if(0>o(gt,q))Rt<vt&&0>o(Lt,gt)?(B[ft]=Lt,B[Rt]=q,ft=Rt):(B[ft]=gt,B[at]=q,ft=at);else if(Rt<vt&&0>o(Lt,q))B[ft]=Lt,B[Rt]=q,ft=Rt;else break t}}return k}function o(B,k){var q=B.sortIndex-k.sortIndex;return q!==0?q:B.id-k.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var u=Date,f=u.now();r.unstable_now=function(){return u.now()-f}}var p=[],d=[],_=1,g=null,v=3,y=!1,M=!1,b=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function A(B){for(var k=n(d);k!==null;){if(k.callback===null)a(d);else if(k.startTime<=B)a(d),k.sortIndex=k.expirationTime,t(p,k);else break;k=n(d)}}function N(B){if(b=!1,A(B),!M)if(n(p)!==null)M=!0,O||(O=!0,H());else{var k=n(d);k!==null&&rt(N,k.startTime-B)}}var O=!1,z=-1,V=5,T=-1;function D(){return S?!0:!(r.unstable_now()-T<V)}function F(){if(S=!1,O){var B=r.unstable_now();T=B;var k=!0;try{t:{M=!1,b&&(b=!1,R(z),z=-1),y=!0;var q=v;try{e:{for(A(B),g=n(p);g!==null&&!(g.expirationTime>B&&D());){var ft=g.callback;if(typeof ft=="function"){g.callback=null,v=g.priorityLevel;var vt=ft(g.expirationTime<=B);if(B=r.unstable_now(),typeof vt=="function"){g.callback=vt,A(B),k=!0;break e}g===n(p)&&a(p),A(B)}else a(p);g=n(p)}if(g!==null)k=!0;else{var I=n(d);I!==null&&rt(N,I.startTime-B),k=!1}}break t}finally{g=null,v=q,y=!1}k=void 0}}finally{k?H():O=!1}}}var H;if(typeof w=="function")H=function(){w(F)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,et=j.port2;j.port1.onmessage=F,H=function(){et.postMessage(null)}}else H=function(){x(F,0)};function rt(B,k){z=x(function(){B(r.unstable_now())},k)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(B){B.callback=null},r.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<B?Math.floor(1e3/B):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_next=function(B){switch(v){case 1:case 2:case 3:var k=3;break;default:k=v}var q=v;v=k;try{return B()}finally{v=q}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(B,k){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var q=v;v=B;try{return k()}finally{v=q}},r.unstable_scheduleCallback=function(B,k,q){var ft=r.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ft+q:ft):q=ft,B){case 1:var vt=-1;break;case 2:vt=250;break;case 5:vt=1073741823;break;case 4:vt=1e4;break;default:vt=5e3}return vt=q+vt,B={id:_++,callback:k,priorityLevel:B,startTime:q,expirationTime:vt,sortIndex:-1},q>ft?(B.sortIndex=q,t(d,B),n(p)===null&&B===n(d)&&(b?(R(z),z=-1):b=!0,rt(N,q-ft))):(B.sortIndex=vt,t(p,B),M||y||(M=!0,O||(O=!0,H()))),B},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(B){var k=v;return function(){var q=v;v=k;try{return B.apply(this,arguments)}finally{v=q}}}})(ud)),ud}var mv;function ZM(){return mv||(mv=1,cd.exports=jM()),cd.exports}var fd={exports:{}},Fn={};var gv;function KM(){if(gv)return Fn;gv=1;var r=om();function t(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)d+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(p,d,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:g==null?null:""+g,children:p,containerInfo:d,implementation:_}}var u=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Fn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Fn.createPortal=function(p,d){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return c(p,d,null,_)},Fn.flushSync=function(p){var d=u.T,_=a.p;try{if(u.T=null,a.p=2,p)return p()}finally{u.T=d,a.p=_,a.d.f()}},Fn.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(p,d))},Fn.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Fn.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var _=d.as,g=f(_,d.crossOrigin),v=typeof d.integrity=="string"?d.integrity:void 0,y=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;_==="style"?a.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:g,integrity:v,fetchPriority:y}):_==="script"&&a.d.X(p,{crossOrigin:g,integrity:v,fetchPriority:y,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Fn.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var _=f(d.as,d.crossOrigin);a.d.M(p,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(p)},Fn.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var _=d.as,g=f(_,d.crossOrigin);a.d.L(p,_,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Fn.preloadModule=function(p,d){if(typeof p=="string")if(d){var _=f(d.as,d.crossOrigin);a.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(p)},Fn.requestFormReset=function(p){a.d.r(p)},Fn.unstable_batchedUpdates=function(p,d){return p(d)},Fn.useFormState=function(p,d,_){return u.H.useFormState(p,d,_)},Fn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Fn.version="19.2.8",Fn}var _v;function QM(){if(_v)return fd.exports;_v=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),fd.exports=KM(),fd.exports}var vv;function JM(){if(vv)return rl;vv=1;var r=ZM(),t=om(),n=QM();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function u(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function f(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(a(188))}function d(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(a(188));return i!==e?null:e}for(var s=e,l=i;;){var h=s.return;if(h===null)break;var m=h.alternate;if(m===null){if(l=h.return,l!==null){s=l;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===s)return p(h),e;if(m===l)return p(h),i;m=m.sibling}throw Error(a(188))}if(s.return!==l.return)s=h,l=m;else{for(var E=!1,U=h.child;U;){if(U===s){E=!0,s=h,l=m;break}if(U===l){E=!0,l=h,s=m;break}U=U.sibling}if(!E){for(U=m.child;U;){if(U===s){E=!0,s=m,l=h;break}if(U===l){E=!0,l=m,s=h;break}U=U.sibling}if(!E)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:i}function _(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=_(e),i!==null)return i;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),w=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function H(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var j=Symbol.for("react.client.reference");function et(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===j?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case x:return"Profiler";case S:return"StrictMode";case N:return"Suspense";case O:return"SuspenseList";case T:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case w:return e.displayName||"Context";case R:return(e._context.displayName||"Context")+".Consumer";case A:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return i=e.displayName||null,i!==null?i:et(e.type)||"Memo";case V:i=e._payload,e=e._init;try{return et(e(i))}catch{}}return null}var rt=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},ft=[],vt=-1;function I(e){return{current:e}}function at(e){0>vt||(e.current=ft[vt],ft[vt]=null,vt--)}function gt(e,i){vt++,ft[vt]=e.current,e.current=i}var Rt=I(null),Lt=I(null),P=I(null),X=I(null);function it(e,i){switch(gt(P,i),gt(Lt,e),gt(Rt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?N_(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=N_(i),e=O_(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}at(Rt),gt(Rt,e)}function pt(){at(Rt),at(Lt),at(P)}function ut(e){e.memoizedState!==null&&gt(X,e);var i=Rt.current,s=O_(i,e.type);i!==s&&(gt(Lt,e),gt(Rt,s))}function Et(e){Lt.current===e&&(at(Rt),at(Lt)),X.current===e&&(at(X),el._currentValue=q)}var Nt,Ot;function Ft(e){if(Nt===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Nt=i&&i[1]||"",Ot=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Nt+e+Ot}var ee=!1;function Dt(e,i){if(!e||ee)return"";ee=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var St=function(){throw Error()};if(Object.defineProperty(St.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(St,[])}catch(dt){var ct=dt}Reflect.construct(e,[],St)}else{try{St.call()}catch(dt){ct=dt}e.call(St.prototype)}}else{try{throw Error()}catch(dt){ct=dt}(St=e())&&typeof St.catch=="function"&&St.catch(function(){})}}catch(dt){if(dt&&ct&&typeof dt.stack=="string")return[dt.stack,ct.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),E=m[0],U=m[1];if(E&&U){var Y=E.split(`
`),ot=U.split(`
`);for(h=l=0;l<Y.length&&!Y[l].includes("DetermineComponentFrameRoot");)l++;for(;h<ot.length&&!ot[h].includes("DetermineComponentFrameRoot");)h++;if(l===Y.length||h===ot.length)for(l=Y.length-1,h=ot.length-1;1<=l&&0<=h&&Y[l]!==ot[h];)h--;for(;1<=l&&0<=h;l--,h--)if(Y[l]!==ot[h]){if(l!==1||h!==1)do if(l--,h--,0>h||Y[l]!==ot[h]){var _t=`
`+Y[l].replace(" at new "," at ");return e.displayName&&_t.includes("<anonymous>")&&(_t=_t.replace("<anonymous>",e.displayName)),_t}while(1<=l&&0<=h);break}}}finally{ee=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?Ft(s):""}function ue(e,i){switch(e.tag){case 26:case 27:case 5:return Ft(e.type);case 16:return Ft("Lazy");case 13:return e.child!==i&&i!==null?Ft("Suspense Fallback"):Ft("Suspense");case 19:return Ft("SuspenseList");case 0:case 15:return Dt(e.type,!1);case 11:return Dt(e.type.render,!1);case 1:return Dt(e.type,!0);case 31:return Ft("Activity");default:return""}}function W(e){try{var i="",s=null;do i+=ue(e,s),s=e,e=e.return;while(e);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Se=Object.prototype.hasOwnProperty,ge=r.unstable_scheduleCallback,we=r.unstable_cancelCallback,Jt=r.unstable_shouldYield,G=r.unstable_requestPaint,C=r.unstable_now,J=r.unstable_getCurrentPriorityLevel,xt=r.unstable_ImmediatePriority,bt=r.unstable_UserBlockingPriority,mt=r.unstable_NormalPriority,te=r.unstable_LowPriority,zt=r.unstable_IdlePriority,Zt=r.log,le=r.unstable_setDisableYieldValue,At=null,wt=null;function Xt(e){if(typeof Zt=="function"&&le(e),wt&&typeof wt.setStrictMode=="function")try{wt.setStrictMode(At,e)}catch{}}var Vt=Math.clz32?Math.clz32:Q,Pt=Math.log,_e=Math.LN2;function Q(e){return e>>>=0,e===0?32:31-(Pt(e)/_e|0)|0}var It=256,Ct=262144,kt=4194304;function Tt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Mt(e,i,s){var l=e.pendingLanes;if(l===0)return 0;var h=0,m=e.suspendedLanes,E=e.pingedLanes;e=e.warmLanes;var U=l&134217727;return U!==0?(l=U&~m,l!==0?h=Tt(l):(E&=U,E!==0?h=Tt(E):s||(s=U&~e,s!==0&&(h=Tt(s))))):(U=l&~m,U!==0?h=Tt(U):E!==0?h=Tt(E):s||(s=l&~e,s!==0&&(h=Tt(s)))),h===0?0:i!==0&&i!==h&&(i&m)===0&&(m=h&-h,s=i&-i,m>=s||m===32&&(s&4194048)!==0)?i:h}function Ut(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function fe(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ve(){var e=kt;return kt<<=1,(kt&62914560)===0&&(kt=4194304),e}function De(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function Bn(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ri(e,i,s,l,h,m){var E=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var U=e.entanglements,Y=e.expirationTimes,ot=e.hiddenUpdates;for(s=E&~s;0<s;){var _t=31-Vt(s),St=1<<_t;U[_t]=0,Y[_t]=-1;var ct=ot[_t];if(ct!==null)for(ot[_t]=null,_t=0;_t<ct.length;_t++){var dt=ct[_t];dt!==null&&(dt.lane&=-536870913)}s&=~St}l!==0&&Bl(e,l,0),m!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=m&~(E&~i))}function Bl(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-Vt(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|s&261930}function ho(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var l=31-Vt(s),h=1<<l;h&i|e[l]&i&&(e[l]|=i),s&=~h}}function Zs(e,i){var s=i&-i;return s=(s&42)!==0?1:po(s),(s&(e.suspendedLanes|i))!==0?0:s}function po(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ks(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function mo(){var e=k.p;return e!==0?e:(e=window.event,e===void 0?32:iv(e.type))}function Hi(e,i){var s=k.p;try{return k.p=e,i()}finally{k.p=s}}var mi=Math.random().toString(36).slice(2),dn="__reactFiber$"+mi,An="__reactProps$"+mi,wi="__reactContainer$"+mi,Qs="__reactEvents$"+mi,Js="__reactListeners$"+mi,Fl="__reactHandles$"+mi,go="__reactResources$"+mi,gs="__reactMarker$"+mi;function _o(e){delete e[dn],delete e[An],delete e[Qs],delete e[Js],delete e[Fl]}function Pa(e){var i=e[dn];if(i)return i;for(var s=e.parentNode;s;){if(i=s[wi]||s[dn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=G_(e);e!==null;){if(s=e[dn])return s;e=G_(e)}return i}e=s,s=e.parentNode}return null}function Ba(e){if(e=e[dn]||e[wi]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function _s(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function Fa(e){var i=e[go];return i||(i=e[go]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function L(e){e[gs]=!0}var $=new Set,ht={};function lt(e,i){nt(e,i),nt(e+"Capture",i)}function nt(e,i){for(ht[e]=i,e=0;e<i.length;e++)$.add(i[e])}var Bt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Wt={},Ht={};function qt(e){return Se.call(Ht,e)?!0:Se.call(Wt,e)?!1:Bt.test(e)?Ht[e]=!0:(Wt[e]=!0,!1)}function Kt(e,i,s){if(qt(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function se(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function Qt(e,i,s,l){if(l===null)e.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+l)}}function re(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Be(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function sn(e,i,s){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var h=l.get,m=l.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(E){s=""+E,m.call(this,E)}}),Object.defineProperty(e,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(E){s=""+E},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Je(e){if(!e._valueTracker){var i=Be(e)?"checked":"value";e._valueTracker=sn(e,i,""+e[i])}}function Ge(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return e&&(l=Be(e)?e.checked?"true":"false":e.value),e=l,e!==s?(i.setValue(e),!0):!1}function ne(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Fe=/[\n"\\]/g;function he(e){return e.replace(Fe,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Rn(e,i,s,l,h,m,E,U){e.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.type=E:e.removeAttribute("type"),i!=null?E==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+re(i)):e.value!==""+re(i)&&(e.value=""+re(i)):E!=="submit"&&E!=="reset"||e.removeAttribute("value"),i!=null?wn(e,E,re(i)):s!=null?wn(e,E,re(s)):l!=null&&e.removeAttribute("value"),h==null&&m!=null&&(e.defaultChecked=!!m),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),U!=null&&typeof U!="function"&&typeof U!="symbol"&&typeof U!="boolean"?e.name=""+re(U):e.removeAttribute("name")}function ea(e,i,s,l,h,m,E,U){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),i!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){Je(e);return}s=s!=null?""+re(s):"",i=i!=null?""+re(i):s,U||i===e.value||(e.value=i),e.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=U?e.checked:!!l,e.defaultChecked=!!l,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(e.name=E),Je(e)}function wn(e,i,s){i==="number"&&ne(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function gi(e,i,s,l){if(e=e.options,i){i={};for(var h=0;h<s.length;h++)i["$"+s[h]]=!0;for(s=0;s<e.length;s++)h=i.hasOwnProperty("$"+e[s].value),e[s].selected!==h&&(e[s].selected=h),h&&l&&(e[s].defaultSelected=!0)}else{for(s=""+re(s),i=null,h=0;h<e.length;h++){if(e[h].value===s){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function ke(e,i,s){if(i!=null&&(i=""+re(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+re(s):""}function Cn(e,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(rt(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=re(i),e.defaultValue=s,l=e.textContent,l===s&&l!==""&&l!==null&&(e.value=l),Je(e)}function yn(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var Dn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Un(e,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,s):typeof s!="number"||s===0||Dn.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function $s(e,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&s[h]!==l&&Un(e,h,l)}else for(var m in i)i.hasOwnProperty(m)&&Un(e,m,i[m])}function Ci(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Iy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Hy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Il(e){return Hy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function na(){}var nf=null;function af(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var tr=null,er=null;function Lm(e){var i=Ba(e);if(i&&(e=i.stateNode)){var s=e[An]||null;t:switch(e=i.stateNode,i.type){case"input":if(Rn(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+he(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==e&&l.form===e.form){var h=l[An]||null;if(!h)throw Error(a(90));Rn(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===e.form&&Ge(l)}break t;case"textarea":ke(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&gi(e,!!s.multiple,i,!1)}}}var sf=!1;function Nm(e,i,s){if(sf)return e(i,s);sf=!0;try{var l=e(i);return l}finally{if(sf=!1,(tr!==null||er!==null)&&(Ac(),tr&&(i=tr,e=er,er=tr=null,Lm(i),e)))for(i=0;i<e.length;i++)Lm(e[i])}}function vo(e,i){var s=e.stateNode;if(s===null)return null;var l=s[An]||null;if(l===null)return null;s=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var ia=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rf=!1;if(ia)try{var xo={};Object.defineProperty(xo,"passive",{get:function(){rf=!0}}),window.addEventListener("test",xo,xo),window.removeEventListener("test",xo,xo)}catch{rf=!1}var Ia=null,of=null,Hl=null;function Om(){if(Hl)return Hl;var e,i=of,s=i.length,l,h="value"in Ia?Ia.value:Ia.textContent,m=h.length;for(e=0;e<s&&i[e]===h[e];e++);var E=s-e;for(l=1;l<=E&&i[s-l]===h[m-l];l++);return Hl=h.slice(e,1<l?1-l:void 0)}function Gl(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Vl(){return!0}function zm(){return!1}function Kn(e){function i(s,l,h,m,E){this._reactName=s,this._targetInst=h,this.type=l,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var U in e)e.hasOwnProperty(U)&&(s=e[U],this[U]=s?s(m):m[U]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Vl:zm,this.isPropagationStopped=zm,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Vl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Vl)},persist:function(){},isPersistent:Vl}),i}var vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kl=Kn(vs),yo=g({},vs,{view:0,detail:0}),Gy=Kn(yo),lf,cf,So,Xl=g({},yo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ff,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==So&&(So&&e.type==="mousemove"?(lf=e.screenX-So.screenX,cf=e.screenY-So.screenY):cf=lf=0,So=e),lf)},movementY:function(e){return"movementY"in e?e.movementY:cf}}),Pm=Kn(Xl),Vy=g({},Xl,{dataTransfer:0}),ky=Kn(Vy),Xy=g({},yo,{relatedTarget:0}),uf=Kn(Xy),Wy=g({},vs,{animationName:0,elapsedTime:0,pseudoElement:0}),Yy=Kn(Wy),qy=g({},vs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jy=Kn(qy),Zy=g({},vs,{data:0}),Bm=Kn(Zy),Ky={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $y(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=Jy[e])?!!i[e]:!1}function ff(){return $y}var tS=g({},yo,{key:function(e){if(e.key){var i=Ky[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Gl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ff,charCode:function(e){return e.type==="keypress"?Gl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Gl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),eS=Kn(tS),nS=g({},Xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fm=Kn(nS),iS=g({},yo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ff}),aS=Kn(iS),sS=g({},vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),rS=Kn(sS),oS=g({},Xl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),lS=Kn(oS),cS=g({},vs,{newState:0,oldState:0}),uS=Kn(cS),fS=[9,13,27,32],hf=ia&&"CompositionEvent"in window,Mo=null;ia&&"documentMode"in document&&(Mo=document.documentMode);var hS=ia&&"TextEvent"in window&&!Mo,Im=ia&&(!hf||Mo&&8<Mo&&11>=Mo),Hm=" ",Gm=!1;function Vm(e,i){switch(e){case"keyup":return fS.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function km(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var nr=!1;function dS(e,i){switch(e){case"compositionend":return km(i);case"keypress":return i.which!==32?null:(Gm=!0,Hm);case"textInput":return e=i.data,e===Hm&&Gm?null:e;default:return null}}function pS(e,i){if(nr)return e==="compositionend"||!hf&&Vm(e,i)?(e=Om(),Hl=of=Ia=null,nr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Im&&i.locale!=="ko"?null:i.data;default:return null}}var mS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xm(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!mS[e.type]:i==="textarea"}function Wm(e,i,s,l){tr?er?er.push(l):er=[l]:tr=l,i=Nc(i,"onChange"),0<i.length&&(s=new kl("onChange","change",null,s,l),e.push({event:s,listeners:i}))}var Eo=null,bo=null;function gS(e){R_(e,0)}function Wl(e){var i=_s(e);if(Ge(i))return e}function Ym(e,i){if(e==="change")return i}var qm=!1;if(ia){var df;if(ia){var pf="oninput"in document;if(!pf){var jm=document.createElement("div");jm.setAttribute("oninput","return;"),pf=typeof jm.oninput=="function"}df=pf}else df=!1;qm=df&&(!document.documentMode||9<document.documentMode)}function Zm(){Eo&&(Eo.detachEvent("onpropertychange",Km),bo=Eo=null)}function Km(e){if(e.propertyName==="value"&&Wl(bo)){var i=[];Wm(i,bo,e,af(e)),Nm(gS,i)}}function _S(e,i,s){e==="focusin"?(Zm(),Eo=i,bo=s,Eo.attachEvent("onpropertychange",Km)):e==="focusout"&&Zm()}function vS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Wl(bo)}function xS(e,i){if(e==="click")return Wl(i)}function yS(e,i){if(e==="input"||e==="change")return Wl(i)}function SS(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var ni=typeof Object.is=="function"?Object.is:SS;function To(e,i){if(ni(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var h=s[l];if(!Se.call(i,h)||!ni(e[h],i[h]))return!1}return!0}function Qm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Jm(e,i){var s=Qm(e);e=0;for(var l;s;){if(s.nodeType===3){if(l=e+s.textContent.length,e<=i&&l>=i)return{node:s,offset:i-e};e=l}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=Qm(s)}}function $m(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?$m(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function t0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=ne(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=ne(e.document)}return i}function mf(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var MS=ia&&"documentMode"in document&&11>=document.documentMode,ir=null,gf=null,Ao=null,_f=!1;function e0(e,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;_f||ir==null||ir!==ne(l)||(l=ir,"selectionStart"in l&&mf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ao&&To(Ao,l)||(Ao=l,l=Nc(gf,"onSelect"),0<l.length&&(i=new kl("onSelect","select",null,i,s),e.push({event:i,listeners:l}),i.target=ir)))}function xs(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var ar={animationend:xs("Animation","AnimationEnd"),animationiteration:xs("Animation","AnimationIteration"),animationstart:xs("Animation","AnimationStart"),transitionrun:xs("Transition","TransitionRun"),transitionstart:xs("Transition","TransitionStart"),transitioncancel:xs("Transition","TransitionCancel"),transitionend:xs("Transition","TransitionEnd")},vf={},n0={};ia&&(n0=document.createElement("div").style,"AnimationEvent"in window||(delete ar.animationend.animation,delete ar.animationiteration.animation,delete ar.animationstart.animation),"TransitionEvent"in window||delete ar.transitionend.transition);function ys(e){if(vf[e])return vf[e];if(!ar[e])return e;var i=ar[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in n0)return vf[e]=i[s];return e}var i0=ys("animationend"),a0=ys("animationiteration"),s0=ys("animationstart"),ES=ys("transitionrun"),bS=ys("transitionstart"),TS=ys("transitioncancel"),r0=ys("transitionend"),o0=new Map,xf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xf.push("scrollEnd");function Di(e,i){o0.set(e,i),lt(i,[e])}var Yl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},_i=[],sr=0,yf=0;function ql(){for(var e=sr,i=yf=sr=0;i<e;){var s=_i[i];_i[i++]=null;var l=_i[i];_i[i++]=null;var h=_i[i];_i[i++]=null;var m=_i[i];if(_i[i++]=null,l!==null&&h!==null){var E=l.pending;E===null?h.next=h:(h.next=E.next,E.next=h),l.pending=h}m!==0&&l0(s,h,m)}}function jl(e,i,s,l){_i[sr++]=e,_i[sr++]=i,_i[sr++]=s,_i[sr++]=l,yf|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Sf(e,i,s,l){return jl(e,i,s,l),Zl(e)}function Ss(e,i){return jl(e,null,null,i),Zl(e)}function l0(e,i,s){e.lanes|=s;var l=e.alternate;l!==null&&(l.lanes|=s);for(var h=!1,m=e.return;m!==null;)m.childLanes|=s,l=m.alternate,l!==null&&(l.childLanes|=s),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(h=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,h&&i!==null&&(h=31-Vt(s),e=m.hiddenUpdates,l=e[h],l===null?e[h]=[i]:l.push(i),i.lane=s|536870912),m):null}function Zl(e){if(50<jo)throw jo=0,Dh=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var rr={};function AS(e,i,s,l){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(e,i,s,l){return new AS(e,i,s,l)}function Mf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function aa(e,i){var s=e.alternate;return s===null?(s=ii(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function c0(e,i){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Kl(e,i,s,l,h,m){var E=0;if(l=e,typeof e=="function")Mf(e)&&(E=1);else if(typeof e=="string")E=UM(e,s,Rt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case T:return e=ii(31,s,i,h),e.elementType=T,e.lanes=m,e;case b:return Ms(s.children,h,m,i);case S:E=8,h|=24;break;case x:return e=ii(12,s,i,h|2),e.elementType=x,e.lanes=m,e;case N:return e=ii(13,s,i,h),e.elementType=N,e.lanes=m,e;case O:return e=ii(19,s,i,h),e.elementType=O,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case w:E=10;break t;case R:E=9;break t;case A:E=11;break t;case z:E=14;break t;case V:E=16,l=null;break t}E=29,s=Error(a(130,e===null?"null":typeof e,"")),l=null}return i=ii(E,s,i,h),i.elementType=e,i.type=l,i.lanes=m,i}function Ms(e,i,s,l){return e=ii(7,e,l,i),e.lanes=s,e}function Ef(e,i,s){return e=ii(6,e,null,i),e.lanes=s,e}function u0(e){var i=ii(18,null,null,0);return i.stateNode=e,i}function bf(e,i,s){return i=ii(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var f0=new WeakMap;function vi(e,i){if(typeof e=="object"&&e!==null){var s=f0.get(e);return s!==void 0?s:(i={value:e,source:i,stack:W(i)},f0.set(e,i),i)}return{value:e,source:i,stack:W(i)}}var or=[],lr=0,Ql=null,Ro=0,xi=[],yi=0,Ha=null,Gi=1,Vi="";function sa(e,i){or[lr++]=Ro,or[lr++]=Ql,Ql=e,Ro=i}function h0(e,i,s){xi[yi++]=Gi,xi[yi++]=Vi,xi[yi++]=Ha,Ha=e;var l=Gi;e=Vi;var h=32-Vt(l)-1;l&=~(1<<h),s+=1;var m=32-Vt(i)+h;if(30<m){var E=h-h%5;m=(l&(1<<E)-1).toString(32),l>>=E,h-=E,Gi=1<<32-Vt(i)+h|s<<h|l,Vi=m+e}else Gi=1<<m|s<<h|l,Vi=e}function Tf(e){e.return!==null&&(sa(e,1),h0(e,1,0))}function Af(e){for(;e===Ql;)Ql=or[--lr],or[lr]=null,Ro=or[--lr],or[lr]=null;for(;e===Ha;)Ha=xi[--yi],xi[yi]=null,Vi=xi[--yi],xi[yi]=null,Gi=xi[--yi],xi[yi]=null}function d0(e,i){xi[yi++]=Gi,xi[yi++]=Vi,xi[yi++]=Ha,Gi=i.id,Vi=i.overflow,Ha=e}var Ln=null,tn=null,Ce=!1,Ga=null,Si=!1,Rf=Error(a(519));function Va(e){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw wo(vi(i,e)),Rf}function p0(e){var i=e.stateNode,s=e.type,l=e.memoizedProps;switch(i[dn]=e,i[An]=l,s){case"dialog":Ee("cancel",i),Ee("close",i);break;case"iframe":case"object":case"embed":Ee("load",i);break;case"video":case"audio":for(s=0;s<Ko.length;s++)Ee(Ko[s],i);break;case"source":Ee("error",i);break;case"img":case"image":case"link":Ee("error",i),Ee("load",i);break;case"details":Ee("toggle",i);break;case"input":Ee("invalid",i),ea(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Ee("invalid",i);break;case"textarea":Ee("invalid",i),Cn(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||U_(i.textContent,s)?(l.popover!=null&&(Ee("beforetoggle",i),Ee("toggle",i)),l.onScroll!=null&&Ee("scroll",i),l.onScrollEnd!=null&&Ee("scrollend",i),l.onClick!=null&&(i.onclick=na),i=!0):i=!1,i||Va(e,!0)}function m0(e){for(Ln=e.return;Ln;)switch(Ln.tag){case 5:case 31:case 13:Si=!1;return;case 27:case 3:Si=!0;return;default:Ln=Ln.return}}function cr(e){if(e!==Ln)return!1;if(!Ce)return m0(e),Ce=!0,!1;var i=e.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||Wh(e.type,e.memoizedProps)),s=!s),s&&tn&&Va(e),m0(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));tn=H_(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));tn=H_(e)}else i===27?(i=tn,ns(e.type)?(e=Kh,Kh=null,tn=e):tn=i):tn=Ln?Ei(e.stateNode.nextSibling):null;return!0}function Es(){tn=Ln=null,Ce=!1}function wf(){var e=Ga;return e!==null&&(ti===null?ti=e:ti.push.apply(ti,e),Ga=null),e}function wo(e){Ga===null?Ga=[e]:Ga.push(e)}var Cf=I(null),bs=null,ra=null;function ka(e,i,s){gt(Cf,i._currentValue),i._currentValue=s}function oa(e){e._currentValue=Cf.current,at(Cf)}function Df(e,i,s){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===s)break;e=e.return}}function Uf(e,i,s,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var m=h.dependencies;if(m!==null){var E=h.child;m=m.firstContext;t:for(;m!==null;){var U=m;m=h;for(var Y=0;Y<i.length;Y++)if(U.context===i[Y]){m.lanes|=s,U=m.alternate,U!==null&&(U.lanes|=s),Df(m.return,s,e),l||(E=null);break t}m=U.next}}else if(h.tag===18){if(E=h.return,E===null)throw Error(a(341));E.lanes|=s,m=E.alternate,m!==null&&(m.lanes|=s),Df(E,s,e),E=null}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===e){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}}function ur(e,i,s,l){e=null;for(var h=i,m=!1;h!==null;){if(!m){if((h.flags&524288)!==0)m=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var E=h.alternate;if(E===null)throw Error(a(387));if(E=E.memoizedProps,E!==null){var U=h.type;ni(h.pendingProps.value,E.value)||(e!==null?e.push(U):e=[U])}}else if(h===X.current){if(E=h.alternate,E===null)throw Error(a(387));E.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(el):e=[el])}h=h.return}e!==null&&Uf(i,e,s,l),i.flags|=262144}function Jl(e){for(e=e.firstContext;e!==null;){if(!ni(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ts(e){bs=e,ra=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Nn(e){return g0(bs,e)}function $l(e,i){return bs===null&&Ts(e),g0(e,i)}function g0(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},ra===null){if(e===null)throw Error(a(308));ra=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else ra=ra.next=i;return s}var RS=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},wS=r.unstable_scheduleCallback,CS=r.unstable_NormalPriority,pn={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Lf(){return{controller:new RS,data:new Map,refCount:0}}function Co(e){e.refCount--,e.refCount===0&&wS(CS,function(){e.controller.abort()})}var Do=null,Nf=0,fr=0,hr=null;function DS(e,i){if(Do===null){var s=Do=[];Nf=0,fr=Ph(),hr={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Nf++,i.then(_0,_0),i}function _0(){if(--Nf===0&&Do!==null){hr!==null&&(hr.status="fulfilled");var e=Do;Do=null,fr=0,hr=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function US(e,i){var s=[],l={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<s.length;h++)(0,s[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),l}var v0=B.S;B.S=function(e,i){e_=C(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&DS(e,i),v0!==null&&v0(e,i)};var As=I(null);function Of(){var e=As.current;return e!==null?e:Qe.pooledCache}function tc(e,i){i===null?gt(As,As.current):gt(As,i.pool)}function x0(){var e=Of();return e===null?null:{parent:pn._currentValue,pool:e}}var dr=Error(a(460)),zf=Error(a(474)),ec=Error(a(542)),nc={then:function(){}};function y0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function S0(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(na,na),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,E0(e),e;default:if(typeof i.status=="string")i.then(na,na);else{if(e=Qe,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,E0(e),e}throw ws=i,dr}}function Rs(e){try{var i=e._init;return i(e._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(ws=s,dr):s}}var ws=null;function M0(){if(ws===null)throw Error(a(459));var e=ws;return ws=null,e}function E0(e){if(e===dr||e===ec)throw Error(a(483))}var pr=null,Uo=0;function ic(e){var i=Uo;return Uo+=1,pr===null&&(pr=[]),S0(pr,e,i)}function Lo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function ac(e,i){throw i.$$typeof===v?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function b0(e){function i(tt,K){if(e){var st=tt.deletions;st===null?(tt.deletions=[K],tt.flags|=16):st.push(K)}}function s(tt,K){if(!e)return null;for(;K!==null;)i(tt,K),K=K.sibling;return null}function l(tt){for(var K=new Map;tt!==null;)tt.key!==null?K.set(tt.key,tt):K.set(tt.index,tt),tt=tt.sibling;return K}function h(tt,K){return tt=aa(tt,K),tt.index=0,tt.sibling=null,tt}function m(tt,K,st){return tt.index=st,e?(st=tt.alternate,st!==null?(st=st.index,st<K?(tt.flags|=67108866,K):st):(tt.flags|=67108866,K)):(tt.flags|=1048576,K)}function E(tt){return e&&tt.alternate===null&&(tt.flags|=67108866),tt}function U(tt,K,st,yt){return K===null||K.tag!==6?(K=Ef(st,tt.mode,yt),K.return=tt,K):(K=h(K,st),K.return=tt,K)}function Y(tt,K,st,yt){var ae=st.type;return ae===b?_t(tt,K,st.props.children,yt,st.key):K!==null&&(K.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===V&&Rs(ae)===K.type)?(K=h(K,st.props),Lo(K,st),K.return=tt,K):(K=Kl(st.type,st.key,st.props,null,tt.mode,yt),Lo(K,st),K.return=tt,K)}function ot(tt,K,st,yt){return K===null||K.tag!==4||K.stateNode.containerInfo!==st.containerInfo||K.stateNode.implementation!==st.implementation?(K=bf(st,tt.mode,yt),K.return=tt,K):(K=h(K,st.children||[]),K.return=tt,K)}function _t(tt,K,st,yt,ae){return K===null||K.tag!==7?(K=Ms(st,tt.mode,yt,ae),K.return=tt,K):(K=h(K,st),K.return=tt,K)}function St(tt,K,st){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return K=Ef(""+K,tt.mode,st),K.return=tt,K;if(typeof K=="object"&&K!==null){switch(K.$$typeof){case y:return st=Kl(K.type,K.key,K.props,null,tt.mode,st),Lo(st,K),st.return=tt,st;case M:return K=bf(K,tt.mode,st),K.return=tt,K;case V:return K=Rs(K),St(tt,K,st)}if(rt(K)||H(K))return K=Ms(K,tt.mode,st,null),K.return=tt,K;if(typeof K.then=="function")return St(tt,ic(K),st);if(K.$$typeof===w)return St(tt,$l(tt,K),st);ac(tt,K)}return null}function ct(tt,K,st,yt){var ae=K!==null?K.key:null;if(typeof st=="string"&&st!==""||typeof st=="number"||typeof st=="bigint")return ae!==null?null:U(tt,K,""+st,yt);if(typeof st=="object"&&st!==null){switch(st.$$typeof){case y:return st.key===ae?Y(tt,K,st,yt):null;case M:return st.key===ae?ot(tt,K,st,yt):null;case V:return st=Rs(st),ct(tt,K,st,yt)}if(rt(st)||H(st))return ae!==null?null:_t(tt,K,st,yt,null);if(typeof st.then=="function")return ct(tt,K,ic(st),yt);if(st.$$typeof===w)return ct(tt,K,$l(tt,st),yt);ac(tt,st)}return null}function dt(tt,K,st,yt,ae){if(typeof yt=="string"&&yt!==""||typeof yt=="number"||typeof yt=="bigint")return tt=tt.get(st)||null,U(K,tt,""+yt,ae);if(typeof yt=="object"&&yt!==null){switch(yt.$$typeof){case y:return tt=tt.get(yt.key===null?st:yt.key)||null,Y(K,tt,yt,ae);case M:return tt=tt.get(yt.key===null?st:yt.key)||null,ot(K,tt,yt,ae);case V:return yt=Rs(yt),dt(tt,K,st,yt,ae)}if(rt(yt)||H(yt))return tt=tt.get(st)||null,_t(K,tt,yt,ae,null);if(typeof yt.then=="function")return dt(tt,K,st,ic(yt),ae);if(yt.$$typeof===w)return dt(tt,K,st,$l(K,yt),ae);ac(K,yt)}return null}function jt(tt,K,st,yt){for(var ae=null,Oe=null,$t=K,ve=K=0,Te=null;$t!==null&&ve<st.length;ve++){$t.index>ve?(Te=$t,$t=null):Te=$t.sibling;var ze=ct(tt,$t,st[ve],yt);if(ze===null){$t===null&&($t=Te);break}e&&$t&&ze.alternate===null&&i(tt,$t),K=m(ze,K,ve),Oe===null?ae=ze:Oe.sibling=ze,Oe=ze,$t=Te}if(ve===st.length)return s(tt,$t),Ce&&sa(tt,ve),ae;if($t===null){for(;ve<st.length;ve++)$t=St(tt,st[ve],yt),$t!==null&&(K=m($t,K,ve),Oe===null?ae=$t:Oe.sibling=$t,Oe=$t);return Ce&&sa(tt,ve),ae}for($t=l($t);ve<st.length;ve++)Te=dt($t,tt,ve,st[ve],yt),Te!==null&&(e&&Te.alternate!==null&&$t.delete(Te.key===null?ve:Te.key),K=m(Te,K,ve),Oe===null?ae=Te:Oe.sibling=Te,Oe=Te);return e&&$t.forEach(function(os){return i(tt,os)}),Ce&&sa(tt,ve),ae}function oe(tt,K,st,yt){if(st==null)throw Error(a(151));for(var ae=null,Oe=null,$t=K,ve=K=0,Te=null,ze=st.next();$t!==null&&!ze.done;ve++,ze=st.next()){$t.index>ve?(Te=$t,$t=null):Te=$t.sibling;var os=ct(tt,$t,ze.value,yt);if(os===null){$t===null&&($t=Te);break}e&&$t&&os.alternate===null&&i(tt,$t),K=m(os,K,ve),Oe===null?ae=os:Oe.sibling=os,Oe=os,$t=Te}if(ze.done)return s(tt,$t),Ce&&sa(tt,ve),ae;if($t===null){for(;!ze.done;ve++,ze=st.next())ze=St(tt,ze.value,yt),ze!==null&&(K=m(ze,K,ve),Oe===null?ae=ze:Oe.sibling=ze,Oe=ze);return Ce&&sa(tt,ve),ae}for($t=l($t);!ze.done;ve++,ze=st.next())ze=dt($t,tt,ve,ze.value,yt),ze!==null&&(e&&ze.alternate!==null&&$t.delete(ze.key===null?ve:ze.key),K=m(ze,K,ve),Oe===null?ae=ze:Oe.sibling=ze,Oe=ze);return e&&$t.forEach(function(VM){return i(tt,VM)}),Ce&&sa(tt,ve),ae}function Ke(tt,K,st,yt){if(typeof st=="object"&&st!==null&&st.type===b&&st.key===null&&(st=st.props.children),typeof st=="object"&&st!==null){switch(st.$$typeof){case y:t:{for(var ae=st.key;K!==null;){if(K.key===ae){if(ae=st.type,ae===b){if(K.tag===7){s(tt,K.sibling),yt=h(K,st.props.children),yt.return=tt,tt=yt;break t}}else if(K.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===V&&Rs(ae)===K.type){s(tt,K.sibling),yt=h(K,st.props),Lo(yt,st),yt.return=tt,tt=yt;break t}s(tt,K);break}else i(tt,K);K=K.sibling}st.type===b?(yt=Ms(st.props.children,tt.mode,yt,st.key),yt.return=tt,tt=yt):(yt=Kl(st.type,st.key,st.props,null,tt.mode,yt),Lo(yt,st),yt.return=tt,tt=yt)}return E(tt);case M:t:{for(ae=st.key;K!==null;){if(K.key===ae)if(K.tag===4&&K.stateNode.containerInfo===st.containerInfo&&K.stateNode.implementation===st.implementation){s(tt,K.sibling),yt=h(K,st.children||[]),yt.return=tt,tt=yt;break t}else{s(tt,K);break}else i(tt,K);K=K.sibling}yt=bf(st,tt.mode,yt),yt.return=tt,tt=yt}return E(tt);case V:return st=Rs(st),Ke(tt,K,st,yt)}if(rt(st))return jt(tt,K,st,yt);if(H(st)){if(ae=H(st),typeof ae!="function")throw Error(a(150));return st=ae.call(st),oe(tt,K,st,yt)}if(typeof st.then=="function")return Ke(tt,K,ic(st),yt);if(st.$$typeof===w)return Ke(tt,K,$l(tt,st),yt);ac(tt,st)}return typeof st=="string"&&st!==""||typeof st=="number"||typeof st=="bigint"?(st=""+st,K!==null&&K.tag===6?(s(tt,K.sibling),yt=h(K,st),yt.return=tt,tt=yt):(s(tt,K),yt=Ef(st,tt.mode,yt),yt.return=tt,tt=yt),E(tt)):s(tt,K)}return function(tt,K,st,yt){try{Uo=0;var ae=Ke(tt,K,st,yt);return pr=null,ae}catch($t){if($t===dr||$t===ec)throw $t;var Oe=ii(29,$t,null,tt.mode);return Oe.lanes=yt,Oe.return=tt,Oe}}}var Cs=b0(!0),T0=b0(!1),Xa=!1;function Pf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Wa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ya(e,i,s){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ie&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=Zl(e),l0(e,null,s),i}return jl(e,l,i,s),Zl(e)}function No(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,ho(e,s)}}function Ff(e,i){var s=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var h=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var E={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?h=m=E:m=m.next=E,s=s.next}while(s!==null);m===null?h=m=i:m=m.next=i}else h=m=i;s={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var If=!1;function Oo(){if(If){var e=hr;if(e!==null)throw e}}function zo(e,i,s,l){If=!1;var h=e.updateQueue;Xa=!1;var m=h.firstBaseUpdate,E=h.lastBaseUpdate,U=h.shared.pending;if(U!==null){h.shared.pending=null;var Y=U,ot=Y.next;Y.next=null,E===null?m=ot:E.next=ot,E=Y;var _t=e.alternate;_t!==null&&(_t=_t.updateQueue,U=_t.lastBaseUpdate,U!==E&&(U===null?_t.firstBaseUpdate=ot:U.next=ot,_t.lastBaseUpdate=Y))}if(m!==null){var St=h.baseState;E=0,_t=ot=Y=null,U=m;do{var ct=U.lane&-536870913,dt=ct!==U.lane;if(dt?(be&ct)===ct:(l&ct)===ct){ct!==0&&ct===fr&&(If=!0),_t!==null&&(_t=_t.next={lane:0,tag:U.tag,payload:U.payload,callback:null,next:null});t:{var jt=e,oe=U;ct=i;var Ke=s;switch(oe.tag){case 1:if(jt=oe.payload,typeof jt=="function"){St=jt.call(Ke,St,ct);break t}St=jt;break t;case 3:jt.flags=jt.flags&-65537|128;case 0:if(jt=oe.payload,ct=typeof jt=="function"?jt.call(Ke,St,ct):jt,ct==null)break t;St=g({},St,ct);break t;case 2:Xa=!0}}ct=U.callback,ct!==null&&(e.flags|=64,dt&&(e.flags|=8192),dt=h.callbacks,dt===null?h.callbacks=[ct]:dt.push(ct))}else dt={lane:ct,tag:U.tag,payload:U.payload,callback:U.callback,next:null},_t===null?(ot=_t=dt,Y=St):_t=_t.next=dt,E|=ct;if(U=U.next,U===null){if(U=h.shared.pending,U===null)break;dt=U,U=dt.next,dt.next=null,h.lastBaseUpdate=dt,h.shared.pending=null}}while(!0);_t===null&&(Y=St),h.baseState=Y,h.firstBaseUpdate=ot,h.lastBaseUpdate=_t,m===null&&(h.shared.lanes=0),Qa|=E,e.lanes=E,e.memoizedState=St}}function A0(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function R0(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)A0(s[e],i)}var mr=I(null),sc=I(0);function w0(e,i){e=ga,gt(sc,e),gt(mr,i),ga=e|i.baseLanes}function Hf(){gt(sc,ga),gt(mr,mr.current)}function Gf(){ga=sc.current,at(mr),at(sc)}var ai=I(null),Mi=null;function qa(e){var i=e.alternate;gt(fn,fn.current&1),gt(ai,e),Mi===null&&(i===null||mr.current!==null||i.memoizedState!==null)&&(Mi=e)}function Vf(e){gt(fn,fn.current),gt(ai,e),Mi===null&&(Mi=e)}function C0(e){e.tag===22?(gt(fn,fn.current),gt(ai,e),Mi===null&&(Mi=e)):ja()}function ja(){gt(fn,fn.current),gt(ai,ai.current)}function si(e){at(ai),Mi===e&&(Mi=null),at(fn)}var fn=I(0);function rc(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||jh(s)||Zh(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var la=0,me=null,je=null,mn=null,oc=!1,gr=!1,Ds=!1,lc=0,Po=0,_r=null,LS=0;function ln(){throw Error(a(321))}function kf(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!ni(e[s],i[s]))return!1;return!0}function Xf(e,i,s,l,h,m){return la=m,me=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,B.H=e===null||e.memoizedState===null?hg:sh,Ds=!1,m=s(l,h),Ds=!1,gr&&(m=U0(i,s,l,h)),D0(e),m}function D0(e){B.H=Io;var i=je!==null&&je.next!==null;if(la=0,mn=je=me=null,oc=!1,Po=0,_r=null,i)throw Error(a(300));e===null||gn||(e=e.dependencies,e!==null&&Jl(e)&&(gn=!0))}function U0(e,i,s,l){me=e;var h=0;do{if(gr&&(_r=null),Po=0,gr=!1,25<=h)throw Error(a(301));if(h+=1,mn=je=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}B.H=dg,m=i(s,l)}while(gr);return m}function NS(){var e=B.H,i=e.useState()[0];return i=typeof i.then=="function"?Bo(i):i,e=e.useState()[0],(je!==null?je.memoizedState:null)!==e&&(me.flags|=1024),i}function Wf(){var e=lc!==0;return lc=0,e}function Yf(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function qf(e){if(oc){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}oc=!1}la=0,mn=je=me=null,gr=!1,Po=lc=0,_r=null}function Wn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mn===null?me.memoizedState=mn=e:mn=mn.next=e,mn}function hn(){if(je===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var i=mn===null?me.memoizedState:mn.next;if(i!==null)mn=i,je=e;else{if(e===null)throw me.alternate===null?Error(a(467)):Error(a(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},mn===null?me.memoizedState=mn=e:mn=mn.next=e}return mn}function cc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Bo(e){var i=Po;return Po+=1,_r===null&&(_r=[]),e=S0(_r,e,i),i=me,(mn===null?i.memoizedState:mn.next)===null&&(i=i.alternate,B.H=i===null||i.memoizedState===null?hg:sh),e}function uc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Bo(e);if(e.$$typeof===w)return Nn(e)}throw Error(a(438,String(e)))}function jf(e){var i=null,s=me.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=me.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=cc(),me.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),l=0;l<e;l++)s[l]=D;return i.index++,s}function ca(e,i){return typeof i=="function"?i(e):i}function fc(e){var i=hn();return Zf(i,je,e)}function Zf(e,i,s){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var h=e.baseQueue,m=l.pending;if(m!==null){if(h!==null){var E=h.next;h.next=m.next,m.next=E}i.baseQueue=h=m,l.pending=null}if(m=e.baseState,h===null)e.memoizedState=m;else{i=h.next;var U=E=null,Y=null,ot=i,_t=!1;do{var St=ot.lane&-536870913;if(St!==ot.lane?(be&St)===St:(la&St)===St){var ct=ot.revertLane;if(ct===0)Y!==null&&(Y=Y.next={lane:0,revertLane:0,gesture:null,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null}),St===fr&&(_t=!0);else if((la&ct)===ct){ot=ot.next,ct===fr&&(_t=!0);continue}else St={lane:0,revertLane:ot.revertLane,gesture:null,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null},Y===null?(U=Y=St,E=m):Y=Y.next=St,me.lanes|=ct,Qa|=ct;St=ot.action,Ds&&s(m,St),m=ot.hasEagerState?ot.eagerState:s(m,St)}else ct={lane:St,revertLane:ot.revertLane,gesture:ot.gesture,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null},Y===null?(U=Y=ct,E=m):Y=Y.next=ct,me.lanes|=St,Qa|=St;ot=ot.next}while(ot!==null&&ot!==i);if(Y===null?E=m:Y.next=U,!ni(m,e.memoizedState)&&(gn=!0,_t&&(s=hr,s!==null)))throw s;e.memoizedState=m,e.baseState=E,e.baseQueue=Y,l.lastRenderedState=m}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Kf(e){var i=hn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var l=s.dispatch,h=s.pending,m=i.memoizedState;if(h!==null){s.pending=null;var E=h=h.next;do m=e(m,E.action),E=E.next;while(E!==h);ni(m,i.memoizedState)||(gn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,l]}function L0(e,i,s){var l=me,h=hn(),m=Ce;if(m){if(s===void 0)throw Error(a(407));s=s()}else s=i();var E=!ni((je||h).memoizedState,s);if(E&&(h.memoizedState=s,gn=!0),h=h.queue,$f(z0.bind(null,l,h,e),[e]),h.getSnapshot!==i||E||mn!==null&&mn.memoizedState.tag&1){if(l.flags|=2048,vr(9,{destroy:void 0},O0.bind(null,l,h,s,i),null),Qe===null)throw Error(a(349));m||(la&127)!==0||N0(l,i,s)}return s}function N0(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=me.updateQueue,i===null?(i=cc(),me.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function O0(e,i,s,l){i.value=s,i.getSnapshot=l,P0(i)&&B0(e)}function z0(e,i,s){return s(function(){P0(i)&&B0(e)})}function P0(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!ni(e,s)}catch{return!0}}function B0(e){var i=Ss(e,2);i!==null&&ei(i,e,2)}function Qf(e){var i=Wn();if(typeof e=="function"){var s=e;if(e=s(),Ds){Xt(!0);try{s()}finally{Xt(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:e},i}function F0(e,i,s,l){return e.baseState=s,Zf(e,je,typeof l=="function"?l:ca)}function OS(e,i,s,l,h){if(pc(e))throw Error(a(485));if(e=i.action,e!==null){var m={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};B.T!==null?s(!0):m.isTransition=!1,l(m),s=i.pending,s===null?(m.next=i.pending=m,I0(i,m)):(m.next=s.next,i.pending=s.next=m)}}function I0(e,i){var s=i.action,l=i.payload,h=e.state;if(i.isTransition){var m=B.T,E={};B.T=E;try{var U=s(h,l),Y=B.S;Y!==null&&Y(E,U),H0(e,i,U)}catch(ot){Jf(e,i,ot)}finally{m!==null&&E.types!==null&&(m.types=E.types),B.T=m}}else try{m=s(h,l),H0(e,i,m)}catch(ot){Jf(e,i,ot)}}function H0(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){G0(e,i,l)},function(l){return Jf(e,i,l)}):G0(e,i,s)}function G0(e,i,s){i.status="fulfilled",i.value=s,V0(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,I0(e,s)))}function Jf(e,i,s){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,V0(i),i=i.next;while(i!==l)}e.action=null}function V0(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function k0(e,i){return i}function X0(e,i){if(Ce){var s=Qe.formState;if(s!==null){t:{var l=me;if(Ce){if(tn){e:{for(var h=tn,m=Si;h.nodeType!==8;){if(!m){h=null;break e}if(h=Ei(h.nextSibling),h===null){h=null;break e}}m=h.data,h=m==="F!"||m==="F"?h:null}if(h){tn=Ei(h.nextSibling),l=h.data==="F!";break t}}Va(l)}l=!1}l&&(i=s[0])}}return s=Wn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:k0,lastRenderedState:i},s.queue=l,s=cg.bind(null,me,l),l.dispatch=s,l=Qf(!1),m=ah.bind(null,me,!1,l.queue),l=Wn(),h={state:i,dispatch:null,action:e,pending:null},l.queue=h,s=OS.bind(null,me,h,m,s),h.dispatch=s,l.memoizedState=e,[i,s,!1]}function W0(e){var i=hn();return Y0(i,je,e)}function Y0(e,i,s){if(i=Zf(e,i,k0)[0],e=fc(ca)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Bo(i)}catch(E){throw E===dr?ec:E}else l=i;i=hn();var h=i.queue,m=h.dispatch;return s!==i.memoizedState&&(me.flags|=2048,vr(9,{destroy:void 0},zS.bind(null,h,s),null)),[l,m,e]}function zS(e,i){e.action=i}function q0(e){var i=hn(),s=je;if(s!==null)return Y0(i,s,e);hn(),i=i.memoizedState,s=hn();var l=s.queue.dispatch;return s.memoizedState=e,[i,l,!1]}function vr(e,i,s,l){return e={tag:e,create:s,deps:l,inst:i,next:null},i=me.updateQueue,i===null&&(i=cc(),me.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(l=s.next,s.next=e,e.next=l,i.lastEffect=e),e}function j0(){return hn().memoizedState}function hc(e,i,s,l){var h=Wn();me.flags|=e,h.memoizedState=vr(1|i,{destroy:void 0},s,l===void 0?null:l)}function dc(e,i,s,l){var h=hn();l=l===void 0?null:l;var m=h.memoizedState.inst;je!==null&&l!==null&&kf(l,je.memoizedState.deps)?h.memoizedState=vr(i,m,s,l):(me.flags|=e,h.memoizedState=vr(1|i,m,s,l))}function Z0(e,i){hc(8390656,8,e,i)}function $f(e,i){dc(2048,8,e,i)}function PS(e){me.flags|=4;var i=me.updateQueue;if(i===null)i=cc(),me.updateQueue=i,i.events=[e];else{var s=i.events;s===null?i.events=[e]:s.push(e)}}function K0(e){var i=hn().memoizedState;return PS({ref:i,nextImpl:e}),function(){if((Ie&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function Q0(e,i){return dc(4,2,e,i)}function J0(e,i){return dc(4,4,e,i)}function $0(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function tg(e,i,s){s=s!=null?s.concat([e]):null,dc(4,4,$0.bind(null,i,e),s)}function th(){}function eg(e,i){var s=hn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&kf(i,l[1])?l[0]:(s.memoizedState=[e,i],e)}function ng(e,i){var s=hn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&kf(i,l[1]))return l[0];if(l=e(),Ds){Xt(!0);try{e()}finally{Xt(!1)}}return s.memoizedState=[l,i],l}function eh(e,i,s){return s===void 0||(la&1073741824)!==0&&(be&261930)===0?e.memoizedState=i:(e.memoizedState=s,e=i_(),me.lanes|=e,Qa|=e,s)}function ig(e,i,s,l){return ni(s,i)?s:mr.current!==null?(e=eh(e,s,l),ni(e,i)||(gn=!0),e):(la&42)===0||(la&1073741824)!==0&&(be&261930)===0?(gn=!0,e.memoizedState=s):(e=i_(),me.lanes|=e,Qa|=e,i)}function ag(e,i,s,l,h){var m=k.p;k.p=m!==0&&8>m?m:8;var E=B.T,U={};B.T=U,ah(e,!1,i,s);try{var Y=h(),ot=B.S;if(ot!==null&&ot(U,Y),Y!==null&&typeof Y=="object"&&typeof Y.then=="function"){var _t=US(Y,l);Fo(e,i,_t,li(e))}else Fo(e,i,l,li(e))}catch(St){Fo(e,i,{then:function(){},status:"rejected",reason:St},li())}finally{k.p=m,E!==null&&U.types!==null&&(E.types=U.types),B.T=E}}function BS(){}function nh(e,i,s,l){if(e.tag!==5)throw Error(a(476));var h=sg(e).queue;ag(e,h,i,q,s===null?BS:function(){return rg(e),s(l)})}function sg(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:q},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function rg(e){var i=sg(e);i.next===null&&(i=e.alternate.memoizedState),Fo(e,i.next.queue,{},li())}function ih(){return Nn(el)}function og(){return hn().memoizedState}function lg(){return hn().memoizedState}function FS(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=li();e=Wa(s);var l=Ya(i,e,s);l!==null&&(ei(l,i,s),No(l,i,s)),i={cache:Lf()},e.payload=i;return}i=i.return}}function IS(e,i,s){var l=li();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},pc(e)?ug(i,s):(s=Sf(e,i,s,l),s!==null&&(ei(s,e,l),fg(s,i,l)))}function cg(e,i,s){var l=li();Fo(e,i,s,l)}function Fo(e,i,s,l){var h={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(pc(e))ug(i,h);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,U=m(E,s);if(h.hasEagerState=!0,h.eagerState=U,ni(U,E))return jl(e,i,h,0),Qe===null&&ql(),!1}catch{}if(s=Sf(e,i,h,l),s!==null)return ei(s,e,l),fg(s,i,l),!0}return!1}function ah(e,i,s,l){if(l={lane:2,revertLane:Ph(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},pc(e)){if(i)throw Error(a(479))}else i=Sf(e,s,l,2),i!==null&&ei(i,e,2)}function pc(e){var i=e.alternate;return e===me||i!==null&&i===me}function ug(e,i){gr=oc=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function fg(e,i,s){if((s&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,ho(e,s)}}var Io={readContext:Nn,use:uc,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useLayoutEffect:ln,useInsertionEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useSyncExternalStore:ln,useId:ln,useHostTransitionStatus:ln,useFormState:ln,useActionState:ln,useOptimistic:ln,useMemoCache:ln,useCacheRefresh:ln};Io.useEffectEvent=ln;var hg={readContext:Nn,use:uc,useCallback:function(e,i){return Wn().memoizedState=[e,i===void 0?null:i],e},useContext:Nn,useEffect:Z0,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,hc(4194308,4,$0.bind(null,i,e),s)},useLayoutEffect:function(e,i){return hc(4194308,4,e,i)},useInsertionEffect:function(e,i){hc(4,2,e,i)},useMemo:function(e,i){var s=Wn();i=i===void 0?null:i;var l=e();if(Ds){Xt(!0);try{e()}finally{Xt(!1)}}return s.memoizedState=[l,i],l},useReducer:function(e,i,s){var l=Wn();if(s!==void 0){var h=s(i);if(Ds){Xt(!0);try{s(i)}finally{Xt(!1)}}}else h=i;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=IS.bind(null,me,e),[l.memoizedState,e]},useRef:function(e){var i=Wn();return e={current:e},i.memoizedState=e},useState:function(e){e=Qf(e);var i=e.queue,s=cg.bind(null,me,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:th,useDeferredValue:function(e,i){var s=Wn();return eh(s,e,i)},useTransition:function(){var e=Qf(!1);return e=ag.bind(null,me,e.queue,!0,!1),Wn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var l=me,h=Wn();if(Ce){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),Qe===null)throw Error(a(349));(be&127)!==0||N0(l,i,s)}h.memoizedState=s;var m={value:s,getSnapshot:i};return h.queue=m,Z0(z0.bind(null,l,m,e),[e]),l.flags|=2048,vr(9,{destroy:void 0},O0.bind(null,l,m,s,i),null),s},useId:function(){var e=Wn(),i=Qe.identifierPrefix;if(Ce){var s=Vi,l=Gi;s=(l&~(1<<32-Vt(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=lc++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=LS++,i="_"+i+"r_"+s.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:ih,useFormState:X0,useActionState:X0,useOptimistic:function(e){var i=Wn();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=ah.bind(null,me,!0,s),s.dispatch=i,[e,i]},useMemoCache:jf,useCacheRefresh:function(){return Wn().memoizedState=FS.bind(null,me)},useEffectEvent:function(e){var i=Wn(),s={impl:e};return i.memoizedState=s,function(){if((Ie&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},sh={readContext:Nn,use:uc,useCallback:eg,useContext:Nn,useEffect:$f,useImperativeHandle:tg,useInsertionEffect:Q0,useLayoutEffect:J0,useMemo:ng,useReducer:fc,useRef:j0,useState:function(){return fc(ca)},useDebugValue:th,useDeferredValue:function(e,i){var s=hn();return ig(s,je.memoizedState,e,i)},useTransition:function(){var e=fc(ca)[0],i=hn().memoizedState;return[typeof e=="boolean"?e:Bo(e),i]},useSyncExternalStore:L0,useId:og,useHostTransitionStatus:ih,useFormState:W0,useActionState:W0,useOptimistic:function(e,i){var s=hn();return F0(s,je,e,i)},useMemoCache:jf,useCacheRefresh:lg};sh.useEffectEvent=K0;var dg={readContext:Nn,use:uc,useCallback:eg,useContext:Nn,useEffect:$f,useImperativeHandle:tg,useInsertionEffect:Q0,useLayoutEffect:J0,useMemo:ng,useReducer:Kf,useRef:j0,useState:function(){return Kf(ca)},useDebugValue:th,useDeferredValue:function(e,i){var s=hn();return je===null?eh(s,e,i):ig(s,je.memoizedState,e,i)},useTransition:function(){var e=Kf(ca)[0],i=hn().memoizedState;return[typeof e=="boolean"?e:Bo(e),i]},useSyncExternalStore:L0,useId:og,useHostTransitionStatus:ih,useFormState:q0,useActionState:q0,useOptimistic:function(e,i){var s=hn();return je!==null?F0(s,je,e,i):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:jf,useCacheRefresh:lg};dg.useEffectEvent=K0;function rh(e,i,s,l){i=e.memoizedState,s=s(l,i),s=s==null?i:g({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var oh={enqueueSetState:function(e,i,s){e=e._reactInternals;var l=li(),h=Wa(l);h.payload=i,s!=null&&(h.callback=s),i=Ya(e,h,l),i!==null&&(ei(i,e,l),No(i,e,l))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var l=li(),h=Wa(l);h.tag=1,h.payload=i,s!=null&&(h.callback=s),i=Ya(e,h,l),i!==null&&(ei(i,e,l),No(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=li(),l=Wa(s);l.tag=2,i!=null&&(l.callback=i),i=Ya(e,l,s),i!==null&&(ei(i,e,s),No(i,e,s))}};function pg(e,i,s,l,h,m,E){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,m,E):i.prototype&&i.prototype.isPureReactComponent?!To(s,l)||!To(h,m):!0}function mg(e,i,s,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==e&&oh.enqueueReplaceState(i,i.state,null)}function Us(e,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(e=e.defaultProps){s===i&&(s=g({},s));for(var h in e)s[h]===void 0&&(s[h]=e[h])}return s}function gg(e){Yl(e)}function _g(e){console.error(e)}function vg(e){Yl(e)}function mc(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function xg(e,i,s){try{var l=e.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function lh(e,i,s){return s=Wa(s),s.tag=3,s.payload={element:null},s.callback=function(){mc(e,i)},s}function yg(e){return e=Wa(e),e.tag=3,e}function Sg(e,i,s,l){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var m=l.value;e.payload=function(){return h(m)},e.callback=function(){xg(i,s,l)}}var E=s.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(e.callback=function(){xg(i,s,l),typeof h!="function"&&(Ja===null?Ja=new Set([this]):Ja.add(this));var U=l.stack;this.componentDidCatch(l.value,{componentStack:U!==null?U:""})})}function HS(e,i,s,l,h){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&ur(i,s,h,!0),s=ai.current,s!==null){switch(s.tag){case 31:case 13:return Mi===null?Rc():s.alternate===null&&cn===0&&(cn=3),s.flags&=-257,s.flags|=65536,s.lanes=h,l===nc?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),Nh(e,l,h)),!1;case 22:return s.flags|=65536,l===nc?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),Nh(e,l,h)),!1}throw Error(a(435,s.tag))}return Nh(e,l,h),Rc(),!1}if(Ce)return i=ai.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==Rf&&(e=Error(a(422),{cause:l}),wo(vi(e,s)))):(l!==Rf&&(i=Error(a(423),{cause:l}),wo(vi(i,s))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=vi(l,s),h=lh(e.stateNode,l,h),Ff(e,h),cn!==4&&(cn=2)),!1;var m=Error(a(520),{cause:l});if(m=vi(m,s),qo===null?qo=[m]:qo.push(m),cn!==4&&(cn=2),i===null)return!0;l=vi(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=h&-h,s.lanes|=e,e=lh(s.stateNode,l,e),Ff(s,e),!1;case 1:if(i=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ja===null||!Ja.has(m))))return s.flags|=65536,h&=-h,s.lanes|=h,h=yg(h),Sg(h,e,s,l),Ff(s,h),!1}s=s.return}while(s!==null);return!1}var ch=Error(a(461)),gn=!1;function On(e,i,s,l){i.child=e===null?T0(i,null,s,l):Cs(i,e.child,s,l)}function Mg(e,i,s,l,h){s=s.render;var m=i.ref;if("ref"in l){var E={};for(var U in l)U!=="ref"&&(E[U]=l[U])}else E=l;return Ts(i),l=Xf(e,i,s,E,m,h),U=Wf(),e!==null&&!gn?(Yf(e,i,h),ua(e,i,h)):(Ce&&U&&Tf(i),i.flags|=1,On(e,i,l,h),i.child)}function Eg(e,i,s,l,h){if(e===null){var m=s.type;return typeof m=="function"&&!Mf(m)&&m.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=m,bg(e,i,m,l,h)):(e=Kl(s.type,null,l,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(m=e.child,!_h(e,h)){var E=m.memoizedProps;if(s=s.compare,s=s!==null?s:To,s(E,l)&&e.ref===i.ref)return ua(e,i,h)}return i.flags|=1,e=aa(m,l),e.ref=i.ref,e.return=i,i.child=e}function bg(e,i,s,l,h){if(e!==null){var m=e.memoizedProps;if(To(m,l)&&e.ref===i.ref)if(gn=!1,i.pendingProps=l=m,_h(e,h))(e.flags&131072)!==0&&(gn=!0);else return i.lanes=e.lanes,ua(e,i,h)}return uh(e,i,s,l,h)}function Tg(e,i,s,l){var h=l.children,m=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|s:s,e!==null){for(l=i.child=e.child,h=0;l!==null;)h=h|l.lanes|l.childLanes,l=l.sibling;l=h&~m}else l=0,i.child=null;return Ag(e,i,m,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&tc(i,m!==null?m.cachePool:null),m!==null?w0(i,m):Hf(),C0(i);else return l=i.lanes=536870912,Ag(e,i,m!==null?m.baseLanes|s:s,s,l)}else m!==null?(tc(i,m.cachePool),w0(i,m),ja(),i.memoizedState=null):(e!==null&&tc(i,null),Hf(),ja());return On(e,i,h,s),i.child}function Ho(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function Ag(e,i,s,l,h){var m=Of();return m=m===null?null:{parent:pn._currentValue,pool:m},i.memoizedState={baseLanes:s,cachePool:m},e!==null&&tc(i,null),Hf(),C0(i),e!==null&&ur(e,i,l,!0),i.childLanes=h,null}function gc(e,i){return i=vc({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function Rg(e,i,s){return Cs(i,e.child,null,s),e=gc(i,i.pendingProps),e.flags|=2,si(i),i.memoizedState=null,e}function GS(e,i,s){var l=i.pendingProps,h=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(Ce){if(l.mode==="hidden")return e=gc(i,l),i.lanes=536870912,Ho(null,e);if(Vf(i),(e=tn)?(e=I_(e,Si),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Ha!==null?{id:Gi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},s=u0(e),s.return=i,i.child=s,Ln=i,tn=null)):e=null,e===null)throw Va(i);return i.lanes=536870912,null}return gc(i,l)}var m=e.memoizedState;if(m!==null){var E=m.dehydrated;if(Vf(i),h)if(i.flags&256)i.flags&=-257,i=Rg(e,i,s);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(a(558));else if(gn||ur(e,i,s,!1),h=(s&e.childLanes)!==0,gn||h){if(l=Qe,l!==null&&(E=Zs(l,s),E!==0&&E!==m.retryLane))throw m.retryLane=E,Ss(e,E),ei(l,e,E),ch;Rc(),i=Rg(e,i,s)}else e=m.treeContext,tn=Ei(E.nextSibling),Ln=i,Ce=!0,Ga=null,Si=!1,e!==null&&d0(i,e),i=gc(i,l),i.flags|=4096;return i}return e=aa(e.child,{mode:l.mode,children:l.children}),e.ref=i.ref,i.child=e,e.return=i,e}function _c(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(i.flags|=4194816)}}function uh(e,i,s,l,h){return Ts(i),s=Xf(e,i,s,l,void 0,h),l=Wf(),e!==null&&!gn?(Yf(e,i,h),ua(e,i,h)):(Ce&&l&&Tf(i),i.flags|=1,On(e,i,s,h),i.child)}function wg(e,i,s,l,h,m){return Ts(i),i.updateQueue=null,s=U0(i,l,s,h),D0(e),l=Wf(),e!==null&&!gn?(Yf(e,i,m),ua(e,i,m)):(Ce&&l&&Tf(i),i.flags|=1,On(e,i,s,m),i.child)}function Cg(e,i,s,l,h){if(Ts(i),i.stateNode===null){var m=rr,E=s.contextType;typeof E=="object"&&E!==null&&(m=Nn(E)),m=new s(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=oh,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},Pf(i),E=s.contextType,m.context=typeof E=="object"&&E!==null?Nn(E):rr,m.state=i.memoizedState,E=s.getDerivedStateFromProps,typeof E=="function"&&(rh(i,s,E,l),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&oh.enqueueReplaceState(m,m.state,null),zo(i,l,m,h),Oo(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){m=i.stateNode;var U=i.memoizedProps,Y=Us(s,U);m.props=Y;var ot=m.context,_t=s.contextType;E=rr,typeof _t=="object"&&_t!==null&&(E=Nn(_t));var St=s.getDerivedStateFromProps;_t=typeof St=="function"||typeof m.getSnapshotBeforeUpdate=="function",U=i.pendingProps!==U,_t||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(U||ot!==E)&&mg(i,m,l,E),Xa=!1;var ct=i.memoizedState;m.state=ct,zo(i,l,m,h),Oo(),ot=i.memoizedState,U||ct!==ot||Xa?(typeof St=="function"&&(rh(i,s,St,l),ot=i.memoizedState),(Y=Xa||pg(i,s,Y,l,ct,ot,E))?(_t||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=ot),m.props=l,m.state=ot,m.context=E,l=Y):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,Bf(e,i),E=i.memoizedProps,_t=Us(s,E),m.props=_t,St=i.pendingProps,ct=m.context,ot=s.contextType,Y=rr,typeof ot=="object"&&ot!==null&&(Y=Nn(ot)),U=s.getDerivedStateFromProps,(ot=typeof U=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==St||ct!==Y)&&mg(i,m,l,Y),Xa=!1,ct=i.memoizedState,m.state=ct,zo(i,l,m,h),Oo();var dt=i.memoizedState;E!==St||ct!==dt||Xa||e!==null&&e.dependencies!==null&&Jl(e.dependencies)?(typeof U=="function"&&(rh(i,s,U,l),dt=i.memoizedState),(_t=Xa||pg(i,s,_t,l,ct,dt,Y)||e!==null&&e.dependencies!==null&&Jl(e.dependencies))?(ot||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,dt,Y),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,dt,Y)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===e.memoizedProps&&ct===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&ct===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=dt),m.props=l,m.state=dt,m.context=Y,l=_t):(typeof m.componentDidUpdate!="function"||E===e.memoizedProps&&ct===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&ct===e.memoizedState||(i.flags|=1024),l=!1)}return m=l,_c(e,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,e!==null&&l?(i.child=Cs(i,e.child,null,h),i.child=Cs(i,null,s,h)):On(e,i,s,h),i.memoizedState=m.state,e=i.child):e=ua(e,i,h),e}function Dg(e,i,s,l){return Es(),i.flags|=256,On(e,i,s,l),i.child}var fh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hh(e){return{baseLanes:e,cachePool:x0()}}function dh(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=oi),e}function Ug(e,i,s){var l=i.pendingProps,h=!1,m=(i.flags&128)!==0,E;if((E=m)||(E=e!==null&&e.memoizedState===null?!1:(fn.current&2)!==0),E&&(h=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,e===null){if(Ce){if(h?qa(i):ja(),(e=tn)?(e=I_(e,Si),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Ha!==null?{id:Gi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},s=u0(e),s.return=i,i.child=s,Ln=i,tn=null)):e=null,e===null)throw Va(i);return Zh(e)?i.lanes=32:i.lanes=536870912,null}var U=l.children;return l=l.fallback,h?(ja(),h=i.mode,U=vc({mode:"hidden",children:U},h),l=Ms(l,h,s,null),U.return=i,l.return=i,U.sibling=l,i.child=U,l=i.child,l.memoizedState=hh(s),l.childLanes=dh(e,E,s),i.memoizedState=fh,Ho(null,l)):(qa(i),ph(i,U))}var Y=e.memoizedState;if(Y!==null&&(U=Y.dehydrated,U!==null)){if(m)i.flags&256?(qa(i),i.flags&=-257,i=mh(e,i,s)):i.memoizedState!==null?(ja(),i.child=e.child,i.flags|=128,i=null):(ja(),U=l.fallback,h=i.mode,l=vc({mode:"visible",children:l.children},h),U=Ms(U,h,s,null),U.flags|=2,l.return=i,U.return=i,l.sibling=U,i.child=l,Cs(i,e.child,null,s),l=i.child,l.memoizedState=hh(s),l.childLanes=dh(e,E,s),i.memoizedState=fh,i=Ho(null,l));else if(qa(i),Zh(U)){if(E=U.nextSibling&&U.nextSibling.dataset,E)var ot=E.dgst;E=ot,l=Error(a(419)),l.stack="",l.digest=E,wo({value:l,source:null,stack:null}),i=mh(e,i,s)}else if(gn||ur(e,i,s,!1),E=(s&e.childLanes)!==0,gn||E){if(E=Qe,E!==null&&(l=Zs(E,s),l!==0&&l!==Y.retryLane))throw Y.retryLane=l,Ss(e,l),ei(E,e,l),ch;jh(U)||Rc(),i=mh(e,i,s)}else jh(U)?(i.flags|=192,i.child=e.child,i=null):(e=Y.treeContext,tn=Ei(U.nextSibling),Ln=i,Ce=!0,Ga=null,Si=!1,e!==null&&d0(i,e),i=ph(i,l.children),i.flags|=4096);return i}return h?(ja(),U=l.fallback,h=i.mode,Y=e.child,ot=Y.sibling,l=aa(Y,{mode:"hidden",children:l.children}),l.subtreeFlags=Y.subtreeFlags&65011712,ot!==null?U=aa(ot,U):(U=Ms(U,h,s,null),U.flags|=2),U.return=i,l.return=i,l.sibling=U,i.child=l,Ho(null,l),l=i.child,U=e.child.memoizedState,U===null?U=hh(s):(h=U.cachePool,h!==null?(Y=pn._currentValue,h=h.parent!==Y?{parent:Y,pool:Y}:h):h=x0(),U={baseLanes:U.baseLanes|s,cachePool:h}),l.memoizedState=U,l.childLanes=dh(e,E,s),i.memoizedState=fh,Ho(e.child,l)):(qa(i),s=e.child,e=s.sibling,s=aa(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,e!==null&&(E=i.deletions,E===null?(i.deletions=[e],i.flags|=16):E.push(e)),i.child=s,i.memoizedState=null,s)}function ph(e,i){return i=vc({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function vc(e,i){return e=ii(22,e,null,i),e.lanes=0,e}function mh(e,i,s){return Cs(i,e.child,null,s),e=ph(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Lg(e,i,s){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),Df(e.return,i,s)}function gh(e,i,s,l,h,m){var E=e.memoizedState;E===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:h,treeForkCount:m}:(E.isBackwards=i,E.rendering=null,E.renderingStartTime=0,E.last=l,E.tail=s,E.tailMode=h,E.treeForkCount=m)}function Ng(e,i,s){var l=i.pendingProps,h=l.revealOrder,m=l.tail;l=l.children;var E=fn.current,U=(E&2)!==0;if(U?(E=E&1|2,i.flags|=128):E&=1,gt(fn,E),On(e,i,l,s),l=Ce?Ro:0,!U&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Lg(e,s,i);else if(e.tag===19)Lg(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(h){case"forwards":for(s=i.child,h=null;s!==null;)e=s.alternate,e!==null&&rc(e)===null&&(h=s),s=s.sibling;s=h,s===null?(h=i.child,i.child=null):(h=s.sibling,s.sibling=null),gh(i,!1,h,s,m,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&rc(e)===null){i.child=h;break}e=h.sibling,h.sibling=s,s=h,h=e}gh(i,!0,s,null,m,l);break;case"together":gh(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function ua(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),Qa|=i.lanes,(s&i.childLanes)===0)if(e!==null){if(ur(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,s=aa(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=aa(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function _h(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Jl(e)))}function VS(e,i,s){switch(i.tag){case 3:it(i,i.stateNode.containerInfo),ka(i,pn,e.memoizedState.cache),Es();break;case 27:case 5:ut(i);break;case 4:it(i,i.stateNode.containerInfo);break;case 10:ka(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Vf(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(qa(i),i.flags|=128,null):(s&i.child.childLanes)!==0?Ug(e,i,s):(qa(i),e=ua(e,i,s),e!==null?e.sibling:null);qa(i);break;case 19:var h=(e.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(ur(e,i,s,!1),l=(s&i.childLanes)!==0),h){if(l)return Ng(e,i,s);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),gt(fn,fn.current),l)break;return null;case 22:return i.lanes=0,Tg(e,i,s,i.pendingProps);case 24:ka(i,pn,e.memoizedState.cache)}return ua(e,i,s)}function Og(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)gn=!0;else{if(!_h(e,s)&&(i.flags&128)===0)return gn=!1,VS(e,i,s);gn=(e.flags&131072)!==0}else gn=!1,Ce&&(i.flags&1048576)!==0&&h0(i,Ro,i.index);switch(i.lanes=0,i.tag){case 16:t:{var l=i.pendingProps;if(e=Rs(i.elementType),i.type=e,typeof e=="function")Mf(e)?(l=Us(e,l),i.tag=1,i=Cg(null,i,e,l,s)):(i.tag=0,i=uh(null,i,e,l,s));else{if(e!=null){var h=e.$$typeof;if(h===A){i.tag=11,i=Mg(null,i,e,l,s);break t}else if(h===z){i.tag=14,i=Eg(null,i,e,l,s);break t}}throw i=et(e)||e,Error(a(306,i,""))}}return i;case 0:return uh(e,i,i.type,i.pendingProps,s);case 1:return l=i.type,h=Us(l,i.pendingProps),Cg(e,i,l,h,s);case 3:t:{if(it(i,i.stateNode.containerInfo),e===null)throw Error(a(387));l=i.pendingProps;var m=i.memoizedState;h=m.element,Bf(e,i),zo(i,l,null,s);var E=i.memoizedState;if(l=E.cache,ka(i,pn,l),l!==m.cache&&Uf(i,[pn],s,!0),Oo(),l=E.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=Dg(e,i,l,s);break t}else if(l!==h){h=vi(Error(a(424)),i),wo(h),i=Dg(e,i,l,s);break t}else for(e=i.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,tn=Ei(e.firstChild),Ln=i,Ce=!0,Ga=null,Si=!0,s=T0(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Es(),l===h){i=ua(e,i,s);break t}On(e,i,l,s)}i=i.child}return i;case 26:return _c(e,i),e===null?(s=W_(i.type,null,i.pendingProps,null))?i.memoizedState=s:Ce||(s=i.type,e=i.pendingProps,l=Oc(P.current).createElement(s),l[dn]=i,l[An]=e,zn(l,s,e),L(l),i.stateNode=l):i.memoizedState=W_(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return ut(i),e===null&&Ce&&(l=i.stateNode=V_(i.type,i.pendingProps,P.current),Ln=i,Si=!0,h=tn,ns(i.type)?(Kh=h,tn=Ei(l.firstChild)):tn=h),On(e,i,i.pendingProps.children,s),_c(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Ce&&((h=l=tn)&&(l=vM(l,i.type,i.pendingProps,Si),l!==null?(i.stateNode=l,Ln=i,tn=Ei(l.firstChild),Si=!1,h=!0):h=!1),h||Va(i)),ut(i),h=i.type,m=i.pendingProps,E=e!==null?e.memoizedProps:null,l=m.children,Wh(h,m)?l=null:E!==null&&Wh(h,E)&&(i.flags|=32),i.memoizedState!==null&&(h=Xf(e,i,NS,null,null,s),el._currentValue=h),_c(e,i),On(e,i,l,s),i.child;case 6:return e===null&&Ce&&((e=s=tn)&&(s=xM(s,i.pendingProps,Si),s!==null?(i.stateNode=s,Ln=i,tn=null,e=!0):e=!1),e||Va(i)),null;case 13:return Ug(e,i,s);case 4:return it(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=Cs(i,null,l,s):On(e,i,l,s),i.child;case 11:return Mg(e,i,i.type,i.pendingProps,s);case 7:return On(e,i,i.pendingProps,s),i.child;case 8:return On(e,i,i.pendingProps.children,s),i.child;case 12:return On(e,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,ka(i,i.type,l.value),On(e,i,l.children,s),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,Ts(i),h=Nn(h),l=l(h),i.flags|=1,On(e,i,l,s),i.child;case 14:return Eg(e,i,i.type,i.pendingProps,s);case 15:return bg(e,i,i.type,i.pendingProps,s);case 19:return Ng(e,i,s);case 31:return GS(e,i,s);case 22:return Tg(e,i,s,i.pendingProps);case 24:return Ts(i),l=Nn(pn),e===null?(h=Of(),h===null&&(h=Qe,m=Lf(),h.pooledCache=m,m.refCount++,m!==null&&(h.pooledCacheLanes|=s),h=m),i.memoizedState={parent:l,cache:h},Pf(i),ka(i,pn,h)):((e.lanes&s)!==0&&(Bf(e,i),zo(i,null,null,s),Oo()),h=e.memoizedState,m=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),ka(i,pn,l)):(l=m.cache,ka(i,pn,l),l!==h.cache&&Uf(i,[pn],s,!0))),On(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function fa(e){e.flags|=4}function vh(e,i,s,l,h){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(h&335544128)===h)if(e.stateNode.complete)e.flags|=8192;else if(o_())e.flags|=8192;else throw ws=nc,zf}else e.flags&=-16777217}function zg(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!K_(i))if(o_())e.flags|=8192;else throw ws=nc,zf}function xc(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Ve():536870912,e.lanes|=i,Mr|=i)}function Go(e,i){if(!Ce)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function en(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,l=0;if(i)for(var h=e.child;h!==null;)s|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)s|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=s,i}function kS(e,i,s){var l=i.pendingProps;switch(Af(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(i),null;case 1:return en(i),null;case 3:return s=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),oa(pn),pt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(cr(i)?fa(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,wf())),en(i),null;case 26:var h=i.type,m=i.memoizedState;return e===null?(fa(i),m!==null?(en(i),zg(i,m)):(en(i),vh(i,h,null,l,s))):m?m!==e.memoizedState?(fa(i),en(i),zg(i,m)):(en(i),i.flags&=-16777217):(e=e.memoizedProps,e!==l&&fa(i),en(i),vh(i,h,e,l,s)),null;case 27:if(Et(i),s=P.current,h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&fa(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return en(i),null}e=Rt.current,cr(i)?p0(i):(e=V_(h,l,s),i.stateNode=e,fa(i))}return en(i),null;case 5:if(Et(i),h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&fa(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return en(i),null}if(m=Rt.current,cr(i))p0(i);else{var E=Oc(P.current);switch(m){case 1:m=E.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:m=E.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":m=E.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":m=E.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":m=E.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof l.is=="string"?E.createElement("select",{is:l.is}):E.createElement("select"),l.multiple?m.multiple=!0:l.size&&(m.size=l.size);break;default:m=typeof l.is=="string"?E.createElement(h,{is:l.is}):E.createElement(h)}}m[dn]=i,m[An]=l;t:for(E=i.child;E!==null;){if(E.tag===5||E.tag===6)m.appendChild(E.stateNode);else if(E.tag!==4&&E.tag!==27&&E.child!==null){E.child.return=E,E=E.child;continue}if(E===i)break t;for(;E.sibling===null;){if(E.return===null||E.return===i)break t;E=E.return}E.sibling.return=E.return,E=E.sibling}i.stateNode=m;t:switch(zn(m,h,l),h){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&fa(i)}}return en(i),vh(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,s),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&fa(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(e=P.current,cr(i)){if(e=i.stateNode,s=i.memoizedProps,l=null,h=Ln,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[dn]=i,e=!!(e.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||U_(e.nodeValue,s)),e||Va(i,!0)}else e=Oc(e).createTextNode(l),e[dn]=i,i.stateNode=e}return en(i),null;case 31:if(s=i.memoizedState,e===null||e.memoizedState!==null){if(l=cr(i),s!==null){if(e===null){if(!l)throw Error(a(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[dn]=i}else Es(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;en(i),e=!1}else s=wf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),e=!0;if(!e)return i.flags&256?(si(i),i):(si(i),null);if((i.flags&128)!==0)throw Error(a(558))}return en(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=cr(i),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(a(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[dn]=i}else Es(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;en(i),h=!1}else h=wf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(si(i),i):(si(i),null)}return si(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,e=e!==null&&e.memoizedState!==null,s&&(l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool),m=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==h&&(l.flags|=2048)),s!==e&&s&&(i.child.flags|=8192),xc(i,i.updateQueue),en(i),null);case 4:return pt(),e===null&&Hh(i.stateNode.containerInfo),en(i),null;case 10:return oa(i.type),en(i),null;case 19:if(at(fn),l=i.memoizedState,l===null)return en(i),null;if(h=(i.flags&128)!==0,m=l.rendering,m===null)if(h)Go(l,!1);else{if(cn!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(m=rc(e),m!==null){for(i.flags|=128,Go(l,!1),e=m.updateQueue,i.updateQueue=e,xc(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)c0(s,e),s=s.sibling;return gt(fn,fn.current&1|2),Ce&&sa(i,l.treeForkCount),i.child}e=e.sibling}l.tail!==null&&C()>bc&&(i.flags|=128,h=!0,Go(l,!1),i.lanes=4194304)}else{if(!h)if(e=rc(m),e!==null){if(i.flags|=128,h=!0,e=e.updateQueue,i.updateQueue=e,xc(i,e),Go(l,!0),l.tail===null&&l.tailMode==="hidden"&&!m.alternate&&!Ce)return en(i),null}else 2*C()-l.renderingStartTime>bc&&s!==536870912&&(i.flags|=128,h=!0,Go(l,!1),i.lanes=4194304);l.isBackwards?(m.sibling=i.child,i.child=m):(e=l.last,e!==null?e.sibling=m:i.child=m,l.last=m)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=C(),e.sibling=null,s=fn.current,gt(fn,h?s&1|2:s&1),Ce&&sa(i,l.treeForkCount),e):(en(i),null);case 22:case 23:return si(i),Gf(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(en(i),i.subtreeFlags&6&&(i.flags|=8192)):en(i),s=i.updateQueue,s!==null&&xc(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),e!==null&&at(As),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),oa(pn),en(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function XS(e,i){switch(Af(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return oa(pn),pt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return Et(i),null;case 31:if(i.memoizedState!==null){if(si(i),i.alternate===null)throw Error(a(340));Es()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(si(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Es()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return at(fn),null;case 4:return pt(),null;case 10:return oa(i.type),null;case 22:case 23:return si(i),Gf(),e!==null&&at(As),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return oa(pn),null;case 25:return null;default:return null}}function Pg(e,i){switch(Af(i),i.tag){case 3:oa(pn),pt();break;case 26:case 27:case 5:Et(i);break;case 4:pt();break;case 31:i.memoizedState!==null&&si(i);break;case 13:si(i);break;case 19:at(fn);break;case 10:oa(i.type);break;case 22:case 23:si(i),Gf(),e!==null&&at(As);break;case 24:oa(pn)}}function Vo(e,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var h=l.next;s=h;do{if((s.tag&e)===e){l=void 0;var m=s.create,E=s.inst;l=m(),E.destroy=l}s=s.next}while(s!==h)}}catch(U){We(i,i.return,U)}}function Za(e,i,s){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var m=h.next;l=m;do{if((l.tag&e)===e){var E=l.inst,U=E.destroy;if(U!==void 0){E.destroy=void 0,h=i;var Y=s,ot=U;try{ot()}catch(_t){We(h,Y,_t)}}}l=l.next}while(l!==m)}}catch(_t){We(i,i.return,_t)}}function Bg(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{R0(i,s)}catch(l){We(e,e.return,l)}}}function Fg(e,i,s){s.props=Us(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(l){We(e,i,l)}}function ko(e,i){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof s=="function"?e.refCleanup=s(l):s.current=l}}catch(h){We(e,i,h)}}function ki(e,i){var s=e.ref,l=e.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(h){We(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){We(e,i,h)}else s.current=null}function Ig(e){var i=e.type,s=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break t;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(h){We(e,e.return,h)}}function xh(e,i,s){try{var l=e.stateNode;hM(l,e.type,s,i),l[An]=i}catch(h){We(e,e.return,h)}}function Hg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ns(e.type)||e.tag===4}function yh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Hg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ns(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sh(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(e),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=na));else if(l!==4&&(l===27&&ns(e.type)&&(s=e.stateNode,i=null),e=e.child,e!==null))for(Sh(e,i,s),e=e.sibling;e!==null;)Sh(e,i,s),e=e.sibling}function yc(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(l!==4&&(l===27&&ns(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(yc(e,i,s),e=e.sibling;e!==null;)yc(e,i,s),e=e.sibling}function Gg(e){var i=e.stateNode,s=e.memoizedProps;try{for(var l=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);zn(i,l,s),i[dn]=e,i[An]=s}catch(m){We(e,e.return,m)}}var ha=!1,_n=!1,Mh=!1,Vg=typeof WeakSet=="function"?WeakSet:Set,bn=null;function WS(e,i){if(e=e.containerInfo,kh=Gc,e=t0(e),mf(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var h=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break t}var E=0,U=-1,Y=-1,ot=0,_t=0,St=e,ct=null;e:for(;;){for(var dt;St!==s||h!==0&&St.nodeType!==3||(U=E+h),St!==m||l!==0&&St.nodeType!==3||(Y=E+l),St.nodeType===3&&(E+=St.nodeValue.length),(dt=St.firstChild)!==null;)ct=St,St=dt;for(;;){if(St===e)break e;if(ct===s&&++ot===h&&(U=E),ct===m&&++_t===l&&(Y=E),(dt=St.nextSibling)!==null)break;St=ct,ct=St.parentNode}St=dt}s=U===-1||Y===-1?null:{start:U,end:Y}}else s=null}s=s||{start:0,end:0}}else s=null;for(Xh={focusedElem:e,selectionRange:s},Gc=!1,bn=i;bn!==null;)if(i=bn,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,bn=e;else for(;bn!==null;){switch(i=bn,m=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(s=0;s<e.length;s++)h=e[s],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,s=i,h=m.memoizedProps,m=m.memoizedState,l=s.stateNode;try{var jt=Us(s.type,h);e=l.getSnapshotBeforeUpdate(jt,m),l.__reactInternalSnapshotBeforeUpdate=e}catch(oe){We(s,s.return,oe)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)qh(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":qh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,bn=e;break}bn=i.return}}function kg(e,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:pa(e,s),l&4&&Vo(5,s);break;case 1:if(pa(e,s),l&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(E){We(s,s.return,E)}else{var h=Us(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(E){We(s,s.return,E)}}l&64&&Bg(s),l&512&&ko(s,s.return);break;case 3:if(pa(e,s),l&64&&(e=s.updateQueue,e!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{R0(e,i)}catch(E){We(s,s.return,E)}}break;case 27:i===null&&l&4&&Gg(s);case 26:case 5:pa(e,s),i===null&&l&4&&Ig(s),l&512&&ko(s,s.return);break;case 12:pa(e,s);break;case 31:pa(e,s),l&4&&Yg(e,s);break;case 13:pa(e,s),l&4&&qg(e,s),l&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=tM.bind(null,s),yM(e,s))));break;case 22:if(l=s.memoizedState!==null||ha,!l){i=i!==null&&i.memoizedState!==null||_n,h=ha;var m=_n;ha=l,(_n=i)&&!m?ma(e,s,(s.subtreeFlags&8772)!==0):pa(e,s),ha=h,_n=m}break;case 30:break;default:pa(e,s)}}function Xg(e){var i=e.alternate;i!==null&&(e.alternate=null,Xg(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&_o(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var rn=null,Qn=!1;function da(e,i,s){for(s=s.child;s!==null;)Wg(e,i,s),s=s.sibling}function Wg(e,i,s){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(At,s)}catch{}switch(s.tag){case 26:_n||ki(s,i),da(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:_n||ki(s,i);var l=rn,h=Qn;ns(s.type)&&(rn=s.stateNode,Qn=!1),da(e,i,s),Jo(s.stateNode),rn=l,Qn=h;break;case 5:_n||ki(s,i);case 6:if(l=rn,h=Qn,rn=null,da(e,i,s),rn=l,Qn=h,rn!==null)if(Qn)try{(rn.nodeType===9?rn.body:rn.nodeName==="HTML"?rn.ownerDocument.body:rn).removeChild(s.stateNode)}catch(m){We(s,i,m)}else try{rn.removeChild(s.stateNode)}catch(m){We(s,i,m)}break;case 18:rn!==null&&(Qn?(e=rn,B_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),Dr(e)):B_(rn,s.stateNode));break;case 4:l=rn,h=Qn,rn=s.stateNode.containerInfo,Qn=!0,da(e,i,s),rn=l,Qn=h;break;case 0:case 11:case 14:case 15:Za(2,s,i),_n||Za(4,s,i),da(e,i,s);break;case 1:_n||(ki(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&Fg(s,i,l)),da(e,i,s);break;case 21:da(e,i,s);break;case 22:_n=(l=_n)||s.memoizedState!==null,da(e,i,s),_n=l;break;default:da(e,i,s)}}function Yg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Dr(e)}catch(s){We(i,i.return,s)}}}function qg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Dr(e)}catch(s){We(i,i.return,s)}}function YS(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Vg),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Vg),i;default:throw Error(a(435,e.tag))}}function Sc(e,i){var s=YS(e);i.forEach(function(l){if(!s.has(l)){s.add(l);var h=eM.bind(null,e,l);l.then(h,h)}})}function Jn(e,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var h=s[l],m=e,E=i,U=E;t:for(;U!==null;){switch(U.tag){case 27:if(ns(U.type)){rn=U.stateNode,Qn=!1;break t}break;case 5:rn=U.stateNode,Qn=!1;break t;case 3:case 4:rn=U.stateNode.containerInfo,Qn=!0;break t}U=U.return}if(rn===null)throw Error(a(160));Wg(m,E,h),rn=null,Qn=!1,m=h.alternate,m!==null&&(m.return=null),h.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)jg(i,e),i=i.sibling}var Ui=null;function jg(e,i){var s=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Jn(i,e),$n(e),l&4&&(Za(3,e,e.return),Vo(3,e),Za(5,e,e.return));break;case 1:Jn(i,e),$n(e),l&512&&(_n||s===null||ki(s,s.return)),l&64&&ha&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var h=Ui;if(Jn(i,e),$n(e),l&512&&(_n||s===null||ki(s,s.return)),l&4){var m=s!==null?s.memoizedState:null;if(l=e.memoizedState,s===null)if(l===null)if(e.stateNode===null){t:{l=e.type,s=e.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":m=h.getElementsByTagName("title")[0],(!m||m[gs]||m[dn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=h.createElement(l),h.head.insertBefore(m,h.querySelector("head > title"))),zn(m,l,s),m[dn]=e,L(m),l=m;break t;case"link":var E=j_("link","href",h).get(l+(s.href||""));if(E){for(var U=0;U<E.length;U++)if(m=E[U],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){E.splice(U,1);break e}}m=h.createElement(l),zn(m,l,s),h.head.appendChild(m);break;case"meta":if(E=j_("meta","content",h).get(l+(s.content||""))){for(U=0;U<E.length;U++)if(m=E[U],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){E.splice(U,1);break e}}m=h.createElement(l),zn(m,l,s),h.head.appendChild(m);break;default:throw Error(a(468,l))}m[dn]=e,L(m),l=m}e.stateNode=l}else Z_(h,e.type,e.stateNode);else e.stateNode=q_(h,l,e.memoizedProps);else m!==l?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,l===null?Z_(h,e.type,e.stateNode):q_(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&xh(e,e.memoizedProps,s.memoizedProps)}break;case 27:Jn(i,e),$n(e),l&512&&(_n||s===null||ki(s,s.return)),s!==null&&l&4&&xh(e,e.memoizedProps,s.memoizedProps);break;case 5:if(Jn(i,e),$n(e),l&512&&(_n||s===null||ki(s,s.return)),e.flags&32){h=e.stateNode;try{yn(h,"")}catch(jt){We(e,e.return,jt)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,xh(e,h,s!==null?s.memoizedProps:h)),l&1024&&(Mh=!0);break;case 6:if(Jn(i,e),$n(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,s=e.stateNode;try{s.nodeValue=l}catch(jt){We(e,e.return,jt)}}break;case 3:if(Bc=null,h=Ui,Ui=zc(i.containerInfo),Jn(i,e),Ui=h,$n(e),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Dr(i.containerInfo)}catch(jt){We(e,e.return,jt)}Mh&&(Mh=!1,Zg(e));break;case 4:l=Ui,Ui=zc(e.stateNode.containerInfo),Jn(i,e),$n(e),Ui=l;break;case 12:Jn(i,e),$n(e);break;case 31:Jn(i,e),$n(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Sc(e,l)));break;case 13:Jn(i,e),$n(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Ec=C()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Sc(e,l)));break;case 22:h=e.memoizedState!==null;var Y=s!==null&&s.memoizedState!==null,ot=ha,_t=_n;if(ha=ot||h,_n=_t||Y,Jn(i,e),_n=_t,ha=ot,$n(e),l&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(s===null||Y||ha||_n||Ls(e)),s=null,i=e;;){if(i.tag===5||i.tag===26){if(s===null){Y=s=i;try{if(m=Y.stateNode,h)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{U=Y.stateNode;var St=Y.memoizedProps.style,ct=St!=null&&St.hasOwnProperty("display")?St.display:null;U.style.display=ct==null||typeof ct=="boolean"?"":(""+ct).trim()}}catch(jt){We(Y,Y.return,jt)}}}else if(i.tag===6){if(s===null){Y=i;try{Y.stateNode.nodeValue=h?"":Y.memoizedProps}catch(jt){We(Y,Y.return,jt)}}}else if(i.tag===18){if(s===null){Y=i;try{var dt=Y.stateNode;h?F_(dt,!0):F_(Y.stateNode,!1)}catch(jt){We(Y,Y.return,jt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Sc(e,s))));break;case 19:Jn(i,e),$n(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Sc(e,l)));break;case 30:break;case 21:break;default:Jn(i,e),$n(e)}}function $n(e){var i=e.flags;if(i&2){try{for(var s,l=e.return;l!==null;){if(Hg(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var h=s.stateNode,m=yh(e);yc(e,m,h);break;case 5:var E=s.stateNode;s.flags&32&&(yn(E,""),s.flags&=-33);var U=yh(e);yc(e,U,E);break;case 3:case 4:var Y=s.stateNode.containerInfo,ot=yh(e);Sh(e,ot,Y);break;default:throw Error(a(161))}}catch(_t){We(e,e.return,_t)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Zg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;Zg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function pa(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)kg(e,i.alternate,i),i=i.sibling}function Ls(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Za(4,i,i.return),Ls(i);break;case 1:ki(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&Fg(i,i.return,s),Ls(i);break;case 27:Jo(i.stateNode);case 26:case 5:ki(i,i.return),Ls(i);break;case 22:i.memoizedState===null&&Ls(i);break;case 30:Ls(i);break;default:Ls(i)}e=e.sibling}}function ma(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=e,m=i,E=m.flags;switch(m.tag){case 0:case 11:case 15:ma(h,m,s),Vo(4,m);break;case 1:if(ma(h,m,s),l=m,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(ot){We(l,l.return,ot)}if(l=m,h=l.updateQueue,h!==null){var U=l.stateNode;try{var Y=h.shared.hiddenCallbacks;if(Y!==null)for(h.shared.hiddenCallbacks=null,h=0;h<Y.length;h++)A0(Y[h],U)}catch(ot){We(l,l.return,ot)}}s&&E&64&&Bg(m),ko(m,m.return);break;case 27:Gg(m);case 26:case 5:ma(h,m,s),s&&l===null&&E&4&&Ig(m),ko(m,m.return);break;case 12:ma(h,m,s);break;case 31:ma(h,m,s),s&&E&4&&Yg(h,m);break;case 13:ma(h,m,s),s&&E&4&&qg(h,m);break;case 22:m.memoizedState===null&&ma(h,m,s),ko(m,m.return);break;case 30:break;default:ma(h,m,s)}i=i.sibling}}function Eh(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&Co(s))}function bh(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Co(e))}function Li(e,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Kg(e,i,s,l),i=i.sibling}function Kg(e,i,s,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:Li(e,i,s,l),h&2048&&Vo(9,i);break;case 1:Li(e,i,s,l);break;case 3:Li(e,i,s,l),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Co(e)));break;case 12:if(h&2048){Li(e,i,s,l),e=i.stateNode;try{var m=i.memoizedProps,E=m.id,U=m.onPostCommit;typeof U=="function"&&U(E,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(Y){We(i,i.return,Y)}}else Li(e,i,s,l);break;case 31:Li(e,i,s,l);break;case 13:Li(e,i,s,l);break;case 23:break;case 22:m=i.stateNode,E=i.alternate,i.memoizedState!==null?m._visibility&2?Li(e,i,s,l):Xo(e,i):m._visibility&2?Li(e,i,s,l):(m._visibility|=2,xr(e,i,s,l,(i.subtreeFlags&10256)!==0||!1)),h&2048&&Eh(E,i);break;case 24:Li(e,i,s,l),h&2048&&bh(i.alternate,i);break;default:Li(e,i,s,l)}}function xr(e,i,s,l,h){for(h=h&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=e,E=i,U=s,Y=l,ot=E.flags;switch(E.tag){case 0:case 11:case 15:xr(m,E,U,Y,h),Vo(8,E);break;case 23:break;case 22:var _t=E.stateNode;E.memoizedState!==null?_t._visibility&2?xr(m,E,U,Y,h):Xo(m,E):(_t._visibility|=2,xr(m,E,U,Y,h)),h&&ot&2048&&Eh(E.alternate,E);break;case 24:xr(m,E,U,Y,h),h&&ot&2048&&bh(E.alternate,E);break;default:xr(m,E,U,Y,h)}i=i.sibling}}function Xo(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,l=i,h=l.flags;switch(l.tag){case 22:Xo(s,l),h&2048&&Eh(l.alternate,l);break;case 24:Xo(s,l),h&2048&&bh(l.alternate,l);break;default:Xo(s,l)}i=i.sibling}}var Wo=8192;function yr(e,i,s){if(e.subtreeFlags&Wo)for(e=e.child;e!==null;)Qg(e,i,s),e=e.sibling}function Qg(e,i,s){switch(e.tag){case 26:yr(e,i,s),e.flags&Wo&&e.memoizedState!==null&&LM(s,Ui,e.memoizedState,e.memoizedProps);break;case 5:yr(e,i,s);break;case 3:case 4:var l=Ui;Ui=zc(e.stateNode.containerInfo),yr(e,i,s),Ui=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Wo,Wo=16777216,yr(e,i,s),Wo=l):yr(e,i,s));break;default:yr(e,i,s)}}function Jg(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Yo(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];bn=l,t_(l,e)}Jg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)$g(e),e=e.sibling}function $g(e){switch(e.tag){case 0:case 11:case 15:Yo(e),e.flags&2048&&Za(9,e,e.return);break;case 3:Yo(e);break;case 12:Yo(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,Mc(e)):Yo(e);break;default:Yo(e)}}function Mc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];bn=l,t_(l,e)}Jg(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Za(8,i,i.return),Mc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,Mc(i));break;default:Mc(i)}e=e.sibling}}function t_(e,i){for(;bn!==null;){var s=bn;switch(s.tag){case 0:case 11:case 15:Za(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Co(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,bn=l;else t:for(s=e;bn!==null;){l=bn;var h=l.sibling,m=l.return;if(Xg(l),l===s){bn=null;break t}if(h!==null){h.return=m,bn=h;break t}bn=m}}}var qS={getCacheForType:function(e){var i=Nn(pn),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s},cacheSignal:function(){return Nn(pn).controller.signal}},jS=typeof WeakMap=="function"?WeakMap:Map,Ie=0,Qe=null,Me=null,be=0,Xe=0,ri=null,Ka=!1,Sr=!1,Th=!1,ga=0,cn=0,Qa=0,Ns=0,Ah=0,oi=0,Mr=0,qo=null,ti=null,Rh=!1,Ec=0,e_=0,bc=1/0,Tc=null,Ja=null,Sn=0,$a=null,Er=null,_a=0,wh=0,Ch=null,n_=null,jo=0,Dh=null;function li(){return(Ie&2)!==0&&be!==0?be&-be:B.T!==null?Ph():mo()}function i_(){if(oi===0)if((be&536870912)===0||Ce){var e=Ct;Ct<<=1,(Ct&3932160)===0&&(Ct=262144),oi=e}else oi=536870912;return e=ai.current,e!==null&&(e.flags|=32),oi}function ei(e,i,s){(e===Qe&&(Xe===2||Xe===9)||e.cancelPendingCommit!==null)&&(br(e,0),ts(e,be,oi,!1)),Bn(e,s),((Ie&2)===0||e!==Qe)&&(e===Qe&&((Ie&2)===0&&(Ns|=s),cn===4&&ts(e,be,oi,!1)),Xi(e))}function a_(e,i,s){if((Ie&6)!==0)throw Error(a(327));var l=!s&&(i&127)===0&&(i&e.expiredLanes)===0||Ut(e,i),h=l?QS(e,i):Lh(e,i,!0),m=l;do{if(h===0){Sr&&!l&&ts(e,i,0,!1);break}else{if(s=e.current.alternate,m&&!ZS(s)){h=Lh(e,i,!1),m=!1;continue}if(h===2){if(m=i,e.errorRecoveryDisabledLanes&m)var E=0;else E=e.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;t:{var U=e;h=qo;var Y=U.current.memoizedState.isDehydrated;if(Y&&(br(U,E).flags|=256),E=Lh(U,E,!1),E!==2){if(Th&&!Y){U.errorRecoveryDisabledLanes|=m,Ns|=m,h=4;break t}m=ti,ti=h,m!==null&&(ti===null?ti=m:ti.push.apply(ti,m))}h=E}if(m=!1,h!==2)continue}}if(h===1){br(e,0),ts(e,i,0,!0);break}t:{switch(l=e,m=h,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:ts(l,i,oi,!Ka);break t;case 2:ti=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(h=Ec+300-C(),10<h)){if(ts(l,i,oi,!Ka),Mt(l,0,!0)!==0)break t;_a=i,l.timeoutHandle=z_(s_.bind(null,l,s,ti,Tc,Rh,i,oi,Ns,Mr,Ka,m,"Throttled",-0,0),h);break t}s_(l,s,ti,Tc,Rh,i,oi,Ns,Mr,Ka,m,null,-0,0)}}break}while(!0);Xi(e)}function s_(e,i,s,l,h,m,E,U,Y,ot,_t,St,ct,dt){if(e.timeoutHandle=-1,St=i.subtreeFlags,St&8192||(St&16785408)===16785408){St={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:na},Qg(i,m,St);var jt=(m&62914560)===m?Ec-C():(m&4194048)===m?e_-C():0;if(jt=NM(St,jt),jt!==null){_a=m,e.cancelPendingCommit=jt(d_.bind(null,e,i,m,s,l,h,E,U,Y,_t,St,null,ct,dt)),ts(e,m,E,!ot);return}}d_(e,i,m,s,l,h,E,U,Y)}function ZS(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var h=s[l],m=h.getSnapshot;h=h.value;try{if(!ni(m(),h))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ts(e,i,s,l){i&=~Ah,i&=~Ns,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var h=i;0<h;){var m=31-Vt(h),E=1<<m;l[m]=-1,h&=~E}s!==0&&Bl(e,s,i)}function Ac(){return(Ie&6)===0?(Zo(0),!1):!0}function Uh(){if(Me!==null){if(Xe===0)var e=Me.return;else e=Me,ra=bs=null,qf(e),pr=null,Uo=0,e=Me;for(;e!==null;)Pg(e.alternate,e),e=e.return;Me=null}}function br(e,i){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,mM(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),_a=0,Uh(),Qe=e,Me=s=aa(e.current,null),be=i,Xe=0,ri=null,Ka=!1,Sr=Ut(e,i),Th=!1,Mr=oi=Ah=Ns=Qa=cn=0,ti=qo=null,Rh=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var h=31-Vt(l),m=1<<h;i|=e[h],l&=~m}return ga=i,ql(),s}function r_(e,i){me=null,B.H=Io,i===dr||i===ec?(i=M0(),Xe=3):i===zf?(i=M0(),Xe=4):Xe=i===ch?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ri=i,Me===null&&(cn=1,mc(e,vi(i,e.current)))}function o_(){var e=ai.current;return e===null?!0:(be&4194048)===be?Mi===null:(be&62914560)===be||(be&536870912)!==0?e===Mi:!1}function l_(){var e=B.H;return B.H=Io,e===null?Io:e}function c_(){var e=B.A;return B.A=qS,e}function Rc(){cn=4,Ka||(be&4194048)!==be&&ai.current!==null||(Sr=!0),(Qa&134217727)===0&&(Ns&134217727)===0||Qe===null||ts(Qe,be,oi,!1)}function Lh(e,i,s){var l=Ie;Ie|=2;var h=l_(),m=c_();(Qe!==e||be!==i)&&(Tc=null,br(e,i)),i=!1;var E=cn;t:do try{if(Xe!==0&&Me!==null){var U=Me,Y=ri;switch(Xe){case 8:Uh(),E=6;break t;case 3:case 2:case 9:case 6:ai.current===null&&(i=!0);var ot=Xe;if(Xe=0,ri=null,Tr(e,U,Y,ot),s&&Sr){E=0;break t}break;default:ot=Xe,Xe=0,ri=null,Tr(e,U,Y,ot)}}KS(),E=cn;break}catch(_t){r_(e,_t)}while(!0);return i&&e.shellSuspendCounter++,ra=bs=null,Ie=l,B.H=h,B.A=m,Me===null&&(Qe=null,be=0,ql()),E}function KS(){for(;Me!==null;)u_(Me)}function QS(e,i){var s=Ie;Ie|=2;var l=l_(),h=c_();Qe!==e||be!==i?(Tc=null,bc=C()+500,br(e,i)):Sr=Ut(e,i);t:do try{if(Xe!==0&&Me!==null){i=Me;var m=ri;e:switch(Xe){case 1:Xe=0,ri=null,Tr(e,i,m,1);break;case 2:case 9:if(y0(m)){Xe=0,ri=null,f_(i);break}i=function(){Xe!==2&&Xe!==9||Qe!==e||(Xe=7),Xi(e)},m.then(i,i);break t;case 3:Xe=7;break t;case 4:Xe=5;break t;case 7:y0(m)?(Xe=0,ri=null,f_(i)):(Xe=0,ri=null,Tr(e,i,m,7));break;case 5:var E=null;switch(Me.tag){case 26:E=Me.memoizedState;case 5:case 27:var U=Me;if(E?K_(E):U.stateNode.complete){Xe=0,ri=null;var Y=U.sibling;if(Y!==null)Me=Y;else{var ot=U.return;ot!==null?(Me=ot,wc(ot)):Me=null}break e}}Xe=0,ri=null,Tr(e,i,m,5);break;case 6:Xe=0,ri=null,Tr(e,i,m,6);break;case 8:Uh(),cn=6;break t;default:throw Error(a(462))}}JS();break}catch(_t){r_(e,_t)}while(!0);return ra=bs=null,B.H=l,B.A=h,Ie=s,Me!==null?0:(Qe=null,be=0,ql(),cn)}function JS(){for(;Me!==null&&!Jt();)u_(Me)}function u_(e){var i=Og(e.alternate,e,ga);e.memoizedProps=e.pendingProps,i===null?wc(e):Me=i}function f_(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=wg(s,i,i.pendingProps,i.type,void 0,be);break;case 11:i=wg(s,i,i.pendingProps,i.type.render,i.ref,be);break;case 5:qf(i);default:Pg(s,i),i=Me=c0(i,ga),i=Og(s,i,ga)}e.memoizedProps=e.pendingProps,i===null?wc(e):Me=i}function Tr(e,i,s,l){ra=bs=null,qf(i),pr=null,Uo=0;var h=i.return;try{if(HS(e,h,i,s,be)){cn=1,mc(e,vi(s,e.current)),Me=null;return}}catch(m){if(h!==null)throw Me=h,m;cn=1,mc(e,vi(s,e.current)),Me=null;return}i.flags&32768?(Ce||l===1?e=!0:Sr||(be&536870912)!==0?e=!1:(Ka=e=!0,(l===2||l===9||l===3||l===6)&&(l=ai.current,l!==null&&l.tag===13&&(l.flags|=16384))),h_(i,e)):wc(i)}function wc(e){var i=e;do{if((i.flags&32768)!==0){h_(i,Ka);return}e=i.return;var s=kS(i.alternate,i,ga);if(s!==null){Me=s;return}if(i=i.sibling,i!==null){Me=i;return}Me=i=e}while(i!==null);cn===0&&(cn=5)}function h_(e,i){do{var s=XS(e.alternate,e);if(s!==null){s.flags&=32767,Me=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){Me=e;return}Me=e=s}while(e!==null);cn=6,Me=null}function d_(e,i,s,l,h,m,E,U,Y){e.cancelPendingCommit=null;do Cc();while(Sn!==0);if((Ie&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=yf,Ri(e,s,m,E,U,Y),e===Qe&&(Me=Qe=null,be=0),Er=i,$a=e,_a=s,wh=m,Ch=h,n_=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,nM(mt,function(){return v_(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=B.T,B.T=null,h=k.p,k.p=2,E=Ie,Ie|=4;try{WS(e,i,s)}finally{Ie=E,k.p=h,B.T=l}}Sn=1,p_(),m_(),g_()}}function p_(){if(Sn===1){Sn=0;var e=$a,i=Er,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=B.T,B.T=null;var l=k.p;k.p=2;var h=Ie;Ie|=4;try{jg(i,e);var m=Xh,E=t0(e.containerInfo),U=m.focusedElem,Y=m.selectionRange;if(E!==U&&U&&U.ownerDocument&&$m(U.ownerDocument.documentElement,U)){if(Y!==null&&mf(U)){var ot=Y.start,_t=Y.end;if(_t===void 0&&(_t=ot),"selectionStart"in U)U.selectionStart=ot,U.selectionEnd=Math.min(_t,U.value.length);else{var St=U.ownerDocument||document,ct=St&&St.defaultView||window;if(ct.getSelection){var dt=ct.getSelection(),jt=U.textContent.length,oe=Math.min(Y.start,jt),Ke=Y.end===void 0?oe:Math.min(Y.end,jt);!dt.extend&&oe>Ke&&(E=Ke,Ke=oe,oe=E);var tt=Jm(U,oe),K=Jm(U,Ke);if(tt&&K&&(dt.rangeCount!==1||dt.anchorNode!==tt.node||dt.anchorOffset!==tt.offset||dt.focusNode!==K.node||dt.focusOffset!==K.offset)){var st=St.createRange();st.setStart(tt.node,tt.offset),dt.removeAllRanges(),oe>Ke?(dt.addRange(st),dt.extend(K.node,K.offset)):(st.setEnd(K.node,K.offset),dt.addRange(st))}}}}for(St=[],dt=U;dt=dt.parentNode;)dt.nodeType===1&&St.push({element:dt,left:dt.scrollLeft,top:dt.scrollTop});for(typeof U.focus=="function"&&U.focus(),U=0;U<St.length;U++){var yt=St[U];yt.element.scrollLeft=yt.left,yt.element.scrollTop=yt.top}}Gc=!!kh,Xh=kh=null}finally{Ie=h,k.p=l,B.T=s}}e.current=i,Sn=2}}function m_(){if(Sn===2){Sn=0;var e=$a,i=Er,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=B.T,B.T=null;var l=k.p;k.p=2;var h=Ie;Ie|=4;try{kg(e,i.alternate,i)}finally{Ie=h,k.p=l,B.T=s}}Sn=3}}function g_(){if(Sn===4||Sn===3){Sn=0,G();var e=$a,i=Er,s=_a,l=n_;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Sn=5:(Sn=0,Er=$a=null,__(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(Ja=null),Ks(s),i=i.stateNode,wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(At,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=B.T,h=k.p,k.p=2,B.T=null;try{for(var m=e.onRecoverableError,E=0;E<l.length;E++){var U=l[E];m(U.value,{componentStack:U.stack})}}finally{B.T=i,k.p=h}}(_a&3)!==0&&Cc(),Xi(e),h=e.pendingLanes,(s&261930)!==0&&(h&42)!==0?e===Dh?jo++:(jo=0,Dh=e):jo=0,Zo(0)}}function __(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Co(i)))}function Cc(){return p_(),m_(),g_(),v_()}function v_(){if(Sn!==5)return!1;var e=$a,i=wh;wh=0;var s=Ks(_a),l=B.T,h=k.p;try{k.p=32>s?32:s,B.T=null,s=Ch,Ch=null;var m=$a,E=_a;if(Sn=0,Er=$a=null,_a=0,(Ie&6)!==0)throw Error(a(331));var U=Ie;if(Ie|=4,$g(m.current),Kg(m,m.current,E,s),Ie=U,Zo(0,!1),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(At,m)}catch{}return!0}finally{k.p=h,B.T=l,__(e,i)}}function x_(e,i,s){i=vi(s,i),i=lh(e.stateNode,i,2),e=Ya(e,i,2),e!==null&&(Bn(e,2),Xi(e))}function We(e,i,s){if(e.tag===3)x_(e,e,s);else for(;i!==null;){if(i.tag===3){x_(i,e,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ja===null||!Ja.has(l))){e=vi(s,e),s=yg(2),l=Ya(i,s,2),l!==null&&(Sg(s,l,i,e),Bn(l,2),Xi(l));break}}i=i.return}}function Nh(e,i,s){var l=e.pingCache;if(l===null){l=e.pingCache=new jS;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(s)||(Th=!0,h.add(s),e=$S.bind(null,e,i,s),i.then(e,e))}function $S(e,i,s){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,Qe===e&&(be&s)===s&&(cn===4||cn===3&&(be&62914560)===be&&300>C()-Ec?(Ie&2)===0&&br(e,0):Ah|=s,Mr===be&&(Mr=0)),Xi(e)}function y_(e,i){i===0&&(i=Ve()),e=Ss(e,i),e!==null&&(Bn(e,i),Xi(e))}function tM(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),y_(e,s)}function eM(e,i){var s=0;switch(e.tag){case 31:case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(s=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),y_(e,s)}function nM(e,i){return ge(e,i)}var Dc=null,Ar=null,Oh=!1,Uc=!1,zh=!1,es=0;function Xi(e){e!==Ar&&e.next===null&&(Ar===null?Dc=Ar=e:Ar=Ar.next=e),Uc=!0,Oh||(Oh=!0,aM())}function Zo(e,i){if(!zh&&Uc){zh=!0;do for(var s=!1,l=Dc;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var m=0;else{var E=l.suspendedLanes,U=l.pingedLanes;m=(1<<31-Vt(42|e)+1)-1,m&=h&~(E&~U),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,b_(l,m))}else m=be,m=Mt(l,l===Qe?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Ut(l,m)||(s=!0,b_(l,m));l=l.next}while(s);zh=!1}}function iM(){S_()}function S_(){Uc=Oh=!1;var e=0;es!==0&&pM()&&(e=es);for(var i=C(),s=null,l=Dc;l!==null;){var h=l.next,m=M_(l,i);m===0?(l.next=null,s===null?Dc=h:s.next=h,h===null&&(Ar=s)):(s=l,(e!==0||(m&3)!==0)&&(Uc=!0)),l=h}Sn!==0&&Sn!==5||Zo(e),es!==0&&(es=0)}function M_(e,i){for(var s=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var E=31-Vt(m),U=1<<E,Y=h[E];Y===-1?((U&s)===0||(U&l)!==0)&&(h[E]=fe(U,i)):Y<=i&&(e.expiredLanes|=U),m&=~U}if(i=Qe,s=be,s=Mt(e,e===i?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,s===0||e===i&&(Xe===2||Xe===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&we(l),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||Ut(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(l!==null&&we(l),Ks(s)){case 2:case 8:s=bt;break;case 32:s=mt;break;case 268435456:s=zt;break;default:s=mt}return l=E_.bind(null,e),s=ge(s,l),e.callbackPriority=i,e.callbackNode=s,i}return l!==null&&l!==null&&we(l),e.callbackPriority=2,e.callbackNode=null,2}function E_(e,i){if(Sn!==0&&Sn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(Cc()&&e.callbackNode!==s)return null;var l=be;return l=Mt(e,e===Qe?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(a_(e,l,i),M_(e,C()),e.callbackNode!=null&&e.callbackNode===s?E_.bind(null,e):null)}function b_(e,i){if(Cc())return null;a_(e,i,!0)}function aM(){gM(function(){(Ie&6)!==0?ge(xt,iM):S_()})}function Ph(){if(es===0){var e=fr;e===0&&(e=It,It<<=1,(It&261888)===0&&(It=256)),es=e}return es}function T_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Il(""+e)}function A_(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function sM(e,i,s,l,h){if(i==="submit"&&s&&s.stateNode===h){var m=T_((h[An]||null).action),E=l.submitter;E&&(i=(i=E[An]||null)?T_(i.formAction):E.getAttribute("formAction"),i!==null&&(m=i,E=null));var U=new kl("action","action",null,l,h);e.push({event:U,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(es!==0){var Y=E?A_(h,E):new FormData(h);nh(s,{pending:!0,data:Y,method:h.method,action:m},null,Y)}}else typeof m=="function"&&(U.preventDefault(),Y=E?A_(h,E):new FormData(h),nh(s,{pending:!0,data:Y,method:h.method,action:m},m,Y))},currentTarget:h}]})}}for(var Bh=0;Bh<xf.length;Bh++){var Fh=xf[Bh],rM=Fh.toLowerCase(),oM=Fh[0].toUpperCase()+Fh.slice(1);Di(rM,"on"+oM)}Di(i0,"onAnimationEnd"),Di(a0,"onAnimationIteration"),Di(s0,"onAnimationStart"),Di("dblclick","onDoubleClick"),Di("focusin","onFocus"),Di("focusout","onBlur"),Di(ES,"onTransitionRun"),Di(bS,"onTransitionStart"),Di(TS,"onTransitionCancel"),Di(r0,"onTransitionEnd"),nt("onMouseEnter",["mouseout","mouseover"]),nt("onMouseLeave",["mouseout","mouseover"]),nt("onPointerEnter",["pointerout","pointerover"]),nt("onPointerLeave",["pointerout","pointerover"]),lt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),lt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),lt("onBeforeInput",["compositionend","keypress","textInput","paste"]),lt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),lt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),lt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ko));function R_(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var l=e[s],h=l.event;l=l.listeners;t:{var m=void 0;if(i)for(var E=l.length-1;0<=E;E--){var U=l[E],Y=U.instance,ot=U.currentTarget;if(U=U.listener,Y!==m&&h.isPropagationStopped())break t;m=U,h.currentTarget=ot;try{m(h)}catch(_t){Yl(_t)}h.currentTarget=null,m=Y}else for(E=0;E<l.length;E++){if(U=l[E],Y=U.instance,ot=U.currentTarget,U=U.listener,Y!==m&&h.isPropagationStopped())break t;m=U,h.currentTarget=ot;try{m(h)}catch(_t){Yl(_t)}h.currentTarget=null,m=Y}}}}function Ee(e,i){var s=i[Qs];s===void 0&&(s=i[Qs]=new Set);var l=e+"__bubble";s.has(l)||(w_(i,e,2,!1),s.add(l))}function Ih(e,i,s){var l=0;i&&(l|=4),w_(s,e,l,i)}var Lc="_reactListening"+Math.random().toString(36).slice(2);function Hh(e){if(!e[Lc]){e[Lc]=!0,$.forEach(function(s){s!=="selectionchange"&&(lM.has(s)||Ih(s,!1,e),Ih(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[Lc]||(i[Lc]=!0,Ih("selectionchange",!1,i))}}function w_(e,i,s,l){switch(iv(i)){case 2:var h=PM;break;case 8:h=BM;break;default:h=ed}s=h.bind(null,i,s,e),h=void 0,!rf||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(i,s,{capture:!0,passive:h}):e.addEventListener(i,s,!0):h!==void 0?e.addEventListener(i,s,{passive:h}):e.addEventListener(i,s,!1)}function Gh(e,i,s,l,h){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var U=l.stateNode.containerInfo;if(U===h)break;if(E===4)for(E=l.return;E!==null;){var Y=E.tag;if((Y===3||Y===4)&&E.stateNode.containerInfo===h)return;E=E.return}for(;U!==null;){if(E=Pa(U),E===null)return;if(Y=E.tag,Y===5||Y===6||Y===26||Y===27){l=m=E;continue t}U=U.parentNode}}l=l.return}Nm(function(){var ot=m,_t=af(s),St=[];t:{var ct=o0.get(e);if(ct!==void 0){var dt=kl,jt=e;switch(e){case"keypress":if(Gl(s)===0)break t;case"keydown":case"keyup":dt=eS;break;case"focusin":jt="focus",dt=uf;break;case"focusout":jt="blur",dt=uf;break;case"beforeblur":case"afterblur":dt=uf;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":dt=Pm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":dt=ky;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":dt=aS;break;case i0:case a0:case s0:dt=Yy;break;case r0:dt=rS;break;case"scroll":case"scrollend":dt=Gy;break;case"wheel":dt=lS;break;case"copy":case"cut":case"paste":dt=jy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":dt=Fm;break;case"toggle":case"beforetoggle":dt=uS}var oe=(i&4)!==0,Ke=!oe&&(e==="scroll"||e==="scrollend"),tt=oe?ct!==null?ct+"Capture":null:ct;oe=[];for(var K=ot,st;K!==null;){var yt=K;if(st=yt.stateNode,yt=yt.tag,yt!==5&&yt!==26&&yt!==27||st===null||tt===null||(yt=vo(K,tt),yt!=null&&oe.push(Qo(K,yt,st))),Ke)break;K=K.return}0<oe.length&&(ct=new dt(ct,jt,null,s,_t),St.push({event:ct,listeners:oe}))}}if((i&7)===0){t:{if(ct=e==="mouseover"||e==="pointerover",dt=e==="mouseout"||e==="pointerout",ct&&s!==nf&&(jt=s.relatedTarget||s.fromElement)&&(Pa(jt)||jt[wi]))break t;if((dt||ct)&&(ct=_t.window===_t?_t:(ct=_t.ownerDocument)?ct.defaultView||ct.parentWindow:window,dt?(jt=s.relatedTarget||s.toElement,dt=ot,jt=jt?Pa(jt):null,jt!==null&&(Ke=c(jt),oe=jt.tag,jt!==Ke||oe!==5&&oe!==27&&oe!==6)&&(jt=null)):(dt=null,jt=ot),dt!==jt)){if(oe=Pm,yt="onMouseLeave",tt="onMouseEnter",K="mouse",(e==="pointerout"||e==="pointerover")&&(oe=Fm,yt="onPointerLeave",tt="onPointerEnter",K="pointer"),Ke=dt==null?ct:_s(dt),st=jt==null?ct:_s(jt),ct=new oe(yt,K+"leave",dt,s,_t),ct.target=Ke,ct.relatedTarget=st,yt=null,Pa(_t)===ot&&(oe=new oe(tt,K+"enter",jt,s,_t),oe.target=st,oe.relatedTarget=Ke,yt=oe),Ke=yt,dt&&jt)e:{for(oe=cM,tt=dt,K=jt,st=0,yt=tt;yt;yt=oe(yt))st++;yt=0;for(var ae=K;ae;ae=oe(ae))yt++;for(;0<st-yt;)tt=oe(tt),st--;for(;0<yt-st;)K=oe(K),yt--;for(;st--;){if(tt===K||K!==null&&tt===K.alternate){oe=tt;break e}tt=oe(tt),K=oe(K)}oe=null}else oe=null;dt!==null&&C_(St,ct,dt,oe,!1),jt!==null&&Ke!==null&&C_(St,Ke,jt,oe,!0)}}t:{if(ct=ot?_s(ot):window,dt=ct.nodeName&&ct.nodeName.toLowerCase(),dt==="select"||dt==="input"&&ct.type==="file")var Oe=Ym;else if(Xm(ct))if(qm)Oe=yS;else{Oe=vS;var $t=_S}else dt=ct.nodeName,!dt||dt.toLowerCase()!=="input"||ct.type!=="checkbox"&&ct.type!=="radio"?ot&&Ci(ot.elementType)&&(Oe=Ym):Oe=xS;if(Oe&&(Oe=Oe(e,ot))){Wm(St,Oe,s,_t);break t}$t&&$t(e,ct,ot),e==="focusout"&&ot&&ct.type==="number"&&ot.memoizedProps.value!=null&&wn(ct,"number",ct.value)}switch($t=ot?_s(ot):window,e){case"focusin":(Xm($t)||$t.contentEditable==="true")&&(ir=$t,gf=ot,Ao=null);break;case"focusout":Ao=gf=ir=null;break;case"mousedown":_f=!0;break;case"contextmenu":case"mouseup":case"dragend":_f=!1,e0(St,s,_t);break;case"selectionchange":if(MS)break;case"keydown":case"keyup":e0(St,s,_t)}var ve;if(hf)t:{switch(e){case"compositionstart":var Te="onCompositionStart";break t;case"compositionend":Te="onCompositionEnd";break t;case"compositionupdate":Te="onCompositionUpdate";break t}Te=void 0}else nr?Vm(e,s)&&(Te="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(Te="onCompositionStart");Te&&(Im&&s.locale!=="ko"&&(nr||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&nr&&(ve=Om()):(Ia=_t,of="value"in Ia?Ia.value:Ia.textContent,nr=!0)),$t=Nc(ot,Te),0<$t.length&&(Te=new Bm(Te,e,null,s,_t),St.push({event:Te,listeners:$t}),ve?Te.data=ve:(ve=km(s),ve!==null&&(Te.data=ve)))),(ve=hS?dS(e,s):pS(e,s))&&(Te=Nc(ot,"onBeforeInput"),0<Te.length&&($t=new Bm("onBeforeInput","beforeinput",null,s,_t),St.push({event:$t,listeners:Te}),$t.data=ve)),sM(St,e,ot,s,_t)}R_(St,i)})}function Qo(e,i,s){return{instance:e,listener:i,currentTarget:s}}function Nc(e,i){for(var s=i+"Capture",l=[];e!==null;){var h=e,m=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||m===null||(h=vo(e,s),h!=null&&l.unshift(Qo(e,h,m)),h=vo(e,i),h!=null&&l.push(Qo(e,h,m))),e.tag===3)return l;e=e.return}return[]}function cM(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function C_(e,i,s,l,h){for(var m=i._reactName,E=[];s!==null&&s!==l;){var U=s,Y=U.alternate,ot=U.stateNode;if(U=U.tag,Y!==null&&Y===l)break;U!==5&&U!==26&&U!==27||ot===null||(Y=ot,h?(ot=vo(s,m),ot!=null&&E.unshift(Qo(s,ot,Y))):h||(ot=vo(s,m),ot!=null&&E.push(Qo(s,ot,Y)))),s=s.return}E.length!==0&&e.push({event:i,listeners:E})}var uM=/\r\n?/g,fM=/\u0000|\uFFFD/g;function D_(e){return(typeof e=="string"?e:""+e).replace(uM,`
`).replace(fM,"")}function U_(e,i){return i=D_(i),D_(e)===i}function Ze(e,i,s,l,h,m){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||yn(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&yn(e,""+l);break;case"className":se(e,"class",l);break;case"tabIndex":se(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":se(e,s,l);break;case"style":$s(e,l,m);break;case"data":if(i!=="object"){se(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Il(""+l),e.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(i!=="input"&&Ze(e,i,"name",h.name,h,null),Ze(e,i,"formEncType",h.formEncType,h,null),Ze(e,i,"formMethod",h.formMethod,h,null),Ze(e,i,"formTarget",h.formTarget,h,null)):(Ze(e,i,"encType",h.encType,h,null),Ze(e,i,"method",h.method,h,null),Ze(e,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Il(""+l),e.setAttribute(s,l);break;case"onClick":l!=null&&(e.onclick=na);break;case"onScroll":l!=null&&Ee("scroll",e);break;case"onScrollEnd":l!=null&&Ee("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}s=Il(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""+l):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":l===!0?e.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,l):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(s,l):e.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(s):e.setAttribute(s,l);break;case"popover":Ee("beforetoggle",e),Ee("toggle",e),Kt(e,"popover",l);break;case"xlinkActuate":Qt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Qt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Qt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Qt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Qt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Qt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Kt(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Iy.get(s)||s,Kt(e,s,l))}}function Vh(e,i,s,l,h,m){switch(s){case"style":$s(e,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof l=="string"?yn(e,l):(typeof l=="number"||typeof l=="bigint")&&yn(e,""+l);break;case"onScroll":l!=null&&Ee("scroll",e);break;case"onScrollEnd":l!=null&&Ee("scrollend",e);break;case"onClick":l!=null&&(e.onclick=na);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ht.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),i=s.slice(2,h?s.length-7:void 0),m=e[An]||null,m=m!=null?m[s]:null,typeof m=="function"&&e.removeEventListener(i,m,h),typeof l=="function")){typeof m!="function"&&m!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,l,h);break t}s in e?e[s]=l:l===!0?e.setAttribute(s,""):Kt(e,s,l)}}}function zn(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",e),Ee("load",e);var l=!1,h=!1,m;for(m in s)if(s.hasOwnProperty(m)){var E=s[m];if(E!=null)switch(m){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ze(e,i,m,E,s,null)}}h&&Ze(e,i,"srcSet",s.srcSet,s,null),l&&Ze(e,i,"src",s.src,s,null);return;case"input":Ee("invalid",e);var U=m=E=h=null,Y=null,ot=null;for(l in s)if(s.hasOwnProperty(l)){var _t=s[l];if(_t!=null)switch(l){case"name":h=_t;break;case"type":E=_t;break;case"checked":Y=_t;break;case"defaultChecked":ot=_t;break;case"value":m=_t;break;case"defaultValue":U=_t;break;case"children":case"dangerouslySetInnerHTML":if(_t!=null)throw Error(a(137,i));break;default:Ze(e,i,l,_t,s,null)}}ea(e,m,U,Y,ot,E,h,!1);return;case"select":Ee("invalid",e),l=E=m=null;for(h in s)if(s.hasOwnProperty(h)&&(U=s[h],U!=null))switch(h){case"value":m=U;break;case"defaultValue":E=U;break;case"multiple":l=U;default:Ze(e,i,h,U,s,null)}i=m,s=E,e.multiple=!!l,i!=null?gi(e,!!l,i,!1):s!=null&&gi(e,!!l,s,!0);return;case"textarea":Ee("invalid",e),m=h=l=null;for(E in s)if(s.hasOwnProperty(E)&&(U=s[E],U!=null))switch(E){case"value":l=U;break;case"defaultValue":h=U;break;case"children":m=U;break;case"dangerouslySetInnerHTML":if(U!=null)throw Error(a(91));break;default:Ze(e,i,E,U,s,null)}Cn(e,l,h,m);return;case"option":for(Y in s)s.hasOwnProperty(Y)&&(l=s[Y],l!=null)&&(Y==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":Ze(e,i,Y,l,s,null));return;case"dialog":Ee("beforetoggle",e),Ee("toggle",e),Ee("cancel",e),Ee("close",e);break;case"iframe":case"object":Ee("load",e);break;case"video":case"audio":for(l=0;l<Ko.length;l++)Ee(Ko[l],e);break;case"image":Ee("error",e),Ee("load",e);break;case"details":Ee("toggle",e);break;case"embed":case"source":case"link":Ee("error",e),Ee("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ot in s)if(s.hasOwnProperty(ot)&&(l=s[ot],l!=null))switch(ot){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ze(e,i,ot,l,s,null)}return;default:if(Ci(i)){for(_t in s)s.hasOwnProperty(_t)&&(l=s[_t],l!==void 0&&Vh(e,i,_t,l,s,void 0));return}}for(U in s)s.hasOwnProperty(U)&&(l=s[U],l!=null&&Ze(e,i,U,l,s,null))}function hM(e,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,m=null,E=null,U=null,Y=null,ot=null,_t=null;for(dt in s){var St=s[dt];if(s.hasOwnProperty(dt)&&St!=null)switch(dt){case"checked":break;case"value":break;case"defaultValue":Y=St;default:l.hasOwnProperty(dt)||Ze(e,i,dt,null,l,St)}}for(var ct in l){var dt=l[ct];if(St=s[ct],l.hasOwnProperty(ct)&&(dt!=null||St!=null))switch(ct){case"type":m=dt;break;case"name":h=dt;break;case"checked":ot=dt;break;case"defaultChecked":_t=dt;break;case"value":E=dt;break;case"defaultValue":U=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(a(137,i));break;default:dt!==St&&Ze(e,i,ct,dt,l,St)}}Rn(e,E,U,Y,ot,_t,m,h);return;case"select":dt=E=U=ct=null;for(m in s)if(Y=s[m],s.hasOwnProperty(m)&&Y!=null)switch(m){case"value":break;case"multiple":dt=Y;default:l.hasOwnProperty(m)||Ze(e,i,m,null,l,Y)}for(h in l)if(m=l[h],Y=s[h],l.hasOwnProperty(h)&&(m!=null||Y!=null))switch(h){case"value":ct=m;break;case"defaultValue":U=m;break;case"multiple":E=m;default:m!==Y&&Ze(e,i,h,m,l,Y)}i=U,s=E,l=dt,ct!=null?gi(e,!!s,ct,!1):!!l!=!!s&&(i!=null?gi(e,!!s,i,!0):gi(e,!!s,s?[]:"",!1));return;case"textarea":dt=ct=null;for(U in s)if(h=s[U],s.hasOwnProperty(U)&&h!=null&&!l.hasOwnProperty(U))switch(U){case"value":break;case"children":break;default:Ze(e,i,U,null,l,h)}for(E in l)if(h=l[E],m=s[E],l.hasOwnProperty(E)&&(h!=null||m!=null))switch(E){case"value":ct=h;break;case"defaultValue":dt=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==m&&Ze(e,i,E,h,l,m)}ke(e,ct,dt);return;case"option":for(var jt in s)ct=s[jt],s.hasOwnProperty(jt)&&ct!=null&&!l.hasOwnProperty(jt)&&(jt==="selected"?e.selected=!1:Ze(e,i,jt,null,l,ct));for(Y in l)ct=l[Y],dt=s[Y],l.hasOwnProperty(Y)&&ct!==dt&&(ct!=null||dt!=null)&&(Y==="selected"?e.selected=ct&&typeof ct!="function"&&typeof ct!="symbol":Ze(e,i,Y,ct,l,dt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var oe in s)ct=s[oe],s.hasOwnProperty(oe)&&ct!=null&&!l.hasOwnProperty(oe)&&Ze(e,i,oe,null,l,ct);for(ot in l)if(ct=l[ot],dt=s[ot],l.hasOwnProperty(ot)&&ct!==dt&&(ct!=null||dt!=null))switch(ot){case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(a(137,i));break;default:Ze(e,i,ot,ct,l,dt)}return;default:if(Ci(i)){for(var Ke in s)ct=s[Ke],s.hasOwnProperty(Ke)&&ct!==void 0&&!l.hasOwnProperty(Ke)&&Vh(e,i,Ke,void 0,l,ct);for(_t in l)ct=l[_t],dt=s[_t],!l.hasOwnProperty(_t)||ct===dt||ct===void 0&&dt===void 0||Vh(e,i,_t,ct,l,dt);return}}for(var tt in s)ct=s[tt],s.hasOwnProperty(tt)&&ct!=null&&!l.hasOwnProperty(tt)&&Ze(e,i,tt,null,l,ct);for(St in l)ct=l[St],dt=s[St],!l.hasOwnProperty(St)||ct===dt||ct==null&&dt==null||Ze(e,i,St,ct,l,dt)}function L_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function dM(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var h=s[l],m=h.transferSize,E=h.initiatorType,U=h.duration;if(m&&U&&L_(E)){for(E=0,U=h.responseEnd,l+=1;l<s.length;l++){var Y=s[l],ot=Y.startTime;if(ot>U)break;var _t=Y.transferSize,St=Y.initiatorType;_t&&L_(St)&&(Y=Y.responseEnd,E+=_t*(Y<U?1:(U-ot)/(Y-ot)))}if(--l,i+=8*(m+E)/(h.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var kh=null,Xh=null;function Oc(e){return e.nodeType===9?e:e.ownerDocument}function N_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function O_(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function Wh(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Yh=null;function pM(){var e=window.event;return e&&e.type==="popstate"?e===Yh?!1:(Yh=e,!0):(Yh=null,!1)}var z_=typeof setTimeout=="function"?setTimeout:void 0,mM=typeof clearTimeout=="function"?clearTimeout:void 0,P_=typeof Promise=="function"?Promise:void 0,gM=typeof queueMicrotask=="function"?queueMicrotask:typeof P_<"u"?function(e){return P_.resolve(null).then(e).catch(_M)}:z_;function _M(e){setTimeout(function(){throw e})}function ns(e){return e==="head"}function B_(e,i){var s=i,l=0;do{var h=s.nextSibling;if(e.removeChild(s),h&&h.nodeType===8)if(s=h.data,s==="/$"||s==="/&"){if(l===0){e.removeChild(h),Dr(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")Jo(e.ownerDocument.documentElement);else if(s==="head"){s=e.ownerDocument.head,Jo(s);for(var m=s.firstChild;m;){var E=m.nextSibling,U=m.nodeName;m[gs]||U==="SCRIPT"||U==="STYLE"||U==="LINK"&&m.rel.toLowerCase()==="stylesheet"||s.removeChild(m),m=E}}else s==="body"&&Jo(e.ownerDocument.body);s=h}while(s);Dr(i)}function F_(e,i){var s=e;e=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(e===0)break;e--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||e++;s=l}while(s)}function qh(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":qh(s),_o(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function vM(e,i,s,l){for(;e.nodeType===1;){var h=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[gs])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var m=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Ei(e.nextSibling),e===null)break}return null}function xM(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=Ei(e.nextSibling),e===null))return null;return e}function I_(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=Ei(e.nextSibling),e===null))return null;return e}function jh(e){return e.data==="$?"||e.data==="$~"}function Zh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function yM(e,i){var s=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Ei(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var Kh=null;function H_(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"||s==="/&"){if(i===0)return Ei(e.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}e=e.nextSibling}return null}function G_(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return e;i--}else s!=="/$"&&s!=="/&"||i++}e=e.previousSibling}return null}function V_(e,i,s){switch(i=Oc(s),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Jo(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);_o(e)}var bi=new Map,k_=new Set;function zc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var va=k.d;k.d={f:SM,r:MM,D:EM,C:bM,L:TM,m:AM,X:wM,S:RM,M:CM};function SM(){var e=va.f(),i=Ac();return e||i}function MM(e){var i=Ba(e);i!==null&&i.tag===5&&i.type==="form"?rg(i):va.r(e)}var Rr=typeof document>"u"?null:document;function X_(e,i,s){var l=Rr;if(l&&typeof i=="string"&&i){var h=he(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),k_.has(h)||(k_.add(h),e={rel:e,crossOrigin:s,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),zn(i,"link",e),L(i),l.head.appendChild(i)))}}function EM(e){va.D(e),X_("dns-prefetch",e,null)}function bM(e,i){va.C(e,i),X_("preconnect",e,i)}function TM(e,i,s){va.L(e,i,s);var l=Rr;if(l&&e&&i){var h='link[rel="preload"][as="'+he(i)+'"]';i==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+he(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+he(s.imageSizes)+'"]')):h+='[href="'+he(e)+'"]';var m=h;switch(i){case"style":m=wr(e);break;case"script":m=Cr(e)}bi.has(m)||(e=g({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),bi.set(m,e),l.querySelector(h)!==null||i==="style"&&l.querySelector($o(m))||i==="script"&&l.querySelector(tl(m))||(i=l.createElement("link"),zn(i,"link",e),L(i),l.head.appendChild(i)))}}function AM(e,i){va.m(e,i);var s=Rr;if(s&&e){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+he(l)+'"][href="'+he(e)+'"]',m=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Cr(e)}if(!bi.has(m)&&(e=g({rel:"modulepreload",href:e},i),bi.set(m,e),s.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(tl(m)))return}l=s.createElement("link"),zn(l,"link",e),L(l),s.head.appendChild(l)}}}function RM(e,i,s){va.S(e,i,s);var l=Rr;if(l&&e){var h=Fa(l).hoistableStyles,m=wr(e);i=i||"default";var E=h.get(m);if(!E){var U={loading:0,preload:null};if(E=l.querySelector($o(m)))U.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":i},s),(s=bi.get(m))&&Qh(e,s);var Y=E=l.createElement("link");L(Y),zn(Y,"link",e),Y._p=new Promise(function(ot,_t){Y.onload=ot,Y.onerror=_t}),Y.addEventListener("load",function(){U.loading|=1}),Y.addEventListener("error",function(){U.loading|=2}),U.loading|=4,Pc(E,i,l)}E={type:"stylesheet",instance:E,count:1,state:U},h.set(m,E)}}}function wM(e,i){va.X(e,i);var s=Rr;if(s&&e){var l=Fa(s).hoistableScripts,h=Cr(e),m=l.get(h);m||(m=s.querySelector(tl(h)),m||(e=g({src:e,async:!0},i),(i=bi.get(h))&&Jh(e,i),m=s.createElement("script"),L(m),zn(m,"link",e),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(h,m))}}function CM(e,i){va.M(e,i);var s=Rr;if(s&&e){var l=Fa(s).hoistableScripts,h=Cr(e),m=l.get(h);m||(m=s.querySelector(tl(h)),m||(e=g({src:e,async:!0,type:"module"},i),(i=bi.get(h))&&Jh(e,i),m=s.createElement("script"),L(m),zn(m,"link",e),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(h,m))}}function W_(e,i,s,l){var h=(h=P.current)?zc(h):null;if(!h)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=wr(s.href),s=Fa(h).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=wr(s.href);var m=Fa(h).hoistableStyles,E=m.get(e);if(E||(h=h.ownerDocument||h,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,E),(m=h.querySelector($o(e)))&&!m._p&&(E.instance=m,E.state.loading=5),bi.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},bi.set(e,s),m||DM(h,e,s,E.state))),i&&l===null)throw Error(a(528,""));return E}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Cr(s),s=Fa(h).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function wr(e){return'href="'+he(e)+'"'}function $o(e){return'link[rel="stylesheet"]['+e+"]"}function Y_(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function DM(e,i,s,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),zn(i,"link",s),L(i),e.head.appendChild(i))}function Cr(e){return'[src="'+he(e)+'"]'}function tl(e){return"script[async]"+e}function q_(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+he(s.href)+'"]');if(l)return i.instance=l,L(l),l;var h=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),L(l),zn(l,"style",h),Pc(l,s.precedence,e),i.instance=l;case"stylesheet":h=wr(s.href);var m=e.querySelector($o(h));if(m)return i.state.loading|=4,i.instance=m,L(m),m;l=Y_(s),(h=bi.get(h))&&Qh(l,h),m=(e.ownerDocument||e).createElement("link"),L(m);var E=m;return E._p=new Promise(function(U,Y){E.onload=U,E.onerror=Y}),zn(m,"link",l),i.state.loading|=4,Pc(m,s.precedence,e),i.instance=m;case"script":return m=Cr(s.src),(h=e.querySelector(tl(m)))?(i.instance=h,L(h),h):(l=s,(h=bi.get(m))&&(l=g({},s),Jh(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),L(h),zn(h,"link",l),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Pc(l,s.precedence,e));return i.instance}function Pc(e,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,m=h,E=0;E<l.length;E++){var U=l[E];if(U.dataset.precedence===i)m=U;else if(m!==h)break}m?m.parentNode.insertBefore(e,m.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function Qh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Jh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var Bc=null;function j_(e,i,s){if(Bc===null){var l=new Map,h=Bc=new Map;h.set(s,l)}else h=Bc,l=h.get(s),l||(l=new Map,h.set(s,l));if(l.has(e))return l;for(l.set(e,null),s=s.getElementsByTagName(e),h=0;h<s.length;h++){var m=s[h];if(!(m[gs]||m[dn]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(i)||"";E=e+E;var U=l.get(E);U?U.push(m):l.set(E,[m])}}return l}function Z_(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function UM(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(e=i.disabled,typeof i.precedence=="string"&&e==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function K_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function LM(e,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var h=wr(l.href),m=i.querySelector($o(h));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=Fc.bind(e),i.then(e,e)),s.state.loading|=4,s.instance=m,L(m);return}m=i.ownerDocument||i,l=Y_(l),(h=bi.get(h))&&Qh(l,h),m=m.createElement("link"),L(m);var E=m;E._p=new Promise(function(U,Y){E.onload=U,E.onerror=Y}),zn(m,"link",l),s.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(e.count++,s=Fc.bind(e),i.addEventListener("load",s),i.addEventListener("error",s))}}var $h=0;function NM(e,i){return e.stylesheets&&e.count===0&&Hc(e,e.stylesheets),0<e.count||0<e.imgCount?function(s){var l=setTimeout(function(){if(e.stylesheets&&Hc(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+i);0<e.imgBytes&&$h===0&&($h=62500*dM());var h=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Hc(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>$h?50:800)+i);return e.unsuspend=s,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(h)}}:null}function Fc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Hc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ic=null;function Hc(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ic=new Map,i.forEach(OM,e),Ic=null,Fc.call(e))}function OM(e,i){if(!(i.state.loading&4)){var s=Ic.get(e);if(s)var l=s.get(null);else{s=new Map,Ic.set(e,s);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<h.length;m++){var E=h[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(s.set(E.dataset.precedence,E),l=E)}l&&s.set(null,l)}h=i.instance,E=h.getAttribute("data-precedence"),m=s.get(E)||l,m===l&&s.set(null,h),s.set(E,h),this.count++,l=Fc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),m?m.parentNode.insertBefore(h,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var el={$$typeof:w,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function zM(e,i,s,l,h,m,E,U,Y){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=De(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=De(0),this.hiddenUpdates=De(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=Y,this.incompleteTransitions=new Map}function Q_(e,i,s,l,h,m,E,U,Y,ot,_t,St){return e=new zM(e,i,s,E,Y,ot,_t,St,U),i=1,m===!0&&(i|=24),m=ii(3,null,null,i),e.current=m,m.stateNode=e,i=Lf(),i.refCount++,e.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:s,cache:i},Pf(m),e}function J_(e){return e?(e=rr,e):rr}function $_(e,i,s,l,h,m){h=J_(h),l.context===null?l.context=h:l.pendingContext=h,l=Wa(i),l.payload={element:s},m=m===void 0?null:m,m!==null&&(l.callback=m),s=Ya(e,l,i),s!==null&&(ei(s,e,i),No(s,e,i))}function tv(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function td(e,i){tv(e,i),(e=e.alternate)&&tv(e,i)}function ev(e){if(e.tag===13||e.tag===31){var i=Ss(e,67108864);i!==null&&ei(i,e,67108864),td(e,67108864)}}function nv(e){if(e.tag===13||e.tag===31){var i=li();i=po(i);var s=Ss(e,i);s!==null&&ei(s,e,i),td(e,i)}}var Gc=!0;function PM(e,i,s,l){var h=B.T;B.T=null;var m=k.p;try{k.p=2,ed(e,i,s,l)}finally{k.p=m,B.T=h}}function BM(e,i,s,l){var h=B.T;B.T=null;var m=k.p;try{k.p=8,ed(e,i,s,l)}finally{k.p=m,B.T=h}}function ed(e,i,s,l){if(Gc){var h=nd(l);if(h===null)Gh(e,i,l,Vc,s),av(e,l);else if(IM(h,e,i,s,l))l.stopPropagation();else if(av(e,l),i&4&&-1<FM.indexOf(e)){for(;h!==null;){var m=Ba(h);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=Tt(m.pendingLanes);if(E!==0){var U=m;for(U.pendingLanes|=2,U.entangledLanes|=2;E;){var Y=1<<31-Vt(E);U.entanglements[1]|=Y,E&=~Y}Xi(m),(Ie&6)===0&&(bc=C()+500,Zo(0))}}break;case 31:case 13:U=Ss(m,2),U!==null&&ei(U,m,2),Ac(),td(m,2)}if(m=nd(l),m===null&&Gh(e,i,l,Vc,s),m===h)break;h=m}h!==null&&l.stopPropagation()}else Gh(e,i,l,null,s)}}function nd(e){return e=af(e),id(e)}var Vc=null;function id(e){if(Vc=null,e=Pa(e),e!==null){var i=c(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=u(i),e!==null)return e;e=null}else if(s===31){if(e=f(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Vc=e,null}function iv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(J()){case xt:return 2;case bt:return 8;case mt:case te:return 32;case zt:return 268435456;default:return 32}default:return 32}}var ad=!1,is=null,as=null,ss=null,nl=new Map,il=new Map,rs=[],FM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function av(e,i){switch(e){case"focusin":case"focusout":is=null;break;case"dragenter":case"dragleave":as=null;break;case"mouseover":case"mouseout":ss=null;break;case"pointerover":case"pointerout":nl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":il.delete(i.pointerId)}}function al(e,i,s,l,h,m){return e===null||e.nativeEvent!==m?(e={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:m,targetContainers:[h]},i!==null&&(i=Ba(i),i!==null&&ev(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function IM(e,i,s,l,h){switch(i){case"focusin":return is=al(is,e,i,s,l,h),!0;case"dragenter":return as=al(as,e,i,s,l,h),!0;case"mouseover":return ss=al(ss,e,i,s,l,h),!0;case"pointerover":var m=h.pointerId;return nl.set(m,al(nl.get(m)||null,e,i,s,l,h)),!0;case"gotpointercapture":return m=h.pointerId,il.set(m,al(il.get(m)||null,e,i,s,l,h)),!0}return!1}function sv(e){var i=Pa(e.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){e.blockedOn=i,Hi(e.priority,function(){nv(s)});return}}else if(i===31){if(i=f(s),i!==null){e.blockedOn=i,Hi(e.priority,function(){nv(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=nd(e.nativeEvent);if(s===null){s=e.nativeEvent;var l=new s.constructor(s.type,s);nf=l,s.target.dispatchEvent(l),nf=null}else return i=Ba(s),i!==null&&ev(i),e.blockedOn=s,!1;i.shift()}return!0}function rv(e,i,s){kc(e)&&s.delete(i)}function HM(){ad=!1,is!==null&&kc(is)&&(is=null),as!==null&&kc(as)&&(as=null),ss!==null&&kc(ss)&&(ss=null),nl.forEach(rv),il.forEach(rv)}function Xc(e,i){e.blockedOn===i&&(e.blockedOn=null,ad||(ad=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,HM)))}var Wc=null;function ov(e){Wc!==e&&(Wc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Wc===e&&(Wc=null);for(var i=0;i<e.length;i+=3){var s=e[i],l=e[i+1],h=e[i+2];if(typeof l!="function"){if(id(l||s)===null)continue;break}var m=Ba(s);m!==null&&(e.splice(i,3),i-=3,nh(m,{pending:!0,data:h,method:s.method,action:l},l,h))}}))}function Dr(e){function i(Y){return Xc(Y,e)}is!==null&&Xc(is,e),as!==null&&Xc(as,e),ss!==null&&Xc(ss,e),nl.forEach(i),il.forEach(i);for(var s=0;s<rs.length;s++){var l=rs[s];l.blockedOn===e&&(l.blockedOn=null)}for(;0<rs.length&&(s=rs[0],s.blockedOn===null);)sv(s),s.blockedOn===null&&rs.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var h=s[l],m=s[l+1],E=h[An]||null;if(typeof m=="function")E||ov(s);else if(E){var U=null;if(m&&m.hasAttribute("formAction")){if(h=m,E=m[An]||null)U=E.formAction;else if(id(h)!==null)continue}else U=E.action;typeof U=="function"?s[l+1]=U:(s.splice(l,3),l-=3),ov(s)}}}function lv(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(E){return h=E})},focusReset:"manual",scroll:"manual"})}function i(){h!==null&&(h(),h=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,h=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),h!==null&&(h(),h=null)}}}function sd(e){this._internalRoot=e}Yc.prototype.render=sd.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=li();$_(s,l,e,i,null,null)},Yc.prototype.unmount=sd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;$_(e.current,2,null,e,null,null),Ac(),i[wi]=null}};function Yc(e){this._internalRoot=e}Yc.prototype.unstable_scheduleHydration=function(e){if(e){var i=mo();e={blockedOn:null,target:e,priority:i};for(var s=0;s<rs.length&&i!==0&&i<rs[s].priority;s++);rs.splice(s,0,e),s===0&&sv(e)}};var cv=t.version;if(cv!=="19.2.8")throw Error(a(527,cv,"19.2.8"));k.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=d(i),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var GM={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qc.isDisabled&&qc.supportsFiber)try{At=qc.inject(GM),wt=qc}catch{}}return rl.createRoot=function(e,i){if(!o(e))throw Error(a(299));var s=!1,l="",h=gg,m=_g,E=vg;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError)),i=Q_(e,1,!1,null,null,s,l,null,h,m,E,lv),e[wi]=i.current,Hh(e),new sd(i)},rl.hydrateRoot=function(e,i,s){if(!o(e))throw Error(a(299));var l=!1,h="",m=gg,E=_g,U=vg,Y=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(E=s.onCaughtError),s.onRecoverableError!==void 0&&(U=s.onRecoverableError),s.formState!==void 0&&(Y=s.formState)),i=Q_(e,1,!0,i,s??null,l,h,Y,m,E,U,lv),i.context=J_(null),s=i.current,l=li(),l=po(l),h=Wa(l),h.callback=null,Ya(s,h,l),s=l,i.current.lanes=s,Bn(i,s),Xi(i),e[wi]=i.current,Hh(e),new Yc(i)},rl.version="19.2.8",rl}var xv;function $M(){if(xv)return ld.exports;xv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),ld.exports=JM(),ld.exports}var t1=$M();const e1="worldblocks-input-v1",n1=new Set(["C0","C1","C2","C3","C4","C5"]);function Gx(r,{source:t="hardware"}={}){if(!r||typeof r!="object"||!["hardware","mock"].includes(t))throw new Error("Invalid snapshot or source");const n=r.topology,a=new Map((r.codebook?.codes||[]).map(g=>[g.unit,g.id])),o=[],c=n?.module_count||0,u=r.module_layout||{module_count:c,grid_rows:c,grid_cols:1,slots:Array.from({length:c},(g,v)=>`A${v}`)};if(n&&(!Number.isInteger(u.grid_cols)||u.grid_cols<1||u.module_count!==c||u.grid_rows*u.grid_cols!==c||!Array.isArray(u.slots)||u.slots.length!==c||new Set(u.slots).size!==c))throw new Error("Invalid or mismatched module layout; do not guess coordinates");const f=(n?.columns||[]).map(g=>{const v=g.id,y=g.port||`A${g.module}`,M=u.slots.indexOf(y);if(M<0||!["L0","L0.5"].includes(g.layer))throw new Error(`Unmapped position ${v}`);const b=g.layer==="L0.5"?.5:0,S=M%u.grid_cols*4+g.col+b,x=Math.floor(M/u.grid_cols)*2+g.row%2+b;let R=!1;const w=(r.board?.[v]||[]).map((N,O)=>{const z=a.get(N),V=n1.has(z)?z:null;return V||(R=!0),{slot_key:`${v}:${O}`,code_id:V,index:O,position:{x:S,y:O+b,z:x}}}),A=r.active_faults?.[v];return(A||R)&&o.push({column_id:v,reason:R?"unknown_type":"hardware_attention"}),{id:v,port:y,layer:g.layer,enabled:g.enabled!==!1,position:{x:S,y:b,z:x},stack:w,needs_attention:!!(A||R),beyond_validated_height:w.length>n.max_stack}}),p=r.connected===!0,d=!!r.hello?.recovery_mode||["starting","restoring","stopping"].includes(r.recovery?.status),_=p?n?d?"recovering":o.length||["attention","failed"].includes(r.recovery?.status)?"attention":"live":"waiting":"offline";return{contract:e1,source:t,connected:p,status:_,boot_id:n?.boot_id||r.hello?.boot_id||null,topology_id:n?.topology_id||null,module_count:c,validated_max_stack:n?.max_stack??null,columns:f,issues:o}}function i1(r,t=Math.random){const n=Gx(r,{source:"mock"}).columns.filter(R=>R.enabled);if(!n.length)return null;const a=n.map(R=>R.position.x),o=n.map(R=>R.position.z),c=(Math.min(...a)+Math.max(...a))/2,u=(Math.min(...o)+Math.max(...o))/2,f=Math.max(1,(Math.max(...a)-Math.min(...a))/2),p=Math.max(1,(Math.max(...o)-Math.min(...o))/2),d=R=>Math.hypot((R.position.x-c)/f,(R.position.z-u)/p),_=n.filter(R=>R.stack.length<r.topology.max_stack);if(!_.length)return null;const g=t()<.18;let v=_.filter(R=>g?d(R)>.65:d(R)<=.8);v.length||(v=_);const y=t()<.28,M=v.filter(R=>y?R.stack.length>0:!R.stack.length);M.length&&(v=M);const b=n.filter(R=>R.stack.length),S=v.map(R=>{const w=b.some(A=>Math.hypot(R.position.x-A.position.x,R.position.z-A.position.z)<=1.1);return g?1:(.15+Math.exp(-3*d(R)**2))*(w?1.7:1)/(1+R.stack.length*.35)});let x=t()*S.reduce((R,w)=>R+w,0);for(let R=0;R<v.length;R++)if(x-=S[R],x<0)return v[R].id;return v.at(-1).id}const zu={earth:{label:"棕色土地",short:"Land",color:"#c49352",side:"#8b6338",accent:"#f0cf89",surface:"earth"},water:{label:"水坑 / 河流",short:"Water",color:"#47a9d9",side:"#b79a6a",accent:"#b9ecff",surface:"water"},fire:{label:"火山地貌",short:"Volcano",color:"#39312c",side:"#241f1d",accent:"#ff5a36",surface:"volcanic"},spacer:{label:"空层 / 浮空",short:"Void",color:"#f5f0dc",side:"#d8ceb7",accent:"#ffffff",surface:"void"},animal:{label:"绿色草地和植物",short:"Grass",color:"#77b85a",side:"#6f8f47",accent:"#e9f49b",surface:"vegetation"},human:{label:"人的房子",short:"House",color:"#d9bb82",side:"#ad8654",accent:"#d9952f",surface:"human"}},yl={module_count:1,max_stack:7,tracking_capacity:16,layers:[{id:"L0",rows:2,cols:4},{id:"L0.5",rows:2,cols:4}],columns:["L0","L0.5"].flatMap(r=>Array.from({length:8},(t,n)=>({id:`${r}-r${Math.floor(n/4)}-c${n%4}`,layer:r,row:Math.floor(n/4),col:n%4,module:0,mux:0,channel:n,port:"A0",enabled:!0})))};function Da(r){return zu[String(r||"").toLowerCase()]||{label:r||"Unknown",short:"?",color:"#9aa0a6",side:"#747a7f",accent:"#ffffff",surface:"earth"}}function a1(r){return Da(r).surface==="void"}function Ml(r){return(r||[]).map((t,n)=>({unit:t,index:n})).filter(t=>!a1(t.unit))}function Vx(r){const t=Ml(r);return t.length?t[t.length-1].unit:null}function s1(r){const t=Object.values(r||{}),n=t.filter(u=>Ml(u).length).length,a=t.reduce((u,f)=>u+f.length,0),o=t.reduce((u,f)=>Math.max(u,f.length),0),c=t.reduce((u,f)=>{const p=Vx(f);if(!p)return u;const d=Da(p).surface;return u[d]=(u[d]||0)+1,u},{});return{occupied:n,totalUnits:a,tallest:o,topSurfaces:c}}const ep=Object.freeze({C0:"earth",C1:"fire",C2:"animal",C3:"human",C4:"water",C5:"support"}),Pu={codes:Object.keys(ep).map((r,t)=>({id:r,unit:`type_${t}`}))},lm=Array.from({length:8},(r,t)=>`A${t}`),Yi={...yl,module_count:8,tracking_capacity:128,layers:yl.layers.map(r=>({...r,rows:16})),columns:lm.flatMap((r,t)=>yl.columns.map(n=>({...n,id:`${n.layer}-r${t*2+n.row}-c${n.col}`,row:t*2+n.row,module:t,port:r})))};function hd(r,t){return[1,2,4,8].includes(t)?{...r,module_layout:{...r.module_layout,grid_cols:t,grid_rows:8/t}}:r}function np(){return{connected:!0,topology:Yi,board:{},codebook:Pu,module_layout:{module_count:8,grid_rows:4,grid_cols:2,slots:lm},active_faults:{},detections:[]}}function kx(r,t,n=null){const a=Gx(r),o={};for(const u of a.columns)!u.enabled||!u.stack.length||(o[u.id]=u.stack.map(f=>{const p=t[f.code_id],d=p==="support"?"spacer":p;if(!f.code_id||!zu[d])throw new Error("Unknown block code. Check the input mapping.");return d}));const c={...r,board:o,inputStatus:a.status};for(const u of["board","topology","module_layout","active_faults"])n&&JSON.stringify(n[u])===JSON.stringify(c[u])&&(c[u]=n[u]);return c}function dd(r,t,n,a="C0"){if(!r.topology.columns.find(f=>f.id===t&&f.enabled!==!1))return r;const c=[...r.board[t]||[]];n==="add"&&Pu.codes.some(f=>f.id===a)&&c.length<r.topology.max_stack?c.push(Pu.codes.find(f=>f.id===a).unit):n==="remove"?c.pop():n==="clear"&&(c.length=0);const u={...r.board};return c.length?u[t]=c:delete u[t],{...r,board:u,detections:[{column_id:t}]}}function r1(){const r=np(),t=[["C0","C3"],["C0","C0","C2"],["C2"],["C2","C2"],["C0","C4"],["C0","C3"],["C1","C1"],["C1"],["C0"],["C0","C2"],[],[],["C0","C3"],["C0","C4"],["C2"],["C1","C3"]];return{...r,board:Object.fromEntries(r.topology.columns.map((n,a)=>[n.id,(t[a]||[]).map(o=>Pu.codes.find(c=>c.id===o).unit)]))}}function o1({baseUrl:r,codeMap:t,onSnapshot:n,onStatus:a,EventSourceClass:o=globalThis.EventSource}){let c,u=!1,f=Date.now(),p=null;function d(){u||(c?.close(),f=Date.now(),a("connecting"),c=new o(`${r}/api/events`),c.onmessage=g=>{if(!u){f=Date.now();try{const v=JSON.parse(g.data);if(!v.snapshot)return;p=kx(v.snapshot,t,p),n(p),a(p.inputStatus)}catch{a("invalid-data")}}},c.onerror=()=>{u||a("reconnecting")})}d();const _=setInterval(()=>{Date.now()-f>45e3&&d()},5e3);return()=>{u=!0,c.close(),clearInterval(_)}}function l1(){const[r,t]=Ae.useState({board:{},active_faults:{}}),[n,a]=Ae.useState("connecting");return Ae.useEffect(()=>{let o=!0,c,u;const f=new AbortController;async function p(){try{const d=await fetch("/__hub/settings",{signal:f.signal});if(!d.ok)throw new Error("Settings unavailable");const{settings:_}=await d.json();if(!o)return;if(!_?.confirmed){a("setup"),c=setTimeout(p,2e3);return}u=o1({baseUrl:"http://127.0.0.1:8787",codeMap:_.code_map,onSnapshot:g=>{o&&t(g)},onStatus:g=>{o&&a(g)}})}catch{if(!o)return;a("launcher-offline"),c=setTimeout(p,3e3)}}return p(),()=>{o=!1,f.abort(),clearTimeout(c),u?.()}},[]),{snapshot:r,status:n}}const cm="182",c1=0,yv=1,u1=2,wu=1,um=2,Kr=3,Ua=0,Zn=1,Pi=2,Aa=0,Jr=1,Sv=2,Mv=3,Ev=4,f1=5,Gs=100,h1=101,d1=102,p1=103,m1=104,g1=200,_1=201,v1=202,x1=203,ip=204,ap=205,y1=206,S1=207,M1=208,E1=209,b1=210,T1=211,A1=212,R1=213,w1=214,sp=0,rp=1,op=2,no=3,lp=4,cp=5,up=6,fp=7,Xx=0,C1=1,D1=2,Qi=0,Wx=1,Yx=2,qx=3,fm=4,jx=5,Zx=6,Kx=7,Qx=300,qs=301,io=302,hp=303,dp=304,Zu=306,pp=1e3,ba=1001,mp=1002,Pn=1003,U1=1004,jc=1005,Vn=1006,pd=1007,Xs=1008,di=1009,Jx=1010,$x=1011,El=1012,hm=1013,$i=1014,Zi=1015,La=1016,dm=1017,pm=1018,bl=1020,ty=35902,ey=35899,ny=1021,iy=1022,Fi=1023,Na=1026,Ws=1027,ay=1028,mm=1029,ao=1030,gm=1031,_m=1033,Cu=33776,Du=33777,Uu=33778,Lu=33779,gp=35840,_p=35841,vp=35842,xp=35843,yp=36196,Sp=37492,Mp=37496,Ep=37488,bp=37489,Tp=37490,Ap=37491,Rp=37808,wp=37809,Cp=37810,Dp=37811,Up=37812,Lp=37813,Np=37814,Op=37815,zp=37816,Pp=37817,Bp=37818,Fp=37819,Ip=37820,Hp=37821,Gp=36492,Vp=36494,kp=36495,Xp=36283,Wp=36284,Yp=36285,qp=36286,L1=3200,sy=0,N1=1,ps="",fi="srgb",so="srgb-linear",Bu="linear",Ye="srgb",Ur=7680,bv=519,O1=512,z1=513,P1=514,vm=515,B1=516,F1=517,xm=518,I1=519,jp=35044,Tv="300 es",Ki=2e3,Fu=2001;function ry(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Iu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function H1(){const r=Iu("canvas");return r.style.display="block",r}const Av={};function Hu(...r){const t="THREE."+r.shift();console.log(t,...r)}function ce(...r){const t="THREE."+r.shift();console.warn(t,...r)}function Ue(...r){const t="THREE."+r.shift();console.error(t,...r)}function Tl(...r){const t=r.join(" ");t in Av||(Av[t]=!0,ce(...r))}function G1(r,t,n){return new Promise(function(a,o){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}class uo{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const o=a[t];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const o=a.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,t);t.target=null}}}const In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Rv=1234567;const $r=Math.PI/180,Al=180/Math.PI;function Ra(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(In[r&255]+In[r>>8&255]+In[r>>16&255]+In[r>>24&255]+"-"+In[t&255]+In[t>>8&255]+"-"+In[t>>16&15|64]+In[t>>24&255]+"-"+In[n&63|128]+In[n>>8&255]+"-"+In[n>>16&255]+In[n>>24&255]+In[a&255]+In[a>>8&255]+In[a>>16&255]+In[a>>24&255]).toLowerCase()}function Re(r,t,n){return Math.max(t,Math.min(n,r))}function ym(r,t){return(r%t+t)%t}function V1(r,t,n,a,o){return a+(r-t)*(o-a)/(n-t)}function k1(r,t,n){return r!==t?(n-r)/(t-r):0}function Sl(r,t,n){return(1-n)*r+n*t}function X1(r,t,n,a){return Sl(r,t,1-Math.exp(-n*a))}function W1(r,t=1){return t-Math.abs(ym(r,t*2)-t)}function Y1(r,t,n){return r<=t?0:r>=n?1:(r=(r-t)/(n-t),r*r*(3-2*r))}function q1(r,t,n){return r<=t?0:r>=n?1:(r=(r-t)/(n-t),r*r*r*(r*(r*6-15)+10))}function j1(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Z1(r,t){return r+Math.random()*(t-r)}function K1(r){return r*(.5-Math.random())}function Q1(r){r!==void 0&&(Rv=r);let t=Rv+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function J1(r){return r*$r}function $1(r){return r*Al}function tE(r){return(r&r-1)===0&&r!==0}function eE(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function nE(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function iE(r,t,n,a,o){const c=Math.cos,u=Math.sin,f=c(n/2),p=u(n/2),d=c((t+a)/2),_=u((t+a)/2),g=c((t-a)/2),v=u((t-a)/2),y=c((a-t)/2),M=u((a-t)/2);switch(o){case"XYX":r.set(f*_,p*g,p*v,f*d);break;case"YZY":r.set(p*v,f*_,p*g,f*d);break;case"ZXZ":r.set(p*g,p*v,f*_,f*d);break;case"XZX":r.set(f*_,p*M,p*y,f*d);break;case"YXY":r.set(p*y,f*_,p*M,f*d);break;case"ZYZ":r.set(p*M,p*y,f*_,f*d);break;default:ce("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Bi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function qe(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const kn={DEG2RAD:$r,RAD2DEG:Al,generateUUID:Ra,clamp:Re,euclideanModulo:ym,mapLinear:V1,inverseLerp:k1,lerp:Sl,damp:X1,pingpong:W1,smoothstep:Y1,smootherstep:q1,randInt:j1,randFloat:Z1,randFloatSpread:K1,seededRandom:Q1,degToRad:J1,radToDeg:$1,isPowerOfTwo:tE,ceilPowerOfTwo:eE,floorPowerOfTwo:nE,setQuaternionFromProperEuler:iE,normalize:qe,denormalize:Bi};class de{constructor(t=0,n=0){de.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,o=t.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Re(this.x,t.x,n.x),this.y=Re(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Re(this.x,t,n),this.y=Re(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Re(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Re(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),o=Math.sin(n),c=this.x-t.x,u=this.y-t.y;return this.x=c*a-u*o+t.x,this.y=c*o+u*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ul{constructor(t=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=o}static slerpFlat(t,n,a,o,c,u,f){let p=a[o+0],d=a[o+1],_=a[o+2],g=a[o+3],v=c[u+0],y=c[u+1],M=c[u+2],b=c[u+3];if(f<=0){t[n+0]=p,t[n+1]=d,t[n+2]=_,t[n+3]=g;return}if(f>=1){t[n+0]=v,t[n+1]=y,t[n+2]=M,t[n+3]=b;return}if(g!==b||p!==v||d!==y||_!==M){let S=p*v+d*y+_*M+g*b;S<0&&(v=-v,y=-y,M=-M,b=-b,S=-S);let x=1-f;if(S<.9995){const R=Math.acos(S),w=Math.sin(R);x=Math.sin(x*R)/w,f=Math.sin(f*R)/w,p=p*x+v*f,d=d*x+y*f,_=_*x+M*f,g=g*x+b*f}else{p=p*x+v*f,d=d*x+y*f,_=_*x+M*f,g=g*x+b*f;const R=1/Math.sqrt(p*p+d*d+_*_+g*g);p*=R,d*=R,_*=R,g*=R}}t[n]=p,t[n+1]=d,t[n+2]=_,t[n+3]=g}static multiplyQuaternionsFlat(t,n,a,o,c,u){const f=a[o],p=a[o+1],d=a[o+2],_=a[o+3],g=c[u],v=c[u+1],y=c[u+2],M=c[u+3];return t[n]=f*M+_*g+p*y-d*v,t[n+1]=p*M+_*v+d*g-f*y,t[n+2]=d*M+_*y+f*v-p*g,t[n+3]=_*M-f*g-p*v-d*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,o){return this._x=t,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,o=t._y,c=t._z,u=t._order,f=Math.cos,p=Math.sin,d=f(a/2),_=f(o/2),g=f(c/2),v=p(a/2),y=p(o/2),M=p(c/2);switch(u){case"XYZ":this._x=v*_*g+d*y*M,this._y=d*y*g-v*_*M,this._z=d*_*M+v*y*g,this._w=d*_*g-v*y*M;break;case"YXZ":this._x=v*_*g+d*y*M,this._y=d*y*g-v*_*M,this._z=d*_*M-v*y*g,this._w=d*_*g+v*y*M;break;case"ZXY":this._x=v*_*g-d*y*M,this._y=d*y*g+v*_*M,this._z=d*_*M+v*y*g,this._w=d*_*g-v*y*M;break;case"ZYX":this._x=v*_*g-d*y*M,this._y=d*y*g+v*_*M,this._z=d*_*M-v*y*g,this._w=d*_*g+v*y*M;break;case"YZX":this._x=v*_*g+d*y*M,this._y=d*y*g+v*_*M,this._z=d*_*M-v*y*g,this._w=d*_*g-v*y*M;break;case"XZY":this._x=v*_*g-d*y*M,this._y=d*y*g-v*_*M,this._z=d*_*M+v*y*g,this._w=d*_*g+v*y*M;break;default:ce("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,o=Math.sin(a);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],o=n[4],c=n[8],u=n[1],f=n[5],p=n[9],d=n[2],_=n[6],g=n[10],v=a+f+g;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(_-p)*y,this._y=(c-d)*y,this._z=(u-o)*y}else if(a>f&&a>g){const y=2*Math.sqrt(1+a-f-g);this._w=(_-p)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(c+d)/y}else if(f>g){const y=2*Math.sqrt(1+f-a-g);this._w=(c-d)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(p+_)/y}else{const y=2*Math.sqrt(1+g-a-f);this._w=(u-o)/y,this._x=(c+d)/y,this._y=(p+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,o=t._y,c=t._z,u=t._w,f=n._x,p=n._y,d=n._z,_=n._w;return this._x=a*_+u*f+o*d-c*p,this._y=o*_+u*p+c*f-a*d,this._z=c*_+u*d+a*p-o*f,this._w=u*_-a*f-o*p-c*d,this._onChangeCallback(),this}slerp(t,n){if(n<=0)return this;if(n>=1)return this.copy(t);let a=t._x,o=t._y,c=t._z,u=t._w,f=this.dot(t);f<0&&(a=-a,o=-o,c=-c,u=-u,f=-f);let p=1-n;if(f<.9995){const d=Math.acos(f),_=Math.sin(d);p=Math.sin(p*d)/_,n=Math.sin(n*d)/_,this._x=this._x*p+a*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this._onChangeCallback()}else this._x=this._x*p+a*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this.normalize();return this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(t),o*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(t=0,n=0,a=0){Z.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(wv.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(wv.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[3]*a+c[6]*o,this.y=c[1]*n+c[4]*a+c[7]*o,this.z=c[2]*n+c[5]*a+c[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=t.elements,u=1/(c[3]*n+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*o+c[14])*u,this}applyQuaternion(t){const n=this.x,a=this.y,o=this.z,c=t.x,u=t.y,f=t.z,p=t.w,d=2*(u*o-f*a),_=2*(f*n-c*o),g=2*(c*a-u*n);return this.x=n+p*d+u*g-f*_,this.y=a+p*_+f*d-c*g,this.z=o+p*g+c*_-u*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*o,this.y=c[1]*n+c[5]*a+c[9]*o,this.z=c[2]*n+c[6]*a+c[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Re(this.x,t.x,n.x),this.y=Re(this.y,t.y,n.y),this.z=Re(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Re(this.x,t,n),this.y=Re(this.y,t,n),this.z=Re(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Re(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,o=t.y,c=t.z,u=n.x,f=n.y,p=n.z;return this.x=o*p-c*f,this.y=c*u-a*p,this.z=a*f-o*u,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return md.copy(this).projectOnVector(t),this.sub(md)}reflect(t){return this.sub(md.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Re(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,o=this.z-t.z;return n*n+a*a+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const o=Math.sin(n)*t;return this.x=o*Math.sin(a),this.y=Math.cos(n)*t,this.z=o*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const md=new Z,wv=new Ul;class xe{constructor(t,n,a,o,c,u,f,p,d){xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,u,f,p,d)}set(t,n,a,o,c,u,f,p,d){const _=this.elements;return _[0]=t,_[1]=o,_[2]=f,_[3]=n,_[4]=c,_[5]=p,_[6]=a,_[7]=u,_[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,u=a[0],f=a[3],p=a[6],d=a[1],_=a[4],g=a[7],v=a[2],y=a[5],M=a[8],b=o[0],S=o[3],x=o[6],R=o[1],w=o[4],A=o[7],N=o[2],O=o[5],z=o[8];return c[0]=u*b+f*R+p*N,c[3]=u*S+f*w+p*O,c[6]=u*x+f*A+p*z,c[1]=d*b+_*R+g*N,c[4]=d*S+_*w+g*O,c[7]=d*x+_*A+g*z,c[2]=v*b+y*R+M*N,c[5]=v*S+y*w+M*O,c[8]=v*x+y*A+M*z,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],f=t[5],p=t[6],d=t[7],_=t[8];return n*u*_-n*f*d-a*c*_+a*f*p+o*c*d-o*u*p}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],f=t[5],p=t[6],d=t[7],_=t[8],g=_*u-f*d,v=f*p-_*c,y=d*c-u*p,M=n*g+a*v+o*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/M;return t[0]=g*b,t[1]=(o*d-_*a)*b,t[2]=(f*a-o*u)*b,t[3]=v*b,t[4]=(_*n-o*p)*b,t[5]=(o*c-f*n)*b,t[6]=y*b,t[7]=(a*p-d*n)*b,t[8]=(u*n-a*c)*b,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,o,c,u,f){const p=Math.cos(c),d=Math.sin(c);return this.set(a*p,a*d,-a*(p*u+d*f)+u+t,-o*d,o*p,-o*(-d*u+p*f)+f+n,0,0,1),this}scale(t,n){return this.premultiply(gd.makeScale(t,n)),this}rotate(t){return this.premultiply(gd.makeRotation(-t)),this}translate(t,n){return this.premultiply(gd.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const gd=new xe,Cv=new xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dv=new xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function aE(){const r={enabled:!0,workingColorSpace:so,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Ye&&(o.r=wa(o.r),o.g=wa(o.g),o.b=wa(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ye&&(o.r=to(o.r),o.g=to(o.g),o.b=to(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===ps?Bu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return Tl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return Tl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[so]:{primaries:t,whitePoint:a,transfer:Bu,toXYZ:Cv,fromXYZ:Dv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:t,whitePoint:a,transfer:Ye,toXYZ:Cv,fromXYZ:Dv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),r}const Le=aE();function wa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function to(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Lr;class sE{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{Lr===void 0&&(Lr=Iu("canvas")),Lr.width=t.width,Lr.height=t.height;const o=Lr.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),a=Lr}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Iu("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const o=a.getImageData(0,0,t.width,t.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=wa(c[u]/255)*255;return a.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(wa(n[a]/255)*255):n[a]=wa(n[a]);return{data:n,width:t.width,height:t.height}}else return ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let rE=0;class Sm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rE++}),this.uuid=Ra(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?c.push(_d(o[u].image)):c.push(_d(o[u]))}else c=_d(o);a.url=c}return n||(t.images[this.uuid]=a),a}}function _d(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?sE.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ce("Texture: Unable to serialize Texture."),{})}let oE=0;const vd=new Z;class Xn extends uo{constructor(t=Xn.DEFAULT_IMAGE,n=Xn.DEFAULT_MAPPING,a=ba,o=ba,c=Vn,u=Xs,f=Fi,p=di,d=Xn.DEFAULT_ANISOTROPY,_=ps){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oE++}),this.uuid=Ra(),this.name="",this.source=new Sm(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=d,this.format=f,this.internalFormat=null,this.type=p,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(vd).x}get height(){return this.source.getSize(vd).y}get depth(){return this.source.getSize(vd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){ce(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ce(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Qx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case pp:t.x=t.x-Math.floor(t.x);break;case ba:t.x=t.x<0?0:1;break;case mp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case pp:t.y=t.y-Math.floor(t.y);break;case ba:t.y=t.y<0?0:1;break;case mp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=Qx;Xn.DEFAULT_ANISOTROPY=1;class un{constructor(t=0,n=0,a=0,o=1){un.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,o){return this.x=t,this.y=n,this.z=a,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=this.w,u=t.elements;return this.x=u[0]*n+u[4]*a+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*o+u[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,o,c;const p=t.elements,d=p[0],_=p[4],g=p[8],v=p[1],y=p[5],M=p[9],b=p[2],S=p[6],x=p[10];if(Math.abs(_-v)<.01&&Math.abs(g-b)<.01&&Math.abs(M-S)<.01){if(Math.abs(_+v)<.1&&Math.abs(g+b)<.1&&Math.abs(M+S)<.1&&Math.abs(d+y+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const w=(d+1)/2,A=(y+1)/2,N=(x+1)/2,O=(_+v)/4,z=(g+b)/4,V=(M+S)/4;return w>A&&w>N?w<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(w),o=O/a,c=z/a):A>N?A<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(A),a=O/o,c=V/o):N<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(N),a=z/c,o=V/c),this.set(a,o,c,n),this}let R=Math.sqrt((S-M)*(S-M)+(g-b)*(g-b)+(v-_)*(v-_));return Math.abs(R)<.001&&(R=1),this.x=(S-M)/R,this.y=(g-b)/R,this.z=(v-_)/R,this.w=Math.acos((d+y+x-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Re(this.x,t.x,n.x),this.y=Re(this.y,t.y,n.y),this.z=Re(this.z,t.z,n.z),this.w=Re(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Re(this.x,t,n),this.y=Re(this.y,t,n),this.z=Re(this.z,t,n),this.w=Re(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Re(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lE extends uo{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new un(0,0,t,n),this.scissorTest=!1,this.viewport=new un(0,0,t,n);const o={width:t,height:n,depth:a.depth},c=new Xn(o);this.textures=[];const u=a.count;for(let f=0;f<u;f++)this.textures[f]=c.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const n={minFilter:Vn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=a,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},t.textures[n].image);this.textures[n].source=new Sm(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ji extends lE{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class oy extends Xn{constructor(t=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=ba,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class cE extends Xn{constructor(t=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=ba,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ll{constructor(t=new Z(1/0,1/0,1/0),n=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(Ni.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(Ni.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=Ni.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let u=0,f=c.count;u<f;u++)t.isMesh===!0?t.getVertexPosition(u,Ni):Ni.fromBufferAttribute(c,u),Ni.applyMatrix4(t.matrixWorld),this.expandByPoint(Ni);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Zc.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Zc.copy(a.boundingBox)),Zc.applyMatrix4(t.matrixWorld),this.union(Zc)}const o=t.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ni),Ni.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ol),Kc.subVectors(this.max,ol),Nr.subVectors(t.a,ol),Or.subVectors(t.b,ol),zr.subVectors(t.c,ol),ls.subVectors(Or,Nr),cs.subVectors(zr,Or),Os.subVectors(Nr,zr);let n=[0,-ls.z,ls.y,0,-cs.z,cs.y,0,-Os.z,Os.y,ls.z,0,-ls.x,cs.z,0,-cs.x,Os.z,0,-Os.x,-ls.y,ls.x,0,-cs.y,cs.x,0,-Os.y,Os.x,0];return!xd(n,Nr,Or,zr,Kc)||(n=[1,0,0,0,1,0,0,0,1],!xd(n,Nr,Or,zr,Kc))?!1:(Qc.crossVectors(ls,cs),n=[Qc.x,Qc.y,Qc.z],xd(n,Nr,Or,zr,Kc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ni).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ni).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const xa=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Ni=new Z,Zc=new Ll,Nr=new Z,Or=new Z,zr=new Z,ls=new Z,cs=new Z,Os=new Z,ol=new Z,Kc=new Z,Qc=new Z,zs=new Z;function xd(r,t,n,a,o){for(let c=0,u=r.length-3;c<=u;c+=3){zs.fromArray(r,c);const f=o.x*Math.abs(zs.x)+o.y*Math.abs(zs.y)+o.z*Math.abs(zs.z),p=t.dot(zs),d=n.dot(zs),_=a.dot(zs);if(Math.max(-Math.max(p,d,_),Math.min(p,d,_))>f)return!1}return!0}const uE=new Ll,ll=new Z,yd=new Z;class Nl{constructor(t=new Z,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):uE.setFromPoints(t).getCenter(a);let o=0;for(let c=0,u=t.length;c<u;c++)o=Math.max(o,a.distanceToSquared(t[c]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ll.subVectors(t,this.center);const n=ll.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(ll,o/a),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(yd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ll.copy(t.center).add(yd)),this.expandByPoint(ll.copy(t.center).sub(yd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ya=new Z,Sd=new Z,Jc=new Z,us=new Z,Md=new Z,$c=new Z,Ed=new Z;class Mm{constructor(t=new Z,n=new Z(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ya)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=ya.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(ya.copy(this.origin).addScaledVector(this.direction,n),ya.distanceToSquared(t))}distanceSqToSegment(t,n,a,o){Sd.copy(t).add(n).multiplyScalar(.5),Jc.copy(n).sub(t).normalize(),us.copy(this.origin).sub(Sd);const c=t.distanceTo(n)*.5,u=-this.direction.dot(Jc),f=us.dot(this.direction),p=-us.dot(Jc),d=us.lengthSq(),_=Math.abs(1-u*u);let g,v,y,M;if(_>0)if(g=u*p-f,v=u*f-p,M=c*_,g>=0)if(v>=-M)if(v<=M){const b=1/_;g*=b,v*=b,y=g*(g+u*v+2*f)+v*(u*g+v+2*p)+d}else v=c,g=Math.max(0,-(u*v+f)),y=-g*g+v*(v+2*p)+d;else v=-c,g=Math.max(0,-(u*v+f)),y=-g*g+v*(v+2*p)+d;else v<=-M?(g=Math.max(0,-(-u*c+f)),v=g>0?-c:Math.min(Math.max(-c,-p),c),y=-g*g+v*(v+2*p)+d):v<=M?(g=0,v=Math.min(Math.max(-c,-p),c),y=v*(v+2*p)+d):(g=Math.max(0,-(u*c+f)),v=g>0?c:Math.min(Math.max(-c,-p),c),y=-g*g+v*(v+2*p)+d);else v=u>0?-c:c,g=Math.max(0,-(u*v+f)),y=-g*g+v*(v+2*p)+d;return a&&a.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(Sd).addScaledVector(Jc,v),y}intersectSphere(t,n){ya.subVectors(t.center,this.origin);const a=ya.dot(this.direction),o=ya.dot(ya)-a*a,c=t.radius*t.radius;if(o>c)return null;const u=Math.sqrt(c-o),f=a-u,p=a+u;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,o,c,u,f,p;const d=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,v=this.origin;return d>=0?(a=(t.min.x-v.x)*d,o=(t.max.x-v.x)*d):(a=(t.max.x-v.x)*d,o=(t.min.x-v.x)*d),_>=0?(c=(t.min.y-v.y)*_,u=(t.max.y-v.y)*_):(c=(t.max.y-v.y)*_,u=(t.min.y-v.y)*_),a>u||c>o||((c>a||isNaN(a))&&(a=c),(u<o||isNaN(o))&&(o=u),g>=0?(f=(t.min.z-v.z)*g,p=(t.max.z-v.z)*g):(f=(t.max.z-v.z)*g,p=(t.min.z-v.z)*g),a>p||f>o)||((f>a||a!==a)&&(a=f),(p<o||o!==o)&&(o=p),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(t){return this.intersectBox(t,ya)!==null}intersectTriangle(t,n,a,o,c){Md.subVectors(n,t),$c.subVectors(a,t),Ed.crossVectors(Md,$c);let u=this.direction.dot(Ed),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;us.subVectors(this.origin,t);const p=f*this.direction.dot($c.crossVectors(us,$c));if(p<0)return null;const d=f*this.direction.dot(Md.cross(us));if(d<0||p+d>u)return null;const _=-f*us.dot(Ed);return _<0?null:this.at(_/u,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nn{constructor(t,n,a,o,c,u,f,p,d,_,g,v,y,M,b,S){nn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,u,f,p,d,_,g,v,y,M,b,S)}set(t,n,a,o,c,u,f,p,d,_,g,v,y,M,b,S){const x=this.elements;return x[0]=t,x[4]=n,x[8]=a,x[12]=o,x[1]=c,x[5]=u,x[9]=f,x[13]=p,x[2]=d,x[6]=_,x[10]=g,x[14]=v,x[3]=y,x[7]=M,x[11]=b,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nn().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,a=t.elements,o=1/Pr.setFromMatrixColumn(t,0).length(),c=1/Pr.setFromMatrixColumn(t,1).length(),u=1/Pr.setFromMatrixColumn(t,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,o=t.y,c=t.z,u=Math.cos(a),f=Math.sin(a),p=Math.cos(o),d=Math.sin(o),_=Math.cos(c),g=Math.sin(c);if(t.order==="XYZ"){const v=u*_,y=u*g,M=f*_,b=f*g;n[0]=p*_,n[4]=-p*g,n[8]=d,n[1]=y+M*d,n[5]=v-b*d,n[9]=-f*p,n[2]=b-v*d,n[6]=M+y*d,n[10]=u*p}else if(t.order==="YXZ"){const v=p*_,y=p*g,M=d*_,b=d*g;n[0]=v+b*f,n[4]=M*f-y,n[8]=u*d,n[1]=u*g,n[5]=u*_,n[9]=-f,n[2]=y*f-M,n[6]=b+v*f,n[10]=u*p}else if(t.order==="ZXY"){const v=p*_,y=p*g,M=d*_,b=d*g;n[0]=v-b*f,n[4]=-u*g,n[8]=M+y*f,n[1]=y+M*f,n[5]=u*_,n[9]=b-v*f,n[2]=-u*d,n[6]=f,n[10]=u*p}else if(t.order==="ZYX"){const v=u*_,y=u*g,M=f*_,b=f*g;n[0]=p*_,n[4]=M*d-y,n[8]=v*d+b,n[1]=p*g,n[5]=b*d+v,n[9]=y*d-M,n[2]=-d,n[6]=f*p,n[10]=u*p}else if(t.order==="YZX"){const v=u*p,y=u*d,M=f*p,b=f*d;n[0]=p*_,n[4]=b-v*g,n[8]=M*g+y,n[1]=g,n[5]=u*_,n[9]=-f*_,n[2]=-d*_,n[6]=y*g+M,n[10]=v-b*g}else if(t.order==="XZY"){const v=u*p,y=u*d,M=f*p,b=f*d;n[0]=p*_,n[4]=-g,n[8]=d*_,n[1]=v*g+b,n[5]=u*_,n[9]=y*g-M,n[2]=M*g-y,n[6]=f*_,n[10]=b*g+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fE,t,hE)}lookAt(t,n,a){const o=this.elements;return ci.subVectors(t,n),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),fs.crossVectors(a,ci),fs.lengthSq()===0&&(Math.abs(a.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),fs.crossVectors(a,ci)),fs.normalize(),tu.crossVectors(ci,fs),o[0]=fs.x,o[4]=tu.x,o[8]=ci.x,o[1]=fs.y,o[5]=tu.y,o[9]=ci.y,o[2]=fs.z,o[6]=tu.z,o[10]=ci.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,u=a[0],f=a[4],p=a[8],d=a[12],_=a[1],g=a[5],v=a[9],y=a[13],M=a[2],b=a[6],S=a[10],x=a[14],R=a[3],w=a[7],A=a[11],N=a[15],O=o[0],z=o[4],V=o[8],T=o[12],D=o[1],F=o[5],H=o[9],j=o[13],et=o[2],rt=o[6],B=o[10],k=o[14],q=o[3],ft=o[7],vt=o[11],I=o[15];return c[0]=u*O+f*D+p*et+d*q,c[4]=u*z+f*F+p*rt+d*ft,c[8]=u*V+f*H+p*B+d*vt,c[12]=u*T+f*j+p*k+d*I,c[1]=_*O+g*D+v*et+y*q,c[5]=_*z+g*F+v*rt+y*ft,c[9]=_*V+g*H+v*B+y*vt,c[13]=_*T+g*j+v*k+y*I,c[2]=M*O+b*D+S*et+x*q,c[6]=M*z+b*F+S*rt+x*ft,c[10]=M*V+b*H+S*B+x*vt,c[14]=M*T+b*j+S*k+x*I,c[3]=R*O+w*D+A*et+N*q,c[7]=R*z+w*F+A*rt+N*ft,c[11]=R*V+w*H+A*B+N*vt,c[15]=R*T+w*j+A*k+N*I,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],o=t[8],c=t[12],u=t[1],f=t[5],p=t[9],d=t[13],_=t[2],g=t[6],v=t[10],y=t[14],M=t[3],b=t[7],S=t[11],x=t[15],R=p*y-d*v,w=f*y-d*g,A=f*v-p*g,N=u*y-d*_,O=u*v-p*_,z=u*g-f*_;return n*(b*R-S*w+x*A)-a*(M*R-S*N+x*O)+o*(M*w-b*N+x*z)-c*(M*A-b*O+S*z)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],f=t[5],p=t[6],d=t[7],_=t[8],g=t[9],v=t[10],y=t[11],M=t[12],b=t[13],S=t[14],x=t[15],R=g*S*d-b*v*d+b*p*y-f*S*y-g*p*x+f*v*x,w=M*v*d-_*S*d-M*p*y+u*S*y+_*p*x-u*v*x,A=_*b*d-M*g*d+M*f*y-u*b*y-_*f*x+u*g*x,N=M*g*p-_*b*p-M*f*v+u*b*v+_*f*S-u*g*S,O=n*R+a*w+o*A+c*N;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/O;return t[0]=R*z,t[1]=(b*v*c-g*S*c-b*o*y+a*S*y+g*o*x-a*v*x)*z,t[2]=(f*S*c-b*p*c+b*o*d-a*S*d-f*o*x+a*p*x)*z,t[3]=(g*p*c-f*v*c-g*o*d+a*v*d+f*o*y-a*p*y)*z,t[4]=w*z,t[5]=(_*S*c-M*v*c+M*o*y-n*S*y-_*o*x+n*v*x)*z,t[6]=(M*p*c-u*S*c-M*o*d+n*S*d+u*o*x-n*p*x)*z,t[7]=(u*v*c-_*p*c+_*o*d-n*v*d-u*o*y+n*p*y)*z,t[8]=A*z,t[9]=(M*g*c-_*b*c-M*a*y+n*b*y+_*a*x-n*g*x)*z,t[10]=(u*b*c-M*f*c+M*a*d-n*b*d-u*a*x+n*f*x)*z,t[11]=(_*f*c-u*g*c-_*a*d+n*g*d+u*a*y-n*f*y)*z,t[12]=N*z,t[13]=(_*b*o-M*g*o+M*a*v-n*b*v-_*a*S+n*g*S)*z,t[14]=(M*f*o-u*b*o-M*a*p+n*b*p+u*a*S-n*f*S)*z,t[15]=(u*g*o-_*f*o+_*a*p-n*g*p-u*a*v+n*f*v)*z,this}scale(t){const n=this.elements,a=t.x,o=t.y,c=t.z;return n[0]*=a,n[4]*=o,n[8]*=c,n[1]*=a,n[5]*=o,n[9]*=c,n[2]*=a,n[6]*=o,n[10]*=c,n[3]*=a,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),o=Math.sin(n),c=1-a,u=t.x,f=t.y,p=t.z,d=c*u,_=c*f;return this.set(d*u+a,d*f-o*p,d*p+o*f,0,d*f+o*p,_*f+a,_*p-o*u,0,d*p-o*f,_*p+o*u,c*p*p+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,o,c,u){return this.set(1,a,c,0,t,1,u,0,n,o,1,0,0,0,0,1),this}compose(t,n,a){const o=this.elements,c=n._x,u=n._y,f=n._z,p=n._w,d=c+c,_=u+u,g=f+f,v=c*d,y=c*_,M=c*g,b=u*_,S=u*g,x=f*g,R=p*d,w=p*_,A=p*g,N=a.x,O=a.y,z=a.z;return o[0]=(1-(b+x))*N,o[1]=(y+A)*N,o[2]=(M-w)*N,o[3]=0,o[4]=(y-A)*O,o[5]=(1-(v+x))*O,o[6]=(S+R)*O,o[7]=0,o[8]=(M+w)*z,o[9]=(S-R)*z,o[10]=(1-(v+b))*z,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,a){const o=this.elements;if(t.x=o[12],t.y=o[13],t.z=o[14],this.determinant()===0)return a.set(1,1,1),n.identity(),this;let c=Pr.set(o[0],o[1],o[2]).length();const u=Pr.set(o[4],o[5],o[6]).length(),f=Pr.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),Oi.copy(this);const d=1/c,_=1/u,g=1/f;return Oi.elements[0]*=d,Oi.elements[1]*=d,Oi.elements[2]*=d,Oi.elements[4]*=_,Oi.elements[5]*=_,Oi.elements[6]*=_,Oi.elements[8]*=g,Oi.elements[9]*=g,Oi.elements[10]*=g,n.setFromRotationMatrix(Oi),a.x=c,a.y=u,a.z=f,this}makePerspective(t,n,a,o,c,u,f=Ki,p=!1){const d=this.elements,_=2*c/(n-t),g=2*c/(a-o),v=(n+t)/(n-t),y=(a+o)/(a-o);let M,b;if(p)M=c/(u-c),b=u*c/(u-c);else if(f===Ki)M=-(u+c)/(u-c),b=-2*u*c/(u-c);else if(f===Fu)M=-u/(u-c),b=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=_,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=g,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=M,d[14]=b,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,n,a,o,c,u,f=Ki,p=!1){const d=this.elements,_=2/(n-t),g=2/(a-o),v=-(n+t)/(n-t),y=-(a+o)/(a-o);let M,b;if(p)M=1/(u-c),b=u/(u-c);else if(f===Ki)M=-2/(u-c),b=-(u+c)/(u-c);else if(f===Fu)M=-1/(u-c),b=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=_,d[4]=0,d[8]=0,d[12]=v,d[1]=0,d[5]=g,d[9]=0,d[13]=y,d[2]=0,d[6]=0,d[10]=M,d[14]=b,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const Pr=new Z,Oi=new nn,fE=new Z(0,0,0),hE=new Z(1,1,1),fs=new Z,tu=new Z,ci=new Z,Uv=new nn,Lv=new Ul;class ta{constructor(t=0,n=0,a=0,o=ta.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,o=this._order){return this._x=t,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const o=t.elements,c=o[0],u=o[4],f=o[8],p=o[1],d=o[5],_=o[9],g=o[2],v=o[6],y=o[10];switch(n){case"XYZ":this._y=Math.asin(Re(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Re(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Re(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(Re(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,d),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-Re(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-_,y),this._y=0);break;default:ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return Uv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Uv,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Lv.setFromEuler(this),this.setFromQuaternion(Lv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ta.DEFAULT_ORDER="XYZ";class ly{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let dE=0;const Nv=new Z,Br=new Ul,Sa=new nn,eu=new Z,cl=new Z,pE=new Z,mE=new Ul,Ov=new Z(1,0,0),zv=new Z(0,1,0),Pv=new Z(0,0,1),Bv={type:"added"},gE={type:"removed"},Fr={type:"childadded",child:null},bd={type:"childremoved",child:null};class xn extends uo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dE++}),this.uuid=Ra(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xn.DEFAULT_UP.clone();const t=new Z,n=new ta,a=new Ul,o=new Z(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new nn},normalMatrix:{value:new xe}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ly,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Br.setFromAxisAngle(t,n),this.quaternion.multiply(Br),this}rotateOnWorldAxis(t,n){return Br.setFromAxisAngle(t,n),this.quaternion.premultiply(Br),this}rotateX(t){return this.rotateOnAxis(Ov,t)}rotateY(t){return this.rotateOnAxis(zv,t)}rotateZ(t){return this.rotateOnAxis(Pv,t)}translateOnAxis(t,n){return Nv.copy(t).applyQuaternion(this.quaternion),this.position.add(Nv.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Ov,t)}translateY(t){return this.translateOnAxis(zv,t)}translateZ(t){return this.translateOnAxis(Pv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Sa.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?eu.copy(t):eu.set(t,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),cl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sa.lookAt(cl,eu,this.up):Sa.lookAt(eu,cl,this.up),this.quaternion.setFromRotationMatrix(Sa),o&&(Sa.extractRotation(o.matrixWorld),Br.setFromRotationMatrix(Sa),this.quaternion.premultiply(Br.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Ue("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Bv),Fr.child=t,this.dispatchEvent(Fr),Fr.child=null):Ue("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(gE),bd.child=t,this.dispatchEvent(bd),bd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Sa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Sa.multiply(t.parent.matrixWorld)),t.applyMatrix4(Sa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Bv),Fr.child=t,this.dispatchEvent(Fr),Fr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const u=this.children[a].getObjectByProperty(t,n);if(u!==void 0)return u}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cl,t,pE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cl,mE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let d=0,_=p.length;d<_;d++){const g=p[d];c(t.shapes,g)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,d=this.material.length;p<d;p++)f.push(c(t.materials,this.material[p]));o.material=f}else o.material=c(t.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];o.animations.push(c(t.animations,p))}}if(n){const f=u(t.geometries),p=u(t.materials),d=u(t.textures),_=u(t.images),g=u(t.shapes),v=u(t.skeletons),y=u(t.animations),M=u(t.nodes);f.length>0&&(a.geometries=f),p.length>0&&(a.materials=p),d.length>0&&(a.textures=d),_.length>0&&(a.images=_),g.length>0&&(a.shapes=g),v.length>0&&(a.skeletons=v),y.length>0&&(a.animations=y),M.length>0&&(a.nodes=M)}return a.object=o,a;function u(f){const p=[];for(const d in f){const _=f[d];delete _.metadata,p.push(_)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const o=t.children[a];this.add(o.clone())}return this}}xn.DEFAULT_UP=new Z(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zi=new Z,Ma=new Z,Td=new Z,Ea=new Z,Ir=new Z,Hr=new Z,Fv=new Z,Ad=new Z,Rd=new Z,wd=new Z,Cd=new un,Dd=new un,Ud=new un;class pi{constructor(t=new Z,n=new Z,a=new Z){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,o){o.subVectors(a,n),zi.subVectors(t,n),o.cross(zi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(t,n,a,o,c){zi.subVectors(o,n),Ma.subVectors(a,n),Td.subVectors(t,n);const u=zi.dot(zi),f=zi.dot(Ma),p=zi.dot(Td),d=Ma.dot(Ma),_=Ma.dot(Td),g=u*d-f*f;if(g===0)return c.set(0,0,0),null;const v=1/g,y=(d*p-f*_)*v,M=(u*_-f*p)*v;return c.set(1-y-M,M,y)}static containsPoint(t,n,a,o){return this.getBarycoord(t,n,a,o,Ea)===null?!1:Ea.x>=0&&Ea.y>=0&&Ea.x+Ea.y<=1}static getInterpolation(t,n,a,o,c,u,f,p){return this.getBarycoord(t,n,a,o,Ea)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Ea.x),p.addScaledVector(u,Ea.y),p.addScaledVector(f,Ea.z),p)}static getInterpolatedAttribute(t,n,a,o,c,u){return Cd.setScalar(0),Dd.setScalar(0),Ud.setScalar(0),Cd.fromBufferAttribute(t,n),Dd.fromBufferAttribute(t,a),Ud.fromBufferAttribute(t,o),u.setScalar(0),u.addScaledVector(Cd,c.x),u.addScaledVector(Dd,c.y),u.addScaledVector(Ud,c.z),u}static isFrontFacing(t,n,a,o){return zi.subVectors(a,n),Ma.subVectors(t,n),zi.cross(Ma).dot(o)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,o){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,a,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return zi.subVectors(this.c,this.b),Ma.subVectors(this.a,this.b),zi.cross(Ma).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return pi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,o,c){return pi.getInterpolation(t,this.a,this.b,this.c,n,a,o,c)}containsPoint(t){return pi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,o=this.b,c=this.c;let u,f;Ir.subVectors(o,a),Hr.subVectors(c,a),Ad.subVectors(t,a);const p=Ir.dot(Ad),d=Hr.dot(Ad);if(p<=0&&d<=0)return n.copy(a);Rd.subVectors(t,o);const _=Ir.dot(Rd),g=Hr.dot(Rd);if(_>=0&&g<=_)return n.copy(o);const v=p*g-_*d;if(v<=0&&p>=0&&_<=0)return u=p/(p-_),n.copy(a).addScaledVector(Ir,u);wd.subVectors(t,c);const y=Ir.dot(wd),M=Hr.dot(wd);if(M>=0&&y<=M)return n.copy(c);const b=y*d-p*M;if(b<=0&&d>=0&&M<=0)return f=d/(d-M),n.copy(a).addScaledVector(Hr,f);const S=_*M-y*g;if(S<=0&&g-_>=0&&y-M>=0)return Fv.subVectors(c,o),f=(g-_)/(g-_+(y-M)),n.copy(o).addScaledVector(Fv,f);const x=1/(S+b+v);return u=b*x,f=v*x,n.copy(a).addScaledVector(Ir,u).addScaledVector(Hr,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const cy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hs={h:0,s:0,l:0},nu={h:0,s:0,l:0};function Ld(r,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(t-r)*6*n:n<1/2?t:n<2/3?r+(t-r)*6*(2/3-n):r}class ie{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=fi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.colorSpaceToWorking(this,n),this}setRGB(t,n,a,o=Le.workingColorSpace){return this.r=t,this.g=n,this.b=a,Le.colorSpaceToWorking(this,o),this}setHSL(t,n,a,o=Le.workingColorSpace){if(t=ym(t,1),n=Re(n,0,1),a=Re(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=Ld(u,c,t+1/3),this.g=Ld(u,c,t),this.b=Ld(u,c,t-1/3)}return Le.colorSpaceToWorking(this,o),this}setStyle(t,n=fi){function a(c){c!==void 0&&parseFloat(c)<1&&ce("Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:ce("Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);ce("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=fi){const a=cy[t.toLowerCase()];return a!==void 0?this.setHex(a,n):ce("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=wa(t.r),this.g=wa(t.g),this.b=wa(t.b),this}copyLinearToSRGB(t){return this.r=to(t.r),this.g=to(t.g),this.b=to(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fi){return Le.workingToColorSpace(Hn.copy(this),t),Math.round(Re(Hn.r*255,0,255))*65536+Math.round(Re(Hn.g*255,0,255))*256+Math.round(Re(Hn.b*255,0,255))}getHexString(t=fi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Le.workingColorSpace){Le.workingToColorSpace(Hn.copy(this),n);const a=Hn.r,o=Hn.g,c=Hn.b,u=Math.max(a,o,c),f=Math.min(a,o,c);let p,d;const _=(f+u)/2;if(f===u)p=0,d=0;else{const g=u-f;switch(d=_<=.5?g/(u+f):g/(2-u-f),u){case a:p=(o-c)/g+(o<c?6:0);break;case o:p=(c-a)/g+2;break;case c:p=(a-o)/g+4;break}p/=6}return t.h=p,t.s=d,t.l=_,t}getRGB(t,n=Le.workingColorSpace){return Le.workingToColorSpace(Hn.copy(this),n),t.r=Hn.r,t.g=Hn.g,t.b=Hn.b,t}getStyle(t=fi){Le.workingToColorSpace(Hn.copy(this),t);const n=Hn.r,a=Hn.g,o=Hn.b;return t!==fi?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(t,n,a){return this.getHSL(hs),this.setHSL(hs.h+t,hs.s+n,hs.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(hs),t.getHSL(nu);const a=Sl(hs.h,nu.h,n),o=Sl(hs.s,nu.s,n),c=Sl(hs.l,nu.l,n);return this.setHSL(a,o,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,o=this.b,c=t.elements;return this.r=c[0]*n+c[3]*a+c[6]*o,this.g=c[1]*n+c[4]*a+c[7]*o,this.b=c[2]*n+c[5]*a+c[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Hn=new ie;ie.NAMES=cy;let _E=0;class za extends uo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_E++}),this.uuid=Ra(),this.name="",this.type="Material",this.blending=Jr,this.side=Ua,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ip,this.blendDst=ap,this.blendEquation=Gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ie(0,0,0),this.blendAlpha=0,this.depthFunc=no,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ur,this.stencilZFail=Ur,this.stencilZPass=Ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){ce(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ce(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Jr&&(a.blending=this.blending),this.side!==Ua&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==ip&&(a.blendSrc=this.blendSrc),this.blendDst!==ap&&(a.blendDst=this.blendDst),this.blendEquation!==Gs&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==no&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bv&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ur&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Ur&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Ur&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const u=[];for(const f in c){const p=c[f];delete p.metadata,u.push(p)}return u}if(n){const c=o(t.textures),u=o(t.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class uy extends za{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ta,this.combine=Xx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const vn=new Z,iu=new de;let vE=0;class Ii{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vE++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=jp,this.updateRanges=[],this.gpuType=Zi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[t+o]=n.array[a+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)iu.fromBufferAttribute(this,n),iu.applyMatrix3(t),this.setXY(n,iu.x,iu.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)vn.fromBufferAttribute(this,n),vn.applyMatrix3(t),this.setXYZ(n,vn.x,vn.y,vn.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)vn.fromBufferAttribute(this,n),vn.applyMatrix4(t),this.setXYZ(n,vn.x,vn.y,vn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)vn.fromBufferAttribute(this,n),vn.applyNormalMatrix(t),this.setXYZ(n,vn.x,vn.y,vn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)vn.fromBufferAttribute(this,n),vn.transformDirection(t),this.setXYZ(n,vn.x,vn.y,vn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=Bi(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=qe(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Bi(n,this.array)),n}setX(t,n){return this.normalized&&(n=qe(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Bi(n,this.array)),n}setY(t,n){return this.normalized&&(n=qe(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Bi(n,this.array)),n}setZ(t,n){return this.normalized&&(n=qe(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Bi(n,this.array)),n}setW(t,n){return this.normalized&&(n=qe(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=qe(n,this.array),a=qe(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,o){return t*=this.itemSize,this.normalized&&(n=qe(n,this.array),a=qe(a,this.array),o=qe(o,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this}setXYZW(t,n,a,o,c){return t*=this.itemSize,this.normalized&&(n=qe(n,this.array),a=qe(a,this.array),o=qe(o,this.array),c=qe(c,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==jp&&(t.usage=this.usage),t}}class fy extends Ii{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class hy extends Ii{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class Pe extends Ii{constructor(t,n,a){super(new Float32Array(t),n,a)}}let xE=0;const Ti=new nn,Nd=new xn,Gr=new Z,ui=new Ll,ul=new Ll,Tn=new Z;class an extends uo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xE++}),this.uuid=Ra(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ry(t)?hy:fy)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new xe().getNormalMatrix(t);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ti.makeRotationFromQuaternion(t),this.applyMatrix4(Ti),this}rotateX(t){return Ti.makeRotationX(t),this.applyMatrix4(Ti),this}rotateY(t){return Ti.makeRotationY(t),this.applyMatrix4(Ti),this}rotateZ(t){return Ti.makeRotationZ(t),this.applyMatrix4(Ti),this}translate(t,n,a){return Ti.makeTranslation(t,n,a),this.applyMatrix4(Ti),this}scale(t,n,a){return Ti.makeScale(t,n,a),this.applyMatrix4(Ti),this}lookAt(t){return Nd.lookAt(t),Nd.updateMatrix(),this.applyMatrix4(Nd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gr).negate(),this.translate(Gr.x,Gr.y,Gr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,c=t.length;o<c;o++){const u=t[o];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Pe(a,3))}else{const a=Math.min(t.length,n.count);for(let o=0;o<a;o++){const c=t[o];n.setXYZ(o,c.x,c.y,c.z||0)}t.length>n.count&&ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ll);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,o=n.length;a<o;a++){const c=n[a];ui.setFromBufferAttribute(c),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){const a=this.boundingSphere.center;if(ui.setFromBufferAttribute(t),n)for(let c=0,u=n.length;c<u;c++){const f=n[c];ul.setFromBufferAttribute(f),this.morphTargetsRelative?(Tn.addVectors(ui.min,ul.min),ui.expandByPoint(Tn),Tn.addVectors(ui.max,ul.max),ui.expandByPoint(Tn)):(ui.expandByPoint(ul.min),ui.expandByPoint(ul.max))}ui.getCenter(a);let o=0;for(let c=0,u=t.count;c<u;c++)Tn.fromBufferAttribute(t,c),o=Math.max(o,a.distanceToSquared(Tn));if(n)for(let c=0,u=n.length;c<u;c++){const f=n[c],p=this.morphTargetsRelative;for(let d=0,_=f.count;d<_;d++)Tn.fromBufferAttribute(f,d),p&&(Gr.fromBufferAttribute(t,d),Tn.add(Gr)),o=Math.max(o,a.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ii(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),f=[],p=[];for(let V=0;V<a.count;V++)f[V]=new Z,p[V]=new Z;const d=new Z,_=new Z,g=new Z,v=new de,y=new de,M=new de,b=new Z,S=new Z;function x(V,T,D){d.fromBufferAttribute(a,V),_.fromBufferAttribute(a,T),g.fromBufferAttribute(a,D),v.fromBufferAttribute(c,V),y.fromBufferAttribute(c,T),M.fromBufferAttribute(c,D),_.sub(d),g.sub(d),y.sub(v),M.sub(v);const F=1/(y.x*M.y-M.x*y.y);isFinite(F)&&(b.copy(_).multiplyScalar(M.y).addScaledVector(g,-y.y).multiplyScalar(F),S.copy(g).multiplyScalar(y.x).addScaledVector(_,-M.x).multiplyScalar(F),f[V].add(b),f[T].add(b),f[D].add(b),p[V].add(S),p[T].add(S),p[D].add(S))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let V=0,T=R.length;V<T;++V){const D=R[V],F=D.start,H=D.count;for(let j=F,et=F+H;j<et;j+=3)x(t.getX(j+0),t.getX(j+1),t.getX(j+2))}const w=new Z,A=new Z,N=new Z,O=new Z;function z(V){N.fromBufferAttribute(o,V),O.copy(N);const T=f[V];w.copy(T),w.sub(N.multiplyScalar(N.dot(T))).normalize(),A.crossVectors(O,T);const F=A.dot(p[V])<0?-1:1;u.setXYZW(V,w.x,w.y,w.z,F)}for(let V=0,T=R.length;V<T;++V){const D=R[V],F=D.start,H=D.count;for(let j=F,et=F+H;j<et;j+=3)z(t.getX(j+0)),z(t.getX(j+1)),z(t.getX(j+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Ii(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,y=a.count;v<y;v++)a.setXYZ(v,0,0,0);const o=new Z,c=new Z,u=new Z,f=new Z,p=new Z,d=new Z,_=new Z,g=new Z;if(t)for(let v=0,y=t.count;v<y;v+=3){const M=t.getX(v+0),b=t.getX(v+1),S=t.getX(v+2);o.fromBufferAttribute(n,M),c.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),_.subVectors(u,c),g.subVectors(o,c),_.cross(g),f.fromBufferAttribute(a,M),p.fromBufferAttribute(a,b),d.fromBufferAttribute(a,S),f.add(_),p.add(_),d.add(_),a.setXYZ(M,f.x,f.y,f.z),a.setXYZ(b,p.x,p.y,p.z),a.setXYZ(S,d.x,d.y,d.z)}else for(let v=0,y=n.count;v<y;v+=3)o.fromBufferAttribute(n,v+0),c.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),_.subVectors(u,c),g.subVectors(o,c),_.cross(g),a.setXYZ(v+0,_.x,_.y,_.z),a.setXYZ(v+1,_.x,_.y,_.z),a.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)Tn.fromBufferAttribute(t,n),Tn.normalize(),t.setXYZ(n,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function t(f,p){const d=f.array,_=f.itemSize,g=f.normalized,v=new d.constructor(p.length*_);let y=0,M=0;for(let b=0,S=p.length;b<S;b++){f.isInterleavedBufferAttribute?y=p[b]*f.data.stride+f.offset:y=p[b]*_;for(let x=0;x<_;x++)v[M++]=d[y++]}return new Ii(v,_,g)}if(this.index===null)return ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new an,a=this.index.array,o=this.attributes;for(const f in o){const p=o[f],d=t(p,a);n.setAttribute(f,d)}const c=this.morphAttributes;for(const f in c){const p=[],d=c[f];for(let _=0,g=d.length;_<g;_++){const v=d[_],y=t(v,a);p.push(y)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,p=u.length;f<p;f++){const d=u[f];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(t[d]=p[d]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const d=a[p];t.data.attributes[p]=d.toJSON(t.data)}const o={};let c=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],_=[];for(let g=0,v=d.length;g<v;g++){const y=d[g];_.push(y.toJSON(t.data))}_.length>0&&(o[p]=_,c=!0)}c&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere=f.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const o=t.attributes;for(const d in o){const _=o[d];this.setAttribute(d,_.clone(n))}const c=t.morphAttributes;for(const d in c){const _=[],g=c[d];for(let v=0,y=g.length;v<y;v++)_.push(g[v].clone(n));this.morphAttributes[d]=_}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let d=0,_=u.length;d<_;d++){const g=u[d];this.addGroup(g.start,g.count,g.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Iv=new nn,Ps=new Mm,au=new Nl,Hv=new Z,su=new Z,ru=new Z,ou=new Z,Od=new Z,lu=new Z,Gv=new Z,cu=new Z;class $e extends xn{constructor(t=new an,n=new uy){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(t,n){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(o,t);const f=this.morphTargetInfluences;if(c&&f){lu.set(0,0,0);for(let p=0,d=c.length;p<d;p++){const _=f[p],g=c[p];_!==0&&(Od.fromBufferAttribute(g,t),u?lu.addScaledVector(Od,_):lu.addScaledVector(Od.sub(n),_))}n.add(lu)}return n}raycast(t,n){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),au.copy(a.boundingSphere),au.applyMatrix4(c),Ps.copy(t.ray).recast(t.near),!(au.containsPoint(Ps.origin)===!1&&(Ps.intersectSphere(au,Hv)===null||Ps.origin.distanceToSquared(Hv)>(t.far-t.near)**2))&&(Iv.copy(c).invert(),Ps.copy(t.ray).applyMatrix4(Iv),!(a.boundingBox!==null&&Ps.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,Ps)))}_computeIntersections(t,n,a){let o;const c=this.geometry,u=this.material,f=c.index,p=c.attributes.position,d=c.attributes.uv,_=c.attributes.uv1,g=c.attributes.normal,v=c.groups,y=c.drawRange;if(f!==null)if(Array.isArray(u))for(let M=0,b=v.length;M<b;M++){const S=v[M],x=u[S.materialIndex],R=Math.max(S.start,y.start),w=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let A=R,N=w;A<N;A+=3){const O=f.getX(A),z=f.getX(A+1),V=f.getX(A+2);o=uu(this,x,t,a,d,_,g,O,z,V),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const M=Math.max(0,y.start),b=Math.min(f.count,y.start+y.count);for(let S=M,x=b;S<x;S+=3){const R=f.getX(S),w=f.getX(S+1),A=f.getX(S+2);o=uu(this,u,t,a,d,_,g,R,w,A),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let M=0,b=v.length;M<b;M++){const S=v[M],x=u[S.materialIndex],R=Math.max(S.start,y.start),w=Math.min(p.count,Math.min(S.start+S.count,y.start+y.count));for(let A=R,N=w;A<N;A+=3){const O=A,z=A+1,V=A+2;o=uu(this,x,t,a,d,_,g,O,z,V),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const M=Math.max(0,y.start),b=Math.min(p.count,y.start+y.count);for(let S=M,x=b;S<x;S+=3){const R=S,w=S+1,A=S+2;o=uu(this,u,t,a,d,_,g,R,w,A),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}}}function yE(r,t,n,a,o,c,u,f){let p;if(t.side===Zn?p=a.intersectTriangle(u,c,o,!0,f):p=a.intersectTriangle(o,c,u,t.side===Ua,f),p===null)return null;cu.copy(f),cu.applyMatrix4(r.matrixWorld);const d=n.ray.origin.distanceTo(cu);return d<n.near||d>n.far?null:{distance:d,point:cu.clone(),object:r}}function uu(r,t,n,a,o,c,u,f,p,d){r.getVertexPosition(f,su),r.getVertexPosition(p,ru),r.getVertexPosition(d,ou);const _=yE(r,t,n,a,su,ru,ou,Gv);if(_){const g=new Z;pi.getBarycoord(Gv,su,ru,ou,g),o&&(_.uv=pi.getInterpolatedAttribute(o,f,p,d,g,new de)),c&&(_.uv1=pi.getInterpolatedAttribute(c,f,p,d,g,new de)),u&&(_.normal=pi.getInterpolatedAttribute(u,f,p,d,g,new Z),_.normal.dot(a.direction)>0&&_.normal.multiplyScalar(-1));const v={a:f,b:p,c:d,normal:new Z,materialIndex:0};pi.getNormal(su,ru,ou,v.normal),_.face=v,_.barycoord=g}return _}class Oa extends an{constructor(t=1,n=1,a=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:o,heightSegments:c,depthSegments:u};const f=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const p=[],d=[],_=[],g=[];let v=0,y=0;M("z","y","x",-1,-1,a,n,t,u,c,0),M("z","y","x",1,-1,a,n,-t,u,c,1),M("x","z","y",1,1,t,a,n,o,u,2),M("x","z","y",1,-1,t,a,-n,o,u,3),M("x","y","z",1,-1,t,n,a,o,c,4),M("x","y","z",-1,-1,t,n,-a,o,c,5),this.setIndex(p),this.setAttribute("position",new Pe(d,3)),this.setAttribute("normal",new Pe(_,3)),this.setAttribute("uv",new Pe(g,2));function M(b,S,x,R,w,A,N,O,z,V,T){const D=A/z,F=N/V,H=A/2,j=N/2,et=O/2,rt=z+1,B=V+1;let k=0,q=0;const ft=new Z;for(let vt=0;vt<B;vt++){const I=vt*F-j;for(let at=0;at<rt;at++){const gt=at*D-H;ft[b]=gt*R,ft[S]=I*w,ft[x]=et,d.push(ft.x,ft.y,ft.z),ft[b]=0,ft[S]=0,ft[x]=O>0?1:-1,_.push(ft.x,ft.y,ft.z),g.push(at/z),g.push(1-vt/V),k+=1}}for(let vt=0;vt<V;vt++)for(let I=0;I<z;I++){const at=v+I+rt*vt,gt=v+I+rt*(vt+1),Rt=v+(I+1)+rt*(vt+1),Lt=v+(I+1)+rt*vt;p.push(at,gt,Lt),p.push(gt,Rt,Lt),q+=6}f.addGroup(y,q,T),y+=q,v+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oa(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ro(r){const t={};for(const n in r){t[n]={};for(const a in r[n]){const o=r[n][a];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=o.clone():Array.isArray(o)?t[n][a]=o.slice():t[n][a]=o}}return t}function jn(r){const t={};for(let n=0;n<r.length;n++){const a=ro(r[n]);for(const o in a)t[o]=a[o]}return t}function SE(r){const t=[];for(let n=0;n<r.length;n++)t.push(r[n].clone());return t}function dy(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Le.workingColorSpace}const ME={clone:ro,merge:jn};var EE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ai extends za{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=EE,this.fragmentShader=bE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ro(t.uniforms),this.uniformsGroups=SE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class py extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=Ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ds=new Z,Vv=new de,kv=new de;class hi extends py{constructor(t=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Al*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan($r*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Al*2*Math.atan(Math.tan($r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ds.x,ds.y).multiplyScalar(-t/ds.z),ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(ds.x,ds.y).multiplyScalar(-t/ds.z)}getViewSize(t,n){return this.getViewBounds(t,Vv,kv),n.subVectors(kv,Vv)}setViewOffset(t,n,a,o,c,u){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan($r*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,d=u.fullHeight;c+=u.offsetX*o/p,n-=u.offsetY*a/d,o*=u.width/p,a*=u.height/d}const f=this.filmOffset;f!==0&&(c+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Vr=-90,kr=1;class TE extends xn{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new hi(Vr,kr,t,n);o.layers=this.layers,this.add(o);const c=new hi(Vr,kr,t,n);c.layers=this.layers,this.add(c);const u=new hi(Vr,kr,t,n);u.layers=this.layers,this.add(u);const f=new hi(Vr,kr,t,n);f.layers=this.layers,this.add(f);const p=new hi(Vr,kr,t,n);p.layers=this.layers,this.add(p);const d=new hi(Vr,kr,t,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,o,c,u,f,p]=n;for(const d of n)this.remove(d);if(t===Ki)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Fu)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of n)this.add(d),d.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,u,f,p,d,_]=this.children,g=t.getRenderTarget(),v=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const b=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,o),t.render(n,c),t.setRenderTarget(a,1,o),t.render(n,u),t.setRenderTarget(a,2,o),t.render(n,f),t.setRenderTarget(a,3,o),t.render(n,p),t.setRenderTarget(a,4,o),t.render(n,d),a.texture.generateMipmaps=b,t.setRenderTarget(a,5,o),t.render(n,_),t.setRenderTarget(g,v,y),t.xr.enabled=M,a.texture.needsPMREMUpdate=!0}}class my extends Xn{constructor(t=[],n=qs,a,o,c,u,f,p,d,_){super(t,n,a,o,c,u,f,p,d,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class gy extends Ji{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},o=[a,a,a,a,a,a];this.texture=new my(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Oa(5,5,5),c=new Ai({name:"CubemapFromEquirect",uniforms:ro(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Zn,blending:Aa});c.uniforms.tEquirect.value=n;const u=new $e(o,c),f=n.minFilter;return n.minFilter===Xs&&(n.minFilter=Vn),new TE(1,10,this).update(t,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(t,n=!0,a=!0,o=!0){const c=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(n,a,o);t.setRenderTarget(c)}}class Ys extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const AE={type:"move"};class zd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ys,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ys,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ys,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let o=null,c=null,u=null;const f=this._targetRay,p=this._grip,d=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(d&&t.hand){u=!0;for(const b of t.hand.values()){const S=n.getJointPose(b,a),x=this._getHandJoint(d,b);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const _=d.joints["index-finger-tip"],g=d.joints["thumb-tip"],v=_.position.distanceTo(g.position),y=.02,M=.005;d.inputState.pinching&&v>y+M?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&v<=y-M&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,a),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(o=n.getPose(t.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(AE)))}return f!==null&&(f.visible=o!==null),p!==null&&(p.visible=c!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new Ys;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}class Ku{constructor(t,n=1,a=1e3){this.isFog=!0,this.name="",this.color=new ie(t),this.near=n,this.far=a}clone(){return new Ku(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class _y extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ta,this.environmentIntensity=1,this.environmentRotation=new ta,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class RE{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=jp,this.updateRanges=[],this.version=0,this.uuid=Ra()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,a){t*=this.stride,a*=n.stride;for(let o=0,c=this.stride;o<c;o++)this.array[t+o]=n.array[a+o];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ra()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(n,this.stride);return a.setUsage(this.usage),a}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ra()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Yn=new Z;class Gu{constructor(t,n,a,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=a,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,a=this.data.count;n<a;n++)Yn.fromBufferAttribute(this,n),Yn.applyMatrix4(t),this.setXYZ(n,Yn.x,Yn.y,Yn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)Yn.fromBufferAttribute(this,n),Yn.applyNormalMatrix(t),this.setXYZ(n,Yn.x,Yn.y,Yn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)Yn.fromBufferAttribute(this,n),Yn.transformDirection(t),this.setXYZ(n,Yn.x,Yn.y,Yn.z);return this}getComponent(t,n){let a=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(a=Bi(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=qe(a,this.array)),this.data.array[t*this.data.stride+this.offset+n]=a,this}setX(t,n){return this.normalized&&(n=qe(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=qe(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=qe(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=qe(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=Bi(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=Bi(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=Bi(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=Bi(n,this.array)),n}setXY(t,n,a){return t=t*this.data.stride+this.offset,this.normalized&&(n=qe(n,this.array),a=qe(a,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this}setXYZ(t,n,a,o){return t=t*this.data.stride+this.offset,this.normalized&&(n=qe(n,this.array),a=qe(a,this.array),o=qe(o,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this.data.array[t+2]=o,this}setXYZW(t,n,a,o,c){return t=t*this.data.stride+this.offset,this.normalized&&(n=qe(n,this.array),a=qe(a,this.array),o=qe(o,this.array),c=qe(c,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this.data.array[t+2]=o,this.data.array[t+3]=c,this}clone(t){if(t===void 0){Hu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const o=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[o+c])}return new Ii(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Gu(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Hu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const o=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[o+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class vy extends za{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ie(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Xr;const fl=new Z,Wr=new Z,Yr=new Z,qr=new de,hl=new de,xy=new nn,fu=new Z,dl=new Z,hu=new Z,Xv=new de,Pd=new de,Wv=new de;class wE extends xn{constructor(t=new vy){if(super(),this.isSprite=!0,this.type="Sprite",Xr===void 0){Xr=new an;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),a=new RE(n,5);Xr.setIndex([0,1,2,0,2,3]),Xr.setAttribute("position",new Gu(a,3,0,!1)),Xr.setAttribute("uv",new Gu(a,2,3,!1))}this.geometry=Xr,this.material=t,this.center=new de(.5,.5),this.count=1}raycast(t,n){t.camera===null&&Ue('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Wr.setFromMatrixScale(this.matrixWorld),xy.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Yr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Wr.multiplyScalar(-Yr.z);const a=this.material.rotation;let o,c;a!==0&&(c=Math.cos(a),o=Math.sin(a));const u=this.center;du(fu.set(-.5,-.5,0),Yr,u,Wr,o,c),du(dl.set(.5,-.5,0),Yr,u,Wr,o,c),du(hu.set(.5,.5,0),Yr,u,Wr,o,c),Xv.set(0,0),Pd.set(1,0),Wv.set(1,1);let f=t.ray.intersectTriangle(fu,dl,hu,!1,fl);if(f===null&&(du(dl.set(-.5,.5,0),Yr,u,Wr,o,c),Pd.set(0,1),f=t.ray.intersectTriangle(fu,hu,dl,!1,fl),f===null))return;const p=t.ray.origin.distanceTo(fl);p<t.near||p>t.far||n.push({distance:p,point:fl.clone(),uv:pi.getInterpolation(fl,fu,dl,hu,Xv,Pd,Wv,new de),face:null,object:this})}copy(t,n){return super.copy(t,n),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function du(r,t,n,a,o,c){qr.subVectors(r,n).addScalar(.5).multiply(a),o!==void 0?(hl.x=c*qr.x-o*qr.y,hl.y=o*qr.x+c*qr.y):hl.copy(qr),r.copy(t),r.x+=hl.x,r.y+=hl.y,r.applyMatrix4(xy)}class CE extends Xn{constructor(t=null,n=1,a=1,o,c,u,f,p,d=Pn,_=Pn,g,v){super(null,u,f,p,d,_,o,c,g,v),this.isDataTexture=!0,this.image={data:t,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Bd=new Z,DE=new Z,UE=new xe;class Hs{constructor(t=new Z(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,o){return this.normal.set(t,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const o=Bd.subVectors(a,n).cross(DE.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(Bd),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(t.start).addScaledVector(a,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||UE.getNormalMatrix(t),o=this.coplanarPoint(Bd).applyMatrix4(t),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bs=new Nl,LE=new de(.5,.5),pu=new Z;class Em{constructor(t=new Hs,n=new Hs,a=new Hs,o=new Hs,c=new Hs,u=new Hs){this.planes=[t,n,a,o,c,u]}set(t,n,a,o,c,u){const f=this.planes;return f[0].copy(t),f[1].copy(n),f[2].copy(a),f[3].copy(o),f[4].copy(c),f[5].copy(u),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=Ki,a=!1){const o=this.planes,c=t.elements,u=c[0],f=c[1],p=c[2],d=c[3],_=c[4],g=c[5],v=c[6],y=c[7],M=c[8],b=c[9],S=c[10],x=c[11],R=c[12],w=c[13],A=c[14],N=c[15];if(o[0].setComponents(d-u,y-_,x-M,N-R).normalize(),o[1].setComponents(d+u,y+_,x+M,N+R).normalize(),o[2].setComponents(d+f,y+g,x+b,N+w).normalize(),o[3].setComponents(d-f,y-g,x-b,N-w).normalize(),a)o[4].setComponents(p,v,S,A).normalize(),o[5].setComponents(d-p,y-v,x-S,N-A).normalize();else if(o[4].setComponents(d-p,y-v,x-S,N-A).normalize(),n===Ki)o[5].setComponents(d+p,y+v,x+S,N+A).normalize();else if(n===Fu)o[5].setComponents(p,v,S,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Bs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Bs.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Bs)}intersectsSprite(t){Bs.center.set(0,0,0);const n=LE.distanceTo(t.center);return Bs.radius=.7071067811865476+n,Bs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Bs)}intersectsSphere(t){const n=this.planes,a=t.center,o=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(pu.x=o.normal.x>0?t.max.x:t.min.x,pu.y=o.normal.y>0?t.max.y:t.min.y,pu.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(pu)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vu extends za{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ku=new Z,Xu=new Z,Yv=new nn,pl=new Mm,mu=new Nl,Fd=new Z,qv=new Z;class NE extends xn{constructor(t=new an,n=new Vu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,a=[0];for(let o=1,c=n.count;o<c;o++)ku.fromBufferAttribute(n,o-1),Xu.fromBufferAttribute(n,o),a[o]=a[o-1],a[o]+=ku.distanceTo(Xu);t.setAttribute("lineDistance",new Pe(a,1))}else ce("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const a=this.geometry,o=this.matrixWorld,c=t.params.Line.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),mu.copy(a.boundingSphere),mu.applyMatrix4(o),mu.radius+=c,t.ray.intersectsSphere(mu)===!1)return;Yv.copy(o).invert(),pl.copy(t.ray).applyMatrix4(Yv);const f=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,d=this.isLineSegments?2:1,_=a.index,v=a.attributes.position;if(_!==null){const y=Math.max(0,u.start),M=Math.min(_.count,u.start+u.count);for(let b=y,S=M-1;b<S;b+=d){const x=_.getX(b),R=_.getX(b+1),w=gu(this,t,pl,p,x,R,b);w&&n.push(w)}if(this.isLineLoop){const b=_.getX(M-1),S=_.getX(y),x=gu(this,t,pl,p,b,S,M-1);x&&n.push(x)}}else{const y=Math.max(0,u.start),M=Math.min(v.count,u.start+u.count);for(let b=y,S=M-1;b<S;b+=d){const x=gu(this,t,pl,p,b,b+1,b);x&&n.push(x)}if(this.isLineLoop){const b=gu(this,t,pl,p,M-1,y,M-1);b&&n.push(b)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}}function gu(r,t,n,a,o,c,u){const f=r.geometry.attributes.position;if(ku.fromBufferAttribute(f,o),Xu.fromBufferAttribute(f,c),n.distanceSqToSegment(ku,Xu,Fd,qv)>a)return;Fd.applyMatrix4(r.matrixWorld);const d=t.ray.origin.distanceTo(Fd);if(!(d<t.near||d>t.far))return{distance:d,point:qv.clone().applyMatrix4(r.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:r}}const jv=new Z,Zv=new Z;class Zp extends NE{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,a=[];for(let o=0,c=n.count;o<c;o+=2)jv.fromBufferAttribute(n,o),Zv.fromBufferAttribute(n,o+1),a[o]=o===0?0:a[o-1],a[o+1]=a[o]+jv.distanceTo(Zv);t.setAttribute("lineDistance",new Pe(a,1))}else ce("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class OE extends za{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Kv=new nn,Kp=new Mm,_u=new Nl,vu=new Z;class zE extends xn{constructor(t=new an,n=new OE){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const a=this.geometry,o=this.matrixWorld,c=t.params.Points.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),_u.copy(a.boundingSphere),_u.applyMatrix4(o),_u.radius+=c,t.ray.intersectsSphere(_u)===!1)return;Kv.copy(o).invert(),Kp.copy(t.ray).applyMatrix4(Kv);const f=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,d=a.index,g=a.attributes.position;if(d!==null){const v=Math.max(0,u.start),y=Math.min(d.count,u.start+u.count);for(let M=v,b=y;M<b;M++){const S=d.getX(M);vu.fromBufferAttribute(g,S),Qv(vu,S,p,o,t,n,this)}}else{const v=Math.max(0,u.start),y=Math.min(g.count,u.start+u.count);for(let M=v,b=y;M<b;M++)vu.fromBufferAttribute(g,M),Qv(vu,M,p,o,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}}function Qv(r,t,n,a,o,c,u){const f=Kp.distanceSqToPoint(r);if(f<n){const p=new Z;Kp.closestPointToPoint(r,p),p.applyMatrix4(a);const d=o.ray.origin.distanceTo(p);if(d<o.near||d>o.far)return;c.push({distance:d,distanceToRay:Math.sqrt(f),point:p,index:t,face:null,faceIndex:null,barycoord:null,object:u})}}class PE extends Xn{constructor(t,n,a,o,c,u,f,p,d){super(t,n,a,o,c,u,f,p,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Rl extends Xn{constructor(t,n,a=$i,o,c,u,f=Pn,p=Pn,d,_=Na,g=1){if(_!==Na&&_!==Ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:n,depth:g};super(v,o,c,u,f,p,_,a,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Sm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class BE extends Rl{constructor(t,n=$i,a=qs,o,c,u=Pn,f=Pn,p,d=Na){const _={width:t,height:t,depth:1},g=[_,_,_,_,_,_];super(t,t,n,a,o,c,u,f,p,d),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class yy extends Xn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class oo extends an{constructor(t=1,n=1,a=1,o=32,c=1,u=!1,f=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:a,radialSegments:o,heightSegments:c,openEnded:u,thetaStart:f,thetaLength:p};const d=this;o=Math.floor(o),c=Math.floor(c);const _=[],g=[],v=[],y=[];let M=0;const b=[],S=a/2;let x=0;R(),u===!1&&(t>0&&w(!0),n>0&&w(!1)),this.setIndex(_),this.setAttribute("position",new Pe(g,3)),this.setAttribute("normal",new Pe(v,3)),this.setAttribute("uv",new Pe(y,2));function R(){const A=new Z,N=new Z;let O=0;const z=(n-t)/a;for(let V=0;V<=c;V++){const T=[],D=V/c,F=D*(n-t)+t;for(let H=0;H<=o;H++){const j=H/o,et=j*p+f,rt=Math.sin(et),B=Math.cos(et);N.x=F*rt,N.y=-D*a+S,N.z=F*B,g.push(N.x,N.y,N.z),A.set(rt,z,B).normalize(),v.push(A.x,A.y,A.z),y.push(j,1-D),T.push(M++)}b.push(T)}for(let V=0;V<o;V++)for(let T=0;T<c;T++){const D=b[T][V],F=b[T+1][V],H=b[T+1][V+1],j=b[T][V+1];(t>0||T!==0)&&(_.push(D,F,j),O+=3),(n>0||T!==c-1)&&(_.push(F,H,j),O+=3)}d.addGroup(x,O,0),x+=O}function w(A){const N=M,O=new de,z=new Z;let V=0;const T=A===!0?t:n,D=A===!0?1:-1;for(let H=1;H<=o;H++)g.push(0,S*D,0),v.push(0,D,0),y.push(.5,.5),M++;const F=M;for(let H=0;H<=o;H++){const et=H/o*p+f,rt=Math.cos(et),B=Math.sin(et);z.x=T*B,z.y=S*D,z.z=T*rt,g.push(z.x,z.y,z.z),v.push(0,D,0),O.x=rt*.5+.5,O.y=B*.5*D+.5,y.push(O.x,O.y),M++}for(let H=0;H<o;H++){const j=N+H,et=F+H;A===!0?_.push(et,et+1,j):_.push(et+1,et,j),V+=3}d.addGroup(x,V,A===!0?1:2),x+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oo(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Qu extends oo{constructor(t=1,n=1,a=32,o=1,c=!1,u=0,f=Math.PI*2){super(0,t,n,a,o,c,u,f),this.type="ConeGeometry",this.parameters={radius:t,height:n,radialSegments:a,heightSegments:o,openEnded:c,thetaStart:u,thetaLength:f}}static fromJSON(t){return new Qu(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class bm extends an{constructor(t=[],n=[],a=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:a,detail:o};const c=[],u=[];f(o),d(a),_(),this.setAttribute("position",new Pe(c,3)),this.setAttribute("normal",new Pe(c.slice(),3)),this.setAttribute("uv",new Pe(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function f(R){const w=new Z,A=new Z,N=new Z;for(let O=0;O<n.length;O+=3)y(n[O+0],w),y(n[O+1],A),y(n[O+2],N),p(w,A,N,R)}function p(R,w,A,N){const O=N+1,z=[];for(let V=0;V<=O;V++){z[V]=[];const T=R.clone().lerp(A,V/O),D=w.clone().lerp(A,V/O),F=O-V;for(let H=0;H<=F;H++)H===0&&V===O?z[V][H]=T:z[V][H]=T.clone().lerp(D,H/F)}for(let V=0;V<O;V++)for(let T=0;T<2*(O-V)-1;T++){const D=Math.floor(T/2);T%2===0?(v(z[V][D+1]),v(z[V+1][D]),v(z[V][D])):(v(z[V][D+1]),v(z[V+1][D+1]),v(z[V+1][D]))}}function d(R){const w=new Z;for(let A=0;A<c.length;A+=3)w.x=c[A+0],w.y=c[A+1],w.z=c[A+2],w.normalize().multiplyScalar(R),c[A+0]=w.x,c[A+1]=w.y,c[A+2]=w.z}function _(){const R=new Z;for(let w=0;w<c.length;w+=3){R.x=c[w+0],R.y=c[w+1],R.z=c[w+2];const A=S(R)/2/Math.PI+.5,N=x(R)/Math.PI+.5;u.push(A,1-N)}M(),g()}function g(){for(let R=0;R<u.length;R+=6){const w=u[R+0],A=u[R+2],N=u[R+4],O=Math.max(w,A,N),z=Math.min(w,A,N);O>.9&&z<.1&&(w<.2&&(u[R+0]+=1),A<.2&&(u[R+2]+=1),N<.2&&(u[R+4]+=1))}}function v(R){c.push(R.x,R.y,R.z)}function y(R,w){const A=R*3;w.x=t[A+0],w.y=t[A+1],w.z=t[A+2]}function M(){const R=new Z,w=new Z,A=new Z,N=new Z,O=new de,z=new de,V=new de;for(let T=0,D=0;T<c.length;T+=9,D+=6){R.set(c[T+0],c[T+1],c[T+2]),w.set(c[T+3],c[T+4],c[T+5]),A.set(c[T+6],c[T+7],c[T+8]),O.set(u[D+0],u[D+1]),z.set(u[D+2],u[D+3]),V.set(u[D+4],u[D+5]),N.copy(R).add(w).add(A).divideScalar(3);const F=S(N);b(O,D+0,R,F),b(z,D+2,w,F),b(V,D+4,A,F)}}function b(R,w,A,N){N<0&&R.x===1&&(u[w]=R.x-1),A.x===0&&A.z===0&&(u[w]=N/2/Math.PI+.5)}function S(R){return Math.atan2(R.z,-R.x)}function x(R){return Math.atan2(-R.y,Math.sqrt(R.x*R.x+R.z*R.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bm(t.vertices,t.indices,t.radius,t.detail)}}class Tm extends bm{constructor(t=1,n=0){const a=(1+Math.sqrt(5))/2,o=1/a,c=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-o,-a,0,-o,a,0,o,-a,0,o,a,-o,-a,0,-o,a,0,o,-a,0,o,a,0,-a,0,-o,a,0,-o,-a,0,o,a,0,o],u=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(c,u,t,n),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new Tm(t.radius,t.detail)}}const xu=new Z,yu=new Z,Id=new Z,Su=new pi;class Qp extends an{constructor(t=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:n},t!==null){const o=Math.pow(10,4),c=Math.cos($r*n),u=t.getIndex(),f=t.getAttribute("position"),p=u?u.count:f.count,d=[0,0,0],_=["a","b","c"],g=new Array(3),v={},y=[];for(let M=0;M<p;M+=3){u?(d[0]=u.getX(M),d[1]=u.getX(M+1),d[2]=u.getX(M+2)):(d[0]=M,d[1]=M+1,d[2]=M+2);const{a:b,b:S,c:x}=Su;if(b.fromBufferAttribute(f,d[0]),S.fromBufferAttribute(f,d[1]),x.fromBufferAttribute(f,d[2]),Su.getNormal(Id),g[0]=`${Math.round(b.x*o)},${Math.round(b.y*o)},${Math.round(b.z*o)}`,g[1]=`${Math.round(S.x*o)},${Math.round(S.y*o)},${Math.round(S.z*o)}`,g[2]=`${Math.round(x.x*o)},${Math.round(x.y*o)},${Math.round(x.z*o)}`,!(g[0]===g[1]||g[1]===g[2]||g[2]===g[0]))for(let R=0;R<3;R++){const w=(R+1)%3,A=g[R],N=g[w],O=Su[_[R]],z=Su[_[w]],V=`${A}_${N}`,T=`${N}_${A}`;T in v&&v[T]?(Id.dot(v[T].normal)<=c&&(y.push(O.x,O.y,O.z),y.push(z.x,z.y,z.z)),v[T]=null):V in v||(v[V]={index0:d[R],index1:d[w],normal:Id.clone()})}}for(const M in v)if(v[M]){const{index0:b,index1:S}=v[M];xu.fromBufferAttribute(f,b),yu.fromBufferAttribute(f,S),y.push(xu.x,xu.y,xu.z),y.push(yu.x,yu.y,yu.z)}this.setAttribute("position",new Pe(y,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function FE(r,t,n=2){const a=t&&t.length,o=a?t[0]*n:r.length;let c=Sy(r,0,o,n,!0);const u=[];if(!c||c.next===c.prev)return u;let f,p,d;if(a&&(c=kE(r,t,c,n)),r.length>80*n){f=r[0],p=r[1];let _=f,g=p;for(let v=n;v<o;v+=n){const y=r[v],M=r[v+1];y<f&&(f=y),M<p&&(p=M),y>_&&(_=y),M>g&&(g=M)}d=Math.max(_-f,g-p),d=d!==0?32767/d:0}return wl(c,u,n,f,p,d,0),u}function Sy(r,t,n,a,o){let c;if(o===tb(r,t,n,a)>0)for(let u=t;u<n;u+=a)c=Jv(u/a|0,r[u],r[u+1],c);else for(let u=n-a;u>=t;u-=a)c=Jv(u/a|0,r[u],r[u+1],c);return c&&lo(c,c.next)&&(Dl(c),c=c.next),c}function js(r,t){if(!r)return r;t||(t=r);let n=r,a;do if(a=!1,!n.steiner&&(lo(n,n.next)||on(n.prev,n,n.next)===0)){if(Dl(n),n=t=n.prev,n===n.next)break;a=!0}else n=n.next;while(a||n!==t);return t}function wl(r,t,n,a,o,c,u){if(!r)return;!u&&c&&jE(r,a,o,c);let f=r;for(;r.prev!==r.next;){const p=r.prev,d=r.next;if(c?HE(r,a,o,c):IE(r)){t.push(p.i,r.i,d.i),Dl(r),r=d.next,f=d.next;continue}if(r=d,r===f){u?u===1?(r=GE(js(r),t),wl(r,t,n,a,o,c,2)):u===2&&VE(r,t,n,a,o,c):wl(js(r),t,n,a,o,c,1);break}}}function IE(r){const t=r.prev,n=r,a=r.next;if(on(t,n,a)>=0)return!1;const o=t.x,c=n.x,u=a.x,f=t.y,p=n.y,d=a.y,_=Math.min(o,c,u),g=Math.min(f,p,d),v=Math.max(o,c,u),y=Math.max(f,p,d);let M=a.next;for(;M!==t;){if(M.x>=_&&M.x<=v&&M.y>=g&&M.y<=y&&vl(o,f,c,p,u,d,M.x,M.y)&&on(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function HE(r,t,n,a){const o=r.prev,c=r,u=r.next;if(on(o,c,u)>=0)return!1;const f=o.x,p=c.x,d=u.x,_=o.y,g=c.y,v=u.y,y=Math.min(f,p,d),M=Math.min(_,g,v),b=Math.max(f,p,d),S=Math.max(_,g,v),x=Jp(y,M,t,n,a),R=Jp(b,S,t,n,a);let w=r.prevZ,A=r.nextZ;for(;w&&w.z>=x&&A&&A.z<=R;){if(w.x>=y&&w.x<=b&&w.y>=M&&w.y<=S&&w!==o&&w!==u&&vl(f,_,p,g,d,v,w.x,w.y)&&on(w.prev,w,w.next)>=0||(w=w.prevZ,A.x>=y&&A.x<=b&&A.y>=M&&A.y<=S&&A!==o&&A!==u&&vl(f,_,p,g,d,v,A.x,A.y)&&on(A.prev,A,A.next)>=0))return!1;A=A.nextZ}for(;w&&w.z>=x;){if(w.x>=y&&w.x<=b&&w.y>=M&&w.y<=S&&w!==o&&w!==u&&vl(f,_,p,g,d,v,w.x,w.y)&&on(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;A&&A.z<=R;){if(A.x>=y&&A.x<=b&&A.y>=M&&A.y<=S&&A!==o&&A!==u&&vl(f,_,p,g,d,v,A.x,A.y)&&on(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function GE(r,t){let n=r;do{const a=n.prev,o=n.next.next;!lo(a,o)&&Ey(a,n,n.next,o)&&Cl(a,o)&&Cl(o,a)&&(t.push(a.i,n.i,o.i),Dl(n),Dl(n.next),n=r=o),n=n.next}while(n!==r);return js(n)}function VE(r,t,n,a,o,c){let u=r;do{let f=u.next.next;for(;f!==u.prev;){if(u.i!==f.i&&QE(u,f)){let p=by(u,f);u=js(u,u.next),p=js(p,p.next),wl(u,t,n,a,o,c,0),wl(p,t,n,a,o,c,0);return}f=f.next}u=u.next}while(u!==r)}function kE(r,t,n,a){const o=[];for(let c=0,u=t.length;c<u;c++){const f=t[c]*a,p=c<u-1?t[c+1]*a:r.length,d=Sy(r,f,p,a,!1);d===d.next&&(d.steiner=!0),o.push(KE(d))}o.sort(XE);for(let c=0;c<o.length;c++)n=WE(o[c],n);return n}function XE(r,t){let n=r.x-t.x;if(n===0&&(n=r.y-t.y,n===0)){const a=(r.next.y-r.y)/(r.next.x-r.x),o=(t.next.y-t.y)/(t.next.x-t.x);n=a-o}return n}function WE(r,t){const n=YE(r,t);if(!n)return t;const a=by(n,r);return js(a,a.next),js(n,n.next)}function YE(r,t){let n=t;const a=r.x,o=r.y;let c=-1/0,u;if(lo(r,n))return n;do{if(lo(r,n.next))return n.next;if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const g=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(g<=a&&g>c&&(c=g,u=n.x<n.next.x?n:n.next,g===a))return u}n=n.next}while(n!==t);if(!u)return null;const f=u,p=u.x,d=u.y;let _=1/0;n=u;do{if(a>=n.x&&n.x>=p&&a!==n.x&&My(o<d?a:c,o,p,d,o<d?c:a,o,n.x,n.y)){const g=Math.abs(o-n.y)/(a-n.x);Cl(n,r)&&(g<_||g===_&&(n.x>u.x||n.x===u.x&&qE(u,n)))&&(u=n,_=g)}n=n.next}while(n!==f);return u}function qE(r,t){return on(r.prev,r,t.prev)<0&&on(t.next,r,r.next)<0}function jE(r,t,n,a){let o=r;do o.z===0&&(o.z=Jp(o.x,o.y,t,n,a)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==r);o.prevZ.nextZ=null,o.prevZ=null,ZE(o)}function ZE(r){let t,n=1;do{let a=r,o;r=null;let c=null;for(t=0;a;){t++;let u=a,f=0;for(let d=0;d<n&&(f++,u=u.nextZ,!!u);d++);let p=n;for(;f>0||p>0&&u;)f!==0&&(p===0||!u||a.z<=u.z)?(o=a,a=a.nextZ,f--):(o=u,u=u.nextZ,p--),c?c.nextZ=o:r=o,o.prevZ=c,c=o;a=u}c.nextZ=null,n*=2}while(t>1);return r}function Jp(r,t,n,a,o){return r=(r-n)*o|0,t=(t-a)*o|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function KE(r){let t=r,n=r;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==r);return n}function My(r,t,n,a,o,c,u,f){return(o-u)*(t-f)>=(r-u)*(c-f)&&(r-u)*(a-f)>=(n-u)*(t-f)&&(n-u)*(c-f)>=(o-u)*(a-f)}function vl(r,t,n,a,o,c,u,f){return!(r===u&&t===f)&&My(r,t,n,a,o,c,u,f)}function QE(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!JE(r,t)&&(Cl(r,t)&&Cl(t,r)&&$E(r,t)&&(on(r.prev,r,t.prev)||on(r,t.prev,t))||lo(r,t)&&on(r.prev,r,r.next)>0&&on(t.prev,t,t.next)>0)}function on(r,t,n){return(t.y-r.y)*(n.x-t.x)-(t.x-r.x)*(n.y-t.y)}function lo(r,t){return r.x===t.x&&r.y===t.y}function Ey(r,t,n,a){const o=Eu(on(r,t,n)),c=Eu(on(r,t,a)),u=Eu(on(n,a,r)),f=Eu(on(n,a,t));return!!(o!==c&&u!==f||o===0&&Mu(r,n,t)||c===0&&Mu(r,a,t)||u===0&&Mu(n,r,a)||f===0&&Mu(n,t,a))}function Mu(r,t,n){return t.x<=Math.max(r.x,n.x)&&t.x>=Math.min(r.x,n.x)&&t.y<=Math.max(r.y,n.y)&&t.y>=Math.min(r.y,n.y)}function Eu(r){return r>0?1:r<0?-1:0}function JE(r,t){let n=r;do{if(n.i!==r.i&&n.next.i!==r.i&&n.i!==t.i&&n.next.i!==t.i&&Ey(n,n.next,r,t))return!0;n=n.next}while(n!==r);return!1}function Cl(r,t){return on(r.prev,r,r.next)<0?on(r,t,r.next)>=0&&on(r,r.prev,t)>=0:on(r,t,r.prev)<0||on(r,r.next,t)<0}function $E(r,t){let n=r,a=!1;const o=(r.x+t.x)/2,c=(r.y+t.y)/2;do n.y>c!=n.next.y>c&&n.next.y!==n.y&&o<(n.next.x-n.x)*(c-n.y)/(n.next.y-n.y)+n.x&&(a=!a),n=n.next;while(n!==r);return a}function by(r,t){const n=$p(r.i,r.x,r.y),a=$p(t.i,t.x,t.y),o=r.next,c=t.prev;return r.next=t,t.prev=r,n.next=o,o.prev=n,a.next=n,n.prev=a,c.next=a,a.prev=c,a}function Jv(r,t,n,a){const o=$p(r,t,n);return a?(o.next=a.next,o.prev=a,a.next.prev=o,a.next=o):(o.prev=o,o.next=o),o}function Dl(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function $p(r,t,n){return{i:r,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function tb(r,t,n,a){let o=0;for(let c=t,u=n-a;c<n;c+=a)o+=(r[u]-r[c])*(r[c+1]+r[u+1]),u=c;return o}class eb{static triangulate(t,n,a=2){return FE(t,n,a)}}class eo{static area(t){const n=t.length;let a=0;for(let o=n-1,c=0;c<n;o=c++)a+=t[o].x*t[c].y-t[c].x*t[o].y;return a*.5}static isClockWise(t){return eo.area(t)<0}static triangulateShape(t,n){const a=[],o=[],c=[];$v(t),tx(a,t);let u=t.length;n.forEach($v);for(let p=0;p<n.length;p++)o.push(u),u+=n[p].length,tx(a,n[p]);const f=eb.triangulate(a,o);for(let p=0;p<f.length;p+=3)c.push(f.slice(p,p+3));return c}}function $v(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function tx(r,t){for(let n=0;n<t.length;n++)r.push(t[n].x),r.push(t[n].y)}class Ol extends an{constructor(t=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:o};const c=t/2,u=n/2,f=Math.floor(a),p=Math.floor(o),d=f+1,_=p+1,g=t/f,v=n/p,y=[],M=[],b=[],S=[];for(let x=0;x<_;x++){const R=x*v-u;for(let w=0;w<d;w++){const A=w*g-c;M.push(A,-R,0),b.push(0,0,1),S.push(w/f),S.push(1-x/p)}}for(let x=0;x<p;x++)for(let R=0;R<f;R++){const w=R+d*x,A=R+d*(x+1),N=R+1+d*(x+1),O=R+1+d*x;y.push(w,A,O),y.push(A,N,O)}this.setIndex(y),this.setAttribute("position",new Pe(M,3)),this.setAttribute("normal",new Pe(b,3)),this.setAttribute("uv",new Pe(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ol(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ju extends an{constructor(t=1,n=32,a=16,o=0,c=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:a,phiStart:o,phiLength:c,thetaStart:u,thetaLength:f},n=Math.max(3,Math.floor(n)),a=Math.max(2,Math.floor(a));const p=Math.min(u+f,Math.PI);let d=0;const _=[],g=new Z,v=new Z,y=[],M=[],b=[],S=[];for(let x=0;x<=a;x++){const R=[],w=x/a;let A=0;x===0&&u===0?A=.5/n:x===a&&p===Math.PI&&(A=-.5/n);for(let N=0;N<=n;N++){const O=N/n;g.x=-t*Math.cos(o+O*c)*Math.sin(u+w*f),g.y=t*Math.cos(u+w*f),g.z=t*Math.sin(o+O*c)*Math.sin(u+w*f),M.push(g.x,g.y,g.z),v.copy(g).normalize(),b.push(v.x,v.y,v.z),S.push(O+A,1-w),R.push(d++)}_.push(R)}for(let x=0;x<a;x++)for(let R=0;R<n;R++){const w=_[x][R+1],A=_[x][R],N=_[x+1][R],O=_[x+1][R+1];(x!==0||u>0)&&y.push(w,A,O),(x!==a-1||p<Math.PI)&&y.push(A,N,O)}this.setIndex(y),this.setAttribute("position",new Pe(M,3)),this.setAttribute("normal",new Pe(b,3)),this.setAttribute("uv",new Pe(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ju(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Am extends an{constructor(t=1,n=.4,a=12,o=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:a,tubularSegments:o,arc:c},a=Math.floor(a),o=Math.floor(o);const u=[],f=[],p=[],d=[],_=new Z,g=new Z,v=new Z;for(let y=0;y<=a;y++)for(let M=0;M<=o;M++){const b=M/o*c,S=y/a*Math.PI*2;g.x=(t+n*Math.cos(S))*Math.cos(b),g.y=(t+n*Math.cos(S))*Math.sin(b),g.z=n*Math.sin(S),f.push(g.x,g.y,g.z),_.x=t*Math.cos(b),_.y=t*Math.sin(b),v.subVectors(g,_).normalize(),p.push(v.x,v.y,v.z),d.push(M/o),d.push(y/a)}for(let y=1;y<=a;y++)for(let M=1;M<=o;M++){const b=(o+1)*y+M-1,S=(o+1)*(y-1)+M-1,x=(o+1)*(y-1)+M,R=(o+1)*y+M;u.push(b,S,R),u.push(S,x,R)}this.setIndex(u),this.setAttribute("position",new Pe(f,3)),this.setAttribute("normal",new Pe(p,3)),this.setAttribute("uv",new Pe(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Am(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class nb extends za{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ie(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class ib extends Ai{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class zl extends za{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sy,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ta,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ab extends za{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=L1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class sb extends za{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ty extends xn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ie(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class Ay extends Ty{constructor(t,n,a){super(t,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ie(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}toJSON(t){const n=super.toJSON(t);return n.object.groundColor=this.groundColor.getHex(),n}}const Hd=new nn,ex=new Z,nx=new Z;class rb{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.mapType=di,this.map=null,this.mapPass=null,this.matrix=new nn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Em,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new un(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,a=this.matrix;ex.setFromMatrixPosition(t.matrixWorld),n.position.copy(ex),nx.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(nx),n.updateMatrixWorld(),Hd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hd,n.coordinateSystem,n.reversedDepth),n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(Hd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Rm extends py{constructor(t=-1,n=1,a=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-t,u=a+t,f=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,u=c+d*this.view.width,f-=_*this.view.offsetY,p=f-_*this.view.height}this.projectionMatrix.makeOrthographic(c,u,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class ob extends rb{constructor(){super(new Rm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wu extends Ty{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.target=new xn,this.shadow=new ob}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class lb extends hi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function ix(r,t,n,a){const o=cb(a);switch(n){case ny:return r*t;case ay:return r*t/o.components*o.byteLength;case mm:return r*t/o.components*o.byteLength;case ao:return r*t*2/o.components*o.byteLength;case gm:return r*t*2/o.components*o.byteLength;case iy:return r*t*3/o.components*o.byteLength;case Fi:return r*t*4/o.components*o.byteLength;case _m:return r*t*4/o.components*o.byteLength;case Cu:case Du:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Uu:case Lu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case _p:case xp:return Math.max(r,16)*Math.max(t,8)/4;case gp:case vp:return Math.max(r,8)*Math.max(t,8)/2;case yp:case Sp:case Ep:case bp:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Mp:case Tp:case Ap:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Rp:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case wp:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Cp:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Dp:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Up:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Lp:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Np:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Op:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case zp:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Pp:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Bp:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Fp:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Ip:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Hp:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Gp:case Vp:case kp:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Xp:case Wp:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Yp:case qp:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function cb(r){switch(r){case di:case Jx:return{byteLength:1,components:1};case El:case $x:case La:return{byteLength:2,components:1};case dm:case pm:return{byteLength:2,components:4};case $i:case hm:case Zi:return{byteLength:4,components:1};case ty:case ey:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cm}}));typeof window<"u"&&(window.__THREE__?ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cm);function Ry(){let r=null,t=!1,n=null,a=null;function o(c,u){n(c,u),a=r.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&(a=r.requestAnimationFrame(o),t=!0)},stop:function(){r.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function ub(r){const t=new WeakMap;function n(f,p){const d=f.array,_=f.usage,g=d.byteLength,v=r.createBuffer();r.bindBuffer(p,v),r.bufferData(p,d,_),f.onUploadCallback();let y;if(d instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)y=r.HALF_FLOAT;else if(d instanceof Uint16Array)f.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=r.SHORT;else if(d instanceof Uint32Array)y=r.UNSIGNED_INT;else if(d instanceof Int32Array)y=r.INT;else if(d instanceof Int8Array)y=r.BYTE;else if(d instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:f.version,size:g}}function a(f,p,d){const _=p.array,g=p.updateRanges;if(r.bindBuffer(d,f),g.length===0)r.bufferSubData(d,0,_);else{g.sort((y,M)=>y.start-M.start);let v=0;for(let y=1;y<g.length;y++){const M=g[v],b=g[y];b.start<=M.start+M.count+1?M.count=Math.max(M.count,b.start+b.count-M.start):(++v,g[v]=b)}g.length=v+1;for(let y=0,M=g.length;y<M;y++){const b=g[y];r.bufferSubData(d,b.start*_.BYTES_PER_ELEMENT,_,b.start,b.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=t.get(f);p&&(r.deleteBuffer(p.buffer),t.delete(f))}function u(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=t.get(f);(!_||_.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const d=t.get(f);if(d===void 0)t.set(f,n(f,p));else if(d.version<f.version){if(d.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,f,p),d.version=f.version}}return{get:o,remove:c,update:u}}var fb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hb=`#ifdef USE_ALPHAHASH
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
#endif`,db=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_b=`#ifdef USE_AOMAP
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
#endif`,vb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xb=`#ifdef USE_BATCHING
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
#endif`,yb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Eb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bb=`#ifdef USE_IRIDESCENCE
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
#endif`,Tb=`#ifdef USE_BUMPMAP
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
#endif`,Ab=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Rb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Db=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ub=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Nb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ob=`#define PI 3.141592653589793
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
} // validated`,zb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Pb=`vec3 transformedNormal = objectNormal;
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
#endif`,Bb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ib=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kb=`#ifdef USE_ENVMAP
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
#endif`,Xb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Wb=`#ifdef USE_ENVMAP
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
#endif`,Yb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qb=`#ifdef USE_ENVMAP
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
#endif`,jb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jb=`#ifdef USE_GRADIENTMAP
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
}`,$b=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nT=`uniform bool receiveShadow;
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
#endif`,iT=`#ifdef USE_ENVMAP
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
#endif`,aT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lT=`PhysicalMaterial material;
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
#endif`,cT=`uniform sampler2D dfgLUT;
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
}`,uT=`
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
#endif`,fT=`#if defined( RE_IndirectDiffuse )
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
#endif`,hT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_T=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yT=`#if defined( USE_POINTS_UV )
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
#endif`,ST=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,MT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ET=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,TT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AT=`#ifdef USE_MORPHTARGETS
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
#endif`,RT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,CT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,DT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,NT=`#ifdef USE_NORMALMAP
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
#endif`,OT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,PT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,BT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,FT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,IT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,HT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,GT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,XT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,WT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,YT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ZT=`float getShadowMask() {
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
}`,KT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QT=`#ifdef USE_SKINNING
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
#endif`,JT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$T=`#ifdef USE_SKINNING
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
#endif`,tA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,aA=`#ifdef USE_TRANSMISSION
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
#endif`,sA=`#ifdef USE_TRANSMISSION
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
#endif`,rA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fA=`uniform sampler2D t2D;
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
}`,hA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gA=`#include <common>
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
}`,_A=`#if DEPTH_PACKING == 3200
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
}`,vA=`#define DISTANCE
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
}`,xA=`#define DISTANCE
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
}`,yA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,SA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MA=`uniform float scale;
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
}`,EA=`uniform vec3 diffuse;
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
}`,bA=`#include <common>
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
}`,TA=`uniform vec3 diffuse;
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
}`,AA=`#define LAMBERT
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
}`,RA=`#define LAMBERT
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
}`,wA=`#define MATCAP
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
}`,CA=`#define MATCAP
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
}`,DA=`#define NORMAL
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
}`,UA=`#define NORMAL
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
}`,LA=`#define PHONG
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
}`,NA=`#define PHONG
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
}`,OA=`#define STANDARD
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
}`,zA=`#define STANDARD
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
}`,PA=`#define TOON
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
}`,BA=`#define TOON
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
}`,FA=`uniform float size;
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
}`,IA=`uniform vec3 diffuse;
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
}`,HA=`#include <common>
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
}`,GA=`uniform vec3 color;
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
}`,VA=`uniform float rotation;
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
}`,kA=`uniform vec3 diffuse;
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
}`,ye={alphahash_fragment:fb,alphahash_pars_fragment:hb,alphamap_fragment:db,alphamap_pars_fragment:pb,alphatest_fragment:mb,alphatest_pars_fragment:gb,aomap_fragment:_b,aomap_pars_fragment:vb,batching_pars_vertex:xb,batching_vertex:yb,begin_vertex:Sb,beginnormal_vertex:Mb,bsdfs:Eb,iridescence_fragment:bb,bumpmap_pars_fragment:Tb,clipping_planes_fragment:Ab,clipping_planes_pars_fragment:Rb,clipping_planes_pars_vertex:wb,clipping_planes_vertex:Cb,color_fragment:Db,color_pars_fragment:Ub,color_pars_vertex:Lb,color_vertex:Nb,common:Ob,cube_uv_reflection_fragment:zb,defaultnormal_vertex:Pb,displacementmap_pars_vertex:Bb,displacementmap_vertex:Fb,emissivemap_fragment:Ib,emissivemap_pars_fragment:Hb,colorspace_fragment:Gb,colorspace_pars_fragment:Vb,envmap_fragment:kb,envmap_common_pars_fragment:Xb,envmap_pars_fragment:Wb,envmap_pars_vertex:Yb,envmap_physical_pars_fragment:iT,envmap_vertex:qb,fog_vertex:jb,fog_pars_vertex:Zb,fog_fragment:Kb,fog_pars_fragment:Qb,gradientmap_pars_fragment:Jb,lightmap_pars_fragment:$b,lights_lambert_fragment:tT,lights_lambert_pars_fragment:eT,lights_pars_begin:nT,lights_toon_fragment:aT,lights_toon_pars_fragment:sT,lights_phong_fragment:rT,lights_phong_pars_fragment:oT,lights_physical_fragment:lT,lights_physical_pars_fragment:cT,lights_fragment_begin:uT,lights_fragment_maps:fT,lights_fragment_end:hT,logdepthbuf_fragment:dT,logdepthbuf_pars_fragment:pT,logdepthbuf_pars_vertex:mT,logdepthbuf_vertex:gT,map_fragment:_T,map_pars_fragment:vT,map_particle_fragment:xT,map_particle_pars_fragment:yT,metalnessmap_fragment:ST,metalnessmap_pars_fragment:MT,morphinstance_vertex:ET,morphcolor_vertex:bT,morphnormal_vertex:TT,morphtarget_pars_vertex:AT,morphtarget_vertex:RT,normal_fragment_begin:wT,normal_fragment_maps:CT,normal_pars_fragment:DT,normal_pars_vertex:UT,normal_vertex:LT,normalmap_pars_fragment:NT,clearcoat_normal_fragment_begin:OT,clearcoat_normal_fragment_maps:zT,clearcoat_pars_fragment:PT,iridescence_pars_fragment:BT,opaque_fragment:FT,packing:IT,premultiplied_alpha_fragment:HT,project_vertex:GT,dithering_fragment:VT,dithering_pars_fragment:kT,roughnessmap_fragment:XT,roughnessmap_pars_fragment:WT,shadowmap_pars_fragment:YT,shadowmap_pars_vertex:qT,shadowmap_vertex:jT,shadowmask_pars_fragment:ZT,skinbase_vertex:KT,skinning_pars_vertex:QT,skinning_vertex:JT,skinnormal_vertex:$T,specularmap_fragment:tA,specularmap_pars_fragment:eA,tonemapping_fragment:nA,tonemapping_pars_fragment:iA,transmission_fragment:aA,transmission_pars_fragment:sA,uv_pars_fragment:rA,uv_pars_vertex:oA,uv_vertex:lA,worldpos_vertex:cA,background_vert:uA,background_frag:fA,backgroundCube_vert:hA,backgroundCube_frag:dA,cube_vert:pA,cube_frag:mA,depth_vert:gA,depth_frag:_A,distance_vert:vA,distance_frag:xA,equirect_vert:yA,equirect_frag:SA,linedashed_vert:MA,linedashed_frag:EA,meshbasic_vert:bA,meshbasic_frag:TA,meshlambert_vert:AA,meshlambert_frag:RA,meshmatcap_vert:wA,meshmatcap_frag:CA,meshnormal_vert:DA,meshnormal_frag:UA,meshphong_vert:LA,meshphong_frag:NA,meshphysical_vert:OA,meshphysical_frag:zA,meshtoon_vert:PA,meshtoon_frag:BA,points_vert:FA,points_frag:IA,shadow_vert:HA,shadow_frag:GA,sprite_vert:VA,sprite_frag:kA},Gt={common:{diffuse:{value:new ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xe}},envmap:{envMap:{value:null},envMapRotation:{value:new xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xe},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0},uvTransform:{value:new xe}},sprite:{diffuse:{value:new ie(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}}},ji={basic:{uniforms:jn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.fog]),vertexShader:ye.meshbasic_vert,fragmentShader:ye.meshbasic_frag},lambert:{uniforms:jn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new ie(0)}}]),vertexShader:ye.meshlambert_vert,fragmentShader:ye.meshlambert_frag},phong:{uniforms:jn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new ie(0)},specular:{value:new ie(1118481)},shininess:{value:30}}]),vertexShader:ye.meshphong_vert,fragmentShader:ye.meshphong_frag},standard:{uniforms:jn([Gt.common,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.roughnessmap,Gt.metalnessmap,Gt.fog,Gt.lights,{emissive:{value:new ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag},toon:{uniforms:jn([Gt.common,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.gradientmap,Gt.fog,Gt.lights,{emissive:{value:new ie(0)}}]),vertexShader:ye.meshtoon_vert,fragmentShader:ye.meshtoon_frag},matcap:{uniforms:jn([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,{matcap:{value:null}}]),vertexShader:ye.meshmatcap_vert,fragmentShader:ye.meshmatcap_frag},points:{uniforms:jn([Gt.points,Gt.fog]),vertexShader:ye.points_vert,fragmentShader:ye.points_frag},dashed:{uniforms:jn([Gt.common,Gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ye.linedashed_vert,fragmentShader:ye.linedashed_frag},depth:{uniforms:jn([Gt.common,Gt.displacementmap]),vertexShader:ye.depth_vert,fragmentShader:ye.depth_frag},normal:{uniforms:jn([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,{opacity:{value:1}}]),vertexShader:ye.meshnormal_vert,fragmentShader:ye.meshnormal_frag},sprite:{uniforms:jn([Gt.sprite,Gt.fog]),vertexShader:ye.sprite_vert,fragmentShader:ye.sprite_frag},background:{uniforms:{uvTransform:{value:new xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ye.background_vert,fragmentShader:ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xe}},vertexShader:ye.backgroundCube_vert,fragmentShader:ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ye.cube_vert,fragmentShader:ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ye.equirect_vert,fragmentShader:ye.equirect_frag},distance:{uniforms:jn([Gt.common,Gt.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ye.distance_vert,fragmentShader:ye.distance_frag},shadow:{uniforms:jn([Gt.lights,Gt.fog,{color:{value:new ie(0)},opacity:{value:1}}]),vertexShader:ye.shadow_vert,fragmentShader:ye.shadow_frag}};ji.physical={uniforms:jn([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xe},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xe},sheen:{value:0},sheenColor:{value:new ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xe},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xe},attenuationDistance:{value:0},attenuationColor:{value:new ie(0)},specularColor:{value:new ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xe},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xe}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag};const bu={r:0,b:0,g:0},Fs=new ta,XA=new nn;function WA(r,t,n,a,o,c,u){const f=new ie(0);let p=c===!0?0:1,d,_,g=null,v=0,y=null;function M(w){let A=w.isScene===!0?w.background:null;return A&&A.isTexture&&(A=(w.backgroundBlurriness>0?n:t).get(A)),A}function b(w){let A=!1;const N=M(w);N===null?x(f,p):N&&N.isColor&&(x(N,1),A=!0);const O=r.xr.getEnvironmentBlendMode();O==="additive"?a.buffers.color.setClear(0,0,0,1,u):O==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(r.autoClear||A)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(w,A){const N=M(A);N&&(N.isCubeTexture||N.mapping===Zu)?(_===void 0&&(_=new $e(new Oa(1,1,1),new Ai({name:"BackgroundCubeMaterial",uniforms:ro(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(O,z,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(_)),Fs.copy(A.backgroundRotation),Fs.x*=-1,Fs.y*=-1,Fs.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Fs.y*=-1,Fs.z*=-1),_.material.uniforms.envMap.value=N,_.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(XA.makeRotationFromEuler(Fs)),_.material.toneMapped=Le.getTransfer(N.colorSpace)!==Ye,(g!==N||v!==N.version||y!==r.toneMapping)&&(_.material.needsUpdate=!0,g=N,v=N.version,y=r.toneMapping),_.layers.enableAll(),w.unshift(_,_.geometry,_.material,0,0,null)):N&&N.isTexture&&(d===void 0&&(d=new $e(new Ol(2,2),new Ai({name:"BackgroundMaterial",uniforms:ro(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:Ua,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(d)),d.material.uniforms.t2D.value=N,d.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,d.material.toneMapped=Le.getTransfer(N.colorSpace)!==Ye,N.matrixAutoUpdate===!0&&N.updateMatrix(),d.material.uniforms.uvTransform.value.copy(N.matrix),(g!==N||v!==N.version||y!==r.toneMapping)&&(d.material.needsUpdate=!0,g=N,v=N.version,y=r.toneMapping),d.layers.enableAll(),w.unshift(d,d.geometry,d.material,0,0,null))}function x(w,A){w.getRGB(bu,dy(r)),a.buffers.color.setClear(bu.r,bu.g,bu.b,A,u)}function R(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return f},setClearColor:function(w,A=1){f.set(w),p=A,x(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(w){p=w,x(f,p)},render:b,addToRenderList:S,dispose:R}}function YA(r,t){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},o=v(null);let c=o,u=!1;function f(D,F,H,j,et){let rt=!1;const B=g(j,H,F);c!==B&&(c=B,d(c.object)),rt=y(D,j,H,et),rt&&M(D,j,H,et),et!==null&&t.update(et,r.ELEMENT_ARRAY_BUFFER),(rt||u)&&(u=!1,A(D,F,H,j),et!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(et).buffer))}function p(){return r.createVertexArray()}function d(D){return r.bindVertexArray(D)}function _(D){return r.deleteVertexArray(D)}function g(D,F,H){const j=H.wireframe===!0;let et=a[D.id];et===void 0&&(et={},a[D.id]=et);let rt=et[F.id];rt===void 0&&(rt={},et[F.id]=rt);let B=rt[j];return B===void 0&&(B=v(p()),rt[j]=B),B}function v(D){const F=[],H=[],j=[];for(let et=0;et<n;et++)F[et]=0,H[et]=0,j[et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:H,attributeDivisors:j,object:D,attributes:{},index:null}}function y(D,F,H,j){const et=c.attributes,rt=F.attributes;let B=0;const k=H.getAttributes();for(const q in k)if(k[q].location>=0){const vt=et[q];let I=rt[q];if(I===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(I=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(I=D.instanceColor)),vt===void 0||vt.attribute!==I||I&&vt.data!==I.data)return!0;B++}return c.attributesNum!==B||c.index!==j}function M(D,F,H,j){const et={},rt=F.attributes;let B=0;const k=H.getAttributes();for(const q in k)if(k[q].location>=0){let vt=rt[q];vt===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(vt=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(vt=D.instanceColor));const I={};I.attribute=vt,vt&&vt.data&&(I.data=vt.data),et[q]=I,B++}c.attributes=et,c.attributesNum=B,c.index=j}function b(){const D=c.newAttributes;for(let F=0,H=D.length;F<H;F++)D[F]=0}function S(D){x(D,0)}function x(D,F){const H=c.newAttributes,j=c.enabledAttributes,et=c.attributeDivisors;H[D]=1,j[D]===0&&(r.enableVertexAttribArray(D),j[D]=1),et[D]!==F&&(r.vertexAttribDivisor(D,F),et[D]=F)}function R(){const D=c.newAttributes,F=c.enabledAttributes;for(let H=0,j=F.length;H<j;H++)F[H]!==D[H]&&(r.disableVertexAttribArray(H),F[H]=0)}function w(D,F,H,j,et,rt,B){B===!0?r.vertexAttribIPointer(D,F,H,et,rt):r.vertexAttribPointer(D,F,H,j,et,rt)}function A(D,F,H,j){b();const et=j.attributes,rt=H.getAttributes(),B=F.defaultAttributeValues;for(const k in rt){const q=rt[k];if(q.location>=0){let ft=et[k];if(ft===void 0&&(k==="instanceMatrix"&&D.instanceMatrix&&(ft=D.instanceMatrix),k==="instanceColor"&&D.instanceColor&&(ft=D.instanceColor)),ft!==void 0){const vt=ft.normalized,I=ft.itemSize,at=t.get(ft);if(at===void 0)continue;const gt=at.buffer,Rt=at.type,Lt=at.bytesPerElement,P=Rt===r.INT||Rt===r.UNSIGNED_INT||ft.gpuType===hm;if(ft.isInterleavedBufferAttribute){const X=ft.data,it=X.stride,pt=ft.offset;if(X.isInstancedInterleavedBuffer){for(let ut=0;ut<q.locationSize;ut++)x(q.location+ut,X.meshPerAttribute);D.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ut=0;ut<q.locationSize;ut++)S(q.location+ut);r.bindBuffer(r.ARRAY_BUFFER,gt);for(let ut=0;ut<q.locationSize;ut++)w(q.location+ut,I/q.locationSize,Rt,vt,it*Lt,(pt+I/q.locationSize*ut)*Lt,P)}else{if(ft.isInstancedBufferAttribute){for(let X=0;X<q.locationSize;X++)x(q.location+X,ft.meshPerAttribute);D.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let X=0;X<q.locationSize;X++)S(q.location+X);r.bindBuffer(r.ARRAY_BUFFER,gt);for(let X=0;X<q.locationSize;X++)w(q.location+X,I/q.locationSize,Rt,vt,I*Lt,I/q.locationSize*X*Lt,P)}}else if(B!==void 0){const vt=B[k];if(vt!==void 0)switch(vt.length){case 2:r.vertexAttrib2fv(q.location,vt);break;case 3:r.vertexAttrib3fv(q.location,vt);break;case 4:r.vertexAttrib4fv(q.location,vt);break;default:r.vertexAttrib1fv(q.location,vt)}}}}R()}function N(){V();for(const D in a){const F=a[D];for(const H in F){const j=F[H];for(const et in j)_(j[et].object),delete j[et];delete F[H]}delete a[D]}}function O(D){if(a[D.id]===void 0)return;const F=a[D.id];for(const H in F){const j=F[H];for(const et in j)_(j[et].object),delete j[et];delete F[H]}delete a[D.id]}function z(D){for(const F in a){const H=a[F];if(H[D.id]===void 0)continue;const j=H[D.id];for(const et in j)_(j[et].object),delete j[et];delete H[D.id]}}function V(){T(),u=!0,c!==o&&(c=o,d(c.object))}function T(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:V,resetDefaultState:T,dispose:N,releaseStatesOfGeometry:O,releaseStatesOfProgram:z,initAttributes:b,enableAttribute:S,disableUnusedAttributes:R}}function qA(r,t,n){let a;function o(d){a=d}function c(d,_){r.drawArrays(a,d,_),n.update(_,a,1)}function u(d,_,g){g!==0&&(r.drawArraysInstanced(a,d,_,g),n.update(_,a,g))}function f(d,_,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,d,0,_,0,g);let y=0;for(let M=0;M<g;M++)y+=_[M];n.update(y,a,1)}function p(d,_,g,v){if(g===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<d.length;M++)u(d[M],_[M],v[M]);else{y.multiDrawArraysInstancedWEBGL(a,d,0,_,0,v,0,g);let M=0;for(let b=0;b<g;b++)M+=_[b]*v[b];n.update(M,a,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function jA(r,t,n,a){let o;function c(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");o=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(z){return!(z!==Fi&&a.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(z){const V=z===La&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==di&&a.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Zi&&!V)}function p(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const _=p(d);_!==d&&(ce("WebGLRenderer:",d,"not supported, using",_,"instead."),d=_);const g=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),R=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),A=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),N=r.getParameter(r.MAX_SAMPLES),O=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:f,precision:d,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:M,maxTextureSize:b,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:R,maxVaryings:w,maxFragmentUniforms:A,maxSamples:N,samples:O}}function ZA(r){const t=this;let n=null,a=0,o=!1,c=!1;const u=new Hs,f=new xe,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const y=g.length!==0||v||a!==0||o;return o=v,a=g.length,y},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,v){n=_(g,v,0)},this.setState=function(g,v,y){const M=g.clippingPlanes,b=g.clipIntersection,S=g.clipShadows,x=r.get(g);if(!o||M===null||M.length===0||c&&!S)c?_(null):d();else{const R=c?0:a,w=R*4;let A=x.clippingState||null;p.value=A,A=_(M,v,w,y);for(let N=0;N!==w;++N)A[N]=n[N];x.clippingState=A,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=R}};function d(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function _(g,v,y,M){const b=g!==null?g.length:0;let S=null;if(b!==0){if(S=p.value,M!==!0||S===null){const x=y+b*4,R=v.matrixWorldInverse;f.getNormalMatrix(R),(S===null||S.length<x)&&(S=new Float32Array(x));for(let w=0,A=y;w!==b;++w,A+=4)u.copy(g[w]).applyMatrix4(R,f),u.normal.toArray(S,A),S[A+3]=u.constant}p.value=S,p.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,S}}function KA(r){let t=new WeakMap;function n(u,f){return f===hp?u.mapping=qs:f===dp&&(u.mapping=io),u}function a(u){if(u&&u.isTexture){const f=u.mapping;if(f===hp||f===dp)if(t.has(u)){const p=t.get(u).texture;return n(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const d=new gy(p.height);return d.fromEquirectangularTexture(r,u),t.set(u,d),u.addEventListener("dispose",o),n(d.texture,u.mapping)}else return null}}return u}function o(u){const f=u.target;f.removeEventListener("dispose",o);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function c(){t=new WeakMap}return{get:a,dispose:c}}const ms=4,ax=[.125,.215,.35,.446,.526,.582],Vs=20,QA=256,ml=new Rm,sx=new ie;let Gd=null,Vd=0,kd=0,Xd=!1;const JA=new Z;class rx{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,a=.1,o=100,c={}){const{size:u=256,position:f=JA}=c;Gd=this._renderer.getRenderTarget(),Vd=this._renderer.getActiveCubeFace(),kd=this._renderer.getActiveMipmapLevel(),Xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,a,o,p,f),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Gd,Vd,kd),this._renderer.xr.enabled=Xd,t.scissorTest=!1,jr(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===qs||t.mapping===io?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Gd=this._renderer.getRenderTarget(),Vd=this._renderer.getActiveCubeFace(),kd=this._renderer.getActiveMipmapLevel(),Xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:La,format:Fi,colorSpace:so,depthBuffer:!1},o=ox(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ox(t,n,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=$A(c)),this._blurMaterial=e2(c,t,n),this._ggxMaterial=t2(c,t,n)}return o}_compileMaterial(t){const n=new $e(new an,t);this._renderer.compile(n,ml)}_sceneToCubeUV(t,n,a,o,c){const p=new hi(90,1,n,a),d=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,y=g.toneMapping;g.getClearColor(sx),g.toneMapping=Qi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(o),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new $e(new Oa,new uy({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,S=b.material;let x=!1;const R=t.background;R?R.isColor&&(S.color.copy(R),t.background=null,x=!0):(S.color.copy(sx),x=!0);for(let w=0;w<6;w++){const A=w%3;A===0?(p.up.set(0,d[w],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+_[w],c.y,c.z)):A===1?(p.up.set(0,0,d[w]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+_[w],c.z)):(p.up.set(0,d[w],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+_[w]));const N=this._cubeSize;jr(o,A*N,w>2?N:0,N,N),g.setRenderTarget(o),x&&g.render(b,p),g.render(t,p)}g.toneMapping=y,g.autoClear=v,t.background=R}_textureToCubeUV(t,n){const a=this._renderer,o=t.mapping===qs||t.mapping===io;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=cx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lx());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const f=c.uniforms;f.envMap.value=t;const p=this._cubeSize;jr(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(u,ml)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(t,c-1,c);n.autoClear=a}_applyGGXFilter(t,n,a){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[a];f.material=u;const p=u.uniforms,d=a/(this._lodMeshes.length-1),_=n/(this._lodMeshes.length-1),g=Math.sqrt(d*d-_*_),v=0+d*1.25,y=g*v,{_lodMax:M}=this,b=this._sizeLods[a],S=3*b*(a>M-ms?a-M+ms:0),x=4*(this._cubeSize-b);p.envMap.value=t.texture,p.roughness.value=y,p.mipInt.value=M-n,jr(c,S,x,3*b,2*b),o.setRenderTarget(c),o.render(f,ml),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=M-a,jr(t,S,x,3*b,2*b),o.setRenderTarget(t),o.render(f,ml)}_blur(t,n,a,o,c){const u=this._pingPongRenderTarget;this._halfBlur(t,u,n,a,o,"latitudinal",c),this._halfBlur(u,t,a,a,o,"longitudinal",c)}_halfBlur(t,n,a,o,c,u,f){const p=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Ue("blur direction must be either latitudinal or longitudinal!");const _=3,g=this._lodMeshes[o];g.material=d;const v=d.uniforms,y=this._sizeLods[a]-1,M=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Vs-1),b=c/M,S=isFinite(c)?1+Math.floor(_*b):Vs;S>Vs&&ce(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Vs}`);const x=[];let R=0;for(let z=0;z<Vs;++z){const V=z/b,T=Math.exp(-V*V/2);x.push(T),z===0?R+=T:z<S&&(R+=2*T)}for(let z=0;z<x.length;z++)x[z]=x[z]/R;v.envMap.value=t.texture,v.samples.value=S,v.weights.value=x,v.latitudinal.value=u==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:w}=this;v.dTheta.value=M,v.mipInt.value=w-a;const A=this._sizeLods[o],N=3*A*(o>w-ms?o-w+ms:0),O=4*(this._cubeSize-A);jr(n,N,O,3*A,2*A),p.setRenderTarget(n),p.render(g,ml)}}function $A(r){const t=[],n=[],a=[];let o=r;const c=r-ms+1+ax.length;for(let u=0;u<c;u++){const f=Math.pow(2,o);t.push(f);let p=1/f;u>r-ms?p=ax[u-r+ms-1]:u===0&&(p=0),n.push(p);const d=1/(f-2),_=-d,g=1+d,v=[_,_,g,_,g,g,_,_,g,g,_,g],y=6,M=6,b=3,S=2,x=1,R=new Float32Array(b*M*y),w=new Float32Array(S*M*y),A=new Float32Array(x*M*y);for(let O=0;O<y;O++){const z=O%3*2/3-1,V=O>2?0:-1,T=[z,V,0,z+2/3,V,0,z+2/3,V+1,0,z,V,0,z+2/3,V+1,0,z,V+1,0];R.set(T,b*M*O),w.set(v,S*M*O);const D=[O,O,O,O,O,O];A.set(D,x*M*O)}const N=new an;N.setAttribute("position",new Ii(R,b)),N.setAttribute("uv",new Ii(w,S)),N.setAttribute("faceIndex",new Ii(A,x)),a.push(new $e(N,null)),o>ms&&o--}return{lodMeshes:a,sizeLods:t,sigmas:n}}function ox(r,t,n){const a=new Ji(r,t,n);return a.texture.mapping=Zu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function jr(r,t,n,a,o){r.viewport.set(t,n,a,o),r.scissor.set(t,n,a,o)}function t2(r,t,n){return new Ai({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:QA,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$u(),fragmentShader:`

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
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function e2(r,t,n){const a=new Float32Array(Vs),o=new Z(0,1,0);return new Ai({name:"SphericalGaussianBlur",defines:{n:Vs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:$u(),fragmentShader:`

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
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function lx(){return new Ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$u(),fragmentShader:`

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
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function cx(){return new Ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function $u(){return`

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
	`}function n2(r){let t=new WeakMap,n=null;function a(f){if(f&&f.isTexture){const p=f.mapping,d=p===hp||p===dp,_=p===qs||p===io;if(d||_){let g=t.get(f);const v=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return n===null&&(n=new rx(r)),g=d?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{const y=f.image;return d&&y&&y.height>0||_&&y&&o(y)?(n===null&&(n=new rx(r)),g=d?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",c),g.texture):null}}}return f}function o(f){let p=0;const d=6;for(let _=0;_<d;_++)f[_]!==void 0&&p++;return p===d}function c(f){const p=f.target;p.removeEventListener("dispose",c);const d=t.get(p);d!==void 0&&(t.delete(p),d.dispose())}function u(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:u}}function i2(r){const t={};function n(a){if(t[a]!==void 0)return t[a];const o=r.getExtension(a);return t[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&Tl("WebGLRenderer: "+a+" extension not supported."),o}}}function a2(r,t,n,a){const o={},c=new WeakMap;function u(g){const v=g.target;v.index!==null&&t.remove(v.index);for(const M in v.attributes)t.remove(v.attributes[M]);v.removeEventListener("dispose",u),delete o[v.id];const y=c.get(v);y&&(t.remove(y),c.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function f(g,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,n.memory.geometries++),v}function p(g){const v=g.attributes;for(const y in v)t.update(v[y],r.ARRAY_BUFFER)}function d(g){const v=[],y=g.index,M=g.attributes.position;let b=0;if(y!==null){const R=y.array;b=y.version;for(let w=0,A=R.length;w<A;w+=3){const N=R[w+0],O=R[w+1],z=R[w+2];v.push(N,O,O,z,z,N)}}else if(M!==void 0){const R=M.array;b=M.version;for(let w=0,A=R.length/3-1;w<A;w+=3){const N=w+0,O=w+1,z=w+2;v.push(N,O,O,z,z,N)}}else return;const S=new(ry(v)?hy:fy)(v,1);S.version=b;const x=c.get(g);x&&t.remove(x),c.set(g,S)}function _(g){const v=c.get(g);if(v){const y=g.index;y!==null&&v.version<y.version&&d(g)}else d(g);return c.get(g)}return{get:f,update:p,getWireframeAttribute:_}}function s2(r,t,n){let a;function o(v){a=v}let c,u;function f(v){c=v.type,u=v.bytesPerElement}function p(v,y){r.drawElements(a,y,c,v*u),n.update(y,a,1)}function d(v,y,M){M!==0&&(r.drawElementsInstanced(a,y,c,v*u,M),n.update(y,a,M))}function _(v,y,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,y,0,c,v,0,M);let S=0;for(let x=0;x<M;x++)S+=y[x];n.update(S,a,1)}function g(v,y,M,b){if(M===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<v.length;x++)d(v[x]/u,y[x],b[x]);else{S.multiDrawElementsInstancedWEBGL(a,y,0,c,v,0,b,0,M);let x=0;for(let R=0;R<M;R++)x+=y[R]*b[R];n.update(x,a,1)}}this.setMode=o,this.setIndex=f,this.render=p,this.renderInstances=d,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function r2(r){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,f){switch(n.calls++,u){case r.TRIANGLES:n.triangles+=f*(c/3);break;case r.LINES:n.lines+=f*(c/2);break;case r.LINE_STRIP:n.lines+=f*(c-1);break;case r.LINE_LOOP:n.lines+=f*c;break;case r.POINTS:n.points+=f*c;break;default:Ue("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:a}}function o2(r,t,n){const a=new WeakMap,o=new un;function c(u,f,p){const d=u.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=_!==void 0?_.length:0;let v=a.get(f);if(v===void 0||v.count!==g){let D=function(){V.dispose(),a.delete(f),f.removeEventListener("dispose",D)};var y=D;v!==void 0&&v.texture.dispose();const M=f.morphAttributes.position!==void 0,b=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],R=f.morphAttributes.normal||[],w=f.morphAttributes.color||[];let A=0;M===!0&&(A=1),b===!0&&(A=2),S===!0&&(A=3);let N=f.attributes.position.count*A,O=1;N>t.maxTextureSize&&(O=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const z=new Float32Array(N*O*4*g),V=new oy(z,N,O,g);V.type=Zi,V.needsUpdate=!0;const T=A*4;for(let F=0;F<g;F++){const H=x[F],j=R[F],et=w[F],rt=N*O*4*F;for(let B=0;B<H.count;B++){const k=B*T;M===!0&&(o.fromBufferAttribute(H,B),z[rt+k+0]=o.x,z[rt+k+1]=o.y,z[rt+k+2]=o.z,z[rt+k+3]=0),b===!0&&(o.fromBufferAttribute(j,B),z[rt+k+4]=o.x,z[rt+k+5]=o.y,z[rt+k+6]=o.z,z[rt+k+7]=0),S===!0&&(o.fromBufferAttribute(et,B),z[rt+k+8]=o.x,z[rt+k+9]=o.y,z[rt+k+10]=o.z,z[rt+k+11]=et.itemSize===4?o.w:1)}}v={count:g,texture:V,size:new de(N,O)},a.set(f,v),f.addEventListener("dispose",D)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",u.morphTexture,n);else{let M=0;for(let S=0;S<d.length;S++)M+=d[S];const b=f.morphTargetsRelative?1:1-M;p.getUniforms().setValue(r,"morphTargetBaseInfluence",b),p.getUniforms().setValue(r,"morphTargetInfluences",d)}p.getUniforms().setValue(r,"morphTargetsTexture",v.texture,n),p.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:c}}function l2(r,t,n,a){let o=new WeakMap;function c(p){const d=a.render.frame,_=p.geometry,g=t.get(p,_);if(o.get(g)!==d&&(t.update(g),o.set(g,d)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),o.get(p)!==d&&(n.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,r.ARRAY_BUFFER),o.set(p,d))),p.isSkinnedMesh){const v=p.skeleton;o.get(v)!==d&&(v.update(),o.set(v,d))}return g}function u(){o=new WeakMap}function f(p){const d=p.target;d.removeEventListener("dispose",f),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:c,dispose:u}}const c2={[Wx]:"LINEAR_TONE_MAPPING",[Yx]:"REINHARD_TONE_MAPPING",[qx]:"CINEON_TONE_MAPPING",[fm]:"ACES_FILMIC_TONE_MAPPING",[Zx]:"AGX_TONE_MAPPING",[Kx]:"NEUTRAL_TONE_MAPPING",[jx]:"CUSTOM_TONE_MAPPING"};function u2(r,t,n,a,o){const c=new Ji(t,n,{type:r,depthBuffer:a,stencilBuffer:o}),u=new Ji(t,n,{type:La,depthBuffer:!1,stencilBuffer:!1}),f=new an;f.setAttribute("position",new Pe([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Pe([0,2,0,0,2,0],2));const p=new ib({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new $e(f,p),_=new Rm(-1,1,1,-1,0,1);let g=null,v=null,y=!1,M,b=null,S=[],x=!1;this.setSize=function(R,w){c.setSize(R,w),u.setSize(R,w);for(let A=0;A<S.length;A++){const N=S[A];N.setSize&&N.setSize(R,w)}},this.setEffects=function(R){S=R,x=S.length>0&&S[0].isRenderPass===!0;const w=c.width,A=c.height;for(let N=0;N<S.length;N++){const O=S[N];O.setSize&&O.setSize(w,A)}},this.begin=function(R,w){if(y||R.toneMapping===Qi&&S.length===0)return!1;if(b=w,w!==null){const A=w.width,N=w.height;(c.width!==A||c.height!==N)&&this.setSize(A,N)}return x===!1&&R.setRenderTarget(c),M=R.toneMapping,R.toneMapping=Qi,!0},this.hasRenderPass=function(){return x},this.end=function(R,w){R.toneMapping=M,y=!0;let A=c,N=u;for(let O=0;O<S.length;O++){const z=S[O];if(z.enabled!==!1&&(z.render(R,N,A,w),z.needsSwap!==!1)){const V=A;A=N,N=V}}if(g!==R.outputColorSpace||v!==R.toneMapping){g=R.outputColorSpace,v=R.toneMapping,p.defines={},Le.getTransfer(g)===Ye&&(p.defines.SRGB_TRANSFER="");const O=c2[v];O&&(p.defines[O]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=A.texture,R.setRenderTarget(b),R.render(d,_),b=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),u.dispose(),f.dispose(),p.dispose()}}const wy=new Xn,tm=new Rl(1,1),Cy=new oy,Dy=new cE,Uy=new my,ux=[],fx=[],hx=new Float32Array(16),dx=new Float32Array(9),px=new Float32Array(4);function fo(r,t,n){const a=r[0];if(a<=0||a>0)return r;const o=t*n;let c=ux[o];if(c===void 0&&(c=new Float32Array(o),ux[o]=c),t!==0){a.toArray(c,0);for(let u=1,f=0;u!==t;++u)f+=n,r[u].toArray(c,f)}return c}function Mn(r,t){if(r.length!==t.length)return!1;for(let n=0,a=r.length;n<a;n++)if(r[n]!==t[n])return!1;return!0}function En(r,t){for(let n=0,a=t.length;n<a;n++)r[n]=t[n]}function tf(r,t){let n=fx[t];n===void 0&&(n=new Int32Array(t),fx[t]=n);for(let a=0;a!==t;++a)n[a]=r.allocateTextureUnit();return n}function f2(r,t){const n=this.cache;n[0]!==t&&(r.uniform1f(this.addr,t),n[0]=t)}function h2(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Mn(n,t))return;r.uniform2fv(this.addr,t),En(n,t)}}function d2(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Mn(n,t))return;r.uniform3fv(this.addr,t),En(n,t)}}function p2(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Mn(n,t))return;r.uniform4fv(this.addr,t),En(n,t)}}function m2(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(Mn(n,t))return;r.uniformMatrix2fv(this.addr,!1,t),En(n,t)}else{if(Mn(n,a))return;px.set(a),r.uniformMatrix2fv(this.addr,!1,px),En(n,a)}}function g2(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(Mn(n,t))return;r.uniformMatrix3fv(this.addr,!1,t),En(n,t)}else{if(Mn(n,a))return;dx.set(a),r.uniformMatrix3fv(this.addr,!1,dx),En(n,a)}}function _2(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(Mn(n,t))return;r.uniformMatrix4fv(this.addr,!1,t),En(n,t)}else{if(Mn(n,a))return;hx.set(a),r.uniformMatrix4fv(this.addr,!1,hx),En(n,a)}}function v2(r,t){const n=this.cache;n[0]!==t&&(r.uniform1i(this.addr,t),n[0]=t)}function x2(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Mn(n,t))return;r.uniform2iv(this.addr,t),En(n,t)}}function y2(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Mn(n,t))return;r.uniform3iv(this.addr,t),En(n,t)}}function S2(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Mn(n,t))return;r.uniform4iv(this.addr,t),En(n,t)}}function M2(r,t){const n=this.cache;n[0]!==t&&(r.uniform1ui(this.addr,t),n[0]=t)}function E2(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Mn(n,t))return;r.uniform2uiv(this.addr,t),En(n,t)}}function b2(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Mn(n,t))return;r.uniform3uiv(this.addr,t),En(n,t)}}function T2(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Mn(n,t))return;r.uniform4uiv(this.addr,t),En(n,t)}}function A2(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o);let c;this.type===r.SAMPLER_2D_SHADOW?(tm.compareFunction=n.isReversedDepthBuffer()?xm:vm,c=tm):c=wy,n.setTexture2D(t||c,o)}function R2(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(t||Dy,o)}function w2(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(t||Uy,o)}function C2(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(t||Cy,o)}function D2(r){switch(r){case 5126:return f2;case 35664:return h2;case 35665:return d2;case 35666:return p2;case 35674:return m2;case 35675:return g2;case 35676:return _2;case 5124:case 35670:return v2;case 35667:case 35671:return x2;case 35668:case 35672:return y2;case 35669:case 35673:return S2;case 5125:return M2;case 36294:return E2;case 36295:return b2;case 36296:return T2;case 35678:case 36198:case 36298:case 36306:case 35682:return A2;case 35679:case 36299:case 36307:return R2;case 35680:case 36300:case 36308:case 36293:return w2;case 36289:case 36303:case 36311:case 36292:return C2}}function U2(r,t){r.uniform1fv(this.addr,t)}function L2(r,t){const n=fo(t,this.size,2);r.uniform2fv(this.addr,n)}function N2(r,t){const n=fo(t,this.size,3);r.uniform3fv(this.addr,n)}function O2(r,t){const n=fo(t,this.size,4);r.uniform4fv(this.addr,n)}function z2(r,t){const n=fo(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function P2(r,t){const n=fo(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function B2(r,t){const n=fo(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function F2(r,t){r.uniform1iv(this.addr,t)}function I2(r,t){r.uniform2iv(this.addr,t)}function H2(r,t){r.uniform3iv(this.addr,t)}function G2(r,t){r.uniform4iv(this.addr,t)}function V2(r,t){r.uniform1uiv(this.addr,t)}function k2(r,t){r.uniform2uiv(this.addr,t)}function X2(r,t){r.uniform3uiv(this.addr,t)}function W2(r,t){r.uniform4uiv(this.addr,t)}function Y2(r,t,n){const a=this.cache,o=t.length,c=tf(n,o);Mn(a,c)||(r.uniform1iv(this.addr,c),En(a,c));let u;this.type===r.SAMPLER_2D_SHADOW?u=tm:u=wy;for(let f=0;f!==o;++f)n.setTexture2D(t[f]||u,c[f])}function q2(r,t,n){const a=this.cache,o=t.length,c=tf(n,o);Mn(a,c)||(r.uniform1iv(this.addr,c),En(a,c));for(let u=0;u!==o;++u)n.setTexture3D(t[u]||Dy,c[u])}function j2(r,t,n){const a=this.cache,o=t.length,c=tf(n,o);Mn(a,c)||(r.uniform1iv(this.addr,c),En(a,c));for(let u=0;u!==o;++u)n.setTextureCube(t[u]||Uy,c[u])}function Z2(r,t,n){const a=this.cache,o=t.length,c=tf(n,o);Mn(a,c)||(r.uniform1iv(this.addr,c),En(a,c));for(let u=0;u!==o;++u)n.setTexture2DArray(t[u]||Cy,c[u])}function K2(r){switch(r){case 5126:return U2;case 35664:return L2;case 35665:return N2;case 35666:return O2;case 35674:return z2;case 35675:return P2;case 35676:return B2;case 5124:case 35670:return F2;case 35667:case 35671:return I2;case 35668:case 35672:return H2;case 35669:case 35673:return G2;case 5125:return V2;case 36294:return k2;case 36295:return X2;case 36296:return W2;case 35678:case 36198:case 36298:case 36306:case 35682:return Y2;case 35679:case 36299:case 36307:return q2;case 35680:case 36300:case 36308:case 36293:return j2;case 36289:case 36303:case 36311:case 36292:return Z2}}class Q2{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=D2(n.type)}}class J2{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=K2(n.type)}}class $2{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const f=o[c];f.setValue(t,n[f.id],a)}}}const Wd=/(\w+)(\])?(\[|\.)?/g;function mx(r,t){r.seq.push(t),r.map[t.id]=t}function t3(r,t,n){const a=r.name,o=a.length;for(Wd.lastIndex=0;;){const c=Wd.exec(a),u=Wd.lastIndex;let f=c[1];const p=c[2]==="]",d=c[3];if(p&&(f=f|0),d===void 0||d==="["&&u+2===o){mx(n,d===void 0?new Q2(f,r,t):new J2(f,r,t));break}else{let g=n.map[f];g===void 0&&(g=new $2(f),mx(n,g)),n=g}}}class Nu{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let u=0;u<a;++u){const f=t.getActiveUniform(n,u),p=t.getUniformLocation(n,f.name);t3(f,p,this)}const o=[],c=[];for(const u of this.seq)u.type===t.SAMPLER_2D_SHADOW||u.type===t.SAMPLER_CUBE_SHADOW||u.type===t.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(t,n,a,o){const c=this.map[n];c!==void 0&&c.setValue(t,a,o)}setOptional(t,n,a){const o=n[a];o!==void 0&&this.setValue(t,a,o)}static upload(t,n,a,o){for(let c=0,u=n.length;c!==u;++c){const f=n[c],p=a[f.id];p.needsUpdate!==!1&&f.setValue(t,p.value,o)}}static seqWithValue(t,n){const a=[];for(let o=0,c=t.length;o!==c;++o){const u=t[o];u.id in n&&a.push(u)}return a}}function gx(r,t,n){const a=r.createShader(t);return r.shaderSource(a,n),r.compileShader(a),a}const e3=37297;let n3=0;function i3(r,t){const n=r.split(`
`),a=[],o=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let u=o;u<c;u++){const f=u+1;a.push(`${f===t?">":" "} ${f}: ${n[u]}`)}return a.join(`
`)}const _x=new xe;function a3(r){Le._getMatrix(_x,Le.workingColorSpace,r);const t=`mat3( ${_x.elements.map(n=>n.toFixed(4))} )`;switch(Le.getTransfer(r)){case Bu:return[t,"LinearTransferOETF"];case Ye:return[t,"sRGBTransferOETF"];default:return ce("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function vx(r,t,n){const a=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(a&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+i3(r.getShaderSource(t),f)}else return c}function s3(r,t){const n=a3(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const r3={[Wx]:"Linear",[Yx]:"Reinhard",[qx]:"Cineon",[fm]:"ACESFilmic",[Zx]:"AgX",[Kx]:"Neutral",[jx]:"Custom"};function o3(r,t){const n=r3[t];return n===void 0?(ce("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Tu=new Z;function l3(){Le.getLuminanceCoefficients(Tu);const r=Tu.x.toFixed(4),t=Tu.y.toFixed(4),n=Tu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function c3(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xl).join(`
`)}function u3(r){const t=[];for(const n in r){const a=r[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function f3(r,t){const n={},a=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=r.getActiveAttrib(t,o),u=c.name;let f=1;c.type===r.FLOAT_MAT2&&(f=2),c.type===r.FLOAT_MAT3&&(f=3),c.type===r.FLOAT_MAT4&&(f=4),n[u]={type:c.type,location:r.getAttribLocation(t,u),locationSize:f}}return n}function xl(r){return r!==""}function xx(r,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yx(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const h3=/^[ \t]*#include +<([\w\d./]+)>/gm;function em(r){return r.replace(h3,p3)}const d3=new Map;function p3(r,t){let n=ye[t];if(n===void 0){const a=d3.get(t);if(a!==void 0)n=ye[a],ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return em(n)}const m3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sx(r){return r.replace(m3,g3)}function g3(r,t,n,a){let o="";for(let c=parseInt(t);c<parseInt(n);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function Mx(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const _3={[wu]:"SHADOWMAP_TYPE_PCF",[Kr]:"SHADOWMAP_TYPE_VSM"};function v3(r){return _3[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const x3={[qs]:"ENVMAP_TYPE_CUBE",[io]:"ENVMAP_TYPE_CUBE",[Zu]:"ENVMAP_TYPE_CUBE_UV"};function y3(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":x3[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const S3={[io]:"ENVMAP_MODE_REFRACTION"};function M3(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":S3[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const E3={[Xx]:"ENVMAP_BLENDING_MULTIPLY",[C1]:"ENVMAP_BLENDING_MIX",[D1]:"ENVMAP_BLENDING_ADD"};function b3(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":E3[r.combine]||"ENVMAP_BLENDING_NONE"}function T3(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function A3(r,t,n,a){const o=r.getContext(),c=n.defines;let u=n.vertexShader,f=n.fragmentShader;const p=v3(n),d=y3(n),_=M3(n),g=b3(n),v=T3(n),y=c3(n),M=u3(c),b=o.createProgram();let S,x,R=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(xl).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(xl).join(`
`),x.length>0&&(x+=`
`)):(S=[Mx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xl).join(`
`),x=[Mx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+_:"",n.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Qi?"#define TONE_MAPPING":"",n.toneMapping!==Qi?ye.tonemapping_pars_fragment:"",n.toneMapping!==Qi?o3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ye.colorspace_pars_fragment,s3("linearToOutputTexel",n.outputColorSpace),l3(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(xl).join(`
`)),u=em(u),u=xx(u,n),u=yx(u,n),f=em(f),f=xx(f,n),f=yx(f,n),u=Sx(u),f=Sx(f),n.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",n.glslVersion===Tv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Tv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const w=R+S+u,A=R+x+f,N=gx(o,o.VERTEX_SHADER,w),O=gx(o,o.FRAGMENT_SHADER,A);o.attachShader(b,N),o.attachShader(b,O),n.index0AttributeName!==void 0?o.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(b,0,"position"),o.linkProgram(b);function z(F){if(r.debug.checkShaderErrors){const H=o.getProgramInfoLog(b)||"",j=o.getShaderInfoLog(N)||"",et=o.getShaderInfoLog(O)||"",rt=H.trim(),B=j.trim(),k=et.trim();let q=!0,ft=!0;if(o.getProgramParameter(b,o.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,b,N,O);else{const vt=vx(o,N,"vertex"),I=vx(o,O,"fragment");Ue("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(b,o.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+rt+`
`+vt+`
`+I)}else rt!==""?ce("WebGLProgram: Program Info Log:",rt):(B===""||k==="")&&(ft=!1);ft&&(F.diagnostics={runnable:q,programLog:rt,vertexShader:{log:B,prefix:S},fragmentShader:{log:k,prefix:x}})}o.deleteShader(N),o.deleteShader(O),V=new Nu(o,b),T=f3(o,b)}let V;this.getUniforms=function(){return V===void 0&&z(this),V};let T;this.getAttributes=function(){return T===void 0&&z(this),T};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=o.getProgramParameter(b,e3)),D},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=n3++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=N,this.fragmentShader=O,this}let R3=0;class w3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(a),u=this._getShaderCacheForMaterial(t);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new C3(t),n.set(t,a)),a}}class C3{constructor(t){this.id=R3++,this.code=t,this.usedTimes=0}}function D3(r,t,n,a,o,c,u){const f=new ly,p=new w3,d=new Set,_=[],g=new Map,v=o.logarithmicDepthBuffer;let y=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return d.add(T),T===0?"uv":`uv${T}`}function S(T,D,F,H,j){const et=H.fog,rt=j.geometry,B=T.isMeshStandardMaterial?H.environment:null,k=(T.isMeshStandardMaterial?n:t).get(T.envMap||B),q=k&&k.mapping===Zu?k.image.height:null,ft=M[T.type];T.precision!==null&&(y=o.getMaxPrecision(T.precision),y!==T.precision&&ce("WebGLProgram.getParameters:",T.precision,"not supported, using",y,"instead."));const vt=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,I=vt!==void 0?vt.length:0;let at=0;rt.morphAttributes.position!==void 0&&(at=1),rt.morphAttributes.normal!==void 0&&(at=2),rt.morphAttributes.color!==void 0&&(at=3);let gt,Rt,Lt,P;if(ft){const De=ji[ft];gt=De.vertexShader,Rt=De.fragmentShader}else gt=T.vertexShader,Rt=T.fragmentShader,p.update(T),Lt=p.getVertexShaderID(T),P=p.getFragmentShaderID(T);const X=r.getRenderTarget(),it=r.state.buffers.depth.getReversed(),pt=j.isInstancedMesh===!0,ut=j.isBatchedMesh===!0,Et=!!T.map,Nt=!!T.matcap,Ot=!!k,Ft=!!T.aoMap,ee=!!T.lightMap,Dt=!!T.bumpMap,ue=!!T.normalMap,W=!!T.displacementMap,Se=!!T.emissiveMap,ge=!!T.metalnessMap,we=!!T.roughnessMap,Jt=T.anisotropy>0,G=T.clearcoat>0,C=T.dispersion>0,J=T.iridescence>0,xt=T.sheen>0,bt=T.transmission>0,mt=Jt&&!!T.anisotropyMap,te=G&&!!T.clearcoatMap,zt=G&&!!T.clearcoatNormalMap,Zt=G&&!!T.clearcoatRoughnessMap,le=J&&!!T.iridescenceMap,At=J&&!!T.iridescenceThicknessMap,wt=xt&&!!T.sheenColorMap,Xt=xt&&!!T.sheenRoughnessMap,Vt=!!T.specularMap,Pt=!!T.specularColorMap,_e=!!T.specularIntensityMap,Q=bt&&!!T.transmissionMap,It=bt&&!!T.thicknessMap,Ct=!!T.gradientMap,kt=!!T.alphaMap,Tt=T.alphaTest>0,Mt=!!T.alphaHash,Ut=!!T.extensions;let fe=Qi;T.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(fe=r.toneMapping);const Ve={shaderID:ft,shaderType:T.type,shaderName:T.name,vertexShader:gt,fragmentShader:Rt,defines:T.defines,customVertexShaderID:Lt,customFragmentShaderID:P,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:y,batching:ut,batchingColor:ut&&j._colorsTexture!==null,instancing:pt,instancingColor:pt&&j.instanceColor!==null,instancingMorph:pt&&j.morphTexture!==null,outputColorSpace:X===null?r.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:so,alphaToCoverage:!!T.alphaToCoverage,map:Et,matcap:Nt,envMap:Ot,envMapMode:Ot&&k.mapping,envMapCubeUVHeight:q,aoMap:Ft,lightMap:ee,bumpMap:Dt,normalMap:ue,displacementMap:W,emissiveMap:Se,normalMapObjectSpace:ue&&T.normalMapType===N1,normalMapTangentSpace:ue&&T.normalMapType===sy,metalnessMap:ge,roughnessMap:we,anisotropy:Jt,anisotropyMap:mt,clearcoat:G,clearcoatMap:te,clearcoatNormalMap:zt,clearcoatRoughnessMap:Zt,dispersion:C,iridescence:J,iridescenceMap:le,iridescenceThicknessMap:At,sheen:xt,sheenColorMap:wt,sheenRoughnessMap:Xt,specularMap:Vt,specularColorMap:Pt,specularIntensityMap:_e,transmission:bt,transmissionMap:Q,thicknessMap:It,gradientMap:Ct,opaque:T.transparent===!1&&T.blending===Jr&&T.alphaToCoverage===!1,alphaMap:kt,alphaTest:Tt,alphaHash:Mt,combine:T.combine,mapUv:Et&&b(T.map.channel),aoMapUv:Ft&&b(T.aoMap.channel),lightMapUv:ee&&b(T.lightMap.channel),bumpMapUv:Dt&&b(T.bumpMap.channel),normalMapUv:ue&&b(T.normalMap.channel),displacementMapUv:W&&b(T.displacementMap.channel),emissiveMapUv:Se&&b(T.emissiveMap.channel),metalnessMapUv:ge&&b(T.metalnessMap.channel),roughnessMapUv:we&&b(T.roughnessMap.channel),anisotropyMapUv:mt&&b(T.anisotropyMap.channel),clearcoatMapUv:te&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:zt&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Zt&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:At&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Xt&&b(T.sheenRoughnessMap.channel),specularMapUv:Vt&&b(T.specularMap.channel),specularColorMapUv:Pt&&b(T.specularColorMap.channel),specularIntensityMapUv:_e&&b(T.specularIntensityMap.channel),transmissionMapUv:Q&&b(T.transmissionMap.channel),thicknessMapUv:It&&b(T.thicknessMap.channel),alphaMapUv:kt&&b(T.alphaMap.channel),vertexTangents:!!rt.attributes.tangent&&(ue||Jt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!rt.attributes.uv&&(Et||kt),fog:!!et,useFog:T.fog===!0,fogExp2:!!et&&et.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:it,skinning:j.isSkinnedMesh===!0,morphTargets:rt.morphAttributes.position!==void 0,morphNormals:rt.morphAttributes.normal!==void 0,morphColors:rt.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:at,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:fe,decodeVideoTexture:Et&&T.map.isVideoTexture===!0&&Le.getTransfer(T.map.colorSpace)===Ye,decodeVideoTextureEmissive:Se&&T.emissiveMap.isVideoTexture===!0&&Le.getTransfer(T.emissiveMap.colorSpace)===Ye,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Pi,flipSided:T.side===Zn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ut&&T.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&T.extensions.multiDraw===!0||ut)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ve.vertexUv1s=d.has(1),Ve.vertexUv2s=d.has(2),Ve.vertexUv3s=d.has(3),d.clear(),Ve}function x(T){const D=[];if(T.shaderID?D.push(T.shaderID):(D.push(T.customVertexShaderID),D.push(T.customFragmentShaderID)),T.defines!==void 0)for(const F in T.defines)D.push(F),D.push(T.defines[F]);return T.isRawShaderMaterial===!1&&(R(D,T),w(D,T),D.push(r.outputColorSpace)),D.push(T.customProgramCacheKey),D.join()}function R(T,D){T.push(D.precision),T.push(D.outputColorSpace),T.push(D.envMapMode),T.push(D.envMapCubeUVHeight),T.push(D.mapUv),T.push(D.alphaMapUv),T.push(D.lightMapUv),T.push(D.aoMapUv),T.push(D.bumpMapUv),T.push(D.normalMapUv),T.push(D.displacementMapUv),T.push(D.emissiveMapUv),T.push(D.metalnessMapUv),T.push(D.roughnessMapUv),T.push(D.anisotropyMapUv),T.push(D.clearcoatMapUv),T.push(D.clearcoatNormalMapUv),T.push(D.clearcoatRoughnessMapUv),T.push(D.iridescenceMapUv),T.push(D.iridescenceThicknessMapUv),T.push(D.sheenColorMapUv),T.push(D.sheenRoughnessMapUv),T.push(D.specularMapUv),T.push(D.specularColorMapUv),T.push(D.specularIntensityMapUv),T.push(D.transmissionMapUv),T.push(D.thicknessMapUv),T.push(D.combine),T.push(D.fogExp2),T.push(D.sizeAttenuation),T.push(D.morphTargetsCount),T.push(D.morphAttributeCount),T.push(D.numDirLights),T.push(D.numPointLights),T.push(D.numSpotLights),T.push(D.numSpotLightMaps),T.push(D.numHemiLights),T.push(D.numRectAreaLights),T.push(D.numDirLightShadows),T.push(D.numPointLightShadows),T.push(D.numSpotLightShadows),T.push(D.numSpotLightShadowsWithMaps),T.push(D.numLightProbes),T.push(D.shadowMapType),T.push(D.toneMapping),T.push(D.numClippingPlanes),T.push(D.numClipIntersection),T.push(D.depthPacking)}function w(T,D){f.disableAll(),D.instancing&&f.enable(0),D.instancingColor&&f.enable(1),D.instancingMorph&&f.enable(2),D.matcap&&f.enable(3),D.envMap&&f.enable(4),D.normalMapObjectSpace&&f.enable(5),D.normalMapTangentSpace&&f.enable(6),D.clearcoat&&f.enable(7),D.iridescence&&f.enable(8),D.alphaTest&&f.enable(9),D.vertexColors&&f.enable(10),D.vertexAlphas&&f.enable(11),D.vertexUv1s&&f.enable(12),D.vertexUv2s&&f.enable(13),D.vertexUv3s&&f.enable(14),D.vertexTangents&&f.enable(15),D.anisotropy&&f.enable(16),D.alphaHash&&f.enable(17),D.batching&&f.enable(18),D.dispersion&&f.enable(19),D.batchingColor&&f.enable(20),D.gradientMap&&f.enable(21),T.push(f.mask),f.disableAll(),D.fog&&f.enable(0),D.useFog&&f.enable(1),D.flatShading&&f.enable(2),D.logarithmicDepthBuffer&&f.enable(3),D.reversedDepthBuffer&&f.enable(4),D.skinning&&f.enable(5),D.morphTargets&&f.enable(6),D.morphNormals&&f.enable(7),D.morphColors&&f.enable(8),D.premultipliedAlpha&&f.enable(9),D.shadowMapEnabled&&f.enable(10),D.doubleSided&&f.enable(11),D.flipSided&&f.enable(12),D.useDepthPacking&&f.enable(13),D.dithering&&f.enable(14),D.transmission&&f.enable(15),D.sheen&&f.enable(16),D.opaque&&f.enable(17),D.pointsUvs&&f.enable(18),D.decodeVideoTexture&&f.enable(19),D.decodeVideoTextureEmissive&&f.enable(20),D.alphaToCoverage&&f.enable(21),T.push(f.mask)}function A(T){const D=M[T.type];let F;if(D){const H=ji[D];F=ME.clone(H.uniforms)}else F=T.uniforms;return F}function N(T,D){let F=g.get(D);return F!==void 0?++F.usedTimes:(F=new A3(r,D,T,c),_.push(F),g.set(D,F)),F}function O(T){if(--T.usedTimes===0){const D=_.indexOf(T);_[D]=_[_.length-1],_.pop(),g.delete(T.cacheKey),T.destroy()}}function z(T){p.remove(T)}function V(){p.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:A,acquireProgram:N,releaseProgram:O,releaseShaderCache:z,programs:_,dispose:V}}function U3(){let r=new WeakMap;function t(u){return r.has(u)}function n(u){let f=r.get(u);return f===void 0&&(f={},r.set(u,f)),f}function a(u){r.delete(u)}function o(u,f,p){r.get(u)[f]=p}function c(){r=new WeakMap}return{has:t,get:n,remove:a,update:o,dispose:c}}function L3(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Ex(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function bx(){const r=[];let t=0;const n=[],a=[],o=[];function c(){t=0,n.length=0,a.length=0,o.length=0}function u(g,v,y,M,b,S){let x=r[t];return x===void 0?(x={id:g.id,object:g,geometry:v,material:y,groupOrder:M,renderOrder:g.renderOrder,z:b,group:S},r[t]=x):(x.id=g.id,x.object=g,x.geometry=v,x.material=y,x.groupOrder=M,x.renderOrder=g.renderOrder,x.z=b,x.group=S),t++,x}function f(g,v,y,M,b,S){const x=u(g,v,y,M,b,S);y.transmission>0?a.push(x):y.transparent===!0?o.push(x):n.push(x)}function p(g,v,y,M,b,S){const x=u(g,v,y,M,b,S);y.transmission>0?a.unshift(x):y.transparent===!0?o.unshift(x):n.unshift(x)}function d(g,v){n.length>1&&n.sort(g||L3),a.length>1&&a.sort(v||Ex),o.length>1&&o.sort(v||Ex)}function _(){for(let g=t,v=r.length;g<v;g++){const y=r[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:a,transparent:o,init:c,push:f,unshift:p,finish:_,sort:d}}function N3(){let r=new WeakMap;function t(a,o){const c=r.get(a);let u;return c===void 0?(u=new bx,r.set(a,[u])):o>=c.length?(u=new bx,c.push(u)):u=c[o],u}function n(){r=new WeakMap}return{get:t,dispose:n}}function O3(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new Z,color:new ie};break;case"SpotLight":n={position:new Z,direction:new Z,color:new ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Z,color:new ie,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Z,skyColor:new ie,groundColor:new ie};break;case"RectAreaLight":n={color:new ie,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return r[t.id]=n,n}}}function z3(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=n,n}}}let P3=0;function B3(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function F3(r){const t=new O3,n=z3(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new Z);const o=new Z,c=new nn,u=new nn;function f(d){let _=0,g=0,v=0;for(let T=0;T<9;T++)a.probe[T].set(0,0,0);let y=0,M=0,b=0,S=0,x=0,R=0,w=0,A=0,N=0,O=0,z=0;d.sort(B3);for(let T=0,D=d.length;T<D;T++){const F=d[T],H=F.color,j=F.intensity,et=F.distance;let rt=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===ao?rt=F.shadow.map.texture:rt=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)_+=H.r*j,g+=H.g*j,v+=H.b*j;else if(F.isLightProbe){for(let B=0;B<9;B++)a.probe[B].addScaledVector(F.sh.coefficients[B],j);z++}else if(F.isDirectionalLight){const B=t.get(F);if(B.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const k=F.shadow,q=n.get(F);q.shadowIntensity=k.intensity,q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize=k.mapSize,a.directionalShadow[y]=q,a.directionalShadowMap[y]=rt,a.directionalShadowMatrix[y]=F.shadow.matrix,R++}a.directional[y]=B,y++}else if(F.isSpotLight){const B=t.get(F);B.position.setFromMatrixPosition(F.matrixWorld),B.color.copy(H).multiplyScalar(j),B.distance=et,B.coneCos=Math.cos(F.angle),B.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),B.decay=F.decay,a.spot[b]=B;const k=F.shadow;if(F.map&&(a.spotLightMap[N]=F.map,N++,k.updateMatrices(F),F.castShadow&&O++),a.spotLightMatrix[b]=k.matrix,F.castShadow){const q=n.get(F);q.shadowIntensity=k.intensity,q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize=k.mapSize,a.spotShadow[b]=q,a.spotShadowMap[b]=rt,A++}b++}else if(F.isRectAreaLight){const B=t.get(F);B.color.copy(H).multiplyScalar(j),B.halfWidth.set(F.width*.5,0,0),B.halfHeight.set(0,F.height*.5,0),a.rectArea[S]=B,S++}else if(F.isPointLight){const B=t.get(F);if(B.color.copy(F.color).multiplyScalar(F.intensity),B.distance=F.distance,B.decay=F.decay,F.castShadow){const k=F.shadow,q=n.get(F);q.shadowIntensity=k.intensity,q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize=k.mapSize,q.shadowCameraNear=k.camera.near,q.shadowCameraFar=k.camera.far,a.pointShadow[M]=q,a.pointShadowMap[M]=rt,a.pointShadowMatrix[M]=F.shadow.matrix,w++}a.point[M]=B,M++}else if(F.isHemisphereLight){const B=t.get(F);B.skyColor.copy(F.color).multiplyScalar(j),B.groundColor.copy(F.groundColor).multiplyScalar(j),a.hemi[x]=B,x++}}S>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Gt.LTC_FLOAT_1,a.rectAreaLTC2=Gt.LTC_FLOAT_2):(a.rectAreaLTC1=Gt.LTC_HALF_1,a.rectAreaLTC2=Gt.LTC_HALF_2)),a.ambient[0]=_,a.ambient[1]=g,a.ambient[2]=v;const V=a.hash;(V.directionalLength!==y||V.pointLength!==M||V.spotLength!==b||V.rectAreaLength!==S||V.hemiLength!==x||V.numDirectionalShadows!==R||V.numPointShadows!==w||V.numSpotShadows!==A||V.numSpotMaps!==N||V.numLightProbes!==z)&&(a.directional.length=y,a.spot.length=b,a.rectArea.length=S,a.point.length=M,a.hemi.length=x,a.directionalShadow.length=R,a.directionalShadowMap.length=R,a.pointShadow.length=w,a.pointShadowMap.length=w,a.spotShadow.length=A,a.spotShadowMap.length=A,a.directionalShadowMatrix.length=R,a.pointShadowMatrix.length=w,a.spotLightMatrix.length=A+N-O,a.spotLightMap.length=N,a.numSpotLightShadowsWithMaps=O,a.numLightProbes=z,V.directionalLength=y,V.pointLength=M,V.spotLength=b,V.rectAreaLength=S,V.hemiLength=x,V.numDirectionalShadows=R,V.numPointShadows=w,V.numSpotShadows=A,V.numSpotMaps=N,V.numLightProbes=z,a.version=P3++)}function p(d,_){let g=0,v=0,y=0,M=0,b=0;const S=_.matrixWorldInverse;for(let x=0,R=d.length;x<R;x++){const w=d[x];if(w.isDirectionalLight){const A=a.directional[g];A.direction.setFromMatrixPosition(w.matrixWorld),o.setFromMatrixPosition(w.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(S),g++}else if(w.isSpotLight){const A=a.spot[y];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(S),A.direction.setFromMatrixPosition(w.matrixWorld),o.setFromMatrixPosition(w.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(S),y++}else if(w.isRectAreaLight){const A=a.rectArea[M];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(S),u.identity(),c.copy(w.matrixWorld),c.premultiply(S),u.extractRotation(c),A.halfWidth.set(w.width*.5,0,0),A.halfHeight.set(0,w.height*.5,0),A.halfWidth.applyMatrix4(u),A.halfHeight.applyMatrix4(u),M++}else if(w.isPointLight){const A=a.point[v];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(S),v++}else if(w.isHemisphereLight){const A=a.hemi[b];A.direction.setFromMatrixPosition(w.matrixWorld),A.direction.transformDirection(S),b++}}}return{setup:f,setupView:p,state:a}}function Tx(r){const t=new F3(r),n=[],a=[];function o(_){d.camera=_,n.length=0,a.length=0}function c(_){n.push(_)}function u(_){a.push(_)}function f(){t.setup(n)}function p(_){t.setupView(n,_)}const d={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:d,setupLights:f,setupLightsView:p,pushLight:c,pushShadow:u}}function I3(r){let t=new WeakMap;function n(o,c=0){const u=t.get(o);let f;return u===void 0?(f=new Tx(r),t.set(o,[f])):c>=u.length?(f=new Tx(r),u.push(f)):f=u[c],f}function a(){t=new WeakMap}return{get:n,dispose:a}}const H3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,G3=`uniform sampler2D shadow_pass;
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
}`,V3=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],k3=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],Ax=new nn,gl=new Z,Yd=new Z;function X3(r,t,n){let a=new Em;const o=new de,c=new de,u=new un,f=new ab,p=new sb,d={},_=n.maxTextureSize,g={[Ua]:Zn,[Zn]:Ua,[Pi]:Pi},v=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:H3,fragmentShader:G3}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const M=new an;M.setAttribute("position",new Ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new $e(M,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wu;let x=this.type;this.render=function(O,z,V){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||O.length===0)return;O.type===um&&(ce("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),O.type=wu);const T=r.getRenderTarget(),D=r.getActiveCubeFace(),F=r.getActiveMipmapLevel(),H=r.state;H.setBlending(Aa),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const j=x!==this.type;j&&z.traverse(function(et){et.material&&(Array.isArray(et.material)?et.material.forEach(rt=>rt.needsUpdate=!0):et.material.needsUpdate=!0)});for(let et=0,rt=O.length;et<rt;et++){const B=O[et],k=B.shadow;if(k===void 0){ce("WebGLShadowMap:",B,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;o.copy(k.mapSize);const q=k.getFrameExtents();if(o.multiply(q),c.copy(k.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(c.x=Math.floor(_/q.x),o.x=c.x*q.x,k.mapSize.x=c.x),o.y>_&&(c.y=Math.floor(_/q.y),o.y=c.y*q.y,k.mapSize.y=c.y)),k.map===null||j===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Kr){if(B.isPointLight){ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Ji(o.x,o.y,{format:ao,type:La,minFilter:Vn,magFilter:Vn,generateMipmaps:!1}),k.map.texture.name=B.name+".shadowMap",k.map.depthTexture=new Rl(o.x,o.y,Zi),k.map.depthTexture.name=B.name+".shadowMapDepth",k.map.depthTexture.format=Na,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Pn,k.map.depthTexture.magFilter=Pn}else{B.isPointLight?(k.map=new gy(o.x),k.map.depthTexture=new BE(o.x,$i)):(k.map=new Ji(o.x,o.y),k.map.depthTexture=new Rl(o.x,o.y,$i)),k.map.depthTexture.name=B.name+".shadowMap",k.map.depthTexture.format=Na;const vt=r.state.buffers.depth.getReversed();this.type===wu?(k.map.depthTexture.compareFunction=vt?xm:vm,k.map.depthTexture.minFilter=Vn,k.map.depthTexture.magFilter=Vn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Pn,k.map.depthTexture.magFilter=Pn)}k.camera.updateProjectionMatrix()}const ft=k.map.isWebGLCubeRenderTarget?6:1;for(let vt=0;vt<ft;vt++){if(k.map.isWebGLCubeRenderTarget)r.setRenderTarget(k.map,vt),r.clear();else{vt===0&&(r.setRenderTarget(k.map),r.clear());const I=k.getViewport(vt);u.set(c.x*I.x,c.y*I.y,c.x*I.z,c.y*I.w),H.viewport(u)}if(B.isPointLight){const I=k.camera,at=k.matrix,gt=B.distance||I.far;gt!==I.far&&(I.far=gt,I.updateProjectionMatrix()),gl.setFromMatrixPosition(B.matrixWorld),I.position.copy(gl),Yd.copy(I.position),Yd.add(V3[vt]),I.up.copy(k3[vt]),I.lookAt(Yd),I.updateMatrixWorld(),at.makeTranslation(-gl.x,-gl.y,-gl.z),Ax.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Ax,I.coordinateSystem,I.reversedDepth)}else k.updateMatrices(B);a=k.getFrustum(),A(z,V,k.camera,B,this.type)}k.isPointLightShadow!==!0&&this.type===Kr&&R(k,V),k.needsUpdate=!1}x=this.type,S.needsUpdate=!1,r.setRenderTarget(T,D,F)};function R(O,z){const V=t.update(b);v.defines.VSM_SAMPLES!==O.blurSamples&&(v.defines.VSM_SAMPLES=O.blurSamples,y.defines.VSM_SAMPLES=O.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Ji(o.x,o.y,{format:ao,type:La})),v.uniforms.shadow_pass.value=O.map.depthTexture,v.uniforms.resolution.value=O.mapSize,v.uniforms.radius.value=O.radius,r.setRenderTarget(O.mapPass),r.clear(),r.renderBufferDirect(z,null,V,v,b,null),y.uniforms.shadow_pass.value=O.mapPass.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,r.setRenderTarget(O.map),r.clear(),r.renderBufferDirect(z,null,V,y,b,null)}function w(O,z,V,T){let D=null;const F=V.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(F!==void 0)D=F;else if(D=V.isPointLight===!0?p:f,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const H=D.uuid,j=z.uuid;let et=d[H];et===void 0&&(et={},d[H]=et);let rt=et[j];rt===void 0&&(rt=D.clone(),et[j]=rt,z.addEventListener("dispose",N)),D=rt}if(D.visible=z.visible,D.wireframe=z.wireframe,T===Kr?D.side=z.shadowSide!==null?z.shadowSide:z.side:D.side=z.shadowSide!==null?z.shadowSide:g[z.side],D.alphaMap=z.alphaMap,D.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,D.map=z.map,D.clipShadows=z.clipShadows,D.clippingPlanes=z.clippingPlanes,D.clipIntersection=z.clipIntersection,D.displacementMap=z.displacementMap,D.displacementScale=z.displacementScale,D.displacementBias=z.displacementBias,D.wireframeLinewidth=z.wireframeLinewidth,D.linewidth=z.linewidth,V.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const H=r.properties.get(D);H.light=V}return D}function A(O,z,V,T,D){if(O.visible===!1)return;if(O.layers.test(z.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&D===Kr)&&(!O.frustumCulled||a.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,O.matrixWorld);const j=t.update(O),et=O.material;if(Array.isArray(et)){const rt=j.groups;for(let B=0,k=rt.length;B<k;B++){const q=rt[B],ft=et[q.materialIndex];if(ft&&ft.visible){const vt=w(O,ft,T,D);O.onBeforeShadow(r,O,z,V,j,vt,q),r.renderBufferDirect(V,null,j,vt,O,q),O.onAfterShadow(r,O,z,V,j,vt,q)}}}else if(et.visible){const rt=w(O,et,T,D);O.onBeforeShadow(r,O,z,V,j,rt,null),r.renderBufferDirect(V,null,j,rt,O,null),O.onAfterShadow(r,O,z,V,j,rt,null)}}const H=O.children;for(let j=0,et=H.length;j<et;j++)A(H[j],z,V,T,D)}function N(O){O.target.removeEventListener("dispose",N);for(const V in d){const T=d[V],D=O.target.uuid;D in T&&(T[D].dispose(),delete T[D])}}}const W3={[sp]:rp,[op]:up,[lp]:fp,[no]:cp,[rp]:sp,[up]:op,[fp]:lp,[cp]:no};function Y3(r,t){function n(){let Q=!1;const It=new un;let Ct=null;const kt=new un(0,0,0,0);return{setMask:function(Tt){Ct!==Tt&&!Q&&(r.colorMask(Tt,Tt,Tt,Tt),Ct=Tt)},setLocked:function(Tt){Q=Tt},setClear:function(Tt,Mt,Ut,fe,Ve){Ve===!0&&(Tt*=fe,Mt*=fe,Ut*=fe),It.set(Tt,Mt,Ut,fe),kt.equals(It)===!1&&(r.clearColor(Tt,Mt,Ut,fe),kt.copy(It))},reset:function(){Q=!1,Ct=null,kt.set(-1,0,0,0)}}}function a(){let Q=!1,It=!1,Ct=null,kt=null,Tt=null;return{setReversed:function(Mt){if(It!==Mt){const Ut=t.get("EXT_clip_control");Mt?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT),It=Mt;const fe=Tt;Tt=null,this.setClear(fe)}},getReversed:function(){return It},setTest:function(Mt){Mt?X(r.DEPTH_TEST):it(r.DEPTH_TEST)},setMask:function(Mt){Ct!==Mt&&!Q&&(r.depthMask(Mt),Ct=Mt)},setFunc:function(Mt){if(It&&(Mt=W3[Mt]),kt!==Mt){switch(Mt){case sp:r.depthFunc(r.NEVER);break;case rp:r.depthFunc(r.ALWAYS);break;case op:r.depthFunc(r.LESS);break;case no:r.depthFunc(r.LEQUAL);break;case lp:r.depthFunc(r.EQUAL);break;case cp:r.depthFunc(r.GEQUAL);break;case up:r.depthFunc(r.GREATER);break;case fp:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}kt=Mt}},setLocked:function(Mt){Q=Mt},setClear:function(Mt){Tt!==Mt&&(It&&(Mt=1-Mt),r.clearDepth(Mt),Tt=Mt)},reset:function(){Q=!1,Ct=null,kt=null,Tt=null,It=!1}}}function o(){let Q=!1,It=null,Ct=null,kt=null,Tt=null,Mt=null,Ut=null,fe=null,Ve=null;return{setTest:function(De){Q||(De?X(r.STENCIL_TEST):it(r.STENCIL_TEST))},setMask:function(De){It!==De&&!Q&&(r.stencilMask(De),It=De)},setFunc:function(De,Bn,Ri){(Ct!==De||kt!==Bn||Tt!==Ri)&&(r.stencilFunc(De,Bn,Ri),Ct=De,kt=Bn,Tt=Ri)},setOp:function(De,Bn,Ri){(Mt!==De||Ut!==Bn||fe!==Ri)&&(r.stencilOp(De,Bn,Ri),Mt=De,Ut=Bn,fe=Ri)},setLocked:function(De){Q=De},setClear:function(De){Ve!==De&&(r.clearStencil(De),Ve=De)},reset:function(){Q=!1,It=null,Ct=null,kt=null,Tt=null,Mt=null,Ut=null,fe=null,Ve=null}}}const c=new n,u=new a,f=new o,p=new WeakMap,d=new WeakMap;let _={},g={},v=new WeakMap,y=[],M=null,b=!1,S=null,x=null,R=null,w=null,A=null,N=null,O=null,z=new ie(0,0,0),V=0,T=!1,D=null,F=null,H=null,j=null,et=null;const rt=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,k=0;const q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(q)[1]),B=k>=1):q.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),B=k>=2);let ft=null,vt={};const I=r.getParameter(r.SCISSOR_BOX),at=r.getParameter(r.VIEWPORT),gt=new un().fromArray(I),Rt=new un().fromArray(at);function Lt(Q,It,Ct,kt){const Tt=new Uint8Array(4),Mt=r.createTexture();r.bindTexture(Q,Mt),r.texParameteri(Q,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(Q,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ut=0;Ut<Ct;Ut++)Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?r.texImage3D(It,0,r.RGBA,1,1,kt,0,r.RGBA,r.UNSIGNED_BYTE,Tt):r.texImage2D(It+Ut,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Tt);return Mt}const P={};P[r.TEXTURE_2D]=Lt(r.TEXTURE_2D,r.TEXTURE_2D,1),P[r.TEXTURE_CUBE_MAP]=Lt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),P[r.TEXTURE_2D_ARRAY]=Lt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),P[r.TEXTURE_3D]=Lt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),f.setClear(0),X(r.DEPTH_TEST),u.setFunc(no),Dt(!1),ue(yv),X(r.CULL_FACE),Ft(Aa);function X(Q){_[Q]!==!0&&(r.enable(Q),_[Q]=!0)}function it(Q){_[Q]!==!1&&(r.disable(Q),_[Q]=!1)}function pt(Q,It){return g[Q]!==It?(r.bindFramebuffer(Q,It),g[Q]=It,Q===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=It),Q===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=It),!0):!1}function ut(Q,It){let Ct=y,kt=!1;if(Q){Ct=v.get(It),Ct===void 0&&(Ct=[],v.set(It,Ct));const Tt=Q.textures;if(Ct.length!==Tt.length||Ct[0]!==r.COLOR_ATTACHMENT0){for(let Mt=0,Ut=Tt.length;Mt<Ut;Mt++)Ct[Mt]=r.COLOR_ATTACHMENT0+Mt;Ct.length=Tt.length,kt=!0}}else Ct[0]!==r.BACK&&(Ct[0]=r.BACK,kt=!0);kt&&r.drawBuffers(Ct)}function Et(Q){return M!==Q?(r.useProgram(Q),M=Q,!0):!1}const Nt={[Gs]:r.FUNC_ADD,[h1]:r.FUNC_SUBTRACT,[d1]:r.FUNC_REVERSE_SUBTRACT};Nt[p1]=r.MIN,Nt[m1]=r.MAX;const Ot={[g1]:r.ZERO,[_1]:r.ONE,[v1]:r.SRC_COLOR,[ip]:r.SRC_ALPHA,[b1]:r.SRC_ALPHA_SATURATE,[M1]:r.DST_COLOR,[y1]:r.DST_ALPHA,[x1]:r.ONE_MINUS_SRC_COLOR,[ap]:r.ONE_MINUS_SRC_ALPHA,[E1]:r.ONE_MINUS_DST_COLOR,[S1]:r.ONE_MINUS_DST_ALPHA,[T1]:r.CONSTANT_COLOR,[A1]:r.ONE_MINUS_CONSTANT_COLOR,[R1]:r.CONSTANT_ALPHA,[w1]:r.ONE_MINUS_CONSTANT_ALPHA};function Ft(Q,It,Ct,kt,Tt,Mt,Ut,fe,Ve,De){if(Q===Aa){b===!0&&(it(r.BLEND),b=!1);return}if(b===!1&&(X(r.BLEND),b=!0),Q!==f1){if(Q!==S||De!==T){if((x!==Gs||A!==Gs)&&(r.blendEquation(r.FUNC_ADD),x=Gs,A=Gs),De)switch(Q){case Jr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Sv:r.blendFunc(r.ONE,r.ONE);break;case Mv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ev:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ue("WebGLState: Invalid blending: ",Q);break}else switch(Q){case Jr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Sv:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Mv:Ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ev:Ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ue("WebGLState: Invalid blending: ",Q);break}R=null,w=null,N=null,O=null,z.set(0,0,0),V=0,S=Q,T=De}return}Tt=Tt||It,Mt=Mt||Ct,Ut=Ut||kt,(It!==x||Tt!==A)&&(r.blendEquationSeparate(Nt[It],Nt[Tt]),x=It,A=Tt),(Ct!==R||kt!==w||Mt!==N||Ut!==O)&&(r.blendFuncSeparate(Ot[Ct],Ot[kt],Ot[Mt],Ot[Ut]),R=Ct,w=kt,N=Mt,O=Ut),(fe.equals(z)===!1||Ve!==V)&&(r.blendColor(fe.r,fe.g,fe.b,Ve),z.copy(fe),V=Ve),S=Q,T=!1}function ee(Q,It){Q.side===Pi?it(r.CULL_FACE):X(r.CULL_FACE);let Ct=Q.side===Zn;It&&(Ct=!Ct),Dt(Ct),Q.blending===Jr&&Q.transparent===!1?Ft(Aa):Ft(Q.blending,Q.blendEquation,Q.blendSrc,Q.blendDst,Q.blendEquationAlpha,Q.blendSrcAlpha,Q.blendDstAlpha,Q.blendColor,Q.blendAlpha,Q.premultipliedAlpha),u.setFunc(Q.depthFunc),u.setTest(Q.depthTest),u.setMask(Q.depthWrite),c.setMask(Q.colorWrite);const kt=Q.stencilWrite;f.setTest(kt),kt&&(f.setMask(Q.stencilWriteMask),f.setFunc(Q.stencilFunc,Q.stencilRef,Q.stencilFuncMask),f.setOp(Q.stencilFail,Q.stencilZFail,Q.stencilZPass)),Se(Q.polygonOffset,Q.polygonOffsetFactor,Q.polygonOffsetUnits),Q.alphaToCoverage===!0?X(r.SAMPLE_ALPHA_TO_COVERAGE):it(r.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(Q){D!==Q&&(Q?r.frontFace(r.CW):r.frontFace(r.CCW),D=Q)}function ue(Q){Q!==c1?(X(r.CULL_FACE),Q!==F&&(Q===yv?r.cullFace(r.BACK):Q===u1?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):it(r.CULL_FACE),F=Q}function W(Q){Q!==H&&(B&&r.lineWidth(Q),H=Q)}function Se(Q,It,Ct){Q?(X(r.POLYGON_OFFSET_FILL),(j!==It||et!==Ct)&&(r.polygonOffset(It,Ct),j=It,et=Ct)):it(r.POLYGON_OFFSET_FILL)}function ge(Q){Q?X(r.SCISSOR_TEST):it(r.SCISSOR_TEST)}function we(Q){Q===void 0&&(Q=r.TEXTURE0+rt-1),ft!==Q&&(r.activeTexture(Q),ft=Q)}function Jt(Q,It,Ct){Ct===void 0&&(ft===null?Ct=r.TEXTURE0+rt-1:Ct=ft);let kt=vt[Ct];kt===void 0&&(kt={type:void 0,texture:void 0},vt[Ct]=kt),(kt.type!==Q||kt.texture!==It)&&(ft!==Ct&&(r.activeTexture(Ct),ft=Ct),r.bindTexture(Q,It||P[Q]),kt.type=Q,kt.texture=It)}function G(){const Q=vt[ft];Q!==void 0&&Q.type!==void 0&&(r.bindTexture(Q.type,null),Q.type=void 0,Q.texture=void 0)}function C(){try{r.compressedTexImage2D(...arguments)}catch(Q){Ue("WebGLState:",Q)}}function J(){try{r.compressedTexImage3D(...arguments)}catch(Q){Ue("WebGLState:",Q)}}function xt(){try{r.texSubImage2D(...arguments)}catch(Q){Ue("WebGLState:",Q)}}function bt(){try{r.texSubImage3D(...arguments)}catch(Q){Ue("WebGLState:",Q)}}function mt(){try{r.compressedTexSubImage2D(...arguments)}catch(Q){Ue("WebGLState:",Q)}}function te(){try{r.compressedTexSubImage3D(...arguments)}catch(Q){Ue("WebGLState:",Q)}}function zt(){try{r.texStorage2D(...arguments)}catch(Q){Ue("WebGLState:",Q)}}function Zt(){try{r.texStorage3D(...arguments)}catch(Q){Ue("WebGLState:",Q)}}function le(){try{r.texImage2D(...arguments)}catch(Q){Ue("WebGLState:",Q)}}function At(){try{r.texImage3D(...arguments)}catch(Q){Ue("WebGLState:",Q)}}function wt(Q){gt.equals(Q)===!1&&(r.scissor(Q.x,Q.y,Q.z,Q.w),gt.copy(Q))}function Xt(Q){Rt.equals(Q)===!1&&(r.viewport(Q.x,Q.y,Q.z,Q.w),Rt.copy(Q))}function Vt(Q,It){let Ct=d.get(It);Ct===void 0&&(Ct=new WeakMap,d.set(It,Ct));let kt=Ct.get(Q);kt===void 0&&(kt=r.getUniformBlockIndex(It,Q.name),Ct.set(Q,kt))}function Pt(Q,It){const kt=d.get(It).get(Q);p.get(It)!==kt&&(r.uniformBlockBinding(It,kt,Q.__bindingPointIndex),p.set(It,kt))}function _e(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},ft=null,vt={},g={},v=new WeakMap,y=[],M=null,b=!1,S=null,x=null,R=null,w=null,A=null,N=null,O=null,z=new ie(0,0,0),V=0,T=!1,D=null,F=null,H=null,j=null,et=null,gt.set(0,0,r.canvas.width,r.canvas.height),Rt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),u.reset(),f.reset()}return{buffers:{color:c,depth:u,stencil:f},enable:X,disable:it,bindFramebuffer:pt,drawBuffers:ut,useProgram:Et,setBlending:Ft,setMaterial:ee,setFlipSided:Dt,setCullFace:ue,setLineWidth:W,setPolygonOffset:Se,setScissorTest:ge,activeTexture:we,bindTexture:Jt,unbindTexture:G,compressedTexImage2D:C,compressedTexImage3D:J,texImage2D:le,texImage3D:At,updateUBOMapping:Vt,uniformBlockBinding:Pt,texStorage2D:zt,texStorage3D:Zt,texSubImage2D:xt,texSubImage3D:bt,compressedTexSubImage2D:mt,compressedTexSubImage3D:te,scissor:wt,viewport:Xt,reset:_e}}function q3(r,t,n,a,o,c,u){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new de,_=new WeakMap;let g;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(G,C){return y?new OffscreenCanvas(G,C):Iu("canvas")}function b(G,C,J){let xt=1;const bt=Jt(G);if((bt.width>J||bt.height>J)&&(xt=J/Math.max(bt.width,bt.height)),xt<1)if(typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&G instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&G instanceof ImageBitmap||typeof VideoFrame<"u"&&G instanceof VideoFrame){const mt=Math.floor(xt*bt.width),te=Math.floor(xt*bt.height);g===void 0&&(g=M(mt,te));const zt=C?M(mt,te):g;return zt.width=mt,zt.height=te,zt.getContext("2d").drawImage(G,0,0,mt,te),ce("WebGLRenderer: Texture has been resized from ("+bt.width+"x"+bt.height+") to ("+mt+"x"+te+")."),zt}else return"data"in G&&ce("WebGLRenderer: Image in DataTexture is too big ("+bt.width+"x"+bt.height+")."),G;return G}function S(G){return G.generateMipmaps}function x(G){r.generateMipmap(G)}function R(G){return G.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:G.isWebGL3DRenderTarget?r.TEXTURE_3D:G.isWebGLArrayRenderTarget||G.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(G,C,J,xt,bt=!1){if(G!==null){if(r[G]!==void 0)return r[G];ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+G+"'")}let mt=C;if(C===r.RED&&(J===r.FLOAT&&(mt=r.R32F),J===r.HALF_FLOAT&&(mt=r.R16F),J===r.UNSIGNED_BYTE&&(mt=r.R8)),C===r.RED_INTEGER&&(J===r.UNSIGNED_BYTE&&(mt=r.R8UI),J===r.UNSIGNED_SHORT&&(mt=r.R16UI),J===r.UNSIGNED_INT&&(mt=r.R32UI),J===r.BYTE&&(mt=r.R8I),J===r.SHORT&&(mt=r.R16I),J===r.INT&&(mt=r.R32I)),C===r.RG&&(J===r.FLOAT&&(mt=r.RG32F),J===r.HALF_FLOAT&&(mt=r.RG16F),J===r.UNSIGNED_BYTE&&(mt=r.RG8)),C===r.RG_INTEGER&&(J===r.UNSIGNED_BYTE&&(mt=r.RG8UI),J===r.UNSIGNED_SHORT&&(mt=r.RG16UI),J===r.UNSIGNED_INT&&(mt=r.RG32UI),J===r.BYTE&&(mt=r.RG8I),J===r.SHORT&&(mt=r.RG16I),J===r.INT&&(mt=r.RG32I)),C===r.RGB_INTEGER&&(J===r.UNSIGNED_BYTE&&(mt=r.RGB8UI),J===r.UNSIGNED_SHORT&&(mt=r.RGB16UI),J===r.UNSIGNED_INT&&(mt=r.RGB32UI),J===r.BYTE&&(mt=r.RGB8I),J===r.SHORT&&(mt=r.RGB16I),J===r.INT&&(mt=r.RGB32I)),C===r.RGBA_INTEGER&&(J===r.UNSIGNED_BYTE&&(mt=r.RGBA8UI),J===r.UNSIGNED_SHORT&&(mt=r.RGBA16UI),J===r.UNSIGNED_INT&&(mt=r.RGBA32UI),J===r.BYTE&&(mt=r.RGBA8I),J===r.SHORT&&(mt=r.RGBA16I),J===r.INT&&(mt=r.RGBA32I)),C===r.RGB&&(J===r.UNSIGNED_INT_5_9_9_9_REV&&(mt=r.RGB9_E5),J===r.UNSIGNED_INT_10F_11F_11F_REV&&(mt=r.R11F_G11F_B10F)),C===r.RGBA){const te=bt?Bu:Le.getTransfer(xt);J===r.FLOAT&&(mt=r.RGBA32F),J===r.HALF_FLOAT&&(mt=r.RGBA16F),J===r.UNSIGNED_BYTE&&(mt=te===Ye?r.SRGB8_ALPHA8:r.RGBA8),J===r.UNSIGNED_SHORT_4_4_4_4&&(mt=r.RGBA4),J===r.UNSIGNED_SHORT_5_5_5_1&&(mt=r.RGB5_A1)}return(mt===r.R16F||mt===r.R32F||mt===r.RG16F||mt===r.RG32F||mt===r.RGBA16F||mt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),mt}function A(G,C){let J;return G?C===null||C===$i||C===bl?J=r.DEPTH24_STENCIL8:C===Zi?J=r.DEPTH32F_STENCIL8:C===El&&(J=r.DEPTH24_STENCIL8,ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===$i||C===bl?J=r.DEPTH_COMPONENT24:C===Zi?J=r.DEPTH_COMPONENT32F:C===El&&(J=r.DEPTH_COMPONENT16),J}function N(G,C){return S(G)===!0||G.isFramebufferTexture&&G.minFilter!==Pn&&G.minFilter!==Vn?Math.log2(Math.max(C.width,C.height))+1:G.mipmaps!==void 0&&G.mipmaps.length>0?G.mipmaps.length:G.isCompressedTexture&&Array.isArray(G.image)?C.mipmaps.length:1}function O(G){const C=G.target;C.removeEventListener("dispose",O),V(C),C.isVideoTexture&&_.delete(C)}function z(G){const C=G.target;C.removeEventListener("dispose",z),D(C)}function V(G){const C=a.get(G);if(C.__webglInit===void 0)return;const J=G.source,xt=v.get(J);if(xt){const bt=xt[C.__cacheKey];bt.usedTimes--,bt.usedTimes===0&&T(G),Object.keys(xt).length===0&&v.delete(J)}a.remove(G)}function T(G){const C=a.get(G);r.deleteTexture(C.__webglTexture);const J=G.source,xt=v.get(J);delete xt[C.__cacheKey],u.memory.textures--}function D(G){const C=a.get(G);if(G.depthTexture&&(G.depthTexture.dispose(),a.remove(G.depthTexture)),G.isWebGLCubeRenderTarget)for(let xt=0;xt<6;xt++){if(Array.isArray(C.__webglFramebuffer[xt]))for(let bt=0;bt<C.__webglFramebuffer[xt].length;bt++)r.deleteFramebuffer(C.__webglFramebuffer[xt][bt]);else r.deleteFramebuffer(C.__webglFramebuffer[xt]);C.__webglDepthbuffer&&r.deleteRenderbuffer(C.__webglDepthbuffer[xt])}else{if(Array.isArray(C.__webglFramebuffer))for(let xt=0;xt<C.__webglFramebuffer.length;xt++)r.deleteFramebuffer(C.__webglFramebuffer[xt]);else r.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&r.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&r.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let xt=0;xt<C.__webglColorRenderbuffer.length;xt++)C.__webglColorRenderbuffer[xt]&&r.deleteRenderbuffer(C.__webglColorRenderbuffer[xt]);C.__webglDepthRenderbuffer&&r.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const J=G.textures;for(let xt=0,bt=J.length;xt<bt;xt++){const mt=a.get(J[xt]);mt.__webglTexture&&(r.deleteTexture(mt.__webglTexture),u.memory.textures--),a.remove(J[xt])}a.remove(G)}let F=0;function H(){F=0}function j(){const G=F;return G>=o.maxTextures&&ce("WebGLTextures: Trying to use "+G+" texture units while this GPU supports only "+o.maxTextures),F+=1,G}function et(G){const C=[];return C.push(G.wrapS),C.push(G.wrapT),C.push(G.wrapR||0),C.push(G.magFilter),C.push(G.minFilter),C.push(G.anisotropy),C.push(G.internalFormat),C.push(G.format),C.push(G.type),C.push(G.generateMipmaps),C.push(G.premultiplyAlpha),C.push(G.flipY),C.push(G.unpackAlignment),C.push(G.colorSpace),C.join()}function rt(G,C){const J=a.get(G);if(G.isVideoTexture&&ge(G),G.isRenderTargetTexture===!1&&G.isExternalTexture!==!0&&G.version>0&&J.__version!==G.version){const xt=G.image;if(xt===null)ce("WebGLRenderer: Texture marked for update but no image data found.");else if(xt.complete===!1)ce("WebGLRenderer: Texture marked for update but image is incomplete");else{P(J,G,C);return}}else G.isExternalTexture&&(J.__webglTexture=G.sourceTexture?G.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,J.__webglTexture,r.TEXTURE0+C)}function B(G,C){const J=a.get(G);if(G.isRenderTargetTexture===!1&&G.version>0&&J.__version!==G.version){P(J,G,C);return}else G.isExternalTexture&&(J.__webglTexture=G.sourceTexture?G.sourceTexture:null);n.bindTexture(r.TEXTURE_2D_ARRAY,J.__webglTexture,r.TEXTURE0+C)}function k(G,C){const J=a.get(G);if(G.isRenderTargetTexture===!1&&G.version>0&&J.__version!==G.version){P(J,G,C);return}n.bindTexture(r.TEXTURE_3D,J.__webglTexture,r.TEXTURE0+C)}function q(G,C){const J=a.get(G);if(G.isCubeDepthTexture!==!0&&G.version>0&&J.__version!==G.version){X(J,G,C);return}n.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture,r.TEXTURE0+C)}const ft={[pp]:r.REPEAT,[ba]:r.CLAMP_TO_EDGE,[mp]:r.MIRRORED_REPEAT},vt={[Pn]:r.NEAREST,[U1]:r.NEAREST_MIPMAP_NEAREST,[jc]:r.NEAREST_MIPMAP_LINEAR,[Vn]:r.LINEAR,[pd]:r.LINEAR_MIPMAP_NEAREST,[Xs]:r.LINEAR_MIPMAP_LINEAR},I={[O1]:r.NEVER,[I1]:r.ALWAYS,[z1]:r.LESS,[vm]:r.LEQUAL,[P1]:r.EQUAL,[xm]:r.GEQUAL,[B1]:r.GREATER,[F1]:r.NOTEQUAL};function at(G,C){if(C.type===Zi&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===Vn||C.magFilter===pd||C.magFilter===jc||C.magFilter===Xs||C.minFilter===Vn||C.minFilter===pd||C.minFilter===jc||C.minFilter===Xs)&&ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(G,r.TEXTURE_WRAP_S,ft[C.wrapS]),r.texParameteri(G,r.TEXTURE_WRAP_T,ft[C.wrapT]),(G===r.TEXTURE_3D||G===r.TEXTURE_2D_ARRAY)&&r.texParameteri(G,r.TEXTURE_WRAP_R,ft[C.wrapR]),r.texParameteri(G,r.TEXTURE_MAG_FILTER,vt[C.magFilter]),r.texParameteri(G,r.TEXTURE_MIN_FILTER,vt[C.minFilter]),C.compareFunction&&(r.texParameteri(G,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(G,r.TEXTURE_COMPARE_FUNC,I[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Pn||C.minFilter!==jc&&C.minFilter!==Xs||C.type===Zi&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||a.get(C).__currentAnisotropy){const J=t.get("EXT_texture_filter_anisotropic");r.texParameterf(G,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,o.getMaxAnisotropy())),a.get(C).__currentAnisotropy=C.anisotropy}}}function gt(G,C){let J=!1;G.__webglInit===void 0&&(G.__webglInit=!0,C.addEventListener("dispose",O));const xt=C.source;let bt=v.get(xt);bt===void 0&&(bt={},v.set(xt,bt));const mt=et(C);if(mt!==G.__cacheKey){bt[mt]===void 0&&(bt[mt]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,J=!0),bt[mt].usedTimes++;const te=bt[G.__cacheKey];te!==void 0&&(bt[G.__cacheKey].usedTimes--,te.usedTimes===0&&T(C)),G.__cacheKey=mt,G.__webglTexture=bt[mt].texture}return J}function Rt(G,C,J){return Math.floor(Math.floor(G/J)/C)}function Lt(G,C,J,xt){const mt=G.updateRanges;if(mt.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,C.width,C.height,J,xt,C.data);else{mt.sort((At,wt)=>At.start-wt.start);let te=0;for(let At=1;At<mt.length;At++){const wt=mt[te],Xt=mt[At],Vt=wt.start+wt.count,Pt=Rt(Xt.start,C.width,4),_e=Rt(wt.start,C.width,4);Xt.start<=Vt+1&&Pt===_e&&Rt(Xt.start+Xt.count-1,C.width,4)===Pt?wt.count=Math.max(wt.count,Xt.start+Xt.count-wt.start):(++te,mt[te]=Xt)}mt.length=te+1;const zt=r.getParameter(r.UNPACK_ROW_LENGTH),Zt=r.getParameter(r.UNPACK_SKIP_PIXELS),le=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,C.width);for(let At=0,wt=mt.length;At<wt;At++){const Xt=mt[At],Vt=Math.floor(Xt.start/4),Pt=Math.ceil(Xt.count/4),_e=Vt%C.width,Q=Math.floor(Vt/C.width),It=Pt,Ct=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,_e),r.pixelStorei(r.UNPACK_SKIP_ROWS,Q),n.texSubImage2D(r.TEXTURE_2D,0,_e,Q,It,Ct,J,xt,C.data)}G.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,zt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Zt),r.pixelStorei(r.UNPACK_SKIP_ROWS,le)}}function P(G,C,J){let xt=r.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(xt=r.TEXTURE_2D_ARRAY),C.isData3DTexture&&(xt=r.TEXTURE_3D);const bt=gt(G,C),mt=C.source;n.bindTexture(xt,G.__webglTexture,r.TEXTURE0+J);const te=a.get(mt);if(mt.version!==te.__version||bt===!0){n.activeTexture(r.TEXTURE0+J);const zt=Le.getPrimaries(Le.workingColorSpace),Zt=C.colorSpace===ps?null:Le.getPrimaries(C.colorSpace),le=C.colorSpace===ps||zt===Zt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let At=b(C.image,!1,o.maxTextureSize);At=we(C,At);const wt=c.convert(C.format,C.colorSpace),Xt=c.convert(C.type);let Vt=w(C.internalFormat,wt,Xt,C.colorSpace,C.isVideoTexture);at(xt,C);let Pt;const _e=C.mipmaps,Q=C.isVideoTexture!==!0,It=te.__version===void 0||bt===!0,Ct=mt.dataReady,kt=N(C,At);if(C.isDepthTexture)Vt=A(C.format===Ws,C.type),It&&(Q?n.texStorage2D(r.TEXTURE_2D,1,Vt,At.width,At.height):n.texImage2D(r.TEXTURE_2D,0,Vt,At.width,At.height,0,wt,Xt,null));else if(C.isDataTexture)if(_e.length>0){Q&&It&&n.texStorage2D(r.TEXTURE_2D,kt,Vt,_e[0].width,_e[0].height);for(let Tt=0,Mt=_e.length;Tt<Mt;Tt++)Pt=_e[Tt],Q?Ct&&n.texSubImage2D(r.TEXTURE_2D,Tt,0,0,Pt.width,Pt.height,wt,Xt,Pt.data):n.texImage2D(r.TEXTURE_2D,Tt,Vt,Pt.width,Pt.height,0,wt,Xt,Pt.data);C.generateMipmaps=!1}else Q?(It&&n.texStorage2D(r.TEXTURE_2D,kt,Vt,At.width,At.height),Ct&&Lt(C,At,wt,Xt)):n.texImage2D(r.TEXTURE_2D,0,Vt,At.width,At.height,0,wt,Xt,At.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Q&&It&&n.texStorage3D(r.TEXTURE_2D_ARRAY,kt,Vt,_e[0].width,_e[0].height,At.depth);for(let Tt=0,Mt=_e.length;Tt<Mt;Tt++)if(Pt=_e[Tt],C.format!==Fi)if(wt!==null)if(Q){if(Ct)if(C.layerUpdates.size>0){const Ut=ix(Pt.width,Pt.height,C.format,C.type);for(const fe of C.layerUpdates){const Ve=Pt.data.subarray(fe*Ut/Pt.data.BYTES_PER_ELEMENT,(fe+1)*Ut/Pt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Tt,0,0,fe,Pt.width,Pt.height,1,wt,Ve)}C.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Tt,0,0,0,Pt.width,Pt.height,At.depth,wt,Pt.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Tt,Vt,Pt.width,Pt.height,At.depth,0,Pt.data,0,0);else ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Q?Ct&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,Tt,0,0,0,Pt.width,Pt.height,At.depth,wt,Xt,Pt.data):n.texImage3D(r.TEXTURE_2D_ARRAY,Tt,Vt,Pt.width,Pt.height,At.depth,0,wt,Xt,Pt.data)}else{Q&&It&&n.texStorage2D(r.TEXTURE_2D,kt,Vt,_e[0].width,_e[0].height);for(let Tt=0,Mt=_e.length;Tt<Mt;Tt++)Pt=_e[Tt],C.format!==Fi?wt!==null?Q?Ct&&n.compressedTexSubImage2D(r.TEXTURE_2D,Tt,0,0,Pt.width,Pt.height,wt,Pt.data):n.compressedTexImage2D(r.TEXTURE_2D,Tt,Vt,Pt.width,Pt.height,0,Pt.data):ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Q?Ct&&n.texSubImage2D(r.TEXTURE_2D,Tt,0,0,Pt.width,Pt.height,wt,Xt,Pt.data):n.texImage2D(r.TEXTURE_2D,Tt,Vt,Pt.width,Pt.height,0,wt,Xt,Pt.data)}else if(C.isDataArrayTexture)if(Q){if(It&&n.texStorage3D(r.TEXTURE_2D_ARRAY,kt,Vt,At.width,At.height,At.depth),Ct)if(C.layerUpdates.size>0){const Tt=ix(At.width,At.height,C.format,C.type);for(const Mt of C.layerUpdates){const Ut=At.data.subarray(Mt*Tt/At.data.BYTES_PER_ELEMENT,(Mt+1)*Tt/At.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Mt,At.width,At.height,1,wt,Xt,Ut)}C.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,wt,Xt,At.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,Vt,At.width,At.height,At.depth,0,wt,Xt,At.data);else if(C.isData3DTexture)Q?(It&&n.texStorage3D(r.TEXTURE_3D,kt,Vt,At.width,At.height,At.depth),Ct&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,wt,Xt,At.data)):n.texImage3D(r.TEXTURE_3D,0,Vt,At.width,At.height,At.depth,0,wt,Xt,At.data);else if(C.isFramebufferTexture){if(It)if(Q)n.texStorage2D(r.TEXTURE_2D,kt,Vt,At.width,At.height);else{let Tt=At.width,Mt=At.height;for(let Ut=0;Ut<kt;Ut++)n.texImage2D(r.TEXTURE_2D,Ut,Vt,Tt,Mt,0,wt,Xt,null),Tt>>=1,Mt>>=1}}else if(_e.length>0){if(Q&&It){const Tt=Jt(_e[0]);n.texStorage2D(r.TEXTURE_2D,kt,Vt,Tt.width,Tt.height)}for(let Tt=0,Mt=_e.length;Tt<Mt;Tt++)Pt=_e[Tt],Q?Ct&&n.texSubImage2D(r.TEXTURE_2D,Tt,0,0,wt,Xt,Pt):n.texImage2D(r.TEXTURE_2D,Tt,Vt,wt,Xt,Pt);C.generateMipmaps=!1}else if(Q){if(It){const Tt=Jt(At);n.texStorage2D(r.TEXTURE_2D,kt,Vt,Tt.width,Tt.height)}Ct&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,wt,Xt,At)}else n.texImage2D(r.TEXTURE_2D,0,Vt,wt,Xt,At);S(C)&&x(xt),te.__version=mt.version,C.onUpdate&&C.onUpdate(C)}G.__version=C.version}function X(G,C,J){if(C.image.length!==6)return;const xt=gt(G,C),bt=C.source;n.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+J);const mt=a.get(bt);if(bt.version!==mt.__version||xt===!0){n.activeTexture(r.TEXTURE0+J);const te=Le.getPrimaries(Le.workingColorSpace),zt=C.colorSpace===ps?null:Le.getPrimaries(C.colorSpace),Zt=C.colorSpace===ps||te===zt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);const le=C.isCompressedTexture||C.image[0].isCompressedTexture,At=C.image[0]&&C.image[0].isDataTexture,wt=[];for(let Mt=0;Mt<6;Mt++)!le&&!At?wt[Mt]=b(C.image[Mt],!0,o.maxCubemapSize):wt[Mt]=At?C.image[Mt].image:C.image[Mt],wt[Mt]=we(C,wt[Mt]);const Xt=wt[0],Vt=c.convert(C.format,C.colorSpace),Pt=c.convert(C.type),_e=w(C.internalFormat,Vt,Pt,C.colorSpace),Q=C.isVideoTexture!==!0,It=mt.__version===void 0||xt===!0,Ct=bt.dataReady;let kt=N(C,Xt);at(r.TEXTURE_CUBE_MAP,C);let Tt;if(le){Q&&It&&n.texStorage2D(r.TEXTURE_CUBE_MAP,kt,_e,Xt.width,Xt.height);for(let Mt=0;Mt<6;Mt++){Tt=wt[Mt].mipmaps;for(let Ut=0;Ut<Tt.length;Ut++){const fe=Tt[Ut];C.format!==Fi?Vt!==null?Q?Ct&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Ut,0,0,fe.width,fe.height,Vt,fe.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Ut,_e,fe.width,fe.height,0,fe.data):ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Q?Ct&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Ut,0,0,fe.width,fe.height,Vt,Pt,fe.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Ut,_e,fe.width,fe.height,0,Vt,Pt,fe.data)}}}else{if(Tt=C.mipmaps,Q&&It){Tt.length>0&&kt++;const Mt=Jt(wt[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,kt,_e,Mt.width,Mt.height)}for(let Mt=0;Mt<6;Mt++)if(At){Q?Ct&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,wt[Mt].width,wt[Mt].height,Vt,Pt,wt[Mt].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,_e,wt[Mt].width,wt[Mt].height,0,Vt,Pt,wt[Mt].data);for(let Ut=0;Ut<Tt.length;Ut++){const Ve=Tt[Ut].image[Mt].image;Q?Ct&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Ut+1,0,0,Ve.width,Ve.height,Vt,Pt,Ve.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Ut+1,_e,Ve.width,Ve.height,0,Vt,Pt,Ve.data)}}else{Q?Ct&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,Vt,Pt,wt[Mt]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,_e,Vt,Pt,wt[Mt]);for(let Ut=0;Ut<Tt.length;Ut++){const fe=Tt[Ut];Q?Ct&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Ut+1,0,0,Vt,Pt,fe.image[Mt]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Ut+1,_e,Vt,Pt,fe.image[Mt])}}}S(C)&&x(r.TEXTURE_CUBE_MAP),mt.__version=bt.version,C.onUpdate&&C.onUpdate(C)}G.__version=C.version}function it(G,C,J,xt,bt,mt){const te=c.convert(J.format,J.colorSpace),zt=c.convert(J.type),Zt=w(J.internalFormat,te,zt,J.colorSpace),le=a.get(C),At=a.get(J);if(At.__renderTarget=C,!le.__hasExternalTextures){const wt=Math.max(1,C.width>>mt),Xt=Math.max(1,C.height>>mt);bt===r.TEXTURE_3D||bt===r.TEXTURE_2D_ARRAY?n.texImage3D(bt,mt,Zt,wt,Xt,C.depth,0,te,zt,null):n.texImage2D(bt,mt,Zt,wt,Xt,0,te,zt,null)}n.bindFramebuffer(r.FRAMEBUFFER,G),Se(C)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,xt,bt,At.__webglTexture,0,W(C)):(bt===r.TEXTURE_2D||bt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&bt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,xt,bt,At.__webglTexture,mt),n.bindFramebuffer(r.FRAMEBUFFER,null)}function pt(G,C,J){if(r.bindRenderbuffer(r.RENDERBUFFER,G),C.depthBuffer){const xt=C.depthTexture,bt=xt&&xt.isDepthTexture?xt.type:null,mt=A(C.stencilBuffer,bt),te=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Se(C)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,W(C),mt,C.width,C.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,W(C),mt,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,mt,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,te,r.RENDERBUFFER,G)}else{const xt=C.textures;for(let bt=0;bt<xt.length;bt++){const mt=xt[bt],te=c.convert(mt.format,mt.colorSpace),zt=c.convert(mt.type),Zt=w(mt.internalFormat,te,zt,mt.colorSpace);Se(C)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,W(C),Zt,C.width,C.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,W(C),Zt,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,Zt,C.width,C.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ut(G,C,J){const xt=C.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(r.FRAMEBUFFER,G),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const bt=a.get(C.depthTexture);if(bt.__renderTarget=C,(!bt.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),xt){if(bt.__webglInit===void 0&&(bt.__webglInit=!0,C.depthTexture.addEventListener("dispose",O)),bt.__webglTexture===void 0){bt.__webglTexture=r.createTexture(),n.bindTexture(r.TEXTURE_CUBE_MAP,bt.__webglTexture),at(r.TEXTURE_CUBE_MAP,C.depthTexture);const le=c.convert(C.depthTexture.format),At=c.convert(C.depthTexture.type);let wt;C.depthTexture.format===Na?wt=r.DEPTH_COMPONENT24:C.depthTexture.format===Ws&&(wt=r.DEPTH24_STENCIL8);for(let Xt=0;Xt<6;Xt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Xt,0,wt,C.width,C.height,0,le,At,null)}}else rt(C.depthTexture,0);const mt=bt.__webglTexture,te=W(C),zt=xt?r.TEXTURE_CUBE_MAP_POSITIVE_X+J:r.TEXTURE_2D,Zt=C.depthTexture.format===Ws?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(C.depthTexture.format===Na)Se(C)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Zt,zt,mt,0,te):r.framebufferTexture2D(r.FRAMEBUFFER,Zt,zt,mt,0);else if(C.depthTexture.format===Ws)Se(C)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Zt,zt,mt,0,te):r.framebufferTexture2D(r.FRAMEBUFFER,Zt,zt,mt,0);else throw new Error("Unknown depthTexture format")}function Et(G){const C=a.get(G),J=G.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==G.depthTexture){const xt=G.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),xt){const bt=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,xt.removeEventListener("dispose",bt)};xt.addEventListener("dispose",bt),C.__depthDisposeCallback=bt}C.__boundDepthTexture=xt}if(G.depthTexture&&!C.__autoAllocateDepthBuffer)if(J)for(let xt=0;xt<6;xt++)ut(C.__webglFramebuffer[xt],G,xt);else{const xt=G.texture.mipmaps;xt&&xt.length>0?ut(C.__webglFramebuffer[0],G,0):ut(C.__webglFramebuffer,G,0)}else if(J){C.__webglDepthbuffer=[];for(let xt=0;xt<6;xt++)if(n.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer[xt]),C.__webglDepthbuffer[xt]===void 0)C.__webglDepthbuffer[xt]=r.createRenderbuffer(),pt(C.__webglDepthbuffer[xt],G,!1);else{const bt=G.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,mt=C.__webglDepthbuffer[xt];r.bindRenderbuffer(r.RENDERBUFFER,mt),r.framebufferRenderbuffer(r.FRAMEBUFFER,bt,r.RENDERBUFFER,mt)}}else{const xt=G.texture.mipmaps;if(xt&&xt.length>0?n.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=r.createRenderbuffer(),pt(C.__webglDepthbuffer,G,!1);else{const bt=G.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,mt=C.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,mt),r.framebufferRenderbuffer(r.FRAMEBUFFER,bt,r.RENDERBUFFER,mt)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function Nt(G,C,J){const xt=a.get(G);C!==void 0&&it(xt.__webglFramebuffer,G,G.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),J!==void 0&&Et(G)}function Ot(G){const C=G.texture,J=a.get(G),xt=a.get(C);G.addEventListener("dispose",z);const bt=G.textures,mt=G.isWebGLCubeRenderTarget===!0,te=bt.length>1;if(te||(xt.__webglTexture===void 0&&(xt.__webglTexture=r.createTexture()),xt.__version=C.version,u.memory.textures++),mt){J.__webglFramebuffer=[];for(let zt=0;zt<6;zt++)if(C.mipmaps&&C.mipmaps.length>0){J.__webglFramebuffer[zt]=[];for(let Zt=0;Zt<C.mipmaps.length;Zt++)J.__webglFramebuffer[zt][Zt]=r.createFramebuffer()}else J.__webglFramebuffer[zt]=r.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){J.__webglFramebuffer=[];for(let zt=0;zt<C.mipmaps.length;zt++)J.__webglFramebuffer[zt]=r.createFramebuffer()}else J.__webglFramebuffer=r.createFramebuffer();if(te)for(let zt=0,Zt=bt.length;zt<Zt;zt++){const le=a.get(bt[zt]);le.__webglTexture===void 0&&(le.__webglTexture=r.createTexture(),u.memory.textures++)}if(G.samples>0&&Se(G)===!1){J.__webglMultisampledFramebuffer=r.createFramebuffer(),J.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let zt=0;zt<bt.length;zt++){const Zt=bt[zt];J.__webglColorRenderbuffer[zt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,J.__webglColorRenderbuffer[zt]);const le=c.convert(Zt.format,Zt.colorSpace),At=c.convert(Zt.type),wt=w(Zt.internalFormat,le,At,Zt.colorSpace,G.isXRRenderTarget===!0),Xt=W(G);r.renderbufferStorageMultisample(r.RENDERBUFFER,Xt,wt,G.width,G.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+zt,r.RENDERBUFFER,J.__webglColorRenderbuffer[zt])}r.bindRenderbuffer(r.RENDERBUFFER,null),G.depthBuffer&&(J.__webglDepthRenderbuffer=r.createRenderbuffer(),pt(J.__webglDepthRenderbuffer,G,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(mt){n.bindTexture(r.TEXTURE_CUBE_MAP,xt.__webglTexture),at(r.TEXTURE_CUBE_MAP,C);for(let zt=0;zt<6;zt++)if(C.mipmaps&&C.mipmaps.length>0)for(let Zt=0;Zt<C.mipmaps.length;Zt++)it(J.__webglFramebuffer[zt][Zt],G,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+zt,Zt);else it(J.__webglFramebuffer[zt],G,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0);S(C)&&x(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(te){for(let zt=0,Zt=bt.length;zt<Zt;zt++){const le=bt[zt],At=a.get(le);let wt=r.TEXTURE_2D;(G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(wt=G.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(wt,At.__webglTexture),at(wt,le),it(J.__webglFramebuffer,G,le,r.COLOR_ATTACHMENT0+zt,wt,0),S(le)&&x(wt)}n.unbindTexture()}else{let zt=r.TEXTURE_2D;if((G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(zt=G.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(zt,xt.__webglTexture),at(zt,C),C.mipmaps&&C.mipmaps.length>0)for(let Zt=0;Zt<C.mipmaps.length;Zt++)it(J.__webglFramebuffer[Zt],G,C,r.COLOR_ATTACHMENT0,zt,Zt);else it(J.__webglFramebuffer,G,C,r.COLOR_ATTACHMENT0,zt,0);S(C)&&x(zt),n.unbindTexture()}G.depthBuffer&&Et(G)}function Ft(G){const C=G.textures;for(let J=0,xt=C.length;J<xt;J++){const bt=C[J];if(S(bt)){const mt=R(G),te=a.get(bt).__webglTexture;n.bindTexture(mt,te),x(mt),n.unbindTexture()}}}const ee=[],Dt=[];function ue(G){if(G.samples>0){if(Se(G)===!1){const C=G.textures,J=G.width,xt=G.height;let bt=r.COLOR_BUFFER_BIT;const mt=G.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,te=a.get(G),zt=C.length>1;if(zt)for(let le=0;le<C.length;le++)n.bindFramebuffer(r.FRAMEBUFFER,te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,te.__webglMultisampledFramebuffer);const Zt=G.texture.mipmaps;Zt&&Zt.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,te.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,te.__webglFramebuffer);for(let le=0;le<C.length;le++){if(G.resolveDepthBuffer&&(G.depthBuffer&&(bt|=r.DEPTH_BUFFER_BIT),G.stencilBuffer&&G.resolveStencilBuffer&&(bt|=r.STENCIL_BUFFER_BIT)),zt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,te.__webglColorRenderbuffer[le]);const At=a.get(C[le]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,At,0)}r.blitFramebuffer(0,0,J,xt,0,0,J,xt,bt,r.NEAREST),p===!0&&(ee.length=0,Dt.length=0,ee.push(r.COLOR_ATTACHMENT0+le),G.depthBuffer&&G.resolveDepthBuffer===!1&&(ee.push(mt),Dt.push(mt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Dt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ee))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),zt)for(let le=0;le<C.length;le++){n.bindFramebuffer(r.FRAMEBUFFER,te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,te.__webglColorRenderbuffer[le]);const At=a.get(C[le]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.TEXTURE_2D,At,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,te.__webglMultisampledFramebuffer)}else if(G.depthBuffer&&G.resolveDepthBuffer===!1&&p){const C=G.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[C])}}}function W(G){return Math.min(o.maxSamples,G.samples)}function Se(G){const C=a.get(G);return G.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function ge(G){const C=u.render.frame;_.get(G)!==C&&(_.set(G,C),G.update())}function we(G,C){const J=G.colorSpace,xt=G.format,bt=G.type;return G.isCompressedTexture===!0||G.isVideoTexture===!0||J!==so&&J!==ps&&(Le.getTransfer(J)===Ye?(xt!==Fi||bt!==di)&&ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ue("WebGLTextures: Unsupported texture color space:",J)),C}function Jt(G){return typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement?(d.width=G.naturalWidth||G.width,d.height=G.naturalHeight||G.height):typeof VideoFrame<"u"&&G instanceof VideoFrame?(d.width=G.displayWidth,d.height=G.displayHeight):(d.width=G.width,d.height=G.height),d}this.allocateTextureUnit=j,this.resetTextureUnits=H,this.setTexture2D=rt,this.setTexture2DArray=B,this.setTexture3D=k,this.setTextureCube=q,this.rebindTextures=Nt,this.setupRenderTarget=Ot,this.updateRenderTargetMipmap=Ft,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=it,this.useMultisampledRTT=Se,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function j3(r,t){function n(a,o=ps){let c;const u=Le.getTransfer(o);if(a===di)return r.UNSIGNED_BYTE;if(a===dm)return r.UNSIGNED_SHORT_4_4_4_4;if(a===pm)return r.UNSIGNED_SHORT_5_5_5_1;if(a===ty)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===ey)return r.UNSIGNED_INT_10F_11F_11F_REV;if(a===Jx)return r.BYTE;if(a===$x)return r.SHORT;if(a===El)return r.UNSIGNED_SHORT;if(a===hm)return r.INT;if(a===$i)return r.UNSIGNED_INT;if(a===Zi)return r.FLOAT;if(a===La)return r.HALF_FLOAT;if(a===ny)return r.ALPHA;if(a===iy)return r.RGB;if(a===Fi)return r.RGBA;if(a===Na)return r.DEPTH_COMPONENT;if(a===Ws)return r.DEPTH_STENCIL;if(a===ay)return r.RED;if(a===mm)return r.RED_INTEGER;if(a===ao)return r.RG;if(a===gm)return r.RG_INTEGER;if(a===_m)return r.RGBA_INTEGER;if(a===Cu||a===Du||a===Uu||a===Lu)if(u===Ye)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Cu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Du)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Uu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Lu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Cu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Du)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Uu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Lu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===gp||a===_p||a===vp||a===xp)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===gp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===_p)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===vp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===xp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===yp||a===Sp||a===Mp||a===Ep||a===bp||a===Tp||a===Ap)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(a===yp||a===Sp)return u===Ye?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Mp)return u===Ye?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(a===Ep)return c.COMPRESSED_R11_EAC;if(a===bp)return c.COMPRESSED_SIGNED_R11_EAC;if(a===Tp)return c.COMPRESSED_RG11_EAC;if(a===Ap)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===Rp||a===wp||a===Cp||a===Dp||a===Up||a===Lp||a===Np||a===Op||a===zp||a===Pp||a===Bp||a===Fp||a===Ip||a===Hp)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Rp)return u===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===wp)return u===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Cp)return u===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Dp)return u===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Up)return u===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Lp)return u===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Np)return u===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Op)return u===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===zp)return u===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Pp)return u===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Bp)return u===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Fp)return u===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Ip)return u===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Hp)return u===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Gp||a===Vp||a===kp)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(a===Gp)return u===Ye?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Vp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===kp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Xp||a===Wp||a===Yp||a===qp)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(a===Xp)return c.COMPRESSED_RED_RGTC1_EXT;if(a===Wp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Yp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===qp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===bl?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:n}}const Z3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,K3=`
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

}`;class Q3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const a=new yy(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new Ai({vertexShader:Z3,fragmentShader:K3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new $e(new Ol(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class J3 extends uo{constructor(t,n){super();const a=this;let o=null,c=1,u=null,f="local-floor",p=1,d=null,_=null,g=null,v=null,y=null,M=null;const b=typeof XRWebGLBinding<"u",S=new Q3,x={},R=n.getContextAttributes();let w=null,A=null;const N=[],O=[],z=new de;let V=null;const T=new hi;T.viewport=new un;const D=new hi;D.viewport=new un;const F=[T,D],H=new lb;let j=null,et=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(P){let X=N[P];return X===void 0&&(X=new zd,N[P]=X),X.getTargetRaySpace()},this.getControllerGrip=function(P){let X=N[P];return X===void 0&&(X=new zd,N[P]=X),X.getGripSpace()},this.getHand=function(P){let X=N[P];return X===void 0&&(X=new zd,N[P]=X),X.getHandSpace()};function rt(P){const X=O.indexOf(P.inputSource);if(X===-1)return;const it=N[X];it!==void 0&&(it.update(P.inputSource,P.frame,d||u),it.dispatchEvent({type:P.type,data:P.inputSource}))}function B(){o.removeEventListener("select",rt),o.removeEventListener("selectstart",rt),o.removeEventListener("selectend",rt),o.removeEventListener("squeeze",rt),o.removeEventListener("squeezestart",rt),o.removeEventListener("squeezeend",rt),o.removeEventListener("end",B),o.removeEventListener("inputsourceschange",k);for(let P=0;P<N.length;P++){const X=O[P];X!==null&&(O[P]=null,N[P].disconnect(X))}j=null,et=null,S.reset();for(const P in x)delete x[P];t.setRenderTarget(w),y=null,v=null,g=null,o=null,A=null,Lt.stop(),a.isPresenting=!1,t.setPixelRatio(V),t.setSize(z.width,z.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(P){c=P,a.isPresenting===!0&&ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(P){f=P,a.isPresenting===!0&&ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(P){d=P},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return g===null&&b&&(g=new XRWebGLBinding(o,n)),g},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(P){if(o=P,o!==null){if(w=t.getRenderTarget(),o.addEventListener("select",rt),o.addEventListener("selectstart",rt),o.addEventListener("selectend",rt),o.addEventListener("squeeze",rt),o.addEventListener("squeezestart",rt),o.addEventListener("squeezeend",rt),o.addEventListener("end",B),o.addEventListener("inputsourceschange",k),R.xrCompatible!==!0&&await n.makeXRCompatible(),V=t.getPixelRatio(),t.getSize(z),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let it=null,pt=null,ut=null;R.depth&&(ut=R.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,it=R.stencil?Ws:Na,pt=R.stencil?bl:$i);const Et={colorFormat:n.RGBA8,depthFormat:ut,scaleFactor:c};g=this.getBinding(),v=g.createProjectionLayer(Et),o.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),A=new Ji(v.textureWidth,v.textureHeight,{format:Fi,type:di,depthTexture:new Rl(v.textureWidth,v.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:R.stencil,colorSpace:t.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const it={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(o,n,it),o.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),A=new Ji(y.framebufferWidth,y.framebufferHeight,{format:Fi,type:di,colorSpace:t.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(p),d=null,u=await o.requestReferenceSpace(f),Lt.setContext(o),Lt.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function k(P){for(let X=0;X<P.removed.length;X++){const it=P.removed[X],pt=O.indexOf(it);pt>=0&&(O[pt]=null,N[pt].disconnect(it))}for(let X=0;X<P.added.length;X++){const it=P.added[X];let pt=O.indexOf(it);if(pt===-1){for(let Et=0;Et<N.length;Et++)if(Et>=O.length){O.push(it),pt=Et;break}else if(O[Et]===null){O[Et]=it,pt=Et;break}if(pt===-1)break}const ut=N[pt];ut&&ut.connect(it)}}const q=new Z,ft=new Z;function vt(P,X,it){q.setFromMatrixPosition(X.matrixWorld),ft.setFromMatrixPosition(it.matrixWorld);const pt=q.distanceTo(ft),ut=X.projectionMatrix.elements,Et=it.projectionMatrix.elements,Nt=ut[14]/(ut[10]-1),Ot=ut[14]/(ut[10]+1),Ft=(ut[9]+1)/ut[5],ee=(ut[9]-1)/ut[5],Dt=(ut[8]-1)/ut[0],ue=(Et[8]+1)/Et[0],W=Nt*Dt,Se=Nt*ue,ge=pt/(-Dt+ue),we=ge*-Dt;if(X.matrixWorld.decompose(P.position,P.quaternion,P.scale),P.translateX(we),P.translateZ(ge),P.matrixWorld.compose(P.position,P.quaternion,P.scale),P.matrixWorldInverse.copy(P.matrixWorld).invert(),ut[10]===-1)P.projectionMatrix.copy(X.projectionMatrix),P.projectionMatrixInverse.copy(X.projectionMatrixInverse);else{const Jt=Nt+ge,G=Ot+ge,C=W-we,J=Se+(pt-we),xt=Ft*Ot/G*Jt,bt=ee*Ot/G*Jt;P.projectionMatrix.makePerspective(C,J,xt,bt,Jt,G),P.projectionMatrixInverse.copy(P.projectionMatrix).invert()}}function I(P,X){X===null?P.matrixWorld.copy(P.matrix):P.matrixWorld.multiplyMatrices(X.matrixWorld,P.matrix),P.matrixWorldInverse.copy(P.matrixWorld).invert()}this.updateCamera=function(P){if(o===null)return;let X=P.near,it=P.far;S.texture!==null&&(S.depthNear>0&&(X=S.depthNear),S.depthFar>0&&(it=S.depthFar)),H.near=D.near=T.near=X,H.far=D.far=T.far=it,(j!==H.near||et!==H.far)&&(o.updateRenderState({depthNear:H.near,depthFar:H.far}),j=H.near,et=H.far),H.layers.mask=P.layers.mask|6,T.layers.mask=H.layers.mask&3,D.layers.mask=H.layers.mask&5;const pt=P.parent,ut=H.cameras;I(H,pt);for(let Et=0;Et<ut.length;Et++)I(ut[Et],pt);ut.length===2?vt(H,T,D):H.projectionMatrix.copy(T.projectionMatrix),at(P,H,pt)};function at(P,X,it){it===null?P.matrix.copy(X.matrixWorld):(P.matrix.copy(it.matrixWorld),P.matrix.invert(),P.matrix.multiply(X.matrixWorld)),P.matrix.decompose(P.position,P.quaternion,P.scale),P.updateMatrixWorld(!0),P.projectionMatrix.copy(X.projectionMatrix),P.projectionMatrixInverse.copy(X.projectionMatrixInverse),P.isPerspectiveCamera&&(P.fov=Al*2*Math.atan(1/P.projectionMatrix.elements[5]),P.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(v===null&&y===null))return p},this.setFoveation=function(P){p=P,v!==null&&(v.fixedFoveation=P),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=P)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(H)},this.getCameraTexture=function(P){return x[P]};let gt=null;function Rt(P,X){if(_=X.getViewerPose(d||u),M=X,_!==null){const it=_.views;y!==null&&(t.setRenderTargetFramebuffer(A,y.framebuffer),t.setRenderTarget(A));let pt=!1;it.length!==H.cameras.length&&(H.cameras.length=0,pt=!0);for(let Ot=0;Ot<it.length;Ot++){const Ft=it[Ot];let ee=null;if(y!==null)ee=y.getViewport(Ft);else{const ue=g.getViewSubImage(v,Ft);ee=ue.viewport,Ot===0&&(t.setRenderTargetTextures(A,ue.colorTexture,ue.depthStencilTexture),t.setRenderTarget(A))}let Dt=F[Ot];Dt===void 0&&(Dt=new hi,Dt.layers.enable(Ot),Dt.viewport=new un,F[Ot]=Dt),Dt.matrix.fromArray(Ft.transform.matrix),Dt.matrix.decompose(Dt.position,Dt.quaternion,Dt.scale),Dt.projectionMatrix.fromArray(Ft.projectionMatrix),Dt.projectionMatrixInverse.copy(Dt.projectionMatrix).invert(),Dt.viewport.set(ee.x,ee.y,ee.width,ee.height),Ot===0&&(H.matrix.copy(Dt.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),pt===!0&&H.cameras.push(Dt)}const ut=o.enabledFeatures;if(ut&&ut.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&b){g=a.getBinding();const Ot=g.getDepthInformation(it[0]);Ot&&Ot.isValid&&Ot.texture&&S.init(Ot,o.renderState)}if(ut&&ut.includes("camera-access")&&b){t.state.unbindTexture(),g=a.getBinding();for(let Ot=0;Ot<it.length;Ot++){const Ft=it[Ot].camera;if(Ft){let ee=x[Ft];ee||(ee=new yy,x[Ft]=ee);const Dt=g.getCameraImage(Ft);ee.sourceTexture=Dt}}}}for(let it=0;it<N.length;it++){const pt=O[it],ut=N[it];pt!==null&&ut!==void 0&&ut.update(pt,X,d||u)}gt&&gt(P,X),X.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:X}),M=null}const Lt=new Ry;Lt.setAnimationLoop(Rt),this.setAnimationLoop=function(P){gt=P},this.dispose=function(){}}}const Is=new ta,$3=new nn;function tR(r,t){function n(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function a(S,x){x.color.getRGB(S.fogColor.value,dy(r)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function o(S,x,R,w,A){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(S,x):x.isMeshToonMaterial?(c(S,x),g(S,x)):x.isMeshPhongMaterial?(c(S,x),_(S,x)):x.isMeshStandardMaterial?(c(S,x),v(S,x),x.isMeshPhysicalMaterial&&y(S,x,A)):x.isMeshMatcapMaterial?(c(S,x),M(S,x)):x.isMeshDepthMaterial?c(S,x):x.isMeshDistanceMaterial?(c(S,x),b(S,x)):x.isMeshNormalMaterial?c(S,x):x.isLineBasicMaterial?(u(S,x),x.isLineDashedMaterial&&f(S,x)):x.isPointsMaterial?p(S,x,R,w):x.isSpriteMaterial?d(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,n(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===Zn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,n(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===Zn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,n(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,n(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const R=t.get(x),w=R.envMap,A=R.envMapRotation;w&&(S.envMap.value=w,Is.copy(A),Is.x*=-1,Is.y*=-1,Is.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Is.y*=-1,Is.z*=-1),S.envMapRotation.value.setFromMatrix4($3.makeRotationFromEuler(Is)),S.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,S.aoMapTransform))}function u(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform))}function f(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function p(S,x,R,w){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*R,S.scale.value=w*.5,x.map&&(S.map.value=x.map,n(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function d(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function _(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function g(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function v(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,R){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Zn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=R.texture,S.transmissionSamplerSize.value.set(R.width,R.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,x){x.matcap&&(S.matcap.value=x.matcap)}function b(S,x){const R=t.get(x).light;S.referencePosition.value.setFromMatrixPosition(R.matrixWorld),S.nearDistance.value=R.shadow.camera.near,S.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function eR(r,t,n,a){let o={},c={},u=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(R,w){const A=w.program;a.uniformBlockBinding(R,A)}function d(R,w){let A=o[R.id];A===void 0&&(M(R),A=_(R),o[R.id]=A,R.addEventListener("dispose",S));const N=w.program;a.updateUBOMapping(R,N);const O=t.render.frame;c[R.id]!==O&&(v(R),c[R.id]=O)}function _(R){const w=g();R.__bindingPointIndex=w;const A=r.createBuffer(),N=R.__size,O=R.usage;return r.bindBuffer(r.UNIFORM_BUFFER,A),r.bufferData(r.UNIFORM_BUFFER,N,O),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,w,A),A}function g(){for(let R=0;R<f;R++)if(u.indexOf(R)===-1)return u.push(R),R;return Ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(R){const w=o[R.id],A=R.uniforms,N=R.__cache;r.bindBuffer(r.UNIFORM_BUFFER,w);for(let O=0,z=A.length;O<z;O++){const V=Array.isArray(A[O])?A[O]:[A[O]];for(let T=0,D=V.length;T<D;T++){const F=V[T];if(y(F,O,T,N)===!0){const H=F.__offset,j=Array.isArray(F.value)?F.value:[F.value];let et=0;for(let rt=0;rt<j.length;rt++){const B=j[rt],k=b(B);typeof B=="number"||typeof B=="boolean"?(F.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,H+et,F.__data)):B.isMatrix3?(F.__data[0]=B.elements[0],F.__data[1]=B.elements[1],F.__data[2]=B.elements[2],F.__data[3]=0,F.__data[4]=B.elements[3],F.__data[5]=B.elements[4],F.__data[6]=B.elements[5],F.__data[7]=0,F.__data[8]=B.elements[6],F.__data[9]=B.elements[7],F.__data[10]=B.elements[8],F.__data[11]=0):(B.toArray(F.__data,et),et+=k.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,H,F.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(R,w,A,N){const O=R.value,z=w+"_"+A;if(N[z]===void 0)return typeof O=="number"||typeof O=="boolean"?N[z]=O:N[z]=O.clone(),!0;{const V=N[z];if(typeof O=="number"||typeof O=="boolean"){if(V!==O)return N[z]=O,!0}else if(V.equals(O)===!1)return V.copy(O),!0}return!1}function M(R){const w=R.uniforms;let A=0;const N=16;for(let z=0,V=w.length;z<V;z++){const T=Array.isArray(w[z])?w[z]:[w[z]];for(let D=0,F=T.length;D<F;D++){const H=T[D],j=Array.isArray(H.value)?H.value:[H.value];for(let et=0,rt=j.length;et<rt;et++){const B=j[et],k=b(B),q=A%N,ft=q%k.boundary,vt=q+ft;A+=ft,vt!==0&&N-vt<k.storage&&(A+=N-vt),H.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=A,A+=k.storage}}}const O=A%N;return O>0&&(A+=N-O),R.__size=A,R.__cache={},this}function b(R){const w={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(w.boundary=4,w.storage=4):R.isVector2?(w.boundary=8,w.storage=8):R.isVector3||R.isColor?(w.boundary=16,w.storage=12):R.isVector4?(w.boundary=16,w.storage=16):R.isMatrix3?(w.boundary=48,w.storage=48):R.isMatrix4?(w.boundary=64,w.storage=64):R.isTexture?ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ce("WebGLRenderer: Unsupported uniform value type.",R),w}function S(R){const w=R.target;w.removeEventListener("dispose",S);const A=u.indexOf(w.__bindingPointIndex);u.splice(A,1),r.deleteBuffer(o[w.id]),delete o[w.id],delete c[w.id]}function x(){for(const R in o)r.deleteBuffer(o[R]);u=[],o={},c={}}return{bind:p,update:d,dispose:x}}const nR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Wi=null;function iR(){return Wi===null&&(Wi=new CE(nR,16,16,ao,La),Wi.name="DFG_LUT",Wi.minFilter=Vn,Wi.magFilter=Vn,Wi.wrapS=ba,Wi.wrapT=ba,Wi.generateMipmaps=!1,Wi.needsUpdate=!0),Wi}class Ly{constructor(t={}){const{canvas:n=H1(),context:a=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1,outputBufferType:y=di}=t;this.isWebGLRenderer=!0;let M;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=a.getContextAttributes().alpha}else M=u;const b=y,S=new Set([_m,gm,mm]),x=new Set([di,$i,El,bl,dm,pm]),R=new Uint32Array(4),w=new Int32Array(4);let A=null,N=null;const O=[],z=[];let V=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let D=!1;this._outputColorSpace=fi;let F=0,H=0,j=null,et=-1,rt=null;const B=new un,k=new un;let q=null;const ft=new ie(0);let vt=0,I=n.width,at=n.height,gt=1,Rt=null,Lt=null;const P=new un(0,0,I,at),X=new un(0,0,I,at);let it=!1;const pt=new Em;let ut=!1,Et=!1;const Nt=new nn,Ot=new Z,Ft=new un,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Dt=!1;function ue(){return j===null?gt:1}let W=a;function Se(L,$){return n.getContext(L,$)}try{const L={alpha:!0,depth:o,stencil:c,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${cm}`),n.addEventListener("webglcontextlost",fe,!1),n.addEventListener("webglcontextrestored",Ve,!1),n.addEventListener("webglcontextcreationerror",De,!1),W===null){const $="webgl2";if(W=Se($,L),W===null)throw Se($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw Ue("WebGLRenderer: "+L.message),L}let ge,we,Jt,G,C,J,xt,bt,mt,te,zt,Zt,le,At,wt,Xt,Vt,Pt,_e,Q,It,Ct,kt,Tt;function Mt(){ge=new i2(W),ge.init(),Ct=new j3(W,ge),we=new jA(W,ge,t,Ct),Jt=new Y3(W,ge),we.reversedDepthBuffer&&v&&Jt.buffers.depth.setReversed(!0),G=new r2(W),C=new U3,J=new q3(W,ge,Jt,C,we,Ct,G),xt=new KA(T),bt=new n2(T),mt=new ub(W),kt=new YA(W,mt),te=new a2(W,mt,G,kt),zt=new l2(W,te,mt,G),_e=new o2(W,we,J),Xt=new ZA(C),Zt=new D3(T,xt,bt,ge,we,kt,Xt),le=new tR(T,C),At=new N3,wt=new I3(ge),Pt=new WA(T,xt,bt,Jt,zt,M,p),Vt=new X3(T,zt,we),Tt=new eR(W,G,we,Jt),Q=new qA(W,ge,G),It=new s2(W,ge,G),G.programs=Zt.programs,T.capabilities=we,T.extensions=ge,T.properties=C,T.renderLists=At,T.shadowMap=Vt,T.state=Jt,T.info=G}Mt(),b!==di&&(V=new u2(b,n.width,n.height,o,c));const Ut=new J3(T,W);this.xr=Ut,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const L=ge.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=ge.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(L){L!==void 0&&(gt=L,this.setSize(I,at,!1))},this.getSize=function(L){return L.set(I,at)},this.setSize=function(L,$,ht=!0){if(Ut.isPresenting){ce("WebGLRenderer: Can't change size while VR device is presenting.");return}I=L,at=$,n.width=Math.floor(L*gt),n.height=Math.floor($*gt),ht===!0&&(n.style.width=L+"px",n.style.height=$+"px"),V!==null&&V.setSize(n.width,n.height),this.setViewport(0,0,L,$)},this.getDrawingBufferSize=function(L){return L.set(I*gt,at*gt).floor()},this.setDrawingBufferSize=function(L,$,ht){I=L,at=$,gt=ht,n.width=Math.floor(L*ht),n.height=Math.floor($*ht),this.setViewport(0,0,L,$)},this.setEffects=function(L){if(b===di){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let $=0;$<L.length;$++)if(L[$].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}V.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(B)},this.getViewport=function(L){return L.copy(P)},this.setViewport=function(L,$,ht,lt){L.isVector4?P.set(L.x,L.y,L.z,L.w):P.set(L,$,ht,lt),Jt.viewport(B.copy(P).multiplyScalar(gt).round())},this.getScissor=function(L){return L.copy(X)},this.setScissor=function(L,$,ht,lt){L.isVector4?X.set(L.x,L.y,L.z,L.w):X.set(L,$,ht,lt),Jt.scissor(k.copy(X).multiplyScalar(gt).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(L){Jt.setScissorTest(it=L)},this.setOpaqueSort=function(L){Rt=L},this.setTransparentSort=function(L){Lt=L},this.getClearColor=function(L){return L.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor(...arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha(...arguments)},this.clear=function(L=!0,$=!0,ht=!0){let lt=0;if(L){let nt=!1;if(j!==null){const Bt=j.texture.format;nt=S.has(Bt)}if(nt){const Bt=j.texture.type,Wt=x.has(Bt),Ht=Pt.getClearColor(),qt=Pt.getClearAlpha(),Kt=Ht.r,se=Ht.g,Qt=Ht.b;Wt?(R[0]=Kt,R[1]=se,R[2]=Qt,R[3]=qt,W.clearBufferuiv(W.COLOR,0,R)):(w[0]=Kt,w[1]=se,w[2]=Qt,w[3]=qt,W.clearBufferiv(W.COLOR,0,w))}else lt|=W.COLOR_BUFFER_BIT}$&&(lt|=W.DEPTH_BUFFER_BIT),ht&&(lt|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",fe,!1),n.removeEventListener("webglcontextrestored",Ve,!1),n.removeEventListener("webglcontextcreationerror",De,!1),Pt.dispose(),At.dispose(),wt.dispose(),C.dispose(),xt.dispose(),bt.dispose(),zt.dispose(),kt.dispose(),Tt.dispose(),Zt.dispose(),Ut.dispose(),Ut.removeEventListener("sessionstart",Ks),Ut.removeEventListener("sessionend",mo),Hi.stop()};function fe(L){L.preventDefault(),Hu("WebGLRenderer: Context Lost."),D=!0}function Ve(){Hu("WebGLRenderer: Context Restored."),D=!1;const L=G.autoReset,$=Vt.enabled,ht=Vt.autoUpdate,lt=Vt.needsUpdate,nt=Vt.type;Mt(),G.autoReset=L,Vt.enabled=$,Vt.autoUpdate=ht,Vt.needsUpdate=lt,Vt.type=nt}function De(L){Ue("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Bn(L){const $=L.target;$.removeEventListener("dispose",Bn),Ri($)}function Ri(L){Bl(L),C.remove(L)}function Bl(L){const $=C.get(L).programs;$!==void 0&&($.forEach(function(ht){Zt.releaseProgram(ht)}),L.isShaderMaterial&&Zt.releaseShaderCache(L))}this.renderBufferDirect=function(L,$,ht,lt,nt,Bt){$===null&&($=ee);const Wt=nt.isMesh&&nt.matrixWorld.determinant()<0,Ht=gs(L,$,ht,lt,nt);Jt.setMaterial(lt,Wt);let qt=ht.index,Kt=1;if(lt.wireframe===!0){if(qt=te.getWireframeAttribute(ht),qt===void 0)return;Kt=2}const se=ht.drawRange,Qt=ht.attributes.position;let re=se.start*Kt,Be=(se.start+se.count)*Kt;Bt!==null&&(re=Math.max(re,Bt.start*Kt),Be=Math.min(Be,(Bt.start+Bt.count)*Kt)),qt!==null?(re=Math.max(re,0),Be=Math.min(Be,qt.count)):Qt!=null&&(re=Math.max(re,0),Be=Math.min(Be,Qt.count));const sn=Be-re;if(sn<0||sn===1/0)return;kt.setup(nt,lt,Ht,ht,qt);let Je,Ge=Q;if(qt!==null&&(Je=mt.get(qt),Ge=It,Ge.setIndex(Je)),nt.isMesh)lt.wireframe===!0?(Jt.setLineWidth(lt.wireframeLinewidth*ue()),Ge.setMode(W.LINES)):Ge.setMode(W.TRIANGLES);else if(nt.isLine){let ne=lt.linewidth;ne===void 0&&(ne=1),Jt.setLineWidth(ne*ue()),nt.isLineSegments?Ge.setMode(W.LINES):nt.isLineLoop?Ge.setMode(W.LINE_LOOP):Ge.setMode(W.LINE_STRIP)}else nt.isPoints?Ge.setMode(W.POINTS):nt.isSprite&&Ge.setMode(W.TRIANGLES);if(nt.isBatchedMesh)if(nt._multiDrawInstances!==null)Tl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ge.renderMultiDrawInstances(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount,nt._multiDrawInstances);else if(ge.get("WEBGL_multi_draw"))Ge.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{const ne=nt._multiDrawStarts,Fe=nt._multiDrawCounts,he=nt._multiDrawCount,Rn=qt?mt.get(qt).bytesPerElement:1,ea=C.get(lt).currentProgram.getUniforms();for(let wn=0;wn<he;wn++)ea.setValue(W,"_gl_DrawID",wn),Ge.render(ne[wn]/Rn,Fe[wn])}else if(nt.isInstancedMesh)Ge.renderInstances(re,sn,nt.count);else if(ht.isInstancedBufferGeometry){const ne=ht._maxInstanceCount!==void 0?ht._maxInstanceCount:1/0,Fe=Math.min(ht.instanceCount,ne);Ge.renderInstances(re,sn,Fe)}else Ge.render(re,sn)};function ho(L,$,ht){L.transparent===!0&&L.side===Pi&&L.forceSinglePass===!1?(L.side=Zn,L.needsUpdate=!0,Js(L,$,ht),L.side=Ua,L.needsUpdate=!0,Js(L,$,ht),L.side=Pi):Js(L,$,ht)}this.compile=function(L,$,ht=null){ht===null&&(ht=L),N=wt.get(ht),N.init($),z.push(N),ht.traverseVisible(function(nt){nt.isLight&&nt.layers.test($.layers)&&(N.pushLight(nt),nt.castShadow&&N.pushShadow(nt))}),L!==ht&&L.traverseVisible(function(nt){nt.isLight&&nt.layers.test($.layers)&&(N.pushLight(nt),nt.castShadow&&N.pushShadow(nt))}),N.setupLights();const lt=new Set;return L.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;const Bt=nt.material;if(Bt)if(Array.isArray(Bt))for(let Wt=0;Wt<Bt.length;Wt++){const Ht=Bt[Wt];ho(Ht,ht,nt),lt.add(Ht)}else ho(Bt,ht,nt),lt.add(Bt)}),N=z.pop(),lt},this.compileAsync=function(L,$,ht=null){const lt=this.compile(L,$,ht);return new Promise(nt=>{function Bt(){if(lt.forEach(function(Wt){C.get(Wt).currentProgram.isReady()&&lt.delete(Wt)}),lt.size===0){nt(L);return}setTimeout(Bt,10)}ge.get("KHR_parallel_shader_compile")!==null?Bt():setTimeout(Bt,10)})};let Zs=null;function po(L){Zs&&Zs(L)}function Ks(){Hi.stop()}function mo(){Hi.start()}const Hi=new Ry;Hi.setAnimationLoop(po),typeof self<"u"&&Hi.setContext(self),this.setAnimationLoop=function(L){Zs=L,Ut.setAnimationLoop(L),L===null?Hi.stop():Hi.start()},Ut.addEventListener("sessionstart",Ks),Ut.addEventListener("sessionend",mo),this.render=function(L,$){if($!==void 0&&$.isCamera!==!0){Ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;const ht=Ut.enabled===!0&&Ut.isPresenting===!0,lt=V!==null&&(j===null||ht)&&V.begin(T,j);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Ut.enabled===!0&&Ut.isPresenting===!0&&(V===null||V.isCompositing()===!1)&&(Ut.cameraAutoUpdate===!0&&Ut.updateCamera($),$=Ut.getCamera()),L.isScene===!0&&L.onBeforeRender(T,L,$,j),N=wt.get(L,z.length),N.init($),z.push(N),Nt.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),pt.setFromProjectionMatrix(Nt,Ki,$.reversedDepth),Et=this.localClippingEnabled,ut=Xt.init(this.clippingPlanes,Et),A=At.get(L,O.length),A.init(),O.push(A),Ut.enabled===!0&&Ut.isPresenting===!0){const Wt=T.xr.getDepthSensingMesh();Wt!==null&&mi(Wt,$,-1/0,T.sortObjects)}mi(L,$,0,T.sortObjects),A.finish(),T.sortObjects===!0&&A.sort(Rt,Lt),Dt=Ut.enabled===!1||Ut.isPresenting===!1||Ut.hasDepthSensing()===!1,Dt&&Pt.addToRenderList(A,L),this.info.render.frame++,ut===!0&&Xt.beginShadows();const nt=N.state.shadowsArray;if(Vt.render(nt,L,$),ut===!0&&Xt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(lt&&V.hasRenderPass())===!1){const Wt=A.opaque,Ht=A.transmissive;if(N.setupLights(),$.isArrayCamera){const qt=$.cameras;if(Ht.length>0)for(let Kt=0,se=qt.length;Kt<se;Kt++){const Qt=qt[Kt];An(Wt,Ht,L,Qt)}Dt&&Pt.render(L);for(let Kt=0,se=qt.length;Kt<se;Kt++){const Qt=qt[Kt];dn(A,L,Qt,Qt.viewport)}}else Ht.length>0&&An(Wt,Ht,L,$),Dt&&Pt.render(L),dn(A,L,$)}j!==null&&H===0&&(J.updateMultisampleRenderTarget(j),J.updateRenderTargetMipmap(j)),lt&&V.end(T),L.isScene===!0&&L.onAfterRender(T,L,$),kt.resetDefaultState(),et=-1,rt=null,z.pop(),z.length>0?(N=z[z.length-1],ut===!0&&Xt.setGlobalState(T.clippingPlanes,N.state.camera)):N=null,O.pop(),O.length>0?A=O[O.length-1]:A=null};function mi(L,$,ht,lt){if(L.visible===!1)return;if(L.layers.test($.layers)){if(L.isGroup)ht=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update($);else if(L.isLight)N.pushLight(L),L.castShadow&&N.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||pt.intersectsSprite(L)){lt&&Ft.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Nt);const Wt=zt.update(L),Ht=L.material;Ht.visible&&A.push(L,Wt,Ht,ht,Ft.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||pt.intersectsObject(L))){const Wt=zt.update(L),Ht=L.material;if(lt&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Ft.copy(L.boundingSphere.center)):(Wt.boundingSphere===null&&Wt.computeBoundingSphere(),Ft.copy(Wt.boundingSphere.center)),Ft.applyMatrix4(L.matrixWorld).applyMatrix4(Nt)),Array.isArray(Ht)){const qt=Wt.groups;for(let Kt=0,se=qt.length;Kt<se;Kt++){const Qt=qt[Kt],re=Ht[Qt.materialIndex];re&&re.visible&&A.push(L,Wt,re,ht,Ft.z,Qt)}}else Ht.visible&&A.push(L,Wt,Ht,ht,Ft.z,null)}}const Bt=L.children;for(let Wt=0,Ht=Bt.length;Wt<Ht;Wt++)mi(Bt[Wt],$,ht,lt)}function dn(L,$,ht,lt){const{opaque:nt,transmissive:Bt,transparent:Wt}=L;N.setupLightsView(ht),ut===!0&&Xt.setGlobalState(T.clippingPlanes,ht),lt&&Jt.viewport(B.copy(lt)),nt.length>0&&wi(nt,$,ht),Bt.length>0&&wi(Bt,$,ht),Wt.length>0&&wi(Wt,$,ht),Jt.buffers.depth.setTest(!0),Jt.buffers.depth.setMask(!0),Jt.buffers.color.setMask(!0),Jt.setPolygonOffset(!1)}function An(L,$,ht,lt){if((ht.isScene===!0?ht.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[lt.id]===void 0){const re=ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[lt.id]=new Ji(1,1,{generateMipmaps:!0,type:re?La:di,minFilter:Xs,samples:we.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace})}const Bt=N.state.transmissionRenderTarget[lt.id],Wt=lt.viewport||B;Bt.setSize(Wt.z*T.transmissionResolutionScale,Wt.w*T.transmissionResolutionScale);const Ht=T.getRenderTarget(),qt=T.getActiveCubeFace(),Kt=T.getActiveMipmapLevel();T.setRenderTarget(Bt),T.getClearColor(ft),vt=T.getClearAlpha(),vt<1&&T.setClearColor(16777215,.5),T.clear(),Dt&&Pt.render(ht);const se=T.toneMapping;T.toneMapping=Qi;const Qt=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),N.setupLightsView(lt),ut===!0&&Xt.setGlobalState(T.clippingPlanes,lt),wi(L,ht,lt),J.updateMultisampleRenderTarget(Bt),J.updateRenderTargetMipmap(Bt),ge.has("WEBGL_multisampled_render_to_texture")===!1){let re=!1;for(let Be=0,sn=$.length;Be<sn;Be++){const Je=$[Be],{object:Ge,geometry:ne,material:Fe,group:he}=Je;if(Fe.side===Pi&&Ge.layers.test(lt.layers)){const Rn=Fe.side;Fe.side=Zn,Fe.needsUpdate=!0,Qs(Ge,ht,lt,ne,Fe,he),Fe.side=Rn,Fe.needsUpdate=!0,re=!0}}re===!0&&(J.updateMultisampleRenderTarget(Bt),J.updateRenderTargetMipmap(Bt))}T.setRenderTarget(Ht,qt,Kt),T.setClearColor(ft,vt),Qt!==void 0&&(lt.viewport=Qt),T.toneMapping=se}function wi(L,$,ht){const lt=$.isScene===!0?$.overrideMaterial:null;for(let nt=0,Bt=L.length;nt<Bt;nt++){const Wt=L[nt],{object:Ht,geometry:qt,group:Kt}=Wt;let se=Wt.material;se.allowOverride===!0&&lt!==null&&(se=lt),Ht.layers.test(ht.layers)&&Qs(Ht,$,ht,qt,se,Kt)}}function Qs(L,$,ht,lt,nt,Bt){L.onBeforeRender(T,$,ht,lt,nt,Bt),L.modelViewMatrix.multiplyMatrices(ht.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),nt.onBeforeRender(T,$,ht,lt,L,Bt),nt.transparent===!0&&nt.side===Pi&&nt.forceSinglePass===!1?(nt.side=Zn,nt.needsUpdate=!0,T.renderBufferDirect(ht,$,lt,nt,L,Bt),nt.side=Ua,nt.needsUpdate=!0,T.renderBufferDirect(ht,$,lt,nt,L,Bt),nt.side=Pi):T.renderBufferDirect(ht,$,lt,nt,L,Bt),L.onAfterRender(T,$,ht,lt,nt,Bt)}function Js(L,$,ht){$.isScene!==!0&&($=ee);const lt=C.get(L),nt=N.state.lights,Bt=N.state.shadowsArray,Wt=nt.state.version,Ht=Zt.getParameters(L,nt.state,Bt,$,ht),qt=Zt.getProgramCacheKey(Ht);let Kt=lt.programs;lt.environment=L.isMeshStandardMaterial?$.environment:null,lt.fog=$.fog,lt.envMap=(L.isMeshStandardMaterial?bt:xt).get(L.envMap||lt.environment),lt.envMapRotation=lt.environment!==null&&L.envMap===null?$.environmentRotation:L.envMapRotation,Kt===void 0&&(L.addEventListener("dispose",Bn),Kt=new Map,lt.programs=Kt);let se=Kt.get(qt);if(se!==void 0){if(lt.currentProgram===se&&lt.lightsStateVersion===Wt)return go(L,Ht),se}else Ht.uniforms=Zt.getUniforms(L),L.onBeforeCompile(Ht,T),se=Zt.acquireProgram(Ht,qt),Kt.set(qt,se),lt.uniforms=Ht.uniforms;const Qt=lt.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Qt.clippingPlanes=Xt.uniform),go(L,Ht),lt.needsLights=Pa(L),lt.lightsStateVersion=Wt,lt.needsLights&&(Qt.ambientLightColor.value=nt.state.ambient,Qt.lightProbe.value=nt.state.probe,Qt.directionalLights.value=nt.state.directional,Qt.directionalLightShadows.value=nt.state.directionalShadow,Qt.spotLights.value=nt.state.spot,Qt.spotLightShadows.value=nt.state.spotShadow,Qt.rectAreaLights.value=nt.state.rectArea,Qt.ltc_1.value=nt.state.rectAreaLTC1,Qt.ltc_2.value=nt.state.rectAreaLTC2,Qt.pointLights.value=nt.state.point,Qt.pointLightShadows.value=nt.state.pointShadow,Qt.hemisphereLights.value=nt.state.hemi,Qt.directionalShadowMap.value=nt.state.directionalShadowMap,Qt.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,Qt.spotShadowMap.value=nt.state.spotShadowMap,Qt.spotLightMatrix.value=nt.state.spotLightMatrix,Qt.spotLightMap.value=nt.state.spotLightMap,Qt.pointShadowMap.value=nt.state.pointShadowMap,Qt.pointShadowMatrix.value=nt.state.pointShadowMatrix),lt.currentProgram=se,lt.uniformsList=null,se}function Fl(L){if(L.uniformsList===null){const $=L.currentProgram.getUniforms();L.uniformsList=Nu.seqWithValue($.seq,L.uniforms)}return L.uniformsList}function go(L,$){const ht=C.get(L);ht.outputColorSpace=$.outputColorSpace,ht.batching=$.batching,ht.batchingColor=$.batchingColor,ht.instancing=$.instancing,ht.instancingColor=$.instancingColor,ht.instancingMorph=$.instancingMorph,ht.skinning=$.skinning,ht.morphTargets=$.morphTargets,ht.morphNormals=$.morphNormals,ht.morphColors=$.morphColors,ht.morphTargetsCount=$.morphTargetsCount,ht.numClippingPlanes=$.numClippingPlanes,ht.numIntersection=$.numClipIntersection,ht.vertexAlphas=$.vertexAlphas,ht.vertexTangents=$.vertexTangents,ht.toneMapping=$.toneMapping}function gs(L,$,ht,lt,nt){$.isScene!==!0&&($=ee),J.resetTextureUnits();const Bt=$.fog,Wt=lt.isMeshStandardMaterial?$.environment:null,Ht=j===null?T.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:so,qt=(lt.isMeshStandardMaterial?bt:xt).get(lt.envMap||Wt),Kt=lt.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,se=!!ht.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),Qt=!!ht.morphAttributes.position,re=!!ht.morphAttributes.normal,Be=!!ht.morphAttributes.color;let sn=Qi;lt.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(sn=T.toneMapping);const Je=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,Ge=Je!==void 0?Je.length:0,ne=C.get(lt),Fe=N.state.lights;if(ut===!0&&(Et===!0||L!==rt)){const Dn=L===rt&&lt.id===et;Xt.setState(lt,L,Dn)}let he=!1;lt.version===ne.__version?(ne.needsLights&&ne.lightsStateVersion!==Fe.state.version||ne.outputColorSpace!==Ht||nt.isBatchedMesh&&ne.batching===!1||!nt.isBatchedMesh&&ne.batching===!0||nt.isBatchedMesh&&ne.batchingColor===!0&&nt.colorTexture===null||nt.isBatchedMesh&&ne.batchingColor===!1&&nt.colorTexture!==null||nt.isInstancedMesh&&ne.instancing===!1||!nt.isInstancedMesh&&ne.instancing===!0||nt.isSkinnedMesh&&ne.skinning===!1||!nt.isSkinnedMesh&&ne.skinning===!0||nt.isInstancedMesh&&ne.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&ne.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&ne.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&ne.instancingMorph===!1&&nt.morphTexture!==null||ne.envMap!==qt||lt.fog===!0&&ne.fog!==Bt||ne.numClippingPlanes!==void 0&&(ne.numClippingPlanes!==Xt.numPlanes||ne.numIntersection!==Xt.numIntersection)||ne.vertexAlphas!==Kt||ne.vertexTangents!==se||ne.morphTargets!==Qt||ne.morphNormals!==re||ne.morphColors!==Be||ne.toneMapping!==sn||ne.morphTargetsCount!==Ge)&&(he=!0):(he=!0,ne.__version=lt.version);let Rn=ne.currentProgram;he===!0&&(Rn=Js(lt,$,nt));let ea=!1,wn=!1,gi=!1;const ke=Rn.getUniforms(),Cn=ne.uniforms;if(Jt.useProgram(Rn.program)&&(ea=!0,wn=!0,gi=!0),lt.id!==et&&(et=lt.id,wn=!0),ea||rt!==L){Jt.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),ke.setValue(W,"projectionMatrix",L.projectionMatrix),ke.setValue(W,"viewMatrix",L.matrixWorldInverse);const Un=ke.map.cameraPosition;Un!==void 0&&Un.setValue(W,Ot.setFromMatrixPosition(L.matrixWorld)),we.logarithmicDepthBuffer&&ke.setValue(W,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&ke.setValue(W,"isOrthographic",L.isOrthographicCamera===!0),rt!==L&&(rt=L,wn=!0,gi=!0)}if(ne.needsLights&&(Fe.state.directionalShadowMap.length>0&&ke.setValue(W,"directionalShadowMap",Fe.state.directionalShadowMap,J),Fe.state.spotShadowMap.length>0&&ke.setValue(W,"spotShadowMap",Fe.state.spotShadowMap,J),Fe.state.pointShadowMap.length>0&&ke.setValue(W,"pointShadowMap",Fe.state.pointShadowMap,J)),nt.isSkinnedMesh){ke.setOptional(W,nt,"bindMatrix"),ke.setOptional(W,nt,"bindMatrixInverse");const Dn=nt.skeleton;Dn&&(Dn.boneTexture===null&&Dn.computeBoneTexture(),ke.setValue(W,"boneTexture",Dn.boneTexture,J))}nt.isBatchedMesh&&(ke.setOptional(W,nt,"batchingTexture"),ke.setValue(W,"batchingTexture",nt._matricesTexture,J),ke.setOptional(W,nt,"batchingIdTexture"),ke.setValue(W,"batchingIdTexture",nt._indirectTexture,J),ke.setOptional(W,nt,"batchingColorTexture"),nt._colorsTexture!==null&&ke.setValue(W,"batchingColorTexture",nt._colorsTexture,J));const yn=ht.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&_e.update(nt,ht,Rn),(wn||ne.receiveShadow!==nt.receiveShadow)&&(ne.receiveShadow=nt.receiveShadow,ke.setValue(W,"receiveShadow",nt.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(Cn.envMap.value=qt,Cn.flipEnvMap.value=qt.isCubeTexture&&qt.isRenderTargetTexture===!1?-1:1),lt.isMeshStandardMaterial&&lt.envMap===null&&$.environment!==null&&(Cn.envMapIntensity.value=$.environmentIntensity),Cn.dfgLUT!==void 0&&(Cn.dfgLUT.value=iR()),wn&&(ke.setValue(W,"toneMappingExposure",T.toneMappingExposure),ne.needsLights&&_o(Cn,gi),Bt&&lt.fog===!0&&le.refreshFogUniforms(Cn,Bt),le.refreshMaterialUniforms(Cn,lt,gt,at,N.state.transmissionRenderTarget[L.id]),Nu.upload(W,Fl(ne),Cn,J)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(Nu.upload(W,Fl(ne),Cn,J),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&ke.setValue(W,"center",nt.center),ke.setValue(W,"modelViewMatrix",nt.modelViewMatrix),ke.setValue(W,"normalMatrix",nt.normalMatrix),ke.setValue(W,"modelMatrix",nt.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const Dn=lt.uniformsGroups;for(let Un=0,$s=Dn.length;Un<$s;Un++){const Ci=Dn[Un];Tt.update(Ci,Rn),Tt.bind(Ci,Rn)}}return Rn}function _o(L,$){L.ambientLightColor.needsUpdate=$,L.lightProbe.needsUpdate=$,L.directionalLights.needsUpdate=$,L.directionalLightShadows.needsUpdate=$,L.pointLights.needsUpdate=$,L.pointLightShadows.needsUpdate=$,L.spotLights.needsUpdate=$,L.spotLightShadows.needsUpdate=$,L.rectAreaLights.needsUpdate=$,L.hemisphereLights.needsUpdate=$}function Pa(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(L,$,ht){const lt=C.get(L);lt.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,lt.__autoAllocateDepthBuffer===!1&&(lt.__useRenderToTexture=!1),C.get(L.texture).__webglTexture=$,C.get(L.depthTexture).__webglTexture=lt.__autoAllocateDepthBuffer?void 0:ht,lt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,$){const ht=C.get(L);ht.__webglFramebuffer=$,ht.__useDefaultFramebuffer=$===void 0};const Ba=W.createFramebuffer();this.setRenderTarget=function(L,$=0,ht=0){j=L,F=$,H=ht;let lt=null,nt=!1,Bt=!1;if(L){const Ht=C.get(L);if(Ht.__useDefaultFramebuffer!==void 0){Jt.bindFramebuffer(W.FRAMEBUFFER,Ht.__webglFramebuffer),B.copy(L.viewport),k.copy(L.scissor),q=L.scissorTest,Jt.viewport(B),Jt.scissor(k),Jt.setScissorTest(q),et=-1;return}else if(Ht.__webglFramebuffer===void 0)J.setupRenderTarget(L);else if(Ht.__hasExternalTextures)J.rebindTextures(L,C.get(L.texture).__webglTexture,C.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const se=L.depthTexture;if(Ht.__boundDepthTexture!==se){if(se!==null&&C.has(se)&&(L.width!==se.image.width||L.height!==se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(L)}}const qt=L.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(Bt=!0);const Kt=C.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Kt[$])?lt=Kt[$][ht]:lt=Kt[$],nt=!0):L.samples>0&&J.useMultisampledRTT(L)===!1?lt=C.get(L).__webglMultisampledFramebuffer:Array.isArray(Kt)?lt=Kt[ht]:lt=Kt,B.copy(L.viewport),k.copy(L.scissor),q=L.scissorTest}else B.copy(P).multiplyScalar(gt).floor(),k.copy(X).multiplyScalar(gt).floor(),q=it;if(ht!==0&&(lt=Ba),Jt.bindFramebuffer(W.FRAMEBUFFER,lt)&&Jt.drawBuffers(L,lt),Jt.viewport(B),Jt.scissor(k),Jt.setScissorTest(q),nt){const Ht=C.get(L.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ht.__webglTexture,ht)}else if(Bt){const Ht=$;for(let qt=0;qt<L.textures.length;qt++){const Kt=C.get(L.textures[qt]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+qt,Kt.__webglTexture,ht,Ht)}}else if(L!==null&&ht!==0){const Ht=C.get(L.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Ht.__webglTexture,ht)}et=-1},this.readRenderTargetPixels=function(L,$,ht,lt,nt,Bt,Wt,Ht=0){if(!(L&&L.isWebGLRenderTarget)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qt=C.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Wt!==void 0&&(qt=qt[Wt]),qt){Jt.bindFramebuffer(W.FRAMEBUFFER,qt);try{const Kt=L.textures[Ht],se=Kt.format,Qt=Kt.type;if(!we.textureFormatReadable(se)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!we.textureTypeReadable(Qt)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=L.width-lt&&ht>=0&&ht<=L.height-nt&&(L.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Ht),W.readPixels($,ht,lt,nt,Ct.convert(se),Ct.convert(Qt),Bt))}finally{const Kt=j!==null?C.get(j).__webglFramebuffer:null;Jt.bindFramebuffer(W.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(L,$,ht,lt,nt,Bt,Wt,Ht=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qt=C.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Wt!==void 0&&(qt=qt[Wt]),qt)if($>=0&&$<=L.width-lt&&ht>=0&&ht<=L.height-nt){Jt.bindFramebuffer(W.FRAMEBUFFER,qt);const Kt=L.textures[Ht],se=Kt.format,Qt=Kt.type;if(!we.textureFormatReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!we.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const re=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,re),W.bufferData(W.PIXEL_PACK_BUFFER,Bt.byteLength,W.STREAM_READ),L.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Ht),W.readPixels($,ht,lt,nt,Ct.convert(se),Ct.convert(Qt),0);const Be=j!==null?C.get(j).__webglFramebuffer:null;Jt.bindFramebuffer(W.FRAMEBUFFER,Be);const sn=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await G1(W,sn,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,re),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Bt),W.deleteBuffer(re),W.deleteSync(sn),Bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,$=null,ht=0){const lt=Math.pow(2,-ht),nt=Math.floor(L.image.width*lt),Bt=Math.floor(L.image.height*lt),Wt=$!==null?$.x:0,Ht=$!==null?$.y:0;J.setTexture2D(L,0),W.copyTexSubImage2D(W.TEXTURE_2D,ht,0,0,Wt,Ht,nt,Bt),Jt.unbindTexture()};const _s=W.createFramebuffer(),Fa=W.createFramebuffer();this.copyTextureToTexture=function(L,$,ht=null,lt=null,nt=0,Bt=null){Bt===null&&(nt!==0?(Tl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Bt=nt,nt=0):Bt=0);let Wt,Ht,qt,Kt,se,Qt,re,Be,sn;const Je=L.isCompressedTexture?L.mipmaps[Bt]:L.image;if(ht!==null)Wt=ht.max.x-ht.min.x,Ht=ht.max.y-ht.min.y,qt=ht.isBox3?ht.max.z-ht.min.z:1,Kt=ht.min.x,se=ht.min.y,Qt=ht.isBox3?ht.min.z:0;else{const yn=Math.pow(2,-nt);Wt=Math.floor(Je.width*yn),Ht=Math.floor(Je.height*yn),L.isDataArrayTexture?qt=Je.depth:L.isData3DTexture?qt=Math.floor(Je.depth*yn):qt=1,Kt=0,se=0,Qt=0}lt!==null?(re=lt.x,Be=lt.y,sn=lt.z):(re=0,Be=0,sn=0);const Ge=Ct.convert($.format),ne=Ct.convert($.type);let Fe;$.isData3DTexture?(J.setTexture3D($,0),Fe=W.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(J.setTexture2DArray($,0),Fe=W.TEXTURE_2D_ARRAY):(J.setTexture2D($,0),Fe=W.TEXTURE_2D),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,$.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,$.unpackAlignment);const he=W.getParameter(W.UNPACK_ROW_LENGTH),Rn=W.getParameter(W.UNPACK_IMAGE_HEIGHT),ea=W.getParameter(W.UNPACK_SKIP_PIXELS),wn=W.getParameter(W.UNPACK_SKIP_ROWS),gi=W.getParameter(W.UNPACK_SKIP_IMAGES);W.pixelStorei(W.UNPACK_ROW_LENGTH,Je.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Je.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Kt),W.pixelStorei(W.UNPACK_SKIP_ROWS,se),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Qt);const ke=L.isDataArrayTexture||L.isData3DTexture,Cn=$.isDataArrayTexture||$.isData3DTexture;if(L.isDepthTexture){const yn=C.get(L),Dn=C.get($),Un=C.get(yn.__renderTarget),$s=C.get(Dn.__renderTarget);Jt.bindFramebuffer(W.READ_FRAMEBUFFER,Un.__webglFramebuffer),Jt.bindFramebuffer(W.DRAW_FRAMEBUFFER,$s.__webglFramebuffer);for(let Ci=0;Ci<qt;Ci++)ke&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,C.get(L).__webglTexture,nt,Qt+Ci),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,C.get($).__webglTexture,Bt,sn+Ci)),W.blitFramebuffer(Kt,se,Wt,Ht,re,Be,Wt,Ht,W.DEPTH_BUFFER_BIT,W.NEAREST);Jt.bindFramebuffer(W.READ_FRAMEBUFFER,null),Jt.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(nt!==0||L.isRenderTargetTexture||C.has(L)){const yn=C.get(L),Dn=C.get($);Jt.bindFramebuffer(W.READ_FRAMEBUFFER,_s),Jt.bindFramebuffer(W.DRAW_FRAMEBUFFER,Fa);for(let Un=0;Un<qt;Un++)ke?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,yn.__webglTexture,nt,Qt+Un):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,yn.__webglTexture,nt),Cn?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Dn.__webglTexture,Bt,sn+Un):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Dn.__webglTexture,Bt),nt!==0?W.blitFramebuffer(Kt,se,Wt,Ht,re,Be,Wt,Ht,W.COLOR_BUFFER_BIT,W.NEAREST):Cn?W.copyTexSubImage3D(Fe,Bt,re,Be,sn+Un,Kt,se,Wt,Ht):W.copyTexSubImage2D(Fe,Bt,re,Be,Kt,se,Wt,Ht);Jt.bindFramebuffer(W.READ_FRAMEBUFFER,null),Jt.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Cn?L.isDataTexture||L.isData3DTexture?W.texSubImage3D(Fe,Bt,re,Be,sn,Wt,Ht,qt,Ge,ne,Je.data):$.isCompressedArrayTexture?W.compressedTexSubImage3D(Fe,Bt,re,Be,sn,Wt,Ht,qt,Ge,Je.data):W.texSubImage3D(Fe,Bt,re,Be,sn,Wt,Ht,qt,Ge,ne,Je):L.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Bt,re,Be,Wt,Ht,Ge,ne,Je.data):L.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Bt,re,Be,Je.width,Je.height,Ge,Je.data):W.texSubImage2D(W.TEXTURE_2D,Bt,re,Be,Wt,Ht,Ge,ne,Je);W.pixelStorei(W.UNPACK_ROW_LENGTH,he),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Rn),W.pixelStorei(W.UNPACK_SKIP_PIXELS,ea),W.pixelStorei(W.UNPACK_SKIP_ROWS,wn),W.pixelStorei(W.UNPACK_SKIP_IMAGES,gi),Bt===0&&$.generateMipmaps&&W.generateMipmap(Fe),Jt.unbindTexture()},this.initRenderTarget=function(L){C.get(L).__webglFramebuffer===void 0&&J.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?J.setTextureCube(L,0):L.isData3DTexture?J.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?J.setTexture2DArray(L,0):J.setTexture2D(L,0),Jt.unbindTexture()},this.resetState=function(){F=0,H=0,j=null,Jt.reset(),kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(t),n.unpackColorSpace=Le._getUnpackColorSpace()}}const Rx=2,aR=4;function sR(r=1){return{version:1,module_count:r,grid_rows:r,grid_cols:1,slots:Array.from({length:r},(t,n)=>`A${n}`)}}function wm(r,t){const n=Number(t?.module_count||1);return!r||!Array.isArray(r.slots)||Number(r.module_count)<1||Number(r.grid_rows)*Number(r.grid_cols)!==Number(r.module_count)?sR(n):r}function rR(r){return r.port||`A${Number(r.module||0)}`}function Ny(r,t,n){const a=wm(t,n),o=rR(r);let c=a.slots.indexOf(o);c<0&&(c=Number(r.module||0));const u=Math.floor(c/a.grid_cols),f=c%a.grid_cols,p=r.layer==="L0.5";return{row:u*Rx+Number(r.row)%Rx+(p?.5:0),col:f*aR+Number(r.col)+(p?.5:0),port:o}}const qd=2,jd=4,ks=.24,qi=ks*4,Zd=qi,oR=qi/2;function lR(r){const t=[],n=Array(r.length).fill(!1);function a(o){if(o.length===r.length){t.push(o);return}for(let c=0;c<r.length;c+=1)n[c]||(n[c]=!0,a([...o,r[c]]),n[c]=!1)}return a([]),t}function cR(){const r=new Map;for(const t of[-1,1])for(const n of[-1,1])for(const a of lR([0,t,n*2]))r.set(a.join(","),a);return[...r.values()]}function uR(r,t){const n=new Z(...t).normalize(),a=r.reduce((d,_)=>d.add(_),new Z).divideScalar(r.length),o=Math.abs(n.y)<.9?new Z(0,1,0):new Z(1,0,0),c=new Z().crossVectors(o,n).normalize(),u=new Z().crossVectors(n,c).normalize(),f=[...r].sort((d,_)=>{const g=d.clone().sub(a),v=_.clone().sub(a);return Math.atan2(g.dot(u),g.dot(c))-Math.atan2(v.dot(u),v.dot(c))});return new Z().crossVectors(f[1].clone().sub(f[0]),f[2].clone().sub(f[0])).normalize().dot(n)<0&&f.reverse(),f}function Oy(r=ks){const t=cR(),n=[];function a(c,u){const f=uR(c.map(p=>new Z(p[0]*r,p[1]*r,p[2]*r)),u);for(let p=1;p<f.length-1;p+=1)for(const d of[f[0],f[p],f[p+1]])n.push(d.x,d.y,d.z)}for(let c=0;c<3;c+=1)for(const u of[-1,1]){const f=[0,0,0];f[c]=u,a(t.filter(p=>p[c]===u*2),f)}for(const c of[-1,1])for(const u of[-1,1])for(const f of[-1,1])a(t.filter(p=>c*p[0]+u*p[1]+f*p[2]===3),[c,u,f]);const o=new an;return o.setAttribute("position",new Pe(n,3)),o.computeVertexNormals(),o}function Kd(r,t=1){return new zl({color:r,roughness:.8,metalness:.02,flatShading:!0,transparent:t<1,opacity:t})}function Qd(r,t,n=1){const a=Oy(r),o=new Qp(a,12);return a.dispose(),new Zp(o,new Vu({color:t,transparent:n<1,opacity:n}))}function zy(r){r.traverse(t=>{t.geometry?.dispose();const n=Array.isArray(t.material)?t.material:[t.material];for(const a of n)a?.map?.dispose(),a?.dispose()})}function wx(r){const t=[...r.children];r.clear();for(const n of t)zy(n)}function fR(r){const t=document.createElement("canvas");t.width=256,t.height=128;const n=t.getContext("2d");n.fillStyle="rgba(28, 45, 48, 0.9)",n.beginPath(),n.roundRect(24,22,208,84,18),n.fill(),n.strokeStyle="rgba(255, 255, 255, 0.82)",n.lineWidth=5,n.stroke(),n.fillStyle="#ffffff",n.font="800 58px ui-monospace, SFMono-Regular, Menlo, monospace",n.textAlign="center",n.textBaseline="middle",n.fillText(r,128,65);const a=new PE(t);a.colorSpace=fi;const o=new wE(new vy({map:a,transparent:!0,depthTest:!1,depthWrite:!1}));return o.scale.set(.78,.39,1),o.renderOrder=20,o}function hR(r,t,n){const a=r.layer==="L0.5",o=Ny(r,t,n);return{gridX:o.col,gridZ:o.row,baseY:a?oR:0}}function dR({topology:r,moduleLayout:t,board:n,latestColumnId:a,faultedColumnIds:o,unitMeta:c}){const u=Ae.useRef(null),f=Ae.useRef(null),p=Ae.useRef(null),d=Ae.useRef(null),_=Ae.useRef({x:-.56,y:.72}),g=Ae.useRef(null);Ae.useEffect(()=>{const S=u.current,x=new _y;x.background=new ie("#111111");const R=new hi(38,1,.1,200);R.position.set(0,7,10),R.lookAt(0,0,0),p.current=R;const w=new Ly({antialias:!0});w.setPixelRatio(Math.min(window.devicePixelRatio,2)),w.shadowMap.enabled=!0,w.shadowMap.type=um,d.current=w,S.appendChild(w.domElement),x.add(new Ay("#ffffff","#aaa49a",2.6));const A=new Wu("#ffffff",3.1);A.position.set(5,10,7),A.castShadow=!0,A.shadow.mapSize.set(2048,2048),x.add(A);const N=new Wu("#bddcff",.85);N.position.set(-6,4,-5),x.add(N);const O=new $e(new Ol(80,80),new nb({opacity:.1}));O.rotation.x=-Math.PI/2,O.position.y=-.62,O.receiveShadow=!0,x.add(O);const z=new Ys;z.rotation.set(_.current.x,_.current.y,0),f.current=z,x.add(z);function V(){const H=S.getBoundingClientRect();w.setSize(H.width,Math.max(H.height,1)),R.aspect=H.width/Math.max(H.height,1),R.updateProjectionMatrix()}const T=new ResizeObserver(V);T.observe(S),V();let D=0;function F(){D=requestAnimationFrame(F),w.render(x,R)}return F(),()=>{cancelAnimationFrame(D),T.disconnect(),wx(z),zy(O),A.shadow.map?.dispose(),w.renderLists.dispose(),w.dispose(),w.domElement.parentNode===S&&S.removeChild(w.domElement),f.current=null,p.current=null,d.current=null}},[]),Ae.useEffect(()=>{const S=f.current,x=p.current;if(!S||!x||!r?.columns?.length)return;wx(S);const R=wm(t,r),w=r.columns.map(ft=>({column:ft,...hR(ft,R,r)})),A=Math.min(...w.map(ft=>ft.gridX)),N=Math.max(...w.map(ft=>ft.gridX)),O=Math.min(...w.map(ft=>ft.gridZ)),z=Math.max(...w.map(ft=>ft.gridZ)),V=(A+N)/2,T=(O+z)/2,D=(N-A+1.5)*qi,F=(z-O+1.5)*qi,H=Math.max(1,...Object.values(n||{}).map(ft=>ft.length)),j=new Set(o);for(const ft of w){const{column:vt,baseY:I}=ft,at=(ft.gridX-V)*qi,gt=(ft.gridZ-T)*qi,Rt=n?.[vt.id]||[];if(Rt.length===0){const Lt=Qd(ks,vt.layer==="L0.5"?"#87999e":"#aaa8a2",vt.layer==="L0.5"?.28:.2);Lt.position.set(at,I,gt),S.add(Lt)}if(Rt.forEach((Lt,P)=>{const X=c[Lt]||{color:"#777777"},it=I+P*Zd,pt=new $e(Oy(),Kd(X.color));pt.position.set(at,it,gt),pt.castShadow=!0,pt.receiveShadow=!0,S.add(pt);const ut=Qd(ks*1.003,"#171717",.72);ut.position.copy(pt.position),S.add(ut);const Et=new $e(new oo(.055,.055,.014,20),Kd(X.color));Et.position.set(at,it+ks*2+.012,gt),S.add(Et)}),j.has(vt.id)||vt.id===a){const Lt=I+Math.max(0,Rt.length-1)*Zd,P=Qd(ks*1.15,j.has(vt.id)?"#d5482f":"#00c9f0");P.position.set(at,Lt,gt),S.add(P)}}const et=new $e(new Oa(D,.16,F),Kd("#b9bbb5"));et.position.set(0,-ks*2-.12,0),et.receiveShadow=!0,et.castShadow=!0,S.add(et);const rt=new Zp(new Qp(et.geometry),new Vu({color:"#262624"}));rt.position.copy(et.position),S.add(rt),R.slots.forEach((ft,vt)=>{const I=Math.floor(vt/R.grid_cols),gt=vt%R.grid_cols*jd+jd/2-.25,Rt=I*qd+qd/2-.25,Lt=(gt-V)*qi,P=(Rt-T)*qi,X=new Oa(jd*qi,.025,qd*qi),it=new Zp(new Qp(X),new Vu({color:"#285d68",transparent:!0,opacity:.72}));X.dispose(),it.position.set(Lt,et.position.y+.095,P),S.add(it);const pt=fR(ft);pt.position.set(Lt,et.position.y+.38,P),S.add(pt)});const B=Math.max(D,F,4),k=H*Zd,q=B*1.65+k*.45;x.position.set(0,q*.72,q),x.lookAt(0,Math.min(k*.3,2.4),0),x.updateProjectionMatrix()},[r,t,n,a,o,c]);function v(S){g.current={pointerId:S.pointerId,x:S.clientX,y:S.clientY},S.currentTarget.setPointerCapture?.(S.pointerId)}function y(S){const x=g.current,R=f.current;if(!x||x.pointerId!==S.pointerId||!R)return;const w=S.clientX-x.x,A=S.clientY-x.y;_.current.y+=w*.006,_.current.x=Math.max(-1.25,Math.min(.35,_.current.x+A*.004)),R.rotation.set(_.current.x,_.current.y,0),x.x=S.clientX,x.y=S.clientY}function M(S){S.currentTarget.hasPointerCapture?.(S.pointerId)&&S.currentTarget.releasePointerCapture(S.pointerId),g.current=null}function b(S){const x=p.current;if(!x)return;S.preventDefault();const R=S.deltaY>0?1.08:.92,w=x.position.clone().multiplyScalar(R);w.length()>=3&&w.length()<=80&&x.position.copy(w)}return Yt.jsx("div",{ref:u,className:"live-board-scene",onPointerDown:v,onPointerMove:y,onPointerUp:M,onPointerCancel:M,onWheel:b})}const Ca=11102230246251565e-32,Gn=134217729,pR=(3+8*Ca)*Ca;function Jd(r,t,n,a,o){let c,u,f,p,d=t[0],_=a[0],g=0,v=0;_>d==_>-d?(c=d,d=t[++g]):(c=_,_=a[++v]);let y=0;if(g<r&&v<n)for(_>d==_>-d?(u=d+c,f=c-(u-d),d=t[++g]):(u=_+c,f=c-(u-_),_=a[++v]),c=u,f!==0&&(o[y++]=f);g<r&&v<n;)_>d==_>-d?(u=c+d,p=u-c,f=c-(u-p)+(d-p),d=t[++g]):(u=c+_,p=u-c,f=c-(u-p)+(_-p),_=a[++v]),c=u,f!==0&&(o[y++]=f);for(;g<r;)u=c+d,p=u-c,f=c-(u-p)+(d-p),d=t[++g],c=u,f!==0&&(o[y++]=f);for(;v<n;)u=c+_,p=u-c,f=c-(u-p)+(_-p),_=a[++v],c=u,f!==0&&(o[y++]=f);return(c!==0||y===0)&&(o[y++]=c),y}function mR(r,t){let n=t[0];for(let a=1;a<r;a++)n+=t[a];return n}function Pl(r){return new Float64Array(r)}const gR=(3+16*Ca)*Ca,_R=(2+12*Ca)*Ca,vR=(9+64*Ca)*Ca*Ca,Zr=Pl(4),Cx=Pl(8),Dx=Pl(12),Ux=Pl(16),qn=Pl(4);function xR(r,t,n,a,o,c,u){let f,p,d,_,g,v,y,M,b,S,x,R,w,A,N,O,z,V;const T=r-o,D=n-o,F=t-c,H=a-c;A=T*H,v=Gn*T,y=v-(v-T),M=T-y,v=Gn*H,b=v-(v-H),S=H-b,N=M*S-(A-y*b-M*b-y*S),O=F*D,v=Gn*F,y=v-(v-F),M=F-y,v=Gn*D,b=v-(v-D),S=D-b,z=M*S-(O-y*b-M*b-y*S),x=N-z,g=N-x,Zr[0]=N-(x+g)+(g-z),R=A+x,g=R-A,w=A-(R-g)+(x-g),x=w-O,g=w-x,Zr[1]=w-(x+g)+(g-O),V=R+x,g=V-R,Zr[2]=R-(V-g)+(x-g),Zr[3]=V;let j=mR(4,Zr),et=_R*u;if(j>=et||-j>=et||(g=r-T,f=r-(T+g)+(g-o),g=n-D,d=n-(D+g)+(g-o),g=t-F,p=t-(F+g)+(g-c),g=a-H,_=a-(H+g)+(g-c),f===0&&p===0&&d===0&&_===0)||(et=vR*u+pR*Math.abs(j),j+=T*_+H*f-(F*d+D*p),j>=et||-j>=et))return j;A=f*H,v=Gn*f,y=v-(v-f),M=f-y,v=Gn*H,b=v-(v-H),S=H-b,N=M*S-(A-y*b-M*b-y*S),O=p*D,v=Gn*p,y=v-(v-p),M=p-y,v=Gn*D,b=v-(v-D),S=D-b,z=M*S-(O-y*b-M*b-y*S),x=N-z,g=N-x,qn[0]=N-(x+g)+(g-z),R=A+x,g=R-A,w=A-(R-g)+(x-g),x=w-O,g=w-x,qn[1]=w-(x+g)+(g-O),V=R+x,g=V-R,qn[2]=R-(V-g)+(x-g),qn[3]=V;const rt=Jd(4,Zr,4,qn,Cx);A=T*_,v=Gn*T,y=v-(v-T),M=T-y,v=Gn*_,b=v-(v-_),S=_-b,N=M*S-(A-y*b-M*b-y*S),O=F*d,v=Gn*F,y=v-(v-F),M=F-y,v=Gn*d,b=v-(v-d),S=d-b,z=M*S-(O-y*b-M*b-y*S),x=N-z,g=N-x,qn[0]=N-(x+g)+(g-z),R=A+x,g=R-A,w=A-(R-g)+(x-g),x=w-O,g=w-x,qn[1]=w-(x+g)+(g-O),V=R+x,g=V-R,qn[2]=R-(V-g)+(x-g),qn[3]=V;const B=Jd(rt,Cx,4,qn,Dx);A=f*_,v=Gn*f,y=v-(v-f),M=f-y,v=Gn*_,b=v-(v-_),S=_-b,N=M*S-(A-y*b-M*b-y*S),O=p*d,v=Gn*p,y=v-(v-p),M=p-y,v=Gn*d,b=v-(v-d),S=d-b,z=M*S-(O-y*b-M*b-y*S),x=N-z,g=N-x,qn[0]=N-(x+g)+(g-z),R=A+x,g=R-A,w=A-(R-g)+(x-g),x=w-O,g=w-x,qn[1]=w-(x+g)+(g-O),V=R+x,g=V-R,qn[2]=R-(V-g)+(x-g),qn[3]=V;const k=Jd(B,Dx,4,qn,Ux);return Ux[k-1]}function Au(r,t,n,a,o,c){const u=(t-c)*(n-o),f=(r-o)*(a-c),p=u-f,d=Math.abs(u+f);return Math.abs(p)>=gR*d?p:-xR(r,t,n,a,o,c,d)}const Lx=Math.pow(2,-52),Ru=new Uint32Array(512);class Yu{static from(t,n=bR,a=TR){const o=t.length,c=new Float64Array(o*2);for(let u=0;u<o;u++){const f=t[u];c[2*u]=n(f),c[2*u+1]=a(f)}return new Yu(c)}constructor(t){const n=t.length>>1;if(n>0&&typeof t[0]!="number")throw new Error("Expected coords to contain numbers.");this.coords=t;const a=Math.max(2*n-5,0);this._triangles=new Uint32Array(a*3),this._halfedges=new Int32Array(a*3),this._hashSize=Math.ceil(Math.sqrt(n)),this._hullPrev=new Uint32Array(n),this._hullNext=new Uint32Array(n),this._hullTri=new Uint32Array(n),this._hullHash=new Int32Array(this._hashSize),this._ids=new Uint32Array(n),this._dists=new Float64Array(n),this.trianglesLen=0,this._cx=0,this._cy=0,this._hullStart=0,this.hull=this._triangles,this.triangles=this._triangles,this.halfedges=this._halfedges,this.update()}update(){const{coords:t,_hullPrev:n,_hullNext:a,_hullTri:o,_hullHash:c}=this,u=t.length>>1;let f=1/0,p=1/0,d=-1/0,_=-1/0;for(let T=0;T<u;T++){const D=t[2*T],F=t[2*T+1];D<f&&(f=D),F<p&&(p=F),D>d&&(d=D),F>_&&(_=F),this._ids[T]=T}const g=(f+d)/2,v=(p+_)/2;let y=0,M=0,b=0;for(let T=0,D=1/0;T<u;T++){const F=$d(g,v,t[2*T],t[2*T+1]);F<D&&(y=T,D=F)}const S=t[2*y],x=t[2*y+1];for(let T=0,D=1/0;T<u;T++){if(T===y)continue;const F=$d(S,x,t[2*T],t[2*T+1]);F<D&&F>0&&(M=T,D=F)}let R=t[2*M],w=t[2*M+1],A=1/0;for(let T=0;T<u;T++){if(T===y||T===M)continue;const D=MR(S,x,R,w,t[2*T],t[2*T+1]);D<A&&(b=T,A=D)}let N=t[2*b],O=t[2*b+1];if(A===1/0){for(let F=0;F<u;F++)this._dists[F]=t[2*F]-t[0]||t[2*F+1]-t[1];Qr(this._ids,this._dists,0,u-1);const T=new Uint32Array(u);let D=0;for(let F=0,H=-1/0;F<u;F++){const j=this._ids[F],et=this._dists[j];et>H&&(T[D++]=j,H=et)}this.hull=T.subarray(0,D),this.triangles=new Uint32Array(0),this.halfedges=new Int32Array(0);return}if(Au(S,x,R,w,N,O)<0){const T=M,D=R,F=w;M=b,R=N,w=O,b=T,N=D,O=F}const z=ER(S,x,R,w,N,O);this._cx=z.x,this._cy=z.y;for(let T=0;T<u;T++)this._dists[T]=$d(t[2*T],t[2*T+1],z.x,z.y);Qr(this._ids,this._dists,0,u-1),this._hullStart=y;let V=3;a[y]=n[b]=M,a[M]=n[y]=b,a[b]=n[M]=y,o[y]=0,o[M]=1,o[b]=2,c.fill(-1),c[this._hashKey(S,x)]=y,c[this._hashKey(R,w)]=M,c[this._hashKey(N,O)]=b,this.trianglesLen=0,this._addTriangle(y,M,b,-1,-1,-1);for(let T=0,D=0,F=0;T<this._ids.length;T++){const H=this._ids[T],j=t[2*H],et=t[2*H+1];if(T>0&&Math.abs(j-D)<=Lx&&Math.abs(et-F)<=Lx||(D=j,F=et,H===y||H===M||H===b))continue;let rt=0;for(let vt=0,I=this._hashKey(j,et);vt<this._hashSize&&(rt=c[(I+vt)%this._hashSize],!(rt!==-1&&rt!==a[rt]));vt++);rt=n[rt];let B=rt,k;for(;k=a[B],Au(j,et,t[2*B],t[2*B+1],t[2*k],t[2*k+1])>=0;)if(B=k,B===rt){B=-1;break}if(B===-1)continue;let q=this._addTriangle(B,H,a[B],-1,-1,o[B]);o[H]=this._legalize(q+2),o[B]=q,V++;let ft=a[B];for(;k=a[ft],Au(j,et,t[2*ft],t[2*ft+1],t[2*k],t[2*k+1])<0;)q=this._addTriangle(ft,H,k,o[H],-1,o[ft]),o[H]=this._legalize(q+2),a[ft]=ft,V--,ft=k;if(B===rt)for(;k=n[B],Au(j,et,t[2*k],t[2*k+1],t[2*B],t[2*B+1])<0;)q=this._addTriangle(k,H,B,-1,o[B],o[k]),this._legalize(q+2),o[k]=q,a[B]=B,V--,B=k;this._hullStart=n[H]=B,a[B]=n[ft]=H,a[H]=ft,c[this._hashKey(j,et)]=H,c[this._hashKey(t[2*B],t[2*B+1])]=B}this.hull=new Uint32Array(V);for(let T=0,D=this._hullStart;T<V;T++)this.hull[T]=D,D=a[D];this.triangles=this._triangles.subarray(0,this.trianglesLen),this.halfedges=this._halfedges.subarray(0,this.trianglesLen)}_hashKey(t,n){return Math.floor(yR(t-this._cx,n-this._cy)*this._hashSize)%this._hashSize}_legalize(t){const{_triangles:n,_halfedges:a,coords:o}=this;let c=0,u=0;for(;;){const f=a[t],p=t-t%3;if(u=p+(t+2)%3,f===-1){if(c===0)break;t=Ru[--c];continue}const d=f-f%3,_=p+(t+1)%3,g=d+(f+2)%3,v=n[u],y=n[t],M=n[_],b=n[g];if(SR(o[2*v],o[2*v+1],o[2*y],o[2*y+1],o[2*M],o[2*M+1],o[2*b],o[2*b+1])){n[t]=b,n[f]=v;const x=a[g];if(x===-1){let w=this._hullStart;do{if(this._hullTri[w]===g){this._hullTri[w]=t;break}w=this._hullPrev[w]}while(w!==this._hullStart)}this._link(t,x),this._link(f,a[u]),this._link(u,g);const R=d+(f+1)%3;c<Ru.length&&(Ru[c++]=R)}else{if(c===0)break;t=Ru[--c]}}return u}_link(t,n){this._halfedges[t]=n,n!==-1&&(this._halfedges[n]=t)}_addTriangle(t,n,a,o,c,u){const f=this.trianglesLen;return this._triangles[f]=t,this._triangles[f+1]=n,this._triangles[f+2]=a,this._link(f,o),this._link(f+1,c),this._link(f+2,u),this.trianglesLen+=3,f}}function yR(r,t){const n=r/(Math.abs(r)+Math.abs(t));return(t>0?3-n:1+n)/4}function $d(r,t,n,a){const o=r-n,c=t-a;return o*o+c*c}function SR(r,t,n,a,o,c,u,f){const p=r-u,d=t-f,_=n-u,g=a-f,v=o-u,y=c-f,M=p*p+d*d,b=_*_+g*g,S=v*v+y*y;return p*(g*S-b*y)-d*(_*S-b*v)+M*(_*y-g*v)<0}function MR(r,t,n,a,o,c){const u=n-r,f=a-t,p=o-r,d=c-t,_=u*u+f*f,g=p*p+d*d,v=.5/(u*d-f*p),y=(d*_-f*g)*v,M=(u*g-p*_)*v;return y*y+M*M}function ER(r,t,n,a,o,c){const u=n-r,f=a-t,p=o-r,d=c-t,_=u*u+f*f,g=p*p+d*d,v=.5/(u*d-f*p),y=r+(d*_-f*g)*v,M=t+(u*g-p*_)*v;return{x:y,y:M}}function Qr(r,t,n,a){if(a-n<=20)for(let o=n+1;o<=a;o++){const c=r[o],u=t[c];let f=o-1;for(;f>=n&&t[r[f]]>u;)r[f+1]=r[f--];r[f+1]=c}else{const o=n+a>>1;let c=n+1,u=a;_l(r,o,c),t[r[n]]>t[r[a]]&&_l(r,n,a),t[r[c]]>t[r[a]]&&_l(r,c,a),t[r[n]]>t[r[c]]&&_l(r,n,c);const f=r[c],p=t[f];for(;;){do c++;while(t[r[c]]<p);do u--;while(t[r[u]]>p);if(u<c)break;_l(r,c,u)}r[n+1]=r[u],r[u]=f,a-c+1>=u-n?(Qr(r,t,c,a),Qr(r,t,n,u-1)):(Qr(r,t,n,u-1),Qr(r,t,c,a))}}function _l(r,t,n){const a=r[t];r[t]=r[n],r[n]=a}function bR(r){return r[0]}function TR(r){return r[1]}function AR(r,t){t.toneMapping=fm,t.toneMappingExposure=1.12,r.background=new ie("#788f9a"),r.fog=new Ku("#536e79",14,58),t.shadowMap.type=Kr;const n={value:0},a=new Ai({side:Zn,depthWrite:!1,fog:!1,uniforms:{time:n},vertexShader:"varying vec3 direction;void main(){direction=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 direction;uniform float time;
      float hash(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);}
      float noise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
        return mix(mix(mix(hash(i),hash(i+vec3(1,0,0)),f.x),mix(hash(i+vec3(0,1,0)),hash(i+vec3(1,1,0)),f.x),f.y),mix(mix(hash(i+vec3(0,0,1)),hash(i+vec3(1,0,1)),f.x),mix(hash(i+vec3(0,1,1)),hash(i+vec3(1,1,1)),f.x),f.y),f.z);}
      float cloud(vec3 p){return noise(p)*.57+noise(p*2.07)*.27+noise(p*4.13)*.12+noise(p*8.17)*.04;}
      void main(){
        vec3 d=normalize(direction);float h=smoothstep(-.78,.65,d.y);
        vec3 color=mix(vec3(.095,.15,.17),vec3(.012,.035,.075),h);
        float glow=pow(max(0.,dot(d,normalize(vec3(-.6,.12,-.8)))),7.);
        color+=vec3(.10,.057,.02)*glow;
        float c=cloud(d*vec3(3.5,12.,3.5)+vec3(time*.003,0.,0.));
        float haze=smoothstep(.48,.72,c)*smoothstep(-.85,-.2,d.y)*(1.-smoothstep(.38,.8,d.y));
        color=mix(color,vec3(.14,.19,.20),haze*.25);
        gl_FragColor=vec4(color,1.);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),o=new $e(new Ju(90,48,28),a);r.add(o);const c=new Ay("#c0d6e3","#55504c",1.75);r.add(c);const u=new Wu("#ffe1b7",1.8);u.position.set(-7,10,5),u.castShadow=!0,u.shadow.mapSize.set(2048,2048),Object.assign(u.shadow.camera,{left:-20,right:20,top:20,bottom:-20,near:.5,far:70}),u.shadow.normalBias=.025,u.shadow.radius=5,u.shadow.blurSamples=8,r.add(u);const f=new Wu("#8fb9c9",1.65);f.position.set(4,5,-8),r.add(f);const p=[];for(let M=0;M<160;M++){const b=S=>{const x=Math.sin(M*127.1+S*311.7)*43758.5453;return x-Math.floor(x)};p.push((b(1)-.5)*40,.8+b(2)*13,(b(3)-.5)*40)}const d=new an;d.setAttribute("position",new Pe(p,3));const _=new Ai({transparent:!0,depthWrite:!1,uniforms:{time:n},vertexShader:"uniform float time;void main(){vec3 p=position;p.x+=sin(time*.035+position.z)*.3;p.y+=sin(time*.07+position.x)*.15;vec4 view=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*view;gl_PointSize=clamp(24./-view.z,1.,2.5);}",fragmentShader:"void main(){float r=length(gl_PointCoord-.5);gl_FragColor=vec4(.85,.85,.70,smoothstep(.5,.05,r)*.12);}"}),g=new zE(d,_);r.add(g);const v=performance.now(),y=typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;return{tick:()=>{n.value=y?0:(performance.now()-v)/1e3},dispose:()=>{o.geometry.dispose(),a.dispose(),d.dispose(),_.dispose(),u.shadow.map?.dispose();for(const M of[o,c,u,f,g])r.remove(M)}}}function RR(r){const t=new zl({vertexColors:!0,roughness:.86,metalness:.02,flatShading:!0}),n=new $e(new an,t);n.receiveShadow=!0;let a="";return n.userData.setFootprint=o=>{const c=Math.max(1.5,...o.map(y=>Math.hypot(y.worldX,y.worldZ)))+1.25,u=o.map(y=>`${y.worldX},${y.worldZ}`).join("|");if(u===a&&n.geometry.attributes.position)return;a=u;const f=Math.max(5.5,c*1.5+1.8),p=new Ju(f,112,72),d=p.attributes.position,_=[],g=new ie("#c79756"),v=new ie("#9a7244");for(let y=0;y<d.count;y++){const M=d.getX(y),b=d.getY(y),S=d.getZ(y),x=Math.hypot(M,S);let R=b-f+r+.018;if(b>=0){const O=kn.clamp((x-c)/(f-c),0,1),z=O*O*(3-2*O),V=Math.sin(M*1.73+Math.cos(S*.81))*.025+Math.sin(S*2.1+M*.67)*.02;R=r+.018+(b-f)*z+V*(.3+z*1.7)}d.setY(y,R);const w=Math.min(20,...o.map(O=>Math.hypot(M-O.worldX,S-O.worldZ))),A=Math.exp(-w*w/1.4)*.5,N=g.clone().lerp(v,A);N.multiplyScalar(.96+.035*Math.sin(M*2.7+S*1.8)+.025*Math.cos(S*3.1-M*.8)),_.push(N.r,N.g,N.b)}p.setAttribute("color",new Pe(_,3)),p.computeVertexNormals(),p.computeBoundingSphere(),n.geometry.dispose(),n.geometry=p},n.userData.setFootprint([]),n}const qu=1.05,co=.62,wR=co*.5,Ne="water",Cm=-.08;function Ta(r,t=.84,n=1){return new zl({color:r,roughness:t,metalness:.02,flatShading:!0,transparent:n<1,opacity:n,side:Pi})}function CR(r,t=.35,n=.85){return new zl({color:r,roughness:t,metalness:.02,flatShading:!0,transparent:n<1,opacity:n,side:Ua,depthWrite:!0})}function Py(r){r.traverse(t=>{t.geometry?.dispose();const n=Array.isArray(t.material)?t.material:[t.material];for(const a of n)a?.map?.dispose(),a?.dispose()})}function Nx(r){const t=[...r.children];r.clear();for(const n of t)Py(n)}function He(r,t=0){let n=2166136261+t;for(let a=0;a<r.length;a+=1)n^=r.charCodeAt(a),n=Math.imul(n,16777619);return(n>>>0)%1e4/1e4}function Ox(r,t,n){return(t.x-r.x)*(n.z-r.z)-(t.z-r.z)*(n.x-r.x)}function Dm(r){return r.reduce((t,n)=>({x:t.x+n.worldX/r.length,z:t.z+n.worldZ/r.length}),{x:0,z:0})}function nm(r,t,n,a){return r.map((o,c)=>{const u=o.x-t.x,f=o.z-t.z,p=Math.max(.001,Math.hypot(u,f)),d=n*(.82+He(a,700+c)*.36);return new Z(o.x+u/p*d,o.y,o.z+f/p*d)})}function im(r,t,n,a,o){const c=Math.max(28,Math.min(52,24+r.length*7));let u=[];for(let f=0;f<c;f+=1){const p=f/c*Math.PI*2,d=Math.cos(p),_=Math.sin(p);let g=0;r.forEach((v,y)=>{const M=He(`${a}:${v.column?.id||y}`,710)*Math.PI*2,b=1+Math.cos(p-M*.41)*.075+Math.sin(p*2+M)*.09+Math.sin(p*3-M*.63)*.055+Math.sin(p*5+M*.27)*.025,S=Math.max(.04,n(v,y)*b),x=v.worldX-t.x,R=v.worldZ-t.z,w=x*d+R*_,A=x*x+R*R-w*w,N=S*S-A;N<0||(g=Math.max(g,w+Math.sqrt(N)))}),g<=0&&(g=Math.max(...r.map((v,y)=>{const M=v.worldX-t.x,b=v.worldZ-t.z;return M*d+b*_+n(v,y)}))),u.push(Math.max(.06,g))}for(let f=0;f<1;f+=1)u=u.map((p,d)=>{const _=u[(d-1+u.length)%u.length],g=u[(d+1)%u.length];return p*.68+(_+g)*.16});return u.map((f,p)=>{const d=p/c*Math.PI*2;return new Z(t.x+Math.cos(d)*f,o,t.z+Math.sin(d)*f)})}function DR(r,t){const n=[t.x,t.y,t.z];for(const c of r)n.push(c.x,t.y,c.z);const a=[];for(let c=0;c<r.length;c+=1)a.push(0,(c+1)%r.length+1,c+1);const o=new an;return o.setAttribute("position",new Pe(n,3)),o.setIndex(a),o.computeVertexNormals(),o}function UR(r,t,n){const a=r.map(_=>new de(_.x,_.z));eo.isClockWise(a)||a.reverse();const o=t.map(_=>{const g=_.map(v=>new de(v.x,v.z));return eo.isClockWise(g)&&g.reverse(),g}),c=eo.triangulateShape(a,o),f=a.concat(...o).flatMap(_=>[_.x,n,_.y]),p=[];for(const _ of c){const[g,v,y]=_,M=f[v*3]-f[g*3],b=f[v*3+2]-f[g*3+2],S=f[y*3]-f[g*3],x=f[y*3+2]-f[g*3+2];b*S-M*x>0?p.push(g,v,y):p.push(g,y,v)}const d=new an;return d.setAttribute("position",new Pe(f,3)),d.setIndex(p),d.computeVertexNormals(),d}function ju(r){return r.column.layer==="L0.5"?wR:0}function Um(r,t=()=>!0){const n=new Set(r.map(c=>c.column.id)),a=new Map(r.map(c=>[c.column.id,c])),o=[];for(;n.size;){const c=n.values().next().value,u=[a.get(c)],f=[];for(n.delete(c);u.length;){const p=u.shift();f.push(p);for(const d of[...n]){const _=a.get(d);Math.hypot(_.worldX-p.worldX,_.worldZ-p.worldZ)<qu*1.24&&t(p,_)&&(n.delete(d),u.push(_))}}o.push(f)}return o}function LR(r,t,n){const a=am(r,n[r.column.id]||[]),o=am(t,n[t.column.id]||[]);if(!a||!o||a.floating!==o.floating)return!1;if(!a.floating)return!0;const c=a.baseY+ju(r),u=o.baseY+ju(t);return Math.abs(c-u)<co*.58}function am(r,t){const n=Ml(t);if(!n.length)return null;const a=r.clusterId||r.column.id,o=.9+He(`${a}:${r.column.id}`,1200)*.2,c=co*o,u=r.column.layer==="L0.5"?.5:0,f=n[0].index+u,p=n[0].index*c,d=n.length*c;return{baseLevel:f,baseY:p,floating:n[0].index>0,layerHeight:c,layers:n,topLevel:f+n.length,topY:p+d,visibleHeight:d}}function By(r,t){const n=[];let a=0;for(;a<r.length;){if(Da(r[a].unit).surface!==t){a+=1;continue}const o=a;for(;a+1<r.length&&Da(r[a+1].unit).surface===t;)a+=1;n.push({count:a-o+1,end:a,start:o}),a+=1}return n}function NR(r,t){if(!r.length||Da(r[r.length-1].unit).surface!==t)return 0;const n=By(r,t);return n.length?n[n.length-1].count:0}function OR(r,t,n){const a=n.topY,o=Math.max(.08,n.platformRadius-.12),c=3+Math.floor(He(t,38)*4);for(let u=0;u<c;u+=1){const f=u/c*Math.PI*2+He(t,40)*1.7,p=.04+He(t,50+u)*o,d=.14+He(t,60+u)*.24;if(He(t,90+u)>.45){const M=new $e(new oo(.018,.024,d*.85,5),Ta("#8a6841",.88));M.position.set(Math.cos(f)*p,a+d*.43-.012,Math.sin(f)*p),M.castShadow=!0,r.add(M);const b=new $e(new Qu(.06+He(t,94+u)*.035,d*1.45,5),Ta(u%2?"#d7a334":"#7fae38",.84));b.position.set(M.position.x,a+d*1.08+.035,M.position.z),b.castShadow=!0,r.add(b);continue}const g=new $e(new oo(.01,.017,d,5),Ta("#4f8b46",.9));g.position.set(Math.cos(f)*p,a+d/2-.012,Math.sin(f)*p),r.add(g);const v=["#f4d85c","#f07a91","#f2efe2","#d69b36"][u%4],y=new $e(new Tm(.04+He(t,70+u)*.03,0),Ta(v,.78));y.position.set(g.position.x,a+d+.06,g.position.z),y.castShadow=!0,r.add(y)}}function zR(r,t,n){const a=n.topY,u=(n.layerCount||Math.max(1,Math.round(a/co)))>=3||a>=co*2.8||n.platformRadius<.3?1:2+Math.floor(He(t,168)*2);for(let f=0;f<u;f+=1){const p=f/u*Math.PI*2+He(t,170)*.9,d=Math.max(.08,n.platformRadius-.12),_=u===1?0:Math.min(d,.09+He(t,180+f)*.045),g=u===1?1:.76,v=(.12+He(t,190+f)*.07)*g,y=(.12+He(t,200+f)*.07)*g,M=u===1?.2+He(t,210+f)*.28:.16+He(t,210+f)*.16,b=new $e(new Oa(v,M,y),Ta(f%3===0?"#f2ead4":"#fff7df",.86));b.position.set(Math.cos(p)*_,a+M/2-.006,Math.sin(p)*_),b.rotation.y=p+Math.PI/4,b.castShadow=!0,b.receiveShadow=!1,r.add(b);const S=["#d9952f","#e47f32","#c06d2d","#b78a42"][f%4],x=new $e(new Qu(Math.max(v,y)*.78,.1+M*.18,4),Ta(S,.76));x.rotation.y=b.rotation.y+Math.PI/4,x.position.set(b.position.x,a+M+.075,b.position.z),x.castShadow=!0,r.add(x);const R=new $e(new Oa(v*.12,M*.34,.006),Ta("#1d93a3",.55)),w=new Z(Math.sin(b.rotation.y),0,Math.cos(b.rotation.y));R.position.set(b.position.x+w.x*y*.52,a+M*.58,b.position.z+w.z*y*.52),R.rotation.y=b.rotation.y,r.add(R)}}function PR(){return new zl({roughness:.86,metalness:.02,flatShading:!0,side:Pi,vertexColors:!0})}function BR(r){return r==="vegetation"?new ie("#86aa52"):r==="volcanic"?new ie("#302b27"):r==="human"?new ie("#d0ad68"):r===Ne?new ie("#ad8055"):new ie("#c79756")}function FR(r,t){const n=Da(r[t].unit).surface;if(n!=="human")return n;for(let a=t-1;a>=0;a-=1){const o=Da(r[a].unit).surface;if(!(o==="human"||o==="void"))return o===Ne?"earth":o}return"earth"}function IR(r,t,n,a){const o=r.nearest.profile,c=o.layers,u=He(`${a}:${r.nearest.column.id}`,2310)*Math.PI*2,f=Math.sin(t*1.18+u)*.055+Math.cos(n*1.42-u*.73)*.04+Math.sin((t+n)*.86+u*1.31)*.025,p=(r.height-r.nearest.baseY)/o.layerHeight+f,d=Math.max(0,Math.min(c.length-.001,p)),_=Math.floor(d),g=FR(c,_),v=_===c.length-1;return g===Ne?new ie(v?"#ad8055":"#916848"):g==="volcanic"?new ie("#302b27"):BR(g)}function ef(r,t,n){const a=He(n,1800)*Math.PI*2,o=He(n,1801)*Math.PI*2;return Math.sin(r*1.08+a)*.48+Math.cos(t*1.26-o)*.34+Math.sin((r+t)*.62+a*.37)*.18}function HR(r,t){return r==="volcanic"?new ie("#28221e"):r==="vegetation"?new ie("#5f7438"):r==="human"?new ie("#94713f"):r===Ne?new ie("#7e5b42"):new ie(t?"#8d6840":"#9a7244")}function sm(r,t=.22,n=2){let a=r.map(o=>o.clone());for(let o=0;o<n;o+=1)a=a.map((c,u)=>{const f=a[(u-1+a.length)%a.length],p=a[(u+1)%a.length];return new Z(c.x*(1-t)+(f.x+p.x)/2*t,c.y,c.z*(1-t)+(f.z+p.z)/2*t)});return a}function GR(r,t,n,a){const o=new Set(n.flat());for(const c of o){const u=(He(`${a}:shore:${c}`,2360)-.5)*.025,f=Cm+.095+u,p=r[c*3+1],d=Math.min(p,f);r[c*3+1]=d,t[c].sample.height=d}}function VR(r,t){const n=t[r.column.id]||[],a=Vx(n);if(!a)return null;const o=am(r,n);if(!o)return null;const c=Da(a).surface,u=Math.min(.22,Math.max(0,o.layers.length-2)*.07);return{...r,baseY:o.baseY+ju(r),floating:o.floating,profile:o,radius:.78+He(`${r.clusterId}:${r.column.id}`,1700)*.12+u,surface:c,topRunLength:NR(o.layers,c),topY:o.topY+ju(r)}}function rm(r,t,n){let a=!1;for(let o=0,c=n.length-1;o<n.length;c=o,o+=1){const u=n[o],f=n[c];u.z>t!=f.z>t&&r<(f.x-u.x)*(t-u.z)/(f.z-u.z)+u.x&&(a=!a)}return a}function Ou(r,t,n){let a=1/0;for(let o=0;o<n.length;o+=1){const c=n[o],u=n[(o+1)%n.length],f=u.x-c.x,p=u.z-c.z,d=f*f+p*p,_=d>0?Math.max(0,Math.min(1,((r-c.x)*f+(t-c.z)*p)/d)):0,g=c.x+f*_,v=c.z+p*_;a=Math.min(a,Math.hypot(r-g,t-v))}return a}function zx(r,t,n){let a=null,o=1/0;for(let c=0;c<r.length;c+=1){const u=r[c],f=r[(c+1)%r.length],p=f.x-u.x,d=f.z-u.z,_=p*p+d*d,g=_>0?Math.max(0,Math.min(1,((t-u.x)*p+(n-u.z)*d)/_)):0,v=u.x+p*g,y=u.z+d*g,M=Math.hypot(t-v,n-y);M<o&&(o=M,a=new Z(v,u.y,y))}return a}function kR(r,t,n){let a=null;for(let o=0;o<n.sections.length-1;o+=1){const c=n.sections[o],u=n.sections[o+1],f=u.x-c.x,p=u.z-c.z,d=f*f+p*p,_=d>0?Math.max(0,Math.min(1,((r-c.x)*f+(t-c.z)*p)/d)):0,g=c.x+f*_,v=c.z+p*_,y=Math.hypot(r-g,t-v);(!a||y<a.distance)&&(a={distance:y,width:kn.lerp(c.width,u.width,_),y:kn.lerp(c.y,u.y,_)})}return a}function XR(r,t,n,a,o){let c=n;for(const u of a){if(u.kind==="step-channel"){const y=kR(r,t,u);if(!y||y.distance>=y.width+u.bankWidth)continue;if(y.distance<=y.width){const M=y.distance/Math.max(.001,y.width),b=y.y-u.depth+M*.012;c=Math.min(c,b)}else{const M=1-(y.distance-y.width)/u.bankWidth,b=M*M*(3-2*M),S=y.y+.025;c=kn.lerp(c,Math.max(c,S),b*.8)}continue}const f=rm(r,t,u.hull),p=Ou(r,t,u.hull);if(f){const y=u.levelY-(u.surface===Ne?.055:.045);if(u.shoreWidth&&p<=u.shoreWidth){const M=p/u.shoreWidth,b=M*M*(3-2*M);c=kn.lerp(u.levelY+.038,u.levelY-.006,b)}else if(u.shoreWidth&&p<=u.shoreWidth+u.innerSlopeWidth){const M=(p-u.shoreWidth)/u.innerSlopeWidth,b=M*M*(3-2*M);c=kn.lerp(u.levelY-.006,y,b)}else c=Math.min(c,y);continue}if(p>=u.bankWidth)continue;const d=1-p/u.bankWidth,_=d*d*(3-2*d),g=ef(r,t,`${o}:${u.id}:bank`)*.012,v=u.levelY+.04+_*.045+g*_;c=Math.max(c,v)}return c}function WR(r,t,n,a,o){let c=n;for(const u of a){if(u.surface!=="human"&&u.surface!=="vegetation")continue;const f=Math.hypot(r-u.worldX,t-u.worldZ),p=u.surface==="human",d=p?.34:.24,_=p?.62:.56;if(f>=_)continue;const g=p?0:ef(r,t,`${o}:${u.column.id}:green-support`)*.025,v=u.topY+.002+g;if(f<=d){c=Math.max(c,v);continue}const y=(_-f)/(_-d),M=y*y*(3-2*y);c=Math.max(c,kn.lerp(n,v,M))}return c}function YR(r,t,n,a){let o=n;for(const c of a){if(!rm(r,t,c.hull)){const p=Ou(r,t,c.hull);if(p>=c.outerBankWidth)continue;const d=1-p/c.outerBankWidth,_=d*d*(3-2*d),g=ef(r,t,`${c.id}:outer-bank`)*.01,v=c.levelY+.035+.04*_+g*_;o=Math.max(o,v);continue}const u=c.surface===Ne?.055:.045,f=Ou(r,t,c.hull);if(f<c.outerBankWidth){const p=f/c.outerBankWidth,d=p*p*(3-2*p),_=c.levelY+(c.surface===Ne?.052:.045),g=c.levelY-u;o=kn.lerp(_,g,d);continue}if(c.islandHull&&rm(r,t,c.islandHull)){const p=Ou(r,t,c.islandHull);if(p>=c.islandBankWidth)continue;const d=p/c.islandBankWidth,_=d*d*(3-2*d),g=c.levelY-u;o=Math.min(o,kn.lerp(g,o,_));continue}o=Math.min(o,c.levelY-u)}return o}function tp(r,t,n,a,o=[],c=[]){let u=0,f=0,p=n[0],d=1/0,_=0;const g=Math.min(...n.map(O=>O.baseY));for(const O of n){const z=Math.hypot(r-O.worldX,t-O.worldZ);z<d&&(d=z,p=O);const V=z/O.radius;if(V<1){const T=Math.pow(1-V*V,2);u+=T,f+=O.topY*T,_=Math.max(_,T)}}if(u<=0)return null;const v=f/u,y=Math.min(1,u*1.15),M=1+Math.max(0,p.profile.layers.length-2)*.16,b=Math.pow(y,M),S=.07+Math.min(.06,Math.max(0,p.profile.layers.length-2)*.025),x=ef(r,t,a)*S,R=g+(v-g)*b+x*b,w=XR(r,t,R,o,a),A=YR(r,t,w,c),N=WR(r,t,A,n,a);return{baseY:g,edgeFade:b,height:N,nearest:p,strongest:_,surface:p.surface}}function qR(r,t,n=[],a=[]){const c=.2*Math.sqrt(3)/2,u=Math.min(...r.map(P=>P.worldX-P.radius))-.18,f=Math.max(...r.map(P=>P.worldX+P.radius))+.18,p=Math.min(...r.map(P=>P.worldZ-P.radius))-.18,d=Math.max(...r.map(P=>P.worldZ+P.radius))+.18,_=[],g=new Map,v=.05;function y(P,X){return[Math.floor(P/v),Math.floor(X/v)]}function M(P,X){return r.some(it=>{if(it.surface!=="human"&&it.surface!=="vegetation")return!1;const pt=it.surface==="human"?.36:.27;return Math.hypot(P-it.worldX,X-it.worldZ)<=pt})}function b(P,X,it=!1){const pt=tp(P,X,r,t,n,a);if(!pt)return null;const[ut,Et]=y(P,X);for(let ee=-1;ee<=1;ee+=1)for(let Dt=-1;Dt<=1;Dt+=1){const W=(g.get(`${ut+ee}:${Et+Dt}`)||[]).find(Se=>Math.hypot(_[Se].x-P,_[Se].z-X)<.036);if(W!==void 0)return it&&(_[W].feature=!0),M(P,X)&&(_[W].locked=!0),W}const Nt=_.length;_.push({feature:it,locked:M(P,X),sample:pt,x:P,z:X});const Ot=`${ut}:${Et}`,Ft=g.get(Ot)||[];return Ft.push(Nt),g.set(Ot,Ft),Nt}const S=Math.ceil((d-p)/c)+1,x=Math.ceil((f-u)/.2)+2;for(let P=0;P<S;P+=1){const X=p+P*c;for(let it=0;it<x;it+=1){const pt=P%2?.1:0,ut=u+it*.2+pt,Et=(He(`${t}:sample-x:${P}:${it}`,2500)-.5)*.2*.22,Nt=(He(`${t}:sample-z:${P}:${it}`,2510)-.5)*c*.18;b(ut+Et,X+Nt)}}function R(P,X,it,pt){const ut=He(pt,2520)*Math.PI*2;for(let Et=0;Et<it;Et+=1){const Nt=Et/it*Math.PI*2,Ot=1+Math.sin(Nt*3+ut)*.045+Math.cos(Nt*2-ut*.61)*.025;b(P.worldX+Math.cos(Nt)*X*Ot,P.worldZ+Math.sin(Nt)*X*Ot,!0)}}for(const P of r){b(P.worldX,P.worldZ,!0),R(P,P.radius*.94,18,`${t}:${P.column.id}:outline`),(P.surface==="human"||P.surface==="vegetation")&&R(P,P.surface==="human"?.36:.27,12,`${t}:${P.column.id}:support`);for(let X=1;X<P.profile.layers.length;X+=1){const it=P.baseY+X*P.profile.layerHeight,pt=Fy(P,it);pt>.08&&R(P,pt,12,`${t}:${P.column.id}:layer:${X}`)}}function w(P){if(P?.length)for(let X=0;X<P.length;X+=1){const it=P[X],pt=P[(X+1)%P.length],ut=Math.hypot(pt.x-it.x,pt.z-it.z),Et=Math.max(1,Math.ceil(ut/(.2*.72)));for(let Nt=0;Nt<Et;Nt+=1){const Ot=Nt/Et;b(kn.lerp(it.x,pt.x,Ot),kn.lerp(it.z,pt.z,Ot),!0)}}}for(const P of n)if(w(P.hull),w(P.liquidHull),P.kind==="step-channel")for(const X of P.sections)b(X.x,X.z,!0);for(const P of a)w(P.hull),w(P.islandHull),w(P.liquidHull),w(P.liquidHoleHull);for(let P=0;P<4&&!(_.length<3);P+=1){const X=Yu.from(_,ut=>ut.x,ut=>ut.z),it=new Set;for(let ut=0;ut<X.triangles.length;ut+=3){const Et=[X.triangles[ut],X.triangles[ut+1],X.triangles[ut+2]];for(let Nt=0;Nt<3;Nt+=1){const Ot=Et[Nt],Ft=Et[(Nt+1)%3];it.add(Ot<Ft?`${Ot}:${Ft}`:`${Ft}:${Ot}`)}}const pt=_.length;for(const ut of it){const[Et,Nt]=ut.split(":").map(Number),Ot=_[Et],Ft=_[Nt],ee=Math.hypot(Ot.x-Ft.x,Ot.z-Ft.z),Dt=Math.abs(Ot.sample.height-Ft.sample.height);if(!(ee<.042||Dt<.22)&&(b((Ot.x+Ft.x)/2,(Ot.z+Ft.z)/2,!0),_.length-pt>=1800))break}if(_.length===pt)break}if(_.length<3)return{geometry:new an};const A=Yu.from(_,P=>P.x,P=>P.z),N=[],O=.2*3.15;function z(P,X){return!!tp(P,X,r,t,n,a)}for(let P=0;P<A.triangles.length;P+=3){let X=A.triangles[P],it=A.triangles[P+1],pt=A.triangles[P+2];const ut=_[X],Et=_[it],Nt=_[pt],Ot=Math.hypot(ut.x-Et.x,ut.z-Et.z),Ft=Math.hypot(Et.x-Nt.x,Et.z-Nt.z),ee=Math.hypot(Nt.x-ut.x,Nt.z-ut.z),Dt=Math.max(Ot,Ft,ee),ue=Math.abs(Ox(ut,Et,Nt)),W=ue/Math.max(.001,Dt);Dt>O||ue<22e-5||Dt/Math.max(5e-4,W)>9.2||![[(ut.x+Et.x+Nt.x)/3,(ut.z+Et.z+Nt.z)/3],[(ut.x+Et.x)/2,(ut.z+Et.z)/2],[(Et.x+Nt.x)/2,(Et.z+Nt.z)/2],[(Nt.x+ut.x)/2,(Nt.z+ut.z)/2]].every(([ge,we])=>z(ge,we))||(Ox(ut,Et,Nt)>0&&([it,pt]=[pt,it]),N.push([X,it,pt]))}const V=new Map(_.map((P,X)=>[X,new Set]));for(const[P,X,it]of N)V.get(P).add(X).add(it),V.get(X).add(P).add(it),V.get(it).add(P).add(X);for(let P=0;P<2;P+=1){const X=new Map;for(let it=0;it<_.length;it+=1){const pt=_[it],ut=[...V.get(it)];if(pt.locked||ut.length<3)continue;const Et=ut.map(Dt=>_[Dt].sample.height),Nt=Et.reduce((Dt,ue)=>Dt+ue,0)/Et.length,Ot=Math.max(...Et,pt.sample.height)-Math.min(...Et,pt.sample.height),Ft=pt.feature?.08:Ot>.34?.24:.14,ee=kn.lerp(pt.sample.height,Nt,Ft);X.set(it,kn.clamp(ee,pt.sample.height-.1,pt.sample.height+.1))}for(const[it,pt]of X)_[it].sample.height=pt}const T=new Map;function D(P,X){const it=P<X?`${P}:${X}`:`${X}:${P}`;T.set(it,(T.get(it)||0)+1)}for(const[P,X,it]of N)D(P,X),D(X,it),D(it,P);const F=Dm(r),H=r.some(P=>P.floating),j=Math.min(...r.map(P=>P.baseY)),et=H?j-.5:Cm-.035,rt=[...T.entries()].filter(([,P])=>P===1).map(([P])=>P.split(":").map(Number));if(!H){const P=_.flatMap(X=>[X.x,X.sample.height,X.z]);GR(P,_,rt,t)}const B=[],k=[],q=new Z(.38,.88,.28).normalize();function ft(P,X,it,pt,ut,Et=1){const Nt=new Z(it.x-X.x,it.y-X.y,it.z-X.z),Ot=new Z(pt.x-X.x,pt.y-X.y,pt.z-X.z),Ft=Nt.cross(Ot).normalize(),ee=Math.max(0,Ft.dot(q)),Dt=1-Math.abs(Ft.y),ue=(He(`${t}:face:${ut}`,2630)-.5)*(.045+Dt*.07);return P.clone().multiplyScalar((.84+ee*.16+ue)*Et)}function vt(P,X,it,pt,ut,Et=1){const Nt=ft(pt,P,X,it,ut,Et);B.push(P.x,P.y,P.z,X.x,X.y,X.z,it.x,it.y,it.z);for(let Ot=0;Ot<3;Ot+=1)k.push(Nt.r,Nt.g,Nt.b)}for(let P=0;P<N.length;P+=1){const[X,it,pt]=N[P],ut=_[X],Et=_[it],Nt=_[pt],Ot={x:ut.x,y:ut.sample.height,z:ut.z},Ft={x:Et.x,y:Et.sample.height,z:Et.z},ee={x:Nt.x,y:Nt.sample.height,z:Nt.z},Dt=(Ot.x+Ft.x+ee.x)/3,ue=(Ot.z+Ft.z+ee.z)/3,W=tp(Dt,ue,r,t,n,a)||ut.sample;W.height=(Ot.y+Ft.y+ee.y)/3,vt(Ot,Ft,ee,IR(W,Dt,ue,t),`top:${P}`)}function I(){const P=new Map,X=new Set,it=(ut,Et)=>ut<Et?`${ut}:${Et}`:`${Et}:${ut}`;for(const[ut,Et]of rt)P.has(ut)||P.set(ut,[]),P.has(Et)||P.set(Et,[]),P.get(ut).push(Et),P.get(Et).push(ut),X.add(it(ut,Et));const pt=[];for(;X.size;){const[ut,Et]=X.values().next().value.split(":"),Nt=Number(ut);let Ot=Nt,Ft=Number(Et);const ee=[Nt];X.delete(it(Ot,Ft));let Dt=0;for(;Ft!==Nt&&Dt<rt.length+2;){ee.push(Ft);const ue=(P.get(Ft)||[]).filter(Se=>Se!==Ot&&X.has(it(Ft,Se)));if(!ue.length)break;const W=ue[0];X.delete(it(Ft,W)),Ot=Ft,Ft=W,Dt+=1}Ft===Nt&&ee.length>=3&&pt.push(ee)}return pt}function at(P,X,it,pt,ut,Et=1){const Nt=new Z(X.x-P.x,X.y-P.y,X.z-P.z),Ot=new Z(it.x-P.x,it.y-P.y,it.z-P.z),Ft=Nt.cross(Ot),ee=(P.x+X.x+it.x)/3-F.x,Dt=(P.z+X.z+it.z)/3-F.z;Ft.x*ee+Ft.z*Dt<0?vt(P,it,X,pt,ut,Et):vt(P,X,it,pt,ut,Et)}function gt(P,X,it,pt){for(let ut=0;ut<P.length;ut+=1){const Et=(ut+1)%P.length,Nt=it(ut);He(`${t}:${pt}:diagonal:${ut}`,2670)>.5?(at(P[ut],P[Et],X[Et],Nt,`${pt}:${ut}:a`,.95),at(P[ut],X[Et],X[ut],Nt,`${pt}:${ut}:b`,.95)):(at(P[ut],P[Et],X[ut],Nt,`${pt}:${ut}:a`,.95),at(P[Et],X[Et],X[ut],Nt,`${pt}:${ut}:b`,.95))}}const Rt=I();for(let P=0;P<Rt.length;P+=1){let X=function(Dt,ue,W){return pt.map((Se,ge)=>({x:F.x+(Se.x-F.x)*Dt,y:j+ue+(He(`${t}:float:${W}:${ge}`,2690)-.5)*.045,z:F.z+(Se.z-F.z)*Dt}))};const pt=Rt[P].map(Dt=>({sample:_[Dt].sample,x:_[Dt].x,y:_[Dt].sample.height,z:_[Dt].z})),ut=Dt=>{const W=pt[Dt].sample.nearest.profile.layers[0];return HR(Da(W.unit).surface,H)};if(!H){const Dt=pt.map(ue=>{const W=ue.x-F.x,Se=ue.z-F.z,ge=Math.max(.001,Math.hypot(W,Se)),we=.11;return{x:ue.x+W/ge*we,y:et,z:ue.z+Se/ge*we}});gt(pt,Dt,ut,`ground:${P}`);continue}const Et=X(.78,-.13,"shoulder"),Nt=X(.48,-.34,"lower"),Ot=X(.23,-.5,"base");gt(pt,Et,ut,`float:${P}:shoulder`),gt(Et,Nt,ut,`float:${P}:lower`),gt(Nt,Ot,()=>new ie("#765837"),`float:${P}:base`);const Ft=Ot.map(Dt=>new de(Dt.x,Dt.z)),ee=eo.triangulateShape(Ft,[]);for(let Dt=0;Dt<ee.length;Dt+=1){const[ue,W,Se]=ee[Dt];vt(Ot[ue],Ot[Se],Ot[W],new ie("#6e5134"),`float-cap:${P}:${Dt}`,.9)}}const Lt=new an;return Lt.setAttribute("position",new Pe(B,3)),Lt.setAttribute("color",new Pe(k,3)),Lt.computeVertexNormals(),{geometry:Lt}}function Px(r,t,n){const a=[],o=r.filter(c=>c.surface===t);for(const c of Um(o,(u,f)=>Math.abs(u.profile.topLevel-f.profile.topLevel)<.01)){const u=`${t}:${c.map(y=>y.column.id).sort().join("|")}`,f=Dm(c),p=c.some(y=>y.topRunLength>=2),d=Math.min(...c.map(y=>y.topY))-(t===Ne?.022:.016),_=im(c,f,y=>{const M=y.topRunLength>=2?t===Ne?.27:.25:t===Ne?.47:.45,b=y.topRunLength>=2?.035:.07;return M+(He(`${n}:${u}:${y.column.id}`,2380)-.5)*b},u,d);if(_.length<3)continue;const g=p?t===Ne?.12:.11:t===Ne?.105:.095,v=sm(nm(_,f,-g,`${u}:liquid-edge`).map(y=>new Z(y.x,d,y.z)),.14,1);v.length<3||a.push({bankWidth:p?t===Ne?.17:.16:t===Ne?.27:.24,center:new Z(f.x,d,f.z),color:t===Ne?"#55c6ea":"#f45c31",columnIds:c.map(y=>y.column.id),hull:_,id:u,innerSlopeWidth:t===Ne?.1:.085,levelY:d,liquidHull:v,logicalLevel:c[0].profile.topLevel,opacity:t===Ne?.88:.96,shoreWidth:g,surface:t})}return a}function Bx(r,t,n,a){const o=r.filter(f=>f.surface===n),c=[],u=new Set;for(let f=0;f<o.length;f+=1)for(let p=f+1;p<o.length;p+=1){const d=o[f],_=o[p];if(Math.hypot(d.worldX-_.worldX,d.worldZ-_.worldZ)>=qu*1.24)continue;const v=[d,_].sort((q,ft)=>q.profile.topLevel-ft.profile.topLevel),[y,M]=v;if(Math.abs(y.profile.topLevel-1)>=.01||Math.abs(M.profile.topLevel-1.5)>=.01)continue;const b=t.find(q=>q.columnIds?.includes(y.column.id)),S=t.find(q=>q.columnIds?.includes(M.column.id));if(!b||!S||b.id===S.id)continue;const x=[b.id,S.id].sort().join("<->");if(u.has(x))continue;u.add(x);const R=zx(S.liquidHull,b.center.x,b.center.z),w=zx(b.liquidHull,S.center.x,S.center.z);if(!R||!w)continue;const A=R.clone().lerp(S.center,.09),N=w.clone().lerp(b.center,.09),O=N.x-A.x,z=N.z-A.z,V=Math.max(.001,Math.hypot(O,z)),T=-z/V,D=O/V,F=`${n}:half-step:${x}`,H=(He(`${a}:${F}:bend`,2880)-.5)*.12,j=[],et=8;for(let q=0;q<=et;q+=1){const ft=q/et,vt=ft*ft*(3-2*ft),I=Math.sin(ft*Math.PI)*H,gt=(n===Ne?.075:.085)*(.92+Math.sin(ft*Math.PI)*.32+(He(`${F}:width:${q}`,2890)-.5)*.12);j.push({width:gt,x:kn.lerp(A.x,N.x,ft)+T*I,y:kn.lerp(S.levelY,b.levelY,vt),z:kn.lerp(A.z,N.z,ft)+D*I})}const rt=j.map(q=>new Z(q.x+T*q.width,q.y,q.z+D*q.width)),k=[...j.map(q=>new Z(q.x-T*q.width,q.y,q.z-D*q.width))].reverse();c.push({bankWidth:n===Ne?.09:.1,color:n===Ne?"#55c6ea":"#f45c31",depth:n===Ne?.035:.04,hull:[...rt,...k],id:F,kind:"step-channel",liquidHull:[...rt,...k],opacity:n===Ne?.9:.97,perpendicularX:T,perpendicularZ:D,sections:j,surface:n})}return c}function Fy(r,t){const n=Math.max(.001,r.topY-r.baseY),a=Math.max(.02,Math.min(.96,(t-r.baseY)/n)),o=Math.max(.02,Math.min(.96,a/1.15)),c=Math.sqrt(Math.max(.02,1-Math.sqrt(o)));return r.radius*c}function Fx(r,t,n){const a=new Map;for(const c of r){const u=c.profile.layers;for(const f of By(u,t)){if(f.count>=2||f.start>=u.length-1)continue;const p=c.profile.baseLevel+f.start+1,d={...c,column:{...c.column,id:`${c.column.id}:terrace:${f.start}`},levelIndex:p,levelY:c.baseY+(f.start+1)*c.profile.layerHeight-.008,ordinal:f.start,runLength:f.count,sourceMeta:c},_=p.toFixed(1),g=a.get(_)||[];g.push(d),a.set(_,g)}}const o=[];for(const[c,u]of a)for(const f of Um(u)){const p=`${t}:terrace:${c}:${f.map(S=>S.column.id).sort().join("|")}`,d=Dm(f),_=Math.min(...f.map(S=>S.levelY)),g=f.map(S=>{const x=Fy(S.sourceMeta,_),R=S.runLength>=2?.38:S.sourceMeta.surface==="human"?.34:.24,w=Math.max(R,Math.min(S.sourceMeta.radius*.5,x-.08)),A=S.runLength>=2?t===Ne?.28:.25:t===Ne?.24:.21,N=Math.min(S.sourceMeta.radius*.9,Math.max(S.sourceMeta.radius*.68,w+A));return{...S,islandRadius:w,outerRadius:N}}),v=im(g,d,S=>S.outerRadius,`${p}:outer`,_),y=im(g,d,S=>S.islandRadius,`${p}:island`,_);if(v.length<3||y.length<3)continue;const M=sm(nm(y,d,-.055,`${p}:liquid-hole`).map(S=>new Z(S.x,_,S.z)),.16,1),b=sm(nm(v,d,t===Ne?-.085:-.075,`${p}:liquid-edge`).map(S=>new Z(S.x,_,S.z)),.14,1);o.push({center:new Z(d.x,_,d.z),color:t===Ne?"#55c6ea":"#f45c31",hull:v,id:p,islandBankWidth:.14,islandHull:y,levelY:_,liquidHoleHull:M,liquidHull:b,opacity:t===Ne?.88:.96,outerBankWidth:t===Ne?.22:.2,surface:t})}return o}function jR(r,t){for(const n of t){const a=new $e(n.islandHull?UR(n.liquidHull||n.hull,[n.liquidHoleHull||n.islandHull],n.levelY):DR(n.liquidHull||n.hull,n.center),CR(n.color,n.surface===Ne?.22:.4,n.opacity));a.renderOrder=2,a.receiveShadow=!1,r.add(a)}}function ZR(r,t){for(const n of t){const a=[],o=[];for(let d=0;d<n.sections.length;d+=1){const _=n.sections[d],g=_.y+.006,v=_.x+n.perpendicularX*_.width,y=_.z+n.perpendicularZ*_.width,M=_.x-n.perpendicularX*_.width,b=_.z-n.perpendicularZ*_.width;if(a.push(v,g,y,M,g,b,v,g-n.depth,y,M,g-n.depth,b),d===0)continue;const S=(d-1)*4,x=d*4;o.push(S,S+1,x,S+1,x+1,x,S+2,S,x+2,S,x,x+2,S+1,S+3,x+1,S+3,x+3,x+1,S+3,S+2,x+3,S+2,x+2,x+3)}const c=(n.sections.length-1)*4;o.push(2,0,3,0,1,3,c+2,c+3,c,c,c+3,c+1);const u=new an;u.setAttribute("position",new Pe(a,3)),u.setIndex(o),u.computeVertexNormals();const f=Ta(n.color,n.surface===Ne?.24:.4,n.opacity);f.polygonOffset=!0,f.polygonOffsetFactor=-1,f.polygonOffsetUnits=-1;const p=new $e(u,f);p.renderOrder=3,p.receiveShadow=!1,r.add(p)}}function KR(r,t,n){for(const a of t){const o={layerCount:a.profile.layers.length,platformRadius:.34,topSurface:a.surface,topY:a.topY},c=new Ys;if(c.position.set(a.worldX,0,a.worldZ),a.surface==="vegetation"?OR(c,a.column.id,o):a.surface==="human"&&zR(c,`${a.clusterId}:${a.column.id}`,o),n.has(a.column.id)){const u=new $e(new Am(.42,.014,6,40),Ta("#e84737",.44));u.rotation.x=Math.PI/2,u.position.y=a.topY+.04,c.add(u)}r.add(c)}}function QR(r,t,n,a){const o=t.map(v=>VR(v,n)).filter(Boolean);if(!o.length)return;const c=o.map(v=>v.column.id).sort().join("|");for(const v of o)v.clusterId=c;const u=[...Px(o,Ne,c),...Px(o,"volcanic",c)],f=[...Fx(o,Ne),...Fx(o,"volcanic")],p=[...Bx(o,u,Ne,c),...Bx(o,u,"volcanic",c)],d=[...u,...p],{geometry:_}=qR(o,c,d,f),g=new $e(_,PR());g.castShadow=!0,g.receiveShadow=!1,r.add(g),jR(r,[...f,...u]),ZR(r,p),KR(r,o,a)}function JR({snapshot:r,latestColumnId:t,dark:n=!1}){const a=Ae.useRef(null),o=Ae.useRef(null),c=Ae.useRef(null),u=Ae.useRef(null),f=Ae.useRef(null),p=Ae.useRef(new Z(0,.7,0)),d=Ae.useRef({azimuth:.62,elevation:.58,radius:9.4}),_=Ae.useRef(null),g=r.topology||yl,v=r.board||{},y=r.active_faults||{},M=Ae.useMemo(()=>wm(r.module_layout,g),[r.module_layout,g]);function b(){const A=c.current;if(!A)return;const N=p.current,O=d.current,z=Math.cos(O.elevation)*O.radius;A.position.set(N.x+Math.sin(O.azimuth)*z,N.y+Math.sin(O.elevation)*O.radius,N.z+Math.cos(O.azimuth)*z),A.lookAt(N)}Ae.useEffect(()=>{const A=a.current,N=new _y;N.background=new ie(n?"#080808":"#12aeb7"),N.fog=new Ku(n?"#080808":"#12aeb7",10,28);const O=new hi(40,1,.1,120);c.current=O,b();const z=new Ly({antialias:!0});z.setPixelRatio(Math.min(window.devicePixelRatio,2)),z.shadowMap.enabled=!0,z.shadowMap.type=um,o.current=z,A.appendChild(z.domElement);const V=AR(N,z),T=RR(Cm);f.current=T,N.add(T);const D=new Ys;u.current=D,N.add(D);function F(){const et=A.getBoundingClientRect();z.setSize(et.width,Math.max(1,et.height)),O.aspect=et.width/Math.max(1,et.height),O.updateProjectionMatrix()}F(),window.addEventListener("resize",F);let H=0;function j(){H=requestAnimationFrame(j),V.tick(),z.render(N,O)}return j(),()=>{cancelAnimationFrame(H),window.removeEventListener("resize",F),Nx(D),Py(T),V.dispose(),z.renderLists.dispose(),z.dispose(),z.domElement.parentNode===A&&A.removeChild(z.domElement)}},[]),Ae.useEffect(()=>{const A=u.current,N=c.current;if(!A||!N||!g?.columns?.length)return;Nx(A);const O=g.columns.map(q=>{const ft=Ny(q,M,g);return{column:q,gridX:ft.col,gridZ:ft.row}}),z=O.filter(q=>{const ft=v[q.column.id]||[];return Ml(ft).length>0}),V=z.length?z:O,T={x:(Math.min(...V.map(q=>q.gridX))+Math.max(...V.map(q=>q.gridX)))/2,z:(Math.min(...V.map(q=>q.gridZ))+Math.max(...V.map(q=>q.gridZ)))/2},D=O.map(q=>({...q,worldX:(q.gridX-T.x)*qu,worldZ:(q.gridZ-T.z)*qu})),F=D.filter(q=>{const ft=v[q.column.id]||[];return Ml(ft).length>0});f.current?.userData.setFootprint(F.length?F:D);const H=new Set(Object.keys(y)),j=Um(F,(q,ft)=>LR(q,ft,v));for(const q of j)QR(A,q,v,H);const et=F.length?F:D,rt=Math.max(Math.max(...et.map(q=>q.gridX))-Math.min(...et.map(q=>q.gridX))+1,Math.max(...et.map(q=>q.gridZ))-Math.min(...et.map(q=>q.gridZ))+1),B=Math.max(1,...Object.values(v).map(q=>q.length)),k=Math.max(7.2,rt*1.18+B*.7);p.current.set(0,Math.min(2.6,B*co*.45),0),d.current.radius=k*1.12,b(),N.updateProjectionMatrix()},[g,M,v,y,t]);function S(A){_.current={pointerId:A.pointerId,x:A.clientX,y:A.clientY},A.currentTarget.setPointerCapture?.(A.pointerId)}function x(A){const N=_.current;if(!N||N.pointerId!==A.pointerId||!u.current)return;const O=A.clientX-N.x,z=A.clientY-N.y;d.current.azimuth-=O*.006,d.current.elevation=Math.max(.12,Math.min(1.28,d.current.elevation+z*.004)),b(),N.x=A.clientX,N.y=A.clientY}function R(A){A.currentTarget.hasPointerCapture?.(A.pointerId)&&A.currentTarget.releasePointerCapture(A.pointerId),_.current=null}function w(A){if(!c.current)return;A.preventDefault();const N=A.deltaY>0?1.08:.92,O=d.current.radius*N;O>3.2&&O<42&&(d.current.radius=O,b())}return Yt.jsx("div",{ref:a,className:"terrain-scene",onPointerDown:S,onPointerMove:x,onPointerUp:R,onPointerCancel:R,onWheel:w})}const Ix={earth:{color:"#a06d3f"},water:{color:"#2f8fd3"},fire:{color:"#d5482f"},spacer:{color:"#f4f0df"},animal:{color:"#6eb64b"},human:{color:"#9b62c7"}},Hx={live:"Live input",setup:"Hardware setup needed",connecting:"Connecting",offline:"Board disconnected",waiting:"Waiting for board",recovering:"Restoring board",attention:"Check board input",reconnecting:"Reconnecting","invalid-data":"Input needs attention","launcher-offline":"Launcher unavailable"};function $R(){const r=l1(),[t,n]=Ae.useState(!1),[a,o]=Ae.useState("hardware"),[c,u]=Ae.useState(np),[f,p]=Ae.useState(Yi.columns[0].id),[d,_]=Ae.useState("A0"),[g,v]=Ae.useState("C0"),y=Ae.useRef(null),M=Ae.useMemo(()=>kx(c,ep),[c]),b=a==="test"?M:r.snapshot,S=Ae.useMemo(()=>s1(b.board),[b.board]),x=Ae.useMemo(()=>Object.keys(b.active_faults||{}),[b.active_faults]),R=b.detections?.[0]?.column_id||null,w=c.board[f]||[],A=Ae.useRef([]),[N,O]=Ae.useState("");function z(H){A.current.push(c),A.current.length>100&&A.current.shift(),u(H),O("")}function V(){const H=i1(c);H&&(z(dd(c,H,"add",g)),p(H),_(Yi.columns.find(j=>j.id===H).port),O(`${g} added · ${H} · layer ${(c.board[H]?.length||0)+1}`))}function T(){const H=A.current.pop();H&&(u(H),O("Last change undone"))}const D=a==="hardware"&&r.status==="live";function F(){n(!1),y.current?.focus()}return Ae.useEffect(()=>{function H(j){j.key==="Escape"&&t&&F()}return window.addEventListener("keydown",H),()=>window.removeEventListener("keydown",H)},[t]),Yt.jsxs("main",{className:"terrain-shell",children:[Yt.jsxs("header",{className:"terrain-toolbar",children:[Yt.jsxs("div",{className:"wordmark",children:[Yt.jsx("span",{children:"00"}),Yt.jsx("h1",{children:"TERRAIN"})]}),Yt.jsxs("div",{className:"controls",children:[Yt.jsxs("span",{className:`input-status ${D?"live":""}`,role:"status",children:[Yt.jsx("i",{}),a==="test"?"Test board · simulated":Hx[r.status]]}),a==="test"&&Yt.jsx("button",{onClick:()=>{o("hardware"),n(!1)},children:"Return to hardware"}),Yt.jsx("button",{ref:y,"aria-expanded":t,"aria-controls":"test-panel",onClick:()=>{t||o("test"),n(!t)},children:t?"Hide test view":"Test view"})]})]}),Yt.jsxs("section",{className:"world-stage","aria-label":"Real-time terrain",children:[Yt.jsx(JR,{snapshot:b,latestColumnId:R,dark:!0}),!S.occupied&&Yt.jsxs("div",{className:"empty-state",children:[Yt.jsx("span",{className:"empty-symbol",children:"⬡"}),Yt.jsx("h2",{children:"A world begins with a block."}),Yt.jsx("p",{children:a==="test"?"Add blocks in the test view.":r.status==="setup"?"Confirm Hardware settings above, then connect your board.":"Place a block on your board. The landscape responds instantly."})]}),a==="hardware"&&S.occupied>0&&!D&&Yt.jsxs("p",{className:"stale-notice",children:[Hx[r.status]," · Showing the last received board"]}),Yt.jsxs("div",{className:"stage-caption",children:[Yt.jsx("span",{children:a==="test"?"SIMULATED INPUT":"REAL-TIME LANDSCAPE"}),Yt.jsx("span",{children:"Drag to orbit · Scroll to zoom"})]})]}),t&&Yt.jsxs("aside",{id:"test-panel",className:"test-panel","aria-label":"Test view",children:[Yt.jsxs("div",{className:"panel-heading",children:[Yt.jsxs("div",{children:[Yt.jsx("span",{className:"eyebrow",children:"SIMULATED INPUT"}),Yt.jsx("h2",{children:"Test playground"})]}),Yt.jsx("button",{"aria-label":"Close test view",onClick:F,children:"×"})]}),Yt.jsxs("details",{className:"monitor-toggle",children:[Yt.jsx("summary",{children:"Block monitor"}),Yt.jsx(dR,{topology:b.topology||yl,moduleLayout:b.module_layout,board:b.board||{},latestColumnId:R,faultedColumnIds:x,unitMeta:Ix})]}),Yt.jsxs("div",{className:"test-stats","aria-live":"polite",children:[Yt.jsxs("span",{children:[S.totalUnits," blocks"]}),Yt.jsxs("span",{children:[S.tallest," layers"]}),Yt.jsxs("span",{children:[x.length," issues"]})]}),Yt.jsxs("div",{className:"test-content",children:[Yt.jsxs(Yt.Fragment,{children:[Yt.jsx("p",{className:"test-note",children:"8 boards · 64 base + 64 offset positions. Edits update instantly."}),Yt.jsx("div",{className:"unit-picker",role:"group","aria-label":"Unit type",children:Object.entries(ep).map(([H,j])=>Yt.jsxs("button",{"aria-pressed":g===H,onClick:()=>v(H),children:[zu[j==="support"?"spacer":j].short,Yt.jsx("small",{children:H})]},H))}),Yt.jsxs("div",{className:"edit-buttons",children:[Yt.jsx("button",{disabled:!Yi.columns.some(H=>(c.board[H.id]?.length||0)<Yi.max_stack),onClick:V,children:"Add unit"}),Yt.jsx("button",{disabled:!A.current.length,onClick:T,children:"Undo"})]}),Yt.jsx("p",{className:"random-feedback",role:"status",children:N||"Choose a unit, then add. Mostly central, occasionally scattered."}),Yt.jsxs("details",{className:"manual-test",children:[Yt.jsx("summary",{children:"Precise placement & board layout"}),Yt.jsxs("label",{children:["Board layout",Yt.jsx("select",{value:c.module_layout.grid_cols,onChange:H=>z(hd(c,Number(H.target.value))),children:[1,2,4,8].map(H=>Yt.jsxs("option",{value:H,children:[8/H," rows × ",H," columns"]},H))})]}),Yt.jsx("div",{className:"board-map",role:"group","aria-label":"Select a board",style:{gridTemplateColumns:`repeat(${c.module_layout.grid_cols},1fr)`},children:lm.map(H=>Yt.jsxs("button",{"aria-pressed":d===H,onClick:()=>{_(H),p(Yi.columns.find(j=>j.port===H).id)},children:[H,Yt.jsxs("small",{children:[Yi.columns.filter(j=>j.port===H).reduce((j,et)=>j+(c.board[et.id]?.length||0),0)," blocks"]})]},H))}),Yt.jsxs("label",{children:["Position",Yt.jsx("select",{value:f,onChange:H=>p(H.target.value),children:Yi.columns.filter(H=>H.port===d).map(H=>Yt.jsxs("option",{value:H.id,children:[H.layer," · row ",H.row%2+1," / col ",H.col+1]},H.id))})]}),Yt.jsxs("div",{className:"edit-buttons",children:[Yt.jsx("button",{disabled:w.length>=Yi.max_stack,onClick:()=>z(dd(c,f,"add",g)),children:"Add block"}),Yt.jsx("button",{disabled:!w.length,onClick:()=>z(dd(c,f,"remove")),children:"Remove top"})]}),Yt.jsxs("p",{className:"stack-readout",children:["Bottom → top: ",w.length?w.map(H=>"C"+H.slice(5)).join(" / "):"Empty"]})]}),Yt.jsxs("div",{className:"utility-buttons",children:[Yt.jsx("button",{onClick:()=>{z(hd(r1(),c.module_layout.grid_cols)),_("A0"),p(Yi.columns[0].id)},children:"Load sample"}),Yt.jsx("button",{onClick:()=>z(hd(np(),c.module_layout.grid_cols)),children:"Clear test board"})]})]}),Yt.jsx("div",{className:"legend",children:Object.entries(zu).map(([H,j])=>Yt.jsxs("span",{children:[Yt.jsx("i",{style:{background:Ix[H].color}}),j.short]},H))})]})]})]})}t1.createRoot(document.getElementById("root")).render(Yt.jsx(qM.StrictMode,{children:Yt.jsx($R,{})}));
