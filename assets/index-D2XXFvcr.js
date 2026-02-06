(function(){const j=document.createElement("link").relList;if(j&&j.supports&&j.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))u(h);new MutationObserver(h=>{for(const N of h)if(N.type==="childList")for(const O of N.addedNodes)O.tagName==="LINK"&&O.rel==="modulepreload"&&u(O)}).observe(document,{childList:!0,subtree:!0});function g(h){const N={};return h.integrity&&(N.integrity=h.integrity),h.referrerPolicy&&(N.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?N.credentials="include":h.crossOrigin==="anonymous"?N.credentials="omit":N.credentials="same-origin",N}function u(h){if(h.ep)return;h.ep=!0;const N=g(h);fetch(h.href,N)}})();function xh(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var xc={exports:{}},En={};var Af;function vh(){if(Af)return En;Af=1;var s=Symbol.for("react.transitional.element"),j=Symbol.for("react.fragment");function g(u,h,N){var O=null;if(N!==void 0&&(O=""+N),h.key!==void 0&&(O=""+h.key),"key"in h){N={};for(var B in h)B!=="key"&&(N[B]=h[B])}else N=h;return h=N.ref,{$$typeof:s,type:u,key:O,ref:h!==void 0?h:null,props:N}}return En.Fragment=j,En.jsx=g,En.jsxs=g,En}var Cf;function yh(){return Cf||(Cf=1,xc.exports=vh()),xc.exports}var i=yh(),vc={exports:{}},W={};var Mf;function jh(){if(Mf)return W;Mf=1;var s=Symbol.for("react.transitional.element"),j=Symbol.for("react.portal"),g=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),O=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),M=Symbol.for("react.activity"),X=Symbol.iterator;function F(m){return m===null||typeof m!="object"?null:(m=X&&m[X]||m["@@iterator"],typeof m=="function"?m:null)}var H={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,Le={};function Te(m,A,q){this.props=m,this.context=A,this.refs=Le,this.updater=q||H}Te.prototype.isReactComponent={},Te.prototype.setState=function(m,A){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,A,"setState")},Te.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function $(){}$.prototype=Te.prototype;function ce(m,A,q){this.props=m,this.context=A,this.refs=Le,this.updater=q||H}var Oe=ce.prototype=new $;Oe.constructor=ce,G(Oe,Te.prototype),Oe.isPureReactComponent=!0;var Fe=Array.isArray;function _e(){}var U={H:null,A:null,T:null,S:null},k=Object.prototype.hasOwnProperty;function te(m,A,q){var Z=q.ref;return{$$typeof:s,type:m,key:A,ref:Z!==void 0?Z:null,props:q}}function $e(m,A){return te(m.type,A,m.props)}function Qe(m){return typeof m=="object"&&m!==null&&m.$$typeof===s}function Ue(m){var A={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(q){return A[q]})}var L=/\/+/g;function pe(m,A){return typeof m=="object"&&m!==null&&m.key!=null?Ue(""+m.key):A.toString(36)}function at(m){switch(m.status){case"fulfilled":return m.value;case"rejected":throw m.reason;default:switch(typeof m.status=="string"?m.then(_e,_e):(m.status="pending",m.then(function(A){m.status==="pending"&&(m.status="fulfilled",m.value=A)},function(A){m.status==="pending"&&(m.status="rejected",m.reason=A)})),m.status){case"fulfilled":return m.value;case"rejected":throw m.reason}}throw m}function w(m,A,q,Z,P){var ae=typeof m;(ae==="undefined"||ae==="boolean")&&(m=null);var me=!1;if(m===null)me=!0;else switch(ae){case"bigint":case"string":case"number":me=!0;break;case"object":switch(m.$$typeof){case s:case j:me=!0;break;case C:return me=m._init,w(me(m._payload),A,q,Z,P)}}if(me)return P=P(m),me=Z===""?"."+pe(m,0):Z,Fe(P)?(q="",me!=null&&(q=me.replace(L,"$&/")+"/"),w(P,A,q,"",function(kl){return kl})):P!=null&&(Qe(P)&&(P=$e(P,q+(P.key==null||m&&m.key===P.key?"":(""+P.key).replace(L,"$&/")+"/")+me)),A.push(P)),1;me=0;var Ie=Z===""?".":Z+":";if(Fe(m))for(var Me=0;Me<m.length;Me++)Z=m[Me],ae=Ie+pe(Z,Me),me+=w(Z,A,q,ae,P);else if(Me=F(m),typeof Me=="function")for(m=Me.call(m),Me=0;!(Z=m.next()).done;)Z=Z.value,ae=Ie+pe(Z,Me++),me+=w(Z,A,q,ae,P);else if(ae==="object"){if(typeof m.then=="function")return w(at(m),A,q,Z,P);throw A=String(m),Error("Objects are not valid as a React child (found: "+(A==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":A)+"). If you meant to render a collection of children, use an array instead.")}return me}function R(m,A,q){if(m==null)return m;var Z=[],P=0;return w(m,Z,"","",function(ae){return A.call(q,ae,P++)}),Z}function J(m){if(m._status===-1){var A=m._result;A=A(),A.then(function(q){(m._status===0||m._status===-1)&&(m._status=1,m._result=q)},function(q){(m._status===0||m._status===-1)&&(m._status=2,m._result=q)}),m._status===-1&&(m._status=0,m._result=A)}if(m._status===1)return m._result.default;throw m._result}var be=typeof reportError=="function"?reportError:function(m){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var A=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof m=="object"&&m!==null&&typeof m.message=="string"?String(m.message):String(m),error:m});if(!window.dispatchEvent(A))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",m);return}console.error(m)},je={map:R,forEach:function(m,A,q){R(m,function(){A.apply(this,arguments)},q)},count:function(m){var A=0;return R(m,function(){A++}),A},toArray:function(m){return R(m,function(A){return A})||[]},only:function(m){if(!Qe(m))throw Error("React.Children.only expected to receive a single React element child.");return m}};return W.Activity=M,W.Children=je,W.Component=Te,W.Fragment=g,W.Profiler=h,W.PureComponent=ce,W.StrictMode=u,W.Suspense=_,W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=U,W.__COMPILER_RUNTIME={__proto__:null,c:function(m){return U.H.useMemoCache(m)}},W.cache=function(m){return function(){return m.apply(null,arguments)}},W.cacheSignal=function(){return null},W.cloneElement=function(m,A,q){if(m==null)throw Error("The argument must be a React element, but you passed "+m+".");var Z=G({},m.props),P=m.key;if(A!=null)for(ae in A.key!==void 0&&(P=""+A.key),A)!k.call(A,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&A.ref===void 0||(Z[ae]=A[ae]);var ae=arguments.length-2;if(ae===1)Z.children=q;else if(1<ae){for(var me=Array(ae),Ie=0;Ie<ae;Ie++)me[Ie]=arguments[Ie+2];Z.children=me}return te(m.type,P,Z)},W.createContext=function(m){return m={$$typeof:O,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null},m.Provider=m,m.Consumer={$$typeof:N,_context:m},m},W.createElement=function(m,A,q){var Z,P={},ae=null;if(A!=null)for(Z in A.key!==void 0&&(ae=""+A.key),A)k.call(A,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(P[Z]=A[Z]);var me=arguments.length-2;if(me===1)P.children=q;else if(1<me){for(var Ie=Array(me),Me=0;Me<me;Me++)Ie[Me]=arguments[Me+2];P.children=Ie}if(m&&m.defaultProps)for(Z in me=m.defaultProps,me)P[Z]===void 0&&(P[Z]=me[Z]);return te(m,ae,P)},W.createRef=function(){return{current:null}},W.forwardRef=function(m){return{$$typeof:B,render:m}},W.isValidElement=Qe,W.lazy=function(m){return{$$typeof:C,_payload:{_status:-1,_result:m},_init:J}},W.memo=function(m,A){return{$$typeof:b,type:m,compare:A===void 0?null:A}},W.startTransition=function(m){var A=U.T,q={};U.T=q;try{var Z=m(),P=U.S;P!==null&&P(q,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(_e,be)}catch(ae){be(ae)}finally{A!==null&&q.types!==null&&(A.types=q.types),U.T=A}},W.unstable_useCacheRefresh=function(){return U.H.useCacheRefresh()},W.use=function(m){return U.H.use(m)},W.useActionState=function(m,A,q){return U.H.useActionState(m,A,q)},W.useCallback=function(m,A){return U.H.useCallback(m,A)},W.useContext=function(m){return U.H.useContext(m)},W.useDebugValue=function(){},W.useDeferredValue=function(m,A){return U.H.useDeferredValue(m,A)},W.useEffect=function(m,A){return U.H.useEffect(m,A)},W.useEffectEvent=function(m){return U.H.useEffectEvent(m)},W.useId=function(){return U.H.useId()},W.useImperativeHandle=function(m,A,q){return U.H.useImperativeHandle(m,A,q)},W.useInsertionEffect=function(m,A){return U.H.useInsertionEffect(m,A)},W.useLayoutEffect=function(m,A){return U.H.useLayoutEffect(m,A)},W.useMemo=function(m,A){return U.H.useMemo(m,A)},W.useOptimistic=function(m,A){return U.H.useOptimistic(m,A)},W.useReducer=function(m,A,q){return U.H.useReducer(m,A,q)},W.useRef=function(m){return U.H.useRef(m)},W.useState=function(m){return U.H.useState(m)},W.useSyncExternalStore=function(m,A,q){return U.H.useSyncExternalStore(m,A,q)},W.useTransition=function(){return U.H.useTransition()},W.version="19.2.4",W}var kf;function Ec(){return kf||(kf=1,vc.exports=jh()),vc.exports}var D=Ec();const Yf=xh(D);var yc={exports:{}},Tn={},jc={exports:{}},Sc={};var Df;function Sh(){return Df||(Df=1,(function(s){function j(w,R){var J=w.length;w.push(R);e:for(;0<J;){var be=J-1>>>1,je=w[be];if(0<h(je,R))w[be]=R,w[J]=je,J=be;else break e}}function g(w){return w.length===0?null:w[0]}function u(w){if(w.length===0)return null;var R=w[0],J=w.pop();if(J!==R){w[0]=J;e:for(var be=0,je=w.length,m=je>>>1;be<m;){var A=2*(be+1)-1,q=w[A],Z=A+1,P=w[Z];if(0>h(q,J))Z<je&&0>h(P,q)?(w[be]=P,w[Z]=J,be=Z):(w[be]=q,w[A]=J,be=A);else if(Z<je&&0>h(P,J))w[be]=P,w[Z]=J,be=Z;else break e}}return R}function h(w,R){var J=w.sortIndex-R.sortIndex;return J!==0?J:w.id-R.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var N=performance;s.unstable_now=function(){return N.now()}}else{var O=Date,B=O.now();s.unstable_now=function(){return O.now()-B}}var _=[],b=[],C=1,M=null,X=3,F=!1,H=!1,G=!1,Le=!1,Te=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,ce=typeof setImmediate<"u"?setImmediate:null;function Oe(w){for(var R=g(b);R!==null;){if(R.callback===null)u(b);else if(R.startTime<=w)u(b),R.sortIndex=R.expirationTime,j(_,R);else break;R=g(b)}}function Fe(w){if(G=!1,Oe(w),!H)if(g(_)!==null)H=!0,_e||(_e=!0,Ue());else{var R=g(b);R!==null&&at(Fe,R.startTime-w)}}var _e=!1,U=-1,k=5,te=-1;function $e(){return Le?!0:!(s.unstable_now()-te<k)}function Qe(){if(Le=!1,_e){var w=s.unstable_now();te=w;var R=!0;try{e:{H=!1,G&&(G=!1,$(U),U=-1),F=!0;var J=X;try{t:{for(Oe(w),M=g(_);M!==null&&!(M.expirationTime>w&&$e());){var be=M.callback;if(typeof be=="function"){M.callback=null,X=M.priorityLevel;var je=be(M.expirationTime<=w);if(w=s.unstable_now(),typeof je=="function"){M.callback=je,Oe(w),R=!0;break t}M===g(_)&&u(_),Oe(w)}else u(_);M=g(_)}if(M!==null)R=!0;else{var m=g(b);m!==null&&at(Fe,m.startTime-w),R=!1}}break e}finally{M=null,X=J,F=!1}R=void 0}}finally{R?Ue():_e=!1}}}var Ue;if(typeof ce=="function")Ue=function(){ce(Qe)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,pe=L.port2;L.port1.onmessage=Qe,Ue=function(){pe.postMessage(null)}}else Ue=function(){Te(Qe,0)};function at(w,R){U=Te(function(){w(s.unstable_now())},R)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(w){w.callback=null},s.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<w?Math.floor(1e3/w):5},s.unstable_getCurrentPriorityLevel=function(){return X},s.unstable_next=function(w){switch(X){case 1:case 2:case 3:var R=3;break;default:R=X}var J=X;X=R;try{return w()}finally{X=J}},s.unstable_requestPaint=function(){Le=!0},s.unstable_runWithPriority=function(w,R){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var J=X;X=w;try{return R()}finally{X=J}},s.unstable_scheduleCallback=function(w,R,J){var be=s.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?be+J:be):J=be,w){case 1:var je=-1;break;case 2:je=250;break;case 5:je=1073741823;break;case 4:je=1e4;break;default:je=5e3}return je=J+je,w={id:C++,callback:R,priorityLevel:w,startTime:J,expirationTime:je,sortIndex:-1},J>be?(w.sortIndex=J,j(b,w),g(_)===null&&w===g(b)&&(G?($(U),U=-1):G=!0,at(Fe,J-be))):(w.sortIndex=je,j(_,w),H||F||(H=!0,_e||(_e=!0,Ue()))),w},s.unstable_shouldYield=$e,s.unstable_wrapCallback=function(w){var R=X;return function(){var J=X;X=R;try{return w.apply(this,arguments)}finally{X=J}}}})(Sc)),Sc}var Of;function Nh(){return Of||(Of=1,jc.exports=Sh()),jc.exports}var Nc={exports:{}},Pe={};var Uf;function wh(){if(Uf)return Pe;Uf=1;var s=Ec();function j(_){var b="https://react.dev/errors/"+_;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var C=2;C<arguments.length;C++)b+="&args[]="+encodeURIComponent(arguments[C])}return"Minified React error #"+_+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function g(){}var u={d:{f:g,r:function(){throw Error(j(522))},D:g,C:g,L:g,m:g,X:g,S:g,M:g},p:0,findDOMNode:null},h=Symbol.for("react.portal");function N(_,b,C){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:M==null?null:""+M,children:_,containerInfo:b,implementation:C}}var O=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function B(_,b){if(_==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return Pe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,Pe.createPortal=function(_,b){var C=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(j(299));return N(_,b,null,C)},Pe.flushSync=function(_){var b=O.T,C=u.p;try{if(O.T=null,u.p=2,_)return _()}finally{O.T=b,u.p=C,u.d.f()}},Pe.preconnect=function(_,b){typeof _=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,u.d.C(_,b))},Pe.prefetchDNS=function(_){typeof _=="string"&&u.d.D(_)},Pe.preinit=function(_,b){if(typeof _=="string"&&b&&typeof b.as=="string"){var C=b.as,M=B(C,b.crossOrigin),X=typeof b.integrity=="string"?b.integrity:void 0,F=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;C==="style"?u.d.S(_,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:M,integrity:X,fetchPriority:F}):C==="script"&&u.d.X(_,{crossOrigin:M,integrity:X,fetchPriority:F,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},Pe.preinitModule=function(_,b){if(typeof _=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var C=B(b.as,b.crossOrigin);u.d.M(_,{crossOrigin:C,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0})}}else b==null&&u.d.M(_)},Pe.preload=function(_,b){if(typeof _=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var C=b.as,M=B(C,b.crossOrigin);u.d.L(_,C,{crossOrigin:M,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},Pe.preloadModule=function(_,b){if(typeof _=="string")if(b){var C=B(b.as,b.crossOrigin);u.d.m(_,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:C,integrity:typeof b.integrity=="string"?b.integrity:void 0})}else u.d.m(_)},Pe.requestFormReset=function(_){u.d.r(_)},Pe.unstable_batchedUpdates=function(_,b){return _(b)},Pe.useFormState=function(_,b,C){return O.H.useFormState(_,b,C)},Pe.useFormStatus=function(){return O.H.useHostTransitionStatus()},Pe.version="19.2.4",Pe}var Bf;function zh(){if(Bf)return Nc.exports;Bf=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(j){console.error(j)}}return s(),Nc.exports=wh(),Nc.exports}var Hf;function Eh(){if(Hf)return Tn;Hf=1;var s=Nh(),j=Ec(),g=zh();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function N(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function O(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function B(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function _(e){if(N(e)!==e)throw Error(u(188))}function b(e){var t=e.alternate;if(!t){if(t=N(e),t===null)throw Error(u(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var r=n.alternate;if(r===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===r.child){for(r=n.child;r;){if(r===a)return _(n),e;if(r===l)return _(n),t;r=r.sibling}throw Error(u(188))}if(a.return!==l.return)a=n,l=r;else{for(var o=!1,c=n.child;c;){if(c===a){o=!0,a=n,l=r;break}if(c===l){o=!0,l=n,a=r;break}c=c.sibling}if(!o){for(c=r.child;c;){if(c===a){o=!0,a=r,l=n;break}if(c===l){o=!0,l=r,a=n;break}c=c.sibling}if(!o)throw Error(u(189))}}if(a.alternate!==l)throw Error(u(190))}if(a.tag!==3)throw Error(u(188));return a.stateNode.current===a?e:t}function C(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=C(e),t!==null)return t;e=e.sibling}return null}var M=Object.assign,X=Symbol.for("react.element"),F=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),Le=Symbol.for("react.strict_mode"),Te=Symbol.for("react.profiler"),$=Symbol.for("react.consumer"),ce=Symbol.for("react.context"),Oe=Symbol.for("react.forward_ref"),Fe=Symbol.for("react.suspense"),_e=Symbol.for("react.suspense_list"),U=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),te=Symbol.for("react.activity"),$e=Symbol.for("react.memo_cache_sentinel"),Qe=Symbol.iterator;function Ue(e){return e===null||typeof e!="object"?null:(e=Qe&&e[Qe]||e["@@iterator"],typeof e=="function"?e:null)}var L=Symbol.for("react.client.reference");function pe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===L?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case G:return"Fragment";case Te:return"Profiler";case Le:return"StrictMode";case Fe:return"Suspense";case _e:return"SuspenseList";case te:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case H:return"Portal";case ce:return e.displayName||"Context";case $:return(e._context.displayName||"Context")+".Consumer";case Oe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case U:return t=e.displayName||null,t!==null?t:pe(e.type)||"Memo";case k:t=e._payload,e=e._init;try{return pe(e(t))}catch{}}return null}var at=Array.isArray,w=j.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,R=g.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},be=[],je=-1;function m(e){return{current:e}}function A(e){0>je||(e.current=be[je],be[je]=null,je--)}function q(e,t){je++,be[je]=e.current,e.current=t}var Z=m(null),P=m(null),ae=m(null),me=m(null);function Ie(e,t){switch(q(ae,t),q(P,e),q(Z,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?$d(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=$d(t),e=Pd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}A(Z),q(Z,e)}function Me(){A(Z),A(P),A(ae)}function kl(e){e.memoizedState!==null&&q(me,e);var t=Z.current,a=Pd(t,e.type);t!==a&&(q(P,e),q(Z,a))}function Mn(e){P.current===e&&(A(Z),A(P)),me.current===e&&(A(me),Sn._currentValue=J)}var Ii,Tc;function Ta(e){if(Ii===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Ii=t&&t[1]||"",Tc=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ii+e+Tc}var er=!1;function tr(e,t){if(!e||er)return"";er=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var T=function(){throw Error()};if(Object.defineProperty(T.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(T,[])}catch(S){var y=S}Reflect.construct(e,[],T)}else{try{T.call()}catch(S){y=S}e.call(T.prototype)}}else{try{throw Error()}catch(S){y=S}(T=e())&&typeof T.catch=="function"&&T.catch(function(){})}}catch(S){if(S&&y&&typeof S.stack=="string")return[S.stack,y.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=l.DetermineComponentFrameRoot(),o=r[0],c=r[1];if(o&&c){var d=o.split(`
`),v=c.split(`
`);for(n=l=0;l<d.length&&!d[l].includes("DetermineComponentFrameRoot");)l++;for(;n<v.length&&!v[n].includes("DetermineComponentFrameRoot");)n++;if(l===d.length||n===v.length)for(l=d.length-1,n=v.length-1;1<=l&&0<=n&&d[l]!==v[n];)n--;for(;1<=l&&0<=n;l--,n--)if(d[l]!==v[n]){if(l!==1||n!==1)do if(l--,n--,0>n||d[l]!==v[n]){var z=`
`+d[l].replace(" at new "," at ");return e.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",e.displayName)),z}while(1<=l&&0<=n);break}}}finally{er=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ta(a):""}function Wf(e,t){switch(e.tag){case 26:case 27:case 5:return Ta(e.type);case 16:return Ta("Lazy");case 13:return e.child!==t&&t!==null?Ta("Suspense Fallback"):Ta("Suspense");case 19:return Ta("SuspenseList");case 0:case 15:return tr(e.type,!1);case 11:return tr(e.type.render,!1);case 1:return tr(e.type,!0);case 31:return Ta("Activity");default:return""}}function _c(e){try{var t="",a=null;do t+=Wf(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var ar=Object.prototype.hasOwnProperty,lr=s.unstable_scheduleCallback,nr=s.unstable_cancelCallback,Ff=s.unstable_shouldYield,$f=s.unstable_requestPaint,ut=s.unstable_now,Pf=s.unstable_getCurrentPriorityLevel,Ac=s.unstable_ImmediatePriority,Cc=s.unstable_UserBlockingPriority,kn=s.unstable_NormalPriority,If=s.unstable_LowPriority,Mc=s.unstable_IdlePriority,em=s.log,tm=s.unstable_setDisableYieldValue,Dl=null,dt=null;function aa(e){if(typeof em=="function"&&tm(e),dt&&typeof dt.setStrictMode=="function")try{dt.setStrictMode(Dl,e)}catch{}}var ft=Math.clz32?Math.clz32:nm,am=Math.log,lm=Math.LN2;function nm(e){return e>>>=0,e===0?32:31-(am(e)/lm|0)|0}var Dn=256,On=262144,Un=4194304;function _a(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Bn(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,r=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var c=l&134217727;return c!==0?(l=c&~r,l!==0?n=_a(l):(o&=c,o!==0?n=_a(o):a||(a=c&~e,a!==0&&(n=_a(a))))):(c=l&~r,c!==0?n=_a(c):o!==0?n=_a(o):a||(a=l&~e,a!==0&&(n=_a(a)))),n===0?0:t!==0&&t!==n&&(t&r)===0&&(r=n&-n,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:n}function Ol(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function im(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kc(){var e=Un;return Un<<=1,(Un&62914560)===0&&(Un=4194304),e}function ir(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Ul(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function rm(e,t,a,l,n,r){var o=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var c=e.entanglements,d=e.expirationTimes,v=e.hiddenUpdates;for(a=o&~a;0<a;){var z=31-ft(a),T=1<<z;c[z]=0,d[z]=-1;var y=v[z];if(y!==null)for(v[z]=null,z=0;z<y.length;z++){var S=y[z];S!==null&&(S.lane&=-536870913)}a&=~T}l!==0&&Dc(e,l,0),r!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=r&~(o&~t))}function Dc(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-ft(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function Oc(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-ft(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function Uc(e,t){var a=t&-t;return a=(a&42)!==0?1:rr(a),(a&(e.suspendedLanes|t))!==0?0:a}function rr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function or(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Bc(){var e=R.p;return e!==0?e:(e=window.event,e===void 0?32:Sf(e.type))}function Hc(e,t){var a=R.p;try{return R.p=e,t()}finally{R.p=a}}var la=Math.random().toString(36).slice(2),Xe="__reactFiber$"+la,lt="__reactProps$"+la,Va="__reactContainer$"+la,cr="__reactEvents$"+la,om="__reactListeners$"+la,cm="__reactHandles$"+la,Rc="__reactResources$"+la,Bl="__reactMarker$"+la;function sr(e){delete e[Xe],delete e[lt],delete e[cr],delete e[om],delete e[cm]}function Ka(e){var t=e[Xe];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Va]||a[Xe]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=rf(e);e!==null;){if(a=e[Xe])return a;e=rf(e)}return t}e=a,a=e.parentNode}return null}function Ja(e){if(e=e[Xe]||e[Va]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Hl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function Wa(e){var t=e[Rc];return t||(t=e[Rc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ge(e){e[Bl]=!0}var qc=new Set,Lc={};function Aa(e,t){Fa(e,t),Fa(e+"Capture",t)}function Fa(e,t){for(Lc[e]=t,e=0;e<t.length;e++)qc.add(t[e])}var sm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Yc={},Gc={};function um(e){return ar.call(Gc,e)?!0:ar.call(Yc,e)?!1:sm.test(e)?Gc[e]=!0:(Yc[e]=!0,!1)}function Hn(e,t,a){if(um(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Rn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Rt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function yt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Zc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function dm(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,r=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(o){a=""+o,r.call(this,o)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ur(e){if(!e._valueTracker){var t=Zc(e)?"checked":"value";e._valueTracker=dm(e,t,""+e[t])}}function Qc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=Zc(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function qn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var fm=/[\n"\\]/g;function jt(e){return e.replace(fm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function dr(e,t,a,l,n,r,o,c){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+yt(t)):e.value!==""+yt(t)&&(e.value=""+yt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?fr(e,o,yt(t)):a!=null?fr(e,o,yt(a)):l!=null&&e.removeAttribute("value"),n==null&&r!=null&&(e.defaultChecked=!!r),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+yt(c):e.removeAttribute("name")}function Xc(e,t,a,l,n,r,o,c){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){ur(e);return}a=a!=null?""+yt(a):"",t=t!=null?""+yt(t):a,c||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=c?e.checked:!!l,e.defaultChecked=!!l,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),ur(e)}function fr(e,t,a){t==="number"&&qn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function $a(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+yt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Vc(e,t,a){if(t!=null&&(t=""+yt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+yt(a):""}function Kc(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(u(92));if(at(l)){if(1<l.length)throw Error(u(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=yt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),ur(e)}function Pa(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var mm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Jc(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||mm.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Wc(e,t,a){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&Jc(e,n,l)}else for(var r in t)t.hasOwnProperty(r)&&Jc(e,r,t[r])}function mr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),hm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ln(e){return hm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function qt(){}var gr=null;function hr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ia=null,el=null;function Fc(e){var t=Ja(e);if(t&&(e=t.stateNode)){var a=e[lt]||null;e:switch(e=t.stateNode,t.type){case"input":if(dr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+jt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[lt]||null;if(!n)throw Error(u(90));dr(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&Qc(l)}break e;case"textarea":Vc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&$a(e,!!a.multiple,t,!1)}}}var pr=!1;function $c(e,t,a){if(pr)return e(t,a);pr=!0;try{var l=e(t);return l}finally{if(pr=!1,(Ia!==null||el!==null)&&(Ti(),Ia&&(t=Ia,e=el,el=Ia=null,Fc(t),e)))for(t=0;t<e.length;t++)Fc(e[t])}}function Rl(e,t){var a=e.stateNode;if(a===null)return null;var l=a[lt]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(u(231,t,typeof a));return a}var Lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),br=!1;if(Lt)try{var ql={};Object.defineProperty(ql,"passive",{get:function(){br=!0}}),window.addEventListener("test",ql,ql),window.removeEventListener("test",ql,ql)}catch{br=!1}var na=null,xr=null,Yn=null;function Pc(){if(Yn)return Yn;var e,t=xr,a=t.length,l,n="value"in na?na.value:na.textContent,r=n.length;for(e=0;e<a&&t[e]===n[e];e++);var o=a-e;for(l=1;l<=o&&t[a-l]===n[r-l];l++);return Yn=n.slice(e,1<l?1-l:void 0)}function Gn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zn(){return!0}function Ic(){return!1}function nt(e){function t(a,l,n,r,o){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=r,this.target=o,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(a=e[c],this[c]=a?a(r):r[c]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Zn:Ic,this.isPropagationStopped=Ic,this}return M(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Zn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Zn)},persist:function(){},isPersistent:Zn}),t}var Ca={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qn=nt(Ca),Ll=M({},Ca,{view:0,detail:0}),pm=nt(Ll),vr,yr,Yl,Xn=M({},Ll,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yl&&(Yl&&e.type==="mousemove"?(vr=e.screenX-Yl.screenX,yr=e.screenY-Yl.screenY):yr=vr=0,Yl=e),vr)},movementY:function(e){return"movementY"in e?e.movementY:yr}}),es=nt(Xn),bm=M({},Xn,{dataTransfer:0}),xm=nt(bm),vm=M({},Ll,{relatedTarget:0}),jr=nt(vm),ym=M({},Ca,{animationName:0,elapsedTime:0,pseudoElement:0}),jm=nt(ym),Sm=M({},Ca,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Nm=nt(Sm),wm=M({},Ca,{data:0}),ts=nt(wm),zm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Em={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _m(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Tm[e])?!!t[e]:!1}function Sr(){return _m}var Am=M({},Ll,{key:function(e){if(e.key){var t=zm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Gn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Em[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sr,charCode:function(e){return e.type==="keypress"?Gn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Gn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Cm=nt(Am),Mm=M({},Xn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),as=nt(Mm),km=M({},Ll,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sr}),Dm=nt(km),Om=M({},Ca,{propertyName:0,elapsedTime:0,pseudoElement:0}),Um=nt(Om),Bm=M({},Xn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hm=nt(Bm),Rm=M({},Ca,{newState:0,oldState:0}),qm=nt(Rm),Lm=[9,13,27,32],Nr=Lt&&"CompositionEvent"in window,Gl=null;Lt&&"documentMode"in document&&(Gl=document.documentMode);var Ym=Lt&&"TextEvent"in window&&!Gl,ls=Lt&&(!Nr||Gl&&8<Gl&&11>=Gl),ns=" ",is=!1;function rs(e,t){switch(e){case"keyup":return Lm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function os(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var tl=!1;function Gm(e,t){switch(e){case"compositionend":return os(t);case"keypress":return t.which!==32?null:(is=!0,ns);case"textInput":return e=t.data,e===ns&&is?null:e;default:return null}}function Zm(e,t){if(tl)return e==="compositionend"||!Nr&&rs(e,t)?(e=Pc(),Yn=xr=na=null,tl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ls&&t.locale!=="ko"?null:t.data;default:return null}}var Qm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Qm[e.type]:t==="textarea"}function ss(e,t,a,l){Ia?el?el.push(l):el=[l]:Ia=l,t=Oi(t,"onChange"),0<t.length&&(a=new Qn("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Zl=null,Ql=null;function Xm(e){Xd(e,0)}function Vn(e){var t=Hl(e);if(Qc(t))return e}function us(e,t){if(e==="change")return t}var ds=!1;if(Lt){var wr;if(Lt){var zr="oninput"in document;if(!zr){var fs=document.createElement("div");fs.setAttribute("oninput","return;"),zr=typeof fs.oninput=="function"}wr=zr}else wr=!1;ds=wr&&(!document.documentMode||9<document.documentMode)}function ms(){Zl&&(Zl.detachEvent("onpropertychange",gs),Ql=Zl=null)}function gs(e){if(e.propertyName==="value"&&Vn(Ql)){var t=[];ss(t,Ql,e,hr(e)),$c(Xm,t)}}function Vm(e,t,a){e==="focusin"?(ms(),Zl=t,Ql=a,Zl.attachEvent("onpropertychange",gs)):e==="focusout"&&ms()}function Km(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Vn(Ql)}function Jm(e,t){if(e==="click")return Vn(t)}function Wm(e,t){if(e==="input"||e==="change")return Vn(t)}function Fm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var mt=typeof Object.is=="function"?Object.is:Fm;function Xl(e,t){if(mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!ar.call(t,n)||!mt(e[n],t[n]))return!1}return!0}function hs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ps(e,t){var a=hs(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=hs(a)}}function bs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?bs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function xs(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=qn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=qn(e.document)}return t}function Er(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var $m=Lt&&"documentMode"in document&&11>=document.documentMode,al=null,Tr=null,Vl=null,_r=!1;function vs(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;_r||al==null||al!==qn(l)||(l=al,"selectionStart"in l&&Er(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Vl&&Xl(Vl,l)||(Vl=l,l=Oi(Tr,"onSelect"),0<l.length&&(t=new Qn("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=al)))}function Ma(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var ll={animationend:Ma("Animation","AnimationEnd"),animationiteration:Ma("Animation","AnimationIteration"),animationstart:Ma("Animation","AnimationStart"),transitionrun:Ma("Transition","TransitionRun"),transitionstart:Ma("Transition","TransitionStart"),transitioncancel:Ma("Transition","TransitionCancel"),transitionend:Ma("Transition","TransitionEnd")},Ar={},ys={};Lt&&(ys=document.createElement("div").style,"AnimationEvent"in window||(delete ll.animationend.animation,delete ll.animationiteration.animation,delete ll.animationstart.animation),"TransitionEvent"in window||delete ll.transitionend.transition);function ka(e){if(Ar[e])return Ar[e];if(!ll[e])return e;var t=ll[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in ys)return Ar[e]=t[a];return e}var js=ka("animationend"),Ss=ka("animationiteration"),Ns=ka("animationstart"),Pm=ka("transitionrun"),Im=ka("transitionstart"),eg=ka("transitioncancel"),ws=ka("transitionend"),zs=new Map,Cr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Cr.push("scrollEnd");function Mt(e,t){zs.set(e,t),Aa(t,[e])}var Kn=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},St=[],nl=0,Mr=0;function Jn(){for(var e=nl,t=Mr=nl=0;t<e;){var a=St[t];St[t++]=null;var l=St[t];St[t++]=null;var n=St[t];St[t++]=null;var r=St[t];if(St[t++]=null,l!==null&&n!==null){var o=l.pending;o===null?n.next=n:(n.next=o.next,o.next=n),l.pending=n}r!==0&&Es(a,n,r)}}function Wn(e,t,a,l){St[nl++]=e,St[nl++]=t,St[nl++]=a,St[nl++]=l,Mr|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function kr(e,t,a,l){return Wn(e,t,a,l),Fn(e)}function Da(e,t){return Wn(e,null,null,t),Fn(e)}function Es(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,r=e.return;r!==null;)r.childLanes|=a,l=r.alternate,l!==null&&(l.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(n=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,n&&t!==null&&(n=31-ft(a),e=r.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),r):null}function Fn(e){if(50<hn)throw hn=0,Go=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var il={};function tg(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gt(e,t,a,l){return new tg(e,t,a,l)}function Dr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yt(e,t){var a=e.alternate;return a===null?(a=gt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Ts(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function $n(e,t,a,l,n,r){var o=0;if(l=e,typeof e=="function")Dr(e)&&(o=1);else if(typeof e=="string")o=rh(e,a,Z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case te:return e=gt(31,a,t,n),e.elementType=te,e.lanes=r,e;case G:return Oa(a.children,n,r,t);case Le:o=8,n|=24;break;case Te:return e=gt(12,a,t,n|2),e.elementType=Te,e.lanes=r,e;case Fe:return e=gt(13,a,t,n),e.elementType=Fe,e.lanes=r,e;case _e:return e=gt(19,a,t,n),e.elementType=_e,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ce:o=10;break e;case $:o=9;break e;case Oe:o=11;break e;case U:o=14;break e;case k:o=16,l=null;break e}o=29,a=Error(u(130,e===null?"null":typeof e,"")),l=null}return t=gt(o,a,t,n),t.elementType=e,t.type=l,t.lanes=r,t}function Oa(e,t,a,l){return e=gt(7,e,l,t),e.lanes=a,e}function Or(e,t,a){return e=gt(6,e,null,t),e.lanes=a,e}function _s(e){var t=gt(18,null,null,0);return t.stateNode=e,t}function Ur(e,t,a){return t=gt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var As=new WeakMap;function Nt(e,t){if(typeof e=="object"&&e!==null){var a=As.get(e);return a!==void 0?a:(t={value:e,source:t,stack:_c(t)},As.set(e,t),t)}return{value:e,source:t,stack:_c(t)}}var rl=[],ol=0,Pn=null,Kl=0,wt=[],zt=0,ia=null,Ot=1,Ut="";function Gt(e,t){rl[ol++]=Kl,rl[ol++]=Pn,Pn=e,Kl=t}function Cs(e,t,a){wt[zt++]=Ot,wt[zt++]=Ut,wt[zt++]=ia,ia=e;var l=Ot;e=Ut;var n=32-ft(l)-1;l&=~(1<<n),a+=1;var r=32-ft(t)+n;if(30<r){var o=n-n%5;r=(l&(1<<o)-1).toString(32),l>>=o,n-=o,Ot=1<<32-ft(t)+n|a<<n|l,Ut=r+e}else Ot=1<<r|a<<n|l,Ut=e}function Br(e){e.return!==null&&(Gt(e,1),Cs(e,1,0))}function Hr(e){for(;e===Pn;)Pn=rl[--ol],rl[ol]=null,Kl=rl[--ol],rl[ol]=null;for(;e===ia;)ia=wt[--zt],wt[zt]=null,Ut=wt[--zt],wt[zt]=null,Ot=wt[--zt],wt[zt]=null}function Ms(e,t){wt[zt++]=Ot,wt[zt++]=Ut,wt[zt++]=ia,Ot=t.id,Ut=t.overflow,ia=e}var Ve=null,Ne=null,oe=!1,ra=null,Et=!1,Rr=Error(u(519));function oa(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Jl(Nt(t,e)),Rr}function ks(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Xe]=e,t[lt]=l,a){case"dialog":ne("cancel",t),ne("close",t);break;case"iframe":case"object":case"embed":ne("load",t);break;case"video":case"audio":for(a=0;a<bn.length;a++)ne(bn[a],t);break;case"source":ne("error",t);break;case"img":case"image":case"link":ne("error",t),ne("load",t);break;case"details":ne("toggle",t);break;case"input":ne("invalid",t),Xc(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ne("invalid",t);break;case"textarea":ne("invalid",t),Kc(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||Wd(t.textContent,a)?(l.popover!=null&&(ne("beforetoggle",t),ne("toggle",t)),l.onScroll!=null&&ne("scroll",t),l.onScrollEnd!=null&&ne("scrollend",t),l.onClick!=null&&(t.onclick=qt),t=!0):t=!1,t||oa(e,!0)}function Ds(e){for(Ve=e.return;Ve;)switch(Ve.tag){case 5:case 31:case 13:Et=!1;return;case 27:case 3:Et=!0;return;default:Ve=Ve.return}}function cl(e){if(e!==Ve)return!1;if(!oe)return Ds(e),oe=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||lc(e.type,e.memoizedProps)),a=!a),a&&Ne&&oa(e),Ds(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Ne=nf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Ne=nf(e)}else t===27?(t=Ne,ja(e.type)?(e=cc,cc=null,Ne=e):Ne=t):Ne=Ve?_t(e.stateNode.nextSibling):null;return!0}function Ua(){Ne=Ve=null,oe=!1}function qr(){var e=ra;return e!==null&&(ct===null?ct=e:ct.push.apply(ct,e),ra=null),e}function Jl(e){ra===null?ra=[e]:ra.push(e)}var Lr=m(null),Ba=null,Zt=null;function ca(e,t,a){q(Lr,t._currentValue),t._currentValue=a}function Qt(e){e._currentValue=Lr.current,A(Lr)}function Yr(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function Gr(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var r=n.dependencies;if(r!==null){var o=n.child;r=r.firstContext;e:for(;r!==null;){var c=r;r=n;for(var d=0;d<t.length;d++)if(c.context===t[d]){r.lanes|=a,c=r.alternate,c!==null&&(c.lanes|=a),Yr(r.return,a,e),l||(o=null);break e}r=c.next}}else if(n.tag===18){if(o=n.return,o===null)throw Error(u(341));o.lanes|=a,r=o.alternate,r!==null&&(r.lanes|=a),Yr(o,a,e),o=null}else o=n.child;if(o!==null)o.return=n;else for(o=n;o!==null;){if(o===e){o=null;break}if(n=o.sibling,n!==null){n.return=o.return,o=n;break}o=o.return}n=o}}function sl(e,t,a,l){e=null;for(var n=t,r=!1;n!==null;){if(!r){if((n.flags&524288)!==0)r=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var o=n.alternate;if(o===null)throw Error(u(387));if(o=o.memoizedProps,o!==null){var c=n.type;mt(n.pendingProps.value,o.value)||(e!==null?e.push(c):e=[c])}}else if(n===me.current){if(o=n.alternate,o===null)throw Error(u(387));o.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Sn):e=[Sn])}n=n.return}e!==null&&Gr(t,e,a,l),t.flags|=262144}function In(e){for(e=e.firstContext;e!==null;){if(!mt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ha(e){Ba=e,Zt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ke(e){return Os(Ba,e)}function ei(e,t){return Ba===null&&Ha(e),Os(e,t)}function Os(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Zt===null){if(e===null)throw Error(u(308));Zt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Zt=Zt.next=t;return a}var ag=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},lg=s.unstable_scheduleCallback,ng=s.unstable_NormalPriority,Be={$$typeof:ce,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Zr(){return{controller:new ag,data:new Map,refCount:0}}function Wl(e){e.refCount--,e.refCount===0&&lg(ng,function(){e.controller.abort()})}var Fl=null,Qr=0,ul=0,dl=null;function ig(e,t){if(Fl===null){var a=Fl=[];Qr=0,ul=Jo(),dl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Qr++,t.then(Us,Us),t}function Us(){if(--Qr===0&&Fl!==null){dl!==null&&(dl.status="fulfilled");var e=Fl;Fl=null,ul=0,dl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function rg(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Bs=w.S;w.S=function(e,t){vd=ut(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&ig(e,t),Bs!==null&&Bs(e,t)};var Ra=m(null);function Xr(){var e=Ra.current;return e!==null?e:Se.pooledCache}function ti(e,t){t===null?q(Ra,Ra.current):q(Ra,t.pool)}function Hs(){var e=Xr();return e===null?null:{parent:Be._currentValue,pool:e}}var fl=Error(u(460)),Vr=Error(u(474)),ai=Error(u(542)),li={then:function(){}};function Rs(e){return e=e.status,e==="fulfilled"||e==="rejected"}function qs(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(qt,qt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ys(e),e;default:if(typeof t.status=="string")t.then(qt,qt);else{if(e=Se,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ys(e),e}throw La=t,fl}}function qa(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(La=a,fl):a}}var La=null;function Ls(){if(La===null)throw Error(u(459));var e=La;return La=null,e}function Ys(e){if(e===fl||e===ai)throw Error(u(483))}var ml=null,$l=0;function ni(e){var t=$l;return $l+=1,ml===null&&(ml=[]),qs(ml,e,t)}function Pl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ii(e,t){throw t.$$typeof===X?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Gs(e){function t(p,f){if(e){var x=p.deletions;x===null?(p.deletions=[f],p.flags|=16):x.push(f)}}function a(p,f){if(!e)return null;for(;f!==null;)t(p,f),f=f.sibling;return null}function l(p){for(var f=new Map;p!==null;)p.key!==null?f.set(p.key,p):f.set(p.index,p),p=p.sibling;return f}function n(p,f){return p=Yt(p,f),p.index=0,p.sibling=null,p}function r(p,f,x){return p.index=x,e?(x=p.alternate,x!==null?(x=x.index,x<f?(p.flags|=67108866,f):x):(p.flags|=67108866,f)):(p.flags|=1048576,f)}function o(p){return e&&p.alternate===null&&(p.flags|=67108866),p}function c(p,f,x,E){return f===null||f.tag!==6?(f=Or(x,p.mode,E),f.return=p,f):(f=n(f,x),f.return=p,f)}function d(p,f,x,E){var V=x.type;return V===G?z(p,f,x.props.children,E,x.key):f!==null&&(f.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===k&&qa(V)===f.type)?(f=n(f,x.props),Pl(f,x),f.return=p,f):(f=$n(x.type,x.key,x.props,null,p.mode,E),Pl(f,x),f.return=p,f)}function v(p,f,x,E){return f===null||f.tag!==4||f.stateNode.containerInfo!==x.containerInfo||f.stateNode.implementation!==x.implementation?(f=Ur(x,p.mode,E),f.return=p,f):(f=n(f,x.children||[]),f.return=p,f)}function z(p,f,x,E,V){return f===null||f.tag!==7?(f=Oa(x,p.mode,E,V),f.return=p,f):(f=n(f,x),f.return=p,f)}function T(p,f,x){if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return f=Or(""+f,p.mode,x),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case F:return x=$n(f.type,f.key,f.props,null,p.mode,x),Pl(x,f),x.return=p,x;case H:return f=Ur(f,p.mode,x),f.return=p,f;case k:return f=qa(f),T(p,f,x)}if(at(f)||Ue(f))return f=Oa(f,p.mode,x,null),f.return=p,f;if(typeof f.then=="function")return T(p,ni(f),x);if(f.$$typeof===ce)return T(p,ei(p,f),x);ii(p,f)}return null}function y(p,f,x,E){var V=f!==null?f.key:null;if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return V!==null?null:c(p,f,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case F:return x.key===V?d(p,f,x,E):null;case H:return x.key===V?v(p,f,x,E):null;case k:return x=qa(x),y(p,f,x,E)}if(at(x)||Ue(x))return V!==null?null:z(p,f,x,E,null);if(typeof x.then=="function")return y(p,f,ni(x),E);if(x.$$typeof===ce)return y(p,f,ei(p,x),E);ii(p,x)}return null}function S(p,f,x,E,V){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return p=p.get(x)||null,c(f,p,""+E,V);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case F:return p=p.get(E.key===null?x:E.key)||null,d(f,p,E,V);case H:return p=p.get(E.key===null?x:E.key)||null,v(f,p,E,V);case k:return E=qa(E),S(p,f,x,E,V)}if(at(E)||Ue(E))return p=p.get(x)||null,z(f,p,E,V,null);if(typeof E.then=="function")return S(p,f,x,ni(E),V);if(E.$$typeof===ce)return S(p,f,x,ei(f,E),V);ii(f,E)}return null}function Y(p,f,x,E){for(var V=null,se=null,Q=f,ee=f=0,re=null;Q!==null&&ee<x.length;ee++){Q.index>ee?(re=Q,Q=null):re=Q.sibling;var ue=y(p,Q,x[ee],E);if(ue===null){Q===null&&(Q=re);break}e&&Q&&ue.alternate===null&&t(p,Q),f=r(ue,f,ee),se===null?V=ue:se.sibling=ue,se=ue,Q=re}if(ee===x.length)return a(p,Q),oe&&Gt(p,ee),V;if(Q===null){for(;ee<x.length;ee++)Q=T(p,x[ee],E),Q!==null&&(f=r(Q,f,ee),se===null?V=Q:se.sibling=Q,se=Q);return oe&&Gt(p,ee),V}for(Q=l(Q);ee<x.length;ee++)re=S(Q,p,ee,x[ee],E),re!==null&&(e&&re.alternate!==null&&Q.delete(re.key===null?ee:re.key),f=r(re,f,ee),se===null?V=re:se.sibling=re,se=re);return e&&Q.forEach(function(Ea){return t(p,Ea)}),oe&&Gt(p,ee),V}function K(p,f,x,E){if(x==null)throw Error(u(151));for(var V=null,se=null,Q=f,ee=f=0,re=null,ue=x.next();Q!==null&&!ue.done;ee++,ue=x.next()){Q.index>ee?(re=Q,Q=null):re=Q.sibling;var Ea=y(p,Q,ue.value,E);if(Ea===null){Q===null&&(Q=re);break}e&&Q&&Ea.alternate===null&&t(p,Q),f=r(Ea,f,ee),se===null?V=Ea:se.sibling=Ea,se=Ea,Q=re}if(ue.done)return a(p,Q),oe&&Gt(p,ee),V;if(Q===null){for(;!ue.done;ee++,ue=x.next())ue=T(p,ue.value,E),ue!==null&&(f=r(ue,f,ee),se===null?V=ue:se.sibling=ue,se=ue);return oe&&Gt(p,ee),V}for(Q=l(Q);!ue.done;ee++,ue=x.next())ue=S(Q,p,ee,ue.value,E),ue!==null&&(e&&ue.alternate!==null&&Q.delete(ue.key===null?ee:ue.key),f=r(ue,f,ee),se===null?V=ue:se.sibling=ue,se=ue);return e&&Q.forEach(function(bh){return t(p,bh)}),oe&&Gt(p,ee),V}function ye(p,f,x,E){if(typeof x=="object"&&x!==null&&x.type===G&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case F:e:{for(var V=x.key;f!==null;){if(f.key===V){if(V=x.type,V===G){if(f.tag===7){a(p,f.sibling),E=n(f,x.props.children),E.return=p,p=E;break e}}else if(f.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===k&&qa(V)===f.type){a(p,f.sibling),E=n(f,x.props),Pl(E,x),E.return=p,p=E;break e}a(p,f);break}else t(p,f);f=f.sibling}x.type===G?(E=Oa(x.props.children,p.mode,E,x.key),E.return=p,p=E):(E=$n(x.type,x.key,x.props,null,p.mode,E),Pl(E,x),E.return=p,p=E)}return o(p);case H:e:{for(V=x.key;f!==null;){if(f.key===V)if(f.tag===4&&f.stateNode.containerInfo===x.containerInfo&&f.stateNode.implementation===x.implementation){a(p,f.sibling),E=n(f,x.children||[]),E.return=p,p=E;break e}else{a(p,f);break}else t(p,f);f=f.sibling}E=Ur(x,p.mode,E),E.return=p,p=E}return o(p);case k:return x=qa(x),ye(p,f,x,E)}if(at(x))return Y(p,f,x,E);if(Ue(x)){if(V=Ue(x),typeof V!="function")throw Error(u(150));return x=V.call(x),K(p,f,x,E)}if(typeof x.then=="function")return ye(p,f,ni(x),E);if(x.$$typeof===ce)return ye(p,f,ei(p,x),E);ii(p,x)}return typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint"?(x=""+x,f!==null&&f.tag===6?(a(p,f.sibling),E=n(f,x),E.return=p,p=E):(a(p,f),E=Or(x,p.mode,E),E.return=p,p=E),o(p)):a(p,f)}return function(p,f,x,E){try{$l=0;var V=ye(p,f,x,E);return ml=null,V}catch(Q){if(Q===fl||Q===ai)throw Q;var se=gt(29,Q,null,p.mode);return se.lanes=E,se.return=p,se}}}var Ya=Gs(!0),Zs=Gs(!1),sa=!1;function Kr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Jr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ua(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function da(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(de&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=Fn(e),Es(e,null,a),t}return Wn(e,l,t,a),Fn(e)}function Il(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Oc(e,a)}}function Wr(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?n=r=o:r=r.next=o,a=a.next}while(a!==null);r===null?n=r=t:r=r.next=t}else n=r=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:r,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Fr=!1;function en(){if(Fr){var e=dl;if(e!==null)throw e}}function tn(e,t,a,l){Fr=!1;var n=e.updateQueue;sa=!1;var r=n.firstBaseUpdate,o=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var d=c,v=d.next;d.next=null,o===null?r=v:o.next=v,o=d;var z=e.alternate;z!==null&&(z=z.updateQueue,c=z.lastBaseUpdate,c!==o&&(c===null?z.firstBaseUpdate=v:c.next=v,z.lastBaseUpdate=d))}if(r!==null){var T=n.baseState;o=0,z=v=d=null,c=r;do{var y=c.lane&-536870913,S=y!==c.lane;if(S?(ie&y)===y:(l&y)===y){y!==0&&y===ul&&(Fr=!0),z!==null&&(z=z.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var Y=e,K=c;y=t;var ye=a;switch(K.tag){case 1:if(Y=K.payload,typeof Y=="function"){T=Y.call(ye,T,y);break e}T=Y;break e;case 3:Y.flags=Y.flags&-65537|128;case 0:if(Y=K.payload,y=typeof Y=="function"?Y.call(ye,T,y):Y,y==null)break e;T=M({},T,y);break e;case 2:sa=!0}}y=c.callback,y!==null&&(e.flags|=64,S&&(e.flags|=8192),S=n.callbacks,S===null?n.callbacks=[y]:S.push(y))}else S={lane:y,tag:c.tag,payload:c.payload,callback:c.callback,next:null},z===null?(v=z=S,d=T):z=z.next=S,o|=y;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;S=c,c=S.next,S.next=null,n.lastBaseUpdate=S,n.shared.pending=null}}while(!0);z===null&&(d=T),n.baseState=d,n.firstBaseUpdate=v,n.lastBaseUpdate=z,r===null&&(n.shared.lanes=0),pa|=o,e.lanes=o,e.memoizedState=T}}function Qs(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function Xs(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Qs(a[e],t)}var gl=m(null),ri=m(0);function Vs(e,t){e=It,q(ri,e),q(gl,t),It=e|t.baseLanes}function $r(){q(ri,It),q(gl,gl.current)}function Pr(){It=ri.current,A(gl),A(ri)}var ht=m(null),Tt=null;function fa(e){var t=e.alternate;q(ke,ke.current&1),q(ht,e),Tt===null&&(t===null||gl.current!==null||t.memoizedState!==null)&&(Tt=e)}function Ir(e){q(ke,ke.current),q(ht,e),Tt===null&&(Tt=e)}function Ks(e){e.tag===22?(q(ke,ke.current),q(ht,e),Tt===null&&(Tt=e)):ma()}function ma(){q(ke,ke.current),q(ht,ht.current)}function pt(e){A(ht),Tt===e&&(Tt=null),A(ke)}var ke=m(0);function oi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||rc(a)||oc(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Xt=0,I=null,xe=null,He=null,ci=!1,hl=!1,Ga=!1,si=0,an=0,pl=null,og=0;function Ae(){throw Error(u(321))}function eo(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!mt(e[a],t[a]))return!1;return!0}function to(e,t,a,l,n,r){return Xt=r,I=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,w.H=e===null||e.memoizedState===null?Cu:bo,Ga=!1,r=a(l,n),Ga=!1,hl&&(r=Ws(t,a,l,n)),Js(e),r}function Js(e){w.H=rn;var t=xe!==null&&xe.next!==null;if(Xt=0,He=xe=I=null,ci=!1,an=0,pl=null,t)throw Error(u(300));e===null||Re||(e=e.dependencies,e!==null&&In(e)&&(Re=!0))}function Ws(e,t,a,l){I=e;var n=0;do{if(hl&&(pl=null),an=0,hl=!1,25<=n)throw Error(u(301));if(n+=1,He=xe=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}w.H=Mu,r=t(a,l)}while(hl);return r}function cg(){var e=w.H,t=e.useState()[0];return t=typeof t.then=="function"?ln(t):t,e=e.useState()[0],(xe!==null?xe.memoizedState:null)!==e&&(I.flags|=1024),t}function ao(){var e=si!==0;return si=0,e}function lo(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function no(e){if(ci){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ci=!1}Xt=0,He=xe=I=null,hl=!1,an=si=0,pl=null}function et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?I.memoizedState=He=e:He=He.next=e,He}function De(){if(xe===null){var e=I.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var t=He===null?I.memoizedState:He.next;if(t!==null)He=t,xe=e;else{if(e===null)throw I.alternate===null?Error(u(467)):Error(u(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},He===null?I.memoizedState=He=e:He=He.next=e}return He}function ui(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ln(e){var t=an;return an+=1,pl===null&&(pl=[]),e=qs(pl,e,t),t=I,(He===null?t.memoizedState:He.next)===null&&(t=t.alternate,w.H=t===null||t.memoizedState===null?Cu:bo),e}function di(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ln(e);if(e.$$typeof===ce)return Ke(e)}throw Error(u(438,String(e)))}function io(e){var t=null,a=I.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=I.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=ui(),I.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=$e;return t.index++,a}function Vt(e,t){return typeof t=="function"?t(e):t}function fi(e){var t=De();return ro(t,xe,e)}function ro(e,t,a){var l=e.queue;if(l===null)throw Error(u(311));l.lastRenderedReducer=a;var n=e.baseQueue,r=l.pending;if(r!==null){if(n!==null){var o=n.next;n.next=r.next,r.next=o}t.baseQueue=n=r,l.pending=null}if(r=e.baseState,n===null)e.memoizedState=r;else{t=n.next;var c=o=null,d=null,v=t,z=!1;do{var T=v.lane&-536870913;if(T!==v.lane?(ie&T)===T:(Xt&T)===T){var y=v.revertLane;if(y===0)d!==null&&(d=d.next={lane:0,revertLane:0,gesture:null,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null}),T===ul&&(z=!0);else if((Xt&y)===y){v=v.next,y===ul&&(z=!0);continue}else T={lane:0,revertLane:v.revertLane,gesture:null,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null},d===null?(c=d=T,o=r):d=d.next=T,I.lanes|=y,pa|=y;T=v.action,Ga&&a(r,T),r=v.hasEagerState?v.eagerState:a(r,T)}else y={lane:T,revertLane:v.revertLane,gesture:v.gesture,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null},d===null?(c=d=y,o=r):d=d.next=y,I.lanes|=T,pa|=T;v=v.next}while(v!==null&&v!==t);if(d===null?o=r:d.next=c,!mt(r,e.memoizedState)&&(Re=!0,z&&(a=dl,a!==null)))throw a;e.memoizedState=r,e.baseState=o,e.baseQueue=d,l.lastRenderedState=r}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function oo(e){var t=De(),a=t.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,r=t.memoizedState;if(n!==null){a.pending=null;var o=n=n.next;do r=e(r,o.action),o=o.next;while(o!==n);mt(r,t.memoizedState)||(Re=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,l]}function Fs(e,t,a){var l=I,n=De(),r=oe;if(r){if(a===void 0)throw Error(u(407));a=a()}else a=t();var o=!mt((xe||n).memoizedState,a);if(o&&(n.memoizedState=a,Re=!0),n=n.queue,uo(Is.bind(null,l,n,e),[e]),n.getSnapshot!==t||o||He!==null&&He.memoizedState.tag&1){if(l.flags|=2048,bl(9,{destroy:void 0},Ps.bind(null,l,n,a,t),null),Se===null)throw Error(u(349));r||(Xt&127)!==0||$s(l,t,a)}return a}function $s(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=I.updateQueue,t===null?(t=ui(),I.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Ps(e,t,a,l){t.value=a,t.getSnapshot=l,eu(t)&&tu(e)}function Is(e,t,a){return a(function(){eu(t)&&tu(e)})}function eu(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!mt(e,a)}catch{return!0}}function tu(e){var t=Da(e,2);t!==null&&st(t,e,2)}function co(e){var t=et();if(typeof e=="function"){var a=e;if(e=a(),Ga){aa(!0);try{a()}finally{aa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vt,lastRenderedState:e},t}function au(e,t,a,l){return e.baseState=a,ro(e,xe,typeof l=="function"?l:Vt)}function sg(e,t,a,l,n){if(hi(e))throw Error(u(485));if(e=t.action,e!==null){var r={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){r.listeners.push(o)}};w.T!==null?a(!0):r.isTransition=!1,l(r),a=t.pending,a===null?(r.next=t.pending=r,lu(t,r)):(r.next=a.next,t.pending=a.next=r)}}function lu(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var r=w.T,o={};w.T=o;try{var c=a(n,l),d=w.S;d!==null&&d(o,c),nu(e,t,c)}catch(v){so(e,t,v)}finally{r!==null&&o.types!==null&&(r.types=o.types),w.T=r}}else try{r=a(n,l),nu(e,t,r)}catch(v){so(e,t,v)}}function nu(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){iu(e,t,l)},function(l){return so(e,t,l)}):iu(e,t,a)}function iu(e,t,a){t.status="fulfilled",t.value=a,ru(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,lu(e,a)))}function so(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,ru(t),t=t.next;while(t!==l)}e.action=null}function ru(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ou(e,t){return t}function cu(e,t){if(oe){var a=Se.formState;if(a!==null){e:{var l=I;if(oe){if(Ne){t:{for(var n=Ne,r=Et;n.nodeType!==8;){if(!r){n=null;break t}if(n=_t(n.nextSibling),n===null){n=null;break t}}r=n.data,n=r==="F!"||r==="F"?n:null}if(n){Ne=_t(n.nextSibling),l=n.data==="F!";break e}}oa(l)}l=!1}l&&(t=a[0])}}return a=et(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ou,lastRenderedState:t},a.queue=l,a=Tu.bind(null,I,l),l.dispatch=a,l=co(!1),r=po.bind(null,I,!1,l.queue),l=et(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=sg.bind(null,I,n,r,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function su(e){var t=De();return uu(t,xe,e)}function uu(e,t,a){if(t=ro(e,t,ou)[0],e=fi(Vt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=ln(t)}catch(o){throw o===fl?ai:o}else l=t;t=De();var n=t.queue,r=n.dispatch;return a!==t.memoizedState&&(I.flags|=2048,bl(9,{destroy:void 0},ug.bind(null,n,a),null)),[l,r,e]}function ug(e,t){e.action=t}function du(e){var t=De(),a=xe;if(a!==null)return uu(t,a,e);De(),t=t.memoizedState,a=De();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function bl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=I.updateQueue,t===null&&(t=ui(),I.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function fu(){return De().memoizedState}function mi(e,t,a,l){var n=et();I.flags|=e,n.memoizedState=bl(1|t,{destroy:void 0},a,l===void 0?null:l)}function gi(e,t,a,l){var n=De();l=l===void 0?null:l;var r=n.memoizedState.inst;xe!==null&&l!==null&&eo(l,xe.memoizedState.deps)?n.memoizedState=bl(t,r,a,l):(I.flags|=e,n.memoizedState=bl(1|t,r,a,l))}function mu(e,t){mi(8390656,8,e,t)}function uo(e,t){gi(2048,8,e,t)}function dg(e){I.flags|=4;var t=I.updateQueue;if(t===null)t=ui(),I.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function gu(e){var t=De().memoizedState;return dg({ref:t,nextImpl:e}),function(){if((de&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function hu(e,t){return gi(4,2,e,t)}function pu(e,t){return gi(4,4,e,t)}function bu(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xu(e,t,a){a=a!=null?a.concat([e]):null,gi(4,4,bu.bind(null,t,e),a)}function fo(){}function vu(e,t){var a=De();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&eo(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function yu(e,t){var a=De();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&eo(t,l[1]))return l[0];if(l=e(),Ga){aa(!0);try{e()}finally{aa(!1)}}return a.memoizedState=[l,t],l}function mo(e,t,a){return a===void 0||(Xt&1073741824)!==0&&(ie&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=jd(),I.lanes|=e,pa|=e,a)}function ju(e,t,a,l){return mt(a,t)?a:gl.current!==null?(e=mo(e,a,l),mt(e,t)||(Re=!0),e):(Xt&42)===0||(Xt&1073741824)!==0&&(ie&261930)===0?(Re=!0,e.memoizedState=a):(e=jd(),I.lanes|=e,pa|=e,t)}function Su(e,t,a,l,n){var r=R.p;R.p=r!==0&&8>r?r:8;var o=w.T,c={};w.T=c,po(e,!1,t,a);try{var d=n(),v=w.S;if(v!==null&&v(c,d),d!==null&&typeof d=="object"&&typeof d.then=="function"){var z=rg(d,l);nn(e,t,z,vt(e))}else nn(e,t,l,vt(e))}catch(T){nn(e,t,{then:function(){},status:"rejected",reason:T},vt())}finally{R.p=r,o!==null&&c.types!==null&&(o.types=c.types),w.T=o}}function fg(){}function go(e,t,a,l){if(e.tag!==5)throw Error(u(476));var n=Nu(e).queue;Su(e,n,t,J,a===null?fg:function(){return wu(e),a(l)})}function Nu(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vt,lastRenderedState:J},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function wu(e){var t=Nu(e);t.next===null&&(t=e.alternate.memoizedState),nn(e,t.next.queue,{},vt())}function ho(){return Ke(Sn)}function zu(){return De().memoizedState}function Eu(){return De().memoizedState}function mg(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=vt();e=ua(a);var l=da(t,e,a);l!==null&&(st(l,t,a),Il(l,t,a)),t={cache:Zr()},e.payload=t;return}t=t.return}}function gg(e,t,a){var l=vt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},hi(e)?_u(t,a):(a=kr(e,t,a,l),a!==null&&(st(a,e,l),Au(a,t,l)))}function Tu(e,t,a){var l=vt();nn(e,t,a,l)}function nn(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(hi(e))_u(t,n);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var o=t.lastRenderedState,c=r(o,a);if(n.hasEagerState=!0,n.eagerState=c,mt(c,o))return Wn(e,t,n,0),Se===null&&Jn(),!1}catch{}if(a=kr(e,t,n,l),a!==null)return st(a,e,l),Au(a,t,l),!0}return!1}function po(e,t,a,l){if(l={lane:2,revertLane:Jo(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},hi(e)){if(t)throw Error(u(479))}else t=kr(e,a,l,2),t!==null&&st(t,e,2)}function hi(e){var t=e.alternate;return e===I||t!==null&&t===I}function _u(e,t){hl=ci=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Au(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Oc(e,a)}}var rn={readContext:Ke,use:di,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useLayoutEffect:Ae,useInsertionEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useSyncExternalStore:Ae,useId:Ae,useHostTransitionStatus:Ae,useFormState:Ae,useActionState:Ae,useOptimistic:Ae,useMemoCache:Ae,useCacheRefresh:Ae};rn.useEffectEvent=Ae;var Cu={readContext:Ke,use:di,useCallback:function(e,t){return et().memoizedState=[e,t===void 0?null:t],e},useContext:Ke,useEffect:mu,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,mi(4194308,4,bu.bind(null,t,e),a)},useLayoutEffect:function(e,t){return mi(4194308,4,e,t)},useInsertionEffect:function(e,t){mi(4,2,e,t)},useMemo:function(e,t){var a=et();t=t===void 0?null:t;var l=e();if(Ga){aa(!0);try{e()}finally{aa(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=et();if(a!==void 0){var n=a(t);if(Ga){aa(!0);try{a(t)}finally{aa(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=gg.bind(null,I,e),[l.memoizedState,e]},useRef:function(e){var t=et();return e={current:e},t.memoizedState=e},useState:function(e){e=co(e);var t=e.queue,a=Tu.bind(null,I,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:fo,useDeferredValue:function(e,t){var a=et();return mo(a,e,t)},useTransition:function(){var e=co(!1);return e=Su.bind(null,I,e.queue,!0,!1),et().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=I,n=et();if(oe){if(a===void 0)throw Error(u(407));a=a()}else{if(a=t(),Se===null)throw Error(u(349));(ie&127)!==0||$s(l,t,a)}n.memoizedState=a;var r={value:a,getSnapshot:t};return n.queue=r,mu(Is.bind(null,l,r,e),[e]),l.flags|=2048,bl(9,{destroy:void 0},Ps.bind(null,l,r,a,t),null),a},useId:function(){var e=et(),t=Se.identifierPrefix;if(oe){var a=Ut,l=Ot;a=(l&~(1<<32-ft(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=si++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=og++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ho,useFormState:cu,useActionState:cu,useOptimistic:function(e){var t=et();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=po.bind(null,I,!0,a),a.dispatch=t,[e,t]},useMemoCache:io,useCacheRefresh:function(){return et().memoizedState=mg.bind(null,I)},useEffectEvent:function(e){var t=et(),a={impl:e};return t.memoizedState=a,function(){if((de&2)!==0)throw Error(u(440));return a.impl.apply(void 0,arguments)}}},bo={readContext:Ke,use:di,useCallback:vu,useContext:Ke,useEffect:uo,useImperativeHandle:xu,useInsertionEffect:hu,useLayoutEffect:pu,useMemo:yu,useReducer:fi,useRef:fu,useState:function(){return fi(Vt)},useDebugValue:fo,useDeferredValue:function(e,t){var a=De();return ju(a,xe.memoizedState,e,t)},useTransition:function(){var e=fi(Vt)[0],t=De().memoizedState;return[typeof e=="boolean"?e:ln(e),t]},useSyncExternalStore:Fs,useId:zu,useHostTransitionStatus:ho,useFormState:su,useActionState:su,useOptimistic:function(e,t){var a=De();return au(a,xe,e,t)},useMemoCache:io,useCacheRefresh:Eu};bo.useEffectEvent=gu;var Mu={readContext:Ke,use:di,useCallback:vu,useContext:Ke,useEffect:uo,useImperativeHandle:xu,useInsertionEffect:hu,useLayoutEffect:pu,useMemo:yu,useReducer:oo,useRef:fu,useState:function(){return oo(Vt)},useDebugValue:fo,useDeferredValue:function(e,t){var a=De();return xe===null?mo(a,e,t):ju(a,xe.memoizedState,e,t)},useTransition:function(){var e=oo(Vt)[0],t=De().memoizedState;return[typeof e=="boolean"?e:ln(e),t]},useSyncExternalStore:Fs,useId:zu,useHostTransitionStatus:ho,useFormState:du,useActionState:du,useOptimistic:function(e,t){var a=De();return xe!==null?au(a,xe,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:io,useCacheRefresh:Eu};Mu.useEffectEvent=gu;function xo(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:M({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var vo={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=vt(),n=ua(l);n.payload=t,a!=null&&(n.callback=a),t=da(e,n,l),t!==null&&(st(t,e,l),Il(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=vt(),n=ua(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=da(e,n,l),t!==null&&(st(t,e,l),Il(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=vt(),l=ua(a);l.tag=2,t!=null&&(l.callback=t),t=da(e,l,a),t!==null&&(st(t,e,a),Il(t,e,a))}};function ku(e,t,a,l,n,r,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,r,o):t.prototype&&t.prototype.isPureReactComponent?!Xl(a,l)||!Xl(n,r):!0}function Du(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&vo.enqueueReplaceState(t,t.state,null)}function Za(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=M({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function Ou(e){Kn(e)}function Uu(e){console.error(e)}function Bu(e){Kn(e)}function pi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Hu(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function yo(e,t,a){return a=ua(a),a.tag=3,a.payload={element:null},a.callback=function(){pi(e,t)},a}function Ru(e){return e=ua(e),e.tag=3,e}function qu(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var r=l.value;e.payload=function(){return n(r)},e.callback=function(){Hu(t,a,l)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){Hu(t,a,l),typeof n!="function"&&(ba===null?ba=new Set([this]):ba.add(this));var c=l.stack;this.componentDidCatch(l.value,{componentStack:c!==null?c:""})})}function hg(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&sl(t,a,n,!0),a=ht.current,a!==null){switch(a.tag){case 31:case 13:return Tt===null?_i():a.alternate===null&&Ce===0&&(Ce=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===li?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Xo(e,l,n)),!1;case 22:return a.flags|=65536,l===li?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Xo(e,l,n)),!1}throw Error(u(435,a.tag))}return Xo(e,l,n),_i(),!1}if(oe)return t=ht.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==Rr&&(e=Error(u(422),{cause:l}),Jl(Nt(e,a)))):(l!==Rr&&(t=Error(u(423),{cause:l}),Jl(Nt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=Nt(l,a),n=yo(e.stateNode,l,n),Wr(e,n),Ce!==4&&(Ce=2)),!1;var r=Error(u(520),{cause:l});if(r=Nt(r,a),gn===null?gn=[r]:gn.push(r),Ce!==4&&(Ce=2),t===null)return!0;l=Nt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=yo(a.stateNode,l,e),Wr(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(ba===null||!ba.has(r))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Ru(n),qu(n,e,a,l),Wr(a,n),!1}a=a.return}while(a!==null);return!1}var jo=Error(u(461)),Re=!1;function Je(e,t,a,l){t.child=e===null?Zs(t,null,a,l):Ya(t,e.child,a,l)}function Lu(e,t,a,l,n){a=a.render;var r=t.ref;if("ref"in l){var o={};for(var c in l)c!=="ref"&&(o[c]=l[c])}else o=l;return Ha(t),l=to(e,t,a,o,r,n),c=ao(),e!==null&&!Re?(lo(e,t,n),Kt(e,t,n)):(oe&&c&&Br(t),t.flags|=1,Je(e,t,l,n),t.child)}function Yu(e,t,a,l,n){if(e===null){var r=a.type;return typeof r=="function"&&!Dr(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,Gu(e,t,r,l,n)):(e=$n(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Ao(e,n)){var o=r.memoizedProps;if(a=a.compare,a=a!==null?a:Xl,a(o,l)&&e.ref===t.ref)return Kt(e,t,n)}return t.flags|=1,e=Yt(r,l),e.ref=t.ref,e.return=t,t.child=e}function Gu(e,t,a,l,n){if(e!==null){var r=e.memoizedProps;if(Xl(r,l)&&e.ref===t.ref)if(Re=!1,t.pendingProps=l=r,Ao(e,n))(e.flags&131072)!==0&&(Re=!0);else return t.lanes=e.lanes,Kt(e,t,n)}return So(e,t,a,l,n)}function Zu(e,t,a,l){var n=l.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~r}else l=0,t.child=null;return Qu(e,t,r,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ti(t,r!==null?r.cachePool:null),r!==null?Vs(t,r):$r(),Ks(t);else return l=t.lanes=536870912,Qu(e,t,r!==null?r.baseLanes|a:a,a,l)}else r!==null?(ti(t,r.cachePool),Vs(t,r),ma(),t.memoizedState=null):(e!==null&&ti(t,null),$r(),ma());return Je(e,t,n,a),t.child}function on(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Qu(e,t,a,l,n){var r=Xr();return r=r===null?null:{parent:Be._currentValue,pool:r},t.memoizedState={baseLanes:a,cachePool:r},e!==null&&ti(t,null),$r(),Ks(t),e!==null&&sl(e,t,l,!0),t.childLanes=n,null}function bi(e,t){return t=vi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Xu(e,t,a){return Ya(t,e.child,null,a),e=bi(t,t.pendingProps),e.flags|=2,pt(t),t.memoizedState=null,e}function pg(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(oe){if(l.mode==="hidden")return e=bi(t,l),t.lanes=536870912,on(null,e);if(Ir(t),(e=Ne)?(e=lf(e,Et),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ia!==null?{id:Ot,overflow:Ut}:null,retryLane:536870912,hydrationErrors:null},a=_s(e),a.return=t,t.child=a,Ve=t,Ne=null)):e=null,e===null)throw oa(t);return t.lanes=536870912,null}return bi(t,l)}var r=e.memoizedState;if(r!==null){var o=r.dehydrated;if(Ir(t),n)if(t.flags&256)t.flags&=-257,t=Xu(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(Re||sl(e,t,a,!1),n=(a&e.childLanes)!==0,Re||n){if(l=Se,l!==null&&(o=Uc(l,a),o!==0&&o!==r.retryLane))throw r.retryLane=o,Da(e,o),st(l,e,o),jo;_i(),t=Xu(e,t,a)}else e=r.treeContext,Ne=_t(o.nextSibling),Ve=t,oe=!0,ra=null,Et=!1,e!==null&&Ms(t,e),t=bi(t,l),t.flags|=4096;return t}return e=Yt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function xi(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(u(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function So(e,t,a,l,n){return Ha(t),a=to(e,t,a,l,void 0,n),l=ao(),e!==null&&!Re?(lo(e,t,n),Kt(e,t,n)):(oe&&l&&Br(t),t.flags|=1,Je(e,t,a,n),t.child)}function Vu(e,t,a,l,n,r){return Ha(t),t.updateQueue=null,a=Ws(t,l,a,n),Js(e),l=ao(),e!==null&&!Re?(lo(e,t,r),Kt(e,t,r)):(oe&&l&&Br(t),t.flags|=1,Je(e,t,a,r),t.child)}function Ku(e,t,a,l,n){if(Ha(t),t.stateNode===null){var r=il,o=a.contextType;typeof o=="object"&&o!==null&&(r=Ke(o)),r=new a(l,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=vo,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=l,r.state=t.memoizedState,r.refs={},Kr(t),o=a.contextType,r.context=typeof o=="object"&&o!==null?Ke(o):il,r.state=t.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(xo(t,a,o,l),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(o=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),o!==r.state&&vo.enqueueReplaceState(r,r.state,null),tn(t,l,r,n),en(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){r=t.stateNode;var c=t.memoizedProps,d=Za(a,c);r.props=d;var v=r.context,z=a.contextType;o=il,typeof z=="object"&&z!==null&&(o=Ke(z));var T=a.getDerivedStateFromProps;z=typeof T=="function"||typeof r.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,z||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(c||v!==o)&&Du(t,r,l,o),sa=!1;var y=t.memoizedState;r.state=y,tn(t,l,r,n),en(),v=t.memoizedState,c||y!==v||sa?(typeof T=="function"&&(xo(t,a,T,l),v=t.memoizedState),(d=sa||ku(t,a,d,l,y,v,o))?(z||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=v),r.props=l,r.state=v,r.context=o,l=d):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{r=t.stateNode,Jr(e,t),o=t.memoizedProps,z=Za(a,o),r.props=z,T=t.pendingProps,y=r.context,v=a.contextType,d=il,typeof v=="object"&&v!==null&&(d=Ke(v)),c=a.getDerivedStateFromProps,(v=typeof c=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o!==T||y!==d)&&Du(t,r,l,d),sa=!1,y=t.memoizedState,r.state=y,tn(t,l,r,n),en();var S=t.memoizedState;o!==T||y!==S||sa||e!==null&&e.dependencies!==null&&In(e.dependencies)?(typeof c=="function"&&(xo(t,a,c,l),S=t.memoizedState),(z=sa||ku(t,a,z,l,y,S,d)||e!==null&&e.dependencies!==null&&In(e.dependencies))?(v||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(l,S,d),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(l,S,d)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=S),r.props=l,r.state=S,r.context=d,l=z):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),l=!1)}return r=l,xi(e,t),l=(t.flags&128)!==0,r||l?(r=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&l?(t.child=Ya(t,e.child,null,n),t.child=Ya(t,null,a,n)):Je(e,t,a,n),t.memoizedState=r.state,e=t.child):e=Kt(e,t,n),e}function Ju(e,t,a,l){return Ua(),t.flags|=256,Je(e,t,a,l),t.child}var No={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wo(e){return{baseLanes:e,cachePool:Hs()}}function zo(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=xt),e}function Wu(e,t,a){var l=t.pendingProps,n=!1,r=(t.flags&128)!==0,o;if((o=r)||(o=e!==null&&e.memoizedState===null?!1:(ke.current&2)!==0),o&&(n=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(oe){if(n?fa(t):ma(),(e=Ne)?(e=lf(e,Et),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ia!==null?{id:Ot,overflow:Ut}:null,retryLane:536870912,hydrationErrors:null},a=_s(e),a.return=t,t.child=a,Ve=t,Ne=null)):e=null,e===null)throw oa(t);return oc(e)?t.lanes=32:t.lanes=536870912,null}var c=l.children;return l=l.fallback,n?(ma(),n=t.mode,c=vi({mode:"hidden",children:c},n),l=Oa(l,n,a,null),c.return=t,l.return=t,c.sibling=l,t.child=c,l=t.child,l.memoizedState=wo(a),l.childLanes=zo(e,o,a),t.memoizedState=No,on(null,l)):(fa(t),Eo(t,c))}var d=e.memoizedState;if(d!==null&&(c=d.dehydrated,c!==null)){if(r)t.flags&256?(fa(t),t.flags&=-257,t=To(e,t,a)):t.memoizedState!==null?(ma(),t.child=e.child,t.flags|=128,t=null):(ma(),c=l.fallback,n=t.mode,l=vi({mode:"visible",children:l.children},n),c=Oa(c,n,a,null),c.flags|=2,l.return=t,c.return=t,l.sibling=c,t.child=l,Ya(t,e.child,null,a),l=t.child,l.memoizedState=wo(a),l.childLanes=zo(e,o,a),t.memoizedState=No,t=on(null,l));else if(fa(t),oc(c)){if(o=c.nextSibling&&c.nextSibling.dataset,o)var v=o.dgst;o=v,l=Error(u(419)),l.stack="",l.digest=o,Jl({value:l,source:null,stack:null}),t=To(e,t,a)}else if(Re||sl(e,t,a,!1),o=(a&e.childLanes)!==0,Re||o){if(o=Se,o!==null&&(l=Uc(o,a),l!==0&&l!==d.retryLane))throw d.retryLane=l,Da(e,l),st(o,e,l),jo;rc(c)||_i(),t=To(e,t,a)}else rc(c)?(t.flags|=192,t.child=e.child,t=null):(e=d.treeContext,Ne=_t(c.nextSibling),Ve=t,oe=!0,ra=null,Et=!1,e!==null&&Ms(t,e),t=Eo(t,l.children),t.flags|=4096);return t}return n?(ma(),c=l.fallback,n=t.mode,d=e.child,v=d.sibling,l=Yt(d,{mode:"hidden",children:l.children}),l.subtreeFlags=d.subtreeFlags&65011712,v!==null?c=Yt(v,c):(c=Oa(c,n,a,null),c.flags|=2),c.return=t,l.return=t,l.sibling=c,t.child=l,on(null,l),l=t.child,c=e.child.memoizedState,c===null?c=wo(a):(n=c.cachePool,n!==null?(d=Be._currentValue,n=n.parent!==d?{parent:d,pool:d}:n):n=Hs(),c={baseLanes:c.baseLanes|a,cachePool:n}),l.memoizedState=c,l.childLanes=zo(e,o,a),t.memoizedState=No,on(e.child,l)):(fa(t),a=e.child,e=a.sibling,a=Yt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a)}function Eo(e,t){return t=vi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function vi(e,t){return e=gt(22,e,null,t),e.lanes=0,e}function To(e,t,a){return Ya(t,e.child,null,a),e=Eo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Fu(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Yr(e.return,t,a)}function _o(e,t,a,l,n,r){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:r}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=l,o.tail=a,o.tailMode=n,o.treeForkCount=r)}function $u(e,t,a){var l=t.pendingProps,n=l.revealOrder,r=l.tail;l=l.children;var o=ke.current,c=(o&2)!==0;if(c?(o=o&1|2,t.flags|=128):o&=1,q(ke,o),Je(e,t,l,a),l=oe?Kl:0,!c&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fu(e,a,t);else if(e.tag===19)Fu(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&oi(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),_o(t,!1,n,a,r,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&oi(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}_o(t,!0,a,null,r,l);break;case"together":_o(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Kt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),pa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(sl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,a=Yt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Yt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Ao(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&In(e)))}function bg(e,t,a){switch(t.tag){case 3:Ie(t,t.stateNode.containerInfo),ca(t,Be,e.memoizedState.cache),Ua();break;case 27:case 5:kl(t);break;case 4:Ie(t,t.stateNode.containerInfo);break;case 10:ca(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ir(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(fa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Wu(e,t,a):(fa(t),e=Kt(e,t,a),e!==null?e.sibling:null);fa(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(sl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return $u(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),q(ke,ke.current),l)break;return null;case 22:return t.lanes=0,Zu(e,t,a,t.pendingProps);case 24:ca(t,Be,e.memoizedState.cache)}return Kt(e,t,a)}function Pu(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Re=!0;else{if(!Ao(e,a)&&(t.flags&128)===0)return Re=!1,bg(e,t,a);Re=(e.flags&131072)!==0}else Re=!1,oe&&(t.flags&1048576)!==0&&Cs(t,Kl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=qa(t.elementType),t.type=e,typeof e=="function")Dr(e)?(l=Za(e,l),t.tag=1,t=Ku(null,t,e,l,a)):(t.tag=0,t=So(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===Oe){t.tag=11,t=Lu(null,t,e,l,a);break e}else if(n===U){t.tag=14,t=Yu(null,t,e,l,a);break e}}throw t=pe(e)||e,Error(u(306,t,""))}}return t;case 0:return So(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=Za(l,t.pendingProps),Ku(e,t,l,n,a);case 3:e:{if(Ie(t,t.stateNode.containerInfo),e===null)throw Error(u(387));l=t.pendingProps;var r=t.memoizedState;n=r.element,Jr(e,t),tn(t,l,null,a);var o=t.memoizedState;if(l=o.cache,ca(t,Be,l),l!==r.cache&&Gr(t,[Be],a,!0),en(),l=o.element,r.isDehydrated)if(r={element:l,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=Ju(e,t,l,a);break e}else if(l!==n){n=Nt(Error(u(424)),t),Jl(n),t=Ju(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ne=_t(e.firstChild),Ve=t,oe=!0,ra=null,Et=!0,a=Zs(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ua(),l===n){t=Kt(e,t,a);break e}Je(e,t,l,a)}t=t.child}return t;case 26:return xi(e,t),e===null?(a=uf(t.type,null,t.pendingProps,null))?t.memoizedState=a:oe||(a=t.type,e=t.pendingProps,l=Ui(ae.current).createElement(a),l[Xe]=t,l[lt]=e,We(l,a,e),Ge(l),t.stateNode=l):t.memoizedState=uf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return kl(t),e===null&&oe&&(l=t.stateNode=of(t.type,t.pendingProps,ae.current),Ve=t,Et=!0,n=Ne,ja(t.type)?(cc=n,Ne=_t(l.firstChild)):Ne=n),Je(e,t,t.pendingProps.children,a),xi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&oe&&((n=l=Ne)&&(l=Kg(l,t.type,t.pendingProps,Et),l!==null?(t.stateNode=l,Ve=t,Ne=_t(l.firstChild),Et=!1,n=!0):n=!1),n||oa(t)),kl(t),n=t.type,r=t.pendingProps,o=e!==null?e.memoizedProps:null,l=r.children,lc(n,r)?l=null:o!==null&&lc(n,o)&&(t.flags|=32),t.memoizedState!==null&&(n=to(e,t,cg,null,null,a),Sn._currentValue=n),xi(e,t),Je(e,t,l,a),t.child;case 6:return e===null&&oe&&((e=a=Ne)&&(a=Jg(a,t.pendingProps,Et),a!==null?(t.stateNode=a,Ve=t,Ne=null,e=!0):e=!1),e||oa(t)),null;case 13:return Wu(e,t,a);case 4:return Ie(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Ya(t,null,l,a):Je(e,t,l,a),t.child;case 11:return Lu(e,t,t.type,t.pendingProps,a);case 7:return Je(e,t,t.pendingProps,a),t.child;case 8:return Je(e,t,t.pendingProps.children,a),t.child;case 12:return Je(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,ca(t,t.type,l.value),Je(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Ha(t),n=Ke(n),l=l(n),t.flags|=1,Je(e,t,l,a),t.child;case 14:return Yu(e,t,t.type,t.pendingProps,a);case 15:return Gu(e,t,t.type,t.pendingProps,a);case 19:return $u(e,t,a);case 31:return pg(e,t,a);case 22:return Zu(e,t,a,t.pendingProps);case 24:return Ha(t),l=Ke(Be),e===null?(n=Xr(),n===null&&(n=Se,r=Zr(),n.pooledCache=r,r.refCount++,r!==null&&(n.pooledCacheLanes|=a),n=r),t.memoizedState={parent:l,cache:n},Kr(t),ca(t,Be,n)):((e.lanes&a)!==0&&(Jr(e,t),tn(t,null,null,a),en()),n=e.memoizedState,r=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ca(t,Be,l)):(l=r.cache,ca(t,Be,l),l!==n.cache&&Gr(t,[Be],a,!0))),Je(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function Jt(e){e.flags|=4}function Co(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(zd())e.flags|=8192;else throw La=li,Vr}else e.flags&=-16777217}function Iu(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!hf(t))if(zd())e.flags|=8192;else throw La=li,Vr}function yi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?kc():536870912,e.lanes|=t,jl|=t)}function cn(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function we(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function xg(e,t,a){var l=t.pendingProps;switch(Hr(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(t),null;case 1:return we(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Qt(Be),Me(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(cl(t)?Jt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,qr())),we(t),null;case 26:var n=t.type,r=t.memoizedState;return e===null?(Jt(t),r!==null?(we(t),Iu(t,r)):(we(t),Co(t,n,null,l,a))):r?r!==e.memoizedState?(Jt(t),we(t),Iu(t,r)):(we(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Jt(t),we(t),Co(t,n,e,l,a)),null;case 27:if(Mn(t),a=ae.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Jt(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return we(t),null}e=Z.current,cl(t)?ks(t):(e=of(n,l,a),t.stateNode=e,Jt(t))}return we(t),null;case 5:if(Mn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Jt(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return we(t),null}if(r=Z.current,cl(t))ks(t);else{var o=Ui(ae.current);switch(r){case 1:r=o.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:r=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":r=o.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":r=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":r=o.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof l.is=="string"?o.createElement("select",{is:l.is}):o.createElement("select"),l.multiple?r.multiple=!0:l.size&&(r.size=l.size);break;default:r=typeof l.is=="string"?o.createElement(n,{is:l.is}):o.createElement(n)}}r[Xe]=t,r[lt]=l;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)r.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=r;e:switch(We(r,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Jt(t)}}return we(t),Co(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Jt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(u(166));if(e=ae.current,cl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Ve,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Xe]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Wd(e.nodeValue,a)),e||oa(t,!0)}else e=Ui(e).createTextNode(l),e[Xe]=t,t.stateNode=e}return we(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=cl(t),a!==null){if(e===null){if(!l)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[Xe]=t}else Ua(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;we(t),e=!1}else a=qr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(pt(t),t):(pt(t),null);if((t.flags&128)!==0)throw Error(u(558))}return we(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=cl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(u(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(u(317));n[Xe]=t}else Ua(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;we(t),n=!1}else n=qr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(pt(t),t):(pt(t),null)}return pt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),r=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(r=l.memoizedState.cachePool.pool),r!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),yi(t,t.updateQueue),we(t),null);case 4:return Me(),e===null&&Po(t.stateNode.containerInfo),we(t),null;case 10:return Qt(t.type),we(t),null;case 19:if(A(ke),l=t.memoizedState,l===null)return we(t),null;if(n=(t.flags&128)!==0,r=l.rendering,r===null)if(n)cn(l,!1);else{if(Ce!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=oi(e),r!==null){for(t.flags|=128,cn(l,!1),e=r.updateQueue,t.updateQueue=e,yi(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Ts(a,e),a=a.sibling;return q(ke,ke.current&1|2),oe&&Gt(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&ut()>zi&&(t.flags|=128,n=!0,cn(l,!1),t.lanes=4194304)}else{if(!n)if(e=oi(r),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,yi(t,e),cn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!r.alternate&&!oe)return we(t),null}else 2*ut()-l.renderingStartTime>zi&&a!==536870912&&(t.flags|=128,n=!0,cn(l,!1),t.lanes=4194304);l.isBackwards?(r.sibling=t.child,t.child=r):(e=l.last,e!==null?e.sibling=r:t.child=r,l.last=r)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=ut(),e.sibling=null,a=ke.current,q(ke,n?a&1|2:a&1),oe&&Gt(t,l.treeForkCount),e):(we(t),null);case 22:case 23:return pt(t),Pr(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(we(t),t.subtreeFlags&6&&(t.flags|=8192)):we(t),a=t.updateQueue,a!==null&&yi(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&A(Ra),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Qt(Be),we(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function vg(e,t){switch(Hr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Qt(Be),Me(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Mn(t),null;case 31:if(t.memoizedState!==null){if(pt(t),t.alternate===null)throw Error(u(340));Ua()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(pt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Ua()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return A(ke),null;case 4:return Me(),null;case 10:return Qt(t.type),null;case 22:case 23:return pt(t),Pr(),e!==null&&A(Ra),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Qt(Be),null;case 25:return null;default:return null}}function ed(e,t){switch(Hr(t),t.tag){case 3:Qt(Be),Me();break;case 26:case 27:case 5:Mn(t);break;case 4:Me();break;case 31:t.memoizedState!==null&&pt(t);break;case 13:pt(t);break;case 19:A(ke);break;case 10:Qt(t.type);break;case 22:case 23:pt(t),Pr(),e!==null&&A(Ra);break;case 24:Qt(Be)}}function sn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var r=a.create,o=a.inst;l=r(),o.destroy=l}a=a.next}while(a!==n)}}catch(c){he(t,t.return,c)}}function ga(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var r=n.next;l=r;do{if((l.tag&e)===e){var o=l.inst,c=o.destroy;if(c!==void 0){o.destroy=void 0,n=t;var d=a,v=c;try{v()}catch(z){he(n,d,z)}}}l=l.next}while(l!==r)}}catch(z){he(t,t.return,z)}}function td(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Xs(t,a)}catch(l){he(e,e.return,l)}}}function ad(e,t,a){a.props=Za(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){he(e,t,l)}}function un(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){he(e,t,n)}}function Bt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){he(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){he(e,t,n)}else a.current=null}function ld(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){he(e,e.return,n)}}function Mo(e,t,a){try{var l=e.stateNode;Yg(l,e.type,a,t),l[lt]=t}catch(n){he(e,e.return,n)}}function nd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ja(e.type)||e.tag===4}function ko(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||nd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ja(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Do(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=qt));else if(l!==4&&(l===27&&ja(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Do(e,t,a),e=e.sibling;e!==null;)Do(e,t,a),e=e.sibling}function ji(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&ja(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(ji(e,t,a),e=e.sibling;e!==null;)ji(e,t,a),e=e.sibling}function id(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);We(t,l,a),t[Xe]=e,t[lt]=a}catch(r){he(e,e.return,r)}}var Wt=!1,qe=!1,Oo=!1,rd=typeof WeakSet=="function"?WeakSet:Set,Ze=null;function yg(e,t){if(e=e.containerInfo,tc=Gi,e=xs(e),Er(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,r=l.focusNode;l=l.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var o=0,c=-1,d=-1,v=0,z=0,T=e,y=null;t:for(;;){for(var S;T!==a||n!==0&&T.nodeType!==3||(c=o+n),T!==r||l!==0&&T.nodeType!==3||(d=o+l),T.nodeType===3&&(o+=T.nodeValue.length),(S=T.firstChild)!==null;)y=T,T=S;for(;;){if(T===e)break t;if(y===a&&++v===n&&(c=o),y===r&&++z===l&&(d=o),(S=T.nextSibling)!==null)break;T=y,y=T.parentNode}T=S}a=c===-1||d===-1?null:{start:c,end:d}}else a=null}a=a||{start:0,end:0}}else a=null;for(ac={focusedElem:e,selectionRange:a},Gi=!1,Ze=t;Ze!==null;)if(t=Ze,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ze=e;else for(;Ze!==null;){switch(t=Ze,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,n=r.memoizedProps,r=r.memoizedState,l=a.stateNode;try{var Y=Za(a.type,n);e=l.getSnapshotBeforeUpdate(Y,r),l.__reactInternalSnapshotBeforeUpdate=e}catch(K){he(a,a.return,K)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)ic(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ic(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,Ze=e;break}Ze=t.return}}function od(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:$t(e,a),l&4&&sn(5,a);break;case 1:if($t(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(o){he(a,a.return,o)}else{var n=Za(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){he(a,a.return,o)}}l&64&&td(a),l&512&&un(a,a.return);break;case 3:if($t(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Xs(e,t)}catch(o){he(a,a.return,o)}}break;case 27:t===null&&l&4&&id(a);case 26:case 5:$t(e,a),t===null&&l&4&&ld(a),l&512&&un(a,a.return);break;case 12:$t(e,a);break;case 31:$t(e,a),l&4&&ud(e,a);break;case 13:$t(e,a),l&4&&dd(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Ag.bind(null,a),Wg(e,a))));break;case 22:if(l=a.memoizedState!==null||Wt,!l){t=t!==null&&t.memoizedState!==null||qe,n=Wt;var r=qe;Wt=l,(qe=t)&&!r?Pt(e,a,(a.subtreeFlags&8772)!==0):$t(e,a),Wt=n,qe=r}break;case 30:break;default:$t(e,a)}}function cd(e){var t=e.alternate;t!==null&&(e.alternate=null,cd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&sr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ze=null,it=!1;function Ft(e,t,a){for(a=a.child;a!==null;)sd(e,t,a),a=a.sibling}function sd(e,t,a){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(Dl,a)}catch{}switch(a.tag){case 26:qe||Bt(a,t),Ft(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:qe||Bt(a,t);var l=ze,n=it;ja(a.type)&&(ze=a.stateNode,it=!1),Ft(e,t,a),vn(a.stateNode),ze=l,it=n;break;case 5:qe||Bt(a,t);case 6:if(l=ze,n=it,ze=null,Ft(e,t,a),ze=l,it=n,ze!==null)if(it)try{(ze.nodeType===9?ze.body:ze.nodeName==="HTML"?ze.ownerDocument.body:ze).removeChild(a.stateNode)}catch(r){he(a,t,r)}else try{ze.removeChild(a.stateNode)}catch(r){he(a,t,r)}break;case 18:ze!==null&&(it?(e=ze,tf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Al(e)):tf(ze,a.stateNode));break;case 4:l=ze,n=it,ze=a.stateNode.containerInfo,it=!0,Ft(e,t,a),ze=l,it=n;break;case 0:case 11:case 14:case 15:ga(2,a,t),qe||ga(4,a,t),Ft(e,t,a);break;case 1:qe||(Bt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&ad(a,t,l)),Ft(e,t,a);break;case 21:Ft(e,t,a);break;case 22:qe=(l=qe)||a.memoizedState!==null,Ft(e,t,a),qe=l;break;default:Ft(e,t,a)}}function ud(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Al(e)}catch(a){he(t,t.return,a)}}}function dd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Al(e)}catch(a){he(t,t.return,a)}}function jg(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new rd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new rd),t;default:throw Error(u(435,e.tag))}}function Si(e,t){var a=jg(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=Cg.bind(null,e,l);l.then(n,n)}})}function rt(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],r=e,o=t,c=o;e:for(;c!==null;){switch(c.tag){case 27:if(ja(c.type)){ze=c.stateNode,it=!1;break e}break;case 5:ze=c.stateNode,it=!1;break e;case 3:case 4:ze=c.stateNode.containerInfo,it=!0;break e}c=c.return}if(ze===null)throw Error(u(160));sd(r,o,n),ze=null,it=!1,r=n.alternate,r!==null&&(r.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)fd(t,e),t=t.sibling}var kt=null;function fd(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:rt(t,e),ot(e),l&4&&(ga(3,e,e.return),sn(3,e),ga(5,e,e.return));break;case 1:rt(t,e),ot(e),l&512&&(qe||a===null||Bt(a,a.return)),l&64&&Wt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=kt;if(rt(t,e),ot(e),l&512&&(qe||a===null||Bt(a,a.return)),l&4){var r=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":r=n.getElementsByTagName("title")[0],(!r||r[Bl]||r[Xe]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=n.createElement(l),n.head.insertBefore(r,n.querySelector("head > title"))),We(r,l,a),r[Xe]=e,Ge(r),l=r;break e;case"link":var o=mf("link","href",n).get(l+(a.href||""));if(o){for(var c=0;c<o.length;c++)if(r=o[c],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(c,1);break t}}r=n.createElement(l),We(r,l,a),n.head.appendChild(r);break;case"meta":if(o=mf("meta","content",n).get(l+(a.content||""))){for(c=0;c<o.length;c++)if(r=o[c],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(c,1);break t}}r=n.createElement(l),We(r,l,a),n.head.appendChild(r);break;default:throw Error(u(468,l))}r[Xe]=e,Ge(r),l=r}e.stateNode=l}else gf(n,e.type,e.stateNode);else e.stateNode=ff(n,l,e.memoizedProps);else r!==l?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,l===null?gf(n,e.type,e.stateNode):ff(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Mo(e,e.memoizedProps,a.memoizedProps)}break;case 27:rt(t,e),ot(e),l&512&&(qe||a===null||Bt(a,a.return)),a!==null&&l&4&&Mo(e,e.memoizedProps,a.memoizedProps);break;case 5:if(rt(t,e),ot(e),l&512&&(qe||a===null||Bt(a,a.return)),e.flags&32){n=e.stateNode;try{Pa(n,"")}catch(Y){he(e,e.return,Y)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,Mo(e,n,a!==null?a.memoizedProps:n)),l&1024&&(Oo=!0);break;case 6:if(rt(t,e),ot(e),l&4){if(e.stateNode===null)throw Error(u(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(Y){he(e,e.return,Y)}}break;case 3:if(Ri=null,n=kt,kt=Bi(t.containerInfo),rt(t,e),kt=n,ot(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Al(t.containerInfo)}catch(Y){he(e,e.return,Y)}Oo&&(Oo=!1,md(e));break;case 4:l=kt,kt=Bi(e.stateNode.containerInfo),rt(t,e),ot(e),kt=l;break;case 12:rt(t,e),ot(e);break;case 31:rt(t,e),ot(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Si(e,l)));break;case 13:rt(t,e),ot(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(wi=ut()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Si(e,l)));break;case 22:n=e.memoizedState!==null;var d=a!==null&&a.memoizedState!==null,v=Wt,z=qe;if(Wt=v||n,qe=z||d,rt(t,e),qe=z,Wt=v,ot(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||d||Wt||qe||Qa(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){d=a=t;try{if(r=d.stateNode,n)o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{c=d.stateNode;var T=d.memoizedProps.style,y=T!=null&&T.hasOwnProperty("display")?T.display:null;c.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(Y){he(d,d.return,Y)}}}else if(t.tag===6){if(a===null){d=t;try{d.stateNode.nodeValue=n?"":d.memoizedProps}catch(Y){he(d,d.return,Y)}}}else if(t.tag===18){if(a===null){d=t;try{var S=d.stateNode;n?af(S,!0):af(d.stateNode,!1)}catch(Y){he(d,d.return,Y)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Si(e,a))));break;case 19:rt(t,e),ot(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Si(e,l)));break;case 30:break;case 21:break;default:rt(t,e),ot(e)}}function ot(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(nd(l)){a=l;break}l=l.return}if(a==null)throw Error(u(160));switch(a.tag){case 27:var n=a.stateNode,r=ko(e);ji(e,r,n);break;case 5:var o=a.stateNode;a.flags&32&&(Pa(o,""),a.flags&=-33);var c=ko(e);ji(e,c,o);break;case 3:case 4:var d=a.stateNode.containerInfo,v=ko(e);Do(e,v,d);break;default:throw Error(u(161))}}catch(z){he(e,e.return,z)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function md(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;md(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function $t(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)od(e,t.alternate,t),t=t.sibling}function Qa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ga(4,t,t.return),Qa(t);break;case 1:Bt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&ad(t,t.return,a),Qa(t);break;case 27:vn(t.stateNode);case 26:case 5:Bt(t,t.return),Qa(t);break;case 22:t.memoizedState===null&&Qa(t);break;case 30:Qa(t);break;default:Qa(t)}e=e.sibling}}function Pt(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,r=t,o=r.flags;switch(r.tag){case 0:case 11:case 15:Pt(n,r,a),sn(4,r);break;case 1:if(Pt(n,r,a),l=r,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(v){he(l,l.return,v)}if(l=r,n=l.updateQueue,n!==null){var c=l.stateNode;try{var d=n.shared.hiddenCallbacks;if(d!==null)for(n.shared.hiddenCallbacks=null,n=0;n<d.length;n++)Qs(d[n],c)}catch(v){he(l,l.return,v)}}a&&o&64&&td(r),un(r,r.return);break;case 27:id(r);case 26:case 5:Pt(n,r,a),a&&l===null&&o&4&&ld(r),un(r,r.return);break;case 12:Pt(n,r,a);break;case 31:Pt(n,r,a),a&&o&4&&ud(n,r);break;case 13:Pt(n,r,a),a&&o&4&&dd(n,r);break;case 22:r.memoizedState===null&&Pt(n,r,a),un(r,r.return);break;case 30:break;default:Pt(n,r,a)}t=t.sibling}}function Uo(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Wl(a))}function Bo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Wl(e))}function Dt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)gd(e,t,a,l),t=t.sibling}function gd(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Dt(e,t,a,l),n&2048&&sn(9,t);break;case 1:Dt(e,t,a,l);break;case 3:Dt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Wl(e)));break;case 12:if(n&2048){Dt(e,t,a,l),e=t.stateNode;try{var r=t.memoizedProps,o=r.id,c=r.onPostCommit;typeof c=="function"&&c(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(d){he(t,t.return,d)}}else Dt(e,t,a,l);break;case 31:Dt(e,t,a,l);break;case 13:Dt(e,t,a,l);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?r._visibility&2?Dt(e,t,a,l):dn(e,t):r._visibility&2?Dt(e,t,a,l):(r._visibility|=2,xl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Uo(o,t);break;case 24:Dt(e,t,a,l),n&2048&&Bo(t.alternate,t);break;default:Dt(e,t,a,l)}}function xl(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,o=t,c=a,d=l,v=o.flags;switch(o.tag){case 0:case 11:case 15:xl(r,o,c,d,n),sn(8,o);break;case 23:break;case 22:var z=o.stateNode;o.memoizedState!==null?z._visibility&2?xl(r,o,c,d,n):dn(r,o):(z._visibility|=2,xl(r,o,c,d,n)),n&&v&2048&&Uo(o.alternate,o);break;case 24:xl(r,o,c,d,n),n&&v&2048&&Bo(o.alternate,o);break;default:xl(r,o,c,d,n)}t=t.sibling}}function dn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:dn(a,l),n&2048&&Uo(l.alternate,l);break;case 24:dn(a,l),n&2048&&Bo(l.alternate,l);break;default:dn(a,l)}t=t.sibling}}var fn=8192;function vl(e,t,a){if(e.subtreeFlags&fn)for(e=e.child;e!==null;)hd(e,t,a),e=e.sibling}function hd(e,t,a){switch(e.tag){case 26:vl(e,t,a),e.flags&fn&&e.memoizedState!==null&&oh(a,kt,e.memoizedState,e.memoizedProps);break;case 5:vl(e,t,a);break;case 3:case 4:var l=kt;kt=Bi(e.stateNode.containerInfo),vl(e,t,a),kt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=fn,fn=16777216,vl(e,t,a),fn=l):vl(e,t,a));break;default:vl(e,t,a)}}function pd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function mn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ze=l,xd(l,e)}pd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)bd(e),e=e.sibling}function bd(e){switch(e.tag){case 0:case 11:case 15:mn(e),e.flags&2048&&ga(9,e,e.return);break;case 3:mn(e);break;case 12:mn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ni(e)):mn(e);break;default:mn(e)}}function Ni(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ze=l,xd(l,e)}pd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ga(8,t,t.return),Ni(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Ni(t));break;default:Ni(t)}e=e.sibling}}function xd(e,t){for(;Ze!==null;){var a=Ze;switch(a.tag){case 0:case 11:case 15:ga(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Wl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ze=l;else e:for(a=e;Ze!==null;){l=Ze;var n=l.sibling,r=l.return;if(cd(l),l===a){Ze=null;break e}if(n!==null){n.return=r,Ze=n;break e}Ze=r}}}var Sg={getCacheForType:function(e){var t=Ke(Be),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Ke(Be).controller.signal}},Ng=typeof WeakMap=="function"?WeakMap:Map,de=0,Se=null,le=null,ie=0,ge=0,bt=null,ha=!1,yl=!1,Ho=!1,It=0,Ce=0,pa=0,Xa=0,Ro=0,xt=0,jl=0,gn=null,ct=null,qo=!1,wi=0,vd=0,zi=1/0,Ei=null,ba=null,Ye=0,xa=null,Sl=null,ea=0,Lo=0,Yo=null,yd=null,hn=0,Go=null;function vt(){return(de&2)!==0&&ie!==0?ie&-ie:w.T!==null?Jo():Bc()}function jd(){if(xt===0)if((ie&536870912)===0||oe){var e=On;On<<=1,(On&3932160)===0&&(On=262144),xt=e}else xt=536870912;return e=ht.current,e!==null&&(e.flags|=32),xt}function st(e,t,a){(e===Se&&(ge===2||ge===9)||e.cancelPendingCommit!==null)&&(Nl(e,0),va(e,ie,xt,!1)),Ul(e,a),((de&2)===0||e!==Se)&&(e===Se&&((de&2)===0&&(Xa|=a),Ce===4&&va(e,ie,xt,!1)),Ht(e))}function Sd(e,t,a){if((de&6)!==0)throw Error(u(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Ol(e,t),n=l?Eg(e,t):Qo(e,t,!0),r=l;do{if(n===0){yl&&!l&&va(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!wg(a)){n=Qo(e,t,!1),r=!1;continue}if(n===2){if(r=t,e.errorRecoveryDisabledLanes&r)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var c=e;n=gn;var d=c.current.memoizedState.isDehydrated;if(d&&(Nl(c,o).flags|=256),o=Qo(c,o,!1),o!==2){if(Ho&&!d){c.errorRecoveryDisabledLanes|=r,Xa|=r,n=4;break e}r=ct,ct=n,r!==null&&(ct===null?ct=r:ct.push.apply(ct,r))}n=o}if(r=!1,n!==2)continue}}if(n===1){Nl(e,0),va(e,t,0,!0);break}e:{switch(l=e,r=n,r){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:va(l,t,xt,!ha);break e;case 2:ct=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(n=wi+300-ut(),10<n)){if(va(l,t,xt,!ha),Bn(l,0,!0)!==0)break e;ea=t,l.timeoutHandle=Id(Nd.bind(null,l,a,ct,Ei,qo,t,xt,Xa,jl,ha,r,"Throttled",-0,0),n);break e}Nd(l,a,ct,Ei,qo,t,xt,Xa,jl,ha,r,null,-0,0)}}break}while(!0);Ht(e)}function Nd(e,t,a,l,n,r,o,c,d,v,z,T,y,S){if(e.timeoutHandle=-1,T=t.subtreeFlags,T&8192||(T&16785408)===16785408){T={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qt},hd(t,r,T);var Y=(r&62914560)===r?wi-ut():(r&4194048)===r?vd-ut():0;if(Y=ch(T,Y),Y!==null){ea=r,e.cancelPendingCommit=Y(Md.bind(null,e,t,r,a,l,n,o,c,d,z,T,null,y,S)),va(e,r,o,!v);return}}Md(e,t,r,a,l,n,o,c,d)}function wg(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],r=n.getSnapshot;n=n.value;try{if(!mt(r(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function va(e,t,a,l){t&=~Ro,t&=~Xa,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var r=31-ft(n),o=1<<r;l[r]=-1,n&=~o}a!==0&&Dc(e,a,t)}function Ti(){return(de&6)===0?(pn(0),!1):!0}function Zo(){if(le!==null){if(ge===0)var e=le.return;else e=le,Zt=Ba=null,no(e),ml=null,$l=0,e=le;for(;e!==null;)ed(e.alternate,e),e=e.return;le=null}}function Nl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Qg(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ea=0,Zo(),Se=e,le=a=Yt(e.current,null),ie=t,ge=0,bt=null,ha=!1,yl=Ol(e,t),Ho=!1,jl=xt=Ro=Xa=pa=Ce=0,ct=gn=null,qo=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-ft(l),r=1<<n;t|=e[n],l&=~r}return It=t,Jn(),a}function wd(e,t){I=null,w.H=rn,t===fl||t===ai?(t=Ls(),ge=3):t===Vr?(t=Ls(),ge=4):ge=t===jo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,bt=t,le===null&&(Ce=1,pi(e,Nt(t,e.current)))}function zd(){var e=ht.current;return e===null?!0:(ie&4194048)===ie?Tt===null:(ie&62914560)===ie||(ie&536870912)!==0?e===Tt:!1}function Ed(){var e=w.H;return w.H=rn,e===null?rn:e}function Td(){var e=w.A;return w.A=Sg,e}function _i(){Ce=4,ha||(ie&4194048)!==ie&&ht.current!==null||(yl=!0),(pa&134217727)===0&&(Xa&134217727)===0||Se===null||va(Se,ie,xt,!1)}function Qo(e,t,a){var l=de;de|=2;var n=Ed(),r=Td();(Se!==e||ie!==t)&&(Ei=null,Nl(e,t)),t=!1;var o=Ce;e:do try{if(ge!==0&&le!==null){var c=le,d=bt;switch(ge){case 8:Zo(),o=6;break e;case 3:case 2:case 9:case 6:ht.current===null&&(t=!0);var v=ge;if(ge=0,bt=null,wl(e,c,d,v),a&&yl){o=0;break e}break;default:v=ge,ge=0,bt=null,wl(e,c,d,v)}}zg(),o=Ce;break}catch(z){wd(e,z)}while(!0);return t&&e.shellSuspendCounter++,Zt=Ba=null,de=l,w.H=n,w.A=r,le===null&&(Se=null,ie=0,Jn()),o}function zg(){for(;le!==null;)_d(le)}function Eg(e,t){var a=de;de|=2;var l=Ed(),n=Td();Se!==e||ie!==t?(Ei=null,zi=ut()+500,Nl(e,t)):yl=Ol(e,t);e:do try{if(ge!==0&&le!==null){t=le;var r=bt;t:switch(ge){case 1:ge=0,bt=null,wl(e,t,r,1);break;case 2:case 9:if(Rs(r)){ge=0,bt=null,Ad(t);break}t=function(){ge!==2&&ge!==9||Se!==e||(ge=7),Ht(e)},r.then(t,t);break e;case 3:ge=7;break e;case 4:ge=5;break e;case 7:Rs(r)?(ge=0,bt=null,Ad(t)):(ge=0,bt=null,wl(e,t,r,7));break;case 5:var o=null;switch(le.tag){case 26:o=le.memoizedState;case 5:case 27:var c=le;if(o?hf(o):c.stateNode.complete){ge=0,bt=null;var d=c.sibling;if(d!==null)le=d;else{var v=c.return;v!==null?(le=v,Ai(v)):le=null}break t}}ge=0,bt=null,wl(e,t,r,5);break;case 6:ge=0,bt=null,wl(e,t,r,6);break;case 8:Zo(),Ce=6;break e;default:throw Error(u(462))}}Tg();break}catch(z){wd(e,z)}while(!0);return Zt=Ba=null,w.H=l,w.A=n,de=a,le!==null?0:(Se=null,ie=0,Jn(),Ce)}function Tg(){for(;le!==null&&!Ff();)_d(le)}function _d(e){var t=Pu(e.alternate,e,It);e.memoizedProps=e.pendingProps,t===null?Ai(e):le=t}function Ad(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Vu(a,t,t.pendingProps,t.type,void 0,ie);break;case 11:t=Vu(a,t,t.pendingProps,t.type.render,t.ref,ie);break;case 5:no(t);default:ed(a,t),t=le=Ts(t,It),t=Pu(a,t,It)}e.memoizedProps=e.pendingProps,t===null?Ai(e):le=t}function wl(e,t,a,l){Zt=Ba=null,no(t),ml=null,$l=0;var n=t.return;try{if(hg(e,n,t,a,ie)){Ce=1,pi(e,Nt(a,e.current)),le=null;return}}catch(r){if(n!==null)throw le=n,r;Ce=1,pi(e,Nt(a,e.current)),le=null;return}t.flags&32768?(oe||l===1?e=!0:yl||(ie&536870912)!==0?e=!1:(ha=e=!0,(l===2||l===9||l===3||l===6)&&(l=ht.current,l!==null&&l.tag===13&&(l.flags|=16384))),Cd(t,e)):Ai(t)}function Ai(e){var t=e;do{if((t.flags&32768)!==0){Cd(t,ha);return}e=t.return;var a=xg(t.alternate,t,It);if(a!==null){le=a;return}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);Ce===0&&(Ce=5)}function Cd(e,t){do{var a=vg(e.alternate,e);if(a!==null){a.flags&=32767,le=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){le=e;return}le=e=a}while(e!==null);Ce=6,le=null}function Md(e,t,a,l,n,r,o,c,d){e.cancelPendingCommit=null;do Ci();while(Ye!==0);if((de&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(r=t.lanes|t.childLanes,r|=Mr,rm(e,a,r,o,c,d),e===Se&&(le=Se=null,ie=0),Sl=t,xa=e,ea=a,Lo=r,Yo=n,yd=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Mg(kn,function(){return Bd(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=w.T,w.T=null,n=R.p,R.p=2,o=de,de|=4;try{yg(e,t,a)}finally{de=o,R.p=n,w.T=l}}Ye=1,kd(),Dd(),Od()}}function kd(){if(Ye===1){Ye=0;var e=xa,t=Sl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=w.T,w.T=null;var l=R.p;R.p=2;var n=de;de|=4;try{fd(t,e);var r=ac,o=xs(e.containerInfo),c=r.focusedElem,d=r.selectionRange;if(o!==c&&c&&c.ownerDocument&&bs(c.ownerDocument.documentElement,c)){if(d!==null&&Er(c)){var v=d.start,z=d.end;if(z===void 0&&(z=v),"selectionStart"in c)c.selectionStart=v,c.selectionEnd=Math.min(z,c.value.length);else{var T=c.ownerDocument||document,y=T&&T.defaultView||window;if(y.getSelection){var S=y.getSelection(),Y=c.textContent.length,K=Math.min(d.start,Y),ye=d.end===void 0?K:Math.min(d.end,Y);!S.extend&&K>ye&&(o=ye,ye=K,K=o);var p=ps(c,K),f=ps(c,ye);if(p&&f&&(S.rangeCount!==1||S.anchorNode!==p.node||S.anchorOffset!==p.offset||S.focusNode!==f.node||S.focusOffset!==f.offset)){var x=T.createRange();x.setStart(p.node,p.offset),S.removeAllRanges(),K>ye?(S.addRange(x),S.extend(f.node,f.offset)):(x.setEnd(f.node,f.offset),S.addRange(x))}}}}for(T=[],S=c;S=S.parentNode;)S.nodeType===1&&T.push({element:S,left:S.scrollLeft,top:S.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<T.length;c++){var E=T[c];E.element.scrollLeft=E.left,E.element.scrollTop=E.top}}Gi=!!tc,ac=tc=null}finally{de=n,R.p=l,w.T=a}}e.current=t,Ye=2}}function Dd(){if(Ye===2){Ye=0;var e=xa,t=Sl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=w.T,w.T=null;var l=R.p;R.p=2;var n=de;de|=4;try{od(e,t.alternate,t)}finally{de=n,R.p=l,w.T=a}}Ye=3}}function Od(){if(Ye===4||Ye===3){Ye=0,$f();var e=xa,t=Sl,a=ea,l=yd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ye=5:(Ye=0,Sl=xa=null,Ud(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(ba=null),or(a),t=t.stateNode,dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(Dl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=w.T,n=R.p,R.p=2,w.T=null;try{for(var r=e.onRecoverableError,o=0;o<l.length;o++){var c=l[o];r(c.value,{componentStack:c.stack})}}finally{w.T=t,R.p=n}}(ea&3)!==0&&Ci(),Ht(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===Go?hn++:(hn=0,Go=e):hn=0,pn(0)}}function Ud(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Wl(t)))}function Ci(){return kd(),Dd(),Od(),Bd()}function Bd(){if(Ye!==5)return!1;var e=xa,t=Lo;Lo=0;var a=or(ea),l=w.T,n=R.p;try{R.p=32>a?32:a,w.T=null,a=Yo,Yo=null;var r=xa,o=ea;if(Ye=0,Sl=xa=null,ea=0,(de&6)!==0)throw Error(u(331));var c=de;if(de|=4,bd(r.current),gd(r,r.current,o,a),de=c,pn(0,!1),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(Dl,r)}catch{}return!0}finally{R.p=n,w.T=l,Ud(e,t)}}function Hd(e,t,a){t=Nt(a,t),t=yo(e.stateNode,t,2),e=da(e,t,2),e!==null&&(Ul(e,2),Ht(e))}function he(e,t,a){if(e.tag===3)Hd(e,e,a);else for(;t!==null;){if(t.tag===3){Hd(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ba===null||!ba.has(l))){e=Nt(a,e),a=Ru(2),l=da(t,a,2),l!==null&&(qu(a,l,t,e),Ul(l,2),Ht(l));break}}t=t.return}}function Xo(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Ng;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(Ho=!0,n.add(a),e=_g.bind(null,e,t,a),t.then(e,e))}function _g(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Se===e&&(ie&a)===a&&(Ce===4||Ce===3&&(ie&62914560)===ie&&300>ut()-wi?(de&2)===0&&Nl(e,0):Ro|=a,jl===ie&&(jl=0)),Ht(e)}function Rd(e,t){t===0&&(t=kc()),e=Da(e,t),e!==null&&(Ul(e,t),Ht(e))}function Ag(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Rd(e,a)}function Cg(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(u(314))}l!==null&&l.delete(t),Rd(e,a)}function Mg(e,t){return lr(e,t)}var Mi=null,zl=null,Vo=!1,ki=!1,Ko=!1,ya=0;function Ht(e){e!==zl&&e.next===null&&(zl===null?Mi=zl=e:zl=zl.next=e),ki=!0,Vo||(Vo=!0,Dg())}function pn(e,t){if(!Ko&&ki){Ko=!0;do for(var a=!1,l=Mi;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var r=0;else{var o=l.suspendedLanes,c=l.pingedLanes;r=(1<<31-ft(42|e)+1)-1,r&=n&~(o&~c),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,Gd(l,r))}else r=ie,r=Bn(l,l===Se?r:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(r&3)===0||Ol(l,r)||(a=!0,Gd(l,r));l=l.next}while(a);Ko=!1}}function kg(){qd()}function qd(){ki=Vo=!1;var e=0;ya!==0&&Zg()&&(e=ya);for(var t=ut(),a=null,l=Mi;l!==null;){var n=l.next,r=Ld(l,t);r===0?(l.next=null,a===null?Mi=n:a.next=n,n===null&&(zl=a)):(a=l,(e!==0||(r&3)!==0)&&(ki=!0)),l=n}Ye!==0&&Ye!==5||pn(e),ya!==0&&(ya=0)}function Ld(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var o=31-ft(r),c=1<<o,d=n[o];d===-1?((c&a)===0||(c&l)!==0)&&(n[o]=im(c,t)):d<=t&&(e.expiredLanes|=c),r&=~c}if(t=Se,a=ie,a=Bn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(ge===2||ge===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&nr(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ol(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&nr(l),or(a)){case 2:case 8:a=Cc;break;case 32:a=kn;break;case 268435456:a=Mc;break;default:a=kn}return l=Yd.bind(null,e),a=lr(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&nr(l),e.callbackPriority=2,e.callbackNode=null,2}function Yd(e,t){if(Ye!==0&&Ye!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ci()&&e.callbackNode!==a)return null;var l=ie;return l=Bn(e,e===Se?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Sd(e,l,t),Ld(e,ut()),e.callbackNode!=null&&e.callbackNode===a?Yd.bind(null,e):null)}function Gd(e,t){if(Ci())return null;Sd(e,t,!0)}function Dg(){Xg(function(){(de&6)!==0?lr(Ac,kg):qd()})}function Jo(){if(ya===0){var e=ul;e===0&&(e=Dn,Dn<<=1,(Dn&261888)===0&&(Dn=256)),ya=e}return ya}function Zd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ln(""+e)}function Qd(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Og(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var r=Zd((n[lt]||null).action),o=l.submitter;o&&(t=(t=o[lt]||null)?Zd(t.formAction):o.getAttribute("formAction"),t!==null&&(r=t,o=null));var c=new Qn("action","action",null,l,n);e.push({event:c,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ya!==0){var d=o?Qd(n,o):new FormData(n);go(a,{pending:!0,data:d,method:n.method,action:r},null,d)}}else typeof r=="function"&&(c.preventDefault(),d=o?Qd(n,o):new FormData(n),go(a,{pending:!0,data:d,method:n.method,action:r},r,d))},currentTarget:n}]})}}for(var Wo=0;Wo<Cr.length;Wo++){var Fo=Cr[Wo],Ug=Fo.toLowerCase(),Bg=Fo[0].toUpperCase()+Fo.slice(1);Mt(Ug,"on"+Bg)}Mt(js,"onAnimationEnd"),Mt(Ss,"onAnimationIteration"),Mt(Ns,"onAnimationStart"),Mt("dblclick","onDoubleClick"),Mt("focusin","onFocus"),Mt("focusout","onBlur"),Mt(Pm,"onTransitionRun"),Mt(Im,"onTransitionStart"),Mt(eg,"onTransitionCancel"),Mt(ws,"onTransitionEnd"),Fa("onMouseEnter",["mouseout","mouseover"]),Fa("onMouseLeave",["mouseout","mouseover"]),Fa("onPointerEnter",["pointerout","pointerover"]),Fa("onPointerLeave",["pointerout","pointerover"]),Aa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Aa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Aa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Aa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Aa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Aa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bn));function Xd(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var r=void 0;if(t)for(var o=l.length-1;0<=o;o--){var c=l[o],d=c.instance,v=c.currentTarget;if(c=c.listener,d!==r&&n.isPropagationStopped())break e;r=c,n.currentTarget=v;try{r(n)}catch(z){Kn(z)}n.currentTarget=null,r=d}else for(o=0;o<l.length;o++){if(c=l[o],d=c.instance,v=c.currentTarget,c=c.listener,d!==r&&n.isPropagationStopped())break e;r=c,n.currentTarget=v;try{r(n)}catch(z){Kn(z)}n.currentTarget=null,r=d}}}}function ne(e,t){var a=t[cr];a===void 0&&(a=t[cr]=new Set);var l=e+"__bubble";a.has(l)||(Vd(t,e,2,!1),a.add(l))}function $o(e,t,a){var l=0;t&&(l|=4),Vd(a,e,l,t)}var Di="_reactListening"+Math.random().toString(36).slice(2);function Po(e){if(!e[Di]){e[Di]=!0,qc.forEach(function(a){a!=="selectionchange"&&(Hg.has(a)||$o(a,!1,e),$o(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Di]||(t[Di]=!0,$o("selectionchange",!1,t))}}function Vd(e,t,a,l){switch(Sf(t)){case 2:var n=dh;break;case 8:n=fh;break;default:n=mc}a=n.bind(null,t,a,e),n=void 0,!br||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function Io(e,t,a,l,n){var r=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var o=l.tag;if(o===3||o===4){var c=l.stateNode.containerInfo;if(c===n)break;if(o===4)for(o=l.return;o!==null;){var d=o.tag;if((d===3||d===4)&&o.stateNode.containerInfo===n)return;o=o.return}for(;c!==null;){if(o=Ka(c),o===null)return;if(d=o.tag,d===5||d===6||d===26||d===27){l=r=o;continue e}c=c.parentNode}}l=l.return}$c(function(){var v=r,z=hr(a),T=[];e:{var y=zs.get(e);if(y!==void 0){var S=Qn,Y=e;switch(e){case"keypress":if(Gn(a)===0)break e;case"keydown":case"keyup":S=Cm;break;case"focusin":Y="focus",S=jr;break;case"focusout":Y="blur",S=jr;break;case"beforeblur":case"afterblur":S=jr;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=es;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=xm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Dm;break;case js:case Ss:case Ns:S=jm;break;case ws:S=Um;break;case"scroll":case"scrollend":S=pm;break;case"wheel":S=Hm;break;case"copy":case"cut":case"paste":S=Nm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=as;break;case"toggle":case"beforetoggle":S=qm}var K=(t&4)!==0,ye=!K&&(e==="scroll"||e==="scrollend"),p=K?y!==null?y+"Capture":null:y;K=[];for(var f=v,x;f!==null;){var E=f;if(x=E.stateNode,E=E.tag,E!==5&&E!==26&&E!==27||x===null||p===null||(E=Rl(f,p),E!=null&&K.push(xn(f,E,x))),ye)break;f=f.return}0<K.length&&(y=new S(y,Y,null,a,z),T.push({event:y,listeners:K}))}}if((t&7)===0){e:{if(y=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",y&&a!==gr&&(Y=a.relatedTarget||a.fromElement)&&(Ka(Y)||Y[Va]))break e;if((S||y)&&(y=z.window===z?z:(y=z.ownerDocument)?y.defaultView||y.parentWindow:window,S?(Y=a.relatedTarget||a.toElement,S=v,Y=Y?Ka(Y):null,Y!==null&&(ye=N(Y),K=Y.tag,Y!==ye||K!==5&&K!==27&&K!==6)&&(Y=null)):(S=null,Y=v),S!==Y)){if(K=es,E="onMouseLeave",p="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(K=as,E="onPointerLeave",p="onPointerEnter",f="pointer"),ye=S==null?y:Hl(S),x=Y==null?y:Hl(Y),y=new K(E,f+"leave",S,a,z),y.target=ye,y.relatedTarget=x,E=null,Ka(z)===v&&(K=new K(p,f+"enter",Y,a,z),K.target=x,K.relatedTarget=ye,E=K),ye=E,S&&Y)t:{for(K=Rg,p=S,f=Y,x=0,E=p;E;E=K(E))x++;E=0;for(var V=f;V;V=K(V))E++;for(;0<x-E;)p=K(p),x--;for(;0<E-x;)f=K(f),E--;for(;x--;){if(p===f||f!==null&&p===f.alternate){K=p;break t}p=K(p),f=K(f)}K=null}else K=null;S!==null&&Kd(T,y,S,K,!1),Y!==null&&ye!==null&&Kd(T,ye,Y,K,!0)}}e:{if(y=v?Hl(v):window,S=y.nodeName&&y.nodeName.toLowerCase(),S==="select"||S==="input"&&y.type==="file")var se=us;else if(cs(y))if(ds)se=Wm;else{se=Km;var Q=Vm}else S=y.nodeName,!S||S.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?v&&mr(v.elementType)&&(se=us):se=Jm;if(se&&(se=se(e,v))){ss(T,se,a,z);break e}Q&&Q(e,y,v),e==="focusout"&&v&&y.type==="number"&&v.memoizedProps.value!=null&&fr(y,"number",y.value)}switch(Q=v?Hl(v):window,e){case"focusin":(cs(Q)||Q.contentEditable==="true")&&(al=Q,Tr=v,Vl=null);break;case"focusout":Vl=Tr=al=null;break;case"mousedown":_r=!0;break;case"contextmenu":case"mouseup":case"dragend":_r=!1,vs(T,a,z);break;case"selectionchange":if($m)break;case"keydown":case"keyup":vs(T,a,z)}var ee;if(Nr)e:{switch(e){case"compositionstart":var re="onCompositionStart";break e;case"compositionend":re="onCompositionEnd";break e;case"compositionupdate":re="onCompositionUpdate";break e}re=void 0}else tl?rs(e,a)&&(re="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(re="onCompositionStart");re&&(ls&&a.locale!=="ko"&&(tl||re!=="onCompositionStart"?re==="onCompositionEnd"&&tl&&(ee=Pc()):(na=z,xr="value"in na?na.value:na.textContent,tl=!0)),Q=Oi(v,re),0<Q.length&&(re=new ts(re,e,null,a,z),T.push({event:re,listeners:Q}),ee?re.data=ee:(ee=os(a),ee!==null&&(re.data=ee)))),(ee=Ym?Gm(e,a):Zm(e,a))&&(re=Oi(v,"onBeforeInput"),0<re.length&&(Q=new ts("onBeforeInput","beforeinput",null,a,z),T.push({event:Q,listeners:re}),Q.data=ee)),Og(T,e,v,a,z)}Xd(T,t)})}function xn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Oi(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,r=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||r===null||(n=Rl(e,a),n!=null&&l.unshift(xn(e,n,r)),n=Rl(e,t),n!=null&&l.push(xn(e,n,r))),e.tag===3)return l;e=e.return}return[]}function Rg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Kd(e,t,a,l,n){for(var r=t._reactName,o=[];a!==null&&a!==l;){var c=a,d=c.alternate,v=c.stateNode;if(c=c.tag,d!==null&&d===l)break;c!==5&&c!==26&&c!==27||v===null||(d=v,n?(v=Rl(a,r),v!=null&&o.unshift(xn(a,v,d))):n||(v=Rl(a,r),v!=null&&o.push(xn(a,v,d)))),a=a.return}o.length!==0&&e.push({event:t,listeners:o})}var qg=/\r\n?/g,Lg=/\u0000|\uFFFD/g;function Jd(e){return(typeof e=="string"?e:""+e).replace(qg,`
`).replace(Lg,"")}function Wd(e,t){return t=Jd(t),Jd(e)===t}function ve(e,t,a,l,n,r){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Pa(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Pa(e,""+l);break;case"className":Rn(e,"class",l);break;case"tabIndex":Rn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Rn(e,a,l);break;case"style":Wc(e,l,r);break;case"data":if(t!=="object"){Rn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Ln(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&ve(e,t,"name",n.name,n,null),ve(e,t,"formEncType",n.formEncType,n,null),ve(e,t,"formMethod",n.formMethod,n,null),ve(e,t,"formTarget",n.formTarget,n,null)):(ve(e,t,"encType",n.encType,n,null),ve(e,t,"method",n.method,n,null),ve(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Ln(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=qt);break;case"onScroll":l!=null&&ne("scroll",e);break;case"onScrollEnd":l!=null&&ne("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Ln(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":ne("beforetoggle",e),ne("toggle",e),Hn(e,"popover",l);break;case"xlinkActuate":Rt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Rt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Rt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Rt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Rt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Rt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Hn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=gm.get(a)||a,Hn(e,a,l))}}function ec(e,t,a,l,n,r){switch(a){case"style":Wc(e,l,r);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"children":typeof l=="string"?Pa(e,l):(typeof l=="number"||typeof l=="bigint")&&Pa(e,""+l);break;case"onScroll":l!=null&&ne("scroll",e);break;case"onScrollEnd":l!=null&&ne("scrollend",e);break;case"onClick":l!=null&&(e.onclick=qt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Lc.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),r=e[lt]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,n),typeof l=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Hn(e,a,l)}}}function We(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ne("error",e),ne("load",e);var l=!1,n=!1,r;for(r in a)if(a.hasOwnProperty(r)){var o=a[r];if(o!=null)switch(r){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:ve(e,t,r,o,a,null)}}n&&ve(e,t,"srcSet",a.srcSet,a,null),l&&ve(e,t,"src",a.src,a,null);return;case"input":ne("invalid",e);var c=r=o=n=null,d=null,v=null;for(l in a)if(a.hasOwnProperty(l)){var z=a[l];if(z!=null)switch(l){case"name":n=z;break;case"type":o=z;break;case"checked":d=z;break;case"defaultChecked":v=z;break;case"value":r=z;break;case"defaultValue":c=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(u(137,t));break;default:ve(e,t,l,z,a,null)}}Xc(e,r,c,d,v,o,n,!1);return;case"select":ne("invalid",e),l=o=r=null;for(n in a)if(a.hasOwnProperty(n)&&(c=a[n],c!=null))switch(n){case"value":r=c;break;case"defaultValue":o=c;break;case"multiple":l=c;default:ve(e,t,n,c,a,null)}t=r,a=o,e.multiple=!!l,t!=null?$a(e,!!l,t,!1):a!=null&&$a(e,!!l,a,!0);return;case"textarea":ne("invalid",e),r=n=l=null;for(o in a)if(a.hasOwnProperty(o)&&(c=a[o],c!=null))switch(o){case"value":l=c;break;case"defaultValue":n=c;break;case"children":r=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(u(91));break;default:ve(e,t,o,c,a,null)}Kc(e,l,n,r);return;case"option":for(d in a)a.hasOwnProperty(d)&&(l=a[d],l!=null)&&(d==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":ve(e,t,d,l,a,null));return;case"dialog":ne("beforetoggle",e),ne("toggle",e),ne("cancel",e),ne("close",e);break;case"iframe":case"object":ne("load",e);break;case"video":case"audio":for(l=0;l<bn.length;l++)ne(bn[l],e);break;case"image":ne("error",e),ne("load",e);break;case"details":ne("toggle",e);break;case"embed":case"source":case"link":ne("error",e),ne("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(v in a)if(a.hasOwnProperty(v)&&(l=a[v],l!=null))switch(v){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:ve(e,t,v,l,a,null)}return;default:if(mr(t)){for(z in a)a.hasOwnProperty(z)&&(l=a[z],l!==void 0&&ec(e,t,z,l,a,void 0));return}}for(c in a)a.hasOwnProperty(c)&&(l=a[c],l!=null&&ve(e,t,c,l,a,null))}function Yg(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,r=null,o=null,c=null,d=null,v=null,z=null;for(S in a){var T=a[S];if(a.hasOwnProperty(S)&&T!=null)switch(S){case"checked":break;case"value":break;case"defaultValue":d=T;default:l.hasOwnProperty(S)||ve(e,t,S,null,l,T)}}for(var y in l){var S=l[y];if(T=a[y],l.hasOwnProperty(y)&&(S!=null||T!=null))switch(y){case"type":r=S;break;case"name":n=S;break;case"checked":v=S;break;case"defaultChecked":z=S;break;case"value":o=S;break;case"defaultValue":c=S;break;case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(u(137,t));break;default:S!==T&&ve(e,t,y,S,l,T)}}dr(e,o,c,d,v,z,r,n);return;case"select":S=o=c=y=null;for(r in a)if(d=a[r],a.hasOwnProperty(r)&&d!=null)switch(r){case"value":break;case"multiple":S=d;default:l.hasOwnProperty(r)||ve(e,t,r,null,l,d)}for(n in l)if(r=l[n],d=a[n],l.hasOwnProperty(n)&&(r!=null||d!=null))switch(n){case"value":y=r;break;case"defaultValue":c=r;break;case"multiple":o=r;default:r!==d&&ve(e,t,n,r,l,d)}t=c,a=o,l=S,y!=null?$a(e,!!a,y,!1):!!l!=!!a&&(t!=null?$a(e,!!a,t,!0):$a(e,!!a,a?[]:"",!1));return;case"textarea":S=y=null;for(c in a)if(n=a[c],a.hasOwnProperty(c)&&n!=null&&!l.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:ve(e,t,c,null,l,n)}for(o in l)if(n=l[o],r=a[o],l.hasOwnProperty(o)&&(n!=null||r!=null))switch(o){case"value":y=n;break;case"defaultValue":S=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(u(91));break;default:n!==r&&ve(e,t,o,n,l,r)}Vc(e,y,S);return;case"option":for(var Y in a)y=a[Y],a.hasOwnProperty(Y)&&y!=null&&!l.hasOwnProperty(Y)&&(Y==="selected"?e.selected=!1:ve(e,t,Y,null,l,y));for(d in l)y=l[d],S=a[d],l.hasOwnProperty(d)&&y!==S&&(y!=null||S!=null)&&(d==="selected"?e.selected=y&&typeof y!="function"&&typeof y!="symbol":ve(e,t,d,y,l,S));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var K in a)y=a[K],a.hasOwnProperty(K)&&y!=null&&!l.hasOwnProperty(K)&&ve(e,t,K,null,l,y);for(v in l)if(y=l[v],S=a[v],l.hasOwnProperty(v)&&y!==S&&(y!=null||S!=null))switch(v){case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(u(137,t));break;default:ve(e,t,v,y,l,S)}return;default:if(mr(t)){for(var ye in a)y=a[ye],a.hasOwnProperty(ye)&&y!==void 0&&!l.hasOwnProperty(ye)&&ec(e,t,ye,void 0,l,y);for(z in l)y=l[z],S=a[z],!l.hasOwnProperty(z)||y===S||y===void 0&&S===void 0||ec(e,t,z,y,l,S);return}}for(var p in a)y=a[p],a.hasOwnProperty(p)&&y!=null&&!l.hasOwnProperty(p)&&ve(e,t,p,null,l,y);for(T in l)y=l[T],S=a[T],!l.hasOwnProperty(T)||y===S||y==null&&S==null||ve(e,t,T,y,l,S)}function Fd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Gg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],r=n.transferSize,o=n.initiatorType,c=n.duration;if(r&&c&&Fd(o)){for(o=0,c=n.responseEnd,l+=1;l<a.length;l++){var d=a[l],v=d.startTime;if(v>c)break;var z=d.transferSize,T=d.initiatorType;z&&Fd(T)&&(d=d.responseEnd,o+=z*(d<c?1:(c-v)/(d-v)))}if(--l,t+=8*(r+o)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var tc=null,ac=null;function Ui(e){return e.nodeType===9?e:e.ownerDocument}function $d(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Pd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function lc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var nc=null;function Zg(){var e=window.event;return e&&e.type==="popstate"?e===nc?!1:(nc=e,!0):(nc=null,!1)}var Id=typeof setTimeout=="function"?setTimeout:void 0,Qg=typeof clearTimeout=="function"?clearTimeout:void 0,ef=typeof Promise=="function"?Promise:void 0,Xg=typeof queueMicrotask=="function"?queueMicrotask:typeof ef<"u"?function(e){return ef.resolve(null).then(e).catch(Vg)}:Id;function Vg(e){setTimeout(function(){throw e})}function ja(e){return e==="head"}function tf(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),Al(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")vn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,vn(a);for(var r=a.firstChild;r;){var o=r.nextSibling,c=r.nodeName;r[Bl]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=o}}else a==="body"&&vn(e.ownerDocument.body);a=n}while(a);Al(t)}function af(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function ic(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ic(a),sr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Kg(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Bl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=_t(e.nextSibling),e===null)break}return null}function Jg(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=_t(e.nextSibling),e===null))return null;return e}function lf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=_t(e.nextSibling),e===null))return null;return e}function rc(e){return e.data==="$?"||e.data==="$~"}function oc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Wg(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function _t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var cc=null;function nf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return _t(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function rf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function of(e,t,a){switch(t=Ui(a),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function vn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);sr(e)}var At=new Map,cf=new Set;function Bi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ta=R.d;R.d={f:Fg,r:$g,D:Pg,C:Ig,L:eh,m:th,X:lh,S:ah,M:nh};function Fg(){var e=ta.f(),t=Ti();return e||t}function $g(e){var t=Ja(e);t!==null&&t.tag===5&&t.type==="form"?wu(t):ta.r(e)}var El=typeof document>"u"?null:document;function sf(e,t,a){var l=El;if(l&&typeof t=="string"&&t){var n=jt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),cf.has(n)||(cf.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),We(t,"link",e),Ge(t),l.head.appendChild(t)))}}function Pg(e){ta.D(e),sf("dns-prefetch",e,null)}function Ig(e,t){ta.C(e,t),sf("preconnect",e,t)}function eh(e,t,a){ta.L(e,t,a);var l=El;if(l&&e&&t){var n='link[rel="preload"][as="'+jt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+jt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+jt(a.imageSizes)+'"]')):n+='[href="'+jt(e)+'"]';var r=n;switch(t){case"style":r=Tl(e);break;case"script":r=_l(e)}At.has(r)||(e=M({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),At.set(r,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(yn(r))||t==="script"&&l.querySelector(jn(r))||(t=l.createElement("link"),We(t,"link",e),Ge(t),l.head.appendChild(t)))}}function th(e,t){ta.m(e,t);var a=El;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+jt(l)+'"][href="'+jt(e)+'"]',r=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=_l(e)}if(!At.has(r)&&(e=M({rel:"modulepreload",href:e},t),At.set(r,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(jn(r)))return}l=a.createElement("link"),We(l,"link",e),Ge(l),a.head.appendChild(l)}}}function ah(e,t,a){ta.S(e,t,a);var l=El;if(l&&e){var n=Wa(l).hoistableStyles,r=Tl(e);t=t||"default";var o=n.get(r);if(!o){var c={loading:0,preload:null};if(o=l.querySelector(yn(r)))c.loading=5;else{e=M({rel:"stylesheet",href:e,"data-precedence":t},a),(a=At.get(r))&&sc(e,a);var d=o=l.createElement("link");Ge(d),We(d,"link",e),d._p=new Promise(function(v,z){d.onload=v,d.onerror=z}),d.addEventListener("load",function(){c.loading|=1}),d.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Hi(o,t,l)}o={type:"stylesheet",instance:o,count:1,state:c},n.set(r,o)}}}function lh(e,t){ta.X(e,t);var a=El;if(a&&e){var l=Wa(a).hoistableScripts,n=_l(e),r=l.get(n);r||(r=a.querySelector(jn(n)),r||(e=M({src:e,async:!0},t),(t=At.get(n))&&uc(e,t),r=a.createElement("script"),Ge(r),We(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},l.set(n,r))}}function nh(e,t){ta.M(e,t);var a=El;if(a&&e){var l=Wa(a).hoistableScripts,n=_l(e),r=l.get(n);r||(r=a.querySelector(jn(n)),r||(e=M({src:e,async:!0,type:"module"},t),(t=At.get(n))&&uc(e,t),r=a.createElement("script"),Ge(r),We(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},l.set(n,r))}}function uf(e,t,a,l){var n=(n=ae.current)?Bi(n):null;if(!n)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Tl(a.href),a=Wa(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Tl(a.href);var r=Wa(n).hoistableStyles,o=r.get(e);if(o||(n=n.ownerDocument||n,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,o),(r=n.querySelector(yn(e)))&&!r._p&&(o.instance=r,o.state.loading=5),At.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},At.set(e,a),r||ih(n,e,a,o.state))),t&&l===null)throw Error(u(528,""));return o}if(t&&l!==null)throw Error(u(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=_l(a),a=Wa(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Tl(e){return'href="'+jt(e)+'"'}function yn(e){return'link[rel="stylesheet"]['+e+"]"}function df(e){return M({},e,{"data-precedence":e.precedence,precedence:null})}function ih(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),We(t,"link",a),Ge(t),e.head.appendChild(t))}function _l(e){return'[src="'+jt(e)+'"]'}function jn(e){return"script[async]"+e}function ff(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+jt(a.href)+'"]');if(l)return t.instance=l,Ge(l),l;var n=M({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ge(l),We(l,"style",n),Hi(l,a.precedence,e),t.instance=l;case"stylesheet":n=Tl(a.href);var r=e.querySelector(yn(n));if(r)return t.state.loading|=4,t.instance=r,Ge(r),r;l=df(a),(n=At.get(n))&&sc(l,n),r=(e.ownerDocument||e).createElement("link"),Ge(r);var o=r;return o._p=new Promise(function(c,d){o.onload=c,o.onerror=d}),We(r,"link",l),t.state.loading|=4,Hi(r,a.precedence,e),t.instance=r;case"script":return r=_l(a.src),(n=e.querySelector(jn(r)))?(t.instance=n,Ge(n),n):(l=a,(n=At.get(r))&&(l=M({},a),uc(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ge(n),We(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Hi(l,a.precedence,e));return t.instance}function Hi(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,r=n,o=0;o<l.length;o++){var c=l[o];if(c.dataset.precedence===t)r=c;else if(r!==n)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function sc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function uc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ri=null;function mf(e,t,a){if(Ri===null){var l=new Map,n=Ri=new Map;n.set(a,l)}else n=Ri,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var r=a[n];if(!(r[Bl]||r[Xe]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var o=r.getAttribute(t)||"";o=e+o;var c=l.get(o);c?c.push(r):l.set(o,[r])}}return l}function gf(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function rh(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function hf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function oh(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Tl(l.href),r=t.querySelector(yn(n));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=qi.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=r,Ge(r);return}r=t.ownerDocument||t,l=df(l),(n=At.get(n))&&sc(l,n),r=r.createElement("link"),Ge(r);var o=r;o._p=new Promise(function(c,d){o.onload=c,o.onerror=d}),We(r,"link",l),a.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=qi.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var dc=0;function ch(e,t){return e.stylesheets&&e.count===0&&Yi(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&Yi(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&dc===0&&(dc=62500*Gg());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Yi(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>dc?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function qi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Yi(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Li=null;function Yi(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Li=new Map,t.forEach(sh,e),Li=null,qi.call(e))}function sh(e,t){if(!(t.state.loading&4)){var a=Li.get(e);if(a)var l=a.get(null);else{a=new Map,Li.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<n.length;r++){var o=n[r];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),l=o)}l&&a.set(null,l)}n=t.instance,o=n.getAttribute("data-precedence"),r=a.get(o)||l,r===l&&a.set(null,n),a.set(o,n),this.count++,l=qi.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),r?r.parentNode.insertBefore(n,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Sn={$$typeof:ce,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function uh(e,t,a,l,n,r,o,c,d){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ir(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ir(0),this.hiddenUpdates=ir(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=r,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=d,this.incompleteTransitions=new Map}function pf(e,t,a,l,n,r,o,c,d,v,z,T){return e=new uh(e,t,a,o,d,v,z,T,c),t=1,r===!0&&(t|=24),r=gt(3,null,null,t),e.current=r,r.stateNode=e,t=Zr(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:l,isDehydrated:a,cache:t},Kr(r),e}function bf(e){return e?(e=il,e):il}function xf(e,t,a,l,n,r){n=bf(n),l.context===null?l.context=n:l.pendingContext=n,l=ua(t),l.payload={element:a},r=r===void 0?null:r,r!==null&&(l.callback=r),a=da(e,l,t),a!==null&&(st(a,e,t),Il(a,e,t))}function vf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function fc(e,t){vf(e,t),(e=e.alternate)&&vf(e,t)}function yf(e){if(e.tag===13||e.tag===31){var t=Da(e,67108864);t!==null&&st(t,e,67108864),fc(e,67108864)}}function jf(e){if(e.tag===13||e.tag===31){var t=vt();t=rr(t);var a=Da(e,t);a!==null&&st(a,e,t),fc(e,t)}}var Gi=!0;function dh(e,t,a,l){var n=w.T;w.T=null;var r=R.p;try{R.p=2,mc(e,t,a,l)}finally{R.p=r,w.T=n}}function fh(e,t,a,l){var n=w.T;w.T=null;var r=R.p;try{R.p=8,mc(e,t,a,l)}finally{R.p=r,w.T=n}}function mc(e,t,a,l){if(Gi){var n=gc(l);if(n===null)Io(e,t,l,Zi,a),Nf(e,l);else if(gh(n,e,t,a,l))l.stopPropagation();else if(Nf(e,l),t&4&&-1<mh.indexOf(e)){for(;n!==null;){var r=Ja(n);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var o=_a(r.pendingLanes);if(o!==0){var c=r;for(c.pendingLanes|=2,c.entangledLanes|=2;o;){var d=1<<31-ft(o);c.entanglements[1]|=d,o&=~d}Ht(r),(de&6)===0&&(zi=ut()+500,pn(0))}}break;case 31:case 13:c=Da(r,2),c!==null&&st(c,r,2),Ti(),fc(r,2)}if(r=gc(l),r===null&&Io(e,t,l,Zi,a),r===n)break;n=r}n!==null&&l.stopPropagation()}else Io(e,t,l,null,a)}}function gc(e){return e=hr(e),hc(e)}var Zi=null;function hc(e){if(Zi=null,e=Ka(e),e!==null){var t=N(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=O(t),e!==null)return e;e=null}else if(a===31){if(e=B(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Zi=e,null}function Sf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Pf()){case Ac:return 2;case Cc:return 8;case kn:case If:return 32;case Mc:return 268435456;default:return 32}default:return 32}}var pc=!1,Sa=null,Na=null,wa=null,Nn=new Map,wn=new Map,za=[],mh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Nf(e,t){switch(e){case"focusin":case"focusout":Sa=null;break;case"dragenter":case"dragleave":Na=null;break;case"mouseover":case"mouseout":wa=null;break;case"pointerover":case"pointerout":Nn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":wn.delete(t.pointerId)}}function zn(e,t,a,l,n,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:r,targetContainers:[n]},t!==null&&(t=Ja(t),t!==null&&yf(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function gh(e,t,a,l,n){switch(t){case"focusin":return Sa=zn(Sa,e,t,a,l,n),!0;case"dragenter":return Na=zn(Na,e,t,a,l,n),!0;case"mouseover":return wa=zn(wa,e,t,a,l,n),!0;case"pointerover":var r=n.pointerId;return Nn.set(r,zn(Nn.get(r)||null,e,t,a,l,n)),!0;case"gotpointercapture":return r=n.pointerId,wn.set(r,zn(wn.get(r)||null,e,t,a,l,n)),!0}return!1}function wf(e){var t=Ka(e.target);if(t!==null){var a=N(t);if(a!==null){if(t=a.tag,t===13){if(t=O(a),t!==null){e.blockedOn=t,Hc(e.priority,function(){jf(a)});return}}else if(t===31){if(t=B(a),t!==null){e.blockedOn=t,Hc(e.priority,function(){jf(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=gc(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);gr=l,a.target.dispatchEvent(l),gr=null}else return t=Ja(a),t!==null&&yf(t),e.blockedOn=a,!1;t.shift()}return!0}function zf(e,t,a){Qi(e)&&a.delete(t)}function hh(){pc=!1,Sa!==null&&Qi(Sa)&&(Sa=null),Na!==null&&Qi(Na)&&(Na=null),wa!==null&&Qi(wa)&&(wa=null),Nn.forEach(zf),wn.forEach(zf)}function Xi(e,t){e.blockedOn===t&&(e.blockedOn=null,pc||(pc=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,hh)))}var Vi=null;function Ef(e){Vi!==e&&(Vi=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Vi===e&&(Vi=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(hc(l||a)===null)continue;break}var r=Ja(a);r!==null&&(e.splice(t,3),t-=3,go(r,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Al(e){function t(d){return Xi(d,e)}Sa!==null&&Xi(Sa,e),Na!==null&&Xi(Na,e),wa!==null&&Xi(wa,e),Nn.forEach(t),wn.forEach(t);for(var a=0;a<za.length;a++){var l=za[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<za.length&&(a=za[0],a.blockedOn===null);)wf(a),a.blockedOn===null&&za.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],r=a[l+1],o=n[lt]||null;if(typeof r=="function")o||Ef(a);else if(o){var c=null;if(r&&r.hasAttribute("formAction")){if(n=r,o=r[lt]||null)c=o.formAction;else if(hc(n)!==null)continue}else c=o.action;typeof c=="function"?a[l+1]=c:(a.splice(l,3),l-=3),Ef(a)}}}function Tf(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(o){return n=o})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function bc(e){this._internalRoot=e}Ki.prototype.render=bc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var a=t.current,l=vt();xf(a,l,e,t,null,null)},Ki.prototype.unmount=bc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;xf(e.current,2,null,e,null,null),Ti(),t[Va]=null}};function Ki(e){this._internalRoot=e}Ki.prototype.unstable_scheduleHydration=function(e){if(e){var t=Bc();e={blockedOn:null,target:e,priority:t};for(var a=0;a<za.length&&t!==0&&t<za[a].priority;a++);za.splice(a,0,e),a===0&&wf(e)}};var _f=j.version;if(_f!=="19.2.4")throw Error(u(527,_f,"19.2.4"));R.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=b(t),e=e!==null?C(e):null,e=e===null?null:e.stateNode,e};var ph={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:w,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ji=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ji.isDisabled&&Ji.supportsFiber)try{Dl=Ji.inject(ph),dt=Ji}catch{}}return Tn.createRoot=function(e,t){if(!h(e))throw Error(u(299));var a=!1,l="",n=Ou,r=Uu,o=Bu;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=pf(e,1,!1,null,null,a,l,null,n,r,o,Tf),e[Va]=t.current,Po(e),new bc(t)},Tn.hydrateRoot=function(e,t,a){if(!h(e))throw Error(u(299));var l=!1,n="",r=Ou,o=Uu,c=Bu,d=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(c=a.onRecoverableError),a.formState!==void 0&&(d=a.formState)),t=pf(e,1,!0,t,a??null,l,n,d,r,o,c,Tf),t.context=bf(null),a=t.current,l=vt(),l=rr(l),n=ua(l),n.callback=null,da(a,n,l),a=l,t.current.lanes=a,Ul(t,a),Ht(t),e[Va]=t.current,Po(e),new Ki(t)},Tn.version="19.2.4",Tn}var Rf;function Th(){if(Rf)return yc.exports;Rf=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(j){console.error(j)}}return s(),yc.exports=Eh(),yc.exports}var _h=Th();const Gf=D.createContext(),Ah=({children:s})=>{const[j,g]=D.useState(window.location.pathname);D.useEffect(()=>{const h=()=>{g(window.location.pathname)};return window.addEventListener("popstate",h),()=>window.removeEventListener("popstate",h)},[]);const u=h=>{if(typeof h=="number"){window.history.go(h);return}window.history.pushState({},"",h),g(h),window.scrollTo(0,0)};return i.jsx(Gf.Provider,{value:{currentPath:j,navigate:u},children:s})},tt=()=>D.useContext(Gf),_n=({to:s,children:j,className:g,onClick:u})=>{const{navigate:h}=tt(),N=O=>{O.preventDefault(),u&&u(O),h(s)};return i.jsx("a",{href:s,className:g,onClick:N,children:j})},Ch="https://zervo.mycartly.in",zc=Ch.replace(/\/$/,"");function An(s){if(s==null||s==="")return zc;const j=typeof s=="string"&&s.startsWith("/")?s:`/${s}`;return`${zc}${j}`}function Ct(s){if(s==null||s===""||typeof s!="string")return"";if(s.startsWith("http://")||s.startsWith("https://"))return s;const j=s.startsWith("/")?s:`/${s}`;return`${zc}${j}`}function Pi(){return localStorage.getItem("admin_token")}function Mh(s=!0){const j={"Content-Type":"application/json"};if(s){const g=Pi();g&&(j.Authorization=`Bearer ${g}`)}return j}async function kh(s,j){const g=await fetch(An("/api/admin/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:s,password:j})}),u=await g.json().catch(()=>({}));if(!g.ok)throw new Error(u.error||"Login failed");return u}async function fe(s,j,g=null,u=!0){const h={method:s,headers:Mh(u)};g&&s!=="GET"&&(h.body=typeof g=="string"?g:JSON.stringify(g));const N=await fetch(An(j),h),O=await N.json().catch(()=>({}));if(!N.ok)throw new Error(O.error||N.statusText);return O}async function Dh(){return fe("GET","/api/public/services",null,!1)}async function Oh(){return fe("GET","/api/public/banners",null,!1)}async function Uh(){return fe("GET","/api/public/top-offer-bar",null,!1)}async function Bh(){return fe("GET","/api/public/theme",null,!1)}async function Zf(s){return fe("GET",`/api/public/policy/${s}`,null,!1)}async function Hh(){return fe("GET","/api/public/blogs",null,!1)}async function Rh(s){return fe("GET",`/api/public/blogs/${s}`,null,!1)}const Ee={categories:{list:()=>fe("GET","/api/admin/categories"),create:s=>fe("POST","/api/admin/categories",s),update:(s,j)=>fe("PUT",`/api/admin/categories/${s}`,j),delete:s=>fe("DELETE",`/api/admin/categories/${s}`),subServices:s=>fe("GET",`/api/admin/categories/${s}/sub-services`),createSub:(s,j)=>fe("POST",`/api/admin/categories/${s}/sub-services`,j)},subServices:{update:(s,j)=>fe("PUT",`/api/admin/sub-services/${s}`,j),delete:s=>fe("DELETE",`/api/admin/sub-services/${s}`)},uploadImage:s=>{const j=Pi();return fetch(An("/api/admin/upload-image"),{method:"POST",headers:j?{Authorization:`Bearer ${j}`}:{},body:s}).then(g=>g.json()).then(g=>{if(g.error)throw new Error(g.error);return g})},banners:{list:()=>fe("GET","/api/admin/banners"),upload:s=>{const j=Pi();return fetch(An("/api/admin/banners"),{method:"POST",headers:j?{Authorization:`Bearer ${j}`}:{},body:s}).then(g=>g.json()).then(g=>{if(g.error)throw new Error(g.error);return g})},delete:s=>fe("DELETE",`/api/admin/banners/${s}`)},topOfferBar:{list:()=>fe("GET","/api/admin/top-offer-bar"),create:s=>fe("POST","/api/admin/top-offer-bar",s),update:(s,j)=>fe("PUT",`/api/admin/top-offer-bar/${s}`,j),delete:s=>fe("DELETE",`/api/admin/top-offer-bar/${s}`)},theme:{get:()=>fe("GET","/api/admin/theme"),update:s=>fe("PUT","/api/admin/theme",s)},policyPages:{list:()=>fe("GET","/api/admin/policy-pages"),create:s=>fe("POST","/api/admin/policy-pages",s),update:(s,j)=>fe("PUT",`/api/admin/policy-pages/${s}`,j),delete:s=>fe("DELETE",`/api/admin/policy-pages/${s}`)},blogs:{list:()=>fe("GET","/api/admin/blogs"),create:s=>fe("POST","/api/admin/blogs",s),update:(s,j)=>fe("PUT",`/api/admin/blogs/${s}`,j),delete:s=>fe("DELETE",`/api/admin/blogs/${s}`),uploadImage:s=>{const j=Pi();return fetch(An("/api/admin/blogs/upload-image"),{method:"POST",headers:j?{Authorization:`Bearer ${j}`}:{},body:s}).then(g=>g.json()).then(g=>{if(g.error)throw new Error(g.error);return g})}}},Qf={painting:{id:"painting",title:"Painting",description:"Bring life, colour, and elegance to your space.",rating:4.9,reviewsCount:"1500+",heroImage:"/hero service (2).png",expertImage:"/hero service (2).png",about:{title:"🎨 Painting – Our Professional Process",description:`At **Zervo Company**, we follow a structured and professional painting process to ensure high-quality results, timely delivery, and complete customer satisfaction.

1️⃣ **Site Inspection & Consultation**
We begin with a detailed site visit to understand your space, surface condition, colour preferences, and design expectations. Our experts guide you in selecting the right paint type, finish, and shades based on lighting and usage.

2️⃣ **Surface Preparation**
A perfect finish starts with proper preparation. We clean the surfaces thoroughly, remove dust, grease, and old paint flakes, and repair cracks or dents using putty and primer to create a smooth, even base.

3️⃣ **Protection & Masking**
Furniture, floors, fittings, and fixtures are carefully covered and masked to prevent paint spills or stains. This ensures a clean and damage-free painting process.

4️⃣ **Primer Application**
High-quality primer is applied to enhance paint adhesion, improve durability, and ensure uniform colour coverage. This step is crucial for a long-lasting and professional finish.

5️⃣ **Precision Painting**
Our skilled painters apply premium paints using advanced tools and techniques. Whether it’s smooth finishes, textures, or designer patterns, we focus on even coats, clean edges, and flawless detailing.

6️⃣ **Quality Inspection & Touch-Ups**
After completion, our team conducts a thorough quality check. Minor touch-ups are done where required to ensure a perfect final look that meets our standards and your expectations.

7️⃣ **Final Cleanup & Handover**
We clean the site completely, remove all coverings, and hand over a fresh, beautifully painted space—ready for you to enjoy.

✨ **Result You Can Expect**
✔ Elegant finish
✔ Long-lasting quality
✔ Zero mess delivery
✔ On-time completion

**Zervo Company — Creating an Aura That Speaks.**`},subServices:[{title:"Full Home Painting",description:"Complete house makeover with premium finishes.",price:"4999",rating:4.9,image:"/hero service (2).png",isMostBooked:!0},{title:"Textured Wall Painting",description:"Designer wall patterns and effects.",price:"999",rating:4.8,image:"/hero service (2).png",isMostBooked:!0},{title:"Exterior Painting",description:"Weather-resistant solutions for your home's exterior.",price:"5999",rating:4.7,image:"/hero service (2).png"}],reviews:[]},"water-proofing":{id:"water-proofing",title:"Water proofing",description:"Stop leakage and dampness permanently.",rating:4.8,reviewsCount:"1200+",heroImage:"/plumber.jpeg",expertImage:"/plumber.jpeg",about:{title:"Expert Water Proofing Solutions",description:"Our professional water proofing services ensure your home stays dry and protected from seepage, leaks, and dampness. We use advanced materials and techniques for long-lasting results."},subServices:[{title:"Roof Water Proofing",description:"Terrace leakage solution.",price:"1999",rating:4.8,image:"/plumber.jpeg"},{title:"Bathroom Water Proofing",description:"Stop floor seepage.",price:"999",rating:4.7,image:"/plumber.jpeg"}],reviews:[]},"tile-grouting":{id:"tile-grouting",title:"Tile grouting",description:"Epoxy and cement-based tile gap filling.",rating:4.7,reviewsCount:"800+",heroImage:"/plumber.jpeg",expertImage:"/plumber.jpeg",about:{title:"Seamless Tile Grouting",description:"Enhance the look and durability of your tiles with our expert grouting services. We provide both epoxy and cement-based solutions for stain-resistant and waterproof gaps."},subServices:[{title:"Epoxy Grouting",description:"Stain-resistant and highly durable tile gaps.",price:"499",rating:4.8,image:"/plumber.jpeg"},{title:"Tile Repair & Grouting",description:"Fix loose tiles and fill gaps perfectly.",price:"299",rating:4.6,image:"/plumber.jpeg"}],reviews:[]},"wall-modelling":{id:"wall-modelling",title:"Wall modelling",description:"Luxury PVC and wooden wall paneling.",rating:4.9,reviewsCount:"1100+",heroImage:"/home cleaning.jpg",expertImage:"/home cleaning.jpg",about:{title:"Premium Wall Paneling & Modelling",description:"Transform your walls with our luxury modelling services. From PVC panels to premium wooden wall modelling, we create sophisticated interiors that stand out."},subServices:[{title:"PVC Wall Paneling",description:"Durable, stylish, and moisture-resistant.",price:"1499",rating:4.8,image:"/home cleaning.jpg"},{title:"Wooden Wall Modelling",description:"Premium wooden finishes for a luxury look.",price:"2999",rating:4.9,image:"/home cleaning.jpg"}],reviews:[]},"wall-paper":{id:"wall-paper",title:"Wall paper",description:"3D and custom fabric wallpaper installation.",rating:4.8,reviewsCount:"950+",heroImage:"/home cleaning.jpg",expertImage:"/home cleaning.jpg",about:{title:"Custom & 3D Wallpaper Installation",description:"Express your style with our wide range of wallpaper solutions. We specialize in 3D depth effects and custom fabric wallpapers for every room."},subServices:[{title:"3D Wallpaper",description:"Lifelike depth and stunning visual effects.",price:"699",rating:4.8,image:"/home cleaning.jpg"},{title:"Custom Print Wallpaper",description:"Personalized designs to match your decor.",price:"899",rating:4.7,image:"/home cleaning.jpg"}],reviews:[]},"wood-polish":{id:"wood-polish",title:"Wood polish",description:"PU and Melamyne polish for furniture.",rating:4.7,reviewsCount:"850+",heroImage:"/home cleaning.jpg",expertImage:"/home cleaning.jpg",about:{title:"Superior Wood Polishing",description:"Protect and shine your wooden furniture with our premium polishing services. We offer high-gloss PU and classic Melamyne finishes."},subServices:[{title:"PU Polish",description:"High-gloss luxury finish with durability.",price:"1299",rating:4.9,image:"/home cleaning.jpg"},{title:"Furniture Melamyne",description:"Classic protection and sheen for wood.",price:"799",rating:4.6,image:"/home cleaning.jpg"}],reviews:[]},"false-ceiling":{id:"false-ceiling",title:"False ceiling",description:"Modern Gypsum and POP ceiling designs.",rating:4.9,reviewsCount:"1300+",heroImage:"/home cleaning.jpg",expertImage:"/home cleaning.jpg",about:{title:"Innovative False Ceiling Designs",description:"Elevate your space with our modern false ceiling solutions. We specialize in Gypsum and POP designs that combine aesthetics with lighting integration."},subServices:[{title:"Gypsum False Ceiling",description:"Smooth modern look for homes and offices.",price:"1999",rating:4.9,image:"/home cleaning.jpg"},{title:"POP Ceiling Design",description:"Classic and intricate ceiling patterns.",price:"1499",rating:4.7,image:"/home cleaning.jpg"}],reviews:[]}},Xf=D.createContext({data:Qf,loading:!1});function qh({children:s}){const[j,g]=D.useState(Qf),[u,h]=D.useState(!0);return D.useEffect(()=>{Dh().then(N=>{N&&typeof N=="object"&&Object.keys(N).length>0&&g(N)}).catch(()=>{}).finally(()=>h(!1))},[]),i.jsx(Xf.Provider,{value:{data:j,loading:u},children:s})}function Cl(){return D.useContext(Xf)}const Cn=()=>{const[s,j]=D.useState(!1),[g,u]=D.useState(!1),{navigate:h}=tt(),{data:N}=Cl(),O=D.useMemo(()=>Object.entries(N||{}).filter(([b,C])=>b!=="default"&&Array.isArray(C?.subServices)&&C.subServices.length>0).map(([b,C])=>({id:b,title:C.title||b,subtitle:(C.description||"").slice(0,30)+(C.description&&C.description.length>30?"…":"")})),[N]);D.useEffect(()=>{const b=C=>{const M=document.querySelector(".navbar-wrapper");M&&!M.contains(C.target)&&j(!1)};return document.addEventListener("click",b),()=>document.removeEventListener("click",b)},[]);const B=b=>{h(`/#${b}`),j(!1),u(!1);const C=document.getElementById(b);C&&C.scrollIntoView({behavior:"smooth"})},_=()=>{u(!g)};return D.useEffect(()=>(g?document.body.style.overflow="hidden":document.body.style.overflow="auto",()=>{document.body.style.overflow="auto"}),[g]),i.jsxs("nav",{className:"navbar-wrapper",children:[i.jsxs("div",{className:"navbar-inner container",children:[i.jsx(_n,{to:"/",className:"navbar-logo",children:i.jsx("span",{className:"brand-name",children:"Zervo Company"})}),i.jsxs("div",{className:"navbar-links desktop-only",children:[i.jsxs("div",{className:"nav-item-dropdown",children:[i.jsx("button",{className:`nav-link dropdown-toggle ${s?"active":""}`,onClick:()=>j(!s),children:"Services"}),s&&i.jsx("div",{className:"services-dropdown",children:i.jsx("ul",{children:O.map((b,C)=>i.jsxs("li",{className:"dropdown-item",onClick:()=>B(b.id),children:[i.jsx("div",{className:"item-title",children:b.title}),i.jsx("div",{className:"item-subtitle",children:b.subtitle})]},C))})})]}),i.jsx(_n,{to:"/blog",className:"nav-link",children:"Blogs"}),i.jsx(_n,{to:"/",className:"nav-link",children:"App"})]}),i.jsx("div",{className:"navbar-actions desktop-only",children:i.jsxs("button",{className:"btn-primary",onClick:()=>window.open(`https://wa.me/918354067979?text=${encodeURIComponent("Hello Zervo Company, I want to become a service provider.")}`,"_blank"),children:[i.jsx("span",{className:"icon",children:"Store"}),"Become Service Provider"]})}),i.jsx("button",{className:"mobile-menu-btn",onClick:_,children:g?i.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("path",{d:"M18 6L6 18",stroke:"#1f2937",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M6 6L18 18",stroke:"#1f2937",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}):i.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("path",{d:"M4 6H20",stroke:"#1f2937",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M4 12H20",stroke:"#1f2937",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M4 18H20",stroke:"#1f2937",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}),g&&i.jsx("div",{className:"mobile-menu-overlay",children:i.jsx("div",{className:"mobile-menu-content",children:i.jsxs("div",{className:"mobile-nav-links",children:[i.jsxs("div",{className:"mobile-nav-item",children:[i.jsx("span",{className:"mobile-nav-header",children:"Services"}),i.jsx("div",{className:"mobile-services-grid",children:O.map((b,C)=>i.jsx("div",{className:"mobile-service-item",onClick:()=>B(b.id),children:b.title},C))})]}),i.jsx(_n,{to:"/blog",className:"mobile-nav-link",onClick:()=>u(!1),children:"Blogs"}),i.jsx(_n,{to:"/",className:"mobile-nav-link",onClick:()=>u(!1),children:"App"}),i.jsx("div",{className:"mobile-nav-item",children:i.jsx("button",{className:"btn-primary width-full",onClick:()=>{window.open(`https://wa.me/918354067979?text=${encodeURIComponent("Hello Zervo Company, I want to become a service provider.")}`,"_blank"),u(!1)},children:"Become Service Provider"})})]})})})]}),i.jsx("style",{children:`
        .navbar-wrapper {
          width: 100%;
          background-color: #ffffff;
          box-shadow: var(--shadow-sm);
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: var(--spacing-md);
          padding-bottom: var(--spacing-md);
        }

        .navbar-logo .brand-name {
          font-size: 1.5rem;
          font-weight: 800;
          color: #000;
          letter-spacing: -0.02em;
          text-transform: none;
        }

        .navbar-logo {
          text-decoration: none;
        }

        .navbar-links {
          display: flex;
          gap: var(--spacing-xl);
          font-weight: 500;
          font-size: 1rem;
          color: var(--color-black);
          align-items: center;
        }

        .nav-link {
          color: var(--color-black);
          text-decoration: none;
          transition: color 0.2s;
          background: none;
          border: none;
          cursor: pointer;
          font-family: inherit;
          font-size: inherit;
          font-weight: inherit;
          padding: 0;
        }

        .nav-link:hover, .nav-link.active {
          color: var(--color-secondary);
        }

        .nav-item-dropdown {
          position: relative;
        }

        .services-dropdown {
          position: absolute;
          top: 150%;
          left: -20px;
          background-color: #ffffff;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
          border-radius: 12px;
          border: 1px solid #f3f4f6;
          width: 300px;
          max-height: 450px;
          overflow-y: auto;
          z-index: 1001;
          padding: 0.75rem 0;
        }

        .services-dropdown::before {
            content: '';
            position: absolute;
            top: -6px;
            left: 40px;
            width: 12px;
            height: 12px;
            background-color: #ffffff;
            transform: rotate(45deg);
            border-left: 1px solid #f3f4f6;
            border-top: 1px solid #f3f4f6;
        }

        .services-dropdown::-webkit-scrollbar {
            width: 6px;
        }
        .services-dropdown::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 4px;
        }
        .services-dropdown::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 4px;
        }
        .services-dropdown::-webkit-scrollbar-thumb:hover {
            background: #94a3b8;
        }

        .services-dropdown ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .dropdown-item {
            padding: 0.75rem 1.5rem;
            cursor: pointer;
            transition: background-color 0.2s;
            border-bottom: 1px solid #f9fafb;
        }

        .dropdown-item:last-child {
            border-bottom: none;
        }

        .dropdown-item:hover {
            background-color: #f8fafc;
        }

        .item-title {
            font-weight: 600;
            color: #1f2937;
            font-size: 0.95rem;
            margin-bottom: 0.2rem;
        }

        .item-subtitle {
            font-size: 0.8rem;
            color: #6b7280;
            line-height: 1.3;
        }

        .btn-primary {
          background-color: var(--color-black);
          color: var(--color-white);
          padding: 0.75rem 1.5rem;
          border-radius: var(--radius-sm);
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: transform 0.2s;
          justify-content: center;
        }

        .btn-primary:hover {
          transform: translateY(-1px);
        }

        .icon {
           font-size: 1.1em;
        }

        /* Mobile Styles */
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          padding: 8px; /* Increased touch target */
          cursor: pointer;
          z-index: 1002;
          border-radius: 8px;
          transition: background-color 0.2s;
        }

        .mobile-menu-btn:hover {
            background-color: #f3f4f6;
        }

        .mobile-menu-overlay {
          display: none;
        }

        @media (max-width: 900px) {
          .desktop-only {
            display: none;
          }

          .mobile-menu-btn {
            display: flex; /* Flex to center SVG */
            align-items: center;
            justify-content: center;
          }

          .mobile-menu-overlay {
            display: block;
            position: fixed;
            top: 72px; /* Adjusted to match navbar height roughly */
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ffffff;
            z-index: 999;
            overflow-y: auto;
            padding: 1.5rem; /* More padding */
            border-top: 1px solid #f3f4f6;
            animation: slideDown 0.3s ease-out;
          }
          
          @keyframes slideDown {
              from { opacity: 0; transform: translateY(-10px); }
              to { opacity: 1; transform: translateY(0); }
          }

          .mobile-menu-content {
            display: flex;
            flex-direction: column;
            gap: 2rem; /* Increased gap */
          }

          .mobile-nav-header {
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            font-weight: 600;
            color: #9CA3AF;
            margin-bottom: 1rem;
            display: block;
          }

          .mobile-services-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr); /* Two columns for services */
            gap: 0.75rem;
          }
          
          .mobile-service-item {
            padding: 0.75rem;
            background-color: #f9fafb;
            border-radius: 8px;
            font-size: 0.9rem;
            font-weight: 500;
            color: var(--color-text-main);
            text-align: center;
            border: 1px solid transparent;
            transition: all 0.2s;
          }
          
          .mobile-service-item:active {
            background-color: #f3f4f6;
            transform: scale(0.98);
          }

          .mobile-nav-link {
            font-size: 1.25rem; /* Larger links */
            font-weight: 600;
            color: var(--color-black);
            padding: 0.5rem 0;
            border-bottom: 1px solid #f3f4f6;
            display: block;
          }
          
          .mobile-nav-link:last-of-type {
             border-bottom: none;
          }

          .mobile-nav-item {
              display: flex;
              flex-direction: column;
          }

          .width-full {
            width: 100%;
            padding: 1rem; /* Choose button padding */
            font-size: 1rem;
            margin-top: 1rem;
          }
        }
      `})]})},Ml=()=>i.jsxs("footer",{children:[i.jsx("div",{className:"seo-links-section",children:i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"seo-group",children:[i.jsx("h3",{children:"Categories"}),i.jsx("p",{children:"Professional Painting Near Me | Exterior & Interior Painting Near Me | Textured Wall Painting Near Me | Wallpaper Installation Near Me | Wall Modelling & Paneling Near Me | Wood Polish & Furniture Restoration Near Me | False Ceiling Decor Near Me | Water Proofing Near Me | Tile Grouting Near Me | PVC Wall Paneling Near Me | 3D Wallpaper Near Me | PU Polish Near Me | Gypsum Ceiling Near Me"})]}),i.jsxs("div",{className:"seo-group",children:[i.jsx("h3",{children:"Services Near Me"}),i.jsx("p",{children:"Professional Painting Near Me | Textured Painting Near Me | Interior Decor Near Me | Wall Modelling Near Me | Wood Polish Near Me | Wallpaper Installation Near Me | False Ceiling Near Me | Water Proofing Near Me | Tile Grouting Near Me"})]}),i.jsxs("div",{className:"seo-group",children:[i.jsx("h3",{children:"Explore Our Premium Wall & Ceiling Services"}),i.jsx("p",{children:"Full Home Painting | Epoxy Tile Grouting | PVC Wall Paneling | 3D Wallpaper Decor | PU Wood Polishing | Water Proofing Solutions | Gypsum False Ceiling | POP Ceiling Designs"})]}),i.jsxs("div",{className:"seo-group",children:[i.jsx("h3",{children:"Engage With Our Community in the Forum"}),i.jsx("p",{children:"Home Maintenance Tips | Painting Care & Cleaning Guide | Wall Protection Best Practices | Water Proofing Discussions | Interior Design Solutions | Wall Decor & Care Tips | Customer Experiences & Reviews | Ask an Expert"})]}),i.jsxs("div",{className:"seo-group",children:[i.jsx("h3",{children:"Other Services We Provide"}),i.jsx("p",{children:"Women Salon at Home | Men Salon at Home | Beauty & Grooming Services | Real Estate Property Services | Property Buy & Sell Assistance | Home Inspection Services | Expert Consultation Services"})]})]})}),i.jsx("div",{className:"main-footer",children:i.jsx("div",{className:"container",children:i.jsxs("div",{className:"footer-grid",children:[i.jsx("div",{className:"footer-col brand-col",children:i.jsx("h2",{className:"footer-brand",children:"Zervo Company"})}),i.jsxs("div",{className:"footer-col links-col",children:[i.jsx("h4",{children:"Links"}),i.jsxs("ul",{children:[i.jsx("li",{children:i.jsx("a",{href:"/",onClick:s=>{s.preventDefault(),window.history.pushState({},"","/"),window.dispatchEvent(new PopStateEvent("popstate"))},children:"Home"})}),i.jsx("li",{children:i.jsx("a",{href:"/about",onClick:s=>{s.preventDefault(),window.history.pushState({},"","/about"),window.dispatchEvent(new PopStateEvent("popstate"))},children:"About us"})}),i.jsx("li",{children:i.jsx("a",{href:"/contact",onClick:s=>{s.preventDefault(),window.history.pushState({},"","/contact"),window.dispatchEvent(new PopStateEvent("popstate"))},children:"Contact Us"})}),i.jsx("li",{children:i.jsx("a",{href:"/terms",onClick:s=>{s.preventDefault(),window.history.pushState({},"","/terms"),window.dispatchEvent(new PopStateEvent("popstate"))},children:"Terms and Conditions"})}),i.jsx("li",{children:i.jsx("a",{href:"/privacy",onClick:s=>{s.preventDefault(),window.history.pushState({},"","/privacy"),window.dispatchEvent(new PopStateEvent("popstate"))},children:"Privacy Policy"})}),i.jsx("li",{children:i.jsx("a",{href:"/admin",onClick:s=>{s.preventDefault(),window.history.pushState({},"","/admin"),window.dispatchEvent(new PopStateEvent("popstate"))},children:"Admin Panel"})})]})]}),i.jsxs("div",{className:"footer-col newsletter-col",children:[i.jsx("h4",{children:"Join our mailing list and get industry insights"}),i.jsx("div",{className:"newsletter-form",children:i.jsx("input",{type:"email",placeholder:"your email",id:"footer-email"})}),i.jsx("button",{className:"join-btn",onClick:()=>{const s=document.getElementById("footer-email").value,j=`Hello Zervo Company, I would like to join your newsletter. ${s?"My email is "+s:""}`;window.open(`https://wa.me/918354067979?text=${encodeURIComponent(j)}`,"_blank")},children:"Join Newsletter"}),i.jsxs("div",{className:"social-icons",children:[i.jsx("a",{href:"https://wa.me/918354067979",target:"_blank",rel:"noopener noreferrer",children:i.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:i.jsx("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"})})}),i.jsx("a",{href:"#",children:i.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),i.jsx("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),i.jsx("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"})]})}),i.jsx("a",{href:"#",children:i.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:i.jsx("path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"})})})]})]})]})})}),i.jsx("style",{children:`
                /* SEO Links Styles */
                .seo-links-section {
                    background-color: #f8f9ff; /* Very light purple/gray per image */
                    padding: 4rem 1rem;
                }

                .seo-group {
                    margin-bottom: 2rem;
                }

                .seo-group h3 {
                    font-size: 1.1rem;
                    font-weight: 600;
                    color: #1f2937;
                    margin-bottom: 0.75rem;
                }

                .seo-group p {
                    font-size: 0.85rem;
                    color: #6b7280;
                    line-height: 1.6;
                    margin: 0;
                }

                /* Main Footer Styles */
                .main-footer {
                    background-color: #000000;
                    color: #ffffff;
                    padding: 4rem 1rem;
                }

                .footer-grid {
                    display: grid;
                    grid-template-columns: 1.5fr 1fr 1.5fr;
                    gap: 3rem;
                }

                .footer-brand {
                    font-size: 2.5rem;
                    line-height: 1.1;
                    font-weight: 700;
                    margin-bottom: 3rem;
                }

                .brand-highlight {
                    background: linear-gradient(90deg, #9333ea, #db2777); /* Purple to Pink gradient */
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .aura-logo {
                    height: 50px;
                    width: auto;
                }

                .links-col h4, .newsletter-col h4 {
                    font-size: 1.1rem;
                    font-weight: 600;
                    margin-bottom: 1.5rem;
                    color: #f3f4f6;
                }

                .links-col ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .links-col li {
                    margin-bottom: 1rem;
                }

                .links-col a {
                    color: #9ca3af;
                    text-decoration: none;
                    transition: color 0.2s;
                }

                .links-col a:hover {
                    color: #ffffff;
                }

                .newsletter-form input {
                    width: 100%;
                    padding: 0.75rem;
                    background-color: transparent;
                    border: 1px solid #4b5563;
                    border-radius: 4px;
                    color: #ffffff;
                    margin-bottom: 1rem;
                }
                
                .join-btn {
                    padding: 0.75rem 1.5rem;
                    background-color: transparent;
                    border: 1px solid #ffffff;
                    color: #ffffff;
                    border-radius: 4px;
                    cursor: pointer;
                    font-weight: 500;
                    transition: all 0.2s;
                    margin-bottom: 2rem;
                }

                .join-btn:hover {
                    background-color: #ffffff;
                    color: #000000;
                }

                .social-icons {
                    display: flex;
                    gap: 1.5rem;
                }

                .social-icons a {
                    color: #ffffff;
                    transition: opacity 0.2s;
                }

                .social-icons a:hover {
                    opacity: 0.8;
                }

                @media (max-width: 900px) {
                    .footer-grid {
                        grid-template-columns: 1fr;
                        gap: 3rem;
                    }
                }
            `})]}),Lh=()=>i.jsxs("div",{className:"hero-image-wrapper",children:[i.jsx("div",{className:"image-frame",children:i.jsx("img",{src:"/main image.png",alt:"AC Service Professional",className:"professional-image"})}),i.jsx("div",{className:"floating-badge badge-trust",children:i.jsxs("div",{className:"badge-content",children:[i.jsx("span",{className:"badge-label",children:"Trust Factor"}),i.jsxs("div",{className:"badge-value-row",children:[i.jsx("span",{className:"icon-check-circle",children:i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("path",{d:"M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z",fill:"#10B981",stroke:"#10B981",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M7.75 12L10.58 14.83L16.25 9.17004",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}),i.jsx("span",{className:"badge-value",children:"100% Verified"})]})]})}),i.jsxs("div",{className:"floating-badge badge-pros",children:[i.jsx("div",{className:"badge-icon-box",children:i.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("path",{d:"M9.16006 10.87C9.06006 10.86 8.94006 10.86 8.83006 10.87C6.45006 10.79 4.56006 8.84 4.56006 6.44C4.56006 3.99 6.54006 2 9.00006 2C11.4501 2 13.4401 3.99 13.4401 6.44C13.4301 8.84 11.5401 10.79 9.16006 10.87Z",stroke:"#3B82F6",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M16.41 4C18.35 4 19.91 5.57 19.91 7.5C19.91 9.39 18.41 10.93 16.54 11C16.46 10.99 16.37 10.99 16.28 11",stroke:"#3B82F6",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M4.15997 14.56C1.73997 16.18 1.73997 18.82 4.15997 20.43C6.90997 22.27 11.42 22.27 14.17 20.43C16.59 18.81 16.59 16.17 14.17 14.56C11.43 12.73 6.91997 12.73 4.15997 14.56Z",stroke:"#3B82F6",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M18.3401 20C19.0601 19.85 19.7401 19.56 20.3001 19.13C21.8601 17.96 21.8601 16.03 20.3001 14.86C19.7501 14.44 19.0801 14.16 18.3701 14",stroke:"#3B82F6",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}),i.jsxs("div",{className:"badge-content",children:[i.jsx("span",{className:"badge-label-small",children:"Active Pros"}),i.jsx("span",{className:"badge-value-large",children:"200+"})]})]}),i.jsx("style",{children:`
        .hero-image-wrapper {
          position: relative;
          width: 100%;
          max-width: 500px;
          margin-left: auto;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2rem 0;
        }

        .image-frame {
          position: relative;
          border-radius: 2rem;
          overflow: hidden;
          background-color: #333; /* Fallback */
          transform: rotate(-3deg); /* Slight tilt from image */
          border: 4px solid var(--color-white);
          box-shadow: var(--shadow-xl); /* Strong shadow */
          width: 320px;
          height: 400px;
          max-width: 80vw;
          max-height: 100vw;
        }

        .professional-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Float badges */
        .floating-badge {
          position: absolute;
          background: var(--color-white);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          padding: 0.75rem 1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          z-index: 10;
        }

        .badge-trust {
          top: 10%;
          right: -20px;
          min-width: 140px;
        }

        .badge-pros {
          bottom: 10%;
          left: -20px;
          min-width: 140px;
        }

        .badge-content {
          display: flex;
          flex-direction: column;
        }

        .badge-label {
          font-size: 0.75rem;
          color: var(--color-text-muted);
        }

        .badge-value-row {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .badge-value {
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--color-text-main);
        }

        .badge-icon-box {
           background-color: #eff6ff;
           padding: 0.5rem;
           border-radius: var(--radius-sm);
           color: #3b82f6;
           display: flex;
           align-items: center;
           justify-content: center;
        }

        .badge-label-small {
           font-size: 0.7rem;
           color: var(--color-text-muted);
        }
        
        .badge-value-large {
           font-size: 1.1rem;
           font-weight: 800;
           color: var(--color-text-main);
        }

        @media (max-width: 480px) {
           .hero-image-wrapper {
             max-width: 100%;
             transform: scale(0.9);
           }
           
           .badge-trust {
             right: -10px;
             top: 5%;
           }
           
           .badge-pros {
             left: -10px;
             bottom: 5%;
           }
        }
        
      `})]}),Yh=()=>{const{navigate:s}=tt(),{data:j}=Cl(),[g,u]=D.useState(""),[h,N]=D.useState([]),[O,B]=D.useState(!1),_=D.useMemo(()=>{const X=[];return Object.values(j||{}).forEach(F=>{if(F.id==="default")return;const H=F.subServices||[];H.length!==0&&(X.push({name:(F.title||"").replace("Get Best ",""),type:"Service Category",id:F.id}),H.forEach(G=>{X.push({name:G.title,type:"Service",id:F.id})}))}),X},[j]),b=X=>{const F=X.target.value;if(u(F),F.length>1){const H=_.filter(G=>G.name.toLowerCase().includes(F.toLowerCase()));N(H),B(!0)}else N([]),B(!1)},C=()=>{if(!g)return;const X=`Hello Zervo Company, I am looking for ${g||"services"}.`;window.open(`https://wa.me/918354067979?text=${encodeURIComponent(X)}`,"_blank")},M=X=>{const F=document.getElementById(X);F?F.scrollIntoView({behavior:"smooth"}):s(`/#${X}`),B(!1)};return i.jsxs("section",{className:"hero-section",children:[i.jsx("div",{className:"bg-blob blob-1"}),i.jsx("div",{className:"bg-blob blob-2"}),i.jsxs("div",{className:"container hero-inner",children:[i.jsxs("div",{className:"hero-content",children:[i.jsxs("div",{className:"hero-badge",children:[i.jsx("span",{className:"badge-dot"}),i.jsx("span",{children:"#1 Service Platform by Zervo Company"})]}),i.jsxs("h1",{className:"hero-title",children:["Expert Services at",i.jsx("br",{}),i.jsx("span",{className:"text-gradient",children:"Your Doorstep"})]}),i.jsxs("p",{className:"hero-description",children:["Experience reliable, professional, and affordable services from Zervo Company. ",i.jsx("br",{}),i.jsx("strong",{children:"Creating an Aura that speaks."})]}),i.jsxs("div",{className:"search-container",children:[i.jsxs("div",{className:"search-bar",children:[i.jsx("input",{type:"text",placeholder:"Search for 'AC Service'...",className:"search-input",style:{paddingLeft:"1.5rem"},value:g,onChange:b,onFocus:()=>{g.length>1&&B(!0)},onBlur:()=>setTimeout(()=>B(!1),200),onKeyPress:X=>X.key==="Enter"&&C()}),i.jsx("div",{className:"search-actions",children:i.jsx("button",{className:"btn-search",onClick:C,children:i.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("path",{d:"M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M22 22L20 20",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})})]}),O&&h.length>0&&i.jsx("div",{className:"search-results",children:h.map((X,F)=>i.jsxs("div",{className:"search-result-item",onClick:()=>M(X.id),children:[i.jsx("div",{className:"result-icon",children:i.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("path",{d:"M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z",stroke:"#9CA3AF",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M22 22L20 20",stroke:"#9CA3AF",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}),i.jsxs("div",{className:"result-info",children:[i.jsx("span",{className:"result-name",children:X.name}),i.jsx("span",{className:"result-type",children:X.type})]})]},F))})]}),i.jsxs("div",{className:"hero-stats",children:[i.jsxs("div",{className:"stat-item",children:[i.jsx("span",{className:"stat-number",children:"200+"}),i.jsx("span",{className:"stat-label",children:"Professionals"})]}),i.jsx("div",{className:"stat-divider"}),i.jsxs("div",{className:"stat-item",children:[i.jsx("span",{className:"stat-number",children:"10k+"}),i.jsx("span",{className:"stat-label",children:"Happy Customers"})]})]})]}),i.jsx("div",{className:"hero-visual",children:i.jsx(Lh,{})})]}),i.jsx("style",{children:`
        .hero-section {
          width: 100%;
          background: #F8F7FF; /* Slightly lighter/cleaner */
          position: relative;
          overflow: hidden;
          padding-top: var(--spacing-lg);
        }

        /* Decorative Background Blobs */
        .bg-blob {
          position: absolute;
          filter: blur(80px);
          opacity: 0.6;
          z-index: 0;
        }

        .blob-1 {
            width: 400px;
            height: 400px;
            background: #E0D4FC;
            top: -100px;
            right: -100px;
            border-radius: 50%;
        }

        .blob-2 {
            width: 300px;
            height: 300px;
            background: #EBF1FF;
            bottom: 0;
            left: -50px;
            border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
        }

        .hero-inner {
          display: flex; /* Side by side */
          align-items: center;
          justify-content: space-between;
          padding-top: var(--spacing-xl);
          padding-bottom: 4rem;
          gap: 2rem;
          position: relative;
          z-index: 1;
        }

        .hero-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          max-width: 650px;
        }

        .hero-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 6px 16px;
            background: rgba(99, 102, 241, 0.1);
            color: var(--color-secondary);
            font-weight: 600;
            font-size: 0.875rem;
            border-radius: 20px;
            margin-bottom: 1.5rem;
        }

        .badge-dot {
            width: 8px;
            height: 8px;
            background: var(--color-secondary);
            border-radius: 50%;
            display: block;
        }

        /* Typography */
        .hero-title {
          font-size: 4rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: #111827;
          letter-spacing: -0.02em;
        }
        
        .text-gradient {
           background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
           -webkit-background-clip: text;
           -webkit-text-fill-color: transparent;
        }
        
        .hero-description {
           font-size: 1.25rem;
           color: #555;
           margin-bottom: 2.5rem;
           line-height: 1.6;
           max-width: 90%;
        }

        /* Search Bar */
        .search-container {
            width: 100%;
            max-width: 550px;
            margin-bottom: 2.5rem;
            position: relative;
        }

        .search-bar {
          display: flex;
          align-items: center;
          background: var(--color-white);
          padding: 8px;
          border-radius: 50px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08); /* Improved shadow */
          width: 100%;
          position: relative;
          z-index: 20;
          border: 1px solid rgba(0,0,0,0.03);
          transition: box-shadow 0.2s;
        }
        
        .search-bar:focus-within {
            box-shadow: 0 8px 30px rgba(99, 102, 241, 0.15);
            border-color: rgba(99, 102, 241, 0.2);
        }

        .search-input {
          flex: 1;
          border: none;
          outline: none;
          padding: 0.75rem;
          font-size: 1.05rem;
          color: var(--color-text-main);
          background: transparent;
        }

        .search-input::placeholder {
          color: #9ca3af;
        }

        .search-actions {
          padding-right: 4px;
        }

        .btn-search {
          background: linear-gradient(135deg, #1f2937 0%, #000 100%);
          color: white;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        
        .btn-search:hover {
            transform: scale(1.05);
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }

        /* Search Results Dropdown */
        .search-results {
            position: absolute;
            top: calc(100% + 12px);
            left: 0;
            right: 0;
            background: #fff;
            border-radius: 20px;
            box-shadow: 0 20px 40px -5px rgba(0, 0, 0, 0.1);
            max-height: 320px;
            overflow-y: auto;
            z-index: 100;
            padding: 10px;
            border: 1px solid #f3f4f6;
        }

        .search-result-item {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 12px 16px;
            cursor: pointer;
            transition: all 0.2s;
            border-radius: 12px;
        }

        .search-result-item:hover {
            background-color: #F8F7FF;
        }

        .result-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-secondary);
            opacity: 0.7;
            background: #F3F4F6;
            width: 32px;
            height: 32px;
            border-radius: 8px;
        }

        .result-name {
            font-weight: 600;
            color: #1f2937;
            font-size: 1rem;
        }

        .result-type {
            font-size: 0.8rem;
            color: #6B7280;
        }

        .hero-stats {
            display: flex;
            align-items: center;
            gap: 2rem;
            margin-top: 1rem;
        }

        .stat-item {
            display: flex;
            flex-direction: column;
        }

        .stat-number {
            font-size: 1.5rem;
            font-weight: 800;
            color: #111;
        }

        .stat-label {
            font-size: 0.9rem;
            color: #666;
            font-weight: 500;
        }

        .stat-divider {
            width: 1px;
            height: 40px;
            background: #E5E7EB;
        }

        .hero-visual {
          flex: 1;
          display: flex;
          justify-content: flex-end; /* Align image to right */
          position: relative;
        }
        
        /* Responsive Adjustments */
        @media (max-width: 1024px) {
            .hero-title {
                font-size: 3rem;
            }
        }

        @media (max-width: 900px) {
           .hero-inner {
              flex-direction: column-reverse; /* Stack: Visual on top (visually, but HTML order... wait) 
              Actually usually on mobile we want Image then Text, OR Text then Image.
              Let's keep text top on mobile often for SEO/CTA, but visually users like seeing the "hero" image.
              Let's try standard column for now: Content top, Image bottom. 
              */
              flex-direction: column;
              text-align: center;
              padding-top: 2rem;
              gap: 3rem;
           }

           .hero-content {
              align-items: center;
              max-width: 100%;
           }
           
           .hero-description {
               text-align: center;
               margin-left: auto;
               margin-right: auto;
           }

           .hero-visual {
             width: 100%;
             justify-content: center;
           }
           
           .hero-title {
               font-size: 2.5rem;
           }
           
           .search-container {
               margin-left: auto;
               margin-right: auto;
           }
        }
        
        @media (max-width: 600px) {
            .hero-title {
                font-size: 2rem;
            }
            
            .search-bar {
               flex-direction: column;
               padding: 12px;
               gap: 10px;
               border-radius: 20px;
            }
            
            .search-input {
                width: 100%;
                text-align: center;
                padding: 15px;
            }
            
            .search-actions {
                width: 100%;
            }
            
            .btn-search {
                width: 100%;
                border-radius: 12px;
                height: 40px;
            }
            
            .hero-stats {
                gap: 1.5rem;
            }
        }

      `})]})},Gh=()=>{const{navigate:s}=tt(),{data:j}=Cl(),g=Yf.useMemo(()=>Object.entries(j||{}).filter(([u,h])=>u!=="default"&&Array.isArray(h?.subServices)&&h.subServices.length>0).map(([u,h])=>({slug:u,title:h.title||u,image:h.heroImage||h.expertImage||""})),[j]);return g.length===0?null:i.jsxs("section",{className:"category-cards-section",children:[i.jsxs("div",{className:"container",children:[i.jsx("div",{className:"category-cards-tabs",children:i.jsx("button",{type:"button",className:"category-tab active",children:"All services"})}),i.jsx("div",{className:"category-cards-grid",children:g.map(u=>i.jsxs("button",{type:"button",className:"category-card",onClick:()=>s(`/service/${u.slug}`),children:[i.jsx("div",{className:"category-card-image-wrap",children:i.jsx("img",{src:(u.image&&u.image.startsWith("/uploads/")?Ct(u.image):u.image)||"/vite.svg",alt:"",className:"category-card-image"})}),i.jsx("span",{className:"category-card-label",children:u.title})]},u.slug))})]}),i.jsx("style",{children:`
                .category-cards-section {
                    padding: 3rem 0 4rem;
                    background: #fff;
                }
                .category-cards-tabs {
                    display: flex;
                    gap: 0.5rem;
                    margin-bottom: 2rem;
                }
                .category-tab {
                    padding: 0.5rem 1.25rem;
                    border-radius: 50px;
                    border: none;
                    background: #f1f5f9;
                    color: #475569;
                    font-size: 0.95rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: background 0.2s, color 0.2s;
                }
                .category-tab.active {
                    background: #e2e8f0;
                    color: #0f172a;
                }
                .category-tab:hover:not(.active) {
                    background: #e2e8f0;
                }
                .category-cards-grid {
                    display: grid;
                    grid-template-columns: repeat(6, 1fr);
                    gap: 1.5rem;
                    align-items: stretch;
                }
                .category-card {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 1.5rem 1rem;
                    background: #fff;
                    border: 1px solid #e2e8f0;
                    border-radius: 16px;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.06);
                    cursor: pointer;
                    transition: transform 0.2s, box-shadow 0.2s;
                    text-align: center;
                }
                .category-card:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 20px rgba(0,0,0,0.08);
                }
                .category-card-image-wrap {
                    width: 100%;
                    aspect-ratio: 1;
                    max-width: 120px;
                    margin: 0 auto 1rem;
                    border-radius: 12px;
                    overflow: hidden;
                    background: #f8fafc;
                }
                .category-card-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                }
                .category-card-label {
                    font-size: 1rem;
                    font-weight: 600;
                    color: #0f172a;
                    line-height: 1.3;
                }
                @media (max-width: 768px) {
                    .category-cards-grid {
                        grid-template-columns: repeat(3, 1fr);
                    }
                }
            `})]})},Zh=({image:s,title:j,rating:g,price:u,isMostBooked:h})=>{const{navigate:N}=tt(),O=()=>{const B=`Hello Zervo Company, I want to book ${j} service.`,_=encodeURIComponent(B);window.open(`https://wa.me/918354067979?text=${_}`,"_blank")};return i.jsxs("div",{className:"service-card",children:[i.jsxs("div",{className:"card-image-container",children:[i.jsx("img",{src:s&&(s.startsWith("http")?s:Ct(s))||"/vite.svg",alt:j,className:"card-image"}),h&&i.jsx("div",{className:"badge-most-booked",children:"MOST BOOKED"}),i.jsxs("div",{className:"badge-rating",children:[i.jsx("span",{className:"star",children:"★"})," ",g]})]}),i.jsxs("div",{className:"card-content",children:[i.jsx("h3",{className:"service-title",children:j}),i.jsxs("div",{className:"card-footer",children:[i.jsxs("div",{className:"price-info",children:[i.jsx("span",{className:"price-label",children:"STARTS FROM"}),i.jsxs("span",{className:"price-value",children:["₹",u]})]}),i.jsx("button",{className:"btn-book",onClick:O,children:"Book Now"})]})]}),i.jsx("style",{children:`
        .service-card {
          background: var(--color-white);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          transition: transform 0.2s, box-shadow 0.2s;
          border: 1px solid #f3f4f6;
        }

        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }

        .card-image-container {
          position: relative;
          height: 200px;
          background-color: #e5e7eb;
        }

        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .badge-most-booked {
          position: absolute;
          top: 12px;
          left: 12px;
          background-color: #f3e8ff; /* Light purple */
          color: var(--color-secondary);
          font-size: 0.7rem;
          font-weight: 700;
          padding: 4px 8px;
          border-radius: 4px;
          text-transform: uppercase;
        }

        .badge-rating {
          position: absolute;
          bottom: 12px;
          left: 12px;
          background-color: var(--color-white);
          color: var(--color-text-main);
          font-size: 0.8rem;
          font-weight: 600;
          padding: 4px 8px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          gap: 4px;
          box-shadow: var(--shadow-sm);
        }

        .star {
          color: #fbbf24; /* Amber/Gold */
        }

        .card-content {
          padding: 1.5rem;
        }

        .service-title {
          font-size: 1.125rem;
          font-weight: 700;
          color: var(--color-black);
          margin-bottom: 1.5rem;
          line-height: 1.4;
        }

        .card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .price-info {
          display: flex;
          flex-direction: column;
        }

        .price-label {
          font-size: 0.65rem;
          color: var(--color-text-muted);
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 2px;
        }

        .price-value {
          font-size: 1.125rem;
          font-weight: 800;
          color: var(--color-text-main);
        }

        .btn-book {
          background-color: #e0e7ff; /* Light indigo/purple */
          color: var(--color-secondary);
          font-weight: 600;
          font-size: 0.9rem;
          padding: 0.6rem 1.25rem;
          border-radius: var(--radius-md);
          transition: background-color 0.2s;
        }

        .btn-book:hover {
          background-color: #c7d2fe;
        }
      `})]})},Qh=({categoryId:s,index:j})=>{const{data:g}=Cl(),u=g?.[s];if(!u)return null;const h=(u.subServices||[]).map((b,C)=>({id:C,...b}));if(h.length===0)return null;const N=j%2===0,O=u.title.split(" "),B=O[0],_=O.slice(1).join(" ");return i.jsxs("section",{className:`home-services-section ${N?"bg-light":"bg-white"}`,id:s,children:[i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"section-header-left",children:[i.jsxs("h2",{className:"section-title",children:[B," ",_&&i.jsx("span",{className:"text-secondary",children:_}),!_&&i.jsx("span",{className:"text-secondary-dot",children:"."})]}),i.jsx("p",{className:"section-subtitle",children:u.description}),i.jsxs("div",{className:"rating-row",children:[i.jsx("div",{className:"stars",children:"★".repeat(5)}),i.jsxs("span",{className:"rating-text",children:[u.rating||4.8," • ",u.reviewsCount||"1000+"," reviews"]})]})]}),i.jsx("div",{className:"services-grid",children:h.map(b=>i.jsx(Zh,{...b},b.id))})]}),i.jsx("style",{children:`
        .home-services-section {
          padding-top: 4rem;
          padding-bottom: 4rem;
          border-bottom: 1px solid rgba(0,0,0,0.02);
        }

        .home-services-section.bg-light {
           background-color: #F5F2FC; /* Matching other sections */
        }
        
        .home-services-section.bg-white {
           background-color: #ffffff;
        }

        .section-header-left {
          text-align: left;
          margin-bottom: 3rem;
          max-width: 800px;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--color-black);
          margin-bottom: 0.75rem;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }

        .text-secondary {
          background: linear-gradient(135deg, #6366f1, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }

        .text-secondary-dot {
            color: var(--color-accent);
        }

        .section-subtitle {
          color: var(--color-text-muted);
          font-size: 1.15rem;
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .rating-row {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            font-size: 1rem;
            color: var(--color-text-main);
            font-weight: 600;
            background: rgba(251, 191, 36, 0.05);
            padding: 8px 16px;
            border-radius: 50px;
            width: fit-content;
        }
        
        .stars {
            color: #fbbf24; /* Amber/Gold */
            letter-spacing: 2px;
            font-size: 1.1rem;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          align-items: stretch;
        }
        
        .services-grid .service-card {
          min-height: 0;
          display: flex;
          flex-direction: column;
        }
        
        .services-grid .service-card .card-content {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        
        .services-grid .service-card .card-footer {
          margin-top: auto;
        }
        
        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
           .section-header-left {
              text-align: center;
              margin-left: auto;
              margin-right: auto;
           }
           .rating-row {
              justify-content: center;
              margin: 0 auto;
           }
           .section-title {
               font-size: 2.25rem;
           }
        }
      `})]})},Xh=()=>{const s=[{id:1,name:"Amit Gupta",category:"Painting",rating:5,review:"Needed a professional painter, and Zervo Company made it so easy to find the right person. The interface is clean, and the service was prompt. Highly recommend!",initials:"AG",color:"#d97706"},{id:2,name:"Priya Verma",category:"Interior Decor",rating:5,review:"The interior decoration service was quick and reliable. I'll definitely use Zervo Company again! It's rare to find such consistent quality across different services.",initials:"PV",color:"#db2777"},{id:3,name:"Aditi Sharma",category:"Cleaning",rating:4.5,review:"The deep cleaning service exceeded my expectations. They arrived on time with all the necessary equipment. My apartment looks brand new.",initials:"AS",color:"#2563eb"},{id:4,name:"Rahul Singh",category:"Painting",rating:5,review:"I booked a textured wall painting service through Zervo Company. The painter was punctual, professional, and left the room spotless—highly recommended!",initials:"RS",color:"#059669"}];return i.jsxs("section",{className:"trusted-reviews-section",children:[i.jsx("div",{className:"container",children:i.jsxs("div",{className:"content-wrapper",children:[i.jsxs("div",{className:"left-column",children:[i.jsxs("h2",{className:"section-title",children:["Trusted by ",i.jsx("span",{className:"text-secondary",children:"100k+"}),i.jsx("br",{}),"For Quality Services"]}),i.jsx("p",{className:"section-subtitle",children:"Join a community that values excellence. We connect you with top-tier professionals ensuring every job is done right, the first time."}),i.jsxs("div",{className:"features-list",children:[i.jsxs("div",{className:"feature-item",children:[i.jsx("div",{className:"icon-box blue",children:i.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}),i.jsx("path",{d:"M9 12l2 2 4-4"})]})}),i.jsxs("div",{className:"feature-text",children:[i.jsx("h3",{children:"Verified Professionals"}),i.jsx("p",{children:"Every expert undergoes a rigorous background check and skill assessment."})]})]}),i.jsxs("div",{className:"feature-item",children:[i.jsx("div",{className:"icon-box orange",children:i.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}),i.jsx("path",{d:"M9 12l2 2 4-4"})]})}),i.jsxs("div",{className:"feature-text",children:[i.jsx("h3",{children:"Guaranteed Satisfaction"}),i.jsx("p",{children:"We stand by our service quality. Not happy? We'll make it right."})]})]}),i.jsxs("div",{className:"feature-item",children:[i.jsx("div",{className:"icon-box purple",children:i.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:i.jsx("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})})}),i.jsxs("div",{className:"feature-text",children:[i.jsx("h3",{children:"Seamless Experience"}),i.jsx("p",{children:"Book in seconds, track in real-time. Hassle-free from start to finish."})]})]})]}),i.jsxs("button",{className:"btn-explore",children:["Explore Services",i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),i.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})]}),i.jsx("div",{className:"right-column",children:i.jsx("div",{className:"reviews-grid",children:s.map(j=>i.jsxs("div",{className:"review-card",children:[i.jsxs("div",{className:"card-top",children:[i.jsxs("div",{className:"stars",children:["★".repeat(Math.floor(j.rating)),j.rating%1!==0&&"½"]}),i.jsx("span",{className:"category-badge",children:j.category})]}),i.jsxs("p",{className:"review-text",children:['"',j.review,'"']}),i.jsxs("div",{className:"user-profile",children:[i.jsx("div",{className:"avatar",style:{backgroundColor:j.color},children:j.initials}),i.jsxs("div",{className:"user-info",children:[i.jsx("h4",{className:"user-name",children:j.name}),i.jsx("span",{className:"verified-badge",children:"Verified Customer"})]})]})]},j.id))})})]})}),i.jsx("style",{children:`
        .trusted-reviews-section {
          padding-top: 4rem;
          padding-bottom: 6rem;
          background-color: var(--color-white);
        }

        .content-wrapper {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: flex-start;
        }

        .section-title {
          font-size: 3rem;
          font-weight: 800;
          color: var(--color-black);
          margin-bottom: 1.5rem;
          line-height: 1.1;
          display: inline-block;
         
        }

         .section-title span.text-secondary {
            background: linear-gradient(90deg, #a855f7, #3b82f6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            display: inline;
        }

        .section-subtitle {
          color: var(--color-text-muted);
          font-size: 1.1rem;
          margin-bottom: 2.5rem;
          line-height: 1.6;
          max-width: 500px;
        }

        .features-list {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            margin-bottom: 3rem;
        }

        .feature-item {
            display: flex;
            gap: 1rem;
            align-items: flex-start;
        }

        .icon-box {
            width: 50px;
            height: 50px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }

        .icon-box.blue { background-color: #dbeafe; color: #2563eb; }
        .icon-box.orange { background-color: #ffedd5; color: #ea580c; }
        .icon-box.purple { background-color: #f3e8ff; color: #9333ea; }

        .feature-text h3 {
            font-size: 1.1rem;
            font-weight: 700;
            color: var(--color-black);
            margin-bottom: 0.25rem;
        }

        .feature-text p {
            color: var(--color-text-muted);
            font-size: 0.95rem;
            line-height: 1.5;
        }

        .btn-explore {
            background-color: #0f172a;
            color: white;
            padding: 14px 28px;
            border-radius: 9999px;
            font-weight: 600;
            font-size: 1rem;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            cursor: pointer;
            transition: transform 0.2s;
        }

        .btn-explore:hover {
            transform: translateY(-2px);
        }

        .reviews-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
        }

        .review-card {
            background-color: #ffffff;
            border: 1px solid #f3f4f6;
            border-radius: 20px;
            padding: 1.5rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
            display: flex;
            flex-direction: column;
            gap: 1rem;
            transition: transform 0.2s;
        }
        
        .review-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        .card-top {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .stars {
            color: #fbbf24;
            font-size: 1rem;
            letter-spacing: 2px;
        }

        .category-badge {
            background-color: #f3f4f6;
            color: #4b5563;
            font-size: 0.7rem;
            padding: 4px 8px;
            border-radius: 6px;
            font-weight: 600;
            text-transform: uppercase;
        }

        .review-text {
            color: #4b5563;
            font-style: italic;
            font-size: 0.95rem;
            line-height: 1.5;
            flex-grow: 1;
        }

        .user-profile {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            margin-top: auto;
        }

        .avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: 600;
            font-size: 0.9rem;
        }

        .user-info {
            display: flex;
            flex-direction: column;
        }

        .user-name {
            font-weight: 700;
            color: var(--color-black);
            font-size: 0.95rem;
        }

        .verified-badge {
            color: #9ca3af;
            font-size: 0.75rem;
        }

        @media (max-width: 900px) {
            .content-wrapper {
                grid-template-columns: 1fr;
                gap: 3rem;
            }
            .section-title {
                font-size: 2.5rem;
            }
        }
        
        @media (max-width: 600px) {
             .reviews-grid {
                grid-template-columns: 1fr;
             }
        }
      `})]})},Vh=()=>{const[s,j]=D.useState(null),g=h=>{j(s===h?null:h)},u=[{title:"Painting",desc:"Professional interior and exterior painting services for a beautiful and vibrant home."},{title:"Water proofing",desc:"Comprehensive solutions to stop terrace, bathroom, and wall leakage permanently."},{title:"Tile grouting",desc:"Expert epoxy and cement-based grouting to protect your tiles and prevent seepage."},{title:"Wall modelling",desc:"Modern PVC and wooden wall modelling to add luxury and style to your interiors."},{title:"Wall paper",desc:"Wide range of 3D, fabric, and custom wallpaper installations for every room."},{title:"Wood polish",desc:"Premium PU and Melamyne polishing to restore the shine of your wooden furniture."},{title:"False ceiling",desc:"Designer Gypsum and POP ceilings with expert lighting and finish."}];return i.jsxs("section",{className:"about-services-section",children:[i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"about-block",children:[i.jsx("div",{className:"heading-wrapper",children:i.jsx("h2",{className:"about-title",children:"About Zervo Company's Services"})}),i.jsx("p",{className:"about-desc",children:"Zervo Company is your trusted one-stop platform for premium home, painting, and decor services. We connect you with 100% verified, skilled professionals who deliver reliable, doorstep services across a wide range of needs – making everyday life simpler, safer, and more beautiful."})]}),i.jsxs("div",{className:"services-header-block",children:[i.jsx("span",{className:"services-label",children:"Services"}),i.jsx("h2",{className:"services-main-title",children:"Our Complete Range of Services"}),i.jsx("p",{className:"services-subtitle",children:"Explore our comprehensive list of professional services tailored for your needs."}),i.jsx("div",{className:"accordion-list",children:u.map((h,N)=>i.jsxs("div",{className:"accordion-item",children:[i.jsxs("div",{className:`accordion-header ${s===N?"active":""}`,onClick:()=>g(N),children:[i.jsx("h3",{children:h.title}),i.jsx("svg",{className:`chevron ${s===N?"rotate":""}`,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:i.jsx("polyline",{points:"6 9 12 15 18 9"})})]}),i.jsx("div",{className:`accordion-content ${s===N?"show":""}`,children:i.jsx("p",{children:h.desc})})]},N))})]})]}),i.jsx("style",{children:`
        .about-services-section {
            padding-top: 4rem;
            padding-bottom: 6rem;
            background-color: var(--color-white);
        }

        /* Top Block Styling */
        .about-block {
            margin-bottom: 5rem;
            max-width: 900px;
        }

        .heading-wrapper {
            border-left: 5px solid #6366f1; /* Purple/Indigo border */
            padding-left: 1.5rem;
            margin-bottom: 1.5rem;
        }

        .about-title {
            font-size: 2.2rem;
            font-weight: 700;
            color: var(--color-black);
            margin: 0;
            line-height: 1.2;
        }

        .about-desc {
            color: #4b5563; /* Gray-600 */
            font-size: 1.05rem;
            line-height: 1.7;
            padding-left: 1.8rem;
        }

        /* Bottom Block Styling */
        .services-header-block {
            text-align: center;
            max-width: 900px;
            margin: 0 auto;
        }

        .services-label {
            color: #6b7280; /* Gray-500 */
            font-size: 0.9rem;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 1px;
            display: block;
            margin-bottom: 0.5rem;
        }

        .services-main-title {
            font-size: 2.5rem;
            font-weight: 800;
            color: #111827; /* Gray-900 */
            margin-bottom: 1rem;
        }

        .services-subtitle {
            font-size: 1rem;
            color: #6b7280;
            max-width: 600px;
            margin: 0 auto 3rem auto;
        }

        /* Accordion Styling */
        .accordion-list {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            text-align: left;
        }

        .accordion-item {
            border-radius: 8px;
            overflow: hidden;
        }

        .accordion-header {
            background-color: #f0f5ff; /* Light blue background */
            padding: 1.25rem 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
            transition: background-color 0.2s;
            border-radius: 6px;
        }

        .accordion-header:hover {
            background-color: #e0eaff;
        }

        .accordion-header h3 {
            font-size: 1.05rem;
            font-weight: 500;
            color: #1f2937; /* Gray-800 */
            margin: 0;
        }

        .chevron {
            color: #1f2937;
            transition: transform 0.3s ease;
        }

        .chevron.rotate {
            transform: rotate(180deg);
        }

        .accordion-content {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease-out, padding 0.3s ease;
            background-color: #ffffff;
        }

        .accordion-content.show {
            max-height: 150px; /* Approximate max height */
            padding: 1.5rem;
        }

        .accordion-content p {
            color: #6b7280;
            font-size: 1rem;
            line-height: 1.6;
            margin: 0;
        }

        @media (max-width: 768px) {
            .about-title {
                font-size: 1.8rem;
            }
            .services-main-title {
                font-size: 2rem;
            }
        }
      `})]})},Vf=()=>{const s=[{title:"Doorstep Convenience",desc:"Book any service from your phone. Our experts come to you at your chosen time – no need to step out or wait endlessly."},{title:"100% Verified Professionals",desc:"Every Zervo Company technician undergoes rigorous background checks and training to deliver top-quality work every time."},{title:"Affordable & Transparent Pricing",desc:"Quality services at best prices with no hidden charges. Get the best value for your money."},{title:"Guaranteed Satisfaction",desc:"We don't just complete the job – we make sure you're truly satisfied. That's the Zervo Company difference."},{title:"Fast & Reliable",desc:"Most bookings completed same day or next day. Real-time updates and polite experts."},{title:"One-Stop Platform",desc:"From painting and decor to plumbing and home cleaning – Zervo Company handles all your home needs."}];return i.jsxs("section",{className:"why-urban-aura-section",children:[i.jsx("div",{className:"container",children:i.jsxs("div",{className:"content-box",children:[i.jsx("h2",{className:"section-title",children:"Why Zervo Company?"}),i.jsx("div",{className:"benefits-grid",children:s.map((j,g)=>i.jsxs("div",{className:"benefit-item",children:[i.jsx("div",{className:"icon-wrapper",children:i.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("circle",{cx:"12",cy:"12",r:"10"}),i.jsx("polyline",{points:"9 11 12 14 22 4"})]})}),i.jsxs("div",{className:"text-content",children:[i.jsx("h3",{children:j.title}),i.jsx("p",{children:j.desc})]})]},g))})]})}),i.jsx("style",{children:`
        .why-urban-aura-section {
            padding-top: 2rem;
            padding-bottom: 6rem;
            background-color: var(--color-white);
        }

        .content-box {
            background-color: #f5f3ff; /* Very light purple */
            border-radius: 24px;
            padding: 4rem;
            text-align: center;
        }

        .section-title {
            font-size: 2.5rem;
            font-weight: 700;
            color: #111827;
            margin-bottom: 3rem;
        }

        .benefits-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            column-gap: 4rem;
            row-gap: 3rem;
            text-align: left;
        }

        .benefit-item {
            display: flex;
            gap: 1.25rem;
            align-items: flex-start;
        }

        .icon-wrapper {
            flex-shrink: 0;
            color: #7c3aed; /* Purple */
            margin-top: 2px;
        }

        .icon-wrapper svg {
            width: 28px;
            height: 28px;
        }

        .text-content h3 {
            font-size: 1.1rem;
            font-weight: 700;
            color: #1f2937;
            margin-bottom: 0.5rem;
        }

        .text-content p {
            color: #6b7280;
            font-size: 0.95rem;
            line-height: 1.6;
            margin: 0;
        }

        @media (max-width: 900px) {
            .benefits-grid {
                grid-template-columns: 1fr;
                gap: 2.5rem;
            }
            .content-box {
                padding: 2rem;
            }
        }
      `})]})},Kf=()=>{const[s,j]=D.useState(0),g=h=>{j(s===h?-1:h)},u=[{question:"How do I choose the right paint for my home?",answer:"Our experts at Zervo Company provide a free color consultation to help you choose the right finish and shade based on your lighting, wall condition, and personal style."},{question:"Is your water proofing service permanent?",answer:"Yes, we use advanced multi-layer coating techniques and premium chemicals to provide long-lasting protection. We also offer a warranty on our water proofing solutions."},{question:"What is the benefit of epoxy tile grouting?",answer:"Epoxy grouting is highly durable, stain-resistant, and 100% waterproof. It prevents mold growth in tile gaps and is much easier to clean than regular cement grout."},{question:"How long does wall paneling/modelling installation take?",answer:"Most PVC or wooden wall modelling projects can be completed within 1-3 days depending on the wall size and design complexity."},{question:"Can wallpapers be applied on damp walls?",answer:"We recommend treating damp walls with our water proofing service before applying wallpaper to ensure it doesn't peel and lasts for years."},{question:"What is the difference between PU and Melamyne polish?",answer:"PU polish offers a more premium, high-gloss finish with superior durability and scratch resistance compared to the classic and more affordable Melamyne polish."},{question:"Are false ceilings suitable for small rooms?",answer:"Yes, modern Gypsum or POP false ceilings can actually make small rooms feel more spacious and elegant with the right lighting integration and minimal design."}];return i.jsxs("section",{className:"faq-section",children:[i.jsxs("div",{className:"container",children:[i.jsx("h2",{className:"section-title",children:"Most asked FAQ's"}),i.jsx("p",{className:"section-subtitle",children:"We're here to help you and solve doubts. Find answers to the most common questions below."}),i.jsx("div",{className:"faq-grid",children:u.map((h,N)=>i.jsxs("div",{className:"faq-card",children:[i.jsxs("div",{className:`faq-header ${s===N?"active":""}`,onClick:()=>g(N),children:[i.jsx("h3",{children:h.question}),i.jsx("button",{className:"toggle-btn",children:s===N?i.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:i.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})}):i.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),i.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]})})]}),i.jsx("div",{className:`faq-answer ${s===N?"show":""}`,children:i.jsx("p",{children:h.answer})})]},N))})]}),i.jsx("style",{children:`
        .faq-section {
            padding-top: 4rem;
            padding-bottom: 6rem;
            background-color: var(--color-white);
        }

        .section-title {
            font-size: 2.5rem;
            font-weight: 800;
            color: #111827;
            margin-bottom: 0.5rem;
        }

        .section-subtitle {
            color: #6b7280;
            font-size: 1rem;
            margin-bottom: 3rem;
            max-width: 600px;
        }

        .faq-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
        }

        .faq-card {
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            overflow: hidden;
            background-color: #ffffff;
            transition: all 0.3s ease;
        }

        .faq-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            padding: 1.25rem;
            cursor: pointer;
            background-color: #fff;
        }

        .faq-header.active {
            background-color: #f8fafc; /* Light gray/blue tint when active */
        }

        .faq-header h3 {
            font-size: 1rem;
            font-weight: 600;
            color: #1f2937;
            margin: 0;
            line-height: 1.5;
            padding-right: 1rem;
        }

        .toggle-btn {
            background: none;
            border: none;
            cursor: pointer;
            color: #6366f1; /* Indigo color for icon */
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0;
            flex-shrink: 0;
        }

        .faq-answer {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s cubic-bezier(0, 1, 0, 1);
            background-color: #f8fafc;
            padding: 0 1.25rem;
        }

        .faq-answer.show {
            max-height: 500px; /* Arbitrary large height */
            transition: max-height 0.3s ease-in-out;
            padding-bottom: 1.25rem;
        }

        .faq-answer p {
            color: #6b7280;
            font-size: 0.95rem;
            line-height: 1.6;
            margin: 0;
            padding-top: 0.5rem;
        }

        @media (max-width: 900px) {
            .faq-grid {
                grid-template-columns: 1fr;
            }
        }
      `})]})},Jf=()=>{const[s,j]=D.useState("/banner.png");D.useEffect(()=>{Oh().then(u=>{u&&u.length>0&&u[0]&&j(u[0])}).catch(()=>{})},[]);const g=s.startsWith("/uploads/")?Ct(s):s;return i.jsxs("section",{className:"banner-section",children:[i.jsx("div",{className:"banner-image-container",children:i.jsx("img",{src:g,alt:"Zervo Company Team",className:"banner-image"})}),i.jsx("style",{children:`
        .banner-section {
            padding-top: 4rem;
            text-align: center;
            background: linear-gradient(180deg, #ffffff 0%, #fff1f2 100%);
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .banner-title {
            font-size: 3rem;
            font-weight: 800;
            color: #111827;
            margin-bottom: 0.5rem;
            letter-spacing: -0.02em;
        }

        .banner-subtitle {
            font-family: 'cursive', sans-serif;
            font-size: 2.5rem;
            color: #1f2937;
            font-weight: 400;
            font-style: italic;
            position: relative;
            display: inline-block;
            margin-bottom: 2rem;
        }

        .underline-svg {
            position: absolute;
            bottom: -15px;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            max-width: 250px;
        }

        .banner-image-container {
            width: 100%;
            margin: 0;
            height:900px;
            position: relative;
            z-index: 1;
            line-height: 0; /* Remove potential bottom gap */
        }

        .banner-image {
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
        }

        @media (max-width: 768px) {
            .banner-section {
                padding-top: 2rem;
            }
            .banner-title {
                font-size: 2rem;
            }
            .banner-subtitle {
                font-size: 1.8rem;
            }
            .banner-image-container {
                height: 400px; /* Reduced height for mobile */
            }
        }
      `})]})},qf=()=>{const{data:s,loading:j}=Cl(),g=Object.keys(s||{}).filter(u=>{if(u==="default")return!1;const N=s[u]?.subServices||[];return Array.isArray(N)&&N.length>0});return Yf.useEffect(()=>{if(!j&&window.location.hash){const u=window.location.hash.substring(1);setTimeout(()=>{const h=document.getElementById(u);h&&h.scrollIntoView({behavior:"smooth"})},100)}},[j,g.length]),i.jsxs("div",{className:"home-container",children:[i.jsx(Yh,{}),i.jsx(Gh,{}),g.map((u,h)=>i.jsx(Qh,{categoryId:u,index:h},u)),i.jsx(Xh,{}),i.jsx(Vh,{}),i.jsx(Vf,{}),i.jsx(Kf,{}),i.jsx(Jf,{})]})},Kh=()=>{const{navigate:s}=tt();return i.jsxs("div",{className:"partner-page",children:[i.jsx("div",{className:"container partner-container",children:i.jsxs("div",{className:"partner-content",children:[i.jsxs("button",{onClick:()=>s("/"),className:"back-btn",children:[i.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("path",{d:"M19 12H5",stroke:"#111",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M12 19L5 12L12 5",stroke:"#111",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),"Back to Home"]}),i.jsxs("div",{className:"partner-info",children:[i.jsxs("h1",{children:["Join the Zervo Company ",i.jsx("br",{})," Partner Network"]}),i.jsx("p",{className:"subtitle",children:"Are you an expert in your field, ready to showcase your skills and grow your business?"}),i.jsx("p",{className:"description",children:"Join Zervo Company as a trusted service provider and connect with potential clients who need your expertise!"}),i.jsxs("div",{className:"contact-details",children:[i.jsxs("p",{children:["Call us: ",i.jsx("strong",{children:"+91 83540 67979"})]}),i.jsxs("p",{children:["Email us: ",i.jsx("strong",{children:"business@zervocompany.com"})]})]}),i.jsx("div",{className:"cta-grow",children:i.jsx("p",{children:"Let's grow together and unlock new opportunities!"})}),i.jsxs("div",{className:"social-icons",children:[i.jsx("a",{href:"#",className:"social-icon",children:"in"}),i.jsx("a",{href:"#",className:"social-icon",children:"Instagram"}),i.jsx("a",{href:"#",className:"social-icon",children:"Facebook"})]})]}),i.jsx("div",{className:"partner-form-col",children:i.jsxs("form",{className:"partner-form",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Name"}),i.jsx("input",{type:"text",placeholder:"your name"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Phone Number"}),i.jsxs("div",{className:"phone-input-group",children:[i.jsx("span",{className:"flag-icon",children:"🇮🇳"}),i.jsx("span",{className:"country-code",children:"+91"}),i.jsx("input",{type:"tel",placeholder:""})]})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Service"}),i.jsx("input",{type:"text",placeholder:"service you provide"})]}),i.jsxs("div",{className:"form-group radio-group-container",children:[i.jsx("label",{children:"How did you know about Zervo Company?"}),i.jsxs("div",{className:"radio-option",children:[i.jsx("input",{type:"radio",name:"source",id:"social"}),i.jsx("label",{htmlFor:"social",children:"Social Media"})]}),i.jsxs("div",{className:"radio-option",children:[i.jsx("input",{type:"radio",name:"source",id:"friend"}),i.jsx("label",{htmlFor:"friend",children:"Recommended By Someone"})]}),i.jsxs("div",{className:"radio-option",children:[i.jsx("input",{type:"radio",name:"source",id:"other"}),i.jsx("label",{htmlFor:"other",children:"Other"})]})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Additional Message"}),i.jsx("textarea",{placeholder:"Type your message here..."})]}),i.jsx("p",{className:"form-note",children:"Any additional details or questions? (Optional)"}),i.jsxs("div",{className:"form-actions",children:[i.jsx("button",{type:"submit",className:"btn-submit",children:"Submit"}),i.jsx("button",{type:"button",className:"btn-whatsapp",children:"Send Whatsapp"})]})]})})]})}),i.jsx(Ml,{}),i.jsx("style",{children:`
                .partner-page {
                    min-height: 100vh;
                    background-color: #F9FAFB;
                    font-family: 'Inter', sans-serif;
                }
                
                .partner-container {
                    padding-top: 4rem;
                    padding-bottom: 4rem;
                }

                .partner-content {
                    position: relative;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 4rem;
                    justify-content: space-between;
                    padding-top: 2rem;
                }

                .back-btn {
                    position: absolute;
                    top: -20px;
                    left: 0;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: none;
                    border: none;
                    cursor: pointer;
                    font-size: 1rem;
                    font-weight: 500;
                    color: #111;
                    padding: 0;
                }
                
                .back-btn:hover {
                    text-decoration: underline;
                }

                .partner-info {
                    flex: 1;
                    min-width: 300px;
                    max-width: 500px;
                }

                .partner-info h1 {
                    font-size: 2.5rem;
                    line-height: 1.2;
                    font-weight: 800;
                    color: #111;
                    margin-bottom: 1.5rem;
                }

                .partner-info .subtitle {
                    font-size: 1.1rem;
                    color: #333;
                    margin-bottom: 1rem;
                    line-height: 1.5;
                }

                .partner-info .description {
                    font-size: 1rem;
                    color: #555;
                    margin-bottom: 2rem;
                    line-height: 1.6;
                }

                .contact-details p {
                    margin-bottom: 0.5rem;
                    color: #333;
                    font-size: 1rem;
                }

                .cta-grow {
                    margin-top: 2rem;
                    font-weight: 600;
                    font-size: 1.1rem;
                    color: #111;
                    margin-bottom: 2rem;
                }

                .social-icons {
                    display: flex;
                    gap: 1rem;
                }

                .social-icon {
                    font-size: 1.2rem;
                    color: #111;
                    text-decoration: none;
                    font-weight: 500;
                }

                .partner-form-col {
                    flex: 1;
                    min-width: 300px;
                    max-width: 500px;
                }

                .partner-form {
                    /* background: #fff; */
                    /* padding: 2rem; */
                    /* border-radius: 12px; */
                    /* box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); */
                }

                .form-group {
                    margin-bottom: 1.25rem;
                }

                .form-group label {
                    display: block;
                    font-size: 0.9rem;
                    font-weight: 500;
                    color: #374151;
                    margin-bottom: 0.5rem;
                }

                .form-group input[type="text"],
                .form-group input[type="tel"],
                .form-group textarea {
                    width: 100%;
                    padding: 0.75rem;
                    border: 1px solid #E5E7EB;
                    border-radius: 6px;
                    font-size: 0.95rem;
                    background: #fff;
                    color: #111;
                }
                
                .form-group textarea {
                    min-height: 100px;
                    resize: vertical;
                }

                .phone-input-group {
                    display: flex;
                    align-items: center;
                    border: 1px solid #E5E7EB;
                    border-radius: 6px;
                    background: #fff;
                    overflow: hidden;
                }
                
                .phone-input-group input {
                    border: none !important;
                    outline: none;
                    flex: 1;
                }

                .flag-icon {
                    padding-left: 0.75rem;
                    font-size: 1.2rem;
                }

                .country-code {
                    padding: 0 0.5rem;
                    color: #555;
                    font-weight: 500;
                    border-right: 1px solid #eee;
                    margin-right: 0.5rem;
                    height: 20px;
                    display: flex;
                    align-items: center;
                }

                .radio-group-container {
                    margin-top: 1.5rem;
                }

                .radio-option {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    margin-bottom: 0.5rem;
                }

                .radio-option input[type="radio"] {
                    accent-color: #111;
                    width: 16px;
                    height: 16px;
                }

                .radio-option label {
                    margin-bottom: 0;
                    font-weight: 400;
                    color: #4B5563;
                }

                .form-note {
                    font-size: 0.8rem;
                    color: #9CA3AF;
                    margin-bottom: 1.5rem;
                }

                .form-actions {
                    display: flex;
                    gap: 1rem;
                }

                .btn-submit {
                    background-color: #000;
                    color: #fff;
                    padding: 0.75rem 2rem;
                    border-radius: 8px;
                    border: none;
                    font-weight: 600;
                    cursor: pointer;
                    transition: opacity 0.2s;
                }
                
                .btn-submit:hover {
                    opacity: 0.9;
                }

                .btn-whatsapp {
                    background-color: #22c55e;
                    color: #fff;
                    padding: 0.75rem 1.5rem;
                    border-radius: 8px;
                    border: none;
                    font-weight: 600;
                    cursor: pointer;
                    transition: opacity 0.2s;
                }
                
                .btn-whatsapp:hover {
                    opacity: 0.9;
                }

                @media (max-width: 768px) {
                    .partner-container {
                        padding-top: 2rem;
                        padding-bottom: 2rem;
                    }

                    .partner-content {
                        flex-direction: column;
                        gap: 2.5rem;
                        padding-top: 1.5rem;
                    }
                    
                    .back-btn {
                        top: -10px;
                        font-size: 0.9rem;
                    }
                    
                    .partner-info h1 {
                        font-size: 1.75rem;
                        margin-bottom: 1rem;
                    }
                    
                    .partner-info .subtitle {
                        font-size: 1rem;
                    }
                    
                    .partner-form-col {
                         min-width: 100%;
                    }
                    
                    .form-actions {
                        flex-direction: column;
                    }
                    
                    .btn-submit, .btn-whatsapp {
                        width: 100%;
                    }
                }
            `})]})},Jh=({serviceName:s})=>{const{navigate:j}=tt(),[g,u]=D.useState({name:"",phone:"",date:"",timeslot:"",address:"",paymentMode:"cash"}),h=s?decodeURIComponent(s):"Service",N=B=>{const{name:_,value:b}=B.target;if(_==="phone"){const C=b.replace(/[^0-9]/g,"");u({...g,[_]:C})}else u({...g,[_]:b})},O=B=>{B.preventDefault();const _=`Hello Zervo Company, I want to book ${h}.
Details:
Name: ${g.name}
Phone: ${g.phone}
Date: ${g.date}
Time: ${g.timeslot}
Address: ${g.address}
Payment: ${g.paymentMode.toUpperCase()}`,b=encodeURIComponent(_);window.open(`https://wa.me/918354067979?text=${b}`,"_blank"),j("/")};return i.jsxs("div",{className:"booking-page",children:[i.jsxs("div",{className:"container booking-container",children:[i.jsxs("button",{onClick:()=>j(-1),className:"back-btn",children:[i.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("path",{d:"M19 12H5",stroke:"#111",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M12 19L5 12L12 5",stroke:"#111",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),"Back to previous page"]}),i.jsxs("div",{className:"booking-wrapper",children:[i.jsxs("div",{className:"booking-header",children:[i.jsxs("h1",{children:["Book ",i.jsx("span",{className:"highlight",children:h})]}),i.jsx("p",{children:"Complete your booking details below. Our professional will arrive at your scheduled time."})]}),i.jsxs("form",{className:"booking-form",onSubmit:O,children:[i.jsxs("div",{className:"form-section",children:[i.jsxs("h3",{children:[i.jsx("span",{className:"step-num",children:"1"})," Personal Details"]}),i.jsxs("div",{className:"form-grid",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Full Name"}),i.jsx("input",{type:"text",name:"name",placeholder:"Enter your name",required:!0,value:g.name,onChange:N})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Phone Number"}),i.jsx("input",{type:"tel",name:"phone",placeholder:"+91 Mobile Number",required:!0,value:g.phone,onChange:N})]})]})]}),i.jsxs("div",{className:"form-section",children:[i.jsxs("h3",{children:[i.jsx("span",{className:"step-num",children:"2"})," Schedule & Address"]}),i.jsxs("div",{className:"form-grid",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Select Date"}),i.jsx("input",{type:"date",name:"date",required:!0,value:g.date,onChange:N})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Select Time Slot"}),i.jsxs("select",{name:"timeslot",required:!0,value:g.timeslot,onChange:N,children:[i.jsx("option",{value:"",children:"Select a time"}),i.jsx("option",{value:"morning",children:"Morning (9 AM - 12 PM)"}),i.jsx("option",{value:"afternoon",children:"Afternoon (12 PM - 4 PM)"}),i.jsx("option",{value:"evening",children:"Evening (4 PM - 8 PM)"})]})]})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Service Address"}),i.jsx("textarea",{name:"address",placeholder:"Enter complete address, landmark, etc.",rows:"3",required:!0,value:g.address,onChange:N})]})]}),i.jsxs("div",{className:"form-section",children:[i.jsxs("h3",{children:[i.jsx("span",{className:"step-num",children:"3"})," Payment Method"]}),i.jsxs("div",{className:"payment-options",children:[i.jsxs("label",{className:`payment-option ${g.paymentMode==="cash"?"selected":""}`,children:[i.jsx("input",{type:"radio",name:"paymentMode",value:"cash",checked:g.paymentMode==="cash",onChange:N}),i.jsxs("div",{className:"payment-content",children:[i.jsx("span",{className:"payment-title",children:"Cash on Service"}),i.jsx("span",{className:"payment-desc",children:"Pay directly to the professional after service"})]})]}),i.jsxs("label",{className:`payment-option ${g.paymentMode==="upi"?"selected":""}`,children:[i.jsx("input",{type:"radio",name:"paymentMode",value:"upi",checked:g.paymentMode==="upi",onChange:N}),i.jsxs("div",{className:"payment-content",children:[i.jsx("span",{className:"payment-title",children:"UPI / QR Code"}),i.jsx("span",{className:"payment-desc",children:"GooglePay, PhonePe, Paytm (Scan on arrival)"})]})]}),i.jsxs("label",{className:`payment-option ${g.paymentMode==="card"?"selected":""}`,children:[i.jsx("input",{type:"radio",name:"paymentMode",value:"card",checked:g.paymentMode==="card",onChange:N}),i.jsxs("div",{className:"payment-content",children:[i.jsx("span",{className:"payment-title",children:"Debit / Credit Card"}),i.jsx("span",{className:"payment-desc",children:"Pay securely via link sent to your phone"})]})]})]})]}),i.jsxs("button",{type:"submit",className:"btn-confirm-booking",children:["Confirm Booking",i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("path",{d:"M5 12H19",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M12 5L19 12L12 19",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})]})]})]})]}),i.jsx("style",{children:`
                .booking-page {
                    min-height: 100vh;
                    background-color: #F3F4F6;
                    padding-bottom: 4rem;
                    font-family: 'Inter', sans-serif;
                }

                .booking-container {
                    padding-top: 2rem;
                    max-width: 800px;
                    margin: 0 auto;
                }

                .back-btn {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: none;
                    border: none;
                    cursor: pointer;
                    font-size: 0.95rem;
                    font-weight: 500;
                    color: #4B5563;
                    margin-bottom: 2rem;
                    transition: color 0.2s;
                }

                .back-btn:hover {
                    color: #111;
                }

                .booking-wrapper {
                    background: #fff;
                    border-radius: 20px;
                    padding: 3rem;
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
                }

                .booking-header {
                    margin-bottom: 3rem;
                    text-align: center;
                    border-bottom: 1px solid #F3F4F6;
                    padding-bottom: 2rem;
                }

                .booking-header h1 {
                    font-size: 2.25rem;
                    font-weight: 800;
                    color: #111;
                    margin-bottom: 0.75rem;
                }

                .booking-header .highlight {
                    color: #6366f1;
                }

                .booking-header p {
                    color: #6B7280;
                    font-size: 1.1rem;
                }

                .form-section {
                    margin-bottom: 3rem;
                }

                .form-section h3 {
                    font-size: 1.1rem;
                    font-weight: 600;
                    color: #1F2937;
                    margin-bottom: 1.5rem;
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }

                .step-num {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 28px;
                    height: 28px;
                    background-color: #EEF2FF;
                    color: #4F46E5;
                    border-radius: 50%;
                    font-size: 0.85rem;
                    font-weight: 700;
                }

                .form-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.5rem;
                }

                .form-group {
                    margin-bottom: 1rem;
                }

                .form-group label {
                    display: block;
                    font-size: 0.9rem;
                    font-weight: 500;
                    color: #374151;
                    margin-bottom: 0.5rem;
                }

                .form-group input,
                .form-group select,
                .form-group textarea {
                    width: 100%;
                    padding: 0.85rem;
                    border: 1px solid #D1D5DB;
                    border-radius: 8px;
                    font-size: 0.95rem;
                    background: #fff;
                    color: #111;
                    transition: border-color 0.15s, box-shadow 0.15s;
                }
                
                .form-group input:focus,
                .form-group select:focus,
                .form-group textarea:focus {
                    outline: none;
                    border-color: #6366f1;
                    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
                }

                .payment-options {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 1rem;
                }

                .payment-option {
                    display: flex;
                    align-items: flex-start;
                    padding: 1.25rem;
                    border: 1px solid #E5E7EB;
                    border-radius: 12px;
                    cursor: pointer;
                    transition: all 0.2s;
                    position: relative;
                }

                .payment-option:hover {
                    border-color: #cbd5e1;
                    background-color: #F8FAFC;
                }

                .payment-option.selected {
                    border-color: #6366f1;
                    background-color: #EEF2FF;
                    box-shadow: 0 4px 6px -1px rgba(99, 102, 241, 0.1);
                }

                .payment-option input[type="radio"] {
                    margin-top: 0.25rem;
                    margin-right: 1rem;
                    width: 18px;
                    height: 18px;
                    accent-color: #6366f1;
                }

                .payment-content {
                    display: flex;
                    flex-direction: column;
                }

                .payment-title {
                    font-weight: 600;
                    color: #111;
                    font-size: 1rem;
                    margin-bottom: 0.25rem;
                }

                .payment-desc {
                    font-size: 0.85rem;
                    color: #6B7280;
                }

                .btn-confirm-booking {
                    width: 100%;
                    padding: 1.25rem;
                    background-color: #111827;
                    color: #fff;
                    font-weight: 700;
                    font-size: 1.1rem;
                    border: none;
                    border-radius: 12px;
                    cursor: pointer;
                    transition: transform 0.1s, opacity 0.2s;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.75rem;
                    margin-top: 1rem;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                }

                .btn-confirm-booking:hover {
                    opacity: 0.9;
                    transform: translateY(-1px);
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                }

                .btn-confirm-booking:active {
                    transform: translateY(0);
                }

                @media (max-width: 640px) {
                    .form-grid {
                        grid-template-columns: 1fr;
                    }
                    .booking-wrapper {
                        padding: 1.5rem;
                    }
                    .booking-header h1 {
                        font-size: 1.75rem;
                    }
                }
            `})]})},Wh=()=>{const{navigate:s}=tt();return i.jsxs("div",{className:"contact-page",children:[i.jsx(Cn,{}),i.jsxs("div",{className:"container contact-container",children:[i.jsxs("div",{className:"contact-header",children:[i.jsx("h1",{children:"Get in Touch"}),i.jsx("p",{children:"Have questions about our services or need assistance? We're here to help."})]}),i.jsxs("div",{className:"contact-content",children:[i.jsxs("div",{className:"contact-info-card",children:[i.jsx("h2",{children:"Contact Information"}),i.jsxs("div",{className:"info-item",children:[i.jsx("span",{className:"icon",children:"📞"}),i.jsxs("div",{children:[i.jsx("h3",{children:"Phone / WhatsApp"}),i.jsx("p",{children:i.jsx("a",{href:"https://wa.me/918354067979",target:"_blank",rel:"noopener noreferrer",style:{color:"inherit",textDecoration:"none"},children:"+91 83540 67979"})})]})]}),i.jsxs("div",{className:"info-item",children:[i.jsx("span",{className:"icon",children:"✉️"}),i.jsxs("div",{children:[i.jsx("h3",{children:"Email"}),i.jsx("p",{children:"contact@zervocompany.com"})]})]}),i.jsxs("div",{className:"info-item",children:[i.jsx("span",{className:"icon",children:"📍"}),i.jsxs("div",{children:[i.jsx("h3",{children:"Office"}),i.jsx("p",{children:"Uttar Pradesh, India"})]})]}),i.jsxs("div",{className:"social-links",children:[i.jsx("h3",{children:"Follow Us"}),i.jsxs("div",{className:"social-icons",children:[i.jsx("a",{href:"#",className:"social-icon",children:"Instagram"}),i.jsx("a",{href:"#",className:"social-icon",children:"Facebook"}),i.jsx("a",{href:"#",className:"social-icon",children:"LinkedIn"})]})]})]}),i.jsxs("div",{className:"contact-form-card",children:[i.jsx("h2",{children:"Send us a Message"}),i.jsxs("form",{className:"contact-form",onSubmit:j=>{j.preventDefault();const g=new FormData(j.target),u=g.get("name"),h=g.get("email"),N=g.get("phone"),O=g.get("message"),B=`Hello Zervo Company, I have an inquiry:

Name: ${u}
Email: ${h}
Phone: ${N}
Message: ${O}`;window.open(`https://wa.me/918354067979?text=${encodeURIComponent(B)}`,"_blank")},children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Name"}),i.jsx("input",{type:"text",name:"name",placeholder:"Your Name",required:!0})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Email"}),i.jsx("input",{type:"email",name:"email",placeholder:"Your Email",required:!0})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Phone"}),i.jsx("input",{type:"tel",name:"phone",placeholder:"Your Phone Number",onInput:j=>{j.target.value=j.target.value.replace(/[^0-9]/g,"")},required:!0})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Message"}),i.jsx("textarea",{name:"message",placeholder:"How can we help you?",required:!0})]}),i.jsx("button",{type:"submit",className:"btn-submit",children:"Send Message"})]})]})]})]}),i.jsx(Ml,{}),i.jsx("style",{children:`
                .contact-page {
                    min-height: 100vh;
                    background-color: #F9FAFB;
                    font-family: 'Inter', sans-serif;
                }

                .contact-container {
                    padding-top: 4rem;
                    padding-bottom: 6rem;
                }

                .contact-header {
                    text-align: center;
                    margin-bottom: 4rem;
                }

                .contact-header h1 {
                    font-size: 2.5rem;
                    font-weight: 800;
                    color: #111;
                    margin-bottom: 1rem;
                }

                .contact-header p {
                    font-size: 1.1rem;
                    color: #666;
                    max-width: 600px;
                    margin: 0 auto;
                }

                .contact-content {
                    display: grid;
                    grid-template-columns: 1fr 1.5fr;
                    gap: 3rem;
                }

                .contact-info-card, .contact-form-card {
                    background: #fff;
                    padding: 2.5rem;
                    border-radius: 16px;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
                }

                .contact-info-card h2, .contact-form-card h2 {
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin-bottom: 2rem;
                    color: #111;
                }

                .info-item {
                    display: flex;
                    gap: 1rem;
                    margin-bottom: 2rem;
                }

                .info-item .icon {
                    font-size: 1.5rem;
                    background: #F3F4F6;
                    width: 50px;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 12px;
                }

                .info-item h3 {
                    font-size: 0.9rem;
                    font-weight: 600;
                    color: #4B5563;
                    margin-bottom: 0.25rem;
                }

                .info-item p {
                    font-size: 1rem;
                    font-weight: 500;
                    color: #111;
                }

                .social-links h3 {
                    font-size: 1rem;
                    margin-bottom: 1rem;
                }

                .social-icons {
                    display: flex;
                    gap: 1rem;
                }

                .social-icon {
                    color: #111;
                    text-decoration: none;
                    font-weight: 500;
                    padding: 0.5rem 1rem;
                    background: #F3F4F6;
                    border-radius: 8px;
                    font-size: 0.9rem;
                    transition: background 0.2s;
                }

                .social-icon:hover {
                    background: #E5E7EB;
                }

                .form-group {
                    margin-bottom: 1.5rem;
                }

                .form-group label {
                    display: block;
                    font-size: 0.9rem;
                    font-weight: 500;
                    margin-bottom: 0.5rem;
                    color: #374151;
                }

                .form-group input, .form-group textarea {
                    width: 100%;
                    padding: 0.75rem;
                    border: 1px solid #E5E7EB;
                    border-radius: 8px;
                    font-size: 1rem;
                    outline: none;
                    transition: border-color 0.2s;
                }

                .form-group input:focus, .form-group textarea:focus {
                    border-color: #111;
                }

                .form-group textarea {
                    min-height: 150px;
                    resize: vertical;
                }

                .btn-submit {
                    width: 100%;
                    padding: 1rem;
                    background: #111;
                    color: #fff;
                    border: none;
                    border-radius: 8px;
                    font-size: 1rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: opacity 0.2s;
                }

                .btn-submit:hover {
                    opacity: 0.9;
                }

                @media (max-width: 900px) {
                    .contact-content {
                        grid-template-columns: 1fr;
                        gap: 2rem;
                    }

                    .contact-header h1 {
                        font-size: 2rem;
                    }
                    
                    .contact-container {
                        padding-top: 2rem;
                        padding-bottom: 4rem;
                    }
                }

                @media (max-width: 600px) {
                    .contact-info-card, .contact-form-card {
                        padding: 1.5rem;
                    }

                    .contact-header {
                        margin-bottom: 2.5rem;
                    }

                    .contact-header h1 {
                        font-size: 1.75rem;
                    }

                    .info-item {
                        flex-direction: column;
                        gap: 0.5rem;
                        align-items: flex-start;
                    }

                    .info-item .icon {
                        width: 40px;
                        height: 40px;
                        font-size: 1.25rem;
                    }
                    
                    .social-icons {
                        flex-wrap: wrap;
                    }
                    
                    .social-icon {
                        flex: 1;
                        text-align: center;
                    }
                }
            `})]})},Fh=()=>i.jsxs("div",{className:"about-page",children:[i.jsx(Cn,{}),i.jsxs("div",{className:"container policy-container",children:[i.jsx("h1",{children:"About Zervo Company"}),i.jsx("p",{className:"last-updated",children:"Welcome to Zervo Company!"}),i.jsxs("section",{children:[i.jsx("h2",{children:"Our Story"}),i.jsx("p",{children:"Zervo Company was founded with a simple yet powerful vision: to make high-quality home wall and ceiling solutions accessible, reliable, and transparent for everyone. We realized that transforming your space shouldn't be a stressful experience."})]}),i.jsxs("section",{children:[i.jsx("h2",{children:"What We Do"}),i.jsx("p",{children:"We are a leading home services platform that connects homeowners with certified, background-verified professionals. From routine maintenance to emergency repairs, we handle it all with precision and care."}),i.jsxs("ul",{children:[i.jsx("li",{children:"Expert Painting & Wall Modelling"}),i.jsx("li",{children:"Water Proofing & Tile Grouting"}),i.jsx("li",{children:"Wall paper & Wood Polish"}),i.jsx("li",{children:"Modern False Ceiling Designs"})]})]}),i.jsxs("section",{children:[i.jsx("h2",{children:"Our Mission"}),i.jsx("p",{children:"To empower local service professionals while providing customers with a seamless, technology-driven booking experience. We believe in fair pricing, exceptional quality, and 100% customer satisfaction."})]}),i.jsxs("section",{children:[i.jsx("h2",{children:"Why Choose Us?"}),i.jsx("p",{children:"At Zervo Company, we don't just fix things; we build trust. Our Commitment to quality and safety is what sets us apart."})]})]}),i.jsx(Ml,{}),i.jsx("style",{children:`
                .about-page { background: #f9fafb; min-height: 100vh; }
                .policy-container { padding: 4rem 1rem; max-width: 800px; margin: 0 auto; color: #374151; }
                .policy-container h1 { font-size: 2.5rem; font-weight: 800; color: #111; margin-bottom: 1rem; }
                .last-updated { color: #6b7280; margin-bottom: 2rem; }
                .policy-container h2 { font-size: 1.5rem; font-weight: 700; color: #111; margin-top: 2rem; margin-bottom: 1rem; }
                .policy-container p { line-height: 1.6; margin-bottom: 1rem; }
                .policy-container ul { margin-left: 1.5rem; margin-bottom: 1rem; }
                .policy-container li { margin-bottom: 0.5rem; }
            `})]}),$h=()=>{const[s,j]=D.useState({title:"Privacy Policy",content:"",updated_at:null}),[g,u]=D.useState(!0);D.useEffect(()=>{Zf("privacy").then(N=>j(N)).catch(()=>{}).finally(()=>u(!1))},[]);const h=s.updated_at?new Date(s.updated_at).toLocaleDateString("en-IN",{year:"numeric",month:"long",day:"numeric"}):null;return i.jsxs("div",{className:"policy-page",children:[i.jsx(Cn,{}),i.jsxs("div",{className:"container policy-container",children:[i.jsx("h1",{children:s.title}),h&&i.jsxs("p",{className:"last-updated",children:["Last updated: ",h]}),g?i.jsx("p",{children:"Loading…"}):i.jsx("div",{className:"policy-content",dangerouslySetInnerHTML:{__html:s.content||"<p>No content yet.</p>"}})]}),i.jsx(Ml,{}),i.jsx("style",{children:`
                .policy-page { background: #f9fafb; min-height: 100vh; }
                .policy-container { padding: 4rem 1rem; max-width: 800px; margin: 0 auto; color: #374151; }
                .policy-container h1 { font-size: 2.5rem; font-weight: 800; color: #111; margin-bottom: 1rem; }
                .last-updated { color: #6b7280; margin-bottom: 2rem; }
                .policy-content h2 { font-size: 1.5rem; font-weight: 700; color: #111; margin-top: 2rem; margin-bottom: 1rem; }
                .policy-content p { line-height: 1.6; margin-bottom: 1rem; }
                .policy-content ul, .policy-content ol { margin-bottom: 1rem; padding-left: 1.5rem; }
                .policy-content li { margin-bottom: 0.35rem; }
                .policy-content section { margin-bottom: 2rem; }
            `})]})},Ph=()=>{const[s,j]=D.useState({title:"Terms and Conditions",content:"",updated_at:null}),[g,u]=D.useState(!0);D.useEffect(()=>{Zf("terms").then(N=>j(N)).catch(()=>{}).finally(()=>u(!1))},[]);const h=s.updated_at?new Date(s.updated_at).toLocaleDateString("en-IN",{year:"numeric",month:"long",day:"numeric"}):null;return i.jsxs("div",{className:"policy-page",children:[i.jsx(Cn,{}),i.jsxs("div",{className:"container policy-container",children:[i.jsx("h1",{children:s.title}),h&&i.jsxs("p",{className:"last-updated",children:["Last updated: ",h]}),g?i.jsx("p",{children:"Loading…"}):i.jsx("div",{className:"policy-content",dangerouslySetInnerHTML:{__html:s.content||"<p>No content yet.</p>"}})]}),i.jsx(Ml,{}),i.jsx("style",{children:`
                .policy-page { background: #f9fafb; min-height: 100vh; }
                .policy-container { padding: 4rem 1rem; max-width: 800px; margin: 0 auto; color: #374151; }
                .policy-container h1 { font-size: 2.5rem; font-weight: 800; color: #111; margin-bottom: 1rem; }
                .last-updated { color: #6b7280; margin-bottom: 2rem; }
                .policy-content h2 { font-size: 1.5rem; font-weight: 700; color: #111; margin-top: 2rem; margin-bottom: 1rem; }
                .policy-content p { line-height: 1.6; margin-bottom: 1rem; }
                .policy-content ul, .policy-content ol { margin-bottom: 1rem; padding-left: 1.5rem; }
                .policy-content li { margin-bottom: 0.35rem; }
                .policy-content section { margin-bottom: 2rem; }
            `})]})},Ih=()=>{const{navigate:s}=tt(),[j,g]=D.useState(""),[u,h]=D.useState(""),[N,O]=D.useState(""),[B,_]=D.useState(!1),b=async C=>{C.preventDefault(),O(""),_(!0);try{const{token:M}=await kh(j,u);localStorage.setItem("admin_token",M),s("/admin"),window.location.reload()}catch(M){O(M.message||"Login failed")}finally{_(!1)}};return i.jsxs("div",{className:"admin-login-page",children:[i.jsxs("div",{className:"admin-login-card",children:[i.jsx("h1",{children:"Admin Panel"}),i.jsx("p",{className:"admin-login-sub",children:"Zervo Company"}),i.jsxs("form",{onSubmit:b,children:[i.jsx("input",{type:"text",placeholder:"Username",value:j,onChange:C=>g(C.target.value),required:!0,autoComplete:"username"}),i.jsx("input",{type:"password",placeholder:"Password",value:u,onChange:C=>h(C.target.value),required:!0,autoComplete:"current-password"}),N&&i.jsx("p",{className:"admin-login-error",children:N}),i.jsx("button",{type:"submit",disabled:B,children:B?"Signing in…":"Sign in"})]})]}),i.jsx("style",{children:`
        .admin-login-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          padding: 1rem;
        }
        .admin-login-card {
          background: #fff;
          padding: 2.5rem;
          border-radius: 16px;
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
          width: 100%;
          max-width: 380px;
        }
        .admin-login-card h1 { font-size: 1.75rem; margin-bottom: 0.25rem; color: #111; }
        .admin-login-sub { color: #6b7280; margin-bottom: 1.5rem; font-size: 0.95rem; }
        .admin-login-card input {
          width: 100%;
          padding: 0.75rem 1rem;
          margin-bottom: 1rem;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          font-size: 1rem;
        }
        .admin-login-card input:focus {
          outline: none;
          border-color: #6366f1;
          box-shadow: 0 0 0 3px rgba(99,102,241,0.1);
        }
        .admin-login-error { color: #dc2626; font-size: 0.875rem; margin-bottom: 0.5rem; }
        .admin-login-card button {
          width: 100%;
          padding: 0.75rem;
          background: #6366f1;
          color: #fff;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          font-size: 1rem;
        }
        .admin-login-card button:hover:not(:disabled) { background: #4f46e5; }
        .admin-login-card button:disabled { opacity: 0.7; cursor: not-allowed; }
      `})]})},Wi=()=>({title:"",slug:"",description:"",rating:4.8,reviews_count:"1000+",hero_image:"",expert_image:"",about_title:"",about_description:"",sort_order:0}),ep=()=>{const[s,j]=D.useState([]),[g,u]=D.useState(!0),[h,N]=D.useState(""),[O,B]=D.useState(!1),[_,b]=D.useState(null),[C,M]=D.useState(Wi()),[X,F]=D.useState(""),H=D.useRef(null),G=D.useRef(null),Le=async()=>{u(!0),N("");try{const k=await Ee.categories.list();j(k)}catch(k){N(k.message)}finally{u(!1)}};D.useEffect(()=>{Le()},[]);const Te=async k=>{k.preventDefault(),N("");try{_?(await Ee.categories.update(_.id,{..._,...C}),b(null)):await Ee.categories.create(C),M(Wi()),B(!1),Le()}catch(te){N(te.message)}},$=async k=>{if(confirm("Delete this category and all its services?")){N("");try{await Ee.categories.delete(k),Le()}catch(te){N(te.message)}}},ce=k=>{b(k),M({title:k.title,slug:k.slug||"",description:k.description||"",rating:k.rating??4.8,reviews_count:k.reviews_count||"1000+",hero_image:k.hero_image||"",expert_image:k.expert_image||"",about_title:k.about_title||"",about_description:k.about_description||"",sort_order:k.sort_order||0}),B(!0)},Oe=()=>{b(null),M(Wi()),B(!0)},Fe=()=>{B(!1),b(null),M(Wi())},_e=async(k,te)=>{const $e=te.target.files?.[0];if(!$e)return;F(k),N("");const Qe=new FormData;Qe.append("image",$e);try{const Ue=await Ee.uploadImage(Qe);M(L=>({...L,[k]:Ue.image_url||""}))}catch(Ue){N(Ue.message)}finally{F(""),k==="hero_image"&&H.current&&(H.current.value=""),k==="expert_image"&&G.current&&(G.current.value="")}},U=k=>k&&(k.startsWith("http")?k:Ct(k))||"";return i.jsxs("div",{className:"admin-panel",children:[i.jsxs("header",{className:"admin-panel-header",children:[i.jsx("h1",{children:"Categories"}),i.jsx("p",{className:"admin-panel-desc",children:"Manage service categories (e.g. Painting, Water proofing). Services are added under each category in the Services panel."}),i.jsx("button",{type:"button",className:"admin-btn primary",onClick:Oe,children:"+ Add Category"})]}),h&&i.jsx("div",{className:"admin-message error",children:h}),O&&i.jsxs("div",{className:"admin-form-card",children:[i.jsx("h2",{children:_?"Edit Category":"New Category"}),i.jsxs("form",{onSubmit:Te,children:[i.jsxs("div",{className:"admin-form-grid",children:[i.jsx("label",{children:"Title *"}),i.jsx("input",{value:C.title,onChange:k=>M(te=>({...te,title:k.target.value})),required:!0,placeholder:"e.g. Painting"}),i.jsx("label",{children:"Slug"}),i.jsx("input",{value:C.slug,onChange:k=>M(te=>({...te,slug:k.target.value})),placeholder:"e.g. painting (auto from title if empty)"}),i.jsx("label",{children:"Description"}),i.jsx("textarea",{value:C.description,onChange:k=>M(te=>({...te,description:k.target.value})),placeholder:"Short description",rows:2}),i.jsx("label",{children:"Rating"}),i.jsx("input",{type:"number",step:"0.1",min:"0",max:"5",value:C.rating,onChange:k=>M(te=>({...te,rating:parseFloat(k.target.value)||4.8}))}),i.jsx("label",{children:"Reviews count"}),i.jsx("input",{value:C.reviews_count,onChange:k=>M(te=>({...te,reviews_count:k.target.value})),placeholder:"e.g. 1000+"}),i.jsx("label",{children:"Hero image"}),i.jsxs("div",{className:"admin-image-row",children:[i.jsx("input",{type:"file",ref:H,accept:"image/*",onChange:k=>_e("hero_image",k),style:{display:"none"},id:"cat-hero-upload"}),i.jsx("label",{htmlFor:"cat-hero-upload",className:"admin-btn secondary",children:X==="hero_image"?"Uploading…":"Upload"}),i.jsx("input",{value:C.hero_image,onChange:k=>M(te=>({...te,hero_image:k.target.value})),placeholder:"Or paste URL"}),C.hero_image&&i.jsx("img",{src:U(C.hero_image),alt:"",className:"admin-thumb"})]}),i.jsx("label",{children:"Expert image"}),i.jsxs("div",{className:"admin-image-row",children:[i.jsx("input",{type:"file",ref:G,accept:"image/*",onChange:k=>_e("expert_image",k),style:{display:"none"},id:"cat-expert-upload"}),i.jsx("label",{htmlFor:"cat-expert-upload",className:"admin-btn secondary",children:X==="expert_image"?"Uploading…":"Upload"}),i.jsx("input",{value:C.expert_image,onChange:k=>M(te=>({...te,expert_image:k.target.value})),placeholder:"Or paste URL"}),C.expert_image&&i.jsx("img",{src:U(C.expert_image),alt:"",className:"admin-thumb"})]}),i.jsx("label",{children:"About title"}),i.jsx("input",{value:C.about_title,onChange:k=>M(te=>({...te,about_title:k.target.value}))}),i.jsx("label",{children:"About description"}),i.jsx("textarea",{value:C.about_description,onChange:k=>M(te=>({...te,about_description:k.target.value})),rows:4})]}),i.jsxs("div",{className:"admin-form-actions",children:[i.jsx("button",{type:"submit",className:"admin-btn primary",children:_?"Save":"Create"}),i.jsx("button",{type:"button",className:"admin-btn secondary",onClick:Fe,children:"Cancel"})]})]})]}),g?i.jsx("div",{className:"admin-loading",children:"Loading…"}):i.jsx("div",{className:"admin-cards",children:s.map(k=>i.jsxs("div",{className:"admin-card",children:[i.jsxs("div",{className:"admin-card-preview",children:[k.hero_image&&i.jsx("img",{src:k.hero_image.startsWith("http")?k.hero_image:Ct(k.hero_image),alt:""}),i.jsxs("div",{className:"admin-card-info",children:[i.jsx("h3",{children:k.title}),i.jsx("span",{className:"admin-card-meta",children:k.slug}),i.jsx("p",{className:"admin-card-desc",children:k.description||"—"})]})]}),i.jsxs("div",{className:"admin-card-actions",children:[i.jsx("button",{type:"button",className:"admin-btn small",onClick:()=>ce(k),children:"Edit"}),i.jsx("button",{type:"button",className:"admin-btn small danger",onClick:()=>$(k.id),children:"Delete"})]})]},k.id))}),!g&&s.length===0&&i.jsx("div",{className:"admin-empty",children:"No categories yet. Add one to get started."}),i.jsx("style",{children:`
        .admin-panel { max-width: 900px; }
        .admin-panel-header { margin-bottom: 1.5rem; }
        .admin-panel-header h1 { font-size: 1.5rem; font-weight: 700; color: #0f172a; margin-bottom: 0.25rem; }
        .admin-panel-desc { color: #64748b; font-size: 0.9rem; margin-bottom: 1rem; }
        .admin-btn { padding: 0.5rem 1rem; border-radius: 8px; font-weight: 500; cursor: pointer; border: 1px solid transparent; font-size: 0.9rem; }
        .admin-btn.primary { background: #6366f1; color: #fff; }
        .admin-btn.primary:hover { background: #4f46e5; }
        .admin-btn.secondary { background: #f1f5f9; color: #475569; margin-left: 0.5rem; }
        .admin-btn.small { padding: 0.35rem 0.75rem; font-size: 0.8rem; }
        .admin-btn.danger { background: #fef2f2; color: #dc2626; border-color: #fecaca; }
        .admin-btn.danger:hover { background: #fee2e2; }
        .admin-message { padding: 0.75rem; border-radius: 8px; margin-bottom: 1rem; }
        .admin-message.error { background: #fef2f2; color: #dc2626; }
        .admin-form-card { background: #fff; border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.08); }
        .admin-form-card h2 { font-size: 1.1rem; margin-bottom: 1rem; }
        .admin-form-grid { display: grid; grid-template-columns: 120px 1fr; gap: 0.75rem 1rem; align-items: start; margin-bottom: 1rem; }
        .admin-form-grid label { padding-top: 0.5rem; font-size: 0.875rem; color: #475569; }
        .admin-form-grid input, .admin-form-grid textarea { padding: 0.5rem; border: 1px solid #e2e8f0; border-radius: 6px; font-size: 0.9rem; }
        .admin-form-actions { display: flex; align-items: center; }
        .admin-cards { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1rem; }
        .admin-card { background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.08); border: 1px solid #e2e8f0; }
        .admin-card-preview { padding: 1rem; }
        .admin-card-preview img { width: 100%; height: 120px; object-fit: cover; border-radius: 8px; margin-bottom: 0.75rem; }
        .admin-card-info h3 { font-size: 1rem; margin-bottom: 0.25rem; }
        .admin-card-meta { font-size: 0.75rem; color: #64748b; }
        .admin-card-desc { font-size: 0.85rem; color: #64748b; margin-top: 0.5rem; line-height: 1.4; }
        .admin-card-actions { padding: 0.75rem 1rem; border-top: 1px solid #f1f5f9; display: flex; gap: 0.5rem; }
        .admin-loading, .admin-empty { color: #64748b; padding: 2rem; text-align: center; }
        .admin-image-row { display: flex; flex-wrap: wrap; align-items: center; gap: 0.5rem; }
        .admin-image-row input[type="text"], .admin-image-row input[type="url"] { flex: 1; min-width: 120px; }
        .admin-thumb { width: 48px; height: 48px; object-fit: cover; border-radius: 6px; }
      `})]})},Fi=()=>({title:"",description:"",price:"",rating:4.8,image:"",is_most_booked:!1,sort_order:0}),tp=()=>{const[s,j]=D.useState([]),[g,u]=D.useState(null),[h,N]=D.useState([]),[O,B]=D.useState(!0),[_,b]=D.useState(""),[C,M]=D.useState(!1),[X,F]=D.useState(null),[H,G]=D.useState(Fi()),[Le,Te]=D.useState(!1),$=D.useRef(null),ce=async()=>{try{const L=await Ee.categories.list();j(L),L.length&&!g&&u(L[0].id)}catch(L){b(L.message)}},Oe=async()=>{if(!g)return N([]);B(!0);try{const L=await Ee.categories.subServices(g);N(L)}catch{N([])}finally{B(!1)}};D.useEffect(()=>{ce()},[]),D.useEffect(()=>{Oe()},[g]);const Fe=async L=>{if(L.preventDefault(),!!g){b("");try{X?(await Ee.subServices.update(X.id,{...X,...H}),F(null)):await Ee.categories.createSub(g,H),G(Fi()),M(!1),Oe()}catch(pe){b(pe.message)}}},_e=async L=>{if(confirm("Delete this service?")){b("");try{await Ee.subServices.delete(L),Oe()}catch(pe){b(pe.message)}}},U=L=>{F(L),G({title:L.title,description:L.description||"",price:L.price||"",rating:L.rating??4.8,image:L.image||"",is_most_booked:!!L.is_most_booked,sort_order:L.sort_order||0}),M(!0)},k=()=>{F(null),G(Fi()),M(!0)},te=()=>{M(!1),F(null),G(Fi())},$e=s.find(L=>L.id===g),Qe=async L=>{const pe=L.target.files?.[0];if(!pe)return;Te(!0),b("");const at=new FormData;at.append("image",pe);try{const w=await Ee.uploadImage(at);G(R=>({...R,image:w.image_url||""}))}catch(w){b(w.message)}finally{Te(!1),$.current&&($.current.value="")}},Ue=L=>L&&(L.startsWith("http")?L:Ct(L))||"";return i.jsxs("div",{className:"admin-panel",children:[i.jsxs("header",{className:"admin-panel-header",children:[i.jsx("h1",{children:"Services"}),i.jsx("p",{className:"admin-panel-desc",children:"Add and edit services (cards) under each category. Select a category below, then add or edit services."}),i.jsxs("div",{className:"admin-panel-toolbar",children:[i.jsxs("select",{value:g??"",onChange:L=>u(L.target.value?Number(L.target.value):null),className:"admin-select",children:[i.jsx("option",{value:"",children:"Select category"}),s.map(L=>i.jsxs("option",{value:L.id,children:[L.title," (",L.slug,")"]},L.id))]}),i.jsx("button",{type:"button",className:"admin-btn primary",onClick:k,disabled:!g,children:"+ Add Service"})]})]}),_&&i.jsx("div",{className:"admin-message error",children:_}),C&&g&&i.jsxs("div",{className:"admin-form-card",children:[i.jsxs("h2",{children:[X?"Edit Service":"New Service"," ",$e&&`under "${$e.title}"`]}),i.jsxs("form",{onSubmit:Fe,children:[i.jsxs("div",{className:"admin-form-grid",children:[i.jsx("label",{children:"Title *"}),i.jsx("input",{value:H.title,onChange:L=>G(pe=>({...pe,title:L.target.value})),required:!0,placeholder:"e.g. Full Home Painting"}),i.jsx("label",{children:"Description"}),i.jsx("textarea",{value:H.description,onChange:L=>G(pe=>({...pe,description:L.target.value})),rows:2,placeholder:"Short description"}),i.jsx("label",{children:"Price"}),i.jsx("input",{value:H.price,onChange:L=>G(pe=>({...pe,price:L.target.value})),placeholder:"e.g. 4999"}),i.jsx("label",{children:"Rating"}),i.jsx("input",{type:"number",step:"0.1",min:"0",max:"5",value:H.rating,onChange:L=>G(pe=>({...pe,rating:parseFloat(L.target.value)||4.8}))}),i.jsx("label",{children:"Image"}),i.jsxs("div",{className:"admin-image-row",children:[i.jsx("input",{type:"file",ref:$,accept:"image/*",onChange:Qe,style:{display:"none"},id:"svc-image-upload"}),i.jsx("label",{htmlFor:"svc-image-upload",className:"admin-btn secondary",children:Le?"Uploading…":"Upload image"}),i.jsx("input",{value:H.image,onChange:L=>G(pe=>({...pe,image:L.target.value})),placeholder:"Or paste URL"}),H.image&&i.jsx("img",{src:Ue(H.image),alt:"",className:"admin-thumb"})]}),i.jsx("label",{children:"Most booked"}),i.jsxs("label",{className:"admin-checkbox-label",children:[i.jsx("input",{type:"checkbox",checked:H.is_most_booked,onChange:L=>G(pe=>({...pe,is_most_booked:L.target.checked}))}),"Show as most booked"]})]}),i.jsxs("div",{className:"admin-form-actions",children:[i.jsx("button",{type:"submit",className:"admin-btn primary",children:X?"Save":"Create"}),i.jsx("button",{type:"button",className:"admin-btn secondary",onClick:te,children:"Cancel"})]})]})]}),g?O?i.jsx("div",{className:"admin-loading",children:"Loading…"}):i.jsx("div",{className:"admin-cards",children:h.map(L=>i.jsxs("div",{className:"admin-card",children:[i.jsxs("div",{className:"admin-card-preview",children:[L.image&&i.jsx("img",{src:L.image.startsWith("http")?L.image:Ct(L.image),alt:""}),i.jsxs("div",{className:"admin-card-info",children:[i.jsx("h3",{children:L.title}),i.jsxs("span",{className:"admin-card-meta",children:["₹",L.price||"—"," ",L.is_most_booked&&"• Most booked"]}),i.jsx("p",{className:"admin-card-desc",children:L.description||"—"})]})]}),i.jsxs("div",{className:"admin-card-actions",children:[i.jsx("button",{type:"button",className:"admin-btn small",onClick:()=>U(L),children:"Edit"}),i.jsx("button",{type:"button",className:"admin-btn small danger",onClick:()=>_e(L.id),children:"Delete"})]})]},L.id))}):i.jsx("div",{className:"admin-empty",children:"Select a category to manage its services."}),g&&!O&&h.length===0&&!C&&i.jsx("div",{className:"admin-empty",children:'No services in this category yet. Click "Add Service" to create one.'}),i.jsx("style",{children:`
        .admin-panel { max-width: 900px; }
        .admin-panel-header { margin-bottom: 1.5rem; }
        .admin-panel-header h1 { font-size: 1.5rem; font-weight: 700; color: #0f172a; margin-bottom: 0.25rem; }
        .admin-panel-desc { color: #64748b; font-size: 0.9rem; margin-bottom: 1rem; }
        .admin-panel-toolbar { display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap; }
        .admin-select { padding: 0.5rem 0.75rem; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 0.9rem; min-width: 200px; }
        .admin-btn { padding: 0.5rem 1rem; border-radius: 8px; font-weight: 500; cursor: pointer; border: 1px solid transparent; font-size: 0.9rem; }
        .admin-btn.primary { background: #6366f1; color: #fff; }
        .admin-btn.primary:hover:not(:disabled) { background: #4f46e5; }
        .admin-btn.primary:disabled { opacity: 0.6; cursor: not-allowed; }
        .admin-btn.secondary { background: #f1f5f9; color: #475569; margin-left: 0.5rem; }
        .admin-btn.small { padding: 0.35rem 0.75rem; font-size: 0.8rem; }
        .admin-btn.danger { background: #fef2f2; color: #dc2626; border-color: #fecaca; }
        .admin-message { padding: 0.75rem; border-radius: 8px; margin-bottom: 1rem; }
        .admin-message.error { background: #fef2f2; color: #dc2626; }
        .admin-form-card { background: #fff; border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.08); }
        .admin-form-card h2 { font-size: 1.1rem; margin-bottom: 1rem; }
        .admin-form-grid { display: grid; grid-template-columns: 120px 1fr; gap: 0.75rem 1rem; align-items: start; margin-bottom: 1rem; }
        .admin-form-grid label { padding-top: 0.5rem; font-size: 0.875rem; color: #475569; }
        .admin-form-grid input, .admin-form-grid textarea { padding: 0.5rem; border: 1px solid #e2e8f0; border-radius: 6px; font-size: 0.9rem; }
        .admin-checkbox-label { display: flex; align-items: center; gap: 0.5rem; cursor: pointer; }
        .admin-form-actions { display: flex; align-items: center; }
        .admin-cards { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1rem; }
        .admin-card { background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.08); border: 1px solid #e2e8f0; }
        .admin-card-preview { padding: 1rem; }
        .admin-card-preview img { width: 100%; height: 100px; object-fit: cover; border-radius: 8px; margin-bottom: 0.75rem; }
        .admin-card-info h3 { font-size: 1rem; margin-bottom: 0.25rem; }
        .admin-card-meta { font-size: 0.75rem; color: #64748b; }
        .admin-card-desc { font-size: 0.85rem; color: #64748b; margin-top: 0.5rem; line-height: 1.4; }
        .admin-card-actions { padding: 0.75rem 1rem; border-top: 1px solid #f1f5f9; display: flex; gap: 0.5rem; }
        .admin-loading, .admin-empty { color: #64748b; padding: 2rem; text-align: center; }
        .admin-image-row { display: flex; flex-wrap: wrap; align-items: center; gap: 0.5rem; }
        .admin-image-row input[type="text"] { flex: 1; min-width: 120px; }
        .admin-thumb { width: 48px; height: 48px; object-fit: cover; border-radius: 6px; }
      `})]})},ap=()=>{const[s,j]=D.useState([]),[g,u]=D.useState(!0),[h,N]=D.useState(""),[O,B]=D.useState({text:"",link_url:"",bg_color:"#6366f1",text_color:"#ffffff",sort_order:0}),[_,b]=D.useState(null),C=async()=>{u(!0),N("");try{const H=await Ee.topOfferBar.list();j(H)}catch(H){N(H.message)}finally{u(!1)}};D.useEffect(()=>{C()},[]);const M=async H=>{H.preventDefault(),N("");try{await Ee.topOfferBar.create(O),B({text:"",link_url:"",bg_color:"#6366f1",text_color:"#ffffff",sort_order:0}),C()}catch(G){N(G.message)}},X=async H=>{if(H.preventDefault(),!!_){N("");try{await Ee.topOfferBar.update(_.id,{..._,...O}),b(null),B({text:"",link_url:"",bg_color:"#6366f1",text_color:"#ffffff",sort_order:0}),C()}catch(G){N(G.message)}}},F=async H=>{if(confirm("Delete this offer bar?")){N("");try{await Ee.topOfferBar.delete(H),C()}catch(G){N(G.message)}}};return i.jsxs("div",{className:"admin-section",children:[i.jsx("h1",{children:"Top Offer Bar Management"}),h&&i.jsx("p",{className:"admin-error",children:h}),i.jsxs("form",{className:"admin-form admin-form-inline",onSubmit:M,children:[i.jsx("input",{placeholder:"Offer text",value:O.text,onChange:H=>B(G=>({...G,text:H.target.value})),required:!0}),i.jsx("input",{placeholder:"Link URL (optional)",value:O.link_url,onChange:H=>B(G=>({...G,link_url:H.target.value}))}),i.jsx("input",{type:"color",value:O.bg_color,onChange:H=>B(G=>({...G,bg_color:H.target.value})),title:"Background"}),i.jsx("input",{type:"color",value:O.text_color,onChange:H=>B(G=>({...G,text_color:H.target.value})),title:"Text"}),i.jsx("button",{type:"submit",children:"Add Offer Bar"})]}),g?i.jsx("p",{children:"Loading…"}):i.jsx("ul",{className:"admin-list",children:s.map(H=>i.jsxs("li",{className:"admin-offer-row",children:[i.jsx("div",{className:"admin-offer-preview",style:{background:H.bg_color,color:H.text_color},children:H.text}),i.jsxs("div",{className:"admin-offer-actions",children:[i.jsx("button",{type:"button",className:"admin-btn-sm",onClick:()=>{b(H),B({text:H.text,link_url:H.link_url||"",bg_color:H.bg_color||"#6366f1",text_color:H.text_color||"#fff",sort_order:H.sort_order||0})},children:"Edit"}),i.jsx("button",{type:"button",className:"admin-btn-sm danger",onClick:()=>F(H.id),children:"Delete"})]})]},H.id))}),_&&i.jsxs("form",{className:"admin-form",onSubmit:X,children:[i.jsx("h4",{children:"Edit offer bar"}),i.jsx("input",{placeholder:"Text",value:O.text,onChange:H=>B(G=>({...G,text:H.target.value}))}),i.jsx("input",{placeholder:"Link URL",value:O.link_url,onChange:H=>B(G=>({...G,link_url:H.target.value}))}),i.jsxs("label",{children:["Background: ",i.jsx("input",{type:"color",value:O.bg_color,onChange:H=>B(G=>({...G,bg_color:H.target.value}))})]}),i.jsxs("label",{children:["Text color: ",i.jsx("input",{type:"color",value:O.text_color,onChange:H=>B(G=>({...G,text_color:H.target.value}))})]}),i.jsx("button",{type:"submit",children:"Save"}),i.jsx("button",{type:"button",onClick:()=>b(null),children:"Cancel"})]}),i.jsx("style",{children:`
        .admin-section h1 { margin-bottom: 1rem; font-size: 1.5rem; }
        .admin-error { color: #dc2626; margin-bottom: 0.5rem; }
        .admin-form input { margin-right: 0.5rem; margin-bottom: 0.5rem; padding: 0.5rem; border: 1px solid #e5e7eb; border-radius: 6px; }
        .admin-form-inline { display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center; }
        .admin-list { list-style: none; padding: 0; }
        .admin-offer-row { display: flex; align-items: center; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid #e5e7eb; }
        .admin-offer-preview { padding: 0.5rem 1rem; border-radius: 8px; font-size: 0.9rem; min-width: 200px; }
        .admin-offer-actions .admin-btn-sm { margin-left: 0.25rem; }
        .admin-btn-sm { padding: 0.25rem 0.5rem; font-size: 0.8rem; border-radius: 6px; border: 1px solid #e5e7eb; background: #f8fafc; cursor: pointer; }
        .admin-btn-sm.danger { border-color: #fecaca; background: #fef2f2; color: #dc2626; }
      `})]})},lp=()=>{const[s,j]=D.useState([]),[g,u]=D.useState(!0),[h,N]=D.useState(""),[O,B]=D.useState(!1),[_,b]=D.useState(null),[C,M]=D.useState({slug:"",title:"",content:""}),X=async()=>{u(!0),N("");try{const $=await Ee.policyPages.list();j($)}catch($){N($.message)}finally{u(!1)}};D.useEffect(()=>{X()},[]);const F=async $=>{$.preventDefault(),N("");try{_?(await Ee.policyPages.update(_.id,{..._,...C}),b(null)):await Ee.policyPages.create(C),M({slug:"",title:"",content:""}),B(!1),X()}catch(ce){N(ce.message)}},H=async $=>{if(confirm("Delete this policy page?")){N("");try{await Ee.policyPages.delete($),X()}catch(ce){N(ce.message)}}},G=$=>{b($),M({slug:$.slug,title:$.title,content:$.content||""}),B(!0)},Le=()=>{b(null),M({slug:"",title:"",content:""}),B(!0)},Te=()=>{B(!1),b(null)};return i.jsxs("div",{className:"admin-page-container",children:[i.jsxs("div",{className:"admin-page-header",children:[i.jsxs("div",{className:"header-info",children:[i.jsx("h1",{children:"Policy Pages"}),i.jsx("p",{children:"Create and manage legal documents, privacy policies, and terms."})]}),!O&&i.jsxs("button",{type:"button",className:"btn-add",onClick:Le,children:[i.jsx("span",{className:"plus-icon",children:"+"})," New Policy Page"]})]}),h&&i.jsx("div",{className:"admin-error-banner",children:h}),O?i.jsxs("div",{className:"policy-form-card",children:[i.jsxs("div",{className:"form-header",children:[i.jsxs("h2",{children:[_?"Edit":"Create"," Policy Page"]}),i.jsxs("p",{children:["Fill in the details below to ",_?"update":"publish"," your policy."]})]}),i.jsxs("form",{onSubmit:F,className:"policy-form",children:[i.jsxs("div",{className:"form-grid",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Page Title"}),i.jsx("input",{value:C.title,onChange:$=>M(ce=>({...ce,title:$.target.value})),required:!0,placeholder:"e.g. Terms and Conditions"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"URL Slug"}),i.jsxs("div",{className:"slug-input-wrapper",children:[i.jsx("span",{className:"slug-prefix",children:"zervocompany.com/"}),i.jsx("input",{value:C.slug,onChange:$=>M(ce=>({...ce,slug:$.target.value})),required:!0,placeholder:"privacy"})]})]}),i.jsxs("div",{className:"form-group full-width",children:[i.jsx("label",{children:"Page Content (HTML Supported)"}),i.jsx("textarea",{value:C.content,onChange:$=>M(ce=>({...ce,content:$.target.value})),rows:15,placeholder:"<p>Enter your policy content here...</p>"})]})]}),i.jsxs("div",{className:"form-footer",children:[i.jsx("button",{type:"button",className:"btn-ghost",onClick:Te,children:"Cancel"}),i.jsx("button",{type:"submit",className:"btn-save",children:_?"Save Changes":"Create Page"})]})]})]}):i.jsx("div",{className:"policy-list-container",children:g?i.jsxs("div",{className:"admin-loading-state",children:[i.jsx("div",{className:"spinner"}),i.jsx("p",{children:"Fetching policies..."})]}):s.length===0?i.jsxs("div",{className:"admin-empty-state",children:[i.jsx("span",{className:"empty-icon",children:"📄"}),i.jsx("h3",{children:"No Policy Pages"}),i.jsx("p",{children:"You haven't created any legal pages yet. Get started by clicking the button above."})]}):i.jsx("div",{className:"policy-grid",children:s.map($=>i.jsxs("div",{className:"policy-card",children:[i.jsxs("div",{className:"policy-card-header",children:[i.jsx("div",{className:"policy-icon",children:"⚖️"}),i.jsxs("div",{className:"policy-info",children:[i.jsx("h3",{children:$.title}),i.jsxs("span",{className:"policy-slug",children:["/",$.slug]})]})]}),i.jsxs("div",{className:"policy-card-footer",children:[i.jsx("div",{className:"policy-date",children:$.updated_at&&`Updated ${new Date($.updated_at).toLocaleDateString()}`}),i.jsxs("div",{className:"policy-actions",children:[i.jsx("button",{type:"button",className:"action-btn edit",onClick:()=>G($),children:"Edit"}),i.jsx("button",{type:"button",className:"action-btn delete",onClick:()=>H($.id),children:"Delete"})]})]})]},$.id))})}),i.jsx("style",{children:`
        .admin-page-container {
          max-width: 1000px;
          margin: 0 auto;
        }

        .admin-page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .header-info h1 {
          font-size: 1.75rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 0.25rem;
        }

        .header-info p {
          color: #64748b;
          font-size: 0.95rem;
        }

        .btn-add {
          background: #6366f1;
          color: #fff;
          padding: 0.75rem 1.25rem;
          border-radius: 10px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 4px 6px -1px rgba(99,102,241,0.2);
          transition: all 0.2s;
        }

        .btn-add:hover {
          background: #4f46e5;
          transform: translateY(-1px);
        }

        .admin-error-banner {
          background: #fef2f2;
          border: 1px solid #fee2e2;
          color: #dc2626;
          padding: 1rem;
          border-radius: 10px;
          margin-bottom: 1.5rem;
          font-size: 0.9rem;
        }

        .policy-form-card {
          background: #fff;
          border-radius: 16px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 1px 3px rgba(0,0,0,0.05);
          overflow: hidden;
        }

        .form-header {
          padding: 1.5rem 2rem;
          border-bottom: 1px solid #e2e8f0;
        }

        .form-header h2 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #0f172a;
        }

        .form-header p {
          color: #64748b;
          font-size: 0.875rem;
        }

        .policy-form {
          padding: 2rem;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .form-group.full-width {
          grid-column: 1 / -1;
        }

        .form-group label {
          display: block;
          font-size: 0.875rem;
          font-weight: 600;
          color: #475569;
          margin-bottom: 0.5rem;
        }

        .form-group input, .form-group textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          font-size: 0.95rem;
          transition: all 0.2s;
        }

        .form-group input:focus, .form-group textarea:focus {
          outline: none;
          border-color: #6366f1;
          box-shadow: 0 0 0 3px rgba(99,102,241,0.1);
        }

        .slug-input-wrapper {
          display: flex;
          align-items: center;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          overflow: hidden;
        }

        .slug-prefix {
          padding: 0 0.75rem;
          color: #94a3b8;
          font-size: 0.9rem;
          background: #f1f5f9;
          border-right: 1px solid #e2e8f0;
          height: 100%;
          display: flex;
          align-items: center;
        }

        .slug-input-wrapper input {
          border: none;
          background: transparent;
          border-radius: 0;
        }

        .form-footer {
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid #e2e8f0;
          display: flex;
          justify-content: flex-end;
          gap: 1rem;
        }

        .btn-save {
          background: #0f172a;
          color: #fff;
          padding: 0.75rem 1.5rem;
          border-radius: 10px;
          font-weight: 600;
          transition: background 0.2s;
        }

        .btn-save:hover { background: #1e293b; }

        .btn-ghost {
          color: #64748b;
          font-weight: 600;
          padding: 0.75rem 1.5rem;
          border-radius: 10px;
          transition: background 0.2s;
        }

        .btn-ghost:hover { background: #f1f5f9; }

        .policy-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .policy-card {
          background: #fff;
          border-radius: 16px;
          border: 1px solid #e2e8f0;
          padding: 1.5rem;
          transition: all 0.2s;
        }

        .policy-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05);
        }

        .policy-card-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .policy-icon {
          width: 48px;
          height: 48px;
          background: #f1f5f9;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
        }

        .policy-info h3 {
          font-size: 1.125rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 0.125rem;
        }

        .policy-slug {
          font-size: 0.875rem;
          color: #6366f1;
          font-weight: 600;
        }

        .policy-card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1rem;
          border-top: 1px solid #f1f5f9;
        }

        .policy-date {
          font-size: 0.75rem;
          color: #94a3b8;
          font-weight: 500;
        }

        .policy-actions {
          display: flex;
          gap: 0.5rem;
        }

        .action-btn {
          padding: 0.4rem 0.75rem;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          transition: all 0.2s;
        }

        .action-btn.edit {
          color: #6366f1;
          background: #eef2ff;
        }

        .action-btn.edit:hover { background: #e0e7ff; }

        .action-btn.delete {
          color: #ef4444;
          background: #fef2f2;
        }

        .action-btn.delete:hover { background: #fee2e2; }

        .admin-loading-state, .admin-empty-state {
          padding: 4rem 2rem;
          text-align: center;
          background: #fff;
          border-radius: 16px;
          border: 1px dashed #e2e8f0;
          color: #64748b;
        }

        .empty-icon {
          font-size: 3rem;
          display: block;
          margin-bottom: 1rem;
        }

        .spinner {
          width: 30px;
          height: 30px;
          border: 3px solid #e2e8f0;
          border-top-color: #6366f1;
          border-radius: 50%;
          margin: 0 auto 1rem;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `})]})},$i=()=>({slug:"",title:"",excerpt:"",content:"",image_url:"",is_published:!1}),np=()=>{const[s,j]=D.useState([]),[g,u]=D.useState(!0),[h,N]=D.useState(""),[O,B]=D.useState(!1),[_,b]=D.useState(null),[C,M]=D.useState($i()),[X,F]=D.useState(!1),H=D.useRef(null),G=async()=>{u(!0),N("");try{const U=await Ee.blogs.list();j(U)}catch(U){N(U.message)}finally{u(!1)}};D.useEffect(()=>{G()},[]);const Le=async U=>{const k=U.target.files?.[0];if(!k)return;F(!0),N("");const te=new FormData;te.append("image",k);try{const $e=await Ee.blogs.uploadImage(te);M(Qe=>({...Qe,image_url:$e.image_url||""}))}catch($e){N($e.message)}finally{F(!1),H.current&&(H.current.value="")}},Te=async U=>{U.preventDefault(),N("");try{_?(await Ee.blogs.update(_.id,{..._,...C}),b(null)):await Ee.blogs.create(C),M($i()),B(!1),G()}catch(k){N(k.message)}},$=async U=>{if(confirm("Delete this blog?")){N("");try{await Ee.blogs.delete(U),G()}catch(k){N(k.message)}}},ce=U=>{b(U),M({slug:U.slug||"",title:U.title||"",excerpt:U.excerpt||"",content:U.content||"",image_url:U.image_url||"",is_published:!!U.is_published}),B(!0)},Oe=()=>{b(null),M($i()),B(!0)},Fe=()=>{B(!1),b(null),M($i())},_e=U=>U&&(U.startsWith("http")?U:Ct(U))||"";return i.jsxs("div",{className:"admin-panel",children:[i.jsxs("header",{className:"admin-panel-header",children:[i.jsx("h1",{children:"Blog Management"}),i.jsx("p",{className:"admin-panel-desc",children:"Create and edit blog posts. Add a featured image, excerpt, and content. Published posts appear on the site blog page."}),i.jsx("button",{type:"button",className:"admin-btn primary",onClick:Oe,children:"+ New Blog Post"})]}),h&&i.jsx("div",{className:"admin-message error",children:h}),O&&i.jsxs("div",{className:"admin-form-card admin-blog-form",children:[i.jsx("h2",{children:_?"Edit Blog":"New Blog Post"}),i.jsxs("form",{onSubmit:Te,children:[i.jsxs("div",{className:"admin-form-grid",children:[i.jsx("label",{children:"Title *"}),i.jsx("input",{value:C.title,onChange:U=>M(k=>({...k,title:U.target.value})),required:!0,placeholder:"Post title"}),i.jsx("label",{children:"Slug"}),i.jsx("input",{value:C.slug,onChange:U=>M(k=>({...k,slug:U.target.value})),placeholder:"URL slug (auto from title if empty)"}),i.jsx("label",{children:"Featured image"}),i.jsxs("div",{className:"admin-blog-image-row",children:[i.jsx("input",{type:"file",ref:H,accept:"image/*",onChange:Le,style:{display:"none"},id:"blog-image-upload"}),i.jsx("label",{htmlFor:"blog-image-upload",className:"admin-btn secondary",children:X?"Uploading…":"Upload image"}),i.jsx("input",{value:C.image_url,onChange:U=>M(k=>({...k,image_url:U.target.value})),placeholder:"Or paste image URL"}),C.image_url&&i.jsx("img",{src:_e(C.image_url),alt:"",className:"admin-blog-preview-img"})]}),i.jsx("label",{children:"Excerpt"}),i.jsx("textarea",{value:C.excerpt,onChange:U=>M(k=>({...k,excerpt:U.target.value})),rows:2,placeholder:"Short summary for cards",className:"admin-textarea-full"}),i.jsx("label",{children:"Content"}),i.jsx("textarea",{value:C.content,onChange:U=>M(k=>({...k,content:U.target.value})),rows:10,placeholder:"Full post content (HTML supported)",className:"admin-textarea-full"}),i.jsx("label",{children:"Publish"}),i.jsxs("label",{className:"admin-checkbox-label",children:[i.jsx("input",{type:"checkbox",checked:C.is_published,onChange:U=>M(k=>({...k,is_published:U.target.checked}))}),"Published (visible on site)"]})]}),i.jsxs("div",{className:"admin-form-actions",children:[i.jsx("button",{type:"submit",className:"admin-btn primary",children:_?"Save":"Create"}),i.jsx("button",{type:"button",className:"admin-btn secondary",onClick:Fe,children:"Cancel"})]})]})]}),g?i.jsx("div",{className:"admin-loading",children:"Loading…"}):i.jsx("div",{className:"admin-blog-cards",children:s.map(U=>i.jsxs("div",{className:"admin-card admin-blog-card",children:[i.jsxs("div",{className:"admin-card-preview",children:[U.image_url&&i.jsx("img",{src:_e(U.image_url),alt:"",className:"admin-blog-card-img"}),i.jsxs("div",{className:"admin-card-info",children:[i.jsx("h3",{children:U.title}),i.jsxs("span",{className:"admin-card-meta",children:[U.slug," ",U.is_published?"• Published":"• Draft"]}),i.jsx("p",{className:"admin-card-desc",children:U.excerpt||"—"}),U.created_at&&i.jsx("span",{className:"admin-card-date",children:new Date(U.created_at).toLocaleDateString()})]})]}),i.jsxs("div",{className:"admin-card-actions",children:[i.jsx("button",{type:"button",className:"admin-btn small",onClick:()=>ce(U),children:"Edit"}),i.jsx("button",{type:"button",className:"admin-btn small danger",onClick:()=>$(U.id),children:"Delete"})]})]},U.id))}),!g&&s.length===0&&i.jsx("div",{className:"admin-empty",children:"No blog posts yet. Create one to get started."}),i.jsx("style",{children:`
        .admin-panel { max-width: 960px; }
        .admin-panel-header { margin-bottom: 1.5rem; }
        .admin-panel-header h1 { font-size: 1.5rem; font-weight: 700; color: #0f172a; margin-bottom: 0.25rem; }
        .admin-panel-desc { color: #64748b; font-size: 0.9rem; margin-bottom: 1rem; }
        .admin-btn { padding: 0.5rem 1rem; border-radius: 8px; font-weight: 500; cursor: pointer; border: 1px solid transparent; font-size: 0.9rem; }
        .admin-btn.primary { background: #6366f1; color: #fff; }
        .admin-btn.secondary { background: #f1f5f9; color: #475569; margin-left: 0; margin-right: 0.5rem; }
        .admin-btn.small { padding: 0.35rem 0.75rem; font-size: 0.8rem; }
        .admin-btn.danger { background: #fef2f2; color: #dc2626; border-color: #fecaca; }
        .admin-message.error { background: #fef2f2; color: #dc2626; padding: 0.75rem; border-radius: 8px; margin-bottom: 1rem; }
        .admin-form-card { background: #fff; border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.08); }
        .admin-form-grid { display: grid; grid-template-columns: 120px 1fr; gap: 0.75rem 1rem; align-items: start; margin-bottom: 1rem; }
        .admin-form-grid label { padding-top: 0.5rem; font-size: 0.875rem; color: #475569; }
        .admin-form-grid input, .admin-form-grid textarea { padding: 0.5rem; border: 1px solid #e2e8f0; border-radius: 6px; font-size: 0.9rem; }
        .admin-textarea-full { grid-column: 1 / -1; margin-left: 0; min-height: 120px; }
        .admin-checkbox-label { display: flex; align-items: center; gap: 0.5rem; cursor: pointer; }
        .admin-form-actions { display: flex; align-items: center; }
        .admin-blog-image-row { display: flex; flex-direction: column; gap: 0.5rem; }
        .admin-blog-preview-img { max-width: 200px; max-height: 120px; object-fit: cover; border-radius: 8px; }
        .admin-blog-cards { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1rem; }
        .admin-blog-card .admin-card-preview { padding: 0; }
        .admin-blog-card-img { width: 100%; height: 160px; object-fit: cover; display: block; }
        .admin-blog-card .admin-card-info { padding: 1rem; }
        .admin-card { background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.08); border: 1px solid #e2e8f0; }
        .admin-card-info h3 { font-size: 1rem; margin-bottom: 0.25rem; }
        .admin-card-meta { font-size: 0.75rem; color: #64748b; display: block; margin-bottom: 0.25rem; }
        .admin-card-desc { font-size: 0.85rem; color: #64748b; line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .admin-card-date { font-size: 0.75rem; color: #94a3b8; margin-top: 0.5rem; display: block; }
        .admin-card-actions { padding: 0.75rem 1rem; border-top: 1px solid #f1f5f9; display: flex; gap: 0.5rem; }
        .admin-loading, .admin-empty { color: #64748b; padding: 2rem; text-align: center; }
      `})]})},wc=[{id:"categories",label:"Categories",icon:"📂"},{id:"services",label:"Services",icon:"📦"},{id:"top-offer",label:"Top Offer Bar",icon:"🏷️"},{id:"policy",label:"Policy Pages",icon:"📄"},{id:"blogs",label:"Blogs",icon:"✏️"}],ip=()=>{const{currentPath:s,navigate:j}=tt(),[g,u]=D.useState("categories"),[h,N]=D.useState("");D.useEffect(()=>{const b=s.replace("/admin","").replace(/^\//,"")||"categories",C=wc.find(M=>b===M.id);u(C?C.id:"categories")},[s]);const O=()=>{localStorage.removeItem("admin_token"),j("/admin"),window.location.reload()},B=_=>{u(_),j(_==="categories"?"/admin":`/admin/${_}`)};return i.jsxs("div",{className:"admin-dashboard",children:[i.jsxs("aside",{className:"admin-sidebar",children:[i.jsxs("div",{className:"admin-sidebar-header",children:[i.jsx("span",{className:"admin-logo",children:"Zervo Company"}),i.jsx("span",{className:"admin-role",children:"Control Panel"})]}),i.jsx("nav",{className:"admin-nav",children:wc.map(_=>i.jsxs("button",{className:`admin-nav-item ${g===_.id?"active":""}`,onClick:()=>B(_.id),children:[i.jsx("span",{className:"admin-nav-icon",children:_.icon}),_.label]},_.id))}),i.jsx("div",{className:"admin-sidebar-footer",children:i.jsx("button",{className:"admin-logout-btn",onClick:O,children:"Logout"})})]}),i.jsxs("div",{className:"admin-content-wrapper",children:[i.jsxs("header",{className:"admin-topbar",children:[i.jsx("div",{className:"topbar-left",children:i.jsx("h2",{className:"section-title",children:wc.find(_=>_.id===g)?.label||"Dashboard"})}),i.jsxs("div",{className:"topbar-right",children:[i.jsxs("div",{className:"topbar-search",children:[i.jsx("span",{className:"search-icon",children:"🔍"}),i.jsx("input",{type:"text",placeholder:"Search anything..."})]}),i.jsxs("div",{className:"topbar-actions",children:[i.jsx("button",{className:"icon-btn",children:"🔔"}),i.jsx("button",{className:"icon-btn",children:"⚙️"}),i.jsxs("div",{className:"user-profile",children:[i.jsx("div",{className:"user-avatar",children:"AD"}),i.jsxs("div",{className:"user-info",children:[i.jsx("span",{className:"user-name",children:"Administrator"}),i.jsx("span",{className:"user-status",children:"Online"})]})]})]})]})]}),i.jsxs("main",{className:"admin-main",children:[g==="categories"&&i.jsx(ep,{}),g==="services"&&i.jsx(tp,{}),g==="top-offer"&&i.jsx(ap,{}),g==="policy"&&i.jsx(lp,{}),g==="blogs"&&i.jsx(np,{})]})]}),i.jsx("style",{children:`
        .admin-dashboard { 
          display: flex; 
          min-height: 100vh; 
          background: #f1f5f9; 
          font-family: 'Inter', -apple-system, sans-serif;
        }
        
        .admin-sidebar {
          width: 250px; 
          background: #0f172a; 
          color: #fff; 
          display: flex; 
          flex-direction: column;
          flex-shrink: 0;
          position: sticky;
          top: 0;
          height: 100vh;
        }
        
        .admin-sidebar-header { 
          padding: 2rem 1.5rem; 
          border-bottom: 1px solid rgba(255,255,255,0.05); 
        }
        
        .admin-logo { 
          font-size: 1.5rem; 
          font-weight: 800; 
          letter-spacing: -0.025em;
          background: linear-gradient(135deg, #818cf8 0%, #6366f1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .admin-role { 
          display: block; 
          font-size: 0.75rem; 
          color: #94a3b8; 
          margin-top: 0.25rem; 
          font-weight: 500;
        }
        
        .admin-nav { 
          flex: 1; 
          padding: 1.5rem 0.75rem; 
        }
        
        .admin-nav-item {
          display: flex; 
          align-items: center; 
          gap: 0.75rem; 
          width: 100%; 
          padding: 0.75rem 1rem;
          background: none; 
          border: none; 
          color: #94a3b8; 
          cursor: pointer; 
          font-size: 0.95rem;
          font-weight: 500;
          text-align: left; 
          transition: all 0.2s;
          border-radius: 8px;
          margin-bottom: 0.25rem;
        }
        
        .admin-nav-item:hover { 
          background: rgba(255,255,255,0.05); 
          color: #fff; 
        }
        
        .admin-nav-item.active { 
          background: #6366f1; 
          color: #fff; 
          box-shadow: 0 4px 6px -1px rgba(99,102,241,0.2);
        }
        
        .admin-nav-icon { font-size: 1.1rem; }
        
        .admin-sidebar-footer { 
          padding: 1.5rem; 
          border-top: 1px solid rgba(255,255,255,0.05); 
        }
        
        .admin-logout-btn {
          width: 100%; 
          padding: 0.625rem; 
          background: rgba(239,68,68,0.1); 
          color: #f87171;
          border: 1px solid rgba(239,68,68,0.2); 
          border-radius: 8px; 
          cursor: pointer; 
          font-size: 0.9rem;
          font-weight: 600;
          transition: all 0.2s;
        }
        
        .admin-logout-btn:hover { 
          background: rgba(239,68,68,0.2); 
        }

        .admin-content-wrapper {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .admin-topbar {
          height: 70px;
          background: #fff;
          border-bottom: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 2rem;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .section-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #0f172a;
        }

        .topbar-right {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .topbar-search {
          position: relative;
          display: flex;
          align-items: center;
        }

        .search-icon {
          position: absolute;
          left: 0.75rem;
          font-size: 0.9rem;
          color: #94a3b8;
        }

        .topbar-search input {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 0.5rem 1rem 0.5rem 2.25rem;
          border-radius: 8px;
          width: 250px;
          font-size: 0.9rem;
          transition: all 0.2s;
        }

        .topbar-search input:focus {
          outline: none;
          border-color: #6366f1;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(99,102,241,0.1);
        }

        .topbar-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .icon-btn {
          background: none;
          border: none;
          padding: 0.5rem;
          cursor: pointer;
          font-size: 1.2rem;
          color: #64748b;
          border-radius: 8px;
          transition: background 0.2s;
        }

        .icon-btn:hover {
          background: #f1f5f9;
        }

        .user-profile {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding-left: 1rem;
          border-left: 1px solid #e2e8f0;
        }

        .user-avatar {
          width: 36px;
          height: 36px;
          background: #6366f1;
          color: #fff;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.85rem;
        }

        .user-info {
          display: flex;
          flex-direction: column;
        }

        .user-name {
          font-size: 0.875rem;
          font-weight: 600;
          color: #0f172a;
          line-height: 1.2;
        }

        .user-status {
          font-size: 0.75rem;
          color: #22c55e;
          font-weight: 500;
        }
        
        .admin-main { 
          flex: 1; 
          padding: 2rem; 
        }

        @media (max-width: 1024px) {
          .topbar-search input { width: 150px; }
        }
      `})]})},rp=()=>{const[s,j]=D.useState([]),[g,u]=D.useState(0);if(D.useEffect(()=>{Uh().then(j).catch(()=>j([]))},[]),D.useEffect(()=>{if(s.length<=1)return;const O=setInterval(()=>u(B=>(B+1)%s.length),5e3);return()=>clearInterval(O)},[s.length]),!s.length)return null;const h=s[g];return h?i.jsxs("div",{className:"top-offer-bar",style:{background:h.bg_color||"#6366f1",color:h.text_color||"#ffffff"},children:[i.jsxs("div",{className:"container top-offer-inner",children:[h.link_url?i.jsx("a",{href:h.link_url,target:"_blank",rel:"noopener noreferrer",className:"top-offer-link",children:h.text}):i.jsx("span",{children:h.text}),s.length>1&&i.jsx("div",{className:"top-offer-dots",children:s.map((O,B)=>i.jsx("button",{type:"button",className:`top-offer-dot ${B===g?"active":""}`,onClick:()=>u(B),"aria-label":`Offer ${B+1}`},B))})]}),i.jsx("style",{children:`
        .top-offer-bar { padding: 0.5rem 0; text-align: center; font-size: 0.9rem; font-weight: 500; }
        .top-offer-inner { display: flex; align-items: center; justify-content: center; gap: 1rem; flex-wrap: wrap; }
        .top-offer-link { color: inherit; text-decoration: none; }
        .top-offer-link:hover { text-decoration: underline; }
        .top-offer-dots { display: flex; gap: 0.25rem; }
        .top-offer-dot { width: 6px; height: 6px; border-radius: 50%; border: none; background: rgba(255,255,255,0.4); cursor: pointer; padding: 0; }
        .top-offer-dot.active { background: #fff; }
      `})]}):null},op=()=>{const{navigate:s}=tt(),[j,g]=D.useState([]),[u,h]=D.useState(!0);D.useEffect(()=>{Hh().then(g).catch(()=>g([])).finally(()=>h(!1))},[]);const N=O=>O?O.startsWith("http")?O:Ct(O):null;return i.jsxs("div",{className:"blog-list-page",children:[i.jsxs("div",{className:"container",children:[i.jsxs("header",{className:"blog-list-header",children:[i.jsx("h1",{children:"Blog"}),i.jsx("p",{className:"blog-list-sub",children:"Tips, updates, and stories from Zervo Company."})]}),u?i.jsx("div",{className:"blog-loading",children:"Loading…"}):i.jsx("div",{className:"blog-grid",children:j.map(O=>i.jsxs("article",{className:"blog-card",onClick:()=>s(`/blog/${O.slug}`),children:[i.jsx("div",{className:"blog-card-image-wrap",children:O.image_url?i.jsx("img",{src:N(O.image_url),alt:"",className:"blog-card-img"}):i.jsx("div",{className:"blog-card-placeholder"})}),i.jsxs("div",{className:"blog-card-body",children:[i.jsx("h2",{className:"blog-card-title",children:O.title}),i.jsx("p",{className:"blog-card-excerpt",children:O.excerpt||"Read more…"}),O.created_at&&i.jsx("time",{className:"blog-card-date",dateTime:O.created_at,children:new Date(O.created_at).toLocaleDateString("en-IN",{dateStyle:"long"})}),i.jsx("span",{className:"blog-card-cta",children:"Read article →"})]})]},O.id))}),!u&&!j.length&&i.jsx("div",{className:"blog-empty",children:i.jsx("p",{children:"No blog posts yet. Check back soon."})})]}),i.jsx("style",{children:`
        .blog-list-page { padding: 4rem 0; min-height: 70vh; background: #f8fafc; }
        .blog-list-header { text-align: center; margin-bottom: 3rem; }
        .blog-list-header h1 { font-size: 2.5rem; font-weight: 800; color: #0f172a; margin-bottom: 0.5rem; }
        .blog-list-sub { font-size: 1.1rem; color: #64748b; }
        .blog-loading, .blog-empty { text-align: center; padding: 3rem; color: #64748b; }
        .blog-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; align-items: stretch; }
        .blog-card {
          background: #fff; border-radius: 16px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.08);
          cursor: pointer; transition: transform 0.2s, box-shadow 0.2s; border: 1px solid #e2e8f0;
        }
        .blog-card:hover { transform: translateY(-4px); box-shadow: 0 12px 24px -8px rgba(0,0,0,0.12); }
        .blog-card-image-wrap { aspect-ratio: 16/10; overflow: hidden; background: #f1f5f9; }
        .blog-card-img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .blog-card-placeholder { width: 100%; height: 100%; background: linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%); }
        .blog-card-body { padding: 1.25rem 1.5rem; }
        .blog-card-title { font-size: 1.2rem; font-weight: 700; color: #0f172a; margin-bottom: 0.5rem; line-height: 1.3; }
        .blog-card-excerpt { font-size: 0.95rem; color: #64748b; line-height: 1.5; margin-bottom: 0.75rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .blog-card-date { font-size: 0.8rem; color: #94a3b8; display: block; margin-bottom: 0.5rem; }
        .blog-card-cta { font-size: 0.9rem; font-weight: 600; color: var(--color-secondary); }
        @media (max-width: 1024px) { .blog-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 768px) { .blog-grid { grid-template-columns: 1fr; } }
      `})]})},cp=({slug:s})=>{const{navigate:j}=tt(),[g,u]=D.useState(null),[h,N]=D.useState(!0);if(D.useEffect(()=>{s&&Rh(s).then(u).catch(()=>u(null)).finally(()=>N(!1))},[s]),h)return i.jsx("div",{className:"blog-detail-page",children:i.jsx("div",{className:"container",children:i.jsx("div",{className:"blog-loading",children:"Loading…"})})});if(!g)return i.jsx("div",{className:"blog-detail-page",children:i.jsxs("div",{className:"container",children:[i.jsx("p",{className:"blog-not-found",children:"Blog post not found."}),i.jsx("button",{type:"button",className:"blog-back-btn",onClick:()=>j("/blog"),children:"← Back to Blog"})]})});const O=g.image_url&&(g.image_url.startsWith("http")?g.image_url:Ct(g.image_url)),B=g.created_at?new Date(g.created_at).toLocaleDateString("en-IN",{dateStyle:"long"}):null;return i.jsxs("div",{className:"blog-detail-page",children:[i.jsx("article",{className:"blog-detail-article",children:i.jsxs("div",{className:"container blog-detail-inner",children:[i.jsx("button",{type:"button",className:"blog-back",onClick:()=>j("/blog"),children:"← Back to Blog"}),i.jsxs("header",{className:"blog-detail-header",children:[i.jsx("h1",{className:"blog-detail-title",children:g.title}),B&&i.jsx("time",{className:"blog-detail-date",dateTime:g.created_at,children:B})]}),O&&i.jsx("div",{className:"blog-detail-hero",children:i.jsx("img",{src:O,alt:"",className:"blog-detail-hero-img"})}),i.jsx("div",{className:"blog-detail-content",dangerouslySetInnerHTML:{__html:g.content||""}})]})}),i.jsx("style",{children:`
        .blog-detail-page { padding: 2rem 0 4rem; min-height: 70vh; background: #fff; }
        .blog-detail-inner { max-width: 720px; margin: 0 auto; }
        .blog-loading, .blog-not-found { padding: 3rem 0; color: #64748b; text-align: center; }
        .blog-back, .blog-back-btn {
          margin-bottom: 1.5rem; color: var(--color-secondary); font-size: 0.95rem; cursor: pointer;
          background: none; border: none; font-weight: 500; padding: 0;
        }
        .blog-back:hover, .blog-back-btn:hover { text-decoration: underline; }
        .blog-detail-header { margin-bottom: 1.5rem; }
        .blog-detail-title { font-size: 2.25rem; font-weight: 800; color: #0f172a; line-height: 1.2; margin-bottom: 0.5rem; }
        .blog-detail-date { font-size: 0.95rem; color: #64748b; }
        .blog-detail-hero { margin-bottom: 2rem; border-radius: 16px; overflow: hidden; background: #f1f5f9; }
        .blog-detail-hero-img { width: 100%; max-height: 420px; object-fit: cover; display: block; }
        .blog-detail-content { font-size: 1.05rem; line-height: 1.75; color: #334155; }
        .blog-detail-content p { margin-bottom: 1.25rem; }
        .blog-detail-content h2 { font-size: 1.5rem; font-weight: 700; color: #0f172a; margin-top: 2rem; margin-bottom: 0.75rem; }
        .blog-detail-content h3 { font-size: 1.25rem; font-weight: 600; margin-top: 1.5rem; margin-bottom: 0.5rem; }
        .blog-detail-content ul, .blog-detail-content ol { margin-bottom: 1.25rem; padding-left: 1.5rem; }
        .blog-detail-content li { margin-bottom: 0.35rem; }
        .blog-detail-content a { color: var(--color-secondary); text-decoration: underline; }
      `})]})},sp=({title:s,description:j,rating:g,reviewsCount:u,expertImage:h})=>i.jsxs("div",{className:"service-hero-section",children:[i.jsxs("div",{className:"container service-hero-inner",children:[i.jsxs("div",{className:"hero-content",children:[i.jsxs("div",{className:"badge",children:[i.jsx("span",{className:"dot"})," Live Now"]}),i.jsxs("h1",{children:["Get Best ",i.jsx("br",{}),i.jsx("span",{className:"highlight-text",children:s.replace("Get Best ","")})]}),i.jsx("svg",{className:"underline-svg",viewBox:"0 0 200 10",xmlns:"http://www.w3.org/2000/svg",children:i.jsx("path",{d:"M2,5 Q50,10 100,5 T200,5",fill:"none",stroke:"#FBBF24",strokeWidth:"3"})}),i.jsx("p",{className:"hero-desc",children:j}),i.jsxs("div",{className:"hero-rating",children:[i.jsx("span",{className:"stars",children:"★★★★★"}),i.jsx("span",{className:"rating-val",children:g}),i.jsxs("span",{className:"reviews-count",children:["| ",u," reviews"]})]}),i.jsxs("div",{className:"hero-actions",children:[i.jsx("button",{className:"btn-book",children:"Explore Services →"}),i.jsx("button",{className:"btn-call",children:"📞 Call Expert"})]})]}),i.jsx("div",{className:"hero-image-col",children:i.jsxs("div",{className:"expert-card",children:[i.jsxs("div",{className:"expert-badge",children:[i.jsx("span",{className:"icon",children:"🎧"}),i.jsxs("div",{className:"text",children:[i.jsx("span",{className:"label",children:"TOTAL"}),i.jsx("span",{className:"value",children:"25+ Services"})]})]}),i.jsx("img",{src:h&&(h.startsWith("http")?h:Ct(h))||"/vite.svg",alt:"Service Expert",className:"expert-img"}),i.jsxs("div",{className:"verified-badge",children:[i.jsx("img",{src:"/logo.png",className:"mini-logo",alt:""})," ",i.jsxs("div",{className:"info",children:[i.jsx("span",{className:"verified-text",children:"Verified Expert"}),i.jsx("span",{className:"expert-name",children:"Ramesh jha"})]})]})]})})]}),i.jsx("style",{children:`
        .service-hero-section {
          background-color: #FFFBF2; /* Light cream background */
          padding: 4rem 0;
          position: relative;
          overflow: hidden;
        }

        .service-hero-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          z-index: 2;
        }

        .hero-content {
          max-width: 50%;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          background: #fff;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
          font-size: 0.9rem;
          font-weight: 600;
          color: #333;
          margin-bottom: 1.5rem;
        }

        .badge .dot {
            height: 8px;
            width: 8px;
            background-color: #22c55e;
            border-radius: 50%;
            display: inline-block;
            margin-right: 0.5rem;
        }

        .service-hero-section h1 {
          font-size: 3.5rem;
          line-height: 1.1;
          font-weight: 800;
          color: #111;
          margin-bottom: 0.5rem;
        }

        .highlight-text {
          color: #EF4444; /* Red color */
        }
        
        .underline-svg {
            width: 250px;
            height: 20px;
            display: block;
            margin-bottom: 1.5rem;
            margin-top: -10px;
        }

        .hero-desc {
          font-size: 1.1rem;
          color: #555;
          margin-bottom: 2rem;
          line-height: 1.6;
          max-width: 90%;
        }

        .hero-rating {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 2rem;
          font-weight: 600;
        }

        .stars { color: #FBBF24; letter-spacing: 2px; }
        .rating-val { color: #111; font-weight: 800; }
        .reviews-count { color: #666; font-weight: 400; }

        .hero-actions {
          display: flex;
          gap: 1rem;
        }

        .btn-book {
          background-color: #111827;
          color: #fff;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          border: none;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
        }

        .btn-call {
          background-color: #fff;
          color: #111;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          border: 1px solid #e5e7eb;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
        }
        
        .hero-image-col {
            position: relative;
        }
        
        /* Yellow glow effect behind image */
        .hero-image-col::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 400px;
            height: 400px;
            background: radial-gradient(circle, rgba(253, 224, 71, 0.6) 0%, rgba(253, 224, 71, 0) 70%);
            z-index: -1;
        }

        .expert-card {
            position: relative;
            background: #2D3748; /* Dark background matching shirt/theme */
            border-radius: 20px;
            padding: 0;
            line-height: 0;
            /* overflow: hidden;  <-- REMOVED to allow badges to float outside */
            border: 4px solid #fff;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 400px; /* Adjusted to match proportion better */
            margin: 0 auto; /* Center it */
        }

        .expert-img {
            width: 100%;
            height: auto;
            object-fit: cover;
            display: block;
            border-radius: 16px; /* Match card radius minus border roughly */
        }
        
        .expert-badge {
            position: absolute;
            top: -20px; /* Float off the top */
            left: -20px; /* Float off the left */
            background: #fff;
            padding: 0.5rem 1rem;
            border-radius: 12px;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
            z-index: 10;
            min-width: 140px;
        }
        
        .expert-badge .icon {
            background: #DBEAFE;
            color: #2563EB; /* Blue icon color */
            padding: 8px;
            border-radius: 50%;
            font-size: 1.1rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .expert-badge .text {
            display: flex;
            flex-direction: column;
            line-height: 1.2;
        }
        
        .expert-badge .label { font-size: 0.6rem; color: #666; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; }
        .expert-badge .value { font-size: 0.85rem; color: #111; font-weight: 800; }

        .verified-badge {
            position: absolute;
            bottom: 20px;
            right: -30px; /* Float off the right */
            background: #fff;
            padding: 0.5rem 1rem 0.5rem 0.5rem;
            border-radius: 12px;
            display: flex;
            align-items: center;
            gap: 0.75rem;
            box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
            z-index: 10;
        }
        
        .verified-badge .mini-logo {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            object-fit: contain;
            background: #fff;
            border: 1px solid #eee;
        }
        
        .verified-badge .info {
            display: flex;
            flex-direction: column;
            line-height: 1.2;
            text-align: left;
        }
        
        .verified-badge .verified-text { font-size: 0.65rem; color: #999; }
        .verified-badge .expert-name { font-size: 0.9rem; color: #111; font-weight: 700; }
        
        @media (max-width: 768px) {
            .service-hero-inner {
                flex-direction: column;
                text-align: center;
            }
            
            .hero-content {
                max-width: 100%;
                margin-bottom: 3rem;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            
            .service-hero-section h1 {
                font-size: 2.5rem;
            }
            
             .underline-svg {
                margin: 0 auto 1.5rem auto;
            }
            
            .hero-actions {
                justify-content: center;
            }
        }

      `})]}),Lf=({title:s,subServices:j})=>{const{navigate:g}=tt(),u=j||[];return u.length===0?null:i.jsxs("div",{className:"service-types-section container",children:[i.jsx("h2",{className:"section-title",children:s||"Top Services"}),i.jsx("div",{className:"types-grid",children:u.map((h,N)=>i.jsxs("div",{className:"service-type-card",children:[i.jsxs("div",{className:"card-image",children:[i.jsx("img",{src:h.image&&(h.image.startsWith("http")?h.image:Ct(h.image))||"/vite.svg",alt:h.title}),i.jsxs("div",{className:"card-rating",children:["★ ",h.rating]})]}),i.jsxs("div",{className:"card-content",children:[i.jsx("h3",{children:h.title}),i.jsx("p",{className:"card-desc",children:h.description}),i.jsxs("div",{className:"card-footer",children:[i.jsxs("div",{className:"price-tag",children:[i.jsx("span",{className:"starts-from",children:"STARTS FROM"}),i.jsxs("span",{className:"price",children:["₹",h.price]})]}),i.jsx("button",{className:"btn-book-now",onClick:()=>g(`/book/${encodeURIComponent(h.title)}`),children:"Book Now"})]})]})]},N))}),i.jsx("style",{children:`
        .service-types-section {
          padding: 4rem 1rem;
        }

        .section-title {
          text-align: center;
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 3rem;
          color: #111;
        }

        .types-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          align-items: stretch;
        }

        .service-type-card {
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          overflow: hidden;
          transition: box-shadow 0.3s;
          background: #fff;
          display: flex;
          flex-direction: column;
          min-height: 0;
        }
        
        .service-type-card .card-content {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        
        .service-type-card .card-footer {
          margin-top: auto;
        }
        
        @media (max-width: 1024px) {
          .types-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .types-grid {
            grid-template-columns: 1fr;
          }
        }

        .service-type-card:hover {
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
        }

        .card-image {
          height: 180px;
          background: #f3f4f6;
          position: relative;
        }
        
        .card-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .card-rating {
          position: absolute;
          bottom: 10px;
          left: 10px;
          background: #fff;
          padding: 4px 8px;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 700;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .card-content {
          padding: 1.5rem;
        }

        .card-content h3 {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: #111;
        }

        .card-desc {
          font-size: 0.9rem;
          color: #666;
          margin-bottom: 1.5rem;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid #f3f4f6;
          padding-top: 1rem;
        }

        .price-tag {
            display: flex;
            flex-direction: column;
        }

        .starts-from {
            font-size: 0.65rem;
            color: #888;
            font-weight: 600;
            text-transform: uppercase;
        }

        .price {
            font-size: 1.2rem;
            font-weight: 800;
            color: #111;
        }

        .btn-book-now {
            background: #DBEAFE;
            color: #2563EB; /* Blue text */
            border: none;
            padding: 0.5rem 1.2rem;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.2s;
        }
        
        .btn-book-now:hover {
            background: #BFDBFE;
        }

      `})]})},up=({title:s,description:j})=>i.jsxs("div",{className:"service-about-section",children:[i.jsxs("div",{className:"container",children:[i.jsx("h2",{children:s}),i.jsx("div",{className:"about-text",children:j.split(`

`).map((g,u)=>i.jsx("p",{children:g},u))}),i.jsx("a",{href:"#book",className:"cta-link",children:"Book your service today and experience the Zervo Company difference!"})]}),i.jsx("style",{children:`
        .service-about-section {
          padding: 4rem 0;
          background-color: #ffffff;
        }

        .service-about-section h2 {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 2rem;
          color: #111;
        }

        .about-text p {
          font-size: 1.05rem;
          color: #4b5563;
          line-height: 1.7;
          margin-bottom: 1.5rem;
          max-width: 900px;
        }
        
        .cta-link {
            display: inline-block;
            color: #7C3AED; /* Purple-ish color from image */
            font-weight: 600;
            text-decoration: none;
            font-size: 1.1rem;
            margin-top: 1rem;
        }

      `})]}),dp=({title:s,rating:j,reviews:g})=>i.jsxs("div",{className:"service-testimonials-section container",children:[i.jsxs("div",{className:"header",children:[i.jsx("h2",{children:s}),i.jsxs("div",{className:"rating-summary",children:[i.jsx("span",{className:"stars",children:"★★★★★"}),i.jsxs("span",{className:"avg-rating",children:[j," Average Rating"]})]}),i.jsxs("p",{className:"subtitle",children:["The service was exceptional. Zervo Company technician came within 2 hours, addressed the issue with professional care, ",i.jsx("br",{}),"and ensured everything was perfect. Truly satisfied!"]})]}),i.jsx("div",{className:"reviews-grid",children:g.map((u,h)=>i.jsxs("div",{className:"review-card",children:[i.jsx("div",{className:"card-stars",children:"★".repeat(u.rating)}),i.jsxs("p",{className:"review-text",children:['"',u.text,'"']}),i.jsxs("div",{className:"reviewer-info",children:[i.jsx("div",{className:"avatar-initial",children:u.name.charAt(0)}),i.jsxs("div",{className:"details",children:[i.jsx("span",{className:"name",children:u.name}),i.jsx("span",{className:"location",children:u.location})]})]})]},h))}),i.jsxs("div",{className:"nav-arrows",children:[i.jsx("button",{className:"arrow-btn left",children:"←"}),i.jsx("button",{className:"arrow-btn right",children:"→"})]}),i.jsx("style",{children:`
        .service-testimonials-section {
          padding: 4rem 1rem;
          position: relative;
        }

        .header h2 {
            font-size: 2.5rem;
            font-weight: 800;
            margin-bottom: 1rem;
            color: #111;
        }

        .rating-summary {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-weight: 600;
            margin-bottom: 1rem;
        }
        
        .rating-summary .stars { color: #FBBF24; }
        .rating-summary .avg-rating { color: #555; }
        
        .subtitle {
            font-size: 1rem;
            color: #666;
            margin-bottom: 3rem;
            font-style: italic;
        }
        
        .reviews-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
        }
        
        .review-card {
            border: 1px solid #f3f4f6;
            border-radius: 12px;
            padding: 2rem;
            background: #fff;
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
        }
        
        .card-stars {
            color: #FBBF24;
            margin-bottom: 1rem;
            letter-spacing: 2px;
        }
        
        .review-text {
            font-style: italic;
            color: #4b5563;
            line-height: 1.6;
            margin-bottom: 1.5rem;
            min-height: 80px;
        }
        
        .reviewer-info {
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        
        .avatar-initial {
            width: 40px;
            height: 40px;
            background-color: #DBEAFE;
            color: #1E40AF;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
        }
        
        .reviewer-info .details {
            display: flex;
            flex-direction: column;
        }
        
        .reviewer-info .name { font-weight: 700; color: #111; }
        .reviewer-info .location { font-size: 0.8rem; color: #888; }
        
        .nav-arrows {
            position: absolute;
            top: 4rem;
            right: 1rem;
            display: flex;
            gap: 0.5rem;
        }
        
        .arrow-btn {
            width: 40px;
            height: 40px;
            border-radius: 8px;
            border: 1px solid #e5e7eb;
            background: #fff;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s;
        }
        
        .arrow-btn:hover {
            background: #f9fafb;
            border-color: #d1d5db;
        }

      `})]}),fp=({serviceIdParam:s})=>{const{navigate:j}=tt(),{data:g}=Cl(),u=s||"",h=g?.[u];return D.useEffect(()=>{window.scrollTo(0,0)},[u]),h?i.jsxs("div",{className:"service-page",children:[i.jsx(sp,{title:h.title,description:h.description,rating:h.rating,reviewsCount:h.reviewsCount,expertImage:h.expertImage}),h.categories?h.categories.map(N=>i.jsx(Lf,{title:N.title,subServices:N.services},N.id)):i.jsx(Lf,{title:`Top ${h.title} Experts`,subServices:h.subServices}),i.jsx(dp,{title:`Customer Reviews – ${h.title}`,rating:h.rating,reviews:h.reviews}),i.jsx(up,{title:h.about?.title,description:h.about?.description}),i.jsx(Vf,{}),i.jsx(Kf,{}),i.jsx(Jf,{})]}):(setTimeout(()=>j("/"),0),null)},mp=()=>{const{currentPath:s}=tt(),j=s==="/admin"||s.startsWith("/admin/"),g=()=>typeof localStorage<"u"&&!!localStorage.getItem("admin_token"),u=s.match(/^\/service\/([^/]+)$/);let h;if(j)h=g()?i.jsx(ip,{}):i.jsx(Ih,{});else if(s==="/"||s==="")h=i.jsx(qf,{});else if(u)h=i.jsx(fp,{serviceIdParam:u[1]});else if(s.startsWith("/book/")){const B=s.split("/book/")[1];h=i.jsx(Jh,{serviceName:B})}else s==="/partner"?h=i.jsx(Kh,{}):s==="/contact"?h=i.jsx(Wh,{}):s==="/about"?h=i.jsx(Fh,{}):s==="/privacy"?h=i.jsx($h,{}):s==="/terms"?h=i.jsx(Ph,{}):s==="/blog"?h=i.jsx(op,{}):s.match(/^\/blog\/([^/]+)$/)?h=i.jsx(cp,{slug:s.match(/^\/blog\/([^/]+)$/)[1]}):h=i.jsx(qf,{});const O=["/partner","/contact","/about","/privacy","/terms"].includes(s)||j;return i.jsxs("div",{className:"app-container",children:[!O&&i.jsx(rp,{}),!O&&i.jsx(Cn,{}),h,!O&&i.jsx(Ml,{})]})},gp=()=>i.jsx(Ah,{children:i.jsx(mp,{})});function hp({children:s}){const[j,g]=D.useState(!1);return D.useEffect(()=>{Bh().then(u=>{if(u&&typeof document<"u"){const h=document.documentElement;u.primary_color&&h.style.setProperty("--color-primary",u.primary_color),u.secondary_color&&h.style.setProperty("--color-secondary",u.secondary_color),u.accent_color&&h.style.setProperty("--color-accent",u.accent_color),u.bg_color&&h.style.setProperty("--color-bg",u.bg_color)}}).catch(()=>{}).finally(()=>g(!0))},[]),s}function pp(){return i.jsx(hp,{children:i.jsx(qh,{children:i.jsx(gp,{})})})}_h.createRoot(document.getElementById("root")).render(i.jsx(D.StrictMode,{children:i.jsx(pp,{})}));
